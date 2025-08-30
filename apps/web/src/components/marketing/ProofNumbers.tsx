export function ProofNumbers({ items }: { items: { label: string; value: string }[] }) {
  return (
    <section aria-label="Dowody skuteczności" className="mt-16">
      <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="rounded-lg border p-6 bg-card text-center">
            <dt className="text-sm text-muted-foreground">{it.label}</dt>
            <dd className="text-3xl font-semibold mt-1">{it.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

