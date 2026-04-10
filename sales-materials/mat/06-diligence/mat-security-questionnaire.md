# MAT IT Security Questionnaire — Pre-Populated Responses

**Purpose**: Pre-filled answers to the standard security, data protection, and IT assurance questions that MAT IT teams, DPOs, and procurement teams will ask. Internal use; share externally as a PDF.

**IMPORTANT**: Verify every answer against the current state of the product and infrastructure before sending to a prospect. Answers marked **[VERIFY]** are placeholders that must be checked and updated by the security/IT team before external use.

**Tone**: Factual, specific, inspector-ready. MAT IT teams are often ex-LEA IT staff — they respect plain English and defensible numbers.

---

## Section A — Company and product

### A1. Legal entity

**A1.1 Full legal name of the supplier**
The English Hub Limited [VERIFY registered name]

**A1.2 Company registration number**
[VERIFY]

**A1.3 Registered office address**
[VERIFY]

**A1.4 ICO registration number**
[VERIFY]

**A1.5 VAT registration number**
[VERIFY]

**A1.6 Date incorporated**
[VERIFY]

**A1.7 Ultimate parent company**
[VERIFY — state "none" if standalone]

**A1.8 Number of full-time employees**
[VERIFY]

**A1.9 Number of UK-based staff**
[VERIFY]

**A1.10 Financial information available**
Companies House filings; audited accounts on request under NDA.

---

### A2. Product

**A2.1 Name of product**
The English Hub — a secondary English curriculum, assessment, and analytics platform.

**A2.2 Hosting model**
Cloud-hosted software-as-a-service. No on-premise deployment required.

**A2.3 Cloud provider**
[VERIFY — typical: AWS eu-west-2 London region and/or Microsoft Azure UK South]

**A2.4 Data residency**
All production data is stored in the United Kingdom. No pupil data leaves the UK except where explicitly permitted by the customer.

**A2.5 Subprocessors**
A full list of subprocessors is maintained and provided in the Data Processing Agreement. Material changes are notified to customers at least 30 days in advance. [VERIFY current list.]

**A2.6 Release cadence**
Typical release cadence: weekly incremental releases for minor features and fixes; quarterly for major feature releases. All changes are tested in a pre-production environment before release. [VERIFY.]

**A2.7 Product documentation**
User guides and admin documentation available in-product and on the customer support portal.

---

## Section B — Information security

### B1. Certifications and standards

**B1.1 Cyber Essentials**
[VERIFY current status]. If certified: certificate available on request.

**B1.2 Cyber Essentials Plus**
[VERIFY current status]. If certified: expiry date and scope statement available.

**B1.3 ISO 27001**
[VERIFY. Accurate current wording: "alignment" vs. "certified".] State honestly — never claim certification without certificate.

**B1.4 SOC 2**
[VERIFY.]

**B1.5 DfE Digital Technology Standards**
We align with the Department for Education's Digital Technology Standards for schools and colleges. Our alignment statement is available on request.

**B1.6 NCSC Cloud Security Principles**
We follow the NCSC 14 Cloud Security Principles. A mapping document is available on request.

---

### B2. Governance

**B2.1 Is there a named Information Security Officer?**
[VERIFY.] Yes. Contact: [name and email].

**B2.2 Is there an Information Security Policy?**
Yes. Reviewed at least annually. Available on request under NDA.

**B2.3 Are staff trained on security?**
Yes. All staff complete security awareness training at onboarding and annually thereafter. Training includes phishing, password hygiene, social engineering, and data handling.

**B2.4 Are staff background-checked?**
All UK staff with access to production systems or customer data are subject to background checks appropriate to their role. [VERIFY standard used — DBS where relevant.]

**B2.5 Is there a documented incident response plan?**
Yes. The plan is tested at least annually via tabletop exercise. Customers are notified of confirmed security incidents affecting their data within [72] hours, as required under UK GDPR Article 33.

---

### B3. Access control

**B3.1 How is access to customer data controlled internally?**
Production systems use role-based access control (RBAC). Only named staff with a business need have production access. Access is reviewed at least quarterly. All production access is logged and monitored.

