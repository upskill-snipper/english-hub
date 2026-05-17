# 13 — EU Declaration of Conformity (Art 47 + Annex V EU AI Act)

**Regulation:** Regulation (EU) 2024/1689, Article 47 and **Annex V** (content of the EU declaration of conformity). The provider must draw up a written, machine-readable, signed EU declaration of conformity (DoC) for each high-risk AI system, keep it for **10 years** after placing on the market, and provide it to authorities on request.
**System:** "The English Hub" — high-risk, **Annex III(3)(b)**. **Conformity route:** Annex VI internal control (self-assessment; **no notified body**; no EU-type-examination certificate).
**Document status:** v0.1 DRAFT TEMPLATE — **NOT YET A VALID DECLARATION.** It becomes valid only when (i) the technical documentation (doc 04 / Annex IV) is complete, (ii) the Annex VI internal-control assessment is completed and recorded, (iii) outstanding compliance gaps (docs 06/10/15) are closed or the residual risk is formally accepted by counsel, and (iv) it is signed and dated by an authorised person. See `human-action-checklist.md`.
**Cross-references:** doc 01–07, doc 14 (EU DB registration — the DoC is referenced there), doc 16 (CE marking Art 48), doc 15 (DPIA).

---

## 1. Pre-conditions before this DoC may be signed (checklist)

| # | Pre-condition | Evidence / doc | Status |
|---|---|---|---|
| 1 | Technical documentation per Annex IV drawn up | doc 04 | **OUTSTANDING** |
| 2 | Risk-management system per Art 9 in place | doc 02 | **OUTSTANDING** |
| 3 | Data & data-governance per Art 10 documented | doc 03 | **OUTSTANDING** |
| 4 | Record-keeping/logging per Art 12 | doc 05 | **PARTIAL — audit log not persisted (`src/app/api/essay/feedback/route.ts:101-105`)** |
| 5 | Transparency & instructions per Art 13 | doc 08, doc 10 | DRAFTED; **transparency defect must be fixed (doc 10 §2)** |
| 6 | Human oversight per Art 14 | doc 07 | **OUTSTANDING (B2C oversight via Deployer only — doc 08 §5)** |
| 7 | Accuracy/robustness/cybersecurity per Art 15 | doc 06 | **OUTSTANDING — no measured accuracy baseline; single AQA boundary table applied to all boards (`src/lib/marking/grade-predictor.ts:99-109`, `pickGrade` `:183`; provenance tag `:58-65` added but numbers unchanged)** |
| 8 | Quality management system per Art 17 | doc 02/doc 16 | **OUTSTANDING** |
| 9 | Annex VI internal-control conformity assessment performed & recorded | doc 16 §A | **OUTSTANDING** |
| 10 | GDPR DPIA reconciled & accurate | doc 15 | **DRAFTED (doc 15 supersedes v1)** |
| 11 | EU authorised representative appointed (if no EU establishment) | `human-action-checklist.md` | **OUTSTANDING** |
| 12 | Legal sign-off on classification & declaration | `human-action-checklist.md` | **OUTSTANDING — human/counsel only** |

**A DoC signed before items 1–9 are genuinely satisfied would itself be a false declaration. Do not sign on the basis of the now-superseded fictitious controls (see doc 15).**

---

## 2. EU Declaration of Conformity — TEMPLATE (Annex V structure, pre-filled)

> Complete the `[…]` placeholders. One declaration per system; re-issue on substantial modification (Art 43(4)).

---

### EU DECLARATION OF CONFORMITY

**(Issued under Regulation (EU) 2024/1689 — Artificial Intelligence Act, Article 47 and Annex V)**

**1. AI system name and type, and any additional unambiguous reference allowing identification and traceability:**

- System (trade) name: **The English Hub — AI Marking & Feedback**
- Type: High-risk AI system performing automated evaluation of learning outcomes and steering of the learning process (essay marking, predicted GCSE/IGCSE grade, formative feedback, CEFR assessment)
- Unique reference / version: `[product version / release tag]`; build/commit: `[…]`
- Upstream general-purpose AI model integrated: Anthropic Claude `claude-sonnet-4-20250514` (Anthropic PBC)
- Traceability identifier: `[internal system ID / EU DB registration number once issued — see doc 14]`

**2. Name and address of the provider and, where applicable, the authorised representative:**

- Provider: **The English Hub Ltd**, `[registered address — placeholder]`, United Kingdom. Contact: `cj@upskillenergy.com`
- Authorised representative (Art 22, EU): **[NAME, EU ADDRESS — placeholder; mandatory if provider has no EU establishment]**

**3. Statement that the EU declaration of conformity is issued under the sole responsibility of the provider:**

