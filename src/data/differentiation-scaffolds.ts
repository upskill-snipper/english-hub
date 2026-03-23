// ---------------------------------------------------------------------------
// Differentiation Scaffolds & Frameworks
// Pre-built templates at three levels: Foundation (LA), Core (MA), Extension (HA)
// ---------------------------------------------------------------------------

export type DifferentiationLevel = 'foundation' | 'core' | 'extension'
export type TaskType = 'essay_writing' | 'extract_analysis' | 'creative_writing' | 'comparison'
export type EssaySubType = 'argumentative' | 'analytical' | 'descriptive' | 'persuasive'

export interface ScaffoldTemplate {
  id: string
  taskType: TaskType
  subType?: EssaySubType
  level: DifferentiationLevel
  title: string
  description: string
  frame: string[]          // The structured frame / template lines
  sentenceStarters?: string[]
  wordBank?: string[]
  tips?: string[]
}

export interface SentenceStarterBank {
  id: string
  skill: string
  level: DifferentiationLevel
  starters: string[]
}

export interface VocabularySheet {
  id: string
  text: string
  level: DifferentiationLevel
  words: { term: string; definition: string; example?: string }[]
}

export interface QuoteBank {
  id: string
  text: string
  difficulty: 'accessible' | 'moderate' | 'challenging'
  quotes: { quote: string; speaker?: string; context: string; technique?: string }[]
}

// ---------------------------------------------------------------------------
// 1. ESSAY WRITING FRAMES — Argumentative (3 levels)
// ---------------------------------------------------------------------------

const argumentativeFoundation: ScaffoldTemplate = {
  id: 'essay-arg-foundation',
  taskType: 'essay_writing',
  subType: 'argumentative',
  level: 'foundation',
  title: 'Argumentative Essay — Foundation',
  description: 'Heavily scaffolded argumentative essay frame with sentence starters and word bank.',
  frame: [
    'Introduction:',
    '  In this essay, I will argue that ___.',
    '  This is important because ___.',
    '',
    'Paragraph 1 — First reason:',
    '  One reason I believe this is because ___.',
    '  Evidence for this is "___" which shows ___.',
    '  This means that ___.',
    '',
    'Paragraph 2 — Second reason:',
    '  Another reason is ___.',
    '  For example, ___.',
    '  This proves that ___.',
    '',
    'Paragraph 3 — Counter-argument:',
    '  Some people might say ___.',
    '  However, I disagree because ___.',
    '',
    'Conclusion:',
    '  In conclusion, I believe ___ because ___.',
  ],
  sentenceStarters: [
    'One reason I believe this is because...',
    'Evidence for this is...',
    'This means that...',
    'Another reason is...',
    'For example...',
    'Some people might say...',
    'However, I disagree because...',
    'In conclusion...',
  ],
  wordBank: [
    'argue', 'believe', 'evidence', 'however', 'therefore',
    'furthermore', 'in addition', 'on the other hand', 'consequently', 'proves',
  ],
  tips: [
    'Use one reason per paragraph.',
    'Always include evidence to support your point.',
    'Remember to explain what your evidence shows.',
  ],
}

const argumentativeCore: ScaffoldTemplate = {
  id: 'essay-arg-core',
  taskType: 'essay_writing',
  subType: 'argumentative',
  level: 'core',
  title: 'Argumentative Essay — Core',
  description: 'Paragraph frames with key vocabulary provided for argumentative writing.',
  frame: [
    'Introduction: State your argument clearly. Outline 2-3 reasons you will explore.',
    '',
    'Paragraph 1: Present your strongest reason.',
    '  Point → Evidence → Explain → Link back to argument.',
    '',
    'Paragraph 2: Present your second reason with a different type of evidence.',
    '  Point → Evidence → Explain → Link back to argument.',
    '',
    'Paragraph 3: Address the counter-argument and refute it.',
    '  Counter-point → Why it is flawed → Your rebuttal with evidence.',
    '',
    'Conclusion: Summarise your key reasons. End with a strong final statement.',
  ],
  sentenceStarters: [
    'It is clear that...',
    'This is further supported by...',
    'Critics may argue that...; however...',
    'Ultimately, the evidence demonstrates...',
  ],
  wordBank: [
    'compelling', 'substantiate', 'refute', 'moreover', 'nonetheless',
    'juxtapose', 'critique', 'assertion',
  ],
}

const argumentativeExtension: ScaffoldTemplate = {
  id: 'essay-arg-extension',
  taskType: 'essay_writing',
  subType: 'argumentative',
  level: 'extension',
  title: 'Argumentative Essay — Extension',
  description: 'Open-ended argumentative essay task with critical thinking prompts.',
  frame: [
    'Construct a sustained, nuanced argument responding to the statement provided.',
    '',
    'Your essay should:',
    '  • Present a clear thesis with a sophisticated line of reasoning.',
    '  • Integrate evidence from multiple sources, analysing its reliability.',
    '  • Consider at least two counter-arguments and evaluate their validity.',
    '  • Use discourse markers to create cohesion across your argument.',
    '  • Conclude with a qualified judgement that reflects the complexity of the issue.',
  ],
  tips: [
    'Consider: whose perspective is missing from this debate?',
    'How might historical context change the strength of this argument?',
    'Can you connect this to wider reading or current affairs?',
    'Try embedding short quotations within your own sentences for fluency.',
  ],
}

// ---------------------------------------------------------------------------
// 2. ESSAY WRITING FRAMES — Analytical (3 levels)
// ---------------------------------------------------------------------------