**B3.2 Multi-factor authentication for staff?**
Yes. MFA is mandatory for all staff accounts and all production system access.

**B3.3 MFA for customer users?**
Available for all customer users. Required for accounts with administrative privileges. SSO-based MFA supported for Google Workspace and Microsoft 365 identity providers.

**B3.4 Single sign-on support?**
Google Workspace, Microsoft 365, and SAML 2.0. Custom SSO available on request.

**B3.5 Password policy for customer users (when not using SSO)?**
Minimum 12 characters, complexity enforced, no reuse of last 5 passwords, lockout after 5 failed attempts, forced reset every [verify — typically 12 months or on suspicion of compromise rather than routine rotation].

**B3.6 Pupil account access controls?**
Pupil accounts cannot access other pupils' data. Teacher accounts can only access pupils they are assigned to, or pupils in their class/year/school depending on role. Central MAT users see aggregated data; personally identifiable pupil data requires specific permission.

---

### B4. Data protection

**B4.1 Is data encrypted in transit?**
Yes. TLS 1.2 or higher on all public endpoints. Internal service-to-service communications are also encrypted. [VERIFY current TLS version minimum.]

**B4.2 Is data encrypted at rest?**
Yes. All production databases are encrypted at rest using AES-256. Backups are encrypted.

**B4.3 Are backups taken, tested, and stored?**
Yes. Automated daily backups retained for [VERIFY retention period, typically 30 days]. Backups are stored in a separate availability zone within the UK region. Restore tests conducted at least [quarterly].

**B4.4 Data retention — pupil data?**
Pupil data is retained for the duration of the contract plus 90 days after termination for export purposes, unless the customer requires earlier deletion.

**B4.5 Data deletion on request?**
Yes. Customers can request deletion of individual pupil records, whole schools, or the entire trust's data at any time. Deletion is completed within 30 days, with a deletion certificate issued.

**B4.6 International data transfers?**
No routine international data transfers. In rare cases (e.g., security incident investigation requiring vendor support), transfers are only made under Standard Contractual Clauses and with customer notification.

