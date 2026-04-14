// ── Worksheet Generator ──────────────────────────────────────────────────────
// Generates structured worksheet data for different English Literature/Language
// worksheet types, with support for Foundation / Core / Extension differentiation.

import type { WorksheetSection } from '@/components/school/PrintableWorksheet'

// ── Types ────────────────────────────────────────────────────────────────────

export type WorksheetType =
  | 'quote-analysis'
  | 'comparison-frame'
  | 'extract-analysis'
  | 'creative-writing'
  | 'vocabulary-builder'
  | 'exam-question'
  | 'character-profile'
  | 'theme-explorer'

export type DifficultyLevel = 'foundation' | 'core' | 'extension'

export interface WorksheetConfig {
  type: WorksheetType
  difficulty: DifficultyLevel
  text?: string
  topic?: string
  schoolName?: string
  className?: string
  date?: string
}

export interface GeneratedWorksheet {
  title: string
  subtitle: string
  sections: WorksheetSection[]
}

export const WORKSHEET_TYPE_META: Record<
  WorksheetType,
  { label: string; description: string; icon: string }
> = {
  'quote-analysis': {
    label: 'Quote Analysis',
    description: 'Analyse a quote for language, structure, and context',
    icon: 'quote',
  },
  'comparison-frame': {
    label: 'Comparison Frame',
    description: 'Compare two texts using PEEL paragraph scaffolding',
    icon: 'columns',
  },
  'extract-analysis': {
    label: 'Extract Analysis',
    description: 'Passage with guided questions: retrieval, analysis, evaluation',
    icon: 'file-text',
  },
  'creative-writing': {
    label: 'Creative Writing Prompt',
    description: 'Stimulus material with planning and writing space',
    icon: 'pen-tool',
  },
  'vocabulary-builder': {
    label: 'Vocabulary Builder',
    description: 'Key terms, definitions to match, sentences to complete',
    icon: 'book-open',
  },
  'exam-question': {
    label: 'Exam Question Practice',
    description: 'Full exam question with answer guide and model answer',
    icon: 'clipboard-list',
  },
  'character-profile': {
    label: 'Character Profile',
    description: 'Character name, quotes, analysis, context, essay links',
    icon: 'user',
  },
  'theme-explorer': {
    label: 'Theme Explorer',
    description: 'Theme statement, evidence, author\'s purpose, context links',
    icon: 'lightbulb',
  },
}

export const SAMPLE_TEXTS = [
  'Macbeth',
  'A Christmas Carol',
  'An Inspector Calls',
  'Romeo and Juliet',
  'Lord of the Flies',
  'Animal Farm',
  'The Tempest',
  'Much Ado About Nothing',
  'Jekyll and Hyde',
  'Great Expectations',
  'Poetry Anthology (Power & Conflict)',
  'Poetry Anthology (Love & Relationships)',
  'Unseen Poetry',
  'Language Paper 1 (Fiction)',
  'Language Paper 2 (Non-Fiction)',
] as const

export const SAMPLE_TOPICS = [
  'Power and Corruption',
  'Love and Relationships',
  'Social Class and Inequality',
  'Good vs Evil',
  'Appearance vs Reality',
  'The Supernatural',
  'Ambition',
  'Guilt and Conscience',
  'Gender Roles',
  'Violence and Conflict',
  'Family and Loyalty',
  'Justice and Morality',
  'Nature and the Environment',
  'Identity and Self',
  'Religion and Spirituality',
] as const

// ── Difficulty helpers ───────────────────────────────────────────────────────

function difficultyLabel(d: DifficultyLevel): string {
  return d === 'foundation' ? 'Foundation (Scaffolded)' : d === 'core' ? 'Core' : 'Extension (Challenge)'
}

function lines(d: DifficultyLevel, base: number): number {
  return d === 'foundation' ? base + 3 : d === 'core' ? base + 1 : base
}

// ── Generators ───────────────────────────────────────────────────────────────

