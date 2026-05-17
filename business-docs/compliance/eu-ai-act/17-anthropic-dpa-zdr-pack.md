# 17 — Anthropic DPA / Zero-Data-Retention / No-Training Pack (counsel-ready)

**Purpose:** close `human-action-checklist.md` **item 4** and DPIA (doc 15) **C5 / R6 / R9**. This is the single pack a lawyer + the founder need to (a) understand exactly what Anthropic's standard commercial contract already guarantees, (b) see the precise gap vs. our published public claims, (c) send one ready-made request to Anthropic, and (d) make the public copy true *today* vs *pending signature*.
**System:** "The English Hub" — high-risk, Annex III(3)(b). The Anthropic path processes **minors'** essay free-text.
**Document status:** v0.1 DRAFT — pending counsel + DPO sign-off. **Nothing in this doc is legal advice; the operative text is whatever Anthropic counter-signs.**
**Researched:** 2026-05-17 against `@anthropic-ai/sdk@0.90.0` (installed) and Anthropic's public legal pages (URLs below — re-verify at signing; Anthropic revises these).
**Cross-references:** `src/lib/anthropic-client.ts` (`ANTHROPIC_DATA_POLICY`), `src/config/subprocessors.ts` (`AI_SUBPROCESSOR`, `SUBPROCESSORS_NEEDING_CONFIRMATION`), doc 10 §4, doc 15 §0 C5 / §3 R6,R9, `human-action-checklist.md` item 4.

---

## 0. The one-paragraph summary for the founder

We call **only Anthropic** (Claude `claude-sonnet-4-20250514`) for all AI marking/feedback/CEFR/notes — there is **no OpenAI** in the code despite one public page saying so. Anthropic's **standard commercial terms already say they do not train on API inputs/outputs**, and zero-/limited-retention is **available** — but this is a **contractual** guarantee, **not something our code can switch on**: the SDK has no retention/no-training/privacy flag at all (verified). So the engineering side is done and honest (we minimise data, we use the standard commercial API, we document the posture in one place). The **only remaining act is a human one**: counsel obtains a **counter-signed DPA** and a short **written confirmation** that the no-training + zero-/limited-retention terms cover our **child-data** path, then we flip three flags and tighten two sentences of public copy. Until that signature exists, two public sentences slightly **over-claim** and must be softened to the "pending" wording in §4.

---

## 1. What Anthropic's standard Commercial Terms / DPA already guarantee (plain English + citations)

> Summarised faithfully from Anthropic's public legal pages **as of 2026-05-17**. **Re-verify each URL at signing** — Anthropic updates these and the operative wording is the counter-signed agreement, not this summary. Mirrored in code at `src/lib/anthropic-client.ts` → `ANTHROPIC_DATA_POLICY`.

| # | Guarantee (plain English) | Source (verify at signing) |
|---|---|---|
| G1 | **No model training on customer content.** Anthropic's Commercial Terms of Service state Anthropic will **not train its models on Inputs or Outputs** of the paid/commercial Services. This is the default for commercial API use — it is **not** an endpoint you select. | Anthropic Commercial Terms of Service — https://www.anthropic.com/legal/commercial-terms |
| G2 | **Acceptable-use governs content, not training.** The Usage Policy constrains *what* may be sent, separate from the training position. | Anthropic Usage Policy — https://www.anthropic.com/legal/aup |
| G3 | **Processor terms + sub-processors + international transfer.** Anthropic offers a **Data Processing Addendum** (Anthropic acts as processor of customer content; sub-processor list; **Standard Contractual Clauses** for the US transfer) — this is the GDPR Art 28 instrument for our EU/UK personal data going to the US. | Anthropic DPA, referenced from / incorporated into the Commercial Terms — https://www.anthropic.com/legal/commercial-terms ; Trust Center — https://trust.anthropic.com |
| G4 | **Limited default retention; Zero Data Retention available.** For commercial API traffic Anthropic applies a **limited default retention** for non-flagged traffic, and **Zero Data Retention (ZDR)** is **available contractually on request** (typically for eligible enterprise accounts / specific use cases). ZDR is a **contractual arrangement**, not a header or SDK option. | Anthropic Privacy Center — https://privacy.anthropic.com ; Trust Center — https://trust.anthropic.com |

