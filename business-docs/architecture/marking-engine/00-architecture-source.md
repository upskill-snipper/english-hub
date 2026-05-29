# The English Hub — AI Marking, Feedback & Analytics Architecture

> **Canonical source spec.** Pasted by the founder 2026-05-24. This is the
> authoritative target architecture for the grounded AI Marking Engine.
> All build work traces back to a section here. Do not edit to weaken a
> requirement — edit only to add detail or record a decision.

A blueprint for turning the site into a genuinely best-in-class, low-hallucination AI assessment and learning engine. This sits alongside the Hermes growth-agent build; where they connect is covered at the end.

---

## 0. The SLM question, settled

Your vision: each exam area (IELTS, Cambridge/AQA/Edexcel exam boards, EAL) gets its own small language model, for the best experience and the fewest hallucinations.

**Keep the goal. Change the mechanism.** Here is the reasoning in full, because it determines the whole architecture.

Hallucination in marking means: inventing a band score, misquoting a descriptor, fabricating an error the student didn't make, claiming correct English is wrong, or scoring the same essay differently on two runs. These are precisely the failure modes that get *worse* with smaller models and with knowledge baked into weights.

- **Smaller models confabulate more.** Capacity correlates with factual reliability and instruction-following. Marking is a hard, multi-criterion, rule-following judgment task — the kind small models are weakest at.
- **Fine-tuning stores a fuzzy approximation, not the rubric.** A fine-tuned model has shifted its distribution toward your examples, but it does not contain the mark scheme as retrievable fact. Off-distribution inputs (and every real student essay is off-distribution) invite confabulation.
- **Rubrics change; weights freeze.** When a board updates descriptors, a fine-tuned model is wrong until retrained. A knowledge pack is a document you edit.
- **N models is an N× maintenance burden** — retraining, eval suites, drift monitoring, per board — unjustifiable for an early-stage team.

**What actually reduces hallucination: grounding.** Put the real rubric, band descriptors, mark scheme, and exemplar-graded responses *in context* at marking time. The model applies and cites the authoritative text rather than recalling it. A strong base model + retrieval + structured validation gives you the specialist-per-board experience *and* the low-hallucination property, at lower cost, with same-day updatability.

**Where a specialized/fine-tuned model genuinely fits:**
- **Later, for cost/latency/format consistency at high volume** — once you have thousands of human-marked submissions, you can fine-tune a smaller model to produce consistent marking *format and style*, while still grounding facts via retrieval. This is an optimization, not a correctness fix.
- **Now, for speaking — acoustic/pronunciation analysis.** Phoneme-level pronunciation scoring, fluency metrics, and accent feedback are real specialized-model territory (Whisper-class ASR + pronunciation models). This is the one place "a dedicated model for this" is the right call from the start.

The rest of this document assumes the grounded architecture.

---

## 1. The Marking Engine

A single service, "the Marking Engine," that any exam area plugs into. The per-board specialization lives in data and configuration, not in separate models.

```
Submission (text or audio)
   │
   ▼
┌──────────────┐   identifies board + task type + level
│   ROUTER     │   (IELTS Writing Task 2, Cambridge B2 First Writing, EAL, ...)
└──────┬───────┘
       ▼
┌──────────────────────────────────────────────────┐
│  KNOWLEDGE PACK (per board, versioned)            │
│  • Official rubric & band/level descriptors       │
│  • Mark scheme / marking guidance                 │
│  • Exemplar responses graded at each band         │
│  • Board-specific conventions & common pitfalls   │
└──────┬─────────────────────────────────────────────┘
       ▼ retrieval pulls the descriptors + exemplars
       │ relevant to THIS submission into context
       ▼
┌──────────────┐   strong base model (Claude), structured
│   MARKER     │   marking prompt, criterion-by-criterion,
│  (grounded)  │   evidence-linked, cites descriptors
└──────┬───────┘
       ▼
┌──────────────┐   schema validation, band-range checks,
│  VALIDATOR   │   all-criteria-present, self-consistency,
│ + CONFIDENCE │   confidence score → human-review routing
└──────┬───────┘
       ▼
┌──────────────┐   turns the structured mark into teaching:
│  FEEDBACK    │   why, better-version rewrites, micro-lesson
│  GENERATOR   │   links, a single concrete next action
└──────┬───────┘
       ▼
   Structured result → student UI + analytics store
```

