const TABLE_NAME = "writing_submissions";

function sendJson(res, status, payload) {
  res.status(status).json(payload);
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return { url, key, configured: Boolean(url && key) };
}

function normalizeText(value, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function buildRow(body) {
  return {
    learner_id: normalizeText(body.learnerId, "匿名"),
    learner_group: normalizeText(body.learnerGroup, "未分组"),
    hsk_level: normalizeText(body.level, "HSK 3"),
    topic: normalizeText(body.topic, "未命名题目"),
    chars: Number(body.chars || 0),
    sentences: Number(body.sentences || 0),
    score: Number(body.score || 0),
    dimension_scores: Array.isArray(body.dimensions) ? body.dimensions : [],
    problem_tags: Array.isArray(body.problemTags) ? body.problemTags : [],
    essay_text: normalizeText(body.text),
    report: normalizeText(body.report),
    user_agent: normalizeText(body.userAgent)
  };
}

function readBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch (error) {
      return {};
    }
  }
  return req.body || {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, message: "Method not allowed" });
  }

  const config = getSupabaseConfig();
  if (!config.configured) {
    return sendJson(res, 200, {
      ok: false,
      configured: false,
      message: "Supabase is not configured. Local corpus fallback can still be used."
    });
  }

  try {
    const row = buildRow(readBody(req));

    if (!row.essay_text) {
      return sendJson(res, 400, { ok: false, message: "essay_text is required" });
    }

    const response = await fetch(`${config.url}/rest/v1/${TABLE_NAME}`, {
      method: "POST",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify(row)
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return sendJson(res, 502, {
        ok: false,
        configured: true,
        message: "Supabase insert failed",
        error: data
      });
    }

    return sendJson(res, 200, {
      ok: true,
      configured: true,
      record: Array.isArray(data) ? data[0] : data
    });
  } catch (error) {
    return sendJson(res, 500, {
      ok: false,
      configured: true,
      message: "Submit API failed",
      error: error.message
    });
  }
}
