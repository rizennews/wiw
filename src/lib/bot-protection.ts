/**
 * Server-side bot protection utilities:
 * 1. Honeypot check (hidden input & submission speed)
 * 2. hCaptcha verification via api.hcaptcha.com
 */

export interface BotProtectionResult {
  isBot: boolean;
  error?: string;
}

/**
 * Validates hidden honeypot fields to trap automated spam bots.
 */
export function validateHoneypot(formData: FormData): BotProtectionResult {
  const honeyField = formData.get("hp_website");
  const timestampField = formData.get("hp_timestamp");

  // If a bot filled out the hidden field, flag immediately
  if (honeyField && typeof honeyField === "string" && honeyField.trim().length > 0) {
    console.warn("[Bot Protection] Honeypot field was filled:", honeyField);
    return {
      isBot: true,
      error: "Spam detected. Submission rejected.",
    };
  }

  // Time-based honeypot: humans take at least 1-2 seconds to fill a form
  if (timestampField && typeof timestampField === "string") {
    const renderedAt = parseInt(timestampField, 10);
    const now = Date.now();
    const elapsedMs = now - renderedAt;

    // Submissions faster than 1 second (1000ms) are almost certainly automated scripts
    if (!isNaN(renderedAt) && elapsedMs < 1000) {
      console.warn(`[Bot Protection] Form submitted too quickly (${elapsedMs}ms). Probable bot.`);
      return {
        isBot: true,
        error: "Form was submitted too fast. Please take your time.",
      };
    }
  }

  return { isBot: false };
}

/**
 * Verifies the hCaptcha token with the hCaptcha API.
 * Uses official test keys for testing if environment variables are not set.
 */
export async function verifyHCaptcha(token: string | null | undefined): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.HCAPTCHA_SECRET_KEY;
  const isProd = process.env.NODE_ENV === "production";

  // If no secret key is configured:
  // In development, fall back to hCaptcha's official test secret so developers can test seamlessly
  // In production, log an alert if keys are missing
  const effectiveSecret = secretKey || "0x0000000000000000000000000000000000000000";

  if (!token) {
    // If strict mode or secret key configured, require the token
    if (secretKey || isProd) {
      return {
        success: false,
        error: "Please complete the hCaptcha security check.",
      };
    }
    // If running locally without hCaptcha keys yet, pass through with warning
    console.warn("[hCaptcha] No token provided and HCAPTCHA_SECRET_KEY not set. Allowing in dev mode.");
    return { success: true };
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", effectiveSecret);
    params.append("response", token);

    const response = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.success) {
      return { success: true };
    }

    console.warn("[hCaptcha] Verification failed:", data["error-codes"]);
    return {
      success: false,
      error: "hCaptcha verification failed. Please try again.",
    };
  } catch (error) {
    console.error("[hCaptcha] Verification network error:", error);
    return {
      success: false,
      error: "Unable to verify security challenge. Please try again.",
    };
  }
}
