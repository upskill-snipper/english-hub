// ─── IELTS Academic Listening - practice test data (Set 10) ────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: a phone call to
//     join a community choir), assessed with form / note completion + a
//     multiple-choice item. A surname is spelled and a phone number is
//     dictated, and one detail (the membership fee) depends on a stated choice.
//   • Section 2 - an everyday MONOLOGUE (here: a guided tour of a historic
//     house), assessed with sentence completion + multiple choice, carrying
//     signpost language ("first", "next", "finally") that the questions track.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor
//     planning a sociology survey project), assessed with multiple choice +
//     completion.
//   • Section 4 - an academic LECTURE / monologue (here: the water supply of
//     ancient Rome and its aqueducts), assessed with note/sentence completion
//     + multiple choice, including one True/False/Not Given item.
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

export const LISTENING_SET_10: ListeningTest[] = [
  {
    id: 'ls-academic-10',
    title:
      'Practice Test 10 - Joining a Community Choir, A Historic House Tour, A Sociology Survey Project & The Water Supply of Ancient Rome',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-10-s1',
        title: 'Section 1 - Joining a community choir',
        // ~260 words. Transactional dialogue (Section 1 style): a caller enquiring
        // about joining a local community choir over the phone. A surname is spelled
        // and a mobile number is dictated; one detail (the annual membership fee)
        // depends on a stated choice (whether the caller joins as a full member or a
        // student member), mirroring the form/note-completion + multiple-choice mix
        // of a real Section 1.
        transcript: `WOMAN: Good evening, Bridgeford Community Choir, this is Marion speaking. How can I help?

MAN: Hello, I saw your poster and I'd love to join the choir. Could you tell me how it works?

WOMAN: Of course - we'd be delighted to have you. Let me take a few details first. Could I have your name?

MAN: Yes, it's Oliver Pennington. Pennington is spelled P-E-N-N-I-N-G-T-O-N.

WOMAN: Thank you, Oliver. And a phone number we can reach you on?

MAN: It's oh-seven-nine-double-four, three-one-two, eight-six-five.

WOMAN: Lovely. Now, do you know which voice part you sing? We have sopranos, altos, tenors and basses.

MAN: I think I'm a tenor - I sing fairly high for a man.

WOMAN: Wonderful, we're short of tenors at the moment. Now, about membership. Full membership is forty pounds a year, but if you're in full-time education it's only fifteen.

MAN: I'm a university student, so I'll take the student rate, please.

WOMAN: Of course. Rehearsals are every Wednesday evening, from seven until nine, in the hall behind the library. The first one is free, so you can try before you decide.

MAN: That sounds ideal. Do I need to read music?

WOMAN: Not at all - we learn most pieces by ear. But do bring a folder for the song sheets, and a bottle of water, as the hall can get quite warm.

MAN: Brilliant. I'll see you on Wednesday, then.

WOMAN: We look forward to it. Goodbye for now.`,
        questions: [
          {
            id: 'ls-010-s1-q1',
            type: 'gap',
            prompt:
              'Complete the membership form. Write ONE WORD for the answer.\n\nApplicant surname: ____________',
            acceptableAnswers: ['Pennington', 'pennington'],
            explanation:
              'The caller gives his name as “Oliver Pennington” and spells the surname out: P-E-N-N-I-N-G-T-O-N. In Section 1, surnames are almost always spelled aloud - write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-010-s1-q2',
            type: 'gap',
            prompt: 'Contact number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07944312865', '0794 4312865', '07944 312 865', '079 44 312 865'],
            explanation:
              'The number is dictated as “oh-seven-nine-double-four, three-one-two, eight-six-five”, which is 07944312865. “Double four” means two 4s and “oh” means zero - spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-010-s1-q3',
            type: 'gap',
            prompt: 'The man thinks he sings the ____________ voice part. Write ONE WORD.',
            acceptableAnswers: ['tenor'],
            explanation:
              'He says, “I think I’m a tenor - I sing fairly high for a man,” and Marion confirms they are short of tenors. The answer is “tenor”.',
          },
          {
            id: 'ls-010-s1-q4',
            type: 'mcq',
            prompt: 'How much will the man pay for his membership?',
            options: [
              'Forty pounds, as a full member',
              'Fifteen pounds, at the student rate',
              'Forty pounds, because tenors are needed',
              'Fifteen pounds, because the first rehearsal is free',
            ],
            correctIndex: 1,
            explanation:
              'Full membership is “forty pounds a year, but if you’re in full-time education it’s only fifteen.” Because he says, “I’m a university student, so I’ll take the student rate,” he pays £15. The distractors reuse the real figures but give the wrong reason.',
          },
          {
            id: 'ls-010-s1-q5',
            type: 'gap',
            prompt:
              'Rehearsals take place every ____________ evening. Write ONE WORD (a day of the week).',
            acceptableAnswers: ['Wednesday', 'wednesday', 'Wednesdays', 'wednesdays'],
            explanation:
              'She says, “Rehearsals are every Wednesday evening, from seven until nine.” The answer is “Wednesday”.',
          },
          {
            id: 'ls-010-s1-q6',
            type: 'gap',
            prompt: 'Rehearsals run from seven until ____________ in the evening. Write A NUMBER.',
            acceptableAnswers: ['9', 'nine', '9pm', '9 pm'],
            explanation:
              'She says rehearsals run “from seven until nine.” The finishing time is nine (9 pm) - listen for “until”, which signals an end point.',
          },
          {
            id: 'ls-010-s1-q7',
            type: 'gap',
            prompt: 'Rehearsals are held in the hall behind the ____________. Write ONE WORD.',
            acceptableAnswers: ['library'],
            explanation:
              'She says rehearsals are “in the hall behind the library.” The answer is “library”.',
          },
          {
            id: 'ls-010-s1-q8',
            type: 'mcq',
            prompt: 'What does Marion say about reading music?',
            options: [
              'Members must be able to read music before joining',
              'The choir learns most pieces by ear',
              'Music-reading lessons are offered each week',
              'Only the tenors need to read music',
            ],
            correctIndex: 1,
            explanation:
              'When he asks, “Do I need to read music?”, she replies, “Not at all - we learn most pieces by ear.” Option B matches; the others are not stated.',
          },
          {
            id: 'ls-010-s1-q9',
            type: 'gap',
            prompt:
              'The man is advised to bring a ____________ for the song sheets. Write ONE WORD.',
            acceptableAnswers: ['folder'],
            explanation:
              'She says, “do bring a folder for the song sheets, and a bottle of water.” The answer is “folder”.',
          },
          {
            id: 'ls-010-s1-q10',
            type: 'gap',
            prompt:
              'The man should also bring a bottle of water because the hall can get quite ____________. Write ONE WORD.',
            acceptableAnswers: ['warm', 'hot'],
            explanation:
              'She advises bringing water “as the hall can get quite warm.” The answer is “warm” (hot accepted as a close synonym).',
          },
        ],
      },
      {
        id: 'ls-academic-10-s2',
        title: 'Section 2 - A guided tour of a historic house',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // guiding visitors around a historic country house and explaining the
        // route, rules and highlights. Uses sequencing/signpost language ("first",
        // "next", "finally") that the questions follow in order, with a
        // sentence/note-completion + multiple-choice mix.
        transcript: `Good morning, everyone, and a warm welcome to Hartwood House. My name is Diane, and I'll be guiding you through the building this morning. Before we go in, just a couple of rules, and then a little about what you'll see.

First, a word about photography. You're very welcome to take photos, but please switch off your flash - the bright light can fade the old paintings and fabrics over time. And I must ask you not to touch any of the furniture, however tempting it looks.

Now, let me explain the route. We'll begin in the Great Hall, which is the oldest part of the house, dating from 1480. Notice the magnificent oak ceiling - every beam was cut by hand. From there, we'll move into the library, which holds over eight thouson books; sorry, over eight thousand books, some of them five hundred years old.

Next, we'll go upstairs to the Long Gallery. This was originally built so that the family could take exercise indoors when the weather was poor. Today it displays a remarkable collection of family portraits.

After the gallery, we'll step outside into the walled garden. The head gardener will be there to answer your questions, and I'd point out that the roses in June are particularly famous - people travel a long way to see them.

Finally, the visit ends at the tea room, which is housed in the old stables. I can thoroughly recommend the fruit cake, which is baked here to a recipe over a century old. The shop next door sells plants grown in our own greenhouses. Right, if you'll all follow me, we'll make a start.`,
        questions: [
          {
            id: 'ls-010-s2-q11',
            type: 'mcq',
            prompt: 'What does the guide ask visitors to do when taking photographs?',
            options: [
              'Avoid photographing the paintings entirely',
              'Switch off their flash',
              'Take photographs only in the garden',
              'Ask permission before each photo',
            ],
            correctIndex: 1,
            explanation:
              'She says, “please switch off your flash - the bright light can fade the old paintings and fabrics over time.” Option B matches; photography itself is allowed.',
          },
          {
            id: 'ls-010-s2-q12',
            type: 'gap',
            prompt:
              'The tour begins in the Great Hall, the oldest part of the house, dating from the year ____________. Write A NUMBER.',
            acceptableAnswers: ['1480'],
            explanation:
              'She says, “We’ll begin in the Great Hall, which is the oldest part of the house, dating from 1480.” The answer is 1480.',
          },
          {
            id: 'ls-010-s2-q13',
            type: 'gap',
            prompt:
              'In the Great Hall, visitors can see a magnificent ____________ ceiling. Write ONE WORD.',
            acceptableAnswers: ['oak'],
            explanation:
              'She says, “Notice the magnificent oak ceiling - every beam was cut by hand.” The answer is “oak”.',
          },
          {
            id: 'ls-010-s2-q14',
            type: 'gap',
            prompt:
              'The library holds over ____________ books, some of them five hundred years old. Write A NUMBER.',
            acceptableAnswers: ['8000', 'eight thousand', '8,000'],
            explanation:
              'She corrects herself and says the library “holds over eight thousand books, some of them five hundred years old.” The answer is 8,000.',
          },
          {
            id: 'ls-010-s2-q15',
            type: 'mcq',
            prompt: 'Why was the Long Gallery originally built?',
            options: [
              'To display the family portraits',
              'So the family could exercise indoors in poor weather',
              'To store the family’s collection of books',
              'To hold large parties and dances',
            ],
            correctIndex: 1,
            explanation:
              'She says it “was originally built so that the family could take exercise indoors when the weather was poor.” Displaying portraits is its use today, not its original purpose - so Option B is correct.',
          },
          {
            id: 'ls-010-s2-q16',
            type: 'gap',
            prompt:
              'The Long Gallery today displays a collection of family ____________. Write ONE WORD.',
            acceptableAnswers: ['portraits'],
            explanation:
              'She says the gallery “displays a remarkable collection of family portraits.” The answer is “portraits”.',
          },
          {
            id: 'ls-010-s2-q17',
            type: 'mcq',
            prompt: 'What does the guide say people travel a long way to see in the walled garden?',
            options: [
              'The greenhouses',
              'The roses in June',
              'The head gardener',
              'The old stables',
            ],
            correctIndex: 1,
            explanation:
              'She says, “the roses in June are particularly famous - people travel a long way to see them.” Option B matches.',
          },
          {
            id: 'ls-010-s2-q18',
            type: 'gap',
            prompt: 'The tea room is housed in the old ____________. Write ONE WORD.',
            acceptableAnswers: ['stables', 'stable'],
            explanation:
              'She says, “the visit ends at the tea room, which is housed in the old stables.” The answer is “stables”.',
          },
          {
            id: 'ls-010-s2-q19',
            type: 'gap',
            prompt:
              'The guide particularly recommends the ____________ cake in the tea room. Write ONE WORD.',
            acceptableAnswers: ['fruit'],
            explanation:
              'She says, “I can thoroughly recommend the fruit cake, which is baked here to a recipe over a century old.” The answer is “fruit”.',
          },
          {
            id: 'ls-010-s2-q20',
            type: 'mcq',
            prompt: 'What does the shop next to the tea room sell?',
            options: [
              'Copies of the family portraits',
              'Plants grown in the house’s own greenhouses',
              'Books from the library collection',
              'Cakes baked to the old recipe',
            ],
            correctIndex: 1,
            explanation:
              'She says, “The shop next door sells plants grown in our own greenhouses.” Option B matches.',
          },
        ],
      },
      {
        id: 'ls-academic-10-s3',
        title: 'Section 3 - Tutorial: planning a sociology survey project',
        // ~290 words. Academic discussion (Section 3 style): two students (Hana and
        // Tom) and a tutor (Dr Fielding) plan a sociology survey on commuting
        // habits. Speakers debate method, sampling and analysis, so the questions
        // mix multiple choice (decisions/opinions) with completion (concrete
        // details).
        transcript: `DR FIELDING: Right, Hana and Tom, let's talk through your sociology survey. What topic have you settled on?

HANA: We want to look at how people in the town choose to travel to work - whether they drive, cycle, walk or take the bus, and why.

DR FIELDING: A good, manageable topic. How are you planning to collect your data?

TOM: We thought a questionnaire would be best. We can reach far more people that way than with interviews.

DR FIELDING: True, though remember a questionnaire gives you breadth rather than depth. How many responses are you aiming for?

HANA: We'd like at least two hundred completed questionnaires.

DR FIELDING: That's ambitious but achievable. Now, the most important decision is your sample. Where will you hand the questionnaire out?

TOM: We were going to stand outside the railway station in the morning.

DR FIELDING: Be careful there - if you only ask people at the station, you'll mostly catch train users, and your sample will be biased. You need a mix of locations.

HANA: Good point. We'll also try the supermarket car park and the town centre.

DR FIELDING: Much better. One more thing - keep the questionnaire short. People won't stop for long, so aim for no more than ten questions.

TOM: We'll cut it down. And for the analysis, we were thinking of showing the results as pie charts.

DR FIELDING: Pie charts work well for proportions. But do include the actual numbers too, not just percentages, so your reader can judge the sample size. My final advice: run a small pilot first - test it on ten people to spot any confusing questions before you start properly.

HANA: That makes sense. We'll pilot it next week.`,
        questions: [
          {
            id: 'ls-010-s3-q21',
            type: 'mcq',
            prompt: 'What is the topic of the students’ survey?',
            options: [
              'How people in the town choose to travel to work',
              'How much people spend on public transport',
              'How far people live from their workplace',
              'How often people change their mode of travel',
            ],
            correctIndex: 0,
            explanation:
              'Hana says, “We want to look at how people in the town choose to travel to work - whether they drive, cycle, walk or take the bus, and why.” Option A matches the topic exactly.',
          },
          {
            id: 'ls-010-s3-q22',
            type: 'mcq',
            prompt: 'Why do the students prefer a questionnaire to interviews?',
            options: [
              'It gives them more detailed answers',
              'It lets them reach far more people',
              'It is easier to analyse on a computer',
              'It does not require the tutor’s approval',
            ],
            correctIndex: 1,
            explanation:
              'Tom says, “We thought a questionnaire would be best. We can reach far more people that way than with interviews.” Option B matches; the tutor notes it gives breadth rather than depth.',
          },
          {
            id: 'ls-010-s3-q23',
            type: 'gap',
            prompt:
              'The students are aiming for at least ____________ completed questionnaires. Write A NUMBER.',
            acceptableAnswers: ['200', 'two hundred'],
            explanation:
              'Hana says, “We’d like at least two hundred completed questionnaires.” The answer is 200.',
          },
          {
            id: 'ls-010-s3-q24',
            type: 'gap',
            prompt:
              'Dr Fielding warns that a questionnaire gives breadth rather than ____________. Write ONE WORD.',
            acceptableAnswers: ['depth'],
            explanation:
              'He says, “remember a questionnaire gives you breadth rather than depth.” The answer is “depth”.',
          },
          {
            id: 'ls-010-s3-q25',
            type: 'mcq',
            prompt:
              'What problem does the tutor identify with handing out the questionnaire only at the station?',
            options: [
              'It would take too long in the morning',
              'The sample would be biased towards train users',
              'It would be against the station’s rules',
              'Too few people pass through the station',
            ],
            correctIndex: 1,
            explanation:
              'He warns, “if you only ask people at the station, you’ll mostly catch train users, and your sample will be biased.” Option B matches.',
          },
          {
            id: 'ls-010-s3-q26',
            type: 'gap',
            prompt:
              'As well as the station, the students will hand out the questionnaire at the supermarket car park and the town ____________. Write ONE WORD.',
            acceptableAnswers: ['centre', 'center'],
            explanation:
              'Hana says, “We’ll also try the supermarket car park and the town centre.” The answer is “centre” (the American spelling “center” is also accepted).',
          },
          {
            id: 'ls-010-s3-q27',
            type: 'gap',
            prompt:
              'The tutor advises that the questionnaire should have no more than ____________ questions. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'He says, “keep the questionnaire short… aim for no more than ten questions.” The answer is 10.',
          },
          {
            id: 'ls-010-s3-q28',
            type: 'mcq',
            prompt: 'How do the students plan to present their results?',
            options: [
              'As a written report only',
              'As pie charts',
              'As a single bar chart',
              'As a table of interview quotes',
            ],
            correctIndex: 1,
            explanation:
              'Tom says, “for the analysis, we were thinking of showing the results as pie charts,” and the tutor agrees they work well for proportions. Option B matches.',
          },
          {
            id: 'ls-010-s3-q29',
            type: 'gap',
            prompt:
              'The tutor advises the students to include the actual numbers as well as ____________. Write ONE WORD.',
            acceptableAnswers: ['percentages', 'percentage'],
            explanation:
              'He says, “do include the actual numbers too, not just percentages, so your reader can judge the sample size.” The answer is “percentages”.',
          },
          {
            id: 'ls-010-s3-q30',
            type: 'mcq',
            prompt: 'What is the tutor’s final piece of advice?',
            options: [
              'To increase the number of questions',
              'To run a small pilot of the questionnaire first',
              'To collect the data over a single morning',
              'To interview people instead of using a questionnaire',
            ],
            correctIndex: 1,
            explanation:
              'He says, “run a small pilot first - test it on ten people to spot any confusing questions before you start properly.” Option B matches.',
          },
        ],
      },
      {
        id: 'ls-academic-10-s4',
        title: 'Section 4 - Lecture: the water supply of ancient Rome',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on the water supply of ancient Rome
        // and its aqueducts. Dense, factual and signposted ("let me begin", "by the
        // time", "finally"), with the note/sentence-completion + multiple-choice mix
        // typical of Section 4, including one True/False/Not Given item.
        transcript: `Good afternoon. Today we'll examine one of the great engineering achievements of the ancient world - the system that brought fresh water to the city of Rome. At its height, Rome was supplied by eleven separate aqueducts, and understanding how they worked tells us a great deal about Roman engineering.

Let me begin with the source. Most of Rome's water did not come from the River Tiber, which ran through the city but was too dirty to drink. Instead, engineers tapped clean springs and lakes in the hills many miles away, and then carried the water back to the city.

Now, the crucial point about an aqueduct is how it moves the water. There were no pumps. The entire system relied on gravity, with each channel sloping very gently downhill all the way from the source to the city. The slope had to be calculated with remarkable precision: too steep, and the rushing water would damage the channel; too shallow, and the water would simply sit still and stagnate.

You might picture an aqueduct as a row of tall stone arches striding across a valley, and indeed those arches are the most famous image. But in fact most of the channel ran underground, which protected the water from the sun and from enemies in time of war.

Once the water reached Rome, it flowed into large distribution tanks, from which lead pipes carried it to public fountains, to the baths, and to a small number of wealthy private homes. Ordinary citizens collected their water from the street fountains, which ran continuously day and night.

Finally, a word on maintenance. A team of workers was permanently employed to inspect the channels and clear away deposits of lime that built up inside. We'll look at those deposits, and what they tell us, next week.`,
        questions: [
          {
            id: 'ls-010-s4-q31',
            type: 'gap',
            prompt:
              'At its height, the city of Rome was supplied by ____________ separate aqueducts. Write A NUMBER.',
            acceptableAnswers: ['11', 'eleven'],
            explanation:
              'The speaker says, “At its height, Rome was supplied by eleven separate aqueducts.” The answer is 11.',
          },
          {
            id: 'ls-010-s4-q32',
            type: 'mcq',
            prompt: 'Why did Rome’s drinking water not come from the River Tiber?',
            options: [
              'The river was too far from the city',
              'The river was too dirty to drink',
              'The river often ran dry in summer',
              'The river belonged to a neighbouring state',
            ],
            correctIndex: 1,
            explanation:
              'He says the Tiber “ran through the city but was too dirty to drink,” so engineers tapped clean springs and lakes instead. Option B matches.',
          },
          {
            id: 'ls-010-s4-q33',
            type: 'gap',
            prompt:
              'Instead of the river, engineers tapped clean ____________ and lakes in the hills. Write ONE WORD.',
            acceptableAnswers: ['springs', 'spring'],
            explanation:
              'He says engineers “tapped clean springs and lakes in the hills many miles away.” The answer is “springs”.',
          },
          {
            id: 'ls-010-s4-q34',
            type: 'mcq',
            prompt: 'How did the aqueduct system move the water to Rome?',
            options: [
              'By using mechanical pumps',
              'By relying on gravity and a gentle downhill slope',
              'By pressurising the water in sealed pipes',
              'By using waterwheels along the route',
            ],
            correctIndex: 1,
            explanation:
              'He says, “There were no pumps. The entire system relied on gravity, with each channel sloping very gently downhill.” Option B matches.',
          },
          {
            id: 'ls-010-s4-q35',
            type: 'mcq',
            prompt: 'What problem would arise if the channel’s slope were too shallow?',
            options: [
              'The water would damage the channel',
              'The water would sit still and stagnate',
              'The water would evaporate in the sun',
              'The water would freeze in winter',
            ],
            correctIndex: 1,
            explanation:
              'He explains, “too steep, and the rushing water would damage the channel; too shallow, and the water would simply sit still and stagnate.” A too-shallow slope causes stagnation, so Option B is correct.',
          },
          {
            id: 'ls-010-s4-q36',
            type: 'tfng',
            prompt:
              'The speaker says that most of an aqueduct’s channel actually ran underground rather than on stone arches.',
            answer: 'true',
            explanation:
              'He says the arches are the famous image, “But in fact most of the channel ran underground, which protected the water from the sun and from enemies in time of war.” The statement matches, so it is True.',
          },
          {
            id: 'ls-010-s4-q37',
            type: 'gap',
            prompt:
              'Once in Rome, the water flowed into large distribution ____________. Write ONE WORD.',
            acceptableAnswers: ['tanks', 'tank'],
            explanation:
              'He says, “the water reached Rome, it flowed into large distribution tanks.” The answer is “tanks”.',
          },
          {
            id: 'ls-010-s4-q38',
            type: 'gap',
            prompt:
              'From the distribution tanks, ____________ pipes carried the water to fountains, baths and some private homes. Write ONE WORD (a metal).',
            acceptableAnswers: ['lead'],
            explanation:
              'He says, “from which lead pipes carried it to public fountains, to the baths, and to a small number of wealthy private homes.” The answer is “lead”.',
          },
          {
            id: 'ls-010-s4-q39',
            type: 'mcq',
            prompt: 'Where did ordinary citizens get their water?',
            options: [
              'From private taps inside their homes',
              'From the street fountains, which ran continuously',
              'Directly from the River Tiber',
              'From the public baths only',
            ],
            correctIndex: 1,
            explanation:
              'He says, “Ordinary citizens collected their water from the street fountains, which ran continuously day and night.” Option B matches; private homes were only for the wealthy.',
          },
          {
            id: 'ls-010-s4-q40',
            type: 'gap',
            prompt:
              'Maintenance workers were employed permanently to clear away deposits of ____________ that built up inside the channels. Write ONE WORD.',
            acceptableAnswers: ['lime'],
            explanation:
              'He says workers were employed “to inspect the channels and clear away deposits of lime that built up inside.” The answer is “lime”.',
          },
        ],
      },
    ],
  },
]