const analyticalFoundation: ScaffoldTemplate = {
  id: 'essay-ana-foundation',
  taskType: 'essay_writing',
  subType: 'analytical',
  level: 'foundation',
  title: 'Analytical Essay — Foundation',
  description: 'Guided analytical essay with heavy scaffolding.',
  frame: [
    'Introduction:',
    '  The writer presents the theme of ___ in this text.',
    '  They do this by using ___.',
    '',
    'Paragraph 1:',
    '  The writer uses the technique of ___.',
    '  An example of this is "___".',
    '  This makes the reader feel ___.',
    '  This is effective because ___.',
    '',
    'Paragraph 2:',
    '  Another technique the writer uses is ___.',
    '  We can see this in the quotation "___".',
    '  The effect of this is ___.',
    '',
    'Conclusion:',
    '  Overall, the writer successfully shows ___ by using ___.',
  ],
  sentenceStarters: [
    'The writer uses...',
    'An example of this is...',
    'This makes the reader feel...',
    'This is effective because...',
    'The word "___" suggests...',
  ],
  wordBank: [
    'metaphor', 'simile', 'personification', 'alliteration', 'imagery',
    'suggests', 'implies', 'conveys', 'creates', 'emphasises',
  ],
  tips: [
    'Always quote directly from the text.',
    'Name the technique before you explain it.',
    'Think about how the reader is meant to feel.',
  ],
}

const analyticalCore: ScaffoldTemplate = {
  id: 'essay-ana-core',
  taskType: 'essay_writing',
  subType: 'analytical',
  level: 'core',
  title: 'Analytical Essay — Core',
  description: 'Structured analytical paragraphs with some scaffolding.',
  frame: [
    'Introduction: Identify the theme/idea and briefly explain how the writer presents it.',
    '',
    'Paragraph 1 (PEEL):',
    '  Point — What technique or idea are you exploring?',
    '  Evidence — Short, embedded quotation.',
    '  Explain — What does this suggest? What is the effect on the reader?',
    '  Link — How does this connect to the wider theme or question?',
    '',
    'Paragraph 2 (PEEL): Explore a second technique or shift in tone.',
    '',
    'Paragraph 3 (PEEL): Consider the writer\'s overall purpose or how context shapes meaning.',
    '',
    'Conclusion: Evaluate the writer\'s success. Which technique is most effective and why?',
  ],
  sentenceStarters: [
    'The writer employs... to convey...',
    'The connotations of "___" suggest...',
    'This links to the broader theme of...',
    'Contextually, this reflects...',
  ],
  wordBank: [
    'connotation', 'juxtaposition', 'semantic field', 'motif', 'foreshadowing',
    'symbolism', 'tone', 'register', 'ambiguity',
  ],
}

const analyticalExtension: ScaffoldTemplate = {
  id: 'essay-ana-extension',
  taskType: 'essay_writing',
  subType: 'analytical',
  level: 'extension',
  title: 'Analytical Essay — Extension',
  description: 'Open analytical task with critical thinking and wider reading connections.',
  frame: [
    'Write a detailed analytical essay exploring how the writer presents [theme/character].',
    '',
    'Your response should:',
    '  • Develop a critical argument rather than simply identifying techniques.',
    '  • Analyse individual word choices and their layered connotations.',
    '  • Explore how structure and form contribute to meaning.',
    '  • Consider how context (social, historical, literary) shapes interpretation.',
    '  • Where relevant, compare to other texts or critical perspectives.',
    '  • Use tentative language to explore multiple possible interpretations.',
  ],
  tips: [
    'Try using "alternatively" or "a more subversive reading suggests..." to show multiple interpretations.',
    'Consider what the writer is NOT saying — gaps and silences can be analysed too.',
    'How does this text sit within its literary tradition? Does it conform or subvert expectations?',
    'Reference a critical theorist or literary movement if appropriate.',
  ],
}

// ---------------------------------------------------------------------------
// 3. ESSAY WRITING FRAMES — Persuasive (3 levels)
// ---------------------------------------------------------------------------

const persuasiveFoundation: ScaffoldTemplate = {
  id: 'essay-per-foundation',
  taskType: 'essay_writing',
  subType: 'persuasive',
  level: 'foundation',
  title: 'Persuasive Writing — Foundation',
  description: 'Step-by-step persuasive writing template with rhetorical devices word bank.',
  frame: [
    'Opening — Hook the reader:',
    '  Imagine a world where ___.',
    '  How would you feel if ___?',
    '',
    'Paragraph 1 — Emotional appeal:',
    '  Think about ___. It is ___ that ___.',
    '  For example, ___.',
    '',
    'Paragraph 2 — Logical appeal:',
    '  Statistics show that ___.',
    '  This proves that ___.',
    '',
    'Paragraph 3 — Call to action:',
    '  We must act now because ___.',
    '  If we do nothing, ___.',
    '',
    'Ending — Powerful final sentence:',
    '  The time to act is now. Together, we can ___.',
  ],
  sentenceStarters: [
    'Imagine a world where...',
    'How would you feel if...?',
    'Statistics show that...',
    'We must act now because...',
    'The time to act is now.',
  ],
  wordBank: [
    'rhetorical question', 'emotive language', 'rule of three',
    'imperative', 'repetition', 'statistics', 'anecdote',
    'directly address', 'exaggeration', 'inclusive pronouns',
  ],
  tips: [
    'Use "we" and "us" to include the reader.',
    'Ask questions to make the reader think.',
    'Use groups of three for emphasis: "It is wrong, it is unfair, it is unacceptable."',
  ],
}

const persuasiveCore: ScaffoldTemplate = {
  id: 'essay-per-core',
  taskType: 'essay_writing',
  subType: 'persuasive',
  level: 'core',
  title: 'Persuasive Writing — Core',
  description: 'Persuasive structure guide with some scaffolding.',
  frame: [
    'Opening: Create a compelling hook — use a rhetorical question, anecdote, or shocking statistic.',
    '',
    'Paragraph 1: Emotional appeal — connect with the reader\'s feelings using emotive language.',
    '',
    'Paragraph 2: Logical appeal — present facts, statistics, or expert opinions.',
    '',
    'Paragraph 3: Address the opposition — acknowledge and dismantle a counter-argument.',
    '',
    'Closing: Powerful call to action — use imperatives, inclusive pronouns, and a memorable final line.',
  ],
  sentenceStarters: [
    'It is undeniable that...',
    'Opponents may claim...; yet the evidence clearly demonstrates...',
    'We owe it to ourselves and future generations to...',
  ],
  wordBank: [
    'compelling', 'undeniable', 'crisis', 'imperative', 'moral obligation',
    'overwhelmingly', 'testimonial', 'irrefutable',
  ],
}

