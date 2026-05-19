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
