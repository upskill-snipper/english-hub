# BUSINESS-DECISIONS-NEEDED — Horizon 1 remediation

These are values the Horizon-1 work could **not** set without inventing
data (prohibited by the anti-hallucination contract). Each live page now
shows honest, non-contradictory interim copy with **no placeholder
token** — but the real value must be decided, then applied via the
existing i18n keys / pages noted. Ordered blocking → non-blocking.

---

## BLOCKING (procurement / child-safety — decide first)

### B1 — Real Designated Safeguarding Lead contact _(highest priority)_

- **Needed:** DSL full name, a monitored DSL email inbox, a monitored
  DSL phone number; confirm the 24-hour acknowledgement SLA is operable;
  ideally a named Deputy DSL.
- **Why:** child-facing service; interim copy routes to the report form
  - monitored inbox + statutory emergency lines, but a named, directly
    contactable DSL is required before school onboarding.
- **Apply to:** `/safeguarding`, `/safeguarding/report`, privacy policy
  DPO/DSL block, contact page.

### B2 — Data hosting canonical statement

- **Needed:** the single, accurate sitewide description of where student
  data is hosted. Repo evidence shows BOTH Azure UK-South (backend API)
  AND Supabase EU/Frankfurt (primary DB) + US sub-processors under
  SCCs/IDTA. The `/data-processing` per-processor table is accurate and
  is the current honest interim; the contradiction was "UK-based servers"
  blanket claims elsewhere (now removed).
- **Decide:** the one-sentence canonical hosting narrative to use
  identically on for-schools / about / privacy / data-processing.

### B3 — Refund entitlement (exact policy)

- **Needed:** confirm the post-statutory refund position. Terms §10 was
  aligned to the Refund Policy's stated position (statutory 14-day
  cooling-off; no extra-statutory pro-rata; access continues to period
  end). Confirm this is intended, or define the precise extra-statutory
  entitlement.
- **Apply to:** Refund Policy (single source), Terms §10, FAQs.

### B4 — Human-review SLA (one number)

- **Needed:** the true turnaround for a human review of automated
  feedback. Pages previously said both "48 hours" (FAQs) and "10 working
  days" (AI Transparency); both now state a non-committal "as quickly as
  we can / commitment to be published" interim.
- **Apply to:** AI Transparency + FAQs (identical wording).

---

## BLOCKING (commercial accuracy)

### B5 — Minimum age & cohort set — **RESOLVED from repo (no decision needed)**

- Ground truth: under-13 blocked, 13–15 require parent/guardian consent
  (`api/auth/validate-age`). Applied site-wide as "learners aged 13 and
  over (13–15 require parent/guardian consent)". Listed here only to
  confirm the business is content with this enforced reality.

### B6 — Trial length — **RESOLVED from repo (confirm only)**

- Reconciled to **7-day, card-required, auto-converting** everywhere
  (refund-policy was the only 30-day outlier; now fixed). Confirm 7-day
  is the intended commercial reality.

### B7 — Pricing (one founding, one standard)

- **Needed:** the single canonical Founding Schools price and the single
  standard price. Pricing page now shows one founding figure
  (£4,000/yr, the clearest existing constant) and the contradictory
  £8,000 / £6k–£12k / £3,000-wave-1 anchors were removed. Confirm the
  founding price, the standard price, and the true founding cohort size
  (the hard "N places remaining" was removed pending an accurately
  tracked number).

### B8 — Partner programme (one set of terms)

- **Needed:** ONE reconciled commission rate/structure, ONE attribution
  (cookie) window, ONE payout date/method, applied across `/affiliates`
  and `/creators` (they conflicted: 20%→35% tiered + £5/£15/£7/£20 table
  vs 20% recurring; 90-day vs 30-day; 5th vs 1st/monthly). All replaced
  with "your dashboard shows your real verified referrals & commission"
  interim. Eligibility set to 18+.

---

## NON-BLOCKING (publish honest interim until decided)

- **B9 — Registered office address** (Companies House). Interim:
  "available to schools on request during procurement". No address
  invented. Apply to privacy policy, footer, contact, about once
  confirmed.
- **B10 — DPO / DSL role separation.** One individual currently holds
  both with no public deputy; interim states the combined-role
  conflict/continuity is documented & available on request. Decide:
  appoint a separate DSL/Deputy, or formally document the combined role.
- **B11 — DPIA status.** Interim: "in preparation; not yet available for
  inspection". Confirm whether a DPIA exists and whether it formally
  gates releases before re-asserting that control.
- **B12 — Dedicated mailboxes.** `dpo@` / `safeguarding@` not yet
  provisioned; interim uses the founder inbox. Provision and swap in.
- **B13 — robots.txt / AEO posture** (Horizon 2 T1) — Cloudflare AI
  Crawl Control change; leadership sign-off needed (not actioned in H1).
- **B14 — EAL CEFR content authoring (Horizon 3).** 0/10 topics have
  real B1/B2/C1 content; H1 mitigation noindexes + honestly labels them.
  The duplicate-body CI guard is report-only until content is authored,
  then flips to blocking.
- **B15 — Competitor comparison table** (M4) — legal review before any
  comparative cell is re-stated (not actioned in H1; deferred to H2).

---

_Once B1–B8 are decided, the values drop into the noted i18n keys/pages
with no structural change. The I1 gate guarantees no placeholder token
can regress to a live page in the meantime._
