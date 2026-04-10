# Scope of Certification — Cyber Essentials Plus

**Organisation:** The English Hub Ltd (trading as The English Hub)
**Scope type:** Whole organisation (no sub-scope carve-out)
**Scope version:** 1.0
**Last updated:** 2026-04-10
**Owner:** CTO / DPO
**Approved by:** Director (signature block at foot of document)

---

## 1. Why whole-organisation scope

Cyber Essentials permits two forms of scope:

1. **Whole organisation** — every device, user, network, and cloud service the organisation uses is in scope
2. **Sub-scope** — a defined subset (e.g. one department, one product line) is certified; the rest of the organisation is explicitly excluded

We have elected **whole-organisation scope** for the following reasons:

- **Commercial credibility.** Multi-Academy Trusts, local authorities, and enterprise buyers routinely reject sub-scoped certifications on PQQs. The sub-scope caveat on the certificate itself is a red flag.
- **Simplicity.** We are a small organisation. The marginal cost of certifying everything is negligible compared to the audit discount of carve-out, and sub-scoping introduces ongoing scope-drift risk.
- **Due-diligence posture.** At exit, a whole-organisation CE+ supports higher valuation multiples than a sub-scoped one.

This decision is recorded and will only be revisited if the organisation exceeds ~50 FTE or opens a sub-brand with distinct infrastructure.

---

## 2. In-scope users

All of the following user populations are in scope:

| User type | Count (as at 2026-04-10) | MFA mandated | Admin accounts separated |
|---|---|---|---|
| Director / Founder | 1 | Yes (hardware key + TOTP) | Yes |
| Employed staff | 0 | N/A — policy ready | Yes (policy) |
| Contractors with corporate credentials | 0 | N/A — policy ready | Yes (policy) |
| Contractors **without** corporate credentials (e.g. accountants receiving documents by email) | 2 | Out of scope — not a user | N/A |

As The English Hub grows, all new hires and contractors with corporate-issued credentials automatically come into scope at the point of onboarding. Onboarding is gated by the `access-control-policy.md`.

### 2.1 User accounts by type

- **Standard user accounts:** every person gets one. Used for all day-to-day work — email, documents, coding, browsing, meetings.
- **Administrator accounts:** separate account, distinct username, MFA required. Used only for privileged operations (cloud console admin, software installation, user provisioning). Never used for email or web browsing.
- **Service accounts:** automated accounts for integrations (e.g. CI/CD tokens, backup service). Do not count as user accounts but are inventoried in `03-evidence/asset-inventory-template.csv`.

---

## 3. In-scope devices (endpoints)

Every device that can access corporate data or authenticate to a corporate service is in scope. As of 2026-04-10:

