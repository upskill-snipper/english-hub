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
    estMinutes: 10,
    body: `# Form, note & table completion

This is usually the **first thing you hear** in the test — a Section 1 conversation about everyday life (booking a room, joining a club, reporting a lost bag). You complete a form, a set of notes, or a table. The audio plays **once only**, so a plan matters more than raw listening.

## The method

1. **Read the instruction and obey the word limit.** "NO MORE THAN TWO WORDS AND/OR A NUMBER" means three words is automatically wrong, even if the meaning is right.
2. **Predict every gap before the audio starts.** Look at the words around the gap and ask: *what kind of answer is this?* A name? A number? A day? A material? Write a tiny label next to each gap, e.g. *£ , surname?, time?*.
3. **Listen for the signpost, then the answer.** The words around the gap on your page are usually **paraphrased** in the audio. Track the meaning, not the exact words, until you reach the gap — then capture the precise word the speaker says.
4. **Spell it.** Names, streets and emails are almost always **spelled out** for you. Write the letters as you hear them; don't guess afterwards.

## Worked example

> **Form on the page:** Name: Sarah _______ (1)  ·  Address: 14 _______ (2) Road  ·  Membership: _______ (3) per month
>
> **Transcript:**
> – "Can I take your full name?"
> – "Sarah Whitlock — that's W-H-I-T-L-O-C-K."
> – "And your address?"
> – "It's 14 Maple Road, near the station."
> – "Lovely. Membership is fifteen pounds a month, or twelve if you're a student."

Answers: **(1) Whitlock** — copy the spelled letters exactly; **(2) Maple** — "Road" is already printed, so don't repeat it; **(3) £15 / fifteen pounds** — but watch the next clause.

## Common traps

- **The correction.** The £15 above is immediately followed by "*or twelve if you're a student*." If the form says *student rate*, the answer becomes **£12**. Always listen to the **end** of the sentence.
- **Plurals.** If you hear "two return *tickets*", write the plural. A missing **-s** loses the mark.
- **Repeating printed words.** If "Road", "per month" or "£" is already on the page, don't write it again — you may break the word limit.
- **Hearing the first number.** Phone and reference numbers are often said, paused, then said again or corrected. Wait for the full string.

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
    estMinutes: 11,
    body: `# Multiple choice

Listening multiple choice looks like Reading multiple choice, but it is harder in one way: you **cannot re-read**. The answer goes past in seconds, and the wrong options are deliberately *mentioned* in the audio to pull you off course.

## The method

1. **Read the question stem and underline the focus.** Is it asking *why*, *what changed*, *what they decided*? Hold that single idea in your head.
2. **Skim the three options fast.** You won't have time to read them as the speaker talks, so know their gist *before* the relevant part plays.
3. **Listen for the whole idea, not a matching word.** The correct option is usually **paraphrased**; the wrong options often reuse the **exact words** you see on the page. A word match is a warning sign, not a green light.
4. **Decide on meaning, then commit.** If you miss one, guess and move on instantly — hesitating costs you the *next* question too.

## Worked example

> **Question:** Why did the student choose the evening class?
> A. It was cheaper.   B. It fitted around her job.   C. It had a better tutor.
>
> **Transcript:**
> – "Was the evening class your first choice?"
> – "Well, the morning one was actually a bit cheaper, and people said the tutor was excellent. But I work until four most days, so honestly the evening slot was the only one I could realistically make."

The trap words are everywhere: *cheaper* (A) and *tutor was excellent* (C) are both said aloud — but they describe the **morning** class she **didn't** pick. The real reason is paraphrased: "I work until four… the only one I could make" = **B. It fitted around her job.**

## Common traps

