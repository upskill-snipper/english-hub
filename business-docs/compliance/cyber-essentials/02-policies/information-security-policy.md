# Information Security Policy

**Policy ID:** ISMS-001
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months from effective date (or on material change)
**Owner:** CTO / Data Protection Officer
**Approved by:** Director

---

## 1. Purpose

This Information Security Policy ("Policy") is the **master policy** of The English Hub Ltd ("the Company"). It sets out the Company's approach to protecting the confidentiality, integrity, and availability of the information it processes, stores, and transmits — particularly the personal data of children, parents, and staff.

This Policy gives effect to the Company's obligations under:

- UK General Data Protection Regulation (UK GDPR)
- Data Protection Act 2018
- Privacy and Electronic Communications Regulations (PECR)
- ICO Age-Appropriate Design Code ("Children's Code")
- Department for Education Cyber Security Standards for Schools (2022)
- Cyber Essentials scheme (NCSC, delivered by IASME)
- Any contractual requirements imposed by customers (MATs, local authorities, schools)

---

## 2. Scope

This Policy applies to:

- Every employee, director, officer, volunteer, contractor, and intern of the Company
- Every information asset owned, leased, licensed, or processed by the Company
- Every device and network used to access Company data, whether Company-owned or personally owned (BYOD)
- Every cloud service used for Company purposes
- Every physical location from which Company work is performed

The scope is whole-organisation and aligned to the Cyber Essentials scope document (`01-readiness/scope-of-certification.md`).

---

## 3. Information security principles

The Company's information security programme is built on the following seven principles:

