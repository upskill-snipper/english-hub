// ─── IELTS placement diagnostic — extra Listening content ──────────────────
// Three ORIGINAL listening sections that extend the single "Joining the City
// Library" section in diagnostic-items.ts, giving the placement test a much
// wider, difficulty-graded sample so it can separate band levels reliably.
//
// Difficulty rises across the set, mirroring a real IELTS Listening paper:
//   • Section 1 (EASIER)  — everyday transactional DIALOGUE (booking a course).
//   • Section 2 (MEDIUM)  — everyday MONOLOGUE (a visitor-centre talk).
//   • Section 3 (HARDER)  — academic DISCUSSION (a tutorial on a field project).
//
// Each `transcript` is read aloud by the Wave 1 text-to-speech stand-in AND
// shown in the post-submit review, so every answer is plainly derivable from
// the words spoken: names are spelled out, numbers are dictated. All content is
// original and written for this placement only — there is no official IELTS
// affiliation. The shared shapes come from @/lib/ielts/types; ids use a
// `diag-l2-*` prefix to avoid colliding with the existing `diag-l-*` ids.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningSection } from '@/lib/ielts/types'

export const DIAGNOSTIC_LISTENING_EXTRA: ListeningSection[] = [
  // ─── Section 1 — EASIER: transactional dialogue ──────────────────────────
  {
    id: 'diag-l2-s1',
    title: 'Booking a Pottery Course',
    transcript: `RECEPTIONIST: Good afternoon, Hillside Community Centre. How can I help you?

CALLER: Hello. I saw a poster about your evening pottery classes and I'd like to sign up.

RECEPTIONIST: Lovely. Our beginners' course runs for eight weeks, starting on the fourth of June. The classes are on Tuesday evenings, from half past six until eight o'clock.

CALLER: That suits me well. How much does the whole course cost?

RECEPTIONIST: It's ninety pounds in total, and that includes all your clay and the use of our tools. You only need to bring an apron.

CALLER: Great. Could I pay in two instalments?

RECEPTIONIST: Yes, that's fine. Now, can I take a few details? What's your full name?

CALLER: It's Megan Doyle. The surname is spelled D-O-Y-L-E.

RECEPTIONIST: Thank you. And a contact number?

CALLER: Yes, it's oh-seven-seven-double-one, four-oh-three, nine-six-two.

RECEPTIONIST: Got that. The teacher is Anna, and she'll email you a short list of what to expect before the first session. One thing to note — the studio is the building behind the main hall, not the hall itself, so do allow a few extra minutes to find it.

CALLER: Good to know. Is there parking on site?

RECEPTIONIST: There's a small car park, but it fills up quickly, so most people use the free spaces on Maple Street.

CALLER: Perfect. Thank you so much for your help.`,
    questions: [
      {
        id: 'diag-l2-s1-q1',
        type: 'gap',
        prompt: 'Complete the sentence with a NUMBER: The beginners’ course runs for ______ weeks.',
        acceptableAnswers: ['8', 'eight'],
        explanation: 'The receptionist says "Our beginners’ course runs for eight weeks".',
      },
      {
        id: 'diag-l2-s1-q2',
        type: 'mcq',
        prompt: 'On which evening are the classes held?',
        options: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
        correctIndex: 1,
        explanation: 'The receptionist says "The classes are on Tuesday evenings".',
      },
      {
        id: 'diag-l2-s1-q3',
        type: 'gap',
        prompt:
          'Complete the sentence: The classes finish at ______ o’clock. (ONE WORD OR A NUMBER)',
        acceptableAnswers: ['8', 'eight'],
        explanation:
          'The classes run "from half past six until eight o’clock", so they finish at eight.',
      },
      {
        id: 'diag-l2-s1-q4',
        type: 'gap',
        prompt: 'Complete the sentence with a NUMBER: The whole course costs £______ in total.',
        acceptableAnswers: ['90', 'ninety'],
        explanation:
          'The receptionist says it is "ninety pounds in total, and that includes all your clay".',
      },
      {
        id: 'diag-l2-s1-q5',
        type: 'mcq',
        prompt: 'What must the caller bring to the classes?',
        options: ['Her own clay', 'A set of tools', 'An apron', 'A notebook'],
        correctIndex: 2,
        explanation:
          'The fee includes clay and tools; the receptionist adds "You only need to bring an apron."',
      },
      {
        id: 'diag-l2-s1-q6',
        type: 'gap',
        prompt: 'Complete the caller’s surname (spell it correctly): Megan ______.',
        acceptableAnswers: ['Doyle'],
        explanation: 'The caller says "the surname is spelled D-O-Y-L-E", i.e. Doyle.',
      },
      {
        id: 'diag-l2-s1-q7',
        type: 'gap',
        prompt: 'Complete the contact number: 0771 1403 ______.',
        acceptableAnswers: ['962', 'nine six two', 'nine-six-two'],
        explanation: 'The caller dictates the number ending "nine-six-two", i.e. 962.',
      },
      {
        id: 'diag-l2-s1-q8',
        type: 'mcq',
        prompt: 'Where exactly is the pottery studio?',
        options: [
          'Inside the main hall',
          'In the building behind the main hall',
          'On the second floor of the centre',
          'Next to the car park on Maple Street',
        ],
        correctIndex: 1,
        explanation:
          'The receptionist says "the studio is the building behind the main hall, not the hall itself".',
      },
      {
        id: 'diag-l2-s1-q9',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE WORD: Most people park in the free spaces on ______ Street.',
        acceptableAnswers: ['Maple'],
        explanation: 'The receptionist says "most people use the free spaces on Maple Street".',
      },
    ],
  },

  // ─── Section 2 — MEDIUM: monologue (visitor-centre talk) ──────────────────
  {
    id: 'diag-l2-s2',
    title: 'Welcome Talk at Brackenfell Nature Reserve',
    transcript: `Good morning everyone, and a warm welcome to Brackenfell Nature Reserve. My name is Tom and I'll give you a quick introduction before you set off to explore on your own. The reserve covers about four hundred hectares of woodland, wetland and open meadow, and it was first opened to the public in nineteen eighty-five.

There are three marked walking trails, each shown in a different colour on your map. The red trail is the shortest, at just two kilometres, and it's mostly flat, so it's ideal if you have young children or limited time. The blue trail is longer and takes you down to the lake, where we have a wooden bird hide. The green trail is the most demanding — it climbs to the ridge and back, and you should allow about three hours to complete it.

A few practical points. The café beside the entrance serves hot food until three o'clock, but please note it is closed on Mondays. Toilets are available here at the visitor centre and also at the lakeside hide. We ask that dogs are kept on a lead at all times, mainly to protect the ground-nesting birds in spring.

The highlight for many visitors is the otters, which are most often seen early in the morning from the bird hide. If you'd like to learn more, free guided walks led by our volunteers leave from this desk every Saturday at ten o'clock. There's no need to book — simply turn up. Finally, on your way out, do call in at the gift shop, where all the money raised goes directly towards looking after the reserve. Enjoy your visit.`,
    questions: [
      {
        id: 'diag-l2-s2-q1',
        type: 'gap',
        prompt: 'Complete the sentence with a NUMBER: The reserve covers about ______ hectares.',
        acceptableAnswers: ['400', 'four hundred'],
        explanation:
          'The speaker says the reserve "covers about four hundred hectares of woodland, wetland and open meadow".',
      },
      {
        id: 'diag-l2-s2-q2',
        type: 'gap',
        prompt:
          'Complete the sentence with a NUMBER: The reserve was first opened to the public in ______.',
        acceptableAnswers: ['1985', 'nineteen eighty-five', 'nineteen eighty five'],
        explanation:
          'The speaker says it "was first opened to the public in nineteen eighty-five".',
      },
      {
        id: 'diag-l2-s2-q3',
        type: 'mcq',
        prompt: 'Which trail is recommended for visitors with young children?',
        options: ['The red trail', 'The blue trail', 'The green trail', 'The lakeside trail'],
        correctIndex: 0,
        explanation:
          'The red trail is "the shortest, at just two kilometres, and it’s mostly flat, so it’s ideal if you have young children".',
      },
      {
        id: 'diag-l2-s2-q4',
        type: 'gap',
        prompt: 'Complete the sentence with a NUMBER: The red trail is ______ kilometres long.',
        acceptableAnswers: ['2', 'two'],
        explanation:
          'The speaker describes the red trail as "the shortest, at just two kilometres".',
      },
      {
        id: 'diag-l2-s2-q5',
        type: 'mcq',
        prompt: 'Where does the blue trail lead?',
        options: ['To the ridge', 'To the gift shop', 'To the lake', 'To the meadow'],
        correctIndex: 2,
        explanation:
          'The speaker says "The blue trail is longer and takes you down to the lake, where we have a wooden bird hide."',
      },
      {
        id: 'diag-l2-s2-q6',
        type: 'gap',
        prompt:
          'Complete the sentence with a NUMBER: You should allow about ______ hours to complete the green trail.',
        acceptableAnswers: ['3', 'three'],
        explanation:
          'The green trail "climbs to the ridge and back, and you should allow about three hours to complete it".',
      },
      {
        id: 'diag-l2-s2-q7',
        type: 'mcq',
        prompt: 'On which day is the café closed?',
        options: ['Saturday', 'Sunday', 'Monday', 'Friday'],
        correctIndex: 2,
        explanation:
          'The speaker says the café "serves hot food until three o’clock, but please note it is closed on Mondays".',
      },
      {
        id: 'diag-l2-s2-q8',
        type: 'gap',
        prompt: 'Complete the rule with ONE WORD: Dogs must be kept on a ______ at all times.',
        acceptableAnswers: ['lead', 'leash'],
        explanation: 'The speaker says "We ask that dogs are kept on a lead at all times".',
      },
      {
        id: 'diag-l2-s2-q9',
        type: 'mcq',
        prompt: 'When are visitors most likely to see the otters?',
        options: [
          'Late in the afternoon',
          'Early in the morning',
          'Only on guided walks',
          'At the gift shop',
        ],
        correctIndex: 1,
        explanation: 'The otters "are most often seen early in the morning from the bird hide".',
      },
      {
        id: 'diag-l2-s2-q10',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE WORD: Free guided walks leave from the desk every ______.',
        acceptableAnswers: ['Saturday'],
        explanation:
          'The speaker says "free guided walks led by our volunteers leave from this desk every Saturday at ten o’clock".',
      },
    ],
  },

  // ─── Section 3 — HARDER: academic discussion (tutorial) ───────────────────
  {
    id: 'diag-l2-s3',
    title: 'Tutorial: Planning a River Pollution Study',
    transcript: `TUTOR: So, Priya and Daniel, you've chosen to study water quality in the River Calder. Where have you got to with the plan?

PRIYA: We've decided to sample at six different points along the river, moving from the source down towards the town.

TUTOR: Six is sensible. Why spread them out like that?

DANIEL: Because we expect the water to get more polluted as it passes the farmland and then the industrial estate. Comparing the points should show where the pollution actually enters.

TUTOR: Good thinking. And what exactly will you measure?

PRIYA: Three things at each site: the oxygen level, the temperature, and the number of small invertebrates — things like mayfly larvae. They're sensitive to pollution, so they're a useful indicator.

TUTOR: They are indeed. One word of caution, though — invertebrate counts can vary a lot from week to week, so a single visit won't tell you much. I'd strongly suggest repeating the whole survey monthly for at least a term.

DANIEL: That makes sense. We'd assumed one round of sampling would do, but we'll build in repeats.

TUTOR: Do. Now, how are you handling safety? Riverbanks can be slippery.

PRIYA: We'll always work in a pair, never alone, and we've booked the waders and the testing kit from the department store.

TUTOR: Sensible. And the deadline — when is the written report due?

DANIEL: The fifteenth of March. We're a little worried about the statistics section, to be honest.

TUTOR: That's the part students underestimate most. My advice is to start analysing your figures as you collect them, rather than leaving it all to the end. Come and see me in week six and we'll go through the methods together.`,
    questions: [
      {
        id: 'diag-l2-s3-q1',
        type: 'gap',
        prompt:
          'Complete the sentence with a NUMBER: The students will sample at ______ points along the river.',
        acceptableAnswers: ['6', 'six'],
        explanation:
          'Priya says "We’ve decided to sample at six different points along the river".',
      },
      {
        id: 'diag-l2-s3-q2',
        type: 'mcq',
        prompt: 'In which direction are the sampling points arranged?',
        options: [
          'From the town up towards the source',
          'From the source down towards the town',
          'In a circle around the industrial estate',
          'At random along the riverbank',
        ],
        correctIndex: 1,
        explanation: 'Priya says the points move "from the source down towards the town".',
      },
      {
        id: 'diag-l2-s3-q3',
        type: 'mcq',
        prompt: 'Why do the students expect pollution to increase along the river?',
        options: [
          'Because the river becomes deeper',
          'Because it passes farmland and an industrial estate',
          'Because the temperature rises near the town',
          'Because more invertebrates live downstream',
        ],
        correctIndex: 1,
        explanation:
          'Daniel says "we expect the water to get more polluted as it passes the farmland and then the industrial estate".',
      },
      {
        id: 'diag-l2-s3-q4',
        type: 'gap',
        prompt:
          'Complete the list of measurements with ONE WORD: At each site they will measure the oxygen level, the ______, and the number of invertebrates.',
        acceptableAnswers: ['temperature'],
        explanation:
          'Priya lists "the oxygen level, the temperature, and the number of small invertebrates".',
      },
      {
        id: 'diag-l2-s3-q5',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE WORD: Small invertebrates are useful because they act as an ______ of pollution.',
        acceptableAnswers: ['indicator'],
        explanation:
          'Priya says the invertebrates "are sensitive to pollution, so they’re a useful indicator".',
      },
      {
        id: 'diag-l2-s3-q6',
        type: 'mcq',
        prompt: 'What problem does the tutor point out about counting invertebrates?',
        options: [
          'They are difficult to identify',
          'The counts can vary a lot from week to week',
          'They are not affected by pollution',
          'They are hard to find near the source',
        ],
        correctIndex: 1,
        explanation:
          'The tutor cautions that "invertebrate counts can vary a lot from week to week, so a single visit won’t tell you much".',
      },
      {
        id: 'diag-l2-s3-q7',
        type: 'gap',
        prompt:
          'Complete the tutor’s advice with ONE WORD: He suggests repeating the whole survey ______ for at least a term.',
        acceptableAnswers: ['monthly'],
        explanation:
          'The tutor says "I’d strongly suggest repeating the whole survey monthly for at least a term".',
      },
      {
        id: 'diag-l2-s3-q8',
        type: 'tfng',
        prompt: 'The students had originally planned to sample the river only once.',
        answer: 'true',
        explanation:
          'Daniel admits "We’d assumed one round of sampling would do, but we’ll build in repeats", confirming they first planned a single round.',
      },
      {
        id: 'diag-l2-s3-q9',
        type: 'mcq',
        prompt: 'What safety measure do the students mention?',
        options: [
          'Wearing helmets near the water',
          'Always working in a pair, never alone',
          'Only sampling in dry weather',
          'Telling the police before each visit',
        ],
        correctIndex: 1,
        explanation: 'Priya says "We’ll always work in a pair, never alone".',
      },
      {
        id: 'diag-l2-s3-q10',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE WORD: The students have borrowed the waders and the testing ______ from the department.',
        acceptableAnswers: ['kit'],
        explanation:
          'Priya says "we’ve booked the waders and the testing kit from the department store".',
      },
      {
        id: 'diag-l2-s3-q11',
        type: 'mcq',
        prompt: 'What is the tutor’s main advice about the statistics?',
        options: [
          'To leave the analysis until the report is written',
          'To analyse the figures as they are collected',
          'To ask another student to do the statistics',
          'To avoid using statistics altogether',
        ],
        correctIndex: 1,
        explanation:
          'The tutor advises them "to start analysing your figures as you collect them, rather than leaving it all to the end".',
      },
    ],
  },
]
