// ─── IELTS Reading - strategy lessons ──────────────────────────────────────
// One lesson per Reading unit (see UNITS in ../curriculum). Each `body` is an
// original Markdown strategy lesson: a step-by-step method, a worked example
// with a short sample text, the traps to avoid, and a "Try it" prompt that
// points learners at live practice under /ielts/reading.
//
// Authored content only - the curriculum spine (curriculum.ts) owns the unit
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
      'Two different speed-reading moves - skimming for the gist, scanning for facts - and exactly when to switch between them.',
    estMinutes: 12,
    body: `# Skimming & scanning: read less, find more

The single biggest mistake in IELTS Reading is trying to read every word. You have roughly **20 minutes per passage** and around 700-900 words to handle, so careful reading of the whole text is impossible. Instead you use three gears: **skimming** for the gist, **scanning** for facts, and **close reading** for the two or three sentences that actually contain an answer. The art is switching between them at the right moment - and they are **not** the same thing.

## Skimming vs scanning vs close reading

- **Skimming** = reading *fast for the main idea*. Your eyes glide; you read the title, the first and last sentence of each paragraph, and any words in **bold** or *italics*. Goal: a mental map of "what is each paragraph roughly about?"
- **Scanning** = hunting *for one specific thing*. You ignore meaning entirely and let your eyes sweep the page for a visual target: a **name**, a **date**, a **number**, a **capitalised** word, a word in *italics*. Goal: locate, then stop.
- **Close reading** = the slow gear you drop into only once scanning has parked you on the right lines. You read those few sentences word by word, because that is where marks are won or lost.

## The method, step by step

1. **Skim the whole passage in ~2 minutes.** Don't stop at hard words. Jot a two- or three-word label beside each paragraph (e.g. "A = causes", "B = 1850s discovery", "C = modern uses").
2. **Read the question** and underline the *keyword* you'll hunt for - usually a noun, name or number that is unlikely to be reworded.
3. **Decide your anchor.** Names, dates, numbers, places and technical terms stay the same in the text, so they make the best scanning targets. Common verbs and adjectives get paraphrased, so they make poor ones.
4. **Scan** back into the passage for that anchor (or a close synonym). Move your eyes in a fast vertical sweep, not line by line. When you hit the anchor, **slow down** to close reading.
5. **Answer**, then move on. Never re-skim the whole text per question - your paragraph labels tell you roughly where to look.

## Scanning tactics that actually save time

- **Number questions are the fastest of all.** Digits, dates and percentages stand out visually; let your eye catch the shape of them.
- **Use the question order.** Most question sets follow the passage top-to-bottom, so the next answer is usually *below* the last one you found. Don't restart at paragraph A every time.
- **Anticipate the paraphrase.** Before scanning, ask "how else might this be said?" A question about "the cost" may appear as *price, expense, fee, outlay*. Hold two or three synonyms in mind as you sweep.

## Worked example 1 - a calculated date

> **The Lighthouse Keepers** - *Paragraph C.* For over two centuries the Eddystone rocks claimed ships almost yearly. The first tower, completed in 1698 by Henry Winstanley, was swept away in a storm five years later. Its replacement, built largely of wood, burned down in 1755.

**Question:** *In which year was the first Eddystone tower destroyed?*

- *Skim* told you Paragraph C is "about the towers' history" - so you go there.
- *Scan* for the **number/date** clue. You see "1698... swept away **five years later**".
- Close read: 1698 + 5 = **1703**. The answer isn't stated as a year - it's calculated. Scanning got you to the spot; close reading got you the answer.

## Worked example 2 - choosing the right anchor

> **Coral reefs** - *Paragraph E.* Although reefs occupy less than one per cent of the ocean floor, they shelter roughly a quarter of all marine species. This extraordinary biodiversity is now under threat: rising sea temperatures cause the algae living inside coral to be expelled, a process known as bleaching.

**Question:** *What proportion of marine species do reefs support?*

- The eye-catching verb is "shelter", but that will probably be paraphrased ("support", "are home to"). A weak scanner hunts for "support" and finds nothing.
- The smart anchor is the *fraction* - "a quarter" / "25%". Scan for the number shape.
- Close read confirms the meaning: reefs "shelter roughly **a quarter** of all marine species". Answer: **a quarter (25%)**. The anchor was the number, not the verb.

## Common mistakes

- **Synonym swaps.** The question rarely uses the passage's exact words. "Destroyed" appears as "swept away" / "burned down"; "support" appears as "shelter". Scan for the *factual* anchor (a date, a name, a number), not the verb or adjective.
- **Skimming when you should scan.** If a question asks for a specific detail, don't re-read whole paragraphs for meaning - sweep for the anchor word, then drop into close reading.
- **Scanning when you should skim.** *Matching headings* and *main idea* questions need the gist; sweeping for a single word will mislead you, because the keyword may sit in a paragraph that is *about* something else.
- **Reading the answer lines too fast.** Once scanning lands you on the spot, people stay in skim gear and grab the first plausible word. Slow right down for those two or three sentences.
- **Ignoring "five years later", "the following decade", "by then".** Relative time and quantity phrases hide calculated answers; treat them as a signal to do the arithmetic, not to move on.

## Try it

Open a passage at **/ielts/reading**. Give yourself **120 seconds** to skim and label every paragraph *before* you look at the questions. Then, for each question, write down your **anchor word** (the name/date/number you'll scan for) before you start sweeping. Answer using scanning + close reading only - and notice how rarely you need to read a paragraph in full.`,
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
      'A decision procedure that separates FALSE (the text contradicts it) from NOT GIVEN (the text is simply silent) - the distinction that wins or loses these marks.',
    estMinutes: 14,
    body: `# True / False / Not Given without the panic

Most candidates fear this type because **False** and **Not Given** feel identical. They are not. Get this one rule and the panic disappears:

- **TRUE** - the passage *states or clearly implies* the statement.
- **FALSE** - the passage states something that *contradicts* the statement.
- **NOT GIVEN** - the passage *does not say*, one way or the other.

The trap is your own brain: if a statement *sounds* plausible or matches your world knowledge, you want to mark it True. Ignore what you know. **Only the passage counts** - you are testing the statement against the text, not against reality.

## The decision procedure

1. **Read the statement** and find its testable claim. Underline the **strong words**: *all, only, never, first, more than, because, the same, mainly*. These qualifiers are usually where the answer lives.
2. **Locate the matching lines.** Statements follow the passage order, so the next answer is usually below the last. Scan for a noun, name or number from the statement.
3. **Compare meaning, not words.** The text will paraphrase the statement. Decide whether the *idea* matches, opposes, or is absent.
4. **Apply the test, in order:**
   - Does the text *say the same thing*? → **TRUE**
   - Does the text *say the opposite*? → **FALSE**
   - Is the text *silent* on this exact claim? → **NOT GIVEN**

## The decision in one table

| If the text… | and you can… | the answer is |
| --- | --- | --- |
| agrees with the statement | quote a confirming line | **TRUE** |
| conflicts with the statement | quote a contradicting line | **FALSE** |
| never addresses the claim | quote nothing either way | **NOT GIVEN** |

The golden test for **Not Given**: if you cannot put your finger on a line that *confirms* or *contradicts* the statement, it is Not Given. False is never a guess - it requires a real contradiction in black and white.

## Worked example 1 - all three answers from one paragraph

> **Sample text:** Honeybees communicate the location of food through a "waggle dance". The angle of the dance indicates direction relative to the sun, and its duration signals distance. Researchers have observed the dance in all known honeybee species, though its precision varies between them.

**Statement 1 - "The waggle dance shows other bees where food is."**
The text says the dance "communicate[s] the location of food". Same claim, just reworded → **TRUE**.

**Statement 2 - "Every honeybee species performs the dance with the same accuracy."**
The text says precision "varies between them" - the opposite of "the same accuracy" → **FALSE**. (The strong word *same* gave it away.)

**Statement 3 - "The waggle dance is learned by young bees from older bees."**
Plausible, perhaps even true in real life - but the passage never mentions *learning*. Silent → **NOT GIVEN**.

## Worked example 2 - the FALSE / NOT GIVEN borderline

> **Sample text:** The first underwater photographs were taken in 1893 by Louis Boutan, using a bulky camera sealed in a copper case. The equipment was so heavy that an assistant in a diving suit was needed to carry it across the seabed.

**Statement A - "Boutan took the first underwater photographs without any help."**
The text says "an assistant... was needed to carry it" - that directly contradicts "without any help" → **FALSE**.

**Statement B - "Boutan's underwater photographs were the first to be published in a scientific journal."**
The text says nothing about publication or journals at all. Tempting if you assume early photos must have been published, but there is no line to confirm or deny it → **NOT GIVEN**.

Notice how A and B feel similar, yet A has a contradiction in the text and B has only silence. That single difference decides the mark.

## Common mistakes

- **Adding information.** Statement 3 and statement B are the classic NG: they introduce a new idea (*learning*, *publication*) the text never raised. If you can't point to the line, it's Not Given.
- **Strong-word reversals.** A statement that says "**all** experts agree" is FALSE if the text says "**most** experts agree". Watch *all / always / never / only / the same / first*.
- **Confusing FALSE with NG.** False needs a **contradiction** you can quote. No contradiction *and* no confirmation = Not Given. When in doubt between the two, ask: "Can I quote the line that proves this wrong?" If not, choose NG.
- **Using world knowledge.** "The Sahara is hot" may be true on Earth, but if the passage doesn't state it, it is Not Given. Park what you already know.
- **Yes/No/Not Given.** Identical procedure - it just tests the *writer's opinion or claim* instead of facts. Look for opinion verbs (*argues, believes, suggests*) rather than dates and figures.

## Try it

At **/ielts/reading**, do a TFNG set and, for each answer, write the **exact words** from the passage that justify it in one column and your reasoning (*same / opposite / silent*) in another. If you can't quote a line for True or False, the answer is almost certainly **Not Given**.`,
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
      'How to choose the heading that captures a whole paragraph’s point - and how to beat the distractor headings built from one eye-catching word.',
    estMinutes: 13,
    body: `# Matching headings: find the main idea, not a keyword

Here you're given a list of headings and must match one to each paragraph. The headings always **outnumber** the paragraphs, so some are never used - and several are deliberately built to trap word-matchers. The skill being tested is *main idea*, not vocabulary spotting. A heading that repeats a striking word from the paragraph is, more often than not, the wrong answer.

## What a "main idea" actually is

Every well-written paragraph has one controlling point, and the supporting sentences merely illustrate it. Your job is to name that controlling point. A useful question to ask: *"If this paragraph had to keep only one sentence, which one would it be?"* The heading should match **that** sentence, not the colourful example next to it.

## The method, step by step

1. **Skim each paragraph** and, in your own words, write a **5-7 word summary** of its *overall* point - not its first sentence, its *whole* point.
2. **Read all the headings once** before matching anything, so you know the full field and can spot near-duplicate headings designed to split your decision.
3. **Match the easy ones first.** Confident pairs reduce the options for the hard ones - matching headings is partly a process of elimination.
4. For a tricky paragraph, ask: *"Which heading covers the WHOLE paragraph, not just one sentence?"* Cross out a heading once it's used (unless the rubric says options may repeat - they almost never do here).
5. **Cover the early sentences and read the rest.** Writers often hide the true topic in the middle or the conclusion, while the opening is just a hook or a claim that will be overturned.
6. **Leave near-twin headings until last.** When two headings look similar, the difference between them is usually one word (*causes* vs *effects*, *benefits* vs *risks*). Decide which word the paragraph actually argues.

## Worked example 1 - keyword bait

> **Paragraph:** It is tempting to assume the printing press spread literacy overnight. In fact, for the first century after Gutenberg most printed books were religious works read aloud to congregations who could not read themselves. Only as cheaper paper and vernacular titles appeared did private, silent reading slowly take hold.

**Candidate headings:**
- i. The invention of the printing press
- ii. Why literacy rose more slowly than expected
- iii. Religious texts of the medieval church

The paragraph *mentions* the press (i) and *mentions* religious books (iii) - both are keyword bait. But the **whole point** is that literacy spread *gradually*, contrary to the "overnight" assumption. The answer is **ii**. Headings i and iii each grab a single detail, not the argument.

## Worked example 2 - telling near-twin headings apart

> **Paragraph:** Early commuter railways were celebrated for freeing workers from the slums beside the factories. Yet the same lines hollowed out city centres: those who could afford a fare moved to new suburbs, leaving the poorest behind in increasingly neglected districts. The railway did not so much solve overcrowding as relocate its consequences.

**Candidate headings:**
- i. How railways improved workers' housing
- ii. An unintended social cost of commuter railways
- iii. The engineering behind early railways

Heading i is the *hook* the paragraph opens with - but it then argues the opposite. Heading iii is never discussed. The controlling point is the final sentence: the railway "relocated" its problems. That is a **social cost**, so the answer is **ii**. The trap is stopping at the cheerful first sentence.

## Useful paraphrase tactic

Because headings restate the paragraph in fresh words, practise turning concrete details into abstract labels:

- a paragraph full of dates and inventors → *"The development of X over time"*
- a paragraph weighing pros and cons → *"Assessing the value of X"*
- a paragraph describing a problem then a fix → *"A solution to X"*

Train your eye to convert *examples* into *categories* - that conversion is exactly what the heading has already done.

## Common mistakes

- **Keyword magnets.** A heading repeating a word from the paragraph's first line is usually a distractor. The press is *named*, but the paragraph isn't *about* the invention.
- **First-sentence trap.** Topic sentences can be a hook or even a claim the paragraph goes on to reject ("It is tempting to assume..."). Read past it before deciding.
- **Too narrow / too broad.** Reject headings that cover only part of the paragraph, and those so general they'd fit three paragraphs equally well.
- **Picking between twins on a single word.** When two headings are close, don't choose on gut feel - locate the sentence that decides between *cause* and *effect*, *benefit* and *drawback*.
- **Leaving the example.** When a sample answer is shown for one paragraph, that heading is *used up* - strike it off your list immediately.

## Try it

On a passage at **/ielts/reading**, cover the headings and write your own one-line title for each paragraph first. Then match your titles to the closest official heading, doing the confident ones before the hard ones. You'll pick the *idea*, not the *word*.`,
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
      'Tactics for "which paragraph contains…" and "match each finding to a researcher" - the scattered-answer questions that punish a linear read.',
    estMinutes: 12,
    body: `# Matching information & features: where, exactly, is it said?

This family covers two related tasks:

- **Matching information** - *"Which paragraph contains the following information?"* You assign a statement to a lettered paragraph (A, B, C…).
- **Matching features** - *"Match each statement to the correct researcher / theory / country."* You assign statements to a list of named options.

What makes them hard: the answers are **not in passage order**, options can be **used more than once** (read the rubric!), and the wording is heavily **paraphrased**. These are the question types that punish anyone who reads the passage straight through and hopes to remember where everything was.

## Why a linear read fails here

A normal question set rewards reading top-to-bottom. Matching does the opposite: statement 1 might be answered in paragraph F and statement 2 in paragraph B. If you read linearly you end up re-reading the whole passage once per statement - far too slow. The fix is to drive your search from the **statement**, scanning for its anchor, rather than from the passage.

## The method, step by step

1. **Read the statements first** and underline a precise, hard-to-reword anchor in each (a number, a process, a proper noun, a specific claim).
2. **Don't read paragraph by paragraph trying to recall** - instead scan for each statement's anchor across the text, jumping straight to candidate lines.
3. For **features**, build a quick **mini-map**: jot each name down the margin and add a two-word note on what they claimed *as you skim*. Then match statements to the map instead of re-hunting.
4. **Confirm the paraphrase.** The matching paragraph expresses the *same idea* in different words - verify the meaning lines up, not just a shared word.
5. **Watch the rubric.** "You may use any letter more than once" changes your strategy - don't cross options off after one use. If it doesn't say that, treat options as single-use.
6. **Do the distinctive statements first.** A statement with a unique number or name is fast to place; leave the vague, easily-confused ones until the field has narrowed.

## Worked example 1 - matching features (researchers)

> **A.** Dr Mensah's trials found that the vaccine's protection faded after about eight months.
> **B.** Professor Lindqvist argued the same vaccine remained effective for over two years.
> **C.** Both researchers agreed that a single booster dose restored full immunity.

**Statement:** *"A claim that immunity from the vaccine was relatively short-lived."*

Scan the anchors. Paragraph **A** says protection "faded after about eight months" - a paraphrase of "short-lived" → answer **A**. Note that Lindqvist (B) says the *opposite*; that contrast is the trap if you matched on the word "vaccine" alone.

**Statement:** *"A point on which the two scientists were in agreement."* → **C** ("Both... agreed").

## Worked example 2 - matching information (which paragraph)

> **A.** Mountain glaciers form where annual snowfall exceeds annual melting, compacting over decades into dense ice.
> **B.** As a glacier flows downhill, it grinds the bedrock beneath it, carving the U-shaped valleys typical of glaciated regions.
> **C.** When the climate warms, the glacier's lower end retreats, releasing meltwater that often pools into new lakes.

**Statement:** *"a description of how glaciers reshape the land"*

The topic word "glacier" is in all three paragraphs, so it is useless as an anchor. The distinctive idea is *reshaping the land* - scan for that. Paragraph **B** describes grinding bedrock and carving valleys → answer **B**. Paragraph A is about *formation* and C about *retreat*; both are decoys built on the shared word.

## Paraphrase tactics that speed up the match

- Convert the statement into the **kind of fact** it describes (a cause? a result? a comparison? a definition?) and scan for that shape.
- Expect opinion statements to map to opinion verbs in the text (*claimed, argued, suggested, dismissed*).
- For numbers, the statement's "eight months" may appear as "less than a year" - keep the *quantity* in mind, not just the figure.

## Common mistakes

- **Shared vocabulary ≠ a match.** All paragraphs above mention "vaccine" or "glacier". Match the *claim*, not the topic word.
- **Opposite-view distractors.** With features, one name often holds the *contrary* view - easy to confuse if you skim carelessly. Read the verb that frames their position.
- **Forgetting reuse.** If the rubric allows it, the same researcher can answer two statements. Don't assume one-to-one mapping.
- **Reading in order.** These answers jump around. Drive your search from the *statement's* anchor, not the passage's flow.
- **Settling on the first plausible paragraph.** Two paragraphs may both touch the topic; confirm the *exact* idea before committing, then move on.

## Try it

At **/ielts/reading**, take a matching-features set and build the name-and-claim mini-map *before* reading any statement. For a matching-information set, write each statement's anchor in the margin first. Then match. The map and the anchors turn a scattered hunt into a quick lookup.`,
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
      'Gap-fill from the passage where two things must both be right: the word you choose and its grammatical form - plus obeying the word limit exactly.',
    estMinutes: 13,
    body: `# Sentence, summary & note completion: the right word, the right form

In these tasks you fill gaps using words **taken from the passage** (usually) within a stated limit such as **"NO MORE THAN TWO WORDS"** or **"ONE WORD ONLY"**. Three things must all be correct, or you lose the mark:

1. The **answer** is right (the correct word from the text),
2. The **grammar** fits the gap (right part of speech, singular/plural, verb form), and
3. You **obey the word limit** - three words where two are allowed scores zero, even when the meaning is perfect.

## One task, two layouts

- **Summary completion** gives you a paragraph that re-tells part of the passage with gaps. Sometimes you fill it from a **box of words** (then the word may be a synonym, not a copy); more often you fill it **from the passage**. Check which - it changes everything.
- **Sentence / note / table completion** gives you separate sentences or a skeleton of notes. The grammar around each gap is your strongest clue to what fits.

## The method, step by step

1. **Read the whole sentence/summary with the gap** and predict what *kind* of word fits: a noun? a verb? a number? plural or singular? This prediction is half the work, because it tells you what to listen - or look - for.
2. **Note the word limit** and write it at the top of your answer space so you don't forget mid-task.
3. **Scan the passage** for the part that matches the sentence around the gap - completion answers usually follow passage order, so work downward.
4. **Copy the word(s) exactly** from the text - spelling counts. Don't paraphrase: changing the word almost always breaks it.
5. **Re-read the completed sentence.** Does it make grammatical sense? If not, you have the wrong form or the wrong word.

## Worked example 1 - predict the part of speech

> **Sample text:** Mangroves protect coastlines in two ways. Their dense roots trap sediment, gradually building up land, while the same tangle of roots absorbs the energy of incoming waves, reducing erosion during storms.

> **Summary with gaps (NO MORE THAN TWO WORDS):**
> Mangroves defend the coast partly because their roots capture (1) ........., which slowly creates new land. The roots also weaken waves, so there is less (2) ......... in bad weather.

- **Gap 1:** predict a *noun* (something roots "capture"). Text says roots "trap **sediment**". Answer: **sediment** (one word - within the limit).
- **Gap 2:** predict a *noun* (something there is "less" of). Text says "reducing **erosion**". Answer: **erosion**.

Notice the summary *paraphrases* the passage ("capture" for "trap", "weaken" for "absorbs the energy of"), but the answer words are lifted **unchanged**.

## Worked example 2 - the word limit decides the answer

> **Sample text:** The submarine cable was wrapped in three protective layers. The innermost was gutta-percha, a natural latex; around it ran a sheath of woven hemp; and the whole bundle was armoured with spiralled steel wire to survive the seabed.

> **Note completion (ONE WORD ONLY):**
> Innermost layer: made of (1) ......... · Outer armour: spiralled (2) ......... wire

- **Gap 1:** a material, one word. The text names "**gutta-percha**". Although it looks like two words, it is a single hyphenated term - write **gutta-percha**. Writing "natural latex" would be two words and the wrong focus.
- **Gap 2:** an adjective/noun before "wire", one word. Text says "spiralled **steel** wire". Answer: **steel**. Writing "spiralled steel" repeats a printed word and breaks the one-word limit.

The limit is doing real work here: it tells you the examiner wants the single defining word, not the whole phrase.

## Scanning & paraphrase tactics

- The sentence frame is paraphrased, but the **answer word usually is not** - so anchor your scan on a noun or name in the frame that is unlikely to change.
- Use grammar as a filter: if "an ......... increase" needs an adjective, ignore nouns you pass even if they're on-topic.
- For tables, read the **column and row headings** - they tell you the category of word each cell needs.

## Common mistakes

- **Breaking the word limit.** Writing "the sediment" when "sediment" is required can be marked wrong. Count your words, and don't include articles you don't need.
- **Wrong form.** If the gap needs a plural ("two ......... were found") but the text gives a singular, adjust *only* number - and only when the instructions let you use your own words.
- **Paraphrasing the answer.** When the task says "from the passage", it rewards *copying*. Don't be clever; transcribe exactly.
- **Spelling and hyphens.** A misspelt transcription loses the mark. Copy letter for letter, including hyphens (*gutta-percha*, *well-being*).
- **Grabbing the first matching word.** The right lines may contain several nouns; the answer is the one that makes the *whole sentence* true and grammatical, so re-read before committing.

## Try it

At **/ielts/reading**, do a summary-completion task and, before scanning, write next to each gap the **part of speech** and **singular/plural** you expect. Then check every answer against the word limit before submitting - count the words on your fingers if you have to.`,
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
      'Why MCQ in Reading is really an elimination game - and how to spot the three classic wrong-answer designs that look right at a glance.',
    estMinutes: 13,
    body: `# Multiple choice: eliminate the distractors, then choose

IELTS multiple choice looks easy and is quietly one of the most error-prone types, because the wrong options (**distractors**) are engineered to be tempting. The winning habit is to *eliminate*, not to *hunt for the right one*. Three of four options are designed to fail in a specific way - learn the patterns and they fall away.

## Why elimination beats hunting

If you search for "the right answer", a clever distractor that *sounds* right will catch you, because you stop as soon as something feels plausible. If instead you ask of every option "can I disprove this from the text?", you are forced to check all four against the passage - and the engineered traps reveal themselves. Treat each option as guilty until proven innocent.

## The method, step by step

1. **Read the question stem first**, before the options. Predict your own answer if you can - it inoculates you against persuasive distractors.
2. **Locate the relevant lines** in the passage (questions follow passage order; the answer to Q12 is usually below Q11).
3. **Read those lines carefully**, then test **each option against the text**, crossing out any you can disprove and noting *why*.
4. **Choose the option the text supports** - even if another "sounds cleverer". The exam rewards what is *stated or implied by the passage*, not what is *true in the world*.
5. If two remain, **re-read the stem** for a limiting word (*main, mainly, best, primarily, except*). It usually decides between a partial answer and the full one.

## The three classic distractor designs

- **The half-truth:** true *in part*, but goes too far, adds a detail the text doesn't support, or attaches a real fact to the wrong cause.
- **The right-words-wrong-meaning:** repeats vocabulary from the passage but states a different idea (often the *opposite*).
- **The outside-knowledge bait:** a statement that's reasonable in real life but never made in the passage.

## Worked example 1 - spotting all three traps at once

> **Sample text:** Early electric cars outsold petrol models in 1900, but their short range and the discovery of cheap oil soon ended their dominance. They survived only in niche uses - milk floats, forklifts - until battery advances revived interest a century later.

**Question:** *Why did early electric cars decline?*
A. They were never popular with buyers.
B. Their limited range and cheap petrol made them uncompetitive.
C. Battery technology had not yet been invented.
D. They were banned in cities.

- **A** - *right-words-wrong-meaning*: the text says they *outsold* petrol cars, so "never popular" is the opposite → cross out.
- **C** - *outside-knowledge bait*: batteries existed (they powered the cars!); the text says battery *advances* came later, not that batteries didn't exist → cross out.
- **D** - *not stated* anywhere → cross out.
- **B** - matches "short range" + "cheap oil". **Answer: B.**

## Worked example 2 - the half-truth and the limiting word

> **Sample text:** The author concedes that remote working can raise short-term productivity, but argues its real long-term value lies in widening the talent pool, since employers are no longer limited to people who live near the office.

**Question:** *According to the author, the chief benefit of remote working is that it -*
A. increases how much employees produce.
B. lets companies recruit from a wider area.
C. reduces the cost of office space.
D. improves employees' work-life balance.

- **A** - a *half-truth*: the text grants higher productivity, but calls it "short-term" and not the "real... value". The stem's word **chief** rules it out → cross out.
- **C** and **D** - sensible real-world benefits, but the passage never states them → *outside-knowledge bait*, cross out.
- **B** - matches "widening the talent pool... no longer limited to people who live near the office". **Answer: B.**

Here the qualifier **chief** is doing the work: option A is true, but it is not the *chief* benefit, so it loses.

## Common mistakes

- **Choosing the first option that looks right.** Always test all four; a later option is often *more* correct.
- **Picking the true-but-unstated answer.** If the passage doesn't say it, it's wrong - however sensible it sounds.
- **Ignoring qualifiers** like *only, mainly, the main reason, chief, best*. They separate the full answer from a half-truth.
- **Matching on a repeated word.** An option that echoes the passage's exact vocabulary is often the right-words-wrong-meaning trap; check the *idea*, not the words.
- **Missing "EXCEPT" / "NOT" stems.** Some questions ask which option is *not* supported - there the three "correct-sounding" options are the wrong choices. Read the stem twice.

## Try it

At **/ielts/reading**, do an MCQ set and, for every question, write a one-word reason you **rejected** each wrong option (e.g. "opposite", "not stated", "too strong", "wrong cause"). Naming the distractor type is what builds the instinct.`,
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
    estMinutes: 14,
    body: `# Timing & strategy: 40 questions, 60 minutes, no panic

Academic Reading gives you **60 minutes for three passages and 40 questions**, and - crucially - **no extra time to transfer answers** (on the paper test, the answers you write *are* the answer sheet). Plenty of capable readers under-score purely because they run out of time on Passage 3. A plan fixes that, and the plan matters more than your raw reading speed.

## The marks-per-minute mindset

There are 40 marks and 60 minutes, so each question is worth about a minute and a half of your time - no more. Every mark counts the same: a brutal Passage 3 inference question is worth exactly as much as a one-word Passage 1 detail. It follows that **the worst possible trade is to spend three minutes rescuing one hard mark while three easy marks slip away unread.** Hold that idea and most timing decisions make themselves.

## A workable pacing plan

- **~20 minutes per passage**, but bank time early. Passages get harder, so aim for **17-18 min on Passage 1**, ~20 on Passage 2, leaving **22-23 min for Passage 3**.
- **Each mark is worth the same.** Never let two stubborn questions eat the time of ten gettable ones.
- **Leave 2-3 minutes at the end** to make sure every line has *an* answer.

A simple checkpoint table to glance at:

| Clock | You should be… |
| --- | --- |
| 18 min | finishing Passage 1 |
| 38 min | finishing Passage 2 |
| 57 min | finishing Passage 3 |
| 57-60 min | filling every remaining blank with a guess |

## The method, step by step

1. **Skim the passage (~2 min)** and label paragraphs before reading questions (see *Skimming & scanning*).
2. **Do the question types in the order that suits you**, not necessarily the printed order. *Matching headings* and *TFNG* reward a fresh memory of the whole text; detail and completion questions can be scanned at any time.
3. **Set a hard limit per question: ~1.5 minutes.** If you're stuck, **guess, flag it, move on** - there's no negative marking, so a blank is a wasted lottery ticket.
4. **Watch the clock at fixed checkpoints**, not constantly: glance at 18 and 38 minutes. If you're behind, **speed up immediately** rather than at the end.
5. **Final sweep:** fill every blank with your best guess. **40 answers attempted, always.**

## Worked example 1 - triage in action

You're 18 minutes in and still have two TFNG items on Passage 1 plus all of Passage 2. Decision:

- A TFNG you're "60% sure" on → **mark your best guess, flag it**, move to Passage 2. Coming back later with fresh eyes is cheaper than grinding now.
- One question needs a number you *cannot* find after 90 seconds → **guess and go**. Spending three minutes to maybe gain one mark risks losing several easy Passage 3 marks.

The candidate who finishes all three passages and guesses six hard ones almost always beats the one who "perfected" Passage 1 and never reached Passage 3.

## Worked example 2 - sequencing question types within a passage

Passage 2 has, in printed order: an MCQ set, then *matching headings*, then a summary completion. A strong order of attack is:

1. **Matching headings first**, while your skim of the whole passage is fresh - it tests the gist you've just built.
2. **Summary completion next**, scanning for the gaps (fast, anchored on the passage order).
3. **MCQ last**, since each question needs slow close reading of specific lines anyway.

You answered the same questions, but you did the memory-dependent task while memory was hot and saved the slow task for when you'd already located most of the text. Doing them in printed order would have wasted your fresh overview.

## Common mistakes

- **Reading the whole passage first.** That alone can burn 8-10 minutes. Skim, then let the questions drive your reading.
- **Sunk-cost questions.** Refusing to leave a hard item because you've "already spent two minutes". Cut your losses and flag it.
- **No final guesses.** Blanks score zero; a guess might score, especially on TFNG and MCQ. Never hand in an incomplete sheet.
- **Checking the clock every 30 seconds.** Constant clock-watching breaks concentration; trust your two fixed checkpoints instead.
- **Saving transfer for the end (paper test).** There is no transfer time - write answers straight onto the sheet as you go.

## Try it

At **/ielts/reading**, do a **full timed set** with a visible timer. Note the clock when you start each passage and compare it to the checkpoint table above. Afterwards, check: did any single question take over two minutes? That's the leak to plug next time.`,
  },
]
