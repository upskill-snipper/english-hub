/**
 * Year 8 — Development.
 *
 * Set text in T1: *A Monster Calls* by Patrick Ness. Builds on Y7's
 * "This shows…" toward Y8's "This suggests… because…", and from
 * single-text analysis to comparison.
 *
 * T1 weekly plans below capture the lesson skeleton produced by the
 * `lesson_planner` agent. T2 and T3 ship with term-level overviews;
 * detail to follow.
 */

import type { Year } from './types'

// Helper: build a compact lesson given focus + skills + brief description.
// Cuts repetition; the page renders all five fields, but for compact
// data we share boilerplate via a builder.
type Quick = {
  focus: import('./types').LessonFocus
  skills: string[]
  do: string
  task: string
  success: string
}
const lesson = (q: Quick): import('./types').Lesson => ({
  focus: q.focus,
  skillCodes: q.skills,
  whatStudentsDo: { en: q.do },
  task: { en: q.task },
  successCriteria: { en: q.success },
})

const Y8_T1: Year['terms'][number] = {
  number: 1,
  label: { en: 'Term 1 — Autumn', ar: 'الفصل الدراسي الأول — الخريف' },
  overview: {
    en: "Year 8 opens with Patrick Ness's *A Monster Calls*. The yew-tree monster tells three nested stories where surface meaning and true meaning diverge, forcing readers to hold multiple inferences simultaneously. The novel structurally builds comparison (between Conor's waking life and the monster's tales, between what Conor says and what he means, between the three tales themselves) — making comparison a feature of the text rather than an add-on. Thematically (grief, anger, guilt, isolation) it matches Y8 emotional maturity while remaining age-appropriate.",
    ar: 'تبدأ السنة الثامنة برواية *A Monster Calls* لباتريك نيس. يروي الوحش الذي يأتي من شجرة الطقسوس ثلاث قصص متداخلة يفترق فيها المعنى الظاهر عن المعنى الحقيقي، ممّا يدفع القرّاء إلى التمسّك باستنتاجات متعدّدة في الوقت ذاته.',
  },
  setText: { en: 'A Monster Calls by Patrick Ness', ar: 'A Monster Calls لباتريك نيس' },
  vocabularyThemes: [
    { en: 'nightmare, denial, treatment, exhaustion, fragility' },
    { en: 'allegory, foil, comparison, motif, climax, catharsis' },
  ],
  bigSkillJump: {
    en: 'Students arrive comparing on parallel arcs; they exit able to write two-paragraph comparative responses with embedded quotations, multiple inferences per quote, and "This suggests… because…" sustained.',
  },
  halfTerms: [
    {
      id: '1.1',
      label: { en: 'Term 1.1 — First half', ar: 'الفصل 1.1 — النصف الأول' },
      assessment: {
        en: 'Google-Form reading quiz (Chapters 1–20) + two-paragraph comparative response: "How does Ness present Conor at the start and end of the novel?" (240–300 words, 25 mins + 5-minute edit).',
      },
      weeks: [
        {
          number: 2,
          pages: 'Ch. 1, pp. 1–14',
          keyVocabulary: [
            { en: 'nightmare' },
            { en: 'yew' },
            { en: 'ancient' },
            { en: 'monstrous' },
            { en: 'summoned' },
          ],
          contextNote: { en: 'The monster arrives — Ness withholds information.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Teacher reads pp. 1-8; class echo-reads "The monster showed up just after midnight. As they do." Annotate three places where Ness withholds information.',
              task: 'Highlight one explicit detail and one implicit detail on a printed extract.',
              success:
                'Can identify one explicit and one implicit detail and label each correctly.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.2', '8R.3', '8SL.1'],
              do: 'Read pp. 9-14. Discuss in pairs using stems: "I think Conor feels… because…" / "Building on that, I\'d add…"',
              task: "Select two embedded quotations (max 5 words) about Conor's nightmare; one inference each.",
              success:
                'Both quotations under 6 words and embedded; each carries a different inference.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.2', '8R.5'],
              do: 'Watch teacher live-model a WHAT/HOW/WHY paragraph using "This suggests… because…".',
              task: 'Copy the modelled paragraph and label W/H/W in margin.',
              success:
                'Three colour-coded sections and one "This suggests… because…" stem present.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.5', '8W.4'],
              do: "Write a scaffolded paragraph on the monster's arrival using a sentence-starter frame.",
              task: 'Paragraph (80-100 words) with one embedded quotation and "This suggests… because…".',
              success:
                'Quote embedded; one inference developed with "because"; subject terminology used once.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.3', '8W.2', '8W.3'],
              do: 'Independent paragraph (100-120 words, no scaffold).',
              task: 'How does Ness make the monster seem frightening on pp. 1-14?',
              success:
                'Embedded quote; "This suggests… because…" used accurately; full stops and capitals correct.',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Ch. 2–3, pp. 15–32',
          keyVocabulary: [
            { en: 'treatment' },
            { en: 'fragile' },
            { en: 'denial' },
            { en: 'routine' },
            { en: 'exhausted' },
          ],
          contextNote: { en: "Conor's mum — short sentences signal exhaustion." },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Echo-read the breakfast scene; notice short sentences.',
              task: 'Underline three short sentences; annotate why Ness might choose them.',
              success: 'Can name one structural choice and link it to an effect.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.2', '8R.3', '8SL.2'],
              do: 'Pair-talk: "Conor\'s mum suggests she is… because…" / "I disagree slightly, I think…"',
              task: 'Two embedded quotations about Mum; two different inferences each.',
              success: 'Each quote carries two DISTINCT inferences.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8R.5', '8R.7'],
              do: 'Watch teacher draw two inferences from one quote ("Her hand shook"). "This could suggest… / Alternatively…"',
              task: 'Copy and annotate; identify both inferences.',
              success: 'Annotation labels both inferences and the linking phrase.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.3', '8W.4'],
              do: 'Scaffolded paragraph using one quote and two inferences.',
              task: '100-word paragraph with "This could suggest… / Alternatively…".',
              success: 'One embedded quote; two distinct inferences linked with "because".',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.5', '8W.2', '8W.3'],
              do: 'Independent paragraph, 120 words.',
              task: "What impressions does Ness give of Conor's mum in Ch. 2-3?",
              success:
                'Two inferences from one quote; accurate punctuation; one piece of terminology used correctly.',
            }),
          ],
        },
        // Weeks 4-7 follow same pattern; condensed for the data file.
        // Lesson detail expandable by the lesson_planner agent.
        {
          number: 4,
          pages: 'Ch. 4–6, pp. 33–58',
          keyVocabulary: [
            { en: 'prince' },
            { en: 'queen' },
            { en: 'betrayal' },
            { en: 'illusion' },
            { en: 'justice' },
          ],
          contextNote: { en: 'First tale begins — story-within-story; ambiguous endings.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Echo-read italicised sections; discuss font shift.',
              task: 'Mark a timeline of where the tale "switches" expected to unexpected.',
              success: 'Identifies the turning point of the tale.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.4', '8R.7', '8SL.1'],
              do: 'Discuss story-within-story structure.',
              task: 'Identify two structural devices (italics, embedded narrative) + one effect each.',
              success: 'Devices named with correct terminology; effects use "so that the reader…".',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.5', '8W.7', '8R.5'],
              do: 'Live model WHAT/HOW/WHY on structure (not just language).',
              task: 'Copy model; highlight zoom from whole-text structure to one specific word.',
              success: 'Identifies the zoom from structure to detail.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8W.4'],
              do: 'Scaffolded structural paragraph.',
              task: '120 words with one structural point and one language point.',
              success:
                'One structural device named; one embedded quote; "This suggests… because…" once.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.4', '8R.5', '8W.2'],
              do: 'Independent 130-word paragraph, no scaffold.',
              task: 'How does Ness use the first tale to make readers question what is true?',
              success:
                'Structure AND language addressed; embedded quote; one inference with "because".',
            }),
          ],
        },
        {
          number: 5,
          pages: 'Ch. 7–9, pp. 59–82',
          keyVocabulary: [
            { en: 'invisible' },
            { en: 'bully' },
            { en: 'witness' },
            { en: 'complicit' },
            { en: 'isolation' },
          ],
          contextNote: { en: 'Harry as bully — what is said vs what is meant.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.3'],
              do: 'Echo-read "He doesn\'t even hit me anymore."',
              task: 'Annotate three lines of dialogue with surface vs implied meaning.',
              success: 'Identifies a gap between surface and implied in three places.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.7', '8SL.1'],
              do: "Pair-discuss Harry's power.",
              task: 'Two embedded quotations about Harry; two inferences per quote.',
              success: 'Four distinct inferences total; all use "because".',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8R.5'],
              do: 'Teacher models a paragraph on Harry with two inferences and a counterpoint inference.',
              task: 'Copy model; underline counterpoint stem "However, it could also suggest…".',
              success: 'Identifies three different inferences in the model.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.5', '8W.4'],
              do: 'Scaffolded paragraph on Harry with three inferences from one quotation.',
              task: '130-word paragraph.',
              success:
                'Three inferences linked with "because" or "as if"; one piece of terminology.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.3', '8R.5', '8W.2'],
              do: 'Independent 140-word paragraph.',
              task: 'How does Ness present Harry as a threat in Ch. 7-9?',
              success: 'Embedded quote; three inferences; terminology used accurately.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Ch. 10–12, pp. 83–108',
          keyVocabulary: [
            { en: 'stern' },
            { en: 'brittle' },
            { en: 'generational' },
            { en: 'resentment' },
            { en: 'control' },
          ],
          contextNote: { en: 'Grandma — cold or grieving? Holding two readings.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: "Echo-read Grandma's house description.",
              task: 'Annotate three details about the house; what each suggests.',
              success: 'Three setting details linked to three character traits.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8SL.1', '8SL.2'],
              do: 'Group discussion: cold or grieving? "On the surface… but underneath…".',
              task: 'Two-column table of evidence.',
              success: 'At least four pieces per column.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8W.5', '8R.5'],
              do: 'Teacher models a paragraph holding both readings of Grandma using "On one hand… on the other hand…".',
              task: 'Copy model; mark pivot point.',
              success: 'Pivot identified; both readings named.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.5', '8W.4', '8W.5'],
              do: 'Scaffolded paragraph with two contrasting inferences.',
              task: '140-word paragraph using "On one hand… on the other…".',
              success:
                'Two readings developed; both supported by embedded quotes; "because" used twice.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.3', '8R.5', '8W.2', '8W.9'],
              do: 'Independent paragraph + 5-minute self-edit using checklist.',
              task: '140 words + edit.',
              success: 'Two contrasting inferences; one self-correction visible.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'Ch. 13–14, pp. 109–126',
          keyVocabulary: [
            { en: 'contrast' },
            { en: 'parallel' },
            { en: 'visibility' },
            { en: 'power' },
            { en: 'vulnerability' },
          ],
          contextNote: { en: 'Comparison: Conor vs Harry as foils.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.6'],
              do: 'Echo-read Harry\'s "I no longer see you." Discuss irony.',
              task: 'Venn diagram Conor vs Harry.',
              success: 'Three items in each section of the Venn.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.6', '8R.7', '8SL.1'],
              do: 'Discuss Harry as foil. "Both… however…" / "Similarly… but in contrast…"',
              task: 'Two paired quotes (one Conor, one Harry); one similarity + one difference.',
              success: 'Pairing makes a fair comparison on the same topic.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8R.6', '8R.5'],
              do: 'Live model a comparative WHAT/HOW/WHY paragraph.',
              task: 'Copy model; label comparative connectives.',
              success: 'Three comparative connectives identified and named.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8W.4'],
              do: 'Scaffolded comparative paragraph.',
              task: '150 words with paired quotes.',
              success:
                'One similarity AND one difference developed; two embedded quotes; "because" used.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.6', '8R.5', '8W.2'],
              do: 'Independent 160-word comparative paragraph.',
              task: 'Compare how Ness presents Conor and Harry.',
              success: 'Comparative structure clear; paired evidence; two inferences developed.',
            }),
          ],
        },
      ],
    },
    {
      id: '1.2',
      label: { en: 'Term 1.2 — Second half', ar: 'الفصل 1.2 — النصف الثاني' },
      assessment: {
        en: "Term 1.2 formal assessment — analytical essay on Conor's arc across the novel.",
      },
      weeks: [
        // Compact: weeks 8-13 scaffold for the lesson_planner agent to expand
        {
          number: 8,
          pages: 'Ch. 15–17, pp. 127–150',
          keyVocabulary: [
            { en: 'apothecary' },
            { en: 'parson' },
            { en: 'faith' },
            { en: 'hypocrisy' },
            { en: 'destruction' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Read the second tale; compare to first.',
              task: 'Annotate moments where reader expectations are subverted.',
              success: 'Three subversions named.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.6', '8R.4', '8SL.1'],
              do: 'Compare Tale 1 and Tale 2.',
              task: 'Comparison table of two tales.',
              success: 'Three rows of comparison with textual evidence.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8R.6', '8R.5'],
              do: 'Model comparative paragraph on the two tales.',
              task: 'Copy model; underline terminology.',
              success: 'Three pieces of terminology underlined and defined.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8W.4', '8R.7'],
              do: 'Scaffolded comparison.',
              task: '150-word comparative paragraph.',
              success:
                'One structural similarity + one thematic difference, both with embedded quotes.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.6', '8R.4', '8W.2'],
              do: 'Independent 160-word comparative paragraph.',
              task: 'How does the second tale develop ideas from the first?',
              success:
                'Comparative connectives; both tales evidenced; one inference with "because".',
            }),
          ],
        },
        {
          number: 9,
          pages: 'Ch. 18–20, pp. 151–176',
          keyVocabulary: [
            { en: 'abyss' },
            { en: 'grip' },
            { en: 'terror' },
            { en: 'fracture' },
            { en: 'abandonment' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Echo-read recurring nightmare; note repetition.',
              task: 'Highlight three repeated images across scenes.',
              success: 'Three repetitions across two or more scenes.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.4', '8R.7', '8SL.1'],
              do: 'Discuss what the recurring nightmare suggests.',
              task: 'Track nightmare across novel in flowchart.',
              success: 'Flowchart shows three points with quotes and inferences.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.5', '8W.7', '8R.4'],
              do: 'Model paragraph zooming from motif to one word with varied sentence lengths.',
              task: 'Copy model; mark deliberate short sentence.',
              success: 'Names one short-sentence choice and its effect.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8W.5', '8W.7'],
              do: 'Scaffolded paragraph on nightmare motif using deliberate sentence variation.',
              task: '150 words with at least one short sentence used for effect.',
              success: 'Motif named; deliberate short sentence; terminology accurate.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.4', '8R.5', '8W.2', '8W.9'],
              do: 'Independent paragraph + self-edit.',
              task: "160 words on nightmare's significance + visible edit.",
              success: 'Motif tracked across two scenes; embedded quotes; one self-correction.',
            }),
          ],
        },
        {
          number: 10,
          pages: 'Ch. 21–23, pp. 177–200',
          keyVocabulary: [
            { en: 'estranged' },
            { en: 'perspective' },
            { en: 'loyalty' },
            { en: 'unspoken' },
            { en: 'reconcile' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.3'],
              do: "Read Conor and Lily's argument; whose perspective dominates?",
              task: 'Note three places where narrator bias is visible.',
              success: 'Three bias points identified with justification.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8SL.1', '8W.6'],
              do: 'Re-read from Lily\'s perspective. "From Lily\'s view, Conor seems… because…"',
              task: "Pair-talk: argue Lily's case in 60 seconds each.",
              success: 'Each pupil cites two pieces of evidence in 60 seconds.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.6', '8W.1', '8W.10'],
              do: "Model a diary entry from Lily's perspective; register shift.",
              task: "Highlight where Lily's voice differs from the narrator.",
              success: 'Three voice differences highlighted (vocab, sentence length, register).',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.6', '8W.10', '8W.7'],
              do: 'Write Lily diary entry (150 words).',
              task: 'First-person diary referencing two events from Ch. 21-23.',
              success: 'Voice consistent; two textual references; tone matches Lily.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.5', '8W.2', '8R.6'],
              do: 'Analytical paragraph on breakdown of friendship.',
              task: '160-word paragraph.',
              success: 'Embedded quote; two inferences with "because"; one comparative point.',
            }),
          ],
        },
        {
          number: 11,
          pages: 'Ch. 24–26, pp. 201–224',
          keyVocabulary: [
            { en: 'invisibility' },
            { en: 'presence' },
            { en: 'recognition' },
            { en: 'voice' },
            { en: 'witness' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Read third tale; discuss escalation across the three.',
              task: "Annotate link between third tale and Conor's real life.",
              success: 'Two clear parallels between tale and reality.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.6', '8R.4', '8SL.1'],
              do: 'Compare all three tales.',
              task: 'Three-column comparison table (Tale 1, 2, 3).',
              success: 'Each column has quote, structural feature, thematic point.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8R.6', '8R.5'],
              do: 'Model TWO-paragraph response: para 1 on Tales 1+2, para 2 on Tale 3 as departure.',
              task: 'Annotate where para 2 builds on para 1.',
              success: 'Identifies link sentence between paragraphs.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8W.2', '8W.4'],
              do: 'Scaffolded two-paragraph comparative response.',
              task: '220-word two-paragraph response.',
              success:
                'Two paragraphs linked with connective; each has embedded quote and "because" inference.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.6', '8R.5', '8W.2'],
              do: 'Independent two-paragraph response (240 words).',
              task: 'How does the third tale develop ideas about anger from the first two?',
              success: 'Two paragraphs; comparative structure; three inferences total.',
            }),
          ],
        },
        {
          number: 12,
          pages: 'Ch. 27–29, pp. 225–248',
          keyVocabulary: [
            { en: 'truth' },
            { en: 'release' },
            { en: 'forgiveness' },
            { en: 'climax' },
            { en: 'catharsis' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Read Conor\'s confession ("I can\'t stand it anymore"); identify climax.',
              task: "Plot Conor's emotional arc across the novel.",
              success: 'Five plotted points with quote and emotion label.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.6', '8SL.1', '8SL.3'],
              do: 'Prepare 60-second structured talk: "How has Conor changed?"',
              task: 'Deliver to partner with opening/middle/end structure.',
              success: 'Three textual references; eye contact; clear voice.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8R.6', '8R.5'],
              do: 'Live-model two-paragraph response: Conor at start vs end.',
              task: 'Copy model; mark embedded quotes/inferences/terminology in three colours.',
              success: 'Three colours used to mark quote, inference, terminology.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8R.5', '8W.4'],
              do: 'Scaffolded two-paragraph comparative response.',
              task: '240-word response.',
              success:
                'Paired evidence across paragraphs; comparative connective; four inferences total.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.6', '8R.5', '8W.2', '8W.9'],
              do: 'Independent response + 5-minute edit.',
              task: '240-word two-paragraph response + visible edit.',
              success: 'Comparative structure; one self-correction; terminology used twice.',
            }),
          ],
        },
        {
          number: 13,
          pages: 'Whole novel review + final extracts',
          keyVocabulary: [
            { en: 'assessment' },
            { en: 'comparative' },
            { en: 'embedded' },
            { en: 'inference' },
            { en: 'terminology' },
          ],
          contextNote: { en: 'Term 1.2 assessment week.' },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Whole-text recap; echo-read key extracts (four monster visits).',
              task: 'Knowledge organiser: 5 characters, 3 motifs, 5 quotes.',
              success: 'Organiser complete with all elements.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['8R.6', '8SL.1', '8SL.3'],
              do: 'Group discussion: "Which character changes most?" Consensus + 90-second presentation.',
              task: 'Consensus reached; three textual references; all members contribute.',
              success: 'Consensus + textual evidence + universal participation.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['8W.4', '8R.6'],
              do: 'Model timed two-paragraph comparative response (25 mins).',
              task: 'Copy strategy: 5 min plan, 18 min write, 2 min check.',
              success: 'Strategy + one practice plan for a sample question.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['8R.1', '8R.3', '8R.7'],
              do: 'Google-Form reading quiz (20 questions, 25 mins).',
              task: 'T1.2 Reading Quiz — auto-marked.',
              success: 'Target 14/20; stretch 17/20.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.5', '8R.6', '8W.2', '8W.4', '8W.9'],
              do: 'Two-paragraph comparative response under timed conditions (25 mins + 5 min edit).',
              task: 'How does Ness present Conor at the start and end of the novel? (240-300 words)',
              success:
                'Two paragraphs + comparative connective; four embedded quotes; four inferences with "because"; terminology three times; visible self-edit.',
            }),
          ],
        },
      ],
    },
  ],
}

