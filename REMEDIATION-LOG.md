# REMEDIATION-LOG — The English Hub External Audit (2026-05-19)

**Scope executed:** HORIZON 1 only ("stop the bleeding" — live legal /
safeguarding / consumer-law / minor-facing exposure). Per the execution
brief, work stops here for review before Horizon 2.

**Method:** the audit is external inference; the repo is ground truth.
Every finding was located in real source and the defect confirmed before
change. ~53 parallel agents, one file/concern each, plus orchestrator
consolidation. No exam-board endorsement, statistic, testimonial,
certification, outcome or literary quotation was invented. Business-
undecided values were replaced with honest, non-contradictory interim
copy containing **no placeholder token**, and are listed in
`BUSINESS-DECISIONS-NEEDED.md`.

**Verification (whole repo):**

- `node scripts/check-placeholders.mjs` → **PASS** (0 tokens in any
  published source: `src/app`, `content`, `src/lib/i18n`,
  `src/components`, `public`).
- `npx tsc --noEmit` → **0 errors**.
- `npx next build` → **success, 1380/1380 static pages**. (`prisma
generate` hits a local-Windows EPERM file-lock only; Vercel/Linux
  generates cleanly — every prior deploy this session built fine.)

---

## Item-by-item status

### I1 — Placeholder publish gate + scrub — **DONE (permanent)**

- New `scripts/check-placeholders.mjs` fails on any `[DSL_`,
  `[FACT-CHECK`, `[Address —`, `[PLACEHOLDER`, `[VERIFY` literal in
  published content. Wired into: `package.json` `prebuild` (so
  `next build` is red on any token), `.husky/pre-commit`, and the CI
  `lint-and-typecheck` job (`.github/workflows/ci.yml`).
- Scrubbed all live occurrences. Baseline was 74 tokens across 8 src
  files + a further 28 across 10 `content/blog` MDX files (EN+AR). All
  removed; gate now green. **Verified:** gate exit 0.

### I2 — Safeguarding DSL block + consolidation — **DONE (1 blocking business input)**

- `src/app/safeguarding/page.tsx`: removed all 9 `[DSL_*]` tokens; DSL
  section now routes through the live report form + monitored
  safeguarding inbox with a 24-hour acknowledgement SLA and verified
  emergency signposting (999 / Childline 0800 1111 / NSPCC 0808 800 5000
  / CEOP / Qatar 919). No DSL identity fabricated.
- `src/app/safeguarding/report/page.tsx`: emergency + 24h + DSL routing
  notice added directly on the report form (M8).
- `src/app/legal/safeguarding/page.tsx`: stubbed to a "moved to
  /safeguarding" link + `noindex`; `next.config.js` 308-redirects
  `/legal/safeguarding` → `/safeguarding`; removed from `sitemap.ts`.
  **One authoritative policy now exists.**
- **Blocking business input:** real DSL name + monitored email + phone
  (see decisions doc). Interim copy is safe and contactable in the
  meantime.
- **Tracked non-blocking follow-up (content merge):** the stubbed
  `/legal/safeguarding` held richer procurement content absent from the
  authoritative page — DBS vetting matrix (DSL/Deputy/support =
  Enhanced+Barred; engineers w/ data = Standard; admin = Basic; 3-yr
  renewal), DSL/Deputy Level-3 training (≥2-yearly, annual board
  report), legal framework refs (Children Act 1989/2004, KCSIE, Working
  Together 2023, Online Safety Act 2023, Sexual Offences Act 2003,
  Prevent/Counter-Terrorism & Security Act 2015, Qatar Law No. 25/2001),
  Qatar external reporting (Qatar Foundation for Social Work; note the
  page uses the 919 child/woman line per the approved copy), PIDA 1998
  whistleblowing (LADO, NSPCC whistleblowing 0800 028 0285), and the
  Channel/Prevent referral pathway. **Recommend merging into
  `/safeguarding` in Horizon 2** — captured here so the knowledge is not
  lost; not done now to avoid re-authoring a safeguarding policy under
  the H1 stop-for-review gate.

### I3 — `[FACT-CHECK]` on AO5 blog + AO5/AO2 retitle — **DONE**

- `content/blog/ao5-gcse-english-literature.mdx` (+ `.ar`): `[FACT-CHECK]`
  removed; retitled to "The methods objective (AO2) in GCSE English
  Literature"; intro rewritten to state AQA Literature has no AO5 (AO5
  is English Language); all specific AO mark figures removed and
  replaced with a "check the current spec" line.
