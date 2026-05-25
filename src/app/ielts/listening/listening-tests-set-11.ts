// ─── IELTS Academic Listening - practice test data (Set 11) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a phone call to a
//     catering company to order food for an event), assessed with form / note
//     completion + a multiple-choice item. A surname is spelled and a phone
//     number is dictated, and one detail (the price per head) depends on a
//     stated choice (which menu the caller picks).
//   • Section 2 - an everyday MONOLOGUE (here: an induction talk for new members
//     at a public library), assessed with sentence completion + multiple choice,
//     carrying signpost language ("first", "next", "finally") that the questions
//     track.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor in a
//     tutorial about a renewable-energy student project - a small solar/wind
//     charging station on campus), assessed with multiple choice + completion.
//   • Section 4 - an academic LECTURE / monologue (here: the history of
//     chocolate, from cacao in Mesoamerica to the modern bar), assessed with
//     note/sentence completion + multiple choice, including one True/False/Not
//     Given item.
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

export const LISTENING_SET_11: ListeningTest[] = [
  {
    id: 'ls-academic-11',
    title:
      'Practice Test 11 - Ordering Event Catering, A Library Induction, A Renewable-Energy Project & The History of Chocolate',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-11-s1',
        title: 'Section 1 - Ordering food for an event',
        // ~280 words. Transactional dialogue (Section 1 style): a caller phoning a
        // catering company to order food for a retirement party. A surname is
        // spelled and a mobile number is dictated; one detail (the price per head)
        // depends on a stated choice (which menu the caller selects), mirroring the
        // form/note-completion + multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good morning, Maple Tree Catering, this is Sophie speaking. How can I help you?

MAN: Hello, I'd like to order some food for a party I'm holding. It's a retirement do for a colleague.

WOMAN: How lovely. I can take all the details now. Could I start with your name?

MAN: Yes, it's Patrick Whitlock. Whitlock is spelled W-H-I-T-L-O-C-K.

WOMAN: Thank you, Patrick. And a phone number in case we need to reach you on the day?

MAN: It's oh-seven-nine-double-two, four-one-six, eight-oh-three.

WOMAN: Perfect. And what date is the event?

MAN: It's on Saturday the twenty-first of June.

WOMAN: Right. Now, we offer two set menus. The Garden menu is a cold buffet - sandwiches, salads and fruit - at twelve pounds a head. The Harvest menu adds hot dishes and a dessert, and that's eighteen pounds a head.

MAN: I think the Harvest one - people will expect something warm in the evening.

WOMAN: A good choice. And how many guests are you expecting?

MAN: Around thirty, but I'll confirm the exact number next week.

WOMAN: No problem. One thing I must ask - does anyone have particular dietary needs?

MAN: Yes, two of the guests are vegetarian, and one cannot eat nuts.

WOMAN: I've noted that down. We'll prepare clearly labelled dishes for them. Delivery is free within the city, and we'll arrive about an hour before you'd like to start serving.

MAN: That's great. We'd like to eat at seven, so any time from six would be fine.

WOMAN: Lovely. I'll email you a written quote this afternoon to confirm everything.

MAN: Thank you so much for your help.`,
        questions: [
          {
            id: 'ls-011-s1-q1',
            type: 'gap',
            prompt:
              'Complete the booking form. Write ONE WORD for the answer.\n\nCustomer surname: ____________',
            acceptableAnswers: ['Whitlock', 'whitlock'],
            explanation:
              'The caller gives his name as “Patrick Whitlock” and spells the surname out: W-H-I-T-L-O-C-K. In Section 1, surnames are almost always spelled aloud - write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-011-s1-q2',
            type: 'gap',
            prompt: 'Contact number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07922416803', '0792 2416803', '07922 416 803', '079 22 416 803'],
            explanation:
              'The number is dictated as “oh-seven-nine-double-two, four-one-six, eight-oh-three”, which is 07922416803. “Double two” means two 2s and “oh” means zero - spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-011-s1-q3',
            type: 'gap',
            prompt: 'Date of the event: Saturday the ____________ of June. Write A NUMBER.',
            acceptableAnswers: ['21', 'twenty-first', 'twenty first', '21st'],
            explanation:
              'He says the party is “on Saturday the twenty-first of June”, so the date is the 21st. Ordinal numbers said aloud (twenty-first) map to the digits 21.',
          },
          {
            id: 'ls-011-s1-q4',
            type: 'mcq',
            prompt: 'How much will the man pay per guest?',
            options: [
              'Twelve pounds, for the cold Garden buffet',
              'Eighteen pounds, because he chooses the Harvest menu',
              'Twelve pounds, with a dessert included',
              'Eighteen pounds, because delivery is extra',
            ],
            correctIndex: 1,
            explanation:
              'The Garden menu is “twelve pounds a head”, but the Harvest menu “adds hot dishes and a dessert… eighteen pounds a head.” Because he says, “I think the Harvest one - people will expect something warm,” he pays £18 per head. The distractors reuse the real figures but give the wrong reason.',
          },
          {
            id: 'ls-011-s1-q5',
            type: 'gap',
            prompt:
              'The man chooses the Harvest menu because it adds hot dishes and a ____________. Write ONE WORD.',
            acceptableAnswers: ['dessert', 'pudding'],
            explanation:
              'She says the Harvest menu “adds hot dishes and a dessert”, and he picks it for something warm. The missing word is “dessert” (pudding accepted as a synonym).',
          },
          {
            id: 'ls-011-s1-q6',
            type: 'gap',
            prompt: 'Approximate number of guests expected: ____________. Write A NUMBER.',
            acceptableAnswers: ['30', 'thirty'],
            explanation:
              'He says, “Around thirty, but I’ll confirm the exact number next week.” The approximate figure is 30.',
          },
          {
            id: 'ls-011-s1-q7',
            type: 'gap',
            prompt: 'Number of guests who are vegetarian: ____________. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'He says, “two of the guests are vegetarian, and one cannot eat nuts.” The number who are vegetarian is 2 - a deliberate contrast with the one guest who cannot eat nuts.',
          },
          {
            id: 'ls-011-s1-q8',
            type: 'gap',
            prompt: 'One guest has an allergy and cannot eat ____________. Write ONE WORD.',
            acceptableAnswers: ['nuts', 'nut'],
            explanation:
              'He says, “one cannot eat nuts.” The answer is “nuts” - note this is separate from the two vegetarian guests in the previous question.',
          },
          {
            id: 'ls-011-s1-q9',
            type: 'gap',
            prompt: 'Delivery is free within the ____________. Write ONE WORD.',
            acceptableAnswers: ['city'],
            explanation: 'She says, “Delivery is free within the city.” The answer is “city”.',
          },
          {
            id: 'ls-011-s1-q10',
            type: 'gap',
            prompt:
              'The caterers will arrive about an hour before serving; the guests will eat at ____________. Write the time you hear.',
            acceptableAnswers: [
              '7',
              'seven',
              '7pm',
              '7 pm',
              '19:00',
              '7.00',
              '7:00',
              "seven o'clock",
            ],
            explanation:
              'He says, “We’d like to eat at seven, so any time from six would be fine.” The serving time is 7 (pm); six is when the caterers can start arriving, a deliberate distractor.',
          },
        ],
      },
      {
        id: 'ls-academic-11-s2',
        title: 'Section 2 - A library induction for new members',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // welcoming new members to a public library and explaining the layout,
        // services and rules. Uses sequencing/signpost language ("first", "next",
        // "finally") that the questions follow in order, with a sentence/note-
        // completion + multiple-choice mix.
        transcript: `Hello everyone, and welcome to Northgate Public Library. My name is Diane, and I'm the membership librarian. I'll spend a few minutes showing you what we offer before you explore on your own.

First, let me explain borrowing. With your new card you can take out up to twelve items at once, and the standard loan period is three weeks. If no one else has reserved a book, you can renew it online twice, giving you up to nine weeks in total. Do remember that returning items late means a small charge of ten pence per day.

Now, a word about the layout. The ground floor is for fiction and the children's section, and we ask that you keep your voice down rather than expecting complete silence - it's a family space. If you need to make a phone call, please step out into the foyer.

Next, the first floor. This is where you'll find non-fiction, the reference collection, and the quiet study area, where laptops are welcome but conversation is not. Up here we also have a small local-history room, which is only open on Friday afternoons.

One service people often overlook is our free events programme. Every Tuesday evening we host an author talk or a workshop, and these are completely free, though we do ask you to book a seat in advance because they are popular.

Finally, a quick note on access. The library is open seven days a week, but on Sundays we close at one o'clock rather than the usual five. There's a returns box by the main entrance for items handed back outside opening hours. Right - please do have a look around, and come and find me if you have any questions.`,
        questions: [
          {
            id: 'ls-011-s2-q11',
            type: 'gap',
            prompt:
              'With a new card, members can borrow up to ____________ items at once. Write A NUMBER.',
            acceptableAnswers: ['12', 'twelve'],
            explanation:
              'She says, “you can take out up to twelve items at once, and the standard loan period is three weeks.” The answer is 12 - the three weeks is the loan period, a deliberate distractor.',
          },
          {
            id: 'ls-011-s2-q12',
            type: 'gap',
            prompt:
              'If a book is not reserved, members can renew it online ____________ times. Write A NUMBER.',
            acceptableAnswers: ['2', 'twice', 'two'],
            explanation:
              'She says, “you can renew it online twice, giving you up to nine weeks in total.” The answer is 2 (twice); nine weeks is the resulting total, not the number of renewals.',
          },
          {
            id: 'ls-011-s2-q13',
            type: 'mcq',
            prompt: 'What does the speaker say about late returns?',
            options: [
              'There is no charge for returning items late',
              'Late items are charged at ten pence per day',
              'Late items must be reported to a librarian',
              'Membership is suspended for late returns',
            ],
            correctIndex: 1,
            explanation:
              'She says, “returning items late means a small charge of ten pence per day.” Option B matches; the other options are not stated.',
          },
          {
            id: 'ls-011-s2-q14',
            type: 'mcq',
            prompt: 'What does the speaker say about noise on the ground floor?',
            options: [
              'Complete silence is required at all times',
              'Visitors should keep their voices down, as it is a family space',
              'Phone calls may be made anywhere on the floor',
              'Children are not allowed on the ground floor',
            ],
            correctIndex: 1,
            explanation:
              'She asks visitors to “keep your voice down rather than expecting complete silence - it’s a family space”, and to step into the foyer for phone calls. Option B matches; complete silence is explicitly NOT required there.',
          },
          {
            id: 'ls-011-s2-q15',
            type: 'gap',
            prompt:
              'To make a phone call, members should step out into the ____________. Write ONE WORD.',
            acceptableAnswers: ['foyer', 'lobby'],
            explanation:
              'She says, “If you need to make a phone call, please step out into the foyer.” The answer is “foyer” (lobby accepted as a synonym).',
          },
          {
            id: 'ls-011-s2-q16',
            type: 'gap',
            prompt:
              'The first floor has non-fiction, the reference collection and a quiet ____________ area. Write ONE WORD.',
            acceptableAnswers: ['study'],
            explanation:
              'She says the first floor has “the quiet study area, where laptops are welcome but conversation is not.” The answer is “study”.',
          },
          {
            id: 'ls-011-s2-q17',
            type: 'mcq',
            prompt: 'When is the local-history room open?',
            options: [
              'Every weekday morning',
              'Only on Friday afternoons',
              'Seven days a week',
              'Only on Tuesday evenings',
            ],
            correctIndex: 1,
            explanation:
              'She says the first floor has “a small local-history room, which is only open on Friday afternoons.” Option B matches; Tuesday evenings refers to the events programme, a distractor.',
          },
          {
            id: 'ls-011-s2-q18',
            type: 'gap',
            prompt:
              'Free author talks and workshops are held every ____________ evening. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Tuesday', 'tuesday', 'Tuesdays', 'tuesdays'],
            explanation:
              'She says, “Every Tuesday evening we host an author talk or a workshop.” The answer is “Tuesday”.',
          },
          {
            id: 'ls-011-s2-q19',
            type: 'mcq',
            prompt: 'What must members do to attend a free event?',
            options: [
              'Pay a small entrance fee',
              'Book a seat in advance',
              'Bring their own laptop',
              'Arrive before one o’clock',
            ],
            correctIndex: 1,
            explanation:
              'She says the events are free, “though we do ask you to book a seat in advance because they are popular.” Option B matches; the events are explicitly free, ruling out option A.',
          },
          {
            id: 'ls-011-s2-q20',
            type: 'gap',
            prompt:
              'On Sundays the library closes at ____________ o’clock rather than the usual five. Write A NUMBER.',
            acceptableAnswers: ['1', 'one'],
            explanation:
              'She says, “on Sundays we close at one o’clock rather than the usual five.” The Sunday closing time is 1; five is the usual closing time on other days, a distractor.',
          },
        ],
      },
      {
        id: 'ls-academic-11-s3',
        title: 'Section 3 - Tutorial: a renewable-energy student project',
        // ~290 words. Academic discussion (Section 3 style): two students (Aisha and
        // Tom) and a tutor (Dr Reeves) discuss their renewable-energy project - a
        // small solar and wind charging station to be built on campus. Speakers
        // debate the design, a problem with the wind turbine, the budget and how to
        // present results, so the questions mix multiple choice (decisions/opinions)
        // with completion (concrete details).
        transcript: `DR REEVES: Right, Aisha and Tom, let's review where you've got to with the renewable-energy project. Remind me what you're building.

AISHA: We're designing a small charging station for the courtyard outside the library, so students can charge their phones using clean energy. It combines a solar panel and a tiny wind turbine.

DR REEVES: A nice idea. Why both sources, rather than just solar?

TOM: Because on cloudy or short winter days the panel alone doesn't generate enough. The turbine fills the gap when there's wind but little sun.

DR REEVES: Sensible. So the two sources complement each other. Now, what's been your biggest problem so far?

AISHA: Honestly, the wind turbine. The first one we built was far too noisy, and we worried it would disturb people studying nearby.

DR REEVES: And how did you solve that?

TOM: We switched to a smaller vertical design. It produces a little less power, but it's much quieter, which matters more in that location.

DR REEVES: A wise trade-off. What about the electricity you generate - where does it go?

AISHA: Into a battery, so the station still works after dark. We chose a lithium battery because it's lighter and lasts longer than the older lead-acid type.

DR REEVES: Good. And the budget - are you within it?

TOM: Just about. The panel was cheaper than expected, but the battery cost more, so it roughly balanced out.

DR REEVES: That's the real world for you. Finally, how will you present your findings?

AISHA: We thought we'd record how much energy the station produces over a fortnight and show it as a graph, comparing sunny and cloudy days.

DR REEVES: Perfect. A clear graph will be far more convincing than a table of raw numbers. I look forward to seeing it.`,
        questions: [
          {
            id: 'ls-011-s3-q21',
            type: 'mcq',
            prompt: 'What are the students building for the project?',
            options: [
              'A charging station for phones, powered by clean energy',
              'A solar-heated water system for the library',
              'A weather station to record wind and sunshine',
              'A battery store for the whole campus',
            ],
            correctIndex: 0,
            explanation:
              'Aisha says, “We’re designing a small charging station for the courtyard… so students can charge their phones using clean energy.” Option A matches the aim exactly.',
          },
          {
            id: 'ls-011-s3-q22',
            type: 'gap',
            prompt:
              'The station will be built in the courtyard outside the ____________. Write ONE WORD.',
            acceptableAnswers: ['library'],
            explanation:
              'Aisha says it is for “the courtyard outside the library.” The answer is “library”.',
          },
          {
            id: 'ls-011-s3-q23',
            type: 'mcq',
            prompt: 'Why does the project use both solar and wind power?',
            options: [
              'Because the turbine is cheaper than the panel',
              'Because the panel alone is not enough on cloudy or short winter days',
              'Because wind power is banned on its own',
              'Because the battery requires two energy sources',
            ],
            correctIndex: 1,
            explanation:
              'Tom says, “on cloudy or short winter days the panel alone doesn’t generate enough. The turbine fills the gap when there’s wind but little sun.” Option B matches the reason.',
          },
          {
            id: 'ls-011-s3-q24',
            type: 'mcq',
            prompt: 'What was the main problem with the first wind turbine?',
            options: [
              'It was too expensive to build',
              'It was far too noisy',
              'It produced no electricity at all',
              'It was too heavy to mount',
            ],
            correctIndex: 1,
            explanation:
              'Aisha says, “The first one we built was far too noisy, and we worried it would disturb people studying nearby.” Option B matches.',
          },
          {
            id: 'ls-011-s3-q25',
            type: 'gap',
            prompt:
              'To solve the problem, the students switched to a smaller ____________ turbine design. Write ONE WORD.',
            acceptableAnswers: ['vertical'],
            explanation:
              'Tom says, “We switched to a smaller vertical design. It produces a little less power, but it’s much quieter.” The answer is “vertical”.',
          },
          {
            id: 'ls-011-s3-q26',
            type: 'gap',
            prompt:
              'The electricity generated is stored in a ____________ so the station works after dark. Write ONE WORD.',
            acceptableAnswers: ['battery'],
            explanation:
              'Aisha says the electricity goes “Into a battery, so the station still works after dark.” The answer is “battery”.',
          },
          {
            id: 'ls-011-s3-q27',
            type: 'mcq',
            prompt: 'Why did the students choose a lithium battery?',
            options: [
              'Because it is cheaper than a lead-acid battery',
              'Because it is lighter and lasts longer than a lead-acid battery',
              'Because it can be charged only by solar power',
              'Because it is the only type allowed on campus',
            ],
            correctIndex: 1,
            explanation:
              'Aisha says, “We chose a lithium battery because it’s lighter and lasts longer than the older lead-acid type.” Option B matches; cost is not the reason given (and in fact the battery cost more than expected).',
          },
          {
            id: 'ls-011-s3-q28',
            type: 'gap',
            prompt:
              'The project stayed roughly within budget because the cheaper ____________ balanced out the costlier battery. Write ONE WORD.',
            acceptableAnswers: ['panel'],
            explanation:
              'Tom says, “The panel was cheaper than expected, but the battery cost more, so it roughly balanced out.” The cheaper item was the “panel”.',
          },
          {
            id: 'ls-011-s3-q29',
            type: 'gap',
            prompt:
              'They will record the station’s energy output over a ____________. Write ONE WORD.',
            acceptableAnswers: ['fortnight'],
            explanation:
              'Aisha says they will “record how much energy the station produces over a fortnight.” The answer is “fortnight” (i.e. two weeks).',
          },
          {
            id: 'ls-011-s3-q30',
            type: 'mcq',
            prompt: 'How do the students plan to present their findings?',
            options: [
              'As a table of raw numbers',
              'As a graph comparing sunny and cloudy days',
              'As a written report with no figures',
              'As a live demonstration only',
            ],
            correctIndex: 1,
            explanation:
              'Aisha says they will “show it as a graph, comparing sunny and cloudy days”, and Dr Reeves agrees a graph beats “a table of raw numbers.” Option B matches.',
          },
        ],
      },
      {
        id: 'ls-academic-11-s4',
        title: 'Section 4 - Lecture: the history of chocolate',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the history of chocolate, from
        // the cacao tree in Mesoamerica to the modern eating bar. Dense, factual and
        // signposted ("let me start", "by the", "finally"), with the note/sentence-
        // completion + multiple-choice mix typical of Section 4, including one
        // True/False/Not Given item.
        transcript: `Good afternoon. Today I want to follow the remarkable journey of chocolate, from an ancient drink to the bar you can buy in any shop. It's a story that spans continents and several centuries.

Let me start with the plant itself. Chocolate is made from the seeds, or beans, of the cacao tree, which grows naturally in the rainforests of Central and South America. The earliest peoples to use it were the Maya and, later, the Aztecs. Crucially, they did not eat chocolate - they drank it. They roasted and ground the beans and mixed them with water and spices such as chilli to make a bitter, frothy drink. Notice that there was no sugar in it at all.

For these civilisations, cacao was far more than a treat. The beans were so valuable that they were actually used as money - you could buy goods with a handful of them.

Chocolate reached Europe in the sixteenth century, brought back by Spanish explorers. At first it was still drunk, but Europeans made one important change: they added sugar, which transformed the bitter drink into the sweet one we recognise today. For roughly two hundred years, it remained an expensive luxury enjoyed only by the wealthy.

The great change came in the nineteenth century with the Industrial Revolution. New machines could process beans on a large scale and, importantly, separate the cocoa butter from the solids. This made it possible, for the first time, to produce a solid bar of chocolate that you could eat rather than drink.

Finally, a word on later refinements. Milk chocolate, made by adding milk powder, was perfected in Switzerland, and the smooth texture we expect today came from a process called conching. We'll examine how cacao is grown sustainably today in next week's session.`,
        questions: [
          {
            id: 'ls-011-s4-q31',
            type: 'gap',
            prompt:
              'Chocolate is made from the seeds, or beans, of the ____________ tree. Write ONE WORD.',
            acceptableAnswers: ['cacao', 'cocoa'],
            explanation:
              'The speaker says, “Chocolate is made from the seeds, or beans, of the cacao tree.” The answer is “cacao” (the spelling “cocoa” is accepted).',
          },
          {
            id: 'ls-011-s4-q32',
            type: 'mcq',
            prompt: 'How did the Maya and Aztecs consume chocolate?',
            options: [
              'They ate it as a solid bar',
              'They drank it as a bitter, frothy liquid',
              'They baked it into bread',
              'They used it only in religious carvings',
            ],
            correctIndex: 1,
            explanation:
              'The speaker stresses, “they did not eat chocolate - they drank it”, mixing ground beans “with water and spices such as chilli to make a bitter, frothy drink.” Option B matches.',
          },
          {
            id: 'ls-011-s4-q33',
            type: 'gap',
            prompt:
              'To flavour the drink, the early peoples added spices such as ____________. Write ONE WORD.',
            acceptableAnswers: ['chilli', 'chili', 'chillies', 'chile'],
            explanation:
              'The speaker says they mixed the beans “with water and spices such as chilli.” The answer is “chilli” (variant spellings accepted).',
          },
          {
            id: 'ls-011-s4-q34',
            type: 'tfng',
            prompt: 'The speaker says the original Maya and Aztec chocolate drink contained sugar.',
            answer: 'false',
            explanation:
              'The speaker explicitly says, “Notice that there was no sugar in it at all”, and that Europeans only later “added sugar.” The statement contradicts the lecture, so it is False.',
          },
          {
            id: 'ls-011-s4-q35',
            type: 'mcq',
            prompt: 'What does the speaker say the cacao beans were used as?',
            options: [
              'A form of medicine',
              'A form of money',
              'A type of building material',
              'A kind of writing ink',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says, “The beans were so valuable that they were actually used as money - you could buy goods with a handful of them.” Option B matches.',
          },
          {
            id: 'ls-011-s4-q36',
            type: 'mcq',
            prompt: 'What important change did Europeans make to chocolate?',
            options: [
              'They added sugar to make it sweet',
              'They first turned it into a solid bar',
              'They began drinking it cold',
              'They removed the cocoa butter',
            ],
            correctIndex: 0,
            explanation:
              'The speaker says Europeans “added sugar, which transformed the bitter drink into the sweet one we recognise today.” Option A matches; the solid bar and the removal of cocoa butter came later, in the nineteenth century.',
          },
          {
            id: 'ls-011-s4-q37',
            type: 'gap',
            prompt:
              'Chocolate first reached Europe in the ____________ century, brought back by Spanish explorers. Write ONE WORD OR A NUMBER.',
            acceptableAnswers: ['sixteenth', '16th', '16'],
            explanation:
              'The speaker says, “Chocolate reached Europe in the sixteenth century, brought back by Spanish explorers.” The answer is “sixteenth” (16th).',
          },
          {
            id: 'ls-011-s4-q38',
            type: 'gap',
            prompt:
              'New machines made it possible to separate the cocoa ____________ from the solids. Write ONE WORD.',
            acceptableAnswers: ['butter'],
            explanation:
              'The speaker says the machines could “separate the cocoa butter from the solids”, which allowed a solid bar to be made. The answer is “butter”.',
          },
          {
            id: 'ls-011-s4-q39',
            type: 'mcq',
            prompt:
              'According to the lecture, what allowed the first solid eating bar to be produced?',
            options: [
              'The arrival of cacao in Europe',
              'New industrial machines in the nineteenth century',
              'The invention of milk chocolate in Switzerland',
              'The use of beans as money',
            ],
            correctIndex: 1,
            explanation:
              'The speaker says the great change “came in the nineteenth century with the Industrial Revolution”, when new machines made it possible “to produce a solid bar of chocolate.” Option B matches.',
          },
          {
            id: 'ls-011-s4-q40',
            type: 'gap',
            prompt:
              'The smooth texture of modern chocolate comes from a process called ____________. Write ONE WORD.',
            acceptableAnswers: ['conching'],
            explanation:
              'The speaker says, “the smooth texture we expect today came from a process called conching.” The answer is “conching”.',
          },
        ],
      },
    ],
  },
]
