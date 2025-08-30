export function HeroPrimary() {
  return (
    <section className="grid lg:grid-cols-2 items-center gap-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Twój jasny komunikat wartości</h1>
        <p className="mt-4 text-lg text-muted-foreground">Krótko. Bez żargonu. Wynik biznesowy.</p>
        <a className="btn-primary mt-6 inline-block" href="#contact">Umów rozmowę</a>
      </div>
      <picture>
        <source srcSet="/media/hero.avif" type="image/avif" />
        <source srcSet="/media/hero.webp" type="image/webp" />
        <img
          src="/media/hero.jpg" width={960} height={720} alt=""
          loading="eager" decoding="async" fetchPriority="high"
          style={{ aspectRatio: "4 / 3" }}
        />
      </picture>
    </section>
  );
}