function generateQuoteAnalysis(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Selected Text'
  const topicLabel = topic || 'Key Theme'

  const sections: WorksheetSection[] = []

  if (difficulty === 'foundation') {
    sections.push({
      title: 'Section A: Understanding the Quote',
      instructions: 'Read the quote carefully. Answer the questions below using full sentences.',
      questions: [
        { number: 1, question: 'Write out the quote in your own words. What is the character/speaker saying?', lines: 4 },
        { number: 2, question: `Who says this quote? When in ${textLabel} does it appear?`, lines: 3 },
        { number: 3, question: `What does this quote tell us about the theme of "${topicLabel}"?`, lines: 4 },
      ],
    })
    sections.push({
      title: 'Section B: Language Analysis (Guided)',
      instructions: 'Use the sentence starters to help you analyse the language in the quote.',
      questions: [
        { number: 4, question: 'Identify ONE interesting word or phrase from the quote. Write it here:', lines: 1 },
        { number: 5, question: 'The word/phrase "___" suggests... (What does it make the reader think or feel?)', lines: 4 },
        { number: 6, question: 'The writer may have chosen this word because... (Think about the effect on the reader)', lines: 4 },
      ],
    })
    sections.push({
      title: 'Section C: Context',
      instructions: 'Think about when the text was written and the world the writer lived in.',
      questions: [
        { number: 7, question: `What was happening in society when ${textLabel} was written that links to this quote?`, lines: 4 },
        { number: 8, question: 'How would the original audience have reacted to this quote? Why?', lines: 4 },
      ],
    })
  } else if (difficulty === 'core') {
    sections.push({
      title: 'Section A: Initial Response',
      instructions: 'Read the quote carefully and respond to the following.',
      questions: [
        { number: 1, question: 'Summarise the meaning of this quote in your own words.', lines: 4, marks: 2 },
        { number: 2, question: `Explain the significance of this quote in the context of ${textLabel}.`, lines: 5, marks: 4 },
      ],
    })
    sections.push({
      title: 'Section B: Language & Structure Analysis',
      instructions: 'Analyse the writer\'s use of language and structural choices.',
      questions: [
        { number: 3, question: 'Identify and analyse TWO language techniques used in this quote. Explain the effect of each on the reader.', lines: 8, marks: 6 },
        { number: 4, question: 'How does the position/placement of this quote within the text contribute to its meaning?', lines: 5, marks: 4 },
      ],
    })
    sections.push({
      title: 'Section C: Context & Evaluation',
      instructions: `Link the quote to the context of ${textLabel} and the theme of "${topicLabel}".`,
      questions: [
        { number: 5, question: 'How does this quote reflect the social or historical context of the time?', lines: 5, marks: 4 },
        { number: 6, question: `How does the writer use this quote to present ideas about "${topicLabel}"? Write a PEEL paragraph.`, lines: 10, marks: 8 },
      ],
    })
  } else {
    sections.push({
      title: 'Section A: Close Language Analysis',
      instructions: 'Provide a detailed, perceptive analysis of the language in this quote.',
      questions: [
        { number: 1, question: 'Analyse the semantic field(s) present in this quote. How do they contribute to the writer\'s message?', lines: 7, marks: 6 },
        { number: 2, question: 'Explore how the syntax and structure of this quote shapes meaning and reader response.', lines: 7, marks: 6 },
      ],
    })
    sections.push({
      title: 'Section B: Contextual Interpretation',
      instructions: 'Demonstrate sophisticated understanding of context as a lens for interpretation.',
      questions: [
        { number: 3, question: `How might a contemporary audience have interpreted this quote differently from a modern reader? Consider at least TWO contextual factors.`, lines: 8, marks: 8 },
        { number: 4, question: 'Some critics argue this quote reveals the writer\'s ambivalence. To what extent do you agree?', lines: 8, marks: 8 },
      ],
    })
    sections.push({
      title: 'Section C: Extended Response',
      instructions: 'Write a critical essay paragraph that could form part of an exam response.',
      questions: [
        { number: 5, question: `Starting from this quote, write a detailed analytical paragraph exploring how the writer presents "${topicLabel}" in ${textLabel}. You should analyse language, structure, and context.`, lines: 14, marks: 12 },
      ],
    })
  }

  return {
    title: `Quote Analysis: ${textLabel}`,
    subtitle: `${difficultyLabel(difficulty)} — ${topicLabel}`,
    sections,
  }
}

