import nodemailer from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, phone, message } = JSON.parse(event.body || "{}");
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true", // true for 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Kihew Awasis Contact" <no-reply@${process.env.MAIL_DOMAIN || "example.com"}>`,
    to: "info@kihewawasiswakamik.com",
    replyTo: email,
    subject: `New message from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      message,
    ].join("\n"),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  };
}
