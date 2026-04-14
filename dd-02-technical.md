# DD-02: Technical Due Diligence Assessment -- The English Hub

**Audit date:** 2026-04-12 (revision 5 -- Cycle 3, FINAL)
**Prepared for:** Prospective acquirer
**Repository:** `D:/Coding/english-hub`
**Product:** Next.js 14 App Router SaaS for UK GCSE / IGCSE / KS3 English revision
**Domain:** https://theenglishhub.app
**Previous grades:** C+ (v1) > B- (v2) > B (v3) > B+ (v4) > **this revision**

---

## 1. Executive Summary

**Overall technical grade: A-** (upgraded from B+)

The English Hub is a large, feature-rich Next.js 14 SaaS application with a defensible technology stack (Next 14 App Router, Supabase PostgreSQL with RLS, Prisma ORM, Stripe, Upstash rate limiting, Sentry, Vercel) and substantial product surface area (617 page routes, 109 API routes, ~790k raw LOC across 1,620 TS/TSX files). Three cycles of systematic remediation have delivered cumulative improvements across testing, developer tooling, operational documentation, supply-chain security, privacy enforcement, safeguarding, accessibility, observability tooling, database management, and code hygiene.

**Key improvements since v4 (Cycle 3):**

1. **Test count increased to 50 files (700 test cases), all passing.** 37 Vitest unit test files (655 cases) + 13 Playwright E2E spec files (45 cases). Up from 44 files / 683 cases in v4. Four new unit test files: `board-store` (10), `data-retention-cron` (7), `env-validation` (6), `prisma-board-map` (14). Two new E2E spec files: `safeguarding` (3), `settings` (2). Zero test failures.
2. **Bundle analyzer integrated.** `@next/bundle-analyzer` (^14.2.35) wraps the Next.js config with `ANALYZE=true` conditional activation. `npm run analyze` produces visual breakdowns for Node.js server, Edge runtime, and client bundles. Allows verification that server-only dependencies (`docx`, `pptxgenjs`) do not leak into client bundles.
3. **Sentry CLI installed with documented post-build upload path.** `@sentry/cli` (^2.42.2) added as devDependency. `npm run sentry:sourcemaps` script runs `sentry-cli sourcemaps inject ./.next && sentry-cli sourcemaps upload ./.next`. RUNBOOK.md documents the full Vercel build command override for production use. The Webpack plugin remains disabled (build hang), but a clean CLI-based alternative is now ready to enable.
4. **Env validation upgraded to categorised system.** `src/lib/env-validation.ts` now groups variables into required (7), recommended (3), optional (8), and deprecated (1) tiers. Each variable includes a descriptive hint (purpose, format, where to find it). URL format validation on `NEXT_PUBLIC_SITE_URL` catches malformed/trailing-slash values. Deprecated vars trigger cleanup warnings.
5. **Prisma board map fixed.** `src/lib/board/prisma-board-map.ts` no longer references stale CAMBRIDGE/CAIE enum values. Updated to CAMBRIDGE_0500, CAMBRIDGE_0990, EDUQAS, EDEXCEL_IGCSE -- matching the current Prisma schema. This was a Critical tech debt item in v4 and is now resolved. Covered by 14 new test cases.
6. **Migration script created.** `scripts/apply-pending-migrations.sh` provides dry-run, apply-all, single-migration (`--one 003`), show-SQL (`--show 004`), and list modes. Uses `psql` with `ON_ERROR_STOP=1` for safe execution. All 7 pending migrations use IF NOT EXISTS guards for idempotent re-runs.
7. **007_cycle_improvements.sql added.** Seventh pending migration adds child privacy columns (is_minor, streaks_enabled, personalised_recommendations, streak_notifications, nudge_notifications, analytics_opt_in, marketing_opt_in, social_share_nudge) to profiles, `cookie_consent` table with RLS, and `ai_opt_out` column on `PrivacySettings`. All statements use IF NOT EXISTS / DO $$ guards.
8. **Self-harm safeguarding signposting.** `src/lib/content-safety.ts` detects self-harm and suicide keywords in essay submissions and returns a supportive, non-judgmental response with UK helpline numbers (Childline, NSPCC, Samaritans, Crisis Text Line). Tested in `content-safety.test.ts`.
9. **Accessibility: `lang="en-GB"` set.** Root layout (`src/app/layout.tsx`) now declares `<html lang="en-GB">`, satisfying WCAG 2.1 Success Criterion 3.1.1.
10. **`student_email` fully removed.** The `ClassStudent` interface in `src/lib/types.ts` no longer contains `student_email`. Zero PII email fields remain in any analytics, export, or class membership type. Zero grep matches for `student_email` across the entire `src/` directory.
11. **RUNBOOK.md expanded to 379 lines.** New sections: Sentry Source Maps (current state, re-enabling instructions, CLI alternative with exact build command), CSP documentation (full directive table, risk explanation, path to nonce-based CSP), Bundle Analysis instructions.
12. **console.log reduced to ~5 in production code** (down from ~28 in v4), limited to cron handlers and a PPTX generation utility with legitimate server logging.

**Why A- and not A:**

- TypeScript and ESLint remain disabled at Vercel build time (compensated by CI + pre-commit hooks, but not ideal).
- 7 pending database migrations have not yet been applied (though a migration script now exists and all use IF NOT EXISTS).
- Sentry source map upload still requires manual enablement (CLI path documented but not yet wired into Vercel build).
- Test coverage, while meaningfully improved (50 files, 700 cases), remains moderate for a 617-page, 109-route commerce+AI product (~6-7% structural coverage).
- Single-author codebase (effectively one contributor).
- CSP still uses `unsafe-inline` in script-src (accepted industry limitation for Next.js 14).

**Why upgrade from B+ to A-:**

The cumulative effect of three remediation cycles has materially transformed the codebase's acquisition readiness. Cycle 3 specifically resolves two items that were Critical tech debt in v4 (Prisma board map, migration tooling), adds the bundle analysis and Sentry CLI tooling that were flagged as week-7-8 recommendations, delivers the remaining `student_email` cleanup to full completion (zero residual PII), adds self-harm safeguarding signposting (a child safety compliance requirement), documents CSP and source map strategy in the runbook, and pushes test coverage past the 50-file / 700-case mark with zero failures. The 379-line operational runbook, categorised env validation, and migration script together mean a new developer or acquirer can onboard, understand all env vars, run the test suite, analyse the bundle, and apply database migrations independently with zero tribal knowledge. The remaining gaps (pending migration execution, Sentry source map activation, CSP nonce migration) are well-documented, tooling-ready, and do not block acquisition.

The codebase is **acquirable with minimal cleanup**. The buyer will need 1-2 weeks of remediation before shipping new features with full confidence, versus 1-3 weeks assessed in v4.

---

## 2. Architecture Overview

### Monolith Structure

The English Hub is a **single Next.js 14 App Router monolith** deployed to Vercel. There is no microservice layer, no separate backend beyond the embedded API routes, and no BFF pattern. All server-side logic lives in `src/app/api/` route handlers and server components.

A nascent **React Native mobile app** exists in `/mobile/` (Expo SDK 51, React Native 0.74.5) but is a thin WebView shell, not a native rewrite. It is excluded from the main `tsconfig.json` and has its own `package.json`.

A **backend directory** (`/backend/`) also exists, containing what appears to be an Azure-targeted Fastify service (evidenced by `@fastify/otel` in `node_modules`). This is referenced in `.github/workflows/backend-azure-deploy.yml` but is not part of the primary deployment path. It contains 2 test files (auth, health) with 9 test cases.

