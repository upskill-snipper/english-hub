// ─── IELTS Academic Listening — practice test data (Set 14) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a parent phoning a
//     leisure centre to enrol two children in swimming lessons), assessed with
//     form / note completion + a multiple-choice item. A surname is spelled and
//     a phone number is dictated, and one detail (the total termly fee) depends
//     on a stated choice (how many children are enrolled).
//   • Section 2 — an everyday MONOLOGUE (here: an announcement about a museum's
//     "Late at the Museum" evening event), assessed with sentence completion +
//     multiple choice, carrying signpost language ("first", "after that",
//     "finally") that the questions track.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial preparing a group economics presentation on local food markets),
//     assessed with multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: the history of writing
//     systems, from clay tokens to the alphabet), assessed with note/sentence
//     completion + multiple choice, including one True/False/Not Given item.
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

export const LISTENING_SET_14: ListeningTest[] = [
  {
    id: 'ls-academic-14',
    title:
      'Practice Test 14 — Enrolling in Swimming Lessons, A Museum Late-Opening Evening, Preparing an Economics Presentation & The History of Writing Systems',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-14-s1',
        title: 'Section 1 — Enrolling children in swimming lessons',
        // ~285 words. Transactional dialogue (Section 1 style): a parent phoning a
        // leisure centre to enrol her two children in swimming lessons. A surname is
        // spelled and a mobile number is dictated; one detail (the total termly fee)
        // depends on a stated choice (how many children are enrolled), mirroring the
        // form/note-completion + multiple-choice mix of a real Section 1.
        transcript: `MAN: Good morning, Westbrook Leisure Centre, Daniel speaking. How can I help you?

WOMAN: Hello, I'd like to sign my children up for swimming lessons, if there are still places.

MAN: There are, yes. Let me take some details. Could I start with your name?

WOMAN: It's Karen Ashworth. Ashworth is spelled A-S-H-W-O-R-T-H.

MAN: Thank you. And a phone number we can reach you on?

WOMAN: Yes, it's oh-seven-eight-one-four, double two, six-oh-three.

MAN: Lovely. Now, how many children are we enrolling?

WOMAN: Two — a boy and a girl. They're seven and nine.

MAN: Right. At those ages they'd both go into the same class, the Dolphins group. That runs on Thursday afternoons at four o'clock.

WOMAN: Thursday is perfect. How much is it?

MAN: It's thirty pounds per child for the term, but when you book two or more from the same family there's a discount, so it works out at twenty-five pounds each.

WOMAN: Good to know. Is there anything they need to bring?

MAN: Just a swimming cap — that's compulsory in the pool. Goggles are optional, but most children prefer them.

WOMAN: And do I pay now?

MAN: You can pay on the first day. One more thing: please arrive about fifteen minutes early for the very first session, so the instructor can assess their swimming level before they get in.

WOMAN: Of course. So that's Thursday at four, arriving quarter to four on the first day.

MAN: Exactly right. We'll see you then.`,
        questions: [
          {
            id: 'ls-014-s1-q1',
            type: 'gap',
            prompt:
              'Complete the enrolment form. Write ONE WORD for the answer.\n\nParent surname: ____________',
            acceptableAnswers: ['Ashworth', 'ashworth'],
            explanation:
              'The caller gives her name as “Karen Ashworth” and spells the surname: A-S-H-W-O-R-T-H. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-014-s1-q2',
            type: 'gap',
            prompt: 'Contact phone number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: [
              '07814 22603',
              '0781422603',
              '07814226 03',
              '07814 226 03',
              '07814226 03',
            ],
            explanation:
              'She dictates the number as “oh-seven-eight-one-four, double two, six-oh-three” — that is 07814 22603. “Double two” means two 2s, and “oh” is zero; spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-014-s1-q3',
            type: 'gap',
            prompt: 'Number of children being enrolled: ____________. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'She says, “Two — a boy and a girl.” The number of children is 2. This figure also triggers the family discount in a later question — Section 1 details often connect.',
          },
          {
            id: 'ls-014-s1-q4',
            type: 'gap',
            prompt: 'Both children will be placed in the ____________ group. Write ONE WORD.',
            acceptableAnswers: ['Dolphins', 'dolphins', 'Dolphin', 'dolphin'],
            explanation:
              'The assistant says, “they’d both go into the same class, the Dolphins group.” The answer is “Dolphins”.',
          },
          {
            id: 'ls-014-s1-q5',
            type: 'gap',
            prompt:
              'The lessons take place on ____________ afternoons at four o’clock. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Thursday', 'thursday', 'Thursdays', 'thursdays'],
            explanation:
              'He says the Dolphins group “runs on Thursday afternoons at four o’clock.” The answer is “Thursday”.',
          },
          {
            id: 'ls-014-s1-q6',
            type: 'mcq',
            prompt: 'How much will the parent pay in total for the term?',
            options: [
              'Thirty pounds, the standard price per child',
              'Fifty pounds, for two children at the discounted rate',
              'Sixty pounds, for two children at the standard rate',
              'Twenty-five pounds, for one child with a discount',
            ],
            correctIndex: 1,
            explanation:
              'The standard price is thirty pounds per child, but booking “two or more from the same family” cuts it to “twenty-five pounds each.” With two children (Q3), the total is 2 × £25 = £50. The distractors reuse the real figures but apply the wrong rate or number of children.',
          },
          {
            id: 'ls-014-s1-q7',
            type: 'gap',
            prompt:
              'In the pool, each child must wear a swimming ____________, which is compulsory. Write ONE WORD.',
            acceptableAnswers: ['cap', 'hat'],
            explanation:
              'He says, “Just a swimming cap — that’s compulsory in the pool.” The answer is “cap” (hat accepted as a synonym). Goggles are mentioned only as optional, a distractor.',
          },
          {
            id: 'ls-014-s1-q8',
            type: 'gap',
            prompt:
              'On the first day, families should arrive about ____________ minutes early. Write A NUMBER.',
            acceptableAnswers: ['15', 'fifteen'],
            explanation:
              'He asks them to “arrive about fifteen minutes early for the very first session, so the instructor can assess their swimming level.” The answer is 15.',
          },
          {
            id: 'ls-014-s1-q9',
            type: 'mcq',
            prompt: 'When can the parent pay for the lessons?',
            options: [
              'Immediately, over the phone',
              'On the first day of lessons',
              'At the end of the term',
              'Online before the first session',
            ],
            correctIndex: 1,
            explanation:
              'When she asks, “do I pay now?”, the assistant replies, “You can pay on the first day.” Option B matches; no phone or online payment is offered.',
          },
          {
            id: 'ls-014-s1-q10',
            type: 'gap',
            prompt:
              'The instructor will assess each child’s swimming ____________ before the first session begins. Write ONE WORD.',
            acceptableAnswers: ['level'],
            explanation:
              'He says to arrive early “so the instructor can assess their swimming level before they get in.” The answer is “level”.',
          },
        ],
      },
      {
        id: 'ls-academic-14-s2',
        title: 'Section 2 — A museum late-opening evening event',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // announcing the programme for a museum's "Late at the Museum" evening
        // event. Uses sequencing/signpost language ("to begin", "after that",
        // "finally") that the questions follow in order, with a sentence-completion
        // + multiple-choice mix.
        transcript: `Good evening, everyone, and a very warm welcome to "Late at the Museum". My name is Olivia, and I'll be your host for tonight. For one evening a month, we open our doors after hours so that adults can explore the galleries without the daytime crowds, and tonight we've got a full programme for you.

To begin with, a practical note. The main galleries on the ground and first floors are open as usual, but please be aware that the children's discovery zone is closed this evening, as tonight's event is strictly for over-eighteens.

Our headline attraction is in the Long Gallery, where we've just unveiled a temporary exhibition of Roman jewellery, most of it discovered locally and never displayed before. A curator will be giving a short, free talk there at half past seven, and again at half past eight for anyone who misses the first one.

After that, if you fancy something hands-on, head down to the basement workshop, where you can try making your own clay lamp using Roman techniques. Places are limited, so do sign up at the front desk when you arrive.

Now, refreshments. The café by the entrance is open all evening and, unusually for us, is serving drinks as well as coffee. I should mention that food and drink are not permitted in any of the galleries — please finish them in the café area.

Finally, a reminder that the gift shop closes at nine, half an hour before the museum itself, so do your shopping early. We hope you have a wonderful evening — please explore, ask questions, and enjoy the museum after dark.`,
        questions: [
          {
            id: 'ls-014-s2-q9',
            type: 'mcq',
            prompt: 'How often does the museum hold its "Late at the Museum" event?',
            options: ['Every evening', 'Once a week', 'Once a month', 'Once a year'],
            correctIndex: 2,
            explanation:
              'The host says, “For one evening a month, we open our doors after hours.” Option C matches. Listen for the frequency phrase early in a Section 2 talk.',
          },
          {
            id: 'ls-014-s2-q10',
            type: 'mcq',
            prompt: 'What does the speaker say about the children’s discovery zone tonight?',
            options: [
              'It is open later than usual',
              'It is closed, because the event is for adults only',
              'It has moved to the basement',
              'It requires a separate ticket',
            ],
            correctIndex: 1,
            explanation:
              'She says “the children’s discovery zone is closed this evening, as tonight’s event is strictly for over-eighteens.” Option B matches; the event being adults-only is the stated reason.',
          },
          {
            id: 'ls-014-s2-q11',
            type: 'gap',
            prompt:
              'The temporary exhibition in the Long Gallery features Roman ____________. Write ONE WORD.',
            acceptableAnswers: ['jewellery', 'jewelry'],
            explanation:
              'She says they have “just unveiled a temporary exhibition of Roman jewellery, most of it discovered locally.” The answer is “jewellery” (American spelling “jewelry” accepted).',
          },
          {
            id: 'ls-014-s2-q12',
            type: 'gap',
            prompt:
              'The curator’s first free talk begins at ____________. Write the time as you hear it.',
            acceptableAnswers: [
              '7.30',
              '7:30',
              'half past seven',
              'half past 7',
              '19:30',
              '7.30pm',
              '7:30 pm',
            ],
            explanation:
              'She says “A curator will be giving a short, free talk there at half past seven.” That is 7.30 (a second talk follows at half past eight, a distractor).',
          },
          {
            id: 'ls-014-s2-q13',
            type: 'gap',
            prompt:
              'In the basement workshop, visitors can try making their own clay ____________ using Roman techniques. Write ONE WORD.',
            acceptableAnswers: ['lamp', 'lamps'],
            explanation:
              'She says you can “try making your own clay lamp using Roman techniques.” The answer is “lamp”.',
          },
          {
            id: 'ls-014-s2-q14',
            type: 'mcq',
            prompt: 'What must visitors do to take part in the workshop?',
            options: [
              'Pay a small fee at the door',
              'Sign up at the front desk on arrival',
              'Book online before the event',
              'Bring their own materials',
            ],
            correctIndex: 1,
            explanation:
              'She says, “Places are limited, so do sign up at the front desk when you arrive.” Option B matches; no fee or online booking is mentioned.',
          },
          {
            id: 'ls-014-s2-q15',
            type: 'mcq',
            prompt: 'What is unusual about the café this evening?',
            options: [
              'It is open for the first time',
              'It is serving alcoholic drinks as well as coffee',
              'It is offering free refreshments',
              'It has moved into one of the galleries',
            ],
            correctIndex: 1,
            explanation:
              'She says the café “is open all evening and, unusually for us, is serving drinks as well as coffee.” In context (an over-eighteens evening event), the unusual detail is that it serves drinks, i.e. alcohol, alongside coffee. Option B matches; the café is not described as new or free.',
          },
          {
            id: 'ls-014-s2-q16',
            type: 'gap',
            prompt:
              'Food and drink may only be consumed in the ____________ area, not in the galleries. Write ONE WORD.',
            acceptableAnswers: ['café', 'cafe'],
            explanation:
              'She says “food and drink are not permitted in any of the galleries — please finish them in the café area.” The answer is “café” (cafe accepted).',
          },
          {
            id: 'ls-014-s2-q17',
            type: 'gap',
            prompt:
              'The gift shop closes at ____________ o’clock, half an hour before the museum. Write A NUMBER.',
            acceptableAnswers: ['9', 'nine'],
            explanation:
              'She says “the gift shop closes at nine, half an hour before the museum itself.” The shop closes at 9 (the museum closes at half past nine, a distractor).',
          },
          {
            id: 'ls-014-s2-q18',
            type: 'gap',
            prompt:
              'For visitors who miss the first talk, the curator repeats it at ____________. Write the time as you hear it.',
            acceptableAnswers: [
              '8.30',
              '8:30',
              'half past eight',
              'half past 8',
              '20:30',
              '8.30pm',
              '8:30 pm',
            ],
            explanation:
              'She says the curator will talk at half past seven “and again at half past eight for anyone who misses the first one.” The repeat talk is at 8.30 (half past seven is the first talk, a distractor).',
          },
        ],
      },
      {
        id: 'ls-academic-14-s3',
        title: 'Section 3 — Tutorial: preparing an economics presentation',
        // ~295 words. Academic discussion (Section 3 style): two students (Megan and
        // Raj) and a tutor (Dr Lowe) prepare a group economics presentation on local
        // food markets. Speakers debate the topic focus, the data they will use, a
        // problem with a survey, how to divide the work and the presentation format,
        // so the questions mix multiple choice (decisions/opinions) with completion
        // (concrete details).
        transcript: `DR LOWE: Right, Megan and Raj, let's talk through your economics presentation. What have you settled on?

MEGAN: We're looking at local food markets — the open-air ones in the town square — and whether they're still economically viable now that the big supermarkets dominate.

DR LOWE: A good, focused question. What angle are you taking?

RAJ: At first we wanted to cover the whole region, but that felt too broad, so we've narrowed it to just our own town. We can go into much more depth that way.

DR LOWE: Wise. Depth beats breadth in a short presentation. What data are you using?

MEGAN: Two things. We've got footfall figures from the council showing how many shoppers visit the market each week, and we ran a short survey of the stallholders themselves about their takings.

DR LOWE: And how did the survey go?

RAJ: That was our main problem, actually. We'd planned to interview thirty traders, but a lot were too busy serving customers, so we only managed eighteen.

DR LOWE: That's still a usable sample, as long as you're honest about the number. Don't claim it represents everyone. Now, how are you dividing the talk?

MEGAN: Raj will present the background and the footfall data, and I'll handle the survey results and our conclusions.

DR LOWE: Sensible. And the format — slides?

RAJ: Yes, but we want to avoid death by bullet points. We're planning to build the whole thing around one big chart that we return to throughout.

DR LOWE: I like that. One clear visual anchor is far more memorable than a wall of text. Just rehearse your timing — ten minutes goes very quickly.`,
        questions: [
          {
            id: 'ls-014-s3-q18',
            type: 'mcq',
            prompt: 'What is the main question the students’ presentation will address?',
            options: [
              'Whether supermarkets should be taxed more heavily',
              'Whether local open-air food markets are still economically viable',
              'How to set up a new market stall',
              'Why shoppers prefer supermarkets to markets',
            ],
            correctIndex: 1,
            explanation:
              'Megan says they are looking at local food markets “and whether they’re still economically viable now that the big supermarkets dominate.” Option B matches the focus question.',
          },
          {
            id: 'ls-014-s3-q19',
            type: 'mcq',
            prompt: 'Why did the students narrow the scope of their presentation?',
            options: [
              'Because covering the whole region felt too broad',
              'Because the tutor told them to change topic',
              'Because they could not find regional data',
              'Because the town has the most markets',
            ],
            correctIndex: 0,
            explanation:
              'Raj says, “At first we wanted to cover the whole region, but that felt too broad, so we’ve narrowed it to just our own town.” Option A matches the reason given.',
          },
          {
            id: 'ls-014-s3-q20',
            type: 'gap',
            prompt:
              'The students obtained ____________ figures from the council showing how many shoppers visit the market each week. Write ONE WORD.',
            acceptableAnswers: ['footfall'],
            explanation:
              'Megan says, “We’ve got footfall figures from the council showing how many shoppers visit the market each week.” The answer is “footfall”.',
          },
          {
            id: 'ls-014-s3-q21',
            type: 'gap',
            prompt:
              'For their second data source, the students ran a short ____________ of the stallholders about their takings. Write ONE WORD.',
            acceptableAnswers: ['survey'],
            explanation:
              'Megan says, “we ran a short survey of the stallholders themselves about their takings.” The answer is “survey”.',
          },
          {
            id: 'ls-014-s3-q22',
            type: 'mcq',
            prompt: 'What was the students’ main problem with the survey?',
            options: [
              'The traders refused to answer any questions',
              'They interviewed far fewer traders than planned',
              'The council would not release the data',
              'The survey questions were poorly worded',
            ],
            correctIndex: 1,
            explanation:
              'Raj says, “We’d planned to interview thirty traders, but a lot were too busy serving customers, so we only managed eighteen.” Option B matches — the sample was smaller than planned.',
          },
          {
            id: 'ls-014-s3-q23',
            type: 'gap',
            prompt:
              'In the end, the students managed to interview ____________ traders. Write A NUMBER.',
            acceptableAnswers: ['18', 'eighteen'],
            explanation:
              'Raj says they “only managed eighteen” traders, having planned for thirty. The answer is 18 (thirty is the planned figure, a distractor).',
          },
          {
            id: 'ls-014-s3-q24',
            type: 'mcq',
            prompt: 'What advice does the tutor give about the smaller sample?',
            options: [
              'To collect the missing twelve interviews before the talk',
              'To be honest about the number and not claim it represents everyone',
              'To leave the survey out of the presentation',
              'To combine it with another group’s data',
            ],
            correctIndex: 1,
            explanation:
              'Dr Lowe says it is “still a usable sample, as long as you’re honest about the number. Don’t claim it represents everyone.” Option B matches the advice.',
          },
          {
            id: 'ls-014-s3-q25',
            type: 'gap',
            prompt:
              'In dividing the work, Megan will handle the survey results and the ____________. Write ONE WORD.',
            acceptableAnswers: ['conclusions', 'conclusion'],
            explanation:
              'Megan says, “Raj will present the background and the footfall data, and I’ll handle the survey results and our conclusions.” The answer is “conclusions”.',
          },
          {
            id: 'ls-014-s3-q26',
            type: 'mcq',
            prompt: 'How do the students plan to design their slides?',
            options: [
              'Using many bullet points for clarity',
              'Around one big chart they return to throughout',
              'With no visuals, just spoken delivery',
              'As a printed handout instead of slides',
            ],
            correctIndex: 1,
            explanation:
              'Raj says they want to avoid “death by bullet points” and will “build the whole thing around one big chart that we return to throughout.” Option B matches; bullet points are what they are deliberately avoiding.',
          },
          {
            id: 'ls-014-s3-q27',
            type: 'gap',
            prompt:
              'The tutor reminds them to rehearse their timing, as the talk is only ____________ minutes long. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'Dr Lowe says, “Just rehearse your timing — ten minutes goes very quickly.” The answer is 10.',
          },
        ],
      },
      {
        id: 'ls-academic-14-s4',
        title: 'Section 4 — Lecture: the history of writing systems',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the history of writing systems,
        // from clay accounting tokens in Mesopotamia to the alphabet. Dense, factual
        // and signposted ("let me begin", "next", "finally"), with the note/sentence-
        // completion + multiple-choice mix typical of Section 4, including one
        // True/False/Not Given item.
        transcript: `Good morning. Today I want to trace how human beings first learned to write — a development that, more than almost any other, made history itself possible. I'll move from the very earliest records to the invention of the alphabet.

Let me begin with the deep origins. Long before true writing, people in ancient Mesopotamia kept track of goods using small clay tokens, each shape standing for a particular item, such as a sheep or a jar of oil. These were an accounting tool, not a language, but they planted the seed.

The first real writing grew out of this around five thousand years ago. The Sumerians began pressing marks into wet clay tablets with a reed, producing a script we call cuneiform — a word that simply means "wedge-shaped". At first these signs were pictures of objects, but over time they became more abstract and could represent sounds as well as things.

A separate system arose in Egypt at roughly the same time: hieroglyphs. It's a common myth that hieroglyphs were purely picture-writing; in fact, many of the signs stood for sounds, much like letters. Importantly, there is no firm evidence that one of these two systems copied the other — scholars generally regard them as independent inventions.

The truly revolutionary step came later, with the alphabet. Earlier scripts needed hundreds of signs, which only specialist scribes could master. The great innovation, credited to the Phoenicians, was a small set of symbols, each standing for a single sound. With only a couple of dozen signs to learn, writing was no longer the preserve of an elite. Next week we'll look at how the Greeks adapted that alphabet by adding vowels.`,
        questions: [
          {
            id: 'ls-014-s4-q28',
            type: 'gap',
            prompt:
              'In ancient Mesopotamia, people first kept track of goods using small clay ____________. Write ONE WORD.',
            acceptableAnswers: ['tokens', 'token'],
            explanation:
              'The speaker says people “kept track of goods using small clay tokens, each shape standing for a particular item.” The answer is “tokens”.',
          },
          {
            id: 'ls-014-s4-q29',
            type: 'mcq',
            prompt: 'According to the lecture, what were the clay tokens originally used for?',
            options: [
              'Recording a spoken language',
              'Keeping accounts of goods',
              'Religious ceremonies',
              'Teaching children to write',
            ],
            correctIndex: 1,
            explanation:
              'The speaker stresses the tokens “were an accounting tool, not a language.” Option B matches; he explicitly says they did not record a language, ruling out option A.',
          },
          {
            id: 'ls-014-s4-q30',
            type: 'gap',
            prompt:
              'The Sumerians produced their script by pressing marks into wet clay tablets with a ____________. Write ONE WORD.',
            acceptableAnswers: ['reed'],
            explanation:
              'The speaker says the Sumerians “began pressing marks into wet clay tablets with a reed.” The answer is “reed”.',
          },
          {
            id: 'ls-014-s4-q31',
            type: 'gap',
            prompt:
              'The Sumerian script is called ____________, a word meaning "wedge-shaped". Write ONE WORD.',
            acceptableAnswers: ['cuneiform'],
            explanation:
              'The speaker says this script “we call cuneiform — a word that simply means ‘wedge-shaped’.” The answer is “cuneiform”.',
          },
          {
            id: 'ls-014-s4-q32',
            type: 'gap',
            prompt:
              'The first real writing emerged about ____________ thousand years ago. Write A NUMBER.',
            acceptableAnswers: ['5', 'five'],
            explanation:
              'The speaker says the first real writing grew out of the tokens “around five thousand years ago.” The answer is 5.',
          },
          {
            id: 'ls-014-s4-q33',
            type: 'mcq',
            prompt: 'What does the speaker say about the early cuneiform signs?',
            options: [
              'They never changed over time',
              'They began as pictures and became more abstract',
              'They were borrowed from Egypt',
              'They could only represent numbers',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “At first these signs were pictures of objects, but over time they became more abstract and could represent sounds as well as things.” Option B matches.',
          },
          {
            id: 'ls-014-s4-q34',
            type: 'tfng',
            prompt:
              'The speaker says that Egyptian hieroglyphs were purely picture-writing, with no signs standing for sounds.',
            answer: 'false',
            explanation:
              'The speaker calls this “a common myth”, adding that “in fact, many of the signs stood for sounds, much like letters.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-014-s4-q35',
            type: 'mcq',
            prompt:
              'What does the speaker say about the relationship between cuneiform and hieroglyphs?',
            options: [
              'Hieroglyphs were directly copied from cuneiform',
              'Cuneiform was copied from hieroglyphs',
              'They are generally regarded as independent inventions',
              'They were invented by the same people',
            ],
            correctIndex: 2,
            explanation:
              'The speaker says “there is no firm evidence that one of these two systems copied the other — scholars generally regard them as independent inventions.” Option C matches.',
          },
          {
            id: 'ls-014-s4-q36',
            type: 'gap',
            prompt:
              'The invention of the alphabet is credited to the ____________. Write ONE WORD.',
            acceptableAnswers: ['Phoenicians', 'phoenicians', 'Phoenician', 'phoenician'],
            explanation:
              'The speaker says the alphabet was “credited to the Phoenicians.” The answer is “Phoenicians”.',
          },
          {
            id: 'ls-014-s4-q37',
            type: 'mcq',
            prompt: 'Why does the speaker describe the alphabet as a revolutionary step?',
            options: [
              'It used hundreds of complex signs',
              'It could only be used by trained scribes',
              'Its small set of symbols meant writing was no longer limited to an elite',
              'It was the first system to use clay tablets',
            ],
            correctIndex: 2,
            explanation:
              'The speaker says earlier scripts “needed hundreds of signs, which only specialist scribes could master”, whereas the alphabet had “only a couple of dozen signs to learn”, so “writing was no longer the preserve of an elite.” Option C matches.',
          },
        ],
      },
    ],
  },
]
