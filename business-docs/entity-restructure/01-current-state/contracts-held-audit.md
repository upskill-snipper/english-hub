# Contracts Held Audit

**Purpose:** Find every contract where Upskill Energy Ltd is the named counterparty. Each one will either (a) be novated to The English Hub Ltd, (b) be terminated and re-signed with the new entity, or (c) be left in place and allowed to expire in the old entity. Missing a contract at this stage causes post-completion firefighting.

**How to use:**
1. Search your email for "Upskill Energy" — every hit is a candidate.
2. Check all SaaS billing portals (they usually show the registered company name).
3. Check bank statements for recurring payees and trace them back to a contract.
4. Check signed PDFs in Google Drive / Dropbox / filing cabinet.
5. Fill in the tables below.
6. Flag each row with a transfer method.

---

## Legend — Transfer method

| Code | Meaning |
|---|---|
| **NOV** | Novate via signed novation letter (tripartite: old entity, new entity, counterparty) |
| **A&N** | Assign (with counterparty consent if contract requires it) |
| **R&R** | Terminate old contract, raise new contract with new entity |
| **EXP** | Let expire naturally in old entity; do not transfer |
| **???** | Not yet decided — flag in weekly review |

---

## 1. Customer contracts

### 1a. B2B customers with signed agreements

| # | Customer | Contract name | Signed date | End date | Annual value | Auto-renew? | Change-of-control clause? | Transfer method | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `[CUSTOMER]` | MSA + Order Form | `[DATE]` | `[DATE]` | £`[AMOUNT]` | Yes / No | Yes / No | NOV / A&N / R&R | |
| 2 | | | | | | | | | |

### 1b. B2C customers (self-serve, no signed contract)

These are governed by the website Terms of Service only. Transfer is achieved by:
1. Updating the Terms of Service to name The English Hub Ltd.
2. Notifying active subscribers by email (see `06-customer-comms/customer-notification-letter.md`).
3. Re-accepting the new ToS on next login (or via a banner).

| Item | Value |
|---|---|
| Total active subscribers | `[N]` |
| MRR | £`[AMOUNT]` |
| ToS last updated | `[DATE]` |
| Where ToS is hosted | `[URL]` |

### 1c. School / institutional / exam centre contracts

| # | Institution | Contract type | Signed date | Value | Contact | Transfer method | Notes |
|---|---|---|---|---|---|---|---|
| 1 | `[SCHOOL]` | | | | | | |

## 2. Supplier / vendor contracts

### 2a. SaaS subscriptions (annual)

| # | Tool | Registered company | Plan | Annual cost | Renewal date | Transfer method | Notes |
|---|---|---|---|---|---|---|---|
| 1 | Google Workspace | Upskill Energy Ltd | | £ | | R&R | Easiest to create new workspace |
| 2 | Stripe | Upskill Energy Ltd | | — | — | R&R | See `07-banking/stripe-account-migration.md` |
| 3 | Xero / QuickBooks | Upskill Energy Ltd | | £ | | R&R | New org / file for new entity |
| 4 | AWS / Vercel / hosting | | | £ | | NOV or R&R | |
| 5 | Cloudflare | | | £ | | NOV | |
| 6 | Mailchimp / ESP | | | £ | | R&R | |
| 7 | Canva | | | £ | | | |
| 8 | Loom | | | £ | | | |
| 9 | Notion | | | £ | | | |
| 10 | Figma | | | £ | | | |
| 11 | GitHub | | | £ | | | |
| ... | | | | | | | |

### 2b. SaaS subscriptions (monthly)

Same table structure — fill in.

### 2c. Freelancer / contractor agreements

| # | Name | Role | Daily / hourly rate | Contract on file? | IR35 assessment? | IP assignment clause? | Transfer method | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | |

**Important:** If a freelancer has produced any copyrighted work (code, content, video, illustrations), check whether the contract contains a proper IP assignment clause. If not, you need a supplementary IP assignment before transfer — see `04-legal/assignment-of-ip-agreement.md`.

## 3. Property and lease

| # | Type | Address | Landlord | Annual rent | Term end | Assignment allowed? | Transfer method |
|---|---|---|---|---|---|---|---|
| 1 | Office lease | | | | | | |
| 2 | Serviced office / co-working | | | | | | |
| 3 | Storage | | | | | | |

If none: **"No property leases. Founder works from home."**

## 4. Employment contracts

**See:** `04-legal/employment-transfer-tupe.md`.

| # | Employee | Start date | Contract on file? | TUPE applies? | Transfer method |
|---|---|---|---|---|---|
| 1 | | | | | |

## 5. Loans, finance agreements, grants

| # | Type | Lender / grantor | Outstanding balance | Change-of-control clause? | Transfer method |
|---|---|---|---|---|---|
| 1 | Director loan | | | N/A | Settle or assign |
| 2 | Bank overdraft | | | | |
| 3 | Innovate UK / grant | | | Usually non-transferable — check | |
| 4 | Tide / Capital on Tap business credit | | | | |

**Warning:** Grants are often non-transferable. If the entity holds a grant that is tied to the old company name, you may need to either (a) keep that grant running in the old entity until it ends, or (b) request a novation from the grantor (which usually means a full re-application).

## 6. Insurance policies

| # | Policy | Insurer | Covered entity | Renewal | Transfer method |
|---|---|---|---|---|---|
| 1 | Professional Indemnity | | | | R&R or endorsement |
| 2 | Public Liability | | | | |
| 3 | Cyber | | | | |
| 4 | Employer's Liability | | | | |
| 5 | Directors & Officers | | | | |

## 7. Domain registrations and hosting

**See also:** `ip-ownership-audit.md` (there is overlap).

| # | Domain | Registrar | Registrant name | Expiry | Transfer method |
|---|---|---|---|---|---|
| 1 | theenglishhub.com | | Upskill Energy Ltd | | Update registrant |

## 8. Third-party platform accounts

| # | Platform | Registered to | Value / purpose | Transfer method |
|---|---|---|---|---|
| 1 | Apple App Store | | | R&R — Apple does not allow account transfer easily |
| 2 | Google Play | | | R&R |
| 3 | Facebook Business / Meta | | | |
| 4 | LinkedIn Company Page | | | |
| 5 | Google Ads | | | |

## 9. Non-contractual commercial relationships worth tracking

Things like affiliates, referral partners, podcast sponsorships, etc. — not formal contracts but still worth noting.

---

**Completion sign-off:**
- [ ] Every recurring bank debit traced to a source contract
- [ ] Every email sender with "billing" or "invoice" in the address traced
- [ ] Every SaaS tool in the stack listed
- [ ] Transfer method assigned to every row
- [ ] Reviewed with solicitor
- [ ] Reviewed with accountant
