# Jason-Clark-Portfolio

Jason Clark's portfolio site, exported from Replit (`replit.com/@buttplug600/Jason-Clark-Portfolio`) as a pnpm monorepo: a React + Vite portfolio frontend plus an Express API skeleton with a PostgreSQL/Drizzle data layer.

## Features

- **Portfolio frontend** (`artifacts/jason-clark-portfolio`) — React + Vite + Tailwind (shadcn-style `components.json`) single-page portfolio for Jason Clark, with a projects section that links out to GitHub repos such as `jason-os`.
- **API server scaffold** (`artifacts/api-server`) — Express 5 + TypeScript API service with routes, middleware, and an app entry point.
- **Shared libs** (`lib/`) — `api-spec` (OpenAPI), `api-client-react`, `api-zod` (Zod schemas), `db` (Drizzle ORM + PostgreSQL).
- **Scripts** (`scripts/`) — workspace helper tooling.

## Tech stack

Node.js 24, TypeScript 5.9, pnpm workspaces, React 18, Vite, Express 5, PostgreSQL + Drizzle ORM, Zod, Orval (OpenAPI codegen), esbuild.

## Getting started

From `replit.md`:

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Project structure

```
.
├── artifacts/
│   ├── jason-clark-portfolio/   # React+Vite portfolio site
│   └── api-server/              # Express 5 API (src/app.ts, routes/)
├── lib/
│   ├── api-spec/                # OpenAPI spec (codegen source of truth)
│   ├── api-client-react/        # generated React API client
│   ├── api-zod/                 # generated Zod schemas
│   └── db/                      # Drizzle ORM schema
└── scripts/                     # workspace helpers
```

## Status

**In progress.** The portfolio frontend is a real, viewable site; the backend is scaffolding around it. The `replit.md` project-name template was never filled in, and the repo's GitHub description still just points at the Replit export.
