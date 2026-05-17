# 15 — DPIA (Reconciled & Accurate) — AI Features

**Type:** Data Protection Impact Assessment under UK GDPR / EU GDPR Article 35, ICO Children's-Code-aligned, and aligned to the EU AI Act (Reg (EU) 2024/1689) high-risk obligations.
**System:** "The English Hub" AI marking / predicted-grade / feedback / CEFR features. **Classification:** EU AI Act high-risk, **Annex III(3)(b)**.
**Version:** **2.0 (RECONCILED) — supersedes v1.0**.
**Supersedes:** `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md` (v1.0 "FINAL" 2026-05-12). **The v1 file is NOT deleted** (retained for audit trail and change history). v1.0 must be treated as **withdrawn and inaccurate** — it asserted controls that do not exist in the codebase. This document replaces it for all purposes.
**Status:** v0.1 DRAFT of v2.0 — pending DPO + counsel sign-off.
**Owner:** Calum Jardine (Founder), `cj@upskillenergy.com`. **DPO:** [DPO_NAME — placeholder].
**Cross-references:** doc 02 (RMS), doc 08 (instructions), doc 09 (deployer/FRIA), doc 10 (transparency), doc 11 (PMM), doc 12 (incidents), doc 16 (roadmap), **doc 17 (Anthropic DPA/ZDR/no-training pack — closes C5)**; `src/lib/anthropic-client.ts` (`ANTHROPIC_DATA_POLICY`), `src/config/subprocessors.ts` (single-source register); `business-docs/compliance/rfc/ropa-v1.md` (RoPA — see §9 note).

---

## 0. CRITICAL CHANGELOG — what was false in v1.0 and the true current state

> v1.0 §4 ("Mitigations") and §2 asserted multiple controls as in place. Code inspection (read-only) found they **do not exist**. Each is listed with the v1 claim, the verified reality, and remediation. **No control is asserted in this v2.0 that is not evidenced in code; every gap is stated with an owner and target.**

