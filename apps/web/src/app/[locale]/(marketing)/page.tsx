import { HeroPrimary } from "@/components/marketing/HeroPrimary";
import { USPGrid } from "@/components/marketing/USPGrid";
import { LogoWall } from "@/components/marketing/LogoWall";
import { ProofNumbers } from "@/components/marketing/ProofNumbers";
import { CTARepeater } from "@/components/marketing/CTARepeater";
import { LeadFormShort } from "@/components/marketing/LeadFormShort";
import { FooterCompact } from "@/components/marketing/FooterCompact";

export default function Page() {
  return (
    <main className="container max-w-6xl mx-auto py-12">
      <HeroPrimary />
      <USPGrid items={[
        { title: "Przejrzysty UX", desc: "Szybko, czytelnie, bez zbędnego JS." },
        { title: "AA-ready", desc: "Komponenty i kontrasty zgodne z WCAG 2.2 AA." },
        { title: "CWV-first", desc: "LCP/INP/CLS wbudowane w proces i CI." },
        { title: "Zgody i prywatność", desc: "Analizy/replay uruchamiane dopiero po zgodzie." },
        { title: "Reverse proxy", desc: "Cache wg RFC 9111 i nagłówki bezpieczeństwa." },
        { title: "Monorepo", desc: "Wspólne presety i design system." },
      ]} />
      <LogoWall logos={[]} />
      <ProofNumbers items={[
        { label: "LCP p75", value: "≤ 2.0 s" },
        { label: "INP p75", value: "≤ 200 ms" },
        { label: "CLS p75", value: "≤ 0.06" },
        { label: "AA", value: "WCAG 2.2" },
      ]} />
      <CTARepeater />
      <LeadFormShort />
      <FooterCompact />
    </main>
  );
}

