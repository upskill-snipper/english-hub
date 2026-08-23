// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-paper1-key-terms',
  title: 'Edexcel Paper 1: Core Terms & Forms',
  description:
    '20 essential terms for Edexcel English Language Paper 1 (Fiction and Imaginative Writing / Non-Fiction and Transactional Writing)',
  category: 'Exam Skills',
  board: 'Edexcel',
  cards: [
    {
      id: 'ep1-1',
      front: 'Evaluation (Edexcel Definition)',
      back: `Making a judgement about a text supported by evidence. In Edexcel Paper 1, you must evaluate how effectively a writer achieves their purpose.\n\nStructure: State your judgement, provide a quote as evidence, analyse technique and effect, link back to your evaluative point.\n\nKey phrase starters: "The writer effectively...", "This is convincing because...", "This is less successful because..."`,
    },
    {
      id: 'ep1-2',
      front: 'Article (Transactional Writing)',
      back: `A piece of writing for a newspaper or magazine.\n\nFeatures: Headline, optional subheading, opening hook, paragraphed body, formal or semi-formal register depending on audience.\n\nTips: Use rhetorical devices (tricolon, rhetorical questions, direct address). Include a strong conclusion that circles back to your opening.`,
    },
    {
      id: 'ep1-3',
      front: 'Blog Post (Transactional Writing)',
      back: `An informal, opinion-based piece of online writing.\n\nFeatures: Engaging title, personal voice (first person), conversational tone, short paragraphs, direct address to readers.\n\nTips: Can include humour, anecdotes, and rhetorical questions. More relaxed than an article but still needs a clear structure and persuasive techniques.`,
    },
    {
      id: 'ep1-4',
      front: 'Formal Letter (Transactional Writing)',
      back: `A letter to an official audience (e.g., headteacher, council, MP).\n\nFormat: Your address (top right), recipient\'s address (left), date, "Dear Sir/Madam" or "Dear Mr/Mrs X," formal sign-off ("Yours faithfully" if unknown, "Yours sincerely" if named).\n\nTips: Formal register, clear paragraphs with topic sentences, measured but persuasive tone.`,
    },
    {
      id: 'ep1-5',
      front: 'Report (Transactional Writing)',
      back: `A formal, factual document presenting findings or recommendations.\n\nFeatures: Title, optional subheadings, introduction stating purpose, paragraphed body with evidence, conclusion with recommendations.\n\nTips: Impersonal tone ("It was found that..."), factual language, logical structure. Avoid emotional language - let evidence speak.`,
    },
    {
      id: 'ep1-6',
      front: 'Review (Transactional Writing)',
      back: `A critical assessment of a product, event, book, or experience.\n\nFeatures: Introduction (what you are reviewing), balanced analysis (positives and negatives), personal opinion supported by detail, recommendation.\n\nTips: Use descriptive and evaluative language. Engage the reader with humour or vivid detail. Give a clear verdict.`,
    },
    {
      id: 'ep1-7',
      front: 'Speech (Transactional Writing)',
      back: `A written text designed to be spoken aloud to an audience.\n\nFeatures: Direct address ("Ladies and gentlemen"), rhetorical questions, tricolon, anecdotes, emotive language, repetition for emphasis.\n\nTips: Write for the ear, not the eye. Use short sentences for impact. Include a powerful opening and a memorable closing line.`,
    },
    {
      id: 'ep1-8',
      front: 'Email (Transactional Writing)',
      back: `A digital message, usually semi-formal or formal depending on audience.\n\nFormat: To/From/Subject line, greeting ("Dear..." or "Hi..."), paragraphed body, sign-off.\n\nTips: Match register to audience. Be concise and purposeful. Professional emails use formal register; emails to peers can be semi-formal.`,
    },
    {
      id: 'ep1-9',
      front: 'Guide (Transactional Writing)',
      back: `An informative text giving advice or instructions.\n\nFeatures: Title, subheadings, numbered or bulleted points, imperative verbs ("Visit...", "Make sure you..."), direct address.\n\nTips: Clear, logical structure. Informative but engaging. Can use a friendly, encouraging tone depending on audience.`,
    },
    {
      id: 'ep1-10',
      front: 'Archaic Vocabulary (19th-Century Feature)',
      back: `Old-fashioned words no longer in common use.\n\nExamples: "hitherto" (until now), "whence" (from where), "ere" (before), "betwixt" (between), "forsooth" (indeed).\n\nExam tip: When analysing 19th-century texts, note how archaic vocabulary creates a formal, distant, or elevated tone. Explain what the word means and its effect.`,
    },
    {
      id: 'ep1-11',
      front: 'Formal Register (19th-Century Feature)',
      back: `A level of language characterised by complex sentences, sophisticated vocabulary, and an impersonal or elevated tone.\n\n19th-century texts often use formal register even in fiction. Look for: long subordinate clauses, Latinate vocabulary, passive constructions.\n\nContrast with modern informal register to show your understanding of context.`,
    },
    {
      id: 'ep1-12',
      front: 'Periodic Sentence (19th-Century Feature)',
      back: `A long sentence where the main clause is delayed until the end, building suspense or emphasis.\n\nExample: "Despite the rain, the cold, the endless miles of mud through which they trudged, they arrived."\n\nEffect: Creates anticipation. Common in 19th-century prose. Contrasts with modern preference for short, direct sentences.`,
    },
    {
      id: 'ep1-13',
      front: 'AO1 - Edexcel English Language',
      back: `Read and understand a range of texts. Select and synthesise evidence from different texts.\n\nWhat this means: Identify relevant information, use short embedded quotations, show you understand explicit and implicit meanings.\n\nKey skill: PEE/PEA paragraphs with precise evidence selection.`,
    },
    {
      id: 'ep1-14',
      front: 'AO2 - Edexcel English Language',
      back: `Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.\n\nWhat this means: Identify techniques, analyse their effect on the reader, use correct terminology (but only when it adds to your analysis).\n\nKey skill: "The writer uses [technique] to [effect], which suggests [interpretation]."`,
    },
    {
      id: 'ep1-15',
      front: 'AO4 - Edexcel English Language',
      back: `Evaluate texts critically and support this with appropriate textual references.\n\nWhat this means: Make a judgement about how effectively a writer achieves their purpose. "How far do you agree?" questions require balanced evaluation.\n\nKey skill: Sustained evaluative commentary - not just analysis, but judgement of effectiveness.`,
    },
    {
      id: 'ep1-16',
      front: 'Command Word: "Evaluate"',
      back: `Make a judgement about effectiveness. Say HOW WELL the writer achieves something, not just what they do.\n\nApproach: "The writer effectively/convincingly/powerfully [does X] through [technique], which [effect on reader]. This is successful because..."\n\nAvoid: Simply identifying techniques without judging their impact.`,
    },
    {
      id: 'ep1-17',
      front: 'Command Word: "Analyse"',
      back: `Examine language and/or structure in detail, explaining effects on the reader.\n\nApproach: Quote > Identify technique > Explain effect > Explore deeper meaning. Go beyond surface-level observations.\n\nAvoid: Feature-spotting without explanation. Always answer: "So what? Why does this matter?"`,
    },
    {
      id: 'ep1-18',
      front: 'Command Word: "Explain"',
      back: `Make your understanding clear with supporting evidence.\n\nApproach: State your point clearly, support with a quotation, develop your explanation of what it shows or suggests.\n\nDifference from "analyse": Less focus on technique names, more focus on meaning and understanding.`,
    },
    {
      id: 'ep1-19',
      front: 'Command Word: "How does the writer..."',
      back: `Focus on the writer\'s methods and choices - language, structure, form.\n\nApproach: Always discuss the writer as a craftsperson making deliberate choices. Use phrases like "The writer chooses to...", "By using..., the writer creates..."\n\nAvoid: Retelling the story. Focus on HOW, not WHAT.`,
    },
    {
      id: 'ep1-20',
      front: 'Command Word: "To what extent do you agree?"',
      back: `Requires an evaluative, balanced response. You can mostly agree, mostly disagree, or partially agree.\n\nApproach: State your position, support with evidence, consider alternative interpretations. Sustain your argument throughout.\n\nTip: The strongest answers show nuance - "While the writer does X effectively, the use of Y is less convincing because..."`,
    },
  ],
}

export default deck