1. **Confidentiality** — information is available only to those authorised to access it.
2. **Integrity** — information is accurate, complete, and not tampered with.
3. **Availability** — information is accessible when and where authorised users need it.
4. **Accountability** — every action on an information asset can be attributed to a unique, identified user.
5. **Least privilege** — access is granted at the lowest level that allows each person to perform their role.
6. **Defence in depth** — multiple independent controls protect each asset so that the failure of any one control does not cause a breach.
7. **Privacy by design and by default** — privacy considerations are built into every new system, feature, and process from inception, with the most privacy-preserving settings as the default (per Article 25 UK GDPR and the Children's Code).

---

## 4. Policy framework

This Policy is the apex of a layered document set. The following policies sit beneath this Policy and must be read in conjunction with it. Every staff member must read and adhere to each of them.

| ID | Policy | File |
|---|---|---|
| ISMS-002 | Access Control Policy | `access-control-policy.md` |
| ISMS-003 | Password Policy | `password-policy.md` |
| ISMS-004 | Acceptable Use Policy | `acceptable-use-policy.md` |
| ISMS-005 | Remote Working Policy | `remote-working-policy.md` |
| ISMS-006 | BYOD Policy | `byod-policy.md` |
| ISMS-007 | Patching Policy | `patching-policy.md` |
| ISMS-008 | Anti-Malware Policy | `anti-malware-policy.md` |
| ISMS-009 | Firewall Configuration Policy | `firewall-configuration-policy.md` |
| ISMS-010 | Secure Configuration Policy | `secure-configuration-policy.md` |
| ISMS-011 | Data Backup Policy | `data-backup-policy.md` |
| ISMS-012 | Incident Response Policy | `incident-response-policy.md` |
| ISMS-013 | Business Continuity Policy | `business-continuity-policy.md` |
| ISMS-014 | Vendor Risk Management Policy | `vendor-risk-management-policy.md` |
| ISMS-015 | Clear Desk & Clear Screen Policy | `clear-desk-clear-screen-policy.md` |
| ISMS-016 | Training & Awareness Policy | `training-awareness-policy.md` |

If any conflict arises between this Policy and a sub-policy, this Policy prevails.

---

## 5. Roles and responsibilities

### 5.1 Director (CEO)
Ultimate accountability for information security. Approves this Policy and all sub-policies. Ensures adequate resources are allocated to the security programme. Receives quarterly reports on the state of security and approves the annual risk register.

### 5.2 Chief Technology Officer / Data Protection Officer
Day-to-day owner of the Information Security Management System (ISMS). Responsible for:

- Drafting, maintaining, and operating all policies in this framework
- Running the asset inventory, patching programme, vulnerability scans, and user access reviews
- Managing the relationship with the Cyber Essentials certification body
- Acting as the first line of response for every security incident
- Acting as the Data Protection Officer for UK GDPR purposes
- Reporting quarterly to the Director

In a single-founder organisation, the Director and CTO/DPO may be the same natural person. When additional staff are hired, the CTO role will be formally separated if the founding Director does not have the required technical skills.

### 5.3 All staff
- Read and adhere to every policy in the framework
- Complete all mandatory training within the required timeframes
- Report suspected security incidents, near-misses, and policy breaches promptly (see Incident Response Policy)
- Take personal responsibility for the security of devices and credentials entrusted to them
- Escalate any requests they believe may compromise security

### 5.4 Contractors and third parties
- Bound by the same security standards as employees while processing Company data
- Must sign the Company's contractor agreement, which incorporates this Policy by reference
- Are subject to the Vendor Risk Management Policy (ISMS-014)

---

## 6. Information classification

All information processed by the Company is classified into one of four tiers:

| Tier | Label | Examples | Handling rules |
|---|---|---|---|
| 1 | **Public** | Marketing pages, product screenshots, published pricing | No restrictions; may be published |
| 2 | **Internal** | Internal documents, general strategy notes | Access limited to staff and approved contractors; not to be shared externally without approval |
| 3 | **Confidential** | Source code, customer contracts, financial data, unreleased product plans | Access on a need-to-know basis; encrypted in transit and at rest; NDAs in place before external sharing |
| 4 | **Sensitive** | Pupil personal data, special category data, authentication credentials, payment data | Additional controls: access logged, access reviewed quarterly, encryption everywhere, shortest possible retention, breach obligations under UK GDPR |

Every new type of data processed by the Company is classified by the CTO/DPO before processing begins. The default classification for any unclassified data is **Confidential**.

---

## 7. Risk management

The Company operates a lightweight risk management process proportionate to its size:

1. **Risk identification.** The CTO/DPO maintains an information security risk register (in `../gdpr/` or the main compliance folder). Risks are identified from: change management, incidents, audit findings, threat intelligence (NCSC weekly reports), and annual review.
2. **Risk assessment.** Each risk is scored on impact (1–5) and likelihood (1–5). Residual risk = impact × likelihood after controls.
3. **Risk treatment.** Options are: accept, mitigate, transfer (e.g. insurance), or avoid. Any residual risk scoring 16+ requires Director approval to accept.
4. **Risk review.** The register is reviewed quarterly and on any material change.

---

## 8. Compliance and audit

- **Annual re-certification:** The Company maintains Cyber Essentials Plus certification with annual re-audit.
- **Internal review:** The CTO/DPO performs an internal review of this Policy and its sub-policies at least annually.
- **External audit:** Customer and investor audits are accommodated; audit requests are tracked in `../../finance/` (or equivalent).
- **Regulatory reporting:** Any personal data breach is assessed against the UK GDPR 72-hour notification threshold. Breaches meeting the threshold are reported to the ICO via the online reporting tool (`ico.org.uk`).

---

## 9. Enforcement

Failure to comply with this Policy or any sub-policy may result in disciplinary action, up to and including summary dismissal for gross misconduct. For contractors, non-compliance may result in immediate termination of contract. For serious breaches involving criminal conduct, the Company will cooperate with law enforcement.

Suspected breaches of this Policy are reported to the CTO/DPO via the reporting channel in the Incident Response Policy.

---

## 10. Review and change control

This Policy is reviewed annually. It is also reviewed on the occurrence of any of the following:

- A significant change to the organisation's scope, size, or structure
- A material change to the regulatory or threat environment
- A material security incident
- A failed audit finding
- A change to any referenced sub-policy

Changes are approved by the Director and communicated to all staff. A version history is maintained at the foot of this document.

---

## 11. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft for Director signature |

---

## 12. Sign-off

I confirm that I have read, understood, and approved this Information Security Policy on behalf of The English Hub Ltd.

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________

---

**Staff acknowledgement:** Every member of staff must read this Policy on joining the Company and on every subsequent version. Acknowledgement is recorded in `03-evidence/training-completion-log.csv`.
