# Profiling Policy (Children)

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Data Protection Lead
**Last updated:** 2026-04-10

---

## 1. Purpose

This policy implements **Standard 12** of the ICO Age Appropriate Design Code, together with Articles 4(4), 13, 14 and 22 UK GDPR.

The code requires profiling of children to be off by default unless there is a compelling reason otherwise, and that appropriate measures protect children from harmful effects. The policy sets out:

1. What we consider profiling at The English Hub
2. Which profiling features are off by default and which are on by default (with justification)
3. Safeguards against harmful outcomes
4. How children and parents can switch it off

## 2. Definitions

**Profiling** (Article 4(4) UK GDPR): *any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements.*

At The English Hub, this captures:

- **AI essay marking** — automated scoring and feedback based on essay content
- **Adaptive question ordering** — selecting the next practice question based on past performance
- **Personalised content recommendations** — ranking learning content based on performance signals
- **Progress prediction** — estimating likely attainment on the current trajectory

It does **not** capture:
- A simple "questions answered this week" counter (not an evaluation)
- A fixed syllabus ordering
- Human-initiated review of an individual student's essays by their teacher (not automated)

## 3. Status of each profiling feature

### 3.1 AI essay marking — on by default, **justified exception**

- **Default:** on (GAP-12B will add an opt-out switch in settings in Q2 2026)
- **Lawful basis:** performance of contract (core educational service). For under-13s using it via a parent-linked account, also supported by parental consent recorded at signup.
- **Not Article 22:** the AI marker produces a suggestion. A human (the teacher, where there is one) is the final decision-maker for anything that matters. The child is told this in plain language before the first feedback block.
- **Compelling reason to be on by default:** The service exists to give children access to formative feedback on written work. Without automated marking, most children (those without a teacher available) would get no feedback at all, which defeats the core educational purpose of the service.
- **Safeguards:**
  - First-use explainer in child-friendly language
  - Every feedback block is labelled "AI suggestion"
  - An appeal flow for any AI-generated score ("I don't agree — ask my teacher")
  - Zero-retention contract with the AI sub-processor
  - No training of the sub-processor's models on our users' content
  - The AI marker does not attempt to analyse emotion, mental health, sexual orientation, politics, religion, or any special-category dimension
  - Essays that contain safeguarding indicators (self-harm, abuse, neglect) are routed through a human review queue, not served with AI feedback

### 3.2 Adaptive question ordering — on by default, **justified exception**

- **Default:** on
- **Lawful basis:** performance of contract
- **Not Article 22:** it selects the order of content; there is no decision "with legal effect or similarly significant effect" produced.
- **Compelling reason to be on by default:** adaptive practice produces better learning outcomes than fixed syllabus order for most students. Switching it off harms learning.
- **Safeguards:**
  - A one-tap "Switch to syllabus order" option in settings
  - A plain-language first-use explainer
  - Coverage guarantee: no syllabus area is skipped; the algorithm only changes order, not content
  - No "lock-in" — the student can see the full syllabus at any time

### 3.3 Personalised content recommendations — **off by default** (GAP-7A)

- **Default:** off for under-16s (target Q2 2026 — currently on, under active remediation)
- **Lawful basis (if opted in):** consent
- **Not Article 22:** ranked suggestions only; student chooses what to do
- **Safeguards:**
  - Clear explanation before opt-in
  - Can be switched off at any time
  - Does not use essay content for ranking — only practice performance
  - No ranking based on "engagement" metrics (time-on-app, return-rate) — only educational signals

### 3.4 Progress prediction — **off by default**

- **Default:** off
- **Lawful basis (if opted in):** consent
- **Not Article 22:** a prediction is shown to the student and their teacher; nothing happens automatically as a result
- **Safeguards:**
  - Opt-in with clear explanation of its limitations
  - Always framed as "a guess based on your recent practice — not a grade"
  - Cannot be used by teachers as a grade
  - No comparison to other named students

### 3.5 Behavioural profiling for commercial purposes — **prohibited**

- **Default:** not available in the product
- The English Hub does not carry out profiling for ad targeting, pricing, marketing segmentation, or engagement optimisation. This is architecturally enforced and audited.

## 4. Article 22 UK GDPR

Article 22 UK GDPR gives data subjects the right not to be subject to solely automated decisions with legal or similarly significant effects. We have designed every profiling feature so that it does **not** trigger Article 22:

- AI marking is a **suggestion**, not a decision. Teachers are the final arbiter for anything that matters.
- Adaptive ordering changes the order of questions, which has no legal or similarly significant effect.
- Recommendations and progress prediction are opt-in, and produce suggestions only.

If, in future, we introduced a feature that made a solely-automated decision with significant effect on a child, we would:
1. Treat it as a high-risk change and run a new DPIA
2. Consider Article 22 expressly, including the prohibition on using Article 22(2)(c) (explicit consent) for children where possible
3. Evaluate whether it should be avoided entirely rather than implemented

## 5. Child-friendly explanations

Standard 4 and Articles 13–14 UK GDPR require that the existence of profiling be explained in a way the child can understand. Our explanations:

- Live next to the feature (not only in the privacy notice)
- Avoid jargon ("algorithm" is explained, not assumed)
- Describe what data is used and what the output is
- Tell the child what to do if they disagree or want it off

See `04-evidence/child-friendly-notices-examples.md` for the actual wording.

## 6. Off switches

Every profiling feature that is on by default has, or will have, a switch to turn it off. See:

- AI marking: switch planned (GAP-12B) — Q2 2026
- Adaptive ordering: switch exists
- Recommendations: off by default from GAP-7A delivery
- Progress prediction: off by default

## 7. Children and parents exercising rights

Under Article 21 UK GDPR children (or parents on their behalf) can object to profiling. They can do this via:
- The in-app "Your data" menu
- Email to privacy@englishhub.example
- A note to their teacher who can pass it to us

On receiving an objection, we:
1. Stop the profiling in question within 24 hours
2. Write to confirm what we stopped and when
3. Record the objection on the account for future reference

## 8. References

- Articles 4(4), 13, 14, 21, 22 UK GDPR
- ICO Age Appropriate Design Code, Standard 12
- ICO *Automated Decision-Making and Profiling* guidance

## 9. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
