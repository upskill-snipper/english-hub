# Data Minimisation for Children

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Data Protection Lead
**Last updated:** 2026-04-10

---

## 1. Purpose

This policy implements **Standard 8** of the ICO Age Appropriate Design Code, together with the data minimisation principle of Article 5(1)(c) UK GDPR. The code's wording: *"Collect and retain only the minimum amount of personal data you need to provide the elements of your service in which a child is actively and knowingly engaged. Give children separate choices over which elements they wish to activate."*

This policy goes further than the general adult baseline already covered in `LEGAL_COMPLIANCE_REPORT.md`, because we process children's data and therefore apply a stricter standard.

## 2. The minimum dataset (child accounts)

We collect only the fields below from a child user. Any field not on this list is not collected. New fields may only be added after a documented justification against this policy, signed off by the Data Protection Lead.

| Field | Required? | Purpose | Retention |
|---|---|---|---|
| Email address | Yes | Login identifier; security notifications | While account exists, +12 months on deletion |
| Hashed password | Yes | Authentication | While account exists |
| First name | Yes | Personalisation ("Hi Aisha"); teacher visibility | While account exists |
| Year group / age bracket | Yes | Content targeting; default-setting | While account exists |
| Signup path (`self`, `teacher`, `parent`) | Yes | Applying correct consent / controls | While account exists |
| Consent records | Yes (for under-13s) | Evidencing Article 8 compliance | Account lifetime + 12 months |
| Essay submissions | Yes (when used) | Core service: marking, feedback | While account exists; deletable per-essay |
| Practice answers and scores | Yes (when used) | Core service: progress tracking | While account exists; deletable |
| Device + browser metadata | Yes | Security logging; bug reproduction | Rolling 30 days in security logs |
| IP address | Yes (transient) | Security; rate-limiting | 24 hours (last octet truncated on write) |
| Opaque `user_id` | Yes | Keying records internally | While account exists |

## 3. The "never collected" list

The following are **never** collected from child accounts — neither by the child-facing app nor by any analytics/advertising/marketing tool:

- Full legal name (except where a school provides a roster; even then, surname is only visible on teacher surfaces)
- Home address, postcode (beyond coarse inference from IP for security)
- Telephone number
- Precise GPS / HTML5 geolocation
- Biometric data (face, voice, fingerprint)
- Health or special-category data (beyond what a student might voluntarily include in an essay, which is treated under essay-content rules)
- Political views, religion, sexual orientation
- Contact lists, social graph
- Advertising identifiers (IDFA, GAID, etc.)
- Cross-site browsing history
- Screen recordings / session replay of user interactions
- Keystroke-level input logs
- Full date of birth (beyond the age-gate transaction)
- Parent's financial data beyond what the payment processor handles (we do not touch card numbers)

## 4. Data-field register

Every personal data field in our system is listed in the data-field register (maintained as `business-docs/compliance/data-field-register.md` — to be created by the legal compliance workstream). Each entry includes: field name, justification, lawful basis, retention, and the feature it supports.

A field is reviewed if:
- It has no associated feature
- Its feature has been deprecated
- Its retention has been exceeded
- No query has touched it in 12 months

A field failing review is scheduled for removal in the next release.

## 5. Separate choices for separate elements

Standard 8 requires that children be given *separate choices* over which elements of the service they wish to activate. Bundled consent ("use of the app means you agree to everything") is not permitted.

Current feature → data mapping:

| Feature | Child opt-in required? | Extra data collected for this feature |
|---|---|---|
| Core practice (questions + self-marking) | No (core of contract) | Practice answers, scores |
| AI essay marking | No (default on, justified exception) | Essay content sent to AI processor |
| Adaptive ordering | No (default on, justified exception) | Performance metadata |
| Leaderboards | Yes | Class-scoped visible score |
| Peer messaging | Yes | Message content, recipient |
| Push notifications | Yes | Device push token |
| Personalised content recommendations | Yes (from GAP-7A) | Recommendation-model inputs |
| Marketing emails | Yes + parental consent if under 13 | Marketing preference |
| Analytics cookies | Yes + parental consent if under 13 | Analytics events |
| Research participation | Yes + parental consent | Research-specific data |

## 6. Retention

The default retention for every item of child data is: **as long as the account exists, and no longer**. A user or parent can delete earlier.

Specific retention rules:
- **Inactive accounts** — email warning at 23 months of inactivity; automatic deletion at 24 months (GAP-8B until automation is live)
- **Deleted accounts** — data removed from production within 24 hours; from backups within 30 days as backups roll forward
- **Security logs** — 90 days max
- **IP addresses** — 24 hours; last octet truncated on write
- **Consent records** — account lifetime + 12 months (to evidence lawfulness of historical processing)
- **Essays** — child can delete any individual essay at any time
- **AI sub-processor** — zero retention; prompts + responses not retained by the AI provider (contractual)

## 7. Minimisation in engineering practice

- **No `SELECT *`**: queries should select explicit columns, avoiding incidental exposure of fields not needed for the task
- **No free-text logs of user input**: logs should contain IDs and event types, never essay content
- **No tokens in URLs**: auth/session data lives in HttpOnly cookies, not query strings
- **Analytics events** go through an allowlist of properties; a lint rule (planned) blocks unknown property names
- **Data exports** shipped off-platform (support exports, backups) contain the minimum identifying data necessary, and are encrypted at rest
- **Error reports** strip `user.email`, `essay.body`, and similar before sending to our error monitor; `user.id` (opaque) is the only identifier allowed

## 8. Data-minimisation audits

- Quarterly review of the data-field register — any field failing the test in §4 is ticketed
- Annual review of retention against actual retention metrics (are we really deleting inactive accounts?)
- Annual review of analytics events — what's collected vs. what's actually queried in the last 12 months; anything queried zero times is a candidate for removal

## 9. Gaps against this policy

See `01-assessment/gap-analysis.md`:
- GAP-8A (analytics events carrying email)
- GAP-8B (automated dormant-account deletion)

## 10. References

- Article 5(1)(c), Article 5(1)(e) UK GDPR
- ICO Age Appropriate Design Code, Standard 8
- ICO, *Children and the UK GDPR* — minimisation
- ICO, *Accountability Framework* — minimisation

## 11. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
