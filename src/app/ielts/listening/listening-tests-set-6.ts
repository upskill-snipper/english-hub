// ─── IELTS Academic Listening - practice test data (Set 6) ─────────────────
// A parallel-authored expansion of the Listening item bank. Each set ships in
// its OWN file to avoid edit collisions; a coordinator concatenates the exports
// (LISTENING_TESTS, LISTENING_SET_2, LISTENING_SET_3, …) downstream.
//
// This set ships ONE original FULL-LENGTH practice test: all four sections
// (~40 questions) that mirror the real IELTS Listening paper, with topics
// deliberately distinct from every other set:
//   • Section 1 - an everyday transactional DIALOGUE (here: registering by phone
//     for a charity fun run), assessed with form / note completion + a
//     multiple-choice item. A surname is spelled and a phone number is dictated,
//     and one detail (the entry fee) depends on a stated choice (the distance).
//   • Section 2 - an everyday MONOLOGUE (here: a welcome talk for visitors to a
//     botanical garden), assessed with sentence completion + multiple choice,
//     carrying signpost language ("first", "next", "finally") the questions track.
//   • Section 3 - an ACADEMIC DISCUSSION (here: two students and a tutor planning
//     a marketing assignment), assessed with multiple choice + completion.
//   • Section 4 - an academic LECTURE / monologue (here: ocean currents),
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

