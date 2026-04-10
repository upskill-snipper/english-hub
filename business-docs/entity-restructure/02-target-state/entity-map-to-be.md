# Target State: Entity Map (To-Be)

**Purpose:** Define the end state we are building toward. Keep this simple — complexity is the enemy of a clean exit.

---

## 1. The target structure

**One operating company, one brand, one trading name, one entity on every customer contract.**

```
                 ┌──────────────────────────────┐
                 │   Founder (and any           │
                 │   co-shareholders, EMI,      │
                 │   investors)                 │
                 └──────────────┬───────────────┘
                                │ 100% ordinary shares
                                ▼
                 ┌──────────────────────────────┐
                 │    The English Hub Ltd       │
                 │    (newly incorporated)      │
                 │                              │
                 │    - All customer contracts  │
                 │    - All IP                  │
                 │    - All employees           │
                 │    - All bank accounts       │
                 │    - All software licences   │
                 │    - VAT registered          │
                 │    - CT registered           │
                 └──────────────────────────────┘


              ┌─────────────────────────┐
              │   Upskill Energy Ltd    │
              │   (dormant, then        │
              │   struck off via DS01)  │
              └─────────────────────────┘
```

## 2. What sits where, on completion

| Item | Old: Upskill Energy Ltd | New: The English Hub Ltd |
|---|---|---|
| Trading name | — (dormant) | The English Hub |
| Customers (B2C) | None | All |
| Customers (B2B) | None | All (via novation) |
| Supplier contracts | None (or tail only) | All |
| Code repos | — | Owned by The English Hub Ltd GitHub org |
| Domains | — | Registered to The English Hub Ltd |
| Trademarks | — | Assigned to The English Hub Ltd via TM16 |
| Bank account | Zero balance (pending close) | Main operating account |
| Stripe | Deactivated / account closed | New account, fully live |
| Employees | None | All (via TUPE where applicable) |
| VAT registration | Deregistered on TOGC | New VRN, TOGC'd in |
| Corporation Tax | Final return, then dormant | Registered for CT |
| PAYE scheme | Closed | New PAYE scheme (if employing) |
| ICO registration | Cancelled | Fresh registration |

## 3. Design principles for the target state

- **One entity.** No holding company, no subsidiaries. Add structure later for a specific reason (share-for-share for exit tax planning, raising investment, separate risk domain). Adding unnecessary structure now just creates more filings.
- **Clean cap table.** Ordinary shares only, unless there's a hard reason for a second class. Founder holds 100% on Day 1 unless there's an existing co-shareholder who must be brought in.
- **Clean articles.** Use the Companies House model articles unless a solicitor advises otherwise. Model articles are free, well-understood by every buyer's lawyer, and don't need explaining in DD.
- **Name match.** Registered company name exactly matches the trading brand. This removes one friction point in every future touchpoint (invoices, terms, customer support).
- **Year-end choice matters.** Pick an accounting reference date that suits the business rhythm, not an arbitrary one. Typically either 31 March (UK tax year alignment) or a month after the natural busy season (so reporting catches full cycles).

## 4. Dormant treatment for Upskill Energy Ltd

After cut-over, Upskill Energy Ltd will:
1. Cease trading.
2. Settle any remaining liabilities.
3. File a final set of accounts covering the period up to the cessation date.
4. File a final Corporation Tax return.
5. Deregister for VAT (or notify HMRC of TOGC — see `05-hmrc/vat-togc-notes.md`).
6. Notify HMRC PAYE that scheme is closed (if applicable).
7. Either sit dormant for 3 months with no transactions, then apply for strike-off via Form **DS01** (£33 online, £44 paper), **or** be kept dormant indefinitely if there is residual risk the founder wants to ring-fence.

**Decision to make:** strike off or keep dormant? See `03-plan/restructure-plan.md` — this is a judgment call based on:
- Any open warranties in historical contracts
- Any possibility of latent claims (product liability, employment, tax)
- Cost of dormant filings vs. peace of mind

For a small EdTech SaaS business with no complex history, striking off 3 months after cessation is usually the right answer. Verify with the solicitor.

## 5. What the target state is **not**

Explicitly out of scope:

- **Holding company structure.** No HoldCo → TradeCo unless a tax adviser recommends it for a specific reason. Flat is fine.
- **Multiple operating subs** (e.g. TEH Ltd UK + TEH Inc US). Defer until there's a real operational need.
- **IP HoldCo / licence-back structure.** Attractive to some founders, usually dismissed in DD as "over-engineered" for a sub-£5m business.
- **Share classes for investors.** Only add if taking actual investment; don't pre-build.
- **EMI scheme migration.** If an EMI scheme already exists in the old entity, treat it as a separate, parallel workstream — EMI options do NOT automatically carry over.

## 6. Exit readiness checklist (target state)

The point of this restructure is that at exit, a buyer's lawyer should be able to tick:

- [ ] One target entity, clean name, Model Articles
- [ ] Clean cap table, no legacy share classes
- [ ] All customer contracts held by target
- [ ] All IP held by target (with written assignment trail for every freelancer contribution)
- [ ] All employees held by target (with up-to-date contracts)
- [ ] All software / SaaS held by target
- [ ] All bank / payment rails held by target
- [ ] VAT, CT, PAYE all registered to target
- [ ] No residual trading activity in a legacy entity
- [ ] Legacy entity either struck off or provably dormant
- [ ] No director loans in or out
- [ ] No cash in the legacy entity
- [ ] Confirmation statement up to date
- [ ] Accounts filed on time
- [ ] PSC register accurate
