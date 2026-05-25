// ─── IELTS Academic Listening - practice test data (Set 18) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 questions, 10 per section) that mirror the real IELTS Listening paper,
// with topics deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a caller booking a
//     holiday cottage), assessed with form / note completion + a multiple-choice
//     item. A surname is spelled and a phone number is dictated, and one detail
//     (the total price) depends on a stated choice (the number of nights booked).
//   • Section 2 - an everyday MONOLOGUE (here: a local radio feature on a
//     farmers' market), assessed with sentence completion, multiple choice and a
//     matching task, carrying signpost language ("to start with", "next",
//     "finally") that the questions track in order.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial planning a psychology experiment), assessed with multiple choice +
//     completion (hypothesis, participants, method, ethics).
//   • Section 4 - an academic LECTURE / monologue (here: the history of tea, from
//     its origins through trade routes to processing and cultural impact),
//     assessed with note/sentence completion + multiple choice, including one
//     True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched
//                  case-insensitively and trimmed by the marker. The official
//                  word-limit instruction lives in the prompt.
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'tfng'     → True / False / Not Given.
//   • 'matching' → each item scores ONE mark; `item.answer` is an option `key`.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// Question numbering is CONTINUOUS q1-q40 across the four sections, mirroring the
// real paper. All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_18: ListeningTest[] = [
  {
    id: 'ls-academic-018',
    title:
      'Practice Test 18 - Booking a Holiday Cottage, A Farmers’ Market Radio Feature, Planning a Psychology Experiment & The History of Tea',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-018-s1',
        title: 'Section 1 - Booking a holiday cottage',
        // ~300 words. Transactional dialogue (Section 1 style): a caller phoning a
        // holiday-letting agency to book a self-catering cottage. A surname is
        // spelled and a mobile number is dictated; the total price depends on a
        // stated choice (the number of nights booked), mirroring the form/note-
        // completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good morning, Meadowbrook Holiday Cottages, Sophie speaking. How can I help you?

MAN: Hello. I'd like to book one of your cottages for a short break, if you have anything free next month.

WOMAN: I'm sure we do. Let me take a few details. Could I start with your name, please?

MAN: Yes, it's Thomas Pemberton. Pemberton is spelled P-E-M-B-E-R-T-O-N.

WOMAN: Thank you. And a mobile number in case we need to reach you?

MAN: It's oh-seven-nine-three-three, double four, one-oh-two.

WOMAN: Lovely. Now, which dates were you thinking of?

MAN: We'd like to arrive on the fourteenth of June and stay for three nights, so leaving on the seventeenth.

WOMAN: That's fine. And how many people would be staying?

MAN: There are six of us - four adults and two children.

WOMAN: In that case I'd recommend our largest property, Rose Cottage. It sleeps six and has a lovely garden.

MAN: That sounds ideal. What's the price?

WOMAN: Rose Cottage is ninety pounds a night, so for three nights that comes to two hundred and seventy pounds altogether.

MAN: Fine. Do you need a deposit?

WOMAN: Yes, we ask for a deposit of fifty pounds to confirm the booking, and the balance is due on arrival.

MAN: No problem. Is there anything we should know before we come?

WOMAN: Just one thing - the cottage doesn't allow pets, I'm afraid. Oh, and parking is free, with space for two cars.

MAN: That's all fine. We don't have a dog anyway.

WOMAN: Wonderful. I'll email the confirmation across to you today.`,
        questions: [
          {
            id: 'ls-018-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Pemberton', 'pemberton'],
            explanation:
              'The caller gives his name as “Thomas Pemberton” and spells the surname: P-E-M-B-E-R-T-O-N. In Section 1, names are almost always spelled aloud - write them down letter by letter.',
          },
          {
            id: 'ls-018-s1-q2',
            type: 'gap',
            prompt: 'Contact mobile number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['07933 44102', '0793344102', '07933 441 02', '07933 44 102'],
            explanation:
              'He dictates the number as “oh-seven-nine-three-three, double four, one-oh-two” - that is 07933 44102. “Double four” means two 4s and “oh” is zero; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-018-s1-q3',
            type: 'gap',
            prompt:
              'The party would like to arrive on the ____________ of June. Write A NUMBER (the date).',
            acceptableAnswers: ['14th', '14', 'fourteenth'],
            explanation:
              'He says, “We’d like to arrive on the fourteenth of June.” The arrival date is the 14th (they leave on the 17th, a distractor).',
          },
          {
            id: 'ls-018-s1-q4',
            type: 'gap',
            prompt: 'Total number of guests staying: ____________. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation:
              'He says, “There are six of us - four adults and two children.” The total is 6, which is why the agent recommends the cottage that sleeps six.',
          },
          {
            id: 'ls-018-s1-q5',
            type: 'gap',
            prompt:
              'The agent recommends the largest property, ____________ Cottage. Write ONE WORD.',
            acceptableAnswers: ['Rose', 'rose'],
            explanation:
              'She says, “I’d recommend our largest property, Rose Cottage. It sleeps six.” The answer is “Rose”.',
          },
          {
            id: 'ls-018-s1-q6',
            type: 'mcq',
            prompt: 'How much will the guests pay in total for their stay?',
            options: [
              'Ninety pounds, the price for one night',
              'Two hundred and seventy pounds, for three nights',
              'Fifty pounds, the deposit only',
              'Three hundred and sixty pounds, for four nights',
            ],
            correctIndex: 1,
            explanation:
              'The cottage is “ninety pounds a night, so for three nights that comes to two hundred and seventy pounds altogether.” With three nights (Q3), the total is 3 × £90 = £270. The distractors reuse the figures but apply the wrong number of nights or quote the deposit.',
          },
          {
            id: 'ls-018-s1-q7',
            type: 'gap',
            prompt:
              'To confirm the booking, the customer must pay a ____________ of fifty pounds. Write ONE WORD.',
            acceptableAnswers: ['deposit'],
            explanation:
              'She says, “we ask for a deposit of fifty pounds to confirm the booking.” The answer is “deposit”.',
          },
          {
            id: 'ls-018-s1-q8',
            type: 'mcq',
            prompt: 'When is the rest of the money (the balance) due?',
            options: ['When booking online', 'On arrival', 'One week before the stay', 'By post'],
            correctIndex: 1,
            explanation:
              'She says “the balance is due on arrival.” Option B matches; no online, postal or advance payment is mentioned.',
          },
          {
            id: 'ls-018-s1-q9',
            type: 'gap',
            prompt: 'The cottage does not allow ____________. Write ONE WORD.',
            acceptableAnswers: ['pets', 'pet'],
            explanation:
              'She warns, “the cottage doesn’t allow pets, I’m afraid.” The answer is “pets”.',
          },
          {
            id: 'ls-018-s1-q10',
            type: 'gap',
            prompt: 'Parking is free, with space for ____________ cars. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation: 'She says, “parking is free, with space for two cars.” The answer is 2.',
          },
        ],
      },
      {
        id: 'ls-academic-018-s2',
        title: 'Section 2 - A radio feature on a farmers’ market',
        // ~305 words. Informational monologue (Section 2 style): a single presenter
        // delivers a local radio feature on a weekly farmers' market. Uses
        // sequencing/signpost language ("to start with", "next", "finally") that the
        // questions follow, with a sentence-completion + multiple-choice + matching
        // mix. The matching task pairs stalls to what each one sells.
        transcript: `Hello and welcome back to Town and Country on Riverside Radio. This week I'm down at the Hartley Green farmers' market, which takes place every Saturday morning here in the market square. If you've never been, let me talk you through what's on offer.

The market has grown enormously over the past few years. To start with, there are now more than forty stalls, and almost everything is produced within thirty miles of here, so it really is local.

Let me pick out a few favourites. Right by the entrance you'll find Hartley Dairy, and they sell the most wonderful cheese - they make it on the farm just outside town. Next to them is the Greenfield stall, which is the place to go for fresh vegetables, all picked that very morning. A little further along, Wheatsheaf Bakery has a stall piled high with bread, and the smell alone is worth the trip. And in the far corner, don't miss Hilltop Orchard, who press their own apple juice on the spot.

Now, a couple of practical points. Parking can be tricky in the square itself, so I'd strongly advise using the free car park behind the library, which is just a two-minute walk away. And do bring cash - although a few stalls now take cards, many of the smaller traders still don't.

Finally, a date for your diary. On the last Saturday of this month, the market is holding a special cookery demonstration, where a local chef will show you how to make a meal using only ingredients bought that day. It starts at eleven o'clock and it's completely free. So do come along - I promise you won't leave empty-handed. Back to the studio.`,
        questions: [
          {
            id: 'ls-018-s2-q11',
            type: 'gap',
            prompt:
              'The farmers’ market takes place every ____________ morning in the market square. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Saturday', 'saturday'],
            explanation:
              'The presenter says the market “takes place every Saturday morning here in the market square.” The answer is “Saturday”.',
          },
          {
            id: 'ls-018-s2-q12',
            type: 'mcq',
            prompt: 'How many stalls does the market now have?',
            options: ['Fewer than twenty', 'Around thirty', 'More than forty', 'Exactly fifty'],
            correctIndex: 2,
            explanation:
              'The presenter says “there are now more than forty stalls.” Option C matches; thirty refers to the thirty-mile sourcing radius, a distractor.',
          },
          {
            id: 'ls-018-s2-q13',
            type: 'gap',
            prompt:
              'Almost everything sold is produced within ____________ miles of the market. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'The presenter says “almost everything is produced within thirty miles of here.” The answer is 30.',
          },
          {
            id: 'ls-018-s2-q14-q17',
            type: 'matching',
            variant: 'features',
            prompt:
              'What does each stall mainly sell? Match each stall (Questions 14-17) to the correct product from the list A-E. You will NOT need all the products.',
            options: [
              { key: 'A', label: 'Cheese' },
              { key: 'B', label: 'Vegetables' },
              { key: 'C', label: 'Bread' },
              { key: 'D', label: 'Apple juice' },
              { key: 'E', label: 'Meat' },
            ],
            items: [
              { id: 'ls-018-s2-q14', text: 'Hartley Dairy', answer: 'A' },
              { id: 'ls-018-s2-q15', text: 'Greenfield', answer: 'B' },
              { id: 'ls-018-s2-q16', text: 'Wheatsheaf Bakery', answer: 'C' },
              { id: 'ls-018-s2-q17', text: 'Hilltop Orchard', answer: 'D' },
            ],
            explanation:
              'The presenter pairs each stall with its product: Hartley Dairy “sell the most wonderful cheese” (A); the Greenfield stall is “the place to go for fresh vegetables” (B); Wheatsheaf Bakery has a stall “piled high with bread” (C); and Hilltop Orchard “press their own apple juice” (D). Meat (E) is never mentioned, so it is the unused option.',
          },
          {
            id: 'ls-018-s2-q18',
            type: 'gap',
            prompt:
              'The presenter advises using the free car park behind the ____________. Write ONE WORD.',
            acceptableAnswers: ['library'],
            explanation:
              'He advises “using the free car park behind the library, which is just a two-minute walk away.” The answer is “library”.',
          },
          {
            id: 'ls-018-s2-q19',
            type: 'mcq',
            prompt: 'What does the presenter advise visitors to bring?',
            options: [
              'A reusable shopping bag',
              'Cash, as many traders do not take cards',
              'An umbrella',
              'A printed map of the stalls',
            ],
            correctIndex: 1,
            explanation:
              'He says, “do bring cash - although a few stalls now take cards, many of the smaller traders still don’t.” Option B matches.',
          },
          {
            id: 'ls-018-s2-q20',
            type: 'gap',
            prompt:
              'On the last Saturday of the month there will be a special cookery ____________ led by a local chef. Write ONE WORD.',
            acceptableAnswers: ['demonstration'],
            explanation:
              'He says the market is “holding a special cookery demonstration, where a local chef will show you how to make a meal.” The answer is “demonstration”.',
          },
        ],
      },
      {
        id: 'ls-academic-018-s3',
        title: 'Section 3 - Tutorial: planning a psychology experiment',
        // ~310 words. Academic discussion (Section 3 style): two students (Hannah and
        // Daniel) and a tutor (Dr Okafor) plan a psychology experiment. Speakers
        // agree a hypothesis, the participant sample, the method and an ethics issue,
        // so the questions mix multiple choice (decisions) with completion (concrete
        // details such as numbers and key terms).
        transcript: `DR OKAFOR: So, Hannah and Daniel, let's plan out your psychology experiment. What's your hypothesis?

HANNAH: We want to test whether listening to music while studying affects how much people remember. Our prediction is that background music actually reduces memory recall.

DR OKAFOR: A clear, testable hypothesis. Good. Now, who are your participants going to be?

DANIEL: We're recruiting fellow students from the university. We're aiming for sixty in total, split into two equal groups of thirty.

DR OKAFOR: And what's the difference between the two groups?

HANNAH: One group memorises a list of words in silence - that's our control group. The other group does exactly the same task, but with music playing in the background.

DR OKAFOR: Right, so the independent variable is the presence of music. How will you measure the outcome?

DANIEL: We'll count how many of the twenty words each person can recall after a short break. So the score out of twenty is our dependent variable.

DR OKAFOR: Good. Now, you must think carefully about ethics. What have you considered?

HANNAH: The most important thing is consent - every participant has to agree to take part, and we'll ask them to sign a form beforehand.

DR OKAFOR: Absolutely. And remember, they must be free to withdraw at any point, even halfway through, without giving a reason.

DANIEL: Yes, we've made that clear on the form. We'll also keep all the results anonymous, so no one can be identified.

DR OKAFOR: Excellent. One last thing - do run a small pilot study first, with just a handful of people, to check your instructions are clear before you test the whole sample.

HANNAH: That's a good idea. We'll do that next week.`,
        questions: [
          {
            id: 'ls-018-s3-q21',
            type: 'mcq',
            prompt: 'What is the students’ hypothesis?',
            options: [
              'That background music improves memory recall',
              'That background music reduces memory recall',
              'That silence makes studying more stressful',
              'That music has no effect on memory at all',
            ],
            correctIndex: 1,
            explanation:
              'Hannah says, “Our prediction is that background music actually reduces memory recall.” Option B matches the stated hypothesis.',
          },
          {
            id: 'ls-018-s3-q22',
            type: 'gap',
            prompt:
              'The students will recruit their participants from fellow ____________ at the university. Write ONE WORD.',
            acceptableAnswers: ['students', 'student'],
            explanation:
              'Daniel says, “We’re recruiting fellow students from the university.” The answer is “students”.',
          },
          {
            id: 'ls-018-s3-q23',
            type: 'gap',
            prompt: 'They are aiming for ____________ participants in total. Write A NUMBER.',
            acceptableAnswers: ['60', 'sixty'],
            explanation:
              'Daniel says they are “aiming for sixty in total, split into two equal groups of thirty.” The total is 60 (thirty is the size of each group, a distractor).',
          },
          {
            id: 'ls-018-s3-q24',
            type: 'mcq',
            prompt: 'What is the difference between the two groups?',
            options: [
              'One group studies for longer than the other',
              'One group memorises words in silence and the other with music playing',
              'One group is given easier words to learn',
              'One group studies at home and the other in the lab',
            ],
            correctIndex: 1,
            explanation:
              'Hannah explains one group “memorises a list of words in silence - that’s our control group,” while “the other group does exactly the same task, but with music playing in the background.” Option B matches.',
          },
          {
            id: 'ls-018-s3-q25',
            type: 'gap',
            prompt:
              'The group that memorises the words in silence is called the ____________ group. Write ONE WORD.',
            acceptableAnswers: ['control'],
            explanation:
              'Hannah says the silent group is “our control group.” The answer is “control”.',
          },
          {
            id: 'ls-018-s3-q26',
            type: 'gap',
            prompt:
              'Each participant will try to recall a list of ____________ words after a short break. Write A NUMBER.',
            acceptableAnswers: ['20', 'twenty'],
            explanation:
              'Daniel says they will “count how many of the twenty words each person can recall after a short break.” The answer is 20.',
          },
          {
            id: 'ls-018-s3-q27',
            type: 'mcq',
            prompt: 'According to Daniel, what is the dependent variable in the experiment?',
            options: [
              'Whether music is playing or not',
              'The participant’s score out of twenty',
              'The length of the study break',
              'The age of each participant',
            ],
            correctIndex: 1,
            explanation:
              'Daniel says, “the score out of twenty is our dependent variable.” The presence of music is the independent variable, a distractor. Option B matches.',
          },
          {
            id: 'ls-018-s3-q28',
            type: 'gap',
            prompt:
              'On ethics, the most important thing is ____________: every participant must agree to take part. Write ONE WORD.',
            acceptableAnswers: ['consent'],
            explanation:
              'Hannah says, “The most important thing is consent - every participant has to agree to take part.” The answer is “consent”.',
          },
          {
            id: 'ls-018-s3-q29',
            type: 'mcq',
            prompt: 'What does the tutor remind the students about participants’ rights?',
            options: [
              'They must be paid for taking part',
              'They must be free to withdraw at any point without giving a reason',
              'They must complete the whole study once they begin',
              'They must be over the age of twenty-one',
            ],
            correctIndex: 1,
            explanation:
              'Dr Okafor says they “must be free to withdraw at any point, even halfway through, without giving a reason.” Option B matches.',
          },
          {
            id: 'ls-018-s3-q30',
            type: 'gap',
            prompt:
              'The tutor advises running a small ____________ study first to check the instructions are clear. Write ONE WORD.',
            acceptableAnswers: ['pilot'],
            explanation:
              'Dr Okafor says, “do run a small pilot study first … to check your instructions are clear.” The answer is “pilot”.',
          },
        ],
      },
      {
        id: 'ls-academic-018-s4',
        title: 'Section 4 - Lecture: the history of tea',
        // ~315 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the history of tea - its origins
        // in China, its spread along trade routes, how it is processed, and its
        // cultural impact. Dense, factual and signposted ("let me begin", "next",
        // "finally"), with the note/sentence-completion + multiple-choice mix typical
        // of Section 4, including one True/False/Not Given item.
        transcript: `Good afternoon. Today I want to tell the story of tea - a single plant that has shaped trade, empires and daily life across the globe. I'll trace its journey from origin to the cup in front of you.

Let me begin with origins. All true tea comes from one species of evergreen shrub, called Camellia sinensis. Its home is China, and according to legend it was discovered there nearly five thousand years ago, when a few leaves blew into the cup of boiling water of a Chinese emperor. Whatever the truth of that tale, China was certainly drinking tea long before anyone else.

Next, let's follow how it spread. For centuries tea travelled westward overland, carried by caravans along the routes we now call the Silk Road. It reached Europe much later, and it was Dutch traders who first brought it to the continent in significant quantities, in the early seventeenth century. It is sometimes claimed that the British were the first Europeans to import tea, but that is not correct - they came after the Dutch.

Now, how is tea actually made? It surprises many people to learn that green tea and black tea come from the very same plant. The difference lies entirely in the processing. The crucial step is oxidation: for black tea, the picked leaves are allowed to oxidise fully, which turns them dark and deepens the flavour, whereas for green tea this process is halted early by heating the leaves.

Finally, a word on cultural impact. Few drinks have done more to shape society. In China and Japan, elaborate tea ceremonies developed, valuing calm and ritual. And in Britain, the eighteenth-century fashion for tea even gave rise to a whole new meal - afternoon tea. Next week, we'll examine the economics of the global tea trade.`,
        questions: [
          {
            id: 'ls-018-s4-q31',
            type: 'gap',
            prompt:
              'All true tea comes from one species of evergreen shrub, called ____________. Write TWO WORDS.',
            acceptableAnswers: ['Camellia sinensis', 'camellia sinensis'],
            explanation:
              'The speaker says, “All true tea comes from one species of evergreen shrub, called Camellia sinensis.” The answer is “Camellia sinensis”.',
          },
          {
            id: 'ls-018-s4-q32',
            type: 'mcq',
            prompt: 'According to the lecture, where did tea originate?',
            options: ['India', 'China', 'Japan', 'The Netherlands'],
            correctIndex: 1,
            explanation:
              'The speaker says the plant’s “home is China,” which “was certainly drinking tea long before anyone else.” Option B matches.',
          },
          {
            id: 'ls-018-s4-q33',
            type: 'gap',
            prompt:
              'According to legend, tea was discovered nearly ____________ thousand years ago. Write A NUMBER.',
            acceptableAnswers: ['5', 'five'],
            explanation:
              'The speaker says it “was discovered there nearly five thousand years ago.” The answer is 5.',
          },
          {
            id: 'ls-018-s4-q34',
            type: 'gap',
            prompt:
              'For centuries, tea travelled westward overland along the routes now called the ____________ Road. Write ONE WORD.',
            acceptableAnswers: ['Silk', 'silk'],
            explanation:
              'The speaker says tea “travelled westward overland, carried by caravans along the routes we now call the Silk Road.” The answer is “Silk”.',
          },
          {
            id: 'ls-018-s4-q35',
            type: 'mcq',
            prompt: 'Which traders first brought tea to Europe in significant quantities?',
            options: ['Portuguese traders', 'British traders', 'Dutch traders', 'Italian traders'],
            correctIndex: 2,
            explanation:
              'The speaker says “it was Dutch traders who first brought it to the continent in significant quantities, in the early seventeenth century.” Option C matches.',
          },
          {
            id: 'ls-018-s4-q36',
            type: 'tfng',
            prompt: 'The speaker states that the British were the first Europeans to import tea.',
            answer: 'false',
            explanation:
              'The speaker says this claim “is not correct - they came after the Dutch.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-018-s4-q37',
            type: 'mcq',
            prompt: 'What does the speaker say about green tea and black tea?',
            options: [
              'They come from two different plants',
              'They come from the same plant but are processed differently',
              'Green tea is always more expensive',
              'Black tea is grown only in Britain',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says “green tea and black tea come from the very same plant. The difference lies entirely in the processing.” Option B matches.',
          },
          {
            id: 'ls-018-s4-q38',
            type: 'gap',
            prompt:
              'The crucial step that distinguishes black tea from green tea is ____________. Write ONE WORD.',
            acceptableAnswers: ['oxidation', 'oxidisation', 'oxidization'],
            explanation:
              'The speaker says, “The crucial step is oxidation,” which is allowed to happen fully for black tea but is halted early for green tea. The answer is “oxidation”.',
          },
          {
            id: 'ls-018-s4-q39',
            type: 'gap',
            prompt:
              'In China and Japan, elaborate tea ____________ developed, valuing calm and ritual. Write ONE WORD.',
            acceptableAnswers: ['ceremonies', 'ceremony'],
            explanation:
              'The speaker says, “In China and Japan, elaborate tea ceremonies developed, valuing calm and ritual.” The answer is “ceremonies”.',
          },
          {
            id: 'ls-018-s4-q40',
            type: 'gap',
            prompt:
              'In Britain, the fashion for tea gave rise to a new meal known as ____________ tea. Write ONE WORD.',
            acceptableAnswers: ['afternoon'],
            explanation:
              'The speaker says the fashion for tea “gave rise to a whole new meal - afternoon tea.” The answer is “afternoon”.',
          },
        ],
      },
    ],
  },
]
