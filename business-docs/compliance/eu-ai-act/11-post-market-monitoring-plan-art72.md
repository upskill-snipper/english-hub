# 11 — Post-Market Monitoring Plan (Art 72 EU AI Act)

**Regulation:** Regulation (EU) 2024/1689, Article 72 and Annex IV(8). A post-market monitoring (PMM) system is **mandatory** for a provider of a high-risk AI system, proportionate to the nature and risks of the system.
**System:** "The English Hub" — high-risk, **Annex III(3)(b)**. **Provider:** The English Hub Ltd.
**Document status:** v0.1 DRAFT — pending legal sign-off. Several data sources below are **not yet instrumented**; those are declared as gaps with an owner — no monitoring control is claimed that does not exist.
**Cross-references:** doc 02 (RMS — this PMM feeds the RMS), doc 05 (logging), doc 06 (accuracy), doc 12 (serious-incident reporting — PMM is the detection layer for it), doc 15 (DPIA), doc 16 (roadmap).

> Honest baseline statement: today the codebase has **error monitoring (Sentry)** and **rate limiting** but **no model-quality, accuracy-drift, bias, or complaint-signal instrumentation**. The v1 DPIA's "weekly eval suite … <80% triggers feature pause" and "Sentry … not model-quality drift" — the latter admission is correct (`src/lib/i18n/dictionary-legal-long.ts:304-305`); the eval suite **does not exist** (doc 15). This plan therefore defines (a) the **target** PMM system and (b) the **interim manual** PMM operable before instrumentation lands.

---

## 1. Objective and scope

Systematically collect, document and analyse data on the system's real-world performance throughout its lifetime to: verify continued conformity, detect accuracy drift / bias / malfunction, identify Art 73 serious incidents, and trigger corrective action (Art 20) and RMS updates (doc 02).

Scope = all live AI functions: AI marking + predicted grade (`src/lib/marking/*`), standalone essay feedback (`src/app/api/essay/feedback/route.ts`), CEFR assessment (`POST /api/cefr-assess`, `src/components/eal/CEFRAssessClient.tsx`), AI-generated revision content.

---

## 2. Metrics (what is monitored)

| ID | Metric | Definition | Target / threshold | Status |
|---|---|---|---|---|
| M1 | **Mark-band agreement** | % of sampled essays where AI AO band == human (teacher/examiner) band | Baseline TBD; alert if a measured period drops >5 percentage points vs rolling baseline | **GAP — no eval harness (doc 06); owner: Provider eng** |
| M2 | **Predicted-grade error** | Mean absolute grade-point error AI vs teacher override, by board | Track per board; **expect larger error for non-AQA** (single AQA table — `src/lib/marking/grade-predictor.ts:99-109`, applied unconditionally `:183`; `boundarySource` proxy tag `:58-65` flags but does not fix this) | **GAP — needs override-vs-AI join (data exists: `marking_submissions.ai_grade` vs `teacher_grade`, `prisma/schema.prisma:720,726`)** |
| M3 | **EAL/bias signal** | Mark/grade distribution split by EAL vs non-EAL and by board on matched tasks | No statistically significant adverse gap | **GAP — no bias eval (the v1 DPIA control does not exist, doc 15)** |
| M4 | **Override rate & direction** | % of school submissions a teacher overrides; mean signed delta | Sustained high override rate or systematic upward correction = quality signal | Partially feasible now from `marking_submissions` (status `teacher_reviewed`, `override/route.ts:206`) |
| M5 | **Human-review request rate & reasons** | Volume + reason mix of `HumanReviewRequest` (`prisma/schema.prisma:294-320`; `POST /api/review/route.ts`); reasons enum incl. `inaccurate`,`unfair-score` (`/api/review/route.ts:14`) | Spike or `inaccurate`/`unfair-score` dominance triggers review | Feasible now (B2C route exists; **B2C *entry UI* does not** — doc 10; under-counts until built) |
| M6 | **Invalid/guard-trip rate** | % returning `INVALID_SUBMISSION`/`OFF_TOPIC` (`src/lib/marking/feedback-generator.ts:96-99`) | Sudden change = prompt/model regression | Feasible via logging (doc 05) — **not yet persisted (`essay/feedback/route.ts:101-105` audit log is a TODO stub)** |
| M7 | **Upstream availability/latency** | Anthropic timeout/429 rate (`essay/feedback/route.ts:243-262`) | Track; sustained degradation = robustness issue | Partially via Sentry |
| M8 | **Model/version change events** | Record every change of model id / provider (currently `claude-sonnet-4-20250514`) | Each change → re-baseline M1–M3, RMS + DPIA review | Manual change log |
| M9 | **Complaint & safeguarding signals** | Support emails (`info@upskillenergy.com`), Deployer reports, any essay-disclosure incident (system does **not** auto-detect — doc 08 L6) | Any safeguarding miss = immediate review + doc 12 assessment | Manual intake |
| M10 | **Transparency-defect recurrence** | Audit that no false "Reviewed by humans" claim is live (doc 10 §2) | Zero | Manual release check until automated test exists |

