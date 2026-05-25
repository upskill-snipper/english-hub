// ─── IELTS Academic Listening — practice test data (Set 3) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set adds ONE original two-section practice test that mirrors the two most
// common section TYPES (the same shorter ~14-question warm-up shape as Set 1):
//   • Section 1 — an everyday discussion about a local event (here: two people
//     planning a community "Green Fair"), assessed with form / note completion
//     + a multiple-choice item.
//   • Section 2 — an ACADEMIC seminar excerpt (here: a study-skills tutor on
//     reading research articles efficiently), assessed with sentence / note
//     completion + multiple choice.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_3: ListeningTest[] = [
  {
    id: 'ls-acad-s3-1',
    title: 'Practice Test 3 — Community Green Fair & Reading Research Articles',
    estimatedMinutes: 15,
    sections: [
      {
        id: 'ls-acad-s3-1-s1',
        title: 'Section 1 — Planning the community Green Fair',
        // ~225 words. Everyday discussion (Section 1 style): two neighbours
        // organising a local event. A surname is spelled, a date and a number
        // are dictated, and one detail (the chosen stall) follows a stated
        // choice — mirroring the form/note-completion + multiple-choice mix.
        transcript: `WOMAN: Right, thanks for meeting me, Leo. I'm pulling together the volunteer list for the Green Fair, so I just need a few details.

MAN: No problem, happy to help. Where do you want to start?

WOMAN: Let's start with your name for the badge. It's Leo — and your surname?

MAN: Hartley. That's H-A-R-T-L-E-Y.

WOMAN: Great, thank you. And the fair is on Saturday the twenty-second, in Wellington Park — does that day still work for you?

MAN: Saturday the twenty-second, yes, that's fine.

WOMAN: Perfect. Now, we've three stalls still needing a volunteer: the plant swap, the repair café, and the recycling craft table. Which would you prefer?

MAN: I'd love the repair café — I'm fairly handy, so I could actually fix a few things.

WOMAN: Wonderful, I'll put you down for that. It runs from ten in the morning until four, but volunteers do shifts of two hours each, so you won't be there the whole time.

MAN: That suits me. Is there anything I should bring?

WOMAN: Just a basic toolkit if you have one, and wear something you don't mind getting dirty. Oh, and parking by the park is limited, so most people come by bike — there's a free rack near the main gate.

MAN: Bike it is. Thanks, this sounds great.

WOMAN: Brilliant. I'll email you the full schedule this week.`,
        questions: [
          {
            id: 'ls-acad-s3-1-s1-q1',
            type: 'gap',
            prompt:
              'Complete the volunteer form. Write ONE WORD for the answer.\n\nVolunteer surname: ____________',
            acceptableAnswers: ['Hartley', 'hartley'],
            explanation:
              'He gives his name as “Leo Hartley” and spells the surname out: H-A-R-T-L-E-Y. In Section 1, surnames are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-acad-s3-1-s1-q2',
            type: 'gap',
            prompt: 'Date of the fair: Saturday the ____________. Write A NUMBER.',
            acceptableAnswers: ['22', 'twenty-second', 'twenty second', '22nd'],
            explanation:
              'The organiser confirms the fair is “on Saturday the twenty-second”, so the date is the 22nd. Ordinal numbers said aloud (twenty-second) map to the digits 22.',
          },
          {
            id: 'ls-acad-s3-1-s1-q3',
            type: 'gap',
            prompt: 'Location of the fair: ____________ Park. Write ONE WORD.',
            acceptableAnswers: ['Wellington', 'wellington'],
            explanation:
              'She says the fair is “in Wellington Park”. The answer is the single word that names the park — “Wellington”.',
          },
          {
            id: 'ls-acad-s3-1-s1-q4',
            type: 'mcq',
            prompt: 'Which stall does the man choose to volunteer at?',
            options: [
              'The plant swap, because he enjoys gardening',
              'The repair café, because he can fix things',
              'The recycling craft table, because it is easiest',
              'The plant swap, because it is the quietest',
            ],
            correctIndex: 1,
            explanation:
              'He says, “I’d love the repair café — I’m fairly handy, so I could actually fix a few things.” The distractors reuse the other real stall names from the audio, but none matches his stated reason. Listen for the reason, not just the keyword.',
          },
          {
            id: 'ls-acad-s3-1-s1-q5',
            type: 'gap',
            prompt: 'Volunteers work in shifts of ____________ hours each. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'She explains the stall “runs from ten in the morning until four, but volunteers do shifts of two hours each.” The shift length is 2 hours — note that the opening times (ten to four) are a distractor.',
          },
          {
            id: 'ls-acad-s3-1-s1-q6',
            type: 'gap',
            prompt: 'The man is asked to bring a basic ____________ if he has one. Write ONE WORD.',
            acceptableAnswers: ['toolkit', 'tool-kit', 'tool kit'],
            explanation:
              'She says, “Just a basic toolkit if you have one.” The answer is “toolkit” (hyphenated or spaced forms are accepted).',
          },
          {
            id: 'ls-acad-s3-1-s1-q7',
            type: 'gap',
            prompt:
              'Because parking is limited, most people travel to the fair by ____________. Write ONE WORD.',
            acceptableAnswers: ['bike', 'bicycle'],
            explanation:
              'She notes that “parking by the park is limited, so most people come by bike — there’s a free rack near the main gate.” The recommended mode of travel is by bike (bicycle accepted as a synonym).',
          },
        ],
      },
      {
        id: 'ls-acad-s3-1-s2',
        title: 'Section 2 — Study-skills seminar: reading research articles',
        // ~245 words. Academic seminar excerpt (Section 2 style): a single
        // speaker (a study-skills tutor) gives strategy advice on reading
        // research papers efficiently. Uses sequencing/signpost language
        // ("first", "after that", "finally") that the questions follow in
        // order, with a sentence/note-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and welcome to today's study-skills session. I'm Dr Okafor, and over the next twenty minutes I want to share a practical strategy for reading research articles — because, frankly, most students try to read them from the first word to the last, and that's the slowest possible way to do it.

So, first, a warning: do not start at the beginning and plough straight through. A journal article is not a novel. Instead, read it in a deliberate order based on what each part does.

The single most useful section to read first is the abstract. Think of the abstract as a summary in miniature — in roughly two hundred words it tells you the question, the method, and the main finding. If the abstract isn't relevant to your essay, you can stop right there and save yourself an hour.

After the abstract, skip ahead to the conclusion. Authors restate their key results there in plain language, without the heavy statistics you find in the middle of the paper. Only once you know the conclusion should you go back and examine the methods, and even then, read selectively.

Now, a quick but important point about note-taking. As you read, write your notes in your own words. If you simply copy sentences across, two problems follow: you don't really process the ideas, and you risk accidental plagiarism later when you write your essay. Paraphrasing as you go protects you on both counts.

Finally, always record the full reference — author, year, title, and page numbers — the moment you take a note, not at the end. Chasing missing references the night before a deadline is a misery I'd like to spare you. Right, let's try the technique on a sample paper.`,
        questions: [
          {
            id: 'ls-acad-s3-1-s2-q8',
            type: 'mcq',
            prompt: 'What is the main point the speaker makes at the start of the talk?',
            options: [
              'Research articles should be read like novels, from start to finish.',
              'Reading an article straight through from the beginning is inefficient.',
              'Students should avoid reading research articles altogether.',
              'The introduction is the most important part of any article.',
            ],
            correctIndex: 1,
            explanation:
              'She opens by criticising the habit of reading “from the first word to the last”, calling it “the slowest possible way”, and warns: “do not start at the beginning and plough straight through.” Option B captures this; the others contradict or overstate what she says.',
          },
          {
            id: 'ls-acad-s3-1-s2-q9',
            type: 'gap',
            prompt:
              'The speaker advises reading the ____________ first, as it summarises the question, method and main finding. Write ONE WORD.',
            acceptableAnswers: ['abstract'],
            explanation:
              'She calls it “the single most useful section to read first” and describes it as “a summary in miniature”. The answer is “abstract”.',
          },
          {
            id: 'ls-acad-s3-1-s2-q10',
            type: 'gap',
            prompt:
              'According to the speaker, a typical abstract is roughly ____________ words long. Write A NUMBER.',
            acceptableAnswers: ['200', 'two hundred', 'twohundred'],
            explanation:
              'She says the abstract tells you the question, method and finding “in roughly two hundred words.” The answer is 200 — numbers said as words still count, but writing the digits is safest.',
          },
          {
            id: 'ls-acad-s3-1-s2-q11',
            type: 'mcq',
            prompt: 'Why does the speaker recommend reading the conclusion before the methods?',
            options: [
              'Because the conclusion contains the most detailed statistics',
              'Because the conclusion restates the key results in plain language',
              'Because the methods section is usually optional',
              'Because the conclusion lists all the references',
            ],
            correctIndex: 1,
            explanation:
              'She explains that in the conclusion, “authors restate their key results there in plain language, without the heavy statistics you find in the middle of the paper.” Option B matches; the statistics are in the middle, not the conclusion.',
          },
          {
            id: 'ls-acad-s3-1-s2-q12',
            type: 'gap',
            prompt:
              'When taking notes, students should write in their own ____________ rather than copying sentences. Write ONE WORD.',
            acceptableAnswers: ['words'],
            explanation:
              'She advises, “write your notes in your own words”, warning that copying sentences leads to weak understanding and accidental plagiarism. The answer is “words”.',
          },
          {
            id: 'ls-acad-s3-1-s2-q13',
            type: 'mcq',
            prompt: 'What does the speaker say is a risk of copying sentences directly into notes?',
            options: [
              'The notes become too long to use later',
              'You may commit accidental plagiarism when writing your essay',
              'You forget which article the sentence came from',
              'The statistics are harder to understand',
            ],
            correctIndex: 1,
            explanation:
              'She warns that copying sentences means “you risk accidental plagiarism later when you write your essay” (as well as not processing the ideas). Option B is the risk she names directly.',
          },
          {
            id: 'ls-acad-s3-1-s2-q14',
            type: 'gap',
            prompt:
              'The speaker says you should record the full ____________ — author, year, title and page numbers — as soon as you take a note. Write ONE WORD.',
            acceptableAnswers: ['reference', 'citation'],
            explanation:
              'She says to “always record the full reference — author, year, title, and page numbers — the moment you take a note, not at the end.” The answer is “reference” (citation accepted as a synonym).',
          },
        ],
      },
    ],
  },
]