const persuasiveExtension: ScaffoldTemplate = {
  id: 'essay-per-extension',
  taskType: 'essay_writing',
  subType: 'persuasive',
  level: 'extension',
  title: 'Persuasive Writing — Extension',
  description: 'Open persuasive task with sophisticated rhetorical challenge.',
  frame: [
    'Write a persuasive article for a broadsheet newspaper on the given topic.',
    '',
    'Your writing should:',
    '  • Deploy a range of rhetorical strategies, including ethos, pathos, and logos.',
    '  • Vary sentence structure for deliberate effect (short for impact, long for building tension).',
    '  • Use irony, satire, or understatement where appropriate.',
    '  • Anticipate and skilfully rebut multiple counter-arguments.',
    '  • Demonstrate a distinctive, confident authorial voice.',
    '  • Close with a resonant, thought-provoking conclusion.',
  ],
  tips: [
    'Study opinion columnists — how do they balance authority with accessibility?',
    'Consider the difference between manipulating and persuading your audience.',
    'Can you use a motif or extended metaphor to give your piece coherence?',
  ],
}

// ---------------------------------------------------------------------------
// 4. EXTRACT ANALYSIS TEMPLATES (3 levels)
// ---------------------------------------------------------------------------

const extractFoundation: ScaffoldTemplate = {
  id: 'extract-foundation',
  taskType: 'extract_analysis',
  level: 'foundation',
  title: 'Extract Analysis — Foundation',
  description: 'Guided extract analysis with step-by-step instructions and word bank.',
  frame: [
    'Step 1 — Read the extract twice. Underline or highlight key words.',
    '',
    'Step 2 — What is happening in the extract? Write 1-2 sentences:',
    '  In this extract, ___.',
    '',
    'Step 3 — Find a technique. Copy the quotation:',
    '  The writer uses ___ : "___".',
    '',
    'Step 4 — Explain the effect:',
    '  This makes the reader feel ___ because ___.',
    '  The word "___" suggests ___.',
    '',
    'Step 5 — Find a second technique and repeat Steps 3-4.',
    '',
    'Step 6 — Summary:',
    '  Overall, the writer wants the reader to ___.',
  ],
  sentenceStarters: [
    'In this extract, the writer...',
    'The writer uses the technique of...',
    'The word "___" suggests...',
    'This creates a sense of...',
    'The reader might feel...',
    'Overall, the writer wants...',
  ],
  wordBank: [
    'metaphor', 'simile', 'personification', 'repetition', 'short sentence',
    'adjective', 'verb', 'imagery', 'contrast', 'tone',
    'tension', 'sympathy', 'suspense', 'atmosphere', 'mood',
  ],
  tips: [
    'Always write the quotation in speech marks.',
    'Pick SHORT quotations — even a single word can be analysed.',
    'If you are stuck, look for interesting adjectives or verbs.',
  ],
}

const extractCore: ScaffoldTemplate = {
  id: 'extract-core',
  taskType: 'extract_analysis',
  level: 'core',
  title: 'Extract Analysis — Core',
  description: 'PEEL-based extract analysis with paragraph frames.',
  frame: [
    'Introduction: What is the focus of the extract? What is the dominant mood/tone?',
    '',
    'Paragraph 1 (PEEL):',
    '  Point — Identify a key technique or language choice.',
    '  Evidence — Embed a short quotation.',
    '  Explain — Analyse word-level choices and their effects.',
    '  Link — Connect to the question focus or wider themes.',
    '',
    'Paragraph 2 (PEEL): Analyse a second technique or a shift in tone/mood.',
    '',
    'Paragraph 3 (PEEL): Consider structural choices (e.g. sentence length, paragraph breaks, focus shifts).',
    '',
    'Conclusion: Which technique is most effective in achieving the writer\'s purpose? Why?',
  ],
  sentenceStarters: [
    'The writer crafts a sense of... through...',
    'The connotations of "___" evoke...',
    'Structurally, the shift from... to... mirrors...',
    'This is perhaps the most effective technique because...',
  ],
  wordBank: [
    'connotation', 'denotation', 'semantic field', 'juxtaposition',
    'caesura', 'enjambment', 'sibilance', 'plosive', 'declarative',
    'imperative', 'interrogative', 'exclamatory',
  ],
}

const extractExtension: ScaffoldTemplate = {
  id: 'extract-extension',
  taskType: 'extract_analysis',
  level: 'extension',
  title: 'Extract Analysis — Extension',
  description: 'Open extract analysis with critical and contextual challenge.',
  frame: [
    'Analyse how the writer uses language and structure to [question focus].',
    '',
    'In your response you should:',
    '  • Develop a critical argument about the writer\'s methods and purpose.',
    '  • Analyse individual word choices, exploring multiple layers of meaning.',
    '  • Examine how structural decisions (sentence type, paragraph length, narrative pacing) shape the reader\'s experience.',
    '  • Consider how the extract fits within the text as a whole.',
    '  • Where appropriate, discuss the influence of context on the writer\'s choices.',
    '  • Explore alternative interpretations — what might a different reader make of this?',
  ],
  tips: [
    'Move beyond "the writer uses X to show Y" — consider why this technique and not another.',
    'Explore the tension between what is said and what is implied.',
    'Consider the reader as an active participant in meaning-making.',
    'Can you identify a pattern across the extract (e.g. a semantic field) and analyse its cumulative effect?',
  ],
}

// ---------------------------------------------------------------------------
// 5. CREATIVE WRITING PROMPTS WITH SCAFFOLDING (3 levels)
// ---------------------------------------------------------------------------

