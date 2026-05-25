// ─── IELTS General Training (GT) Reading — practice item bank (Set 1) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, and sentence/summary completion). Framed as "IELTS preparation" only —
// no official affiliation is implied. General Training track.
//
// GT Reading differs from Academic: instead of academic-journal passages it
// draws on EVERYDAY / SOCIAL texts (notices, advertisements, timetables,
// instructions) and WORKPLACE texts (job ads, staff handbooks, training
// material), plus optionally one longer general-interest article. This file
// ships ONE complete, carefully-checked GT test (3 passages, 14 questions).
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_1: ReadingTest[] = [
  {
    id: 'gt-rd-s1-001',
    title: 'General Training Reading — Practice Test 1',
    track: 'general',
    estimatedMinutes: 20,
    passages: [
      // ── Passage 1: EVERYDAY / SOCIAL — community notice ────────────────────
      {
        id: 'gt-rd-s1-001-p1',
        title: 'Riverside Community Pool — Visitor Information',
        body: `Welcome to Riverside Community Pool. Please read the following information before your first visit so that your time with us is safe and enjoyable.

OPENING HOURS
The pool opens at 6.30 a.m. on weekdays for lane swimming only, and the general public are admitted from 9.00 a.m. On Saturdays and Sundays we open at 8.00 a.m. The building closes at 9.00 p.m. every day except Friday, when the last swim ends at 8.00 p.m. so that staff can prepare the pool for the Saturday morning swimming club.

TICKETS AND PASSES
A single adult swim costs £6.50, and a child under sixteen pays £3.50. Children under the age of four swim free of charge but must be accompanied in the water by an adult at all times. If you intend to visit regularly, a monthly pass at £42 usually works out cheaper than paying each time, and it can be used at any hour the pool is open. Passes are not transferable: each one is linked to a single named user, and our reception staff may ask to see photo identification.

USING THE CHANGING ROOMS
We provide lockers in both changing rooms. These operate with a returnable £1 coin, which is released when you collect your belongings. Please do not leave valuables in the changing area overnight, as the rooms are emptied and cleaned after closing and any items left behind are taken to the lost-property office.

POOLSIDE RULES
For everyone's safety, running on the poolside is not permitted, and diving is allowed only in the clearly marked deep end. Swimmers who are not strong are asked to stay in the shallow end, where a lifeguard is always on duty. Photography is not allowed anywhere inside the pool building.`,
        questions: [
          {
            id: 'gt-rd-s1-001-p1-q1',
            type: 'tfng',
            prompt: 'On weekday mornings, only lane swimmers may use the pool before 9.00 a.m.',
            answer: 'true',
            explanation:
              'The Opening Hours section says the pool "opens at 6.30 a.m. on weekdays for lane swimming only, and the general public are admitted from 9.00 a.m." So before 9.00 a.m. only lane swimmers may use it, which makes the statement True.',
          },
          {
            id: 'gt-rd-s1-001-p1-q2',
            type: 'tfng',
            prompt: 'The pool closes at the same time every day of the week.',
            answer: 'false',
            explanation:
              'The text states the building "closes at 9.00 p.m. every day except Friday, when the last swim ends at 8.00 p.m." Because Friday is different, the statement is False.',
          },
          {
            id: 'gt-rd-s1-001-p1-q3',
            type: 'tfng',
            prompt: 'Most visitors find that buying single tickets is cheaper than a monthly pass.',
            answer: 'false',
            explanation:
              'The Tickets section says that for regular visitors "a monthly pass at £42 usually works out cheaper than paying each time." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'gt-rd-s1-001-p1-q4',
            type: 'tfng',
            prompt: 'A monthly pass can be lent to a friend or family member.',
            answer: 'false',
            explanation:
              'The text states "Passes are not transferable: each one is linked to a single named user," and reception may ask for photo identification. Lending a pass is therefore not allowed, so the statement is False.',
          },
          {
            id: 'gt-rd-s1-001-p1-q5',
            type: 'mcq',
            prompt: 'What must a swimmer do to use one of the lockers?',
            options: [
              'Pay a non-refundable fee of £1',
              'Insert a £1 coin that is returned when they collect their belongings',
              'Register the locker number at reception',
              'Show photo identification to a member of staff',
            ],
            correctIndex: 1,
            explanation:
              'The changing-rooms section says the lockers "operate with a returnable £1 coin, which is released when you collect your belongings." Option B describes this; the coin is returned, so it is not a fee (A).',
          },
          {
            id: 'gt-rd-s1-001-p1-q6',
            type: 'mcq',
            prompt: 'According to the poolside rules, where is diving allowed?',
            options: [
              'Anywhere a lifeguard is on duty',
              'In the shallow end only',
              'Only in the clearly marked deep end',
              'Nowhere inside the building',
            ],
            correctIndex: 2,
            explanation:
              'The Poolside Rules state that "diving is allowed only in the clearly marked deep end." Option C matches exactly.',
          },
        ],
      },
      // ── Passage 2: WORKPLACE — staff handbook extract ──────────────────────
      {
        id: 'gt-rd-s1-001-p2',
        title: 'Staff Handbook — Requesting Annual Leave',
        body: `This section of the handbook explains how to request your paid annual leave. Please read it carefully, as following the correct procedure helps us keep every team properly staffed.

YOUR ENTITLEMENT
Full-time employees receive 25 days of paid leave each year, in addition to public holidays. Staff who work part time receive a proportion of this based on the number of days they work each week. The leave year runs from 1 April to 31 March.

HOW TO APPLY
All leave must be requested through the online staff portal; we no longer accept requests made by email or in person. After you submit a request, it is sent automatically to your line manager, who will normally respond within five working days. You should not book travel or make other firm arrangements until your request has been approved, as approval cannot be guaranteed during our busiest periods.

NOTICE PERIODS
For any single absence of five days or more, you must apply at least four weeks in advance. Shorter absences require one week's notice. In exceptional circumstances a manager may waive these notice periods, but this is at their discretion and should not be relied upon.

CARRYING LEAVE OVER
You are encouraged to take your full entitlement within the leave year. A maximum of five unused days may be carried over into the following year, and these must be used by 30 June or they will be lost. Any days beyond this limit cannot be carried over and will not be paid in lieu, except where you are leaving the company, in which case untaken leave is paid with your final salary.`,
        questions: [
          {
            id: 'gt-rd-s1-001-p2-q7',
            type: 'mcq',
            prompt: 'How should an employee now submit a request for annual leave?',
            options: [
              'By sending an email to their line manager',
              'By speaking to their manager in person',
              'Through the online staff portal',
              'By completing a paper form at reception',
            ],
            correctIndex: 2,
            explanation:
              'The "How to apply" section states that "All leave must be requested through the online staff portal; we no longer accept requests made by email or in person." Option C is correct.',
          },
          {
            id: 'gt-rd-s1-001-p2-q8',
            type: 'tfng',
            prompt:
              'Part-time staff receive exactly the same number of leave days as full-time staff.',
            answer: 'false',
            explanation:
              'The text says part-time staff "receive a proportion of this based on the number of days they work each week," not the same amount as full-time staff. The statement is therefore False.',
          },
          {
            id: 'gt-rd-s1-001-p2-q9',
            type: 'tfng',
            prompt: 'Employees should wait for approval before booking any travel.',
            answer: 'true',
            explanation:
              'The handbook advises: "You should not book travel or make other firm arrangements until your request has been approved." This supports the statement, so it is True.',
          },
          {
            id: 'gt-rd-s1-001-p2-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: For a single absence of five days or more, an employee must apply at least _______ weeks in advance.',
            acceptableAnswers: ['four', '4'],
            explanation:
              'The "Notice periods" section states that for any absence of five days or more "you must apply at least four weeks in advance." The answer is "four" (the number 4 is also accepted).',
          },
          {
            id: 'gt-rd-s1-001-p2-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: A maximum of _______ unused days may be carried over into the following leave year.',
            acceptableAnswers: ['five', '5'],
            explanation:
              'The "Carrying leave over" section says "A maximum of five unused days may be carried over into the following year." The answer is "five" (the number 5 is also accepted).',
          },
          {
            id: 'gt-rd-s1-001-p2-q12',
            type: 'tfng',
            prompt: 'Unused leave is always paid in cash if it is not taken during the leave year.',
            answer: 'false',
            explanation:
              'The text says days beyond the carry-over limit "will not be paid in lieu, except where you are leaving the company." Because payment is only made when an employee leaves, "always paid in cash" contradicts the passage, so it is False.',
          },
        ],
      },
      // ── Passage 3: LONGER GENERAL-INTEREST text ────────────────────────────
      {
        id: 'gt-rd-s1-001-p3',
        title: 'The Enduring Appeal of the Allotment Garden',
        body: `In towns and cities across Britain, tucked behind railway lines and housing estates, lie thousands of small plots of rented ground known as allotments. On these patches of land, people who may have no garden of their own grow vegetables, fruit and flowers. The allotment is a modest institution, yet it has survived for more than two centuries and shows little sign of fading away.

The roots of the system lie in the agricultural changes of the eighteenth and nineteenth centuries. As common land was enclosed and handed to private owners, many rural labourers lost the small patches on which they had grown food for their families. To ease the resulting hardship, some landowners and parish authorities began to let out narrow strips of ground at low rents. These early allotments were intended less as a hobby than as a practical defence against hunger.

The two world wars gave the movement an enormous boost. With imported food in short supply, the government urged citizens to cultivate every available scrap of land, and the number of plots rose sharply. Many people who took up a spade for the first time during these campaigns kept their plots long after the emergency had passed, having discovered both the satisfaction and the savings that growing one's own food can bring.

In the decades that followed, the popularity of allotments declined. Rising incomes meant that fewer families needed to grow food to make ends meet, and as towns expanded, a good deal of allotment land was sold for building. By the closing years of the twentieth century, many sites stood half-empty, and some local councils questioned whether they were worth keeping.

The revival, when it came, surprised many observers. A renewed interest in where food comes from, together with concern about the environmental cost of transporting produce over long distances, drew a new generation to the allotment gate. Today, demand once again outstrips supply in many areas, and would-be gardeners often face long waiting lists. What was once a refuge from poverty has become, for many, a valued escape from the pressures of modern life.`,
        questions: [
          {
            id: 'gt-rd-s1-001-p3-q13',
            type: 'mcq',
            prompt: 'What was the original purpose of the earliest allotments?',
            options: [
              'To provide a pleasant hobby for wealthy landowners',
              'To help people who had lost access to land to grow food',
              'To supply produce to nearby town markets',
              'To preserve common land from being built on',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph explains that after common land was enclosed, labourers lost their plots, and that the early allotments were "a practical defence against hunger" rather than a hobby. Option B captures this purpose.',
          },
          {
            id: 'gt-rd-s1-001-p3-q14',
            type: 'mcq',
            prompt: 'Why did the number of allotment plots rise sharply during the two world wars?',
            options: [
              'The government offered free land to anyone who applied',
              'Imported food was scarce, so people were urged to grow their own',
              'Allotments had become a fashionable leisure activity',
              'New machinery made cultivating land much easier',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph states that "With imported food in short supply, the government urged citizens to cultivate every available scrap of land, and the number of plots rose sharply." Option B matches this directly.',
          },
          {
            id: 'gt-rd-s1-001-p3-q15',
            type: 'tfng',
            prompt: 'Some allotment land was sold for building as towns grew larger.',
            answer: 'true',
            explanation:
              'The fourth paragraph says that "as towns expanded, a good deal of allotment land was sold for building." This supports the statement, so it is True.',
          },
          {
            id: 'gt-rd-s1-001-p3-q16',
            type: 'tfng',
            prompt: 'The recent revival of allotments was widely predicted by experts.',
            answer: 'false',
            explanation:
              'The final paragraph opens, "The revival, when it came, surprised many observers." Because it surprised people, it was not widely predicted, so the statement is False.',
          },
          {
            id: 'gt-rd-s1-001-p3-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A renewed interest in where food comes from, together with concern about the environmental cost of _______ produce over long distances, attracted new gardeners.',
            acceptableAnswers: ['transporting'],
            explanation:
              'The final paragraph refers to "concern about the environmental cost of transporting produce over long distances." The missing word is "transporting".',
          },
          {
            id: 'gt-rd-s1-001-p3-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Because demand now outstrips supply, would-be gardeners in many areas face long _______ lists.',
            acceptableAnswers: ['waiting'],
            explanation:
              'The final paragraph states that "would-be gardeners often face long waiting lists." The required word is "waiting".',
          },
        ],
      },
    ],
  },
]
