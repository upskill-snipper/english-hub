// @ts-nocheck
// ─── Cambridge IGCSE First Language English (0500) Mock Exams ────────────────
// Paper 1: Reading (0500/11)                            80 marks, 2 hours
// Paper 2: Directed Writing and Composition (0500/21)   80 marks, 2 hours

// QA 2026-08-23: repointed from the aggregator to the type-only leaf so this
// lazy loader source cannot reach `src/data/mock-exams.ts` (which statically
// imports every bank) if the `type` keyword is ever dropped here.
import type { MockExamPaper } from './mock-exams/types'

/*
 * RESTRUCTURED, 31 October 2026, so that each paper is Cambridge's paper (the
 * founder's request of 24 October 2026, "Restructure Language mock papers to
 * real papers").
 *
 * WHAT WAS WRONG. None of these six papers was a paper Cambridge sets, and no
 * answer on them could be marked as Cambridge marks it.
 *   - Paper 1 (caie-p1-mock-01 to 03) said 96 marks, but its four questions,
 *     worth 4, 6, 8 and 12, added up to 30, in one "Reading Section" on one
 *     passage of about 300 words. Cambridge's Paper 1 for 2027 to 2029 is 80
 *     marks in 2 hours: four questions of 20 on three texts. Question 1 is short
 *     questions on Text A; Question 2 a summary of Text B in no more than 120
 *     words, 2(a), and the writer's attitude, 2(b); Question 3 short answers on
 *     Text C and a language task of about 200 to 250 words; Question 4 an
 *     extended response of about 250 to 300 words based on Text C, in the form
 *     and role the question sets.
 *   - Paper 2 (caie-p2-mock-01 to 03) said 104 marks, 52 and 52, and carried
 *     the code 0500/12, which is a Paper 1: Cambridge numbers a question paper
 *     by component and then by variant, so 0500/11 to 13 are Paper 1 and
 *     0500/21 to 23 Paper 2. Section A was one 52-mark task on a passage of
 *     about 270 words (caie-p2-mock-03 reprinted Paper 1's memoir of a garden),
 *     and Section B a choice of two tasks, an essay (personal, reflective or
 *     satirical) or a story. Cambridge's
 *     Paper 2 is 80 marks in 2 hours: Section A, Question 1, worth 40, in two
 *     parts, 1(a) for 5 and 1(b) for 35, on one or two texts of about 550 to 650
 *     words in all; Section B, a composition of about 350 to 450 words on one of
 *     four titles, two descriptive and two narrative, numbered 2 to 5.
 *   - Until 24 October 2026 no 0500 code reached a mark scheme
 *     (src/lib/marking/essay-feedback-targets.ts), so every answer got feedback
 *     with no marks; with the code it carried, each Paper 2 would since then
 *     have been read as a Paper 1, where its 52-mark questions matched nothing.
 *   - Every model answer was keyed 'Grade C', 'Grade B' or 'Grade A/A*'. The
 *     results page (src/app/dashboard/mock-exam/page.tsx) offers only Grade
 *     4-5, 6-7 and 8-9, and falls back from the one chosen to 6-7 and then 4-5,
 *     so not one of them was ever shown: every student who asked for a model
 *     answer was told that none was available.
 *
 * WHAT THEY ARE NOW. Each paper is set as the guides describe it,
 * src/data/mark-scheme-guides/cambridge-0500-paper1.ts and
 * cambridge-0500-paper2.ts (each checked twice on 24 October 2026 against
 * Cambridge's syllabus for 2027 to 2029 and its specimen papers), with the
 * marks of the marker's schemes, cambridge0500Paper1 and cambridge0500Paper2
 * in src/lib/marking/mark-schemes/cambridge-0500.ts, and question types the
 * hand-off accepts against theirs.
 * src/__tests__/a-language-mock-is-the-boards-paper.test.ts holds them to it.
 *   - Paper 1 is four questions of 20, numbered 1 to 4, each in a section of
 *     its own, so that each text is printed above its question: the mock-exam
 *     page shows a section's text from its first question only. Question 4
 *     prints Text C again.
 *   - Paper 2 is Question 1, with 1(a) and 1(b) in its text, in "Section A:
 *     Directed Writing", and the composition, one entry holding all four
 *     titles and labelled "2, 3, 4 or 5", in "Section B: Composition". The
 *     hand-off matches Paper 2 by section, so those titles must open as they do.
 *   - Short parts show their marks in square brackets, and every question asks
 *     for its parts to be labelled, because the marker marks each part only on
 *     what was written for it. Cambridge's syllabus does not fix how Question
 *     1's 20 marks, or Question 3's 10 for short answers, are split between
 *     parts; the split here is ours, in parts of 1 to 3 marks and one 5-mark
 *     part, as in Cambridge's specimen paper.
 *   - The wording is ours, in Cambridge's manner: Cambridge's own wording is
 *     its copyright. Every question has a mark scheme, with the answers part by
 *     part for the short parts, and one model answer, keyed 'Grade 8-9' so that
 *     the results page can show it. The minutes are our suggestion, from the
 *     guides: about 15 minutes in all to read Paper 1's three texts, and about
 *     25 minutes for each question.
 *
 * THE TEXTS. Each Paper 1 keeps one theme across its three texts: the far
 * north, printing and reading, and patience and care.
 *   - Text B on each Paper 1 is one of the three passages these papers printed
 *     before, written for the site and still labelled "(Original)": The Arctic
 *     in Crisis, The Printing Press and Its Paradoxes and The Gift of
 *     Attention. Each was about 300 words; each is now about 500, so that a
 *     summary of 120 words has points to select and points to leave out, and
 *     each closes on a part where the writer's attitude shows, for 2(b).
 *   - Text A on each Paper 1 is new, written for the site and labelled so:
 *     first-person accounts of a day with a dog team, a day in a letterpress
 *     workshop and the mending of a clock.
 *   - Text C on each Paper 1 is a real extract, cut by script from the held
 *     edition in src/data/full-texts/ (named above each constant), in whole
 *     paragraphs except that Silas Marner's opens at a sentence inside its
 *     first paragraph, with nothing else changed: Mary Shelley, Frankenstein,
 *     Walton's letter of 5 September in Chapter 24; Charlotte Brontë, Jane
 *     Eyre, Chapter 1; George Eliot, Silas Marner, Chapter 14. No other mock
 *     paper on the site prints any of the three. Each was chosen for what
 *     Question 3 and Question 4 need: a narrative with images worth analysing,
 *     and a person in it whose role a student can write in.
 *   - Paper 2 prints two texts in Section A (Cambridge sets one or two), about
 *     570 words in all, every one written for the site and labelled
 *     "(Original)". Social Media: Benefit and Burden and In Defence of Reading
 *     are the passages these papers printed before, revised, each now set
 *     beside a second text that disagrees with it in part; the third paper's
 *     two texts, on school gardens, are new.
 *   - The passages written for the site were checked for what a student might
 *     carry into an exam as fact. The Arctic is said to warm "at least twice as
 *     fast" as the planet, "nearly four times" by recent measurements, where it
 *     said "twice"; drowning polar bears are "some", and the link between the
 *     Arctic and weather far to the south is called debated, as it is, where
 *     the passage named monsoons, hurricanes and droughts as its effects. The
 *     reading statistics are "by some estimates". The sentence on teenage
 *     suicide rates in Social Media: Benefit and Burden is gone: most readers
 *     are children, and a claim about suicide set as practice material, with
 *     no source and no support, is not one a mock paper needs.
 *   - Every quotation of four words or more in the reading questions, their
 *     model answers and their mark schemes is checked by
 *     scripts/check-mock-exam-extracts.mjs against the text it quotes. That
 *     script does not read writing questions, so the quotations in Paper 2's
 *     Question 1 were checked against its two texts by a one-off script on
 *     31 October 2026, which found every one.
 *
 * SECOND READING, 31 October 2026, by an independent checker, against the
 * guides, the texts and Cambridge's 2027 specimen papers and mark schemes
 * (0500/01 and 0500/02, cambridgeinternational.org Images/718838, 718839,
 * 718842 and 718843, read that day). Every quotation of any length in the
 * eighteen questions was checked again against the text it quotes and found.
 * Fixed, one line each:
 *   - length: each Question 3 printed its language-task paragraphs again and
 *     ran to 2,783 to 3,484 characters, past the 1,500 the marker accepts, so
 *     no Question 3 answer could be marked; 3(d) now names its paragraphs in
 *     Text C, printed above, and every question text is under 1,400.
 *   - board wording: the rubric of 1(c), 2(a), 2(b), 3(a) to 3(d) and
 *     Question 4, and Paper 2 Question 1's bullets and rubric, were
 *     Cambridge's own sentences (its 2027 specimen, or its 2024 to 2026
 *     papers); all are reworded, asking the same things.
 *   - wrong reference: caie-p1-mock-02 1(g) pointed to paragraph 5 alone, but
 *     its answers rest on paragraphs 3 and 4 (twenty minutes for eleven
 *     letters, type set back to front); now paragraphs 3 to 5.
 *   - mark scheme: caie-p1-mock-01 3(a)(ii), "WALLED IN", was also answered
 *     by "surrounded by mountains of ice"; it is now "IMPRISONED", which only
 *     "immured" fits, and 3(a)(iii) says why "almost deprived of life" is not.
 *   - mark scheme: caie-p1-mock-01 1(b) counted the howling and the
 *     complaints about waiting as two points (both are the noise) and missed
 *     that running is a sled dog's favourite thing; 1(h) credited affection
 *     for the dogs, not a feeling about the lake, now the worry she carries
 *     alone because the dogs "do not know".
 *   - mark scheme: the own-words parts 1(d) on all three Paper 1s credited
 *     the text's own wording; each now gives its points in other words and
 *     says a copied point earns nothing (specimen mark scheme 1(e)(ii)).
 *   - mark scheme: caie-p1-mock-02 1(f) gave a separate mark for why type is
 *     cast back to front, part of the same point, and missed the beginner's
 *     mistake Martha names; 3(b)(i) accepted "by chance" for "chanced", the
 *     same word; caie-p1-mock-03 3(a)(ii) accepted "stole quietly", which
 *     lacks the comparison with a little animal. All three corrected.
 *   - mark scheme: 3(a) now credits an answer that repeats the sentence with
 *     the right word in place, as the specimen mark scheme does.
 *   - untrue claim: caie-p1-mock-02 3(c) model said Jane fears neither the
 *     storm nor the pictures; Text C calls one picture "an object of terror".
 *   - untrue claim: caie-p1-mock-01 3(d) model said the ice had killed their
 *     comrades (Text C says only that many have died there); its Question 4
 *     model sent the deputation "below" and its scheme had "some" dead
 *     (Text C: "many").
 *   - untrue claim: caie-p1-mock-02 Question 4 model opened with the walk
 *     from the novel's first line, which Text C does not print; its glossary
 *     called Pamela and Henry, Earl of Moreland "novels of the time" (both
 *     are eighteenth-century).
 *   - untrue claim: caie-p1-mock-03's introduction had Silas name the child
 *     Eppie (he names her Hephzibah and calls her Eppie); 1(g) said Mrs
 *     Adeyemi gave up or chose against engineering (Text A: she "ended up" in
 *     her father's trade); its Question 4 model had the scissors go with
 *     Eppie and her climb back "within half an hour" (Text C: once washed).
 *   - untrue claim: caie-p2-mock-01 1(a) model said "many people" (Text B:
 *     "some"), and its 1(b) model said the writer missed the baby photographs
 *     (Text B: a parent showed them); 1(a) asked about the change "during
 *     the month" while its answer traces it from before to after, so it now
 *     asks from the start of the text to its end.
 *   - model answer: 3(c) on caie-p1-mock-01 and -02 analysed two examples
 *     where the part asks for one; 3(d) on all three analysed four to seven
 *     choices where it asks for three; 2(b) on all three gave four to six
 *     details where it asks for three. Each now does what its part asks.
 *   - model answer: the own-words parts 1(d) and 1(g) on caie-p1-mock-01 and
 *     1(d) on -02 and -03 echoed the text's wording, now in other words;
 *     caie-p1-mock-02 1(g) credited the writer with making the print, which
 *     Martha made from the type the writer set.
 *
 * The notes of 26 September 2026 below are kept as the record of what was
 * fixed then. They describe questions and answers these papers no longer set,
 * and passages since rewritten: the passages written for the site now use no
 * dashes at all.
 *
 * FACT-CHECK, 26 September 2026 (scripts/check-mock-exam-extracts.mjs).
 *
 * The five passages below were written for this site and are labelled
 * "(Original)", so no attribution needed correcting and none was replaced.
 * The defects were in what the questions and model answers said about them,
 * on papers the site serves:
 *
 *   - caie-p1-02-q2, Grade A/A*, printed three quotations that are not in
 *     Passage 2: "abundant information / scarce understanding" and "instant
 *     connection / distant empathy" were the answer's own compressions set in
 *     quotation marks, and "The internet... has given / has also created" was
 *     called "the penultimate sentence, with its parallel structure of four
 *     elements", when those verbs sit in two separate sentences (the second
 *     and third of the paragraph) and the penultimate sentence is the double
 *     antithesis. It now quotes the words as printed and describes the
 *     sentences the paragraph actually has.
 *   - Passage 2 ended "The technology has not changed; only our nature has
 *     remained constant", which contradicts itself (if only our nature is
 *     constant, the technology has changed, and the passage's whole
 *     comparison is between the press and the internet), and the A/A* answer
 *     praised it as an aphorism. The "not" is removed and every answer that
 *     quotes the sentence follows.
 *   - caie-p1-02-q1b quoted "the darker side"; the passage says "a darker
 *     side". Its A/A* answer said the internet spreads truth and falsehood
 *     "at equivalent speed"; the passage says falsehood "proliferates faster
 *     than truth". caie-p1-02-q1c, A/A*, summarised a point about "critical
 *     thinking" that the passage never makes.
 *   - The dash sweep of 26 May 2026 (f82b978f) turned each em dash in these
 *     passages into a bare hyphen, fusing words a pupil has to read and
 *     quote: "The internet-the printing press of our age-has given", "The
 *     permafrost-frozen soil", which reads as a compound adjective. All
 *     eleven are now spaced hyphens, the house substitute; the genuine
 *     compounds ("attention-stealing", "long-form") are untouched.
 *   - caie-p1-03-q1b printed two sentences of the grandmother's speech as one
 *     quotation, silently dropping the narration between them. They are now
 *     two quotations.
 *   - caie-p1-03-q2, A/A*, said the narrator calls the grandmother's stance
 *     "antiquated"; the narrator calls it "almost revolutionary".
 *   - caie-p1-01-q2 called "and therefore it is not our responsibility"
 *     conditional syntax (it has no condition; "therefore" dresses an excuse
 *     as a deduction), credited the third paragraph with "scientific
 *     terminology" it does not contain, and its mark scheme called "we"
 *     second-person address. caie-p1-01-q1c, A/A*, wrote "cannot be
 *     understated", which says the opposite of what it means.
 *   - caie-p2-01-q1: the B and A/A* speeches argued against a conclusion the
 *     passage does not reach. The A/A* "challenge[d] the deterministic
 *     conclusion that abandonment is necessary", but the passage calls
 *     abandoning social media "naive" and ends "not rejection but
 *     transformation"; the B called it "a blanket condemnation". A reading
 *     answer that misstates its passage would lose the marks for reading. The
 *     C and B now support the argument as written; the A/A* challenges the
 *     claim the passage does make, that "the technology itself is neutral".
 *
 * SECOND PASS, the same day (adversarial review of the fixes above):
 *
 *   - The dash sweep fused the model answers too, not only the passages:
 *     75 em dashes, in every paper, had become bare hyphens ("its most
 *     dramatic impacts-starving polar bears ... thawing permafrost-are",
 *     "the Enlightenment-which"). An exemplar that runs its words together
 *     teaches the wrong punctuation. Each one was located from the file as it
 *     stood before f82b978f and is now a spaced hyphen; genuine compounds
 *     ("fifteenth-century", "self-reinforcing") are untouched.
 *   - Passage A (Paper 2) stated that depression and anxiety among young
 *     people "have increased by over 300% in the past decade". No source is
 *     given and no survey we know of supports that figure; a pupil could
 *     carry it into a real exam as fact. It now says they have "climbed
 *     steeply", which the NHS England and CDC surveys of young people over
 *     that decade bear out. The caie-p2-01-q1 A/A* speech had called the passage's evidence
 *     "rigorous and empirically grounded" and its harms "documented", when
 *     the passage names no study at all; it now says so, and still takes the
 *     pattern seriously. It had also called "profits from human misery" the
 *     author's thesis; that is a charge the passage makes, now quoted as one.
 *   - caie-p1-01-q2 called "tragic" the paragraph's "opening word" (it is the
 *     sixth), and the B answer called a list of three "repetition".
 *   - caie-p1-01-q1a, A/A*: melting snow does not reveal ocean water; the
 *     passage says "When ice melts".
 *   - caie-p1-02-q1c, A/A*, a summary marked for "own words", copied two
 *     clauses of the passage unquoted and called almanacs "false astrologies".
 *     caie-p1-02-q1b, A/A*, said the press "democratized truth" (the passage:
 *     "democratized knowledge") and that the internet spreads truth and
 *     falsehood "alike", beside the passage's "faster than truth".
 *   - caie-p1-03-q1b, B, credited the passage with plant signals ("growth
 *     patterns, and vigor") it never mentions; caie-p1-03-q2, B, credited the
 *     grandmother's speech with the yellowing leaf, which is in the
 *     narration; the q1c mark scheme rewarded "wisdom as outcome rather than
 *     product", which means nothing (the passage: what the garden "really
 *     grew was wisdom").
 *   - caie-p2-02-q1, C, said the passage gives reading "only twenty
 *     minutes" (it says "less than"); caie-p2-03-q1, C, said the garden
 *     "worked perfectly" in a passage where late frosts devastate her
 *     seedlings and pests decimate whole rows.
 */

// ─── How each question is marked ─────────────────────────────────────────────
// In the site's own words, from the guides named above. Cambridge's level
// descriptors are its copyright and are not copied.

const P1_ANSWER_GUIDANCE =
  'Write all your answers in the box below, starting each with the part it answers, such as (a) or (b)(i), so that each part is marked on what you wrote for it.'

const P1_Q1_MARKING = [
  'One mark for each correct, separate point, up to the marks shown for each part: 20 marks in all, with no levels.',
  'Where a part asks for your own words, an answer copied from the text earns nothing. Where a part asks you to explain, explain rather than copy.',
  'To explain a phrase in full, explain every part of it: an explanation of only part of a phrase earns only part of the marks.',
  'A point made twice earns one mark, and answers should come from the paragraph the part points to.',
]

const P1_Q2A_READING = [
  'Level 1 (1 to 2 marks): picks up only a few relevant points, loses sight of the focus and does little real selecting.',
  'Level 2 (3 to 4 marks): has a general grasp of the relevant points but keeps to the focus only some of the time, and selects without much judgement.',
  'Level 3 (5 to 6 marks): covers a fair number of relevant points with the odd lapse in focus; it selects, but unneeded material creeps in.',
  'Level 4 (7 to 8 marks): covers plenty of the points that matter, keeps to the focus throughout and chooses with care, so the main lines of the text start to show.',
  'Level 5 (9 to 10 marks): gathers the points that matter most, never strays from the focus and selects so well that the reader sees the whole picture.',
]

