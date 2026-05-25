// ─── IELTS Academic Listening - practice test data (Set 7) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a phone call to a
//     letting agent about renting a flat), assessed with form / note completion
//     + a multiple-choice item. A surname is spelled and a phone number is
//     dictated, and one detail (the monthly rent) depends on a stated choice.
//   • Section 2 - an everyday MONOLOGUE (here: an induction talk for new members
//     of a co-working space), assessed with sentence completion + multiple
//     choice, carrying signpost language ("first", "next", "finally") that the
//     questions track.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor
//     reviewing the design of a psychology experiment on memory), assessed with
//     multiple choice + completion.
//   • Section 4 - an academic LECTURE / monologue (here: the history of tea),
//     assessed with note/sentence completion + multiple choice.
//
// Question conventions (shared contract from @/lib/ielts/types):
//   • 'gap'  → completion items. `acceptableAnswers` are matched case-insensitively
//              and trimmed by the marker. The official word-limit instruction lives
//              in the prompt (e.g. "ONE WORD AND/OR A NUMBER").
//   • 'mcq'  → single best answer; `correctIndex` is 0-based.
//   • 'tfng' → True / False / Not Given.
// `audioSrc` is intentionally left undefined - the `transcript` drives the Web
// Speech API "audio" stand-in and doubles as the post-submit review view.
// All content below is original and written for IELTS preparation only.
// ────────────────────────────────────────────────────────────────────────────

import type { ListeningTest } from '@/lib/ielts/types'

