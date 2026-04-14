# DPIA — Processing Children's Personal Data

**Upskill Energy Limited t/a The English Hub**
**Assessment against the UK Children's Code (Age Appropriate Design Code)**
**DPIA ID:** EH-DPIA-0001
**Date:** 2026-04-12
**Status:** DRAFT — review required before launch
**Author:** `[REPLACE WITH name]`
**DPO review:** `[REPLACE WITH name]`

> This DPIA covers The English Hub's end-to-end processing of children's personal data as an online GCSE English learning platform. It is required both by Article 35 UK GDPR and by ICO guidance on services likely to be accessed by children. It incorporates an assessment against each of the **15 standards** of the Children's Code.

---

## 1. Describe the processing

### 1.1 Summary

The English Hub is a UK-based SaaS platform that helps students aged 13–16 prepare for GCSE English Language and English Literature exams. Students log in, practise essay writing and comprehension, and receive AI-assisted feedback reviewed by teachers. The service is used by individual students, families, and schools.

### 1.2 Nature, scope, context, purpose

| Item | Detail |
|---|---|
| **Nature** | Web and mobile online service; stores student writing; generates AI feedback; tracks progress; shows results to teachers |
| **Scope** | UK and EU students aged primarily 13–16; estimated `[REPLACE WITH projected user count]` users by end of year 1 |
| **Context** | Education; children are a vulnerable group under UK GDPR; schools as institutional controllers |
| **Purpose** | Improve student outcomes in GCSE English; support teacher workload; give learners personalised feedback |

### 1.3 Data categories

- Account data (name, email, school, year, DOB, exam board)
- Learning content (student essays, quiz answers)
- AI-generated feedback
- Performance data
- Technical data (IP, device, browser)
- Parental consent records (under-13s only)

### 1.4 Data flows

