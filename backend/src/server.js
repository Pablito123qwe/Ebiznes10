const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const DATA_PATH = path.join(__dirname, "data.json");

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/data", (_req, res) => {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  res.json(JSON.parse(raw));
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Backend listening on ${port}`));
}
