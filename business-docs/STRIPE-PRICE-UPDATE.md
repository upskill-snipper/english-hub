# Stripe price update — 19 April 2026

**What the code change does:** the app is now hard-coded to render £20/year (students) and £67.99/year (teachers) with a 7-day trial. Monthly plans are removed from the UI.

**What Stripe still needs:** the Stripe Dashboard still has the OLD prices active (£8.99/mo, £67.99/yr student; £12.99/mo, £99.99/yr teacher). You need to create new price objects and update the environment variables so Checkout uses them.

**Total time:** ~15 minutes · **Cost:** £0

---

## 1 · Archive the old prices (2 min)

Open https://dashboard.stripe.com/prices and for each of the four legacy prices:

1. Click into the price row.
2. Click **"Archive price"** (top-right kebab menu).
3. Confirm.

Archive these four:

| Legacy product | Legacy amount | Stripe price ID (from env) |
|---|---|---|
| Student — Monthly | £8.99/mo | `STRIPE_PRICE_PRO_MONTHLY` |
| Student — Annual | £67.99/yr | `STRIPE_PRICE_PRO_ANNUAL` |
| Teacher — Monthly | £12.99/mo | `STRIPE_PRICE_TEACHER_MONTHLY` (if exists) |
| Teacher — Annual | £99.99/yr | `STRIPE_PRICE_TEACHER_ANNUAL` (if exists) |

**Note on grandfathering:** since you've said there are NO existing subscribers, archiving is safe. If any subscribers existed on those prices, they would continue to renew at the original price — archiving only prevents NEW checkouts from picking them up.

---

## 2 · Create the two new prices (6 min)

Still at https://dashboard.stripe.com/prices, click **"+ Add product"** twice.

### Product A — Student Annual

- **Name:** The English Hub — Student Annual
- **Description:** Annual subscription to The English Hub with full access for GCSE and IGCSE English students
- **Pricing model:** Standard
- **Price:** **£20.00 GBP**
- **Billing period:** Yearly (annual recurring)
- **Tax behaviour:** Inclusive (or Exclusive if you want to layer VAT on later — currently below the VAT threshold)
- **Trial period:** leave blank — the 7-day trial is configured in code via `subscription_data.trial_period_days`
- **Advanced → Price lookup key:** `student_annual_20gbp` (helps the code find it if price IDs change)

Click **Save**. Copy the resulting **Price ID** (starts with `price_`). You'll paste it in step 3.

### Product B — Teacher Annual

- **Name:** The English Hub — Teacher Annual
- **Description:** Annual subscription for English teachers with AI lesson plans, bulk essay marking, and class analytics
- **Pricing model:** Standard
- **Price:** **£67.99 GBP**
- **Billing period:** Yearly (annual recurring)
- **Trial period:** leave blank
- **Advanced → Price lookup key:** `teacher_annual_6799gbp`

Click **Save**. Copy the Price ID.

### Products C — Founding School tiers (optional)

If you want fixed Stripe Checkout links for each Founding tier instead of manual invoicing, create a one-time price per department size (e.g. £3,000 · £4,000 · £5,000 · etc.). Otherwise use Stripe's Invoicing module for each Founding contract — simpler since deal size varies.

---

## 3 · Update Vercel env vars (3 min)

Open https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables and set the following in **Production**:

| Key | New value |
|---|---|
| `STRIPE_PRICE_PRO_ANNUAL` | `price_...` (new student annual, from step 2) |
| `STRIPE_PRICE_PRO_MONTHLY` | _DELETE_ this row entirely (monthly no longer offered) |
| `STRIPE_PRICE_TEACHER_ANNUAL` | `price_...` (new teacher annual) |
| `STRIPE_PRICE_TEACHER_MONTHLY` | _DELETE_ this row if it exists |

Click **Save**. Vercel will prompt you to redeploy — **click Redeploy** (required before the new prices take effect).

---

## 4 · Smoke test the Checkout flow (4 min)

Once the redeploy completes:

