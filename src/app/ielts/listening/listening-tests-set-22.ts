// ─── IELTS Academic Listening - practice test data (Set 22) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …, LISTENING_SET_22)
// downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 questions / 40 marks) that mirror the real IELTS Listening paper, with
// topics deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a member of the
//     public enquiring about joining a book club at a public library), assessed
//     with form / note completion + multiple choice. A surname is spelled and a
//     phone number is dictated, and the total membership fee depends on a stated
//     choice (which membership type is selected).
//   • Section 2 - an everyday MONOLOGUE (here: an induction talk for new
//     volunteers at a wildlife park - duties, safety rules, shifts and
//     training), assessed with sentence completion, multiple choice and a
//     matching task (which day each duty happens), with signpost language.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial preparing a history essay - choosing the question, primary vs
//     secondary sources, referencing and the deadline), assessed with multiple
//     choice, completion and a matching task (classifying sources).
//   • Section 4 - an academic LECTURE / monologue (here: the science of
//     nutrition - macronutrients, vitamins and minerals, energy balance and
//     common misconceptions), assessed with note/sentence completion + multiple
//     choice, including one True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched
//                  case-insensitively and trimmed by the marker. The official
//                  word-limit instruction lives in the prompt (e.g. "ONE WORD
//                  AND/OR A NUMBER").
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'tfng'     → True / False / Not Given.
//   • 'matching' → each item is one numbered sub-question worth ONE mark; the
//                  container `id` is always distinct from every `items[].id`.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_22: ListeningTest[] = [
  {
    id: 'ls-academic-022',
    title:
      'Practice Test 22 - Joining a Library Book Club, A Wildlife Park Volunteer Induction, Planning a History Essay & The Science of Nutrition',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-022-s1',
        title: 'Section 1 - Joining a book club at a public library',
        // ~300 words. Transactional dialogue (Section 1 style): a member of the
        // public phones a public library to join its book club. A surname is
        // spelled and a mobile number is dictated; the total membership fee
        // depends on a stated choice (which membership type is selected),
        // mirroring the form/note-completion + multiple-choice mix of a real
        // Section 1.
        transcript: `WOMAN: Good afternoon, Riverside Public Library, this is Priya speaking. How can I help?

MAN: Hello. I've seen a poster about your book club, and I'd like to join, if I can.

WOMAN: You certainly can - we'd love to have you. Let me take a few details. Could I have your name, please?

MAN: Yes, it's Thomas Bradley. Bradley is spelled B-R-A-D-L-E-Y.

WOMAN: Thank you, Thomas. And a phone number where we can reach you?

MAN: It's oh-seven-nine-three-three, double four, one-oh-two.

WOMAN: Lovely. Now, the club meets twice a month, on the first and third Wednesday, at half past six in the evening.

MAN: Wednesday evenings suit me well. Where exactly do you meet?

WOMAN: We gather in the reading room on the second floor - not the main hall, which trips a few people up.

MAN: Good to know. And how are the books chosen?

WOMAN: That's the nice part - every member suggests a title, and then we vote, so the whole group decides together. No one person picks.

MAN: I like that. Is there a fee?

WOMAN: There's a small annual membership. Standard membership is twelve pounds a year, but if you're a student or over sixty it's only eight pounds.

MAN: I'm a student, actually, so that's the eight-pound rate.

WOMAN: Perfect, I'll put you down for that. One last thing - to complete the form, what's your date of birth?

MAN: The fourteenth of March, nineteen ninety-nine.

WOMAN: Thank you. I'll email you this month's book so you can start reading. We meet next on the third Wednesday - do bring a notebook if you like to jot down your thoughts.

MAN: I will. Thanks very much for your help.`,
        questions: [
          {
            id: 'ls-022-s1-q1',
            type: 'gap',
            prompt:
              'Complete the membership form. Write ONE WORD for the answer.\n\nMember surname: ____________',
            acceptableAnswers: ['Bradley', 'bradley'],
            explanation:
              'The caller gives his name as “Thomas Bradley” and spells the surname: B-R-A-D-L-E-Y. In Section 1, names are almost always spelled aloud - write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-022-s1-q2',
            type: 'gap',
            prompt: 'Contact phone number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['07933 44102', '0793344102', '07933 441 02', '07933441 02'],
            explanation:
              'He dictates the number as “oh-seven-nine-three-three, double four, one-oh-two” - that is 07933 44102. “Double four” means two 4s, and “oh” is zero; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-022-s1-q3',
            type: 'gap',
            prompt:
              'The book club meets on the first and third ____________ of the month. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Wednesday', 'wednesday', 'Wednesdays', 'wednesdays'],
            explanation:
              'The librarian says the club “meets twice a month, on the first and third Wednesday.” The answer is “Wednesday”.',
          },
          {
            id: 'ls-022-s1-q4',
            type: 'gap',
            prompt: 'Meetings begin at ____________ in the evening. Write the time as you hear it.',
            acceptableAnswers: [
              '6.30',
              '6:30',
              'half past six',
              'half past 6',
              '18:30',
              '6.30pm',
              '6:30 pm',
            ],
            explanation: 'She says the club meets “at half past six in the evening.” That is 6.30.',
          },
          {
            id: 'ls-022-s1-q5',
            type: 'gap',
            prompt: 'The group meets in the ____________ room on the second floor. Write ONE WORD.',
            acceptableAnswers: ['reading'],
            explanation:
              'She says, “We gather in the reading room on the second floor - not the main hall.” The answer is “reading” (the main hall is a distractor).',
          },
          {
            id: 'ls-022-s1-q6',
            type: 'mcq',
            prompt: 'How are the books for each meeting chosen?',
            options: [
              'The librarian selects every title',
              'Members suggest titles and then vote',
              'They follow a fixed published reading list',
              'The newest member chooses each time',
            ],
            correctIndex: 1,
            explanation:
              'She says, “every member suggests a title, and then we vote, so the whole group decides together. No one person picks.” Option B matches; she explicitly rules out one person choosing.',
          },
          {
            id: 'ls-022-s1-q7',
            type: 'mcq',
            prompt: 'How much will Thomas pay for his annual membership?',
            options: [
              'Twelve pounds, the standard rate',
              'Eight pounds, the student rate',
              'Twenty pounds, for a family membership',
              'Nothing, as membership is free',
            ],
            correctIndex: 1,
            explanation:
              'Standard membership is twelve pounds, “but if you’re a student or over sixty it’s only eight pounds”, and Thomas says, “I’m a student, actually, so that’s the eight-pound rate.” Option B matches; the twelve-pound figure is the standard rate he does not pay.',
          },
          {
            id: 'ls-022-s1-q8',
            type: 'gap',
            prompt: 'Member date of birth: ____________. Write the date as you hear it.',
            acceptableAnswers: [
              '14 March 1999',
              '14th March 1999',
              '14/3/1999',
              '14/03/1999',
              'March 14 1999',
              'the fourteenth of March 1999',
            ],
            explanation:
              'He gives his date of birth as “The fourteenth of March, nineteen ninety-nine”, i.e. 14 March 1999. Write the day, month and year exactly as dictated.',
          },
          {
            id: 'ls-022-s1-q9',
            type: 'gap',
            prompt:
              'The librarian will ____________ Thomas this month’s book so he can start reading. Write ONE WORD.',
            acceptableAnswers: ['email', 'e-mail'],
            explanation:
              'She says, “I’ll email you this month’s book so you can start reading.” The answer is “email”.',
          },
          {
            id: 'ls-022-s1-q10',
            type: 'gap',
            prompt:
              'Members are advised to bring a ____________ to jot down their thoughts. Write ONE WORD.',
            acceptableAnswers: ['notebook'],
            explanation:
              'She says, “do bring a notebook if you like to jot down your thoughts.” The answer is “notebook”.',
          },
        ],
      },
      {
        id: 'ls-academic-022-s2',
        title: 'Section 2 - Induction talk for new wildlife park volunteers',
        // ~320 words. Informational monologue (Section 2 style): a single speaker
        // gives an induction talk to new volunteers at a wildlife park, covering
        // duties, safety rules, shifts and training. Uses sequencing/signpost
        // language ("first", "next", "after that", "finally") and includes a
        // matching task in which each weekday is paired with a regular duty.
        transcript: `Hello, everyone, and welcome to your induction day here at Greenfields Wildlife Park. My name's Marcus, and I'm the volunteer coordinator. Over the next half hour I'll run through what you'll be doing, the rules that keep you safe, and how your training works.

Let me start with your duties, because they follow a weekly pattern. On Mondays, the team helps with feeding the animals - you'll work alongside a keeper, never alone. On Wednesdays, the focus shifts to maintenance: mending fences, clearing paths and that sort of thing. And on Fridays, you'll mostly be helping visitors, answering questions and giving directions at the front gate.

Now, safety - and this is the part I really need you to remember. The single most important rule is this: never, under any circumstances, put your hand or anything else inside an enclosure. Even with the gentlest-looking animal, that rule is absolute. You'll also be given a high-visibility jacket, and you must wear it at all times while you're on site, so that staff and visitors can see you clearly.

A word about shifts. A standard volunteer shift lasts four hours, and we ask everyone to commit to at least one shift a week. If you can't make a shift, the most important thing is to telephone us the day before - please don't just email, because the office checks the phone first thing.

As for training, you won't be thrown in at the deep end. Every new volunteer is paired with an experienced mentor for the first month, and there's a short first-aid course that everyone completes before they start working with the public.

Finally, lunch. There's a free hot drink for volunteers in the staff kitchen, but please bring your own food, as the café can get very busy. Right - let's go and meet some animals.`,
        questions: [
          {
            id: 'ls-022-s2-q11',
            type: 'gap',
            prompt: 'The volunteer coordinator’s name is ____________. Write ONE WORD.',
            acceptableAnswers: ['Marcus', 'marcus'],
            explanation:
              'The speaker introduces himself: “My name’s Marcus, and I’m the volunteer coordinator.” The answer is “Marcus”.',
          },
          {
            id: 'ls-022-s2-q12',
            type: 'matching',
            variant: 'features',
            prompt:
              'Which day of the week is each volunteer duty carried out on? Choose your answer from the list and match it to each duty (Questions 12-14).',
            options: [
              { key: 'mon', label: 'Monday' },
              { key: 'wed', label: 'Wednesday' },
              { key: 'fri', label: 'Friday' },
            ],
            items: [
              { id: 's2-m-feeding', text: 'Feeding the animals', answer: 'mon' },
              {
                id: 's2-m-maintenance',
                text: 'Maintenance, such as mending fences',
                answer: 'wed',
              },
              { id: 's2-m-visitors', text: 'Helping visitors at the front gate', answer: 'fri' },
            ],
            explanation:
              'The speaker assigns each duty to a day: “On Mondays, the team helps with feeding the animals”; “On Wednesdays, the focus shifts to maintenance: mending fences”; “on Fridays, you’ll mostly be helping visitors … at the front gate.” Each item is worth one mark (Questions 12, 13 and 14).',
          },
          {
            id: 'ls-022-s2-q15',
            type: 'mcq',
            prompt: 'What does the speaker say is the single most important safety rule?',
            options: [
              'Always work in pairs',
              'Never put your hand inside an enclosure',
              'Always carry a radio',
              'Never feed the animals by hand',
            ],
            correctIndex: 1,
            explanation:
              'He says, “The single most important rule is this: never, under any circumstances, put your hand or anything else inside an enclosure.” Option B matches; he calls this rule “absolute”.',
          },
          {
            id: 'ls-022-s2-q16',
            type: 'gap',
            prompt:
              'While on site, volunteers must wear a high-visibility ____________ at all times. Write ONE WORD.',
            acceptableAnswers: ['jacket'],
            explanation:
              'He says, “You’ll also be given a high-visibility jacket, and you must wear it at all times while you’re on site.” The answer is “jacket”.',
          },
          {
            id: 'ls-022-s2-q17',
            type: 'gap',
            prompt: 'A standard volunteer shift lasts ____________ hours. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation: 'He says, “A standard volunteer shift lasts four hours.” The answer is 4.',
          },
          {
            id: 'ls-022-s2-q18',
            type: 'mcq',
            prompt: 'If volunteers cannot attend a shift, what should they do?',
            options: [
              'Send an email to the office',
              'Telephone the office the day before',
              'Find a replacement themselves',
              'Tell their mentor on the day',
            ],
            correctIndex: 1,
            explanation:
              'He says, “the most important thing is to telephone us the day before - please don’t just email, because the office checks the phone first thing.” Option B matches; emailing is the option he warns against.',
          },
          {
            id: 'ls-022-s2-q19',
            type: 'gap',
            prompt:
              'For the first month, every new volunteer is paired with an experienced ____________. Write ONE WORD.',
            acceptableAnswers: ['mentor'],
            explanation:
              'He says, “Every new volunteer is paired with an experienced mentor for the first month.” The answer is “mentor”.',
          },
          {
            id: 'ls-022-s2-q20',
            type: 'mcq',
            prompt: 'What training must every volunteer complete before working with the public?',
            options: [
              'A fire safety drill',
              'A short first-aid course',
              'An animal-handling exam',
              'A customer service workshop',
            ],
            correctIndex: 1,
            explanation:
              'He says, “there’s a short first-aid course that everyone completes before they start working with the public.” Option B matches.',
          },
        ],
      },
      {
        id: 'ls-academic-022-s3',
        title: 'Section 3 - Tutorial: planning a history essay',
        // ~315 words. Academic discussion (Section 3 style): two students (Hannah
        // and Daniel) and a tutor (Dr Okafor) discuss planning a history essay -
        // choosing the question, distinguishing primary from secondary sources,
        // referencing and the deadline. The questions mix multiple choice
        // (decisions/opinions) and completion (concrete details) with a matching
        // task that classifies named sources as primary or secondary.
        transcript: `DR OKAFOR: Come in, Hannah, Daniel. Let's plan your history essay. Have you picked a question yet?

HANNAH: We were torn between two. One was about the causes of the First World War, but that felt enormous, so we've gone with a narrower one: how propaganda posters were used to recruit soldiers.

DR OKAFOR: Much more manageable, and a richer one for the sources. Speaking of which - do you understand the difference between primary and secondary sources?

DANIEL: I think so. A primary source is something from the time itself, and a secondary source is a later interpretation, like a historian's book.

DR OKAFOR: Exactly. So let's test that. The recruitment posters themselves?

HANNAH: Those are primary - they're from the period.

DR OKAFOR: Correct. What about a soldier's diary from nineteen sixteen?

DANIEL: Also primary, since it was written at the time.

DR OKAFOR: Good. And a modern textbook chapter analysing the posters?

HANNAH: That one's secondary - it's a later interpretation.

DR OKAFOR: Spot on. Now, referencing. Which system are you using?

DANIEL: We were going to use footnotes, but the department guide says history essays here should use the Harvard system, so we'll switch to that.

DR OKAFOR: Yes, please do - Harvard is the standard for this module, and marks are lost for getting it wrong. One tip: keep a record of every source as you read it, not at the end. Leaving your bibliography to the last minute is the classic mistake.

HANNAH: Noted. And when is it due?

DR OKAFOR: The deadline is the twelfth of May, submitted online by midday. Don't leave it late - the system locks at twelve exactly, and a late essay is capped.

DANIEL: Understood. We'll aim to finish a few days early.`,
        questions: [
          {
            id: 'ls-022-s3-q21',
            type: 'mcq',
            prompt: 'What essay question have the students finally chosen?',
            options: [
              'The causes of the First World War',
              'How propaganda posters were used to recruit soldiers',
              'The daily life of soldiers in the trenches',
              'The role of women during the war',
            ],
            correctIndex: 1,
            explanation:
              'Hannah says they rejected the broad question on “the causes of the First World War” because “that felt enormous”, and “gone with a narrower one: how propaganda posters were used to recruit soldiers.” Option B matches.',
          },
          {
            id: 'ls-022-s3-q22',
            type: 'mcq',
            prompt: 'Why did the students reject their first possible question?',
            options: [
              'It felt too enormous',
              'There were no sources for it',
              'The tutor had banned the topic',
              'Another group had taken it',
            ],
            correctIndex: 0,
            explanation:
              'Hannah says the First World War causes question “felt enormous, so we’ve gone with a narrower one.” Option A matches the reason given.',
          },
          {
            id: 'ls-022-s3-q23',
            type: 'matching',
            variant: 'features',
            prompt:
              'In the tutorial, the speakers classify each source as either a primary or a secondary source. Match each source to its type (Questions 23-25).',
            options: [
              { key: 'primary', label: 'A primary source' },
              { key: 'secondary', label: 'A secondary source' },
            ],
            items: [
              { id: 's3-m-posters', text: 'The recruitment posters themselves', answer: 'primary' },
              { id: 's3-m-diary', text: "A soldier's diary from 1916", answer: 'primary' },
              {
                id: 's3-m-textbook',
                text: 'A modern textbook chapter analysing the posters',
                answer: 'secondary',
              },
            ],
            explanation:
              'Hannah says the posters “are primary - they’re from the period”; Daniel says the 1916 diary is “also primary, since it was written at the time”; and Hannah says the modern textbook chapter is “secondary - it’s a later interpretation.” Each item is worth one mark (Questions 23, 24 and 25).',
          },
          {
            id: 'ls-022-s3-q26',
            type: 'gap',
            prompt:
              'According to Daniel, a primary source is something from the ____________ itself. Write ONE WORD.',
            acceptableAnswers: ['time'],
            explanation:
              'Daniel says, “A primary source is something from the time itself, and a secondary source is a later interpretation.” The answer is “time”.',
          },
          {
            id: 'ls-022-s3-q27',
            type: 'mcq',
            prompt: 'Which referencing system will the students use, and why?',
            options: [
              'Footnotes, because they find them easier',
              'The Harvard system, because the department guide requires it',
              'No referencing, as it is optional',
              'A numbered system chosen by the tutor',
            ],
            correctIndex: 1,
            explanation:
              'Daniel says they planned to use footnotes, “but the department guide says history essays here should use the Harvard system, so we’ll switch to that”, and the tutor confirms “Harvard is the standard for this module.” Option B matches.',
          },
          {
            id: 'ls-022-s3-q28',
            type: 'gap',
            prompt:
              'The tutor advises keeping a record of every source as you read it, rather than leaving the ____________ to the last minute. Write ONE WORD.',
            acceptableAnswers: ['bibliography'],
            explanation:
              'The tutor says, “Leaving your bibliography to the last minute is the classic mistake.” The answer is “bibliography”.',
          },
          {
            id: 'ls-022-s3-q29',
            type: 'gap',
            prompt: 'The essay deadline is the ____________ of May. Write the date as you hear it.',
            acceptableAnswers: ['12th', 'twelfth', '12'],
            explanation:
              'The tutor says, “The deadline is the twelfth of May, submitted online by midday.” The answer is the twelfth (12th).',
          },
          {
            id: 'ls-022-s3-q30',
            type: 'mcq',
            prompt: 'What does the tutor warn will happen to a late essay?',
            options: [
              'It will not be marked at all',
              'It will be capped',
              'It will lose one whole grade',
              'It can be resubmitted the next day',
            ],
            correctIndex: 1,
            explanation:
              'The tutor says the system “locks at twelve exactly, and a late essay is capped.” Option B matches; the essay is capped, not rejected entirely.',
          },
        ],
      },
      {
        id: 'ls-academic-022-s4',
        title: 'Section 4 - Lecture: the science of nutrition',
        // ~315 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the science of nutrition,
        // covering the three macronutrients, vitamins and minerals, energy balance
        // and common misconceptions. Dense, factual and signposted ("let me
        // begin", "next", "finally"), with the note/sentence-completion +
        // multiple-choice mix typical of Section 4, including one True/False/Not
        // Given item.
        transcript: `Good morning. Today's lecture is on the science of nutrition - what our food is actually made of, how our bodies use it, and a few myths I'd like to clear up along the way.

Let me begin with the macronutrients, the three classes of substance we need in large amounts. The first is carbohydrates, which are the body's main source of energy. The second is protein, whose primary job is the building and repair of body tissue, especially muscle. The third is fat. Now, fat has a poor reputation, but it's essential - it stores energy and, crucially, it allows us to absorb certain vitamins.

Next, the micronutrients: vitamins and minerals, which we need only in tiny quantities, but which are vital. Take a single example: the mineral iron. Its main role is in the blood, where it helps to carry oxygen around the body. A shortage of iron is one of the most common deficiencies worldwide.

Now to energy. The energy in food is measured in a unit called the calorie. The central principle of body weight is what we call energy balance: very simply, if you consistently take in more energy than you use, you gain weight, and if you use more than you take in, you lose it.

Finally, let me tackle two misconceptions. The first is that all fat is bad - as I've said, the body genuinely needs some fat to function. The second concerns sugar. People often assume that so-called natural sugar, in fruit juice for instance, is automatically healthier than ordinary sugar. In fact, to the body, the sugar molecule is essentially the same whatever its source. Next week we'll look at how the digestive system breaks these nutrients down.`,
        questions: [
          {
            id: 'ls-022-s4-q31',
            type: 'gap',
            prompt: 'The body’s main source of energy is ____________. Write ONE WORD.',
            acceptableAnswers: ['carbohydrates', 'carbohydrate', 'carbs'],
            explanation:
              'The speaker says, “The first is carbohydrates, which are the body’s main source of energy.” The answer is “carbohydrates”.',
          },
          {
            id: 'ls-022-s4-q32',
            type: 'mcq',
            prompt: 'According to the lecture, what is the primary job of protein?',
            options: [
              'Storing energy for later use',
              'Building and repairing body tissue',
              'Helping the body absorb vitamins',
              'Carrying oxygen in the blood',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says protein’s “primary job is the building and repair of body tissue, especially muscle.” Option B matches; the other options describe fat or iron instead.',
          },
          {
            id: 'ls-022-s4-q33',
            type: 'gap',
            prompt:
              'As well as storing energy, fat allows the body to absorb certain ____________. Write ONE WORD.',
            acceptableAnswers: ['vitamins', 'vitamin'],
            explanation:
              'The speaker says fat “stores energy and, crucially, it allows us to absorb certain vitamins.” The answer is “vitamins”.',
          },
          {
            id: 'ls-022-s4-q34',
            type: 'gap',
            prompt: 'Vitamins and minerals are together known as ____________. Write ONE WORD.',
            acceptableAnswers: ['micronutrients', 'micronutrient'],
            explanation:
              'The speaker introduces “the micronutrients: vitamins and minerals, which we need only in tiny quantities.” The answer is “micronutrients”.',
          },
          {
            id: 'ls-022-s4-q35',
            type: 'gap',
            prompt:
              'The main role of the mineral iron is to help carry ____________ around the body. Write ONE WORD.',
            acceptableAnswers: ['oxygen'],
            explanation:
              'The speaker says of iron, “Its main role is in the blood, where it helps to carry oxygen around the body.” The answer is “oxygen”.',
          },
          {
            id: 'ls-022-s4-q36',
            type: 'mcq',
            prompt: 'What does the speaker say about iron deficiency?',
            options: [
              'It is extremely rare',
              'It is one of the most common deficiencies worldwide',
              'It only affects older people',
              'It cannot be corrected through diet',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “A shortage of iron is one of the most common deficiencies worldwide.” Option B matches.',
          },
          {
            id: 'ls-022-s4-q37',
            type: 'gap',
            prompt:
              'The energy in food is measured in a unit called the ____________. Write ONE WORD.',
            acceptableAnswers: ['calorie'],
            explanation:
              'The speaker says, “The energy in food is measured in a unit called the calorie.” The answer is “calorie”.',
          },
          {
            id: 'ls-022-s4-q38',
            type: 'gap',
            prompt:
              'The principle that links energy taken in with energy used is called energy ____________. Write ONE WORD.',
            acceptableAnswers: ['balance'],
            explanation:
              'The speaker says, “The central principle of body weight is what we call energy balance.” The answer is “balance”.',
          },
          {
            id: 'ls-022-s4-q39',
            type: 'mcq',
            prompt: 'According to the principle of energy balance, when does a person gain weight?',
            options: [
              'When they eat more protein than carbohydrate',
              'When they consistently take in more energy than they use',
              'When they avoid all fat',
              'When they use more energy than they take in',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “if you consistently take in more energy than you use, you gain weight.” Option B matches; using more than you take in causes weight loss, the opposite case.',
          },
          {
            id: 'ls-022-s4-q40',
            type: 'tfng',
            prompt:
              'The speaker says that the natural sugar in fruit juice is automatically healthier for the body than ordinary sugar.',
            answer: 'false',
            explanation:
              'The speaker presents this as a misconception, stating that “to the body, the sugar molecule is essentially the same whatever its source.” The statement contradicts the lecture, so it is False.',
          },
        ],
      },
    ],
  },
]