const P1_Q2A_WRITING = [
  'Level 1 (1 mark): hard to follow and loosely organised, with stretches copied from the text.',
  "Level 2 (2 to 3 marks): mostly clear and sometimes well ordered; tight in places, but elsewhere it borrows the text's own wording.",
  'Level 3 (4 to 5 marks): smooth and easy to follow, well ordered, saying a lot in few words, in a good range of your own words.',
  'The summary must be continuous writing of no more than 120 words: not notes, and with no quotations, examples, repetition or opinions of your own.',
]

const P1_Q2B_LEVELS = [
  'Level 1 (1 mark): makes a basic point about how the writer feels, with little or nothing to show it.',
  "Level 2 (2 to 3 marks): identifies part of the writer's attitude and backs it up with a detail or two.",
  "Level 3 (4 to 5 marks): pins down the writer's attitude accurately and proves it with well-chosen details from the text.",
]

const P1_Q3_SHORT_MARKING = [
  'Parts (a) and (b): one mark for each correct answer. For (a), give the exact word or phrase from the text (an answer that repeats the sentence with the right word or phrase in place of the capitals also earns the mark); for (b), explain the word in your own words, never with the same word or another form of it.',
  "Part (c) is marked in three levels, as a part like it was in Cambridge's specimen paper: Level 1 (1 mark), a relevant example that is only repeated or explained in the most general way; Level 2 (2 to 3 marks), an explanation of what the example suggests, with some sense of how it works; Level 3 (4 to 5 marks), a precise, full explanation that opens up what the example suggests and how it shapes the reader's view. The descriptions are ours.",
]

const P1_Q3D_LEVELS = [
  'Level 1 (1 to 2 marks): chooses words that do little for the task and shows little understanding of them.',
  'Level 2 (3 to 4 marks): chooses less telling words; the comments mostly repeat the text or stay vague, even if techniques are named correctly.',
  'Level 3 (5 to 6 marks): chooses sensible words and can say what most of them mean, but any comment on their effect is basic.',
  'Level 4 (7 to 8 marks): good choices, with confident explanations of what they mean in the passage, a first go at explaining images, and some sense of what the writer is doing.',
  'Level 5 (9 to 10 marks): the sharpest choices, each opened up to show what it suggests and why the writer used it, with images explained exactly and thoughtfully.',
  'Comments on grammar, sentence shape or punctuation earn credit only on top of comments on the words themselves. The analysis is judged as a whole, not by counting choices, though the top levels expect a range of choices that includes images.',
]

const P1_Q4_READING = [
  'Level 1 (1 to 2 marks): uses very little from the text, or copies it without reshaping it for the task.',
  'Level 2 (3 to 4 marks): gets hold of some main ideas, but leans on the words of the text, drifts from the bullets and may sound wrong for the role.',
  'Level 3 (5 to 6 marks): offers simple ideas from the text but rarely takes them further; some bullets get more attention than others and the voice is flat.',
  'Level 4 (7 to 8 marks): uses many of the useful ideas and develops some, covers all the bullets, backs points up often and sounds right for the role.',
  'Level 5 (9 to 10 marks): uses most of the useful ideas, develops and weighs them up, weaves in detail throughout, covers every bullet fully and keeps a believable voice.',
]

const P1_Q4_WRITING = [
  'Level 1 (1 to 2 marks): hard to understand, too short to develop anything, and partly copied from the text.',
  'Level 2 (3 to 4 marks): clumsy in places and jumbled in order, with plain or borrowed words and little thought for the audience.',
  'Level 3 (5 to 6 marks): easy to follow but plain; it sticks to the order of the original text, the vocabulary does the job and there is some sense of the audience.',
  'Level 4 (7 to 8 marks): reads smoothly most of the time, with ideas in a sensible order, a good range of words and a tone that often fits.',
  'Level 5 (9 to 10 marks): confident and fluent, shaped so the reader follows it easily, with wide and exact vocabulary and a tone that fits throughout.',
  'The two marks are added. Paper 1 does not mark spelling, punctuation and grammar as such.',
]

const P2_SECTION_A_GUIDANCE =
  'Write both parts in the box below, starting with 1(a) and then 1(b), each labelled, so that each part can be marked on what you wrote for it.'

const P2_Q1A_LEVELS = [
  'Level 1 (1 mark): shows only a slight grasp of what the question asks about.',
  'Level 2 (2 to 3 marks): partly understands what the question asks about and backs it up with a detail or two.',
  'Level 3 (4 to 5 marks): gets to the heart of what the question asks about and supports each point with well-chosen details from the text.',
  'Answer in your own words, with details from the text as evidence.',
]

const P2_Q1B_READING = [
  'Level 1 (1 to 2 marks): barely uses the texts, or copies chunks of them without choosing what matters.',
  'Level 2 (3 to 4 marks): refers briefly to the more obvious points and may copy parts of the texts.',
  'Level 3 (5 to 6 marks): uses a fair amount of simple material but rarely builds on it, often just following the texts point by point.',
  'Level 4 (7 to 8 marks): draws on plenty of the useful material, develops some of it and supports some points with details.',
  'Level 5 (9 to 10 marks): draws on most of the useful material, builds on it and weighs it up, and blends it smoothly into the argument.',
  'Ideas from both texts, brought together into one line of argument, are what the top levels look for.',
]

const P2_Q1B_WRITING = [
  'Level 1 (1 to 5 marks): hard to follow: ideas are barely ordered, words are few or copied, the reader is ignored and errors block the meaning.',
  'Level 2 (6 to 9 marks): loosely ordered, with a narrow or borrowed vocabulary, little sense of who is reading and repeated errors that sometimes get in the way.',
  'Level 3 (10 to 13 marks): the meaning is clear but the writing is uneven: it follows the order of the texts, the words are simple and the audience is only partly in mind, with frequent errors.',
  'Level 4 (14 to 17 marks): works in places: ideas mostly follow a sensible order, the vocabulary suits the task, the tone partly fits the audience and the accuracy is generally good.',
  'Level 5 (18 to 21 marks): works well throughout: soundly organised, words chosen with some care, a tone that fits the audience and only occasional small errors.',
  'Level 6 (22 to 25 marks): confident and exact: the structure carries the reader, the vocabulary is precise, the tone is just right for the audience and errors are very rare.',
  'Spelling, punctuation and grammar count towards this mark. The reading and writing marks are added, with 1(a), for 40.',
]

const P2_SECTION_B_GUIDANCE =
  'Answer ONE question from this section: Question 2, 3, 4 or 5. Questions 2 and 3 ask for descriptive writing and Questions 4 and 5 for narrative writing. Write about 350 to 450 words. The content and structure of your writing are worth up to 16 marks, and its style and accuracy up to 24. Begin your answer with the number of the question you have chosen.'

const P2_COMPOSITION_CONTENT = [
  'Level 1 (1 to 2 marks): mostly off the title or unclear, with little shape; hard to picture or to follow.',
  'Level 2 (3 to 4 marks): thin, simple ideas with a loose shape; a few relevant details, or events that do not link up well.',
  'Level 3 (5 to 7 marks): keeps to the title in a simple way, with a shape that mostly holds together; a string of relevant details, or a plain story told in order.',
  'Level 4 (8 to 10 marks): clearly on the title, with some development and sensible organisation; some details that work, or a connected plot where character and setting start to come through.',
  'Level 5 (11 to 13 marks): developed and largely holds the reader, with some deliberate choices about order and pace; a picture the reader can mostly see, or a plot that builds through character, detail and a climax.',
  'Level 6 (14 to 16 marks): tightly focused on the title, rich and gripping throughout, with a balanced structure controlled for effect; a picture the reader can fully see, or a plot crafted with care from start to finish.',
]

const P2_COMPOSITION_STYLE = [
  'Level 1 (1 to 4 marks): words and sentences are often wrong for what is meant, and mistakes make it hard to read.',
  'Level 2 (5 to 8 marks): a narrow choice of words and sentences, little thought for the reader, and repeated mistakes that sometimes confuse.',
  'Level 3 (9 to 12 marks): plain words and simple sentence patterns, some thought for the reader, and many mistakes, though the meaning mostly comes through.',
  'Level 4 (13 to 16 marks): some well-chosen words and a mix of sentence types, now and then used for effect; the reader is interested at times, and mistakes are not frequent.',
  'Level 5 (17 to 20 marks): words chosen with care and sentences varied on purpose; the reader is kept interested, with only the odd small slip.',
  'Level 6 (21 to 24 marks): exact, well-judged words and sentences shaped for effect throughout; the reader is gripped and mistakes are very rare.',
  'The two marks are added. Spelling, punctuation and grammar count in this mark.',
]

const P2_COMPOSITION_REWARDS = [
  'Ideas that fit the title, developed in detail, in a structure shaped on purpose from the opening to the ending.',
  "In a description: a picture the reader can see, built from small, precise details, imagery and shifts in what the reader's attention is drawn to. A description builds a picture, not a plot.",
  'In a story: a plot that develops, characters the reader believes in, a sense of place, and a climax or turning point that pays off, without so many events that none is developed.',
  'Precise vocabulary rather than showy words, sentences varied for effect, and accurate spelling, punctuation and grammar.',
]

// ─── Paper 1 texts ───────────────────────────────────────────────────────────

// Paper 1 Mock 1, Text A. Written for this site (Original), 31 October 2026.
const CAIE_P1_01_TEXT_A = `I had imagined the far north as a place of silence, so the noise at the kennels came as a shock. It was ten o'clock in the morning, the sun had not yet climbed above the hills, and the thermometer by the gate read minus twenty-four degrees. Forty dogs were tied up outside their wooden huts, and every one of them was howling, yelping or leaping into the air as if the ground were too hot to stand on. Nobody had told me that a sled dog's favourite thing in the world is to run, or that it complains loudly about every minute it is kept waiting.

Our guide, Ingrid, had been driving dog teams since she was nine years old. Before we were allowed anywhere near a sled, she gave us her rules. Keep both feet on the runners. Stand on the brake on every downhill slope. Lean into the bends, as you would on a bicycle. Above all, never let go of the sled. "If you fall off, hold on," she said. "A team without a driver does not stop. It runs until it is tired, and these dogs are never tired." Everyone laughed, but she was not joking.

My team was six dogs, and I could hardly believe how small they were: lean, wiry animals with frost on their eyelashes, much lighter than the great shaggy wolves I had pictured. They pushed their heads into their harnesses as eagerly as children pulling on their coats for a snowball fight. At the front was a quiet grey female called Pepper. "Your leader," Ingrid told me. "She listens. The others only want to go fast." The two biggest dogs were clipped in nearest the sled, where the pulling is hardest.

Then Ingrid pulled up the metal hook that anchored my sled in the snow, and the noise stopped. It did not fade; it simply stopped, as though someone had turned off a radio. The dogs were running, and running was all they had wanted. In the sudden quiet I could hear only the hiss of the runners and the soft drumming of paws on packed snow. My fear, which had been sitting in my stomach all morning, turned into something I can only describe as joy.

It lasted until the first bend. I forgot to lean, the sled tipped over, and I found myself in the snow, clinging to the handlebar while six dogs towed me along on my stomach like a sack of potatoes. I held on, because I could hear Ingrid's voice in my head. After a few metres, Pepper glanced back over her shoulder, slowed and brought the team to a halt, with what I am fairly sure was a look of pity. I stood up with snow down my collar and up my sleeves, laughing so much that it hurt.

In the afternoon we crossed a frozen lake. Before we set out across it, Ingrid walked ahead and drilled a hole to measure the thickness of the ice. When she came back, she was quieter than before. When she was a girl, she told me, the lake froze in November and you could cross it until April. Now it often freezes after Christmas, and some winters it is never safe at all. "The dogs do not know," she said, scratching Pepper behind the ears. "They just want to run. I am the one who worries."

By the time we returned to the kennels, the sky was turning a deep, glowing blue and my fingers had stopped belonging to me. The dogs rolled in the snow, drank bowls of warm water and ate their fill, then curled up in their huts with their tails over their noses. I had come north looking for silence. I found it, but not where I expected: it was in the moment when six dogs who had waited all morning were finally allowed to do what they were born to do.`

const CAIE_P1_01_TEXT_A_SOURCE =
  'Text A: Six Dogs and a Frozen Lake (Original, written for this site)'

// Paper 1 Mock 1, Text B. Written for this site (Original): the passage this
// paper printed before, lengthened and corrected on 31 October 2026.
const CAIE_P1_01_TEXT_B = `The Arctic is warming faster than anywhere else on Earth: at least twice as fast as the planet as a whole, and by some recent measurements nearly four times as fast. Scientists call this Arctic amplification, and much of it is driven by a simple, merciless loop. Ice and snow are white, and white surfaces reflect sunlight back into space. When ice melts, it reveals darker ocean water beneath, which absorbs the sun's heat instead of reflecting it. The warmer water melts more ice, which uncovers more dark water, which absorbs still more heat. It is a vicious cycle, and every turn of it makes the next one faster.

The consequences are already visible. Polar bears, magnificent hunters shaped over thousands of years for life on the ice, depend on floating sea ice as a platform from which to catch seals. As the ice shrinks, they must swim further between floes, and some have drowned in the attempt. In some regions, scientists have recorded bears that are thinner than they used to be and are raising fewer cubs. For the Indigenous peoples who have lived in the Arctic for thousands of years, the sea ice is a road as well as a hunting ground, and it now breaks up earlier and less predictably, turning journeys that their grandparents made safely into gambles.

On land, the permafrost, ground that has stayed frozen for thousands of years, is beginning to thaw. As it softens, roads buckle, and the foundations of houses crack and sink. Worse, the frozen soil is full of the remains of plants and animals that have lain there without rotting since long before the first cities were built. As the ground thaws, they begin to decay, releasing carbon dioxide and methane, gases that trap heat in the atmosphere and so warm the whole planet further.

What makes this crisis particularly tragic is that most of the world cannot see it. The Arctic is remote, thinly populated and easily forgotten by those living in milder regions. We do not see the bears growing thin. We do not hear the crack of collapsing ice shelves. We do not smell the ancient soil thawing and releasing its carbon. Climate change is happening somewhere else, we tell ourselves, and therefore it is not our responsibility.

Yet the Arctic is the planet's air conditioning. Its ice and snow reflect sunlight that would otherwise heat the oceans and the air, and every summer there is less of it to do the job. What happens in the Arctic does not stay in the Arctic. Water melting from the vast ice sheet that covers Greenland is already raising sea levels around the world, bringing the sea closer to coastal cities thousands of miles away. Some scientists believe that a warmer Arctic is also weakening the jet stream, the fast river of air that steers the weather across the northern half of the world, and making long cold spells, heatwaves and floods more likely. They are still debating how strong that link is. But nobody who has studied the Arctic doubts that its fate and ours are bound together.

The Arctic is not a remote curiosity. It is the heartbeat of our planet's climate, and it is racing.`

const CAIE_P1_01_TEXT_B_SOURCE = 'Text B: The Arctic in Crisis (Original, written for this site)'

// src/data/full-texts/frankenstein.ts, Chapter XXIV: 9 paragraphs, 778 words, cut by script: Walton's letter of 5 September.
const CAIE_P1_01_TEXT_C = `September 5th.

A scene has just passed of such uncommon interest, that although it is highly probable that these papers may never reach you, yet I cannot forbear recording it.

We are still surrounded by mountains of ice, still in imminent danger of being crushed in their conflict. The cold is excessive, and many of my unfortunate comrades have already found a grave amidst this scene of desolation. Frankenstein has daily declined in health: a feverish fire still glimmers in his eyes; but he is exhausted, and, when suddenly roused to any exertion, he speedily sinks again into apparent lifelessness.

I mentioned in my last letter the fears I entertained of a mutiny. This morning, as I sat watching the wan countenance of my friend--his eyes half closed, and his limbs hanging listlessly,--I was roused by half a dozen of the sailors, who demanded admission into the cabin. They entered, and their leader addressed me. He told me that he and his companions had been chosen by the other sailors to come in deputation to me, to make me a requisition, which, in justice, I could not refuse. We were immured in ice, and should probably never escape; but they feared that if, as was possible, the ice should dissipate, and a free passage be opened, I should be rash enough to continue my voyage, and lead them into fresh dangers, after they might happily have surmounted this. They insisted, therefore, that I should engage with a solemn promise, that if the vessel should be freed I would instantly direct my course southward.

This speech troubled me. I had not despaired; nor had I yet conceived the idea of returning, if set free. Yet could I, in justice, or even in possibility, refuse this demand? I hesitated before I answered; when Frankenstein, who had at first been silent, and, indeed, appeared hardly to have force enough to attend, now roused himself; his eyes sparkled, and his cheeks flushed with momentary vigour. Turning towards the men, he said--

"What do you mean? What do you demand of your captain? Are you then so easily turned from your design? Did you not call this a glorious expedition? And wherefore was it glorious? Not because the way was smooth and placid as a southern sea, but because it was full of dangers and terror; because, at every new incident, your fortitude was to be called forth, and your courage exhibited; because danger and death surrounded it, and these you were to brave and overcome. For this was it a glorious, for this was it an honourable undertaking. You were hereafter to be hailed as the benefactors of your species; your names adored, as belonging to brave men who encountered death for honour, and the benefit of mankind. And now, behold, with the first imagination of danger, or, if you will, the first mighty and terrific trial of your courage, you shrink away, and are content to be handed down as men who had not strength enough to endure cold and peril; and so, poor souls, they were chilly, and returned to their warm fire-sides. Why, that requires not this preparation; ye need not have come thus far, and dragged your captain to the shame of a defeat, merely to prove yourselves cowards. Oh! be men, or be more than men. Be steady to your purposes, and firm as a rock. This ice is not made of such stuff as your hearts may be; it is mutable, and cannot withstand you, if you say that it shall not. Do not return to your families with the stigma of disgrace marked on your brows. Return, as heroes who have fought and conquered, and who know not what it is to turn their backs on the foe."

He spoke this with a voice so modulated to the different feelings expressed in his speech, with an eye so full of lofty design and heroism, that can you wonder that these men were moved? They looked at one another, and were unable to reply. I spoke; I told them to retire, and consider of what had been said: that I would not lead them farther north, if they strenuously desired the contrary; but that I hoped that, with reflection, their courage would return.

They retired, and I turned towards my friend; but he was sunk in languor, and almost deprived of life.

How all this will terminate, I know not; but I had rather die than return shamefully,--my purpose unfulfilled. Yet I fear such will be my fate; the men, unsupported by ideas of glory and honour, can never willingly continue to endure their present hardships.`

const CAIE_P1_01_TEXT_C_SOURCE =
  "Text C: Mary Shelley, Frankenstein (1818; the text of the revised edition of 1831), from Chapter 24, Walton's letter of 5 September"

