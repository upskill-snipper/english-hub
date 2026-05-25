// ─── IELTS Academic Listening — practice test data (Set 16) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 — an everyday transactional DIALOGUE (here: a caller enrolling
//     in an evening pottery class at a community arts centre), assessed with
//     form / note completion + a multiple-choice item. A surname is spelled and
//     a phone number is dictated, and one detail (the total course fee) depends
//     on a stated choice (which course length is booked).
//   • Section 2 — an everyday MONOLOGUE (here: a welcome talk to visitors at a
//     wetland nature reserve), assessed with sentence completion + multiple
//     choice, carrying signpost language ("to start with", "after that",
//     "finally") that the questions track in order.
//   • Section 3 — an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial reviewing a biology field study of woodland small mammals),
//     assessed with multiple choice + completion.
//   • Section 4 — an academic LECTURE / monologue (here: the technology and
//     history of deep-ocean exploration, from the bathysphere to modern
//     autonomous vehicles), assessed with note/sentence completion + multiple
//     choice, including one True/False/Not Given item.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given.
// `audioSrc` is intentionally left undefined — the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// Question numbering is CONTINUOUS q1–q40 across the four sections, mirroring the
// real paper. All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_16: ListeningTest[] = [
  {
    id: 'ls-academic-16',
    title:
      'Practice Test 16 — Joining an Evening Pottery Class, A Wetland Nature Reserve Talk, A Biology Field Study & Deep-Ocean Exploration',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-16-s1',
        title: 'Section 1 — Joining an evening pottery class',
        // ~300 words. Transactional dialogue (Section 1 style): a caller phoning a
        // community arts centre to enrol in an evening pottery class. A surname is
        // spelled and a mobile number is dictated; one detail (the total course fee)
        // depends on a stated choice (which course length is booked), mirroring the
        // form/note-completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good evening, Bridgewater Arts Centre, Olivia speaking. How can I help you?

MAN: Hi there. I saw a leaflet about your evening pottery classes and I'd like to sign up, if there's still room.

WOMAN: There is, yes — we've a few places left on the new term. Let me take some details. Could I have your name, please?

MAN: It's Peter Hargreaves. Hargreaves is spelled H-A-R-G-R-E-A-V-E-S.

WOMAN: Thank you, Peter. And the best number to reach you on?

MAN: It's my mobile — 07788 615 240.

WOMAN: Let me read that back: 07788 615 240. Lovely. Now, have you done any pottery before?

MAN: A little at school, but that was years ago, so I'd call myself a complete beginner.

WOMAN: That's no problem at all — the Tuesday class is aimed at beginners. We meet from seven until nine in the evening, in the studio on the first floor.

MAN: And how long does the course run?

WOMAN: You've a choice. There's a short course of six weeks, which costs ninety pounds, or the full course of twelve weeks at a hundred and sixty pounds. The longer one works out cheaper per session, and you get to try the potter's wheel as well as hand-building.

MAN: I'll take the full course, then — I'd really like to have a go on the wheel.

WOMAN: Good choice. One thing to note: all the clay and tools are provided, but please wear an apron, as it does get rather messy.

MAN: Will do. Is there anything I need to bring on the first night?

WOMAN: Just yourself and the apron. Oh — and do arrive a few minutes early so I can show you where to store your finished work to dry.

MAN: Perfect. Thank you so much.

WOMAN: You're welcome. See you on Tuesday.`,
        questions: [
          {
            id: 'ls-016-s1-q1',
            type: 'gap',
            prompt:
              'Complete the enrolment form. Write ONE WORD for the answer.\n\nApplicant surname: ____________',
            acceptableAnswers: ['Hargreaves', 'hargreaves'],
            explanation:
              'The caller gives his name as “Peter Hargreaves” and spells the surname: H-A-R-G-R-E-A-V-E-S. In Section 1, surnames are almost always spelled aloud — write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-016-s1-q2',
            type: 'gap',
            prompt:
              'Contact (mobile) number: ____________. Write the number exactly as you hear it.',
            acceptableAnswers: ['07788 615 240', '07788615240', '07788 615240', '07788615 240'],
            explanation:
              'He dictates his mobile as “07788 615 240”, which the assistant reads back to confirm. Spacing is not penalised, but every digit must be correct — confirmation read-backs are a common Section 1 cue.',
          },
          {
            id: 'ls-016-s1-q3',
            type: 'gap',
            prompt:
              'The beginners’ class meets on ____________ evenings. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Tuesday', 'Tuesdays', 'tuesday', 'tuesdays'],
            explanation:
              'The assistant says, “the Tuesday class is aimed at beginners,” and later, “See you on Tuesday.” Singular or plural is accepted as the meaning is unambiguous.',
          },
          {
            id: 'ls-016-s1-q4',
            type: 'gap',
            prompt:
              'The class runs from seven until ____________ in the evening. Write A NUMBER (a time).',
            acceptableAnswers: ['9', 'nine', '9pm', '9 pm', "9 o'clock", 'nine o’clock'],
            explanation:
              'She says the class meets “from seven until nine in the evening.” The end time is nine — listen for “until”, which signals the finish.',
          },
          {
            id: 'ls-016-s1-q5',
            type: 'gap',
            prompt: 'The pottery studio is located on the ____________ floor. Write ONE WORD.',
            acceptableAnswers: ['first'],
            explanation:
              'She places the class “in the studio on the first floor.” The answer is “first”.',
          },
          {
            id: 'ls-016-s1-q6',
            type: 'mcq',
            prompt: 'Which course does the man decide to book?',
            options: [
              'The six-week short course, because it is cheaper overall',
              'The twelve-week full course, so he can try the potter’s wheel',
              'The six-week short course, because he is a complete beginner',
              'The twelve-week full course, because it fits his schedule better',
            ],
            correctIndex: 1,
            explanation:
              'He says, “I’ll take the full course, then — I’d really like to have a go on the wheel.” The distractors reuse real words from the audio (cheaper, beginner) but none matches his stated reason. Listen for the reason, not just the keyword.',
          },
          {
            id: 'ls-016-s1-q7',
            type: 'gap',
            prompt: 'Total cost of the chosen course: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['160', 'one hundred and sixty', 'a hundred and sixty'],
            explanation:
              'The full course is “twelve weeks at a hundred and sixty pounds.” Because he selects the full course (Q6), this is the fee that applies — Section 1 often makes one detail depend on an earlier choice.',
          },
          {
            id: 'ls-016-s1-q8',
            type: 'gap',
            prompt: 'The short (six-week) course would have cost £ ____________. Write A NUMBER.',
            acceptableAnswers: ['90', 'ninety'],
            explanation:
              'She describes “a short course of six weeks, which costs ninety pounds.” Even though the man does not choose it, the price is stated explicitly — Section 1 often asks you to note an option the speaker rejects.',
          },
          {
            id: 'ls-016-s1-q9',
            type: 'gap',
            prompt:
              'Clay and tools are provided, but students must wear an ____________. Write ONE WORD.',
            acceptableAnswers: ['apron'],
            explanation:
              'She notes, “all the clay and tools are provided, but please wear an apron, as it does get rather messy.” The compulsory item is an apron.',
          },
          {
            id: 'ls-016-s1-q10',
            type: 'mcq',
            prompt:
              'Why does the assistant ask the man to arrive a few minutes early on the first night?',
            options: [
              'To pay the course fee at the desk',
              'To be shown where to store his finished work to dry',
              'To collect an apron from reception',
              'To fill in a registration form',
            ],
            correctIndex: 1,
            explanation:
              'She says, “do arrive a few minutes early so I can show you where to store your finished work to dry.” Option B matches her reason; the apron is something he must bring himself, and no fee or form is mentioned for the first night.',
          },
        ],
      },
      {
        id: 'ls-academic-16-s2',
        title: 'Section 2 — A talk at a wetland nature reserve',
        // ~290 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors to a wetland nature reserve. Uses sequencing/signpost
        // language ("to start with", "after that", "finally") that the questions
        // follow in order, with a sentence-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and a warm welcome to Marsh Lane Wetlands. My name is Gareth, and I'm one of the wardens here. Before you set off to explore, I'll spend a few minutes explaining what you can see and a few rules to keep in mind.

To start with, a little about the reserve itself. The site was once farmland, but about thirty years ago it was flooded deliberately to create the shallow lakes and reed beds you see today. That work has paid off: we now record more than two hundred species of bird across the year, which makes this one of the richest sites in the region.

After that, let me point you towards the hides. A hide, in case the word is new to you, is a small wooden shelter with narrow viewing slots, designed so you can watch the birds without being seen. We have four in total. The nearest, the Willow Hide, is just five minutes along the main path and is fully accessible to wheelchairs. The furthest, the Tower Hide, gives the best views but involves a climb, so it isn't suitable for everyone.

Now, a word of warning about the season. From April to July, the ground-nesting birds are raising their young, so during those months we ask all visitors to keep strictly to the marked paths and to keep dogs on a lead at all times. Disturbing a nest can cause the parents to abandon it.

Finally, if you'd like to learn more, our volunteers run a free guided walk every Saturday morning, leaving from the visitor centre at ten o'clock. There's no need to book — simply turn up. And do call in at the centre afterwards, where a hot drink and a slice of cake are waiting. Enjoy your visit.`,
        questions: [
          {
            id: 'ls-016-s2-q11',
            type: 'gap',
            prompt:
              'About thirty years ago, the former farmland was deliberately ____________ to create the lakes and reed beds. Write ONE WORD.',
            acceptableAnswers: ['flooded'],
            explanation:
              'He says the site “was flooded deliberately to create the shallow lakes and reed beds you see today.” The answer is “flooded”.',
          },
          {
            id: 'ls-016-s2-q12',
            type: 'gap',
            prompt:
              'The reserve records more than ____________ species of bird across the year. Write A NUMBER.',
            acceptableAnswers: ['200', 'two hundred'],
            explanation:
              'He states, “we now record more than two hundred species of bird across the year.” The answer is 200.',
          },
          {
            id: 'ls-016-s2-q13',
            type: 'mcq',
            prompt: 'According to the warden, what is a “hide”?',
            options: [
              'A tower offering the best views over the lakes',
              'A small wooden shelter for watching birds unseen',
              'A marked path that protects ground-nesting birds',
              'A shelter where visitors can buy hot drinks',
            ],
            correctIndex: 1,
            explanation:
              'He defines it directly: “a small wooden shelter with narrow viewing slots, designed so you can watch the birds without being seen.” The Tower Hide and the visitor centre are mentioned separately, so the other options confuse different details.',
          },
          {
            id: 'ls-016-s2-q14',
            type: 'gap',
            prompt: 'The reserve has ____________ hides in total. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'After defining a hide, the warden says, “We have four in total.” The answer is 4.',
          },
          {
            id: 'ls-016-s2-q15',
            type: 'gap',
            prompt:
              'The nearest hide, the Willow Hide, is fully accessible to ____________. Write ONE WORD.',
            acceptableAnswers: ['wheelchairs', 'wheelchair'],
            explanation:
              'He says the Willow Hide “is fully accessible to wheelchairs.” The answer is “wheelchairs” (singular accepted).',
          },
          {
            id: 'ls-016-s2-q16',
            type: 'mcq',
            prompt: 'Why does the warden say the Tower Hide is not suitable for everyone?',
            options: [
              'It is too far from the visitor centre to reach on foot',
              'It involves a climb to get up to it',
              'It is closed during the nesting season',
              'It has no room for wheelchairs inside',
            ],
            correctIndex: 1,
            explanation:
              'He explains the Tower Hide “gives the best views but involves a climb, so it isn’t suitable for everyone.” The reason is the climb; the other options are not given for this hide.',
          },
          {
            id: 'ls-016-s2-q17',
            type: 'gap',
            prompt:
              'From April to July, the ground-nesting birds are raising their ____________. Write ONE WORD.',
            acceptableAnswers: ['young'],
            explanation:
              'He warns that “From April to July, the ground-nesting birds are raising their young.” The answer is “young”.',
          },
          {
            id: 'ls-016-s2-q18',
            type: 'gap',
            prompt:
              'During the nesting months, visitors must keep dogs on a ____________ at all times. Write ONE WORD.',
            acceptableAnswers: ['lead', 'leash'],
            explanation:
              'During those months he asks visitors “to keep dogs on a lead at all times.” The answer is “lead” (the synonym “leash” is accepted).',
          },
          {
            id: 'ls-016-s2-q19',
            type: 'mcq',
            prompt: 'What does the warden say about the free guided walk?',
            options: [
              'It runs every day from the Willow Hide',
              'It leaves from the visitor centre at ten o’clock on Saturdays, with no booking needed',
              'Visitors must book a place in advance at the centre',
              'It is only available during the nesting season',
            ],
            correctIndex: 1,
            explanation:
              'He says volunteers “run a free guided walk every Saturday morning, leaving from the visitor centre at ten o’clock … There’s no need to book — simply turn up.” Option B matches all three details; the others contradict the audio.',
          },
          {
            id: 'ls-016-s2-q20',
            type: 'gap',
            prompt:
              'After the walk, visitors are invited to the centre for a hot drink and a slice of ____________. Write ONE WORD.',
            acceptableAnswers: ['cake'],
            explanation:
              'He closes by noting that at the centre “a hot drink and a slice of cake are waiting.” The answer is “cake”.',
          },
        ],
      },
      {
        id: 'ls-academic-16-s3',
        title: 'Section 3 — Tutorial: a biology field study of woodland mammals',
        // ~310 words. Academic discussion (Section 3 style): two students (Hana and
        // Joel) and a tutor (Dr Pryce) review a biology field study of small mammals
        // in a woodland, discussing method, findings and write-up. Assessed with a
        // multiple-choice + completion mix; speakers refer to data and decisions so
        // answers are anchored in who says what.
        transcript: `DR PRYCE: So, Hana and Joel, you've finished the fieldwork for your small-mammal study in Ashcombe Wood. How did the trapping go?

HANA: Quite well. We used live traps — the humane kind that catch the animal without harming it — and set out forty in a grid across the study area.

DR PRYCE: Forty is sensible. What did you bait them with?

JOEL: We tried two baits at first, but the oats worked far better than the seeds, so we switched all the traps to oats after the first night.

DR PRYCE: Good. The key thing with live trapping is to check often. How frequently did you go round?

HANA: Every morning at dawn, and again at dusk. We didn't want any animal left in a trap for long.

DR PRYCE: Exactly right. And what did you catch?

JOEL: Mostly wood mice — they made up about three-quarters of the captures. We also got a few bank voles, and, to our surprise, a single shrew.

DR PRYCE: Did you mark the animals so you'd recognise recaptures?

HANA: We did. We clipped a tiny patch of fur — it's painless and grows back — rather than using ear tags, which we felt were too invasive for animals that small.

DR PRYCE: A reasonable choice. Any trouble with the weather?

JOEL: The rain on the third night was a nuisance — it set off a couple of empty traps — but otherwise conditions held.

DR PRYCE: For the write-up, what's your main finding?

JOEL: That the mice were far more common near the dense undergrowth than in the open clearings. We think the cover protects them from owls.

DR PRYCE: A strong argument. Just make sure you present it as a hypothesis — your study shows the pattern, but you haven't tested the cause directly. And don't forget to add a map of the trap grid; the examiner will expect to see exactly where each one sat.`,
        questions: [
          {
            id: 'ls-016-s3-q21',
            type: 'gap',
            prompt:
              'The students set out a grid of ____________ live traps across the study area. Write A NUMBER.',
            acceptableAnswers: ['40', 'forty'],
            explanation:
              'Hana says they “set out forty in a grid across the study area.” The answer is 40.',
          },
          {
            id: 'ls-016-s3-q22',
            type: 'mcq',
            prompt: 'Why did the students switch all the traps to a single bait?',
            options: [
              'The seeds ran out during the study',
              'The oats worked far better than the seeds',
              'The tutor instructed them to use oats',
              'Oats were cheaper to buy in bulk',
            ],
            correctIndex: 1,
            explanation:
              'Joel says, “the oats worked far better than the seeds, so we switched all the traps to oats after the first night.” Option B states the reason; the others are not mentioned.',
          },
          {
            id: 'ls-016-s3-q23',
            type: 'gap',
            prompt:
              'To avoid leaving animals trapped, the students checked the traps at dawn and again at ____________. Write ONE WORD.',
            acceptableAnswers: ['dusk'],
            explanation:
              'Hana says they checked “every morning at dawn, and again at dusk.” The second time of day is dusk.',
          },
          {
            id: 'ls-016-s3-q24',
            type: 'mcq',
            prompt: 'Which animal made up about three-quarters of the captures?',
            options: ['Bank voles', 'Shrews', 'Wood mice', 'Owls'],
            correctIndex: 2,
            explanation:
              'Joel reports, “Mostly wood mice — they made up about three-quarters of the captures.” Bank voles and a shrew were caught in much smaller numbers; owls are mentioned later only as predators.',
          },
          {
            id: 'ls-016-s3-q25',
            type: 'gap',
            prompt:
              'To recognise recaptured animals, the students clipped a small patch of ____________ rather than using ear tags. Write ONE WORD.',
            acceptableAnswers: ['fur'],
            explanation:
              'Hana explains, “We clipped a tiny patch of fur … rather than using ear tags.” The answer is “fur”.',
          },
          {
            id: 'ls-016-s3-q26',
            type: 'mcq',
            prompt: 'Why did the students choose fur-clipping over ear tags?',
            options: [
              'Ear tags were not available at the centre',
              'They felt ear tags were too invasive for such small animals',
              'Fur-clipping was quicker to do in the field',
              'The tutor recommended fur-clipping',
            ],
            correctIndex: 1,
            explanation:
              'She says they used fur-clipping “rather than using ear tags, which we felt were too invasive for animals that small.” Option B gives the stated reason.',
          },
          {
            id: 'ls-016-s3-q27',
            type: 'gap',
            prompt:
              'On the third night, ____________ was a nuisance because it set off a couple of empty traps. Write ONE WORD.',
            acceptableAnswers: ['rain'],
            explanation:
              'Joel mentions, “The rain on the third night was a nuisance — it set off a couple of empty traps.” The answer is “rain”.',
          },
          {
            id: 'ls-016-s3-q28',
            type: 'gap',
            prompt:
              'The students’ main finding is that the mice were more common near the dense ____________ than in open clearings. Write ONE WORD.',
            acceptableAnswers: ['undergrowth'],
            explanation:
              'Joel states their main finding: the mice “were far more common near the dense undergrowth than in the open clearings.” The answer is “undergrowth”.',
          },
          {
            id: 'ls-016-s3-q29',
            type: 'mcq',
            prompt: 'What does Dr Pryce advise about the explanation for this finding?',
            options: [
              'They should collect more data before drawing any conclusion',
              'They should present it as a hypothesis rather than a proven cause',
              'They should leave the finding out, as it is too uncertain',
              'They should repeat the study in a different woodland',
            ],
            correctIndex: 1,
            explanation:
              'He says, “make sure you present it as a hypothesis — your study shows the pattern, but you haven’t tested the cause directly.” Option B captures this advice; the others are not what he recommends.',
          },
          {
            id: 'ls-016-s3-q30',
            type: 'gap',
            prompt:
              'Dr Pryce reminds them to add a ____________ of the trap grid to the report. Write ONE WORD.',
            acceptableAnswers: ['map'],
            explanation:
              'He ends with, “don’t forget to add a map of the trap grid; the examiner will expect to see exactly where each one sat.” The answer is “map”.',
          },
        ],
      },
      {
        id: 'ls-academic-16-s4',
        title: 'Section 4 — Lecture: deep-ocean exploration',
        // ~310 words. Academic lecture (Section 4 style): a single speaker delivers a
        // structured lecture on the history and technology of deep-ocean exploration,
        // from the bathysphere to modern autonomous vehicles. Dense and factual, with
        // signpost language; assessed with note/sentence completion + multiple choice,
        // including one True/False/Not Given item anchored in an explicit statement.
        transcript: `Good afternoon. Today I want to take you down into the deep ocean — the vast, dark world below about two hundred metres, where almost no sunlight reaches. It is the largest living space on Earth, yet for most of history it was completely beyond our reach. The story of how we got there is really a story of engineering.

The central problem is pressure. For every ten metres you descend, the pressure increases by roughly one atmosphere, so at the deepest point of the ocean — almost eleven thousand metres down — it is more than a thousand times the pressure at the surface. Any vessel must be built to withstand that crushing force.

The first real breakthrough came in the nineteen-thirties with the bathysphere, a hollow steel ball lowered from a ship on a cable. It was simple but dangerous, because if the cable broke there was no way back. The solution arrived in nineteen-sixty, when a vessel called a bathyscaphe reached the very bottom of the ocean. Unlike the bathysphere, it carried its own buoyancy and could rise on its own, without depending on a cable.

For decades after that, deep exploration relied on crewed submersibles. These are remarkable machines, but they are expensive, and carrying people adds enormous risk. So the field gradually shifted towards robots. Today, much of the work is done by remotely operated vehicles, which are controlled from a ship through a long cable, and increasingly by autonomous vehicles, which carry no cable at all and follow a programmed route on their own.

What have these tools revealed? Perhaps the greatest surprise was the discovery, in the nineteen-seventies, of hydrothermal vents — cracks in the sea floor that release superheated, mineral-rich water. Around them thrive whole communities of creatures that depend not on sunlight, but on chemicals from the Earth's interior. That single finding changed how biologists think about where life can exist.`,
        questions: [
          {
            id: 'ls-016-s4-q31',
            type: 'gap',
            prompt:
              'The deep ocean is defined as the world below about ____________ metres, where almost no sunlight reaches. Write A NUMBER.',
            acceptableAnswers: ['200', 'two hundred'],
            explanation:
              'The lecturer defines the deep ocean as “the vast, dark world below about two hundred metres, where almost no sunlight reaches.” The answer is 200.',
          },
          {
            id: 'ls-016-s4-q32',
            type: 'mcq',
            prompt:
              'According to the lecturer, what is the central problem facing deep-ocean vessels?',
            options: [
              'The cold temperature of the water',
              'The crushing pressure, which increases with depth',
              'The lack of sunlight for navigation',
              'The strong currents near the sea floor',
            ],
            correctIndex: 1,
            explanation:
              'He states plainly, “The central problem is pressure,” explaining that it rises by about one atmosphere every ten metres. Option B is correct; the other factors are not named as the central problem.',
          },
          {
            id: 'ls-016-s4-q33',
            type: 'gap',
            prompt:
              'At the ocean’s deepest point, the pressure is more than ____________ times that at the surface. Write A NUMBER.',
            acceptableAnswers: ['1000', 'a thousand', 'one thousand'],
            explanation:
              'He says that at almost eleven thousand metres down “it is more than a thousand times the pressure at the surface.” The answer is 1000.',
          },
          {
            id: 'ls-016-s4-q34',
            type: 'gap',
            prompt:
              'The first real breakthrough, in the 1930s, was the ____________: a hollow steel ball lowered on a cable. Write ONE WORD.',
            acceptableAnswers: ['bathysphere'],
            explanation:
              'He describes the first breakthrough as “the bathysphere, a hollow steel ball lowered from a ship on a cable.” The answer is “bathysphere”.',
          },
          {
            id: 'ls-016-s4-q35',
            type: 'tfng',
            prompt:
              'The lecturer says the bathyscaphe could rise to the surface on its own, without depending on a cable.',
            answer: 'true',
            explanation:
              'He says the bathyscaphe “carried its own buoyancy and could rise on its own, without depending on a cable.” The statement matches the audio exactly, so it is True.',
          },
          {
            id: 'ls-016-s4-q36',
            type: 'gap',
            prompt:
              'The bathyscaphe reached the very bottom of the ocean in the year ____________. Write A NUMBER.',
            acceptableAnswers: ['1960', 'nineteen sixty', 'nineteen-sixty'],
            explanation:
              'He says the solution “arrived in nineteen-sixty, when a vessel called a bathyscaphe reached the very bottom of the ocean.” The answer is 1960.',
          },
          {
            id: 'ls-016-s4-q37',
            type: 'mcq',
            prompt:
              'Why has deep-ocean exploration shifted away from crewed submersibles towards robots?',
            options: [
              'Robots can dive far deeper than any crewed vessel',
              'Crewed submersibles are expensive and carrying people adds great risk',
              'Submersibles were banned after several accidents',
              'Robots were invented before submersibles',
            ],
            correctIndex: 1,
            explanation:
              'He explains submersibles “are expensive, and carrying people adds enormous risk. So the field gradually shifted towards robots.” Option B states the reason; the others are not supported.',
          },
          {
            id: 'ls-016-s4-q38',
            type: 'mcq',
            prompt: 'How do autonomous vehicles differ from remotely operated vehicles?',
            options: [
              'They are operated by a crew on board',
              'They carry no cable and follow a programmed route on their own',
              'They can only work in shallow water',
              'They are controlled from a ship through a long cable',
            ],
            correctIndex: 1,
            explanation:
              'He contrasts the two: remotely operated vehicles are “controlled from a ship through a long cable,” while autonomous vehicles “carry no cable at all and follow a programmed route on their own.” Option D actually describes the remotely operated type, making B the correct contrast.',
          },
          {
            id: 'ls-016-s4-q39',
            type: 'gap',
            prompt:
              'In the 1970s, explorers discovered hydrothermal vents: cracks in the sea floor that release superheated, ____________-rich water. Write ONE WORD.',
            acceptableAnswers: ['mineral'],
            explanation:
              'He describes hydrothermal vents as “cracks in the sea floor that release superheated, mineral-rich water.” The answer is “mineral”.',
          },
          {
            id: 'ls-016-s4-q40',
            type: 'mcq',
            prompt:
              'Why does the lecturer say the discovery of hydrothermal vents was so important?',
            options: [
              'It proved that the deep ocean is warmer than expected',
              'It revealed communities of creatures that depend on chemicals rather than sunlight',
              'It led directly to the invention of autonomous vehicles',
              'It showed that the sea floor is rich in valuable minerals to mine',
            ],
            correctIndex: 1,
            explanation:
              'He says the vents support “whole communities of creatures that depend not on sunlight, but on chemicals from the Earth’s interior,” and that this “changed how biologists think about where life can exist.” Option B captures the significance.',
          },
        ],
      },
    ],
  },
]
