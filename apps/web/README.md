# @app/web

Next.js (App Router, TS) with path-based i18n, AA-ready components, consent-gated analytics, and image pipeline.

- Dev: `pnpm --filter @app/web dev`
- Build: `pnpm --filter @app/web build`
- Images: put sources in `public/raw`, then `pnpm --filter @app/web images`

i18n:
- Locales on path: `/pl`, `/en`
- Middleware redirects `/` -> `/pl`
- Hreflang via `generateMetadata` alternates

Lead form API:
- `POST /api/lead` with `name`, `email`, optional `message`, and optional `h-captcha-response`
- CSRF: double-submit cookie/header `csrfToken` (issue with `GET /api/lead`)
- Rate limit: basic in-memory limiter (8 req / 10 min / IP)

JSON-LD:
- Organization + WebSite injected in `src/app/[locale]/layout.tsx`

Lighthouse CI:
- Config in `apps/web/lhci.config.js` with perf/a11y/seo >= 0.95