function generateComparisonFrame(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Text A & Text B'
  const topicLabel = topic || 'Key Theme'

  const sections: WorksheetSection[] = []

  if (difficulty === 'foundation') {
    sections.push({
      title: 'Section A: Understanding Each Text',
      instructions: 'Read both texts carefully. Answer about each one separately first.',
      questions: [
        { number: 1, question: 'What is Text A about? Summarise in 2-3 sentences.', lines: 4 },
        { number: 2, question: 'What is Text B about? Summarise in 2-3 sentences.', lines: 4 },
        { number: 3, question: `How does Text A present the idea of "${topicLabel}"?`, lines: 4 },
        { number: 4, question: `How does Text B present the idea of "${topicLabel}"?`, lines: 4 },
      ],
    })
    sections.push({
      title: 'Section B: Making Comparisons (PEEL Scaffold)',
      instructions: 'Use the PEEL framework below to write a comparison paragraph.',
      questions: [
        { number: 5, question: 'POINT: Both texts present... / While Text A..., Text B... (Write your comparison point)', lines: 4 },
        { number: 6, question: 'EVIDENCE: In Text A, the writer uses "___" ... In Text B, the writer uses "___" ...', lines: 5 },
        { number: 7, question: 'EXPLAIN: This suggests... / The effect of this is... / The reader might feel...', lines: 5 },
        { number: 8, question: 'LINK: Overall, this shows that... / This links to the idea of...', lines: 4 },
      ],
    })
  } else if (difficulty === 'core') {
    sections.push({
      title: 'Section A: Identifying Similarities & Differences',
      instructions: `Compare how both texts present ideas about "${topicLabel}".`,
      questions: [
        { number: 1, question: 'Identify ONE similarity in how the two texts approach this theme. Support with a brief quotation from each.', lines: 6, marks: 4 },
        { number: 2, question: 'Identify ONE difference. Support with a brief quotation from each.', lines: 6, marks: 4 },
      ],
    })
    sections.push({
      title: 'Section B: Comparative PEEL Paragraphs',
      instructions: 'Write TWO PEEL paragraphs comparing the texts. Use connectives: similarly, in contrast, whereas, however, likewise.',
      questions: [
        { number: 3, question: 'PEEL Paragraph 1: Compare the writers\' use of LANGUAGE to present this theme.', lines: 10, marks: 8 },
        { number: 4, question: 'PEEL Paragraph 2: Compare the writers\' use of STRUCTURE or FORM to present this theme.', lines: 10, marks: 8 },
      ],
    })
    sections.push({
      title: 'Section C: Conclusion',
      questions: [
        { number: 5, question: 'Which text do you think presents this theme more effectively? Justify your answer.', lines: 7, marks: 6 },
      ],
    })
  } else {
    sections.push({
      title: 'Section A: Conceptualised Comparison',
      instructions: 'Move beyond surface-level comparison to explore the writers\' intentions and methods.',
      questions: [
        { number: 1, question: `Both writers engage with "${topicLabel}" but adopt fundamentally different approaches. Analyse how each writer\'s method reflects their purpose, audience, and context.`, lines: 10, marks: 10 },
        { number: 2, question: 'Compare how the writers use language to position the reader. Consider tone, register, and rhetorical strategies.', lines: 10, marks: 10 },
      ],
    })
    sections.push({
      title: 'Section B: Extended Comparative Essay',
      instructions: `Write a full comparative response. You should compare the writers' ideas, methods, and the effect on the reader.`,
      questions: [
        { number: 3, question: `Compare how the two writers present their ideas about "${topicLabel}". In your answer you should: compare their ideas and perspectives; compare the methods they use; support with quotations from both texts.`, lines: 20, marks: 16 },
      ],
    })
  }

  return {
    title: `Comparison Frame: ${textLabel}`,
    subtitle: `${difficultyLabel(difficulty)} — ${topicLabel}`,
    sections,
  }
}

