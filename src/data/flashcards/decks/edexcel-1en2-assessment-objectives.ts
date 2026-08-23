// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-1en2-assessment-objectives',
  title: 'Edexcel Assessment Objectives',
  description:
    'AO1 through AO6 for Edexcel 1EN2 English Language with specific mark allocations and marker expectations',
  category: 'gcse',
  board: 'Edexcel',
  cards: [
    {
      id: 'eao2-1',
      front: 'AO1 - Identify and Interpret',
      back: `Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.\n\nEdexcel 1EN2 application:\n• Paper 1 Q1 (4 marks): Retrieve explicit information from one source.\n• Paper 1 Q2 (8 marks): Synthesise information from BOTH sources.\n• Paper 2 Q1 (4 marks): Retrieve information from the fiction extract.\n• Paper 2 Q2 (8 marks): Summarise/synthesise from one or two texts.\n\nKey skill: Inference - reading between the lines, not just surface comprehension.`,
    },
    {
      id: 'eao2-2',
      front: 'AO2 - Analyse Language and Structure',
      back: `Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.\n\nEdexcel 1EN2 application:\n• Paper 1 Q3 (12 marks): Language analysis of one non-fiction source.\n• Paper 1 Q4 (16 marks): Compare writers\' methods across both sources.\n• Paper 2 Q3 (12 marks): Language AND structure analysis of fiction.\n• Paper 2 Q4 (16 marks): Evaluate the writer\'s methods.\n\nThis is the highest-weighted reading AO. Always analyse EFFECT - do not just spot techniques.`,
    },
    {
      id: 'eao2-3',
      front: "AO3 - Compare Writers' Ideas and Perspectives",
      back: `Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.\n\nEdexcel 1EN2 application:\n• Tested in Paper 1 Q4 (16 marks) - comparing two non-fiction sources.\n\nYou must compare BOTH ideas (what they think) AND methods (how they express it).\n\nStructure each paragraph around a comparative point. Use connectives: "Similarly," "Whereas," "Both writers," "In contrast."\n\nDo NOT write about each text separately - integrate comparison throughout.`,
    },
    {
      id: 'eao2-4',
      front: 'AO4 - Evaluate Critically',
      back: `Evaluate texts critically and support this with appropriate textual references.\n\nEdexcel 1EN2 application:\n• Tested in Paper 2 Q4 (16 marks).\n• You are given a statement about the text and asked how far you agree.\n\nYou must JUDGE effectiveness, not just describe.\n\nKey phrases: "The writer effectively...", "This is convincing because...", "A less successful aspect is..."\n\nSustained evaluation throughout = top band. A single evaluative sentence is not enough.`,
    },
    {
      id: 'eao2-5',
      front: 'AO5 - Communicate and Organise (Writing)',
      back: `Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion.\n\nEdexcel 1EN2 application:\n• Paper 1 Q5: 24 marks (transactional writing).\n• Paper 2 Q5: 24 marks (imaginative writing).\n\nCovers: quality of ideas, audience awareness, register, paragraphing, structural devices, coherence.\n\nThis is the LARGEST single mark allocation on both papers.`,
    },
    {
      id: 'eao2-6',
      front: 'AO6 - Technical Accuracy (Writing)',
      back: `Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.\n\nEdexcel 1EN2 application:\n• Paper 1 Q5: 16 marks.\n• Paper 2 Q5: 16 marks.\n\nCovers: spelling accuracy, punctuation variety (semicolons, colons, dashes, ellipsis), sentence variety (simple, compound, complex, minor), ambitious vocabulary.\n\nThese are the most accessible marks on the paper. Accuracy costs nothing but time - proofread your final 5 minutes.`,
    },
    {
      id: 'eao2-7',
      front: 'Paper 1 Full Mark Breakdown (1EN2/01)',
      back: `Total: 80 marks | 1 hour 45 minutes\n\nSection A - Reading (40 marks):\n• Q1: 4 marks (AO1) - information retrieval from one source\n• Q2: 8 marks (AO1) - synthesis across both sources\n• Q3: 12 marks (AO2) - language analysis of one source\n• Q4: 16 marks (AO2 + AO3) - compare writers\' methods\n\nSection B - Transactional Writing (40 marks):\n• Q5: 24 marks (AO5) + 16 marks (AO6) = 40 marks\n\nReading and writing are equally weighted at 50% each.`,
    },
    {
      id: 'eao2-8',
      front: 'Paper 2 Full Mark Breakdown (1EN2/02)',
      back: `Total: 80 marks | 2 hours 5 minutes\n\nSection A - Reading (40 marks):\n• Q1: 4 marks (AO1) - information retrieval from fiction extract\n• Q2: 8 marks (AO1) - summary or synthesis\n• Q3: 12 marks (AO2) - language and structure analysis\n• Q4: 16 marks (AO2 + AO4) - critical evaluation\n\nSection B - Imaginative Writing (40 marks):\n• Q5: 24 marks (AO5) + 16 marks (AO6) = 40 marks\n\nPaper 2 has 20 extra minutes - use them for the longer fiction extract and creative writing planning.`,
    },
    {
      id: 'eao2-9',
      front: 'How AOs Map to Grade Boundaries',
      back: `Grade 8-9: Perceptive, detailed AO2 analysis with judicious evidence. Compelling, crafted writing (AO5) with assured technical accuracy (AO6).\n\nGrade 6-7: Convincing AO2 analysis with well-chosen evidence. Engaging, well-structured writing with consistent accuracy.\n\nGrade 4-5: Clear AO2 analysis with relevant evidence. Coherent writing with generally accurate spelling and punctuation.\n\nGrade 1-3: Simple or tentative responses. Basic writing with frequent errors.\n\nWriting (AO5 + AO6) is 50% of each paper - a strong writer can compensate for weaker reading skills.`,
    },
    {
      id: 'eao2-10',
      front: 'The Difference Between AO2 and AO4',
      back: `AO2 = ANALYSE how the writer uses language and structure.\nAO4 = EVALUATE how effectively the writer achieves their purpose.\n\nAO2 asks: "What techniques does the writer use and what effects do they create?"\nAO4 asks: "How well does this work? Is it effective or not?"\n\nAO2 is tested on BOTH papers (Q3 and Q4 on Paper 1; Q3 on Paper 2).\nAO4 is ONLY tested on Paper 2 Q4.\n\nFor AO4, you must make value judgements: "This is effective because..." or "This is less convincing because..."`,
    },
  ],
}

export default deck
