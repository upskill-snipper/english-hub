// ─── 4EA1/01 Calibration Pack ────────────────────────────────────────────────
// Standardised examiner judgements for Pearson Edexcel International GCSE English
// Language A (4EA1) Paper 1, distilled from the official OLS standardisation pack
// for Series 2606GQ: 5 standardised scripts per question spanning the mark range,
// each with the mark awarded and a short ORIGINAL paraphrase of the examiner's
// reasoning. No candidate script text or verbatim board text is reproduced -
// only the marks and a condensed rationale (derived analysis).
//
// Consumed by ../calibration/index.ts -> getCalibrationAnchor(), which injects a
// compact anchor block into the marking system prompt for in-context calibration.
//
// ── 19 SEPTEMBER 2026: EIGHT OF THE TEN Q4/Q5 MARKS WERE WRONG ───────────────
//
// The Q4 and Q5 anchors did not match the standardisation pack they cited. The
// pack was re-read from source (items 4EA1_01_Q04 and 4EA1_01_Q05, five
// responses each) and the marks corrected:
//
//   Q4  was 1, 4, 6, 9, 11   is 3, 6, 7, 10, 11
//   Q5  was 6, 11, 13, 16, 21   is 6, 10, 14, 18, 22
//
// Five of the corrections are stated in the standardisers' own words on the
// script: "Top of level 3" (7), "So this scores 10", "just into the band above
// for level 4 on 14", "Top of level 4" (18) and "This is full marks" (22). The
// remainder are consistent with the level boundaries in the 4EA1/01 mark scheme
// and with the annotation on each script.
//
// WHY IT MATTERED. These summaries go into the marking prompt as the model's
// only concrete sense of what a given mark looks like. Every Q4 anchor was too
// LOW by two or three marks, so the marker had been calibrated to under-mark
// the analysis question on a paid feature used by children. Nothing failed and
// nothing reported an error; the marks were simply a little mean, everywhere.
//
// The `rules` arrays now also carry the discriminators the standardisers
// actually applied - missing references as the Level 3 ceiling, "explores
// rather than analyses" as the Level 4 ceiling, and the number of comparisons
// as the main driver on Q5. Those are what move a mark, and none of them is
// deducible from the level descriptors alone.
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
      // The three rules below are the discriminators the standardisers actually
      // applied, taken from what they wrote next to each script rather than
      // from the level descriptors. They are what moves a mark, and they are
      // not obvious from the grid alone.
      'REFERENCES ARE THE USUAL CEILING. A valid, even detailed, point made without a supporting quotation does not move beyond Level 3, however well expressed. The standardisers wrote some version of "needs a relevant reference" on almost every script below Level 4.',
      'THE EFFECT MUST BE TIED TO THIS TEXT. Naming a device and attaching a generic effect is Level 3 at best; the response has to say what the device does here, in this passage.',
      'LEVEL 4 EXPLORES, LEVEL 5 ANALYSES, AND SUSTAINS IT. "Explores rather than analyses" is the phrase that holds a strong response at the top of Level 4. Analysis that starts but is not maintained across the response sits at 11, not 12.',
    ],
    exemplars: [
      {
        ref: 'Q4·R1',
        summary:
          '3/12 (Level 2): more secure than Level 1, but self-limiting - points are made and then left, without the development needed to rise.',
      },
      {
        ref: 'Q4·R2',
        summary:
          '6/12 (Level 3): explains a language feature but does not apply it to the effect in this particular text, so the comment stays generic; not enough development for Level 4.',
      },
      {
        ref: 'Q4·R3',
        summary:
          '7/12 (top of Level 3): relevant, detailed points including some sense of a change in tone, but references are missing throughout; the absence of quotation is explicitly the limiting factor.',
      },
      {
        ref: 'Q4·R4',
        summary:
          '10/12 (top of Level 4): relevant references with some drilling down, and a well-handled transition point; explores rather than analyses, and one point fails to show how the tension builds.',
      },
      {
        ref: 'Q4·R5',
        summary:
          '11/12 (Level 5): begins to analyse, with strong focus on the text and a link to the reader’s reaction; perceptive but under-exemplified in one or two places, so the analysis is not sustained enough for full marks.',
      },
    ],
  },
  Q5: {
    questionId: 'Q5',
    rules: [
      'Best-fit against the AO3 grid; reward balanced, well-referenced comparison of the writers’ ideas and perspectives.',
      'SINGLE-TEXT CAP: a response that addresses only one of the two texts can reach no higher than the top of Level 2 (8 marks).',
      // As with Q4, these are the standardisers' own discriminators.
      'THE RANGE OF COMPARISONS IS THE MAIN DRIVER. Three or four comparisons is "some range", which places a response in Level 3 or the lower half of Level 4 however well written it is. Level 5 requires a varied and comprehensive range, and a response with only three or four comparisons was held at the top of Level 4 for exactly this reason.',
      'MOVING BEYOND THE OBVIOUS IS THE LEVEL 3 TO LEVEL 4 GATE. Obvious comparisons (both are about an accident, both use the present tense) are Level 2 to 3; noticing tone, rhythm, structure or the writers’ craft is what crosses into Level 4.',
      'REFERENCES MUST BE BALANCED ACROSS BOTH TEXTS from Level 4 upwards, and discriminating at Level 5. A response weighted towards one text is capped below Level 4 even when its comparisons are good.',
    ],
    exemplars: [
      {
        ref: 'Q5·R1',
        summary:
          '6/22 (lower end of Level 2): basic comparison, enough to move out of Level 1; no explanation, weak comparisons, no range, and only slight exemplification. Not remotely analytical.',
      },
      {
        ref: 'Q5·R2',
        summary:
          '10/22 (Level 3): three or four comparisons so some range, touching on structure and attempting to explain effects, but with no real explanation and too short to be thorough.',
      },
      {
        ref: 'Q5·R3',
        summary:
          '14/22 (bottom of Level 4): moves beyond the obvious, with a reference from each text and some precise, fine-grained exploration including a comparison of helplessness; effect on the reader present but not developed, and one impressive-sounding idea is not exemplified. Better than top of Level 3, so just into the band above.',
      },
      {
        ref: 'Q5·R4',
        summary:
          '18/22 (top of Level 4): real precision, critical vocabulary, references ranged across both texts and well balanced, thoughtful exploration of the writers’ craft; held below Level 5 because there are still only three or four comparisons, so the range is not comprehensive.',
      },
      {
        ref: 'Q5·R5',
        summary:
          '22/22 (Level 5, full marks): references balanced across both texts and genuinely discriminating - nuanced and perceptive; ideas mature and analytical throughout, terminology correct and well developed, with no lapses and consistency maintained.',
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
