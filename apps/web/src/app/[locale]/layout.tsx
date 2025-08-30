import "../globals.css";
import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/locales";
import { ConsentBridge } from "@/components/consent/ConsentBridge";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params;
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`])) as Record<string, string>;

  return {
    metadataBase: new URL("https://example.com"),
    title: {
      default: "Universal Site Stack",
      template: "%s | Universal Site Stack",
    },
    alternates: {
      languages,
    },
    openGraph: {
      locale,
      type: "website",
      siteName: "Universal Site Stack",
    },
  };
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
  const { locale } = params;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Universal Site Stack",
    url: "https://example.com",
    logo: "https://example.com/media/logo.svg"
  };
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Universal Site Stack",
    url: "https://example.com",
    inLanguage: locale,
  };

  return (
    <html lang={locale}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
        {/* Optional: load Klaro config if you serve Klaro locally */}
        {/* <script defer src="/klaro/klaro.min.js"></script>
        <script defer src="/klaro/config.js"></script> */}
      </head>
      <body>
        <ConsentBridge />
        {children}
      </body>
    </html>
  );
}
