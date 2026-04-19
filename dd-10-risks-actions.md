# DD-10 — Risk Register & Action Plan

**Target:** The English Hub SaaS (trading name of Upskill Energy Limited, company no. 16511479)
**Report date:** 12 April 2026 — Cycle 3 revision (v5, FINAL)
**Prepared for:** Buy-side principal / acquirer deal team
**Author:** Senior M&A Analyst, Commercial DD
**Status:** Final — for investment committee use

> This is a buyer-side report. It is written for someone signing a cheque, not for the founder. Where the evidence is thin or the posture is wishful, we say so. Where there is genuine value, we say that too. Cheerleading helps nobody; neither does reflexive negativity. The goal is a price.

---

## 0. Executive summary

**One-liner:** An interesting content-led EdTech asset with real product surface area, genuine differentiation on children's-data compliance posture, and serious diligence blockers that require 90 days of structured clean-up before any buyer will pay full price.

**Headline findings:**

1. **The operating entity is wrong.** Trading name is "The English Hub" but the legal entity is **Upskill Energy Limited, company no. 16511479**, with contact email `info@Upskillenergy.com`. A documented entity restructure plan exists but has **not been executed**. This alone is a conditional-LOI blocker.
2. **Examiner credential IP is unassigned.** The core differentiator ("written by former AQA / Edexcel / Cambridge examiners") rests on template contracts that have not been signed. Buyer cannot rely on the marketing claim post-close.
3. **Financial records are aspirational.** Every schedule in `data-room/01-financials/` is a `[PLACEHOLDER]` template. No verifiable ARR, no cohort data, no CAC/LTV, no unit economics. The Information Memorandum is a blank form.
4. **Codebase quality at its strongest point across all three cycles.** TODOs cut from 118 to 32 (73% reduction). `next-auth` dependency removed. Test coverage now at 44 files (33 unit + 11 E2E), all passing, with pre-commit hooks enforcing quality gates. SBOM and operational runbook now in place. Bundle analyzer available for technical DD. Env validation overhauled. Prisma board map fixed (stale enum references updated). Migration readiness addressed (script created, new migration file for Cycle 1-2 schema changes). Build system issues persist (TS and ESLint disabled at build time).
5. **Copyright exposure on in-copyright modern poets is material (partially mitigated).** Quotes trimmed to 15 words or fewer across ~78 data files. Fair dealing notices added. Residual risk remains for systematic compilation in a commercial SaaS context. No CLA licence evidenced.
6. **Children's Code compliance posture now fully mature.** All 4 P1 gaps closed. DPIA remains "DRAFT" pending external DPO sign-off. AI opt-out enforced server-side. Student email PII fully resolved (ClassStudent was the last field -- now removed). Safeguarding signposting gap closed (helpline numbers now displayed on self-harm detection).
7. **Compliance documentation substantially populated.** DPA template, safeguarding policy, Transfer Impact Assessments (TIAs) for all US subprocessors, and subprocessor register are now in place. This shifts the compliance narrative from "templates exist" to "policies are documented and substantive."

**Cycle 3 improvement assessment:** Cycle 3 (12 April 2026, FINAL) delivered the final layer of technical and compliance polish across all three cycles. Key completions: safeguarding signposting gap closed with helpline numbers on self-harm detection; Prisma board map fixed (stale enum references that would have broken queries); student email PII fully resolved with ClassStudent field removal; TIAs completed for all US subprocessors; compliance docs substantially populated (DPA, safeguarding, TIA, subprocessor register); migration readiness script and migration file created; bundle analyzer available; env validation overhauled. All five CRITICAL commercial, legal, and financial risks remain unchanged because they require legal, financial, and commercial execution that code cannot deliver.

**Recommendation in one line:** **CONDITIONAL** acquisition at a meaningful discount to asking price, subject to a 90-day seller-funded clean-up checklist and a structured earn-out that aligns the founder through the first renewal cycle.

---

## 1. Risk register

### Risk ID format

`R-[Category]-[Number]` where categories are:

- **COM** = Commercial
- **TEC** = Technical
- **LIP** = Legal / IP
- **CMP** = Compliance
- **MKT** = Market
- **OPS** = Operational
- **FIN** = Financial

### Severity scoring

- **Likelihood:** 1 (Remote) / 2 (Unlikely) / 3 (Possible) / 4 (Likely) / 5 (Almost certain)
- **Impact:** 1 (Negligible) / 2 (Minor) / 3 (Moderate) / 4 (Major) / 5 (Catastrophic)
- **Risk score:** Likelihood x Impact. CRITICAL = 15-25, HIGH = 10-14, MEDIUM = 5-9, LOW = 1-4.

---

## 2. CRITICAL risks (score 15-25) — deal-breakers if unresolved

### R-LIP-01: Wrong operating entity / brand confusion

| Field | Detail |
|---|---|
| **Category** | Legal / IP |
| **Severity** | CRITICAL |
| **Likelihood** | 5 (Certain — it is currently the case) |
| **Impact** | 5 (Catastrophic — buyer cannot acquire the named brand) |
| **Risk score** | 25 |
| **Evidence** | Footer shows "A trading name of Upskill Energy Limited, Company No. 16511479" with contact email `info@Upskillenergy.com`. Entity restructure plan exists in `business-docs/entity-restructure/` but Phase 1 (incorporate The English Hub Ltd) has not been executed. |
| **Consequence** | Share sale acquires an entity whose legal name bears no relation to the product. Contamination risk from potential historic liabilities of a company originally positioned in renewable energy. Stamp duty exposure. VAT TOGC complications. Every customer relationship is technically with the wrong entity name. |
| **Mitigation** | Execute the documented 6-phase restructure plan before signing: incorporate The English Hub Ltd, execute Asset Transfer Agreement with TOGC treatment, IP assignment deed, novation letters, update all customer-facing legal identifiers, file TM16 at Companies House. |
| **Owner** | Founder + solicitor |
| **Timeline** | 6-8 weeks |
| **Cost** | £8,000-£15,000 |
| **Cycle 3 status** | NOT ADDRESSED |

### R-FIN-01: Zero verifiable revenue / unit economics

| Field | Detail |
|---|---|
| **Category** | Financial |
| **Severity** | CRITICAL |
| **Likelihood** | 5 (Certain — no financial records exist) |
| **Impact** | 5 (Catastrophic — cannot price the deal) |
| **Risk score** | 25 |
| **Evidence** | Every file in `data-room/01-financials/` is a template: `financial-model-template.csv`, `arr-bridge-template.csv`, `cohort-retention-template.csv`. Key-assumptions file contains `[X]` and `[N]` placeholders. IM is a blank form. |
| **Consequence** | Buyer cannot determine ARR, churn, CAC, LTV, or margin. Deal either stalls or re-prices to an asset-sale floor (£150-300K). The revenue multiple that drives valuation literally cannot be computed. |
| **Mitigation** | Pre-LOI: demand 12 months of Stripe export + bank statements + management accounts. Engage bookkeeper, reconcile to Xero, produce accountant-prepared year-end statements and a clean ARR bridge. |
| **Owner** | Founder + bookkeeper + accountant |
| **Timeline** | 4-6 weeks |
| **Cost** | £4,500-£9,000 |
| **Cycle 3 status** | NOT ADDRESSED |

### R-FIN-02: Missing professional financial records

| Field | Detail |
|---|---|
| **Category** | Financial |
| **Severity** | CRITICAL |
| **Likelihood** | 5 (Certain) |
| **Impact** | 4 (Major — hidden liabilities unverifiable) |
| **Risk score** | 20 |
| **Evidence** | No management accounts, no reconciled bookkeeping, no accountant-prepared year-end visible in the data room. Related to R-FIN-01 but distinct: even at pre-revenue, a buyer needs to confirm no hidden liabilities. |
| **Consequence** | Buyer cannot confirm absence of debt, tax arrears, contractor claims, or other encumbrances against the entity. Lenders and W&I underwriters will not proceed. |
| **Mitigation** | Same as R-FIN-01. Additionally, produce Companies House confirmation statement and ensure CT600 filings are current. |
| **Owner** | Founder + accountant |
| **Timeline** | 4-6 weeks |
| **Cost** | Included in R-FIN-01 |
| **Cycle 3 status** | NOT ADDRESSED |

### R-LIP-02: Examiner credential IP unassigned

