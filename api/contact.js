import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Debug endpoint - GET request to check env vars
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      hasReceiverEmail: !!process.env.RECEIVER_EMAIL,
      emailUser: process.env.EMAIL_USER ? process.env.EMAIL_USER.substring(0, 3) + "***" : "NOT SET",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed. Mohon gunakan metode POST.",
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Nama, email, dan pesan wajib diisi.",
      });
    }

    // Log pesan masuk di server logs
    console.log("=== PESAN KONTAK BARU ===");
    console.log(`Dari    : ${name} (${email})`);
    console.log(`Subjek  : ${subject || "Tanpa subjek"}`);
    console.log(`Pesan   : ${message}`);
    console.log("=========================");

    // Cek apakah environment variables sudah diset
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("ERROR: EMAIL_USER atau EMAIL_PASS belum diset!");
      console.error("EMAIL_USER:", process.env.EMAIL_USER ? "SET" : "NOT SET");
      console.error("EMAIL_PASS:", process.env.EMAIL_PASS ? "SET" : "NOT SET");
      return res.status(500).json({
        success: false,
        message: "Konfigurasi email belum lengkap. Hubungi admin.",
      });
    }

    // Gunakan konfigurasi SMTP Gmail yang explicit
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verifikasi koneksi SMTP dulu
    await transporter.verify();
    console.log("SMTP connection verified successfully!");

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
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
          <p style="font-size: 12px; color: #777777;">Pesan ini dikirim secara otomatis melalui formulir kontak di situs portofolio Anda.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email berhasil terkirim!");

    return res.status(200).json({
      success: true,
      message: "Pesan berhasil dikirim!",
    });
  } catch (error) {
    console.error("Error detail:", error.code, error.message);
    
    let userMessage = "Gagal mengirim pesan. Silakan coba lagi.";
    
    if (error.code === "EAUTH") {
      userMessage = "Autentikasi email gagal. Password aplikasi mungkin salah.";
    } else if (error.code === "ESOCKET" || error.code === "ECONNECTION") {
      userMessage = "Tidak dapat terhubung ke server email.";
    } else if (error.code === "ETIMEDOUT") {
      userMessage = "Koneksi timeout. Silakan coba lagi.";
    }

    return res.status(500).json({
      success: false,
      message: userMessage,
      debug: error.code || "UNKNOWN",
    });
  }
}
