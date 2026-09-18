# Monitoring

**This document was wrong in most of its specifics, and has been replaced with pointers to the chapters that are checked against the code.** Corrected 19 September 2026 (MAINT-5).

It is kept as a file rather than deleted because four other documents link to it, one of them with a live relative link ([`docs/system/10-integrations-and-comms.md`](docs/system/10-integrations-and-comms.md)).

---

## Where the accurate answers are

| Question                                                            | Read                                                                                   |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| What runs on a schedule, what it writes, and which jobs delete data | [`docs/system/09-scheduled-work.md`](docs/system/09-scheduled-work.md)                 |
| Sentry, PostHog, GA4, email, and every other third party            | [`docs/system/10-integrations-and-comms.md`](docs/system/10-integrations-and-comms.md) |
| Current state, and what is genuinely wired versus merely present    | [`docs/HANDOVER.md`](docs/HANDOVER.md)                                                 |

---

## What this file used to claim, and what is actually true

Recorded rather than silently deleted, because each of these was believable and some of them were acted on.

| It said                                                                                                      | Reality on 19 September 2026                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Four cron routes, and a fifth "not registered in `vercel.json`"                                              | **Seventeen** entries in `vercel.json` — sixteen under `/api/cron/` plus the `/api/health/ai` probe. `school-access` is among them, and has been for months.                                                                                                                                                          |
| `/api/cron/weekly-reports` exists and is scheduled                                                           | That route does not exist. The weekly jobs are `weekly-student-reports` and `weekly-parent-reports`.                                                                                                                                                                                                                  |
| "PostHog: **Not installed.** No PostHog dependency, no `NEXT_PUBLIC_POSTHOG` env var, no provider component" | `posthog-js` is a dependency, `src/lib/posthog.ts` reads `NEXT_PUBLIC_POSTHOG_KEY`, and `src/components/PostHogProvider.tsx` is mounted in the root layout. Installed, wired, and now consent-gated.                                                                                                                  |
| "No `sentry.client.config.ts`, `sentry.server.config.ts`, or `sentry.edge.config.ts` files exist"            | `sentry.server.config.ts` exists and is loaded by `src/instrumentation.ts`. The client is initialised in `instrumentation-client.ts`. (`sentry.edge.config.ts` also existed, imported by nothing, and was deleted on 19 September.)                                                                                   |
| "Sentry source maps disabled on Vercel — both Webpack plugins are disabled when `VERCEL === '1'`"            | They were not disabled. `disableServerWebpackPlugin` and `disableClientWebpackPlugin` were removed from `@sentry/nextjs` at v8; this project is on v10, so both keys were silently ignored. They were deleted on 19 September because a setting that reads as a safety guard and is not one is worse than no setting. |

---

## The one thing worth carrying forward

Sentry has **no DSN in production**, so client and server error reporting are configured and switched off. That is a decision for the owner, not a defect — see Block D of the operator priority list. Until a DSN is set, the `captureException` calls throughout the codebase do nothing.

The client SDK is no longer downloaded by visitors while it is switched off; it is fetched only if an error is actually captured and a DSN exists.
