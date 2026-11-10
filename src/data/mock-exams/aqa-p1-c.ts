// @ts-nocheck

/**
 * AQA GCSE ENGLISH LANGUAGE PAPER 1 (8700/1), MOCKS 11 TO 15.
 *
 * WHAT WAS WRONG (found 31 October 2026). From summer 2026 AQA reworded four
 * of this paper's questions while keeping their marks, and these mocks still
 * set the old forms:
 *   - Question 1 asked for four true statements from eight. AQA's Question 1
 *     is now four multiple-choice parts, 1.1 to 1.4, each with one right
 *     answer.
 *   - Question 3 asked how the source was structured "to interest you as a
 *     reader" (Paper 11), for two effects at once (Paper 12) or for an aim
 *     that is not an effect (Papers 14 and 15). AQA now names one effect.
 *     Paper 13's, tension, was already one.
 *   - Question 4 asked "To what extent do you agree?". AQA now asks how far
 *     the student agrees and/or disagrees with a view of a named part.
 *   - Question 5 asked for "a description suggested by this picture". AQA's
 *     picture is now for ideas only, and its other task is a story opening.
 * Much of the wording was also AQA's own rubric, copied ("Look in detail at
 * the extract", "You now need to think about the whole of the source",
 * "Focus this part of your answer on", "In your response, you could:", the
 * Section B instructions), and every paper set the same competition judged
 * by "a panel of published authors". A board's question wording is its
 * copyright. Question 4 was given 22 minutes, where AQA's timing advice
 * gives it 20.
 *
 * WHAT THEY ARE NOW. Each paper is set as the guide describes 8700/1
 * (src/data/mark-scheme-guides/aqa-lang-paper1.ts, checked twice against
 * AQA's 2026 sample paper and mark scheme), in the site's own words, with
 * the guide's minutes, and the guide's levels in the mark scheme of every
 * question AQA marks by level. Question 1 names a paragraph (two in Paper
 * 14), since the page prints the source as wrapped text with no line
 * numbers, then asks four parts with three options each, one of them
 * right and settled by the named lines alone; in each paper at least one
 * wrong option reuses a word from the source, the trap the guide describes,
 * and the right letters follow a different pattern in every paper. Question
 * 2 is unchanged in form and reworded. Question 3 names one effect the
 * source really creates: mystery (11), suspense (12), tension (13), sympathy
 * for Ryan (14) and a dreamlike mood (15). Question 4 names its part and a
 * view, and its model answers weigh the view rather than simply agreeing;
 * Paper 11's part now starts at "Run it again", so that a 20-mark question
 * has more than one short paragraph to weigh. Question 5 describes its
 * picture in words, says the real paper prints one there, and gives each
 * paper its own reader. Each paper's ids, sections, marks, total and time
 * are unchanged, and no extract was touched. Dashes used as punctuation in
 * the kept model answers were taken out. Every quotation in the answers,
 * schemes and questions was checked, by script, against the lines its
 * question names (an answer quoting a Question 4 view, against the view).
 *
 * CHECKED, 31 October 2026, by a second reader who did not write them: each
 * paper read whole, every Question 1 option settled against its paragraph,
 * and every quotation and claim held to the source. What was wrong, and
 * what changed:
 *   - Paper 11 Question 1: an answer said options A and B repeat "gentle";
 *     B says "gently". It now names "subtly" and "navigator".
 *   - Paper 11 Question 2: the scheme had the console flicker; the source
 *     says the screen did. It now says the screen.
 *   - Paper 11 Question 3: an answer called the forty-seven days "ordinary
 *     drifting", which the source never says. "Ordinary" is gone.
 *   - Paper 12 Question 2: the scheme quoted "Nothing had moved on it since
 *     Tuesday" with a full stop the source does not have (its sentence runs
 *     on to the pickup truck). It is now quoted without one.
 *   - Paper 13 Question 2: an answer had the cliff path "trap" Maren, who is
 *     still on the bridge looking at it. The path is now the danger ahead.
 *   - Paper 14 Question 2: the scheme said each "because" explains why
 *     Ryan's help was needed; in the shoes sentence it explains the tape.
 *     Each now names the problem behind what he had to do.
 *   - Paper 14 Questions 3 and 4: two answers said the man on the poster has
 *     never worried about the price of electricity; he only "looked like" he
 *     had. Both now say he looks as if he has.
 *   - Paper 15 Questions 3 and 4: an answer and the scheme called the smell
 *     burning toast; the narrator only guesses ("Toast, probably"). Both now
 *     say a smell of burning.
 *   - Twelve quotations, in the Question 2 answers of Papers 12, 13 and 15
 *     and a Question 3 answer of Paper 14, closed on a comma or full stop
 *     the source does not have there; the mark now stands outside them.
 *   - Question 5: both answers on every paper described what a good piece
 *     does, with a one-line example, so no paper showed a student a whole
 *     piece. Each Grade 6-7 answer is now a full piece of 450 to 550 words,
 *     written for this bank, for one task as set and for the reader that
 *     task names, and it says which task it answers: Paper 11 task (b),
 *     Paper 12 task (a), Paper 13 task (b), Paper 14 task (a) and Paper 15
 *     task (a). The Grade 4-5 outlines are unchanged.
 *
 * EARLIER: WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, fixed 27 September 2026). The
 * question 1 statements and keys this section describes were replaced on
 * 31 October 2026.
 *
 * The five extracts are specially written for this bank and labelled as such;
 * none claims to be a published writer's words, and none was changed. These
 * papers are served (mock-exam-loader chunk 'aqa-p1-c', and allMockExamPapers
 * through ./index), so what follows was in front of students.
 *
 * The model answers were not in step with the extracts:
 *   - a quotation that is in no part of the extract: Paper 13 question 2 gave
 *     the path "specific measurements like "two hundred feet" and "twelve
 *     feet by ten"". The second figure is not in this extract; it belongs to
 *     the slum-room passages of other banks (base.ts, practice/edexcel.ts).
 *     The answer now cites "a drop of two hundred feet", which is here;
 *   - quotations with the writer's words changed: "Nothing had moved since
 *     Tuesday" (a silent cut: the text has "Nothing had moved on it since
 *     Tuesday"), the lights that "pulse" (they "pulsed"), the keyboard's
 *     "soft" clicking (it "clicked softly"), and the student's statement
 *     quoted as "refuse to stay buried" (the question says "refuses");
 *   - claims the text does not bear out: "POSITION UNKNOWN" said to be in
 *     "implied capitals" (it is printed in capitals); "Then the plank
 *     settled" called a short sentence (it opens a long one that ends with
 *     her heart "slamming against her ribs"), and "Her fingers tightened
 *     until the rope bit into her palms" counted among "short" sentences;
 *     the poster in Paper 14 put in the third paragraph (it is the fourth);
 *     Emmeline's final paragraph called "a single line of dialogue" (the
 *     line is framed by two sentences of narration); "He thought about" said
 *     to open every sentence of its paragraph (it opens three of the four);
 *     and Vasquez and the Paper 15 narrator given a sex the extracts never
 *     state;
 *   - wrong terms: "draped" called a participle (it is the finite verb of a
 *     relative clause, as the paper's question 2 answer says), "for one
 *     terrible second" called a subordinate clause (it is joined by "and"),
 *     and the void in "the silence on the bridge was absolute" credited to
 *     "the abstract noun" (it is the adjective "absolute" that does it);
 *   - question 1 keys with five true statements for "choose four": Papers 12,
 *     13, 14 and 15 each had a true H (G in Paper 15), which the key admitted
 *     was true and still left out. Each is now a statement the extract makes
 *     false, and every keyed letter is unchanged.
 *
 * A second reading the same day, of each answer against the lines its
 * question sets, found more:
 *   - evidence from outside those lines: Paper 12 question 4 sets the third
 *     and fourth paragraphs, and its answers cited "so much as a belt buckle"
 *     and Emmeline's eleven years on the porch, both from the second; Paper
 *     14 question 4 starts at the third paragraph and cited "leadership
 *     skills" from the first. They now cite what the set lines hold;
 *   - claims the text does not bear out: the "absolute" silence in Paper 11
 *     read as "an absence of the familiar sounds" (the same paragraph gives
 *     Vasquez breathing and the air system's hum "louder than usual"); the
 *     paint said to have curled long ago (the house was white "a long time
 *     ago, before the paint curled"); Maren's "refusal" to interpret Tomas's
 *     gesture (she "couldn't tell which"); Paper 15's first paragraph said to
 *     move "from the cafe" (the cafe is not named until the second); Ryan
 *     without "his own clothes" (only the shirt is borrowed); and "Her
 *     fingers tightened", cut short and set beside "Her stomach dropped." as
 *     if both were short sentences, after the first fix had corrected that
 *     claim in words but not in the quotation;
 *   - wrong terms: "like all ordinary Tuesdays" called a parenthetical
 *     clause (it has no verb: it is a phrase), "but also" called a
 *     conjunction, Ryan's borrowed shirt called a metonym (it stands for his
 *     situation as a symbol, not by association), and the "He thought about"
 *     paragraph called interior monologue (it is narrated thought, in the
 *     third person).
 *
 * Every double-quoted span in these answers and mark schemes is now in its
 * own extract, or quotes the question's own words (the student's statement),
 * and the checker passes the file.
 */

import type { MockExamPaper } from './types'

// ─── Extracts ──────────────────────────────────────────────────────────────────

const EXTRACT_11 = `The ship had been drifting for forty-seven days when Kira first noticed the stars were wrong. Not subtly wrong - not the gentle precession of constellations that any navigator might expect after weeks of travel - but fundamentally, impossibly wrong. Where Orion should have hung above the port bow, there was a cluster of pale blue lights she had never seen before, arranged in a shape that reminded her, uneasily, of an open hand.

She pulled up the star charts on the navigation console, her fingers leaving faint smudges on the cold glass. The screen flickered, recalculated, flickered again. Then it displayed a single line of text she had never seen in fifteen years of deep-space freight work: POSITION UNKNOWN.

The silence on the bridge was absolute. Behind her, she could hear Vasquez breathing - slow, deliberate breaths, the kind a person takes when they are trying very hard not to panic. The hum of the recycled air system seemed louder than usual, as though the ship itself were holding its breath.

"Run it again," Kira said.

Vasquez did not move. "I've run it six times."

Kira stared at the viewport. The blue lights pulsed gently, almost rhythmically, like a heartbeat. She had the sudden, irrational conviction that they were not stars at all - that something out there in the black was watching them, had been watching them for a long time, and had only now decided to let itself be seen.`

const EXTRACT_11_SOURCE = 'Original science fiction composition'

const EXTRACT_12 = `The heat pressed down on Jessamine County like a fist, and the Boudreaux house sat in the middle of it, patient as a spider. It was the kind of house that had been white once, a long time ago, before the paint curled and the wood turned the colour of old bone. Wisteria climbed the porch columns in thick, strangling ropes, and the scent of it - sweet, heavy, almost rotten - hung in the motionless air like a warning.

Emmeline Boudreaux sat on the porch in a cane-backed chair, her bare feet flat on the warped boards, a glass of sweet tea sweating in her hand. She was seventy-three years old and she had not left this porch in eleven years. The town said she was mad. The town said worse things, too, in low voices at the post office and the diner, things about what had happened to her husband and where exactly he had gone and why nobody had ever found so much as a belt buckle.

She watched the road. Nothing moved on it. Nothing had moved on it since Tuesday, when a red pickup truck had raised a plume of dust that hung in the air for a full minute after it passed, like the ghost of motion. The oaks that lined the drive stood utterly still, their branches heavy with Spanish moss that draped like funeral lace. Somewhere behind the house, deep in the bayou, a bullfrog called - a low, guttural sound that seemed to come from the earth itself.

Emmeline took a slow sip of her tea. "He's coming back today," she said, to nobody. Her voice was calm, certain, and completely terrifying.`

const EXTRACT_12_SOURCE = 'Original Southern Gothic composition'

