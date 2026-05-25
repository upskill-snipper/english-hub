// ─── IELTS General Training (GT) Reading - practice item bank (Set 7) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary completion, and Matching). Framed as "IELTS
// preparation" only - no official affiliation is implied. General Training.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, timetables, advertise-
// ments, instructions) and WORKPLACE texts (handbooks, policies, training
// material), plus one longer general-interest article. This file ships ONE
// complete, carefully-checked GT test scaled to a full sitting:
//   • Section 1 - a leisure-centre class timetable + a lost-property & car-park
//     notice. Includes a Matching (features) question worth 5 marks.
//   • Section 2 - a workplace expenses & business-travel policy.
//   • Section 3 - a general-interest article on the rise of adult evening
//     classes. Includes a Matching (headings) question with two distractor
//     headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-007-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_7: ReadingTest[] = [
  {
    id: 'rd-general-007',
    title: 'General Training Reading - Practice Test 7',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - timetable + notice ──────────────────
      // Two short texts. A Matching (features) question (5 marks) asks which of
      // the four classes each statement describes; options may be reused.
      {
        id: 'rd-gen-007-p1',
        title: 'Maple Park Leisure Centre - Spring Class Timetable & Centre Notices',
        body: `PART 1 - SPRING CLASS TIMETABLE

Maple Park Leisure Centre runs four bookable classes this term. Places are limited, so please book online or at the front desk before you arrive. The descriptions below tell you what to expect from each class.

CLASS A - Early Birds Swim Fitness
A gentle water-based workout held in the main pool before it opens to the public. Suitable for all ages and abilities, including those who are recovering from injury. The instructor stays at the poolside throughout, so you do not need to be a confident swimmer. Sessions run Monday, Wednesday and Friday at 7.00 a.m. and last 45 minutes. No equipment is needed; floats are provided.

CLASS B - Studio Cycling
A high-energy indoor cycling class set to music in Studio 2. This class is fast and demanding, and is not recommended for complete beginners or for anyone with a heart condition unless a doctor has approved it. Towels and a water bottle are essential. Sessions run Tuesday and Thursday evenings at 6.30 p.m. and last one hour.

CLASS C - Gentle Yoga
A slow, relaxing class in the carpeted Studio 1, focused on breathing and easy stretches. It is especially popular with older members and with anyone who finds busier classes off-putting. Mats are available to borrow, but many people prefer to bring their own. Sessions run on Saturday mornings at 10.00 a.m. and last 75 minutes.

CLASS D - Junior Trampoline
A supervised session on the sprung floor for children aged six to twelve only. An adult must remain in the building for the whole session but does not take part. Children must wear grip socks, which can be bought at the front desk for £2. Sessions run on Sunday afternoons at 2.00 p.m. and last 50 minutes.

PART 2 - CENTRE NOTICES

LOST PROPERTY
Items left behind in the changing rooms or studios are collected each evening and kept at the front desk for fourteen days. After that, anything unclaimed is given to a local charity. To collect an item, you must describe it accurately before it is handed over; we cannot release property to anyone who is unable to do so. Valuables such as phones, watches and jewellery are logged in a separate book and stored in the office safe, and proof of identity is required to claim them.

CAR PARK
The centre car park is free for the first two hours for everyone. After two hours, members park free for the rest of the day if they display a valid membership permit on the dashboard; non-members pay £1.50 for each additional hour. The barrier reads your number plate automatically, so please do not block it. The two spaces nearest the entrance are reserved for blue-badge holders at all times, and the charging bays on the north side are for electric vehicles only while they are charging.`,
        questions: [
          {
            id: 'rd-gen-007-p1-q1',
            type: 'tfng',
            prompt: 'You must reserve a place before attending any of the four classes.',
            answer: 'true',
            explanation:
              'Part 1 states "Places are limited, so please book online or at the front desk before you arrive." This applies to all four bookable classes, so the statement is True.',
          },
          {
            id: 'rd-gen-007-p1-q2',
            type: 'tfng',
            prompt: 'Studio Cycling is suitable for people who have never exercised before.',
            answer: 'false',
            explanation:
              'Class B says the class "is fast and demanding, and is not recommended for complete beginners." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-007-p1-q3',
            type: 'tfng',
            prompt: 'The charging bays on the north side may be used by any car after two hours.',
            answer: 'false',
            explanation:
              'The Car Park notice says the charging bays "are for electric vehicles only while they are charging." They are not open to any car, so the statement is False.',
          },
          {
            id: 'rd-gen-007-p1-q4',
            type: 'tfng',
            prompt: 'Lost valuables are kept in the same place as ordinary lost items.',
            answer: 'false',
            explanation:
              'The Lost Property notice says ordinary items are "kept at the front desk," but valuables "are logged in a separate book and stored in the office safe." They are stored separately, so the statement is False.',
          },
          {
            id: 'rd-gen-007-p1-q5',
            type: 'mcq',
            prompt: 'How long is unclaimed lost property kept before it is given to charity?',
            options: ['Seven days', 'Fourteen days', 'Two hours', 'Until the end of term'],
            correctIndex: 1,
            explanation:
              'The Lost Property notice says items are "kept at the front desk for fourteen days. After that, anything unclaimed is given to a local charity." Option B is correct.',
          },
          {
            id: 'rd-gen-007-p1-q6',
            type: 'mcq',
            prompt: 'What must a non-member do to avoid paying for parking beyond two hours?',
            options: [
              'Display a membership permit on the dashboard',
              'Park in one of the charging bays',
              'There is no way to avoid the charge; they pay £1.50 per extra hour',
              'Register their number plate at the front desk',
            ],
            correctIndex: 2,
            explanation:
              'The Car Park notice says only members "park free for the rest of the day" with a permit, while "non-members pay £1.50 for each additional hour." A non-member therefore cannot avoid the charge, so Option C is correct.',
          },
          {
            id: 'rd-gen-007-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Children attending Junior Trampoline must wear grip socks, which cost £_______ at the front desk.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'Class D says grip socks "can be bought at the front desk for £2." The answer is "2" (the word "two" is also accepted).',
          },
          {
            id: 'rd-gen-007-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: To collect a lost item, you must _______ it accurately before it is handed over.',
            acceptableAnswers: ['describe'],
            explanation:
              'The Lost Property notice says, "To collect an item, you must describe it accurately before it is handed over." The missing word is "describe".',
          },
          {
            id: 'rd-gen-007-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the four classes in the timetable, A-D. For each statement below, choose the class it describes. Write the correct letter, A-D. (Each class may be chosen more than once.)',
            options: [
              { key: 'A', label: 'Class A - Early Birds Swim Fitness' },
              { key: 'B', label: 'Class B - Studio Cycling' },
              { key: 'C', label: 'Class C - Gentle Yoga' },
              { key: 'D', label: 'Class D - Junior Trampoline' },
            ],
            items: [
              {
                id: 'i1',
                text: 'It is open only to people within a fixed age range.',
                answer: 'D',
              },
              {
                id: 'i2',
                text: 'You are told that a doctor may need to give permission before you take part.',
                answer: 'B',
              },
              {
                id: 'i3',
                text: 'It is recommended for people who are getting over an injury.',
                answer: 'A',
              },
              {
                id: 'i4',
                text: 'It takes place in a room with a soft floor covering.',
                answer: 'C',
              },
              {
                id: 'i5',
                text: 'A responsible adult must stay nearby but does not join in.',
                answer: 'D',
              },
            ],
            explanation:
              'i1: Class D is "for children aged six to twelve only" - a fixed age range. i2: Class B is not recommended for anyone with a heart condition "unless a doctor has approved it." i3: Class A is suitable for "those who are recovering from injury." i4: Class C is held "in the carpeted Studio 1" (a soft floor covering). i5: Class D says "An adult must remain in the building for the whole session but does not take part." (Class D is chosen twice, which the instruction allows.)',
          },
        ],
      },
      // ── Section 2: WORKPLACE - expenses & business-travel policy ───────────
      {
        id: 'rd-gen-007-p2',
        title: 'Company Policy - Business Travel and Expense Claims',
        body: `This policy explains how to arrange business travel and how to claim back money you spend while working away from your usual workplace. Please read it before you book anything, as claims that fall outside these rules may be refused.

BOOKING TRAVEL
Wherever possible, flights and rail tickets must be booked through the company's approved travel agent rather than purchased directly, because the agent obtains discounted rates the company has negotiated. Standard-class rail travel should be chosen for any journey under three hours. For longer journeys, or where a first-class ticket is no more expensive than standard once booked in advance, first class may be used. Air travel must be in economy class unless the flight is longer than six hours, in which case premium economy is permitted; business class requires written approval from a director.

ACCOMMODATION
When an overnight stay is necessary, you may book a hotel up to the nightly limit set for the city you are visiting; these limits are listed on the company intranet. Breakfast may be included in the room rate, but other meals taken at the hotel must be claimed separately under the meals allowance. You should not book a room above the limit on the assumption that the difference will be refunded - it will not be, unless no room within the limit was available and you have kept written evidence of this.

MEALS AND INCIDENTALS
While travelling on business you may claim for meals up to a daily allowance, which varies by country. You do not need receipts for amounts under £10, but for anything above this a receipt must be attached to your claim. Alcohol is not reimbursed under any circumstances. Reasonable incidental costs, such as parking, tolls and short taxi journeys to and from stations, may also be claimed with receipts.

SUBMITTING A CLAIM
All claims must be submitted through the expenses system within thirty days of the date the cost was incurred. Claims received after this period will not normally be paid. Once submitted, a claim is reviewed by your line manager and then by the finance team, and approved amounts are paid into your bank account with the following month's salary. If any part of a claim is queried, the whole claim may be held until the query is resolved, so please make sure your figures are accurate and your receipts are clear.`,
        questions: [
          {
            id: 'rd-gen-007-p2-q10',
            type: 'mcq',
            prompt: 'Why does the company prefer travel to be booked through its approved agent?',
            options: [
              'The agent books travel more quickly than employees can',
              'The agent obtains discounted rates the company has negotiated',
              'Employees are not allowed to use the internet for bookings',
              'The agent automatically upgrades every ticket to first class',
            ],
            correctIndex: 1,
            explanation:
              'The Booking Travel section says travel must be booked through the agent "because the agent obtains discounted rates the company has negotiated." Option B matches directly.',
          },
          {
            id: 'rd-gen-007-p2-q11',
            type: 'mcq',
            prompt: 'When is premium economy permitted for air travel?',
            options: [
              'On any flight, at the traveller’s choice',
              'Only with written approval from a director',
              'When the flight is longer than six hours',
              'When standard economy is fully booked',
            ],
            correctIndex: 2,
            explanation:
              'The policy says air travel must be economy "unless the flight is longer than six hours, in which case premium economy is permitted." Option C is correct; business class (not premium economy) is what needs director approval.',
          },
          {
            id: 'rd-gen-007-p2-q12',
            type: 'mcq',
            prompt: 'What happens if one part of a submitted claim is queried?',
            options: [
              'Only the queried part is delayed; the rest is paid at once',
              'The whole claim may be held until the query is resolved',
              'The claim is automatically rejected in full',
              'The query is ignored if receipts were attached',
            ],
            correctIndex: 1,
            explanation:
              'The Submitting a Claim section says "If any part of a claim is queried, the whole claim may be held until the query is resolved." Option B matches.',
          },
          {
            id: 'rd-gen-007-p2-q13',
            type: 'tfng',
            prompt:
              'Standard-class rail travel should be used for any journey lasting under three hours.',
            answer: 'true',
            explanation:
              'The Booking Travel section states, "Standard-class rail travel should be chosen for any journey under three hours." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-007-p2-q14',
            type: 'tfng',
            prompt: 'The cost of alcohol can be claimed back if a receipt is provided.',
            answer: 'false',
            explanation:
              'The Meals and Incidentals section says, "Alcohol is not reimbursed under any circumstances." A receipt makes no difference, so the statement is False.',
          },
          {
            id: 'rd-gen-007-p2-q15',
            type: 'tfng',
            prompt:
              'If an employee books a hotel above the city limit, the extra cost is always refunded.',
            answer: 'false',
            explanation:
              'The Accommodation section says you should not book above the limit assuming the difference will be refunded - "it will not be, unless no room within the limit was available" and evidence is kept. Because refunds are not automatic, "always refunded" is False.',
          },
          {
            id: 'rd-gen-007-p2-q16b',
            type: 'tfng',
            prompt:
              'Breakfast included in a hotel room rate must be claimed separately under the meals allowance.',
            answer: 'false',
            explanation:
              'The Accommodation section says, "Breakfast may be included in the room rate, but other meals taken at the hotel must be claimed separately under the meals allowance." It is the OTHER meals, not the included breakfast, that must be claimed separately, so the statement is False.',
          },
          {
            id: 'rd-gen-007-p2-q16',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Business-class air travel requires written approval from a _______.',
            acceptableAnswers: ['director'],
            explanation:
              'The Booking Travel section states that "business class requires written approval from a director." The missing word is "director".',
          },
          {
            id: 'rd-gen-007-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Receipts are not needed for meal amounts under £_______.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'The Meals and Incidentals section says, "You do not need receipts for amounts under £10." The answer is "10" (the word "ten" is also accepted).',
          },
          {
            id: 'rd-gen-007-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: All claims must be submitted within _______ days of the date the cost was incurred.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'The Submitting a Claim section states claims "must be submitted through the expenses system within thirty days." The answer is "thirty" (the number 30 is also accepted).',
          },
          {
            id: 'rd-gen-007-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Approved amounts are paid into your bank account with the following month’s _______.',
            acceptableAnswers: ['salary'],
            explanation:
              'The Submitting a Claim section says approved amounts "are paid into your bank account with the following month\'s salary." The missing word is "salary".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - adult evening classes ─────────
      // Six labelled paragraphs (A-F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B-F and is worth 5 marks.
      {
        id: 'rd-gen-007-p3',
        title: 'Learning After Dark: The Quiet Boom in Adult Evening Classes',
        body: `Paragraph A
On almost any weekday evening, the lights stay on in schools, community halls and college buildings long after the regular timetable has ended. Inside, adults of every age are learning to speak Italian, to throw a pot, to keep accounts or to repair a bicycle. The adult evening class is not a new idea, but after years in which many such courses were quietly dropped, they are once again drawing crowds. Across the country, enrolments have risen for several years running, and waiting lists for the most popular subjects have reappeared.

Paragraph B
Part of the explanation lies in the changing shape of working life. Where a single career once lasted a lifetime, many people now expect to change direction more than once, and an evening course is an affordable way to test an interest before committing to it. A bookkeeping class may lead to a new role; a course in web design may turn a hobby into a small business. Because the classes are held outside office hours and charge modest fees, they allow people to retrain without giving up the income they already rely on.

Paragraph C
Yet money and careers are far from the whole story. Tutors report that a large share of their students enrol for reasons that have nothing to do with work. Some come to recover a skill they abandoned in youth; others want to fill the quiet hours that arrive once children have grown up or a partner has died. For these learners, the value of the class lies less in the certificate at the end than in the simple routine of leaving the house on a fixed evening and sitting among others with a shared purpose.

Paragraph D
That social dimension may be the most important of all. Researchers who study wellbeing in later life have repeatedly found that loneliness does as much harm to health as many physical ailments, and that regular, low-pressure contact with others offers real protection. An evening class provides exactly this: a weekly meeting, a common task and a reason to talk to people one would never otherwise meet. Several councils, noticing the pattern, have begun to fund classes not as education in the narrow sense but as a cheap and cheerful way of keeping their residents connected and well.

Paragraph E
The teachers themselves are part of the appeal. Many are practitioners first and instructors second - a working potter, a retired accountant, a chef who still cooks for a living - and they bring to the classroom a store of practical knowledge that no textbook can match. Because adult students choose to be there and pay for the privilege, the atmosphere tends to be relaxed and good-humoured, free of the reluctance that can shadow a compulsory school lesson. Tutors often say they enjoy these evening groups more than any other teaching they do.

Paragraph F
The revival is not without its difficulties. Suitable rooms are not always easy to find, insurance and heating cost more than they once did, and a class that fails to attract enough students must usually be cancelled, sometimes at short notice. Funding, where it exists at all, can be withdrawn with little warning when budgets are squeezed. Even so, the appetite is plainly there. As long as people wish to learn something new, to make a change or simply to spend an evening in good company, the adult class seems likely to keep its lights burning.`,
        questions: [
          {
            id: 'rd-gen-007-p3-q20',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. The hurdles that still stand in the way' },
              { key: 'ii', label: 'ii. Choosing a course that leads to a qualification' },
              { key: 'iii', label: 'iii. A flexible route to changing careers' },
              { key: 'iv', label: 'iv. Reasons that have little to do with earning a living' },
              { key: 'v', label: 'v. Health and the value of regular company' },
              { key: 'vi', label: 'vi. What the instructors bring to the room' },
              { key: 'vii', label: 'vii. The cost of building new classrooms' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'iii' },
              { id: 'pC', text: 'Paragraph C', answer: 'iv' },
              { id: 'pD', text: 'Paragraph D', answer: 'v' },
              { id: 'pE', text: 'Paragraph E', answer: 'vi' },
              { id: 'pF', text: 'Paragraph F', answer: 'i' },
            ],
            explanation:
              'Paragraph B describes evening courses as "an affordable way to test an interest" and to "retrain without giving up the income" - heading iii (a flexible route to changing careers). Paragraph C stresses students who enrol "for reasons that have nothing to do with work" - heading iv. Paragraph D links classes to loneliness and "regular, low-pressure contact" - heading v (health and the value of company). Paragraph E is about the tutors and what they "bring to the classroom" - heading vi. Paragraph F lists the "difficulties" of the revival - heading i. Headings ii (a qualification) and vii (building classrooms) are distractors that are not used.',
          },
          {
            id: 'rd-gen-007-p3-q21',
            type: 'mcq',
            prompt:
              'According to Paragraph A, what has happened to adult evening classes recently?',
            options: [
              'They have been quietly dropped across the country',
              'Enrolments have risen for several years and waiting lists have returned',
              'They have moved entirely online',
              'They now run only during the daytime',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says that "enrolments have risen for several years running, and waiting lists for the most popular subjects have reappeared." Option B matches; the dropping of courses is described as something that happened previously.',
          },
          {
            id: 'rd-gen-007-p3-q22',
            type: 'mcq',
            prompt: 'How does Paragraph B say evening classes help people who want to retrain?',
            options: [
              'They guarantee a higher-paid job on completion',
              'They are free of charge to all students',
              'They allow people to retrain without giving up their current income',
              'They replace the need for any workplace experience',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph B says the classes "allow people to retrain without giving up the income they already rely on." Option C matches; the fees are described as modest, not free, and no job is guaranteed.',
          },
          {
            id: 'rd-gen-007-p3-q23',
            type: 'mcq',
            prompt:
              'Why have several councils begun to fund evening classes, according to Paragraph D?',
            options: [
              'To raise money from course fees',
              'As a cheap way of keeping residents connected and well',
              'To replace the local school system',
              'Because the law now requires them to',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says councils have begun to fund classes "as a cheap and cheerful way of keeping their residents connected and well." Option B matches directly.',
          },
          {
            id: 'rd-gen-007-p3-q24',
            type: 'mcq',
            prompt: 'What does Paragraph E suggest about the people who teach evening classes?',
            options: [
              'They are mostly trained teachers with no other job',
              'They are often practitioners who bring practical knowledge to the class',
              'They find the evening groups harder to teach than school lessons',
              'They are paid more than daytime teachers',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says many tutors "are practitioners first and instructors second" and bring "practical knowledge that no textbook can match." Option B matches; it also says tutors enjoy these groups, contradicting Option C.',
          },
          {
            id: 'rd-gen-007-p3-q25',
            type: 'tfng',
            prompt: 'The idea of the adult evening class is a recent invention.',
            answer: 'false',
            explanation:
              'Paragraph A states plainly that "The adult evening class is not a new idea." The statement therefore contradicts the text and is False.',
          },
          {
            id: 'rd-gen-007-p3-q26',
            type: 'tfng',
            prompt:
              'Researchers have found that loneliness can damage health as much as some physical illnesses.',
            answer: 'true',
            explanation:
              'Paragraph D says researchers "have repeatedly found that loneliness does as much harm to health as many physical ailments." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-007-p3-q27',
            type: 'tfng',
            prompt: 'A class with too few students is usually allowed to continue anyway.',
            answer: 'false',
            explanation:
              'Paragraph F says "a class that fails to attract enough students must usually be cancelled, sometimes at short notice." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-007-p3-q28',
            type: 'tfng',
            prompt:
              'The article states that demand for adult classes is expected to disappear soon.',
            answer: 'not-given',
            explanation:
              'Paragraph F says "the appetite is plainly there" and that the adult class "seems likely to keep its lights burning," but it makes no claim that demand will disappear soon. There is no information either way, so the answer is Not Given.',
          },
          {
            id: 'rd-gen-007-p3-q29',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: For many learners, the value of the class lies less in the _______ at the end than in the routine of attending.',
            acceptableAnswers: ['certificate'],
            explanation:
              'Paragraph C says the value "lies less in the certificate at the end than in the simple routine of leaving the house." The missing word is "certificate".',
          },
          {
            id: 'rd-gen-007-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Because adult students choose to attend, the classroom atmosphere tends to be relaxed and _______.',
            acceptableAnswers: ['good-humoured', 'good-humored'],
            explanation:
              'Paragraph E says the atmosphere "tends to be relaxed and good-humoured." The missing word is "good-humoured" (the US spelling "good-humored" is also accepted).',
          },
          {
            id: 'rd-gen-007-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When budgets are squeezed, funding for classes can be _______ with little warning.',
            acceptableAnswers: ['withdrawn'],
            explanation:
              'Paragraph F says funding "can be withdrawn with little warning when budgets are squeezed." The missing word is "withdrawn".',
          },
        ],
      },
    ],
  },
]
