// ─── IELTS Academic Listening — practice test data (Set 9) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a phone call to
//     book a pitch at a campsite), assessed with form / note completion + a
//     multiple-choice item. A surname is spelled and a mobile number is
//     dictated, and one detail (the nightly price) depends on a stated choice
//     (tent vs. campervan pitch).
//   • Section 2 — an everyday MONOLOGUE (here: a welcome talk for visitors to a
//     public aquarium), assessed with sentence completion + multiple choice,
//     carrying signpost language ("first", "next", "finally") that the
//     questions track in order.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor
//     planning a small-business plan for an enterprise module), assessed with
//     multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: the migration of
//     birds), assessed with note/sentence completion + multiple choice.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_9: ListeningTest[] = [
  {
    id: 'ls-academic-9',
    title:
      'Practice Test 9 — Booking a Campsite Pitch, A Talk at an Aquarium, Planning a Small Business & The Migration of Birds',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-9-s1',
        title: 'Section 1 — Booking a campsite pitch',
        // ~280 words. Transactional dialogue (Section 1 style): a caller phoning
        // a campsite to reserve a pitch. A surname is spelled and a mobile number
        // is dictated; one detail (the nightly price) depends on a stated choice
        // (a tent pitch vs. a campervan pitch), mirroring the form/note-completion
        // + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good afternoon, Birchwood Campsite, this is Olivia speaking. How can I help you?

MAN: Hello, I'd like to book a pitch for a few nights next month, please.

WOMAN: Certainly. Let me take some details. Could I start with your name?

MAN: Yes, it's Stephen Whitlock. Whitlock is spelled W-H-I-T-L-O-C-K.

WOMAN: Thank you, Mr Whitlock. And a contact number, in case we need to reach you?

MAN: It's a mobile — zero seven, nine double four, three one, six two five.

WOMAN: Let me read that back: zero seven, nine double four, three one, six two five. Lovely. Now, will you be bringing a tent or a campervan?

MAN: A campervan. There'll be two of us.

WOMAN: I see. A standard tent pitch is sixteen pounds a night, but a campervan pitch includes an electric hook-up, so that's twenty-four pounds a night.

MAN: That's fine. We'd like to arrive on the third of June and stay for four nights.

WOMAN: The third of June, four nights — that's noted. Check-in is from two o'clock in the afternoon, and we ask everyone to leave by eleven in the morning on their last day.

MAN: Understood. Are there any facilities I should know about?

WOMAN: Of course. There's a shower block beside the entrance, and a small shop that sells basics until eight in the evening. One thing to note — we don't allow campfires anywhere on the grounds, but you may use a raised barbecue.

MAN: Good to know. And is there anything I need to bring to check in?

WOMAN: Just some photo identification, please — a driving licence is perfect.

MAN: Great, thank you very much for your help.

WOMAN: You're welcome. We'll see you in June.`,
        questions: [
          {
            id: 'ls-009-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Whitlock', 'whitlock'],
            explanation:
              'The caller gives his name as “Stephen Whitlock” and spells the surname out: W-H-I-T-L-O-C-K. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-009-s1-q2',
            type: 'gap',
            prompt: 'Contact mobile number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['07944 31625', '0794431625', '07944 316 25', '079443 1625'],
            explanation:
              'He dictates the mobile as “zero seven, nine double four, three one, six two five”, and the assistant reads it back the same way, giving 07944 31625. “Double four” means two fours; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-009-s1-q3',
            type: 'mcq',
            prompt: 'What type of pitch does the man book?',
            options: [
              'A tent pitch, because it is cheaper',
              'A campervan pitch, which includes an electric hook-up',
              'A tent pitch, for two people',
              'A campervan pitch, because no electricity is available',
            ],
            correctIndex: 1,
            explanation:
              'He answers “A campervan”, and the assistant explains a campervan pitch “includes an electric hook-up, so that’s twenty-four pounds a night.” The distractors reuse real words from the audio (tent, two, electric) but none matches the booking he actually makes.',
          },
          {
            id: 'ls-009-s1-q4',
            type: 'gap',
            prompt: 'Price of the chosen pitch: £ ____________ per night. Write A NUMBER.',
            acceptableAnswers: ['24', 'twenty-four', 'twenty four'],
            explanation:
              'A tent pitch is sixteen pounds, but the campervan pitch he books “is twenty-four pounds a night.” Because he chooses the campervan (Q3), this is the price that applies — Section 1 often makes one detail depend on an earlier choice.',
          },
          {
            id: 'ls-009-s1-q5',
            type: 'gap',
            prompt: 'Date of arrival: the ____________ of June. Write A NUMBER.',
            acceptableAnswers: ['3', 'third', '3rd'],
            explanation:
              'He says, “We’d like to arrive on the third of June,” so the arrival date is the 3rd. Ordinal numbers said aloud (third) map to the digits 3.',
          },
          {
            id: 'ls-009-s1-q6',
            type: 'gap',
            prompt: 'Number of nights booked: ____________. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'He asks to “stay for four nights”, and the assistant confirms “four nights — that’s noted.” The answer is 4.',
          },
          {
            id: 'ls-009-s1-q7',
            type: 'gap',
            prompt:
              'On their last day, guests must leave by ____________ in the morning. Write A NUMBER (a time).',
            acceptableAnswers: ['11', 'eleven', '11am', '11 am'],
            explanation:
              'The assistant says, “we ask everyone to leave by eleven in the morning on their last day.” Listen for “by”, which signals a deadline — the answer is 11.',
          },
          {
            id: 'ls-009-s1-q8',
            type: 'gap',
            prompt:
              'Campfires are not allowed, but guests may use a raised ____________. Write ONE WORD.',
            acceptableAnswers: ['barbecue', 'barbeque', 'bbq'],
            explanation:
              'She explains, “we don’t allow campfires anywhere on the grounds, but you may use a raised barbecue.” The permitted item is a barbecue; “campfires” is the thing that is banned.',
          },
          {
            id: 'ls-009-s1-q9',
            type: 'gap',
            prompt: 'To check in, the man must bring some photo ____________. Write ONE WORD.',
            acceptableAnswers: ['identification', 'id'],
            explanation:
              'She asks him to bring “some photo identification, please — a driving licence is perfect.” The key requirement is photo identification; “driving licence” is the example, not the gap word.',
          },
          {
            id: 'ls-009-s1-q10',
            type: 'mcq',
            prompt: 'What does the assistant say about the campsite shop?',
            options: [
              'It is located beside the shower block',
              'It sells basic items until eight in the evening',
              'It is open twenty-four hours a day',
              'It only accepts cash payments',
            ],
            correctIndex: 1,
            explanation:
              'She mentions “a small shop that sells basics until eight in the evening.” Option B matches; the shower block is beside the entrance, and nothing is said about opening hours being 24 hours or about cash payments.',
          },
        ],
      },
      {
        id: 'ls-academic-9-s2',
        title: 'Section 2 — A welcome talk at an aquarium',
        // ~265 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors to a public aquarium. Uses sequencing/signpost
        // language ("to start", "next", "finally") that the questions follow in
        // order, with a sentence-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and a very warm welcome to Seacliff Aquarium. My name is Daniel, and I'm one of the visitor guides here. Before you set off, let me explain how the visit works and point out a few highlights.

To start with, the aquarium is arranged as a single loop, so you simply follow the blue line on the floor and you'll see every exhibit in order without retracing your steps. The whole route takes most families about ninety minutes, though you're welcome to take longer.

The first zone you'll enter is the Rockpool Room. This is the only area where you may gently touch the animals — under the supervision of our staff, of course. Please remember to wash your hands at the basins provided before you move on, as this protects both you and the creatures.

Next comes our most popular attraction: the underwater tunnel. As you walk through, sharks and rays glide directly above your head. I'd suggest visiting it before midday, because it becomes very crowded in the afternoon and you'll get a much clearer view in the morning.

After the tunnel, you'll reach the feeding station. Our divers feed the largest tank at half past two every day, and they answer questions through underwater microphones while they work. It's well worth timing your visit to catch it.

Finally, a couple of practical points. Photography is welcome throughout, but please switch off your flash, as it disturbs the fish. And our café on the upper floor stops serving hot food at four o'clock, so do plan accordingly. That's everything — please enjoy your visit.`,
        questions: [
          {
            id: 'ls-009-s2-q11',
            type: 'mcq',
            prompt: 'How are visitors advised to move around the aquarium?',
            options: [
              'By choosing whichever exhibits interest them',
              'By following a blue line that forms a single loop',
              'By joining a guided group at the entrance',
              'By taking a lift between the different floors',
            ],
            correctIndex: 1,
            explanation:
              'He explains the aquarium “is arranged as a single loop, so you simply follow the blue line on the floor and you’ll see every exhibit in order.” Option B matches; the other routes are not described.',
          },
          {
            id: 'ls-009-s2-q12',
            type: 'gap',
            prompt:
              'The visit around the whole route takes most families about ____________ minutes. Write A NUMBER.',
            acceptableAnswers: ['90', 'ninety'],
            explanation:
              'He says, “The whole route takes most families about ninety minutes.” The answer is 90 — numbers said as words still count, but writing the digits is safest.',
          },
          {
            id: 'ls-009-s2-q13',
            type: 'gap',
            prompt:
              'The Rockpool Room is the only area where visitors may gently ____________ the animals. Write ONE WORD.',
            acceptableAnswers: ['touch'],
            explanation:
              'He describes the Rockpool Room as “the only area where you may gently touch the animals — under the supervision of our staff.” The answer is “touch”.',
          },
          {
            id: 'ls-009-s2-q14',
            type: 'gap',
            prompt:
              'Before leaving the Rockpool Room, visitors must wash their ____________ at the basins. Write ONE WORD.',
            acceptableAnswers: ['hands'],
            explanation:
              'He reminds visitors to “wash your hands at the basins provided before you move on, as this protects both you and the creatures.” The answer is “hands”.',
          },
          {
            id: 'ls-009-s2-q15',
            type: 'mcq',
            prompt: 'Why does the guide suggest visiting the underwater tunnel before midday?',
            options: [
              'The sharks are more active in the morning',
              'It becomes very crowded in the afternoon, so the morning gives a clearer view',
              'The tunnel closes for cleaning after lunch',
              'Photography is only permitted in the morning',
            ],
            correctIndex: 1,
            explanation:
              'He advises visiting “before midday, because it becomes very crowded in the afternoon and you’ll get a much clearer view in the morning.” Option B captures the reason; the others are not stated.',
          },
          {
            id: 'ls-009-s2-q16',
            type: 'gap',
            prompt: 'The divers feed the largest tank at ____________ every day. Write A TIME.',
            acceptableAnswers: ['2.30', '2:30', 'half past two', '2.30pm', '2:30pm', 'half past 2'],
            explanation:
              'He says, “Our divers feed the largest tank at half past two every day.” Half past two is written 2.30 — listen for the exact clock time.',
          },
          {
            id: 'ls-009-s2-q17',
            type: 'mcq',
            prompt: 'What do the divers do while they feed the largest tank?',
            options: [
              'They hand out food to visitors',
              'They answer questions through underwater microphones',
              'They give a short talk from the side of the tank',
              'They take photographs of the fish',
            ],
            correctIndex: 1,
            explanation:
              'He notes the divers “answer questions through underwater microphones while they work.” Option B matches the audio precisely.',
          },
          {
            id: 'ls-009-s2-q18',
            type: 'gap',
            prompt:
              'Photography is allowed, but visitors must switch off their ____________. Write ONE WORD.',
            acceptableAnswers: ['flash'],
            explanation:
              'He says, “Photography is welcome throughout, but please switch off your flash, as it disturbs the fish.” The answer is “flash”.',
          },
          {
            id: 'ls-009-s2-q19',
            type: 'gap',
            prompt:
              'The café on the upper floor stops serving hot food at ____________ o’clock. Write A NUMBER.',
            acceptableAnswers: ['4', 'four', '4pm', '4 pm'],
            explanation:
              'He warns that “our café on the upper floor stops serving hot food at four o’clock.” The answer is 4 — listen for the cut-off time.',
          },
          {
            id: 'ls-009-s2-q20',
            type: 'tfng',
            prompt: 'The underwater tunnel is described as the aquarium’s most popular attraction.',
            answer: 'true',
            explanation:
              'He introduces the tunnel with “Next comes our most popular attraction: the underwater tunnel.” The statement matches the audio exactly, so it is True.',
          },
        ],
      },
      {
        id: 'ls-academic-9-s3',
        title: 'Section 3 — Planning a small business plan',
        // ~290 words. Academic discussion (Section 3 style): two students and a
        // tutor planning a small-business plan for an enterprise module. Assessed
        // with multiple choice + completion, with opinions and decisions signalled
        // by discussion markers ("I think", "let's", "we agreed").
        transcript: `TUTOR: Right, Maya and Josh — let's go through the business plan you're submitting for the enterprise module. Have you settled on what your imaginary company will sell?

MAYA: We have. We're going to design a subscription box of locally roasted coffee, delivered monthly.

TUTOR: A nice idea. Josh, who did you decide your main customers would be?

JOSH: At first we thought we'd target offices, but we changed our minds — we're aiming at home workers instead, because that market has grown so much.

TUTOR: Sensible. Now, the plan needs several sections. Have you drafted the market research yet?

MAYA: That's the part I'm leading on. I've run a short survey, and I'm a bit worried that fifty responses isn't enough to be convincing.

TUTOR: Fifty is a reasonable start for a student project, but do acknowledge the limitation in your write-up. What about the financial forecast?

JOSH: I'm handling that. The tricky bit is the start-up cost — the roasting equipment is far more expensive than we expected.

TUTOR: Then make sure you explain how you'd fund it. Have you considered a small bank loan rather than using savings?

JOSH: We had, yes. We've decided to apply for a loan, because it keeps some cash in reserve for emergencies.

TUTOR: Good thinking. One more thing — the marketing section. How will you reach these home workers?

MAYA: Mostly through social media, but we also want to give away free samples at local markets.

TUTOR: I like the samples idea; it's memorable. Just remember to cost it properly. And when you write the conclusion, focus on what makes you different from the big coffee brands — that's your strongest argument.

JOSH: Will do. We'll emphasise the local sourcing.

TUTOR: Perfect. Send me a draft by Friday and I'll give you feedback.`,
        questions: [
          {
            id: 'ls-009-s3-q21',
            type: 'gap',
            prompt:
              'The students’ imaginary company will sell a monthly subscription box of locally roasted ____________. Write ONE WORD.',
            acceptableAnswers: ['coffee'],
            explanation:
              'Maya says, “We’re going to design a subscription box of locally roasted coffee, delivered monthly.” The product is coffee.',
          },
          {
            id: 'ls-009-s3-q22',
            type: 'mcq',
            prompt: 'Who did the students finally decide to target as their main customers?',
            options: [
              'Offices, as they had first planned',
              'Home workers, because that market has grown',
              'Local cafés that buy in bulk',
              'University students on a budget',
            ],
            correctIndex: 1,
            explanation:
              'Josh says, “At first we thought we’d target offices, but we changed our minds — we’re aiming at home workers instead, because that market has grown so much.” The offices option is the rejected first idea.',
          },
          {
            id: 'ls-009-s3-q23',
            type: 'gap',
            prompt:
              'Maya is worried that her survey of only ____________ responses is not enough to be convincing. Write A NUMBER.',
            acceptableAnswers: ['50', 'fifty'],
            explanation:
              'Maya says, “I’ve run a short survey, and I’m a bit worried that fifty responses isn’t enough to be convincing.” The number is 50.',
          },
          {
            id: 'ls-009-s3-q24',
            type: 'mcq',
            prompt: 'What does the tutor advise Maya to do about the survey’s limitation?',
            options: [
              'Collect at least another fifty responses',
              'Acknowledge the limitation in her write-up',
              'Remove the survey from the plan entirely',
              'Repeat the survey with office workers',
            ],
            correctIndex: 1,
            explanation:
              'The tutor says, “Fifty is a reasonable start for a student project, but do acknowledge the limitation in your write-up.” Option B matches the advice given.',
          },
          {
            id: 'ls-009-s3-q25',
            type: 'gap',
            prompt:
              'In the financial forecast, the trickiest item is the high start-up cost of the roasting ____________. Write ONE WORD.',
            acceptableAnswers: ['equipment'],
            explanation:
              'Josh says, “The tricky bit is the start-up cost — the roasting equipment is far more expensive than we expected.” The answer is “equipment”.',
          },
          {
            id: 'ls-009-s3-q26',
            type: 'mcq',
            prompt: 'How have the students decided to fund their start-up costs?',
            options: [
              'By using their own savings',
              'By applying for a small bank loan',
              'By finding a private investor',
              'By delaying the purchase of equipment',
            ],
            correctIndex: 1,
            explanation:
              'Josh says, “We’ve decided to apply for a loan, because it keeps some cash in reserve for emergencies.” Using savings was the alternative they did not choose.',
          },
          {
            id: 'ls-009-s3-q27',
            type: 'gap',
            prompt:
              'The students plan to reach customers mostly through social ____________. Write ONE WORD.',
            acceptableAnswers: ['media'],
            explanation:
              'Maya says they will reach home workers “mostly through social media, but we also want to give away free samples.” The answer is “media”.',
          },
          {
            id: 'ls-009-s3-q28',
            type: 'gap',
            prompt:
              'As well as social media, the students want to give away free ____________ at local markets. Write ONE WORD.',
            acceptableAnswers: ['samples'],
            explanation:
              'Maya says, “we also want to give away free samples at local markets,” and the tutor replies, “I like the samples idea.” The answer is “samples”.',
          },
          {
            id: 'ls-009-s3-q29',
            type: 'mcq',
            prompt: 'What does the tutor say the conclusion should focus on?',
            options: [
              'The total cost of the project',
              'What makes the company different from big coffee brands',
              'The results of the customer survey',
              'The choice of delivery company',
            ],
            correctIndex: 1,
            explanation:
              'The tutor advises, “when you write the conclusion, focus on what makes you different from the big coffee brands — that’s your strongest argument.” Option B matches.',
          },
          {
            id: 'ls-009-s3-q30',
            type: 'gap',
            prompt:
              'The tutor asks the students to send a draft of the plan by ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Friday', 'friday'],
            explanation:
              'The tutor concludes, “Send me a draft by Friday and I’ll give you feedback.” The deadline is Friday.',
          },
        ],
      },
      {
        id: 'ls-academic-9-s4',
        title: 'Section 4 — A lecture on the migration of birds',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // lecturer presenting on bird migration. Densely factual, with note/
        // sentence completion + multiple choice. Signpost phrases ("firstly",
        // "another", "finally") help the listener track the structure.
        transcript: `Good morning. Today we'll examine one of the most remarkable phenomena in the natural world: the migration of birds. Each year, billions of birds undertake long journeys between their breeding grounds and the regions where they spend the winter, and in this lecture I want to consider why they migrate, how they navigate, and the threats they now face.

Let's begin with the reason for migration. The driving force is not, as many assume, temperature itself, but the availability of food. As autumn approaches in the north, insects and seeds become scarce, so birds travel south to where food remains plentiful. The cost is enormous: the Arctic tern, for example, flies roughly seventy thousand kilometres in a single year, the longest migration of any animal.

How do they find their way? Birds rely on several cues at once. During the day, many use the position of the sun, while at night they orient themselves by the pattern of the stars. Perhaps most impressively, some species can detect the Earth's magnetic field, which acts like an internal compass. Young birds on their first journey appear to inherit the route instinctively, rather than learning it from their parents.

Now, migration carries great risks. Storms can blow exhausted birds off course, and predators wait at well-known resting points. But the gravest modern threat is human activity. The draining of wetlands removes the staging posts where birds refuel, and tall illuminated buildings disorient those flying at night, causing fatal collisions.

Finally, a word on conservation. Because migratory birds cross many national borders, protecting them requires international cooperation. A reserve in one country is of little use if the wintering grounds in another are destroyed. That principle of shared responsibility is the theme we'll explore next week.`,
        questions: [
          {
            id: 'ls-009-s4-q31',
            type: 'mcq',
            prompt: 'According to the lecturer, what is the main reason birds migrate?',
            options: [
              'To escape falling temperatures',
              'To follow the availability of food',
              'To avoid predators in the north',
              'To find suitable nesting materials',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer says the driving force “is not, as many assume, temperature itself, but the availability of food.” Option B is correct; temperature is the common misconception the lecturer corrects.',
          },
          {
            id: 'ls-009-s4-q32',
            type: 'gap',
            prompt:
              'As autumn approaches in the north, insects and ____________ become scarce. Write ONE WORD.',
            acceptableAnswers: ['seeds'],
            explanation:
              'The lecturer says, “insects and seeds become scarce, so birds travel south to where food remains plentiful.” The answer is “seeds”.',
          },
          {
            id: 'ls-009-s4-q33',
            type: 'gap',
            prompt:
              'The Arctic tern flies roughly ____________ kilometres in a single year. Write A NUMBER.',
            acceptableAnswers: ['70000', '70,000', 'seventy thousand'],
            explanation:
              'The lecturer states the Arctic tern “flies roughly seventy thousand kilometres in a single year, the longest migration of any animal.” Seventy thousand is written 70,000.',
          },
          {
            id: 'ls-009-s4-q34',
            type: 'gap',
            prompt:
              'During the day, many birds navigate using the position of the ____________. Write ONE WORD.',
            acceptableAnswers: ['sun'],
            explanation:
              'The lecturer says, “During the day, many use the position of the sun.” The answer is “sun”.',
          },
          {
            id: 'ls-009-s4-q35',
            type: 'gap',
            prompt:
              'At night, birds orient themselves by the pattern of the ____________. Write ONE WORD.',
            acceptableAnswers: ['stars'],
            explanation:
              'The lecturer says, “at night they orient themselves by the pattern of the stars.” The answer is “stars”.',
          },
          {
            id: 'ls-009-s4-q36',
            type: 'mcq',
            prompt: 'What does the lecturer say some species can detect to help them navigate?',
            options: [
              'Changes in air pressure',
              'The Earth’s magnetic field',
              'The sound of ocean currents',
              'The scent of distant vegetation',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer notes that “some species can detect the Earth’s magnetic field, which acts like an internal compass.” Option B matches the audio.',
          },
          {
            id: 'ls-009-s4-q37',
            type: 'tfng',
            prompt: 'The lecturer says young birds learn their migration route from their parents.',
            answer: 'false',
            explanation:
              'The lecturer states the opposite: “Young birds on their first journey appear to inherit the route instinctively, rather than learning it from their parents.” The statement contradicts the audio, so it is False.',
          },
          {
            id: 'ls-009-s4-q38',
            type: 'gap',
            prompt:
              'The lecturer says the gravest modern threat to migratory birds is human ____________. Write ONE WORD.',
            acceptableAnswers: ['activity'],
            explanation:
              'The lecturer says, “the gravest modern threat is human activity,” before listing examples such as draining wetlands. The answer is “activity”.',
          },
          {
            id: 'ls-009-s4-q39',
            type: 'mcq',
            prompt: 'Why does the draining of wetlands threaten migratory birds?',
            options: [
              'It removes the staging posts where birds refuel',
              'It increases the number of predators',
              'It changes the birds’ breeding season',
              'It blocks the birds’ view of the stars',
            ],
            correctIndex: 0,
            explanation:
              'The lecturer explains, “The draining of wetlands removes the staging posts where birds refuel.” Option A matches; the other harms (predators, breeding, navigation) are not linked to wetlands here.',
          },
          {
            id: 'ls-009-s4-q40',
            type: 'gap',
            prompt:
              'Because migratory birds cross many borders, protecting them requires international ____________. Write ONE WORD.',
            acceptableAnswers: ['cooperation', 'co-operation', 'collaboration'],
            explanation:
              'The lecturer concludes, “protecting them requires international cooperation,” because a reserve in one country is useless if the wintering grounds elsewhere are destroyed. The answer is “cooperation”.',
          },
        ],
      },
    ],
  },
]
