# Academiya Development

Academiya is initialized as a TypeScript monorepo.

## Structure

- `apps/web` - Vite + React web application for academy administration and discovery.
- `apps/mobile` - Expo React Native mobile application.
- `packages/domain` - Shared domain constants and early data contracts for roles, statuses, and discovery cards.
- `assets/brand` - Shared Academiya logo and brand assets used by web and mobile.
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
