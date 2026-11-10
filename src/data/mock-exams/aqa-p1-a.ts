// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * AQA GCSE ENGLISH LANGUAGE PAPER 1 (8700/1), MOCKS 01 TO 05, SET AS AQA SETS
 * THE PAPER FROM SUMMER 2026 (31 October 2026).
 *
 * WHAT WAS WRONG. The marks, total and time were already AQA's, so these
 * papers passed src/__tests__/a-language-mock-is-the-boards-paper.test.ts. But
 * from summer 2026 AQA reworded several questions and kept their marks, and
 * these still set the old forms, mostly in AQA's own rubric, copied:
 *   - Question 1 asked for four true statements out of eight; AQA now sets
 *     four multiple-choice parts, 1.1 to 1.4, each with one right answer;
 *   - Question 3 asked how the source was structured "to interest you as a
 *     reader", or named two effects at once, or a journey; AQA names one
 *     effect;
 *   - Question 4 asked "To what extent do you agree?"; AQA asks how far the
 *     student agrees and/or disagrees with a view of a named part;
 *   - Question 5 asked for "a description suggested by this picture", for the
 *     same competition and the same judges on every paper; AQA gives the
 *     picture for ideas only, or asks for the opening of a story;
 *   - Question 4 was timed at 22 minutes, where AQA advises 20; and on Papers
 *     2, 3 and 5 Question 2's lines ran on into the part Question 4 names, so
 *     one paragraph was set twice.
 *
 * WHAT THEY ARE NOW, as src/data/mark-scheme-guides/aqa-lang-paper1.ts
 * describes the paper, in the site's own words. Question 1 is one entry worth
 * 4, labelled "1.1 to 1.4": four parts on a named paragraph or two, each on a
 * different detail, with three options and one right answer, and at least one
 * wrong option that repeats a word of the source. The right letters change
 * from part to part and follow a different pattern on each paper (BACA, CBAC,
 * ACBB, BCCA, CABA). Question 2 is reworded, and its lines now stop where
 * Question 4's part begins. Question 3 names one effect the source really
 * creates: a growing threat, the soldiers trapped, mystery, tension, calm.
 * Question 4 gives one reader's view of a named part to weigh, and its model
 * answers weigh it. Question 5 offers a description, its picture described in
 * words and given for ideas only, or the opening of a story, each paper for a
 * different reader. The levels in the mark schemes are the guide's plain
 * words. Every quotation in the questions, answers and schemes was checked by
 * script against its extract, and the extracts are unchanged.
 *
 * SECOND READING, 31 October 2026, by a reader who did not write them. Every
 * part was read against its lines and every answer against its source; the
 * right letters and the named effects above are confirmed. What was wrong,
 * and what changed:
 *   - Paper 1, 1.2: the right option said the suitcase was "tipping over",
 *     which is falling; "listing" is leaning, and the option now says so;
 *   - Paper 1, Question 3: an answer ended the journey "just behind Elise's
 *     back" and its scheme on "the creak of someone"; the source says only
 *     "very close", in an "as though" comparison, and both now say that;
 *   - Paper 1, Question 4: that "as though" clause was called a simile (now a
 *     comparison), "very close" became "beside her" (now "very near her"),
 *     and the scheme's "creak of someone" is now a creak that sounds as though;
 *   - Paper 2, Question 2 asked how the writer uses "language here to", AQA's
 *     own frame; it now says "in these lines";
 *   - Paper 2, Question 3: Mitchell was "impossible to reach" and "cannot be
 *     reached"; the source says only that nobody had gone, across a killing
 *     field, so now "too dangerous to reach" and "cannot safely be reached";
 *   - Paper 2, Question 4, Grade 4-5: Amir's rage was aimed at the people who
 *     give orders, the misreading fixed on 27 September, and nobody "has been
 *     able" to fetch Mitchell; the source aims it at the distance between
 *     them and the soldiers, and says nobody had gone. Both now say so;
 *   - Paper 2, Question 4, Grade 6-7: the hand's "as though" was called a
 *     simile (now an image), "familiar" was read as anger "building" (it is
 *     anger felt many times before), the order was called the danger itself
 *     (it points to it), and the view was restated as "the danger does not
 *     matter" (it says the part is not about the danger);
 *   - Paper 3, 1.2: the right option put "for a long time" on how long the
 *     woman meant to go on watching; in the source it is how long she had
 *     watched already. The option now says only that she meant to keep on;
 *   - Paper 3, Question 3: she "still" could not see the woman's face on
 *     Wednesday, though the source says nothing of it on Tuesday; "still" is
 *     gone;
 *   - Paper 4, Question 2: "around 1987" was called "oddly exact"; it is
 *     oddly specific. Question 3: two answers said the grandmother "can" see
 *     every thought; her look makes Leo feel she could, as they now say;
 *   - Paper 5, 1.3: wrong option A, the mudflats and the sea, was arguable,
 *     with light on the mudflats "like spilled mercury" and a world with "no
 *     edges, no seams"; it is now the silver line and the pink, which the
 *     source gives one after the other;
 *   - Paper 5, Question 4: an answer weighed "one hand" against a whole town;
 *     the source sets a handful of mud against it, and the answer now says one
 *     handful;
 *   - the five source labels joined their genre with a spaced hyphen, a dash
 *     in text students read; the genre is now in brackets;
 *   - Question 5: each paper's Grade 6-7 answer described a strong piece
 *     rather than being one. It is now a full piece of about 500 words in the
 *     site's own words, written for the reader the task names, and its first
 *     line says which task it takes: the description on Papers 1, 4 and 5,
 *     the story opening on Papers 2 and 3. The Grade 4-5 outlines are as they
 *     were.
 *
 * WHAT WAS WRONG BEFORE THAT (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, fixed 27 September 2026). The
 * questions and answers it describes were rewritten on 31 October.
 *
 * The five extracts are specially written for this bank and labelled
 * Original; none was changed. The questions and model answers were not in
 * step with them:
 *   - Paper 4 question 2's Grade 6-7 answer analysed a clause about the
 *     grandmother's gaze, "as though she were conducting a private
 *     assessment...", that is not in the extract, and built its closing point
 *     on the words "assessment" and "competence". The extract gives her "a
 *     way of looking at Leo"; the point is rewritten on that sentence;
 *   - two quotations joined the text's words with words silently left out:
 *     "the café with the blue awning" (the text has "the café opposite - the
 *     one with the blue awning") and "swore with casual fluency" (it has
 *     "swore with the casual fluency");
 *   - question 1 keys with five true statements for four marks. Paper 1's E
 *     (the drive was muddy) and Paper 2's F (there was smoke in the sky) were
 *     true, and each Grade 6-7 answer said so and kept its four letters
 *     anyway; Paper 5's A (dawn arrived suddenly) was arguable, since the
 *     light comes "all at once". Each is replaced by a statement the extract
 *     settles as false. Every keyed letter is unchanged;
 *   - paragraphs miscounted: Paper 2 question 2 called a span of four
 *     paragraphs "the second and third", Paper 3 question 2 called the fourth
 *     and fifth "the third and fourth", and answers put Mitchell's remains in
 *     Paper 2's third paragraph, the move to action in Paper 3's fourth and
 *     Leo's inward revelation in Paper 4's penultimate. Each is now counted
 *     correctly or named by its opening words;
 *   - things the extract does not say: an evening in Paper 5 (the tide turns
 *     in the morning), Dr Frost coming to the estuary because she "needs stillness",
 *     a watcher who "never drinks" her coffee (she never appeared to), Paper
 *     4's dialogue ending on Leo's admission (it ends on his grandmother's
 *     reply), "stitch" and "stitching" quoted where the text has "stitched",
 *     and a Paper 2 answer on the second half resting on Lowell's letter from
 *     the first;
 *   - wrong terms: a "like" comparison called a metaphor, "I'm angry" called
 *     monosyllabic, "Same table. Same posture" called declarative sentences
 *     (they have no main verb), a clause ending "herself" called subject, verb,
 *     object, "constant, quiet transformation" called an oxymoron and its mark
 *     scheme asking for one, "insignificant and grateful" an antithesis,
 *     "Dear Mum" a metonym, "veined" a verb and a dead man's hand
 *     personified; "toward" in the answers' own prose;
 *   - found on a second reading the same day: Paper 3's "tricolon of
 *     intentions" was three quotations, one of them an outcome, not an
 *     intention (the text has four clauses with "would", now quoted whole);
 *     Amir's rage aimed "at the people giving orders" (the text aims it at
 *     the distance between them and the soldiers); Paper 1's A called false
 *     where the text is silent; "constant" said to usually mean unchanging;
 *     a joke said to make Leo "more comfortable", which the text does not
 *     say; four question 4s calling the last 27 to 42 per cent of the
 *     source its "second half", now its "second part" (Paper 2's, at 51
 *     per cent, keeps "half"); and Paper 1's question 4 answer reaching
 *     back to the second paragraph without saying so.
 *
 * Every quoted span in these questions, answers and mark schemes is now in
 * its own extract, or is a student's view for question 4 to weigh, or is
 * named as words the writer did not use; the checker passes the file. The
 * papers are served: index.ts and the chunk loader both carry aqaP1A.
 */

// ─── Extracts ────────────────────────────────────────────────────────────────

const EXTRACT_01 = `The house had been waiting. That was the only way Elise could describe it as she stood at the foot of the gravel drive, her suitcase listing sideways in the mud. Harrowden Hall rose before her like a great grey skull, its windows dark and vacant, its roof sagging under the weight of decades. Ivy had claimed the east wing entirely, a slow green invasion that nobody had thought to halt.

She had inherited the place from a great-aunt she had never met - a woman who, according to the solicitor's carefully neutral letter, had lived alone in the house for forty-seven years. Forty-seven years. Elise tried to imagine it: the same corridors, the same rooms, the same silence pressing against the walls like something solid.

The front door was unlocked. It opened with a sound like a long-held breath being released. Inside, the hallway stretched away into darkness, and the air was cold - not the ordinary cold of an unheated building, but something older, something that seemed to come from the stones themselves. A grandfather clock stood against the far wall, its pendulum still. Its face was frozen at twenty past three.

Elise set down her suitcase. Somewhere above her, on the first floor or perhaps the second, a door closed softly. She stood very still, listening. The house listened back.

"Hello?" she called. Her voice sounded thin and foolish in the vast space. There was no answer - only the faint, unmistakable creak of a floorboard, as though someone who had been standing very close had just taken a single step away.`

const EXTRACT_01_SOURCE = 'Original literary fiction composition (Gothic horror)'

