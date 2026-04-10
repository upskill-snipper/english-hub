# Vendor Risk Management Policy

**Policy ID:** ISMS-014
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

The Company is cloud-native and relies on third-party vendors for almost every function of its platform and operations. A vendor compromise can cause the same harm as a direct compromise. This Policy sets the process for assessing, onboarding, monitoring, and offboarding third-party vendors, and for ensuring the Company's supply chain meets the security expectations of its own customers and regulators.

## 2. Scope

Every third-party vendor or service used by the Company. This includes:

- **Processors** — vendors that process personal data on behalf of the Company (Supabase, Vercel, Google Workspace, Stripe, OpenAI, etc.)
- **Sub-processors** — vendors used by our processors (e.g. AWS underpinning Supabase); tracked indirectly via processor DPAs
- **Infrastructure providers**
- **Development tools** (GitHub, Linear, Notion, 1Password, Slack)
- **Professional services** (accountants, solicitors, insurers)
- **Hardware suppliers**

## 3. Principles

1. **Due diligence before onboarding.** No vendor is used for production or sensitive data until due diligence is complete.
2. **Minimum data.** Vendors are given the minimum personal data needed to provide their service.
3. **Data Processing Agreements (DPAs).** Every vendor that processes personal data has a signed DPA in place that meets UK GDPR Article 28 requirements.
4. **Contract-level commitments.** Every vendor with access to sensitive data makes contractual commitments on security, breach notification, and sub-processing.
5. **Continuous monitoring.** Vendor status is monitored over the lifetime of the relationship.
6. **Exit planning.** Every critical vendor has an exit plan.

## 4. Onboarding due diligence

Before adopting a new vendor for anything beyond casual evaluation, the CTO/DPO performs due diligence proportionate to the risk:

### 4.1 Low-risk vendor (no personal data; no sensitive business data)
- Check the vendor exists and is reputable
- Check basic terms of service and privacy policy
- Record in the vendor register

### 4.2 Medium-risk vendor (internal or confidential data; no personal data)
In addition to §4.1:
- Check for at least one of: SOC 2 Type II, ISO 27001, Cyber Essentials, or equivalent
- Review security documentation on the vendor's trust centre
- Check for a clear breach-notification commitment
- Check for data location commitments (EU/UK preferred for data residency)

### 4.3 High-risk vendor (processes personal data, especially child data)
In addition to §4.1 and §4.2:
- **Signed DPA** incorporating the UK International Data Transfer Agreement (IDTA) addendum if transferring data outside the UK
- **SOC 2 Type II or ISO 27001 report** reviewed
- **List of sub-processors** reviewed and monitored for changes
- **Data location commitment** — EU/UK region preferred; non-EU transfers assessed with a Transfer Impact Assessment (TIA)
- **Data minimisation check** — is the vendor receiving the minimum data needed?
- **Retention check** — does the vendor delete data on contract termination?
- **Incident / breach notification clause** — vendor must notify within 24 hours of confirmed breach
- **Children's Code alignment** — for vendors touching child data, review alignment to ICO Children's Code principles

## 5. Current vendor register (snapshot as of 2026-04-10)

