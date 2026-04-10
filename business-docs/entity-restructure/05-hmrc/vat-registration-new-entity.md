# VAT Registration — The English Hub Ltd

**Purpose:** Register the new entity for VAT and (where possible) invoke Transfer of a Going Concern (TOGC) treatment so that no VAT is charged on the asset transfer from Upskill Energy Ltd.

---

## Is the new entity required to register for VAT?

Yes, if:

- The old entity (Upskill Energy Ltd) was already VAT-registered AND the new entity is continuing the same trade, OR
- Taxable turnover of the new entity is expected to exceed the VAT registration threshold (currently **£90,000** — verify current threshold on gov.uk) in any rolling 12-month period, OR
- There is an expectation of exceeding the threshold within the next 30 days.

If the old entity was VAT-registered and the new entity is taking over the trade, **the new entity must register for VAT on or before the Transfer Date** for TOGC to apply cleanly.

## Voluntary registration

Even if the threshold is not hit, voluntary registration may make sense if:
- Customers are mostly VAT-registered businesses themselves (so charging them VAT is cost-neutral and you get to reclaim input VAT)
- Input costs have recoverable VAT
- Brand-wise, showing a VAT number on invoices is a credibility signal

For a consumer-facing EdTech business (B2C), voluntary registration often **hurts** because it effectively makes your prices 20% higher or you absorb the hit.

**Decision point:** talk to the accountant. For most B2C-heavy EdTech businesses, the answer is "register only when you must". For most B2B-heavy EdTech businesses, "register voluntarily from day 1".

## How to register

### Form VAT1 — Application for VAT Registration

- Filed online via `https://www.gov.uk/register-for-vat` (Government Gateway login required)
- Filed by: accountant (usually) or founder
- Cost: free
- Processing time: typically 2–6 weeks

**Information needed:**
- CRN and UTR of The English Hub Ltd
- Business description and SIC codes
- Date of intended registration
- Expected turnover in next 12 months
- Details of bank account for VAT refunds
- Directors' National Insurance numbers
- If applying for TOGC from an existing registration: details of the transferor (Upskill Energy Ltd) and its VRN

### TOGC specific — indicate on VAT1

On VAT1, there is a specific section for "Transfer of a Going Concern". You must indicate that the business is being acquired as a going concern and provide the transferor's details. This is how HMRC connects the dots between the Seller's VAT history and the Buyer's new registration.

### Optionally: transfer the existing VAT registration number (VAT68)

Form **VAT68** requests that the transferor's existing VAT registration number be **transferred** to the transferee rather than a new number being issued.

**Pros of using VAT68:**
- Same VRN on invoices — less customer confusion
- VAT history follows
- Transferor doesn't need to deregister separately

**Cons of using VAT68:**
- The transferee inherits the transferor's VAT history, including any errors or outstanding liabilities
- More complex to unwind if something goes wrong
- Some accountants advise against it because it ties the two entities together more tightly than some exits want

**Recommendation for this restructure:** do NOT use VAT68. Get a clean new VRN for The English Hub Ltd and deregister Upskill Energy Ltd separately. Cleaner audit trail, cleaner DD narrative.

## VAT schemes to consider for the new entity

### Standard VAT accounting (quarterly returns)

Default scheme. Charge VAT on outputs, reclaim VAT on inputs, pay the difference (or reclaim) quarterly. Straightforward with Xero / QuickBooks.

### Flat Rate Scheme (FRS)

Business charges 20% VAT as normal but pays HMRC a reduced flat percentage based on sector. For "Business services not listed elsewhere" the rate is typically 12% (verify current rate). Cannot generally reclaim input VAT under FRS.

**When FRS makes sense:** low input VAT (e.g. services-only business with minimal kit / software).
**When FRS does not make sense:** lots of software spend with VAT on it, because you lose the input VAT reclaim.

For most EdTech SaaS businesses with meaningful SaaS spend, **standard VAT is better than FRS**.

### Cash Accounting Scheme

VAT is accounted for when cash is received/paid rather than invoice date. Useful for businesses with long payment terms. Eligibility: turnover up to £1.35m.

### Annual Accounting Scheme

One return per year rather than quarterly. Eligibility: turnover up to £1.35m.

## Making Tax Digital (MTD)

Since April 2022, all VAT-registered businesses must comply with MTD — returns filed from compatible software (Xero, QuickBooks, Sage, etc.). Bridging software is no longer a workaround for new registrations.

Set up the new Xero file with VAT correctly configured from day 1.

## Digital services and place of supply

EdTech businesses selling digital English-learning content to consumers across the EU / worldwide hit a specific wrinkle: **place of supply rules**.

- B2C digital services to UK consumers: UK VAT (20%).
- B2C digital services to EU consumers: VAT is generally due in the **customer's country**. Options:
  - Register for VAT in every EU country you sell in (mad)
  - Register for the **EU OSS (One Stop Shop)** via a single EU country (typically Ireland for English-speaking founders). Changed post-Brexit — verify current process.
  - Use a platform that handles this for you (e.g. Paddle as merchant of record).
- B2C digital services to rest-of-world consumers: generally UK VAT applies unless a specific country has its own rules (Australia, Norway, Switzerland, etc. all have digital VAT rules that may apply).

This is a whole workstream in itself — flag for the accountant. If the old entity was already handling this, the new entity must continue exactly the same approach.

## Checklist

- [ ] Decision: required or voluntary registration
- [ ] Decision: standard scheme vs. FRS
- [ ] VAT1 submitted with TOGC indicated
- [ ] VAT68 consideration documented (usually rejected)
- [ ] Accountant's TOGC memo on file (see `vat-togc-notes.md`)
- [ ] New VRN received and logged
- [ ] Xero / QuickBooks VAT config set up
- [ ] First VAT return filed on time
- [ ] Old entity's VAT7 (deregistration) filed where appropriate

## Key references

- `https://www.gov.uk/register-for-vat` — HMRC registration portal
- `https://www.gov.uk/guidance/vat-transfer-of-a-going-concern-notice-7009` — Notice 700/9 on TOGC
- VAT Notice 700 — the main VAT guide