### Rendering Strategy

| Strategy | Usage |
|---|---|
| SSG (static) | Default for ~600+ page routes (content pages, revision notes, poetry analysis) |
| ISR | `/analysis/*` subtree (via `revalidate` in layout + page), `/api/analytics/aggregate` |
| Dynamic SSR | 51 files declare `export const dynamic` (API routes, affiliate layout, school analytics) |
| Client-side | Interactive components (board selector, quiz engine, games, marking flow) |

The heavy static page count (~617 `page.tsx` files) is the primary driver of build-time resource consumption and the root cause of the OOM mitigations documented in the commit history.

### File Structure

```
src/
  __tests__/          37 Vitest test files + TEST_PLAN.md + setup.ts
  app/                Next 14 App Router
    api/              109 route.ts API endpoints
    dashboard/        Student + parent + teacher dashboards
    parent/           Parent portal
    school/           School/teacher portal with analytics
    affiliate(s)/     Affiliate dashboard (Rewardful-integrated)
    revision/         Core revision UX (exam-board gated)
    resources/        Mixed SEO + gated content
    analysis/         SEO-optimised article pages (ISR)
    igcse/            IGCSE-specific app (~104 sub-pages)
    assessment/       Reading assessment engine
    games/            Interactive learning games
    marking/          AI essay marking flow
    courses/          Course catalogue
    mock-exams/       Mock exam engine
    (many more)
  components/         168 component files (UI primitives + feature components)
  constants/
  contexts/
  data/               Hardcoded curriculum data (courses, lesson plans, set texts, quiz data)
  hooks/
  lib/
    board/            Exam board config, filter, guard, store (UNIFIED)
    supabase/         Client, server, middleware wrappers
    marking/          Mark scheme parser, prompt builder, grade predictor, feedback generator
    analytics/        Aggregate, cohort, trajectory, weak-area, MRR, NRR, export, types
    privacy/          Child defaults, dormancy
    recommendations/  Personalised recommendation engine
    email-templates/  Parent/student/teacher weekly report templates
    ai-preferences.ts AI opt-out persistence + server-side enforcement (Children's Code Standard 12)
    content-safety.ts Content safety checks + self-harm safeguarding signposting
    data-retention.ts Data retention/cleanup logic
    rate-limit.ts     Upstash Redis + in-memory fallback
    env-validation.ts Categorised env var validation (required/recommended/optional/deprecated)
  store/              Zustand stores: auth, course, exam, flashcard, school
  types/
  middleware.ts       Board gate + Supabase session refresh + affiliate tracking
  middleware-affiliate.ts
e2e/                  13 Playwright E2E spec files
playwright.config.ts  4 browser projects, trace-on-retry
prisma/
  schema.prisma       525 lines, 17 models, 29+ relations, 20 enums
scripts/
  apply-pending-migrations.sh  Migration applicator (dry-run/apply/show/single/list)
supabase/
  migrations/         11 applied SQL migrations
  migrations-pending/ 7 pending SQL migrations (001-007)
mobile/               React Native / Expo shell app
backend/              Azure Fastify backend (secondary, 2 test files)
RUNBOOK.md            379-line operational runbook
```

---

## 3. Tech Stack

| Layer | Technology | Version | Status |
|---|---|---|---|
| Framework | Next.js App Router | `^14.2.35` | Yellow -- Next 15 available |
| Language | TypeScript (strict mode) | `^5.9.3` | Green |
| UI | React + Tailwind + `@base-ui/react` + shadcn | React `^18`, Tailwind `3.4.19` | Yellow -- React 19, TW 4 available |
| Database | Supabase PostgreSQL | `@supabase/ssr ^0.9.0`, `@supabase/supabase-js ^2.99.2` | Green |
| ORM | Prisma | `^6.19.2` | Green |
| Auth | **Supabase SSR (sole system)** | via `@supabase/ssr` | **Green** |
| Payments | Stripe | Server `^20.4.1`, Client `^8.11.0` | Green |
| State | Zustand | `^5.0.12` | Green |
| AI | Anthropic Claude SDK | `^0.80.0` | Green |
| Rate Limiting | Upstash Redis | `@upstash/ratelimit ^2.0.8`, `@upstash/redis ^1.37.0` | Green |
| Error Tracking | Sentry | `@sentry/nextjs ^10.44.0` | Green (build-time upload disabled; CLI path documented) |
| Sentry CLI | `@sentry/cli` | `^2.42.2` | **Green (NEW)** |
| Bundle Analysis | `@next/bundle-analyzer` | `^14.2.35` | **Green (NEW)** |
| Analytics | Vercel Analytics + Speed Insights, GA4 | `^2.0.1`, `^2.0.0` | Green |
| Email | Nodemailer (Resend) | `^7.0.13` | Green |
| Validation | Zod | `^4.3.6` | Green |
| Testing (Unit) | Vitest + Testing Library + jsdom | `^4.1.0`, `^16.3.2` | Green |
| Testing (E2E) | Playwright | `^1.52.0` | Green |
| Pre-commit | Husky + lint-staged | `^9.1.0`, `^15.4.0` | Green |
| SBOM | CycloneDX | `@cyclonedx/cyclonedx-npm ^1.20.0` | Green |
| Export | docx (Word), pptxgenjs (PowerPoint) | `^9.6.1`, `^4.0.1` | Green |
| Hosting | Vercel, region `lhr1` (London) | -- | Green |

**Auth note:** `next-auth` was completely removed in Cycle 1. The application uses Supabase SSR auth exclusively for all user types (students, parents, teachers, admins). CSRF protection is handled via `CSRF_SECRET` with HMAC tokens.

---

## 4. Dependency Audit

### Package Count

**55 total packages:** 28 production dependencies, 27 dev dependencies. Reasonable for the feature set; not inflated. The dev dependency count increased from 25 to 27 due to additions of `@next/bundle-analyzer` and `@sentry/cli`.

### Version Health

| Package | Version | Assessment |
|---|---|---|
| `next` | `^14.2.35` | Yellow -- Next 15 GA, migration path available |
| `react` / `react-dom` | `^18` | Yellow -- React 19 GA |
| `@types/react` / `@types/react-dom` | `^18.3.0` | Green -- matches runtime |
| `typescript` | `^5.9.3` | Green |
| `@prisma/client` / `prisma` | `^6.19.2` | Green |
| `tailwindcss` | `^3.4.19` | Yellow -- Tailwind 4 available |
| `zod` | `^4.3.6` | Green -- recently upgraded to v4 |
| `zustand` | `^5.0.12` | Green |
| `@sentry/nextjs` | `^10.44.0` | Green |
| `@sentry/cli` | `^2.42.2` | **Green (NEW)** |
| `@next/bundle-analyzer` | `^14.2.35` | **Green (NEW)** |
| `@playwright/test` | `^1.52.0` | Green |
| `husky` | `^9.1.0` | Green |
| `lint-staged` | `^15.4.0` | Green |
| `@cyclonedx/cyclonedx-npm` | `^1.20.0` | Green |

### Licence Compliance

All dependencies sampled are MIT or Apache 2.0. No GPL, AGPL, or copyleft licences detected in the direct dependency tree. `docx`, `pptxgenjs`, `bcryptjs`, `dompurify`, `sonner`, `cmdk`, `lucide-react`, `@prisma/client` -- all permissive. **No licence concerns.**

### SBOM

`npm run sbom` generates a CycloneDX JSON file (`sbom.json`) via `@cyclonedx/cyclonedx-npm`. This provides machine-readable software composition data for supply-chain audit, licence compliance, and vulnerability tracking. **Green.**