const creativeFoundation: ScaffoldTemplate = {
  id: 'creative-foundation',
  taskType: 'creative_writing',
  level: 'foundation',
  title: 'Creative Writing — Foundation',
  description: 'Structured creative writing template with guided sections and vocabulary.',
  frame: [
    'Setting — Where and when does your story take place?',
    '  Describe what you can SEE: ___.',
    '  Describe what you can HEAR: ___.',
    '  Describe what you can FEEL: ___.',
    '',
    'Character — Who is your main character?',
    '  My character is called ___. They feel ___ because ___.',
    '',
    'Problem — What goes wrong?',
    '  Suddenly, ___.',
    '  My character felt ___.',
    '',
    'Action — What does the character do?',
    '  First, ___. Then, ___. Finally, ___.',
    '',
    'Ending — How does the story finish?',
    '  In the end, ___.',
    '  My character learned that ___.',
  ],
  sentenceStarters: [
    'The air was thick with...',
    'A shadow fell across...',
    'Without warning...',
    'Heart pounding, they...',
    'At last...',
  ],
  wordBank: [
    'cautiously', 'trembling', 'glimmering', 'desolate', 'overwhelming',
    'silhouette', 'echoing', 'crept', 'shattered', 'gasped',
    'murmured', 'loomed', 'staggered', 'bitter', 'fragile',
  ],
  tips: [
    'Use adjectives to describe what things look, sound, and feel like.',
    'Start a new paragraph when something new happens.',
    'Try to include at least one simile (e.g. "as cold as ice").',
  ],
}

const creativeCore: ScaffoldTemplate = {
  id: 'creative-core',
  taskType: 'creative_writing',
  level: 'core',
  title: 'Creative Writing — Core',
  description: 'Story structure guide with technique reminders.',
  frame: [
    'Opening (1-2 paragraphs): Establish setting and atmosphere. Use sensory details.',
    '  Aim: Hook the reader immediately. Try starting with dialogue, action, or a vivid image.',
    '',
    'Build-up (2-3 paragraphs): Introduce your character and develop tension.',
    '  Aim: Show (don\'t tell) the character\'s emotions. Use body language and internal thoughts.',
    '',
    'Climax (1-2 paragraphs): The moment of greatest tension or change.',
    '  Aim: Use short sentences for pace. Vary sentence structure for effect.',
    '',
    'Resolution (1 paragraph): How does the story end? What has changed?',
    '  Aim: End with an image, a line of dialogue, or a reflection — avoid "and then I woke up".',
  ],
  sentenceStarters: [
    'The silence was broken by...',
    'It was then that everything changed.',
    'Looking back, they realised...',
  ],
  wordBank: [
    'foreboding', 'visceral', 'relentless', 'ephemeral', 'suffocating',
    'juxtaposition', 'crescendo', 'fractured', 'luminous', 'haunting',
  ],
  tips: [
    'Use a range of sentence lengths — short for impact, long for description.',
    'Include at least one metaphor or piece of personification.',
    'Think about what your opening and ending have in common — can you create a cyclical structure?',
  ],
}

const creativeExtension: ScaffoldTemplate = {
  id: 'creative-extension',
  taskType: 'creative_writing',
  level: 'extension',
  title: 'Creative Writing — Extension',
  description: 'Open creative writing challenge with ambitious structural and stylistic goals.',
  frame: [
    'Write a piece of creative writing inspired by the stimulus provided.',
    '',
    'Challenge yourself to:',
    '  • Experiment with narrative perspective (first person? unreliable narrator? second person?).',
    '  • Use structure as a device — non-linear timelines, fragmented sections, or dual narratives.',
    '  • Craft an extended metaphor that runs through the whole piece.',
    '  • Control pace deliberately: vary sentence and paragraph length for effect.',
    '  • Create a distinctive narrative voice — consider dialect, register, and tone.',
    '  • End with resonance: your final line should linger in the reader\'s mind.',
  ],
  tips: [
    'Read the opening paragraphs of novels you admire — what makes them compelling?',
    'Consider what you are withholding from the reader and when you will reveal it.',
    'Can you subvert a genre convention (e.g. the "dark and stormy night" opening)?',
    'Think about how published authors you have studied achieve their effects.',
  ],
}

// ---------------------------------------------------------------------------
// 6. COMPARISON PARAGRAPH TEMPLATES (3 levels)
// ---------------------------------------------------------------------------

const comparisonFoundation: ScaffoldTemplate = {
  id: 'comparison-foundation',
  taskType: 'comparison',
  level: 'foundation',
  title: 'Comparison — Foundation',
  description: 'Step-by-step comparison frame with connectives provided.',
  frame: [
    'Text 1:',
    '  In [Text 1], the writer presents ___ by using ___.',
    '  For example, "___".',
    '  This shows that ___.',
    '',
    'Text 2:',
    '  Similarly / In contrast, in [Text 2], the writer ___.',
    '  An example of this is "___".',
    '  This suggests that ___.',
    '',
    'Comparison:',
    '  Both texts are similar because ___.',
    '  OR: The texts are different because ___.',
    '  The most effective text is ___ because ___.',
  ],
  sentenceStarters: [
    'In [Text 1], the writer...',
    'Similarly, in [Text 2]...',
    'In contrast, [Text 2]...',
    'Both texts...',
    'The texts are different because...',
    'The most effective text is...',
  ],
  wordBank: [
    'similarly', 'in contrast', 'whereas', 'both', 'however',
    'on the other hand', 'likewise', 'compared to', 'unlike', 'equally',
  ],
  tips: [
    'Always write about BOTH texts.',
    'Use comparison connectives to link your ideas.',
    'Say which text you think is more effective and explain why.',
  ],
}

const comparisonCore: ScaffoldTemplate = {
  id: 'comparison-core',
  taskType: 'comparison',
  level: 'core',
  title: 'Comparison — Core',
  description: 'Integrated comparison paragraph frame.',
  frame: [
    'Introduction: Identify the shared theme/focus. Briefly state how the two texts approach it differently.',
    '',
    'Paragraph 1 — First point of comparison:',
    '  Analyse Text 1\'s approach with evidence → Transition → Analyse Text 2\'s approach with evidence.',
    '  Evaluate: which is more effective for this specific point and why?',
    '',
    'Paragraph 2 — Second point of comparison:',
    '  Same structure — aim for a different technique or a different aspect of the theme.',
    '',
    'Paragraph 3 — Wider comparison:',
    '  Consider tone, purpose, audience, or context. How do these shape each text\'s approach?',
    '',
    'Conclusion: Overall judgement — which text is more effective in achieving its purpose?',
  ],
  sentenceStarters: [
    'While [Text 1] employs... to..., [Text 2] instead...',
    'This contrast in approach reflects...',
    'Arguably, [Text X] is more effective because...',
  ],
  wordBank: [
    'diverge', 'converge', 'parallels', 'antithesis', 'complement',
    'undermine', 'reinforce', 'nuance', 'perspective',
  ],
}

