# Parental Consent Policy

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Data Protection Lead
**Last updated:** 2026-04-10

---

## 1. Purpose

This policy explains when The English Hub requires consent from a parent or carer, how that consent is obtained, how it is recorded, and how it can be withdrawn. It is written to comply with:

- Article 8 UK GDPR (child's consent in relation to information society services)
- Section 9 Data Protection Act 2018 (setting the UK age of digital consent at 13)
- Article 7 UK GDPR (conditions for consent)
- ICO Age Appropriate Design Code, Standards 3, 11 and 12
- ICO *Children and the UK GDPR* guidance

## 2. When parental consent is required

Parental consent is required in the following circumstances:

### 2.1 Signup for under-13s (mandatory)
A child under 13 cannot create an account on The English Hub themselves. A parent or carer must create a linked parent account and then add the child to it. Until parental consent is evidenced, the child account cannot be used.

### 2.2 Processing that requires consent as lawful basis
For users under 13, the following are never enabled without verified parental consent:
- **Non-essential cookies / analytics** on the child's account
- **Marketing communications** (we don't do these to children anyway, but the rule stands)
- **Any optional feature that processes personal data beyond what is needed to run the core service**

For 13–17 year olds, we rely on the older child's own consent for these items — in line with ICO guidance that 13-year-olds are legally entitled to consent to ISS processing — but we still provide information in a way they can understand, and we keep the processing minimal.

### 2.3 Children who are 13+ where the child's own consent is impractical
In some rare cases a 13–17 year old may not be able to understand or exercise consent themselves (e.g., significant special educational needs). A parent or carer may then give consent on their behalf, with a note in the account record.

### 2.4 Never required
We do **not** require parental consent to use features that are necessary to perform the contract (i.e., the actual GCSE practice and marking), because the lawful basis there is "performance of a contract" or "legitimate interests", not consent. Forcing a consent mechanism where consent isn't the lawful basis would be misleading.

## 3. What counts as valid parental consent

Consent must meet the Article 7 UK GDPR standard: **freely given, specific, informed, unambiguous**, given by a **clear affirmative action**. It must also be verifiable.

We consider consent valid if all of the following are true:

1. The parent has completed a signed-in parent account (see §4)
2. The parent has affirmatively ticked a consent checkbox for the specific processing, with the description of that processing in plain language
3. The parent has been shown the child-friendly privacy policy as part of the flow
4. The system has recorded: the parent account ID, the consent timestamp, the text of what was consented to (version-controlled), and the source (IP, user-agent)
5. The parent can withdraw at any time from the parent dashboard with equal ease to how the consent was given

## 4. How we verify the parent is actually a parent

Verifying "real-world parenthood" online is hard and any method is imperfect. We use a combination:

1. **Verified payment method.** When a parent purchases a paid home-learner plan, the payment processor verifies the billing card, which is a recognised (though imperfect) indicator of an adult. For free home-learner accounts we use the next method.
2. **Email with double opt-in.** The parent supplies an email; we send a confirmation link; the link is unique and expires; clicking it proves control of the email.
3. **Attestation.** The parent is shown and must tick: "I confirm I am the parent or guardian of this child and have parental responsibility for them. I understand that giving false information may be a criminal offence."

We acknowledge this is **not strong** verification. It is proportionate for an educational product where the risk of an unauthorised adult setting up an account is low and is mitigated by the limited scope of what a parent can do (see parental controls design).

## 5. What the consent flow looks like

```
[Parent sign-in]
     │
     ▼
[Add child] ── name, age bracket
     │
     ▼
[Show child-friendly privacy notice]
     │
     ▼
[Show parent privacy notice — what parent can see, what they can't]
     │
     ▼
[Consent checkbox block]
  □ I consent to The English Hub processing my child's data as described above
  □ I confirm I have parental responsibility for this child
  □ I understand I can withdraw consent at any time
     │
     ▼
[Create child account — inherits child-defaults]
     │
     ▼
[Parent receives a confirmation email with a summary of what was agreed]
```

Consent is not "bundled". The child cannot be enrolled in any optional analytics, research, marketing, or profiling feature at the moment of parental signup. Any such feature must be turned on later through a separate, specific opt-in.

## 6. How consent is recorded

In our database, every consent event stores:

- `consent_id` (UUID)
- `parent_account_id`
- `child_account_id`
- `consent_text_version` (hash of the exact wording shown)
- `purposes` (list of processing purposes)
- `given_at` (timestamp)
- `method` (e.g., `web-form-v2`)
- `ip_hash` (for evidence only; not used for anything else)
- `user_agent`

This record is retained for as long as the child account exists plus 12 months after deletion, for evidential purposes. After that, it is deleted with the rest of the account.

## 7. Withdrawal

Parents can withdraw consent in **one click** from the parent dashboard under "Permissions". Withdrawal results in:

- Any optional/consent-based processing stopping immediately
- The child account being offered one of: downgrade to a free read-only mode, full deletion, or export + deletion
- A confirmation email being sent within 24 hours
- The `consent_withdrawn_at` field being set on the consent record

Withdrawal is not punishment. The child's existing data is not lost on withdrawal alone; only the processing that relied on consent stops. Data the service needs for its core purpose (running the account) continues under the original contract/legitimate interests basis until the parent separately deletes the account.

## 8. 13th birthday transition

When a child on a parent-managed account turns 13, Article 8 UK GDPR means they can now give their own consent. The system:

1. Emails both parent and child 30 days before the 13th birthday
2. On or after the birthday, prompts the child to confirm/update their own privacy choices the next time they log in
3. Retains the parent link if the parent has not actively removed it (because a 13-year-old on a home learner account may still benefit from parent visibility) — but the child can unlink from their own settings

The parent is informed of the change. The parent does **not** lose access automatically on the birthday because the parent may still be the bill-payer; the parent does lose the "I consented on behalf of the child" legal foothold, and any further consent-based processing requires the child's own consent.

## 9. Refusals and bad-faith consent

If we become aware that a "parent" is not actually a parent (for example, an older sibling, a self-claim by the child themselves), we suspend the account and attempt to contact the child's actual parent / the school. We do not simply delete — deletion without notice could itself be harmful (e.g., losing schoolwork in progress).

## 10. References and audit

- Article 7 and Article 8 UK GDPR
- Section 9 DPA 2018
- ICO, *Children and the UK GDPR* — parental consent section
- ICO Age Appropriate Design Code, Standard 11 (Parental controls)

Consent flow audited quarterly against this policy. Last audit: not yet conducted.

## 11. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
