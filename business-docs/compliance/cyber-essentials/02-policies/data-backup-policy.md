# Data Backup Policy

**Policy ID:** ISMS-011
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

Backups are the Company's last line of defence against data loss, corruption, ransomware, accidental deletion, and provider failure. This Policy sets the rules for what is backed up, how often, where backups are stored, how they are protected, and how restoration is tested.

## 2. Scope

All business-critical data, including:

- The production Supabase database (pupil data, account data, progress data)
- Supabase storage (user-uploaded files)
- The Company's source code (GitHub)
- The Company's configuration and infrastructure-as-code
- Business operational data (Google Workspace: email, Drive, calendar)
- Financial records (Stripe, accounting data)
- Policy and compliance documentation (this folder and the wider `business-docs/` tree)

## 3. Backup strategy — the 3-2-1-1 rule

The Company applies a variant of the 3-2-1 backup rule, extended with an immutable or offline copy:

- **3 copies** of data: the live data, a primary backup, and a secondary backup
- **2 media types** or regions: the two backups are not co-located with the live data
- **1 off-site copy** in a different geographical region
- **1 immutable / offline copy** that cannot be altered or deleted by a compromised credential (for ransomware resilience)

## 4. Per-dataset backup approach

### 4.1 Production Supabase database (primary dataset)

| Attribute | Value |
|---|---|
| **Primary backup** | Supabase Point-in-Time Recovery (PITR), enabled on the production project, with 7-day retention (Pro plan default, expand to 14 or 28 days as traffic grows) |
| **Secondary backup** | Daily `pg_dump` exported via scheduled job to an S3 bucket in a different AWS region (e.g. `eu-north-1` if primary is `eu-west-2`) |
| **Retention** | Daily backups: 30 days. Weekly backups: 12 weeks. Monthly backups: 12 months. Annual backups: 7 years (for tax/financial records) |
| **Encryption** | AES-256 at rest (S3 default), TLS 1.2+ in transit |
| **Access** | Only the CTO/DPO has access to the backup bucket. Access is audited in S3 access logs |
| **Immutability** | S3 Object Lock (compliance mode) enabled on the backup bucket to prevent deletion or modification for the retention period |
| **Off-site** | Different AWS region from primary |
| **Test cadence** | Quarterly restore test to a throwaway Supabase project — verify row counts and spot-check records |

### 4.2 Supabase Storage (user-uploaded files)

| Attribute | Value |
|---|---|
| **Primary backup** | Cross-region replication within Supabase storage (where available) or nightly `s3 sync` equivalent |
| **Retention** | 30 days for individual files; 12 months for the indexed backup |
| **Encryption** | AES-256, TLS 1.2+ |
| **Test** | Quarterly download sample |

### 4.3 Source code (GitHub)

| Attribute | Value |
|---|---|
| **Primary backup** | GitHub itself is the primary store; GitHub performs its own durable backups |
| **Secondary backup** | Weekly full clone of every repository to a local encrypted archive, mirrored to the S3 backup bucket |
| **Retention** | 12 months of weekly snapshots |
| **Rationale** | Protects against account compromise where a bad actor deletes repositories; GitHub alone is single-vendor risk |

### 4.4 Google Workspace (Gmail + Drive + Calendar + Contacts)

| Attribute | Value |
|---|---|
| **Primary backup** | Google Vault retention where the plan supports it; otherwise Google's native Drive version history |
| **Secondary backup** | Weekly export via Google Takeout (automated where practicable, manual monthly as a minimum) to the encrypted S3 bucket |
| **Retention** | 12 months |

### 4.5 Business and compliance documentation

| Attribute | Value |
|---|---|
| **Primary backup** | Git repository (this `business-docs/` folder lives in Git) |
| **Secondary backup** | Git remote at GitHub; covered by §4.3 |

### 4.6 End-user devices (laptops, phones)

| Attribute | Value |
|---|---|
| **Primary backup** | Time Machine (macOS) to a local encrypted external disk held at the home office; local nightly backup |
| **Secondary backup** | Important working files synced into Google Drive / Notion so they exist in a cloud store |
| **Rationale** | End-user devices should not be the only home of any data — the cloud is the source of truth |

## 5. Encryption

All backups are encrypted:

- **At rest** — AES-256 via the storage provider (S3 default, Supabase default) and, for the Time Machine disk, APFS encryption
- **In transit** — TLS 1.2 or higher
- **Key management** — encryption keys are managed by the cloud provider using its default KMS configuration; the Company does not currently run a self-hosted KMS. Access to decryption keys is controlled by the same MFA-enforced admin accounts that access the backup buckets

## 6. Access control on backups

- Only the CTO/DPO has direct access to the backup buckets.
- Access is via MFA-protected admin account with hardware key.
- Access logs are retained and reviewed monthly for anomalies.
- Restoration requests from any other person require approval by the CTO/DPO and are logged.

## 7. Restore testing

Untested backups are not backups. The Company tests restoration **quarterly**:

1. A scheduled event is set in the CTO/DPO's calendar for each quarter.
2. On the day, the CTO/DPO picks a random recent daily backup from S3.
3. A throwaway Supabase project is spun up.
4. The backup is restored to the throwaway project.
5. The CTO/DPO verifies:
   - Restore completes without error
   - Row counts in key tables match a recent production snapshot (within tolerance)
   - A small sample of records is readable and correct
   - Referential integrity is intact
6. The throwaway project is destroyed.
7. The test result (pass/fail, time taken, any issues) is recorded in the backup log.

The log of restore tests is retained for 3 years and is evidence for the CE+ audit.

## 8. Recovery time and point objectives

- **Recovery Time Objective (RTO):** 4 hours for the production database in the worst case; Supabase PITR can restore within minutes for recent corruption
- **Recovery Point Objective (RPO):** 1 hour for the production database (Supabase PITR allows granular recovery; worst case is since the last scheduled snapshot — 24 hours)

These are reviewed against business requirements annually. Tightening RTO/RPO is possible but increases cost and is deferred until customer contracts require it.

## 9. Ransomware resilience

To prevent a ransomware attacker from destroying backups along with the live data:

1. The S3 backup bucket has **Object Lock (compliance mode)** enabled so backups cannot be deleted or altered before the retention period expires, even by the root account.
2. The account used to write backups is separate from the account used to restore them.
3. Backup write access uses a scoped IAM role that can write new objects but cannot delete existing ones.
4. Backup buckets are not accessible from compromised developer machines directly — only from the scheduled backup job.
5. Multi-factor delete is required on the backup bucket for any destructive operation.

## 10. Incident handling for backup

- **Backup failure:** if a scheduled backup fails for any reason, the CTO/DPO is alerted by email. The failure is investigated within 24 hours and the backup is re-run.
- **Suspected backup corruption:** a new backup is taken immediately and the corrupted backup is preserved for investigation.
- **Restore failure during test:** treated as an incident; the cause is investigated and resolved before the next quarterly cycle.

## 11. Retention and deletion

- Retention periods are set out in §4 per dataset.
- When retention expires, backups are deleted automatically by S3 lifecycle rules (except for immutable-locked ones which expire per the lock rule).
- Deletion is logged.
- Personal data retention in backups follows the UK GDPR principle of storage limitation. The Company does not retain backups beyond what is necessary for legitimate business, regulatory, or audit purposes.

## 12. Change control

Changes to backup configuration (new datasets, changed retention, new regions) are proposed by the CTO/DPO and reviewed against this Policy. A change log is maintained.

## 13. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 14. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