function generateExtractAnalysis(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Selected Text'
  const topicLabel = topic || 'Key Theme'
  const d = difficulty

  const sections: WorksheetSection[] = []

  // Retrieval
  sections.push({
    title: 'Section A: Retrieval',
    instructions: d === 'foundation'
      ? 'Find the answers in the extract. Use your own words where possible.'
      : 'Demonstrate your understanding of the extract.',
    questions: d === 'foundation'
      ? [
          { number: 1, question: 'List THREE things you learn about the character/setting from this extract.', lines: 5, marks: 3 },
          { number: 2, question: 'What is the mood/atmosphere at the start of this extract?', lines: 4, marks: 2 },
        ]
      : d === 'core'
        ? [
            { number: 1, question: 'Summarise what happens in this extract in your own words.', lines: 4, marks: 2 },
            { number: 2, question: 'What impression does the reader get of the main character/speaker? Support your answer.', lines: 6, marks: 4 },
          ]
        : [
            { number: 1, question: 'How does the writer establish a narrative voice in this extract? What is its effect?', lines: 6, marks: 4 },
          ],
  })

  // Analysis
  sections.push({
    title: 'Section B: Analysis',
    instructions: d === 'foundation'
      ? 'Look closely at the writer\'s choice of words. Use the prompts to guide your answers.'
      : 'Analyse the writer\'s methods in detail.',
    questions: d === 'foundation'
      ? [
          { number: 3, question: 'Find ONE example of a simile, metaphor, or personification. Write it here:', lines: 3 },
          { number: 4, question: 'What effect does this technique have on the reader? (It makes the reader feel... / It suggests...)', lines: 5, marks: 3 },
          { number: 5, question: 'Find ONE powerful verb or adjective. What does it suggest?', lines: 5, marks: 3 },
        ]
      : d === 'core'
        ? [
            { number: 3, question: `How does the writer use language to present "${topicLabel}" in this extract? Analyse TWO examples.`, lines: lines(d, 6), marks: 8 },
            { number: 4, question: 'How does the writer use structure to interest the reader? Consider beginnings, endings, shifts in focus.', lines: lines(d, 6), marks: 8 },
          ]
        : [
            { number: 2, question: `Analyse how the writer uses language and structure to present "${topicLabel}". You should consider: word choice, imagery, sentence forms, narrative perspective, and structural shifts.`, lines: 14, marks: 12 },
          ],
  })

  // Evaluation
  sections.push({
    title: 'Section C: Evaluation',
    instructions: d === 'foundation'
      ? 'Give your opinion and support it with evidence from the text.'
      : 'Evaluate the writer\'s success critically.',
    questions: d === 'foundation'
      ? [
          { number: 6, question: 'Do you think the writer does a good job of making the reader feel a strong emotion? Explain why, using a quote.', lines: 7, marks: 4 },
        ]
      : d === 'core'
        ? [
            { number: 5, question: `"The writer successfully creates a sense of ${topicLabel.toLowerCase()} throughout this extract." To what extent do you agree? Use evidence to support your response.`, lines: 8, marks: 8 },
          ]
        : [
            { number: 3, question: `A critic has written: "In this extract, the writer masterfully manipulates the reader's sympathies." Evaluate this statement with detailed reference to the text. You may agree, disagree, or offer a nuanced response.`, lines: 14, marks: 12 },
          ],
  })

  return {
    title: `Extract Analysis: ${textLabel}`,
    subtitle: `${difficultyLabel(difficulty)} — ${topicLabel}`,
    sections,
  }
}

function generateCreativeWriting(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, topic } = config
  const topicLabel = topic || 'Descriptive Writing'
  const d = difficulty

  const sections: WorksheetSection[] = []

  // Planning
  sections.push({
    title: 'Section A: Planning',
    instructions: d === 'foundation'
      ? 'Use these boxes to plan your writing before you begin. You do NOT need to write in full sentences here.'
      : 'Plan your response. Strong planning leads to strong writing.',
    questions: d === 'foundation'
      ? [
          { number: 1, question: 'Setting: Where and when is your writing set? List 5 things you can SEE, HEAR, SMELL, TOUCH, or TASTE.', lines: 5 },
          { number: 2, question: 'Characters: Who is in your writing? Write 2-3 words to describe them.', lines: 3 },
          { number: 3, question: 'Structure: What happens at the beginning, middle, and end?', lines: 5 },
          { number: 4, question: 'Vocabulary: Write 5 ambitious words or phrases you could use.', lines: 3 },
        ]
      : d === 'core'
        ? [
            { number: 1, question: 'Opening: How will you hook the reader? (Consider starting with: dialogue, action, description, a question)', lines: 3 },
            { number: 2, question: 'Techniques to include: List at least 4 language/structural techniques you will use (e.g., metaphor, short sentence, cyclical structure, pathetic fallacy).', lines: 3 },
            { number: 3, question: 'Structural arc: Plan your 4-5 paragraph structure. Note the shift/turning point.', lines: 5 },
          ]
        : [
            { number: 1, question: 'Conceptual plan: What is the deeper meaning or theme you want to explore through this piece? How will form and structure serve this meaning?', lines: 4 },
            { number: 2, question: 'Narrative voice and perspective: Who is telling this story? Why? What are the limitations of their perspective?', lines: 3 },
            { number: 3, question: 'Structural design: Map your structural arc. Consider: time shifts, perspective changes, motifs, cyclical elements, and pacing.', lines: 4 },
          ],
  })

  // Writing
  sections.push({
    title: 'Section B: Writing',
    instructions: d === 'foundation'
      ? `Write a piece of ${topicLabel.toLowerCase()} writing. Try to include: a simile or metaphor, interesting adjectives, short sentences for effect, a variety of sentence starters.`
      : d === 'core'
        ? `Write your ${topicLabel.toLowerCase()} piece. Aim for 350-500 words. Focus on: varied and ambitious vocabulary, a range of language techniques, deliberate structural choices, crafted sentences.`
        : `Write your ${topicLabel.toLowerCase()} piece. Aim for 400-600 words. Your writing should demonstrate: a sophisticated command of language, deliberate and varied structural choices, a controlled and distinctive narrative voice, originality of thought and expression.`,
    questions: [
      {
        number: d === 'foundation' ? 5 : d === 'core' ? 4 : 4,
        question: `${topicLabel}: Write your response below.`,
        lines: d === 'foundation' ? 24 : d === 'core' ? 28 : 30,
        marks: d === 'foundation' ? 24 : d === 'core' ? 40 : 40,
      },
    ],
  })

  // Self-assessment
  if (d !== 'extension') {
    sections.push({
      title: 'Section C: Self-Assessment Checklist',
      instructions: 'Review your writing. Tick each technique you have used.',
      questions: d === 'foundation'
        ? [
            { number: 6, question: 'Check: Have you used a simile or metaphor? Have you used interesting adjectives? Have you used at least one short sentence for effect? Have you started sentences in different ways? Have you checked your spelling and punctuation?', lines: 3 },
          ]
        : [
            { number: 5, question: 'Check: Does your opening hook the reader? Have you used at least 4 language techniques? Is there a clear structural arc with a shift/turning point? Have you varied your sentence lengths deliberately? Is your vocabulary ambitious and precise? Have you proofread for SPAG?', lines: 4 },
          ],
    })
  }

  return {
    title: `Creative Writing: ${topicLabel}`,
    subtitle: difficultyLabel(difficulty),
    sections,
  }
}