### 1.1 Router
A lightweight classifier (can be a cheap model call or rules) that tags each submission with board, task type, and target level, then loads the right Knowledge Pack. If confidence is low, it asks the student to confirm rather than guessing — a wrong rubric is worse than a question.

### 1.2 Knowledge Packs (the heart of per-board specialization)
One pack per board/exam, each a versioned bundle containing the official rubric and band/level descriptors, the mark scheme and any marking guidance, a set of exemplar responses graded at each band (anchors), and a list of board-specific conventions and common pitfalls. Version every pack (`ielts_writing_v2025.1`) so you know which ruleset produced any historical mark, and so updating a board is a documented data change, not a model retrain.

A genuine caution on sourcing: official rubrics and especially exemplar scripts are frequently copyrighted by the boards (Cambridge Assessment, the British Council/IDP for IELTS, etc.). Use band descriptors and mark schemes within what their terms permit, and for exemplars prefer your own bank of responses that you have had expert-marked, rather than reproducing the boards' secure materials. This also makes your packs *yours* — a defensible asset.

### 1.3 Retrieval layer
For each submission, pull only the relevant descriptors (the criteria for that task) and the nearest exemplars (e.g., bands around where the essay seems to land) into context. This keeps the prompt focused and the grounding tight. Exemplar anchoring — showing the model what a band 6 vs band 7 response actually looks like for *this* board — is one of the single biggest levers on marking accuracy and consistency.

### 1.4 Marker
The strong base model, given a structured marking prompt that forces it to:
- Mark **criterion by criterion** against the descriptors (for IELTS Writing: Task Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy — each on the 0–9 band scale; for Cambridge: Content, Communicative Achievement, Organisation, Language; adapt per board).
- For each criterion, **cite the specific descriptor** it's matching and **quote the evidence** from the student's text that justifies the band.
- Produce an **overall band** derived transparently from the criteria, not pulled from the air.
- Flag anything it is **uncertain** about rather than papering over it.

Grounding + forced citation + forced evidence is what collapses the hallucination rate: the model can't claim a band without pointing at the descriptor and the text.

### 1.5 Validator + confidence
Before a mark reaches a student, validate it programmatically: bands within range, every required criterion present, overall consistent with the criteria, evidence spans actually exist in the submission. For high-stakes marks, run the marking 2–3 times (self-consistency) and check agreement; wide disagreement → low confidence → route to human review or re-mark with more context. Every mark carries a confidence score. **Uncertain marks get a human, not a confident guess.**

### 1.6 Feedback generator
Covered in §3.

---

## 2. Marking quality — the hard part

Anyone can get a model to output "Band 6.5." The engineering is in making that mark *reliable, consistent, and trusted*.

**Structured output, always.** Marking returns structured data, not prose — per-criterion band, justification, cited descriptor, evidence spans, and a categorized error list. Prose feedback is *generated from* this structure. The structure is what powers analytics, progress tracking, and consistency checks.

A workable result schema:

```json
{
  "submission_id": "…",
  "pack_version": "ielts_writing_v2025.1",
  "task_type": "IELTS_Writing_Task2",
  "criteria": [
    {
      "name": "Coherence and Cohesion",
      "band": 6,
      "descriptor_cited": "arranges information coherently but cohesion within/between sentences may be faulty",
      "evidence": [
        {"span": "para 2, sentences 3–4", "note": "abrupt shift; missing linking device"}
      ],
      "confidence": 0.81
    }
    // … other criteria
  ],
  "overall_band": 6.0,
  "errors": [
    {"type": "grammar.article", "span": "…", "correction": "…", "explanation": "…"},
    {"type": "lexical.collocation", "span": "…", "correction": "…", "explanation": "…"}
  ],
  "overall_confidence": 0.78,
  "needs_human_review": false
}
```