const Y8_T2: Year['terms'][number] = {
  number: 2,
  label: { en: 'Term 2 — Power and Protest', ar: 'الفصل الدراسي الثاني — السلطة والاحتجاج' },
  overview: {
    en: 'Speeches and rhetoric unit (Sojourner Truth, Churchill, MLK, Malala, Thunberg) + protest poetry (Blake "London", Shelley "Ozymandias", Agard "Checking Out Me History", Maya Angelou "Still I Rise"). Students learn rhetorical methods (tricolon, anaphora, ethos/pathos/logos) and USE them in their own writing.',
  },
  setText: { en: 'Speeches anthology + protest poetry curated selection' },
  vocabularyThemes: [
    { en: 'rhetoric, oratory, polemic, injustice' },
    { en: 'resistance, suffrage, civil rights, environment' },
  ],
  bigSkillJump: {
    en: 'Students can identify rhetorical method, USE it deliberately in their own writing, and speak persuasively to an audience.',
  },
  halfTerms: [
    {
      id: '2.1',
      label: { en: 'Term 2.1' },
      assessment: { en: "Analytical response comparing two speeches' methods." },
      weeks: [
        {
          number: 2,
          pages: 'Sojourner Truth, "Ain\'t I a Woman" (1851)',
          keyVocabulary: [
            { en: 'rhetorical question' },
            { en: 'anaphora' },
            { en: 'refrain' },
            { en: 'abolitionist' },
            { en: 'oratory' },
          ],
          contextNote: {
            en: "Former enslaved woman speaks at the 1851 Ohio Women's Convention, challenging race and gender hierarchies through lived experience.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read speech aloud; mark every rhetorical question.',
              task: 'Annotate the refrain "Ain\'t I a woman?" — count uses, label effect.',
              success: 'Identifies 4 uses of the refrain and names the technique.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.5', '8SL.1'],
              do: 'Discuss: why repeat the question?',
              task: 'Pair-talk using "This suggests… because…" to explore the refrain\'s power.',
              success: "Offers one developed inference building on a partner's point.",
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: "Model a PEE paragraph on Truth's use of anaphora.",
              task: 'Embed two short quotations into one coherent paragraph.',
              success: 'Paragraph has point, embedded quote, developed inference.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Compare rhetorical Q with statement — what changes?',
              task: "Rewrite one of Truth's questions as a statement; analyse loss of impact.",
              success: 'Explains why questions force the audience to answer mentally.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap success criteria.',
              task: 'How does Truth use repetition to challenge her audience?',
              success: 'Embedded quote, technique named, "This suggests…" inference.',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Churchill, "We Shall Fight on the Beaches" (1940)',
          keyVocabulary: [
            { en: 'anaphora' },
            { en: 'tricolon' },
            { en: 'juxtaposition' },
            { en: 'resolve' },
            { en: 'rhetoric' },
          ],
          contextNote: {
            en: 'June 1940, after Dunkirk. Britain stands largely alone against Nazi Germany. The speech is engineered to steel the nation.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Listen to the recording; track every "we shall".',
              task: 'Highlight all anaphora; underline tricolons in another colour.',
              success: 'Locates 6+ "we shall" repetitions and one tricolon.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why list every location of fighting?',
              task: 'Group talk: what feeling does the cumulative list create?',
              success: 'Links technique to effect on wartime audience.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8W.2', '8W.7'],
              do: 'Model: "Churchill uses anaphora to suggest…".',
              task: 'Write a paragraph analysing the "we shall fight" sequence.',
              success: 'Sentence stem used; effect on audience explained.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8W.5', '8W.7'],
              do: 'Examine juxtaposition of "old" vs "new" world.',
              task: 'Find one juxtaposition; explain what each side represents.',
              success: 'Two contrasting ideas named; effect of contrast explained.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Plan paragraph structure on board.',
              task: 'How does Churchill build defiance?',
              success: 'Two techniques analysed; quotation embedded accurately.',
            }),
          ],
        },
        {
          number: 4,
          pages: 'Martin Luther King Jr, "I Have a Dream" (1963)',
          keyVocabulary: [
            { en: 'metaphor' },
            { en: 'allusion' },
            { en: 'repetition' },
            { en: 'segregation' },
            { en: 'civil rights' },
          ],
          contextNote: {
            en: 'March on Washington, August 1963. Demands an end to racial segregation. Draws on biblical and constitutional language.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read "I have a dream" passage; mark each repetition.',
              task: 'List the dream images; classify (family, geography, biblical).',
              success: 'Groups 5+ dream images into themed clusters.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.2'],
              do: 'Discuss: why "dream" not "plan"?',
              task: 'Talk in threes — what does the metaphor offer the audience?',
              success: 'Articulates that "dream" frames change as inevitable/hopeful.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model analysis of the "table of brotherhood" metaphor.',
              task: "Write paragraph: King's use of metaphor to suggest unity.",
              success: 'Metaphor unpacked literally and figuratively.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.5'],
              do: 'Identify biblical allusions ("valley", "mountain").',
              task: 'Match allusions to effects; one sentence on each.',
              success: 'Recognises allusion as borrowed authority.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Review analytical paragraph structure.',
              task: 'How does King use imagery to inspire change?',
              success: 'Two quotations embedded; metaphor effect explored.',
            }),
          ],
        },
        {
          number: 5,
          pages: 'Malala Yousafzai, UN Youth Assembly (2013)',
          keyVocabulary: [
            { en: 'direct address' },
            { en: 'anecdote' },
            { en: 'call to action' },
            { en: 'advocacy' },
            { en: 'pronoun shift' },
          ],
          contextNote: {
            en: "Delivered on her 16th birthday, months after being shot for advocating girls' education. Addressed to world leaders.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read speech; circle every "we", "I", "you".',
              task: 'Tally pronouns by section; chart the shifts.',
              success: 'Notices movement from "I" to "we" to "you".',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why open with personal anecdote?',
              task: 'Pair talk — does shared experience build trust?',
              success: 'Connects anecdote to ethos and authority.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8W.2', '8W.4'],
              do: 'Model paragraph on pronoun shift "I" → "we".',
              task: 'Write analysis showing how "we" includes the audience.',
              success: 'Effect of inclusive pronoun explained clearly.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8W.7', '8SL.2'],
              do: 'Examine her closing call to action.',
              task: 'Identify imperatives; rewrite one as a question — compare.',
              success: 'Explains why imperatives feel urgent.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap: anecdote + pronoun + imperative.',
              task: 'How does Malala move her audience to act?',
              success: 'Three techniques covered; embedded quotation.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Greta Thunberg, "How Dare You" UN speech (2019)',
          keyVocabulary: [
            { en: 'tone' },
            { en: 'fact stacking' },
            { en: 'accusation' },
            { en: 'rhetorical anger' },
            { en: 'urgency' },
          ],
          contextNote: {
            en: 'UN Climate Action Summit, September 2019. 16-year-old activist accuses world leaders of inaction.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Watch clip; track tone shifts on a graph.',
              task: 'Mark moments of anger; list facts she stacks together.',
              success: 'Identifies 3 tonal peaks and 4 stacked facts.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.6', '8SL.1'],
              do: "Compare Thunberg's anger with Truth's repetition.",
              task: 'Pair-talk: "Both speakers… but Thunberg…".',
              success: 'Uses comparative stem to note one similarity and one difference.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model paragraph: anger as a deliberate rhetorical device.',
              task: 'Analyse "How dare you" — repetition and tone.',
              success: 'Tone named; effect on listener explained.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Examine fact stacking — why list data?',
              task: 'Two sentences on cumulative effect of statistics.',
              success: 'Connects facts to credibility/urgency.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8R.6', '8W.2'],
              do: "Bridge to next week's comparative assessment.",
              task: 'Plan a comparison of Thunberg and one earlier speaker.',
              success: 'Plan names 2 shared techniques and one contrast.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'HT1 Assessment — comparative analytical response',
          keyVocabulary: [
            { en: 'compare' },
            { en: 'contrast' },
            { en: 'method' },
            { en: 'purpose' },
            { en: 'audience' },
          ],
          contextNote: {
            en: 'Assessment week. Compare how two speakers studied this half-term use language to persuade.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.1', '8R.6', '8R.7'],
              do: 'Recap each speech; revisit techniques grid.',
              task: 'Choose 2 speakers; list 3 shared methods.',
              success: 'Grid completed with quotations beside each method.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['8R.5', '8R.6', '8SL.1'],
              do: 'Model "Both speakers… however…" stems.',
              task: 'Talk through your chosen pair with a partner.',
              success: 'Argues one similarity and one difference aloud.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8W.2', '8W.4'],
              do: 'Model a comparative paragraph with two embedded quotes.',
              task: 'Write opening comparative paragraph in note form.',
              success: 'Both speakers referenced in one coherent paragraph.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['8W.2', '8W.3', '8W.9'],
              do: 'Walkthrough timed conditions and success criteria.',
              task: 'Plan full response (10-min planning).',
              success: 'Plan covers 3 comparative points with quotations.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['8R.2', '8R.5', '8R.6', '8W.2', '8W.3'],
              do: '45-minute assessment.',
              task: 'Compare how two speakers persuade their audiences.',
              success: '3 comparative paragraphs; quotations embedded; clear stance.',
            }),
          ],
        },
      ],
    },
    {
      id: '2.2',
      label: { en: 'Term 2.2' },
      assessment: { en: 'Write AND deliver own 3-minute speech on a chosen cause.' },
      weeks: [
        {
          number: 8,
          pages: 'William Blake, "London" (1794)',
          keyVocabulary: [
            { en: 'list' },
            { en: 'repetition' },
            { en: 'oppression' },
            { en: 'chartered' },
            { en: 'manacles' },
          ],
          contextNote: {
            en: 'Blake walks through industrial London. Attacks church, monarchy and commerce for trapping the poor.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read aloud; mark every repeated word.',
              task: 'Highlight "every" — count uses; annotate "chartered".',
              success: 'Lists 4 uses of "every"; defines "chartered".',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.5', '8SL.1'],
              do: 'Discuss: what does repetition of "every" suggest?',
              task: 'Pair-talk using "This suggests… because…".',
              success: 'Inference links repetition to inescapability.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: "Model paragraph: Blake's use of listing.",
              task: 'Analyse list of victims (infant, soldier, harlot).',
              success: 'Embedded quote + inference + technique named.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Explore "mind-forged manacles" metaphor.',
              task: 'Two sentences on physical vs mental imprisonment.',
              success: 'Explains metaphor literally and figuratively.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Review analytical structure.',
              task: 'How does Blake protest against injustice?',
              success: 'Two techniques covered; sentence stem used.',
            }),
          ],
        },
        {
          number: 9,
          pages: 'Percy Shelley, "Ozymandias" (1818)',
          keyVocabulary: [
            { en: 'irony' },
            { en: 'frame narrative' },
            { en: 'sonnet' },
            { en: 'hubris' },
            { en: 'ephemeral' },
          ],
          contextNote: {
            en: 'Romantic-era sonnet on a ruined statue of Pharaoh Ramesses II. Mocks the arrogance of tyrants and the impermanence of power.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read sonnet; identify three voices.',
              task: 'Map frame: poet → traveller → statue inscription.',
              success: 'Diagram shows three layered narrators.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why hide Ozymandias behind two narrators?',
              task: 'Pair-talk — what does distance do to his authority?',
              success: 'Frame undermines his claim to power.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model: "Shelley uses irony to suggest…".',
              task: 'Analyse "Look on my Works… and despair!" vs the wreckage.',
              success: 'Gap between claim and reality explained as irony.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8R.7', '8W.7'],
              do: "Compare Shelley's and Blake's view of power.",
              task: 'Bullet 2 similarities and one difference.',
              success: '"Both poets…" used at least once.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap analytical paragraph criteria.',
              task: 'How does Shelley present the fragility of power?',
              success: 'Embedded quote + irony explained + sentence stem.',
            }),
          ],
        },
        {
          number: 10,
          pages: 'John Agard, "Checking Out Me History" (2007)',
          keyVocabulary: [
            { en: 'dialect' },
            { en: 'direct address' },
            { en: 'identity' },
            { en: 'colonial' },
            { en: 'reclaim' },
          ],
          contextNote: {
            en: 'Guyanese-British poet protests how British schools taught white history while erasing Black figures like Toussaint and Nanny.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read aloud; note non-standard spellings.',
              task: 'Underline dialect features; identify "Dem" as accusation.',
              success: 'Spots 5 dialect features; glosses "Dem tell me".',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why write in dialect not Standard English?',
              task: 'Pair-talk on dialect as resistance.',
              success: 'Connects dialect to identity and protest.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: "Model paragraph: Agard's use of direct address.",
              task: 'Analyse "Dem tell me" — who is "dem"?',
              success: 'Pronoun analysed for accusation and division.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Examine contrast between nursery rhymes and Toussaint.',
              task: 'Bullet 2 contrasts in tone, content, line length.',
              success: 'Recognises reclaiming as structural device.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap success criteria.',
              task: 'How does Agard protest erasure?',
              success: 'Two techniques; sentence stem; embedded quote.',
            }),
          ],
        },
        {
          number: 11,
          pages: 'Maya Angelou, "Still I Rise" (1978)',
          keyVocabulary: [
            { en: 'extended metaphor' },
            { en: 'anaphora' },
            { en: 'defiance' },
            { en: 'simile' },
            { en: 'cadence' },
          ],
          contextNote: {
            en: 'African-American poet responds to racism, sexism and historical oppression with proud defiance.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read aloud; track every "I rise".',
              task: 'Highlight the refrain; list natural images (dust, tides, air).',
              success: 'Locates 6+ refrains and 4 natural images.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: how is "rise" both literal and metaphor?',
              task: 'Pair-talk on extended metaphor of natural cycles.',
              success: 'Connects rising to unstoppable nature.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model: "Angelou uses extended metaphor to suggest…".',
              task: 'Analyse natural imagery as a metaphor for resilience.',
              success: 'Pattern of images linked to single overall idea.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8R.7', '8W.7'],
              do: "Compare Angelou's defiance with Truth's (Week 2).",
              task: '"Both speakers…" — write 2 comparative sentences.',
              success: 'One similarity and one difference noted.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap analytical paragraph criteria.',
              task: 'How does Angelou present unstoppable defiance?',
              success: 'Extended metaphor analysed; quote embedded.',
            }),
          ],
        },
        {
          number: 12,
          pages: 'Planning your own 3-minute persuasive speech',
          keyVocabulary: [
            { en: 'purpose' },
            { en: 'audience' },
            { en: 'rhetorical structure' },
            { en: 'hook' },
            { en: 'call to action' },
          ],
          contextNote: {
            en: 'Apply rhetorical techniques studied this term. Choose a cause you care about. Draft, rehearse, refine.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.6', '8R.7'],
              do: 'Re-skim techniques bank from Weeks 2–11.',
              task: 'Pick 4 techniques to use; note model speeches for each.',
              success: 'Techniques chosen with named examples.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8SL.1', '8SL.2', '8W.6'],
              do: 'Brainstorm causes; discuss audience.',
              task: 'Pair-talk: pitch 3 cause ideas; choose strongest.',
              success: 'Cause chosen with named target audience.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.1', '8W.2', '8W.7'],
              do: 'Model speech structure: hook, problem, solution, call.',
              task: 'Draft opening hook and thesis (50–80 words).',
              success: 'Hook grabs attention; thesis is one clear sentence.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.4', '8W.5', '8W.10'],
              do: 'Workshop anaphora, tricolon, direct address.',
              task: 'Draft middle of speech using 3 techniques.',
              success: 'Each technique marked in the margin.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8W.2', '8W.3', '8W.9', '8SL.3'],
              do: 'Self-edit with checklist.',
              task: 'Complete full 3-minute draft; rehearse aloud.',
              success: 'Draft has hook, 3 techniques, call to action.',
            }),
          ],
        },
        {
          number: 13,
          pages: 'HT2 Assessment — deliver your speech',
          keyVocabulary: [
            { en: 'pace' },
            { en: 'volume' },
            { en: 'emphasis' },
            { en: 'eye contact' },
            { en: 'pause' },
          ],
          contextNote: {
            en: 'Spoken language assessment. Deliver your 3-minute speech to the class with structured peer feedback.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8SL.2', '8SL.3'],
              do: 'Model strong delivery — pace, pause, emphasis.',
              task: 'Mark up your script for pauses and emphasis.',
              success: 'Script annotated with at least 5 delivery cues.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['8SL.1', '8SL.2', '8W.9'],
              do: 'Set peer-feedback grid (content/delivery/impact).',
              task: 'Rehearse in pairs; receive one improvement.',
              success: 'One improvement actioned in margin.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.3', '8W.9'],
              do: 'Final edit for SPaG and clarity.',
              task: 'Proofread script aloud; correct errors.',
              success: 'Three SPaG corrections logged.',
            }),
            lesson({
              focus: 'application',
              skills: ['8SL.2', '8SL.3'],
              do: 'First half delivers speeches.',
              task: 'Deliver speech; complete listener feedback for others.',
              success: 'Clear voice, eye contact, structured delivery.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['8SL.1', '8SL.2', '8SL.3'],
              do: 'Second half delivers; whole-class reflection.',
              task: 'Deliver speech; identify your strongest technique.',
              success: 'Speech delivered within time with 3 techniques used.',
            }),
          ],
        },
      ],
    },
  ],
}

