# The English Hub

An exam-revision and AI-marking platform for GCSE, IGCSE, IAL and IELTS learners.
Next.js 15.5 App Router, React 19, Supabase (auth + Postgres), Prisma, Stripe,
Anthropic. Live at **theenglishhub.app**, deployed from `main` to Vercel on push.
Owned by Upskill Energy Limited (England and Wales, 16511479).

**Many of its users are children.** That is not a footnote. It sets the age gate,
the parental-consent flow, the data-retention crons and why "fail closed" is the
default everywhere. If a change touches identity, consent, analytics or
retention, assume a regulator could read it.

**[docs/system/](docs/system/README.md)** is the full system reference - twelve
chapters, fact-checked against the code. Read 01, 02 and 05 before you change
anything. **[docs/HANDOVER.md](docs/HANDOVER.md)** is the orientation: current
state, what changed recently, and how to work here.

---

## Three structural facts

Almost every production defect found here traces to one of these. Learn them
before reading code.

**1. A user has two identities.** Supabase `auth.users` / `profiles` are keyed on
a **uuid**. Prisma `User.id` is a **cuid**, and every Prisma foreign key
references it. Most accounts have no Prisma row at all. `profiles.id` is the
uuid and is correct there; anything hitting Prisma needs the cuid via
`requirePrismaUserId()` / `tryPrismaUserId()` from `@/lib/identity`. Never write
a second identity resolver - `identity-guard.test.ts` enforces that.

**2. `profiles.subscription_status` is one field per PERSON.** A person can hold
several Stripe subscriptions. Writing a per-subscription event to that field is
how a failing duplicate revoked a customer's paid access four times in three
days. Before writing it, ask what else the customer holds - reuse
`findDuplicateSubscription` from `@/lib/billing/duplicate-subscription-guard`.

**3. `_migrations_applied` records an intention, not reality.**
`scripts/apply-migrations.mjs` has a `BASELINE_CUTOFF` and _inserts_ every file
sorting before it without executing it - 66 files in four seconds on
2026-05-30. One of them created `profiles.is_minor`; the column did not exist
for four months while the code selected it on every identity read. **Verify
schema with `information_schema`, never with the tracker.** Run
`node --env-file=.env.local scripts/check-schema-drift.mjs` - it still finds
real drift.

## The pattern behind all of them

**Nothing here crashes. Things fail and report success.** Four shapes, all found
in this codebase:

- a caught exception with a reassuring comment ("can be back-filled")
- a health check that proves configuration rather than function
- a build step whose failure is hidden by reading the wrong exit code
- a document or comment asserting what the code does not do

When you add a guard, ask what it would report if the thing it guards were
entirely absent. When you read a green status, ask what proved it. **The tests
pass in ten seconds and mock every database call - they passed throughout the
outage above.**

---

## Working rules

**Verify before you claim.** Do not report a fix as working, a build as passing
or a document as accurate without having checked that specific thing. If you
cannot check it, say so and say why. A confident wrong answer costs more here
than a slow one.

**Commit by explicit path. Never `git add -A`.** Doing so once pushed 2,404
lines of unfinished work, including a migration, to production.

**Gates.** `npx tsc --noEmit`, `npx vitest run` and
`node scripts/verify-i18n-locales.mjs` now run mechanically in `.husky/pre-push`
(about 20 seconds). Until 19 September 2026 this paragraph asked for them and
nothing ran them - `pre-commit` runs only a placeholder gate and lint-staged
(eslint --fix, prettier --write), which is still the case, deliberately: commits
stay cheap, push is where main gets protected. `HUSKY=0 git push` skips it.

Run them yourself before committing anyway if the change is large; the hook is a
backstop, not a substitute for knowing whether your own work passes.

The pre-push hook also NOTES a push that rewrites more than 5,000 lines of
`src/lib/i18n/generated/` - those three files are 59,761 lines, so a whole-file
rewrite buries everything else in the diff. It warns rather than blocks, and it
deliberately offers no diagnosis: the intuitive one is wrong. The generator
emits double-quoted keys and the committed files are single-quoted, so
`prettier --write` is what CONVERTS generator output into the committed form.
Prettier is the repair, not the cause.

**Money and live Stripe are the founder's.** Only `sk_test_` keys are on this
machine. Never cancel, refund, charge or extend a subscription - prepare the
exact steps and hand them over.

**British English, no em dashes, no exclamation marks.** Match the comment
density of the file you are editing. Where a defect is fixed, the docblock
records what broke and why, so the next reader does not reintroduce it.

**`.env.local` is PRODUCTION**, with the service-role key. RLS does not apply to
anything you run. Several scripts in `scripts/` write; `scripts/seed.ts` would
put an admin account with a published password into the live database. Grep
before running anything.

**It is not, however, a mirror of Vercel.** It carries 22 names; the code reads 88. So a variable missing from it may well be set in production, and its absence
proves nothing. On 19 September 2026 that assumption produced a confidently
wrong claim: `NEXT_PUBLIC_APPLE_OAUTH_ENABLED` is absent here, was therefore
called unset, and the Apple sign-in button was reported as not rendering - while
theenglishhub.app/auth/login was rendering it to every visitor. **To find out
what production is configured to do, open the deployed page.**

## Local environment

- **`npm run build` fails on Windows** - POSIX inline env syntax. Use
  `export NODE_OPTIONS=--max-old-space-size=14336 && npx next build`. Do not
  "fix" the script; Vercel builds on Linux.
- **Never pipe a build to `tail` and read `$?`** - you get tail's exit code.
- **Ad-hoc node scripts must live inside the repo** or `node_modules` will not
  resolve. Read production with
  `node --env-file=.env.local ./script.mjs`.
- The repo is **public on GitHub**. No customer data in commits, comments or
  test fixtures.

## Where things are

| Need                         | Go to                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| The whole system, in depth   | `docs/system/` - start at its README                                                                         |
| Current state and open items | `docs/HANDOVER.md`                                                                                           |
| Identity, age bands, consent | `docs/system/05`, then `src/lib/identity/`                                                                   |
| Entitlements and billing     | `docs/system/06`. `src/lib/course-access.ts` gates the web; `src/lib/entitlements.ts` is the mobile contract |
| How marking actually works   | `docs/system/04`                                                                                             |
| The examiner marking tool    | `docs/system/04` §12, then `src/lib/marking/examiner/` (packs, gate, prompts) and `src/components/examiner/` |
| What deletes data, and when  | `docs/system/09`                                                                                             |
| Prices                       | `src/constants/pricing.ts`, never a markdown file                                                            |

**Most markdown at the repo root is stale** - frozen around April–May 2026 and
in several cases contradicting the code. `docs/HANDOVER.md` says which to trust.
`MONITORING.md` in particular is wrong in most of its specifics.