const EXTRACT_13 = `The rope bridge swayed beneath Maren's boots, each plank groaning like a living thing. Below her - far, far below - the river cut through the gorge in a white fury of spray and stone, and the sound of it rose up in a ceaseless roar that made thought difficult and speech impossible. She did not look down. She had learned, in three weeks of crossing bridges like this one, that looking down was a luxury she could not afford.

Ahead, the far cliff face was a wall of red rock streaked with green where water seeped through cracks in the stone. The path - if you could call it a path - was a narrow ledge carved into the rock, barely wide enough for one person, with a drop of two hundred feet on the left side and sheer cliff on the right. Maren could see where it disappeared around a bend, and beyond that, nothing but sky.

She gripped the rope rail with both hands and took another step. The plank beneath her left foot shifted, tilted, and for one terrible second she felt her weight swing out over the void. Her stomach dropped. Her fingers tightened until the rope bit into her palms. Then the plank settled, and she was steady again, breathing hard, her heart slamming against her ribs.

Behind her, Tomas called something she couldn't hear over the water. She turned her head just enough to see him standing at the bridge's anchor point, one hand raised. Warning or encouragement - she couldn't tell which. She faced forward again and kept walking.`

const EXTRACT_13_SOURCE = 'Original adventure fiction composition'

const EXTRACT_14 = `The interview room smelled of instant coffee and carpet tiles. Across the desk, the woman from the agency smiled with her mouth but not her eyes and said, "So, Ryan, tell me about a time you demonstrated leadership skills."

Ryan looked at her. He thought about the time he'd carried his mother up two flights of stairs because the lift in their tower block had been broken for six weeks. He thought about the morning he'd walked his sister to school in shoes held together with tape because the sole had come away from the upper, and he'd had to walk in a particular shuffling way to stop the flapping noise. He thought about the evening he'd sat in the Jobcentre for three hours with his nan, explaining forms to her because the print was too small for her eyes and the language was too complicated for anyone's.

"I was captain of the football team at school," he said.

The woman typed something. The keyboard clicked softly. Behind her, a poster on the wall showed a smiling man in a hard hat giving a thumbs-up beneath the words YOUR FUTURE STARTS HERE. The man was white, clean-shaven, and looked like he had never once worried about the price of electricity.

Ryan shifted in his plastic chair. His shirt - borrowed from his uncle, slightly too large - bunched at the shoulders. The fluorescent light above them buzzed with a faint, persistent sound like a trapped insect. Through the window, he could see the car park, and beyond it the grey sprawl of the retail park, and beyond that the tower blocks of the Hayfield Estate where he had lived for all nineteen years of his life, rising against the overcast sky like a row of filing cabinets.`

const EXTRACT_14_SOURCE = 'Original social realism composition'

const EXTRACT_15 = `The tea is getting cold but that does not matter because time has come unstuck again, peeling away from the clock face like old wallpaper, and I am sitting at this table but also standing in the garden at Marchmont Road, age nine, the grass wet between my toes, the sky the colour of a bruise before rain, and my father is calling my name from the kitchen window, his voice carrying across thirty years as easily as it carried across the lawn.

The cup in my hands. White porcelain. A chip on the rim that I run my thumb across, back and forth, a small geography of damage. The cafe is full of noise - the hiss of the machine, the percussion of crockery, voices overlapping like waves - but I am listening to something beneath all of it, a low hum that might be the city or might be my own blood or might be the sound that memory makes when it is trying to surface.

I think of her. I always think of her in cafes, because cafes were where we existed, where we were most real - two cups, a table, the particular quality of afternoon light falling through glass. She would tear her napkin into strips while she talked, her fingers working automatically, a small nervous habit I found unbearable and then essential and then, after she was gone, the thing I missed most of all. More than her voice. More than her hands. The torn napkin, the little pile of white strips beside her saucer, a demolished flag of surrender.

Something is burning. Toast, probably. The smell pulls me back to the present tense, to this table, this cup, this chip under my thumb, this ordinary Tuesday that contains, like all ordinary Tuesdays, every Tuesday I have ever lived.`

const EXTRACT_15_SOURCE = 'Original stream of consciousness composition'

// ─── How each question is marked ─────────────────────────────────────────────
// In the site's own words, from src/data/mark-scheme-guides/aqa-lang-paper1.ts.

const SECTION_A_GUIDANCE =
  'Read the source below, then answer all four questions in this section. Allow about 15 minutes to read the source and the questions, and about 45 minutes for your answers.'

const SECTION_B_GUIDANCE =
  'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking. Use complete sentences, and keep those last few minutes for reading your work through and correcting it.'

const Q1_MARKING =
  'One mark for each correct answer: 4 marks in all. Each part needs one letter only.'

const Q2_LEVELS = [
  'Level 1 (1 to 2 marks): says something basic about a word or two, or names a technique without saying what it does. The quotations may not really back up the point.',
  'Level 2 (3 to 4 marks): tries to say what some of the language does, using a few suitable quotations. Subject terms appear now and then, usually used correctly.',
  'Level 3 (5 to 6 marks): for each quotation, says plainly what effect the words have on the reader and why, with several well-chosen quotations and techniques named correctly.',
  "Level 4 (7 to 8 marks): looks beneath the surface, analysing how the writer's choices work and what they suggest, with sharply chosen quotations and confident, precise use of terms.",
  'An answer that writes only about lines outside the ones the question names cannot go above Level 2.',
]

const Q3_LEVELS = [
  'Level 1 (1 to 2 marks): notices one or two basic things about the order of the text, often by retelling what happens.',
  'Level 2 (3 to 4 marks): tries to say what some structural features do, such as a change of focus, with a few examples.',
  "Level 3 (5 to 6 marks): says plainly how several of the writer's structural choices build the effect the question names, with suitable examples and correct terms.",
  'Level 4 (7 to 8 marks): analyses how the shape of the whole text builds that effect, with sharply chosen examples and confident, precise terms.',
  'Every point should be about structure (the order, focus, pace and shape of the text) rather than single words, and should link back to the effect the question names.',
]

const Q4_LEVELS = [
  'Level 1 (1 to 5 marks): gives a basic opinion on the view, with a little about what happens and a reference or two.',
  "Level 2 (6 to 10 marks): starts to weigh up the view, with some comment on the writer's methods and how they affect the reader, backed by a few suitable references.",
  "Level 3 (11 to 15 marks): makes a sound, well-supported judgement, showing how the writer's ideas and methods shape the reader's response, with plenty of relevant evidence.",
  "Level 4 (16 to 20 marks): argues a confident, thoughtful case, showing in depth how the writer's methods work on the reader, with sharply chosen evidence throughout.",
  'Agreeing, disagreeing and doing some of each are equally valid: what earns marks is how well the judgement is argued, with evidence from the part of the source the question names.',
]

const WRITING_LEVELS = [
  'Content and organisation, 24 marks. Level 1 (1 to 6): a few simple ideas, plain vocabulary and little sense of shape. Level 2 (7 to 12): holds the reader in places, with some deliberate word choices, a tone that starts to suit the task and paragraphs that begin to organise the piece. Level 3 (13 to 18): keeps the reader interested throughout, with a tone that suits the task, vocabulary and techniques chosen for effect and well-linked paragraphs. Level 4 (19 to 24): grips the reader from start to finish, with a confident, original voice, ambitious and exact vocabulary and a structure planned for the greatest effect.',
  'Technical accuracy, 16 marks. Level 1 (1 to 4): a few sentences start and end in the right place, simple words are spelt correctly, and sentences and vocabulary are mostly simple. Level 2 (5 to 8): sentences usually start and end in the right place, several kinds of punctuation are tried, and some harder words are spelt correctly. Level 3 (9 to 12): sentences nearly always start and end in the right place, most punctuation is used well, most words are spelt right, hard ones included, and sentence types are varied on purpose. Level 4 (13 to 16): every sentence starts and ends in the right place, every kind of punctuation is used with skill, even adventurous words are spelt right, and long sentences stay clear and correct.',
  'Writing that does not do what the task asks cannot score more than 12 of the 24 marks for content and organisation.',
  'The two marks are added together, out of 40. Answer one of the two tasks only.',
]

// ─── Mock Exam Papers: AQA Paper 1, Set C (aqa-p1-11 through aqa-p1-15) ─────

