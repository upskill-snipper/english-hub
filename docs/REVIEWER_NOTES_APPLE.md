# Apple App Review — Reviewer Notes

These notes go into the **App Review Information** section of the App
Store Connect submission form (Demo Account + Notes fields). Apple's
reviewer reads this verbatim, so it's plain English, no marketing.

Paste the Demo Account block into the **Sign-In Information** fields,
and paste the longer Notes block into the **Notes** field.

---

## Sign-In Information (paste into the App Store Connect form)

The English Hub requires a sign-in to access most content. Use the
demo account below to evaluate every paid feature.

```
Email:    apple-reviewer@upskillenergy.com
Password: [REDACTED — set in App Store Connect form, not this file]
```

The account has been pre-loaded with an active **Teacher Annual**
entitlement so reviewers can see every paid surface (AI marking,
lesson builder, class progress, homework setter) without going
through the purchase flow.

To exercise the **purchase flow** itself, use the sandbox testers
listed at the bottom of this document.

---

## Reviewer Notes (paste into App Store Connect "Notes")

### What this app is

The English Hub is an English-revision study app for GCSE and IGCSE
pupils in the United Kingdom (ages 14–16) and a companion teacher
toolkit for the secondary English teachers who teach them. Pupils
revise set texts, practise exam-style questions, and submit written
work for AI-generated feedback that is anchored to the official mark
schemes published by the UK exam boards (AQA, Pearson Edexcel, OCR,
WJEC Eduqas, Cambridge IGCSE).

### Architecture (so the reviewer knows what to expect)

The mobile app is an Expo + React Native shell that hosts
authenticated WebViews pointing at https://theenglishhub.app. The
shell adds:

- Native sign-in token storage (Keychain via expo-secure-store)
- Push notifications (Expo + APNs)
- Offline reading cache for saved revision content
- Native subscription purchase via StoreKit 2 (RevenueCat SDK)

All paid functionality lives behind sign-in. Anonymous users see a
read-only marketing page identical to the public website.

### How to evaluate paid features

Sign in with the demo account above. The Teacher Annual entitlement
is already active, so the following features are unlocked end-to-end:

1. **AI essay feedback** — Tap _Submit essay_ on any practice prompt.
   Type or paste any short paragraph and submit. Feedback returns
   within 30 seconds, anchored to the chosen exam board's mark
   scheme.
2. **Mock paper** — Tap _Mock papers_ and start an AQA Paper 1 or
   Edexcel Paper 2. The reviewer can answer one section and submit
   to see the marked output.
3. **Lesson builder (teacher)** — Tap _Lessons_ → _New lesson_. The
   reviewer can pick a poem from the AQA Power & Conflict cluster
   and the app generates a lesson outline.
4. **Class progress (teacher)** — _Classes_ → _Year 11 demo class_ —
   pre-seeded with three demo pupils so progress charts render.

### How to test the purchase flow

If Apple wants to verify In-App Purchase wiring, do not use the demo
account (it already has an entitlement). Instead, sign in with one
of the sandbox testers below, then tap _Account_ → _Upgrade_. The
StoreKit purchase sheet appears with the four products listed.
Receipts are validated by RevenueCat.

### Encryption

`ITSAppUsesNonExemptEncryption` is set to `false` in `app.json`. The
app uses Apple's standard HTTPS only. No proprietary cryptography.

### Sign in with Apple

Not offered. The app uses email + password only. Per Guideline 4.8,
Sign in with Apple is required only when third-party social
sign-ins are also offered, which we do not.

### Children and the Children's Code

The app is aimed at 14–16-year-olds, who fall within scope of the UK
ICO's Children's Code. We:

- Default all profile settings to the highest privacy level
- Do not behaviourally advertise
- Show a parent-visible Privacy notice on every account
- Treat any account marked "under 16" with the strictest data flags

We have completed a Children's Code self-assessment (in
`business-docs/compliance/childrens-code/`).

### Privacy

- Privacy policy: https://theenglishhub.app/privacy
- Data collection disclosure: see App Privacy responses below
- ICO registration: ZC016690

### Data collection (App Privacy summary)

| Data type           | Linked to user | Purpose                         |
| ------------------- | -------------- | ------------------------------- |
| Email address       | Yes            | Account creation, sign-in       |
| Display name        | Yes            | Personalisation in app UI       |
| Coursework / essays | Yes            | Core feature — AI marking       |
| Crash data          | No             | Diagnostics                     |
| Performance data    | No             | Diagnostics                     |
| Push token          | Yes            | Notifications (homework, marks) |

We do not collect: location, contacts, photos, health, financial
information, browsing history outside the app, or any sensitive
personal data.

### Contacting the team during review

If anything is unclear, please email **review@theenglishhub.app**
during UK working hours (08:00–18:00 GMT/BST). We aim to respond
within one working day.

---

## Sandbox testers (for IAP review only)

Created in App Store Connect → Users and Access → Sandbox Testers.
**Do not** use these for the standard sign-in (they don't have a
pre-loaded entitlement) — they are for exercising the **purchase
flow** specifically.

| Email                                  | Password (in ASC)    |
| -------------------------------------- | -------------------- |
| `eh-sandbox-student@upskillenergy.com` | [REDACTED — see ASC] |
| `eh-sandbox-teacher@upskillenergy.com` | [REDACTED — see ASC] |

Each tester can repeat the trial → purchase → cancel cycle without
real charges. Reviewer can also test restore-purchases via _Account_
→ _Restore purchases_.

---

## Known good test devices

- iPhone 15 (iOS 17.5+) — primary
- iPhone SE 3rd gen (iOS 17.5+) — small screen check
- iPad Air M2 (iPadOS 17.5+) — tablet check (`supportsTablet: true`)

If the reviewer runs into a layout regression on an older device,
that is a bug we want to fix before launch — please flag it in the
rejection notes.
