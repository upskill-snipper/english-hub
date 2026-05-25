// ─── IELTS Listening — strategy lessons ────────────────────────────────────
// One lesson per Listening unit (skill: 'listening') defined in
// src/lib/ielts/curriculum.ts. Each `body` is original Markdown teaching:
// the method, a worked example with a short transcript snippet, common traps,
// and a "Try it" prompt. Levels follow the foundation → mastery ladder, rising
// with the difficulty of the question type. Cross-references /ielts/listening.
// ────────────────────────────────────────────────────────────────────────────

import type { Lesson } from '@/lib/ielts/curriculum'

export const LISTENING_LESSONS: Lesson[] = [
  // ── Unit: listen-form-note — Form, note & table completion ────────────────
  {
    id: 'listen-form-note',
    skill: 'listening',
    level: 'foundation',
    unit: 'listen-form-note',
    title: 'Form, note & table completion: predict, then catch the detail',
    slug: 'form-note-table-completion',
    summary:
      'The most common Section 1 task. Learn to predict each gap, listen for the exact word, and spell it without losing a mark.',
    estMinutes: 12,
    body: `# Form, note & table completion

This is usually the **first thing you hear** in the test — a Section 1 conversation about everyday life (booking a room, joining a club, reporting a lost bag). You complete a form, a set of notes, or a table. The audio plays **once only**, so a plan matters more than raw listening: you win these marks in the seconds *before* the recording starts, by knowing exactly what each gap needs.

## The method

1. **Read the instruction and obey the word limit.** "NO MORE THAN TWO WORDS AND/OR A NUMBER" means three words is automatically wrong, even if the meaning is right. Write the limit at the top of the page.
2. **Predict every gap before the audio starts.** Look at the words around the gap and ask: *what kind of answer is this?* A name? A number? A day? A material? Write a tiny label next to each gap, e.g. *£ , surname?, time?*.
3. **Listen for the signpost, then the answer.** The words around the gap on your page are usually **paraphrased** in the audio. Track the meaning, not the exact words, until you reach the gap — then capture the precise word the speaker says.
4. **Spell it.** Names, streets and emails are almost always **spelled out** for you. Write the letters as you hear them; don't guess afterwards.

## The spelling & numbers you must own

Section 1 is built on details that are dictated to you. Be fluent in:

- **The alphabet under pressure**, especially the easily confused pairs: *A/E/I*, *G/J*, *B/P/V*, *M/N*, *S/F/X*.
- **"Double" and "triple"** — "double four" means *44*; "treble two" means *222*.
- **Number shapes** — *thirteen* vs *thirty*, *fourteen* vs *forty*. The stress moves: thir-**TEEN** vs **THIR**-ty. Listen for the stress and the final consonant.
- **Dates and currencies** — "the third of May" → 3 May; "fifteen pounds fifty" → £15.50.

## Signpost language you will hear

Track these lead-ins; the answer usually lands just after one of them:

> "Could I take your…?" · "And what's the…?" · "Let me just write that down…" · "So that's…, is it?" · "Actually, it's…" (a correction is coming).

## Worked example 1 — spelling, printed words, and a correction

> **Form on the page:** Name: Sarah _______ (1)  ·  Address: 14 _______ (2) Road  ·  Membership: _______ (3) per month
>
> **Transcript:**
> – "Can I take your full name?"
> – "Sarah Whitlock — that's W-H-I-T-L-O-C-K."
> – "And your address?"
> – "It's 14 Maple Road, near the station."
> – "Lovely. Membership is fifteen pounds a month, or twelve if you're a student."

Answers: **(1) Whitlock** — copy the spelled letters exactly; **(2) Maple** — "Road" is already printed, so don't repeat it; **(3) £15 / fifteen pounds** — but watch the next clause: if the form says *student rate*, the corrected answer is **£12**.

## Worked example 2 — a table and a tricky number

**Table on the page:**

| Room | Capacity | Day available |
| --- | --- | --- |
| Hall | _____ (1) people | _____ (2) |

> **Transcript:**
> – "How many does the main hall hold?"
> – "It seats about… let me check… two hundred and fifteen. And it's free on Thursdays, though not the last one of the month."

- **Gap 1:** predict a *number of people*. The speaker hesitates ("let me check") before the real figure — wait for it. Answer: **215**.
- **Gap 2:** predict a *day*. Answer: **Thursday(s)**. The clause "not the last one of the month" is extra detail, not a different day — don't let it rattle you.

Notice the question on the page ("How many does the hall hold?") is paraphrased as "seats about", and the answer arrives only after a filler.

## Common mistakes

- **The correction.** A first value is often replaced ("…or twelve if you're a student"). Always listen to the **end** of the sentence before committing.
- **Plurals.** If you hear "two return *tickets*", write the plural. A missing **-s** loses the mark.
- **Repeating printed words.** If "Road", "per month" or "£" is already on the page, don't write it again — you may break the word limit.
- **Grabbing the first number.** Phone and reference numbers are often said, paused, then repeated or corrected. Wait for the full string.
- **Teen/ten confusion.** *Fifteen* and *fifty* decide a mark; lock onto the stressed syllable and the final sound.

## Try it

Open a Section 1 task on the [Listening practice page](/ielts/listening). Before pressing play, write a one-word prediction beside each gap (number / name / day / thing). After listening once, check: did the word limit, plurals and spelling all hold up? Re-spell any name you wrote from memory.`,
  },

  // ── Unit: listen-mcq — Multiple choice ────────────────────────────────────
  {
    id: 'listen-mcq',
    skill: 'listening',
    level: 'intermediate',
    unit: 'listen-mcq',
    title: 'Multiple choice: follow the talk and dodge the trap options',
    slug: 'multiple-choice',
    summary:
      'Three options, one chance to hear them. Learn to read ahead, hold the question in mind, and reject the words that are mentioned only to mislead you.',
    estMinutes: 12,
    body: `# Multiple choice

Listening multiple choice looks like Reading multiple choice, but it is harder in one way: you **cannot re-read**. The answer goes past in seconds, and the wrong options are deliberately *mentioned* in the audio to pull you off course. The whole game is to read the options **before** the speaker reaches them, then judge by meaning as the audio rolls past.

## Read ahead — the core habit

In Listening there is no "locate the lines" step; the lines locate themselves, in real time. So your only chance is to be *ready*. During the pause before each section, race ahead and turn every option into a short idea in your own words. When the speaker arrives at that part of the conversation, you are matching what you hear against ideas you already understand — not reading three new sentences while also trying to listen.

## The method

1. **Read the question stem and underline the focus.** Is it asking *why*, *what changed*, *what they decided*? Hold that single idea in your head.
2. **Skim the three options fast and paraphrase them.** You won't have time to read them as the speaker talks, so know their gist *before* the relevant part plays.
3. **Listen for the whole idea, not a matching word.** The correct option is usually **paraphrased**; the wrong options often reuse the **exact words** you see on the page. A word match is a warning sign, not a green light.
4. **Decide on meaning, then commit.** If you miss one, guess and move on instantly — hesitating costs you the *next* question too.

## Signpost language that flags the answer

In a discussion, the answer often follows a turn-signal. Train your ear for:

> "In the end…" / "What finally swayed me…" / "The main thing was…" (the decision is coming) · "I'd thought about… **but**…" / "That's true, **although**…" / "Originally… **in fact**…" (a rejection — the real answer is after the contrast word).

## Worked example 1 — the mentioned-but-rejected options

> **Question:** Why did the student choose the evening class?
> A. It was cheaper.   B. It fitted around her job.   C. It had a better tutor.
>
> **Transcript:**
> – "Was the evening class your first choice?"
> – "Well, the morning one was actually a bit cheaper, and people said the tutor was excellent. But I work until four most days, so honestly the evening slot was the only one I could realistically make."

The trap words are everywhere: *cheaper* (A) and *tutor was excellent* (C) are both said aloud — but they describe the **morning** class she **didn't** pick. The real reason is paraphrased: "I work until four… the only one I could make" = **B. It fitted around her job.** The word "But" is the signal that the real answer is arriving.

## Worked example 2 — the half-right option

> **Question:** What does the tutor say about the first assignment?
> A. It should be longer than the second.   B. It is worth fewer marks than the second.   C. It must be submitted online.
>
> **Transcript:**
> – "Quick question about the assignments?"
> – "Sure. The first is the shorter of the two, but don't relax — it still counts for forty per cent, the same as the second. Both go in through the portal, by the way."

- **A** — the audio says the first is "the shorter", the *opposite* of "longer" → reject.
- **B** — tempting, but it "counts for forty per cent, the **same** as the second", so it is *not* worth fewer marks → half-right, reject.
- **C** — "Both go in through the portal" = submitted online. **Answer: C.**

Option B shows the classic half-truth: a real fact about length is twisted into a false claim about marks.

## Common mistakes

- **The mentioned-but-rejected option.** Speakers raise a possibility, then dismiss it: "*I thought about A, but…*". The bit after "but" carries the answer.
- **Word-for-word lures.** If an option repeats the audio's exact phrasing, suspect it. Correct answers tend to be reworded.
- **Half-right options.** One option may be true but **not the answer to the question asked** (e.g. true that it was cheaper, but that wasn't *why she chose it*).
- **Not reading ahead.** Reading the options for the first time while the speaker talks guarantees you fall behind. Use every pause to pre-read.
- **Falling behind.** Miss one and freeze, and you'll miss three. Mark a guess and snap your attention to the next stem.

## Try it

On the [Listening page](/ielts/listening), find an MCQ set. Read all the stems first and predict, for each, the *type* of answer (a reason, a change, a preference). As you listen, put a light line through any option whose words you hear attached to the **wrong** thing. Choose by meaning, not by matching.`,
  },

  // ── Unit: listen-matching — Matching ──────────────────────────────────────
  {
    id: 'listen-matching',
    skill: 'listening',
    level: 'intermediate',
    unit: 'listen-matching',
    title: 'Matching: pin each item as the speakers develop it',
    slug: 'matching',
    summary:
      'Match a list of items to a set of options in the order they are spoken. Learn to use the option box, follow the running order, and survive the re-used option.',
    estMinutes: 11,
    body: `# Matching

In a matching task you connect a numbered list (people, places, days, items) to a lettered box of options (opinions, features, categories). The questions almost always come **in the order they are spoken**, which is your biggest advantage — use it. Your job is to keep pace with the speaker and decide, item by item, which option's *meaning* matches what was said.

## Why the option box must be in your head first

You cannot read six options and listen at the same time. So the work happens in the pre-listening pause: read the lettered box, paraphrase each option, and commit them to memory. Once the audio starts you should be glancing at the *numbered items* and recognising options from memory — not reading the box for the first time while answers fly past.

## The method

1. **Read the option box first and paraphrase it.** These letters (A–F) are what you're listening *for*. Turn each into a short phrase of your own.
2. **Track the running order.** The numbered items will be discussed top to bottom. Keep one finger on the current item so you never lose your place.
3. **Listen for the idea behind each option, not its label.** Just like MCQ, options are paraphrased. "Too expensive" might be heard as "*way out of my budget*".
4. **Watch the rubric.** Often there are extra letters that are **never used** — and sometimes a letter is used **twice**. The instruction tells you which; read it before you start.

## Paraphrase pairs you'll meet

Matching lives or dies on hearing the synonym. Typical swaps:

| Option on the page | What you actually hear |
| --- | --- |
| recently refurbished | "had a full makeover", "looks brand new" |
| closing soon | "shutting at the end of term", "won't be around much longer" |
| open 24 hours | "accessible round the clock", "never closes" |
| too expensive | "way out of my budget", "a bit steep" |

## Worked example 1 — pure meaning-matching

> **Items:** 21. The library   22. The café   23. The car park
> **Options:** A. recently refurbished   B. closing soon   C. open 24 hours
>
> **Transcript:**
> – "How's the new building working out?"
> – "The library's had a full makeover — looks brand new. The café, sadly, is shutting at the end of term. Oh, and good news: the car park's now accessible round the clock."

Match by meaning: *full makeover / brand new* → **21 = A**; *shutting at the end of term* → **22 = B**; *accessible round the clock* → **23 = C**. None of the option words ("refurbished", "closing", "24 hours") were said directly.

## Worked example 2 — a re-used option and a decoy

> **Items:** 24. Tom   25. Priya   26. Marco
> **Options:** A. found it too theoretical   B. enjoyed the group work   C. thought it was too short
>
> **Transcript:**
> – "What did everyone make of the course?"
> – "Tom loved the team projects best of all. Priya felt it was all a bit abstract — not enough hands-on. And Marco? He said the same as Tom, really — the collaborative side was the highlight for him."

- **24 Tom** → "loved the team projects" = **B**.
- **25 Priya** → "all a bit abstract… not enough hands-on" = **A**.
- **26 Marco** → "the same as Tom… collaborative side was the highlight" = **B** again.

Option **B is used twice** (allowed only if the rubric says so), and option **C is a decoy** never spoken. If you had crossed B off after Tom, you'd have mis-answered Marco.

## Common mistakes

- **The re-used option.** If A can be the answer to two items, don't cross it off after the first hit — unless the rubric forbids reuse. Re-read it for "*you may use any letter more than once*".
- **The decoy option.** A letter that is never spoken is there to waste your attention. Don't force it onto an item just because it's left over.
- **Order slips.** If you miss item 22, the audio is already on 23. Don't reach backwards — leave 22 blank, lock onto 23, and return at the end.
- **Surface-word matching.** Hearing "café" near option C does **not** mean C is the café's answer. Confirm the *meaning*.
- **Reading the box too late.** Memorise the options in the pause; reading them mid-audio loses your place.

## Try it

Open a matching set on the [Listening page](/ielts/listening). Read the option box and paraphrase each letter in your own words (A = "newly redone", B = "won't last long"…). Then listen once, marking answers in running order. If you lose one, deliberately skip it rather than rewinding your attention.`,
  },

  // ── Unit: listen-map-plan — Maps, plans & diagram labelling ───────────────
  {
    id: 'listen-map-plan',
    skill: 'listening',
    level: 'advanced',
    unit: 'listen-map-plan',
    title: 'Maps, plans & diagrams: navigate with the speaker',
    slug: 'maps-plans-diagrams',
    summary:
      'Label a map, floor plan or diagram while a speaker gives directions. Learn to fix your starting point, master direction language, and move at the speaker’s pace.',
    estMinutes: 13,
    body: `# Maps, plans & diagram labelling

Here you label locations on a **map, floor plan or diagram** as a speaker describes them. There's usually no spelling and no word limit — the whole challenge is **spatial tracking**. Lose your position for two seconds and the rest collapses, so orientation is everything.

## The method

1. **Find your anchor.** Locate the **entrance, "you are here", or starting point** the moment the diagram appears. Every instruction will be relative to where you currently are.
2. **Fix your compass.** Decide which way is "forward" from the anchor, and note where North or the main road is. This stops you flipping left and right.
3. **Pre-load the direction vocabulary** (see below). You must react instantly, with no time to translate.
4. **Move your pen with the voice.** Physically trace the route on the page as you listen. Don't try to memorise turns — drag your finger or pen through them in real time.
5. **Label as you arrive.** Write each letter the instant the speaker names that spot. Don't wait to "tidy up" later — by then the next direction has gone.

## Direction language to pre-load

Group it so you can react without thinking:

- **Position:** *opposite, facing, next to, adjacent to, beside, between X and Y, behind, in front of, at the corner of, in the far corner.*
- **Movement:** *go along, head up, carry on past, take the first/second turning, turn off, double back, follow the path round, as far as.*
- **Relative side:** *on your left/right, the second on the right, on the near/far side, the one nearest the entrance.*

A handy fixed pattern: **"the [ordinal] [thing] on your [side]"** — "the second door on your left", "the first turning on the right". Catch the ordinal (*first/second/third*) and the side together; both matter.

## Worked example 1 — a corridor of rooms

> **Plan:** entrance at the bottom; a corridor runs straight up; rooms on both sides labelled A–E.
> **Transcript:**
> – "As you come **in through the main entrance**, the staff room is the **first door on your right**. Carry on **to the end of the corridor**, and the library is **straight ahead**. The store cupboard is **just opposite the library**, and the lab is **next to the staff room**, sharing the same wall."

Trace it: from the entrance → first door right = staff room; end of corridor, straight ahead = library; opposite the library = store cupboard; next to the staff room = lab. Each phrase is an instruction relative to **your current position**, not the page's top.

## Worked example 2 — an outdoor map with a backtrack

> **Map:** a path enters from the south (bottom); it forks at a pond; positions 1–4 are dotted around.
> **Transcript:**
> – "From the gate, follow the path north until you reach the pond. The picnic area is **on the near side of the pond, to your left**. If you take the **right fork** past the pond and go almost to the end, the bird hide is **tucked in the far corner**. Don't go all the way, though — **come back** to the fork and the toilets are **just off the left fork, behind the hedge**."

Trace it: gate → pond; near side, left = **picnic area**; right fork, far corner = **bird hide**; then *back* to the fork, left fork behind hedge = **toilets**. The phrase "come back to the fork" resets your position — the toilets are not near the bird hide, even though it was named just before.

## A note on diagram labelling

Some tasks label the parts of an **object or process** rather than a place — a piece of equipment, a plant cell, the stages of a cycle. The vocabulary shifts from directions to *parts and flow*: *at the top/base, the outer/inner layer, the part that connects to…, this feeds into…, the next stage*. The method is the same — anchor on a part you can clearly identify (often the labelled example), then move outward in the order the speaker describes, labelling as you go.

## Common mistakes

- **Your left vs the speaker's left.** Directions are given from the **walker's** point of view, which may be the opposite of how the map sits on your page. Rotate the route mentally, not the assumptions.
- **"Opposite" vs "next to."** These place a room on completely different walls. Mishear one and two labels fall over.
- **Drifting backtracks.** "*Go past the lab, then come back and…*" — the destination is where the speaker **ends up**, not the first place named.
- **Losing the ordinal.** "The *second* on the right" is not the first; if you miss the number you mis-place the room.
- **Freezing on a miss.** If you can't place one room, keep your pen moving with the voice and fill the gap from the leftover letters at the end.

## Try it

Open a map or plan task on the [Listening page](/ielts/listening). Before pressing play, circle the entrance/start and say which way is "forward". As you listen once, trace the route with your pen and label each spot the instant it's named. Afterwards, check any blank against the options you didn't use.`,
  },

  // ── Unit: listen-sentence — Sentence completion ───────────────────────────
  {
    id: 'listen-sentence',
    skill: 'listening',
    level: 'advanced',
    unit: 'listen-sentence',
    title: 'Sentence completion: the exact words, within the limit',
    slug: 'sentence-completion',
    summary:
      'Complete sentences with words taken straight from the audio. Learn to predict grammar and meaning, capture the precise words, and never exceed the word limit.',
    estMinutes: 12,
    body: `# Sentence completion

Sentence completion (common in Sections 3 and 4, including academic lectures) gives you part of a sentence to finish with words from the recording. Two skills decide your mark: **predicting what fits** and **writing the exact words within the limit**. Unlike a conversation, a Section 4 lecture has no second speaker to slow things down, so your prediction has to do the heavy lifting.

## The method

1. **Lock the word limit in.** "ONE WORD ONLY" or "NO MORE THAN TWO WORDS" is marked strictly. Three words where two are allowed scores zero, even if the meaning is perfect.
2. **Predict grammar and meaning per gap.** From the words on the page, decide what *part of speech* fits — a noun? a plural? an adjective? a number? — and what it's likely to be *about*. This primes your ear.
3. **Listen for the paraphrased lead-in.** The sentence on your page is reworded in the audio. Follow the meaning until you hit the gap, then capture the **precise** word(s) spoken.
4. **Write what you hear, not a synonym.** The mark requires the **actual word from the recording**. Don't "improve" it into a word you prefer.

## Use grammar to predict the gap

The words touching the gap tell you what part of speech must fill it:

- after *a / an / the / this* and before *of…* → a **noun** ("the ___ of the migration").
- after *to* → a **base verb** ("used to ___ the samples").
- after *more / very / quite / a* and before a noun → an **adjective** ("a ___ increase").
- after a subject with no verb yet → a **verb**, watch the **tense** ("the temperature ___ sharply").

This single habit catches most wrong-form errors before they happen, because you already know the *shape* of the answer before the speaker says it.

## Lecture signposts that flag the answer

In a Section 4 lecture the speaker guides you to key facts with fixed phrases. When you hear one, the gap-filler is usually seconds away:

> "The key point is…" · "What's significant here is…" · "This is known as…" / "This is called…" (a **term** is coming) · "The main cause was…" · "As a result,…" · "For example,…" (an illustrative **noun** follows) · "In other words,…" (a paraphrase — useful if you missed the first version).

"This is known as…" and "is referred to as…" almost always precede a one- or two-word technical term — exactly the kind of answer these gaps want. Prime your pen when you hear them.

## Worked example 1 — predict the noun

> **On the page:** The researchers were surprised by the _______ (1) of the migration.
> **Transcript:**
> – "What stood out in the data?"
> – "What really took us aback was the sheer **speed** of the migration — far faster than any earlier model had predicted."

Prediction: after "the" and before "of the migration", the gap needs a **noun** describing a quality of the migration. The lead-in is paraphrased ("surprised" → "*took us aback*"), then the exact noun arrives: **(1) speed**. Writing "*fast*" or "*quickness*" would be wrong — use the word said: *speed*.

## Worked example 2 — the word limit traps an over-writer

> **On the page (NO MORE THAN TWO WORDS):** Early farmers stored grain in pits lined with _______ (1) to keep out moisture.
> **Transcript:**
> – "How did they stop the grain rotting?"
> – "Cleverly, they lined the storage pits with a thick layer of **dried clay**, which sealed out damp remarkably well."

Prediction: after "lined with" the gap needs a **noun** (a material), and the limit is two words. The speaker says "a thick layer of **dried clay**". The phrase "thick layer of" is lead-in description; the material itself is **dried clay** — two words, exactly within the limit. Writing "thick dried clay" (three words) would score zero, and "clay" alone risks missing the intended answer.

## Common mistakes

- **Over-writing.** You hear "*the remarkable speed*" but the limit is ONE WORD — write **speed** only. Strip the extra describing words.
- **The synonym swap.** Replacing the heard word with your own (even a correct synonym) loses the mark in completion tasks.
- **Wrong word form.** The audio says "*decide*" but the sentence grammar needs a noun — listen for whether they actually say "*decision*". Don't change the form yourself unless you truly heard it.
- **Plurals and tense.** "*Costs rose*" needs the plural and the past form if the sentence frame demands them. Match exactly what fits the frame.
- **Spelling.** A correctly heard answer spelled wrong still loses the mark — especially academic nouns (*temperature, environment, government*).

## Try it

On the [Listening page](/ielts/listening), choose a sentence-completion set. For each gap, write its predicted part of speech (noun / verb / adjective / number) *before* listening. Play once, fill the gaps with the exact words, then audit: is every answer within the word limit and in the form you actually heard?`,
  },

  // ── Unit: listen-distractors — Accents, distractors & corrections ─────────
  {
    id: 'listen-distractors',
    skill: 'listening',
    level: 'mastery',
    unit: 'listen-distractors',
    title: 'Accents, distractors & corrections: catch the change of mind',
    slug: 'accents-distractors-corrections',
    summary:
      'The top-band skill: stay with speakers who change their mind, hand over numbers in stages, and span a range of accents. Learn to wait for the final answer.',
    estMinutes: 14,
    body: `# Accents, distractors & corrections

At the higher bands, the test stops handing you clean answers. Speakers **change their minds**, give a number then **correct it**, and talk in a range of **accents** (British, Australian, North American, and more). The skill is no longer hearing words — it's deciding **which version is the real answer**.

## The method

1. **Always wait for the end of the sentence.** The first thing said is often a *setup* the speaker is about to revise. The answer is whatever survives the correction.
2. **Listen for correction signals** (see the list below). The moment you hear one, **delete what came before** and take what follows.
3. **Hold numbers loosely until confirmed.** Postcodes, prices, dates and reference numbers are frequently said, paused, then adjusted. Don't ink in the first figure — pencil it lightly and be ready to overwrite.
4. **Tune to the accent, not the spelling.** An Australian "*today*" can sound like "*to die*"; a North American "*schedule*" differs from a British one. Focus on **meaning in context** and let unfamiliar vowels pass.

## Correction signals to memorise

The instant you hear one of these, the previous value is probably dead:

> **actually** · **sorry, I mean** · **no, wait** · **hang on** · **let me check** · **on second thoughts** · **or rather** · **scrap that** · **I tell a lie** · **make that…** · **it's not… it's…**

And the softer ones that are easy to miss:

> "…or *was* it…?" · a pause then "…no…" · "well, **technically**…" · rising-then-falling "…Tuesday? — yes, Tuesday."

## Worked example 1 — a time correction

> **Question:** What time does the tour start?
> **Transcript:**
> – "So the tour kicks off at half past nine — oh, **actually, sorry**, that's the staff briefing. The public tour starts at **ten fifteen**."

Two times are spoken. The first, *half past nine (9:30)*, is the **distractor**; the signal "*actually, sorry*" cancels it. The answer is the corrected one: **10:15**.

## Worked example 2 — a double correction in a number

> **A reference code:**
> – "The reference is GR seven double-two… **no, hang on**, let me check — GR seven *three* two… **sorry, make that** GR seven three *five*."

Three versions go past: 722 → 732 → 735. Each correction signal cancels the last value. The answer is the **most recent confirmed** string, **GR735**, not "722" or the intermediate "732". The lesson: keep updating to the end; don't relax after the first correction.

## Worked example 3 — a quiet correction of a day

> **Question:** When is the next committee meeting?
> **Transcript:**
> – "Right, so the meeting's on Wednesday the twelfth — **or was it** the *thirteenth*? Let me see… yes, the **thirteenth**, which is the Thursday."

There is no loud "sorry" here — just "*or was it…*" and a pause. A careless listener writes "Wednesday 12th". But the speaker resolves it: "the **thirteenth**, which is the Thursday". The answer is **Thursday 13th**. Notice the day name and the date are cross-checked against each other, which is your clue to the final value.

## A note on accents

You will not be tested on understanding *unfamiliar individual words* — only on the answer. So when a vowel sounds odd:

- **Anchor on the consonants and the context.** "*to die*" makes no sense in "the tour leaves to die"; "*today*" does. Meaning disambiguates the sound.
- **Don't stall.** Replaying the odd word in your head means you miss the next sentence — and the next answer. Let it slide and stay with the speaker.
- **Expect variety within one test:** the four sections often feature different accents, so a change of speaker is normal, not a problem.

## Common mistakes

- **Inking the first version.** Writing the setup before the correction lands is the classic high-band error. Hover, don't commit.
- **Relaxing after one correction.** As Example 2 shows, a speaker may correct *twice*. Keep your pen ready until the sentence truly ends.
- **Missing a quiet self-correction.** Some corrections are murmured ("*…or was it Tuesday — yes, Tuesday*"). Stay alert through hesitations and fillers.
- **Accent panic.** Freezing on one oddly pronounced word makes you miss the next answer. Let it go and keep moving.
- **Treating "technically / strictly speaking" as filler.** These often introduce the *precise* answer that overrides a loose first statement.

## Try it

On the [Listening page](/ielts/listening), pick a Section 3 or 4 recording with multiple speakers. Each time you hear a correction word (*actually, sorry, I mean, let me check, make that*), strike through your previous note and write the new value. At the end, review every answer that involved a number or time and confirm you kept the **final** version, not the first.`,
  },
]
