# UK Children's Code (Age Appropriate Design Code) Compliance Pack

**Organisation:** The English Hub Ltd
**Product:** The English Hub — GCSE English Language & Literature revision platform
**Owner:** Data Protection Lead / Founder
**Status:** Draft v0.9 — Ongoing implementation
**Last updated:** 2026-04-10
**Review cycle:** Every 6 months, or upon material change

---

## 1. What this pack is

This folder contains The English Hub's compliance documentation for the **UK Age Appropriate Design Code** (commonly referred to as the **Children's Code**), published by the Information Commissioner's Office (ICO) under section 123 of the Data Protection Act 2018.

The Children's Code is a statutory code of practice that sets out 15 standards of age-appropriate design that providers of Information Society Services (ISS) "likely to be accessed by children" must meet in order to comply with their data protection obligations under UK GDPR and the Data Protection Act 2018 as they apply to children.

The code is not itself a new law — it is guidance on how existing data protection law (UK GDPR + DPA 2018) applies when a service is likely to be accessed by under-18s. However, the ICO will use the code as a benchmark when enforcing the law, and courts may refer to it when determining whether organisations have met their data protection obligations.

## 2. Why it applies to The English Hub

The English Hub is clearly within scope because:

- It is an **Information Society Service** — a product provided online for remuneration (freemium with paid upgrade; B2B school licences)
- It is **"likely to be accessed by children"** — the core user base is GCSE students aged **14–16**, and a meaningful share of GCSE cohorts include students who are 13 at the start of the course
- The ICO explicitly lists **"educational websites"** and **"online learning tools"** as in-scope
- We process personal data of child users (account details, performance data, essay submissions, device/usage telemetry, AI marking outputs)
- We operate in the UK market and target UK schools

The code applies from the first point at which a child is likely to access the service, not only after they have created an account.

## 3. When it came into force

- **Published:** 12 August 2020
- **In force:** 2 September 2020
- **Transition period ended:** 2 September 2021
- **Full compliance expected from:** 2 September 2021 onwards

The English Hub did not exist at transition-period end. The product has been designed and built with the code in mind, but this pack is the first formal, end-to-end compliance documentation.

## 4. The 15 standards at a glance

1. **Best interests of the child** — the child's best interests is the primary consideration
2. **Data protection impact assessments** — DPIAs must specifically consider child-specific risks
3. **Age appropriate application** — apply the standards based on the age range of likely users, or treat all users as children
4. **Transparency** — privacy information presented in a way children can understand
5. **Detrimental use of data** — do not use children's data in ways shown (or known) to be detrimental to wellbeing
6. **Policies and community standards** — uphold published terms, policies and community standards
7. **Default settings** — "high privacy" by default unless there is a compelling reason otherwise
8. **Data minimisation** — collect only the minimum personal data needed
9. **Data sharing** — do not disclose children's data unless there is a compelling reason, in their best interests
10. **Geolocation** — geolocation off by default, clear signal when on, auto-revert after each session
11. **Parental controls** — if parental controls exist, children must be told
12. **Profiling** — profiling off by default, and only on where there is a compelling reason
13. **Nudge techniques** — do not use nudge techniques to push children to weaker privacy settings or extend use
14. **Connected toys and devices** — connected toys/devices must comply with the standards
15. **Online tools** — provide prominent, accessible tools to exercise data rights and report concerns

## 5. Penalties and enforcement

The Children's Code itself is not directly enforceable — but because it is the ICO's yardstick for measuring compliance with UK GDPR/DPA 2018 for child users, breaches can attract the full regulatory consequences of those laws:

- **Maximum fine:** the higher of **£17.5 million** or **4% of total worldwide annual turnover** of the preceding financial year
- **Enforcement notices** compelling specific remediation
- **Assessment notices** / compulsory audits
- **Reprimands** and public enforcement decisions (reputational damage)
- **Provisional enforcement notices** requiring near-immediate action
- **Stop processing orders** in extreme cases

Beyond ICO action, non-compliance creates commercial risk:

- **Schools** are increasingly treating Children's Code conformance as a procurement gate under their own data-protection duties (DPA 2018, "Keeping Children Safe in Education" safeguarding guidance, Meeting digital and technology standards in schools and colleges)
- **Exam boards** (AQA, Edexcel, OCR, WJEC) reference Children's Code alignment in third-party tool guidance
- **App stores** (Apple, Google) have their own child-safety policies aligned to the code
- **Investors and acquirers** in UK edtech treat it as material due-diligence

## 6. Pack structure

```
childrens-code/
├── README.md                         ← you are here
├── 01-assessment/
│   ├── age-appropriate-design-assessment.md
│   ├── risk-assessment-matrix.md
│   └── gap-analysis.md
├── 02-policies/
│   ├── childrens-privacy-policy.md
│   ├── age-verification-policy.md
│   ├── parental-consent-policy.md
│   ├── default-privacy-settings.md
│   ├── data-minimisation-for-children.md
│   ├── profiling-policy.md
│   ├── nudge-techniques-policy.md
│   └── geolocation-policy.md
├── 03-dpias/
│   ├── dpia-processing-children-data.md
│   ├── dpia-analytics.md
│   └── dpia-ai-features.md
├── 04-evidence/
│   ├── transparency-information-inventory.md
│   ├── child-friendly-notices-examples.md
│   ├── parental-controls-design.md
│   └── community-standards.md
└── 05-ico/
    ├── ico-notification-template.md
    └── subject-access-request-procedure.md
```

## 7. Key references

- ICO, *Age appropriate design: a code of practice for online services* (2020) — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/
- ICO, *Children and the UK GDPR* — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/
- ICO, *Guidance on DPIAs* — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/
- UK GDPR + Data Protection Act 2018
- DfE, *Meeting digital and technology standards in schools and colleges* — Cyber security standards
- DfE, *Keeping Children Safe in Education* — online safety duties

## 8. How to use this pack

1. **Schools doing DPIA/due diligence**: start with `01-assessment/age-appropriate-design-assessment.md` and the child-focused DPIA in `03-dpias/dpia-processing-children-data.md`
2. **ICO investigators**: the full pack is structured to support a section 146 assessment notice response
3. **Internal engineering**: `01-assessment/gap-analysis.md` is the source of truth for outstanding work
4. **Parents/guardians**: the child-friendly privacy policy and parental controls design are the relevant starting points

## 9. Honest status summary

This pack is a genuine, detailed draft — **not everything described is live in the product today**. Where something is aspirational, it is clearly marked **[GAP]** with an owner and target date in the gap analysis. Schools and the ICO should treat **live** items as implemented, **planned** items as committed, and **[GAP]** items as acknowledged shortfalls under active remediation.
