// =============================================================================
// SPAG Progression Framework: KS3 Years 7-9
// Spelling, Punctuation and Grammar skills and activities aligned to the
// National Curriculum KS3 English programme of study.
// =============================================================================

export interface SpagSkill {
  id: string;
  category: 'spelling' | 'punctuation' | 'grammar' | 'vocabulary';
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9';
  skill: string;
  description: string;
  examples: string[];
  commonErrors: string[];
  teachingStrategies: string[];
  linkedObjectives: string[];
}

export interface SpagActivity {
  id: string;
  title: string;
  category: 'spelling' | 'punctuation' | 'grammar' | 'vocabulary';
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9' | 'All KS3';
  duration: string;
  instructions: string[];
  differentiation: { support: string; core: string; stretch: string };
  resources: string[];
}

// =============================================================================
// SPAG SKILLS (36 total: 12 per year group, 3 per category per year)
// =============================================================================

export const spagSkills: SpagSkill[] = [

  // ---------------------------------------------------------------------------
  // YEAR 7 - SPELLING (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y7-spl-01',
    category: 'spelling',
    yearGroup: 'Year 7',
    skill: 'Common spelling patterns: -tion, -sion, -cion suffixes',
    description: 'Recognising and applying the most frequent noun-forming suffixes, distinguishing -tion (action, nation) from -sion (tension, extension) and the rare -cion (suspicion).',
    examples: [
      'action, fraction, nation, station',
      'extension, tension, mansion, pension',
      'suspicion (only common -cion word)',
    ],
    commonErrors: [
      'Writing "extention" instead of "extension"',
      'Writing "tenstion" by blending patterns',
      'Using -tion after verbs ending in -d or -ss (e.g., "discusstion")',
    ],
    teachingStrategies: [
      'Sort word cards into -tion / -sion columns by sound and root',
      'Display a rules poster: -sion usually follows d/s/l/n endings',
      'Dictation warm-ups using five target words per lesson',
      'Word-family webs linking base verb to noun (extend - extension)',
    ],
    linkedObjectives: [
      'KS3 NC: apply knowledge of morphology to spelling',
      'Tier 2 academic vocabulary acquisition',
    ],
  },
  {
    id: 'sp-y7-spl-02',
    category: 'spelling',
    yearGroup: 'Year 7',
    skill: 'Prefixes and their effect on meaning',
    description: 'Understanding how prefixes (un-, dis-, mis-, re-, pre-) change the meaning of base words without altering the spelling of the root.',
    examples: [
      'unhappy, unknown, uncertain',
      'disappear, disagree, disorder',
      'misunderstand, misbehave, misspell',
    ],
    commonErrors: [
      'Dropping a letter at the join (misell instead of misspell)',
      'Adding a hyphen unnecessarily (un-happy)',
      'Confusing dis- and mis- (disunderstand)',
    ],
    teachingStrategies: [
      'Morpheme colour-coding: prefix in red, root in blue',
      'Build-a-word activities with prefix tiles',
      'Look-Cover-Write-Check with tricky prefix words',
      'Etymology discussions about Latin/Greek prefix origins',
    ],
    linkedObjectives: [
      'KS3 NC: knowledge of morphology and etymology',
      'Vocabulary growth for reading comprehension',
    ],
  },
  {
    id: 'sp-y7-spl-03',
    category: 'spelling',
    yearGroup: 'Year 7',
    skill: "Homophones and commonly confused words (there/their/they're, your/you're)",
    description: "Distinguishing pairs of words that sound identical but differ in spelling and meaning, with focus on the most common confusions encountered in Year 7 writing.",
    examples: [
      "there (place), their (belonging to them), they're (they are)",
      "your (belonging to you), you're (you are)",
      'to (preposition/infinitive), too (also/excess), two (number)',
    ],
    commonErrors: [
      "Using \"there\" for all three there/their/they're forms",
      'Writing "your" when "you\'re" is needed',
      'Omitting the apostrophe in contractions',
    ],
    teachingStrategies: [
      'Mnemonic cards: "their has heir inside - belonging to heirs"',
      'Substitution test: can you replace the word with "they are"?',
      'Peer-editing checklists specifically targeting these pairs',
      'Sentence sorting: match sentence halves to the correct homophone',
    ],
    linkedObjectives: [
      'KS3 NC: use of Standard English',
      'Accurate written communication across subjects',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 7 - PUNCTUATION (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y7-pun-01',
    category: 'punctuation',
    yearGroup: 'Year 7',
    skill: 'Sentence demarcation: capital letters and full stops',
    description: 'Consistently marking the boundary of every sentence with a capital letter at the start and a full stop (or equivalent terminal mark) at the end across all writing contexts.',
    examples: [
      'The dog barked loudly. Its owner looked embarrassed.',
      'She opened the door. Light flooded in.',
      'We arrived late. The hall was already packed.',
    ],
    commonErrors: [
      'Running two sentences together without any punctuation (run-on sentences)',
      'Using a comma instead of a full stop (comma splice)',
      'Forgetting capital letters after mid-text full stops',
    ],
    teachingStrategies: [
      'Read aloud and clap at every sentence boundary',
      'Fix-it exercises: correct deliberately unpunctuated paragraphs',
      'Traffic-light self-editing: highlight every capital and full stop green',
      'Paired proofreading as a regular writing routine',
    ],
    linkedObjectives: [
      'KS3 NC: demarcation of sentences',
      'Foundation for all subsequent punctuation skills',
    ],
  },
  {
    id: 'sp-y7-pun-02',
    category: 'punctuation',
    yearGroup: 'Year 7',
    skill: 'Commas in lists and after fronted adverbials',
    description: 'Using commas to separate items in a list of three or more, and placing a comma after an introductory adverbial phrase or clause that precedes the main clause.',
    examples: [
      'She packed her book, pencil case, water bottle and lunchbox.',
      'After the match, the team celebrated loudly.',
      'On a cold winter morning, the frost lay thick on the grass.',
    ],
    commonErrors: [
      'Omitting the comma after a fronted adverbial entirely',
      'Placing a comma before "and" in every list item (Oxford comma inconsistency)',
      'Using commas between only two items (e.g., "I like cats, and dogs")',
    ],
    teachingStrategies: [
      'Sentence construction starters: give pupils fronted adverbials to complete',
      'List-building games: oral sentences with four items, written punctuation',
      'Annotated model texts highlighting comma use with marginal labels',
      'Imitation exercises modelled on high-quality mentor texts',
    ],
    linkedObjectives: [
      'KS3 NC: use of commas to clarify meaning',
      'Building blocks for complex sentence punctuation',
    ],
  },
  {
    id: 'sp-y7-pun-03',
    category: 'punctuation',
    yearGroup: 'Year 7',
    skill: 'Question marks and exclamation marks',
    description: 'Using question marks accurately to close direct questions and exclamation marks for genuine exclamatory sentences, avoiding overuse of exclamation marks in formal writing.',
    examples: [
      'Where did the soldiers march? (direct question)',
      'What a terrifying sight it was! (exclamatory sentence)',
      'She asked whether they were ready. (indirect question - no question mark)',
    ],
    commonErrors: [
      'Adding a question mark to an indirect question',
      'Using multiple exclamation marks (!!!) to show emphasis',
      'Treating every sentence ending in "isn\'t it" as automatically needing ?',
    ],
    teachingStrategies: [
      'Direct vs indirect question sorting activity',
      'Register lessons: formal writing rarely uses exclamation marks',
      'Editing tasks: remove unnecessary ! from over-punctuated student samples',
      'Display rules chart: 1 ! = powerful; 3 !!! = loses impact',
    ],
    linkedObjectives: [
      'KS3 NC: accurate use of terminal punctuation marks',
      'Awareness of audience and register in writing',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 7 - GRAMMAR (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y7-grm-01',
    category: 'grammar',
    yearGroup: 'Year 7',
    skill: 'Word class identification: nouns, verbs, adjectives and adverbs',
    description: 'Identifying and labelling the four key word classes by function within a sentence, understanding that the same word can belong to different classes depending on context.',
    examples: [
      'The old man walked slowly. (noun, verb, adjective, adverb)',
      '"Run" as noun: "She went for a run" vs verb: "I will run"',
      '"Fast" as adjective: "a fast car" vs adverb: "he ran fast"',
    ],
    commonErrors: [
      'Labelling all -ly words as adverbs (e.g., "friendly" is adjective)',
      'Confusing abstract nouns with adjectives (e.g., "beauty" vs "beautiful")',
      'Assuming nouns are always concrete and visible objects',
    ],
    teachingStrategies: [
      'Word-class detective: underline and label a paragraph with colour codes',
      'Context test cards: does this word describe, do, or name?',
      'Sentence manipulation: swap word classes and discuss meaning change',
      'Grammar journals: pupils collect and categorise interesting words',
    ],
    linkedObjectives: [
      'KS3 NC: grammatical terminology for discussing language',
      'Foundation for analysing language in literature and media',
    ],
  },
  {
    id: 'sp-y7-grm-02',
    category: 'grammar',
    yearGroup: 'Year 7',
    skill: 'Simple and compound sentences using coordinating conjunctions',
    description: 'Constructing and identifying simple sentences (one main clause) and compound sentences (two main clauses joined by FANBOYS: for, and, nor, but, or, yet, so).',
    examples: [
      'Simple: The wind howled through the trees.',
      'Compound: The wind howled and the rain lashed the windows.',
      'Compound: She wanted to sleep, but the noise kept her awake.',
    ],
    commonErrors: [
      'Using "and" to join every clause, creating run-on compound sentences',
      'Treating a coordinating conjunction at the start of a sentence as always wrong (stylistic choice in creative writing)',
      'Confusing compound sentences with complex sentences',
    ],
    teachingStrategies: [
      'FANBOYS mnemonic poster and matching games',
      'Sentence combining: merge two simple sentences using the best conjunction',
      'Exemplar analysis: how do authors vary simple and compound sentences?',
      'Writing sprints: two minutes using only simple sentences, two minutes compounding',
    ],
    linkedObjectives: [
      'KS3 NC: vary sentence forms for effect',
      'Building blocks for complex and multi-clause sentences',
    ],
  },
  {
    id: 'sp-y7-grm-03',
    category: 'grammar',
    yearGroup: 'Year 7',
    skill: 'Paragraphing: grouping ideas and using topic sentences',
    description: 'Organising writing into paragraphs, each with a clear focus, and crafting topic sentences that signal the main idea of each paragraph to the reader.',
    examples: [
      'Topic sentence: "The setting immediately creates a sense of unease."',
      'New paragraph for new time, place, topic, or speaker',
      'PEEL structure: Point, Evidence, Explain, Link',
    ],
    commonErrors: [
      'Writing in one continuous paragraph with no breaks',
      'Starting a new paragraph for every sentence',
      'Topic sentences that merely describe content without making an analytical point',
    ],
    teachingStrategies: [
      'Colour-cut-and-sort: paragraph jumbles to reassemble',
      'Topic sentence starters bank displayed in classroom',
      'Model paragraph construction with live annotation on the board',
      'Peer assessment using paragraph checklist',
    ],
    linkedObjectives: [
      'KS3 NC: organise writing for purpose and audience',
      'Extended writing organisation across all subjects',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 7 - VOCABULARY (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y7-voc-01',
    category: 'vocabulary',
    yearGroup: 'Year 7',
    skill: 'Tier 2 academic vocabulary for literary analysis',
    description: 'Building and using general academic vocabulary (Tier 2 words) that appear across subjects and are essential for discussing texts: convey, suggest, portray, emphasise, reveal.',
    examples: [
      '"The writer conveys a sense of dread through the imagery."',
      '"This suggests that the character is struggling internally."',
      '"Shakespeare portrays Macbeth as a tragic figure."',
    ],
    commonErrors: [
      'Overusing basic verbs: "shows", "says", "tells" repeatedly',
      'Using Tier 2 words incorrectly through guesswork',
      'Avoiding precise vocabulary and writing in vague generalities',
    ],
    teachingStrategies: [
      'Word walls: 10 analytical verbs displayed and updated termly',
      'Synonym ladders: basic word at the bottom, precise vocabulary at the top',
      'Sentence frames with target vocabulary for lower-confidence writers',
      'Regular retrieval practice: match Tier 2 word to its meaning',
    ],
    linkedObjectives: [
      'KS3 NC: increase vocabulary for analysis and explanation',
      'Cross-curricular academic language development',
    ],
  },
  {
    id: 'sp-y7-voc-02',
    category: 'vocabulary',
    yearGroup: 'Year 7',
    skill: 'Descriptive vocabulary for creative writing: precise nouns and strong verbs',
    description: 'Selecting specific, precise nouns and powerful verbs rather than general ones, to create vivid and engaging creative writing without over-relying on adjectives.',
    examples: [
      '"She sprinted" rather than "she ran quickly"',
      '"A terrace of Victorian townhouses" rather than "some buildings"',
      '"The engine growled" rather than "the engine made a loud noise"',
    ],
    commonErrors: [
      'Piling on adjectives to compensate for weak nouns and verbs',
      'Defaulting to said, went, got, nice, big in creative writing',
      'Overusing adverbs when a stronger verb would suffice',
    ],
    teachingStrategies: [
      'Verb upgrade challenge: replace every "said" in a passage with a better verb',
      'Noun precision gallery: compare "a flower" to "a wilting snowdrop"',
      'Thesaurus literacy: how to use it effectively and critically',
      'Photograph descriptions: use only precise nouns and strong verbs, no adjectives',
    ],
    linkedObjectives: [
      'KS3 NC: write imaginatively, selecting and adapting tone and style',
      'Craft and effect in creative and descriptive writing',
    ],
  },
  {
    id: 'sp-y7-voc-03',
    category: 'vocabulary',
    yearGroup: 'Year 7',
    skill: 'Understanding connotation and denotation',
    description: 'Distinguishing between the literal dictionary meaning (denotation) of a word and the associations and emotions it carries (connotation), and using this distinction in reading and writing.',
    examples: [
      '"Slim" and "skinny" both denote thin, but carry different connotations',
      '"Home" connotes warmth and safety; "house" is more neutral',
      '"Cunning" (negative) vs "clever" (positive) for the same attribute',
    ],
    commonErrors: [
      'Treating all synonyms as fully interchangeable',
      'Ignoring connotation when analysing writer\'s word choices',
      'Using words with unintended negative connotations in their own writing',
    ],
    teachingStrategies: [
      'Connotation spectrum: arrange words from negative to positive on a line',
      'Hot-seat: "Why did the author choose this word and not that one?"',
      'Rewriting tasks: change connotations to alter reader response',
      'Newspaper headline analysis: how word choice shapes attitude',
    ],
    linkedObjectives: [
      'KS3 NC: understand how writers use language for effect',
      'Critical reading and language analysis skills',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 8 - SPELLING (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y8-spl-01',
    category: 'spelling',
    yearGroup: 'Year 8',
    skill: 'Homophones and near-homophones at word level: affect/effect, practise/practice',
    description: 'Distinguishing between commonly confused word pairs where spelling indicates grammatical function, essential for academic writing across all subjects.',
    examples: [
      '"affect" (verb): "The weather affected her mood."',
      '"effect" (noun): "The effect was immediate."',
      '"practise" (verb): "I will practise daily." / "practice" (noun): "I went to practice."',
    ],
    commonErrors: [
      'Using "effect" as a verb ("the plan will effect change" is actually correct but rare - confusing for pupils)',
      'Using "practice" as a verb in British English',
      'Applying American spelling rules (where practice/practise are not distinguished)',
    ],
    teachingStrategies: [
      'RAVEN mnemonic: Remember Affect Verb Effect Noun',
      'Part-of-speech test: can you replace it with "impact" (noun) or "influence" (verb)?',
      'Contextual sentence pairs for each set displayed on word wall',
      'Grammar detective: classify every affect/effect in a model essay',
    ],
    linkedObjectives: [
      'KS3 NC: distinguish between words that are often confused',
      'Accurate academic writing in English and other subjects',
    ],
  },
  {
    id: 'sp-y8-spl-02',
    category: 'spelling',
    yearGroup: 'Year 8',
    skill: "Apostrophes for contraction and possession (including plural possessives)",
    description: "Applying apostrophes accurately in contractions and for both singular and plural possession, including the tricky placement after plural nouns ending in -s.",
    examples: [
      "Contraction: can't, wouldn't, it's (it is)",
      'Singular possession: the girl\'s bag, the hero\'s journey',
      "Plural possession: the students' work, the teachers' meeting",
    ],
    commonErrors: [
      "Adding apostrophes to plural nouns (greengrocer's apostrophe: apple's)",
      "Confusing it's (it is) with its (belonging to it)",
      "Placing apostrophe before -s for plural possessives (the students's)",
    ],
    teachingStrategies: [
      "Apostrophe sorting: contraction / singular possession / plural possession / no apostrophe needed",
      "Its/it's substitution test: does 'it is' make sense here?",
      "Rewrite tasks: turn 'the bag belonging to the girls' into possessive form",
      "Real-world apostrophe hunt: photograph errors in signage",
    ],
    linkedObjectives: [
      "KS3 NC: use apostrophes for contraction and possession",
      "Accurate written Standard English",
    ],
  },
  {
    id: 'sp-y8-spl-03',
    category: 'spelling',
    yearGroup: 'Year 8',
    skill: 'Spelling words with silent letters and unusual letter strings',
    description: 'Learning to spell words with silent consonants (knight, wrist, gnaw, psychology) and unusual letter patterns that cannot be decoded phonetically.',
    examples: [
      'Silent k: knight, kneel, knowledge, knack',
      'Silent w: wrist, wrestle, wreck, write',
      'Silent p: psychology, pneumonia, pterodactyl',
    ],
    commonErrors: [
      'Spelling "nowledge" without the k',
      'Writing "rist" or "rist" for wrist',
      'Confusing "silhouette" spelling (silent h, French origin)',
    ],
    teachingStrategies: [
      'Etymological exploration: why is the k silent? (historical pronunciation)',
      'Visualisation: picture the silent letter as hiding behind the others',
      'Mnemonics: "KNight KNeels on KNuckles"',
      'Weekly spelling quiz with etymology explanation, not just rote learning',
    ],
    linkedObjectives: [
      'KS3 NC: knowledge of morphology and etymology',
      'Broad vocabulary for reading and writing',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 8 - PUNCTUATION (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y8-pun-01',
    category: 'punctuation',
    yearGroup: 'Year 8',
    skill: 'Semicolons to join closely related independent clauses',
    description: 'Using the semicolon as an alternative to a full stop when two independent clauses are closely linked in meaning, creating a pause stronger than a comma but weaker than a full stop.',
    examples: [
      'The storm was worsening; no one dared leave the shelter.',
      'She studied every night; her results reflected her dedication.',
      'He was exhausted; his feet ached from the long march.',
    ],
    commonErrors: [
      'Using a semicolon when one side is not a complete clause',
      'Treating the semicolon as an interchangeable comma',
      'Overusing semicolons in every sentence to appear sophisticated',
    ],
    teachingStrategies: [
      'Clause test: can both sides stand alone as sentences? Then a semicolon may work.',
      'Upgrade exercise: replace some full stops with semicolons to show connection',
      'Author analysis: find semicolons in literary texts and discuss their effect',
      'Speed-write: pupils write five semicolons in one timed paragraph',
    ],
    linkedObjectives: [
      'KS3 NC: use of semicolons, colons and dashes',
      'Varied and sophisticated sentence construction',
    ],
  },
  {
    id: 'sp-y8-pun-02',
    category: 'punctuation',
    yearGroup: 'Year 8',
    skill: 'Colons to introduce lists and explanations',
    description: 'Using the colon after a complete clause to introduce a list, an example, a quotation, or an explanation/elaboration of what has just been stated.',
    examples: [
      'He needed three things: courage, determination and luck.',
      'There is one reason she succeeded: relentless practice.',
      'Shakespeare uses a powerful image here: "All the world\'s a stage."',
    ],
    commonErrors: [
      'Placing a colon after an incomplete clause ("She brought: apples and pears.")',
      'Using a colon before a list that follows "include", "such as", "for example"',
      'Confusing colon and semicolon functions',
    ],
    teachingStrategies: [
      'Colon rule card: the statement before the colon must be a complete sentence',
      'Sentence completion tasks: add the colon and complete the list/explanation',
      'Compare: "There are three reasons:" vs "Three reasons include:" - which needs the colon?',
      'Analytical writing frames using colons to introduce quotation and explanation',
    ],
    linkedObjectives: [
      'KS3 NC: use of colons to indicate subordinate information',
      'Academic writing structures in analytical essays',
    ],
  },
  {
    id: 'sp-y8-pun-03',
    category: 'punctuation',
    yearGroup: 'Year 8',
    skill: 'Inverted commas for direct speech with correct placement',
    description: 'Punctuating direct speech accurately: opening and closing inverted commas, correct placement of comma/full stop/question mark inside the closing speech mark, and new speaker, new line.',
    examples: [
      '"I cannot go back," she whispered, her voice breaking.',
      '"Are you certain?" he asked, stepping forward.',
      '"Run!" the captain shouted as the alarm sounded.',
    ],
    commonErrors: [
      'Placing the comma or full stop outside the closing speech mark',
      'Forgetting to open a new line for each new speaker in dialogue',
      'Using single speech marks inconsistently with double',
    ],
    teachingStrategies: [
      'Direct speech punctuation mats with visual diagram',
      'Transcribing a short scripted dialogue into correctly punctuated prose',
      'Colour-coding: speech marks in red, reporting clause punctuation in blue',
      'Peer editing pairs using a direct speech checklist',
    ],
    linkedObjectives: [
      'KS3 NC: use of inverted commas and other punctuation to indicate direct speech',
      'Creative writing narrative and dialogue skills',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 8 - GRAMMAR (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y8-grm-01',
    category: 'grammar',
    yearGroup: 'Year 8',
    skill: 'Complex sentences using subordinating conjunctions',
    description: 'Building complex sentences with a main clause and one or more subordinate clauses introduced by subordinating conjunctions (because, although, while, since, unless, whenever, if, as).',
    examples: [
      'Although the journey was long, she never complained.',
      'He refused to surrender, because the cause meant everything to him.',
      'Unless the rain stopped, the match would be cancelled.',
    ],
    commonErrors: [
      'Writing a subordinate clause as a standalone sentence fragment',
      'Overusing "because" and "although" while ignoring other subordinators',
      'Confusing subordinating and coordinating conjunctions',
    ],
    teachingStrategies: [
      'ISAWWHUBIF mnemonic for subordinating conjunctions',
      'Subordinate clause detectives: circle the subordinate clause and underline the main clause',
      'Sentence combining: join two simple sentences with an appropriate subordinator',
      'Punctuation focus: comma when subordinate clause is fronted',
    ],
    linkedObjectives: [
      'KS3 NC: use of subordination and coordination',
      'Sophisticated sentence construction for analytical and creative writing',
    ],
  },
  {
    id: 'sp-y8-grm-02',
    category: 'grammar',
    yearGroup: 'Year 8',
    skill: 'Formal and informal register: adapting language for audience and purpose',
    description: 'Understanding the distinction between formal and informal register and making deliberate, consistent choices about vocabulary, grammar and tone to suit different writing contexts.',
    examples: [
      'Informal: "The book was really good and I liked it loads."',
      'Formal: "The text is highly effective in its portrayal of conflict."',
      'Shifting register: letter to a friend vs letter to a headteacher',
    ],
    commonErrors: [
      'Mixing formal and informal register within the same piece of writing',
      'Using contractions in formal analytical essays',
      'Treating all writing tasks as having the same register requirements',
    ],
    teachingStrategies: [
      'Register spectrum: physical continuum from ultra-informal to ultra-formal',
      'Rewriting the same message in three different registers',
      'Mark scheme analysis: what register do examiners reward?',
      'Spoken language study: record and transcribe natural speech, contrast with written forms',
    ],
    linkedObjectives: [
      'KS3 NC: select appropriate register for audience and purpose',
      'Non-fiction writing for different contexts',
    ],
  },
  {
    id: 'sp-y8-grm-03',
    category: 'grammar',
    yearGroup: 'Year 8',
    skill: 'Paragraph cohesion: pronouns, determiners and connective adverbials',
    description: 'Using pronouns, determiners (the, this, these, that) and connective adverbials (furthermore, however, consequently) to link sentences within a paragraph and create cohesive writing.',
    examples: [
      '"This technique..." or "This suggests..." referring back to previous sentence',
      '"Furthermore, the writer employs..." to add a new point',
      '"However, not all critics agree..." to signal contrast',
    ],
    commonErrors: [
      'Ambiguous pronoun reference (unclear what "it" or "they" refers to)',
      'Repeating the noun in every sentence rather than using cohesive devices',
      'Using "also" and "and" as the only connective adverbials',
    ],
    teachingStrategies: [
      'Cohesion audit: circle every cohesive device in a model paragraph',
      'Connective adverbial bank sorted by function (addition, contrast, cause, sequence)',
      'Pronoun reference tracking: draw arrows from pronouns to their referents',
      'Paragraph re-building: scrambled sentences to reassemble using cohesive logic',
    ],
    linkedObjectives: [
      'KS3 NC: use cohesion across paragraphs',
      'Extended writing quality across all subjects',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 8 - VOCABULARY (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y8-voc-01',
    category: 'vocabulary',
    yearGroup: 'Year 8',
    skill: 'Figurative language vocabulary: simile, metaphor, personification and pathetic fallacy',
    description: 'Naming, identifying and analysing the effect of four key figurative devices in literary texts, and deploying them purposefully in creative and analytical writing.',
    examples: [
      'Simile: "The soldier moved like a shadow through the ruins."',
      'Metaphor: "Memory is a minefield."',
      'Personification: "The wind screamed through the broken windows."',
      'Pathetic fallacy: storm imagery used at a moment of emotional crisis',
    ],
    commonErrors: [
      'Identifying a simile but not analysing its effect',
      'Confusing metaphor with simile (a metaphor does not use like/as)',
      'Deploying figurative language without purpose or relevance',
    ],
    teachingStrategies: [
      'Effect-focused analysis frames: "The [device] of... suggests... which makes the reader feel..."',
      'Creative writing imitation: replicate an author\'s figurative technique in a new context',
      'Gallery walk: annotated extracts with figurative language highlighted',
      'Pathetic fallacy planning: choose weather/setting to match the emotional moment',
    ],
    linkedObjectives: [
      'KS3 NC: understand and use figurative language, including metaphor and simile',
      'Literary analysis and creative writing craft',
    ],
  },
  {
    id: 'sp-y8-voc-02',
    category: 'vocabulary',
    yearGroup: 'Year 8',
    skill: 'Subject-specific vocabulary for English: protagonist, antagonist, narrative voice, motif',
    description: 'Acquiring and using key literary and linguistic terminology with precision, enabling more exact discussion of texts in written analysis and classroom talk.',
    examples: [
      '"The protagonist\'s moral decline is central to the novel\'s themes."',
      '"Dickens establishes Scrooge as the antagonist of social injustice."',
      '"The third-person omniscient narrative voice creates dramatic irony."',
      '"The motif of imprisonment recurs throughout the text."',
    ],
    commonErrors: [
      'Using "character" when "protagonist" or "antagonist" is more precise',
      'Conflating author and narrator ("Dickens says..." when analysing fictional narrator)',
      'Using "theme" and "motif" interchangeably',
    ],
    teachingStrategies: [
      'Terminology wall: add new terms each unit with definition and example',
      'Terminology dominoes or matching cards for retrieval practice',
      'Cold call questioning using Tier 3 terms in every lesson',
      'Writing frames that embed target terminology as sentence starters',
    ],
    linkedObjectives: [
      'KS3 NC: use grammatical and literary terminology accurately',
      'GCSE preparation for literary analysis',
    ],
  },
  {
    id: 'sp-y8-voc-03',
    category: 'vocabulary',
    yearGroup: 'Year 8',
    skill: 'Evaluative vocabulary: choosing precise words to express degree of certainty',
    description: 'Using modal verbs (may, might, could, suggests) and hedging adverbials (perhaps, arguably, evidently) to express degrees of certainty in analytical writing, rather than making absolute claims.',
    examples: [
      '"This could suggest..." rather than "This definitely means..."',
      '"Perhaps Golding intends..." rather than "Golding is saying..."',
      '"Arguably, the most significant..." when acknowledging alternative interpretations',
    ],
    commonErrors: [
      'Making overconfident absolute claims in literary analysis',
      'Overusing "clearly" and "obviously" which close down analysis',
      'Avoiding all hedging and writing with no evaluative stance',
    ],
    teachingStrategies: [
      'Certainty spectrum: place phrases from certain to tentative on a line',
      'Upgrade the analysis: replace "This shows that..." with a more evaluative verb',
      'Mark scheme training: identify what evaluative language looks like in top-band responses',
      'Debate-style oral activities to build the habit of acknowledging multiple views',
    ],
    linkedObjectives: [
      'KS3 NC: write for different purposes and audiences using appropriate vocabulary',
      'Critical and evaluative thinking in written analysis',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 9 - SPELLING (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y9-spl-01',
    category: 'spelling',
    yearGroup: 'Year 9',
    skill: 'Technical and subject-specific vocabulary spelling',
    description: 'Spelling Tier 3 words from English Literature and Language with accuracy: protagonist, soliloquy, iambic pentameter, juxtaposition, verisimilitude, omniscient.',
    examples: [
      'soliloquy (not soliloquoy or soliliquoy)',
      'juxtaposition (not juxtaposision)',
      'omniscient (not omiscient or omnicient)',
    ],
    commonErrors: [
      'Misspelling "verisimilitude" at every syllable boundary',
      'Writing "soliloquy" as "soliliquy" (confusion with -quy ending)',
      'Dropping the silent c in "omniscient"',
    ],
    teachingStrategies: [
      'Syllable chunking: om-ni-sci-ent, ve-ri-si-mil-i-tude',
      'Etymology: "omni" (all) + "scio" (to know) = all-knowing',
      'Personalised spelling log: each pupil tracks their recurring errors',
      'Spelling test as part of every end-of-unit assessment',
    ],
    linkedObjectives: [
      'KS3 NC: accurate spelling of increasingly complex words',
      'GCSE examination preparation',
    ],
  },
  {
    id: 'sp-y9-spl-02',
    category: 'spelling',
    yearGroup: 'Year 9',
    skill: 'Word families and morphological analysis for complex words',
    description: 'Using knowledge of roots, prefixes and suffixes to decode and spell complex words encountered in literary and non-fiction texts, including Latin and Greek roots.',
    examples: [
      'chron (time): chronological, anachronism, synchronise',
      'phil (love): philanthropy, philosophy, bibliophile',
      'morph (form): metamorphosis, morphology, amorphous',
    ],
    commonErrors: [
      'Spelling "anachronism" as "anacronism" (forgetting Greek ch)',
      'Writing "filanthropy" without the ph digraph',
      'Confusing "metamorphosis" and "metaphor" due to shared meta- prefix',
    ],
    teachingStrategies: [
      'Word families tree: root at trunk, derived words as branches',
      'Etymology detective tasks using a classroom dictionary of roots',
      'Morphology challenges: how many words can you build from this root?',
      'Cross-curricular links: same roots in science, history and RE vocabulary',
    ],
    linkedObjectives: [
      'KS3 NC: knowledge of morphology and etymology in spelling',
      'Vocabulary breadth for reading challenging texts',
    ],
  },
  {
    id: 'sp-y9-spl-03',
    category: 'spelling',
    yearGroup: 'Year 9',
    skill: 'Commonly misspelled high-frequency words in academic writing',
    description: "Mastering the spelling of high-frequency words that remain problematic at Year 9: necessary, separate, definitely, exaggerate, occurred, privilege, conscience, rhythm.",
    examples: [
      'necessary (one collar, two socks: 1 c, 2 s)',
      'separate (there is a rat in separate)',
      'definitely (finite is in definitely)',
    ],
    commonErrors: [
      'Writing "neccessary", "seperate", "definately"',
      'Doubling the wrong consonant in "occurred" (one c, two r)',
      'Writing "privelege" or "priviledge"',
    ],
    teachingStrategies: [
      'Mnemonic collection: class-generated mnemonics for each problem word',
      'Regular low-stakes spelling retrieval practice (five words, two minutes)',
      'Error analysis: pupils identify their personal top-five misspellings from marked work',
      'Peer testing with immediate corrective feedback',
    ],
    linkedObjectives: [
      'KS3 NC: accurate spelling in all written work',
      'Preparation for GCSE written examination accuracy marks',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 9 - PUNCTUATION (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y9-pun-01',
    category: 'punctuation',
    yearGroup: 'Year 9',
    skill: 'Dashes for parenthesis and dramatic effect',
    description: 'Using a single dash for dramatic pause or to introduce a climactic elaboration, and a pair of dashes to create a parenthetical aside, understanding the different effect compared to brackets and commas.',
    examples: [
      'Single dash: "She reached for the handle - and froze."',
      'Parenthetical dashes: "The solution - if there was one - lay buried in the files."',
      'Dash vs bracket: dashes dramatise; brackets minimise',
    ],
    commonErrors: [
      'Using a hyphen (-) when an em dash is needed',
      'Failing to close a pair of dashes with the second dash',
      'Overusing dashes so they lose dramatic impact',
    ],
    teachingStrategies: [
      'Three parenthesis options: compare comma pair, bracket pair, dash pair on same sentence',
      'Effect analysis: what does the dash add that a comma does not?',
      'Creative writing targets: use one effective dash per paragraph',
      'Mentor text study: how contemporary authors use the dash',
    ],
    linkedObjectives: [
      'KS3 NC: use of brackets, dashes or commas to indicate parenthesis',
      'Sophisticated creative and analytical writing style',
    ],
  },
  {
    id: 'sp-y9-pun-02',
    category: 'punctuation',
    yearGroup: 'Year 9',
    skill: 'Parentheses: brackets, paired commas and paired dashes',
    description: 'Using all three methods of indicating parenthetical information accurately, understanding that the surrounding sentence must make sense if the parenthetical element is removed.',
    examples: [
      'Brackets: "Orwell (writing in 1945) wanted to warn readers about totalitarianism."',
      'Paired commas: "Curley, described as a small man, compensates with aggression."',
      'Paired dashes: "The author - well known for his political satire - chose every word deliberately."',
    ],
    commonErrors: [
      'Removing parenthetical content with only one bracket or one dash',
      'Embedding essential information inside parenthesis (the sentence should still make sense without it)',
      'Using all three methods randomly without awareness of different effects',
    ],
    teachingStrategies: [
      'Remove the test: cut the parenthetical section - does the sentence still work?',
      'Effect comparison: same information in brackets, commas and dashes - which best suits the context?',
      'Analytical writing: embedding quoted evidence within parenthetical structure',
      'Proofreading checklist: match every opening parenthesis symbol with its closing partner',
    ],
    linkedObjectives: [
      'KS3 NC: use parenthesis to add information or qualification',
      'Advanced written style in analytical and creative writing',
    ],
  },
  {
    id: 'sp-y9-pun-03',
    category: 'punctuation',
    yearGroup: 'Year 9',
    skill: 'Punctuation for effect in creative writing: ellipsis and varied terminal punctuation',
    description: 'Using ellipsis to create tension, imply omission or trail off, and making deliberate choices between full stop, exclamation mark and question mark for intended reader effect.',
    examples: [
      'Ellipsis for tension: "He turned the handle, pushed the door open, and saw..."',
      'Ellipsis for omission: "She had tried everything: letters, calls, visits..."',
      'Rhetorical question: "How long must they wait?"',
    ],
    commonErrors: [
      'Using four or more dots in an ellipsis (standard is three)',
      'Using ellipsis as a substitute for a full stop out of laziness',
      'Using exclamation marks in formal analytical writing',
    ],
    teachingStrategies: [
      'Tension mapping: where in the narrative does ellipsis have most effect?',
      'Punctuation for purpose: same event, three different endings using different terminal marks',
      'Author study: analyse how a named author uses unconventional punctuation',
      'Writing workshop: peer feedback specifically on punctuation choices',
    ],
    linkedObjectives: [
      'KS3 NC: use a range of punctuation correctly and for effect',
      'Craft and creativity in imaginative writing',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 9 - GRAMMAR (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y9-grm-01',
    category: 'grammar',
    yearGroup: 'Year 9',
    skill: 'Active and passive voice: form, function and effect',
    description: 'Distinguishing between active voice (subject performs action) and passive voice (subject receives action), understanding when to use each for clarity, emphasis or deliberate ambiguity.',
    examples: [
      'Active: "The government announced the decision." (clear agent)',
      'Passive: "The decision was announced." (agent hidden or unimportant)',
      'Passive for effect: "Mistakes were made." (politician avoids responsibility)',
    ],
    commonErrors: [
      'Believing passive voice is always wrong or weak',
      'Unable to convert between active and passive correctly',
      'Overusing passive in creative writing where active creates more energy',
    ],
    teachingStrategies: [
      'Active/passive conversion drills in both directions',
      'Political language analysis: where and why is passive used?',
      'Science report register: why does scientific writing use passive?',
      'Creative writing comparison: rewrite a passage in passive, discuss the effect',
    ],
    linkedObjectives: [
      'KS3 NC: use of the passive to affect the presentation of information',
      'Language analysis and non-fiction writing across subjects',
    ],
  },
  {
    id: 'sp-y9-grm-02',
    category: 'grammar',
    yearGroup: 'Year 9',
    skill: 'Embedded clauses and multi-clause sentences',
    description: 'Constructing sentences with embedded relative clauses (who, which, that, whose) and noun phrase embeddings, placed within the main clause to add detail without disrupting the sentence flow.',
    examples: [
      '"The soldier, who had fought for twenty years, finally returned home."',
      '"The book that changed her life had been a gift from her teacher."',
      '"His voice, steady despite everything, gave nothing away."',
    ],
    commonErrors: [
      'Writing a relative clause as a separate sentence',
      'Using "which" when "who" is required for people',
      'Losing the main verb when the embedded clause is too long',
    ],
    teachingStrategies: [
      'Sentence expansion: start with a simple sentence, embed information step by step',
      'Relative clause relay: each pupil adds an embedded clause to a partner\'s sentence',
      'Deconstruction: identify main clause and embedded clause in complex literary sentences',
      'Imitation writing: replicate the sentence structure of a published author',
    ],
    linkedObjectives: [
      'KS3 NC: use of relative clauses beginning with who, which, where, when, whose, that',
      'Sophisticated analytical and narrative sentence construction',
    ],
  },
  {
    id: 'sp-y9-grm-03',
    category: 'grammar',
    yearGroup: 'Year 9',
    skill: 'Discourse markers and text cohesion across paragraphs',
    description: 'Using discourse markers (nevertheless, consequently, in contrast, to illustrate, ultimately) to signal logical relationships between paragraphs and guide the reader through an extended argument or analysis.',
    examples: [
      '"Nevertheless, a counter-argument can be made that..."',
      '"Consequently, Steinbeck positions the reader to sympathise with..."',
      '"Ultimately, the text presents a pessimistic view of..."',
    ],
    commonErrors: [
      'Using "firstly, secondly, thirdly" as the only discourse markers',
      'Using discourse markers that signal the wrong logical relationship',
      'Beginning every paragraph with "In this paragraph I will..."',
    ],
    teachingStrategies: [
      'Discourse marker taxonomy: sort into function groups (contrast, cause, addition, summary)',
      'Paragraph opener dice: six different discourse markers, roll and write',
      'Essay deconstruction: identify all discourse markers and their functions',
      'Peer assessment: do the paragraph links show clear logical thinking?',
    ],
    linkedObjectives: [
      'KS3 NC: use cohesion across and within paragraphs',
      'Extended writing for GCSE examination preparation',
    ],
  },

  // ---------------------------------------------------------------------------
  // YEAR 9 - VOCABULARY (3 skills)
  // ---------------------------------------------------------------------------
  {
    id: 'sp-y9-voc-01',
    category: 'vocabulary',
    yearGroup: 'Year 9',
    skill: 'Evaluative and critical vocabulary for sophisticated literary analysis',
    description: 'Using precise evaluative vocabulary to express analytical judgements: subverts, epitomises, encapsulates, foreshadows, undermines, exemplifies, accentuates.',
    examples: [
      '"This image epitomises the novel\'s central preoccupation with power."',
      '"Dickens subverts the reader\'s initial expectation of Scrooge..."',
      '"The opening scene foreshadows the tragic ending."',
    ],
    commonErrors: [
      'Using "shows" and "tells" in place of precise analytical verbs',
      'Selecting impressive-sounding words without understanding their precise meaning',
      'Failing to integrate vocabulary naturally into sentence structures',
    ],
    teachingStrategies: [
      'Vocabulary expansion: take a student sentence and model upgrading the verb',
      'Definition + example + sentence: three-step vocabulary introduction',
      'Top-band exemplar analysis: identify every evaluative verb used',
      'Personal vocabulary log: pupils track new analytical verbs and use them within 48 hours',
    ],
    linkedObjectives: [
      'KS3 NC: use vocabulary that is varied and precise',
      'Preparation for GCSE Assessment Objective 2 language analysis',
    ],
  },
  {
    id: 'sp-y9-voc-02',
    category: 'vocabulary',
    yearGroup: 'Year 9',
    skill: 'Varied sentence structures as a vocabulary of form',
    description: 'Treating sentence structure choices as a vocabulary decision: using minor sentences for dramatic effect, inverted syntax for emphasis, and anaphora for rhetorical impact.',
    examples: [
      'Minor sentence: "Nothing. Just silence."',
      'Inverted syntax: "Only once did she allow herself to cry."',
      'Anaphora: "We shall fight on the beaches, we shall fight on the landing grounds..."',
    ],
    commonErrors: [
      'Using minor sentences randomly rather than for deliberate effect',
      'Constructing inverted syntax that sounds unnatural',
      'Identifying anaphora in texts but not deploying it in own writing',
    ],
    teachingStrategies: [
      'Sentence surgery: take a student paragraph and introduce one structural device',
      'Effect first, technique second: what feeling do you want? What structure achieves it?',
      'Rhetorical writing workshop: write a short speech using three structural techniques',
      'Deconstruction of famous speeches: annotate structural choices',
    ],
    linkedObjectives: [
      'KS3 NC: vary sentence forms for rhetorical and stylistic effect',
      'Creative and non-fiction writing at GCSE level',
    ],
  },
  {
    id: 'sp-y9-voc-03',
    category: 'vocabulary',
    yearGroup: 'Year 9',
    skill: 'Abstract noun vocabulary for discussing ideas, themes and concepts',
    description: 'Building and deploying a bank of abstract nouns for discussing thematic concerns, moral questions and authorial ideas: injustice, mortality, corruption, redemption, ambivalence, complicity.',
    examples: [
      '"Dickens explores the theme of redemption through Scrooge\'s transformation."',
      '"Steinbeck presents ambivalence toward the American Dream."',
      '"The concept of complicity is central to Priestley\'s message."',
    ],
    commonErrors: [
      'Discussing themes only in terms of events rather than ideas',
      'Using "the theme of friendship" rather than specifying how friendship is presented',
      'Confusing abstract noun with its adjectival form in sentences',
    ],
    teachingStrategies: [
      'Theme taxonomy: map abstract nouns to the texts studied this year',
      'Concept cards: abstract noun + definition + example from the text',
      'Upgrade: "the story is about being poor" becomes "the text explores socioeconomic injustice"',
      'Philosophical discussion starters to build oral fluency with abstract concepts',
    ],
    linkedObjectives: [
      'KS3 NC: understanding of themes and ideas in literature',
      'Preparation for GCSE Literature Assessment Objective 3',
    ],
  },
];

// =============================================================================
// SPAG ACTIVITIES (20 total covering all categories and year groups)
// =============================================================================

export const spagActivities: SpagActivity[] = [
  {
    id: 'act-01',
    title: 'Punctuation Fix-It',
    category: 'punctuation',
    yearGroup: 'Year 7',
    duration: '15 minutes',
    instructions: [
      'Give pupils a paragraph of prose that has been deliberately stripped of all punctuation.',
      'Pupils work individually for 5 minutes to restore capital letters and full stops.',
      'Pairs compare their versions and discuss any differences.',
      'Whole class feedback: display the original text and compare.',
      'Pupils identify the three most common errors in the class responses.',
    ],
    differentiation: {
      support: 'Provide a version with sentence boundaries marked by vertical lines; pupils only need to add the punctuation marks.',
      core: 'Standard task as described.',
      stretch: 'Pupils also add commas, semicolons and question marks where appropriate, justifying each choice.',
    },
    resources: [
      'Unpunctuated paragraph handout (one per pupil)',
      'Original punctuated version for the teacher',
      'Mini whiteboards for pair discussion',
    ],
  },
  {
    id: 'act-02',
    title: 'Word Class Detective',
    category: 'grammar',
    yearGroup: 'Year 7',
    duration: '20 minutes',
    instructions: [
      'Distribute a short extract (8-10 sentences) from a mentor text.',
      'Pupils use four different coloured pens or highlighters: noun (yellow), verb (green), adjective (pink), adverb (blue).',
      'Individually annotate the extract for 10 minutes.',
      'Small groups compare annotations and resolve any disagreements.',
      'Discuss two or three words that could belong to more than one class depending on use.',
    ],
    differentiation: {
      support: 'Provide a simplified extract with 20 words to classify; include a word class reminder card.',
      core: 'Standard 8-10 sentence extract.',
      stretch: 'Pupils also identify prepositional phrases and pronouns; discuss how changing word class alters meaning.',
    },
    resources: [
      'Printed extract (one per pupil)',
      'Four-colour highlighting pens or coloured pencils',
      'Word class reference card for support pupils',
    ],
  },
  {
    id: 'act-03',
    title: 'Homophone Hot Potato',
    category: 'spelling',
    yearGroup: 'Year 7',
    duration: '10 minutes',
    instructions: [
      'Pupils sit in a circle. Teacher reads a sentence aloud with a homophone gap.',
      'The "hot potato" (a soft object) is passed; whoever holds it must call out the correct spelling.',
      'If correct, the pupil passes on; if incorrect, the group helps correct the error.',
      'After 10 items, pupils write five original sentences using there/their/they\'re correctly.',
      'Peer mark the written sentences using the substitution test.',
    ],
    differentiation: {
      support: 'Provide a reference card with the three forms of there/their/they\'re and their meanings.',
      core: 'Standard activity as described.',
      stretch: 'Pupils must explain the grammatical reason for their choice before the next question.',
    },
    resources: [
      'Soft object for passing',
      'Prepared list of 10 oral sentences with homophones',
      'Reference cards for support pupils',
      'Exercise books for written follow-up',
    ],
  },
  {
    id: 'act-04',
    title: 'Vocabulary Synonym Ladder',
    category: 'vocabulary',
    yearGroup: 'Year 7',
    duration: '20 minutes',
    instructions: [
      'Display a basic word (e.g., "said", "walked", "nice") on the board.',
      'Pupils work in pairs to generate as many synonyms as possible in 2 minutes.',
      'Share responses; teacher records all suggestions on a vertical ladder graphic.',
      'Class orders synonyms from weakest to most precise or evocative.',
      'Pupils choose three words from the ladder and use each in an original sentence that demonstrates its precise meaning.',
    ],
    differentiation: {
      support: 'Provide a pre-populated ladder with half the synonyms already filled in.',
      core: 'Standard activity as described.',
      stretch: 'Pupils annotate each synonym with its connotation (positive/negative/neutral) and a context in which it would be most effective.',
    },
    resources: [
      'Synonym ladder template (projected or printed)',
      'Thesauri (print or digital)',
      'Exercise books or mini whiteboards',
    ],
  },
  {
    id: 'act-05',
    title: 'Apostrophe Sorting Challenge',
    category: 'punctuation',
    yearGroup: 'Year 8',
    duration: '15 minutes',
    instructions: [
      'Give each pair a set of 20 word cards: some require apostrophes (contractions or possession), some do not (plurals).',
      'Pupils sort cards into three columns: contraction / possession / no apostrophe.',
      'For possession cards, pupils rewrite the word with the apostrophe correctly placed.',
      'Teacher circulates and addresses misconceptions live.',
      'Exit ticket: write two contraction examples and two possession examples in sentences.',
    ],
    differentiation: {
      support: 'Reduce to 12 cards covering only contractions and singular possession.',
      core: 'Standard 20-card sort including plural possessives.',
      stretch: 'Cards include plural possessives (teachers\', children\'s) and the possessive "its"; pupils write a rule for each category.',
    },
    resources: [
      'Laminated word card sets (one per pair)',
      'Column header cards: Contraction / Possession / No Apostrophe',
      'Exit ticket slips',
    ],
  },
  {
    id: 'act-06',
    title: 'Semicolon Upgrade',
    category: 'punctuation',
    yearGroup: 'Year 8',
    duration: '15 minutes',
    instructions: [
      'Display a paragraph written entirely in simple sentences.',
      'Pupils identify pairs of closely related sentences that could be joined with a semicolon.',
      'Rewrite the paragraph substituting semicolons where appropriate.',
      'Pairs compare rewrites and discuss whether each semicolon use is valid.',
      'Class discussion: what effect does the paragraph have now compared to the original?',
    ],
    differentiation: {
      support: 'Provide the paragraph with potential joining points already marked with a star.',
      core: 'Standard task as described.',
      stretch: 'Pupils also introduce one colon and justify its placement, then compare the effect of colon vs semicolon in the same position.',
    },
    resources: [
      'Printed or projected simple-sentence paragraph',
      'Exercise books',
      'Projected correct version for class comparison',
    ],
  },
  {
    id: 'act-07',
    title: 'Register Rewrite',
    category: 'grammar',
    yearGroup: 'Year 8',
    duration: '25 minutes',
    instructions: [
      'Pupils receive a short informal email (8-10 sentences) written to a friend.',
      'Task: rewrite as a formal letter to a headteacher making the same request.',
      'Pupils annotate each change they make, noting what they altered and why.',
      'Share rewrites with a partner; partner checks for any remaining informal features.',
      'Class identifies the five most common changes made (contractions, slang, sentence structure, etc.).',
    ],
    differentiation: {
      support: 'Provide a parallel formal letter with key formal phrases blanked out for pupils to complete.',
      core: 'Standard task as described.',
      stretch: 'Pupils produce a third version in a different formal register (newspaper report) and reflect on how register varies even within formality.',
    },
    resources: [
      'Informal email handout',
      'Formal letter template/prompt sheet for support pupils',
      'Annotation colour code guide (one per pupil)',
    ],
  },
  {
    id: 'act-08',
    title: 'Complex Sentence Construction Race',
    category: 'grammar',
    yearGroup: 'Year 8',
    duration: '15 minutes',
    instructions: [
      'Display eight subordinating conjunctions on the board.',
      'Pupils have 8 minutes to write a correctly punctuated complex sentence using each conjunction.',
      'Swap books; partner ticks correct complex sentences and queries any that are fragments.',
      'Class vote: which sentence is the most interesting or well-constructed?',
      'Teacher models improvements to common errors identified during peer marking.',
    ],
    differentiation: {
      support: 'Provide sentence frames with the conjunction in place; pupils complete the main and subordinate clauses.',
      core: 'Standard task as described.',
      stretch: 'Pupils must front the subordinate clause in at least four sentences and punctuate correctly, then write one sentence with two subordinate clauses.',
    },
    resources: [
      'Subordinating conjunction list displayed on board',
      'Exercise books',
      'Timer',
    ],
  },
  {
    id: 'act-09',
    title: 'Figurative Language Gallery Walk',
    category: 'vocabulary',
    yearGroup: 'Year 8',
    duration: '30 minutes',
    instructions: [
      'Post eight A3 extracts around the room, each featuring prominent figurative language.',
      'Pupils rotate in pairs every 3 minutes, annotating a sticky note: device name, quotation, effect on the reader.',
      'After the gallery walk, each pair selects their most interesting annotation to share.',
      'Class discussion: which devices appear most frequently? Why might writers favour these?',
      'Individual follow-up: write a paragraph using three different figurative devices on a given topic.',
    ],
    differentiation: {
      support: 'Pairs have a figurative device identification card to help them name each device.',
      core: 'Standard task as described.',
      stretch: 'Pupils must write a sentence commenting on how the specific choice of image links to a wider theme in the text.',
    },
    resources: [
      'Eight A3 laminated literary extracts',
      'Sticky notes (three colours per pair)',
      'Figurative device reference cards',
      'Plain paper for individual follow-up',
    ],
  },
  {
    id: 'act-10',
    title: 'Morpheme Build-a-Word',
    category: 'spelling',
    yearGroup: 'Year 8',
    duration: '20 minutes',
    instructions: [
      'Give each group a set of root, prefix and suffix cards.',
      'Groups have 10 minutes to build as many real English words as possible.',
      'Score: 1 point for each word, bonus point if the group can define it without a dictionary.',
      'Whole class shares words found; teacher addresses any errors.',
      'Pupils record three new words in their vocabulary logs with definitions and example sentences.',
    ],
    differentiation: {
      support: 'Reduce card set to a single root with three prefixes and three suffixes; provide a word list to check against.',
      core: 'Standard card set with four roots, eight prefixes and six suffixes.',
      stretch: 'Pupils must also explain the etymological origin of two of their words and connect them to words in another subject.',
    },
    resources: [
      'Laminated morpheme card sets (one per group)',
      'Score sheets',
      'Vocabulary log books',
      'Etymological dictionaries (one per group)',
    ],
  },
  {
    id: 'act-11',
    title: 'Active to Passive Transformation',
    category: 'grammar',
    yearGroup: 'Year 9',
    duration: '20 minutes',
    instructions: [
      'Provide pupils with eight active voice sentences from different contexts (news, science, narrative).',
      'Pupils convert each to passive voice, noting that the agent may be omitted.',
      'For each transformation, pupils write one sentence explaining the effect of the change.',
      'Discussion: which contexts favour passive voice and why?',
      'Application: pupils write a short journalistic paragraph using passive voice to conceal an agent deliberately.',
    ],
    differentiation: {
      support: 'Provide a conversion model for the first two sentences with the grammatical steps annotated.',
      core: 'Standard task as described.',
      stretch: 'Pupils analyse a real political speech or press release, identifying every passive construction and theorising about the writer\'s motive.',
    },
    resources: [
      'Eight sentence handout',
      'Passive voice construction model for support pupils',
      'Sample political speech or press release for stretch task',
    ],
  },
  {
    id: 'act-12',
    title: 'Dash, Bracket, Comma: Three Ways',
    category: 'punctuation',
    yearGroup: 'Year 9',
    duration: '20 minutes',
    instructions: [
      'Display five sentences, each containing parenthetical information inserted with brackets.',
      'Pupils rewrite each sentence twice: once with paired commas, once with paired dashes.',
      'For each set of three versions, pupils annotate which parenthesis method is most effective and why.',
      'Pairs share their reasoning; class agrees on a best choice for each sentence.',
      'Writing task: produce a paragraph of literary analysis that deliberately uses all three parenthesis methods.',
    ],
    differentiation: {
      support: 'Pupils work on three sentences only; provide a comparison table with columns for each parenthesis method.',
      core: 'Standard task as described.',
      stretch: 'Pupils research how two different named authors use parenthesis and write a comparative paragraph on their styles.',
    },
    resources: [
      'Five-sentence handout',
      'Comparison table template for support pupils',
      'Exercise books or printed writing frames',
    ],
  },
  {
    id: 'act-13',
    title: 'Discourse Marker Dice',
    category: 'grammar',
    yearGroup: 'Year 9',
    duration: '25 minutes',
    instructions: [
      'Each group has a die labelled with six discourse markers from different function groups.',
      'Pupils roll the die and must write the opening sentence of a paragraph beginning with that marker.',
      'After 90 seconds, roll again and write the opening of the next paragraph so it follows logically.',
      'After five rolls, groups have five connected paragraph openers; they develop two into full paragraphs.',
      'Share and discuss: do the discourse markers create a clear, logical argument?',
    ],
    differentiation: {
      support: 'Use a die showing only additive and contrastive markers (furthermore, however, additionally, nevertheless, also, in contrast).',
      core: 'Die includes markers from all function groups including causal and summary.',
      stretch: 'Pupils must also label the function of each marker they use and reflect on whether they have over-relied on any one function type.',
    },
    resources: [
      'Customised foam dice (or cards in a bag as alternative)',
      'Discourse marker function taxonomy sheet',
      'Exercise books',
    ],
  },
  {
    id: 'act-14',
    title: 'Embedded Clause Expansion',
    category: 'grammar',
    yearGroup: 'Year 9',
    duration: '20 minutes',
    instructions: [
      'Display five simple sentences on the board.',
      'Pupils expand each with an embedded relative clause, maintaining grammatical accuracy.',
      'Pupils then attempt to add a second embedded clause to three of the sentences.',
      'Pair check: does each sentence still have a clear main verb? Is the main clause intact?',
      'Apply to analytical writing: take three sentences from a recent essay and embed additional textual detail using relative clauses.',
    ],
    differentiation: {
      support: 'Provide relative clause starters (who was, which had, that seemed) for pupils to complete.',
      core: 'Standard task as described.',
      stretch: 'Pupils imitate a specific complex sentence from a literary text, matching the syntactical structure with new content.',
    },
    resources: [
      'Five sentences displayed on projector',
      'Relative clause starter cards for support pupils',
      'Recent essays for application task',
    ],
  },
  {
    id: 'act-15',
    title: 'Evaluative Vocabulary Upgrade',
    category: 'vocabulary',
    yearGroup: 'Year 9',
    duration: '20 minutes',
    instructions: [
      'Provide a C-grade model analytical paragraph containing basic vocabulary.',
      'Pupils identify every weak analytical verb and evaluative phrase.',
      'Individually rewrite the paragraph, upgrading vocabulary to A-grade quality.',
      'Compare rewrites in pairs: which upgrades are most effective?',
      'Class constructs a shared vocabulary bank from the best substitutions.',
    ],
    differentiation: {
      support: 'Underline the words to be upgraded in the model paragraph; provide a vocabulary bank to choose from.',
      core: 'Standard task: pupils identify and upgrade without a pre-made bank.',
      stretch: 'Pupils also restructure two sentences to embed upgraded vocabulary more naturally, and write a reflective note on what makes the final version stronger.',
    },
    resources: [
      'C-grade model paragraph handout',
      'Vocabulary bank card for support pupils',
      'Mark scheme descriptors for comparison',
    ],
  },
  {
    id: 'act-16',
    title: 'Spelling Detectives: Error Hunt',
    category: 'spelling',
    yearGroup: 'All KS3',
    duration: '15 minutes',
    instructions: [
      'Distribute a passage containing 10 deliberate spelling errors (appropriate to year group).',
      'Pupils circle errors and write the correct spelling above in 5 minutes.',
      'Pairs compare findings: did they find the same errors?',
      'Class review: teacher reveals errors one by one; pupils score themselves.',
      'Pupils record any words they missed in their personal spelling logs.',
    ],
    differentiation: {
      support: 'Tell pupils how many errors are in each paragraph.',
      core: 'Standard task; pupils are told there are exactly 10 errors.',
      stretch: 'Pupils categorise errors by type (suffix, prefix, silent letter, commonly confused) and explain the correct rule for each.',
    },
    resources: [
      'Error-seeded passage (adapted by year group)',
      'Red pens for error marking',
      'Personal spelling logs',
    ],
  },
  {
    id: 'act-17',
    title: 'Connotation Spectrum',
    category: 'vocabulary',
    yearGroup: 'All KS3',
    duration: '15 minutes',
    instructions: [
      'Draw a horizontal line on the board labelled "very negative" at one end and "very positive" at the other.',
      'Read out synonyms for a concept (e.g., words meaning thin, or words meaning confident).',
      'Pupils hold up mini whiteboards showing where they would place each word on the spectrum.',
      'Discuss disagreements: why might different people place the same word differently?',
      'Pupils choose one word from the spectrum and write a sentence that makes its connotation clear from context.',
    ],
    differentiation: {
      support: 'Provide a pre-printed spectrum with words already placed; pupils add two of their own.',
      core: 'Standard activity as described.',
      stretch: 'Pupils consider how context (audience, culture, era) can shift the connotation of a word, with an example from a literary text studied.',
    },
    resources: [
      'Mini whiteboards and pens',
      'Prepared synonym sets (one per round)',
      'Pre-printed spectrum sheet for support pupils',
    ],
  },
  {
    id: 'act-18',
    title: 'Punctuation for Effect: Tension Writing',
    category: 'punctuation',
    yearGroup: 'All KS3',
    duration: '25 minutes',
    instructions: [
      'Read aloud a tense extract from a class novel, drawing attention to sentence length variation.',
      'Discuss: how does the writer use short sentences and ellipsis to create tension?',
      'Pupils write a 10-sentence tense scene using a given scenario, deliberately varying sentence length.',
      'Pupils annotate their own writing: circle the shortest sentence and explain its effect.',
      'Voluntary sharing; class feedback on the most effective punctuation choices.',
    ],
    differentiation: {
      support: 'Provide a sentence frame scaffold showing where short sentences and longer sentences should appear.',
      core: 'Standard task as described.',
      stretch: 'Pupils write a second version of the same scene with completely different punctuation choices, then compare the two and evaluate which is more effective and why.',
    },
    resources: [
      'Tense extract from class novel (projected or printed)',
      'Scenario cards for pupils who need a prompt',
      'Annotation pencils',
    ],
  },
  {
    id: 'act-19',
    title: 'Paragraphing: PEEL Construction',
    category: 'grammar',
    yearGroup: 'All KS3',
    duration: '30 minutes',
    instructions: [
      'Introduce PEEL: Point, Evidence, Explain, Link.',
      'Display a topic sentence; class jointly selects evidence from the text.',
      'Teacher models the Explain step, demonstrating how to analyse rather than describe.',
      'Pupils independently write their own PEEL paragraph on a different aspect of the same text.',
      'Peer assessment against a PEEL checklist; written feedback on one strength and one target.',
    ],
    differentiation: {
      support: 'Provide a partially complete PEEL frame with the Point and Evidence given; pupils complete the Explain and Link.',
      core: 'Standard task as described.',
      stretch: 'Pupils write two linked PEEL paragraphs with a discourse marker connecting them, and reflect on what makes the Link sentence effective.',
    },
    resources: [
      'PEEL structure display poster',
      'PEEL writing frame for support pupils',
      'PEEL peer assessment checklist',
      'Relevant text extract',
    ],
  },
  {
    id: 'act-20',
    title: 'Subject-Verb Agreement Audit',
    category: 'grammar',
    yearGroup: 'All KS3',
    duration: '15 minutes',
    instructions: [
      'Distribute a paragraph containing eight subject-verb agreement errors.',
      'Pupils underline every subject-verb pair and check agreement.',
      'Correct errors in red pen; write the correct form above each error.',
      'Focus discussion: errors involving collective nouns, indefinite pronouns and compound subjects.',
      'Pupils write three sentences of their own that each include one of these tricky agreement structures.',
    ],
    differentiation: {
      support: 'Errors involve only simple singular/plural agreement; provide a rule card.',
      core: 'Standard task including errors with collective nouns and compound subjects.',
      stretch: 'Pupils research two real-world examples of contested subject-verb agreement (e.g., "the team are" vs "the team is" in British vs American English) and explain the logic behind both.',
    },
    resources: [
      'Error-seeded paragraph handout',
      'Subject-verb agreement rule card for support pupils',
      'Exercise books',
    ],
  },
];
