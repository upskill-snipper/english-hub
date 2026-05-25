// ─── IELTS Academic Listening — practice test data ─────────────────────────
// Wave 1 ships ONE original two-section practice test. Each section carries a
// full `transcript` (an original monologue / dialogue) which drives the Web
// Speech API "audio" stand-in (see _components/AudioPlayer.tsx) and doubles as
// the post-submit reading/accessibility view. Real recorded audio assets are a
// Phase 2 item — `audioSrc` is intentionally left undefined for now.
//
// A full IELTS Listening paper is 4 sections / ~40 questions answered while the
// recording plays once. This practice set is a deliberately shorter ~14-question
// warm-up that mirrors the two most common section TYPES:
//   • Section 1 — an everyday transactional dialogue (here: a phone enquiry),
//     assessed with form / note completion + a multiple-choice item.
//   • Section 2 — an informational monologue (here: an orientation talk),
//     assessed with sentence completion + multiple choice.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'
// Additional Academic listening tests (item-bank scaling, 2026-05-25).
import { LISTENING_SET_2 } from './listening-tests-set-2'
import { LISTENING_SET_3 } from './listening-tests-set-3'
// Premium expansion (2026-05-25): additional full 4-section tests.
import { LISTENING_SET_4 } from './listening-tests-set-4'
import { LISTENING_SET_5 } from './listening-tests-set-5'
import { LISTENING_SET_6 } from './listening-tests-set-6'
import { LISTENING_SET_7 } from './listening-tests-set-7'
import { LISTENING_SET_8 } from './listening-tests-set-8'
// Wave 4 (2026-05-25): three more full 4-section tests.
import { LISTENING_SET_9 } from './listening-tests-set-9'
import { LISTENING_SET_10 } from './listening-tests-set-10'
import { LISTENING_SET_11 } from './listening-tests-set-11'
// Wave 5 (2026-05-25): three more full 4-section tests.
import { LISTENING_SET_12 } from './listening-tests-set-12'
import { LISTENING_SET_13 } from './listening-tests-set-13'
import { LISTENING_SET_14 } from './listening-tests-set-14'
// Wave 6 (2026-05-25): two more full 4-section tests.
import { LISTENING_SET_15 } from './listening-tests-set-15'
import { LISTENING_SET_16 } from './listening-tests-set-16'
// Wave 7 (2026-05-25): two more full 4-section tests.
import { LISTENING_SET_17 } from './listening-tests-set-17'
import { LISTENING_SET_18 } from './listening-tests-set-18'
// Wave 8 (2026-05-25): two more full 4-section tests.
import { LISTENING_SET_19 } from './listening-tests-set-19'
import { LISTENING_SET_20 } from './listening-tests-set-20'

