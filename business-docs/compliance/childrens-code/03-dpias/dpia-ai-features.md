# DPIA — AI / ML Features Involving Children's Data

**Reference:** DPIA-2026-CC-03
**Service:** The English Hub
**Scope:** AI-assisted essay marking and any other AI/ML feature that processes child user data
**DPIA version:** 0.9 (draft)
**Owner:** Data Protection Lead
**Date prepared:** 2026-04-10
**Related:** `dpia-processing-children-data.md` (parent DPIA), `02-policies/profiling-policy.md`

---

## Step 1 — Need for DPIA

AI/ML on children's data triggers multiple "likely high risk" criteria in ICO guidance: innovative use of technology, profiling, evaluation, and processing children's data. A focused DPIA is required over and above the parent DPIA.

## Step 2 — Describe the processing

### 2.1 Feature: AI essay marking

**What it does:** When a student submits an essay against a specific task (e.g., "AQA Paper 1, Question 5: descriptive writing, 40 marks"), the system sends the essay content plus task metadata to an LLM sub-processor, which returns:
- A suggested grade against the mark scheme criteria
- Sentence-level or paragraph-level feedback on strengths and areas for improvement
- Specific suggestions tied to the task's mark-scheme descriptors

**What it doesn't do:**
- It does not make a decision that affects the student legally or similarly significantly. The grade shown is labelled a *suggestion*. Teachers on a school account remain the final decision-maker for any grade that goes on a report.
- It does not infer personality, emotions, mental health, sexual orientation, religion, politics, or anything else beyond the specific mark-scheme criteria declared.
- It does not retain the essay outside our own systems (see sub-processor contract).
- It does not train on the student's data.

### 2.2 Data flow

```
Student submits essay
        │
        ▼
Our backend attaches task metadata + mark scheme
        │
        ▼
Prompt constructed (content + schema)
        │
        ▼
Sent over TLS to AI sub-processor
        │
        ▼
LLM inference — no retention, no training
        │
        ▼
Response validated + parsed + stored against the essay record
        │
        ▼
Displayed to student, labelled "AI suggestion"
```

Identifiers attached to the request: an opaque `request_id`. No `user_id`, no email, no name.

Essay content *is* sent (the content itself is the thing being marked). This is the necessary trade-off and is addressed in the minimisation and contractual sections below.

### 2.3 Sub-processor

- **Provider:** AI sub-processor under a signed DPA
- **Data region:** UK / EU
- **Retention:** **zero** — inference prompts and responses are not retained by the provider beyond the duration of the request
- **Training:** our data is **not** used to train the provider's models; this is contractual and the provider publishes a commitment
- **Sub-sub-processors:** disclosed by the provider and subject to onward transfer controls
- **Audit rights:** we have contractual audit rights; an annual review is scheduled

### 2.4 Other AI/ML features
No others are currently active on child accounts. The feature roadmap includes:
- "Ask about my feedback" — a conversational interface for students to ask questions about their AI-generated feedback. Not yet live; will require an update to this DPIA before launch.
- Similar features will each trigger a DPIA extension.

## Step 3 — Consultation
- Data Protection Lead
- Engineering lead
- Teacher advisors have reviewed AI marking output quality informally
- Formal child/parent consultation not yet undertaken (gap tracked)

## Step 4 — Necessity and proportionality

**Why AI marking at all?**
- The core promise of the product is *feedback on writing*. Most GCSE students do not have enough access to a teacher to get meaningful feedback on practice essays.
- Self-assessment with rubrics is useful but not the same as detailed commentary.
- Peer marking has its own privacy and quality issues.
- Automated marking, clearly framed as a suggestion, makes formative feedback universally available.

**Educational effectiveness basis:** the compelling reason referenced in the Standard 12 profiling exception in `02-policies/profiling-policy.md`.

**Lawful basis:**
- Article 6(1)(b) performance of contract (the contract is "give me feedback")
- For under-13s on parent-linked accounts, supported by parental consent
- For 13–17 year olds, the child's own informed understanding is respected; an off switch is provided (GAP-12B)

**Is the processing necessary?** Yes — you cannot mark an essay without the essay.

**Could we use less data?** We have minimised by:
- Not attaching user identifiers to the inference request
- Contracting for zero retention and no training
- Limiting prompt metadata to the mark scheme, not the student's profile
- Not sending the student's full essay history, just the one essay

**Proportionality:** high educational benefit vs. the risk of a well-contained inference operation. On balance, proportionate.

## Step 5 — Risks

| Risk | L | I | Score | Mitigations | Residual |
|---|---|---|---|---|---|
| Essay content retained or trained on by sub-processor | 2 | 5 | 10 | Contractual zero-retention, no-training; annual audit; sub-processor selection criterion | 3 |
| AI marker produces an unfair grade that is taken as final | 3 | 4 | 12 | "Suggestion, not a decision" framing; teacher as final arbiter on school accounts; appeal flow; cannot be used for summative school reports without teacher sign-off | 4 |
| Hallucinated feedback misleads student | 3 | 3 | 9 | Scoped to mark-scheme criteria; output validation; student can flag unclear feedback; teacher review path | 4 |
| Essay contains safeguarding disclosure (self-harm, abuse, neglect) | 3 | 5 | 15 | Pre-AI-routing content classifier: if safeguarding indicators detected, essay is routed to a human review queue instead of AI marking; child sees supportive message + signposting to help; safeguarding escalation path per KCSIE | 6 |
| Essay contains sensitive personal content (family, identity) that the child did not expect to be analysed | 3 | 3 | 9 | Child-friendly explainer before first use; opt-out of AI marking; zero-retention contract; no emotion/identity inference | 4 |
| Bias in AI marker disadvantages certain students (dialect, EAL, SEND) | 3 | 4 | 12 | Diverse evaluation set during vendor selection; output validation on EAL and SEND sub-samples; teacher-as-arbiter catches individual errors; transparency to child about how to appeal | 6 |
| AI used to make Article 22 decisions | 1 | 5 | 5 | Architectural — AI marker output is a suggestion; no downstream process acts on it without a human | 1 |
| Sub-processor outage forces fallback that reveals data to another provider | 1 | 4 | 4 | No automatic multi-provider fallback; students shown a polite "AI marking unavailable — try again or self-mark" message | 1 |

## Step 6 — Measures

Already in place:
- Zero-retention, no-training contract with AI sub-processor
- Human-in-the-loop framing and teacher-as-final-arbiter on school accounts
- No user identifiers in inference request
- Safeguarding classifier routing essays with indicators of harm to human review
- Prohibition on emotion / identity inference
- Profiling policy with explicit exception for AI marking
- Child-friendly first-use explainer (draft; implementation GAP-12A)

Planned:
- AI marking opt-out switch (GAP-12B) — Q2 2026
- First-use explainer UI implementation (GAP-12A) — Q2 2026
- Formal bias evaluation on EAL and SEND sub-samples before each model version change — by end 2026
- Documented appeal flow — Q3 2026
- Annual vendor audit process — by end 2026

## Step 7 — Sign-off

| Item | Outcome |
|---|---|
| Residual high risk after mitigations? | Highest residual is "safeguarding disclosure" at 6 — within our acceptance threshold and with a direct mitigation already in place |
| Article 36 ICO prior consultation? | Not triggered |
| Proceed? | Yes, with GAP-12A and GAP-12B as preconditions for claiming full compliance externally |
| Review trigger | Any model change, vendor change, or new AI feature |

| Role | Decision | Date |
|---|---|---|
| Data Protection Lead | Approve | 2026-04-10 |
| CTO | — | — |
| Founder | — | — |