### Security

CI includes `npm audit --audit-level=high` as a dedicated job. Pre-commit hooks catch lint and formatting issues before code reaches CI. A buyer should still run `npm audit --production` during DD for a point-in-time snapshot.

---

## 5. Code Quality

### Scale

| Metric | Value |
|---|---|
| TS/TSX files | 1,620 |
| Total LOC (all TS/TSX) | ~790,100 |
| Page routes (`page.tsx`) | 617 |
| API routes (`route.ts`) | 109 |
| React components | 168 files in `src/components/` |
| Zustand stores | 5 (auth, course, exam, flashcard, school) + unified board store in `src/lib/board/` |

A significant portion of the LOC is hardcoded curriculum content (poem texts, analysis, flashcards, lesson plans, courses) embedded in `src/data/*` and `src/app/**/page.tsx`. The *functional code* LOC (non-content) is estimated at 80-120k.

### TypeScript Strict Mode

**Enabled.** `tsconfig.json`:
```json
"strict": true,
"noEmit": true,
"target": "es5",
"moduleResolution": "bundler"
```

`strict: true` is on. The `target: "es5"` is conservative (Next 14 supports modern targets) but not harmful. `allowJs: true` is also enabled.

### ESLint, Prettier, and Pre-commit Hooks

**All three configured.** `eslint@^8.57.0` and `eslint-config-next@^14.2.35` are in devDependencies. `.prettierrc` exists with project-standard settings (no semicolons, single quotes, trailing commas, 100-char print width). CI runs both `next lint` and `prettier --check .` on every push/PR.

**Pre-commit hooks:** Husky v9 + lint-staged are installed. The `.husky/pre-commit` hook runs `npx lint-staged`, which applies:
- `eslint --fix` on `*.ts` and `*.tsx` files
- `prettier --write` on `*.ts`, `*.tsx`, `*.json`, and `*.md` files

This closes the previously-flagged gap where developers could bypass linting by committing locally without CI. The `ignoreDuringBuilds: true` in `next.config.js` remains (due to OOM), but is now compensated by **both** pre-commit hooks and CI.

### Test Coverage

**37 Vitest unit test files** (655 test cases) under `src/__tests__/`, all passing:

| File | Test Cases | Purpose |
|---|---|---|
| `affiliate-tiers.test.ts` | 24 | Affiliate tier calculation |
| `ai-preferences.test.ts` | 9 | AI opt-out logic |
| `analytics-aggregate.test.ts` | 22 | Analytics aggregation logic |
| `board-gate.test.ts` | 7 | Board selection guard |
| `board-store.test.ts` | 10 | Board Zustand store **(NEW)** |
| `board-system.test.ts` | 62 | Board store, config, filtering |
| `checkout.test.ts` | 10 | Stripe checkout session creation |
| `child-defaults.test.ts` | 19 | Child privacy defaults |
| `consent-check.test.ts` | 10 | Consent flow validation |
| `consent.test.ts` | 15 | Consent flow |
| `content-safety.test.ts` | 29 | Content moderation + safeguarding signposting |
| `cookie-consent-log.test.ts` | 7 | Cookie consent server logging |
| `cookie-consent.test.ts` | 6 | Cookie consent UI logic |
| `cron-auth.test.ts` | 7 | Cron authentication |
| `data-integrity.test.ts` | 9 | Data integrity validation |
| `data-retention-cron.test.ts` | 7 | Data retention cron endpoint **(NEW)** |
| `data-retention.test.ts` | 17 | Data retention/cleanup logic |
| `dormancy.test.ts` | 11 | Account dormancy detection |
| `env-validation.test.ts` | 6 | Environment variable validation **(NEW)** |
| `game-scoring.test.ts` | 24 | Game scoring logic |
| `mark-schemes.test.ts` | 17 | Mark scheme parsing |
| `marking-predictor.test.ts` | 35 | AI marking grade prediction |
| `parent-link-codes.test.ts` | 21 | Parent invite/link code flow |
| `prisma-board-map.test.ts` | 14 | Prisma enum to app enum bridging **(NEW)** |
| `progress-sync.test.ts` | 9 | Progress synchronisation |
| `quiz-data.test.ts` | 18 | Quiz data validation |
| `rate-limit.test.ts` | 7 | In-memory fallback |
| `reading-assessment.test.ts` | 39 | Reading assessment engine |
| `recommendations-engine.test.ts` | 14 | Recommendation engine |
| `security-headers.test.ts` | 25 | Security header validation |
| `security.test.ts` | 33 | Security utilities |
| `social-share.test.ts` | 10 | Social sharing |
| `student-weekly-email.test.ts` | 25 | Student weekly email |
| `subscription.test.ts` | 20 | Subscription logic |
| `utils.test.ts` | 19 | Utility function tests |
| `validate-request.test.ts` | 17 | Request validation |
| `webhook.test.ts` | 21 | Stripe webhook handlers |

**13 Playwright E2E spec files** (45 test cases) under `e2e/`:

| File | Test Cases | Purpose |
|---|---|---|
| `auth.spec.ts` | 4 | Authentication flows |
| `board-select.spec.ts` | 3 | Board selection flow |
| `for-schools.spec.ts` | 3 | School marketing page |
| `games.spec.ts` | 3 | Games section |
| `homepage.spec.ts` | 3 | Homepage rendering |
| `igcse.spec.ts` | 4 | IGCSE section |
| `legal.spec.ts` | 6 | Legal pages |
| `marking.spec.ts` | 3 | Marking flow |
| `parent.spec.ts` | 4 | Parent portal |
| `pricing.spec.ts` | 3 | Pricing page |
| `revision.spec.ts` | 4 | Revision section |
| `safeguarding.spec.ts` | 3 | Safeguarding pages **(NEW)** |
| `settings.spec.ts` | 2 | Settings page **(NEW)** |

**Total: 50 test files, 700 test cases (655 unit + 45 E2E). All passing. Zero failures.** This represents a 14% increase in test file count from v4 (was 44), a 2.5% increase in test case count (was 683), and continuation of the zero-failure state. The new test files target the Prisma board map (14 cases -- covering the Critical tech debt fix), env validation (6 cases), data retention cron endpoint (7 cases), board store (10 cases), safeguarding pages (3 E2E), and settings page (2 E2E). Structural coverage remains moderate (~6-7%) for a product of this scale, but the quality, targeting, and passing rate of tests is excellent.

### TODO/FIXME Density

**32 matches across production code** (stable from v4). All are structured phase-tagged items (`TODO(Phase-5)` or `TODO(Phase-7)`) representing planned future work (email integration, real Supabase query replacement for mock data). No `HACK:` or `XXX:` comments found.

### console.log

**~5 matches** in production code (down from ~28 in v4). Limited to cron handlers (`data-retention`, `dormancy-check`) and `generate-pptx.ts` -- all legitimate server-side logging. Client-side `console.log` usage is effectively zero.

---

## 6. Build and Deployment

### Build Command

```json
"build": "prisma generate && next build"
```

Prisma client is generated before each build. No custom `NODE_OPTIONS` in the build script.

### Bundle Analysis (NEW)

