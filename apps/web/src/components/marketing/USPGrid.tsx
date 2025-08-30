type USP = { title: string; desc: string };

export function USPGrid({ items }: { items: USP[] }) {
  return (
    <section aria-label="Najważniejsze korzyści" className="mt-16">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((u, i) => (
          <li key={i} className="rounded-lg border p-6 bg-card shadow-sm">
            <h3 className="text-lg font-semibold">{u.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

