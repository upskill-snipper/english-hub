# Age Verification and Age Assurance Approach

**The English Hub Ltd**
**Children's Code Standard 3 — Age-appropriate application**
**Last reviewed:** `[REPLACE WITH DATE]`
**Owner:** DPO + Product

> The Children's Code requires services "likely to be accessed by children" to establish the age of individual users "with a level of certainty that is appropriate to the risks arising from the data processing, or apply the standards in this code to all users." This document explains the approach we take.

---

## 1. Default posture

**We apply the full set of Children's Code standards to all users by default.** We then unlock specific adult-only features (e.g. marketing emails, payment flows) only after positive adult signals are captured.

This is the lowest-risk posture: we never under-protect a child by wrongly treating them as an adult.

---

## 2. Risk-based tiers

We classify our data processing into three tiers and apply age assurance proportionate to the risk of each:

| Tier | Examples | Required age assurance |
|---|---|---|
| **Low risk** | Browsing public learning content; signing up to a basic account | Self-declaration + format checks |
| **Medium risk** | Full account with progress tracking and AI feedback | Self-declaration + layered signals (school or parent link) |
| **High risk** | Paid subscription setup; marketing opt-in; data exports | Verified adult (parent / teacher / self-declared adult with payment check) |

---

## 3. Account types and how age is established

### 3.1 School-provisioned accounts (most common)

- The school (the Controller) provides class lists — name, year group, sometimes DOB.
- The school warrants (under the DPA) that it has a lawful basis (often public task + parental notification, or parental consent for under-13s where required).
- We treat all students in such accounts as children.
- **Age assurance: high** — the school knows the student's age.

### 3.2 Parent-managed accounts

- A parent or guardian creates the account on behalf of the child.
- We ask for:
  - Parent name, email, relationship
  - Child's name, DOB, year group, exam board
- We verify parental consent through:
  - **Email confirmation link** (primary)
  - **Payment verification** for paid accounts (additional signal that the consenter is an adult)
  - **Optional ID check** if flagged as higher risk
- The parent's account and the child's account are linked.
- **Age assurance: high** — parent asserts, with verification.

### 3.3 Direct student sign-up (13+)

Where a student aged 13 or over signs up without a school or parent, we ask for:

- Name, email, DOB, year group, exam board
- We validate DOB format and reject obviously implausible values
- We cross-check DOB and stated year group for consistency (for example, a "Year 11" who gives a DOB that makes them 7 is flagged)
- We block sign-up for under-13s without parental consent
- We re-verify age at points of elevated risk (e.g., attempting to access adult-only features)
- **Age assurance: medium** — self-declaration with signals

### 3.4 Adult sign-up (teacher, parent, self-declared adult)

- Separate sign-up flow flagged as "I am 18+"
- Role selection: teacher / parent / other adult
- Teacher role requires school verification (SSO domain check, manual review, or DfE URN validation)
- Parent role is treated as a parent-managed account (see 3.2)
- **Age assurance: medium to high** — depends on role verification

---

## 4. Age-assurance signals we use

We do **not** rely on any single signal. We combine:

| Signal | What it tells us | Strength |
|---|---|---|
| Self-declared DOB | Stated age | Low on its own |
| Year group consistency | Cross-check vs DOB | Medium |
| Email domain | School domains indicate student/teacher context | Medium |
| Payment method | Must be 18+ to hold a card in most cases | Medium-High |
| SSO provider (Google Workspace for Education) | Educational tenant; often indicates age bracket via admin policy | Medium |
| School warrant | School directly confirms student identity and age | High |
| Parental consent record | Parent confirms child's age | High |
| ID check (optional) | `[REPLACE WITH verification provider]` — where used, returns pass/fail only and does not retain documents | Very high |
| Usage patterns / language analysis | Signals of adult vs child language (only used as a red flag, never to downgrade protection) | Low, informational |

---

## 5. What we never do

- We do **not** require ID uploads at sign-up (disproportionate for low-risk account creation).
- We do **not** estimate age from photos, voice, or biometrics.
- We do **not** fingerprint children's devices to infer age.
- We do **not** use "age estimation" third-party tools on students.
- We do **not** share age-assurance data with advertisers.

---

## 6. What happens if we get it wrong

### 6.1 Child mistakenly treated as adult (high risk)
- We re-evaluate on any trigger:
  - Student reports age
  - Teacher reports a student is mis-categorised
  - Payment bounces / card not adult-holder
  - Year group conflicts with DOB
- We immediately apply child protections and escalate to manual review.

### 6.2 Adult mistakenly treated as child
- This is lower risk — they may be over-protected but not harmed.
- They can elevate to adult status via the paths above.

### 6.3 Under-13 accessing without parental consent
- We detect via DOB + year group + abuse heuristics.
- If flagged post-sign-up, we immediately suspend the account and contact the parent/guardian (where contactable).
- If consent cannot be obtained, we delete the account within 30 days.

---

## 7. Re-verification

We re-verify age:
- Annually for direct-signup student accounts
- When a user attempts to access adult-only features
- When signals conflict (mismatched DOB / year group)
- When a suspicious pattern is detected
- On request from a school or parent

---

## 8. Data minimisation

- We ask for **date of birth** (not just "are you over 13?") because a date enables consistency checks and retention planning. Year-only is insufficient.
- DOB is stored once and not used for anything other than age-related logic.
- We do not request government-issued documents at sign-up.
- Where ID verification is used, we keep only a pass/fail result.

---

## 9. Accessibility

- The age capture screen uses plain language and avoids confusing toggles.
- Users with disabilities can request a voice or written interview to establish their age if the standard flow is inaccessible.
- Age gates work on keyboard-only navigation and with screen readers.

---

## 10. Audit and review

- Age assurance outcomes are logged (without leaking sensitive data).
- Quarterly review of false-positive / false-negative rates by the DPO and product.
- Annual external audit as part of our Children's Code compliance review.

---

## 11. References

- ICO Age Appropriate Design Code — Standard 3
- ICO "Age Assurance" guidance (2024)
- 5Rights Foundation — Age Assurance principles
- UK DIATF — Digital Identity and Attributes Trust Framework
