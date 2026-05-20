# NCGAA breach notification — pre-filled template

> **Purpose:** to keep the 72-hour PDPPL breach-notification clock from being burned on form-finding and controller-detail entry. This template is updated whenever controller contact details, sub-processors, or product scope change materially. On a real incident, copy this file, fill in the **{{INCIDENT-SPECIFIC}}** placeholders, route through the DPO + Qatari legal review, and submit to NCGAA within 72 hours of becoming aware of the breach.
> **Submission route:** NCGAA stakeholder services portal — <https://ncsa.gov.qa/en/pages/personal-data-privacy-stakeholders-services> — plus an email to the NCGAA Compliance and Data Protection Department once the case reference is allocated.
> **Last refreshed:** 2026-05-20

---

## Section 1 — Controller identification (PRE-FILLED)

| Field | Value |
|---|---|
| Legal name | Upskill Energy Limited |
| Country of incorporation | United Kingdom (England and Wales) |
| Companies House number | 16511479 |
| Trading name | The English Hub |
| Service URL | https://theenglishhub.app |
| Article 16 permit reference (if granted) | _To be inserted on grant_ |
| ICO registration (UK) | ZC016690 |
| Lead supervisory authority (UK) | UK Information Commissioner's Office (ICO) |
| Qatar contact point | dpo@theenglishhub.app (monitored, 24-hour acknowledgement) |
| DPO | Calum Johnston, dpo@theenglishhub.app, mobile +44 _[on file with NCGAA, not published]_ |
| DSL | Lauren Johnson, safeguarding@theenglishhub.app, +974 5187 9582 |
| Registered office | Available to NCGAA on written request (not published) |

## Section 2 — Notifier (PRE-FILLED)

| Field | Value |
|---|---|
| Name | Calum Johnston |
| Role | Data Protection Officer |
| Email | dpo@theenglishhub.app |
| Phone | _[on file with NCGAA — confirm at submission]_ |
| Acting on behalf of | Upskill Energy Limited (controller) |

## Section 3 — Nature of the breach ({{INCIDENT-SPECIFIC}})

| Field | Value |
|---|---|
| Date/time the breach occurred (UTC) | **{{INCIDENT-DATETIME-UTC}}** |
| Date/time the controller became aware (UTC) | **{{AWARENESS-DATETIME-UTC}}** |
| Time elapsed before this notification | **{{HOURS-ELAPSED}}** hours (target: ≤72) |
| Category of breach | ☐ Confidentiality (unauthorised disclosure/access) ☐ Integrity (unauthorised alteration) ☐ Availability (unauthorised loss of access) ☐ Combined |
| Brief description (≤200 words) | **{{DESCRIPTION}}** |
| Root cause (preliminary) | **{{ROOT-CAUSE-PRELIM}}** |
| Sub-processor implicated (if any) | **{{SUB-PROCESSOR-NAME or "none"}}** |

## Section 4 — Personal data concerned ({{INCIDENT-SPECIFIC}})

| Field | Value |
|---|---|
| Categories of data | ☐ Account identifiers ☐ Authentication data ☐ Educational records ☐ Essay content ☐ Linked-account (parent/guardian) data ☐ Payment data ☐ Consent records ☐ Technical / security ☐ Other: **{{OTHER}}** |
| Approximate number of records affected | **{{COUNT-RECORDS}}** |
| Approximate number of data subjects affected | **{{COUNT-SUBJECTS}}** |
| Special-nature data involved? | ☐ Minors' data ☐ Health ☐ Religious beliefs ☐ Ethnic origin ☐ Criminal records ☐ None |
| Qatar-resident data subjects affected (approx.) | **{{COUNT-QATAR-SUBJECTS}}** |
| Volume of data exfiltrated / altered / lost | **{{VOLUME-EST}}** |

## Section 5 — Likely consequences ({{INCIDENT-SPECIFIC}})

Worst-case for the affected data subjects:

**{{CONSEQUENCES-NARRATIVE}}**

Severity assessment (controller's view): ☐ Low ☐ Medium ☐ High ☐ Very high.
Rationale: **{{SEVERITY-RATIONALE}}**

## Section 6 — Measures taken or proposed ({{INCIDENT-SPECIFIC}})

Already taken:
- **{{MEASURE-1}}**
- **{{MEASURE-2}}**
- **{{MEASURE-3}}**

Proposed within next 72 hours:
- **{{NEXT-72H-MEASURE-1}}**
- **{{NEXT-72H-MEASURE-2}}**

Proposed within next 30 days:
- **{{NEXT-30D-MEASURE-1}}**

## Section 7 — Notification to affected data subjects ({{INCIDENT-SPECIFIC}})

| Field | Value |
|---|---|
| Will affected subjects be notified directly? | ☐ Yes ☐ No |
| If no, reason (PDPPL: only required where risk warrants) | **{{REASON-IF-NO}}** |
| If yes, channel | ☐ Email ☐ In-app banner ☐ Both ☐ Other: **{{CHANNEL-OTHER}}** |
| Planned notification date/time (UTC) | **{{SUBJECT-NOTIFICATION-DATETIME}}** |
| Wording of the subject notification (attach) | See **Exhibit S1** |

## Section 8 — Notifications to other authorities

| Authority | Notified? | Date/time | Reference |
|---|---|---|---|
| UK ICO (controller seat) | ☐ Yes ☐ No (if no, reason: **{{UK-ICO-REASON}}**) | **{{UK-ICO-DATETIME}}** | **{{UK-ICO-REF}}** |
| Lead supervisory authority in any EEA state (Supabase EU) | ☐ Yes ☐ No | **{{EEA-DATETIME}}** | **{{EEA-REF}}** |
| Other (e.g., law enforcement) | **{{OTHER-AUTHORITY}}** | **{{OTHER-DATETIME}}** | **{{OTHER-REF}}** |

## Section 9 — Exhibits to attach

- S1 — Subject notification draft (if Section 7 = yes)
- S2 — Forensic / RCA timeline (running document — update as the investigation progresses)
- S3 — Affected-records list (encrypted; available to NCGAA on secure transfer)
- S4 — Containment evidence (logs, system snapshots)
- S5 — Sub-processor breach notice (if Section 3 implicates a sub-processor)

---

## Internal escalation path (NOT submitted to NCGAA)

1. Whoever detects → page the DPO via _[on-call rotation — confirm at next runbook review]_
2. DPO opens the incident ticket and starts the 72-hour clock
3. DSL (Lauren Johnson) paged within 1 hour if minors' data implicated
4. Legal counsel (Qatari + UK) paged within 4 hours
5. Engineering on-call paged immediately for containment
6. Initial notification to NCGAA filed using this template within 72 hours of awareness
7. Subject notification (if required) filed within 72 hours of awareness, ideally same window as NCGAA
8. Post-incident review within 30 days; PDMS index + this template refreshed with any lessons learned
