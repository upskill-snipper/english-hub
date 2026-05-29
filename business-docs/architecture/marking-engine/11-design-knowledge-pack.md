# Design 11 — Versioned Knowledge Pack format + loader (§1.2)

> Design doc for the grounded Marking Engine. Traces to `00-architecture-source.md` §1.2/§1.3
> (Knowledge Packs + retrieval) and `01-ielts-writing-task2-spec.md` §1 (assemble user message —
> inject descriptors + exemplars from pack), §2 (`{{BAND_DESCRIPTORS}}` / `{{EXEMPLARS}}` placeholders),
> §4 (`pack_version` in the result schema), and §9 build-order step 1 ("Knowledge Pack loader").
> No code is written in this phase. This document defines the on-disk/in-DB format, the version-id
> scheme, the loader/resolver API, the migration off the current hardcoded mark-schemes, and the
> copyright/sourcing guardrail.
>
> Provenance note: the two source specs were read in full for this design. The "current state"
> claims about specific files are grounded in the file-verified codebase maps supplied in the task
> context (exact type shapes, exports, paths). Any builder picking this up should re-open the named
> files before editing — they are cited inline so this is cheap.

---

## 1. Current state in THIS codebase

There is **no Knowledge Pack abstraction**. What exists today is the *embryo* of one: per-board GCSE/IGCSE
rubrics held as compiled TypeScript object literals. The pieces that map onto §1.2 are:

### 1.1 The rubric data (the strongest existing asset)
- **`src/lib/marking/mark-schemes/*.ts`** — 20 paper-level `MarkScheme` objects (AQA, Edexcel, OCR,
  Eduqas, Cambridge 0500/0990), registered through one barrel `src/lib/marking/mark-schemes/index.ts`
  (`MARK_SCHEMES: Readonly<Record<string, MarkScheme>>`, keyed by opaque string id).
- **Type shape** (`src/lib/marking/mark-schemes/types.ts`):
  - `BandDescriptor { band, minMarks, maxMarks, label, descriptor, indicators[] }` — the qualitative
    descriptor text + short illustrative indicator bullets.
  - `AssessmentObjective { id, label, description, maxMarks, weighting, bands[] }`.
  - `QuestionScheme { id, questionType, taskDescription, totalMarks, assessmentObjectives[], examinerNotes? }`.
  - `MarkScheme { id, board, subject: 'English Literature'|'English Language', paper, title, totalMarks,
    durationMinutes, questions[], version?, sourceUrl? }`.
- **Resolver**: `getMarkScheme(id): MarkScheme | null` — bare lookup, **soft-fails to `null`** on a miss;
  `listMarkSchemeIds()`. There is no resolve-by-`(board, subject, qualification, questionType)` and no
  version selection.

### 1.2 What "versioning" means today (weak)
- `MarkScheme.version` is an **optional free-text string** (e.g. `'8700/1'`, a spec code — *not* semver,
  *not* enforced, *not* a directory).
- Provenance is captured **post-hoc per mark**, not as a pack identity, by
  `src/lib/marking/versioning-capture.ts` → `captureVersions()`. It upserts three separate rows
  (`model_versions`, `prompt_versions`, `rubric_versions`) into Supabase, content-hashing the prompt text
  and the rubric, and returns `{modelVersionId, promptVersionId, rubricVersionId}` (best-effort,
  never throws — EU AI Act Art.12 traceability must not break marking). `rubric_versions.scheme_version`
  (default `'v1.0'`) + `rubric_versions.content_hash` is the closest existing analogue to a pack version,
  but it is *split across three tables and computed at mark time*, not a single immutable bundle id.

### 1.3 The grade-boundaries module is the **provenance pattern to copy**
`src/lib/marking/grade-boundaries/` is the most pack-like thing in the repo and the design below
deliberately mirrors its discipline:
- `BoardBoundaryTable { board, qualification, series, sourceUrl, retrievedAt, verified: boolean, note?,
  thresholds[] }` — a **`verified` human gate**, a `sourceUrl`, a `retrievedAt` timestamp, and a
  "null-not-guess" policy (Cambridge thresholds are deliberately all-null until a human decides).
