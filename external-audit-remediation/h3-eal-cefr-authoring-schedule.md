# H3 schedule — EAL B1 / B2 / C1 content authoring

> **Status:** scheduled, not yet started
> **Triggered by:** business decision B14 (2026-05-20) — "Do it; Horizon 3, schedule separately"
> **Audit reference:** REMEDIATION-LOG.md, Item I6 ("EAL CEFR level pages")
> **Owner:** TBD (content lead) — needs sign-off before kick-off

## Why this is a separate workstream

The Horizon-1 remediation surfaced (Item I6) that the EAL section ships
10 topics × 4 CEFR levels (A2, B1, B2, C1) = 40 routes, but the
underlying `EALTopic` model holds **one shared body**. That means 30/40
routes silently reuse the A2 body. H1 mitigations applied:

- non-A2 routes are `noindex` + canonical → the A2 body
- a duplicate-body-hash CI guard
  (`scripts/check-eal-level-dupes.mjs`) runs **report-only** because
  it currently (and correctly) fails 30 times
- on-page banner states "level-specific material is in development"

H3 turns the guard from report-only to **blocking** as soon as
genuine level-differentiated content lands for each topic.

This is content authoring + SME review work — multiple weeks of editor
and CEFR-credentialled SME time. It must not be bundled into a code PR.

## Scope to author

For each of the 10 EAL topics, produce three new bodies (B1, B2, C1)
**genuinely differentiated from A2** along all four CEFR dimensions
(grammatical range, vocabulary range, discourse, sociolinguistic). The
B1 body cannot just be A2 with slightly harder examples — CEFR
descriptors specify different _can-do_ statements at each band.

The 10 topics (per `src/data/eal/...` — confirm against current data
file at kick-off):

1. Word order
2. Articles (a / an / the / zero article)
3. Verb tenses
4. Modal verbs
5. Prepositions
6. Conjunctions and connectives
7. Punctuation
8. Cohesion and reference
9. Vocabulary: academic register
10. Vocabulary: descriptive / creative register

For each (topic × level) cell:

- concept exposition pitched at the band (length ramps with level)
- worked examples at-level — minimum 5 per cell
- common errors specific to the band — minimum 4 per cell
- exercises (10+ items per cell), CEFR-aligned by item difficulty
- sample student response showing band achievement
- self-check rubric ("what a successful B1 answer looks like")

That is 30 new bodies × roughly 800-1,500 words each = 24,000-45,000
words of authored EAL content.

## Anchor authorities (no synthetic content)

Mirrors the rule already in `business-docs/CONTENT_BUILD_PLAN_KS3_EAL.md`:

1. **CEFR level descriptors** — https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
2. **Cambridge English exams syllabi** — A2 Key, B1 Preliminary, B2 First, C1 Advanced
3. **British Council LearnEnglish + LearnEnglish Teens** — methodology only (no copy-paste)
4. **IELTS General Training band descriptors** — for productive-skill bands
5. **EGP (English Grammar Profile)** by Cambridge English — grammatical structures by CEFR level (free academic resource)

Every fact and every "this structure appears at B1 not A2" claim
needs a citation comment in the data file referencing one of the above.

## Forbidden (per the site's `accuracy-commitment.md`)

- ❌ Claiming Cambridge / British Council endorsement (we are not endorsed)
- ❌ Reproducing past-paper questions without attribution + within
  copyright
- ❌ "What examiners want to see" framing for productive-skill assessment
- ❌ Synthetic CEFR-band classification of student responses without
  the rubric being public

## Estimate + sequencing

Indicative — to be re-estimated with the chosen editorial team:

- **Phase 1 — 2 weeks:** define the per-level house style; build the
  detailed authoring brief (template, citation rules, exercise format);
  pilot one topic × three bands end-to-end as the reference artefact.
- **Phase 2 — 4-6 weeks:** author the remaining 9 topics × 3 bands.
  Suggest 3 parallel author tracks (one author per band) with weekly
  cross-review.
- **Phase 3 — 2 weeks:** SME pass (CEFR-credentialled assessor) +
  copy-edit + accessibility pass (reading-age check for the L1 register
  used in instructions).
- **Phase 4 — 1 sprint:** wire the new bodies into the `EALTopic`
  model (or replace the model with `EALTopicLevel` keyed on `topic` ×
  `level`); flip the duplicate-body CI guard from report-only to
  blocking; remove the noindex + "in development" banner; restore
  canonical to each level page.

## Definition of done

- 30/30 new bodies authored, SME-approved, copy-edited
- `scripts/check-eal-level-dupes.mjs` blocking and passing
- Per-level pages indexed; non-A2 canonicals removed
- "Level-specific material is in development" banner removed
- REMEDIATION-LOG.md Item I6 updated to mark the H3 component complete
- DPIA `dpia-ai-features.md` and `dpia-processing-children-data.md`
  unchanged (no new processing — same accounts, same data shapes)

## Out of scope here

- Authoring level-differentiated EAL **assessment** (the diagnostic /
  end-of-topic quiz) — that is its own H3+ workstream
- Speaking practice — separate workstream (audio infra not in place)
- Arabic L1 translation overlay — separate H3 i18n workstream

## Why this file exists rather than just "do it"

The H1 stop-for-review gate explicitly disallows bundling content
authoring into the code-remediation PRs. This document is the audit
trail for B14 having been accepted ("Do it") and scheduled into the H3
queue, separately from the H1.5 code-side propagation work tracked in
`REMEDIATION-LOG.md`.