const EXTRACT_02 = `The shelling had stopped an hour ago, but Corporal Amir Hussain did not trust the silence. Silence, in his experience, was just noise taking a breath. He pressed himself deeper into the trench wall, feeling the wet earth cold against his shoulder blades, and watched the sky through the lattice of broken timber above his head. It was the colour of a bruise - purple and yellow at the edges, darkening to black where the smoke still hung.

Beside him, Private Lowell was writing a letter. His hands were shaking so badly that the pencil kept slipping, leaving jagged marks across the paper like the readings of a seismograph. He had been writing the same letter for three days. He had not got past "Dear Mum."

"You should sleep," Amir said.

"Can't." Lowell did not look up. "Every time I close my eyes I see Mitchell."

Amir said nothing. Mitchell had been dead for thirty-six hours, but parts of him were still visible in the mud twenty yards ahead - a boot, the sleeve of a jacket, one hand reaching upward as though asking to be pulled free. Nobody had gone to retrieve him. The ground between the trench and Mitchell was a killing field, and the snipers on the ridge had the patience of saints.

The radio crackled. Somewhere far behind the lines, in a room with electric light and hot tea, someone was making decisions about their lives. Amir could hear the calm, clipped voice issuing coordinates, and he felt the familiar rage - not at the enemy, but at the distance between the people who gave orders and the people who carried them out.

"We move at 0400," he said quietly. Lowell's pencil stopped. The silence tightened around them like a fist.`

const EXTRACT_02_SOURCE = 'Original literary fiction composition (war fiction)'

const EXTRACT_03 = `Catherine noticed the woman for the first time on a Tuesday. She was sitting in the café opposite - the one with the blue awning that Catherine could see from her desk - and she was watching Catherine's building. Not glancing at it. Not looking in its general direction. Watching it, with the focused stillness of someone who had been doing so for a long time and intended to continue.

Catherine told herself it meant nothing. People sat in cafés. People looked out of windows. There was no reason to feel the cold, prickling sensation that was spreading across her scalp like ice water.

She went back to her work. When she looked up forty minutes later, the woman was gone.

On Wednesday, the woman was back. Same table. Same posture - very straight, both hands wrapped around a coffee cup she never appeared to drink from. She wore a dark coat and her hair was pulled back severely from a face that Catherine could not quite see clearly from this distance. But she could feel the woman's gaze. It had a weight to it, a physical pressure, like a finger pressing steadily against her sternum.

On Thursday, Catherine left the office at lunch and crossed the street. She would sit in the café herself. She would order a coffee and she would look at the woman and the spell would break, because spells always broke when you walked toward them instead of away.

The café was warm and smelled of cinnamon. Catherine sat at the table by the window - the woman's table, she realised - and looked across at her own office building. Fourth floor, third window from the left. And there, framed in the glass, looking down at her with an expression she could not read, was a figure.

It took her three full seconds to understand that she was looking at herself.`

const EXTRACT_03_SOURCE = 'Original literary fiction composition (psychological thriller)'

const EXTRACT_04 = `The summer Leo turned fifteen, the river shrank to almost nothing. By August it was just a thread of brown water barely deep enough to cover your ankles, and the rocks that were usually submerged stood exposed and pale like bones. The whole town felt different - slower, heavier, as though the heat had thickened the air into something you had to push through.

Leo spent most of that summer with his grandmother. His parents were somewhere in the middle of what his mother called "a difficult conversation" and what his father, more honestly, called "the end." Leo did not want to be in the house where that conversation was happening, so he cycled three miles each morning to his grandmother's cottage at the edge of the woods and did not come back until dark.

His grandmother was not the soft, biscuit-baking kind. She was seventy-three, thin as wire, and she swore with the casual fluency of someone who had given up caring what anyone thought around 1987. She had a vegetable garden that she tended with fierce concentration, a shelf of books about birds, and a way of looking at Leo that made him feel she could see every thought he was trying to hide.

"You're angry," she said one morning, without looking up from her tomato plants.

"I'm not."

"You've been pulling up my weeds like you're trying to hurt them. Weeds have feelings too, I expect." She straightened, pressing one hand into the small of her back. "Or maybe they don't. But you definitely do."

Leo sat back on his heels and looked at the pile of uprooted dandelions beside him. She was right. He was angry - a thick, hot anger that sat in his chest like a stone. He was angry at his father for leaving and at his mother for letting him and at both of them for pretending it had anything to do with a "difficult conversation" when what it really was, was a family falling apart.

"Yeah," he said. "I'm angry."

His grandmother nodded. "Good," she said. "Angry is honest. Angry I can work with."`

const EXTRACT_04_SOURCE = 'Original literary fiction composition (coming of age)'

const EXTRACT_05 = `Dawn came to the estuary in layers: first a thin line of silver at the horizon, then a slow bleeding of pink into the grey, then - all at once, as though a lamp had been turned up - the full, trembling light of morning spreading across the mudflats like spilled mercury. The water was perfectly still. The sky and its reflection were indistinguishable, and for a few suspended minutes the world had no edges, no seams, no division between above and below.

Dr Anya Frost stood at the water's edge, her boots sinking slightly into the soft ground, and tried to remember the last time she had been truly still. Not pausing between tasks. Not waiting for something. Just still. She could not.

The estuary was a place of constant, quiet transformation. At low tide, it revealed a landscape that most people never saw: a vast plain of rippled mud, studded with the shells of cockles and razor clams, veined with channels of silver water that branched and rebranched like the tributaries of some miniature river system. Lugworm casts rose in neat coils - thousands of them, each one the signature of a creature living its entire life in darkness, processing the mud through its body, extracting what it needed, leaving the rest behind.

She crouched and pressed her fingers into the mud. It was cold and dense and alive. Beneath this surface, she knew, there were over forty thousand organisms per square metre - worms, crustaceans, microscopic algae. A single handful of estuarine mud contained more living things than the entire human population of the nearest town. The thought made her feel simultaneously insignificant and grateful.

A curlew called from somewhere across the flats, its long, descending note hanging in the air like a question. Then another answered, and another, until the whole estuary was stitched together with sound. Anya closed her eyes. The mud held her steady. The tide, somewhere out beyond the sandbar, was already turning, beginning its slow, patient return.`

const EXTRACT_05_SOURCE = 'Original literary fiction composition (nature writing)'

// ─── What the five papers share ──────────────────────────────────────────────
// The rubric, in the site's own words, and the levels of each question, in the
// plain words of src/data/mark-scheme-guides/aqa-lang-paper1.ts.

const SECTION_A_GUIDANCE =
  'Read the source below, then answer all four questions in this section. Allow about 15 minutes for reading the source and every question on the paper, and about 45 minutes for answering this section.'

const SECTION_B_GUIDANCE =
  'Allow about 45 minutes for this section: about 5 minutes to plan, 35 to write and 5 to check your spelling and punctuation. Organise your writing in paragraphs.'

const Q1_PROMPT =
  'Answer 1.1 to 1.4 from those lines only. Each part has one correct answer: choose A, B or C, and give just one letter for each part.'

const Q1_MARKING =
  'One mark for each part answered with the correct letter: 4 marks in all, with no levels.'

const Q2_PROMPT =
  'Think about particular words and phrases, any techniques the writer uses, and the length and shape of the sentences.'

const Q4_PROMPT =
  'How far do you agree with this reader, and how far do you disagree? Explain your judgement, writing about what happens in this part and about the methods the writer uses, and support your points with evidence from these lines.'

const Q5_PICTURE_PROMPT =
  'The real paper prints a photograph with this task. Here it is described in words:'

const Q5_PICTURE_USE_PROMPT =
  'You may use it for ideas, but you do not have to describe exactly what it shows.'

const Q5_MARKS =
  'Of the 40 marks, 24 are for what you write and how you organise it, and 16 are for accuracy: correct spelling and punctuation, and a varied choice of words and sentences.'

const Q2_LEVELS = [
  `Level 4 (7-8 marks): looks beneath the surface, analysing how the writer's choices work and what they suggest, with sharply chosen quotations and confident, precise subject terms.`,
  'Level 3 (5-6 marks): says plainly what effect the words have on the reader and why, with several well-chosen quotations and techniques named correctly.',
  'Level 2 (3-4 marks): tries to say what some of the language does, with a few suitable quotations and some subject terms, usually used correctly.',
  'Level 1 (1-2 marks): says something basic about a word or two, or names a technique without saying what it does.',
  'An answer that writes only about lines outside the ones the question names stays in Level 1 or Level 2. Structure belongs to Question 3, so keep to language here.',
]

const Q3_LEVELS = [
  'Level 4 (7-8 marks): analyses how the shape of the whole source builds the effect the question names, with sharply chosen examples and confident, precise terms.',
  `Level 3 (5-6 marks): says plainly how several of the writer's structural choices build the effect, with suitable examples and correct terms.`,
  'Level 2 (3-4 marks): tries to say what some structural features do, such as a change of focus, with a few examples.',
  'Level 1 (1-2 marks): notices one or two basic things about the order of the source, often by retelling what happens.',
  'A strong answer covers the whole source, from the opening to the end, and links every point to the effect the question names.',
]

const Q4_LEVELS = [
  `Level 4 (16-20 marks): argues a confident, thoughtful case about the view, showing in depth how the writer's methods work on the reader, with sharply chosen evidence throughout.`,
  `Level 3 (11-15 marks): makes a sound, well-supported judgement, showing how the writer's ideas and methods shape the reader's response, with plenty of relevant evidence.`,
  `Level 2 (6-10 marks): starts to weigh up the view, with some comment on the writer's methods and their effect, backed by a few suitable references.`,
  'Level 1 (1-5 marks): gives a basic opinion on the view, with a little about what happens and a reference or two.',
  'Agreeing, disagreeing or doing some of both can all reach Level 4. The evidence should come from the part of the source the question names.',
]

const WRITING_LEVELS = [
  'Content and organisation, 24 marks. Level 4 (19-24): grips the reader from start to finish, with a confident, original voice, ambitious and exact vocabulary, and a structure planned for the greatest effect.',
  'Level 3 (13-18): keeps the reader interested throughout; the tone suits the task and the reader, vocabulary and techniques are chosen for effect, and well-linked paragraphs give the piece a clear shape.',
  'Level 2 (7-12): holds the reader in places; some words are chosen deliberately, there is some attempt at a suitable tone, and paragraphs are starting to organise the piece.',
  'Level 1 (1-6): gets a few simple ideas across, with plain vocabulary and little sense of shape.',
  'Writing that does not do what the task asks cannot score more than 12 of these 24 marks.',
  'Technical accuracy, 16 marks. Level 4 (13-16): every sentence starts and ends in the right place, every kind of punctuation is used with skill, even adventurous words are spelt right, and long sentences stay clear and correct.',
  'Level 3 (9-12): sentences nearly always start and end in the right place, most punctuation is used well, most words are spelt right, hard ones included, and sentence types are varied on purpose.',
  'Level 2 (5-8): sentences usually start and end in the right place, several kinds of punctuation are tried, and there is some variety in sentences and words.',
  'Level 1 (1-4): a few sentences start and end in the right place, and sentences and vocabulary are mostly simple.',
]

// ─── Papers ──────────────────────────────────────────────────────────────────

