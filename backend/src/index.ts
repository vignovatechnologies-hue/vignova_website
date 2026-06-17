import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/api/healthz", (_req, res) => {
  res.json({ status: "ok", service: "Vignova API Server" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, company, subject, message } = req.body;

  console.log("📩 New contact form submission:");
  console.log(`  Name:    ${name}`);
  console.log(`  Email:   ${email}`);
  console.log(`  Company: ${company || "—"}`);
  console.log(`  Subject: ${subject}`);
  console.log(`  Message: ${message}`);

  res.json({ success: true, message: "Message received!" });
});

app.listen(PORT, () => {
  console.log(`Vignova API Server running on http://localhost:${PORT}`);
});