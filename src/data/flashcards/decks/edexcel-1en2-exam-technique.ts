// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-1en2-exam-technique',
  title: 'Edexcel Exam Technique',
  description:
    'Question-specific strategies, timing, and mark allocations for every question on Edexcel 1EN2 Papers 1 and 2',
  category: 'gcse',
  board: 'Edexcel',
  cards: [
    {
      id: 'eet2-1',
      front: 'Paper 1 Timing Strategy (1 hour 45 mins)',
      back: `Total: 105 minutes for 80 marks.\n\nRecommended split:\n• Read both sources: 10 minutes\n• Q1 (4 marks): 5 minutes\n• Q2 (8 marks): 10 minutes\n• Q3 (12 marks): 15 minutes\n• Q4 (16 marks): 20 minutes\n• Q5 (40 marks): 45 minutes (5 plan + 35 write + 5 check)\n\nGolden rule: 1 minute per mark. Never spend 20 minutes on a 4-mark question. Protect your Q5 time - it is worth HALF the paper.`,
    },
    {
      id: 'eet2-2',
      front: 'Paper 2 Timing Strategy (2 hours 5 mins)',
      back: `Total: 125 minutes for 80 marks.\n\nRecommended split:\n• Read the fiction extract: 10-15 minutes (it is longer than Paper 1 sources)\n• Q1 (4 marks): 5 minutes\n• Q2 (8 marks): 10 minutes\n• Q3 (12 marks): 15 minutes\n• Q4 (16 marks): 20 minutes\n• Q5 (40 marks): 55 minutes (5 plan + 45 write + 5 check)\n\nYou have 20 extra minutes compared to Paper 1. Use them for careful reading and extended creative writing.`,
    },
    {
      id: 'eet2-3',
      front: 'Paper 1 Q1 - Information Retrieval (4 marks, AO1)',
      back: `Task: Identify 4 pieces of information from ONE specified source.\n\nStrategy:\n• Read the question to find which source and which lines.\n• Give 4 short, distinct points - one per mark.\n• Use your own words or direct reference.\n• No analysis needed - this is pure comprehension.\n\nTiming: 5 minutes maximum.\nCommon mistake: Writing too much. Brief, accurate points are all that is needed.`,
    },
    {
      id: 'eet2-4',
      front: 'Paper 1 Q2 - Synthesis (8 marks, AO1)',
      back: `Task: Use BOTH sources to explain similarities or differences on a given topic.\n\nStrategy:\n• Make 3-4 developed comparative points.\n• Each point MUST reference both sources.\n• Infer - go beyond surface information.\n• Use connectives: "Similarly," "Both writers suggest," "In contrast."\n\nStructure per point: Inference from Source A → supporting evidence → link to Source B → supporting evidence → brief development.\n\nTiming: 10 minutes.`,
    },
    {
      id: 'eet2-5',
      front: 'Paper 1 Q3 - Language Analysis (12 marks, AO2)',
      back: `Task: Analyse how the writer uses language to [specific effect] in ONE source.\n\nStrategy:\n• Write 3-4 detailed PEAL paragraphs.\n• P = Point about effect. E = Embedded quote (short). A = Analyse technique and word choice. L = Link to reader\'s response.\n• Zoom into INDIVIDUAL WORDS - do not just quote a whole sentence.\n• Name techniques only when it aids analysis.\n\nTiming: 15 minutes.\nKey: Always explain EFFECT. "The writer uses alliteration" = 0 marks without explaining WHY it matters.`,
    },
    {
      id: 'eet2-6',
      front: "Paper 1 Q4 - Compare Writers' Methods (16 marks, AO2 + AO3)",
      back: `Task: Compare how both writers convey their perspectives on a given theme.\n\nStrategy:\n• 4-5 integrated comparative paragraphs.\n• Each paragraph: comparative topic sentence → Source A analysis → comparative connective → Source B analysis → evaluation of difference/similarity.\n• Compare METHODS (language, structure, tone) not just IDEAS.\n• Address both micro (word choice) and macro (structure, form, purpose).\n\nTiming: 20 minutes.\nThis is the highest-mark reading question. Give it the attention it deserves.`,
    },
    {
      id: 'eet2-7',
      front: 'Paper 1 Q5 - Transactional Writing (40 marks, AO5 + AO6)',
      back: `Task: Write in a specified form (letter, article, speech, review, blog, report, guide, email) to argue, persuade, advise, or inform.\n\nStrategy:\n1. PLAN (5 mins): Purpose, audience, form, 4-5 key points, opening hook, closing statement.\n2. WRITE (35 mins): Match register to audience. Use rhetorical devices purposefully. Paragraph clearly. Vary sentences.\n3. CHECK (5 mins): Spelling, punctuation, sentence clarity.\n\nForm conventions matter: A speech needs direct address and rhetorical flourish. A letter needs addresses and sign-off. An article needs a headline.\n\n24 marks for content/organisation + 16 marks for accuracy = your biggest single mark allocation.`,
    },
    {
      id: 'eet2-8',
      front: 'Paper 2 Q1 - Information Retrieval (4 marks, AO1)',
      back: `Task: Identify 4 pieces of information from the fiction extract.\n\nStrategy:\n• Read the question to find which section of the extract.\n• Give 4 short, distinct points.\n• These can be one sentence each.\n• No analysis - just accurate comprehension.\n\nTiming: 5 minutes maximum.\nTip: This is the easiest question on the paper. Get 4/4 and move on quickly.`,
    },
    {
      id: 'eet2-9',
      front: 'Paper 2 Q2 - Summary/Synthesis (8 marks, AO1)',
      back: `Task: Summarise key aspects from the text(s) on a specific topic.\n\nStrategy:\n• Make 3-4 clear points with evidence.\n• Infer beyond the literal - what is implied?\n• Keep quotes short and embedded.\n• If comparing two texts, use comparative connectives.\n\nTiming: 10 minutes.\nKey difference from Q1: Q2 requires INFERENCE and DEVELOPMENT, not just retrieval. A point without development earns half marks.`,
    },
    {
      id: 'eet2-10',
      front: 'Paper 2 Q3 - Language and Structure Analysis (12 marks, AO2)',
      back: `Task: Analyse how the writer uses language AND structure to create effects in the fiction extract.\n\nStrategy:\n• Cover BOTH language and structure - ignoring either caps your mark.\n• Language: word choice, imagery, figurative language, tone, dialogue.\n• Structure: opening, shifts in focus/pace/tone, narrative perspective, paragraph length, ending.\n• Write 3-4 detailed paragraphs with embedded quotations.\n\nTiming: 15 minutes.\nTop tip: One paragraph on structure minimum. Comment on WHERE in the extract something happens and WHY the writer places it there.`,
    },
    {
      id: 'eet2-11',
      front: 'Paper 2 Q4 - Critical Evaluation (16 marks, AO2 + AO4)',
      back: `Task: Evaluate how effectively the writer achieves a specific effect. You are given a statement and asked how far you agree.\n\nStrategy:\n• Write 4-5 paragraphs.\n• Each paragraph: state your evaluative judgement → provide evidence → analyse how the technique creates the effect → evaluate its success.\n• Use evaluative language throughout: "effectively," "convincingly," "powerfully," "less successfully."\n• You CAN partially disagree - nuance shows critical thinking.\n\nTiming: 20 minutes.\nCritical: This is NOT just analysis. You must JUDGE effectiveness. Every paragraph needs an evaluative statement.`,
    },
    {
      id: 'eet2-12',
      front: 'Paper 2 Q5 - Imaginative Writing (40 marks, AO5 + AO6)',
      back: `Task: Write a narrative or descriptive piece, often linked to an image or theme prompt.\n\nStrategy:\n1. PLAN (5 mins): Character, setting, conflict, 5-part structure (opening → build → shift → climax → resolution), ending.\n2. WRITE (45 mins): Choose a SMALL moment. Write it in DEPTH. Show, don\'t tell. Use sensory detail (3+ senses). Vary sentences. Use a structural device (cyclical, flashback, zoom in/out).\n3. CHECK (5 mins): Spelling, punctuation, sentence boundaries.\n\nGolden rule: A vivid, controlled 1.5 pages beats a rushed, sprawling 3 pages. Quality over quantity.`,
    },
    {
      id: 'eet2-13',
      front: 'How to Embed Quotations Effectively',
      back: `Embedding = weaving quotes into your own sentences so they read grammatically.\n\nWeak: The writer says "the bitter wind howled." This shows the wind is strong.\nStrong: The "bitter wind" that "howled" creates a hostile atmosphere, with "bitter" connoting resentment and suffering.\n\nRules:\n• Keep quotes SHORT (2-5 words).\n• Zoom into individual words within the quote for deeper analysis.\n• Your sentence must read fluently with the quote inside it.\n• Use quotation marks accurately.\n\nThis single skill separates Band 3 from Band 4 responses.`,
    },
    {
      id: 'eet2-14',
      front: 'Planning Transactional Writing (Paper 1 Q5)',
      back: `Spend 5 minutes planning. This is NOT wasted time - it prevents rambling.\n\nPlan format:\n1. Purpose: argue / persuade / advise / inform\n2. Audience: who am I writing to? (determines register)\n3. Form: letter / article / speech / review / blog / report\n4. Key points: 4-5 arguments or ideas (one per paragraph)\n5. Opening: hook - statistic, question, bold statement, anecdote\n6. Closing: call to action, circular reference to opening, powerful final line\n\nA planned essay with 4 strong points beats an unplanned essay with 7 weak ones.`,
    },
    {
      id: 'eet2-15',
      front: 'Planning Imaginative Writing (Paper 2 Q5)',
      back: `Spend 5 minutes planning. Choose SMALL and go DEEP.\n\nPlan format:\n1. Scenario: one scene, one moment, one character\n2. Setting: 3 sensory details to establish atmosphere\n3. Structure: opening → build tension → shift/turning point → climax → resolution\n4. Motif: one image or idea to repeat and develop\n5. Ending: how does it resolve? Echo the opening for cyclical structure.\n\nDo NOT try to tell a whole life story. The best responses zoom into 10 minutes of a character\'s life and make the reader FEEL it.`,
    },
    {
      id: 'eet2-16',
      front: 'The 19th-Century Source - How to Approach It',
      back: `Paper 1 always includes a 19th-century non-fiction text. Do not be intimidated.\n\nStrategy:\n1. Read it TWICE - once for gist, once for detail.\n2. Expect formal, complex sentences with subordinate clauses - this is normal.\n3. If a word is unfamiliar, infer from context.\n4. Consider the CONTEXT: industrialisation, empire, class, gender, religion, reform.\n5. Remember the writer\'s PURPOSE - 19th-century non-fiction was often written to campaign, argue, or persuade.\n\nThe 19th-century text is often richer for analysis than the modern source. Engage with it fully.`,
    },
    {
      id: 'eet2-17',
      front: 'Common Mistakes and How to Avoid Them',
      back: `1. Feature-spotting: "The writer uses alliteration" - SO WHAT? Always explain the effect.\n2. Retelling: Do not narrate what happens. Analyse HOW and WHY the writer creates effects.\n3. Running out of time on Q5: Writing = 50% of the paper. Set a timer and protect writing time.\n4. Ignoring structure: Language-only analysis caps your mark on Paper 2 Q3. Always discuss structural choices.\n5. Wrong form conventions: A speech without direct address. A letter without a sign-off. Check your form.\n6. Single-word quotes only: Zoom in on words, but also quote phrases to show you understand context.\n7. No proofreading: 5 minutes of checking can gain 3-4 marks in AO6. Always leave time.`,
    },
    {
      id: 'eet2-18',
      front: 'Upgrading Your Analytical Vocabulary',
      back: `Replace generic words with precise analytical terms:\n\n• "shows" → "conveys," "implies," "suggests," "reveals," "foregrounds"\n• "the reader feels sad" → "evokes pathos," "elicits sympathy," "creates a sombre mood"\n• "is effective" → "is compelling," "resonates with the reader," "achieves its purpose"\n• "a good description" → "evocative imagery," "visceral sensory detail"\n• "the writer talks about" → "the writer interrogates," "the writer foregrounds," "the writer confronts"\n• "this is interesting" → NEVER write this. Explain WHY it is interesting.\n\nPrecise vocabulary signals Band 4-5 analysis to the marker.`,
    },
  ],
}

export default deck
