# Data Retention Schedule

**The English Hub Ltd**
**Last reviewed:** `[REPLACE WITH DATE]`
**Next review:** Annually
**Owner:** DPO

> This schedule defines how long each category of personal data is retained. It supports Article 5(1)(e) UK GDPR (storage limitation) and feeds into our retention automation, deletion tooling, and DSR responses.

---

## Principles

1. **Minimise retention.** We keep personal data only for as long as we need it for the purposes for which it was collected.
2. **Trigger-based.** Most retention periods start from a clear trigger (last login, contract end, consent withdrawal).
3. **Automate.** Retention is enforced by scheduled deletion jobs (documented in engineering runbooks).
4. **Document exceptions.** Any legal or regulatory obligation to retain for longer is recorded with reference.
5. **Review annually.** Retention periods and the categories are reviewed at least once a year.
6. **Delete means delete.** Where we delete, we also delete from backups within the backup rotation window (`[REPLACE WITH 30]` days).

---

## Retention schedule

| # | Data category | Trigger | Retention period | Action on expiry | Legal basis / reason |
|---|---|---|---|---|---|
| 1 | Active student account (name, email, school, year, exam board) | Last login | Duration of account + 12 months inactive | Anonymise account, delete PII | Contract + Art 5(1)(e) storage limitation |
| 2 | Student writing / submissions | Account end | 12 months | Anonymise or delete | Legitimate interest (study continuity) + storage limitation |
| 3 | Quiz and practice answers | Account end | 12 months | Delete or aggregate into anonymised metrics | Same |
| 4 | AI feedback records | Account end | 12 months | Delete alongside submissions | Same |
| 5 | Student progress and skill estimates | Account end | 12 months | Anonymise (retain only aggregates) | Same |
| 6 | Password hashes | Account deletion | Deleted immediately | Hard delete | Security |
| 7 | Session tokens | Logout or expiry | Deleted immediately | Hard delete | Security |
| 8 | Teacher account | End of school contract | Contract end + 6 months | Delete; transfer ownership records where required | Contract |
| 9 | School contract records | Contract end | 7 years | Archive | Limitation Act 1980 (contract claims) |
| 10 | Parent account | Child reaches 18, or parent deletion request | 30 days after trigger | Delete | Contract |
| 11 | Parental consent record | Consent withdrawal or account deletion | 6 years (audit trail) | Archive | Accountability (Art 5(2)) |
| 12 | Payment / billing records | Transaction | 6 years from end of financial year | Archive | HMRC / tax law |
| 13 | Support tickets | Ticket closure | 24 months | Delete | Legitimate interest |
| 14 | Marketing consent records | Withdrawal | 24 months after withdrawal | Delete; retain suppression entry only | PECR accountability |
| 15 | Marketing suppression list entries | Unsubscribe | Indefinitely | Retain (suppression only — email + unsubscribe flag) | PECR compliance |
| 16 | Website analytics (pseudonymised) | Collection | 12 months rolling | Delete | Legitimate interest |
| 17 | Security logs (WAF, firewall, auth) | Collection | 90 days | Delete | Security |
| 18 | Audit logs (privileged access) | Collection | 12 months | Delete | Accountability |
| 19 | Application error logs (Sentry) | Collection | 90 days | Delete | Troubleshooting |
| 20 | Backups | Backup snapshot | 30 days rolling | Overwrite / delete | DR |
| 21 | DSR request records | Request closure | 3 years | Delete | Accountability / audit |
| 22 | Data breach records | Incident closure | 3 years (5 years if material) | Delete | Article 33(5) + audit |
| 23 | DPIA records | Project end | Life of the project + 3 years | Archive | Accountability |
| 24 | Subprocessor contracts and DPAs | Contract end | 7 years | Archive | Limitation Act |
| 25 | Cookie consent records | Collection | 12 months | Delete | PECR |
| 26 | Safeguarding incident records | Incident closure | `[REPLACE WITH]` years (per KCSIE guidance — typically until child reaches 25) | Archive to secure store; delete | KCSIE / safeguarding legal duty |
| 27 | Staff data (HR) | Employment end | `[REPLACE WITH 6]` years | Delete | HMRC / employment law |

---

## Automated deletion workflow

| Trigger | System | Frequency |
|---|---|---|
| Inactivity timer | `[REPLACE WITH cron job name]` | Daily |
| Account deletion request | In-product + queue worker | Immediate + 30 days full deletion |
| Contract end | Billing system → deletion queue | On invoice close |
| Manual DSR erasure | DSR tool | Within 30 days |

---

## Exceptions

Retention may be extended beyond the schedule where:

- There is an **active or threatened legal claim**
- There is a **regulatory investigation** (ICO, HMRC)
- **Law enforcement** has instructed preservation
- **Safeguarding** requires it

Any extension must be recorded in a retention exception log with rationale and review date.

---

## Review history

| Date | Reviewer | Changes |
|---|---|---|
| `[REPLACE WITH DATE]` | DPO | Initial draft |
