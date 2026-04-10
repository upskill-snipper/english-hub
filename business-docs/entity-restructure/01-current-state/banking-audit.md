# Banking Audit

**Purpose:** Map every financial rail that currently touches Upskill Energy Ltd. Every account on this list will either be closed, migrated or kept open during a transition period.

---

## 1. Current business bank accounts

| # | Provider | Account type | Account name | Sort code | Account number | Opened | Last balance | Purpose |
|---|---|---|---|---|---|---|---|---|
| 1 | `[BANK]` | Current | Upskill Energy Ltd | `[XX-XX-XX]` | `[XXXXXXXX]` | `[DATE]` | £`[AMOUNT]` | Main operating |
| 2 | | Savings / deposit | | | | | £ | Reserves |
| 3 | | USD / EUR | | | | | | FX |

**Action per row:**
- Close after full cut-over (typically 30–60 days after new account is live).
- Do not close until every direct debit has been re-pointed and every customer has paid into the new account at least once.

## 2. Business cards

| # | Provider | Card type | Name on card | Linked to which account | Credit limit | Outstanding balance |
|---|---|---|---|---|---|---|
| 1 | | Debit | | | | |
| 2 | | Credit | | | | |
| 3 | `[TIDE / CAP ON TAP / AMEX]` | Credit | | | £ | £ |

## 3. Payment processors

| # | Provider | Registered name | Merchant ID | Payout bank | MRR processed | Payout schedule | Notes |
|---|---|---|---|---|---|---|---|
| 1 | Stripe | Upskill Energy Ltd | `[acct_...]` | `[BANK]` | £`[AMOUNT]` | | See `07-banking/stripe-account-migration.md` |
| 2 | PayPal | | | | | | |
| 3 | GoCardless (DD) | | | | | | |
| 4 | Apple App Store | | | | | | Apple Developer account — tricky to transfer |
| 5 | Google Play | | | | | | |
| 6 | Revolut Business | | | | | | |

## 4. Pending DD mandates (money leaving)

Everything debited automatically. Get these from the last 3 months of bank statements.

| # | Payee | Monthly / annual | Amount | Linked SaaS / supplier | Will it break on account close? |
|---|---|---|---|---|---|
| 1 | | | £ | | Yes / No |

**Critical:** closing a bank account with live direct debits causes failed payments and broken services. Always set up the new account first, re-mandate, and only then close.

## 5. Standing orders (money leaving at a fixed schedule)

| # | Payee | Frequency | Amount | Purpose |
|---|---|---|---|---|
| 1 | | | £ | |

## 6. Regular inbound payments

Top 10 sources of inbound money, so you know who to notify first.

| # | Source | Monthly value | Payment method | Notes |
|---|---|---|---|---|
| 1 | Stripe payouts | £ | SEPA / BACS | Depends on processor migration |
| 2 | | | | |

## 7. Overdrafts and facilities

| # | Facility | Provider | Limit | Used | Secured on? | Personal guarantee? |
|---|---|---|---|---|---|---|
| 1 | | | £ | £ | | |

**Flag:** any personal guarantees given by the founder should be reviewed before closing the entity. Giving notice to a PG'd facility is not the same as paying it off.

## 8. Accounting software cash coding

| # | Tool | Feed live? | Last reconciled | Notes |
|---|---|---|---|---|
| 1 | Xero / QuickBooks | Yes / No | `[DATE]` | |

## 9. HMRC payments

| # | Payment type | How paid | From which account |
|---|---|---|---|
| 1 | Corporation Tax | | |
| 2 | VAT | | |
| 3 | PAYE / NI | | |

These will need re-pointing to the new entity's HMRC references and bank account on cut-over.

---

**Sign-off:**
- [ ] Every inbound payment source identified
- [ ] Every outbound DD / SO identified
- [ ] Every payment processor listed
- [ ] PGs and facilities reviewed
- [ ] Reviewed by bookkeeper / accountant
