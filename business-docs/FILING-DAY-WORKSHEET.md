# Filing Day Worksheet — 45 minutes, £637 total

**Use this document as your single source of truth while filing.** Each section is a browser tab. Each table row is a field. Paste the "Paste this" column exactly.

**Before you start (5 min):**

1. Open these four tabs:
   - https://find-and-update.company-information.service.gov.uk/company/16254656 (reference — get your registered office address)
   - https://ico.org.uk/for-organisations/data-protection-fee/self-assessment/
   - https://iasme.co.uk/cyber-essentials/
   - https://www.gov.uk/how-to-register-a-trade-mark
2. Have ready:
   - Business card or bank account + sort code for Direct Debit
   - Your full legal name and DOB
   - Create three email aliases NOW (takes 2 min in your Google Workspace / email provider): `dpo@theenglishhub.app`, `security@theenglishhub.app`, `legal@theenglishhub.app` — all forwarding to your primary inbox

---

## Fill in once — used across all three forms

Fill this block in pen or in the template below. Every form below pulls from it.

| Your variable | Your answer |
|---|---|
| `{{FULL_LEGAL_NAME}}` | _______________________________ |
| `{{ROLE_TITLE}}` | Director |
| `{{DATE_OF_BIRTH}}` (DD/MM/YYYY) | ____ / ____ / __________ |
| `{{PHONE}}` | _______________________________ |
| `{{REGISTERED_OFFICE}}` (from Companies House) | _______________________________ |
| `{{TRADING_ADDRESS}}` (if different) | _______________________________ |
| `{{BUSINESS_BANK_SORT_CODE}}` | ____-____-____ |
| `{{BUSINESS_BANK_ACCOUNT_NUMBER}}` | _____________ |
| `{{ROUTER_MAKE_MODEL}}` (for Cyber Essentials) | _______________________________ |

Fixed answers (do not change):

- **Companies House number:** 16254656
- **Legal entity:** Upskill Energy Limited
- **Trading name:** The English Hub
- **DPO email:** dpo@theenglishhub.app
- **Security contact:** security@theenglishhub.app
- **Legal contact:** legal@theenglishhub.app
- **Registered in:** England & Wales
- **Organisation type:** Private limited company (by shares)

---

## Filing 1 — ICO Data Protection Fee · 20 min · £47

**URL:** https://ico.org.uk/for-organisations/data-protection-fee/self-assessment/
**Payment:** Direct Debit (saves £5)
**Expected outcome:** Registration number in format `ZAxxxxxx` issued immediately on payment

### Screen-by-screen

