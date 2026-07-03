# Repository Guidelines

## Project Structure & Module Organization

Academiya is a pnpm monorepo for a web/mobile academy management prototype.

- `apps/web/` contains the Vite React web prototype deployed to GitHub Pages.
- `apps/mobile/` contains the Expo/React Native mobile-style prototype.
- `packages/domain/` is reserved for shared domain logic and types.
- `assets/brand/` stores brand assets, including the Academiya logo.
- `assets/design/` stores visual references and mockup screenshots.
- `docs/` stores business requirements, development notes, and design guidance.
- `.github/workflows/` contains CI/deployment automation.

Tests are not yet established. Add future tests beside related code or under a package-level `tests/` directory.

## Build, Test, and Development Commands

Use pnpm from the repository root.

- `pnpm install --filter @academiya/web...` installs dependencies needed for the web app.
- `pnpm dev:web` starts the web prototype locally.
- `pnpm dev:mobile` starts the Expo mobile app.
- `pnpm build:web` type-checks and builds `apps/web`.
- `pnpm build` runs all package builds.
- `pnpm check` runs package-level TypeScript checks.
- `pnpm lint` currently maps to TypeScript checks.

GitHub Pages deploys `apps/web/dist` from the workflow in `.github/workflows/deploy-pages.yml`.

## Coding Style & Naming Conventions

Use TypeScript for app code. Follow the existing React component style: PascalCase components, camelCase variables/functions, and descriptive domain names such as `Program`, `Course`, and `ClassItem`.

Keep UI copy concise and consistent with Academiya's learner-focused tone. Prefer existing colors, spacing, and component patterns in `apps/web/src/styles.css` and `apps/mobile/App.tsx`. Avoid unrelated refactors when changing requirements or prototype behavior.

## Testing Guidelines

There is no formal test framework yet. For now, verify changes with:

- `pnpm build:web` for web TypeScript and production build validation.
- Manual browser checks for clickable flows, role dashboards, and GitHub Pages routing.

When adding tests later, use names like `*.test.ts` or `*.test.tsx` and keep them close to the related module.

## Commit & Pull Request Guidelines

Recent commits use short imperative messages, for example:

- `Build Phase 1 clickable prototype`
- `Use Node 24 for Pages deployment`
- `Expand business requirements documentation`

Use the same style: start with a verb and summarize the actual change. Pull requests should include a brief description, affected areas, verification commands, screenshots for UI changes, and links to related issues or requirement notes.

## Security & Configuration Tips

Do not commit secrets, API keys, or real user data. The Phase 1 prototype is frontend-only and uses fake in-memory data. Keep deployment settings in GitHub Actions and avoid hardcoding environment-specific private values.
