# Children's Code — Gap Analysis

**Service:** The English Hub
**Date:** 2026-04-10
**Owner:** Data Protection Lead
**Priority basis:** (a) severity of non-conformance, (b) residual risk to children, (c) procurement / enforcement exposure

---

## How to read this document

Every **[GAP-n]** marker from `age-appropriate-design-assessment.md` is listed here with:
- **Gap** — what the shortfall is
- **Standard** — which of the 15 standards it sits under
- **Why it matters** — the risk / ICO framing
- **Target state** — what "done" looks like
- **Owner** — person accountable (role, not name, until hired)
- **Priority** — P1 (do now), P2 (do this quarter), P3 (this year), P4 (next year / watch)
- **Target date** — calendar date for "done"
- **Status** — Not started / In progress / Blocked / Done

---

## P1 — Do now (before school procurement conversations close)

### GAP-13A — Cookie banner dark pattern on marketing site
- **Standard:** 13 (Nudge techniques)
- **Why it matters:** An unequally-weighted "Accept / Reject" cookie banner is the single most commonly-cited Children's Code failing in ICO enforcement letters, and schools will spot it in seconds. PECR infringement exposure in addition.
- **Target state:** Equal visual weight, equal number of clicks, neutral wording. "Reject all" not buried in "Manage preferences". Banner served from the first page load, cannot be blocked by a scroll-jack.
- **Owner:** Frontend engineer
- **Priority:** P1
- **Target date:** 2026-04-24
- **Status:** In progress

### GAP-7A — Personalised content recommendations on by default for under-16s
- **Standard:** 7 (Default settings)
- **Why it matters:** Directly contradicts Standard 7's "high privacy by default". Also implicates Standard 12 (Profiling).
- **Target state:** For users in a child account type, the default ordering of practice content is by syllabus topic, not by any performance/engagement model. Users can opt in to "adaptive order" with a plain-language explainer.
- **Owner:** Product + Backend
- **Priority:** P1
- **Target date:** 2026-04-30
- **Status:** Not started

### GAP-5A — Streaks on by default
- **Standard:** 5 (Detrimental use of data)
- **Why it matters:** Academic and regulatory consensus is that streak mechanics are among the strongest drivers of compulsive use in young people. The ICO has signalled that it will scrutinise "habit-forming" features.
- **Target state:** Streaks exist but are **off by default for under-16s**. A one-line explanation and a neutral (not guilt-tripping) opt-in exist.
- **Owner:** Product
- **Priority:** P1
- **Target date:** 2026-05-15
- **Status:** Not started

### GAP-8B — Automated retention / deletion job for dormant accounts
- **Standard:** 8 (Data minimisation)
- **Why it matters:** We publish a 24-month dormancy deletion policy but cannot prove enforcement. This is a concrete failure an auditor can test in one query.
- **Target state:** Scheduled backend job that (a) notifies the user 30 days before deletion, (b) deletes account + associated data if no re-engagement, (c) writes an audit log entry, (d) completes within 24h of trigger date.
- **Owner:** Backend
- **Priority:** P1
- **Target date:** 2026-05-31
- **Status:** Not started

---

## P2 — This quarter

### GAP-12A / GAP-12B — AI marking explainer + opt-out switch
- **Standard:** 12 (Profiling)
- **Why it matters:** We do automated analysis of essay content. Under the code and Article 13/14 UK GDPR, the child must be told in plain language what the AI does, and must be able to object to profiling that doesn't have a compelling educational reason for being on by default.
- **Target state:**
  - A first-use explainer shown before any AI-generated feedback appears ("This feedback was written by an AI marker, not your teacher. It's a suggestion. Your teacher makes the real decisions.")
  - A settings toggle that turns AI marking off. When off, the student gets only self-marking / teacher marking.
- **Owner:** Product + Frontend
- **Priority:** P2
- **Target date:** 2026-06-30
- **Status:** Copy drafted; implementation pending

### GAP-4A — Just-in-time privacy explanations at each collection point
- **Standard:** 4 (Transparency)
- **Why it matters:** The code specifically calls for "bite-size" notices at the point of collection, not just in a top-level privacy policy.
- **Target state:** Every field that collects personal data in the child app has a small "(?)" icon or inline sentence explaining what it's used for and whether it's optional. Audit list in `04-evidence/transparency-information-inventory.md`.
- **Owner:** Frontend + Content
- **Priority:** P2
- **Target date:** 2026-06-30
- **Status:** Audit in progress

### GAP-13B — Social-share nudge after practice sets
- **Standard:** 13 (Nudge techniques)
- **Why it matters:** Pushes children to share data outside the service.
- **Target state:** "Share your score" surfaces are disabled for users in a child account type. Unchanged for adult learner accounts.
- **Owner:** Frontend
- **Priority:** P2
- **Target date:** 2026-06-30
- **Status:** Not started

