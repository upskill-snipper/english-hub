# Cyber Essentials (basic) — IASME Self-Assessment Questionnaire: Pre-filled

**Scheme:** Cyber Essentials (basic, not Plus)
**Certifying body:** IASME (the NCSC's sole accreditation body for Cyber Essentials)
**Fee:** £320 (micro, <10 employees) — correct as of April 2026
**Validity:** 12 months
**Re-certification:** annual
**Expected filing time:** 4–6 hours over 2–3 sittings
**To submit:** https://iasme.co.uk/cyber-essentials/

This document pre-fills the IASME SAQ based on The English Hub's actual tech stack and practices. **Review every answer** before submitting — the SAQ requires a company officer's legal sign-off.

---

## Part A · Your Organisation (identification)

| Field | Answer |
|---|---|
| Legal organisation name | **Upskill Energy Limited** |
| Trading name | The English Hub |
| Companies House number | **16511479** |
| Sector | Education / EdTech |
| Number of employees | 1 (founder) — may rise during year |
| Size category | Micro |
| Annual turnover | <£632k |
| Scope of certification | Whole organisation (all systems, all users, all premises) |
| Primary contact for certification | _[FOUNDER NAME], Director_ |
| Contact email | **security@theenglishhub.app** (create this alias before filing) |

---

## Part B · Scope

### B.1 · What is included in scope?

**Organisation-wide scope.** Everything Upskill Energy Limited operates as at the date of certification. Specifically:

- **Corporate endpoints:** founder's Windows 11 laptop (primary) and any future-issued employee devices
- **Mobile devices:** founder's iPhone used for business email, 2FA, and incidental development
- **Cloud services used to store or process business data:**
  - Google Workspace (email, documents, shared drive)
  - Microsoft 365 (if applicable — delete if not in use)
  - Supabase (database, auth)
  - Vercel (application hosting)
  - Stripe (payments — processor, PCI-DSS certified)
  - Anthropic + OpenAI APIs (AI marking)
  - Sentry (error monitoring)
  - PostHog (product analytics)
  - Cloudflare (CDN / DNS)
  - SendGrid (transactional email)
  - GitHub (source code)
- **Corporate networks:** founder's home broadband (with boundary firewall and WPA3 Wi-Fi), any future co-working offices
- **Out-of-scope:** personal devices not used for business purposes (family devices, separate personal phones)

### B.2 · Exclusions

None. Whole-organisation scope.

---

## Part C · The five technical controls

### C.1 · Firewalls and internet gateways

| Question | Pre-filled answer |
|---|---|
| Do you have firewalls at the boundary between your organisation's internal network and the internet? | **Yes.** Home broadband router (make/model: _[INSERT]_) provides SPI firewall; Windows Defender Firewall enabled on endpoint; Vercel edge firewall + Cloudflare WAF protect application layer. |
| Have the default admin passwords been changed on every boundary firewall? | **Yes.** Router admin password rotated to 16+ character random on setup. Documented in password manager. |
| Have all unauthenticated inbound connections been blocked? | **Yes.** No port forwards configured. All inbound services are in cloud (Vercel, Supabase). |
| Do you configure your firewall to require user authentication for any remote administration? | **Yes.** Router admin only accessible from LAN; disabled WAN-side admin. |

### C.2 · Secure configuration

| Question | Pre-filled answer |
|---|---|
| Have you removed or disabled unused software? | **Yes.** Windows 11 with bloatware removed; no unused development tools. |
| Have you changed default passwords on all operational systems? | **Yes.** Password manager (1Password / Bitwarden) used for all credentials; no defaults in use. |
| Have you disabled auto-run for removable media? | **Yes.** Windows auto-run disabled via Group Policy. |
| Have you disabled guest accounts? | **Yes.** Windows Guest disabled. |

### C.3 · User access control

| Question | Pre-filled answer |
|---|---|
| Are all user accounts created through a formal user-access request process? | **Yes.** Founder is the only user; access to each cloud service is provisioned on first need via SSO-where-available, MFA enforced. |
| Do you have a separate administrative account used only for administrative tasks? | **Yes.** Founder maintains one standard-user account for daily work and one administrator account for software installation and config changes on the laptop. |
| Is multi-factor authentication required for all cloud services that offer it? | **Yes.** MFA enabled on: Google Workspace, GitHub, Supabase, Vercel, Stripe, AWS (if applicable), Cloudflare, SendGrid, Anthropic, OpenAI, Apple ID, Microsoft account. TOTP via authenticator app (not SMS). |
| Are users granted only the privileges they need? | **Yes.** Stripe configured with restricted-scope API keys. Supabase service-role key used only in server-side code. |
| Are administrative accounts monitored and accounts disabled when no longer needed? | **Yes.** Access reviews on each service every 90 days. |

### C.4 · Malware protection

| Question | Pre-filled answer |
|---|---|
| Do you have malware protection on every device in scope? | **Yes.** Windows Defender (real-time protection on, definitions auto-update). iPhone: iOS sandboxing + App Store-only installs. |
| Is the protection up to date? | **Yes.** Auto-update enabled. |
| Are you using application allowlisting OR preventing users from installing untrusted software? | **Yes.** Founder is sole user; no untrusted software installed. Windows SmartScreen enabled. |
| Do you prevent connection to malicious websites? | **Yes.** Cloudflare DNS resolver with malware blocking. Chrome Safe Browsing enabled. |

### C.5 · Patch management

| Question | Pre-filled answer |
|---|---|
| Are all operating systems and firmware supported by the vendor? | **Yes.** Windows 11 (supported through 2031). iOS current. Router firmware current. |
| Are all software applications supported by the vendor? | **Yes.** Node.js LTS, current browsers, current IDE. |
| Are you applying security updates within 14 days of release for high/critical severity? | **Yes.** Windows Update set to install automatically. Dependabot enabled on GitHub for npm dependency patches. |
| Have you removed or disabled all software that is no longer supported? | **Yes.** No end-of-life software in use. |

---

## Part D · Declarations

### D.1 · Declaration of accuracy

> I confirm that the information provided in this questionnaire is accurate to the best of my knowledge as at the date of signing. I understand that providing false information may invalidate certification.

| Field | Answer |
|---|---|
| Signed by | _[FOUNDER NAME]_ |
| Role | Director |
| Date | _[DATE OF SUBMISSION]_ |

### D.2 · Evidence pack

IASME may request evidence for any answer. Have ready (already in `business-docs/compliance/cyber-essentials/03-evidence/`):

- Router model/firmware version screenshot
- Windows Defender status screenshot
- MFA enabled screenshots from Google, GitHub, Supabase, Vercel, Stripe
- Dependabot status screenshot from GitHub
- Password manager confirmation of unique password per service

---

## Part E · After submission

1. IASME reviews within **10 working days**. Common return-for-clarification points: scope ambiguity, MFA coverage gaps. Both pre-filled defensively above.
2. On pass, **certificate issued and added to iasme.co.uk directory**. Valid 12 months.
3. Add Cyber Essentials badge to:
   - Site footer (SVG in `public/badges/cyber-essentials.svg` — IASME provides the artwork)
   - `/for-schools` compliance block
   - `/pricing` Founding Schools tier ("Cyber Essentials certified" strapline)
   - Email signature
   - Pitch-deck slide on security
4. Add certificate PDF to `data-room/04-diligence/evidence/cyber-essentials-certificate.pdf`
5. Calendar re-certification 11 months from issue

---

## Cost summary

| Item | £ |
|---|---|
| Cyber Essentials basic certification | 320 |
| Password manager (1Password Business / Bitwarden Teams) | 60–120/yr |
| Optional: IASME-approved consultant to desk-check SAQ before submission | 250–500 |
| **Total year 1 (DIY, no consultant)** | **~£380** |

**For acquirers:** Cyber Essentials basic is the floor. **Cyber Essentials Plus** (£1,400–£2,500 with on-site audit) is the bar for MAT-scale deals and is recommended after first £500k ARR.
