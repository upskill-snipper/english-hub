# Incident Response Policy

**Policy ID:** ISMS-012
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Policy defines how the Company detects, responds to, contains, eradicates, recovers from, and learns from information security incidents. It gives effect to Article 33 (notification of a personal data breach to the supervisory authority) and Article 34 (communication of a personal data breach to the data subject) of the UK GDPR, as well as the Cyber Essentials Plus audit expectation that an incident response plan exists and is rehearsed.

## 2. Scope

Every security incident or suspected incident affecting any in-scope asset, user, service, network, or dataset. This includes:

- Malware detection
- Phishing or social engineering attempts (successful or attempted)
- Unauthorised access or suspected compromise
- Lost or stolen devices
- Unintended disclosure of personal data (e.g. email sent to the wrong recipient)
- Denial of service
- Data corruption or loss
- Physical intrusion to the home office
- Policy breaches by staff or contractors
- Third-party vendor incidents that may affect the Company's data

## 3. Definitions

| Term | Definition |
|---|---|
| **Event** | Any observable change in system state |
| **Incident** | An event (or series of events) that has a negative impact (or potential impact) on confidentiality, integrity, or availability |
| **Security breach** | An incident resulting in a confirmed compromise of a security control |
| **Personal data breach** | A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data (UK GDPR Article 4(12)) |
| **Notifiable breach** | A personal data breach that is likely to result in a risk to the rights and freedoms of natural persons — notifiable to the ICO within **72 hours** |
| **High-risk breach** | A breach likely to result in a **high** risk to the rights and freedoms of natural persons — also notifiable to affected data subjects without undue delay |

## 4. Severity classification

| Severity | Criteria | Examples |
|---|---|---|
| **SEV-1 Critical** | Active, ongoing compromise with significant impact; possible regulatory breach; child data at risk | Ransomware in progress; confirmed data exfiltration of pupil data; public-facing service down with data exposure |
| **SEV-2 High** | Confirmed incident with material impact but contained | Lost laptop with sensitive data, confirmed phishing credential theft, unauthorised access detected and blocked |
| **SEV-3 Medium** | Limited or potential impact | Attempted phishing, suspicious login alert, minor policy breach |
| **SEV-4 Low** | Administrative or minor | Failed test, near-miss, dismissed anti-malware alert |

## 5. Lifecycle — the 6 phases

The Company's incident response lifecycle follows NIST SP 800-61 / NCSC guidance:

### 5.1 Detect
Sources of detection include:
- Anti-malware alerts
- Cloud provider security alerts (Google Workspace, Supabase, Vercel, GitHub, Cloudflare)
- Staff reports
- Customer reports
- Security monitoring in the Company's own platform (error rates, anomalous auth)
- NCSC alerts, vendor advisories

**Any staff member who observes something unusual reports it immediately.**

### 5.2 Triage
Within **1 hour** of detection (during working hours) or **4 hours** (out of hours) the CTO/DPO:

1. Confirms whether it is an incident or a false positive
2. Assigns a severity
3. Opens an incident ticket with a unique ID (IR-YYYY-NNN)
4. Assembles any additional help needed (external security consultant if required)
5. Starts an incident log — a running, timestamped, append-only record of actions, observations, decisions, and evidence

### 5.3 Contain
Actions are taken to stop the incident spreading or worsening:

- **Network containment:** disconnect affected devices from the network; revoke tokens and sessions
- **Account containment:** disable compromised accounts, force password reset, revoke MFA devices
- **Service containment:** enable restrictive WAF rules; put affected systems in maintenance mode
- **Evidence preservation:** before any destructive containment action, snapshots and logs are captured for forensic purposes

Short-term containment (immediate) is distinguished from long-term containment (applied after understanding the scope).

### 5.4 Eradicate
Remove the cause of the incident:

- Malware cleaned or infected device wiped and re-imaged
- Compromised credentials rotated across all systems
- Vulnerabilities exploited by the attacker patched
- Backdoors or persistence mechanisms removed
- Any other artefacts of the attacker's presence destroyed

Eradication is only considered complete when the CTO/DPO is confident no attacker persistence remains.

### 5.5 Recover
Restore systems and data to full operation:

- Restore from clean backups if data was lost or corrupted
- Re-enable services in a measured way, watching for indicators of recurrence
- Reset user credentials and require fresh MFA enrolment if compromised
- Monitor for signs of recurrence for a period proportionate to the incident (typically 30 days for SEV-1/2)

### 5.6 Lessons learned
Within **7 days** of incident closure, the CTO/DPO holds a post-incident review covering:

1. What happened — factual timeline
2. Root cause — technical and process
3. What worked well in the response
4. What did not work well
5. Concrete improvements (each with an owner and deadline)
6. Whether any policy, control, or training needs to be updated

The review output is recorded in the incident log. For SEV-1/2 incidents, a summary is shared with the Director.

## 6. Personal data breach — UK GDPR obligations

Where an incident involves personal data, the Company applies the additional UK GDPR process:

### 6.1 Assessment
The CTO/DPO assesses within **24 hours** of detection:
- Is it a "personal data breach" under UK GDPR Article 4(12)?
- Is it likely to result in a risk to the rights and freedoms of natural persons? → **notifiable to the ICO**
- Is it likely to result in a **high** risk? → **notifiable to data subjects too**