- `getUsableBoundaryTable(board)` returns a table **only if** it maps AND `verified===true` AND has usable
  data — otherwise `null` and the caller falls back to a proxy + an `indicativeOnly` flag.
- This is exactly the "honest about uncertainty / traceable / human-gated" posture §1.2 and §9 want for
  packs. The Knowledge Pack must adopt `verified`, `sourceUrl`, `retrievedAt`, and fail-closed semantics.

### 1.4 IELTS rubric content already exists, but hardcoded and outside any pack
- `src/lib/ielts/band-descriptors.ts` holds **paraphrased** IELTS descriptors (`TASK2_DESCRIPTORS` bands
  4–9, `WRITING_TASK1/2_CRITERIA`, speaking prose). Explicitly "original paraphrased IP, NOT official
  descriptors verbatim." The live IELTS routes (`src/app/api/ielts/writing-feedback/route.ts`) inline these
  into the prompt at build time.
- `src/lib/ielts/bands.ts` already exports `overallBand(bands[])` implementing **the spec's exact §5
  half-band rounding** (frac < .25 → floor, < .75 → +0.5, else +1). The pack design must *not* duplicate
  this — the validator reuses it.

### 1.5 Exemplars: **none, anywhere**
No graded sample answers exist in any data layer (GCSE `indicators[]` are short bullets; `AOScore.evidence`
is runtime essay quotes). §1.3 calls exemplar anchoring "one of the single biggest levers on marking
accuracy" — it is the single biggest missing piece.

### 1.6 Coverage test as a contract
`src/__tests__/mark-schemes-coverage.test.ts` already enforces invariants on the GCSE schemes (descriptor
≥20 chars, AO id regex, weighting in (0,1], top-band marks ≤ paper total, every Prisma `ExamBoard` enum
value has ≥1 scheme). The pack work needs an analogous **pack-validity test** as its acceptance contract.

---

## 2. Target state

One **versioned Knowledge Pack per board/exam/task-type**, each an immutable, file-based bundle that the
loader resolves and the retrieval layer (§1.3) reads from. A pack is the *single source of truth* for
everything board-specific: rubric, descriptors, mark scheme/guidance, expert-marked exemplars, conventions
& pitfalls, and the prompt template placeholders. Updating a board becomes a documented **data change**
(new pack version), never a model retrain and never a code edit to a `.ts` literal.

### 2.1 On-disk layout (file-based, versioned-immutable)
Packs live under a top-level, deploy-bundled content tree, addressed by a stable path:

```
src/marking/knowledge-packs/
  <board>/<subject_or_exam>/<qualification>/<task_type>/<version>/
    manifest.json          # pack identity, version, status, checksums, sourcing/copyright record
    rubric.json            # criteria/AO list + the official mark scheme / marking guidance text
    band-descriptors.json  # per-criterion, per-band descriptor language (the {{BAND_DESCRIPTORS}} source)
    exemplars/
      band-5.md            # one or more OWN expert-marked exemplars per band (the {{EXEMPLARS}} source)
      band-6.md
      band-7.md
      ...
    conventions.json       # board-specific conventions + common pitfalls (anti-drift guidance)
    prompt-template.md      # the system-prompt template WITH placeholders (moves prompt into the pack)
```

Worked IELTS instance (the §9 step-1 MVP target):

```
src/marking/knowledge-packs/ielts/writing/academic/task2/v2025.1/
  manifest.json
  rubric.json
  band-descriptors.json
  exemplars/band-5.md … band-8.md
  conventions.json
  prompt-template.md
```

Rationale for file-based (not pure-DB): packs are *content artefacts* that must be diffable, code-reviewable,
deploy-pinned, and immutable per version. JSON/Markdown files in the repo give us version control, PR review,
and a deterministic deploy-time snapshot for free. The **DB role is provenance, not content** (see §2.5).

