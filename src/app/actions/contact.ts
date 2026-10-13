"use server";

import nodemailer from "nodemailer";
import { validateHoneypot, verifyHCaptcha } from "@/lib/bot-protection";

export async function submitContactForm(formData: FormData) {
  // 1. Honeypot Bot Validation
  const honeypotResult = validateHoneypot(formData);
  if (honeypotResult.isBot) {
    return { success: false, error: honeypotResult.error || "Security verification failed." };
  }

  // 2. hCaptcha Verification
  const captchaToken = formData.get("h-captcha-response") as string;
  const captchaResult = await verifyHCaptcha(captchaToken);
  if (!captchaResult.success) {
    return { success: false, error: captchaResult.error || "Please complete the security check." };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  // All contact form fills are sent to wiw@wacren.net
  const recipient = process.env.CONTACT_EMAIL_TO || "wiw@wacren.net";

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
      from: process.env.SMTP_FROM_EMAIL || '"Women In WACREN" <noreply@wacren.net>',
      to: recipient,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}${role ? ` (${role})` : ''}`,
      text: `
You have received a new contact form submission on the Women-In-WACREN website.

Name: ${name}
Email: ${email}
Role: ${role || 'Not specified'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #073869; color: #ffffff; padding: 20px 24px;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 600;">New Contact Form Submission</h2>
            <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.85;">Women-In-WACREN Website</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 100px; color: #475569;">Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
              </tr>
              ${role ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #475569;">Role:</td><td style="padding: 8px 0; color: #0f172a;">${role}</td></tr>` : ''}
            </table>
            <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 16px; border-radius: 4px;">
              <p style="margin: 0 0 8px; font-weight: 600; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</p>
              <p style="margin: 0; white-space: pre-wrap; color: #1e293b;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 12px; color: #64748b; text-align: center;">
            Sent automatically to <strong>wiw@wacren.net</strong> via the Women-In-WACREN portal
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error(`Failed to send email to ${recipient}:`, error);
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
      console.warn(`[DEV MODE] SMTP not configured. Form submission from ${name} (<${email}>) intended for ${recipient}:`, { name, email, role, message });
      return { success: true };
    }
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
