import type { NextRequest } from "next/server";

/* ── HTML escaping ─────────────────────────────────────────────────── */
const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape user input before interpolating it into email HTML. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/** Return a copy of the payload with every string value HTML-escaped. */
export function escapeFields<T extends object>(payload: T): T {
  const out = { ...payload } as Record<string, unknown>;
  for (const [key, value] of Object.entries(out)) {
    if (typeof value === "string") out[key] = escapeHtml(value);
  }
  return out as T;
}

/* ── Validation ────────────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 3000;

/** Returns an error message if any field is malformed or too long, else null. */
export function validateFields(fields: Record<string, unknown>): string | null {
  for (const [key, value] of Object.entries(fields)) {
    if (value == null) continue;
    if (typeof value !== "string") return "Invalid form data.";
    const max = key === "message" ? MAX_MESSAGE_LENGTH : MAX_FIELD_LENGTH;
    if (value.length > max) return "One of the fields is too long.";
  }
  if (typeof fields.email === "string" && !EMAIL_RE.test(fields.email)) {
    return "Please enter a valid email address.";
  }
  return null;
}

/* ── Bot detection ─────────────────────────────────────────────────── */
/** Humans take at least this long to fill out either form. */
const MIN_FILL_MS = 3000;

/**
 * True when the submission looks automated: the hidden honeypot field was
 * filled in, or the form was submitted faster than a person could type.
 * Callers should respond with a fake success so bots don't adapt.
 */
export function looksLikeBot(body: { website?: unknown; elapsedMs?: unknown }): boolean {
  if (typeof body.website === "string" && body.website.trim() !== "") return true;
  if (typeof body.elapsedMs !== "number" || body.elapsedMs < MIN_FILL_MS) return true;
  return false;
}

/* ── Rate limiting ─────────────────────────────────────────────────── */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/**
 * Best-effort per-IP limit: 5 submissions per 10 minutes. State lives in
 * the function instance's memory, so it resets on cold starts and isn't
 * shared across instances — enough to stop a single script hammering the
 * form, not a distributed attack.
 */
export function isRateLimited(req: NextRequest, bucket: string): boolean {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived instance
  if (hits.size > 5000) {
    hits.forEach((times, k) => {
      if (now - times[times.length - 1] >= WINDOW_MS) hits.delete(k);
    });
  }

  return recent.length > MAX_PER_WINDOW;
}
