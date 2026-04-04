// =============================================================================
// IGCSE SPAG & ACCURACY FRAMEWORK DATA
// Years 10-11 (IGCSE) with skills progression into IAL (Years 12-13)
// Edexcel IGCSE English Language & Literature / IAL
// =============================================================================

export interface AccuracySkill {
  id: string;
  level: 'IGCSE' | 'IAL';
  category: 'spelling' | 'punctuation' | 'grammar' | 'vocabulary' | 'style' | 'accuracy';
  skill: string;
  description: string;
  examApplication: string;
  examples: string[];
  markSchemeLink: string;
}

export interface WritingTechnique {
  id: string;
  name: string;
  definition: string;
  whenToUse: string;
  exampleSentence: string;
  examinerAdvice: string;
}

// =============================================================================
// IGCSE ACCURACY SKILLS (20 skills: 10 Language AO4, 10 Literature AO4)
// =============================================================================

export const igcseAccuracySkills: AccuracySkill[] = [

  // ---------------------------------------------------------------------------
  // IGCSE LANGUAGE (AO4 - Technical Accuracy in Writing) -- skills 01-10
  // ---------------------------------------------------------------------------

  {
    id: 'igcse-lang-acc-01',
    level: 'IGCSE',
    category: 'punctuation',
    skill: 'Full-stop sentence demarcation',
    description: 'Every sentence must begin with a capital letter and end with a full stop, question mark, or exclamation mark. Accurate demarcation signals control and is assessed directly under AO4.',
    examApplication: 'In Paper 1 Section B and Paper 2 transactional writing, every sentence boundary must be clearly marked. Run-on sentences and comma splices cost marks in the top bands.',
    examples: [
      'The street was silent. Nothing moved.',
      'She opened the door. Cold air rushed in.',
      'Why did he leave? No one could say.',
    ],
    markSchemeLink: 'AO4 - sentence demarcation; Levels 1-5 descriptors for accuracy',
  },
  {
    id: 'igcse-lang-acc-02',
    level: 'IGCSE',
    category: 'punctuation',
    skill: 'Comma usage in complex sentences',
    description: 'Commas separate subordinate clauses from main clauses, items in a list, and fronted adverbials. Misplaced or absent commas are among the most penalised errors in IGCSE writing.',
    examApplication: 'When a subordinate clause opens a sentence, a comma must follow it before the main clause. Lists of three or more items require commas between each element.',
    examples: [
      'Although the night was cold, she did not shiver.',
      'He packed his bag, his coat, and his keys.',
      'Running through the rain, she finally reached shelter.',
    ],
    markSchemeLink: 'AO4 - accurate punctuation; sentence variety band descriptors',
  },
  {
    id: 'igcse-lang-acc-03',
    level: 'IGCSE',
    category: 'punctuation',
    skill: 'Apostrophe for possession and contraction',
    description: 'Apostrophes indicate either omitted letters (contraction) or ownership (possession). Apostrophes in plurals without possession are a very common error that marks poor control of accuracy.',
    examApplication: 'Avoid apostrophe errors in formal and creative writing alike. "It\'s" (it is) versus "its" (possessive) is a key distinction tested implicitly through band descriptors.',
    examples: [
      'The boy\'s voice cracked. (possession)',
      'She couldn\'t stop shaking. (contraction)',
      'The characters\' decisions shape the plot. (plural possession)',
    ],
    markSchemeLink: 'AO4 - control of punctuation; clarity of meaning',
  },
  {
    id: 'igcse-lang-acc-04',
    level: 'IGCSE',
    category: 'punctuation',
    skill: 'Colon and semicolon for effect and structure',
    description: 'A colon introduces a list, explanation, or dramatic reveal. A semicolon links two closely related independent clauses. Correct use demonstrates sophisticated sentence control and earns credit in higher bands.',
    examApplication: 'Deploy colons to build tension before a key detail in narrative writing. Use semicolons in analytical writing to link a quotation to its explanation without breaking flow.',
    examples: [
      'There was only one option: run.',
      'The room was dark; nothing moved.',
      'He had three fears: heights, silence, and the dark.',
    ],
    markSchemeLink: 'AO4 - ambitious punctuation for effect; Levels 4-5 descriptors',
  },
  {
    id: 'igcse-lang-acc-05',
    level: 'IGCSE',
    category: 'grammar',
    skill: 'Subject-verb agreement',
    description: 'The verb must agree in number with its subject. Errors occur most often when a prepositional phrase separates the subject and verb, or when collective nouns are used.',
    examApplication: 'In all writing tasks, identify the true grammatical subject and match the verb form accordingly. Collective nouns (crowd, team, group) can take singular or plural verbs but must be consistent.',
    examples: [
      'The crowd was silent, not "the crowd were silent" (if treating as one unit).',
      'Each of the students was expected to contribute.',
      'The quality of the descriptions makes the piece vivid.',
    ],
    markSchemeLink: 'AO4 - grammatical accuracy; control of tense and agreement',
  },
  {
    id: 'igcse-lang-acc-06',
    level: 'IGCSE',
    category: 'grammar',
    skill: 'Tense consistency',
    description: 'Creative and transactional writing must maintain a consistent tense throughout unless a deliberate shift in time is signalled clearly. Unintentional tense shifts are heavily penalised in AO4 assessment.',
    examApplication: 'Narrative writing in the past tense must stay in the past tense. If using present tense for immediacy, commit to it. Flag any deliberate flashback with a clear temporal marker.',
    examples: [
      'She walked to the door and listened. Nothing stirred.',
      'He runs every morning. Yesterday, however, he stayed in bed. (deliberate shift, clearly marked)',
    ],
    markSchemeLink: 'AO4 - tense control; grammatical consistency across the response',
  },
  {
    id: 'igcse-lang-acc-07',
    level: 'IGCSE',
    category: 'spelling',
    skill: 'High-frequency word spelling',
    description: 'Correct spelling of commonly misspelled words demonstrates basic accuracy. IGCSE mark schemes penalise repeated spelling errors on high-frequency words that a student of this level should know.',
    examApplication: 'Learn the most frequently misspelled words in exam conditions: receive, separate, necessary, definitely, environment, argument, occurred, beginning, rhythm, beautiful.',
    examples: [
      'necessary (not neccessary)',
      'occurred (not occured)',
      'beginning (not begining)',
    ],
    markSchemeLink: 'AO4 - spelling accuracy; impact on clarity and meaning',
  },
  {
    id: 'igcse-lang-acc-08',
    level: 'IGCSE',
    category: 'vocabulary',
    skill: 'Vocabulary precision and range',
    description: 'Using precise, varied vocabulary rather than vague or repeated words demonstrates flair and earns marks in the upper AO4 bands. Overuse of "said", "good", "nice", or "got" signals weak control.',
    examApplication: 'In transactional writing, match register to purpose and audience. In creative writing, choose words for connotative and sonic effect. Examiners reward vocabulary that is both accurate and deliberately chosen.',
    examples: [
      'Instead of "he said loudly" -- "he bellowed"',
      'Instead of "a nice sunset" -- "a molten, rust-streaked horizon"',
      'Instead of "good reasons" -- "compelling arguments"',
    ],
    markSchemeLink: 'AO4 - vocabulary for effect; Levels 4-5 vocabulary range descriptors',
  },
  {
    id: 'igcse-lang-acc-09',
    level: 'IGCSE',
    category: 'grammar',
    skill: 'Sentence variety: simple, compound, complex',
    description: 'Controlling a range of sentence structures -- simple for impact, compound for development, complex for analysis -- demonstrates grammatical maturity and is explicitly rewarded in AO4 upper bands.',
    examApplication: 'Avoid monotonous sentence rhythm. A short simple sentence following a longer complex one creates contrast and emphasis. Examiners look for evidence of deliberate structural choice.',
    examples: [
      'Simple: The door slammed.',
      'Compound: The door slammed and the glass shattered.',
      'Complex: Although she had braced herself, the sound still made her flinch.',
    ],
    markSchemeLink: 'AO4 - sentence structure variety; structural control for effect',
  },
  {
    id: 'igcse-lang-acc-10',
    level: 'IGCSE',
    category: 'style',
    skill: 'Register and tone appropriate to purpose and audience',
    description: 'Register encompasses formality level, vocabulary choices, and tone. Transactional writing tasks (letters, articles, speeches) require the student to match register to the stated audience and purpose consistently.',
    examApplication: 'A formal letter to a headteacher must avoid contractions and colloquialisms. A persuasive speech to peers may use direct address and rhetorical questions. Inconsistent register costs marks in both AO3 and AO4.',
    examples: [
      'Formal: "I write to express my concerns regarding..." (not "I want to say I\'m not happy about...")',
      'Persuasive: "Surely we can all agree that this situation is unacceptable?"',
      'Informative: "Research suggests that..." (not "Everyone knows that...")',
    ],
    markSchemeLink: 'AO4 - register and purpose; AO3 communication and purpose overlap',
  },

  // ---------------------------------------------------------------------------
  // IGCSE LITERATURE (AO4 - Technical Accuracy in Written Responses) -- 11-20
  // ---------------------------------------------------------------------------

  {
    id: 'igcse-lit-acc-01',
    level: 'IGCSE',
    category: 'grammar',
    skill: 'Present tense for literary analysis',
    description: 'When writing about a literary text, use the present tense ("Priestley presents", "Shakespeare shows", "Steinbeck implies"). Using past tense in analytical writing is a common and penalised error.',
    examApplication: 'In all Literature exam responses -- poetry, prose, drama -- maintain the literary present tense throughout. Only shift to past tense when discussing historical or biographical context.',
    examples: [
      '"Priestley presents Birling as wilfully blind to social responsibility."',
      '"Shakespeare uses the witches to create an atmosphere of moral ambiguity."',
      '"Steinbeck implies that the American Dream is fundamentally flawed."',
    ],
    markSchemeLink: 'AO4 - accuracy and clarity in written expression; literature response conventions',
  },
  {
    id: 'igcse-lit-acc-02',
    level: 'IGCSE',
    category: 'punctuation',
    skill: 'Quotation integration with punctuation',
    description: 'Short quotations must be embedded grammatically within the student\'s own sentence. Longer quotations (more than two lines) are indented and do not require quotation marks. Correct punctuation around quotations is assessed under AO4.',
    examApplication: 'Use single inverted commas for embedded quotations. Ensure the sentence remains grammatically intact around the quote. Do not start a sentence with a quotation -- integrate it into a point.',
    examples: [
      'Priestley describes the Inspector as speaking "carefully, weightily" to suggest deliberate authority.',
      'When Macbeth declares that he "could not say Amen", Shakespeare signals his rupture with the divine.',
    ],
    markSchemeLink: 'AO4 - accurate punctuation; clarity of analytical expression',
  },
  {
    id: 'igcse-lit-acc-03',
    level: 'IGCSE',
    category: 'style',
    skill: 'Analytical vocabulary: effect and technique language',
    description: 'Literary analysis requires a precise vocabulary of terms: connotation, juxtaposition, motif, imagery, tone, foreshadowing, etc. Using these terms accurately and appropriately demonstrates the analytical register expected at IGCSE.',
    examApplication: 'Do not use technical terms as decoration. Every term should be followed by an explanation of its effect in context. Using "metaphor" without explaining its effect scores no marks.',
    examples: [
      '"The semantic field of disease..." (not just "the language used...")',
      '"Priestly uses dramatic irony to..." (followed by its effect on the audience)',
      '"The juxtaposition of light and darkness emphasises..."',
    ],
    markSchemeLink: 'AO2 (methods and effects) -- accuracy in deploying critical vocabulary feeds AO4',
  },
  {
    id: 'igcse-lit-acc-04',
    level: 'IGCSE',
    category: 'grammar',
    skill: 'Paragraph structure: Point-Evidence-Explain',
    description: 'Each analytical paragraph should open with a clear topic sentence (Point), embed a quotation (Evidence), and fully explain the effect (Explain). Grammatical coherence within and between paragraphs is an AO4 concern.',
    examApplication: 'Ensure each paragraph sentence connects logically. Avoid list-style responses. The explanation should be at least as long as the evidence sentence and should link to the question focus.',
    examples: [
      'Point: "Priestley uses the Inspector to voice socialist ideology."',
      'Evidence: "He describes the dead girl as a victim of a \'chain of events\' linking all the Birlings."',
      'Explain: "This collective metaphor suggests that social responsibility is indivisible -- no one can escape their role in the system."',
    ],
    markSchemeLink: 'AO1 - structured, coherent response; AO4 - clarity of written expression',
  },
  {
    id: 'igcse-lit-acc-05',
    level: 'IGCSE',
    category: 'vocabulary',
    skill: 'Hedging and certainty language in analysis',
    description: 'Analytical writing distinguishes between certainty ("Shakespeare shows") and interpretation ("Shakespeare may suggest"). Using hedging language appropriately signals interpretive sophistication without undermining the argument.',
    examApplication: 'Use "suggests", "implies", "could be interpreted as", "perhaps" to signal your interpretive stance. Avoid overconfident assertions ("Shakespeare definitely means...") and avoid weak hedging ("Shakespeare sort of suggests...").',
    examples: [
      '"Steinbeck may be suggesting that isolation destroys human potential."',
      '"This could be interpreted as Priestley\'s critique of complacent capitalism."',
      '"The imagery perhaps anticipates the tragedy to come."',
    ],
    markSchemeLink: 'AO1 - quality of argument; AO4 - precision and range of vocabulary',
  },
  {
    id: 'igcse-lit-acc-06',
    level: 'IGCSE',
    category: 'punctuation',
    skill: 'Dash and parenthesis for analytical asides',
    description: 'Dashes and parentheses allow the writer to insert additional analytical detail or contextual aside without disrupting the main argument. Correct and controlled use signals stylistic maturity.',
    examApplication: 'Use paired dashes or brackets to embed a brief contextual or interpretive qualifier. Do not overuse -- one or two per response is sufficient. Ensure the sentence reads correctly if the aside is removed.',
    examples: [
      '"Lady Macbeth -- arguably the play\'s most psychologically complex figure -- drives the initial action."',
      '"The Inspector (who may represent Priestley\'s own voice) challenges every character in turn."',
    ],
    markSchemeLink: 'AO4 - varied and accurate punctuation for stylistic effect',
  },
  {
    id: 'igcse-lit-acc-07',
    level: 'IGCSE',
    category: 'spelling',
    skill: 'Accurate spelling of author names, character names, and key terms',
    description: 'Misspelling an author\'s name, a character\'s name, or a key literary term signals carelessness that undermines an otherwise strong response. These are straightforward marks to secure with targeted revision.',
    examApplication: 'Revise: Priestley (not Priestly or Priest), Sheila (not Sheela), Macbeth (not Macbeath), Steinbeck (not Steinbeck is often fine but Steinbok is not), Of Mice and Men (italicised in word processing, underlined in handwriting).',
    examples: [
      'J.B. Priestley (not "Priestly")',
      'Sheila Birling (not "Shelia")',
      'Of Mice and Men (underlined or italicised)',
    ],
    markSchemeLink: 'AO4 - accuracy in written expression; impression marking on key proper nouns',
  },
  {
    id: 'igcse-lit-acc-08',
    level: 'IGCSE',
    category: 'style',
    skill: 'Formal analytical register: avoiding colloquialism',
    description: 'Literary essays must maintain a formal academic register throughout. Colloquialisms, contractions, and informal phrasing undermine the analytical credibility of the response and cost marks in AO4.',
    examApplication: 'Avoid: "loads of", "kind of", "a lot", "you can see that", "doesn\'t" (use "does not"), "Shakespeare really wants to". Replace with: "a significant number of", "appears to", "does not", "Shakespeare seeks to demonstrate".',
    examples: [
      'Informal: "Shakespeare really wants to show that Macbeth is going mad."',
      'Formal: "Shakespeare charts Macbeth\'s psychological deterioration with increasing urgency."',
      'Informal: "There are loads of examples of this."',
      'Formal: "This pattern recurs throughout the text."',
    ],
    markSchemeLink: 'AO4 - register and formality; AO1 - quality and clarity of argument',
  },
  {
    id: 'igcse-lit-acc-09',
    level: 'IGCSE',
    category: 'grammar',
    skill: 'Connective and discourse marker usage in extended writing',
    description: 'Discourse markers (Furthermore, However, In contrast, Consequently) signal the logical relationship between paragraphs and ideas. They are grammatical glue that examiners look for in coherent extended responses.',
    examApplication: 'Open body paragraphs with a discourse marker that signals its relationship to the previous paragraph. Avoid starting every paragraph with "Also" or "Another". Use adversative markers (However, Nevertheless) to introduce counter-argument or complexity.',
    examples: [
      '"Furthermore, Priestley reinforces this theme by..."',
      '"In contrast to the Inspector\'s certainty, Sheila\'s response..."',
      '"Consequently, the audience recognises that..."',
    ],
    markSchemeLink: 'AO1 - structured, developed response; AO4 - coherence and cohesion',
  },
  {
    id: 'igcse-lit-acc-10',
    level: 'IGCSE',
    category: 'accuracy',
    skill: 'Handwriting legibility and presentation',
    description: 'In handwritten exams, legible handwriting is a baseline requirement. Examiners cannot award marks for work they cannot read. Presentation also includes crossing out neatly and not writing in margins.',
    examApplication: 'If your natural handwriting is difficult to read under exam conditions, practise writing at speed while maintaining letter clarity. Use a line through crossed-out material rather than heavy scribbling. Leave the last five minutes to check and correct.',
    examples: [
      'Write "run" not "ryn" -- ensure ascenders (l, h, b) and descenders (p, g, y) are distinct.',
      'Cross out errors with a single line, then write the correction above.',
    ],
    markSchemeLink: 'AO4 - examiner guidance on illegible scripts; mark scheme annotation protocol',
  },

];

