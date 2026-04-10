# Cyber Essentials Plus — Readiness Checklist

**Purpose:** Track pre-audit readiness across every CE+ control. Do not submit the SAQ or engage the assessor until this checklist is fully green.

**Owner:** CTO / DPO
**Version:** 1.0
**Last updated:** 2026-04-10
**Target audit date:** TBD (target May/June 2026 once all items PASS)

---

## Status legend

| Status | Meaning |
|---|---|
| PASS | Control is implemented, evidenced, and verified. Ready for audit. |
| PART | Control is partially implemented. Gap identified and logged. |
| FAIL | Control is missing or not evidenced. Must remediate before proceeding. |
| N/A  | Not applicable to our scope (justification required in Notes) |

Any FAIL or PART item blocks audit booking.

---

## 1. Governance and policies

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 1.1 | Information Security Policy signed by Director | FAIL | `02-policies/information-security-policy.md` | Draft complete; awaiting signature |
| 1.2 | Access Control Policy signed | FAIL | `02-policies/access-control-policy.md` | Draft complete; awaiting signature |
| 1.3 | Password Policy signed | FAIL | `02-policies/password-policy.md` | Draft complete; awaiting signature |
| 1.4 | Acceptable Use Policy signed | FAIL | `02-policies/acceptable-use-policy.md` | Draft complete; awaiting signature |
| 1.5 | Remote Working Policy signed | FAIL | `02-policies/remote-working-policy.md` | Draft complete; awaiting signature |
| 1.6 | BYOD Policy signed | FAIL | `02-policies/byod-policy.md` | Draft complete; awaiting signature |
| 1.7 | Patching Policy signed | FAIL | `02-policies/patching-policy.md` | Draft complete; awaiting signature |
| 1.8 | Anti-Malware Policy signed | FAIL | `02-policies/anti-malware-policy.md` | Draft complete; awaiting signature |
| 1.9 | Firewall Configuration Policy signed | FAIL | `02-policies/firewall-configuration-policy.md` | Draft complete; awaiting signature |
| 1.10 | Secure Configuration Policy signed | FAIL | `02-policies/secure-configuration-policy.md` | Draft complete; awaiting signature |
| 1.11 | Data Backup Policy signed | FAIL | `02-policies/data-backup-policy.md` | Draft complete; awaiting signature |
| 1.12 | Incident Response Policy signed | FAIL | `02-policies/incident-response-policy.md` | Draft complete; awaiting signature |
| 1.13 | Business Continuity Policy signed | FAIL | `02-policies/business-continuity-policy.md` | Draft complete; awaiting signature |
| 1.14 | Vendor Risk Management Policy signed | FAIL | `02-policies/vendor-risk-management-policy.md` | Draft complete; awaiting signature |
| 1.15 | Clear Desk / Clear Screen Policy signed | FAIL | `02-policies/clear-desk-clear-screen-policy.md` | Draft complete; awaiting signature |
| 1.16 | Training & Awareness Policy signed | FAIL | `02-policies/training-awareness-policy.md` | Draft complete; awaiting signature |
| 1.17 | Scope of Certification document signed | FAIL | `01-readiness/scope-of-certification.md` | Draft complete; awaiting signature |

---

## 2. Asset inventory

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 2.1 | Every in-scope laptop/desktop listed with owner, OS, OS version | PART | `03-evidence/asset-inventory-template.csv` | Template populated; needs final sweep before submission |
| 2.2 | Every in-scope mobile device listed | PART | `03-evidence/asset-inventory-template.csv` | |
| 2.3 | Every in-scope SaaS listed with admin owner | PASS | `03-evidence/asset-inventory-template.csv` + `scope-of-certification.md` §5 | |
| 2.4 | Service accounts listed | PART | `03-evidence/asset-inventory-template.csv` | Need to enumerate CI/CD tokens |
| 2.5 | Asset inventory reviewed within last 30 days | FAIL | Timestamp in CSV footer | First review pending |

---

