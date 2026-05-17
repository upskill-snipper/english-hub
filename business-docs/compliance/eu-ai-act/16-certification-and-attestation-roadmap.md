# 16 — Certification & Attestation Roadmap ("How do we get a stamp of approval / be better than anyone?")

**System:** "The English Hub" — high-risk, **Annex III(3)(b)** (Reg (EU) 2024/1689). **Provider:** The English Hub Ltd. **Route:** Annex VI internal control. **Deadline:** 2 August 2026.
**Status:** v0.1 DRAFT — pending legal sign-off.
**Cross-references:** doc 08–15; doc 02 (RMS), doc 04 (technical file), doc 13 (DoC), doc 14 (EU DB), doc 15 (DPIA), `human-action-checklist.md`.

---

## 0. The honest headline answer (read this first)

**There is NO government-issued, per-product "approval stamp" or licence for an Annex III(3)(b) high-risk AI system.** The EU AI Act does **not** create a pre-market approval/authorisation for this class. For this system the conformity route is **Annex VI internal control — provider self-assessment, no notified body, no EU-type certificate** (Art 43; doc 13 §8).

**The legal "stamp" IS the following bundle, produced by the provider:**

> **Technical documentation (Annex IV) → Annex VI internal-control conformity assessment (recorded) → signed Art 47 EU Declaration of Conformity → Art 48 CE marking (affixed digitally, since this is software) → Art 49/71 registration in the public EU high-risk AI database → (if no EU establishment) Art 22 EU authorised representative appointed.**

That bundle, kept current, **is** the attestation a regulator, school buyer or auditor will accept. Anyone claiming they can sell you a government "EU AI Act certificate" for this product is mistaken.

**"Being better than anyone"** is therefore not a stamp — it is: (a) doing the mandatory bundle *genuinely* (real controls, not the fictitious ones in the now-superseded v1 DPIA — see doc 15); plus (b) layering **voluntary, independently-audited credibility certifications** that schools and procurement actually recognise — chiefly **ISO/IEC 42001:2023 (AI Management System)**, **ISO/IEC 27001 + 27701**, alignment with forthcoming **CEN-CENELEC harmonised standards** (which grant a *presumption of conformity*), an **Art 95 code of conduct**, an optional **independent third-party AI audit**, and the **UK Children's-Code / age-appropriate-design** alignment the Provider has already started (`business-docs/compliance/childrens-code/`).

---

## A. The MANDATORY self-declared path (the legal attestation)

| Step | Action | Art / Annex | Internal owner | Human-only act? | Pre-req docs |
|---|---|---|---|---|---|
| A1 | Confirm EU-market trigger (placing on market / putting into service in the EU) and finalise classification (Annex III(3)(b), full high-risk — do **not** claim Art 6(3) derogation) | Art 6, 16 | Founder + counsel | **Yes — counsel** | doc 01 |
| A2 | Build/complete the **technical documentation** | **Annex IV** / Art 11 | AI compliance owner + eng | No | docs 01–07 |
| A3 | Implement the Art 9–15 + Art 17 systems for real (RMS, data governance, logging, transparency, human oversight, accuracy/robustness/cybersecurity, QMS) and **close or formally risk-accept the doc 15 gaps** | Art 9–17 | Eng + AI compliance owner | Partly (risk-acceptance = counsel) | doc 02–07, 15 |
| A4 | **Fix the transparency defect** (false "Reviewed by humans") before any DoC | Art 13, 50 | Eng | No | doc 10 §2 |
| A5 | Perform & **record the Annex VI internal-control conformity assessment** (verify QMS + technical file demonstrate conformity) | **Annex VI** / Art 43 | AI compliance owner (+ counsel review) | Partly — counsel review | A2, A3 |
| A6 | Appoint **EU authorised representative** (mandatory if provider has no EU establishment) with written mandate | Art 22 | Founder + counsel | **Yes — appointment** | A1 |
| A7 | Draw up, **sign and date** the **EU Declaration of Conformity** | Art 47 / **Annex V** | Authorised signatory | **Yes — sign** | doc 13, A5 |
| A8 | **Affix the CE marking** — for software, the **digital/electronic CE marking** (and ensure it is visible/accessible; include AR + (where relevant) EU-DB reference) | Art 48 | Eng + counsel decision | Counsel decision; eng implements | A7 |
| A9 | **Register** provider + system in the **EU high-risk AI database** (public) and instruct public-authority Deployers to register their deployment | Art 49 / 71 / **Annex VIII** | AI compliance owner / AR | Registrar act | doc 14, A7 |
| A10 | Stand up **post-market monitoring** + **serious-incident reporting** and keep DoC/technical file/EU-DB current on any substantial modification | Art 72, 73, 43(4) | AI compliance owner | No (incident reports may need counsel) | doc 11, 12 |

