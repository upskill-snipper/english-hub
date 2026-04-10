# 6-Week Timeline (Gantt-style)

**Assumption:** Week 0 = preparation week before kick-off. Week 1 is the first "real" week. This is aggressive but achievable if Week 0 is done properly.

---

## Legend

- `P` Preparation
- `L` Legal drafting
- `H` HMRC / tax
- `O` Operational
- `C` Communications
- `W` Wind-down
- `█` Active work
- `░` Dependent waiting

---

## The Gantt

```
Phase                     | Wk0 | Wk1 | Wk2 | Wk3 | Wk4 | Wk5 | Wk6 | Post
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
P  Audits (as-is docs)    |  █  |     |     |     |     |     |     |
P  Engage solicitor       |  █  |     |     |     |     |     |     |
P  Engage accountant      |  █  |     |     |     |     |     |     |
P  Name clearance         |  █  |     |     |     |     |     |     |
P  Asset valuation        |  █  |  █  |     |     |     |     |     |
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
O  File IN01              |     |  █  |     |     |     |     |     |
O  First board meeting    |     |  █  |     |     |     |     |     |
O  Bank account apply     |     |  █  |  ░  |  ░  |     |     |     |
O  Stripe apply           |     |  █  |  ░  |  ░  |     |     |     |
O  Xero file setup        |     |  █  |     |     |     |     |     |
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
L  Draft ATA              |     |     |  █  |  █  |     |     |     |
L  Draft IP Assignment    |     |     |  █  |  █  |     |     |     |
L  Freelancer back-fills  |     |     |  █  |  █  |     |     |     |
L  Novation template      |     |     |  █  |     |     |     |     |
L  Board minutes          |     |     |     |  █  |     |     |     |
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
H  VAT1 + TOGC flag       |     |     |     |  █  |  ░  |  ░  |     |
H  CT registration        |     |     |  █  |     |     |     |     |
H  PAYE (if any)          |     |     |     |  █  |     |     |     |
H  ICO                    |     |     |  █  |     |     |     |     |
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
L  Sign ATA + IP Deed     |     |     |     |     |  █  |     |     |
C  Send B2B novations     |     |     |     |     |  █  |  █  |     |
C  Send supplier letters  |     |     |     |     |  █  |  █  |     |
O  Update ToS / Privacy   |     |     |     |     |  █  |     |     |
O  Transfer domains       |     |     |     |     |  █  |     |     |
O  Transfer GitHub        |     |     |     |     |  █  |     |     |
O  TM16 (if applicable)   |     |     |     |     |  █  |  ░  |     |
C  B2C customer email     |     |     |     |     |  █  |     |     |
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
O  Stripe → new bank      |     |     |     |     |     |  █  |     |
O  Re-mandate DDs         |     |     |     |     |     |  █  |     |
O  Update SaaS billing    |     |     |     |     |     |  █  |     |
O  First invoice, new Ltd |     |     |     |     |     |  █  |     |
O  Stop trading, old Ltd  |     |     |     |     |     |  █  |     |
--------------------------|-----|-----|-----|-----|-----|-----|-----|-----
W  Close books (old)      |     |     |     |     |     |     |  █  |
W  Settle AP / AR (old)   |     |     |     |     |     |     |  █  |
W  Zero & close old bank  |     |     |     |     |     |     |  █  |
W  Final CT600 (old)      |     |     |     |     |     |     |     |  █
W  Final accounts (old)   |     |     |     |     |     |     |     |  █
W  3-month dormancy wait  |     |     |     |     |     |     |     |  ░░░
W  DS01 filing            |     |     |     |     |     |     |     |     █ (month 4+)
```

## Critical path

The longest chain (from kick-off to "clean") runs through:

1. Incorporate → 1 week
2. Wait for bank account approval → 2–4 weeks (often THE bottleneck)
3. Draft and sign ATA → 2 weeks (in parallel with bank)
4. Send novations → 1 week for dispatch, 2–6 weeks for counter-signature
5. Cut-over → 1 week
6. Wind-down → 1 week
7. Dormancy + DS01 → 4+ months after wind-down

**Honest bottlenecks:**
- **Bank account KYC.** Expect 5–20 business days. Tide, Starling and Revolut are typically fastest; Barclays, HSBC and Lloyds can be 4+ weeks. Apply on Day 1.
- **Novation counter-signatures.** You cannot force a customer's procurement team to respond quickly. Expect 4–8 weeks for enterprise customers, 1 week for SMBs.
- **VAT TOGC confirmation.** HMRC can take 4–6 weeks to confirm a new VAT registration.
- **Trademark assignment.** TM16 takes 2–4 weeks to process.

## Realistic worst case

If everything goes badly:
- Bank takes 4 weeks
- Big customer's procurement team takes 10 weeks
- VAT registration takes 8 weeks
- You wait for TM16 to land

You can absolutely cut over at week 5 without all of these complete — just keep a dual-running period where the old entity still receives money from contracts that haven't yet novated, and sweep to the new entity monthly.

## Key go / no-go gates

| Gate | When | Criteria to pass |
|---|---|---|
| Gate 1 — Incorporate | End Wk1 | Name cleared, bank applied, solicitor engaged |
| Gate 2 — Sign ATA | End Wk3 | Solicitor happy, accountant signed off, all red flags cleared |
| Gate 3 — Cut over | End Wk4 | ATA signed, IP assigned, at least one bank account live |
| Gate 4 — Stop trading old entity | End Wk5 | New Stripe live, first invoice raised from new entity |
| Gate 5 — Begin wind-down | End Wk6 | No active contracts, no cash in old entity |

Do not pass a gate until the criteria are met. Slippage is allowed; skipping is not.