| Device | Owner | OS + version | In scope | MFA / disk encryption | Notes |
|---|---|---|---|---|---|
| Primary laptop (MacBook Pro 14") | Director | macOS 15 Sequoia | Yes | FileVault + hardware key | Corporate device |
| Secondary laptop (Framework 13) | Director | Ubuntu 24.04 LTS | Yes | LUKS full-disk | Dev/testing |
| iPhone | Director | iOS 18 | Yes | Apple ID MFA + Face ID | Corporate email + 2FA codes |
| iPad | Director | iPadOS 18 | Yes | Apple ID MFA + Face ID | Document review |
| Home router (ISP-provided) | Director (home) | Vendor firmware (auto-updated) | Yes (host firewall relied upon) | Default admin password changed, WPA3 | See `firewall-configuration-policy.md` |

**Out of scope:** personal family devices on the same home Wi-Fi that do not access corporate data or credentials. These are network-segmented onto a guest VLAN where the home router supports it; where not, the CE boundary is enforced at the host firewall on each corporate device (see firewall policy).

### 3.1 Device baseline

Every in-scope device must satisfy all of:

1. Supported OS version (receiving security updates from the vendor)
2. Full-disk encryption enabled
3. Host firewall enabled
4. Anti-malware (EDR or built-in) enabled with on-access scanning
5. Auto-patching configured (OS and third-party software)
6. Screen lock after ≤ 10 minutes of inactivity
7. Standard user as the primary account; admin account separated

A device that fails any of these is quarantined and cannot access production data until remediated.

---

## 4. In-scope networks

- **Home office network (Director's residence)** — the Director works from home. The home network is in scope to the extent that corporate devices connect to it. Controls applied:
  - ISP router admin password changed from default
  - WPA3 or WPA2-AES encryption enabled (no WPA / WEP / open Wi-Fi)
  - UPnP disabled where possible
  - Guest network enabled for non-corporate devices where the router supports it
  - Host-based firewall enabled on every corporate device as a second line of defence
- **Office network** — not currently applicable. The English Hub has no physical office. If one is opened, the scope document is updated within 7 days and the new network is evidenced under `firewall-configuration-policy.md` before being used.
- **Travel networks (coffee shops, hotels, airports)** — treated under the `remote-working-policy.md`. Corporate devices only access production services via the cloud provider's authenticated endpoints; untrusted networks are permitted because host firewalls, full-disk encryption, and MFA provide the security boundary.

---

## 5. In-scope cloud services (SaaS)

Cyber Essentials (revised 2022 and again 2023) requires that cloud services used for corporate purposes are in scope. The following services are used by The English Hub and are in scope:

| Service | Purpose | Admin MFA | Data classification | Provider certifications |
|---|---|---|---|---|
| **Google Workspace (Business Starter)** | Email, calendar, drive, documents | Hardware key + backup TOTP | Confidential | ISO 27001, SOC 2 Type II |
| **Supabase (Pro)** | Production database (Postgres), auth, storage | Hardware key + TOTP | Sensitive (child data) | SOC 2 Type II |
| **Vercel (Pro)** | Hosting, edge compute, analytics | Hardware key + TOTP | Confidential | SOC 2 Type II, ISO 27001 |
| **GitHub (Team)** | Source code, CI/CD | Hardware key + TOTP, required for org | Confidential | SOC 2 Type II |
| **Stripe** | Payments | Hardware key + TOTP | Financial (PCI scope handled by Stripe) | PCI-DSS Level 1, SOC 1/2 |
| **OpenAI API** | AI model inference (no training on data — Zero Data Retention enabled) | Hardware key + TOTP | Confidential | SOC 2 Type II |
| **Notion (Plus)** | Internal documentation, wiki | Hardware key + TOTP | Confidential | SOC 2 Type II, ISO 27001 |
| **Slack (Pro)** | Internal comms | Hardware key + TOTP | Confidential | SOC 2 Type II, ISO 27001 |
| **Linear (Standard)** | Issue tracking | Hardware key + TOTP | Internal | SOC 2 Type II |
| **1Password (Business)** | Password management, secrets vault | Hardware key + Secret Key + TOTP | Sensitive | SOC 2 Type II, ISO 27001 |

**Out of scope SaaS:** personal productivity tools the Director may use privately (e.g. a personal Spotify account) that hold no corporate data. These are excluded.

### 5.1 Cloud service administrator access

Every cloud service above has MFA enforced for admin accounts. For services that support hardware keys (WebAuthn / FIDO2), a hardware key is the primary factor. TOTP via the authenticator app in 1Password is the backup factor. SMS is **never** used as a second factor (per NIST SP 800-63B guidance that SMS is deprecated as a restricted authenticator).

---

## 6. In-scope data

The following data categories are in scope:

| Data category | Classification | Primary storage | Encryption at rest | Encryption in transit |
|---|---|---|---|---|
| **Pupil personal data** (names, year group, progress data) | Sensitive — children's data (Article 8 GDPR, Children's Code applies) | Supabase (EU region) | AES-256 | TLS 1.2+ |
| **Teacher/parent contact data** | Personal data | Supabase + Stripe | AES-256 | TLS 1.2+ |
| **Payment data** | PCI scope — delegated to Stripe; we do not store PANs | Stripe only | Stripe controls | TLS 1.2+ |
| **Source code** | Confidential (IP) | GitHub (private repos) | AES-256 | TLS 1.2+ |
| **Corporate documents** | Internal / confidential | Google Drive, Notion | AES-256 | TLS 1.2+ |
| **Backups** | Same classification as source | Supabase PITR + off-region S3 | AES-256 | TLS 1.2+ |
| **Secrets (API keys, tokens, passwords)** | Sensitive | 1Password + Vercel env vars | AES-256 | TLS 1.2+ |

The data map above is also referenced from the ROPA (Record of Processing Activities) in `../gdpr/`.

---

## 7. Locations

| Location | Purpose | In scope | Physical security |
|---|---|---|---|
| Director's home office (UK) | Primary work location | Yes | Locked premises, clear-desk policy, screen lock, BitLocker/FileVault |
| Cloud regions (AWS eu-west-2 / Supabase EU / Vercel global edge) | Data processing | Yes (cloud SaaS) | Provider-managed physical security under SOC 2 |
| Third-party co-working (ad-hoc) | Occasional | Yes — treated as remote working | Remote-working policy applies |
| Physical office | N/A | Not applicable | Update scope if opened |

---

## 8. Exclusions and boundary notes

The following are **deliberately excluded** from CE+ scope with justification:

- **Family member personal devices on the home Wi-Fi** — not used for corporate data, not authenticated to any corporate service, segmented to guest VLAN where possible.
- **Personal email account of the Director (Gmail personal)** — used exclusively for non-work correspondence. No corporate data routes through it.
- **Accountants' and auditors' own infrastructure** — they receive documents via authenticated Google Drive shares or encrypted PDF by email. Their devices are not in our scope (they carry their own certifications).
- **Platform end-user devices (pupils, parents, teachers using the app)** — these are customer devices, never authenticated as administrators, and are out of CE scope. They access the service through the public web application under TLS.

Exclusions are reviewed at each annual re-certification.

---

## 9. Scope change control

Any of the following **triggers a scope review within 7 days**:

1. New employee or contractor onboarded
2. New corporate device purchased or brought into service
3. New SaaS adopted for corporate use
4. Office opened or moved
5. Network architecture change (new router, new ISP, VPN deployed)
6. New data category introduced (e.g. moving into a new regulated area such as health data)
7. Material change to an existing in-scope service (e.g. Supabase region change, new tier)

The CTO/DPO updates this document and notifies the certification body if a material change occurs mid-certification. IASME requires notification for any change that would alter the answers to the SAQ.

---

## 10. Sign-off

By signing below, the Director confirms that the scope described above is accurate and complete as of the date of signature, and that the organisation will operate within this scope until the next review.

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________

---

*Document version 1.0 — draft for signature. Do not certify until signed and dated above.*
