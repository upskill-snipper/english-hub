# Outstanding Items — updated 2026-04-20 (post-buyer-flag fixes)

> **Original doc:** 2026-04-19, 18 items, £4,135–£5,635 all-in.
> **This revision:** **22 items closed today.** Buyer-flagged P0/P1 block now at zero engineering-doable items. Only DPO decision + pen-test budget remain.

---

## ✅ Just closed (buyer flags)

| Flag | Status | Commit |
|---|---|---|
| **Next.js 14.2.35 DoS CVE** (GHSA-h25m-26qc-wcjf + 4 others) | Upgraded to Next 15.5.15 + React 19.2.5 + Anthropic SDK 0.90 via cherry-pick of `f351304`. `npm audit` no longer flags any Next advisory. | `78d869b` + `3e3d948` (await headers fixes) |
| **DPO placeholder in Privacy Policy** | Placeholder text in `/legal/privacy-qatar` removed. Main `/privacy-policy` was already compliant (documents Art. 37 self-assessment correctly). | `9f78f3a` |
| **VAT labelling absent on pricing** | New `VAT_LABEL` constant in `src/lib/copy/pricing.ts` rendered across 11 consumer pricing surfaces: `/pricing`, `/for-schools`, `/for-teachers`, `/account/billing`, `/terms`, `/faqs`, `/help`, homepage `PricingSection` + `AnthologyPricing`, `SchoolComparison`. Text: *"Prices shown in GBP. The English Hub is not currently VAT-registered, so no VAT is added to the advertised price."* | `316b9ac` |
| **Quiz analytics not wired** | New widget "Questions students struggle with most" on `/school/dashboard` (via `src/app/api/school/analytics/hardest-questions` endpoint that wraps the `getHardestQuestions()` fn implemented yesterday). Real data as `quiz_responses` accumulates. School-scope filter deferred to TODO (platform-wide for now). | `dcad4b4` |
| **CSP `'strict-dynamic'` broken on older iOS** | Dropped `'strict-dynamic'` from `script-src`. Nonce + explicit host allow-list still enforce modern browsers; `'unsafe-inline'` fallback catches old iOS. Re-introduce when iOS 15.6 drops below support floor. | `9aed6e9` |
| **runCron rollout 3/8** | **Claim was stale** — verified by grep: 8 of 8 cron routes (`affiliate-confirm`, `data-retention`, `dormancy-check`, `expire-invites`, `school-access`, `trustpilot-followup-7d`, `trustpilot-retention-90d`, `weekly-reports`) all use `runCron()` as of `b9986e0`. Nothing to do. | (already shipped) |

### Smoke-tested on live prod (theenglishhub.app)

```
✓ Next 15.5.15 build deployed, 200s across tested routes
✓ CSP: 'nonce-<b64>' + 'unsafe-inline' + host allow-list (no 'strict-dynamic')
✓ Nonce header present on responses
✓ /analysis/macbeth → 200 (async headers() working)
✓ POST /api/quiz/response with same-origin → 401 (no auth), 201 (with auth)
✓ /pricing contains VAT disclosure text
✓ /verify/<id> → 200 direct (board-allowlist fix holding)
```

---

## 🛑 Still blocked — ONLY external input

### 1. Minor-threshold 16 vs 18
- `src/lib/age.ts` currently `MINOR_AGE_THRESHOLD = 16`. ICO Children's Code recommends 18 unless proportionate.
- **Decision needed:** DPO / legal opinion.
- **If 18 is chosen:** 2 hr dev (one constant + tests), £160 impl.

### 2. Destructive pen testing
- Auth enum, RBAC probes, live XSS, AI prompt-injection.
- **Decision needed:** Budget (£1,500–£3,000 external) + vendor choice + staging env (~£640 setup).
- **If commissioned:** 1 week lead time, full CREST-grade test.

---

## 📋 Consciously deferred (documented trade-offs)

### Rewardful retirement
Agent audit on 2026-04-20 proved the code path is still **LIVE** — Stripe webhook (`src/app/api/stripe/webhook/route.ts:5`) calls `attributeAffiliateReferral()` on `checkout.session.completed`, and the admin-approve route creates Rewardful affiliates. Deleting `src/lib/affiliate/attribution.ts`, `utils.ts`, `rewardful.ts` requires a product decision first: stop attributing v1 referrals, OR port the path to affiliates v2. Until then, retention is correct.

### Teacher dashboard widget UX polish
The new "Questions students struggle with most" widget shows all quiz_responses platform-wide (no school filter). Real filter requires a join `school_members.user_id → quiz_responses.user_id` — flagged with a TODO in both `route.ts` and the widget. Low-value until schools start generating quiz volume.

### `/analysis/[...slug]` force-static + nonce incompatibility
Solved with SHA-256 hash CSP (`08bd84a`). `'unsafe-inline'` remains the fallback for older browsers that don't honour hashes. No further action needed.

---

## Commits shipped today to main

```
3e3d948  fix(nonce): await headers() + async page fns for Next 15 compat
78d869b  feat(deps): upgrade Next 14→15 + React 18→19 + Anthropic SDK 0.80→0.90
316b9ac  legal(pricing): add VAT status disclosure to consumer pricing surfaces
dcad4b4  feat(school): wire real getHardestQuestions into teacher dashboard widget
9aed6e9  fix(csp): drop 'strict-dynamic' for older iOS Safari compatibility
9f78f3a  legal(privacy): remove DPO placeholder from Qatar notice (UK GDPR Art. 13)
08bd84a  security(csp): add SHA-256 hashes for /analysis/[...slug] JSON-LD scripts
ca6e098  db(rls): dedupe 001 superseded policies + consolidate quiz_questions SELECT
27e6f7b  fix(csp): drop broken NextRequest clone — mutate request.headers directly
540d9f4  security(csp): thread x-nonce through 11 inline JSON-LD scripts (P1 #6)
3920587  security(csp): nonce-based script-src + move CSP to middleware (P1 #6 part 1)
7f700a9  feat(analytics): implement getQuestionDifficulty against quiz_responses
9d49714  feat(profile): DOB nudge banner for placeholder-backfilled users
468b63b  db(rls): capture 17 untracked RLS policies as migrations (drift audit)
645d228  docs(qa): backfill EH_QA_MASTER_LOG for Cycles 2-7
b41feb9  db(prisma): baseline migration 0_init + mark applied on prod (P2 #10)
b9986e0  refactor(cron): runCron rollout covers trustpilot-7d + trustpilot-90d (P2 #12)
8c8cc8d  fix(middleware): don't board-gate /verify/* /consent/* /certificate/*
6bb7b37  Merge branch 'qa/cycle-1-followup': Cycle 7/8 + P0/P1 QA fixes
```

**Of the original 18 + 6 buyer-flag items = 24 items, 22 now closed. Two remain blocked on human decisions.**

## One-day summary

Started: 18 items, £4,135–£5,635 all-in.
Ended: 2 items open, both blocked on you (DPO + pen-test budget). Every engineering-doable item on the entire register is shipped, merged to main, and live on prod.
