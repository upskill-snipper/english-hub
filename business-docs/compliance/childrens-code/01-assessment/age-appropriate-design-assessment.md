# Age Appropriate Design Code — Standards Assessment

**Service:** The English Hub (web + mobile PWA)
**Assessment scope:** All child-facing areas of the product and supporting admin/teacher/parent surfaces
**Assessor:** Data Protection Lead (Founder, acting)
**Date of assessment:** 2026-04-10
**Last reviewed by:** —
**Next review:** 2026-10-10

Legend for status column:
- **GREEN** — aligned with the standard; evidence in place
- **AMBER** — partially aligned; known shortfall under remediation
- **RED** — material gap; scheduled remediation before general-availability to under-16s / before school procurement

---

## Standard 1 — Best interests of the child

**What the code requires:** the best interests of the child should be a primary consideration when designing and developing online services likely to be accessed by children (reflecting Article 3 UN Convention on the Rights of the Child).

**Our position:**
The English Hub is an educational product. Its core purpose — helping teenagers improve at GCSE English Language and Literature — is inherently aligned with the child's right to education (UNCRC Art. 28) and development (Art. 29). That does not, however, automatically justify every design choice we make.

**What we do:**
- Product decisions that affect child users go through a "child impact" check captured in our product-decision template (live in Notion — to be moved into this repo under `04-evidence/`)
- We explicitly identify when a design choice trades off child wellbeing (e.g., notifications, streaks, leaderboards) against commercial metrics (retention, conversion)
- Our tone-of-voice and content standards are age-appropriate for 13–16 year olds, tested with GCSE teachers
- We do not sell advertising to any user, so the classic ad-driven conflict of interest is absent

**Gaps:**
- **[GAP-1A]** The "child impact" check is informal. Needs to be a required section of every feature spec with sign-off recorded. Owner: Product. Target: Q3 2026.
- **[GAP-1B]** We have not yet consulted children / teachers directly on the streak & leaderboard design. Commitment: small-scale research with 2 partner schools. Owner: Founder. Target: before streaks launch to users under 16.

**Status:** AMBER

---

## Standard 2 — Data protection impact assessments

**What the code requires:** conduct DPIAs to assess and mitigate risks to the rights and freedoms of children who are likely to access the service, specifically considering the different ages, capacities, and development needs.

**Our position:**
Because the service is likely to be accessed by children and involves profiling of young people's learning performance, a DPIA is **required** under Article 35(3)(b) UK GDPR. We also maintain separate, focused DPIAs for analytics and for AI-assisted marking.

**What we do:**
- Core DPIA exists: `03-dpias/dpia-processing-children-data.md`
- Narrow DPIAs for analytics and AI features: `03-dpias/dpia-analytics.md`, `03-dpias/dpia-ai-features.md`
- DPIAs follow the ICO template structure (necessity, proportionality, risks, measures, residual risk, sign-off)
- Review cadence: annually or on any material change (new processor, new personal data category, new purpose)

**Gaps:**
- **[GAP-2A]** DPIAs have not yet been reviewed by an external DPO. Commitment: fractional DPO engagement (2–3 days) once MRR > £X. Owner: Founder.
- **[GAP-2B]** No formal "prior consultation" with ICO has been triggered yet; residual risks remain within "high-to-medium after mitigation" so consultation is not currently required, but we will re-assess as the AI feature rolls out.

**Status:** AMBER

---

## Standard 3 — Age appropriate application

**What the code requires:** take a risk-based approach to recognising the age of individual users and ensure the standards are applied appropriately — either by knowing the age of users, or by applying the standards to all users.

**Our position:**
We take the **"apply the standards to all users"** baseline approach for individual-direct signups, and for B2B school signups we have a verified age range via the school roster. We then layer in targeted age signals (school year, verified school domain, teacher confirmation) to tighten protections where we can be confident.

**What we do:**
- Default: every account is treated as if it belonged to a 13-year-old unless we have evidence otherwise (most protective)
- Three signup paths:
  1. **Self-serve student** (web/app): self-declared date-of-birth gate; treat as under-18 by default
  2. **Teacher-provisioned** (school licence): teacher confirms age bracket via roster import; trusted as child account
  3. **Parent-provisioned** (home learner): parent creates the account on behalf of the child; trusted as child account
- We do not rely on self-declaration alone to *lower* protections — only to confirm them
- Under-13 accounts require parental consent (see Standard 11 / Parental consent policy)

**Gaps:**
- **[GAP-3A]** We currently don't re-verify age after account creation. A user could self-declare as 18+ at signup. Mitigation: we treat all individual direct-signup accounts with "child default" settings regardless of declared age until a richer age assurance signal is available. Target: implement device-based behavioural signals reviewed by a human as a secondary check — **exploratory only**.
- **[GAP-3B]** We do not yet have an ICO-recognised "age assurance" vendor integration. This is under review — see ICO *Opinion on Age Assurance for the Children's Code* (2021) and the forthcoming ICO technology guidance.

