# Trip Chikmagalur — Next.js 16

Mirror of the Vite/React Router site, migrated to **Next.js 16** (App Router) with static generation for all 36 public URLs.

## Quick start

```bash
cd tripchikmagalur-next
cp .env.example .env.local   # optional — Supabase fallbacks work without env
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

| Before (Vite) | After (Next) |
|---------------|--------------|
| Vite + react-snap | `next build` (SSG) |
| React Router | `src/app/**/page.tsx` |
| react-helmet-async | `metadata` + `PageJsonLd` |
| `import.meta.env.VITE_*` | `NEXT_PUBLIC_*` |

## Routes

All original paths are preserved (26 static + 10 `/places/[slug]` + 404).

## Deploy (Vercel)

1. Import this folder as a new project (or replace the existing one).
2. Set env vars if needed:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
3. Deploy — no SPA rewrite rules required.

## Project layout

- `src/app/` — Next.js routes & metadata
- `src/page-views/` — page UI (from former `src/pages/`)
- `src/components/` — shared UI
- `src/data/` — content (destinations, itineraries, etc.)
- `public/` — static assets, Google verification files
npn run dev
