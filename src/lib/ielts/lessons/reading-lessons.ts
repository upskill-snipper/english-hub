// ─── IELTS Reading — strategy lessons ──────────────────────────────────────
// One lesson per Reading unit (see UNITS in ../curriculum). Each `body` is an
// original Markdown strategy lesson: a step-by-step method, a worked example
// with a short sample text, the traps to avoid, and a "Try it" prompt that
// points learners at live practice under /ielts/reading.
//
// Authored content only — the curriculum spine (curriculum.ts) owns the unit
// ids, levels and the Lesson type. Keep `unit` values matching Reading unit ids.
// ────────────────────────────────────────────────────────────────────────────

import type { Lesson } from '@/lib/ielts/curriculum'

export const READING_LESSONS: Lesson[] = [
  // ── read-skim-scan ───────────────────────────────────────────────────────
  {
    id: 'read-skim-scan',
    skill: 'reading',
    level: 'intermediate',
    unit: 'read-skim-scan',
    title: 'Skimming & scanning: read less, find more',
    slug: 'skimming-and-scanning',
    summary:
      'Two different speed-reading moves — skimming for the gist, scanning for facts — and exactly when to switch between them.',
    estMinutes: 10,
    body: `# Skimming & scanning: read less, find more

The single biggest mistake in IELTS Reading is trying to read every word. You have roughly **20 minutes per passage** and around 700–900 words to handle, so careful reading of the whole text is impossible. Instead you use two fast, deliberate techniques — and they are **not** the same thing.

## Skimming vs scanning

- **Skimming** = reading *fast for the main idea*. Your eyes glide; you read the title, the first and last sentence of each paragraph, and any words in **bold** or *italics*. Goal: a mental map of "what is each paragraph roughly about?"
- **Scanning** = hunting *for one specific thing*. You ignore meaning entirely and let your eyes sweep the page for a target: a **name**, a **date**, a **number**, a **capitalised** word. Goal: locate, then stop.

## The method, step by step

1. **Skim the whole passage in ~2 minutes.** Don't stop at hard words. Jot a two- or three-word label beside each paragraph (e.g. "A = causes", "B = 1850s discovery").
2. **Read the questions** and underline the *keyword* you'll hunt for — usually a noun, name or number that is unlikely to be reworded.
3. **Scan** back into the passage for that keyword (or a close synonym). When you hit it, **slow down** and read those two or three sentences carefully.
4. **Answer**, then move on. Never re-skim the whole text per question.

## Worked example

> **The Lighthouse Keepers** — *Paragraph C.* For over two centuries the Eddystone rocks claimed ships almost yearly. The first tower, completed in 1698 by Henry Winstanley, was swept away in a storm five years later. Its replacement, built largely of wood, burned down in 1755.

**Question:** *In which year was the first Eddystone tower destroyed?*

- *Skim* told you Paragraph C is "about the towers' history" — so you go there.
- *Scan* for the **number/date** clue. You see "1698... swept away **five years later**".
- Careful read: 1698 + 5 = **1703**. The answer isn't stated as a year — it's calculated. Scanning got you to the spot; reading got you the answer.

## Common traps

- **Synonym swaps.** The question rarely uses the passage's exact words. "Destroyed" appears as "swept away" / "burned down". Scan for the *factual* anchor (the date, the name "Eddystone"), not the verb.
- **Skimming when you should scan.** If a question asks for a specific detail, don't re-read paragraphs for meaning — sweep for the anchor word.
- **Scanning when you should skim.** *Matching headings* and *main idea* questions need the gist; sweeping for a single word will mislead you.

## Try it

Open a passage at **/ielts/reading**. Give yourself **120 seconds** to skim and label every paragraph *before* you look at the questions. Then answer using scanning only. Notice how rarely you need to read a paragraph in full.`,
  },

  // ── read-tfng ────────────────────────────────────────────────────────────
  {
    id: 'read-tfng',
    skill: 'reading',
    level: 'intermediate',
    unit: 'read-tfng',
    title: 'True / False / Not Given without the panic',
    slug: 'true-false-not-given',
    summary:
      'A decision procedure that separates FALSE (the text contradicts it) from NOT GIVEN (the text is simply silent) — the distinction that wins or loses these marks.',
    estMinutes: 13,
    body: `# True / False / Not Given without the panic

Most candidates fear this type because **False** and **Not Given** feel identical. They are not. Get this one rule and the panic disappears:

- **TRUE** — the passage *states or clearly implies* the statement.
- **FALSE** — the passage states something that *contradicts* the statement.
- **NOT GIVEN** — the passage *does not say*, one way or the other.

The trap is your own brain: if a statement *sounds* plausible or matches your world knowledge, you want to mark it True. Ignore what you know. Only the passage counts.

## The decision procedure

1. **Read the statement** and find its testable claim. Underline the **strong words**: *all, only, never, first, more than, because*. These are usually where the answer lives.
2. **Locate the matching lines** (statements follow the passage order, so the next answer is usually below the last).
3. Ask, in order:
   - Does the text *say the same thing*? → **TRUE**
   - Does the text *say the opposite*? → **FALSE**
   - Is the text *silent* on this exact claim? → **NOT GIVEN**

## Worked example

> **Sample text:** Honeybees communicate the location of food through a "waggle dance". The angle of the dance indicates direction relative to the sun, and its duration signals distance. Researchers have observed the dance in all known honeybee species, though its precision varies between them.

**Statement 1 — "The waggle dance shows other bees where food is."**
The text says the dance "communicate[s] the location of food". Same claim → **TRUE**.

**Statement 2 — "Every honeybee species performs the dance with the same accuracy."**
The text says precision "varies between them" — the opposite of "the same accuracy" → **FALSE**. (The strong word *same* gave it away.)

**Statement 3 — "The waggle dance is learned by young bees from older bees."**
Plausible, perhaps even true in real life — but the passage never mentions *learning*. Silent → **NOT GIVEN**.

## Common traps

- **Adding information.** Statement 3 is the classic NG: it introduces a new idea (*learning*) the text never raised. If you can't point to the line, it's Not Given.
- **Strong-word reversals.** A statement that says "**all** experts agree" is FALSE if the text says "**most** experts agree". Watch *all / always / never / only*.
- **Confusing FALSE with NG.** False needs a **contradiction** in the text. No contradiction *and* no confirmation = Not Given.
- **Yes/No/Not Given.** Identical procedure — it just tests the *writer's opinion* instead of facts.

## Try it

At **/ielts/reading**, do a TFNG set and, for each answer, write the **exact words** from the passage that justify it. If you can't quote a line for True or False, the answer is almost certainly **Not Given**.`,
  },

  // ── read-headings ──────────────────────────────────────────────────────────
  {
    id: 'read-headings',
    skill: 'reading',
    level: 'advanced',
    unit: 'read-headings',
    title: 'Matching headings: find the main idea, not a keyword',
    slug: 'matching-headings',
    summary:
      'How to choose the heading that captures a whole paragraph’s point — and how to beat the distractor headings built from one eye-catching word.',
    estMinutes: 12,
    body: `# Matching headings: find the main idea, not a keyword

Here you're given a list of headings and must match one to each paragraph. The headings always **outnumber** the paragraphs, so some are never used — and several are deliberately built to trap word-matchers. The skill being tested is *main idea*, not vocabulary spotting.

## The method, step by step

1. **Skim each paragraph** and, in your own words, write a **5–7 word summary** of its *overall* point — not its first sentence, its *whole* point.
2. **Read all the headings once** before matching anything, so you know the full field.
3. **Match the easy ones first.** Confident pairs reduce the options for the hard ones.
4. For a tricky paragraph, ask: *"Which heading covers the WHOLE paragraph, not just one sentence?"* Cross out a heading once it's used.
5. **Cover the early sentences and read the rest.** Writers often hide the true topic in the middle or the conclusion, while the opening is just a hook.

## Worked example

> **Paragraph:** It is tempting to assume the printing press spread literacy overnight. In fact, for the first century after Gutenberg most printed books were religious works read aloud to congregations who could not read themselves. Only as cheaper paper and vernacular titles appeared did private, silent reading slowly take hold.

**Candidate headings:**
- i. The invention of the printing press
- ii. Why literacy rose more slowly than expected
- iii. Religious texts of the medieval church

The paragraph *mentions* the press (i) and *mentions* religious books (iii) — both are keyword bait. But the **whole point** is that literacy spread *gradually*, contrary to the "overnight" assumption. The answer is **ii**. Headings i and iii each grab a single detail, not the argument.

## Common traps

- **Keyword magnets.** A heading repeating a word from the paragraph's first line is usually a distractor. The press is *named*, but the paragraph isn't *about* the invention.
- **First-sentence trap.** Topic sentences can be a hook or even a claim the paragraph goes on to reject ("It is tempting to assume..."). Read past it.
- **Too narrow / too broad.** Reject headings that cover only part of the paragraph, and those so general they'd fit three paragraphs.
- **Leaving the example.** When a sample answer is shown, that heading is *used up* — strike it off your list.

## Try it

On a passage at **/ielts/reading**, cover the headings and write your own one-line title for each paragraph first. Then match your titles to the closest official heading. You'll pick the *idea*, not the *word*.`,
  },

  // ── read-matching ─────────────────────────────────────────────────────────
  {
    id: 'read-matching',
    skill: 'reading',
    level: 'advanced',
    unit: 'read-matching',
    title: 'Matching information & features: where, exactly, is it said?',
    slug: 'matching-information-and-features',
    summary:
      'Tactics for "which paragraph contains…" and "match each finding to a researcher" — the scattered-answer questions that punish a linear read.',
    estMinutes: 11,
    body: `# Matching information & features: where, exactly, is it said?

This family covers two related tasks:

- **Matching information** — *"Which paragraph contains the following information?"* You assign a statement to a lettered paragraph (A, B, C…).
- **Matching features** — *"Match each statement to the correct researcher / theory / country."* You assign statements to a list of named options.

What makes them hard: the answers are **not in passage order**, options can be **used more than once** (read the rubric!), and the wording is heavily **paraphrased**.

## The method, step by step

1. **Read the statements first** and underline a precise, hard-to-reword anchor in each (a number, a process, a specific claim).
2. **Don't read paragraph by paragraph trying to recall** — instead scan for each statement's anchor across the text.
3. For **features**, build a quick **mini-map**: jot each name and a two-word note on what they claimed *as you skim*. Then match statements to the map.
4. **Confirm the paraphrase.** The matching paragraph expresses the *same idea* in different words — verify the meaning lines up, not just a shared word.
5. Watch the rubric: **"You may use any letter more than once"** changes your strategy — don't cross options off.

## Worked example

> **A.** Dr Mensah's trials found that the vaccine's protection faded after about eight months.
> **B.** Professor Lindqvist argued the same vaccine remained effective for over two years.
> **C.** Both researchers agreed that a single booster dose restored full immunity.

**Statement:** *"A claim that immunity from the vaccine was relatively short-lived."*

Scan the anchors. Paragraph **A** says protection "faded after about eight months" — a paraphrase of "short-lived" → answer **A**. Note that Lindqvist (B) says the *opposite*; that contrast is the trap if you matched on the word "vaccine" alone.

**Statement:** *"A point on which the two scientists were in agreement."* → **C** ("Both... agreed").

## Common traps

- **Shared vocabulary ≠ a match.** All three paragraphs mention "vaccine". Match the *claim*, not the topic word.
- **Opposite-view distractors.** With features, one name often holds the *contrary* view — easy to confuse if you skim carelessly.
- **Forgetting reuse.** If the rubric allows it, the same researcher can answer two statements. Don't assume one-to-one.
- **Reading in order.** These answers jump around. Drive your search from the *statement's* anchor, not the passage's flow.

## Try it

At **/ielts/reading**, take a matching-features set and build the name-and-claim mini-map *before* reading any statement. Then match. The map turns a scattered hunt into a quick lookup.`,
  },

  // ── read-completion ──────────────────────────────────────────────────────
  {
    id: 'read-completion',
    skill: 'reading',
    level: 'intermediate',
    unit: 'read-completion',
    title: 'Sentence, summary & note completion: the right word, the right form',
    slug: 'sentence-summary-note-completion',
    summary:
      'Gap-fill from the passage where two things must both be right: the word you choose and its grammatical form — plus obeying the word limit exactly.',
    estMinutes: 12,
    body: `# Sentence, summary & note completion: the right word, the right form

In these tasks you fill gaps using words **taken from the passage** (usually) within a stated limit such as **"NO MORE THAN TWO WORDS"** or **"ONE WORD ONLY"**. Two things must both be correct, or you lose the mark:

1. The **answer** is right (the correct word from the text), and
2. The **grammar** fits the gap (right part of speech, singular/plural, verb form), and
3. You **obey the word limit** — three words where two are allowed = zero marks.

## The method, step by step

1. **Read the whole sentence/summary with the gap** and predict what *kind* of word fits: a noun? a verb? a number? plural or singular? This prediction is half the work.
2. **Note the word limit** and write it at the top of your answer space so you don't forget.
3. **Scan the passage** for the part that matches the sentence around the gap — completion answers usually follow passage order.
4. **Copy the word(s) exactly** from the text — spelling counts. Don't paraphrase: changing the word usually breaks it.
5. **Re-read the completed sentence.** Does it make grammatical sense? If not, you have the wrong form or the wrong word.

## Worked example

> **Sample text:** Mangroves protect coastlines in two ways. Their dense roots trap sediment, gradually building up land, while the same tangle of roots absorbs the energy of incoming waves, reducing erosion during storms.

> **Summary with gaps (NO MORE THAN TWO WORDS):**
> Mangroves defend the coast partly because their roots capture (1) ........., which slowly creates new land. The roots also weaken waves, so there is less (2) ......... in bad weather.

- **Gap 1:** predict a *noun* (something roots "capture"). Text says roots "trap **sediment**". Answer: **sediment** (one word — within the limit).
- **Gap 2:** predict a *noun* (something there is "less" of). Text says "reducing **erosion**". Answer: **erosion**.

Notice the summary *paraphrases* the passage ("capture" for "trap", "weaken" for "absorbs the energy of"), but the answer words are lifted **unchanged**.

## Common traps

- **Breaking the word limit.** Writing "the sediment" when "sediment" is required can be marked wrong. Count your words.
- **Wrong form.** If the gap needs a plural ("two ......... were found") but the text gives a singular, adjust *only* number — and only if the instructions allow your own words.
- **Paraphrasing the answer.** These tasks reward *copying*. Don't be clever; transcribe.
- **Spelling and hyphens.** A misspelt transcription loses the mark. Copy letter for letter.

## Try it

At **/ielts/reading**, do a summary-completion task and, before scanning, write next to each gap the **part of speech** and **singular/plural** you expect. Then check every answer against the word limit before submitting.`,
  },

  // ── read-mcq ──────────────────────────────────────────────────────────────
  {
    id: 'read-mcq',
    skill: 'reading',
    level: 'advanced',
    unit: 'read-mcq',
    title: 'Multiple choice: eliminate the distractors, then choose',
    slug: 'multiple-choice',
    summary:
      'Why MCQ in Reading is really an elimination game — and how to spot the three classic wrong-answer designs that look right at a glance.',
    estMinutes: 12,
    body: `# Multiple choice: eliminate the distractors, then choose

IELTS multiple choice looks easy and is quietly one of the most error-prone types, because the wrong options (**distractors**) are engineered to be tempting. The winning habit is to *eliminate*, not to *hunt for the right one*. Three of four options are designed to fail in a specific way — learn the patterns and they fall away.

## The method, step by step

1. **Read the question stem first**, before the options. Predict your own answer if you can — it inoculates you against persuasive distractors.
2. **Locate the relevant lines** in the passage (questions follow passage order; the answer to Q12 is usually below Q11).
3. **Read those lines carefully**, then test **each option against the text**, crossing out any you can disprove.
4. **Choose the option the text supports** — even if another "sounds cleverer". The exam rewards what is *stated*, not what is *true in the world*.
5. If two remain, **re-read the stem** for a limiting word (*main, mainly, best, primarily*). It usually decides between a partial answer and the full one.

## The three classic distractor designs

- **The half-truth:** true *in part*, but goes too far or adds a detail the text doesn't support.
- **The right-words-wrong-meaning:** repeats vocabulary from the passage but states a different idea (often the *opposite*).
- **The outside-knowledge bait:** a statement that's reasonable in real life but never made in the passage.

## Worked example

> **Sample text:** Early electric cars outsold petrol models in 1900, but their short range and the discovery of cheap oil soon ended their dominance. They survived only in niche uses — milk floats, forklifts — until battery advances revived interest a century later.

**Question:** *Why did early electric cars decline?*
A. They were never popular with buyers.
B. Their limited range and cheap petrol made them uncompetitive.
C. Battery technology had not yet been invented.
D. They were banned in cities.

- **A** — *right-words-wrong-meaning*: the text says they *outsold* petrol cars, so "never popular" is the opposite → cross out.
- **C** — *outside-knowledge bait*: batteries existed (they powered the cars!); the text says battery *advances* came later, not that batteries didn't exist → cross out.
- **D** — *not stated* anywhere → cross out.
- **B** — matches "short range" + "cheap oil". **Answer: B.**

## Common traps

- **Choosing the first option that looks right.** Always test all four; a later option is often *more* correct.
- **Picking the true-but-unstated answer.** If the passage doesn't say it, it's wrong — however sensible.
- **Ignoring qualifiers** like *only, mainly, the main reason*. They separate the full answer from a half-truth.

## Try it

At **/ielts/reading**, do an MCQ set and, for every question, write a one-word reason you **rejected** each wrong option (e.g. "opposite", "not stated", "too strong"). Naming the distractor type is what builds the instinct.`,
  },

  // ── read-timing ──────────────────────────────────────────────────────────
  {
    id: 'read-timing',
    skill: 'reading',
    level: 'advanced',
    unit: 'read-timing',
    title: 'Timing & strategy: 40 questions, 60 minutes, no panic',
    slug: 'timing-and-strategy',
    summary:
      'A whole-paper plan for pacing three passages, where to spend (and save) time, and how to make sure all 40 answers land on the sheet.',
    estMinutes: 13,
    body: `# Timing & strategy: 40 questions, 60 minutes, no panic

Academic Reading gives you **60 minutes for three passages and 40 questions**, and — crucially — **no extra time to transfer answers** (the answers you write *are* the answer sheet, on paper). Plenty of capable readers under-score purely because they run out of time on Passage 3. A plan fixes that.

## A workable pacing plan

- **~20 minutes per passage.** Passages get harder, so try to bank time: aim for **17–18 min on Passage 1**, ~20 on Passage 2, leaving **22–23 min for Passage 3**.
- **Each mark is worth the same** — a hard Passage 3 question scores exactly like an easy Passage 1 one. Never let two stubborn questions eat the time of ten gettable ones.
- **Leave 2–3 minutes at the end** to make sure every line has *an* answer.

## The method, step by step

1. **Skim the passage (~2 min)** and label paragraphs before reading questions (see *Skimming & scanning*).
2. **Do the question types in the order that suits you**, not necessarily the printed order. *Matching headings* and *TFNG* reward a fresh memory of the whole text; detail/completion questions can be scanned anytime.
3. **Set a hard limit per question: ~1.5 minutes.** If you're stuck, **guess, flag it, move on** — there's no negative marking, so a blank is a wasted lottery ticket.
4. **Watch the clock at fixed checkpoints**, not constantly: glance at 20 and 40 minutes. If you're behind, **speed up immediately** rather than at the end.
5. **Final sweep:** fill every blank with your best guess. **40 answers attempted, always.**

## Worked example — triage in action

You're 18 minutes in and still have two TFNG items on Passage 1 plus all of Passage 2. Decision:

- A TFNG you're "60% sure" on → **mark your best guess, flag it**, move to Passage 2. Coming back later with fresh eyes is cheaper than grinding now.
- One question needs a number you *cannot* find after 90 seconds → **guess and go**. Spending three minutes to maybe gain one mark risks losing several easy Passage 3 marks.

The candidate who finishes all three passages and guesses six hard ones almost always beats the one who "perfected" Passage 1 and never reached Passage 3.

## Common traps

- **Reading the whole passage first.** That alone can burn 8–10 minutes. Skim, then let the questions drive your reading.
- **Sunk-cost questions.** Refusing to leave a hard item because you've "already spent two minutes". Cut your losses.
- **No final guesses.** Blanks score zero; a guess might score. Never hand in an incomplete sheet.
- **Saving transfer for the end.** There is no transfer time — write answers as you go.

## Try it

At **/ielts/reading**, do a **full timed set** with a visible timer. Note the clock when you start each passage. Afterwards, check: did any single question take over two minutes? That's the leak to plug next time.`,
  },
]
