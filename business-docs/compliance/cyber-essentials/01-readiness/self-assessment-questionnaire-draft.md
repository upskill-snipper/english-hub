# Cyber Essentials Self-Assessment Questionnaire — Draft Responses

**Organisation:** The English Hub Ltd
**Question set version:** IASME "Montpelier" question set (current version as of 2024)
**Draft version:** 1.0
**Last updated:** 2026-04-10
**Owner:** CTO / DPO
**Status:** DRAFT — do not submit until every answer is verified against live evidence

---

## How to use this document

This is a **full draft** of responses to the IASME Cyber Essentials self-assessment questionnaire. Before submission:

1. Verify each answer matches current reality (re-check asset inventory, cloud console state, patching reports)
2. Paste each answer into the equivalent field in the IASME portal
3. The portal will ask for some narrative justification — copy the "Evidence/Notes" column
4. Do not submit until the readiness checklist is **fully green**

The questionnaire is structured around the **5 control themes**. The Montpelier question set added new questions on MFA, cloud services, BYOD, and home working in response to the shift in attack surface after 2020.

---

## Section A — Your Organisation

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| A1 | Organisation name | The English Hub Ltd | Companies House registered name |
| A2 | Organisation registration number | [Companies House number to be inserted] | |
| A3 | Registered address | [UK address to be inserted] | |
| A4 | Main business activity | Education technology — a curriculum-aligned English learning platform for UK primary schools (KS1/KS2) | Matches the description on companieshouse.gov.uk SIC code 85590 |
| A5 | Whole organisation or sub-scope? | **Whole organisation** | See `scope-of-certification.md` |
| A6 | Geographic scope | United Kingdom | Director is UK-resident; all cloud services configured to EU/UK data regions where options exist |
| A7 | Number of staff in scope | 1 (Director) — policies in place for all subsequent hires | Scope covers 100% of staff |
| A8 | Certification level applied for | **Cyber Essentials Plus** | Basic granted first, then Plus audit |
| A9 | Previous certifications held? | No — this is first certification | |

---

## Section B — Scope

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| B1 | Does the scope cover the whole organisation? | Yes | `scope-of-certification.md` §1 |
| B2 | Are all computing devices used for business in scope? | Yes | Asset inventory in `03-evidence/asset-inventory-template.csv` lists 4 devices (2 laptops, 1 phone, 1 tablet) |
| B3 | Are all cloud services (SaaS, IaaS, PaaS) used for business in scope? | Yes | `scope-of-certification.md` §5 lists 10 in-scope SaaS |
| B4 | Are home routers included where staff work from home? | Yes — where the router is used to carry corporate traffic | ISP-provided router at Director's home is included; admin password changed from default; WPA3 enabled. Corporate device host firewalls provide a second line of defence |
| B5 | Are personally-owned (BYOD) devices in scope? | Yes — any personally-owned device used to access corporate data or services is in scope under the BYOD Policy | Currently no BYOD in active use; `byod-policy.md` governs any future BYOD |
| B6 | Network boundary description | The English Hub's boundary is the combination of (a) host firewalls on every corporate device, (b) the cloud-provider-enforced authentication boundary on each SaaS, and (c) the home router perimeter firewall. The organisation has no on-premises server infrastructure. | This is the modern "identity as the perimeter" model — common for cloud-native micro-organisations |

---

## Section C — Insurance

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| C1 | Is the organisation UK-domiciled with turnover under £20 million? | Yes | Eligible for the free £25,000 cyber liability insurance bundled with UK CE certification |
| C2 | Accept cyber liability insurance? | Yes | Auto-included with IASME basic certification |

---

## Section D — Firewalls and Internet Gateways

**Control objective:** Every device in scope must be protected by a correctly configured firewall — either a boundary firewall or a host-based firewall.

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| D1 | Do you have a firewall at the boundary between the internet and every in-scope device? | Yes | Home router (ISP-provided) acts as the boundary firewall for the home-office environment. Every corporate device **also** has a host-based firewall enabled (macOS Application Firewall, Windows Defender Firewall, or ufw on Linux) — defence in depth |
| D2 | Has the default admin password on every boundary firewall been changed? | Yes | Home router admin credentials rotated on day 1; stored in 1Password; verified by CTO during readiness |
| D3 | Are admin passwords on firewalls at least 8 characters with no dictionary words? | Yes — all passwords are 20+ character generated strings stored in 1Password | Exceeds the minimum. Follows NCSC guidance (length > complexity) |
| D4 | Is MFA required for any remote administration of firewalls? | Yes — the home router admin interface is not exposed to the internet; remote admin is disabled. Any cloud-based network admin (e.g. Cloudflare) has MFA enforced | |
| D5 | Are inbound services blocked by default unless documented and approved? | Yes | Home router: no port forwarding rules. Cloud firewalls (Supabase, Vercel, Cloudflare) use default-deny ingress with explicit allow rules documented in `firewall-configuration-policy.md` |
| D6 | Are unauthenticated inbound connections blocked? | Yes | Verified on each device and each cloud service |
| D7 | Is the firewall rule base reviewed? | Yes — reviewed quarterly | Logged in `firewall-configuration-policy.md` §6 review cadence |
| D8 | Are devices protected by a host-based firewall when used on untrusted networks? | Yes | Every in-scope device has its host firewall enabled at all times, not only on untrusted networks. Verified in the endpoint baseline |

