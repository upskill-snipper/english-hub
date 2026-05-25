// ─── IELTS Academic Listening — practice test data (Set 5) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// Unlike the earlier two-section warm-ups, this set ships ONE original FULL-LENGTH
// practice test: all four sections (~40 questions) that mirror the real IELTS
// Listening paper, with topics deliberately distinct from the other sets:
//   • Section 1 — an everyday transactional DIALOGUE (here: booking places on a
//     weekend photography workshop), assessed with form / note completion + a
//     multiple-choice item. A surname is spelled and a phone number is dictated,
//     and one detail (the price) depends on a stated choice.
//   • Section 2 — an everyday MONOLOGUE (here: a welcome announcement / tour of a
//     wildlife park), assessed with sentence completion + multiple choice, carrying
//     signpost language ("first", "next", "finally") that the questions track.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor reviewing
//     a group field-study project on urban rivers), assessed with multiple choice
//     + completion.
//   • Section 4 — an academic LECTURE / monologue (here: the science of sleep),
//     assessed with note/sentence completion + multiple choice.
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

export const LISTENING_SET_5: ListeningTest[] = [
  {
    id: 'ls-academic-5',
    title:
      'Practice Test 5 — Photography Workshop, Wildlife Park, Urban Rivers & The Science of Sleep',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-5-s1',
        title: 'Section 1 — Booking a weekend photography workshop',
        // ~270 words. Transactional dialogue (Section 1 style): a caller booking
        // places on a workshop over the phone. A surname is spelled and a mobile
        // number is dictated; one detail (the total price) depends on a stated
        // choice (number of people), mirroring the form/note-completion +
        // multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good morning, Brightlight Photography Courses, this is Elena speaking. How can I help?

MAN: Hi, I'd like to book onto one of your weekend workshops, please.

WOMAN: Of course. Let me take a few details first. Could I have your name?

MAN: Yes, it's Jacob Mercer. Mercer is spelled M-E-R-C-E-R.

WOMAN: Thank you, Jacob. And a mobile number in case we need to reach you?

MAN: It's oh-seven-eight-double-three, five-nine-two, one-four-six.

WOMAN: Lovely, I've got that. Now, which workshop did you have in mind?

MAN: The Landscape one — I think it's running on the Saturday.

WOMAN: That's right, the Landscape workshop. We actually offer it twice a month, and the next one is on the eighth. It runs from nine in the morning until about four in the afternoon, with a break for lunch.

MAN: Great. And how much is it?

WOMAN: It's sixty pounds for one person, but if you book two or more places together, it drops to fifty pounds each.

MAN: In that case, could I book two? My sister wants to come as well.

WOMAN: Certainly — so that's two places at the lower rate. One more thing: you'll need to bring your own camera, but we provide the tripods.

MAN: Perfect. Is there anything else I should know?

WOMAN: Just wear sturdy boots, as we walk out to the cliffs, and the ground can be uneven. We meet in the car park behind the old lighthouse.

MAN: Brilliant. Thank you so much for your help.

WOMAN: You're very welcome. See you on the eighth.`,
        questions: [
          {
            id: 'ls-005-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Mercer', 'mercer'],
            explanation:
              'The caller gives his name as “Jacob Mercer” and spells the surname out: M-E-R-C-E-R. In Section 1, surnames are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-005-s1-q2',
            type: 'gap',
            prompt: 'Mobile number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07833592146', '0783 3592146', '07833 592 146', '078 33 592 146'],
            explanation:
              'The number is dictated as “oh-seven-eight-double-three, five-nine-two, one-four-six”, which is 07833592146. “Double three” means two 3s and “oh” means zero — spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-005-s1-q3',
            type: 'gap',
            prompt: 'Workshop chosen: the ____________ workshop. Write ONE WORD.',
            acceptableAnswers: ['Landscape', 'landscape'],
            explanation:
              'He asks for “The Landscape one”, and the assistant confirms “the Landscape workshop”. The answer is the single word “Landscape”.',
          },
          {
            id: 'ls-005-s1-q4',
            type: 'gap',
            prompt: 'Date of the next workshop: the ____________. Write A NUMBER.',
            acceptableAnswers: ['8', 'eighth', '8th'],
            explanation:
              'She says “the next one is on the eighth”, and confirms at the end “See you on the eighth.” The date is the 8th — ordinal numbers said aloud (eighth) map to the digits 8.',
          },
          {
            id: 'ls-005-s1-q5',
            type: 'gap',
            prompt: 'The workshop finishes at about ____________ in the afternoon. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'She says it “runs from nine in the morning until about four in the afternoon.” The finish time is 4 — listen for “until”, which signals the end point, versus “from”, which signals the start.',
          },
          {
            id: 'ls-005-s1-q6',
            type: 'mcq',
            prompt: 'How much will each person pay for the man’s booking?',
            options: [
              'Sixty pounds, the standard price for one person',
              'Fifty pounds, because two places are booked together',
              'Sixty pounds, because the tripods are included',
              'Fifty pounds, because his sister is a student',
            ],
            correctIndex: 1,
            explanation:
              'The price is “sixty pounds for one person, but if you book two or more places together, it drops to fifty pounds each.” Because he books two places (for himself and his sister), they pay the lower rate of fifty pounds each. The distractors reuse the real prices but give the wrong reason.',
          },
          {
            id: 'ls-005-s1-q7',
            type: 'gap',
            prompt:
              'Participants must bring their own ____________, but the tripods are provided. Write ONE WORD.',
            acceptableAnswers: ['camera'],
            explanation:
              'She says, “you’ll need to bring your own camera, but we provide the tripods.” The answer is “camera” — the tripods are what the company supplies, a classic near-miss distractor.',
          },
          {
            id: 'ls-005-s1-q8',
            type: 'gap',
            prompt:
              'The assistant advises wearing sturdy ____________ because the ground is uneven. Write ONE WORD.',
            acceptableAnswers: ['boots', 'shoes', 'footwear'],
            explanation:
              'She says, “Just wear sturdy boots, as we walk out to the cliffs, and the ground can be uneven.” The answer is “boots” (shoes/footwear accepted as synonyms).',
          },
          {
            id: 'ls-005-s1-q9',
            type: 'gap',
            prompt: 'The group meets in the car park behind the old ____________. Write ONE WORD.',
            acceptableAnswers: ['lighthouse', 'light-house'],
            explanation:
              'She says, “We meet in the car park behind the old lighthouse.” The meeting point is the “lighthouse”.',
          },
          {
            id: 'ls-005-s1-q10',
            type: 'mcq',
            prompt: 'How often is the Landscape workshop offered?',
            options: ['Once a week', 'Twice a month', 'Once a month', 'Every weekend'],
            correctIndex: 1,
            explanation:
              'She says, “We actually offer it twice a month, and the next one is on the eighth.” Option B matches; the other frequencies are not stated.',
          },
        ],
      },
      {
        id: 'ls-academic-5-s2',
        title: 'Section 2 — Welcome talk at a wildlife park',
        // ~265 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors to a wildlife park and explaining the layout and
        // rules. Uses sequencing/signpost language ("first", "after that",
        // "finally") that the questions follow in order, with a sentence/note-
        // completion + multiple-choice mix.
        transcript: `Good morning, everyone, and a warm welcome to Oakridge Wildlife Park. My name is Tom, and I'm one of the visitor guides. Before you set off to explore, let me run through how the park is laid out and a few important rules.

First, let me explain the route. The park is designed as a single loop, about three kilometres long, so if you simply follow the green arrows you'll pass every enclosure and arrive back here at the entrance. The full walk takes most people around two hours at a gentle pace.

After the entrance, the first area you'll reach is the wetlands, home to our otters and a large flock of flamingos. Please keep your voices low here, as the birds are easily startled, especially in the morning when they are feeding.

Next comes the woodland walk, where you'll find the deer and the wolves. A quick but important point: please do not feed any of the animals. The food you might bring can make them seriously ill, and our keepers provide a carefully balanced diet throughout the day.

One feature visitors always enjoy is the daily talks. Our keepers give a short presentation at each major enclosure, and the most popular by far is the penguin feeding, which takes place at half past two. I'd recommend arriving a few minutes early to get a good view.

Finally, a note on facilities. There's a café next to the gift shop near the exit, and it serves hot food until four. If the weather turns — and it often does here — there's a covered picnic area beside the woodland walk where you can shelter. That's everything from me. Enjoy your visit.`,
        questions: [
          {
            id: 'ls-005-s2-q11',
            type: 'mcq',
            prompt: 'How is the wildlife park designed for visitors to explore it?',
            options: [
              'As several separate trails leading off from the entrance',
              'As a single loop marked with green arrows',
              'As a grid of paths that visitors navigate with a map',
              'As a guided tour led at fixed times by a keeper',
            ],
            correctIndex: 1,
            explanation:
              'He says “The park is designed as a single loop, about three kilometres long, so if you simply follow the green arrows you’ll pass every enclosure.” Option B matches; the other layouts are not described.',
          },
          {
            id: 'ls-005-s2-q12',
            type: 'gap',
            prompt:
              'The full walk around the park is about ____________ kilometres long. Write A NUMBER.',
            acceptableAnswers: ['3', 'three'],
            explanation:
              'He describes the loop as “about three kilometres long.” The answer is 3 — note that the walk also “takes around two hours”, so two is a distractor (a time, not a distance).',
          },
          {
            id: 'ls-005-s2-q13',
            type: 'gap',
            prompt:
              'The first area visitors reach is the wetlands, home to the otters and the ____________. Write ONE WORD.',
            acceptableAnswers: ['flamingos', 'flamingoes', 'flamingo'],
            explanation:
              'He says the wetlands is “home to our otters and a large flock of flamingos.” The answer is “flamingos” (the variant spelling “flamingoes” is accepted).',
          },
          {
            id: 'ls-005-s2-q14',
            type: 'mcq',
            prompt: 'Why does the speaker ask visitors to keep their voices low at the wetlands?',
            options: [
              'Because other visitors are trying to take photographs',
              'Because the birds are easily startled, especially when feeding',
              'Because the otters sleep during the morning',
              'Because sound travels a long way across the water',
            ],
            correctIndex: 1,
            explanation:
              'He asks visitors to keep their voices low “as the birds are easily startled, especially in the morning when they are feeding.” Option B gives the stated reason; the others are plausible but not mentioned.',
          },
          {
            id: 'ls-005-s2-q15',
            type: 'gap',
            prompt:
              'In the woodland walk, visitors can see the deer and the ____________. Write ONE WORD.',
            acceptableAnswers: ['wolves', 'wolf'],
            explanation:
              'He says the woodland walk is “where you’ll find the deer and the wolves.” The answer is “wolves”.',
          },
          {
            id: 'ls-005-s2-q16',
            type: 'mcq',
            prompt: 'Why does the speaker tell visitors not to feed the animals?',
            options: [
              'Because feeding is allowed only during the keeper talks',
              'Because the food visitors bring can make the animals seriously ill',
              'Because the animals have already been fed in the morning',
              'Because visitors might run out of food before the end',
            ],
            correctIndex: 1,
            explanation:
              'He warns, “please do not feed any of the animals. The food you might bring can make them seriously ill, and our keepers provide a carefully balanced diet.” Option B captures the reason he gives.',
          },
          {
            id: 'ls-005-s2-q17',
            type: 'gap',
            prompt:
              'The most popular keeper talk is the ____________ feeding, at half past two. Write ONE WORD.',
            acceptableAnswers: ['penguin', 'penguins'],
            explanation:
              'He says “the most popular by far is the penguin feeding, which takes place at half past two.” The answer is “penguin”.',
          },
          {
            id: 'ls-005-s2-q18',
            type: 'gap',
            prompt: 'The penguin feeding takes place at ____________. Write the time you hear.',
            acceptableAnswers: [
              '2.30',
              '2:30',
              'half past two',
              'half-past two',
              '14:30',
              'two thirty',
            ],
            explanation:
              'He says the penguin feeding “takes place at half past two”, i.e. 2.30 pm. Times written as “2.30”, “2:30” or “half past two” are all acceptable.',
          },
          {
            id: 'ls-005-s2-q19',
            type: 'gap',
            prompt:
              'The café next to the gift shop serves hot food until ____________. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'He says the café “serves hot food until four.” The answer is 4 — “until” again signals the closing time.',
          },
          {
            id: 'ls-005-s2-q20',
            type: 'gap',
            prompt:
              'If it rains, visitors can shelter in the covered ____________ area beside the woodland walk. Write ONE WORD.',
            acceptableAnswers: ['picnic'],
            explanation:
              'He says, “there’s a covered picnic area beside the woodland walk where you can shelter.” The answer is “picnic”.',
          },
        ],
      },
      {
        id: 'ls-academic-5-s3',
        title: 'Section 3 — Tutorial: a field study of an urban river',
        // ~290 words. Academic discussion (Section 3 style): two students (Priya
        // and Sam) and a tutor (Dr Lawson) review a group field-study project on a
        // local river. Speakers debate methods and findings, so the questions mix
        // multiple choice (opinions/decisions) with completion (concrete details).
        transcript: `DR LAWSON: So, Priya and Sam, let's talk through your river field-study project. How did the data collection go?

PRIYA: Mostly well, but we did change our plan. We'd intended to sample the water at five points along the river, but the path was flooded near the bridge, so in the end we only managed four.

DR LAWSON: That's fine, as long as you explain why in your report. Sam, what were you measuring at each point?

SAM: Three things, mainly. The temperature, the speed of the flow, and the level of dissolved oxygen — which is the key indicator of how healthy the water is for fish.

DR LAWSON: Good. And what did you find?

SAM: The most striking result was downstream of the old factory. The oxygen level there was much lower than anywhere else, even though the factory closed years ago.

PRIYA: We think the sediment on the riverbed is still releasing pollutants. That would explain why the effect hasn't gone away.

DR LAWSON: That's a sensible interpretation, though you'll need to be careful — you've measured a correlation, not proved a cause. What about the wildlife survey?

PRIYA: That was the part I enjoyed most. We counted the different species of insect larvae, because certain types only survive in clean water. Downstream of the factory, we found almost none.

DR LAWSON: Which supports your oxygen findings nicely. Now, for the write-up, my main advice is this: don't just present the numbers. The strongest reports explain what the figures mean. And do include a map — examiners always want to see exactly where each sample was taken.

SAM: Should we mention the flooded path as a limitation?

DR LAWSON: Absolutely. Acknowledging the limits of your method shows good scientific judgement. Right — when can you have a first draft to me?

PRIYA: Would the end of next week be all right?

DR LAWSON: That's perfect. I'll read it over the weekend.`,
        questions: [
          {
            id: 'ls-005-s3-q21',
            type: 'mcq',
            prompt: 'Why did the students sample the water at fewer points than planned?',
            options: [
              'Their equipment broke down during the study',
              'A path near the bridge was flooded',
              'They ran out of time before dark',
              'The tutor advised them to reduce the number',
            ],
            correctIndex: 1,
            explanation:
              'Priya explains, “We’d intended to sample the water at five points… but the path was flooded near the bridge, so in the end we only managed four.” Option B matches; the other reasons are not mentioned.',
          },
          {
            id: 'ls-005-s3-q22',
            type: 'gap',
            prompt:
              'In the end, the students sampled the water at ____________ points. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'Priya says they had planned five points but “only managed four.” The number actually sampled is 4 — five is the planned figure, a deliberate distractor.',
          },
          {
            id: 'ls-005-s3-q23',
            type: 'gap',
            prompt:
              'At each point the students measured temperature, flow speed, and the level of dissolved ____________. Write ONE WORD.',
            acceptableAnswers: ['oxygen'],
            explanation:
              'Sam lists “the temperature, the speed of the flow, and the level of dissolved oxygen — which is the key indicator of how healthy the water is for fish.” The third measurement is dissolved “oxygen”.',
          },
          {
            id: 'ls-005-s3-q24',
            type: 'mcq',
            prompt: 'What was the most striking result of the study?',
            options: [
              'The water was warmest near the bridge',
              'The oxygen level was much lower downstream of the old factory',
              'The flow was fastest at the first sample point',
              'There were more insect larvae than expected',
            ],
            correctIndex: 1,
            explanation:
              'Sam says, “The most striking result was downstream of the old factory. The oxygen level there was much lower than anywhere else.” Option B matches the result he singles out.',
          },
          {
            id: 'ls-005-s3-q25',
            type: 'gap',
            prompt:
              'Priya suggests the ____________ on the riverbed may still be releasing pollutants. Write ONE WORD.',
            acceptableAnswers: ['sediment'],
            explanation:
              'Priya says, “We think the sediment on the riverbed is still releasing pollutants.” The answer is “sediment”.',
          },
          {
            id: 'ls-005-s3-q26',
            type: 'mcq',
            prompt: 'What caution does Dr Lawson give about the students’ interpretation?',
            options: [
              'They should collect data over a longer period',
              'They have shown a correlation, not proved a cause',
              'They should not trust the oxygen readings',
              'They need to repeat the survey in winter',
            ],
            correctIndex: 1,
            explanation:
              'Dr Lawson warns, “you’ll need to be careful — you’ve measured a correlation, not proved a cause.” Option B captures the caution exactly.',
          },
          {
            id: 'ls-005-s3-q27',
            type: 'gap',
            prompt:
              'For the wildlife survey, the students counted species of insect ____________, which only survive in clean water. Write ONE WORD.',
            acceptableAnswers: ['larvae', 'larva', 'larvas'],
            explanation:
              'Priya says, “We counted the different species of insect larvae, because certain types only survive in clean water.” The answer is “larvae”.',
          },
          {
            id: 'ls-005-s3-q28',
            type: 'mcq',
            prompt: 'What is Dr Lawson’s main piece of advice for the write-up?',
            options: [
              'To present the raw numbers in full detail',
              'To explain what the figures mean, not just present them',
              'To focus mainly on the wildlife survey',
              'To shorten the report as much as possible',
            ],
            correctIndex: 1,
            explanation:
              'He says, “don’t just present the numbers. The strongest reports explain what the figures mean.” Option B matches his main advice.',
          },
          {
            id: 'ls-005-s3-q29',
            type: 'gap',
            prompt:
              'Dr Lawson insists the report should include a ____________ showing where each sample was taken. Write ONE WORD.',
            acceptableAnswers: ['map'],
            explanation:
              'He says, “do include a map — examiners always want to see exactly where each sample was taken.” The answer is “map”.',
          },
          {
            id: 'ls-005-s3-q30',
            type: 'gap',
            prompt:
              'The students agree to send a first ____________ to the tutor by the end of next week. Write ONE WORD.',
            acceptableAnswers: ['draft'],
            explanation:
              'Dr Lawson asks, “when can you have a first draft to me?”, and Priya suggests “the end of next week.” The answer is “draft”.',
          },
        ],
      },
      {
        id: 'ls-academic-5-s4',
        title: 'Section 4 — Lecture: the science of sleep',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on sleep science. Dense, factual,
        // and signposted ("to begin", "the next stage", "finally"), with the
        // note/sentence-completion + multiple-choice mix typical of Section 4.
        transcript: `Good afternoon. Today I want to give you an overview of what happens when we sleep, because it's far from the passive "switching off" that people once imagined. In fact, the sleeping brain is remarkably busy.

Let me begin with the structure of sleep. Across a typical night, we don't sleep at one constant depth. Instead, we cycle through several stages, and one full cycle lasts roughly ninety minutes. A healthy adult goes through four or five of these cycles each night.

Broadly, sleep divides into two kinds. The first is what scientists call non-REM sleep, which includes the deepest, most restful stages. The second is REM sleep — REM stands for "rapid eye movement" — and this is the stage in which most vivid dreaming occurs. Interestingly, although the brain is highly active during REM, the body's muscles are almost completely paralysed, which probably stops us from physically acting out our dreams.

So why do we need it? Research points to several functions. The most well established is memory. During deep sleep, the brain appears to transfer information from short-term to long-term storage — which is exactly why students who sleep well after studying remember more than those who stay up all night.

A second, more recent discovery concerns waste. During sleep, the spaces between brain cells widen, allowing fluid to flush out waste products that build up during the day. Some scientists believe this nightly cleaning may help protect against certain diseases of the brain.

Finally, a word on how much we need. Although the figure varies between individuals, most adults function best on between seven and eight hours. And here's a crucial point that recent studies stress: sleep lost during the week cannot simply be "repaid" with a long lie-in at the weekend. Chronic shortage has effects that one good night does not reverse. We'll look at those effects next week.`,
        questions: [
          {
            id: 'ls-005-s4-q31',
            type: 'mcq',
            prompt: 'What is the speaker’s main point at the start of the lecture?',
            options: [
              'Sleep is a passive state in which the brain switches off',
              'The sleeping brain is far more active than people once thought',
              'Most people sleep far less than they actually need',
              'Dreaming is the most important function of sleep',
            ],
            correctIndex: 1,
            explanation:
              'She opens by saying sleep is “far from the passive ‘switching off’ that people once imagined. In fact, the sleeping brain is remarkably busy.” Option B captures this framing; the others come later or are not claimed.',
          },
          {
            id: 'ls-005-s4-q32',
            type: 'gap',
            prompt: 'One full sleep cycle lasts roughly ____________ minutes. Write A NUMBER.',
            acceptableAnswers: ['90', 'ninety'],
            explanation:
              'She says “one full cycle lasts roughly ninety minutes.” The answer is 90 — numbers said as words still count, but writing the digits is safest.',
          },
          {
            id: 'ls-005-s4-q33',
            type: 'gap',
            prompt:
              'A healthy adult goes through four or ____________ sleep cycles each night. Write A NUMBER.',
            acceptableAnswers: ['5', 'five'],
            explanation:
              'She says “A healthy adult goes through four or five of these cycles each night.” The missing number is 5.',
          },
          {
            id: 'ls-005-s4-q34',
            type: 'gap',
            prompt: 'In the lecture, REM stands for rapid eye ____________. Write ONE WORD.',
            acceptableAnswers: ['movement'],
            explanation:
              'She explains, “REM stands for ‘rapid eye movement’.” The missing word is “movement”.',
          },
          {
            id: 'ls-005-s4-q35',
            type: 'mcq',
            prompt: 'What does the speaker say is unusual about the body during REM sleep?',
            options: [
              'The heart rate slows almost to a stop',
              'The muscles are almost completely paralysed',
              'The body temperature rises sharply',
              'The eyes remain completely still',
            ],
            correctIndex: 1,
            explanation:
              'She notes that during REM “the body’s muscles are almost completely paralysed, which probably stops us from physically acting out our dreams.” Option B matches; note the eyes in fact move rapidly, so the last option is wrong.',
          },
          {
            id: 'ls-005-s4-q36',
            type: 'gap',
            prompt:
              'During deep sleep, the brain transfers information from short-term to long-term ____________. Write ONE WORD.',
            acceptableAnswers: ['storage', 'memory'],
            explanation:
              'She says the brain “appears to transfer information from short-term to long-term storage.” The answer is “storage” (memory accepted as a synonym).',
          },
          {
            id: 'ls-005-s4-q37',
            type: 'mcq',
            prompt:
              'According to the speaker, what does the more recent research on waste suggest happens during sleep?',
            options: [
              'The brain produces more waste products than during the day',
              'Fluid flushes out waste products that build up during the day',
              'Brain cells shrink and stop communicating',
              'Waste is stored until it can be removed when awake',
            ],
            correctIndex: 1,
            explanation:
              'She says, “the spaces between brain cells widen, allowing fluid to flush out waste products that build up during the day.” Option B matches the mechanism she describes.',
          },
          {
            id: 'ls-005-s4-q38',
            type: 'gap',
            prompt:
              'Most adults function best on between seven and ____________ hours of sleep. Write A NUMBER.',
            acceptableAnswers: ['8', 'eight'],
            explanation:
              'She says “most adults function best on between seven and eight hours.” The upper figure is 8.',
          },
          {
            id: 'ls-005-s4-q39',
            type: 'tfng',
            prompt:
              'The speaker states that sleep lost during the week can be fully repaid by sleeping in at the weekend.',
            answer: 'false',
            explanation:
              'This is the opposite of what she says: “sleep lost during the week cannot simply be ‘repaid’ with a long lie-in at the weekend… one good night does not reverse” chronic shortage. The statement is therefore False.',
          },
          {
            id: 'ls-005-s4-q40',
            type: 'gap',
            prompt:
              'The speaker says the brain’s nightly cleaning may help protect against certain ____________ of the brain. Write ONE WORD.',
            acceptableAnswers: ['diseases', 'disease', 'illnesses'],
            explanation:
              'She says this nightly cleaning “may help protect against certain diseases of the brain.” The answer is “diseases” (illnesses accepted as a synonym).',
          },
        ],
      },
    ],
  },
]
