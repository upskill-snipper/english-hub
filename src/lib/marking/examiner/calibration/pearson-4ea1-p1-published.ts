// ─── 4EA1/01: anchors from Pearson's published exemplar-response documents ──
//
// These are the free teacher-facing documents Pearson publishes after a
// series, containing an examiner overview of the question and a written
// commentary against each exemplar script. Unlike a standardisation ePACK the
// commentary is prose, so the reasoning is fuller, and unlike the ePACK it
// gives the examiner's view of how the cohort as a whole answered.
//
// What is taken: the overview, the level placement and the commentary's
// reasoning. What is not taken: any candidate's writing.
//
// Note on marks. These documents place each exemplar in a level and describe
// where in the level it sits; several do not print a number. Where the number
// is not printed, the anchor records the level and leaves the mark out rather
// than inventing one, and `inferred` marks a mark derived from a phrase such
// as "just into level 2".
// ────────────────────────────────────────────────────────────────────────────

import type { ExaminerCalibrationSet } from './types'

export const pearson4ea1Paper1Published: ExaminerCalibrationSet = {
  packId: 'edexcel-igcse-lang-paper1',
  series: 'Summer 2023 (Q4, A Passage to Africa)',
  sourceKind: 'published-exemplars',
  source:
    'Pearson Edexcel International GCSE English Language A, Component 1, "Exemplar responses, Summer 2023", Q4 on the Anthology text "A Passage to Africa" by George Alagiah. Principal Examiner document, five exemplars with commentaries.',
  taskContext: {
    Q4: 'How does the writer use language and structure in the extract from "A Passage to Africa" to shock the reader? (12 marks, AO2.)',
  },
  overviews: {
    Q4: 'The examiner overview for this series states: the question is on Text Two, the Anthology text, assessed for AO2, and is "more challenging and discriminatory". Indicative content is examples only, and "any valid points that candidates make that are securely rooted in the text can be rewarded". There need not be an equal number of points on language and structure, but both should be addressed. At the lower levels candidates identified features but offered little explanation of effect, or gave a narrative account with vague observations such as "the use of first-person engages the reader". Mid-level responses worked through the text with a sound range of points and apt references, but did not analyse the connotations of individual words or the effect of structural features. The most successful responses dealt with the whole passage, selected references judiciously from throughout, recognised the deliberately detached tone and the sub-text of anger and embarrassment, and handled the significance of "the smile", which the examiner names as the discriminator. Long introductions and conclusions that repeat points already made gain nothing and cost time on higher-tariff questions.',
  },
  anchors: [
    {
      questionId: 'Q4',
      mark: 3,
      level: 2,
      inferred: true,
      notes: [
        'selects an appropriate example but the comment on the effect is "not entirely convincing"',
        'another undeveloped comment',
        'the candidate makes little progress into the text',
        'best placed just into level 2',
        'aim to look at more than just the opening paragraphs; select relevant features from the whole passage',
      ],
      decisive:
        'Coverage is the capping feature: an appropriate example with an unconvincing effect comment, and no progress beyond the opening.',
    },
    {
      questionId: 'Q4',
      mark: 6,
      level: 3,
      inferred: true,
      notes: [
        'points about graphic imagery, repetition, short sentences and longer sentences, all intended to shock',
        'there is some explanation and clear understanding',
        'points, although supported by relevant references, lack development',
        'a mark in the middle of level 3 is appropriate',
        'to improve, explore how exactly the list of descriptive words creates a "disturbing picture"',
      ],
      decisive:
        'Clear understanding with supported points opens level 3; lack of development holds it in the middle of the level.',
    },
    {
      questionId: 'Q4',
      mark: 8,
      level: 4,
      inferred: true,
      notes: [
        'clear, and at times thorough, understanding',
        'relevant points on listing adjectives, the opening, short sentences, sensory imagery and juxtaposition',
        'the response meets all of the level 3 criteria',
        'there is just enough in the way of exploration of ideas to lift it into level 4',
        'to improve, refer to the really important elements of the text: "the smile" is very significant',
      ],
      decisive:
        'All level 3 criteria met plus just enough exploration to cross the boundary, so the bottom of level 4.',
    },
    {
      questionId: 'Q4',
      level: 4,
      notes: [
        'a thorough and very thoughtful answer with a number of relevant and wide-ranging points on language and structure',
        'examines the language of "like a ghost village" in a way the level 3 response does not',
        'considers the writer’s view of his role as a journalist',
        'all of the level 4 criteria are met',
        'the response does not have the degree of analysis or perception needed for a mark within level 5',
      ],
      decisive:
        'Thorough and wide-ranging, meeting every level 4 criterion; the absence of analysis and perception is what keeps it out of level 5.',
    },
    {
      questionId: 'Q4',
      mark: 12,
      level: 5,
      inferred: true,
      notes: [
        'a number of perceptive and insightful points',
        'an extremely good understanding of the impact of "the smile"',
        'discriminating in the selection of references',
        'analysis of a range of language and structural features, with points developed by close examination of word choice',
        'considers not only how the writer is moved but how the reader is affected by the way the piece is written',
        'this fulfils all of the level 5 criteria',
      ],
      decisive:
        'Every level 5 criterion fulfilled: perception, discriminating references and analysis of both language and structure, with the reader’s response addressed.',
    },
  ],
}
