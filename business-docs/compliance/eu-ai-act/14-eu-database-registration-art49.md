# 14 — EU High-Risk AI Database Registration (Art 49 + Art 71 + Annex VIII EU AI Act)

**Regulation:** Regulation (EU) 2024/1689, Article 49 (registration), Article 71 (the EU database for high-risk AI systems listed in Annex III), Annex VIII Section A (information to be submitted by the provider). Before placing an Annex III high-risk system on the market or putting it into service, the **provider** (and, for Annex III deployments, certain **deployers** that are public authorities) must register it (and themselves) in the EU database. Registration is **free**, made by the provider, and the EU database is **publicly accessible** (except restricted fields).
**System:** "The English Hub" — high-risk, **Annex III(3)(b)**.
**Document status:** v0.1 DRAFT — data pre-filled where known; submission is a **human/registrar act** (see `human-action-checklist.md`). **Do not register until the DoC is signed and the technical file exists** (registration content references both).
**Cross-references:** doc 13 (DoC), doc 04 (technical file), doc 08 (instructions), doc 16 (roadmap), doc 12 (incidents).

> Note on Annex III(3)(b): registration applies to Annex III high-risk systems. (The narrow Art 6(3) "not-significant-risk" self-derogation must itself be documented and registered if claimed — **the Provider does NOT claim it**; this system marks and predicts grades for minors and is treated as full high-risk. This conservative position is the best-in-class choice and is recorded here deliberately.)

---

## 1. Who registers what

| Registrant | What | Reg ref |
|---|---|---|
| **Provider (The English Hub Ltd)** | (a) itself as provider; (b) the high-risk AI system, with Annex VIII Section A data, **before placing on the market / putting into service** | Art 49(1), Art 71 |
| **Deployer that is a public authority / Union body / acting on their behalf** | itself + the fact it deploys the system (selecting it in the database) | Art 49(3)–(4) — **the school does this for its own deployment; the Provider must instruct Deployers of this in doc 08/doc 09** |
| Provider claiming Art 6(3) non-significant-risk | the registration + the assessment | Art 49(2) — **not used here** |

The EU database is set up and managed by the Commission (Art 71); the provider registers via the official EU-database front-end/portal once operational.

---

## 2. Dataset to submit — Annex VIII Section A (pre-filled where known)

| Annex VIII(A) item | Field | Value (pre-filled / placeholder) |
|---|---|---|
| 1 | Provider name, address, contact details | The English Hub Ltd; `[registered address — placeholder]`, United Kingdom; `cj@upskillenergy.com` |
| 2 | Where submission by another person on behalf of the provider — their identity | `[Authorised representative (Art 22) — name, EU address — placeholder; required if no EU establishment]` |
| 3 | Authorised representative identity (where applicable) | `[AR name + EU address — placeholder]` |
| 4 | AI system trade name + unambiguous reference for traceability | "The English Hub — AI Marking & Feedback"; version `[release tag]`; build `[commit]`; integrates Anthropic Claude `claude-sonnet-4-20250514` |
| 5 | Description of the intended purpose | Automated formative marking of GCSE/IGCSE English essays against exam-board AO rubrics; AI-predicted (indicative, non-official) 1–9 grade; strengths/improvements/next-steps feedback; CEFR productive-skill assessment for EAL learners. **Not** an official/summative assessment; not for decisions with legal/significant effect. (See doc 08 §2.) |
| 6 | Components and functions of the AI system | Rubric-grounded prompt builder (`src/lib/marking/prompt-builder.ts`), upstream LLM (Claude `claude-sonnet-4-20250514`), response validation/clamping (`src/lib/marking/feedback-generator.ts`), AQA-derived grade conversion (`src/lib/marking/grade-predictor.ts:99-109`, with a `boundarySource` proxy-provenance tag `:58-65`), essay-feedback API (`src/app/api/essay/feedback/route.ts`), CEFR assessment (`/api/cefr-assess`), teacher-override (`src/app/api/school/marking/override/route.ts`) |
| 7 | Basic, concise description of information used (data) and its operating logic | Input = learner essay text + question + board + scheme id (+ optional studied text/year group); no name/email/DOB/school sent to the model (`src/app/marking/ai-explainer/page.tsx:100-119`). Logic = LLM marks against embedded AO band descriptors; marks clamped to scheme max; grade derived from a 5-year-average AQA 8700/8702 boundary table applied across boards |
| 8 | Status of the AI system | `[on the market / in service — set at registration]`; placed on EU market from `[date]` |
| 9 | Type, number and expiry of certificate issued by a notified body (if any) | **None — Annex VI internal control; no notified body, no certificate** (doc 13 §8) |
| 10 | Scanned copy of that certificate (if any) | **N/A** |
| 11 | Member States in which the system is/has been placed on the market / put into service / made available | `[list of EU target Member States — placeholder]` |
| 12 | Copy of the EU declaration of conformity (Art 47) | Attach **doc 13** once signed/dated (`[file ref]`) |
| 13 | Electronic instructions for use | Attach/link **doc 08** (Art 13 instructions for use) — *omitted only for law-enforcement/migration Annex III(6)(7)(8) systems, which this is not, so it IS required* |
| 14 | URL for additional information (optional) | `https://www.theenglishhub.app/legal/ai-transparency` (after doc 10 fixes are live) |