function generateVocabularyBuilder(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Selected Text'
  const topicLabel = topic || 'Key Vocabulary'
  const d = difficulty

  const sections: WorksheetSection[] = []

  sections.push({
    title: 'Section A: Key Terms',
    instructions: d === 'foundation'
      ? 'Match each keyword to the correct definition by writing the letter in the box.'
      : 'Define the following key terms in your own words. Provide an example of each.',
    questions: d === 'foundation'
      ? [
          { number: 1, question: 'Term 1: _____________ Definition: _____________', lines: 2 },
          { number: 2, question: 'Term 2: _____________ Definition: _____________', lines: 2 },
          { number: 3, question: 'Term 3: _____________ Definition: _____________', lines: 2 },
          { number: 4, question: 'Term 4: _____________ Definition: _____________', lines: 2 },
          { number: 5, question: 'Term 5: _____________ Definition: _____________', lines: 2 },
          { number: 6, question: 'Term 6: _____________ Definition: _____________', lines: 2 },
        ]
      : d === 'core'
        ? [
            { number: 1, question: 'Define Term 1 in your own words and provide an example from the text:', lines: 4, marks: 2 },
            { number: 2, question: 'Define Term 2 in your own words and provide an example from the text:', lines: 4, marks: 2 },
            { number: 3, question: 'Define Term 3 in your own words and provide an example from the text:', lines: 4, marks: 2 },
            { number: 4, question: 'Define Term 4 in your own words and provide an example from the text:', lines: 4, marks: 2 },
            { number: 5, question: 'Define Term 5 in your own words and provide an example from the text:', lines: 4, marks: 2 },
            { number: 6, question: 'Define Term 6 in your own words and provide an example from the text:', lines: 4, marks: 2 },
          ]
        : [
            { number: 1, question: 'Define each term, explain its connotations, and analyse why the writer chose it over a synonym:', lines: 4, marks: 3 },
            { number: 2, question: 'Term 2:', lines: 4, marks: 3 },
            { number: 3, question: 'Term 3:', lines: 4, marks: 3 },
            { number: 4, question: 'Term 4:', lines: 4, marks: 3 },
            { number: 5, question: 'Term 5:', lines: 4, marks: 3 },
            { number: 6, question: 'Term 6:', lines: 4, marks: 3 },
          ],
  })

  sections.push({
    title: 'Section B: Complete the Sentences',
    instructions: `Use the key terms from Section A to complete these sentences about ${textLabel}.`,
    questions: [
      { number: 7, question: 'The writer uses _____________ to create a sense of...', lines: lines(d, 2), marks: d === 'foundation' ? undefined : 2 },
      { number: 8, question: 'When the character _____________, this demonstrates...', lines: lines(d, 2), marks: d === 'foundation' ? undefined : 2 },
      { number: 9, question: 'The theme of _____________ is developed through...', lines: lines(d, 2), marks: d === 'foundation' ? undefined : 2 },
    ],
  })

  sections.push({
    title: 'Section C: Using Vocabulary in Analysis',
    instructions: d === 'foundation'
      ? 'Write a sentence using ONE of the key terms to analyse the text.'
      : `Use the vocabulary to write an analytical paragraph about "${topicLabel}" in ${textLabel}.`,
    questions: [
      {
        number: 10,
        question: d === 'foundation'
          ? 'Write ONE analytical sentence using a key term from Section A.'
          : d === 'core'
            ? `Write a PEEL paragraph about "${topicLabel}" using at least THREE key terms from Section A.`
            : `Write a sophisticated analytical paragraph that weaves in the key vocabulary naturally, demonstrating precise and varied usage.`,
        lines: d === 'foundation' ? 4 : d === 'core' ? 8 : 10,
        marks: d === 'foundation' ? 3 : d === 'core' ? 6 : 8,
      },
    ],
  })

  return {
    title: `Vocabulary Builder: ${textLabel}`,
    subtitle: `${difficultyLabel(difficulty)} — ${topicLabel}`,
    sections,
  }
}