---

## 3. Data sources

- **Database:** `marking_submissions` (AI vs teacher grade/comment/reviewer/timestamps — `prisma/schema.prisma:705-737`), `HumanReviewRequest` (`:294-320`), Supabase `human_review_requests`.
- **Application logs / audit trail:** intended per doc 05; **currently the essay-feedback audit log is a non-persisted TODO** (`src/app/api/essay/feedback/route.ts:101-105`, `:286`) — **GAP — owner: Provider eng; persist to `audit_logs`.**
- **Sentry:** errors, timeouts, upstream failures (no model-quality signal — confirmed limitation).
- **Evaluation harness:** **does not exist** — to be built per doc 06 (gold-set of human-marked essays; periodic scoring for M1–M3).
- **Human channels:** support inbox, Deployer malfunction reports (Art 26(4)/(5)), FRIA-driven Deployer feedback (doc 09).
- **Deployer logs:** Deployers retain oversight/override logs ≥6 months (Art 26(5)) and report anomalies to the Provider.

---

## 4. Accuracy-drift detection

1. Establish a **measured baseline** for M1/M2/M3 per board using the doc 06 harness (**prerequisite gap**).
2. Re-score the gold-set on a fixed cadence (target: monthly) and on every M8 event.
3. **Drift alarm:** measured period worse than rolling baseline by the M1/M2 thresholds, or any adverse M3 gap → (a) RMS review (doc 02), (b) consider Art 20 corrective action / temporary feature suspension, (c) Deployer notification, (d) DPIA/FRIA re-trigger (doc 15 / doc 09).
4. **Non-AQA caveat is a standing finding**, not a drift event — tracked continuously and disclosed (doc 08 L2) until the per-board boundary fix lands.

---

## 5. Complaint & incident signal handling

- M5/M9 are the primary human-rights/error signal. Each `inaccurate`/`unfair-score` cluster and every safeguarding-relevant report is triaged within the doc 12 timeline and assessed against the Art 73 serious-incident definition.
- A confirmed pattern of materially wrong marks affecting minors, or a safeguarding miss attributable to the system, is escalated under doc 12.

---

## 6. Review cadence, roles, governance

| Cadence | Activity | Owner |
|---|---|---|
| Continuous | Sentry alerts; upstream failure watch (M7) | Provider eng on-call |
| Weekly | M4/M5/M6/M9 quick review | **Internal AI compliance owner** (to be appointed — `human-action-checklist.md`) |
| Monthly | M1–M3 re-score (once harness exists); trend pack into RMS (doc 02) | AI compliance owner + eng |
| Per release | M10 transparency-defect check; M8 change log | Eng lead |
| On M8 / material change | Full re-baseline + DPIA/FRIA re-trigger | AI compliance owner + counsel |
| Quarterly | PMM report; conformity re-confirmation vs Annex VI; update technical file (doc 04) | AI compliance owner |
| Annually | Independent review of the PMM system itself | AI compliance owner (+ optional external auditor, doc 16) |

**Linkage to RMS (doc 02):** every PMM finding is logged as an RMS input; the RMS owns the risk re-rating and the decision to suspend/correct/notify. PMM **detects**; RMS **decides**; doc 12 **reports** serious incidents; doc 14/Art 49 keeps the EU-DB entry accurate after material change.

---

## 7. Declared PMM gaps (no invented controls)

| Gap | Owner | Target |
|---|---|---|
| No evaluation harness → M1/M2/M3 not measurable | Provider eng | Before 2 Aug 2026 (doc 06) |
| Audit log not persisted (M6 source) | Provider eng | Before 2 Aug 2026 |
| No bias instrumentation (M3) | Provider eng | Before 2 Aug 2026 |
| No internal AI compliance owner appointed | Provider/founder | Immediate (`human-action-checklist.md`) |
| B2C human-review entry UI absent → M5 under-counts | Provider eng | doc 16 roadmap |

*End of doc 11.*
