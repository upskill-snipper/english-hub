# Bring Your Own Device (BYOD) Policy

**Policy ID:** ISMS-006
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Policy sets the conditions under which personally-owned devices may be used to access Company information systems or data. It balances the legitimate desire of staff to use their own devices with the Company's obligation to protect personal data, particularly the data of children.

## 2. Scope

Every personally-owned device (laptop, desktop, tablet, phone, smartwatch) that is used by any staff member or contractor to:

- Access Company email, cloud services, or production systems
- Store Company data (even transiently, such as a downloaded attachment)
- Authenticate to a Company system (including as an MFA device)
- Perform any work activity for the Company

A personal device becomes "in scope for BYOD" the first time any of the above happens. It does **not** cease to be in scope simply because the user deletes the app or the file.

## 3. Principle

Company-provided devices are the **default**. BYOD is permitted only by exception and only where the device meets every requirement in this Policy. Staff do not have a right to BYOD.

## 4. Approval process

Before using a personal device for Company work, the staff member must:

1. Submit a written request to the CTO/DPO stating: device make/model, OS and version, primary use case, and why a Company device is not sufficient.
2. Demonstrate that the device meets every requirement in §5.
3. Agree in writing to the terms in §7 (including the right of the Company to remotely wipe corporate data).
4. Have the device enrolled in Mobile Device Management (MDM) or accept compensating controls where MDM is not practical.

Approval is at the CTO/DPO's discretion and may be revoked at any time.

## 5. Minimum device requirements

A personal device is approved for BYOD **only** if all of the following are true:

| # | Requirement |
|---|---|
| 5.1 | The OS is currently supported by the vendor and receiving security updates |
| 5.2 | The OS version is within 1 major release of the current vendor release |
| 5.3 | Automatic OS updates are enabled |
| 5.4 | Full-disk encryption is enabled (FileVault, BitLocker, LUKS, Android full-device encryption, iOS default) |
| 5.5 | A device passcode or passphrase of 6+ digits (PIN) or 14+ characters (passphrase) is set |
| 5.6 | Biometric unlock is enabled as a convenience factor on top of the passcode |
| 5.7 | Screen lock after ≤ 2 minutes (mobile) or ≤ 10 minutes (laptop) of inactivity |
| 5.8 | Host firewall is enabled (laptops/desktops) |
| 5.9 | Anti-malware is active (platform built-in is acceptable for macOS/iOS/Windows; Linux must run ClamAV or equivalent) |
| 5.10 | The device is not jailbroken or rooted |
| 5.11 | No sideloaded apps from untrusted sources |
| 5.12 | For mobile: "Find My iPhone" / "Find My Device" or equivalent remote-wipe capability is enabled |

Devices that do not meet all 12 requirements are not approved.

## 6. Device categories and specific rules

### 6.1 Personal laptop / desktop

- Corporate work performed in a separate user profile from personal use where practicable.
- Company data accessed only through the browser or through approved applications.
- Company data is not downloaded to local storage for long-term keeping. Downloaded working copies are deleted when no longer needed and emptied from the trash.
- No use of personal cloud backup to back up Company data (e.g. iCloud Drive automatically syncing work documents to personal iCloud).

### 6.2 Personal mobile phone

Permitted uses:

- Corporate email through the approved email app (Gmail, Apple Mail, Outlook) with the corporate mailbox segregated where the app supports it
- 2FA (TOTP) codes in 1Password or another approved authenticator
- Slack, Linear, and similar collaboration apps
- Receipt of SMS notifications for non-sensitive alerts (but never SMS as a second factor)

Not permitted:

- Downloading or storing pupil data or other Tier 4 data
- Running production database queries
- Acting as a long-term Company backup or archive

### 6.3 Personal tablet

Treated as a mobile phone under §6.2 unless it is used for significant document work, in which case it is treated as a laptop under §6.1.

### 6.4 Smartwatch

Permitted for notifications only. Must have a passcode if it holds Company notification content.

## 7. Terms accepted by the BYOD user

By using a personal device for Company work, the staff member agrees that:

1. The Company may remotely remove or "wipe" corporate data from the device at any time. This includes the right to wipe personal data that is co-located with corporate data in shared storage where separation is not possible — although every effort will be made to limit the wipe to corporate data.
2. The Company may require the device to be presented for technical inspection during an incident or audit.
3. The Company may revoke BYOD permission for any reason and require the staff member to remove all corporate data and apps from the device within 24 hours.
4. The Company is not responsible for personal data loss, device damage, or support of the device. BYOD is at the user's own risk.
5. The Company does not reimburse the cost of personal devices or associated mobile/broadband bills unless a separate stipend agreement is in place.
6. All provisions of the Acceptable Use Policy, Password Policy, and Information Security Policy apply to the device when it is being used for Company work.

## 8. Incident handling for BYOD

If a BYOD device is lost, stolen, suspected to be compromised, or if the staff member leaves the Company:

1. The staff member notifies the CTO/DPO immediately.
2. The CTO/DPO revokes all sessions on the affected user accounts.
3. A remote wipe is initiated if possible.
4. The event is logged as an incident per the Incident Response Policy.
5. The staff member cooperates with the CTO/DPO's investigation.

## 9. Offboarding

When a staff member leaves the Company (or ceases BYOD):

1. All corporate apps are removed from the device by the staff member, witnessed by the CTO/DPO (e.g. via screen share).
2. All corporate data is deleted from the device, including any local downloads.
3. The staff member's account on every corporate service is revoked per the Access Control Policy.
4. Any MFA tokens on the device are removed from the user's account.
5. The device is removed from the asset inventory.
6. The offboarding BYOD wipe is recorded in the access review log.

## 10. Data protection and privacy

- The Company respects the privacy of staff personal data on BYOD devices. It does not monitor personal activity.
- Any MDM or management agent deployed on a BYOD device is limited to corporate data and app containers where the platform supports separation.
- Staff are informed of what the Company can and cannot see on their BYOD device before they enrol.
- If a wipe is necessary, the Company will where possible perform a corporate-only wipe rather than a full device wipe. Staff are strongly encouraged to back up personal data before granting BYOD access.

## 11. Prohibited BYOD uses

Even with approval, BYOD is **never** permitted for:

- Production database administration
- Holding the only copy of any Company data
- Acting as a primary workstation for a full-time staff role (a Company device is expected for this)
- Any role with access to a very large volume of pupil data (the Director and CTO are expected to use Company-owned devices for this)

## 12. Current status

As of the effective date of this Policy, there is **no active BYOD usage** at The English Hub. The Director uses Company-owned devices only. This Policy exists to govern any future BYOD approval request.

## 13. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 14. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