**A consistent error taxonomy.** Define a fixed taxonomy of error types — grammar (subject–verb agreement, articles, tense, prepositions…), lexical (collocation, word choice, register, spelling), discourse (cohesion, paragraphing, coherence), task (relevance, completeness, word count). Every error the marker flags is tagged to this taxonomy. This is what makes errors *aggregatable* into the analytics in §4. Without a fixed taxonomy, every analytics dream downstream is impossible.

**Calibration against humans — the trust foundation.** Maintain a growing **calibration set**: real submissions marked by qualified human examiners. Continuously run the engine against this set and track agreement (exact-band and within-half-band rates, and per-criterion correlation). This does three things: it proves to you (and to users, and to schools) that the AI marks like an examiner; it catches silent drift when you change prompts, packs, or models; and it tells you exactly which criteria the AI is weakest on so you can target improvements. Treat the calibration set as a core asset and grow it over time. This is also genuinely original data you own — see the Hermes/GEO connection at the end.

**Anchor, don't free-float.** The exemplars in the Knowledge Pack are the anchors. A model marking "in a vacuum" drifts; a model shown calibrated band-6 and band-7 exemplars for the exact board marks far more consistently.

---

## 3. Feedback that teaches, not just judges

A score tells a learner *where* they are. Good feedback moves them. The difference is most of the product's value.

For every weakness identified, the feedback should do four things: **explain why** in plain language tied to the criterion; **show a better version** — take one or two of the learner's actual weak sentences and rewrite them, so they see the upgrade concretely; **link a targeted micro-lesson** on that specific skill (cohesive devices, article use, paragraph structure); and **set one concrete next action** ("In your next essay, use a linking device to open each body paragraph"). One clear next step beats ten observations.

Tone matters, and it matters more if any of your learners are younger (EAL students especially may be school-age). Feedback should be encouraging and specific, never harsh, never vague praise. "Your grammar is weak" teaches nothing and demoralizes; "Your ideas are strong and clearly relevant — the main thing holding your band down is article use, and here's exactly how to fix it" builds a learner who comes back.

Generate the feedback *from* the structured mark so it's always consistent with the score the student sees — the feedback and the band can never contradict each other.

---

## 4. Data & Analytics — from scores to a learning system

This is where the product stops being a marker and becomes a tutor. Everything below is powered by the structured marking output and the error taxonomy.

**The learner model (mastery over time).** Per student, track band and per-criterion performance across every submission, plus their error profile from the taxonomy. The headline shift: from "you got Band 6" to "your Grammatical Range has climbed from 5.5 to 6.5 over eight weeks; your persistent weak point is cohesive devices, where you've stalled." That sentence is the product.

**Error analytics.** Aggregate the tagged errors per learner (what do *you* get wrong most?) and per cohort (what does everyone struggle with?). Per-learner drives personalization; per-cohort tells you which content to build and which lessons are failing.

**Adaptive next-best-action.** From the error profile, recommend what the learner does next — the specific lessons, drills, or practice tasks targeting their actual weaknesses, ideally on a spaced-repetition schedule so weak areas resurface until mastered. This is the adaptive loop that makes the product feel alive.

**Predictive readiness scoring.** Model each learner's trajectory toward their target (e.g., IELTS Band 7) and give an honest, evidence-based estimate: "On your current trajectory and practice frequency, you're tracking to your target band in roughly ten weeks." Calibrate this against real outcomes over time and be honest about uncertainty — but few things motivate a learner like a credible, personalized forecast.

**Internal marking-quality analytics (protects everything).** Continuously monitor AI-vs-human agreement on the calibration set, per-criterion reliability, and drift over time. Alert when agreement drops — that's your early warning that a model update, prompt change, or pack edit degraded marking before students feel it.

**Business/content analytics.** Tie content to *mastery gains*, not just engagement. A lesson that's popular but doesn't move bands is a vanity asset; a lesson that reliably lifts a weak criterion is gold. This feeds directly into what Hermes prioritizes.

---

## 5. Data protection (non-negotiable, especially with minors)

You're handling student-written work and building profiles on individuals — personal data under UK GDPR, and quite possibly the data of children. Build this in from the start, not as a retrofit:

