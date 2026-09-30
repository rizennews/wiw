"use client";

import * as React from "react";

export function DeveloperFootprint() {
  React.useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).__PADMORE_ANING_FOOTPRINT__) {
      (window as any).__PADMORE_ANING_FOOTPRINT__ = true;

      const dottedBanner = [
        "  ●●●    ●●  ●●●   ●   ●   ●●  ●●●   ●●●●",
        "  ●  ●  ●  ● ●  ●  ●● ●●  ●  ● ●  ●  ●   ",
        "  ●●●   ●●●● ●  ●  ● ● ●  ●  ● ●●●   ●●● ",
        "  ●     ●  ● ●  ●  ●   ●  ●  ● ●  ●  ●   ",
        "  ●     ●  ● ●●●   ●   ●   ●●  ●  ●  ●●●●",
        "",
        "        ●●  ●   ● ●●● ●   ●  ●●●●",
        "       ●  ● ●●  ●  ●  ●●  ● ●    ",
        "       ●●●● ● ● ●  ●  ● ● ● ● ●●●",
        "       ●  ● ●  ●●  ●  ●  ●● ●   ●",
        "       ●  ● ●   ● ●●● ●   ●  ●●●●",
      ].join(String.fromCharCode(10));

      const nl = String.fromCharCode(10);

      console.log(
        `%c${nl}${dottedBanner}${nl}`,
        "display: block; color: #CBD5E1; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; line-height: 1.25; white-space: pre;"
      );

      console.log(
        "%c Crafted by %c Padmore Aning %c https://padmoreaning.com/ ",
        "background: #27272A; color: #A1A1AA; font-weight: 600; font-size: 11px; padding: 3px 6px; border-radius: 4px 0 0 4px;",
        "background: #52525B; color: #FFFFFF; font-weight: 700; font-size: 11px; padding: 3px 8px;",
        "background: #3F3F46; color: #E4E4E7; font-weight: 600; font-size: 11px; padding: 3px 8px; border-radius: 0 4px 4px 0;"
      );

      console.log(
        "%c" + nl +
        "  Portfolio:  https://padmoreaning.com/" + nl +
        "  Contact:    hello@padmoreaning.com" + nl + nl +
        "  [ATTRIBUTION NOTE]" + nl +
        "  Padmore Aning crafted and engineered this website platform." + nl +
        "  The Women-in-WACREN programme is supported by the European Union" + nl +
        "  through the AfricaConnect project and managed by WACREN." + nl,
        "display: block; color: #94A3B8; font-family: monospace; font-size: 11px; line-height: 1.6; white-space: pre;"
      );
    }
  }, []);

  return null;
}
