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
    estMinutes: 15,
    body: `# Academic Task 1: describing data

In Academic Task 1 you are shown a graph, table, chart, map or process and given **20 minutes** to write at least **150 words**. You are *not* asked for an opinion or for reasons — only an accurate, well-organised report of what the visual shows. Task 1 is worth one-third of your Writing score, and the single biggest score-lifter is a clear **overview**, because *Task Achievement* explicitly rewards a writer who "clearly presents an overview of main trends, differences or stages". Get the overview right and you have already secured the hardest mark on the page.

## The four-part method

1. **Introduction (1 sentence).** Paraphrase the question. Change the wording, not the meaning.
2. **Overview (1–2 sentences).** State the 2–3 biggest patterns — the highest and lowest points, the overall direction, the most striking difference. **No specific numbers here.**
3. **Body paragraph 1.** Describe and support one logical group of data with figures.
4. **Body paragraph 2.** Describe the second group, comparing where useful.

**Group, don't list.** A common band-5 answer crawls through every line in order ("In 2000 it was 20, in 2001 it was 22, in 2002…"). A band-7 answer *selects* and *groups* the significant data — the biggest, the smallest, the fastest-changing — and leaves the trivial detail out.

## Worked example 1 — a line graph

> *The chart shows the percentage of households with internet access in three countries between 2000 and 2020.*

**Introduction (paraphrase):**
> The line graph illustrates how home internet access changed in Country A, B and C over a twenty-year period from 2000.

**Overview (no numbers):**
> Overall, access rose substantially in all three countries, yet Country A consistently led throughout the period, whereas Country C, despite the fastest growth, remained the lowest.

**Body sentence (grouped + supported):**
> In 2000, just 20% of households in Country A were connected, a figure that climbed steadily to reach roughly 90% by 2020. Country B followed a similar upward path, ending some 15 percentage points behind.

Notice the verbs of change — *rose, climbed, reached* — and the comparison language — *consistently led, behind, the lowest*. **Why this scores:** the overview alone earns *Task Achievement* (it captures the main trends without a single number); the grouping of A and B together shows *Coherence & Cohesion*; *climbed steadily* and *upward path* show *Lexical Resource*; and *a figure that climbed* (a relative clause) plus the accurate past tense show *Grammatical Range & Accuracy*.

## Worked example 2 — a process or map

A process diagram or map needs a different toolkit. Here the overview reports the **number of stages** and the **start/end points**, not a trend.

> *The diagram shows how glass bottles are recycled.*

**Overview (no numbers, no opinion):**
> Overall, the recycling of glass is a linear process comprising six main stages, beginning with the collection of used bottles and ending with the sale of newly formed products.

**Body sentence (passive + sequencers):**
> In the first stage, used bottles are collected from households and transported to a processing plant, where they are cleaned and sorted by colour. The sorted glass is then crushed and melted in a furnace before being moulded into new bottles.

**Why this scores:** processes reward the **passive voice** (*are collected, are cleaned, is then crushed*) because the agent is unimportant, and sequencing language (*in the first stage, then, before being…*) carries the *Coherence* mark. For a map, you would instead use change-over-time language (*the woodland was replaced by housing*, *a new road was constructed to the north*).

## Tense, comparison and approximation language

- **Past data** → past tense (*increased, fell*). **Projected/future data** → *is expected to / is projected to / will*. **A static table, map or process** → present tense (or past passive for a "before/after" map).
- Describe size of change: *a sharp/steady/gradual/slight* rise · *a marked/marginal* difference · *to rocket / to plummet* (large) vs *to edge up / to dip* (small).
- Compare: *X was twice as high as Y · roughly three times more than · the gap widened/narrowed · A outstripped B*.
- Approximate, because precision is rarely the point: *just under, approximately, in the region of, slightly more than*.

> **Model collocations to bank:** *a steady upward trend · to reach a peak of · to level off at · to fluctuate around · followed by a sharp decline · accounted for the largest proportion.*

## Common mistakes

- **No overview** — the fastest way to cap *Task Achievement* at band 5, no matter how accurate the detail is.
- **Listing every number** instead of selecting the significant ones.
- **Adding opinions or causes** ("this is because people got richer"). Report only — speculation is penalised here.
- **Copying the question wording** — paraphrase to score *Lexical Resource*.
- **Mixing up percentage and percentage points** ("rose by 30%" vs "rose by 30 percentage points") — a precision error examiners notice.

## Try it

Open a chart prompt at **[/ielts/writing](/ielts/writing)** and write only your introduction plus a two-sentence overview with **no numbers**. Read it back: could a person picture the graph from your overview alone? If yes, you have the hardest mark in the bag. Then add one body sentence that *groups* two data sets and supports them with a figure each — and check your tense matches the time frame of the visual.`,
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
    estMinutes: 14,
    body: `# General Training Task 1: letters

In **General Training** Task 1 you write a **letter** (at least **150 words** in **20 minutes**) in response to a situation with **three bullet points**. *Task Achievement* here is concrete and easy to measure: cover **all three bullets**, develop each one, and keep a **consistent tone** throughout. There is no overview to write and no data to read — the marks live in *register* (matching your language to the reader) and in *fully developing* each prompt rather than naming it in passing.

## Step 1 — Decide the tone

The reader tells you the register. Read who you are writing to before anything else:

| Reader | Tone | Greeting | Sign-off |
| --- | --- | --- | --- |
| A company, official, unknown name | Formal | *Dear Sir or Madam,* | *Yours faithfully,* |
| A named person you don't know well | Semi-formal | *Dear Mr Khan,* | *Yours sincerely,* |
| A friend or family member | Informal | *Dear Sam,* / *Hi Sam,* | *Best wishes, / Take care,* |

Tone must stay consistent from greeting to sign-off. Mixing "I am writing to express my dissatisfaction" with "anyway, catch you soon" wrecks both *Task Achievement* and *Lexical Resource*, because *Lexical Resource* in GT explicitly rewards "an awareness of style and register".

## Step 2 — Turn the three bullets into three paragraphs

Each bullet becomes one developed paragraph. **State the purpose in the first line** so the reader knows why you have written. Then develop each bullet with a reason, a consequence or a small detail — never a bare statement.

## Worked example 1 — a formal complaint

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

**Why this scores:** the first line names the purpose; *Although the room had been booked…* combines a concessive clause with the past perfect (*Grammatical Range*); *express my dissatisfaction* and *I would be grateful if you could* are correctly formal collocations (*Lexical Resource / register*); and all three bullets are not just touched but *developed* with a consequence (*made it impossible to prepare*).

## Worked example 2 — an informal letter to a friend

Register changes everything. The same skill, a different voice:

> *A friend is going to visit your city. Write a letter: • say how pleased you are • suggest what to do • offer practical help.*

**Informal opening + warmth:**
> Hi Maya,
>
> I was thrilled to hear you're finally coming to visit — it's been far too long, and I can't wait to show you around!

**Suggestion + offer (contracted, chatty, still organised):**
> While you're here, we should definitely check out the old harbour and grab dinner at this tiny noodle place I've found. Don't bother booking a hotel, by the way — you're more than welcome to crash at mine.

**Why this scores:** contractions (*you're, can't, I've*), phrasal verbs (*show you around, check out, crash at mine*) and exclamation all suit an informal register — yet the three bullets are still covered in clear, separate moves. Notice it would be *wrong* to write "I am writing to inform you of my pleasure" to a friend: that mismatch alone caps the register mark.

## Before / after — fixing weak tone

- ❌ *I want my money back because the room was rubbish.*
- ✅ *I would be grateful if you could arrange a partial refund, as the room did not meet the standard advertised.*

Same request — but the second is correctly formal, polite and exam-ready.

> **Formal model phrases to bank:** *I am writing to enquire about… · I would appreciate it if you could… · Please find enclosed… · I would be grateful for your prompt attention to this matter.*
> **Informal model phrases:** *Just a quick note to… · I was wondering if you fancied… · Let me know what you think · Anyway, I'd better dash.*

## Common mistakes

- **Covering only two bullets** — an automatic *Task Achievement* penalty, even if those two are excellent.
- **Wrong or missing sign-off** (*Yours faithfully* with a named greeting is incorrect; pair *faithfully* with *Sir or Madam* and *sincerely* with a name).
- **Under 150 words** — count, because short letters are penalised.
- **A tone that drifts** between formal and casual mid-letter.
- **No clear purpose** in the opening line, so the reader hunts for why you wrote.

## Try it

Pick a letter prompt at **[/ielts/writing](/ielts/writing)**. Before writing, jot the **three bullets** down the margin and label the tone (formal / semi-formal / informal). Write one paragraph per bullet, then check that your greeting and sign-off match the tone you chose — and that each bullet has a reason or detail attached, not just a sentence naming it.`,
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
    estMinutes: 15,
    body: `# Task 2: a reliable essay structure

Task 2 is worth **two-thirds** of your Writing score: at least **250 words** in **40 minutes**. *Task Response* rewards an answer that addresses **every part** of the question and presents a **clear, developed position** that is sustained from the first paragraph to the last. A fixed four-paragraph shape is your friend, because it lets you spend your scarce thinking time on *ideas* rather than on layout — the structure becomes automatic, and your brain is free to argue.

## The four-paragraph plan

1. **Introduction (2 sentences).** Paraphrase the question, then state your clear position / what the essay will do.
2. **Body 1.** One main idea → explain it → support it with an example.
3. **Body 2.** A second main idea → explain → example.
4. **Conclusion (1–2 sentences).** Restate your position. Add nothing new.

The engine of each body paragraph is **PEEL**: **P**oint → **E**xplain → **E**xample → **L**ink back to the question. PEEL guarantees *development*, which is exactly what separates a band-5 paragraph (a claim, then a list) from a band-7 paragraph (a claim that is reasoned through to a conclusion).

## Worked example 1 — building one body paragraph with PEEL

> *Some people think university education should be free for all students. To what extent do you agree or disagree?*

**Introduction (paraphrase + clear position):**
> It is sometimes argued that higher education ought to be provided at no cost to every student. I strongly agree, because free access widens opportunity and ultimately benefits the wider economy.

**Body 1 with PEEL:**
> **(Point)** The clearest benefit is greater social mobility. **(Explain)** When tuition fees are removed, talented students from low-income families are no longer deterred by debt and can pursue degrees that would otherwise feel financially reckless. **(Example)** In several European countries that abolished fees, enrolment among poorer households rose sharply. **(Link)** Free tuition therefore makes the system fairer, which is precisely why I support it.

**Why this scores:** the paragraph makes **one** point and develops it fully — far stronger than three points mentioned in passing. The *Explain* step adds the causal reasoning (*no longer deterred by debt → can pursue degrees*) that earns *Task Response*; *deterred by debt* and *social mobility* are precise collocations (*Lexical Resource*); and the *Link* sentence ties the idea back to the question word *agree*.

## Worked example 2 — the introduction and conclusion as a frame

Your introduction makes a promise; your conclusion keeps it. They should mirror each other without repeating the same words.

**Introduction (two clean moves — paraphrase, then thesis):**
> It is sometimes argued that higher education ought to be provided at no cost to every student. I strongly agree, because free access widens opportunity and strengthens the economy.

**Conclusion (restate the same position, fresh wording, no new idea):**
> In conclusion, although free tuition is expensive to fund, the gains in fairness and long-term economic productivity make it, in my view, clearly worthwhile.

**Why this scores:** the conclusion restates the thesis (*free tuition is worthwhile*) in **new language** (*gains in fairness and long-term economic productivity* rather than *widens opportunity*). It introduces no fresh argument — which would reopen a debate you have no space to develop — and the concessive *although… expensive to fund* shows you have weighed the cost, lifting *Task Response* and *Grammatical Range* together.

> **Useful framing phrases:** *It is widely argued that… · There is no doubt that… · I would argue that… · On balance… · In my view… · The clearest benefit / drawback is…*

## How to use your 40 minutes

- **5 min** — read, decide your position, jot two body ideas (just the *Points*).
- **30 min** — write, one PEEL paragraph at a time.
- **5 min** — check tense, articles, subject–verb agreement, and word count.

A short plan is the difference between a focused essay and one that wanders into the conclusion still undecided.

## Common mistakes

- **Not answering the actual question.** "To what extent…" needs a *degree* of agreement, not a neutral list of pros and cons.
- **No clear position** until the conclusion — costs *Task Response*, because the reader cannot follow an argument that hasn't been stated.
- **Too many under-developed ideas** instead of two strong, fully reasoned ones.
- **A conclusion that introduces a brand-new argument.**
- **Under 250 words** — penalised even if the writing is good; aim for roughly 270–290 to be safe.

## Try it

Choose a Task 2 prompt at **[/ielts/writing](/ielts/writing)** and spend **only five minutes** writing your introduction plus the *first sentence* (the Point) of each body paragraph. If those three sentences already make your whole argument clear, the essay will almost write itself — then expand each Point into a full PEEL paragraph.`,
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
    estMinutes: 14,
    body: `# Task 2: matching your answer to the question type

The fastest way to lose *Task Response* marks is to write a good essay that answers a **different** question. Every Task 2 prompt belongs to a recognisable type, and each type needs a slightly different plan and conclusion. The first thirty seconds of the exam should be spent reading the **instruction line** and naming the type — get this wrong and even brilliant English is capped, because *Task Response* measures whether you answered *the question that was asked*.

## The five common types

| Instruction signal | Type | What the body must do |
| --- | --- | --- |
| *To what extent do you agree or disagree?* | **Opinion** | State and defend one consistent position |
| *Discuss both views and give your opinion.* | **Discussion** | One view per paragraph, **plus** your own opinion |
| *What problems…? What solutions…?* | **Problem–solution** | One paragraph of problems, one of solutions |
| *Do the advantages outweigh the disadvantages?* | **Advantage–disadvantage** | Weigh both, then **judge** which is greater |
| Two separate questions | **Two-part** | Answer **each** question in its own paragraph |

## The trap: discussion vs opinion

In a **discussion** essay you must cover *both* views fairly *and* give your own — forgetting your opinion caps the band. In an **opinion** essay you should *not* sit on the fence: a wobbling "there are good points on both sides" answer to *To what extent do you agree?* fails to present the clear position the type demands.

## Worked example 1 — a discussion essay

> *Some believe children should start school at six; others say four is better. Discuss both views and give your own opinion.*

**Introduction (frame both + flag your view):**
> Opinions differ over the ideal age to begin formal schooling. While some favour an early start at four, I will argue that beginning at six, as others suggest, better suits children's development.

**Body 1 — the "early start" view (reported, then weighed):**
> Supporters of starting at four argue that young children absorb language and routines quickly. This is a reasonable point, yet research suggests that very early formal learning can increase anxiety.

**Body 2 — the "later start" view + your opinion fused:**
> I therefore side with those who favour age six, since an extra two years of play-based learning builds the confidence and social skills a classroom demands.

**Why this scores:** both views are reported fairly (*Supporters argue… / those who favour age six*) **and** the writer's opinion is explicit and consistent (*I will argue… I therefore side with…*). The opinion is woven through, not bolted on at the end — and *This is a reasonable point, yet…* is the concessive move examiners reward in *Task Response* and *Grammatical Range* at once.

## Worked example 2 — an advantage–disadvantage essay that judges

> *More and more people work from home. Do the advantages outweigh the disadvantages?*

**Body sentences (one of each, then the verdict the type requires):**
> The principal advantage is flexibility: without a commute, employees reclaim time and often report higher productivity. The clearest drawback, by contrast, is isolation, since remote workers can lose the informal contact that builds teams.

**Conclusion (an explicit verdict — not a fence-sit):**
> On balance, I believe the advantages outweigh the disadvantages, because the gains in flexibility and time are concrete and daily, whereas the drawback of isolation can be managed through occasional in-person meetings.

**Why this scores:** the question asks *Do the advantages outweigh…?*, so a list of pros and cons is not enough — the conclusion delivers a **clear judgement** (*the advantages outweigh… because…*) and *justifies* it. *On balance* and *by contrast* are precise discourse markers, and the comparison of "concrete and daily" gains against a "manageable" drawback shows genuine weighing.

> **Type-signalling phrases:** *I firmly believe… (opinion) · While some claim…, others contend… (discussion) · A major cause of this is… / One effective solution would be… (problem–solution) · The benefits outweigh the drawbacks because… (advantage–disadvantage).*

## "Outweigh" needs a verdict

For *Do the advantages outweigh the disadvantages?* you must answer **yes or no**, not merely list both. End with a sentence like: *On balance, the benefits clearly outweigh the drawbacks because…*

## Common mistakes

- Treating a **discussion** question as an **opinion** essay (or vice-versa).
- Answering only **one** half of a two-part question.
- Listing advantages and disadvantages **without judging** which is greater.
- A vague position that shifts between paragraphs.
- Misreading a *causes/solutions* prompt as a *for/against* debate.

## Try it

At **[/ielts/writing](/ielts/writing)**, read three different Task 2 prompts and — *without writing the essay* — label each one by type and note in one line what its body paragraphs and conclusion must contain. Spotting the type in ten seconds is a skill worth more than any memorised phrase.`,
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
    estMinutes: 13,
    body: `# Coherence & cohesion that reads naturally

*Coherence & Cohesion* is one of the four equal criteria, and it is where many candidates accidentally **lower** their score by over-using linking words. The band descriptors reward "a clear central topic in each paragraph" and cohesion that "attracts no attention" — in other words, linking you barely notice. The paradox of this criterion is that the harder you visibly *try* to link, with stacked *Firstly… Moreover… In addition…*, the more mechanical and lower-band your writing sounds.

## Coherence = logical flow

- **One central idea per paragraph.** If you can't summarise a paragraph in a few words, it is doing two jobs and should be split.
- **A topic sentence first**, then support that develops *that* idea only.
- A logical order across paragraphs, so the reader is never surprised by where you go next.

## Cohesion = the glue

Three tools, used lightly:

1. **Linking words** — *however, as a result, in addition* — but **sparingly**, and matched to meaning.
2. **Referencing** — *this, these, such, it, which* — to avoid repeating nouns.
3. **Substitution** — *the former, the latter, this approach, doing so*.

## Worked example 1 — before / after

**Before (over-linked and choppy):**
> Firstly, cars cause pollution. Moreover, cars cause traffic. Furthermore, cars are expensive. In addition, public transport is cheaper. Therefore, people should use public transport.

Every sentence opens with a connector and stands alone — the descriptor calls this "mechanical" cohesion, and it actively caps the band.

**After (flows from meaning, uses referencing):**
> Private cars create two clear problems: they pollute the air and they clog city roads. Both issues, together with the high cost of fuel and parking, make driving an expensive habit. Public transport avoids these drawbacks, which is why cities should encourage it.

**Why this scores:** *Both issues* and *these drawbacks* are **referencing** — they point back to ideas already named, stitching the sentences together so smoothly that few explicit connectors are needed. The single relative clause *which is why cities should encourage it* links cause to recommendation without a clunky *Therefore*. The cohesion now "attracts no attention", which is the band-7-plus standard.

## Worked example 2 — building one cohesive paragraph from a topic sentence

Coherence starts with a strong topic sentence that the rest of the paragraph obeys.

> **(Topic sentence)** Remote working has reshaped the modern office in ways few predicted. **(Develops the same idea)** Where teams once gathered in one building, many now coordinate across time zones, relying on video calls and shared documents. **(Referencing keeps it tight)** This shift has obvious benefits, yet it also raises a question the old model never had to ask: how do colleagues build trust when they rarely meet? **(Closes on the same idea)** Answering that question is now central to how companies are run.

**Why this scores:** every sentence serves the one idea announced in the topic sentence (*remote working reshaped the office*). *This shift* and *that question* reference earlier content instead of repeating nouns; *yet* carries a genuine contrast; and the paragraph would summarise in a single phrase — the test of true coherence.

> **Cohesive devices that read naturally:** *this trend · such an approach · the former / the latter · doing so · as a result · by contrast · which means that · a problem of this kind.*

## Worked example 3 — referencing that stays clear

Referencing words (*this, it, these, such*) are powerful, but a vague *this* can confuse the reader — and *Coherence* is about being easy to follow, so an unclear reference costs marks.

> **Unclear:** *Governments are cutting funding and universities are raising fees. This is a serious problem.* — (Which *this*? The cuts, the fees, or both?)
> **Clear:** *Governments are cutting funding and, in response, universities are raising fees. **This combination of pressures** is putting a degree out of reach for many students.*

**Why this scores:** adding a **summary noun** after *this* — *this combination of pressures*, *this trend*, *this approach* — points the reader to exactly what you mean. The technique is sometimes called a "signposting noun", and using it well is a clear marker of band-7-plus cohesion: you link ideas *and* keep the link transparent.

## A quick paragraphing check

Read only the **first sentence** of each paragraph. Together, they should read like a summary of your whole answer. If they don't, your topic sentences are weak and the essay lacks an overall thread.

## Common mistakes

- **A linking word at the start of every sentence** (*Firstly… Secondly… Moreover…*).
- **Using connectors wrongly** — *Moreover* between two *contrasting* ideas, or *In conclusion* mid-essay.
- **One-sentence paragraphs**, or one giant block with no breaks.
- **Repeating the same noun** ten times instead of using *it / this / these*.
- **No topic sentence**, so the reader hunts for the point of the paragraph.

## Try it

Take any paragraph you've written at **[/ielts/writing](/ielts/writing)** and delete every linking word. Read it again: does it still flow? Add back only the **two or three** connectors that the meaning genuinely needs, and use *this/these* to replace a repeated noun. Then read just your topic sentences in sequence — do they tell the whole story? Lighter linking and strong topic sentences almost always read better.`,
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
    estMinutes: 14,
    body: `# Lexical resource: precision over "big words"

*Lexical Resource* measures the **range, precision and naturalness** of your vocabulary, including **collocation**. The most common and most expensive misunderstanding is that long, rare words raise your band. They don't — a misused "big word" is penalised as an error, while a precise, well-collocated everyday word is rewarded. The band-8 descriptor talks about using "uncommon lexical items… with **only occasional inaccuracies in word choice**"; the route there is the *right* word, used naturally, not the rarest word you can find.

## What actually scores

- **Collocation** — words that naturally go together: *make progress*, *a heavy burden*, *widely regarded*, *pose a threat*.
- **Precision** — the exact word for the meaning: *decline* vs *plummet* vs *dip*.
- **Topic vocabulary** — *tuition fees, carbon emissions, urban sprawl* used correctly.
- **Paraphrasing** — re-expressing the prompt's words without changing the meaning.

## Worked example 1 — before / after

**Before (forced rare words, wrong collocation):**
> Nowadays, the utilisation of automobiles engenders a plethora of catastrophic predicaments for the ecosystem.

This is over-written and the collocations are wrong (*engender predicaments* is not English) — examiners read it as straining, not strong, and mark the misfires as errors.

**After (precise, natural, well-collocated):**
> The growing use of private cars poses a serious threat to the environment, particularly through air pollution.

**Why this scores:** *poses a threat* and *a serious threat* are natural collocations; *growing use* is precise; *particularly through* narrows the claim accurately. It reads like a confident user of English — exactly what band 7+ describes — and not one word is wasted on display.

## Worked example 2 — precision and the right verb of degree

The same idea can be expressed at very different levels of precision. Watch the verb do the work:

> **Vague (band 5–6):** *A lot of fish in the sea have become less because of fishing.*
> **Precise (band 7–8):** *Fish stocks have declined sharply as a result of overfishing, and some species are now on the brink of collapse.*

**Why this scores:** *fish stocks* (the exact term), *declined sharply* (a verb of degree + adverb), *overfishing* (a single precise topic word replacing "a lot of fishing"), and the idiom *on the brink of collapse* together demonstrate range *and* accuracy. Crucially, each item is the *natural* choice a fluent writer would reach for — nothing is forced.

## Worked example 3 — synonyms are not interchangeable

A thesaurus lists "synonyms", but in English the shade of meaning and the typical context differ. *Big*, *large*, *vast*, *substantial* and *hefty* are not swappable at will:

> ✅ *a substantial increase* · *a vast desert* · *a large proportion* · *a hefty fine*
> ❌ *a hefty desert* · *a vast fine* · *a hefty proportion*

The point for *Lexical Resource* is that range means knowing **which** near-synonym fits **where**, not owning the longest list. *A substantial increase in tuition fees* scores; *a hefty increase in tuition fees* sounds informal and slightly off; *a voluminous increase* is simply wrong. When you meet a new "fancy" word, learn the two or three nouns it actually pairs with before you ever use it.

## Paraphrasing without distortion

> Prompt: *Many people believe technology has made us less social.*
> ✅ *It is widely argued that digital devices have weakened face-to-face interaction.*
> ❌ *A myriad of individuals conjecture that gadgets diminish our sociability.* (unnatural)

Change **structure and word class**, not just swap in a thesaurus synonym. The good version recasts *many people believe* as the passive *it is widely argued* and *less social* as *weakened face-to-face interaction* — a structural change, not a word-swap. A safe routine: keep the **key topic noun** (here, broadly, *technology / digital devices*) and change the **verb and the framing** around it. Over-paraphrasing the topic word itself is where meaning gets lost and accuracy marks disappear.

## Build collocation, not word lists

Learn words **in chunks**: not "environment" alone, but *protect the environment*, *environmental damage*, *environmentally friendly*. Chunks are what make writing sound natural, because native usage *is* collocation.

> **High-value academic collocations to bank:** *play a vital role · have a profound impact on · pose a significant threat · place a strain on · strike a balance between · address / tackle an issue · widely regarded as · a growing body of evidence · raise awareness of.*

## Common mistakes

- **Thesaurus abuse** — swapping a simple word for a rare one that doesn't fit (*good → propitious*).
- **Wrong collocation** — *do a mistake*, *make a research*, *strong rain*, *say a lie*.
- **Repeating the same word** when a precise synonym exists (*good… good… good*).
- **Memorised phrases dropped in regardless** of whether they fit the topic.
- **Spelling and word-form slips** (*economy / economic / economical* confused).

## Try it

At **[/ielts/writing](/ielts/writing)**, write one body paragraph, then underline every noun. For each, ask: *what verb or adjective naturally goes with this?* Replace any awkward pairing with a real collocation (*a problem → tackle a problem*; *pollution → reduce pollution*; *a role → play a role*). Natural pairings lift this score faster than any rare word ever will.`,
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
    estMinutes: 15,
    body: `# Grammatical range & accuracy: complex but correct

*Grammatical Range & Accuracy* rewards two things at once: a **variety** of sentence structures **and** the **accuracy** with which you use them. Band 7 needs "a variety of complex structures" and "frequent error-free sentences"; band 8 adds that "the majority of sentences are error-free". Range without accuracy — or accuracy without range — both cap your score, so the goal is *ambitious grammar that you can still control*.

## Build range with three complex structures

1. **Relative clauses** — add detail with *which, who, where, whose*.
   > Cities **that invest in cycling** see fewer traffic jams.
2. **Conditional sentences** — show consequence.
   > **If governments subsidised public transport,** fewer people **would drive**.
3. **Concessive / adverbial clauses** — concede or contrast.
   > **Although electric cars are cleaner,** they remain expensive to produce.

Mixing these with some short simple sentences gives the *variety* examiners look for. Variety does **not** mean every sentence is long — controlled simple sentences add clarity and punch, and a well-placed short sentence after two complex ones reads with confidence.

## Worked example 1 — before / after

**Before (all simple sentences, repetitive):**
> Online learning is popular. It is convenient. Students can study at home. But it has problems. Students feel isolated.

Accurate, but flat — this is a band-5/6 profile because the *range* is narrow; the descriptor needs *complex* structures to climb higher.

**After (varied, complex, still accurate):**
> Online learning has become popular because it is convenient, allowing students to study from home. However, although this flexibility is valuable, it can leave learners feeling isolated, which may reduce their motivation over time.

**Why this scores:** one concessive clause (*although this flexibility is valuable*), one relative clause (*which may reduce*), one reason clause (*because*) and a participle phrase (*allowing students to study*) — varied **and** error-free. That combination of *range* plus *accuracy* is precisely the band-7 profile.

## Worked example 2 — the conditional and the cleft for emphasis

Higher bands show grammar used for *meaning*, not decoration. Two structures earn their place here:

> **Second conditional (hypothetical):** *If cities were designed around pedestrians rather than cars, air quality would improve and streets would feel safer.*
> **Cleft sentence (emphasis):** *It is not the technology itself that causes harm, but the way in which it is used.*

**Why this scores:** the second conditional (*If… were designed… would improve*) handles a hypothetical accurately — a structure band 5 writers often get wrong by mixing tenses (*If… is designed… will improve*). The cleft *It is not X that…, but Y* reorganises the sentence to stress the real point; using it correctly signals the "wide range of structures" band 8 describes. Both are complex, and both are fully controlled.

## Accuracy: the high-frequency fixes

- **Subject–verb agreement** — *The number of cars **is** rising* (not *are*).
- **Articles** — *the environment*, *a problem*, *Ø society in general*.
- **Tense consistency** — don't slide between past and present mid-paragraph.
- **Punctuating clauses** — use a comma after a fronted clause (*Although it is cheap, …*); never join two sentences with only a comma (comma splice).

## Worked example 3 — repairing a tangled complex sentence

Ambition is good, but a complex sentence that loses control scores *lower* than a clean simple one. Watch a repair:

> **Tangled (band 5–6):** *Although many people they think that studying abroad is benefit, but it have also many problem like the cost and missing your family it can be hard.*

Fix it move by move:
1. Remove the doubled subject *people they* → *many people think*.
2. Drop *but* — *although* already signals the contrast (don't use both).
3. *is benefit* → *is beneficial* (adjective, not noun); *it have* → *it has* (agreement).
4. Split the run-on: the *missing your family* idea needs its own clause.

> **Repaired (band 7):** *Although many people believe that studying abroad is beneficial, it can also be difficult, largely because of the cost and the strain of being away from family.*

**Why this scores:** the concessive *Although…* clause is now complete and correctly punctuated, agreement is fixed, and *the strain of being away from family* is a controlled noun phrase. The sentence is *more* complex than the original yet fully accurate — the exact band-7 combination of range and control.

> **Sentence frames that add range safely:** *Not only does X…, but it also… · One reason for this is that… · This is largely because… · While it is true that…, it is also the case that… · Were this trend to continue, …*

## Common mistakes

- **Run-ons / comma splices** — *Cars pollute, this harms cities.* (needs a full stop, semicolon, or connector).
- **Over-long sentences** that lose control of agreement and punctuation halfway through.
- **Only simple sentences** — safe, but it caps the *range* mark at around band 5–6.
- **Article and preposition slips** repeated throughout (*depend of, discuss about, in the other hand*).
- **Misused semicolons** — they join two *complete* sentences, not fragments.

## Try it

At **[/ielts/writing](/ielts/writing)**, write a short paragraph, then rewrite it deliberately combining pairs of sentences with *which*, *although* and *if*. Read each new sentence aloud and check three things: agreement, tense, and the comma after any fronted clause. Then try turning one flat statement into a cleft (*It is X that…*) for emphasis. Range that stays correct is the whole game at band 7 and above.`,
  },
]
