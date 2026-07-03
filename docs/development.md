# Academiya Development

Academiya is initialized as a TypeScript monorepo.

## Structure

- `apps/web` - Vite + React web application for academy administration and discovery.
- `apps/mobile` - Expo React Native mobile application.
- `packages/domain` - Shared domain constants and early data contracts for roles, statuses, and discovery cards.
- `assets/brand` - Shared Academiya logo and brand assets used by web and mobile.
- `assets/design` - Visual references for the Academiya look and feel.
- `docs/gui-design-guide.md` - Shared GUI direction for the mobile and web experience.

## Commands

Use the bundled Node/pnpm runtime in Codex, or install Node.js 20+ locally.

```powershell
pnpm install
pnpm dev:web
pnpm dev:mobile
pnpm check
```

## Phase 1 Direction

The initial scaffold follows the requirements baseline in `docs/business-requirements.md`:

- Email-first authentication flow.
- Registered User / Potential Student as the default verified-user access type.
- Role-based dashboards for Super Admin, Admin, and Instructor.
- Program, course, prerequisite, and class discovery as the first student-facing experience.

## Clickable Prototype

The web app in `apps/web` is the front-end-only Phase 1 clickable prototype.

It includes:

- Login page with demo role selection.
- New user registration and email verification demo.
- Registered User / Potential Student dashboard.
- Instructor dashboard.
- Admin dashboard.
- Phase 1 management demo actions using in-memory data only.
- Future-scope feature messages for disabled modules.

Prototype data is not stored permanently. Refreshing the page resets fake programs, courses, classes, and role assignments to the default sample data.

The GitHub Pages deployment workflow publishes the static web build. After GitHub Pages is enabled for the repository, the expected public URL is:

```text
https://mondipardede.github.io/Academiya/
```