`@next/bundle-analyzer` wraps the Next.js config with conditional activation:

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
```

`npm run analyze` (or `ANALYZE=true next build`) produces visual bundle breakdowns for Node.js server, Edge runtime, and client bundles. This allows verification that server-only dependencies (`docx`, `pptxgenjs`) do not leak into client bundles. **Green.**

### Sentry Source Map Upload Path (NEW)

`@sentry/cli` (^2.42.2) is installed as a devDependency with a dedicated npm script:

```json
"sentry:sourcemaps": "sentry-cli sourcemaps inject ./.next && sentry-cli sourcemaps upload ./.next"
```

The RUNBOOK.md documents the full Vercel build command override:

```bash
prisma generate && next build && npx sentry-cli sourcemaps inject ./.next && npx sentry-cli sourcemaps upload ./.next
```

Required environment variables: `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`. The Webpack plugin remains disabled (build hang), but this CLI-based alternative provides a clean path to production source map upload without risking build instability. **Yellow -- tooling ready, not yet activated.**

### Vercel Configuration

`vercel.json`:
- **Region:** `lhr1` (London -- appropriate for UK market)
- **Install:** `npm install`
- **Cron jobs:** 6 scheduled endpoints:

| Endpoint | Schedule | Purpose |
|---|---|---|
| `/api/cron/expire-invites` | 02:00 daily | Expire stale parent/teacher invites |
| `/api/cron/affiliate-confirm` | 03:00 daily | Confirm pending affiliate conversions |
| `/api/cron/dormancy-check` | 03:30 daily | Warn dormant accounts |
| `/api/cron/data-retention` | 04:00 daily | UK GDPR data cleanup |
| `/api/cron/school-access` | 05:00 daily | School access management |
| `/api/cron/weekly-reports` | 07:00 Monday | Student/parent/teacher weekly reports |

All 6 cron handlers authenticate via `CRON_SECRET` with `timingSafeEqual` from Node's `crypto` module, preventing timing attacks on the bearer token comparison.

### CI/CD Pipeline

`.github/workflows/ci.yml`:
- **Trigger:** Push to `main` + PRs to `main`
- **Jobs:**
  - `lint-and-typecheck`: `npx next lint` + `npx tsc --noEmit` + `npx prettier --check .`
  - `test`: `npm test` (Vitest, 655 test cases)
  - `security`: `npm audit --audit-level=high`
- **Runner:** Ubuntu latest, Node 20

Also present: `deploy.yml` and `backend-azure-deploy.yml` (for the secondary backend).

### Pre-commit Hooks

**Developer-local quality gate:**
- **Husky v9** runs `.husky/pre-commit` on every `git commit`
- **lint-staged v15** applies `eslint --fix` (TS/TSX) and `prettier --write` (TS/TSX/JSON/MD) to staged files only
- **`"prepare": "husky"`** in `package.json` ensures hooks are installed on `npm install`

This creates a three-layer quality gate: (1) pre-commit hooks, (2) CI pipeline, (3) Vercel build. A developer must actively bypass (`--no-verify`) to commit non-compliant code.

### OOM Workarounds

The following build-time disablements remain in `next.config.js`:

```js
typescript: { ignoreBuildErrors: true }    // TS checking runs in CI + pre-commit
eslint: { ignoreDuringBuilds: true }       // ESLint runs in CI + pre-commit
```

```js
disableServerWebpackPlugin: process.env.VERCEL === '1'   // Sentry source maps
disableClientWebpackPlugin: process.env.VERCEL === '1'
```

**Assessment:** These workarounds are documented and compensated by **both** pre-commit hooks and CI. The Sentry source map gap now has a documented CLI-based alternative path. The architecture is "check at commit time, check in CI, build on Vercel without checking." This is an acceptable pattern for a 600+ file build that OOMs on a standard Vercel container.

### Node Engine

`"engines": { "node": ">=20" }`. `.nvmrc` specifies Node 20.

---

## 7. Database

### Prisma Schema

- **File:** `prisma/schema.prisma`, ~525 lines
- **Models:** 17 -- User, Consent, CookieConsent, Essay, AIFeedback, HumanReviewRequest, Subscription, RenewalReminder, DataAccessRequest, SafeguardingReport, AuditLog, PrivacySettings, Suggestion, ParentInvite, Assignment, AssignmentSubmission, WeeklyReport
- **Enums:** 20 (Role, AccountStatus, ConsentType, ConsentMethod, Subject, ExamBoard, SuggestionType, SuggestionStatus, ReviewReason, ReviewStatus, SubscriptionPlan, SubscriptionStatus, ReminderType, DataRequestType, DataRequestStatus, Severity, ProfileVisibility, AssignmentType, AssignmentStatus, SubmissionStatus)
- **Relations:** 29+ `@relation` declarations
- **Indexes:** Extensive -- every foreign key and common query field is indexed

**CookieConsent model:** Stores `visitorId`, optional `userId`, `choice` (accept_all/reject_all/custom), granular `analytics`/`marketing` booleans, `ipHash` (SHA-256 -- raw IP never stored), `userAgent`, `consentedAt` timestamp, and policy `version`. Indexed on `visitorId`, `userId`, and `consentedAt`.

**PrivacySettings model:** Includes `aiOptOut Boolean @default(false)` alongside `analyticsEnabled`, `marketingEnabled`, `aiTrainingOptIn`, `schoolSharingEnabled`, `researchDataEnabled`, and `profileVisibility`. This field is the authoritative source for server-side AI opt-out enforcement.

**ExamBoard enum:** 7 values -- AQA, EDEXCEL, OCR, EDUQAS, EDEXCEL_IGCSE, CAMBRIDGE_0500, CAMBRIDGE_0990. Matches the application-level board taxonomy.

### Dual ORM Pattern

Prisma is used for **type generation only** (`prisma generate`), not for schema migration. The deployed schema is managed by Supabase SQL migrations. Direct `@supabase/supabase-js` queries are used throughout API routes rather than Prisma client calls. This is a documented architectural choice.

**Exception:** The `isAiOptedOutServer()` function in `src/lib/ai-preferences.ts` uses Prisma client directly (`prisma.privacySettings.findUnique`). This is an intentional pattern for server-only queries where Prisma's type safety adds value.

**Prisma board map (FIXED):** `src/lib/board/prisma-board-map.ts` correctly maps all 7 Prisma enum values (AQA, EDEXCEL, OCR, EDUQAS, EDEXCEL_IGCSE, CAMBRIDGE_0500, CAMBRIDGE_0990) to app-level slugs and back. The stale CAMBRIDGE/CAIE references flagged in v4 have been replaced. Covered by 14 test cases in `prisma-board-map.test.ts`.

### Migrations

**11 applied migrations** in `supabase/migrations/`:
| Migration | Key Content |
|---|---|
| `001_initial_schema.sql` | Core tables + 20 RLS policies |
| `002_affiliate_system.sql` | Affiliate tables + 12 RLS policies |
| `003_school_analytics.sql` | School/class analytics + 12 RLS policies |
| `004_fix_school_rls.sql` | RLS fixes + 20 policies |
| `20260322_affiliate_link_token.sql` | Affiliate link tokens |
| `20260322_certificate_student_name.sql` | Certificate naming |
| `20260322_new_features.sql` | New features + 5 RLS policies |
| `20260322_rls_hardening.sql` | RLS hardening + 11 policies |
| `20260327_add_profile_role.sql` | Profile role column |
| `20260328_utm_and_parent_columns.sql` | UTM tracking + parent columns |
| `20260404_school_promo_and_access.sql` | School promo codes + 10 RLS policies |

**7 pending migrations** in `supabase/migrations-pending/`:
| Migration | Purpose | Idempotent |
|---|---|---|
| `001_parent_accounts.sql` | Parent account tables | Yes |
| `002_affiliates.sql` | Affiliate system enhancements | Yes |
| `003_exam_board_enum_update.sql` | ExamBoard enum expansion (CRITICAL) | Yes |
| `004_progress_tables.sql` | Student progress tracking tables | Yes |
| `005_analytics_tables.sql` | Analytics aggregation tables | Yes |
| `006_recommendation_cache.sql` | Recommendation caching | Yes |
| `007_cycle_improvements.sql` | Child privacy columns, cookie_consent table, ai_opt_out column **(NEW)** | Yes |

**Migration script (NEW):** `scripts/apply-pending-migrations.sh` provides a safe, documented migration workflow:
- **Dry-run (default):** Lists all 7 pending migrations with descriptions and file sizes
- **Apply all:** `--apply` runs all migrations in order with `ON_ERROR_STOP=1`
- **Single migration:** `--apply --one 003` applies only the matching migration
- **Show SQL:** `--show 004` prints the SQL for review
- **List:** `--list` shows migration manifest

All 7 migrations use IF NOT EXISTS / DO $$ guards for safe re-runs. The script validates `psql` availability and `DATABASE_URL`/`SUPABASE_DB_URL` before execution.

**Risk:** The pending migrations include the ExamBoard enum update which is required for the deployed DB to match the Prisma schema. These should be applied before or immediately after acquisition. The migration script significantly reduces the risk of this operation.

### RLS Policies

**~90+ RLS policies** across all migrations. A dedicated `rls_hardening` migration exists (20260322). Row Level Security is enabled on all user-facing tables. The `SUPABASE_SERVICE_ROLE_KEY` (which bypasses RLS) is present in `.env.example` and used server-side. A buyer should audit every call-site to confirm it is only used in trusted server contexts.

---

## 8. Security

### Security Headers

Configured in `next.config.js` for all routes:

| Header | Value | Assessment |
|---|---|---|
| `X-Frame-Options` | `DENY` | Green -- prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` | Green |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Green |
| `X-XSS-Protection` | `0` | Green -- correct modern value |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Green |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Green -- 2-year HSTS with preload |
| `Content-Security-Policy` | See below | Yellow |

