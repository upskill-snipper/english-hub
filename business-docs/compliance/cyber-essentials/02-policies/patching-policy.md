# Patching Policy (Security Update Management)

**Policy ID:** ISMS-007
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Policy gives effect to the **"Security Update Management"** control theme of Cyber Essentials, which requires that software is kept up to date and that critical and high-severity vulnerabilities are remediated within tight timelines. It also fulfils the Company's obligation under Article 32 UK GDPR to implement appropriate technical measures.

## 2. Scope

Every piece of software on every in-scope device and service in `01-readiness/scope-of-certification.md`, including:

- Operating systems (macOS, iOS, iPadOS, Windows, Linux distributions)
- Firmware (laptop firmware, phone firmware, router firmware, peripheral firmware)
- Web browsers and browser extensions
- Email clients
- Productivity software (Office, Google Docs, Notion desktop app, Slack desktop app)
- Development tools and libraries used to build the Company's own platform
- Third-party dependencies of the Company's own platform
- Cloud service components under the Company's control (e.g. container images, serverless runtimes)

## 3. Patching SLAs

The Company applies the following maximum windows between a vendor's release of a security update and its deployment to the Company's estate:

| Severity (CVSS v3 base) | SLA (from vendor release to deployment) | Notes |
|---|---|---|
| **Critical (9.0–10.0)** | **14 days** | Cyber Essentials requirement. Shorter in practice for actively-exploited CVEs (target: 72 hours). |
| **High (7.0–8.9)** | **14 days** | Cyber Essentials requirement. |
| **Medium (4.0–6.9)** | **30 days** | Best practice. |
| **Low (0.1–3.9)** | **90 days** | Best practice. |
| **Informational / none** | Next routine update cycle | |

**Important:** Cyber Essentials' 14-day SLA applies to "critical **or** high-severity" vulnerabilities (anything with CVSS v3 ≥ 7.0) that have a patch available from the vendor. If the vendor has not released a patch, the Company tracks the issue in its risk register and implements compensating controls until a patch is available.

## 4. Patching mechanisms

### 4.1 Operating systems (automated where possible)
- **macOS:** System Settings → General → Software Update → Automatically keep my Mac up to date = ON. Install security responses and system files = ON.
- **iOS / iPadOS:** Settings → General → Software Update → Automatic Updates = ON, including Security Responses & System Files.
- **Ubuntu / Debian Linux:** `unattended-upgrades` enabled with `Unattended-Upgrade::Allowed-Origins::` including `security`. Automatic reboots scheduled outside working hours if required.
- **Windows (if any device in scope):** Windows Update auto-install = ON, "Receive updates for other Microsoft products" = ON.

### 4.2 Browsers and email clients
- **Chrome / Chromium browsers:** auto-update enabled by default and not disabled.
- **Safari:** updated with macOS.
- **Firefox:** auto-update enabled.
- **Mail clients:** updated with OS or via App Store.

### 4.3 Application software
- **macOS App Store apps:** auto-update enabled.
- **Homebrew-installed tools:** `brew update && brew upgrade` run at least monthly; security CVEs tracked via GitHub Dependabot-style alerts.
- **Linux apt packages:** unattended-upgrades handles security-origin repositories; `apt full-upgrade` run monthly for the rest.
- **Standalone apps (Slack, Notion, 1Password, Docker Desktop, etc.):** auto-update enabled in each app's preferences. Where an app does not auto-update, it is added to the monthly review list.

### 4.4 Firmware
- Laptop firmware updates ship with OS updates in most cases (Apple EFI, Lenovo/Dell via fwupd or vendor tool).
- Mobile firmware is part of the iOS/iPadOS/Android update.
- Router firmware is auto-updated by the ISP where applicable. If self-managed, firmware is checked monthly.

### 4.5 Application dependencies (Company platform)
- **npm packages** in the Company's own platform codebase are scanned by:
  - GitHub Dependabot (enabled on every repo)
  - `npm audit` run in CI on every pull request
  - Weekly manual review of the Dependabot dashboard
