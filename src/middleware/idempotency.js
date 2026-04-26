// ESD-112 — Idempotency keys for settlement webhook
//
// Webhook handlers now look for an Idempotency-Key header and short-circuit duplicates via a 1h TTL cache. Stops the double-credit class of bug.

// Generated for the eSpace Dev Hub mock repo to drive realistic
// dashboard activity. Replace with the real implementation.
