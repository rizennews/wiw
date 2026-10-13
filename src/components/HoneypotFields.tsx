"use client";

import React, { useRef } from "react";

/**
 * Invisible honeypot fields for bot detection:
 * 1. hp_website: hidden text input. Automated bots crawl and fill every input.
 *    Humans never see or interact with it.
 * 2. hp_timestamp: records the exact millisecond when the form mounted.
 *    Bots that submit forms in < 1 second are flagged.
 */
export function HoneypotFields() {
  const mountedAtRef = useRef<number>(Date.now());

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: "1px",
        height: "1px",
        opacity: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <label htmlFor="hp_website">Leave this field blank</label>
      <input
        type="text"
        id="hp_website"
        name="hp_website"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
      <input
        type="hidden"
        name="hp_timestamp"
        defaultValue={mountedAtRef.current}
      />
    </div>
  );
}
