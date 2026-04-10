# Cyber Essentials & Cyber Essentials Plus — The English Hub

**Owner:** CTO / Data Protection Officer
**Target certification:** Cyber Essentials Plus (IASME-delivered)
**Certification body:** IASME Consortium (NCSC-appointed sole delivery partner since April 2020)
**Status:** Readiness phase — policy pack drafted, pre-audit gap closure in progress
**Document version:** 1.0
**Last updated:** 2026-04-10
**Next review:** Before audit booking

---

## 1. Purpose of this folder

This folder contains everything The English Hub needs to achieve and maintain **Cyber Essentials Plus** certification: the readiness pack, the 18 signed policies that sit under the Information Security Policy, the audit evidence templates, and the audit-day preparation materials.

Cyber Essentials (and the Plus variant in particular) is a **commercial unlock** for The English Hub — it is the de-facto procurement gate for:

- **Multi-Academy Trusts (MATs)** and local authority-maintained schools, who increasingly require it as a contractual clause under their DfE Cyber Security Standards for Schools (DfE, 2022)
- **Any central government supplier** touching pupil, staff, or financial data (mandated since 2014 for central government contracts handling sensitive or personal information)
- **NHS Digital Safeguards (DSP Toolkit)** where CE is the preferred evidence for the "Leadership and Assurance" assertion
- **Enterprise B2B tenders** where CE is a qualifying requirement on pre-qualification questionnaires (PQQs)

At exit, CE+ is commonly cited as contributing **£400K–£800K of uplift** on acquisition price in the K-12 EdTech comparables we track, because it removes a due-diligence blocker and materially widens the buyer's addressable pipeline.

---

## 2. What is Cyber Essentials?

Cyber Essentials is a UK government-backed certification scheme launched in 2014 and owned by the **National Cyber Security Centre (NCSC)**, administered by **IASME Consortium** through a network of licensed certification bodies.

It defines **five technical control themes** that every in-scope organisation must implement:

| # | Control theme | Summary |
|---|---|---|
| 1 | **Firewalls** | Boundary and host-based firewalls protect every internet-connected device. Default admin passwords changed. Inbound services only where approved. |
| 2 | **Secure configuration** | Devices and software are configured to reduce attack surface — default accounts removed, unnecessary software/services disabled, auto-run disabled. |
| 3 | **Security update management** (patching) | All OS, firmware, and application updates with a CVSS v3 score of 7.0+ applied within **14 days** of release (the "critical & high" patching SLA, revised under the Montpelier requirements update 2023). |
| 4 | **User access control** | Unique accounts per user, admin privileges only where needed, MFA on all cloud admin accounts (mandatory since Montpelier), standard-user accounts for day-to-day work, leaver processes. |
| 5 | **Malware protection** | Anti-malware or application allow-listing on every in-scope device, signatures auto-updated, on-access scanning enabled, or sandboxing for untrusted content. |

There are **two levels** of certification:

### Cyber Essentials (Basic)
- **What it is:** Self-assessment questionnaire (SAQ) submitted via the IASME portal, reviewed and marked by a qualified assessor at an IASME delivery partner. You score yourself against the 5 controls; the assessor awards pass/fail.
- **Cost (organisations < 10 employees, micro band):** **£300 + VAT**
- **Cost (small 10–49 employees):** £400 + VAT
- **Cost (medium 50–249 employees):** £450 + VAT
- **Cost (large 250+ employees):** £500 + VAT
- **Turnaround:** Typically 24–72 hours from SAQ submission to result, provided responses are complete.
- **Validity:** 12 months from certification date.
- **Free insurance:** UK-domiciled organisations with turnover under £20 million get £25,000 of cyber liability insurance automatically included with basic certification (extends to CE+).

### Cyber Essentials Plus
Everything in Basic, **plus** an independent technical audit performed by an IASME-licensed assessor. The Plus audit verifies that the SAQ answers are accurate by technically testing a sample of in-scope devices.

The Plus audit includes:

