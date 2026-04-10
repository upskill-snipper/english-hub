# Cap Table — Structure & Guidance

> **TEMPLATE ONLY — NOT LEGAL OR TAX ADVICE.** This document explains the structure of the accompanying `cap-table-template.csv` for The English Hub Ltd. Have your solicitor and accountant review any real cap table before circulating externally.

## Purpose

The cap table is the single source of truth for who owns what in the company. It must always reconcile to:

1. Companies House filings (SH01 / confirmation statement).
2. Share certificates issued.
3. Board and shareholder resolutions approving issues, transfers, or buy-backs.
4. The company's statutory register of members (and, where relevant, the PSC register).

If any of the above disagree with the cap table, the cap table is wrong — fix it.

## CSV column definitions

The accompanying CSV (`cap-table-template.csv`) has the following columns:

| Column | Description |
|---|---|
| **Shareholder** | Legal name of the holder (individual or entity). Match exactly to Companies House. |
| **Class** | Share class — e.g. Ordinary, Founder Ordinary, Seed Preferred, Growth Ordinary, Deferred, Non-voting. |
| **Number of shares** | Integer count of shares held in that class. |
| **% holding** | (Shares in class ÷ total issued shares) × 100. Issued-basis, ignores options. |
| **Fully diluted %** | As if all options, warrants, SAFEs, ASAs, and convertibles have converted or been exercised. |
| **Acquisition cost** | Total price paid in £. For founders at incorporation this may be £0.00 or nominal (e.g. £0.0001 × 1,000 = £0.10). |
| **Acquisition date** | Date the shares were issued or transferred to this holder. |

## Share classes (suggested structure for a UK seed-stage company)

- **Ordinary shares (£0.0001 or £0.01 nominal)** — held by founders and early employees.
- **Seed Preferred shares** — issued to investors at a priced seed round. Typically carry a 1× non-participating preference, anti-dilution, and limited consent rights.
- **Growth / Series A Preferred** — later round, often stacked on top of Seed.
- **Deferred shares** — occasionally used on leaver provisions; usually non-voting, non-economic.

Only create a new class when there is a genuine economic or voting difference — additional classes add complexity and cost.

## Best practice

1. **Re-run the cap table after every transaction.** Issue, transfer, buy-back, option grant, exercise, or lapse.
2. **Keep a dated version history.** Snapshot the CSV on funding rounds and at year end.
3. **Reconcile to Companies House monthly.** File SH01 within 30 days of any allotment.
4. **Track both issued and fully diluted percentages.** Investors care about dilution, not just today's split.
5. **Use a cap table tool for anything beyond a few shareholders.** A CSV is fine for a seed-stage company but gets fragile quickly — migrate to a proper tool (e.g. Capdesk, Ledgy, Carta) when the pool gets complex.
6. **Do not issue shares without board approval and valid consideration.** In the UK, shares must be paid up or allotted at a nominal value.

## Placeholder data to replace

In the CSV, you will see:

- `REPLACE WITH FOUNDER NAME` — swap for each founder's legal name.
- `REPLACE WITH EMPLOYEE NAME` — for EMI / option holders (options sit in the option pool CSV, not the cap table).
- `REPLACE WITH INVESTOR NAME` — for any cash investor, angel, or fund.
- `REPLACE WITH EIS/SEIS COMPLIANT?` — track EIS / SEIS eligibility per investor since it affects what you can do in later rounds.

## Version

Template version: 1.0.
Last updated: REPLACE WITH DATE.