| Vendor | Service | Risk tier | Personal data? | Region | Certifications | DPA on file | Notes |
|---|---|---|---|---|---|---|---|
| **Supabase** | Postgres DB, Auth, Storage | High | Yes (child) | EU (Ireland) | SOC 2 Type II | Yes | Core data store |
| **Vercel** | Hosting, serverless compute | High | Yes (in transit) | Global edge | SOC 2 Type II, ISO 27001 | Yes | No long-term storage |
| **Cloudflare** | DNS, CDN, WAF | Medium | Transit only | Global | SOC 2 Type II, ISO 27001 | Yes | Edge only |
| **Google Workspace** | Email, docs, drive | High | Yes | EU | SOC 2, ISO 27001, ISO 27018 | Yes | DPA in admin console |
| **Stripe** | Payments | High | Yes (financial) | Multi-region | PCI-DSS L1, SOC 1/2 | Yes | PCI scope delegated |
| **OpenAI API** | AI inference | High | Yes (transient) | US | SOC 2 Type II | Yes | ZDR enabled |
| **GitHub** | Source code | Medium | Limited | US | SOC 2 Type II | Yes | Code + issues |
| **Notion** | Internal docs | Medium | Staff data | US | SOC 2, ISO 27001 | Yes | No child data |
| **Slack** | Internal chat | Medium | Staff data | US | SOC 2, ISO 27001 | Yes | No child data |
| **Linear** | Issue tracking | Low | Staff data | US | SOC 2 Type II | Yes | No child data |
| **1Password** | Password manager | Medium | Secrets | Hosted in Canada / EU | SOC 2, ISO 27001, ISO 27018 | Yes | Zero-knowledge encryption |

The register is maintained in full detail in `../gdpr/vendor-register.md` (future) or as a living spreadsheet in the evidence folder. A quarterly refresh is performed by the CTO/DPO.

## 6. Contractual minimums for high-risk vendors

For any vendor processing personal data, the contract (or the DPA) must include:

1. Description of the processing (purpose, duration, nature, type of personal data, categories of data subjects)
2. Obligation to process only on documented instructions from the controller
3. Confidentiality commitment for the vendor's personnel
4. Article 32-compliant technical and organisational measures
5. Sub-processor engagement conditions
6. Assistance to the controller in meeting data subject rights
7. Assistance with breach notification (≤ 24 hours to notify the Company of a confirmed breach)
8. Deletion or return of data at end of contract
9. Audit rights
10. International transfer mechanism (IDTA or SCCs as applicable)

## 7. Ongoing monitoring

Quarterly, the CTO/DPO checks:

- Vendor's status / incident page for any material events in the quarter
- Sub-processor list changes (subscribe to change notifications where available)
- Certification status (has their SOC 2 been re-audited? Is their ISO 27001 current?)
- Any publicly-reported breach affecting the vendor
- Any change to the vendor's data residency or ownership

If a vendor has a material negative event, the CTO/DPO triggers a mini-assessment and, if necessary, an exit plan.

## 8. Vendor incidents

If a vendor notifies the Company of a breach or incident affecting the Company's data:

1. Treat as a SEV-2 or higher incident under the Incident Response Policy
2. Assess whether the Company has an onward notification obligation to the ICO or to affected data subjects (personal data breach assessment)
3. Record in the breach log
4. Decide whether continued use of the vendor is appropriate or whether termination and migration are warranted

## 9. Exit planning

For each critical vendor (Supabase, Vercel, Google Workspace, Stripe), the CTO/DPO maintains a short exit plan noting:

- What alternative providers exist
- Approximate migration effort
- Whether a migration can be carried out using standard data exports
- Whether pre-prepared fallback configuration exists

Exit plans are reviewed annually. Critical vendors without a practical exit plan are escalated to the Director as a concentration risk.

## 10. Data deletion on termination

When the Company stops using a vendor:

- Personal data is exported (if needed) and then deleted by the vendor per the DPA
- Confirmation of deletion is obtained where possible
- Access credentials are revoked
- The vendor is removed from the vendor register (with an archive entry noting end date)

## 11. Vendor risks to monitor

Known, ongoing risks worth highlighting:

- **Concentration risk on Vercel and Supabase** — both are critical. A fallback plan exists for Vercel (§5.3 BCP) and a backup-and-restore plan for Supabase (§4.1 Data Backup Policy).
- **International data transfers (OpenAI, GitHub, Stripe, Slack, Notion, Linear)** — covered by each vendor's UK IDTA / SCCs. Transfer Impact Assessments are on file for each where relevant.
- **Sub-processor sprawl** — each high-risk vendor has its own sub-processor list. Tracked but not actively managed at individual sub-processor level (disproportionate for our size).

## 12. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 13. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
