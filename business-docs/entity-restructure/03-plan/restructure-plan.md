# Restructure Plan

**Purpose:** The full sequenced task list. Work top to bottom. Each phase must be complete before the next begins.

---

## Phase 0 — Preparation (Week 0, before kick-off)

These tasks happen *before* anything irreversible.

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 0.1 | Complete `01-current-state/entity-map-as-is.md` with real data | Founder | — | All placeholders filled |
| 0.2 | Complete `01-current-state/contracts-held-audit.md` | Founder | 0.1 | Every SaaS and every customer listed |
| 0.3 | Complete `01-current-state/ip-ownership-audit.md` | Founder | — | Every red flag ticked |
| 0.4 | Complete `01-current-state/banking-audit.md` | Founder + bookkeeper | — | Every DD / SO listed |
| 0.5 | Engage solicitor — scope: ATA, novations, IP assignment | Founder | — | Engagement letter signed, fee capped |
| 0.6 | Engage accountant — scope: TOGC, registrations, CT final return | Founder | — | Engagement letter signed |
| 0.7 | Pre-clear new company name at Companies House and on IPO register | Founder | — | Name confirmed available |
| 0.8 | Decide accounting reference date | Founder + accountant | 0.6 | Date picked |
| 0.9 | Pick registered office address | Founder + accountant | 0.6 | Address confirmed |
| 0.10 | Decide strike-off vs. dormant for Upskill Energy Ltd | Founder + solicitor | 0.5 | Decision recorded |
| 0.11 | Value the trade and assets for consideration purposes | Accountant | 0.1 | Valuation memo on file |

## Phase 1 — Incorporation (Week 1)

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 1.1 | File IN01 to incorporate The English Hub Ltd | Founder / formation agent | 0.7, 0.8, 0.9 | Certificate of incorporation received |
| 1.2 | Receive CRN and UTR | Companies House / HMRC | 1.1 | Both documented |
| 1.3 | Hold first board meeting: adopt articles, appoint director, open bank account authorisation, appoint signatories | Founder | 1.2 | Minutes filed |
| 1.4 | Issue share certificates, update registers | Founder / solicitor | 1.3 | Statutory registers created |
| 1.5 | Apply for business bank account (see `07-banking/new-bank-account-checklist.md`) | Founder | 1.2 | Application submitted |
| 1.6 | Apply for Stripe / payment processor account (see `07-banking/stripe-account-migration.md`) | Founder | 1.5 | Application submitted |
| 1.7 | Register on HMRC Gateway for the new entity | Accountant | 1.2 | Gateway login active |
| 1.8 | Set up Xero / QuickBooks file for new entity | Bookkeeper | 1.2 | New ledger live |

## Phase 2 — Legal scaffolding (Weeks 2–3)

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 2.1 | Draft Asset Transfer Agreement between Upskill Energy Ltd and The English Hub Ltd | Solicitor | 0.11 | Draft reviewed by both sides |
| 2.2 | Draft IP Assignment deed | Solicitor | 0.3 | Draft reviewed |
| 2.3 | Draft freelancer back-fill IP assignments for every red flag from the IP audit | Solicitor | 0.3 | All red flags cleared |
| 2.4 | Prepare novation letter template | Solicitor | — | Template ready |
| 2.5 | Draft employment transfer letters / TUPE pack (if employees) | Solicitor + founder | 0.1 | Pack ready |
| 2.6 | Prepare customer / supplier notification letters (see `06-customer-comms/`) | Founder | — | Drafts ready |
| 2.7 | Board of new company approves the asset acquisition | Founder | 2.1 | Minutes filed |
| 2.8 | Board of old company approves the asset disposal | Founder | 2.1 | Minutes filed |

## Phase 3 — HMRC and tax (Week 3)

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 3.1 | Apply for VAT registration for new entity, request TOGC treatment | Accountant | 2.1 | VAT1 submitted, TOGC flagged |
| 3.2 | Confirm CT registration for new entity | Accountant | 1.2 | CT UTR issued and reference on file |
| 3.3 | Register new PAYE scheme (if employing) | Accountant | 2.5 | PAYE ref issued |
| 3.4 | Notify HMRC of VAT deregistration / TOGC on old entity | Accountant | 3.1 | VAT7 submitted |
| 3.5 | Register with ICO | Founder | 1.2 | ICO registration confirmed |

## Phase 4 — Asset and contract transfer (Week 4)

