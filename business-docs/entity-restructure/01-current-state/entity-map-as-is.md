# Current State: Entity Map (As-Is)

**Purpose:** Map everything that currently exists. You cannot transfer what you have not listed. Fill in every `[PLACEHOLDER]` with real data before running the restructure.

---

## 1. Legal entities

| # | Entity name | Company number | Incorporated | Status | Registered office | SIC codes | Notes |
|---|---|---|---|---|---|---|---|
| 1 | Upskill Energy [Ltd / Limited] | `[CRN]` | `[DD/MM/YYYY]` | Active / Dormant | `[ADDRESS]` | `[E.G. 85590]` | Current operating entity — wrong name for the business |
| 2 | `[ANY OTHER CURRENT ENTITIES?]` | | | | | | |

**Action:** Pull a Companies House snapshot for each entity (`https://find-and-update.company-information.service.gov.uk/`) and attach the PDF to this folder as `companies-house-[entity].pdf`.

## 2. Directors and PSCs

| Entity | Director / PSC | Role | Appointed | Shareholding % | Notes |
|---|---|---|---|---|---|
| Upskill Energy Ltd | `[NAME]` | Director / PSC | `[DATE]` | `[%]` | |
| Upskill Energy Ltd | `[NAME]` | | | `[%]` | |

## 3. Share capital (current)

| Entity | Share class | Number issued | Nominal value | Held by | % |
|---|---|---|---|---|---|
| Upskill Energy Ltd | Ordinary £1 | `[N]` | £1 | `[NAME]` | `[%]` |
| | | | | | |

**Total issued share capital:** £`[AMOUNT]`

## 4. What does the entity actually do?

Describe in plain English what Upskill Energy Ltd does day-to-day right now:

- **Primary trade:** `[E.G. publishes and sells online English-language courses and exam prep via theenglishhub.com]`
- **Secondary trades:** `[ANYTHING ELSE THE ENTITY DOES THAT ISN'T THE ENGLISH HUB]`
- **Legacy trades:** `[ANYTHING THE ENTITY USED TO DO BUT NO LONGER DOES — THIS MATTERS BECAUSE OF RESIDUAL LIABILITY]`

If the entity ever traded under "Upskill Energy" in its original meaning (e.g. an energy consulting business), flag any residual liabilities, warranties or open disputes here. A buyer will find these, so we should find them first.

## 5. Customer contracts held by this entity

**See companion doc:** `contracts-held-audit.md` for the full audit template.

Summary count only here:
- B2C customer accounts (self-serve, no signed contract): `[N]`
- B2B customers (signed MSA / order form): `[N]`
- School / institutional contracts: `[N]`
- Total ARR / recognised revenue in current entity: £`[AMOUNT]`

## 6. Supplier contracts held

- SaaS subscriptions in entity name (count): `[N]`
- Freelancer / contractor agreements: `[N]`
- Office / lease: `[NONE / DETAILS]`
- Hosting / infrastructure: `[AWS / Vercel / Railway / etc.]`

## 7. Employees

| Name | Role | Employment start | Employer on contract | PAYE scheme | Notes |
|---|---|---|---|---|---|
| `[NAME]` | `[ROLE]` | `[DATE]` | Upskill Energy Ltd | `[PAYE REF]` | |

If there are no employees, say so explicitly: **"Zero employees at `[DATE]`. Founder operates as director only."**

TUPE implications are covered in `04-legal/employment-transfer-tupe.md`.

## 8. Bank accounts

**See companion doc:** `banking-audit.md`. Summary here:

| Provider | Account name | Sort / acct | Purpose | Last balance | Notes |
|---|---|---|---|---|---|
| `[BANK]` | Upskill Energy Ltd | `[SC] [ACCT]` | Current | £`[AMOUNT]` | |
| `[CARD]` | | | Business card | | |

## 9. Payment processors

| Provider | Account name registered to | Merchant ID | Connected to which bank | Notes |
|---|---|---|---|---|
| Stripe | `[ENTITY ON STRIPE]` | `[ACCT ID]` | `[BANK]` | |
| PayPal | | | | |
| Other | | | | |

## 10. Intellectual property currently owned by / associated with the entity

**See companion doc:** `ip-ownership-audit.md`. Summary:

- Domain names: `[LIST]`
- Registered trademarks: `[LIST / NONE]`
- Code repositories: `[GITHUB ORG / REPOS — who owns them: entity or personal?]`
- Copyright in content (courses, videos, images, text): `[ENTITY / FREELANCER — any assignments on file?]`
- Databases (customer list, content catalogue): `[ENTITY]`

## 11. Accounts, tax and HMRC

| Item | Reference / number | Status |
|---|---|---|
| Corporation Tax UTR | `[UTR]` | |
| VAT registration | `[VRN]` or Not registered | |
| VAT scheme | Standard / Flat Rate / Cash / None | |
| PAYE reference | `[REF]` or Not registered | |
| Accounting reference date | `[DD/MM]` | |
| Last filed accounts | `[DATE]` | |
| Last filed confirmation statement | `[DATE]` | |
| Auto-enrolment (pension) | Yes / No / Not applicable | |
| ICO data protection registration | `[REF]` or Not registered | |

## 12. Accountancy and software stack

| Tool | Login email | Registered company name | Notes |
|---|---|---|---|
| Xero / QuickBooks / other | `[EMAIL]` | Upskill Energy Ltd | Will need new org / file |
| Payroll software | | | |
| HMRC Gateway | | | |
| Companies House WebFiling | | | |

## 13. Known issues, disputes or liabilities

List anything outstanding that a buyer would want to know about:
- Open disputes: `[NONE / DETAILS]`
- Unpaid invoices from the entity: `[NONE / £AMOUNT]`
- Director loans (in or out): `[NONE / £AMOUNT]`
- Tax in arrears: `[NONE / DETAILS]`
- Warranties or indemnities given in any contract: `[LIST]`

---

**Document completion status:**
- [ ] All placeholders filled
- [ ] Companies House extract attached
- [ ] Bank statements reviewed
- [ ] Reviewed by accountant
- [ ] Reviewed by solicitor
