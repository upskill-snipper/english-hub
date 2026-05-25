// ─── IELTS Writing lessons ─────────────────────────────────────────────────
// Content for the seven WRITING units defined in ../curriculum.ts. Each lesson
// maps to the four official Writing band-descriptor criteria — Task
// Achievement/Response, Coherence & Cohesion, Lexical Resource and Grammatical
// Range & Accuracy — and teaches a method, shows a worked example, flags common
// mistakes, and ends with a "Try it" prompt that links to /ielts/writing.
//
// One lesson per writing unit (slugs are unique within the writing skill):
//   write-t1-academic · write-t1-letter · write-t2-structure · write-t2-types
//   write-coherence   · write-lexical   · write-grammar
// ────────────────────────────────────────────────────────────────────────────

import type { Lesson } from '@/lib/ielts/curriculum'

export const WRITING_LESSONS: Lesson[] = [
  // ── Unit: write-t1-academic ──────────────────────────────────────────────
  {
    id: 'write-academic-task1-data',
    skill: 'writing',
    level: 'intermediate',
    unit: 'write-t1-academic',
    title: 'Academic Task 1: describing data',
    slug: 'academic-task-1-describing-data',
    summary:
      'Open by paraphrasing, write a clear overview of the main trends, then group and compare the key figures with the right tense and comparison language.',
    estMinutes: 13,
    body: `# Academic Task 1: describing data

In Academic Task 1 you are shown a graph, table, chart, map or process and given **20 minutes** to write at least **150 words**. You are *not* asked for an opinion or for reasons — only an accurate report of what the visual shows. The single biggest score-lifter is a clear **overview**, because *Task Achievement* explicitly rewards a writer who "clearly presents an overview of main trends, differences or stages".

## The four-part method

1. **Introduction (1 sentence).** Paraphrase the question. Change the wording, not the meaning.
2. **Overview (1–2 sentences).** State the 2–3 biggest patterns — the highest and lowest points, the overall direction, the most striking difference. **No specific numbers here.**
3. **Body paragraph 1.** Describe and support one logical group of data with figures.
4. **Body paragraph 2.** Describe the second group, comparing where useful.

**Group, don't list.** A common band-5 answer crawls through every line in order. A band-7 answer *selects* and *groups* the significant data.

## Worked example

> *The chart shows the percentage of households with internet access in three countries between 2000 and 2020.*

**Introduction (paraphrase):**
> The line graph illustrates how home internet access changed in Country A, B and C over a twenty-year period from 2000.

**Overview (no numbers):**
> Overall, access rose substantially in all three countries, yet Country A consistently led throughout the period, whereas Country C, despite the fastest growth, remained the lowest.

**Body sentence (grouped + supported):**
> In 2000, just 20% of households in Country A were connected, a figure that climbed steadily to reach roughly 90% by 2020. Country B followed a similar upward path, ending some 15 percentage points behind.

Notice the verbs of change — *rose, climbed, reached* — and the comparison language — *consistently led, behind, the lowest*.

## Tense and comparison language

- **Past data** → past tense (*increased, fell*). **Projected/future data** → *is expected to / will*. **A static table or map** → present tense.
- Describe size of change: *a sharp/steady/gradual/slight* rise · *a marked/marginal* difference.
- Compare: *X was twice as high as Y · roughly three times more than · the gap widened/narrowed*.

## Common mistakes

- **No overview** — the fastest way to cap *Task Achievement* at band 5.
- **Listing every number** instead of selecting the significant ones.
- **Adding opinions or causes** ("this is because people got richer"). Report only.
- **Copying the question wording** — paraphrase to score *Lexical Resource*.
- **Mixing up percentage and percentage points** ("rose by 30%" vs "rose by 30 percentage points").

## Try it

Open a chart prompt at **[/ielts/writing](/ielts/writing)** and write only your introduction plus a two-sentence overview with **no numbers**. Read it back: could a person picture the graph from your overview alone? If yes, you have the hardest mark in the bag.`,
  },

  // ── Unit: write-t1-letter ────────────────────────────────────────────────
  {
    id: 'write-gt-task1-letters',
    skill: 'writing',
    level: 'intermediate',
    unit: 'write-t1-letter',
    title: 'General Training Task 1: letters',
    slug: 'general-training-task-1-letters',
    summary:
      'Read the bullet points as your plan, fix the tone (formal, semi-formal or informal), cover all three points, and open and close the letter correctly.',
    estMinutes: 12,
    body: `# General Training Task 1: letters

In **General Training** Task 1 you write a **letter** (at least **150 words** in **20 minutes**) in response to a situation with **three bullet points**. *Task Achievement* here is concrete: cover **all three bullets**, develop each one, and keep a **consistent tone** throughout.

## Step 1 — Decide the tone

The reader tells you the register:

| Reader | Tone | Greeting | Sign-off |
| --- | --- | --- | --- |
| A company, official, unknown name | Formal | *Dear Sir or Madam,* | *Yours faithfully,* |
| A named person you don't know well | Semi-formal | *Dear Mr Khan,* | *Yours sincerely,* |
| A friend or family member | Informal | *Dear Sam,* / *Hi Sam,* | *Best wishes, / Take care,* |

Tone must stay consistent. Mixing "I am writing to express my dissatisfaction" with "anyway, catch you soon" wrecks both *Task Achievement* and *Lexical Resource*.

## Step 2 — Turn the three bullets into three paragraphs

Each bullet becomes one developed paragraph. **State the purpose in the first line** so the reader knows why you have written.

## Worked example

> *You recently stayed in a hotel and were unhappy with your room. Write to the manager. In your letter:*
> *• explain why you were staying there • describe the problems • say what you want them to do.*

**Formal opening + purpose:**
> Dear Sir or Madam,
>
> I am writing to express my dissatisfaction with Room 214, which I occupied during a recent business trip to your hotel from 3–5 May.

**Bullet 2 — problems (developed, not listed):**
> Although the room had been booked as a quiet executive suite, I found the air-conditioning faulty and noisy, and the promised work desk was missing entirely, which made it impossible to prepare for my meetings.

**Bullet 3 — request + close:**
> I would therefore be grateful if you could refund one night's charge and confirm that the room has been repaired.
>
> I look forward to your prompt reply.
>
> Yours faithfully,
> James Reed

## Before / after — fixing weak tone

- ❌ *I want my money back because the room was rubbish.*
- ✅ *I would be grateful if you could arrange a partial refund, as the room did not meet the standard advertised.*

Same request — but the second is correctly formal, polite and exam-ready.

## Common mistakes

- **Covering only two bullets** — an automatic *Task Achievement* penalty.
- **Wrong or missing sign-off** (*Yours faithfully* with a named greeting is incorrect).
- **Under 150 words** — count, because short letters are penalised.
- **A tone that drifts** between formal and casual.
- **No clear purpose** in the opening line.

## Try it

Pick a letter prompt at **[/ielts/writing](/ielts/writing)**. Before writing, jot the **three bullets** down the margin and label the tone (formal / semi-formal / informal). Write one paragraph per bullet, then check that your greeting and sign-off match the tone you chose.`,
  },

  // ── Unit: write-t2-structure ─────────────────────────────────────────────
  {
    id: 'write-task2-structure',
    skill: 'writing',
    level: 'intermediate',
    unit: 'write-t2-structure',
    title: 'Task 2: a reliable essay structure',
    slug: 'task-2-essay-structure',
    summary:
      'A dependable four-paragraph plan — introduction, two developed body paragraphs and a conclusion — that answers any Task 2 question fully and on time.',
    estMinutes: 14,
    body: `# Task 2: a reliable essay structure

Task 2 is worth **two-thirds** of your Writing score: at least **250 words** in **40 minutes**. *Task Response* rewards an answer that addresses **every part** of the question and presents a **clear, developed position**. A fixed four-paragraph shape lets you spend your thinking time on *ideas*, not on layout.

## The four-paragraph plan

1. **Introduction (2 sentences).** Paraphrase the question, then state your clear position / what the essay will do.
2. **Body 1.** One main idea → explain it → support it with an example.
3. **Body 2.** A second main idea → explain → example.
4. **Conclusion (1–2 sentences).** Restate your position. Add nothing new.

The engine of each body paragraph is **PEEL**: **P**oint → **E**xplain → **E**xample → **L**ink back to the question.

## Worked example

> *Some people think university education should be free for all students. To what extent do you agree or disagree?*

**Introduction (paraphrase + clear position):**
> It is sometimes argued that higher education ought to be provided at no cost to every student. I strongly agree, because free access widens opportunity and ultimately benefits the wider economy.

**Body 1 with PEEL:**
> **(Point)** The clearest benefit is greater social mobility. **(Explain)** When tuition fees are removed, talented students from low-income families are no longer deterred by debt. **(Example)** In several European countries that abolished fees, enrolment among poorer households rose sharply. **(Link)** Free tuition therefore makes the system fairer, which is precisely why I support it.

Notice that the paragraph makes **one** point and develops it fully — far stronger than three points mentioned in passing.

## How to use your 40 minutes

- **5 min** — read, decide your position, jot two body ideas.
- **30 min** — write.
- **5 min** — check tense, articles, word count.

A short plan is the difference between a focused essay and one that wanders.

## Common mistakes

- **Not answering the actual question.** "To what extent…" needs a *degree* of agreement, not a neutral list.
- **No clear position** until the conclusion — costs *Task Response*.
- **Too many under-developed ideas** instead of two strong ones.
- **A conclusion that introduces a brand-new argument.**
- **Under 250 words** — penalised even if the writing is good.

## Try it

Choose a Task 2 prompt at **[/ielts/writing](/ielts/writing)** and spend **only five minutes** writing your introduction plus the *first sentence* (the Point) of each body paragraph. If those three sentences already make your whole argument clear, the essay will almost write itself.`,
  },

  // ── Unit: write-t2-types ─────────────────────────────────────────────────
  {
    id: 'write-task2-question-types',
    skill: 'writing',
    level: 'advanced',
    unit: 'write-t2-types',
    title: 'Task 2: matching your answer to the question type',
    slug: 'task-2-question-types',
    summary:
      'Opinion, discussion, problem–solution, advantage–disadvantage and two-part questions each demand a different shape — recognise the type before you plan.',
    estMinutes: 13,
    body: `# Task 2: matching your answer to the question type

The fastest way to lose *Task Response* marks is to write a good essay that answers a **different** question. Every Task 2 prompt belongs to a recognisable type, and each type needs a slightly different plan. Learn to spot the instruction line.

## The five common types

| Instruction signal | Type | What the body must do |
| --- | --- | --- |
| *To what extent do you agree or disagree?* | **Opinion** | State and defend one consistent position |
| *Discuss both views and give your opinion.* | **Discussion** | One view per paragraph, **plus** your own opinion |
| *What problems…? What solutions…?* | **Problem–solution** | One paragraph of problems, one of solutions |
| *Do the advantages outweigh the disadvantages?* | **Advantage–disadvantage** | Weigh both, then **judge** which is greater |
| Two separate questions | **Two-part** | Answer **each** question in its own paragraph |

## The trap: discussion vs opinion

In a **discussion** essay you must cover *both* views fairly *and* give your own — forgetting your opinion caps the band. In an **opinion** essay you should *not* sit on the fence.

## Worked example — a discussion essay

> *Some believe children should start school at six; others say four is better. Discuss both views and give your own opinion.*

**Introduction (frame both + flag your view):**
> Opinions differ over the ideal age to begin formal schooling. While some favour an early start at four, I will argue that beginning at six, as others suggest, better suits children's development.

**Body 1 — the "early start" view (reported, then weighed):**
> Supporters of starting at four argue that young children absorb language and routines quickly. This is a reasonable point, yet research suggests that very early formal learning can increase anxiety.

**Body 2 — the "later start" view + your opinion fused:**
> I therefore side with those who favour age six, since an extra two years of play-based learning builds the confidence and social skills a classroom demands.

The opinion is woven through, not bolted on at the end.

## "Outweigh" needs a verdict

For *Do the advantages outweigh the disadvantages?* you must answer **yes or no**, not merely list both. End with: *On balance, the benefits clearly outweigh the drawbacks because…*

## Common mistakes

- Treating a **discussion** question as an **opinion** essay (or vice-versa).
- Answering only **one** half of a two-part question.
- Listing advantages and disadvantages **without judging** which is greater.
- A vague position that shifts between paragraphs.

## Try it

At **[/ielts/writing](/ielts/writing)**, read three different Task 2 prompts and — *without writing the essay* — label each one by type and note in one line what its body paragraphs must contain. Spotting the type in ten seconds is a skill worth more than any memorised phrase.`,
  },

  // ── Unit: write-coherence ────────────────────────────────────────────────
  {
    id: 'write-coherence-cohesion',
    skill: 'writing',
    level: 'advanced',
    unit: 'write-coherence',
    title: 'Coherence & cohesion that reads naturally',
    slug: 'coherence-and-cohesion',
    summary:
      'Strong paragraphing with one idea each, plus linking that flows from meaning — referencing and substitution, not a checklist of "firstly, moreover".',
    estMinutes: 12,
    body: `# Coherence & cohesion that reads naturally

*Coherence & Cohesion* is one of the four equal criteria, and it is where many candidates accidentally **lower** their score by over-using linking words. The descriptors reward "a clear central topic in each paragraph" and cohesion that "attracts no attention" — in other words, linking you barely notice.

## Coherence = logical flow

- **One central idea per paragraph.** If you can't summarise a paragraph in a few words, it is doing two jobs.
- **A topic sentence first**, then support that develops *that* idea only.
- A logical order across paragraphs, so the reader is never surprised.

## Cohesion = the glue

Three tools, used lightly:

1. **Linking words** — *however, as a result, in addition* — but **sparingly**.
2. **Referencing** — *this, these, such, it, which* — to avoid repeating nouns.
3. **Substitution** — *the former, the latter, this approach, doing so*.

## Worked example — before / after

**Before (over-linked and choppy):**
> Firstly, cars cause pollution. Moreover, cars cause traffic. Furthermore, cars are expensive. In addition, public transport is cheaper. Therefore, people should use public transport.

Every sentence opens with a connector and stands alone — the descriptor calls this "mechanical" cohesion.

**After (flows from meaning, uses referencing):**
> Private cars create two clear problems: they pollute the air and they clog city roads. Both issues, together with the high cost of fuel and parking, make driving an expensive habit. Public transport avoids these drawbacks, which is why cities should encourage it.

Notice *Both issues* and *these drawbacks* — **referencing** stitches the ideas together so smoothly that few explicit connectors are needed.

## A quick paragraphing check

Read only the **first sentence** of each paragraph. Together, they should read like a summary of your whole answer. If they don't, your topic sentences are weak.

## Common mistakes

- **A linking word at the start of every sentence** (*Firstly… Secondly… Moreover…*).
- **Using connectors wrongly** — *Moreover* between two *contrasting* ideas, for instance.
- **One-sentence paragraphs**, or one giant block with no breaks.
- **Repeating the same noun** ten times instead of using *it / this / these*.
- **No topic sentence**, so the reader hunts for the point.

## Try it

Take any paragraph you've written at **[/ielts/writing](/ielts/writing)** and delete every linking word. Read it again: does it still flow? Add back only the **two or three** connectors that the meaning genuinely needs, and use *this/these* to replace a repeated noun. Lighter linking almost always reads better.`,
  },

  // ── Unit: write-lexical ──────────────────────────────────────────────────
  {
    id: 'write-lexical-resource',
    skill: 'writing',
    level: 'advanced',
    unit: 'write-lexical',
    title: 'Lexical resource: precision over "big words"',
    slug: 'lexical-resource',
    summary:
      'Range is rewarded for being precise and natural — strong collocation and accurate word choice, not rare words forced into the wrong place.',
    estMinutes: 13,
    body: `# Lexical resource: precision over "big words"

*Lexical Resource* measures the **range, precision and naturalness** of your vocabulary, including **collocation**. The most common misunderstanding is that long, rare words raise your band. They don't — a misused "big word" is penalised as an error, while a precise, well-collocated everyday word is rewarded. Aim for the *right* word, used naturally.

## What actually scores

- **Collocation** — words that naturally go together: *make progress*, *a heavy burden*, *widely regarded*, *pose a threat*.
- **Precision** — the exact word for the meaning: *decline* vs *plummet* vs *dip*.
- **Topic vocabulary** — *tuition fees, carbon emissions, urban sprawl* used correctly.
- **Paraphrasing** — re-expressing the prompt's words without changing the meaning.

## Worked example — before / after

**Before (forced rare words, wrong collocation):**
> Nowadays, the utilisation of automobiles engenders a plethora of catastrophic predicaments for the ecosystem.

This is over-written and the collocations are wrong — examiners read it as straining, not strong.

**After (precise, natural, well-collocated):**
> The growing use of private cars poses a serious threat to the environment, particularly through air pollution.

*Poses a threat* and *serious* are natural collocations; *growing use* is precise. It reads like a confident user of English — exactly what band 7+ describes.

## Paraphrasing without distortion

> Prompt: *Many people believe technology has made us less social.*
> ✅ *It is widely argued that digital devices have weakened face-to-face interaction.*
> ❌ *A myriad of individuals conjecture that gadgets diminish our sociability.* (unnatural)

Change **structure and word class**, not just swap in a thesaurus synonym.

## Build collocation, not word lists

Learn words **in chunks**: not "environment" alone, but *protect the environment*, *environmental damage*, *environmentally friendly*. Chunks are what make writing sound natural.

## Common mistakes

- **Thesaurus abuse** — swapping a simple word for a rare one that doesn't fit.
- **Wrong collocation** — *do a mistake*, *make a research*, *strong rain*.
- **Repeating the same word** when a precise synonym exists (*good… good… good*).
- **Memorised phrases dropped in regardless** of whether they fit the topic.
- **Spelling and word-form slips** (*economy / economic / economical* confused).

## Try it

At **[/ielts/writing](/ielts/writing)**, write one body paragraph, then underline every noun. For each, ask: *what verb or adjective naturally goes with this?* Replace any awkward pairing with a real collocation (*a problem → tackle a problem*; *pollution → reduce pollution*). Natural pairings lift this score faster than any rare word ever will.`,
  },

  // ── Unit: write-grammar ──────────────────────────────────────────────────
  {
    id: 'write-grammar-range-accuracy',
    skill: 'writing',
    level: 'mastery',
    unit: 'write-grammar',
    title: 'Grammatical range & accuracy: complex but correct',
    slug: 'grammatical-range-and-accuracy',
    summary:
      'Higher bands need a mix of complex structures that stay error-free — relative, conditional and concessive clauses, with controlled punctuation.',
    estMinutes: 14,
    body: `# Grammatical range & accuracy: complex but correct

*Grammatical Range & Accuracy* rewards two things at once: a **variety** of sentence structures **and** the **accuracy** with which you use them. Band 7 needs "a variety of complex structures" and "frequent error-free sentences"; band 8 adds that the majority of sentences are error-free. Range without accuracy — or accuracy without range — both cap your score.

## Build range with three complex structures

1. **Relative clauses** — add detail with *which, who, where, whose*.
   > Cities **that invest in cycling** see fewer traffic jams.
2. **Conditional sentences** — show consequence.
   > **If governments subsidised public transport,** fewer people **would drive**.
3. **Concessive / adverbial clauses** — concede or contrast.
   > **Although electric cars are cleaner,** they remain expensive to produce.

Mixing these with some short simple sentences gives the *variety* examiners look for. Variety does **not** mean every sentence is long — controlled simple sentences add clarity and punch.

## Worked example — before / after

**Before (all simple sentences, repetitive):**
> Online learning is popular. It is convenient. Students can study at home. But it has problems. Students feel isolated.

Accurate, but flat — this is a band-5/6 profile because the *range* is narrow.

**After (varied, complex, still accurate):**
> Online learning has become popular because it is convenient, allowing students to study from home. However, although this flexibility is valuable, it can leave learners feeling isolated, which may reduce their motivation over time.

One concessive clause (*although*), one relative clause (*which may reduce*), one reason clause (*because*) — varied **and** error-free.

## Accuracy: the high-frequency fixes

- **Subject–verb agreement** — *The number of cars **is** rising* (not *are*).
- **Articles** — *the environment*, *a problem*, *Ø society in general*.
- **Tense consistency** — don't slide between past and present mid-paragraph.
- **Punctuating clauses** — use a comma after a fronted clause (*Although it is cheap, …*); never join two sentences with only a comma (comma splice).

## Common mistakes

- **Run-ons / comma splices** — *Cars pollute, this harms cities.* (needs a full stop, semicolon, or connector).
- **Over-long sentences** that lose control of agreement and punctuation.
- **Only simple sentences** — safe, but it caps the *range* mark.
- **Article and preposition slips** repeated throughout.
- **Misused semicolons** — they join two *complete* sentences, not fragments.

## Try it

At **[/ielts/writing](/ielts/writing)**, write a short paragraph, then rewrite it deliberately combining pairs of sentences with *which*, *although* and *if*. Read each new sentence aloud and check three things: agreement, tense, and the comma after any fronted clause. Range that stays correct is the whole game at band 7 and above.`,
  },
]
