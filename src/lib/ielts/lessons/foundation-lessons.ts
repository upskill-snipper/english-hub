// ─── IELTS Foundation lessons ──────────────────────────────────────────────
// The "starting from nothing" track for true beginners. One lesson per
// foundation unit (see UNITS in ../curriculum). Every lesson is original,
// beginner-friendly, and written in an encouraging, plain-English voice:
// explain → show concrete examples → list common mistakes → end with a short
// "Try it" prompt. Bodies are Markdown rendered by the /ielts/learn UI.
// ────────────────────────────────────────────────────────────────────────────

import type { Lesson } from '@/lib/ielts/curriculum'

export const FOUNDATION_LESSONS: Lesson[] = [
  // ── 1. What IELTS is & how it works ──────────────────────────────────────
  {
    id: 'found-overview-what-is-ielts',
    skill: 'foundation',
    level: 'foundation',
    unit: 'found-overview',
    title: 'What IELTS is and how the test works',
    slug: 'what-is-ielts-and-how-it-works',
    summary:
      'A plain-English tour of the four sections, the order they happen in, and what each one actually asks you to do.',
    estMinutes: 10,
    body: `# What IELTS is and how the test works

Welcome — if IELTS feels like a wall of mystery right now, that is completely normal. By the end of this short lesson you will know exactly what the test is, what it contains, and what happens on the day. That alone removes a surprising amount of fear.

## What IELTS actually is

**IELTS** stands for the *International English Language Testing System*. It is a test of how well you can **use** English in real situations — not a test of grammar rules you can recite, and not a test you can "fail". Everyone who sits it receives a **band score** from 1 to 9 that simply describes their current level. Universities, employers, and immigration authorities ask for it as proof of your English.

## The four sections

The test measures four skills, always in this order:

1. **Listening** (~30 minutes) — you hear four recordings (conversations and talks) and answer 40 questions.
2. **Reading** (60 minutes) — three texts, 40 questions, testing whether you can find and understand information.
3. **Writing** (60 minutes) — two tasks: a shorter one, then an essay.
4. **Speaking** (11–14 minutes) — a friendly one-to-one conversation with a real examiner.

Listening, Reading, and Writing are done back-to-back with no break. **Speaking** may be on the same day or within a few days, depending on your test centre.

## Two ways to take it

You can sit IELTS on **paper** or on a **computer**. The questions and scoring are identical; only the way you click or write changes. There are also two *versions* — **Academic** and **General Training** — and we cover the difference in a later lesson. For now, just know both exist.

## A worked example: what a question feels like

Imagine the Listening recording says:

> "The library opens at nine, but on Saturdays it doesn't open until ten."

A typical question is:

> *The library opens at ______ on Saturdays.*

The answer is **ten**. Notice the test rewards careful listening — the recording mentions *nine* first to see if you are paying attention. This "the answer is not the first number you hear" pattern appears everywhere, so train yourself to listen to the *whole* sentence.

## Common beginner mistakes

- **Thinking you must understand every word.** You don't. You need the *answer*, not perfect comprehension.
- **Believing there is a pass mark.** There isn't — you simply get the band that matches your level.
- **Cramming grammar in isolation.** IELTS rewards *using* English, so practising the real tasks matters far more.
- **Ignoring instructions.** "Write NO MORE THAN TWO WORDS" is a rule — break it and the answer is marked wrong even if it's correct.

## Try it

In one or two sentences, write the four sections of IELTS in order from memory, and next to each one note roughly how long it takes. Checking yourself like this is the fastest way to make the structure stick.`,
  },

  // ── 2. How IELTS is scored — the band scale ──────────────────────────────
  {
    id: 'found-bands-the-band-scale',
    skill: 'foundation',
    level: 'foundation',
    unit: 'found-bands',
    title: 'How IELTS is scored: the 9-band scale',
    slug: 'how-ielts-is-scored-the-band-scale',
    summary:
      'What the bands from 4 to 9 really mean, how each section is scored, and how your single overall band is calculated.',
    estMinutes: 11,
    body: `# How IELTS is scored: the 9-band scale

IELTS does not give you a percentage or a pass/fail. Instead, every skill gets a **band** from **1 to 9**, and those four bands combine into one **overall band**. Understanding this scale tells you exactly what to aim for.

## What the bands mean

Here is the scale in everyday language:

- **Band 9 — Expert:** fully fluent, accurate, and natural. Like a highly educated native speaker.
- **Band 8 — Very good:** occasional small slips, but you handle complex language with ease.
- **Band 7 — Good:** generally accurate; you cope well even if the odd error appears.
- **Band 6 — Competent:** effective English with some mistakes and misunderstandings.
- **Band 5 — Modest:** you get your meaning across in familiar situations but make many errors.
- **Band 4 — Limited:** basic competence limited to familiar situations.
- **Bands 1–3:** very limited or no real ability to communicate yet.

Most universities ask for **6.0–7.0 overall**. Many immigration routes ask for **4.0–6.0**. Knowing your target band shapes everything you study.

## Half bands exist

Scores move in **half steps**: …5.0, 5.5, 6.0, 6.5… So your overall band might be **6.5**. There is no 6.25 — only whole and half bands.

## How each section is scored

- **Listening and Reading** are marked out of **40**. Your raw score (number correct) is converted to a band using a fixed table. As a rough guide, around **30/40** in Listening sits near band **7**.
- **Writing and Speaking** are judged by a trained examiner against **four criteria** each (for example, in Speaking: fluency, vocabulary, grammar, and pronunciation). The four criteria are averaged into the band for that skill.

## A worked example: calculating your overall band

Suppose you score:

| Skill | Band |
| --- | --- |
| Listening | 6.5 |
| Reading | 6.0 |
| Writing | 5.5 |
| Speaking | 7.0 |

1. **Add them:** 6.5 + 6.0 + 5.5 + 7.0 = **25.0**
2. **Divide by four:** 25.0 ÷ 4 = **6.25**
3. **Round to the nearest half band:** 6.25 rounds **up** to **6.5**.

The rounding rule is simple: an average ending in **.25 rounds up** to the next half band, and **.75 rounds up** to the next whole band. So a 6.25 becomes 6.5, and a 6.75 becomes 7.0.

## Common beginner mistakes

- **Aiming for "as high as possible" instead of a target.** Find the band your university or visa needs, then aim just above it.
- **Forgetting one weak skill drags the average down.** A 4.5 in Writing can pull a strong profile below the line — balance matters.
- **Misreading requirements.** Some institutions want a *minimum in each skill*, not just an overall band. Always check both.

## Try it

Pick a band you'd realistically like to reach. Invent four plausible section scores that would *just* hit it, then add and divide them to check your maths and the rounding. This makes the scale feel real rather than abstract.`,
  },

  // ── 3. Academic vs General Training ──────────────────────────────────────
  {
    id: 'found-academic-gt-which-test',
    skill: 'foundation',
    level: 'foundation',
    unit: 'found-academic-gt',
    title: 'Academic vs General Training: which test to take',
    slug: 'academic-vs-general-training',
    summary:
      'How to choose the right version of IELTS and exactly how the Reading and Writing sections differ between them.',
    estMinutes: 9,
    body: `# Academic vs General Training: which test to take

Before you book anything, you must choose the correct **version** of IELTS. Pick the wrong one and your score may not be accepted, so let's get this right in a few minutes.

## The two versions

- **IELTS Academic** — for studying at university or for professional registration (for example, doctors and nurses).
- **IELTS General Training** — for migration to English-speaking countries, secondary school, work experience, or training programmes.

If you are unsure, **check the exact requirement** of the university, employer, or immigration authority you are applying to. They will state which one they accept. When in doubt, ask them directly — never guess.

## What is identical in both

This is the reassuring part: **Listening and Speaking are exactly the same** in both versions. Same recordings format, same interview. So roughly half your preparation counts no matter which version you take.

## What is different: Reading

- **Academic Reading** uses three long texts from books, journals, and newspapers — the kind of writing you'd meet at university. The language is more formal and the topics more abstract.
- **General Training Reading** uses everyday texts: notices, advertisements, workplace documents, and one longer general-interest passage. The language is more practical.

Both have **40 questions** and the **same question types** (matching, true/false/not given, completion, and so on), so the *skills* you practise transfer well.

## What is different: Writing

This is where the gap is widest. Both versions have a **Task 1** and a **Task 2**.

- **Task 2 is almost identical** in both: a formal essay of at least **250 words** responding to an argument or problem.
- **Task 1 is completely different:**
  - **Academic Task 1** asks you to *describe a chart, graph, table, map, or process* in at least **150 words**. Example: *"The graph shows electricity use in three countries from 2000 to 2020. Summarise the information."*
  - **General Training Task 1** asks you to *write a letter* of at least **150 words**. Example: *"You recently stayed at a hotel and were unhappy with the service. Write a letter to the manager."*

## Common beginner mistakes

- **Practising the wrong Task 1.** This is the most expensive mistake — describing a graph when your test wants a letter wastes weeks. Confirm your version first.
- **Assuming "Academic" means "harder".** They are scored on the same band scale; one is not worth more than the other. Choose by *purpose*, not difficulty.
- **Forgetting Task 2 is shared.** Whatever version you take, essay practice is never wasted.

## Try it

Write one sentence stating which version you need (Academic or General Training) and *why* — the specific reason, such as "for a UK student visa" or "to study a master's degree". If you can't finish the sentence confidently, that's your signal to check the official requirement today.`,
  },

  // ── 4. Building a preparation routine ────────────────────────────────────
  {
    id: 'found-routine-build-a-routine',
    skill: 'foundation',
    level: 'foundation',
    unit: 'found-routine',
    title: 'Building a preparation routine that sticks',
    slug: 'building-a-preparation-routine',
    summary:
      'How to study for IELTS realistically — how often, in what order, and how to use this program without burning out.',
    estMinutes: 10,
    body: `# Building a preparation routine that sticks

The single biggest predictor of your score is not talent — it is **consistent, focused practice**. The good news: a sensible routine beats heroic last-minute cramming every time. Here is how to build one you'll actually keep.

## How often to study

Aim for **short, regular sessions** rather than rare marathons. A realistic, sustainable target for most learners is:

- **30–60 minutes a day**, five or six days a week, **or**
- **three longer sessions** of 90 minutes if daily study isn't possible.

Your brain learns a language through **repeated exposure over time**. Twenty minutes today and twenty tomorrow teaches you far more than two hours once a week.

## A simple weekly shape

Rotate the four skills so none gets neglected. A balanced week might look like this:

- **Mon:** Listening practice
- **Tue:** Reading practice
- **Wed:** Writing — one task, then review
- **Thu:** Speaking — record yourself answering questions
- **Fri:** Vocabulary + grammar review
- **Sat:** One longer "mixed" session, or a full practice section
- **Sun:** Rest (rest is part of the plan, not a failure)

Spend a little **extra time on your weakest skill** — but never drop the others entirely.

## How to use this program

Work through the levels in order: **Foundation → Intermediate → Advanced → Mastery**. Within each, the lessons build on one another, so resist the urge to skip ahead. A reliable loop is:

1. **Read** a lesson and note the key idea in your own words.
2. **Do** the related practice or "Try it" task immediately while it's fresh.
3. **Review** your mistakes — this is where most of the learning actually happens.

## A worked example: turning a goal into a plan

Say your test is in **eight weeks** and you need band **6.0**.

1. **Count backwards:** 8 weeks = roughly 48 study days at 6 days a week.
2. **Split the time:** spend the first 2 weeks on Foundation and method, the middle 4 weeks doing question types, the last 2 weeks on timed full practice.
3. **Book a weekly checkpoint:** every Sunday, do one timed section and log the score so you can see progress.

Now your eight weeks have a shape instead of a vague hope.

## Common beginner mistakes

- **Only doing what you enjoy.** It's tempting to keep doing your best skill. Growth lives in your *weakest* one.
- **Practising without reviewing.** Doing 100 questions and never checking *why* you missed them teaches very little.
- **No fixed time.** "I'll study when I'm free" usually becomes "I didn't study." Anchor sessions to a fixed slot.
- **Burning out in week one.** Three hours a day is unsustainable; consistency beats intensity.

## Try it

Sketch your own one-week plan: write the seven days and assign one skill or focus to each, including a rest day. Be honest about how much time you really have — a plan you'll keep beats a perfect plan you'll abandon.`,
  },

  // ── 5. Core grammar the test assumes ─────────────────────────────────────
  {
    id: 'found-grammar-core-grammar',
    skill: 'foundation',
    level: 'foundation',
    unit: 'found-grammar',
    title: 'Core grammar the test assumes you know',
    slug: 'core-grammar-the-test-assumes',
    summary:
      'The everyday tenses, articles, and sentence structures examiners reward — explained simply with examples and fixes.',
    estMinutes: 13,
    body: `# Core grammar the test assumes you know

You don't need to memorise grammar textbooks to do well in IELTS. But examiners *do* reward a handful of structures used **accurately**. This lesson covers the essentials so your meaning is always clear.

## 1. The tenses you'll use most

Three tenses cover the vast majority of what you need:

- **Present simple** — for facts and habits: *"Water boils at 100 degrees." "I work in a hospital."*
- **Past simple** — for finished actions: *"I visited London last year."*
- **Present perfect** — for experiences or things still relevant now: *"I have lived here for five years."* (and I still do).

A common slip is mixing past simple and present perfect. Use **past simple** with a finished time word (*yesterday, in 2019, last week*) and **present perfect** with *for, since, already, never*.

> Wrong: *I have visited Paris last year.*
> Right: *I visited Paris last year.* / *I have visited Paris twice.*

## 2. Articles: a, an, the

- Use **a/an** for one non-specific thing the listener doesn't yet know: *"I saw **a** dog."*
- Use **the** when both you and the reader know which one: *"**The** dog was barking."* (the one I just mentioned).
- Use **no article** for general plurals and uncountable ideas: *"Dogs are loyal." "Information is useful."*

Articles are small but examiners notice them. Getting them roughly right lifts your accuracy noticeably.

## 3. Subject–verb agreement

The verb must match the subject:

> Wrong: *The students **is** ready.*
> Right: *The students **are** ready.*

Watch out for words between the subject and verb: *"The **box** of chocolates **is** on the table."* (the subject is *box*, not *chocolates*).

## 4. Simple vs complex sentences

To reach higher bands you need a **mix** of sentence types:

- **Simple:** one idea — *"Cities are growing."*
- **Compound:** two ideas joined by *and / but / so* — *"Cities are growing, so housing is expensive."*
- **Complex:** one idea depending on another, using words like *because, although, which, when* — *"Although cities are growing, public transport has not kept pace."*

The complex sentence is your friend. **Although**, **because**, **while**, and **which** let you connect ideas the way confident writers do.

## A worked example: fixing a weak sentence

Start with a flat, error-filled sentence:

> *People uses car everyday and it cause pollution.*

Fix it step by step:

1. Agreement: *uses → use*.
2. Article/number: *car → cars*.
3. Spelling/agreement: *cause → causes* (the subject *it* is singular).
4. Combine into a complex sentence with *which*:

> **Improved:** *People use cars every day, which causes pollution.*

Cleaner, accurate, and more sophisticated — without any rare "big" grammar.

## Common beginner mistakes

- **Only writing simple sentences.** Safe, but it caps your band. Add one or two complex sentences per paragraph.
- **Forcing complexity and losing control.** A correct simple sentence beats a broken complex one. Build up gradually.
- **Dropping articles** (*"I went to shop"*) or **plural -s** (*"three cat"*). These small errors add up fast.
- **Comma splices:** *"Cities grow, housing is expensive."* Join with *and/so/but* or a linking word, or use two sentences.

## Try it

Take this sentence and improve it: *"Many student study english because they wants good job."* Fix every error you can spot, then rewrite it once more as a single complex sentence. Compare your two versions and notice what changed.`,
  },

  // ── 6. Building everyday & academic vocabulary ───────────────────────────
  {
    id: 'found-vocab-building-vocabulary',
    skill: 'foundation',
    level: 'foundation',
    unit: 'found-vocab',
    title: 'Building everyday and academic vocabulary',
    slug: 'building-everyday-and-academic-vocabulary',
    summary:
      'How to grow real, usable vocabulary through collocation and paraphrasing — instead of memorising long word lists.',
    estMinutes: 11,
    body: `# Building everyday and academic vocabulary

Vocabulary is a quarter of your Writing and Speaking score — but the goal is *not* to stuff in rare, impressive words. Examiners reward words used **naturally and correctly**. This lesson shows you how to build vocabulary that actually helps.

## Words live in groups, not alone

The biggest beginner upgrade is learning **collocations** — words that naturally go together. Native speakers don't say *"do a mistake"*; they say *"make a mistake"*. Learning the partner words makes you sound far more fluent.

Common examples:

- **make** a decision, a mistake, progress, an effort
- **do** homework, research, a favour, your best
- **heavy** rain, traffic, a heavy smoker
- **strong** coffee, opinion, accent

When you learn a new word, **always note a word that goes with it**. Learn *"make progress"*, not just *"progress"*.

## Paraphrasing: say it a different way

IELTS constantly rewards **paraphrasing** — expressing the same idea with different words. It helps in Reading (the question rarely uses the passage's exact words), and it lifts your Writing and Speaking score.

> Original: *Cars cause a lot of pollution.*
> Paraphrase: *Vehicles are a major source of air pollution.*

Notice the swaps: *cars → vehicles*, *cause → are a source of*, *a lot of → major*. You don't need to change every word — change a few, keep the meaning.

## Build a "topic bank", not a random list

IELTS topics repeat: **education, environment, health, technology, work, the city**. Instead of memorising random words, collect **5–8 useful words and phrases per topic**. For *environment* you might gather: *emissions, renewable energy, conservation, to tackle climate change, carbon footprint*.

A topic bank is powerful because the words are *ready to use* the moment that topic appears.

## A worked example: from basic to better

Take a flat sentence:

> *Technology is good and helps people in many ways.*

Improve it with collocation and paraphrasing:

1. Replace *good* with a precise phrase: *plays a vital role*.
2. Swap *helps people* for a collocation: *improves people's lives*.
3. Add a topic word: *productivity*.

> **Improved:** *Technology plays a vital role in modern life and improves people's lives by boosting productivity.*

Same idea, far stronger range — and nothing forced.

## Common beginner mistakes

- **Memorising long lists you never use.** A word you can't *use in a sentence* won't help in the exam.
- **Forcing "fancy" words.** Using *plethora* or *ameliorate* incorrectly hurts your score more than a simple correct word.
- **Ignoring spelling.** A great word spelled wrong is marked wrong in Listening and Reading.
- **Learning words with no context.** Always record the new word *inside a short example sentence* of your own.

## Try it

Choose one common IELTS topic (try *health* or *technology*). Write down five words or phrases connected to it, and for each one note a partner word it collocates with. Then write a single sentence that uses at least two of them naturally.`,
  },
]
