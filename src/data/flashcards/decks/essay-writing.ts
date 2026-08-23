// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'essay-writing',
  title: 'Essay Structure & Academic Response Techniques',
  description: 'Essay structure and academic response techniques',
  category: 'Writing',
  board: 'All',
  cards: [
    {
      id: 'aw-1',
      front: 'The Five-Paragraph Essay Structure',
      back: `Basic Structure:\n1. Introduction (5-8 sentences)\n2. Body Paragraph 1 (8-10 sentences)\n3. Body Paragraph 2 (8-10 sentences)\n4. Body Paragraph 3 (8-10 sentences)\n5. Conclusion (5-8 sentences)\n\nWhen to Use: Simple topics, timed exams, introductory essays\n\nWhy It Works: Clear, logical, easy to follow\n\nLimitations: Can feel formulaic; may not suit complex arguments`,
    },
    {
      id: 'aw-2',
      front: 'The PEE Paragraph Model',
      back: `PEE = Point, Evidence, Explanation\n\nPoint: Topic sentence stating your argument (1 sentence)\nEvidence: Quote or textual reference (1-2 sentences)\nExplanation: How evidence supports your point (3-4 sentences)\n\nExample:\n"Scrooge\'s isolation is presented as a choice. The narrator states he is "solitary as an oyster," suggesting that emotional distance is his preference. This metaphor compares him to shellfish that retreat into protective shells, implying his withdrawn nature is self-imposed defense mechanism."\n\nKey: Explanation should discuss effect, technique, and relevance.`,
    },
    {
      id: 'aw-3',
      front: 'The PEEA Extended Model',
      back: `PEEA = Point, Evidence, Explanation, Analysis\n\nPoint: Your argument\nEvidence: Quote or reference\nExplanation: What the evidence shows\nAnalysis: Why this matters to your overall thesis\n\nExample: (continuing above)\n"...this self-imposed isolation ultimately leads to his moral corruption, as he loses empathy for others. The connection between emotional distance and ethical failure becomes central to Dickens\'s argument for social responsibility."\n\nWhen to Use: Extended essays, higher-level analysis\n\nWhy: Adds explicit link to thesis; shows sophisticated thinking`,
    },
    {
      id: 'aw-4',
      front: 'The PEEL Paragraph Structure',
      back: `PEEL = Point, Evidence, Explanation, Link\n\nPoint: Topic sentence\nEvidence: Quotation or reference\nExplanation: Analysis of the evidence\nLink: Connection back to essay thesis\n\nExample: (continuing)\n"...this self-imposed isolation ultimately connects to Dickens\'s central thesis that social indifference is morally corrupting, a critique of Victorian capitalism."\n\nKey: The "Link" explicitly shows how the paragraph supports your overall argument\n\nBenefit: Keeps reader focused on your thesis; shows clear argument structure`,
    },
    {
      id: 'aw-5',
      front: 'Topic Sentences',
      back: `Definition: The first sentence of a paragraph that states the paragraph\'s main idea or argument.\n\nCharacteristics of Strong Topic Sentences:\n• Directly supports the thesis\n• Makes a clear claim (not a question)\n• Specific enough to guide the paragraph\n• Arguable (not just a fact)\n\nWeak: "Scrooge is cold"\nStrong: "Dickens presents Scrooge\'s emotional isolation as a self-imposed defense against vulnerability, yet this defensive mechanism ultimately enables his moral corruption."\n\nWhy It Matters: Topic sentences guide the reader and keep you focused`,
    },
    {
      id: 'aw-6',
      front: 'Supporting Evidence in Essays',
      back: `Types of Evidence:\n• Direct quotations (word-for-word from text)\n• Paraphrasing (restating idea in your words)\n• Specific examples (references to scenes or events)\n• Statistical data (numbers, facts, research)\n• Expert opinions (critics, scholars)\n\nHow to Use Evidence:\n• Introduce it (say where it\'s from or who said it)\n• Quote/reference it (provide the exact words or detail)\n• Explain it (say how it supports your point)\n• Link it (connect back to your thesis)\n\nKey: Never let evidence speak for itself - you must interpret it`,
    },
    {
      id: 'aw-7',
      front: 'Integrating Quotations',
      back: `Methods of Integration:\n\n1. EMBEDDED: "The narrator describes Scrooge as \"solitary as an oyster,\" suggesting emotional distance."\n\n2. BLOCK (longer quotes): Set apart, indented.\n\n3. DIALOGUE INTEGRATED: "When the Spirit shows Scrooge his death, he \"implore[s]\" for a chance to change, revealing his desperation."\n\nRules:\n• Introduce quotations (don\'t drop them in unexplained)\n• Use only necessary portions (don\'t quote long passages)\n• Always explain quotations (say what they mean and why)\n• Use [brackets] for clarifications or alterations\n• Use ... for omitted words`,
    },
    {
      id: 'aw-8',
      front: 'Analysis vs. Summary',
      back: `Summary: What happens\nAnalysis: How it works and why it matters\n\nExamples:\nSummary: "Scrooge visits three ghosts and changes his mind about helping the poor."\nAnalysis: "Dickens uses the supernatural visitation as a mechanism to dismantle Scrooge\'s psychological defenses, forcing him to confront the consequences of his ideology. The progression from past to future creates escalating emotional stakes, culminating in Scrooge\'s terror at seeing his own death - a fear that paradoxically liberates him into moral transformation."\n\nIn Essays: Balance summary (for context) with analysis (for argument)\n\nRatio: Aim for 20% summary, 80% analysis in essays`,
    },
    {
      id: 'aw-9',
      front: 'Thesis Statements',
      back: `Definition: A single sentence stating the main argument of the entire essay.\n\nCharacteristics of Strong Thesis:\n• Clear and specific\n• Arguable (not a fact or opinion everyone holds)\n• Complex enough for multiple paragraphs of support\n• Written in active voice\n• Confident tone (not "I think" or "maybe")\n\nWeak: "A Christmas Carol is about redemption."\nStrong: "Through the supernatural visitation, Dickens argues that moral transformation requires both emotional awakening and social responsibility, and that individual redemption is inseparable from collective social obligation."\n\nWhere: Typically at the end of the introduction`,
    },
    {
      id: 'aw-10',
      front: 'Introduction Paragraphs',
      back: `Structure:\n1. Hook: Interesting opening sentence\n2. Context: Brief background/setting\n3. Problem/Question: What will you discuss?\n4. Thesis: Your main argument (last sentence)\n\nExample Hook Strategies:\n• Surprising fact\n• Rhetorical question\n• Relevant quotation\n• Bold statement\n• Personal anecdote\n\nKey: Introductions should draw readers in while foreshadowing your argument\n\nLength: 5-8 sentences typically\n\nCommon Mistake: Making introduction too long or too vague`,
    },
    {
      id: 'aw-11',
      front: 'Conclusion Paragraphs',
      back: `Structure:\n1. Restate thesis (in new words, not exact repetition)\n2. Summarise key evidence\n3. Broader implications: What does this mean?\n4. Final thought: Why does this matter?\n\nWhat NOT to Do:\n• Introduce new evidence\n• Apologise for weaknesses ("I couldn\'t find...")\n• Reword thesis word-for-word\n• End with a question (unless rhetorical)\n• Summarise every paragraph\n\nKey: Conclusions should feel complete without introducing new ideas\n\nLength: 5-8 sentences\n\nFinal Sentence: Make it memorable or thought-provoking`,
    },
    {
      id: 'aw-12',
      front: 'Transitional Words and Phrases',
      back: `Purpose: Link ideas, show relationships between sentences and paragraphs\n\nAddition: Furthermore, Moreover, Additionally, In addition\n\nContrast: However, Nevertheless, Conversely, On the other hand\n\nExample/Illustration: For instance, For example, Specifically, In particular\n\nCause/Effect: As a result, Consequently, Therefore, Because\n\nComparison: Similarly, Likewise, In the same way\n\nSequence: First, Second, Finally, Later, Then\n\nConclusion: In conclusion, To summarise, Ultimately, Clearly\n\nUsage: Place transitions at the start of sentences or after commas to guide reader through your argument`,
    },
    {
      id: 'aw-13',
      front: 'Paragraph Coherence',
      back: `Definition: Logical connection and flow within a paragraph so that sentences build on each other.\n\nStrategies:\n• Use topic sentence to guide the paragraph\n• Start each sentence with a clear subject\n• Use pronouns (he, she, it) to refer back to key ideas\n• Use transitional words\n• Arrange sentences logically (chronological, least to most important)\n• End with a closing statement that summarises or bridges to next paragraph\n\nExample:\n"Scrooge\'s isolation is self-imposed. He chooses coldness as protection. This choice, however, proves spiritually dangerous. The ghosts force him to see the human cost of his withdrawal. Only through confronting his vulnerability can he change."\n\nTest: Can reader follow the logic from sentence to sentence?`,
    },
    {
      id: 'aw-14',
      front: 'Active vs. Passive Voice',
      back: `Active: Subject performs the action → "Dickens critiques capitalism."\nPassive: Subject receives the action → "Capitalism is critiqued by Dickens."\n\nWhy Active is Better:\n• Clearer (who is doing what?)\n• More direct and engaging\n• Usually shorter\n• Shows agency and responsibility\n\nWhen to Use Passive:\n• Agent is unknown ("Mistakes were made")\n• Agent is less important than the action\n• Emphasis on the receiver of the action\n\nIn Essays: Use mostly active voice (80%+ of sentences)\n\nCommon Problem: Passive voice makes writing vague and weak`,
    },
    {
      id: 'aw-15',
      front: 'Sentence Variety',
      back: `Mix of Sentence Types Strengthens Essays:\n\n1. SIMPLE: One independent clause. "Scrooge is greedy."\n\n2. COMPOUND: Two independent clauses joined by conjunction. "Scrooge is greedy, yet he transforms by the end."\n\n3. COMPLEX: Independent clause + dependent clause. "Although Scrooge is greedy, he transforms through the spirits\' intervention."\n\n4. COMPOUND-COMPLEX: Multiple independent + dependent. "Although Scrooge is greedy, he transforms through the spirits\' intervention, and this change inspires readers to examine their own values."\n\nBenefit: Variety maintains reader interest and shows sophistication\n\nTip: Use short sentences for impact; long sentences for explanation`,
    },
    {
      id: 'aw-16',
      front: 'Establishing Academic Tone',
      back: `Academic Tone Requires:\n• Formal language (avoid slang: "ain\'t," "gonna," "cool")\n• Third person (avoid "I" or "you" except in specific contexts)\n• Specific vocabulary (avoid vague words like "thing," "good," "bad")\n• Complete sentences (avoid fragments or text-speak)\n• Objective stance (avoid personal opinions that aren\'t supported)\n• No contractions (write "do not" instead of "don\'t")\n\nInappropriate: "Scrooge is super mean at first, but then he\'s like totally nice."\nAppropriate: "Scrooge exhibits miserly coldness throughout the opening sections, yet undergoes radical moral transformation through the supernatural intervention."`,
    },
    {
      id: 'aw-17',
      front: 'Point of View in Academic Writing',
      back: `First Person ("I"):\nWhen Acceptable: Personal narratives, reflective essays, explicitly stated personal perspective\nWhen Not: Literary analysis, research essays (where objectivity is valued)\n\nSecond Person ("You"):\nWhen Acceptable: Instructions, direct address (rare in academic essays)\nWhen Not: Most academic contexts (can feel preachy)\n\nThird Person ("The text," "Dickens"):\nWhen Acceptable: Nearly all literary and academic analysis (preferred, objective tone)\n\nTip: Even in third person, you can make arguments clear: "Analysis reveals..." or "The evidence suggests..."`,
    },
    {
      id: 'aw-18',
      front: 'Avoiding Plagiarism',
      back: `Plagiarism = Using someone else\'s words or ideas without credit.\n\nHow to Avoid It:\n1. QUOTE directly and use quotation marks: "As the critic states, \"X\"..."\n2. PARAPHRASE and CITE: Put idea in your own words + cite source\n3. SUMMARISE and CITE: Shorten idea and credit source\n4. CITE PROPERLY: Use correct format (MLA, APA, Chicago, etc.)\n\nWhat Needs Citation:\n• Direct quotations\n• Paraphrased ideas\n• Specific facts from sources\n• Statistics or research\n• Images, charts, graphs\n\nWhat Doesn\'t (common knowledge):\n• General knowledge ("Shakespeare wrote plays")\n• Widely known facts ("The Earth orbits the sun")\n\nRule: When in doubt, cite`,
    },
    {
      id: 'aw-19',
      front: 'Developing Complex Arguments',
      back: `Strategies for Sophistication:\n\n1. ACKNOWLEDGE COUNTERARGUMENT: "One might argue X, yet..."\n2. USE QUALIFYING LANGUAGE: "suggests," "implies," "arguably," "can be read as"\n3. INTEGRATE MULTIPLE PERSPECTIVES: Show how different characters/critics view an issue\n4. BUILD COMPLEXITY: Start simple, add nuance and complications\n5. USE SUBORDINATE CLAUSES: "While X is true, Y suggests..."\n6. CONNECT TO LARGER ISSUES: "This scene reflects broader themes about..."\n\nExample Simple Argument: "Scrooge is greedy."\nExample Complex: "While Scrooge initially appears straightforwardly miserly, his psychological profile suggests deeper trauma - abandonment in childhood that manifests as material hoarding. His 'greed' functions as psychological defense, and redemption requires not moral judgment but emotional healing."`,
    },
    {
      id: 'aw-20',
      front: 'Proofreading and Revision Strategies',
      back: `First Draft: Get ideas down, don\'t worry about perfection\n\nRevision Stages:\n1. BIG PICTURE: Does thesis hold? Is argument clear? Reorganise if needed\n2. PARAGRAPH LEVEL: Does each paragraph support thesis? Are transitions smooth?\n3. SENTENCE LEVEL: Are sentences clear? Varied? Active?\n4. WORD LEVEL: Are words precise? Are there repetitions?\n5. MECHANICS: Check grammar, punctuation, spelling\n\nProofreading Tips:\n• Read aloud to catch awkward phrasing\n• Read backwards to catch spelling errors\n• Ask: Does a reader unfamiliar with the text understand this?\n• Use spell-check but don\'t rely on it (it misses context errors)\n• Wait 24 hours before proofreading (fresh eyes catch more)`,
    },
  ],
}

export default deck
