# Entity Restructure: The English Hub

**Status:** Draft plan — not yet executed
**Owner:** [FOUNDER NAME]
**Target completion:** 6 weeks from kick-off
**Budget envelope:** £1,500 – £4,000 all-in (legal + accounting + filings)

---

## Why are we doing this?

The operating business currently trades through **Upskill Energy [Ltd / Limited]**, an entity whose name, SIC codes, history and (likely) articles do not reflect what the business actually does: publish English-language learning products under the "The English Hub" brand.

This is a problem because:

1. **Exit drag.** A trade buyer or PE buyer performing due diligence on The English Hub will find customer contracts, payment rails, IP and employment sitting in a wrongly-named entity. That forces either a messy carve-out at sale, a retrospective assignment exercise, or a price chip. Based on comparable small UK EdTech exits, a "clean target entity" is worth an estimated **£200K – £500K** of headline price (or, more honestly, removes a £200K – £500K discount a buyer would otherwise apply).
2. **Brand coherence.** Invoices, contracts, VAT receipts and terms & conditions should all say "The English Hub" — not a legacy name from a previous venture.
3. **Risk ring-fencing.** Any residual liability from the old Upskill Energy trade (contracts, disputes, tax) should be severed from the new clean entity.
4. **Regulatory clarity.** Exam board endorsement, safeguarding policies and any future EdTech-specific registrations should live with the entity whose name matches the brand.

## What are we doing?

At a high level:

1. Incorporate a new company — working name **The English Hub Ltd** (subject to name-availability check at Companies House).
2. Transfer the trade, assets, IP, brand, customer list and contracts from Upskill Energy Ltd to The English Hub Ltd using an Asset Transfer Agreement.
3. Novate customer, supplier and software contracts to the new entity.
4. Assign IP (code, domains, trademarks, content) to the new entity.
5. Open new banking, Stripe and payment rails for the new entity and close/park the old ones.
6. Register for VAT, Corporation Tax and (if applicable) PAYE under the new entity — claim Transfer of Going Concern (TOGC) VAT relief where possible.
7. Notify customers, suppliers and HMRC.
8. Leave Upskill Energy Ltd dormant (or strike it off via DS01) once every tail item is settled.

## Who needs to be involved?

| Role | Who | What they do |
|---|---|---|
| Founder / Director | [FOUNDER NAME] | Decisions, sign-offs, customer comms |
| Solicitor | [TBD — see `08-cost-estimates/service-providers.md`] | Asset Transfer Agreement, novation letters, IP assignment |
| Accountant | [TBD] | VAT TOGC advice, Corporation Tax, HMRC registrations, inter-company accounting |
| Bookkeeper | [TBD] | Ledger cut-over, new Xero / QuickBooks file |
| Bank | [TBD — Tide / Starling / Barclays] | New business current account |
| Payment provider | Stripe (and others) | New account + migration |

## How long will it take?

**6 weeks end-to-end** is realistic if nothing goes wrong. Expect 8–10 weeks if the bank drags its feet on KYC, or if a big customer contract has to go through procurement re-papering.

See `03-plan/timeline-gantt.md`.

## How much will it cost?

See `08-cost-estimates/total-cost-estimate.md` for a full breakdown. Summary:

| Item | Low | High |
|---|---|---|
| Companies House IN01 | £12 | £100 |
| Solicitor (ATA + novations + IP assignment) | £500 | £2,000 |
| Accountant (TOGC, registrations, ledger set-up) | £500 | £1,000 |
| Bank account setup | £0 | £200 |
| Trademark assignment / filings (if applicable) | £0 | £200 |
| Contingency | £200 | £500 |
| **TOTAL** | **£1,212** | **£4,000** |

## What is explicitly out of scope?

- Share-for-share exchanges, holdco creation, or any structure designed for founder tax planning on exit — that is a **separate** exercise to be done later with a tax adviser and would typically need HMRC clearance (s.138 TCGA 1992). This plan just gets the operating entity clean.
- Changing employees' employer where TUPE applies — flagged as a risk, handled in `04-legal/employment-transfer-tupe.md`.
- EMI scheme migration — if there is one, flag early; EMI options do not automatically transfer and need specialist advice.

## How this folder is structured

```
entity-restructure/
  README.md                         <-- you are here
  01-current-state/                 audit what we have today
  02-target-state/                  describe what we want
  03-plan/                          sequencing, timeline, risks
  04-legal/                         templates and checklists for lawyers
  05-hmrc/                          tax registrations and TOGC
  06-customer-comms/                letters to customers and suppliers
  07-banking/                       new accounts and Stripe migration
  08-cost-estimates/                budget and service providers
```

## How to use this plan

1. Read this README.
2. Work through `01-current-state/` with real data. Do not skip the audits — you cannot safely transfer what you have not listed.
3. Agree target state with the accountant and solicitor (`02-target-state/`).
4. Use `03-plan/restructure-plan.md` as the running checklist.
5. Track risks weekly against `03-plan/risk-register.md`.
6. Treat everything in `04-legal/` as starting-point drafts that MUST be reviewed by a qualified solicitor before signing. These are templates, not legal advice.

## Disclaimer

Nothing in this folder is legal or tax advice. It is a project plan drafted by the founder to make the conversation with a solicitor and accountant cheaper and faster. All templates must be reviewed by a qualified professional before use.
