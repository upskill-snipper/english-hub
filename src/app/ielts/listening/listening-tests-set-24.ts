// ─── IELTS Academic Listening — practice test data (Set 24) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …, LISTENING_SET_24)
// downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 questions / 40 marks) that mirror the real IELTS Listening paper, with
// topics deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a parent phoning a
//     holiday activity camp to register two children), assessed with form / note
//     completion + multiple choice. A surname is spelled and a phone number is
//     dictated, and the total cost depends on a stated choice (how many children
//     and which week are booked).
//   • Section 2 — an everyday MONOLOGUE (here: a guided tour of a historic
//     country house, Harewell Hall — its rooms, history, café, gardens and tour
//     times), assessed with sentence completion, multiple choice and a matching
//     task (which room is used for what), with signpost language.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor planning
//     a sociology survey project — the research question, the sample, the
//     questionnaire, ethics and the deadline), assessed with multiple choice,
//     completion and a matching task (matching each survey section to its focus).
//   • Section 4 — an academic LECTURE / monologue (here: the migration of early
//     humans out of Africa — the evidence, the routes and what drove the
//     movement), assessed with note/sentence completion + multiple choice,
//     including one True/False/Not Given item.
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
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_24: ListeningTest[] = [
  {
    id: 'ls-academic-024',
    title:
      'Practice Test 24 — Registering for a Holiday Activity Camp, A Tour of Harewell Hall, Planning a Sociology Survey & The Migration of Early Humans',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-024-s1',
        title: 'Section 1 — Registering children for a holiday activity camp',
        // ~305 words. Transactional dialogue (Section 1 style): a parent phones a
        // holiday activity camp to register her two children. A surname is spelled
        // and a mobile number is dictated; the total cost depends on a stated
        // choice (how many children and which week are booked), mirroring the
        // form/note-completion + multiple-choice mix of a real Section 1.
        transcript: `MAN: Good morning, Sunnyfield Holiday Camp, this is Greg speaking. How can I help you?

WOMAN: Hi there. I'd like to register my children for one of your summer activity weeks, please.

MAN: Of course. Let me take some details. Could I start with your name?

WOMAN: Yes, it's Helen Prentice. Prentice is spelled P-R-E-N-T-I-C-E.

MAN: Thank you, Helen. And a contact number for you?

WOMAN: It's oh-seven-six-three-two, double five, eight-one-four.

MAN: Lovely. And how many children would you like to book in?

WOMAN: Two — my son and my daughter. They're eight and ten.

MAN: Right, both of them are in our main age range, so they'd be together in the Explorers group. Now, which week were you thinking of?

WOMAN: What are the options?

MAN: We run three weeks. Week one is our adventure week, week two is all about arts and crafts, and week three is sports. They're hugely popular, so I'd book soon.

WOMAN: My two love being outdoors, so let's go for the adventure week — that's week one.

MAN: Good choice. The camp runs each day from nine in the morning until half past three.

WOMAN: And the cost?

MAN: It's eighty pounds per child for the week, but for a second child from the same family we take ten pounds off, so the second one is seventy.

WOMAN: So that's a hundred and fifty for the two of them.

MAN: Exactly. One last thing — please pack a waterproof coat each day, whatever the forecast, because a lot of the activities are outside.

WOMAN: Will do. Do they need to bring lunch?

MAN: No, a hot lunch is provided. Just let us know about any allergies when you drop them off.`,
        questions: [
          {
            id: 'ls-024-s1-q1',
            type: 'gap',
            prompt:
              'Complete the registration form. Write ONE WORD for the answer.\n\nParent surname: ____________',
            acceptableAnswers: ['Prentice', 'prentice'],
            explanation:
              'The caller gives her name as “Helen Prentice” and spells the surname: P-R-E-N-T-I-C-E. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-024-s1-q2',
            type: 'gap',
            prompt: 'Contact phone number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['07632 55814', '0763255814', '07632 558 14', '07632558 14'],
            explanation:
              'She dictates the number as “oh-seven-six-three-two, double five, eight-one-four” — that is 07632 55814. “Double five” means two 5s, and “oh” is zero; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-024-s1-q3',
            type: 'gap',
            prompt: 'Number of children being registered: ____________. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'She says, “Two — my son and my daughter.” The number of children is 2. This figure also triggers the second-child discount in a later question — Section 1 details often connect.',
          },
          {
            id: 'ls-024-s1-q4',
            type: 'gap',
            prompt: 'Both children will be placed in the ____________ group. Write ONE WORD.',
            acceptableAnswers: ['Explorers', 'explorers', 'Explorer', 'explorer'],
            explanation:
              'The assistant says, “they’d be together in the Explorers group.” The answer is “Explorers”.',
          },
          {
            id: 'ls-024-s1-q5',
            type: 'mcq',
            prompt: 'Which week does the parent decide to book?',
            options: [
              'Week one, the adventure week',
              'Week two, the arts and crafts week',
              'Week three, the sports week',
              'A different week not yet decided',
            ],
            correctIndex: 0,
            explanation:
              'She says, “My two love being outdoors, so let’s go for the adventure week — that’s week one.” Option A matches; weeks two and three (arts and crafts, sports) are the distractors she rejects.',
          },
          {
            id: 'ls-024-s1-q6',
            type: 'gap',
            prompt:
              'Each day, the camp runs from nine in the morning until ____________. Write the time as you hear it.',
            acceptableAnswers: [
              '3.30',
              '3:30',
              'half past three',
              'half past 3',
              '15:30',
              '3.30pm',
              '3:30 pm',
            ],
            explanation:
              'He says, “The camp runs each day from nine in the morning until half past three.” The finishing time is 3.30 (nine o’clock is the start time, a distractor).',
          },
          {
            id: 'ls-024-s1-q7',
            type: 'mcq',
            prompt: 'How much will the parent pay in total for the week?',
            options: [
              'Eighty pounds, the standard price per child',
              'A hundred and sixty pounds, for two children at the standard rate',
              'A hundred and fifty pounds, with a discount on the second child',
              'Seventy pounds, for one child with a discount',
            ],
            correctIndex: 2,
            explanation:
              'It is eighty pounds per child, but “for a second child from the same family we take ten pounds off, so the second one is seventy.” With two children (Q3) that is £80 + £70 = £150, which the caller confirms: “So that’s a hundred and fifty for the two of them.” The distractors apply the wrong rate or number of children.',
          },
          {
            id: 'ls-024-s1-q8',
            type: 'gap',
            prompt:
              'Each day, children must bring a waterproof ____________, as many activities are outside. Write ONE WORD.',
            acceptableAnswers: ['coat', 'jacket'],
            explanation:
              'He says, “please pack a waterproof coat each day, whatever the forecast, because a lot of the activities are outside.” The answer is “coat” (jacket accepted as a synonym).',
          },
          {
            id: 'ls-024-s1-q9',
            type: 'mcq',
            prompt: 'What does the assistant say about lunch?',
            options: [
              'Children should bring a packed lunch',
              'A hot lunch is provided',
              'Lunch costs an extra ten pounds',
              'There is no lunch break',
            ],
            correctIndex: 1,
            explanation:
              'When she asks whether they need to bring lunch, he replies, “No, a hot lunch is provided.” Option B matches; bringing a packed lunch is the option he rules out.',
          },
          {
            id: 'ls-024-s1-q10',
            type: 'gap',
            prompt:
              'At drop-off, parents should tell staff about any ____________. Write ONE WORD.',
            acceptableAnswers: ['allergies', 'allergy'],
            explanation:
              'He says, “Just let us know about any allergies when you drop them off.” The answer is “allergies”.',
          },
        ],
      },
      {
        id: 'ls-academic-024-s2',
        title: 'Section 2 — A guided tour of Harewell Hall',
        // ~320 words. Informational monologue (Section 2 style): a single speaker
        // gives a guided tour of a historic country house, covering its history,
        // rooms, café, gardens and tour times. Uses sequencing/signpost language
        // ("to begin", "next", "after that", "finally") and includes a matching
        // task in which each named room is paired with its present-day use.
        transcript: `Good morning, everyone, and welcome to Harewell Hall. My name's Sophie, and I'll be your guide this morning. Before we go in, a little history. The hall was built in sixteen forty by a wealthy wool merchant, and it stayed in the same family for almost three hundred years before being given to the National Trust in nineteen thirty-two.

Now, let me walk you through the rooms we'll see, because each one is used differently today. To begin, we enter through the Great Hall — that's the grand room with the high ceiling, and it now houses the ticket desk and a small exhibition on the house's history. Next, just off the hall, is the old library, which has been carefully restored and is the one room where, I'm afraid, photography is not allowed, to protect the rare books. After that we'll pass through the dining room, which the family still lays out exactly as it was for a Victorian dinner. And finally, upstairs, the long gallery — once used for exercise on rainy days — is now hung with the family's portrait collection.

A word about refreshments. The café is not in the main house but in the old stable block across the courtyard, and I'd recommend the homemade scones. It's open until half past four.

The gardens are really the highlight for many visitors. Do leave time for the walled rose garden, which was replanted last spring and is at its best in June.

Finally, tour times. Guided tours like this one leave the Great Hall every hour, on the hour. The last tour of the day is at four o'clock, and the house itself closes at five. Right — let's head inside and begin.`,
        questions: [
          {
            id: 'ls-024-s2-q11',
            type: 'gap',
            prompt: 'Harewell Hall was originally built in the year ____________. Write A NUMBER.',
            acceptableAnswers: ['1640', 'sixteen forty'],
            explanation:
              'The guide says, “The hall was built in sixteen forty by a wealthy wool merchant.” The answer is 1640.',
          },
          {
            id: 'ls-024-s2-q12',
            type: 'gap',
            prompt:
              'The hall was given to the National Trust in the year ____________. Write A NUMBER.',
            acceptableAnswers: ['1932', 'nineteen thirty-two', 'nineteen thirty two'],
            explanation:
              'She says it stayed in the same family “before being given to the National Trust in nineteen thirty-two.” The answer is 1932 (1640 is the year it was built, a distractor).',
          },
          {
            id: 'ls-024-s2-q13',
            type: 'matching',
            variant: 'features',
            prompt:
              'What is each room in the hall used for today? Choose your answer from the list and match it to each room (Questions 13–16).',
            options: [
              { key: 'tickets', label: 'The ticket desk and a history exhibition' },
              { key: 'books', label: 'A restored room of rare books' },
              { key: 'dinner', label: 'A table laid out for a Victorian dinner' },
              { key: 'portraits', label: 'The family’s portrait collection' },
            ],
            items: [
              { id: 's2-m-greathall', text: 'The Great Hall', answer: 'tickets' },
              { id: 's2-m-library', text: 'The old library', answer: 'books' },
              { id: 's2-m-dining', text: 'The dining room', answer: 'dinner' },
              { id: 's2-m-gallery', text: 'The long gallery', answer: 'portraits' },
            ],
            explanation:
              'The guide assigns each room a present-day use: the Great Hall “now houses the ticket desk and a small exhibition on the house’s history”; the old library is “restored” and holds “rare books”; the dining room is laid “exactly as it was for a Victorian dinner”; and the long gallery “is now hung with the family’s portrait collection.” Each item is worth one mark (Questions 13, 14, 15 and 16).',
          },
          {
            id: 'ls-024-s2-q17',
            type: 'mcq',
            prompt: 'In which room is photography not allowed?',
            options: ['The Great Hall', 'The old library', 'The dining room', 'The long gallery'],
            correctIndex: 1,
            explanation:
              'The guide says the old library “is the one room where, I’m afraid, photography is not allowed, to protect the rare books.” Option B matches.',
          },
          {
            id: 'ls-024-s2-q18',
            type: 'gap',
            prompt:
              'The café is located not in the main house but in the old ____________ block. Write ONE WORD.',
            acceptableAnswers: ['stable', 'stables'],
            explanation:
              'She says, “The café is not in the main house but in the old stable block across the courtyard.” The answer is “stable”.',
          },
          {
            id: 'ls-024-s2-q19',
            type: 'gap',
            prompt:
              'The guide particularly recommends the homemade ____________ at the café. Write ONE WORD.',
            acceptableAnswers: ['scones', 'scone'],
            explanation: 'She says, “I’d recommend the homemade scones.” The answer is “scones”.',
          },
          {
            id: 'ls-024-s2-q20',
            type: 'gap',
            prompt:
              'Visitors are advised to leave time for the walled ____________ garden. Write ONE WORD.',
            acceptableAnswers: ['rose'],
            explanation:
              'She says, “Do leave time for the walled rose garden, which was replanted last spring.” The answer is “rose”.',
          },
        ],
      },
      {
        id: 'ls-academic-024-s3',
        title: 'Section 3 — Tutorial: planning a sociology survey project',
        // ~315 words. Academic discussion (Section 3 style): two students (Lauren
        // and Sam) and a tutor (Dr Bashir) plan a sociology survey project,
        // covering the research question, the sample, the questionnaire structure,
        // ethics and the deadline. The questions mix multiple choice
        // (decisions/opinions) and completion (concrete details) with a matching
        // task that pairs each section of the questionnaire with its focus.
        transcript: `DR BASHIR: Come in, Lauren, Sam. Let's plan your sociology survey project. Have you decided on a research question?

LAUREN: We have. We're looking at how students get to campus — specifically, what makes them choose cycling over driving or the bus.

DR BASHIR: A nice, answerable question. Now, your sample. Who exactly are you going to survey?

SAM: We were going to survey the whole university, but that's thousands of people, so we've narrowed it to first-year undergraduates only. There are about four hundred of them.

DR BASHIR: Sensible — a defined group is far easier to interpret. And how big a sample are you aiming for?

LAUREN: We'd like a hundred completed responses, which should be representative enough.

DR BASHIR: That's a good target. Now, the questionnaire itself — how is it structured?

SAM: It's in three sections. The first section gathers basic background details — age, year, where they live. The second asks about their actual travel habits, like how often they cycle. And the third explores their attitudes — what would persuade them to cycle more.

DR BASHIR: Good logical order. One thing I must stress is ethics. Because you're collecting personal data, every respondent must give informed consent, and you must promise them anonymity — no names attached to answers.

LAUREN: We've drafted a consent form already.

DR BASHIR: Excellent. Make sure participants know they can withdraw at any time. Now, how will you actually distribute it?

SAM: Online, through a link emailed to the year group. It's far quicker than paper.

DR BASHIR: Agreed, and easier to analyse. Finally, the deadline. Your written report is due on the second of June, and remember to include your raw data in an appendix.

LAUREN: Will do. We'll aim to close the survey a week before that.`,
        questions: [
          {
            id: 'ls-024-s3-q21',
            type: 'mcq',
            prompt: 'What is the focus of the students’ research question?',
            options: [
              'Why students choose cycling over driving or the bus',
              'How much students spend on transport',
              'Whether the campus needs more car parking',
              'How far students live from campus',
            ],
            correctIndex: 0,
            explanation:
              'Lauren says they are looking at “how students get to campus — specifically, what makes them choose cycling over driving or the bus.” Option A matches the research question.',
          },
          {
            id: 'ls-024-s3-q22',
            type: 'mcq',
            prompt: 'Which group of people did the students finally decide to survey?',
            options: [
              'The whole university',
              'First-year undergraduates only',
              'Staff and students together',
              'Postgraduate students only',
            ],
            correctIndex: 1,
            explanation:
              'Sam says they planned to survey the whole university “but that’s thousands of people, so we’ve narrowed it to first-year undergraduates only.” Option B matches; surveying the whole university is the option they reject.',
          },
          {
            id: 'ls-024-s3-q23',
            type: 'gap',
            prompt: 'The students are aiming for ____________ completed responses. Write A NUMBER.',
            acceptableAnswers: ['100', 'a hundred', 'one hundred'],
            explanation:
              'Lauren says, “We’d like a hundred completed responses, which should be representative enough.” The answer is 100 (four hundred is the size of the whole year group, a distractor).',
          },
          {
            id: 'ls-024-s3-q24',
            type: 'matching',
            variant: 'features',
            prompt:
              'The questionnaire has three sections. Match each section to what it focuses on (Questions 24–26).',
            options: [
              { key: 'background', label: 'Basic background details' },
              { key: 'habits', label: 'Actual travel habits' },
              { key: 'attitudes', label: 'Attitudes and what would persuade them' },
            ],
            items: [
              { id: 's3-m-first', text: 'The first section', answer: 'background' },
              { id: 's3-m-second', text: 'The second section', answer: 'habits' },
              { id: 's3-m-third', text: 'The third section', answer: 'attitudes' },
            ],
            explanation:
              'Sam says, “The first section gathers basic background details — age, year, where they live. The second asks about their actual travel habits, like how often they cycle. And the third explores their attitudes — what would persuade them to cycle more.” Each item is worth one mark (Questions 24, 25 and 26).',
          },
          {
            id: 'ls-024-s3-q27',
            type: 'gap',
            prompt:
              'Because they are collecting personal data, every respondent must give informed ____________. Write ONE WORD.',
            acceptableAnswers: ['consent'],
            explanation:
              'The tutor says, “every respondent must give informed consent, and you must promise them anonymity.” The answer is “consent”.',
          },
          {
            id: 'ls-024-s3-q28',
            type: 'gap',
            prompt:
              'The students must also promise respondents ____________, so that no names are attached to answers. Write ONE WORD.',
            acceptableAnswers: ['anonymity'],
            explanation:
              'The tutor says they “must promise them anonymity — no names attached to answers.” The answer is “anonymity”.',
          },
          {
            id: 'ls-024-s3-q29',
            type: 'mcq',
            prompt: 'How do the students plan to distribute the questionnaire?',
            options: [
              'On paper, handed out on campus',
              'Online, through an emailed link',
              'By post to students’ home addresses',
              'In face-to-face interviews',
            ],
            correctIndex: 1,
            explanation:
              'Sam says they will distribute it “Online, through a link emailed to the year group. It’s far quicker than paper.” Option B matches; paper is the slower option they reject.',
          },
          {
            id: 'ls-024-s3-q30',
            type: 'gap',
            prompt:
              'The written report is due on the ____________ of June. Write the date as you hear it.',
            acceptableAnswers: ['2nd', 'second', '2'],
            explanation:
              'The tutor says, “Your written report is due on the second of June.” The answer is the second (2nd).',
          },
        ],
      },
      {
        id: 'ls-academic-024-s4',
        title: 'Section 4 — Lecture: the migration of early humans',
        // ~320 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the migration of early humans
        // out of Africa — the evidence, the routes and what drove the movement.
        // Dense, factual and signposted ("let me begin", "next", "finally"), with
        // the note/sentence-completion + multiple-choice mix typical of Section 4,
        // including one True/False/Not Given item.
        transcript: `Good morning. Today's lecture concerns one of the great stories of our species: how early modern humans spread out from a single continent to cover almost the entire globe. I'll look at where it began, the evidence we rely on, the routes taken, and what may have driven people to move.

Let me begin with the origin. The overwhelming consensus is that our species, Homo sapiens, first arose in Africa, and that every human alive outside Africa today descends from groups who left that continent. The main wave of this migration is generally dated to around sixty thousand years ago.

Now, the evidence. Historically, the picture was built almost entirely from fossils — actual bones found in the ground. But in recent decades the most powerful tool has been genetics. By comparing the DNA of living populations, researchers can trace how groups are related and roughly when they separated. It's worth stressing that genetic and fossil evidence largely agree, which gives us real confidence in the overall story.

Next, the routes. There were two principal ones. The first, often called the southern route, hugged the coastline of southern Asia, and people may have moved surprisingly fast along it, living off the rich resources of the shore. The second was a northern route, leading up into Europe and across the plains of central Asia.

Finally, what drove this movement? The single most important factor, most researchers agree, was climate. Shifts in climate repeatedly opened and closed green corridors across otherwise hostile land. When a region became wetter, it could support the animals people hunted, and populations followed that food. So it was less a deliberate journey than a slow following of resources. Next week we'll examine what happened when these migrants met other human species already living in Europe and Asia.`,
        questions: [
          {
            id: 'ls-024-s4-q31',
            type: 'gap',
            prompt:
              'The consensus is that the species Homo sapiens first arose in ____________. Write ONE WORD.',
            acceptableAnswers: ['Africa', 'africa'],
            explanation:
              'The speaker says, “our species, Homo sapiens, first arose in Africa.” The answer is “Africa”.',
          },
          {
            id: 'ls-024-s4-q32',
            type: 'gap',
            prompt:
              'The main wave of migration is generally dated to around ____________ thousand years ago. Write A NUMBER.',
            acceptableAnswers: ['60', 'sixty'],
            explanation:
              'The speaker says the main wave “is generally dated to around sixty thousand years ago.” The answer is 60.',
          },
          {
            id: 'ls-024-s4-q33',
            type: 'mcq',
            prompt:
              'According to the lecture, what was the historical picture of migration built from?',
            options: [
              'Genetic data from living people',
              'Fossils — actual bones found in the ground',
              'Written historical records',
              'Ancient cave paintings',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “Historically, the picture was built almost entirely from fossils — actual bones found in the ground.” Option B matches; genetics is described as the recent tool, not the historical one.',
          },
          {
            id: 'ls-024-s4-q34',
            type: 'gap',
            prompt:
              'In recent decades, the most powerful tool for studying migration has been ____________. Write ONE WORD.',
            acceptableAnswers: ['genetics'],
            explanation:
              'The speaker says, “in recent decades the most powerful tool has been genetics.” The answer is “genetics”.',
          },
          {
            id: 'ls-024-s4-q35',
            type: 'tfng',
            prompt:
              'The speaker says that the genetic evidence and the fossil evidence contradict each other.',
            answer: 'false',
            explanation:
              'The speaker states the opposite: “genetic and fossil evidence largely agree, which gives us real confidence in the overall story.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-024-s4-q36',
            type: 'gap',
            prompt:
              'By comparing the ____________ of living populations, researchers can trace how groups are related. Write ONE WORD.',
            acceptableAnswers: ['DNA'],
            explanation:
              'The speaker says, “By comparing the DNA of living populations, researchers can trace how groups are related.” The answer is “DNA”.',
          },
          {
            id: 'ls-024-s4-q37',
            type: 'gap',
            prompt:
              'The first migration route, the southern route, hugged the ____________ of southern Asia. Write ONE WORD.',
            acceptableAnswers: ['coastline', 'coast'],
            explanation:
              'The speaker says the southern route “hugged the coastline of southern Asia.” The answer is “coastline”.',
          },
          {
            id: 'ls-024-s4-q38',
            type: 'mcq',
            prompt: 'Where did the second, northern route lead?',
            options: [
              'Along the coast of southern Asia',
              'Up into Europe and across central Asia',
              'South into the African interior',
              'Across the Pacific to the Americas',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the second route “was a northern route, leading up into Europe and across the plains of central Asia.” Option B matches; the coastal description belongs to the southern route.',
          },
          {
            id: 'ls-024-s4-q39',
            type: 'mcq',
            prompt:
              'According to the lecture, what was the single most important factor driving migration?',
            options: [
              'Warfare between rival groups',
              'Climate change',
              'A deliberate spirit of exploration',
              'Population overcrowding',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “The single most important factor, most researchers agree, was climate”, adding that it “was less a deliberate journey than a slow following of resources.” Option B matches; the lecture explicitly rejects a deliberate journey.',
          },
          {
            id: 'ls-024-s4-q40',
            type: 'gap',
            prompt:
              'When a region became wetter, it could support the animals people hunted, and populations followed that ____________. Write ONE WORD.',
            acceptableAnswers: ['food'],
            explanation:
              'The speaker says, “When a region became wetter, it could support the animals people hunted, and populations followed that food.” The answer is “food”.',
          },
        ],
      },
    ],
  },
]
