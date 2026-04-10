# Secure Configuration Policy

**Policy ID:** ISMS-010
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Policy gives effect to the **"Secure Configuration"** control theme of Cyber Essentials. Systems as delivered by vendors are often configured for ease of use rather than security. This Policy sets the baseline "hardened" configuration every device, system, and cloud service must be brought into before it is used for Company work.

## 2. Scope

- Every laptop, desktop, tablet, and phone in the Company estate
- Every cloud service in scope
- The Company's own production platform (Supabase, Vercel, Cloudflare)
- Any on-premise infrastructure (currently none)

## 3. Principles

1. **Harden by default.** Every new device and every new cloud service is configured to the hardened baseline **before** it is used for Company work.
2. **Remove what is not needed.** Default accounts, unused services, trial apps, and vendor bloatware are removed or disabled at onboarding.
3. **Document the baseline.** Each class of asset has a written baseline (below). Drift is identified at review and corrected.
4. **Test before deploying.** Configuration changes are tested in a non-production environment where practical.

## 4. Device baselines

### 4.1 macOS laptop (corporate standard)

A new or re-imaged macOS device is configured as follows before being used:

| # | Setting | Required |
|---|---|---|
| 1 | OS version | Current or N-1 major version (receiving security updates) |
| 2 | Automatic updates | On (OS, system data, security responses) |
| 3 | FileVault | On; recovery key stored in 1Password vault |
| 4 | Screen saver / lock | After ≤ 10 minutes of inactivity; require password immediately |
| 5 | Login screen | Name and password required (no list of users); do not display any hint |
| 6 | Guest user | Disabled |
| 7 | Default admin user | Removed or renamed; separate admin account created |
| 8 | Standard user account | Created for daily use, not an admin |
| 9 | Firewall | On (System Settings → Network → Firewall) |
| 10 | Stealth mode | On |
| 11 | Sharing services | All disabled unless required (no screen sharing, file sharing, SSH, etc.) |
| 12 | Location services | Enabled only for apps that need it (e.g. Find My Mac) |
| 13 | Siri | Off unless explicitly needed |
| 14 | iCloud Drive | Personal iCloud disabled on corporate device |
| 15 | iCloud Keychain | Off — 1Password is the password manager |
| 16 | Gatekeeper | "App Store and identified developers" (default) |
| 17 | SIP (System Integrity Protection) | Enabled |
| 18 | Automatic login | Disabled |
| 19 | Bluetooth | Disabled when not in use |
| 20 | Find My Mac | Enabled |
| 21 | Remote Apple Events | Disabled |
| 22 | Autoplay / auto-open downloads in Safari | Disabled |
| 23 | Unnecessary preinstalled software | Removed (iMovie, GarageBand, etc., if not needed) |
| 24 | Time sync | Enabled to Apple NTP |
| 25 | Audit logging | Unified logging enabled (default); retained ≥ 30 days |

### 4.2 Ubuntu / Debian laptop baseline

| # | Setting |
|---|---|
| 1 | Current or N-1 LTS version |
| 2 | `unattended-upgrades` enabled |
| 3 | Full-disk LUKS encryption |
| 4 | Screen lock after ≤ 10 minutes |
| 5 | `ufw` enabled, default deny incoming |
| 6 | AppArmor or SELinux enabled |
| 7 | ClamAV installed and freshclam running |
| 8 | Root login via SSH disabled (no SSH daemon running by default) |
| 9 | Sudo password required |
| 10 | Separate admin account (sudo) and daily user account |
| 11 | Automatic login disabled |
| 12 | Time sync enabled (systemd-timesyncd or chrony) |
| 13 | Unneeded services disabled (`systemctl list-unit-files`) |

### 4.3 iOS / iPadOS

| # | Setting |
|---|---|
| 1 | Current iOS / iPadOS major version |
| 2 | Automatic updates on (Settings → General → Software Update) |
| 3 | Passcode: 6+ digit PIN or alphanumeric passphrase; biometric unlock enabled |
| 4 | Auto-lock ≤ 2 minutes |
| 5 | Find My iPhone enabled |
| 6 | Erase data after 10 failed passcode attempts enabled |
| 7 | "Allow access when locked" restricted (no notification previews for sensitive apps; no control centre from lock; Siri disabled from lock) |
| 8 | USB Restricted Mode enabled (prevents USB accessories when locked > 1 hour) |
| 9 | App Store only (no sideloading) |
| 10 | Not jailbroken |

