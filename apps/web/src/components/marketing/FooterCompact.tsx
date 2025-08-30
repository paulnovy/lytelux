export function FooterCompact() {
  return (
    <footer className="mt-20 border-t py-8 text-sm text-muted-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Universal Site Stack</p>
        <nav aria-label="Stopka">
          <ul className="flex gap-4">
            <li><a href="/pl" className="hover:underline">PL</a></li>
            <li><a href="/en" className="hover:underline">EN</a></li>
            <li><a href="/privacy" className="hover:underline">Prywatność</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