| # | v1.0 claim (location) | Verified reality (path:line) | Status | Remediation owner / target |
|---|---|---|---|---|
| C1 | "Weekly eval suite of 200 gold-standard essays monitors mark-band agreement vs examiner marks; <80% threshold triggers feature pause" (v1 §4 R1, line 47) | **No evaluation harness, gold set, agreement metric, or feature-pause mechanism exists in `src/`.** `/legal/ai-governance` itself says accuracy/failure-mode stats are not published (`src/lib/i18n/dictionary-legal-long.ts:336`) and Sentry does not catch model-quality drift (`:304-305`) | **FALSE — removed** | Provider eng — build eval harness + drift alarm (doc 06/doc 11); before 2 Aug 2026 |
| C2 | "Marking outputs are tone-classified post-hoc; tone-failed responses rewritten before render" (v1 §4 R2, line 49) | **No tone classifier / post-hoc rewrite in `src/`.** Only a prompt-level tone instruction exists (`src/lib/marking/prompt-builder.ts:71-91`) | **FALSE — removed** (prompt instruction retained as the *only* real, weak control) | Provider eng — evaluate a real tone safeguard; target TBD (doc 02) |
| C3 | "feedback intensity slider (gentle/standard/direct)" in parent account (v1 §4 R2, line 49) | No such setting found in code | **UNVERIFIED → treated as absent** | Provider — confirm/build or stop claiming |
| C4 | "Free-text disclosure detector runs pre-submission: keywords + Haiku classifier (suicide, self-harm, abuse…); on hit AI marking paused, routed to a human safeguarding queue, parent/DSL notified" (v1 §4 R3, line 51) | **No disclosure detector, no safeguarding queue, no auto-notification in `src/`.** Marking proceeds and renders directly (`src/app/marking/results/[id]/page.tsx:204`) | **FALSE — removed (high-severity)** | Provider eng — design disclosure-handling; interim: Deployer DSL/policy carries this (doc 08 L6); priority |
| C5 | "Anthropic zero-retention endpoint + no-training contractual term ensure the disclosure does not enter training pipelines" / "Anthropic enterprise contract specifies no-training; zero-data-retention endpoint used for all child-data paths" (v1 §2 line 32, §4 R3/R6 lines 51,57) | **There is no "ZDR endpoint" and none can exist in this SDK** — researched 2026-05-17: `@anthropic-ai/sdk@0.90.0` `ClientOptions` has **no retention/no-training/privacy option** and per-message `Metadata` exposes only `user_id`. No-training/retention is therefore **contractual, not technical**. **What is now in place (eng):** a single shared client `src/lib/anthropic-client.ts` (`getAnthropicClient()`, used by all 6 AI routes) with the contractual posture documented in one citeable block (`ANTHROPIC_DATA_POLICY`) and an honest `isZeroRetentionConfigured()` (hard-coded **false** until the signature exists — code cannot self-certify it); the canonical register `src/config/subprocessors.ts` now records `AI_SUBPROCESSOR` as `dpaStatus: 'unconfirmed'`, `zeroRetention: 'unconfirmed'`. Public pages still assert "not used to train" as settled (`ai-explainer:114-119`; `dictionary-legal-long.ts:872`) — over-claim until signed. | **Engineering done & honest; substance is standard-but-UNSIGNED — confirm in writing or soften copy.** Net residual = a **contractual/counsel act only** | Counsel — obtain counter-signed Anthropic DPA + written no-training/ZDR confirmation per **doc 17** (`human-action-checklist.md` item 4); apply doc 17 §4.1 interim copy now; before DoC |
| C6 | "Quarterly bias eval: matched-pair essays (L1 English vs L1 Arabic) scored; if gap >5% the prompt/few-shot retuned … Gulf-Arabic transfer-error library maintained" (v1 §4 R4, line 53) | **No bias evaluation, matched-pair process, or transfer-error library in `src/`.** Only a prompt-level L2 instruction (`prompt-builder.ts:73`-region wording) | **FALSE — removed** | Provider eng — build bias eval (doc 11 M3); before 2 Aug 2026 |
| C7 | "Watermarking of model-answer output (invisible token-level signature) lets us prove provenance" (v1 §4 R8, line 61) | **No watermarking implementation in `src/`.** Output-length caps exist (`feedback-generator.ts:240`) but no provenance signature | **FALSE — removed** | Provider eng — evaluate provenance/watermarking; target TBD |
| C8 | "Cooling-off banner after 30 minutes of continuous use" (v1 §4 R7, line 59) | No cooling-off/session-duration banner found in code | **FALSE — removed** | Provider eng — build if retained as a control |
| C9 | "Persistent in-product label 'AI tutor' … avatar visually distinct" (v1 §4 R7, line 59) | The actual in-product AI label is the **false** "Made with AI · Reviewed by humans" panel (`src/lib/i18n/dictionary.ts:209`) rendered on results (`src/app/marking/results/[id]/page.tsx:204`); no "AI tutor" labelling/avatar system found | **FALSE + active defect** | Provider eng — replace with accurate copy (doc 10 §2); **immediate** |
| C10 | "No solely-automated decisions with legal/significant effect … teachers/parents see it as practice feedback" + parent "re-mark and the AI mark is hidden" override (v1 §2 line 30, §4 R5 line 55) | B2C marking **is** automated and shown with **no human review** and (currently) **no B2C human-review UI** (`dictionary-legal-long.ts:629`). A **teacher** override exists for B2B only (`src/app/api/school/marking/override/route.ts`; `prisma/schema.prisma:726-729`). No **parent** re-mark/hide feature found | **PARTLY FALSE — corrected** (B2B teacher override is real; B2C parent override is not) | Provider eng — build B2C human-review route (doc 16); meanwhile email-only (doc 10) |
| C11 | DPIA presented as "v1.0 (FINAL)" with founder sign-off 2026-05-12 (v1 lines 3, 83) | A "FINAL" signed DPIA asserting non-existent controls is itself a compliance and accuracy risk | **Withdrawn** — superseded by this v2.0 | DPO/counsel — formally record withdrawal at sign-off |

**Net effect:** the genuine technical controls today are limited to: prompt-level rubric grounding + tone/L2 instruction + injection/off-topic guard (`src/lib/marking/prompt-builder.ts:71-91`), AO-mark clamping (`feedback-generator.ts:169`), output-length caps preventing a smuggled rewritten essay (`feedback-generator.ts:240`), data minimisation to the model (`ai-explainer:100-119`), B2B teacher override (`override/route.ts`), AI opt-out + minor-consent gating (`src/app/api/essay/feedback/route.ts:206-217`), age-gate (`src/app/api/auth/validate-age/route.ts:38-49`), Sentry error monitoring, rate limits. Everything in C1–C8 is **future work**, not a present mitigation.

---

## 1. Scope

