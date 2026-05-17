# Human / Counsel Action Checklist — EU AI Act (The English Hub)

The short list of acts an AI agent **cannot** perform — they require a human, the founder, legal counsel, an accredited body, or an external party. Everything else (drafting docs 08–16, mapping evidence, defining controls) is done; these are the blockers to a lawful, best-in-class EU AI Act position by **2 Aug 2026**.

System: "The English Hub" — high-risk, Annex III(3)(b). Route: Annex VI internal control.

| # | Action | Who | Why (legal basis) | When | Inputs ready now |
|---|---|---|---|---|---|
| 1 | **Confirm the EU-market trigger** — decide/confirm the system is placed on the market or put into service in the EU (and which Member States) | Founder + counsel | Determines whether Art 16/47/49 obligations bite and the 2 Aug 2026 deadline applies | **Now (W1)** — gates everything | doc 01 scope; doc 16 §A1 |
| 2 | **Legal sign-off on classification & residual-risk acceptance** — confirm Annex III(3)(b), reject any Art 6(3) derogation, and formally accept (in writing) the interim residual risk for any doc 15 gap not closed before launch | Counsel | Art 6, Art 9; a DoC cannot rest on unaccepted high residual risk or on fictitious controls (doc 15) | Before DoC (W7–W8) | doc 15 §0 changelog & §5; doc 16 |
| 3 | **Appoint the EU authorised representative (Art 22)** with a written mandate (mandatory if the provider has no EU establishment) | Founder + counsel | Art 22 — precondition to lawful EU placement and to EU-DB registration | W2–W4 | doc 13 §2; doc 14 §2 |
| 4 | **Obtain written Anthropic DPA + zero-retention / no-training confirmation** for the child-data marking path (`claude-sonnet-4-20250514`, `src/app/api/essay/feedback/route.ts:62-90`) | Counsel | Substantiates claims currently made on public pages but **unconfirmed** (doc 15 C5; `src/config/subprocessors.ts:27-34`); GDPR Art 28 | W1–W4 | doc 15 C5; doc 10 §4 |
| 5 | **Sign and date the EU Declaration of Conformity** (Annex V) | Authorised signatory (company director) | Art 47 — the legal attestation; only a natural person with authority can sign | W8–W9 (after Annex VI assessment recorded) | doc 13 template (pre-filled) |
| 6 | **CE-marking affixation decision** — decide and authorise the digital/electronic CE marking for the software | Counsel + founder; eng implements | Art 48 — required after a valid DoC | W9 | doc 16 §A8 |
| 7 | **Register provider + system in the EU high-risk AI database** | AI compliance owner / EU AR (registrar act) | Art 49 / 71 — public registration before placing on market/service | W9–W10 (after DoC signed) | doc 14 §2 Annex VIII dataset (pre-filled) |
| 8 | **Engage an accredited certification body for ISO/IEC 42001** (and ISO/IEC 27001/27701) | Founder | Voluntary credibility differentiator; external accredited audit cannot be self-performed (doc 16 §B) | Start W1–W3 (long lead; completes after 2 Aug) | doc 16 §B1/B2; existing Cyber Essentials programme |
| 9 | **Appoint an internal AI compliance owner / incident lead** (named natural person) | Founder | Art 17 QMS, Art 26(2) oversight competence, Art 72/73 ownership; named accountable person required throughout docs 11/12/13/14 | **Now (W1)** — unblocks PMM, incidents, Annex VI, registration | docs 11/12 role tables |
| 10 | **Art 4 AI-literacy training** — deliver to relevant staff (and brief Deployers) | AI compliance owner | Art 4 — provider/deployer must ensure sufficient AI literacy | Before go-live | doc 08/09 (training content basis) |
| 11 | **Confirm market-surveillance-authority contacts** for each EU target Member State + the AI Office serious-incident channel | Counsel | Art 70/73 — placeholders in doc 12 §6 must be real before incidents can be reported on time | Before EU placement | doc 12 §6 (placeholder table) |
| 12 | **DPO opinion + decide on prior consultation (UK GDPR Art 36 / lead SA)** on the reconciled DPIA, and formally **withdraw v1.0 DPIA** | DPO + counsel | GDPR Art 35–36; v1.0 asserted non-existent controls and must be formally superseded (doc 15) | Before DoC (W6–W8) | doc 15 (v2.0 drafted, changelog complete) |
| 13 | **Confirm DoC required-language translations** for each target Member State | Counsel | Art 47(2) | At signing | doc 13 §2 note |
| 14 | **Reconcile the public sub-processor / provider disclosure** (sign off the contractual disclosure change) and the RoPA Resend/Postmark/Trustpilot discrepancy | DPO + counsel | GDPR Art 28/13–14; `src/config/subprocessors.ts:18-26` requires founder/DPO/legal sign-off before wiring; doc 10 §4 lists exact fixes | Before 2 Aug 2026 | doc 10 §4; `src/config/subprocessors.ts`; `business-docs/compliance/rfc/ropa-v1.md` |

> Note: items 1, 2, 9 are the **unblockers** — start them on day one. The transparency-defect fix (false "Reviewed by humans", doc 10 §2) and the doc 15 technical-gap closures are **engineering** acts (not on this human-only list) but are hard prerequisites to item 5 — counsel should not sign the DoC (item 5) until they are done or item 2 risk-acceptance explicitly covers them.

*End of human-action checklist.*