> "This EU declaration of conformity is issued under the sole responsibility of the provider, The English Hub Ltd."

**4. AI system identification allowing traceability (e.g. version, batch):**

- Software version: `[…]`; release date: `[…]`; technical documentation reference: doc 04 `[version]`; conformity-assessment record (Annex VI internal control): doc 16 §A `[ref/date]`.

**5. Statement that the AI system is in conformity with this Regulation and, if applicable, with any other relevant Union law providing for the issuing of the EU declaration of conformity:**

> "The above-described high-risk AI system is in conformity with Regulation (EU) 2024/1689 and, where applicable, with the other Union harmonisation legislation referenced in section 7. The conformity assessment procedure followed is **Annex VI (internal control)**. No notified body was involved (none required for this Annex III system under Art 43)."

**6. Where the AI system involves the processing of personal data, a statement that it complies with Regulations (EU) 2016/679 and (EU) 2018/1725 and Directive (EU) 2016/680, as applicable:**

> "Where the AI system involves the processing of personal data, it is designed and operated to enable compliance with Regulation (EU) 2016/679 (GDPR) [and UK GDPR for UK data subjects]. The applicable data protection impact assessment is recorded at **doc 15** (which supersedes the earlier v1 DPIA). Deployers remain controllers for the use described in doc 08/doc 09 and carry out their own DPIA/FRIA."
>
> *Caveat to resolve before signing:* outstanding data-governance items (audit-log persistence; written confirmation of Anthropic zero-retention/no-training; reconciled sub-processor disclosure — doc 10 §4) must be closed or formally risk-accepted by counsel.

**7. References to any relevant harmonised standards used or any other common specification in relation to which conformity is declared:**

- Harmonised standards under Art 40: **[none yet cited — CEN-CENELEC harmonised standards not yet published/listed in the OJ at date of issue]**. Where draft/published, list here (e.g. forthcoming JTC 21 standards) and note presumption of conformity (Art 40). See doc 16 §B.
- Common specifications under Art 41: **[none / list]**.
- Voluntary standards applied as supporting evidence (no presumption of conformity, credibility only): **[ISO/IEC 42001:2023 — if/when certified; ISO/IEC 27001; ISO/IEC 27701 — see doc 16 §B]**.

**8. Where applicable, name and identification number of the notified body, description of the conformity assessment procedure and identification of the certificate issued:**

> **Not applicable.** This Annex III(3)(b) system follows the **Annex VI internal-control** procedure; no notified body, no certificate (Art 43(2) — notified-body involvement is not required for Annex III systems where the provider applies internal control and harmonised standards/common specifications, or where none exist, internal control).

**9. Place and date of issue, name and function of the person who signed, signature:**

| Field | Value |
|---|---|
| Place of issue | `[city, country — placeholder]` |
| Date of issue | `[YYYY-MM-DD — placeholder]` |
| Name of signatory | `[full name — placeholder]` |
| Function | `[e.g. Director / Founder, The English Hub Ltd — placeholder]` |
| Signature | `[signature — handwritten/qualified e-signature]` |
| On behalf of | The English Hub Ltd |
| (If applicable) countersigned by EU authorised representative | `[name, function, date — placeholder]` |

*Languages:* the DoC must be translated into the language(s) required by the Member State(s) where the system is placed/made available (Art 47(2)). **GAP — owner: Counsel; identify required languages per target market.**

*Retention:* kept for 10 years after the system is placed on the EU market (Art 47(1)); kept at the disposal of national competent authorities; a copy submitted/registered as part of EU-DB registration (doc 14).

---

## 3. Maintenance

Re-issue/ update this DoC on any **substantial modification** (Art 43(4)) — including a change of upstream model id/provider with capability impact (currently `claude-sonnet-4-20250514`), a change to intended purpose, or a change affecting conformity — and update the technical file (doc 04) and the EU-DB entry (doc 14) accordingly.

## 4. Declared gaps blocking a valid signature (no invented controls)

| Gap | Owner | Target |
|---|---|---|
| Technical file / RMS / data-gov / accuracy / human-oversight / QMS docs (01–07) outstanding | Provider + counsel | Before 2 Aug 2026 |
| Annex VI internal-control assessment not yet performed/recorded | Provider/AI compliance owner | Before signing (doc 16 §A) |
| Transparency defect (false "Reviewed by humans") not fixed | Provider eng | Immediate (doc 10 §2) |
| Anthropic ZDR/no-training not confirmed in writing | Counsel | Before signing (`human-action-checklist.md`) |
| EU authorised representative not appointed | Founder/counsel | Before EU placement |
| Signatory/date/place placeholders; required languages unknown | Authorised signatory/counsel | At signing |

*End of doc 13.*
