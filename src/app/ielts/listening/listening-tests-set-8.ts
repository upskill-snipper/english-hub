// ─── IELTS Academic Listening - practice test data (Set 8) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a phone call to a
//     dental surgery to book a check-up), assessed with form / note completion
//     + a multiple-choice item. A surname is spelled and a phone number is
//     dictated, and one detail (the appointment fee) depends on a stated choice.
//   • Section 2 - an everyday MONOLOGUE (here: a guided talk for visitors to a
//     recycling centre), assessed with sentence completion + multiple choice,
//     carrying signpost language ("first", "next", "finally") that the
//     questions track.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor
//     planning a geography field trip to a river valley), assessed with
//     multiple choice + completion.
//   • Section 4 - an academic LECTURE / monologue (here: the history of bridge
//     building and architecture), assessed with note/sentence completion +
//     multiple choice.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_8: ListeningTest[] = [
  {
    id: 'ls-academic-8',
    title:
      'Practice Test 8 - Booking a Dental Check-up, A Recycling Centre Tour, A Geography Field Trip & The History of Bridges',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-8-s1',
        title: 'Section 1 - Booking a dental check-up',
        // ~270 words. Transactional dialogue (Section 1 style): a caller booking
        // a routine dental check-up over the phone. A surname is spelled and a
        // mobile number is dictated; one detail (the appointment fee) depends on a
        // stated choice (whether the caller is a registered NHS patient or paying
        // privately), mirroring the form/note-completion + multiple-choice mix of a
        // real Section 1.
        transcript: `WOMAN: Good morning, Elmwood Dental Surgery, this is Rachel speaking. How can I help you?

MAN: Hello, I'd like to book a routine check-up, please. I'm a new patient.

WOMAN: Of course. Let me take a few details to register you. Could I have your name?

MAN: Yes, it's Gregory Hartnell. Hartnell is spelled H-A-R-T-N-E-L-L.

WOMAN: Thank you, Gregory. And the best telephone number to reach you on?

MAN: It's oh-seven-eight-double-three, five-one-nine, two-four-six.

WOMAN: Lovely. Now, are you registering as an NHS patient, or would you prefer to be seen privately?

MAN: What's the difference in cost?

WOMAN: A standard NHS check-up is twenty-three pounds. A private check-up is forty pounds, but the appointment is longer and includes a scale and polish.

MAN: I'll go private, then - I'd like the cleaning included.

WOMAN: A good choice. Now, the dentist you'll see is Dr Okonkwo, and she works Tuesdays and Thursdays. The first free slot is Thursday the ninth, at quarter past ten in the morning. Does that suit?

MAN: That's perfect.

WOMAN: Wonderful. Please arrive ten minutes early to complete a medical history form. And if you've had any treatment elsewhere recently, do bring any X-rays you have.

MAN: Will do. Where exactly is the surgery?

WOMAN: We're at fourteen Bridge Street, just opposite the post office. There's free parking at the rear.

MAN: Brilliant. Thank you so much for your help.

WOMAN: You're very welcome. We'll see you on Thursday.`,
        questions: [
          {
            id: 'ls-008-s1-q1',
            type: 'gap',
            prompt:
              'Complete the registration form. Write ONE WORD for the answer.\n\nPatient surname: ____________',
            acceptableAnswers: ['Hartnell', 'hartnell'],
            explanation:
              'The caller gives his name as “Gregory Hartnell” and spells the surname out: H-A-R-T-N-E-L-L. In Section 1, surnames are almost always spelled aloud - write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-008-s1-q2',
            type: 'gap',
            prompt: 'Contact number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07833519246', '0783 3519246', '07833 519 246', '078 33 519 246'],
            explanation:
              'The number is dictated as “oh-seven-eight-double-three, five-one-nine, two-four-six”, which is 07833519246. “Double three” means two 3s and “oh” means zero - spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-008-s1-q3',
            type: 'mcq',
            prompt: 'How much will the man pay for his check-up?',
            options: [
              'Twenty-three pounds, as a standard NHS patient',
              'Forty pounds, because he chooses a private appointment',
              'Twenty-three pounds, with the cleaning included',
              'Forty pounds, because he is a new patient',
            ],
            correctIndex: 1,
            explanation:
              'An NHS check-up is “twenty-three pounds”, but a private check-up “is forty pounds… and includes a scale and polish.” Because he says, “I’ll go private, then - I’d like the cleaning included,” he pays £40. The distractors reuse the real figures but give the wrong reason.',
          },
          {
            id: 'ls-008-s1-q4',
            type: 'gap',
            prompt:
              'The man chooses the private check-up so that a scale and ____________ is included. Write ONE WORD.',
            acceptableAnswers: ['polish'],
            explanation:
              'She explains the private check-up “includes a scale and polish”, and he picks it because he wants “the cleaning included.” The missing word is “polish”.',
          },
          {
            id: 'ls-008-s1-q5',
            type: 'gap',
            prompt: 'The dentist the man will see is Dr ____________. Write ONE WORD.',
            acceptableAnswers: ['Okonkwo', 'okonkwo'],
            explanation:
              'She says, “the dentist you’ll see is Dr Okonkwo, and she works Tuesdays and Thursdays.” The name is “Okonkwo”.',
          },
          {
            id: 'ls-008-s1-q6',
            type: 'gap',
            prompt: 'The appointment is booked for Thursday the ____________. Write A NUMBER.',
            acceptableAnswers: ['9', 'ninth', '9th'],
            explanation:
              'She offers “Thursday the ninth, at quarter past ten in the morning”, which the man accepts. The date is the 9th - ordinal numbers said aloud (ninth) map to the digits 9.',
          },
          {
            id: 'ls-008-s1-q7',
            type: 'gap',
            prompt: 'The appointment time is ____________ in the morning. Write the time you hear.',
            acceptableAnswers: [
              '10.15',
              '10:15',
              'quarter past ten',
              'quarter-past ten',
              'ten fifteen',
              '10 15',
            ],
            explanation:
              'She offers the slot “at quarter past ten in the morning”, i.e. 10.15 am. Times written as “10.15”, “10:15” or “quarter past ten” are all acceptable.',
          },
          {
            id: 'ls-008-s1-q8',
            type: 'gap',
            prompt:
              'The man must arrive ten minutes early to complete a medical ____________ form. Write ONE WORD.',
            acceptableAnswers: ['history'],
            explanation:
              'She says, “Please arrive ten minutes early to complete a medical history form.” The missing word is “history”.',
          },
          {
            id: 'ls-008-s1-q9',
            type: 'gap',
            prompt:
              'If he has had recent treatment elsewhere, the man should bring any ____________ he has. Write ONE WORD.',
            acceptableAnswers: ['X-rays', 'x-rays', 'xrays', 'x rays'],
            explanation:
              'She says, “if you’ve had any treatment elsewhere recently, do bring any X-rays you have.” The answer is “X-rays” (hyphenated/spaced forms accepted).',
          },
          {
            id: 'ls-008-s1-q10',
            type: 'gap',
            prompt: 'The surgery is at fourteen ____________ Street. Write ONE WORD.',
            acceptableAnswers: ['Bridge', 'bridge'],
            explanation:
              'She gives the address as “fourteen Bridge Street, just opposite the post office.” The street is “Bridge”.',
          },
        ],
      },
      {
        id: 'ls-academic-8-s2',
        title: 'Section 2 - A guided tour of a recycling centre',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // welcoming a group of visitors to a community recycling centre and
        // explaining the layout, rules and process. Uses sequencing/signpost
        // language ("first", "next", "finally") that the questions follow in
        // order, with a sentence/note-completion + multiple-choice mix.
        transcript: `Hello everyone, and welcome to the Greenway Recycling Centre. My name is Paul, and I'll be your guide this morning. Before we set off, let me explain how the site works and a few rules to keep everyone safe.

First, a word about safety. This is a working site with vehicles moving around, so you must stay on the marked yellow path at all times, and please keep children holding an adult's hand throughout the visit.

Now, let me explain how the centre is laid out. As you came in, you'll have noticed the large bays on your right. Each bay takes a different material - there's one for glass, one for paper and card, one for garden waste, and one for metal. The most common mistake visitors make is putting plastic bottles in with the glass, so do look carefully at the signs.

Next, we'll visit the sorting hall, which is the heart of the operation. Here, items travel along a moving belt and our staff remove anything that's been put in the wrong place by hand. I think you'll be surprised how much ends up in the wrong bin.

After the sorting hall, we'll stop at the shop. This is something people often don't expect - we repair and sell furniture and bicycles that would otherwise be thrown away, and all the money raised goes to local schools.

Finally, a reminder for your own visits. The centre is open every day except Wednesday, and the busiest time is Saturday morning, so if you'd rather avoid the queues, come on a weekday afternoon. Right, let's begin - please follow me and stay together.`,
        questions: [
          {
            id: 'ls-008-s2-q11',
            type: 'mcq',
            prompt: 'What is the main safety rule the guide gives at the start?',
            options: [
              'Visitors must wear high-visibility jackets',
              'Visitors must stay on the marked yellow path',
              'Visitors must not take photographs on site',
              'Visitors must remain inside the sorting hall',
            ],
            correctIndex: 1,
            explanation:
              'He says, “you must stay on the marked yellow path at all times, and please keep children holding an adult’s hand.” Option B matches the rule he gives; the others are not mentioned.',
          },
          {
            id: 'ls-008-s2-q12',
            type: 'gap',
            prompt:
              'On the right as visitors enter are large ____________, each for a different material. Write ONE WORD.',
            acceptableAnswers: ['bays', 'bay'],
            explanation:
              'He says, “you’ll have noticed the large bays on your right. Each bay takes a different material.” The answer is “bays”.',
          },
          {
            id: 'ls-008-s2-q13',
            type: 'mcq',
            prompt: 'What does the guide say is the most common mistake visitors make?',
            options: [
              'Leaving garden waste in plastic bags',
              'Putting plastic bottles in with the glass',
              'Mixing paper and card in separate bays',
              'Bringing metal that cannot be recycled',
            ],
            correctIndex: 1,
            explanation:
              'He warns, “The most common mistake visitors make is putting plastic bottles in with the glass, so do look carefully at the signs.” Option B matches.',
          },
          {
            id: 'ls-008-s2-q14',
            type: 'gap',
            prompt:
              'In the sorting hall, items travel along a moving ____________. Write ONE WORD.',
            acceptableAnswers: ['belt'],
            explanation:
              'He says, “items travel along a moving belt and our staff remove anything that’s been put in the wrong place by hand.” The answer is “belt”.',
          },
          {
            id: 'ls-008-s2-q15',
            type: 'gap',
            prompt:
              'In the sorting hall, staff remove wrongly placed items by ____________. Write ONE WORD.',
            acceptableAnswers: ['hand'],
            explanation:
              'He says staff “remove anything that’s been put in the wrong place by hand.” The answer is “hand”.',
          },
          {
            id: 'ls-008-s2-q16',
            type: 'mcq',
            prompt: 'What does the centre sell in its shop?',
            options: [
              'Glass and metal sorted from the bays',
              'Repaired furniture and bicycles',
              'Garden compost made on site',
              'Tools donated by local businesses',
            ],
            correctIndex: 1,
            explanation:
              'He says, “we repair and sell furniture and bicycles that would otherwise be thrown away.” Option B matches what the shop sells.',
          },
          {
            id: 'ls-008-s2-q17',
            type: 'gap',
            prompt: 'The money raised by the shop goes to local ____________. Write ONE WORD.',
            acceptableAnswers: ['schools', 'school'],
            explanation:
              'He says, “all the money raised goes to local schools.” The answer is “schools”.',
          },
          {
            id: 'ls-008-s2-q18',
            type: 'gap',
            prompt:
              'The centre is open every day except ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Wednesday', 'wednesday', 'Wednesdays', 'wednesdays'],
            explanation:
              'He says, “The centre is open every day except Wednesday.” The answer is “Wednesday”.',
          },
          {
            id: 'ls-008-s2-q19',
            type: 'mcq',
            prompt: 'When does the guide suggest visiting to avoid the queues?',
            options: [
              'On a weekday afternoon',
              'On a Saturday morning',
              'As soon as the centre opens',
              'On any day except Wednesday',
            ],
            correctIndex: 0,
            explanation:
              'He says the busiest time is Saturday morning, “so if you’d rather avoid the queues, come on a weekday afternoon.” Option A matches; Saturday morning is the time to avoid.',
          },
          {
            id: 'ls-008-s2-q20',
            type: 'gap',
            prompt:
              'Throughout the visit, children must keep holding an ____________ hand. Write ONE WORD.',
            acceptableAnswers: ["adult's", 'adults', 'adult'],
            explanation:
              'He asks visitors to “keep children holding an adult’s hand throughout the visit.” The answer is “adult’s” (the possessive; “adult” is accepted).',
          },
        ],
      },
      {
        id: 'ls-academic-8-s3',
        title: 'Section 3 - Tutorial: planning a geography field trip',
        // ~290 words. Academic discussion (Section 3 style): two students (Leah and
        // Sam) and a tutor (Dr Mendoza) plan a geography field trip to a river
        // valley. Speakers debate logistics, method and equipment, so the questions
        // mix multiple choice (decisions/opinions) with completion (concrete
        // details).
        transcript: `DR MENDOZA: Right, Leah and Sam, let's finalise the plan for your river fieldwork. Where have you decided to go?

LEAH: We're heading to the Calder Valley. We want to measure how the river changes as you move downstream - width, depth and the speed of the flow.

DR MENDOZA: A solid choice. How many sites along the river will you study?

SAM: We're planning five sites, spaced about a kilometre apart, starting near the source.

DR MENDOZA: Good. And what's the most important piece of equipment you'll need?

LEAH: A tape measure for the width, and a metre stick for the depth. But for the speed, we'll use a float - just a small cork - and time how long it takes to travel ten metres.

DR MENDOZA: Sensible and cheap. One word of warning about the float method: take several readings at each site and use the average, because a single reading can be thrown off by the wind.

SAM: Good point. We'll do three runs at each spot.

DR MENDOZA: Now, safety. Rivers can be deceptive. What's your plan there?

LEAH: We'll all wear wellington boots, and nobody enters water above the knee. We're also taking a first-aid kit.

DR MENDOZA: Essential. And the weather - have you checked the forecast?

SAM: We have. If there's heavy rain the day before, we'll postpone, because the river rises fast and the banks get slippery.

DR MENDOZA: Very wise. My last suggestion: don't try to visit all five sites in one day. Split it across two - you'll get far more accurate measurements if you're not rushing.

LEAH: That makes sense. We'll book the minibus for both days.`,
        questions: [
          {
            id: 'ls-008-s3-q21',
            type: 'gap',
            prompt:
              'The students have decided to do their fieldwork in the ____________ Valley. Write ONE WORD.',
            acceptableAnswers: ['Calder', 'calder'],
            explanation: 'Leah says, “We’re heading to the Calder Valley.” The answer is “Calder”.',
          },
          {
            id: 'ls-008-s3-q22',
            type: 'mcq',
            prompt: 'What do the students mainly want to measure?',
            options: [
              'How the river’s width, depth and flow change downstream',
              'How the temperature of the water changes over a day',
              'How many types of plant grow along the riverbank',
              'How the river’s colour changes after rainfall',
            ],
            correctIndex: 0,
            explanation:
              'Leah says, “We want to measure how the river changes as you move downstream - width, depth and the speed of the flow.” Option A matches the aim exactly.',
          },
          {
            id: 'ls-008-s3-q23',
            type: 'gap',
            prompt: 'They plan to study ____________ sites along the river. Write A NUMBER.',
            acceptableAnswers: ['5', 'five'],
            explanation:
              'Sam says, “We’re planning five sites, spaced about a kilometre apart, starting near the source.” The answer is 5.',
          },
          {
            id: 'ls-008-s3-q24',
            type: 'gap',
            prompt:
              'To measure the depth of the river, the students will use a metre ____________. Write ONE WORD.',
            acceptableAnswers: ['stick'],
            explanation:
              'Leah says, “A tape measure for the width, and a metre stick for the depth.” The answer is “stick” - the tape measure is for width, a deliberate distractor.',
          },
          {
            id: 'ls-008-s3-q25',
            type: 'mcq',
            prompt: 'How will the students measure the speed of the river’s flow?',
            options: [
              'By using an electronic flow meter',
              'By timing a floating cork over ten metres',
              'By counting ripples on the surface',
              'By measuring the depth at each site',
            ],
            correctIndex: 1,
            explanation:
              'Leah says, “for the speed, we’ll use a float - just a small cork - and time how long it takes to travel ten metres.” Option B matches.',
          },
          {
            id: 'ls-008-s3-q26',
            type: 'gap',
            prompt:
              'Dr Mendoza warns that a single float reading can be thrown off by the ____________. Write ONE WORD.',
            acceptableAnswers: ['wind'],
            explanation:
              'He warns, “take several readings at each site and use the average, because a single reading can be thrown off by the wind.” The answer is “wind”.',
          },
          {
            id: 'ls-008-s3-q27',
            type: 'gap',
            prompt:
              'To improve accuracy, the students will do ____________ runs at each spot. Write A NUMBER.',
            acceptableAnswers: ['3', 'three'],
            explanation:
              'Following the tutor’s advice to take an average, Sam says, “We’ll do three runs at each spot.” The answer is 3.',
          },
          {
            id: 'ls-008-s3-q28',
            type: 'mcq',
            prompt: 'What is the students’ main safety rule in the water?',
            options: [
              'Nobody enters water above the knee',
              'Everyone must be able to swim',
              'They will work only in pairs',
              'They will stay on the riverbank at all times',
            ],
            correctIndex: 0,
            explanation:
              'Leah says, “We’ll all wear wellington boots, and nobody enters water above the knee.” Option A is the rule she states.',
          },
          {
            id: 'ls-008-s3-q29',
            type: 'gap',
            prompt:
              'If there is heavy rain the day before, the students will ____________ the trip. Write ONE WORD.',
            acceptableAnswers: ['postpone', 'cancel', 'delay'],
            explanation:
              'Sam says, “If there’s heavy rain the day before, we’ll postpone, because the river rises fast and the banks get slippery.” The answer is “postpone” (cancel/delay accepted as close synonyms).',
          },
          {
            id: 'ls-008-s3-q30',
            type: 'mcq',
            prompt: 'What is Dr Mendoza’s final piece of advice?',
            options: [
              'To visit all five sites in a single day',
              'To split the fieldwork across two days',
              'To start at the river’s mouth instead of its source',
              'To reduce the number of sites to three',
            ],
            correctIndex: 1,
            explanation:
              'He says, “don’t try to visit all five sites in one day. Split it across two - you’ll get far more accurate measurements if you’re not rushing.” Option B matches.',
          },
        ],
      },
      {
        id: 'ls-academic-8-s4',
        title: 'Section 4 - Lecture: the history of bridges',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the history of bridge building
        // and architecture. Dense, factual and signposted ("let me begin", "by
        // the", "finally"), with the note/sentence-completion + multiple-choice mix
        // typical of Section 4, including one True/False/Not Given item.
        transcript: `Good afternoon. Today I want to trace the long history of one of humanity's most useful structures - the bridge. Bridges let us cross rivers, valleys and even seas, and the story of how they were built is really the story of engineering itself.

Let me begin with the earliest bridges. The very first were almost certainly nothing more than a tree trunk fallen across a stream, or a row of flat stepping stones. These are known as beam bridges, and the principle is simple: a flat span supported at each end. The drawback is that a beam can only stretch so far before it sags or breaks under its own weight.

The great breakthrough came with the arch. It was the Romans who truly mastered arched bridges, building them from stone wedges called voussoirs. The clever thing about an arch is that the weight pushes outwards and downwards into the supports, rather than straight down, so it can carry far heavier loads and span much wider gaps. Remarkably, many Roman bridges are still standing today.

For centuries, stone and timber were the only options. Everything changed in the eighteenth century with the arrival of iron. The world's first major iron bridge was built in England in 1779, and it proved that metal could carry enormous weight.

By the nineteenth century, engineers were building suspension bridges, where the roadway hangs from huge cables strung between tall towers. This design can span the greatest distances of all, which is why it is used for the longest bridges in the world.

Finally, a word on materials today. Most large modern bridges are built from steel and reinforced concrete - that is, concrete strengthened with steel bars inside. We'll look at how engineers test these designs next week.`,
        questions: [
          {
            id: 'ls-008-s4-q31',
            type: 'gap',
            prompt:
              'A flat span supported at each end is known as a ____________ bridge. Write ONE WORD.',
            acceptableAnswers: ['beam'],
            explanation:
              'The speaker says the earliest bridges, like a fallen trunk or stepping stones, “are known as beam bridges, and the principle is simple: a flat span supported at each end.” The answer is “beam”.',
          },
          {
            id: 'ls-008-s4-q32',
            type: 'mcq',
            prompt: 'What is the main drawback of a beam bridge, according to the lecture?',
            options: [
              'It is difficult to build over water',
              'It sags or breaks if the span is too long',
              'It can only be made from timber',
              'It cannot carry people, only goods',
            ],
            correctIndex: 1,
            explanation:
              'She says, “a beam can only stretch so far before it sags or breaks under its own weight.” Option B matches the drawback.',
          },
          {
            id: 'ls-008-s4-q33',
            type: 'mcq',
            prompt: 'Who does the speaker say truly mastered the arched bridge?',
            options: ['The Greeks', 'The Romans', 'The Egyptians', 'The Chinese'],
            correctIndex: 1,
            explanation:
              'She says, “It was the Romans who truly mastered arched bridges, building them from stone wedges called voussoirs.” Option B is correct.',
          },
          {
            id: 'ls-008-s4-q34',
            type: 'gap',
            prompt:
              'The Romans built their arches from stone wedges called ____________. Write ONE WORD.',
            acceptableAnswers: ['voussoirs', 'voussoir'],
            explanation:
              'She says the Romans built arches “from stone wedges called voussoirs.” The missing word is “voussoirs”.',
          },
          {
            id: 'ls-008-s4-q35',
            type: 'mcq',
            prompt: 'Why can an arch carry heavier loads than a beam?',
            options: [
              'Because the weight pushes outwards and downwards into the supports',
              'Because it is always made of stronger material',
              'Because it is built much closer to the water',
              'Because it uses far fewer building blocks',
            ],
            correctIndex: 0,
            explanation:
              'She explains, “the weight pushes outwards and downwards into the supports, rather than straight down, so it can carry far heavier loads and span much wider gaps.” Option A matches.',
          },
          {
            id: 'ls-008-s4-q36',
            type: 'gap',
            prompt:
              'The world’s first major iron bridge was built in England in the year ____________. Write A NUMBER.',
            acceptableAnswers: ['1779'],
            explanation:
              'She says, “The world’s first major iron bridge was built in England in 1779.” The answer is 1779.',
          },
          {
            id: 'ls-008-s4-q37',
            type: 'gap',
            prompt:
              'In a suspension bridge, the roadway hangs from huge ____________ strung between tall towers. Write ONE WORD.',
            acceptableAnswers: ['cables', 'cable'],
            explanation:
              'She says engineers built “suspension bridges, where the roadway hangs from huge cables strung between tall towers.” The answer is “cables”.',
          },
          {
            id: 'ls-008-s4-q38',
            type: 'tfng',
            prompt:
              'The speaker says that suspension bridges can span greater distances than any other design.',
            answer: 'true',
            explanation:
              'She says the suspension design “can span the greatest distances of all, which is why it is used for the longest bridges in the world.” The statement matches, so it is True.',
          },
          {
            id: 'ls-008-s4-q39',
            type: 'mcq',
            prompt: 'What does the speaker say about Roman bridges?',
            options: [
              'They were all destroyed within a few centuries',
              'Many of them are still standing today',
              'They were built only from timber',
              'They were narrower than modern bridges',
            ],
            correctIndex: 1,
            explanation:
              'She says, “Remarkably, many Roman bridges are still standing today.” Option B matches.',
          },
          {
            id: 'ls-008-s4-q40',
            type: 'gap',
            prompt:
              'Most large modern bridges are built from steel and reinforced ____________. Write ONE WORD.',
            acceptableAnswers: ['concrete'],
            explanation:
              'She says, “Most large modern bridges are built from steel and reinforced concrete - that is, concrete strengthened with steel bars inside.” The answer is “concrete”.',
          },
        ],
      },
    ],
  },
]
