import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Resolve correct path for embedded logo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Rate Limiting to avoid spam bots
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 2, // Allow max 5 requests per minute per IP
  message: { success: false, message: "Too many attempts. Try again later." }
});
app.use("/api/", limiter);

// Honeypot field name
const HONEYPOT_FIELD = "website";

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD
  }
});

// Email footer
const emailFooter = `
<hr style="border:0;height:1px;background:#e0e0e0">
<p style="font-size:13px;color:#444;text-align:left;margin-top:12px;">
<strong>Jankalyan Blood Bank</strong><br>
Pune, Maharashtra<br>
📞 +02024449527<br>
<i>Welfare of People</i>
</p>`;

// Shared function to embed logo and wrap HTML
const generateHtml = (title, content) => `
<div style="font-family:'Segoe UI',Arial,sans-serif;background:#ffffff;padding:20px;border-radius:8px;color:#111;">
  <div style="text-align:center;">
    <img src="cid:bloodlogo" width="90" height="90" style="margin-bottom:10px"/>
  </div>
  <h2 style="color:#b30000;text-align:center;">${title}</h2>
  <div style="font-size:15px;line-height:1.6;">
    ${content}
  </div>
  ${emailFooter}
</div>
`;

// Logo attachment config
const logoAttachment = {
  filename: "blooddrop.png",
  path: path.join(__dirname, "blooddrop.png"), // ensure file exists inside backend folder
  cid: "bloodlogo"
};


//✅ CONTACT FORM EMAIL

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message, [HONEYPOT_FIELD]: website } = req.body;

  if (website) return res.json({ success: true }); // Honeypot trap

  const content = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br>${message}</p>`;

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.BLOODBANK_EMAIL,
    subject: `New Query: ${subject}`,
    html: generateHtml("New Contact Form Submission", content),
    attachments: [logoAttachment]
  };

  const autoReply = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: `Thanks for contacting us: ${subject}`,
    html: generateHtml(
      "Thank You For Reaching Out",
      `<p>Hello ${name},</p>
       <p>We have received your message. Our team will get back to you soon.</p>
       <p><strong>Your Message:</strong><br>${message}</p>`
    ),
    attachments: [logoAttachment]
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReply);
    res.json({ success: true });
  } catch (error) {
    console.error("Contact Email Error:", error);
    res.json({ success: false });
  }
});


//✅ DONOR ENROLLMENT EMAIL

app.post("/api/enroll", async (req, res) => {
  const { name, email, phone, bloodType, city, [HONEYPOT_FIELD]: website } = req.body;

  if (website) return res.json({ success: true }); // Honeypot trap

  const content = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Blood Type:</strong> ${bloodType}</p>
    <p><strong>City:</strong> ${city}</p>`;

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.BLOODBANK_EMAIL,
    subject: "New Donor Registration",
    html: generateHtml("New Donor Registered", content),
    attachments: [logoAttachment]
  };

  const autoReply = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Thank You For Registering",
    html: generateHtml(
      "You Are Now a Life Saver",
      `<p>Dear ${name},</p>
       <p>Thank you for registering as a noble blood donor.</p>
       <p>We will contact you when someone needs ${bloodType} blood in ${city}.</p>`
    ),
    attachments: [logoAttachment]
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReply);
    res.json({ success: true });
  } catch (error) {
    console.error("Enroll Email Error:", error);
    res.json({ success: false });
  }
});

/* --------------------------
    ✅ START SERVER
---------------------------*/
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running at: http://localhost:${PORT}`));
