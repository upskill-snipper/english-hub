/**
 * Year 9 — Mastery.
 *
 * Set text in T1: Robert Louis Stevenson's *The Strange Case of Dr
 * Jekyll and Mr Hyde* (1886). Deliberately a GCSE set text already,
 * so students entering Y10 have deep textual knowledge of a likely
 * exam text. Late-Victorian prose pushes vocabulary stamina; the
 * thematic range (duality, repression, Darwinism, urban Gothic,
 * reputation, the unconscious) gives space for conceptual readings
 * and contextual framing.
 *
 * Sentence-stem progression: Y9 moves to "This suggests… which
 * reflects…" — methods analysed across texts, conceptual
 * interpretations, evaluation.
 */

import type { Year, Lesson, LessonFocus } from './types'

type Quick = { focus: LessonFocus; skills: string[]; do: string; task: string; success: string }
const lesson = (q: Quick): Lesson => ({
  focus: q.focus,
  skillCodes: q.skills,
  whatStudentsDo: { en: q.do },
  task: { en: q.task },
  successCriteria: { en: q.success },
})

const Y9_T1: Year['terms'][number] = {
  number: 1,
  label: { en: 'Term 1 — Autumn', ar: 'الفصل الدراسي الأول — الخريف' },
  overview: {
    en: "Year 9 opens with Stevenson's *Jekyll and Hyde* — a GCSE set text in its own right. Students write full literature essays by the end of Term 1: thesis-driven, embedded fluent quotations, methods analysis (language + structure + form), conceptual interpretations, evaluation. The novella's themes (duality, repression, Darwinism, urban Gothic) feed every Y9 reading skill simultaneously.",
    ar: 'تبدأ السنة التاسعة برواية ستيفنسون *Jekyll and Hyde* — نص مقرّر في GCSE. يكتب الطلاب مقالات أدبية كاملة بنهاية الفصل الأول.',
  },
  setText: { en: 'The Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson (1886)' },
  vocabularyThemes: [
    { en: 'gothic, zeitgeist, duality, repression, fin-de-siècle, atavistic, juggernaut' },
    { en: 'allegory, microcosm, paradigm, subversion, anxiety, hubris, dichotomy' },
  ],
  bigSkillJump: {
    en: 'Students arrive writing analytical paragraphs; they exit writing full thesis-driven literature essays with sustained conceptual readings — the core GCSE Literature skill, embedded a year early.',
  },
  halfTerms: [
    {
      id: '1.1',
      label: { en: 'Term 1.1 — First half', ar: 'الفصل 1.1 — النصف الأول' },
      assessment: {
        en: 'Analytical essay 35-40 mins: "Starting with this extract, explore how Stevenson presents the duality of human nature in *Jekyll and Hyde*." Full essay structure: thesis-driven intro, 2-3 conceptual body paragraphs, brief conclusion.',
      },
      weeks: [
        {
          number: 2,
          pages: 'Pre-reading context pack + "Story of the Door" pp. 1-3',
          keyVocabulary: [
            { en: 'gothic' },
            { en: 'zeitgeist' },
            { en: 'duality' },
            { en: 'repression' },
            { en: 'fin-de-siècle' },
          ],
          contextNote: { en: 'Gothic conventions and Victorian zeitgeist.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.1', '9R.7'],
              do: "Annotate context pack; map Gothic conventions onto Stevenson's London.",
              task: 'Identify 6 Gothic conventions in opening; cite 3 with textual evidence.',
              success: 'Cites 3 conventions; uses *gothic*, *zeitgeist* accurately.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.1'],
              do: 'Socratic seminar: "Why is the city itself a character?"',
              task: 'Build, challenge, extend peer interpretations across 4+ minute discussion.',
              success: 'Develop AND challenge a peer idea; sustained 4+ minute discussion.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.3', '9W.5'],
              do: 'Deconstruct exemplar topic sentences; identify conceptual framing verbs.',
              task: 'Rewrite 5 weak topic sentences using "Stevenson presents… in order to…".',
              success: 'Topic sentences foreground writer intent, not plot.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.4', '9W.3'],
              do: "Annotate Utterson's introduction; draft conceptual topic sentence + supporting analysis.",
              task: 'Paragraph: How does Stevenson present Utterson as the embodiment of Victorian respectability?',
              success: 'One conceptual paragraph with embedded quotation and "This reflects…".',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.3', '9W.10'],
              do: '25-minute independent extended paragraph, no scaffold.',
              task: 'Explore how Stevenson establishes a Gothic atmosphere in the opening.',
              success: '200+ words; two embedded quotations; conceptual reading articulated.',
            }),
          ],
        },
        {
          number: 3,
          pages: '"Story of the Door" — Enfield\'s account of Hyde trampling the girl (pp. 4-8)',
          keyVocabulary: [
            { en: 'atavistic' },
            { en: 'juggernaut' },
            { en: 'trampled' },
            { en: 'deformity' },
            { en: 'simian' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.1', '9R.7'],
              do: "Close-read Enfield's description with word-class colour coding.",
              task: 'Lexical-field analysis grid: animalistic / mechanical / supernatural.',
              success: 'Three semantic fields identified; link to Darwinian zeitgeist.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.3'],
              do: 'Three-way reading: literal / Darwinian / colonial readings of "juggernaut".',
              task: 'Structured debate: which reading is most powerful and why?',
              success: 'Articulate two distinct interpretations; structured analytical register.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.4', '9R.2'],
              do: 'Compare clunky vs fluent quotation integration; transformation exercise.',
              task: 'Rewrite 8 sentences embedding quotations within syntax.',
              success: 'All quotations embedded without "the quote says"; punctuation accurate.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.4', '9W.3', '9W.10'],
              do: "Build PETAL paragraph on Hyde's dehumanisation; teacher live-models then fades.",
              task: "Paragraph: how Stevenson dehumanises Hyde through Enfield's narration.",
              success: 'Method named precisely; effect explored across two layers.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.3', '9W.7'],
              do: '30-minute timed paragraph, no scaffold.',
              task: 'How does Stevenson present Hyde as monstrous in "Story of the Door"?',
              success: '250+ words; three embedded quotations; conceptual reading sustained.',
            }),
          ],
        },
        {
          number: 4,
          pages: '"Search for Mr Hyde" — Utterson\'s nightmare (pp. 9-17)',
          keyVocabulary: [
            { en: 'premonition' },
            { en: 'repression' },
            { en: 'foreshadowing' },
            { en: 'troglodytic' },
            { en: 'urbane' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.4', '9R.7'],
              do: 'Map narrative structure; identify proleptic imagery.',
              task: 'Storyboard the dream sequence; label structural devices.',
              success: 'Identifies *foreshadowing*, *prolepsis*, *symbolic dreaming*.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.1'],
              do: 'Mini-lecture on repression; Utterson as repressed Victorian.',
              task: 'Talking-points carousel: 4 conceptual readings rotated.',
              success: 'Engages with conceptual lens; challenges with textual evidence.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.2', '9W.4'],
              do: 'Combine simple sentences using subordination, parenthesis, semicolons.',
              task: 'Rewrite 6 paragraphs using varied sentence forms deliberately.',
              success: 'Demonstrates semi-colons, dashes, embedded clauses for effect.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.4', '9W.3', '9W.10'],
              do: 'Write paragraph analysing structure AND language together.',
              task: 'How does Stevenson build dread in the chapter?',
              success: 'One paragraph covering 2 methods with linked analysis.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.1', '9W.3'],
              do: 'Independent two-paragraph response with linking sentence.',
              task: "Explore how Stevenson presents Utterson's growing fear.",
              success: 'Two paragraphs that genuinely link; conceptual framing throughout.',
            }),
          ],
        },
        {
          number: 5,
          pages: '"The Carew Murder Case" (pp. 21-25)',
          keyVocabulary: [
            { en: 'brandished' },
            { en: 'ape-like' },
            { en: 'picturesque' },
            { en: 'savagery' },
            { en: 'gentility' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.4', '9R.7'],
              do: "Tone-mapping the maid's perspective; identify pathetic fallacy and irony.",
              task: 'Two-column contrast: aesthetic frame / brutal content.',
              success: 'Names *juxtaposition*, *pathetic fallacy*; explains destabilising effect.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.1'],
              do: "Group discussion: what does the victim's status add to Victorian horror?",
              task: 'Build a class conceptual reading on a shared doc.',
              success: "Develops a peer's idea; cites social-historical context.",
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.4', '9W.10'],
              do: 'Study Stevenson\'s short-sentence punch ("And next moment…"); imitation drills.',
              task: 'Rewrite a paragraph deliberately varying sentence length.',
              success: 'Uses deliberate short sentences; explains choice in margin annotation.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.5', '9W.3'],
              do: 'Introduce evaluation: how powerful and why?',
              task: "Paragraph evaluating murder scene's impact on a Victorian reader.",
              success: 'Uses "Stevenson\'s choice is particularly effective because…".',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.5', '9W.3', '9W.7'],
              do: '30-minute timed evaluative paragraph.',
              task: 'Evaluate how Stevenson shocks the reader in the murder scene.',
              success: 'Evaluative stance sustained; conceptual; 280+ words.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Cross-referenced extracts from Chapters 1-4',
          keyVocabulary: [
            { en: 'parallel' },
            { en: 'contrast' },
            { en: 'motif' },
            { en: 'characterisation' },
            { en: 'antithesis' },
          ],
          contextNote: { en: 'Comparative skills — half-term consolidation.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.6', '9R.7'],
              do: 'Construct a motif tracker: animal imagery across 4 chapters.',
              task: 'Evidence grid: chapter / quotation / pattern / development.',
              success: 'Identifies development of motif, not just repetition.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.6', '9SL.3'],
              do: 'Structured comparative talk: similarity AND difference.',
              task: 'Comparative speaking frame: "Both… however… ultimately…"',
              success: 'Sustained analytical register; structured comparison.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.1', '9W.3'],
              do: 'Study comparative discourse markers; teach "Whereas… Conversely… Both writers…"',
              task: 'Rewrite weak comparisons using sophisticated connectives.',
              success: 'At least 5 sophisticated comparative connectives used accurately.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.6', '9W.1', '9W.3'],
              do: 'Plan a comparative paragraph using two extracts.',
              task: "Comparative paragraph: Jekyll's house vs Hyde's Soho door.",
              success: 'Paragraph holds both extracts in tension throughout.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.6', '9W.1', '9W.3'],
              do: '30-minute independent comparative response.',
              task: "Compare how Stevenson presents Jekyll's and Hyde's living spaces.",
              success: 'Comparative throughout; not split into separate analyses.',
            }),
          ],
        },
        {
          number: 7,
          pages: '"Incident of the Letter" + "Remarkable Incident of Dr Lanyon" (pp. 26-34)',
          keyVocabulary: [
            { en: 'forgery' },
            { en: 'ostracised' },
            { en: 'hypocrisy' },
            { en: 'façade' },
            { en: 'conscience' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.3', '9R.7'],
              do: 'Teach *characterisation* as authorial choice; analyse Lanyon as foil.',
              task: 'Foil-chart: Lanyon vs Jekyll — beliefs, language, function.',
              success: "Frames characters as Stevenson's tools, not autonomous figures.",
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.1'],
              do: "Discussion: Lanyon's death as commentary on what?",
              task: 'Four-corners debate: science / faith / repression / hubris.',
              success: 'Takes and defends a conceptual position; revises on evidence.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.3', '9W.8'],
              do: 'Teach tentative critical voice: "perhaps, arguably, this might suggest…"',
              task: 'Rewrite assertive sentences as critically tentative.',
              success: 'Demonstrates tentative critical register.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.4', '9W.3', '9W.8'],
              do: 'Apply tentative critical voice to Lanyon analysis.',
              task: 'Paragraph: how Stevenson uses Lanyon to critique scientific hubris.',
              success: 'Two methods, tentative voice, conceptual framing.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.3', '9R.4', '9W.3'],
              do: '30-minute timed paragraph.',
              task: 'How does Stevenson use Lanyon to explore Victorian anxieties?',
              success: 'Character framed as authorial device throughout; 300+ words.',
            }),
          ],
        },
      ],
    },
    {
      id: '1.2',
      label: { en: 'Term 1.2 — Second half', ar: 'الفصل 1.2 — النصف الثاني' },
      assessment: { en: 'Term 1.2 formal essay — full multi-paragraph response.' },
      weeks: [
        {
          number: 8,
          pages: '"Incident at the Window" + opening of "The Last Night" (pp. 35-47)',
          keyVocabulary: [
            { en: 'transgression' },
            { en: 'climax' },
            { en: 'tension' },
            { en: 'suspense' },
            { en: 'denouement' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.4', '9R.7'],
              do: "Pacing-graph Stevenson's prose; identify withheld information.",
              task: 'Annotate "The Last Night" opening for structural choices.',
              success: 'Identifies *climax*, *suspense*, *withholding* with effect explained.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.1'],
              do: 'Discussion: the door as motif throughout the novella.',
              task: 'Build a thematic argument: "Doors and what they hide".',
              success: 'Sustained analytical register; threads evidence across novella.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.1', '9W.3'],
              do: 'Study and write thesis statements that govern a whole essay.',
              task: 'Draft 3 thesis statements for different essay questions.',
              success: 'Theses are conceptual, arguable, specific.',
            }),
            lesson({
              focus: 'application',
              skills: ['9W.1', '9W.3'],
              do: 'Plan a full essay on tension in "Last Night".',
              task: 'Essay plan: thesis, 3 conceptual topic sentences, evidence map.',
              success: 'Plan demonstrates cohesion; each topic sentence supports thesis.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.1', '9W.3'],
              do: '40-minute 2-paragraph response from plan.',
              task: 'How does Stevenson build tension in "The Last Night"?',
              success: 'Two paragraphs governed by a thesis; embedded quotations throughout.',
            }),
          ],
        },
        {
          number: 9,
          pages: '"Dr Lanyon\'s Narrative" (pp. 48-55)',
          keyVocabulary: [
            { en: 'epistolary' },
            { en: 'polyphonic' },
            { en: 'testimony' },
            { en: 'transformation' },
            { en: 'sublime' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.4', '9R.7'],
              do: 'Analyse the epistolary form; effects of voice-shift.',
              task: 'Voice-comparison table: Utterson narration vs Lanyon testimony.',
              success: 'Uses *epistolary*, *polyphonic*; explains effect of form.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9R.6', '9SL.1'],
              do: 'Compare Victorian and modern readings of the transformation.',
              task: '"What did this mean in 1886? What does it mean now?"',
              success: 'Articulates culturally-situated readings; develops peer ideas.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.6', '9W.10'],
              do: "Imitative writing: craft a paragraph of Gothic horror in Stevenson's mode.",
              task: 'Pastiche paragraph: Gothic transformation in their own setting.',
              success: 'Deliberate imagery, controlled syntax, sustained register.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.4', '9W.3', '9W.10'],
              do: "Three-method paragraph: how Lanyon's narrative works.",
              task: "Paragraph: Stevenson's use of form to deepen horror in Lanyon's account.",
              success: 'Three methods integrated, not listed; conceptual frame.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.3', '9W.7'],
              do: '30-minute analytical paragraph.',
              task: 'How does Stevenson use form, structure and language to present the transformation?',
              success: 'All three methods analysed; sustained conceptual reading; 320+ words.',
            }),
          ],
        },
        {
          number: 10,
          pages: '"Henry Jekyll\'s Full Statement" (pp. 56-70)',
          keyVocabulary: [
            { en: 'confession' },
            { en: 'hubris' },
            { en: 'dichotomy' },
            { en: 'conscience' },
            { en: 'oblivion' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.1', '9R.3', '9R.7'],
              do: "Identify Jekyll's evasions, justifications, contradictions.",
              task: "Highlight Jekyll's deflective language; label rhetorical moves.",
              success: 'Identifies *unreliable narrator*; explains self-deception.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9R.5', '9SL.1'],
              do: 'Whole-class debate with structured turn-taking.',
              task: 'Take and defend a conceptual position with textual evidence.',
              success: 'Develops AND challenges ideas; sustains analytical register.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.10', '9W.8'],
              do: 'Replace weak verbs with precise critical verbs: *exposes, undermines, complicates*.',
              task: 'Verb-replacement drill on a paragraph; quality not quantity.',
              success: 'Deliberate, varied verbs of interpretation throughout writing.',
            }),
            lesson({
              focus: 'application',
              skills: ['9R.3', '9W.1', '9W.3'],
              do: "Plan a 3-paragraph response on Jekyll's culpability.",
              task: 'Plan + open paragraph: "Jekyll is a self-deceiver, not a victim".',
              success: 'Plan governs argument; opening paragraph holds a clear line.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.3', '9W.1', '9W.3', '9W.7'],
              do: '40-minute full 3-paragraph response.',
              task: 'How far does Stevenson present Jekyll as responsible for his own downfall?',
              success: 'Sustained line of argument; 3 paragraphs; conceptual throughout.',
            }),
          ],
        },
        {
          number: 11,
          pages: 'Cross-text revisiting; thematic synthesis',
          keyVocabulary: [
            { en: 'allegory' },
            { en: 'microcosm' },
            { en: 'paradigm' },
            { en: 'subversion' },
            { en: 'anxiety' },
          ],
          contextNote: { en: 'Whole-text synthesis.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.1', '9R.3', '9R.7'],
              do: 'Map allegorical readings: Darwinism, urban decay, repression, addiction.',
              task: 'Allegory grid linking theme to 3 textual moments each.',
              success: 'Articulates the novella as allegorical; cites from across the text.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9R.5', '9SL.3'],
              do: 'Structured discussion with rotating chairs.',
              task: 'Reach a class consensus on the strongest conceptual reading.',
              success: 'Sustains analytical register; engages with at least 3 readings.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.9', '9W.10'],
              do: 'Self-edit a Week 8 paragraph against mark scheme.',
              task: 'Edit a Week 8 paragraph: precision, embedding, conceptual depth.',
              success: 'Three substantive edits per paragraph; justify in margin.',
            }),
            lesson({
              focus: 'application',
              skills: ['9W.1', '9W.3'],
              do: 'Plan a full essay in 10 minutes on an unseen question.',
              task: 'Plan: thesis + 3 topic sentences + evidence map.',
              success: 'Plan is exam-viable; demonstrates cohesion and conceptual line.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.1', '9W.3', '9W.7'],
              do: '35-minute practice essay under exam conditions.',
              task: 'How does Stevenson present duality in *Jekyll and Hyde*?',
              success: 'Full essay structure: intro, 2-3 body paragraphs, brief conclusion.',
            }),
          ],
        },
        {
          number: 12,
          pages: 'Whole novella; assessment-focused revisiting',
          keyVocabulary: [
            { en: 'thesis' },
            { en: 'cohesion' },
            { en: 'judicious' },
            { en: 'integrated' },
            { en: 'critical' },
          ],
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.1', '9R.4'],
              do: 'Question-deconstruction drills on past sample questions.',
              task: 'Annotate 5 questions for focus, command word, conceptual angle.',
              success: 'Identifies question type and conceptual angle in under 2 minutes.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9SL.1', '9SL.3', '9W.9'],
              do: 'Peer-mark Week 11 practice essays using a Y9 mastery-band rubric.',
              task: 'Identify one strength and one precise improvement per essay.',
              success: 'Peer feedback is specific, actionable, criteria-anchored.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['9W.1', '9W.3', '9W.10'],
              do: 'Teacher live-models a 3-paragraph essay opening with metacognitive commentary.',
              task: 'Annotate the model for the moves that earn top-band marks.',
              success: 'Identifies 5 transferable moves from the model.',
            }),
            lesson({
              focus: 'application',
              skills: ['9W.9', '9W.3'],
              do: 'Rewrite weakest paragraph from Week 11 essay using model strategies.',
              task: 'Rewrite with explicit application of 3 modelled moves.',
              success: 'Rewrite demonstrably stronger than original; moves identified.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9R.4', '9W.1', '9W.7'],
              do: 'Write a strong opening (intro + first body paragraph) in 15 mins.',
              task: 'How does Stevenson use Hyde to represent Victorian fears?',
              success: 'Opening shows thesis, conceptual framing, embedded evidence.',
            }),
          ],
        },
        {
          number: 13,
          pages: 'Unseen extract from *Jekyll and Hyde* with whole-text reach',
          keyVocabulary: [
            { en: 'analytical' },
            { en: 'sustained' },
            { en: 'conceptual' },
            { en: 'evaluative' },
            { en: 'judgement' },
          ],
          contextNote: { en: 'Term 1.2 assessment week.' },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['9R.1', '9R.4', '9R.7'],
              do: '15-minute timed annotation of a Jekyll and Hyde extract.',
              task: 'Annotate for methods, effects, conceptual reading.',
              success: 'Annotation usable as plan; identifies 3 methods minimum.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['9R.3', '9SL.1', '9SL.3'],
              do: 'Final synthesis discussion: "Stevenson\'s most important message".',
              task: 'Collaborative talk that consolidates conceptual readings.',
              success: 'Sustained analytical register; reference across the novella.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['9R.1', '9R.2', '9R.3', '9R.4', '9R.7', '9W.1', '9W.3', '9W.7', '9W.10'],
              do: '35-40 minute closed-book analytical essay.',
              task: 'Starting with this extract, explore how Stevenson presents the duality of human nature in *Jekyll and Hyde*.',
              success:
                'Full essay: thesis-driven intro, 2-3 conceptual body paragraphs, brief conclusion. Embedded quotations, integrated method analysis, conceptual reading sustained.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['9W.9'],
              do: 'Whole-class feedback and individual targets.',
              task: 'Set 2 personal targets for Term 1.2 based on assessment evidence.',
              success: 'Targets are specific, skill-coded, actionable.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['9W.9', '9W.3', '9W.10'],
              do: 'DIRT (Dedicated Improvement Reflection Time): rewrite weakest paragraph.',
              task: 'Improved paragraph with annotated improvements in margin.',
              success: 'Rewrite shows clear progress against the 2 personal targets.',
            }),
          ],
        },
      ],
    },
  ],
}