const Y8_T3: Year['terms'][number] = {
  number: 3,
  label: { en: 'Term 3 — Gothic and the Uncanny', ar: 'الفصل الدراسي الثالث — القوطية والغرابة' },
  overview: {
    en: 'Gothic anthology — extracts from *Frankenstein*, *Jekyll and Hyde*, *Dracula*, Poe\'s "Tell-Tale Heart", modern Gothic (Susan Hill, Gaiman). Anchors: convention, setting as character, the doppelganger, pre-1914 prose stamina. Direct GCSE feeder.',
  },
  setText: {
    en: 'Gothic anthology — extracts from Shelley, Stevenson, Stoker, Poe + modern Gothic',
  },
  vocabularyThemes: [
    { en: 'sublime, uncanny, transgression, hubris' },
    { en: 'atmosphere, pathetic fallacy, foreboding, decay' },
  ],
  bigSkillJump: {
    en: 'Students can sustain atmosphere across an extended descriptive piece and recognise genre conventions across 200 years of writing.',
  },
  halfTerms: [
    {
      id: '3.1',
      label: { en: 'Term 3.1' },
      assessment: { en: 'Analytical essay on a Gothic extract.' },
      weeks: [
        {
          number: 2,
          pages: "Gothic conventions + Frankenstein opening (Walton's letter)",
          keyVocabulary: [
            { en: 'sublime' },
            { en: 'uncanny' },
            { en: 'foreboding' },
            { en: 'isolation' },
            { en: 'pathetic fallacy' },
          ],
          contextNote: {
            en: "Mary Shelley, 1818. Walton's polar voyage letters open the novel. Establishes Gothic landscape and unease.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Introduce Gothic conventions checklist.',
              task: "Read Walton's letter; tick each convention you find.",
              success: '4+ conventions identified with line references.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: what makes the Arctic "sublime"?',
              task: 'Pair-talk using "This suggests… because…".',
              success: 'Links landscape to feelings of awe and fear.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model: "Shelley uses setting to suggest…".',
              task: "Write paragraph on isolation in Walton's letter.",
              success: 'Two quotations embedded; setting linked to feeling.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Identify foreboding signals (weather, silence).',
              task: 'Highlight 3 foreboding details; explain each.',
              success: 'Each detail linked to atmosphere of unease.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap paragraph criteria.',
              task: 'How does Shelley create a Gothic atmosphere?',
              success: 'Two conventions analysed; sentence stem used.',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Frankenstein Chapter 5 — creation scene',
          keyVocabulary: [
            { en: 'hubris' },
            { en: 'horror' },
            { en: 'transgression' },
            { en: 'animation' },
            { en: 'monstrous' },
          ],
          contextNote: {
            en: 'Victor brings the creature to life on "a dreary night of November". The moment realises his ambition and his ruin.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read Ch. 5 opening together.',
              task: 'Annotate physical description of the creature.',
              success: 'Identifies 5 adjectives of horror or revulsion.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: hubris — why is reaching too far Gothic?',
              task: "Pair-talk on Victor's ambition vs his reaction.",
              success: 'Notes the gap between dream and reality.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: "Model paragraph: Shelley's use of contrast.",
              task: 'Analyse "beautiful" features vs overall horror.',
              success: 'Contrast unpicked; effect on reader explained.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Examine pathetic fallacy in opening line.',
              task: 'Annotate the weather; link to mood.',
              success: "Weather connected to Victor's emotional state.",
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Plan paragraph as a class.',
              task: 'How does Shelley present hubris?',
              success: 'Two techniques analysed; sentence stem used.',
            }),
          ],
        },
        {
          number: 4,
          pages: 'Stevenson, Jekyll and Hyde — the door scene',
          keyVocabulary: [
            { en: 'doppelganger' },
            { en: 'duality' },
            { en: 'repression' },
            { en: 'sinister' },
            { en: 'threshold' },
          ],
          contextNote: {
            en: 'Stevenson, 1886. Utterson and Enfield see the strange door where Hyde tramples a child. Sets up the duality at the heart of the novella.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read door description aloud.',
              task: 'Highlight every word suggesting neglect or threat.',
              success: '6+ negative adjectives identified.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why focus a whole scene on a door?',
              task: 'Pair-talk on the door as threshold/symbol.',
              success: 'Door linked to hidden/secret self.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model: "Stevenson uses setting to suggest…".',
              task: 'Write paragraph on the door as Gothic symbol.',
              success: 'Symbol explained; quote embedded; effect named.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Introduce doppelganger concept.',
              task: 'Bullet-list how Hyde mirrors Jekyll.',
              success: 'Recognises two sides of one identity.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap paragraph criteria.',
              task: 'How does Stevenson present the sinister?',
              success: 'Sentence stem used; two embedded quotes.',
            }),
          ],
        },
        {
          number: 5,
          pages: "Stoker, Dracula — Harker's journey to the castle",
          keyVocabulary: [
            { en: 'atmosphere' },
            { en: 'foreigner' },
            { en: 'omen' },
            { en: 'liminal' },
            { en: 'wilderness' },
          ],
          contextNote: {
            en: "Bram Stoker, 1897. Jonathan Harker travels through Transylvania to Dracula's castle. Builds atmosphere through landscape, locals' warnings and omens.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: "Read journey extract; map Harker's route.",
              task: 'List warnings, weather changes, animal omens.',
              success: '5+ atmospheric details identified.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why so many warnings before arrival?',
              task: 'Pair-talk on dramatic delay/withholding.',
              success: 'Links delay to building dread.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: "Model paragraph: Stoker's use of atmosphere.",
              task: 'Analyse one moment using "This suggests… because…".',
              success: 'Embedded quotation; mood named clearly.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.6', '8R.7', '8W.7'],
              do: "Compare Stoker's and Shelley's landscapes.",
              task: 'Bullet 2 similarities and one difference.',
              success: '"Both writers…" used at least once.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Plan paragraph collaboratively.',
              task: 'How does Stoker build dread?',
              success: 'Two atmospheric devices analysed.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Poe, "The Tell-Tale Heart" (1843)',
          keyVocabulary: [
            { en: 'unreliable narrator' },
            { en: 'paranoia' },
            { en: 'first person' },
            { en: 'fragmented syntax' },
            { en: 'obsession' },
          ],
          contextNote: {
            en: "Poe's short story. Narrator insists on his sanity while confessing to murder. The reader doubts his every word.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Read opening; mark every claim of sanity.',
              task: 'Tally exclamation marks and dashes per paragraph.',
              success: 'Notes 4+ punctuation patterns linked to panic.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why do we distrust the narrator?',
              task: 'Pair-talk on unreliable narration.',
              success: 'Connects short sentences to mental instability.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8R.4', '8W.2'],
              do: 'Model: "Poe uses fragmented syntax to suggest…".',
              task: "Write paragraph on the narrator's voice.",
              success: 'Two techniques covered; quote embedded.',
            }),
            lesson({
              focus: 'application',
              skills: ['8R.4', '8R.7', '8W.7'],
              do: 'Examine the heartbeat motif.',
              task: 'Track every reference to the heartbeat; chart intensity.',
              success: 'Motif linked to rising guilt/madness.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8R.2', '8R.5', '8W.2', '8W.3'],
              do: 'Recap paragraph criteria.',
              task: "How does Poe show the narrator's madness?",
              success: 'Sentence stem; two techniques; embedded quotes.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'HT1 Assessment — analytical essay on a Gothic extract',
          keyVocabulary: [
            { en: 'analyse' },
            { en: 'convention' },
            { en: 'method' },
            { en: 'effect' },
            { en: 'reader' },
          ],
          contextNote: {
            en: 'Assessment week. Analyse how a Gothic writer creates atmosphere and unease.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.1', '8R.7'],
              do: 'Issue unseen Gothic extract; first read silently.',
              task: 'Annotate for Gothic conventions checklist.',
              success: '4+ conventions identified with quotes.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['8R.3', '8R.5', '8SL.1'],
              do: 'Talk through the extract with sentence stems.',
              task: 'Pair-talk on "What suggests… because…".',
              success: 'Three inferences shared aloud.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8R.2', '8W.2', '8W.4'],
              do: 'Model an opening analytical paragraph.',
              task: 'Plan essay: 3 paragraph points + quotes.',
              success: 'Plan complete; each paragraph has clear focus.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['8W.2', '8W.3', '8W.9'],
              do: 'Walkthrough success criteria.',
              task: 'Write opening paragraph in note form.',
              success: 'Topic sentence + embedded quote + inference.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['8R.2', '8R.4', '8R.5', '8W.2', '8W.3'],
              do: '45-minute assessment.',
              task: 'How does the writer create a Gothic atmosphere?',
              success: '3 analytical paragraphs; quotes embedded; stems used.',
            }),
          ],
        },
      ],
    },
    {
      id: '3.2',
      label: { en: 'Term 3.2' },
      assessment: { en: 'Own Gothic short story (1,500 words, redrafted).' },
      weeks: [
        {
          number: 8,
          pages: 'Building atmosphere — pathetic fallacy (modelling)',
          keyVocabulary: [
            { en: 'pathetic fallacy' },
            { en: 'mood' },
            { en: 'sensory detail' },
            { en: 'simile' },
            { en: 'personification' },
          ],
          contextNote: {
            en: 'Begin transition from reading to writing. Use Gothic models as scaffolds. Weather and setting carry mood.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.4', '8R.7'],
              do: 'Re-read Frankenstein Ch. 5 opening.',
              task: 'List sensory details (sight, sound, touch).',
              success: 'Identifies 5 sensory details across two senses.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.5', '8SL.1'],
              do: 'Discuss: how does weather mirror feeling?',
              task: 'Pair-talk on pathetic fallacy in model texts.',
              success: 'Matches 3 weather details to 3 emotions.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8W.5', '8W.7'],
              do: 'Model a 50-word opening using pathetic fallacy.',
              task: 'Draft an opening — weather-led setting.',
              success: 'Three sensory details + named mood.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.4', '8W.7', '8W.10'],
              do: 'Workshop similes and personification.',
              task: 'Rewrite your opening with one of each technique.',
              success: 'Simile + personification marked in margin.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8W.2', '8W.3', '8W.9'],
              do: 'Self-edit checklist.',
              task: 'Finalise atmospheric opening (100 words).',
              success: 'Pathetic fallacy + 3 sensory details + mood.',
            }),
          ],
        },
        {
          number: 9,
          pages: 'Character and setting in Gothic writing',
          keyVocabulary: [
            { en: 'protagonist' },
            { en: 'isolation' },
            { en: 'characterisation' },
            { en: 'setting' },
            { en: 'archetype' },
          ],
          contextNote: {
            en: 'Gothic characters are isolated, curious, or haunted. Settings reflect or trap them. Build both together.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.4', '8R.7'],
              do: "Re-read Harker's arrival at Dracula's castle.",
              task: 'List details showing isolation and powerlessness.',
              success: 'Identifies 5 isolating details.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.5', '8SL.1'],
              do: 'Discuss: how does setting trap the character?',
              task: 'Pair-talk on character/setting interaction.',
              success: 'Articulates how setting deepens mood.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.4', '8W.5', '8W.7'],
              do: 'Model a paragraph introducing protagonist via setting.',
              task: 'Draft 80 words introducing your character in setting.',
              success: 'Character revealed indirectly through environment.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.4', '8W.6', '8W.10'],
              do: 'Workshop interior thought + physical reaction.',
              task: 'Add 2 sentences of internal monologue.',
              success: 'Thought + physical reaction balanced.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8W.2', '8W.3', '8W.9'],
              do: 'Self-edit; share with partner.',
              task: 'Polish character-in-setting passage (150 words).',
              success: "Setting reflects character's feeling clearly.",
            }),
          ],
        },
        {
          number: 10,
          pages: 'Structuring tension — pacing and withholding',
          keyVocabulary: [
            { en: 'pacing' },
            { en: 'foreshadowing' },
            { en: 'cliffhanger' },
            { en: 'withholding' },
            { en: 'reveal' },
          ],
          contextNote: {
            en: 'Gothic stories build slowly, hint, then reveal late. Sentence length controls pace.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['8R.4', '8R.7'],
              do: 'Re-read Tell-Tale Heart climax.',
              task: 'Mark sentence lengths; chart by paragraph.',
              success: 'Shows how short sentences cluster at climax.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8R.3', '8R.4', '8SL.1'],
              do: 'Discuss: why withhold information?',
              task: 'Pair-talk on hints vs reveals.',
              success: 'Links delay to suspense.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.5', '8W.7'],
              do: 'Model varying sentence length to control pace.',
              task: 'Rewrite a paragraph: long sentences early, short later.',
              success: 'Visible shift in sentence rhythm.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.4', '8W.7', '8W.10'],
              do: 'Workshop foreshadowing — plant a clue.',
              task: 'Add one foreshadowing detail to your draft.',
              success: 'Clue planted; pays off later.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8W.2', '8W.5', '8W.9'],
              do: 'Plot your story arc on a tension graph.',
              task: 'Map opening → build → climax → reveal in 5 stages.',
              success: 'Plan complete with pacing notes.',
            }),
          ],
        },
        {
          number: 11,
          pages: 'Drafting your own Gothic story',
          keyVocabulary: [
            { en: 'draft' },
            { en: 'continuity' },
            { en: 'cohesion' },
            { en: 'register' },
            { en: 'voice' },
          ],
          contextNote: {
            en: 'Bring atmosphere, character, structure together. Aim for 1200-1500 words.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.6', '8R.7'],
              do: 'Re-skim model openings from the term.',
              task: 'Choose techniques you will borrow; list 4.',
              success: 'Technique bank ready in margin.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['8SL.1', '8W.6'],
              do: 'Pair-talk through full plan.',
              task: 'Talk story aloud; note 2 partner suggestions.',
              success: 'Two improvements marked on plan.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.1', '8W.2', '8W.4'],
              do: 'Model opening 100 words live.',
              task: 'Draft your opening 200 words.',
              success: 'Atmosphere + character introduced.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.4', '8W.5', '8W.7'],
              do: 'Continue drafting middle section.',
              task: 'Add 400-500 words: build and complication.',
              success: 'Tension builds; foreshadowing visible.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8W.2', '8W.3', '8W.4', '8W.9'],
              do: 'Continue to climax and ending.',
              task: 'Complete first draft (1200+ words).',
              success: 'Story has full arc with Gothic ending.',
            }),
          ],
        },
        {
          number: 12,
          pages: 'Peer review and redrafting',
          keyVocabulary: [
            { en: 'review' },
            { en: 'redraft' },
            { en: 'feedback' },
            { en: 'coherence' },
            { en: 'edit' },
          ],
          contextNote: {
            en: 'Improve drafts through structured peer feedback and targeted redrafting.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.1', '8R.4'],
              do: 'Model reading a draft critically.',
              task: "Read partner's draft; mark 3 strengths and 3 targets.",
              success: 'Feedback uses Gothic checklist.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['8SL.1', '8SL.2', '8W.9'],
              do: 'Structured feedback in pairs.',
              task: 'Talk through targets; agree priority redrafts.',
              success: 'Two priority targets agreed.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.9', '8W.10'],
              do: 'Model how to redraft a paragraph for atmosphere.',
              task: 'Redraft your weakest atmospheric paragraph.',
              success: 'Visible improvement in mood/sensory detail.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.3', '8W.5', '8W.9'],
              do: 'Workshop SPaG — punctuation for tension.',
              task: 'Proofread story; correct 5+ SPaG errors.',
              success: 'Errors logged; punctuation deliberate.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['8W.2', '8W.3', '8W.9', '8W.10'],
              do: 'Final polish before assessment.',
              task: 'Complete redraft; check word count and pacing.',
              success: 'Story ready for assessment submission.',
            }),
          ],
        },
        {
          number: 13,
          pages: 'HT2 Assessment — final Gothic short story (1500 words)',
          keyVocabulary: [
            { en: 'final draft' },
            { en: 'assessment' },
            { en: 'reflection' },
            { en: 'craft' },
            { en: 'evaluate' },
          ],
          contextNote: { en: 'Final assessment: polished Gothic short story of ~1500 words.' },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['8R.6', '8R.7'],
              do: 'Recap success criteria for Gothic writing.',
              task: 'Annotate your draft against criteria.',
              success: 'Every criterion ticked or flagged.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['8SL.1', '8SL.2'],
              do: 'Pair-share one strong passage aloud.',
              task: 'Hear one improvement suggestion.',
              success: 'Last-minute improvement noted.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['8W.3', '8W.9'],
              do: 'Final SPaG and clarity check.',
              task: 'Proofread top-to-bottom for errors.',
              success: 'Final corrections logged.',
            }),
            lesson({
              focus: 'application',
              skills: ['8W.1', '8W.2', '8W.4', '8W.7'],
              do: 'Begin supervised final write-up.',
              task: 'Write/type final version under classroom conditions.',
              success: 'First 750 words completed neatly.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['8W.1', '8W.2', '8W.3', '8W.4', '8W.7', '8W.9'],
              do: 'Complete and submit final assessment.',
              task: 'Finish story (1500 words); brief written reflection.',
              success: 'Full story submitted; reflection names 2 craft choices.',
            }),
          ],
        },
      ],
    },
  ],
}

