export function LogoWall({ logos = [] as { src: string; alt: string }[] }) {
  return (
    <section aria-label="Zaufali nam" className="mt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
        {logos.map((l, i) => (
          <img key={i} src={l.src} width={140} height={60} alt={l.alt} loading="lazy" decoding="async" />
        ))}
      </div>
    </section>
  );
}

