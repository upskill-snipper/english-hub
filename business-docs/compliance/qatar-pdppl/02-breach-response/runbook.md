# Breach response runbook — Qatar PDPPL + UK GDPR

> **Trigger:** any event that could constitute a personal-data breach affecting users whose declared country of residence is Qatar, or where Qatar-resident data is implicated as part of a wider breach.
> **Hard deadline:** notify NCGAA within **72 hours** of the controller becoming aware of the breach where the breach is likely to cause **serious harm** to data subjects (PDPPL). Notify the UK ICO within 72 hours where the breach is likely to result in risk to rights and freedoms (UK GDPR Art. 33). These run concurrently — start both clocks together.
> **Owner:** Calum Johnston (DPO), dpo@theenglishhub.app
> **Last reviewed:** 2026-05-20

---

## T+0 (awareness)

1. **Open the incident ticket** — `INC-YYYY-MM-DD-<short-slug>` — in the internal tracker.
2. **Start two 72-hour clocks** — one for NCGAA, one for UK ICO. Record `awareness_datetime_utc`.
3. **Page the DPO** (Calum Johnston) regardless of detection channel.
4. **Page the on-call engineer** for containment.
5. **Snapshot the affected systems** (database point-in-time, S3 bucket inventory, recent logs) before any remediation overwrites evidence.

## T+0 to T+1 hour — triage

6. **Categorise the breach**: Confidentiality / Integrity / Availability / Combined.
7. **Determine scope**: which subprocessors, which datasets, how many records, how many data subjects, how many Qatar-resident data subjects, whether minors' data is implicated.
8. **Severity call**: Low / Medium / High / Very high.
9. **If minors' data implicated → page the DSL** (Lauren Johnson, +974 5187 9582, safeguarding@theenglishhub.app) within 1 hour.

## T+1 to T+4 hours — containment + counsel

10. **Containment** — revoke compromised tokens, rotate keys, block compromised IPs, force password reset, take affected sub-system out of rotation, etc. Document every action with timestamp.
11. **Engage Qatari counsel** (Clyde & Co Doha / DLA Piper Doha / Eversheds Doha — see PDMS index §3) for any breach severity ≥ Medium with Qatar-resident data subjects affected.
12. **Engage UK counsel** for any breach where ICO notification is in scope.

## T+4 to T+24 hours — investigation + first draft

13. **Forensic timeline** (Exhibit S2 of the NCGAA template) — running document; update at least every 4 hours during business hours.
14. **Draft the NCGAA notification** using `ncgaa-notification-template.md` in this directory. Fill every `{{INCIDENT-SPECIFIC}}` placeholder. Pre-filled controller details should not be modified.
15. **Draft the UK ICO notification** using the ICO online form.
16. **If sub-processor implicated** — demand a written breach notice from them (every sub-processor DPA includes this obligation). Attach as Exhibit S5.

## T+24 to T+72 hours — review + submit

17. **Qatari legal review** of the NCGAA notification — wet sign-off required before submission.
18. **DPO sign-off** on both notifications.
19. **Submit to NCGAA** via the stakeholder services portal at <https://ncsa.gov.qa/en/pages/personal-data-privacy-stakeholders-services> and email the NCGAA Compliance and Data Protection Department.
20. **Submit to UK ICO** via the breach report form at <https://ico.org.uk/for-organisations/report-a-breach/>.
21. **Record both submission references** in the incident ticket and in `submission-log.md` in this directory.

## T+72 hours — subject notification (if required)

22. **Decide on subject notification** — PDPPL requires notification to affected subjects where the breach is likely to result in significant risk to their rights. If yes → send the wording drafted at Exhibit S1 via the channel chosen in §7 of the notification.
23. **Status page update** if the breach is publicly visible.

## T+72 hours to T+30 days — remediation + post-incident review

24. **Remediation tracker** — every measure described in §6 of the NCGAA notification gets a ticket, owner, due date. Closed only when independently verified.
25. **Post-incident review (PIR)** within 30 days — root cause, control failures, lessons learned, changes to the PDMS.
26. **Update this runbook** if the PIR identified any process gap.
27. **Update the pre-filled NCGAA notification template** if any controller-side detail changed.
28. **Liaise with NCGAA** on any follow-up questions; record correspondence in the incident ticket.

---

## Escalation matrix

| Severity | Who to wake at 3am? |
|---|---|
| Low | Nobody. Open ticket, address next business day. |
| Medium | DPO. |
| High | DPO + on-call engineer + DSL (if minors). |
| Very high | DPO + on-call engineer + DSL + CEO + external counsel (Qatari + UK). |

## Communication channels

- **Internal incident channel**: `#incident-<ticket-id>` (Slack)
- **DPO direct**: dpo@theenglishhub.app + mobile (on call rotation)
- **DSL direct**: safeguarding@theenglishhub.app, +974 5187 9582 (24-hour SLA)
- **Status page**: status.theenglishhub.app (to be commissioned — pending; today, use a banner on the marketing site)

## Templates in this directory

- `ncgaa-notification-template.md` — pre-filled NCGAA breach notification (use this on a real incident)
- `runbook.md` — this file

## What this runbook deliberately does not contain

- Specific tooling / vendor names beyond those already in the public sub-processor list (avoid leaking attack surface)
- Internal phone numbers (held in the on-call directory, not version control)
- Customer names or any incident-specific data (those go in the incident ticket, not here)
