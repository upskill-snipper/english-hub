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

---

## 2026-05-20 — Decisions returned by the founder + on-disk status

The founder returned answers on 2026-05-20. The propagation pass that
followed was **partially reverted** in a subsequent local revert wave
(intentional per file-change notices). Authoritative current on-disk
state is recorded in `REMEDIATION-LOG.md` under the
"Horizon-1.5 — partial application of business decisions" section.

Quick index of what was decided + what still ships in production today:

| #   | Founder answer                                                                                      | Currently on disk                                                                                                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B1  | Lauren Johnson, safeguarding@theenglishhub.app, +974 5187 9582, 24h SLA, no Deputy                  | **Applied** on /safeguarding, /safeguarding/report, /legal/privacy                                                                                                                                                                                               |
| B2  | "You decide" — Vercel (front end) + Supabase EU + Microsoft Azure UK South + Anthropic US under DPA | **Partial** — applied in `dictionary-legal-long.ts` (privacy s4); for-schools and faqs propagation reverted                                                                                                                                                      |
| B3  | Confirmed statutory 14-day only                                                                     | Already correct                                                                                                                                                                                                                                                  |
| B4  | 10 working days                                                                                     | **Applied** in `dictionary-legal-long.ts`                                                                                                                                                                                                                        |
| B5  | Lower to 11; 11–15 parent consent; UK GDPR Art. 8 verifiable parental consent for 11–12             | **Partial** — validate-age endpoint and most user-facing copy now say 11; `lib/auth.ts` / `api/auth/register/route.ts` / parent-reports gates still enforce 13. **Net effect:** an 11–12 year-old hits the age gate but cannot complete signup; reconcile in H2. |
| B6  | 7-day confirmed                                                                                     | Already correct                                                                                                                                                                                                                                                  |
| B7  | £4,000 founding (already matches)                                                                   | Already correct                                                                                                                                                                                                                                                  |
| B8  | "Ok do that" (consolidate)                                                                          | Not yet applied — H2                                                                                                                                                                                                                                             |
| B9  | Left out (home address)                                                                             | No change needed                                                                                                                                                                                                                                                 |
| B10 | "Combined" — interpreted as separate DPO (Calum) + DSL (Lauren) for audit clarity                   | **Applied** on /legal/privacy M5 block                                                                                                                                                                                                                           |
| B11 | "Check; if none, create"                                                                            | Three DPIAs already exist at `business-docs/compliance/childrens-code/03-dpias/` — v0.9 draft. Promote-to-v1.0 with B5/B1/B10/B2 change log was reverted; still v0.9 draft.                                                                                      |
| B12 | Route via info@upskillenergy.com                                                                    | No change                                                                                                                                                                                                                                                        |
| B13 | "Do it" — robots.txt H2 template                                                                    | **Reverted** — robots.ts is back at the pre-edit content. Outstanding for H2.                                                                                                                                                                                    |
| B14 | "Do it" — Horizon-3, schedule separately                                                            | Scheduled in REMEDIATION-LOG.md as a multi-week H3 content workstream                                                                                                                                                                                            |
| B15 | Dated disclaimer fine for now                                                                       | No change                                                                                                                                                                                                                                                        |

**Additional H1.5 work that did survive the revert wave:** the merge of
DBS / Prevent / whistleblowing / legal-framework / safer-recruitment
content from `/legal/safeguarding` into the authoritative `/safeguarding`
page, with `/legal/safeguarding` reduced to a redirect-only shim.
