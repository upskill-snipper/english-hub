# Fact sheet — single source of truth

> One place to look when your brain blanks at the booth on Day 2 at 16:30 and you can't remember whether the pilot fee is £3k or £4k. Every number here is canonical against the codebase as of 20 May 2026. **Do not invent.**

## Company

| Field | Value |
|---|---|
| Legal name | Upskill Energy Limited |
| Country of incorporation | United Kingdom (England and Wales) |
| Companies House number | 16511479 |
| Trading name | The English Hub |
| Website | https://theenglishhub.app |
| Founder | Calum Johnson |
| ICO registration (UK) | ZC016690 |

## Contacts

| Role | Person | Address |
|---|---|---|
| Founder + Data Protection Officer | Calum Johnson | dpo@theenglishhub.app |
| Designated Safeguarding Lead | Lauren Johnson | safeguarding@theenglishhub.app · +974 5187 9582 · 24-hour SLA |
| General / business enquiries | (founder team) | info@upskillenergy.com |
| Legal | (founder team) | legal@theenglishhub.app |
| Press | (founder team) | press@theenglishhub.app |

All 8 aliases are live at Cloudflare since 2026-04-21; outbound "Send Mail As" Workspace config is the next operational task (runbook at `business-docs/compliance/qatar-pdppl/03-pdms/dpo-mailbox-send-as-runbook.md`).

## Pricing (canonical against `src/constants/pricing.ts`)

### Students (consumer / B2C)

| Plan | Early Access (now) | Standard (from August 2026) |
|---|---|---|
| Monthly | £3.99/month | £7.99/month |
| Annual | £29.99/year | £69.99/year |
| Annual with code `2026ENGLISH` | £20/year | n/a (code may not be live) |
| Trial | 7 days, card required, auto-converts on Day 8 | same |

### Teachers (consumer / B2C)

| Plan | Early Access | Standard |
|---|---|---|
| Monthly | £6.99/month | £11.99/month |
| Annual | £67.99/year | £99/year |
| Annual with code | £58/year | n/a |

### Schools (B2B)

| Tier | Founding Schools | Standard (from August 2026) | Limit |
|---|---|---|---|
| Whole-school annual deployment | **£4,000/year** | **£8,000/year** | First 10 schools only |

### Pilots (B2B, pre-annual deployment)

| Pilot scope | Indicative fee | Length |
|---|---|---|
| Single year group | **from £2,500** | 8–12 weeks (~one term) |
| Whole English department | **from £4,000** | 8–12 weeks |
| Multi-campus / education group | **custom** (no fixed floor) | 8–12 weeks |

### Annual deployment (post-pilot)

| School size | Indicative fee |
|---|---|
| Small school (≤500) | from £6,000/year |
| Mid school | from £12,000/year |
| Large school / education group | typically from £25,000/year |

**Caveat to attach to every school price quoted at the booth:** *"Indicative founder pricing. Final pricing depends on school size, scope, and rollout requirements."*

## What we cover

| Curriculum | Status |
|---|---|
| KS3 (Years 7–9) — Pearson Edexcel iLowerSecondary (LEH11) | ✅ Live, end-to-end |
| GCSE English Language + Literature — AQA | ✅ Live |
| GCSE English Language + Literature — Pearson Edexcel | ✅ Live |
| GCSE English Language + Literature — OCR | ✅ Live |
| GCSE English Language + Literature — Eduqas | ✅ Live |
| GCSE English Language + Literature — WJEC | ✅ Live |
| IGCSE English Language + Literature — Cambridge | ✅ Live |
| A-level English Language + Literature | 🚧 Roadmap (target Q3 2026) |
| EAL (English as Additional Language) — A2, B1 levels | ✅ Live (A2 + B1 native bands) |
| EAL B2, C1 | 🚧 H3 content authoring workstream — non-A2 routes noindexed pending real content |
| Mobile app (iOS) | ✅ Live |
| Mobile app (Android) | Check current status before quoting |

## Compliance — what to claim, what NOT to claim

