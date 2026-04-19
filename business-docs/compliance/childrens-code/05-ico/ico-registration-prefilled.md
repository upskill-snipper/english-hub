# ICO Data Protection Fee Registration — Pre-filled Submission

**To submit:** https://ico.org.uk/for-organisations/data-protection-fee/self-assessment/
**Expected processing time:** immediate on online payment
**Fee:** £52/year (Tier 1 — micro) / £47/year with Direct Debit (£5 discount)
**Cost total:** £47 · **Renewal:** Annual Direct Debit
**Filing time:** ~20 minutes online

---

## 1 · Organisation details

| Field | Pre-filled answer |
|---|---|
| Organisation name (as registered) | **Upskill Energy Limited** |
| Trading name (if different) | The English Hub |
| Companies House number | **16511479** |
| Country of registration | England & Wales |
| Is the organisation based in the UK? | Yes |
| Registered office address | 110 Harington Road, Formby, Liverpool, England, L37 1PZ |
| Trading address (if different) | _[Same as registered office unless you have a separate trading premises]_ |
| Organisation type | Private limited company (by shares) |
| Sector | Education / Educational Technology |
| Is this organisation a public authority? | No |
| Does this organisation process personal data on behalf of others (a data processor)? | Yes — on behalf of schools (under DPAs) |

---

## 2 · Tier self-assessment

**Select Tier 1 — Micro organisation.**

Qualifying criteria (tick any one):

- ☑ Turnover of £632,000 or less in the financial year; OR
- ☑ 10 or fewer members of staff

> The English Hub satisfies both criteria as of April 2026. Revenue <£50k and no employees beyond the founder. Tier 1 is correct.

**Fee:** £52/year full price · **£47/year with Direct Debit.**

If either threshold is exceeded in a future year, upgrade to Tier 2 (SME, £78/year) at next renewal — the ICO does not require in-year reassessment unless you materially grow.

---

## 3 · Contact details for the ICO register

| Field | Pre-filled answer |
|---|---|
| Primary contact name | _[FOUNDER NAME]_ |
| Role | Director |
| Telephone | _[FOUNDER PHONE — for ICO internal use only, not published]_ |
| Email | **dpo@theenglishhub.app** — **create this alias before filing if not already live** |
| DPO appointed? | Not legally required for Tier 1 but recommended. Answer: "We have designated a data protection contact (dpo@theenglishhub.app). A formal DPO is under review as the organisation scales." |

---

## 4 · Processing activities declared

The ICO asks you to identify the categories of personal data processed and the purposes. Paste the following as your answer:

> **Purpose of processing:** operating an online education platform for GCSE and IGCSE English revision, including AI-supported essay feedback, progress tracking, and subscription payments.
>
> **Data subjects:** students (typically aged 14–18), parents/guardians, teachers, school staff, subscribers.
>
> **Categories of personal data:** name, email, school name, year group, exam board, essay submissions, progress data, payment information (processed by Stripe), cookies and device identifiers.
>
> **Special category data:** none knowingly processed. Where submitted essays reference the writer's protected characteristics, the data is minimised and the processing is incidental.
>
> **Disclosure recipients:** Stripe (payments), Anthropic / OpenAI (AI essay marking — UK/EU residency where offered), Supabase (data hosting, UK region), Vercel (application hosting), Cloudflare (CDN), SendGrid (transactional email), Sentry (error monitoring), PostHog (product analytics).
>
> **International transfers:** to the United States for AI model processing and analytics. Covered by the UK International Data Transfer Agreement (IDTA) or Standard Contractual Clauses with each sub-processor, supplemented by Transfer Impact Assessments.
>
> **Retention:** user account data retained for the duration of the subscription plus 7 years (accounting retention). Anonymised essay data retained for product improvement subject to opt-out.

---

## 5 · Payment

- **Preferred payment method:** Direct Debit (£47/year · saves £5)
- **Bank account:** Upskill Energy Limited business current account (fill at payment screen)
- **Next renewal:** 12 months from first payment date

---

## 6 · Post-registration to-do

Once the ICO registration number (format `ZC016690`) is issued:

1. **Update privacy policy** — add the registration number prominently at the top. File: `data-room/03-privacy/privacy-policy.md`.
2. **Add registration number to the site footer** site-wide. File: `src/components/layout/Footer.tsx` (or equivalent).
3. **Update `/for-schools` compliance block** to display "ICO Registered: ZC016690".
4. **Add to `dd-07-compliance.md`** DD evidence pack.
5. **Calendar the renewal** — 11 months from today.

---

## 7 · Required evidence on hand before filing

- [ ] Companies House number: **16511479** — confirmed
- [ ] Registered office address — retrieve from Companies House if not known
- [ ] Revenue for most recent financial year (for tier confirmation) — should be <£632k
- [ ] Business bank account details for Direct Debit setup
- [ ] Primary contact name, email (`dpo@theenglishhub.app`), phone

**Total time to file: 20 minutes.**
**Total cost: £47.**
