# Transparency Information Inventory

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Content lead / Data Protection Lead
**Last updated:** 2026-04-10

**Purpose:** This inventory lists every surface on which The English Hub communicates privacy or data-handling information to children (and to parents / teachers where those are also in scope), together with the current status of that surface and its review schedule. It supports Standards 4 (Transparency) and 15 (Online tools) of the ICO Age Appropriate Design Code.

---

## 1. Inventory columns explained

- **Surface** — the specific place (URL, screen, dialog, email)
- **Audience** — who this is for
- **Current wording source** — where the live copy lives in the repo or CMS
- **Child-friendly?** — is the copy adapted to 13–16 reading age?
- **Just-in-time?** — is it shown at the moment of collection/use, not just in a top-level policy?
- **Status** — Green / Amber / Red
- **Owner** / **Review date**

---

## 2. Top-level policy surfaces

| # | Surface | Audience | Source | Child-friendly? | JIT? | Status | Owner | Review |
|---|---|---|---|---|---|---|---|---|
| 1 | Full privacy policy (/privacy) | All + legal | `privacy/full.md` (marketing site) | No (by design) | No (policy) | Amber — needs reconcile with this pack | Data Protection Lead | 2026-07 |
| 2 | Child-friendly privacy policy (in-app + /privacy/students) | Students 13–16 | `02-policies/childrens-privacy-policy.md` | Yes | No (policy) | Green (text) / Amber (UI) | Content | 2026-10 |
| 3 | Parent privacy notice (in-app parent home) | Parents | TBD | Yes (for adults) | No | Amber — draft needed | Content | 2026-05 |
| 4 | Teacher privacy notice (school admin home) | Teachers | TBD | No (for adults) | No | Amber — draft needed | Content | 2026-05 |
| 5 | Cookies policy (/cookies) | All | `privacy/cookies.md` | No (by design) | No | Amber — needs update after GAP-13A | Data Protection Lead | 2026-05 |
| 6 | Community standards (/community-standards) | All + enforcement | `04-evidence/community-standards.md` | Partially — child-friendly summary at top | No | Amber | Data Protection Lead | 2026-10 |

## 3. Consent surfaces

| # | Surface | Audience | Child-friendly? | JIT? | Status | Owner |
|---|---|---|---|---|---|---|
| 7 | Cookie banner (marketing site) | Visitors | Neutral | Yes | **Red** — GAP-13A (asymmetric buttons) | Frontend |
| 8 | Parental consent flow at child signup | Parent + child | Yes | Yes | Green — draft copy; UI audit pending | Product |
| 9 | Opt-in dialog for non-essential analytics (in-app) | Child / parent | Yes | Yes | Amber — pending GAP-4A | Product |
| 10 | Opt-in dialog for marketing emails | Parent (under 13) or older child | Yes | Yes | Green | Product |
| 11 | Opt-in for peer-visible leaderboard | Child | Yes | Yes | Green | Product |
| 12 | Opt-in for peer messaging | Child | Yes | Yes | Amber — pending keyword filter sign-off | Product |

## 4. Just-in-time / inline explanations

Every child-facing data-collection point should have an inline explanation. Audit:

| # | Surface | Has inline explanation? | Target wording | Status |
|---|---|---|---|---|
| 13 | Signup — email field | Yes | "We use this to log you in and send account notices. No marketing." | Green |
| 14 | Signup — name field | Yes | "Just your first name. Nobody outside the app will see it." | Green |
| 15 | Signup — year group | Yes | "So we show you the right practice for your year." | Green |
| 16 | Essay submission | Partial | "We'll send this to our AI marker for feedback. Only you and your teacher can see it." | Amber — copy drafted, UI pending GAP-4A |
| 17 | Notification permission prompt | Partial | "Turn on for a daily reminder. Off is fine — you won't miss anything important." | Amber |
| 18 | Leaderboard opt-in | Yes | "Your first name and score will be seen by people in your class. You can turn this off anytime." | Green |
| 19 | Profile → visibility setting | Yes | "Who can see your profile page. Private means only you." | Green |
| 20 | AI marking first-use explainer | No | (Drafted — copy in GAP-12A) | **Red** — copy exists, UI not deployed |
| 21 | Cookie banner on marketing site | Partial | (to fix under GAP-13A) | **Red** |
| 22 | Account deletion confirmation | Yes | "This will delete your account, essays, and progress. You can export first." | Green |
| 23 | Data export | Yes | "Download a copy of everything we have about you. Takes about a minute." | Green (but export format — GAP-15A — is Amber) |
| 24 | Parent-dashboard first visit | Partial | "Here's what you can see. Here's what you can't." | Amber — GAP-11A |
| 25 | Teacher-visibility banner (persistent) | Yes | "Your teacher can see this work." | Green |
| 26 | Parent-linked banner (persistent) | Yes | "A parent is linked to this account." | Green |

## 5. Ongoing / ambient transparency

| # | Surface | Purpose | Status |
|---|---|---|---|
| 27 | "Your data" menu, present in main nav on every child-facing screen | Rights exercise + "what you have" overview | Green |
| 28 | Settings → Privacy page | Switches, explanations, links | Green |
| 29 | In-app change log (last 3 privacy changes, with summary) | Keeping users informed of policy updates | Amber — feature drafted, not shipped |
| 30 | Email notifications about material privacy changes | Keeping users informed | Amber — needs template |

## 6. Public trust & compliance page

| # | Surface | Purpose | Status |
|---|---|---|---|
| 31 | /trust — high-level "what we stand for" | Schools + parents | Amber — draft exists in marketing copy |
| 32 | /trust/childrens-code — pointer to this pack summary | Schools + parents + auditors | Amber — pointer not yet linked |
| 33 | DSAR instructions for children | Children | Green — inside child privacy notice |
| 34 | DSAR instructions for parents | Parents | Amber |
| 35 | Complaints process — link to ICO | All | Green |

## 7. Gaps to close before "full compliance" claim

| Gap | Reference | Priority |
|---|---|---|
| Cookie banner asymmetry | #7 / GAP-13A | P1 |
| AI marking first-use explainer UI | #20 / GAP-12A | P2 |
| Just-in-time audit roll-out | #9, #16, #17 / GAP-4A | P2 |
| Parent dashboard "what we can see" | #24 / GAP-11A | P2 |
| Data export format | GAP-15A | P3 |
| Child privacy explainer video | GAP-4B | P3 |
| Parent privacy notice | #3 | P3 |
| Teacher privacy notice | #4 | P3 |

## 8. Accessibility notes

- All child-facing privacy copy targets Flesch-Kincaid grade 6–8
- Minimum font size 16px equivalent on mobile
- High colour contrast (WCAG AA)
- All dialogs keyboard and screen-reader accessible
- Alt text on all explanatory icons
- Video content (planned) will have captions and a text transcript