const Y9_T2: Year['terms'][number] = {
  number: 2,
  label: {
    en: 'Term 2 — Macbeth: Ambition and Conscience',
    ar: 'الفصل الدراسي الثاني — ماكبث: الطموح والضمير',
  },
  overview: {
    en: 'Compulsory KS3 Shakespeare. Whole play study + Jacobean context (Gunpowder Plot, divine right, witchcraft). Critical extracts on Lady Macbeth and the supernatural. By end of term students write thesis-driven literature essays on a whole text with context — the core GCSE Literature skill, embedded a year early.',
  },
  setText: { en: '*Macbeth* (whole play) + Jacobean context + critical extracts' },
  vocabularyThemes: [
    { en: 'ambition, regicide, tyranny, divine right, Jacobean' },
    { en: 'guilt, conscience, hubris, nemesis, catharsis' },
  ],
  bigSkillJump: {
    en: 'Students write a thesis-driven literature essay on a whole text with context — core GCSE Lit skill.',
  },
  halfTerms: [
    {
      id: '2.1',
      label: { en: 'Term 2.1' },
      assessment: { en: 'Analytical essay on a key scene/character.' },
      weeks: [],
    },
    {
      id: '2.2',
      label: { en: 'Term 2.2' },
      assessment: { en: 'Full essay on a play-wide theme (60-min GCSE-style response).' },
      weeks: [],
    },
  ],
}