const comparisonExtension: ScaffoldTemplate = {
  id: 'comparison-extension',
  taskType: 'comparison',
  level: 'extension',
  title: 'Comparison — Extension',
  description: 'Open comparison essay with critical evaluation challenge.',
  frame: [
    'Write a comparative analysis exploring how both texts present [theme/idea].',
    '',
    'Your response should:',
    '  • Develop an overarching argument about how the texts\' approaches differ.',
    '  • Integrate analysis of both texts within each paragraph (not text-by-text).',
    '  • Compare at the level of word, sentence, and whole-text structure.',
    '  • Consider how context (audience, purpose, era) accounts for differences.',
    '  • Evaluate relative effectiveness with nuance — avoid blanket statements.',
    '  • Where relevant, consider how different readers might respond to each text.',
  ],
  tips: [
    'The strongest comparisons find unexpected connections, not just obvious similarities.',
    'Consider what each writer assumes about their audience.',
    'Can you identify a tension or contradiction within one text that the other text resolves — or vice versa?',
    'Think about the form/genre of each text and how this shapes what the writer can do.',
  ],
}

// ---------------------------------------------------------------------------
// 7. ESSAY WRITING FRAMES — Descriptive (3 levels)
// ---------------------------------------------------------------------------

const descriptiveFoundation: ScaffoldTemplate = {
  id: 'essay-desc-foundation',
  taskType: 'essay_writing',
  subType: 'descriptive',
  level: 'foundation',
  title: 'Descriptive Writing — Foundation',
  description: 'Sensory-guided descriptive writing template.',
  frame: [
    'Paragraph 1 — What can you SEE?',
    '  I can see ___. It looks like ___.',
    '  The colour of ___ reminds me of ___.',
    '',
    'Paragraph 2 — What can you HEAR?',
    '  I can hear ___. It sounds like ___.',
    '',
    'Paragraph 3 — What can you FEEL / SMELL / TASTE?',
    '  The air feels ___. It smells of ___.',
    '',
    'Paragraph 4 — Zoom in on one detail:',
    '  The most striking thing is ___.',
    '  It makes me feel ___ because ___.',
  ],
  sentenceStarters: [
    'I can see...',
    'It looks like...',
    'The sound of... fills the air.',
    'The most striking thing is...',
  ],
  wordBank: [
    'glistening', 'towering', 'crumbling', 'whispering', 'scorching',
    'damp', 'pungent', 'delicate', 'vast', 'piercing',
    'crimson', 'amber', 'slate', 'emerald', 'ivory',
  ],
  tips: [
    'Use your five senses: sight, sound, smell, touch, taste.',
    'Try to use at least one simile (like/as).',
    'Add colour words to make your description vivid.',
  ],
}

const descriptiveCore: ScaffoldTemplate = {
  id: 'essay-desc-core',
  taskType: 'essay_writing',
  subType: 'descriptive',
  level: 'core',
  title: 'Descriptive Writing — Core',
  description: 'Structured descriptive writing with technique focus.',
  frame: [
    'Opening: Wide-angle shot — establish the overall scene with one powerful image.',
    '',
    'Paragraph 1: Narrow the focus — describe a specific element in detail using sensory language.',
    '  Include: a metaphor or simile, precise adjectives, a colour reference.',
    '',
    'Paragraph 2: Shift focus — describe a contrasting element (e.g. from beauty to decay).',
    '  Include: personification, a semantic field.',
    '',
    'Paragraph 3: Zoom in — describe one tiny detail in close-up.',
    '  Include: varied sentence lengths, a one-word or one-clause sentence for impact.',
    '',
    'Closing: Pull back to the wide-angle view. End with a reflective or atmospheric sentence.',
  ],
  wordBank: [
    'ethereal', 'dilapidated', 'incandescent', 'oppressive', 'serene',
    'cacophony', 'iridescent', 'pungent', 'labyrinthine',
  ],
}

const descriptiveExtension: ScaffoldTemplate = {
  id: 'essay-desc-extension',
  taskType: 'essay_writing',
  subType: 'descriptive',
  level: 'extension',
  title: 'Descriptive Writing — Extension',
  description: 'Open descriptive challenge with structural and stylistic ambition.',
  frame: [
    'Write a descriptive piece inspired by the image / stimulus provided.',
    '',
    'Challenge yourself to:',
    '  • Use a deliberate structural pattern (e.g. zooming in, circular structure, contrast between sections).',
    '  • Create an extended metaphor that unifies the whole piece.',
    '  • Employ a distinctive narrative voice — consider tone and register carefully.',
    '  • Use synaesthesia (mixing senses) for originality.',
    '  • Control pace through sentence and paragraph length.',
    '  • Ensure your final line resonates — it should feel inevitable, not arbitrary.',
  ],
  tips: [
    'Read descriptive passages by writers like Dickens, Atwood, or McCarthy for inspiration.',
    'Think about what mood you want to create — every word choice should serve that mood.',
    'Avoid cliches. If your first idea is "the sun set like a ball of fire", push yourself further.',
  ],
}

// ---------------------------------------------------------------------------
// 8. SENTENCE STARTER BANKS BY SKILL AND LEVEL
// ---------------------------------------------------------------------------

