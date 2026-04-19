# Records of Processing Activities (ROPA)

**Upskill Energy Limited t/a The English Hub**
**Article 30 UK GDPR**
**Last reviewed:** 2026-04-12
**Next review:** Quarterly (next: July 2026)
**Owner:** DPO

> This ROPA documents all processing activities under which The English Hub processes personal data, both as controller and as processor. It is a statutory record under Article 30 UK GDPR and must be made available to the ICO on request.

---

## Controller details

| Field | Value |
|---|---|
| Name | Upskill Energy Limited t/a The English Hub |
| Registered office | `[REPLACE WITH address]` |
| Company number | 16511479 |
| ICO registration number | ZC016690 |
| DPO | `[REPLACE WITH name]` — dpo@theenglishhub.app |
| UK Representative (EU users) | Not applicable — UK-based controller |

---

## Summary table

| # | Processing activity | Role | Lawful basis |
|---|---|---|---|
| 1 | Student account management and authentication | Controller or Processor | Contract |
| 2 | Delivery of learning content | Controller or Processor | Contract |
| 3 | Student work capture and storage | Controller or Processor | Contract |
| 4 | AI-assisted feedback generation | Controller or Processor | Contract |
| 5 | Progress and performance tracking | Controller or Processor | Contract |
| 6 | Teacher dashboards and class management | Controller or Processor | Contract |
| 7 | Parental consent collection and management | Controller | Legal obligation (Art 8) |
| 8 | Customer support | Controller | Contract |
| 9 | Product analytics (pseudonymised, adults + non-child accounts) | Controller | Legitimate interests (LIA) |
| 10 | Security monitoring and abuse prevention | Controller | Legitimate interests (LIA) |
| 11 | Marketing communications (adults, opt-in) | Controller | Consent |
| 12 | Billing and payments | Controller | Contract + legal obligation |
| 13 | Safeguarding response | Controller | Legal obligation / vital interests |
| 14 | Cookie / consent management | Controller | Consent (PECR) / legitimate interests |

---

## Activity 1 — Student account management and authentication

| Field | Value |
|---|---|
| **Role** | Controller (direct students), Processor (school students) |
| **Purpose** | Allow students to create, access, and manage their account |
| **Data subjects** | Students (13–16) |
| **Data categories** | Name, email, password hash, school, year group, date of birth |
| **Recipients** | Staff (support), SSO providers (Google, Microsoft), Supabase (auth) |
| **Lawful basis** | Contract (Art 6(1)(b)) |
| **Transfers** | UK / EEA |
| **Retention** | Duration of account + 12 months inactive |
| **Security measures** | Encryption in transit and at rest; MFA for staff; RBAC; audit logs |

## Activity 2 — Delivery of learning content

| Field | Value |
|---|---|
| **Role** | Controller or Processor |
| **Purpose** | Deliver learning materials aligned to exam board and progress |
| **Data subjects** | Students, teachers |
| **Data categories** | Account data, exam board, year group, progress data |
| **Recipients** | Hosting subprocessors (AWS, Vercel, Cloudflare) |
| **Lawful basis** | Contract |
| **Transfers** | UK / EEA |
| **Retention** | Duration of account |
| **Security measures** | As activity 1 |

## Activity 3 — Student work capture and storage

| Field | Value |
|---|---|
| **Role** | Controller or Processor |
| **Purpose** | Store student-written responses to exercises, essays, and quizzes |
| **Data subjects** | Students |
| **Data categories** | Learning data (text content of student work), metadata (timestamps, duration) |
| **Special category data** | Not requested. Any inadvertent inclusion is handled per privacy policy. |
| **Recipients** | Hosting (Supabase, AWS) |
| **Lawful basis** | Contract |
| **Transfers** | UK / EEA |
| **Retention** | Active + 12 months; anonymised after 12 months inactive |
| **Security measures** | Encryption, RBAC, access logs |

## Activity 4 — AI-assisted feedback generation

| Field | Value |
|---|---|
| **Role** | Controller or Processor |
| **Purpose** | Generate feedback and suggestions on student writing |
| **Data subjects** | Students |
| **Data categories** | Student writing (transiently sent to AI provider) |
| **Recipients** | Anthropic PBC (AI provider) |
| **Lawful basis** | Contract (Art 6(1)(b)) |
| **Transfers** | US; UK IDTA (International Data Transfer Agreement) applies |
| **Retention** | Prompt/response stored inside application for session + feedback history; Anthropic API has zero-data-retention policy (no training on data) |
| **Security measures** | Transport encryption, no-training contract, enterprise agreement, prompt scrubbing |
| **Automated decision-making** | No Art 22 decision — human (teacher) can always override |

## Activity 5 — Progress and performance tracking

| Field | Value |
|---|---|
| **Role** | Controller or Processor |
| **Purpose** | Track student progress, skill mastery, practice time |
| **Data subjects** | Students |
| **Data categories** | Performance metrics, skill estimates, completion data |
| **Recipients** | Hosting, (optionally) student's teacher/parent |
| **Lawful basis** | Contract |
| **Transfers** | UK / EEA |
| **Retention** | Active + 12 months; then anonymised |
| **Security measures** | As activity 1 |