**Net:** the substance our public pages assert (**"not used to train", minimal/zero retention**) is **broadly true under the standard commercial contract** — the deficiency is **evidentiary and contractual** (no counter-signed DPA / written confirmation in hand, and ZDR is not automatic), **not technical**.

### 1a. What is technically enforceable in our code vs. governed only by the contract (be precise)

| Control | Enforceable in CODE? | Where / how |
|---|---|---|
| Data **minimisation** to the model (no name/email/DOB/school; only essay + question + board/year) | **YES** | Prompt builders (e.g. `src/lib/marking/prompt-builder.ts`); summarised in `ANTHROPIC_DATA_POLICY.enforcedInCode` |
| Not enrolling calls in any optional training/feedback programme | **YES** (by omission) | Only the standard commercial Messages API is called; **the SDK exposes no training/feedback opt-in flag to set or unset** |
| Centralised client + documented timeout + bounded retries | **YES** | `src/lib/anthropic-client.ts` `getAnthropicClient()` (single factory, all 6 routes) |
| Audit log does not itself build a children-text corpus | **YES** | `src/lib/ai-audit-log.ts` stores SHA-256 hash + length by default |
| **No-training** of model on our inputs/outputs | **NO — contractual only** | Commercial Terms (G1). **No SDK/request flag exists** (`@anthropic-ai/sdk@0.90.0` `ClientOptions` has no retention/no-training/privacy option; per-message `Metadata` exposes only `user_id`). |
| **Zero / limited data retention** | **NO — contractual only** | Anthropic-side configuration per the agreement (G4). Not selectable from this SDK. |
| US-transfer safeguard (SCCs) | **NO — contractual only** | Anthropic DPA (G3) |

> **Honesty note (do not regress):** earlier drafts/pages implied a "zero-retention **endpoint**" was configured for child-data paths. **No such endpoint or configuration exists or is selectable in this SDK.** Do not reintroduce that claim. `src/lib/anthropic-client.ts` deliberately models the posture as **contractual flags hard-coded `false`** until the signature exists; code must not flip them.

---

## 2. The exact gap between the above and what our public pages claim today

