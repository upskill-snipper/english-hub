# Reviewer Seed Runbook

Owner: Founder / Backend Lead · Audience: whoever is submitting to App Review · Cross-refs: `../scripts/seed-reviewers.sql`, `../scripts/seed-reviewers.ts`, `../../english-hub-mobile/docs/STORE_METADATA_PACK.md` §8.

Purpose: provision the two App Review demo accounts (Apple and Google) with a Pro subscription and two marked essays, so a reviewer signs in and immediately sees a populated Home screen.

## Prerequisites

1. Both reviewer accounts have been created via the normal web sign-up flow at `https://theenglishhub.app/register`:
   - `reviewer+apple@theenglishhub.app`
   - `reviewer+google@theenglishhub.app`
2. Passwords are set by you at sign-up time and stored in 1Password — this script never touches passwords.
3. Both accounts are role `STUDENT` (the web sign-up default). No `ADMIN` elevation is needed or granted.
4. Email verification is complete (follow the link in the Resend email).

## Option A — SQL paste (preferred when you only have `psql`)

```bash
psql "$DATABASE_URL" -f scripts/seed-reviewers.sql
```

The script is transaction-wrapped. Either every row lands or none does.

## Option B — TypeScript (preferred when developing)

```bash
pnpm tsx scripts/seed-reviewers.ts
# or with overrides:
pnpm tsx scripts/seed-reviewers.ts --emails=reviewer+apple@theenglishhub.app,reviewer+google@theenglishhub.app
```

Both options are idempotent — re-run as often as you like.

## Expected output

Both scripts end with a verification block showing, per reviewer:

- `role = STUDENT`
- `subscription_status = ACTIVE`, `plan = ANNUAL`, `platform = IOS` (apple) or `ANDROID` (google), `renews_on = <today + 365 days>`
- `essay_count = 2`, `feedback_count = 2`, `consent_count ≥ 2`, `privacy_rows = 1`
- Closing line: `Reviewer data ready…`

## Troubleshooting

| Symptom | Meaning | Fix |
|---|---|---|
| `Reviewer account(s) not found: …` / `User not found for email …` | The reviewer has not signed up. | Sign them up at the web register page, verify the email, then re-run. |
| `duplicate subscription` / PK collision | Old run left partial state. | Safe — the script uses `ON CONFLICT DO UPDATE` / `upsert`. Re-run; it will converge. |
| Subscription shows `WEB` after running | Wrong reviewer email used (falls back to `IOS`). | Confirm the email contains `google` or `android` for the Play reviewer; re-run. |
| `pnpm tsx` errors on missing Prisma client | Prisma client out of date. | `pnpm prisma generate`, then re-run. |

## Post-seeding verification

1. Open an incognito browser tab (or wipe the mobile app's sign-in state).
2. Sign in as each reviewer in turn using the password from 1Password.
3. Home screen must show:
   - A Pro badge / no paywall.
   - Two essays in history: the AQA Language piece and the Edexcel Literature piece.
   - Each essay opens to a feedback card with AO-level scores and strengths/improvements/next steps.
4. Settings → Subscription shows `Student Annual`, `Active`, renews in ~365 days.

If any of those are missing, re-run the seed script — it is safe to repeat.

## Rollback

Deletes reviewer seed rows but leaves the User rows intact (so reviewers can still sign in).

```sql
BEGIN;
DELETE FROM "AIFeedback"      WHERE id LIKE 'aif_reviewer_%';
DELETE FROM "Essay"           WHERE id LIKE 'ess_reviewer_%';
DELETE FROM "Consent"         WHERE id LIKE 'cns_reviewer_%';
DELETE FROM "PrivacySettings" WHERE id LIKE 'prv_reviewer_%';
DELETE FROM "Subscription"    WHERE id LIKE 'sub_reviewer_%';
COMMIT;
```

Run before a full re-seed only if you want a clean slate. For a plain re-run, the seed script's upserts handle it natively.