### 4.4 Windows (if any Windows device is in scope)

| # | Setting |
|---|---|
| 1 | Windows 11 or currently-supported LTS |
| 2 | BitLocker enabled on the system drive |
| 3 | Automatic Windows Update enabled |
| 4 | Microsoft Defender enabled with real-time protection |
| 5 | Windows Defender Firewall enabled on all profiles |
| 6 | SmartScreen enabled |
| 7 | Controlled folder access enabled |
| 8 | Standard user for daily work; separate admin account |
| 9 | Screen lock ≤ 10 minutes |
| 10 | Autoplay disabled |

## 5. Cloud service hardening baselines

### 5.1 Google Workspace (admin console)

- 2-step verification **enforced** for all users
- Hardware key **enforced** for admin accounts
- Password minimum length 14 characters
- Session length: default (reasonable)
- Less-secure app access: disabled
- External sharing of Drive documents: restricted (warn on sharing outside the domain; disable for sensitive folders)
- Email forwarding: disabled (prevents exfiltration via auto-forward rules)
- Audit logs: retained and reviewed monthly

### 5.2 Supabase

- Dashboard MFA enforced
- Service role key stored only in Vercel encrypted env vars and 1Password
- Row Level Security enabled on every table with personal data
- Database direct-access disabled from the public internet
- Point-in-Time Recovery enabled
- Backup retention configured per Data Backup Policy

### 5.3 Vercel

- Team MFA enforced
- Deployment Protection enabled on preview environments
- Environment variables segregated by environment (production, preview, development)
- Branch-to-environment mapping restricted to approved branches
- Audit log retention enabled

### 5.4 GitHub

- Organisation 2FA required
- Branch protection on `main` and `production`: required reviews, status checks, no force-push, no delete
- Secret scanning enabled on every repository
- Dependabot enabled on every repository
- Signed commits preferred (and required on protected branches where practical)
- Repository visibility: private by default

### 5.5 Stripe

- MFA enforced for every team member
- Restricted API keys only (no full-access keys in production code)
- Webhook signing secret rotated annually
- Payout schedule and refund permissions restricted

### 5.6 OpenAI API

- Org-level MFA enforced
- **Zero Data Retention (ZDR)** enabled on relevant endpoints so pupil data is not retained for training
- API keys scoped and rotated annually
- Usage alerts configured

### 5.7 1Password

- Master passphrase 20+ characters
- Secret Key backed up to a physically-secured medium
- Hardware key as MFA
- Travel mode available for international travel
- Activity log reviewed monthly

### 5.8 Notion, Slack, Linear

- Org-level MFA enforced
- Member permissions scoped appropriately
- External sharing of sensitive pages disabled
- Audit log retained per plan

## 6. Own platform hardening

The Company's own product platform is configured with:

- HTTPS enforced everywhere (no plaintext HTTP)
- HSTS with 1-year max-age on the apex domain
- Secure, HttpOnly, SameSite=Lax on all cookies
- Content Security Policy (CSP) with strict defaults
- X-Frame-Options: DENY (or CSP `frame-ancestors 'none'`)
- Referrer-Policy: strict-origin-when-cross-origin
- Subresource Integrity on third-party scripts where practical
- Security headers monitored via Mozilla Observatory or similar (target grade A or better)
- Rate limiting on auth endpoints
- Bot protection on signup/login via Cloudflare

(Technical implementation details live in `src/` under the control of the engineering agent and are not modified by this compliance agent.)

## 7. Decommissioning

When a device leaves Company use:

- macOS: "Erase All Content and Settings" (Apple's full-crypto-wipe) — signs out of iCloud, revokes FileVault, factory resets
- iOS / iPadOS: factory reset after signing out of iCloud
- Linux: `cryptsetup erase` on the LUKS header, then full-disk dd with random data, then destroy the key
- Windows: "Reset this PC → Remove everything → Clean data"
- Old device not to be re-used by anyone else is physically destroyed (drill through the SSD) and the destruction is witnessed.

## 8. Drift detection

Quarterly review:

- CTO/DPO opens each device and walks the §4 checklist
- CTO/DPO opens each cloud admin console and walks the §5 checklist
- Any drift is corrected on the spot or logged in the remediation tracker
- A screenshot evidence set is captured

## 9. Change control

Any change to the baselines in this Policy is proposed by the CTO/DPO, tested, and then rolled out to the estate with the next quarterly review (or sooner if the change is security-critical).

## 10. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 11. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