### GAP-11A — Documented list of what parents can see
- **Standard:** 11 (Parental controls)
- **Why it matters:** Children need to know when they are being monitored and what exactly the monitoring exposes.
- **Target state:** Explicit list in the child-friendly privacy notice and in `04-evidence/parental-controls-design.md`. Mirror the in-app persistent banner.
- **Owner:** Content + Product
- **Priority:** P2
- **Target date:** 2026-05-31
- **Status:** In progress

### GAP-8A — Clean up analytics events still carrying email
- **Standard:** 8 (Data minimisation)
- **Why it matters:** "Just-in-case" PII in analytics is a classic Children's Code trap. Also creates lateral exposure across the analytics sub-processor.
- **Target state:** No event in the analytics pipeline contains a raw email. User is keyed by an opaque `user_id` only. A lint rule blocks regressions.
- **Owner:** Backend + Data
- **Priority:** P2
- **Target date:** 2026-06-30
- **Status:** Ticket open

---

## P3 — This year

### GAP-1A — Formalise child impact check
- **Standard:** 1 (Best interests)
- **Target state:** Feature spec template has a required "Child impact" section; sign-off from Data Protection Lead required before dev start for any feature that changes what a child sees or collects.
- **Owner:** Product
- **Priority:** P3
- **Target date:** 2026-09-30
- **Status:** Not started

### GAP-1B — Consult partner schools on streaks / leaderboards
- **Standard:** 1 (Best interests)
- **Target state:** Small research study with 2 partner schools; findings logged.
- **Owner:** Founder
- **Priority:** P3
- **Target date:** 2026-09-30
- **Status:** Not started

### GAP-2A — External DPO review of DPIAs
- **Standard:** 2 (DPIAs)
- **Target state:** Fractional DPO engagement; sign-off on all three DPIAs.
- **Owner:** Founder
- **Priority:** P3
- **Target date:** 2026-12-31
- **Status:** Blocked on MRR trigger

### GAP-3B — Age assurance vendor evaluation
- **Standard:** 3 (Age appropriate application)
- **Target state:** Document an evaluation of at least 2 ICO-recognised age assurance approaches. Either implement one or record a justified decision not to.
- **Owner:** Data Protection Lead + Product
- **Priority:** P3
- **Target date:** 2026-12-31
- **Status:** Not started

### GAP-6A — Automated audit of "published policy vs. live product"
- **Standard:** 6 (Policies & community standards)
- **Target state:** CI-run checks for key factual claims (e.g., no third-party ad domains appear in the deployed bundle; no geolocation API calls exist in child-mode code paths).
- **Owner:** Engineering
- **Priority:** P3
- **Target date:** 2026-12-31
- **Status:** Not started

### GAP-9A — 100% of partner schools on signed data-sharing agreement
- **Standard:** 9 (Data sharing)
- **Target state:** All partner schools covered by a signed school data sharing agreement. Unsigned schools are offboarded.
- **Owner:** Founder / Sales
- **Priority:** P3
- **Target date:** 2026-12-31
- **Status:** In progress

### GAP-15A — Human-readable data export
- **Standard:** 15 (Online tools)
- **Target state:** Alongside the JSON export, a human-readable PDF or HTML export listing data in plain terms.
- **Owner:** Backend + Content
- **Priority:** P3
- **Target date:** 2026-09-30
- **Status:** Not started

### GAP-4B — Child privacy explainer video
- **Standard:** 4 (Transparency)
- **Target state:** 60–90s animated explainer embedded in the child privacy notice and the onboarding flow.
- **Owner:** Content
- **Priority:** P3
- **Target date:** 2026-12-31
- **Status:** Not started

---

## P4 — Next year / watching brief

### GAP-3A — Secondary age signal beyond self-declaration
- **Standard:** 3 (Age appropriate application)
- **Notes:** Dependent on the ICO's forthcoming technology guidance on age assurance and the market maturity of privacy-preserving age estimation. For now, mitigated by "apply child protections to all".
- **Priority:** P4
- **Target date:** Watching brief; re-evaluate Q4 2026

### GAP-2B — ICO prior consultation review trigger
- **Standard:** 2 (DPIAs)
- **Notes:** Re-evaluate residual risks after GAP-12A/B and GAP-7A are closed. If any residual remains "high" we will prepare for Article 36 consultation.
- **Priority:** P4
- **Target date:** Re-evaluate Q4 2026

---

## Summary scoreboard

| Priority | Count | Target range |
|---|---|---|
| P1 | 4 | April – May 2026 |
| P2 | 5 | by end Q2 2026 |
| P3 | 8 | by end 2026 |
| P4 | 2 | next year / watching |

**Aggregate conclusion:** There are no RED-band gaps. All known shortfalls are tracked, owned, and scheduled. We are comfortable describing The English Hub as "substantially aligned with the ICO Age Appropriate Design Code, with known gaps under active remediation — see gap analysis". We are **not** comfortable claiming "full compliance" until P1 + P2 items are closed (target: end Q2 2026).

## Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
