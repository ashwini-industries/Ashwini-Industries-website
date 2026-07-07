import { Router } from "express";
import { z } from "zod";
import { logger } from "../lib/logger";

const router = Router();

const inquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().min(2),
  quantity: z.string().optional(),
  products: z.array(z.string()).min(1),
  message: z.string().optional(),
});

router.post("/inquiry", async (req, res) => {
  const parsed = inquirySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data" });
    return;
  }

  const { name, company, email, phone, country, quantity, products, message } =
    parsed.data;

  const accessKey = process.env["VITE_WEB3FORMS_KEY"];
  if (!accessKey) {
    req.log.error("VITE_WEB3FORMS_KEY not configured");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const payload = {
    access_key: accessKey,
    subject: `Export Inquiry from ${name} — ${company} (${country})`,
    from_name: name,
    replyto: email,
    name,
    company,
    email,
    phone: phone || "—",
    country,
    quantity: quantity || "—",
    products: products.join(", "),
    message: message || "—",
  };

  try {
    const w3res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await w3res.json()) as { success: boolean; message?: string };

    if (data.success) {
      req.log.info({ name, company, country }, "Inquiry email sent");
      res.json({ success: true });
    } else {
      req.log.error({ message: data.message }, "Web3Forms rejected submission");
      res.status(502).json({ error: data.message ?? "Email service error" });
    }
  } catch (err) {
    logger.error({ err }, "Failed to reach Web3Forms");
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