| Field | Detail |
|---|---|
| **Category** | Legal / IP |
| **Severity** | CRITICAL |
| **Likelihood** | 5 (Certain — templates exist but are unsigned) |
| **Impact** | 4 (Major — 30-50% of content moat evaporates) |
| **Risk score** | 20 |
| **Evidence** | `business-docs/examiner-credentials/README.md` explicitly states every document is a template requiring solicitor review before execution. The "written by former AQA examiners" marketing claim has no enforceable contractual basis. |
| **Consequence** | Post-close, buyer cannot legally claim examiner authorship. Named contributors could revoke implicit permission, claim ownership, or approach competitors. The core marketing differentiator is indefensible. |
| **Mitigation** | Execute historic-work retrospective assignment deeds for every named examiner. Sign contributor agreements going forward. Collect CV + credential verification evidence. Budget £500-£1,000 per examiner honorarium if contested. |
| **Owner** | Founder + IP solicitor |
| **Timeline** | 4-6 weeks |
| **Cost** | £2,000-£4,000 solicitor + £500-£1,000 per examiner |
| **Cycle 3 status** | NOT ADDRESSED |

### R-OPS-01: Key-person / bus factor = 1

| Field | Detail |
|---|---|
| **Category** | Operational |
| **Severity** | CRITICAL |
| **Likelihood** | 5 (Certain — single committer across all commits) |
| **Impact** | 4 (Major — founder departure = total business failure) |
| **Risk score** | 20 |
| **Evidence** | Git log shows a single committer across 100% of commits. No employees, no co-founders, no second engineer. 449K LOC maintained by one person with AI assistance. |
| **Consequence** | Founder illness, disengagement, or departure post-close renders the business inoperable. No institutional knowledge transfer mechanism exists. The "why" behind 449K lines of code lives in one person's memory. |
| **Mitigation** | Founder earn-out (24 months), 6-12 month structured transition, buyer-funded deputy engineer as condition of close, documentation sprint during transition period. |
| **Owner** | Deal structure / buyer |
| **Timeline** | Condition of close |
| **Cost** | Embedded in deal terms |
| **Cycle 3 status** | FURTHER MITIGATED (incrementally). Operational runbook, SBOM, migration readiness script, and bundle analyzer all reduce knowledge concentration. Env validation overhaul means fewer undocumented deployment secrets. Structural risk fundamentally unchanged. |

---

## 3. HIGH risks (score 10-14) — significant value impact

### R-LIP-03: Content copyright on modern poets (commercial SaaS exposure)

| Field | Detail |
|---|---|
| **Category** | Legal / IP |
| **Severity** | HIGH |
| **Likelihood** | 3 (Possible) |
| **Impact** | 4 (Major — forced content strip-out or legal action) |
| **Risk score** | 12 |
| **Evidence** | AQA Power & Conflict course quotes Armitage ("Remains", 2008 - in copyright), Duffy ("War Photographer"), Heaney ("Storm on the Island", 1966 - estate controls to 2063), Weir ("Poppies", 2009), Dharker, and Priestley (in copyright to 2054). Quotations trimmed to 15 words or fewer with fair dealing notices across 78 data files. Individual fragments are defensible as fair dealing for criticism/review; the systematic compilation across a commercial SaaS platform is a harder case. No CLA Education Platform Licence evidenced. |
| **Consequence** | Poet's estate, publisher, or CLA enforcement action could force content removal of the most commercially valuable modules. Reputational damage with schools. Legal costs even if defensible. |
| **Mitigation** | (a) Obtain CLA Education Platform Licence (£500-£2,000/year), (b) obtain explicit permissions from estates/publishers for key works, or (c) strip all verbatim quotations and redirect users to owned anthologies. Legal opinion letter required. |
| **Owner** | IP solicitor + founder |
| **Timeline** | 3-4 weeks |
| **Cost** | £3,000-£6,000 opinion letter + licence costs |
| **Cycle 3 status** | UNCHANGED from Waves 1-3. Quotes trimmed, fair dealing notices in place, IGCSE audit completed. Residual compilation risk remains. |

### R-TEC-01: Build system on life support / Vercel OOM

| Field | Detail |
|---|---|
| **Category** | Technical |
| **Severity** | HIGH |
| **Likelihood** | 4 (Likely — actively causing workarounds) |
| **Impact** | 3 (Moderate — deployability risk, not data loss) |
| **Risk score** | 12 |
| **Evidence** | `next.config.js` disables TypeScript checking and ESLint during builds due to OOM on 700+ routes. Sentry source map upload disabled. CI pipeline, pre-commit hooks, and bundle analyzer exist as compensating controls. |
| **Consequence** | Type errors and lint failures can ship to production undetected if CI is bypassed. Sentry error tracking lacks source maps, degrading incident response. Any buyer's CTO reading this config will flag it as a deployment risk. |
| **Mitigation** | Reduce route count by consolidating dynamic segments (potentially 721 to ~200 with `[slug]` patterns). Upgrade Vercel plan or switch to self-hosted builds with more memory. Re-enable Sentry source maps. 2-3 week engineering sprint. |
| **Owner** | Engineering lead |
| **Timeline** | 2-3 weeks |
| **Cost** | £6,000-£12,000 |
| **Cycle 3 status** | SLIGHTLY IMPROVED. Bundle analyzer now available for technical DD diagnostics. Pre-commit hooks enforce tests passing before commit. Core issue (TS/ESLint/Sentry disabled at build) unchanged. |

### R-COM-01: Zero school penetration / no closed revenue

| Field | Detail |
|---|---|
| **Category** | Commercial |
| **Severity** | HIGH |
| **Likelihood** | 5 (Certain — no signed school customers) |
| **Impact** | 3 (Moderate — limits valuation multiple) |
| **Risk score** | 15 |
| **Evidence** | `customer-references-template.md` has "FILL IN" across every field. B2B sales playbook, GTM strategy, and affiliate marketing assets exist as finished documents but represent pipeline preparation, not closed deals. No school MSA or pilot agreement in the data room. |
| **Consequence** | Buyer prices the deal as pre-revenue / pre-product-market-fit. Enterprise credibility is zero. "Built for schools" without a single school customer is marketing, not evidence. |
| **Mitigation** | Launch a Founding Schools programme: 3-5 schools on free/discounted pilots with signed MSAs, case studies, and willingness to take DD reference calls. |
| **Owner** | Founder |
| **Timeline** | 8-12 weeks |
| **Cost** | £0 direct + 20-40 hours founder sales time |
| **Cycle 3 status** | NOT ADDRESSED |

### R-COM-02: AI commoditisation of study-buddy layer

| Field | Detail |
|---|---|
| **Category** | Commercial |
| **Severity** | HIGH |
| **Likelihood** | 4 (Likely — 60-70% probability in 12 months) |
| **Impact** | 3 (Moderate — B2C pricing power collapses) |
| **Risk score** | 12 |
| **Evidence** | ChatGPT, Claude, and Gemini are becoming free or near-free for students. "AI-assisted feedback reviewed by teachers" is the stated differentiator, but generic AI revision assistance is commoditising rapidly. AI agents deepen AI dependency. |
| **Consequence** | Consumer pricing power collapses. B2C funnel evaporates. School channel becomes the only viable monetisation route. AI features become table stakes, not differentiators. |
| **Mitigation** | Reposition around curriculum alignment, examiner credibility, and school workflow integration. Content + distribution moat, not AI moat. Ensure AI features add value through exam-board specificity that generic models cannot replicate. |
| **Owner** | Product / founder |
| **Timeline** | Ongoing strategic |
| **Cost** | Product development time |
| **Cycle 3 status** | UNCHANGED. Strategic risk persists. |

---

## 4. MEDIUM risks (score 5-9) — manageable with action

### R-CMP-01: Children's Code — fully mature, external sign-off outstanding

| Field | Detail |
|---|---|
| **Category** | Compliance |
| **Severity** | MEDIUM (maintained at MEDIUM-6) |
| **Likelihood** | 2 (Unlikely — all P1 gaps closed, safeguarding signposting complete) |
| **Impact** | 3 (Moderate — enforcement action, reputational) |
| **Risk score** | 6 |
| **Evidence** | All 4 P1 gaps closed in Cycles 1-2. Cycle 3 closed the safeguarding signposting gap: helpline numbers now displayed on self-harm detection. AI opt-out enforced server-side. Student email PII fully resolved (ClassStudent was the last field -- now removed). Compliance documentation substantially populated: DPA template, safeguarding policy, TIAs for all US subprocessors, subprocessor register. DPIA remains "DRAFT" pending external DPO sign-off. |
| **Consequence** | ICO enforcement risk is now bounded and narrow. An ICO inspector would find documented, implemented controls with audit trails, safeguarding signposting active, and comprehensive compliance documentation. Residual risk is procedural (external DPO sign-off) rather than technical or policy-based. |
| **Mitigation** | (a) Engage qualified external DPO for DPIA sign-off. (b) Independent audit of Cycle 1-3 compliance work. (c) Maintain cookie consent log retention policy. |
| **Owner** | External DPO + founder |
| **Timeline** | 2-3 weeks |
| **Cost** | £1,500-£3,000 |
| **Cycle 3 status** | FURTHER STRENGTHENED within MEDIUM (6). Safeguarding signposting closed. Student email PII last field removed. TIAs complete for all US subprocessors. DPA, safeguarding policy, subprocessor register populated. Score unchanged because the remaining gap (external DPO sign-off) is the same, but the evidence base for that sign-off is now substantially stronger. |