**B4.7 Sub-processor locations?**
[VERIFY each subprocessor's data processing location.]

---

### B5. Infrastructure and operations

**B5.1 Uptime target?**
99.5% monthly uptime for standard MAT customers; 99.9% for flagship trusts. Measured end-to-end including third-party dependencies.

**B5.2 Historical uptime?**
[VERIFY — provide last 12 months, monthly.]

**B5.3 Disaster recovery plan?**
Yes. RTO [VERIFY — typically 4 hours], RPO [VERIFY — typically 1 hour]. DR tests conducted at least annually.

**B5.4 Penetration testing?**
Annual independent external penetration test. Summary report available under NDA. [VERIFY last test date and provider.]

**B5.5 Vulnerability management?**
Continuous automated dependency scanning. Monthly infrastructure vulnerability scans. Critical vulnerabilities patched within [7] days.

**B5.6 Change management?**
All production changes go through code review, automated testing, and release approval. No direct production changes without change record.

**B5.7 Logging and monitoring?**
All production access, authentication events, and data access is logged. Logs are retained for [VERIFY retention]. Logs are monitored by [VERIFY — in-house team / SOC provider]. Customer-accessible audit logs are available for administrative actions in the product.

---

### B6. Business continuity

**B6.1 Are there critical single points of failure?**
Production infrastructure is deployed across multiple availability zones within the UK region. No single node failure causes customer-visible impact.

**B6.2 Is there a documented Business Continuity Plan?**
Yes. Reviewed at least annually.

**B6.3 Key person dependencies?**
Core production operations have at least two qualified engineers. No single person is required for the platform to run.

---

## Section C — Data protection and GDPR

### C1. Lawful basis and roles

**C1.1 Who is the Data Controller?**
The customer (Trust and its Activated Schools) acts as Data Controller for all pupil, staff, and teaching data processed through the platform.

**C1.2 Who is the Data Processor?**
The English Hub acts as Data Processor on behalf of the Data Controller, in accordance with Article 28 UK GDPR.

**C1.3 What is the lawful basis for processing pupil data?**
Lawful basis is the responsibility of the Data Controller (the Trust/school). The typical basis is Article 6(1)(e) — public task — for UK state schools, or Article 6(1)(c) — legal obligation — where relevant. Special category data processing would rely on Article 9(2)(g) (substantial public interest).

**C1.4 Is a Data Protection Impact Assessment (DPIA) required?**
A DPIA is recommended for processing involving pupil data at scale. We provide a DPIA-ready information pack to every MAT customer to support their own DPIA process. [VERIFY pack exists and is current.]

---

### C2. Subject rights

**C2.1 How are Subject Access Requests (SARs) handled?**
SARs come to the Data Controller (the Trust), not to us. We provide the Trust with the technical means to extract all personal data relating to any individual on request, within [72] hours, free of charge for reasonable volumes.

**C2.2 How are rectification requests handled?**
Customer administrators can rectify most pupil and staff data directly in the product. For anything they cannot self-serve, our support team responds within [1 business day].

**C2.3 How is the right to erasure handled?**
See B4.5. Erasure requests are honoured within 30 days unless retention is legally required.

---

### C3. Special category data and safeguarding

**C3.1 Does the platform process special category data?**
In normal use, no. The product is designed to avoid collecting special category data. If customers choose to enter such data (e.g., SEND notes), it is held under the customer's responsibility and under the same security controls as all other pupil data.

**C3.2 Safeguarding — can the platform flag harmful content?**
[VERIFY — describe any content moderation or safeguarding filters on pupil-generated writing.]

---

## Section D — DfE and sector-specific compliance

### D1. DfE Digital Standards

**D1.1 Alignment with DfE Digital Standards**
We align with the DfE's Digital Technology Standards. Mapping document available.

**D1.2 Keeping Children Safe in Education (KCSIE)**
The product is designed in line with KCSIE guidance. Filtering and monitoring expectations are supported through our audit log capabilities and usage reporting.

**D1.3 Prevent Duty**
The product does not allow pupils to access external content. All curriculum content is curated by The English Hub or by the school. Any concerns around radicalisation risk through user-generated content can be escalated via the standard safeguarding flag.

---

### D2. Accessibility

**D2.1 Accessibility standard**
We aim for WCAG 2.1 AA conformance. An up-to-date accessibility statement is published on the product site. [VERIFY.]

**D2.2 Accessibility testing**
Automated accessibility testing in CI, plus periodic manual testing with assistive technology users. [VERIFY.]

---

## Section E — Contractual and commercial

### E1. Insurance

**E1.1 Professional indemnity**
£[VERIFY amount] per claim and in aggregate.

**E1.2 Cyber liability**
£[VERIFY amount] per claim and in aggregate.

**E1.3 Public liability**
£[VERIFY amount].

**E1.4 Evidence**
Certificates of insurance available on request.

---

### E2. Financial stability

**E2.1 Financial standing**
The company's accounts are filed with Companies House and available under NDA in more detail.

**E2.2 Ongoing concern**
[VERIFY — e.g., "The company has sufficient cash runway for at least 18 months and is tracking toward operational break-even."]

---

## Section F — References and track record

**F1.1 Number of UK schools using the product**
[VERIFY current number.]

**F1.2 Number of MATs using the product**
[VERIFY.]

**F1.3 Longest-standing customer**
[VERIFY.]

**F1.4 Reference customers**
At least three school or MAT customer references can be provided on request. All references are named customers with signed consent to be contacted.

---

## Notes for the person completing this pack

- **Always verify every answer marked [VERIFY] before sending.** An out-of-date or wrong answer kills deals and damages credibility.
- **If you don't know the answer, say so.** "We do not currently do X but expect to by [date]" is much stronger than a vague yes.
- **Customise for the specific MAT.** Rename the document, insert their name, and add a cover letter.
- **Offer a 30-minute call with our technical lead** for any MAT DPO or IT lead who has follow-up questions. It often closes the diligence phase in one conversation.
- **Update this master template** every time a new question comes up from a MAT buyer. The goal is for the next deal to have zero new questions.
