# Data Breach Register

**Upskill Energy Limited t/a The English Hub**
**Company No.** 16511479 | **ICO Reg.** ZC016690
**Article 33(5) UK GDPR**
**Owner:** DPO (dpo@theenglishhub.app)
**Last reviewed:** 2026-04-12

> This register records all **personal data breaches** — defined in Article 4(12) UK GDPR as *"a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed."*
>
> Article 33(5) requires us to document **every** personal data breach, including ones we decide not to notify the ICO about.

---

## How to use this register

1. **Detect and report internally** — any staff member who suspects a breach must report it to **security@theenglishhub.app** immediately.
2. **Triage (within 4 hours)** — the DPO or incident commander assesses severity and whether personal data is affected.
3. **Contain** — take immediate steps to stop data leaving or being modified further.
4. **Assess (within 24 hours)** — confirm scope, affected data subjects, categories, and likely impact.
5. **Notify (within 72 hours)** — if the breach is likely to result in a risk to rights and freedoms, notify the ICO (Article 33). If likely to result in a **high** risk, also notify affected data subjects (Article 34).
6. **Notify schools** — where The English Hub is a processor, notify the controller (school) **within 24 hours** of becoming aware.
7. **Remediate** — fix root cause.
8. **Post-incident review** — conduct a blameless post-mortem.
9. **Record** — complete a full entry below.

**ICO notification:** Use ico.org.uk/for-organisations/report-a-breach/ or call 0303 123 1113 in office hours.

**Penalty for late notification:** Up to £8.7M or 2% of global annual turnover.

---

## Severity rubric

We apply a two-axis rubric: **likelihood of risk** × **impact**.

| Severity | Criteria | Examples | Action |
|---|---|---|---|
| **CRITICAL** | High likelihood, high impact | Credentials dump, full DB exfil, student data exposed publicly | Notify ICO, notify data subjects, notify schools, public statement |
| **HIGH** | High likelihood **or** high impact | Lost laptop with student data, misdirected email with class list | Notify ICO, notify affected schools, consider data subject notification |
| **MEDIUM** | Medium likelihood, medium impact | Staff accidentally viewed unrelated student data; contained phishing compromise | Log + remediate; decide on ICO notification case-by-case |
| **LOW** | Low likelihood, low impact | Internal misrouting (caught before anyone read); internal-only leak | Log + remediate; no external notification |
| **NEAR-MISS** | No actual breach | Alerting caught an attempted incident before access | Log for learning; update controls |

---

## Decision tree — is it an Article 33 notifiable breach?

```
Personal data affected?
  │
  ├── No → Log as security event; no GDPR obligation
  │
  └── Yes → Is it unlikely to result in risk to rights/freedoms?
              │
              ├── Yes → Log in this register; NO ICO notification; document reasoning
              │
              └── No → NOTIFY ICO within 72 hours
                        │
                        └── Is it likely to result in HIGH risk?
                                │
                                └── Yes → Also notify data subjects without undue delay
```

---

## Breach log

> Use one entry per incident. New incidents should be added to the top.

### Entry template

```
### EH-BR-XXXX — [Short title]
- **Detected:** YYYY-MM-DD HH:MM UTC
- **Reported by:** [name / role]
- **Incident commander:** [name]
- **Status:** [Open / Contained / Closed]
- **Severity:** [Critical / High / Medium / Low / Near-miss]
- **Containment time:** [minutes from detection]
- **Categories of personal data:** [list]
- **Data subjects affected:** [# and category, e.g. ~120 students across 3 schools]
- **Root cause:** [brief]
- **Sequence:**
  - HH:MM — [event]
  - HH:MM — [event]
- **Containment actions:** [list]
- **ICO notified?** Yes / No — justification
- **Data subjects notified?** Yes / No — justification
- **Schools (controllers) notified?** Yes / No — when
- **Remediation:** [list]
- **Post-mortem link:** [internal doc]
- **Lessons and follow-ups:** [list]
- **Closed on:** [date]
- **Record retention until:** [date + 3 years]
```

---

### No breaches recorded to date.

> Example entries below — delete or replace before use.

---

### EH-BR-0001 — [EXAMPLE — DELETE BEFORE USE]

- **Detected:** `[REPLACE WITH DATE/TIME]`
- **Reported by:** `[REPLACE WITH name / role]`
- **Incident commander:** `[REPLACE WITH name]`
- **Status:** `[REPLACE WITH Closed]`
- **Severity:** `[REPLACE WITH severity]`
- **Containment time:** `[REPLACE WITH minutes]`
- **Categories of personal data:** `[REPLACE: e.g. student names, emails, year groups]`
- **Data subjects affected:** `[REPLACE: e.g. approx 5 students at 1 school]`
- **Root cause:** `[REPLACE: e.g. misconfigured RLS policy allowed teacher to see a class they were not assigned to]`
- **Sequence:**
  - `HH:MM — deploy released with broken RLS policy`
  - `HH:MM — teacher reported seeing wrong class list`
  - `HH:MM — on-call engineer rolled back deploy`
  - `HH:MM — DPO notified, triage completed`
  - `HH:MM — school DSL contacted`
- **Containment actions:** Rolled back deploy; invalidated affected sessions; expanded RLS test coverage.
- **ICO notified?** `[REPLACE WITH Yes/No + reason]`
- **Data subjects notified?** `[REPLACE WITH Yes/No + reason]`
- **Schools notified?** `[REPLACE WITH Yes — HH:MM via email]`
- **Remediation:**
  - Added automated RLS regression tests
  - Added second review gate for auth/tenancy changes
- **Post-mortem:** `[REPLACE WITH internal link]`
- **Lessons:** Add integration test that asserts teacher of class X cannot see class Y. Add deploy checklist item: "has auth model changed?"
- **Closed on:** `[REPLACE WITH DATE]`
- **Record retention until:** `[REPLACE WITH DATE]` (3 years after closure)

---

## Annual summary

| Year | Total events | Logged-only | ICO notified | Subjects notified | Avg containment time |
|---|---|---|---|---|---|
| 2026 | 0 | 0 | 0 | 0 | — |

---

## Escalation contacts

| Role | Name | Contact |
|---|---|---|
| DPO | `[REPLACE WITH name]` | dpo@theenglishhub.app |
| Incident commander (primary) | `[REPLACE WITH name]` | security@theenglishhub.app |
| Incident commander (secondary) | `[REPLACE WITH name]` | — |
| External legal | `[REPLACE WITH firm]` | — |
| Cyber insurer | `[REPLACE WITH provider]` | — |
| ICO | — | 0303 123 1113 |
| National Cyber Security Centre | — | ncsc.gov.uk |