### CAN claim
- ICO registered (ZC016690 — verifiable)
- UK GDPR + DPA 2018 compliant
- ICO Children's Code (Age Appropriate Design Code) — high-privacy defaults enforced in code for under-18s
- PDPPL Article 17 cross-border consent banner — **live in signup as of 20 May 2026**
- Three v1.0 FINAL DPIAs (parent / AI features / analytics)
- Separately-appointed DPO + DSL
- Primary database in Supabase EU (Frankfurt)
- Backend API on Microsoft Azure UK South
- AI inference via Anthropic Claude API under DPA prohibiting training on submissions (zero retention)
- Anonymous append-only consent ledger
- 72-hour breach notification standing readiness
- 30-day rights response SLA
- 24-hour safeguarding acknowledgement SLA

### CANNOT claim
- NCSA NIA certification — not pursued (deferred)
- PDPPL Article 16 permit granted — dossier shelf-ready, submission held
- ISO/IEC 27001 — not certified (on roadmap, late 2026)
- Cyber Essentials Plus — not certified
- Exam-board endorsement from AQA / Pearson / OCR / WJEC / Eduqas / Cambridge — none endorse us
- Specific named schools as customers — none have signed reference agreements yet
- "Trusted by X students" / "X teachers use us" — never invent a count

## Age and access

| Field | Value |
|---|---|
| Minimum age | **11** (lowered from 13 by business decision B5, 2026-05-20 to accept Year 7 students) |
| Ages 11–12 | Below UK GDPR Article 8 digital age of consent — require verifiable parental consent via parent-link email |
| Ages 13–15 | Parent/guardian email required at signup; child can grant their own consent under UK GDPR but parent is informed |
| Ages 16+ | Self-signup permitted |
| Ages 18+ | Adult signup, payment-eligible |

## Hosting topology (full)

| Function | Provider | Region |
|---|---|---|
| Front end | Vercel | Global edge + configured primary |
| Primary database (account, essays, marking results, consent ledger) | Supabase | EU (Frankfurt) |
| Backend API | Microsoft Azure | UK South |
| AI essay marking | Anthropic Claude API | US (zero retention, no training) |
| Error monitoring | Sentry | EU (Frankfurt) |
| Transactional email | Postmark / Resend | US |
| Payments | Stripe (primary) | Ireland (US failover) |
| CDN / WAF | Cloudflare | Global edge (ephemeral, no PII) |
| Product analytics (consented) | PostHog | EU (Frankfurt) |
| Aggregate analytics (consented) | Google Analytics 4 | US |
| Affiliate (consented) | Rewardful | US |
| Reviews (consented) | Trustpilot | US |
| Mobile IAP | RevenueCat | US |

## Roadmap / what's in flight

- **Q3 2026:** A-level English Language + Literature
- **H3 (multi-week content workstream):** EAL B1/B2/C1 genuine level-differentiated content
- **Deferred (founder decision, 2026-05-20):** Qatari legal opinion engagement + Article 16 permit submission
- **Deferred (founder decision, 2026-05-20):** NIA cybersecurity certification
- **In-cycle:** sworn Arabic translation of the Qatar privacy notice (separate workstream from the legal opinion)
- **In-cycle:** DPO mailbox send-as configuration in Google Workspace

## Numbers you can safely quote

| Number | What it actually is |
|---|---|
| 6 | Exam boards covered (AQA, Edexcel, OCR, Eduqas, WJEC, Cambridge IGCSE) |
| 10 | Founding Schools cohort cap |
| £4,000 | Founding annual deployment fee per school per year |
| £8,000 | Standard annual deployment fee per school per year (from August 2026) |
| 7 days | Free trial length, card required, auto-converts |
| 11 | Minimum user age |
| 18 | Children's Code minor threshold |
| 16 | High-privacy defaults threshold (continues to under-18 but stricter <16) |
| 30 | Calendar days — PDPPL data subject response SLA |
| 72 | Hours — breach notification deadline (UK GDPR + PDPPL) |
| 24 | Hours — safeguarding acknowledgement SLA |
| 1380 | Static pages in the build (last verified count — for "we're a substantial product" credibility) |

## Numbers you must NOT quote

- ❌ "We mark X essays per week" (we don't publicly disclose this and it shifts)
- ❌ "We have X paying schools" — none signed yet under Founding cohort terms
- ❌ "X% of students who use us improve their grade by N" — we have no validated outcome data
- ❌ "Our AI achieves X% accuracy vs human markers" — no validation study completed
- ❌ "We process X million essays per year" — not validated

If pressed for any of these, say: *"Honestly, we're a launch-stage company and I won't quote a number I can't defend. Once we have validated outcome data from the Founding cohort, that's exactly what we'll publish."*

That answer is more credible than any made-up number.