### R-TEC-02: Residual codebase duplication / technical debt

| Field | Detail |
|---|---|
| **Category** | Technical |
| **Severity** | MEDIUM (further improved) |
| **Likelihood** | 2 (Unlikely — reduced scope of remaining issues) |
| **Impact** | 3 (Moderate — code quality signal, not functional failure) |
| **Risk score** | 6 |
| **Evidence** | TODOs cut from 118 to 32 (73% reduction). `next-auth` dependency removed. Pre-commit hooks enforce all tests passing. SBOM generated. Operational runbook in place. Prisma board map fixed (stale enum references updated -- these would have caused query failures). Migration readiness addressed with script and new migration file for Cycle 1-2 schema changes. Env validation overhauled. Bundle analyzer available. Some duplication may remain in board-filter and affiliate route trees, but the scale of technical debt is materially smaller and governance tooling is comprehensive. |
| **Consequence** | Technical DD now finds a codebase with active quality governance (pre-commit hooks, SBOM, runbook, passing tests, bundle analyzer, migration tooling, env validation) rather than unmanaged sprawl. Remaining 32 TODOs and some duplication are normal early-stage cleanup items. Signal is "well-managed solo project" rather than "AI-generated debt." |
| **Mitigation** | Continue TODO triage. Unify any remaining board-filter duplication. Delete redundant affiliate route tree. 1 week engineering sprint. |
| **Owner** | Founder / engineering |
| **Timeline** | 1 week |
| **Cost** | £2,000-£4,000 |
| **Cycle 3 status** | FURTHER STRENGTHENED within MEDIUM (6). Prisma board map fixed, migration readiness script created, env validation overhauled, bundle analyzer available. Score unchanged but the evidence base for technical governance is now comprehensive. |

### R-TEC-03: Automated test coverage — good foundation, expansion needed

| Field | Detail |
|---|---|
| **Category** | Technical |
| **Severity** | MEDIUM (maintained) |
| **Likelihood** | 2 (Unlikely — regression risk meaningfully reduced) |
| **Impact** | 3 (Moderate — quality risk, not catastrophic) |
| **Risk score** | 6 |
| **Evidence** | Test files at 44 (33 unit + 11 E2E). All tests passing. Pre-commit hooks enforce test suite passes before every commit. E2E infrastructure with Playwright covers critical user journeys. Coverage remains thin relative to 449K LOC and 721 routes, but critical paths are tested and the quality gate is enforced rather than optional. |
| **Consequence** | Regression risk is meaningfully reduced. The combination of expanded test files and enforced pre-commit hooks means quality is no longer discretionary. Buyer's engineering team inherits a tested, gate-enforced codebase rather than a best-effort testing culture. |
| **Mitigation** | Continue expanding E2E coverage for critical user flows. Target 40%+ line coverage on business-critical modules. Infrastructure and enforcement are in place — this is execution, not architecture. |
| **Owner** | Engineering |
| **Timeline** | 4-6 weeks (ongoing) |
| **Cost** | £3,000-£6,000 |
| **Cycle 3 status** | NO CHANGE from Cycle 2. Test infrastructure and enforcement stable. |

### R-MKT-01: Single-market dependency (UK GCSE / IGCSE)

| Field | Detail |
|---|---|
| **Category** | Market |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible) |
| **Impact** | 3 (Moderate) |
| **Risk score** | 9 |
| **Evidence** | All content tied to UK exam boards (AQA, Edexcel, OCR, Eduqas) plus Cambridge IGCSE. No US/EU/MENA localisation in codebase despite GTM decks referencing Middle East expansion. UK secondary school population peaks 2026, declines ~97,000 by 2030. |
| **Consequence** | A spec overhaul or DfE funding cut hits 100% of revenue. Demographic headwind reduces TAM over the deal horizon. No diversification path currently in code. |
| **Mitigation** | Post-acquisition diversification into international curricula (IB, AP). IGCSE content provides a foundation for international schools. Not fixable pre-sale. |
| **Owner** | Post-acquisition strategy |
| **Timeline** | 12-24 months post-close |
| **Cost** | Product development investment |
| **Cycle 3 status** | NO CHANGE |

### R-MKT-02: Exam specification overhaul risk

| Field | Detail |
|---|---|
| **Category** | Market |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible — 20-30% in any cycle) |
| **Impact** | 3 (Moderate — 30-60% content rework) |
| **Risk score** | 9 |
| **Evidence** | Content is structured in spec-aware modules. AQA Power & Conflict, Edexcel anthology, and IGCSE modules are all tied to current exam board specifications. A spec change would require 6-12 months of content rework. |
| **Consequence** | Spec change obsoletes a large portion of the content library. Competitive disadvantage during transition period. |
| **Mitigation** | Modular content structure is already in place. Maintain a spec changelog capability. Budget for content refresh in acquisition model. |
| **Owner** | Content / product |
| **Timeline** | Ongoing monitoring |
| **Cost** | Contingency budgeting |
| **Cycle 3 status** | NO CHANGE |

### R-MKT-03: Competitive pressure (Seneca, GCSEPod, BBC Bitesize)

| Field | Detail |
|---|---|
| **Category** | Market |
| **Severity** | MEDIUM |
| **Likelihood** | 4 (Likely — competitors are entrenched) |
| **Impact** | 2 (Minor — niche defensibility exists) |
| **Risk score** | 8 |
| **Evidence** | Seneca Learning has ~90% UK secondary school penetration. GCSEPod serves 1,600+ schools. BBC Bitesize is free. The English Hub has zero school customers. Market entry requires differentiation on depth, exam-board specificity, and compliance posture. |
| **Consequence** | Customer acquisition costs are high against entrenched competitors. Free alternatives (BBC Bitesize) create price sensitivity. Niche positioning on English-only may limit TAM. |
| **Mitigation** | Compete on content depth, examiner credibility, children's-data compliance, and exam-board specificity rather than breadth. Target schools dissatisfied with generic platforms. |
| **Owner** | Commercial strategy |
| **Timeline** | Ongoing |
| **Cost** | Sales and marketing investment |
| **Cycle 3 status** | NO CHANGE |

### R-MKT-04: UK secondary school demographic decline

| Field | Detail |
|---|---|
| **Category** | Market |
| **Severity** | MEDIUM |
| **Likelihood** | 5 (Almost certain — demographic data is reliable) |
| **Impact** | 2 (Minor — gradual decline, not cliff) |
| **Risk score** | 10 |
| **Evidence** | UK secondary school population peaks in 2026, with projected decline of ~97,000 pupils by 2030. This is a structural headwind for any product priced per-pupil or dependent on school budgets. |
| **Consequence** | Total addressable market contracts over the deal horizon. Per-pupil revenue models face arithmetic decline. School budget pressure intensifies. |
| **Mitigation** | Price on per-school or per-MAT basis rather than per-pupil. International expansion via IGCSE corridor. Offset with deeper penetration rather than broader market. |
| **Owner** | Commercial strategy |
| **Timeline** | Structural — 2026-2030 |
| **Cost** | Strategic planning |
| **Cycle 3 status** | NO CHANGE (external factor) |

### R-CMP-03: AI regulation (UK AI Bill)

| Field | Detail |
|---|---|
| **Category** | Compliance |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible — legislation expected 2026-2027) |
| **Impact** | 2 (Minor at current scale) |
| **Risk score** | 6 |
| **Evidence** | UK forthcoming AI Bill and ICO guidance on "AI decisions affecting children" will require transparency, human review, and bias auditing. AI agents increase the surface area for AI regulation. |
| **Consequence** | May require model provenance documentation, human-in-the-loop review processes, bias testing, and transparency disclosures for AI features affecting children's education. |
| **Mitigation** | Document model provenance, human review processes, and bias testing. Nice-to-have now, necessary at £1M ARR. |
| **Owner** | Product / compliance |
| **Timeline** | 6-12 months |
| **Cost** | £5,000-£10,000 |
| **Cycle 3 status** | FURTHER MITIGATED. AI opt-out enforced server-side. AI explainer page in place. Compliance documentation (DPA, safeguarding policy) now provides foundational documentation that AI regulation will build upon. Score unchanged but preparedness continues to strengthen. |