// =============================================================================
// IAL ACCURACY SKILLS (15 skills: AO1 written accuracy -- Years 12-13)
// =============================================================================

export const ialAccuracySkills: AccuracySkill[] = [

  {
    id: 'ial-acc-01',
    level: 'IAL',
    category: 'style',
    skill: 'Sustaining a formal critical register across an extended essay',
    description: 'IAL responses are longer and more complex than IGCSE. Sustaining a consistently formal, academic register across 600-900 words requires deliberate vocabulary control and self-monitoring throughout the response.',
    examApplication: 'Read back your opening paragraph before writing the conclusion to check register consistency. Avoid informal register creep in middle paragraphs when under time pressure.',
    examples: [
      '"The author constructs a narrative voice that..." (not "The author makes a narrator who...")',
      '"This ambiguity invites multiple interpretations." (not "This could mean different things.")',
    ],
    markSchemeLink: 'AO1 - quality of argument and expression; IAL Level 5 descriptor: "precise, nuanced, and convincing"',
  },
  {
    id: 'ial-acc-02',
    level: 'IAL',
    category: 'vocabulary',
    skill: 'Critical metalanguage: advanced literary and linguistic terminology',
    description: 'At IAL, students are expected to deploy and explain a wide range of critical terms: polyphony, free indirect discourse, polysemy, deixis, semantic field, bathos, hypotaxis, parataxis, epistrophe, and others.',
    examApplication: 'Each technical term must be followed by its textual application and a comment on its effect or significance. Terms deployed without explanation earn no credit. Accuracy of definition matters -- examiners notice misused terms.',
    examples: [
      '"The free indirect discourse in this passage blurs the boundary between narrator and character, destabilising readerly certainty."',
      '"The hypotactic structure of the opening sentence mirrors the narrator\'s tendency to qualify and hedge every assertion."',
    ],
    markSchemeLink: 'AO2 - analysis of methods; AO1 - precise, accurate critical vocabulary',
  },
  {
    id: 'ial-acc-03',
    level: 'IAL',
    category: 'grammar',
    skill: 'Subordination and embedding: constructing complex analytical sentences',
    description: 'IAL analytical sentences often require multiple layers of subordination to embed quotation, method, and effect within a single coherent statement. Controlling this without losing grammatical clarity is a key IAL writing skill.',
    examApplication: 'Practise the "method-effect-significance" sentence: "By [method], the author [effect on reader], which ultimately [significance to text]." Keep the main clause dominant -- do not bury it under excessive subordination.',
    examples: [
      '"By deploying a fragmented syntax that mirrors the speaker\'s psychological disintegration, Plath implicates the reader in the speaker\'s desperation."',
      '"When Hamlet delays -- a structural choice Coleridge famously attributed to over-contemplation -- Shakespeare presents paralysis as both tragic flaw and philosophical condition."',
    ],
    markSchemeLink: 'AO1 - coherent, well-structured argument; AO4 - grammatical control at sentence level',
  },
  {
    id: 'ial-acc-04',
    level: 'IAL',
    category: 'punctuation',
    skill: 'Ellipsis in quotation: accurate omission notation',
    description: 'When omitting material from a quotation, use three-dot ellipsis (...) in square brackets to signal the omission. This preserves the original meaning while allowing selective quotation. Misuse falsifies the quotation and is treated as an accuracy error.',
    examApplication: 'Only omit material that does not alter the meaning relevant to your point. Never omit a negative ("not") in a way that changes the meaning. Always check that the quotation still reads grammatically after the omission.',
    examples: [
      '"To be [...] that is the question." (correct -- omission indicated)',
      '"I am [...] afraid of nothing" -- only if the full line supports this reading',
    ],
    markSchemeLink: 'AO4 - accuracy in referencing and quoting; AO1 - precise use of textual evidence',
  },
  {
    id: 'ial-acc-05',
    level: 'IAL',
    category: 'style',
    skill: 'Hedged assertion: balancing argument and interpretation',
    description: 'IAL mark schemes reward responses that acknowledge textual ambiguity and competing interpretations. Hedged assertion is the technique of making a strong analytical claim while signalling its interpretive nature, avoiding both under-confidence and overstatement.',
    examApplication: 'Use: "one might argue", "a feminist reading would suggest", "the text seems to invite the interpretation that", "critics such as [X] have argued". Avoid: "obviously", "clearly shows", "the author definitely means".',
    examples: [
      '"A Marxist reading might position Heathcliff\'s social mobility as both a critique and a reaffirmation of capitalist ideology."',
      '"The ambiguity here seems deliberate -- the text refuses to resolve the tension between freedom and constraint."',
    ],
    markSchemeLink: 'AO1 - Level 5: "explores multiple interpretations with nuance and confidence"',
  },
  {
    id: 'ial-acc-06',
    level: 'IAL',
    category: 'grammar',
    skill: 'Passive voice: when to use it and when to avoid it',
    description: 'The passive voice ("the reader is positioned to...") is appropriate in literary analysis when the agent (author or text) is implied or when emphasising the effect on the reader. Overuse creates vague, evasive writing; avoid it in argument-making.',
    examApplication: 'Use active voice for analytical claims ("Austen satirises...") and passive voice only when foregrounding reader response ("the reader is invited to question..."). Never use the passive to avoid committing to an argument.',
    examples: [
      'Active (preferred for argument): "Hardy emphasises the cruelty of social convention."',
      'Passive (appropriate for reader effect): "The reader is left uncertain as to whether the confession is genuine."',
    ],
    markSchemeLink: 'AO1 - argumentative clarity; AO4 - grammatical range and control',
  },
  {
    id: 'ial-acc-07',
    level: 'IAL',
    category: 'spelling',
    skill: 'Accurate spelling of critical and theoretical vocabulary',
    description: 'At IAL, students engage with critical terminology from literary theory and linguistics. Misspelling key terms (protagonist, juxtaposition, anachronism, verisimilitude, soliloquy, foreshadowing) undermines the academic credibility of the response.',
    examApplication: 'Build a personal spelling list of all technical terms used in each text studied. Practise writing them in full sentences at speed. Pay special attention to terms with double letters or unusual letter combinations.',
    examples: [
      'juxtaposition (not juxtaposition is correct -- watch juxtoposition)',
      'soliloquy (not soliloquy -- watch soliloguy)',
      'protagonist (not protaganist)',
      'verisimilitude (not verisimiltude)',
    ],
    markSchemeLink: 'AO4 - spelling accuracy; AO1 - precise critical vocabulary',
  },
  {
    id: 'ial-acc-08',
    level: 'IAL',
    category: 'accuracy',
    skill: 'Referencing critical sources: integrating secondary material accurately',
    description: 'At IAL, critical and contextual sources should be introduced with author name and, where known, date. Quotations from critics must be accurately attributed and grammatically integrated. Fabricating or misattributing critical opinion is a serious error.',
    examApplication: 'Introduce critics with: "As [Critic] argues...", "[Critic] ([date]) suggests that...", "In [Critic\'s] reading of the text...". If you do not know the exact quotation, use paraphrase ("Following Marxist criticism, one might argue...") rather than a fabricated quote.',
    examples: [
      '"As A.C. Bradley argued, Hamlet\'s tragedy is one of inaction rather than action."',
      '"Feminist critics, including Sandra Gilbert and Susan Gubar, have read Bertha Mason as an expression of Jane\'s suppressed rage."',
    ],
    markSchemeLink: 'AO3 - contexts; AO1 - critical framework integration; AO4 - accurate referencing',
  },
  {
    id: 'ial-acc-09',
    level: 'IAL',
    category: 'style',
    skill: 'Essay structure: introduction, development, and conclusion conventions',
    description: 'A well-structured IAL essay opens with a thesis statement, develops through focused analytical paragraphs, and closes with a conclusion that reflects on the question in light of the argument made. Each element has specific grammatical and stylistic conventions.',
    examApplication: 'Introduction: state your argument directly, signpost your main points, avoid plot summary. Body paragraphs: topic sentence, evidence, analysis, link to question. Conclusion: do not introduce new points; reflect and synthesise without repeating the introduction verbatim.',
    examples: [
      'Introduction: "Throughout [text], [author] consistently presents [theme] as [nuanced claim], inviting readers to question [wider concern]."',
      'Conclusion: "Ultimately, [author\'s] treatment of [theme] reveals a profound tension between [X] and [Y] that the text refuses to resolve."',
    ],
    markSchemeLink: 'AO1 - structured and developed response; mark scheme guidance on essay shape',
  },
  {
    id: 'ial-acc-10',
    level: 'IAL',
    category: 'grammar',
    skill: 'Relative clauses for precise definition in analytical sentences',
    description: 'Defining relative clauses (using "that") and non-defining relative clauses (using "which", set off by commas) are both used frequently in literary analysis. Using them incorrectly creates ambiguity or alters meaning.',
    examApplication: 'Use "that" for defining clauses (essential to meaning): "The image that recurs throughout the play...". Use "which" with commas for non-defining clauses (additional information): "The soliloquy, which opens Act III, marks a turning point...".',
    examples: [
      '"The metaphors that Fitzgerald uses in the opening chapter establish the novel\'s central concerns."',
      '"The green light, which recurs throughout the novel, symbolises the elusiveness of Gatsby\'s dream."',
    ],
    markSchemeLink: 'AO4 - grammatical accuracy and precision; clarity of analytical argument',
  },
  {
    id: 'ial-acc-11',
    level: 'IAL',
    category: 'vocabulary',
    skill: 'Nominalisation for academic formality',
    description: 'Nominalisation converts verbs or adjectives into nouns, creating a more abstract and formal register typical of academic writing. "He rejects" becomes "his rejection of"; "the text is ambiguous" becomes "the text\'s ambiguity".',
    examApplication: 'Use nominalisation to condense complex ideas and maintain academic register, particularly in topic sentences and conclusions. Do not overuse -- nominalisation-heavy writing can become opaque. Balance with clear active-verb sentences.',
    examples: [
      '"Dickens\' condemnation of the Poor Law is..." (not "Dickens condemns the Poor Law, and this shows...")',
      '"The suppression of female agency in the novel..." (not "Women are suppressed in the novel...")',
    ],
    markSchemeLink: 'AO4 - vocabulary range; AO1 - academic register in written argument',
  },
  {
    id: 'ial-acc-12',
    level: 'IAL',
    category: 'punctuation',
    skill: 'Semicolons in analytical argument for parallel structure',
    description: 'Semicolons can list parallel analytical points within a single sentence, maintaining grammatical balance and signalling the equal weight of each element. This is an advanced punctuation strategy rewarded in IAL upper-band descriptors.',
    examApplication: 'Use a semicolon list to present multiple effects of a single technique in parallel: "The tricolon amplifies the sense of accumulation; it enacts the very excess it describes; and it positions the reader as both witness and participant."',
    examples: [
      '"The imagery is simultaneously beautiful and threatening; tender and violent; intimate and alienating."',
      '"Austen exposes the absurdity of the marriage market; she satirises the male characters\' self-importance; and she grants her heroine an ironic detachment that is itself a form of power."',
    ],
    markSchemeLink: 'AO4 - ambitious and accurate punctuation; AO1 - sophisticated expression of argument',
  },
  {
    id: 'ial-acc-13',
    level: 'IAL',
    category: 'style',
    skill: 'Embedding contextual knowledge without disrupting analytical flow',
    description: 'Context (historical, biographical, literary-historical) must be woven into the analysis rather than stated separately. AO3 marks are awarded for context that is directly relevant to the interpretation, not for standalone biographical paragraphs.',
    examApplication: 'Integrate context within an analytical sentence: "Writing in the shadow of the First World War, Sassoon constructs a speaker whose bitterness..." Avoid: "Wilfred Owen was born in 1893. He fought in World War One. This influenced his poetry."',
    examples: [
      '"As a product of the Victorian era\'s rigid class system, Pip\'s social aspiration carries inherent irony -- the very system he wishes to enter is the one Dickens critiques."',
      '"Informed by her own experience of financial dependence, Austen presents the marriage plot not as romance but as economic survival."',
    ],
    markSchemeLink: 'AO3 - contexts integrated into argument; AO1 - coherent and precise written expression',
  },
  {
    id: 'ial-acc-14',
    level: 'IAL',
    category: 'grammar',
    skill: 'Conditional and modal syntax for hypothetical argument',
    description: 'Advanced analysis often requires hypothetical reasoning: what would happen if we apply a different reading? Modal verbs (might, could, would) and conditional structures (if...then, were...to) are the grammatical vehicles for this kind of argument.',
    examApplication: 'Use "were one to read this as..." or "if the reader adopts a post-colonial lens..." to introduce alternative interpretations. Ensure that conditional sentences are grammatically complete and that the consequent clause follows logically.',
    examples: [
      '"Were the novel to end here, the reader would be left with a profoundly pessimistic view of human nature."',
      '"If we read Caliban as a colonial subject rather than a monster, the entire power dynamic of the play is reframed."',
    ],
    markSchemeLink: 'AO1 - complexity and sophistication of argument; AO4 - grammatical range',
  },
  {
    id: 'ial-acc-15',
    level: 'IAL',
    category: 'accuracy',
    skill: 'Proofreading under timed conditions: a self-monitoring strategy',
    description: 'IAL students must develop a rapid and systematic proofreading strategy for the final two to three minutes of each response. Targets: apostrophe errors, tense consistency, subject-verb agreement, sentence demarcation, and incomplete sentences.',
    examApplication: 'Use a five-point timed check: (1) full stops and capitals, (2) apostrophes, (3) tense consistency, (4) any sentences that begin with "Because" or "Although" and lack a main clause, (5) register slip. Mark errors with a single underline and correct above the line.',
    examples: [
      'Correction strategy: underline the error, write the correction directly above it.',
      'Final-minute priority: demarcation errors cost the most marks per minute spent correcting.',
    ],
    markSchemeLink: 'AO4 - overall accuracy across the response; examiner guidance on mark-scheme banding',
  },

];