Completion of A1–A9 (with A10 operating) **is** the lawful market-placement attestation. No further "stamp" exists or is required for this Annex III class.

---

## B. VOLUNTARY credibility certifications (how you become "better than anyone")

These are **not legally required** and do **not** replace Section A, but they are what differentiates a best-in-class education AI vendor in school procurement and with regulators.

### B1. ISO/IEC 42001:2023 — Artificial Intelligence Management System (AIMS) — *the flagship*

The recognised, third-party-**certifiable** AI governance standard. How to get certified:

1. **Gap assessment** against ISO/IEC 42001 (scope = the AI marking/feedback/CEFR system). ~2–4 weeks.
2. **Implement the AIMS:** AI policy, roles, AI risk assessment + AI impact assessment, controls (Annex A of 42001), operational controls, performance evaluation, internal audit, management review. Reuse docs 02/04/08–15 as evidence; remediate doc 15 gaps. ~2–4 months (largely overlaps mandatory work).
3. **Select an accredited certification body** (UKAS/IAF-accredited); **Stage 1 audit** (documentation/readiness) then **Stage 2 audit** (implementation effectiveness).
4. **Certification decision** → certificate (typically 3-year cycle with annual surveillance audits).
5. **Total realistic timeline:** ~**3–6 months** from a serious start, gated by audit-body scheduling. **Body engagement + the audits are external/human acts.**

### B2. ISO/IEC 27001 (information security) + ISO/IEC 27701 (privacy information management)

Strongly expected by schools/MATs handling children's data. The Provider already runs a **Cyber Essentials** programme (`business-docs/compliance/cyber-essentials/`) — a sensible stepping stone. 27001 then 27701 (as a GDPR-aligned extension) materially strengthens the data-protection story behind doc 15. Accredited-body audited; similar Stage 1/2 + surveillance model.

### B3. Alignment with CEN-CENELEC harmonised standards (presumption of conformity)

The Commission has tasked **CEN-CENELEC (JTC 21)** with harmonised standards for the AI Act. When published and cited in the *Official Journal*, conformity with them gives a **presumption of conformity** with the corresponding AI Act requirements (Art 40). Action: track JTC 21 / draft standards now, design docs 02–07 to map to them, and cite them in the DoC (doc 13 §7) once available. This is the closest thing to an EU-recognised technical "tick" short of certification — and it is *free* to align to.

### B4. Art 95 voluntary codes of conduct

Adopt/commit to an AI Office / industry **code of conduct** (Art 95) covering, e.g., AI for minors and education. Demonstrates good faith and can pre-empt regulator concerns; low cost, reputationally high.

### B5. Optional independent third-party AI audit / assurance

A reputable independent AI assurance/audit (e.g. algorithmic-bias and accuracy audit of the marking model, especially the EAL fairness question in doc 15 R4) is **not required** but is a powerful, marketable, regulator-friendly signal — and directly retires the highest residual risks. Schedule **after** the eval harness (doc 06) exists so there is something to audit.

### B6. UK Children's-Code / Age-Appropriate Design alignment

Already in progress (`business-docs/compliance/childrens-code/`). Completing it (and the ICO registration prefilled at `childrens-code/05-ico/ico-registration-prefilled.md`) is a strong, education-specific trust signal and dovetails with the FRIA (doc 09) and DPIA (doc 15). For a minors-focused product this is arguably as persuasive to schools as ISO 42001.

**Recommended differentiation stack:** Mandatory Section A (done genuinely) **+ ISO/IEC 42001 + ISO/IEC 27001/27701 + Children's-Code completion + published, audited accuracy & EAL-fairness results + Art 95 code + CEN-CENELEC alignment.** That combination is best-in-class for an education AI marking SaaS — and is honest, because the underlying controls will actually exist (unlike the v1 DPIA).