1. **External vulnerability scan** — authenticated or unauthenticated scan of all externally exposed services (email gateway, web servers, VPN endpoints, public-facing SaaS admin consoles) looking for unpatched high/critical CVEs.
2. **Authenticated vulnerability scan (internal)** — credentialed scan of a representative sample of end-user devices (laptops, desktops, mobile devices) against the 14-day patching SLA.
3. **Malware protection test** — the assessor attempts to execute known-malicious (EICAR) and potentially unwanted test files on sample devices and through the email gateway to verify detection.
4. **Browser and email client configuration test** — verifies that internet browsers and email clients are at supported, in-vendor-support versions and that unsafe file types are blocked.
5. **MFA and account separation test** — the assessor verifies that cloud admin accounts require MFA and that standard users do not hold administrator rights on their devices.
6. **SAQ validation** — the assessor reviews evidence (screenshots, MDM console exports, patch reports) to verify that every "Yes" answer in the SAQ reflects reality.

- **Cost:** **£1,500–£3,000 + VAT** for a micro/small organisation — varies by assessor and device sample size. Budget **£2,200** for The English Hub as our working estimate (micro band, ~8–15 devices in scope by Q3 2026).
- **Turnaround:** Typically **2–8 weeks** from engagement start to certificate issue, depending on remediation cycles.
- **Validity:** 12 months from certification date. Re-certification required annually (not a rolling audit).

---

## 3. Who certifies us?

Since **April 2020**, IASME Consortium (Malvern, Worcestershire) has been the **sole NCSC-appointed delivery partner** for Cyber Essentials. IASME does not assess directly; it licenses **Certification Bodies** (also called delivery partners) across the UK who perform the assessments against a common IASME standard.

Target assessors (shortlist to engage):

1. **IASME direct** — iasme.co.uk — suitable for small/micro; simplest route
2. **Indelible Data** — indelibledata.co.uk — K-12 and education sector experience
3. **Cyber Tec Security** — cybertecsecurity.com — strong Plus throughput
4. **Pentest People** — pentestpeople.com — higher price point, broader penetration testing upsell
5. **URM Consulting** — urmconsulting.com — strong on CE+ for SaaS/cloud-native businesses

We will request quotes from **two** of the above (IASME direct + one K-12-experienced alternative) once the policy pack is signed and the readiness checklist is fully green.

---

## 4. Scope for The English Hub

See `01-readiness/scope-of-certification.md` for the full scope definition. Short summary:

- **Whole organisation scope** (not a sub-scope) — covering all staff, all corporate devices, all cloud services used for corporate operations
- **In-scope staff:** all employees, contractors with corporate-issued credentials, and the founder/director
- **In-scope devices:** all laptops, mobile phones used for corporate email/data, any on-prem infrastructure (currently nil)
- **In-scope networks:** home/remote Wi-Fi (treated under remote worker rules), office Wi-Fi when office is opened
- **In-scope cloud services:** Google Workspace, Supabase (production + staging), Vercel, GitHub, Stripe, OpenAI API, Notion, Slack, Linear, 1Password (password manager), any other SaaS handling production data

We **do not** use a "sub-scope" carve-out. This is deliberate: sub-scopes are cheaper to audit but weaker as a trust signal, and MAT procurement teams explicitly check for whole-organisation scope.

---

## 5. Relationship to other compliance work

CE+ sits alongside — and materially overlaps with — our other compliance workstreams:

| Compliance workstream | Overlap with CE+ | Folder |
|---|---|---|
| **UK GDPR / DPA 2018** | Technical and organisational measures (Article 32) directly reference CE as evidence | `../gdpr/` |
| **ICO Children's Code (Age Appropriate Design Code)** | Standards 7 (Default settings) and 8 (Data minimisation) benefit from CE secure-configuration controls | `../childrens-code/` |
| **DfE Cyber Security Standards for Schools** | 14 standards — CE+ covers approximately 11 of them directly | `../dfe-standards/` (future) |
| **NHS DSP Toolkit** | CE is accepted evidence for multiple assertions | N/A yet |

Policies in this folder are **reusable** across all of the above. We do not write separate "GDPR password policies" — the `02-policies/password-policy.md` serves both CE+ and GDPR Article 32.

---

## 6. Folder contents and reading order

