import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Route: POST /api/contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Nama, email, dan pesan wajib diisi.",
      });
    }

    // Log ke konsol server
    console.log("=== PESAN KONTAK BARU (EXPRESS SERVER) ===");
    console.log(`Dari    : ${name} (${email})`);
    console.log(`Subjek  : ${subject || "Tanpa subjek"}`);
    console.log(`Pesan   : ${message}`);
    console.log("==========================================");

    // Kirim email notifikasi jika SMTP dikonfigurasi di .env
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.RECEIVER_EMAIL || "msafalazhar@gmail.com",
        subject: `[Portofolio Web] ${subject || "Pesan Baru dari " + name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #1d4ed8; border-bottom: 2px solid #1d4ed8; padding-bottom: 10px;">Pesan Kontak Baru</h2>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subjek:</strong> ${subject || "-"}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #1d4ed8; border-radius: 4px;">
              <p style="white-space: pre-wrap; margin: 0; color: #333333;">${message}</p>
            </div>
            <hr style="margin: 25px 0 15px 0; border: 0; border-top: 1px solid #dddddd;" />
            <p style="font-size: 12px; color: #777777;">Pesan ini dikirim melalui backend Express.js portofolio Anda.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email notifikasi berhasil dikirim.");
    }

    return res.status(200).json({
      success: true,
      message: "Pesan berhasil dikirim! Saya akan segera merespons.",
    });
  } catch (error) {
    console.error("Error saat mengirim pesan:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan di server saat mengirim pesan.",
    });
  }
});

// Sajikan file statis frontend di produksi (dist/)
const distPath = path.join(__dirname, "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
  console.log(`Endpoint kontak tersedia di http://localhost:${PORT}/api/contact`);
});
