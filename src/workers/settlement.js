export class RetryPolicy {
  constructor({ maxAttempts = 3, baseDelayMs = 500 } = {}) {
    this.maxAttempts = maxAttempts;
    this.baseDelayMs = baseDelayMs;
  }
  delayFor(attempt) {
    return this.baseDelayMs * 2 ** (attempt - 1);
  }
}

export async function processSettlement(job, policy = new RetryPolicy()) {
  for (let attempt = 1; attempt <= policy.maxAttempts; attempt++) {
    try {
      return await job();
    } catch (err) {
      if (attempt === policy.maxAttempts) throw err;
      await new Promise((r) => setTimeout(r, policy.delayFor(attempt)));
    }
  }
}
