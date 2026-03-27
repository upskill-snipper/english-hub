// @ts-nocheck
// ── Teacher Resource Library ────────────────────────────────────────────────
// Curated resources for English teachers: model answers, mark schemes,
// writing frames, vocabulary lists, quote banks, rubrics, checklists & starters.

export interface TeacherResource {
  id: string
  title: string
  category: string
  subcategory: string
  examBoard: string[]
  yearGroup: string[]
  description: string
  content: string
  printable: boolean
  tags: string[]
}

// ── Categories ──────────────────────────────────────────────────────────────

export const RESOURCE_CATEGORIES = [
  'Model Answers',
  'Mark Schemes',
  'Writing Frames',
  'Vocabulary Lists',
  'Key Quotes Banks',
  'Assessment Rubrics',
  'Revision Checklists',
  'Starter Activities',
] as const

export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number]

// ── All Resources ───────────────────────────────────────────────────────────

export const TEACHER_RESOURCES: TeacherResource[] = [
  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  MODEL ANSWERS                                                         ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'model-macbeth-extract-grade9',
    title: 'Macbeth Extract Response — Grade 9 Model',
    category: 'Model Answers',
    subcategory: 'Grade 9',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'A full Grade 9 response to an extract question on Macbeth (Act 1, Scene 7 — "If it were done when \'tis done").',
    content: `QUESTION: Starting with this extract (Act 1 Scene 7), how does Shakespeare present the theme of ambition?

GRADE 9 MODEL ANSWER:

Shakespeare presents ambition as an inherently self-destructive force through Macbeth's tortured soliloquy, in which the protagonist's language itself fractures under the weight of his moral conflict.

The conditional opening — "If it were done when 'tis done, then 'twere well / It were done quickly" — is striking in its syntactic instability. The repetition of "done" three times within a single line creates a stuttering, circular quality, as though Macbeth is trapped in a linguistic loop that mirrors his psychological entrapment. The subjunctive "if" immediately introduces doubt; this is not a man resolved, but one desperately trying to convince himself. Shakespeare's use of euphemism — the act of regicide is never named, only "it" — reveals Macbeth's inability to confront the reality of what ambition demands.

The extended metaphor of the "poisoned chalice" is particularly significant when considered in its Jacobean context. James I, himself the target of the Gunpowder Plot, would have recognised the image of treachery returning upon the traitor. Shakespeare suggests that ambition that oversteps moral boundaries contains within it the seeds of its own punishment — the "even-handed justice" that "commends the ingredients of our poisoned chalice / To our own lips." The personification of justice as "even-handed" implies a cosmic moral order that ambition cannot outwit, foreshadowing Macbeth's eventual destruction.

Crucially, Shakespeare contrasts this with the image of "vaulting ambition, which o'erleaps itself / And falls on the other." The equestrian metaphor is deliberately bathetic — the grand image of leaping is immediately undercut by the fall. The enjambment across the line break enacts the overreach physically on the page: the reader, like Macbeth, is carried forward only to stumble. This structural choice reinforces the idea that ambition is not merely dangerous but inherently self-defeating.

Across the play, Shakespeare traces a trajectory from this moment of hesitation to Lady Macbeth's sleepwalking guilt and Macbeth's nihilistic "Tomorrow and tomorrow and tomorrow" speech. The initial fracturing of language in this soliloquy — the euphemisms, conditionals, and broken syntax — intensifies into full psychological collapse, suggesting that ambition, once it displaces moral certainty, leaves only a void.`,
    printable: true,
    tags: ['Macbeth', 'Shakespeare', 'ambition', 'extract question', 'Grade 9', 'AO1', 'AO2', 'AO3'],
  },
  {
    id: 'model-inspector-calls-grade7',
    title: 'An Inspector Calls Character Response — Grade 7 Model',
    category: 'Model Answers',
    subcategory: 'Grade 7',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Grade 7 model answer exploring how Priestley presents Mr Birling as a symbol of capitalist irresponsibility.',
    content: `QUESTION: How does Priestley present the character of Mr Birling?

GRADE 7 MODEL ANSWER:

Priestley presents Mr Birling as a symbol of capitalist selfishness and social irresponsibility, using him to criticise the attitudes of the Edwardian upper-middle class.

From the outset, Birling is characterised by his confident, lecturing tone. His speech in Act 1 — "a man has to mind his own business and look after himself and his own" — establishes his philosophy of individualism. The tricolon structure ("mind," "look after," "his own") reinforces the narrow, self-centred worldview, while the imperative "has to" suggests he sees selfishness not as a choice but as an obligation. Priestley positions this speech early so the audience can measure Birling's certainty against the events that follow.

Birling's dramatic irony is central to Priestley's critique. His confident predictions — "the Titanic … unsinkable, absolutely unsinkable" and "I say there isn't a chance of war" — are historically absurd to the 1945 audience. Priestley uses the adverb "absolutely" to heighten Birling's foolish certainty. If Birling is so wrong about public events, the audience is invited to distrust his moral philosophy too.

The stage directions describe Birling as "heavy-looking, rather portentous," immediately associating him with physical and intellectual weight that is ultimately hollow. "Portentous" is particularly significant — it means self-importantly solemn, suggesting Birling takes himself far more seriously than he deserves.

Through Birling, Priestley argues that unchecked capitalism creates individuals incapable of empathy. When confronted with Eva Smith's death, Birling's primary concern is that "there'll be a public scandal." The noun "scandal" reveals that his moral compass is calibrated entirely by social reputation rather than human suffering. Priestley suggests this is the inevitable consequence of a society that values profit over people.`,
    printable: true,
    tags: ['An Inspector Calls', 'Mr Birling', 'character', 'Grade 7', 'AO1', 'AO2', 'AO3', 'Priestley'],
  },
  {
    id: 'model-lang-p1-q5-grade5',
    title: 'Language Paper 1 Q5 Descriptive Writing — Grade 5 Model',
    category: 'Model Answers',
    subcategory: 'Grade 5',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'A solid Grade 5 descriptive writing response to a picture prompt (abandoned building).',
    content: `QUESTION: Describe a place that has been forgotten. (40 marks)

GRADE 5 MODEL ANSWER:

The building stood at the edge of town like a forgotten promise. Its windows, once bright with light, now stared out blankly at the empty street. Nobody came here any more.

Inside, the air was thick with dust. It caught in your throat like cobwebs. The floorboards groaned under each step, as if complaining about being disturbed after so many years of silence. A single chair sat in the middle of the room, knocked sideways, as though the last person to sit in it had left in a hurry.

Wallpaper peeled from the walls in long, curling strips, revealing the bare plaster underneath. It was a faded floral pattern — roses, maybe — and I thought about the person who had chosen it. Had they stood in a shop, running their fingers over the samples, imagining how it would look? They could never have imagined this.

Light came in through a crack in the roof, falling in a single bright line across the floor. Dust particles floated through it, drifting slowly, like tiny planets orbiting nothing. The silence was so complete that I could hear my own heartbeat.

On the mantelpiece, a photograph lay face down. I picked it up carefully. A family smiled back at me — two parents, three children, a dog at their feet. They looked happy. The glass was cracked across the mother's face, a jagged line that seemed almost cruel.

I put the photograph back where I found it, face down, the way it wanted to be. Some things are forgotten for a reason. I stepped back outside, into the noise and light of the real world, and the building settled back into its silence behind me.

---
EXAMINER COMMENTARY:
This response achieves Grade 5 through clear, deliberate structural choices (moving from outside to inside and back), a range of language devices used with some effect (simile, personification, rhetorical question), and conscious shifts in tone. To reach Grade 7+, the student would need more ambitious vocabulary, more sustained and varied sentence structures, and imagery that is more original and precisely crafted.`,
    printable: true,
    tags: ['Language Paper 1', 'Q5', 'descriptive writing', 'Grade 5', 'creative writing'],
  },
  {
    id: 'model-poetry-comparison-grade9',
    title: 'Poetry Comparison — Grade 9 Model (Power & Conflict)',
    category: 'Model Answers',
    subcategory: 'Grade 9',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Grade 9 comparison of "Ozymandias" and "My Last Duchess" exploring how poets present power.',
    content: `QUESTION: Compare how poets present ideas about power in "Ozymandias" and one other poem from the anthology.

GRADE 9 MODEL ANSWER:

Both Shelley in "Ozymandias" and Browning in "My Last Duchess" interrogate the nature of power, yet they do so through fundamentally different temporal lenses: Shelley examines power from the vantage point of its ruins, while Browning captures it at its most suffocatingly present.

Shelley's sonnet is structurally subversive. The choice of the Petrarchan form — traditionally associated with love poetry — to depict a tyrant's collapse is itself an ironic commentary on the relationship between art and power. The poem's framing device creates deliberate distance: the speaker heard from "a traveller from an antique land," who in turn reads the sculptor's interpretation of Ozymandias. This chain of mediation means we never encounter the king directly — his power has been so thoroughly eroded that he exists only as a copy of a copy. The famous inscription, "Look on my Works, ye Mighty, and despair!" operates through devastating dramatic irony: the imperative that once commanded awe now invites only pity. The caesura after "despair!" forces a pause before the final image of "boundless and bare" desert, the plosive alliteration enacting the emptiness it describes.

Browning's Duke, by contrast, is terrifyingly immediate. The dramatic monologue form means we are trapped in his perspective, just as the Duchess was trapped in his household. His power is linguistic — the ceaseless enjambment ("That's my last Duchess painted on the wall, / Looking as if she were alive") denies the reader pause, mirroring the way the Duke denies others agency. The possessive determiner "my" in the opening line reduces the Duchess to property, an object to be displayed alongside "Neptune … / Taming a sea-horse" — the parallel positioning revealing that the Duke sees the subjugation of his wife and the taming of nature as equivalent achievements.

The crucial difference lies in each poem's treatment of art. For Shelley, art outlasts the tyrant but ultimately testifies to power's futility — the sculptor's "mocking hand" preserved Ozymandias's arrogance precisely so that time could humiliate it. For Browning, art becomes the instrument of power: the Duke has literally replaced a living woman with a painting he can control, drawing a curtain that "none puts by … but I." The first person pronoun, isolated at the line's end, is chilling in its finality.

Ultimately, Shelley offers the Romantic consolation that nature and time will defeat all tyranny — the "lone and level sands" are democratic in their erasure. Browning provides no such comfort: his poem ends mid-negotiation for a new wife, the Duke's power undiminished, his art collection about to grow.`,
    printable: true,
    tags: ['poetry comparison', 'Ozymandias', 'My Last Duchess', 'power', 'Grade 9', 'Power & Conflict'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  MARK SCHEMES                                                          ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'ms-aqa-lit-p1-simplified',
    title: 'AQA Literature Paper 1 — Simplified Mark Scheme',
    category: 'Mark Schemes',
    subcategory: 'AQA Literature',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Teacher-friendly breakdown of AQA Lit Paper 1 mark bands with student-facing descriptors.',
    content: `AQA ENGLISH LITERATURE PAPER 1 — SIMPLIFIED MARK SCHEME
Shakespeare (Section A) & 19th-Century Novel (Section B)

ASSESSMENT OBJECTIVES:
• AO1 — Read, understand, respond. Use textual references (including quotations).
• AO2 — Analyse language, form, structure. Use subject terminology.
• AO3 — Show understanding of contexts.
• AO4 — Use accurate spelling, punctuation, grammar (4 marks, Section A only).

──────────────────────────────────────────────
GRADE 9 (30 marks: 26–30)
──────────────────────────────────────────────
✓ Critical, exploratory, conceptualised response
✓ Judicious, embedded quotations — woven into argument
✓ Analysis of writer's methods is perceptive, detailed
✓ Exploration of context is convincing and integrated (not "bolted on")
✓ Offers ALTERNATIVE INTERPRETATIONS or challenges conventional readings
KEY WORDS: perceptive, critical, exploratory, conceptualised

──────────────────────────────────────────────
GRADE 7–8 (30 marks: 19–25)
──────────────────────────────────────────────
✓ Thoughtful, developed response
✓ Well-chosen quotations, effectively integrated
✓ Analysis of writer's methods is detailed and well developed
✓ Ideas about context are relevant and convincingly linked to the text
KEY WORDS: thoughtful, developed, sustained, assured

──────────────────────────────────────────────
GRADE 5–6 (30 marks: 13–18)
──────────────────────────────────────────────
✓ Clear, explained response
✓ Relevant quotations used to support points
✓ Clear explanation of writer's methods with appropriate use of terminology
✓ Some relevant context linked to the question
KEY WORDS: clear, explained, relevant, appropriate

──────────────────────────────────────────────
GRADE 3–4 (30 marks: 7–12)
──────────────────────────────────────────────
✓ Some understanding, supported by references
✓ Some awareness of writer's methods
✓ Some context mentioned, though may not be linked to the question
KEY WORDS: some, awareness, supported

──────────────────────────────────────────────
GRADE 1–2 (30 marks: 1–6)
──────────────────────────────────────────────
✓ Simple, limited comment
✓ Simple reference to text
✓ Simple awareness of method or context
KEY WORDS: simple, limited

TEACHER TIP: Print this for students to self-assess. Ask them to highlight the descriptors they think apply to their work, then discuss the gap to the next band.`,
    printable: true,
    tags: ['AQA', 'Literature', 'Paper 1', 'mark scheme', 'Shakespeare', '19th century novel', 'assessment'],
  },
  {
    id: 'ms-aqa-lang-p1-simplified',
    title: 'AQA Language Paper 1 — Simplified Mark Scheme',
    category: 'Mark Schemes',
    subcategory: 'AQA Language',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Question-by-question breakdown of AQA Language Paper 1 with clear mark bands and tips.',
    content: `AQA ENGLISH LANGUAGE PAPER 1 — SIMPLIFIED MARK SCHEME
Explorations in Creative Reading and Writing

──────────────────────────────────────────────
Q1: LIST FOUR THINGS (4 marks)
──────────────────────────────────────────────
• 1 mark per correct identification from the given lines
• Can quote or paraphrase
• Must be EXPLICIT (stated in the text), not inferred
COMMON MISTAKES: Going outside the line references; giving inferences not facts

──────────────────────────────────────────────
Q2: LANGUAGE ANALYSIS (8 marks)
──────────────────────────────────────────────
Level 4 (7–8): Perceptive, detailed analysis. Sophisticated use of terminology. Selects judicious examples.
Level 3 (5–6): Clear, relevant explanation. Appropriate terminology. Well-chosen examples.
Level 2 (3–4): Some understanding of language. Some terminology. Attempts to comment on effect.
Level 1 (1–2): Simple awareness. Simple comment.
TEACHER TIP: Students lose marks by IDENTIFYING techniques without ANALYSING effect. Drill: "The word ___ suggests ___ because ___."

──────────────────────────────────────────────
Q3: STRUCTURE ANALYSIS (8 marks)
──────────────────────────────────────────────
Level 4 (7–8): Perceptive analysis of structural features. Sophisticated examples.
Level 3 (5–6): Clear understanding. Relevant examples of structural choices.
Level 2 (3–4): Some awareness. Comments on obvious features (beginning/middle/end).
Level 1 (1–2): Simple awareness of structure.
KEY STRUCTURAL FEATURES: Focus shifts, narrative perspective, chronology, opening/closing, sentence length variation, paragraph length, zoom in/out, withholding information, repetition/motifs

──────────────────────────────────────────────
Q4: EVALUATION (20 marks)
──────────────────────────────────────────────
Level 4 (16–20): Perceptive, detailed evaluation. Convincing response to the statement. Judicious references.
Level 3 (11–15): Clear, relevant evaluation. Clear response to statement. Relevant references.
Level 2 (6–10): Some evaluation. Some response to statement. Some references.
Level 1 (1–5): Simple, limited comment.
TEACHER TIP: Students must ENGAGE with the given statement — agree, disagree, or both. The best answers treat it as a critical lens.

──────────────────────────────────────────────
Q5: CREATIVE WRITING (40 marks = 24 content + 16 SPaG)
──────────────────────────────────────────────
Content (24 marks):
Level 4 (19–24): Compelling, convincing. Extensive, ambitious vocabulary. Varied, effective structure. Compelling characters/atmosphere.
Level 3 (13–18): Clear, effective. Increasingly sophisticated vocabulary. Varied structure. Engaging.
Level 2 (7–12): Some success. Conscious vocabulary choices. Some structural variety.
Level 1 (1–6): Simple, limited. Simple vocabulary. Random structure.

SPaG (16 marks):
Level 4 (13–16): Wide range of punctuation, accurate. Sophisticated sentence forms. Extensive vocabulary. Accurate spelling throughout.
Level 3 (9–12): Range of punctuation, mostly accurate. Varied sentence forms. Varied vocabulary. Generally accurate spelling.
Level 2 (5–8): Some punctuation. Some sentence variety. Some vocabulary variety. Reasonable spelling.
Level 1 (1–4): Limited punctuation. Limited sentence forms. Limited vocabulary.`,
    printable: true,
    tags: ['AQA', 'Language', 'Paper 1', 'mark scheme', 'creative reading', 'creative writing'],
  },
  {
    id: 'ms-edexcel-lang-simplified',
    title: 'Edexcel Language — Simplified Mark Scheme',
    category: 'Mark Schemes',
    subcategory: 'Edexcel Language',
    examBoard: ['Edexcel'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Teacher-friendly Edexcel English Language mark scheme covering both papers.',
    content: `EDEXCEL ENGLISH LANGUAGE — SIMPLIFIED MARK SCHEME

PAPER 1: FICTION AND IMAGINATIVE WRITING
──────────────────────────────────────────────
Section A: Reading (Q1–Q4, 40 marks)

Q1 (12 marks) — Close reading of extract:
Band 5 (10–12): Perceptive, exploratory analysis. Precise, embedded quotations. Sophisticated discussion of effects.
Band 4 (7–9): Detailed analysis. Well-chosen references. Clear discussion of effects.
Band 3 (4–6): Some analysis. Supported points. Some comment on effects.
Band 2 (2–3): Awareness of text. Basic references. Limited comment.
Band 1 (1): Simple, limited.

Q2–Q4 follow similar banding (see full spec for variations per question).

Section B: Imaginative Writing (Q5 or Q6, 40 marks)
Content & Organisation (24 marks):
Band 5 (20–24): Compelling, sophisticated. Original, ambitious ideas. Purposeful structure.
Band 4 (15–19): Convincing, effective. Developed ideas. Secure structure.
Band 3 (10–14): Clarity, success. Some development. Organised structure.
Band 2 (5–9): Some clarity. Limited development. Attempted structure.
Band 1 (1–4): Simple, limited. Minimal development.

Technical Accuracy (16 marks):
Band 5 (14–16): Accuracy consistent. Wide range of sentence types and punctuation.
Band 4 (10–13): Mostly accurate. Good range.
Band 3 (7–9): Reasonable accuracy. Some range.

PAPER 2: NON-FICTION AND TRANSACTIONAL WRITING
Similar banding — key differences:
• Section A tests comparison of two non-fiction texts
• Section B tests transactional/persuasive writing (article, letter, speech, essay)

TEACHER TIP: Edexcel rewards "exploratory" reading earlier than AQA. Encourage students to ask "what else could this mean?" from the start.`,
    printable: true,
    tags: ['Edexcel', 'Language', 'mark scheme', 'Paper 1', 'Paper 2', 'fiction', 'non-fiction'],
  },
  {
    id: 'ms-ocr-lit-simplified',
    title: 'OCR Literature — Simplified Mark Scheme',
    category: 'Mark Schemes',
    subcategory: 'OCR Literature',
    examBoard: ['OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Simplified OCR English Literature J352 mark bands for teacher and student reference.',
    content: `OCR ENGLISH LITERATURE (J352) — SIMPLIFIED MARK SCHEME

ASSESSMENT OBJECTIVES:
• AO1 — Read, understand, respond using textual references
• AO2 — Analyse language, form, structure using terminology
• AO3 — Understand contexts
• AO4 — Relate texts to each other (comparative element)

──────────────────────────────────────────────
COMPONENT 1: Exploring Modern & Literary Heritage Texts
──────────────────────────────────────────────

Band 6 (26–30): Insightful, illuminating response. Critical analysis of writer's methods. Integrated, convincing context. Precise, discriminating references.
Band 5 (21–25): Exploratory, well-developed. Thoughtful analysis. Relevant context, effectively linked. Carefully chosen references.
Band 4 (16–20): Clear, well-structured. Explained analysis of methods. Context linked to the text. Relevant references.
Band 3 (11–15): Some clarity. Developing awareness of methods. Some context. Supported references.
Band 2 (6–10): Limited understanding. Simple awareness of methods. Simple context. Basic references.
Band 1 (1–5): Very limited response.

──────────────────────────────────────────────
COMPONENT 2: Exploring Poetry & Shakespeare
──────────────────────────────────────────────

Shakespeare extract question follows similar banding. Key addition:
• Students must move BEYOND THE EXTRACT to discuss the wider play
• Marks explicitly reward links to elsewhere in the text

Poetry comparison:
• AO4 (comparison) is explicitly assessed
• Top-band responses integrate comparison throughout (not "bolt-on" in a final paragraph)

KEY OCR DIFFERENCES FROM AQA:
1. Six bands rather than five
2. "Insightful" and "illuminating" are the top-band keywords (vs AQA's "critical, exploratory")
3. Comparative element explicitly assessed in poetry
4. No separate AO4 SPaG marks — accuracy is assessed holistically

TEACHER TIP: OCR mark schemes reward "illuminating" — teach students to find unexpected connections or shed new light on familiar ideas.`,
    printable: true,
    tags: ['OCR', 'Literature', 'mark scheme', 'J352', 'Shakespeare', 'poetry comparison'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  WRITING FRAMES                                                        ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'wf-peel-paragraph',
    title: 'PEEL Paragraph Writing Frame',
    category: 'Writing Frames',
    subcategory: 'PEEL Paragraphs',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: 'Structured PEEL paragraph template with sentence starters and progression guidance.',
    content: `PEEL PARAGRAPH WRITING FRAME

Use this frame to build analytical paragraphs for Literature and Language essays.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
P — POINT (1 sentence)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Make a clear, specific point that answers the question.

Sentence starters:
• [Writer] presents [character/theme] as…
• Through [text/scene], [writer] suggests that…
• A key idea in [text] is that…

AVOID: "In this essay I will…" or retelling the story.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E — EVIDENCE (1–2 sentences)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Select a SHORT, specific quotation that supports your point.

Sentence starters:
• This is evident when [character] states, "…"
• [Writer] uses the phrase "…" to…
• For example, the [noun/adjective/verb] "…" suggests…

TOP TIP: Embed quotations into your sentences rather than dropping them in:
✗ Macbeth says "Is this a dagger which I see before me."
✓ Macbeth's hallucinated "dagger" reveals his fracturing mental state.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E — EXPLAIN / ANALYSE (2–3 sentences)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Analyse HOW the writer's choice creates meaning. Focus on individual words.

Sentence starters:
• The word "…" suggests / connotes / implies…
• This [technique] creates an effect of…
• The reader may interpret this as…
• This is significant because…

WHAT TO ANALYSE: Word choice (connotations), techniques (metaphor, simile, personification, alliteration), sentence structure, form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
L — LINK (1–2 sentences)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Link to the question, the wider text, context, or an alternative interpretation.

Sentence starters:
• This reinforces the idea that…
• In the context of [historical/social context], this suggests…
• Alternatively, a reader might argue that…
• This connects to the wider theme of…

──────────────────────────────────────────────
PROGRESSION LADDER:
Grade 5: P-E-E-L with clear explanations
Grade 7: Embedded quotations + detailed word-level analysis + context
Grade 9: Alternative interpretations + structural/form analysis + critical vocabulary`,
    printable: true,
    tags: ['PEEL', 'paragraph structure', 'writing frame', 'essay writing', 'analytical writing'],
  },
  {
    id: 'wf-comparison-template',
    title: 'Poetry Comparison Essay Template',
    category: 'Writing Frames',
    subcategory: 'Comparison Templates',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Step-by-step template for structuring a poetry comparison essay with integrated comparison.',
    content: `POETRY COMPARISON ESSAY TEMPLATE

──────────────────────────────────────────────
PARAGRAPH 1: COMPARATIVE INTRODUCTION
──────────────────────────────────────────────
Both [Poem A] and [Poem B] explore the theme of [theme from question], yet they do so in fundamentally different ways. While [Poet A] presents [theme] as [interpretation], [Poet B] suggests it is [interpretation]. This contrast reflects their different [contexts/perspectives/purposes].

──────────────────────────────────────────────
PARAGRAPH 2: FIRST POINT OF COMPARISON
──────────────────────────────────────────────
In [Poem A], [Poet A] presents [aspect of theme] through…
[Quotation + analysis — 3–4 sentences using PEEL]

Similarly / In contrast / Conversely, [Poet B] also explores [aspect] but through…
[Quotation + analysis — 3–4 sentences using PEEL]

This difference/similarity is significant because…

──────────────────────────────────────────────
PARAGRAPH 3: SECOND POINT OF COMPARISON
──────────────────────────────────────────────
[Same structure as Paragraph 2, different aspect of the theme]

──────────────────────────────────────────────
PARAGRAPH 4: METHODS COMPARISON (form/structure)
──────────────────────────────────────────────
The poets' structural choices reinforce their different presentations of [theme].
[Poet A]'s use of [form feature — e.g., sonnet, free verse, enjambment] reflects…
Meanwhile, [Poet B]'s [form feature] creates an effect of…

──────────────────────────────────────────────
PARAGRAPH 5: CONCLUSION (optional but useful)
──────────────────────────────────────────────
Ultimately, both poets [shared concern], yet [Poet A] offers [outlook] while [Poet B] suggests [outlook]. Perhaps [wider comment about the theme].

──────────────────────────────────────────────
KEY COMPARATIVE CONNECTIVES:
Similarly… / Likewise… / In the same way… / Both poets…
In contrast… / Conversely… / However… / While [Poet A]… [Poet B]…
More significantly… / Perhaps more strikingly…

COMMON MISTAKES TO AVOID:
✗ Writing about Poem A for half the essay, then Poem B (the "tennis match")
✗ Comparing biographical details instead of the poems
✗ Forgetting to compare methods (not just ideas)
✓ Weave comparison THROUGHOUT every paragraph`,
    printable: true,
    tags: ['poetry comparison', 'essay template', 'writing frame', 'structure', 'comparative writing'],
  },
  {
    id: 'wf-creative-writing-plan',
    title: 'Creative Writing Planning Frame (Descriptive & Narrative)',
    category: 'Writing Frames',
    subcategory: 'Creative Writing Plans',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Five-minute planning template for Paper 1 Q5 creative writing with structural guidance.',
    content: `CREATIVE WRITING 5-MINUTE PLANNING FRAME
Use this to plan your response BEFORE you start writing. Spend 5 minutes here to save 10 minutes of wandering later.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1: CHOOSE YOUR STRUCTURE (tick one)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Zoom in → zoom out (start wide, focus on detail, pull back)
□ Circular structure (end where you began, but changed)
□ Time shift (past → present, or present → past)
□ Five senses journey (move through sight, sound, smell, touch, taste)
□ Contrast (light/dark, calm/chaos, before/after)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2: PLAN YOUR PARAGRAPHS (5–6 paragraphs ideal)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Para 1 — Opening (hook the reader):
Focus: _____________ Key technique: _____________

Para 2 — Development:
Focus: _____________ Key technique: _____________

Para 3 — Shift/Turn (change pace, focus, or mood):
Focus: _____________ Key technique: _____________

Para 4 — Intensify:
Focus: _____________ Key technique: _____________

Para 5 — Resolution/Ending:
Focus: _____________ Key technique: _____________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3: LANGUAGE TOOLKIT (pick 5–6 to include)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Extended metaphor         □ Pathetic fallacy
□ Simile                    □ Personification
□ Sensory detail            □ Juxtaposition
□ One-word sentence         □ List of three
□ Short paragraph for impact □ Rhetorical question
□ Ambitious vocabulary       □ Cyclical motif

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4: AMBITIOUS VOCABULARY BANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write 5 interesting words/phrases you want to use:
1. _____________ 2. _____________ 3. _____________
4. _____________ 5. _____________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5: OPENING LINE (draft it now)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
_______________________________________________

REMEMBER: Quality over quantity. 350–500 well-crafted words beats 700 rushed words every time.`,
    printable: true,
    tags: ['creative writing', 'planning', 'descriptive writing', 'narrative writing', 'Paper 1 Q5'],
  },
  {
    id: 'wf-language-analysis-frame',
    title: 'Language Analysis Response Frame (Paper 1 Q2)',
    category: 'Writing Frames',
    subcategory: 'PEEL Paragraphs',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Focused writing frame for AQA Language Paper 1 Question 2 (8-mark language analysis).',
    content: `LANGUAGE ANALYSIS WRITING FRAME — AQA Paper 1 Q2 (8 marks)
Time: 8–10 minutes | 2 developed paragraphs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARAGRAPH 1:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The writer uses [technique] when they describe [what], writing "[SHORT QUOTATION]."

The [word class] "[specific word]" is particularly effective because it connotes [meaning/association]. This suggests [effect on reader / what it reveals about the subject]. The reader may feel [emotional response] because [reason].

Furthermore, the [second technique or second word from the same quotation] "[word]" creates a sense of [effect] as it implies [deeper meaning].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARAGRAPH 2:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Additionally, the writer employs [technique] in the phrase "[SHORT QUOTATION]."

The word "[specific word]" suggests [meaning] because [explanation of connotation]. This has the effect of [impact on the reader]. Perhaps the writer chose this to [writer's intention / thematic significance].

──────────────────────────────────────────────
WORD-LEVEL ANALYSIS TOOLKIT:
──────────────────────────────────────────────
"The word '___' connotes…"
"The verb/adjective/noun '___' suggests…"
"This creates a semantic field of…"
"The connotations of '___' imply…"
"This evokes a sense of…"
"The reader is positioned to feel…"

TECHNIQUE CHECKLIST:
□ Metaphor / simile / personification
□ Semantic field
□ Alliteration / sibilance / plosives
□ Verb choice (dynamic, stative, imperative)
□ Adjective / adverb choice
□ Listing / tricolon
□ Short sentences / fragments

TOP TIP: You only have 8 marks. Pick 2 quotations and analyse them DEEPLY rather than identifying 6 techniques and saying nothing about their effect.`,
    printable: true,
    tags: ['language analysis', 'Paper 1', 'Q2', 'AQA', 'writing frame', 'word-level analysis'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  VOCABULARY LISTS                                                      ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'vocab-literary-techniques',
    title: 'Literary Techniques Vocabulary — Complete Glossary',
    category: 'Vocabulary Lists',
    subcategory: 'Literary Techniques',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: 'Comprehensive glossary of literary and language techniques with definitions and examples.',
    content: `LITERARY & LANGUAGE TECHNIQUES — SUBJECT TERMINOLOGY GLOSSARY

LANGUAGE TECHNIQUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Alliteration — Repetition of initial consonant sounds. "Peter Piper picked a peck."
Assonance — Repetition of vowel sounds within words. "The rain in Spain stays mainly on the plain."
Sibilance — Repetition of 's' sounds, often creating a sinister or soft effect. "The snake slithered silently."
Plosive — Hard consonant sounds (b, d, g, k, p, t) that create a harsh, aggressive effect.
Fricative — Soft consonant sounds (f, v, th, s, z, sh) that create a gentle or menacing whisper.
Onomatopoeia — Words that imitate sounds. "Crash," "whisper," "buzz."
Metaphor — Describing something AS something else. "The classroom was a zoo."
Extended metaphor — A metaphor sustained over several lines or a whole text.
Simile — Comparison using "like" or "as." "Her eyes shone like diamonds."
Personification — Giving human qualities to non-human things. "The wind howled."
Pathetic fallacy — Using weather/nature to reflect mood. "Dark clouds gathered as grief descended."
Hyperbole — Deliberate exaggeration. "I've told you a million times."
Oxymoron — Two contradictory words together. "Bitter sweet," "living death."
Juxtaposition — Placing contrasting ideas side by side for effect.
Semantic field — A group of words related to the same topic (e.g., words of war: "battle," "siege," "surrender").
Symbolism — Using an object to represent an abstract idea (e.g., a dove = peace).
Imagery — Language that creates a vivid picture in the reader's mind.
Tone — The attitude or feeling conveyed by the writing (e.g., angry, nostalgic, sarcastic).
Register — The level of formality (formal, informal, colloquial, academic).
Irony — Saying one thing but meaning another, or events that are the opposite of what's expected.
Dramatic irony — When the audience knows something a character does not.

STRUCTURAL TECHNIQUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enjambment — A sentence or phrase running over from one line to the next without punctuation.
Caesura — A pause in the middle of a line of poetry, often marked by punctuation.
Volta — A "turn" or shift in argument/mood in a poem (especially sonnets).
Anaphora — Repetition of a word or phrase at the beginning of successive lines/sentences.
Cyclical structure — When the ending returns to the beginning.
In medias res — Starting in the middle of the action.
Foreshadowing — Hints or clues about what will happen later.
Flashback — A scene set earlier than the main narrative.
Stanza — A verse in a poem (equivalent of a paragraph).
Couplet — Two consecutive rhyming lines.
Monologue — A long speech by one person.
Soliloquy — A character speaking their thoughts aloud, alone on stage.

POETIC FORMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sonnet — 14 lines, usually iambic pentameter, with a volta.
Free verse — Poetry without a regular rhyme scheme or metre.
Dramatic monologue — A poem spoken by a fictional character to a silent listener.
Ballad — A narrative poem, often with a regular rhyme and rhythm.
Elegy — A poem of mourning or lamentation.
Ode — A poem of praise or celebration.`,
    printable: true,
    tags: ['vocabulary', 'literary techniques', 'subject terminology', 'glossary', 'language devices'],
  },
  {
    id: 'vocab-evaluation-language',
    title: 'Evaluation & Analysis Vocabulary — Upgrade Your Word Choices',
    category: 'Vocabulary Lists',
    subcategory: 'Academic Vocabulary',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: 'Vocabulary upgrade list replacing basic words with sophisticated analytical language.',
    content: `ANALYTICAL VOCABULARY — UPGRADE YOUR WORD CHOICES

Instead of "shows" → use:
  suggests, implies, conveys, reveals, demonstrates, highlights, emphasises, underscores, reinforces, exposes, illustrates, reflects, signals, evokes

Instead of "important" → use:
  significant, pivotal, crucial, central, fundamental, essential, critical, paramount

Instead of "good" (describing writing) → use:
  effective, compelling, striking, powerful, evocative, poignant, resonant, arresting, masterful

Instead of "bad" → use:
  destructive, corrosive, insidious, pernicious, damaging, detrimental, toxic

Instead of "says" → use:
  states, asserts, declares, argues, contends, proclaims, insists, suggests, implies, reveals

Instead of "thinks" → use:
  contemplates, reflects, considers, grapples with, wrestles with, is preoccupied by

DESCRIBING EFFECTS ON THE READER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"The reader is positioned to…"
"This creates a sense of… unease / tension / foreboding / sympathy / revulsion"
"The effect is to… alienate / engage / unsettle / compel / persuade"
"This evokes… pathos / empathy / disgust / admiration"

DESCRIBING WRITER'S INTENTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"[Writer] subverts expectations by…"
"[Writer] deliberately employs… to…"
"[Writer] crafts / constructs / orchestrates…"
"Perhaps [Writer] intends to challenge / critique / celebrate / expose…"

DESCRIBING CONTEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"This reflects the [Victorian/Jacobean/post-war] preoccupation with…"
"In the context of [historical event], this resonates because…"
"[Writer], writing in [era], would have been acutely aware that…"
"Contemporary audiences would have recognised…"

CONNECTIVES FOR ANALYSIS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Furthermore… Moreover… Additionally… Equally…
However… Conversely… In contrast… On the other hand…
Consequently… As a result… Therefore… Thus…
Perhaps more significantly… Most strikingly… Crucially…`,
    printable: true,
    tags: ['vocabulary', 'academic language', 'analytical writing', 'word choices', 'essay vocabulary'],
  },
  {
    id: 'vocab-macbeth-key-terms',
    title: 'Macbeth — Key Vocabulary & Concepts',
    category: 'Vocabulary Lists',
    subcategory: 'Text-Specific Vocabulary',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: 'Essential vocabulary, concepts, and contextual terms for studying Macbeth.',
    content: `MACBETH — KEY VOCABULARY & CONCEPTS

THEME VOCABULARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ambition: aspiration, overreach, hubris, vaulting, tyrannical, usurpation
Power: sovereignty, authority, tyranny, regicide, divine right, legitimate rule
Guilt: remorse, conscience, torment, psychological deterioration, paranoia, hallucination
Supernatural: witchcraft, prophecy, apparition, equivocation, fate, destiny, free will
Masculinity: valour, courage, "unsexed," emasculation, martial honour, brutality
Appearance vs Reality: duplicity, equivocation, façade, deception, "fair is foul"

KEY CONTEXTUAL TERMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Great Chain of Being — The Elizabethan/Jacobean belief that God created a strict hierarchy: God → King → Nobles → Common people → Animals. Disrupting this order (e.g., through regicide) causes chaos in nature.

Divine Right of Kings — The belief that monarchs are appointed by God and therefore answerable only to God. Killing a king is thus not just treason but blasphemy.

Regicide — The killing of a king. The ultimate crime in Jacobean England.

The Gunpowder Plot (1605) — Catholic conspiracy to blow up Parliament and King James I. Shakespeare's audience would associate treachery against a king with this recent, terrifying event.

King James I — Patron of Shakespeare's company. Wrote "Daemonologie" (1597), a treatise on witchcraft. Macbeth flatters James by dramatising his ancestor Banquo as noble and by portraying witchcraft as dangerous.

Equivocation — Deliberately ambiguous language designed to mislead. The Jesuits were accused of using equivocation during the Gunpowder Plot trials. The witches equivocate throughout the play.

Hamartia — A fatal flaw (from Greek tragedy). Macbeth's hamartia is his ambition.

Catharsis — The emotional purging the audience experiences through tragedy.

Hubris — Excessive pride or self-confidence, typically leading to downfall.

Patriarchy — Male-dominated social system. Lady Macbeth's desire to be "unsexed" challenges patriarchal gender roles.`,
    printable: true,
    tags: ['Macbeth', 'vocabulary', 'context', 'Shakespeare', 'key terms', 'themes'],
  },
  {
    id: 'vocab-inspector-calls-terms',
    title: 'An Inspector Calls — Key Vocabulary & Concepts',
    category: 'Vocabulary Lists',
    subcategory: 'Text-Specific Vocabulary',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Essential vocabulary and contextual terms for studying An Inspector Calls.',
    content: `AN INSPECTOR CALLS — KEY VOCABULARY & CONCEPTS

THEME VOCABULARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Responsibility: collective responsibility, social duty, moral obligation, accountability, complicity
Class: social hierarchy, bourgeoisie, proletariat, capitalism, exploitation, privilege, entitlement
Gender: patriarchy, objectification, vulnerability, agency, dependence, exploitation
Age & Change: generational divide, reform, progressive, entrenched attitudes, capacity for change
Morality: conscience, hypocrisy, atonement, guilt, moral awakening, complacency

KEY CONTEXTUAL TERMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Socialism — The political belief that wealth and resources should be shared collectively. Priestley was a committed socialist. The Inspector embodies socialist values.

Capitalism — An economic system based on private ownership and profit. The Birlings represent capitalist values: self-interest, profit over people.

The Welfare State — After WWII (1945, when the play was first performed), the Labour government introduced the NHS, social security, and state education. Priestley's play argues for exactly this kind of collective responsibility.

Edwardian England (1912) — The play is SET in 1912 but PERFORMED in 1945. The audience knows that the Birlings' world of confidence and prosperity is about to be shattered by WWI, the sinking of the Titanic, and the General Strike.

Dramatic Irony — Because the play is set in 1912 but performed in 1945, Birling's confident predictions are dramatically ironic. The audience knows he is catastrophically wrong.

The Well-Made Play — A dramatic structure where all events are causally linked and build to a climax. Priestley uses AND subverts this form.

Morality Play — A medieval dramatic form where characters represent moral qualities (Vice, Virtue, Everyman). The Inspector functions like a figure from a morality play — an allegorical force of conscience.

Fourth Wall — Priestley wanted the final phone call to make the audience feel implicated too, breaking the comfortable distance between stage and stalls.

PRIESTLEY'S "LLANDINAM LETTER" (key quote):
"We don't live alone. We are members of one body. We are responsible for each other." — This is essentially the Inspector's final speech, and Priestley's central thesis.`,
    printable: true,
    tags: ['An Inspector Calls', 'vocabulary', 'context', 'Priestley', 'key terms', 'socialism', 'capitalism'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  KEY QUOTES BANKS                                                      ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'quotes-macbeth-by-theme',
    title: 'Macbeth Key Quotes — Organised by Theme',
    category: 'Key Quotes Banks',
    subcategory: 'By Theme',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: 'Essential Macbeth quotations organised by theme with brief analytical notes.',
    content: `MACBETH — KEY QUOTES BY THEME

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AMBITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Stars, hide your fires; / Let not light see my black and deep desires" (1.4)
→ Light/dark imagery. "Black and deep" — ambition is hidden, shameful, associated with evil.

"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on the other" (1.7)
→ Equestrian metaphor. Ambition overreaches and defeats itself. Prophetic of Macbeth's fall.

"I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er" (3.4)
→ River of blood metaphor. "Tedious" is chilling — murder has become mundane.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GUILT & CONSCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Will all great Neptune's ocean wash this blood / Clean from my hand?" (2.2)
→ Hyperbole. The entire ocean cannot remove guilt. Classical allusion elevates the horror.

"Out, damned spot! Out, I say!" (5.1)
→ Lady Macbeth's sleepwalking. Irony: she told Macbeth "a little water clears us of this deed." Now she cannot escape guilt.

"Is this a dagger which I see before me, / The handle toward my hand?" (2.1)
→ Hallucination — ambiguity between supernatural and psychological. The dagger INVITES him ("toward my hand").

"O, full of scorpions is my mind, dear wife!" (3.2)
→ Metaphor. Scorpions = venomous, self-destructive thoughts. "Dear wife" — tenderness amidst madness.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE SUPERNATURAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Fair is foul, and foul is fair" (1.1)
→ Chiasmus. Moral inversion. Sets up the play's central theme of appearance vs reality.

"By the pricking of my thumbs, / Something wicked this way comes" (4.1)
→ Even the witches call Macbeth "wicked" — he has surpassed them in evil.

"Come, you spirits / That tend on mortal thoughts, unsex me here" (1.5)
→ Lady Macbeth invokes supernatural evil. "Unsex" = remove femininity/compassion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POWER & KINGSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Look like th'innocent flower, / But be the serpent under't" (1.5)
→ Biblical imagery (Garden of Eden). Duplicity as a political tool.

"Upon my head they placed a fruitless crown, / And put a barren sceptre in my grip" (3.1)
→ "Fruitless" / "barren" — power without legacy is meaningless. Explains his obsession with Banquo.

"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day" (5.5)
→ Nihilism. Repetition creates weariness. Life is "a tale told by an idiot, full of sound and fury, / Signifying nothing."`,
    printable: true,
    tags: ['Macbeth', 'quotes', 'themes', 'ambition', 'guilt', 'supernatural', 'power', 'Shakespeare'],
  },
  {
    id: 'quotes-inspector-calls-by-character',
    title: 'An Inspector Calls Key Quotes — By Character',
    category: 'Key Quotes Banks',
    subcategory: 'By Character',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Key quotations from An Inspector Calls organised by character with analytical notes.',
    content: `AN INSPECTOR CALLS — KEY QUOTES BY CHARACTER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MR BIRLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"a man has to mind his own business and look after himself and his own" (Act 1)
→ Tricolon of selfishness. Dramatic irony: the Inspector will prove the opposite.

"the Titanic … unsinkable, absolutely unsinkable" (Act 1)
→ Dramatic irony. "Absolutely" — the more certain he is, the more wrong.

"there isn't a chance of war" (Act 1)
→ Catastrophically wrong. Undermines everything else he says.

"I was quite justified" (Act 1)
→ Refuses to accept responsibility. "Justified" — sees morality in economic terms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MRS BIRLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Girls of that class" (Act 2)
→ Dismissive, snobbish. "That class" — Eva is not even worth naming.

"I blame the young man … he ought to be dealt with very severely" (Act 2)
→ Dramatic irony: she is condemning her own son, Eric.

"I accept no blame for it at all" (Act 2)
→ Absolute refusal to accept responsibility. Contrasts with Sheila's growth.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SHEILA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"But these girls aren't cheap labour — they're people" (Act 1)
→ The moral awakening. She sees what her father cannot: shared humanity.

"I'll never, never do it again to anybody" (Act 1)
→ Repetition of "never" — genuine remorse, contrasts with parents' denial.

"You're pretending everything's just as it was before" (Act 3)
→ Sheila sees the truth: it doesn't matter whether the Inspector was "real."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE INSPECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"We don't live alone. We are members of one body. We are responsible for each other." (Act 3)
→ Priestley's thesis statement. "One body" — society as a single organism.

"And if men will not learn that lesson, then they will be taught it in fire and blood and anguish." (Act 3)
→ Prophetic: WWI and WWII. "Fire and blood" — biblical apocalypse imagery.

"One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths" (Act 3)
→ Repetition of "millions" hammers home the scale. Eva is not an individual — she represents a class.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ERIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"You're not the kind of father a chap could go to when he's in trouble" (Act 3)
→ Challenges Birling's authority. Reveals the family's dysfunction.

"My God — I'm not likely to forget" (Act 3)
→ Like Sheila, Eric is changed permanently. Generational hope.`,
    printable: true,
    tags: ['An Inspector Calls', 'quotes', 'characters', 'Mr Birling', 'Sheila', 'Inspector', 'Priestley'],
  },
  {
    id: 'quotes-christmas-carol-by-stave',
    title: 'A Christmas Carol Key Quotes — By Stave & Theme',
    category: 'Key Quotes Banks',
    subcategory: 'By Text',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Essential A Christmas Carol quotations organised by stave with thematic tags.',
    content: `A CHRISTMAS CAROL — KEY QUOTES BY STAVE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAVE 1: MARLEY'S GHOST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!" [GREED]
→ "Tight-fisted" — physically clenched, closed off. "Grindstone" — he grinds others down.

"Hard and sharp as flint, from which no steel had ever struck out generous fire" [ISOLATION]
→ Extended simile. Flint is cold, hard, but COULD produce warmth — Scrooge has potential for change.

"Solitary as an oyster" [ISOLATION]
→ Simile. Oysters are closed, hard-shelled — but contain pearls. Foreshadows hidden goodness.

"I wear the chain I forged in life" — Marley [CONSEQUENCES]
→ Metaphor: every selfish act added a link. "Forged" — he MADE this himself through choice.

"Mankind was my business!" — Marley [RESPONSIBILITY]
→ "Business" — repurposes Scrooge's favourite word. True business is humanity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAVE 2: THE GHOST OF CHRISTMAS PAST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"A solitary child, neglected by his friends" [ISOLATION / CHILDHOOD]
→ Dickens shows the ROOT of Scrooge's coldness — he was abandoned. Pathos.

"Another idol has displaced me … a golden one" — Belle [GREED]
→ "Idol" = religious imagery. Money has become Scrooge's god. "Golden" — the golden calf (Biblical allusion).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAVE 3: THE GHOST OF CHRISTMAS PRESENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"God bless us, every one!" — Tiny Tim [GENEROSITY / GOODNESS]
→ "Every one" — inclusive, no exceptions. Tim has nothing but gives blessings freely.

"Are there no prisons? Are there no workhouses?" — Ghost echoing Scrooge [SOCIAL RESPONSIBILITY]
→ Scrooge's own words thrown back at him. Forces him to confront their cruelty.

"This boy is Ignorance. This girl is Want." [SOCIAL CRITICISM]
→ Allegory. Dickens directly addresses Victorian society. "Beware them both, but most of all beware this boy" — ignorance is the greatest danger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAVE 4: THE GHOST OF CHRISTMAS YET TO COME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"The case of this unhappy man might be my own" [REDEMPTION]
→ Scrooge finally sees himself in another's suffering. Empathy awakens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAVE 5: THE END OF IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy" [REDEMPTION]
→ Tricolon of similes. "Schoolboy" — he has been reborn, returned to childhood innocence.

"He became as good a friend, as good a master, and as good a man, as the good old city knew" [TRANSFORMATION]
→ Anaphora: "as good." Repetition emphasises completeness of change across all social roles.`,
    printable: true,
    tags: ['A Christmas Carol', 'quotes', 'Dickens', 'themes', 'staves', 'redemption', 'social responsibility'],
  },
  {
    id: 'quotes-power-conflict-anthology',
    title: 'Power & Conflict Poetry — Key Quotes by Poem',
    category: 'Key Quotes Banks',
    subcategory: 'By Text',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Key quotations from every Power & Conflict anthology poem with brief analytical notes.',
    content: `POWER & CONFLICT ANTHOLOGY — KEY QUOTES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OZYMANDIAS — Percy Bysshe Shelley
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Look on my Works, ye Mighty, and despair!" → Dramatic irony. The "Works" are gone.
"The lone and level sands stretch far away" → Alliteration. Nature defeats human power.
"Half sunk, a shattered visage lies" → "Shattered" — both the statue and his legacy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LONDON — William Blake
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Marks of weakness, marks of woe" → Anaphora. "Marks" = visible suffering on faces.
"Mind-forg'd manacles" → Metaphor. People are mentally imprisoned — oppression is internalised.
"Every black'ning Church appals" → Church should offer hope but is complicit in suffering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY LAST DUCHESS — Robert Browning
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"That's my last Duchess painted on the wall" → Possessive "my." She is property.
"I gave commands; / Then all smiles stopped together" → Euphemism for murder. Chilling understatement.
"As if she were alive" → She is not. The Duke prefers art he can control.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STORM ON THE ISLAND — Seamus Heaney
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"We are prepared: we build our houses squat" → Monosyllabic. Sturdy like the houses.
"It is a huge nothing that we fear" → Oxymoron. The real enemy is invisible, psychological.
"Strafes invisibly" → Military verb. Nature as warfare. (Hidden political allegory — "Stormont"?)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REMAINS — Simon Armitage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"probably armed, possibly not" → "Probably" / "possibly" — uncertainty haunts the soldier.
"his blood-Loss shadow" → Compound adjective. The dead man is reduced to a stain.
"his bloody life in my bloody hands" → "Bloody" shifts from literal to expressive. Guilt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPOSURE — Wilfred Owen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Our brains ache, in the merciless iced east winds that knive us" → Personification. Nature as enemy.
"But nothing happens" → Repeated refrain. Anti-climax. War's futility.
"For love of God seems dying" → Faith destroyed by suffering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHARGE OF THE LIGHT BRIGADE — Alfred Lord Tennyson
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Into the valley of Death / Rode the six hundred" → Biblical allusion. Dactylic rhythm mimics galloping.
"Theirs not to reason why, / Theirs but to do and die" → Obedience to authority, even unto death.
"Cannon to right of them, / Cannon to left of them" → Repetition. Surrounded, trapped.`,
    printable: true,
    tags: ['Power & Conflict', 'poetry', 'quotes', 'AQA', 'anthology', 'Ozymandias', 'London', 'Remains'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  ASSESSMENT RUBRICS                                                    ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'rubric-lit-essay-general',
    title: 'Literature Essay Grading Rubric — General Purpose',
    category: 'Assessment Rubrics',
    subcategory: 'Literature',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'A general-purpose grading rubric for Literature essays, aligned to GCSE mark scheme bands.',
    content: `LITERATURE ESSAY GRADING RUBRIC

Student: _____________ Date: _______ Text: _____________ Grade: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITERION           | 1-2      | 3-4       | 5-6      | 7-8        | 9
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARGUMENT (AO1)      | Simple   | Some      | Clear,   | Thoughtful,| Critical,
Response to         | comment  | under-    | explained| developed  | conceptual
question            |          | standing  | response | argument   | exploration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVIDENCE (AO1)      | Simple   | Some      | Relevant | Well-      | Judicious,
Use of              | reference| supported | quotes,  | chosen,    | precisely
quotations          |          | points    | used     | integrated | embedded
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
METHODS (AO2)       | Simple   | Some      | Clear    | Detailed   | Perceptive,
Analysis of         | awareness| awareness | analysis | analysis   | exploratory
language/structure  |          |           |          |            | analysis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TERMINOLOGY (AO2)   | None or  | Occasional| Appropriate| Effective | Sophisticated
Use of subject      | incorrect| use       | use      | use        | and precise
terminology         |          |           |          |            | use
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTEXT (AO3)       | None or  | Simple    | Some     | Relevant,  | Convincingly
Understanding of    | very     | mention   | linked   | convincingly| integrated
context             | simple   |           | context  | linked     | throughout
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALTERNATIVE         | None     | None      | Hint     | Some       | Sustained,
INTERPRETATIONS     |          |           |          | offered    | exploratory
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STRENGTHS:
1. _____________________________________________
2. _____________________________________________

TARGETS FOR IMPROVEMENT:
1. _____________________________________________
2. _____________________________________________

NEXT STEPS:
□ Re-draft with improvements
□ Practice [specific skill] with another text/question
□ Review model answer at target grade`,
    printable: true,
    tags: ['rubric', 'assessment', 'Literature', 'grading', 'essay', 'AO1', 'AO2', 'AO3'],
  },
  {
    id: 'rubric-creative-writing',
    title: 'Creative Writing Grading Rubric (Paper 1 Q5)',
    category: 'Assessment Rubrics',
    subcategory: 'Language',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Teacher grading template for AQA Language Paper 1 Q5 (descriptive/narrative writing).',
    content: `CREATIVE WRITING GRADING RUBRIC — AQA Paper 1 Q5 (40 marks)

Student: _____________ Date: _______ Prompt: _____________ Grade: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT & ORGANISATION (24 marks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMUNICATION                                          /6
□ 1-2: Simple, limited ideas
□ 3-4: Some success in engaging reader
□ 5:   Clear, effective communication
□ 6:   Compelling, convincing writing that grips reader

TONE & STYLE                                           /6
□ 1-2: Limited awareness of audience
□ 3-4: Conscious attempt at appropriate tone
□ 5:   Consistent, effective tone throughout
□ 6:   Sophisticated, nuanced tone and register

VOCABULARY                                             /6
□ 1-2: Simple, limited word choices
□ 3-4: Some conscious vocabulary choices
□ 5:   Increasingly sophisticated vocabulary
□ 6:   Extensive, ambitious vocabulary used with precision

STRUCTURE & ORGANISATION                               /6
□ 1-2: Random, unstructured paragraphing
□ 3-4: Some structural variety, basic paragraphing
□ 5:   Effective paragraphing, clear structural choices
□ 6:   Compelling structural choices — shifts, contrasts, pacing

Content & Organisation subtotal: ___ / 24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL ACCURACY (16 marks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SENTENCE FORMS                                         /4
□ 1: Limited variety
□ 2: Some variety (short + long)
□ 3: Good variety, used for effect
□ 4: Sophisticated range — fragments, complex, compound, minor

PUNCTUATION                                            /4
□ 1: Basic (full stops, capitals)
□ 2: Some range (commas, question marks)
□ 3: Good range (semicolons, colons, dashes, ellipsis)
□ 4: Wide range, used accurately and for effect

SPELLING                                               /4
□ 1: Limited accuracy
□ 2: Reasonable accuracy
□ 3: Generally accurate, including complex words
□ 4: Accurate throughout, including ambitious vocabulary

VOCABULARY ACCURACY                                    /4
□ 1: Limited
□ 2: Some variety
□ 3: Varied and appropriate
□ 4: Extensive, precise, and ambitious

Technical Accuracy subtotal: ___ / 16

TOTAL: ___ / 40

STRENGTHS:
1. _____________________________________________
2. _____________________________________________

TARGETS:
1. _____________________________________________
2. _____________________________________________`,
    printable: true,
    tags: ['rubric', 'creative writing', 'Paper 1', 'Q5', 'AQA', 'grading', 'assessment'],
  },
  {
    id: 'rubric-spoken-language',
    title: 'Spoken Language Endorsement Assessment Sheet',
    category: 'Assessment Rubrics',
    subcategory: 'Spoken Language',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    description: 'Grading template for the spoken language endorsement (presentation, Q&A, listening).',
    content: `SPOKEN LANGUAGE ENDORSEMENT — ASSESSMENT SHEET

Student: _____________ Date: _______ Topic: _____________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSESSMENT CRITERIA                Pass    Merit    Distinction
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRESENTATION (AO7)
Presents information & ideas        □       □         □
Selects and organises clearly       □       □         □

DISCUSSION & LISTENING (AO8)
Responds to questions appropriately □       □         □
Uses Standard English where needed  □       □         □

SPOKEN LANGUAGE (AO9)
Uses language effectively           □       □         □
Adapts to audience/purpose          □       □         □

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DETAILED FEEDBACK:

PRESENTATION SKILLS:
Eye contact:        □ Limited  □ Some     □ Consistent  □ Engaging
Body language:      □ Limited  □ Some     □ Confident   □ Commanding
Voice projection:   □ Quiet    □ Adequate □ Clear       □ Dynamic
Pace:               □ Too fast □ Uneven   □ Steady      □ Varied for effect
Use of notes:       □ Read out □ Relied on□ Referenced  □ Rarely needed

CONTENT & STRUCTURE:
Opening:            □ Weak     □ Adequate □ Clear       □ Compelling
Organisation:       □ Unclear  □ Some     □ Logical     □ Sophisticated
Evidence/examples:  □ None     □ Limited  □ Relevant    □ Well-chosen
Conclusion:         □ Weak     □ Adequate □ Clear       □ Memorable

LANGUAGE USE:
Standard English:   □ Limited  □ Some     □ Consistent  □ Throughout
Vocabulary:         □ Basic    □ Adequate □ Varied      □ Ambitious
Rhetorical devices: □ None     □ Attempted□ Some        □ Effective

Q&A RESPONSES:
Relevance:          □ Off-topic□ Some     □ Relevant    □ Insightful
Development:        □ Brief    □ Some     □ Developed   □ Extensive

OVERALL GRADE: □ Pass  □ Merit  □ Distinction  □ Not yet achieved

COMMENTS:
_____________________________________________
_____________________________________________
_____________________________________________`,
    printable: true,
    tags: ['spoken language', 'endorsement', 'assessment', 'rubric', 'presentation', 'speaking'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  REVISION CHECKLISTS                                                   ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'checklist-aqa-lit-p1',
    title: 'AQA Literature Paper 1 Revision Checklist',
    category: 'Revision Checklists',
    subcategory: 'AQA Literature',
    examBoard: ['AQA'],
    yearGroup: ['Year 11'],
    description: 'Student-facing revision checklist for AQA Literature Paper 1 (Shakespeare + 19th Century Novel).',
    content: `AQA ENGLISH LITERATURE PAPER 1 — REVISION CHECKLIST
Shakespeare and the 19th-Century Novel | 1 hr 45 min

Name: _________________ Target grade: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION A: SHAKESPEARE (30 marks + 4 SPaG)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE:
□ I can name and describe all major characters
□ I can summarise the plot of each act
□ I know 15+ key quotations from memory
□ I understand the historical and social context
□ I can explain the key themes and how they develop

SKILLS:
□ I can write about the extract AND the wider play
□ I can analyse language at word level (connotations, techniques)
□ I can discuss form and structure (soliloquy, verse/prose, act structure)
□ I can integrate context without "bolting it on"
□ I can embed quotations fluently into sentences
□ I can use subject terminology accurately
□ I can offer alternative interpretations

EXAM TECHNIQUE:
□ I know how to spend my time (50 minutes approx)
□ I plan before I write (5 minutes)
□ I write 3–4 developed paragraphs
□ I always link back to the question
□ I check SPaG in the final 2 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION B: 19TH-CENTURY NOVEL (30 marks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE:
□ I can name and describe all major characters
□ I can summarise the plot (beginning, middle, end)
□ I know 15+ key quotations from memory
□ I understand Victorian/19th-century social context
□ I can explain the key themes (e.g., class, morality, gender)

SKILLS:
□ I can write about the extract AND the wider novel
□ I can analyse language choices in detail
□ I can discuss narrative voice and structure
□ I can explain how context shapes meaning
□ I can compare different characters or moments

EXAM TECHNIQUE:
□ I know how to spend my time (50 minutes approx)
□ I plan before I write (5 minutes)
□ I write 3–4 developed paragraphs
□ I always link back to the question

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MY REVISION PRIORITIES (number your top 3):
___ ___________________________________
___ ___________________________________
___ ___________________________________

CONFIDENCE RATING: □ Not confident  □ OK  □ Confident  □ Very confident`,
    printable: true,
    tags: ['revision', 'checklist', 'AQA', 'Literature', 'Paper 1', 'Shakespeare', '19th century novel'],
  },
  {
    id: 'checklist-aqa-lang-p1',
    title: 'AQA Language Paper 1 Revision Checklist',
    category: 'Revision Checklists',
    subcategory: 'AQA Language',
    examBoard: ['AQA'],
    yearGroup: ['Year 11'],
    description: 'Student-facing revision checklist for AQA Language Paper 1 (Creative Reading & Writing).',
    content: `AQA ENGLISH LANGUAGE PAPER 1 — REVISION CHECKLIST
Explorations in Creative Reading and Writing | 1 hr 45 min

Name: _________________ Target grade: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION A: READING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q1 — LIST FOUR THINGS (4 marks, ~5 mins)
□ I read the LINE REFERENCES carefully
□ I identify EXPLICIT information only (not inferences)
□ I can write short, clear statements

Q2 — LANGUAGE ANALYSIS (8 marks, ~10 mins)
□ I select SHORT, specific quotations
□ I analyse individual WORDS (connotations, effects)
□ I use subject terminology (metaphor, sibilance, semantic field, etc.)
□ I explain the EFFECT on the reader
□ I write 2 developed paragraphs

Q3 — STRUCTURE ANALYSIS (8 marks, ~10 mins)
□ I know structural features: focus shift, narrative perspective, pace, chronology, zoom in/out
□ I can explain WHY the writer makes structural choices
□ I write about the beginning, middle, AND end of the extract
□ I use structural terminology (foreshadowing, cyclical, climax, etc.)

Q4 — EVALUATION (20 marks, ~20 mins)
□ I ENGAGE with the given statement (agree, disagree, or both)
□ I use quotations to support my opinion
□ I explain HOW the writer achieves the effect stated
□ I write 3–4 developed paragraphs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION B: WRITING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q5 — CREATIVE WRITING (40 marks, ~45 mins)
□ I spend 5 minutes PLANNING (structure, techniques, vocabulary)
□ I use a clear STRUCTURE (zoom in/out, circular, contrast, 5 senses)
□ I write 5–6 focused paragraphs (quality over quantity)
□ I vary SENTENCE STRUCTURES (short for impact, complex for detail)
□ I include a range of TECHNIQUES (metaphor, simile, personification, pathetic fallacy)
□ I use AMBITIOUS VOCABULARY (not just "nice," "big," "sad")
□ I use a range of PUNCTUATION (semicolons, colons, dashes, ellipsis)
□ I check SPELLING in the final 3 minutes
□ I re-read for SENSE and fluency

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIMING GUIDE:
Q1: 5 mins | Q2: 10 mins | Q3: 10 mins | Q4: 20 mins | Q5: 45 mins | Check: 5 mins

MY WEAKEST AREAS (circle):
Q1  Q2  Q3  Q4  Q5-Content  Q5-SPaG

ACTION PLAN:
_____________________________________________
_____________________________________________`,
    printable: true,
    tags: ['revision', 'checklist', 'AQA', 'Language', 'Paper 1', 'creative reading', 'creative writing'],
  },
  {
    id: 'checklist-edexcel-lang',
    title: 'Edexcel Language Revision Checklist',
    category: 'Revision Checklists',
    subcategory: 'Edexcel Language',
    examBoard: ['Edexcel'],
    yearGroup: ['Year 11'],
    description: 'Student-facing revision checklist for Edexcel English Language (both papers).',
    content: `EDEXCEL ENGLISH LANGUAGE — REVISION CHECKLIST
Paper 1: Fiction & Imaginative Writing | Paper 2: Non-Fiction & Transactional Writing

Name: _________________ Target grade: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAPER 1: FICTION AND IMAGINATIVE WRITING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION A: READING (40 marks)
□ I can analyse language effects at word level
□ I can explain structural choices and their effects
□ I can evaluate a writer's success critically
□ I can use quotations precisely and embed them
□ I can use subject terminology confidently
□ I can write about the TEXT (not just the story)

SECTION B: IMAGINATIVE WRITING (40 marks)
□ I plan before I write (structure, techniques, vocabulary)
□ I can write effective descriptions (senses, imagery, atmosphere)
□ I can write engaging narratives (character, tension, pacing)
□ I vary sentence forms for effect
□ I use ambitious vocabulary accurately
□ I punctuate accurately (including semicolons, colons, dashes)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAPER 2: NON-FICTION AND TRANSACTIONAL WRITING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION A: READING (40 marks)
□ I can identify and explain explicit and implicit information
□ I can analyse language in non-fiction texts
□ I can compare TWO texts (synthesise information)
□ I can compare writers' perspectives and methods
□ I can distinguish between fact, opinion, and bias
□ I can evaluate how a writer builds an argument

SECTION B: TRANSACTIONAL WRITING (40 marks)
□ I know the conventions of: article / letter / speech / essay / review
□ I can match tone and register to audience and purpose
□ I can structure an argument logically (introduction, development, conclusion)
□ I can use persuasive devices: rhetorical questions, statistics, anecdote, direct address, tricolon
□ I can use counter-arguments effectively
□ I vary sentence forms and paragraph lengths
□ I punctuate and spell accurately

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY DIFFERENCES FROM AQA:
□ I understand Edexcel uses 19th, 20th, and 21st century fiction in Paper 1
□ I know Paper 2 tests comparison of non-fiction texts
□ I know Edexcel rewards "exploratory" analysis (asking "what else?")
□ I know both papers are 1 hour 45 minutes each

CONFIDENCE: □ Paper 1 Reading  □ Paper 1 Writing  □ Paper 2 Reading  □ Paper 2 Writing`,
    printable: true,
    tags: ['revision', 'checklist', 'Edexcel', 'Language', 'Paper 1', 'Paper 2', 'fiction', 'non-fiction'],
  },
  {
    id: 'checklist-aqa-lit-p2',
    title: 'AQA Literature Paper 2 Revision Checklist',
    category: 'Revision Checklists',
    subcategory: 'AQA Literature',
    examBoard: ['AQA'],
    yearGroup: ['Year 11'],
    description: 'Student-facing revision checklist for AQA Literature Paper 2 (Modern Text + Poetry).',
    content: `AQA ENGLISH LITERATURE PAPER 2 — REVISION CHECKLIST
Modern Texts and Poetry | 2 hr 15 min

Name: _________________ Target grade: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION A: MODERN TEXT (34 marks + 4 SPaG)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE:
□ I know all characters and their roles/functions
□ I can summarise the plot and key events
□ I have memorised 15+ key quotations
□ I understand the social/historical context
□ I can explain ALL major themes

SKILLS:
□ I answer from MEMORY (no extract — this is a closed-book section)
□ I write about the WHOLE text, not just one section
□ I can analyse writer's methods (language, form, structure)
□ I integrate context meaningfully
□ I use subject terminology accurately

EXAM TECHNIQUE:
□ I spend ~45 minutes on this section
□ I plan for 5 minutes before writing
□ I write 4–5 paragraphs from memory
□ I use short, embedded quotations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION B: POETRY ANTHOLOGY (30 marks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE:
□ I know all 15 poems in my cluster
□ I have 2–3 key quotes memorised per poem
□ I know the themes each poem explores
□ I understand each poet's context
□ I can identify form/structure features in each poem
□ I have prepared COMPARISON PAIRS for each theme

SKILLS:
□ I can compare TWO poems throughout my essay (not one then the other)
□ I choose my comparison poem WISELY (strongest thematic link)
□ I analyse language AND form/structure
□ I integrate context into my analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION C: UNSEEN POETRY (32 marks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q1 — SINGLE POEM (24 marks, ~25 mins):
□ I read the poem at least TWICE before writing
□ I identify the overall tone/mood/message
□ I analyse language techniques with word-level focus
□ I discuss form and structure (line breaks, stanzas, rhyme, rhythm)
□ I write about the poem's meaning AND methods

Q2 — COMPARISON (8 marks, ~15 mins):
□ I compare ONE specific aspect (e.g., how both poets present [theme])
□ I keep it focused — 2 developed comparative points
□ I use comparative connectives (similarly, in contrast, whereas)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIMING: Section A: 45 min | Section B: 45 min | Section C: 40 min | Check: 5 min

MY TOP 3 PRIORITIES:
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________`,
    printable: true,
    tags: ['revision', 'checklist', 'AQA', 'Literature', 'Paper 2', 'modern text', 'poetry', 'unseen poetry'],
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  STARTER ACTIVITIES                                                    ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  {
    id: 'starter-word-of-the-day',
    title: 'Word of the Day — Vocabulary Builder Starter',
    category: 'Starter Activities',
    subcategory: 'Vocabulary',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    description: '5-minute vocabulary starter with a bank of 20 ambitious words for daily use.',
    content: `WORD OF THE DAY — 5-MINUTE VOCABULARY STARTER

INSTRUCTIONS: Display the word on the board. Students have 3 minutes to:
1. Guess the meaning from the word's roots
2. Write a sentence using the word
3. Identify the word class (noun, verb, adjective, adverb)

Then: reveal the definition, discuss connotations, and challenge students to use it in their writing that lesson.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORD BANK (20 words — one per school day for a month):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UBIQUITOUS (adj) — Present everywhere. "Phones are ubiquitous in modern life."
2. EPHEMERAL (adj) — Lasting a very short time. "The ephemeral beauty of cherry blossom."
3. PERNICIOUS (adj) — Harmful in a subtle way. "The pernicious effects of gossip."
4. RESILIENT (adj) — Able to recover quickly. "A resilient community rebuilt after the flood."
5. INSIDIOUS (adj) — Proceeding harmfully but subtly. "An insidious form of bullying."
6. JUXTAPOSITION (n) — Placing contrasting things side by side. "The juxtaposition of wealth and poverty."
7. PARADOX (n) — A seemingly contradictory statement that reveals a truth. "The paradox of choice."
8. AMBIVALENT (adj) — Having mixed feelings. "She felt ambivalent about leaving home."
9. PRAGMATIC (adj) — Dealing with things practically. "A pragmatic approach to revision."
10. EVOCATIVE (adj) — Bringing strong images or feelings to mind. "An evocative description of autumn."
11. MELANCHOLY (n/adj) — A deep, reflective sadness. "A melancholy tone pervades the poem."
12. OMINOUS (adj) — Suggesting something bad will happen. "An ominous silence filled the room."
13. POIGNANT (adj) — Evoking a keen sense of sadness. "A poignant moment of farewell."
14. VISCERAL (adj) — Deep, gut-level feeling. "A visceral reaction to the violence."
15. NUANCED (adj) — Showing subtle differences. "A nuanced understanding of the character."
16. CATHARTIC (adj) — Providing relief through expression of emotions. "Writing can be cathartic."
17. DICHOTOMY (n) — A division into two opposing parts. "The dichotomy between appearance and reality."
18. PERTINENT (adj) — Relevant, applicable. "A pertinent quotation to support the argument."
19. SALIENT (adj) — Most noticeable or important. "The salient features of the writer's style."
20. COMPELLING (adj) — Evoking interest powerfully. "A compelling argument for change."

EXTENSION: Can students find examples of this word in the text they are studying?
HOMEWORK: Use 3 of the week's words in a paragraph of writing.`,
    printable: true,
    tags: ['starter', 'vocabulary', 'word of the day', '5 minutes', 'warm-up', 'literacy'],
  },
  {
    id: 'starter-quotation-recall',
    title: 'Quotation Recall Challenge — Memory Starter',
    category: 'Starter Activities',
    subcategory: 'Quotation Practice',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    description: '5-minute quotation recall starter to build exam-ready memory of key quotes.',
    content: `QUOTATION RECALL CHALLENGE — 5-MINUTE STARTER

INSTRUCTIONS: Choose ONE activity per lesson. Students work individually for 3 minutes, then compare with a partner for 2 minutes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTIVITY 1: FILL THE GAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display quotations with key words missing. Students fill them in.

Example (Macbeth):
"Is this a _______ which I see before me, the _______ toward my hand?"
"Out, _______ spot! Out, I say!"
"Look like th'innocent _______, but be the _______ under't"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTIVITY 2: WHO SAID IT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display 5 quotations. Students identify the speaker AND the context.

Example (An Inspector Calls):
"a man has to mind his own business" → Who? When?
"But these girls aren't cheap labour — they're people" → Who? When?
"fire and blood and anguish" → Who? When?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTIVITY 3: QUOTE RACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display a THEME (e.g., "Power," "Guilt," "Isolation").
Students write as many relevant quotations as they can in 3 minutes.
Award points: 1 for a correct quote, 2 if they can name the act/chapter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTIVITY 4: MATCH THE QUOTE TO THE THEME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display 5 quotations and 5 themes. Students draw lines to match.
CHALLENGE: some quotes could link to multiple themes — award bonus marks for justified alternative links.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTIVITY 5: ANALYSE IN 30 SECONDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display ONE quotation. Students have 30 seconds to:
• Identify ONE technique
• Explain its effect in ONE sentence
Then share with a partner. Cold-call 2–3 students to share.

TRACKING: Keep a class leaderboard across the term. Students love the competition.`,
    printable: true,
    tags: ['starter', 'quotation', 'recall', 'memory', '5 minutes', 'exam prep', 'warm-up'],
  },
  {
    id: 'starter-technique-spotter',
    title: 'Technique Spotter — Analysis Warm-Up',
    category: 'Starter Activities',
    subcategory: 'Analysis Skills',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: '5-minute starter where students identify and analyse techniques in short extracts.',
    content: `TECHNIQUE SPOTTER — 5-MINUTE ANALYSIS WARM-UP

INSTRUCTIONS: Display a short extract (3–5 lines). Students:
1. Identify as many techniques as they can (2 minutes)
2. Choose ONE and write a mini-analysis sentence (2 minutes)
3. Share with the class (1 minute)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXTRACT 1 (Fiction):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"The forest swallowed them whole. Trees leaned in like curious giants, their branches grasping at the fading light. Somewhere, deep in the belly of the woods, something stirred."

TECHNIQUES TO FIND: personification ("swallowed," "curious," "grasping"), simile ("like curious giants"), metaphor ("belly of the woods"), short sentence for tension, pathetic fallacy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXTRACT 2 (Non-fiction):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Every year, 8 million tonnes of plastic pour into our oceans. Eight million. That's a dumper truck every single minute. Are we really going to sit here and do nothing?"

TECHNIQUES TO FIND: statistic, repetition ("eight million"), simile/comparison ("dumper truck"), rhetorical question, direct address ("we"), emotive language

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXTRACT 3 (Poetry):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Half sunk, a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read"

TECHNIQUES TO FIND: alliteration ("cold command"), listing ("frown … lip … sneer"), enjambment, semantic field of decay ("half sunk," "shattered"), personification (the statue's expressions "tell")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXTRACT 4 (Speech — Martin Luther King Jr.):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"I have a dream that one day this nation will rise up and live out the true meaning of its creed."

TECHNIQUES TO FIND: anaphora ("I have a dream"), metaphor ("rise up"), abstract nouns ("dream," "meaning," "creed"), inclusive language ("this nation")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MODEL ANALYSIS SENTENCE:
"The verb 'swallowed' personifies the forest as a predator, creating a sense of threat and suggesting the characters are helpless — consumed by a force they cannot control."

DIFFERENTIATION:
Foundation: Identify 2 techniques and name them.
Higher: Identify techniques AND analyse the effect of one in a full sentence.
Challenge: Analyse the effect AND suggest why the writer made this choice.`,
    printable: true,
    tags: ['starter', 'technique', 'analysis', 'language', '5 minutes', 'warm-up', 'identification'],
  },
  {
    id: 'starter-creative-writing-warmup',
    title: 'Sentence Crafting — Creative Writing Warm-Up',
    category: 'Starter Activities',
    subcategory: 'Creative Writing',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    description: '5-minute sentence-level creative writing exercises to build fluency and ambition.',
    content: `SENTENCE CRAFTING — 5-MINUTE CREATIVE WRITING WARM-UP

INSTRUCTIONS: Choose ONE challenge per lesson. Students write for 3 minutes, then 2–3 share their best sentence. Celebrate the best with "Sentence of the Day."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHALLENGE 1: THE ONE-SENTENCE STORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write a complete story in a single sentence. Must include a character, a problem, and a resolution.

Example: "She found the letter behind the radiator ten years too late, read it once, and finally understood why he'd left without saying goodbye."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHALLENGE 2: SHOW, DON'T TELL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rewrite the boring sentence so the reader can FEEL the emotion without you naming it.

• "She was scared." → ________________________________
• "He was angry." → ________________________________
• "The place was creepy." → ________________________________
• "She was happy." → ________________________________

Example: "She was scared" → "Her fingers found the door handle and wouldn't let go."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHALLENGE 3: POWER OPENING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write the opening sentence of a story using the given technique:
• Monday: Start with a sound
• Tuesday: Start with a single word. Then a longer sentence.
• Wednesday: Start with a question
• Thursday: Start with a description of setting (pathetic fallacy)
• Friday: Start in medias res (in the middle of the action)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHALLENGE 4: VOCABULARY SWAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rewrite this sentence, replacing every underlined word with something more ambitious:

"The nice old man walked slowly down the big road, looking at the pretty flowers."
→ _____________________________________________

Example: "The weathered gentleman shuffled along the sprawling avenue, admiring the vibrant wildflowers."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHALLENGE 5: SENTENCE VARIETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Describe this image using EXACTLY 5 sentences:
1. A long, complex sentence (15+ words)
2. A short sentence (under 5 words)
3. A sentence starting with a verb (-ing or -ed)
4. A sentence with a semicolon
5. A one-word sentence (or fragment)

TEACHER TIP: Collect the best sentences on a "Wall of Wonder" display. Students love seeing their work celebrated and it sets an aspirational standard.`,
    printable: true,
    tags: ['starter', 'creative writing', 'sentences', '5 minutes', 'warm-up', 'vocabulary', 'craft'],
  },
]