const Y9_T3: Year['terms'][number] = {
  number: 3,
  label: {
    en: 'Term 3 — Conflict: Poetry and Modern Drama',
    ar: 'الفصل الدراسي الثالث — الصراع: الشعر والمسرح الحديث',
  },
  overview: {
    en: 'GCSE-bridging term. Conflict poetry anthology (Owen "Dulce et Decorum Est", Sassoon, Brian Patten, Carol Ann Duffy, Imtiaz Dharker, Armitage "Remains") in HT1. Modern play (*Blood Brothers* or *An Inspector Calls* extracts) in HT2. Students exit KS3 GCSE-ready.',
  },
  setText: {
    en: 'Conflict poetry anthology + Russell *Blood Brothers* or Priestley *An Inspector Calls*',
  },
  vocabularyThemes: [
    { en: 'conflict, futility, propaganda, trauma, jingoism' },
    { en: 'class, responsibility, generation, capitalism, socialism' },
  ],
  bigSkillJump: {
    en: 'Students compare two texts in a structured essay AND deliver an assessed formal presentation — both core GCSE skills.',
  },
  halfTerms: [
    {
      id: '3.1',
      label: { en: 'Term 3.1' },
      assessment: { en: 'Comparative poetry essay: "Compare how two poets present conflict".' },
      weeks: [],
    },
    {
      id: '3.2',
      label: { en: 'Term 3.2' },
      assessment: {
        en: 'Spoken language presentation (graded) + short analytical response on the modern play.',
      },
      weeks: [],
    },
  ],
}