Restricted/Section-B style data (where the registry separates public vs restricted) is completed as the portal dictates; the Annex VIII(A) provider dataset above is the core public submission. Deployer-public-authority registration uses the deployer dataset in the portal (the school's identity + selection of this system).

---

## 3. Step-by-step registration procedure

1. **Pre-req:** technical file (doc 04) complete; Annex VI internal-control assessment recorded (doc 16 §A); **DoC signed** (doc 13); transparency defect fixed (doc 10 §2); AR appointed if no EU establishment.
2. **Confirm trigger:** EU placement / putting into service is genuinely happening (counsel — see `human-action-checklist.md`). If no EU market, registration is not yet required (but prepare so it is a same-day action).
3. **Obtain access:** create the provider account on the official EU high-risk AI database portal (managed by the Commission, Art 71); identity-verify the provider (and AR).
4. **Enter Annex VIII(A) data** from §2; upload the signed DoC (doc 13) and the electronic instructions for use (doc 08); set status and Member States.
5. **Submit & record** the registration / system ID; store it as the traceability identifier in doc 13 §1 and doc 04.
6. **Instruct Deployers:** in doc 08/doc 09, tell public-authority Deployers they must register their deployment (Art 49(3)–(4)) before putting it into service; provide them the system reference so they can select it.
7. **Keep current (Art 49(5) / Art 72 linkage):** update the entry on substantial modification (model/version change, intended-purpose change), status change, withdrawal, or DoC re-issue. Tie this to PMM (doc 11 M8) and the serious-incident process (doc 12).
8. **Retention/consistency:** keep the registration consistent with the technical file, DoC and PMM throughout the lifetime; deactivate/withdraw the entry if the system is taken off the market.

---

## 4. Roles

| Step | Owner |
|---|---|
| Confirm EU trigger; legal sign-off | Counsel + founder (`human-action-checklist.md`) |
| Appoint AR | Founder/counsel |
| Compile Annex VIII data, attach DoC + IFU | AI compliance owner |
| Portal submission | AI compliance owner / AR (registrar act) |
| Keep entry current | AI compliance owner (triggered by PMM doc 11) |

## 5. Declared gaps (no invented controls)

| Gap | Owner | Target |
|---|---|---|
| DoC not yet signed (blocks registration) | Authorised signatory/counsel | Before registration (doc 13) |
| Technical file (doc 04) incomplete | Provider | Before 2 Aug 2026 |
| EU target Member States / placement date undecided | Founder/counsel | Before registration |
| AR not appointed | Founder/counsel | Before registration |
| Deployer-registration instruction must be added to doc 08/09 (done in those docs as guidance; verify Deployers act) | AI compliance owner | At onboarding |

*End of doc 14.*