**CSP detail:** `default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com https://r.wdfl.co https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://api.stripe.com https://r.wdfl.co https://*.ingest.sentry.io; frame-src https://js.stripe.com https://hooks.stripe.com; object-src 'none'; base-uri 'self';`

The `'unsafe-inline'` in `script-src` weakens XSS protection. A TODO exists to replace this with nonce-based CSP. Next.js does not yet support nonce-based CSP cleanly in the App Router, so this is an accepted industry limitation. The RUNBOOK.md now documents the full CSP configuration, risk assessment, and path to nonce-based CSP migration.

**Security header tests:** 25 test cases in `security-headers.test.ts` validate the presence and correctness of all security headers.

### Authentication

**Single system: Supabase SSR auth.** Cookie-based session management via middleware (`src/lib/supabase/middleware.ts`). Session refresh on every request. CSRF protection via `CSRF_SECRET` with HMAC tokens.

`bcryptjs` is installed for password hashing in custom auth flows (parent invites, teacher signup).

### Rate Limiting

**Redis-backed (Upstash) rate limiter** in `src/lib/rate-limit.ts`. Uses `Ratelimit.slidingWindow` with per-endpoint configuration and an in-memory fallback for local development. **~98 of 109 API routes** import or reference rate limiting -- excellent coverage.

### Input Validation

- **Zod v4** (`^4.3.6`) is available and used in at least 13 API routes for request body validation.
- **DOMPurify** (`^3.3.3`) is used in 4 files for HTML sanitisation.
- Supabase parameterised queries protect against SQL injection.

### Content Safety (IMPROVED)

`src/lib/content-safety.ts` provides multi-layer content safety for essay submissions:
1. **Prompt injection detection:** 11 patterns blocking jailbreak/override attempts
2. **Essay generation blocking:** Prevents use as a writing tool (feedback only)
3. **Non-prose detection:** Code content, repeated words, keyboard mashing
4. **Harmful content blocking:** Weapons, drugs, hacking references
5. **Self-harm safeguarding signposting (NEW):** Detects self-harm/suicide keywords and returns a supportive, non-judgmental response with UK helpline numbers (Childline 0800 1111, NSPCC 0808 800 5000, Samaritans 116 123, Crisis Text Line text SHOUT to 85258). This is a DD-07 child safeguarding requirement. Tested in `content-safety.test.ts`.

### Environment Variable Validation (IMPROVED)

`src/lib/env-validation.ts` now provides a categorised validation system:

| Category | Count | Behaviour |
|---|---|---|
| Required | 7 | Throws in production if missing; descriptive hints for each |
| Recommended | 3 | Warning logged (CRON_SECRET, CSRF_SECRET, RESEND_API_KEY) |
| Optional | 8 | Info-level log of missing vars |
| Deprecated | 1 | Warning if still set (NEXTAUTH_URL) |

**URL format validation:** `NEXT_PUBLIC_SITE_URL` is validated against `^https?:\/\/.+` and checked for trailing slashes. Descriptive error messages include the current value and recommended fix.

Each variable includes a human-readable hint explaining its purpose, where to find it, and expected format (e.g., "Starts with sk-ant-" for the Anthropic key). This significantly reduces onboarding friction.

### .env.example

155 lines, 14 section categories, with `[REQUIRED]`/`[REQUIRED*]`/`[OPTIONAL]` annotations for every variable. Categories: Supabase, Prisma/Database, Stripe (Payments), Stripe Price IDs, AI/Anthropic, Security, Email, Analytics, Cron, Affiliate, School, Site, Feature Flags, Rate Limiting. Comprehensive documentation that eliminates onboarding guesswork.

### Secrets Management

`.env.example` declares `CSRF_SECRET` and `NEXT_PUBLIC_SITE_URL` (replacing old `NEXTAUTH_*` vars). `.gitignore` excludes `.env.local`. No secrets committed to the repository. **Green.**

### Cron Authentication

All 6 cron endpoints verify the `CRON_SECRET` bearer token using `timingSafeEqual` from Node's `crypto` module. This prevents both unauthorised invocation and timing-based token extraction. **Cron auth is tested** (7 test cases in `cron-auth.test.ts`). **Green.**

---

## 9. Performance

### Bundle Optimisation

`next.config.js` enables `optimizePackageImports` for:
- `lucide-react` (icon library -- tree-shaking critical)
- `date-fns`
- `@supabase/supabase-js`
- `class-variance-authority`
- `@base-ui/react`

Heavy server-only dependencies (`docx`, `pptxgenjs`) are only imported in API routes (`/api/generate-pptx`) and should not appear in client bundles. **This can now be verified** using `npm run analyze` (bundle analyzer). **Green.**

### Image Optimisation

```js
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [{ protocol: 'https', hostname: 'arjjzkudncwqprpyamkw.supabase.co' }],
}
```

AVIF and WebP formats enabled. Remote images from Supabase storage are optimised through Next.js Image. **Green.**

### Rendering Strategy

- ~565+ pages are statically generated at build time (default SSG).
- `/analysis/*` uses ISR (`export const revalidate`) to avoid build-time OOM for SEO pages.
- 51 route handlers declare `export const dynamic = 'force-dynamic'` for data-fetching API routes and authenticated pages.
- `scrollRestoration: true` is enabled experimentally.

### Build Performance

The route count (~617 pages + dynamic routes) remains the primary build bottleneck. Prior OOM mitigations (ISR for analysis pages, disabling type checking/linting/Sentry at build time) keep the build viable on standard Vercel containers. Adding more static pages will eventually require either a Vercel plan upgrade, further ISR adoption, or route count reduction.

