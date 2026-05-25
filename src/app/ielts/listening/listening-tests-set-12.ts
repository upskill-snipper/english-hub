// ─── IELTS Academic Listening — practice test data (Set 12) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a phone call to a
//     sports centre to book a tennis court and arrange coaching), assessed with
//     form / note completion + a multiple-choice item. A surname is spelled and
//     a membership number is dictated, and one detail (the price per session)
//     depends on a stated choice (which type of coaching the caller picks).
//   • Section 2 — an everyday MONOLOGUE (here: a welcome talk for visitors at a
//     planetarium), assessed with sentence completion + multiple choice,
//     carrying signpost language ("first", "after that", "finally") that the
//     questions track.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial planning a literature essay on a novel), assessed with multiple
//     choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: the history of the
//     calendar, from lunar months to the Gregorian reform), assessed with
//     note/sentence completion + multiple choice, including one True/False/Not
//     Given item.
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

export const LISTENING_SET_12: ListeningTest[] = [
  {
    id: 'ls-academic-12',
    title:
      'Practice Test 12 — Booking a Tennis Court & Coaching, A Planetarium Welcome, Planning a Literature Essay & The History of the Calendar',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-12-s1',
        title: 'Section 1 — Booking a tennis court and coaching',
        // ~285 words. Transactional dialogue (Section 1 style): a caller phoning a
        // sports centre to book a tennis court and arrange lessons. A surname is
        // spelled and a membership number is dictated; one detail (the price per
        // session) depends on a stated choice (group vs. private coaching),
        // mirroring the form/note-completion + multiple-choice mix of a real
        // Section 1.
        transcript: `WOMAN: Good afternoon, Parkside Sports Centre, this is Megan speaking. How can I help?

MAN: Hi, I'd like to book a tennis court, and I'm also interested in some coaching.

WOMAN: Of course. Let's start with the court. Could I take your name, please?

MAN: Yes, it's Oliver Hartley. Hartley is spelled H-A-R-T-L-E-Y.

WOMAN: Thank you, Oliver. Are you already a member with us?

MAN: I am. My membership number is four-two-seven, double-one, six.

WOMAN: Lovely, I've found you. Which day were you hoping to play?

MAN: Wednesday evening, if there's a court free.

WOMAN: Let me check. Yes, we have one of the outdoor courts available at half past six. The indoor courts are all booked, I'm afraid.

MAN: The outdoor one is fine. How much is that?

WOMAN: For members it's nine pounds an hour. Now, you mentioned coaching — we run two options. There's a group session, which is twelve pounds, or a one-to-one lesson with a private coach at twenty-five pounds.

MAN: I'll go for the one-to-one — I really want to fix my serve.

WOMAN: A good choice. Our head coach, Sandra, takes those, and she's excellent with technique. One thing to remember: please bring your own racket, as we only lend them to complete beginners.

MAN: No problem, I've got my own. Anything else?

WOMAN: Just wear non-marking shoes on the courts, and arrive about ten minutes early to warm up.

MAN: Great. Thank you very much for your help.

WOMAN: You're welcome. We'll see you on Wednesday.`,
        questions: [
          {
            id: 'ls-012-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nMember surname: ____________',
            acceptableAnswers: ['Hartley', 'hartley'],
            explanation:
              'The caller gives his name as “Oliver Hartley” and spells the surname out: H-A-R-T-L-E-Y. In Section 1, surnames are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-012-s1-q2',
            type: 'gap',
            prompt: 'Membership number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['427116', '427 11 6', '42711 6', '427-11-6'],
            explanation:
              'The number is dictated as “four-two-seven, double-one, six”, which is 427116. “Double one” means two 1s — spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-012-s1-q3',
            type: 'gap',
            prompt:
              'Day the man wants to play: ____________ evening. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Wednesday', 'wednesday'],
            explanation:
              'He says, “Wednesday evening, if there’s a court free.” The answer is “Wednesday”.',
          },
          {
            id: 'ls-012-s1-q4',
            type: 'mcq',
            prompt: 'Which court does the man book?',
            options: [
              'An indoor court, at half past six',
              'An outdoor court, at half past six',
              'An indoor court, because the outdoor ones are full',
              'An outdoor court, at half past five',
            ],
            correctIndex: 1,
            explanation:
              'The assistant says, “we have one of the outdoor courts available at half past six. The indoor courts are all booked,” and he replies, “The outdoor one is fine.” The distractors swap the court type or the time, both of which appear in the audio.',
          },
          {
            id: 'ls-012-s1-q5',
            type: 'gap',
            prompt: 'Cost of the court for members: £ ____________ an hour. Write A NUMBER.',
            acceptableAnswers: ['9', 'nine'],
            explanation:
              'She says, “For members it’s nine pounds an hour.” The answer is 9 — the coaching prices come later and are deliberate distractors.',
          },
          {
            id: 'ls-012-s1-q6',
            type: 'mcq',
            prompt: 'How much will the man pay for his coaching session?',
            options: [
              'Twelve pounds, for a group session',
              'Twenty-five pounds, because he chooses a one-to-one lesson',
              'Twelve pounds, because he is a member',
              'Twenty-five pounds, for a group of beginners',
            ],
            correctIndex: 1,
            explanation:
              'A group session is “twelve pounds”, but a “one-to-one lesson with a private coach” is “twenty-five pounds.” Because he says, “I’ll go for the one-to-one — I really want to fix my serve,” he pays £25. The distractors reuse the real figures but give the wrong reason.',
          },
          {
            id: 'ls-012-s1-q7',
            type: 'gap',
            prompt:
              'The man chooses one-to-one coaching because he wants to fix his ____________. Write ONE WORD.',
            acceptableAnswers: ['serve'],
            explanation:
              'He says, “I’ll go for the one-to-one — I really want to fix my serve.” The answer is “serve”.',
          },
          {
            id: 'ls-012-s1-q8',
            type: 'gap',
            prompt:
              'The one-to-one lessons are taught by the head coach, ____________. Write ONE WORD (a name).',
            acceptableAnswers: ['Sandra', 'sandra'],
            explanation:
              'She says, “Our head coach, Sandra, takes those, and she’s excellent with technique.” The answer is “Sandra”.',
          },
          {
            id: 'ls-012-s1-q9',
            type: 'gap',
            prompt:
              'The man must bring his own ____________, as the centre only lends them to beginners. Write ONE WORD.',
            acceptableAnswers: ['racket', 'racquet'],
            explanation:
              'She says, “please bring your own racket, as we only lend them to complete beginners.” The answer is “racket” (the spelling “racquet” is accepted).',
          },
          {
            id: 'ls-012-s1-q10',
            type: 'gap',
            prompt: 'On the courts the man must wear non-marking ____________. Write ONE WORD.',
            acceptableAnswers: ['shoes', 'trainers'],
            explanation:
              'She says, “Just wear non-marking shoes on the courts, and arrive about ten minutes early.” The answer is “shoes” (trainers accepted as a synonym).',
          },
        ],
      },
      {
        id: 'ls-academic-12-s2',
        title: 'Section 2 — A welcome talk at a planetarium',
        // ~275 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors to a planetarium and explaining the timetable,
        // facilities and rules. Uses sequencing/signpost language ("first", "after
        // that", "finally") that the questions follow in order, with a sentence/
        // note-completion + multiple-choice mix.
        transcript: `Good evening, everyone, and welcome to the Hollowfield Planetarium. My name is Raj, and I'll be your host this evening. Before we begin, let me explain how your visit will work.

First, the main event is our show in the dome theatre, which lasts about forty-five minutes. Tonight's programme is called "A Journey to the Outer Planets", and it takes you on a tour from Jupiter all the way out to the edge of the solar system. I should mention that, once the show starts, the doors are locked and latecomers cannot be admitted, so please take your seats promptly.

After that, those who wish can join a short observing session on the rooftop terrace, weather permitting. We have a large telescope up there, and tonight, if the sky stays clear, you should get an excellent view of the rings of Saturn.

A word about the building. Our gift shop, on the ground floor, stocks books, models and posters, and it stays open until nine, so there's no rush. The café, however, closes earlier, at eight, so do get any refreshments before the show rather than after.

Now, a couple of rules. Inside the dome, please switch your phones off completely — not merely to silent — because even a small screen is very distracting in the dark. And flash photography is not permitted at any point during the show.

Finally, if you enjoy tonight, do ask about our membership scheme at the desk. Members get free entry to every show for a year and a generous discount in the shop. Right, if you'd like to follow me, the theatre is just through the doors to my left.`,
        questions: [
          {
            id: 'ls-012-s2-q11',
            type: 'gap',
            prompt:
              'The main show in the dome theatre lasts about ____________ minutes. Write A NUMBER.',
            acceptableAnswers: ['45', 'forty-five', 'forty five'],
            explanation:
              'He says, “our show in the dome theatre, which lasts about forty-five minutes.” The answer is 45.',
          },
          {
            id: 'ls-012-s2-q12',
            type: 'mcq',
            prompt: 'What does the speaker say about arriving late for the show?',
            options: [
              'Latecomers may enter quietly at the back',
              'Once the show starts, latecomers cannot be admitted',
              'Latecomers must wait for the next showing',
              'There is a small charge for arriving late',
            ],
            correctIndex: 1,
            explanation:
              'He warns, “once the show starts, the doors are locked and latecomers cannot be admitted, so please take your seats promptly.” Option B matches; the others are not stated.',
          },
          {
            id: 'ls-012-s2-q13',
            type: 'gap',
            prompt:
              'After the show, visitors can join an observing session on the rooftop ____________. Write ONE WORD.',
            acceptableAnswers: ['terrace'],
            explanation:
              'He says visitors can “join a short observing session on the rooftop terrace, weather permitting.” The answer is “terrace”.',
          },
          {
            id: 'ls-012-s2-q14',
            type: 'gap',
            prompt:
              'If the sky is clear, the telescope should give a good view of the rings of ____________. Write ONE WORD (a planet).',
            acceptableAnswers: ['Saturn', 'saturn'],
            explanation:
              'He says, “if the sky stays clear, you should get an excellent view of the rings of Saturn.” The answer is “Saturn”.',
          },
          {
            id: 'ls-012-s2-q15',
            type: 'mcq',
            prompt: 'What does the speaker advise about the café?',
            options: [
              'It is open all evening, so visitors can go after the show',
              'It closes at eight, so visitors should buy refreshments beforehand',
              'It only serves visitors who have bought a ticket',
              'It is located on the rooftop terrace',
            ],
            correctIndex: 1,
            explanation:
              'He says, “The café, however, closes earlier, at eight, so do get any refreshments before the show rather than after.” Option B matches; the gift shop, not the café, stays open until nine.',
          },
          {
            id: 'ls-012-s2-q16',
            type: 'gap',
            prompt:
              'The gift shop on the ground floor stays open until ____________ o’clock. Write A NUMBER.',
            acceptableAnswers: ['9', 'nine'],
            explanation:
              'He says the gift shop “stays open until nine, so there’s no rush.” The answer is 9; the café closes earlier, at eight, a deliberate distractor.',
          },
          {
            id: 'ls-012-s2-q17',
            type: 'mcq',
            prompt: 'What does the speaker ask visitors to do with their phones inside the dome?',
            options: [
              'Set them to silent mode',
              'Switch them off completely',
              'Hand them in at the desk',
              'Use them only for photographs',
            ],
            correctIndex: 1,
            explanation:
              'He says, “please switch your phones off completely — not merely to silent — because even a small screen is very distracting in the dark.” Option B matches; silent mode is explicitly NOT enough.',
          },
          {
            id: 'ls-012-s2-q18',
            type: 'gap',
            prompt:
              'During the show, ____________ photography is not permitted at any point. Write ONE WORD.',
            acceptableAnswers: ['flash'],
            explanation:
              'He says, “flash photography is not permitted at any point during the show.” The answer is “flash”.',
          },
          {
            id: 'ls-012-s2-q19',
            type: 'mcq',
            prompt: 'What is one benefit of the membership scheme?',
            options: [
              'Free parking at every visit',
              'Free entry to every show for a year',
              'A free telescope on joining',
              'Priority seating in the café',
            ],
            correctIndex: 1,
            explanation:
              'He says, “Members get free entry to every show for a year and a generous discount in the shop.” Option B matches; the discount is for the shop, not free items, and parking is not mentioned.',
          },
          {
            id: 'ls-012-s2-q20',
            type: 'gap',
            prompt:
              'Visitors can ask about the membership scheme at the ____________. Write ONE WORD.',
            acceptableAnswers: ['desk'],
            explanation:
              'He says, “do ask about our membership scheme at the desk.” The answer is “desk”.',
          },
        ],
      },
      {
        id: 'ls-academic-12-s3',
        title: 'Section 3 — Tutorial: planning a literature essay',
        // ~290 words. Academic discussion (Section 3 style): two students (Leila and
        // Sam) and a tutor (Dr Mason) plan an essay on a novel (the original work
        // "The Lighthouse Keeper"). Speakers debate the question to answer, a focus,
        // the structure, sources and the deadline, so the questions mix multiple
        // choice (decisions/opinions) with completion (concrete details).
        transcript: `DR MASON: Right, Leila and Sam, let's talk through the essay you're planning on the novel "The Lighthouse Keeper". Have you settled on a question yet?

LEILA: We have. We're going to write about how the author uses the setting — the remote island — to reflect the main character's feelings of isolation.

DR MASON: That's a strong angle. The landscape as a mirror of the mind. Sam, do you agree?

SAM: I do, though at first I wanted to focus on the relationships between the characters. But Leila convinced me that the setting is really what drives the whole book.

DR MASON: I think that's the wiser choice — the relationships are important, but the setting is more original and easier to argue clearly. Now, how are you planning to structure it?

LEILA: We thought we'd take three key scenes, one from the beginning, middle and end, and trace how the description of the island changes alongside the character's mood.

DR MASON: Excellent. A focused close reading of three scenes is far better than trying to cover everything. What about secondary sources?

SAM: We've found a couple of critical essays in the library, but to be honest we weren't sure how many to use.

DR MASON: For an essay of this length, two or three good sources are plenty. Quality matters more than quantity — engage with them properly rather than just listing them. One more thing: make sure you quote directly from the novel to support each point.

LEILA: We will. And when is it due?

DR MASON: The deadline is the fifteenth of March, but I'd encourage you to send me a draft a week before that, so I can give you feedback in time.

SAM: That's really helpful. Thank you.`,
        questions: [
          {
            id: 'ls-012-s3-q21',
            type: 'gap',
            prompt: 'The essay is about the novel "The ____________ Keeper". Write ONE WORD.',
            acceptableAnswers: ['Lighthouse', 'lighthouse'],
            explanation:
              'Dr Mason refers to “the novel “The Lighthouse Keeper”.” The missing word is “Lighthouse”.',
          },
          {
            id: 'ls-012-s3-q22',
            type: 'mcq',
            prompt: 'What is the main focus of the students’ essay question?',
            options: [
              'How the author uses the island setting to reflect the character’s isolation',
              'How the relationships between the characters develop',
              'How the novel compares with the author’s other books',
              'How the weather on the island changes through the year',
            ],
            correctIndex: 0,
            explanation:
              'Leila says, “We’re going to write about how the author uses the setting — the remote island — to reflect the main character’s feelings of isolation.” Option A matches; relationships were considered but rejected.',
          },
          {
            id: 'ls-012-s3-q23',
            type: 'mcq',
            prompt: 'What did Sam originally want to write about?',
            options: [
              'The setting of the island',
              'The relationships between the characters',
              'The author’s life and background',
              'The ending of the novel',
            ],
            correctIndex: 1,
            explanation:
              'Sam says, “at first I wanted to focus on the relationships between the characters. But Leila convinced me that the setting is really what drives the whole book.” Option B matches his original idea.',
          },
          {
            id: 'ls-012-s3-q24',
            type: 'mcq',
            prompt: 'Why does Dr Mason prefer the focus on setting?',
            options: [
              'Because the relationships are not important in the novel',
              'Because the setting is more original and easier to argue clearly',
              'Because there are more critical essays about the setting',
              'Because the setting needs no quotations',
            ],
            correctIndex: 1,
            explanation:
              'Dr Mason says, “the relationships are important, but the setting is more original and easier to argue clearly.” Option B matches; he does not dismiss the relationships as unimportant.',
          },
          {
            id: 'ls-012-s3-q25',
            type: 'gap',
            prompt:
              'For the structure, the students will analyse three key ____________ from the novel. Write ONE WORD.',
            acceptableAnswers: ['scenes'],
            explanation:
              'Leila says, “We thought we’d take three key scenes, one from the beginning, middle and end.” The answer is “scenes”.',
          },
          {
            id: 'ls-012-s3-q26',
            type: 'gap',
            prompt:
              'They will trace how the description of the island changes alongside the character’s ____________. Write ONE WORD.',
            acceptableAnswers: ['mood', 'feelings'],
            explanation:
              'Leila says they will “trace how the description of the island changes alongside the character’s mood.” The answer is “mood” (feelings accepted as a synonym).',
          },
          {
            id: 'ls-012-s3-q27',
            type: 'mcq',
            prompt: 'How many secondary sources does Dr Mason recommend?',
            options: [
              'As many as possible',
              'Two or three good ones',
              'Exactly five',
              'None at all',
            ],
            correctIndex: 1,
            explanation:
              'Dr Mason says, “two or three good sources are plenty. Quality matters more than quantity.” Option B matches.',
          },
          {
            id: 'ls-012-s3-q28',
            type: 'gap',
            prompt:
              'Dr Mason reminds them to ____________ directly from the novel to support each point. Write ONE WORD.',
            acceptableAnswers: ['quote'],
            explanation:
              'He says, “make sure you quote directly from the novel to support each point.” The answer is “quote”.',
          },
          {
            id: 'ls-012-s3-q29',
            type: 'gap',
            prompt: 'The essay deadline is the ____________ of March. Write A NUMBER.',
            acceptableAnswers: ['15', 'fifteenth', '15th'],
            explanation:
              'Dr Mason says, “The deadline is the fifteenth of March.” The answer is the 15th.',
          },
          {
            id: 'ls-012-s3-q30',
            type: 'mcq',
            prompt: 'What does Dr Mason encourage the students to do before the deadline?',
            options: [
              'Submit the final essay early',
              'Send him a draft a week before, for feedback',
              'Present their essay to the class',
              'Read two more novels by the author',
            ],
            correctIndex: 1,
            explanation:
              'He says, “I’d encourage you to send me a draft a week before that, so I can give you feedback in time.” Option B matches.',
          },
        ],
      },
      {
        id: 'ls-academic-12-s4',
        title: 'Section 4 — Lecture: the history of the calendar',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the history of the calendar, from
        // early lunar months to the Julian and Gregorian reforms. Dense, factual and
        // signposted ("let me begin", "by contrast", "finally"), with the note/
        // sentence-completion + multiple-choice mix typical of Section 4, including
        // one True/False/Not Given item.
        transcript: `Good afternoon. Today I'd like to trace how human beings came to measure the year — the long story of the calendar. It's a tale of astronomy, politics and a stubborn mathematical problem.

Let me begin with the most basic unit after the day: the month. The earliest calendars were lunar, meaning they were based on the cycle of the Moon, which takes roughly twenty-nine and a half days to complete its phases. The trouble is that twelve such months add up to about three hundred and fifty-four days, which is some eleven days short of the solar year — the time the Earth takes to orbit the Sun. So a purely lunar calendar slowly drifts out of step with the seasons.

The Egyptians were among the first to base their calendar on the Sun instead, giving a year of three hundred and sixty-five days. But even this is not quite right, because the true solar year is about a quarter of a day longer.

This is where the Romans come in. In the famous reform of forty-six BC, Julius Caesar introduced the system we call the Julian calendar, which added an extra day every four years — what we now call a leap year — to absorb those quarter-days.

Clever as it was, the Julian system was still slightly too long, by about eleven minutes a year. Over centuries, these minutes accumulated, and by the sixteenth century the calendar was ten days out. So in fifteen eighty-two, Pope Gregory the Thirteenth introduced a refinement: the Gregorian calendar, which simply skips a few leap years to keep things accurate. That is the calendar most of the world still uses today. Next week, we'll look at how different cultures number their years.`,
        questions: [
          {
            id: 'ls-012-s4-q31',
            type: 'gap',
            prompt:
              'The earliest calendars were ____________, based on the cycle of the Moon. Write ONE WORD.',
            acceptableAnswers: ['lunar'],
            explanation:
              'The speaker says, “The earliest calendars were lunar, meaning they were based on the cycle of the Moon.” The answer is “lunar”.',
          },
          {
            id: 'ls-012-s4-q32',
            type: 'gap',
            prompt:
              'One lunar month takes roughly twenty-nine and a half ____________ to complete. Write ONE WORD.',
            acceptableAnswers: ['days'],
            explanation:
              'The speaker says the Moon “takes roughly twenty-nine and a half days to complete its phases.” The answer is “days”.',
          },
          {
            id: 'ls-012-s4-q33',
            type: 'mcq',
            prompt: 'Why does a purely lunar calendar drift out of step with the seasons?',
            options: [
              'Because the Moon has no fixed orbit',
              'Because twelve lunar months are about eleven days short of the solar year',
              'Because the seasons last exactly twelve months',
              'Because the Earth slows down each year',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says twelve lunar months “add up to about three hundred and fifty-four days, which is some eleven days short of the solar year,” so the calendar “slowly drifts out of step with the seasons.” Option B matches.',
          },
          {
            id: 'ls-012-s4-q34',
            type: 'gap',
            prompt:
              'The ____________ were among the first to base their calendar on the Sun. Write ONE WORD.',
            acceptableAnswers: ['Egyptians', 'egyptians'],
            explanation:
              'The speaker says, “The Egyptians were among the first to base their calendar on the Sun instead.” The answer is “Egyptians”.',
          },
          {
            id: 'ls-012-s4-q35',
            type: 'tfng',
            prompt: 'The speaker says a year of 365 days exactly matches the true solar year.',
            answer: 'false',
            explanation:
              'The speaker says the 365-day year “is not quite right, because the true solar year is about a quarter of a day longer.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-012-s4-q36',
            type: 'mcq',
            prompt: 'What did the Julian calendar introduce to deal with the extra quarter-day?',
            options: [
              'A shorter month every spring',
              'An extra day every four years, the leap year',
              'A thirteenth month each decade',
              'A year of exactly 354 days',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the Julian calendar “added an extra day every four years — what we now call a leap year — to absorb those quarter-days.” Option B matches.',
          },
          {
            id: 'ls-012-s4-q37',
            type: 'gap',
            prompt:
              'The Julian calendar was introduced by Julius ____________ in 46 BC. Write ONE WORD (a name).',
            acceptableAnswers: ['Caesar', 'caesar'],
            explanation:
              'The speaker says, “In the famous reform of forty-six BC, Julius Caesar introduced the system we call the Julian calendar.” The answer is “Caesar”.',
          },
          {
            id: 'ls-012-s4-q38',
            type: 'mcq',
            prompt: 'What problem remained with the Julian calendar?',
            options: [
              'It was about eleven minutes too long each year',
              'It had too few months',
              'It ignored the Moon entirely',
              'It was about eleven days too short each year',
            ],
            correctIndex: 0,
            explanation:
              'The speaker says the Julian system “was still slightly too long, by about eleven minutes a year”, and these minutes accumulated. Option A matches; the “eleven days” figure refers to the lunar shortfall earlier, a deliberate distractor.',
          },
          {
            id: 'ls-012-s4-q39',
            type: 'gap',
            prompt:
              'By the sixteenth century, the Julian calendar was ____________ days out. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'The speaker says that by the sixteenth century “the calendar was ten days out.” The answer is 10.',
          },
          {
            id: 'ls-012-s4-q40',
            type: 'gap',
            prompt:
              'The calendar most of the world uses today is the ____________ calendar. Write ONE WORD.',
            acceptableAnswers: ['Gregorian', 'gregorian'],
            explanation:
              'The speaker says Pope Gregory the Thirteenth introduced “the Gregorian calendar… That is the calendar most of the world still uses today.” The answer is “Gregorian”.',
          },
        ],
      },
    ],
  },
]