### 6.2 ICO notification (within 72 hours)
If notifiable, the Company reports to the Information Commissioner's Office via `ico.org.uk/for-organisations/report-a-breach/` within **72 hours** of becoming aware of the breach. The report includes:
- The nature of the breach
- Categories and approximate number of data subjects concerned
- Categories and approximate number of personal data records concerned
- The name and contact details of the DPO
- The likely consequences
- Measures taken or proposed to address the breach

If all information is not available within 72 hours, the Company still notifies within 72 hours and provides additional information in phases.

### 6.3 Data subject notification
Where the breach is likely to result in a **high risk** to the rights and freedoms of natural persons, the Company notifies affected data subjects **without undue delay**. The notification:
- Is in clear, plain language
- Describes the nature of the breach
- Provides the DPO's contact details
- Describes the likely consequences
- Describes the measures taken

For incidents involving pupil personal data, the Company notifies the school or MAT (the data controller, where the Company is processor) immediately so the controller can meet its own obligations to the ICO and to parents.

### 6.4 Internal breach log
Every personal data breach — whether notifiable or not — is recorded in the breach log (`../gdpr/breach-log.md` or equivalent). This is a UK GDPR Article 33(5) requirement regardless of whether the breach is notified to the ICO.

## 7. Roles and contacts

| Role | Responsibility | Contact |
|---|---|---|
| **Incident Manager (CTO/DPO)** | Runs the response; decision authority; primary communicator | [Direct phone + email] |
| **Director** | Executive decisions; customer and investor communication for SEV-1/2 | [Direct phone + email] |
| **External incident responder** | Specialist forensics if needed | [Retained security consultant TBD — see §11] |
| **Legal counsel** | Legal advice on notification obligations, regulatory exposure | [Retained solicitor TBD] |
| **ICO** | Regulatory reporting | 0303 123 1113 / `ico.org.uk/for-organisations/report-a-breach/` |
| **Action Fraud** | Cybercrime reporting | 0300 123 2040 / `actionfraud.police.uk` |
| **NCSC** | Non-mandatory reporting for serious incidents | `report.ncsc.gov.uk` |

## 8. Communication

- **Internal:** all staff are informed of the incident at a level appropriate to their role; specific details are shared on a need-to-know basis
- **Customer:** for SEV-1/2 incidents affecting customers, an honest, timely communication is issued via the Company's status page and/or direct email
- **Press/public:** no communication with the press is made without Director approval; if a statement is needed, legal counsel is consulted first
- **Vendors:** affected vendors are notified if their service may have been used as the vector or if their involvement is needed for response

Holding statements are pre-drafted in Appendix B so time is not lost at the point of crisis.

## 9. Exercising the plan — tabletop

The incident response plan is tested at least **annually** via a tabletop exercise. The CTO/DPO runs through a scenario (e.g. "ransomware on the production database") with any involved staff and walks through the response. Findings are recorded and improvements made.

In the readiness phase ahead of CE+ certification, at least one tabletop exercise is performed and documented in the evidence folder.

## 10. Evidence and retention

- Incident logs are retained for **3 years** minimum.
- Personal data breach records are retained indefinitely (ICO expectation).
- Evidence collected during an incident (screenshots, logs, forensic images) is retained in a secure, access-controlled location for the duration of any investigation and at least 12 months after closure.

## 11. Pre-engagement with external help

The Company does not currently have a retained incident response firm. In the event of a SEV-1 incident, the CTO/DPO will engage:

- **NCSC** — for free advice via `report.ncsc.gov.uk`
- **The cyber insurance carrier** (via IASME-bundled £25,000 policy or any upgraded policy) — which typically provides 24/7 incident response support as part of the claim
- **A retained security consultancy** — to be selected during the readiness phase so the contact is on hand before the first real incident

This is a known gap and is logged in the risk register.

## 12. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 13. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________

---

## Appendix A — Incident log template

```
Incident ID:       IR-YYYY-NNN
Detected at:       [timestamp with timezone]
Reported by:       [name]
Severity:          [SEV-1 / 2 / 3 / 4]
Summary:           [one-line description]
Affected systems:  [list]
Affected data:     [type + approximate volume]
Personal data?     [yes / no]
Notifiable?        [yes / no / tbd]

TIMELINE
[timestamp]  [action / observation / decision]
[timestamp]  ...

CONTAINMENT
[actions taken]

ERADICATION
[actions taken]

RECOVERY
[actions taken]

LESSONS LEARNED
[bullets]

CLOSURE
Closed at:     [timestamp]
Closed by:     [name]
Post-mortem:   [link]
```

## Appendix B — Holding statements

**Customer-facing SEV-1 holding statement (template):**

> We are aware of a security issue affecting The English Hub platform. Our team is actively investigating and working to resolve the issue. The safety of children's data is our top priority. We will provide an update within [X hours]. If you have urgent questions, please contact [support email].

**Regulator-facing initial notification template:** use the ICO online form. Do not delay notification awaiting complete information; additional information can be provided in phases.