AI processing of personal data in: (1) AI essay marking + predicted grade (`src/lib/marking/*`, model `claude-sonnet-4-20250514`); (2) standalone essay feedback (`src/app/api/essay/feedback/route.ts`); (3) CEFR assessment (`/api/cefr-assess`); (4) AI-generated revision/blog content. **Data subjects:** students aged 13–18 (minors), parents/guardians, teachers, school admins. **Controllers:** The English Hub (B2C); the **school is controller** for B2B classroom use (Deployer — doc 09); Anthropic is a **processor/sub-processor**.

## 2. Necessity & proportionality

Necessity is genuine: human-marked formative practice at GCSE B2C price points and sub-minute latency is not feasible without AI; CEFR/feedback features have no human-only equivalent at price. Proportionality controls that **actually exist**: data minimisation to the model (essay text + question + board/year only; no name/email/DOB/school — `src/app/marking/ai-explainer/page.tsx:100-119`); no advertising profiling of children (per Children's Code policies, `business-docs/compliance/childrens-code/02-policies/profiling-policy.md`); minor-consent gate + AI opt-out (`src/app/api/essay/feedback/route.ts:206-217`; `src/lib/ai-preferences.ts`); age-gate at signup (`validate-age/route.ts:38-49` — <13 blocked; 13–15 guardian email **non-blocking**). **Honest caveat:** "no solely-automated decision with significant effect" holds **only if** Deployers honour doc 08/doc 09 oversight; the Provider does not itself place a human in the B2C loop.

## 3. Risks (child-specific, re-rated against reality)

| ID | Risk | Real current controls | Residual (honest) |
|---|---|---|---|
| R1 | Inaccurate AI feedback/grade misdirects a minor's revision; non-AQA grades systematically less accurate | Prompt rubric grounding; AO clamp; **no eval/accuracy baseline (C1)**; single AQA boundary table applied to all boards (`grade-predictor.ts:99-109`, `pickGrade` `:183`; `boundarySource` proxy tag `:58-65` flags but does not correct cross-board figures) | **High** (was understated as Medium in v1) |
| R2 | Harsh/blunt tone harms a minor's confidence | Prompt tone instruction only; **no tone classifier/rewrite (C2)** | **Medium-High** (was Low in v1) |
| R3 | Essay contains safeguarding/personal disclosure processed by US LLM | Data minimisation; **NO disclosure detector / queue / notification (C4)**; ZDR **unconfirmed (C5)** | **High** (was Medium in v1) |
| R4 | Bias against EAL/SEND/dialect writers | Prompt L2 instruction only; **no bias eval (C6)** | **Medium-High** (was Medium in v1) |
| R5 | Parental authority undermined; minor over-relies on AI as "marker" | No parent override / "AI tutor" labelling / cooling-off (C3/C8/C9); B2B teacher override real | **Medium** |
| R6 | Children's essays in third-party training data | Contractual no-training **claimed but unconfirmed (C5)** | **Medium-High until C5 closed** (was Low in v1) |
| R7 | Minor believes AI marker is human (deceptive label) | **Active defect:** false "Reviewed by humans" label (C9) | **High until doc 10 §2 fix** |
| R8 | AI output detectable as AI / provenance disputes | Output-length caps (real); **no watermarking (C7)** | **Medium** |
| R9 | Transfer of children's data to US (Anthropic) & inconsistent sub-processor disclosure | Minimised payload; **ZDR unconfirmed (C5)**; disclosure inconsistent (doc 10 §4) | **Medium-High until C5 + doc 10 §4 closed** |
| R10 | No effective B2C remedy / human review | B2B teacher override only; **no B2C route (C10)**; email-only interim | **Medium** |

## 4. Mitigations — REAL + planned (no fiction)

**Real, in code now:** data minimisation (`ai-explainer:100-119`); minor-consent + AI opt-out enforcement (`essay/feedback/route.ts:206-217`); age-gate (`validate-age/route.ts:38-49`); prompt rubric grounding + tone/L2 instruction + injection/off-topic guard (`prompt-builder.ts:71-91`); AO clamp (`feedback-generator.ts:169`); rewritten-essay prevention via length caps (`feedback-generator.ts:240`); B2B teacher override (`override/route.ts`, `schema.prisma:726-729`); accurate standalone disclaimer for `/api/essay/feedback` (`src/lib/ai-disclaimer.ts:4-7`); **single shared Anthropic client with the contractual data-protection posture documented in one citeable place and honest `isZeroRetentionConfigured()` introspection (`src/lib/anthropic-client.ts`, used by all 6 AI routes)**; **code-verified single-source sub-processor register with structured `dpaStatus`/`zeroRetention`/`dataCategories` and an honest `AI_SUBPROCESSOR` = Anthropic-only (`src/config/subprocessors.ts`)**; Sentry; rate limits. *(The Anthropic no-training/ZDR control itself is **contractual, not code** — the SDK has no such flag; see doc 17.)*

**Planned remediation (gaps — owner/target):**

| Gap | Owner | Target |
|---|---|---|
| Evaluation harness + accuracy baseline + drift alarm (R1) | Provider eng | Before 2 Aug 2026 (doc 06/11) |
| Per-board grade boundary fix (R1) | Provider eng | Before 2 Aug 2026 |
| Replace false "Reviewed by humans" label (R7) | Provider eng | **Immediate** (doc 10 §2) |
| Disclosure-handling design; interim Deployer-DSL reliance (R3) | Provider eng + Deployer policy | Priority (doc 08 L6) |
| Bias evaluation (R4) | Provider eng | Before 2 Aug 2026 |
| Written Anthropic counter-signed DPA + no-training/ZDR confirmation (R6/R9) — **eng done** (posture centralised & documented `src/lib/anthropic-client.ts`; register honest); pure **contractual/counsel** residual | Counsel | **doc 17** / `human-action-checklist.md` item 4; before DoC. Apply doc 17 §4.1 interim copy **now** |
| B2C human-review UI (R10) | Provider eng | doc 16 roadmap |
| Tone safeguard beyond prompt (R2) | Provider eng | TBD (doc 02) |
| Single-source sub-processor disclosure (R9) — **eng done** (`src/config/subprocessors.ts` is the typed single source); residual = DPO/counsel sign-off + render-from-`LIVE_SUBPROCESSORS` refactor | DPO/counsel | Before 2 Aug 2026 (doc 10 §4) |
| Persist audit log (record-keeping) | Provider eng | Before 2 Aug 2026 |

## 5. Residual risk

**Overall residual risk: HIGH pending remediation** (v1's "Medium — proceed" rating was based on fictitious controls and is rejected). Lawful continued processing is contingent on: (a) immediate correction of the deceptive transparency label (R7); (b) Deployer oversight + FRIA for B2B (doc 09); (c) a credible, dated remediation plan for R1/R3/R4/R6 before EU placement; (d) DPO + counsel acceptance of interim residual risk in writing. Absent (a)–(d), high-risk processing of minors' data should be limited/paused for the affected functions.

## 6. Consultation

DPO opinion: **[required — placeholder]**. Where high residual risk cannot be sufficiently mitigated before processing, **prior consultation with the ICO (UK GDPR Art 36) / lead supervisory authority must be considered** — DPO/counsel to determine. Record decision here.

## 7. Sign-off

| Role | Name | Decision | Signature | Date |
|---|---|---|---|---|
| DPO | `[DPO_NAME]` | `[approve / approve-with-conditions / reject]` | `[…]` | `[…]` |
| Founder / controller | Calum Jardine | `[…]` | `[…]` | `[…]` |
| Legal counsel (residual-risk acceptance) | `[…]` | `[…]` | `[…]` | `[…]` |

## 8. Review cadence

Quarterly; and on any material change (model/provider/version, new AI feature, new jurisdiction, any safeguarding/bias/data incident, or closure of any C1–C10 gap — each closure requires re-rating the linked risk). Tied to PMM (doc 11) and serious-incident process (doc 12).

## 9. Note on related records

`business-docs/compliance/rfc/ropa-v1.md` (RoPA v1.0) also asserts some of the same unconfirmed controls (e.g. activity 4 "zero-retention terms", "opaque ID strips account linkage at API boundary") and names **Postmark/Trustpilot** for transactional email. The canonical register `src/config/subprocessors.ts` now records this honestly as an **UNCONFIRMED** provider (neither `resend` nor `postmark` is a package.json dependency) rather than silently asserting one; the Anthropic "zero-retention terms" wording must be reconciled to **contractual-and-unconfirmed** per doc 17 (no ZDR endpoint exists in the SDK). The RoPA must be re-reconciled consistently with this v2.0 DPIA, doc 10 §4 and doc 17. **Owner: DPO; target: before 2 Aug 2026.** The Children's-Code DPIA set (`childrens-code/03-dpias/`) should cross-reference this v2.0 as the authoritative AI-features DPIA.

*End of doc 15.*