export const YEAR_8: Year = {
  number: 8,
  name: { en: 'Year 8 — Development', ar: 'السنة الثامنة — التطوير' },
  overview: {
    en: 'Year 8 deepens the analytical bar. Students move from Y7\'s "This shows…" to "This suggests… because…", from single inferences to multiple inferences per quote, from parallel character work to genuine comparative analysis. The year covers a contemporary novel (T1), rhetorical speeches + protest poetry (T2), and Gothic literature (T3).',
  },
  yearlyExpectations: {
    reading: [
      { en: '8R.1 — Understand explicit and implicit meanings in increasingly challenging texts.' },
      { en: '8R.2 — Select and embed relevant quotations.' },
      { en: '8R.3 — Make clear, developed inferences using evidence.' },
      { en: '8R.4 — Explain how writers use language and structure to shape meaning.' },
      { en: '8R.5 — Explain effects using "This suggests… because…".' },
      { en: '8R.6 — Explain similarities and differences across texts.' },
      { en: '8R.7 — Use subject terminology with growing accuracy.' },
    ],
    writing: [
      { en: '8W.1 — Write for a range of purposes (argue, describe, narrate, explain).' },
      { en: '8W.2 — Logically organised, coherent paragraphs.' },
      { en: '8W.3 — Accurate punctuation and spelling.' },
      { en: '8W.4 — Develop ideas with clear explanation and supporting detail.' },
      { en: '8W.5 — Range of sentence structures deliberately for effect.' },
      { en: '8W.6 — Write from different perspectives.' },
      { en: '8W.7 — Use structure, imagery and tone deliberately.' },
    ],
    language: [
      { en: '8W.8 — Standard English / formal vs informal register.' },
      { en: '8W.9 — Edit and improve writing.' },
      { en: '8W.10 — Adapt vocabulary and sentence structures for purpose and audience.' },
    ],
    speaking: [
      { en: "8SL.1 — Build on others' ideas." },
      { en: '8SL.2 — Speak clearly and confidently in range of contexts.' },
      { en: '8SL.3 — Present ideas in a structured, organised way.' },
    ],
  },
  rubric: [],
  terms: [Y8_T1, Y8_T2, Y8_T3],
}
