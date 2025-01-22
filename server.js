import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.resolve();

const app = express();
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`Running on port ${process.env.PORT || 3001}`);
});

app.use(express.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});