export const sentenceStarterBanks: SentenceStarterBank[] = [
  {
    id: 'ss-analysis-foundation',
    skill: 'Analysis',
    level: 'foundation',
    starters: [
      'The writer uses...',
      'An example of this is...',
      'This shows that...',
      'The word "___" means...',
      'This makes the reader feel...',
      'This is effective because...',
    ],
  },
  {
    id: 'ss-analysis-core',
    skill: 'Analysis',
    level: 'core',
    starters: [
      'The writer employs... to convey...',
      'The connotations of "___" suggest...',
      'This creates a sense of... for the reader.',
      'Structurally, the writer...',
      'This links to the wider theme of...',
      'The shift in tone from... to... reflects...',
    ],
  },
  {
    id: 'ss-analysis-extension',
    skill: 'Analysis',
    level: 'extension',
    starters: [
      'A more nuanced reading suggests...',
      'The deliberate ambiguity of "___" invites...',
      'One might argue that... ; however, alternatively...',
      'Contextually, this reflects...',
      'The interplay between... and... serves to...',
      'This subverts the reader\'s expectation by...',
    ],
  },
  {
    id: 'ss-evaluation-foundation',
    skill: 'Evaluation',
    level: 'foundation',
    starters: [
      'I think this is effective because...',
      'The best technique used is...',
      'This works well because...',
      'I agree/disagree because...',
    ],
  },
  {
    id: 'ss-evaluation-core',
    skill: 'Evaluation',
    level: 'core',
    starters: [
      'Arguably, the most effective technique is... because...',
      'This is particularly successful in...',
      'While effective, it could be argued that...',
      'The cumulative effect of these choices is...',
    ],
  },
  {
    id: 'ss-evaluation-extension',
    skill: 'Evaluation',
    level: 'extension',
    starters: [
      'The efficacy of this approach is contingent upon...',
      'A critical reading reveals both strengths and limitations in...',
      'While this succeeds in..., it simultaneously risks...',
      'The tension between authorial intent and reader reception is evident in...',
    ],
  },
  {
    id: 'ss-comparison-foundation',
    skill: 'Comparison',
    level: 'foundation',
    starters: [
      'Both texts...',
      'Similarly...',
      'In contrast...',
      'However, [Text 2]...',
      'The texts are different because...',
    ],
  },
  {
    id: 'ss-comparison-core',
    skill: 'Comparison',
    level: 'core',
    starters: [
      'While [Text 1]... , [Text 2] instead...',
      'Both writers share a concern with...; however, their approaches diverge in...',
      'This parallel suggests...',
      'The contrasting use of... highlights...',
    ],
  },
  {
    id: 'ss-comparison-extension',
    skill: 'Comparison',
    level: 'extension',
    starters: [
      'The texts occupy fundamentally different positions on...',
      'Where [Text 1] presents... as..., [Text 2] complicates this by...',
      'The intertextual resonance between these texts suggests...',
      'A reader positioned differently might find...',
    ],
  },
]

// ---------------------------------------------------------------------------
// 9. VOCABULARY SUPPORT SHEETS BY TEXT
// ---------------------------------------------------------------------------

export const vocabularySheets: VocabularySheet[] = [
  {
    id: 'vocab-macbeth-foundation',
    text: 'Macbeth',
    level: 'foundation',
    words: [
      { term: 'Ambition', definition: 'A strong desire to achieve something', example: 'Macbeth\'s ambition drives him to murder the king.' },
      { term: 'Prophecy', definition: 'A prediction about the future', example: 'The witches\' prophecy sets the plot in motion.' },
      { term: 'Guilt', definition: 'A feeling of having done something wrong', example: 'Lady Macbeth\'s guilt leads to her sleepwalking.' },
      { term: 'Tyrant', definition: 'A cruel and unfair ruler', example: 'Macbeth becomes a tyrant after taking the throne.' },
      { term: 'Supernatural', definition: 'Things that cannot be explained by science or nature', example: 'The witches and the ghost of Banquo are supernatural elements.' },
      { term: 'Betrayal', definition: 'Breaking someone\'s trust', example: 'Macbeth betrays King Duncan, his guest and king.' },
    ],
  },
  {
    id: 'vocab-macbeth-core',
    text: 'Macbeth',
    level: 'core',
    words: [
      { term: 'Regicide', definition: 'The killing of a king', example: 'The regicide of Duncan disrupts the natural order.' },
      { term: 'Hamartia', definition: 'A fatal flaw that leads to a character\'s downfall', example: 'Macbeth\'s hamartia is his vaulting ambition.' },
      { term: 'Patriarchal', definition: 'A society controlled by men', example: 'Lady Macbeth challenges patriarchal norms when she manipulates her husband.' },
      { term: 'Soliloquy', definition: 'A speech where a character reveals their inner thoughts', example: 'Macbeth\'s "dagger" soliloquy reveals his inner turmoil.' },
      { term: 'Divine right', definition: 'The belief that a monarch is chosen by God', example: 'Killing Duncan violates the divine right of kings.' },
      { term: 'Equivocation', definition: 'Using ambiguous language to deceive', example: 'The witches equivocate to mislead Macbeth.' },
    ],
  },
  {
    id: 'vocab-macbeth-extension',
    text: 'Macbeth',
    level: 'extension',
    words: [
      { term: 'Machiavellian', definition: 'Cunning, scheming, and unscrupulous in politics', example: 'Lady Macbeth\'s manipulation could be read as Machiavellian.' },
      { term: 'Catharsis', definition: 'Emotional release experienced by the audience through tragedy', example: 'Macbeth\'s downfall provides catharsis as the moral order is restored.' },
      { term: 'Hegemonic masculinity', definition: 'The dominant, idealised form of manhood in a society', example: 'Lady Macbeth weaponises hegemonic masculinity to goad Macbeth into action.' },
      { term: 'Jacobean', definition: 'Relating to the reign of James I (1603-1625)', example: 'The play reflects Jacobean anxieties about regicide and witchcraft.' },
      { term: 'Nihilism', definition: 'The belief that life has no meaning or purpose', example: 'Macbeth\'s "tomorrow and tomorrow" speech suggests nihilism.' },
      { term: 'Subversive', definition: 'Seeking to undermine an established system', example: 'The witches are subversive figures who challenge patriarchal and royal authority.' },
    ],
  },
  {
    id: 'vocab-christmas-carol-foundation',
    text: 'A Christmas Carol',
    level: 'foundation',
    words: [
      { term: 'Miser', definition: 'A person who hates spending money', example: 'Scrooge is a miser who refuses to give to charity.' },
      { term: 'Redemption', definition: 'Being saved or forgiven after doing wrong', example: 'Scrooge achieves redemption by changing his ways.' },
      { term: 'Poverty', definition: 'The state of being very poor', example: 'The Cratchit family live in poverty.' },
      { term: 'Ghost', definition: 'A spirit of a dead person', example: 'Marley\'s ghost warns Scrooge to change.' },
      { term: 'Generosity', definition: 'Willingness to give and share', example: 'Scrooge learns the importance of generosity.' },
      { term: 'Isolation', definition: 'Being alone and cut off from others', example: 'Scrooge\'s greed leads to his isolation.' },
    ],
  },
  {
    id: 'vocab-christmas-carol-core',
    text: 'A Christmas Carol',
    level: 'core',
    words: [
      { term: 'Allegory', definition: 'A story with a hidden moral or political meaning', example: 'The novella is an allegory for Victorian social responsibility.' },
      { term: 'Capitalism', definition: 'An economic system based on private ownership and profit', example: 'Dickens critiques unregulated capitalism through Scrooge.' },
      { term: 'Philanthropic', definition: 'Charitable and generous towards others', example: 'Scrooge becomes philanthropic after his transformation.' },
      { term: 'Didactic', definition: 'Intended to teach a moral lesson', example: 'Dickens\' purpose is didactic — he wants to change readers\' attitudes to the poor.' },
      { term: 'Transformation', definition: 'A complete change in character or nature', example: 'Scrooge\'s transformation is the central arc of the novella.' },
      { term: 'Social injustice', definition: 'Unfairness in the way people are treated by society', example: 'Ignorance and Want represent social injustice.' },
    ],
  },
  {
    id: 'vocab-christmas-carol-extension',
    text: 'A Christmas Carol',
    level: 'extension',
    words: [
      { term: 'Utilitarian', definition: 'Relating to the belief that actions should maximise overall happiness', example: 'Scrooge\'s initial philosophy echoes utilitarian Malthusian economics.' },
      { term: 'Polemic', definition: 'A strong verbal or written attack on a belief or opinion', example: 'The novella functions as a polemic against Victorian indifference to poverty.' },
      { term: 'Bildungsroman', definition: 'A story of personal growth and moral development', example: 'Though compressed, Scrooge\'s journey mirrors the bildungsroman tradition.' },
      { term: 'Proselytise', definition: 'To convert someone to a belief or cause', example: 'Dickens seeks to proselytise his readers into social action.' },
      { term: 'Liminal', definition: 'Occupying a position on a threshold between two states', example: 'The ghosts occupy liminal space between the living and the dead.' },
      { term: 'Zeitgeist', definition: 'The defining spirit or mood of a particular era', example: 'The novella captures the zeitgeist of Victorian social reform.' },
    ],
  },
]

