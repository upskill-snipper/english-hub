# Access Control Policy

**Policy ID:** ISMS-002
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Policy sets the rules for how user access to Company information systems is granted, maintained, reviewed, and revoked. It gives effect to the "User Access Control" theme of Cyber Essentials and Article 32(1)(b) of UK GDPR.

## 2. Scope

All user accounts and access permissions on every in-scope device, cloud service, and corporate system listed in `01-readiness/scope-of-certification.md`.

## 3. Principles

1. **Least privilege** — every user is granted only the minimum access needed to perform their role.
2. **Separation of duties** — administrative and standard access are held in distinct accounts.
3. **Accountability** — every action is traceable to a unique, named user.
4. **Need to know** — access to sensitive data (tier 4) is restricted to those with a demonstrable business need.
5. **Time-boxed privilege** — elevated privilege is granted for the minimum necessary duration.
6. **Zero shared accounts** — no account is shared between two or more natural persons.

## 4. Account types

| Type | Description | Examples | Controls |
|---|---|---|---|
| **Standard user** | Day-to-day working account | Email, documents, web, coding under non-root user | MFA; 14+ char password; screen lock |
| **Administrator** | Privileged account used only for admin tasks | Device sudoers; cloud console admin; Git org owner | MFA with hardware key; separate account; logged actions |
| **Service account** | Non-human account for automation | CI/CD tokens, backup runners | 40+ char random token; scope-limited; secret in vault |
| **Break-glass** | Emergency access account used only when primary accounts are unavailable | Root recovery account on Supabase | Sealed in 1Password; audited after use |
| **Contractor** | Short-lived account for a named external contributor | Freelance developer invited to GitHub | Expiry set at creation; reviewed monthly |

## 5. Provisioning — joiner process

1. Hiring manager submits an onboarding ticket at least 3 working days before start date.
2. CTO/DPO confirms the required access based on the role and the principle of least privilege.
3. Standard user account created on each required system.
4. A separate administrator account is created only if the role requires it.
5. MFA is enforced at first login. The user completes MFA enrolment before gaining access to any production data.
6. The new user receives the Acceptable Use Policy and Information Security Policy on day 1 and acknowledges them in writing before access is granted.
7. Onboarding training (see Training & Awareness Policy) is completed within 7 days.

## 6. Privilege management

- Administrator privileges are approved in writing by the CTO/DPO.
- Elevation of a standard user to admin is documented in the access register (`03-evidence/user-access-review-template.csv`) with date, justification, and intended duration.
- Administrator accounts are **never** used for email, web browsing, document work, or meetings.
- For cloud services that support it, Just-in-Time (JIT) elevation is preferred over permanent admin roles — the user authenticates as a standard user and elevates on demand with a second factor.
- Root and superuser access to the production database is restricted to the CTO/DPO and is only used via break-glass procedure.

## 7. Offboarding — leaver process

When an employee, contractor, or service engagement ends, the following must occur **on or before the last working day**:

1. Standard user account disabled (not deleted) on every cloud service.
2. Administrator account disabled on every cloud service.
3. MFA devices removed from the user's profile.
4. Physical devices collected (if Company-owned) or remotely wiped (if BYOD — see BYOD Policy).
5. Session tokens and API tokens issued in the user's name revoked.
6. Email auto-forwarded to the CTO/DPO for a maximum of 30 days; then the account is archived.
7. Password manager vault access revoked; any shared vaults re-keyed.
8. Access register updated to show the disabled status and date.
9. After 30 days, disabled accounts are fully deleted unless legal hold applies.

A dry-run offboarding is performed at least annually to verify the process works end-to-end.

## 8. Access review

- **Quarterly user access review.** The CTO/DPO reviews every active account against `03-evidence/user-access-review-template.csv` and confirms:
  - The account still corresponds to a current staff member or contractor
  - The privilege level is still appropriate
  - MFA is still enrolled and functional
  - No unused accounts persist
- **Monthly admin audit.** Admin accounts are audited monthly against recent activity logs.
- **Ad-hoc review.** On any role change, the user's access is reviewed within 7 days of the change.

## 9. Multi-factor authentication (MFA)

MFA is **mandatory** for:

- Every administrative account on every cloud service
- Every standard user account on every cloud service where the service supports it (which is every service in our scope)
- The device unlock for every laptop and mobile device (biometric + passphrase)
- The password manager (1Password) using a hardware key + Secret Key + TOTP

**SMS MFA is prohibited** as a factor anywhere in the estate. This reflects NIST SP 800-63B guidance that SMS is a restricted authenticator and the well-documented SIM-swap attack vector.

Acceptable second factors: FIDO2 / WebAuthn hardware keys (primary), TOTP via authenticator app (backup), push notifications from a dedicated app.

## 10. Unsuccessful login handling

- Cloud services: vendor defaults apply (typically 5 failed attempts, 15-minute lockout).
- Devices: rate-limited biometric/passphrase unlock with progressive delays.
- Administrator accounts: 3 failed attempts triggers immediate alert to the CTO/DPO and lockout pending reset.

## 11. Session management

- Every cloud service is configured to expire sessions within the vendor's shortest supported timeout (typically 8–24 hours).
- Idle sessions on devices lock after a maximum of 10 minutes.
- Remembered devices in MFA are set to a maximum of 30 days where the option exists.

## 12. Records

The CTO/DPO maintains `03-evidence/user-access-review-template.csv` as the master record of access decisions. It is reviewed quarterly and retained for 3 years.

## 13. Exceptions

Any request for an exception to this Policy must be made in writing to the CTO/DPO, documented in the risk register, and approved by the Director.

## 14. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 15. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
