# Remote Working Policy

**Policy ID:** ISMS-005
**Version:** 1.0
**Effective date:** [Date of signature]
**Next review:** 12 months
**Owner:** CTO / DPO
**Approved by:** Director
**Parent policy:** ISMS-001 Information Security Policy

---

## 1. Purpose

The English Hub is a remote-first organisation. Almost all work is performed away from a traditional office. This Policy ensures that remote working does not weaken the Company's security posture and that staff have clear rules for protecting Company data outside a controlled office environment.

## 2. Scope

All staff, all Company-owned devices, and all personally-owned devices that access Company data, whenever they are used outside a physical Company office (which, as of 2026-04-10, is always).

## 3. Approved remote working locations

Work may be performed from:

- **Home** (the staff member's primary residence) — the default expectation. The home office is treated as a quasi-office and the staff member is responsible for its physical security.
- **Client or customer premises** — where invited, and with customer permission. Work performed under customer's physical security controls.
- **Trusted third-party locations** such as a co-working space, a family/trusted residence, or a hotel room — provided the staff member takes additional care (see §5).
- **Short-term travel** including airports, trains, and planes — with additional care (see §6).
- **Overseas travel** — requires prior approval from the CTO/DPO and may impose additional restrictions depending on destination (see §7).

Work must **not** be performed:

- In untrusted public spaces where shoulder-surfing is a material risk (e.g. crowded cafés for sensitive work)
- In any location where the staff member cannot keep the device in their physical possession and line of sight
- In countries subject to UK government sanctions or with a hostile-state cyber-threat profile, unless expressly approved

## 4. Home office requirements

Staff working from home must ensure that:

1. A **lockable room or a locked cabinet** is available for the storage of devices when not in use, or the device is not left in an accessible location.
2. The home internet is **WPA3 or WPA2-AES encrypted** (no WEP, no open Wi-Fi).
3. The home router's **default admin password has been changed**; the current password is stored in the Company password manager.
4. A **guest network** is configured for non-corporate devices where the router supports it.
5. Other household members do not use the staff member's work devices, and the staff member does not share their work account password with anyone.
6. The home environment supports **clean-desk / clean-screen** practices during working hours (see Clear Desk & Clear Screen Policy) — sensitive material is not visible to visitors.
7. Confidential conversations (calls, screen-shares) are conducted in a setting where they cannot be overheard.

## 5. Working from third-party / public locations

Additional rules when working outside the home:

1. The device is **never left unattended**, even briefly. Take it to the bathroom. Don't leave it on a café table while ordering.
2. A **privacy screen filter** is used whenever sensitive data might be on screen and other people are nearby.
3. **Video calls are avoided** in crowded public spaces where audio leaks sensitive information.
4. The device's **host firewall** is on and **anti-malware active** before connecting to any public Wi-Fi.
5. **Avoid using public charging ports (USB)** — use a power-only adapter or a USB data-blocker ("juice-jacking" risk).
6. Work is **paused** if the staff member feels the environment is compromised (e.g. suspicious shoulder-surfer).
7. Do **not** use public shared PCs (hotel business centres, internet cafés) for any Company task.

## 6. Travel (within the UK and the EU)

In addition to §5:

1. The device is carried in hand-luggage — never checked in.
2. The device is powered off (not just asleep) during security checks, border crossings, and when in transit between locations, so that full-disk encryption is in a cold-boot state.
3. Before travel, the staff member checks that the device's OS, browser, and antivirus are up to date.
4. 2-factor backup codes are **not** carried on the same device as the primary account (store backup codes in 1Password vault which requires hardware key to unlock).

## 7. International travel outside the UK/EU

In addition to §5 and §6:

1. CTO/DPO approval is required at least 7 days before travel.
2. Staff may be asked to take a **travel-only device** (clean, minimal data load) instead of their regular laptop for travel to high-risk destinations.
3. Sensitive data is not downloaded to the device before travel; it is accessed online only as needed.
4. Upon return, the device is reviewed for signs of tampering by the CTO/DPO before being reconnected to production systems.
5. At the border, staff comply with any lawful request from border officials but **do not voluntarily disclose credentials**. If compelled to unlock a device, the staff member notifies the CTO/DPO as soon as possible so that credentials can be rotated.

## 8. Use of VPN

A VPN is **not currently required** because the Company's cloud services all enforce authentication (MFA + strong passwords) at the application layer and all traffic is encrypted in transit. The identity perimeter is the security boundary.

A personal VPN (e.g. Mullvad, Proton VPN) is **permitted** for privacy reasons when on untrusted networks, provided the VPN does not interfere with authentication or monitoring.

## 9. Data handling while remote

- Sensitive data (Tier 4 — pupil data) is **never** downloaded to local device storage where avoidable. Access it through the authenticated cloud UI.
- Where a local working copy is necessary (e.g. for offline analysis), the file is stored inside the encrypted home directory on a full-disk-encrypted device and deleted as soon as it is no longer needed.
- **Printing** sensitive data while remote requires CTO/DPO approval. Any printouts are shredded (cross-cut, min P-4 security level) immediately after use.
- **Discarded devices** (e.g. replaced laptops) are wiped per the Secure Configuration Policy before disposal or return.

## 10. Connectivity and networks

- The staff member's home broadband is considered in-scope for CE purposes (the home router is the perimeter firewall for home-based work).
- Public Wi-Fi may be used because the security perimeter is the host firewall + cloud auth, not the network. However, staff should prefer tethered mobile data over open Wi-Fi where possible because it reduces adversary opportunity.
- Open / unencrypted Wi-Fi is avoided. WPA2 or better is required. If only open Wi-Fi is available, a personal VPN should be used.

## 11. Equipment care

- Company-provided equipment is insured by the Company and must be cared for as a responsible user.
- Lost, stolen, or damaged equipment is reported to the CTO/DPO **within 1 hour** of discovery.
- Personal equipment used under BYOD is the staff member's own responsibility for care, but the Company may remotely wipe corporate data from it (see BYOD Policy).

## 12. Working hours and wellbeing

- Remote working is not "always-on" working. Staff are expected to maintain healthy boundaries between work and personal time.
- Out-of-hours incident response is compensated (e.g. time off in lieu).
- The Company supports staff with ergonomic home-office equipment on reasonable request.

## 13. Acknowledgement

Every staff member who works remotely (i.e. every staff member) must read and acknowledge this Policy on joining the Company and annually thereafter.

## 14. Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-04-10 | CTO/DPO | Initial draft |

## 15. Sign-off

**Name:** _________________________________
**Role:** Director
**Signature:** _________________________________
**Date:** _________________________________