---

## 10. Monitoring and Observability

### Sentry

- **Server-side:** `instrumentation.ts` initialises Sentry for both Node.js and Edge runtimes. `tracesSampleRate: 0.1`, enabled only when `SENTRY_DSN` is set.
- **Client-side:** `instrumentation-client.ts` initialises Sentry with `replaysOnErrorSampleRate: 1.0` (replay on every error).
- **Error boundaries:** 15 `error.tsx` files across major route segments, each calling `Sentry.captureException(error)`.
- **Request errors:** `onRequestError = Sentry.captureRequestError` is exported from instrumentation.
- **Source maps:** Disabled for Vercel builds via Webpack plugin. **CLI-based alternative now documented** (`npm run sentry:sourcemaps` using `@sentry/cli`). The RUNBOOK.md provides the exact Vercel build command override. This remains the single biggest observability gap, but the tooling to close it is now in place.
- **35 files** across the codebase reference Sentry directly.

### Vercel Analytics

`@vercel/analytics` and `@vercel/speed-insights` are installed. Google Analytics 4 is configured via `NEXT_PUBLIC_GA4_ID`.

### RUNBOOK.md (EXPANDED)

A **379-line** operational runbook (up from 276 in v4) provides comprehensive documentation covering:
- Architecture overview and technology choices
- Development setup (prerequisites, install, env vars, run locally, run tests, lint/typecheck)
- Database layer (dual Prisma/Supabase pattern, migrations, pending migrations)
- Deployment (Vercel platform, build command, env vars, Stripe webhook, post-deploy checklist)
- Cron jobs (all 6 endpoints with schedules)
- Monitoring (Sentry, error boundaries, GA4, Vercel Analytics)
- Key file locations
- Secrets management
- Known issues and troubleshooting (including OOM workarounds)
- **Bundle Analysis (NEW):** How to run `npm run analyze` and what to check
- **Sentry Source Maps (NEW):** Current disabled state, re-enabling instructions, CLI alternative with exact Vercel build command override, required env vars
- **Content Security Policy (NEW):** Full directive table, risk assessment for `unsafe-inline`, path to nonce-based CSP

This significantly reduces the single-author bus factor risk. A new developer can onboard independently using this document.

### Error Boundary Coverage

| Route Segment | `error.tsx` Present |
|---|---|
| Root (`/`) | Yes |
| `/affiliate` | Yes |
| `/assessment` | Yes |
| `/board-select` | Yes |
| `/courses` | Yes |
| `/dashboard` | Yes |
| `/games` | Yes |
| `/igcse` | Yes |
| `/marking` | Yes |
| `/mock-exams` | Yes |
| `/parent` | Yes |
| `/resources` | Yes |
| `/revision` | Yes |
| `/school` | Yes |
| `/settings` | Yes |

All 15 error boundaries use a consistent pattern: capture to Sentry, display a user-friendly error message with a retry button and support link.

---

## 11. Board System Architecture

### Unified Store

The **dual board store** -- the single biggest tech-debt item in v1 -- was resolved in v2 and remains clean. The unified board system lives entirely in `src/lib/board/`:

| File | Purpose |
|---|---|
| `board-config.ts` | Server-safe ExamBoard type + BOARDS constant (7 boards) |
| `board-store.ts` | Zustand store (client) that syncs to HTTP cookie on every write |
| `board-filter.ts` | Content filtering by board |
| `board-guard.ts` | Server-side board gate |
| `get-server-board.ts` | Read board from cookie server-side |
| `set-texts.ts` | Board-to-set-text mapping |
| `content-maps.ts` | Board-to-content mapping |
| `flashcard-deck-boards.ts` | Board-to-flashcard mapping |
| `grade-boundaries.ts` | Board-specific grade boundaries |
| `prisma-board-map.ts` | Prisma enum to app enum bridging **(FIXED)** |

The `board-store.ts` Zustand store syncs both `localStorage` (for client hydration) and the `english-hub-board` HTTP cookie (for middleware/server reads) on every `setBoard` call.

**The middleware** (`src/middleware.ts`) checks for the board cookie and redirects unset users to `/board-select` for non-allowlisted paths. This is clean and correct. **Board gate logic is tested** (7 test cases in `board-gate.test.ts`). **Board store is tested** (10 test cases in `board-store.test.ts`).

**Prisma board map (FIXED):** The bridging file now correctly maps all 7 current enum values (AQA, EDEXCEL, OCR, EDUQAS, EDEXCEL_IGCSE, CAMBRIDGE_0500, CAMBRIDGE_0990). The stale CAMBRIDGE/CAIE references flagged as Critical in v4 have been replaced. **14 test cases** in `prisma-board-map.test.ts` verify both forward and reverse mapping.

---

## 12. AI Integration

### Claude Marking System

The AI marking pipeline lives in `src/lib/marking/`:

| Component | File | Purpose |
|---|---|---|
| Prompt Builder | `prompt-builder.ts` | Constructs system + user prompts grounded in real mark schemes |
| Mark Scheme Parser | `mark-scheme-parser.ts` | Parses AO breakdowns from mark scheme definitions |
| Grade Predictor | `grade-predictor.ts` | Maps raw scores to grade boundaries |
| Feedback Generator | `feedback-generator.ts` | Generates structured feedback from AI output |

### Mark Schemes

**11 files** covering all 4 GCSE boards (AQA, Edexcel, Eduqas, OCR) for both Language and Literature:

| Board | Language | Literature |
|---|---|---|
| AQA | `aqa-lang-paper1.ts`, `aqa-lang-paper2.ts` | `aqa-lit-paper1.ts` |
| Edexcel | `edexcel-lang.ts` | `edexcel-lit.ts` |
| Eduqas | `eduqas-lang.ts` | `eduqas-lit.ts` |
| OCR | `ocr-lang.ts` | `ocr-lit.ts` |

Plus `types.ts` (shared type definitions) and `index.ts` (barrel export).

### AI Opt-Out Enforcement

**Server-side enforcement is complete.** `src/lib/ai-preferences.ts` exports two functions:

1. **`isAiOptedOut()`** -- client-side check via localStorage (UI gating)
2. **`isAiOptedOutServer(userId)`** -- server-side authoritative check via `prisma.privacySettings.findUnique({ where: { userId }, select: { aiOptOut: true } })`

The server-side function is enforced on **all 4 AI endpoints**:
- `/api/mark` -- imports and checks `isAiOptedOutServer`
- `/api/mark/stream` -- imports and checks `isAiOptedOutServer`
- `/api/essay/feedback` -- imports and checks `isAiOptedOutServer`
- `/api/essay-feedback` -- imports and checks `isAiOptedOutServer`

Each endpoint returns a `403 Forbidden` with a user-friendly message directing to privacy settings when `aiOptOut` is `true`. This is **authoritative server-side enforcement** -- the client-side localStorage flag cannot be bypassed. Children's Code Standard 12 (GAP-12B) compliance is complete.

### API Endpoints

- `/api/essay/feedback` -- primary AI marking endpoint
- `/api/essay-feedback` -- secondary endpoint (may be duplicate or legacy)
- `/api/mark` -- mark submission
- `/api/mark/stream` -- streaming mark response

### Recommendation Engine

`src/lib/recommendations/engine.ts` generates personalised study recommendations based on quiz scores, studied content, game data, and reading assessment history. Data is read from `localStorage` on the client side. A pending migration (`006_recommendation_cache.sql`) would add server-side caching.

---

## 13. Cookie Consent

### Server-Side Logging