**This is the risky week. Nothing before this is irreversible; nothing after this is easy to undo.**

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 4.1 | Sign Asset Transfer Agreement | Directors | 2.1, 2.7, 2.8 | Signed deed on file |
| 4.2 | Sign IP Assignment | Directors | 2.2 | Signed deed on file |
| 4.3 | Send out novation letters to every B2B customer | Founder | 2.4, 2.6 | All letters sent |
| 4.4 | Send out novation letters to every key supplier | Founder | 2.4, 2.6 | All letters sent |
| 4.5 | Update website Terms of Service to name new entity | Founder | 4.1 | Live |
| 4.6 | Update Privacy Policy with new data controller name | Founder | 4.1 | Live |
| 4.7 | Update footer, About page, invoice templates | Founder | 4.1 | Live |
| 4.8 | Transfer domain registrant records to new entity | Founder | 4.1 | Confirmed at registrar |
| 4.9 | Transfer GitHub org ownership (or create new org and migrate repos) | Founder | 4.1 | Repos under new org |
| 4.10 | File TM16 at UK IPO to assign trademarks to new entity (if applicable) | Founder / trademark attorney | 4.1 | Acknowledgement received |
| 4.11 | Send mass customer notification email (B2C) | Founder | 4.5, 4.6 | Sent |

## Phase 5 — Operational cut-over (Week 5)

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 5.1 | Route new Stripe payments to new bank account | Founder | 1.5, 1.6 | First payment received |
| 5.2 | Re-mandate every direct debit to the new bank account | Founder | 1.5 | All mandates updated |
| 5.3 | Cancel DDs on the old bank account only after new ones are live | Founder | 5.2 | Verified |
| 5.4 | Update every SaaS tool's billing company name, address and card | Founder | 1.5 | Each tool confirmed |
| 5.5 | Re-create Google Workspace / Microsoft 365 org under new name (or rename) | Founder | 1.2 | Done |
| 5.6 | Update email signatures company-wide | Founder | — | Done |
| 5.7 | Update social media "About" fields on every platform | Founder | — | Done |
| 5.8 | Issue first invoice from the new entity | Founder / bookkeeper | 5.1 | First invoice sent |
| 5.9 | Stop trading through the old entity completely | Founder | 5.8 | Confirmed — no new invoices, no new customer acquisition |

## Phase 6 — Wind-down old entity (Week 6 and beyond)

| # | Task | Owner | Dependency | Done when |
|---|---|---|---|---|
| 6.1 | Finalise the old entity's books up to cessation date | Bookkeeper | 5.9 | TB locked |
| 6.2 | Settle any remaining creditors from the old entity | Founder | 6.1 | Zero AP |
| 6.3 | Collect any remaining debtors into the old entity (or novate to new entity) | Founder | 6.1 | Zero AR |
| 6.4 | Zero the old bank account, close it | Founder | 6.2, 6.3 | Closed |
| 6.5 | File final Corporation Tax return for old entity | Accountant | 6.1 | Filed |
| 6.6 | File final accounts for old entity | Accountant | 6.5 | Filed |
| 6.7 | Deregister old entity for VAT if TOGC not fully handled | Accountant | 6.5 | Confirmed |
| 6.8 | Close old PAYE scheme (if any) | Accountant | — | Confirmed |
| 6.9 | Cancel old ICO registration | Founder | — | Confirmed |
| 6.10 | Wait minimum 3 months of no trading | — | 5.9 | Time passes |
| 6.11 | File DS01 to strike off the old entity (if chosen) | Founder | 6.10 | Filed, £33 fee paid online |
| 6.12 | Published in London Gazette, 2-month objection period | Companies House | 6.11 | Dissolution published |

## Phase 7 — Evidence pack for exit DD

After everything is done, assemble the evidence pack:

- [ ] Certificate of incorporation (new)
- [ ] Certificate of incorporation (old, for history)
- [ ] Certificate of dissolution (old, if struck off)
- [ ] Signed Asset Transfer Agreement + valuation memo
- [ ] Signed IP Assignment + schedule of assets
- [ ] Freelancer IP assignments (one per freelancer)
- [ ] Novation letters (one per B2B customer / key supplier, counter-signed)
- [ ] VAT registration letter (new) + VAT7 / TOGC confirmation (old)
- [ ] CT UTR (new) + final CT600 (old)
- [ ] New bank account confirmation
- [ ] Updated ToS / Privacy Policy with version-dated change log
- [ ] Customer notification email (sent record)
- [ ] TM16 acknowledgement (if applicable)
- [ ] Board minutes (both entities) approving the transfer

Store in `data-room/` when created — **but per the rules for this task, do NOT create files in `data-room/` as part of this plan.** Just note where the evidence will eventually live.
