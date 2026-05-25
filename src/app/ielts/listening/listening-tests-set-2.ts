// ─── IELTS Academic Listening — practice test data (Set 2) ─────────────────
// A parallel-authored expansion of the Listening item bank. This file ships ONE
// original two-section practice test that mirrors the conventions established in
// `listening-tests.ts`:
//   • Section 1 — an everyday transactional dialogue (here: a phone enquiry about
//     renting a room), assessed with form / note completion + a multiple-choice
//     item. A surname is spelled and a number is dictated so spelling/number
//     questions have a clear basis in the "audio".
//   • Section 2 — an informational monologue (here: a sports-centre orientation),
//     assessed with note/sentence completion + multiple choice, carrying signpost
//     language ("first", "next", "finally") that the questions track in order.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
// `audioSrc` is intentionally left undefined (TTS stand-in drives playback).
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_2: ListeningTest[] = [
  {
    id: 'ls-acad-s2-1',
    title: 'Practice Test 3 — Renting a Room & A Leisure Centre Orientation',
    estimatedMinutes: 15,
    sections: [
      {
        id: 'ls-acad-s2-1-s1',
        title: 'Section 1 — Enquiring about a room to rent',
        // ~225 words. Transactional dialogue (Section 1 style): a caller enquiring
        // about a spare room advertised online. A surname is spelled and a phone
        // number is dictated; one detail (the deposit) follows from a stated rent,
        // mirroring the form/note-completion + multiple-choice mix of a real
        // Section 1.
        transcript: `WOMAN: Hello, this is Maple Lettings, Sophie speaking.

MAN: Hi there. I'm calling about the room you've advertised on Maple Avenue. Is it still available?

WOMAN: It is, yes. Let me take a few details. Could I have your name, please?

MAN: It's Owen Whitaker. Whitaker is spelled W-H-I-T-A-K-E-R.

WOMAN: Thank you, Owen. And a contact number?

MAN: Of course — it's oh-seven-nine-double-two, four-one-six, oh-three-eight.

WOMAN: Lovely, I've got that. So, the room is a large double on the first floor, fully furnished, and it comes with its own washbasin. The rent is five hundred and forty pounds a month, and that includes water and internet, though not electricity.

MAN: That sounds reasonable. Is there a deposit?

WOMAN: There is. The deposit is equal to one month's rent, so the same figure again.

MAN: Right. And when would the room be free?

WOMAN: The current tenant leaves at the end of June, so it's available from the first of July. We'd ask for a minimum stay of six months.

MAN: That works for me. Could I arrange a viewing?

WOMAN: Certainly. We do viewings on Tuesday and Thursday evenings. Shall I put you down for this Thursday at six?

MAN: Yes, please. Thank you very much.

WOMAN: Wonderful. See you on Thursday.`,
        questions: [
          {
            id: 'ls-acad-s2-1-s1-q1',
            type: 'gap',
            prompt:
              'Complete the enquiry form. Write ONE WORD for the answer.\n\nCaller surname: ____________',
            acceptableAnswers: ['Whitaker', 'whitaker'],
            explanation:
              'The caller gives his name as “Owen Whitaker” and spells the surname out: W-H-I-T-A-K-E-R. In Section 1, surnames are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-acad-s2-1-s1-q2',
            type: 'gap',
            prompt: 'Contact number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07922416038', '0792 2416038', '07922 416 038', '079 22 416 038'],
            explanation:
              'The number is dictated as “oh-seven-nine-double-two, four-one-six, oh-three-eight”, which is 07922416038. “Double two” means two 2s, and “oh” means zero — spacing is not penalised but every digit must be correct.',
          },
          {
            id: 'ls-acad-s2-1-s1-q3',
            type: 'gap',
            prompt: 'The room is a large double on the ____________ floor. Write ONE WORD.',
            acceptableAnswers: ['first', '1st'],
            explanation:
              'She describes it as “a large double on the first floor”. Listen for the ordinal — “first” maps to 1st; the room being “double” is a separate detail (its size, not its location).',
          },
          {
            id: 'ls-acad-s2-1-s1-q4',
            type: 'gap',
            prompt: 'Monthly rent: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['540', 'five hundred and forty', 'five hundred forty'],
            explanation:
              'She says the rent is “five hundred and forty pounds a month”, so the figure is 540. Numbers said as words still count, but writing the digits is fastest and safest.',
          },
          {
            id: 'ls-acad-s2-1-s1-q5',
            type: 'mcq',
            prompt: 'Which bill is NOT included in the monthly rent?',
            options: ['Water', 'Internet', 'Electricity', 'Heating'],
            correctIndex: 2,
            explanation:
              'She states the rent “includes water and internet, though not electricity.” The word “though” flags the exception — electricity is the bill left out. Heating is never mentioned, so it is a distractor.',
          },
          {
            id: 'ls-acad-s2-1-s1-q6',
            type: 'gap',
            prompt: 'The deposit is the same as one month’s rent: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['540', 'five hundred and forty', 'five hundred forty'],
            explanation:
              'She explains the deposit “is equal to one month’s rent, so the same figure again.” Because the rent is 540 (Q4), the deposit is also 540 — Section 1 often makes one detail depend on an earlier one.',
          },
          {
            id: 'ls-acad-s2-1-s1-q7',
            type: 'gap',
            prompt:
              'The room is available from the first of ____________. Write ONE WORD (a month).',
            acceptableAnswers: ['July'],
            explanation:
              'She says the current tenant “leaves at the end of June, so it’s available from the first of July.” The availability date is July — note that “June” is mentioned only as the move-out month, a classic near-miss distractor.',
          },
        ],
      },
      {
        id: 'ls-acad-s2-1-s2',
        title: 'Section 2 — Leisure centre orientation talk',
        // ~235 words. Informational monologue (Section 2 style): a single speaker
        // welcoming new members to a sports centre. Uses sequencing/signpost
        // language ("first", "after that", "finally") that the questions follow in
        // order, with a note/sentence-completion + multiple-choice mix.
        transcript: `Good evening, everyone, and welcome to Brookvale Leisure Centre. My name is Ravi, and I'm the duty manager this week. Before you start using the facilities, let me run through a few practical points.

First, the changing rooms. These are on the ground floor, just past reception on your left. We've recently installed lockers that are completely free — you simply choose any empty one and set your own four-digit code. Please don't bring your own padlock, as those will be removed by staff.

After that, let me mention the pool. It's open from six in the morning until ten at night, but please be aware that the first hour, until seven, is reserved for lane swimming only, so it's not suitable if you're bringing children.

Next, our most popular feature: the fitness classes. These are included in your membership at no extra charge, with one exception — the personal training sessions, which must be booked and paid for separately. You can reserve any class through our app up to a week ahead.

Finally, a word about the café upstairs. It serves hot meals until eight, but the coffee bar stays open as long as the centre does. One last thing worth knowing: members get a ten per cent discount on everything there, as long as you show your membership card at the till. That's all from me — enjoy the centre, and do ask any member of staff if you need help.`,
        questions: [
          {
            id: 'ls-acad-s2-1-s2-q8',
            type: 'mcq',
            prompt: 'What does the speaker say about the lockers?',
            options: [
              'They cost a small amount to use.',
              'They are free and use a code you set yourself.',
              'You must bring your own padlock.',
              'They are located on the first floor.',
            ],
            correctIndex: 1,
            explanation:
              'He says the lockers are “completely free — you simply choose any empty one and set your own four-digit code,” and adds that personal padlocks will be removed. Option B matches; the others contradict the talk (the changing rooms are on the ground floor).',
          },
          {
            id: 'ls-acad-s2-1-s2-q9',
            type: 'gap',
            prompt:
              'To use a locker, each member sets their own ____________ code. Write A NUMBER followed by ONE WORD (e.g. “four-digit”).',
            acceptableAnswers: ['four-digit', 'four digit', '4-digit', '4 digit'],
            explanation:
              'He explains you “set your own four-digit code.” The answer is “four-digit”. Note completion often targets a precise specification like this — write exactly what you hear.',
          },
          {
            id: 'ls-acad-s2-1-s2-q10',
            type: 'gap',
            prompt: 'The pool opens at ____________ in the morning. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation:
              'He says the pool is “open from six in the morning until ten at night.” The opening time is 6. Listen for “from”, which signals a start point, versus “until”, which signals the end.',
          },
          {
            id: 'ls-acad-s2-1-s2-q11',
            type: 'mcq',
            prompt: 'Why might the pool be unsuitable for children before seven o’clock?',
            options: [
              'Because the water is too cold early in the morning',
              'Because the first hour is reserved for lane swimming only',
              'Because the pool is being cleaned at that time',
              'Because no lifeguard is on duty until seven',
            ],
            correctIndex: 1,
            explanation:
              'He warns that “the first hour, until seven, is reserved for lane swimming only, so it’s not suitable if you’re bringing children.” Option B gives the stated reason; the others are plausible but never mentioned.',
          },
          {
            id: 'ls-acad-s2-1-s2-q12',
            type: 'mcq',
            prompt: 'Which activity is NOT included free with membership?',
            options: [
              'Group fitness classes',
              'Personal training sessions',
              'Use of the lockers',
              'Lane swimming in the pool',
            ],
            correctIndex: 1,
            explanation:
              'Fitness classes are “included in your membership at no extra charge, with one exception — the personal training sessions, which must be booked and paid for separately.” The phrase “with one exception” flags personal training as the paid extra.',
          },
          {
            id: 'ls-acad-s2-1-s2-q13',
            type: 'gap',
            prompt:
              'Members can reserve a fitness class through the centre’s ____________ up to a week ahead. Write ONE WORD.',
            acceptableAnswers: ['app', 'application'],
            explanation:
              'He says, “You can reserve any class through our app up to a week ahead.” The answer is “app”. Booking-method details are common Section 2 targets.',
          },
          {
            id: 'ls-acad-s2-1-s2-q14',
            type: 'gap',
            prompt:
              'Members get a ____________ per cent discount in the café when they show their membership card. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'He explains that “members get a ten per cent discount on everything there, as long as you show your membership card at the till.” The figure is 10. Watch for the condition (“as long as…”) attached to such offers.',
          },
        ],
      },
    ],
  },
]
