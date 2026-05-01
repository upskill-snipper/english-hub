# App Store Connect — metadata to paste into the form

Source of truth for every text field in the App Store Connect "App
Information" and "Version Information" pages. British English. No
fabricated stats. Tightened so each field is under Apple's character
limit.

Pricing is sold in GBP only — store auto-converts to other regions.
Primary territory: United Kingdom. Languages: English (UK).

---

## App Information (one-time, version-independent)

### Bundle ID

`app.theenglishhub.mobile`

### SKU

`theenglishhub-ios-2026`

### Primary Language

English (UK) — `en-GB`

### Name (max 30 chars)

`The English Hub`

### Subtitle (max 30 chars)

`GCSE & IGCSE English revision`

### Categories

- **Primary**: Education
- **Secondary**: Reference

### Content Rights

**Does this app contain, show, or access third-party content?**
_No._ All revision content is original or excerpted from out-of-copyright
literary texts (via Project Gutenberg) and the public exam-board mark
schemes published by AQA, Pearson Edexcel, OCR, WJEC Eduqas, and
Cambridge IGCSE.

### Age Rating

**12+** — frequent/intense educational themes (literary depictions of
violence, addiction, mental ill-health appearing in GCSE set texts
such as _Macbeth_, _An Inspector Calls_, _Of Mice and Men_).

### App Privacy

See `docs/REVIEWER_NOTES_APPLE.md` § _Data collection (App Privacy
summary)_ for the full table to copy into the form.

---

## Version Information (per release — start with 1.0.0)

### Promotional Text (max 170 chars)

Build exam-ready writing skills with AI feedback calibrated to the AO
rubric. Free 7-day trial. Built for AQA, Edexcel, OCR, WJEC and
Cambridge IGCSE.

### Description (max 4,000 chars — paste exactly)

The English Hub is a GCSE and IGCSE English revision app with AI
feedback calibrated to the real exam-board mark schemes.

Whether you are sitting AQA, Pearson Edexcel, OCR, WJEC Eduqas or
Cambridge IGCSE, the app is calibrated to the exact specification
your school teaches. There is no generic content — every lesson,
mock paper, and feedback rubric is anchored to the real mark scheme
published by your exam board.

WHAT YOU GET

• AI-marked practice essays — paste any answer and get structured
feedback against AO1, AO2, AO3, AO4, AO5 and AO6 in seconds, with
exact references to the mark scheme.

• Mock exam papers — full timed mocks for every board, with model
answers and examiner-style commentary.

• Set-text revision — every poem, novel, play and short story on the
current GCSE and IGCSE syllabuses, with annotations, themes,
context cards and quote banks.

• Spaced retrieval practice — quizzes and key-quote drills tuned to
spaced-repetition intervals, so revision sticks.

• Progress dashboard — track your grade band on every assessment
objective and see exactly which AOs need more practice.

FOR TEACHERS

The Teacher tier adds a lesson builder, homework setter, and class
progress tracking. Set a homework essay in 30 seconds, mark a class
of 30 in 30 seconds, and see at a glance which pupils are gaining,
plateauing, or slipping.

WHO IT IS FOR

GCSE and IGCSE English Language and English Literature pupils
(Years 9–11) preparing for terminal exams in the UK and at British
international schools worldwide. Suitable for ages 14+.

PRIVACY AND SAFETY

The app is built to the UK ICO's Children's Code. Profiles default
to the highest privacy level. We do not behaviourally advertise. We
do not sell data. Your essays remain your essays.

PRICING

• Student plans — £3.99/month or £29.99/year (auto-renews until
cancelled).
• Teacher plans — £6.99/month or £67.99/year (auto-renews until
cancelled).
• 7-day free trial. Cancel any time before day 7 to avoid being
charged.
• Subscriptions auto-renew unless cancelled at least 24 hours before
the end of the current period via your Apple ID settings.

ABOUT US

The English Hub is built by Upskill Energy Limited, a UK company
(no. 16511479) registered with the Information Commissioner's
Office (ICO ZC016690). Privacy: https://theenglishhub.app/privacy
Terms: https://theenglishhub.app/terms

### Keywords (max 100 chars, comma-separated)

gcse,english,igcse,revision,exam,aqa,edexcel,ocr,wjec,literature,language,essay,mock,marking

### Support URL

`https://theenglishhub.app/contact`

### Marketing URL (optional)

`https://theenglishhub.app`

### Privacy Policy URL (required)

`https://theenglishhub.app/privacy`

### What's New in This Version (1.0.0)

First public release of The English Hub for iOS.

- AI-marked essays calibrated to AQA, Edexcel, OCR, WJEC and
  Cambridge IGCSE mark schemes.
- Full mock papers for every board.
- Set-text revision, retrieval drills, and progress tracking.
- Teacher plan with lesson builder and class progress.

### Copyright

`© 2026 Upskill Energy Limited`

---

## App Review Information

| Field            | Value                              |
| ---------------- | ---------------------------------- |
| First Name       | Calum                              |
| Last Name        | Johnson                            |
| Phone Number     | [paste from founder profile]       |
| Email            | review@theenglishhub.app           |
| Sign-In required | **Yes**                            |
| Demo account     | See `docs/REVIEWER_NOTES_APPLE.md` |
| Notes            | See `docs/REVIEWER_NOTES_APPLE.md` |

---

## Pricing & Availability

- **Price**: Free to download (paid via subscription).
- **Availability**: All territories where Apple sells.
- **Pre-Orders**: Off (we want to land in TestFlight first, then
  ship 1.0.0 directly).
- **Educational Discount**: Off — pricing is already at the lowest
  point we can sustain.

---

## Build (per release)

| Field                                          | Value                                                  |
| ---------------------------------------------- | ------------------------------------------------------ |
| Build version (CFBundleVersion)                | bumped per upload by EAS Build                         |
| Marketing version (CFBundleShortVersionString) | `1.0.0`                                                |
| Encryption export compliance                   | `ITSAppUsesNonExemptEncryption: false` (in `app.json`) |
| Uses IDFA                                      | No                                                     |

---

## Screenshots and assets — sizes Apple requires

Generate from a clean device with the demo account signed in. **Do
not** include any pupil PII in screenshots — use the demo class only.

| Device      | Required size                    | Count                                              |
| ----------- | -------------------------------- | -------------------------------------------------- |
| iPhone 6.7" | 1290 × 2796 px                   | 3 minimum, 10 max                                  |
| iPhone 6.5" | 1242 × 2688 px                   | 3 minimum, 10 max                                  |
| iPhone 5.5" | 1242 × 2208 px                   | optional but recommended                           |
| iPad 12.9"  | 2048 × 2732 px                   | 3 minimum (only if `supportsTablet: true` — we do) |
| App Preview | 30s muted clip per size          | optional                                           |
| Icon        | 1024 × 1024 px, opaque, no alpha | required                                           |

The current `mobile/assets/icon.png` placeholder must be replaced
before submission — it is a flat blue square with the wrong
dimensions in some debug builds.