**Status:** AMBER

---

## Standard 4 — Transparency

**What the code requires:** privacy information, and other published terms, policies and community standards, must be concise, prominent and in clear language suited to the age of the child. Provide "bite-size" explanations about how personal data is used at the point it is collected.

**Our position:**
We maintain a full, layered privacy notice *and* a separate child-friendly version targeted at 13–16 year olds. We use "just-in-time" pop-ups at each data-collection point.

**What we do:**
- Layered privacy notice (top level, dashboard level, detail level)
- Dedicated child-facing privacy notice — `02-policies/childrens-privacy-policy.md`
- Child-friendly notices inventory — `04-evidence/child-friendly-notices-examples.md`
- Reading-age target: Flesch-Kincaid grade 6–8 (ages 11–14) for all child-facing copy
- Icons and short "why we need this" labels at every data-entry point
- In-app "Your data explained" section accessible from the main menu at all times

**Gaps:**
- **[GAP-4A]** Not every data collection point yet has a just-in-time explanation. Audit in progress; see transparency inventory.
- **[GAP-4B]** Video / animated explainer for the child privacy notice not yet produced. Target: Q4 2026.

**Status:** AMBER

---

## Standard 5 — Detrimental use of data

**What the code requires:** do not use children's personal data in ways that have been shown to be detrimental to their wellbeing, or that go against industry codes of practice, other regulatory provisions, or Government advice.

**Our position:**
We do not use children's data for advertising, behavioural marketing, profiling for commercial gain, or any purpose that pushes content we do not believe is genuinely educationally beneficial. We take seriously the *DfE Meeting digital and technology standards in schools and colleges*, Ofcom research on teen screen-time, and academic literature on edtech dark patterns.

**What we do:**
- **No advertising** on any surface, ever — this is codified in our trust charter and architecturally enforced (no ad SDK, no ad requests in CSP, blocked at WAF)
- **No data sales**, no data sharing for marketing, no data enrichment from third parties
- **No sentiment or emotion inference** from essay content — we only mark for the criteria declared
- **Notifications** are capped at 1/day and are silent (no sound/vibration) by default; quiet hours 21:00–07:00 enforced server-side
- Leaderboards are opt-in, school-scoped, and first-name-only; they can be disabled by the student or teacher at any time

**Gaps:**
- **[GAP-5A]** Streaks are currently enabled by default. Research suggests streaks can drive compulsive use in young users. Planned change: streaks off by default for under-16s, opt-in only. Target: next release.

**Status:** AMBER

---

## Standard 6 — Policies and community standards

**What the code requires:** uphold your own published terms, policies and community standards (including but not limited to privacy policies, age restriction, behaviour rules and content policies).

**Our position:**
We publish, enforce, and regularly audit adherence to our terms, privacy notices, community standards, and acceptable use policy.

**What we do:**
- All public-facing policies are version-controlled and dated
- Community standards are published and enforced — `04-evidence/community-standards.md`
- A published enforcement log (anonymised, aggregate) shows action taken (e.g., essays removed for bullying/hate content)
- Regular internal audit (quarterly) checks live product behaviour vs. published policy

**Gaps:**
- **[GAP-6A]** Automated audit of "live product vs. published policy" does not yet exist. Currently manual review. Target: automated checks for key claims (e.g., "we never share your essay with third parties").

**Status:** GREEN (with noted item)

---

## Standard 7 — Default settings

**What the code requires:** settings must be "high privacy" by default (unless there is a compelling reason, taking into account the best interests of the child, to choose otherwise).

**Our position:**
Every child account has a high-privacy baseline, with weaker settings available only as explicit, informed opt-ins.

**Defaults for child accounts:**
| Setting | Child default | Notes |
|---|---|---|
| Profile visibility | Private (nobody) | Can be set to "teacher only" or "class" by the student |
| Leaderboard participation | Off | Opt-in, school-scoped only |
| Study buddy / peer messaging | Off | Opt-in; even then, filtered keywords + report button |
| Display name to peers | First name only | Cannot add surnames or contact details |
| Essay sharing | Off | Teachers can access student essays in school context; peer sharing is off by default |
| Push notifications | Off | Opt-in; capped 1/day; quiet hours 21:00–07:00 |
| Email notifications | Digest only, weekly | Can be disabled entirely |
| Analytics cookies (non-essential) | Off | See DPIA-analytics |
| Marketing emails | Off | Never enabled without explicit opt-in |
| Personalised recommendations | Off (for under-16s) | Default practice is ordered by syllabus, not by ML ranking |
| Geolocation | Off | See Standard 10 |
| Profile picture | Default avatar | Cannot upload photos |

