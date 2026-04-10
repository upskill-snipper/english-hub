# Target Company Setup

**Purpose:** Specify exactly how the new company will be incorporated at Companies House. Treat this as a spec — hand it to a solicitor, accountant, or formation agent and they should be able to file it.

---

## 1. Name

**Working name:** The English Hub Ltd

### Name availability

Must be cleared against three things before filing:

1. **Companies House register.** Use `https://find-and-update.company-information.service.gov.uk/` and the Company Name Availability Checker. A name that is too similar to an existing company will be rejected.
2. **Sensitive words and expressions.** The Companies Act 2006 restricts words like "British", "Royal", "Association", "University", "Academy", etc. "Hub", "English" and "Ltd" are all fine.
3. **Trademark clearance.** Search the UK IPO register for any conflicting registered trademark in classes 9, 16 and 41 (typical EdTech classes). A company name can be lawfully registered even where there's a conflicting trademark, but you don't want to be on the wrong end of that fight.

### Fallbacks

Pre-agree fallback names in case the first is taken or rejected:
1. The English Hub Ltd
2. English Hub Learning Ltd
3. The English Hub Group Ltd
4. English Hub EdTech Ltd
5. `[FOUNDER FALLBACK]`

Reserve the chosen name by filing IN01 the same day it is cleared — there is no separate name reservation system at Companies House.

## 2. Company type

**Private company limited by shares.**

Not:
- CIC (Community Interest Company) — adds regulatory friction, hurts saleability
- LLP — different tax treatment, wrong tool
- Limited by guarantee — no share capital, can't take investment or be sold easily
- PLC — wildly over-structured for this stage

## 3. Registered office

**Choose one of:**

- Home address of founder (free, but becomes public on the register — privacy issue)
- Accountant's office as registered office (often included in annual accountant fee)
- Commercial registered office service (Tide, Mail Boxes Etc, etc. — £30–£150/year)
- Serviced office address (if you have one)

**Recommendation:** use the accountant's office or a paid service. Do not use a home address unless unavoidable.

Service address for directors should also NOT be a home address where possible.

## 4. SIC codes

Pick the codes that actually describe what the business does. You can pick up to four.

Most likely fits for The English Hub:

| SIC | Description |
|---|---|
| **85590** | Other education not elsewhere classified |
| **58110** | Book publishing |
| **58190** | Other publishing activities |
| **62012** | Business and domestic software development |
| **63990** | Other information service activities n.e.c. |

Recommended combination: **85590 + 58190 + 62012** (education primary, publishing secondary, software tertiary).

Verify current list at `https://resources.companieshouse.gov.uk/sic/`.

## 5. Articles of association

**Use Companies House Model Articles for private companies limited by shares.**

Reasons:
- Free.
- Every UK corporate lawyer understands them.
- Do not surface as a DD question.
- Perfectly adequate for a single-shareholder, single-class EdTech SaaS company.

**Do not adopt bespoke articles** unless:
- Taking investment (use BVCA standard-ish SHA at that point).
- Creating EMI / growth share classes.
- A co-founder agreement requires specific provisions.

If bespoke articles are needed later, amend by special resolution — don't pre-bake complexity at incorporation.

## 6. Share capital

### Initial capital

| Share class | Nominal value | Number issued | Holder | Paid up? |
|---|---|---|---|---|
| Ordinary | £1.00 | 100 | `[FOUNDER NAME]` | Fully paid — £100 cash |

**Why 100 × £1 ordinary:**
- Cheap and simple.
- 100 shares is divisible (into halves, quarters, fifths, tenths, twentieths, twenty-fifths, fiftieths) which matters later if bringing in a co-founder or investor without fractional shares.
- £1 nominal is the UK norm. £0.01 nominal is fine but buys nothing. £100 nominal inflates stamp duty calculations unnecessarily.

### Unissued share reserve

Leave headroom. Authorised share capital concept no longer applies post-CA 2006 for private companies, so unissued shares are just "not yet issued" — no need to pre-authorise a big pool.

## 7. Directors and PSCs

### Directors

| Name | Role | Service address | Country of residence |
|---|---|---|---|
| `[FOUNDER NAME]` | Director | `[SERVICE ADDRESS]` | UK |

Minimum one director required (must be a natural person — Companies House disallowed sole corporate directors since 2016).

### Persons with Significant Control (PSC)

| Name | Nature of control |
|---|---|
| `[FOUNDER NAME]` | Ownership of more than 75% of shares; ownership of more than 75% of voting rights |

## 8. Company secretary

**Optional and not recommended** for a single-director private company. Do not appoint.

## 9. Accounting reference date (ARD)

Default: Companies House sets ARD to the last day of the month in which the company was incorporated. You can change it later (up to a limit) via Form **AA01**.

**Decision:** pick ARD deliberately.
- 31 March aligns with UK tax year and simplifies bookkeeping.
- 31 May / 30 June gives buffer after busy periods.
- Avoid 31 December (overlaps with the accountant's busiest period).

**Recommendation:** 31 March ARD. Align first period via AA01 after incorporation.

## 10. Incorporation filings required

### Form IN01 (the main one)

This is the incorporation form. Files company name, registered office, SIC, directors, share capital, articles, subscribers, PSC, in one go.

- Filed online: £50 (standard) or £78 (same-day) — *verify current fee at Companies House before filing, fees have changed in recent years.*
- Filed via formation agent: typically bundled into a £15–£50 package.

### After incorporation (first 30 days)

- Register for Corporation Tax (automatic in most cases, but confirm). See `05-hmrc/corporation-tax-registration.md`.
- Register for VAT (not automatic; see `05-hmrc/vat-registration-new-entity.md`).
- Register for PAYE if employing (see `05-hmrc/paye-registration.md`).
- Register with the ICO (see Risk Register in `03-plan/risk-register.md`).
- Open business bank account (see `07-banking/new-bank-account-checklist.md`).

## 11. Post-incorporation filings you'll hit within the first year

| Form | Purpose | When |
|---|---|---|
| CS01 | Confirmation Statement | Annually, on anniversary of incorporation |
| AA / AA02 | Annual Accounts | 9 months after ARD first time (21 months after incorporation for the first set) |
| CT600 | Corporation Tax return | 12 months after end of accounting period |
| SH01 | Return of allotment | Only if issuing more shares |
| AP01 / TM01 | Director appointment / termination | Within 14 days of change |
| AD01 | Change of registered office | Within 14 days of change |

## 12. What the incorporation pack should contain (for your records)

- Certificate of incorporation
- Adopted articles (model)
- Memorandum of association (auto-generated)
- Share certificates (print and file)
- Register of members
- Register of directors
- Register of directors' residential addresses
- Register of PSCs
- First board minutes (appointing director, adopting articles, opening bank account, authorising officers)

A solicitor or formation agent will usually produce this pack for £50–£150.
