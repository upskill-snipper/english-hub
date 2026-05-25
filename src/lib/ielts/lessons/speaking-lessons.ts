// ─── IELTS Speaking lessons ────────────────────────────────────────────────
// One lesson per Speaking unit (skill: 'speaking'), authored against the four
// Speaking band criteria: Fluency & Coherence, Lexical Resource, Grammatical
// Range & Accuracy, and Pronunciation. Content is original markdown rendered by
// the /ielts/learn UI; each lesson ends with a "Try it" prompt linking to the
// live Speaking practice at /ielts/speaking.
// ────────────────────────────────────────────────────────────────────────────

import type { Lesson } from '@/lib/ielts/curriculum'

export const SPEAKING_LESSONS: Lesson[] = [
  // ── Unit: speak-part1 — Part 1: the interview ────────────────────────────
  {
    id: 'speak-part1-extend',
    skill: 'speaking',
    level: 'foundation',
    unit: 'speak-part1',
    title: 'Part 1: answering like a person, not a form',
    slug: 'part-1-extending-answers',
    summary:
      'Turn one-word replies into natural, two-to-three-sentence answers using the Answer + Reason + Example pattern.',
    estMinutes: 9,
    body: `# Part 1: answering like a person, not a form

Part 1 lasts four to five minutes. The examiner asks easy questions about you — your home, your work or studies, your free time. The trap is treating it like a form to fill in: "Do you like cooking?" → "Yes." That single word gives the examiner nothing to score, and silence follows.

## The method: Answer + Reason + Example (ARE)

Aim for **two to three sentences** per question. No more — Part 1 is a warm-up, not a speech.

1. **Answer** the question directly (don't dodge it).
2. **Reason** — say *why*.
3. **Example** — give a small, concrete detail.

This pattern feeds three band criteria at once: it keeps you talking (Fluency & Coherence), it forces a *reason/example* link word (Coherence), and the concrete detail pulls in real vocabulary (Lexical Resource).

## Worked example

**Q: "Do you enjoy cooking?"**

> **Weak:** "Yes, I like it."

> **Strong:** "I do, actually — though more on weekends than on weekdays. During the week I'm usually too tired after work to do anything ambitious, so I just throw something quick together. But on a Sunday I'll happily spend an hour making a proper curry from scratch."

Why the strong version scores: *Answer* ("I do, actually"), *Reason* ("too tired after work"), *Example* ("a proper curry from scratch"). Notice the natural fillers — "actually", "happily" — and the contrast structure "more on weekends than on weekdays". It sounds like a person talking, not a sentence being recited.

## Common mistakes

- **One-word answers.** "Yes / No / Sometimes" with nothing after. Always add a reason.
- **Memorised speeches.** Examiners spot rehearsed paragraphs instantly and may interrupt you. Keep it short and spontaneous.
- **Repeating the question's words.** "Do you like your hometown?" → "Yes, I like my hometown because my hometown is…" Paraphrase instead: "I'm quite fond of it, to be honest."
- **Over-answering.** A 45-second monologue in Part 1 wastes time and sounds odd. Two or three sentences is the sweet spot.

## A small upgrade: vary your openers

Don't start every answer with "Yes" or "I think". Rotate through natural alternatives:

- "I'd say so, yes…"
- "Not really, no — I find that…"
- "It depends, honestly. If…, then…"

## Try it

Open **[the Speaking practice room](/ielts/speaking)** and answer five Part 1 questions out loud. Record yourself. For each one, check: did I give an Answer, a Reason, *and* an Example? Did I stop at three sentences? Replay it and listen for one-word answers you could expand.`,
  },

  // ── Unit: speak-part2 — Part 2: the cue card ─────────────────────────────
  {
    id: 'speak-part2-cuecard',
    skill: 'speaking',
    level: 'intermediate',
    unit: 'speak-part2',
    title: 'Part 2: plan in 60 seconds, talk for two minutes',
    slug: 'part-2-cue-card-long-turn',
    summary:
      'Use the one-minute prep wisely and keep the long turn flowing with a simple bullet-led structure and a story spine.',
    estMinutes: 13,
    body: `# Part 2: plan in 60 seconds, talk for two minutes

You're handed a card with a topic and four bullet prompts. You get **one minute to prepare** (with paper and a pencil) and must then speak for **one to two minutes** without interruption. Most candidates either dry up after 40 seconds or ramble with no shape. Both lose marks.

## The method: notes, not sentences

In your 60 seconds, **do not write full sentences** — you won't have time to read them. Write **one or two keywords per bullet**, plus a couple of "good words" you want to use. The bullets *are* your structure: cover each one in order, then keep going.

A reliable spine for "Describe a…" cards:

1. **Set the scene** — what / who / when / where (turns the first bullet into context).
2. **Develop the middle bullets** — give detail, an anecdote, sensory description.
3. **Answer the "why/how you felt" bullet** — this is where bands are won; *explain and reflect*, don't just state.
4. **Round off** — a closing thought so you don't stop mid-air.

The last bullet is almost always reflective ("explain why it was important / how you felt"). Spend the most time there — reflection produces the complex grammar and opinion language examiners reward.

## Worked example

**Card: "Describe a place you like to relax. Say where it is, how often you go, what you do there, and why you find it relaxing."**

Notes (what you'd actually scribble):

\`\`\`
- park near flat / by river
- Sun mornings, weekly-ish
- walk, coffee, read, watch dogs
- WHY: no phone, slows me down, "switch off"  ← spend longest here
good words: tranquil, unwind, a breath of fresh air
\`\`\`

Opening 20 seconds, spoken:

> "The place I'd like to talk about is a little riverside park about ten minutes from my flat. I tend to go on Sunday mornings, more or less every week, partly because it's quiet before the crowds arrive…"

See how the bullets become a story spine, and the prepped words ("tranquil", "unwind") drop in naturally rather than being forced.

## Keeping going when you run dry

If you reach the end early, **extend with a contrast or a hypothetical**:

- "That said, it wasn't always like that…"
- "If I had more time, I'd probably go there far more often, because…"

These buy you 20–30 seconds and show range.

## Common mistakes

- **Writing sentences in prep** and then reading them aloud — it sounds flat and robotic.
- **Finishing in 40 seconds.** Use every bullet; reflect hard on the last one.
- **Ignoring a bullet.** The examiner notices. Touch all four.
- **Listing with no detail.** "I do many things there" → instead name them and add colour.

## Try it

Go to **[the Speaking practice room](/ielts/speaking)** and pick a Part 2 cue card. Take exactly **60 seconds** to make keyword notes, then speak for a full **two minutes** — record it. Afterwards, check: did I cover all four bullets, did I reach 1:45+, and did the *why/how* bullet get the most time?`,
  },

  // ── Unit: speak-part3 — Part 3: the discussion ───────────────────────────
  {
    id: 'speak-part3-develop',
    skill: 'speaking',
    level: 'advanced',
    unit: 'speak-part3',
    title: 'Part 3: develop, justify and speculate',
    slug: 'part-3-discussion-developing-ideas',
    summary:
      'Push abstract answers to band 7+ with the Point–Reason–Example–Counterpoint frame and the language of speculation.',
    estMinutes: 14,
    body: `# Part 3: develop, justify and speculate

Part 3 is a four-to-five-minute discussion of the broader, more abstract themes behind your Part 2 topic — society, the future, advantages and drawbacks. This is where the higher bands are decided, because the questions demand *developed*, *justified* opinions, not personal anecdotes.

## The method: PRE-C

Stretch each answer with **Point → Reason → Example → Counterpoint**:

1. **Point** — your direct position.
2. **Reason** — the logic behind it.
3. **Example** — evidence: a trend, a comparison, a "for instance".
4. **Counterpoint** — acknowledge the other side ("that said…", "although…").

The counterpoint is the band-7-to-8 move: it shows you can handle complexity and it naturally produces concessive grammar ("while it's true that…, I'd still argue…").

## Speculation: the language of "maybe"

Part 3 loves future and hypothetical questions ("Will people still read books in fifty years?"). Don't commit to false certainty. Use **hedging and speculation** — it's both more accurate *and* better English:

- "It's quite likely that…"
- "I could imagine a future where…"
- "There's a fair chance that…, although it's hard to say for sure."
- "If that trend continued, you'd probably see…"

These structures (modals, second/third conditionals) are exactly the Grammatical Range the descriptors reward.

## Worked example: weak → strong

**Q: "Do you think technology has made people less social?"**

> **Weak (band 5–6):** "Yes, because people use phones a lot. They don't talk to each other. It's bad."

> **Strong (band 7–8):** "On balance, I'd say it's reshaped how we socialise rather than reduced it outright. The reason I'm cautious about the word *less* is that, for instance, friends now stay in touch across continents in a way that simply wasn't possible before. That said, I do accept there's a downside — you'll often see a whole table in a café glued to their screens, so the *quality* of face-to-face contact may well have suffered, even if the quantity of contact has gone up."

Why it scores: a hedged **Point** ("reshaped… rather than reduced"), a **Reason**, a concrete **Example** ("friends across continents"), and a genuine **Counterpoint** ("That said… a whole table glued to their screens"). Notice the precise lexis — *outright*, *on balance*, *glued to their screens* — and the contrast between *quality* and *quantity*.

## Common mistakes

- **One-sided answers.** Always at least nod to the other view.
- **Sliding back into personal stories.** Part 3 wants the general "people / society", not "my friend Tom".
- **False certainty.** "Definitely yes, 100%" sounds unsophisticated. Hedge.
- **Repeating the same linkers.** Don't start every turn with "I think". Rotate: "I'd argue…", "My sense is…", "Arguably…".

## Try it

Open **[the Speaking practice room](/ielts/speaking)** and answer three Part 3 questions, recording each. For every answer, tick off the PRE-C steps and count your speculation phrases — aim for at least two hedged or conditional structures across the set. Did you offer a counterpoint *every* time?`,
  },

  // ── Unit: speak-fluency — Fluency & coherence ────────────────────────────
  {
    id: 'speak-fluency-flow',
    skill: 'speaking',
    level: 'intermediate',
    unit: 'speak-fluency',
    title: 'Fluency & coherence: keep going, link your ideas',
    slug: 'fluency-and-coherence-keep-talking',
    summary:
      'Beat hesitation with thinking phrases and signposts so you speak at a steady pace without losing the thread.',
    estMinutes: 11,
    body: `# Fluency & coherence: keep going, link your ideas

Fluency & Coherence is one of the four equally weighted Speaking criteria. Examiners are listening for two things: **flow** (you speak at a comfortable speed without long, awkward pauses or constant self-correction) and **coherence** (your ideas connect logically and are easy to follow). Crucially, fluency is *not* speed — speaking fast while stumbling scores worse than speaking steadily.

## The method: buy time without going silent

The enemy of fluency is the silent pause while you hunt for an idea — or the panicked "er… er… er". The fix is a small bank of **natural thinking phrases** that fill that gap *in English* and sound fluent rather than stuck:

- "That's a good question, let me think…"
- "Well, off the top of my head…"
- "It's funny you should ask, because…"
- "I suppose the main thing is…"

Use them sparingly — one to launch an answer, not after every clause. Overused, they become a verbal tic.

## Signposting: making coherence audible

Coherence means the listener never gets lost. **Signpost** the shape of your answer with discourse markers:

- Sequencing: "First off…", "On top of that…", "And finally…"
- Reasons/results: "which is why…", "as a result…"
- Contrast: "having said that…", "on the other hand…"
- Examples: "take… for instance", "a case in point is…"

These do double duty: they organise your ideas *and* fill the micro-pauses that would otherwise sound hesitant.

## Worked example: hesitant → fluent

> **Hesitant:** "I think… er… that travel is… um… good because… you see… new things and… er… it is interesting and… yeah."

> **Fluent:** "Well, off the top of my head, I'd say travel is genuinely valuable — mainly because it pulls you out of your routine and exposes you to different ways of living. Take food, for instance: you can read about a country's cuisine, but actually tasting it on the street is a completely different experience."

The fluent version isn't faster; it's *smoother*. The thinking phrase launches it, "mainly because" links cause to claim, and "Take… for instance" signposts the example. The pauses that remain feel like natural breathing, not breakdowns.

## Common mistakes

- **Repairing too much.** Constantly restarting sentences ("I go — I went — I have gone…") wrecks flow. Pick one and move on; a small grammar slip costs less than a stall.
- **Memorised linkers dumped in.** "Moreover, furthermore, in addition" stacked unnaturally sounds essay-like, not spoken.
- **Speaking too fast to seem fluent.** This causes more errors and pauses, not fewer. Aim for steady.
- **Filler overload.** "Like, you know, basically" every few words drags your score down.

## Try it

Head to **[the Speaking practice room](/ielts/speaking)** and answer any three questions, recording yourself. Play it back and tally your *silent* pauses over two seconds and your "er/um" fillers. Re-answer the same questions, this time launching with a thinking phrase and using at least two signposts each. Your goal: fewer dead pauses, steadier pace — not faster speech.`,
  },

  // ── Unit: speak-pronunciation — Pronunciation ────────────────────────────
  {
    id: 'speak-pronunciation-clarity',
    skill: 'speaking',
    level: 'advanced',
    unit: 'speak-pronunciation',
    title: 'Pronunciation: stress, rhythm and intonation',
    slug: 'pronunciation-stress-rhythm-intonation',
    summary:
      'Score on clarity, not on losing your accent — through word stress, sentence stress, and meaningful intonation.',
    estMinutes: 12,
    body: `# Pronunciation: stress, rhythm and intonation

Pronunciation is the fourth Speaking criterion, and the most misunderstood. You are **not** marked on sounding British or American, and you don't need to erase your accent. You're marked on **clarity and control**: can the examiner understand you effortlessly, and do you use the features of spoken English — stress, rhythm, intonation — to carry meaning? A strong accent with clear stress beats a "neutral" accent that's flat and mumbled.

## Three levers that matter most

### 1. Word stress
Every multi-syllable word has a stressed syllable. Put it in the wrong place and the word can become unintelligible. Compare: **PHO**-to-graph / pho-**TO**-graph-er / pho-to-**GRAPH**-ic — same root, the stress *moves*. Getting it wrong forces the listener to work, which costs marks.

### 2. Sentence stress (rhythm)
English is **stress-timed**: we punch the *content* words (nouns, main verbs, adjectives) and squeeze the *function* words (articles, prepositions, auxiliaries). This rhythm is what makes speech sound natural.

> "I've **NEV**-er **been** to **JA**-pan, but I'd **LOVE** to **GO** one **DAY**."

The capitalised words are stressed; the rest are reduced ("to" becomes a quick "tə"). Stressing *every* word equally is a classic clarity killer — it sounds robotic and hides your meaning.

### 3. Intonation
Your pitch should **move**. Falling intonation signals you've finished a statement; rising intonation signals a question or "I'm not done yet". Flat, monotone delivery is the single biggest pronunciation weakness examiners flag, because it makes you hard to follow *and* sounds disengaged.

## Worked example: flat → clear

> **Flat (monotone, every word equal):** "i think learning a language is difficult but useful"

> **Clear:** "I think learning a **LANG**uage is **DIFF**icult — *(slight pause, pitch rises)* — but **REALL**y **USE**ful."

The strong version chunks the sentence ("learning a language" / "is difficult" / "but really useful"), stresses the content words, and lets the pitch rise on the dash to flag the upcoming contrast. Same words — far easier to understand.

## Common mistakes

- **Trying to fake an accent.** It usually backfires into unclear sounds. Aim for *clear*, not "native".
- **Flat intonation.** Practise letting your voice rise and fall; record and listen for monotony.
- **Mumbling word endings.** Dropped final consonants ("nex" for "next", "wan" for "want") blur meaning — release them.
- **No chunking.** Running everything together with no pauses for thought-groups makes long answers hard to follow.

## A quick drill: the shadowing technique

Pick 30 seconds of a clear English speaker (a podcast, a news clip). Play a sentence, pause, and **echo it exactly** — copying their stress and melody, not just the words. Two minutes a day trains your ear and your mouth together.

## Try it

Open **[the Speaking practice room](/ielts/speaking)** and record a one-minute answer. Play it back twice: first, mark every word where your stress felt wrong or flat; second, listen only for pitch — did your voice actually move, or stay level? Re-record, exaggerating the stress and intonation slightly. Clearer? That's the criterion working in your favour.`,
  },
]