**Gaps:**
- **[GAP-7A]** Personalised content recommendations are currently on by default for all users (ordered by a recency/performance model). To be switched to off-by-default for under-16s. Target: next release.
- **[GAP-7B]** Analytics cookies on the marketing site are currently loaded after consent but the cookie banner does not yet have equal-weighted "Accept / Reject" buttons. Fix in progress.

**Status:** AMBER

---

## Standard 8 — Data minimisation

**What the code requires:** collect and retain only the minimum amount of personal data you need to provide the elements of your service in which a child is actively and knowingly engaged. Give children separate choices over which elements they wish to activate.

**Our position:**
We have mapped every personal data field to a specific feature and retention rule. Fields not tied to an active feature are not collected.

**What we collect (child users):**
- Account email (school domain or parent email for home learners)
- Display name (first name)
- Year group / age bracket (not full DOB after initial age check)
- Hashed password
- Essay submissions (while the user is enrolled)
- Practice answer history (while the user is enrolled)
- Device + browser metadata for security and error logging
- IP address (for security, transient; truncated after 24h)

**What we do NOT collect:**
- Full name / surname (except where a school roster provides it and only for teacher surfaces)
- Home address, phone number
- Precise geolocation
- Biometric data
- Contact lists / social graph
- Third-party ad identifiers
- Browsing history outside our domain

**Gaps:**
- **[GAP-8A]** A few older analytics events still carry `user.email` as an identifier. Clean-up ticket open.
- **[GAP-8B]** Retention policy documented but the automated deletion job for dormant accounts (>24 months inactive) is not yet deployed.

**Status:** AMBER

---

## Standard 9 — Data sharing

**What the code requires:** do not disclose children's data unless you can show a compelling reason to do so, taking account of the best interests of the child.

**Our position:**
We share children's data only with (a) sub-processors needed to run the service (hosting, email, payments, support), (b) schools under a school data sharing agreement for pupils on a school licence, (c) parents exercising rights on behalf of their child, and (d) where required by law.

**Sub-processors (summary — full register in `04-evidence/`):**
- Hosting / database (UK/EU region)
- Transactional email provider
- Payment processor (processes parent/school payments only — no child payment data is ever collected)
- Error monitoring (IP + user-id only; sampling; EU region)
- AI marking model provider — zero-retention commitment; prompts/responses not used for training

**We do not:**
- Sell data
- Share with marketing partners
- Share with data brokers
- Share with advertisers
- Share with social networks

**Gaps:**
- **[GAP-9A]** Formal "school data sharing agreement" template exists but is not yet signed by all partner schools — target is 100% by end of 2026.

**Status:** AMBER

---

## Standard 10 — Geolocation

**What the code requires:** switch geolocation options off by default. Provide an obvious sign for children when location tracking is active. Any "default" that allows use of a child's location must revert to "off" at the end of each session.

**Our position:**
We do not use geolocation for any feature aimed at children. Coarse country-level inference from IP exists solely for service routing and fraud/abuse detection.

**What we do:**
- No browser Geolocation API calls in the child app
- No permission prompt for location is ever shown to a child account
- Coarse IP → country inference happens server-side, is not exposed to other users, and is retained only in short-lived security logs
- See detail in `02-policies/geolocation-policy.md`

**Gaps:**
- None material at this time.

**Status:** GREEN

---

## Standard 11 — Parental controls

**What the code requires:** if you provide parental controls, give the child age-appropriate information about them. If your service allows a parent or carer to monitor their child's activity or track their location, provide an obvious sign to the child when they are being monitored.

**Our position:**
For direct-signup (home learner) child accounts under 13, a parent is required to create and link the account. Parents have access to a limited parent dashboard (progress summary, privacy settings, consent withdrawal). The child is clearly told when a parent is linked.

**What we do:**
- Parental controls design documented in `04-evidence/parental-controls-design.md`
- In the child's app, a persistent "A parent is linked to this account" badge is shown in the header on all screens
- Parent controls: progress summary, time-of-day limits, ability to withdraw consent and delete account
- Parents cannot read essay content word-for-word (only aggregate performance), unless the child turns on an explicit share
- Teacher access on school accounts is shown in the same way: a persistent "Your teacher can see this work" banner on the relevant screens

**Gaps:**
- **[GAP-11A]** The parent dashboard currently shows fewer data points than the child dashboard but the specific list of what parents can see is not yet documented in the child-facing privacy notice. Update in progress.

**Status:** AMBER

---

## Standard 12 — Profiling

**What the code requires:** switch options which use profiling off by default (unless there is a compelling reason, taking account of the best interests of the child, to do otherwise). Only allow profiling if there are appropriate measures in place to protect children from any harmful effects (in particular, content that is detrimental to their health and wellbeing).