## 3. Firewalls (Control 1)

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 3.1 | Boundary firewall: default admin password changed | PASS | 1Password vault entry | |
| 3.2 | Boundary firewall: remote admin disabled | PASS | Router admin UI screenshot dated within 30 days | |
| 3.3 | Boundary firewall: inbound services default-deny | PASS | Router config screenshot | |
| 3.4 | Every in-scope device has host firewall enabled | PASS | Per-device screenshot in evidence folder | |
| 3.5 | Cloud firewall rules (Cloudflare, Supabase, Vercel) reviewed | PART | `firewall-configuration-policy.md` §6 | Last review > 90 days |
| 3.6 | Home Wi-Fi using WPA3 (or WPA2-AES minimum) | PASS | Router settings | |
| 3.7 | Guest network segregating non-corporate devices | PASS | Router config | |

---

## 4. Secure configuration (Control 2)

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 4.1 | Default accounts removed/disabled on every device | PASS | Per-device check | |
| 4.2 | Unnecessary software removed from every device | PASS | Per-device check | |
| 4.3 | Autoplay / autorun disabled | PASS | OS setting | |
| 4.4 | Screen lock after ≤ 10 minutes on every device | PASS | OS setting | |
| 4.5 | Biometric unlock + strong passphrase fallback | PASS | Per-device check | |
| 4.6 | Cloud services hardened per baseline (`secure-configuration-policy.md` §4) | PART | Per-service check | 3 of 10 services need final hardening sweep |
| 4.7 | Device baseline documented per OS class | PASS | `secure-configuration-policy.md` | |

---

## 5. Patching (Control 3)

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 5.1 | Automatic OS updates enabled on every device | PASS | Per-device check | |
| 5.2 | Automatic browser updates enabled | PASS | Per-device check | |
| 5.3 | All third-party applications auto-update or monthly manual review | PART | `03-evidence/patch-log-template.csv` | Need to confirm a few niche dev tools |
| 5.4 | Zero high/critical (CVSS ≥ 7.0) CVEs open for > 14 days across the fleet | FAIL | Vulnerability scan results | First authenticated scan not yet run |
| 5.5 | No end-of-life OS in use | PASS | Asset inventory | |
| 5.6 | No end-of-life application in use | PASS | Asset inventory | |
| 5.7 | Patching log for the current month | FAIL | `03-evidence/patch-log-template.csv` | |

---

## 6. User access control (Control 4)

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 6.1 | Unique account per user, no shared accounts | PASS | Cloud admin consoles + local device check | |
| 6.2 | Separate admin account vs standard user account for each person | PASS | Per-device + per-SaaS check | |
| 6.3 | Admin accounts not used for email/browsing | PASS | Acceptable Use Policy + audit | |
| 6.4 | MFA enforced on every cloud admin account (10/10 services) | PASS | Per-service MFA config screenshot | Hardware key primary + TOTP backup |
| 6.5 | MFA enforced on every cloud standard user account | PASS | Org-level enforcement in each SaaS | |
| 6.6 | No SMS as second factor anywhere | PASS | Per-service check | |
| 6.7 | Password manager deployed (1Password) | PASS | Vault exists | |
| 6.8 | All passwords ≥ 14 characters, random-generated | PASS | 1Password audit report | |
| 6.9 | Offboarding process documented and tested | PART | `access-control-policy.md` §7 | Need dry-run with a test account |
| 6.10 | User access review completed in current quarter | FAIL | `03-evidence/user-access-review-template.csv` | First review pending |

---

## 7. Malware protection (Control 5)

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 7.1 | Anti-malware enabled on every endpoint | PASS | Per-device check | macOS XProtect/Gatekeeper, Windows Defender, ClamAV on Linux |
| 7.2 | Signatures auto-updating | PASS | Per-device check | |
| 7.3 | On-access scanning enabled | PASS | Per-device check | |
| 7.4 | Web filtering (DNS or gateway) | PASS | Cloudflare for Families DNS configured on all devices | |
| 7.5 | Email malware scanning enabled (Google Workspace) | PASS | Workspace admin console | |
| 7.6 | EICAR test performed within last 30 days | FAIL | `anti-malware-policy.md` §5 evidence log | First test pending |