## Activity 6 — Teacher dashboards and class management

| Field | Value |
|---|---|
| **Role** | Controller or Processor |
| **Purpose** | Teachers can see their students' progress and assign content |
| **Data subjects** | Teachers, students |
| **Data categories** | Teacher account data, student progress data (restricted to teacher's classes) |
| **Recipients** | Teachers (authorised by school) |
| **Lawful basis** | Contract |
| **Transfers** | UK / EEA |
| **Retention** | Duration of school contract + 6 months |
| **Security measures** | As activity 1; RBAC enforces class boundaries |

## Activity 7 — Parental consent collection and management

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Collect and verify parental consent for under-13s (Article 8) |
| **Data subjects** | Parents, under-13 children |
| **Data categories** | Parent name, email, relationship, timestamp, IP, consent version |
| **Recipients** | Consent provider (if any), internal records |
| **Lawful basis** | Legal obligation (Art 6(1)(c)) + contract |
| **Transfers** | UK / EEA |
| **Retention** | Life of account + 6 years audit trail |
| **Security measures** | Encryption, audit log, immutable record |

## Activity 8 — Customer support

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Respond to user queries, tickets, feedback |
| **Data subjects** | Students, teachers, parents |
| **Data categories** | Name, email, ticket content |
| **Recipients** | Support staff, helpdesk tool |
| **Lawful basis** | Contract (Art 6(1)(b)) |
| **Transfers** | UK / EEA |
| **Retention** | 24 months |
| **Security measures** | RBAC; no student PII in external CRMs where possible |

## Activity 9 — Product analytics (pseudonymised)

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Understand usage patterns to improve the product |
| **Data subjects** | Adults and (aggregated only) all users |
| **Data categories** | Pseudonymised user ID, feature use events, aggregated session data |
| **Recipients** | PostHog Cloud EU |
| **Lawful basis** | Legitimate interests (Art 6(1)(f)) — see LIA |
| **Transfers** | EU |
| **Retention** | 12 months rolling |
| **Security measures** | Pseudonymisation; PII scrubbing; child opt-out default-on |

## Activity 10 — Security monitoring and abuse prevention

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Detect fraud, abuse, bot traffic, brute-force attempts |
| **Data subjects** | All users |
| **Data categories** | IP, device, session logs, error traces |
| **Recipients** | Cloudflare, Sentry, internal security team |
| **Lawful basis** | Legitimate interests (Art 6(1)(f)) |
| **Transfers** | Mostly UK/EU; some Cloudflare global edge |
| **Retention** | 90 days (logs), 12 months (audit) |
| **Security measures** | As general |

## Activity 11 — Marketing communications (adults only)

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Send product updates, teacher / parent newsletters |
| **Data subjects** | Adults who have opted in |
| **Data categories** | Name, email, opt-in status, audit trail |
| **Recipients** | Postmark (ActiveCampaign LLC) |
| **Lawful basis** | Consent (Art 6(1)(a) + PECR) |
| **Transfers** | UK/EU or covered by IDTA |
| **Retention** | Until withdrawn + 24 months audit |
| **Security measures** | As general |
| **Children excluded** | Yes — no marketing to under-18s |

## Activity 12 — Billing and payments

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Process payments, issue invoices, comply with tax law |
| **Data subjects** | Paying adults, schools |
| **Data categories** | Billing name, address, transaction data, last-4 card digits |
| **Recipients** | Stripe (processor), accounting software |
| **Lawful basis** | Contract + legal obligation |
| **Transfers** | EEA (Stripe Ireland) |
| **Retention** | 6 years (UK tax law) |
| **Security measures** | PCI-DSS via Stripe; no raw card data stored |

## Activity 13 — Safeguarding response

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Respond to safeguarding concerns raised through content or reports |
| **Data subjects** | Children (subjects of concern), reporters |
| **Data categories** | Incident records, any content that triggered the concern, disclosures to statutory agencies |
| **Recipients** | Internal safeguarding lead; school DSL; police / social services where required |
| **Lawful basis** | Legal obligation (KCSIE); vital interests (urgent) |
| **Transfers** | UK only |
| **Retention** | 7 years per KCSIE guidance (or until child turns 25, whichever is longer) |
| **Security measures** | Restricted access; immutable logging |

## Activity 14 — Cookies and consent management

| Field | Value |
|---|---|
| **Role** | Controller |
| **Purpose** | Manage visitor cookie consent choices |
| **Data subjects** | All website visitors |
| **Data categories** | Consent choices, timestamp, version |
| **Recipients** | Internal; consent storage |
| **Lawful basis** | PECR (consent for non-essential); Art 6(1)(f) for audit trail |
| **Transfers** | UK/EEA |
| **Retention** | 12 months |
| **Security measures** | As general |
