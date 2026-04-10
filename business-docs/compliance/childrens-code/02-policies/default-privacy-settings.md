# Default Privacy Settings Policy (Child Accounts)

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Data Protection Lead / Product
**Last updated:** 2026-04-10

---

## 1. Purpose

This policy implements Standard 7 of the ICO Age Appropriate Design Code: **"Settings must be 'high privacy' by default (unless you can demonstrate a compelling reason for a different default setting, taking account of the best interests of the child)."**

It is binding on all engineers, designers, and product managers working on The English Hub. New features that change, add, or remove a user-facing setting that affects a child account **must** be checked against this policy during design review.

## 2. Definition of "child account"

A child account is any account where:
- The user has declared an age under 18, OR
- The account was created by a parent via the parent-link flow, OR
- The account was created by a teacher via a school roster, OR
- The account has been flagged child via an administrative override

All accounts created via self-serve signup are treated as child accounts regardless of declared age until we have a stronger age-assurance signal (see `age-verification-policy.md`, Section 7).

## 3. The "high privacy" baseline

For every child account, the following defaults apply **at the point of account creation** and must continue to apply until the user (or their parent, with consent, where applicable) actively changes them.

### 3.1 Profile

| Setting | Default | Allowed changes |
|---|---|---|
| Profile visibility | **Private (only me)** | Can be set to "teacher only" or "class only" |
| Display name | **First name only** | Cannot add surname, school name, or contact info |
| Profile photo | **Default avatar** (generated) | Cannot upload photos |
| Bio / "about me" | **Empty; feature disabled** | Feature disabled for child accounts |
| Contact details (phone, social links) | **Feature disabled** | Not offered |

### 3.2 Social / peer-facing features

| Setting | Default | Allowed changes |
|---|---|---|
| Leaderboard participation | **Off** | Opt-in, scoped to class, first-name only |
| Study buddy / peer messaging | **Off** | Opt-in; filtered + reportable |
| Essay sharing to peers | **Off** | Opt-in per-essay; moderation queue |
| Public profile URL | **Disabled** | Not offered for child accounts |
| "Share to social media" buttons | **Hidden** | Not available in child UI |

### 3.3 Notifications

| Setting | Default | Allowed changes |
|---|---|---|
| Push notifications | **Off** | Opt-in; max 1 per day; silent (no sound/vibration); quiet hours 21:00–07:00 enforced server-side |
| Email notifications | **Weekly digest only** | Can be disabled entirely |
| SMS notifications | **Feature disabled** | Not offered to child accounts |
| Marketing emails | **Off** | Never enabled without explicit, separate opt-in; for under-13s, requires parental consent |

### 3.4 Data & analytics

| Setting | Default | Allowed changes |
|---|---|---|
| Strictly necessary cookies | **On** (cannot be disabled) | These are needed to run the service |
| Analytics cookies / non-essential telemetry | **Off** | Can be opted in; for under-13s, requires parental consent |
| Personalised recommendations | **Off for under-16s** (GAP-7A; target Q2 2026) | Opt-in, with plain-language explainer |
| Adaptive practice ordering | **On** — justified as Standard 7 "compelling reason" for the educational purpose of the service; clearly explained; can be switched to fixed-syllabus order | Can be switched to fixed order in one tap |

### 3.5 AI / profiling

| Setting | Default | Allowed changes |
|---|---|---|
| AI essay marking | **On** — justified as core educational purpose; with clear explainer; always presented as a suggestion with teacher as final arbiter | Can be turned off in settings (GAP-12B; target Q2 2026) |
| "AI tutor" style chatbots | **Not offered to child accounts currently** | — |
| Behavioural profiling for commercial purposes | **Off** and not available | Feature never offered |

### 3.6 Location

| Setting | Default | Allowed changes |
|---|---|---|
| Precise geolocation | **Off and not requested** | Feature not offered |
| Coarse IP-based country inference | **On, security-only** | Cannot be disabled because it is used for rate-limiting and fraud detection |

### 3.7 Privacy controls

| Setting | Default | Allowed changes |
|---|---|---|
| "Your data" menu | **Visible on every screen** | Cannot be hidden |
| Right-to-delete button | **Visible in settings** | Cannot be hidden |
| Report-a-concern button | **Visible from every screen** | Cannot be hidden |

## 4. The "compelling reason" test for any non-private default

Under Standard 7, a default that is not "high privacy" is permissible only where we can demonstrate a **compelling reason** that considers the **best interests of the child**.

For any such exception, we document:

1. **Feature name**
2. **The specific default that is not high-privacy**
3. **Why it is not high-privacy** — technical, UX, or business reason
4. **Why we believe it is in the child's best interests** — educational benefit, learning outcome, etc.
5. **What alternatives were considered**
6. **How the child is informed** — what they see, in what words
7. **How easily they can opt out**
8. **Review date**

Current documented exceptions:

### Exception A — Adaptive practice ordering is on by default
- **What:** When a child opens the practice area, questions are ordered by a simple "next best topic" model rather than straight syllabus order.
- **Why not high-privacy:** It uses the child's recent performance data to order content.
- **Why best interests:** Children learn better when practice targets their weak spots. Switching this off harms learning outcomes. The ICO accepts educational effectiveness as a legitimate "compelling reason".
- **Alternatives considered:** Fixed syllabus order as default — rejected because it demonstrably harms outcomes for most students.
- **Child is informed:** First-use dialog, inline "(?)" label, and settings page explanation.
- **Opt-out:** One tap in settings — "Switch to syllabus order".
- **Review:** Q4 2026.

### Exception B — AI marking is on by default
- **What:** When a child submits an essay, it is automatically analysed by an AI marker which produces suggested feedback.
- **Why not high-privacy:** It sends essay content to a sub-processor (the AI provider).
- **Why best interests:** Without AI marking, a student on the free tier would get no feedback on written work, which defeats the core purpose of the product for the cohort most likely to benefit.
- **Alternatives considered:** No automated marking — rejected because most students don't have access to a teacher to mark their work.
- **Child is informed:** First-use explainer + inline "(?)" on every AI-generated feedback block + settings page.
- **Opt-out:** One tap in settings — "Turn off AI marking" (planned, GAP-12B).
- **Review:** Q2 2026 alongside GAP-12B delivery.

No other exceptions are currently approved.

## 5. Engineering rules

1. **Schema-level default:** database column defaults for any user-setting boolean must reflect the high-privacy value.
2. **Account creation job:** the `createChildAccount` function sets every default in this policy. It is covered by automated tests.
3. **Migrations:** any migration that adds a new setting column must default child accounts to the protective value, regardless of what the default is for adult accounts.
4. **Code review rule:** any PR that touches a file in `src/privacy/` or `src/settings/` requires approval from the Data Protection Lead.
5. **No silent resets:** a feature change must not silently re-enable a setting on an existing child account.

## 6. Auditing

- Quarterly automated test: create a fresh child account and assert every default in this policy.
- Quarterly manual spot-check: open 3 existing child accounts and confirm settings match.
- Defect procedure: any deviation is treated as a privacy incident per the incident response plan.

## 7. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
