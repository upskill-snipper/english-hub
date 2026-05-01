# Stripe sync report

Generated 2026-05-01T10:15:25.929Z · mode `DRY-RUN` · Stripe API NOT connected (offline)

Source of truth: [`src/constants/pricing.ts`](../src/constants/pricing.ts).
Generator: [`scripts/stripe-sync-products.ts`](../scripts/stripe-sync-products.ts).

## Summary

| Env var | Stripe price ID | Expected | Stripe actual | Status |
|---|---|---|---|---|
| `STRIPE_PRICE_STUDENT_MONTHLY` | `—` | £3.99 / month | — | NO-ENV |
| `STRIPE_PRICE_STUDENT_ANNUAL` | `—` | £29.99 / year | — | NO-ENV |
| `STRIPE_PRICE_STUDENT_MONTHLY_STANDARD` | `—` | £7.99 / month | — | NO-ENV |
| `STRIPE_PRICE_STUDENT_ANNUAL_STANDARD` | `—` | £69.99 / year | — | NO-ENV |
| `STRIPE_PRICE_TEACHER_MONTHLY` | `—` | £6.99 / month | — | NO-ENV |
| `STRIPE_PRICE_TEACHER_ANNUAL` | `—` | £67.99 / year | — | NO-ENV |
| `STRIPE_PRICE_TEACHER_MONTHLY_STANDARD` | `—` | £11.99 / month | — | NO-ENV |
| `STRIPE_PRICE_TEACHER_ANNUAL_STANDARD` | `—` | £99.00 / year | — | NO-ENV |

## How to run

```bash
# Default — read-only diff
npx tsx scripts/stripe-sync-products.ts --dry-run

# Create missing prices in the connected Stripe account
STRIPE_SECRET_KEY=sk_test_… npx tsx scripts/stripe-sync-products.ts --apply
```