### R-OPS-02: Founder attention risk / side project concern

| Field | Detail |
|---|---|
| **Category** | Operational |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible) |
| **Impact** | 3 (Moderate) |
| **Risk score** | 9 |
| **Evidence** | Entity name "Upskill Energy Limited" suggests a prior or parallel renewable-energy business. Sheer breadth of codebase (449K LOC) vs. single committer suggests AI-assisted full-time attention, but the question of whether other ventures compete for founder time is unanswered. |
| **Consequence** | Divided attention during earn-out period undermines transition. Burn rate may be shared across multiple ventures. |
| **Mitigation** | DD question to founder: is The English Hub the sole venture? Earn-out should include full-time commitment clause. |
| **Owner** | DD team |
| **Timeline** | Pre-LOI |
| **Cost** | None |
| **Cycle 3 status** | NO CHANGE |

### R-OPS-03: Code volume vs. institutional knowledge paradox

| Field | Detail |
|---|---|
| **Category** | Operational |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible — reduced from 4) |
| **Impact** | 2 (Minor) |
| **Risk score** | 6 (reduced from 8) |
| **Evidence** | 449K LOC, 721 routes from a single committer. Only possible with significant AI-assisted coding. Development pattern demonstrates the AI-augmented model clearly. |
| **Consequence** | Human knowledge of code intent may be thinner than surface area suggests. Dead code accumulates faster than pruning. Hand-off cost is high. |
| **Mitigation** | Documentation sprint during transition. Structured code walkthrough as earn-out milestone. Buyer-funded engineer shadow period. |
| **Owner** | Post-acquisition engineering |
| **Timeline** | First 90 days post-close |
| **Cost** | Embedded in transition |
| **Cycle 3 status** | DOWNGRADED from MEDIUM (8) to MEDIUM (6). Cumulative across three cycles: operational runbook, SBOM, expanded tests with pre-commit hooks, migration readiness script, env validation overhaul, and bundle analyzer now create a meaningful institutional-knowledge substitute. A second engineer onboarding today has materially more to work with than at Cycle 1. Likelihood reduced from 4 to 3 reflecting reduced hand-off cost. |

### R-TEC-04: Mobile app not deployed (scaffold only)

| Field | Detail |
|---|---|
| **Category** | Technical |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible — schools may require native app) |
| **Impact** | 2 (Minor — PWA may suffice) |
| **Risk score** | 6 |
| **Evidence** | Mobile app scaffold exists but is not deployed to App Store or Google Play. Schools increasingly expect native mobile access for student engagement. |
| **Consequence** | School procurement may require native mobile app. Students expect mobile-first experience. Gap between marketing claim and reality. |
| **Mitigation** | Deploy PWA or complete native app. React Native or Capacitor wrapper of existing Next.js app is 2-4 weeks. |
| **Owner** | Engineering |
| **Timeline** | Post-acquisition |
| **Cost** | £4,000-£8,000 |
| **Cycle 3 status** | NO CHANGE |

### R-LIP-04: Trademark not filed

| Field | Detail |
|---|---|
| **Category** | Legal / IP |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible — another party could file) |
| **Impact** | 2 (Minor — common law rights exist) |
| **Risk score** | 6 |
| **Evidence** | No evidence of UKIPO, EUIPO, or USPTO trademark filing for "The English Hub" word mark or logo. Common law rights from use exist but are harder and more expensive to enforce. |
| **Consequence** | Third party could file the mark. Enforcement of brand rights is more costly. School procurement may check TM status. |
| **Mitigation** | File UKIPO word mark + logo in classes 9, 41, 42. Consider EUIPO and USPTO intent-to-use if international expansion planned. |
| **Owner** | TM attorney |
| **Timeline** | 3-4 weeks filing, 4-6 months registration |
| **Cost** | £1,500-£3,000 + £170/class |
| **Cycle 3 status** | NOT ADDRESSED |

### R-FIN-03: Burn rate / runway opacity

| Field | Detail |
|---|---|
| **Category** | Financial |
| **Severity** | MEDIUM |
| **Likelihood** | 3 (Possible) |
| **Impact** | 3 (Moderate — fire sale pressure) |
| **Risk score** | 9 |
| **Evidence** | No financial records means no visibility on monthly cash burn. If runway is shorter than the 90-day clean-up plan, the sale process is under time pressure. Buyers sense urgency and discount accordingly. |
| **Consequence** | Founder may be forced into fire sale terms. Clean-up programme cannot complete before runway expires. |
| **Mitigation** | DD question: how many months of runway at current burn? Produce cash flow forecast. |
| **Owner** | DD team / founder |
| **Timeline** | Pre-LOI |
| **Cost** | None |
| **Cycle 3 status** | NOT ADDRESSED |

---

## 5. LOW risks (score 1-4) — monitor only

### R-CMP-02: Online Safety Act compliance gap

| Field | Detail |
|---|---|
| **Category** | Compliance |
| **Severity** | LOW (maintained) |
| **Likelihood** | 2 (Unlikely — compliance page published, safeguarding signposting now active) |
| **Impact** | 2 (Minor — regulatory action) |
| **Risk score** | 4 |
| **Evidence** | Compliance page published at `/legal/online-safety`. Safeguarding signposting now active: helpline numbers displayed on self-harm detection. Safeguarding policy documented. Phased enforcement throughout 2025-2027 gives time for further refinement. |
| **Consequence** | Residual risk is procedural rather than structural. Published compliance page and active safeguarding signposting demonstrate awareness and good faith. Ofcom enforcement would find a documented, active position. |
| **Mitigation** | Monitor Ofcom guidance updates. Review compliance page annually. Ensure content moderation procedures are operationally followed, not just documented. |
| **Owner** | Compliance / founder |
| **Timeline** | Ongoing monitoring |
| **Cost** | Minimal |
| **Cycle 3 status** | FURTHER STRENGTHENED within LOW (4). Safeguarding signposting with helpline numbers now active on self-harm detection. Safeguarding policy documented. |

### R-CMP-04: No SOC 2 / ISO 27001 certification

| Field | Detail |
|---|---|
| **Category** | Compliance |
| **Severity** | LOW |
| **Likelihood** | 2 (Unlikely at current scale) |
| **Impact** | 2 (Minor) |
| **Risk score** | 4 |
| **Evidence** | Structural for stage. Sub-scale EdTech typically does not hold SOC 2 or ISO 27001. Cyber Essentials Plus is the pragmatic UK EdTech target. |
| **Mitigation** | Achieve Cyber Essentials Plus pre-sale. SOC 2 is a post-acquisition scaling concern. |
| **Cycle 3 status** | NO CHANGE |

### R-COM-03: Informal customer contracts

| Field | Detail |
|---|---|
| **Category** | Commercial |
| **Severity** | LOW |
| **Likelihood** | 2 (Unlikely — sub-scale norm) |
| **Impact** | 2 (Minor) |
| **Risk score** | 4 |
| **Evidence** | No standardised MSA visible. At pre-revenue with zero school customers, this is normal but will need to be formalised for any school pilot. DPA template now in place for data processing agreements. |
| **Mitigation** | Roll any customers onto standard MSA template. Priority rises with first school customer. DPA template provides foundation for school procurement requirements. |
| **Cycle 3 status** | SLIGHTLY IMPROVED. DPA template now available, reducing preparation time for first school customer contract. Score unchanged. |

### R-TEC-05: Third-party AI provider dependency

| Field | Detail |
|---|---|
| **Category** | Technical |
| **Severity** | LOW |
| **Likelihood** | 2 (Unlikely — market diversifying) |
| **Impact** | 2 (Minor — abstracted, swappable) |
| **Risk score** | 4 |
| **Evidence** | AI features depend on external model providers. Architecture appears abstracted. Market has multiple viable providers (OpenAI, Anthropic, Google, open-source). TIAs now completed for all US subprocessors including AI providers, documenting data transfer risk. |
| **Mitigation** | Ensure provider abstraction layer allows switching. Monitor pricing. TIAs provide documented risk assessment for each provider. |
| **Cycle 3 status** | SLIGHTLY IMPROVED. TIAs for all US subprocessors now complete, providing documented assessment of data transfer and provider risk. Score unchanged. |

### R-TEC-06: Supabase / Vercel pricing shock

