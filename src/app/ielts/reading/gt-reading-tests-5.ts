// ─── IELTS General Training (GT) Reading - practice item bank (Set 5) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats - True/False/Not Given,
// multiple choice, sentence/summary completion (gap) AND the matching formats
// (Matching Features, Matching Headings). Framed as "IELTS preparation" only;
// no official affiliation is implied. General Training track.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (Section 1: notices, timetables,
// short notes), WORKPLACE texts (Section 2: policies, handbooks), and one
// longer GENERAL-INTEREST article (Section 3). This file ships ONE complete,
// carefully-checked GT test of three sections worth ~40 marks in total.
//
// Marking note (see src/lib/ielts/objective.ts): a `matching` question scores
// ONE MARK PER ITEM, so a 5-item matching question is worth 5 marks. Every
// `item.answer` below is exactly one of that question's `options[].key`.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_5: ReadingTest[] = [
  {
    id: 'rd-general-005',
    title: 'General Training Reading - Practice Test 5',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - community noticeboard ───────────────
      // Events + a lost-property notice + a bus-timetable change. Includes a
      // Matching Features question (notices → statements) worth 5 marks.
      {
        id: 'rd-gen-005-p1',
        title: 'Hollowbrook Community Centre - Noticeboard',
        body: `Welcome to the Hollowbrook Community Centre noticeboard. Please take a moment to read the notices below before you leave the foyer.

NOTICE A - SPRING REPAIR CAFÉ
On the last Saturday of every month, from 10 a.m. to 1 p.m., our volunteers will mend small household items free of charge in the main hall. Bring along broken lamps, jammed zips, wobbly chairs or torn clothing and watch our menders at work. We cannot repair anything that runs on mains gas, and large furniture will not fit through the hall doors, so please leave these items at home. There is no need to book; simply arrive and add your name to the list when you get here.

NOTICE B - EVENING POTTERY CLASSES
Beginning the second week of April, a six-week pottery course runs every Tuesday evening from 7 p.m. to 9 p.m. in the craft room upstairs. The course is suitable for complete beginners, and all clay and tools are provided. Places are limited to ten people, and the fee of £60 covers the whole course; we are unable to offer single sessions. To secure a place you must pay in advance at the centre's reception desk by 5 April, as we cannot hold a place for anyone who has not paid.

NOTICE C - LOST PROPERTY
A set of house keys on a bright red ribbon was handed in last Thursday after the afternoon yoga class. It is now being kept in the office safe. If you think the keys are yours, please describe the ribbon and the number of keys to a member of staff before they are returned to you. Any items not claimed within four weeks are passed to a local charity or, in the case of keys and documents, securely destroyed. The office is staffed between 9 a.m. and 4 p.m. on weekdays only.

NOTICE D - CHANGE TO THE NUMBER 12 BUS
From Monday 6 April, the route of the number 12 bus will change. It will no longer stop directly outside the community centre on Mill Lane. Instead, the nearest stop will be on Bridge Road, a three-minute walk away, beside the chemist. The first morning service will leave ten minutes earlier than before, at 6.50 a.m., but the evening timetable is unchanged. Printed timetables showing the new times are available from the reception desk.`,
        questions: [
          {
            id: 'rd-gen-005-p1-q1',
            type: 'tfng',
            prompt: 'You must book a place at the Repair Café before you arrive.',
            answer: 'false',
            explanation:
              'Notice A states, "There is no need to book; simply arrive and add your name to the list when you get here." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-005-p1-q2',
            type: 'tfng',
            prompt: 'The pottery course can be paid for one session at a time.',
            answer: 'false',
            explanation:
              'Notice B says the £60 fee "covers the whole course; we are unable to offer single sessions." Paying for a single session is not possible, so the statement is False.',
          },
          {
            id: 'rd-gen-005-p1-q3',
            type: 'tfng',
            prompt: 'Unclaimed keys handed in to the office are eventually given to a charity.',
            answer: 'false',
            explanation:
              'Notice C says unclaimed items go to charity, but "in the case of keys and documents" they are "securely destroyed." Keys are therefore not given to a charity, so the statement is False.',
          },
          {
            id: 'rd-gen-005-p1-q4',
            type: 'tfng',
            prompt: 'The evening times of the number 12 bus will stay the same after 6 April.',
            answer: 'true',
            explanation:
              'Notice D states that the first morning service leaves earlier "but the evening timetable is unchanged." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-005-p1-q5',
            type: 'mcq',
            prompt:
              'According to Notice D, where will the nearest bus stop to the centre be from 6 April?',
            options: [
              'Directly outside the centre on Mill Lane',
              'On Bridge Road, beside the chemist',
              'In the centre car park',
              'Outside the upstairs craft room',
            ],
            correctIndex: 1,
            explanation:
              'Notice D says the bus "will no longer stop directly outside the community centre on Mill Lane. Instead, the nearest stop will be on Bridge Road ... beside the chemist." Option B matches.',
          },
          {
            id: 'rd-gen-005-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the noticeboard: To join the pottery course you must pay in advance by _______ April.',
            acceptableAnswers: ['5', 'fifth', '5th'],
            explanation:
              'Notice B states that to secure a place "you must pay in advance at the centre\'s reception desk by 5 April." The answer is the date "5" (also accepted as "5th" or "fifth").',
          },
          {
            id: 'rd-gen-005-p1-q7',
            type: 'mcq',
            prompt: 'How often does the Repair Café take place?',
            options: [
              'Every Saturday morning',
              'Once a month, on the last Saturday',
              'Every Tuesday evening',
              'Twice a month',
            ],
            correctIndex: 1,
            explanation:
              'Notice A says the Repair Café runs "On the last Saturday of every month, from 10 a.m. to 1 p.m." Option B matches; the Tuesday-evening slot (C) belongs to the pottery course in Notice B.',
          },
          {
            id: 'rd-gen-005-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the noticeboard: The set of lost keys is being kept on a ribbon that is coloured _______.',
            acceptableAnswers: ['red'],
            explanation:
              'Notice C describes "A set of house keys on a bright red ribbon." The colour of the ribbon is "red".',
          },
          {
            id: 'rd-gen-005-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the four notices on the noticeboard, A-D. For each statement below, choose the notice it refers to. Write the correct letter, A-D. (Each notice may be chosen more than once.)',
            options: [
              { key: 'A', label: 'Notice A - Spring Repair Café' },
              { key: 'B', label: 'Notice B - Evening Pottery Classes' },
              { key: 'C', label: 'Notice C - Lost Property' },
              { key: 'D', label: 'Notice D - Change to the Number 12 Bus' },
            ],
            items: [
              {
                id: 'i1',
                text: 'It says that the number of people who can take part is capped at ten.',
                answer: 'B',
              },
              {
                id: 'i2',
                text: 'It asks you to prove that something belongs to you before you take it away.',
                answer: 'C',
              },
              {
                id: 'i3',
                text: 'It tells you that one type of service will now begin earlier in the day.',
                answer: 'D',
              },
              {
                id: 'i4',
                text: 'It lists particular things that the volunteers are not able to deal with.',
                answer: 'A',
              },
              {
                id: 'i5',
                text: 'It explains that a service is offered to the public without any charge.',
                answer: 'A',
              },
            ],
            explanation:
              'i1: Notice B limits places "to ten people". i2: Notice C asks you to describe the ribbon and number of keys "before they are returned to you" (proving ownership). i3: Notice D says the first morning service leaves "ten minutes earlier than before". i4: Notice A cannot mend mains-gas items or large furniture. i5: Notice A mends items "free of charge". (Notice A is chosen twice, which the instruction allows.)',
          },
        ],
      },
      // ── Section 2: WORKPLACE - health & safety / annual-leave policy ───────
      {
        id: 'rd-gen-005-p2',
        title: 'Staff Policy - Health, Safety and Time Away from Work',
        body: `This policy explains your responsibilities for health and safety at work and how the company manages annual leave and sick leave. All employees are asked to read it within their first week and to confirm to their manager that they have done so.

WORKING SAFELY
Every member of staff has a duty to work in a way that does not put themselves or others at risk. You must report any accident, however minor, in the accident book kept at the main reception, and you should tell your supervisor straight away. Near misses - events that could have caused harm but did not - must also be reported, because they help us prevent more serious incidents later. Fire drills are held twice a year without prior warning; when the alarm sounds you must leave the building by the nearest marked exit and gather at the assembly point in the rear car park. Do not stop to collect personal belongings.

DISPLAY SCREEN EQUIPMENT
Staff who spend most of the working day at a computer are entitled to a free workstation assessment. This checks that your chair, desk and screen are correctly adjusted. We recommend a short break away from the screen of five to ten minutes in every hour; this need not be a rest break, as changing to a different task also counts. If you experience discomfort in your eyes, neck or wrists, tell your manager, who can arrange an eye test at the company's expense.

ANNUAL LEAVE
Full-time staff receive 28 days of paid annual leave, which includes public holidays. Requests are made through your manager and should be submitted as early as possible, particularly for popular periods such as school holidays, when not every request can be approved. No more than two members of the same team may be on leave at the same time. Up to three days of unused leave may be carried into the next year and must be taken by the end of March.

SICK LEAVE
If you are unwell and cannot come to work, you must contact your manager by telephone before your shift begins; a text message or email is not sufficient. For absences of up to seven days you may complete a self-certification form on your return. An absence longer than seven calendar days must be supported by a note from a doctor. The company pays sick pay at the normal rate for up to ten working days in any twelve-month period.`,
        questions: [
          {
            id: 'rd-gen-005-p2-q8',
            type: 'tfng',
            prompt: 'Only serious accidents need to be written in the accident book.',
            answer: 'false',
            explanation:
              'The Working Safely section says you must report "any accident, however minor, in the accident book." Minor accidents must also be recorded, so the statement is False.',
          },
          {
            id: 'rd-gen-005-p2-q9',
            type: 'tfng',
            prompt: 'Staff are warned in advance of the date of each fire drill.',
            answer: 'false',
            explanation:
              'The text says "Fire drills are held twice a year without prior warning." Because there is no warning, the statement is False.',
          },
          {
            id: 'rd-gen-005-p2-q10',
            type: 'tfng',
            prompt: 'A break from the screen can be spent doing a different kind of work.',
            answer: 'true',
            explanation:
              'The Display Screen Equipment section says the recommended break "need not be a rest break, as changing to a different task also counts." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-005-p2-q11',
            type: 'mcq',
            prompt: 'What does the policy say about annual leave for full-time staff?',
            options: [
              'It is 28 days in addition to public holidays.',
              'It is 28 days, and public holidays are included in this total.',
              'It can all be carried over to the following year.',
              'It cannot be taken during school holidays.',
            ],
            correctIndex: 1,
            explanation:
              'The Annual Leave section states staff receive "28 days of paid annual leave, which includes public holidays." Option B is correct; the holidays are part of the 28 days, not extra (A).',
          },
          {
            id: 'rd-gen-005-p2-q12',
            type: 'mcq',
            prompt: 'How must an employee tell the company that they are too ill to work?',
            options: [
              'By sending a text message before the shift starts',
              'By sending an email to the manager',
              'By telephoning the manager before the shift begins',
              'By completing a self-certification form in advance',
            ],
            correctIndex: 2,
            explanation:
              'The Sick Leave section says you must "contact your manager by telephone before your shift begins; a text message or email is not sufficient." Option C is correct.',
          },
          {
            id: 'rd-gen-005-p2-q13',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: No more than _______ members of the same team may be on leave at the same time.',
            acceptableAnswers: ['two', '2'],
            explanation:
              'The Annual Leave section states, "No more than two members of the same team may be on leave at the same time." The answer is "two" (the number 2 is also accepted).',
          },
          {
            id: 'rd-gen-005-p2-q14',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: An absence of more than seven calendar days must be supported by a note from a _______.',
            acceptableAnswers: ['doctor'],
            explanation:
              'The Sick Leave section says an absence longer than seven days "must be supported by a note from a doctor." The missing word is "doctor".',
          },
          {
            id: 'rd-gen-005-p2-q15',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: The company pays sick pay at the normal rate for up to _______ working days in any twelve-month period.',
            acceptableAnswers: ['ten', '10'],
            explanation:
              'The Sick Leave section states the company "pays sick pay at the normal rate for up to ten working days in any twelve-month period." The answer is "ten" (the number 10 is also accepted).',
          },
          {
            id: 'rd-gen-005-p2-q16',
            type: 'tfng',
            prompt: 'Near misses do not need to be reported because no harm was actually caused.',
            answer: 'false',
            explanation:
              'The Working Safely section says near misses "must also be reported, because they help us prevent more serious incidents later." Reporting is required, so the statement is False.',
          },
          {
            id: 'rd-gen-005-p2-q17',
            type: 'tfng',
            prompt:
              'An eye test arranged because of screen-related discomfort is paid for by the employee.',
            answer: 'false',
            explanation:
              'The Display Screen Equipment section says the manager "can arrange an eye test at the company\'s expense." The company pays, not the employee, so the statement is False.',
          },
          {
            id: 'rd-gen-005-p2-q18',
            type: 'tfng',
            prompt: 'Employees are asked to read this policy during their first week of work.',
            answer: 'true',
            explanation:
              'The opening paragraph says all employees "are asked to read it within their first week and to confirm to their manager that they have done so." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-005-p2-q19',
            type: 'mcq',
            prompt: 'When the fire alarm sounds, what are staff told to do?',
            options: [
              'Collect their personal belongings before leaving',
              'Wait at their desk for instructions',
              'Leave by the nearest marked exit and gather in the rear car park',
              'Telephone their manager from the assembly point',
            ],
            correctIndex: 2,
            explanation:
              'The Working Safely section says when the alarm sounds "you must leave the building by the nearest marked exit and gather at the assembly point in the rear car park," and "Do not stop to collect personal belongings." Option C is correct.',
          },
          {
            id: 'rd-gen-005-p2-q20',
            type: 'mcq',
            prompt: 'What is said about staff who spend most of the day at a computer?',
            options: [
              'They must pay for their own workstation assessment.',
              'They are entitled to a free workstation assessment.',
              'They are not allowed to take any breaks from the screen.',
              'They must change desks every hour.',
            ],
            correctIndex: 1,
            explanation:
              'The Display Screen Equipment section says such staff "are entitled to a free workstation assessment." Option B matches; the assessment is free, not paid for (A).',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - cycling to work ───────────────
      // Includes a Matching Headings question (with two distractor headings)
      // worth 5 marks, plus MCQ / TFNG / gap.
      {
        id: 'rd-gen-005-p3',
        title: 'Two Wheels to Work: The Quiet Return of the Bicycle Commute',
        body: `Paragraph A
For much of the twentieth century, the bicycle was seen in many wealthy countries as transport for those who could not yet afford a car. As incomes rose, cycling to work came to feel old-fashioned, and the daily journey was increasingly made behind a windscreen. In the last two decades, however, the bicycle has staged a quiet comeback in towns and cities, and the reasons have as much to do with the modern office worker's wallet and waistline as with any concern for the planet.

Paragraph B
The clearest attraction is cost. Once a bicycle has been bought, the journey to work is very nearly free. There is no fuel to buy, no ticket to renew and no parking charge to pay, and the maintenance a well-kept machine needs amounts to little more than the occasional new tyre or brake pad. Many employers now run schemes that let staff buy a bicycle through their monthly pay, spreading the cost and reducing the tax they owe. For a worker who would otherwise spend a large sum each month on fares or petrol, the savings over a year can be considerable.

Paragraph C
The benefits to health are just as striking, and they arrive without any special effort. Because the exercise is built into a journey that has to be made anyway, the cyclist is not required to set aside a separate hour at the gym. Regular riding strengthens the heart, helps to control weight and, according to a growing body of research, lifts the rider's mood. Doctors point out that the gentle, repeated effort of pedalling suits people who find more intense exercise off-putting, and that even a short daily ride brings measurable gains.

Paragraph D
There is a wider payoff for the towns themselves. A bicycle takes up a fraction of the road space of a car and needs only a sliver of room to park. Where many commuters switch to two wheels, congestion eases and the air grows cleaner, which benefits even those who never cycle at all. Some cities have found that money spent on cycle lanes returns far more in reduced traffic and improved public health than the same money spent on widening roads, a calculation that has persuaded several reluctant councils to act.

Paragraph E
None of this means the bicycle is the answer for everyone. Those who live a long way from their workplace, or who must carry heavy loads or transport children, may find cycling impractical for at least part of the week. Bad weather deters some riders, and others are nervous about sharing busy roads with lorries and buses. Yet many of these obstacles are smaller than they first appear. Folding bicycles can be carried onto trains, waterproof clothing keeps off the worst of the rain, and well-designed, separated cycle lanes do a great deal to calm the fears of less confident riders.

Paragraph F
The change now under way is therefore less a sudden revolution than a gradual rediscovery. The bicycle that once carried workers to the factory gate for want of anything better is being chosen afresh, this time for the very advantages that the motor car cannot offer: it is cheap to run, it keeps its rider fit, and it asks little of the crowded streets it travels along. For a growing number of commuters, the slowest-looking option has turned out to be the smartest.`,
        questions: [
          {
            id: 'rd-gen-005-p3-q16',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. Money saved by leaving the car at home' },
              { key: 'ii', label: 'ii. Fitness gained as part of the daily trip' },
              { key: 'iii', label: 'iii. Reasons the change has been slow to arrive' },
              { key: 'iv', label: 'iv. Gains for the town that reach beyond the cyclist' },
              { key: 'v', label: 'v. Honest limits, and the ways round them' },
              { key: 'vi', label: 'vi. An old habit taken up again for new reasons' },
              { key: 'vii', label: 'vii. How to choose and look after a bicycle' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'i' },
              { id: 'pC', text: 'Paragraph C', answer: 'ii' },
              { id: 'pD', text: 'Paragraph D', answer: 'iv' },
              { id: 'pE', text: 'Paragraph E', answer: 'v' },
              { id: 'pF', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'B is about cost ("The clearest attraction is cost") → i. C is about health "without any special effort", built into the journey → ii. D describes the "wider payoff for the towns themselves" → iv. E sets out the limits ("not the answer for everyone") and the "ways round them" → v. F frames the trend as "a gradual rediscovery" of an old habit for new reasons → vi. Headings iii (the change has NOT been slow - it is a comeback) and vii (the article never explains how to choose or maintain a bike) are the unused distractors.',
          },
          {
            id: 'rd-gen-005-p3-q17',
            type: 'mcq',
            prompt:
              'In Paragraph A, what does the writer suggest about attitudes to cycling in the past?',
            options: [
              'Cycling was admired as a healthy way to travel.',
              'Cycling was viewed as something people did until they could afford a car.',
              'Cycling was banned from many city centres.',
              'Cycling was more expensive than driving a car.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says the bicycle "was seen ... as transport for those who could not yet afford a car," and that as incomes rose cycling "came to feel old-fashioned." Option B captures this.',
          },
          {
            id: 'rd-gen-005-p3-q18',
            type: 'mcq',
            prompt:
              'According to Paragraph C, why does the writer say cycling suits many people as exercise?',
            options: [
              'It requires an extra hour set aside at the gym each day.',
              'It is built into a journey that must be made anyway.',
              'It is more intense than other forms of exercise.',
              'It can only be enjoyed by people who are already fit.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C explains that "the exercise is built into a journey that has to be made anyway," so no separate gym hour is needed. Option B matches; the writer says the gentle effort suits those who dislike intense exercise, contradicting C and D.',
          },
          {
            id: 'rd-gen-005-p3-q19',
            type: 'tfng',
            prompt: 'Cleaner air resulting from more cycling benefits only the people who cycle.',
            answer: 'false',
            explanation:
              'Paragraph D says that when commuters switch to bikes "congestion eases and the air grows cleaner, which benefits even those who never cycle at all." This contradicts "only the people who cycle," so it is False.',
          },
          {
            id: 'rd-gen-005-p3-q20',
            type: 'tfng',
            prompt: 'The writer claims that cycling is a practical choice for every worker.',
            answer: 'false',
            explanation:
              'Paragraph E opens, "None of this means the bicycle is the answer for everyone," and lists workers for whom it may be impractical. The statement is therefore False.',
          },
          {
            id: 'rd-gen-005-p3-q21',
            type: 'tfng',
            prompt: 'Some local councils have been persuaded to spend money on cycle lanes.',
            answer: 'true',
            explanation:
              'Paragraph D says the favourable cost calculation "has persuaded several reluctant councils to act" on spending for cycle lanes. This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-005-p3-q22',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: For nervous riders, well-designed, separated cycle lanes do much to calm their _______.',
            acceptableAnswers: ['fears'],
            explanation:
              'Paragraph E states that separated cycle lanes "do a great deal to calm the fears of less confident riders." The missing word is "fears".',
          },
          {
            id: 'rd-gen-005-p3-q23',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Folding bicycles solve part of the distance problem because they can be carried onto _______.',
            acceptableAnswers: ['trains'],
            explanation:
              'Paragraph E says, "Folding bicycles can be carried onto trains." The required word is "trains".',
          },
          {
            id: 'rd-gen-005-p3-q24',
            type: 'tfng',
            prompt:
              'Some employers help staff buy a bicycle by letting them pay for it through their wages.',
            answer: 'true',
            explanation:
              'Paragraph B says "Many employers now run schemes that let staff buy a bicycle through their monthly pay, spreading the cost and reducing the tax they owe." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-005-p3-q25',
            type: 'mcq',
            prompt:
              'In Paragraph D, what does the writer say about the road space a bicycle needs?',
            options: [
              'A bicycle needs roughly the same road space as a car.',
              'A bicycle takes up only a fraction of the road space of a car.',
              'A bicycle cannot be parked in towns at all.',
              'A bicycle requires wider roads to be built.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D states, "A bicycle takes up a fraction of the road space of a car and needs only a sliver of room to park." Option B matches this directly.',
          },
        ],
      },
    ],
  },
]