export const LISTENING_TESTS: ListeningTest[] = [
  ...LISTENING_SET_2,
  ...LISTENING_SET_3,
  ...LISTENING_SET_4,
  ...LISTENING_SET_5,
  ...LISTENING_SET_6,
  ...LISTENING_SET_7,
  ...LISTENING_SET_8,
  ...LISTENING_SET_9,
  ...LISTENING_SET_10,
  ...LISTENING_SET_11,
  ...LISTENING_SET_12,
  ...LISTENING_SET_13,
  ...LISTENING_SET_14,
  ...LISTENING_SET_15,
  ...LISTENING_SET_16,
  ...LISTENING_SET_17,
  ...LISTENING_SET_18,
  ...LISTENING_SET_19,
  ...LISTENING_SET_20,
  {
    id: 'ls-academic-1',
    title: 'Practice Test 1 — Community Library & Campus Orientation',
    estimatedMinutes: 15,
    sections: [
      {
        id: 'ls-academic-1-s1',
        title: 'Section 1 — Library membership enquiry',
        // ~210 words. Transactional dialogue (Section 1 style): a caller signing
        // up for membership over the phone. Names are spelled and a number is
        // dictated so spelling/number questions have a clear basis in the audio.
        transcript: `WOMAN: Good morning, Riverside Community Library, this is Hannah speaking. How can I help you?

MAN: Hi, I'd like to become a member, please. I've just moved to the area.

WOMAN: Wonderful. I can set that up over the phone. Can I take your full name?

MAN: It's Daniel Foster. Foster is spelled F-O-S-T-E-R.

WOMAN: Thank you, Daniel. And your home address?

MAN: It's number forty-two, Maple Avenue. The postcode is RG9 4LT.

WOMAN: Lovely. Now, we offer two cards. The Standard card is free and lets you borrow up to six books for three weeks. The Premium card costs fifteen pounds a year and adds films, audiobooks, and online journals.

MAN: I'll take the Premium one — the journals would help with my studies.

WOMAN: Good choice. One last thing: the library is closed on Mondays, but on every other weekday we're open until eight in the evening, and until five on weekends. Your card will be ready to collect from the front desk tomorrow afternoon.

MAN: Perfect. Do I need to bring anything to collect it?

WOMAN: Just one document showing your address — a recent utility bill is ideal.

MAN: Great, thank you so much for your help.

WOMAN: You're very welcome. See you tomorrow.`,
        questions: [
          {
            id: 'ls-a1-s1-q1',
            type: 'gap',
            prompt:
              'Complete the membership form. Write ONE WORD for each answer.\n\nApplicant surname: ____________',
            acceptableAnswers: ['Foster', 'foster'],
            explanation:
              'The caller gives his name as “Daniel Foster” and spells the surname out: F-O-S-T-E-R. In Section 1, names are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-a1-s1-q2',
            type: 'gap',
            prompt: 'House number: ____________ Maple Avenue. Write A NUMBER for the answer.',
            acceptableAnswers: ['42', 'forty-two', 'forty two'],
            explanation:
              'He says “number forty-two, Maple Avenue”, so the house number is 42. Numbers said as words still count — but writing the digits is safest and fastest.',
          },
          {
            id: 'ls-a1-s1-q3',
            type: 'gap',
            prompt: 'Postcode: ____________. Write the postcode exactly as you hear it.',
            acceptableAnswers: ['RG9 4LT', 'RG94LT', 'rg9 4lt', 'rg94lt'],
            explanation:
              'The postcode is dictated as “RG9 4LT”. Letters and digits in codes must be copied precisely; spacing is not penalised, but every character must be correct.',
          },
          {
            id: 'ls-a1-s1-q4',
            type: 'mcq',
            prompt: 'Which membership card does the man choose?',
            options: [
              'The Standard card, because it is free',
              'The Premium card, for access to online journals',
              'The Standard card, to borrow more books',
              'The Premium card, because it is cheaper',
            ],
            correctIndex: 1,
            explanation:
              'He says, “I’ll take the Premium one — the journals would help with my studies.” The distractors reuse real words from the audio (free, books, cheaper) but none matches his stated reason. Listen for the reason, not just the keyword.',
          },
          {
            id: 'ls-a1-s1-q5',
            type: 'gap',
            prompt: 'Annual cost of the chosen card: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['15', 'fifteen'],
            explanation:
              'The Premium card “costs fifteen pounds a year”. Because he selects Premium (Q4), this is the cost that applies — Section 1 often makes one detail depend on an earlier choice.',
          },
          {
            id: 'ls-a1-s1-q6',
            type: 'gap',
            prompt: 'The library is closed every ____________. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Monday', 'Mondays', 'monday', 'mondays'],
            explanation:
              'The assistant says, “the library is closed on Mondays”. Singular or plural is accepted here as the meaning is unambiguous.',
          },
          {
            id: 'ls-a1-s1-q7',
            type: 'gap',
            prompt:
              'To collect the card, the man must bring one document showing his ____________. Write ONE WORD.',
            acceptableAnswers: ['address'],
            explanation:
              'She asks him to bring “one document showing your address — a recent utility bill is ideal.” The key requirement is proof of address; “utility bill” is the example, not the gap word.',
          },
        ],
      },
      {
        id: 'ls-academic-1-s2',
        title: 'Section 2 — New student orientation talk',
        // ~225 words. Informational monologue (Section 2 style): a single speaker
        // orienting new students. Carries signpost language ("first", "after that",
        // "finally") that the questions track in order.
        transcript: `Good afternoon, everyone, and welcome to Greenfield College. My name is Priya, and I'm the student services coordinator. I'll spend a few minutes explaining how to find your way around before your tour begins.

Let's start with the building you're in now — the Atrium. This is the heart of the campus. On the ground floor you'll find the help desk, the café, and a noticeboard with all this week's events. If you ever feel lost, come back here first.

Directly behind the Atrium is the library, which is open from eight in the morning until midnight during term. I'd strongly recommend booking a study room online in advance, because they fill up quickly around exam time, and walk-in spaces are limited.

After the library, head across the courtyard to the Science Block. Most of your laboratory classes will take place there, and you must wear a lab coat in every practical session — there are no exceptions to that rule.

Finally, a quick word about getting here. Parking on campus is expensive and spaces are scarce, so the college strongly encourages students to travel by bus. Your student card doubles as a bus pass, giving you free travel on every local route. That's everything from me — please follow your guide, and enjoy your first day.`,
        questions: [
          {
            id: 'ls-a1-s2-q8',
            type: 'mcq',
            prompt: 'What is the main purpose of the speaker’s talk?',
            options: [
              'To explain the rules for using the science laboratories',
              'To help new students find their way around the campus',
              'To advertise events happening in the café this week',
              'To describe how to apply for a parking permit',
            ],
            correctIndex: 1,
            explanation:
              'She states the purpose up front: “explaining how to find your way around before your tour begins.” The other options each appear later as supporting details, not the overall aim. Always note the speaker’s opening signpost.',
          },
          {
            id: 'ls-a1-s2-q9',
            type: 'gap',
            prompt:
              'On the ground floor of the Atrium you can find the help desk, the café, and a ____________. Write ONE WORD.',
            acceptableAnswers: ['noticeboard', 'notice-board', 'notice board'],
            explanation:
              'She lists “the help desk, the café, and a noticeboard with all this week’s events.” The answer is “noticeboard” (hyphenated/spaced forms are accepted).',
          },
          {
            id: 'ls-a1-s2-q10',
            type: 'gap',
            prompt:
              'During term, the library closes at ____________. Write ONE WORD (a time of day).',
            acceptableAnswers: ['midnight', '12am', '12 am', '00:00'],
            explanation:
              'The library is “open from eight in the morning until midnight during term.” The closing time is midnight — listen for “until”, which signals an end point.',
          },
          {
            id: 'ls-a1-s2-q11',
            type: 'mcq',
            prompt: 'What does the speaker advise students to do about study rooms?',
            options: [
              'Avoid using them during exam time',
              'Book them online in advance',
              'Ask the help desk to reserve one',
              'Share a room with other students',
            ],
            correctIndex: 1,
            explanation:
              'She “strongly recommends booking a study room online in advance, because they fill up quickly.” Recommendation language (“I’d strongly recommend…”) is a reliable cue for advice questions.',
          },
          {
            id: 'ls-a1-s2-q12',
            type: 'gap',
            prompt:
              'In every practical session in the Science Block, students must wear a ____________. Write TWO WORDS.',
            acceptableAnswers: ['lab coat', 'lab-coat', 'laboratory coat'],
            explanation:
              'She is emphatic: “you must wear a lab coat in every practical session — there are no exceptions.” The phrase “must” plus “no exceptions” marks a compulsory rule, a common target for completion items.',
          },
          {
            id: 'ls-a1-s2-q13',
            type: 'mcq',
            prompt: 'How does the college encourage students to travel to campus?',
            options: [
              'By car, using the on-campus car park',
              'By bus, using their student card as a pass',
              'By bicycle, which is free for all students',
              'On foot, because the campus is central',
            ],
            correctIndex: 1,
            explanation:
              'Because “parking is expensive and spaces are scarce”, the college “strongly encourages students to travel by bus”, and the student card “doubles as a bus pass”. The car option is mentioned only as the discouraged alternative.',
          },
          {
            id: 'ls-a1-s2-q14',
            type: 'gap',
            prompt:
              'A student’s ____________ also works as a bus pass for free local travel. Write TWO WORDS.',
            acceptableAnswers: ['student card', 'student-card', 'student id', 'student id card'],
            explanation:
              'She explains, “Your student card doubles as a bus pass, giving you free travel on every local route.” The answer is “student card”.',
          },
        ],
      },
    ],
  },
  {
    id: 'ls-academic-2',
    title: 'Practice Test 2 — Booking a Walking Tour & A Talk on Urban Beekeeping',
    estimatedMinutes: 15,
    sections: [
      {
        id: 'ls-academic-2-s1',
        title: 'Section 1 — Booking a guided walking tour',
        // ~220 words. Transactional dialogue (Section 1 style): a customer phoning
        // a tour company. A surname is spelled, a date and a price are dictated,
        // and one detail (group size) depends on a stated choice, mirroring the
        // form/note-completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good afternoon, Hillside Heritage Walks, Carla speaking.

MAN: Hello, I'd like to book a place on one of your guided walking tours.

WOMAN: Of course. May I take your name?

MAN: Yes, it's Thomas Ridley. Ridley is R-I-D-L-E-Y.

WOMAN: Thank you, Mr Ridley. Which tour were you interested in?

MAN: The Old Harbour walk, if it's running this weekend.

WOMAN: It is. We run that one on Saturday and Sunday. Which day would suit you?

MAN: Let's say Saturday the fourteenth.

WOMAN: Saturday the fourteenth, lovely. And how many people will be in your group?

MAN: There'll be four of us in total.

WOMAN: Right. The tour is twelve pounds per adult, but for groups of four or more there's a discount, so it comes to ten pounds each.

MAN: That's good to know.

WOMAN: The walk lasts about two hours, and it can be quite steep in places, so I'd recommend bringing comfortable shoes. We meet outside the old customs house at half past nine.

MAN: Should we bring anything else?

WOMAN: Just a bottle of water. And do arrive ten minutes early so the guide can check everyone in.

MAN: Perfect, thank you very much.

WOMAN: You're welcome. We'll see you on Saturday.`,
        questions: [
          {
            id: 'ls-a2-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Ridley', 'ridley'],
            explanation:
              'The caller gives his name as “Thomas Ridley” and spells the surname: R-I-D-L-E-Y. In Section 1, listen for the spelling and write the name letter by letter.',
          },
          {
            id: 'ls-a2-s1-q2',
            type: 'gap',
            prompt: 'Tour booked: the ____________ walk. Write TWO WORDS.',
            acceptableAnswers: ['Old Harbour', 'old harbour', 'old harbor'],
            explanation:
              'He asks for “The Old Harbour walk.” The answer is “Old Harbour” (the American spelling “harbor” is also accepted).',
          },
          {
            id: 'ls-a2-s1-q3',
            type: 'gap',
            prompt: 'Date of tour: Saturday the ____________. Write A NUMBER.',
            acceptableAnswers: ['14', 'fourteenth', '14th'],
            explanation:
              'He chooses “Saturday the fourteenth,” so the date is the 14th. Ordinal numbers said aloud (fourteenth) map to the digits 14.',
          },
          {
            id: 'ls-a2-s1-q4',
            type: 'gap',
            prompt: 'Number of people in the group: ____________. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'He says “There’ll be four of us in total,” so the group size is 4. This number also triggers the discount in the next question — Section 1 details often connect.',
          },
          {
            id: 'ls-a2-s1-q5',
            type: 'mcq',
            prompt: 'How much will each person in the man’s group pay?',
            options: [
              'Twelve pounds, the standard adult price',
              'Ten pounds, because of the group discount',
              'Twelve pounds, with water included',
              'Ten pounds, because the walk is shorter',
            ],
            correctIndex: 1,
            explanation:
              'The standard price is twelve pounds, but “for groups of four or more there’s a discount, so it comes to ten pounds each.” Because his group has four people (Q4), they pay the discounted ten pounds. The distractors reuse the real prices but give the wrong reason.',
          },
          {
            id: 'ls-a2-s1-q6',
            type: 'gap',
            prompt:
              'The guide recommends bringing comfortable ____________ because the walk is steep. Write ONE WORD.',
            acceptableAnswers: ['shoes', 'footwear'],
            explanation:
              'She says, “it can be quite steep in places, so I’d recommend bringing comfortable shoes.” The answer is “shoes” (footwear accepted as a synonym).',
          },
          {
            id: 'ls-a2-s1-q7',
            type: 'gap',
            prompt:
              'The group should meet outside the old ____________ at half past nine. Write TWO WORDS.',
            acceptableAnswers: ['customs house', 'customs-house', 'custom house'],
            explanation:
              'She says, “We meet outside the old customs house at half past nine.” The meeting point is the “customs house”.',
          },
        ],
      },
      {
        id: 'ls-academic-2-s2',
        title: 'Section 2 — A talk on urban beekeeping',
        // ~230 words. Informational monologue (Section 2 style): a single speaker
        // introducing a community project. Uses sequencing/signpost language
        // ("to begin", "next", "lastly") that the questions follow in order, with
        // a sentence-completion + multiple-choice mix.
        transcript: `Hello and thank you for coming along this evening. My name is Marcus, and I help run the Rooftop Bees project here in the city. I'd like to tell you a little about what we do and how you can get involved.

To begin with, you might be surprised to hear that cities can be excellent places for bees. Parks, gardens and even window boxes provide a wide variety of flowers, and because they bloom at slightly different times, urban bees often enjoy a longer feeding season than those in the countryside, where a single crop may flower all at once and then disappear.

Our project places small hives on the flat roofs of office buildings. The height keeps the bees well above street level, so they rarely trouble passers-by, and the warmth that rises from the building below helps the colony through cold nights. Each hive is checked once a week by a trained volunteer.

Next, a word about the honey. We harvest it only once a year, in late summer, and I should stress that we never take all of it — the bees need a generous store to survive the winter. The honey we do collect is sold at local markets, and every penny is put back into running the project.

Lastly, if you'd like to help, you don't need any experience. We run a free training course every spring, and after that you can join a team looking after one of the hives. There's a sign-up sheet at the back of the room. Thank you very much.`,
        questions: [
          {
            id: 'ls-a2-s2-q8',
            type: 'mcq',
            prompt: 'According to the speaker, why can cities be good places for bees?',
            options: [
              'There are fewer predators than in the countryside.',
              'A variety of flowers bloom at different times, lengthening the feeding season.',
              'City temperatures are warmer all year round.',
              'There is less competition from other insects.',
            ],
            correctIndex: 1,
            explanation:
              'He explains that parks, gardens and window boxes "bloom at slightly different times," so "urban bees often enjoy a longer feeding season" than countryside bees facing a single crop. Option B matches; the others are not stated.',
          },
          {
            id: 'ls-a2-s2-q9',
            type: 'gap',
            prompt:
              'The hives are placed on the flat ____________ of office buildings. Write ONE WORD.',
            acceptableAnswers: ['roofs', 'rooftops', 'roof'],
            explanation:
              'He says the project "places small hives on the flat roofs of office buildings." The answer is “roofs”.',
          },
          {
            id: 'ls-a2-s2-q10',
            type: 'mcq',
            prompt: 'What is one benefit of placing the hives high up on buildings?',
            options: [
              'The bees produce more honey at height.',
              'The warmth from the building helps the colony on cold nights.',
              'The hives are easier for volunteers to reach.',
              'The bees can travel to the countryside more quickly.',
            ],
            correctIndex: 1,
            explanation:
              'He notes that "the warmth that rises from the building below helps the colony through cold nights." Option B is correct; the height is also said to keep bees away from passers-by, but that is a different benefit from the ones listed.',
          },
          {
            id: 'ls-a2-s2-q11',
            type: 'gap',
            prompt:
              'Each hive is checked once a ____________ by a trained volunteer. Write ONE WORD.',
            acceptableAnswers: ['week'],
            explanation:
              'He states, “Each hive is checked once a week by a trained volunteer.” The answer is “week”.',
          },
          {
            id: 'ls-a2-s2-q12',
            type: 'mcq',
            prompt: 'Why does the project never take all of the honey?',
            options: [
              'Because the honey is difficult to harvest in winter',
              'Because the bees need a store to survive the winter',
              'Because the markets only want a small amount',
              'Because the volunteers keep some for themselves',
            ],
            correctIndex: 1,
            explanation:
              'He stresses, “we never take all of it — the bees need a generous store to survive the winter.” Option B captures the reason.',
          },
          {
            id: 'ls-a2-s2-q13',
            type: 'gap',
            prompt:
              'The honey is harvested only once a year, in late ____________. Write ONE WORD (a season).',
            acceptableAnswers: ['summer'],
            explanation:
              'He says, “We harvest it only once a year, in late summer.” The answer is “summer”.',
          },
          {
            id: 'ls-a2-s2-q14',
            type: 'gap',
            prompt:
              'People who want to help can take a free training ____________ that runs every spring. Write ONE WORD.',
            acceptableAnswers: ['course'],
            explanation:
              'He explains, “We run a free training course every spring.” The answer is “course”.',
          },
        ],
      },
    ],
  },
]
