import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ service: "eSpaceDev", version: "0.1.0" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`eSpaceDev listening on :${PORT}`);
});