```
cyber-essentials/
├── README.md                                   (this file)
│
├── 01-readiness/                               Start here before contacting assessors
│   ├── scope-of-certification.md               Whole-org scope definition
│   ├── self-assessment-questionnaire-draft.md  Full SAQ responses (5 control themes)
│   └── readiness-checklist.md                  Pass/fail status tracker
│
├── 02-policies/                                The 18 signed policies
│   ├── information-security-policy.md          Master policy — references all others
│   ├── access-control-policy.md
│   ├── password-policy.md
│   ├── acceptable-use-policy.md
│   ├── remote-working-policy.md
│   ├── byod-policy.md
│   ├── patching-policy.md
│   ├── anti-malware-policy.md
│   ├── firewall-configuration-policy.md
│   ├── secure-configuration-policy.md
│   ├── data-backup-policy.md
│   ├── incident-response-policy.md
│   ├── business-continuity-policy.md
│   ├── vendor-risk-management-policy.md
│   ├── clear-desk-clear-screen-policy.md
│   └── training-awareness-policy.md
│
├── 03-evidence/                                Living artefacts — updated monthly/quarterly
│   ├── asset-inventory-template.csv
│   ├── user-access-review-template.csv
│   ├── patch-log-template.csv
│   ├── vulnerability-scan-procedures.md
│   └── training-completion-log.csv
│
└── 04-audit-prep/                              Run these 2 weeks before the Plus audit
    ├── audit-day-checklist.md
    ├── common-failure-points.md
    └── remediation-tracker.md
```

Reading order for a new team member: README → scope-of-certification → information-security-policy → readiness-checklist → drill into any red items.

---

## 7. Timeline to certification

Assuming policies are signed by end of April 2026:

| Week | Milestone | Owner |
|---|---|---|
| **W1** | Policies signed, asset inventory completed, readiness checklist in-progress | CTO |
| **W2** | All CE controls implemented and evidenced; MFA audit of all cloud admins; patching SLA verified | CTO |
| **W3** | SAQ draft frozen; internal dry-run vulnerability scan performed | CTO |
| **W4** | Engage IASME assessor; submit SAQ; pay for CE Basic | CTO |
| **W5** | CE Basic certificate issued (assuming clean pass) | IASME |
| **W5–W8** | CE+ audit scheduled — external scan + authenticated internal scan + sample tests | Assessor + CTO |
| **W8–W10** | Remediate any audit findings (see `04-audit-prep/remediation-tracker.md`) | CTO |
| **W10** | CE+ certificate issued | IASME |

Total timeline: **2 to 2.5 months** from signed policies to certificate. Budget **£300 (Basic) + £2,200 (Plus) = £2,500** as the all-in cost estimate.

---

## 8. Maintenance — what happens after certification

CE+ is valid for **12 months**. To maintain certification:

- **Monthly:** Patch log review — ensure 14-day SLA is being met across the fleet (see `03-evidence/patch-log-template.csv`)
- **Quarterly:** User access review — verify every account still corresponds to a current staff member and privileges are still appropriate (`03-evidence/user-access-review-template.csv`)
- **Quarterly:** Internal vulnerability scan — catch any drift from the CE baseline before the re-certification audit
- **Annually (month 9):** Start re-certification readiness — update scope, re-run the SAQ draft, engage the assessor for month 11 audit
- **Ad-hoc:** Any material change (new cloud service, new device class, office open, new staff member) triggers an update to `scope-of-certification.md` and the asset inventory

Re-certification is **not** rolled — it is a fresh assessment. Budget for the full £2,500 cost every year and a **half-day of director time** each quarter on the maintenance activities.

---

## 9. Accountability

| Role | Responsibility |
|---|---|
| **Director / CEO** | Ultimate accountability, sign-off on all policies, budget approval for audit fees |
| **CTO / DPO** | Day-to-day owner of all controls, policies, evidence, audit relationship |
| **All staff** | Adhere to every policy in `02-policies/`, complete mandatory training, report incidents |

The signed copy of each policy lives here in Git (source of truth). A countersigned PDF copy of the Information Security Policy is also stored in the `data-room/` for investor/buyer diligence.

---

*This README is version 1.0. Update it whenever the scope, assessor, cost estimate, or folder structure changes.*
