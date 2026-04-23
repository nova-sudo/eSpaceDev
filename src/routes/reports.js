import { Router } from "express";

const router = Router();

router.get("/reports", (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const size = Math.min(100, Math.max(1, parseInt(req.query.size, 10) || 20));
  const offset = (page - 1) * size;
  res.json({ page, size, offset, items: [] });
});

export default router;