---

## C. Timeline to 2 August 2026 (Gantt-style) + who must act

> "Today" = 2026-05-17. ~11 weeks to the 2 Aug 2026 deadline. Mandatory bundle is the priority; ISO 42001 certification will likely **complete after** 2 Aug (its audit cycle is longer) — that is acceptable: it is voluntary. **What must be done by 2 Aug is Section A.**

```
Week (from 2026-05-17)         W1  W2  W3  W4  W5  W6  W7  W8  W9  W10 W11   →2 Aug
A1 Confirm EU trigger+class  [C][C]
A4 Fix transparency defect   [E][E]
C5 Anthropic ZDR in writing  [L][L][L][L]
A6 Appoint EU AR (if needed)    [F/L][..]
A2 Technical file Annex IV      [=][=][=][=][=][=][=]
A3 Real controls + close gaps   [=][=][=][=][=][=][=][=][=]
   (eval harness/doc06, bias,
    per-board grades, audit log)
A5 Annex VI assessment record               [A][A][=]
DPIA v2 sign-off (doc15)              [D][=]            [D]
A7 Sign EU DoC (doc13)                            [S][..]
A8 CE marking decision+affix                        [L][E]
A9 EU DB registration (doc14)                          [R][R]
A10 PMM + incident go-live          [=][=][=][=][=][=][=][=][=][=][=]  (ongoing)
----- voluntary, runs past 2 Aug -----
B1 ISO 42001 gap→implement→audit  [..............................]→→ (cert ~+3–6 mo)
B2 ISO 27001/27701               [...............]→→
B6 Children's-Code completion    [=][=][=][=][=]→→
Legend: C=counsel  L=legal/counsel  F=founder  E=engineering  A=AI compliance owner  S=authorised signatory  R=registrar/AR  D=DPO  ==internal work
```

**Critical path:** A2/A3 (technical file + *real* controls and gap closure) → A5 (Annex VI record) → A7 (signed DoC) → A8 (CE) → A9 (EU-DB). Slippage in A3 (eval harness, bias eval, per-board grade fix, audit-log persistence — all doc 15 gaps) is the main risk to hitting 2 Aug; if a gap cannot be closed, counsel must formally risk-accept it before A7 or the affected function must be limited/paused (doc 15 §5).

### Human-only / external acts on the critical path (cannot be automated)

| Act | Who | When |
|---|---|---|
| Confirm EU-market trigger; classification & risk-acceptance sign-off | Counsel + founder | W1 |
| Written Anthropic DPA + ZDR/no-training confirmation | Counsel | W1–W4 |
| Appoint Art 22 EU authorised representative | Founder + counsel | W2–W4 |
| Counsel review of Annex VI assessment | Counsel | W7–W8 |
| **Sign & date the EU DoC** | Authorised signatory (director) | W8–W9 |
| CE-marking affixation decision | Counsel + founder | W9 |
| EU-DB registration submission | AI compliance owner / AR | W9–W10 |
| Engage ISO 42001 / 27001 accredited certification body | Founder | start W1–W3 (long lead) |
| Appoint internal AI compliance owner | Founder | **W1 (unblocks almost everything)** |
| Art 4 AI-literacy training rollout | AI compliance owner | by go-live |

(Full detail in `human-action-checklist.md`.)

---

## D. Bottom line

- **No per-product government approval stamp exists for Annex III(3)(b).** The signed **DoC + CE marking + EU-database registration** (with technical file + Annex VI assessment behind them, and AR if no EU establishment) **IS** the legal attestation. Provider self-declares; provider is solely responsible.
- **"Better than anyone"** = the mandatory bundle done *truthfully* (no fictitious controls — doc 15) **plus** ISO/IEC 42001 + 27001/27701, Children's-Code completion, published audited accuracy/fairness, an Art 95 code, and CEN-CENELEC alignment.
- The single biggest credibility risk is **not** missing a stamp — it is shipping the false "Reviewed by humans" claim and a DoC resting on the superseded v1 DPIA's non-existent controls. Fix transparency (doc 10 §2) and close/risk-accept the doc 15 gaps **before** signing anything.

*End of doc 16.*
