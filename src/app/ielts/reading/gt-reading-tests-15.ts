// ─── IELTS General Training (GT) Reading - practice item bank (Set 15) ──────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary/note completion, and Matching). Framed as "IELTS
// preparation" only - no official affiliation is implied. General Training.
//
// GT Reading draws on EVERYDAY / SOCIAL texts (notices, timetables, advertise-
// ments, instructions) and WORKPLACE texts (handbooks, policies, programmes),
// plus one longer general-interest article. This file ships ONE complete,
// carefully-checked GT test scaled to a full sitting (~40 marks):
//   • Section 1 - a notice for a community swimming pool gala and open day, plus
//     a short guide to the five poolside facilities on offer. Includes a
//     Matching (features) question worth 5 marks asking which facility each
//     statement describes; options may be reused.
//   • Section 2 - a workplace extract from a company remote-working / work-from-
//     home policy, covering eligibility, equipment, working hours and security.
//   • Section 3 - a general-interest article on the benefits of gardening.
//     Includes a Matching (headings) question covering paragraphs B-F with two
//     distractor headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-015-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_15: ReadingTest[] = [
  {
    id: 'rd-general-015',
    title: 'General Training Reading - Practice Test 15',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - swimming pool gala notice + poolside
      // facilities. A Matching (features) question (5 marks) asks which of the
      // five facilities each statement describes; options may be reused.
      {
        id: 'rd-gen-015-p1',
        title: 'Riverside Community Pool: Summer Gala & Open Day Notice',
        body: `PART 1 - RIVERSIDE COMMUNITY POOL: SUMMER GALA & OPEN DAY

To mark the reopening of the main pool after its refit, Riverside Community Pool invites everyone to a free Summer Gala and Open Day on Saturday the fourteenth of June. The day runs from 9 a.m. to 4 p.m. and is suitable for all ages. The pool sits on Weir Lane, next to the river footbridge, and is ten minutes on foot from the railway station.

ENTRY AND PARKING
Entry on the day is free, but you must collect a wristband from the front desk before you go through to the changing rooms; this lets us keep track of how many people are in the building at once. The car park on Weir Lane has only forty spaces and fills quickly, so please come by bus or on foot if you can. Blue Badge holders may use the four reserved bays beside the main doors.

WHAT TO BRING
Please bring your own towel, as we are not lending them out on the day. Swimming caps are required in the main pool and may be bought at the desk for a pound if you do not have one. Lockers take a returnable one-pound coin, so bring a coin rather than a note. Goggles are recommended but not compulsory. We ask that you leave any valuables at home where possible.

THE PROGRAMME
The morning is given over to family swimming and a series of taster lessons. From 1 p.m. there is a fun gala of friendly races, which anyone may enter on the day by adding their name to the list at the desk before noon. A qualified lifeguard is on duty at all times, and children under eight must be kept within arm's reach of an adult in the water.

PART 2 - POOLSIDE FACILITIES AT RIVERSIDE

Beyond the main pool, Riverside offers five facilities on the day. Each is described below.

FACILITY 1 - The Learner Pool
A shallow, warmer pool for young children and beginners, no deeper than the waist of an adult. A parent or carer must stay in the water with any child under five, and floats are provided free at the side. This pool is closed during the afternoon races so that lessons can continue undisturbed.

FACILITY 2 - The Steam Room
A heated room for relaxing after a swim, open only to those aged sixteen and over. Sessions last twenty minutes and a member of staff will ask you to leave once your time is up, as the room holds only eight people. You must shower before entering and wear the wristband at all times.

FACILITY 3 - The Poolside Cafe
A small cafe selling hot drinks, sandwiches and snacks throughout the day. It does not take cards, so please bring cash. Food and drink must not be carried onto the poolside or into the changing rooms; there are tables set aside for eating beside the window.

FACILITY 4 - The Equipment Store
A counter where you may borrow floats, kickboards and woggles at no charge. You leave your wristband as a deposit and collect it again when you return the equipment. Nothing may be taken out of the building, and any damage should be reported to the staff member on the counter.

FACILITY 5 - The First Aid Room
A staffed room near the main doors for anyone who feels unwell or has a minor injury. A trained first aider is present for the whole day, and a lost-property box is also kept here. If you lose a child, come to this room first, as any child found alone is brought straight here.`,
        questions: [
          {
            id: 'rd-gen-015-p1-q1',
            type: 'tfng',
            prompt: 'Visitors must pay an entry fee on the Open Day.',
            answer: 'false',
            explanation:
              'The Entry and Parking section states "Entry on the day is free." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p1-q2',
            type: 'tfng',
            prompt: 'Towels are available to borrow at the pool on the day of the gala.',
            answer: 'false',
            explanation:
              'The What to Bring section says "bring your own towel, as we are not lending them out on the day." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p1-q3',
            type: 'tfng',
            prompt: 'Swimming caps must be worn in the main pool.',
            answer: 'true',
            explanation:
              'The What to Bring section says "Swimming caps are required in the main pool." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-015-p1-q4',
            type: 'tfng',
            prompt: 'People who wish to race must sign up the day before the gala.',
            answer: 'false',
            explanation:
              'The Programme says anyone may enter "on the day by adding their name to the list at the desk before noon," not the day before. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p1-q5',
            type: 'mcq',
            prompt:
              'What must a visitor collect from the front desk before using the changing rooms?',
            options: ['A locker key', 'A wristband', 'A swimming cap', 'A parking permit'],
            correctIndex: 1,
            explanation:
              'The Entry and Parking section says "you must collect a wristband from the front desk before you go through to the changing rooms." Option B is correct.',
          },
          {
            id: 'rd-gen-015-p1-q6',
            type: 'mcq',
            prompt: 'How are visitors advised to travel to the pool?',
            options: [
              'By car, as the car park is large',
              'By bus or on foot, as parking is limited',
              'By taxi to the reserved bays',
              'By bicycle, which may be left at the desk',
            ],
            correctIndex: 1,
            explanation:
              'The notice says the car park "has only forty spaces and fills quickly, so please come by bus or on foot if you can." Option B matches.',
          },
          {
            id: 'rd-gen-015-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: The car park on Weir Lane has only _______ spaces.',
            acceptableAnswers: ['forty', '40'],
            explanation:
              'The Entry and Parking section states "The car park on Weir Lane has only forty spaces." The answer is "forty" (the number 40 is also accepted).',
          },
          {
            id: 'rd-gen-015-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: To enter the friendly races, add your name to the list at the desk before _______.',
            acceptableAnswers: ['noon', 'midday'],
            explanation:
              'The Programme says anyone may enter "by adding their name to the list at the desk before noon." The answer is "noon" (midday is also accepted).',
          },
          {
            id: 'rd-gen-015-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the five poolside facilities, 1-5. For each statement below, choose the facility it describes. Write the correct number, 1-5. (Each facility may be chosen more than once.)',
            options: [
              { key: '1', label: 'Facility 1 - The Learner Pool' },
              { key: '2', label: 'Facility 2 - The Steam Room' },
              { key: '3', label: 'Facility 3 - The Poolside Cafe' },
              { key: '4', label: 'Facility 4 - The Equipment Store' },
              { key: '5', label: 'Facility 5 - The First Aid Room' },
            ],
            items: [
              {
                id: 'feat1',
                text: 'It is the place to go first if you lose a child.',
                answer: '5',
              },
              {
                id: 'feat2',
                text: 'It can be used only by people aged sixteen or older.',
                answer: '2',
              },
              {
                id: 'feat3',
                text: 'You leave your wristband here as a deposit.',
                answer: '4',
              },
              {
                id: 'feat4',
                text: 'It accepts payment in cash only.',
                answer: '3',
              },
              {
                id: 'feat5',
                text: 'It closes during the afternoon so that lessons can go on.',
                answer: '1',
              },
            ],
            explanation:
              'feat1: The First Aid Room (Facility 5) is where to "come... first" if you lose a child. feat2: The Steam Room (Facility 2) is "open only to those aged sixteen and over." feat3: The Equipment Store (Facility 4) is where "You leave your wristband as a deposit." feat4: The Poolside Cafe (Facility 3) "does not take cards, so please bring cash." feat5: The Learner Pool (Facility 1) "is closed during the afternoon races so that lessons can continue."',
          },
        ],
      },
      // ── Section 2: WORKPLACE - remote-working / work-from-home policy ────────
      {
        id: 'rd-gen-015-p2',
        title: 'Remote Working Policy - Working From Home',
        body: `This extract from the company's Remote Working Policy sets out the rules for staff who work from home for part or all of the week. It should be read alongside your contract and the staff handbook. If anything is unclear, speak to your line manager before you begin a remote-working arrangement.

WHO CAN WORK REMOTELY
Remote working is not an automatic right; it is agreed role by role. To be eligible, you must have completed your probation period and your role must be one that can be carried out away from the office. Staff whose work depends on equipment that stays on site, or who must deal with the public in person, are not normally eligible. All arrangements are reviewed after three months and may be changed if they are not working well for the team.

EQUIPMENT AND EXPENSES
The company provides a laptop and, where needed, a headset for remote work; these remain company property and must be returned when you leave or when the arrangement ends. You may not install your own software on a company laptop without approval from the IT team. The company does not pay for your home broadband or for heating and lighting, but it will supply a basic office chair on request if your role involves long periods at a desk. Report any fault with company equipment to the IT helpdesk on the same day.

WORKING HOURS AND AVAILABILITY
Your hours when working remotely are the same as in the office. You must be reachable during the core hours of 10 a.m. to 4 p.m. and should keep your online calendar up to date so colleagues can see when you are available. Take your normal breaks, and log off at the end of the day rather than letting work spill into the evening. If you need to step away for more than thirty minutes during core hours, let your team know first.

KEEPING INFORMATION SECURE
Protecting company and customer information is your responsibility wherever you work. Always connect through the company's secure network before opening any work files, and lock your screen whenever you leave your desk, even at home. Do not let family members or housemates use your work laptop, and do not print confidential documents at home unless you have agreed how they will be stored and destroyed. Any lost or stolen device, or any suspected security breach, must be reported to the IT helpdesk at once, however late the hour.`,
        questions: [
          {
            id: 'rd-gen-015-p2-q10',
            type: 'mcq',
            prompt: 'What is one condition an employee must meet to be eligible to work remotely?',
            options: [
              'They must have worked for the company for five years',
              'They must have completed their probation period',
              'They must deal with the public in person',
              'They must supply their own laptop',
            ],
            correctIndex: 1,
            explanation:
              'The Who Can Work Remotely section says "you must have completed your probation period" to be eligible. Option B matches.',
          },
          {
            id: 'rd-gen-015-p2-q11',
            type: 'mcq',
            prompt: 'What does the policy say about installing software on a company laptop?',
            options: [
              'It is allowed at any time',
              'It needs approval from the IT team',
              "It is the line manager's decision alone",
              'It is never permitted under any circumstances',
            ],
            correctIndex: 1,
            explanation:
              'The Equipment and Expenses section says "You may not install your own software on a company laptop without approval from the IT team." Option B matches.',
          },
          {
            id: 'rd-gen-015-p2-q12',
            type: 'mcq',
            prompt: 'What must an employee do before opening any work files at home?',
            options: [
              'Print a copy of each file',
              "Connect through the company's secure network",
              'Ask a housemate to check the laptop',
              'Switch off their home broadband',
            ],
            correctIndex: 1,
            explanation:
              'The Keeping Information Secure section says "Always connect through the company\'s secure network before opening any work files." Option B matches.',
          },
          {
            id: 'rd-gen-015-p2-q13',
            type: 'tfng',
            prompt: "The company pays for the employee's home broadband.",
            answer: 'false',
            explanation:
              'The Equipment and Expenses section says "The company does not pay for your home broadband." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p2-q14',
            type: 'tfng',
            prompt: 'Remote-working arrangements are reviewed after three months.',
            answer: 'true',
            explanation:
              'The Who Can Work Remotely section says "All arrangements are reviewed after three months." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-015-p2-q15',
            type: 'tfng',
            prompt: 'Employees working from home keep different hours from those in the office.',
            answer: 'false',
            explanation:
              'The Working Hours section says "Your hours when working remotely are the same as in the office." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p2-q16',
            type: 'tfng',
            prompt: "Family members are allowed to use the employee's work laptop.",
            answer: 'false',
            explanation:
              'The Keeping Information Secure section says "Do not let family members or housemates use your work laptop." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: When working remotely, you must be reachable during the _______ of 10 a.m. to 4 p.m.',
            acceptableAnswers: ['core hours'],
            explanation:
              'The Working Hours section says "You must be reachable during the core hours of 10 a.m. to 4 p.m." The missing words are "core hours".',
          },
          {
            id: 'rd-gen-015-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: If you need to step away for more than _______ minutes during core hours, let your team know first.',
            acceptableAnswers: ['thirty', '30'],
            explanation:
              'The Working Hours section says "If you need to step away for more than thirty minutes during core hours, let your team know first." The answer is "thirty" (the number 30 is also accepted).',
          },
          {
            id: 'rd-gen-015-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Report any fault with company equipment to the _______ on the same day.',
            acceptableAnswers: ['IT helpdesk'],
            explanation:
              'The Equipment and Expenses section says "Report any fault with company equipment to the IT helpdesk on the same day." The missing words are "IT helpdesk".',
          },
          {
            id: 'rd-gen-015-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: You should lock your _______ whenever you leave your desk, even at home.',
            acceptableAnswers: ['screen'],
            explanation:
              'The Keeping Information Secure section says "lock your screen whenever you leave your desk, even at home." The missing word is "screen".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - the benefits of gardening ──────
      // Six labelled paragraphs (A-F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B-F and is worth 5 marks.
      {
        id: 'rd-gen-015-p3',
        title: 'Down to Earth: Why Gardening Does Us Good',
        body: `Paragraph A
For something so ordinary, a garden asks a great deal of us and gives back even more. Millions of people spend their spare hours digging, sowing, weeding and watering, often without quite knowing why they are drawn to it. They will say it relaxes them, or that they like to grow their own food, and both answers are true. Yet a growing body of evidence suggests that the rewards of tending a patch of ground reach further than a fine crop of beans: gardening appears to be good for the body, the mind and the world beyond the fence.

Paragraph B
The physical side is the most obvious. Gardening is gentle, steady exercise of the kind that doctors are forever urging on us, and an hour of digging or mowing burns as many calories as a brisk walk. Because the work is varied, it stretches and strengthens a wide range of muscles, and because it is enjoyable, people keep it up long after they would have abandoned a treadmill. For older gardeners in particular, the bending, lifting and reaching help to keep joints supple and balance steady, which in turn lowers the risk of falls.

Paragraph C
Less visible, but just as real, are the rewards for the mind. Time spent among plants has been shown to lower stress and lift low spirits, and many people describe gardening as a kind of meditation, a task absorbing enough to quiet a busy head. There is also a particular satisfaction in patience rewarded: you plant a seed, you wait, and weeks later something appears that was not there before. For people recovering from illness or loss, that simple proof that life goes on can matter more than any medicine.

Paragraph D
The good a garden does is not confined to the gardener. A planted plot, however small, is a haven for wildlife in a way that paving and decking can never be. Flowers feed the bees and butterflies whose numbers have fallen so sharply, while a hedge or a small tree gives shelter to birds and a home to countless insects. A pond, even a washing-up bowl sunk into the soil, will draw frogs within a season. Taken together, the gardens of a single street form a green corridor that lets creatures move and feed across a town.

Paragraph E
Beginners often hold back for fear of doing it wrong, but gardening is far more forgiving than they imagine. The surest way to start is small: a few pots on a windowsill, or a single raised bed, will teach you more than a whole plot left to run wild. Choose plants suited to your soil and the light you have rather than the ones in the glossy pictures, and do not be discouraged by the things that fail, for every gardener kills plants and learns from each one. A trowel, a watering can and a packet of seeds are enough to begin.

Paragraph F
Perhaps the deepest reward is the one hardest to measure. A garden ties us to the turning of the year in a way that little else in modern life does, marking the seasons in buds and berries rather than dates on a screen. It teaches a slower kind of attention and rewards those willing to wait. Whether it is a country acre or a single tomato plant on a balcony, the act of coaxing something to grow connects us to the soil, to the weather and to a long line of people who have done the same. That, in the end, may be why we keep coming back to it.`,
        questions: [
          {
            id: 'rd-gen-015-p3-q21',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. A gift to nature beyond the gardener' },
              { key: 'ii', label: 'ii. The high cost of garden tools' },
              { key: 'iii', label: 'iii. Simple advice for those just starting out' },
              { key: 'iv', label: 'iv. Good for the body as well as the spirit' },
              { key: 'v', label: 'v. A deeper bond with the seasons and the soil' },
              { key: 'vi', label: 'vi. How gardening eases the mind' },
              { key: 'vii', label: 'vii. The best plants to sell for profit' },
            ],
            items: [
              { id: 'para-b', text: 'Paragraph B', answer: 'iv' },
              { id: 'para-c', text: 'Paragraph C', answer: 'vi' },
              { id: 'para-d', text: 'Paragraph D', answer: 'i' },
              { id: 'para-e', text: 'Paragraph E', answer: 'iii' },
              { id: 'para-f', text: 'Paragraph F', answer: 'v' },
            ],
            explanation:
              'Paragraph B covers "The physical side" and gentle exercise - heading iv (good for the body). Paragraph C describes "rewards for the mind" and gardening as meditation - heading vi (eases the mind). Paragraph D says the good "is not confined to the gardener" and helps wildlife - heading i (a gift to nature). Paragraph E gives advice to "Beginners" on starting small - heading iii (advice for those starting out). Paragraph F speaks of being tied "to the turning of the year" and to the soil - heading v. Headings ii (the high cost of garden tools) and vii (the best plants to sell for profit) are distractors that are not used.',
          },
          {
            id: 'rd-gen-015-p3-q22',
            type: 'mcq',
            prompt: 'According to Paragraph A, what does the evidence suggest about gardening?',
            options: [
              'It is good for the body, the mind and the wider world',
              'It is only worthwhile for growing food',
              'It is too demanding for most people',
              'It offers no rewards beyond a good crop',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph A says "gardening appears to be good for the body, the mind and the world beyond the fence." Option A matches.',
          },
          {
            id: 'rd-gen-015-p3-q23',
            type: 'mcq',
            prompt:
              'According to Paragraph B, why do people keep gardening when they would give up a treadmill?',
            options: [
              'Because it is faster exercise',
              'Because the work is varied and enjoyable',
              'Because it requires no movement',
              'Because a doctor stands over them',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says "because it is enjoyable, people keep it up long after they would have abandoned a treadmill," and that the work is varied. Option B matches.',
          },
          {
            id: 'rd-gen-015-p3-q24',
            type: 'mcq',
            prompt: 'How does Paragraph C say many people describe gardening?',
            options: [
              'As a competitive sport',
              'As a tiring chore',
              'As a kind of meditation',
              'As a waste of time',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C says "many people describe gardening as a kind of meditation, a task absorbing enough to quiet a busy head." Option C matches.',
          },
          {
            id: 'rd-gen-015-p3-q25',
            type: 'mcq',
            prompt: 'What does Paragraph E recommend as the surest way to start gardening?',
            options: [
              'Taking on a whole plot at once',
              'Starting small, with a few pots or a single raised bed',
              'Choosing the plants shown in glossy pictures',
              'Avoiding any plant that might fail',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says "The surest way to start is small: a few pots on a windowsill, or a single raised bed." Option B matches.',
          },
          {
            id: 'rd-gen-015-p3-q26',
            type: 'tfng',
            prompt: 'An hour of digging or mowing burns about as many calories as a brisk walk.',
            answer: 'true',
            explanation:
              'Paragraph B says "an hour of digging or mowing burns as many calories as a brisk walk." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-015-p3-q27',
            type: 'tfng',
            prompt:
              'Gardening is said to be especially helpful for people recovering from illness or loss.',
            answer: 'true',
            explanation:
              'Paragraph C says that for "people recovering from illness or loss," the proof that life goes on "can matter more than any medicine." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-015-p3-q28',
            type: 'tfng',
            prompt:
              'The article states that organic vegetables taste better than shop-bought ones.',
            answer: 'not-given',
            explanation:
              'The article discusses growing food but never compares the taste of home-grown produce with shop-bought produce. The answer is Not Given.',
          },
          {
            id: 'rd-gen-015-p3-q29',
            type: 'tfng',
            prompt:
              'According to the article, paving and decking support wildlife just as well as a planted plot.',
            answer: 'false',
            explanation:
              'Paragraph D says a planted plot is a haven for wildlife "in a way that paving and decking can never be." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-015-p3-q30b',
            type: 'tfng',
            prompt: 'Paragraph E says that every gardener kills plants and learns from doing so.',
            answer: 'true',
            explanation:
              'Paragraph E says "every gardener kills plants and learns from each one." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-015-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Time spent among plants has been shown to lower _______ and lift low spirits.',
            acceptableAnswers: ['stress'],
            explanation:
              'Paragraph C says time among plants "has been shown to lower stress and lift low spirits." The missing word is "stress".',
          },
          {
            id: 'rd-gen-015-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A pond will draw _______ within a season.',
            acceptableAnswers: ['frogs'],
            explanation:
              'Paragraph D says a pond "will draw frogs within a season." The missing word is "frogs".',
          },
        ],
      },
    ],
  },
]
