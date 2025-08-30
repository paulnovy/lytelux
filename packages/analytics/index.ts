export type Consents = { analytics: boolean; replay: boolean };

/**
 * Initialize analytics based on granted consents.
 * - Analytics: Plausible (default) or PostHog (example commented)
 * - Replay: OpenReplay (example skeleton)
 *
 * All scripts are dynamically imported only after consent.
 */
export function initAnalytics(consents: Consents) {
  if (typeof window === "undefined") return;

  if (consents.analytics) {
    // Plausible (self-host or proxy). Minimal pageview
    import("plausible-tracker").then(({ default: plausible }) => {
      const p = plausible({ domain: location.hostname });
      p.trackPageview();
    });

    // Or PostHog example:
    // import("posthog-js").then((ph) =>
    //   ph.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, { api_host: "/posthog" })
    // );
  }

  if (consents.replay) {
    // OpenReplay example (self-hosted; load only after consent)
    // import("@openreplay/tracker").then(({ default: Tracker }) => {
    //   const tracker = new Tracker({ projectKey: process.env.NEXT_PUBLIC_OPENREPLAY_KEY! });
    //   tracker.start();
    // });
  }
}