function generateExamQuestion(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Selected Text'
  const topicLabel = topic || 'Key Theme'
  const d = difficulty

  const sections: WorksheetSection[] = []

  sections.push({
    title: 'The Question',
    instructions: d === 'foundation'
      ? 'Read the question carefully. Underline the key words. Use the planning frame below before you start writing.'
      : 'Read the question carefully. Plan your response before writing.',
    questions: [
      {
        number: 1,
        question: `How does the writer present the theme of "${topicLabel}" in ${textLabel}? Write about: how the writer presents "${topicLabel}" in the text; how the writer uses language and structure to convey ideas about "${topicLabel}".`,
        lines: 0,
        marks: d === 'foundation' ? 20 : d === 'core' ? 30 : 30,
      },
    ],
  })

  if (d === 'foundation') {
    sections.push({
      title: 'Planning Frame',
      instructions: 'Fill in the boxes below to plan your answer.',
      questions: [
        { number: 2, question: 'Key words in the question (underline/list them here):', lines: 2 },
        { number: 3, question: 'Point 1: What is one way the writer presents this theme?', lines: 2 },
        { number: 4, question: 'Evidence 1: Write a quote that supports your point:', lines: 2 },
        { number: 5, question: 'Point 2: What is another way the writer presents this theme?', lines: 2 },
        { number: 6, question: 'Evidence 2: Write a quote that supports your point:', lines: 2 },
        { number: 7, question: 'Context: What was happening in society that links to this theme?', lines: 2 },
      ],
    })
  } else if (d === 'core') {
    sections.push({
      title: 'Planning Space',
      instructions: 'Plan at least 3 points with evidence and analysis. Consider language, structure, and context.',
      questions: [
        { number: 2, question: 'Plan your response here (bullet points, spider diagram, or table):', lines: 8 },
      ],
    })
  }

  sections.push({
    title: 'Your Response',
    instructions: d === 'foundation'
      ? 'Write your answer using the PEEL structure. Aim for at least 2 paragraphs.'
      : d === 'core'
        ? 'Write your full response. Aim for 3-4 PEEL paragraphs with an introduction and conclusion.'
        : 'Write your full essay response. Demonstrate: a conceptualised argument, judicious use of evidence, perceptive analysis, and integrated context.',
    questions: [
      {
        number: d === 'foundation' ? 8 : d === 'core' ? 3 : 2,
        question: 'Write your response below:',
        lines: d === 'foundation' ? 20 : d === 'core' ? 28 : 32,
        marks: d === 'foundation' ? 20 : 30,
      },
    ],
  })

  sections.push({
    title: 'Marking Guidance Summary',
    instructions: 'Use this to self-assess or peer-assess the response.',
    questions: [
      {
        number: d === 'foundation' ? 9 : d === 'core' ? 4 : 3,
        question: d === 'foundation'
          ? 'Check: (1) Did you make a clear point? (2) Did you include a quote? (3) Did you explain what the quote suggests? (4) Did you mention context? Award yourself: 1 point for each tick.'
          : d === 'core'
            ? 'AO1: Clear, relevant points with embedded quotations? AO2: Analysis of language/structure with subject terminology? AO3: Links to context that are integrated (not bolted on)? AO4 (if applicable): SPaG — accurate, varied, and fluent writing?'
            : 'Band 6 (26-30): Convincing, critical response with conceptualised argument. Judicious, embedded quotations. Perceptive, detailed analysis of methods. Context seamlessly integrated into argument. Evaluate your response against these criteria.',
        lines: 4,
      },
    ],
  })

  return {
    title: `Exam Practice: ${textLabel}`,
    subtitle: `${difficultyLabel(difficulty)} — ${topicLabel}`,
    sections,
  }
}

