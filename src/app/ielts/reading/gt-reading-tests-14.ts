// ─── IELTS General Training (GT) Reading - practice item bank (Set 14) ──────
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
//   • Section 1 - a visitor notice for a city museum & art gallery (opening
//     hours, ticket prices, guided tours, photography rules, facilities).
//     Includes a Matching (features) question worth 5 marks asking which
//     facility each statement describes; options may be reused.
//   • Section 2 - an extract from a company dress-code & workplace-conduct
//     policy (appropriate clothing, ID badges, behaviour, exceptions).
//   • Section 3 - a general-interest article on the benefits of cycling to
//     work. Includes a Matching (headings) question covering paragraphs B-F
//     with two distractor headings, worth 5 marks.
// Each objective item is worth ONE mark; matching items score one mark each,
// giving 40 marks in total. Every answer is verifiable from the text and every
// item carries an explanation. All ids are unique ('rd-gen-014-…').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_14: ReadingTest[] = [
  {
    id: 'rd-general-014',
    title: 'General Training Reading - Practice Test 14',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - city museum & gallery visitor notice.
      // A Matching (features) question (5 marks) asks which of the five visitor
      // facilities each statement describes; options may be reused.
      {
        id: 'rd-gen-014-p1',
        title: 'Riverbank Museum & Art Gallery: Visitor Notice & Facilities Guide',
        body: `PART 1 - RIVERBANK MUSEUM & ART GALLERY: VISITOR NOTICE

Welcome to the Riverbank Museum & Art Gallery, the city's home for art, local history and natural science. The museum sits on the south bank of the river, two minutes from the Bridge Street tram stop. We do not have a visitor car park; the nearest one is the multi-storey on Quay Lane, which is a five-minute walk away and is half price for museum members.

OPENING HOURS
The museum is open from 10 a.m. to 5 p.m. from Tuesday to Saturday, and from 11 a.m. to 4 p.m. on Sunday. We are closed all day on Monday so that staff can rotate the displays and carry out cleaning. The building also closes on the twenty-fourth, twenty-fifth and twenty-sixth of December. Last entry is always thirty minutes before closing, and the upper galleries are cleared fifteen minutes before the doors close.

TICKETS
Entry to the permanent collection is free for everyone. The temporary exhibition in the East Wing, however, requires a ticket: this costs eight pounds for an adult and five pounds for a child aged five to fifteen. Children under five enter the exhibition free of charge. A family ticket, covering two adults and up to three children, costs twenty pounds. Tickets bought online carry no booking fee and let you skip the queue at the desk.

GUIDED TOURS
A free guided tour of the permanent collection leaves the main hall at 11 a.m. and 2 p.m. every day the museum is open. Each tour lasts about one hour and takes no more than fifteen people, so sign up at the welcome desk on arrival. A separate, ticketed tour of the East Wing exhibition runs at 3 p.m. on Saturdays only and must be booked in advance.

PHOTOGRAPHY
You are welcome to take photographs for your own personal use throughout the permanent collection, but the flash must be switched off, as the light can damage delicate items. Tripods and selfie sticks are not allowed anywhere in the building. Photography of any kind is forbidden in the East Wing temporary exhibition, where many works are on loan from private owners.

PART 2 - FACILITIES AT THE RIVERBANK MUSEUM

The museum offers five visitor facilities in addition to its galleries. Each is described below.

FACILITY 1 - The Riverside Café
On the ground floor, overlooking the water, the café serves hot meals, sandwiches and cakes from 10 a.m. until 4.30 p.m. You do not need a ticket to use it, and it can be reached from the street without entering the galleries. Tables cannot be reserved except for groups of ten or more.

FACILITY 2 - The Cloakroom
A free, staffed cloakroom beside the main entrance where you must leave large bags, umbrellas and rucksacks before entering the galleries. Items are tagged and returned against your ticket. Money and valuables should be kept with you, as the museum cannot accept responsibility for them.

FACILITY 3 - The Family Activity Room
A supervised room on the first floor with craft tables and dressing-up costumes for under-tens. It is open at weekends and during school holidays only. An adult must stay in the room with their child at all times, and a small charge of two pounds per child applies.

FACILITY 4 - The Museum Shop
A shop near the exit selling books, prints, gifts and postcards inspired by the collection. It is open during normal museum hours and for one extra hour on the first Thursday of each month, when the museum hosts a late evening event. Purchases over fifty pounds may be posted to your home for a small fee.

FACILITY 5 - The Reading Library
A quiet reference library of art and local-history books on the second floor. Books may be read at the tables but may not be borrowed or removed from the room. Silence must be kept, and you must sign the visitors' register before a member of staff brings out any rare item.`,
        questions: [
          {
            id: 'rd-gen-014-p1-q1',
            type: 'tfng',
            prompt: 'The museum has its own car park for visitors.',
            answer: 'false',
            explanation:
              'The visitor notice states "We do not have a visitor car park," directing visitors to the multi-storey on Quay Lane. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-014-p1-q2',
            type: 'tfng',
            prompt: 'The museum is open on Mondays.',
            answer: 'false',
            explanation:
              'The Opening Hours section says "We are closed all day on Monday." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-014-p1-q3',
            type: 'tfng',
            prompt: 'There is no charge to enter the permanent collection.',
            answer: 'true',
            explanation:
              'The Tickets section says "Entry to the permanent collection is free for everyone." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-014-p1-q4',
            type: 'tfng',
            prompt: 'Visitors may use a tripod when photographing the permanent collection.',
            answer: 'false',
            explanation:
              'The Photography section says "Tripods and selfie sticks are not allowed anywhere in the building." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-014-p1-q5',
            type: 'mcq',
            prompt:
              'How much does a child aged five to fifteen pay to enter the East Wing exhibition?',
            options: ['Nothing', 'Five pounds', 'Eight pounds', 'Twenty pounds'],
            correctIndex: 1,
            explanation:
              'The Tickets section says the exhibition "costs eight pounds for an adult and five pounds for a child aged five to fifteen." Option B is correct.',
          },
          {
            id: 'rd-gen-014-p1-q6',
            type: 'mcq',
            prompt: 'What is one advantage of buying exhibition tickets online?',
            options: [
              'They are cheaper than tickets bought at the desk',
              'They allow you to skip the queue at the desk',
              'They include a free guided tour of the East Wing',
              'They can be used on a Monday',
            ],
            correctIndex: 1,
            explanation:
              'The Tickets section says online tickets "carry no booking fee and let you skip the queue at the desk." Option B matches; no price reduction is stated.',
          },
          {
            id: 'rd-gen-014-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Last entry is always _______ minutes before closing.',
            acceptableAnswers: ['thirty', '30'],
            explanation:
              'The Opening Hours section states "Last entry is always thirty minutes before closing." The answer is "thirty" (the number 30 is also accepted).',
          },
          {
            id: 'rd-gen-014-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Each free guided tour takes no more than _______ people.',
            acceptableAnswers: ['fifteen', '15'],
            explanation:
              'The Guided Tours section says each tour "takes no more than fifteen people." The answer is "fifteen" (the number 15 is also accepted).',
          },
          {
            id: 'rd-gen-014-p1-q9',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the five museum facilities, 1-5. For each statement below, choose the facility it describes. Write the correct number, 1-5. (Each facility may be chosen more than once.)',
            options: [
              { key: '1', label: 'Facility 1 - The Riverside Café' },
              { key: '2', label: 'Facility 2 - The Cloakroom' },
              { key: '3', label: 'Facility 3 - The Family Activity Room' },
              { key: '4', label: 'Facility 4 - The Museum Shop' },
              { key: '5', label: 'Facility 5 - The Reading Library' },
            ],
            items: [
              {
                id: 'i1',
                text: 'A small charge is made for each child who takes part.',
                answer: '3',
              },
              {
                id: 'i2',
                text: 'Its contents may be used on the spot but never taken away.',
                answer: '5',
              },
              {
                id: 'i3',
                text: 'It stays open later on the first Thursday of the month.',
                answer: '4',
              },
              {
                id: 'i4',
                text: 'You can reach it from the street without entering the galleries.',
                answer: '1',
              },
              {
                id: 'i5',
                text: 'You must hand over large bags here before going in.',
                answer: '2',
              },
            ],
            explanation:
              'i1: Facility 3 (Family Activity Room) charges "two pounds per child." i2: Facility 5 (Reading Library) books "may be read at the tables but may not be borrowed or removed from the room." i3: Facility 4 (Museum Shop) opens "for one extra hour on the first Thursday of each month." i4: Facility 1 (Riverside Café) "can be reached from the street without entering the galleries." i5: Facility 2 (Cloakroom) is where "you must leave large bags, umbrellas and rucksacks before entering the galleries."',
          },
        ],
      },
      // ── Section 2: WORKPLACE - dress-code & workplace-conduct policy ─────────
      {
        id: 'rd-gen-014-p2',
        title: 'Staff Dress Code & Workplace Conduct Policy',
        body: `This extract from the staff handbook sets out the company's dress code and the standards of conduct expected of everyone at work. It applies to all employees, including those on temporary contracts. A full copy is held on the staff portal, and any questions should be raised with your line manager rather than left unanswered.

APPROPRIATE CLOTHING
The company has a "smart casual" dress code on ordinary working days. This means clean, tidy clothing such as trousers or a skirt with a collared shirt, blouse or smart top; it does not mean sportswear, beachwear or clothing with large slogans. On Fridays staff may dress more casually and may wear jeans, provided they are neat and undamaged. When you are meeting clients or representing the company outside the building, business dress is required: a suit or equivalent formal outfit, regardless of the day of the week. Footwear must be clean and safe; open-toed sandals are not permitted in the warehouse for safety reasons.

IDENTIFICATION BADGES
Every employee is issued with a photographic identification badge on their first day. You must wear it, clearly visible, at all times while on company premises, and you must show it to security on request. Do not lend your badge to anyone else or use it to admit a visitor through a staff-only door. If your badge is lost or stolen, report it to the security office the same day so that it can be cancelled; the first replacement is free, but a charge applies for any badge replaced after that.

BEHAVIOUR AT WORK
We expect every member of staff to treat colleagues, customers and visitors with courtesy and respect. Bullying, harassment and discrimination of any kind will be treated as serious misconduct and may lead to dismissal. Personal mobile phones should be kept on silent and used for personal calls only during breaks. Eating is permitted in the staff kitchen and at your desk, but not on the shop floor or in meetings with clients. Tidy your own workspace and shared areas before you leave each day.

EXCEPTIONS AND ADJUSTMENTS
The company recognises that a single rule cannot fit everyone. Clothing or headwear worn for religious or cultural reasons is always respected and falls outside the ordinary dress code. Where a medical condition or disability makes part of the code difficult to follow, staff should speak to the human resources team, who will agree a reasonable adjustment in confidence. Requests of this kind are welcomed, not questioned, and managers must not treat anyone less favourably for making one.`,
        questions: [
          {
            id: 'rd-gen-014-p2-q10',
            type: 'mcq',
            prompt: 'What does the "smart casual" dress code allow on an ordinary working day?',
            options: [
              'Sportswear, as long as it is clean',
              'Trousers or a skirt with a collared shirt, blouse or smart top',
              'Clothing with large slogans',
              'Beachwear in warm weather',
            ],
            correctIndex: 1,
            explanation:
              'The Appropriate Clothing section defines smart casual as "trousers or a skirt with a collared shirt, blouse or smart top" and excludes sportswear, beachwear and large slogans. Option B matches.',
          },
          {
            id: 'rd-gen-014-p2-q11',
            type: 'mcq',
            prompt: 'What should an employee do if their identification badge is lost or stolen?',
            options: [
              'Wait until the next working week to report it',
              'Borrow a colleague’s badge in the meantime',
              'Report it to the security office the same day',
              'Pay a charge before a first replacement is issued',
            ],
            correctIndex: 2,
            explanation:
              'The Identification Badges section says to "report it to the security office the same day so that it can be cancelled." Option C matches; the first replacement is free.',
          },
          {
            id: 'rd-gen-014-p2-q12',
            type: 'mcq',
            prompt: 'Where are employees permitted to eat?',
            options: [
              'On the shop floor',
              'In meetings with clients',
              'In the staff kitchen and at their desk',
              'Anywhere on company premises',
            ],
            correctIndex: 2,
            explanation:
              'The Behaviour at Work section says eating "is permitted in the staff kitchen and at your desk, but not on the shop floor or in meetings with clients." Option C matches.',
          },
          {
            id: 'rd-gen-014-p2-q13',
            type: 'tfng',
            prompt: 'Staff may wear jeans on Fridays if the jeans are neat and undamaged.',
            answer: 'true',
            explanation:
              'The Appropriate Clothing section says "On Fridays staff may dress more casually and may wear jeans, provided they are neat and undamaged." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-014-p2-q14',
            type: 'tfng',
            prompt:
              'Business dress is required when staff meet clients, whatever day of the week it is.',
            answer: 'true',
            explanation:
              'The Appropriate Clothing section says when "meeting clients or representing the company outside the building, business dress is required... regardless of the day of the week." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-014-p2-q15',
            type: 'tfng',
            prompt:
              'Employees are allowed to use their badge to let a visitor through a staff-only door.',
            answer: 'false',
            explanation:
              'The Identification Badges section says "Do not... use it to admit a visitor through a staff-only door." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-014-p2-q16',
            type: 'tfng',
            prompt: 'The policy states how many days of paid leave staff receive each year.',
            answer: 'not-given',
            explanation:
              'The extract covers clothing, badges, behaviour and adjustments, but says nothing about annual paid leave entitlement. The answer is Not Given.',
          },
          {
            id: 'rd-gen-014-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the text: Personal mobile phones should be kept on _______ and used for personal calls only during breaks.',
            acceptableAnswers: ['silent'],
            explanation:
              'The Behaviour at Work section says phones "should be kept on silent and used for personal calls only during breaks." The missing word is "silent".',
          },
          {
            id: 'rd-gen-014-p2-q18',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Open-toed sandals are not permitted in the _______ for safety reasons.',
            acceptableAnswers: ['warehouse'],
            explanation:
              'The Appropriate Clothing section says "open-toed sandals are not permitted in the warehouse for safety reasons." The missing word is "warehouse". (One word fills the gap; up to two words are accepted.)',
          },
          {
            id: 'rd-gen-014-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Where a medical condition makes part of the code hard to follow, staff should speak to the _______ team.',
            acceptableAnswers: ['human resources'],
            explanation:
              'The Exceptions and Adjustments section says staff "should speak to the human resources team, who will agree a reasonable adjustment." The missing words are "human resources".',
          },
          {
            id: 'rd-gen-014-p2-q20',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the text: Bullying, harassment and discrimination of any kind will be treated as serious _______.',
            acceptableAnswers: ['misconduct'],
            explanation:
              'The Behaviour at Work section says such conduct "will be treated as serious misconduct and may lead to dismissal." The missing word is "misconduct". (One word fills the gap; up to two words are accepted.)',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST - the benefits of cycling to work.
      // Six labelled paragraphs (A-F). A Matching Headings question (with two
      // distractor headings) covers paragraphs B-F and is worth 5 marks.
      {
        id: 'rd-gen-014-p3',
        title: 'On Your Bike: Why More of Us Are Cycling to Work',
        body: `Paragraph A
For much of the last century, the journey to work meant a car, a bus or a packed train carriage. Yet in towns and cities across the country, a quieter change has been taking place at the kerbside. More people than ever are choosing to cycle to work, and they are doing so not out of nostalgia but for a set of very practical reasons. What was once seen as the preserve of the keen amateur has become, for many ordinary commuters, simply the most sensible way to get from home to the office.

Paragraph B
The clearest gains are to the body. Cycling is what doctors call moderate aerobic exercise, the very kind that strengthens the heart and lungs and helps keep weight under control. Because a daily commute is, by definition, repeated five days a week, the rider builds up a steady habit without ever having to set foot in a gym. Studies that have followed cycle commuters over several years report lower rates of heart disease and a longer, healthier life on average. For a busy person who struggles to find time to exercise, turning the daily journey into a workout is an elegant solution.

Paragraph C
Then there is the matter of money, which few commuters can afford to ignore. A bicycle costs a fraction of a car and almost nothing to run: there is no fuel to buy, no road tax, no parking to pay for and far less to spend on repairs. Trains and buses, meanwhile, grow more expensive year after year. Once the bicycle itself is paid for, the daily journey is effectively free, and many riders find that the savings cover the cost of the bike within a single year. Some employers add to this with schemes that let staff buy a bicycle out of their pay before tax, lowering the price further.

Paragraph D
The benefits reach well beyond the individual rider. A bicycle produces no exhaust fumes and takes up a tiny share of the road compared with a car, so every commuter who switches helps to cut both air pollution and congestion. The space a single parked car occupies can hold a dozen bicycles. As cities fill up and clean-air rules tighten, planners increasingly see cycling not as a hobby to be tolerated but as part of the answer to crowded, polluted streets. What is good for the rider, in this case, turns out to be good for everyone who shares the city.

Paragraph E
For those tempted to try, the practical first steps are smaller than they appear. You do not need expensive equipment to begin; a well-maintained second-hand bicycle, a helmet and a set of lights are enough. It is wise to plan a route in advance, favouring quiet roads and marked cycle lanes over busy main roads, and to do a gentle practice run at the weekend before braving the rush hour. Keeping a spare set of clothes at work and learning to mend a punctured tyre will save a good deal of worry. Start with one or two days a week rather than every day, and build up as your confidence grows.

Paragraph F
None of this is to pretend that cycling to work suits everyone or every journey. A very long commute, a complete lack of safe routes, or a job that requires arriving immaculately dressed can all make it impractical, and it would be dishonest to claim otherwise. Bad weather, too, will test the resolve of even the keenest rider. Yet for a great many people the obstacles are smaller than they fear, and the rewards - to health, to the bank balance and to the air we all breathe - are larger than they expect. The hardest part, most converts agree, is simply deciding to begin.`,
        questions: [
          {
            id: 'rd-gen-014-p3-q21',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-vii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. Good for the city, not just the rider' },
              { key: 'ii', label: 'ii. The honest limits of cycling to work' },
              { key: 'iii', label: 'iii. A workout built into the daily journey' },
              { key: 'iv', label: 'iv. The history of the modern bicycle' },
              { key: 'v', label: 'v. Saving money on the commute' },
              { key: 'vi', label: 'vi. How the law treats cyclists' },
              { key: 'vii', label: 'vii. Simple ways to get started' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'iii' },
              { id: 'pC', text: 'Paragraph C', answer: 'v' },
              { id: 'pD', text: 'Paragraph D', answer: 'i' },
              { id: 'pE', text: 'Paragraph E', answer: 'vii' },
              { id: 'pF', text: 'Paragraph F', answer: 'ii' },
            ],
            explanation:
              'Paragraph B presents cycling as "moderate aerobic exercise" that builds a habit "without ever having to set foot in a gym" - heading iii. Paragraph C is about cost: a bicycle "costs a fraction of a car and almost nothing to run" - heading v (saving money). Paragraph D says the benefits "reach well beyond the individual rider," cutting pollution and congestion - heading i (good for the city). Paragraph E gives "practical first steps" such as a route and a practice run - heading vii (getting started). Paragraph F admits cycling does not "suit everyone or every journey" - heading ii (the honest limits). Headings iv (history of the bicycle) and vi (how the law treats cyclists) are distractors that are not used.',
          },
          {
            id: 'rd-gen-014-p3-q22',
            type: 'mcq',
            prompt: 'According to Paragraph A, why are more people cycling to work?',
            options: [
              'Out of nostalgia for the past',
              'For a set of very practical reasons',
              'Because cars have been banned from cities',
              'Because it is required by their employers',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says people cycle "not out of nostalgia but for a set of very practical reasons." Option B matches.',
          },
          {
            id: 'rd-gen-014-p3-q23',
            type: 'mcq',
            prompt:
              'According to Paragraph B, what is one advantage of turning the commute into exercise?',
            options: [
              'It removes the need to ever visit a doctor',
              'It builds a steady habit without going to a gym',
              'It guarantees the rider will lose weight in a week',
              'It replaces the need for any other movement',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says the rider "builds up a steady habit without ever having to set foot in a gym." Option B matches.',
          },
          {
            id: 'rd-gen-014-p3-q24',
            type: 'mcq',
            prompt: 'According to Paragraph C, how do some employers help staff buy a bicycle?',
            options: [
              'By giving every employee a free bicycle',
              'By paying for all repairs to the bicycle',
              'By letting staff buy one out of their pay before tax',
              'By providing free parking for bicycles only',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C says some employers run "schemes that let staff buy a bicycle out of their pay before tax, lowering the price further." Option C matches.',
          },
          {
            id: 'rd-gen-014-p3-q25',
            type: 'mcq',
            prompt:
              'According to Paragraph E, how does the article suggest a beginner should start?',
            options: [
              'By buying the most expensive equipment available',
              'By cycling every day from the very first week',
              'With one or two days a week, building up as confidence grows',
              'By riding on the busiest main roads to gain experience',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph E advises readers to "Start with one or two days a week rather than every day, and build up as your confidence grows." Option C matches.',
          },
          {
            id: 'rd-gen-014-p3-q26',
            type: 'tfng',
            prompt:
              'Cycle commuters have been found to have lower rates of heart disease on average.',
            answer: 'true',
            explanation:
              'Paragraph B says studies following cycle commuters "report lower rates of heart disease and a longer, healthier life on average." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-014-p3-q27',
            type: 'tfng',
            prompt: 'The space taken up by one parked car can hold a dozen bicycles.',
            answer: 'true',
            explanation:
              'Paragraph D says "The space a single parked car occupies can hold a dozen bicycles." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-014-p3-q28',
            type: 'tfng',
            prompt: 'The article says cycling to work is suitable for everyone and every journey.',
            answer: 'false',
            explanation:
              'Paragraph F states plainly that cycling does not "suit everyone or every journey," listing long commutes and unsafe routes. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-014-p3-q29',
            type: 'tfng',
            prompt:
              'The article reports that cycling to work is now more popular among women than men.',
            answer: 'not-given',
            explanation:
              'The article discusses why cycling to work has grown but never compares the numbers of women and men who cycle. The answer is Not Given.',
          },
          {
            id: 'rd-gen-014-p3-q30b',
            type: 'tfng',
            prompt:
              'According to the article, bad weather can test the resolve of even the keenest rider.',
            answer: 'true',
            explanation:
              'Paragraph F says "Bad weather, too, will test the resolve of even the keenest rider." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-014-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Cycling is what doctors call moderate aerobic exercise, which strengthens the heart and _______.',
            acceptableAnswers: ['lungs'],
            explanation:
              'Paragraph B says cycling "strengthens the heart and lungs and helps keep weight under control." The missing word is "lungs".',
          },
          {
            id: 'rd-gen-014-p3-q31',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Most converts agree that the hardest part is simply deciding to _______.',
            acceptableAnswers: ['begin'],
            explanation:
              'Paragraph F says "The hardest part, most converts agree, is simply deciding to begin." The missing word is "begin".',
          },
        ],
      },
    ],
  },
]
