// Minimal Klaro! config placeholder. Adjust for your domains and purposes.
var klaroConfig = {
  version: 1,
  elementID: "klaro",
  styling: { theme: ["light"] },
  lang: "pl",
  translations: {
    pl: {
      consentModal: { title: "Ustawienia prywatności", description: "Wybierz, na co się zgadzasz." },
      purposes: {
        analytics: "Analityka",
        replay: "Session replay"
      },
    },
  },
  services: [
    { name: "analytics", purposes: ["analytics"], default: false },
    { name: "replay", purposes: ["replay"], default: false },
  ],
};

