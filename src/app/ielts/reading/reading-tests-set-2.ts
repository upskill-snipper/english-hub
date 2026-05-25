// ─── IELTS Academic Reading — practice item bank (Set 2) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track. Topic domain: natural sciences / environment.
//
// This set adds ONE complete, carefully-checked test (2 passages, 14 questions)
// authored in parallel with the Wave 1 bank; a coordinator merges the sets.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_2: ReadingTest[] = [
  {
    id: 'rd-acad-s2-001',
    title: 'Academic Reading — Practice Test 3 (Natural Sciences)',
    track: 'academic',
    estimatedMinutes: 20,
    passages: [
      {
        id: 'rd-acad-s2-001-p1',
        title: 'The Spreading Dead Zones of the Sea',
        body: `Along certain stretches of coastline, the sea each summer falls strangely silent. Fish desert the area, crabs crawl onto the shore as if fleeing, and the seabed is left littered with the shells of creatures that could not escape. Oceanographers call these regions dead zones, and although the name suggests poisoned water, the cause is in fact an absence rather than a presence: the water has been stripped of nearly all its dissolved oxygen, and almost nothing that breathes can survive there.

The process that creates a dead zone begins, surprisingly, with abundance. Rivers carry fertiliser washed from farmland far inland, and this run-off is rich in nitrogen and phosphorus, the very nutrients that crops are given to make them grow. When these nutrients reach the sea they have the same effect on microscopic plant life, triggering an explosive bloom of algae near the surface. For a few weeks the water turns green and productive, and to a casual observer the coast looks healthier than ever.

The trouble comes later. Algae are short-lived, and when the bloom dies the dead cells sink towards the seabed, where they are consumed by bacteria. Those bacteria multiply rapidly and, in breaking down the falling material, they draw oxygen from the surrounding water. In a shallow, well-mixed sea the supply would be replenished from above, but where warm surface water sits like a lid over colder, denser water below, the two layers do not mix. The deep water, sealed off from the air, is steadily emptied of oxygen until it can no longer support animal life.

Encouragingly, dead zones are not necessarily permanent. Because they are driven by the flow of nutrients rather than by a lasting poison, they can shrink quickly once that flow is reduced. The clearest demonstration came not from policy but from politics: when economic collapse cut the use of fertiliser across a large region for several years, the dead zone fed by its rivers contracted dramatically, only to expand again once farming intensified. The lesson, scientists argue, is that the remedy lies upstream, in the fields, long before the water ever reaches the sea.`,
        questions: [
          {
            id: 'rd-acad-s2-001-p1-q1',
            type: 'tfng',
            prompt:
              'The term "dead zone" refers to seawater that has been contaminated with a toxic substance.',
            answer: 'false',
            explanation:
              'The first paragraph states that "although the name suggests poisoned water, the cause is in fact an absence rather than a presence: the water has been stripped of nearly all its dissolved oxygen." The statement says the water is contaminated with a toxic substance, which contradicts the passage, so it is False.',
          },
          {
            id: 'rd-acad-s2-001-p1-q2',
            type: 'tfng',
            prompt:
              'The nitrogen and phosphorus that reach the sea come mainly from fertiliser used on farmland.',
            answer: 'true',
            explanation:
              'The second paragraph says rivers "carry fertiliser washed from farmland far inland, and this run-off is rich in nitrogen and phosphorus." This supports the statement, so it is True.',
          },
          {
            id: 'rd-acad-s2-001-p1-q3',
            type: 'mcq',
            prompt: 'What is the immediate effect when farm nutrients first reach the sea?',
            options: [
              'The water loses its oxygen within a few hours.',
              'A rapid bloom of microscopic algae forms near the surface.',
              'Fish are immediately poisoned and die.',
              'Cold deep water rises to mix with the surface.',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph states the nutrients trigger "an explosive bloom of algae near the surface," after which "the water turns green and productive." Option B matches; the oxygen loss comes later, not immediately.',
          },
          {
            id: 'rd-acad-s2-001-p1-q4',
            type: 'mcq',
            prompt:
              'According to the passage, what actually removes the oxygen from the deep water?',
            options: [
              'The living algae as they photosynthesise',
              'The fertiliser chemicals reacting with the water',
              'Bacteria consuming the dead algae as it sinks',
              'The warm surface layer absorbing it from below',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph explains that when the bloom dies, the cells sink and "are consumed by bacteria," which "in breaking down the falling material... draw oxygen from the surrounding water." Option C is correct.',
          },
          {
            id: 'rd-acad-s2-001-p1-q5',
            type: 'tfng',
            prompt:
              'Dead zones occur most severely where warm surface water mixes freely with the colder water beneath it.',
            answer: 'false',
            explanation:
              'The third paragraph says that in a "well-mixed sea the supply would be replenished," but a dead zone forms "where warm surface water sits like a lid over colder, denser water below" and "the two layers do not mix." Free mixing prevents the problem, so the statement is False.',
          },
          {
            id: 'rd-acad-s2-001-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A dead zone forms when the deep water is sealed off from the air and steadily emptied of _______ until animals can no longer survive.',
            acceptableAnswers: ['oxygen'],
            explanation:
              'The third paragraph states the deep water "is steadily emptied of oxygen until it can no longer support animal life." The missing word is "oxygen".',
          },
          {
            id: 'rd-acad-s2-001-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Scientists argue that the true remedy for dead zones lies _______, in the farm fields, before the water reaches the sea.',
            acceptableAnswers: ['upstream'],
            explanation:
              'The final paragraph concludes that "the remedy lies upstream, in the fields, long before the water ever reaches the sea." The required word is "upstream".',
          },
        ],
      },
      {
        id: 'rd-acad-s2-001-p2',
        title: 'The Lichens That Read the Air',
        body: `A lichen is not a single organism but a partnership. Each one is a tight collaboration between a fungus, which provides structure and shelter, and an alga or a cyanobacterium, which captures sunlight and manufactures food. So complete is this union that for centuries naturalists classified lichens as plants in their own right, never suspecting that what they were studying was two very different forms of life living as one.

This unusual way of living gives lichens an unusual way of feeding. Lacking the roots of a true plant, a lichen cannot draw water and minerals from the soil. Instead it absorbs almost everything it needs directly from the air and from rainfall, taking in moisture and dissolved substances across its entire surface. The arrangement is efficient, but it carries a hidden cost: a lichen has no way of filtering what it takes in, and so it accumulates whatever happens to be drifting through the atmosphere around it.

It is this helplessness that has made lichens unexpectedly useful to scientists. Because they cannot shut out pollutants, the chemicals present in a region's air become concentrated within their tissues over months and years. Researchers can therefore gather lichens, measure the substances trapped inside them, and build a picture of air quality that no single instrument reading could provide. A network of growing lichens acts, in effect, as a vast array of slow but tireless monitors, recording conditions across a whole landscape rather than at a few fixed points.

Lichens reveal pollution in a second way as well. Different species tolerate contamination to very different degrees, and the most sensitive of them vanish from places where the air is foul. In heavily polluted industrial cities of the past, the bark of trees was often bare of lichen altogether, while the same species flourished in the clean air of the surrounding countryside. By recording simply which kinds are present and which are missing, an observer can estimate the health of the air without any laboratory at all — a survey that requires patience and a sharp eye, but almost no equipment.`,
        questions: [
          {
            id: 'rd-acad-s2-001-p2-q8',
            type: 'mcq',
            prompt: 'What does the passage say a lichen actually is?',
            options: [
              'A single species of unusually hardy plant',
              'A partnership between a fungus and an alga or cyanobacterium',
              'A type of fungus that has learned to photosynthesise',
              'A colony of identical microscopic organisms',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph states a lichen is "a tight collaboration between a fungus... and an alga or a cyanobacterium." Option B captures this partnership; the passage explicitly denies it is a single plant.',
          },
          {
            id: 'rd-acad-s2-001-p2-q9',
            type: 'tfng',
            prompt:
              'Early naturalists correctly understood that a lichen was made of two different organisms.',
            answer: 'false',
            explanation:
              'The first paragraph says naturalists "classified lichens as plants in their own right, never suspecting that what they were studying was two very different forms of life living as one." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-acad-s2-001-p2-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Unlike a true plant, a lichen has no _______ and so cannot draw water and minerals from the soil.',
            acceptableAnswers: ['roots'],
            explanation:
              'The second paragraph states the lichen is "lacking the roots of a true plant" and so "cannot draw water and minerals from the soil." The missing word is "roots".',
          },
          {
            id: 'rd-acad-s2-001-p2-q11',
            type: 'mcq',
            prompt: 'Why are lichens useful as a way of measuring air quality?',
            options: [
              'They release a warning chemical when the air is dirty.',
              'They grow faster in polluted air than in clean air.',
              'They cannot filter what they absorb, so pollutants build up inside them.',
              'They change colour in proportion to the amount of pollution.',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph says that "because they cannot shut out pollutants, the chemicals present in a region’s air become concentrated within their tissues over months and years." Option C matches this.',
          },
          {
            id: 'rd-acad-s2-001-p2-q12',
            type: 'tfng',
            prompt: 'All species of lichen are affected by air pollution to the same degree.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that "different species tolerate contamination to very different degrees, and the most sensitive of them vanish from places where the air is foul." The statement says all species are affected equally, which contradicts the passage, so it is False.',
          },
          {
            id: 'rd-acad-s2-001-p2-q13',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: A spread of growing lichens works like an array of slow but tireless _______, recording air conditions across a whole landscape.',
            acceptableAnswers: ['monitors'],
            explanation:
              'The third paragraph describes a network of lichens as "a vast array of slow but tireless monitors, recording conditions across a whole landscape." The required word is "monitors".',
          },
          {
            id: 'rd-acad-s2-001-p2-q14',
            type: 'tfng',
            prompt:
              'It is possible to estimate air quality simply by noting which lichen species are present and which are absent.',
            answer: 'true',
            explanation:
              'The fourth paragraph states that "by recording simply which kinds are present and which are missing, an observer can estimate the health of the air without any laboratory at all." This supports the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