### 2.2 `manifest.json` schema (pack identity + integrity + sourcing)
```jsonc
{
  "packId": "ielts_writing_task2_academic",          // stable id WITHOUT version
  "version": "v2025.1",                                 // see §2.3 version-id scheme
  "fullId": "ielts_writing_v2025.1",                   // the value persisted as pack_version (spec §4)
  "board": "ielts",
  "subjectOrExam": "writing",
  "qualification": "academic",                          // academic | general | (GCSE: foundation/higher, etc.)
  "taskType": "task2",
  "criteriaModel": "ielts_4criteria",                  // discriminator: ielts_4criteria | gcse_ao_marks | cefr
  "status": "draft",                                    // draft | published | deprecated
  "specVersion": "1.0",                                 // version of THIS manifest schema
  "createdAt": "2026-05-29T00:00:00Z",
  "publishedAt": null,
  "sourceUrl": "https://...",                          // where the official descriptors were sourced
  "retrievedAt": "2026-05-29",
  "verified": false,                                    // human gate, mirrors grade-boundaries.verified
  "checksums": {                                        // sha256 of each file at publish time
    "rubric.json": "…",
    "band-descriptors.json": "…",
    "conventions.json": "…",
    "prompt-template.md": "…",
    "exemplars/band-6.md": "…"
  },
  "sourcing": {                                         // the copyright/sourcing guardrail, see §6
    "descriptorSource": "own_paraphrase",              // own_paraphrase | licensed | public_domain
    "exemplarSource": "own_expert_marked",            // own_expert_marked | licensed (NEVER board_secure)
    "containsBoardSecureMaterial": false,             // MUST be false to publish
    "licenceNote": "Descriptors paraphrased as original IP; exemplars written + marked in-house by …",
    "expertMarker": { "name": "…", "credential": "…", "markedAt": "…" }
  }
}
```

### 2.3 Version-id scheme
- **Pack path version**: `vYYYY.N` — `v2025.1`, `v2025.2`, … `N` increments per published change *within a
  year*; the year tracks the rubric/spec cycle. Directory-level so the path itself pins the ruleset.
- **`fullId` (the persisted `pack_version` of spec §4)**: `<packId-short>_<version>` →
  `ielts_writing_v2025.1`. This is the exact string the result schema (`01-spec` §4) stores per mark, so any
  historical mark resolves back to one immutable pack directory.
- **Immutability rule**: a published `<version>` directory is **never edited in place**. Any change =
  new version directory + bumped `N`. `status: deprecated` retires an old version without deletion (historical
  marks must still resolve their pack).
- **`manifest.specVersion`** versions the manifest *format* independently, so the loader can evolve the schema
  without invalidating old packs.