---

## Section E — Secure Configuration

**Control objective:** Devices and software must be configured to reduce the level of inherent vulnerabilities and provide only the services required to fulfil their role.

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| E1 | Have you removed or disabled unnecessary user accounts on every device? | Yes | Each device has exactly one standard user + one separated admin account. Guest accounts disabled. Default vendor accounts removed/disabled |
| E2 | Have you changed or disabled default passwords on any in-scope device or service? | Yes | Verified against a checklist during device onboarding |
| E3 | Have you removed or disabled unnecessary software? | Yes | Baseline image for each device class. Software not required for work is uninstalled. Vendor bloatware removed |
| E4 | Is the auto-run / auto-play feature disabled on removable media? | Yes | macOS: Finder preference disabled. Windows: GPO/registry disabled. Linux: N/A (no autorun) |
| E5 | Is every device screen-locked after a period of inactivity? | Yes — maximum 10 minutes across the fleet | Enforced via OS settings |
| E6 | Is the screen-unlock mechanism either a passphrase, a PIN of ≥ 6 digits, or biometric combined with one of those? | Yes — every device uses biometric (Touch ID / Face ID) with a fallback passphrase of 14+ characters | |
| E7 | Are cloud service configurations hardened (e.g. admin access limited, logging enabled, sharing restricted)? | Yes | Per-service hardening documented in `secure-configuration-policy.md` §4 |
| E8 | Do you have documented secure baselines for each device class and SaaS? | Yes | `secure-configuration-policy.md` is the master document |
| E9 | Is there a process for decommissioning devices that securely wipes data? | Yes — documented wipe procedure (macOS: Erase All Content & Settings; Linux: dd + cryptsetup erase; iOS/iPadOS: factory reset after signing out of iCloud) | |

---

## Section F — Security Update Management (Patching)

**Control objective:** Software must be kept up to date. High and critical vulnerabilities must be patched within 14 days.

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| F1 | Is all software on in-scope devices licensed and supported by a vendor? | Yes | Verified in asset inventory — no end-of-life OS or applications |
| F2 | Is automatic updating enabled where possible? | Yes | macOS Auto-Update enabled, Chrome auto-update enabled, Ubuntu unattended-upgrades enabled, iOS auto-update enabled |
| F3 | **Are critical and high-severity updates (CVSS v3 ≥ 7.0) applied within 14 days of release?** | Yes | This is the headline Montpelier requirement. Patch log in `03-evidence/patch-log-template.csv` evidences compliance monthly |
| F4 | Do you have a documented patching policy? | Yes | `patching-policy.md` |
| F5 | Are out-of-support operating systems still in use? | No | |
| F6 | Are out-of-support applications still in use? | No | |
| F7 | Is firmware kept up to date (routers, phones, laptops)? | Yes | Home router auto-updates from ISP; phones/laptops auto-update firmware with OS |
| F8 | How do you learn of new vulnerabilities relevant to your estate? | Subscribed to the NCSC weekly threat report, CISA KEV catalog, and vendor security bulletins (Apple, Google, Microsoft, Supabase, Vercel, GitHub) | |

---

## Section G — User Access Control

**Control objective:** User access must be controlled, role-appropriate, and regularly reviewed. Administrative access must be separated and MFA-protected.

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| G1 | Do you have a user account creation and approval process? | Yes | `access-control-policy.md` §3 |
| G2 | Is each user given a unique account? | Yes — no shared accounts anywhere | |
| G3 | Are admin accounts separated from standard user accounts? | Yes — every person who needs admin has a distinct admin account for admin tasks only | Verified per-device and per-SaaS |
| G4 | Are admin accounts used only for admin tasks? | Yes — admin accounts never used for email, web browsing, or day-to-day work | `access-control-policy.md` §4 |
| G5 | Do you track which users have admin access and review it regularly? | Yes — quarterly review tracked in `03-evidence/user-access-review-template.csv` | |
| G6 | **Is MFA enforced on every cloud service admin account?** | Yes | The Montpelier update made cloud admin MFA **mandatory**. All 10 in-scope cloud services have MFA enforced for admin accounts using hardware keys (FIDO2) as primary and TOTP as backup |
| G7 | **Is MFA enforced on every cloud service standard user account where the service supports it?** | Yes — enforced organisation-wide where the SaaS supports it (which for our stack is all 10 services) | |
| G8 | Are passwords stored hashed and salted (for any bespoke systems)? | Yes — our own platform uses Supabase Auth which uses bcrypt with per-user salt. No passwords stored anywhere else. | `password-policy.md` §6 |
| G9 | Is password length enforced at a minimum of 8 characters (with 2FA) or 12 characters (without 2FA)? | Yes — all corporate passwords are 14+ characters; random-generated by 1Password; stored only in 1Password | Exceeds CE minimums |
| G10 | Is there a process to remove accounts when a person leaves? | Yes — same-day deprovisioning triggered by offboarding checklist | `access-control-policy.md` §7 |
| G11 | Are accounts locked or denied after a number of failed login attempts? | Yes — cloud services enforce account lockout after 5 failed attempts (vendor default). Local device unlock uses rate-limited biometric/passphrase | |
| G12 | Are shared/service accounts (non-human) documented and authenticated with strong credentials? | Yes — service accounts listed in `03-evidence/asset-inventory-template.csv`; credentials 40+ character random tokens stored in 1Password vault + Vercel encrypted env vars | |