function generateCharacterProfile(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Selected Text'
  const characterName = topic || 'Character Name'
  const d = difficulty

  const sections: WorksheetSection[] = []

  sections.push({
    title: 'Section A: Character Overview',
    instructions: d === 'foundation'
      ? `Write about ${characterName} using the prompts below.`
      : `Build a detailed profile of ${characterName} from ${textLabel}.`,
    questions: d === 'foundation'
      ? [
          { number: 1, question: `Who is ${characterName}? Describe them in 2-3 sentences.`, lines: 4 },
          { number: 2, question: `What are ${characterName}'s main personality traits? List at least 3.`, lines: 3 },
          { number: 3, question: `How does ${characterName} change during the text? (Beginning vs. End)`, lines: 5 },
        ]
      : d === 'core'
        ? [
            { number: 1, question: `Summarise ${characterName}'s role and significance in ${textLabel}.`, lines: 4, marks: 4 },
            { number: 2, question: `Trace ${characterName}'s character arc. How and why do they change?`, lines: 5, marks: 6 },
          ]
        : [
            { number: 1, question: `Analyse ${characterName} as a vehicle for the writer's ideas. What do they represent?`, lines: 5, marks: 6 },
            { number: 2, question: `How does the writer use ${characterName} to challenge or reinforce the values of the time?`, lines: 5, marks: 6 },
          ],
  })

  sections.push({
    title: 'Section B: Key Quotations',
    instructions: d === 'foundation'
      ? `Find 3 important quotes about or by ${characterName}. Write what each one tells us.`
      : `Select and analyse key quotations that reveal aspects of ${characterName}.`,
    questions: d === 'foundation'
      ? [
          { number: 4, question: 'Quote 1: "___" — This tells us...', lines: 5 },
          { number: 5, question: 'Quote 2: "___" — This tells us...', lines: 5 },
          { number: 6, question: 'Quote 3: "___" — This tells us...', lines: 5 },
        ]
      : d === 'core'
        ? [
            { number: 3, question: 'Quote 1: Analyse the language used. What does it reveal about the character?', lines: 6, marks: 4 },
            { number: 4, question: 'Quote 2: How does this quote show a change or development?', lines: 6, marks: 4 },
            { number: 5, question: 'Quote 3: How does this quote link to a key theme?', lines: 6, marks: 4 },
          ]
        : [
            { number: 3, question: `Select 3 quotations that chart ${characterName}'s arc. For each: analyse the language in detail, explore what it reveals about the writer's intentions, and explain how it connects to wider themes and context.`, lines: 12, marks: 12 },
          ],
  })

  sections.push({
    title: 'Section C: Context & Essay Links',
    instructions: `Link ${characterName} to the context of ${textLabel} and to essay themes.`,
    questions: d === 'foundation'
      ? [
          { number: 7, question: `What was happening in society when this text was written that relates to ${characterName}?`, lines: 5, marks: 3 },
          { number: 8, question: `If you had to write an essay about ${characterName}, what would your main argument be?`, lines: 5, marks: 3 },
        ]
      : d === 'core'
        ? [
            { number: 6, question: `How does ${characterName} reflect the social/historical context? Give specific examples.`, lines: 7, marks: 6 },
            { number: 7, question: `Write an essay-style PEEL paragraph about ${characterName} and a key theme.`, lines: 10, marks: 8 },
          ]
        : [
            { number: 4, question: `Write a thesis statement about ${characterName} that could anchor a full essay. Then write two supporting analytical paragraphs with integrated context.`, lines: 16, marks: 16 },
          ],
  })

  return {
    title: `Character Profile: ${characterName}`,
    subtitle: `${difficultyLabel(difficulty)} — ${textLabel}`,
    sections,
  }
}