- **The mentioned-but-rejected option.** Speakers raise a possibility, then dismiss it: "*I thought about A, but…*". The bit after "but" carries the answer.
- **Word-for-word lures.** If an option repeats the audio's exact phrasing, suspect it. Correct answers tend to be reworded.
- **Half-right options.** One option may be true but **not the answer to the question asked** (e.g. true that it was cheaper, but that wasn't *why she chose it*).
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
    estMinutes: 10,
    body: `# Matching

In a matching task you connect a numbered list (people, places, days, items) to a lettered box of options (opinions, features, categories). The questions almost always come **in the order they are spoken**, which is your biggest advantage — use it.

## The method

1. **Read the option box first.** These letters (A–F) are what you're listening *for*. Get their meanings into your head before the audio.
2. **Track the running order.** The numbered items will be discussed top to bottom. Keep one finger on the current item so you never lose your place.
3. **Listen for the idea behind each option, not its label.** Just like MCQ, options are paraphrased. "Too expensive" might be heard as "*way out of my budget*".
4. **Watch for more options than items.** Often there are extra letters that are **never used** — and sometimes a letter is used **twice**. Read the instruction to know which.

## Worked example

> **Items:** 21. The library   22. The café   23. The car park
> **Options:** A. recently refurbished   B. closing soon   C. open 24 hours
>
> **Transcript:**
> – "How's the new building working out?"
> – "The library's had a full makeover — looks brand new. The café, sadly, is shutting at the end of term. Oh, and good news: the car park's now accessible round the clock."

Match by meaning: *full makeover / brand new* → **21 = A**; *shutting at the end of term* → **22 = B**; *accessible round the clock* → **23 = C**. None of the option words ("refurbished", "closing", "24 hours") were said directly.

## Common traps

- **The re-used option.** If A can be the answer to two items, don't cross it off after the first hit. Re-read the instruction for "*you may use any letter more than once*".
- **The decoy option.** A letter that is never spoken is there to waste your attention. Don't force it onto an item just because it's left over.
- **Order slips.** If you miss item 22, the audio is already on 23. Don't reach backwards — leave 22 blank, lock onto 23, and return at the end.
- **Surface-word matching.** Hearing "café" near option C does **not** mean C is the café's answer. Confirm the *meaning*.

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
    estMinutes: 12,
    body: `# Maps, plans & diagram labelling

Here you label locations on a **map, floor plan or diagram** as a speaker describes them. There's usually no spelling and no word limit — the whole challenge is **spatial tracking**. Lose your position for two seconds and the rest collapses, so orientation is everything.

## The method

1. **Find your anchor.** Locate the **entrance, "you are here", or starting point** the moment the diagram appears. Every instruction will be relative to where you currently are.
2. **Pre-load the direction vocabulary.** You must react instantly to: *opposite, next to, adjacent, beyond, at the far end, on your left, the second on the right, between, behind, all the way along, the corner of*.
3. **Move your pen with the voice.** Physically trace the route on the page as you listen. Don't try to memorise turns — drag your finger or pen through them in real time.
4. **Label as you arrive.** Write each letter the instant the speaker names that spot. Don't wait to "tidy up" later — by then the next direction has gone.

## Worked example

> **Plan:** entrance at the bottom; a corridor runs straight up; rooms on both sides labelled A–E.
> **Transcript:**
> – "As you come **in through the main entrance**, the staff room is the **first door on your right**. Carry on **to the end of the corridor**, and the library is **straight ahead**. The store cupboard is **just opposite the library**, and the lab is **next to the staff room**, sharing the same wall."

Trace it: from the entrance → first door right = staff room; end of corridor, straight ahead = library; opposite the library = store cupboard; next to the staff room = lab. Each phrase is an instruction relative to **your current position**, not the page's top.

## Common traps

- **Your left vs the speaker's left.** Directions are given from the **walker's** point of view, which may be the opposite of how the map sits on your page. Rotate the route mentally, not the assumptions.
- **"Opposite" vs "next to."** These place a room on completely different walls. Mishear one and two labels fall over.
- **Drifting backtracks.** "*Go past the lab, then come back and…*" — the destination is where the speaker **ends up**, not the first place named.
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
    estMinutes: 11,
    body: `# Sentence completion

Sentence completion (common in Sections 3 and 4, including academic lectures) gives you part of a sentence to finish with words from the recording. Two skills decide your mark: **predicting what fits** and **writing the exact words within the limit**.

## The method

1. **Lock the word limit in.** "ONE WORD ONLY" or "NO MORE THAN TWO WORDS" is marked strictly. Three words where two are allowed = zero, even if the meaning is perfect.
2. **Predict grammar and meaning per gap.** From the words on the page, decide what *part of speech* fits — a noun? a plural? an adjective? a number? — and what it's likely to be *about*. This primes your ear.
3. **Listen for the paraphrased lead-in.** The sentence on your page is reworded in the audio. Follow the meaning until you hit the gap, then capture the **precise** word(s) spoken.
4. **Write what you hear, not a synonym.** The mark requires the **actual word from the recording**. Don't "improve" it into a word you prefer.

## Worked example

> **On the page:** The researchers were surprised by the _______ (1) of the migration.
> **Transcript:**
> – "What stood out in the data?"
> – "What really took us aback was the sheer **speed** of the migration — far faster than any earlier model had predicted."

Prediction: after "the" and before "of the migration", the gap needs a **noun** describing a quality of the migration. The lead-in is paraphrased ("surprised" → "*took us aback*"), then the exact noun arrives: **(1) speed**. Writing "*fast*" or "*quickness*" would be wrong — use the word said: *speed*.

## Common traps

- **Over-writing.** You hear "*the remarkable speed*" but the limit is ONE WORD — write **speed** only.
- **The synonym swap.** Replacing the heard word with your own (even a correct synonym) loses the mark in completion tasks.
- **Wrong word form.** The audio says "*decide*" but the sentence grammar needs a noun — listen for whether they actually say "*decision*". Don't change the form yourself unless you truly heard it.
- **Plurals and tense.** "*Costs rose*" needs the plural and the past form if the sentence frame demands them. Match exactly.

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
    estMinutes: 13,
    body: `# Accents, distractors & corrections

At the higher bands, the test stops handing you clean answers. Speakers **change their minds**, give a number then **correct it**, and talk in a range of **accents** (British, Australian, North American, and more). The skill is no longer hearing words — it's deciding **which version is the real answer**.

## The method

1. **Always wait for the end of the sentence.** The first thing said is often a *setup* the speaker is about to revise. The answer is whatever survives the correction.
2. **Listen for correction signals.** *Actually, sorry, I mean, no wait, let me check, on second thoughts, or rather, scrap that.* The moment you hear one, **delete what came before** and take what follows.
3. **Hold numbers loosely until confirmed.** Postcodes, prices, dates and reference numbers are frequently said, paused, then adjusted. Don't ink in the first figure.
4. **Tune to the accent, not the spelling.** An Australian "*today*" can sound like "*to die*"; a North American "*schedule*" differs from a British one. Focus on **meaning in context** and let unfamiliar vowels pass.

## Worked example

> **Question:** What time does the tour start?
> **Transcript:**
> – "So the tour kicks off at half past nine — oh, **actually, sorry**, that's the staff briefing. The public tour starts at **ten fifteen**."

Two times are spoken. The first, *half past nine (9:30)*, is the **distractor**; the signal "*actually, sorry*" cancels it. The answer is the corrected one: **10:15**.

> **A number correction:**
> – "The reference is GR seven double-two… **no, hang on**, let me check — GR seven *three* two."

The final, confirmed string **GR732** is the answer, not the abandoned "722".

## Common traps

- **Inking the first version.** Writing the setup before the correction lands is the classic high-band error. Hover, don't commit.
- **Missing a quiet self-correction.** Some corrections are murmured ("*…or was it Tuesday — yes, Tuesday*"). Stay alert through hesitations and fillers.
- **Accent panic.** Freezing on one oddly pronounced word makes you miss the next answer. Let it go and keep moving.
- **Double corrections.** Occasionally a speaker corrects, then corrects *again*. Keep updating to the **most recent** confirmed value.

## Try it

On the [Listening page](/ielts/listening), pick a Section 3 or 4 recording with multiple speakers. Each time you hear a correction word (*actually, sorry, I mean, let me check*), strike through your previous note and write the new value. At the end, review every answer that involved a number or time and confirm you kept the **final** version, not the first.`,
  },
]
