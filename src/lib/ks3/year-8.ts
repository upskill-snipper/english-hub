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
      weeks: [],
    },
    {
      id: '2.2',
      label: { en: 'Term 2.2' },
      assessment: { en: 'Write AND deliver own 3-minute speech on a chosen cause.' },
      weeks: [],
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
      weeks: [],
    },
    {
      id: '3.2',
      label: { en: 'Term 3.2' },
      assessment: { en: 'Own Gothic short story (1,500 words, redrafted).' },
      weeks: [],
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
