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

  const { password, id } = readBody(req);
  if (password !== config.password) {
    return sendJson(res, 401, { ok: false, configured: true, message: "Invalid admin password" });
  }

  if (!id) {
    return sendJson(res, 400, { ok: false, configured: true, message: "id is required" });
  }

  try {
    const response = await fetch(`${config.url}/rest/v1/${TABLE_NAME}?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        Prefer: "return=minimal"
      }
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return sendJson(res, 502, {
        ok: false,
        configured: true,
        message: "Supabase delete failed",
        error: data
      });
    }

    return sendJson(res, 200, { ok: true, configured: true });
  } catch (error) {
    return sendJson(res, 500, {
      ok: false,
      configured: true,
      message: "Delete API failed",
      error: error.message
    });
  }
}
