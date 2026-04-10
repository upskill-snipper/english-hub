# Companies House Filings Checklist

**Purpose:** Every filing that will hit Companies House during and after the restructure. Track each one through to confirmation.

**Note on fees:** Companies House fees were changed in 2024 and may change again. **Verify current fee on gov.uk before paying.** Fees below are the ones most commonly cited as of 2024–2026.

---

## On incorporation of The English Hub Ltd

### IN01 — Application to register a company

- **What it does:** Incorporates the company. Sets name, address, directors, PSCs, share capital, articles.
- **When:** Week 1, the first filing.
- **Filed by:** Founder directly, or via formation agent, or via solicitor.
- **Fee (online):** £50 standard.
- **Fee (same-day):** £78.
- **Fee (paper):** £71 (slower, not recommended).
- **Fee (formation agent):** typically £15–£50 including a year of registered office.
- **Attachments:** Memorandum of association (auto-generated), subscriber consent, articles (default to Model Articles).
- **Post-filing:** Certificate of incorporation issued, CRN assigned. Company is legally alive.

**Checklist:**
- [ ] Name cleared against Companies House register
- [ ] Name cleared against UK IPO trademark register
- [ ] Registered office address confirmed
- [ ] Director service addresses confirmed
- [ ] PSC register data ready
- [ ] SIC codes chosen
- [ ] Share capital structure confirmed (100 × £1 ordinary, all to founder)
- [ ] Model Articles selected (unless specific reason for bespoke)
- [ ] Subscriber(s) ready to sign
- [ ] IN01 submitted
- [ ] Certificate of incorporation received
- [ ] CRN logged in `01-current-state/entity-map-as-is.md` (updated to reflect new entity)

## Within first 30 days

No mandatory filings here — but several operational steps that touch Companies House-adjacent systems:

- [ ] HMRC CT registration confirmed (usually automatic)
- [ ] HMRC VAT registration (VAT1) filed
- [ ] HMRC PAYE registration (if employing)
- [ ] ICO data protection registration

## Share / cap table filings (if any)

### SH01 — Return of allotment of shares

- **What it does:** Reports a new issue of shares after incorporation.
- **When:** Only filed if shares are issued after incorporation (not for shares issued *on* incorporation via IN01).
- **Deadline:** Within 1 month of the allotment.
- **Fee:** Free (no Companies House fee).
- **Trigger for this plan:** only if bringing in a co-shareholder or investor mid-restructure.

### SH19 — Statement of capital (when changes occur)

Usually handled automatically when filing related forms. Not separately filed.

## Director and office changes

### AP01 — Appointment of director

- **When:** If appointing a new director during the restructure.
- **Deadline:** 14 days.
- **Fee:** Free.

### TM01 — Termination of director appointment

- **When:** If a director resigns.
- **Deadline:** 14 days.
- **Fee:** Free.

### CH01 — Change of director's details

- **When:** Change of name or service address.
- **Deadline:** 14 days.
- **Fee:** Free.

### AD01 — Change of registered office address

- **When:** If the registered office moves.
- **Deadline:** 14 days.
- **Fee:** Free.

## Accounting reference date

### AA01 — Change of accounting reference date

- **What it does:** Moves the ARD.
- **When:** If the default ARD (last day of month of incorporation) is not what you want.
- **Constraints:** Can usually shorten ARD as often as you like. Can only lengthen once every 5 years, and not beyond 18 months from the start of the period.
- **Fee:** Free.
- **Recommended action in this plan:** File AA01 shortly after incorporation to set ARD to a sensible date (e.g. 31 March).

## Annual obligations (first year)

### CS01 — Confirmation Statement

- **When:** Due annually on the anniversary of incorporation (or last CS01). First one is due within 14 days of the first anniversary.
- **Fee:** £34 (online).
- **Purpose:** Confirms company details are still correct; updates any changes.

### AA — Annual accounts

- **When:** First set of accounts covers from incorporation to the ARD. Due at Companies House **21 months** after incorporation for the first set, then **9 months** after ARD thereafter.
- **Fee:** Free (accountant preparation costs money).
- **Format:** Micro-entity / small company / full, depending on size thresholds.

### CT600 — Corporation Tax return (HMRC, not Companies House)

- **When:** 12 months after the end of the accounting period.
- **Payment:** CT due 9 months and 1 day after end of accounting period.

## Winding down Upskill Energy Ltd

### DS01 — Striking off application

- **What it does:** Applies to Companies House to strike the company off the register.
- **When:** Minimum 3 months after cessation of trading, AND after all of the following:
  - All creditors are paid
  - All tax liabilities are settled
  - Final accounts and CT returns are filed
  - No assets remain in the company (any remaining cash must be distributed or it will vest in the Crown as bona vacantia)
- **Fee:** £33 online (£44 paper).
- **Process:** Companies House publishes the application in the London Gazette. Creditors, HMRC and anyone else with an interest has 2 months to object. If no objection, the company is struck off.
- **Post-strike-off:** The company no longer exists. Bank accounts should be zero before filing — any leftover cash vests in the Crown.

### Notify relevant parties before filing DS01

Required by law (s.1006 CA 2006) — within 7 days of filing DS01, notify:

- [ ] All members (shareholders)
- [ ] All creditors
- [ ] All employees (if any)
- [ ] All directors (if any other than the applicant)
- [ ] Trustees of any employee pension fund (if any)
- [ ] HMRC (usually informed anyway via the final CT return)

## Alternative to DS01: Members' Voluntary Liquidation (MVL)

Mentioned for completeness only — **not recommended for this restructure**.

An MVL is a formal liquidation route used when a solvent company is wound up and the proceeds distributed to shareholders. It is more expensive (£2K–£5K+ insolvency practitioner fees) and only makes sense if the distributing amount makes Business Asset Disposal Relief (BADR) tax savings worth the cost — typically £25K+ of distribution.

If the old entity has minimal retained cash, strike-off via DS01 is the right answer.

## Filing evidence to retain for DD

Every filing above should end up with:
- Confirmation of acceptance from Companies House
- PDF copy of the filed form
- A dated note in this folder confirming it was filed and by whom

Store copies centrally (eventually in `data-room/` — but not as part of this plan).