### 2.4 Loader / resolver API (replaces `getMarkScheme`)
A new module (e.g. `src/lib/marking/knowledge-pack/`) exposes:
- `resolvePack({ board, subjectOrExam, qualification, taskType, pinnedVersion? }): KnowledgePack` —
  resolves to the **highest published `verified` version** unless `pinnedVersion` overrides (re-marks /
  reproducibility). **Fail-closed**: throws/returns a typed error if no published pack matches (contrast
  today's `getMarkScheme` → `null` soft-fail). A wrong rubric is worse than a hard error.
- `loadPackByFullId(fullId): KnowledgePack` — exact pin for historical re-resolution (audit, calibration).
- `listPacks(filter?)` — for admin/coverage.
- `KnowledgePack` is a parsed, validated in-memory object: `{ manifest, criteria, bandDescriptors,
  exemplars, conventions, promptTemplate }`, with helpers the retrieval layer (§1.3) uses:
  `getDescriptorsForCriteria(criteriaNames)` and `getExemplarsNearBand(band, n)`.
- The loader **validates against `manifest.specVersion`**, recomputes/verifies `checksums` on load (tamper +
  integrity), and refuses to load a pack whose `sourcing.containsBoardSecureMaterial !== false`.

### 2.5 In-DB role (provenance, not content)
Reuse the existing `rubric_versions` spine rather than inventing a parallel store:
- On every mark, persist `pack_version = manifest.fullId` and the manifest checksum into the existing
  provenance path (`versioning-capture.ts` → `rubric_versions`). Add a `pack_full_id` / `pack_checksum`
  column (or fold into existing `scheme_version` + `content_hash`) so the persisted mark is pinned to an
  immutable pack. The marking result already carries `pack_version` in the §4 schema; persistence stores it
  verbatim. **No descriptor/exemplar text is duplicated into the DB** — the file tree is canonical; the DB
  records *which* pack id + checksum produced the mark.

### 2.6 Generality across criteria models
The manifest `criteriaModel` discriminator lets one loader serve IELTS (4 criteria, whole 0–9 bands), GCSE
(AO marks), and EAL/CEFR later — `00-source` §8.6 ("adding a board is mostly content work, not new
infrastructure"). IELTS is the first concrete `criteriaModel: ielts_4criteria` pack; the GCSE schemes migrate
to `criteriaModel: gcse_ao_marks` packs later (§5, low priority — they work today).

---

## 3. The gap

| Capability (target) | Today | Gap to close |
|---|---|---|
| Versioned bundle (`ielts_writing_v2025.1`) | free-text `version?` per scheme | new file-tree + manifest + `fullId` scheme |
| Rubric + band/level descriptors | GCSE only, in `.ts` literals | move to `band-descriptors.json` in pack; author IELTS pack |
| Mark scheme / marking guidance | `examinerNotes?` per question | first-class `rubric.json` + `conventions.json` |
| Expert-marked exemplars per band | **none** | author `exemplars/band-N.md`; biggest accuracy lever |
| Board conventions & common pitfalls | scattered in prompt-builder/examinerNotes | first-class `conventions.json` |
| Resolve by (board,subject,qual,taskType) → highest published version | opaque `getMarkScheme(id)` | `resolvePack(...)` + `loadPackByFullId(...)` |
| Fail-closed on miss | soft `null` | typed error / throw |
| Immutability + checksums + status | none | manifest checksums + `published`/`deprecated` |
| `pack_version` persisted per mark | split 3-table post-hoc capture | persist `manifest.fullId` + checksum |
| Copyright/sourcing guardrail | informal (band-descriptors.ts comment) | `manifest.sourcing` block + publish gate + test |
| Prompt template in the pack (data, not code) | `prompt-builder.ts` hardcodes structure | `prompt-template.md` with `{{…}}` placeholders |

The existing `versioning-capture.ts` provenance machinery, the `grade-boundaries` `verified`-gate pattern, and
`src/lib/ielts/bands.ts` (`overallBand`) are **reused, not rebuilt**.

---

## 4. Ordered build steps

> Scope is the Knowledge Pack **format + loader + IELTS Writing Task 2 pack** (`00-source` §1.2/§1.3,
> `01-spec` §9 step 1). The Marker (forced tool use), Validator, self-consistency, feedback generator,
> and calibration are *separate* design docs/steps that consume this loader. Each step below names the files
> it touches and its acceptance criterion. No code is written in this phase — these are the build steps for
> the implementation phase.

### Step 1 — Define the pack TypeScript types + manifest schema
- **Files**: new `src/lib/marking/knowledge-pack/types.ts` (the `KnowledgePack`, `PackManifest`,
  `PackCriterion`, `PackBandDescriptor`, `PackExemplar`, `PackSourcing`, `CriteriaModel` discriminated union);
  optionally a `manifest.schema.json` for editor/CI validation.
- **Acceptance**: types compile under the repo's strict TS config; `PackManifest` includes every field in §2.2
  (`fullId`, `status`, `verified`, `checksums`, `sourcing.containsBoardSecureMaterial`, `criteriaModel`);
  a fixture manifest type-checks. `depends_on`: none.

### Step 2 — Build the loader/resolver (fail-closed, checksum-verified, version-pinning)
- **Files**: new `src/lib/marking/knowledge-pack/loader.ts` (`resolvePack`, `loadPackByFullId`, `listPacks`,
  parse + validate + checksum-verify), `src/lib/marking/knowledge-pack/index.ts` (barrel).
- **Acceptance**: `resolvePack` returns the highest **published + verified** version; `pinnedVersion`
  overrides; **miss throws a typed error** (not `null`); loading a pack whose
  `sourcing.containsBoardSecureMaterial === true` is refused; a tampered file (checksum mismatch) is refused.
  Covered by Step 6 tests. `depends_on`: Step 1.

### Step 3 — Author the IELTS Writing Task 2 pack content (own IP only)
- **Files**: `src/marking/knowledge-packs/ielts/writing/academic/task2/v2025.1/{manifest.json, rubric.json,
  band-descriptors.json, conventions.json, prompt-template.md, exemplars/band-5.md … band-8.md}`. Source
  descriptor content by **paraphrasing** from `src/lib/ielts/band-descriptors.ts` (already own-paraphrase IP);
  exemplars are written and expert-marked in-house (§6).
- **Acceptance**: manifest validates against Step 1 types; `criteriaModel: ielts_4criteria`; the four criteria
  are exactly TR/CC/LR/GRA (matching `01-spec` §4 enum); ≥1 exemplar at each of bands 5/6/7/8 with the marker's
  band + rationale; `sourcing.containsBoardSecureMaterial: false` and `exemplarSource: own_expert_marked`;
  `status: draft`, `verified: false` until a human flips it. `depends_on`: Step 1.

### Step 4 — Retrieval helpers (descriptor + nearest-exemplar selection, §1.3)
- **Files**: `src/lib/marking/knowledge-pack/retrieval.ts` (`getDescriptorsForCriteria`,
  `getExemplarsNearBand`), or methods on the loaded `KnowledgePack`.
- **Acceptance**: given a target/estimated band, returns the nearest N exemplars (e.g. band±1) and the
  descriptor text for the requested criteria only — these feed the `{{BAND_DESCRIPTORS}}` / `{{EXEMPLARS}}`
  placeholders in `prompt-template.md` (`01-spec` §2). Unit-tested for boundary cases (band 9, band 0,
  missing band). `depends_on`: Steps 2, 3.

### Step 5 — Wire `pack_version` into provenance persistence
- **Files**: `src/lib/marking/versioning-capture.ts` (record `manifest.fullId` + checksum), the
  `rubric_versions` shape (`prisma/schema.prisma` + a new `supabase/migrations/*.sql` adding
  `pack_full_id` / `pack_checksum` if not foldable into `scheme_version`/`content_hash`).
- **Acceptance**: a marked submission stores `pack_version === manifest.fullId`; `loadPackByFullId(stored)`
  re-resolves the exact immutable pack; capture remains best-effort (never throws), preserving the existing
  Art.12 traceability contract. `depends_on`: Step 2. *(DB column change is additive/back-compatible.)*

### Step 6 — Pack-validity test (the acceptance contract, mirrors mark-schemes-coverage)
- **Files**: new `src/__tests__/knowledge-packs-coverage.test.ts`.
- **Acceptance**: for every pack on disk — manifest parses & matches `specVersion`; `fullId` is unique;
  checksums match file contents; `status: published` ⇒ `verified: true` AND
  `sourcing.containsBoardSecureMaterial === false` AND ≥1 exemplar per band in range; IELTS pack has exactly
  4 TR/CC/LR/GRA criteria; `resolvePack` fail-closed and `loadPackByFullId` round-trip both pass. Runs under
  Vitest (`vitest.config.ts`, jsdom/node as needed). `depends_on`: Steps 1–4.

### Step 7 — Migration shim for the existing GCSE schemes (no behaviour change yet)
- **Files**: `src/lib/marking/mark-schemes/index.ts` (keep `getMarkScheme` working), a thin adapter
  `gcseSchemeToPack()` OR documented deferral.
- **Acceptance**: the 20 GCSE schemes are **untouched and still resolve** via the existing path; this step only
  documents/seeds the migration route to `criteriaModel: gcse_ao_marks` packs and does not break
  `/api/mark` or `/api/marking/run`. Existing `mark-schemes-coverage.test.ts` stays green.
  `depends_on`: Steps 1–2. *(Lowest priority — GCSE works today; IELTS is the MVP.)*

### Step 8 — Sourcing/copyright guardrail doc + publish checklist
- **Files**: `business-docs/architecture/marking-engine/` (a short `SOURCING.md` or a section appended here),
  referenced from the manifest `sourcing` block.
- **Acceptance**: a written, repeatable checklist gating `status: draft → published`: descriptors are
  own-paraphrase or licensed (never verbatim board-secure), exemplars are own expert-marked (never reproduced
  board scripts), `containsBoardSecureMaterial === false` asserted, expert-marker credential recorded. The
  Step 6 test enforces the machine-checkable parts. `depends_on`: Step 1.

---

## 5. Risks

- **Copyright / sourcing is the headline risk.** Reproducing Cambridge/British Council/IDP secure descriptors
  or exemplar scripts is a legal exposure *and* undermines the "packs are our defensible asset" thesis
  (`00-source` §1.2). Mitigation: the `manifest.sourcing` block, the publish gate (Step 8), and the
  machine-checked `containsBoardSecureMaterial === false` invariant (Step 6). Use own-paraphrased descriptors
  (the existing `band-descriptors.ts` is already this) and **own expert-marked exemplars only**.

- **Exemplar quality is the accuracy lever — and is hard to get right.** Bad/unrepresentative exemplars
  *anchor the marker wrong* (`00-source` §1.3). Mitigation: require a credentialed expert marker recorded in
  the manifest; treat exemplars as calibration assets reviewed against the calibration set (`01-spec` §8).

- **File-tree vs DB drift / immutability violations.** Editing a published pack in place silently changes what
  `pack_version` means for historical marks. Mitigation: immutability rule (§2.3), checksums in the manifest,
  checksum re-verification on load (Step 2), and the Step 6 test. Never delete deprecated packs.

- **Resolver fail-closed could break live marking if a pack is missing.** Switching from soft-`null`
  (`getMarkScheme`) to throw could surface as 500s. Mitigation: only the *new* IELTS path is fail-closed
  initially; GCSE keeps its existing resolver (Step 7); add monitoring on resolve failures.

- **Prompt-in-pack vs prompt-in-code split.** Moving the system prompt into `prompt-template.md` is correct
  (board updates become data changes) but the current `prompt-builder.ts` assembles structure in code. If both
  exist transiently, they can diverge. Mitigation: for IELTS, the pack template is authoritative from day one;
  GCSE prompt migration is deferred (Step 7).

- **Manifest schema churn.** Early packs may be authored before the manifest schema stabilises. Mitigation:
  `specVersion` on every manifest + a loader that validates against it, so old packs remain loadable as the
  schema evolves.

- **`criteriaModel` over-generalisation.** Trying to make one pack format perfectly fit IELTS bands, GCSE AO
  marks, and CEFR at once risks a leaky abstraction. Mitigation: discriminated union keyed on `criteriaModel`;
  ship IELTS concretely first, generalise only when the GCSE/EAL packs are actually authored.

- **Duplicate sources of truth during migration.** Three rubric representations exist today
  (`mark-schemes/*.ts`, `src/data/mark-schemes.ts` display data, `src/lib/ielts/band-descriptors.ts`). The pack
  must become canonical without a flag-day rewrite. Mitigation: IELTS pack is greenfield (no live consumer to
  break); GCSE consolidation is a later, low-priority step.
