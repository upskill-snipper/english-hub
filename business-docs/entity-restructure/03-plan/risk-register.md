# Risk Register

**Purpose:** Catalogue what can go wrong, how likely, how bad, and what we're doing about it. Reviewed weekly during the restructure.

**Severity scale:** 1 (minor inconvenience) → 5 (existential).
**Likelihood scale:** 1 (very unlikely) → 5 (almost certain, if not actively managed).
**Risk score:** severity × likelihood.

---

## Risk 1 — Continuity of trading

| Field | Value |
|---|---|
| Description | Customers experience a billing / service interruption during cut-over |
| Severity | 4 — direct revenue hit + reputation damage |
| Likelihood | 3 — very real without careful sequencing |
| Score | 12 |
| Owner | Founder |
| Mitigations | Dual-run bank accounts for 30 days. Re-mandate DDs before closing old account. Do not close old Stripe until new one has processed payouts successfully. Test first invoice with a friendly customer before mass cut-over. |
| Residual risk | Low if sequence is followed |

## Risk 2 — Customer confusion ("what is The English Hub? who is Upskill Energy?")

| Field | Value |
|---|---|
| Description | Customers see two different company names on different touchpoints during transition and assume fraud / scam |
| Severity | 3 |
| Likelihood | 4 |
| Score | 12 |
| Owner | Founder |
| Mitigations | Proactive customer email BEFORE the change shows up on any invoice. Update website ToS and Privacy Policy simultaneously. Prepare a one-paragraph FAQ for the support inbox. Refer to old name on invoices temporarily ("previously known as Upskill Energy Ltd"). |
| Residual risk | Low |

## Risk 3 — Bank account application delays

| Field | Value |
|---|---|
| Description | New business bank account takes 4+ weeks to open, blocking the cut-over |
| Severity | 3 |
| Likelihood | 4 |
| Score | 12 |
| Owner | Founder |
| Mitigations | Apply to TWO banks in parallel on Day 1 (e.g. Tide + Starling). Have all incorporation documents ready before applying. Use accountant's referral route if possible. |
| Residual risk | Medium — outside our control |

## Risk 4 — Data protection notification / GDPR controller change

| Field | Value |
|---|---|
| Description | Failure to notify data subjects that the controller of their personal data has changed; failure to update ICO registration |
| Severity | 4 — potential ICO enforcement, fines up to higher of £17.5m or 4% turnover |
| Likelihood | 2 — if actively managed |
| Score | 8 |
| Owner | Founder |
| Mitigations | Update privacy policy with new controller and clear version date. Send explicit email to all data subjects referencing Articles 13/14 UK GDPR. Register new entity with ICO within 30 days of trading. Cancel old entity ICO registration only after confirmation. |
| Residual risk | Low |

## Risk 5 — VAT TOGC not accepted by HMRC

| Field | Value |
|---|---|
| Description | HMRC does not treat the transfer as a Transfer of a Going Concern, meaning VAT at 20% must be charged on the asset transfer — a cashflow hit |
| Severity | 3 — recoverable but painful for cashflow |
| Likelihood | 2 — if properly prepared |
| Score | 6 |
| Owner | Accountant |
| Mitigations | Satisfy all TOGC conditions: same trade, continued as a going concern, transferee VAT-registered (or becomes so) on the transfer date, no significant break in trading. Get accountant's written TOGC memo on file before transfer. See `05-hmrc/vat-togc-notes.md`. |
| Residual risk | Low |

## Risk 6 — Customer contract change-of-control clause triggered

| Field | Value |
|---|---|
| Description | A B2B contract contains a change-of-control or no-assignment clause that gives the customer a right to terminate on the transfer |
| Severity | 4 — losing a key customer during restructure is a bad look |
| Likelihood | 3 |
| Score | 12 |
| Owner | Solicitor + founder |
| Mitigations | Identify change-of-control clauses in audit (`contracts-held-audit.md`). Use novation (not assignment) for affected contracts to require positive consent from the customer rather than triggering a unilateral termination right. Position positively in the notification letter. |
| Residual risk | Medium |

## Risk 7 — Freelancer IP assignment gap

| Field | Value |
|---|---|
| Description | Discovery that a significant piece of IP (code, content, design) was created by a freelancer with no written IP assignment, and the freelancer is uncooperative |
| Severity | 5 — this can kill an exit |
| Likelihood | 2 |
| Score | 10 |
| Owner | Solicitor |
| Mitigations | Complete the IP audit thoroughly. Back-fill IP assignments with every freelancer before the transfer, ideally with a small nominal consideration (£50–£500) to make the assignment binding. If a freelancer is unreachable, get legal advice on alternatives (implied licence, rewriting the work, etc.). |
| Residual risk | Depends entirely on audit quality |

