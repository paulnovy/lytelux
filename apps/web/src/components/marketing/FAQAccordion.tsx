export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <section aria-label="Najczęstsze pytania" className="mt-16">
      <div className="space-y-4">
        {items.map((it, i) => (
          <details key={i} className="rounded-lg border p-4 bg-card">
            <summary className="cursor-pointer font-medium focus:outline-none focus-visible:ring-2 rounded">
              {it.q}
            </summary>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

