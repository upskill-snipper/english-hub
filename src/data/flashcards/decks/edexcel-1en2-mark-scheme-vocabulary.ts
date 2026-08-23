// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-1en2-mark-scheme-vocabulary',
  title: 'Edexcel Marking Guide Vocabulary',
  description:
    'Key descriptors from Edexcel 1EN2 marking guides and the grade boundaries they correspond to',
  category: 'gcse',
  board: 'Edexcel',
  cards: [
    {
      id: 'emsv2-1',
      front: 'Perceptive',
      back: `Grade 8-9 (Band 5) reading descriptor.\n\nMeaning: Showing deep, insightful understanding that goes beyond the obvious. The student notices what other readers miss.\n\nHow to achieve it:\n• Make original interpretations - do not repeat obvious points.\n• Explore multiple layers of meaning in a single quote.\n• Consider what the writer implies or leaves unsaid.\n• Connect techniques to the writer\'s broader purpose.\n\nA "perceptive" response makes the marker think: "I hadn\'t considered that."`,
    },
    {
      id: 'emsv2-2',
      front: 'Judicious',
      back: `Grade 8-9 (Band 5) descriptor for evidence use.\n\nMeaning: Showing excellent judgement in selecting quotations. Every piece of evidence is precisely chosen and perfectly supports the point.\n\nHow to achieve it:\n• Use SHORT embedded quotations (2-5 words).\n• Zoom into individual words within the quote.\n• Never quote an entire sentence when a phrase will do.\n• Every quote must earn its place - if it does not directly support your point, cut it.\n\n"Judicious" = surgical precision, not volume.`,
    },
    {
      id: 'emsv2-3',
      front: 'Compelling',
      back: `Grade 8-9 (Band 5) writing descriptor (AO5).\n\nMeaning: Writing so convincing, powerful, and engaging that the reader cannot stop reading.\n\nHow to achieve it:\n• Hook the reader from the first sentence.\n• Maintain a confident, controlled tone throughout.\n• Structure deliberately - every paragraph has purpose.\n• End memorably - the conclusion should resonate.\n\n"Compelling" writing makes the marker forget they are marking.`,
    },
    {
      id: 'emsv2-4',
      front: 'Assured',
      back: `Grade 7-9 (Band 4-5) writing descriptor.\n\nMeaning: Confident and controlled. The writer knows exactly what they are doing and never loses grip.\n\nHow to achieve it:\n• Consistent register - do not accidentally slip between formal and informal.\n• Deliberate technique choices - every device serves a purpose.\n• No awkward phrasing or clumsy sentences.\n• Smooth transitions between paragraphs.\n\n"Assured" = the opposite of hesitant. Write with authority.`,
    },
    {
      id: 'emsv2-5',
      front: 'Convincing',
      back: `Grade 7 (Band 4) descriptor for both reading and writing.\n\nMeaning: The response is believable, well-supported, and holds together logically.\n\nFor reading: Your analysis is well-evidenced and your interpretations are plausible.\nFor writing: Your argument is logical (transactional) or your narrative feels authentic (imaginative).\n\nThe gap between "convincing" and "compelling": Convincing = you believe it. Compelling = you cannot look away.`,
    },
    {
      id: 'emsv2-6',
      front: 'Credible',
      back: `Grade 5-6 (Band 3) descriptor.\n\nMeaning: The response is reasonable, makes sense, and shows understanding, but lacks the depth or flair of higher bands.\n\nFor reading: Points are valid but not deeply developed.\nFor writing: The piece communicates clearly but does not excite.\n\nTo move beyond "credible": Add a second layer of analysis. Do not just explain what a technique does - explore WHY the writer chose it and what alternatives they rejected.`,
    },
    {
      id: 'emsv2-7',
      front: 'Clear',
      back: `Grade 4-5 (Band 3) descriptor.\n\nMeaning: The response communicates ideas that can be understood and followed.\n\nThis is the baseline for a secure pass. "Clear" = the marker can follow your argument without confusion.\n\nLimitations of "clear": It implies competence but not sophistication. There is no deeper insight, no originality, no flair.\n\nTo upgrade: Add analysis of individual words, explore alternative interpretations, use precise vocabulary.`,
    },
    {
      id: 'emsv2-8',
      front: 'Sustained',
      back: `Appears across multiple bands. Means the quality is maintained consistently from beginning to end.\n\nA "sustained" argument does not lose focus after two paragraphs.\nA "sustained" narrative does not lose control of tone halfway through.\n"Sustained" accuracy means few errors throughout, not just at the start.\n\nCommon mistake: Students write a strong opening then lose quality as they rush. Plan your time so the final paragraphs are as strong as the first.`,
    },
    {
      id: 'emsv2-9',
      front: 'Apt',
      back: `Grade 7-9 (Band 4-5) descriptor for subject terminology and evidence.\n\nMeaning: Appropriate, fitting, precisely right for the context.\n\n"Apt terminology" = using exactly the right technical term at the right moment (not forcing in terms that do not fit).\n"Apt references" = choosing evidence that precisely supports your specific point.\n\nThe opposite of "apt" is "forced" - do not name a technique just to show you know it. Only use terminology that genuinely aids your analysis.`,
    },
    {
      id: 'emsv2-10',
      front: 'Discerning',
      back: `Grade 8-9 (Band 5) descriptor.\n\nMeaning: Showing the ability to judge quality and distinguish subtle differences.\n\nA "discerning" reader notices that a writer\'s tone shifts from resigned to defiant - not just that "the writer is emotional."\n\nA "discerning" writer makes subtle choices: the difference between "said" and "murmured," between a full stop and a dash.\n\nDiscernment = noticing and articulating what is fine-grained and nuanced.`,
    },
    {
      id: 'emsv2-11',
      front: 'Coherent',
      back: `Grade 4-6 (Band 3) writing descriptor for organisation.\n\nMeaning: Ideas are logically connected and the text makes sense as a whole.\n\nHow to achieve it:\n• Use discourse markers (however, furthermore, consequently).\n• One clear topic per paragraph.\n• Link conclusion back to introduction.\n\nCoherent is necessary but not sufficient for top marks. A text can be coherent and dull. Aim for coherent AND compelling.`,
    },
    {
      id: 'emsv2-12',
      front: 'Tentative',
      back: `Grade 1-3 (Band 1-2) descriptor.\n\nMeaning: Uncertain, vague, undeveloped. The student gestures at an idea but does not commit to it or develop it.\n\nExample of tentative analysis: "The writer uses a metaphor which is effective."\n\nTo avoid being tentative:\n• Develop every point fully.\n• Use evidence to support every claim.\n• Explain effects specifically - "effective" is not analysis.\n• Commit to your interpretation - do not hedge with "maybe" or "might."`,
    },
    {
      id: 'emsv2-13',
      front: 'Crafted',
      back: `Grade 8-9 (Band 5) writing descriptor.\n\nMeaning: Writing that shows deliberate, skilled construction at every level - word choice, sentence structure, paragraphing, overall shape.\n\n"Crafted" writing reads as literary, not merely competent. The marker senses that every choice was intentional.\n\nHow to achieve it: After writing, re-read and refine. Change a word for a better one. Split a long sentence for impact. Move a paragraph for better flow. This revision process IS craft.`,
    },
    {
      id: 'emsv2-14',
      front: 'Integrated',
      back: `Grade 7-9 (Band 4-5) descriptor, especially for comparison responses.\n\nMeaning: Ideas from different texts are woven together, not treated in separate blocks.\n\nFor Paper 1 Q4: Do NOT write all about Source A, then all about Source B. Each paragraph should discuss BOTH texts around a shared point.\n\nStructure: "Both writers [shared technique/idea]. Source A achieves this through [method], whereas Source B [contrasting method]."`,
    },
    {
      id: 'emsv2-15',
      front: 'Band Progression Summary',
      back: `Band 1 (Grade 1-2): Simple, tentative, limited.\nBand 2 (Grade 3): Attempts, some relevant comment.\nBand 3 (Grade 4-5): Clear, credible, coherent, relevant.\nBand 4 (Grade 6-7): Convincing, assured, well-chosen evidence.\nBand 5 (Grade 8-9): Perceptive, discerning, judicious, compelling, crafted.\n\nThe jump from Band 3 to Band 4 requires DEPTH of analysis.\nThe jump from Band 4 to Band 5 requires ORIGINALITY and PRECISION.`,
    },
  ],
}

export default deck