// ---------------------------------------------------------------------------
// 10. QUOTE BANKS BY DIFFICULTY
// ---------------------------------------------------------------------------

export const quoteBanks: QuoteBank[] = [
  {
    id: 'quotes-macbeth-accessible',
    text: 'Macbeth',
    difficulty: 'accessible',
    quotes: [
      { quote: 'Fair is foul, and foul is fair', speaker: 'Witches', context: 'Opening scene — establishes moral confusion', technique: 'Chiasmus / paradox' },
      { quote: 'Look like the innocent flower, but be the serpent under it', speaker: 'Lady Macbeth', context: 'Advising Macbeth to hide his intentions', technique: 'Simile / biblical allusion' },
      { quote: 'Is this a dagger which I see before me?', speaker: 'Macbeth', context: 'Before murdering Duncan', technique: 'Rhetorical question / hallucination' },
      { quote: 'Out, damned spot!', speaker: 'Lady Macbeth', context: 'Sleepwalking scene — consumed by guilt', technique: 'Imperative / symbolism' },
      { quote: 'Full of scorpions is my mind', speaker: 'Macbeth', context: 'After becoming king — tormented by paranoia', technique: 'Metaphor' },
    ],
  },
  {
    id: 'quotes-macbeth-moderate',
    text: 'Macbeth',
    difficulty: 'moderate',
    quotes: [
      { quote: 'Stars, hide your fires; let not light see my black and deep desires', speaker: 'Macbeth', context: 'After hearing the prophecy — hiding ambition', technique: 'Apostrophe / symbolism (light vs dark)' },
      { quote: 'Unsex me here, and fill me from the crown to the toe top-full of direst cruelty', speaker: 'Lady Macbeth', context: 'Invoking dark spirits to remove femininity', technique: 'Imperative / subversion of gender roles' },
      { quote: 'Will all great Neptune\'s ocean wash this blood clean from my hand?', speaker: 'Macbeth', context: 'Immediately after Duncan\'s murder', technique: 'Hyperbole / rhetorical question / classical allusion' },
      { quote: 'By the pricking of my thumbs, something wicked this way comes', speaker: 'Second Witch', context: 'Macbeth returns to the witches', technique: 'Rhyming couplet / dramatic irony' },
    ],
  },
  {
    id: 'quotes-macbeth-challenging',
    text: 'Macbeth',
    difficulty: 'challenging',
    quotes: [
      { quote: 'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day', speaker: 'Macbeth', context: 'After Lady Macbeth\'s death — existential despair', technique: 'Repetition / sibilance / nihilism' },
      { quote: 'I have no spur to prick the sides of my intent, but only vaulting ambition, which o\'erleaps itself', speaker: 'Macbeth', context: 'Soliloquy debating whether to kill Duncan', technique: 'Extended metaphor (horse-riding) / self-awareness' },
      { quote: 'Here\'s the smell of blood still. All the perfumes of Arabia will not sweeten this little hand', speaker: 'Lady Macbeth', context: 'Sleepwalking — guilt has overwhelmed her', technique: 'Hyperbole / contrast (perfume vs blood) / olfactory imagery' },
    ],
  },
  {
    id: 'quotes-christmas-carol-accessible',
    text: 'A Christmas Carol',
    difficulty: 'accessible',
    quotes: [
      { quote: 'Bah! Humbug!', speaker: 'Scrooge', context: 'Scrooge dismisses Christmas', technique: 'Exclamatory / characterisation' },
      { quote: 'I wear the chain I forged in life', speaker: 'Marley\'s Ghost', context: 'Warning Scrooge about consequences of greed', technique: 'Metaphor / symbolism' },
      { quote: 'Are there no prisons? Are there no workhouses?', speaker: 'Scrooge', context: 'Refusing to donate to charity', technique: 'Rhetorical questions / Dickens\' social critique' },
      { quote: 'God bless us, every one!', speaker: 'Tiny Tim', context: 'Christmas dinner at the Cratchits', technique: 'Exclamatory / innocence / religious language' },
    ],
  },
  {
    id: 'quotes-christmas-carol-moderate',
    text: 'A Christmas Carol',
    difficulty: 'moderate',
    quotes: [
      { quote: 'Mankind was my business. The common welfare was my business', speaker: 'Marley\'s Ghost', context: 'Explaining the true purpose of life', technique: 'Repetition / Dickens\' message to readers' },
      { quote: 'hard and sharp as flint, from which no steel had ever struck out generous fire', speaker: 'Narrator', context: 'Describing Scrooge in the opening', technique: 'Simile / extended metaphor / characterisation' },
      { quote: 'This boy is Ignorance. This girl is Want. Beware them both', speaker: 'Ghost of Christmas Present', context: 'Revealing hidden children beneath his robe', technique: 'Personification of abstract concepts / imperative / allegory' },
    ],
  },
  {
    id: 'quotes-christmas-carol-challenging',
    text: 'A Christmas Carol',
    difficulty: 'challenging',
    quotes: [
      { quote: 'solitary as an oyster', speaker: 'Narrator', context: 'Opening description of Scrooge', technique: 'Simile — closed, hard exterior hiding potential richness' },
      { quote: 'decrease the surplus population', speaker: 'Scrooge (echoed by Ghost of Christmas Present)', context: 'Scrooge\'s words thrown back at him about Tiny Tim', technique: 'Malthusian reference / dramatic irony / social critique' },
      { quote: 'He had been Tim\'s blood horse all the way from church, and had come home rampant', speaker: 'Narrator', context: 'Bob Cratchit carrying Tiny Tim', technique: 'Metaphor — energy and love despite poverty / pathos' },
    ],
  },
]

