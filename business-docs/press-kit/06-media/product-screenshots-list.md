# Product Screenshots — Master Capture List

This is the list of product screenshots we keep live and current at all times. Every screenshot is refreshed *any* time the underlying page materially changes, and re-verified monthly regardless. Stale screenshots make a company look dead.

Journalists, PR partners, and investors all pull from the same set — they do not get bespoke captures on request unless it is for a feature with a special framing.

---

## Storage

- **Master location:** `[INTERNAL ASSET URL — e.g. Figma project / Google Drive folder / Supabase bucket]`
- **Public press location:** https://theenglishhub.app/press
- **Naming convention:** `theenglishhub_[page]_[device]_[YYYY-MM-DD].png`
  - Example: `theenglishhub_homepage_desktop_2026-04-10.png`

## Formats we maintain for every shot

- **Desktop** — 1920 × 1200 PNG, retina (2× density), pristine chrome (Chrome, no extensions, no dev tools open, no browser tabs visible)
- **Laptop** — 1440 × 900 PNG
- **Tablet** — 1024 × 1366 PNG
- **Mobile** — 375 × 812 PNG (iPhone 13 viewport)
- **Dark mode** versions for each (our default is dark, but a light version is useful for press on pale backgrounds)

## Capture rules

1. Use a fake demo account populated with realistic but anonymised student data. **Never a real student's name or essay.**
2. Use the brand's own name — never "Lorem Ipsum" or "John Doe" — in demo content. We use the made-up persona "Maya Patel, Year 11."
3. Hide any debug banners, cookie banners, or popups before capturing.
4. Use the current logo, current brand colours, and current typography.
5. Never hand-edit screenshots except to crop and upscale. Do not add drop-shadows, mockup frames, or gloss effects at the source level — those are applied downstream by designers.

---

## The core capture list

### 1. Homepage
- **Page:** `/`
- **What to show:** Hero headline, CTA, visible social proof row.
- **Framing:** Full viewport, hero above the fold.
- **Required devices:** Desktop, Laptop, Mobile, Tablet.

### 2. Student dashboard
- **Page:** `/dashboard`
- **What to show:** Progress cards, today's tasks, streak indicator, next mock exam.
- **Framing:** Full viewport, nothing cut off.
- **Demo data:** Maya Patel, Year 11, AQA, mid-revision cycle.
- **Required devices:** Desktop, Mobile.

### 3. Poem analysis page
- **Page:** `/analysis/aqa-power-conflict/[poem]`
- **What to show:** Poem text, in-line annotations, key-quotes sidebar, exam-question link.
- **Chosen poem:** Ozymandias (recognisable, short, visually clean on screen).
- **Required devices:** Desktop, Mobile.

### 4. AI essay marker — before and after
- **Page:** `/marking`
- **What to show two shots:**
  - **(a) Input state:** a realistic Year 11 essay pasted in, "Mark my essay" button visible.
  - **(b) Result state:** grade (e.g. "7/9"), AO breakdown, highlighted quotes, improvement suggestion.
- **Demo essay:** A Paper 1 Question 5 creative writing response, ~500 words.
- **Required devices:** Desktop, Mobile.

### 5. Game — Grade Climber
- **Page:** `/games/grade-climber`
- **What to show:** Gameplay state mid-session with progress bar, current grade, question.
- **Required devices:** Desktop, Mobile, Tablet.

### 6. Game — Quote Detective
- **Page:** `/games/quote-detective`
- **What to show:** Quote-matching interface, scoring.
- **Required devices:** Desktop, Mobile.

### 7. Mock exam
- **Page:** `/mock-exams/[paper]`
- **What to show:** Mid-exam state with timer, question panel, answer panel.
- **Required devices:** Desktop, Tablet.

### 8. Revision hub / course page
- **Page:** `/courses/[course-id]`
- **What to show:** Module list, progress bars, visual timeline to exam day.
- **Required devices:** Desktop, Mobile.

### 9. Teacher / school dashboard
- **Page:** `/dashboard?role=teacher`
- **What to show:** Class list, essays awaiting moderation, class-wide AO heatmap.
- **Demo data:** "Year 11 Set 1 — Mr [TEACHER]", 28 students, realistic progress spread.
- **Required devices:** Desktop only.

### 10. Mobile app home (iOS / Android / PWA)
- **What to show:** Home screen with bottom nav, today's task, streak.
- **Required devices:** Mobile only.

### 11. Pricing page
- **Page:** `/pricing`
- **What to show:** Three-column pricing (monthly, annual, school), CTA.
- **Required devices:** Desktop, Mobile.

### 12. About / mission page
- **Page:** `/about`
- **What to show:** Founder quote, mission statement, team.
- **Required devices:** Desktop.

---

## Capture refresh schedule

| Rhythm | Who | What |
|---|---|---|
| Monthly (first Monday) | Design lead | Re-verify every screenshot on the list. Capture anything that has changed. |
| On deploy | Whoever shipped the change | If a capture is affected by the change, reshoot before the PR merges. |
| On major brand update | Design lead + founder | Reshoot *everything*, in full. |

## Delivery to press

When a journalist requests screenshots:

1. Send the whole pack, not individual files — it saves back-and-forth and reduces the odds of them pulling something stale from elsewhere.
2. Include a one-line credit string: *"Screenshot courtesy of The English Hub. Please credit as 'The English Hub' when reproducing."*
3. Do not send raw Photoshop or Figma files. Final PNGs only.

## A note on fake names

We always capture with **Maya Patel, Year 11** in all student-side demos, and **Mr Bennett, Head of English** in all teacher-side demos. Using the same two personas across all captures makes the brand recognisable across press and investor material without ever exposing a real user.