export const aqaP1A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1 - Gothic Horror
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-01',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-01-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_01_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-01-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Read the first paragraph of the source again, from "The house had been waiting." to "nobody had thought to halt."\n\n${Q1_PROMPT}\n\n1.1 Where is Elise standing?\nA) Just inside the front door\nB) At the bottom of the drive\nC) At the top of the gravel drive\n\n1.2 What is Elise's suitcase doing?\nA) Leaning to one side\nB) Standing upright on the gravel\nC) Being carried by a porter\n\n1.3 What does the paragraph tell you about the roof?\nA) It has recently been repaired.\nB) It has fallen in completely.\nC) It droops because it is so old.\n\n1.4 How much of the house is covered in ivy?\nA) All of one part of it\nB) The entire building\nC) None of it, because it has been cut back`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 B: she "stood at the foot of the gravel drive".\n1.2 A: her suitcase was "listing sideways in the mud".\n1.3 C: the roof was "sagging under the weight of decades".\n1.4 A: "Ivy had claimed the east wing entirely".',
              'Grade 6-7':
                '1.1 B. She "stood at the foot of the gravel drive", which is its bottom. C borrows the words "gravel drive" but puts her at the top, and she has not yet gone inside (A).\n1.2 A. "Listing sideways" means leaning to one side, so the suitcase is not upright (B), and it is "in the mud" beside her, not being carried (C).\n1.3 C. The roof is "sagging under the weight of decades", bending down with age. It has not fallen in (B), and nothing suggests it has been mended (A).\n1.4 A. The ivy "had claimed the east wing entirely": all of one wing, but not the whole building (B, which echoes the word "entirely"). It is "a slow green invasion that nobody had thought to halt", so it has not been cut back (C).',
            },
            markScheme: [
              '1.1 B: Elise "stood at the foot of the gravel drive", at its bottom.',
              '1.2 A: the suitcase is "listing sideways", leaning to one side.',
              '1.3 C: the roof is "sagging under the weight of decades", bending with age.',
              '1.4 A: the ivy "had claimed the east wing entirely", one part of the house, not the whole.',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-01-q2',
            questionNumber: 2,
            questionText: `Read the third paragraph of the source again, from "The front door was unlocked." to "frozen at twenty past three."\n\nHow does the writer use language in this paragraph to make the inside of the house seem unsettling?\n\n${Q2_PROMPT}`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer makes the house seem alive from the moment the door opens, with the simile "like a long-held breath being released". It sounds as if the house has been holding its breath while it waited for Elise, which is unsettling. The hallway "stretched away into darkness", so she cannot see how far it goes or what is in it. The cold is "not the ordinary cold of an unheated building" but "something older", so the writer suggests there is something unnatural about the house. Finally the clock is "frozen at twenty past three". The word "frozen" makes it sound as though time has stopped in the house, and the reader wonders what happened at that moment.',
              'Grade 6-7': `From its first sound the house behaves like a living thing. The door opens "with a sound like a long-held breath being released": the simile suggests the house has been holding its breath, waiting for Elise, so her arrival seems expected rather than chosen. Inside, the verb "stretched" makes the hallway seem to reach away from her into "darkness", as if the space has no end she can see. The cold is described by what it is not, "not the ordinary cold of an unheated building", which rules out the sensible explanation before the writer offers a stranger one. The repetition of "something" in "something older, something that seemed to come from the stones themselves" is deliberately vague: the writer refuses to name what the cold is, and that vagueness is more unsettling than any name. The paragraph ends with two shorter, plainer sentences about the clock: its pendulum is "still", and "Its face was frozen at twenty past three." After the long sentence about the cold, they bring everything to a halt, and the exact time suggests that something happened at that moment which the house has never moved on from.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'The simile "like a long-held breath being released" makes the house seem alive, as though it has been waiting for Elise.',
                'The verb "stretched" and the noun "darkness" make the hallway seem endless and impossible to see into.',
                'The cold is defined by what it is not, "not the ordinary cold of an unheated building", which rules out a sensible explanation.',
                'The repeated "something" in "something older, something that seemed to come from the stones themselves" leaves the cause vague and unnatural.',
                'The shorter sentences about the clock, "its pendulum still" and "frozen at twenty past three", bring the paragraph to a halt and suggest that time has stopped in the house.',
              ],
            },
          },
          {
            id: 'aqa-p1-01-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first sentence to its last.\n\nHow has the writer structured the source to create a growing sense of threat?\n\nYou might write about how the source opens, the points where its focus moves to something new, and how it ends, and about any other structural choices that add to the threat, such as changes of pace or the length of sentences and paragraphs.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'At the start the writer shows the house from the outside, as Elise stands "at the foot of the gravel drive", and the first sentence, "The house had been waiting.", already makes the house sound threatening, as if it wanted her to come. The second paragraph moves back in time to the great-aunt who lived alone there "for forty-seven years", which delays Elise going in and makes the reader wonder what happened in the house. In the third paragraph the focus moves inside, to the dark hallway and the stopped clock, so the setting becomes closer and stranger. Then the writer adds the first sign that someone else is there: "a door closed softly". After this the sentences become short and the pace slows, so the reader waits with Elise. The source ends with a creaking floorboard and the idea that someone was "standing very close", so the threat is nearer than ever and is never explained. Ending there makes the reader feel the danger is still with her.',
              'Grade 6-7': `The writer structures the source as a journey from outside the house to a presence that seems to have been standing very close to Elise, so that the threat moves steadily closer. The opening sentence is short and sets the threat up at once: "The house had been waiting." From the start the house is given a purpose, and the reader, like Elise, sees it from a distance, "at the foot of the gravel drive". The second paragraph then halts the journey to look back over the great-aunt's "forty-seven years" alone. The phrase is repeated as a sentence of its own, "Forty-seven years.", and the pause lets the silence of those years build before Elise steps inside. The third paragraph crosses the threshold with another short sentence, "The front door was unlocked.", and narrows the focus to the hallway, the cold and a clock "frozen at twenty past three", details that suggest something is wrong without saying what. The turning point comes when "a door closed softly" somewhere above her: for the first time the threat seems to belong to someone, not just to the house. From here the writer slows the pace with very short sentences, "She stood very still, listening. The house listened back.", so the reader holds still with her. Her single word of speech, "Hello?", gets no answer, and the source ends on the creak of a floorboard, "as though someone who had been standing very close had just taken a single step away". The threat ends at its closest point, and because nothing is explained, the reader is left with it.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'Opening: the short first sentence, "The house had been waiting.", gives the house a purpose at once, while Elise sees it from a distance, "at the foot of the gravel drive".',
                `The second paragraph pauses the journey for the great-aunt's "forty-seven years" alone, and the repeated "Forty-seven years." delays the moment Elise goes in.`,
                'The third paragraph crosses the threshold ("The front door was unlocked.") and narrows the focus to the dark hallway, the cold and the stopped clock.',
                'Turning point: "a door closed softly" above her, the first sign that the threat may be someone, not only the house.',
                'The very short sentences "She stood very still, listening. The house listened back." slow the pace, so the reader waits with her.',
                'Ending: her "Hello?" gets no answer, and the source stops on a creak, as though someone "had been standing very close", the threat at its nearest and still unexplained.',
                'Overall: from outside to inside and from distance to closeness, so the threat moves steadily nearer.',
              ],
            },
          },
          {
            id: 'aqa-p1-01-q4',
            questionNumber: 4,
            questionText: `This question is about the last two paragraphs of the source, from "Elise set down her suitcase." to the end.\n\nOne reader said: "In this part of the source, the house itself becomes the threat. It seems to be alive and watching Elise, and that is what makes these paragraphs so frightening."\n\n${Q4_PROMPT}`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I mostly agree with this view. The writer makes the house seem alive with the sentence "The house listened back.", which sounds as if the house can hear Elise and is paying attention to her. Her voice sounds "thin and foolish in the vast space", so the house seems huge and powerful compared with her. However, I do not completely agree that the house itself is the threat. A door "closed softly" upstairs, and at the end the floorboard creaks "as though someone who had been standing very close had just taken a single step away". The word "someone" suggests a person or a ghost inside the house, not the building. So I think the writer leaves it unclear whether the threat is the house or something hiding in it, and that uncertainty is what makes these paragraphs frightening.',
              'Grade 6-7': `I agree with the view up to a point, but I think the writer frightens the reader most by refusing to say whether the threat is the house or something in it. There is strong evidence that the house is alive. The short sentence "The house listened back." gives the building the human act of listening, and "back" turns it into a reply, as though Elise and the house are aware of each other. Its size works against her too: her voice sounds "thin and foolish in the vast space", and the adjectives make her seem small and out of place, as if the house is judging her. However, the other sounds in this part point to something that moves. A door upstairs "closed softly", and "softly" suggests a careful hand rather than a draught, while "on the first floor or perhaps the second" shows that Elise cannot place it. The final comparison goes further: the creak comes "as though someone who had been standing very close had just taken a single step away". The pronoun "someone" gives the presence a body, and "very close" puts it very near her, which is more frightening than a building, because a person can follow you. Yet the writer keeps it a comparison, "as though", so the reader cannot be sure there is anyone there at all. Elise "stood very still, listening", and the reader is left as uncertain as she is. So the house is a character in this part, but the deeper fear comes from not knowing what shares it with her.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'For the view: "The house listened back." gives the building a human action, and "back" makes it a reply to Elise.',
                'For the view: her voice is "thin and foolish in the vast space", so the house seems to dwarf and even judge her.',
                'Against: the door that "closed softly" upstairs and a creak that sounds as though "someone who had been standing very close" has stepped away point to a presence inside the house rather than the house itself.',
                'Both: "as though" keeps that presence a comparison, so the reader cannot be sure anyone is there; the fear comes from not knowing.',
                'Methods: short sentences slow the pace, the unanswered "Hello?" leaves her alone, and the source ends at the moment of greatest closeness.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-01-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-01-q5',
            questionNumber: 5,
            questionText: `Your school library is making a booklet of new writing for students in their first year at secondary school, to encourage them to read for pleasure. Its theme is places with a past, and your piece will be one of the entries.\n\nChoose ONE of these two tasks.\n\nEither:\nWrite a description of an old house at night. ${Q5_PICTURE_PROMPT} an old, empty house at night, with a single light burning in an upstairs window. ${Q5_PICTURE_USE_PROMPT}\n\nOr:\nWrite the opening of a story about a place where something has been hidden for a long time.\n\n${Q5_MARKS}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that suits its young readers. A description picks out several details of the house at night, such as its dark windows and the single lit one, and uses the senses and a few comparisons to build an eerie mood. A story opening introduces a character and a place and hints that something is hidden there. Paragraphs organise the ideas, some vocabulary is chosen for effect, and most spelling and punctuation is accurate, with some variety of sentences.',
              'Grade 6-7': `This answer takes the first task: the description of an old house at night.\n\nAt the end of Wren Lane, where the last streetlamp gives up, there is a pair of iron gates that no longer close. Beyond them, at the top of a long slope of uncut grass, stands Hollin House. Tonight it is only a shape against the sky: three tall chimneys, a roof that dips in the middle like an old horse's back, and a row of windows as dark as puddles.\n\nOnly one of them is lit.\n\nI push the gate, and it groans on its hinges as if I have woken it from a long sleep. The path is almost lost under moss, soft and springy beneath my trainers. The cold air smells of wet leaves and of woodsmoke drifting up from the village below. Somewhere in the long grass a cricket is still ticking, slow and steady, like a clock that nobody remembers to wind.\n\nUp close, the house shows its age. Above the front door a date has been carved into the stone, 1868, and the numbers have been softened by more than a century and a half of rain. The paint on the door has peeled into curls like the pages of an ancient book. But somebody loved this place once. There is a boot scraper shaped like a hedgehog on the step, and on the wooden post of the porch a ladder of little notches records how tall a child grew, year after year. Beside the highest notch, scratched in careful capitals, is a name: ELLEN, 1931.\n\nThen I look up at the light.\n\nIt glows a soft, buttery yellow, more like a candle than a bulb, and it does not flicker. A moth is bumping against the glass, again and again, as though it has an urgent message for whoever is inside. The curtains have been drawn back. I can just make out the corner of a room, wallpaper with faded roses climbing up it, and the dark edge of a tall, old-fashioned wardrobe. Nothing moves.\n\nNobody has lived here for fifty years. Everyone in the village says so.\n\nA breeze wanders through the garden, and the whole house seems to answer it. A loose slate taps on the roof. A pipe knocks twice, somewhere deep inside the walls. The weathervane turns with a thin, rusty squeal, as if it is trying to remember which way the wind used to blow.\n\nI stand at the bottom of the steps for a long time, my breath making small clouds in the dark. I could knock. I do not. Instead I walk back down the slope, and at the gate I turn round for one last look. Hollin House has sunk back into the night, all chimneys and shadows, a house that has finished with people.\n\nAll except for one window, where the light is still burning, patient and golden, as if someone up there is waiting for Ellen to come home.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'The readers are students in their first year at secondary school: the piece can be eerie, but it should suit them.',
                'The photograph is there for ideas only: a description of a different old house, or of one part of a house, is fine.',
                'A story opening needs a strong start and a reason to read on; it does not need to reach an ending.',
                'Like the source, a piece might move from outside to inside, or hold back what is hidden until late on.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2 - War Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-02',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-02-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_02_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-02-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Read the first paragraph of the source again, from "The shelling had stopped an hour ago" to "where the smoke still hung."\n\n${Q1_PROMPT}\n\n1.1 When did the shelling stop?\nA) A few minutes earlier\nB) The day before\nC) About sixty minutes earlier\n\n1.2 What does Amir think about the silence?\nA) He is sure the fighting is over for good.\nB) He expects the noise to start again.\nC) He trusts it completely.\n\n1.3 What can Amir feel against his shoulder blades?\nA) Cold, damp soil\nB) Warm, dry sand\nC) Broken timber\n\n1.4 Why is part of the sky black?\nA) Night has fallen.\nB) A storm is coming.\nC) Smoke has not yet cleared from it.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 C: "The shelling had stopped an hour ago".\n1.2 B: he "did not trust the silence", which was "just noise taking a breath".\n1.3 A: he felt "the wet earth cold against his shoulder blades".\n1.4 C: the sky was "darkening to black where the smoke still hung".',
              'Grade 6-7': `1.1 C. "An hour ago" is about sixty minutes: not a few minutes (A) or a day (B).\n1.2 B. He "did not trust the silence" and thinks of it as "just noise taking a breath", a pause before more noise. He is not sure the fighting is over (A), and C is the trap: it borrows the source's word "trust" but says the opposite.\n1.3 A. He feels "the wet earth cold against his shoulder blades": cold, damp soil, not warm sand (B). The "broken timber" (C) is "above his head".\n1.4 C. The sky darkens "to black where the smoke still hung", so the smoke has not cleared. The paragraph says nothing of night (A) or a storm (B).`,
            },
            markScheme: [
              '1.1 C: the shelling "had stopped an hour ago".',
              '1.2 B: he "did not trust the silence", which was "just noise taking a breath".',
              '1.3 A: he feels "the wet earth cold against his shoulder blades".',
              '1.4 C: the sky darkens "to black where the smoke still hung".',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-02-q2',
            questionNumber: 2,
            questionText: `Read again the part of the source from "Beside him, Private Lowell was writing a letter." to "Every time I close my eyes I see Mitchell."\n\nHow does the writer use language in these lines to show the effect the war is having on Lowell?\n\n${Q2_PROMPT}`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows that Lowell is very frightened. His hands are "shaking so badly that the pencil kept slipping", which shows he cannot control his own body. The simile "like the readings of a seismograph" compares his writing to the lines a machine draws during an earthquake, which suggests that something huge is shaking him inside. He has been writing the same letter for three days and has still only written "Dear Mum", which shows he cannot find the words to tell his mother what is happening. His one-word reply, "Can\'t.", shows he is too tired and upset to say more, and the fact that he sees Mitchell "Every time I close my eyes" shows that he cannot escape what he has seen.',
              'Grade 6-7': `The writer shows the war through what it has done to Lowell's body and to his words. The intensifier in "shaking so badly" and the verb "kept slipping" show a loss of control that goes on and on, and the simile "like the readings of a seismograph" turns his handwriting into the record of an earthquake: the tremor in his hand stands for a far greater upheaval inside him. Two short sentences follow, each beginning "He had". He has spent "three days" on the same letter and has not got past its first two words, "Dear Mum". The repeated opening makes the reader feel how stuck he is, and the gap between the greeting and everything he cannot write suggests that what he has been through is beyond words, even to his mother. In the dialogue his language shrinks further. His reply, "Can't.", is a single word, with the subject and the main verb left out, as though he has no energy for more, and he "did not look up". His last sentence explains why he cannot sleep: "Every time I close my eyes I see Mitchell." Ending on the name gives it weight, and the reader understands that the war follows Lowell even into rest.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'The intensifier in "shaking so badly" and the verb "kept slipping" show that Lowell has lost control of his body.',
                'The simile "like the readings of a seismograph" links his trembling hand to an earthquake, suggesting a huge upheaval inside him.',
                'The two sentences beginning "He had" and the detail "three days" make his stuckness felt; he has not got past "Dear Mum", so he cannot put what he has seen into words.',
                `The one-word reply "Can't." and "did not look up" show exhaustion and withdrawal.`,
                'Ending his last sentence on the name "Mitchell" shows that what he has seen stays with him, even when he closes his eyes.',
              ],
            },
          },
          {
            id: 'aqa-p1-02-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first sentence to its last.\n\nHow has the writer structured the source to create a sense that the soldiers are trapped?\n\nYou might write about how the source opens, the points where its focus moves to something new, and how it ends, and about any other structural choices that make the soldiers seem trapped, such as contrasts or changes of pace.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The source begins in the trench, with Amir pressed "deeper into the trench wall" and looking at the sky through broken timber, so straight away the soldiers seem shut in. The focus then moves to Lowell, who has been stuck on the same letter for three days, so even his thoughts seem trapped. In the short conversation Lowell says he cannot sleep because he keeps seeing Mitchell, so there is no escape even in sleep. Next the writer shows the ground outside the trench. Mitchell has died out there, and "Nobody had gone to retrieve him" because of the snipers, so leaving the trench would be deadly. Then the radio moves the focus to someone far away "making decisions about their lives", which shows the soldiers cannot choose what happens to them. At the end the order "We move at 0400" is given, and the source finishes in the same silence it began with, but now the silence "tightened around them like a fist", as if it is closing in on them.',
              'Grade 6-7': `The writer structures the source so that every direction the soldiers might look turns out to be closed. The opening puts Amir in the narrowest space possible: he presses himself "deeper into the trench wall" and sees the sky only "through the lattice of broken timber above his head", a frame that works almost like the bars of a cage. Even the silence offers no release, since it is only "noise taking a breath". The focus then narrows to Lowell, who is trapped in a different way: he has spent "three days" on a letter that has not got past its greeting, and the brief exchange that follows ("You should sleep," and "Can't.") shows that sleep is closed to him too. The paragraph beginning "Amir said nothing" widens the view beyond the trench, but the wider space is worse. Mitchell, who has died, is "twenty yards ahead", near enough to see and too dangerous to reach, because the ground is "a killing field". The next shift goes much further, to "a room with electric light and hot tea" far behind the lines, and the contrast shows another kind of trap: the soldiers' lives are decided by people who do not share their danger. The final paragraph brings those decisions down to one order, "We move at 0400", in three short sentences. Lowell's pencil stops, and the silence of the opening returns: "The silence tightened around them like a fist." The circular structure leaves the soldiers where they began, but with the space around them closing in.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'Opening: Amir pressed "deeper into the trench wall" and the sky seen "through the lattice of broken timber" make a confined, cage-like space; even the silence is no relief.',
                'The focus narrows to Lowell, stuck on one letter for "three days" and unable to sleep: trapped in his own mind.',
                'The view widens beyond the trench, but Mitchell, "twenty yards ahead", cannot safely be reached across "a killing field", so the open ground is a trap too.',
                'The shift to "a room with electric light and hot tea" far behind the lines contrasts the soldiers with the people who decide what happens to them.',
                `Ending: the order "We move at 0400", three short sentences, and the return of the opening's silence, now closing in "like a fist": a circular structure that leaves them where they began.`,
              ],
            },
          },
          {
            id: 'aqa-p1-02-q4',
            questionNumber: 4,
            questionText: `This question is about the last three paragraphs of the source, from "Amir said nothing." to the end.\n\nOne reader said: "This part is not really about the danger the soldiers are in. It is about how the war is hurting them inside, in their feelings and in their sense of what is fair."\n\n${Q4_PROMPT}`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I partly agree. The danger is clearly there: the ground beyond the trench is "a killing field", and there are snipers on the ridge, so the soldiers could be hit if they move. The order "We move at 0400" also tells us they are about to face more danger. However, the writer spends more time on how the soldiers feel. Nobody has gone to bring Mitchell back, and his hand is described "reaching upward as though asking to be pulled free", which makes the reader feel the soldiers' guilt and sadness. Amir feels "rage", but "not at the enemy": he is angry at the distance between the people who give the orders and the soldiers who have to carry them out, which shows he thinks it is unfair. When "Lowell's pencil stopped", we see how frightened Lowell is. So I agree that this part is mostly about the damage inside the soldiers, but the danger is what causes that damage.`,
              'Grade 6-7': `I agree with much of this view, but I would argue that the writer makes the danger and the inner damage impossible to separate, because the danger is what does the damage. The physical threat is real and precise. Mitchell is "twenty yards ahead", the ground is "a killing field", and the snipers "had the patience of saints", a bitterly ironic phrase that gives the men waiting to fire on them the patience of holy people. Yet the writer turns each of these facts towards what the soldiers feel. The image of the hand "reaching upward as though asking to be pulled free" makes Mitchell seem to plead for help, and the short, flat sentence "Nobody had gone to retrieve him" sounds like a plain report while carrying the guilt of everyone in the trench. The next paragraph moves from grief to a sense of injustice. The contrast with "a room with electric light and hot tea" shows how far the decision-makers are from the danger, and Amir's "familiar rage" is aimed "not at the enemy, but at the distance between the people who gave orders and the people who carried them out". The word "familiar" suggests he has felt this anger many times before. The ending brings both together. The order "We move at 0400" points to the greatest danger in the source, but the writer shows it only through its effect: "Lowell's pencil stopped", and "The silence tightened around them like a fist." So the view is right that the writer's focus is the soldiers' minds, but wrong to say this part is not about the danger, because every feeling in it comes from the danger.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'Against the view: the danger is real, with Mitchell "twenty yards ahead" across "a killing field", and the order "We move at 0400" brings greater danger still.',
                'For the view: the hand "reaching upward as though asking to be pulled free" and "Nobody had gone to retrieve him" turn the danger into guilt and grief.',
                `For the view: Amir's "familiar rage" is aimed "not at the enemy" but at the distance between those who give orders and those who carry them out, a sense of injustice.`,
                `Both: the ending shows the danger through its effect on the men ("Lowell's pencil stopped"; the silence "like a fist").`,
                'Methods: the irony of "the patience of saints", the contrast between the trench and "a room with electric light and hot tea", and the short sentences at the end.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-02-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-02-q5',
            questionNumber: 5,
            questionText: `A local radio station is broadcasting short pieces by young writers on weekday evenings, read aloud to listeners of all ages. You have been invited to send one.\n\nChoose ONE of these two tasks.\n\nEither:\nWrite a description of a lonely road. ${Q5_PICTURE_PROMPT} a long, empty road stretching through a bleak landscape under a heavy, grey sky. ${Q5_PICTURE_USE_PROMPT}\n\nOr:\nWrite the opening of a story about someone who has to make a difficult decision.\n\n${Q5_MARKS}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that works when it is heard. A description uses details of the road, the landscape and the sky, with some comparisons and sensory language, to create a bleak mood. A story opening introduces a character and the decision they face. Paragraphs organise the ideas, some words are chosen for effect, and spelling and punctuation are mostly accurate, with some variety of sentences.',
              'Grade 6-7': `This answer takes the second task: the opening of a story about someone who has to make a difficult decision.\n\nThe last train to Kelby leaves at nine fifteen. Everybody in our town knows that, the way they know that the church clock runs two minutes fast and the chip shop shuts on Mondays. Miss the nine fifteen, and you are stuck until morning.\n\nAt twelve minutes past nine, I was standing on platform two with my ticket in my hand.\n\nI had spent the day at my aunt's, and my head was still full of her kitchen: the radio murmuring, the smell of burnt toast, the cat that sleeps in the fruit bowl. Now the station was nearly empty. A pigeon paced up and down the edge of the platform like a guard on duty. The lights buzzed. Far down the line, two pale eyes opened in the dark, and the rails began to hum.\n\nThat was when I saw the old man.\n\nHe was sitting on the bench by the ticket machine, turning his coat pockets inside out, one after another, as if he could not believe they were empty. His fingers trembled. A paper bag of oranges had split at his feet, and one had rolled almost to the yellow line.\n\n"Are you all right?" I asked.\n\nHe looked up, and his face was so lost that I almost wished I had kept walking. "My wallet," he said. "My ticket. They were here. My daughter is meeting me at Kelby, and she'll be waiting in the car park, and I won't be on the train."\n\nThe train was pulling in now, loud and bright, its brakes squealing like a kettle left on the hob. The doors slid open with a sigh. Warm air rolled out, and with it the smell of coffee and wet umbrellas.\n\nI looked down at my ticket. A single, paid for with the last of my birthday money. The guard on this line is Mr Pike, and Mr Pike does not let anyone travel without a ticket. Not children. Not old men. Not anybody.\n\nIf I gave it away, I would be the one left behind. I would have to ring Mum and ask her to drive for an hour in the dark, the night before my first exam, and I could already hear the long silence she would leave before she said yes.\n\nIf I kept it, I would sit in a warm seat for forty minutes, and somewhere behind me an old man would watch the red lights of the train shrink to nothing.\n\n"Doors closing," said the voice from the speaker. "Please stand clear."\n\nThirty seconds. The old man was gathering his oranges, one by one, very slowly, as though it no longer mattered whether he caught the train at all. Twenty seconds. Mr Pike leaned out of the last door and looked straight at me, his whistle already at his lips.\n\nI took a deep breath, and I held out my hand.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'The piece will be heard on the radio, not read: a clear shape and sentences that sound well aloud help the listener.',
                'The photograph is there for ideas only: the description does not have to follow it exactly.',
                'The decision in a story opening can be large or small, and the opening can stop before it is made.',
                'Like the source, a piece might use silence and waiting to build tension.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 3 - Psychological Thriller
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-03',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-03-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_03_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-03-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Read the first two paragraphs of the source again, from "Catherine noticed the woman for the first time" to "like ice water."\n\n${Q1_PROMPT}\n\n1.1 Where was the woman sitting?\nA) In a café facing Catherine's building\nB) In the office next to Catherine's\nC) At Catherine's desk\n\n1.2 How was the woman watching Catherine's building?\nA) By glancing at it every so often\nB) Through a pair of binoculars\nC) Steadily, as if she meant to keep on watching\n\n1.3 What did Catherine tell herself?\nA) That she should call the police\nB) That there was nothing to worry about\nC) That she had met the woman before\n\n1.4 What did Catherine feel spreading across her scalp?\nA) A warm glow\nB) A cold, tingling feeling\nC) Drops of ice water`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 A: "She was sitting in the café opposite".\n1.2 C: she watched "with the focused stillness of someone who had been doing so for a long time and intended to continue".\n1.3 B: "Catherine told herself it meant nothing."\n1.4 B: "the cold, prickling sensation that was spreading across her scalp".',
              'Grade 6-7': `1.1 A. She sat "in the café opposite", the one Catherine "could see from her desk". C borrows the word "desk", but the woman is not there, and no office next door is mentioned (B).\n1.2 C. She watched "with the focused stillness of someone who had been doing so for a long time and intended to continue". A is the trap: it uses the source's word, but the source says "Not glancing at it". No binoculars are mentioned (B).\n1.3 B. "Catherine told herself it meant nothing", so she was telling herself not to worry. The paragraphs mention neither the police (A) nor any earlier meeting (C).\n1.4 B. The feeling was a "cold, prickling sensation". C is the trap: the sensation spread "like ice water", a comparison, so there were no real drops of water.`,
            },
            markScheme: [
              `1.1 A: she was "sitting in the café opposite", across from Catherine's building.`,
              '1.2 C: she watched "with the focused stillness of someone who had been doing so for a long time and intended to continue".',
              '1.3 B: "Catherine told herself it meant nothing."',
              '1.4 B: a "cold, prickling sensation" spread across her scalp; "like ice water" is a comparison.',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-03-q2',
            questionNumber: 2,
            questionText: `Read the fourth paragraph of the source again, from "On Wednesday, the woman was back." to "against her sternum."\n\nHow does the writer use language in this paragraph to describe the woman and the way she makes Catherine feel?\n\n${Q2_PROMPT}`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses two very short fragments with no verb, "Same table." and "Same posture", to show that the woman is doing exactly what she did the day before, which is strange and makes her seem planned and determined. She holds a coffee cup "she never appeared to drink from", so she is not really there for coffee, which makes the reader suspicious. Her hair is "pulled back severely", and the word "severely" makes her seem strict and cold. Catherine cannot see her face clearly, so the woman stays a mystery. The simile "like a finger pressing steadily against her sternum" shows that Catherine can actually feel the woman watching her, as though she is being pushed in the chest.',
              'Grade 6-7': `The writer makes the woman unsettling by giving her a pattern and denying her a face. The fragments "Same table. Same posture" read almost like notes in a log, and their repetition tells the reader this is no accident: the woman has come back to do exactly what she did before. The detail of "both hands wrapped around a coffee cup she never appeared to drink from" is quietly sinister, because the cup, which should be her reason for being in the café, is only a prop. The adverb "severely" in "pulled back severely" gives her appearance a hard, controlled quality, while the face Catherine "could not quite see clearly from this distance" keeps her identity just out of reach. The paragraph then turns on "But": what Catherine cannot see, she can feel. The gaze "had a weight to it, a physical pressure", and the simile "like a finger pressing steadily against her sternum" turns looking into touching. The adverb "steadily" suggests the pressure does not ease, and the exact word "sternum", the bone at the centre of the chest, makes the watching feel close and personal, as though the woman can reach Catherine across the street.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'The fragments "Same table. Same posture" repeat like entries in a log: her return is deliberate, not chance.',
                'The cup "she never appeared to drink from" is only a prop, which makes her purpose sinister.',
                'The adverb in "pulled back severely" makes her look hard and controlled, and her face, which Catherine "could not quite see clearly", stays hidden.',
                'The turn at "But" moves from sight to feeling: the gaze "had a weight to it, a physical pressure".',
                'The simile "like a finger pressing steadily against her sternum" turns looking into touch, and "steadily" suggests the pressure never lets up.',
              ],
            },
          },
          {
            id: 'aqa-p1-03-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first sentence to its last.\n\nHow has the writer structured the source to create a sense of mystery?\n\nYou might write about how the source opens, the points where its focus moves to something new, and how it ends, and about any other structural choices that add to the mystery, such as what the writer holds back and when it is revealed.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer opens with Catherine noticing the woman "for the first time on a Tuesday", which tells the reader that this will happen again and makes us want to know who the woman is. The third paragraph is only two sentences long and ends with "the woman was gone", which adds to the mystery, because she disappears without explanation. The story is then organised by days, Tuesday, Wednesday and Thursday, so the reader sees a pattern building. On Wednesday Catherine cannot see the woman's face clearly, so her identity is kept hidden. On Thursday the focus changes when Catherine goes to the café herself and sits at "the woman's table". The writer saves the biggest surprise for the last line, a paragraph on its own: she sees a figure in her office window and realises "she was looking at herself". Instead of solving the mystery, the ending makes it deeper, because the reader does not know how this can be possible.`,
              'Grade 6-7': `The writer builds the mystery by controlling what the reader is allowed to know, and when. The opening sentence, "Catherine noticed the woman for the first time on a Tuesday", promises a pattern before it happens, and the paragraph then dwells on how the woman watches, narrowing from "Not glancing at it" to "Watching it". The reader learns how she looks but never why, and that gap is the first mystery. Catherine's attempt to dismiss it in the second paragraph ("Catherine told herself it meant nothing") only draws attention to her unease. The two-sentence third paragraph ends on the woman's disappearance, "the woman was gone", a pause that makes her absence as strange as her presence. The days then give the source its shape. "On Wednesday, the woman was back" confirms the pattern, yet the writer withholds the one detail that might explain it, a face Catherine "could not quite see clearly from this distance". "On Thursday" marks the turning point, as Catherine reverses the direction of looking and crosses the street, expecting the spell to "break". Instead the focus turns back across the street with her own gaze: the exact "Fourth floor, third window from the left" slows the moment down, and "a figure" stays unnamed until the last sentence, set apart as a paragraph of its own: "It took her three full seconds to understand that she was looking at herself." The ending answers one question and raises a stranger one, so the source closes on a deeper mystery than the one it began with.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'Opening: "for the first time on a Tuesday" promises a pattern, and the focus on how the woman watches, never why, sets up the mystery.',
                `Catherine's attempt to dismiss it ("Catherine told herself it meant nothing") draws attention to her unease.`,
                'The brief third paragraph ends on "the woman was gone": her absence is as strange as her presence.',
                `The days give the source its shape; Wednesday confirms the pattern while the woman's face stays hidden.`,
                'Turning point: "On Thursday" Catherine reverses the direction of looking and crosses the street.',
                'Ending: the exact "Fourth floor, third window from the left" delays the reveal, and the final one-sentence paragraph turns the mystery back on Catherine herself, so it deepens instead of being solved.',
              ],
            },
          },
          {
            id: 'aqa-p1-03-q4',
            questionNumber: 4,
            questionText: `This question is about the last three paragraphs of the source, from "On Thursday, Catherine left the office at lunch" to the end.\n\nOne reader said: "In this part Catherine tries to take control, but the ending shows she was never in control at all. The reader finishes as confused and unsettled as she is."\n\n${Q4_PROMPT}`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I agree with the first part of this view. Catherine crosses the street because she wants to take control: "She would sit in the café herself." The repeated "would" shows she has a plan and feels sure of herself, and she thinks the "spell would break" if she faces it. But the ending turns this round. When she sits at "the woman's table" and looks at her own office, she sees a figure in her window, and "It took her three full seconds to understand that she was looking at herself." This is impossible, so it shows she has lost control of what is real. However, I am not sure the reader is only confused. The details are very clear, such as "Fourth floor, third window from the left", so we know exactly what she sees. I think the reader is shocked and curious rather than completely confused, because we want to find out what is happening.`,
              'Grade 6-7': `I agree that this part takes away Catherine's sense of control, but I would question the second half of the view, because the writer is very precise about what Catherine sees, and that precision unsettles the reader in a different way from confusion. The part opens with action, as Catherine "left the office at lunch and crossed the street", and her plan is set out in sentences built on the modal verb "would": "She would sit in the café herself. She would order a coffee and she would look at the woman and the spell would break". The repeated "and" runs her intentions together as though success is certain, and her reason, "because spells always broke when you walked toward them instead of away", sounds like a rule from a fairy tale, which hints that her confidence rests on something unreal. The writer then lowers her guard and the reader's: the café "was warm and smelled of cinnamon", comforting, ordinary details. The first crack appears when she realises she has taken "the woman's table" and is looking at the view the woman looked at. The reveal is delayed by exact directions, "Fourth floor, third window from the left", and by the unnamed "figure" looking down "with an expression she could not read". The final sentence stands alone as a paragraph: "It took her three full seconds to understand that she was looking at herself." So Catherine has lost control, as the view says, but the reader is not simply confused. We understand exactly what she sees; what we cannot understand is how it is possible, and that question, rather than confusion, is what stays with us.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'For the view: her plan, built on "would" ("She would sit in the café herself."), shows a confidence that the ending overturns.',
                'For the view: her reasoning, "spells always broke when you walked toward them instead of away", rests on something unreal.',
                `For the view: the ordinary comfort of the café ("warm and smelled of cinnamon") makes the shock greater, and sitting at "the woman's table" puts her in the watcher's place.`,
                'Against, or both: the exact "Fourth floor, third window from the left" and "three full seconds" make the moment clear rather than confusing; the reader is left asking how, not what.',
                'Methods: the delayed reveal, the unnamed "figure", and the final sentence set apart as a paragraph of its own.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-03-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-03-q5',
            questionNumber: 5,
            questionText: `A magazine for readers aged 14 to 18 prints one new short piece in every issue. Next month's theme is things that are not what they seem, and the editor has asked for entries.\n\nChoose ONE of these two tasks.\n\nEither:\nWrite a description of a street at night. ${Q5_PICTURE_PROMPT} a person looking at their own reflection in a shop window at night, with the street behind them dark and empty. ${Q5_PICTURE_USE_PROMPT}\n\nOr:\nWrite the opening of a story about someone who begins to doubt what they see.\n\n${Q5_MARKS}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that suits its teenage readers and the theme of things not being what they seem. A description builds a mood from details of the street, the reflection and the dark, using the senses and some comparisons. A story opening introduces a character who notices something strange. Paragraphs organise the ideas, some words are chosen for effect, and spelling and punctuation are mostly accurate, with some variety of sentences.',
              'Grade 6-7': `This answer takes the second task: the opening of a story about someone who begins to doubt what they see.\n\nThe photograph has been on our fridge for six years, held up by a magnet shaped like a pineapple. I could describe it with my eyes shut. It is the summer we went to Tenby. Dad is squinting because the sun is in his face. Mum is laughing at something none of us can remember. I am nine, with a gap where my front tooth should be, holding up a crab in a red bucket as if I have won a trophy. Behind us the sea is a flat blue stripe, and the beach is empty all the way to the cliffs.\n\nThat is how it has always been.\n\nOn Tuesday morning, while the kettle was boiling, I noticed the man.\n\nHe was standing far back, at the edge of the water, so small that he could have been a post or a rock. But he was not a rock. He was wearing a long grey coat, which nobody wears on a beach in August, and he was facing the camera. Facing us.\n\nI put my toast down. I looked at him for a long time. Then I found the sensible answer. He had always been there, and I had simply never noticed him. You can look at something every day for six years without ever really seeing it. That was all it was.\n\n"Mum," I said, "who's that?"\n\nShe leaned over my shoulder, smelling of shampoo and coffee, and peered at the photograph. "Who's who?"\n\n"There. By the sea."\n\nShe looked for exactly as long as it takes to be polite. "That's a rock, love," she said, and went off to find her car keys.\n\nI did not point out that rocks do not wear coats.\n\nAll day at school the man stood at the back of my mind, at the edge of everything, the way he stood at the edge of the water. In maths I found I had drawn him in the margin of my exercise book. In English I read the same sentence four times and still could not have told you what it said. When the bell went, I walked home faster than I needed to, telling myself the whole way that I was being ridiculous. Twice I took out my phone to text Mum, and twice I put it away again, because what was I going to say?\n\nThe house was quiet. The fridge hummed. The pineapple magnet was exactly where it always is.\n\nI made myself cross the kitchen slowly, like someone who is not frightened of anything. I made myself look.\n\nThe beach was empty all the way to the cliffs. The man had gone.\n\nAnd I was no longer holding up the crab. In the photograph, nine-year-old me had turned her head away from the camera, and she was staring out to sea.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'The readers are 14 to 18, and the theme is things that are not what they seem.',
                'The photograph is there for ideas only: the description does not have to follow it exactly.',
                'A story opening can leave the doubt unresolved; it does not need to explain what is happening.',
                'Like the source, a piece might set up a pattern and then break it.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 4 - Coming-of-Age
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-04',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-04-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_04_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-04-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Read the first two paragraphs of the source again, from "The summer Leo turned fifteen" to "did not come back until dark."\n\n${Q1_PROMPT}\n\n1.1 What had happened to the river by August?\nA) It had flooded the town.\nB) It had almost dried up.\nC) It was deep enough to cover the rocks.\n\n1.2 How did the town feel in the heat?\nA) Livelier than usual\nB) Cooler, with fresh air\nC) Sluggish, as if the air were hard to move through\n\n1.3 How did Leo's mother describe what was happening between his parents?\nA) As "the end"\nB) As a happy time\nC) As a hard talk they were having\n\n1.4 How did Leo get to his grandmother's cottage each morning?\nA) He rode his bike.\nB) He walked three miles through the woods.\nC) His mother drove him there.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 B: "the river shrank to almost nothing".\n1.2 C: the heat "had thickened the air into something you had to push through".\n1.3 C: his mother called it "a difficult conversation".\n1.4 A: "he cycled three miles each morning".',
              'Grade 6-7': `1.1 B. The river "shrank to almost nothing" and was "barely deep enough to cover your ankles". C borrows the words "cover" and "rocks", but the rocks "stood exposed". Nothing suggests a flood (A).\n1.2 C. The town felt "slower, heavier", as though the heat had made the air "something you had to push through", so it was neither livelier (A) nor fresher (B).\n1.3 C. His mother called it "a difficult conversation", a hard talk. "The end" (A) is what his father called it.\n1.4 A. "He cycled three miles each morning", so he went by bike. B borrows "three miles" and the woods, at whose edge the cottage stands, but he did not walk, and nothing says his mother drove him (C).`,
            },
            markScheme: [
              '1.1 B: the river "shrank to almost nothing", "barely deep enough to cover your ankles".',
              '1.2 C: the town felt "slower, heavier", as though the heat had made the air "something you had to push through".',
              `1.3 C: his mother called it "a difficult conversation"; "the end" was his father's phrase.`,
              '1.4 A: "he cycled three miles each morning".',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-04-q2',
            questionNumber: 2,
            questionText: `Read the third paragraph of the source again, from "His grandmother was not the soft, biscuit-baking kind." to "every thought he was trying to hide."\n\nHow does the writer use language in this paragraph to make Leo's grandmother a memorable character?\n\n${Q2_PROMPT}`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer begins by telling us what the grandmother is not: she is "not the soft, biscuit-baking kind". This goes against the usual picture of a grandmother and makes her stand out. The simile "thin as wire" suggests she is thin but tough, because wire is hard to break. She swears "with the casual fluency of someone who had given up caring what anyone thought", which shows she is confident and does not mind what other people think of her. The writer ends the paragraph with the way she looks at Leo: it makes him feel "she could see every thought he was trying to hide". This shows she is clever and understands him, which makes her a memorable character.`,
              'Grade 6-7': `The writer makes the grandmother memorable by first dismissing the character the reader expects. The opening sentence, "His grandmother was not the soft, biscuit-baking kind", uses the compound adjective "biscuit-baking" to sum up a whole stereotype of cosy grandmothers in one image, only to say she is not it. What replaces it is hard and exact. Her age is given precisely, "seventy-three", and the simile "thin as wire" suggests something slight that will not snap. The phrase "casual fluency" turns her swearing into a kind of skill, and the oddly specific "around 1987" adds humour, as though she chose a year in which to stop caring what anyone thought. The final sentence is a list of what she has: "a vegetable garden that she tended with fierce concentration", "a shelf of books about birds" and, last, "a way of looking at Leo". Putting her gaze in the same list as a garden and a bookshelf makes it seem as solid as anything she owns, and "fierce" has already shown how hard she concentrates. The closing clause, "she could see every thought he was trying to hide", sets her insight against his effort: "every" leaves him nowhere private, and "trying to hide" shows he has something to conceal. The paragraph ends on that power, so the reader expects her to use it.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                '"not the soft, biscuit-baking kind" sets up a stereotype and rejects it; the compound adjective "biscuit-baking" sums it up in one image.',
                'The simile "thin as wire" suggests she is slight but tough.',
                '"casual fluency" makes her swearing a skill, and "around 1987" adds wry humour.',
                'The list ends with "a way of looking at Leo", as if her gaze were one of her possessions, and "fierce concentration" shows her intensity.',
                'In "she could see every thought he was trying to hide", "every" leaves him no privacy, and the paragraph ends on her power.',
              ],
            },
          },
          {
            id: 'aqa-p1-04-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first sentence to its last.\n\nHow has the writer structured the source to create tension?\n\nYou might write about how the source opens, the points where its focus moves to something new, and how it ends, and about any other structural choices that build or release the tension, such as the move from description into dialogue.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer begins with the hot, dry summer, when "the river shrank to almost nothing" and the air felt like "something you had to push through". This heavy atmosphere creates tension before we know what is wrong. The second paragraph explains the cause: Leo's parents are splitting up, and he stays away from the house. In the third paragraph the writer introduces the grandmother, whose way of looking makes Leo feel she could "see every thought he was trying to hide", so the reader expects her to find out how Leo feels. The tension rises in the dialogue, which is short and sharp: she says "You're angry," and he answers "I'm not." When she keeps pressing him about the weeds, the focus moves inside Leo's head and we learn how angry he really is. The tension is released when he finally admits "I'm angry", and the source ends calmly with his grandmother saying "Good".`,
              'Grade 6-7': `The writer builds tension slowly and then releases it, and the structure moves from the world outside into Leo's mind. The opening paragraph names no one's feelings at all, only the drought: the river "shrank to almost nothing" and the heat "had thickened the air into something you had to push through". This oppressive setting creates a pressure the reader feels before understanding it. The second paragraph supplies the cause, setting his mother's "a difficult conversation" against his father's "the end", and shows Leo escaping the house where "that conversation was happening". The third paragraph introduces the grandmother and ends on her gaze, which makes Leo feel she could "see every thought he was trying to hide". Placing this last sets up a confrontation: Leo is hiding something, and she will see it. The dialogue then narrows the source to a single morning, in lines that are short and blunt. Her statement, "You're angry," meets a two-word denial, "I'm not.", and the gap between them is where the tension is greatest. Her longer, half-joking speech about the weeds keeps up the pressure until "She was right." turns the focus inward. The sentences that follow repeat "He was angry" and pile up the people he blames, "at his father", "at his mother" and "at both of them", so the anger pours out in his thoughts before he speaks it. When he says "I'm angry", the tension breaks, and the grandmother's final lines, "Angry is honest. Angry I can work with.", end the source on calm acceptance rather than conflict.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'Opening: the drought and the heat that "had thickened the air" create an oppressive pressure before any feelings are named.',
                `The second paragraph gives the cause, his parents' separation, through the contrast of "a difficult conversation" and "the end".`,
                `The third paragraph ends on the grandmother's gaze ("see every thought he was trying to hide"), setting up a confrontation.`,
                `The dialogue narrows the source to one morning, and the short lines ("You're angry," and "I'm not.") raise the tension.`,
                `"She was right." turns the focus inward to Leo's anger, which builds through repetition before he speaks it.`,
                'Ending: his admission releases the tension, and her final words end the source on calm acceptance.',
              ],
            },
          },
          {
            id: 'aqa-p1-04-q4',
            questionNumber: 4,
            questionText: `This question is about the second part of the source, from the paragraph in which the grandmother says "You're angry" to the end.\n\nOne reader said: "Leo's grandmother is kind to him in this part, and the way she answers his anger leaves the reader hopeful that he will cope with what is happening to his family."\n\n${Q4_PROMPT}`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I mostly agree that the grandmother is kind, but in an unusual way. She does not make a fuss of Leo. She tells him "You're angry" without even looking up, which is blunt. But she notices how he feels before he admits it, which shows she cares about him. Her joke that "Weeds have feelings too, I expect" is gentle and makes him think about what he has been doing. When he finally says "I'm angry", she answers "Good", and says "Angry is honest. Angry I can work with." This shows she accepts his feelings and will help him, which makes me feel hopeful. However, the writer also shows how heavy his anger is: it "sat in his chest like a stone", and his family is still "falling apart". So I feel hopeful, but I do not think his problems are solved.`,
              'Grade 6-7': `I largely agree, though I would call the grandmother's kindness honest rather than soft, and the hope the ending offers is real but limited. Her first words, "You're angry," are a statement, not a question, and she says them "without looking up from her tomato plants". She does not ask Leo how he feels; she tells him, and that directness treats him as someone who can face the truth. Her humour is kind in a quieter way. "Weeds have feelings too, I expect" lets her point out his rough handling of the weeds without blaming him, and the turn in "Or maybe they don't. But you definitely do." brings the joke back to Leo, gently and in a few plain words. The writer then shows its effect from inside Leo's head: "She was right." The simile in "a thick, hot anger that sat in his chest like a stone" makes the anger heavy and hard to move, and the long sentence listing everyone he blames ends on the blunt truth, "a family falling apart". Her reply is the centre of the part. "Good" is the last word Leo would expect an adult to say about anger, and the short sentences "Angry is honest. Angry I can work with." turn his anger from something to hide into something they can deal with together. "Work with" suggests effort over time, not a quick cure. So the reader does feel hopeful, but the hope is that Leo will be helped to face his feelings, not that his family's problems will go away.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                `For the view: she notices Leo's anger before he admits it, and her joke "Weeds have feelings too, I expect" points out his behaviour without blame.`,
                'For the view: her reply "Good" and "Angry is honest. Angry I can work with." accept his feelings and promise help, which gives hope.',
                `Against, or both: her bluntness ("You're angry," said "without looking up from her tomato plants") is not a conventional kind of kindness.`,
                'Against: the anger "sat in his chest like a stone" and the family is still "falling apart", so the hope is limited.',
                'Methods: short lines of dialogue, the shift into Leo\'s thoughts at "She was right.", and the repeated "Angry" at the end.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-04-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-04-q5',
            questionNumber: 5,
            questionText: `Your town's library is putting up a display of local writing about summer, to be read by visitors of every age. You have been asked to write a piece for it.\n\nChoose ONE of these two tasks.\n\nEither:\nWrite a description of a riverbank on a hot day. ${Q5_PICTURE_PROMPT} a teenage boy sitting alone on a riverbank on a hot summer day, with a small town in the distance. ${Q5_PICTURE_USE_PROMPT}\n\nOr:\nWrite the opening of a story about a summer that changed everything.\n\n${Q5_MARKS}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece for readers of every age. A description uses details of the river, the heat and the town in the distance, with the senses and some comparisons, to create a summer mood. A story opening introduces a character and hints at the change to come. Paragraphs organise the ideas, some words are chosen for effect, and spelling and punctuation are mostly accurate, with some variety of sentences.',
              'Grade 6-7': `This answer takes the first task: the description of a riverbank on a hot day.\n\nBy two o'clock the heat has settled over the valley like a lid on a pan. Nothing hurries. The river barely moves, a slow green ribbon sliding under the willows, so lazy that a fallen leaf takes a whole minute to drift past a single stone. Even the light seems heavy. It lies across the water in thick golden slabs and refuses to be moved.\n\nOn the far side of the meadows, the town shimmers. Its church spire wobbles in the hot air as though it is standing at the bottom of a swimming pool, and the roofs are blurred grey squares, too far away to make a sound. Here there is only the river's quiet business: the plop of a fish rising, the dry tick of grasshoppers, a wood pigeon somewhere repeating the same sleepy phrase over and over again.\n\nThe grass on the bank has turned the colour of toast. It crackles underfoot and gives off a sweet, dusty smell, like hay in a barn. Near the water, where the mud has dried into a jigsaw of cracked plates, a line of ants is carrying crumbs towards a hole beneath a root. They are the only creatures still working. A dragonfly hangs above the reeds, perfectly still apart from the blur of its wings, and then vanishes, as if someone has switched it off.\n\nA boy sits alone where the bank slopes down to the river. He has kicked off his trainers and pushed his feet into the water, and he leans back on his hands with his eyes half closed. He looks as if he is waiting for something, though perhaps he is only waiting for the day to end. Every so often he picks up a flat pebble, weighs it in his palm, and puts it down again without throwing it.\n\nThen, without warning, the air changes. A breath of wind runs through the willows, and every leaf flips over to show its silver underside, so that each tree seems to shiver. The reeds bow. On the water, a thousand tiny ripples wake at once and race downstream like children let out of school. The boy opens his eyes. Far beyond the town, a tower of cloud has begun to build, creamy white, its top lit gold by the sun.\n\nHe stands up at last and skims the pebble. It skips once, twice, three times, four, and every touch leaves a ring on the water that spreads and spreads until it laps against the opposite bank. By the time the last ring fades, the river is still again, and the heat has returned to press down on the valley.\n\nBut the boy is smiling now. And somewhere in the distance, beyond the hills, the first low grumble of thunder rolls across the fields, like a promise that the summer is about to change.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'Visitors of every age will read the display, so the piece should suit all of them.',
                'The photograph is there for ideas only: the description does not have to follow it exactly.',
                'A story opening can hint at the change to come without showing it.',
                `Like the source, a piece might let the setting reflect a character's mood.`,
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 5 - Nature Writing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-05',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-05-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_05_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-05-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Read the first paragraph of the source again, from "Dawn came to the estuary in layers" to "no division between above and below."\n\n${Q1_PROMPT}\n\n1.1 What appeared first at the horizon?\nA) A wash of pink\nB) A flash of gold\nC) A thin streak of silver\n\n1.2 What was the water like?\nA) Completely calm\nB) Rough, with small waves\nC) Grey and stormy\n\n1.3 What could not be told apart?\nA) The silver line and the pink\nB) The sky above and the sky mirrored below\nC) The birds and the clouds\n\n1.4 For how long did the world seem to have no edges?\nA) For a short while\nB) For the whole morning\nC) For several hours`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1.1 C: "first a thin line of silver at the horizon".\n1.2 A: "The water was perfectly still."\n1.3 B: "The sky and its reflection were indistinguishable".\n1.4 A: "for a few suspended minutes".',
              'Grade 6-7':
                '1.1 C. Dawn came "first" as "a thin line of silver at the horizon". The pink (A) came next, "then a slow bleeding of pink into the grey", and no gold is mentioned (B).\n1.2 A. "The water was perfectly still", so it was calm, not rough (B). The "grey" in the paragraph is the colour the pink spreads into, not stormy water (C).\n1.3 B. "The sky and its reflection were indistinguishable": the sky and its mirror image in the water looked the same. The silver and the pink came one after the other, "first" and "then", so they could be told apart (A), and the paragraph mentions no birds or clouds (C).\n1.4 A. The world had no edges only "for a few suspended minutes", a short while, not all morning (B) or for hours (C).',
            },
            markScheme: [
              '1.1 C: dawn came "first a thin line of silver at the horizon"; the pink came next.',
              '1.2 A: "The water was perfectly still."',
              '1.3 B: "The sky and its reflection were indistinguishable".',
              '1.4 A: the world had no edges "for a few suspended minutes".',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-05-q2',
            questionNumber: 2,
            questionText: `Read the third paragraph of the source again, from "The estuary was a place of constant, quiet transformation." to "leaving the rest behind."\n\nHow does the writer use language in this paragraph to make the estuary at low tide seem extraordinary?\n\n${Q2_PROMPT}`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer says the estuary is a place of "constant, quiet transformation", which means it is always changing but so gently that people do not notice. At low tide it shows "a landscape that most people never saw", which makes it seem special and secret. The writer lists what is there, such as "the shells of cockles and razor clams", and compares the channels of water to "the tributaries of some miniature river system", which makes the mud seem like a small world of its own. The lugworm casts are "thousands of them", and each one is "the signature of a creature", as if the worms are signing their names. This makes even worms seem amazing.',
              'Grade 6-7': `The writer makes the estuary extraordinary by revealing a hidden world and describing it in language more often used for grand landscapes and living bodies. The opening sentence calls it a place of "constant, quiet transformation": "constant" means the change never stops, while "quiet" explains why so few notice it. The second sentence, the longest, then reveals "a landscape that most people never saw", letting the reader in on a secret, and builds the scene in layers. A "vast plain of rippled mud" gives the mud the scale of open country, the participles "studded" and "veined" make it sound first like a jewelled object and then like a body, and the simile "like the tributaries of some miniature river system" turns the channels into a whole river system in small, with "branched and rebranched" showing how intricate it is. The final sentence moves from the landscape to its creatures. The lugworm casts are "thousands of them", and the metaphor "the signature of a creature" makes each cast a mark that proves a life was there. The three participle phrases that end the paragraph, "processing the mud through its body, extracting what it needed, leaving the rest behind", give the worm's hidden work a steady rhythm, so a creature "living its entire life in darkness" seems patient and purposeful rather than lowly.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                '"constant, quiet transformation": change that never stops but goes unnoticed.',
                '"a landscape that most people never saw" lets the reader in on a hidden world.',
                '"vast plain" gives the mud a grand scale, and the participles "studded" and "veined" make it seem precious and alive.',
                'The simile "like the tributaries of some miniature river system" and "branched and rebranched" make the channels intricate.',
                `The metaphor "the signature of a creature" and the participle phrases "processing the mud through its body, extracting what it needed, leaving the rest behind" give the lugworm's hidden life purpose and rhythm.`,
              ],
            },
          },
          {
            id: 'aqa-p1-05-q3',
            questionNumber: 3,
            questionText:
              'This question is about the whole source, from its first sentence to its last.\n\nHow has the writer structured the source to create a sense of calm?\n\nYou might write about how the source opens, the points where its focus moves to something new, and how it ends, and about any other structural choices that add to the calm, such as contrasts or changes of pace.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer opens with a slow description of dawn arriving "in layers", and the water is "perfectly still", so the source feels calm from the start. The focus then moves to Dr Frost, who cannot remember the last time she was "truly still". This shows that her life is busy, which is a contrast with the peaceful estuary. In the third paragraph the writer zooms in on the mud and the lugworms, which live quietly in the dark, so the calm continues. When Anya touches the mud, she finds it "cold and dense and alive". At the end the writer describes the curlews calling and Anya closing her eyes, and the short sentence "The mud held her steady." shows that she has found the stillness she was missing. The last words, the tide\'s "slow, patient return", end the source peacefully.',
              'Grade 6-7': `The writer structures the source so that the calm of the place gradually becomes Anya's own. The opening paragraph moves at the pace of dawn itself, "first", then "then", then "all at once", so the light arrives in stages until the world reaches a moment of stillness that lasts "for a few suspended minutes". The focus then shifts from the landscape to Anya, and the writer introduces a contrast. She tries "to remember the last time she had been truly still", and the fragments "Not pausing between tasks. Not waiting for something. Just still." end in the blunt sentence "She could not." Her restlessness makes the calm around her more noticeable and gives the source something to resolve. The third paragraph narrows the focus to the mudflats at low tide, a place of "constant, quiet transformation", and to the lugworms, which spend their whole lives "in darkness" processing the mud, so the calm deepens as the view comes closer. In the fourth paragraph Anya crouches and touches the mud, the point where watching turns into contact. The final paragraph widens out through sound, the curlews calling until "the whole estuary was stitched together with sound", and then returns to Anya in two short sentences: "Anya closed her eyes. The mud held her steady." She has found the stillness she could not remember in the second paragraph. The source ends with the tide "beginning its slow, patient return", which echoes the gradual arrival of dawn at the start and leaves the reader with the sense that this calm will keep coming back.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'Opening: dawn arrives in stages ("first", "then", "all at once") until the "perfectly still" water and the "few suspended minutes" set a calm, unhurried pace.',
                'The shift to Anya brings a contrast: she cannot remember being "truly still", and the fragments and the blunt "She could not." show her restlessness.',
                'The third paragraph narrows to the mudflats and the lugworms, a world of "constant, quiet transformation", so the calm deepens as the view closes in.',
                'Turning point: Anya crouches and touches the mud, moving from watching to contact.',
                `Ending: the view widens through the curlews' calls, then closes on two short sentences, "Anya closed her eyes. The mud held her steady."; the tide's "slow, patient return" echoes the opening and suggests the calm will come again.`,
              ],
            },
          },
          {
            id: 'aqa-p1-05-q4',
            questionNumber: 4,
            questionText: `This question is about the last two paragraphs of the source, from "She crouched and pressed her fingers into the mud." to the end.\n\nOne reader said: "This part makes people seem small and unimportant beside the natural world. Anya feels insignificant, and the writer wants the reader to feel the same."\n\n${Q4_PROMPT}`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. The writer makes nature seem amazing and huge. There are "over forty thousand organisms per square metre", and a handful of mud holds more living things than "the entire human population of the nearest town", so people seem few and small in comparison. Anya feels "insignificant", which supports the view. However, she also feels "grateful", so she is not just made to feel small: she is thankful to be part of something so full of life. At the end "The mud held her steady", which sounds as if nature is supporting her, not pushing her aside. So I think the writer wants us to feel connected to nature as well as small next to it.',
              'Grade 6-7': `I agree that the writer shrinks the human world in this part, but I disagree that the aim is to make the reader feel unimportant. The writer's real interest is in what Anya gains by noticing how small she is. The part begins with touch, and the list "cold and dense and alive" builds to its most surprising word, "alive", given to something most people would think of as lifeless. The facts then overturn the reader's sense of scale. The figure "over forty thousand organisms per square metre" is too large to picture, and setting "A single handful of estuarine mud" against "the entire human population of the nearest town" weighs one handful against a whole town, so that people seem very few. This supports the view. However, the sentence that follows pairs two feelings: "simultaneously insignificant and grateful". The word "simultaneously" matters, because it means smallness and gratitude arrive together, and gratitude is not what someone feels when they are made to feel worthless. The final paragraph moves from smallness to belonging. The first curlew's call is a "long, descending note hanging in the air like a question", and the metaphor "stitched together with sound" makes the estuary one connected whole. Then two short sentences, "Anya closed her eyes. The mud held her steady.", show the natural world holding her up rather than pushing her aside. So the writer does make people seem small, but only to show that being small within something so alive can be steadying.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'For the view: the figure "over forty thousand organisms per square metre" and the comparison with "the entire human population of the nearest town" make people seem few and small.',
                'For the view: Anya feels "insignificant".',
                'Against: "grateful" arrives with it ("simultaneously insignificant and grateful"), so smallness brings gratitude, not worthlessness.',
                'Against: the final paragraph moves to belonging, with the estuary "stitched together with sound" and "The mud held her steady."',
                'Methods: the list "cold and dense and alive", the scientific detail, the curlew simile and the short sentences at the end.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-05-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-05-q5',
            questionNumber: 5,
            questionText: `A nature reserve is printing a booklet of writing about wild places, to give to the adults and families who visit it. You have been asked to contribute a piece.\n\nChoose ONE of these two tasks.\n\nEither:\nWrite a description of a wild place at dawn. ${Q5_PICTURE_PROMPT} a wide, flat estuary at dawn, with a lone figure standing at the water's edge. ${Q5_PICTURE_USE_PROMPT}\n\nOr:\nWrite the opening of a story set in a place where nature is more powerful than people.\n\n${Q5_MARKS}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece for visitors to a nature reserve. A description uses the senses to describe the estuary at dawn, its light, its water and the figure, with some comparisons. A story opening introduces a character in a wild place where nature is in charge. Paragraphs organise the ideas, some words are chosen for effect, and spelling and punctuation are mostly accurate, with some variety of sentences.',
              'Grade 6-7': `This answer takes the first task: the description of a wild place at dawn.\n\nJust before seven, the marsh is still holding its breath. Mist lies over the reed beds like a soft white blanket, so thick that the far side of the lake has disappeared, and the world seems to end a few steps from the path. Every sound is muffled. Somewhere out in the whiteness a coot gives one sharp call, like a stone dropped on a tin roof, and then the silence closes over it again.\n\nThe light comes slowly. First the sky behind the alder trees turns the grey of a pigeon's wing. Then a faint wash of apricot creeps along the horizon, and the mist begins to glow from inside, as if someone has lit a lantern at the heart of it. Frost has silvered every blade of grass along the bank. When I breathe out, my breath hangs in front of me for a moment, then drifts off to join the rest of the mist.\n\nClose to my boots, the edge of the lake has frozen into a thin skin of ice, as clear as a window. Beneath it, trapped bubbles shine like tiny moons. A single oak leaf is caught in the ice, brown and curled, every vein still perfect. On a reed stem nearby, a spider's web has been strung with frozen dew, and it sags under the weight of a hundred glittering beads.\n\nThen I see the heron. It is standing at the water's edge, perhaps twenty paces away, so grey and so still that I had taken it for a post. Its neck is folded down into its shoulders, like an old man hunched inside his coat against the cold. Only its eye moves, a bright yellow bead that misses nothing. For a long moment we watch each other, two lone figures at the edge of the morning, and neither of us moves.\n\nSuddenly the sun lifts above the trees, and the marsh catches fire. Gold pours across the lake. The mist tears into ribbons and rises, and the reeds, which a moment ago were grey ghosts, turn to copper and bronze, whispering as the first breeze of the day combs through them. A wren bursts into song from the brambles, far too loud for something so small, and the whole reserve wakes up around it: geese gossiping overhead in a ragged line, a blackbird scolding from a hawthorn, the creak and splash of swans landing on the open water.\n\nThe heron unfolds itself. It lifts into the air with three slow beats of its enormous wings, legs trailing behind it, and glides low across the lake until it is only a grey shape against the gold. I watch it until I cannot see it any more.\n\nWhen I look down again, the sunlight has reached the ice at my feet. The oak leaf is still trapped there, but the ice around it has begun to melt, drop by shining drop, as though the morning is gently setting it free.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'The readers are adults and families visiting the reserve.',
                'The photograph is there for ideas only: the description does not have to follow it exactly.',
                'A story opening can show the power of nature through what happens to a character rather than by stating it.',
                'Like the source, a piece might move between a wide view and close detail.',
              ],
            },
          },
        ],
      },
    ],
  },
]
