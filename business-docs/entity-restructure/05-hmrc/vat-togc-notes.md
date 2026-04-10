# VAT — Transfer of a Going Concern (TOGC) Notes

**Purpose:** Explain TOGC in enough detail to brief the accountant and support the treatment in the Asset Transfer Agreement. TOGC means the VAT on the asset transfer is not chargeable at all — it is "outside the scope" of VAT — which is a cashflow benefit worth up to 20% of the transfer consideration.

**Reference:** HMRC VAT Notice 700/9 "Transfer of a business as a going concern". Always read the current version before acting — the notice is updated periodically.

---

## What TOGC is

Under Article 5 of the Value Added Tax (Special Provisions) Order 1995, the transfer of a business (or part of a business) that is transferred **as a going concern** is treated as outside the scope of VAT if specific conditions are met. No VAT is charged by the seller, and no VAT is recoverable by the buyer, because the transfer is not a "supply" for VAT purposes.

This is not an exemption — it's a "not a supply" outcome, which is different in VAT law but produces the same cashflow result: no VAT on the invoice.

## Why it matters in this restructure

Without TOGC, the asset transfer from Upskill Energy Ltd to The English Hub Ltd would be a taxable supply. VAT at 20% would be charged on the consideration (£[CONSIDERATION] × 20% = £[VAT AMOUNT]), the Buyer would pay it, and then reclaim it three months later on its first VAT return.

That's recoverable eventually, but:
- It is a cashflow hit to the Buyer
- It complicates the intercompany loan structure
- It puts extra noise on the Seller's final VAT return
- If the Buyer's first return is delayed, the recovery is delayed

TOGC makes the transfer invisible for VAT purposes. Cleaner.

## The conditions (all must apply)

From HMRC's current guidance:

1. **A business is being transferred, not just assets.** The transfer must include a group of assets that, together, constitute a going concern capable of being operated as a business by the buyer. Transferring "all our software" is not enough; transferring "the software, the customer contracts, the customer database, the domain, the goodwill and the content" is a going concern.

2. **The transferee uses the assets to carry on the same kind of business** as the transferor (with or without a break). This restructure meets this cleanly: The English Hub Ltd is continuing the exact same English-language learning business.

3. **The transferee is or becomes VAT-registered** on the transfer date (if the transferor was VAT-registered). This is why VAT1 must be filed **before** the Transfer Date — the new entity must be VAT-registered on or before the day the transfer happens.

4. **There is no significant break in trading.** The business must be continuous. A short administrative pause (a day, maybe a weekend) is fine; a month's pause is a problem.

5. **Where part of a business is being transferred**, that part must be capable of being operated separately. Not relevant if transferring the whole business.

6. **If land or buildings are part of the transfer and have been "opted to tax"**, the transferee must also opt to tax them and notify HMRC. Not applicable if no property is involved.

## Documenting TOGC

### In the ATA

A standard TOGC clause goes into the Asset Transfer Agreement — the template at `04-legal/asset-transfer-agreement.md` includes one at clause 3.3. It says the parties intend TOGC to apply and, if HMRC rules otherwise, the Buyer will pay VAT on top of consideration.

### Accountant's TOGC memo

Get the accountant to prepare a short memo (1–2 pages) confirming:
- Why TOGC applies to this transfer
- Each condition, with evidence
- Any risks
- Action items (e.g. VAT1 submission deadline)

This memo is filed with the ATA and forms part of the DD evidence pack.

### On the VAT1 application

When the new entity applies for VAT registration, indicate on VAT1 that registration is in connection with the acquisition of a going concern. Provide:
- Name and VRN of the transferor
- Description of the business being acquired
- Transfer date

### On the old entity's VAT return

The old entity's final VAT return does NOT include the transfer as a supply — because it is not a supply. The final return just tidies up any outstanding VAT from real pre-transfer sales.

### VAT deregistration for the old entity (VAT7)

After the transfer, the old entity must deregister for VAT by filing Form VAT7. This can be done:
- Immediately after the Transfer Date if the entity is genuinely ceasing to trade
- Later, if the entity is kept alive for any reason

## Risks to watch

### Risk 1: New entity not VAT-registered in time

If VAT1 is delayed and the new entity is not VAT-registered on the Transfer Date, TOGC fails. Fix: apply early (Week 2 of the plan).

### Risk 2: "Significant break in trading"

If the transfer involves a pause — e.g. pulling the product offline to rebuild — HMRC may argue there's a break. Fix: time the transfer so the product is live continuously through the transfer date. Do not do downtime simultaneously with the asset transfer.

### Risk 3: Not enough assets transferring

If the transfer is "just the IP, the customer list and the goodwill, but the software licences stay with the old entity for a bit", HMRC might argue the going concern is incomplete. Fix: transfer everything the business needs to operate, not just the headline assets.

### Risk 4: HMRC challenge

HMRC does not pre-approve TOGC. They can challenge after the fact — typically on a VAT inspection years later. The accountant's memo + clean documentation is your defence.

### Risk 5: "But they're common-owned, why bother?"

Some founders assume that because both entities are owned by the same person, VAT is self-cancelling and TOGC doesn't matter. It doesn't work that way — without TOGC, VAT is charged as a formal matter and creates actual compliance obligations. Do the TOGC properly.

## The condition that is often overlooked: "part of the business must be capable of being operated separately"

Only relevant if transferring part of a business, not the whole thing. For this restructure (whole business moving), skip. But worth knowing: if you ever carve out "just the B2C product" and leave a "B2B product" behind, each must be capable of operating on its own — and HMRC look at this seriously.

## Practical TOGC checklist for this restructure

- [ ] Entire trade being transferred (not carve-out)
- [ ] Same business carried on by the transferee
- [ ] Transfer Date is one specific date
- [ ] VAT1 filed for new entity before Transfer Date
- [ ] VAT1 flags acquisition of going concern
- [ ] New entity is VAT-registered on or before Transfer Date
- [ ] ATA contains TOGC clause
- [ ] Accountant's TOGC memo on file
- [ ] No break in trading through the Transfer Date
- [ ] All going-concern assets transferred (not a subset)
- [ ] Old entity's VAT7 filed after transfer
- [ ] Documentation preserved for 6 years (VAT record retention)

## What is explicitly NOT a TOGC

- A mere asset sale (e.g. "we sold our laptops")
- A transfer of cash
- A transfer of debtors / receivables only
- A share sale (shares are VAT-exempt anyway)
- A transfer where the buyer immediately dismantles the business for parts

None of these apply to this restructure. The transfer is a textbook going-concern transfer.
