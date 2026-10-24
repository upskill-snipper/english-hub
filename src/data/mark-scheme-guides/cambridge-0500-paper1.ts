/**
 * Cambridge IGCSE First Language English (0500) Paper 1: Reading.
 *
 * CHECKED 24 October 2026 against Cambridge's own documents:
 *  - Cambridge IGCSE First Language English 0500 syllabus for exams in 2027,
 *    2028 and 2029, Version 1 (September 2024): pages 8 to 10 (assessment
 *    overview, objectives, weightings) and 13 to 15 (each question, its marks
 *    and the objectives each part tests).
 *    https://www.cambridgeinternational.org/Images/718783-2027-2029-syllabus.pdf
 *  - 0500/01 specimen mark scheme for examination from 2027 (v1, 2024), for
 *    the level names and mark ranges, which the syllabus does not give.
 *    https://www.cambridgeinternational.org/Images/718838-2027-specimen-paper-1-mark-scheme.pdf
 *  - the 2024-2026 syllabus, Version 1 (September 2021), pages 13 and 14, for
 *    the November 2026 note below.
 *    https://www.cambridgeinternational.org/Images/635230-2024-2026-syllabus.pdf
 *
 * WHICH SYLLABUS. This guide describes the 2027-2029 syllabus, which every
 * series from March 2027 (India) and June 2027 uses, and which the AI marker
 * already follows. November 2026 is the last series on the 2024-2026 syllabus,
 * and its Paper 1 is different: THREE questions, not four. Q1 Comprehension
 * and summary task, 30 marks (Text A comprehension 15, R1 R2 R5; Text B
 * summary of no more than 120 words, reading 10 R1 R2 R5 and writing 5 W2
 * W3); Q2 Short-answer questions and language task, 25 marks (short answers
 * 10, language task of 200-300 words 15, all R1 R2 R4); Q3 Extended response
 * to reading, 25 marks (250-350 words, reading 15 R1 R2 R3 and writing 10 W1
 * to W4). Same 2 hours, same 80 marks, same 15 minutes' reading. The summary
 * line says so, so a November 2026 candidate is not misled.
 *
 * HOW THE DOCUMENTS WERE READ. cambridgeinternational.org was down for
 * maintenance on the morning of 24 October 2026 (every page served a
 * "temporarily unavailable" notice and every PDF a 404). The two syllabuses
 * were read from copies downloaded from those URLs on 19 September and
 * 20 October 2026, each byte-identical to the Internet Archive's capture of
 * its official URL (2027-2029 captured 12 December 2024, 2024-2026 captured
 * 2 October 2026). The specimen mark scheme (22 pages, Maximum Mark 80) was
 * read from the Archive's capture of its official URL taken 12 October 2026,
 * byte-identical to the capture of 15 April 2025, so it has not changed since
 * it was published.
 *
 * WHAT IS LEFT OUT. The syllabus fixes each question's marks and objectives
 * but not the split inside Question 1 or Question 3's short-answer parts; the
 * specimen's split (for example 1(a) 1 mark, 1(b) 2 + 2) is one paper, not a
 * rule, so the guide does not state sub-question tariffs. Level ranges come
 * from the specimen mark scheme; no live 2027-syllabus paper exists yet to
 * confirm them. Cambridge does not split a part's marks between individual
 * objectives, so each `objectives` entry groups the codes that share the marks
 * (for example 'R1, R2, R5': 10).
 *
 * DIFFERENCES FROM THE AI MARKER (src/lib/marking/mark-schemes/cambridge-0500.ts,
 * not changed here; changing it changes how essays are scored). Totals agree:
 * 80 marks, 120 minutes, four questions of 20, and each question's reading and
 * writing totals agree (Q2 reading 15 and writing 5, Q4 reading 10 and
 * writing 10). What differs is how marks are given inside a question:
 *  - Q1: marker 20 marks in three bands (1-7, 8-13, 14-20); board: point
 *    marking, part by part (specimen: nine parts of 1 to 3 marks), no levels.
 *  - Q2: marker one 15-mark reading grid (R1/R2/R3/R5, bands 1-3, 4-6, 7-9,
 *    10-12, 13-15) and 5 writing marks in five 1-mark bands; board: 2(a)
 *    reading R1 R2 R5 10 marks (Levels 1-5: 1-2, 3-4, 5-6, 7-8, 9-10), 2(a)
 *    writing W1 W2 W3 5 marks (Levels 1-3: 1, 2-3, 4-5), 2(b) reading R2 R3
 *    5 marks (Levels 1-3: 1, 2-3, 4-5).
 *  - Q3: marker one 20-mark grid (R1/R2/R4, bands 1-4, 5-8, 9-12, 13-16,
 *    17-20); board: short answers 10 marks (R1 R2 R4, point-marked apart from
 *    one 5-mark part in three levels in the specimen) and a language task of
 *    10 marks (R1 R2 R4, Levels 1-5: 1-2, 3-4, 5-6, 7-8, 9-10).
 *  - Q4: none in marks or bands (reading 10 and writing 10, five levels of 2
 *    marks in each); its wording differs, listed below.
 * The marker's Q2 and Q3 each cover both parts, so both part entries below
 * link to them.
 *
 * SECOND CHECK, 24 October 2026, by an independent reader. The live site
 * still served its maintenance notice at 11:00, so the Internet Archive
 * captures named above were fetched again, with the specimen question paper
 * (Images/718842-2027-specimen-paper-1.pdf, captured 12 October 2026). Each
 * is byte-identical (SHA-256) to the copy this guide was written from, and
 * every mark, objective and level range below matches them, as does the
 * November 2026 note. Fixed:
 *  - summary: the November 2026 note gave the old marks but not what follows
 *    from them; now it says this guide's question numbers and marks are not
 *    that candidate's (2024-2026 syllabus pp. 13-14).
 *  - Q1 rewards: tied 'no credit for a lifted answer' to parts that ask for
 *    own words; the specimen part with that rule, 1(e)(ii), does not ask for
 *    them (specimen paper p. 3, mark scheme p. 6). Now says so.
 *  - Q2(a) task: 'full sentences in paragraphs' suggested several paragraphs
 *    in 120 words; now 'full, linked sentences' (syllabus p. 14).
 *  - Q2(b) tip: 'one detail for each part' of the attitude could give fewer
 *    details than the question asks for (three in the specimen, paper p. 5);
 *    now says give the number asked for.
 *  - Q3 language task: 'the examiner does not count how many choices' left out
 *    that the higher levels need a range of choices including images; now
 *    says both (specimen mark scheme p. 15).
 *  - objectives: R3 lacked 'analyse', R4 was narrowed to word choices and W1
 *    lacked 'imagined'; now each matches its objective (syllabus p. 9).
 *  - wording for a 14-year-old: 'economical', 'apt' and 'seldom' in three
 *    level descriptions are now plain words; the meaning is unchanged.
 *
 * DIFFERENCES THE LIST ABOVE MISSED, in the marker's wording rather than its
 * marks. src/lib/marking/prompt-builder.ts puts each objective's description
 * and every band's descriptor and indicators into the marking prompt, so this
 * wording is what an answer is scored against:
 *  - Q1: description and bands cover explicit and implicit meaning and
 *    selection only (R1 R2 R5, the 2024-2026 comprehension objectives);
 *    board Q1 also tests R3 and R4 (syllabus p. 13; p. 39 'all five').
 *  - Q2: both grids were written for a piece in role: reading bands look for
 *    'voice' and 'audience', writing bands for voice, register and 'form
 *    (letter, journal, speech, etc.)'. Board: 2(a) writing is clear
 *    expression, organisation and concise vocabulary (specimen Table B), and
 *    2(b) is the writer's attitude (Table C).
 *  - Q3: a band indicator rewards choices 'from across both required
 *    paragraphs', the 2024-2026 language task (June 2024 0500/11 mark
 *    scheme, Images/521328, Archive capture of 12 October 2026, Question
 *    2(d)); the 2027 task is one extract (specimen 3(d)).
 *  - Q4 reading: bands copied from the directed-writing grid look for ideas
 *    'from both texts'; board Q4 answers Text C alone (syllabus p. 15).
 *  - Q4 writing: labelled W1-W4, but its description and all five bands
 *    include spelling, punctuation and grammar; board Q4 writing is W1 to W4
 *    (syllabus p. 15), Paper 1 has not assessed W5 since 2024 (2024-2026
 *    syllabus p. 35) and specimen Table G has no accuracy strand.
 * Not a defect: the marker words W2 and W4 as in 2024-2026 ('use register
 * appropriate to context'); Cambridge says the 2027 rewording changed no
 * knowledge or skill assessed (2027-2029 syllabus p. 39).
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'cambridge-0500-paper1',
  title: 'Cambridge IGCSE First Language English Paper 1',
  board: 'Cambridge',
  qualification: 'Cambridge IGCSE First Language English (0500), 2027-2029 syllabus',
  paperName: 'Reading',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '50% of the IGCSE',
  summary:
    'Four compulsory questions, 20 marks each, on three texts printed in a separate insert: comprehension, a summary, short answers with a language task, and a piece of writing in a set form. This guide is for exams in 2027, 2028 and 2029; if you sit Paper 1 in November 2026, your paper follows the older 2024-2026 syllabus, with three questions worth 30, 25 and 25 marks, so its question numbers and marks are not the ones in this guide.',
  source: {
    document:
      'Cambridge IGCSE First Language English 0500 syllabus for exams in 2027, 2028 and 2029, Version 1 (pages 13 to 15), with the 0500/01 specimen mark scheme for examination from 2027 for the level ranges',
    url: 'https://www.cambridgeinternational.org/Images/718783-2027-2029-syllabus.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-english-first-language-0500/past-papers/',
  objectives: [
    {
      id: 'R1',
      plain: 'Understand what a text says directly: the facts and details actually on the page.',
    },
    {
      id: 'R2',
      plain:
        'Work out what a text suggests without saying it outright, including what the writer or the people in it think and feel.',
    },
    {
      id: 'R3',
      plain:
        'Examine the facts, ideas and opinions in a text, judge how far they hold up and build on them, backing each point with details from the text.',
    },
    {
      id: 'R4',
      plain:
        'Show how a writer creates effects and influences the reader, for example through the choice of particular words and phrases.',
    },
    {
      id: 'R5',
      plain:
        'Pick out the information a task needs and use it for that task, leaving the rest aside.',
    },
    {
      id: 'W1',
      plain: 'Put experiences, and what you think, feel and imagine, clearly into words.',
    },
    {
      id: 'W2',
      plain:
        'Organise facts, ideas and opinions on purpose, so the order and shape of the writing help it do its job.',
    },
    {
      id: 'W3',
      plain:
        'Use varied words chosen with care, and different kinds of sentences, to suit the task.',
    },
    {
      id: 'W4',
      plain: 'Write in a way that suits your purpose and keeps your reader interested.',
    },
  ],
  sections: [
    {
      name: 'Question 1: Comprehension',
      marks: 20,
      about: 'Short questions on Text A, testing what it says directly and what it suggests.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Comprehension (Text A)',
          marks: 20,
          objectives: [{ id: 'R1, R2, R3, R4, R5', marks: 20 }],
          minutes: 25,
          task: 'Answer a series of short questions on Text A. Some ask you to find a detail, some to explain a word or phrase in your own words, and some to explain what the writer suggests, why something happened or why a particular word was used.',
          rewards: [
            'One mark for each correct, separate point, up to the marks shown for that part: in the specimen mark scheme every part of Question 1 is marked this way, not in levels.',
            "Your own words when a part asks for them, and whenever you explain: in the specimen mark scheme, one 'explain why' part gave no marks to an answer copied word for word from the text, even though that question did not ask for own words.",
            'For a part asking what a phrase means, an explanation of every part of the phrase: in the specimen, explaining only part of it earned 1 of the 2 marks.',
            'Answers drawn from the paragraph or lines the question points you to.',
          ],
          levels: [],
          avoid: [
            'Copying out long stretches of the text in the hope that the answer is somewhere inside.',
            'Making the same point twice in different words: a repeated point earns nothing extra.',
            'Writing a paragraph for a 1-mark part, which eats into the time Questions 2 to 4 need.',
          ],
          tip: 'The marks for each part are printed in square brackets: a [3] part needs three separate points, so count them as you write.',
          markerQuestionId: 'Q1',
        },
      ],
    },
    {
      name: 'Question 2: Summary task',
      marks: 20,
      about:
        "Two parts on Text B: a summary in your own words, then a short answer on the writer's attitude.",
      questions: [
        {
          label: 'Question 2(a)',
          kind: 'Selective summary (Text B)',
          marks: 15,
          objectives: [
            { id: 'R1, R2, R5', marks: 10 },
            { id: 'W1, W2, W3', marks: 5 },
          ],
          minutes: 19,
          task: 'Pick out the points in Text B that fit the focus the question gives you, and write them up as a summary in your own words: continuous writing (full, linked sentences, not notes or bullet points) of no more than 120 words.',
          rewards: [
            'Reading (10 marks): a wide range of the points that fit the focus, including ones the text only implies.',
            'Selection: only what the question asks for, with no examples, quotations, repetition or opinions of your own.',
            'Writing (5 marks): clear, fluent sentences in your own words that pack a lot into a few words.',
            'Related points grouped and linked, so the summary reads as one connected piece rather than a list.',
          ],
          levels: [
            {
              name: 'Reading: Level 1',
              marks: '1-2',
              looksLike:
                'Picks up only a few relevant points, loses sight of the focus and does little real selecting.',
            },
            {
              name: 'Reading: Level 2',
              marks: '3-4',
              looksLike:
                'Has a general grasp of the relevant points but keeps to the focus only some of the time, and selects without much judgement.',
            },
            {
              name: 'Reading: Level 3',
              marks: '5-6',
              looksLike:
                'Covers a fair number of relevant points with the odd lapse in focus; it selects, but unneeded material creeps in.',
            },
            {
              name: 'Reading: Level 4',
              marks: '7-8',
              looksLike:
                'Covers plenty of the points that matter, keeps to the focus throughout and chooses with care, so the main lines of the text start to show.',
            },
            {
              name: 'Reading: Level 5',
              marks: '9-10',
              looksLike:
                'Gathers the points that matter most, never strays from the focus and selects so well that the reader sees the whole picture.',
            },
            {
              name: 'Writing: Level 1',
              marks: '1',
              looksLike:
                'Hard to follow and loosely organised, with stretches copied from the text.',
            },
            {
              name: 'Writing: Level 2',
              marks: '2-3',
              looksLike:
                "Mostly clear and sometimes well ordered; tight in places, but elsewhere it borrows the text's own wording.",
            },
            {
              name: 'Writing: Level 3',
              marks: '4-5',
              looksLike:
                'Smooth and easy to follow, well ordered, saying a lot in few words, in a good range of your own words.',
            },
          ],
          avoid: [
            'Going over the 120-word limit the question sets.',
            'Notes or bullet points: the summary must be continuous writing.',
            'Copying sentences from Text B, or adding quotations, examples or your own views.',
            'Including points that fall outside the focus of the question.',
          ],
          tip: 'Underline every point in Text B that fits the focus, cross out repeats and examples, then write the points up in fresh words, combining related ones into single sentences.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 2(b)',
          kind: "Writer's attitude (Text B)",
          marks: 5,
          objectives: [{ id: 'R2, R3', marks: 5 }],
          minutes: 6,
          task: "Explain the writer's attitude in Text B (what the writer thinks and feels about the subject), supporting your answer with details from the text. If the question asks for a set number of details, give that number.",
          rewards: [
            "A precise statement of the writer's attitude, which can have more than one side to it.",
            'Details from Text B that show the attitude, each with a few words on what it reveals.',
            "Reading between the lines: what the writer's word choices give away, not only what the text states.",
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1',
              looksLike:
                'Makes a basic point about how the writer feels, with little or nothing to show it.',
            },
            {
              name: 'Level 2',
              marks: '2-3',
              looksLike:
                "Identifies part of the writer's attitude and backs it up with a detail or two.",
            },
            {
              name: 'Level 3',
              marks: '4-5',
              looksLike:
                "Pins down the writer's attitude accurately and proves it with well-chosen details from the text.",
            },
          ],
          avoid: [
            'Retelling the text instead of saying what the writer thinks of the subject.',
            'Giving your own opinion of the subject.',
            'Writing at length: this part is worth 5 marks.',
          ],
          tip: "Name the attitude in a few words first (for example, 'hopeful but cautious'), then give as many details as the question asks for (three in the specimen), each with a few words on what it shows.",
          markerQuestionId: 'Q2',
        },
      ],
    },
    {
      name: 'Question 3: Short-answer questions and language task',
      marks: 20,
      about:
        "Short answers on Text C, then a longer answer analysing the writer's language in an extract from it.",
      questions: [
        {
          label: 'Question 3: short-answer parts',
          kind: 'Short answers on words and phrases (Text C)',
          marks: 10,
          objectives: [{ id: 'R1, R2, R4', marks: 10 }],
          minutes: 12,
          task: "Answer short questions on Text C: for example, find the word or phrase in the text that matches an idea you are given, explain what particular words mean in your own words, or explain what one example of the writer's language suggests.",
          rewards: [
            'The exact word or phrase from the text when you are asked to find one.',
            'An accurate explanation, in your own words, of what each word means in its sentence.',
            "Most parts earn a mark for each correct answer. In the specimen paper, one 5-mark part on what an example of the writer's language suggests was marked in three levels (1, 2-3 and 4-5 marks).",
          ],
          levels: [],
          avoid: [
            'Copying a whole sentence when you are asked for a word or phrase.',
            'Explaining a word with the same word, or another form of it.',
            'Giving a dictionary meaning that does not fit how the word is used in the text.',
          ],
          tip: 'Test an explanation by putting it in place of the word in the sentence: if the sentence still makes sense, you are probably close.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 3: language task',
          kind: 'Language analysis (Text C)',
          marks: 10,
          objectives: [{ id: 'R1, R2, R4', marks: 10 }],
          minutes: 13,
          task: "Pick out a few striking words or phrases from the extract of Text C given in the question (three in the specimen paper) and explain how the writer's language creates its effects. Write about 200 to 250 words.",
          rewards: [
            'Precise choices: short words or phrases that carry more than their plain meaning.',
            'For each choice, what it means in context and what it suggests: the associations (connotations) it brings and the picture it creates.',
            'Images (similes, metaphors and other comparisons) explained, not just named.',
            'Comments on grammar, sentence shape or punctuation, which earn credit only on top of comments on the words themselves.',
            'The quality of your analysis as a whole rather than the number of choices, though the higher levels expect a range of choices that includes images you explain.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Chooses words that do little for the task and shows little understanding of them.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Chooses less telling words; the comments mostly repeat the text or stay vague, even if techniques are named correctly.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Chooses sensible words and can say what most of them mean, but any comment on their effect is basic.',
            },
            {
              name: 'Level 4',
              marks: '7-8',
              looksLike:
                'Good choices, with confident explanations of what they mean in the passage, a first go at explaining images, and some sense of what the writer is doing.',
            },
            {
              name: 'Level 5',
              marks: '9-10',
              looksLike:
                'The sharpest choices, each opened up to show what it suggests and why the writer used it, with images explained exactly and thoughtfully.',
            },
          ],
          avoid: [
            'Long quotations: choose short, precise words or phrases.',
            "Naming a technique ('this is a metaphor') without explaining what it suggests.",
            'Writing about lines outside the extract you are given.',
            'Retelling what happens in the extract.',
          ],
          tip: 'For each choice, ask what the word makes you picture or feel, and why the writer chose it over a plainer word.',
          markerQuestionId: 'Q3',
        },
      ],
    },
    {
      name: 'Question 4: Extended response to reading',
      marks: 20,
      about:
        'A piece of about 250 to 300 words in a set form, using and developing ideas from Text C.',
      questions: [
        {
          label: 'Question 4',
          kind: 'Extended response to reading (Text C)',
          marks: 20,
          objectives: [
            { id: 'R1, R2, R3, R5', marks: 10 },
            { id: 'W1, W2, W3, W4', marks: 10 },
          ],
          minutes: 25,
          task: 'Write about 250 to 300 words based on Text C in the form the question sets: a letter, report, journal, speech, interview or article. The question sets the situation and gives bullet points to cover (in the specimen paper you write as a person from the text), and you use and develop ideas from the text to answer them.',
          rewards: [
            'Reading (10 marks): plenty of relevant ideas from Text C, developed beyond what the text says outright and backed by details from it.',
            'Every bullet point covered, in a balanced way.',
            'A voice that suits the role and the form, kept up throughout: in the specimen mark scheme the voice counts towards the reading mark.',
            'Writing (10 marks): your own words, organised for the reader, with varied, precise vocabulary and a style that suits the audience and purpose.',
          ],
          levels: [
            {
              name: 'Reading: Level 1',
              marks: '1-2',
              looksLike:
                'Uses very little from the text, or copies it without reshaping it for the task.',
            },
            {
              name: 'Reading: Level 2',
              marks: '3-4',
              looksLike:
                'Gets hold of some main ideas, but leans on the words of the text, drifts from the bullets and may sound wrong for the role.',
            },
            {
              name: 'Reading: Level 3',
              marks: '5-6',
              looksLike:
                'Offers simple ideas from the text but rarely takes them further; some bullets get more attention than others and the voice is flat.',
            },
            {
              name: 'Reading: Level 4',
              marks: '7-8',
              looksLike:
                'Uses many of the useful ideas and develops some, covers all the bullets, backs points up often and sounds right for the role.',
            },
            {
              name: 'Reading: Level 5',
              marks: '9-10',
              looksLike:
                'Uses most of the useful ideas, develops and weighs them up, weaves in detail throughout, covers every bullet fully and keeps a believable voice.',
            },
            {
              name: 'Writing: Level 1',
              marks: '1-2',
              looksLike:
                'Hard to understand, too short to develop anything, and partly copied from the text.',
            },
            {
              name: 'Writing: Level 2',
              marks: '3-4',
              looksLike:
                'Clumsy in places and jumbled in order, with plain or borrowed words and little thought for the audience.',
            },
            {
              name: 'Writing: Level 3',
              marks: '5-6',
              looksLike:
                'Easy to follow but plain; it sticks to the order of the original text, the vocabulary does the job and there is some sense of the audience.',
            },
            {
              name: 'Writing: Level 4',
              marks: '7-8',
              looksLike:
                'Reads smoothly most of the time, with ideas in a sensible order, a good range of words and a tone that often fits.',
            },
            {
              name: 'Writing: Level 5',
              marks: '9-10',
              looksLike:
                'Confident and fluent, shaped so the reader follows it easily, with wide and exact vocabulary and a tone that fits throughout.',
            },
          ],
          avoid: [
            'Retelling Text C in its own order: reorganise the material around the bullet points.',
            'Leaving out a bullet point, or giving one only a line.',
            'Inventing content with no basis in the text: ideas should come from Text C and grow out of it.',
            'Forgetting the form: an interview, a letter and a speech each need their own shape.',
          ],
          tip: 'Before you write, note two or three ideas from Text C under each bullet, then add what each one suggests or leads to: that development is what the higher reading levels look for.',
          markerQuestionId: 'Q4',
        },
      ],
    },
  ],
  timing: [
    'Reading the three texts: about 15 minutes. This is the one timing Cambridge itself gives, in the syllabus.',
    'Each question is worth 20 marks, so about 25 minutes each is a fair share. This and the splits below are suggestions based on the marks, not rules.',
    'Question 2: about 19 minutes on the summary, 2(a), and 6 on 2(b).',
    'Question 3: about 12 minutes on the short answers and 13 on the language task.',
    'Keep the last 5 minutes for checking.',
  ],
  checklist: [
    'Every part of every question has an answer: all four questions are compulsory.',
    'Answers that ask for your own words do not copy the text.',
    'The summary is continuous writing of no more than 120 words, with no quotations or opinions.',
    'The language task explains what each chosen word or phrase suggests, not only what it means.',
    'Question 4 covers every bullet point, in the form and role the question sets.',
  ],
}