// Paper 1 Mock 2, Text A. Written for this site (Original), 31 October 2026.
const CAIE_P1_02_TEXT_A = `The workshop was at the end of a cobbled yard, behind a door so low that I had to duck to get through it. Inside, it smelt of oil, ink and old paper, and it was crowded with machines that looked as though they belonged in a museum, which, in a sense, they did. The largest, an iron press painted a faded green, was more than a hundred and fifty years old. "She still works," said Martha, the printer, patting it as if it were a horse. "She will outlast me."

I had come for a one-day course in letterpress printing, the way in which books, newspapers and posters were printed for about five hundred years, from Gutenberg's time until well into the twentieth century. Today, Martha told us, it survives mainly in small workshops like hers, which print wedding invitations, posters and books of poems for people who want something that a computer cannot give them.

Our first task was to set our own names in type. The letters were kept in a wide, shallow wooden drawer called a case, divided into dozens of little compartments, one for each letter. Printers once kept their capital letters in a separate case placed above the one for small letters, which is why we still call them upper-case and lower-case letters. I picked out each tiny metal letter between my finger and thumb and lined them up in a narrow metal tray called a composing stick. It took me twenty minutes to set eleven letters. Martha, who has been doing this for forty years, can set a line of type faster than I can type a text message.

The hardest thing was that everything is back to front. Each letter is cast as a mirror image of itself, so that it will print the right way round, which means that a small b looks exactly like a d until you learn to tell them apart by the groove cut into the side of each piece of metal. I set my name with the d facing the wrong way. Martha laughed and said that every beginner had made the same mistake for five hundred years.

Then came the printing. Martha rolled a thin film of black ink across a metal plate until it shone like wet tar, inked our type, laid a sheet of thick cream paper over it and pulled the long iron handle. There was a heavy, satisfying thud. When she peeled the paper away, my name was pressed into it so deeply that I could trace each letter with my fingertip. It was crooked, and the e was smudged, but I have never been so proud of eleven letters.

At the end of the day, I asked Martha why anyone still prints like this, when a laser printer can do the same job in seconds. She thought about it for a long time. "Speed is wonderful," she said at last, "but it makes us careless. When every letter has to be picked up by hand, you think about every word. Nobody ever set a line of type by accident." She told me that she sometimes turns work away. Once, a customer wanted a thousand leaflets by the next morning, and she sent him to a print shop in town. "I could have done it," she said. "But I would have hated every one of them."

I left with ink on my hands and a single sheet of paper rolled up under my arm. The ink took three days to wash off. I am not sure I wanted it to.`

const CAIE_P1_02_TEXT_A_SOURCE = 'Text A: Letters in Lead (Original, written for this site)'

// Paper 1 Mock 2, Text B. Written for this site (Original): the passage this
// paper printed before, lengthened and corrected on 31 October 2026.
const CAIE_P1_02_TEXT_B = `The invention of the printing press by Johannes Gutenberg in the fifteenth century stands as one of history's most important moments, yet few people today appreciate how much it changed. Before Gutenberg, every book in Europe was copied by hand, a slow process that could take months or even years. A single manuscript might cost as much as a house. Books, and the knowledge inside them, were therefore concentrated in the hands of the clergy and the wealthy. Most people could not read at all, and few would ever hold a book.

The printing press changed everything. Suddenly, books could be produced in hundreds, then thousands, at a fraction of their former cost, and within fifty years of Gutenberg's first books there were millions of printed volumes in Europe. Ideas that had been locked in monastery libraries could now travel to every corner of the continent. As books became cheaper, more people had a reason to learn to read, and reading spread far beyond the monasteries and the courts of kings. Scholars in different countries could study identical copies of the same text, compare their findings and correct one another's mistakes. The Protestant Reformation, the Scientific Revolution, the Enlightenment: none of these movements would have been possible without the printing press. It was the technology that made the modern world.

Yet there is a darker side to this story. The same technology that democratised knowledge also made it easy to mass-produce propaganda and misinformation. During the Renaissance, printers churned out astrological almanacs and books of magic alongside genuine scientific works, and cheap pamphlets spread rumours, insults and outright lies about rival rulers and religions faster than anyone could answer them. The printing press made widespread reading possible, but it did not make truth inevitable. For every book that advanced human knowledge, there was another designed to mislead, exploit or manipulate.

This paradox continues to haunt us today. The internet, the printing press of our age, has given billions of people access to humanity's accumulated knowledge. A student in a small village can now read the same research as a professor in a great university. Yet it has also created echo chambers, where people hear only voices that agree with them and where falsehood spreads faster than truth. We find ourselves in a strange world where information is abundant but understanding is scarce, where connection is instant but empathy is distant.

None of this means that we should regret either invention. Nobody would wish the printing press uninvented, and it would be just as foolish to wish away the internet. But both teach the same lesson: a machine for spreading words cannot tell the true ones from the false. That has always been our job, and it still is. The technology has changed; only our nature has remained constant.`

const CAIE_P1_02_TEXT_B_SOURCE =
  'Text B: The Printing Press and Its Paradoxes (Original, written for this site)'

// src/data/full-texts/jane-eyre.ts, Chapter 1: 17 paragraphs, 719 words, cut by script.
const CAIE_P1_02_TEXT_C = `Folds of scarlet drapery shut in my view to the right hand; to the left were the clear panes of glass, protecting, but not separating me from the drear November day. At intervals, while turning over the leaves of my book, I studied the aspect of that winter afternoon. Afar, it offered a pale blank of mist and cloud; near a scene of wet lawn and storm-beat shrub, with ceaseless rain sweeping away wildly before a long and lamentable blast.

I returned to my book—Bewick’s History of British Birds: the letterpress thereof I cared little for, generally speaking; and yet there were certain introductory pages that, child as I was, I could not pass quite as a blank. They were those which treat of the haunts of sea-fowl; of “the solitary rocks and promontories” by them only inhabited; of the coast of Norway, studded with isles from its southern extremity, the Lindeness, or Naze, to the North Cape—

“Where the Northern Ocean, in vast whirls, Boils round the naked, melancholy isles Of farthest Thule; and the Atlantic surge Pours in among the stormy Hebrides.”

Nor could I pass unnoticed the suggestion of the bleak shores of Lapland, Siberia, Spitzbergen, Nova Zembla, Iceland, Greenland, with “the vast sweep of the Arctic Zone, and those forlorn regions of dreary space,—that reservoir of frost and snow, where firm fields of ice, the accumulation of centuries of winters, glazed in Alpine heights above heights, surround the pole, and concentre the multiplied rigours of extreme cold.” Of these death-white realms I formed an idea of my own: shadowy, like all the half-comprehended notions that float dim through children’s brains, but strangely impressive. The words in these introductory pages connected themselves with the succeeding vignettes, and gave significance to the rock standing up alone in a sea of billow and spray; to the broken boat stranded on a desolate coast; to the cold and ghastly moon glancing through bars of cloud at a wreck just sinking.

I cannot tell what sentiment haunted the quite solitary churchyard, with its inscribed headstone; its gate, its two trees, its low horizon, girdled by a broken wall, and its newly-risen crescent, attesting the hour of eventide.

The two ships becalmed on a torpid sea, I believed to be marine phantoms.

The fiend pinning down the thief’s pack behind him, I passed over quickly: it was an object of terror.

So was the black horned thing seated aloof on a rock, surveying a distant crowd surrounding a gallows.

Each picture told a story; mysterious often to my undeveloped understanding and imperfect feelings, yet ever profoundly interesting: as interesting as the tales Bessie sometimes narrated on winter evenings, when she chanced to be in good humour; and when, having brought her ironing-table to the nursery hearth, she allowed us to sit about it, and while she got up Mrs. Reed’s lace frills, and crimped her nightcap borders, fed our eager attention with passages of love and adventure taken from old fairy tales and other ballads; or (as at a later period I discovered) from the pages of Pamela, and Henry, Earl of Moreland.

With Bewick on my knee, I was then happy: happy at least in my way. I feared nothing but interruption, and that came too soon. The breakfast-room door opened.

“Boh! Madam Mope!” cried the voice of John Reed; then he paused: he found the room apparently empty.

“Where the dickens is she!” he continued. “Lizzy! Georgy! (calling to his sisters) Joan is not here: tell mama she is run out into the rain—bad animal!”

“It is well I drew the curtain,” thought I; and I wished fervently he might not discover my hiding-place: nor would John Reed have found it out himself; he was not quick either of vision or conception; but Eliza just put her head in at the door, and said at once—

“She is in the window-seat, to be sure, Jack.”

And I came out immediately, for I trembled at the idea of being dragged forth by the said Jack.

“What do you want?” I asked, with awkward diffidence.

“Say, ‘What do you want, Master Reed?’” was the answer. “I want you to come here;” and seating himself in an arm-chair, he intimated by a gesture that I was to approach and stand before him.`

const CAIE_P1_02_TEXT_C_SOURCE = 'Text C: Charlotte Brontë, Jane Eyre (1847), from Chapter 1'

// Paper 1 Mock 3, Text A. Written for this site (Original), 31 October 2026.
const CAIE_P1_03_TEXT_A = `The clock cost me three pounds at a car-boot sale. It was a small brass carriage clock with a handle on top and glass on every side, so that you could see its works: a tangle of wheels and springs no bigger than my fist. It did not go, of course. The man who sold it to me said it had not ticked for twenty years, and that I would be better off putting a battery clock in its place. I took it to Mrs Adeyemi instead.

Her workshop is above a shoe repairer's on the high street, at the top of a narrow staircase that creaks on every step. When I opened the door, I was met by a sound like a room full of insects: perhaps a hundred clocks were ticking at once, each at its own speed, tall clocks and wall clocks and clocks under glass domes, all talking quietly to themselves. Every quarter of an hour, somewhere in the room, a clock would chime, and then another would answer it, a little late, like someone who has not been listening.

Mrs Adeyemi took the clock from me as though it were a sleeping bird. She turned it slowly in her hands, held it to her ear and then examined it through a magnifying glass that she wore on a band round her head. "Nobody has wound this for a long time," she said, "but that is not why it stopped. It stopped because the oil turned to glue." Clock oil, she explained, slowly thickens over the years and gathers dust, until it is as sticky as treacle and the wheels can no longer turn against it. "People think a clock dies of old age," she said. "Usually it dies of neglect."

She told me the repair would take a month. I must have looked disappointed, because she smiled. Every part, she said, would have to come out: more than a hundred of them, some smaller than a grain of rice. Each would be cleaned, checked for wear and put back exactly where it came from, in exactly the right order. Any part that was worn out would have to be made again by hand, on the small lathe in the corner. "You can do it quickly," she said, "or you can do it properly. I have only ever learned to do it properly."

I asked her how she had learned. Her father had mended clocks in Lagos, she told me, and she had sat beside his workbench from the age of six, sorting screws into tins. He used to say that a clock is honest: it shows you exactly how it has been treated. "If you are careless with it, it tells you. If you are patient with it, it tells you that too." She had come to England to study engineering and had ended up doing what her father did instead. She did not seem to regret it.

Five weeks later, she telephoned. When I climbed the creaking stairs again, my clock was standing on her bench, its brass glowing as if it had been lit from the inside, and it was ticking: a small, brisk, determined sound, quite different from the slow voices of the tall clocks around it. She showed me a tiny wheel she had made to replace one whose teeth had worn away, and I could not tell it from the others.

The bill was more than forty times what I had paid for the clock. I paid it gladly. The clock stands on my desk now, and I wind it every Sunday morning, as she told me to. It loses about a minute a week. I have decided that I do not mind. It waited twenty years to tell the time again; it can take its time.`

const CAIE_P1_03_TEXT_A_SOURCE = 'Text A: The Clock Mender (Original, written for this site)'

// Paper 1 Mock 3, Text B. Written for this site (Original): the passage this
// paper printed before, lengthened and corrected on 31 October 2026.
const CAIE_P1_03_TEXT_B = `My grandmother kept a garden that defied the logic of our climate. In a region known for its harsh winters and unpredictable summers, she coaxed tomatoes, beans, cucumbers and herbs out of the ground with an almost magical success rate. Neighbours would stop by to ask her secret, expecting some exotic technique or imported fertiliser. But her answer was always the same: she paid attention.

"Plants are like people," she would say, deadheading spent blooms with practised fingers. "They tell you what they need if you're willing to listen." She knew which plants preferred the morning sun and which liked shade in the afternoon. She could read the subtle yellowing of a leaf and diagnose a shortage of nitrogen before it became a crisis. She understood that the soil was not merely dirt but a living world of bacteria, fungi and tiny creatures that had to be nurtured as carefully as the plants themselves, and every autumn she fed it with compost she had made from the kitchen's peelings.

She kept a notebook, too, its cover soft with use, in which she wrote down when she had sown each row, how much rain had fallen and what had flourished or failed. On frosty spring nights she would go out with a torch and cover her seedlings with old sheets. At the end of each summer she saved seeds from her strongest plants, so that every year's garden was descended from the best of the last.

But what struck me most was her patience with failure. Some years, late frosts would devastate her seedlings. Some seasons, pests would destroy entire rows of vegetables. She would observe, note what had gone wrong and try something different the following year. She never raged against circumstances beyond her control. She never blamed the weather or the soil. She simply adapted, learned and kept going.

I am not, by nature, a patient person, and I do not think I am unusual. We live in an age of instant gratification, when food arrives at the door within the hour, films begin at the touch of a button and we grow restless if a web page takes more than three seconds to load. We expect results immediately, and we grow frustrated with anything that demands sustained effort. When I started my own garden, I bought plants already in flower and was furious when half of them died within a month. It did not occur to me to ask what they needed. I had wanted a garden, not the work of growing one.

Seen against all this, my grandmother's approach seems almost revolutionary. She taught me that mastery is not a destination but a process: a daily commitment to small improvements, careful observation and humble acceptance of what can and cannot be controlled. Her garden produced food, yes, but what it really grew was wisdom.`

const CAIE_P1_03_TEXT_B_SOURCE = 'Text B: The Gift of Attention (Original, written for this site)'

// src/data/full-texts/silas-marner.ts, Chapter XIV: 7 paragraphs, 973 words, cut by script; the
// first paragraph opens at its second sentence, after "For example."
const CAIE_P1_03_TEXT_C = `He had wisely chosen a broad strip of linen as a means of fastening her to his loom when he was busy: it made a broad belt round her waist, and was long enough to allow of her reaching the truckle-bed and sitting down on it, but not long enough for her to attempt any dangerous climbing. One bright summer’s morning Silas had been more engrossed than usual in “setting up” a new piece of work, an occasion on which his scissors were in requisition. These scissors, owing to an especial warning of Dolly’s, had been kept carefully out of Eppie’s reach; but the click of them had had a peculiar attraction for her ear, and watching the results of that click, she had derived the philosophic lesson that the same cause would produce the same effect. Silas had seated himself in his loom, and the noise of weaving had begun; but he had left his scissors on a ledge which Eppie’s arm was long enough to reach; and now, like a small mouse, watching her opportunity, she stole quietly from her corner, secured the scissors, and toddled to the bed again, setting up her back as a mode of concealing the fact. She had a distinct intention as to the use of the scissors; and having cut the linen strip in a jagged but effectual manner, in two moments she had run out at the open door where the sunshine was inviting her, while poor Silas believed her to be a better child than usual. It was not until he happened to need his scissors that the terrible fact burst upon him: Eppie had run out by herself—had perhaps fallen into the Stone-pit. Silas, shaken by the worst fear that could have befallen him, rushed out, calling “Eppie!” and ran eagerly about the unenclosed space, exploring the dry cavities into which she might have fallen, and then gazing with questioning dread at the smooth red surface of the water. The cold drops stood on his brow. How long had she been out? There was one hope—that she had crept through the stile and got into the fields, where he habitually took her to stroll. But the grass was high in the meadow, and there was no descrying her, if she were there, except by a close search that would be a trespass on Mr. Osgood’s crop. Still, that misdemeanour must be committed; and poor Silas, after peering all round the hedgerows, traversed the grass, beginning with perturbed vision to see Eppie behind every group of red sorrel, and to see her moving always farther off as he approached. The meadow was searched in vain; and he got over the stile into the next field, looking with dying hope towards a small pond which was now reduced to its summer shallowness, so as to leave a wide margin of good adhesive mud. Here, however, sat Eppie, discoursing cheerfully to her own small boot, which she was using as a bucket to convey the water into a deep hoof-mark, while her little naked foot was planted comfortably on a cushion of olive-green mud. A red-headed calf was observing her with alarmed doubt through the opposite hedge.

Here was clearly a case of aberration in a christened child which demanded severe treatment; but Silas, overcome with convulsive joy at finding his treasure again, could do nothing but snatch her up, and cover her with half-sobbing kisses. It was not until he had carried her home, and had begun to think of the necessary washing, that he recollected the need that he should punish Eppie, and “make her remember”. The idea that she might run away again and come to harm, gave him unusual resolution, and for the first time he determined to try the coal-hole—a small closet near the hearth.

“Naughty, naughty Eppie,” he suddenly began, holding her on his knee, and pointing to her muddy feet and clothes—“naughty to cut with the scissors and run away. Eppie must go into the coal-hole for being naughty. Daddy must put her in the coal-hole.”

He half-expected that this would be shock enough, and that Eppie would begin to cry. But instead of that, she began to shake herself on his knee, as if the proposition opened a pleasing novelty. Seeing that he must proceed to extremities, he put her into the coal-hole, and held the door closed, with a trembling sense that he was using a strong measure. For a moment there was silence, but then came a little cry, “Opy, opy!” and Silas let her out again, saying, “Now Eppie ’ull never be naughty again, else she must go in the coal-hole—a black naughty place.”

The weaving must stand still a long while this morning, for now Eppie must be washed, and have clean clothes on; but it was to be hoped that this punishment would have a lasting effect, and save time in future—though, perhaps, it would have been better if Eppie had cried more.

In half an hour she was clean again, and Silas having turned his back to see what he could do with the linen band, threw it down again, with the reflection that Eppie would be good without fastening for the rest of the morning. He turned round again, and was going to place her in her little chair near the loom, when she peeped out at him with black face and hands again, and said, “Eppie in de toal-hole!”

This total failure of the coal-hole discipline shook Silas’s belief in the efficacy of punishment. “She’d take it all for fun,” he observed to Dolly, “if I didn’t hurt her, and that I can’t do, Mrs. Winthrop. If she makes me a bit o’ trouble, I can bear it. And she’s got no tricks but what she’ll grow out of.”`

const CAIE_P1_03_TEXT_C_SOURCE = 'Text C: George Eliot, Silas Marner (1861), from Chapter 14'

// ─── Paper 2 texts ───────────────────────────────────────────────────────────
// Each Section A prints two texts, joined below into one extract so that the
// page shows both above Question 1.

// Paper 2 Mock 1, Text A. Written for this site (Original): the passage this
// paper printed before, revised on 31 October 2026.
const CAIE_P2_01_TEXT_A = `Social media has fundamentally changed the way human beings communicate. What began as a technology designed to connect friends and family has become a powerful tool for selling things to us and for watching what we do. The algorithms that decide what appears in our feeds are designed not to show us what we most want to see, but what we are most likely to react to, and studies suggest that we react most strongly to posts that make us angry, frightened or outraged.

The effects are worrying. Rates of depression and anxiety among young people have climbed steeply over the past decade. Many teenagers lose sleep scrolling late into the night through feeds filled with impossible lifestyles and carefully edited lies. We have created a technology that profits from human misery and division.

Yet to suggest that we should abandon social media entirely is naive. For many people, particularly those who live in isolation or belong to communities that are pushed to the margins, these platforms provide vital connection. Activists have used social media to organise movements that have toppled governments, and after floods and earthquakes it has helped rescuers to find the people who needed them. The technology itself is neutral; it is the way we have chosen to use it that is destructive.

The path forward is not rejection but transformation. We must demand that the companies which control our digital spaces explain how their algorithms work. We must insist on laws that put human wellbeing before profit. We must teach children to question what they see on their screens. Only then can we reclaim these tools and bend them towards human flourishing instead of exploitation.`