The `POST /api/consent/cookie` endpoint provides PECR/ICO-compliant server-side logging of cookie consent choices:

- **Input validation:** Validates `choice` (accept_all/reject_all/custom), granular `analytics`/`marketing` booleans, and `visitorId`
- **IP privacy:** Hashes client IP with SHA-256 -- raw IP is never stored
- **Rate limiting:** 10 consent writes per minute per IP
- **Authentication:** Logs `userId` if user is authenticated, otherwise records anonymous consent
- **Policy versioning:** Records a `version` field for audit trail
- **Database:** Persists to `CookieConsent` Prisma model with indexes on `visitorId`, `userId`, and `consentedAt`
- **Migration:** `007_cycle_improvements.sql` creates the `cookie_consent` table with RLS (users can read own records; inserts via service role)

This endpoint supports proving consent if audited by the ICO, and provides the evidentiary basis for PECR compliance.

---

## 14. Accessibility (NEW)

### Language Declaration

The root layout (`src/app/layout.tsx`) declares `<html lang="en-GB">`, satisfying WCAG 2.1 Success Criterion 3.1.1 (Language of Page). This ensures screen readers use the correct pronunciation rules for British English content.

---

## 15. Technical Debt Register

### Critical (fix before or at close)

| # | Item | Location | Impact |
|---|---|---|---|
| 1 | 7 pending DB migrations not applied | `supabase/migrations-pending/` | ExamBoard enum mismatch between Prisma schema and deployed DB; progress/analytics/privacy tables missing. **MITIGATED** by migration script and IF NOT EXISTS guards. |
| 2 | Single-author risk (~147 commits from one identity) | Repository-wide | Knowledge transfer dependency (MITIGATED by 379-line RUNBOOK.md + categorised env validation) |

### High (fix in first 4 weeks)

| # | Item | Location | Impact |
|---|---|---|---|
| 3 | Sentry source maps not yet activated in production | `next.config.js` / Vercel build | Production errors show minified traces. **MITIGATED** by documented CLI upload path (`@sentry/cli`). |
| 4 | CSP `unsafe-inline` in script-src | `next.config.js` | Weakened XSS protection. Documented in RUNBOOK.md with path to nonce-based CSP. |

### Medium (fix in first 8 weeks)

| # | Item | Location | Impact |
|---|---|---|---|
| 5 | 32 TODO/FIXME across production code | Distributed | Phase-tagged undone work backlog (73% reduced from v2) |
| 6 | `target: "es5"` in tsconfig | `tsconfig.json` | Unnecessary downlevel compilation |
| 7 | `asChild` prop remnant (1 file) | `src/components/` | Incomplete migration from Radix to @base-ui (down from 4 files) |
| 8 | Duplicate essay feedback endpoints | `/api/essay/feedback` + `/api/essay-feedback` | Confusion over canonical endpoint |
| 9 | React 19 / Next 15 / Tailwind 4 upgrade path | `package.json` | All major UI deps one version behind |

### Low (track, fix opportunistically)

| # | Item | Location | Impact |
|---|---|---|---|
| 10 | Recommendation engine uses localStorage only | `src/lib/recommendations/engine.ts` | No server-side persistence (pending migration 006) |
| 11 | Mobile app is a thin WebView shell | `/mobile/` | Not a native experience; Expo SDK 51 |
| 12 | Backend Fastify service (Azure) | `/backend/` | Secondary backend with unclear relationship to main app |

**Items resolved since v4:**

| Former # | Item | Resolution |
|---|---|---|
| v4 #2 | `prisma-board-map.ts` references stale enum values (CAMBRIDGE/CAIE) | **RESOLVED** -- Updated to CAMBRIDGE_0500/CAMBRIDGE_0990, EDUQAS, EDEXCEL_IGCSE. 14 test cases. |
| v4 #11 | `student_email` in `ClassStudent` interface | **RESOLVED** -- Field fully removed. Zero PII email fields remain in any type. |
| v4 Rec #14 | Set up bundle analysis | **RESOLVED** -- `@next/bundle-analyzer` integrated with `npm run analyze` script. |

---

## 16. Mobile App Status

A React Native / Expo mobile app exists in `/mobile/`:

- **Framework:** Expo SDK 51 (`expo ~51.0.0`), React Native 0.74.5
- **Router:** Expo Router 3.5.14 (file-based routing)
- **Screens:** 5 -- index, learn, games, saved, account (in `mobile/app/`)
- **Architecture:** Primarily a **WebView wrapper** around the web app (`react-native-webview 13.8.6`)
- **Native features:** Push notifications (`expo-notifications`), secure storage (`expo-secure-store`), device info, network status
- **Build:** EAS Build configured for iOS and Android
- **Auth:** `mobile/lib/auth.ts` exists for native auth flow

**Assessment:** The mobile app is early-stage and functional but is essentially a branded browser. It adds distribution channel value (App Store, Play Store) but does not provide a native experience. Dependencies are ~6 months behind current Expo versions.

---

## 17. Recommendations for Acquirer

### Week 1-2: Critical Path

1. **Apply pending database migrations.** Run `./scripts/apply-pending-migrations.sh --apply` to apply all 7 pending migrations. Alternatively, use `--apply --one 003` to apply the critical ExamBoard enum update first. Verify with `--show` before executing in production.
2. **Knowledge transfer.** Schedule structured handover sessions with the sole developer. The 379-line RUNBOOK.md provides a strong baseline, but live walkthrough of: Supabase RLS policy logic, Stripe price ID mapping, AI prompt engineering decisions, and board gating architecture is still recommended.
3. **Enable branch protection.** Require CI pass before merge to main, ensuring type checking, linting, Prettier, and tests cannot be bypassed.

### Week 3-4: Stability

4. **Activate Sentry source map upload.** Override the Vercel build command as documented in RUNBOOK.md to include the `sentry-cli sourcemaps inject && upload` step. Set `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT` in Vercel env vars.
5. **Run bundle analysis.** Execute `npm run analyze` and verify `docx`/`pptxgenjs` do not appear in client bundles.
6. **Expand E2E coverage.** Add Playwright tests for authenticated flows: signup, subscription checkout, essay submission, parent linking, school dashboard.
7. **Run `npm audit --production`.** Review any advisories not caught by CI's `--audit-level=high`.
8. **Generate and review SBOM.** Run `npm run sbom` and review the CycloneDX output for licence or vulnerability concerns.

### Week 5-6: Cleanup

9. **Triage remaining TODO/FIXME items.** Review all 32 items, close resolved ones, promote critical ones to issue tracker.
10. **Deduplicate API endpoints.** Consolidate `/api/essay/feedback` and `/api/essay-feedback`.

### Week 7-8: Modernisation Planning

11. **Plan React 19 / Next 15 migration.** Review breaking changes, test in a branch. This unblocks Tailwind 4 and future App Router improvements.
12. **Evaluate mobile app strategy.** Decide whether to invest in native features or maintain as a WebView wrapper.
13. **CSP nonce migration.** Track Next.js App Router nonce support; migrate from `unsafe-inline` when available.

---

## Appendix A: Metrics Summary

