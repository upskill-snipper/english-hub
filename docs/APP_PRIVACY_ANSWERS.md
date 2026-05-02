# App Privacy questionnaire — answer key

Apple App Store Connect → My Apps → The English Hub → App Privacy.

The 8 data types are already selected. For each, click **"Set Up <Type>"**
and answer the three sub-dialogs as below. Apple's renderer can be
slow on this page; the answers are deterministic so you can power
through.

For **all 8 data types** the answers to dialogs 2 and 3 are:

- **Dialog 2 — Linked to user identity?** → **YES**
  _(Every data point ties to the user's account; we don't anonymise.)_
- **Dialog 3 — Used for tracking?** → **NO**
  _(We do not link any data with third-party data for advertising
  or sharing with data brokers. App Tracking Transparency permission
  is never requested.)_

The only thing that varies is **Dialog 1 — Purposes**. The table:

| Data type           | Purposes to tick                                      |
| ------------------- | ----------------------------------------------------- |
| Email Address       | App Functionality                                     |
| Name                | App Functionality, Product Personalization            |
| Other User Content  | App Functionality                                     |
| User ID             | App Functionality                                     |
| Device ID           | App Functionality                                     |
| Product Interaction | App Functionality, Analytics, Product Personalization |
| Crash Data          | App Functionality, Analytics                          |
| Performance Data    | App Functionality, Analytics                          |

After all 8 are configured, the yellow ⚠ badges turn green ✓ and the
top-right **Publish** button activates. **Don't publish yet** until
the version 1.0 metadata (description, keywords, screenshots) is also
ready — App Privacy is published as part of the version submission,
not separately.

---

## Why these answers

### Email Address — App Functionality only

We use email solely for sign-in (account authentication) and
transactional emails (welcome, receipt, verification). No marketing
campaigns, no analytics segmentation by email. Linked = YES because
emails are the primary user identifier.

### Name — App Functionality + Product Personalization

We display the name in the UI ("Hi, Sarah"), use it in marked-essay
output, and surface it on the teacher's class roster. App Functionality
covers the display; Product Personalization covers the role-aware
greeting.

### Other User Content — App Functionality

Pupils' essays are submitted only to the AI marker. Teachers see
their own pupils' work in their class. No public sharing, no
analytics. App Functionality only.

### User ID — App Functionality

The Supabase user ID ties the user's progress, subscriptions, essays,
and notifications together. Internal identifier, never exposed
externally.

### Device ID — App Functionality

The APNs device token is the only device identifier we collect. Used
to route push notifications to the right device. No analytics use.

### Product Interaction — App Functionality + Analytics + Product Personalization

We track lesson views, mock-paper attempts, AO scores. Used to
populate the dashboard (App Functionality), aggregate retention/
streak metrics (Analytics), and personalise the next-recommended
lesson (Product Personalization).

### Crash Data — App Functionality + Analytics

Standard React Native + Expo crash logging. Diagnoses bugs (App
Functionality) and tracks regression frequency over releases
(Analytics).

### Performance Data — App Functionality + Analytics

Render times, API latency, memory pressure. Diagnoses slowness (App
Functionality) and informs perf-improvement priorities (Analytics).

---

## What we explicitly do **not** do

- No third-party advertising. No ads in the app.
- No developer's advertising or marketing using IDFA / cross-app data.
- No tracking under Apple's ATT definition.
- No data sharing with data brokers.
- No location, health, fitness, financial, contacts, photos, audio,
  surroundings, body, or sensitive info collection.
- No customer-support data collection in-app (support is via web/email).
- No purchase history beyond what Apple already tracks for billing.
