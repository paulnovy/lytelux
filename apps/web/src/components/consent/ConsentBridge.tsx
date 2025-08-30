"use client";
import { useEffect } from "react";
import { initAnalytics } from "@analytics";

declare global {
  interface Window { klaro?: any }
}

export function ConsentBridge() {
  useEffect(() => {
    function applyConsents() {
      try {
        const consents = window.klaro?.getManager()?.getConsentObject?.() || {};
        initAnalytics({
          analytics: !!(consents.analytics ?? consents["analytics"]),
          replay: !!(consents.replay ?? consents["replay"]),
        });
      } catch {
        // noop
      }
    }
    applyConsents();
    window.klaro?.getManager?.()?.watch?.(() => applyConsents());
  }, []);
  return null;
}