---

## 8. Backup (informational in CE, required for CE+ questionnaire)

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 8.1 | Supabase PITR enabled on production | PASS | Supabase console | |
| 8.2 | Off-region daily backup exported to S3 | PART | `data-backup-policy.md` §4 | Needs automated verification job |
| 8.3 | Backup encryption at rest confirmed | PASS | Provider-side AES-256 | |
| 8.4 | Restore test performed within last 90 days | FAIL | `data-backup-policy.md` §7 log | Dry-run scheduled |

---

## 9. Incident response and BCP

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 9.1 | Incident response plan documented | FAIL | `02-policies/incident-response-policy.md` | Draft complete; needs signature |
| 9.2 | Incident response contact list up to date | PART | `incident-response-policy.md` Appendix A | Need ICO contact verified |
| 9.3 | Tabletop exercise performed in last 12 months | FAIL | `incident-response-policy.md` §9 | Planned |
| 9.4 | BCP documented and reviewed | FAIL | `02-policies/business-continuity-policy.md` | Draft complete; needs signature |
| 9.5 | GDPR 72-hour breach process documented and rehearsed | PART | `incident-response-policy.md` §6 | Documented, not rehearsed |

---

## 10. Training and awareness

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 10.1 | Annual security awareness training completed by all staff | FAIL | `03-evidence/training-completion-log.csv` | Director to complete NCSC "Top Tips for Staff" module |
| 10.2 | Phishing test performed in last 6 months | FAIL | | Plan to use a simulated phishing provider (e.g. KnowBe4 trial) |
| 10.3 | Training policy signed | FAIL | `02-policies/training-awareness-policy.md` | |

---

## 11. Vendor / third party

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 11.1 | Every in-scope SaaS vendor has a current certification (SOC 2, ISO 27001, CE, or equivalent) | PASS | `scope-of-certification.md` §5 | Verified |
| 11.2 | DPA/BAA in place with every processor handling personal data | PART | `../gdpr/dpa-register.md` (future) | Need to verify Stripe, OpenAI, Notion DPAs are on file |
| 11.3 | Vendor risk register maintained | FAIL | `vendor-risk-management-policy.md` §3 | Needs first full pass |

---

## 12. Audit preparation

| # | Item | Status | Evidence location | Notes |
|---|---|---|---|---|
| 12.1 | Two assessor quotes obtained | FAIL | | Cannot request until readiness ≥ 80% |
| 12.2 | Budget approved (£2,500 all-in) | PASS | `../../finance/budget-2026.md` (assumed) | |
| 12.3 | Internal dry-run vulnerability scan performed | FAIL | | Planned — use OpenVAS or Nessus Essentials |
| 12.4 | SAQ draft reviewed against current state | PART | `self-assessment-questionnaire-draft.md` | Initial draft complete |

---

## Summary — what blocks audit booking

**Minimum gate to engage assessor:** all items in sections 1 (policies) and 2 (asset inventory) must be PASS.

**Minimum gate to submit SAQ:** every item in sections 1–7 must be PASS. Sections 8–11 may be PART as long as the remaining work is < 1 week and tracked in `04-audit-prep/remediation-tracker.md`.

**Minimum gate to take CE+ audit day:** every item in every section must be PASS.

---

## Progress tracker (manual — update weekly)

| Week ending | PASS | PART | FAIL | N/A | Total |
|---|---|---|---|---|---|
| 2026-04-10 (baseline) | 25 | 9 | 26 | 0 | 60 |
| 2026-04-17 | | | | | |
| 2026-04-24 | | | | | |
| 2026-05-01 | | | | | |
| 2026-05-08 | | | | | |
| 2026-05-15 | | | | | |

---

*This checklist is version 1.0. Update weekly in the tracker above until all items are PASS.*
