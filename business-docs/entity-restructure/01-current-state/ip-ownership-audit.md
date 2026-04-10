# IP Ownership Audit

**Purpose:** Identify every piece of intellectual property that the business depends on, and establish **who actually owns it today** (not who "should" own it). The single biggest cause of DD pain in software / EdTech businesses is IP that is informally owned by the founder personally, an ex-freelancer, or a previous entity.

**Rule of thumb for buyers:** if the target company doesn't own (or have an irrevocable licence to) the IP it trades on, the deal either dies or repricing happens.

---

## 1. Registered IP

### 1a. Trademarks

| # | Mark | Classes | Jurisdiction | Owner of record | Registration number | Status | Notes |
|---|---|---|---|---|---|---|---|
| 1 | THE ENGLISH HUB | 9, 16, 41 | UK | `[CURRENT REGISTRANT]` | `[UK00...]` | Registered / Pending / Not filed | |
| 2 | `[LOGO MARK]` | | | | | | |
| 3 | | EUIPO | | | | | |

**Check:** `https://www.gov.uk/search-for-trademark`

If the trademark is not yet registered: flag in risk register. Filing a new UK word mark costs £170 (one class) + £50 per additional class. This is cheap exit insurance — do it.

If the trademark is registered to the **wrong entity** or to a person: it must be assigned via Form TM16 to The English Hub Ltd after incorporation.

### 1b. Patents

| # | Title | Number | Status | Owner of record |
|---|---|---|---|---|
| 1 | | | | |

(Most EdTech SaaS businesses have none. If none, write "None — business does not rely on patents.")

### 1c. Registered designs

| # | Design | Number | Status | Owner of record |
|---|---|---|---|---|

## 2. Unregistered IP (the big one)

### 2a. Code repositories

| # | Repo / location | Hosted on | Organisation owner | Private / public | Primary author(s) | IP assigned by contract? | Notes |
|---|---|---|---|---|---|---|---|
| 1 | english-hub (this repo) | GitHub | `[ORG OR PERSONAL]` | Private | `[FOUNDER + FREELANCERS]` | Yes / No / Partial | |
| 2 | | | | | | | |

**Critical check:** If any code was written by:
- a freelancer (regardless of whether paid),
- a friend "helping out",
- an agency,
- a former co-founder,
- a student or intern,
- yourself **before** the entity existed or while employed elsewhere,

...then UK copyright law says the author owns it **unless** there is a written assignment. A verbal "yeah it's yours mate" is not enough. Fix with the IP Assignment agreement in `04-legal/assignment-of-ip-agreement.md`.

### 2b. Databases

| # | Database | Stored where | Contains | Owner under UK Database Right | Notes |
|---|---|---|---|---|---|
| 1 | Customer / user database | `[PROVIDER]` | names, emails, progress data | The entity that made the substantial investment | GDPR controller should match the trading entity |
| 2 | Content catalogue (courses, lessons, video metadata) | | | | |
| 3 | Learner progress / analytics | | | | |

### 2c. Content — courses, lessons, video, audio, illustrations

This is where EdTech businesses get burned. Go through each significant piece of content and ask: who actually made it?

| # | Content | Format | Made by | Commissioned under what agreement? | IP currently sits with | Action |
|---|---|---|---|---|---|---|
| 1 | Course: B2 Grammar Foundations | Video + workbook | `[FREELANCE TEACHER]` | Verbal / email / written contract | Freelancer until assigned | IP assignment needed |
| 2 | Illustrations for homepage | SVG | `[DESIGNER]` | | | |
| 3 | Background music for lesson videos | Audio | Stock / custom | Licence on file? | | |
| 4 | Voice-over recordings | Audio | | | | |
| 5 | Example sentences / reading passages | Text | | | | |

**Rule:** if the author isn't you and there's no written IP assignment, assume it's not yours until proven otherwise.

### 2d. Brand assets

| # | Asset | Created by | Source files location | Commercial licence? |
|---|---|---|---|---|
| 1 | Logo | | Figma | |
| 2 | Brand typeface | | | Licence terms — per-seat or enterprise? |
| 3 | Marketing imagery | | | |
| 4 | Icon set | | | |

### 2e. Third-party licensed content

Anything you're using under licence (stock photos, fonts, sound effects, AI-generated assets).

| # | Asset | Source | Licence terms | Entity licensed to | Transferable? |
|---|---|---|---|---|---|
| 1 | | Envato / Shutterstock / Adobe | Standard / Extended | | |

**Warning on AI-generated content:** current UK position (as of writing) is that AI-generated outputs have unclear copyright status. If significant product content was generated with an AI tool under a free account, flag it — some providers retain licence over free-tier outputs.

## 3. Domain names

| # | Domain | Registrar | Registrant | Admin contact email | Expiry | Auto-renew? | DNSSEC? |
|---|---|---|---|---|---|---|---|
| 1 | theenglishhub.com | | | | | | |
| 2 | theenglishhub.co.uk | | | | | | |
| 3 | `[typo / defensive domains]` | | | | | | |

**Check:** Some registrars hold domains in the name of whoever signed up, not necessarily the company. WHOIS privacy can obscure this. Log in to each registrar and check the actual registrant.

## 4. Social media handles and usernames

Not strictly IP under UK law but commercially critical. A buyer will want these in the target entity or under the founder with a clean transfer path.

| Platform | Handle | Account email | Linked to which entity | Access |
|---|---|---|---|---|
| Instagram | @`[HANDLE]` | | | |
| TikTok | @`[HANDLE]` | | | |
| YouTube | | | | |
| LinkedIn Company Page | | | | |
| X / Twitter | | | | |
| Facebook Page | | | | |

## 5. Customer / email list

The GDPR-relevant bit. The controller of record for the email list should match the trading entity. If you're moving entities, you need to:
1. Update your privacy policy to name The English Hub Ltd as controller.
2. Update your ICO data protection registration (if registered).
3. Notify users of the change under Articles 13/14 UK GDPR — doable via a routine email.

See also: `06-customer-comms/customer-notification-letter.md`.

## 6. Know-how and trade secrets

Things that are not registered IP but are commercially sensitive:
- Curriculum methodology
- Pricing model
- Customer list
- Supplier pricing
- Internal playbooks

These transfer with the business as part of goodwill in the Asset Transfer Agreement — make sure the ATA covers them explicitly.

---

## Red flag checklist

Tick any that apply — each one is a pre-transfer fix:

- [ ] Code written by freelancer without written IP assignment
- [ ] Content created by founder **before** entity existed
- [ ] Logo designed by a friend / informal arrangement
- [ ] Domain registered in founder's personal name
- [ ] Trademark not yet registered at all
- [ ] Stock content licensed under a personal (not business) account
- [ ] AI-generated content from a free-tier account
- [ ] Customer data controller on privacy policy is wrong entity
- [ ] GitHub org is on a personal account
- [ ] SaaS tools billed to personal card and reimbursed

**Each red flag = one fix task in `03-plan/restructure-plan.md`.**
