// ─── IELTS Academic Listening - practice test data (Set 20) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (40 questions, 10 per section) that mirror the real IELTS Listening paper,
// with topics deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a caller enrolling
//     in an evening adult-education course at a community college), assessed
//     with form/note completion + multiple choice. A surname is spelled and one
//     detail (the total fee) depends on a stated choice (course + materials).
//   • Section 2 - an everyday MONOLOGUE (here: a guided tour of a botanic
//     garden), assessed with sentence completion, multiple choice and a
//     matching task (garden zones → features), carrying signpost language.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor
//     planning a marine-biology fieldwork assignment), assessed with multiple
//     choice + completion.
//   • Section 4 - an academic LECTURE / monologue (here: the history of
//     photography, from the camera obscura to the digital shift), assessed with
//     note/sentence completion + multiple choice, including one True/False/Not
//     Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'      → completion items. `acceptableAnswers` are matched case-
//                  insensitively and trimmed by the marker. The official word-
//                  limit instruction lives in the prompt.
//   • 'mcq'      → single best answer; `correctIndex` is 0-based.
//   • 'matching' → each item scores ONE mark; `item.answer` is an option `key`.
//   • 'tfng'     → True / False / Not Given.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_20: ListeningTest[] = [
  {
    id: 'ls-academic-020',
    title:
      'Practice Test 20 - Enrolling in an Evening Course, A Botanic Garden Tour, Planning a Marine-Biology Assignment & The History of Photography',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-020-s1',
        title: 'Section 1 - Registering for an evening adult-education course',
        // ~300 words. Transactional dialogue (Section 1 style): a caller phoning a
        // community college to register for an evening adult-education course. A
        // surname is spelled and a date is dictated; one detail (the total fee)
        // depends on stated choices (which course, plus a materials pack), mirroring
        // the form-completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good afternoon, Brookfield Community College, evening courses - Sandra speaking.

MAN: Hi, I'd like to sign up for one of your evening classes, if there's still room.

WOMAN: Of course. Let me take your details. Can I have your name, please?

MAN: Yes, it's Martin Pryce. The surname is spelled P-R-Y-C-E.

WOMAN: Thank you, Martin. And which course were you interested in?

MAN: I was looking at either the photography course or the pottery one. They're both on Tuesday evenings, aren't they?

WOMAN: The pottery is on Tuesdays, but photography has actually moved to Wednesdays this year.

MAN: Ah, Wednesdays don't work for me. I'll take the pottery, then.

WOMAN: Lovely. Pottery is a ten-week course and the fee is ninety pounds.

MAN: And does that include the clay and tools?

WOMAN: The tools are provided in class, but there's an optional materials pack - that's the clay and a glaze set - for fifteen pounds. Most beginners take it.

MAN: I'll add the pack, then.

WOMAN: So that's ninety plus fifteen. Now, when would you like to start? The next term begins on the third of October.

MAN: The third of October is fine.

WOMAN: Great. One thing to bring on the first evening is an apron - the studio can get messy. And do arrive a few minutes early to find the room; pottery is in the Maple building, room four.

MAN: Maple building, room four. Got it. Do I pay today?

WOMAN: You can pay at the first class. We just ask that you register online beforehand to confirm your place.`,
        questions: [
          {
            id: 'ls-020-s1-q1',
            type: 'gap',
            prompt:
              'Complete the registration form. Write ONE WORD for the answer.\n\nStudent surname: ____________',
            acceptableAnswers: ['Pryce', 'pryce'],
            explanation:
              'The caller gives his name as “Martin Pryce” and spells the surname: P-R-Y-C-E. In Section 1, names are almost always spelled aloud - write them down letter by letter.',
          },
          {
            id: 'ls-020-s1-q2',
            type: 'mcq',
            prompt: 'Which course does the man finally decide to take?',
            options: [
              'The photography course on Wednesdays',
              'The pottery course on Tuesdays',
              'The photography course on Tuesdays',
              'The pottery course on Wednesdays',
            ],
            correctIndex: 1,
            explanation:
              'Photography “has actually moved to Wednesdays”, which the man says don’t work for him, so he says, “I’ll take the pottery, then.” Pottery is “on Tuesdays.” Option B matches; the distractors mix up the days.',
          },
          {
            id: 'ls-020-s1-q3',
            type: 'gap',
            prompt: 'The chosen course lasts for ____________ weeks. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation: 'The assistant says, “Pottery is a ten-week course.” The answer is 10.',
          },
          {
            id: 'ls-020-s1-q4',
            type: 'gap',
            prompt: 'The basic course fee is £____________. Write A NUMBER.',
            acceptableAnswers: ['90', 'ninety'],
            explanation:
              'The assistant says the pottery “fee is ninety pounds.” The answer is 90 (the £15 materials pack is added separately in a later question).',
          },
          {
            id: 'ls-020-s1-q5',
            type: 'gap',
            prompt:
              'The optional materials pack contains clay and a ____________ set. Write ONE WORD.',
            acceptableAnswers: ['glaze'],
            explanation:
              'The assistant describes the optional pack as “the clay and a glaze set.” The answer is “glaze”.',
          },
          {
            id: 'ls-020-s1-q6',
            type: 'mcq',
            prompt: 'How much will the man pay in total?',
            options: [
              'Ninety pounds, for the course only',
              'One hundred and five pounds, for the course plus the materials pack',
              'Fifteen pounds, for the materials pack only',
              'Seventy-five pounds, for a discounted course',
            ],
            correctIndex: 1,
            explanation:
              'The course is ninety pounds and the man adds the fifteen-pound materials pack, so the assistant confirms “ninety plus fifteen” - a total of £105. Option B matches; the distractors drop the pack or the course fee.',
          },
          {
            id: 'ls-020-s1-q7',
            type: 'gap',
            prompt:
              'The next term begins on the ____________ of October. Write the date as you hear it.',
            acceptableAnswers: ['3rd', 'third', '3'],
            explanation:
              'The assistant says, “The next term begins on the third of October,” which the man accepts. The answer is the 3rd (third).',
          },
          {
            id: 'ls-020-s1-q8',
            type: 'gap',
            prompt: 'On the first evening, the man should bring an ____________. Write ONE WORD.',
            acceptableAnswers: ['apron'],
            explanation:
              'The assistant says, “One thing to bring on the first evening is an apron - the studio can get messy.” The answer is “apron”.',
          },
          {
            id: 'ls-020-s1-q9',
            type: 'gap',
            prompt:
              'The pottery class is held in the ____________ building, room four. Write ONE WORD.',
            acceptableAnswers: ['Maple', 'maple'],
            explanation:
              'The assistant says, “pottery is in the Maple building, room four.” The answer is “Maple”.',
          },
          {
            id: 'ls-020-s1-q10',
            type: 'mcq',
            prompt: 'What must the man do before the first class?',
            options: [
              'Pay the full fee over the phone',
              'Register online to confirm his place',
              'Post a paper form to the college',
              'Attend a separate induction session',
            ],
            correctIndex: 1,
            explanation:
              'The assistant says payment is at the first class, but “We just ask that you register online beforehand to confirm your place.” Option B matches; phone payment is explicitly not required.',
          },
        ],
      },
      {
        id: 'ls-academic-020-s2',
        title: 'Section 2 - A guided tour of a botanic garden',
        // ~310 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors and describing the layout and programme of a botanic
        // garden - zones, the glasshouse, the café, events and accessibility. Uses
        // sequencing/signpost language and includes a matching task (zone → feature)
        // alongside completion and multiple choice.
        transcript: `Hello everyone, and welcome to Greenvale Botanic Garden. My name's Tom, and I'll give you a quick orientation before you set off to explore on your own.

Let me walk you through the main zones, starting from where we're standing at the main gate. Straight ahead of you is the Rose Garden, which is at its absolute best right now in early summer - that's the one area I'd urge you not to miss today. To your left is the Woodland Walk, a shaded loop that's particularly popular with families, as there's a small wooden adventure playground tucked among the trees. Over to your right is the Water Garden, with its ponds and a lovely collection of dragonflies in the warmer months.

Now, our star attraction is the Tropical Glasshouse, at the far end of the gardens. Inside it's kept warm and humid all year round, so I'd suggest leaving any coats in the lockers by the entrance. A word of warning: the glasshouse is reached by a fairly steep path, so if you'd prefer step-free access, take the level route signposted past the café instead.

Speaking of the café, it's in the old stable block near the car park, and today it's serving a special summer menu until four o'clock. There's plenty of seating outside on the terrace.

As for events, there's a free guided bird walk leaving from this spot at eleven, and a plant sale running all afternoon in the courtyard. Do note that the bird walk involves a lot of standing still and quiet, so it's really aimed at adults.

Finally, on accessibility - wheelchairs can be borrowed free of charge from the ticket office, and assistance dogs are welcome everywhere except inside the glasshouse. Enjoy your visit!`,
        questions: [
          {
            id: 'ls-020-s2-q11',
            type: 'mcq',
            prompt: 'Which area does the guide most strongly recommend visitors see today?',
            options: ['The Woodland Walk', 'The Rose Garden', 'The Water Garden', 'The plant sale'],
            correctIndex: 1,
            explanation:
              'The guide says the Rose Garden “is at its absolute best right now… that’s the one area I’d urge you not to miss today.” Option B matches the strongest recommendation.',
          },
          {
            id: 'ls-020-s2-q12',
            type: 'gap',
            prompt:
              'The Tropical Glasshouse is kept warm and ____________ all year round. Write ONE WORD.',
            acceptableAnswers: ['humid'],
            explanation:
              'The guide says the glasshouse “is kept warm and humid all year round.” The answer is “humid”.',
          },
          {
            id: 'ls-020-s2-q13',
            type: 'gap',
            prompt:
              'Visitors are advised to leave their coats in the ____________ by the glasshouse entrance. Write ONE WORD.',
            acceptableAnswers: ['lockers', 'locker'],
            explanation:
              'Because the glasshouse is warm, the guide suggests “leaving any coats in the lockers by the entrance.” The answer is “lockers”.',
          },
          {
            id: 'ls-020-s2-q14',
            type: 'mcq',
            prompt: 'What does the guide say about reaching the glasshouse?',
            options: [
              'It can only be reached by a steep path',
              'A step-free route is signposted past the café',
              'It is closed to visitors today',
              'Visitors must take a shuttle bus',
            ],
            correctIndex: 1,
            explanation:
              'The guide warns of “a fairly steep path”, then adds, “if you’d prefer step-free access, take the level route signposted past the café instead.” Option B matches; the steep path is not the only way.',
          },
          {
            id: 'ls-020-s2-q15',
            type: 'gap',
            prompt:
              'The café is serving a special summer menu until ____________ o’clock. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'The guide says the café “is serving a special summer menu until four o’clock.” The answer is 4.',
          },
          {
            id: 'ls-020-s2-q16',
            type: 'mcq',
            prompt: 'Why is the guided bird walk described as aimed at adults?',
            options: [
              'It costs money to take part',
              'It involves a lot of standing still and quiet',
              'It takes place after dark',
              'It covers a very long distance',
            ],
            correctIndex: 1,
            explanation:
              'The guide says the bird walk “involves a lot of standing still and quiet, so it’s really aimed at adults.” Option B matches; the walk is actually free.',
          },
          {
            id: 'ls-020-s2-q17q20',
            type: 'matching',
            variant: 'features',
            prompt:
              'Match each area of the garden (Questions 17-20) to the feature the guide associates with it. Choose your answer from the list A-F. You will not need every option.',
            options: [
              { key: 'A', label: 'A shaded loop with an adventure playground' },
              { key: 'B', label: 'Ponds and a collection of dragonflies' },
              { key: 'C', label: 'Kept warm and humid all year round' },
              { key: 'D', label: 'A special summer menu and terrace seating' },
              { key: 'E', label: 'A boating lake with rowing boats for hire' },
              { key: 'F', label: 'An open-air theatre with evening concerts' },
            ],
            items: [
              { id: 'ls-020-s2-q17', text: 'The Woodland Walk', answer: 'A' },
              { id: 'ls-020-s2-q18', text: 'The Water Garden', answer: 'B' },
              { id: 'ls-020-s2-q19', text: 'The Tropical Glasshouse', answer: 'C' },
              { id: 'ls-020-s2-q20', text: 'The café in the old stable block', answer: 'D' },
            ],
            explanation:
              'The guide links the Woodland Walk to “a small wooden adventure playground tucked among the trees” (A), the Water Garden to “its ponds and a lovely collection of dragonflies” (B), the glasshouse to being “kept warm and humid all year round” (C), and the café to “a special summer menu” with “seating outside on the terrace” (D). Options E and F are never mentioned.',
          },
        ],
      },
      {
        id: 'ls-academic-020-s3',
        title: 'Section 3 - Tutorial: planning a marine-biology assignment',
        // ~315 words. Academic discussion (Section 3 style): two students (Hannah and
        // Yusuf) and a tutor (Dr Carter) plan a marine-biology fieldwork assignment on
        // a rocky shore. They settle the research question, the sampling method, a
        // fieldwork safety issue and the submission arrangements, so the questions mix
        // multiple choice (decisions/opinions) with completion (concrete details).
        transcript: `DR CARTER: So, Hannah and Yusuf, let's plan your marine-biology fieldwork assignment. Have you decided on your research question?

HANNAH: We have. We're investigating how the number of limpets on the rocky shore changes from the high-tide zone down to the low-tide zone.

DR CARTER: A nice, measurable question. And how will you actually count them?

YUSUF: We thought about counting every limpet on the whole shore, but that's obviously impossible, so we're going to use quadrats - those square frames you place on the rock and count what's inside.

DR CARTER: Good. And how will you position them?

HANNAH: We'll lay a tape measure, a transect, straight down the shore from top to bottom, and place a quadrat at fixed intervals along it.

DR CARTER: That's exactly the right approach. How many quadrats are you planning?

YUSUF: We're aiming for twenty in total, which should give us enough data without taking all day.

DR CARTER: Sensible. Now, fieldwork on a rocky shore - I have to stress safety. What's your main concern?

HANNAH: The rocks get very slippery with seaweed, so we'll all wear proper boots with a good grip rather than trainers.

DR CARTER: Absolutely essential. And one thing students always forget - check the tide times before you go, and start at low tide so you're working your way back up as the water returns. Never get cut off.

YUSUF: We've already got the tide timetable, don't worry.

DR CARTER: Excellent. For submission, the written report is due in week ten, but I'd like to see your raw data table a week earlier, in week nine, just to check you're on track.

HANNAH: Week nine for the data, week ten for the report. Understood.`,
        questions: [
          {
            id: 'ls-020-s3-q21',
            type: 'mcq',
            prompt: 'What is the students’ research question?',
            options: [
              'How seaweed cover changes across the seasons',
              'How the number of limpets changes from the high-tide to the low-tide zone',
              'How pollution affects fish in rock pools',
              'How temperature varies along the shore',
            ],
            correctIndex: 1,
            explanation:
              'Hannah says they are investigating “how the number of limpets on the rocky shore changes from the high-tide zone down to the low-tide zone.” Option B matches.',
          },
          {
            id: 'ls-020-s3-q22',
            type: 'gap',
            prompt:
              'To count the limpets, the students will use square frames called ____________. Write ONE WORD.',
            acceptableAnswers: ['quadrats', 'quadrat'],
            explanation:
              'Yusuf says they will “use quadrats - those square frames you place on the rock and count what’s inside.” The answer is “quadrats”.',
          },
          {
            id: 'ls-020-s3-q23',
            type: 'gap',
            prompt:
              'The frames will be placed at fixed intervals along a tape measure, or ____________, laid down the shore. Write ONE WORD.',
            acceptableAnswers: ['transect'],
            explanation:
              'Hannah says, “We’ll lay a tape measure, a transect, straight down the shore… and place a quadrat at fixed intervals along it.” The answer is “transect”.',
          },
          {
            id: 'ls-020-s3-q24',
            type: 'gap',
            prompt: 'In total, the students plan to use ____________ quadrats. Write A NUMBER.',
            acceptableAnswers: ['20', 'twenty'],
            explanation: 'Yusuf says, “We’re aiming for twenty in total.” The answer is 20.',
          },
          {
            id: 'ls-020-s3-q25',
            type: 'mcq',
            prompt: 'Why did the students reject the idea of counting every limpet on the shore?',
            options: [
              'It would damage the limpets',
              'It would be impossible to do',
              'The tutor advised against it',
              'They lacked the right equipment',
            ],
            correctIndex: 1,
            explanation:
              'Yusuf says they considered counting every limpet “but that’s obviously impossible, so we’re going to use quadrats.” Option B matches the reason given.',
          },
          {
            id: 'ls-020-s3-q26',
            type: 'mcq',
            prompt: 'What is the students’ main safety precaution for the fieldwork?',
            options: [
              'Wearing boots with a good grip rather than trainers',
              'Working only in pairs at all times',
              'Carrying a first-aid kit each',
              'Wearing high-visibility jackets',
            ],
            correctIndex: 0,
            explanation:
              'Hannah says the rocks “get very slippery with seaweed, so we’ll all wear proper boots with a good grip rather than trainers.” Option A matches.',
          },
          {
            id: 'ls-020-s3-q27',
            type: 'gap',
            prompt:
              'The tutor warns the students to check the ____________ times before they go. Write ONE WORD.',
            acceptableAnswers: ['tide'],
            explanation:
              'Dr Carter says, “check the tide times before you go, and start at low tide.” The answer is “tide”.',
          },
          {
            id: 'ls-020-s3-q28',
            type: 'mcq',
            prompt: 'What does the tutor advise about when to start the fieldwork?',
            options: [
              'To start at high tide and move down the shore',
              'To start at low tide and work back up as the water returns',
              'To work only in the middle of the day',
              'To avoid going out on windy days',
            ],
            correctIndex: 1,
            explanation:
              'Dr Carter says to “start at low tide so you’re working your way back up as the water returns. Never get cut off.” Option B matches.',
          },
          {
            id: 'ls-020-s3-q29',
            type: 'gap',
            prompt:
              'The tutor wants to see the students’ raw ____________ table in week nine. Write ONE WORD.',
            acceptableAnswers: ['data'],
            explanation:
              'Dr Carter says, “I’d like to see your raw data table a week earlier, in week nine.” The answer is “data”.',
          },
          {
            id: 'ls-020-s3-q30',
            type: 'gap',
            prompt: 'The final written report is due in week ____________. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'Dr Carter says, “the written report is due in week ten.” The answer is 10 (the raw data is due in week nine, a distractor).',
          },
        ],
      },
      {
        id: 'ls-academic-020-s4',
        title: 'Section 4 - Lecture: the history of photography',
        // ~315 words. Academic lecture / monologue (Section 4 style): a single speaker
        // delivers a structured lecture on the history of photography, from the camera
        // obscura through early chemical processes and roll film to the digital shift.
        // Dense, factual and signposted ("let me begin", "next", "finally"), with the
        // note/sentence-completion + multiple-choice mix typical of Section 4, including
        // one True/False/Not Given item.
        transcript: `Good morning. Today I'll trace the history of photography - how we moved from a simple optical trick to the billions of digital images taken every day. I'll work through four main stages.

Let me begin with the idea behind the camera, which is far older than photography itself. For centuries, artists used a device called the camera obscura - Latin for "dark chamber". This was simply a darkened room, or later a box, with a tiny hole in one side; light passing through the hole projected an upside-down image of the outside scene onto the opposite wall. Crucially, it could not record that image - someone still had to trace it by hand.

The breakthrough came in the early nineteenth century, when inventors found ways to fix an image chemically. The first practical process, announced in 1839, was the daguerreotype, named after its French inventor. It produced a sharp, detailed picture on a silvered copper plate. Its great drawback, though, was that each photograph was unique - you could not make copies from it.

That problem was solved by the negative. A rival process recorded the image as a negative on paper, from which any number of positive prints could be made. This negative-to-positive principle would dominate photography for the next century and a half.

Next, the technology became portable. The key step was roll film, which freed photographers from heavy glass plates and made the simple hand-held camera possible, putting photography into ordinary people's hands for the first time.

Finally, the digital shift. Instead of film, a digital camera uses an electronic sensor that converts light directly into data. This brought a profound change: the marginal cost of taking one more photograph fell, in effect, to zero. That single fact, more than any other, explains why we now take so many pictures.`,
        questions: [
          {
            id: 'ls-020-s4-q31',
            type: 'gap',
            prompt:
              'For centuries, artists used a device called the camera ____________, Latin for "dark chamber". Write ONE WORD.',
            acceptableAnswers: ['obscura'],
            explanation:
              'The lecturer says artists used “a device called the camera obscura - Latin for ‘dark chamber’.” The answer is “obscura”.',
          },
          {
            id: 'ls-020-s4-q32',
            type: 'mcq',
            prompt: 'What was the main limitation of the camera obscura?',
            options: [
              'It produced only blurred images',
              'It could not record the image it projected',
              'It worked only at night',
              'It was too small to be useful',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer stresses that the camera obscura “could not record that image - someone still had to trace it by hand.” Option B matches.',
          },
          {
            id: 'ls-020-s4-q33',
            type: 'gap',
            prompt:
              'The first practical photographic process was announced in the year ____________. Write A NUMBER.',
            acceptableAnswers: ['1839'],
            explanation:
              'The lecturer says the first practical process was “announced in 1839.” The answer is 1839.',
          },
          {
            id: 'ls-020-s4-q34',
            type: 'gap',
            prompt:
              'That first process was called the ____________, after its French inventor. Write ONE WORD.',
            acceptableAnswers: ['daguerreotype'],
            explanation:
              'The lecturer names the 1839 process “the daguerreotype, named after its French inventor.” The answer is “daguerreotype”.',
          },
          {
            id: 'ls-020-s4-q35',
            type: 'mcq',
            prompt: 'According to the lecture, what was the great drawback of that first process?',
            options: [
              'Each photograph was unique and could not be copied',
              'The images faded within days',
              'It required a darkened room to view',
              'It could only photograph landscapes',
            ],
            correctIndex: 0,
            explanation:
              'The lecturer says of the daguerreotype, “each photograph was unique - you could not make copies from it.” Option A matches.',
          },
          {
            id: 'ls-020-s4-q36',
            type: 'gap',
            prompt:
              'The copying problem was solved by recording the image as a ____________ on paper. Write ONE WORD.',
            acceptableAnswers: ['negative'],
            explanation:
              'The lecturer says a rival process “recorded the image as a negative on paper, from which any number of positive prints could be made.” The answer is “negative”.',
          },
          {
            id: 'ls-020-s4-q37',
            type: 'tfng',
            prompt:
              'The lecturer says the negative-to-positive principle was quickly abandoned soon after it was invented.',
            answer: 'false',
            explanation:
              'The lecturer says the opposite: this principle “would dominate photography for the next century and a half.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-020-s4-q38',
            type: 'gap',
            prompt:
              'The step that made the technology portable was the invention of roll ____________. Write ONE WORD.',
            acceptableAnswers: ['film'],
            explanation:
              'The lecturer says, “The key step was roll film, which freed photographers from heavy glass plates.” The answer is “film”.',
          },
          {
            id: 'ls-020-s4-q39',
            type: 'mcq',
            prompt: 'How does a digital camera capture an image, according to the lecture?',
            options: [
              'On a silvered copper plate',
              'On a strip of roll film',
              'Using an electronic sensor that converts light into data',
              'By projecting it onto a wall to be traced',
            ],
            correctIndex: 2,
            explanation:
              'The lecturer says a digital camera “uses an electronic sensor that converts light directly into data.” Option C matches; the other options describe earlier technologies.',
          },
          {
            id: 'ls-020-s4-q40',
            type: 'mcq',
            prompt: 'According to the lecturer, why do we now take so many photographs?',
            options: [
              'Cameras have become much smaller',
              'The marginal cost of taking one more photo fell, in effect, to zero',
              'Photography became a school subject',
              'Printing has become far cheaper',
            ],
            correctIndex: 1,
            explanation:
              'The lecturer says the digital shift meant “the marginal cost of taking one more photograph fell, in effect, to zero,” adding that “that single fact, more than any other, explains why we now take so many pictures.” Option B matches.',
          },
        ],
      },
    ],
  },
]