- **Repo-vs-audit discrepancy:** blog slugs are file-derived
  (`dynamicParams=false`), so the public URL cannot change without
  renaming the file and would 404. The canonical URL therefore stays
  `/blog/ao5-gcse-english-literature` (content corrected in place); an
  alias redirect was added rather than the audit's old→new slug 301,
  and the sitemap keeps the existing URL. Substance of H11 (no token,
  correct AO2 framing, no unverified marks) is fully met.

### I4 — Contradictory facts reconciled — **DONE (3 open business decisions)**

Repo ground truth resolved two confidently and applied site-wide:

- **(a) Trial = 7-day, card-required, auto-converts** (refund-policy was
  the lone 30-day outlier). Applied to refund-policy, terms (§4/§10),
  pricing, pricing/layout, FAQs, and the missed help FAQ
  `dictionary.ts:help.gs.q1.a` (orchestrator fix). 30-day removed
  everywhere.
- **(e) Minimum age = 13** (registration enforces: under-13 blocked;
  13–15 require parent/guardian consent — `api/auth/validate-age`).
  Applied to privacy, terms, safeguarding, about, for-parents,
  for-schools. "aged 14"/"14–16"/"14–18" copy reconciled.
- **(b) data hosting, (c) refund entitlement, (d) human-review SLA** —
  internally contradictory with no repo-derivable canonical value;
  removed the contradiction (per-processor disclosure for hosting; all
  refund copy now defers to the single Refund Policy; SLA copy no longer
  asserts two competing numbers) and **logged as business decisions**.
  No value invented.

### I5 — Fabrication-risk poetry + quote-risk sweep — **DONE**

- `before-you-were-mine`, `singh-song`, `the-farmers-bride` curated in
  place (kept live, useful): every unverified/disputed line removed from
  quotation marks and reframed as paraphrase; honest "verify against
  named primary edition" notes added. **Material finding:** these pages
  (and `the-emigree`) were reproducing in-copyright poems **near-verbatim
  line-by-line** — a copyright exposure broader than the audit's
  fabrication flag; all now paraphrased.
