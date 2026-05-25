// ─── IELTS General Training (GT) Reading — practice item bank (Set 4) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, and sentence/summary completion). Framed as "IELTS preparation" only —
// no official affiliation is implied. General Training track.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, advertisements,
// timetables, course catalogues) and WORKPLACE texts (policies, handbooks,
// training material), plus one longer general-interest article. This file
// ships ONE complete, carefully-checked GT test (3 sections, 40 questions).
// Topics are deliberately distinct from GT Sets 1–3:
//   Section 1 — a community college short-course catalogue + a public library
//               events notice (everyday / social register);
//   Section 2 — a workplace remote-working policy and equipment handbook;
//   Section 3 — a general-interest feature on the rise of the four-day week.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_4: ReadingTest[] = [
  {
    id: 'rd-general-004',
    title: 'General Training Reading — Practice Test 4',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL ───────────────────────────────────────
      // Two short everyday texts: a community-college short-course catalogue and
      // a public-library events notice. 13 questions.
      {
        id: 'rd-general-004-p1',
        title: 'Greenfields Community College — Autumn Short Courses & Westgate Library Events',
        body: `TEXT A — GREENFIELDS COMMUNITY COLLEGE: AUTUMN SHORT-COURSE CATALOGUE

Our autumn term runs from late September to mid-December. The short courses below are open to anyone aged sixteen and over; no previous experience is needed unless a course description says otherwise. To reserve a place, complete the online enrolment form or call the office on weekday mornings. Payment is due at the time of booking, and a place is not held until payment has been received.

INTRODUCTION TO DIGITAL PHOTOGRAPHY (Course DP1)
Tuesdays, 7.00–9.00 p.m., ten weeks. Tutor: Maria Okafor. £95.
Bring any digital camera, including a phone camera. We cover composition, light and simple editing. There is an optional Saturday outing in week six to photograph the harbour; the cost of transport for this trip is not included in the course fee.

CONVERSATIONAL SPANISH FOR BEGINNERS (Course SP1)
Thursdays, 6.30–8.00 p.m., twelve weeks. Tutor: Diego Ramos. £110.
This course is for true beginners. If you have studied Spanish before, please ask the office about our intermediate group, which meets on the same evening. A workbook is provided and is included in the fee.

EVERYDAY WOODWORKING (Course WW1)
Saturdays, 10.00 a.m.–1.00 p.m., eight weeks. Tutor: Tom Fletcher. £140.
You will make a small stool to take home. All tools are supplied, but because the workshop uses sharp equipment, places are limited to eight learners and enrolment closes one week before the first session. Sturdy footwear must be worn; anyone in open sandals will be asked to sit out.

GENTLE YOGA (Course YG1)
Mondays, 10.30–11.30 a.m., ten weeks. Tutor: Priya Shah. £70.
Suitable for older learners and those returning to exercise after a break. Please tell the tutor about any health conditions before the first class. Mats are available to borrow, though many learners prefer to bring their own.

CONCESSIONS
Learners receiving certain state benefits, and full-time students under twenty-five, may claim a reduced fee on most courses. Proof must be shown when enrolling. The reduced rate does not apply to Everyday Woodworking, as the materials cost is fixed.

TEXT B — WESTGATE PUBLIC LIBRARY: WHAT'S ON THIS MONTH

Westgate Library is more than a place to borrow books. Each month we host free events for all ages. Unless stated, events are free and no ticket is required, but for sessions marked "booking essential" the room has limited space, so please reserve a seat at the desk or by phone.

STORYTIME FOR UNDER-FIVES — every Wednesday, 10.30 a.m.
A half-hour of songs and picture books for toddlers and their carers. Just turn up; no need to book. Please note there is no Storytime on the last Wednesday of the month, when the children's area is used for staff training.

CODE CLUB FOR YOUNG PEOPLE — Saturdays, 2.00–3.30 p.m.
A friendly introduction to computer coding for those aged nine to fourteen. Laptops are provided. Booking essential, as places fill quickly.

LOCAL HISTORY TALK: "THE OLD CANAL" — Thursday 18th, 6.00 p.m.
Local historian Frank Dale shares photographs of the town's canal before it was filled in. Suitable for adults. Booking essential.

JOB-SEARCH HELP DESK — every Monday and Friday, 9.30 a.m.–12.30 p.m.
Drop in for free help with writing a CV or filling in online application forms. A volunteer adviser is on hand. No appointment needed, but you may have to wait at busy times.

A reminder: the library now closes at 5.00 p.m. on Saturdays, an hour earlier than before. Evening events on other days are unaffected.`,
        questions: [
          {
            id: 'rd-gen-004-p1-q1',
            type: 'tfng',
            prompt:
              'A place on a Greenfields course is reserved as soon as the enrolment form is submitted.',
            answer: 'false',
            explanation:
              'Text A states that "Payment is due at the time of booking, and a place is not held until payment has been received." A submitted form alone does not reserve the place, so the statement is False.',
          },
          {
            id: 'rd-gen-004-p1-q2',
            type: 'tfng',
            prompt:
              'The cost of transport for the photography course outing is part of the course fee.',
            answer: 'false',
            explanation:
              'The Digital Photography entry says "the cost of transport for this trip is not included in the course fee." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-004-p1-q3',
            type: 'tfng',
            prompt:
              'Learners who have studied Spanish before are advised to ask about a different group.',
            answer: 'true',
            explanation:
              'The Conversational Spanish entry says the course is for true beginners and adds: "If you have studied Spanish before, please ask the office about our intermediate group." This matches the statement, so it is True.',
          },
          {
            id: 'rd-gen-004-p1-q4',
            type: 'tfng',
            prompt: 'The woodworking course can be joined at any point during the autumn term.',
            answer: 'false',
            explanation:
              'The Everyday Woodworking entry states that places are limited and "enrolment closes one week before the first session." It cannot be joined at any point, so the statement is False.',
          },
          {
            id: 'rd-gen-004-p1-q5',
            type: 'mcq',
            prompt: 'Which course explicitly welcomes people returning to exercise after a break?',
            options: [
              'Introduction to Digital Photography',
              'Everyday Woodworking',
              'Gentle Yoga',
              'Conversational Spanish for Beginners',
            ],
            correctIndex: 2,
            explanation:
              'The Gentle Yoga entry says it is "Suitable for older learners and those returning to exercise after a break." Option C is correct.',
          },
          {
            id: 'rd-gen-004-p1-q6',
            type: 'mcq',
            prompt: 'Why is the reduced fee unavailable for the woodworking course?',
            options: [
              'The course is already fully booked',
              'The cost of the materials is fixed',
              'The course is only for full-time students',
              'The tutor does not allow concessions',
            ],
            correctIndex: 1,
            explanation:
              'The Concessions section states the reduced rate "does not apply to Everyday Woodworking, as the materials cost is fixed." Option B matches this reason exactly.',
          },
          {
            id: 'rd-gen-004-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Places on the woodworking course are limited to _______ learners.',
            acceptableAnswers: ['eight', '8'],
            explanation:
              'The Everyday Woodworking entry says "places are limited to eight learners." The answer is "eight" (the number 8 is also accepted).',
          },
          {
            id: 'rd-gen-004-p1-q8',
            type: 'tfng',
            prompt: 'Storytime for under-fives runs on every Wednesday of the month.',
            answer: 'false',
            explanation:
              'Text B notes "there is no Storytime on the last Wednesday of the month, when the children’s area is used for staff training." It does not run every Wednesday, so the statement is False.',
          },
          {
            id: 'rd-gen-004-p1-q9',
            type: 'mcq',
            prompt: 'For which library activity do you NOT need to reserve a place in advance?',
            options: [
              'Code Club for Young People',
              'The local history talk about the canal',
              'The Job-Search Help Desk',
              'All of the listed activities require booking',
            ],
            correctIndex: 2,
            explanation:
              'The Job-Search Help Desk entry says "No appointment needed," whereas Code Club and the history talk are both marked "Booking essential." Option C is correct.',
          },
          {
            id: 'rd-gen-004-p1-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE phrase from the text: The Code Club is described as a friendly introduction to _______ for young people.',
            acceptableAnswers: ['computer coding', 'coding'],
            explanation:
              'The Code Club entry calls it "A friendly introduction to computer coding for those aged nine to fourteen." The phrase is "computer coding" (the shorter form "coding" is accepted).',
          },
          {
            id: 'rd-gen-004-p1-q11',
            type: 'tfng',
            prompt: 'The job-search adviser at the library is a paid member of council staff.',
            answer: 'not-given',
            explanation:
              'Text B says "A volunteer adviser is on hand," but it does not state whether the adviser is paid or employed by the council. With no information given, the answer is Not Given.',
          },
          {
            id: 'rd-gen-004-p1-q12',
            type: 'mcq',
            prompt: 'What change to the library’s opening hours is mentioned?',
            options: [
              'It now opens an hour later on weekday mornings',
              'It now closes an hour earlier on Saturdays',
              'It is now closed all day on Mondays',
              'Its evening events have all been cancelled',
            ],
            correctIndex: 1,
            explanation:
              'The closing reminder states the library "now closes at 5.00 p.m. on Saturdays, an hour earlier than before." Option B is correct; evening events on other days are explicitly unaffected.',
          },
          {
            id: 'rd-gen-004-p1-q13',
            type: 'tfng',
            prompt: 'The local history talk is intended mainly for children.',
            answer: 'false',
            explanation:
              'The Local History Talk entry states it is "Suitable for adults." It is not intended mainly for children, so the statement is False.',
          },
        ],
      },
      // ── Section 2: WORKPLACE ───────────────────────────────────────────────
      // A remote-working policy and equipment handbook. 13 questions.
      {
        id: 'rd-general-004-p2',
        title: 'Staff Policy — Remote Working & Home Equipment Handbook',
        body: `This policy explains how remote working operates at our company and how to look after the equipment we provide. It applies to all employees whose role has been approved for working away from the office. Please read it before your first day of home working.

WHO CAN WORK REMOTELY
Remote working is not an automatic right; it depends on the duties of your role and must be agreed with your line manager. Most office-based staff may work from home for up to three days a week, with at least two days spent in the office so that teams can meet face to face. Roles that require handling certain confidential documents may not be carried out at home at all, and your manager will tell you if this applies to you.

SETTING UP YOUR WORKSPACE
Before you begin, you must complete the online workspace checklist. This is not simply a formality: it helps us confirm that your chair, desk and screen position will not cause you discomfort over time. If the checklist flags a problem, the facilities team will arrange a telephone assessment and, where needed, supply additional equipment at no cost to you.

EQUIPMENT WE PROVIDE
Staff approved for regular home working are issued with a laptop and, on request, a separate monitor, keyboard and mouse. This equipment remains the property of the company and must be returned if you leave or change to a role that does not involve home working. You may use the laptop for reasonable personal tasks, such as reading the news, but you must not install software of your own or allow family members to use it for their own work or study.

LOOKING AFTER YOUR EQUIPMENT
Keep liquids away from the keyboard and do not leave the laptop in a parked car, where heat or theft are real risks. If a device is lost or stolen, you must report it to the IT service desk within twenty-four hours so that the data on it can be protected remotely. Minor faults should also be reported to the IT service desk; please do not attempt your own repairs, as opening a device yourself will end its warranty.

STAYING IN TOUCH
On days when you work from home you are expected to be reachable during your normal hours and to join team meetings by video where asked. You do not need to be at your desk every minute, but long absences during the working day should be agreed in advance, just as they would be in the office. If your home internet fails for a whole morning or longer, contact your manager, who may ask you to come into the office for the rest of the day.

EXPENSES
The company does not pay for your household heating or electricity. However, a fixed monthly allowance towards these costs is added to the salary of staff who work from home on a regular basis; you do not need to keep receipts to claim it. Costs such as office furniture bought without prior approval will not be refunded.`,
        questions: [
          {
            id: 'rd-gen-004-p2-q14',
            type: 'tfng',
            prompt: 'Every employee at the company has the right to work from home.',
            answer: 'false',
            explanation:
              'The policy states that "Remote working is not an automatic right; it depends on the duties of your role and must be agreed with your line manager." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-004-p2-q15',
            type: 'mcq',
            prompt:
              'What is the maximum number of days most office-based staff may work from home each week?',
            options: ['Two days', 'Three days', 'Four days', 'Five days'],
            correctIndex: 1,
            explanation:
              'The text says "Most office-based staff may work from home for up to three days a week, with at least two days spent in the office." The maximum at home is three days, so Option B is correct.',
          },
          {
            id: 'rd-gen-004-p2-q16',
            type: 'tfng',
            prompt: 'Some roles cannot be done from home at all because of the documents involved.',
            answer: 'true',
            explanation:
              'The policy notes that "Roles that require handling certain confidential documents may not be carried out at home at all." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-004-p2-q17',
            type: 'mcq',
            prompt: 'What is the main purpose of the online workspace checklist?',
            options: [
              'To record how many hours an employee works at home',
              'To confirm the setup will not cause discomfort over time',
              'To decide whether an employee may work remotely',
              'To order replacement equipment automatically',
            ],
            correctIndex: 1,
            explanation:
              'The "Setting up your workspace" section says the checklist "helps us confirm that your chair, desk and screen position will not cause you discomfort over time." Option B matches this purpose.',
          },
          {
            id: 'rd-gen-004-p2-q18',
            type: 'tfng',
            prompt:
              'Employees must pay for any additional equipment the facilities team supplies after an assessment.',
            answer: 'false',
            explanation:
              'The text says the facilities team will "supply additional equipment at no cost to you." Because it is free, the statement that employees must pay is False.',
          },
          {
            id: 'rd-gen-004-p2-q19',
            type: 'tfng',
            prompt: 'The company laptop may be used by an employee’s family for their own studies.',
            answer: 'false',
            explanation:
              'The "Equipment we provide" section states you "must not install software of your own or allow family members to use it for their own work or study." This directly contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-004-p2-q20',
            type: 'mcq',
            prompt:
              'According to the handbook, what is an acceptable personal use of the work laptop?',
            options: [
              'Installing your own preferred software',
              'Letting a relative use it for their job',
              'Reading the news',
              'Carrying out your own repairs on it',
            ],
            correctIndex: 2,
            explanation:
              'The text gives "reading the news" as an example of a reasonable personal task, while installing software, lending it to relatives, and self-repair are all forbidden. Option C is correct.',
          },
          {
            id: 'rd-gen-004-p2-q21',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: A lost or stolen device must be reported to the IT service desk within _______ hours.',
            acceptableAnswers: ['twenty-four', '24', 'twentyfour'],
            explanation:
              'The "Looking after your equipment" section says a lost or stolen device must be reported "within twenty-four hours." The answer is "twenty-four" (the number 24 is also accepted).',
          },
          {
            id: 'rd-gen-004-p2-q22',
            type: 'mcq',
            prompt: 'Why are employees told not to attempt their own repairs?',
            options: [
              'Repairs are too expensive for staff to afford',
              'Opening a device themselves will end its warranty',
              'The IT service desk charges a fee for advice',
              'Spare parts are not kept in the office',
            ],
            correctIndex: 1,
            explanation:
              'The handbook says "please do not attempt your own repairs, as opening a device yourself will end its warranty." Option B matches the stated reason.',
          },
          {
            id: 'rd-gen-004-p2-q23',
            type: 'tfng',
            prompt:
              'If their home internet fails for a whole morning, staff may be asked to come into the office.',
            answer: 'true',
            explanation:
              'The "Staying in touch" section says if home internet "fails for a whole morning or longer, contact your manager, who may ask you to come into the office for the rest of the day." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-004-p2-q24',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: On home-working days, staff are expected to be _______ during their normal hours.',
            acceptableAnswers: ['reachable', 'contactable'],
            explanation:
              'The "Staying in touch" section states that staff "are expected to be reachable during your normal hours." The word is "reachable" (the close synonym "contactable" is accepted).',
          },
          {
            id: 'rd-gen-004-p2-q25',
            type: 'tfng',
            prompt: 'Employees must keep receipts in order to claim the home-working allowance.',
            answer: 'false',
            explanation:
              'The Expenses section says of the fixed monthly allowance: "you do not need to keep receipts to claim it." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-004-p2-q26',
            type: 'mcq',
            prompt: 'Which of the following will the company NOT pay for?',
            options: [
              'A separate monitor requested for home use',
              'Additional equipment recommended after an assessment',
              'Office furniture bought without prior approval',
              'The fixed monthly home-working allowance',
            ],
            correctIndex: 2,
            explanation:
              'The Expenses section states that "Costs such as office furniture bought without prior approval will not be refunded." The other three items are all provided or paid by the company, so Option C is correct.',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST text ────────────────────────────
      // The rise of the four-day working week. 14 questions.
      {
        id: 'rd-general-004-p3',
        title: 'The Rise of the Four-Day Working Week',
        body: `For most of the past century, the five-day working week has seemed as fixed as the seasons. Yet in recent years a growing number of organisations have begun to question whether five days is really necessary, and to experiment with giving staff a third day off without cutting their pay. The idea is not new — it was floated by economists as long ago as the 1930s — but only lately has it moved from the fringes of debate into the offices of mainstream employers.

The argument in its favour rests on a simple claim: that people who are well rested work better. Supporters point out that the eight-hour day itself was once dismissed as impractical, yet it became the norm without the collapse in output that critics had feared. A shorter week, they suggest, could follow the same path. If workers waste less time on unproductive meetings and low-value tasks, the reasoning goes, the same amount could be achieved in fewer hours.

Several large trials have now tested this claim. In one widely reported scheme, dozens of companies in a range of industries moved their staff to a four-day week for six months while keeping wages unchanged. The findings were striking. The great majority of the firms involved reported that productivity had held steady or even improved, and almost all of them chose to continue the arrangement after the trial ended. Staff, for their part, reported lower levels of stress and tiredness, and far fewer said they were thinking of leaving their jobs.

Why might a shorter week leave output unchanged? Researchers offer several explanations. With less time available, employees and managers became more ruthless about cutting meetings that achieved little. Distractions were reduced, and people guarded their working hours more carefully, knowing that the reward was a longer weekend. Some firms also found that the extra day off reduced the number of days lost to illness, as staff had time to attend to errands and rest that might otherwise have been squeezed into evenings.

The change is not without its difficulties, however. A four-day week is far easier to arrange in an office than in a hospital, a shop or a factory, where someone must be present whenever the doors are open. Some organisations have responded by staggering days off across the team, so that the business stays open five or six days while each individual works four. Others have found that simply compressing the same hours into fewer, longer days leaves staff just as tired as before — which is why most successful schemes reduce total hours rather than merely rearranging them.

Critics raise a further concern. They warn that the benefits seen in short trials may fade once the novelty wears off, and that the firms willing to take part in such experiments are unlikely to be typical. A confident, well-organised company, they argue, may thrive on a shorter week, while a struggling one might simply fall further behind. There is, too, the question of fairness: a policy that suits desk-based professionals may do little for those in lower-paid jobs that cannot easily be reorganised.

For all these doubts, the direction of travel seems clear. Surveys suggest that a shorter week is now among the benefits that younger workers most want, and employers competing for talent are taking note. Few expect the four-day week to become universal in the near future. But the very fact that serious companies are willing to test it marks a shift in how we think about work — a recognition, perhaps, that the hours we spend at our desks matter less than what we manage to achieve while we are there.`,
        questions: [
          {
            id: 'rd-gen-004-p3-q27',
            type: 'tfng',
            prompt:
              'The idea of a shorter working week was first suggested only in the last few years.',
            answer: 'false',
            explanation:
              'The first paragraph states the idea "was floated by economists as long ago as the 1930s." It is not new, so the statement is False.',
          },
          {
            id: 'rd-gen-004-p3-q28',
            type: 'mcq',
            prompt: 'What change are the organisations in the article experimenting with?',
            options: [
              'Cutting both working days and pay together',
              'Giving staff a third day off without reducing pay',
              'Replacing office work with home working',
              'Lengthening the working day to four hours',
            ],
            correctIndex: 1,
            explanation:
              'The opening paragraph describes organisations experimenting with "giving staff a third day off without cutting their pay." Option B matches this directly.',
          },
          {
            id: 'rd-gen-004-p3-q29',
            type: 'mcq',
            prompt: 'How do supporters use the example of the eight-hour day?',
            options: [
              'To prove that working hours can never be reduced',
              'To show a past change that worked despite predictions of failure',
              'To argue that the eight-hour day should now be abolished',
              'To explain why output always falls when hours are cut',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph says the eight-hour day "was once dismissed as impractical, yet it became the norm without the collapse in output that critics had feared," and suggests a shorter week "could follow the same path." Option B captures this use of the example.',
          },
          {
            id: 'rd-gen-004-p3-q30',
            type: 'tfng',
            prompt: 'In the six-month trial, workers’ wages were reduced in line with their hours.',
            answer: 'false',
            explanation:
              'The third paragraph states the companies "moved their staff to a four-day week for six months while keeping wages unchanged." Wages were not reduced, so the statement is False.',
          },
          {
            id: 'rd-gen-004-p3-q31',
            type: 'tfng',
            prompt:
              'Most of the firms in the trial decided to keep the four-day week after it finished.',
            answer: 'true',
            explanation:
              'The third paragraph reports that "almost all of them chose to continue the arrangement after the trial ended." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-004-p3-q32',
            type: 'mcq',
            prompt:
              'According to researchers, why did output often stay the same on a shorter week?',
            options: [
              'Companies hired large numbers of extra staff',
              'Employees cut meetings that achieved little and guarded their time',
              'Customers were asked to accept slower service',
              'Managers increased the length of each working day',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph explains that staff "became more ruthless about cutting meetings that achieved little" and "guarded their working hours more carefully." Option B reflects these explanations.',
          },
          {
            id: 'rd-gen-004-p3-q33',
            type: 'tfng',
            prompt:
              'Some firms found that having an extra day off reduced absences due to illness.',
            answer: 'true',
            explanation:
              'The fourth paragraph notes that "the extra day off reduced the number of days lost to illness, as staff had time to attend to errands and rest." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-004-p3-q34',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A four-day week is harder to arrange in a hospital, a shop or a _______, where someone must always be present.',
            acceptableAnswers: ['factory'],
            explanation:
              'The fifth paragraph lists "a hospital, a shop or a factory, where someone must be present whenever the doors are open." The missing word is "factory".',
          },
          {
            id: 'rd-gen-004-p3-q35',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To stay open while each person works four days, some organisations _______ days off across the team.',
            acceptableAnswers: ['stagger', 'staggered'],
            explanation:
              'The fifth paragraph says some organisations "responded by staggering days off across the team." The base word is "stagger" (the form "staggered" is also accepted).',
          },
          {
            id: 'rd-gen-004-p3-q36',
            type: 'mcq',
            prompt:
              'Why do most successful schemes reduce total hours rather than just rearranging them?',
            options: [
              'Because the law requires a cut in total hours',
              'Because compressing the same hours into fewer days leaves staff just as tired',
              'Because longer days are cheaper for the company',
              'Because customers prefer shorter opening hours',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph explains that compressing the same hours "into fewer, longer days leaves staff just as tired as before — which is why most successful schemes reduce total hours." Option B is correct.',
          },
          {
            id: 'rd-gen-004-p3-q37',
            type: 'tfng',
            prompt:
              'Critics believe the companies that volunteer for these trials are typical of all businesses.',
            answer: 'false',
            explanation:
              'The sixth paragraph says critics warn "that the firms willing to take part in such experiments are unlikely to be typical." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-gen-004-p3-q38',
            type: 'mcq',
            prompt: 'What concern about fairness do critics raise?',
            options: [
              'That older workers would be excluded from the policy',
              'That a policy suiting desk-based professionals may do little for lower-paid jobs',
              'That part-time staff would lose their existing days off',
              'That the policy would cost the government too much money',
            ],
            correctIndex: 1,
            explanation:
              'The sixth paragraph raises "the question of fairness: a policy that suits desk-based professionals may do little for those in lower-paid jobs that cannot easily be reorganised." Option B matches this concern.',
          },
          {
            id: 'rd-gen-004-p3-q39',
            type: 'tfng',
            prompt: 'The article predicts that the four-day week will soon be standard everywhere.',
            answer: 'false',
            explanation:
              'The final paragraph states "Few expect the four-day week to become universal in the near future." The article does not predict it will soon be standard everywhere, so the statement is False.',
          },
          {
            id: 'rd-gen-004-p3-q40',
            type: 'mcq',
            prompt: 'What is the writer’s main conclusion in the final paragraph?',
            options: [
              'The four-day week has already failed and will be abandoned',
              'The interest of serious companies marks a shift in how we think about work',
              'Younger workers care little about their working hours',
              'Employers have lost interest in offering new benefits',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph says that the willingness of serious companies to test the idea "marks a shift in how we think about work." Option B captures the writer’s conclusion; the passage also notes younger workers want it and employers are taking note, ruling out C and D.',
          },
        ],
      },
    ],
  },
]