export const LISTENING_SET_6: ListeningTest[] = [
  {
    id: 'ls-academic-6',
    title: 'Practice Test 6 - Charity Run, Botanical Garden, Marketing Assignment & Ocean Currents',
    estimatedMinutes: 30,
    sections: [
      {
        id: 'ls-academic-6-s1',
        title: 'Section 1 - Registering for a charity run',
        // ~275 words. Transactional dialogue (Section 1 style): a caller signing
        // up by phone for a charity fun run. A surname is spelled and a mobile
        // number is dictated; one detail (the entry fee) depends on a stated
        // choice (the distance), mirroring the form/note-completion +
        // multiple-choice mix of a real Section 1.
        transcript: `WOMAN: Good morning, Riverford Charity Run, this is Megan speaking. How can I help you?

MAN: Hi, I'd like to register for this year's run, please.

WOMAN: Lovely, I can do that for you now. Could I start with your full name?

MAN: Yes, it's Oliver Hartley. Hartley is spelled H-A-R-T-L-E-Y.

WOMAN: Thank you, Oliver. And a contact number for you?

MAN: It's oh-seven-nine-double-two, four-oh-six, three-one-eight.

WOMAN: Got it. Now, there are two distances this year. There's the five-kilometre route, which is fairly flat, and the ten-kilometre route, which goes up over the hill by the reservoir.

MAN: I'll do the ten-kilometre one - I've been training for the hills.

WOMAN: Good for you. The entry fee is twelve pounds for the five, and eighteen pounds for the ten, and that includes your race number and a T-shirt.

MAN: That's fine. What size T-shirt do you have?

WOMAN: We've got small, medium and large. Which would you like?

MAN: Medium, please.

WOMAN: Medium it is. The run starts at half past nine, but please arrive by nine so we can check everyone in. We assemble on the green next to the town hall, not at the sports centre as in previous years.

MAN: Right, the green by the town hall. And is there parking nearby?

WOMAN: There is, but it fills up fast, so we really encourage people to come by bicycle if they can. Finally, all the money raised this year goes to the children's hospital.

MAN: Wonderful. Thank you so much for your help.

WOMAN: You're very welcome. See you on the day.`,
        questions: [
          {
            id: 'ls-006-s1-q1',
            type: 'gap',
            prompt:
              'Complete the registration form. Write ONE WORD for the answer.\n\nParticipant surname: ____________',
            acceptableAnswers: ['Hartley', 'hartley'],
            explanation:
              'The caller gives his name as “Oliver Hartley” and spells the surname out: H-A-R-T-L-E-Y. In Section 1, surnames are almost always spelled aloud - write them down letter by letter as you hear them.',
          },
          {
            id: 'ls-006-s1-q2',
            type: 'gap',
            prompt: 'Contact number: ____________. Write the digits exactly as you hear them.',
            acceptableAnswers: ['07922406318', '0792 2406318', '07922 406 318', '079 22 406 318'],
            explanation:
              'The number is dictated as “oh-seven-nine-double-two, four-oh-six, three-one-eight”, which is 07922406318. “Double two” means two 2s, and “oh” means zero - spacing is not penalised, but every digit must be correct.',
          },
          {
            id: 'ls-006-s1-q3',
            type: 'mcq',
            prompt: 'Which route does the man choose, and why?',
            options: [
              'The five-kilometre route, because it is flat',
              'The ten-kilometre route, because he has trained for the hills',
              'The five-kilometre route, because it is cheaper',
              'The ten-kilometre route, because it avoids the reservoir',
            ],
            correctIndex: 1,
            explanation:
              'He says, “I’ll do the ten-kilometre one - I’ve been training for the hills.” The distractors reuse real words from the audio (flat, cheaper, reservoir) but none matches his stated reason. Listen for the reason, not just the keyword.',
          },
          {
            id: 'ls-006-s1-q4',
            type: 'gap',
            prompt: 'Entry fee for the route the man chose: £ ____________. Write A NUMBER.',
            acceptableAnswers: ['18', 'eighteen'],
            explanation:
              'The fee is “twelve pounds for the five, and eighteen pounds for the ten.” Because he selects the ten-kilometre route (Q3), the fee that applies is 18 - Section 1 often makes one detail depend on an earlier choice.',
          },
          {
            id: 'ls-006-s1-q5',
            type: 'gap',
            prompt: 'The entry fee includes a race number and a ____________. Write ONE WORD.',
            acceptableAnswers: ['T-shirt', 'tshirt', 't shirt', 'tee-shirt'],
            explanation:
              'She says the fee “includes your race number and a T-shirt.” The answer is “T-shirt” (variant spellings without the hyphen are accepted).',
          },
          {
            id: 'ls-006-s1-q6',
            type: 'gap',
            prompt: 'T-shirt size requested: ____________. Write ONE WORD.',
            acceptableAnswers: ['medium', 'Medium', 'M'],
            explanation:
              'Offered “small, medium and large”, he replies “Medium, please.” The answer is “medium” - listen for the speaker’s own choice rather than the full list of options.',
          },
          {
            id: 'ls-006-s1-q7',
            type: 'gap',
            prompt:
              'Participants should arrive by ____________ to check in. Write the time you hear.',
            acceptableAnswers: ['9', 'nine', '9.00', '9:00', '9am', '9 am', 'nine o’clock'],
            explanation:
              'She says, “The run starts at half past nine, but please arrive by nine so we can check everyone in.” The arrival time is 9 (9.00) - note that half past nine is the start time, a deliberate distractor.',
          },
          {
            id: 'ls-006-s1-q8',
            type: 'gap',
            prompt: 'Participants assemble on the green next to the ____________. Write TWO WORDS.',
            acceptableAnswers: ['town hall', 'town-hall', 'the town hall'],
            explanation:
              'She says, “We assemble on the green next to the town hall, not at the sports centre as in previous years.” The meeting point is the “town hall” - the sports centre is last year’s location, a near-miss distractor.',
          },
          {
            id: 'ls-006-s1-q9',
            type: 'mcq',
            prompt: 'What does the assistant encourage participants to do about getting there?',
            options: [
              'Use the car park, which is large',
              'Come by bicycle, because parking fills up quickly',
              'Take a special bus from the sports centre',
              'Share a car with other runners',
            ],
            correctIndex: 1,
            explanation:
              'She says parking “fills up fast, so we really encourage people to come by bicycle if they can.” Option B matches; the other travel options are not suggested.',
          },
          {
            id: 'ls-006-s1-q10',
            type: 'gap',
            prompt:
              'This year, all the money raised goes to the children’s ____________. Write ONE WORD.',
            acceptableAnswers: ['hospital'],
            explanation:
              'She says, “all the money raised this year goes to the children’s hospital.” The answer is “hospital”.',
          },
        ],
      },
      {
        id: 'ls-academic-6-s2',
        title: 'Section 2 - Welcome talk at a botanical garden',
        // ~270 words. Informational monologue (Section 2 style): a single speaker
        // welcoming visitors to a botanical garden, explaining the layout and a
        // few rules. Uses sequencing/signpost language ("first", "after that",
        // "finally") that the questions follow in order, with a sentence/note-
        // completion + multiple-choice mix.
        transcript: `Good morning, everyone, and welcome to Wexham Botanical Garden. My name is Claire, and I'm one of the garden guides. Before you wander off on your own, let me give you a quick sense of how the garden is arranged and point out one or two things not to miss.

First, a word about the layout. The garden is divided into themed zones that spread out from the central fountain, so the fountain is a useful landmark if you ever lose your bearings. A free map is available at the entrance, and I'd strongly suggest picking one up, as the paths can be a little confusing.

Let me start with the zone closest to us, the Tropical House. This is the large glasshouse on your left, and it's kept warm and humid all year round. Inside you'll find orchids, palms, and our famous giant water lilies, whose leaves are strong enough to support a small child.

After the Tropical House, follow the gravel path to the Rose Garden. It's at its very best in June, when over two hundred varieties are in bloom, and the scent on a warm afternoon is unforgettable.

One thing that surprises many visitors is our policy on picnics. You're very welcome to bring food, but please eat only in the designated picnic area beside the lake - not on the lawns, as the sprinklers come on without warning.

Finally, do try to catch one of our guided walks. They leave from the shop every hour, and today's theme is medicinal plants - the ones our ancestors used as medicine long before modern science. That's everything from me. Do enjoy your visit, and please ask any of us in green jackets if you need help.`,
        questions: [
          {
            id: 'ls-006-s2-q11',
            type: 'mcq',
            prompt: 'How is the botanical garden arranged?',
            options: [
              'As a single circular path around the outside',
              'As themed zones spreading out from a central fountain',
              'As two halves divided by the lake',
              'As a grid of identical square plots',
            ],
            correctIndex: 1,
            explanation:
              'She says “The garden is divided into themed zones that spread out from the central fountain.” Option B matches; the other layouts are not described.',
          },
          {
            id: 'ls-006-s2-q12',
            type: 'gap',
            prompt:
              'The speaker advises picking up a free ____________ at the entrance. Write ONE WORD.',
            acceptableAnswers: ['map'],
            explanation:
              'She says, “A free map is available at the entrance, and I’d strongly suggest picking one up.” The answer is “map”.',
          },
          {
            id: 'ls-006-s2-q13',
            type: 'gap',
            prompt:
              'The Tropical House is kept warm and ____________ all year round. Write ONE WORD.',
            acceptableAnswers: ['humid'],
            explanation:
              'She says the glasshouse “is kept warm and humid all year round.” The answer is “humid”.',
          },
          {
            id: 'ls-006-s2-q14',
            type: 'mcq',
            prompt: 'What is remarkable about the giant water lilies in the Tropical House?',
            options: [
              'They flower only once every ten years',
              'Their leaves are strong enough to support a small child',
              'They are the oldest plants in the garden',
              'They grow taller than the palms around them',
            ],
            correctIndex: 1,
            explanation:
              'She describes the giant water lilies “whose leaves are strong enough to support a small child.” Option B matches the detail she gives; the others are not mentioned.',
          },
          {
            id: 'ls-006-s2-q15',
            type: 'gap',
            prompt:
              'The Rose Garden is at its best in ____________, when over 200 varieties bloom. Write ONE WORD (a month).',
            acceptableAnswers: ['June', 'june'],
            explanation:
              'She says the Rose Garden “is at its very best in June, when over two hundred varieties are in bloom.” The answer is the month “June”.',
          },
          {
            id: 'ls-006-s2-q16',
            type: 'gap',
            prompt:
              'The Rose Garden has over ____________ varieties of rose in bloom. Write A NUMBER.',
            acceptableAnswers: ['200', 'two hundred'],
            explanation:
              'She says “over two hundred varieties are in bloom.” The answer is 200 - numbers said as words still count, but writing the digits is safest.',
          },
          {
            id: 'ls-006-s2-q17',
            type: 'mcq',
            prompt: 'Where are visitors allowed to eat their own food?',
            options: [
              'Anywhere on the lawns',
              'Only in the picnic area beside the lake',
              'Inside the Tropical House',
              'Only in the café next to the shop',
            ],
            correctIndex: 1,
            explanation:
              'She says, “please eat only in the designated picnic area beside the lake - not on the lawns, as the sprinklers come on without warning.” Option B matches; the lawns are explicitly ruled out.',
          },
          {
            id: 'ls-006-s2-q18',
            type: 'gap',
            prompt:
              'Visitors are told not to eat on the lawns because the ____________ come on without warning. Write ONE WORD.',
            acceptableAnswers: ['sprinklers', 'sprinkler'],
            explanation:
              'She warns against eating on the lawns “as the sprinklers come on without warning.” The answer is “sprinklers”.',
          },
          {
            id: 'ls-006-s2-q19',
            type: 'gap',
            prompt: 'The guided walks leave from the ____________ every hour. Write ONE WORD.',
            acceptableAnswers: ['shop'],
            explanation:
              'She says the guided walks “leave from the shop every hour.” The answer is “shop”.',
          },
          {
            id: 'ls-006-s2-q20',
            type: 'gap',
            prompt: 'Today’s guided walk has the theme of ____________ plants. Write ONE WORD.',
            acceptableAnswers: ['medicinal', 'medical'],
            explanation:
              'She says, “today’s theme is medicinal plants - the ones our ancestors used as medicine.” The answer is “medicinal”.',
          },
        ],
      },
      {
        id: 'ls-academic-6-s3',
        title: 'Section 3 - Tutorial: planning a marketing assignment',
        // ~290 words. Academic discussion (Section 3 style): two students (Ria and
        // Daniel) and a tutor (Dr Okafor) plan a marketing assignment. Speakers
        // debate the choice of product, method and structure, so the questions mix
        // multiple choice (opinions/decisions) with completion (concrete details).
        transcript: `DR OKAFOR: Right, Ria and Daniel, let's plan out your marketing assignment. Have you decided what you're going to analyse?

RIA: We have. We were torn between a fashion brand and a coffee chain, but in the end we chose the coffee chain, because there's far more public information about its campaigns.

DR OKAFOR: A practical choice. Daniel, what's your central question?

DANIEL: We want to find out why the brand appeals so strongly to younger customers, even though it isn't the cheapest option on the market.

DR OKAFOR: Good - a clear focus. And how are you gathering your evidence?

DANIEL: Two ways. We'll analyse the company's social media posts over the last year, and we'll run a short online survey of students on campus.

DR OKAFOR: The survey sounds useful, but a word of warning: keep it short. Students rarely finish long questionnaires, so I'd aim for no more than ten questions.

RIA: That's helpful. We'd planned about twenty, so we'll cut it down.

DR OKAFOR: Wise. Now, what's your early thinking on why it appeals to young people?

RIA: We think it's mainly the brand image rather than the product itself. The cafés are designed as a place to study and meet friends, so people are really paying for the atmosphere.

DR OKAFOR: That's an interesting line. Just be sure to support it with evidence, not just assertion. For the structure, I'd suggest you put your methodology before your findings, and keep the recommendations for the very end. And one practical tip: cite your sources as you write, not at the last minute.

DANIEL: Noted. When would you like the draft?

DR OKAFOR: Let's say two weeks from today. That gives you time to run the survey properly.`,
        questions: [
          {
            id: 'ls-006-s3-q21',
            type: 'mcq',
            prompt: 'Why did the students choose to analyse the coffee chain?',
            options: [
              'Because they both like its products',
              'Because there is far more public information about its campaigns',
              'Because it is the cheapest brand on the market',
              'Because the tutor recommended it',
            ],
            correctIndex: 1,
            explanation:
              'Ria says they were torn between two options “but in the end we chose the coffee chain, because there’s far more public information about its campaigns.” Option B matches; the other reasons are not given.',
          },
          {
            id: 'ls-006-s3-q22',
            type: 'gap',
            prompt:
              'The students want to find out why the brand appeals so strongly to ____________ customers. Write ONE WORD.',
            acceptableAnswers: ['younger', 'young'],
            explanation:
              'Daniel says, “We want to find out why the brand appeals so strongly to younger customers.” The answer is “younger”.',
          },
          {
            id: 'ls-006-s3-q23',
            type: 'gap',
            prompt:
              'For evidence, the students will analyse the company’s ____________ posts over the last year. Write TWO WORDS.',
            acceptableAnswers: ['social media', 'social-media'],
            explanation:
              'Daniel says, “We’ll analyse the company’s social media posts over the last year.” The answer is “social media”.',
          },
          {
            id: 'ls-006-s3-q24',
            type: 'mcq',
            prompt: 'What warning does Dr Okafor give about the survey?',
            options: [
              'It should be carried out online only',
              'It should be kept short, with no more than ten questions',
              'It should be given to staff as well as students',
              'It should be repeated after two weeks',
            ],
            correctIndex: 1,
            explanation:
              'He warns, “keep it short. Students rarely finish long questionnaires, so I’d aim for no more than ten questions.” Option B matches the advice exactly.',
          },
          {
            id: 'ls-006-s3-q25',
            type: 'gap',
            prompt:
              'Dr Okafor advises a survey of no more than ____________ questions. Write A NUMBER.',
            acceptableAnswers: ['10', 'ten'],
            explanation:
              'He says to aim for “no more than ten questions.” The answer is 10 - the students had planned twenty, which is a deliberate distractor.',
          },
          {
            id: 'ls-006-s3-q26',
            type: 'mcq',
            prompt:
              'What is the students’ early thinking on why the brand appeals to young people?',
            options: [
              'It is mainly the low price of the drinks',
              'It is mainly the brand image rather than the product itself',
              'It is mainly the quality of the coffee',
              'It is mainly the convenient locations',
            ],
            correctIndex: 1,
            explanation:
              'Ria says, “We think it’s mainly the brand image rather than the product itself… people are really paying for the atmosphere.” Option B matches their hypothesis.',
          },
          {
            id: 'ls-006-s3-q27',
            type: 'gap',
            prompt:
              'Ria argues that customers are really paying for the ____________ of the cafés. Write ONE WORD.',
            acceptableAnswers: ['atmosphere'],
            explanation:
              'Ria says “people are really paying for the atmosphere.” The answer is “atmosphere”.',
          },
          {
            id: 'ls-006-s3-q28',
            type: 'mcq',
            prompt: 'How does Dr Okafor suggest the students structure their report?',
            options: [
              'Findings first, then methodology, then recommendations',
              'Methodology before findings, with recommendations at the end',
              'Recommendations first, followed by the methodology',
              'Everything combined into a single section',
            ],
            correctIndex: 1,
            explanation:
              'He advises, “put your methodology before your findings, and keep the recommendations for the very end.” Option B matches the order he recommends.',
          },
          {
            id: 'ls-006-s3-q29',
            type: 'gap',
            prompt:
              'Dr Okafor’s practical tip is to cite your ____________ as you write, not at the last minute. Write ONE WORD.',
            acceptableAnswers: ['sources', 'source'],
            explanation:
              'He says, “cite your sources as you write, not at the last minute.” The answer is “sources”.',
          },
          {
            id: 'ls-006-s3-q30',
            type: 'gap',
            prompt:
              'The tutor asks for the draft in ____________ weeks from today. Write A NUMBER.',
            acceptableAnswers: ['2', 'two'],
            explanation:
              'When Daniel asks when the draft is due, Dr Okafor says, “Let’s say two weeks from today.” The answer is 2.',
          },
        ],
      },
      {
        id: 'ls-academic-6-s4',
        title: 'Section 4 - Lecture: ocean currents',
        // ~300 words. Academic lecture / monologue (Section 4 style): a single
        // speaker delivers a structured lecture on ocean currents. Dense, factual,
        // and signposted ("first", "the second", "finally"), with the
        // note/sentence-completion + multiple-choice mix typical of Section 4.
        transcript: `Good afternoon. Today I want to introduce the great currents that move water around our oceans, because, far from being still, the sea is in constant, large-scale motion - and that motion shapes the climate of the entire planet.

Let me begin with a useful distinction. Oceanographers divide currents into two broad types. The first are surface currents, which affect roughly the top few hundred metres of water and are driven mainly by the wind. The second are deep currents, which move far below the surface and are driven instead by differences in density.

So what controls that density? Two things: temperature and salt. Cold water is denser than warm water, and salty water is denser than fresh. Where the sea is both cold and salty - for example, near the poles - the water becomes heavy and sinks, and that sinking is the engine that drives the deep circulation.

Together, these surface and deep flows form a single connected system that scientists call the global conveyor belt. A parcel of water can take around a thousand years to complete one full loop of this belt - a timescale that surprises most people.

Why does any of this matter to us? Above all, because currents redistribute heat. Warm surface currents carry heat away from the equator towards the poles, and this is why north-western Europe, for instance, is far milder than other places at the same latitude.

Finally, a note of concern. As polar ice melts, it adds fresh water to the sea, and that makes the surface water less salty and therefore less dense. Some scientists worry that, if this weakens the sinking near the poles, the whole conveyor belt could slow down, with serious consequences for regional climates. We'll examine that evidence next week.`,
        questions: [
          {
            id: 'ls-006-s4-q31',
            type: 'mcq',
            prompt: 'What is the speaker’s main point at the start of the lecture?',
            options: [
              'The ocean is mostly still except near the coast',
              'The ocean is in constant, large-scale motion that shapes the planet’s climate',
              'Ocean currents have only recently been discovered',
              'Most ocean movement is caused by tides',
            ],
            correctIndex: 1,
            explanation:
              'She opens by saying that “far from being still, the sea is in constant, large-scale motion - and that motion shapes the climate of the entire planet.” Option B captures this framing; the others are not claimed.',
          },
          {
            id: 'ls-006-s4-q32',
            type: 'gap',
            prompt: 'Surface currents are driven mainly by the ____________. Write ONE WORD.',
            acceptableAnswers: ['wind'],
            explanation:
              'She says surface currents “are driven mainly by the wind.” The answer is “wind” - deep currents, by contrast, are driven by density.',
          },
          {
            id: 'ls-006-s4-q33',
            type: 'mcq',
            prompt: 'What drives the deep currents, according to the lecture?',
            options: [
              'The wind blowing across the surface',
              'Differences in the density of the water',
              'The gravitational pull of the moon',
              'Underwater volcanic activity',
            ],
            correctIndex: 1,
            explanation:
              'She says deep currents “move far below the surface and are driven instead by differences in density.” Option B matches; the wind drives surface currents, a deliberate distractor.',
          },
          {
            id: 'ls-006-s4-q34',
            type: 'gap',
            prompt:
              'The density of seawater is controlled by temperature and ____________. Write ONE WORD.',
            acceptableAnswers: ['salt', 'salinity'],
            explanation:
              'She says density depends on “two things: temperature and salt.” The answer is “salt” (salinity accepted as a synonym).',
          },
          {
            id: 'ls-006-s4-q35',
            type: 'tfng',
            prompt: 'The speaker states that cold water is denser than warm water.',
            answer: 'true',
            explanation:
              'She states directly, “Cold water is denser than warm water, and salty water is denser than fresh.” The statement matches the lecture, so it is True.',
          },
          {
            id: 'ls-006-s4-q36',
            type: 'gap',
            prompt:
              'Where the sea is both cold and salty, the heavy water ____________, driving the deep circulation. Write ONE WORD.',
            acceptableAnswers: ['sinks', 'sink'],
            explanation:
              'She says that near the poles “the water becomes heavy and sinks, and that sinking is the engine that drives the deep circulation.” The answer is “sinks”.',
          },
          {
            id: 'ls-006-s4-q37',
            type: 'gap',
            prompt:
              'Scientists call the connected system of surface and deep flows the global ____________ belt. Write ONE WORD.',
            acceptableAnswers: ['conveyor', 'conveyer'],
            explanation:
              'She says these flows “form a single connected system that scientists call the global conveyor belt.” The answer is “conveyor” (the variant spelling “conveyer” is accepted).',
          },
          {
            id: 'ls-006-s4-q38',
            type: 'gap',
            prompt:
              'A parcel of water can take around ____________ years to complete one full loop of the belt. Write A NUMBER.',
            acceptableAnswers: ['1000', 'a thousand', 'one thousand', 'thousand'],
            explanation:
              'She says a parcel of water “can take around a thousand years to complete one full loop.” The answer is 1000.',
          },
          {
            id: 'ls-006-s4-q39',
            type: 'mcq',
            prompt: 'Why is north-western Europe milder than other places at the same latitude?',
            options: [
              'Because deep currents cool the surrounding air',
              'Because warm surface currents carry heat away from the equator towards it',
              'Because it receives more direct sunlight than other regions',
              'Because the conveyor belt has already stopped there',
            ],
            correctIndex: 1,
            explanation:
              'She explains, “Warm surface currents carry heat away from the equator towards the poles, and this is why north-western Europe… is far milder than other places at the same latitude.” Option B matches the mechanism described.',
          },
          {
            id: 'ls-006-s4-q40',
            type: 'gap',
            prompt:
              'As polar ice melts, it adds fresh water that makes surface water less salty and therefore less ____________. Write ONE WORD.',
            acceptableAnswers: ['dense'],
            explanation:
              'She says melting ice “makes the surface water less salty and therefore less dense.” The answer is “dense” - the concern is that this could weaken the sinking that drives the conveyor belt.',
          },
        ],
      },
    ],
  },
]