## Risk 8 — Corporation Tax / accounting period mis-alignment

| Field | Value |
|---|---|
| Description | Old entity's final CT return and new entity's first CT return overlap or leave gaps; profit ends up recognised in the wrong period |
| Severity | 2 |
| Likelihood | 3 |
| Score | 6 |
| Owner | Accountant |
| Mitigations | Plan accounting reference dates deliberately. Cessation date for old entity should be clean (e.g. end of a month). Accountant to produce a bridging memo documenting the transition. |
| Residual risk | Low |

## Risk 9 — Stripe / payment processor migration

| Field | Value |
|---|---|
| Description | Stripe cannot transfer an account from one legal entity to another; a new account must be created and customers re-authorised. Saved card tokens may not transfer. |
| Severity | 3 |
| Likelihood | 4 |
| Score | 12 |
| Owner | Founder |
| Mitigations | Investigate Stripe's legal entity update process (may be possible if it's a name change rather than a change of controlling person). If not, plan for a re-authorisation flow for saved cards. Communicate clearly to customers. See `07-banking/stripe-account-migration.md`. |
| Residual risk | Medium |

## Risk 10 — Founder bandwidth

| Field | Value |
|---|---|
| Description | Restructure eats 2–3 months of founder attention and the business loses momentum on product / growth |
| Severity | 3 |
| Likelihood | 4 |
| Score | 12 |
| Owner | Founder |
| Mitigations | Do the audits thoroughly in Week 0 so Weeks 1–6 are execution, not discovery. Use solicitor and accountant heavily — don't DIY the legal drafting. Schedule one dedicated "restructure half-day" per week and protect it. |
| Residual risk | Medium |

## Risk 11 — Unexpected HMRC enquiry or investigation on old entity

| Field | Value |
|---|---|
| Description | Striking off the old entity draws HMRC attention, or an existing enquiry crystallises during the transition |
| Severity | 4 |
| Likelihood | 1 |
| Score | 4 |
| Owner | Accountant |
| Mitigations | Ensure all returns filed, all payments up to date before filing DS01. Do not attempt strike-off if any tax is in dispute. Keep old entity dormant instead if risk exists. |
| Residual risk | Low |

## Risk 12 — Director personal liability exposure during the wind-down

| Field | Value |
|---|---|
| Description | Taking assets out of the old entity while creditors remain unpaid can create wrongful trading / preference claims |
| Severity | 4 |
| Likelihood | 1 |
| Score | 4 |
| Owner | Solicitor |
| Mitigations | Solvency declaration before any asset movement. Ensure old entity remains solvent (assets > liabilities) throughout. Use arm's-length consideration for the asset transfer (the valuation memo). |
| Residual risk | Low |

## Risk 13 — Trademark re-assignment failure

| Field | Value |
|---|---|
| Description | TM16 to assign the trademark is filed incorrectly and needs re-filing, delaying brand protection alignment |
| Severity | 1 |
| Likelihood | 2 |
| Score | 2 |
| Owner | Founder / trademark attorney |
| Mitigations | Use a trademark attorney for this — fees are small (£50–£200 per mark). Do not DIY. |
| Residual risk | Very low |

## Risk 14 — EMI options (if any) do not transfer

| Field | Value |
|---|---|
| Description | If there's an existing EMI scheme in Upskill Energy Ltd, options do not automatically transfer and may lose EMI tax treatment |
| Severity | 5 — potentially catastrophic for optionholders |
| Likelihood | 1 (unknown — check the audit) |
| Score | 5 |
| Owner | Solicitor + tax adviser |
| Mitigations | Confirm in Week 0 whether any EMI scheme exists. If yes, EMI is a separate workstream and specialist tax advice is mandatory before touching anything. |
| Residual risk | Depends on finding |

## Risk 15 — Grant clawback

| Field | Value |
|---|---|
| Description | If the entity holds an Innovate UK or similar grant, the transfer may trigger clawback or termination |
| Severity | 3 |
| Likelihood | 1 (unknown — check the audit) |
| Score | 3 |
| Owner | Founder |
| Mitigations | Identify any grants in the contract audit. Contact grantor BEFORE any transfer to confirm treatment. Usually either (a) keep grant running in old entity until grant ends, or (b) novate with grantor consent. |
| Residual risk | Depends on finding |

---

## Weekly review log

| Week | Reviewer | Date | Notes |
|---|---|---|---|
| Wk 0 | | | |
| Wk 1 | | | |
| Wk 2 | | | |
| Wk 3 | | | |
| Wk 4 | | | |
| Wk 5 | | | |
| Wk 6 | | | |