- Known critical/high CVEs in production dependencies are patched within 14 days of vendor release.
- Transitive dependencies with known vulnerabilities are upgraded or replaced; where no upgrade is available, a risk entry is opened and compensating controls applied.

### 4.6 Cloud services
- The Company's SaaS vendors are responsible for patching their own infrastructure (see Vendor Risk Management Policy). The Company verifies via the vendor's SOC 2 / ISO 27001 reports that vendors maintain an equivalent or stronger SLA.
- For IaaS/PaaS components under the Company's direct control (e.g. Vercel functions, serverless runtimes, Supabase Postgres extensions), the Company tracks vendor release notes and upgrades within the patching SLA.

## 5. Monitoring and evidence

The CTO/DPO tracks patch status monthly in `03-evidence/patch-log-template.csv`. Each entry records:

- Asset ID (matches asset inventory)
- OS / software
- Version before patching
- Version after patching
- Applicable CVEs (or "routine update" if no specific CVE)
- Severity
- Vendor release date
- Patch applied date
- Days between vendor release and patch applied (must be ≤ SLA)
- Confirmation by whom

A vulnerability scan is performed **monthly** (internal, authenticated, using OpenVAS or Nessus Essentials) to verify the log matches reality.

## 6. Exception handling

If a patch cannot be applied within the SLA (e.g. because applying it would break a critical business function):

1. The CTO/DPO documents the exception in the risk register.
2. A compensating control is implemented (e.g. network isolation, disabling the affected feature, or temporary use of an alternative system).
3. An alternative remediation plan with a firm deadline is recorded.
4. Exceptions older than 30 days are escalated to the Director.
5. No exception may persist past 90 days without re-approval.

Any exception involving a publicly-exploited CVE (e.g. listed on CISA's Known Exploited Vulnerabilities catalog) is escalated to the Director **immediately** regardless of the timeline.

## 7. End-of-life software

Software that is no longer receiving security updates from the vendor is **prohibited** on in-scope devices. Specifically:

- End-of-life operating system versions are removed within 14 days of the vendor's EOL date.
- End-of-life major application versions are removed within 30 days of vendor EOL, or immediately if a known exploitable vulnerability exists.
- The CTO/DPO maintains a forward-looking list of upcoming EOLs and plans migrations in advance.

As of the effective date of this Policy, there is no end-of-life software in scope.

## 8. Emergency patching

An **emergency patching process** is invoked when:

- A vendor releases an out-of-band patch for an actively-exploited vulnerability
- A CVE on CISA KEV is applicable to our estate
- The NCSC issues a targeted alert

Emergency patching aims to deploy the fix within **72 hours** of vendor release. The CTO/DPO communicates to all staff if any disruption is expected, and the patch is deployed during the shortest safe window.

## 9. Vulnerability intelligence sources

The CTO/DPO subscribes to and reviews:

- NCSC weekly threat report (ncsc.gov.uk)
- CISA Known Exploited Vulnerabilities catalog (cisa.gov/kev)
- Vendor security mailing lists (Apple security-announce, Google Chrome Releases, Mozilla Security, Ubuntu USN)
- Supabase, Vercel, GitHub, Stripe, OpenAI security bulletins
- GitHub Dependabot alerts on all Company repositories

Review cadence: weekly for the NCSC report, continuous for vendor alerts, weekly for Dependabot.

## 10. Verification

Monthly evidence review confirms:

1. Every in-scope device is running a currently-supported OS version.
2. No high/critical CVE has been open for longer than 14 days.
3. Every in-scope SaaS admin console shows no outstanding vendor security alerts.
4. Dependabot has zero open critical alerts and zero open high alerts older than 14 days.

If any of the above fails, an incident is raised and remediation is tracked to closure.

## 11. Responsibilities

| Role | Responsibility |
|---|---|
| CTO/DPO | Operates this policy day-to-day; monthly patch log; vulnerability intelligence; Dependabot triage |
| All staff | Do not defer OS or app updates; do not disable auto-update; apply updates within the requested window |
| Director | Approves exceptions with risk > 15 |

## 12. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft aligned to CE Montpelier 14-day SLA |

## 13. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
