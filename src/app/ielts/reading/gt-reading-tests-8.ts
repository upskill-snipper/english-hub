// ─── IELTS General Training (GT) Reading - practice item bank (Set 8) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary completion and Matching). Framed as "IELTS
// preparation" only - no official affiliation is implied. General Training.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, guides, advertisements)
// and WORKPLACE texts (policies, staff handbooks), plus one longer
// general-interest article. This file ships ONE complete, carefully-checked GT
// test (3 sections, 40 marks).
//
// Section 1 (everyday/social): a museum visit guide + a residents' parking-
//   permit notice - includes a Matching (features) question.
// Section 2 (workplace): a flexible-working request policy.
// Section 3 (general-interest): the benefits of learning a musical instrument
//   as an adult - six labelled paragraphs (A-F) with a Matching (headings)
//   question worth 5 marks.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_8: ReadingTest[] = [
  {
    id: 'rd-general-008',
    title: 'General Training Reading - Practice Test 8',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - museum guide + parking notice ────────
      {
        id: 'rd-gen-008-p1',
        title: 'Harbourgate City Museum - Visitor Guide & Residents’ Parking Notice',
        body: `HARBOURGATE CITY MUSEUM - A GUIDE FOR YOUR VISIT

Welcome to Harbourgate City Museum. Entry to the permanent galleries is free, though we suggest a donation of £5 to help us care for the collection. Tickets are required only for the temporary exhibition on the top floor, which changes three times a year.

The museum is arranged over four floors, and the layout below will help you plan your time.

GROUND FLOOR - The Harbour Gallery
This gallery tells the story of the town's fishing fleet and the families who depended on it. Most of the objects here were donated by local people, and many can be touched, making this the best starting point for younger children. A short film about life at sea runs every half hour in the corner theatre.

FIRST FLOOR - The Makers' Gallery
Here you will find the tools and products of the trades that once filled the old town: rope-making, boat-building and net-mending. Volunteers, several of whom learned these crafts themselves, give live demonstrations at 11.00 a.m. and 2.00 p.m. each day. Photography without flash is welcome throughout this floor.

SECOND FLOOR - The Quiet Gallery
This floor displays delicate items - old maps, letters and hand-painted charts - under low lighting to protect them from fading. Bags larger than a small handbag must be left in the free lockers near the entrance before you come up. To preserve the calm, this is the one gallery where the café trolley does not go.

TOP FLOOR - The Spinnaker Room
Our changing temporary exhibition is held here and requires a ticket, which you can buy at the front desk or online. The current show, on the history of map-making, runs until the end of August.

FACILITIES
The café on the ground floor serves drinks and light meals until thirty minutes before closing. Wheelchair users can reach every floor by the lift beside the main stairs. Assistance dogs are welcome anywhere in the building; other dogs are not.

─────────────────────────────────────────────

NOTICE TO RESIDENTS - CHANGES TO PARKING PERMITS, OLD TOWN ZONE C

From 1 September the way residents apply for parking permits in Zone C will change. Please read this notice carefully, as the old paper permits will no longer be valid after that date.

Applications will be made online only, through the council website. If you cannot use the website, the library on Quay Street can help you apply free of charge during its normal opening hours. You will need to upload proof that you live in Zone C - a recent utility bill or tenancy agreement is accepted, but a bank statement is not.

Each household may hold up to two resident permits. The first costs £40 a year; the second costs £65. A separate visitor permit, which allows a guest to park for one day at a time, is available in books of ten for £18. Permits are charged per vehicle and cannot be moved between cars.

Permits are renewed once a year. We will send a reminder by email four weeks before yours runs out, so please keep your contact details up to date. A permit that has lapsed cannot simply be extended; you must apply again from the start.`,
        questions: [
          {
            id: 'rd-gen-008-p1-q1',
            type: 'tfng',
            prompt: 'Visitors must pay to enter the permanent galleries.',
            answer: 'false',
            explanation:
              'The guide states that "Entry to the permanent galleries is free, though we suggest a donation of £5." A donation is suggested, not required, so the statement is False.',
          },
          {
            id: 'rd-gen-008-p1-q2',
            type: 'tfng',
            prompt: 'The temporary exhibition on the top floor stays the same all year.',
            answer: 'false',
            explanation:
              'The guide says the temporary exhibition "changes three times a year." Because it changes, it does not stay the same all year, so the statement is False.',
          },
          {
            id: 'rd-gen-008-p1-q3',
            type: 'tfng',
            prompt: 'Visitors may take photographs without flash on the First Floor.',
            answer: 'true',
            explanation:
              'The Makers\' Gallery (First Floor) section states that "Photography without flash is welcome throughout this floor," which supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-008-p1-q4',
            type: 'matching',
            variant: 'features',
            prompt:
              'The museum has four floors, A-D. For each statement below, decide which floor it describes. Write the correct letter, A-D. (Each floor may be chosen more than once.)',
            options: [
              { key: 'A', label: 'A - Ground Floor: The Harbour Gallery' },
              { key: 'B', label: "B - First Floor: The Makers' Gallery" },
              { key: 'C', label: 'C - Second Floor: The Quiet Gallery' },
              { key: 'D', label: 'D - Top Floor: The Spinnaker Room' },
            ],
            items: [
              {
                id: 'i1',
                text: 'Large bags must be left in lockers before entering.',
                answer: 'C',
              },
              {
                id: 'i2',
                text: 'A ticket is needed to go in.',
                answer: 'D',
              },
              {
                id: 'i3',
                text: 'It is recommended as the best place for young children to begin.',
                answer: 'A',
              },
              {
                id: 'i4',
                text: 'People demonstrate traditional crafts twice a day.',
                answer: 'B',
              },
              {
                id: 'i5',
                text: 'The café trolley does not come to this floor.',
                answer: 'C',
              },
            ],
            explanation:
              'i1 and i5 - the Second Floor (Quiet Gallery) is where bags larger than a small handbag must be left in lockers and is "the one gallery where the café trolley does not go," so both are C. i2 - the Top Floor (Spinnaker Room) "requires a ticket," so D. i3 - the Ground Floor (Harbour Gallery) is "the best starting point for younger children," so A. i4 - the First Floor (Makers\' Gallery) has live demonstrations "at 11.00 a.m. and 2.00 p.m. each day" (twice a day), so B.',
          },
          {
            id: 'rd-gen-008-p1-q5',
            type: 'tfng',
            prompt: 'Old paper parking permits will still be accepted after 1 September.',
            answer: 'false',
            explanation:
              'The notice warns that "the old paper permits will no longer be valid after that date" (1 September). This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-008-p1-q6',
            type: 'mcq',
            prompt: 'Which document is NOT accepted as proof of living in Zone C?',
            options: [
              'A recent utility bill',
              'A tenancy agreement',
              'A bank statement',
              'A council reminder email',
            ],
            correctIndex: 2,
            explanation:
              'The notice states that "a recent utility bill or tenancy agreement is accepted, but a bank statement is not." Option C (a bank statement) is the document that is not accepted.',
          },
          {
            id: 'rd-gen-008-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Each household may hold up to _______ resident permits.',
            acceptableAnswers: ['two', '2'],
            explanation:
              'The notice says "Each household may hold up to two resident permits." The answer is "two" (the number 2 is also accepted).',
          },
          {
            id: 'rd-gen-008-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: The council will send a renewal reminder by email _______ weeks before a permit runs out.',
            acceptableAnswers: ['four', '4'],
            explanation:
              'The notice states, "We will send a reminder by email four weeks before yours runs out." The answer is "four" (the number 4 is also accepted).',
          },
          {
            id: 'rd-gen-008-p1-q26',
            type: 'tfng',
            prompt: 'Dogs of any kind are allowed throughout the museum building.',
            answer: 'false',
            explanation:
              'The Facilities section says, "Assistance dogs are welcome anywhere in the building; other dogs are not." Because only assistance dogs are allowed, the statement is False.',
          },
          {
            id: 'rd-gen-008-p1-q27',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A book of ten visitor permits costs £_______.',
            acceptableAnswers: ['18'],
            explanation:
              'The notice states a visitor permit "is available in books of ten for £18," so the missing number is 18.',
          },
        ],
      },
      // ── Section 2: WORKPLACE - flexible-working request policy ──────────────
      {
        id: 'rd-gen-008-p2',
        title: 'Flexible Working Requests - Staff Policy',
        body: `This policy explains how employees may ask to change their working pattern and how those requests are handled. It applies to all staff who have completed their probation period.

WHAT YOU CAN ASK FOR
A flexible-working request may cover the hours you work, the times you start and finish, or the place you work from, such as splitting your week between the office and home. You may ask for a permanent change or a temporary one for an agreed period. The policy does not cover one-off requests, such as leaving early for a single appointment, which should be arranged informally with your manager.

HOW TO MAKE A REQUEST
Requests must be made in writing using the form on the staff intranet. You should set out clearly the change you are asking for, the date you would like it to begin, and how you think it might affect your work and your colleagues. Only one formal request may be made in any twelve-month period, so it is worth thinking your proposal through before you submit it.

WHAT HAPPENS NEXT
Your manager will arrange a meeting to discuss the request, normally within two weeks. You are welcome to bring a colleague with you to this meeting. The company aims to give you a decision in writing within one month of receiving the request, although this may be extended if more information is needed and you agree to the delay.

IF YOUR REQUEST IS REFUSED
A request may be turned down only for a genuine business reason - for example, the work cannot be reorganised among other staff, or the change would harm the quality of service to customers. The reason must be explained in the written decision. If your request is refused, you may appeal in writing within fourteen days, and a more senior manager who was not involved in the original decision will review it.

A TRIAL PERIOD
Where a manager is unsure whether a new pattern will work, they may agree to a trial period of up to three months before making a permanent change. At the end of the trial, the arrangement will be reviewed. If it has not worked well, you will return to your previous pattern, and this does not count as a refusal of your request.`,
        questions: [
          {
            id: 'rd-gen-008-p2-q9',
            type: 'mcq',
            prompt: 'Which of the following is covered by this flexible-working policy?',
            options: [
              'Leaving early on one occasion for a personal appointment',
              'A permanent change to the place an employee works from',
              'Taking paid annual leave',
              'Swapping a single shift with a colleague',
            ],
            correctIndex: 1,
            explanation:
              'The policy says a request "may cover the hours you work, the times you start and finish, or the place you work from," and may be permanent. It explicitly does NOT cover one-off requests such as leaving early for a single appointment. Option B is covered; option A is excluded.',
          },
          {
            id: 'rd-gen-008-p2-q10',
            type: 'tfng',
            prompt: 'Employees may make more than one formal request within a twelve-month period.',
            answer: 'false',
            explanation:
              'The policy states that "Only one formal request may be made in any twelve-month period." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-008-p2-q11',
            type: 'tfng',
            prompt:
              'An employee may bring a colleague to the meeting that discusses their request.',
            answer: 'true',
            explanation:
              'The "What happens next" section says, "You are welcome to bring a colleague with you to this meeting." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-008-p2-q12',
            type: 'tfng',
            prompt: 'A request can be refused for any reason the manager chooses.',
            answer: 'false',
            explanation:
              'The policy states a request "may be turned down only for a genuine business reason" and that the reason must be explained in writing. Because refusal is limited to genuine business reasons, "any reason the manager chooses" is False.',
          },
          {
            id: 'rd-gen-008-p2-q13',
            type: 'tfng',
            prompt: 'An appeal is reviewed by the same manager who made the original decision.',
            answer: 'false',
            explanation:
              'The policy says an appeal will be reviewed by "a more senior manager who was not involved in the original decision." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-gen-008-p2-q14',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A flexible-working request must be made in _______ using the form on the staff intranet.',
            acceptableAnswers: ['writing'],
            explanation:
              'The "How to make a request" section states, "Requests must be made in writing using the form on the staff intranet." The missing word is "writing".',
          },
          {
            id: 'rd-gen-008-p2-q15',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: The company aims to give a decision in writing within one _______ of receiving the request.',
            acceptableAnswers: ['month'],
            explanation:
              'The text says, "The company aims to give you a decision in writing within one month of receiving the request." The missing word is "month".',
          },
          {
            id: 'rd-gen-008-p2-q16',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: An employee who wishes to appeal must do so in writing within _______ days.',
            acceptableAnswers: ['fourteen', '14'],
            explanation:
              'The "If your request is refused" section states that "you may appeal in writing within fourteen days." The answer is "fourteen" (the number 14 is also accepted).',
          },
          {
            id: 'rd-gen-008-p2-q17',
            type: 'mcq',
            prompt:
              'What happens at the end of a trial period if the new pattern has not worked well?',
            options: [
              'The employee is not allowed to make any further requests',
              'The change is made permanent regardless',
              'The employee returns to their previous working pattern',
              'The request is formally recorded as having been refused',
            ],
            correctIndex: 2,
            explanation:
              'The "A trial period" section says, "If it has not worked well, you will return to your previous pattern, and this does not count as a refusal of your request." Option C is correct; option D is explicitly ruled out.',
          },
          {
            id: 'rd-gen-008-p2-q28',
            type: 'tfng',
            prompt: 'The policy applies to staff who are still within their probation period.',
            answer: 'false',
            explanation:
              'The opening states the policy "applies to all staff who have completed their probation period." Staff still within probation are therefore not covered, so the statement is False.',
          },
          {
            id: 'rd-gen-008-p2-q29',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: A manager who is unsure about a new pattern may agree to a trial period of up to _______ months.',
            acceptableAnswers: ['three', '3'],
            explanation:
              'The "A trial period" section says a manager "may agree to a trial period of up to three months." The answer is "three" (the number 3 is also accepted).',
          },
          {
            id: 'rd-gen-008-p2-q30',
            type: 'mcq',
            prompt:
              'According to the policy, what kinds of change may a flexible-working request seek?',
            options: [
              'Only a permanent change to working hours',
              'Either a permanent change or a temporary one for an agreed period',
              'Only a temporary change lasting less than a month',
              'Any change, provided it is arranged informally with the manager',
            ],
            correctIndex: 1,
            explanation:
              'The "What you can ask for" section states, "You may ask for a permanent change or a temporary one for an agreed period." Option B reflects this; informal one-off arrangements (D) are explicitly excluded from the policy.',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - learning an instrument as an adult
      // Six labelled paragraphs (A-F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B-F and is worth 5 marks.
      {
        id: 'rd-gen-008-p3',
        title: 'Never Too Late: Taking Up a Musical Instrument in Adulthood',
        body: `Paragraph A
There is a stubborn belief that music is the property of the young - that unless you began scraping at a violin or thumping a piano in childhood, the door has quietly closed. Music teachers know better. Walk into an adult beginners' class today and you will find people in their thirties, fifties and seventies bent over guitars, keyboards and clarinets, many of them picking up an instrument for the very first time. Far from being a lost cause, the adult learner often brings advantages that a restless child simply does not have.

Paragraph B
The first of these advantages is choice. A child is usually handed an instrument by a parent or a school; an adult chooses freely, and that choice tends to fall on something they genuinely love. Motivation that springs from desire rather than duty is a powerful teacher. Adults also understand why practice matters and can organise their own time, so a short, focused session in the evening often achieves more than an hour of a distracted ten-year-old's grumbling. Patience, the very quality childhood lacks, turns out to be the learner's greatest friend.

Paragraph C
The benefits reach well beyond the music itself. Learning an instrument asks the brain to do several things at once - to read or recall notes, to move the fingers precisely, to keep time and to listen and adjust, all in the same moment. Studies of older learners suggest that this kind of demanding, coordinated activity helps to keep the mind sharp, supporting memory and attention in ways that more passive pastimes do not. The effort of mastering something difficult appears to be part of the reward.

Paragraph D
There is an emotional dividend too. Playing music is widely found to lower stress and lift mood; the simple act of producing a pleasing sound can quiet a busy mind better than many deliberate attempts to relax. Group settings add a further layer. An adult who joins a community band or a weekly ensemble gains not only tuition but company, a shared goal and the particular satisfaction of making something with others. For people whose social circle has narrowed with age, that weekly gathering can matter as much as the notes.

Paragraph E
None of this is to pretend the road is easy. Adult fingers are less supple than a child's, and progress in the early weeks can feel discouragingly slow. Old recordings of the pieces one hopes to play set a standard that no beginner can meet, and the gap between the sound in one's head and the sound coming out of the instrument can be painful. The temptation to give up is strongest in the first few months, before the small, steady gains begin to show.

Paragraph F
The remedy that experienced teachers recommend is modest and consistent. A little practice on most days beats a long, guilt-ridden session once a week. Choosing pieces that are within reach, rather than far beyond it, keeps discouragement at bay and lets the learner feel real progress. And it helps to remember why one started: not to perform in a concert hall, for most adults, but for the quiet pleasure of playing. Measured against that honest goal, almost every adult learner succeeds.`,
        questions: [
          {
            id: 'rd-gen-008-p3-q18',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. Practical advice for staying the course' },
              { key: 'ii', label: 'ii. The cost of lessons and instruments' },
              { key: 'iii', label: 'iii. What the adult learner brings to the task' },
              { key: 'iv', label: 'iv. The early difficulties that test a beginner' },
              { key: 'v', label: 'v. Feeling better and finding company' },
              { key: 'vi', label: 'vi. How playing sharpens the mind' },
              { key: 'vii', label: 'vii. The best age to begin a child' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'iii' },
              { id: 'pC', text: 'Paragraph C', answer: 'vi' },
              { id: 'pD', text: 'Paragraph D', answer: 'v' },
              { id: 'pE', text: 'Paragraph E', answer: 'iv' },
              { id: 'pF', text: 'Paragraph F', answer: 'i' },
            ],
            explanation:
              'B (iii) lists the advantages the adult learner brings - free choice, motivation, the ability to organise time, and patience. C (vi) explains how playing makes the brain coordinate several tasks at once and helps keep the mind sharp. D (v) covers the emotional dividend (lower stress, better mood) and the company of group playing. E (iv) describes the early difficulties - less supple fingers, slow progress and the temptation to give up. F (i) gives practical advice for keeping going (little and often, achievable pieces, remembering why one started). Headings ii (cost) and vii (the best age for a child) are not used.',
          },
          {
            id: 'rd-gen-008-p3-q19',
            type: 'mcq',
            prompt: 'According to Paragraph A, what mistaken belief does the writer describe?',
            options: [
              'That music lessons are too expensive for most adults',
              'That you cannot learn an instrument unless you started as a child',
              'That older people have no interest in learning music',
              'That only certain instruments are suitable for beginners',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A describes "a stubborn belief that music is the property of the young - that unless you began ... in childhood, the door has quietly closed." Option B captures this mistaken belief, which the writer then challenges.',
          },
          {
            id: 'rd-gen-008-p3-q20',
            type: 'mcq',
            prompt: 'In Paragraph B, why does the writer say adults often learn effectively?',
            options: [
              'They are given an instrument by a school or parent',
              'They have more natural talent than children',
              'They choose an instrument they love and can manage their own practice',
              'They are able to practise for many hours at a time',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B says an adult "chooses freely," is motivated by desire rather than duty, and "can organise their own time," so that "a short, focused session" achieves a lot. Option C reflects this; the paragraph actually praises short focused practice, not long sessions (D).',
          },
          {
            id: 'rd-gen-008-p3-q21',
            type: 'tfng',
            prompt:
              "Paragraph C claims that learning an instrument can help keep an older person's mind sharp.",
            answer: 'true',
            explanation:
              'Paragraph C states that this "demanding, coordinated activity helps to keep the mind sharp, supporting memory and attention." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-008-p3-q22',
            type: 'tfng',
            prompt:
              'Paragraph D states that playing in a group is less enjoyable than playing alone.',
            answer: 'false',
            explanation:
              'Paragraph D presents group playing positively, saying it "add[s] a further layer" of company, a shared goal and satisfaction. It does not say group playing is less enjoyable, so the statement is False.',
          },
          {
            id: 'rd-gen-008-p3-q23',
            type: 'tfng',
            prompt: 'Paragraph E says the urge to quit is greatest during the first few months.',
            answer: 'true',
            explanation:
              'Paragraph E says "The temptation to give up is strongest in the first few months, before the small, steady gains begin to show." This matches the statement, so it is True.',
          },
          {
            id: 'rd-gen-008-p3-q24',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Teachers advise a little practice on most days rather than a long, guilt-ridden session once a _______.',
            acceptableAnswers: ['week'],
            explanation:
              'Paragraph F advises that "A little practice on most days beats a long, guilt-ridden session once a week." The missing word is "week".',
          },
          {
            id: 'rd-gen-008-p3-q25',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Choosing pieces that are within _______ helps to keep discouragement away and lets the learner feel real progress.',
            acceptableAnswers: ['reach'],
            explanation:
              'Paragraph F recommends "Choosing pieces that are within reach, rather than far beyond it." The missing word is "reach".',
          },
          {
            id: 'rd-gen-008-p3-q31',
            type: 'tfng',
            prompt: 'Paragraph A reports that adult beginners include people in their seventies.',
            answer: 'true',
            explanation:
              'Paragraph A describes adult beginners "in their thirties, fifties and seventies bent over guitars, keyboards and clarinets," which supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-008-p3-q32',
            type: 'gap',
            prompt:
              "Complete the sentence with ONE word from the text: Paragraph E acknowledges that adult fingers are less _______ than a child's.",
            acceptableAnswers: ['supple'],
            explanation:
              'Paragraph E states, "Adult fingers are less supple than a child’s, and progress in the early weeks can feel discouragingly slow." The missing word is "supple".',
          },
        ],
      },
    ],
  },
]
