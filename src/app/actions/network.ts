"use server";

import nodemailer from "nodemailer";

export async function submitNetworkForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const institution = formData.get("institution") as string;

  if (!name || !email || !institution) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || '"Women in WACREN" <noreply@wacren.net>',
      to: process.env.CONTACT_EMAIL_TO || "wiw@wacren.net",
      replyTo: email,
      subject: `New Network Join Request from ${name}`,
      text: `
You have received a new request to join the Women-in-WACREN Network.

Name: ${name}
Email: ${email}
Institution: ${institution}
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to submit request. Please try again later." };
  }
}