const CAIE_P2_01_TEXT_A_SOURCE =
  'Text A: Social Media: Benefit and Burden (Original, written for this site)'

// Paper 2 Mock 1, Text B. Written for this site (Original), 31 October 2026.
const CAIE_P2_01_TEXT_B = `Last month I deleted every social media app from my phone. My parents assumed a teacher had told me to. My friends assumed I had fallen out with someone. The truth was simpler: my phone told me that I had spent nearly thirty hours scrolling the week before, and I could not remember a single thing I had seen.

The first week was horrible. I kept reaching for my phone without meaning to, the way you reach for a light switch in a room you know well. I felt as if everyone else was at a party I had not been invited to. But by the second week, something strange had happened. I was sleeping better. I finished a novel for the first time in a year. I was less angry, too, and I realised how much of my anger had belonged to strangers I would never meet.

It was not all good, though. My friends make their plans online, and I missed two birthday meet-ups because nobody remembered to message me separately. My cousin in Canada posts photographs of her new baby, and I had to ask my mum to show them to me. For some people, social media is not a distraction from real life; it is how real life is organised.

So I have gone back, but on my own terms. The apps are hidden in a folder on the last screen of my phone, the notifications are off, and at night my phone sleeps in the kitchen. I do not think social media is evil, and I do not think it is harmless. I think it is like sugar: most of us are not going to give it up, but we can stop letting other people decide how much of it we have.`

const CAIE_P2_01_TEXT_B_SOURCE = 'Text B: Thirty Days Offline (Original, written for this site)'

const CAIE_P2_01_TEXTS = `Text A: Social Media: Benefit and Burden

${CAIE_P2_01_TEXT_A}

Text B: Thirty Days Offline

In this blog post, a teenager writes about a month without social media.

${CAIE_P2_01_TEXT_B}`

// Paper 2 Mock 2, Text A. Written for this site (Original): the passage this
// paper printed before, revised on 31 October 2026.
const CAIE_P2_02_TEXT_A = `The decline of reading is perhaps the most underestimated cultural loss of our time. Previous generations grew up with books as a central source of entertainment and education; today's young people rarely read for pleasure. By some estimates, the average teenager now spends around four hours a day on social media and less than twenty minutes reading. This is not a minor change in how people spend their free time; it is a real impoverishment of human experience.

Reading does something that no other medium can quite replace. When you read, you must perform an act of imagination. You take marks on a page and build a whole world from them in your mind, complete with sights and sounds, feelings and the thoughts of other people. This strengthens attention, expands vocabulary and builds the habits of mind that abstract thought depends on. Reading is to the mind what exercise is to the body.

The loss of this practice has consequences. Teachers report that pupils find it harder to concentrate for long periods, to follow a complicated argument or to put their thoughts into writing. These are not coincidences; they are the results of the decline in deep reading.

Yet books are not relics of the past; they are tools for the future. In a world dominated by algorithmic feeds and designs built to steal our attention, the ability to read a long argument and think critically about its claims is more valuable than ever. We must revive a culture of reading among young people, not out of nostalgia but out of necessity. The future belongs to those who can think deeply and independently, and deep thinking begins with reading.`

const CAIE_P2_02_TEXT_A_SOURCE = 'Text A: In Defence of Reading (Original, written for this site)'

// Paper 2 Mock 2, Text B. Written for this site (Original), 31 October 2026.
const CAIE_P2_02_TEXT_B = `Every few months, someone writes an article announcing the death of reading, and every time I read one (usually on my phone, which I suppose proves their point) I want to write back. The adults who say that young people no longer read are usually looking in the wrong places.

Take my friends. Ayesha reads fantasy series that run to ten volumes and argues about them online with readers in four countries. Tom has listened to more books than I have read, through his headphones on the bus to school. My little brother, who "never reads", has read the same graphic novel so many times that its spine has split. None of this counts, apparently, because it does not look like a teenager curled up with a classic.

I am not saying that nothing has been lost. It is harder to concentrate on a long book when your phone keeps lighting up beside you, and I know people who have not finished a novel since they were twelve. There have been whole months when I have not finished one either. Schools are right to worry. But lecturing teenagers about how much better things were in the past has never made anybody pick up a book.

What works is choice. When our English teacher let us choose our own books for the last ten minutes of every lesson, half the class started reading things they had never heard of, just to see what the fuss was about. One boy who had told everyone he hated books read four of them in a single term. Reading is not dying. It is changing shape, as it always has. If adults want more young people to read, they could start by noticing the reading we already do.`

const CAIE_P2_02_TEXT_B_SOURCE =
  "Text B: Reading Isn't Dying. It's Moving. (Original, written for this site)"

const CAIE_P2_02_TEXTS = `Text A: In Defence of Reading

${CAIE_P2_02_TEXT_A}

Text B: Reading Isn't Dying. It's Moving.

In this article for a school magazine, a sixteen-year-old student replies to people who say that young people no longer read.

${CAIE_P2_02_TEXT_B}`

// Paper 2 Mock 3, Text A. Written for this site (Original), 31 October 2026.
const CAIE_P2_03_TEXT_A = `Three years ago, the corner of our school field behind the science block was a patch of rough grass where nobody went except to fetch lost footballs. Today it is a garden: twelve raised beds, a greenhouse built from recycled plastic bottles, a small pond and a bench that the Year 9 woodwork group made. Every class in the school spends one afternoon a fortnight there, and I have never seen a single idea do so much good.

Some of the benefits are easy to measure. Pupils have grown more than two hundred kilograms of vegetables, which our kitchen staff have turned into soups and salads for school lunches. Science lessons about photosynthesis and food chains make sense when you can watch them happening in front of you. Our maths department uses the beds to teach area and perimeter, and the pond has taught more biology than any textbook.

Other benefits are harder to measure, but they matter just as much. Pupils who struggle to sit still in a classroom often come alive with a spade in their hands. I have watched shy children explain to visitors exactly how to plant potatoes. Teachers notice that classes come back from the garden calmer and readier to listen. In a world where young people spend so much of their lives indoors and in front of screens, an hour outside with soil under their fingernails is not a luxury. It is a necessity.

Of course, a garden takes time and effort. But ours cost very little to build, because parents and local businesses gave us tools, seeds and wood. Every school has a corner like the one ours used to be. Every school should use it.`

const CAIE_P2_03_TEXT_A_SOURCE =
  'Text A: Why Every School Needs a Garden (Original, written for this site)'

// Paper 2 Mock 3, Text B. Written for this site (Original), 31 October 2026.
const CAIE_P2_03_TEXT_B = `Dear Editor,

I read with interest your article about the new garden at our local secondary school, and I do not doubt that the teachers involved mean well. But as the parent of a pupil who sits her final exams next summer, I would like to ask a question that nobody else seems willing to ask: where is the time coming from?

The school day is already full. My daughter's class has lost an afternoon of lessons every fortnight to "garden time", even in the weeks before her mock exams. When she came home with mud on her uniform and a bag of slightly chewed lettuces, I was pleased that she had enjoyed herself. I was less pleased when she told me that her chemistry class had fallen two topics behind. Her teacher has set extra homework so that the class can catch up, so in the end the time spent in the garden comes out of her evenings.

Nor does every child enjoy it. My daughter has hay fever and spends her garden afternoons sneezing. Her best friend simply hates being cold and wet, which in our climate rules out much of the school year. Not every pupil is a budding farmer, and it is unfair to make them all behave like one.

I am not against gardens. A gardening club at lunchtime or after school would give pupils who love it every chance to dig and plant to their hearts' content, without taking lessons away from those who need them. Schools exist, first and foremost, to educate. Before we hand our children a spade, let us make sure they have every chance to pass their exams.

Yours faithfully,
A worried parent`

const CAIE_P2_03_TEXT_B_SOURCE =
  'Text B: A letter to a local newspaper (Original, written for this site)'

const CAIE_P2_03_TEXTS = `Text A: Why Every School Needs a Garden

In this article, a teacher writes about the garden at her school.

${CAIE_P2_03_TEXT_A}

Text B: A letter to a local newspaper

This letter was written after the newspaper reported on the school garden in Text A.

${CAIE_P2_03_TEXT_B}`

// ─── The papers ──────────────────────────────────────────────────────────────

export const caieMockExams: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1, MOCK 1: the far north. Text C: Frankenstein, Chapter 24.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'caie-p1-mock-01',
    board: 'CAIE',
    paperNumber: 1,
    title: 'Cambridge IGCSE First Language English (0500): Paper 1 Mock 1',
    subtitle: 'Paper 1: Reading. Texts A, B and C: the far north',
    code: '0500/11',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'caie-p1-01-text-a',
        title: 'Question 1: Comprehension',
        description: `Paper 1 has four questions, each worth 20 marks, on three texts: Text A, Text B and Text C. Answer all four. You have 2 hours for the whole paper. In the exam the three texts are printed in a separate insert; here each text is printed with its question. Allow about 15 minutes in all for reading the three texts and about 25 minutes for each question, and keep the last 5 minutes for checking.

Read Text A, and then answer Question 1. Text A was written for this site: it is an account of a day spent learning to drive a team of sled dogs in the far north. Spend about 5 minutes reading it.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-01-q1',
            questionNumber: 1,
            questionText: `Answer all parts of Question 1, (a) to (h), on Text A. The marks for each part are shown in square brackets.

(a) Re-read paragraph 1. What had the writer expected the far north to be like? [1]

(b) Re-read paragraph 1. Give two details which show how eager the dogs were to run. [2]

(c) Explain in your own words what the writer means by:
(i) 'as eagerly as children pulling on their coats for a snowball fight' (paragraph 3) [2]
(ii) 'my fingers had stopped belonging to me' (paragraph 7). [2]

(d) Re-read paragraph 2. Explain in your own wordswhy Ingrid tells the visitors never to let go of the sled. [2]

(e) Re-read paragraph 3. What does the writer suggest about Pepper, the lead dog? Give two ideas. [2]

(f) Re-read paragraph 4. Explain why the writer compares the end of the noise to someone turning off a radio. [3]

(g) Re-read paragraph 5. Explain in your own wordshow the writer's feelings change between the moment the sled tips over and the moment the writer stands up again. [3]

(h) Re-read paragraph 6. What does this paragraph suggest about Ingrid's feelings about the changes to the lake? Support your answer with details from the paragraph. [3]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'short-answer',
            extract: CAIE_P1_01_TEXT_A,
            extractSource: CAIE_P1_01_TEXT_A_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a) A place of silence: the writer expected it to be quiet.

(b) The dogs were howling and yelping, and they were leaping into the air as if the ground were too hot to stand on.

(c)(i) The dogs were full of excitement as their harnesses went on, because, like children getting ready to go out and play in the snow, they knew that something they loved was about to begin.

(c)(ii) The writer's fingers were so cold that they had gone numb: they could no longer be felt or moved properly, as if they were someone else's.

(d) If a driver falls off and lets go, nothing will halt the team: with nobody to control them, the dogs simply carry on, and their energy seems endless, so they could keep going for hours. The driver would be stranded, alone in the freezing cold, and the sled and dogs would be lost.

(e) Pepper is calm and quiet. She also listens to the driver and obeys, unlike the other dogs, which only care about speed, so she can be trusted to lead the team.

(f) The comparison shows how sudden the silence was: the noise did not die away gradually but ended all at once, as when a switch is pressed. It also suggests that the howling had been as constant as a radio left playing in the background, so its end came as a surprise. And it shows that the noise had only ever been impatience: once the dogs were running, they had nothing left to complain about.

(g) At first the writer is alarmed, clinging on desperately while being hauled face down through the snow. The writer then holds on out of sheer determination, remembering Ingrid's rule. When the team stops, the writer feels rather foolish, imagining that Pepper looks back with pity, but this soon turns into delight, and the writer ends up helpless with laughter.

(h) Ingrid is worried and saddened by the changes. She comes back from testing the ice "quieter than before", which suggests that what she has found troubles her. She remembers how reliably the lake froze when she was a girl, so she feels the loss of something she grew up with. Her words "I am the one who worries" show her anxiety about the future, and her remark that the dogs "do not know" suggests that the worry is hers alone: they cannot understand the danger, so she must carry it for them.`,
            },
            markScheme: {
              'How it is marked (20 marks)': P1_Q1_MARKING,
              '(a) [1]': ['A place of silence; quiet.'],
              '(b) [2]': [
                'One mark each for any two of: the noise they made, howling and yelping; their leaping into the air "as if the ground were too hot to stand on"; that running is a sled dog\'s favourite thing in the world.',
                'Howling, yelping and complaining loudly about every minute of waiting are one point, the noise; leaping, and leaping as if the ground were too hot, are one point.',
              ],
              '(c)(i) [2]': [
                'One mark for the eagerness: the dogs were keen, excited or impatient to be harnessed.',
                'One mark for what the comparison adds: like children getting ready to play, they knew that something they enjoyed, running, was about to start.',
              ],
              '(c)(ii) [2]': [
                'One mark for: the fingers were extremely cold or frozen.',
                'One mark for: they had gone numb, so the writer could no longer feel or control them, as if they were not part of the writer.',
              ],
              '(d) [2]': [
                'One mark for: with no driver, the dogs would keep going, and since they seem never to tire, nothing would halt them.',
                'One mark for the consequence: the driver would be stranded, alone in the cold, and the sled and team lost.',
                'The part asks for your own words: a point copied from the text, such as "A team without a driver does not stop", earns nothing.',
              ],
              '(e) [2]': [
                'One mark each for any two of: she is calm or quiet; she listens to the driver and obeys; she is trusted to lead; unlike the others, she does not only want to go fast; she is sensible or reliable.',
              ],
              '(f) [3]': [
                'One mark each for any three of: the noise ended suddenly, not gradually; the silence was complete, as when a radio is switched off; the howling had been constant, like a radio left on, so its end was a surprise; the noise had only been impatience, which ended once the dogs ran; the contrast makes the quiet feel striking and peaceful.',
              ],
              '(g) [3]': [
                "One mark each for any three of: alarm or panic as the sled tips and the writer is dragged; determination, holding on because of Ingrid's rule; embarrassment or feeling foolish when Pepper seems to look back with pity; amusement or joy, laughing so much that it hurt.",
                'Credit only feelings the paragraph shows, and the answer must show a change.',
              ],
              '(h) [3]': [
                'One mark each for any three of: she is worried or anxious ("I am the one who worries"); she is troubled or saddened by what she has found, coming back quieter than before; she feels a sense of loss, remembering how the lake froze when she was a girl; she is concerned about safety and the future of sledding there; she feels the worry is hers alone, because her dogs cannot understand the danger ("The dogs do not know").',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-01-text-b',
        title: 'Question 2: Summary task',
        description: `Read Text B, and then answer Question 2. Text B, an article about what is happening to the Arctic, was written for this site. Spend about 5 minutes reading it and about 25 minutes on the question: about 19 minutes on the summary, 2(a), and about 6 minutes on 2(b).`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-01-q2',
            questionNumber: 2,
            questionText: `Answer both parts of Question 2, (a) and (b), on Text B.

(a) What, according to Text B, are the effects of the warming of the Arctic, both in the Arctic itself and in the rest of the world?

Write your summary as continuous prose in full sentences, not notes, and in your own words as much as you can. Use no more than 120 words.

The content of your summary is worth up to 10 marks and the quality of your writing up to 5 marks. [15]

(b) Explain the writer's attitude towards people who live far away from the Arctic. Back up your answer with three details from Text B. [5]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'summary',
            extract: CAIE_P1_01_TEXT_B,
            extractSource: CAIE_P1_01_TEXT_B_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a) As the Arctic's white ice melts, the darker sea beneath soaks up more of the sun's warmth, so more ice melts in a cycle that keeps speeding up. Polar bears must swim further between shrinking floes, and some drown, while others grow thinner and rear fewer young. The sea ice that Indigenous peoples use for travel and hunting breaks up early and unpredictably, making journeys dangerous. On land, thawing ground damages roads and buildings and lets ancient frozen remains rot, giving off gases that heat the whole Earth. Beyond the Arctic, there is less ice to reflect sunlight, so the oceans and air warm, melting Greenland ice raises sea levels everywhere, and extreme weather may become more common.

(b) The writer is critical of people far from the Arctic for ignoring it, yet shares their blame by saying "we". Describing the Arctic as "easily forgotten by those living in milder regions" suggests that their neglect comes from comfort rather than cruelty. The repeated "We do not see", "We do not hear" and "We do not smell" shows how distance has cut them off from the harm. Most sharply, "we tell ourselves" exposes their excuse, that the problem "is not our responsibility", as self-deception that the writer wants to shake them out of.`,
            },
            markScheme: {
              '2(a) reading (10 marks)': P1_Q2A_READING,
              '2(a) writing (5 marks)': P1_Q2A_WRITING,
              '2(a) points the summary can select': [
                "In the Arctic: melting ice uncovers darker sea, which absorbs more of the sun's heat, so more ice melts, in a cycle that speeds up.",
                'Polar bears have to swim further between pieces of floating ice, and some have drowned.',
                'Some bears are thinner than they used to be and have fewer cubs.',
                'The sea ice that Indigenous peoples use as a road and a hunting ground breaks up earlier and less predictably, so their journeys are dangerous.',
                'The permafrost is thawing, so roads buckle and houses crack and sink.',
                'Remains frozen in the ground begin to rot, releasing carbon dioxide and methane.',
                'Beyond the Arctic: those gases trap heat and warm the whole planet.',
                'There is less ice and snow to reflect sunlight, so the oceans and the air heat up more.',
                "Meltwater from Greenland's ice sheet is raising sea levels around the world, bringing the sea closer to coastal cities.",
                'A weaker jet stream may be making long cold spells, heatwaves and floods more likely. The text says that scientists are still debating this, so a careful summary says "may".',
                "Not points of the summary: that most of the world cannot see the crisis or feels no responsibility for it, and the writer's images of the Arctic as air conditioning and a heartbeat. These are the writer's views, not effects.",
              ],
              '2(b) (5 marks)': P1_Q2B_LEVELS,
              '2(b) what an answer might say': [
                'The attitude: frustration with people far from the Arctic who ignore it, and criticism of them, though the writer shares the blame ("we") and wants to wake them up.',
                'Details: the Arctic is "easily forgotten by those living in milder regions"; the repeated "We do not see", "We do not hear" and "We do not smell" show how cut off such people are; "we tell ourselves" exposes their excuse as self-deception; "therefore it is not our responsibility" is an excuse the writer mocks; "What happens in the Arctic does not stay in the Arctic" and "its fate and ours are bound together" insist that they are affected too.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-01-text-c',
        title: 'Question 3: Short-answer questions and language task',
        description: `Read Text C, and then answer Question 3. Spend about 5 minutes reading it and about 25 minutes on the question: about 12 minutes on parts (a) to (c) and about 13 minutes on the language task, part (d).