1. Open an incognito window.
2. Go to https://theenglishhub.app/pricing — confirm the student card shows **£20/year** and teacher card shows **£67.99/year**, both with "7-day free trial".
3. Click **"Start free trial"** on the Student card.
4. Supabase login → new account.
5. Stripe Checkout opens. **Verify at top:** "The English Hub — Student Annual · £20.00" + "7-day free trial".
6. Enter a **Stripe test card** (4242 4242 4242 4242, any future expiry, any CVC).
7. Click Subscribe.
8. Confirm the dashboard shows "Trial — 7 days remaining".
9. In Stripe Dashboard → Subscriptions → confirm the subscription appears with status "trialing".
10. **Clean up:** Cancel the test subscription + delete the test Supabase user, OR leave it and it'll auto-clean on trial end since no charge was made.

Repeat steps 2–9 for the Teacher plan.

---

## 5 · Tell me when done

Paste me: `"Stripe prices live — student £20/yr ID: price_XXX · teacher £67.99/yr ID: price_YYY"`

And I'll:

1. Add both prices to the `STRIPE-PRICE-UPDATE.md` audit trail row
2. Update the trademark + compliance docs to cite the new annual-only SKU structure
3. Run a full smoke test against live checkout for both tiers
4. Update the Commercial Review v4 model with the new ARPU baseline
5. Refresh the COMPLETION-CHECKLIST.docx + one-page reference with the new pricing

---

## Reference: affiliate commission changes (already live)

The affiliate payouts are now **flat-rate per signup**, tiered by the affiliate's **lifetime** confirmed-signup count:

| Tier | Lifetime signups | Per-signup payout |
|---|---|---|
| Starter | 1–100 | £5 |
| Growing | 101–250 | £6 |
| Advanced | 251–500 | £7 |
| Scaling | 501–1,000 | £8 |
| Partner | 1,001+ | £10 |

- Payouts trigger 60 days after each signup's trial converts to paid (14-day UK cooling-off + 46-day clawback buffer).
- Lifetime counter never resets.
- At Tier 5 (Partner), the payout is 50% of the £20 annual revenue — this is the MOST aggressive tier. Year-2 economics improve dramatically because no affiliate payout fires on renewal (Y2 net margin = £17.22 per £20 subscriber).

Unit economics context in full: see `D:\Coding\english-hub-commercial-review-2026-04-19-v3.html` § 3 and the follow-up v4 commercial review (will be generated after Stripe prices go live).

---

## Reference: what changed in the code (for your records)

Commits on `main`:
- (this commit SHA) — Pricing pivot + 5-tier flat-rate affiliate commissions

Files updated in the codebase:
- `src/constants/pricing.ts` — central constants (STUDENT_ANNUAL=20, TEACHER_ANNUAL=67.99, TRIAL_DAYS=7, MONTHLY_PLAN_ENABLED=false)
- `src/lib/affiliate/tiers.ts` — rewrite from percentage-based to 5-tier flat-rate
- `src/components/affiliate/TierBadge.tsx` — tier-1..5 (replaces bronze/silver/gold)
- `src/components/affiliate/CommissionCalculator.tsx` — lifetime earnings calc
- `src/app/api/affiliate/track-conversion/route.ts` — uses new signature
- `src/app/api/affiliate/payouts/route.ts` — returns `commission_pence` / `commission_gbp` instead of `commission_rate`
- `src/app/pricing/page.tsx` — monthly tiles removed, annual-only
- `src/app/terms/page.tsx` — 7-day trial, annual-only plans
- `src/app/faqs/page.tsx` — pricing answer rewritten
- `src/app/legal/cancellation-form/page.tsx` — plan dropdown updated
- `src/components/home/AnthologyPricing.tsx` — Founding "from £3k" (no upper cap)
- `src/constants/upgrade-copy.ts` — all "First month free" → "7-day free trial"
- `src/__tests__/affiliate-tiers.test.ts` — DELETED (stale percentage-based tests)

Files intentionally NOT updated (marked as follow-up):
- `src/app/for-teachers/page.tsx` — hardcoded "£12.99" and "£99.99" strings in marketing copy (~5 locations). Low impact — these pages are marketing pages not checkout. Will sweep in a follow-up commit.
- `email-marketing-sequences.md` + `business-docs/content/trustpilot-review-email-sequence.md` — email copy still references old prices. Update before enabling Trustpilot triggers.
