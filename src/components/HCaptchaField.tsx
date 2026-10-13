"use client";

import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export interface HCaptchaFieldHandle {
  reset: () => void;
  getToken: () => string;
}

interface HCaptchaFieldProps {
  onVerify?: (token: string) => void;
  onExpire?: () => void;
  className?: string;
}

export const HCaptchaField = forwardRef<HCaptchaFieldHandle, HCaptchaFieldProps>(
  function HCaptchaField({ onVerify, onExpire, className = "" }, ref) {
    const captchaRef = useRef<HCaptcha>(null);
    const [token, setToken] = useState<string>("");

    // Official hCaptcha test site key if no custom key provided in env
    const siteKey =
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001";

    useImperativeHandle(ref, () => ({
      reset: () => {
        setToken("");
        captchaRef.current?.resetCaptcha();
      },
      getToken: () => token,
    }));

    function handleVerify(newToken: string) {
      setToken(newToken);
      onVerify?.(newToken);
    }

    function handleExpire() {
      setToken("");
      onExpire?.();
    }

    return (
      <div className={`flex flex-col items-start my-2 ${className}`}>
        <HCaptcha
          ref={captchaRef}
          sitekey={siteKey}
          onVerify={handleVerify}
          onExpire={handleExpire}
          onError={(err) => {
            console.warn("[hCaptcha] Error:", err);
          }}
          theme="light"
          size="normal"
        />
        {/* Hidden input to pass token inside standard form actions */}
        <input
          type="hidden"
          name="h-captcha-response"
          value={token}
          readOnly
        />
      </div>
    );
  }
);
