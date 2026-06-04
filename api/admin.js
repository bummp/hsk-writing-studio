const TABLE_NAME = "writing_submissions";

function sendJson(res, status, payload) {
  res.status(status).json(payload);
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const password = process.env.ADMIN_PASSWORD;
  return { url, key, password, configured: Boolean(url && key && password) };
}

function toCamelRecord(row) {
  return {
    id: row.id,
    createdAt: row.created_at,
    learnerId: row.learner_id || "匿名",
    learnerGroup: row.learner_group || "未分组",
    level: row.hsk_level || "HSK 3",
    topic: row.topic || "未命名题目",
    chars: Number(row.chars || 0),
    sentences: Number(row.sentences || 0),
    score: Number(row.score || 0),
    dimensions: Array.isArray(row.dimension_scores) ? row.dimension_scores : [],
    problemTags: Array.isArray(row.problem_tags) && row.problem_tags.length ? row.problem_tags : ["旧记录"],
    text: row.essay_text || "",
    report: row.report || ""
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
      message: "ADMIN_PASSWORD, SUPABASE_URL, or SUPABASE_SERVICE_ROLE_KEY is not configured."
    });
  }

  const { password } = readBody(req);
  if (password !== config.password) {
    return sendJson(res, 401, { ok: false, configured: true, message: "Invalid admin password" });
  }

  try {
    const response = await fetch(
      `${config.url}/rest/v1/${TABLE_NAME}?select=*&order=created_at.desc&limit=500`,
      {
        headers: {
          apikey: config.key,
          Authorization: `Bearer ${config.key}`
        }
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return sendJson(res, 502, {
        ok: false,
        configured: true,
        message: "Supabase select failed",
        error: data
      });
    }

    return sendJson(res, 200, {
      ok: true,
      configured: true,
      records: Array.isArray(data) ? data.map(toCamelRecord) : []
    });
  } catch (error) {
    return sendJson(res, 500, {
      ok: false,
      configured: true,
      message: "Admin API failed",
      error: error.message
    });
  }
}
