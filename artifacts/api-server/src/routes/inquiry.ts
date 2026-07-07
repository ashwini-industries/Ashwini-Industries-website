import { Router } from "express";
import nodemailer from "nodemailer";
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

  const { name, company, email, phone, country, quantity, products, message } = parsed.data;

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    req.log.error("GMAIL_USER or GMAIL_APP_PASSWORD not configured");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const subject = `New Export Inquiry from ${name} — ${company} (${country})`;
  const text = [
    `Name:     ${name}`,
    `Company:  ${company}`,
    `Email:    ${email}`,
    phone ? `Phone:    ${phone}` : null,
    `Country:  ${country}`,
    quantity ? `Quantity: ${quantity}` : null,
    `Products: ${products.join(", ")}`,
    message ? `\nMessage:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"Ashwini Industries Website" <${gmailUser}>`,
      to: "jagdish2319@gmail.com",
      replyTo: email,
      subject,
      text,
    });

    req.log.info({ name, company, country }, "Inquiry email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send inquiry email");
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
