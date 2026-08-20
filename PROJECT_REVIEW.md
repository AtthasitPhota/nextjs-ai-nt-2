# Project Review

## Tech Stack

| Dependency Type | Library / Package | Version |
|---|---|---|
| **Core Framework** | next | 16.3.1 |
| | react | 19.2.8 |
| | react-dom | 19.2.8 |
| **ORM / Database** | @prisma/client | 7.9.1 |
| | @prisma/adapter-mariadb | 7.9.1 |
| | prisma (CLI) | 7.9.1 |
| **Authentication** | better-auth | 1.7.0 |
| **State Management** | zustand | 5.0.15 |
| **Form / Validation** | react-hook-form | 7.85.0 |
| | @hookform/resolvers | 5.9.1 |
| | zod | 4.4.3 |
| **UI / Styling** | shadcn (ui generator) | 4.18.0 |
| | @remixicon/react | 4.9.0 |
| | lucide-react | 1.31.0 |
| | radix-ui | 1.6.7 |
| | class-variance-authority | 0.7.1 |
| | tailwind-merge | 3.6.0 |
| | tw-animate-css | 1.4.0 |
| | tailwindcss (v4) | 4 |
| **Utilities** | clsx | 2.1.1 |
| | dotenv | 17.4.2 |
| | resend (email service) | 6.20.0 |
| | next-themes | 0.4.6 |
| **Testing / Lint** | vitest | 4.1.11 |
| | @testing-library/dom | 10.4.1 |
| | @testing-library/jest-dom | 7.0.1 |
| | @testing-library/react | 16.3.2 |
| | eslint | 9 |
| | eslint-config-next | 16.3.1 |
| | jsdom | 30.0.1 |
| **TypeScript** | typescript | 5 |
| | @types/node | 20.19.43 |
| | @types/react | 19 |
| | @types/react-dom | 19 |
| **Build Tools** | @vitejs/plugin-react | 6.0.5 |

## Project Structure

| Path | Description |
|---|---|
| `src/app/(front)/` | Route group for all public pages (home, product, course, cart, contact, etc.). Each page has its own `page.tsx` and optional `loading.tsx`. |
| `src/app/(front)/components/` | UI components used only by the front‑end pages (e.g., `CartButton.tsx`, `CartList.tsx`, `app-header.tsx`, `app-footer.tsx`, `contact-form.tsx`). |
| `src/app/api/` | API route handlers (`contact/route.ts`, `auth/[...all]/route.ts`). |
| `src/lib/` | Core library code: Prisma client singleton, Better‑Auth helpers, Zustand cart store, utility functions, Zod schema for contact form. |
| `src/components/ui/` | Shadcn UI primitives (button, badge, input, textarea, spinner, sheet, table, etc.). |
| `src/components/` | Higher‑level UI components (product cards, navigation menu, hero, background pattern, etc.). |
| `src/app/globals.css` | Tailwind CSS entry point (`@import "tailwindcss"`). |
| `next.config.ts` | Next.js configuration (component caching, remote image patterns). |
| `Dockerfile` | Multi‑stage Docker build (includes `prisma generate` before `next build`). |
| `package.json` | Dependency list and npm scripts. |
| `tsconfig.json` / `vitest.config.mts` | TypeScript and Vitest configuration. |
| `prisma/schema.prisma` | Prisma schema for MariaDB tables. |
| `generated/prisma/` *(git‑ignored)* | Generated Prisma client output. |
| `docs/` | SQL scripts for DB setup and seeding, plus Docker instructions for MariaDB. |
