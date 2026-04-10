# Business Continuity Policy

**Policy ID:** ISMS-013
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Business Continuity Policy ("BCP") ensures that The English Hub Ltd can continue to deliver its product to customers — and meet its regulatory obligations — during and after a disruptive event. It is proportionate to the Company's size and risk profile.

## 2. Scope

All business functions of the Company:

- Customer-facing product platform (the learning application)
- Customer support and communication
- Payment processing and revenue recognition
- Regulatory and contractual obligations (UK GDPR, contracts with schools/MATs)
- Internal operations (email, documentation, finance)

## 3. Relationship to the Incident Response Policy

The Incident Response Policy (ISMS-012) covers the tactical response to security incidents. This BCP covers the wider continuity of business operations — including non-security events such as prolonged vendor outage, loss of the sole working device, illness or incapacity of a key person, or a family emergency for the sole Director.

## 4. Business impact analysis

The following functions are ranked by criticality. Criticality drives the priority of restoration.

| Function | Max tolerable outage | RTO | Dependencies | Notes |
|---|---|---|---|---|
| **Customer-facing platform (product)** | 4 hours (working day) | 4 hours | Vercel, Supabase, Cloudflare | Revenue + reputation + regulatory |
| **Authentication service** | 4 hours | 4 hours | Supabase Auth | Users cannot log in without this |
| **Payment processing** | 24 hours | 24 hours | Stripe | New signups and recurring billing |
| **Customer support email** | 24 hours | 24 hours | Google Workspace | Responsiveness affects trust |
| **Source code access** | 24 hours | 24 hours | GitHub | Blocks deployments |
| **Internal documents** | 72 hours | 72 hours | Google Drive, Notion | Operational inconvenience |
| **Internal chat** | 72 hours | 72 hours | Slack | Workaround: email |
| **Internal issue tracking** | 1 week | 1 week | Linear | Workaround: Markdown in Git |

## 5. Scenario plans

### 5.1 Scenario A — Primary laptop lost, stolen, or destroyed

**Likelihood:** medium
**Impact:** medium (short-term disruption to work until replacement)

**Plan:**
1. CTO/DPO reports the incident per Incident Response Policy §3–5
2. Remote wipe initiated via Find My Mac / equivalent
3. Secondary device (Linux laptop or spare) brought into service immediately
4. Access to cloud services is re-established using the password manager on the secondary device
5. A replacement primary device is procured within 5 business days
6. Asset inventory is updated
7. The lost device is treated as a potential data breach until confirmed wiped

### 5.2 Scenario B — Supabase production outage

**Likelihood:** low (Supabase has strong uptime)
**Impact:** critical (customer-facing platform unavailable)

**Plan:**
1. Confirm via Supabase status page and direct console check
2. Customer-facing status page updated with an acknowledgement
3. Customer support email auto-reply updated
4. If the outage is prolonged (> 1 hour with no ETA), a read-only fallback is considered (e.g. a static holding page)
5. If the outage threatens the 4-hour RTO, the CTO/DPO engages Supabase support and considers a restore to a secondary Supabase project from the most recent backup
6. Post-incident, the CTO/DPO evaluates whether to diversify to a secondary Postgres provider (Neon, RDS, or self-managed) as an insurance measure

### 5.3 Scenario C — Vercel outage

**Likelihood:** low
**Impact:** critical (customer-facing platform unavailable)

**Plan:**
1. Confirm via Vercel status page
2. Status page updated
3. If prolonged, the CTO/DPO can re-deploy the front-end to a fallback provider (Cloudflare Pages or Netlify) from the same source repository, using pre-prepared fallback config. The fallback deployment is tested at least once a year during the BCP dry-run.

### 5.4 Scenario D — Google Workspace outage

**Likelihood:** very low
**Impact:** medium (email and document editing unavailable)

**Plan:**
1. Confirm via Google Workspace status
2. Use personal email as emergency fallback for urgent customer communication (acknowledge the workaround, do not send personal data over personal email)
3. Revert to the cloud store as soon as service returns

### 5.5 Scenario E — Cyber attack (ransomware, account compromise)

Covered by Incident Response Policy §5. From the BCP perspective, the focus is on ensuring:
- Backups are clean and accessible (§5.1 Data Backup Policy)
- A clean re-deployment of the Company's own platform is possible
- Customer and regulatory communications are handled per Incident Response Policy §6 and §8

### 5.6 Scenario F — Director incapacity (illness, accident, bereavement)

**Likelihood:** medium
**Impact:** potentially severe — the Company currently has one person

This is the single most significant continuity risk for a sole-founder Company.

**Plan:**
1. **Break-glass documentation pack** — a sealed, encrypted package ("operational continuity pack") held by a trusted third party (e.g. spouse, lawyer, or co-director once appointed). The pack contains:
   - Location of the 1Password Secret Key
   - A statement of intent authorising the trusted party to notify specific individuals (investor, lawyer, key customer) in the event of incapacity
   - Contact list: lawyer, accountant, key customers, investor, next-of-kin
   - Instructions for placing the customer-facing platform into a "graceful degraded" state if needed
2. **Designated interim operator** — the Company will appoint, during the readiness phase, a trusted technical individual who can be engaged to keep the platform running for up to 30 days if the Director is incapacitated. This is a contractual arrangement, not a dependency.
3. **Key person insurance** — considered during the Year 2 budget cycle.
4. **Will and power of attorney** — the Director maintains a current will and a lasting power of attorney. Both documents reference the existence of the operational continuity pack.

This is a known high-impact risk. It is reviewed every 6 months.

### 5.7 Scenario G — Home office inaccessible (fire, flood, family emergency)

**Likelihood:** low
**Impact:** low to medium (short-term inconvenience; cloud model means data is not lost)

**Plan:**
1. CTO/DPO relocates to a safe alternative location (family, co-working space, hotel)
2. Work continues on the laptop, which is carried
3. Any data in the home office that is not also in the cloud is considered lost (there should be none — the home office holds no unique data)
4. Long-term relocation plans are made if the situation persists beyond 7 days

## 6. Communication during a continuity event

- **Customers:** status page updated within 15 minutes of the event being confirmed; email update within 1 hour; further updates every 4 hours or when material new information is available
- **Investors:** informed at the Director's discretion; for material events, same-day notification
- **Regulators:** per Incident Response Policy §6 if personal data is involved
- **Staff (including contractors):** informed via Slack or email as soon as the situation is understood
- **Vendors:** engaged as needed for recovery

## 7. Testing and exercising

- The BCP is exercised via a **tabletop walk-through at least annually**.
- One scenario is selected per exercise; the CTO/DPO walks through the response step-by-step, identifies gaps, and improves the plan.
- A technical fallback test (e.g. re-deploying the front-end to a fallback provider) is performed annually where practical.
- Exercise results are documented in the evidence folder.

## 8. Maintenance

- This Policy is reviewed annually and on any material change to the business (new critical vendor, new function, team growth).
- Scenario plans are reviewed for accuracy each quarter as part of the general compliance review cycle.
- Contact lists and the break-glass pack are refreshed every 6 months.

## 9. Interaction with customer contracts

Many customer contracts (particularly with MATs and local authorities) require a stated RTO/RPO and a continuity plan as an appendix. This Policy is the source document for those contractual statements. Any customer-specific commitment that exceeds the standard RTO/RPO here is captured in the specific contract and referenced in the risk register.

## 10. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 11. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