---

## Section H — Malware Protection

**Control objective:** Every device in scope must be protected from malware either by anti-malware software, application allow-listing, or sandboxing.

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| H1 | Which approach is used? | **Anti-malware software** on every device (primary). Sandboxing as a secondary control on browsers. Application allow-listing is considered but not currently enforced — overkill for 1 user | |
| H2 | Is anti-malware software enabled on every in-scope device? | Yes — macOS XProtect + Gatekeeper on Macs (Apple's built-in EDR); Microsoft Defender on any Windows device; ClamAV + apparmor on Linux; iOS/iPadOS sandboxed app store model | |
| H3 | Are signatures updated automatically? | Yes — all platforms automatic | |
| H4 | Is on-access scanning enabled? | Yes | |
| H5 | Is web protection enabled to block known malicious sites? | Yes — Cloudflare 1.1.1.1 for Families (malware filtering) + browser Safe Browsing enabled on Chrome/Safari | |
| H6 | Can untrusted files be executed or opened without warning? | No — Gatekeeper on macOS blocks unsigned binaries; SmartScreen on Windows; browser sandboxing isolates web content; email attachments from unknown senders are flagged by Google Workspace | |
| H7 | Is an email malware scanning service in use? | Yes — Google Workspace provides inbound and outbound malware scanning as a built-in service. Suspicious attachments quarantined automatically | |
| H8 | Is a test performed periodically to confirm malware protection works (e.g. with the EICAR test file)? | Yes — monthly EICAR download test documented in `anti-malware-policy.md` §5 | |

---

## Section I — Backup (informational — not a formal control but required in the questionnaire)

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| I1 | Do you perform regular backups of business-critical data? | Yes | `data-backup-policy.md` |
| I2 | Are backups tested? | Yes — quarterly restore test documented in `data-backup-policy.md` §7 | |
| I3 | Are backups stored separately from live data? | Yes — Supabase PITR + off-region S3 (different AWS region from primary) | |

---

## Section J — Incident Response (informational — required in questionnaire under Montpelier)

| # | Question | Answer | Evidence/Notes |
|---|---|---|---|
| J1 | Do you have a documented incident response plan? | Yes | `incident-response-policy.md` |
| J2 | Does it include roles, escalation, and reporting obligations? | Yes — GDPR 72-hour notification to ICO, customer notification, evidence preservation | |
| J3 | Has it been tested in the last 12 months? | Yes — tabletop exercise performed during readiness phase (see `incident-response-policy.md` §9) | |

---

## Section K — Declaration

| # | Question | Answer |
|---|---|---|
| K1 | I confirm that the answers above are true to the best of my knowledge and that the organisation operates in accordance with them | [Director signature on submission] |
| K2 | I understand that providing false information will invalidate certification | Yes |
| K3 | I agree to notify IASME of material changes during the certificate lifetime | Yes |

---

## Pre-submission review checklist

Before clicking Submit in the IASME portal:

- [ ] Every answer above is marked **Yes** — any **No** means a control is missing and the SAQ will fail
- [ ] Every **Yes** is backed by evidence in `03-evidence/` or a policy in `02-policies/`
- [ ] Asset inventory is current (updated within the last 7 days)
- [ ] Patch log shows no open high/critical vulnerabilities older than 14 days
- [ ] User access review was completed in the current quarter
- [ ] MFA audit confirms every cloud admin account has MFA enabled (screenshot per service)
- [ ] An EICAR test run was performed in the last 30 days
- [ ] A backup restore test was performed in the current quarter
- [ ] Director has signed the scope document
- [ ] Director is ready to sign the SAQ declaration

Once all boxes are ticked, the SAQ can be submitted. The assessor will mark it within 1–3 working days.

---

*Draft version 1.0 — do not submit until every answer has been verified against current state by the CTO/DPO.*