export const YEAR_9: Year = {
  number: 9,
  name: { en: 'Year 9 — Mastery', ar: 'السنة التاسعة — الإتقان' },
  overview: {
    en: 'Year 9 is the bridge to GCSE. Students move from "This suggests… because…" to "This suggests… which reflects…" — methods analysed across texts, conceptual interpretations, evaluation. The year covers pre-1914 prose (Jekyll and Hyde, T1), Shakespeare (Macbeth, T2), and conflict poetry + modern drama (T3). Students exit writing full thesis-driven literature essays.',
  },
  yearlyExpectations: {
    reading: [
      { en: '9R.1 — Interpret explicit and implicit meanings in complex texts.' },
      { en: '9R.2 — Select, embed and integrate quotations fluently.' },
      { en: '9R.3 — Analyse developed inferences, exploring multiple interpretations.' },
      { en: '9R.4 — Analyse how writers use language, structure and form to shape meaning.' },
      { en: "9R.5 — Evaluate the effects of writer's choices on the reader." },
      { en: '9R.6 — Analyse and evaluate similarities and differences across texts.' },
      { en: '9R.7 — Use precise subject terminology confidently and accurately.' },
    ],
    writing: [
      { en: '9W.1 — Structure writing cohesively and logically across whole texts.' },
      { en: '9W.2 — Use a wide range of punctuation accurately and deliberately.' },
      { en: '9W.3 — Develop ideas in depth with clear, critical explanation.' },
      { en: '9W.4 — Use varied sentence structures deliberately for effect.' },
      { en: '9W.5 — Manipulate perspective, viewpoint and voice confidently.' },
      { en: '9W.6 — Craft structure, tone and imagery to shape reader response.' },
      { en: '9W.7 — Write with sustained control for a range of purposes and audiences.' },
    ],
    language: [
      { en: '9W.8 — Control register and adapt style for different audiences and purposes.' },
      { en: '9W.9 — Edit, refine and improve writing independently and critically.' },
      { en: '9W.10 — Manipulate vocabulary and syntax deliberately for effect.' },
    ],
    speaking: [
      { en: '9SL.1 — Contribute thoughtfully to discussions, developing and challenging ideas.' },
      { en: '9SL.2 — Speak clearly, confidently and fluently in a range of contexts.' },
      { en: '9SL.3 — Present structured, analytical ideas using appropriate register.' },
    ],
  },
  rubric: [],
  terms: [Y9_T1, Y9_T2, Y9_T3],
}