function generateThemeExplorer(config: WorksheetConfig): GeneratedWorksheet {
  const { difficulty, text, topic } = config
  const textLabel = text || 'Selected Text'
  const topicLabel = topic || 'Key Theme'
  const d = difficulty

  const sections: WorksheetSection[] = []

  sections.push({
    title: 'Section A: Theme Statement',
    instructions: d === 'foundation'
      ? `Think about the theme of "${topicLabel}" in ${textLabel}.`
      : `Explore the writer's presentation of "${topicLabel}" throughout ${textLabel}.`,
    questions: d === 'foundation'
      ? [
          { number: 1, question: `What does "${topicLabel}" mean? Write a definition in your own words.`, lines: 4 },
          { number: 2, question: `How is "${topicLabel}" shown in ${textLabel}? Give 2-3 examples from the story.`, lines: 6 },
        ]
      : d === 'core'
        ? [
            { number: 1, question: `Write a clear theme statement: "In ${textLabel}, the writer presents ${topicLabel.toLowerCase()} as..."`, lines: 4, marks: 3 },
            { number: 2, question: `How does the writer's presentation of this theme change across the text?`, lines: 7, marks: 5 },
          ]
        : [
            { number: 1, question: `Craft a conceptualised thesis statement about "${topicLabel}" in ${textLabel}. This should go beyond description to argue a specific interpretation.`, lines: 4, marks: 4 },
          ],
  })

  sections.push({
    title: 'Section B: Evidence from the Text',
    instructions: d === 'foundation'
      ? `Find 3 quotes from ${textLabel} that show the theme of "${topicLabel}".`
      : `Select and analyse evidence that demonstrates the development of this theme.`,
    questions: d === 'foundation'
      ? [
          { number: 3, question: 'Quote from the BEGINNING of the text: "___" — This shows...', lines: 5 },
          { number: 4, question: 'Quote from the MIDDLE of the text: "___" — This shows...', lines: 5 },
          { number: 5, question: 'Quote from the END of the text: "___" — This shows...', lines: 5 },
        ]
      : d === 'core'
        ? [
            { number: 3, question: 'Identify a key moment where this theme is introduced. Analyse the writer\'s language choices.', lines: 7, marks: 5 },
            { number: 4, question: 'Identify a moment where this theme develops or shifts. Analyse how the writer signals this change.', lines: 7, marks: 5 },
            { number: 5, question: 'Identify the climactic moment for this theme. How does the writer create impact?', lines: 7, marks: 5 },
          ]
        : [
            { number: 2, question: `Trace the trajectory of "${topicLabel}" across the text. Select 3-4 key moments and analyse how the writer's methods evolve. Consider: language, structure, symbolism, and narrative technique.`, lines: 12, marks: 12 },
          ],
  })

  sections.push({
    title: "Section C: Author's Purpose & Context",
    instructions: `Consider why the writer chose to explore "${topicLabel}" and what message they convey.`,
    questions: d === 'foundation'
      ? [
          { number: 6, question: `Why do you think the writer wanted to write about "${topicLabel}"? What message are they trying to give?`, lines: 5, marks: 3 },
          { number: 7, question: 'What was happening in society at the time that links to this theme?', lines: 5, marks: 3 },
        ]
      : d === 'core'
        ? [
            { number: 6, question: `What is the writer's message about "${topicLabel}"? How does this reflect the values of the time?`, lines: 7, marks: 5 },
            { number: 7, question: `How might a modern reader respond to this theme differently from the original audience?`, lines: 7, marks: 5 },
          ]
        : [
            { number: 3, question: `Evaluate the writer's purpose in exploring "${topicLabel}". Consider: the writer as a social commentator, the political/cultural context, and how the text functions as a critique or endorsement of contemporary values.`, lines: 10, marks: 8 },
          ],
  })

  // Links section
  if (d !== 'foundation') {
    sections.push({
      title: 'Section D: Thematic Links',
      instructions: 'Connect this theme to other texts, themes, or ideas you have studied.',
      questions: d === 'core'
        ? [
            { number: 8, question: `How does "${topicLabel}" in ${textLabel} compare to the same theme in another text you have studied?`, lines: 7, marks: 5 },
          ]
        : [
            { number: 4, question: `Write a comparative paragraph linking "${topicLabel}" in ${textLabel} to its treatment in another text. Explore how the different writers' contexts shape their approaches.`, lines: 10, marks: 10 },
          ],
    })
  }

  return {
    title: `Theme Explorer: ${topicLabel}`,
    subtitle: `${difficultyLabel(difficulty)} — ${textLabel}`,
    sections,
  }
}

// ── Main Generator ───────────────────────────────────────────────────────────

const GENERATORS: Record<WorksheetType, (config: WorksheetConfig) => GeneratedWorksheet> = {
  'quote-analysis': generateQuoteAnalysis,
  'comparison-frame': generateComparisonFrame,
  'extract-analysis': generateExtractAnalysis,
  'creative-writing': generateCreativeWriting,
  'vocabulary-builder': generateVocabularyBuilder,
  'exam-question': generateExamQuestion,
  'character-profile': generateCharacterProfile,
  'theme-explorer': generateThemeExplorer,
}

export function generateWorksheet(config: WorksheetConfig): GeneratedWorksheet {
  const generator = GENERATORS[config.type]
  if (!generator) {
    throw new Error(`Unknown worksheet type: ${config.type}`)
  }
  return generator(config)
}