export const aqaP1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 11 - Science Fiction
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-11',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-11-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_11_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-11-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Look back at the first paragraph of the source, from "The ship had been drifting" to "an open hand."\n\nAnswer the four parts below. For each part, choose one letter only: A, B or C.\n\n1.1 How long had the ship been drifting when Kira noticed that the stars were wrong?\nA) Less than a month\nB) Between six and seven weeks\nC) More than a year\n\n1.2 What does the writer say about the way the stars were wrong?\nA) They were subtly wrong, as stars often are after a long voyage.\nB) They had shifted gently, as any navigator would expect.\nC) They were so wrong that it should not have been possible.\n\n1.3 What could Kira see where Orion should have been?\nA) An unfamiliar group of bluish lights\nB) Orion, in its usual place above the port bow\nC) A dark patch of sky with no stars in it\n\n1.4 What did the shape made by the lights remind Kira of?\nA) The bow of a ship\nB) A closed fist\nC) A hand held open`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5': `1.1 B, 1.2 C, 1.3 A, 1.4 C.\n\n1.1 B: "forty-seven days" is more than six weeks but less than seven.\n1.2 C: the stars were "fundamentally, impossibly wrong".\n1.3 A: Kira saw "a cluster of pale blue lights she had never seen before".\n1.4 C: the shape reminded her "of an open hand".`,
              'Grade 6-7': `1.1 B, 1.2 C, 1.3 A, 1.4 C.\n\n1.1 B: "forty-seven days" is six weeks and five days, so A is too short and C far too long.\n1.2 C: "fundamentally, impossibly wrong" means the change should not be possible. A and B reuse the source's own words ("subtly", "navigator"), but the writer uses them to say what the stars were not.\n1.3 A: "a cluster of pale blue lights she had never seen before" is in Orion's place, so B is wrong, and C is wrong because that part of the sky is not empty.\n1.4 C: "an open hand" is the opposite of a closed fist (B). A borrows "bow" from "the port bow", which is where Orion should have been, not what the shape looked like.`,
            },
            markScheme: [
              '1.1 B: the ship had been drifting for "forty-seven days", which is six weeks and five days.',
              '1.2 C: the stars were "fundamentally, impossibly wrong". A and B describe what the writer says they were not: "Not subtly wrong", and not the shift that "any navigator might expect".',
              '1.3 A: where Orion should have been there was "a cluster of pale blue lights she had never seen before". Orion itself was not there.',
              '1.4 C: the shape reminded her "of an open hand". The port bow is where Orion should have hung, not what the shape was like.',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-11-q2',
            questionNumber: 2,
            questionText: `Read the second and third paragraphs of the source again, from "She pulled up the star charts" to "holding its breath."\n\nHow does the writer use language in these lines to create a sense of unease and isolation?\n\nYou might write about:\n• the words the writer chooses\n• techniques such as repetition and personification\n• the length and shape of the sentences.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer uses the word "cold" to describe the glass of the console, which makes the ship feel unwelcoming. The screen "flickered, recalculated, flickered again" which shows the technology is struggling, creating unease. The message "POSITION UNKNOWN" is in capital letters to make it stand out and feel alarming, and it means the crew are lost, which makes them seem cut off and alone. Vasquez is taking "slow, deliberate breaths" so as not to panic, which makes the reader feel tense. The ship "holding its breath" is personification that makes the ship seem alive and scared too.`,
              'Grade 6-7': `The writer constructs unease through a layering of technological and human failure. The navigation console's response, "flickered, recalculated, flickered again", uses a tricolon of verbs that enacts the machine's uncertainty, the repetition of "flickered" framing the recalculation as futile. The message "POSITION UNKNOWN", printed in capitals and stripped to two words, reduces fifteen years of expertise to irrelevance and leaves the crew with no chart that can place them: they are as isolated as it is possible to be. The personification of the ship "holding its breath" collapses the boundary between human anxiety and mechanical environment, suggesting the vessel itself is sentient and afraid. Vasquez's "slow, deliberate" breathing is notable for what it conceals; the writer tells us these are breaths taken to suppress panic, making the controlled exterior a thin mask over terror. In "The silence on the bridge was absolute", the adjective "absolute" suggests not merely quiet but a void, and in that void the smallest sounds grow loud: Vasquez "breathing", and "the hum of the recycled air system", which "seemed louder than usual".`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'Small physical details, such as fingers "leaving faint smudges on the cold glass", make the bridge feel cold and unwelcoming.',
                'The screen "flickered, recalculated, flickered again": the repeated verb shows the machine failing, and ending on "flickered" again makes its effort seem useless.',
                'The message "POSITION UNKNOWN", in capitals and cut to two words, is stark, and it means the crew are lost: even "fifteen years of deep-space freight work" cannot place them.',
                '"The silence on the bridge was absolute" is a short sentence, and the adjective "absolute" makes the quiet total, so the smallest sounds grow loud, such as the air system that "seemed louder than usual".',
                'Vasquez takes "slow, deliberate breaths", the kind taken when "trying very hard not to panic", so the calm is a thin cover over fear.',
                'The ship "holding its breath" is personification: the whole vessel seems as afraid as the people on its bridge, alone together far from anywhere they know.',
              ],
            },
          },
          {
            id: 'aqa-p1-11-q3',
            questionNumber: 3,
            questionText: `This question is about the source as a whole, from its opening to its last line.\n\nHow does the writer use structure to create a sense of mystery?\n\nYou might write about:\n• what the opening focuses on, and what it makes you wonder about\n• where the writer moves your attention next, and why\n• how the source ends, and any other choices about order, pace or focus.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer creates mystery from the very first sentence, which tells us that Kira "first noticed the stars were wrong". We want to know why at once. The second paragraph moves our attention from the sky to the navigation console, but instead of an answer the screen shows "POSITION UNKNOWN", so the mystery gets bigger. In the third paragraph the writer slows down and describes the silence and Vasquez's breathing, which makes us wait for an explanation. The short dialogue shows that Vasquez has already "run it six times", so checking again will not solve anything. At the end the focus goes back to the blue lights, and Kira feels that something is "watching them". The source ends without telling us what it is, so the mystery is left open.`,
              'Grade 6-7': `The writer structures the source as a puzzle that grows with every attempt to solve it. The opening sentence saves its key fact for the end: after "forty-seven days" of drifting, Kira "first noticed the stars were wrong". Putting the problem in the first line hooks the reader at once, and the next sentence makes it worse by ruling out the ordinary explanation: the stars are "fundamentally, impossibly wrong".\n\nThe focus then narrows from the sky to the navigation console. This is where a mystery would usually begin to be explained, and the writer withholds the explanation: the machine's only answer, "POSITION UNKNOWN", placed after a colon at the very end of the paragraph, turns a strange sight into a total loss of bearings. The third paragraph slows the pace almost to a stop, with silence, breathing and the hum of the air system, so the reader waits with the crew for an answer that does not come.\n\nThe brief exchange that follows closes off the obvious solution. Kira's "Run it again" is met with "I've run it six times.", so the problem is not a simple fault, and the shortness of the dialogue after the long descriptive paragraphs suggests the characters have nothing more to say.\n\nFinally the writer returns the focus to the blue lights from the opening, which gives the source a circular shape, but the return brings a new and more disturbing question. The lights pulse "like a heartbeat", and Kira senses that something "had only now decided to let itself be seen". The ending explains nothing. It replaces the question of what has happened to the stars with the question of what is watching the crew, so the mystery is larger at the end of the source than at its start.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'The first sentence states the puzzle at once: after "forty-seven days" of drifting, Kira notices "the stars were wrong", and the source never explains why.',
                'The focus narrows from the sky to the console, and the machine\'s only answer, "POSITION UNKNOWN", deepens the mystery instead of solving it.',
                'The third paragraph slows the pace to silence and breathing, so the reader waits with the crew for an explanation that does not come.',
                'The short exchange ("Run it again" and "I\'ve run it six times.") shows that checking again will not help, which rules out a simple fault.',
                'The ending returns to the lights from the opening, but now they "pulsed gently" and something is "watching them": the source closes on a new, bigger question, with the mystery left open.',
              ],
            },
          },
          {
            id: 'aqa-p1-11-q4',
            questionNumber: 4,
            questionText: `Look only at the last three paragraphs of the source, from Kira's words "Run it again" to the end.\n\nOne reader commented: "The writer creates a growing sense of dread by making the unknown feel almost alive. The reader shares Kira's fear of something beyond understanding."\n\nHow far do you agree or disagree with this view? You may agree, disagree, or do some of each.\n\nIn your answer:\n• give your own view of the lights and what Kira senses, looking at what happens in these lines\n• explain how the writer's methods shape that view\n• support your points with short quotations from these lines.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I mostly agree with this view. The lights "pulsed gently, almost rhythmically, like a heartbeat", and the simile makes them seem alive, because stars do not have heartbeats. Kira then feels that "something out there in the black was watching them", which is frightening because it suggests the lights belong to something that can think. The phrase "decided to let itself be seen" is the scariest part, because it means the thing has been hiding and is now choosing to show itself. The dread also grows because Vasquez "did not move" and has already checked "six times", so even the crew cannot explain it.\n\nHowever, I do not completely agree that the reader shares Kira's fear in the same way. The writer calls her feeling an "irrational conviction", so we know it might not be true, and the word "almost" in "almost rhythmically" suggests the lights may not really be alive. I think the reader feels uneasy rather than terrified, because we are not sure whether Kira is right.`,
              'Grade 6-7': `I largely agree that the writer makes the unknown feel almost alive, but I think the reader's fear comes less from something "beyond understanding" than from the possibility that it understands the crew.\n\nThe dread does grow through these lines. They begin with failure: Kira's order, "Run it again", meets stillness ("Vasquez did not move") and a flat reply, "I've run it six times." The short exchange shows that the crew's methods have run out, so when Kira turns to the viewport the reader is ready to fear the worst. The writer then gives the lights the qualities of life. The simile "like a heartbeat" turns points of light into something with a pulse, and "gently" is unsettling rather than comforting, because gentleness suggests a choice, and whatever can choose to be gentle could choose otherwise.\n\nThe last sentence builds the dread step by step. Its three verb phrases, "was watching them", "had been watching them for a long time" and "had only now decided to let itself be seen", move from that moment back into the past and then to a deliberate choice, so each is more alarming than the one before. The verb "decided" gives the unknown a mind and a will, which supports the view that it feels alive.\n\nHowever, the writer also keeps the reader at a distance from Kira's fear. Her belief is a "sudden, irrational conviction", and the word "irrational" invites us to doubt it, just as "almost rhythmically" stops short of saying the lights truly beat. So the reader does not simply share Kira's certainty; we are left between her instinct and our own reason, and that uncertainty is what makes the ending frightening. The thing watching may not be beyond understanding at all: it seems to understand the crew well enough to choose its moment, and that is the fear the source leaves us with.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'Agree: the lights "pulsed gently, almost rhythmically, like a heartbeat", a simile that gives them the rhythm of a living body.',
                'Agree: "watching" and "decided" give the unknown a mind and a will, and "had been watching them for a long time" makes it older than the crew\'s discovery of it.',
                'Agree: the dread grows through the last sentence, whose verb phrases move from "was watching them" to "had only now decided to let itself be seen".',
                'Agree: the exchange before it raises the fear, since Vasquez "did not move" and has already run the check "six times".',
                'Weigh: "almost" and "irrational" keep doubt alive. Kira\'s "sudden, irrational conviction" is a feeling, not a fact, so the reader may share her fear while suspecting it is mistaken.',
                'Weigh: the something may not be "beyond understanding": it seems to understand the crew, choosing its moment "to let itself be seen", which is a different fear.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-11-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-11-q5',
            questionNumber: 5,
            questionText: `Your school library is putting together a collection of new science fiction writing by students, to be read by pupils of every age across the school.\n\nChoose ONE of these two tasks for the collection.\n\nEither:\n(a) Write a description of a place far out in space. On the real paper a picture is printed here, for ideas only. It shows the observation deck of a space station, looking out at a vast, swirling cloud of violet and gold light. You do not have to describe exactly what the picture shows.\n\nOr:\n(b) Write the opening of a story about a journey into the unknown.\n\nThis question is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its technical accuracy (spelling, punctuation, vocabulary and sentences).`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that does what the chosen task asks. For (a), it describes a place in space using the senses and a few deliberate techniques, such as a simile for the swirling light; for (b), it opens a story about a journey into the unknown, introduces a character and sets up a problem. It is organised in paragraphs, keeps a tone that suits pupils across the school, and is generally accurate, with some variety in sentences and vocabulary.',
              'Grade 6-7': `Task (b): the opening of a story about a journey into the unknown.\n\nOn the morning we crossed the edge of the map, my little brother asked whether space had a bottom.\n\n"Everything has a bottom," Jory decided, before anyone could answer. He pressed his nose to the porthole until his breath left a small, misty cloud on the glass. "Even the sea."\n\nNobody argued. Mum was at the controls, her eyes fixed on the screen where the last beacon blinked, and Dad was pretending to read, although he had not turned a page for an hour. I was supposed to be checking the water filters. Instead, like everyone else, I was watching the beacon.\n\nIt seemed too small a thing to have stopped so many ships. It was a silver buoy no bigger than a garden shed, turning slowly in the dark and repeating the message it had sent for three hundred years: the charts end here. Every ship that reached it had turned for home, except one. Gran's.\n\nI had grown up on the Kestrel. I knew every rivet and rattle of her: the way the heating sighed at night, the way the galley floor tilted slightly to the left, the way her engines hummed a little higher when she was tired. For as long as I could remember, she had carried us between the inner moons with seeds, spare parts and letters for people who still liked paper. She was not built for adventure. She was built for timetables.\n\nThen Gran's message arrived.\n\nIt had taken years to reach us from somewhere beyond the beacon, and it held one line of writing and a long string of numbers. Mum read the line aloud at the galley table, twice. Then she folded the printout into a tiny square and tucked it into her pocket, as if it might fly away. The line said: Come and see what I found.\n\nSo here we were.\n\n"Thirty seconds," Mum said quietly.\n\nDad closed his book. Jory stopped breathing on the glass. I laid my palm flat against the wall, the way you might steady a nervous horse, and felt the Kestrel tremble.\n\nThe beacon slid past us. For a moment its light flooded the cabin, and I could read the names painted along its side, the names of every crew that had come this far and no further. Then it was behind us, shrinking to a single star among millions, until I could no longer tell which one it was.\n\nAhead, the screen showed nothing at all. No routes. No names. No warnings. Only a darkness that went on and on, and somewhere inside it, a grandmother none of us had seen since I was three.\n\n"Well," said Dad, in his trying-to-be-cheerful voice. "That's that, then."\n\nJory turned away from the window. His face had gone serious, the way it does when he is working something out.\n\n"If space hasn't got a bottom," he said, "how will we know when we've arrived?"\n\nMum kept her eyes on the empty screen. I do not think she knew the answer. I do not think any of us did.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                "For (a), the picture is a starting point: the place could be the deck itself, a distant planet or the cloud of light, seen through one person's eyes.",
                'For (b), an opening needs to set up the journey and a question the reader wants answered; it does not need to reach an ending.',
                'Readers across the school, younger pupils among them, will enjoy wonder and suspense more than anything gruesome.',
                'Like the source, a strong piece might start with something familiar going quietly wrong, and slow down at its most important moment.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 12 - Southern Gothic
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-12',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-12-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_12_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-12-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Look back at the first paragraph of the source, from "The heat pressed down" to "like a warning."\n\nAnswer the four parts below. For each part, choose one letter only: A, B or C.\n\n1.1 What does the first sentence suggest about the weather in Jessamine County?\nA) It is heavy and very hot.\nB) A cool wind is blowing.\nC) It is cold and frosty.\n\n1.2 What has happened to the Boudreaux house over the years?\nA) It has been painted white again.\nB) It has been made much larger.\nC) Its paint has peeled and its wood has gone a dull, pale colour.\n\n1.3 Where does the wisteria grow?\nA) Over the roof of the house\nB) Up the pillars of the porch\nC) Along the drive\n\n1.4 What is the scent of the wisteria like?\nA) Sweet, but close to the smell of something going bad\nB) Fresh, like a warning that rain is coming\nC) Light, and carried far on the breeze`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5': `1.1 A, 1.2 C, 1.3 B, 1.4 A.\n\n1.1 A: the heat "pressed down" on the county "like a fist".\n1.2 C: "the paint curled and the wood turned the colour of old bone".\n1.3 B: "Wisteria climbed the porch columns".\n1.4 A: the scent is "sweet, heavy, almost rotten".`,
              'Grade 6-7': `1.1 A, 1.2 C, 1.3 B, 1.4 A.\n\n1.1 A: heat that "pressed down" like "a fist" is heavy and fierce, and the "motionless air" rules out a wind (B); nothing suggests cold (C).\n1.2 C: the house "had been white once, a long time ago", so A is a trap that reuses the word "white"; now the paint has "curled" and the wood is "the colour of old bone".\n1.3 B: the "porch columns" are the pillars of the porch. The drive (C) is not in these lines.\n1.4 A: "sweet, heavy, almost rotten" describes a sweetness that is turning bad. B takes "like a warning" from the source but adds freshness and rain, which are not there, and C is ruled out by the "motionless air".`,
            },
            markScheme: [
              '1.1 A: the heat "pressed down on Jessamine County like a fist", which suggests heavy, oppressive heat. The air is "motionless", so B is wrong.',
              '1.2 C: the house "had been white once", before "the paint curled and the wood turned the colour of old bone". A reuses "white", which describes the house long ago.',
              '1.3 B: "Wisteria climbed the porch columns". The drive is not mentioned in these lines.',
              '1.4 A: the scent is "sweet, heavy, almost rotten". B borrows "like a warning" but the scent is not fresh, and C is wrong because the air is "motionless".',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-12-q2',
            questionNumber: 2,
            questionText: `Read the second and third paragraphs of the source again, from "Emmeline Boudreaux sat on the porch" to "from the earth itself."\n\nHow does the writer use language in these lines to create a sense of stagnation (nothing moving or changing) and hidden menace?\n\nYou might write about:\n• the words the writer chooses\n• techniques such as similes and repetition\n• the length and shape of the sentences.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer creates stagnation by saying Emmeline "had not left this porch in eleven years", showing she is stuck in one place. The town's gossip about "what had happened to her husband" hints that something sinister lies behind her stillness. The road has nothing moving on it and even the dust from a truck hung "like the ghost of motion", a simile suggesting that even movement is dead here. The Spanish moss "draped like funeral lace" creates a sense of death. The oaks stood "utterly still" which adds to the feeling that nothing changes. The bullfrog's call coming "from the earth itself" makes the setting feel ancient and heavy.`,
              'Grade 6-7': `The writer creates an atmosphere where stagnation and menace are inseparable. The detail that Emmeline "had not left this porch in eleven years" transforms a domestic setting into a kind of imprisonment, while the town's whispered speculation about her husband, "where exactly he had gone", converts her stillness into something sinister. The simile "like the ghost of motion" is particularly effective, suggesting that even movement has died in this place; the noun "ghost" introduces the supernatural register that pervades the Southern Gothic tradition. The Spanish moss "draped like funeral lace" layers death imagery onto the natural landscape, the verb "draped" suggesting both deliberate decoration and the passive weight of grief. The repeated negatives, "Nothing moved" and "Nothing had moved on it since Tuesday", create a syntactic emptiness that mirrors the environmental stillness. The bullfrog's call, "a low, guttural sound that seemed to come from the earth itself", gives voice to the landscape, suggesting that whatever is buried here, in the earth or in the past, is not entirely silent.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'Emmeline "had not left this porch in eleven years": the exact figure turns her stillness into a kind of imprisonment.',
                'The town says "worse things, too, in low voices", and its rumours pile up, joined by "and", until nobody had found "so much as a belt buckle": the menace is hinted at, never stated.',
                '"Nothing moved on it." The short sentence is echoed by a longer one, "Nothing had moved on it since Tuesday", so the emptiness seems to stretch back for days.',
                'The dust hung "like the ghost of motion", a simile in which even movement seems to have died.',
                'The oaks stood "utterly still" and the moss "draped like funeral lace", bringing death into the landscape.',
                'The bullfrog\'s "low, guttural sound" seemed "to come from the earth itself", as if the land itself had something to say.',
              ],
            },
          },
          {
            id: 'aqa-p1-12-q3',
            questionNumber: 3,
            questionText: `This question is about the source as a whole, from its opening to its last line.\n\nHow does the writer use structure to build suspense?\n\nYou might write about:\n• what the opening focuses on, and what it makes you expect\n• where the writer moves your attention next, and why\n• how the source ends, and any other choices about order, pace or focus.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer starts with a wide view of the heat and the Boudreaux house, which is "patient as a spider", so from the opening we feel that the house is waiting for something. Then the focus moves to Emmeline and the town's rumours about "what had happened to her husband", which makes us want to know more, but the writer does not tell us. In the third paragraph the pace slows right down. The short sentences "She watched the road. Nothing moved on it." make us wait and watch the road with her. The writer even goes back to Tuesday, when a truck passed, which shows how long nothing has happened. At the end Emmeline says "He's coming back today," and the narrator calls her voice "completely terrifying". The source stops before anyone arrives, so the suspense is never released.`,
              'Grade 6-7': `The writer builds suspense by making the reader wait, and by placing every clue so that it points towards an event the source never shows.\n\nThe opening moves like a camera from the whole of Jessamine County to the house in the middle of it, and the details it lingers on are about waiting: the house sits "patient as a spider", and the scent of the wisteria hangs "like a warning". A warning is a sign of something still to come, so from the first paragraph the reader expects something to happen.\n\nThe second paragraph narrows the focus to Emmeline and then widens it to the town, whose rumours are the source's only hint of what may have happened. The writer lists the town's questions: what had happened to her husband, "where exactly he had gone", and why nobody had ever found "so much as a belt buckle". Then the source moves on without answering any of them. Withholding these answers is its main structural method.\n\nIn the third paragraph the pace almost stops. "She watched the road. Nothing moved on it." The short sentences, and the repetition in "Nothing had moved on it since Tuesday", stretch the waiting out, and the brief flashback to the red pickup truck, the last thing to move on the road, only makes the present stillness feel longer. The details that follow are still as well: the oaks stand "utterly still" and the moss hangs heavy on their branches.\n\nThe final paragraph is the shortest in the source, and it changes the pace completely. After so much description, Emmeline's single line of speech, "He's coming back today," arrives like a turning point, and "today" tells the reader that the waiting is about to end. Yet the source stops there. The narrator's verdict that her voice is "completely terrifying" closes it on a feeling rather than an event, so the suspense is left at its height, and the reader is left waiting, like Emmeline, for someone to appear on the empty road.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'The opening moves from the whole county to the house at its centre and dwells on waiting and warning: the house is "patient as a spider" and the scent hangs "like a warning", so the reader expects something to happen.',
                'The second paragraph narrows to Emmeline, then widens to the town\'s rumours about "what had happened to her husband", which raise questions the source never answers.',
                'The third paragraph slows almost to a stop: "She watched the road. Nothing moved on it." The reader waits with her.',
                "The flashback to Tuesday's pickup truck is the last movement on the road, and it is in the past, which makes the present stillness feel longer.",
                'The final paragraph is the shortest, and its one line of speech, "He\'s coming back today," promises an arrival that the source never shows.',
                'The source ends on the narrator\'s verdict, "completely terrifying", a feeling rather than an event, so the suspense is never released.',
              ],
            },
          },
          {
            id: 'aqa-p1-12-q4',
            questionNumber: 4,
            questionText: `Look only at the last two paragraphs of the source, from "She watched the road." to the end.\n\nOne reader commented: "The writer creates a disturbing sense that something terrible has happened in this place and that the past refuses to stay buried."\n\nHow far do you agree or disagree with this view? You may agree, disagree, or do some of each.\n\nIn your answer:\n• give your own view of Emmeline and the place around her, looking at what happens in these lines\n• explain how the writer's methods shape that view\n• support your points with short quotations from these lines.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I partly agree. The writer does make the place feel as if something terrible happened there. The dust from the truck hung "like the ghost of motion", and the word "ghost" makes us think of the dead. The Spanish moss "draped like funeral lace", which links the trees to a funeral. The bullfrog's call seemed "to come from the earth itself", which is creepy because it sounds as if something under the ground is calling out. When Emmeline says "He's coming back today," it seems the past is coming back too, and the narrator says her voice is "completely terrifying".\n\nHowever, the writer never tells us what actually happened, so we only suspect it. I also think Emmeline is the one keeping the past alive, because she watches the road and talks "to nobody". So I agree that the scene is disturbing, but the past does not come back on its own: it is Emmeline who will not let it go.`,
              'Grade 6-7': `I agree that these lines create a disturbing sense of a terrible past, but I would argue that the past does not so much refuse to stay buried as get kept alive, day after day, by Emmeline herself.\n\nThe setting in these lines is full of death. The dust that hung "like the ghost of motion" suggests that even movement has died here, and the noun "ghost" quietly introduces the idea of the dead returning. The oaks "stood utterly still", their moss draped "like funeral lace", so the landscape seems to be in mourning, as if it remembers something. The most suggestive image is the bullfrog's call, "a low, guttural sound that seemed to come from the earth itself". Placed at the end of the paragraph, it gives the ground a voice, and the reader cannot help wondering what the earth has to say. Here the view is strongly supported.\n\nHowever, the writer never states that anything terrible happened. The sense of horror is built from hints, and its power lies in what is left out: the reader has to supply the worst explanation, which is more disturbing than any fact. The view also overlooks Emmeline's part. She "watched the road" like someone keeping a vigil, and her words, "He's coming back today," are spoken "to nobody", in a voice that is "calm, certain". She is not haunted by the past so much as waiting for it, and it is her certainty that frightens us. The narrator's final judgement, "completely terrifying", comes last in a list of three, so the sentence moves from calm to fear in a few words.\n\nSo the writer does create the sense the view describes, but the most disturbing thing in these lines is not the buried past itself. It is Emmeline's calm belief that someone is coming back today, and our uncertainty about whether she is wrong.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'Agree: the dust hung "like the ghost of motion", and "ghost" brings the dead into the scene.',
                'Agree: the moss "draped like funeral lace" turns the landscape into a place of mourning.',
                'Agree: the bullfrog\'s call seemed "to come from the earth itself", as if the ground had something to tell.',
                'Agree: the narrator calls Emmeline\'s voice "completely terrifying", the last words of the source.',
                'Weigh: these lines never say what happened. The terrible event is suggested, not stated, so the reader may be more unsettled by not knowing than by any certainty.',
                'Weigh: the past does not rise up by itself here; Emmeline keeps it alive. She "watched the road" and speaks "to nobody", so the disturbance may come from her waiting.',
                'Weigh: her voice is "calm, certain", so she may simply be expecting someone, and the reader cannot tell whether to fear what is coming, pity her, or both.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-12-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-12-q5',
            questionNumber: 5,
            questionText: `Your local library is holding an evening of atmospheric writing read aloud, for an audience of teenagers and their families, and it has asked for new pieces.\n\nChoose ONE of these two tasks for the evening.\n\nEither:\n(a) Write a description of an old house that has been left to fall into ruin. On the real paper a picture is printed here, for ideas only. It shows a crumbling old house surrounded by an overgrown garden, in the hazy golden light of a late afternoon. You do not have to describe exactly what the picture shows.\n\nOr:\n(b) Write the opening of a story set in a place where the past and the present meet.\n\nThis question is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its technical accuracy (spelling, punctuation, vocabulary and sentences).`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that does what the chosen task asks. For (a), it describes the house and garden using the senses, with a few deliberate techniques such as similes for the decay; for (b), it opens a story in a place where something from the past returns, introduces a character and sets up a question. It is organised in paragraphs, keeps a tone suited to listeners of mixed ages, and is generally accurate, with some variety in sentences and vocabulary.',
              'Grade 6-7': `Task (a): a description of an old house that has been left to fall into ruin.\n\nThe gate still opens, although nobody has asked it to for years.\n\nIt swings inward with a long, rusty groan, and the garden swallows the sound. Late sunlight lies over everything like warm syrup, turning the seed heads of the tall grass to gold. Brambles have tied the path in knots. A stone birdbath stands waist-deep in nettles, holding a disc of green rainwater and the reflection of one small cloud.\n\nFurther in, the garden begins to remember what it used to be. Here is a rose, gone wild, its flowers small and fierce and the colour of jam. Here is a bench, its slats silvered by the weather, with a ring of moss where a cup was once set down. Bees drift between the foxgloves, heavy and unhurried, as if they have all the time in the world. Perhaps they have.\n\nThen the house rises out of the green.\n\nIt leans a little, like an old man straining to hear. Ivy has climbed to the roof and is prising the tiles loose one by one, as patiently as someone unpicking a jumper. Half the windows are blind with dust; the others are simply empty, and the curtains behind them hang in rags that stir when there is no wind to stir them. Above the porch, a carved stone gives the year the house was built: 1887. Someone was proud of this house once. You can tell from the care in the lettering.\n\nThe front door stands ajar. I step inside, and the air is cool and smells of damp paper and old soot. Light falls through a hole in the ceiling in a single slanting beam, and dust turns in it slowly, like snow that cannot decide whether to land. The wallpaper has peeled away in long curls, showing older paper underneath: roses again, and beneath those, small blue birds that someone chose a hundred years ago.\n\nOn the mantelpiece stands a clock, its hands stopped at twenty past four. Beside it, a china dog gazes out at the room with the faded, loyal patience of something that has waited a very long time for its owner to come home.\n\nOutside, the light is changing. The gold drains from the grass, and the shadows of the trees stretch across the lawn towards the house, as though they are reaching for it. A blackbird starts up in the hedge, sharp and bright, and stops just as suddenly. In the silence afterwards, the house creaks. It is only the old timbers cooling and settling. It is only that.\n\nBy the time I reach the gate again, the windows have gone dark. The house is a black shape against a sky of fading orange, and the garden is closing behind me, stem by stem, like a curtain being drawn.\n\nThe gate swings shut. This time, it makes no sound at all.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'For (a), the description could take the reader from the gate to the door, or watch one room as the light fades: the picture is a starting point, not a list to work through.',
                'For (b), the opening needs to set up the meeting of past and present, through an old photograph, a voice or a returning visitor perhaps, and leave the reader wanting more.',
                'Writing to be read aloud rewards a strong first line, clear paragraphs and moments of quiet: atmosphere matters more than shocks.',
                'Like the source, a strong piece might use stillness, sound and small details of decay to suggest more than it says.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 13 - Adventure
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-13',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-13-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_13_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-13-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Look back at the first paragraph of the source, from "The rope bridge swayed" to "she could not afford."\n\nAnswer the four parts below. For each part, choose one letter only: A, B or C.\n\n1.1 What sound do the planks of the bridge make?\nA) None at all\nB) A sharp crack, like a stick snapping\nC) A low moaning sound, as if they were alive\n\n1.2 Where is the river?\nA) A long way below Maren\nB) Just under her boots\nC) Level with the bridge\n\n1.3 What does the noise of the river do?\nA) It helps Maren to think clearly.\nB) It drowns out any attempt to speak.\nC) It fades away after a moment.\n\n1.4 What has Maren learned from three weeks of crossing bridges like this one?\nA) That she must keep her eyes off the drop\nB) That looking down helps her to keep her balance\nC) That bridges like this one are always safe`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5': `1.1 C, 1.2 A, 1.3 B, 1.4 A.\n\n1.1 C: "each plank groaning like a living thing".\n1.2 A: the river is "far, far below".\n1.3 B: the roar "made thought difficult and speech impossible".\n1.4 A: "looking down was a luxury she could not afford".`,
              'Grade 6-7': `1.1 C, 1.2 A, 1.3 B, 1.4 A.\n\n1.1 C: "groaning like a living thing" is a low, moaning sound, so the planks are far from silent (A), and nothing suggests a crack (B).\n1.2 A: "far, far below" stresses the distance. B is a trap: it is the bridge that sways "beneath Maren's boots", not the river.\n1.3 B: "speech impossible" means nobody can be heard, and the roar is "ceaseless", so it does not fade (C); it made thought "difficult", not clear (A).\n1.4 A: she "did not look down" because looking down was "a luxury she could not afford". B repeats the words "looking down" but reverses what she learned.`,
            },
            markScheme: [
              '1.1 C: each plank was "groaning like a living thing".',
              '1.2 A: the river is "far, far below". B borrows the bridge "beneath Maren\'s boots", but that is the bridge, not the river.',
              '1.3 B: the roar "made thought difficult and speech impossible", and it is "ceaseless", so C is wrong.',
              '1.4 A: she has learned "that looking down was a luxury she could not afford". B reuses "looking down" but says the opposite.',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-13-q2',
            questionNumber: 2,
            questionText: `Read the second and third paragraphs of the source again, from "Ahead, the far cliff face" to "slamming against her ribs."\n\nHow does the writer use language in these lines to show danger and Maren's physical vulnerability?\n\nYou might write about:\n• the words the writer chooses\n• techniques such as precise detail and personification\n• the length and shape of the sentences.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer uses a precise measurement, "a drop of two hundred feet", to make the danger feel real. The path is described as "barely wide enough for one person" which makes the reader imagine how narrow and dangerous it is. When the plank shifts, the phrase "one terrible second" uses the adjective "terrible" to show how frightening the moment is. "Her stomach dropped" is a short sentence and a physical description that helps the reader feel the fear in their own body. The sentence beginning "Then the plank settled" gives brief relief, but it ends with "her heart slamming against her ribs", which shows the fear has not gone away.`,
              'Grade 6-7': `The writer creates an almost unbearable sense of physical exposure through precise spatial language. The path is defined by what flanks it, "a drop of two hundred feet on the left side and sheer cliff on the right", which makes the way ahead of her a corridor of danger, where one wrong step could end in a fall. The parenthetical "if you could call it a path" undermines even the meagre reassurance of a named route, the conditional clause performing the same uncertainty Maren experiences. At the moment of crisis, the verbs "shifted, tilted" sit side by side with no conjunction, which accelerates the prose and mimics the sudden loss of stability. The phrase "felt her weight swing out over the void" is viscerally effective: "swing" implies helpless momentum, while "the void" elevates a physical drop into something existential. The bodily responses come in two declarative sentences, each beginning with "Her", that enact the contraction of consciousness to pure physical reflex: the three words of "Her stomach dropped." are as abrupt as the lurch they describe, and the next, "Her fingers tightened until the rope bit into her palms", stretches out as long as her grip does. The verb "bit" personifies the rope as something that wounds even as it saves, suggesting that survival itself is painful.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'The path is "barely wide enough for one person", with "a drop of two hundred feet on the left side" and "sheer cliff on the right": danger on both sides leaves no safe place to step.',
                'The aside "if you could call it a path" undermines even the name of the route.',
                'The verbs "shifted, tilted" sit side by side with no "and" between them, so the plank moves before the reader can take it in, and "one terrible second" then stretches time out.',
                'In "swing out over the void", "swing" suggests helpless movement, and "the void" makes the drop seem bottomless.',
                '"Her stomach dropped." is three words long, as sudden as the lurch it describes; the next sentence stretches out as her grip tightens.',
                'The rope "bit into her palms", personification that makes even the thing saving her hurt her, and her "heart slamming against her ribs" shows the fear outlasting the danger.',
              ],
            },
          },
          {
            id: 'aqa-p1-13-q3',
            questionNumber: 3,
            questionText: `This question is about the source as a whole, from its opening to its last line.\n\nHow does the writer use structure to create tension?\n\nYou might write about:\n• what the opening focuses on, and how it makes you feel\n• where the writer moves your attention next, and why\n• how the source ends, and any other choices about order, pace or focus.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer begins with Maren already on the bridge, which puts the reader straight into a tense situation. The first paragraph makes us aware of the danger below, the river "far, far below", but then Maren "did not look down", so the writer moves our attention away from the drop. The second paragraph looks ahead to the path, which "disappeared around a bend", so we cannot see what is coming, and that keeps us tense. The third paragraph is the most tense part, because the plank shifts and Maren nearly falls. The short sentence "Her stomach dropped." speeds up the moment. When the plank settles we relax a little, but not for long. The final paragraph introduces Tomas, but Maren cannot tell if his raised hand is a warning, which adds to the tension. The source ends with her still walking, so the danger is not over.`,
              'Grade 6-7': `The writer builds tension through careful control of pace and of where the reader is made to look. The source opens in medias res: we join Maren mid-crossing, already committed, which denies both character and reader the comfort of preparation. The focus is first downward, to the river "far, far below", before the discipline of "She did not look down." redirects attention forward. The second paragraph shifts to what lies ahead, but the path "disappeared around a bend", so the writer withholds what comes next and the uncertainty is sustained.\n\nThe third paragraph is the structural climax. The pace quickens as the plank "shifted, tilted", then time is stretched into "one terrible second", and the short sentence "Her stomach dropped." follows before the release of "Then the plank settled". This tightening and loosening of pace is the source's main structural engine.\n\nThe final paragraph introduces Tomas, another human presence, as a possible source of help, but his gesture is ambiguous ("she couldn't tell which"), so the reader is refused reassurance. The closing sentence, "She faced forward again and kept walking.", is a plain statement that refuses a climax: the crossing is not over, and the tension is left running beyond the end of the source.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'The source opens in the middle of the crossing: Maren is already on the bridge, so the reader is placed in danger from the first sentence.',
                'The focus moves down to the river and is then pulled away ("She did not look down."), and in the second paragraph forward to a path that "disappeared around a bend": the reader cannot see what is coming.',
                'The third paragraph is the climax: the pace quickens as the plank "shifted, tilted", time seems to stretch in "one terrible second", and the short sentence "Her stomach dropped." follows.',
                'The plank "settled", but the relief is brief: her heart is still "slamming against her ribs".',
                'The last paragraph turns to Tomas, but his signal is unclear ("she couldn\'t tell which"), so the reader is given no reassurance.',
                'The ending, "She faced forward again and kept walking.", resolves nothing: the crossing, and the tension, go on.',
              ],
            },
          },
          {
            id: 'aqa-p1-13-q4',
            questionNumber: 4,
            questionText: `Look only at the last two paragraphs of the source, from "She gripped the rope rail" to the end.\n\nOne reader commented: "The writer makes the reader experience the physical danger as though they are on the bridge themselves. You can feel every moment of Maren's fear."\n\nHow far do you agree or disagree with this view? You may agree, disagree, or do some of each.\n\nIn your answer:\n• give your own view of the danger Maren faces and how she responds, looking at what happens in these lines\n• explain how the writer's methods shape that view\n• support your points with short quotations from these lines.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I agree that the writer makes you feel the danger. When the plank "shifted, tilted", the short words make you feel the sudden movement. "Her stomach dropped" is a feeling everyone knows, so it puts you in Maren's position. The phrase "swing out over the void" is frightening because "the void" suggests complete emptiness below.\n\nHowever, I do not think we feel her fear at every moment. Maren is brave: she keeps going even after the terrifying moment, and the ending, where she "faced forward again and kept walking", shows determination more than fear. So I agree that we feel the danger, but by the end her courage has taken over from her fear.`,
              'Grade 6-7': `I agree that the writer achieves a remarkable degree of physical immersion, though I would argue that the passage's power lies not just in the rendering of fear but in the tension between fear and will.\n\nThe moment of crisis is rendered with great physical precision: the plank "shifted, tilted, and for one terrible second" she "felt her weight swing out over the void". The syntax performs the experience. The verbs "shifted, tilted", with no conjunction between them, rush towards the phrase where time stretches ("one terrible second"), and "swing" captures the sickening momentum of a body losing its balance. The reader's body responds before their mind does, which is how physical danger works. The rope that "bit into her palms" is a sharp sensory detail that makes pain the price of survival, and when the plank settles she is left "breathing hard, her heart slamming against her ribs", so the fear lingers after the danger has passed.\n\nHowever, I would partly challenge the claim that the reader feels "every moment" of fear. Some of the fear is reported from outside rather than lived from within: "breathing hard" tells us about her body, not her thoughts. The final paragraph also turns from feeling to action. When Maren cannot tell whether Tomas's raised hand is "Warning or encouragement", she does not try again but faces forward, a deliberate narrowing of attention that shuts out everything except the next step. Its calm last sentence, "She faced forward again and kept walking.", replaces fear with steady resolve.\n\nSo the writer does make us feel the danger as if we were on the bridge, but the passage is as much about controlling fear as feeling it, and by the end it is Maren's determination, not her fear, that the reader shares.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'Agree: "shifted, tilted, and for one terrible second" moves as fast as the plank and then slows time down, so the reader lives the moment with her.',
                'Agree: the body tells the story: "Her stomach dropped." and "the rope bit into her palms" are sensations the reader can almost feel.',
                'Agree: even after the plank "settled", she is "breathing hard, her heart slamming against her ribs", so the fear lingers.',
                'Weigh: the last paragraph moves from feeling to action. She cannot tell whether Tomas\'s raised hand means "Warning or encouragement", and she simply "faced forward again and kept walking".',
                'Weigh: the reader does not feel "every moment" from the inside. Some of the fear is reported ("breathing hard"), and the source ends on calm determination, so the reader may admire her courage as much as share her fear.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-13-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-13-q5',
            questionNumber: 5,
            questionText: `An outdoor activity centre is making a booklet of writing by young people, to give to the families and school groups who visit it for climbing, canoeing and hill walking.\n\nChoose ONE of these two tasks for the booklet.\n\nEither:\n(a) Write a description of a high and dangerous place. On the real paper a picture is printed here, for ideas only. It shows the view from a mountain ridge down into a vast valley filled with cloud, with a narrow trail running along the edge of a cliff. You do not have to describe exactly what the picture shows.\n\nOr:\n(b) Write the opening of a story about a character who must face their greatest fear.\n\nThis question is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its technical accuracy (spelling, punctuation, vocabulary and sentences).`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that does what the chosen task asks. For (a), it describes the high place through sight, sound and touch, with a few deliberate techniques such as similes for the cloud or the drop; for (b), it opens a story by showing a character and the fear they must face, and sets up the moment of facing it. It is organised in paragraphs, keeps a tone that suits families and school groups, and is generally accurate, with some variety in sentences and vocabulary.',
              'Grade 6-7': `Task (b): the opening of a story about a character who must face their greatest fear.\n\nThere are one hundred and twelve steps up to the top of Raven Crag, and I counted every one of them.\n\nAt the bottom, everything had seemed possible. Gareth, our instructor, had checked our harnesses, tugging each strap until it pinched, and told us that the rope could hold a small car. Ellie had said that was a relief, because she had been planning to bring one, and I had laughed. I had laughed at everything. That was before the steps.\n\nNow I stood on the flat grey rock at the top, and the world fell away in front of me.\n\nThe valley was so wide that it did not look real. Fields lay stitched together in a hundred shades of green, and the lake was a sliver of tin, so far below that the boats on it looked like seeds. A buzzard hung in the air beneath my feet. Beneath my feet. I had never been above a bird before, and the thought made my stomach turn over slowly, like a pancake in a pan.\n\n"Lovely day for it," said Gareth, as cheerfully as if we were waiting for a bus.\n\nHe clipped the rope to my harness with a click that sounded much too small. Then he talked me through it again: feet apart, lean back, let the rope take your weight, walk yourself down. He made it sound as easy as tying a shoelace.\n\nI nodded. I had been nodding all morning. My mouth had gone dry, and inside the borrowed gloves my hands were slippery with sweat.\n\nThe thing is, I have always been afraid of heights. Not the ordinary kind of afraid, where you feel a bit wobbly on a balcony, but the kind that lives in your knees and turns them to water. At Gran's flat I will not stand near the window. On the big wheel at the fair, when I was eight, I kept my eyes shut for the whole ride and missed the fireworks. Everyone knows. That was why I had said yes to the abseil, in a loud voice, in front of the whole class, before I could change my mind.\n\n"When you're ready," said Gareth. "No rush."\n\nI shuffled backwards until my heels met the edge. Behind me there was nothing. I could feel it, the nothing, cold against the backs of my legs, as if the air itself were waiting to see what I would do.\n\nThe wind tugged at my helmet. Somewhere far below, a sheep complained. Ellie gave me two thumbs up from behind the safety rail, and her face was so full of hope that I almost laughed again.\n\nLean back, I told myself. Just lean back.\n\nI took a breath that went all the way down to my boots. I fixed my eyes on the knot at my waist, the one Gareth had tied in the rope that could hold a small car.\n\nThen, very slowly, I leaned back into the empty air.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'For (a), the description could stand the reader on the ridge, or follow the trail into the cloud: the picture is a starting point, and the place can be imagined.',
                'For (b), the opening needs to make the fear clear and set up the moment of facing it; the story does not have to be finished.',
                'Readers who climb and walk will notice whether the physical details ring true: weather, height, footholds, breath.',
                'Like the source, a strong piece might slow down at its most frightening moment and move quickly around it.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 14 - Social Realism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-14',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-14-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_14_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-14-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Look back at the first two paragraphs of the source, from "The interview room smelled" to "too complicated for anyone's."\n\nAnswer the four parts below. For each part, choose one letter only: A, B or C.\n\n1.1 What does the woman's smile suggest?\nA) She is delighted to meet Ryan.\nB) Her friendliness is not sincere.\nC) Her eyes are smiling but her mouth is not.\n\n1.2 Why did Ryan once have to carry his mother up the stairs?\nA) The lift in their block was out of order.\nB) She wanted to see the view from the top.\nC) The stairs had been broken for six weeks.\n\n1.3 What was wrong with the shoes Ryan wore to walk his sister to school?\nA) They were a size too small.\nB) They were held together with string.\nC) The sole of a shoe was coming loose.\n\n1.4 Why did Ryan explain the forms to his nan at the Jobcentre?\nA) She had asked him to fill them in for her.\nB) The writing was too small for her to read and too hard to follow.\nC) The Jobcentre staff had asked him to help.`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5': `1.1 B, 1.2 A, 1.3 C, 1.4 B.\n\n1.1 B: she "smiled with her mouth but not her eyes".\n1.2 A: "the lift in their tower block had been broken for six weeks".\n1.3 C: "the sole had come away from the upper".\n1.4 B: "the print was too small for her eyes".`,
              'Grade 6-7': `1.1 B, 1.2 A, 1.3 C, 1.4 B.\n\n1.1 B: a smile "with her mouth but not her eyes" is polite but not warm. C uses the same words the wrong way round: it is her eyes that do not smile.\n1.2 A: the "lift" had been "broken for six weeks". C borrows those words but attaches them to the stairs, which Ryan used.\n1.3 C: the sole "had come away from the upper", so the shoes were "held together with tape", not string (B), and nothing is said about their size (A).\n1.4 B: "the print was too small for her eyes", and the language "too complicated". Nothing suggests that she asked him to fill the forms in (A), or that the staff asked him to help (C).`,
            },
            markScheme: [
              '1.1 B: she "smiled with her mouth but not her eyes", which suggests the smile is put on. C reverses the words of the source.',
              '1.2 A: "the lift in their tower block had been broken for six weeks". C is a trap: it was the lift that was broken, not the stairs.',
              '1.3 C: "the sole had come away from the upper". The shoes were held together with "tape", not string (B).',
              '1.4 B: "the print was too small for her eyes and the language was too complicated for anyone\'s".',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-14-q2',
            questionNumber: 2,
            questionText: `Read the second paragraph of the source again, from "Ryan looked at her." to "too complicated for anyone's."\n\nHow does the writer use language in this paragraph to present Ryan's real experiences of responsibility?\n\nYou might write about:\n• the words the writer chooses\n• techniques such as repetition and precise detail\n• the length and shape of the sentences.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer uses specific details to make Ryan's experiences feel real and moving. He "carried his mother up two flights of stairs" which shows physical strength and caring for his family. His shoes were "held together with tape" and he had to walk in "a particular shuffling way", and these details show poverty in a very personal way. At the Jobcentre, he spent "three hours" explaining forms to his nan, which shows patience and kindness. The repetition of "He thought about" at the start of three sentences in a row creates a list that builds up, showing how much responsibility he carries.`,
              'Grade 6-7': `The writer presents Ryan's genuine leadership through a three-part anaphoric structure, "He thought about", that creates a cumulative catalogue of invisible labour. Each memory constitutes an authentic act of leadership that the interview question fails to recognise: physical care (carrying his mother), self-sacrifice (walking in broken shoes), and advocacy (translating bureaucratic language for his nan). The detail of the shoes is particularly powerful: "held together with tape" is precise and unglamorous, while the "particular shuffling way to stop the flapping noise" reveals a person who has learned to manage embarrassment: the flapping would draw attention, and Ryan's adaptation is both practical and dignified. The Jobcentre scene subtly indicts institutional failure: "the print was too small for her eyes and the language was too complicated for anyone's." The shift from the specific ("her eyes") to the universal ("anyone's") transforms a personal difficulty into a systemic critique. The paragraph's power lies in how much Ryan thinks and how little of it he says aloud: all of it happens in silence, while he "looked at her".`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                '"He thought about" opens three sentences in a row: the repetition builds a list of the care Ryan gives, none of which he says aloud.',
                'Exact details make each memory real: "two flights of stairs", a lift "broken for six weeks", "three hours" at the Jobcentre.',
                'Shoes "held together with tape" and the "particular shuffling way" he walked "to stop the flapping noise" show him quietly managing a hardship he cannot fix.',
                'After the short "Ryan looked at her.", three long sentences each turn on "because", naming the problem behind each thing he had to do.',
                'The last clause widens from "her eyes" to "anyone\'s": the forms would defeat anybody, which makes Ryan\'s help look all the more capable.',
              ],
            },
          },
          {
            id: 'aqa-p1-14-q3',
            questionNumber: 3,
            questionText: `This question is about the source as a whole, from its opening to its last line.\n\nHow does the writer use structure to make the reader feel sympathy for Ryan?\n\nYou might write about:\n• what the opening focuses on, and how it makes you feel about Ryan's situation\n• where the writer moves your attention next, and why\n• how the source ends, and any other choices about order, pace or focus.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer starts in the interview room, with the woman asking Ryan about "leadership skills". Because the question comes first, we meet Ryan as someone being judged. The second paragraph moves into his memories: carrying his mother upstairs, walking his sister to school in taped-up shoes and helping his nan at the Jobcentre. These make us like and admire him, so we feel for him when he only says "I was captain of the football team at school". This line is in a paragraph of its own, which makes the gap between what he has done and what he says stand out. Then the writer moves our attention to the woman typing and the poster saying YOUR FUTURE STARTS HERE, which feels unfair after what we know. At the end, the focus moves out of the window to the estate where he has always lived, and the tower blocks are compared to "a row of filing cabinets". This makes us feel sorry for Ryan, because it seems as if he is just a file to the people judging him.`,
              'Grade 6-7': `The writer structures the source around the gap between how the system sees Ryan and who he really is, and each shift of focus widens that gap, so the reader's sympathy grows.\n\nThe opening places us in the interview room before we know anything about Ryan. The details are flat and impersonal, "instant coffee and carpet tiles", and the first words spoken are the interviewer's, asking about "leadership skills". The reader first sees Ryan, then, as the system does: a candidate to be assessed.\n\nThe second paragraph reverses that view. The writer moves inside Ryan's thoughts, and three memories, each opened by "He thought about", show the care he gives his mother, his sister and his nan. Placing these unspoken memories between the question and his reply is the source's key structural choice: the reader now knows more about Ryan than the woman across the desk ever will, and that knowledge puts us on his side.\n\nThe reply is then given a paragraph of its own: "I was captain of the football team at school," he said. Isolated like this, the short line lands with force. After everything he has carried, he offers the one answer he thinks the system wants, and the contrast between what we know and what he says is where our sympathy is sharpest.\n\nThe focus then turns away from Ryan to the woman, who "typed something", and to the poster promising YOUR FUTURE STARTS HERE above a man who looks as if he has "never once worried about the price of electricity". The reader measures both against what the second paragraph showed.\n\nFinally the source moves outward, through the window and across the car park and the retail park to the Hayfield Estate where Ryan "had lived for all nineteen years of his life". This widening view shows the life he will return to whatever happens in the room, and the closing simile, "like a row of filing cabinets", ends the source on an image of people stored away in a system. The reader is left feeling for Ryan, not because he has failed the interview, but because the interview was never able to see him.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                "The opening sets the scene in the interview room and gives the woman's question first, so the reader meets Ryan through the system that is judging him.",
                'The second paragraph moves inside his head: three memories of care that the reader learns and the interviewer never will, which puts the reader on his side.',
                'His reply, "I was captain of the football team at school," has a paragraph to itself; after all he has done, the small answer makes the reader feel for him.',
                'The focus then moves to the woman, who "typed something", and to the poster\'s promise, YOUR FUTURE STARTS HERE, which the reader sets against what Ryan\'s life is like.',
                'The last paragraph moves outward through the window to the tower blocks where he had lived "for all nineteen years of his life", the place he will go back to.',
                'The closing simile, "like a row of filing cabinets", leaves the reader with the sense that Ryan, too, has been filed away.',
              ],
            },
          },
          {
            id: 'aqa-p1-14-q4',
            questionNumber: 4,
            questionText: `Look only at the last three paragraphs of the source, from "I was captain of the football team at school" to the end.\n\nOne reader commented: "The writer makes the reader feel angry on Ryan's behalf. The system is shown to be completely blind to who he really is."\n\nHow far do you agree or disagree with this view? You may agree, disagree, or do some of each.\n\nIn your answer:\n• give your own view of Ryan and the interview, looking at what happens in these lines\n• explain how the writer's methods shape that view\n• support your points with short quotations from these lines.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I mostly agree. The woman "typed something" without really reacting, which shows the interview is just a process. The poster of a smiling man in a hard hat feels fake next to Ryan's real life, because the man "looked like he had never once worried about the price of electricity". Ryan's shirt is "borrowed from his uncle, slightly too large", which shows he has had to borrow a shirt to look the part, and the tower blocks are compared to "a row of filing cabinets", as if the people there are just files. All of this made me angry for Ryan.\n\nHowever, I do not think the system is completely blind. Ryan chooses to say "I was captain of the football team at school" instead of talking about his real responsibilities, so the woman never hears about them. Also, the writer's tone is quiet, with the keyboard clicking "softly", so I felt sad for Ryan as much as angry.`,
              'Grade 6-7': `I largely agree, though I would argue that the writer creates something more complex than simple anger: a quiet frustration that the reader shares because we can see what the interview cannot.\n\nThe line "The woman typed something." is devastating in its dismissiveness. The indefinite "something" reduces Ryan's carefully chosen answer to data, and the keyboard that "clicked softly" makes the dismissal sound routine. The poster works as bitter satire. Its slogan, YOUR FUTURE STARTS HERE, is printed above a man who looks as if he has "never once worried about the price of electricity", and the specific word "electricity" grounds the criticism in the everyday cost of being poor. Ryan's shirt, "borrowed from his uncle, slightly too large", is a symbol of the whole situation: he is trying to fit a shape made for someone else.\n\nHowever, I would question the word "completely". The system is not shown to be cruel, and the woman is not unkind; the problem is that the interview's categories have no room for the care the reader has seen Ryan give. Ryan also plays a part in his own invisibility. He chooses the answer he thinks the system wants, "I was captain of the football team at school", and the writer lets that choice stand without comment, which makes the reader feel for him rather than simply blame the interviewer. The tone of these lines is restrained, with a light that buzzes "like a trapped insect" and a keyboard clicking softly, so the reader's anger is muted into something closer to sadness.\n\nThe final image is where the view is most strongly supported. Seen through the window, the tower blocks where he "had lived for all nineteen years of his life" rise "like a row of filing cabinets", which suggests that the failure to see Ryan is built into the place itself. So the reader may well feel angry, but the anger is directed less at one woman with a keyboard than at a whole system that files people away.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'Agree: "The woman typed something." The vague "something" suggests his answer is recorded, not heard.',
                'Agree: the man on the poster, smiling beneath YOUR FUTURE STARTS HERE, "looked like he had never once worried about the price of electricity", which mocks the gap between the agency\'s promise and Ryan\'s life.',
                'Agree: the borrowed shirt, "slightly too large", shows him trying to fit a shape made for someone else.',
                'Agree: the tower blocks rise "like a row of filing cabinets", an image of people stored away and forgotten.',
                'Weigh: the system cannot see him partly because Ryan does not show himself: he chooses to answer "I was captain of the football team at school".',
                'Weigh: the tone is quiet rather than angry: the keyboard "clicked softly" and the light buzzes "like a trapped insect", so the reader may feel sadness and frustration more than anger.',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-14-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-14-q5',
            questionNumber: 5,
            questionText: `Your local newspaper is printing a page of writing by young people about everyday life, and most of its readers are adults who live in the area.\n\nChoose ONE of these two tasks for the page.\n\nEither:\n(a) Write a description of a busy waiting room. On the real paper a picture is printed here, for ideas only. It shows a crowded waiting room in a public building, with rows of plastic chairs, bright strip lights and a ticket machine showing the number 47. You do not have to describe exactly what the picture shows.\n\nOr:\n(b) Write the opening of a story about a character who is not what they first appear to be.\n\nThis question is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its technical accuracy (spelling, punctuation, vocabulary and sentences).`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that does what the chosen task asks. For (a), it describes the waiting room through sight and sound, with a few deliberate techniques such as similes for the lights or the noise; for (b), it opens a story by giving a first impression of a character and a hint that it is wrong. It is organised in paragraphs, keeps a tone that suits adult newspaper readers, and is generally accurate, with some variety in sentences and vocabulary.',
              'Grade 6-7': `Task (a): a description of a busy waiting room.\n\nThe red number above the counter says 47. My ticket says 63.\n\nBetween those two numbers lie the whole afternoon and about forty people, every one of them doing their best not to look bored.\n\nThe room is long and low, with a ceiling of square tiles and strip lights that hum like an argument in the next room. Their light is the flat white of a fridge, and it makes everybody look slightly unwell. The plastic chairs are bolted together in rows, so that when the man at the end of mine shifts his weight, all of us rock gently with him, like passengers in a small boat.\n\nNobody says much. Instead the room is full of small sounds: the rustle of a crisp packet, a cough, a pen tapping on a folder, and the soft chime each time the number changes. At every chime, forty heads lift together, like birds at a feeder, and forty heads sink again.\n\nI start to notice the people.\n\nIn the front row sits an old man in a tweed jacket that is too warm for the day. He holds his ticket in both hands on his knee, the way you might hold a hymn book. His shoes have been polished until they shine. Whatever he has come here to sort out, he has dressed for it, and something about that makes me sit up straighter.\n\nTwo seats along, a young mum is losing a quiet battle with a toddler in a yellow raincoat. He wants to be on the floor; she wants him on her lap. They settle it with a box of raisins, eaten one at a time, very slowly, while she reads the same page of a leaflet again and again without turning it over.\n\nBy the window, a woman in a care worker's tunic has fallen asleep sitting upright, her lanyard still round her neck. Her phone glows in her lap with messages she has not seen. I wonder how long her last shift was, and how soon the next one starts.\n\nThe number changes. 48.\n\nOutside, it has started to rain. Drops gather on the glass and slide down in crooked lines, and the car park beyond them blurs into grey and silver. The radiator under the window ticks and gurgles. A door opens somewhere, letting in a breath of cold air and the smell of wet pavements, and closes again.\n\nThe number changes. 49.\n\nA boy in a school blazer is doing his homework on his knee, his tongue caught between his teeth. Beside me, a woman tells someone on the phone that she will be home in ten minutes, although the ticket in her hand says 71. The toddler has fallen asleep at last, a raisin still in his fist, and his mother closes her eyes for a moment, as if she has been handed a present.\n\nI look down at my ticket. 63. It is going to be a long afternoon. But looking round at the polished shoes and the sleeping carer and the boy with his homework, I find that I do not mind as much as I did.\n\nThe machine chimes. Forty heads lift as one.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'For (a), the description could focus on a few of the people waiting and what their faces, hands and belongings suggest: the picture is a starting point, not a list.',
                'For (b), the opening needs to give a first impression of the character and hint that it is wrong; the story does not have to be finished.',
                'Adult newspaper readers will value precise, true-sounding detail and a tone that respects the people described.',
                'Like the source, a strong piece might set what a character says against what they think, or let one small object stand for a whole life.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 15 - Stream of Consciousness
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p1-15',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-15-reading',
        title: 'Section A: Reading',
        description: `${SECTION_A_GUIDANCE}\n\nSource: ${EXTRACT_15_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-15-q1',
            questionNumber: 1,
            label: '1.1 to 1.4',
            questionText: `Look back at the first paragraph of the source, from "The tea is getting cold" to "across the lawn."\n\nAnswer the four parts below. For each part, choose one letter only: A, B or C.\n\n1.1 Why does it not matter to the narrator that the tea is getting cold?\nA) The narrator prefers tea when it is cold.\nB) The narrator is about to leave the table.\nC) The narrator's sense of time has slipped away again.\n\n1.2 How old was the narrator in the memory of the garden?\nA) Thirty\nB) Nine\nC) Nineteen\n\n1.3 What was the sky like in the remembered garden?\nA) Dark, as if rain was on its way\nB) Bright and cloudless\nC) Lit by a full moon\n\n1.4 Where was the narrator's father calling from?\nA) The garden gate\nB) The top of the stairs\nC) A window in the kitchen`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5': `1.1 C, 1.2 B, 1.3 A, 1.4 C.\n\n1.1 C: "time has come unstuck again".\n1.2 B: "age nine".\n1.3 A: "the colour of a bruise before rain".\n1.4 C: "calling my name from the kitchen window".`,
              'Grade 6-7': `1.1 C, 1.2 B, 1.3 A, 1.4 C.\n\n1.1 C: the cold tea "does not matter because time has come unstuck again": the narrator is in two times at once. Nothing is said about liking cold tea (A) or leaving (B).\n1.2 B: "age nine". A borrows "thirty" from "thirty years", which is how far back the memory goes.\n1.3 A: a sky "the colour of a bruise before rain" is dark and threatening; it is not bright (B), and no moon is mentioned (C).\n1.4 C: the father calls "from the kitchen window"; neither the gate (A) nor the stairs (B) is mentioned.`,
            },
            markScheme: [
              '1.1 C: it "does not matter because time has come unstuck again".',
              '1.2 B: the narrator is in the garden "age nine". A is a trap: "thirty years" is how long ago the memory is.',
              '1.3 A: the sky was "the colour of a bruise before rain".',
              '1.4 C: the father "is calling my name from the kitchen window".',
              Q1_MARKING,
            ],
          },
          {
            id: 'aqa-p1-15-q2',
            questionNumber: 2,
            questionText: `Read the second and third paragraphs of the source again, from "The cup in my hands." to "a demolished flag of surrender."\n\nHow does the writer use language in these lines to convey the experience of memory and loss?\n\nYou might write about:\n• the words the writer chooses\n• techniques such as metaphor and repetition\n• the length and shape of the sentences.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer describes the chip on the cup as "a small geography of damage", a metaphor that compares physical damage to a landscape, suggesting that damage has shape and meaning. The cafe sounds are described as "voices overlapping like waves", a simile that makes conversation sound like the sea, which is soothing but also overwhelming. The memory of the woman is connected to cafes, because "cafes were where we existed, where we were most real", which makes ordinary places feel important and emotional. The torn napkin is a powerful detail: the narrator missed it "More than her voice. More than her hands", using repetition to show that small habits become the most painful memories.`,
              'Grade 6-7': `The writer presents memory as an involuntary, sensory phenomenon through language that collapses the boundary between physical experience and emotional interiority. The chip on the cup is "a small geography of damage", a metaphor that spatialises emotional hurt, suggesting loss has contours that can be mapped through repeated touch. The thumb running "back and forth" across it enacts the compulsive return to pain that defines grief. The cafe is presented as a space of layered sound, "the hiss of the machine, the percussion of crockery, voices overlapping like waves", where the musical metaphor "percussion" elevates the mundane to something orchestral, and the simile "like waves" connects the present soundscape to something vast and tidal. The woman's napkin-tearing is rendered as "a small nervous habit I found unbearable and then essential and then, after she was gone, the thing I missed most of all." This sentence performs the temporal journey of a relationship in a single polysyndetic chain: irritation, acceptance, grief. The anaphora of "More than her voice. More than her hands." is devastating in its escalation towards the apparently trivial, inverting the expected hierarchy of loss. The torn napkin becomes "a demolished flag of surrender", a metaphor whose violence ("demolished") and tenderness ("surrender") coexist in a single image.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q2_LEVELS,
              'Points you might make': [
                'The paragraph opens with fragments, "The cup in my hands. White porcelain.": the narrator holds on to small objects as if trying to stay in the present.',
                'The chip is "a small geography of damage", a metaphor that maps hurt onto something the narrator touches "back and forth".',
                'The cafe\'s noise is a list ("the hiss of the machine, the percussion of crockery") ending in a simile, "voices overlapping like waves", yet the narrator listens to something beneath it.',
                'The repeated "might be" in "might be the city or might be my own blood" refuses to settle on one meaning, as memory drifts.',
                'Her habit was "unbearable and then essential" and then "the thing I missed most of all": the repeated "and then" charts a whole relationship in one sentence.',
                '"More than her voice. More than her hands." The repetition builds towards the small, surprising thing missed most, the torn napkin, which becomes "a demolished flag of surrender".',
              ],
            },
          },
          {
            id: 'aqa-p1-15-q3',
            questionNumber: 3,
            questionText: `This question is about the source as a whole, from its opening to its last line.\n\nHow does the writer use structure to create a dreamlike mood, in which the past and the present blur together?\n\nYou might write about:\n• what the opening focuses on, and how it makes you feel\n• where the writer moves your attention next, and why\n• how the source ends, and any other choices about order, pace or focus.`,
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5': `The writer makes the source feel like a dream by moving between the past and the present without warning. The first paragraph is one long sentence that starts with the tea "getting cold" and then slides into a memory of being nine in a garden, so we drift into the past with the narrator. In the second paragraph the writer brings us back to the cafe with short phrases like "White porcelain.", but then the narrator listens to "a low hum" that might be the city or memory, which makes the present feel hazy too. The third paragraph moves into another memory, of "her" tearing her napkin, because cafes remind the narrator of her, which is how thoughts jump in a dream. At the end, a smell of burning "pulls me back to the present tense", like waking up. But the last sentence says that this Tuesday contains "every Tuesday I have ever lived", so the dreamlike feeling comes back at the very end.`,
              'Grade 6-7': `The writer structures the source like a waking dream: the narrator drifts out of the present, is briefly pulled back, drifts again, and is finally woken, only for the last sentence to blur the times once more.\n\nThe opening paragraph is a single long sentence, and its length is the first structural choice. It begins in the present ("The tea is getting cold") and then, without a full stop, slides through "time has come unstuck again" into a garden thirty years earlier. The words "but also" in "I am sitting at this table but also standing in the garden" refuse to choose between the two times, so the reader, like the narrator, is in both at once. The paragraph ends with the father's voice "carrying across thirty years", which makes the leap in time sound effortless, as it would in a dream.\n\nThe second paragraph seems to return to the present, but in broken pieces: "The cup in my hands. White porcelain." These fragments hold on to objects as if the narrator is trying to stay awake. The paragraph then loosens again into one long sentence that ends on "a low hum" that "might be the city or might be my own blood". The repeated "might be" keeps the meaning open, so the present becomes as uncertain as the past.\n\nThe third paragraph moves to a new memory, of "her", and the link is association rather than plot: cafes are where they "existed". This is how one thought leads to another in a dream, and the slower pace and the repeated "More than" keep the reader inside the memory.\n\nThe final paragraph breaks the mood with short, plain statements: "Something is burning. Toast, probably." A smell "pulls me back to the present tense", like an alarm waking a sleeper. Yet the last sentence lets the times blur again, since this "ordinary Tuesday" contains "every Tuesday I have ever lived". The source ends where it began, at the table with the cup, but the dreamlike mood has not ended: it has become part of the present.`,
            },
            markScheme: {
              'How it is marked (8 marks)': Q3_LEVELS,
              'Points you might make': [
                'The opening is one long sentence that slides from the cold tea to a garden thirty years earlier without a break, so the reader drifts between times with the narrator.',
                'The words "but also" hold two times together: "I am sitting at this table but also standing in the garden".',
                'The second paragraph returns to the present in fragments ("White porcelain."), then drifts into "a low hum" that "might be" several things, so even the present grows hazy.',
                'The third paragraph moves to another memory, of "her", reached by association rather than by plot: cafes make the narrator think of her, as thoughts lead on in a dream.',
                'The ending breaks the spell with short, plain statements ("Something is burning. Toast, probably."), but the last sentence blurs the times again: one Tuesday "contains" every Tuesday.',
              ],
            },
          },
          {
            id: 'aqa-p1-15-q4',
            questionNumber: 4,
            questionText: `Look only at the last two paragraphs of the source, from "I think of her." to the end.\n\nOne reader commented: "The writer makes the reader feel the pain of losing someone. The small, everyday details are more moving than any grand emotional statement could be."\n\nHow far do you agree or disagree with this view? You may agree, disagree, or do some of each.\n\nIn your answer:\n• give your own view of the narrator's loss, looking at what happens in these lines\n• explain how the writer's methods shape that view\n• support your points with short quotations from these lines.`,
            marks: 20,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5': `I mostly agree. The woman tearing her napkin into strips is a tiny, ordinary action, but the narrator says it became "the thing I missed most of all". This is more moving than a big dramatic statement because it feels real and personal. The repetition in "More than her voice. More than her hands." shows that the narrator misses this small habit even more than the obvious things. The phrase "a demolished flag of surrender" is powerful because it makes the torn napkin look like a sign of giving up.\n\nHowever, not everything in these lines is small. The narrator also says that cafes were "where we were most real", which is a big emotional statement, and the last sentence's idea that one Tuesday contains "every Tuesday I have ever lived" is about the whole of life. So the small details are the most moving part, but the writer uses big ideas too, and they work together.`,
              'Grade 6-7': `I largely agree, but I would qualify the claim: the small details are the most moving thing in these lines, and yet the writer also relies on larger statements, and the two work together.\n\nThe napkin detail shows why small things can carry so much. The narrator charts a whole relationship through one habit, which was "unbearable and then essential" and finally "the thing I missed most of all". The repeated "and then" moves through irritation, acceptance and loss in a single sentence, and the escalation towards something trivial reverses what we expect. We expect to miss grand things, and the anaphora of "More than her voice. More than her hands." admits that expectation before overturning it. The detail of "the little pile of white strips beside her saucer" is plain and exact, and the metaphor that follows, "a demolished flag of surrender", is tonally complex: "demolished" suggests destruction, while "surrender" suggests giving up willingly. The image lets a torn napkin hold both the end of the relationship and the narrator's acceptance of it.\n\nHowever, the claim that the details are more moving than "any grand emotional statement" overlooks how the writer uses such statements. The line saying that "cafes were where we existed, where we were most real" makes a large claim about identity: it suggests the narrator felt most alive with her, so losing her is partly losing a self. The final sentence goes further still, claiming that "this ordinary Tuesday" contains "every Tuesday I have ever lived". These are grand ideas, and they give the small details their weight: the napkin matters because it stands for a whole shared life.\n\nThe ending also changes the feeling. "Something is burning. Toast, probably." The smell "pulls me back to the present tense", and the flat, almost comic "probably" interrupts the grief. The reader is left not only with pain but with the narrator carrying it into an ordinary day. So I agree that the everyday details are what make us feel the loss, but they move us most because the writer sets them against these larger thoughts.`,
            },
            markScheme: {
              'How it is marked (20 marks)': Q4_LEVELS,
              'Points you might make': [
                'Agree: the napkin habit was "unbearable and then essential" and finally "the thing I missed most of all", so one small action carries a whole relationship.',
                'Agree: "More than her voice. More than her hands." sets aside the obvious things and lands on a pile of torn paper.',
                'Agree: "the little pile of white strips beside her saucer" is plain and exact, and then becomes "a demolished flag of surrender".',
                'Weigh: these lines also make large statements: cafes were "where we were most real", and one Tuesday contains "every Tuesday I have ever lived". The small details may move us because these bigger ideas stand behind them.',
                'Weigh: the ending moves away from pain: a smell of burning pulls the narrator back "to the present tense", and the loss is carried into an "ordinary Tuesday".',
              ],
            },
          },
        ],
      },
      {
        id: 'aqa-p1-15-writing',
        title: 'Section B: Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-15-q5',
            questionNumber: 5,
            questionText: `A charity that runs reading groups for older people is collecting new writing on the theme of memory, to read aloud at its meetings.\n\nChoose ONE of these two tasks for the charity.\n\nEither:\n(a) Write a description of a cafe on a rainy afternoon. On the real paper a picture is printed here, for ideas only. It shows a person sitting alone at a window table in a cafe, with rain running down the glass and the blurred lights of the street beyond. You do not have to describe exactly what the picture shows.\n\nOr:\n(b) Write the opening of a story about a moment that changes everything.\n\nThis question is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its technical accuracy (spelling, punctuation, vocabulary and sentences).`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece that does what the chosen task asks. For (a), it describes the cafe through sight, sound and smell, with a few deliberate techniques such as similes for the rain or the lights; for (b), it opens a story by setting up an ordinary scene and the moment that changes it. It is organised in paragraphs, keeps a tone that suits older listeners, and is generally accurate, with some variety in sentences and vocabulary.',
              'Grade 6-7': `Task (a): a description of a cafe on a rainy afternoon.\n\nBy three o'clock the rain has settled in for the day, and the Bluebell Cafe has filled with people who only meant to pass by.\n\nWet coats steam gently on the backs of chairs. Umbrellas lean in the corner by the door like tired guests, dripping onto a mat that gave up keeping the floor dry hours ago. Every few minutes the brass bell above the door rings, someone stamps in out of the weather, and a gust of cold air slips round the room before the warmth closes over it again.\n\nAnd it is warm. The windows have misted over from the inside, so the street beyond is only colour and light: the red smudge of a bus, the green glow of the chemist's cross, car headlamps drawn out into long gold threads. The cafe smells of coffee and wet wool and the cinnamon buns that sit in rows under a glass dome on the counter, sticky and gleaming.\n\nAt the corner table by the window sits an old woman, alone.\n\nShe has a pot of tea and one cup, and she has taken off a single glove to hold it. Her silver hair is pinned up neatly, and a small brooch shaped like a swallow is fastened to her collar. She is not reading. She is not looking at a phone. She is watching the rain, the way some people watch a fire.\n\nThe rain is worth watching. It runs down the glass in thin, wandering streams that meet and part and meet again, like the lines on a palm. Where it catches the light from the street, each drop holds a tiny, upside-down picture of the world outside.\n\nSlowly, as if she has forgotten that anyone might see, the woman reaches out with one finger and writes on the misted window. A letter. Then another. Two initials, side by side, with a careful circle round them.\n\nPerhaps she wrote them here once before, on another wet afternoon sixty years ago, when the cafe had a different name and a jukebox in the corner, and the young man opposite her had a laugh that made the waitress turn round. Perhaps she is remembering how he always took the seat facing the door, so that she could have the view. Perhaps she is only waiting for the rain to stop.\n\nNobody else notices. Behind the counter, someone is washing cups and humming. A baby laughs at a spoon. Two schoolboys argue happily over the last bun.\n\nOutside, the street lamps flicker on, one after another, all the way down the hill.\n\nThe woman finishes her tea. She pulls on her glove, settles her scarf and stands. At the door she pauses and looks back once, not at the room but at the window, where her two initials are already beginning to run, the circle round them softening and fading, drop by drop, back into the mist.\n\nThen the bell rings, and she is gone.`,
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'Ideas for these tasks': [
                'For (a), the description could stay inside the cafe or look out through the rain, and could slip into a memory, as the source does: the picture is a starting point, not a list.',
                'For (b), the opening needs to build towards, or begin with, the moment of change and make the reader want to know what follows; it need not reach an ending.',
                'Listeners with long memories will respond to precise, sensory detail and a gentle, thoughtful tone.',
                'Like the source, a strong piece might move between the present and the past, or let one small object carry a feeling.',
              ],
            },
          },
        ],
      },
    ],
  },
]
