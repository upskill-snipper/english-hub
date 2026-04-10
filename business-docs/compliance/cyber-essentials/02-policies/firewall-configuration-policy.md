# Firewall Configuration Policy

**Policy ID:** ISMS-009
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

This Policy sets the baseline configuration for every firewall in the Company's scope and gives effect to the **"Firewalls"** control theme of Cyber Essentials.

## 2. Scope

All firewalls protecting any in-scope asset:

- **Boundary firewalls** — the home router providing perimeter protection for the home office; any future on-premise firewall
- **Host-based firewalls** — every corporate laptop and desktop
- **Cloud-provider firewalls** — Supabase network restrictions, Vercel firewall / WAF, Cloudflare, GitHub IP allow-lists (where used)
- **Application-layer firewalls** — Cloudflare WAF in front of public-facing services

## 3. Design principles

1. **Default deny.** All inbound traffic is denied unless explicitly permitted. Outbound traffic is permitted by default, with specific egress restrictions applied where necessary (e.g. production backend services should not be reachable from the wider internet except through the intended entry points).
2. **Least exposure.** Only services that must be exposed to the internet are exposed. Internal-only services are never exposed.
3. **Principle of identifiable rules.** Every allow-rule has a documented business justification, owner, and review date.
4. **Defence in depth.** Host firewalls provide a second line of defence even where a boundary firewall is present.
5. **Regular review.** The rule base is reviewed quarterly at minimum.

## 4. Boundary firewall — home router

**Device:** ISP-provided home router at Director's home address.
**Role:** Boundary firewall for the home office.

Required configuration:

| Setting | Required value |
|---|---|
| Admin password | Changed from default; 20+ char random; stored in 1Password |
| Remote management (WAN) | Disabled |
| UPnP | Disabled where the router allows (some ISPs mandate UPnP on; a compensating host-firewall is the mitigation) |
| Default inbound rules | Deny all |
| Port forwarding | None |
| DMZ host | Disabled |
| Wi-Fi encryption | WPA3 where supported; WPA2-AES as the minimum |
| Wi-Fi password | 20+ char random; stored in 1Password |
| Guest network | Enabled for non-corporate devices where supported |
| Guest isolation | Enabled so guest devices cannot see corporate devices |
| Firmware | Auto-update enabled (or manually checked monthly where auto-update is unavailable) |
| WPS | Disabled |
| Admin UI HTTPS | Enabled |
| DNS | Cloudflare 1.1.1.1 for Families (malware filtering) |

The configuration is verified at onboarding and reviewed **quarterly** by the CTO/DPO. Screenshots of the router admin UI showing each setting are retained in the evidence folder.

If the Director moves house or changes ISP, a new router is onboarded under this same checklist before being used for Company work.

## 5. Host-based firewalls

Every in-scope laptop/desktop runs a host firewall at all times:

| Platform | Firewall | Configuration |
|---|---|---|
| macOS | Application Firewall (System Settings → Network → Firewall) | On; "Block all incoming connections" where feasible for travel mode; built-in services and code-signed apps allowed |
| Ubuntu / Debian | ufw (Uncomplicated Firewall) | Default deny incoming, allow outgoing; specific allow-rules only for development tools as needed |
| Windows | Windows Defender Firewall | On for Domain, Private, and Public profiles; "Block all incoming" on Public profile |

Host firewalls are **always on**, including at home. They provide the final line of defence when a device is on an untrusted network and do not require disabling when at home.

## 6. Cloud firewalls and network policies

### 6.1 Cloudflare (in front of public-facing services)

- **TLS minimum:** TLS 1.2 (TLS 1.3 preferred)
- **Always Use HTTPS:** enabled
- **HSTS:** enabled with 1-year max-age
- **WAF managed rules:** enabled (OWASP core rule set + Cloudflare managed rules)
- **Bot fight mode:** enabled
- **Rate limiting:** applied to auth endpoints (login, password reset) at a sensible threshold
- **Country blocking:** not routinely applied, but enabled reactively in response to an incident
- **Firewall rules:** block known bad IP ranges reported by Cloudflare's threat intelligence

### 6.2 Vercel

- Deployment protection enabled on preview deployments (password or SSO, not public)
- Environment variables stored in Vercel's encrypted store, scoped to the correct environment
- Only the production custom domain is public; preview URLs are protected
- Vercel's own firewall features used where the plan permits

### 6.3 Supabase

- **Database direct-access** disabled from the public internet; Postgres reachable only via the Supabase proxy and private network
- **Row Level Security** enabled on every table holding personal data (this is an app-layer control but complements the firewall)
- **Service role key** never exposed to the client; only used server-side
- **Network restrictions** applied where the plan supports it — database and storage locked to Supabase's own network + Vercel egress IPs

### 6.4 GitHub

- Branch protection on `main` and `production` branches: required reviews, required status checks, no force pushes
- Secret scanning enabled
- Dependabot enabled
- IP allow-list considered but not currently enforced (would break mobile working). Two-factor on every contributor as compensating control.

## 7. Egress controls

For devices and cloud compute:

- Outbound internet access is permitted for normal operation.
- Sensitive services (Supabase service role, Stripe API, OpenAI API) are only called from server-side code running on Vercel, not directly from the browser. This keeps API keys off the client.
- DNS egress from devices goes to Cloudflare 1.1.1.1 for Families to filter malware domains.

## 8. Rule base management

For every allow-rule or open port, the CTO/DPO records:

- Rule ID
- Source / destination (as applicable)
- Protocol and port
- Business justification
- Owner
- Review date
- Last reviewed

The rule base is reviewed **quarterly**. Any rule that no longer has a justification is removed. Any rule that has drifted from its original scope is tightened.

## 9. Evidence

The following evidence is maintained for audit:

- Screenshots of the home router admin UI dated within the last 90 days
- Screenshots of each host firewall showing "enabled" dated within the last 90 days
- Cloudflare, Vercel, Supabase, and GitHub configuration screenshots or CLI exports dated within the last 90 days
- Quarterly rule-base review minutes

All evidence is stored in the evidence folder and referenced from the SAQ.

## 10. Change control

Any change to a firewall rule or configuration is:

1. Documented in the change log (even if informal for a sole-operator environment)
2. Accompanied by a justification
3. Reviewed for potential security impact
4. Rolled back immediately if it introduces unintended exposure

## 11. Testing

- External-facing services are scanned monthly for unexpected open ports (using `nmap` from an off-network source or an online scanner).
- The pre-audit dry run includes an authenticated and unauthenticated Cyber Essentials-equivalent scan to catch any rule that contradicts this Policy.
- Any finding is remediated before audit day.

## 12. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 13. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