// ---------------------------------------------------------------------------
// EXPORTS — All scaffold templates collected
// ---------------------------------------------------------------------------

export const allScaffoldTemplates: ScaffoldTemplate[] = [
  // Argumentative essays (3)
  argumentativeFoundation,
  argumentativeCore,
  argumentativeExtension,
  // Analytical essays (3)
  analyticalFoundation,
  analyticalCore,
  analyticalExtension,
  // Persuasive essays (3)
  persuasiveFoundation,
  persuasiveCore,
  persuasiveExtension,
  // Descriptive essays (3)
  descriptiveFoundation,
  descriptiveCore,
  descriptiveExtension,
  // Extract analysis (3)
  extractFoundation,
  extractCore,
  extractExtension,
  // Creative writing (3)
  creativeFoundation,
  creativeCore,
  creativeExtension,
  // Comparison (3)
  comparisonFoundation,
  comparisonCore,
  comparisonExtension,
]

/** Helper — filter scaffolds by task type */
export function getScaffoldsByTask(taskType: TaskType): ScaffoldTemplate[] {
  return allScaffoldTemplates.filter((s) => s.taskType === taskType)
}

/** Helper — filter scaffolds by task type and level */
export function getScaffold(taskType: TaskType, level: DifferentiationLevel): ScaffoldTemplate | undefined {
  return allScaffoldTemplates.find((s) => s.taskType === taskType && s.level === level)
}

/** Helper — get scaffold by sub-type (for essays) */
export function getEssayScaffold(subType: EssaySubType, level: DifferentiationLevel): ScaffoldTemplate | undefined {
  return allScaffoldTemplates.find(
    (s) => s.taskType === 'essay_writing' && s.subType === subType && s.level === level
  )
}

/** Helper — get sentence starters for a skill and level */
export function getSentenceStarters(skill: string, level: DifferentiationLevel): SentenceStarterBank | undefined {
  return sentenceStarterBanks.find((s) => s.skill === skill && s.level === level)
}

/** Helper — get vocabulary sheet for a text and level */
export function getVocabularySheet(text: string, level: DifferentiationLevel): VocabularySheet | undefined {
  return vocabularySheets.find((v) => v.text === text && v.level === level)
}

/** Helper — get quote bank for a text and difficulty */
export function getQuoteBank(text: string, difficulty: 'accessible' | 'moderate' | 'challenging'): QuoteBank | undefined {
  return quoteBanks.find((q) => q.text === text && q.difficulty === difficulty)
}

/** Map differentiation level to quote difficulty */
export function levelToDifficulty(level: DifferentiationLevel): 'accessible' | 'moderate' | 'challenging' {
  switch (level) {
    case 'foundation': return 'accessible'
    case 'core': return 'moderate'
    case 'extension': return 'challenging'
  }
}

/** Available texts that have vocabulary / quote support */
export const supportedTexts = ['Macbeth', 'A Christmas Carol'] as const
export type SupportedText = typeof supportedTexts[number]

/** Available topics (broader list for task generation) */
export const availableTopics = [
  'Macbeth',
  'A Christmas Carol',
  'An Inspector Calls',
  'Romeo and Juliet',
  'Jekyll and Hyde',
  'Power and Conflict Poetry',
  'Love and Relationships Poetry',
  'Unseen Poetry',
  'Language Paper 1 — Fiction',
  'Language Paper 2 — Non-Fiction',
] as const