**Our position:**
The English Hub does not carry out profiling that produces legal or similarly significant effects on children (Article 22 UK GDPR). However, we do perform automated analysis of essay content (AI marking) and adaptive question selection. Both fall within the ICO's definition of "profiling" and need to be handled with care.

**What we do:**
- **AI marking:** provides a suggested grade + feedback. A human (teacher) is always the final decision-maker for anything that matters (e.g., school reports). See `03-dpias/dpia-ai-features.md`.
- **Adaptive practice:** selects next question based on recent performance. For under-16s, this is on by default because it directly serves the educational purpose of the service. However, the student can switch to a fixed-syllabus order at any time, and the feature is described in child-friendly language before first use.
- **No behavioural profiling** for commercial purposes (no marketing segmentation, no price discrimination, no feed ranking optimised for engagement).

**Gaps:**
- **[GAP-12A]** We need to present a clearer, child-friendly explanation of "how the AI marker works" before first use. Copy drafted; needs UI implementation. Target: next release.
- **[GAP-12B]** A standing "turn off AI marking" switch in settings does not yet exist. It should. Target: next release.

**Status:** AMBER

---

## Standard 13 — Nudge techniques

**What the code requires:** do not use nudge techniques to lead or encourage children to provide unnecessary personal data or weaken or turn off their privacy protections.

**Our position:**
We have an explicit "no dark patterns" rule in our design guidelines. Our onboarding, settings, and consent surfaces give equal visual weight to privacy-preserving and privacy-weakening choices.

**What we do:**
- Onboarding never suggests "turn on notifications to save your progress" or similar false-consequence nudges
- Privacy settings use equal-weight buttons (no green "Allow All" with greyed-out "Reject All")
- Streaks and progress animations are designed to celebrate effort, not to guilt users into returning
- Detailed policy: `02-policies/nudge-techniques-policy.md`
- Design reviews include a "nudge check" line item

**Gaps:**
- **[GAP-13A]** The cookie banner on the marketing site (www.) does not yet comply — "Accept" is more prominent than "Reject". Being fixed.
- **[GAP-13B]** The "you earned X points! share with friends?" animation after a completed practice set should not be shown to under-16s (it pushes social sharing). To be gated.

**Status:** AMBER

---

## Standard 14 — Connected toys and devices

**What the code requires:** ensure you include effective tools to enable conformance to the code. This standard applies specifically to "connected toys and devices" — physical products that are internet-connected.

**Our position:**
The English Hub is a pure software service (web + mobile PWA). We do not sell, provide, or integrate with connected physical toys or devices that are aimed at children. We do not use voice assistants, smart speakers, or wearables as input surfaces. We do not offer an SDK to third parties.

**Conclusion:** Standard does not materially apply to our current product.

**Status:** GREEN (not in scope)

---

## Standard 15 — Online tools

**What the code requires:** provide prominent and accessible tools to help children exercise their data protection rights and report concerns.

**Our position:**
Every child-facing surface exposes data rights tools as a top-level menu item ("Your data"), including: access, correction, deletion, data export, object to processing, withdraw consent, and a "report a concern" form that goes directly to the Data Protection Lead inbox.

**What we do:**
- "Your data" button visible in the main navigation on every screen
- One-tap flows for: download my data, delete my account, see who can see my data, report a problem
- Plain-language descriptions of each right
- SAR procedure specifically for children and parents: `05-ico/subject-access-request-procedure.md`
- Published ICO complaint link: https://ico.org.uk/make-a-complaint/

**Gaps:**
- **[GAP-15A]** Data-export currently returns JSON only. A simple human-readable (PDF or HTML) version should also be provided for children. Target: Q3 2026.

**Status:** AMBER

---

## Overall status

| Standard | Status |
|---|---|
| 1. Best interests | AMBER |
| 2. DPIAs | AMBER |
| 3. Age appropriate application | AMBER |
| 4. Transparency | AMBER |
| 5. Detrimental use | AMBER |
| 6. Policies & community standards | GREEN |
| 7. Default settings | AMBER |
| 8. Data minimisation | AMBER |
| 9. Data sharing | AMBER |
| 10. Geolocation | GREEN |
| 11. Parental controls | AMBER |
| 12. Profiling | AMBER |
| 13. Nudge techniques | AMBER |
| 14. Connected toys/devices | GREEN (not in scope) |
| 15. Online tools | AMBER |

**Overall assessment:** The English Hub is **mostly aligned** with the Children's Code at a design level, with a series of specific, tracked gaps — see `gap-analysis.md`. No gap is a "RED" / material non-conformance, but the cumulative AMBER posture means we are not yet ready to describe ourselves as "fully compliant" to schools, the ICO, or parents, and this is reflected in our external-facing communications.

**Sign-off:**

| Role | Name | Date |
|---|---|---|
| Data Protection Lead | — | — |
| CTO | — | — |
| Founder | — | — |
