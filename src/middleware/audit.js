export function audit(tag) {
  return (req, _res, next) => {
    const entry = {
      ts: new Date().toISOString(),
      tag,
      userId: req.user?.id ?? null,
      method: req.method,
      path: req.path,
      ip: req.ip,
    };
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(entry));
    next();
  };
}