- **Minimize.** Collect what you need to mark and to track progress; don't hoard.
- **Lawful basis & consent.** Have a clear basis for processing, and for under-18s, appropriate consent handling (and age-appropriate design — the UK's Children's Code applies).
- **Don't train on student PII** without an explicit, separate basis. Marking via API (where the data isn't used to train the base model) is cleaner than fine-tuning on raw student submissions. If you ever build a fine-tuning corpus, anonymize and get consent.
- **Anonymize for analytics.** Cohort analytics should run on de-identified data.
- **Retention & deletion.** Define how long you keep submissions and honor deletion requests.

This isn't only compliance — "we don't train on your work and we protect your data" is a trust feature you can market, particularly to schools.

---

## 6. Speaking assessment (if/when you add it)

The one place to use specialized models from day one. The pipeline: high-quality ASR (Whisper-class) transcribes the audio; a pronunciation/fluency layer (specialized acoustic models) scores pronunciation at phoneme level, plus fluency metrics — speech rate, pause patterns, filler frequency, hesitation; then the *same grounded Marking Engine* marks the transcript for the content/grammar/lexis criteria against the speaking rubric. So speaking = specialized acoustic models for the sound + your grounded engine for the language. This cleanly honors the part of your instinct that was exactly right.

---

## 7. How this connects to Hermes (the growth agent)

The two systems compound each other:

- **Marking generates original data; GEO turns it into citations.** "Across N learners, those practicing 15 minutes daily improved one CEFR level in a median of X weeks" is a citable, original statistic no competitor has — exactly the kind of claim that earns citations in AI answer engines (the GEO subsystem) and authority in classic SEO. Your marking engine *produces the data that fuels growth*.
- **Content analytics close the loop.** The mastery-gain data from §4 tells Hermes which content actually teaches, so its editorial engine builds more of what works, not what merely gets clicks.
- **Calibration data is a moat you can talk about.** "Our marking agrees with human examiners X% of the time" is a trust claim Hermes can put at the center of content and positioning.

Keep the systems separate in code (assessment ≠ growth) but let the data flow from Marking → analytics → Hermes.

---

## 8. Build sequence (don't build it all at once)

1. **MVP marking engine, one exam area.** Pick your highest-volume area (likely IELTS Writing). Build the router, one Knowledge Pack, grounded marking with structured output and the error taxonomy, and basic feedback. Ground everything; skip fine-tuning entirely.
2. **Calibration.** Stand up the calibration set and AI-vs-human agreement tracking before you scale. This is what makes the marks trustworthy and protects you as you iterate.
3. **Feedback depth.** Add better-version rewrites, micro-lesson linking, and next-action setting.
4. **Learner analytics.** Mastery tracking, error analytics, the progress narrative.
5. **Adaptive + predictive.** Next-best-action and readiness scoring.
6. **Expand to more boards** — each is a new Knowledge Pack plus a calibration set, *not* new infrastructure. This is the payoff of the grounded design: adding Cambridge or EAL is mostly content work.
7. **Speaking** (specialized acoustic models) when ready.
8. **Optional, much later:** fine-tune a smaller model for marking format/consistency at volume — still grounded via retrieval for facts — only if cost or latency justifies it and you have the labeled data. Re-validate against the calibration set obsessively if you do.

---

## 9. Honest caveats

**High-stakes framing and liability.** Be careful how you present AI marks, especially for exam candidates. Frame them as "AI practice feedback to help you improve," clearly distinct from an official board score, with appropriate disclaimers. Over-claiming ("guaranteed Band 7") is both a trust risk and, in some markets, a regulatory one — and Hermes is instructed never to make such claims for exactly this reason.

**Humans stay in the loop where stakes are high.** Confidence scoring and human-review routing aren't optional polish; they're how you avoid a confidently-wrong mark damaging a learner's prep or your reputation. The grounded architecture lowers the error rate; the human gate catches what's left.

**This is a real engineering effort, not a prompt.** The marking prompt is maybe 10% of the work. The Knowledge Packs, the calibration set, the validation layer, the analytics store, and the data-protection scaffolding are the other 90% — and they're what separate a toy from a product schools will pay for. Build it in the sequence above and resist shipping marking-at-scale before calibration exists.

The version of this that is safest — grounded, calibrated, human-gated, privacy-respecting — is also the version that wins, because in assessment, trust *is* the product.