| Field | Detail |
|---|---|
| **Category** | Technical |
| **Severity** | LOW |
| **Likelihood** | 2 (Unlikely) |
| **Impact** | 2 (Minor — architecture portable) |
| **Risk score** | 4 |
| **Evidence** | Infrastructure vendor concentration on Supabase + Vercel. Pricing changes could impact margins. Architecture is standard Next.js + Postgres, portable to alternative hosting. Subprocessor register now documents all infrastructure providers. |
| **Mitigation** | Migration to self-hosted or alternative providers is 4-8 weeks if needed. Subprocessor register provides clear inventory of dependencies. |
| **Cycle 3 status** | SLIGHTLY IMPROVED. Subprocessor register now in place, providing documented inventory of infrastructure dependencies. Score unchanged. |

### R-OPS-04: No formal board / governance

| Field | Detail |
|---|---|
| **Category** | Operational |
| **Severity** | LOW |
| **Likelihood** | 2 (Structural for stage) |
| **Impact** | 1 (Negligible) |
| **Risk score** | 2 |
| **Evidence** | Single-founder company with no board, no advisory board, no formal governance. Normal for stage. |
| **Mitigation** | Post-acquisition governance establishment. |
| **Cycle 3 status** | NO CHANGE |

---

## 6. Closed / resolved risks

### R-CMP-07: Safeguarding signposting gap (NEW — opened and closed in Cycle 3)

| Field | Detail |
|---|---|
| **Flagged in** | Cycle 3 review |
| **Resolution** | Helpline numbers now displayed on self-harm detection. Safeguarding signposting fully implemented. |
| **Status** | CLOSED |

### R-TEC-07: Prisma board map stale enum references (NEW — opened and closed in Cycle 3)

| Field | Detail |
|---|---|
| **Flagged in** | Cycle 3 review |
| **Resolution** | Stale enum references in Prisma board map updated. These would have caused query failures on affected board types. |
| **Status** | CLOSED |

### R-CMP-08: Student email PII — ClassStudent field (NEW — opened and closed in Cycle 3)

| Field | Detail |
|---|---|
| **Flagged in** | Cycle 3 review (final field identified) |
| **Resolution** | ClassStudent was the last field containing student email data. Now removed. Student email PII fully resolved across all models. |
| **Status** | CLOSED |

### R-CMP-09: TIAs incomplete for US subprocessors (NEW — opened and closed in Cycle 3)

| Field | Detail |
|---|---|
| **Flagged in** | Cycle 3 review |
| **Resolution** | Transfer Impact Assessments now complete for all US subprocessors. Documented data transfer risk for each provider. |
| **Status** | CLOSED |

### R-CMP-05: AI opt-out not enforced server-side (opened and closed in Cycle 2)

| Field | Detail |
|---|---|
| **Flagged in** | DD-04 v3 |
| **Resolution** | AI opt-out preference now enforced server-side, not just via client-side toggle. Server checks opt-out state before any AI feature invocation. |
| **Status** | CLOSED |

### R-CMP-06: Student email leakage (opened and closed in Cycle 2)

| Field | Detail |
|---|---|
| **Flagged in** | Cycle 1 review |
| **Resolution** | Fully resolved. Student email addresses no longer exposed in any client-facing context. ClassStudent final field removed in Cycle 3. |
| **Status** | CLOSED |

---

## 7. Risk heat map summary

```
               Impact
          1    2    3    4    5
         +----+----+----+----+----+
    5    |    |    |R-COM|R-LIP|R-LIP|
  L      |    |    |-01 |-02 |-01 |
  i      |    |    |R-MKT|R-OPS|R-FIN|
  k      |    |    |-04 |-01 |-01 |
  e      |    |    |    |    |R-FIN|
  l      |    |    |    |    |-02 |
  i +----+----+----+----+----+----+
  h 4    |    |    |R-TEC|R-LIP|    |
  o      |    |    |-01 |-03 |    |
  o      |    |    |R-COM|    |    |
  d      |    |    |-02 |    |    |
         |    |R-MKT|    |    |    |
         |    |-03 |    |    |    |
    +----+----+----+----+----+----+
    3    |    |R-LIP|R-OPS|    |    |
         |    |-04 |-02 |    |    |
         |    |R-TEC|R-FIN|    |    |
         |    |-04 |-03 |    |    |
         |    |R-OPS|R-MKT|    |    |
         |    |-03 |-01 |    |    |
         |    |    |R-MKT|    |    |
         |    |    |-02 |    |    |
    +----+----+----+----+----+----+
    2    |R-OPS|R-CMP|R-CMP|    |    |
         |-04 |-04 |-01 |    |    |
         |    |R-COM|R-TEC|    |    |
         |    |-03 |-02 |    |    |
         |    |R-TEC|R-TEC|    |    |
         |    |-05 |-03 |    |    |
         |    |R-TEC|R-CMP|    |    |
         |    |-06 |-03 |    |    |
         |    |R-CMP|    |    |    |
         |    |-02 |    |    |    |
    +----+----+----+----+----+----+
    1    |    |    |    |    |    |
    +----+----+----+----+----+----+
```

### Summary counts by zone

| Zone | Score range | Count | Risk IDs |
|---|---|---|---|
| **CRITICAL** | 15-25 | 5 | R-LIP-01 (25), R-FIN-01 (25), R-FIN-02 (20), R-LIP-02 (20), R-OPS-01 (20) |
| **HIGH** | 10-14 | 4 | R-COM-01 (15), R-LIP-03 (12), R-TEC-01 (12), R-COM-02 (12) |
| **MEDIUM** | 5-9 | 10 | R-MKT-04 (10), R-MKT-01 (9), R-OPS-02 (9), R-FIN-03 (9), R-MKT-02 (9), R-MKT-03 (8), R-CMP-01 (6), R-TEC-02 (6), R-TEC-03 (6), R-CMP-03 (6), R-OPS-03 (6), R-TEC-04 (6), R-LIP-04 (6) |
| **LOW** | 1-4 | 6 | R-CMP-02 (4), R-CMP-04 (4), R-COM-03 (4), R-TEC-05 (4), R-TEC-06 (4), R-OPS-04 (2) |
| **CLOSED** | N/A | 6 | R-CMP-05 (AI opt-out), R-CMP-06 (student email leakage), R-CMP-07 (safeguarding signposting), R-TEC-07 (Prisma board map), R-CMP-08 (ClassStudent PII), R-CMP-09 (TIAs incomplete) |
| **TOTAL (open)** | | **25** | |

### Movement from v4 to v5 (FINAL)

| Risk | v4 zone | v5 zone | Direction |
|---|---|---|---|
| R-OPS-03 (Knowledge paradox) | MEDIUM (8) | MEDIUM (6) | Downgraded — cumulative tooling reduces hand-off cost |
| R-CMP-07 (Safeguarding signposting) | Not tracked | CLOSED | New — opened and closed in Cycle 3 |
| R-TEC-07 (Prisma board map) | Not tracked | CLOSED | New — opened and closed in Cycle 3 |
| R-CMP-08 (ClassStudent PII) | Not tracked | CLOSED | New — opened and closed in Cycle 3 |
| R-CMP-09 (TIAs incomplete) | Not tracked | CLOSED | New — opened and closed in Cycle 3 |
| All 5 CRITICAL risks | CRITICAL | CRITICAL | Unchanged |

**Net effect:** Open risk count dropped from 26 to 25 (R-OPS-03 downgrade freed a MEDIUM slot; one net reduction from the v4 MEDIUM count of 11 to 10 as R-OPS-03 remains MEDIUM but at lower score). CRITICAL count unchanged at 5. HIGH count unchanged at 4. LOW count unchanged at 6. Four new risks formally opened and closed in Cycle 3. Total closed risks now at 6 across all cycles.

### Cumulative movement across all three cycles (v2 baseline to v5 FINAL)

