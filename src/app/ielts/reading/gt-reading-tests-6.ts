// ─── IELTS General Training (GT) Reading - practice item bank (Set 6) ───────
// ORIGINAL content written for The English Hub. These passages and questions
// are NOT reproductions of any official IELTS past paper; they are invented
// purely to practise the GT Reading question formats (MCQ, True/False/Not
// Given, sentence/summary completion, and Matching). Framed as "IELTS
// preparation" only - no official affiliation is implied. General Training
// track.
//
// GT Reading follows a graded structure: Section 1 EVERYDAY / SOCIAL texts
// (notices, advertisements, programmes), Section 2 WORKPLACE texts (policies,
// staff handbooks, contracts), and Section 3 a longer GENERAL-INTEREST
// article. This file ships ONE complete, carefully-checked GT test of three
// sections, with topics deliberately distinct from GT Sets 1-5:
//   • Section 1 - a community arts-festival programme + a recycling notice
//   • Section 2 - a new-employee IT & data-protection policy
//   • Section 3 - a general-interest article on community gardens
// It includes TWO Matching questions: a 'features' match in Section 1 (match
// statements to the festival/recycling notices) and a 'headings' match on the
// six-paragraph Section 3 article. Total = 40 marks.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const GT_READING_SET_6: ReadingTest[] = [
  {
    id: 'rd-general-006',
    title: 'General Training Reading - Practice Test 6',
    track: 'general',
    estimatedMinutes: 60,
    passages: [
      // ── Section 1: EVERYDAY / SOCIAL - festival programme + recycling notice ─
      {
        id: 'rd-gen-006-p1',
        title: 'Millbrook Community Arts Festival & Kerbside Recycling Notice',
        body: `Read the festival programme (Notices A-D) and the recycling notice that follows.

MILLBROOK COMMUNITY ARTS FESTIVAL - WEEKEND PROGRAMME

NOTICE A - Saturday Street Market (10.00 a.m. - 4.00 p.m., High Street)
More than forty local makers will sell handmade jewellery, pottery and printed cloth along a closed section of the High Street. Entry is free and no ticket is needed. The market is busiest in the early afternoon, so visitors who prefer a quieter browse are advised to arrive before midday. Please note that, because the street is closed to traffic, the nearest parking is the Mill Lane car park, a seven-minute walk away.

NOTICE B - Family Print Workshop (Saturday, 1.00 p.m. & 3.00 p.m., the Old Library)
In this hands-on session, children aged six and over can make their own greetings card using simple block-printing. Each session lasts forty-five minutes and places are limited to twelve children. Booking in advance is essential, as we cannot admit anyone who has not reserved a place. A small charge of £3 per child covers all materials; accompanying adults take part free of charge.

NOTICE C - Evening Folk Concert (Saturday, 7.30 p.m., St Anne's Hall)
The festival closes its first day with a concert by three regional folk groups. Tickets cost £9 for adults and £5 for under-eighteens, and must be bought in advance from the festival website; no tickets will be sold at the door. Doors open at 7.00 p.m. Latecomers will be admitted only between songs, so as not to disturb the performers.

NOTICE D - Sunday Sketching Walk (Sunday, 9.30 a.m., meet at the Canal Bridge)
Led by a local artist, this gentle two-hour walk along the canal offers the chance to draw the landscape at several stops. The walk is free, but numbers are capped at fifteen, so please register at the information tent on Saturday. Bring your own pencils and paper; a limited number of spare materials will be available for those who forget. The walk goes ahead in light rain but will be cancelled in a storm.

KERBSIDE RECYCLING - CHANGES FROM 1 JUNE

From 1 June, the council is changing how recycling is collected. Each household now has two bins: a GREEN bin for paper, card and cardboard, and a BLUE bin for glass bottles, metal tins and clean plastic containers. The two bins are collected on alternating weeks, so each bin is emptied once a fortnight rather than weekly. Your collection day stays the same.

Please rinse food containers before placing them in the blue bin, and flatten cardboard boxes so that more can fit in the green bin. Soft plastics such as bags and wrapping cannot be recycled at the kerbside; these may instead be taken to the collection point inside the Mill Lane supermarket. Garden waste is not collected under this scheme and requires a separate paid subscription. Bins must be placed at the boundary of your property by 7.00 a.m. on your collection day.`,
        questions: [
          {
            id: 'rd-gen-006-p1-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the four festival notices, A-D. For each statement below, choose the notice it refers to. Write the correct letter, A-D. (Each notice may be chosen more than once.)',
            options: [
              { key: 'A', label: 'Notice A - Saturday Street Market' },
              { key: 'B', label: 'Notice B - Family Print Workshop' },
              { key: 'C', label: 'Notice C - Evening Folk Concert' },
              { key: 'D', label: 'Notice D - Sunday Sketching Walk' },
            ],
            items: [
              {
                id: 'i1',
                text: 'It warns that people who arrive late will only be let in at certain moments.',
                answer: 'C',
              },
              {
                id: 'i2',
                text: 'It suggests coming earlier in the day to avoid the biggest crowds.',
                answer: 'A',
              },
              {
                id: 'i3',
                text: 'It says spare equipment is kept for anyone who arrives without their own.',
                answer: 'D',
              },
              {
                id: 'i4',
                text: 'It states that an event will not run if the weather is severe.',
                answer: 'D',
              },
              {
                id: 'i5',
                text: 'It explains that a place must be reserved beforehand or you cannot join in.',
                answer: 'B',
              },
              {
                id: 'i6',
                text: 'It tells readers that the activity is intended for a particular minimum age.',
                answer: 'B',
              },
            ],
            explanation:
              'i1: Notice C says "Latecomers will be admitted only between songs." i2: Notice A advises arriving "before midday" because the market "is busiest in the early afternoon." i3: Notice D offers "a limited number of spare materials ... for those who forget." i4: Notice D says the walk "will be cancelled in a storm." i5: Notice B states "Booking in advance is essential, as we cannot admit anyone who has not reserved a place." i6: Notice B is for "children aged six and over." (Notices B and D are each chosen twice, which the instruction allows.)',
          },
          {
            id: 'rd-gen-006-p1-q2',
            type: 'tfng',
            prompt: 'Visitors to the Saturday Street Market must buy a ticket to enter.',
            answer: 'false',
            explanation:
              'Notice A states clearly that for the market "Entry is free and no ticket is needed." The statement is therefore False.',
          },
          {
            id: 'rd-gen-006-p1-q3',
            type: 'tfng',
            prompt:
              'Tickets for the Evening Folk Concert can be purchased at St Anne’s Hall on the night.',
            answer: 'false',
            explanation:
              'Notice C says tickets "must be bought in advance from the festival website; no tickets will be sold at the door." Buying on the night is not possible, so the statement is False.',
          },
          {
            id: 'rd-gen-006-p1-q4',
            type: 'tfng',
            prompt:
              'Adults who help children at the Family Print Workshop are charged the same fee as the children.',
            answer: 'false',
            explanation:
              'Notice B says the £3 charge is "per child" and that "accompanying adults take part free of charge." The adults are not charged, so the statement is False.',
          },
          {
            id: 'rd-gen-006-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: The Sunday Sketching Walk lasts about _______ hours.',
            acceptableAnswers: ['two', '2'],
            explanation:
              'Notice D describes "this gentle two-hour walk along the canal." The answer is "two" (the number 2 is also accepted).',
          },
          {
            id: 'rd-gen-006-p1-q6',
            type: 'mcq',
            prompt: 'Under the new recycling scheme, how often is each bin emptied?',
            options: ['Every week', 'Once every two weeks', 'Twice a week', 'Only when it is full'],
            correctIndex: 1,
            explanation:
              'The recycling notice says the two bins "are collected on alternating weeks, so each bin is emptied once a fortnight rather than weekly." A fortnight is two weeks, so option B is correct.',
          },
          {
            id: 'rd-gen-006-p1-q7',
            type: 'mcq',
            prompt: 'What should residents do with soft plastics such as bags and wrapping?',
            options: [
              'Put them in the green bin with paper and card',
              'Put them in the blue bin after rinsing them',
              'Take them to the collection point in the Mill Lane supermarket',
              'Add them to a paid garden-waste subscription',
            ],
            correctIndex: 2,
            explanation:
              'The notice states soft plastics "cannot be recycled at the kerbside; these may instead be taken to the collection point inside the Mill Lane supermarket." Option C matches.',
          },
          {
            id: 'rd-gen-006-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the text: Bins must be put out at the boundary of the property by _______ a.m. on the collection day.',
            acceptableAnswers: ['7.00', '7', '7am', '7.00am', 'seven'],
            explanation:
              'The final line of the notice says "Bins must be placed at the boundary of your property by 7.00 a.m. on your collection day." The answer is 7.00 (a.m.).',
          },
          {
            id: 'rd-gen-006-p1-q9',
            type: 'tfng',
            prompt: 'Garden waste is collected free as part of the new recycling scheme.',
            answer: 'false',
            explanation:
              'The recycling notice says "Garden waste is not collected under this scheme and requires a separate paid subscription." It is neither included nor free, so the statement is False.',
          },
        ],
      },
      // ── Section 2: WORKPLACE - new-employee IT & data-protection policy ──────
      {
        id: 'rd-gen-006-p2',
        title: 'New Employee Handbook - IT and Data-Protection Policy',
        body: `Welcome to the company. This section of your induction explains how you must use our computer systems and how you are expected to handle the personal data of customers and colleagues. You are required to read it during your first week and to confirm in the staff portal that you have understood it.

ACCOUNTS AND PASSWORDS
On your first day, the IT team will create a personal account for you. You must never share your password with anyone, including managers and IT staff: genuine IT staff will never ask you for it. Passwords must be at least twelve characters long and must be changed every ninety days; the system will prompt you when a change is due. If you think your account has been accessed by someone else, you must report this to the IT helpdesk immediately, even if you are not certain.

USING EMAIL AND THE INTERNET
Company email is provided for work. Occasional personal use is permitted during your breaks, provided it is reasonable and lawful, but you should not assume that anything you send is private, as the company may monitor accounts where there is a clear business reason. Never open an attachment or click a link in an unexpected message, even if it appears to come from a colleague; instead, forward it to the IT helpdesk so that it can be checked.

HANDLING PERSONAL DATA
You may only access customer or staff records that you genuinely need in order to do your job. Looking up the details of friends, family or public figures out of curiosity is treated as a serious disciplinary matter, regardless of whether the information is shared further. Personal data must not be copied onto memory sticks or personal devices, and must not be sent to a personal email address. When records are no longer needed, they should be deleted using the secure tool, not simply moved to the recycle bin.

REPORTING A DATA BREACH
If personal data is lost, sent to the wrong person, or seen by someone who should not see it, this is a data breach and must be reported to the Data Protection Officer within twenty-four hours of discovery. Reporting quickly is far more important than establishing exactly who was at fault; the company would much rather hear about a possible breach early than learn of a real one too late. Staff who report their own mistakes promptly and honestly will not be penalised for the act of reporting.

WORKING AWAY FROM THE OFFICE
Staff who work from home or while travelling must use the company’s secure connection whenever they handle work files, and must never use public wifi without it. Screens should be locked whenever you step away from your device, and confidential documents should not be read where members of the public could see them, such as on a train.`,
        questions: [
          {
            id: 'rd-gen-006-p2-q9',
            type: 'mcq',
            prompt: 'What does the policy say about sharing your password?',
            options: [
              'It may be shared with your line manager but no one else',
              'It may be shared with IT staff if they ask for it',
              'It must never be shared, and genuine IT staff will not ask for it',
              'It may be shared as long as you change it afterwards',
            ],
            correctIndex: 2,
            explanation:
              'The Accounts and Passwords section says "You must never share your password with anyone, including managers and IT staff: genuine IT staff will never ask you for it." Option C matches; A and B are explicitly ruled out.',
          },
          {
            id: 'rd-gen-006-p2-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: Passwords must contain at least _______ characters.',
            acceptableAnswers: ['twelve', '12'],
            explanation:
              'The passage states that "Passwords must be at least twelve characters long." The answer is "twelve" (the number 12 is also accepted).',
          },
          {
            id: 'rd-gen-006-p2-q11',
            type: 'tfng',
            prompt:
              'Employees may use company email for personal messages at any time during the working day.',
            answer: 'false',
            explanation:
              'The passage permits "Occasional personal use ... during your breaks," not at any time during the working day. The statement is therefore False.',
          },
          {
            id: 'rd-gen-006-p2-q12',
            type: 'tfng',
            prompt: 'Staff should assume that the emails they send are completely private.',
            answer: 'false',
            explanation:
              'The text says "you should not assume that anything you send is private, as the company may monitor accounts where there is a clear business reason." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-006-p2-q13',
            type: 'mcq',
            prompt:
              'According to the policy, what should you do with an unexpected email attachment?',
            options: [
              'Open it only if it appears to come from a colleague',
              'Delete it immediately without telling anyone',
              'Forward it to the IT helpdesk to be checked',
              'Save it to a memory stick before opening it',
            ],
            correctIndex: 2,
            explanation:
              'The passage says "Never open an attachment or click a link in an unexpected message ... instead, forward it to the IT helpdesk so that it can be checked." Option C is correct; the warning applies even when the message seems to come from a colleague, ruling out A.',
          },
          {
            id: 'rd-gen-006-p2-q14',
            type: 'tfng',
            prompt:
              'Looking up a celebrity’s records out of curiosity is acceptable as long as the information is kept private.',
            answer: 'false',
            explanation:
              'The Handling Personal Data section states that looking up details "of friends, family or public figures out of curiosity is treated as a serious disciplinary matter, regardless of whether the information is shared further." Keeping it private does not make it acceptable, so the statement is False.',
          },
          {
            id: 'rd-gen-006-p2-q15',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word and/or a number from the passage: A data breach must be reported to the Data Protection Officer within _______ hours of being discovered.',
            acceptableAnswers: ['twenty-four', '24', 'twenty four'],
            explanation:
              'The Reporting a Data Breach section says a breach "must be reported to the Data Protection Officer within twenty-four hours of discovery." The answer is "twenty-four" (24 is also accepted).',
          },
          {
            id: 'rd-gen-006-p2-q16',
            type: 'tfng',
            prompt:
              'An employee who promptly reports their own honest mistake will be punished for reporting it.',
            answer: 'false',
            explanation:
              'The passage states that "Staff who report their own mistakes promptly and honestly will not be penalised for the act of reporting." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-gen-006-p2-q17',
            type: 'mcq',
            prompt: 'What must staff do when handling work files away from the office?',
            options: [
              'Avoid working away from the office altogether',
              'Use any available public wifi to save time',
              'Use the company’s secure connection and never use public wifi without it',
              'Copy the files onto a personal device first',
            ],
            correctIndex: 2,
            explanation:
              'The Working Away from the Office section says staff "must use the company’s secure connection whenever they handle work files, and must never use public wifi without it." Option C matches.',
          },
          {
            id: 'rd-gen-006-p2-q18',
            type: 'tfng',
            prompt: 'Employees should lock their screen whenever they leave their device.',
            answer: 'true',
            explanation:
              'The Working Away from the Office section states that "Screens should be locked whenever you step away from your device." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-006-p2-q19',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When records are no longer needed, they must be deleted with the _______ tool rather than moved to the recycle bin.',
            acceptableAnswers: ['secure'],
            explanation:
              'The Handling Personal Data section says records "should be deleted using the secure tool, not simply moved to the recycle bin." The missing word is "secure".',
          },
        ],
      },
      // ── Section 3: LONGER GENERAL-INTEREST text - community gardens ──────────
      {
        id: 'rd-gen-006-p3',
        title: 'Common Ground: The Quiet Benefits of Community Gardens',
        body: `[A] On a patch of land that was once a derelict car park, a group of neighbours now grow tomatoes, beans and sunflowers side by side. Scenes like this are becoming more common in towns across the country, as residents turn unused corners into shared community gardens. Unlike a private garden or a traditional allotment, where each person tends a separate plot, a community garden is worked collectively: the same group plants, waters and harvests together, and shares both the labour and the produce.

[B] The most obvious gain is the food itself. A well-run garden can supply a surprising quantity of fresh vegetables and fruit over a season, and because the produce travels no further than the garden gate, it is picked at its ripest and reaches the table within hours. For households on tight budgets, this can make a real difference, turning a few packets of seed into many weeks of meals. Some gardens donate a share of what they grow to local food banks, so that the harvest reaches people who never lifted a trowel.

[C] Yet ask regular gardeners why they keep coming back, and few mention vegetables first. Again and again, they speak instead of the people they have met. A community garden draws together neighbours who might otherwise never have spoken: retired people and young families, long-term residents and recent arrivals, all working towards the same simple goal. The shared task gives strangers an easy reason to talk, and friendships form over a row of beans that might never have formed across a fence. In neighbourhoods where many people live alone, this gentle, regular contact can be quietly valuable.

[D] The benefits are not only social. Tending a garden is steady physical work - digging, weeding, carrying water - that keeps people moving without ever feeling like exercise. Researchers who study wellbeing have also noted that time spent among growing plants seems to lower stress and lift mood, offering a welcome change from screens and crowded streets. For older gardeners in particular, the routine of regular visits provides not only activity but a reason to leave the house and a place where they are expected and missed.

[E] Community gardens reach beyond their own fences, too. A tidy, productive plot can lift the appearance of a run-down street and give a neighbourhood a renewed sense of pride. The gardens also make room for nature: their mix of flowers, fruit and vegetables draws bees and butterflies, and even a small plot can become a refuge for wildlife in a built-up area. Children who help out learn where food really comes from - a lesson that a supermarket shelf can never teach.

[F] None of this happens by accident, and it would be wrong to pretend the gardens run themselves. They depend on a core of committed volunteers, and enthusiasm can fade when the first excitement passes or when a key organiser moves away. Many gardens are established on borrowed or temporary land, and can be lost when an owner decides to build. Sensible groups guard against these dangers by sharing responsibilities widely, keeping clear agreements with landowners, and welcoming newcomers warmly so that there is always someone ready to take up the spade. Where that care is taken, a community garden can flourish for many years, feeding a neighbourhood in more ways than one.`,
        questions: [
          {
            id: 'rd-gen-006-p3-q18',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The article has six paragraphs, A-F. Choose the correct heading for paragraphs B, C, D, E and F from the list of headings below. Write the correct number, i-viii. There are more headings than paragraphs, so you will not use them all.',
            options: [
              { key: 'i', label: 'i. Fresh food, harvested at its best' },
              { key: 'ii', label: 'ii. New friendships among neighbours' },
              { key: 'iii', label: 'iii. How to apply for a plot of your own' },
              { key: 'iv', label: 'iv. Gains for body and mind' },
              { key: 'v', label: 'v. Wider rewards for the neighbourhood and nature' },
              { key: 'vi', label: 'vi. The threats that gardens must guard against' },
              { key: 'vii', label: 'vii. The high cost of buying gardening tools' },
              { key: 'viii', label: 'viii. A brief history of the allotment' },
            ],
            items: [
              { id: 'pB', text: 'Paragraph B', answer: 'i' },
              { id: 'pC', text: 'Paragraph C', answer: 'ii' },
              { id: 'pD', text: 'Paragraph D', answer: 'iv' },
              { id: 'pE', text: 'Paragraph E', answer: 'v' },
              { id: 'pF', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'B is about the food itself, "picked at its ripest" and reaching the table within hours (i). C is about neighbours meeting and friendships forming (ii). D covers physical work plus lower stress and better mood - body and mind (iv). E describes wider rewards: a lifted street, pride, and a refuge for bees, butterflies and wildlife (v). F is about the dangers - fading enthusiasm and the loss of borrowed land - and how to guard against them (vi). Headings iii, vii and viii are not used.',
          },
          {
            id: 'rd-gen-006-p3-q19',
            type: 'mcq',
            prompt:
              'How does a community garden differ from a traditional allotment, according to Paragraph A?',
            options: [
              'It is always created on a former car park',
              'It is worked collectively rather than as separate individual plots',
              'It grows only flowers rather than vegetables',
              'It is owned privately by one family',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A contrasts a community garden with an allotment "where each person tends a separate plot," explaining that a community garden "is worked collectively: the same group plants, waters and harvests together." Option B captures this distinction.',
          },
          {
            id: 'rd-gen-006-p3-q20',
            type: 'tfng',
            prompt: 'Some community gardens give part of their harvest to local food banks.',
            answer: 'true',
            explanation:
              'Paragraph B states that "Some gardens donate a share of what they grow to local food banks." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-006-p3-q21',
            type: 'tfng',
            prompt:
              'When asked, most regular gardeners say the vegetables are their main reason for taking part.',
            answer: 'false',
            explanation:
              'Paragraph C says that when asked why they keep coming back, "few mention vegetables first" and instead "speak ... of the people they have met." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-gen-006-p3-q22',
            type: 'tfng',
            prompt:
              'Researchers have found that spending time among growing plants tends to reduce stress.',
            answer: 'true',
            explanation:
              'Paragraph D notes that researchers "have also noted that time spent among growing plants seems to lower stress and lift mood." This matches the statement, so it is True.',
          },
          {
            id: 'rd-gen-006-p3-q23',
            type: 'mcq',
            prompt: 'According to Paragraph F, why can a community garden be lost?',
            options: [
              'Because the soil eventually stops producing food',
              'Because volunteers are legally required to leave after a few years',
              'Because the land is often borrowed and the owner may decide to build on it',
              'Because councils ban gardens in built-up areas',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F explains that "Many gardens are established on borrowed or temporary land, and can be lost when an owner decides to build." Option C matches this point.',
          },
          {
            id: 'rd-gen-006-p3-q24',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The mix of flowers, fruit and vegetables draws bees and _______ to the garden.',
            acceptableAnswers: ['butterflies'],
            explanation:
              'Paragraph E says the gardens’ "mix of flowers, fruit and vegetables draws bees and butterflies." The missing word is "butterflies".',
          },
          {
            id: 'rd-gen-006-p3-q25',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To protect a garden’s future, sensible groups keep clear _______ with landowners.',
            acceptableAnswers: ['agreements'],
            explanation:
              'Paragraph F advises groups to guard against danger by "keeping clear agreements with landowners." The missing word is "agreements".',
          },
          {
            id: 'rd-gen-006-p3-q26',
            type: 'tfng',
            prompt:
              'The writer claims that community gardens look after themselves once they have been set up.',
            answer: 'false',
            explanation:
              'Paragraph F states the opposite: "it would be wrong to pretend the gardens run themselves," and they "depend on a core of committed volunteers." The statement is therefore False.',
          },
          {
            id: 'rd-gen-006-p3-q27',
            type: 'tfng',
            prompt:
              'For older gardeners, the writer suggests the garden gives them a reason to leave the house.',
            answer: 'true',
            explanation:
              'Paragraph D says that for older gardeners the routine "provides not only activity but a reason to leave the house and a place where they are expected and missed." This supports the statement, so it is True.',
          },
          {
            id: 'rd-gen-006-p3-q28',
            type: 'mcq',
            prompt:
              'According to Paragraph E, what does the writer say children gain from helping in a garden?',
            options: [
              'They earn money for the produce they sell',
              'They learn where food really comes from',
              'They are taught how to run a food bank',
              'They become responsible for the garden’s finances',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says "Children who help out learn where food really comes from - a lesson that a supermarket shelf can never teach." Option B matches this point.',
          },
        ],
      },
    ],
  },
]
