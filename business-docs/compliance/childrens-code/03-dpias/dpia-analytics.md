# DPIA — Analytics on Child Accounts

**Reference:** DPIA-2026-CC-02
**Service:** The English Hub
**Scope:** Product analytics / telemetry as applied to users under 18
**DPIA version:** 1.0 (FINAL — supersedes v0.9 draft of 2026-04-10)
**Owner:** Calum Johnson — Data Protection Officer (DPO), dpo@theenglishhub.app
**Date prepared:** 2026-04-10
**Last reviewed:** 2026-05-20
**Next review:** 2026-11-20 (or on material change)
**Related:** `dpia-processing-children-data.md` (parent DPIA, v1.0 FINAL)

## Change log

- **2026-05-20 (v1.0 FINAL)** — Promoted from v0.9 draft. Material changes:
  - The "child" cohort covered now spans ages 11–17 following business decision B5 (minimum age lowered from 13 to 11). Standard 8 high-privacy defaults are unchanged and already extend to the wider cohort — see `src/lib/privacy/child-defaults.ts` and `src/__tests__/child-defaults-strict.test.ts`.
  - Qatar PDPPL: analytics on children's data falls inside the "personal data of a special nature" definition under PDPPL Article 16. This DPIA, in conjunction with the parent DPIA, supports the Article 16 permit application (`business-docs/compliance/qatar-pdppl/01-article-16-permit/`).
  - PostHog (EU/Frankfurt) and Google Analytics 4 (US) sub-processor details cross-referenced against the canonical hosting topology in the parent DPIA and the RoPA (`business-docs/compliance/rfc/ropa-v1.md`).
- **2026-04-10 (v0.9 DRAFT)** — Initial draft.

---

## Step 1 — Need for DPIA

Analytics on children triggers several ICO "likely high risk" factors: systematic monitoring, processing of children's data, evaluation of personal aspects (even if only aggregated). A focused DPIA is appropriate.

## Step 2 — Describe the processing

### What analytics we run
Product analytics = aggregated understanding of *which screens get used, how often, by how many people, with what outcomes* — distinct from "personalisation" which is covered in the profiling policy and the AI DPIA.

Events collected (examples, allowlisted):
- `session.start` / `session.end` — with timestamps and coarse duration
- `page.view` — page identifier (e.g., "practice/english-language/paper-1")
- `practice.started` / `practice.completed` — subject + topic identifiers only, no content
- `essay.submitted` — essay identifier only (no body, no extract)
- `feedback.viewed` — feedback identifier
- `feature.used` — feature identifier and outcome (e.g., `delete-account.success`)
- `error.encountered` — error type + error identifier

Properties attached to events:
- `user_id` (opaque)
- `session_id` (opaque, rotating)
- `account_type` (child / adult / teacher / parent)
- `year_group_bracket` (e.g., "Y10-Y11")
- `platform` (web / mobile PWA)

### What we *do not* collect as events
- Essay content or extracts
- Practice question or answer text
- Raw IP addresses
- Emails or user-entered PII
- Third-party advertising identifiers
- Cross-site browsing
- Session replay / keystroke logs
- Mouse-movement heatmaps on child accounts

### How the pipeline works
1. Client-side SDK (first-party, self-hosted) captures allowlisted events
2. Events are flushed on a rolling interval to our backend
3. Backend validates against the allowlist schema and drops any disallowed property
4. Events are stored in a UK/EU-hosted data warehouse
5. Aggregated queries are run for product decisions; individual-user queries are restricted to debug cases
6. Retention: raw events 90 days, aggregates indefinitely (anonymous)

### Sub-processors
- Self-hosted first-party analytics (no third-party analytics SDK on child app surfaces). For the marketing site (non-child-default surface), a privacy-preserving analytics tool is used and loads only after explicit consent.

## Step 3 — Consultation
- Data Protection Lead
- Engineering lead
- No external consultation performed for this narrow DPIA

## Step 4 — Necessity and proportionality

**Why do we run analytics at all?**
- To understand which features are used and which are broken
- To measure whether the product is delivering educational value (completion of practice, revisiting weak topics)
- To spot bugs and crashes before they affect many students
- To shape improvements based on evidence rather than guesses

**Could we do without?** Partially. Error monitoring is essentially necessary for a production service. Full product analytics could be dropped, but the result would be a worse product for the children we serve. The Children's Code does not prohibit analytics — it requires them to be off by default (where consent is the basis), minimised, and transparent.

**Lawful basis:**
- Security/error logging: Article 6(1)(f) legitimate interests, with a legitimate interests assessment documented
- Non-essential product analytics on child accounts: Article 6(1)(a) consent; for under-13s, parental consent via the parent-link flow
- Non-essential analytics on the marketing site: consent via cookie banner (being remediated under GAP-13A)

**Minimisation steps already taken:**
- Allowlist schema (any disallowed property is dropped at the backend)
- Opaque identifiers only
- No raw PII in events
- Self-hosted first-party collection (no third-party SDK in the child app)
- 90-day raw retention
- Aggregation is the default access pattern; individual record lookup is audited

**Transparency:**
- Child-friendly privacy notice explains that we measure which features are used
- Parents can see in the parent notice what analytics are running
- Cookie banner (on marketing site) lets the user opt in/out
- In-app analytics consent state is shown in settings

## Step 5 — Risks

| Risk | L | I | Score | Mitigations | Residual |
|---|---|---|---|---|---|
| Raw PII leaks into analytics events | 4 | 3 | 12 | Backend allowlist; lint rule (planned); alerts on unknown properties | 6 |
| Aggregate data de-anonymised via quasi-identifiers | 2 | 3 | 6 | Aggregation thresholds; prohibition on joining to other datasets outside approved queries | 3 |
| Analytics consent banner dark-pattern (marketing site) | 5 | 2 | 10 | GAP-13A remediation | 2 |
| Sub-processor breach | 3 | 3 | 9 | Self-hosted; UK/EU; encryption; access control | 3 |
| Analytics feeds into commercial profiling | 1 | 4 | 4 | Architectural prohibition; separate data plane; policy | 1 |
| Child doesn't understand what analytics means | 4 | 2 | 8 | Child-friendly explanation; opt-in default | 3 |

## Step 6 — Measures

Already in place:
- Allowlist schema
- Self-hosted first-party
- Aggregation as default access pattern
- Retention limit of 90 days for raw events
- No third-party analytics in child app
- Opt-in for non-essential analytics on child accounts (where the marketing site consent flow is fixed)

Planned:
- Lint rule blocking unknown analytics properties at build time
- Clean-up of legacy events carrying email (GAP-8A)
- Cookie banner symmetry (GAP-13A)

## Step 7 — Sign-off

| Item | Outcome |
|---|---|
| Residual high risk? | No — residuals in low-to-medium band |
| Proceed? | Yes, with GAP-13A and GAP-8A closure as precondition to any external claim of full compliance |
| Review | Annually, or on any change to the allowlist schema |

| Role | Decision | Date |
|---|---|---|
| Data Protection Lead | Approve | 2026-04-10 |
| CTO | — | — |
