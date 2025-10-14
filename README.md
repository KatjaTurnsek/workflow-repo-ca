# Workflow repo for the CA

## Scripts

- npm run lint / npm run lint:fix
- npm run format
- npm test (Vitest watch) / npm run test:run (headless)
- npm run e2e (Playwright) / npm run e2e:ui (UI runner)

## Environment variables

Create a `.env` from `.env.example` with:
BASE_URL=http://localhost:5173

**Optional path overrides (HTML files):**

- **HOME_PATH**: `/index.html`
- **LOGIN_PATH**: `/login/index.html`

- VALID_EMAIL=your@stud.noroff.no
- VALID_PASSWORD=your-test-password