export const LISTENING_SET_7: ListeningTest[] = [
  {
    id: 'ls-academic-7',
    title:
      'Practice Test 7 - Renting a Flat, Co-working Induction, A Memory Experiment & The History of Tea',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-7-s1',
        title: 'Section 1 - Renting a flat through a letting agent',
        // ~270 words. Transactional dialogue (Section 1 style): a caller enquiring
        // about a flat with a letting agent over the phone. A surname is spelled
        // and a mobile number is dictated; one detail (the monthly rent) depends on
        // a stated choice (whether bills are included), mirroring the form/note-
        // completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good morning, Parkview Lettings, this is Sophie speaking. How can I help you?

MAN: Hello, I'm calling about the two-bedroom flat you've advertised on Hartley Road. Is it still available?

WOMAN: It is, yes. Let me take a few details so I can send you the full information. Could I have your name?

MAN: It's Oliver Brennan. Brennan is spelled B-R-E-N-N-A-N.

WOMAN: Thank you, Oliver. And the best number to reach you on?

MAN: It's oh-seven-nine-double-one, four-two-six, eight-three-oh.

WOMAN: Lovely. Now, the flat is on the second floor, and it's fully furnished. The rent is advertised at nine hundred pounds a month.

MAN: And does that include the bills?

WOMAN: It doesn't, normally - that's just the rent. But the landlord offers an all-inclusive option where water, gas and electricity are bundled in, and that comes to one thousand and fifty pounds a month.

MAN: I think I'd prefer the all-inclusive one, to keep things simple.

WOMAN: A sensible choice. Now, there's a deposit equal to one month's rent, and we'd need references from your current employer.

MAN: That's fine. When would it be available from?

WOMAN: The tenants move out on the fifteenth, so you could take it from the first of next month. Viewings are on Thursdays - would this Thursday at half past five suit you?

MAN: Perfect. And what should I bring to the viewing?

WOMAN: Just a form of photo identification, such as a passport. The address is forty Hartley Road.

MAN: Brilliant. Thank you so much for your help.

WOMAN: You're very welcome. See you on Thursday.`,
        questions: [
          {
            id: 'ls-007-s1-q1',
            type: 'gap',
            prompt:
              'Complete the enquiry form. Write ONE WORD for the answer.\n\nCaller surname: ____________',
            acceptableAnswers: ['Brennan', 'brennan'],
            explanation:
              'The caller gives his name as “Oliver Brennan” and spells the surname out: B-R-E-N-N-A-N. In Section 1, surnames are almost always spelled aloud - write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-007-s1-q2',
            type: 'gap',
            prompt: 'Contact number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07911426830', '0791 1426830', '07911 426 830', '079 11 426 830'],
            explanation:
              'The number is dictated as “oh-seven-nine-double-one, four-two-six, eight-three-oh”, which is 07911426830. “Double one” means two 1s, “oh” means zero - spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-007-s1-q3',
            type: 'gap',
            prompt: 'The advertised flat is on ____________ Road. Write ONE WORD.',
            acceptableAnswers: ['Hartley', 'hartley'],
            explanation:
              'He is calling “about the two-bedroom flat you’ve advertised on Hartley Road”, and she later gives the address as “forty Hartley Road.” The street is “Hartley”.',
          },
          {
            id: 'ls-007-s1-q4',
            type: 'gap',
            prompt: 'The flat is on the ____________ floor. Write ONE WORD (a number word).',
            acceptableAnswers: ['second', '2nd'],
            explanation:
              'She says, “the flat is on the second floor, and it’s fully furnished.” The answer is “second”.',
          },
          {
            id: 'ls-007-s1-q5',
            type: 'mcq',
            prompt: 'How much will the man pay in rent each month?',
            options: [
              'Nine hundred pounds, the advertised rent only',
              'One thousand and fifty pounds, with the bills included',
              'Nine hundred pounds, plus a separate charge for bills',
              'One thousand and fifty pounds, because the flat is furnished',
            ],
            correctIndex: 1,
            explanation:
              'The rent is “advertised at nine hundred pounds a month”, but the all-inclusive option, “where water, gas and electricity are bundled in… comes to one thousand and fifty pounds a month.” Because he chooses the all-inclusive option, he pays £1,050. The distractors reuse the real figures but give the wrong reason.',
          },
          {
            id: 'ls-007-s1-q6',
            type: 'gap',
            prompt: 'The deposit is equal to ____________ month’s rent. Write A NUMBER.',
            acceptableAnswers: ['1', 'one'],
            explanation:
              'She says, “there’s a deposit equal to one month’s rent.” The answer is 1 (or “one”).',
          },
          {
            id: 'ls-007-s1-q7',
            type: 'gap',
            prompt:
              'The agent needs references from the caller’s current ____________. Write ONE WORD.',
            acceptableAnswers: ['employer', 'employers'],
            explanation:
              'She says, “we’d need references from your current employer.” The answer is “employer”.',
          },
          {
            id: 'ls-007-s1-q8',
            type: 'gap',
            prompt:
              'The flat would be available to rent from the ____________ of next month. Write ONE WORD (a number word).',
            acceptableAnswers: ['first', '1st'],
            explanation:
              'She explains the current tenants move out on the fifteenth, “so you could take it from the first of next month.” The available date is the “first” - the fifteenth is when the old tenants leave, a deliberate distractor.',
          },
          {
            id: 'ls-007-s1-q9',
            type: 'gap',
            prompt:
              'The viewing is arranged for Thursday at ____________. Write the time you hear.',
            acceptableAnswers: [
              '5.30',
              '5:30',
              'half past five',
              'half-past five',
              '17:30',
              'five thirty',
            ],
            explanation:
              'She offers “this Thursday at half past five”, which the man accepts, i.e. 5.30 pm. Times written as “5.30”, “5:30” or “half past five” are all acceptable.',
          },
          {
            id: 'ls-007-s1-q10',
            type: 'gap',
            prompt:
              'To the viewing, the man should bring a form of photo ____________. Write ONE WORD.',
            acceptableAnswers: ['identification', 'id', 'identity'],
            explanation:
              'She says, “Just a form of photo identification, such as a passport.” The answer is “identification” (ID/identity accepted) - the passport is the example, not the gap word.',
          },
        ],
      },
      {
        id: 'ls-academic-7-s2',
        title: 'Section 2 - Induction at a co-working space',
        // ~265 words. Informational monologue (Section 2 style): a single speaker
        // giving an induction talk to new members of a co-working space, explaining
        // the layout, rules and facilities. Uses sequencing/signpost language
        // ("first", "next", "finally") that the questions follow in order, with a
        // sentence/note-completion + multiple-choice mix.
        transcript: `Hello everyone, and welcome to your first day at Loft Workspace. My name is Daniel, and I'm the community manager here. I'll spend a few minutes showing you how things work before I let you settle in.

First, let me explain the floors. We're standing on the ground floor, which is our social hub - there's a café, comfortable sofas, and a noticeboard with all our upcoming events. It can get quite lively down here, so it isn't the place for focused work. If you need quiet, head up to the first floor, which is our designated silent zone. Phone calls are not allowed up there at all - please step into one of the booths on the landing instead.

Next, a word about meeting rooms. There are six of them on the second floor, and you book them through our app rather than the front desk. Each member gets four hours of free room time a month, and after that it's charged by the hour.

Now, the part everyone asks about - the kitchen. Tea and coffee are free and available all day. We do ask one thing: please wash up your own cups. Our cleaner comes in the evenings, but the kitchen is a shared space during the day.

A quick note on access. Your membership card lets you in twenty-four hours a day, seven days a week, so you're welcome to work late or at weekends.

Finally, if you have any technical problems - the wifi, the printers, anything like that - don't email me. Raise a ticket through the app and our support team will respond, usually within the hour. Right, that's everything. Enjoy your first day.`,
        questions: [
          {
            id: 'ls-007-s2-q11',
            type: 'mcq',
            prompt: 'What does the speaker say about the ground floor?',
            options: [
              'It is the quietest place to do focused work',
              'It is a lively social hub, not suited to focused work',
              'It can only be used by members who book in advance',
              'It is reserved for meetings with visitors',
            ],
            correctIndex: 1,
            explanation:
              'He calls the ground floor “our social hub” and says “It can get quite lively down here, so it isn’t the place for focused work.” Option B matches; the others are not stated.',
          },
          {
            id: 'ls-007-s2-q12',
            type: 'gap',
            prompt: 'The first floor is the designated ____________ zone. Write ONE WORD.',
            acceptableAnswers: ['silent', 'quiet'],
            explanation:
              'He says, “head up to the first floor, which is our designated silent zone.” The answer is “silent” (quiet accepted as a synonym).',
          },
          {
            id: 'ls-007-s2-q13',
            type: 'mcq',
            prompt: 'What should members do if they need to take a phone call on the first floor?',
            options: [
              'Keep their voice as low as possible',
              'Step into one of the booths on the landing',
              'Go back down to the ground floor café',
              'Book a meeting room through the app',
            ],
            correctIndex: 1,
            explanation:
              'He says phone calls “are not allowed up there at all - please step into one of the booths on the landing instead.” Option B is the instruction he gives.',
          },
          {
            id: 'ls-007-s2-q14',
            type: 'gap',
            prompt: 'There are ____________ meeting rooms on the second floor. Write A NUMBER.',
            acceptableAnswers: ['6', 'six'],
            explanation: 'He says, “There are six of them on the second floor.” The answer is 6.',
          },
          {
            id: 'ls-007-s2-q15',
            type: 'mcq',
            prompt: 'How do members reserve a meeting room?',
            options: [
              'By asking the front desk',
              'Through the workspace app',
              'By emailing the community manager',
              'On a sign-up sheet by the rooms',
            ],
            correctIndex: 1,
            explanation:
              'He says, “you book them through our app rather than the front desk.” Option B is correct, and the front desk is explicitly ruled out.',
          },
          {
            id: 'ls-007-s2-q16',
            type: 'gap',
            prompt:
              'Each member gets ____________ hours of free meeting-room time a month. Write A NUMBER.',
            acceptableAnswers: ['4', 'four'],
            explanation:
              'He says, “Each member gets four hours of free room time a month, and after that it’s charged by the hour.” The answer is 4.',
          },
          {
            id: 'ls-007-s2-q17',
            type: 'gap',
            prompt:
              'In the kitchen, members are asked to wash up their own ____________. Write ONE WORD.',
            acceptableAnswers: ['cups', 'cup'],
            explanation:
              'He says, “please wash up your own cups.” The answer is “cups” - the cleaner comes in the evenings, but the kitchen is shared during the day.',
          },
          {
            id: 'ls-007-s2-q18',
            type: 'mcq',
            prompt: 'What does the speaker say about access to the building?',
            options: [
              'It is open only during normal office hours',
              'Membership cards allow access at any time, every day',
              'Weekend access must be requested in advance',
              'Late access is limited to the ground floor',
            ],
            correctIndex: 1,
            explanation:
              'He says, “Your membership card lets you in twenty-four hours a day, seven days a week, so you’re welcome to work late or at weekends.” Option B matches.',
          },
          {
            id: 'ls-007-s2-q19',
            type: 'gap',
            prompt:
              'To report a technical problem, members should raise a ____________ through the app. Write ONE WORD.',
            acceptableAnswers: ['ticket'],
            explanation:
              'He says, “don’t email me. Raise a ticket through the app and our support team will respond.” The answer is “ticket”.',
          },
          {
            id: 'ls-007-s2-q20',
            type: 'gap',
            prompt: 'The support team usually responds within the ____________. Write ONE WORD.',
            acceptableAnswers: ['hour'],
            explanation:
              'He says the support team “will respond, usually within the hour.” The answer is “hour”.',
          },
        ],
      },
      {
        id: 'ls-academic-7-s3',
        title: 'Section 3 - Tutorial: designing a memory experiment',
        // ~295 words. Academic discussion (Section 3 style): two students (Maya and
        // Tom) and a tutor (Dr Okafor) discuss the design of a psychology experiment
        // on memory. Speakers debate method and procedure, so the questions mix
        // multiple choice (decisions/opinions) with completion (concrete details).
        transcript: `DR OKAFOR: So, Maya and Tom, let's go over the design of your memory experiment. What's the basic idea?

MAYA: We want to test whether people remember a list of words better if they sleep afterwards, compared with staying awake.

DR OKAFOR: A classic question. How will you split your participants?

TOM: Into two groups. One group learns the list in the morning and is tested twelve hours later, having been awake all day. The other learns it in the evening and is tested after a night's sleep.

DR OKAFOR: Good - so the gap is the same for both. How many participants are you aiming for?

MAYA: We were hoping for forty, but recruiting has been slow, so realistically it'll be around thirty.

DR OKAFOR: That's still workable. Now, what about the word list itself? How long is it?

TOM: Thirty words. We deliberately chose words that aren't linked in meaning, so people can't use a story to remember them.

DR OKAFOR: Sensible. And how will you score their recall?

MAYA: We'll simply count the number of words each person writes down correctly. Order doesn't matter.

DR OKAFOR: One thing to watch: make sure both groups see the list for exactly the same length of time. If one group studies for longer, you can't tell whether it's the sleep or the extra study that made the difference.

TOM: Good point. We'll time it at two minutes for everyone.

DR OKAFOR: And consent - have you thought about the ethics form?

MAYA: Yes, every participant signs one beforehand, and we tell them they can withdraw at any time.

DR OKAFOR: Excellent. My final piece of advice: run a small pilot first, with just three or four people, to check your instructions are clear before the real study.

TOM: We'll do that next week.`,
        questions: [
          {
            id: 'ls-007-s3-q21',
            type: 'mcq',
            prompt: 'What is the main question the students want their experiment to answer?',
            options: [
              'Whether people remember more words in the morning than in the evening',
              'Whether sleeping after learning improves memory compared with staying awake',
              'Whether longer word lists are harder to remember',
              'Whether older people remember word lists better than younger people',
            ],
            correctIndex: 1,
            explanation:
              'Maya says, “We want to test whether people remember a list of words better if they sleep afterwards, compared with staying awake.” Option B matches the aim exactly.',
          },
          {
            id: 'ls-007-s3-q22',
            type: 'gap',
            prompt:
              'Each group is tested ____________ hours after learning the list. Write A NUMBER.',
            acceptableAnswers: ['12', 'twelve'],
            explanation:
              'Tom explains one group “is tested twelve hours later”, and Dr Okafor confirms “the gap is the same for both.” The answer is 12.',
          },
          {
            id: 'ls-007-s3-q23',
            type: 'gap',
            prompt:
              'The students now realistically expect about ____________ participants. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'Maya says, “We were hoping for forty, but recruiting has been slow, so realistically it’ll be around thirty.” The realistic number is 30 - forty was the original hope, a distractor.',
          },
          {
            id: 'ls-007-s3-q24',
            type: 'gap',
            prompt: 'The word list contains ____________ words. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'Tom says the list is “Thirty words.” The answer is 30 - note this coincidentally matches the participant estimate, so listen to which figure each question asks about.',
          },
          {
            id: 'ls-007-s3-q25',
            type: 'mcq',
            prompt: 'Why did the students choose words that are not linked in meaning?',
            options: [
              'So the words would be harder to pronounce',
              'So participants cannot use a story to help them remember',
              'So the list could be made longer',
              'So the words would be easier to score',
            ],
            correctIndex: 1,
            explanation:
              'Tom says they “deliberately chose words that aren’t linked in meaning, so people can’t use a story to remember them.” Option B captures the reason.',
          },
          {
            id: 'ls-007-s3-q26',
            type: 'mcq',
            prompt: 'How will the students score each participant’s recall?',
            options: [
              'By counting correct words, regardless of order',
              'By checking the words are written in the correct order',
              'By timing how quickly each person responds',
              'By asking participants to rate their own performance',
            ],
            correctIndex: 0,
            explanation:
              'Maya says, “We’ll simply count the number of words each person writes down correctly. Order doesn’t matter.” Option A matches; order being irrelevant rules out option B.',
          },
          {
            id: 'ls-007-s3-q27',
            type: 'gap',
            prompt:
              'Dr Okafor warns that both groups must see the list for the same length of ____________. Write ONE WORD.',
            acceptableAnswers: ['time'],
            explanation:
              'He says, “make sure both groups see the list for exactly the same length of time. If one group studies for longer, you can’t tell whether it’s the sleep or the extra study that made the difference.” The answer is “time”.',
          },
          {
            id: 'ls-007-s3-q28',
            type: 'gap',
            prompt:
              'The students decide to show the list to everyone for ____________ minutes. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation: 'Tom says, “We’ll time it at two minutes for everyone.” The answer is 2.',
          },
          {
            id: 'ls-007-s3-q29',
            type: 'gap',
            prompt:
              'Every participant signs an ethics form and is told they can ____________ at any time. Write ONE WORD.',
            acceptableAnswers: ['withdraw', 'leave'],
            explanation:
              'Maya says, “every participant signs one beforehand, and we tell them they can withdraw at any time.” The answer is “withdraw” (leave accepted as a synonym).',
          },
          {
            id: 'ls-007-s3-q30',
            type: 'gap',
            prompt:
              'Dr Okafor advises the students to run a small ____________ first, with three or four people. Write ONE WORD.',
            acceptableAnswers: ['pilot'],
            explanation:
              'He advises, “run a small pilot first, with just three or four people, to check your instructions are clear.” The answer is “pilot”.',
          },
        ],
      },
      {
        id: 'ls-academic-7-s4',
        title: 'Section 4 - Lecture: the history of tea',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the history of tea. Dense,
        // factual and signposted ("to begin", "by the", "finally"), with the
        // note/sentence-completion + multiple-choice mix typical of Section 4.
        transcript: `Good afternoon. Today I'd like to trace the long history of one of the world's most popular drinks - tea. It is, after water, the most widely consumed beverage on the planet, and its story stretches back thousands of years.

Let me begin with its origins. Tea comes from the leaves of a single plant, Camellia sinensis, which is native to the region where south-west China meets northern Myanmar. According to a well-known Chinese legend, tea was discovered by accident when leaves blew into a pot of boiling water belonging to an emperor. Whether or not that's true, we have firm written records of tea being drunk in China by around the third century, originally as a medicine rather than for pleasure.

By the eighth century, tea-drinking had become a refined social custom, and a scholar named Lu Yu wrote the first known book entirely devoted to it. From China, the habit spread to Japan, carried back by Buddhist monks who had travelled there to study.

Now, tea reached Europe surprisingly late. It was Portuguese and Dutch traders who first brought it back in the sixteenth and seventeenth centuries. At first it was extremely expensive - a luxury only the wealthy could afford - and it was often kept locked away in special boxes.

The drink became central to British life in particular. One reason tea overtook coffee there was the influence of the East India Company, which controlled the trade. Tea also became bound up with politics: heavy taxes on it famously helped to spark protest in the American colonies.

Finally, a word on how it's grown today. Tea bushes are kept short by regular pruning, and only the top two leaves and a bud are picked - usually by hand, because machines damage the delicate leaves. We'll look at the processing methods next week.`,
        questions: [
          {
            id: 'ls-007-s4-q31',
            type: 'mcq',
            prompt: 'According to the speaker, how popular is tea worldwide?',
            options: [
              'It is the single most consumed drink of any kind',
              'It is the most widely consumed drink after water',
              'It is more popular than coffee only in Britain',
              'It is the oldest known drink in the world',
            ],
            correctIndex: 1,
            explanation:
              'She says tea is, “after water, the most widely consumed beverage on the planet.” Option B matches; water is more consumed, so option A is wrong.',
          },
          {
            id: 'ls-007-s4-q32',
            type: 'gap',
            prompt:
              'Tea comes from the leaves of a plant called Camellia ____________. Write ONE WORD.',
            acceptableAnswers: ['sinensis'],
            explanation:
              'She says, “Tea comes from the leaves of a single plant, Camellia sinensis.” The missing word is “sinensis”.',
          },
          {
            id: 'ls-007-s4-q33',
            type: 'gap',
            prompt:
              'There are firm written records of tea being drunk in China by around the ____________ century. Write ONE WORD (a number word).',
            acceptableAnswers: ['third', '3rd'],
            explanation:
              'She says “we have firm written records of tea being drunk in China by around the third century, originally as a medicine.” The answer is “third”.',
          },
          {
            id: 'ls-007-s4-q34',
            type: 'mcq',
            prompt: 'How was tea first used in China, according to the lecture?',
            options: [
              'As a refined social custom',
              'As a medicine rather than for pleasure',
              'As a form of payment between traders',
              'As an offering in religious ceremonies',
            ],
            correctIndex: 1,
            explanation:
              'She says tea was drunk in China “originally as a medicine rather than for pleasure.” Option B matches; the refined social custom came later, by the eighth century.',
          },
          {
            id: 'ls-007-s4-q35',
            type: 'gap',
            prompt:
              'A scholar named Lu Yu wrote the first known ____________ devoted entirely to tea. Write ONE WORD.',
            acceptableAnswers: ['book'],
            explanation:
              'She says “a scholar named Lu Yu wrote the first known book entirely devoted to it.” The answer is “book”.',
          },
          {
            id: 'ls-007-s4-q36',
            type: 'gap',
            prompt:
              'The habit of tea-drinking spread from China to Japan, carried back by Buddhist ____________. Write ONE WORD.',
            acceptableAnswers: ['monks', 'monk'],
            explanation:
              'She says the habit “spread to Japan, carried back by Buddhist monks who had travelled there to study.” The answer is “monks”.',
          },
          {
            id: 'ls-007-s4-q37',
            type: 'mcq',
            prompt: 'What does the speaker say about tea when it first reached Europe?',
            options: [
              'It was cheap and quickly became an everyday drink',
              'It was an expensive luxury, often kept locked away',
              'It was used mainly as a medicine, as in China',
              'It was banned by traders for many years',
            ],
            correctIndex: 1,
            explanation:
              'She says, “At first it was extremely expensive - a luxury only the wealthy could afford - and it was often kept locked away in special boxes.” Option B matches.',
          },
          {
            id: 'ls-007-s4-q38',
            type: 'gap',
            prompt:
              'In Britain, one reason tea overtook coffee was the influence of the East India ____________, which controlled the trade. Write ONE WORD.',
            acceptableAnswers: ['Company', 'company'],
            explanation:
              'She says one reason tea overtook coffee “was the influence of the East India Company, which controlled the trade.” The answer is “Company”.',
          },
          {
            id: 'ls-007-s4-q39',
            type: 'tfng',
            prompt:
              'The speaker says that today tea is usually picked by machine rather than by hand.',
            answer: 'false',
            explanation:
              'This is the opposite of what she says: only the top two leaves and a bud are picked, “usually by hand, because machines damage the delicate leaves.” The statement is therefore False.',
          },
          {
            id: 'ls-007-s4-q40',
            type: 'gap',
            prompt:
              'When tea is harvested, pickers take the top two leaves and a ____________. Write ONE WORD.',
            acceptableAnswers: ['bud'],
            explanation:
              'She says “only the top two leaves and a bud are picked.” The answer is “bud”.',
          },
        ],
      },
    ],
  },
]