| Metric | DD-02 v1 (Apr 11) | DD-02 v2 (Apr 12) | DD-02 v3 (Apr 12) | DD-02 v4 (Apr 12) | DD-02 v5 (Apr 12) | Delta (v4 to v5) |
|---|---|---|---|---|---|---|
| Overall Grade | C+ | B- | B | B+ | **A-** | +1 notch |
| TS/TSX Files | 1,508 | 1,591 | 1,606 | 1,616 | **1,620** | +4 |
| Total LOC | ~422k | ~448k | ~790k | ~790k | ~790k | No change |
| Page Routes | ~595 | 614 | 617 | 617 | 617 | No change |
| API Routes | 104 | 106 | 108 | 109 | 109 | No change |
| Unit Test Files | 8 | 15 | 24 | 33 | **37** | +4 |
| Unit Test Cases | Not counted | Not counted | 509 | 643 | **655** | +12 |
| E2E Test Files | 0 | 0 | 8 | 11 | **13** | +2 |
| E2E Test Cases | 0 | 0 | 26 | 40 | **45** | +5 |
| Total Test Files | 8 | 15 | 32 | 44 | **50** | +6 (14% increase) |
| Total Test Cases | Not counted | Not counted | 535 | 683 | **700** | +17 (2.5% increase) |
| Failing Tests | Not assessed | Not assessed | 2 files | 0 | **0** | Zero failures |
| Error Boundaries | 0 | 15 | 15 | 15 | 15 | No change |
| TODO/FIXME | 96 / 63 files | 118 / 75 files | 33 / 17 files | 32 / 16 files | 32 | Stable |
| Board Stores | 2 (drifting) | 1 (unified) | 1 (unified) | 1 (unified) | 1 (unified) | No change |
| Auth Systems | 2 (Supabase + next-auth) | 2 (Supabase + next-auth) | 1 (Supabase only) | 1 (Supabase only) | 1 (Supabase only) | No change |
| Cron Endpoints | Not assessed | 4 (+1 orphan) | 6 | 6 | 6 | No change |
| CI Jobs | None | 2 | 3 | 3 | 3 | No change |
| Pre-commit Hooks | None | None | None | Husky + lint-staged | Husky + lint-staged | No change |
| SBOM | None | None | None | CycloneDX | CycloneDX | No change |
| Operational Docs | None | None | None | RUNBOOK.md (276 LOC) | **RUNBOOK.md (379 LOC)** | +103 LOC (37% growth) |
| .env.example | Minimal | Minimal | Updated | 155 LOC, 14 categories | 155 LOC, 14 categories | No change |
| AI Opt-Out | Client localStorage only | Client localStorage only | Client localStorage only | Server-side enforcement (Prisma) | Server-side enforcement (Prisma) | No change |
| Cookie Consent | Client-side only | Client-side only | Client-side only | Server-side logging (Prisma) | Server-side logging (Prisma) | No change |
| Dependencies | 52 | 52 | ~53 | 53 (28 prod + 25 dev) | **55** (28 prod + 27 dev) | +2 dev deps |
| Bundle Analyzer | None | None | None | None | **@next/bundle-analyzer** | **Added** |
| Sentry CLI | None | None | None | None | **@sentry/cli** | **Added** |
| Env Validation | 7 required + 10 optional | 7 required + 10 optional | 7 required + 10 optional | 7 required + 10 optional | **7 req + 3 rec + 8 opt + 1 dep** | **Categorised** |
| Prisma Board Map | Stale (CAMBRIDGE/CAIE) | Stale | Stale | Stale | **Fixed (7/7 mapped)** | **Resolved** |
| Migration Script | None | None | None | None | **apply-pending-migrations.sh** | **Added** |
| Pending Migrations | 6 | 6 | 6 | 6 | **7** | +1 (007_cycle_improvements) |
| Self-harm Signposting | None | None | None | None | **Childline/NSPCC/Samaritans** | **Added** |
| Accessibility (lang) | Not set | Not set | Not set | Not set | **lang="en-GB"** | **Added** |
| student_email PII | Multiple types | Multiple types | Multiple types | ClassStudent only | **Zero fields** | **Fully removed** |
| console.log (prod) | Not assessed | Not assessed | ~3 | ~28 | **~5** | -23 (82% reduction) |
| Prisma Models | 19 | 19 | 19 | 17 | 17 | No change |
| Prisma Enums | 19 | 19 | 19 | 20 | 20 | No change |
| Prisma Schema LOC | 518 | 518 | 518 | 525 | 525 | No change |

---

## Appendix B: File Paths Referenced

- `next.config.js` -- build config, security headers, Sentry config, bundle analyzer wrapper
- `package.json` -- dependencies, scripts, engines, lint-staged config
- `tsconfig.json` -- TypeScript compiler options
- `vercel.json` -- deployment config, 6 cron jobs
- `.prettierrc` -- code formatting config
- `.husky/pre-commit` -- pre-commit hook
- `playwright.config.ts` -- E2E test config, 4 browser projects
- `prisma/schema.prisma` -- database schema (525 LOC, 17 models)
- `scripts/apply-pending-migrations.sh` -- migration applicator (NEW)
- `RUNBOOK.md` -- operational runbook (379 LOC) (EXPANDED)
- `.env.example` -- env var declarations (155 LOC, 14 categories)
- `src/middleware.ts` -- board gate + auth + affiliate tracking
- `src/app/layout.tsx` -- root layout with `lang="en-GB"` (NEW)
- `src/lib/board/board-store.ts` -- unified board Zustand store
- `src/lib/board/board-config.ts` -- ExamBoard type + board definitions
- `src/lib/board/prisma-board-map.ts` -- Prisma-to-app enum bridge (FIXED)
- `src/lib/ai-preferences.ts` -- AI opt-out persistence + server-side enforcement
- `src/lib/content-safety.ts` -- content safety + self-harm safeguarding signposting (IMPROVED)
- `src/lib/prisma.ts` -- Prisma client instance
- `src/lib/data-retention.ts` -- data retention/cleanup logic
- `src/lib/rate-limit.ts` -- Upstash rate limiter
- `src/lib/env-validation.ts` -- categorised env var validation (IMPROVED)
- `src/lib/marking/` -- AI marking pipeline (6 files)
- `src/lib/marking/mark-schemes/` -- board-specific mark schemes (11 files)
- `src/lib/analytics/` -- analytics aggregate system
- `src/lib/analytics/types.ts` -- analytics types (email-free)
- `src/lib/types.ts` -- types (student_email fully removed)
- `src/lib/privacy/` -- child defaults, dormancy (2 files)
- `src/lib/recommendations/engine.ts` -- recommendation engine
- `src/lib/email-templates/` -- 3 weekly report templates
- `src/app/api/consent/cookie/route.ts` -- cookie consent server-side logging
- `src/app/api/mark/route.ts` -- mark endpoint (AI opt-out enforced)
- `src/app/api/mark/stream/route.ts` -- streaming mark endpoint (AI opt-out enforced)
- `src/app/api/essay/feedback/route.ts` -- essay feedback endpoint (AI opt-out enforced)
- `src/app/api/essay-feedback/route.ts` -- secondary essay feedback endpoint (AI opt-out enforced)
- `src/app/api/privacy/settings/route.ts` -- privacy settings endpoint
- `src/app/api/cron/dormancy-check/route.ts` -- dormancy check cron
- `src/app/api/cron/data-retention/route.ts` -- data retention cron
- `src/app/api/cron/school-access/route.ts` -- school access cron
- `src/app/error.tsx` -- root error boundary (Sentry-wired)
- `supabase/migrations-pending/007_cycle_improvements.sql` -- child privacy, cookie consent, ai opt-out (NEW)
- `src/__tests__/` -- 37 unit test files (all passing)
- `e2e/` -- 13 Playwright E2E spec files (all passing)
- `.github/workflows/ci.yml` -- CI pipeline (3 jobs)
- `instrumentation.ts` -- Sentry server init
- `instrumentation-client.ts` -- Sentry client init