Text C is taken from Frankenstein, a novel by Mary Shelley first published in 1818. The novel is framed by the letters of Robert Walton, an English explorer who is trying to sail to the North Pole, to his sister, Margaret, in England. Walton's ship is trapped in the Arctic ice. On board is a dying stranger, Victor Frankenstein, whom the crew rescued from the ice and who has told Walton the story of his life.

Words you may need: deputation: a small group sent to speak for others; requisition: a formal demand; wan: pale; wherefore: why; fortitude: courage in the face of pain or danger; benefactors of your species: people who do great good for the whole human race; mutable: able to change; stigma: a mark of shame; brows: foreheads; strenuously: very strongly.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-01-q3',
            questionNumber: 3,
            questionText: `Answer all parts of Question 3, (a) to (d), on Text C.

(a) Find the word or phrase in Text C that means the same as the words in capitals in each sentence below:
(i) The ship was in danger that COULD STRIKE AT ANY MOMENT. [1]
(ii) The ship and its crew were IMPRISONED in the ice. [1]
(iii) After any effort, Frankenstein soon sank back into A STATE THAT LOOKED LIKE DEATH. [1]

(b) Say in your own words what each word in capitals means as it is used here:
(i) 'they feared that if, as was possible, the ice should DISSIPATE, and a free passage be opened' [1]
(ii) 'he was sunk in LANGUOR, and almost deprived of life' [1]

(c) Re-read the paragraph beginning 'How all this will terminate'. Explain, in your own words, how one example of the writer's language in it suggests Walton's feelings about how the voyage may end. [5]

(d) Re-read the two paragraphs from 'This speech troubled me' to 'turn their backs on the foe.' How does the writer's language show the sudden change in Frankenstein and the power of his words over the sailors?

Analyse three words or phrases from these paragraphs that have a strong effect, at least one of them an image. Write about 200 to 250 words. [10]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analysis',
            extract: CAIE_P1_01_TEXT_C,
            extractSource: CAIE_P1_01_TEXT_C_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a)(i) imminent

(a)(ii) immured

(a)(iii) apparent lifelessness

(b)(i) break up and clear away, so that the ice melts or drifts apart.

(b)(ii) weakness and exhaustion: he has no energy left at all.

(c) Walton writes that he "had rather die than return shamefully", his "purpose unfulfilled". The comparison shows how strongly he feels: going home without reaching the Pole would be worse to him than death. The word "shamefully" suggests that his pride and his hopes of honour are bound up in the voyage, so turning back would feel like a public disgrace, not just a disappointment, and "unfulfilled" adds bitterness, as if the whole aim of his life would be left incomplete. Yet the very extremity of the choice he imagines, death or dishonour, hints at desperation, as though he already senses that the decision may not be his to make.

(d) The sudden change in Frankenstein shows in "his eyes sparkled, and his cheeks flushed with momentary vigour". Moments before, he had seemed too weak even to listen, so "sparkled" suggests a light kindled inside a dying man by the sailors' demand, and "flushed" shows colour rushing back into his pale face. Yet "momentary" warns that this strength cannot last: it is the last flare of a fading fire, which makes what he says more urgent.

In the speech, his boldest image is "This ice is not made of such stuff as your hearts may be; it is mutable". He flatters the sailors by imagining their hearts as a harder material than the ice, and he shrinks the ice that has trapped them, in a frozen waste where many of their comrades have already died, into something weak and changeable that must give way to their will. Danger becomes a challenge they can win.

Then he turns from praise to shame: "the stigma of disgrace marked on your brows" pictures cowardice burnt onto their foreheads like a brand, a mark that everyone at home would see and that could never be washed away. Flattery and shame together leave the men no easy answer, which is why, when he has finished, they cannot reply.`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Parts (a) to (c), the short answers, are worth 10 marks and part (d), the language task, 10. The two are marked separately and added.',
                ...P1_Q3_SHORT_MARKING,
              ],
              '(a) [3]': [
                '(i) "imminent" (accept "in imminent danger").',
                '(ii) "immured" (accept "We were immured in ice").',
                '(iii) "apparent lifelessness". Not "almost deprived of life", which comes after his speech and says that he was nearly dead, not that he only seemed so.',
              ],
              '(b) [2]': [
                '(i) dissipate: break up, scatter, clear or melt away (accept "disappear").',
                '(ii) languor: weakness, exhaustion, tiredness, lack of energy.',
              ],
              '(c) [5]': [
                '"I had rather die than return shamefully": failure would be worse to him than death; "shamefully" shows that his pride and his hopes of honour are bound up in the voyage.',
                '"my purpose unfulfilled": the aim of his life cut short; frustration and bitter disappointment.',
                '"Yet I fear such will be my fate": dread and resignation; "fate" suggests that the outcome is out of his hands.',
                '"the men, unsupported by ideas of glory and honour": he sees the sailors as lacking his ideals, which may suggest scorn for them, or an understanding of why they cannot go on, and leaves him isolated.',
                '"How all this will terminate, I know not": uncertainty and anxiety.',
                'One example, fully explained, can reach the top level.',
              ],
              '(d) language task [10]': P1_Q3D_LEVELS,
              '(d) choices an answer might explore': [
                '"appeared hardly to have force enough to attend": his weakness makes the change that follows more striking.',
                '"his eyes sparkled, and his cheeks flushed with momentary vigour": a sudden revival, a fire lit in a dying man; "momentary" warns that it cannot last.',
                '"smooth and placid as a southern sea": the simile makes an easy voyage sound soft and dull, so danger becomes the point of the expedition.',
                '"danger and death surrounded it, and these you were to brave and overcome": danger presented as an enemy to be conquered.',
                '"they were chilly, and returned to their warm fire-sides": mockery; "chilly" shrinks a deadly cold into mild discomfort and so belittles their fear.',
                '"firm as a rock": the simile asks the men to be unmoving, unlike the "mutable" ice.',
                '"This ice is not made of such stuff as your hearts may be; it is mutable": the hearts are imagined as harder than ice, and the ice as weak, so that their will can defeat nature.',
                '"the stigma of disgrace marked on your brows": shame as a brand on the forehead, seen by everyone at home.',
                '"turn their backs on the foe": the voyage as a battle and the ice as an enemy, so that going home becomes running away.',
                'The questions that open the speech and its commands ("be men, or be more than men") give it force; such comments add to comments on the words themselves, and do not replace them.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-01-text-c-q4',
        title: 'Question 4: Extended response to reading',
        description: `Question 4 is also on Text C, which is printed again above. Spend about 25 minutes on it, and keep the last 5 minutes of the paper for checking your answers.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-01-q4',
            questionNumber: 4,
            questionText: `Imagine that you are the leader of the sailors who went to Captain Walton's cabin. That evening the crew gather on deck, and you tell them what happened.

Write the words you say to the crew.

In your speech you should:
• describe the dangers the crew are facing, and explain why you went to the captain
• explain what the stranger said, and how his words made you and the other sailors feel
• give your own view of what the crew should do now, and why.

Use ideas from Text C, in your own words, and cover all three bullet points.

Write about 250 to 300 words.

The content of your answer is worth up to 10 marks and the quality of your writing up to 10 marks. [20]`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'extended-response',
            extract: CAIE_P1_01_TEXT_C,
            extractSource: CAIE_P1_01_TEXT_C_SOURCE,
            modelAnswers: {
              'Grade 8-9': `Shipmates, listen to me. You all know why six of us went to the captain's cabin this morning. We are locked in this ice like a fly in a frozen pond. It grinds against the hull day and night, and every one of us has lain awake waiting for the moment it crushes the ship. We have already lost good men out here, and the cold will take more of us if we stay. So we asked the captain for one promise: that if the ice ever lets us go, he will turn south and take us home.

Before he could answer, the stranger spoke. I tell you, I thought that poor man was too far gone to lift his head, but he rose up with fire in his eyes. He asked whether we had not called this a glorious voyage, and told us it was glorious only because it was dangerous. He said our hearts could be harder than the ice, that the ice would give way if we refused to be beaten, and that we would carry the mark of cowards home on our faces. I will not pretend his words did not shame me. We stood there like schoolboys, and not one of us could answer him.

But hear me. Brave words do not melt ice. That man is dying, and glory matters more to him than life, but we have families waiting for us. The captain has said that he will not lead us further north if we truly do not wish it, and I believe he will keep his word. So think hard tonight. If the sea opens, let us hold him to that promise. There is no shame in bringing every man left on this ship home alive.`,
            },
            markScheme: {
              'Reading (10 marks)': P1_Q4_READING,
              'Writing (10 marks)': P1_Q4_WRITING,
              'Ideas from Text C to use and develop': [
                'Bullet 1: the ship is surrounded by ice and could be crushed at any moment; the cold is extreme and many of the crew have died; the sailors fear that if the ice frees the ship, Walton will sail on into new dangers, so the crew chose a group to demand a promise that he would turn south.',
                'Bullet 2: Frankenstein, who had seemed almost lifeless, suddenly came alive; he asked whether they had not called it a glorious expedition, said that its dangers were what made it glorious, called the ice weaker than their hearts, said they would be thought cowards and urged them to return as heroes. The men were moved and could not answer: the speaker might admit to feeling ashamed, stirred, angry or unsure.',
                "Bullet 3: development beyond what the text says: whether to trust a dying man's idea of glory; the families waiting at home; Walton's promise not to lead them further north if they truly wish it; what to do if the ice breaks.",
                "A voice that suits a sailor speaking to his shipmates: direct, plain and persuasive, building to a call to act. Frankenstein's words should be retold in the sailor's own words, not copied.",
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1, MOCK 2: printing and reading. Text C: Jane Eyre, Chapter 1.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'caie-p1-mock-02',
    board: 'CAIE',
    paperNumber: 1,
    title: 'Cambridge IGCSE First Language English (0500): Paper 1 Mock 2',
    subtitle: 'Paper 1: Reading. Texts A, B and C: printing and reading',
    code: '0500/11',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'caie-p1-02-text-a',
        title: 'Question 1: Comprehension',
        description: `Paper 1 has four questions, each worth 20 marks, on three texts: Text A, Text B and Text C. Answer all four. You have 2 hours for the whole paper. In the exam the three texts are printed in a separate insert; here each text is printed with its question. Allow about 15 minutes in all for reading the three texts and about 25 minutes for each question, and keep the last 5 minutes for checking.

Read Text A, and then answer Question 1. Text A was written for this site: it is an account of a day spent learning to print by hand in a small workshop. Spend about 5 minutes reading it.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-02-q1',
            questionNumber: 1,
            questionText: `Answer all parts of Question 1, (a) to (h), on Text A. The marks for each part are shown in square brackets.

(a) Re-read paragraph 1. How old was the green printing press? [1]

(b) Re-read paragraph 2. Give two kinds of work that Martha's workshop prints today. [2]

(c) Explain in your own words what the writer means by:
(i) 'She will outlast me' (paragraph 1) [2]
(ii) 'something that a computer cannot give them' (paragraph 2). [2]

(d) Re-read paragraph 3. Explain in your own wordswhy capital letters are called upper-case letters. [2]

(e) Re-read paragraph 3. What does the comparison between Martha and the writer suggest about setting type by hand? Give two ideas. [2]

(f) Re-read paragraph 4. Explain why the writer set the letter d the wrong way round. [3]

(g) Re-read paragraphs 3 to 5. Explain why the writer was so proud of the printed name, even though it was crooked and smudged. [3]

(h) Re-read paragraph 6. What does Martha's refusal of the order for a thousand leaflets suggest about her attitude to her work? Support your answer with details from the paragraph. [3]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'short-answer',
            extract: CAIE_P1_02_TEXT_A,
            extractSource: CAIE_P1_02_TEXT_A_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a) It was more than a hundred and fifty years old.

(b) Wedding invitations and posters.

(c)(i) The old press will go on working for longer than Martha herself will live or be able to work: it was built to last.

(c)(ii) A special, personal quality that comes from something being made by hand, which no modern, machine-made printing can provide.

(d) Printers used to store the capitals in a tray of their own, which sat higher up than the tray holding the small letters, so the capitals came from the upper one.

(e) Setting type is slow and difficult for a beginner: the writer took twenty minutes over eleven letters. Martha's speed shows that it takes many years of practice to become expert.

(f) Each piece of type is made as a mirror image of its letter, so that it prints the right way round. In that form a small b looks just like a d, and the writer had not yet learned to tell them apart by the groove in the side of the metal, so the d went in the wrong way.

(g) The writer had set every letter of the name by hand, a slow and difficult process that took twenty minutes for just eleven letters. The impression was so deep that each letter could be traced with a fingertip, so the print felt solid and real, unlike something from a machine. It was a first success at a demanding craft five hundred years old, so its faults hardly mattered.

(h) Martha cares more about doing work well than about money or speed. She believes that "Speed is wonderful ... but it makes us careless", and that setting each letter by hand makes you think about every word. Rather than rush a thousand leaflets, she sent the customer to a print shop in town, which shows that she will not take on work she cannot be proud of: she says she "would have hated every one of them". She is also honest about what her workshop is for, and what it is not for.`,
            },
            markScheme: {
              'How it is marked (20 marks)': P1_Q1_MARKING,
              '(a) [1]': ['More than a hundred and fifty years old (accept over 150 years).'],
              '(b) [2]': [
                'One mark each for any two of: wedding invitations; posters; books of poems.',
              ],
              '(c)(i) [2]': [
                'One mark for: the press will keep working, or last.',
                'One mark for: longer than Martha herself will live or be able to work.',
              ],
              '(c)(ii) [2]': [
                'One mark for: a special, personal or handmade quality, or the care that goes into it.',
                'One mark for: which modern, machine or digital printing cannot provide.',
              ],
              '(d) [2]': [
                'One mark for: capitals were stored in a tray, or case, of their own.',
                'One mark for: that tray sat higher than the one for the small letters.',
                'The part asks for your own words: the sentence copied from the text earns nothing.',
              ],
              '(e) [2]': [
                'One mark each for any two of: it is slow or difficult for a beginner; it takes years of practice to master; Martha is extremely skilled and quick.',
              ],
              '(f) [3]': [
                'One mark each for any three of: each piece of type is cast back to front, as a mirror image, so that it prints the right way round; in that form a small b looks just like a d; the writer had not yet learned to tell them apart by the groove in the side of each piece; the writer was a beginner, and every beginner makes this mistake.',
              ],
              '(g) [3]': [
                "One mark each for any three of: the writer had set every letter personally, by hand; it took great effort and patience (twenty minutes for eleven letters, every one back to front); the heavy thud and an impression deep enough to trace with a fingertip made it feel real and solid; it was a first success at a difficult craft five hundred years old; its faults showed that it was the writer's own work.",
              ],
              '(h) [3]': [
                'One mark each for any three of: she values care and quality more than speed; she values them more than money or business; she takes pride in every job and wants to enjoy her work; she believes that working by hand makes you think about every word; she would rather turn work away than do it badly; she is honest that a faster printer suits some jobs better.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-02-text-b',
        title: 'Question 2: Summary task',
        description: `Read Text B, and then answer Question 2. Text B, an article about the printing press and the internet, was written for this site. Spend about 5 minutes reading it and about 25 minutes on the question: about 19 minutes on the summary, 2(a), and about 6 minutes on 2(b).`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-02-q2',
            questionNumber: 2,
            questionText: `Answer both parts of Question 2, (a) and (b), on Text B.

(a) What, according to Text B, were the effects of the invention of the printing press, both good and bad?

Write your summary as continuous prose in full sentences, not notes, and in your own words as much as you can. Use no more than 120 words.

The content of your summary is worth up to 10 marks and the quality of your writing up to 5 marks. [15]

(b) Explain the writer's attitude towards the internet. Back up your answer with three details from Text B. [5]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'summary',
            extract: CAIE_P1_02_TEXT_B,
            extractSource: CAIE_P1_02_TEXT_B_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a) Printing allowed books to be made quickly, cheaply and in vast numbers, so that ideas could travel across Europe instead of staying in monasteries, and learning no longer belonged only to churchmen and the rich. As books became affordable, more people learned to read. Scholars in different countries could work from identical texts, compare their results and correct one another's errors, and the great changes in religion, science and thought that shaped the modern world became possible. However, printing also made it easy to spread propaganda, superstition and lies on a huge scale, and cheap pamphlets carried rumours about rival rulers and faiths faster than they could be answered. Printing spread reading, but it did not guarantee the truth.

(b) The writer's attitude to the internet is mixed: admiring, uneasy and, in the end, accepting. The writer values it for having "given billions of people access to humanity's accumulated knowledge", so that a student in a village can read what a professor reads. Yet the balanced phrase "information is abundant but understanding is scarce" shows disappointment that more knowledge has not brought more wisdom. Still, the writer thinks it "just as foolish to wish away the internet" as to wish the printing press uninvented, so the attitude is cautious rather than hostile.`,
            },
            markScheme: {
              '2(a) reading (10 marks)': P1_Q2A_READING,
              '2(a) writing (5 marks)': P1_Q2A_WRITING,
              '2(a) points the summary can select': [
                'Books could be made far faster and in huge numbers: hundreds, then thousands, and millions within fifty years.',
                'Books became much cheaper.',
                'Ideas could spread across Europe instead of being locked away in monastery libraries.',
                'Knowledge was no longer held only by the clergy and the wealthy.',
                'More people had a reason to learn to read, and reading spread.',
                "Scholars could study identical copies, compare their findings and correct one another's mistakes.",
                'It made the Reformation, the Scientific Revolution and the Enlightenment possible: it helped to create the modern world.',
                'But it also made it easy to mass-produce propaganda and misinformation.',
                'Books of astrology and magic were printed alongside real science (as one point, in general terms: superstition spread as well as knowledge).',
                'Cheap pamphlets spread rumours, insults and lies about rival rulers and religions faster than they could be answered.',
                'It did not make truth certain: many books were designed to mislead, exploit or manipulate.',
                "Not points of the summary: anything about the internet, and the writer's conclusion about human nature. The question asks about the printing press.",
              ],
              '2(b) (5 marks)': P1_Q2B_LEVELS,
              '2(b) what an answer might say': [
                'The attitude: mixed, or balanced but uneasy: the writer admires what the internet makes possible, is troubled by the falsehood and division it spreads, and believes that people, not the technology, must take responsibility.',
                'Details: it "has given billions of people access to humanity\'s accumulated knowledge"; a student in a small village can read the same research as a professor; it has "created echo chambers"; "falsehood spreads faster than truth"; "information is abundant but understanding is scarce"; "connection is instant but empathy is distant"; it would be "just as foolish to wish away the internet"; "That has always been our job, and it still is."',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-02-text-c',
        title: 'Question 3: Short-answer questions and language task',
        description: `Read Text C, and then answer Question 3. Spend about 5 minutes reading it and about 25 minutes on the question: about 12 minutes on parts (a) to (c) and about 13 minutes on the language task, part (d).

Text C is taken from the opening chapter of Jane Eyre, a novel by Charlotte Brontë published in 1847. Jane, who tells the story, is an orphan of ten who lives at Gateshead Hall with her aunt, Mrs Reed, and her cousins Eliza, John and Georgiana, who treat her unkindly. On a cold, wet winter afternoon, Mrs Reed has told Jane that she may not join the family by the drawing-room fire until she learns to behave in a more cheerful, sociable way. Jane has taken a book from the bookcase in the breakfast-room next door, climbed into the window-seat and drawn its red curtain almost shut.

Words you may need: drapery: curtains; drear: dreary; Bewick's History of British Birds: a book about birds, with engravings, first published in 1797; haunts: the places where creatures live; sea-fowl: sea birds; promontories: high points of land that jut out into the sea; Thule: in old writings, the most northerly land in the world; concentre: gather together; vignettes: small pictures; eventide: evening; marine phantoms: ghosts of the sea; aloof: apart; a gallows: a frame on which criminals were hanged; Pamela, and Henry, Earl of Moreland: two eighteenth-century novels; Madam Mope: a mocking name for a gloomy girl; the dickens: a mild curse; Lizzy, Georgy and Jack: Eliza, Georgiana and John.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-02-q3',
            questionNumber: 3,
            questionText: `Answer all parts of Question 3, (a) to (d), on Text C.

(a) Find the word or phrase in Text C that means the same as the words in capitals in each sentence below:
(i) Jane cared little for THE PRINTED WORDS in her book, as opposed to its pictures. [1]
(ii) In one picture, a churchyard was ENCIRCLED by a broken wall. [1]
(iii) Jane hurried past one picture because it was SOMETHING THAT FILLED HER WITH FEAR. [1]

(b) Say in your own words what each word in capitals means as it is used here:
(i) 'the tales Bessie sometimes narrated on winter evenings, when she CHANCED to be in good humour' [1]
(ii) '"What do you want?" I asked, with awkward DIFFIDENCE.' [1]

(c) Re-read the paragraph beginning 'With Bewick on my knee'. Explain, in your own words, how one example of the writer's language in it suggests Jane's feelings. [5]

(d) Re-read the two paragraphs beginning 'Folds of scarlet drapery' and 'Nor could I pass unnoticed'. How does the writer's language convey Jane's hiding place and the cold, strange world that her book opens up for her?

Analyse three words or phrases from these paragraphs that have a strong effect, at least one of them an image. Write about 200 to 250 words. [10]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analysis',
            extract: CAIE_P1_02_TEXT_C,
            extractSource: CAIE_P1_02_TEXT_C_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a)(i) the letterpress

(a)(ii) girdled

(a)(iii) an object of terror

(b)(i) happened, by luck, to be in a good mood.

(b)(ii) shyness, or a lack of confidence.

(c) Jane says that she "feared nothing but interruption, and that came too soon." Her only fear is of being disturbed, which suggests how precious and fragile her moment of peace is: the storm outside, and even the pictures that terrify her, frighten her less than the people in the next room. The phrase "came too soon" suggests that interruption is something she has learned to expect, so that even her happiness is shadowed by dread. That the arrival of her own cousins counts only as an "interruption" also shows how little she belongs among them: she is happiest when they forget that she is there.

(d) The window-seat becomes a shelter in "Folds of scarlet drapery shut in my view". "Folds" suggests something soft that wraps around her, and "scarlet" brings warmth and richness into a grey November afternoon, as if the curtain were a protective wall. Yet "shut in" also hints that she is enclosed and alone, cut off from the house and the family in it: her refuge is also a kind of exile, and her world shrinks to the book on her knee and the storm beyond the glass.

The book carries her further into cold and desolation. She calls the Arctic lands "death-white realms": the compound "death-white" turns snow from something pure and beautiful into something lifeless and threatening, while "realms" makes these regions sound like kingdoms, vast places of the imagination that she can enter alone.

Her strangest image is "the cold and ghastly moon glancing through bars of cloud at a wreck just sinking". The word "ghastly" gives the moon a pale, ghostly face and "glancing" a sidelong look, so it becomes a cold, uncaring watcher, while the "bars of cloud" turn the sky into a prison. A sinking ship that no one saves, watched by a heartless eye, echoes Jane's own position: trapped, unloved and, as she feels it, beyond help.`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Parts (a) to (c), the short answers, are worth 10 marks and part (d), the language task, 10. The two are marked separately and added.',
                ...P1_Q3_SHORT_MARKING,
              ],
              '(a) [3]': [
                '(i) "the letterpress" (accept "letterpress").',
                '(ii) "girdled" (accept "girdled by a broken wall").',
                '(iii) "an object of terror" (accept "terror").',
              ],
              '(b) [2]': [
                '(i) chanced: happened, or by luck (not "by chance", which repeats the word).',
                '(ii) diffidence: shyness, timidity, a lack of confidence.',
              ],
              '(c) [5]': [
                '"With Bewick on my knee, I was then happy": the book is her one source of happiness, and "then" suggests that such happiness is rare and does not last.',
                '"happy at least in my way": her happiness is small, private and unusual, the happiness of a lonely child who has learned to make do with a book.',
                '"I feared nothing but interruption": her only fear is other people, which shows how unsafe she feels in her family.',
                '"and that came too soon": interruption is expected and inevitable; her peace is brief and fragile.',
                '"The breakfast-room door opened.": the short, blunt sentence makes the interruption sudden for the reader too.',
                'One example, fully explained, can reach the top level.',
              ],
              '(d) language task [10]': P1_Q3D_LEVELS,
              '(d) choices an answer might explore': [
                '"Folds of scarlet drapery shut in my view": warm, rich, protective colour; yet "shut in" suggests enclosure and loneliness.',
                '"protecting, but not separating me from the drear November day": the glass keeps her safe but lets the gloom in, so her refuge is fragile.',
                '"a pale blank of mist and cloud": emptiness and nothingness; a world drained of colour.',
                '"ceaseless rain sweeping away wildly before a long and lamentable blast": the wind given a voice of mourning; a storm without end.',
                '"the vast sweep of the Arctic Zone": the scale of the frozen north, which overwhelms a child\'s imagination.',
                '"death-white realms": the compound makes snow lifeless and threatening; "realms" makes the Arctic a kingdom of the imagination.',
                '"shadowy, like all the half-comprehended notions that float dim through children\'s brains": the simile captures how a child\'s half-understood ideas drift, vague but powerful.',
                '"the rock standing up alone in a sea of billow and spray" and "the broken boat stranded on a desolate coast": images of isolation that echo Jane\'s own.',
                '"the cold and ghastly moon glancing through bars of cloud at a wreck just sinking": the moon as an uncaring watcher; "bars" suggests a prison.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-02-text-c-q4',
        title: 'Question 4: Extended response to reading',
        description: `Question 4 is also on Text C, which is printed again above. Spend about 25 minutes on it, and keep the last 5 minutes of the paper for checking your answers.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-02-q4',
            questionNumber: 4,
            questionText: `Imagine that you are Jane. That night, you write in a journal that you keep hidden from your cousins.

Write your journal entry.

In your journal entry you should:
• describe your hiding place in the window-seat, and what you could see from it
• explain what the pictures and stories in your book mean to you, and why
• describe what happened when John Reed came into the room, and explain how you feel about him and the rest of the household.

Use ideas from Text C, in your own words, and cover all three bullet points.

Write about 250 to 300 words.

The content of your answer is worth up to 10 marks and the quality of your writing up to 10 marks. [20]`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'extended-response',
            extract: CAIE_P1_02_TEXT_C,
            extractSource: CAIE_P1_02_TEXT_C_SOURCE,
            modelAnswers: {
              'Grade 8-9': `It rained all afternoon, and my aunt would not let me sit with the others by the fire until I learned to be more cheerful. So I took a book from the breakfast-room shelves, climbed into the window-seat and drew the red curtain almost shut. It made a little room of my own: warm red folds on one side, and on the other the cold glass, which kept the storm out but let me watch it. Far off there was nothing but grey mist; close by, the wet lawn and the bushes beaten flat by the wind.

My book was Bewick's birds. I care little for the words, but the first pages tell of frozen seas and lonely rocks at the top of the world, and the pictures carried me there: a ship sinking under a cold moon, a churchyard all alone, and a fiend I could not bear to look at. I do not understand them all, yet each seems to tell me a story, like Bessie's tales by the nursery fire when she is in a kind humour. In those places nobody can reach me. I was happy, in my own fashion.

Then the door opened and John came bawling for "Madam Mope". I prayed he would not find me, for he is too slow to find anything himself, but Eliza told him at once. I came out before he could drag me, and he made me call him Master Reed and stand before him like a servant. I trembled, and I hate myself for trembling. Nobody in this house will ever take my part. I do not know how much longer I can bear to be the one who is always in the wrong.`,
            },
            markScheme: {
              'Reading (10 marks)': P1_Q4_READING,
              'Writing (10 marks)': P1_Q4_WRITING,
              'Ideas from Text C to use and develop': [
                'Bullet 1: the window-seat with its red curtain shutting her in; the glass that protects her but lets her see the "drear November day"; the mist far off, the wet lawn, the shrubs beaten by the storm and the endless rain and wind. A strong answer may develop why she hides: she has been shut out by her aunt.',
                "Bullet 2: she cares little for the words but loves the pictures; the Arctic, the lonely rocks, the wreck under the moon, the churchyard, the ships she thinks are phantoms, the fiend and the gallows that frighten her; each picture tells a story, like Bessie's tales. Development: the book is an escape into a world of her own, and its lonely, cold places echo her own loneliness.",
                'Bullet 3: John bursts in calling her "Madam Mope" and "bad animal"; he cannot find her, but Eliza gives her away; she comes out for fear of being dragged; he makes her call him "Master Reed" and stand before him. Development: her fear of him, her resentment, her sense that nobody in the house is on her side, and her dread of what comes next.',
                'A voice that suits a clever, lonely ten-year-old writing privately: honest about her feelings, observant, perhaps a little old-fashioned. Ideas should grow from the text, not be invented.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1, MOCK 3: patience and care. Text C: Silas Marner, Chapter 14.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'caie-p1-mock-03',
    board: 'CAIE',
    paperNumber: 1,
    title: 'Cambridge IGCSE First Language English (0500): Paper 1 Mock 3',
    subtitle: 'Paper 1: Reading. Texts A, B and C: patience and care',
    code: '0500/11',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'caie-p1-03-text-a',
        title: 'Question 1: Comprehension',
        description: `Paper 1 has four questions, each worth 20 marks, on three texts: Text A, Text B and Text C. Answer all four. You have 2 hours for the whole paper. In the exam the three texts are printed in a separate insert; here each text is printed with its question. Allow about 15 minutes in all for reading the three texts and about 25 minutes for each question, and keep the last 5 minutes for checking.

Read Text A, and then answer Question 1. Text A was written for this site: it is an account of taking an old clock to be mended. Spend about 5 minutes reading it.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-03-q1',
            questionNumber: 1,
            questionText: `Answer all parts of Question 1, (a) to (h), on Text A. The marks for each part are shown in square brackets.

(a) Re-read paragraph 1. How much did the writer pay for the clock? [1]

(b) Re-read paragraph 1. Give two details about what the clock looked like. [2]

(c) Explain in your own words what the writer means by:
(i) 'all talking quietly to themselves' (paragraph 2) [2]
(ii) 'as though it were a sleeping bird' (paragraph 3). [2]

(d) Re-read paragraph 3. Explain in your own wordswhy the clock had stopped. [2]

(e) Re-read paragraph 4. Give two reasons why the repair would take so long. [2]

(f) Re-read paragraph 2. Explain why the writer compares the second clock to chime to 'someone who has not been listening'. [3]

(g) Re-read paragraph 5. What does the writer suggest about Mrs Adeyemi's feelings towards her father and his work? Support your answer with details from the paragraph. [3]

(h) Re-read paragraph 7. Explain why the writer does not mind that the clock loses about a minute a week. [3]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'short-answer',
            extract: CAIE_P1_03_TEXT_A,
            extractSource: CAIE_P1_03_TEXT_A_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a) Three pounds.

(b) It was made of brass and had a handle on top.

(c)(i) Each clock was ticking softly on its own, at its own speed and out of time with the others, as if it were absorbed in its own business.

(c)(ii) She held it very gently and carefully, as if it were something alive, fragile and precious that might be harmed or woken.

(d) Over many years the oil inside had turned gummy and filled with dirt, until it gripped the moving parts so tightly that they jammed.

(e) More than a hundred tiny parts had to be taken out, and each one had to be cleaned, checked and put back in exactly the right place.

(f) The second clock chimes a little after the first, just as a person who has not been paying attention answers late. The comparison makes the clocks seem like people having a conversation, which brings the workshop to life, and it adds a gentle, affectionate humour to the description. It also shows that the clocks do not keep exactly the same time.

(g) Mrs Adeyemi clearly loved and admired her father. She spent her childhood beside his workbench from the age of six, which suggests that they were close and that she was fascinated by his work. She still repeats his saying that a clock "shows you exactly how it has been treated", so his values have become her own. She came to England to study engineering but ended up doing what he did, and "did not seem to regret it", which suggests that she is proud and content to carry on his craft.

(h) The writer now values the clock for its story and for the care that went into its repair, not for perfect timekeeping. After twenty silent years, the writer is simply glad that it ticks at all. The writer has also learned some of Mrs Adeyemi's patience, so a minute a week no longer seems worth worrying about, and the closing play on words, "it can take its time", shows the writer's affection and humour.`,
            },
            markScheme: {
              'How it is marked (20 marks)': P1_Q1_MARKING,
              '(a) [1]': ['Three pounds (£3).'],
              '(b) [2]': [
                'One mark each for any two of: it was small; it was brass; it had a handle on top; it had glass on every side; you could see its works, its wheels and springs.',
              ],
              '(c)(i) [2]': [
                'One mark for: the clocks were ticking softly, gently.',
                'One mark for: each on its own, at its own pace and out of time with the others, as if absorbed in itself.',
              ],
              '(c)(ii) [2]': [
                'One mark for: very gently and carefully.',
                'One mark for: as if it were alive, fragile and precious, and might be harmed or woken.',
              ],
              '(d) [2]': [
                'One mark for: over the years the oil had become gummy and full of dirt.',
                'One mark for: so the moving parts were stuck and could not move.',
                'The part asks for your own words: a point copied from the text, such as "as sticky as treacle", earns nothing.',
                'Not credited: that nobody had wound it. The text says that is not why it stopped.',
              ],
              '(e) [2]': [
                'One mark each for any two of: more than a hundred parts had to come out; each part had to be cleaned and checked for wear; each had to go back in exactly the right place and order; worn parts had to be made again by hand; Mrs Adeyemi works properly, not quickly.',
              ],
              '(f) [3]': [
                'One mark each for any three of: the second clock chimes a little after the first, as a person might answer late; it makes the clocks seem like people in conversation, bringing them to life; it adds gentle humour and affection; it shows that the clocks do not keep exactly the same time; it adds to the sense of a busy, crowded room full of voices.',
              ],
              '(g) [3]': [
                'One mark each for any three of: she was close to him, spending her childhood at his bench from the age of six; she loved or was fascinated by his work; she admires him and repeats his sayings, so his values are hers; she ended up in his trade rather than in engineering; she has no regrets and is proud or content to carry on his craft.',
              ],
              '(h) [3]': [
                'One mark each for any three of: the writer values the clock for its story and the care given to it rather than for accuracy; the writer is glad that it works at all after twenty years; the writer has learned patience from Mrs Adeyemi; the bill and the wait have made it precious; the play on words "it can take its time" shows affection and humour.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-03-text-b',
        title: 'Question 2: Summary task',
        description: `Read Text B, and then answer Question 2. Text B, in which a writer remembers a grandmother's garden, was written for this site. Spend about 5 minutes reading it and about 25 minutes on the question: about 19 minutes on the summary, 2(a), and about 6 minutes on 2(b).`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-03-q2',
            questionNumber: 2,
            questionText: `Answer both parts of Question 2, (a) and (b), on Text B.

(a) What, according to Text B, were the methods and qualities that made the writer's grandmother such a successful gardener?

Write your summary as continuous prose in full sentences, not notes, and in your own words as much as you can. Use no more than 120 words.

The content of your summary is worth up to 10 marks and the quality of your writing up to 5 marks. [15]

(b) Explain the writer's attitude towards modern ways of living. Back up your answer with three details from Text B. [5]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'summary',
            extract: CAIE_P1_03_TEXT_B,
            extractSource: CAIE_P1_03_TEXT_B_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a) The grandmother's secret was close attention: she treated her plants almost as people, noticing what each one needed. She knew which needed morning sun and which afternoon shade, and she spotted early signs of trouble before they became serious. She cared for the soil as a living thing, enriching it every year with her own compost. She kept careful records of sowing, rainfall and results, protected young plants on frosty nights and kept seed from her best plants. Above all, she was patient when things went wrong, studying each failure and trying new methods the next year. She never raged or blamed the weather, but accepted what she could not control and persevered.

(b) The writer is critical of modern life for making people impatient and unwilling to make an effort, and includes the writer's own behaviour in that criticism. The claim that we "grow restless if a web page takes more than three seconds to load" shows how little patience we have left. The writer then turns the criticism inward, describing the plants bought already in flower: "I had wanted a garden, not the work of growing one." Finally, calling the grandmother's slow, careful way "almost revolutionary" suggests that modern life has lost something so basic that patience now seems radical.`,
            },
            markScheme: {
              '2(a) reading (10 marks)': P1_Q2A_READING,
              '2(a) writing (5 marks)': P1_Q2A_WRITING,
              '2(a) points the summary can select': [
                'She paid close attention to her plants: that was her secret.',
                'She treated plants like people, listening for what they needed.',
                'She knew the needs of each plant, such as which liked morning sun and which afternoon shade.',
                'She spotted signs of trouble early, before they became serious.',
                'She treated the soil as a living thing to be nurtured.',
                'She fed the soil every autumn with compost she had made herself.',
                'She kept a notebook of sowing dates, rainfall and results.',
                'She protected seedlings on frosty nights.',
                'She saved seed from her strongest plants each year.',
                'She was patient with failure, studying what had gone wrong and trying something different the next year.',
                'She never raged or blamed the weather or the soil: she accepted what she could not control.',
                'She adapted, kept learning and persevered, making small improvements every day.',
                "Not points of the summary: the neighbours' guesses; examples, such as the yellowing leaf and the late frosts and pests that ruined some years; the writer's own impatience and failed garden; and the writer's views on modern life.",
              ],
              '2(b) (5 marks)': P1_Q2B_LEVELS,
              '2(b) what an answer might say': [
                'The attitude: critical of the impatience of modern life and its demand for instant results, with some self-criticism and wry humour, and admiration for the slower way it has lost.',
                'Details: "an age of instant gratification"; food that "arrives at the door within the hour"; films that "begin at the touch of a button"; we "grow restless if a web page takes more than three seconds to load"; "we grow frustrated with anything that demands sustained effort"; "I had wanted a garden, not the work of growing one"; the grandmother\'s approach "seems almost revolutionary".',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-03-text-c',
        title: 'Question 3: Short-answer questions and language task',
        description: `Read Text C, and then answer Question 3. Spend about 5 minutes reading it and about 25 minutes on the question: about 12 minutes on parts (a) to (c) and about 13 minutes on the language task, part (d).

Text C is taken from Silas Marner, a novel by George Eliot published in 1861. Silas is a weaver who lived alone for many years in a stone cottage near the village of Raveloe, until one winter's night a small child wandered in through his open door. He adopted her and called her Eppie. Now Eppie is three. Silas works at his loom all day, and to keep her safe while he works, he fastens her to it. A neighbour, Dolly Winthrop, has told him that a naughty child must be punished, perhaps by being shut for a moment in the coal-hole, a dark cupboard by the fireplace, but Silas cannot bear the thought of upsetting Eppie.

Words you may need: truckle-bed: a low bed on wheels; setting up: getting a new piece of weaving ready on the loom; in requisition: needed; derived the philosophic lesson: worked out for herself; the Stone-pit: a deep pit full of water near the cottage; cavities: hollows; descrying: seeing; a trespass on Mr. Osgood's crop: walking into a farmer's field of grass without permission; misdemeanour: wrongdoing; sorrel: a tall weed with reddish flowers; adhesive: sticky; aberration: bad behaviour; christened: baptised; "Opy, opy!": Eppie's way of saying "open"; toal-hole: Eppie's way of saying coal-hole.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-03-q3',
            questionNumber: 3,
            questionText: `Answer all parts of Question 3, (a) to (d), on Text C.

(a) Find the word or phrase in Text C that means the same as the words in capitals in each sentence below:
(i) Silas was CONCENTRATING ON HIS WORK EVEN MORE THAN USUAL. [1]
(ii) Eppie crept away AS QUIETLY AS A LITTLE ANIMAL. [1]
(iii) When he found Eppie, Silas was overcome by a happiness SO STRONG THAT HE SHOOK WITH IT. [1]

(b) Say in your own words what each word in capitals means as it is used here:
(i) 'but the click of them had had a PECULIAR attraction for her ear' [1]
(ii) 'This total failure of the coal-hole discipline shook Silas's belief in the EFFICACY of punishment.' [1]

(c) Re-read the paragraph beginning 'He half-expected that this would be shock enough'. Explain, in your own words, how one example of the writer's language in it suggests Silas's feelings about punishing Eppie. [5]

(d) Re-read the first paragraph of Text C from 'Silas, shaken by the worst fear' to its end. How does the writer's language convey Silas's fear and the scene he finally finds?

Analyse three words or phrases from this part of the text that have a strong effect, at least one of them an image. Write about 200 to 250 words. [10]

[Total: 20]

${P1_ANSWER_GUIDANCE}`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'analysis',
            extract: CAIE_P1_03_TEXT_C,
            extractSource: CAIE_P1_03_TEXT_C_SOURCE,
            modelAnswers: {
              'Grade 8-9': `(a)(i) more engrossed than usual

(a)(ii) like a small mouse

(a)(iii) convulsive joy

(b)(i) special: there was something about the sound that drew her in particular.

(b)(ii) effectiveness: whether punishment actually works.

(c) The writer says that Silas put Eppie into the coal-hole "with a trembling sense that he was using a strong measure". The word "trembling" shows that he is more frightened by the punishment than Eppie is: it is he, not the child, who shakes. Calling a moment in a dark cupboard "a strong measure" is gently comic, because the reader can see how mild it is, and so the phrase suggests how deeply Silas loves her and how much he dreads hurting her or losing her affection. It also shows how unsure he is: he is following Dolly's advice against his own nature, and one small cry from Eppie is enough to make him let her out.

(d) Silas's fear shows first as he gazes "with questioning dread at the smooth red surface of the water". The word "dread" names a deep, sickening fear of what he might find, and "questioning" suggests that he is asking the pit the one question he cannot bear to have answered. The "smooth" surface is frightening precisely because it gives nothing away: if Eppie had fallen in, it would look exactly the same.

As the search goes on, his panic distorts what he sees. He begins "to see Eppie behind every group of red sorrel, and to see her moving always farther off as he approached". The repeated "to see" shows how desperately he wants to find her, and the picture of a child who keeps retreating as he comes nearer is like a nightmare in which the thing you chase never comes closer, so that hope itself becomes a torment.

The ending changes the mood completely. Eppie's "little naked foot was planted comfortably on a cushion of olive-green mud". The metaphor of a "cushion" turns the mud into soft, homely furniture, and "comfortably" shows that she is perfectly at ease. The gap between his terror and her contentment is comic, and the reader shares Silas's relief and smiles.`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Parts (a) to (c), the short answers, are worth 10 marks and part (d), the language task, 10. The two are marked separately and added.',
                ...P1_Q3_SHORT_MARKING,
              ],
              '(a) [3]': [
                '(i) "more engrossed than usual" (accept "engrossed").',
                '(ii) "like a small mouse" (an answer that adds "she stole quietly" is fine; "stole quietly" alone gives the quietness but not the comparison with a little animal).',
                '(iii) "convulsive joy" (accept "convulsive").',
              ],
              '(b) [2]': [
                '(i) peculiar: special, particular to her, or strange and unusual.',
                '(ii) efficacy: effectiveness; whether punishment works.',
              ],
              '(c) [5]': [
                '"He half-expected that this would be shock enough": he hopes that the threat alone will do, so that he need not carry it out.',
                '"Seeing that he must proceed to extremities": a grand phrase for a small act, which gently mocks how seriously he takes it and shows his softness.',
                '"with a trembling sense that he was using a strong measure": he is more frightened than Eppie, and feels guilty at being harsh at all.',
                '"held the door closed": the briefest of punishments, and he lets her out as soon as she gives "a little cry".',
                'His words as he lets her out, warning that she must go back into "a black naughty place" if she is naughty again, show how much he wants to believe that the threat has worked.',
                'One example, fully explained, can reach the top level.',
              ],
              '(d) language task [10]': P1_Q3D_LEVELS,
              '(d) choices an answer might explore': [
                '"shaken by the worst fear that could have befallen him": losing Eppie is the worst thing he can imagine; "shaken" makes the fear physical.',
                '"gazing with questioning dread at the smooth red surface of the water": the pit gives nothing away; "questioning" shows him asking what he cannot bear to know.',
                '"The cold drops stood on his brow": cold sweat, terror shown in his body.',
                '"to see Eppie behind every group of red sorrel, and to see her moving always farther off as he approached": panic plays tricks on his eyes; the repetition and the retreating child show desperate hope.',
                '"looking with dying hope": hope pictured as something alive and fading.',
                '"discoursing cheerfully to her own small boot": a grand word for a toddler\'s chatter; comic relief after the fear.',
                '"her little naked foot was planted comfortably on a cushion of olive-green mud": the mud made soft and homely; she is utterly content.',
                '"A red-headed calf was observing her with alarmed doubt": the calf seems more worried than the child, which adds to the comedy.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p1-03-text-c-q4',
        title: 'Question 4: Extended response to reading',
        description: `Question 4 is also on Text C, which is printed again above. Spend about 25 minutes on it, and keep the last 5 minutes of the paper for checking your answers.`,
        totalMarks: 20,
        suggestedTimeMinutes: 30,
        questions: [
          {
            id: 'caie-p1-03-q4',
            questionNumber: 4,
            questionText: `Imagine that you are Silas. That evening, when Eppie is asleep, you write in a journal about the day.

Write your journal entry.

In your journal entry you should:
• describe how Eppie escaped, and what you felt while you searched for her
• explain what happened when you tried to punish her
• give your thoughts about how you should bring Eppie up from now on, and why.

Use ideas from Text C, in your own words, and cover all three bullet points.

Write about 250 to 300 words.

The content of your answer is worth up to 10 marks and the quality of your writing up to 10 marks. [20]`,
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'extended-response',
            extract: CAIE_P1_03_TEXT_C,
            extractSource: CAIE_P1_03_TEXT_C_SOURCE,
            modelAnswers: {
              'Grade 8-9': `My hands have hardly stopped shaking since this morning.

I was setting up a new piece of work and left my scissors on the ledge without a thought. Eppie must have watched me use them a hundred times, and she understood them better than I knew. While I sat weaving and thinking how good she was being, she cut right through the linen band and slipped out into the sunshine. When I reached for my scissors and found that she had gone, I thought my heart would stop. I ran first to the Stone-pit and stared at that still red water, afraid of what it might be hiding. Then I searched the meadow, trampling Mr Osgood's grass, and every clump of weeds looked like her, always a little further off. When I found her at last by the pond, chattering to her boot as she poured water into a hoof-print, I could only snatch her up and kiss her.

Dolly says a child must be punished, so I tried the coal-hole. I told Eppie she had been naughty and shut her in, though it frightened me far more than it frightened her. She cried out once, and I let her out at once. Once she was washed and my back was turned, she crept back inside, her face and hands black again, delighted with her new game.

So I have done with punishing. If I cannot bring myself to hurt her, and she thinks it all fun, it will teach her nothing, and I would rather bear a little trouble than see her afraid of me. I must watch her more closely instead, and keep the scissors, and every other danger, out of her reach. She has given me back my life; the least I can give her is my patience.`,
            },
            markScheme: {
              'Reading (10 marks)': P1_Q4_READING,
              'Writing (10 marks)': P1_Q4_WRITING,
              'Ideas from Text C to use and develop': [
                'Bullet 1: Silas was busy setting up new work and left his scissors within reach; Eppie, who had watched them, cut the linen strip and ran out of the open door; he searched the Stone-pit and its water first, then the meadow, seeing her everywhere, then found her by the pond in the mud, using her boot as a bucket. His feelings: terror, cold sweat, fading hope, then overwhelming joy and relief.',
                'Bullet 2: he decided that she must be punished so that she would not run away again and come to harm; he told her she must go in the coal-hole, but she seemed pleased; he shut her in, trembling, and let her out at her first cry; half an hour later she climbed back in and called out "Eppie in de toal-hole!" The punishment failed.',
                'Bullet 3: development beyond what the text says: he cannot hurt her and she thinks punishment is a game; he would rather bear the trouble she causes, which she will grow out of; he might keep dangers out of her reach and watch her more closely; his love for her and his fear of losing her affection.',
                'A voice that suits Silas: a gentle, loving man, more frightened than angry, writing simply and honestly. Ideas should grow from the text, not be invented.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2, MOCK 1: Section A on social media.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'caie-p2-mock-01',
    board: 'CAIE',
    paperNumber: 2,
    title: 'Cambridge IGCSE First Language English (0500): Paper 2 Mock 1',
    subtitle: 'Paper 2: Directed Writing and Composition. Section A: social media',
    code: '0500/21',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'caie-p2-01-directed',
        title: 'Section A: Directed Writing',
        description: `Paper 2 has two sections, each worth 40 marks: Section A, directed writing, and Section B, composition. Answer Question 1 in Section A and one question in Section B. You have 2 hours for the whole paper. In the exam the texts for Section A are printed in a separate insert; here they are printed above Question 1.

Read Text A and Text B, and then answer Question 1, both parts. Spend about 10 minutes reading the two texts, about 8 minutes on 1(a) and about 42 minutes planning and writing 1(b). Both texts were written for this site.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'caie-p2-01-q1',
            questionNumber: 1,
            questionText: `Answer both parts of Question 1.

(a) Re-read Text B. How does the writer's attitude to social media change from the start of the text to its end? Use your own words, and support your answer with details from the text. [5]

(b) Your school is holding an evening for parents about young people and social media, and you have been asked to give a speech. Write the speech you would give, persuading parents of what they should, and should not, do to help their children use social media well.

In your speech you should:
• weigh up what Text A and Text B say about social media
• say how families can help young people to use social media well, and why, drawing on what you have read.

Use ideas from both texts, in your own words, and cover both bullet points.

Begin your speech: 'Good evening, everyone.'

Write about 250 to 350 words.

The content of your answer is worth up to 10 marks and the quality of your writing up to 25 marks. [35]

[Total: 40]

${P2_SECTION_A_GUIDANCE}`,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'directed-writing',
            extract: CAIE_P2_01_TEXTS,
            extractSource: `${CAIE_P2_01_TEXT_A_SOURCE} | ${CAIE_P2_01_TEXT_B_SOURCE}`,
            modelAnswers: {
              'Grade 8-9': `1(a) At first the writer uses social media without thinking, and is shocked to discover nearly thirty hours of scrolling in a week, with nothing remembered. In the first week the writer misses it badly, reaching for the phone out of habit and feeling left out, "as if everyone else was at a party I had not been invited to". By the second week the attitude has turned positive: sleeping better, reading again and feeling calmer, the writer sees that much of the anger had come from strangers online. Then the writer recognises what giving it up costs, missing friends' plans and family news, and accepts that for some people it is "how real life is organised". The writer ends with a balanced, controlled view: social media is neither "evil" nor "harmless", and is now used on the writer's own terms.

1(b) Good evening, everyone. Before I wrote this speech, I checked how long I had spent on my phone last week. I am not going to tell you the number, but I will tell you that I was embarrassed by it, and I suspect that many of your children would be too.

The first of our two texts says that social media "profits from human misery and division". Some of that is fair. The feeds are designed to keep us reacting, and anger keeps us reacting best. Many teenagers lose sleep to their screens. But I am less sure than that writer that the technology itself is "neutral": an app built to make us angry is doing exactly what it was built to do. And the same writer admits that abandoning social media would be "naive". I agree. For a shy teenager, or one far from family, these apps can be a lifeline.

So please do not simply confiscate our phones. The second writer gave up social media for a month and slept better, finished a novel and felt calmer, but also missed two birthday meet-ups and had to ask a parent to see photographs of a cousin's new baby. Cutting us off completely teaches us nothing except how to hide.

What works, I think, is what that writer did in the end: going back "on my own terms". You can help us to set those terms. Agree a time when every phone in the house goes to sleep in the kitchen, and put yours there too. Help us to turn off notifications. Talk to us about what we see, because the first writer is right that young people must learn to question it, and you are the best people to teach us. Above all, set an example: it is hard to take advice about screen time from someone who is scrolling while giving it.

Social media is not going away. Instead of fighting it, help us to tame it. Thank you.`,
            },
            markScheme: {
              '1(a) (5 marks)': P2_Q1A_LEVELS,
              '1(a) what an answer might say': [
                'Before the month: unthinking use, and shock at nearly thirty hours of scrolling in a week, with nothing remembered.',
                'The first week: craving and habit ("reaching for my phone without meaning to"), and a sense of being left out of a party.',
                'The second week: relief and approval of life offline: better sleep, a finished novel, less anger, and the realisation that much of the anger came from strangers.',
                'Then second thoughts: the cost of being offline, missed birthday plans and family photographs; for some people social media is "how real life is organised".',
                'In the end: a balanced, controlled attitude: neither "evil" nor "harmless", and used "on my own terms", like sugar.',
                'A top answer traces the change and shows, with details, what each stage reveals.',
              ],
              '1(b) reading (10 marks)': P2_Q1B_READING,
              '1(b) writing (25 marks)': P2_Q1B_WRITING,
              '1(b) ideas from the texts to use and evaluate': [
                'Text A: feeds are designed to provoke strong reactions, especially anger and fear; depression and anxiety among young people have risen; teenagers lose sleep; feeds show edited, impossible lifestyles; companies profit from misery and division. But abandoning social media is "naive": it connects isolated people and helps activists and rescuers. The writer calls the technology "neutral" and wants openness about algorithms, laws that protect wellbeing, and children taught to question what they see.',
                'Text B: a month offline brought better sleep, more reading and less anger, but also missed plans and family news; the writer went back with rules: apps hidden, notifications off, the phone out of the bedroom at night.',
                'Evaluation: Text A names none of its studies, and calling the technology "neutral" sits oddly beside its own account of feeds built to provoke us; Text B is one honest account of one month, not proof; the two agree that giving up completely is not the answer.',
                'Own views, developed from the texts: what parents can do (shared rules, phone-free bedrooms, setting an example, talking about what children see) and should not do (confiscating phones, lecturing).',
              ],
              '1(b) the form': [
                'A speech to parents: it greets them and speaks to them throughout, takes a clear position, uses persuasive choices such as direct address, contrast, questions and a memorable ending, and keeps a polite, confident register.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p2-01-composition',
        title: 'Section B: Composition',
        description: `${P2_SECTION_B_GUIDANCE}

Spend about 5 minutes choosing a title and planning, about 50 minutes writing and the last 5 minutes checking your spelling and punctuation, which are marked here.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'caie-p2-01-q2',
            questionNumber: 2,
            label: '2, 3, 4 or 5',
            questionText: `Answer ONE of the following questions: 2, 3, 4 or 5.

Descriptive writing

2 Describe a busy street at the moment a sudden storm begins.

3 Write a description with the title, 'The Waiting Room'.

Narrative writing

4 Write a story that begins with the words, 'The message arrived just after midnight.'

5 Write a story with the title, 'Offline'.

Write about 350 to 450 words. The content and structure of your writing are worth up to 16 marks, and its style and accuracy up to 24 marks. [40]`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9': `Question 3: The Waiting Room

The clock above the reception desk is the loudest thing in the room. Its second hand jerks forward, pauses, jerks again, as if it, too, is reluctant to move on.

Twelve plastic chairs are bolted to the floor in two rows, the colour of weak tea. Most are empty. In the far corner a radiator ticks and knocks, giving off a dry heat that smells faintly of dust and disinfectant. The windows have misted over, so that the car park outside is only a smear of grey, and the rain running down the glass makes the streetlamps tremble.

An old man sits nearest the door, his flat cap balanced on one knee. His hands, spotted and swollen at the knuckles, rest on the handle of a walking stick, and every few minutes his thumb rubs a worn patch in the wood, back and forth, back and forth. He does not look up when the door opens. He has been waiting so long that he has become part of the furniture.

Opposite him, a young mother rocks a pushchair with her foot. Inside, a baby in a yellow hat has finally fallen asleep, one fist flung above its head like a tiny champion. The mother does not dare to stop. Her eyes are closed, but her foot keeps up its patient rhythm, a small engine that will not be switched off.

On the low table in the middle lies a heap of magazines, their covers curling, their puzzles half finished in other people's handwriting. Someone has abandoned a crossword with three clues left. Beside it, in a plastic box, a jumble of toys waits for children: a one-armed doll, a wooden train missing its last carriage, a bead frame whose coloured beads have all been pushed, by countless small hands, to one side.

The receptionist's keyboard clicks. A telephone rings twice and stops. Somewhere down the corridor a door opens, releasing a murmur of voices and a sudden laugh, and every head in the room lifts towards the sound.

Then the door closes. The laugh is gone. The heads sink again.

The clock jerks forward. The radiator knocks. The old man's thumb continues its slow journey across the wood, the baby sighs in its sleep, and the rain goes on rewriting the window, as though nobody in this room will ever be called.`,
            },
            markScheme: {
              'Content and structure (16 marks)': P2_COMPOSITION_CONTENT,
              'Style and accuracy (24 marks)': P2_COMPOSITION_STYLE,
              'What earns marks': P2_COMPOSITION_REWARDS,
              'These titles': [
                "Question 2: a description, not a story: the street just before and as the storm breaks, built from sound, light, movement and people's reactions, perhaps moving from wide views to close details.",
                "Question 3: a waiting room of any kind (a doctor's, a station's, an airport's), its atmosphere built from small details and the people waiting, without a plot.",
                'Question 4: a story that opens with the given words exactly; the message should matter, and the story should develop from it to a climax or turning point.',
                'Question 5: a story about being offline, by choice or not, for a person, a family or a whole town; a few events, well developed, rather than many.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2, MOCK 2: Section A on young people and reading.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'caie-p2-mock-02',
    board: 'CAIE',
    paperNumber: 2,
    title: 'Cambridge IGCSE First Language English (0500): Paper 2 Mock 2',
    subtitle: 'Paper 2: Directed Writing and Composition. Section A: young people and reading',
    code: '0500/21',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'caie-p2-02-directed',
        title: 'Section A: Directed Writing',
        description: `Paper 2 has two sections, each worth 40 marks: Section A, directed writing, and Section B, composition. Answer Question 1 in Section A and one question in Section B. You have 2 hours for the whole paper. In the exam the texts for Section A are printed in a separate insert; here they are printed above Question 1.

Read Text A and Text B, and then answer Question 1, both parts. Spend about 10 minutes reading the two texts, about 8 minutes on 1(a) and about 42 minutes planning and writing 1(b). Both texts were written for this site.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'caie-p2-02-q1',
            questionNumber: 1,
            questionText: `Answer both parts of Question 1.

(a) Re-read Text B. Explain the writer's attitude towards adults who say that young people no longer read. Use your own words, and support your answer with details from the text. [5]

(b) Your school is thinking of asking every pupil to spend the first twenty minutes of each school day reading a book of their choice in silence. Write a letter to your headteacher in which you argue for or against the plan.

In your letter you should:
• weigh up what Text A and Text B say about young people and reading
• say whether you think the plan would help pupils, and why, drawing on what you have read.

Use ideas from both texts, in your own words, and cover both bullet points.

Begin your letter: 'Dear Headteacher,'

Write about 250 to 350 words.

The content of your answer is worth up to 10 marks and the quality of your writing up to 25 marks. [35]

[Total: 40]

${P2_SECTION_A_GUIDANCE}`,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'directed-writing',
            extract: CAIE_P2_02_TEXTS,
            extractSource: `${CAIE_P2_02_TEXT_A_SOURCE} | ${CAIE_P2_02_TEXT_B_SOURCE}`,
            modelAnswers: {
              'Grade 8-9': `1(a) The writer is irritated by these adults and thinks they are wrong, but is fair to them. The writer feels the need to "write back" every time an article announces "the death of reading", which shows frustration at hearing the same complaint again and again. The writer believes the adults are "looking in the wrong places", and the examples of friends who read long fantasy series, listen to audiobooks and reread graphic novels prove that young people do read, only not in the way adults picture. The word "apparently" in "None of this counts, apparently" is sarcastic, mocking their narrow idea of what reading is. Yet the writer admits that "Schools are right to worry", so the attitude is critical but not dismissive, and it ends in a challenge: adults should start "noticing the reading we already do".

1(b) Dear Headteacher,

I am writing about the plan for every pupil to begin the day with twenty minutes of silent reading. I think it is a good idea, but only if pupils may choose what they read.

The writer of In Defence of Reading argues that reading builds attention and vocabulary, and calls it "to the mind what exercise is to the body". I agree. Many of my friends find it hard to concentrate on anything long, and twenty quiet minutes without phones would give us a calm start before lessons. However, that writer is less convincing in claiming that weaker concentration is simply the result of reading less. No evidence is given, and tiredness and the phones in our pockets must play a part too.

The second writer, a student, makes a point that the first ignores: young people do read, only not always in the way adults expect. Fantasy series, audiobooks and graphic novels are all reading, and if the plan treats them as second best, many pupils will stare at a page and wait for the bell. That writer's English teacher found that letting a class choose its own books made half of them curious enough to try something new. Choice turned reading from a duty into an interest.

I would therefore suggest three things. First, let pupils bring any book they like, including comics and graphic novels, and keep a box of books in every classroom for anyone who forgets. Secondly, ask teachers to read during the twenty minutes too, so that it feels like something the whole school does rather than a punishment. Finally, try the plan for one term and ask pupils what they think before deciding whether to keep it.

Run in this way, the reading time could make a real difference, not out of nostalgia but because it would give us a habit worth keeping.

Yours sincerely,
A Year 10 pupil`,
            },
            markScheme: {
              '1(a) (5 marks)': P2_Q1A_LEVELS,
              '1(a) what an answer might say': [
                'Frustration and irritation: the writer wants to "write back" every time someone announces "the death of reading".',
                'Disagreement: the adults are "looking in the wrong places"; the friends\' reading (long fantasy series, audiobooks, a graphic novel read until its spine split) shows that young people do read.',
                'Mockery: "None of this counts, apparently" is sarcastic about their narrow idea of reading, a teenager "curled up with a classic".',
                'Fairness: the writer admits that something has been lost and that "Schools are right to worry", but thinks lecturing does not work.',
                'A challenge: adults should start "noticing the reading we already do".',
              ],
              '1(b) reading (10 marks)': P2_Q1B_READING,
              '1(b) writing (25 marks)': P2_Q1B_WRITING,
              '1(b) ideas from the texts to use and evaluate': [
                'Text A: reading has declined (by some estimates, four hours a day on social media and less than twenty minutes reading); reading is an act of imagination that builds attention, vocabulary and abstract thought; "Reading is to the mind what exercise is to the body"; teachers report weaker concentration and writing; the writer blames the decline of deep reading; in an age of attention-stealing feeds, reading a long argument matters more than ever, so a culture of reading must be revived "out of necessity".',
                'Text B: young people do read, in other forms (long series, audiobooks, graphic novels); adults look "in the wrong places"; something has been lost, because phones make long books hard, so schools are right to worry; lecturing does not work; choice does, as the English teacher\'s ten minutes showed; reading is "changing shape".',
                'Evaluation: Text A\'s figures are hedged ("By some estimates"), and its claim that the decline of reading causes weaker concentration is asserted, not shown; its idea of reading may be narrower than Text B\'s. Text B rests on a few friends and one class, but it admits what has been lost, which makes it the more balanced of the two.',
                'Own views, developed from the texts: whether twenty minutes a day would help; what would make it work, such as choice, all kinds of reading, teachers reading too, and a trial.',
              ],
              '1(b) the form': [
                'A formal letter to the headteacher: an opening that gives its purpose and position, paragraphs that build the argument, a polite and respectful register, clear suggestions and a suitable close.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p2-02-composition',
        title: 'Section B: Composition',
        description: `${P2_SECTION_B_GUIDANCE}

Spend about 5 minutes choosing a title and planning, about 50 minutes writing and the last 5 minutes checking your spelling and punctuation, which are marked here.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'caie-p2-02-q2',
            questionNumber: 2,
            label: '2, 3, 4 or 5',
            questionText: `Answer ONE of the following questions: 2, 3, 4 or 5.

Descriptive writing

2 Describe a library or a bookshop late in the evening, when almost everyone has gone home.

3 Write a description with the title, 'The Attic'.

Narrative writing

4 Write a story in which a character finds something unexpected inside an old book.

5 Write a story with the title, 'The Last Page'.

Write about 350 to 450 words. The content and structure of your writing are worth up to 16 marks, and its style and accuracy up to 24 marks. [40]`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9': `Question 4

The book was the last one in the box, and I almost put it straight on the shelf marked 'Everything 50p'. It was a fat old dictionary with a cracked green spine, the kind nobody buys any more. But as I lifted it, something slid out from between the pages and landed at my feet.

It was an envelope, yellow with age and never opened. On the front, in careful slanting capitals, someone had written: FOR JUNE. OPEN ON THE MORNING OF YOUR FIRST EXAM.

"Mum," I called through to the back of the shop, "who brought in the dictionaries?"

She came out wiping the dust from her hands. "A man clearing his father's attic. Why?"

I held up the envelope. Mum's name is June. She stared at the handwriting for a long time, and then sat down very suddenly on the stool behind the counter.

"That's Dad's writing," she said.

The dictionary had vanished a week before her exams, she explained, in the spring she was sixteen. The night before her English paper, she had searched the whole house for it, crying, sure that she had lost the one thing that might help her. Grandad must have lent it to Mr Price next door, who moved away that summer, and forgotten what he had hidden inside. He never mentioned a letter, and she never saw the book again.

"Open it," I said.

Her fingers were shaking. Inside was a single sheet of paper and, pressed flat in its fold, a four-leaf clover, brown and brittle as an autumn leaf.

Mum read the letter aloud, though her voice kept failing. Grandad wrote that he was proud of her whatever happened. He wrote that he had found the clover by the allotment gate and kept it for weeks, waiting for the right moment. He wrote that she must not be frightened, because she already knew far more than she thought, and the dictionary was only there to remind her.

When she finished, the shop was so quiet that I could hear the rain on the window.

"I passed, you know," she said at last, laughing and wiping her eyes. "Without the clover."

That evening we drove to the care home. Grandad does not always know who we are now, but when Mum put the letter into his hands, he smoothed it out on his knee and smiled as though he had written it that morning.

"Did it help?" he asked.

"Yes, Dad," Mum said. "It just took a long time to arrive."`,
            },
            markScheme: {
              'Content and structure (16 marks)': P2_COMPOSITION_CONTENT,
              'Style and accuracy (24 marks)': P2_COMPOSITION_STYLE,
              'What earns marks': P2_COMPOSITION_REWARDS,
              'These titles': [
                'Question 2: a description, not a story: the stillness of the shelves, the last lights and sounds, perhaps one person still there, built from precise details of sight, sound and smell.',
                'Question 3: a description of an attic, its light, dust and forgotten objects, and what they suggest about the people who left them, without a plot.',
                'Question 4: a story whose discovery matters: a note, a photograph, a pressed flower, a map; the story should develop what the discovery leads to, towards a climax or turning point.',
                'Question 5: a story in which a last page matters, of a book, a diary or a letter; the title can be taken literally or not.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2, MOCK 3: Section A on school gardens.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'caie-p2-mock-03',
    board: 'CAIE',
    paperNumber: 2,
    title: 'Cambridge IGCSE First Language English (0500): Paper 2 Mock 3',
    subtitle: 'Paper 2: Directed Writing and Composition. Section A: school gardens',
    code: '0500/21',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'caie-p2-03-directed',
        title: 'Section A: Directed Writing',
        description: `Paper 2 has two sections, each worth 40 marks: Section A, directed writing, and Section B, composition. Answer Question 1 in Section A and one question in Section B. You have 2 hours for the whole paper. In the exam the texts for Section A are printed in a separate insert; here they are printed above Question 1.

Read Text A and Text B, and then answer Question 1, both parts. Spend about 10 minutes reading the two texts, about 8 minutes on 1(a) and about 42 minutes planning and writing 1(b). Both texts were written for this site.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'caie-p2-03-q1',
            questionNumber: 1,
            questionText: `Answer both parts of Question 1.

(a) Re-read Text B. Explain the attitude of the writer of Text B towards the school garden. Use your own words, and support your answer with details from the text. [5]

(b) Your headteacher is deciding whether every pupil in your school should spend one afternoon a fortnight working in a school garden, as the pupils in Text A do. The school council has asked you to write a report for the headteacher.

Write the report, discussing the advantages and disadvantages of the plan and making a recommendation.

In your report you should:
• weigh up what Text A and Text B say about school gardens
• recommend what your school should do, and why, drawing on what you have read.

Use ideas from both texts, in your own words, and cover both bullet points.

Give your report a heading.

Write about 250 to 350 words.

The content of your answer is worth up to 10 marks and the quality of your writing up to 25 marks. [35]

[Total: 40]

${P2_SECTION_A_GUIDANCE}`,
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'directed-writing',
            extract: CAIE_P2_03_TEXTS,
            extractSource: `${CAIE_P2_03_TEXT_A_SOURCE} | ${CAIE_P2_03_TEXT_B_SOURCE}`,
            modelAnswers: {
              'Grade 8-9': `1(a) The writer is polite but sceptical, and in places quietly mocking. The writer accepts that the teachers "mean well" and was pleased that the writer's daughter had enjoyed herself, so the attitude is not hostile. But the main feeling is worry that the garden takes time from lessons: the question "where is the time coming from?" and the chemistry class that has "fallen two topics behind" show that exam results matter far more to this parent. Details such as the "slightly chewed lettuces" and the remark that "Not every pupil is a budding farmer" gently ridicule the scheme. The writer thinks it unfair to make every pupil take part and would prefer a voluntary club, so in the end the garden is seen as a pleasant extra, not part of real education.

1(b) Report on the proposal for a school garden

To: The Headteacher
From: The School Council

Introduction
You asked the school council whether every pupil should spend one afternoon a fortnight working in a school garden. We read two texts: an article by a teacher whose school already has such a garden, and a letter from the parent of a pupil there.

Advantages
The teacher's article makes a strong case. The garden brings science, maths and biology to life, and its vegetables go into school lunches. More importantly, it seems to help pupils who struggle in classrooms: shy children grow in confidence, and classes return calmer and readier to listen. These claims come from one teacher who is clearly proud of the project, so they may be a little rosy, but they fit what most of us would expect of time spent outdoors, away from screens.

Disadvantages
The parent's letter raises a fair point: lesson time is limited. If a class has fallen two topics behind in chemistry, the garden may cost more than it gives, especially before exams. The parent is also right that not everyone enjoys it; pupils with hay fever, or who hate the cold, may gain little. However, the letter rests on one pupil's experience, and it ignores the ways in which the garden supports learning.

Recommendation
We recommend a middle way. The school should build a garden, since the teacher shows that it can be done cheaply with help from parents and local businesses. Garden sessions should be part of science and maths lessons, so that no subject loses time, and they should be optional in the weeks before exams. A lunchtime gardening club, as the parent suggests, would give keen pupils more. We suggest trying this for one year and then asking pupils and parents what they think.`,
            },
            markScheme: {
              '1(a) (5 marks)': P2_Q1A_LEVELS,
              '1(a) what an answer might say': [
                'Polite and fair at first: the teachers "mean well", and the writer was pleased that the daughter enjoyed herself.',
                'Worried and sceptical about lost lessons and exams: "where is the time coming from?"; lessons lost even before the mock exams; a chemistry class two topics behind.',
                'Gently mocking: the "slightly chewed lettuces"; "Not every pupil is a budding farmer".',
                'Thinks it unfair to make every pupil take part: hay fever, and a friend who hates being cold and wet.',
                'Not against gardens, but wants a voluntary club, because schools exist "first and foremost, to educate".',
              ],
              '1(b) reading (10 marks)': P2_Q1B_READING,
              '1(b) writing (25 marks)': P2_Q1B_WRITING,
              '1(b) ideas from the texts to use and evaluate': [
                'Text A: a neglected corner turned into beds, a greenhouse, a pond and a bench; every class goes once a fortnight; vegetables for school lunches; science, maths and biology brought to life; pupils who struggle in class come alive; shy pupils grow in confidence; classes return calmer; time outdoors away from screens is "a necessity"; it cost little, thanks to parents and local businesses.',
                'Text B: the school day is already full; lessons lost even before mock exams; a class two topics behind in chemistry; not every pupil enjoys it (hay fever, hating the cold and wet); compulsory gardening is unfair; a lunchtime or after-school club would suit those who love it; schools exist "first and foremost, to educate".',
                'Evaluation: Text A is written by an enthusiast and gives few figures beyond the vegetables grown, while its claims about calm and confidence are what teachers "notice"; Text B rests on one daughter and her friend, and its claim that lessons fell behind because of the garden is not proved; the two could be reconciled by linking the garden to lessons.',
                'Own views, developed from the texts: a recommendation (a garden for all, for volunteers, or a mixture), with reasons, perhaps a trial period and a way to protect exam preparation.',
              ],
              '1(b) the form': [
                'A report: a heading, perhaps the names of the reader and writer, an introduction that states its purpose, clear sections (for example advantages, disadvantages and recommendation), an impersonal, formal register, and a recommendation that follows from the evidence.',
              ],
            },
          },
        ],
      },
      {
        id: 'caie-p2-03-composition',
        title: 'Section B: Composition',
        description: `${P2_SECTION_B_GUIDANCE}

Spend about 5 minutes choosing a title and planning, about 50 minutes writing and the last 5 minutes checking your spelling and punctuation, which are marked here.`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'caie-p2-03-q2',
            questionNumber: 2,
            label: '2, 3, 4 or 5',
            questionText: `Answer ONE of the following questions: 2, 3, 4 or 5.

Descriptive writing

2 Describe the scene at a railway station early in the morning, before the first train arrives.

3 Write a description with the title, 'The Workshop'.

Narrative writing

4 Write a story with the title, 'The Visitor'.

5 Write a story that ends with the words, '... and, for the first time in years, the clock began to tick.'

Write about 350 to 450 words. The content and structure of your writing are worth up to 16 marks, and its style and accuracy up to 24 marks. [40]`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9': `Question 5

Grandad and Uncle Ray had not spoken for eleven years, and everyone in our family knew why. It was because of the clock.

It stood in Grandad's hallway, taller than me, in a case of dark wood polished to the colour of conkers. Their father had built it the year Grandad was born, and when he died, each brother believed it had been promised to him. Grandad took it home in a van while Ray was still shaking hands at the funeral. Ray said things that could not be unsaid. After that there were two Christmases in our family, two sets of birthday cards, and a clock that did not go, because Grandad had broken its key in the lock the day he brought it home and refused to have it mended.

"It can stand there," he would say, "and remind me."

I never asked of what.

The summer I turned fourteen, Grandad slipped in the garden and broke his wrist, and I was sent to help him for a week. On the third day, looking for a screwdriver in the shed, I found a biscuit tin full of letters. Every one was addressed to Ray. Every one was stamped. Not one had been posted.

I did not read them. I did not need to. I took the bus across town to Uncle Ray's flat instead, with the tin on my knee.

He opened the door in his slippers and looked at me for a long moment, as if he were working out whose side I was on.

"He writes to you," I said. "He just never sends them."

Ray turned the tin over in his hands. Then he went to a drawer and took out something small and brass, wrapped in a handkerchief.

"The spare key," he said. "Dad gave it to me. I kept it out of spite." He sighed. "Eleven years is a long time to carry spite about."

When we arrived, Grandad was dozing in his chair with the radio murmuring. He woke, saw his brother in the doorway, and for one terrible moment I thought he would order him out. Instead, his face crumpled.

"You look old," he said.

"So do you," said Ray.

Neither of them could manage the key with their trembling hands, so in the end it was I who fitted it into the clock while the two old men stood on either side of me, close enough to touch, and I turned it gently, once, twice, three times, and, for the first time in years, the clock began to tick.`,
            },
            markScheme: {
              'Content and structure (16 marks)': P2_COMPOSITION_CONTENT,
              'Style and accuracy (24 marks)': P2_COMPOSITION_STYLE,
              'What earns marks': P2_COMPOSITION_REWARDS,
              'These titles': [
                'Question 2: a description, not a story: the empty platform, the light, the cold, the first passengers and the sounds before the train, perhaps changing as the time of arrival nears.',
                "Question 3: a description of any workshop, a carpenter's, a mechanic's, a printer's, built from tools, materials, smells and the marks of work, without a plot.",
                'Question 4: a story in which a visitor matters: who arrives, why, and what changes because of it, building to a climax or turning point.',
                'Question 5: a story that ends with the given words exactly, so the story must be shaped to arrive there: a clock that has been silent for years, and a reason why it starts again.',
              ],
            },
          },
        ],
      },
    ],
  },
]
