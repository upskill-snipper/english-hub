// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-1en2-paper-1-key-terms',
  title: 'Edexcel Paper 1: Advanced Terminology',
  description:
    'Terminology specific to 19th-century non-fiction reading and transactional writing for Edexcel 1EN2 Paper 1',
  category: 'gcse',
  board: 'Edexcel',
  cards: [
    {
      id: 'e1kt-1',
      front: 'Rhetoric',
      back: `The art of effective or persuasive speaking and writing. In Edexcel Paper 1, 19th-century non-fiction sources are rich in rhetorical strategies.\n\nKey rhetorical devices: tricolon, anaphora, antithesis, rhetorical questions, direct address.\n\nWhen analysing the source in Section A, identify the writer\'s rhetorical purpose - are they arguing, persuading, informing, or entertaining? This shapes every language choice they make.`,
    },
    {
      id: 'e1kt-2',
      front: 'Polemic',
      back: `A strong, one-sided verbal attack against an opposing position or belief.\n\n19th-century writers frequently used polemic to campaign for social reform. Examples: Dickens on workhouses, Wollstonecraft on women\'s education.\n\nFeatures: passionate tone, emotive language, exaggeration, direct appeals to morality.\n\nUse in Q3/Q4 analysis: "The text functions as a polemic against [X], as evidenced by..."`,
    },
    {
      id: 'e1kt-3',
      front: 'Epistolary',
      back: `Relating to or in the form of letters. An epistolary text is written as correspondence.\n\nEdexcel Paper 1 may use a 19th-century published letter as the source text.\n\nConventions: salutation ("Dear Sir"), personal address, intimate or public tone, sign-off.\n\nAnalysis tip: Consider who the letter is addressed to and how the audience shapes the writer\'s tone, register, and rhetorical choices.`,
    },
    {
      id: 'e1kt-4',
      front: 'Didactic',
      back: `Writing intended to teach, instruct, or moralise.\n\nMuch 19th-century non-fiction is didactic - aimed at educating the public about social issues, moral conduct, or civic duty.\n\nExamples: pamphlets on temperance, essays on child labour, sermons on charity.\n\nIn your analysis, consider: What lesson does the writer want the reader to learn? How do their methods serve this didactic purpose?`,
    },
    {
      id: 'e1kt-5',
      front: 'Invective',
      back: `Vehement, abusive, or highly critical language directed against a person, group, or idea.\n\n19th-century journalists and commentators used invective to discredit opponents and provoke outrage.\n\nEffect: vilifies the target, stirs anger in the reader, positions the writer as morally superior.\n\nIn Q3: "The writer employs invective through [specific language choices], creating a tone of righteous condemnation."`,
    },
    {
      id: 'e1kt-6',
      front: 'Tract / Pamphlet',
      back: `Short printed publications on a single issue, widely distributed in the 19th century for political or social campaigning.\n\nTracts were often religious or moral; pamphlets were broader (political, social, satirical).\n\nFeatures: urgent tone, clear thesis, persuasive techniques, call to action.\n\nMay appear as a Paper 1 source. Analyse the writer\'s methods of persuasion and their intended effect on the original audience.`,
    },
    {
      id: 'e1kt-7',
      front: 'Oratory / Oration',
      back: `The art of public speaking, or a formal speech. Many 19th-century non-fiction texts were originally delivered as speeches.\n\nOratorical features: direct address, repetition, anaphora, rhetorical questions, tricolon, pauses for effect.\n\nWhen analysing a speech extract in Paper 1, consider how it would SOUND - rhythm, emphasis, and pacing matter as much as word choice.`,
    },
    {
      id: 'e1kt-8',
      front: 'Philanthropic Discourse',
      back: `Language relating to charitable concern for human welfare. Common in 19th-century reform writing.\n\nKey vocabulary: benevolence, compassion, duty, moral obligation, the deserving poor.\n\nWriters used philanthropic discourse to appeal to wealthy readers\' sense of duty.\n\nContrast with: Malthusian discourse (the poor as "surplus population") - identifying which discourse a writer uses shows sophisticated contextual understanding.`,
    },
    {
      id: 'e1kt-9',
      front: 'Satirical Tone',
      back: `The use of irony, exaggeration, or ridicule to criticise and mock individuals, institutions, or society.\n\n19th-century writers like Dickens, Wilde, and Swift (earlier) used satire to expose hypocrisy.\n\nKey signals: verbal irony, understatement, mock-serious tone, absurd comparisons.\n\nIn Q3: Explain HOW the satirical tone works - what is being mocked, and how does irony achieve this more effectively than direct criticism?`,
    },
    {
      id: 'e1kt-10',
      front: 'Encomium',
      back: `A formal expression of praise, often in speech or essay form.\n\nThe opposite of invective. Some 19th-century texts praise individuals, institutions, or ideals to inspire admiration and emulation.\n\nFeatures: superlative adjectives, elevated diction, tricolon, idealised imagery.\n\nUseful for Q4 comparison: "While Source A uses invective to condemn [X], Source B employs encomium to celebrate [Y]."`,
    },
    {
      id: 'e1kt-11',
      front: 'Apostrophe (Rhetorical)',
      back: `NOT the punctuation mark. A rhetorical device where the speaker directly addresses an absent person, abstract concept, or object.\n\nExample: "O Liberty! How many crimes are committed in thy name!"\n\nCommon in 19th-century speeches and essays. Effect: creates emotional intensity and dramatic flair.\n\nDo not confuse with the punctuation term - context makes the meaning clear.`,
    },
    {
      id: 'e1kt-12',
      front: 'Synthesis (Paper 1 Q2)',
      back: `The skill of drawing together information from TWO sources to identify similarities or differences.\n\nEdexcel Paper 1 Q2 (8 marks) requires synthesis, not just summary.\n\nTechnique: Make a comparative point → support with evidence from Source A → link to Source B with a connective.\n\nKey connectives: "Similarly," "Both sources suggest," "In contrast," "Whereas Source A..., Source B..."`,
    },
    {
      id: 'e1kt-13',
      front: 'Concession and Rebuttal',
      back: `Concession: Acknowledging an opposing argument has some validity.\nRebuttal: Then countering it with a stronger point.\n\nStructure: "While it may be true that [concession], it is nevertheless the case that [rebuttal]."\n\nCommon in 19th-century argument and essential for your own Section B transactional writing. Shows sophistication and earns top-band marks.`,
    },
    {
      id: 'e1kt-14',
      front: 'Peroration',
      back: `The concluding section of a speech or argument, designed to be powerful and memorable.\n\nFeatures: emotional climax, call to action, tricolon, repetition, heightened language.\n\nIn 19th-century speeches, the peroration was often the most passionate section.\n\nFor Q4: Comparing how two writers END their texts (their perorations) is a sophisticated structural point.`,
    },
    {
      id: 'e1kt-15',
      front: 'Register and Audience',
      back: `Register = the level of formality determined by audience and purpose.\n\nFormal: complex sentences, Latinate vocabulary, impersonal constructions.\nInformal: contractions, colloquialisms, first person, shorter sentences.\n\n19th-century texts typically use formal register. For Section B, you MUST match register to your specified audience - a letter to an MP requires different register than a blog post.`,
    },
    {
      id: 'e1kt-16',
      front: 'Diatribe',
      back: `A forceful, bitter, sustained verbal attack or denunciation.\n\nStronger than criticism, more sustained than invective. A diatribe is an extended rant against a target.\n\nCommon in 19th-century political journalism and reform writing.\n\nEffect: overwhelms the reader with the force of the writer\'s anger; leaves no room for counterargument.\n\nUseful analytical term for Q3 when the source text is particularly aggressive.`,
    },
    {
      id: 'e1kt-17',
      front: 'Exordium',
      back: `The opening section of a speech or argument, designed to capture attention and establish credibility.\n\nFeatures: hook, establishment of the writer\'s authority, statement of purpose.\n\nFor Q3/Q4 structural analysis: "The writer\'s exordium immediately establishes [authority/urgency/sympathy] through [specific technique]."\n\nCompare how two writers open their texts for a strong Q4 structural comparison.`,
    },
  ],
}

export default deck