// =============================================================================
// ADVANCED WRITING TECHNIQUES (20 techniques for IGCSE+ writing)
// =============================================================================

export const advancedWritingTechniques: WritingTechnique[] = [

  {
    id: 'awt-01',
    name: 'Anaphora',
    definition: 'The deliberate repetition of a word or phrase at the beginning of successive clauses, sentences, or lines. It builds rhythm, emphasis, and emotional cumulation.',
    whenToUse: 'Use in persuasive speeches, argumentative writing, and creative prose to build rhetorical momentum and reinforce a central idea. Particularly powerful in a conclusion or climactic paragraph.',
    exampleSentence: 'We will fight for the voiceless. We will fight for the forgotten. We will fight until justice is no longer a privilege but a right.',
    examinerAdvice: 'Examiners reward anaphora when it is purposeful and controlled. Identify not just the technique but its cumulative effect -- each repetition should add weight, not merely repeat. Comment on the rhythm it creates and the sense of inevitability it builds.',
  },
  {
    id: 'awt-02',
    name: 'Epistrophe',
    definition: 'The repetition of a word or phrase at the end of successive clauses or sentences (the reverse of anaphora). It creates a hammering, insistent effect that reinforces the closing idea.',
    whenToUse: 'Use in persuasive and argumentative writing to land a point with force. Works particularly well in a list of parallel structures where you want the repeated term to feel inevitable.',
    exampleSentence: 'The city was theirs. The future was theirs. Everything they had ever wanted was theirs.',
    examinerAdvice: 'Epistrophe is less commonly identified than anaphora, so naming it precisely demonstrates a wider technical vocabulary. Explain how the repeated ending creates a sense of accumulation and finality -- the idea literally has the last word.',
  },
  {
    id: 'awt-03',
    name: 'Tricolon',
    definition: 'A rhetorical structure that groups three parallel elements -- words, phrases, or clauses -- in sequence. The third element often carries the greatest weight, acting as the climax of the sequence.',
    whenToUse: 'Use in persuasive, descriptive, and narrative writing wherever a list or sequence is needed. Three-part structures feel complete and satisfying to readers. The third element should be the strongest.',
    exampleSentence: 'The landscape was vast, silent, and utterly indifferent to human suffering.',
    examinerAdvice: 'Distinguish between a simple list and a deliberate tricolon -- a tricolon has the three parts arranged for effect, often in ascending order of intensity (climactic tricolon). Identifying this progression in analysis demonstrates close reading.',
  },
  {
    id: 'awt-04',
    name: 'Asyndeton',
    definition: 'The deliberate omission of conjunctions between items in a list or sequence, creating a breathless, urgent, or stark effect through the abruptness of juxtaposed elements.',
    whenToUse: 'Use in narrative writing to create pace, urgency, or a sense of overwhelming sensation. In persuasive writing, asyndeton can make a list feel unstoppable, as though there is too much evidence to be linked by ordinary connectives.',
    exampleSentence: 'She ran, stumbled, fell, rose, kept moving.',
    examinerAdvice: 'Asyndeton is often confused with simple parataxis. The key analytical point is the omission of expected conjunctions -- the gap between items does rhetorical work. In an exam response, explain what the missing conjunction does: it accelerates, shocks, or overwhelms.',
  },
  {
    id: 'awt-05',
    name: 'Polysyndeton',
    definition: 'The deliberate use of multiple conjunctions in close succession, typically more conjunctions than would be strictly necessary, to create a sense of accumulation, abundance, or relentlessness.',
    whenToUse: 'Use in descriptive and narrative writing to suggest that events or elements keep coming without pause. Can convey abundance (everything piling up wonderfully) or suffocation (nothing ever stops).',
    exampleSentence: 'There was mud and rain and cold and darkness and the constant sound of boots on cobblestones.',
    examinerAdvice: 'Contrast polysyndeton with asyndeton to demonstrate understanding of how conjunctions shape rhythm and meaning. The repeated "and" slows the reader down, adding weight to each element. It can feel biblical in register -- examiners reward this kind of contextual awareness.',
  },
  {
    id: 'awt-06',
    name: 'Zeugma',
    definition: 'A figure in which a single word (typically a verb) governs two or more other words in the same sentence, often in a way that creates a surprising or darkly comic juxtaposition of the literal and the figurative.',
    whenToUse: 'Use in satire, irony, and witty persuasive writing. Zeugma creates a jarring effect when the two objects of the governing word belong to entirely different registers, exposing incongruity or absurdity.',
    exampleSentence: 'She left the room and all his hopes behind her.',
    examinerAdvice: 'Zeugma is one of the most sophisticated techniques on this list. In analysis, identify the governing word and both objects, then explain the effect of the tonal collision between them. Examiners will be impressed by accurate identification and a sharp explanation of the incongruity.',
  },
  {
    id: 'awt-07',
    name: 'Chiasmus',
    definition: 'A rhetorical figure in which the grammatical structure of a clause or phrase is reversed in a subsequent clause, creating an ABBA pattern. The reversal creates symmetry, balance, and a sense of complete thought.',
    whenToUse: 'Use in formal argumentative and persuasive writing, particularly in conclusion sentences or thesis statements where you want to make a point feel definitive and perfectly formed.',
    exampleSentence: 'Ask not what your country can do for you -- ask what you can do for your country.',
    examinerAdvice: 'Chiasmus requires careful explanation -- simply noting that words are reversed is insufficient. Explain how the reversal reframes the original idea, creating a new perspective or a sense of philosophical completeness. Note whether the reversal creates irony or clarification.',
  },
  {
    id: 'awt-08',
    name: 'Litotes',
    definition: 'Understatement achieved by negating the opposite of what is meant: "not bad" for "good", "not unknown" for "famous". It creates irony, dry wit, or deliberate restraint.',
    whenToUse: 'Use in persuasive and satirical writing to create understatement with ironic effect. Particularly effective when describing something extreme in notably calm terms -- the gap between the muted language and the intense reality creates impact.',
    exampleSentence: 'The destruction of the entire village was not entirely without consequence.',
    examinerAdvice: 'Litotes is closely related to irony and understatement. In analysis, explain that the technique draws attention to itself through its refusal to say what it means directly. The reader is forced to supply the intensified version, making the point more memorable. This is particularly common in war poetry and satire.',
  },
  {
    id: 'awt-09',
    name: 'Hyperbole',
    definition: 'Deliberate exaggeration for emphasis or comic effect, not intended to be taken literally. Hyperbole amplifies the emotional or persuasive impact of a statement by inflating it beyond realistic proportions.',
    whenToUse: 'Use in persuasive, satirical, and descriptive writing to intensify emotion or expose absurdity. In analysis, look for hyperbole in character speech to reveal emotional state or self-delusion.',
    exampleSentence: 'The silence lasted an eternity; the entire world seemed to hold its breath.',
    examinerAdvice: 'In analysis, always specify what the hyperbole reveals about a character\'s state of mind or a writer\'s satirical target. Hyperbole in persuasive writing signals emotional investment; in satirical writing, it exposes the subject\'s self-importance by inflating it to absurdity.',
  },
  {
    id: 'awt-10',
    name: 'Bathos',
    definition: 'A sudden and jarring descent from the elevated to the trivial or absurd, either for comic or deflating effect. It punctures pretension by following a grand statement with something mundanely anti-climactic.',
    whenToUse: 'Use in satirical and humorous writing to deflate pomposity or self-importance. In analysis, bathos often signals an author\'s satirical intent -- the prose builds expectation, then deliberately disappoints it.',
    exampleSentence: 'He had survived two wars, three continents, and countless tragedies -- and then slipped on a banana skin outside Marks and Spencer.',
    examinerAdvice: 'Distinguish bathos from pathos -- bathos is the unintentional or deliberate anticlimax; pathos is genuine emotional tenderness. In analysis, explain that bathos works by violation of expectation: the reader is primed for elevation and receives the mundane instead. Identify whether the author intends comedy or a darker commentary.',
  },
  {
    id: 'awt-11',
    name: 'Pathetic Fallacy',
    definition: 'The attribution of human emotions or characteristics to the natural world, particularly weather and landscape, so that the external environment reflects the internal emotional state of a character or the mood of a scene.',
    whenToUse: 'Use in descriptive and narrative writing to establish or reinforce mood without explicit emotional statement. In analysis, look for pathetic fallacy at scene transitions, at moments of emotional intensity, or as structural foreshadowing.',
    exampleSentence: 'The clouds gathered and the wind turned cold as she read the letter.',
    examinerAdvice: 'Pathetic fallacy is widely identified but often under-analysed. Move beyond "the weather reflects the character\'s feelings" to explain the specific emotional register (menace, desolation, hope) and how it functions structurally -- does it foreshadow, underscore, or ironically contradict the human action?',
  },
  {
    id: 'awt-12',
    name: 'Aposiopesis',
    definition: 'An abrupt, deliberate breaking off of a sentence in the middle, leaving it unfinished. It suggests an emotion too powerful to complete, a thought too disturbing to voice, or a speaker unable or unwilling to continue.',
    whenToUse: 'Use in dialogue, dramatic monologue, and emotionally intense narrative moments. The incomplete sentence invites the reader to complete it in their imagination, often to more powerful effect than any explicit statement.',
    exampleSentence: 'If you dare to -- he stopped. The words would not come.',
    examinerAdvice: 'Identify aposiopesis by the dash or ellipsis that marks the interruption. In analysis, explain that the unsaid content does rhetorical work: its very absence creates meaning. Ask what cannot be said and why -- this often reveals the deepest anxiety in a text.',
  },
  {
    id: 'awt-13',
    name: 'Apostrophe (rhetorical)',
    definition: 'Direct address to an absent, dead, or abstract entity as though it were present and capable of responding. It is a device of intense emotional or rhetorical directness.',
    whenToUse: 'Use in poetry, elegies, speeches, and impassioned prose. Particularly effective when addressing concepts (justice, time, death) or absent figures, creating a sense of urgency and direct confrontation with the subject.',
    exampleSentence: 'O Death, you who take everything without permission, when will you learn mercy?',
    examinerAdvice: 'Distinguish clearly from the punctuation mark apostrophe. In analysis, explain that the direct address creates immediacy and emotional intensity -- the speaker refuses to discuss the subject abstractly and instead confronts it. It also positions the reader as witness to a very private act of address.',
  },
  {
    id: 'awt-14',
    name: 'Synecdoche',
    definition: 'A figure of speech in which a part of something is used to represent the whole, or the whole is used to represent a part. It compresses complex ideas into single striking images.',
    whenToUse: 'Use in poetry and literary prose to create compressed, resonant images. In analysis, synecdoche often signals a thematic focus -- the part chosen to represent the whole tells us what the author values or critiques.',
    exampleSentence: 'All hands on deck. (hands = sailors)',
    examinerAdvice: 'Distinguish synecdoche from metonymy (which substitutes a related concept rather than a part for the whole). In analysis, explain which part has been selected and why -- the choice of part reveals what the speaker or narrator focuses on, which is itself a form of characterisation or thematic emphasis.',
  },
  {
    id: 'awt-15',
    name: 'Metonymy',
    definition: 'A figure of speech in which something is referred to by the name of something closely associated with it rather than its own name. Crown for monarchy, pen for writing, stage for the theatre profession.',
    whenToUse: 'Use to create compact, resonant references to institutions, concepts, or complex ideas. In analysis, metonymy reveals cultural assumptions -- the substitute object chosen tells us what associations the speaker makes.',
    exampleSentence: 'The pen is mightier than the sword. (pen = intellectual argument; sword = military force)',
    examinerAdvice: 'Metonymy is often conflated with metaphor. The key difference is that metonymy relies on real-world association (crown and monarchy are genuinely connected); metaphor relies on imaginative comparison. In analysis, explain what the substituted term connotes that the literal term does not.',
  },
  {
    id: 'awt-16',
    name: 'Prolepsis (Foreshadowing)',
    definition: 'A narrative technique in which a future event is anticipated, hinted at, or directly disclosed earlier in the text. It creates suspense, dramatic irony, and structural unity.',
    whenToUse: 'Use in narrative writing to create a sense of fate or inevitability, or to establish dramatic irony (the reader knows more than the character). In analysis, track prolepsis to reveal the author\'s control of narrative structure.',
    exampleSentence: 'She kept the photograph in her pocket -- though she did not yet know it would be the last thing she ever touched.',
    examinerAdvice: 'Distinguish prolepsis (anticipating the future) from analepsis (returning to the past). In analysis, explain how foreshadowing affects the reader\'s experience of the narrative: knowledge of the outcome changes how we read every preceding moment. This is particularly significant in tragedy.',
  },
  {
    id: 'awt-17',
    name: 'Euphemism',
    definition: 'The substitution of a mild, indirect, or vague expression for one that might be considered harsh, blunt, or offensive. Euphemism often reveals societal anxieties about what cannot be spoken directly.',
    whenToUse: 'Use deliberately in writing to reveal a speaker\'s discomfort, social conditioning, or manipulation. In analysis, euphemism often signals what a society considers taboo or shameful -- the fact that something must be softened tells us about the values it threatens.',
    exampleSentence: '"He passed away last Tuesday," she said, unable to bring herself to use the word.',
    examinerAdvice: 'In analysis, the most sophisticated response to euphemism is not just to identify it but to ask what it conceals and why. In political contexts, euphemism ("collateral damage", "enhanced interrogation") is a form of manipulation. In personal contexts, it reveals emotional vulnerability or social conditioning.',
  },
  {
    id: 'awt-18',
    name: 'Oxymoron',
    definition: 'The deliberate juxtaposition of two apparently contradictory terms in close proximity, creating a paradoxical phrase that captures a complex, self-contradictory reality.',
    whenToUse: 'Use in poetry, literary prose, and analytical writing about paradox and contradiction. Oxymoron is particularly effective for expressing internal conflict, moral ambiguity, or the coexistence of opposites.',
    exampleSentence: 'It was a deafening silence that followed the announcement.',
    examinerAdvice: 'Avoid noting oxymoron without explaining the tension it contains. In analysis, identify the two contradictory terms and explain what the juxtaposition suggests: which quality predominates? Does the phrase suggest that opposites can coexist, or that a transformation has occurred (silence so powerful it is deafening)?',
  },
  {
    id: 'awt-19',
    name: 'Volta',
    definition: 'The rhetorical or thematic "turn" in a poem, typically marked by a shift in argument, emotion, perspective, or tone. In sonnets, the volta traditionally occurs at the start of the sestet (line 9) or the final couplet.',
    whenToUse: 'Relevant in poetry analysis at IGCSE and IAL. Identifying and explaining the volta is a key analytical skill. In creative writing, deliberately structuring a turn in a poem or an extended metaphor demonstrates formal awareness.',
    exampleSentence: 'Octave: fourteen lines of building argument. Sestet: But -- and here the poet reconsiders everything.',
    examinerAdvice: 'Do not describe the volta simply as "a change". Explain the nature of the turn: is it a qualification, a contradiction, a resolution, a deepening? Analyse how the two halves of the poem relate -- the volta is the hinge on which meaning turns.',
  },
  {
    id: 'awt-20',
    name: 'Enjambment',
    definition: 'In poetry, the continuation of a sentence or phrase beyond the end of a line without a pause, so that the syntax runs on into the following line. It creates momentum, mimics spoken thought, and can create surprise when the meaning of the first line is modified or reversed by the second.',
    whenToUse: 'Relevant in all poetry analysis. In creative writing, deliberately using enjambment in a student poem demonstrates formal control. In analysis, look for where enjambment is used and where end-stopping is used -- the contrast is always meaningful.',
    exampleSentence: 'I have eaten / the plums / that were in / the icebox',
    examinerAdvice: 'The most important thing to analyse about enjambment is what happens at the line break. What word is isolated at the end? What word opens the next line? These positions of emphasis are rarely accidental. Also consider whether the enjambment creates a syntactic ambiguity that momentarily gives a word or phrase a second meaning before the sentence resolves.',
  },

];
