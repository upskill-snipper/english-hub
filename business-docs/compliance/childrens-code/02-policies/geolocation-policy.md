# Geolocation Policy (Children)

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Data Protection Lead
**Last updated:** 2026-04-10

---

## 1. Purpose

This policy implements **Standard 10** of the ICO Age Appropriate Design Code:

> *"Switch geolocation options off by default (unless you can demonstrate a compelling reason for geolocation to be switched on by default, taking account of the best interests of the child). Provide an obvious sign for children when location tracking is active. Options which make a child's location visible to others must default back to 'off' at the end of each session."*

## 2. Scope and definitions

This policy covers:

- **Precise geolocation** — GPS, Wi-Fi triangulation, or any location data with accuracy better than ~1km, typically obtained through the browser Geolocation API or a mobile platform API
- **Coarse geolocation** — country/region inference from IP address, used for security and service routing
- **Any feature that makes location visible to another user** — peer maps, "find study buddies near you", location-tagged posts

It does **not** cover time zone detection (which we derive from the browser's locale settings, which doesn't identify the user's location beyond an offset like UTC+1).

## 3. Core rules

### 3.1 Precise geolocation: not requested, not collected, not offered

The English Hub does not, on any child-facing or parent-facing surface, call the browser Geolocation API (`navigator.geolocation.*`) or any equivalent mobile API. No child on our service is ever prompted to grant location access.

This is enforced by:
- **Code review rule:** no PR to `src/` may introduce a call to `navigator.geolocation` or mobile equivalents without Data Protection Lead sign-off
- **Content Security Policy:** the CSP for the child app restricts browser features via `Permissions-Policy: geolocation=()`, which blocks the API at the browser level
- **Static check:** a linter rule blocks introductions of these calls
- **Automated audit:** a build-time scan fails CI if any geolocation API symbol appears in a bundle destined for the child app

### 3.2 Coarse geolocation: security-only

We use the user's IP address to infer country (and occasionally region) for:
- Routing to the closest hosting region
- Anti-abuse / anti-fraud — e.g., spotting a sudden login from a new country
- Compliance — ensuring UK / EU data residency

This inference:
- Happens server-side only; the client never learns its own "geo" from us
- Is not exposed to other users — no "someone in London is also practising" visual cues
- Does not feed any recommendation or ranking system
- Is logged only in short-lived security logs (see `data-minimisation-for-children.md`)
- Uses IP truncation on write: the last octet of IPv4 / last 80 bits of IPv6 are discarded before storage

### 3.3 No location-sharing features

The English Hub does not offer any feature whose purpose is to share a child's location with another user or entity. We do not have:

- A study-buddy map
- "People nearby" listings
- Location-tagged social features
- Check-ins
- Location-tagged essays or posts
- Parent "find my child" tracking

This is an architectural decision based on the minimal educational value of such features and the high safety risk to teenagers.

### 3.4 No background location

We do not use background location on mobile. Our mobile PWA does not declare location permissions in its manifest.

## 4. "End of session" default reset

Standard 10 requires that any default allowing location visibility revert to "off" at the end of each session. Because we do not have any location features that can be "on", the default state is permanently "off" and the requirement is satisfied vacuously. This will be reassessed if any location feature is ever proposed (spoiler: we expect the answer to remain "no").

## 5. What a child sees

Because we never request location, children never see a location permission prompt from The English Hub. If a child sees a browser dialog asking for location access while using our service, that dialog is **not from us** — it could be a browser extension or a malicious page. Children are told in the child-friendly privacy policy: *"We never ask where you are. If something on your screen asks you to share your location 'for The English Hub', please don't, and tell us."*

## 6. Exceptions

None currently. A future feature that could conceivably justify geolocation (for example, a test-centre locator for external exams) would require:
1. A new, specific DPIA
2. Rewrite of this policy to add a named exception with clear justification
3. An opt-in flow, off by default, with equal-weight buttons and plain-language explanation
4. A visible indicator while location is being used
5. A session-end auto-revert
6. Review by the Data Protection Lead

## 7. Third-party services

- Our hosting region is pinned to UK/EU so that IP → country routing is limited and auditable
- Our error monitor receives IP + user_id but not precise location; IP is dropped from the record after 24 hours
- Our analytics provider is configured without IP-based geolocation; country inference is disabled where that setting exists

## 8. References

- ICO Age Appropriate Design Code, Standard 10
- Article 4(1) UK GDPR — "personal data" includes location data
- W3C *Permissions Policy* — `Permissions-Policy` header reference
- ICO guidance on children's location data (in the children's section of the ICO website)

## 9. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
