// ─── 4EA1/01 Calibration Pack ────────────────────────────────────────────────
// Standardised examiner judgements for Pearson Edexcel International GCSE English
// Language A (4EA1) Paper 1, distilled from an official OLS standardisation pack
// (Series 2606GQ): 5 standardised scripts per question (P1-P5) spanning the mark
// range, each with the mark/level awarded and a short ORIGINAL paraphrase of the
// examiner's reasoning. No candidate script text or verbatim board text is
// reproduced - only the marks and a condensed rationale (derived analysis).
//
// Consumed by ../calibration/index.ts -> getCalibrationAnchor(), which injects a
// compact anchor block into the marking system prompt for in-context calibration.
// ────────────────────────────────────────────────────────────────────────────

import type { CalibrationPack } from './index'

export const EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION: CalibrationPack = {
  Q1: {
    questionId: 'Q1',
    rules: [
      'One mark per valid word/phrase from the directed lines, up to 2.',
      'A partial or inexact quotation where the full required phrase is needed is not credited.',
    ],
    exemplars: [
      {
        ref: 'Q1·P1',
        summary:
          '1/2: one valid retrieval; the second was inexact (the full required phrase was needed).',
      },
      {
        ref: 'Q1·P2',
        summary: '2/2: both required items retrieved accurately from the directed lines.',
      },
      {
        ref: 'Q1·P5',
        summary: '2/2: full marks; both retrievals correct and within the directed lines.',
      },
    ],
  },
  Q2: {
    questionId: 'Q2',
    rules: [
      'One mark per valid point, up to 4; own words preferred.',
      'Points drawn from outside the directed lines are not credited, even if otherwise accurate.',
    ],
    exemplars: [
      {
        ref: 'Q2·P1',
        summary:
          '2/4: focused but brief; two valid points (a third was discounted as outside the directed lines).',
      },
      {
        ref: 'Q2·P3',
        summary:
          '3/4: three valid points; one point referred to material outside the directed lines and was not credited.',
      },
      { ref: 'Q2·P4', summary: '4/4: four clear, valid points within the directed lines.' },
      {
        ref: 'Q2·P5',
        summary: '4/4: full marks; covers many mark-scheme points (capped at the maximum of 4).',
      },
    ],
  },
  Q3: {
    questionId: 'Q3',
    rules: [
      'One mark per valid point, up to 5.',
      'SELECTION-ONLY CAP: quotations given with no attempt to use or explain them score a maximum of 1.',
      'An AO2 "analysis" approach does not earn AO1 marks unless it makes valid points about what the writer tells us.',
    ],
    exemplars: [
      {
        ref: 'Q3·P1',
        summary:
          '1/5: relevant quotations selected but not used or explained → capped at 1 (selection only).',
      },
      {
        ref: 'Q3·P2',
        summary: '3/5: drifts into AO2 analysis, but three valid AO1 points are creditable.',
      },
      {
        ref: 'Q3·P3',
        summary:
          '3/5: opening point sits outside the line references (not credited); three valid points follow.',
      },
      { ref: 'Q3·P5', summary: '5/5: clear understanding; five separate, valid points made.' },
    ],
  },
  Q4: {
    questionId: 'Q4',
    rules: [
      'Best-fit against the AO2 grid; reward analysis of BOTH language and structure and the effects created.',
      'Material analysed from outside the directed lines is not credited.',
    ],
    exemplars: [
      {
        ref: 'Q4·P1',
        summary:
          '1/12 (Level 1): very brief; an example is selected but with no comment or understanding.',
      },
      {
        ref: 'Q4·P2',
        summary:
          '4/12 (Level 2): some understanding of the writer’s thoughts but not enough for Level 3; best fit at top of Level 2.',
      },
      {
        ref: 'Q4·P3',
        summary:
          '6/12 (Level 3): clear understanding; a range of devices identified with examples and some explanation; secure mid-Level 3.',
      },
      {
        ref: 'Q4·P4',
        summary:
          '9/12 (Level 4): articulate; explores language and structure but repeats points and is not always focused; best fit mid-Level 4.',
      },
      {
        ref: 'Q4·P5',
        summary:
          '11/12 (Level 5): a wide range of points with effective, thoughtful analysis of both language and structure.',
      },
    ],
  },
  Q5: {
    questionId: 'Q5',
    rules: [
      'Best-fit against the AO3 grid; reward balanced, well-referenced comparison of the writers’ ideas and perspectives.',
      'SINGLE-TEXT CAP: a response that addresses only one of the two texts can reach no higher than the top of Level 2 (8 marks).',
    ],
    exemplars: [
      {
        ref: 'Q5·P1',
        summary:
          '6/22 (Level 2): brief but focused; a few valid comparisons and some vocabulary identified.',
      },
      {
        ref: 'Q5·P2',
        summary:
          '11/22 (Level 3): obvious comparisons plus some more developed points; very little direct quotation, so points lack substantiation.',
      },
      {
        ref: 'Q5·P3',
        summary:
          '13/22 (Level 3): secure Level 3; a range of comparisons with appropriate references from both texts.',
      },
      {
        ref: 'Q5·P4',
        summary:
          '16/22 (Level 4): a wide range of comparisons; a strong first half that tails off towards the end.',
      },
      {
        ref: 'Q5·P5',
        summary:
          '21/22 (Level 5): a wide, comprehensive range of comparisons with analysis of ideas/perspectives and discriminating references.',
      },
    ],
  },
  // Section B writing (the scheme exposes one writing question, id "Q6", that
  // covers either Q6 or Q7 since they share the AO4/AO5 grids). Both standardised
  // sets are included as calibration anchors.
  Q6: {
    questionId: 'Q6',
    rules: [
      'Mark the ONE task attempted. Assess AO4 (communication/adaptation, /27) and AO5 (technical accuracy, /18) separately, best-fit, then add.',
      'AO4 rewards purpose, audience, form, tone and register; AO5 rewards vocabulary, sentence variety, paragraphing, spelling, punctuation and grammar.',
      'Difficult handwriting does not reduce the mark where the writing can still be read.',
    ],
    exemplars: [
      {
        ref: 'Q6·P1',
        summary:
          'AO4 9/27 (L2) + AO5 6/18 (L2): broadly appropriate and focused with some grasp of purpose; ideas under-developed; subheadings/bullets connect ideas but sentences are often incomplete.',
      },
      {
        ref: 'Q6·P2',
        summary:
          'AO4 13/27 (L3) + AO5 9/18 (L3): communicates clearly but purpose drifts (audience shifts); appropriate informal register; paragraphing aids meaning; simple punctuation.',
      },
      {
        ref: 'Q6·P3',
        summary:
          'AO4 19/27 (L4) + AO5 13/18 (L4): mostly successful with developed ideas and secure purpose; engages the audience (rhetorical questions, direct speech); deliberate structure; fairly wide vocabulary.',
      },
      {
        ref: 'Q6·P4',
        summary:
          'AO4 22/27 (L4) + AO5 16/18 (L5): mature, well-developed ideas; sustained, effective form/tone/register (extended metaphor); AO5 manages complex ideas with wide vocabulary → Level 5.',
      },
      {
        ref: 'Q6·P5',
        summary:
          'AO4 27/27 (L5) + AO5 18/18 (L5): headings/subheadings, sharp focus and high-level expression; subtle metaphor and controlled vernacular; extensive strategic vocabulary and crafted sentences/punctuation.',
      },
      {
        ref: 'Q7·P1',
        summary:
          'AO4 14/27 (L3) + AO5 8/18 (L3): clear, methodical communication with some impact (repetition); AO5 limited by syntax/grammar errors (missing articles, plurals), weak punctuation and spelling → bottom of Level 3.',
      },
      {
        ref: 'Q7·P2',
        summary:
          'AO4 16/27 (L3) + AO5 10/18 (L3): clear intro and a range of points, some developed; attempts interest (opening question); some varied vocabulary with spelling slips; occasional missing articles/punctuation blur meaning.',
      },
      {
        ref: 'Q7·P3',
        summary:
          'AO4 19/27 (L4) + AO5 13/18 (L4): clear intro, well-developed points, deliberate conclusion; effective tone and signalled shifts; wide punctuation range; vocabulary carefully selected.',
      },
      {
        ref: 'Q7·P4',
        summary:
          'AO4 21/27 (L4) + AO5 14/18 (L4): successful communication; effective style/tone (catchy heading, emotive language); wide vocabulary used selectively; well-constructed sentences and strong structure.',
      },
      {
        ref: 'Q7·P5',
        summary:
          'AO4 26/27 (L5) + AO5 18/18 (L5): headings frame the argument; sharp focus to the final line; subtle metaphor and controlled vernacular; extensive vocabulary and varied sentences/punctuation for effect.',
      },
    ],
  },
}