| Risk | v2 (pre-cycle) | v5 (FINAL) | Direction |
|---|---|---|---|
| R-CMP-01 (Children's Code) | MEDIUM (9) | MEDIUM (6) | Downgraded — all P1 gaps closed, safeguarding signposting, full compliance docs |
| R-TEC-02 (Technical debt) | MEDIUM (9) | MEDIUM (6) | Downgraded — pre-commit hooks, SBOM, runbook, Prisma fix, migration, env validation |
| R-TEC-03 (Test coverage) | MEDIUM (9) | MEDIUM (6) | Downgraded — 44 tests, all passing, pre-commit hooks |
| R-OPS-03 (Knowledge paradox) | MEDIUM (8) | MEDIUM (6) | Downgraded — cumulative tooling reduces hand-off cost |
| R-MKT-04 (Demographic decline) | HIGH (10) | MEDIUM (10) | Zone reclassified (external factor) |
| 6 risks | Various / not tracked | CLOSED | Resolved across Cycles 2-3 |
| All 5 CRITICAL risks | CRITICAL | CRITICAL | Unchanged across all cycles |

---

## 8. Cycle 3 improvement assessment (FINAL)

Cycle 3 improvements were applied on 12 April 2026. This is the final assessment across all three cycles of improvement work.

### What improved in Cycle 3

| Improvement | Risk(s) affected | Severity change |
|---|---|---|
| Safeguarding signposting: helpline numbers on self-harm detection | R-CMP-02, R-CMP-07 | R-CMP-07 closed. R-CMP-02 further strengthened within LOW (4) |
| Prisma board map: stale enum references updated | R-TEC-02, R-TEC-07 | R-TEC-07 closed. Would have caused query failures |
| Student email PII: ClassStudent last field removed | R-CMP-06, R-CMP-08 | R-CMP-08 closed. PII remediation now complete across all models |
| TIAs completed for all US subprocessors | R-TEC-05, R-CMP-09 | R-CMP-09 closed. Data transfer risk documented |
| Compliance docs substantially populated (DPA, safeguarding, TIA, subprocessor register) | R-CMP-01, R-CMP-03, R-COM-03 | Strengthens compliance posture; DPA supports school contracting |
| Migration readiness: script + migration file for Cycle 1-2 schema changes | R-TEC-02, R-OPS-03 | Reduces deployment risk and hand-off cost |
| Bundle analyzer available | R-TEC-01, R-TEC-02 | Additional diagnostic tooling for technical DD |
| Env validation overhauled | R-OPS-01, R-OPS-03, R-TEC-02 | Fewer undocumented deployment secrets |

### Cumulative improvement (Waves 1-3 + Cycles 1-3, complete)

| Improvement | Wave/Cycle | Risk(s) affected |
|---|---|---|
| Board store unified to `src/lib/board/` | Wave 1 | R-TEC-02 |
| Error boundaries added (15 `error.tsx` files) | Wave 1 | R-TEC-01, R-OPS-03 |
| Copyright quotes trimmed to <=15 words | Wave 1 | R-LIP-03 |
| Fair dealing notices added to 78 data files | Wave 1 | R-LIP-03 |
| IGCSE copyright audit completed | Wave 1 | R-LIP-03 |
| CI pipeline as compensating control | Wave 1 | R-TEC-01 |
| Test files increased 8 to 15 | Wave 2 | R-TEC-03 |
| Content safety test added | Wave 2 | R-CMP-02 |
| Children's Code templates expanded | Wave 3 | R-CMP-01 |
| AI agents added | Wave 3 | R-COM-02, R-CMP-03 |
| Children's Code 3/4 P1 gaps closed | Cycle 1 | R-CMP-01 |
| Online Safety Act compliance page published | Cycle 1 | R-CMP-02 |
| Tests doubled (15 to 32) with Playwright E2E | Cycle 1 | R-TEC-03 |
| TODOs cut 73%, next-auth removed | Cycle 1 | R-TEC-02 |
| AI explainer page + opt-out mechanism | Cycle 1 | R-CMP-03 |
| Children's Code 4/4 P1 gaps closed (cookie consent log) | Cycle 2 | R-CMP-01 |
| AI opt-out server-side enforcement | Cycle 2 | R-CMP-03, R-CMP-05 |
| Student email leakage resolved | Cycle 2 | R-CMP-06 |
| Tests expanded to 44 files (33+11), all passing | Cycle 2 | R-TEC-03 |
| Pre-commit hooks enforcing test suite | Cycle 2 | R-TEC-02, R-TEC-03, R-TEC-01 |
| SBOM generated | Cycle 2 | R-TEC-02, R-OPS-03 |
| Operational runbook | Cycle 2 | R-OPS-01, R-OPS-03 |
| Safeguarding signposting (helpline numbers on self-harm detection) | Cycle 3 | R-CMP-02, R-CMP-07 |
| Prisma board map fixed (stale enum references) | Cycle 3 | R-TEC-02, R-TEC-07 |
| Student email PII: ClassStudent last field removed | Cycle 3 | R-CMP-06, R-CMP-08 |
| TIAs completed for all US subprocessors | Cycle 3 | R-TEC-05, R-CMP-09 |
| Compliance docs populated (DPA, safeguarding, TIA, subprocessor register) | Cycle 3 | R-CMP-01, R-CMP-03, R-COM-03 |
| Migration readiness script + migration file | Cycle 3 | R-TEC-02, R-OPS-03 |
| Bundle analyzer available | Cycle 3 | R-TEC-01, R-TEC-02 |
| Env validation overhauled | Cycle 3 | R-OPS-01, R-OPS-03, R-TEC-02 |

### What has NOT improved (and will not improve through code)

| Risk | Status | Why |
|---|---|---|
| R-LIP-01: Wrong operating entity | Unchanged | Requires solicitor + Companies House execution |
| R-FIN-01: Zero verifiable revenue | Unchanged | Requires bookkeeper + accountant + Stripe export |
| R-FIN-02: Missing professional records | Unchanged | Requires accountant + CT600 filings |
| R-LIP-02: Examiner credential IP | Unchanged | Requires IP solicitor + examiner negotiation |
| R-OPS-01: Bus factor = 1 | Structurally unchanged | Requires hiring; partially mitigated by tooling |
| R-COM-01: Zero school penetration | Unchanged | Requires founder sales execution |
| R-LIP-04: Trademark not filed | Unchanged | Requires TM attorney |
| R-FIN-03: Burn rate opacity | Unchanged | Requires financial disclosure |

### Final net assessment

Three cycles of improvement work have taken the technical and compliance posture from "early-stage scramble" to "well-governed solo project ready for professional due diligence." The transformation is material:

**Compliance:** Children's Code posture is now a genuine procurement asset, not just "not a liability." All P1 technical gaps closed. Safeguarding signposting active. Student email PII fully resolved across all models. TIAs complete for all US subprocessors. DPA, safeguarding policy, and subprocessor register documented. An ICO inspector or school procurement officer would find a comprehensive, implemented compliance framework.

**Technical governance:** Pre-commit hooks, SBOM, operational runbook, bundle analyzer, migration readiness script, env validation overhaul, and 44 passing tests create a codebase that a buyer's CTO can evaluate professionally. The Prisma board map fix eliminated a latent query-failure bug. The signal is "disciplined engineering culture" rather than "AI-generated sprawl."

**Knowledge transfer:** The cumulative effect of runbook + SBOM + migration tooling + env validation + bundle analyzer + test suite materially reduces the hand-off cost embedded in R-OPS-01 and R-OPS-03. A second engineer onboarding today has executable documentation, not just tribal knowledge.

However, **all five CRITICAL risks remain unchanged** because they are legal, financial, and structural problems that code changes cannot solve. The deal-breaker profile is identical to the pre-wave baseline. The 90-day clean-up programme is about solicitors, accountants, and sales calls, not pull requests.

**Cumulative risk-reduction value (Waves 1-3 + Cycles 1-3, estimated):** £110K-£260K in avoided technical and compliance DD discounts. The Children's Code posture is now a genuine asset for school sales. The compliance documentation suite (DPA, safeguarding, TIA, subprocessor register) eliminates what would otherwise be a 4-8 week procurement blocker. The technical governance tooling eliminates the "AI-generated codebase" discount that a buyer's CTO would otherwise apply.

---

## 9. 90-day pre-sale action plan

Sequenced, costed, priority-ordered. Updated to reflect all Cycle 1-3 completions. The founder's job over the next 90 days is this list. Nothing else.

### P0 — Non-negotiable (weeks 1-8)

| # | Action | Owner | Cost | Timeline | Valuation impact | Risks addressed | Status |
|---|---|---|---|---|---|---|---|
| 1 | **Incorporate The English Hub Ltd.** Execute Asset Transfer Agreement with TOGC VAT treatment, IP assignment deed, novation letters to customers, update website footer / Ts&Cs / Privacy Policy / domain registrant / GitHub org. File TM16 at Companies House for Upskill Energy Ltd. | Founder + solicitor | £8,000-£15,000 | Weeks 1-8 | +£200-£400K | R-LIP-01 | NOT STARTED |
| 2 | **Examiner credential IP assignments.** Execute historic-work retrospective assignments for every named examiner. Sign contributor agreements going forward. Collect CV + credential verification evidence. | Founder + IP solicitor | £2,000-£4,000 + £500-£1,000/examiner | Weeks 2-6 | +£150-£300K | R-LIP-02 | NOT STARTED |
| 3 | **Professional accounts and 12-month management P&L.** Engage bookkeeper, reconcile Stripe + bank to Xero, year-end accountant-prepared statements. Produce clean ARR bridge and cohort file. Optional compilation letter for DD. | Founder + bookkeeper + accountant | £4,500-£9,000 | Weeks 1-6 | +£100-£300K | R-FIN-01, R-FIN-02, R-FIN-03 | NOT STARTED |

### P1 — High priority (weeks 2-12)

| # | Action | Owner | Cost | Timeline | Valuation impact | Risks addressed | Status |
|---|---|---|---|---|---|---|---|
| 4 | **Children's Code — external DPO sign-off.** All P1 technical gaps closed. Safeguarding signposting active. Student email PII fully resolved. TIAs complete. DPA and compliance docs populated. Engage qualified external DPO for DPIA sign-off. Independent audit of Cycle 1-3 compliance work. | Founder + external DPO | £1,500-£3,000 | Weeks 2-4 | +£50-£150K | R-CMP-01 | 95% COMPLETE (all P1 gaps closed; safeguarding signposting; AI opt-out server-side; email PII resolved; TIAs complete; compliance docs populated; external DPO sign-off remains) |
| 5 | **Content copyright resolution.** Obtain legal opinion letter on fair dealing exposure. Evaluate CLA Education Platform Licence. Decision: (a) licence, (b) explicit permissions, or (c) strip remaining verbatim quotations. | IP solicitor | £3,000-£6,000 + licence costs | Weeks 3-6 | +£50-£150K | R-LIP-03 | NOT STARTED |
| 6 | **Cyber Essentials Plus certification.** Close readiness gaps, book IASME audit, achieve Plus (not base) certification. | Founder + CE assessor | £2,500-£5,000 audit + £5,000-£10,000 remediation | Weeks 4-12 | +£200-£400K | R-CMP-04 | NOT STARTED |
| 7 | **Get 3 referenceable school customers.** Founding Schools programme: free/discounted pilots, signed MSAs, case studies, willingness to take a DD call. | Founder | £0 direct + 20-40 hours | Weeks 4-12 | +£100-£300K | R-COM-01 | NOT STARTED |
| 8 | **Codebase cleanup sprint.** Unify remaining board-filter duplication. Delete redundant affiliate route tree. Address remaining 32 TODOs. Re-enable TS and ESLint at build (requires route consolidation). Restore Sentry source maps. | Founder / contractor | £4,000-£8,000 | Weeks 3-5 | +£30-£100K | R-TEC-01, R-TEC-02 | 75% COMPLETE (TODOs 73% reduced, next-auth removed, pre-commit hooks, SBOM, runbook, Prisma board map fixed, migration script, env validation, bundle analyzer; build system and route consolidation remain) |
| 9 | **Expand test coverage.** Continue E2E expansion for critical user flows. Target 40%+ coverage on business modules. Infrastructure, enforcement, and culture are now in place — execution only. | Founder / contractor | £2,000-£5,000 | Weeks 4-8 | +£10-£30K | R-TEC-03 | 65% COMPLETE (44 tests including 11 E2E, all passing, pre-commit hooks; further expansion needed) |

### P2 — Important but deferrable (weeks 6-12)

| # | Action | Owner | Cost | Timeline | Valuation impact | Risks addressed | Status |
|---|---|---|---|---|---|---|---|
| 10 | **Trademark filing.** "The English Hub" word mark + logo, UKIPO classes 9, 41, 42. Consider EUIPO and USPTO intent-to-use. | TM attorney | £1,500-£3,000 + fees | Weeks 6-8 | +£20-£60K | R-LIP-04 | NOT STARTED |
| 11 | **Standard customer contracts.** Roll any customers onto MSA template. Prepare B2B and B2C contract suite for school pilots. DPA template now available as foundation. | Solicitor + founder | £1,000-£2,000 | Weeks 6-8 | +£30-£100K | R-COM-03 | PARTIALLY COMPLETE (DPA template in place; MSA template still needed) |
| 12 | ~~**Online Safety Act compliance documentation.**~~ | ~~Founder~~ | ~~£2,000-£5,000~~ | ~~Weeks 8-12~~ | ~~+£10-£30K~~ | ~~R-CMP-02~~ | COMPLETE (Cycles 1-3). Compliance page published. Safeguarding signposting active. Safeguarding policy documented. |
| 13 | **Mobile app deployment.** Deploy PWA or complete native app wrapper for App Store / Google Play. | Engineering | £4,000-£8,000 | Weeks 8-12 | +£10-£30K | R-TEC-04 | NOT STARTED |

### Programme cost and uplift summary (FINAL)

| Line | Low | High |
|---|---|---|
| Cash cost of remaining 90-day programme items | **£30,500** | **£66,000** |
| Already spent / completed (Cycles 1-3 + Waves 1-3) | ~£10,000-£18,000 | (founder time + tooling) |
| Opportunity cost of founder time (P0+P1 items, ~5 weeks @ £5K/wk imputed) | £25,000 | £25,000 |
| **Total remaining investment** | **£55,500** | **£91,000** |
| Low-end valuation uplift from remaining items | **£920K** | |
| High-end valuation uplift from remaining items | **£2,220K** | |
| **Net uplift (mid-point)** | **£1.0M-£1.9M for ~£73K of remaining spend** | |

**ROI:** 14-26x return on remaining programme investment. Cycles 1-3 have captured ~£110-260K of the original estimated uplift, reducing remaining cost while preserving most of the prize. The compliance documentation suite (DPA, safeguarding, TIA, subprocessor register) is particularly valuable because it eliminates what would otherwise be a multi-week procurement blocker for school customers.

---

## 10. Post-acquisition action plan (first 6 months)

### Month 1: Stabilisation

| # | Action | Owner | Cost | Success metric |
|---|---|---|---|---|
| 1 | Founder onboarding into acquirer's org. Access, accounts, reporting lines, earn-out documentation signed. | Deal team | Embedded in deal | Founder operational in acquirer systems |
| 2 | Hire deputy engineer (senior Next.js/React). Shadow period with founder. Runbook, SBOM, migration tooling, and env validation provide structured onboarding materials. | Acquirer HR | £70-£90K/year (pro rata) | Engineer can ship to production unassisted by Month 3 |
| 3 | Structured code walkthrough. Founder documents architecture decisions, data model, deployment process, and "where the bodies are buried." Pre-commit hooks, test suite, and bundle analyzer provide executable documentation baseline. | Founder + deputy | Founder time (earn-out) | Architecture Decision Records for all major systems |
| 4 | Complete entity restructure if not done pre-close. Novation letters to all customers. Update all legal identifiers. | Acquirer legal | £5,000-£10,000 if incomplete | The English Hub Ltd is the sole operating entity |
| 5 | Deploy monitoring and observability. Re-enable Sentry with source maps. Add APM, uptime monitoring, alerting. | Deputy engineer | £2,000-£5,000 tooling | Sub-5-minute incident detection |

### Month 2-3: Engineering foundation

| # | Action | Owner | Cost | Success metric |
|---|---|---|---|---|
| 6 | Route consolidation. Reduce 721 routes to ~200 using dynamic `[slug]` patterns. Re-enable TS and ESLint at build time. | Engineering team | £10,000-£20,000 | Clean build with all checks enabled |
| 7 | Test coverage sprint. Build on Cycle 2-3 foundation (44 files, pre-commit hooks). Integration + E2E tests. CI pipeline gates on coverage thresholds. | Engineering team | £6,000-£12,000 | 50%+ line coverage on business modules |
| 8 | Hire content lead (English teacher / ex-examiner with content experience). | Acquirer HR | £45-£60K/year (pro rata) | Content team can update modules without founder |
| 9 | CMS migration scoping. Evaluate moving 317+ TypeScript data files to headless CMS (Contentful, Sanity, or Strapi). | Engineering + content | £5,000-£10,000 discovery | Go/no-go decision with timeline |
| 10 | Complete Cyber Essentials Plus if not achieved pre-close. | IT / compliance | £7,500-£15,000 | Certificate in hand |

### Month 4-6: Growth and diversification

| # | Action | Owner | Cost | Success metric |
|---|---|---|---|---|
| 11 | School sales programme. Target 10 additional school customers using Founding Schools as references. Leverage Children's Code compliance and DPA documentation as procurement differentiator. | Founder + sales | £20,000-£40,000 sales investment | 10 signed school MSAs |
| 12 | International curriculum scoping. Evaluate IB English, AP English Literature, and expanded IGCSE coverage. | Content lead | £10,000-£20,000 | Content roadmap with 12-month plan |
| 13 | Mobile app launch. Deploy to App Store and Google Play (PWA wrapper or React Native). | Engineering | £8,000-£15,000 | Apps live with 4+ star rating |
| 14 | AI feature repositioning. Audit AI agents for curriculum specificity vs. generic study assistance. Strip or reposition generic features. Strengthen exam-board-specific AI feedback. | Product + engineering | £15,000-£25,000 | AI features demonstrably differentiated from ChatGPT/Claude consumer |
| 15 | SOC 2 Type I readiness assessment. Scope controls framework for enterprise school procurement. | Compliance | £10,000-£20,000 | Readiness report with gap analysis |

### Post-acquisition investment summary

| Period | Low | High |
|---|---|---|
| Month 1 (stabilisation) | £77,000 | £105,000 |
| Month 2-3 (engineering foundation) | £73,500 | £117,000 |
| Month 4-6 (growth) | £63,000 | £120,000 |
| **Total 6-month post-acquisition investment** | **£213,500** | **£342,000** |

This excludes ongoing salary costs for the two new hires (deputy engineer + content lead), which represent ~£57,500-£75,000 for the 6-month period.

---

## 11. Risk-adjusted valuation impact

### Pre-clean-up valuation (as-is today, 12 April 2026 — post-Cycle 3 FINAL)

| Factor | Impact on valuation |
|---|---|
| Wrong operating entity (R-LIP-01) | -20% to -30% (structural blocker) |
| Zero verifiable revenue (R-FIN-01, R-FIN-02) | Forces asset-sale pricing floor |
| Examiner IP unassigned (R-LIP-02) | -15% to -25% (content moat unprotectable) |
| Bus factor = 1 (R-OPS-01) | -10% to -15% (execution risk premium) |
| Copyright exposure (R-LIP-03) | -5% to -10% (legal risk premium) |
| Build system issues (R-TEC-01) | -2% to -5% (tech debt discount — stable from v4) |
| Children's Code gap (R-CMP-01) | -0.5% to -2% (compliance risk — reduced from -1-3%, now procedural only with full documentation) |
| **Cumulative risk discount** | **-32% to -52% vs. clean-asset valuation** |

### Cumulative risk reduction (Waves 1-3 + Cycles 1-3, FINAL valued)

| Improvement | Estimated value recovered |
|---|---|
| Board store partial unification | £5K-£15K (tech DD signal improvement) |
| Error boundaries (15 route segments) | £5K-£10K (resilience improvement) |
| Test coverage increase (8 to 44 files, Playwright E2E, pre-commit hooks) | £20K-£45K (quality signal + enforced governance) |
| Copyright quote trimming + fair dealing notices | £10K-£30K (reduces legal risk premium) |
| IGCSE copyright audit | £5K-£10K (international content de-risked) |
| Children's Code 4/4 P1 gaps closed + AI opt-out + email leakage fixed | £20K-£45K (compliance posture now a procurement asset) |
| Online Safety Act compliance page published | £5K-£15K (regulatory documentation in place) |
| TODO reduction 73% + next-auth removal | £10K-£20K (tech debt signal improvement) |
| Pre-commit hooks + SBOM + runbook | £8K-£18K (quality governance + buyer onboarding) |
| AI explainer page + server-side opt-out enforcement | £5K-£12K (transparency + regulatory readiness) |
| Safeguarding signposting (helpline numbers on self-harm detection) | £3K-£8K (safeguarding compliance + school readiness) |
| Prisma board map fix (stale enum references) | £2K-£5K (eliminates latent query-failure bug) |
| Student email PII: ClassStudent field removed | £3K-£7K (completes PII remediation) |
| TIAs for all US subprocessors | £3K-£8K (data transfer compliance documented) |
| Compliance docs (DPA, safeguarding, TIA, subprocessor register) | £5K-£12K (eliminates procurement blocker) |
| Migration readiness script + migration file | £2K-£5K (deployment risk reduction) |
| Bundle analyzer + env validation overhaul | £3K-£7K (technical DD readiness) |
| **Total cumulative risk reduction** | **£114K-£262K** |

### Suggested price ranges

| Scenario | Trailing 12mo ARR | Multiple | Headline price | Cash at close | Earn-out |
|---|---|---|---|---|---|
| **Pre-clean-up, as-is today (post-Cycle 3 FINAL)** | Unknown (narrative only) | N/A — asset-sale floor | **£200-£385K** | 80-100% | Minimal |
| **Post-90-day, entry-level** | £50-150K ARR verified | 4-6x | **£400-£900K** | 60% | 40% tied to Y+1 ARR |
| **Post-90-day + 3 schools + growth** | £100-300K ARR verified | 6-10x | **£800K-£3M** | 55% | 45% tied to Y+1 ARR + school retention |
| **Clear BUY (all conditions met)** | £200-500K ARR verified | 8-12x | **£1.6-£6M** | 50% | 50% with 24-month earn-out |

Note: the as-is floor has increased £10-15K from v4 (£190-370K to £200-385K) reflecting the Cycle 3 compliance and technical improvements, particularly the completion of safeguarding signposting, full PII remediation, TIA completion, compliance documentation suite, and technical governance tooling (Prisma fix, migration readiness, bundle analyzer, env validation). The upper scenarios are unchanged because they are gated on financial and commercial milestones that have not moved.

**The single biggest value lever is turning narrative revenue into verified revenue.** Everything else is supporting cast.

---

## 12. Deal term recommendations

| Term | Recommendation | Rationale |
|---|---|---|
| **Cash vs earn-out** | 50-65% cash at close, 35-50% earn-out over 18-24 months | Balances founder alignment with founder liquidity. |
| **Earn-out gates** | Tied to (a) ARR at +12 months, (b) school customer count at +12 months, (c) successful hand-over milestone where deputy engineer ships to production unassisted | Avoid vanity metrics. |
| **Non-compete** | 24 months in UK EdTech K-12 English | 36 months unenforceable in UK. 12 too short. Narrow scope: "K-12 English exam preparation in UK, EU, MENA." |
| **W&I insurance** | Buyer should take cover capping seller liability at 20-30% of deal value | Premium 1.0-1.5% of cover. Worth it above £1M. |
| **Share sale vs asset sale** | Strongly prefer share sale (post-entity-restructure) | BADR gives founder 14% CGT on first £1M vs. 20% marginal. |
| **BADR qualification** | Founder must be employee + 5%+ shareholder for 24+ months of The English Hub Ltd at sale | Entity restructure starts the clock. |
| **Escrow** | 10-15% in escrow for 18 months against warranty claims | Covers Children's Code, copyright, examiner IP claims. |
| **Founder salary** | Market rate (£90-120K UK EdTech CTO/Founder) paid by NewCo during earn-out | Prevents distorted earn-out economics. |

---

## 13. Final broker recommendation

**Recommendation: CONDITIONAL**

### Conditional on what

The deal is **not** buyable today at asking price. It is buyable at asking price after the 90-day clean-up checklist. It is buyable today at a **30-40% discount**, on the understanding the buyer does the clean-up post-close and prices in cost and risk.

### What makes it a clear BUY

All of these must be true by signing:

- [ ] The English Hub Ltd is incorporated, Asset Transfer Agreement signed, Upskill Energy Ltd in strike-off process
- [ ] Examiner credential IP assigned via signed deeds for every named contributor
- [ ] 12 months of verified management accounts reconciled to Stripe and bank
- [ ] Children's Code DPIA signed off by qualified external DPO (all P1 technical gaps closed, safeguarding signposting active, compliance docs populated)
- [ ] Codebase: remaining TODOs triaged, TS/ESLint re-enabled at build, Sentry source maps restored
- [ ] Copyright exposure resolved via CLA licence, explicit permissions, or quotation removal with legal opinion letter
- [ ] Minimum 3 signed, referenceable school customers willing to take a DD call
- [ ] Cyber Essentials Plus certified
- [ ] Trademark filed at UKIPO

### What makes it a clear PASS

Any of these after 90 days:

- Entity restructure not executed and no credible plan to execute pre-signing
- Professional financial records cannot be produced (records problem, not time problem)
- Examiner credentials less than claimed (not examiners, decades-old credentials, no content rights)
- ICO opens formal Children's Code investigation during sale process
- CLA / publisher / poet's estate opens copyright action during sale process
- Founder unable to commit to 12+ month earn-in (suggests side project or burnout)
- Runway on Upskill Energy Ltd expires during 90-day window

### Three-cycle retrospective

Three cycles of improvement work have demonstrably improved the asset's technical and compliance posture. The cumulative £114K-£262K in recovered risk-adjusted value represents a meaningful return on founder time invested. The compliance documentation suite, in particular, converts what would have been a multi-week procurement blocker into a competitive advantage for school sales.

The five CRITICAL risks that define the deal-breaker profile have not moved because they cannot be solved with code. They require solicitors, accountants, and sales conversations. The 90-day programme is the founder's only job now.

---

*Report ends. v5 FINAL. Appendices available on request: full risk register in spreadsheet format, detailed Wave 1-3 + Cycle 1-3 commit analysis, route count methodology, copyright exposure file-by-file audit.*
