// ─── IELTS Academic Listening — practice test data (Set 15) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a guest phoning a
//     hotel to book a room), assessed with form / note completion + a
//     multiple-choice item. A surname is spelled and a card number is dictated,
//     and one detail (the total cost) depends on a stated choice (how many
//     nights and which room).
//   • Section 2 — an everyday MONOLOGUE (here: a welcome talk to visitors at a
//     science centre), assessed with sentence completion + multiple choice,
//     carrying signpost language ("to begin", "after that", "finally") that the
//     questions track.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two architecture students and a
//     tutor reviewing a studio design project for a community library),
//     assessed with multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: the history of money,
//     from barter to digital payment), assessed with note/sentence completion +
//     multiple choice, including one True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// Question numbering is continuous q1–q40 across the four sections, matching the
// other full-length tests. All content below is original and written for IELTS
// preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_15: ListeningTest[] = [
  {
    id: 'ls-academic-15',
    title:
      'Practice Test 15 — Booking a Hotel Room, A Welcome Talk at a Science Centre, Reviewing an Architecture Project & The History of Money',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-15-s1',
        title: 'Section 1 — Booking a hotel room',
        // ~285 words. Transactional dialogue (Section 1 style): a guest phoning a
        // hotel to book a room. A surname is spelled and a card number is dictated;
        // one detail (the total cost) depends on stated choices (how many nights and
        // which room type), mirroring the form/note-completion + multiple-choice mix
        // of a real Section 1.
        transcript: `WOMAN: Good afternoon, the Riverbank Hotel, Sophie speaking. How may I help you?

MAN: Hello, I'd like to book a room for next month, please.

WOMAN: Of course. Could I take your name first?

MAN: Yes, it's James Hartley. Hartley is spelled H-A-R-T-L-E-Y.

WOMAN: Thank you, Mr Hartley. And which dates were you thinking of?

MAN: I'd arrive on the eighth of June and stay for three nights.

WOMAN: Three nights, lovely. We have two options. A standard double room is ninety pounds a night, and a deluxe room, which is larger and overlooks the river, is one hundred and ten.

MAN: I'll take the deluxe, please — the view sounds worth it.

WOMAN: A good choice. So that's three nights in the deluxe room. To secure the booking I'll need a card number.

MAN: Certainly. It's four-five-one-six, double zero, nine-two, seven-one.

WOMAN: Thank you. Now, breakfast is served until half past nine and is included in the price. Is there anything else you'll need?

MAN: Just one thing — do you have parking?

WOMAN: We do. There's a free car park behind the building, but it can be busy, so I'd advise arriving before six in the evening to be sure of a space.

MAN: Good to know. And what time can I check in?

WOMAN: From two o'clock onwards. If you arrive earlier, we're happy to store your bags at reception.

MAN: Perfect. Thank you so much for your help.

WOMAN: You're very welcome, Mr Hartley. We look forward to seeing you on the eighth.`,
        questions: [
          {
            id: 'ls-015-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nGuest surname: ____________',
            acceptableAnswers: ['Hartley', 'hartley'],
            explanation:
              'The caller gives his name as “James Hartley” and spells the surname: H-A-R-T-L-E-Y. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-015-s1-q2',
            type: 'gap',
            prompt: 'Date of arrival: the ____________ of June. Write A NUMBER.',
            acceptableAnswers: ['8', 'eighth', '8th'],
            explanation:
              'He says, “I’d arrive on the eighth of June.” The arrival date is the 8th — ordinal numbers said aloud (eighth) map to the digits 8.',
          },
          {
            id: 'ls-015-s1-q3',
            type: 'gap',
            prompt: 'Number of nights booked: ____________. Write A NUMBER.',
            acceptableAnswers: ['3', 'three'],
            explanation:
              'He says he will “stay for three nights.” The answer is 3. This figure also feeds into the total-cost question below — Section 1 details often connect.',
          },
          {
            id: 'ls-015-s1-q4',
            type: 'mcq',
            prompt: 'Which room does the man choose, and why?',
            options: [
              'The standard double, because it is cheaper',
              'The deluxe room, because it overlooks the river',
              'The standard double, because it is larger',
              'The deluxe room, because breakfast is included',
            ],
            correctIndex: 1,
            explanation:
              'He says, “I’ll take the deluxe, please — the view sounds worth it,” after the assistant notes the deluxe room “overlooks the river.” The distractors reuse real words from the audio (cheaper, larger, breakfast) but none matches his stated reason.',
          },
          {
            id: 'ls-015-s1-q5',
            type: 'gap',
            prompt: 'Card number given: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['4516 00 92 71', '4516009271', '4516 0092 71', '451600 9271'],
            explanation:
              'He dictates the number as “four-five-one-six, double zero, nine-two, seven-one” — that is 4516 00 92 71. “Double zero” means two 0s; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-015-s1-q6',
            type: 'mcq',
            prompt: 'How much will the man pay in total for his stay?',
            options: [
              'Two hundred and seventy pounds, for three nights in the standard room',
              'Three hundred and thirty pounds, for three nights in the deluxe room',
              'Three hundred and thirty pounds, for three nights in the standard room',
              'Two hundred and twenty pounds, for two nights in the deluxe room',
            ],
            correctIndex: 1,
            explanation:
              'The deluxe room is “one hundred and ten” pounds a night, and he books three nights (Q3), so the total is 3 × £110 = £330. The distractors reuse the real figures but apply the wrong room rate or number of nights.',
          },
          {
            id: 'ls-015-s1-q7',
            type: 'gap',
            prompt:
              'Breakfast is included and is served until ____________. Write the time as you hear it.',
            acceptableAnswers: [
              '9.30',
              '9:30',
              'half past nine',
              'half past 9',
              '09:30',
              '9.30am',
              '9:30 am',
            ],
            explanation:
              'She says, “breakfast is served until half past nine and is included in the price.” That is 9.30.',
          },
          {
            id: 'ls-015-s1-q8',
            type: 'gap',
            prompt: 'There is a free ____________ behind the building. Write TWO WORDS.',
            acceptableAnswers: ['car park', 'car-park', 'carpark'],
            explanation:
              'She says, “There’s a free car park behind the building.” The answer is “car park” (hyphenated/joined forms accepted).',
          },
          {
            id: 'ls-015-s1-q9',
            type: 'mcq',
            prompt: 'What does the assistant advise the man to do about parking?',
            options: [
              'To reserve a space online in advance',
              'To arrive before six in the evening to be sure of a space',
              'To use a public car park nearby',
              'To pay a small fee on arrival',
            ],
            correctIndex: 1,
            explanation:
              'She says the car park “can be busy, so I’d advise arriving before six in the evening to be sure of a space.” Option B matches; no online booking or fee is mentioned.',
          },
          {
            id: 'ls-015-s1-q10',
            type: 'gap',
            prompt: 'Guests may check in from ____________ o’clock onwards. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'She says check-in is “From two o’clock onwards.” The answer is 2 (guests arriving earlier can store bags at reception, a distractor detail).',
          },
        ],
      },
      {
        id: 'ls-academic-15-s2',
        title: 'Section 2 — A welcome talk at a science centre',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors to a science centre and outlining the day. Uses
        // sequencing/signpost language ("to begin", "after that", "finally") that the
        // questions follow in order, with a sentence-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and welcome to the Northgate Science Centre. My name is Tom, and I'm one of the explainers here. Before you set off, let me run through what's on today and a few things that will help you make the most of your visit.

To begin with, the layout. We're spread over three floors, and the easiest way to get around is to start at the top and work your way down. The lift is just behind me, but I'd encourage you to take the stairs if you can — there's a fascinating display of optical illusions along the staircase walls that most people miss.

Our most popular attraction is the planetarium on the second floor. The shows are free, but they do fill up, so please collect a timed ticket from the desk as soon as you arrive rather than turning up on the hour and hoping.

After that, don't miss the live demonstrations in the Energy Zone. Today's theme is electricity, and at eleven o'clock our team will be making a volunteer's hair stand on end with a static generator — always a favourite with younger visitors.

A quick word on practicalities. Photography is welcome throughout, except in the planetarium, where flashes spoil the show for others. There's a café on the ground floor, and if the weather holds you're welcome to eat your own food in the garden, though not inside the galleries.

Finally, before you leave, do visit the shop by the exit. Any purchase helps fund our free schools programme. That's everything from me — enjoy your day, and don't be afraid to ask questions.`,
        questions: [
          {
            id: 'ls-015-s2-q11',
            type: 'mcq',
            prompt: 'What does the speaker suggest is the best way to see the centre?',
            options: [
              'To take the lift straight to the second floor',
              'To start at the top floor and work downwards',
              'To follow a guided tour from the entrance',
              'To begin on the ground floor near the café',
            ],
            correctIndex: 1,
            explanation:
              'He says “the easiest way to get around is to start at the top and work your way down.” Option B matches the recommended route.',
          },
          {
            id: 'ls-015-s2-q12',
            type: 'gap',
            prompt:
              'Along the staircase walls there is a display of optical ____________ that most people miss. Write ONE WORD.',
            acceptableAnswers: ['illusions', 'illusion'],
            explanation:
              'He says there is “a fascinating display of optical illusions along the staircase walls that most people miss.” The answer is “illusions”.',
          },
          {
            id: 'ls-015-s2-q13',
            type: 'gap',
            prompt:
              'The centre’s most popular attraction is the ____________ on the second floor. Write ONE WORD.',
            acceptableAnswers: ['planetarium'],
            explanation:
              'He says, “Our most popular attraction is the planetarium on the second floor.” The answer is “planetarium”.',
          },
          {
            id: 'ls-015-s2-q14',
            type: 'mcq',
            prompt: 'What does the speaker advise visitors to do about the planetarium shows?',
            options: [
              'To pay for a ticket at the entrance',
              'To collect a timed ticket from the desk on arrival',
              'To arrive exactly on the hour',
              'To book the shows online beforehand',
            ],
            correctIndex: 1,
            explanation:
              'He says the shows “do fill up, so please collect a timed ticket from the desk as soon as you arrive rather than turning up on the hour and hoping.” Option B matches; the shows are free, so option A is wrong.',
          },
          {
            id: 'ls-015-s2-q15',
            type: 'gap',
            prompt:
              'Today’s theme in the Energy Zone demonstrations is ____________. Write ONE WORD.',
            acceptableAnswers: ['electricity'],
            explanation:
              'He says, “Today’s theme is electricity,” in the Energy Zone. The answer is “electricity”.',
          },
          {
            id: 'ls-015-s2-q16',
            type: 'gap',
            prompt:
              'The static-generator demonstration takes place at ____________ o’clock. Write A NUMBER.',
            acceptableAnswers: ['11', 'eleven'],
            explanation:
              'He says, “at eleven o’clock our team will be making a volunteer’s hair stand on end with a static generator.” The answer is 11.',
          },
          {
            id: 'ls-015-s2-q17',
            type: 'mcq',
            prompt: 'Where is photography NOT allowed?',
            options: [
              'Anywhere inside the centre',
              'In the planetarium',
              'In the Energy Zone',
              'In the garden',
            ],
            correctIndex: 1,
            explanation:
              'He says, “Photography is welcome throughout, except in the planetarium, where flashes spoil the show for others.” Option B matches.',
          },
          {
            id: 'ls-015-s2-q18',
            type: 'mcq',
            prompt: 'What does the speaker say about eating your own food?',
            options: [
              'It is not allowed anywhere in the centre',
              'It is allowed in the garden but not in the galleries',
              'It is only allowed in the café',
              'It is allowed throughout the building',
            ],
            correctIndex: 1,
            explanation:
              'He says visitors are “welcome to eat your own food in the garden, though not inside the galleries.” Option B matches.',
          },
          {
            id: 'ls-015-s2-q19',
            type: 'gap',
            prompt:
              'Money spent in the shop helps fund the centre’s free ____________ programme. Write ONE WORD.',
            acceptableAnswers: ['schools', 'school'],
            explanation:
              'He says, “Any purchase helps fund our free schools programme.” The answer is “schools”.',
          },
          {
            id: 'ls-015-s2-q20',
            type: 'gap',
            prompt: 'There is a café on the ____________ floor of the centre. Write ONE WORD.',
            acceptableAnswers: ['ground'],
            explanation: 'He says, “There’s a café on the ground floor.” The answer is “ground”.',
          },
        ],
      },
      {
        id: 'ls-academic-15-s3',
        title: 'Section 3 — Tutorial: reviewing an architecture project',
        // ~295 words. Academic discussion (Section 3 style): two architecture students
        // (Priya and Sam) and a tutor (Dr Bennett) review a studio design project for
        // a community library. Speakers debate the building's location, materials, a
        // problem with the layout, sustainability features and the model they will
        // build, so the questions mix multiple choice (decisions/opinions) with
        // completion (concrete details).
        transcript: `DR BENNETT: So, Priya and Sam, let's review where you've got to with the community library project. Talk me through it.

PRIYA: We've designed a single-storey library for the corner site near the park. We chose that plot rather than the high-street one because it's quieter and gets far more daylight.

DR BENNETT: A sound decision. Daylight matters enormously in a reading space. What about the structure?

SAM: We've gone for a timber frame. It's lighter than steel, it stores carbon, and honestly it just feels more welcoming than concrete for a building like this.

DR BENNETT: I agree timber suits the brief. Now, were there any problems you had to solve?

PRIYA: One big one. Our first plan put the children's area right next to the quiet study room, and we realised the noise would carry straight through. So we've moved the children's section to the far end, by the entrance.

DR BENNETT: Good catch — zoning by noise level is exactly right. And sustainability? You mentioned the carbon in the timber.

SAM: Yes, and there's more. We're putting solar panels on the roof, and rainwater from the roof is collected in a tank and used to flush the toilets.

DR BENNETT: Excellent. Those are the kinds of features the assessors look for. What are you producing for the final review?

PRIYA: As well as the drawings, we're building a physical model at a scale of one to fifty, so people can really see the daylight coming in.

DR BENNETT: Perfect. A model at that scale will show the interior beautifully. Just leave yourselves enough time — model-making always takes longer than you expect.`,
        questions: [
          {
            id: 'ls-015-s3-q21',
            type: 'mcq',
            prompt: 'What type of building have the students designed?',
            options: [
              'A two-storey museum',
              'A single-storey community library',
              'A high-street shop',
              'A block of flats',
            ],
            correctIndex: 1,
            explanation:
              'Priya says, “We’ve designed a single-storey library for the corner site near the park.” Option B matches the brief.',
          },
          {
            id: 'ls-015-s3-q22',
            type: 'mcq',
            prompt: 'Why did the students choose the corner site near the park?',
            options: [
              'Because it was cheaper than the high-street plot',
              'Because it is quieter and gets far more daylight',
              'Because the tutor recommended it',
              'Because it was closer to public transport',
            ],
            correctIndex: 1,
            explanation:
              'Priya says they chose that plot “rather than the high-street one because it’s quieter and gets far more daylight.” Option B matches the reason given.',
          },
          {
            id: 'ls-015-s3-q23',
            type: 'gap',
            prompt:
              'For the structure, the students have chosen a ____________ frame rather than steel. Write ONE WORD.',
            acceptableAnswers: ['timber', 'wood', 'wooden'],
            explanation:
              'Sam says, “We’ve gone for a timber frame. It’s lighter than steel.” The answer is “timber” (wood/wooden accepted as synonyms).',
          },
          {
            id: 'ls-015-s3-q24',
            type: 'mcq',
            prompt: 'According to Sam, what is one advantage of the chosen frame material?',
            options: [
              'It is heavier and therefore more stable than steel',
              'It stores carbon and feels more welcoming than concrete',
              'It is cheaper to buy than any alternative',
              'It needs no maintenance over time',
            ],
            correctIndex: 1,
            explanation:
              'Sam says timber “is lighter than steel, it stores carbon, and honestly it just feels more welcoming than concrete.” Option B matches; he says it is lighter, not heavier, ruling out option A.',
          },
          {
            id: 'ls-015-s3-q25',
            type: 'mcq',
            prompt: 'What problem did the students have to solve in their layout?',
            options: [
              'The building was too small for the books',
              'Noise from the children’s area would carry into the quiet study room',
              'There was no room for an entrance',
              'The roof could not support solar panels',
            ],
            correctIndex: 1,
            explanation:
              'Priya says their first plan put “the children’s area right next to the quiet study room, and we realised the noise would carry straight through.” Option B matches the problem.',
          },
          {
            id: 'ls-015-s3-q26',
            type: 'gap',
            prompt:
              'To solve the problem, the students moved the children’s section to the far end, by the ____________. Write ONE WORD.',
            acceptableAnswers: ['entrance'],
            explanation:
              'Priya says, “we’ve moved the children’s section to the far end, by the entrance.” The answer is “entrance”.',
          },
          {
            id: 'ls-015-s3-q27',
            type: 'gap',
            prompt:
              'For sustainability, the students are putting solar ____________ on the roof. Write ONE WORD.',
            acceptableAnswers: ['panels', 'panel'],
            explanation:
              'Sam says, “We’re putting solar panels on the roof.” The answer is “panels”.',
          },
          {
            id: 'ls-015-s3-q28',
            type: 'gap',
            prompt:
              'Rainwater collected from the roof is stored in a tank and used to flush the ____________. Write ONE WORD.',
            acceptableAnswers: ['toilets', 'toilet'],
            explanation:
              'Sam says “rainwater from the roof is collected in a tank and used to flush the toilets.” The answer is “toilets”.',
          },
          {
            id: 'ls-015-s3-q29',
            type: 'gap',
            prompt:
              'For the final review, the students are building a physical model at a scale of one to ____________. Write A NUMBER.',
            acceptableAnswers: ['50', 'fifty'],
            explanation:
              'Priya says they are “building a physical model at a scale of one to fifty.” The answer is 50.',
          },
          {
            id: 'ls-015-s3-q30',
            type: 'mcq',
            prompt: 'What does the tutor warn the students about?',
            options: [
              'That timber is the wrong material for a library',
              'That model-making always takes longer than expected',
              'That the corner site may not be available',
              'That solar panels are too expensive',
            ],
            correctIndex: 1,
            explanation:
              'Dr Bennett says, “Just leave yourselves enough time — model-making always takes longer than you expect.” Option B matches the warning.',
          },
        ],
      },
      {
        id: 'ls-academic-15-s4',
        title: 'Section 4 — Lecture: the history of money',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single speaker
        // delivers a structured lecture on the history of money, from barter to digital
        // payment. Dense, factual and signposted ("let me begin", "next", "finally"),
        // with the note/sentence-completion + multiple-choice mix typical of Section 4,
        // including one True/False/Not Given item.
        transcript: `Good morning. Today I want to trace the history of money — how societies moved from swapping goods directly to the tap of a card, and why each step was such an improvement on the last.

Let me begin with the world before money: barter. If I had grain and wanted a pot, I had to find a potter who happened to want grain. Economists call this the problem of the "double coincidence of wants", and it made trade slow and limited. Money solved it by giving everyone a single thing they would always accept.

The earliest moneys were ordinary commodities — cattle, salt, shells. These had real drawbacks: cattle can't be divided, and salt dissolves in the rain. So societies gradually moved to metal, especially silver and gold, which are durable, easy to divide and valued everywhere.

The next great leap was coinage. The first true coins, stamped pieces of metal of guaranteed weight, are usually credited to the kingdom of Lydia, in what is now Turkey, around the seventh century BC. The stamp meant traders no longer had to weigh the metal at every transaction.

Paper money came later still, and it's a common belief that Europe invented it. In fact, the earliest paper money appeared in China, many centuries before it reached the West. Carrying a light note instead of a heavy bag of coins was a huge convenience for long-distance trade.

Finally, in our own time, money has become increasingly abstract. Most of the money in the modern economy exists only as numbers in a computer, never as physical notes or coins at all. Next week we'll examine what that shift means for how central banks try to control inflation.`,
        questions: [
          {
            id: 'ls-015-s4-q31',
            type: 'gap',
            prompt:
              'The system of swapping goods directly, before money existed, is called ____________. Write ONE WORD.',
            acceptableAnswers: ['barter'],
            explanation:
              'The speaker introduces “the world before money: barter,” where goods were swapped directly. The answer is “barter”.',
          },
          {
            id: 'ls-015-s4-q32',
            type: 'mcq',
            prompt: 'What problem with barter does the speaker describe?',
            options: [
              'Goods were too expensive to trade',
              'Each trader had to find someone who wanted exactly what they had',
              'There were not enough goods to go around',
              'Metal coins were too heavy to carry',
            ],
            correctIndex: 1,
            explanation:
              'The speaker explains that with barter you “had to find a potter who happened to want grain,” calling this “the problem of the ‘double coincidence of wants’.” Option B matches.',
          },
          {
            id: 'ls-015-s4-q33',
            type: 'gap',
            prompt:
              'Before metal, the earliest moneys were ordinary commodities such as cattle, salt and ____________. Write ONE WORD.',
            acceptableAnswers: ['shells', 'shell'],
            explanation:
              'The speaker lists the earliest moneys as “ordinary commodities — cattle, salt, shells.” The answer is “shells”.',
          },
          {
            id: 'ls-015-s4-q34',
            type: 'mcq',
            prompt: 'Why did societies move from commodities like cattle and salt to metal?',
            options: [
              'Metal was rarer than cattle',
              'Metal is durable, easy to divide and valued everywhere',
              'Cattle and salt were illegal to trade',
              'Metal was the only material that could be stamped',
            ],
            correctIndex: 1,
            explanation:
              'The speaker notes cattle “can’t be divided” and salt “dissolves in the rain,” so societies moved to metal, “which are durable, easy to divide and valued everywhere.” Option B matches.',
          },
          {
            id: 'ls-015-s4-q35',
            type: 'gap',
            prompt:
              'The first true coins are usually credited to the kingdom of ____________, in what is now Turkey. Write ONE WORD.',
            acceptableAnswers: ['Lydia', 'lydia'],
            explanation:
              'The speaker says the first true coins “are usually credited to the kingdom of Lydia, in what is now Turkey.” The answer is “Lydia”.',
          },
          {
            id: 'ls-015-s4-q36',
            type: 'mcq',
            prompt: 'According to the lecture, what advantage did stamped coins bring?',
            options: [
              'Traders no longer had to weigh the metal at every transaction',
              'Coins could be made from any cheap material',
              'Coins were impossible to counterfeit',
              'Coins removed the need for long-distance trade',
            ],
            correctIndex: 0,
            explanation:
              'The speaker says the coins were “of guaranteed weight,” and “the stamp meant traders no longer had to weigh the metal at every transaction.” Option A matches.',
          },
          {
            id: 'ls-015-s4-q37',
            type: 'tfng',
            prompt: 'The speaker says that paper money was first invented in Europe.',
            answer: 'false',
            explanation:
              'The speaker calls this “a common belief,” then corrects it: “In fact, the earliest paper money appeared in China, many centuries before it reached the West.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-015-s4-q38',
            type: 'gap',
            prompt:
              'The earliest paper money actually appeared in ____________, centuries before it reached the West. Write ONE WORD.',
            acceptableAnswers: ['China', 'china'],
            explanation:
              'The speaker says, “the earliest paper money appeared in China, many centuries before it reached the West.” The answer is “China”.',
          },
          {
            id: 'ls-015-s4-q39',
            type: 'mcq',
            prompt: 'What does the speaker say about money in the modern economy?',
            options: [
              'It still mostly takes the form of physical notes and coins',
              'Most of it exists only as numbers in a computer',
              'It has returned to a system of barter',
              'It is now based entirely on gold',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says money “has become increasingly abstract,” and “most of the money in the modern economy exists only as numbers in a computer, never as physical notes or coins at all.” Option B matches.',
          },
          {
            id: 'ls-015-s4-q40',
            type: 'gap',
            prompt:
              'Next week’s lecture will examine how central banks try to control ____________. Write ONE WORD.',
            acceptableAnswers: ['inflation'],
            explanation:
              'The speaker closes by saying next week they will look at “how central banks try to control inflation.” The answer is “inflation”.',
          },
        ],
      },
    ],
  },
]
