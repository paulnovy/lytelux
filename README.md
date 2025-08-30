# Universal Site Stack (Next.js + Monorepo)

Production-grade monorepo with Next.js (App Router, TS), Tailwind + shadcn/ui + Radix, path-based i18n, image pipeline (AVIF/WebP via sharp), consent-gated analytics (Plausible/PostHog) + OpenReplay, Nginx reverse proxy (cache + security headers), and CI checks for CWV/a11y.

- CWV goals: LCP ≤ 2.0 s (internal), CLS ≤ 0.06 (buffer)
- Budgets (mobile, gzip): HTML ≤ 25 KB, critical CSS ≤ 12 KB, interactive JS ≤ 90 KB, LCP image ≤ 120 KB
- A11y: WCAG 2.2 AA (no critical axe/Pa11y issues)

Quick start (inside dev container):
- `pnpm i`
- `pnpm --filter @app/web dev`
- Nginx (optional local proxy): `sudo nginx -c /workspace/infra/nginx/site.conf -g 'daemon off;'`

Folders:
- `apps/web` – Next.js app (App Router) with path i18n and marketing pages
- `packages/ui` – design system (tokens + minimal components)
- `packages/config` – shared tsconfig, tailwind preset, lint/format
- `packages/analytics` – consent-gated analytics bridge (Plausible/PostHog/OpenReplay)
- `infra/nginx` – reverse proxy with RFC 9111 caching and security headers
- `.devcontainer` – Ubuntu-based dev container

Refer to `apps/web/README.md` for app-specific notes.