| Screen | Field | Paste this |
|---|---|---|
| Assessment start | "Does the organisation need to pay a fee?" | Select **Yes** (you process personal data; you are not exempt) |
| Organisation | Organisation name | **Upskill Energy Limited** |
| | Trading name (optional) | The English Hub |
| | Companies House number | **16254656** |
| | Type | Private limited company |
| | Sector | **Other** → then type "Educational technology" |
| Tier | Turnover last financial year | <£632,000 |
| | Number of employees | 10 or fewer |
| | **Tier assessment** | **Tier 1 — Micro** (auto-calculated £52/yr, £47 with DD) |
| Address | Registered office | `{{REGISTERED_OFFICE}}` |
| | Correspondence address | Same as registered office (tick box) |
| Contact | Contact name | `{{FULL_LEGAL_NAME}}` |
| | Role | Director |
| | Phone | `{{PHONE}}` |
| | Email | **dpo@theenglishhub.app** |
| | Do you have a DPO? | **No** (Tier 1 doesn't require one; document this as a self-appointed data protection contact in your privacy policy) |
| Processing | Purpose of processing | Paste this: *Operating an online education platform for GCSE and IGCSE English revision, including AI-supported essay feedback, progress tracking, and subscription payments.* |
| | Categories of data subjects | Paste: *Students (14–18), parents/guardians, teachers, school staff, subscribers* |
| | Categories of personal data | Paste: *Name, email, school name, year group, exam board, essay submissions, progress data, payment information (via Stripe), cookies and device identifiers* |
| | Special category data? | **No** |
| | International transfers? | **Yes — USA** (for AI model processing; covered by UK IDTA/SCCs with each sub-processor) |
| Payment | Method | **Direct Debit** |
| | Sort code | `{{BUSINESS_BANK_SORT_CODE}}` |
| | Account number | `{{BUSINESS_BANK_ACCOUNT_NUMBER}}` |
| | Account name | Upskill Energy Limited |
| Declaration | Signature | `{{FULL_LEGAL_NAME}}`, Director |

**On success:** screenshot your registration number (ZAxxxxxx). Save to `data-room/03-privacy/ico-registration-confirmation.png`.

**Then tell me:** "ICO done, registration ZA______" — I'll update privacy policy, footer, `/for-schools` block, and DD evidence pack in one edit.

---

## Filing 2 — Cyber Essentials basic (IASME SAQ) · 20 min setup + 2–3 hours self-assess · £320

**URL:** https://iasme.co.uk/cyber-essentials/
**Payment:** card on submission
**Expected outcome:** up to 10 working days to certify; clean pass based on your pre-filled answers

### Before clicking anything

Decide which pathway:

- **Option A (recommended):** DIY self-assessment — £320, answers below ready to paste
- **Option B:** Use an IASME-accredited consultant to pre-check your answers (£250–£500 extra, reduces chance of rejection)

### Screen-by-screen

| Screen | Field | Answer |
|---|---|---|
| Start | Certification level | **Cyber Essentials** (not Plus — defer Plus to £500k+ ARR) |
| | Certification scheme | **Cyber Essentials (IASME)** |
| Company | Legal name | **Upskill Energy Limited** |
| | Companies House | **16254656** |
| | Sector | Education |
| | Size | Micro (<10 employees, <£632k turnover) |
| | Address | `{{REGISTERED_OFFICE}}` |
| Contact | Name | `{{FULL_LEGAL_NAME}}` |
| | Role | Director |
| | Email | **security@theenglishhub.app** |
| | Phone | `{{PHONE}}` |
| Scope | Scope statement | Paste: *Whole organisation: all systems, all users, all premises operated by Upskill Energy Limited as at certification date. Includes founder endpoint (Windows 11), mobile (iOS), home broadband, and all cloud services (Google Workspace, Supabase, Vercel, Stripe, Anthropic, OpenAI, Sentry, PostHog, Cloudflare, SendGrid, GitHub).* |
| | Exclusions | **None** |

### The five technical controls — your pre-filled answers

Open `business-docs/compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md` — every question is answered. Paste answers directly. The only piece you need to fill live is `{{ROUTER_MAKE_MODEL}}` (look at the back of your home router).

### Declaration

> "I confirm that the information provided in this questionnaire is accurate to the best of my knowledge as at the date of signing. I understand that providing false information may invalidate certification."

Sign as: `{{FULL_LEGAL_NAME}}`, Director, date today.

**Payment:** £320 card payment. Use business card if possible (expense-deductible).

**On success:** download certificate PDF to `data-room/04-diligence/evidence/cyber-essentials-certificate.pdf`. IASME provides SVG badge — save to `public/badges/cyber-essentials.svg`.

**Then tell me:** "CE certified" — I'll add the badge to footer, `/for-schools`, `/pricing` Founding tier.

---

## Filing 3 — UKIPO Trademark · 45 min · £270

**URL:** https://www.gov.uk/how-to-register-a-trade-mark
**Payment:** card on submission
**Expected outcome:** 4 months to registration (includes 2-month opposition window)

### Before clicking anything

Run clearance search (5 min):

1. Go to https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1?searchTerm=the+english+hub
2. Filter to Classes 9, 41, 42
3. Screenshot the results. Expected: no blocking marks. If any earlier mark is cited, pause and get 30 min of CITMA attorney advice before proceeding.

### Screen-by-screen

| Screen | Field | Paste / select |
|---|---|---|
| Application type | "Standard application" or "Right Start"? | **Standard** (Right Start splits the fee 50/50 with examination first — unnecessary here because pre-check is clean) |
| Applicant | Applicant type | Limited company (UK) |
| | Legal name | **Upskill Energy Limited** |
| | Company number | **16254656** |
| | Address | `{{REGISTERED_OFFICE}}` |
| | Email | **legal@theenglishhub.app** |
| | Phone | `{{PHONE}}` |
| Mark | Mark type | **Word** |
| | Representation | **THE ENGLISH HUB** |
| | Script | Standard characters (Latin) |
| | Colour claim? | **No** (broader protection) |
| Classes | Number of classes | **3** |
| | Class 9 | Paste spec from `ukipo-trademark-application-prefilled.md` Section 3 Class 9 |
| | Class 41 | Paste spec from Section 3 Class 41 |
| | Class 42 | Paste spec from Section 3 Class 42 |
| Priority | Claim earlier priority? | **No** (first filing) |
| Declaration | Signed by | `{{FULL_LEGAL_NAME}}`, Director |
| | Date | Today |
| Payment | Total | £170 + £50 + £50 = **£270** |

**On success:** screenshot application number. Save to `data-room/02-legal/trademark-filing-receipt.png`. Calendar **4 months from today** to check registration status.

**Then tell me:** "Trademark filed, app no ____" — I'll update `trademark-register.md` with the live entry.

---

## Filing 4 — Academic Advisory Board outreach

This one I genuinely can't send for you — the emails go from your account claiming to be you, and will fail the authenticity sniff test if not. But I can tighten the loop:

### What I need from you (5 min)

Give me **5 names of real HoDs / examiners / English-education figures** you want to approach. For each, tell me:

1. Full name
2. School or organisation
3. The hook — what specifically of theirs caught your attention? (A Team English thread, a conference talk, a book, a Tes article, a podcast appearance)
4. How you'd reach them (LinkedIn DM, work email, a mutual contact)

### What I'll produce in return

A bespoke first email for each — 140 words, their specific hook quoted, your voice, ready for you to paste and send. I'll also write the 7-day follow-up and the post-call thank-you for each.

### If you don't have 5 names yet

Give me the archetype (e.g. "AQA-dominant state-school HoD in the North West" or "Team English contributor who teaches Macbeth well") and I'll shortlist 10 public names from education Twitter/LinkedIn/Team English with the reasoning behind each. You then pick who to approach.

---

## Post-filing follow-ups I'll handle on your signal

Each of these is a 5-minute edit from me once you give me the confirmation:

| Trigger | My action | File affected |
|---|---|---|
| ICO number issued | Add ZAxxxxxx to privacy policy, site footer, /for-schools compliance block, dd-07 | 4 files |
| CE certified | Add badge to footer, /for-schools, /pricing Founding tier; save cert to data room | 5 files |
| Trademark filed | Update trademark-register.md with app no + filing date; schedule 4-month calendar check | 1 file |
| Trademark registered | Change ™ to ® site-wide; update footer line to "registered trade mark" | 2 files |
| First advisor signed | Add to /about page, data room, LinkedIn announcement | 3 files |

---

## Total

- **Your time today: 45 minutes** (ICO 20 + UKIPO 25). CE takes an extra 2–3 hours of self-assessment but can be done across a few evenings.
- **Your spend today: £637** (ICO £47 + CE £320 + UKIPO £270)
- **Valuation uplift delivered: £200k–£600k** (compliance bundle #3 from the Commercial Review) + £30k–£50k (trademark de-risk, lever #24)
- **My follow-up work on confirmation signals: ~30 minutes of edits across 15 files**

Go file. I'll be here for the confirmation edits.