- Extended sweep: `the-emigree`, Of Mice & Men ch.6 revision-notes,
  `/analysis/jekyll-hyde` (M19: "sea of liberty", "polite fiction of the
  law" de-quoted; Hyde reading standardised), `/analysis/inspector-calls`
  (M19: "She asked for the earth", "I wasn't in any way responsible"
  de-quoted), plus the I1 revision-notes scrub (Pigeon English,
  Anita and Me, Things Fall Apart, Curious Incident, Twelfth Night) —
  all unverified quotes paraphrased; no disputed phrase in quote marks
  anywhere. All flagged for human primary-edition verification.
- **Note:** the broader "many revision/poetry pages reproduce
  in-copyright text verbatim" pattern is a Horizon-2/3 copyright sweep —
  recorded, not expanded here.

### I6 — EAL CEFR level pages — **DONE (content authoring is H3)**

- `src/app/eal/[slug]/level/[cefr]/page.tsx`: removed the
  self-incriminating "you're viewing the B2 framing" string; non-native
  bands now `noindex` + canonical → native band + an honest banner
  ("level-specific material is in development"). Native (A2/B1) bands
  unchanged & indexed.
- New `scripts/check-eal-level-dupes.mjs` duplicate-body-hash guard;
  wired to CI **report-only** (`|| true`) because it currently (and
  correctly) fails: confirmed **0/10 topics are level-differentiated —
  30/40 (topic,level) routes reuse A2** (the `EALTopic` model has one
  shared body). Authoring real B1/B2/C1 content is Horizon 3; the guard
  flips to blocking then. Diff-sweep report:
  `external-audit-remediation/eal-level-diff-sweep.md`.

### I7 — Unsupported claims — **DONE (programme terms = business decision)**

- `dictionary.ts`: "Trusted by…"/"10,000 families"/social-proof headings
  → launch-stage "built by English teachers"; Trustpilot review CTA key
  emptied.
- `affiliates` (`dictionary-affiliates.ts` + `AffiliatePublicPage.tsx`
  commission table): "14,000+ students", "871 routes", "£42 average
  commission", per-signup £ table → launch-stage / generic
  dashboard-shows-real-figures wording; no count invented.
- `creators`: "How I got a Grade 9" template → outcome-neutral idea +
  mandatory ad disclosure; partner eligibility set to 18+.
- `pricing`: "trusted by" H1 replaced; "wave 1 schools £3,000",
  £6k–£12k future anchor, "⚡ prices increasing", "entry will not
  reopen", hard "N places remaining" removed.
- Footer Trustpilot CTA removed; `json-ld.tsx` unsubstantiated
  `aggregateRating` (placeholder 4.8/0) removed (manual-action risk).
- Dead-code `SchoolTestimonials.tsx` (fabricated named heads / "Trusted
  by Schools") neutralised to render nothing until real consented
  testimonials exist.
- Single open item: the **one canonical partner commission / cookie /
  payout structure** (affiliates vs creators conflict) — business
  decision; no value invented.

### I8 — False school/predicted-grade assurances — **DONE**

- `/for-schools`: "no third parties / no tracking" → accurate
  named-sub-processor disclosure; predicted-grade "supporting fair
  outcomes when students miss exams" → "teaching-aid progress estimate,
  not a predicted grade, not an awarding mechanism".
- `/for-parents`: "Predicted Grade" → "progress estimate" with the
  not-an-official-grade definition; vague COPPA reference removed.

### I9 — Honest compliance status — **DONE**

- `/about` + `/for-schools`: DPA "available on request during
  procurement"; DPIA "in preparation; not yet available for inspection";
  Cyber Essentials / VPAT "not currently held"; all "coming soon" /
  "filing Q3 2026" framing removed.

---

## Exit-criterion check (Horizon 1)

A procurement-aware school now finds: no broken safeguarding contact
(interim routing + emergency signposting live), no contradictory
legally-material fact left asserting two values, no fabricated quotation
inside quote marks, **no placeholder token on any route (gate enforced)**,
no unsubstantiated authority/usage claim, and no CEFR level page that
misrepresents its content (noindex + honest label). The I1 gate is
permanent. **Horizon 2 not started — awaiting review.**

---

## Horizon-1.5 (2026-05-20) — partial application of business decisions

The founder answered the 15 business decisions in
`BUSINESS-DECISIONS-NEEDED.md` on 2026-05-20. Application is **partial**
because a subsequent local revert wave (intentional, per file-change
notices) rolled back several of the propagation edits. Authoritative
current on-disk state per decision:

| #   | Decision          | Answer                                                                                                                                 | Applied where (kept)                                                                                                                                                                                                                                                                                                                                                                             | Reverted / outstanding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B1  | DSL identity      | Lauren Johnson, safeguarding@theenglishhub.app, +974 5187 9582, 24h SLA, no Deputy                                                     | `src/app/safeguarding/page.tsx`, `src/app/safeguarding/report/page.tsx`, `src/app/legal/privacy/page.tsx`                                                                                                                                                                                                                                                                                        | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B2  | Hosting           | Canonical statement: Vercel (front end) + Supabase EU (auth/DB) + Microsoft Azure UK South (backend) + Anthropic US (DPA, no training) | `src/lib/i18n/dictionary-legal-long.ts` (s4 intro + Supabase/Vercel/Azure entries)                                                                                                                                                                                                                                                                                                               | `faqs/faq-data.ts` and `for-schools/page.tsx` propagation reverted                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| B3  | Refunds           | Confirmed (statutory 14-day only)                                                                                                      | Already applied at H1 — no change                                                                                                                                                                                                                                                                                                                                                                | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B4  | SLA               | 10 working days for acknowledgement (UK GDPR 1-month statutory deadline unchanged)                                                     | `src/lib/i18n/dictionary-legal-long.ts` (ai_transparency.s5.box_l1_s, box_l3_s, contact.p2_s1, ai_gov.s10.p2)                                                                                                                                                                                                                                                                                    | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B5  | Min age           | Lowered 13 → 11; 11-15 need parent/guardian consent; UK GDPR Art. 8 verifiable parental consent for 11-12                              | `src/app/api/auth/validate-age/route.ts`, `src/app/legal/privacy/page.tsx`, `src/lib/i18n/dictionary.ts` (terms.s2.p1, form.under*13_blocked comment, account.export.under13*\* comment), `src/lib/i18n/dictionary-legal-long.ts` (privacy.s5.li1/li2/li2b), `src/app/auth/register/page.tsx` (UI gate at <11), `src/app/legal/privacy-qatar/page.tsx`, `src/app/legal/privacy-qatar/content.ts` | **REVERTED**: `lib/auth.ts` (MIN_AGE still 13), `api/auth/register/route.ts` (MIN_AGE still 13), `lib/parent-reports/generate.ts` + cron + tests (still gate at 13), `__tests__/child-defaults-strict.test.ts` (TEEN_AGES still starts at 13), `lib/privacy/apply-child-defaults.ts` comment, `school/admin/bulk-upload/page.tsx`. **Net effect:** validate-age endpoint accepts 11+; the Prisma/Supabase signup downstream still enforces 13+. The two must be reconciled in a follow-up before any 11-12 year-old can complete sign-up. |
| B6  | 7-day trial       | Confirmed                                                                                                                              | Already applied at H1                                                                                                                                                                                                                                                                                                                                                                            | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B7  | Pricing           | Confirmed (£4,000 founding)                                                                                                            | Constants already match                                                                                                                                                                                                                                                                                                                                                                          | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B8  | Partner programme | Consolidate to one                                                                                                                     | **Not yet applied** — deferred                                                                                                                                                                                                                                                                                                                                                                   | Out-of-scope here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B9  | Registered office | Left out deliberately                                                                                                                  | No change needed                                                                                                                                                                                                                                                                                                                                                                                 | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B10 | DPO + DSL         | Separate roles (Calum = DPO; Lauren = DSL)                                                                                             | `src/app/legal/privacy/page.tsx` (M5 block)                                                                                                                                                                                                                                                                                                                                                      | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B11 | DPIA              | Check; create if missing                                                                                                               | Three substantive DPIAs already exist at `business-docs/compliance/childrens-code/03-dpias/` (parent + analytics + AI features); all currently still labelled v0.9 draft after the metadata-promote revert                                                                                                                                                                                       | Promotion to v1.0 + B5 change-log REVERTED on all three files                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| B12 | Mailboxes         | Fine via info@upskillenergy.com                                                                                                        | No change                                                                                                                                                                                                                                                                                                                                                                                        | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| B13 | robots.txt        | Apply H2 template (citation bots allowed; training-only blocked)                                                                       | **REVERTED** — `src/app/robots.ts` and the `ai-train` meta in `src/app/layout.tsx` are back at their pre-edit content                                                                                                                                                                                                                                                                            | Outstanding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| B14 | EAL CEFR content  | Authoring scheduled separately (H3)                                                                                                    | Schedule entry below                                                                                                                                                                                                                                                                                                                                                                             | Content authoring itself is H3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| B15 | Competitor table  | Dated disclaimer fine for now                                                                                                          | No change                                                                                                                                                                                                                                                                                                                                                                                        | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Additional H1.5 work that did survive

- **Safeguarding rich-content merge** — `src/app/safeguarding/page.tsx`
  now contains the merged DBS / Prevent / whistleblowing / legal-framework
  / safer-recruitment / records-retention sections previously stranded on
  `/legal/safeguarding`. `src/app/legal/safeguarding/page.tsx` is now a
  redirect-only shim to `/safeguarding` (the edge 308 already exists in
  `next.config.js`). One authoritative safeguarding page; no fabricated
  facts (the agent intentionally did NOT port Education Act 2002 s.175,
  blanket DBS claims, or Editorial Director / Accessibility Lead roles —
  see code comments in the merged file).
- **Audit-trail bookkeeping** — this section.

---

## Horizon-1.6 (2026-05-20) — PDPPL gap-analysis full execution

After the partial-application revert wave above, the user requested a full
execution of the Qatar PDPPL gap analysis. This section records what
landed this time.

### What shipped

| Action                                                                                                         | Status                                                                                                                                          | Evidence                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **G1** — Article 16 permit application dossier (children's data)                                               | ✅ Drafted, ready for Qatari legal sign-off                                                                                                     | `business-docs/compliance/qatar-pdppl/01-article-16-permit/application-dossier.md`                                                                                                                                |
| **G2** — Merge `/legal/privacy-qatar` and `/legal/privacy-qatar-supplement` into one authoritative page (v2.0) | ✅ Done                                                                                                                                         | `src/app/legal/privacy-qatar/page.tsx`; supplement is now a 308 redirect-only shim; edge 308 added in `next.config.js`                                                                                            |
| **G3** — Downgrade the "Arabic prevails" clause until a sworn translation exists                               | ✅ Done                                                                                                                                         | `src/app/legal/privacy-qatar/page.tsx` — language disclaimer now says "Arabic translation is provided for information only; English controls" pending the sworn translation                                       |
| **G4** — Promote DPIAs to v1.0 FINAL with B5 / B1 / B10 / B2 change log                                        | ✅ Done for all three                                                                                                                           | `dpia-processing-children-data.md` (1.0), `dpia-analytics.md` (1.0), `dpia-ai-features-v1.md` (re-reviewed, placeholder removed); v0.9 stubs marked SUPERSEDED                                                    |
| **G5** — Provision DPO + DSL mailboxes                                                                         | ✅ Inbound live since 2026-04-21 (Cloudflare); outbound "Send Mail As" runbook added                                                            | `business-docs/CLOUDFLARE-EMAIL-SETUP.md` + new `business-docs/compliance/qatar-pdppl/03-pdms/dpo-mailbox-send-as-runbook.md`                                                                                     |
| **G6** — Pre-fill NCGAA breach notification template + runbook                                                 | ✅ Done                                                                                                                                         | `business-docs/compliance/qatar-pdppl/02-breach-response/ncgaa-notification-template.md` + `runbook.md`                                                                                                           |
| **G7** — Surface the Qatar Article 17 cross-border consent gate in the signup flow                             | ✅ Done                                                                                                                                         | `src/app/auth/register/page.tsx` — country-of-residence select + named-destination consent panel (visible when country=QA) + validation + persistence to `profiles.country` / `profiles.data_transfer_consent_qa` |
| **G8** — Audit Arabic marketing templates                                                                      | ✅ Assessed — no Arabic marketing templates currently exist; transactional templates carry sender ID + unsubscribe and are out of Art. 22 scope | (no code change required today)                                                                                                                                                                                   |
| **G9** — PDMS index document                                                                                   | ✅ Done                                                                                                                                         | `business-docs/compliance/qatar-pdppl/00-pdms-index.md`                                                                                                                                                           |
| **G10** — NIA certification readiness note (optional path)                                                     | ✅ Done — recommendation: defer                                                                                                                 | `business-docs/compliance/qatar-pdppl/03-pdms/nia-certification-readiness-note.md`                                                                                                                                |

### What still needs a human / external party

**Deferred by founder decision (2026-05-20) — parked until trigger:**

- **Qatari legal opinion** — engaging Clyde & Co Doha / DLA Piper Doha /
  Eversheds Doha would cost USD 8k–25k. Founder decision (2026-05-20):
  not at this stage; commission later. The trigger to revisit is one of
  (a) the first Qatar school customer that contractually requires it,
  (b) a material change in our commercial commitment to Qatar (a Qatar
  entity, hire, or material Qatar user-count spike), or (c) a material
  change to PDPPL itself. Tracked in
  `business-docs/compliance/qatar-pdppl/00-pdms-index.md` §4.
- **Article 16 permit submission** — the dossier is shelf-ready at
  `business-docs/compliance/qatar-pdppl/01-article-16-permit/`. Held
  pending the legal opinion above; we do not want to submit without
  Qatari counsel sign-off. The substantive compliance posture (Article
  17 cross-border consent, DPIAs, 72-hour breach plan, 30-day rights
  SLA, consent ledger) is in place independent of whether the permit is
  formally filed.

**Operational follow-ups (no external spend; founder/admin time only):**

- **DPO mailbox send-as** — 10–15 minutes of Google Workspace Admin
  config per alias to flip the DPO + DSL mailboxes from receive-only to
  full send-and-receive at their published addresses. Runbook is at
  `business-docs/compliance/qatar-pdppl/03-pdms/dpo-mailbox-send-as-runbook.md`.
- **Sworn Arabic translation of the Qatar privacy notice** — would be
  commissioned alongside the Qatari legal opinion. Until then the
  privacy notice correctly says "English controls; Arabic is for
  information only." The text already anticipates flipping back to
  "Arabic prevails" once a sworn translation is published.
- **Reconcile the B5 floor across the Prisma signup row creation** — the
  validate-age endpoint accepts 11+ but `lib/auth.ts` and
  `api/auth/register/route.ts` still gate at 13+. This remains out of
  scope for the PDPPL gap and is held over for the next H2 pass.

### Verification (this commit)

- `node scripts/check-placeholders.mjs` → **PASS** (0 tokens in published content)
- `npx tsc --noEmit` → 0 errors

---

## H2 / H3 schedule (set 2026-05-20)

- **H2 (next):** robots.txt H2 template (B13); reconcile B5 floor across
  Prisma/Supabase signup + child-defaults tests + parent-reports gates
  (currently the validate-age endpoint accepts 11+ but the signup row
  creation rejects under-13s, so an 11-12 year-old cannot actually
  register today); finish B2 propagation into faqs/faq-data.ts and
  for-schools/page.tsx; promote DPIAs to v1.0 with the B5/B1/B10/B2
  change-log entries.
- **H3 (scheduled separately):** B14 — author genuine CEFR-aligned
  B1/B2/C1 EAL content across the 10 EAL topics so the
  `scripts/check-eal-level-dupes.mjs` guard can flip from report-only to
  blocking. This is a content-authoring workstream estimated at multiple
  weeks of editor / SME time and must not be bundled into a code PR.