| Ref | Public claim today | Code/contract reality | Gap class |
|---|---|---|---|
| `dictionary-legal-long.ts` ~L871–873 `legal_long.privacy.s4.anthropic_p` | "Our **data processing agreement with Anthropic prohibits** the use of your submissions to train their models." | A DPA on Anthropic's standard terms **would** say this (G1), but **no counter-signed DPA is in hand** and it is not evidenced. Stated as present fact. | **Over-claim — softening required until signed (see §4)** |
| `dictionary-legal-long.ts` ~L567–569 `legal_long.ai_gov.s9.li_n3` | "Permit model providers to retain prompts for training (we use **no-retention endpoints where contractually available**)" | True only as "**contractually available**"; we do **not** technically use a no-retention *endpoint* (none exists in the SDK) and ZDR is not yet contracted. The "endpoints" framing implies a technical control we don't have. | **Misleading framing — reword (see §4)** |
| `dictionary-legal-long.ts` ~L538 `legal_long.ai_gov.s9.p1` | "third-party large language models (currently **OpenAI and Anthropic** APIs…)" | **Code calls Anthropic only.** No OpenAI SDK / `api.openai.com` / GPT model string anywhere in `src/` (only incidental comments). | **Factually wrong — correct to Anthropic-only (doc 10 §4 #1)** |
| `src/app/marking/ai-explainer/page.tsx` (~L100–119) | essay text only is sent; not used to train | The minimisation half is **code-true**; the "not used to train" half is **contractual** and currently **unconfirmed in writing**. | **Half code-true / half pending — qualify per §4** |
| `src/config/subprocessors.ts` `AI_SUBPROCESSOR` | `dpaStatus: 'unconfirmed'`, `zeroRetention: 'unconfirmed'` | This is the **honest** state and is now the single source of truth. | **No gap — register is correct; public copy must match it** |

The public pages thus currently assert as **settled** what is in truth **standard-but-unsigned**. This is the precise, narrow thing item 4 closes.

---

## 3. Ready-to-send request to Anthropic (counsel may send near-verbatim)

> Send via the Anthropic account / sales / privacy contact (https://privacy.anthropic.com, https://trust.anthropic.com, or the account team). Fill the `[bracketed]` fields.

**Subject:** DPA counter-signature + written no-training & data-retention confirmation — commercial API account `[ACCOUNT/ORG ID]` (processing UK/EU **children's** personal data)

Dear Anthropic,

We operate "The English Hub", an online GCSE/IGCSE English revision service. We use the Anthropic commercial **Messages API** (model `claude-sonnet-4-20250514`) to give students AI essay marking and feedback. **A material portion of our end users are children (ages 13–18) in the UK/EU**, and the text we send is their schoolwork. We are completing UK GDPR Art 28 / EU AI Act high-risk diligence and need the following **in writing**:

1. **Counter-signed Data Processing Addendum.** Please provide your current DPA for counter-signature (or confirm the executed DPA already covering account `[ACCOUNT/ORG ID]`), with Anthropic as **processor** of customer content, the **sub-processor list**, and the **international-transfer mechanism (Standard Contractual Clauses)** for transfer of UK/EU personal data to the US. Entity to be named: `[LEGAL ENTITY, ADDRESS]`.
2. **No-training confirmation.** Written confirmation, **referencing the specific clause of your Commercial Terms of Service**, that **Inputs and Outputs from our commercial API use are not and will not be used to train or fine-tune Anthropic models**, including that this requires **no action or flag** on our part and is the default for our account.
3. **Data-retention position / Zero Data Retention.** (a) The **default retention period** applied to commercial API request/response content for our account, and the deletion process. (b) Whether our account is **eligible for Zero Data Retention (ZDR)**; if so, the **exact steps, scope and any account/endpoint configuration** to enable it; if not, the documented reason and the minimum retention you can offer. We want ZDR (or the lowest available retention) applied to **all traffic on this account**, since it carries children's data.
4. **Children's data acknowledgement.** Written acknowledgement that you are aware this account transmits **children's personal data** and that items 1–3 (no-training, retention/ZDR, SCC transfer, sub-processor controls) **apply to that data**, with any child-data-specific terms or restrictions you require.
5. **Sub-processors & breach.** Current sub-processor list for the API, the change-notification mechanism, and your personal-data-breach **notification commitment and timeframe** under the DPA.
6. **Documentation for our records.** Links to / copies of: Commercial Terms (versioned), DPA, Usage Policy, Trust Center / security & privacy attestations (e.g. SOC 2, ISO 27001), and any **DPIA-support / Art 28(3)(h)** materials.

Please return the executed DPA and a signed letter (or account-portal confirmation) addressing items 2–5. Contact: `[NAME, ROLE, EMAIL]`.

Regards, `[SIGNATORY]`

---

## 4. Precise public-copy changes — true *today* vs *pending signature*

> These tell legal **exactly** what to paste. **This pack does NOT edit the i18n dictionary** (out of scope). doc 10 §4 holds the canonical wording table; the **two Anthropic-specific** corrections below extend it. Keys: `src/lib/i18n/dictionary-legal-long.ts`.

### 4.1 BEFORE the DPA is counter-signed (use now — removes the over-claim)

- **Key `legal_long.privacy.s4.anthropic_p`** (~L871–873). Replace:
  > *"Anthropic, PBC provides the Claude AI model used to generate feedback on student essay submissions. **Under Anthropic's commercial terms, API inputs and outputs are not used to train their models. We are finalising a counter-signed data processing agreement and zero/limited data-retention confirmation covering this processing; we send only the essay text, question and exam board — never a student's name, email, date of birth or school.**"*
- **Key `legal_long.ai_gov.s9.li_n3`** (~L567–569). Replace the "no-retention endpoints" wording with:
  > *"Permit model providers to use prompts to train their models — **Anthropic's commercial terms exclude API inputs and outputs from model training. We are obtaining written confirmation of no-training and zero/limited data retention for this processing; retention is governed by our contract with Anthropic, not a setting in our software.**"*
- **Key `legal_long.ai_gov.s9.p1`** (~L538). Correct provider list to **Anthropic only** (doc 10 §4 #1):
  > *"We use a third-party large language model (currently the Anthropic Claude API, subject to change) to generate:"*
- **`src/app/marking/ai-explainer/page.tsx`** (~L100–119): keep the data-minimisation sentence (code-true); change any unqualified "not used to train" to *"Under Anthropic's commercial terms, your essay is not used to train AI models; we are confirming this in writing as part of our contract with Anthropic."*

### 4.2 AFTER the DPA is counter-signed + written no-training/ZDR confirmation received

Flip, in `src/lib/anthropic-client.ts` `ANTHROPIC_DATA_POLICY`: `dpaCountersigned: true`, `writtenNoTrainingConfirmation: true`, and `writtenZdrConfirmation: true` **only if ZDR (or accepted limited retention) is actually contracted** (`isZeroRetentionConfigured()` then returns true). In `src/config/subprocessors.ts` set `AI_SUBPROCESSOR` `dpaStatus: 'signed'` and `zeroRetention: 'contractual'`. Then publish:
- **`legal_long.privacy.s4.anthropic_p`**: *"Anthropic, PBC provides the Claude AI model used to generate feedback on student essay submissions. **Our counter-signed data processing agreement with Anthropic, and Anthropic's commercial terms, prohibit the use of your submissions to train their models, and apply [zero data retention / a limited retention period of [X]] to this processing. We send only the essay text, question and exam board — never a student's name, email, date of birth or school.**"*
- **`legal_long.ai_gov.s9.li_n3`**: *"Permit model providers to retain prompts for training — **our contract with Anthropic excludes API inputs and outputs from training and applies [zero/limited] data retention.**"*

> **Rule:** never publish §4.2 wording until the signature/confirmation physically exists. Shipping §4.2 early **recreates the exact false-assurance defect** doc 10 and doc 15 exist to fix.

---

## 5. Checklist — mapping to `human-action-checklist.md` item 4

Item 4 = *"Obtain written Anthropic DPA + zero-retention / no-training confirmation for the child-data marking path."* Closed when **all** of:

| ✅ | Step | Owner | Evidence to file |
|---|---|---|---|
| ☐ | Send §3 request to Anthropic | Counsel | Sent email + ticket id |
| ☐ | Counter-signed **DPA** received (processor terms, sub-processors, **SCCs**) | Counsel | Executed DPA PDF (entity `[…]`) |
| ☐ | **Written no-training** confirmation, citing the Commercial Terms clause | Counsel | Signed letter / portal record |
| ☐ | **Retention/ZDR** answer: ZDR enabled, **or** documented limited-retention default explicitly accepted in writing for child data | Counsel + DPO | ZDR confirmation **or** written risk acceptance |
| ☐ | **Children's-data** acknowledgement (DPA/terms cover minors' data) | Counsel | Anthropic written acknowledgement |
| ☐ | Apply §4.1 copy now (do not wait) | DPO + eng (i18n owner — outside this pack) | Diff of `dictionary-legal-long.ts` |
| ☐ | On signature: flip flags (§4.2) in `anthropic-client.ts` + `subprocessors.ts`; publish §4.2 copy | Eng + DPO | `isZeroRetentionConfigured()===true`; `AI_SUBPROCESSOR.dpaStatus==='signed'` |
| ☐ | Update doc 15 C5/R6/R9 to "closed (dated)"; re-rate per doc 15 §8 | DPO + counsel | Updated doc 15 + sign-off row |
| ☐ | Mark checklist item 4 done; note in doc 13 DoC dependency | Counsel | Checklist + DoC pre-condition log |

**Residual after this pack:** purely the **human/contractual** acts above (counsel obtains signature; DPO/counsel accept any interim limited-retention risk in writing). **No further engineering is required or possible** to enforce no-training/ZDR — it is not a code capability in `@anthropic-ai/sdk@0.90.0`. Engineering's part (single documented client, data minimisation, honest register, flag plumbing) is **complete**.

*End of doc 17.*
