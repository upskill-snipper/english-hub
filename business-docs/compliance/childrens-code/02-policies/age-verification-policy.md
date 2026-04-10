# Age Verification / Age Assurance Policy

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Data Protection Lead
**Last updated:** 2026-04-10
**Review cycle:** annually, or upon change of signup flow

---

## 1. Purpose

This policy sets out how The English Hub establishes, confirms, and re-verifies the age of its users, in order to:

1. Apply age-appropriate protections under the UK Age Appropriate Design Code
2. Comply with Article 8 UK GDPR on children's consent in relation to information society services (UK age of digital consent: 13)
3. Meet ICO expectations in its *Opinion on Age Assurance for the Children's Code* (2021) and related guidance
4. Satisfy school procurement expectations about age handling of pupils

This policy uses the term **"age assurance"** as an umbrella for any mechanism that establishes age with some degree of confidence (self-declaration, verification, estimation), consistent with ICO terminology.

## 2. Scope

Applies to every signup path and every feature that grants or removes a protection based on age.

## 3. Principles

1. **Protective default:** when in doubt, assume the user is a child (13 or younger). This is the most protective setting. No self-declaration *lowers* protections below the child-default baseline.
2. **Proportionality:** the level of age assurance should match the risk of the processing. We do not require state-issued ID to use a GCSE practice app.
3. **Minimum data:** we do not collect full date of birth beyond the initial age gate. We retain only the age bracket (e.g., "Year 10 / 14–15").
4. **Multiple routes:** we accept multiple signup routes (self-serve, teacher, parent) because a single mechanism can't reliably cover every 14-year-old.
5. **No dark patterns:** the age gate is neutrally worded. No "click here if you're over 18" link with a bigger button.

## 4. Signup paths

### 4.1 Self-serve student (web or mobile)

**Trigger:** a person visits englishhub.example and clicks "Sign up as a student".

**Steps:**
1. Neutral age-gate prompt: "How old are you?" with a numeric input.
2. If the input is under 13: the user is told that we need a parent or carer to set this up. We offer a "Send a link to my parent" flow (the user enters the parent's email; we send a sign-up link directly to that address; the user cannot complete signup themselves).
3. If the input is 13–17: standard student signup. Account is flagged as a **child account** and receives the full child defaults.
4. If the input is 18+: the user is asked to confirm that they are not a GCSE student at school. If they confirm, we still apply a "conservative" default (closest to child defaults but with adult-appropriate features enabled). If they say they are a GCSE student, we treat as a child account. In every case we **do not** weaken defaults below the child baseline without an additional signal.

**Retention:** we retain only the age **bracket** (under 13 / 13–15 / 16–17 / 18+). The entered age is used to set the bracket and then discarded at the end of the signup transaction.

**Trust level:** LOW. Any user can lie. This is why all self-serve individual signups inherit the strongest defaults regardless of declared age.

### 4.2 Teacher-provisioned (school licence)

**Trigger:** a school signs a licence, a teacher uploads a class roster or adds pupils individually.

**Steps:**
1. Teacher provides: first name, year group, school-assigned email (for single-sign-on schools) or a class code.
2. The teacher attests in the onboarding UI that all pupils on the roster are their current pupils and that the school has lawful basis to process their data (DPA 2018, DfE guidance).
3. Each pupil account is created as a **child account** in the correct year-group bracket.
4. Pupils receive a time-limited first-login link via their teacher, not via a public URL.

**Trust level:** HIGH. The teacher is acting under the school's data protection responsibilities. We rely on the school's age records.

**School contractual requirement:** the school data sharing agreement requires schools to keep year group / age bracket data accurate.

### 4.3 Parent-provisioned (home learner)

**Trigger:** a parent or carer visits englishhub.example and clicks "Sign up as a parent".

**Steps:**
1. Parent creates an account with their own email and password.
2. Parent confirms they are 18+ and that they have parental responsibility for the child they are about to add.
3. Parent adds the child: first name + age bracket.
4. A linked child account is created in child-mode. The child is given a log-in code by the parent.
5. The parent sees a persistent "You are a linked parent on this account" banner and a clear list of what they can see.

**Trust level:** HIGH for the age bracket. We do not verify parental responsibility beyond a contractual attestation — this matches industry norms for education products but is acknowledged as a residual risk (see risk matrix R-parent).

## 5. Under-13 handling

Article 8 UK GDPR sets the UK age of digital consent for information society services at 13. Below 13:

- We cannot rely on a child's own consent as the lawful basis for any processing that needs consent (e.g., non-essential analytics, marketing communications).
- We require **parental consent**, obtained and evidenced per `parental-consent-policy.md`.
- The self-serve signup path is **closed** for under-13s. They cannot create an account themselves — they are redirected to the parent-link flow.

## 6. Re-verification

We do not re-verify age on a routine schedule. We do re-trigger age handling when:

- A user's declared year group is changed (e.g., moving from Year 9 to Year 10 mid-year is fine; moving from Year 11 to "adult" requires a manual confirmation).
- A teacher moves a pupil from a child account to an adult account (rare, usually only on school-leaver handover).
- An account has been dormant for 12+ months and is being reactivated.

## 7. What we will not do

- **We will not** require state-issued ID for normal student signup. The proportionality test fails.
- **We will not** use biometric age estimation (face analysis) for our current risk level.
- **We will not** sell or share the age data we do collect.
- **We will not** downgrade protections based on self-declaration alone.
- **We will not** create a public-facing URL that a child can use to "prove" they are 18+ and get reduced protections.

## 8. Accuracy & error handling

- If a user or teacher tells us an age is wrong, we correct it within 5 working days and re-apply the correct defaults.
- If a child identifies themselves as under 13 in support messages or in essay content, the Data Protection Lead is alerted and the account is suspended pending parental contact.

## 9. Evaluation of age assurance vendors (planned — GAP-3B)

In line with the ICO *Opinion on Age Assurance* (2021), we will document an evaluation of at least two age assurance approaches by end of 2026. Candidates under consideration:

- Hard identifiers (school-verified roster) — already used
- Account-based signals (e.g., email domain matching a known school) — partially used
- Parental verification via verified payment method — partially used
- Third-party age estimation providers — to be evaluated against proportionality, data-minimisation, and equality considerations

The evaluation will be attached to this document as Annex A once complete.

## 10. Auditing

- Every account has a **signup path** field (SELF, TEACHER, PARENT).
- Every account has an **age assurance level** field (LOW, MEDIUM, HIGH).
- Quarterly internal audit samples 20 accounts per path and confirms that age handling matches policy.

## 11. References

- Article 8 UK GDPR — conditions applicable to child's consent in relation to information society services
- ICO, *Age appropriate design: a code of practice for online services*, Standard 3 (age appropriate application)
- ICO, *Opinion: Age assurance for the Children's Code* (2021)
- DfE, *Keeping Children Safe in Education* — online safety

## 12. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