1. **Student** creates an account (or is provisioned by a school/parent).
2. **Authentication** handled via Supabase Auth or SSO.
3. **Learning content** is displayed from our CDN.
4. **Student work** is stored in the database (EU region).
5. **AI provider** receives student writing via a secure API call under a no-training agreement; response is stored as feedback.
6. **Teacher dashboard** shows progress scoped to their class.
7. **Parent dashboard** (optional) shows summaries for parent-managed accounts.
8. **Analytics** collects pseudonymised feature-use data (children's behavioural analytics are **off by default**).

### 1.5 Lawful basis

| Purpose | Basis |
|---|---|
| Providing the service | Contract (Art 6(1)(b)) or Parental consent (Art 8) for under-13s |
| Security | Legitimate interest (Art 6(1)(f)) |
| Analytics (adults + aggregates) | Legitimate interest (children excluded by default) |
| Marketing | Consent (adults only) |

---

## 2. Consultation

| Stakeholder | Consulted? | Summary |
|---|---|---|
| DPO | Yes | Full review; approved with conditions |
| Engineering | Yes | Privacy-by-design reviewed |
| Teachers (pilot) | Pending | Usability + data concerns; no concerns raised about scope |
| Students (pilot) | Pending | Youth advisory feedback captured on tone, controls |
| Parents (pilot) | Pending | Feedback on consent flow and controls |
| ICO | Not consulted (no residual high risk identified; re-evaluate before Art 36 if this changes) | — |
| External counsel | Pending | `[REPLACE WITH outcome when consulted]` |

---

## 3. Assessment against the 15 Children's Code Standards

### Standard 1 — Best interests of the child

> The best interests of the child should be a primary consideration when designing and developing online services likely to be accessed by a child.

**Assessment:**
The service is *designed* for children. Every product and data decision is reviewed against the question: "Does this serve the child's best interests in learning English and in developing as a person?" We do not monetise attention or personal data; the product is paid for by subscribers, not advertisers. A Children's Impact Questionnaire is required for any feature that affects under-18s.

**Evidence:**
- Product review checklist `[REPLACE WITH link]`
- Youth advisory panel `[REPLACE WITH structure]`
- No behavioural advertising, ever

**Status:** Compliant

---

### Standard 2 — Data Protection Impact Assessments

> Undertake a DPIA to assess and mitigate risks to children.

**Assessment:** This document.

**Evidence:** This DPIA + product-level DPIAs for new features.

**Status:** Compliant (ongoing — DPIAs required for each new feature touching children's data)

---

### Standard 3 — Age-appropriate application

> Take a risk-based approach to recognising the age of individual users and ensure you effectively apply the standards in this code to child users.

**Assessment:**
We apply a layered approach (see `age-verification-approach.md`):

- **Self-declaration at signup** (date of birth) with format validation and abuse detection.
- **School-provisioned accounts** where the school warrants the student's identity.
- **Parent-provisioned accounts** with parental consent verification.
- **Behavioural signals** (e.g., stated year group consistency) inform risk triage.

All users under 18 are treated as children. Standards apply by default to all accounts, with adult-only exceptions (marketing emails, etc.) applied after positive adult signals.

**Evidence:** `age-verification-approach.md`

**Status:** Compliant

---

### Standard 4 — Transparency

> Privacy information, community standards, terms and policies must be concise, prominent and in clear language suited to the age of the child.

**Assessment:**
- `childrens-privacy-notice.md` is written for 13–16 year olds in plain English, ~1200 words, with clear headings and no legalese.
- "Just in time" in-product explanations when collecting any new data.
- Icons and short explanations accompany each data input.
- Video walkthrough of privacy controls is available in the product.

**Evidence:** `childrens-privacy-notice.md`; in-product screenshots `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 5 — Detrimental use of data

> Do not use children's personal data in ways that have been shown to be detrimental to their wellbeing, or that go against industry codes of practice, other regulatory provisions or Government advice.

**Assessment:**
- No behavioural advertising.
- No addiction-style engagement mechanics (no streaks with guilt-tripping, no loss aversion notifications, no infinite scroll in child-facing views).
- No sharing with data brokers.
- No use of student work to train AI models.
- No A/B tests that manipulate children into unhealthy patterns.
- Engagement design is reviewed against the ICO's detrimental use guidance and the 5Rights Foundation framework.

**Evidence:** Product decisions log `[REPLACE WITH link]`; AI provider DPA with no-training clause.

**Status:** Compliant

---

### Standard 6 — Policies and community standards

> Uphold your own published terms, policies and community standards.

**Assessment:**
- Terms, privacy policy, acceptable use, and safeguarding policy are published and enforced.
- We maintain internal escalation procedures when users report concerns.
- Teachers can flag concerns via the in-product report system.

**Evidence:** `privacy-policy.md`, `terms-of-service.md`, `safeguarding-policy.md`, acceptable use policy `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 7 — Default settings

> Settings must be high privacy by default (unless you can demonstrate a compelling reason for a different default, taking account of the best interests of the child).

**Assessment:** All settings are set to the most privacy-protective option by default for child accounts. Specifically:

- No profile visibility to other students.
- No personalised recommendations based on behavioural analytics.
- No location collection.
- No marketing.
- No third-party embeds on child-facing pages.
- No persistent user IDs in analytics.
- Feedback sharing (to teacher) opt-in where the account is not teacher-provisioned.

**Evidence:** Settings matrix `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 8 — Data minimisation

> Collect and retain only the minimum amount of personal data you need to provide the elements of your service in which a child is actively and knowingly engaged.

**Assessment:**
- Mandatory fields at signup: name, email, year group, exam board, DOB.
- Optional: avatar, preferred name, target grade.
- **Not collected:** phone number, postal address, location, gender, ethnicity, photos beyond optional avatar.
- Learning data is retained only as long as it supports the student's learning or progress review, then anonymised (see retention schedule).

**Evidence:** `data-retention-schedule.md`, signup form review `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 9 — Data sharing

> Do not disclose children's data unless you can show a compelling reason to do so, taking account of the best interests of the child.

**Assessment:**
- Sharing is limited to:
  - Teachers at the student's school (within their class scope only)
  - Parents/guardians (where managing the account)
  - Subprocessors under Art 28 DPAs, all vetted
  - Statutory authorities where legally required
- No sharing with advertisers, data brokers, or third-party research.
- Student work is **never** used to train AI models.

**Evidence:** `subprocessor-register.csv`, RBAC model `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 10 — Geolocation

> Switch geolocation options off by default (unless you can demonstrate a compelling reason for geolocation to be switched on by default, taking account of the best interests of the child). Provide an obvious sign for children when location tracking is active. Options which make a child's location visible to others must default back to "off" at the end of each session.

**Assessment:**
- We do **not** collect precise geolocation.
- Coarse location is inferred only from IP address, solely for abuse detection and regional content delivery; it is never displayed, stored long-term, or shared with third parties beyond what Cloudflare processes for security.
- No child-visible or third-party-visible location features.

**Evidence:** Network architecture doc `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 11 — Parental controls

> If you provide parental controls, give the child age-appropriate information about this. If your online service allows a parent or carer to monitor their child's online activity or track their location, provide an obvious sign to the child when they are being monitored.

**Assessment:**
- Where a parent manages an account, the student interface clearly indicates (in child-facing language) that "your parent/guardian can see your progress".
- Schools deploy teacher visibility; students are told teachers can see their work.
- No covert monitoring — no keystroke logging, no webcam, no background tracking.

**Evidence:** Child-facing settings screen `[REPLACE WITH screenshot link]`

**Status:** Compliant

---

### Standard 12 — Profiling

> Switch options which use profiling off by default (unless you can demonstrate a compelling reason for profiling to be on by default, taking account of the best interests of the child). Only allow profiling if you have appropriate measures in place to protect the child from any harmful effects.

**Assessment:**
- We do **not** profile children for marketing, advertising, or behavioural targeting.
- We **do** compute learning-related signals (e.g., skill estimates, recommended next exercises). These are used solely to adapt content to the student's progress, which is the compelling educational reason.
- These signals are not shared outside the learning product, and are visible to the student.
- Students can view and reset their learning profile at any time.
- Teachers can also override recommendations.

**Evidence:** Recommendation engine doc `[REPLACE WITH link]`

**Status:** Compliant with compelling-reason justification

---

### Standard 13 — Nudge techniques

> Do not use nudge techniques to lead or encourage children to provide unnecessary personal data or weaken or turn off their privacy protections.

**Assessment:**
- The signup flow does not guilt, pressure, or A/B test children into sharing more data.
- Privacy settings are clearly labelled and accessed the same way as any other setting.
- No "reward" for sharing optional data.
- Messages such as "Complete your profile" are neutral and non-coercive.
- We run a Dark Patterns review on every material UX change.

**Evidence:** UX review checklist `[REPLACE WITH link]`

**Status:** Compliant

---

### Standard 14 — Connected toys and devices

> If you provide a connected toy or device, ensure you include effective tools to enable conformance to this code.

**Assessment:** Not applicable — we do not provide connected toys or devices.

**Status:** N/A

---

### Standard 15 — Online tools

> Provide prominent and accessible tools to help children exercise their data protection rights and report concerns.

**Assessment:**
- "Privacy" in the main settings menu exposes: export my data, delete my account, see what's stored, change consent choices.
- A visible "Report a concern" link on every page routes to safeguarding + privacy queues.
- Users can email dpo@theenglishhub.app at any time.
- Response targets (1 month for SARs) are stated in the privacy notice.

**Evidence:** In-product privacy centre `[REPLACE WITH link]`

**Status:** Compliant

---

## 4. Risks identified and mitigations

| # | Risk | L (1–5) | S (1–5) | Inherent | Mitigation | Residual |
|---|---|---|---|---|---|---|
| 1 | Unauthorised access to student writing | 2 | 4 | 8 | Encryption, RBAC, MFA, access logs, pen test | 3 |
| 2 | AI feedback contains inappropriate content | 3 | 3 | 9 | Output filters, teacher review, child-safe prompts | 4 |
| 3 | Accidental cross-school data exposure | 2 | 5 | 10 | RLS tests, code review, monitoring | 3 |
| 4 | Subprocessor breach affecting children | 2 | 4 | 8 | Vendor due diligence, SCC/IDTA, minimal data | 4 |
| 5 | Covert profiling / marketing leakage | 1 | 5 | 5 | Policy, technical gate, audit logs | 2 |
| 6 | Under-13 self-signing up without parental consent | 3 | 3 | 9 | DOB gate, re-verify on red flags, abuse detection | 4 |
| 7 | Safeguarding concern missed | 2 | 5 | 10 | Safeguarding policy, AI flagging, staff training, report flow | 4 |
| 8 | Excessive engagement mechanics harming wellbeing | 2 | 3 | 6 | No streaks with penalties, design review, youth advisory input | 3 |
| 9 | Student work leaked to AI training pipeline | 1 | 5 | 5 | Contract, no-train clause, enterprise agreement | 2 |
| 10 | DSR not actioned in time | 2 | 2 | 4 | DSR tool, 30-day SLA, quarterly audit | 2 |
| 11 | Log data containing PII retained too long | 2 | 2 | 4 | 90-day log retention, PII scrubbing, Sentry config | 2 |
| 12 | International transfer without adequate safeguards | 1 | 4 | 4 | UK/EU by default, IDTA in place, TIA documented | 2 |

All residual risks are assessed as low or medium. No residual high risks remain; therefore **prior consultation with the ICO under Article 36 is not required at this time**.

---

## 5. Outcome

| Item | Value |
|---|---|
| **Overall residual risk** | Low / Medium |
| **Can we proceed?** | Yes, with implementation of mitigations below |
| **ICO consultation (Art 36)?** | No |
| **Review date** | April 2027 (or sooner on material change) |

### Required mitigations before launch

- [ ] Children's Code compliance confirmed by DPO in production
- [ ] All subprocessors contracted (DPA + SCCs as needed)
- [ ] Safeguarding policy published and staff trained
- [ ] Youth advisory panel feedback incorporated
- [ ] AI output safety filters validated on child-safety test set
- [ ] RLS / tenancy regression tests in CI
- [ ] Privacy controls visible and working in-product
- [ ] Child-friendly privacy notice published
- [ ] DSR intake tool operational

### Ongoing obligations

- [ ] Quarterly DPIA review
- [ ] Annual independent audit / pen test
- [ ] Breach register maintained
- [ ] Staff retraining annually
- [ ] Youth advisory check-in annually

---

## 6. Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `[REPLACE]` | | |
| DPO | `[REPLACE]` | | |
| CTO | `[REPLACE]` | | |
| CEO | `[REPLACE]` | | |
