// ===============================================================================
// Revision Guides -- Y7 to Y13
// ===============================================================================
// RevisionCard[]  -- 30 cards: 10 KS3 | 12 IGCSE | 8 IAL
// RevisionPlan[]  --  5 plans: Y9 end-of-year | IGCSE mocks x2 | IAL exams | IAL coursework
// ===============================================================================

// -- Interfaces ----------------------------------------------------------------

export interface RevisionCard {
  id: string;
  topic: string;
  yearGroup: string;
  subject: string;
  keyPoints: string[];
  definitions: { term: string; definition: string }[];
  examTips: string[];
  practiceQuestion: string;
  modelAnswerPoints: string[];
}

export interface RevisionPlan {
  id: string;
  title: string;
  yearGroup: string;
  examDate: string;
  weeksAvailable: number;
  weekByWeekPlan: {
    week: number;
    focus: string;
    tasks: string[];
    selfAssessment: string;
  }[];
  topTips: string[];
}

// -- Revision Cards -------------------------------------------------------------
// KS3 cards: rc-ks3-01 to rc-ks3-10
// IGCSE cards: rc-ig-01 to rc-ig-12
// IAL cards: rc-ial-01 to rc-ial-08

export const revisionCards: RevisionCard[] = [

  // -- KS3 (Y7-Y9) -------------------------------------------------------------

  {
    id: 'rc-ks3-01',
    topic: 'Reading Fiction: Key Skills',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Read closely and track how language changes across a text.',
      'Identify the writer\'s purpose: to entertain, disturb, move, or provoke the reader.',
      'Comment on structure -- how the opening differs from the ending and why.',
      'Select precise quotations and embed them into your sentences.',
      'Use the word "suggests" or "implies" to show inference rather than fact.',
    ],
    definitions: [
      { term: 'Inference', definition: 'Reading between the lines -- working out what the writer implies but does not state directly.' },
      { term: 'Connotation', definition: 'The associations or feelings a word carries beyond its literal meaning.' },
      { term: 'Narrative perspective', definition: 'The point of view from which a story is told (first person, third person limited, omniscient).' },
      { term: 'Foreshadowing', definition: 'Hints or clues early in a text that suggest later events.' },
    ],
    examTips: [
      'Always quote -- a point without evidence scores no marks.',
      'Comment on the effect on the reader, not just what the writer does.',
      'Avoid saying "the writer uses this technique to make it more interesting" -- be specific.',
      'Aim for at least three separate points in any 10-mark response.',
    ],
    practiceQuestion: 'How does the writer present the character of the stranger in this extract? (10 marks)',
    modelAnswerPoints: [
      'Identify a specific method the writer uses (e.g., metaphor, syntax, dialogue).',
      'Embed a short, precise quotation.',
      'Explain the connotations of key words in the quotation.',
      'State the effect on the reader and link to the writer\'s wider purpose.',
      'Repeat this structure for at least two further points.',
    ],
  },

  {
    id: 'rc-ks3-02',
    topic: 'Writing to Describe',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Engage all five senses -- sight alone is not enough.',
      'Use a clear viewpoint: is the narrator inside or outside the scene?',
      'Vary sentence length: short sentences create tension; longer ones build atmosphere.',
      'Show, don\'t tell: replace "she was afraid" with physical or behavioural detail.',
      'Control pace by zooming in on small details then pulling back to the wider scene.',
    ],
    definitions: [
      { term: 'Zooming technique', definition: 'Starting with a wide view of a scene then focusing in on a precise detail, or vice versa.' },
      { term: 'Pathetic fallacy', definition: 'Using weather or the natural world to reflect a character\'s mood.' },
      { term: 'Sensory imagery', definition: 'Descriptive language that appeals to sight, sound, smell, taste, or touch.' },
      { term: 'List of three', definition: 'Three items grouped together, often to build rhythm or emphasis.' },
    ],
    examTips: [
      'Spend 5 minutes planning before you write -- identify your viewpoint and three key images.',
      'Vary your sentence openings: not every sentence should start with "The".',
      'Use a single extended metaphor to give your writing cohesion.',
      'Re-read your work and cut any word that does not earn its place.',
    ],
    practiceQuestion: 'Describe a place that has been abandoned. (20 marks)',
    modelAnswerPoints: [
      'Establish a clear setting and viewpoint in the opening sentence.',
      'Use at least two different sensory details in the first paragraph.',
      'Deploy pathetic fallacy or extended metaphor to create mood.',
      'Vary sentence structure deliberately for effect.',
      'Close with a detail that echoes the opening for structural cohesion.',
    ],
  },

  {
    id: 'rc-ks3-03',
    topic: 'Grammar and Punctuation Essentials',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'A sentence needs a subject and a finite verb.',
      'Use a comma after a fronted adverbial (e.g., "Slowly, she opened the door.").',
      'Semicolons join two closely related independent clauses.',
      'Colons introduce lists, explanations, or a dramatic second clause.',
      'Apostrophes mark contraction (it\'s = it is) or possession (the girl\'s bag).',
    ],
    definitions: [
      { term: 'Subordinate clause', definition: 'A clause that cannot stand alone as a sentence; it depends on the main clause.' },
      { term: 'Fronted adverbial', definition: 'An adverbial phrase placed at the start of a sentence before the main clause.' },
      { term: 'Relative clause', definition: 'A clause beginning with who, which, that, or whose that gives more information about a noun.' },
      { term: 'Parenthesis', definition: 'Additional information inserted into a sentence using brackets, dashes, or paired commas.' },
    ],
    examTips: [
      'Read your work aloud -- if you need to breathe, you probably need a punctuation mark.',
      'Never use a comma to join two complete sentences (comma splice).',
      '"Its" (possessive) never has an apostrophe; "it\'s" always means "it is".',
      'Use a variety of punctuation marks -- relying only on full stops limits your marks.',
    ],
    practiceQuestion: 'Rewrite the following paragraph inserting correct punctuation: "the old house stood at the end of the lane its windows were dark no one had lived there since 1987 nobody knew why the family left"',
    modelAnswerPoints: [
      'Full stop after "lane".',
      'Comma or semicolon to separate the clause about the windows.',
      'Correct use of apostrophe in "its" (possessive, no apostrophe needed here).',
      'Possible use of a dash or colon before "nobody knew why" for effect.',
    ],
  },

  {
    id: 'rc-ks3-04',
    topic: 'Analytical Writing: The PEE Paragraph',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Point -- make a clear, debatable claim about the text.',
      'Evidence -- embed a precise quotation (not a long block of text).',
      'Explain -- unpack the language, connotations, and effect on the reader.',
      'Each paragraph should advance your argument, not repeat it.',
      'Link back to the question in your final sentence of the paragraph.',
    ],
    definitions: [
      { term: 'Analytical verb', definition: 'A verb used to comment on a writer\'s choices: suggests, implies, conveys, reveals, portrays.' },
      { term: 'Embedded quotation', definition: 'A quotation woven into your own sentence rather than placed alone on a separate line.' },
      { term: 'Textual evidence', definition: 'Words taken directly from the source text to support a point.' },
      { term: 'Discourse marker', definition: 'A word or phrase that links ideas: furthermore, however, in contrast, consequently.' },
    ],
    examTips: [
      'Avoid starting with "In this text..." -- launch straight into your point.',
      'Keep quotations short: one or two key words often say more than a whole sentence.',
      'Use a variety of analytical verbs -- not just "shows".',
      'End every paragraph by referring back to the original question.',
    ],
    practiceQuestion: 'Write one well-developed PEE paragraph in response to: How does Dickens present Scrooge as unwilling to engage with the world around him?',
    modelAnswerPoints: [
      'Opening point that uses a specific analytical claim (e.g., Scrooge is shown as wilfully self-isolating).',
      'Short embedded quotation (e.g., "solitary as an oyster").',
      'Comment on connotations of key word (e.g., "oyster" implies a sealed, cold exterior and a refusal to share inner warmth).',
      'Reference to Dickens\'s purpose: critiquing individualism in Victorian society.',
      'Link sentence connecting point back to the question.',
    ],
  },

  {
    id: 'rc-ks3-05',
    topic: 'Comparison Technique',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Comparison means more than listing features from two texts separately.',
      'Use a comparative structure: Text A does X, whereas Text B does Y.',
      'Compare method (how) as well as message (what).',
      'Identify similarities first, then explore meaningful differences.',
      'Reference both texts in every paragraph, not alternately text by text.',
    ],
    definitions: [
      { term: 'Comparative connective', definition: 'A word or phrase used to link two ideas: similarly, in contrast, whereas, unlike, on the other hand.' },
      { term: 'Method', definition: 'The specific technique or structural choice a writer makes (e.g., extended metaphor, second-person address).' },
      { term: 'Juxtaposition', definition: 'Placing two contrasting ideas, images, or characters side by side for effect.' },
      { term: 'Thematic link', definition: 'A shared idea or concern that connects two different texts.' },
    ],
    examTips: [
      'Never write about one text fully before switching to the other -- weave them together.',
      'Aim for genuine comparison, not two separate mini-essays.',
      'Identify the purpose of each text first -- purpose often explains the method chosen.',
      'Use hedged language when appropriate: "both writers explore... though they do so differently by..."',
    ],
    practiceQuestion: 'Compare how two of the texts you have studied this year present the theme of power. (20 marks)',
    modelAnswerPoints: [
      'Opening sentence that names both texts and makes a comparative claim.',
      'Integrated reference to both texts in each body paragraph.',
      'Comment on different methods used to explore the same theme.',
      'At least one paragraph discussing a similarity and one discussing a difference.',
      'Conclusion that offers a nuanced judgment about which text presents the theme more effectively.',
    ],
  },

  {
    id: 'rc-ks3-06',
    topic: 'Poetry Reading: Form, Structure and Language',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Form includes the type of poem (sonnet, ballad, free verse) and its visual appearance.',
      'Structure includes stanza length, line breaks, enjambment, and caesura.',
      'A line break at an unexpected place forces the reader to pause and reconsider meaning.',
      'Sound devices (rhyme, rhythm, alliteration, assonance) create mood and pace.',
      'Always consider the speaker: is the poet speaking, or a created persona?',
    ],
    definitions: [
      { term: 'Enjambment', definition: 'When a sentence or phrase runs over from one line to the next without a pause.' },
      { term: 'Caesura', definition: 'A pause within a line of poetry, usually created by punctuation.' },
      { term: 'Volta', definition: 'A turn in a poem where the argument, tone, or mood shifts -- most commonly in a sonnet.' },
      { term: 'Iambic pentameter', definition: 'A metre of ten syllables per line with alternating unstressed and stressed beats (da-DUM x5).' },
    ],
    examTips: [
      'Always comment on why a structural choice is effective, not just that it exists.',
      'Avoid saying "the poet uses rhyme to make the poem flow" -- explain the specific effect.',
      'Read the poem twice before writing: once for meaning, once for technique.',
      'Consider how the poem\'s ending relates to its beginning.',
    ],
    practiceQuestion: 'Explore how the poet uses form and structure to convey feelings of loss in this poem.',
    modelAnswerPoints: [
      'Comment on the overall form and what mood it creates.',
      'Identify a specific structural choice (e.g., shortening stanza, use of caesura) and explain its effect.',
      'Link structural choices to the poem\'s emotional journey.',
      'Reference sound devices and explain how they contribute to tone.',
      'Discuss the ending: does the poem resolve the feeling of loss or leave it open?',
    ],
  },

  {
    id: 'rc-ks3-07',
    topic: 'Non-Fiction Reading: Evaluating Argument',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Identify the writer\'s main argument in a single sentence before analysing.',
      'Rhetorical techniques include: direct address, rhetorical questions, rule of three, hyperbole.',
      'Consider the intended audience and how this shapes the choices made.',
      'Evaluate means judging how effectively the writer achieves their purpose.',
      'Counter-argument: identify where the writer anticipates opposing views.',
    ],
    definitions: [
      { term: 'Rhetoric', definition: 'The art of persuasive speaking or writing; techniques used to convince an audience.' },
      { term: 'Ethos', definition: 'Establishing credibility or moral authority to persuade the reader.' },
      { term: 'Pathos', definition: 'Appealing to the reader\'s emotions to win sympathy or support.' },
      { term: 'Logos', definition: 'Using facts, statistics, or logical reasoning to support an argument.' },
    ],
    examTips: [
      'Comment on the specific words chosen, not just the technique name.',
      'Always link your point back to the writer\'s overall purpose.',
      'Note where the argument is weakest as well as strongest.',
      'Use the phrase "this is persuasive because..." to keep your answer focused on evaluation.',
    ],
    practiceQuestion: 'How does the writer try to persuade the reader that social media is harmful to young people? Evaluate how effectively the writer achieves this. (15 marks)',
    modelAnswerPoints: [
      'Identify the key argument in the opening.',
      'Analyse specific rhetorical techniques with embedded quotation.',
      'Evaluate effectiveness: what works well and why?',
      'Identify at least one weakness or limitation in the argument.',
      'Conclude with an overall judgment on persuasive effectiveness.',
    ],
  },

  {
    id: 'rc-ks3-08',
    topic: 'Narrative Writing: Openings and Endings',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'A strong opening hooks the reader immediately -- in medias res, striking image, or unsettling statement.',
      'Establish character, setting, or conflict within the first paragraph.',
      'Endings should feel inevitable yet surprising -- avoid the obvious resolution.',
      'Circular structure: ending echoes the opening to create a sense of completion.',
      'Consider pace: slow down at the most important moments, speed up transitions.',
    ],
    definitions: [
      { term: 'In medias res', definition: 'Starting in the middle of the action rather than from the beginning.' },
      { term: 'Circular structure', definition: 'A narrative that ends by returning to the same setting, image, or phrase as the opening.' },
      { term: 'Cliffhanger', definition: 'An ending that leaves a question unanswered to create suspense.' },
      { term: 'Resolution', definition: 'The point in the narrative where the central conflict is settled or explained.' },
    ],
    examTips: [
      'Your opening line is the most important sentence you write -- make every word count.',
      'Avoid starting with "One day..." or waking up from a dream.',
      'Plan your ending before you start writing -- everything should build toward it.',
      'Leave the reader with a final image or question rather than a tidy summary.',
    ],
    practiceQuestion: 'Write the opening of a story in which a character discovers something unexpected. (20 marks)',
    modelAnswerPoints: [
      'First sentence creates immediate intrigue or tension.',
      'Clear narrative voice established within two sentences.',
      'Setting introduced through specific, vivid detail.',
      'Character emotion shown through action or body language, not stated directly.',
      'A hint at the story\'s conflict by the end of the opening paragraph.',
    ],
  },

  {
    id: 'rc-ks3-09',
    topic: 'Vocabulary and Word-Level Analysis',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Word class matters: a noun anchors meaning; a verb drives action; an adjective colours.',
      'Consider register: formal, informal, colloquial, archaic, technical.',
      'Semantic field: a group of words sharing a theme creates sustained mood.',
      'Ambiguity: a word with two meanings can create deliberate complexity.',
      'Etymology can reveal layers of meaning -- Latin and Greek roots are common in literary language.',
    ],
    definitions: [
      { term: 'Register', definition: 'The level of formality in language, suited to a specific audience or context.' },
      { term: 'Semantic field', definition: 'A group of words in a text that share a common theme or area of meaning.' },
      { term: 'Lexical choice', definition: 'The deliberate selection of specific words by a writer for effect.' },
      { term: 'Ambiguity', definition: 'A word or phrase that can be interpreted in more than one way.' },
    ],
    examTips: [
      'When you find a powerful word, ask yourself: why this word and not a synonym?',
      'Identify the semantic field before commenting on individual words.',
      'Avoid "the writer uses this word to make the reader think" -- be precise about what the reader thinks.',
      'Short quotations allow you to analyse individual words in depth.',
    ],
    practiceQuestion: 'Analyse how the writer uses language to present the city as threatening in this passage.',
    modelAnswerPoints: [
      'Identify the semantic field established in the passage.',
      'Select two or three individual words for close lexical analysis.',
      'Comment on connotations and word class for each chosen word.',
      'Link the language choices to the overall mood and writer\'s purpose.',
      'Consider any shift in the semantic field across the extract.',
    ],
  },

  {
    id: 'rc-ks3-10',
    topic: 'Writing to Argue and Persuade',
    yearGroup: 'KS3',
    subject: 'English',
    keyPoints: [
      'Argument presents a case for a viewpoint using evidence and reasoning.',
      'Persuasion uses emotion, appeals to shared values, and rhetorical techniques.',
      'Structure: introduction (hook + thesis), body (evidence and counter-argument), conclusion (call to action).',
      'Counter-argument and rebuttal shows intellectual confidence.',
      'Tone must match purpose: passionate, authoritative, concerned, or urgent.',
    ],
    definitions: [
      { term: 'Thesis statement', definition: 'The central argument stated clearly in the opening of a piece.' },
      { term: 'Rebuttal', definition: 'Addressing an opposing argument and explaining why it is less convincing.' },
      { term: 'Anecdote', definition: 'A short personal story used to illustrate a point and engage the reader emotionally.' },
      { term: 'Hyperbole', definition: 'Deliberate exaggeration used for emphasis or emotional effect.' },
    ],
    examTips: [
      'Open with a hook: a shocking fact, a question, or a bold statement.',
      'Never use "I think" -- use "It is clear that..." or "The evidence suggests...".',
      'Vary your sentence lengths to control the rhythm and energy of your argument.',
      'End with a call to action or a memorable final image, not a summary.',
    ],
    practiceQuestion: 'Write a speech arguing that schools should start an hour later in the morning. (20 marks)',
    modelAnswerPoints: [
      'Opening hook that engages the audience immediately.',
      'Clear thesis stated in the first paragraph.',
      'At least one piece of evidence or statistic (can be invented but must sound credible).',
      'Counter-argument acknowledged and rebutted.',
      'Persuasive conclusion with a call to action.',
    ],
  },

  // -- IGCSE (Y10-Y11) ----------------------------------------------------------

  {
    id: 'rc-ig-01',
    topic: 'IGCSE Language Paper 1: Reading Non-Fiction',
    yearGroup: 'IGCSE',
    subject: 'English Language',
    keyPoints: [
      'Paper 1 contains two non-fiction texts from different time periods.',
      'Section A: four reading questions testing comprehension, language analysis, and evaluation.',
      'Read the questions before the texts to know what to look for.',
      'Question 1: list/retrieve -- accuracy is key, no analysis needed.',
      'Question 4: evaluation -- judge how successfully the writer achieves their purpose.',
    ],
    definitions: [
      { term: 'Retrieval', definition: 'Finding and lifting information directly from the text without adding interpretation.' },
      { term: 'Evaluation', definition: 'Making a judgment about how effectively the writer achieves a specific purpose.' },
      { term: 'Synthesis', definition: 'Drawing together information from across a text (or two texts) to form a view.' },
      { term: 'Implicit meaning', definition: 'Meaning that is suggested rather than stated, requiring the reader to infer.' },
    ],
    examTips: [
      'For retrieval questions, use the marks as a guide: 4 marks = find 4 separate points.',
      'For language analysis, quote briefly and zoom in on individual words.',
      'For the evaluation question, structure your answer with a clear judgment and supporting paragraphs.',
      'Manage time: roughly 1 minute per mark.',
    ],
    practiceQuestion: 'In lines 15-30, how does the writer use language to convey the excitement of the crowd? (8 marks)',
    modelAnswerPoints: [
      'Opening statement identifying the dominant mood the language creates.',
      'Three to four analytical paragraphs each with short embedded quotation.',
      'Comment on word class, connotations, and specific effect for each quotation.',
      'Range of techniques identified (imagery, sentence structure, listing, sound).',
      'Final sentence linking language choices back to the writer\'s overall purpose.',
    ],
  },

  {
    id: 'rc-ig-02',
    topic: 'IGCSE Language Paper 1: Writing (Section B)',
    yearGroup: 'IGCSE',
    subject: 'English Language',
    keyPoints: [
      'Section B requires one extended writing task (40 marks: 24 content, 16 SPaG).',
      'Task types include: narrative, descriptive, or imaginative writing.',
      'Plan for 5 minutes before writing.',
      'SPaG carries 16 marks -- proofread in the final 3 minutes.',
      'Aim for structural sophistication: a clear shape, not just paragraphs in sequence.',
    ],
    definitions: [
      { term: 'Cohesion', definition: 'The way a piece of writing holds together through consistent voice, structure, and linked ideas.' },
      { term: 'Register', definition: 'The level of formality appropriate to audience and purpose.' },
      { term: 'SPaG', definition: 'Spelling, punctuation, and grammar -- assessed separately for accuracy and control.' },
      { term: 'Voice', definition: 'The distinctive personality and tone a writer projects through their language choices.' },
    ],
    examTips: [
      'Quality over quantity -- a focused 500-word response outscores an unfocused 800-word one.',
      'Vary your sentence structure deliberately within each paragraph.',
      'Show awareness of your reader -- directly address or engage them.',
      'Proofread for comma splices, apostrophes, and tense consistency.',
    ],
    practiceQuestion: 'Write a description of a city street at night. (40 marks)',
    modelAnswerPoints: [
      'Opening image that immediately establishes atmosphere.',
      'Use of at least two different sensory details.',
      'Varied sentence lengths for deliberate effect.',
      'A structural device (e.g., zoom, circular ending, shift in focus).',
      'Consistent tense and point of view throughout.',
    ],
  },

  {
    id: 'rc-ig-03',
    topic: 'IGCSE Language Paper 2: Transactional Writing',
    yearGroup: 'IGCSE',
    subject: 'English Language',
    keyPoints: [
      'Paper 2 requires writing for a specific purpose, audience, and form.',
      'Common forms: letter, article, report, speech, review.',
      'Marks are split between communication (purpose, audience, form) and written accuracy.',
      'Match formality of language to the stated audience.',
      'Use text features appropriate to the form (e.g., headline and subheadings for an article).',
    ],
    definitions: [
      { term: 'Form', definition: 'The type of writing expected -- letter, article, speech, report -- each with its own conventions.' },
      { term: 'Audience', definition: 'The intended reader(s) of a text; their age, knowledge, and expectations shape language choices.' },
      { term: 'Purpose', definition: 'The reason a text exists: to inform, persuade, advise, entertain, argue, or describe.' },
      { term: 'Convention', definition: 'The expected features of a form -- e.g., a formal letter uses "Dear Sir/Madam" and "Yours faithfully".' },
    ],
    examTips: [
      'Read the task twice: identify form, audience, and purpose before planning.',
      'Use appropriate openings and closings for letters and speeches.',
      'Include at least one counter-argument in any persuasive task.',
      'Signpost the structure of a report or speech using sub-headings or numbered points.',
    ],
    practiceQuestion: 'Write a letter to your headteacher persuading them to introduce a longer lunch break. (40 marks)',
    modelAnswerPoints: [
      'Correct formal letter format (address, date, salutation, sign-off).',
      'Clear thesis and persuasive tone throughout.',
      'At least three distinct points supported by evidence or reasoning.',
      'Counter-argument acknowledged and addressed.',
      'Formal but engaging language appropriate to the audience.',
    ],
  },

  {
    id: 'rc-ig-04',
    topic: 'IGCSE Literature: Of Mice and Men -- Key Themes',
    yearGroup: 'IGCSE',
    subject: 'English Literature',
    keyPoints: [
      'The American Dream: Steinbeck presents it as illusory, especially for the marginalised.',
      'Friendship and loneliness: George and Lennie\'s bond is unique; most other characters are isolated.',
      'Power and powerlessness: explored through race (Crooks), gender (Curley\'s wife), age (Candy), and disability.',
      'The ranch as a microcosm of Depression-era America.',
      'Dreams are ultimately crushed -- the ending reinforces this inevitability.',
    ],
    definitions: [
      { term: 'Microcosm', definition: 'A small setting that reflects the values and conflicts of a wider society.' },
      { term: 'The American Dream', definition: 'The belief that hard work and determination will lead to success and prosperity in America.' },
      { term: 'Marginalisation', definition: 'The process of pushing a person or group to the edges of society, denying them power and voice.' },
      { term: 'Foreshadowing', definition: 'Steinbeck uses Candy\'s dog\'s death to foreshadow Lennie\'s fate.' },
    ],
    examTips: [
      'Always contextualise: link character struggles to the Great Depression and the 1930s USA.',
      'Know at least three characters in depth -- their role, key quotations, and symbolic function.',
      'Steinbeck\'s stage directions and descriptive passages are as important as dialogue.',
      'The novella\'s title (from Robert Burns) suggests plans always go wrong -- use this in conclusions.',
    ],
    practiceQuestion: 'How does Steinbeck present the theme of loneliness in Of Mice and Men? (30 marks)',
    modelAnswerPoints: [
      'Opening statement linking the theme to the 1930s social context.',
      'Analysis of at least three characters who experience loneliness (e.g., Crooks, Curley\'s wife, Candy).',
      'Close language analysis of key quotations from each character.',
      'Comment on how Steinbeck uses setting (e.g., Crooks\'s room) to convey isolation.',
      'Conclusion linking the theme of loneliness to Steinbeck\'s wider critique of American society.',
    ],
  },

  {
    id: 'rc-ig-05',
    topic: 'IGCSE Literature: Macbeth -- Key Themes',
    yearGroup: 'IGCSE',
    subject: 'English Literature',
    keyPoints: [
      'Ambition and its corrupting influence: Macbeth\'s ambition is noble in war but destructive in politics.',
      'Appearance versus reality: "Fair is foul, and foul is fair" -- nothing is as it seems.',
      'Gender and power: Lady Macbeth challenges gender norms; she later unravels under guilt.',
      'The supernatural: the witches dramatise temptation rather than control destiny.',
      'Natural order: the murder of Duncan disrupts the divine order -- nature itself responds.',
    ],
    definitions: [
      { term: 'Hamartia', definition: 'The fatal flaw that causes a tragic hero\'s downfall -- in Macbeth, this is ambition.' },
      { term: 'Divine right of kings', definition: 'The belief that monarchs are chosen by God; killing a king is therefore sacrilegious.' },
      { term: 'Tragic hero', definition: 'A protagonist of high status who falls from greatness due to a fatal flaw.' },
      { term: 'Equivocation', definition: 'Deliberately ambiguous language that misleads without technically lying -- associated with the witches.' },
    ],
    examTips: [
      'Shakespeare wrote for a Jacobean audience who feared witchcraft and political instability -- use this context.',
      'Analyse language at word level: imagery, metaphor, and rhythm all carry meaning.',
      'Track Macbeth\'s arc from hero to tyrant -- quote from early and late in the play.',
      'Lady Macbeth\'s sleepwalking scene contrasts powerfully with her earlier confidence.',
    ],
    practiceQuestion: 'How does Shakespeare present Macbeth as a character in conflict with himself? (30 marks)',
    modelAnswerPoints: [
      'Opening statement about the nature of Macbeth\'s internal conflict.',
      'Analysis of a soliloquy showing moral hesitation (e.g., "If it were done when \'tis done").',
      'Contrast with Lady Macbeth\'s certainty to highlight Macbeth\'s vacillation.',
      'Tracking how the conflict shifts as the play progresses.',
      'Contextual link to Jacobean ideas about conscience, sin, and divine judgment.',
    ],
  },

  {
    id: 'rc-ig-06',
    topic: 'IGCSE Literature: An Inspector Calls -- Key Themes',
    yearGroup: 'IGCSE',
    subject: 'English Literature',
    keyPoints: [
      'Social responsibility: Priestley argues that we are all responsible for the welfare of others.',
      'Class and capitalism: the Birlings represent the comfortable middle class ignoring the poor.',
      'Generational divide: Sheila and Eric change; their parents refuse to.',
      'Time and dramatic irony: the play is set in 1912 but written in 1945 -- the audience knows what is coming.',
      'The Inspector as a symbolic figure: morality, collective conscience, or socialist ideal.',
    ],
    definitions: [
      { term: 'Dramatic irony', definition: 'When the audience knows something a character does not, creating tension.' },
      { term: 'Social responsibility', definition: 'Priestley\'s central message: individuals have a duty to care for those less fortunate.' },
      { term: 'Allegory', definition: 'A story or character that represents a broader moral or political idea.' },
      { term: 'Capitalism', definition: 'An economic system based on private ownership and profit -- critiqued by Priestley in the Birlings\' attitudes.' },
    ],
    examTips: [
      'Priestley wrote the play in 1945 -- the post-war context of social reform is crucial.',
      'The Inspector\'s final speech is a gift: learn key quotations from it.',
      'Track how each character responds to the Inspector to show Priestley\'s moral framework.',
      'Stage directions are deliberate -- comment on how Priestley uses lighting and setting symbolically.',
    ],
    practiceQuestion: 'How does Priestley use the character of the Inspector to convey his social message? (30 marks)',
    modelAnswerPoints: [
      'Opening statement identifying the Inspector\'s symbolic role.',
      'Analysis of how the Inspector\'s language differs from the Birlings\' -- authoritative, moral, prophetic.',
      'Close analysis of a key speech or exchange.',
      'Comment on the effect of the Inspector\'s ambiguous identity.',
      'Link to Priestley\'s 1945 context and his hope for post-war social change.',
    ],
  },

  {
    id: 'rc-ig-07',
    topic: 'IGCSE Literature: Poetry Techniques',
    yearGroup: 'IGCSE',
    subject: 'English Literature',
    keyPoints: [
      'Form: sonnet, ballad, free verse, dramatic monologue -- each creates a different relationship with the reader.',
      'Voice: whose perspective? What are the limits of the speaker\'s understanding?',
      'Imagery: metaphor, simile, personification -- what comparison is made and why?',
      'Sound: rhyme scheme, metre, alliteration, assonance -- how does sound reinforce meaning?',
      'Structure: what changes between stanzas? Is there a volta or turn?',
    ],
    definitions: [
      { term: 'Dramatic monologue', definition: 'A poem spoken by a single persona, revealing character and situation through their own words.' },
      { term: 'Extended metaphor', definition: 'A metaphor developed across several lines or the whole poem.' },
      { term: 'Assonance', definition: 'The repetition of vowel sounds in nearby words for musical or emotional effect.' },
      { term: 'Anaphora', definition: 'The repetition of a word or phrase at the start of successive lines or clauses for emphasis.' },
    ],
    examTips: [
      'Read the poem three times: for story, for technique, for effect.',
      'Comment on what the poem means first, then how form and structure create that meaning.',
      'Do not list techniques -- each point must include an analysis of effect.',
      'For comparison questions, integrate the two poems rather than treating them separately.',
    ],
    practiceQuestion: 'Compare how two poems from the anthology present the theme of identity. (30 marks)',
    modelAnswerPoints: [
      'Opening sentence naming both poems and making a comparative claim about the theme.',
      'Integrated analysis of both poems in each body paragraph.',
      'Comment on form, structure, and language for each poem.',
      'Identify a meaningful similarity and a meaningful difference.',
      'Conclusion offering a nuanced judgment about both poets\' approaches.',
    ],
  },

  {
    id: 'rc-ig-08',
    topic: 'IGCSE Literature: Unseen Poetry',
    yearGroup: 'IGCSE',
    subject: 'English Literature',
    keyPoints: [
      'Unseen poetry tests your ability to apply analytical skills to unfamiliar texts.',
      'First read: focus on what the poem is about and what mood it creates.',
      'Second read: annotate for techniques -- imagery, form, structure, sound.',
      'Focus your answer on the specific question asked, not everything you can spot.',
      'Comment on the effect of techniques rather than just identifying them.',
    ],
    definitions: [
      { term: 'Persona', definition: 'The speaker of a poem -- not necessarily the poet themselves.' },
      { term: 'Tone', definition: 'The overall mood or attitude of a poem, conveyed through language choices.' },
      { term: 'Motif', definition: 'A recurring image or idea in a poem that develops meaning across the whole text.' },
      { term: 'Diction', definition: 'The choice of vocabulary in a text, which signals register, period, and character.' },
    ],
    examTips: [
      'Never panic -- an unseen poem requires the same skills as a studied poem.',
      'Write about the poem as a whole before zooming into specific lines.',
      'Use tentative language where the meaning is ambiguous: "this could suggest..."',
      'Leave two minutes at the end to check that every point links back to the question.',
    ],
    practiceQuestion: 'Read the poem below. How does the poet convey a sense of grief? Explore the methods the poet uses. (20 marks)',
    modelAnswerPoints: [
      'Opening comment on the overall mood the poem creates.',
      'Three to four analytical paragraphs each focused on a different technique.',
      'Short embedded quotations with word-level analysis.',
      'Comment on form or structure and its relationship to the emotion of grief.',
      'Final sentence linking all techniques back to the feeling of grief conveyed.',
    ],
  },

  {
    id: 'rc-ig-09',
    topic: 'IGCSE Exam Strategy: Time Management',
    yearGroup: 'IGCSE',
    subject: 'Exam Skills',
    keyPoints: [
      'Paper 1 is 2 hours: Section A (reading) = 70 minutes, Section B (writing) = 50 minutes.',
      'Paper 2 is 2 hours: Section A (reading and directed writing) = 80 minutes, Section B = 40 minutes.',
      'Spend time proportional to the marks available -- do not over-write on low-mark questions.',
      'Always leave 5 minutes for planning and 3 minutes for proofreading in writing tasks.',
      'If stuck, move on and return -- partial marks are better than a blank page.',
    ],
    definitions: [
      { term: 'Mark allocation', definition: 'The number of marks assigned to each question -- this indicates how much time and depth to give.' },
      { term: 'Planning', definition: 'Spending a short time before writing to map ideas, structure, and key language choices.' },
      { term: 'Proofreading', definition: 'Re-reading your work after completing it to correct errors in spelling, punctuation, and grammar.' },
      { term: 'Command word', definition: 'The instruction in a question (e.g., explore, analyse, evaluate) that tells you what kind of response is needed.' },
    ],
    examTips: [
      'Read all questions before choosing which to answer (where choice is offered).',
      'Circle command words and underline any line references given.',
      'Write your plan in the margin -- it will not be marked but will save you time.',
      'Never leave a question blank: even a short answer will gain some marks.',
    ],
    practiceQuestion: 'Plan how you would allocate your time in a 2-hour Literature paper with three questions totalling 80 marks.',
    modelAnswerPoints: [
      'Calculate time per mark: 120 minutes / 80 marks = 1.5 minutes per mark.',
      'Add 5 minutes per question for planning.',
      'Allocate time to each question in proportion to its mark value.',
      'Reserve 5 minutes at the end for final checks.',
      'Identify which question to answer first (your strongest topic) for confidence.',
    ],
  },

  {
    id: 'rc-ig-10',
    topic: 'IGCSE Literature: Writing a High-Level Essay',
    yearGroup: 'IGCSE',
    subject: 'English Literature',
    keyPoints: [
      'A Level 5 response (top band) shows a convincing and perceptive interpretation.',
      'Use language to show interpretation: "Steinbeck implies...", "Shakespeare constructs...".',
      'Structural awareness: comment on where in the text/play a moment occurs and why.',
      'Context should be embedded, not bolted on -- link it to your language analysis.',
      'Counter-reading: briefly acknowledge an alternative interpretation to show sophistication.',
    ],
    definitions: [
      { term: 'Perceptive', definition: 'Showing deep insight -- identifying subtle meanings and effects that are not immediately obvious.' },
      { term: 'Convincing', definition: 'Well-argued and clearly evidenced -- the examiner is persuaded by your interpretation.' },
      { term: 'Context', definition: 'The historical, social, cultural, or biographical background that influences a text.' },
      { term: 'Alternative interpretation', definition: 'A reading of a text that differs from your main argument, showing awareness of complexity.' },
    ],
    examTips: [
      'Do not retell the plot -- assume the examiner knows the text.',
      'Every paragraph should contain analysis, not description.',
      'Use the writer\'s full name in the first reference, then surname only.',
      'Aim for five focused paragraphs rather than ten thin ones.',
    ],
    practiceQuestion: 'How does Priestley present the theme of responsibility in An Inspector Calls? Write a full essay. (30 marks)',
    modelAnswerPoints: [
      'Introduction with a clear, interpretive thesis.',
      'Four analytical body paragraphs each with a new, distinct point.',
      'Each paragraph: point, evidence, analysis, context, alternative reading.',
      'Consistent focus on Priestley\'s methods, not just what happens.',
      'Conclusion that reinforces the thesis and offers a final insight.',
    ],
  },

  {
    id: 'rc-ig-11',
    topic: 'IGCSE Language: Directed Writing (Paper 2 Section A)',
    yearGroup: 'IGCSE',
    subject: 'English Language',
    keyPoints: [
      'Directed writing asks you to use information from the passage(s) in a new form.',
      'The task will specify audience, purpose, and form.',
      'You are rewarded for selecting and transforming content, not copying it out.',
      'Add your own connectives, discourse markers, and organisation.',
      'Section A also includes a reading comprehension question -- answer this before the directed writing task.',
    ],
    definitions: [
      { term: 'Transformation', definition: 'Taking information from one source and re-presenting it in a new form, voice, or register.' },
      { term: 'Paraphrase', definition: 'Expressing someone else\'s ideas in your own words.' },
      { term: 'Synthesis', definition: 'Combining points from two or more sources into a single, coherent piece of writing.' },
      { term: 'Directed writing', definition: 'A writing task where the audience, purpose, and form are specified by the examiner.' },
    ],
    examTips: [
      'Highlight relevant points in the source text before you start writing.',
      'Do not copy chunks of the source text -- paraphrase and transform.',
      'Check your tone matches the stated audience (e.g., formal for a headteacher).',
      'Use at least 6-8 points from the source to hit the higher mark bands.',
    ],
    practiceQuestion: 'Using information from the article, write a speech to be delivered at a school assembly about the importance of exercise. (20 marks)',
    modelAnswerPoints: [
      'Correct speech conventions: address the audience, rhetorical devices, sign-off.',
      'At least six points drawn and transformed from the source material.',
      'Points organised logically (not simply in the order they appear in the source).',
      'Appropriate formal-but-engaging tone for a school assembly audience.',
      'Personal voice and emphasis added -- not a list of facts from the article.',
    ],
  },

  {
    id: 'rc-ig-12',
    topic: 'IGCSE Language: Summary Writing',
    yearGroup: 'IGCSE',
    subject: 'English Language',
    keyPoints: [
      'A summary condenses the key points of a text into a shorter form.',
      'Only include relevant information -- delete examples, statistics, and anecdotes unless asked.',
      'Use your own words -- a summary that copies the original scores minimal marks.',
      'Write in continuous prose, not bullet points, unless the task specifies otherwise.',
      'Aim for the specified word limit -- going far over shows poor selection.',
    ],
    definitions: [
      { term: 'Relevant information', definition: 'The points in a text that directly answer the summary task -- not all content is needed.' },
      { term: 'Concision', definition: 'Expressing ideas in as few words as possible without losing meaning.' },
      { term: 'Discourse marker', definition: 'A linking word or phrase (e.g., furthermore, however) that shows the relationship between points.' },
      { term: 'Word limit', definition: 'The maximum number of words allowed for a response -- staying within it demonstrates selection skills.' },
    ],
    examTips: [
      'Number your points in the margin of the source text as you plan.',
      'Aim to include one point per sentence in your summary.',
      'Use linking phrases to connect your points smoothly.',
      'Re-read your summary and cut anything that is not essential.',
    ],
    practiceQuestion: 'Summarise what the writer says about the advantages of renewable energy. Write no more than 120 words. (15 marks)',
    modelAnswerPoints: [
      'Opening sentence that frames the summary without copying the question.',
      'At least five distinct points about advantages, each expressed in own words.',
      'Points ordered logically (most significant first, or grouped by category).',
      'Use of linking discourse markers between points.',
      'Response stays within the word limit.',
    ],
  },

  // -- IAL (Y12-Y13) -------------------------------------------------------------

  {
    id: 'rc-ial-01',
    topic: 'IAL Unit 1: Poetry -- Framework for Analysis',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'Unit 1 (WET11) covers poetry: pre-1900 set poems plus unseen comparison.',
      'The framework: form and structure, voice and perspective, imagery and language, context and reception.',
      'Contextual awareness must be integrated into analysis, not added as a separate paragraph.',
      'Reception: consider how the poem might be read differently by different audiences.',
      'The unseen comparison question carries significant marks -- practice this regularly.',
    ],
    definitions: [
      { term: 'Literary context', definition: 'The period, movement, and traditions that shaped a text\'s production.' },
      { term: 'Reception', definition: 'How a text is interpreted and responded to by its audience -- may vary by period or perspective.' },
      { term: 'Lyric poetry', definition: 'Poetry expressing personal emotion or thought, usually in the first person.' },
      { term: 'Canonical', definition: 'Describing texts widely considered to be of lasting literary value and significance.' },
    ],
    examTips: [
      'Learn at least 10 lines from each set poem -- the ability to quote fluently is essential.',
      'For each poem, know: the context of composition, the critical debate, and two contrasting readings.',
      'In the unseen task, read the poem three times before writing a single word.',
      'Avoid the biographical fallacy: the speaker is not automatically the poet.',
    ],
    practiceQuestion: 'Compare how the writers explore the relationship between the individual and nature in two poems from the anthology.',
    modelAnswerPoints: [
      'Introduction establishing a clear comparative argument.',
      'Integrated analysis: both poems referenced in every body paragraph.',
      'Close language analysis using correct critical terminology.',
      'Contextual references embedded naturally within analytical paragraphs.',
      'A nuanced conclusion that assesses both poems\' approaches and offers a final interpretive judgment.',
    ],
  },

  {
    id: 'rc-ial-02',
    topic: 'IAL Unit 2: Prose -- Framework for Analysis',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'Unit 2 (WET12) focuses on prose: a pre-1900 novel and a post-1900 novel.',
      'Analyse narrative technique: narrator, focalisation, free indirect discourse.',
      'Structure and time: consider how authors manipulate chronology and pacing.',
      'Characterisation: direct and indirect, symbolic function, development.',
      'The social, historical, and literary contexts of each novel are assessed.',
    ],
    definitions: [
      { term: 'Free indirect discourse', definition: 'A narrative technique that blends the narrator\'s voice with a character\'s thoughts without a clear signal.' },
      { term: 'Focalisation', definition: 'The perspective through which events are presented -- whose consciousness shapes the narrative.' },
      { term: 'Omniscient narrator', definition: 'A narrator with full knowledge of all characters\' thoughts, feelings, and events.' },
      { term: 'Unreliable narrator', definition: 'A narrator whose account is biased, limited, or intentionally misleading.' },
    ],
    examTips: [
      'Essay titles are unseen: practise applying your knowledge to different questions.',
      'Know the critical debates for each novel -- a named critic reference lifts marks.',
      'Comment on the effect of narrative choices, not just their existence.',
      'Structure your essay around a clear argument, not around the plot.',
    ],
    practiceQuestion: 'How does the author use narrative technique to create sympathy for the protagonist in your chosen novel?',
    modelAnswerPoints: [
      'Clear thesis about narrative technique and sympathy in the opening paragraph.',
      'Analysis of the type of narrator and its implications for the reader\'s relationship with the protagonist.',
      'Close reading of two or three passages where narrative technique directly creates sympathy.',
      'Reference to a relevant critical perspective on the novel.',
      'Conclusion assessing the overall effect of the narrative strategy.',
    ],
  },

  {
    id: 'rc-ial-03',
    topic: 'IAL Unit 3: Drama -- Framework for Analysis',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'Unit 3 covers drama: a Shakespeare play and a modern drama.',
      'Drama is written to be performed -- consider staging, gesture, and the audience\'s experience.',
      'Analyse dramatic techniques: soliloquy, aside, dramatic irony, stage direction, climax.',
      'Genre matters: tragedy, comedy, tragicomedy each carry conventions and expectations.',
      'The two plays should be read in relation to each other and their theatrical traditions.',
    ],
    definitions: [
      { term: 'Soliloquy', definition: 'A speech delivered alone on stage, revealing a character\'s inner thoughts to the audience.' },
      { term: 'Aside', definition: 'A short speech directed at the audience, unheard by other characters on stage.' },
      { term: 'Catharsis', definition: 'The emotional release or purging of pity and fear experienced by an audience at the end of a tragedy.' },
      { term: 'Hubris', definition: 'Excessive pride or arrogance that leads a tragic hero to ignore warnings or moral limits.' },
    ],
    examTips: [
      'Always refer to the play as a performance, not just a text.',
      'Use stage directions as textual evidence -- directors and actors make choices based on them.',
      'Compare your two plays where possible, even if not directly asked.',
      'Track the tragic or comic arc and comment on how the playwright controls pace and tension.',
    ],
    practiceQuestion: 'Explore how Shakespeare uses the soliloquy to present the internal conflict of a character from your chosen play.',
    modelAnswerPoints: [
      'Introduction identifying the character and the nature of their conflict.',
      'Close analysis of two or three soliloquies showing development.',
      'Comment on how the theatrical form of the soliloquy creates audience engagement.',
      'Reference to the genre and how the conflict fits the tragic/comic conventions.',
      'Contextual link to Shakespeare\'s period and theatrical conventions.',
    ],
  },

  {
    id: 'rc-ial-04',
    topic: 'IAL Unit 4: Unseen Texts -- Comparative Analysis',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'Unit 4 requires comparison of two unseen texts (or one unseen and one studied).',
      'Read both texts carefully before planning -- identify the dominant theme or concern.',
      'Plan your comparative argument before writing: what is the most significant similarity? The most interesting difference?',
      'Focus on methods: do not just compare what is said, but how it is said.',
      'Integration is key: every paragraph should refer to both texts.',
    ],
    definitions: [
      { term: 'Comparative thesis', definition: 'A single statement in the introduction that makes a claim about both texts simultaneously.' },
      { term: 'Integration', definition: 'Weaving references to both texts into every paragraph, rather than treating them in turn.' },
      { term: 'Parallel structure', definition: 'Using the same analytical framework for each text to highlight comparison more clearly.' },
      { term: 'Literary heritage', definition: 'The tradition of texts that a writer inherits and responds to, consciously or not.' },
    ],
    examTips: [
      'Allow 10 minutes for close reading and planning before writing.',
      'Write a comparative thesis sentence before anything else.',
      'Avoid the "tennis match" approach -- comparing point by point in alternating paragraphs.',
      'Conclude by reflecting on the significance of the comparison, not just repeating your points.',
    ],
    practiceQuestion: 'Compare how the two texts use imagery to explore the theme of time. (40 marks)',
    modelAnswerPoints: [
      'A comparative thesis in the opening paragraph identifying the key similarity and difference.',
      'Four to five integrated analytical paragraphs each addressing both texts.',
      'Close language analysis of specific images in both texts.',
      'Comment on the effect of imagery in each text\'s broader context.',
      'Conclusion that assesses which text treats time more powerfully and why.',
    ],
  },

  {
    id: 'rc-ial-05',
    topic: 'IAL: Key Literary Critics and Theorists',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'New Criticism (Leavis, Brooks): close reading of the text itself, independent of biography or context.',
      'Marxist criticism (Eagleton): literature reflects and reinforces class ideology.',
      'Feminist criticism (Woolf, Gilbert and Gubar): how literature constructs gender roles.',
      'Post-colonial criticism (Said, Bhabha): how literature encodes and challenges colonial power.',
      'Reader-response theory (Iser): meaning is created by the reader in dialogue with the text.',
    ],
    definitions: [
      { term: 'Patriarchy', definition: 'A social system in which men hold dominant power -- a key concept in feminist literary criticism.' },
      { term: 'Ideology', definition: 'A set of beliefs and values embedded in texts that reflect and sustain the interests of the powerful.' },
      { term: 'Othering', definition: 'The process by which a dominant group constructs an "other" as inferior -- central to post-colonial criticism.' },
      { term: 'The male gaze', definition: 'John Berger\'s and Laura Mulvey\'s concept that in art and literature, women are often presented from a male perspective.' },
    ],
    examTips: [
      'You do not need to agree with a critic -- you can use their argument and then challenge it.',
      'Quote critics briefly and accurately -- misquoting undermines your credibility.',
      'Link critical perspectives to specific textual moments, not just general ideas.',
      'A Level 5 response will evaluate a critical view, not simply report it.',
    ],
    practiceQuestion: 'Using a Marxist critical perspective, how far do you agree that Dickens presents capitalism as inherently corrupt in your chosen novel?',
    modelAnswerPoints: [
      'Opening paragraph establishing the Marxist framework and applying it to the question.',
      'Analysis of at least three moments where capitalism or class is presented.',
      'Engagement with a specific Marxist critic (e.g., Eagleton on the Victorian novel).',
      'Counter-argument: moments where Dickens appears to endorse bourgeois values.',
      'Conclusion that evaluates the critical framework rather than simply applying it.',
    ],
  },

  {
    id: 'rc-ial-06',
    topic: 'IAL: Essay Technique at A-Level',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'A-Level essays require an argument, not a survey of the text.',
      'The introduction should state your thesis, not just paraphrase the question.',
      'Each paragraph should advance the argument -- not repeat or summarise.',
      'Use a critical lens to organise your analysis, not chronology.',
      'The conclusion should go beyond summary to offer a final insight or evaluation.',
    ],
    definitions: [
      { term: 'Thesis', definition: 'A clear, arguable statement of your interpretation, stated in the introduction.' },
      { term: 'Dialectical argument', definition: 'An argument that moves through contradictions -- thesis, antithesis, synthesis -- to reach a nuanced position.' },
      { term: 'Discursive essay', definition: 'An essay that explores multiple perspectives on a topic before arriving at a reasoned conclusion.' },
      { term: 'Analytical register', definition: 'The formal, precise, and evaluative language appropriate to literary criticism.' },
    ],
    examTips: [
      'Avoid hedging every sentence with "I think" -- state your argument with confidence.',
      'If you are answering a "how far" question, always acknowledge the limits of your position.',
      'Use paragraph signposting to guide the reader through your argument.',
      'End each paragraph with a sentence that links back to your thesis.',
    ],
    practiceQuestion: 'Write a full essay in response to: "In tragedy, suffering is always the result of a character\'s own choices." How far do you agree, with reference to your studied texts?',
    modelAnswerPoints: [
      'Introduction that defines tragedy and states a clear position on the question.',
      'Body paragraphs exploring characters whose suffering is self-caused.',
      'Counter-argument: suffering imposed by society, fate, or other characters.',
      'Use of critical terminology and at least one named critical perspective.',
      'Nuanced conclusion that acknowledges the complexity of the question.',
    ],
  },

  {
    id: 'rc-ial-07',
    topic: 'IAL: Coursework -- Independent Critical Study',
    yearGroup: 'IAL',
    subject: 'English Literature',
    keyPoints: [
      'Coursework (Component 3/4) is typically 3,500-5,000 words across two pieces.',
      'You choose your own text(s) -- a real opportunity to pursue personal interest.',
      'Your essay must demonstrate independent critical thinking, not just knowledge.',
      'A critical introduction frames your argument and critical approach.',
      'Reference at least three secondary sources and engage critically with them.',
    ],
    definitions: [
      { term: 'Independent critical study', definition: 'An essay demonstrating your own analytical perspective on a self-chosen text, supported by critical reading.' },
      { term: 'Critical introduction', definition: 'The opening section of a coursework essay that sets out your argument, critical approach, and structure.' },
      { term: 'Secondary source', definition: 'A critical text -- book, article, or essay -- that comments on the primary text you are studying.' },
      { term: 'Bibliography', definition: 'A full list of every text (primary and secondary) cited in or consulted for your essay.' },
    ],
    examTips: [
      'Choose a text you genuinely find interesting -- motivation sustains a long essay.',
      'Write a clear research question before you start, then check every paragraph answers it.',
      'Engage with critics by agreeing, disagreeing, or extending their arguments.',
      'Draft early and revise multiple times -- coursework rewards redrafting.',
    ],
    practiceQuestion: 'Draft a critical introduction (approximately 300 words) for an essay on a text of your choice, framing your argument and critical approach.',
    modelAnswerPoints: [
      'Opening sentence that identifies the text and a specific critical question it raises.',
      'Brief statement of the critical approach or lens being applied.',
      'Thesis statement: the central argument of the essay.',
      'Overview of the essay\'s structure: what each section will argue.',
      'Reference to one secondary source to establish the critical conversation.',
    ],
  },

  {
    id: 'rc-ial-08',
    topic: 'IAL: Language Study -- Key Concepts',
    yearGroup: 'IAL',
    subject: 'English Language',
    keyPoints: [
      'Language change: historical development of English from Old English through to present day.',
      'Language variation: regional dialect, sociolect, idiolect, gender variation.',
      'Language acquisition: theories of how children learn language (Chomsky, Skinner, Vygotsky).',
      'Language and power: how language constructs and reinforces social hierarchies.',
      'Discourse analysis: how texts create meaning beyond individual sentence level.',
    ],
    definitions: [
      { term: 'Idiolect', definition: 'The unique way an individual uses language, shaped by age, background, education, and personality.' },
      { term: 'Sociolect', definition: 'A variety of language associated with a particular social group.' },
      { term: 'Language acquisition device (LAD)', definition: 'Chomsky\'s theory that humans are innately equipped with the capacity to acquire language.' },
      { term: 'Critical discourse analysis', definition: 'A method of analysing language to reveal how power and ideology are embedded in texts.' },
    ],
    examTips: [
      'Name and apply linguistic frameworks: phonology, morphology, syntax, semantics, pragmatics.',
      'Use data from the source material to support every claim you make.',
      'Avoid over-generalising -- language behaviour is always variable and context-dependent.',
      'Evaluate competing theories rather than simply reporting them.',
    ],
    practiceQuestion: 'Analyse the language of the following transcript, exploring what it reveals about power and identity. (30 marks)',
    modelAnswerPoints: [
      'Opening statement identifying the key features of power and identity in the transcript.',
      'Analysis using at least three linguistic frameworks (e.g., pragmatics, lexis, syntax).',
      'Reference to at least one relevant theorist or researcher.',
      'Comment on the broader social context that shapes the language used.',
      'Conclusion evaluating what the transcript most clearly reveals about the relationship between language, power, and identity.',
    ],
  },

];

// -- Revision Plans -------------------------------------------------------------

export const revisionPlans: RevisionPlan[] = [

  // -- Plan 1: Y9 End-of-Year Prep -----------------------------------------------
  {
    id: 'rp-y9-eoy',
    title: 'Y9 End-of-Year Exam Preparation',
    yearGroup: 'Y9',
    examDate: 'June (Week 10 of Summer Term)',
    weeksAvailable: 4,
    weekByWeekPlan: [
      {
        week: 1,
        focus: 'Reading Skills: Fiction and Non-Fiction',
        tasks: [
          'Re-read your annotations on A Christmas Carol and Of Mice and Men.',
          'Practice one unseen fiction reading question (10 marks) under timed conditions.',
          'Complete one PEE paragraph analysing a non-fiction text from class.',
          'Revise grammar card rc-ks3-03 and complete the practice question.',
          'Create a flashcard set for the five most important literary terms.',
        ],
        selfAssessment: 'Can I write a developed PEE paragraph with an embedded quotation and word-level analysis?',
      },
      {
        week: 2,
        focus: 'Creative Writing: Description and Narrative',
        tasks: [
          'Practice one 20-minute descriptive writing task using a stimulus image.',
          'Review your feedback from the most recent creative writing assessment.',
          'Revise sentence variety: write the same scene in three different sentence structures.',
          'Write an opening paragraph using the "zoom in" technique.',
          'Peer-assess a practice piece against the mark scheme criteria.',
        ],
        selfAssessment: 'Can I write a descriptively rich opening paragraph that varies sentence structure deliberately?',
      },
      {
        week: 3,
        focus: 'Persuasion, Argument and Comparison',
        tasks: [
          'Re-read your class notes on rhetoric and persuasive techniques.',
          'Write a 20-minute persuasive speech on a given topic.',
          'Revise comparison technique using card rc-ks3-05.',
          'Write one integrated comparison paragraph on two texts studied this year.',
          'Test yourself on discourse markers and comparative connectives.',
        ],
        selfAssessment: 'Can I write a comparison paragraph that refers to both texts in every sentence?',
      },
      {
        week: 4,
        focus: 'Final Preparation and Mock Conditions',
        tasks: [
          'Complete a full timed practice paper under exam conditions.',
          'Mark your own work against the mark scheme.',
          'Identify your two weakest areas and spend 30 minutes on each.',
          'Create a one-page mind map of key quotations from all texts studied.',
          'Prepare for the reading section by practising retrieval on unseen extracts.',
        ],
        selfAssessment: 'Have I addressed my two weakest areas? Am I confident in time management across a full paper?',
      },
    ],
    topTips: [
      'Little and often beats a single long cramming session every time.',
      'Prioritise active revision: writing paragraphs and testing yourself outscores re-reading.',
      'Use your teacher\'s feedback as a revision guide -- target the gaps already identified.',
      'Sleep matters: memory consolidation happens overnight, so revising before bed is effective.',
      'Read a variety of non-fiction texts to practise unseen reading -- news articles, editorials, and opinion pieces all help.',
    ],
  },

  // -- Plan 2: IGCSE Language Mock Prep -----------------------------------------
  {
    id: 'rp-ig-lang-mock',
    title: 'IGCSE English Language Mock Preparation',
    yearGroup: 'Y10/Y11',
    examDate: 'Mock Examination (Week 1 of February Half-Term)',
    weeksAvailable: 6,
    weekByWeekPlan: [
      {
        week: 1,
        focus: 'Paper 1 Section A: Reading Non-Fiction -- Retrieval and Comprehension',
        tasks: [
          'Practise three Paper 1 Question 1 tasks (list/retrieve format).',
          'Re-read revision card rc-ig-01 and the mark scheme criteria for Q1 and Q2.',
          'Annotate a non-fiction article using the AFOREST technique for persuasive devices.',
          'Timed practice: answer Q2 language analysis in 20 minutes.',
          'Check and mark your answers against the mark scheme.',
        ],
        selfAssessment: 'Can I identify at least four separate points for a 4-mark retrieval question without repeating myself?',
      },
      {
        week: 2,
        focus: 'Paper 1 Section A: Reading -- Language Analysis and Evaluation',
        tasks: [
          'Practise one Q3 language analysis question (8 marks) in 20 minutes.',
          'Practise one Q4 evaluation question (12 marks) in 30 minutes.',
          'Review revision cards rc-ig-01 and rc-ig-09 for exam strategy.',
          'Identify your strongest and weakest Paper 1 question types.',
          'Write a model Q4 evaluation and compare to the mark scheme Level descriptors.',
        ],
        selfAssessment: 'Can I structure an evaluation response with a clear judgment, three supporting points, and a conclusion?',
      },
      {
        week: 3,
        focus: 'Paper 1 Section B: Creative Writing',
        tasks: [
          'Practise one 45-minute creative writing task (descriptive or narrative).',
          'Re-read revision card rc-ig-02 and review the mark scheme for communication and SPaG.',
          'Identify three features of your strongest creative writing and three areas to improve.',
          'Write an opening paragraph for three different writing prompts.',
          'Proofread a piece of your own writing, correcting every SPaG error.',
        ],
        selfAssessment: 'Does my creative writing show deliberate structural choices and varied sentence forms?',
      },
      {
        week: 4,
        focus: 'Paper 2 Section A: Reading and Directed Writing',
        tasks: [
          'Complete a full Paper 2 Section A under timed conditions (80 minutes).',
          'Re-read revision cards rc-ig-03, rc-ig-11, and rc-ig-12.',
          'Practise a summary task -- count your points and check they are in your own words.',
          'Review your directed writing: check form conventions (letter/speech/article) are correct.',
          'Mark your own work using the Paper 2 mark scheme.',
        ],
        selfAssessment: 'Does my directed writing transform and re-organise the source material rather than copying it?',
      },
      {
        week: 5,
        focus: 'Paper 2 Section B: Transactional Writing',
        tasks: [
          'Practise one Paper 2 Section B task (letter, article, or report) in 40 minutes.',
          'Review revision card rc-ig-03 for form conventions.',
          'Check that your writing is appropriately formal for the stated audience.',
          'Write a strong concluding paragraph that provides a call to action.',
          'Peer-review a classmate\'s transactional writing response.',
        ],
        selfAssessment: 'Does my writing use the correct form conventions and maintain an appropriate tone throughout?',
      },
      {
        week: 6,
        focus: 'Full Mock Paper Practice and Targeted Review',
        tasks: [
          'Complete a full Paper 1 under mock exam conditions (2 hours).',
          'Complete a full Paper 2 under mock exam conditions (2 hours).',
          'Mark both papers and calculate your approximate mark for each question.',
          'Identify the two questions where you lost the most marks.',
          'Spend 45 minutes on targeted revision for each of those two areas.',
        ],
        selfAssessment: 'Am I allocating time correctly across both papers? Have I addressed my two weakest question types?',
      },
    ],
    topTips: [
      'Read the questions before the texts -- know what you are looking for.',
      'For language analysis, quote briefly and comment on the effect of individual words.',
      'For creative writing, plan for 5 minutes and proofread for 3 minutes.',
      'SPaG is worth 16 marks in writing -- never skip the proofreading stage.',
      'Practise under timed conditions from Week 3 onwards -- exam conditions feel different from homework.',
    ],
  },

  // -- Plan 3: IGCSE Literature Mock Prep ----------------------------------------
  {
    id: 'rp-ig-lit-mock',
    title: 'IGCSE English Literature Mock Preparation',
    yearGroup: 'Y10/Y11',
    examDate: 'Mock Examination (Week 1 of February Half-Term)',
    weeksAvailable: 6,
    weekByWeekPlan: [
      {
        week: 1,
        focus: 'Of Mice and Men: Themes, Characters, and Quotations',
        tasks: [
          'Create a character map for the five main characters with key quotations.',
          'Revise revision card rc-ig-04 and practise the model answer structure.',
          'Write one timed essay paragraph on the theme of the American Dream (15 minutes).',
          'Make a timeline of key events and note how Steinbeck structures the novella.',
          'Research the Great Depression: note three facts you can use for context.',
        ],
        selfAssessment: 'Can I write a full PEE paragraph on Of Mice and Men with an embedded quotation and contextual reference?',
      },
      {
        week: 2,
        focus: 'Macbeth: Themes, Characters, and Dramatic Technique',
        tasks: [
          'Create a scene-by-scene summary and note the turning points in the play.',
          'Revise revision card rc-ig-05 and learn 10 key quotations.',
          'Write one timed essay paragraph on the theme of ambition (15 minutes).',
          'Analyse one of Macbeth\'s soliloquies in detail.',
          'Research the Jacobean context: James I, witchcraft, and the divine right of kings.',
        ],
        selfAssessment: 'Can I track Macbeth\'s transformation from Act 1 to Act 5 using specific quotations?',
      },
      {
        week: 3,
        focus: 'An Inspector Calls: Themes, Characters, and Context',
        tasks: [
          'Create a grid showing each character\'s attitude to responsibility.',
          'Revise revision card rc-ig-06 and learn the Inspector\'s final speech.',
          'Write one timed essay paragraph on the theme of class (15 minutes).',
          'Analyse the significance of the play\'s structure (set design, Acts, dramatic irony).',
          'Research 1945 context: post-war Britain, welfare state, socialist reform.',
        ],
        selfAssessment: 'Can I explain Priestley\'s purpose and link it to both the 1912 and 1945 contexts?',
      },
      {
        week: 4,
        focus: 'Poetry: Studied Poems and Comparison Technique',
        tasks: [
          'Re-read all set poems and annotate for form, structure, and language.',
          'Revise revision cards rc-ig-07 and rc-ig-08.',
          'Write one comparison paragraph integrating both poems in every sentence.',
          'Make a thematic grid matching poems to key themes.',
          'Practise the unseen poem: read a poem cold and write three analytical points in 10 minutes.',
        ],
        selfAssessment: 'Can I write an integrated comparison that comments on methods from both poems in a single paragraph?',
      },
      {
        week: 5,
        focus: 'Essay Technique: High-Level Writing',
        tasks: [
          'Revise revision card rc-ig-10 and the mark scheme level descriptors.',
          'Write a full timed essay (30 marks) on one of your set texts (45 minutes).',
          'Mark your essay against the Level 5 descriptors.',
          'Identify two specific ways your essay could be improved.',
          'Rewrite one paragraph applying those improvements.',
        ],
        selfAssessment: 'Does my essay open with an interpretive thesis rather than a plot summary?',
      },
      {
        week: 6,
        focus: 'Full Mock Conditions and Final Review',
        tasks: [
          'Complete a full mock Literature paper under timed conditions.',
          'Mark your paper and identify your strongest and weakest text responses.',
          'Spend 1 hour on targeted revision for the weakest text.',
          'Create a final quotation sheet for each text.',
          'Test yourself on quotations with a partner or using flashcards.',
        ],
        selfAssessment: 'Am I quoting fluently and analysing language at word level in every paragraph?',
      },
    ],
    topTips: [
      'Context is not a separate paragraph -- weave it into your language analysis.',
      'The examiner rewards perceptive interpretation: do not just say what happens, say what it means.',
      'Quotations should be short and precise -- one or two powerful words beat a full sentence.',
      'Learn the five most important quotations for each text by heart before the exam.',
      'Plan every essay for 5 minutes: a clear structure prevents you running out of ideas midway.',
    ],
  },

  // -- Plan 4: IAL Unit 1 and 2 Exam Prep ----------------------------------------
  {
    id: 'rp-ial-u1u2-exams',
    title: 'IAL Unit 1 and Unit 2 Exam Preparation',
    yearGroup: 'Y12/Y13',
    examDate: 'May/June Examination Series',
    weeksAvailable: 8,
    weekByWeekPlan: [
      {
        week: 1,
        focus: 'Unit 1 Poetry: Set Text Revision and Close Reading',
        tasks: [
          'Re-read all set poems with fresh annotations.',
          'For each poem, write: one sentence on context, one on form, one on a key image.',
          'Learn 10 lines from each set poem.',
          'Revise revision card rc-ial-01.',
          'Read one secondary critical source on your set poet.',
        ],
        selfAssessment: 'Can I recite 10 lines from each set poem and explain their significance?',
      },
      {
        week: 2,
        focus: 'Unit 1 Poetry: Essay Technique and Comparative Writing',
        tasks: [
          'Write a full timed essay response on Unit 1 poetry (45 minutes).',
          'Mark your essay against the AO criteria (AO1 expression, AO2 methods, AO3 context).',
          'Practise writing an integrated comparative paragraph.',
          'Review revision cards rc-ial-05 and rc-ial-06.',
          'Re-read a critical essay that discusses your set poet.',
        ],
        selfAssessment: 'Does my essay argue a clear thesis and integrate contextual reference without over-summarising?',
      },
      {
        week: 3,
        focus: 'Unit 1 Poetry: Unseen Comparison Practice',
        tasks: [
          'Complete two unseen poem comparisons under timed conditions (30 minutes each).',
          'Annotate each unseen poem before writing: 5 minutes maximum.',
          'Focus on writing an integrated comparison rather than analysing poems separately.',
          'Identify the three techniques most useful for unseen analysis.',
          'Review revision card rc-ial-04.',
        ],
        selfAssessment: 'Can I produce an integrated unseen comparison with a clear comparative thesis in 30 minutes?',
      },
      {
        week: 4,
        focus: 'Unit 2 Prose: Pre-1900 Novel Revision',
        tasks: [
          'Re-read your annotated chapters and identify the five most important passages.',
          'Write a context summary (one page) for the pre-1900 novel.',
          'Revise revision card rc-ial-02 and apply its framework to the novel.',
          'Write one analytical paragraph on narrative technique using free indirect discourse.',
          'Read one secondary critical source on the novel.',
        ],
        selfAssessment: 'Can I identify and analyse narrative technique with close textual evidence from the pre-1900 novel?',
      },
      {
        week: 5,
        focus: 'Unit 2 Prose: Post-1900 Novel Revision',
        tasks: [
          'Create a chapter-by-chapter structure map for the post-1900 novel.',
          'Identify the dominant narrative technique and write a paragraph analysing its effect.',
          'Research the critical debate: what do critics disagree about in this novel?',
          'Write one analytical paragraph referencing a named critic.',
          'Compare the two novels\' narrative strategies in a single paragraph.',
        ],
        selfAssessment: 'Can I compare the narrative strategies of both Unit 2 novels with specific textual evidence?',
      },
      {
        week: 6,
        focus: 'Unit 2 Prose: Full Essay Practice',
        tasks: [
          'Write a full timed essay on Unit 2 prose (45 minutes).',
          'Mark against the Level descriptors and calculate an approximate band.',
          'Revise revision cards rc-ial-05 and rc-ial-06.',
          'Identify the single weakest element of your essay technique.',
          'Rewrite the weakest paragraph, applying specific improvements.',
        ],
        selfAssessment: 'Does my essay argue a clear position and evaluate rather than simply report critical views?',
      },
      {
        week: 7,
        focus: 'Targeted Revision: Weakest Areas',
        tasks: [
          'Review all marked practice essays and identify recurring weaknesses.',
          'Spend 45 minutes on each of your two weakest areas.',
          'Test yourself on key quotations from all texts using flashcards or a partner.',
          'Write one practice introduction for both Unit 1 and Unit 2.',
          'Review the exam board mark scheme for the highest band descriptors.',
        ],
        selfAssessment: 'Have my practice responses improved since Week 1? What specific changes have I made?',
      },
      {
        week: 8,
        focus: 'Full Exam Conditions and Final Preparation',
        tasks: [
          'Complete a full Unit 1 mock paper under timed conditions.',
          'Complete a full Unit 2 mock paper under timed conditions.',
          'Mark both papers and reflect on your performance.',
          'Create a one-page revision sheet summarising the key argument for each set text.',
          'Rest: consolidation sleep is essential in the final days before an exam.',
        ],
        selfAssessment: 'Am I confident in my time management for both units? Do I have a clear argument prepared for each possible essay question?',
      },
    ],
    topTips: [
      'At A-Level, the examiner rewards genuine interpretation -- take intellectual risks.',
      'Know your critical framework: every essay is stronger when it is built around a clear critical lens.',
      'Named critic references are worth using, but always evaluate rather than just quote.',
      'Practise under timed conditions from Week 3 -- 45 minutes is less time than it feels.',
      'For unseen questions, annotation time is not wasted time -- it saves you from writing off-track.',
    ],
  },

  // -- Plan 5: IAL Coursework Submission Plan ------------------------------------
  {
    id: 'rp-ial-coursework',
    title: 'IAL Coursework Submission Plan',
    yearGroup: 'Y12/Y13',
    examDate: 'Teacher Submission Deadline (End of Spring Term)',
    weeksAvailable: 10,
    weekByWeekPlan: [
      {
        week: 1,
        focus: 'Text Selection and Research Question',
        tasks: [
          'Confirm your chosen text(s) with your teacher.',
          'Identify a research question or critical angle that genuinely interests you.',
          'Browse at least three secondary critical sources and take brief notes.',
          'Write a preliminary thesis sentence -- not for submission, just to clarify your thinking.',
          'Review revision card rc-ial-07 on coursework expectations.',
        ],
        selfAssessment: 'Have I identified a specific, arguable question that my text(s) can sustain over 3,500-5,000 words?',
      },
      {
        week: 2,
        focus: 'Critical Reading and Source Gathering',
        tasks: [
          'Read and annotate three secondary critical sources relevant to your question.',
          'Make detailed notes in your own words from each source.',
          'Identify where the critics agree, disagree, or leave something unsaid.',
          'Begin building your bibliography.',
          'Re-read the key sections of your primary text with your research question in mind.',
        ],
        selfAssessment: 'Can I summarise each secondary source in two sentences and explain how it relates to my argument?',
      },
      {
        week: 3,
        focus: 'Planning the Essay',
        tasks: [
          'Draft a paragraph-by-paragraph plan for the entire essay.',
          'Identify the key textual moments you will analyse in each section.',
          'Match each section to a relevant secondary source.',
          'Write a draft introduction (300 words) and share with your teacher for feedback.',
          'Confirm that your plan develops a clear argument rather than a survey of themes.',
        ],
        selfAssessment: 'Does each section of my plan advance the argument rather than simply describing the text?',
      },
      {
        week: 4,
        focus: 'Writing: Sections 1 and 2',
        tasks: [
          'Write the first two body sections (approximately 1,000-1,200 words total).',
          'Include close textual analysis with embedded quotations in each section.',
          'Integrate a secondary source in each section -- agree, disagree, or extend.',
          'Check your register: use analytical, formal language throughout.',
          'Do not edit as you write -- get words on the page first.',
        ],
        selfAssessment: 'Do my first two sections each develop a distinct point that contributes to my central argument?',
      },
      {
        week: 5,
        focus: 'Writing: Sections 3 and 4',
        tasks: [
          'Write the next two body sections (approximately 1,000-1,200 words total).',
          'Introduce a counter-argument or alternative critical reading in one section.',
          'Ensure each section opens with a clear topic sentence.',
          'Check that every claim is supported by textual evidence.',
          'Read your draft aloud to catch clunky phrasing and unclear sentences.',
        ],
        selfAssessment: 'Have I engaged critically with at least one opposing or alternative view in this section of the essay?',
      },
      {
        week: 6,
        focus: 'Writing: Final Section and Conclusion',
        tasks: [
          'Write the final body section and the conclusion (approximately 800-1,000 words total).',
          'The conclusion should offer a final evaluative insight, not merely restate points.',
          'Check that the conclusion answers the original research question directly.',
          'Complete the bibliography in the correct format.',
          'Submit first full draft to your teacher for feedback.',
        ],
        selfAssessment: 'Does my conclusion offer something new -- a final insight or a re-evaluation of the question?',
      },
      {
        week: 7,
        focus: 'Acting on Teacher Feedback: Major Revision',
        tasks: [
          'Read teacher feedback carefully and identify the three highest-priority changes.',
          'Revise the sections identified as weakest.',
          'Check that your argument is clear throughout -- add signposting if needed.',
          'Strengthen any sections where analysis is thin or evidence is missing.',
          'Verify all quotations are accurate and correctly referenced.',
        ],
        selfAssessment: 'Have I addressed all the major issues raised by my teacher rather than just making surface corrections?',
      },
      {
        week: 8,
        focus: 'Refining Language and Critical Engagement',
        tasks: [
          'Re-read the entire essay for register and flow.',
          'Replace any vague analytical language with precise critical vocabulary.',
          'Check that every secondary source is engaged with critically, not just quoted.',
          'Ensure transitions between sections are smooth and signposted.',
          'Recalculate your word count and trim or expand as needed.',
        ],
        selfAssessment: 'Does every paragraph use precise critical language and contribute distinctly to my overall argument?',
      },
      {
        week: 9,
        focus: 'Proofreading and Technical Accuracy',
        tasks: [
          'Proofread the entire essay for spelling, grammar, and punctuation errors.',
          'Check all quotations are formatted correctly (inverted commas, italics for titles).',
          'Verify the bibliography is in the correct referencing format.',
          'Check the word count is within the permitted range.',
          'Read the essay aloud one final time to catch errors your eye skips over.',
        ],
        selfAssessment: 'Is the essay free of technical errors and formatted correctly according to the submission guidelines?',
      },
      {
        week: 10,
        focus: 'Final Submission',
        tasks: [
          'Complete any final minor revisions.',
          'Print or submit digitally according to your teacher\'s instructions.',
          'Keep a personal copy of the final submitted version.',
          'Submit on or before the deadline.',
          'Reflect: what would you do differently if starting again? Note this for exam technique.',
        ],
        selfAssessment: 'Have I submitted a piece of work I am genuinely proud of that represents my best independent critical thinking?',
      },
    ],
    topTips: [
      'Start early -- the quality of coursework is directly proportional to the number of drafts.',
      'Choose a text you find genuinely fascinating, not just one that seems "safe".',
      'Your thesis should be arguable: if everyone would agree immediately, it is not interesting enough.',
      'Engage with critics as equals -- agree, disagree, extend, and challenge their ideas.',
      'The bibliography is not an afterthought: keep accurate notes as you read so you do not have to hunt down sources at the end.',
    ],
  },

];

// ===============================================================================
// Revision Guides -- KS3 to IAL (structured format)
// ===============================================================================

export interface RevisionGuide {
  id: string;
  title: string;
  yearGroup: string;
  subject: 'English Language' | 'English Literature' | 'Both';
  examBoard: 'Universal' | 'Edexcel IGCSE' | 'Edexcel IAL';
  keyTopics: string[];
  keyTerms: { term: string; definition: string }[];
  examTips: string[];
  commonMistakes: string[];
  practiceQuestions: { question: string; markAllocation: number; guidance: string }[];
  revisionActivities: string[];
}

export const revisionGuides: RevisionGuide[] = [

  // ---------------------------------------------------------------------------
  // 1. Y7-Y9 KS3 Reading Skills
  // ---------------------------------------------------------------------------
  {
    id: 'rg-ks3-reading',
    title: 'KS3 Reading Skills',
    yearGroup: 'Y7-Y9',
    subject: 'English Language',
    examBoard: 'Universal',
    keyTopics: [
      'Inference and deduction from fiction and non-fiction texts',
      'Analysing language choices: diction, figurative language, and tone',
      'Analysing structural and presentational features',
      'Identifying and evaluating a writer\'s purpose and viewpoint',
      'Comparing texts: similarities and differences in method and effect',
      'Tracking how meaning develops across an entire text',
      'Selecting and embedding relevant quotations',
    ],
    keyTerms: [
      { term: 'Inference', definition: 'A conclusion drawn from evidence in a text rather than stated directly by the writer.' },
      { term: 'Connotation', definition: 'The emotional association or implied meaning a word carries beyond its literal definition.' },
      { term: 'Tone', definition: 'The attitude or feeling conveyed by a writer through their word choices and style.' },
      { term: 'Foreshadowing', definition: 'A literary device in which early hints or clues suggest later events in a narrative.' },
      { term: 'Narrative perspective', definition: 'The point of view from which a story is told, such as first person or third person omniscient.' },
      { term: 'Structural feature', definition: 'An organisational choice in a text, such as sentence length, paragraph order, or the use of flashback.' },
      { term: 'Figurative language', definition: 'Language that uses imagery or comparisons rather than literal meaning, including metaphor, simile, and personification.' },
      { term: 'Purpose', definition: 'The reason a writer has created a text -- to inform, persuade, entertain, argue, or describe.' },
      { term: 'Effect', definition: 'The impact a language or structural choice has on the reader\'s thoughts, feelings, or understanding.' },
    ],
    examTips: [
      'Always support every point with a precise embedded quotation -- a claim without evidence gains no marks.',
      'Comment on the effect on the reader rather than simply identifying a technique.',
      'Use the word "suggests" or "implies" to demonstrate inference rather than paraphrase.',
      'Analyse individual word choices within a quotation, focusing on connotations.',
      'When comparing texts, use connectives such as "similarly", "in contrast", and "whereas" to signal your comparison clearly.',
    ],
    commonMistakes: [
      'Identifying a technique without explaining its effect on the reader.',
      'Retelling or paraphrasing the text instead of analysing the writer\'s methods.',
      'Selecting long quotations when a single word or short phrase is more precise.',
      'Ignoring structural features and focusing only on language.',
    ],
    practiceQuestions: [
      {
        question: 'How does the writer create a sense of tension in lines 1-20 of the extract? (10 marks)',
        markAllocation: 10,
        guidance: 'Identify three or four specific methods (e.g., short sentences, word choices, structural features), embed a quotation for each, and explain the effect on the reader. Avoid simply listing techniques.',
      },
      {
        question: 'What do you learn about the narrator\'s feelings towards the setting? Use evidence from the whole text. (8 marks)',
        markAllocation: 8,
        guidance: 'Track the narrator\'s attitude across the text rather than focusing on one paragraph. Show how feelings develop or change, and comment on specific language choices that reveal those feelings.',
      },
      {
        question: 'Compare how two writers present the theme of danger in these two texts. (12 marks)',
        markAllocation: 12,
        guidance: 'Make a point about Text 1, support it with evidence, then compare it explicitly with Text 2. Aim for four comparative points. Comment on similarities and differences in both method and effect.',
      },
    ],
    revisionActivities: [
      'Annotate a paragraph from a novel or news article, labelling every language and structural choice you notice and noting its effect.',
      'Write three-part analysis sentences (Point -- Evidence -- Effect) for ten quotations from a text you are studying.',
      'Swap a short extract with a classmate, each highlight the five most significant language choices, then compare and discuss your selections.',
      'Create a "technique toolkit" flashcard set: one card per technique naming it, giving a definition, and providing an example sentence from a real text.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Y7-Y9 KS3 Writing Skills
  // ---------------------------------------------------------------------------
  {
    id: 'rg-ks3-writing',
    title: 'KS3 Writing Skills',
    yearGroup: 'Y7-Y9',
    subject: 'English Language',
    examBoard: 'Universal',
    keyTopics: [
      'Writing for different purposes: to describe, narrate, argue, and persuade',
      'Adapting tone, register, and vocabulary for different audiences',
      'Structuring whole texts: openings, development, and endings',
      'Crafting varied and effective sentences for impact',
      'Using paragraphs to organise and develop ideas',
      'Accurate use of punctuation including commas, semicolons, and colons',
      'Spelling strategies and vocabulary enrichment',
      'Editing and proofreading for accuracy and clarity',
    ],
    keyTerms: [
      { term: 'Register', definition: 'The level of formality in language, adjusted to suit the context and audience.' },
      { term: 'Rhetorical question', definition: 'A question posed for effect rather than to elicit an answer, used to engage or challenge the reader.' },
      { term: 'Anaphora', definition: 'The repetition of a word or phrase at the beginning of successive clauses for emphasis or rhythm.' },
      { term: 'Pathetic fallacy', definition: 'The attribution of human emotions to elements of nature or the environment to reflect a character\'s mood.' },
      { term: 'Syntax', definition: 'The arrangement of words and phrases in a sentence to create particular effects.' },
      { term: 'Cohesion', definition: 'The way a text is logically connected and flows smoothly, achieved through linking words, pronoun reference, and repetition.' },
      { term: 'Volta', definition: 'A turn or shift in tone, argument, or perspective within a piece of writing.' },
      { term: 'Cyclical structure', definition: 'A structural technique in which a text ends by returning to its opening image or idea, creating a sense of completion.' },
      { term: 'Concrete detail', definition: 'Specific, sensory, and precise description that makes writing vivid and believable.' },
    ],
    examTips: [
      'Plan before you write: even a two-minute bullet-point plan improves organisation and coherence.',
      'Vary your sentence types -- short sentences for impact, longer sentences for atmosphere or argument.',
      'Begin paragraphs with topic sentences that make a clear, specific point.',
      'Use a range of punctuation deliberately, showing you understand its effect on pace and clarity.',
      'Leave time to proofread: one careful read-through catches most spelling, punctuation, and grammar errors.',
    ],
    commonMistakes: [
      'Writing a story without a clear shape -- introduction, development, and a deliberate ending.',
      'Overusing the same sentence structure throughout, which makes writing monotonous.',
      'Using ambitious vocabulary incorrectly, which undermines the quality of the response.',
      'Forgetting to adapt tone and vocabulary to the specified audience and purpose.',
    ],
    practiceQuestions: [
      {
        question: 'Write a description of a place that feels abandoned. (20 marks)',
        markAllocation: 20,
        guidance: 'Focus on creating atmosphere through sensory detail and figurative language. Structure your description so it moves from one area to another or from exterior to interior. Vary your sentence lengths for effect.',
      },
      {
        question: 'Write a speech persuading your school to introduce a four-day school week. (20 marks)',
        markAllocation: 20,
        guidance: 'Use persuasive techniques including rhetorical questions, statistics, anecdote, and direct address. Adopt a confident, formal register and structure your argument with a strong opening, developed middle paragraphs, and a memorable conclusion.',
      },
      {
        question: 'Write the opening chapter of a story in which a character discovers something unexpected. (20 marks)',
        markAllocation: 20,
        guidance: 'Establish setting and character quickly. Build suspense gradually, using structural and language choices deliberately. Aim for a striking final sentence that makes the reader want to continue.',
      },
    ],
    revisionActivities: [
      'Rewrite the same paragraph three times using different sentence structures and punctuation choices, then evaluate which version is most effective and why.',
      'Collect five outstanding sentences from novels or articles you admire, analyse what makes them effective, then imitate the structure using your own content.',
      'Set a ten-minute timed writing challenge each day on a different stimulus (an image, a title, or a first line), focusing on a single skill such as structure or vocabulary.',
      'Swap a piece of your own writing with a partner and give specific written feedback on two strengths and one area for improvement, focusing on technique rather than content.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Y9 A Christmas Carol
  // ---------------------------------------------------------------------------
  {
    id: 'rg-y9-christmas-carol',
    title: 'A Christmas Carol -- Y9 Study Guide',
    yearGroup: 'Y9',
    subject: 'English Literature',
    examBoard: 'Universal',
    keyTopics: [
      'Scrooge\'s transformation across the five staves',
      'The role of the three spirits and what each represents',
      'Dickens\'s critique of Victorian society and the treatment of the poor',
      'The theme of redemption and second chances',
      'The theme of Christmas as a time of generosity and community',
      'Dickens\'s use of gothic and supernatural elements',
      'Key characters: Scrooge, Bob Cratchit, Tiny Tim, Fred, Marley',
    ],
    keyTerms: [
      { term: 'Allegory', definition: 'A narrative in which characters and events represent abstract moral or political ideas.' },
      { term: 'Redemption', definition: 'Being saved or rescued from a bad situation, in this text through a change of values and behaviour.' },
      { term: 'Gothic', definition: 'A literary mode using darkness, decay, supernatural elements, and fear to create atmosphere.' },
      { term: 'Pathetic fallacy', definition: 'Use of weather or setting to reflect the emotional state of a character or the mood of a scene.' },
      { term: 'Symbolism', definition: 'The use of an object, person, or image to represent a larger idea or theme.' },
      { term: 'Stave', definition: 'Dickens\'s term for each chapter, deliberately evoking music and the idea of a carol.' },
      { term: 'Capitalism', definition: 'An economic system in which trade and industry are controlled by private owners for profit, which Dickens critiques through Scrooge.' },
      { term: 'Charity', definition: 'Voluntary giving to those in need; a central value Dickens promotes through the novella.' },
      { term: 'Victorian context', definition: 'The social and historical setting of 1840s Britain, marked by extreme inequality between the wealthy and the working poor.' },
    ],
    examTips: [
      'Always link your analysis to Dickens\'s wider social purpose -- he wrote the novella partly as a social pamphlet.',
      'Refer to the text as a "novella" rather than a "book" or "story" to show subject-specific knowledge.',
      'Track Scrooge\'s transformation by referring to specific staves to show how his language and behaviour change.',
      'Comment on Dickens\'s narrative voice and how his direct addresses to the reader shape our response.',
      'Consider what each spirit represents symbolically as well as narratively.',
    ],
    commonMistakes: [
      'Treating Scrooge\'s change as sudden rather than showing it develops gradually across the staves.',
      'Focusing only on Scrooge and neglecting other characters who embody the novella\'s themes.',
      'Writing about the text as if reporting events rather than analysing Dickens\'s narrative and language choices.',
      'Ignoring Victorian context and analysing the text as though it were set in the present day.',
    ],
    practiceQuestions: [
      {
        question: 'How does Dickens present Scrooge as a character who changes? Refer to the whole text. (20 marks)',
        markAllocation: 20,
        guidance: 'Structure your response chronologically or thematically. Use specific quotations from early and late staves to show the contrast. Link the change to Dickens\'s moral and social message.',
      },
      {
        question: 'How does Dickens use the Ghost of Christmas Present to explore ideas about poverty and inequality? (20 marks)',
        markAllocation: 20,
        guidance: 'Analyse specific moments such as the Cratchit family scene and the revelation of Ignorance and Want. Explore Dickens\'s language choices and what they suggest about his attitude towards Victorian society.',
      },
      {
        question: 'How does Dickens present the theme of redemption in A Christmas Carol? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore how redemption operates at both an individual level (Scrooge) and a social level (Dickens\'s message about society). Use evidence from multiple staves and comment on literary techniques including symbolism and narrative voice.',
      },
    ],
    revisionActivities: [
      'Create a transformation timeline for Scrooge, plotting his attitude, language, and key actions at the start of each stave to track how his character develops.',
      'For each of the three spirits, write a paragraph explaining what it represents symbolically, supported by a specific quotation and contextual links.',
      'Practise writing timed paragraphs on key themes (poverty, redemption, Christmas) using the structure: point, quotation, analysis, context, effect.',
      'Re-read Stave 1 and Stave 5 side by side, annotating the changes in Dickens\'s language and tone to build evidence for transformation essays.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Y9 Of Mice and Men
  // ---------------------------------------------------------------------------
  {
    id: 'rg-y9-omam',
    title: 'Of Mice and Men -- Y9 Study Guide',
    yearGroup: 'Y9',
    subject: 'English Literature',
    examBoard: 'Universal',
    keyTopics: [
      'The American Dream and its impossibility for working-class men',
      'Friendship and loyalty: George and Lennie\'s relationship',
      'Loneliness and isolation as universal human experiences',
      'Power and social hierarchy: race, gender, disability, and class',
      'The theme of dreams as both sustaining and destructive',
      'Steinbeck\'s portrayal of 1930s Great Depression America',
      'Fate, inevitability, and the cyclical structure of the novel',
    ],
    keyTerms: [
      { term: 'The American Dream', definition: 'The belief that any individual can achieve success and happiness through hard work, regardless of background.' },
      { term: 'Foreshadowing', definition: 'A narrative technique in which early events or details hint at the tragic outcome to follow.' },
      { term: 'Microcosm', definition: 'A small setting or community that reflects the wider society and its structures and problems.' },
      { term: 'Motif', definition: 'A recurring image, symbol, or idea in a text that reinforces a central theme.' },
      { term: 'Social marginalisation', definition: 'The process by which individuals are pushed to the edges of society due to race, gender, disability, or class.' },
      { term: 'Determinism', definition: 'The idea that events are inevitable and that individuals have little control over their fate.' },
      { term: 'Pastoral', definition: 'A literary mode that idealises rural life and nature, used here to contrast with the harsh reality of the ranch.' },
      { term: 'Great Depression', definition: 'The severe economic crisis of the 1930s in the United States that left millions unemployed and destitute.' },
      { term: 'Bindle stiff', definition: 'A term for a migrant worker who carried their belongings in a bundle, characteristic of the era Steinbeck depicts.' },
    ],
    examTips: [
      'Always refer to Steinbeck by name and to his deliberate narrative and language choices, not just "the writer".',
      'Connect characters to wider themes: Crooks represents racial marginalisation; Curley\'s wife represents gender oppression.',
      'Use the 1930s Great Depression context to explain why the dream is both essential and impossible.',
      'Comment on the novella\'s cyclical structure -- it begins and ends at the same riverbank -- and what this suggests about fate.',
      'When writing about Lennie, avoid describing him simply as "simple" -- explore how Steinbeck uses him to comment on vulnerability and protection.',
    ],
    commonMistakes: [
      'Treating George\'s decision at the end as purely cruel rather than exploring Steinbeck\'s complex presentation of mercy and friendship.',
      'Discussing all characters in isolation without linking them to the social hierarchy Steinbeck constructs.',
      'Failing to use the novella\'s historical and social context to deepen analysis.',
      'Summarising what happens rather than analysing how Steinbeck uses language and structure to create meaning.',
    ],
    practiceQuestions: [
      {
        question: 'How does Steinbeck present the theme of loneliness in Of Mice and Men? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore at least three characters who experience loneliness (e.g., Crooks, Curley\'s wife, Candy). Analyse specific language choices and link to the wider context of the Great Depression and social marginalisation.',
      },
      {
        question: 'How does Steinbeck present the relationship between George and Lennie? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore the complexities of their relationship: mutual dependency, George\'s frustration, genuine affection, and the tragic ending. Use evidence from across the novella and comment on what their relationship suggests about friendship and responsibility.',
      },
      {
        question: 'How does Steinbeck use the character of Crooks to explore ideas about race and power? (20 marks)',
        markAllocation: 20,
        guidance: 'Focus on the bunkhouse scene in Chapter 4. Analyse Steinbeck\'s language choices, the symbolism of Crooks\'s segregated room, and connect to the racial segregation laws of 1930s America.',
      },
    ],
    revisionActivities: [
      'Create a character power hierarchy diagram, placing each character on a ladder and annotating with quotations and reasons to explain their position.',
      'For each major theme (loneliness, the dream, friendship, power), find three quotations from different parts of the novel and write a single analytical sentence for each.',
      'Practise timed introductions: given a question, write an opening paragraph in five minutes that clearly states your argument and references context.',
      'Annotate the opening and closing descriptions of the Salinas River, noting Steinbeck\'s language choices and what the contrasts suggest about the novel\'s themes.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. IGCSE Language Paper 1
  // ---------------------------------------------------------------------------
  {
    id: 'rg-igcse-lang-p1',
    title: 'IGCSE English Language Paper 1',
    yearGroup: 'Y10-Y11',
    subject: 'English Language',
    examBoard: 'Edexcel IGCSE',
    keyTopics: [
      'Reading non-fiction texts for information and inference',
      'Analysing language: vocabulary, figurative language, and tone',
      'Analysing structure: openings, endings, sentence forms, and paragraphing',
      'Evaluating a writer\'s viewpoint, argument, and effectiveness',
      'Summary skills: identifying and synthesising key points',
      'Understanding purpose and audience in non-fiction writing',
    ],
    keyTerms: [
      { term: 'Synthesis', definition: 'Combining information from two or more texts into a coherent response, without simply listing points separately.' },
      { term: 'Explicit information', definition: 'Information stated directly and clearly in the text.' },
      { term: 'Implicit information', definition: 'Information suggested or implied in the text, requiring the reader to infer.' },
      { term: 'Viewpoint', definition: 'A writer\'s attitude, opinion, or perspective on the subject they are writing about.' },
      { term: 'Rhetoric', definition: 'The art of using language persuasively or effectively to influence an audience.' },
      { term: 'Counter-argument', definition: 'An opposing point of view that a writer acknowledges and then refutes to strengthen their argument.' },
      { term: 'Anecdote', definition: 'A short personal story used by a writer to illustrate a point and engage the reader\'s emotions.' },
      { term: 'Register', definition: 'The level of formality in a piece of writing, adjusted according to audience and purpose.' },
      { term: 'Bias', definition: 'A tendency in a text to favour one perspective unfairly, often through selective use of evidence or emotive language.' },
      { term: 'Evaluate', definition: 'To assess the effectiveness of a writer\'s choices, considering how well they achieve their purpose.' },
    ],
    examTips: [
      'Read each question carefully before reading the text -- knowing what you are looking for makes reading more efficient.',
      'For language questions, always move from identifying a technique to explaining the specific effect it has on the reader.',
      'For summary questions, use your own words as much as possible -- direct quotation without comment will not score highly.',
      'Manage your time: use the mark allocation as a guide for how long to spend on each question.',
      'For evaluation questions, make a clear judgement and support it with evidence rather than simply describing what the writer does.',
    ],
    commonMistakes: [
      'Using only language analysis for questions that ask about both language and structure.',
      'Treating summary as a retelling exercise rather than a selective synthesis of key points.',
      'Writing "the writer uses adjectives to make it more interesting" without naming and analysing the specific words.',
      'Running out of time on the final question by spending too long on earlier, lower-mark questions.',
    ],
    practiceQuestions: [
      {
        question: 'What do you understand from the text about the writer\'s experience of visiting the Arctic? (8 marks)',
        markAllocation: 8,
        guidance: 'Make clear, distinct points using evidence from across the text. Aim for four or five separate pieces of information, both explicit and inferred. Write in full sentences using your own words where possible.',
      },
      {
        question: 'How does the writer use language and structure to create a sense of awe in lines 12-30? (12 marks)',
        markAllocation: 12,
        guidance: 'Identify specific language choices (vocabulary, figurative language, tone) and structural choices (sentence length, paragraph structure). For each choice, explain the effect on the reader. Aim for at least four developed analytical points.',
      },
      {
        question: 'Evaluate how effectively the writer conveys their argument about climate change. (20 marks)',
        markAllocation: 20,
        guidance: 'Make a clear overall judgement in your introduction. Then explore specific techniques the writer uses, assessing how well each one serves the argument. Consider counter-arguments and any limitations. Support every point with evidence.',
      },
    ],
    revisionActivities: [
      'Practise timed summary questions using news articles or travel writing, aiming to identify five key points in no more than ten minutes.',
      'Collect examples of different rhetorical techniques (anaphora, rule of three, rhetorical question, direct address) from opinion pieces and annotate their effects.',
      'Complete two timed Paper 1 practice papers under exam conditions, then use the mark scheme to identify which question types you find most challenging.',
      'Annotate the structure of three different non-fiction texts, noting where and how the writer varies sentence length and paragraph length and the effect of each choice.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. IGCSE Language Paper 2
  // ---------------------------------------------------------------------------
  {
    id: 'rg-igcse-lang-p2',
    title: 'IGCSE English Language Paper 2',
    yearGroup: 'Y10-Y11',
    subject: 'English Language',
    examBoard: 'Edexcel IGCSE',
    keyTopics: [
      'Transactional writing: letters, reports, articles, and speeches',
      'Adapting form, tone, and register for purpose and audience',
      'Structuring a persuasive argument effectively',
      'Using a range of persuasive and rhetorical techniques',
      'Descriptive writing: creating vivid, structured imagery',
      'Accurate grammar, spelling, and punctuation under timed conditions',
    ],
    keyTerms: [
      { term: 'Transactional writing', definition: 'Writing produced for a real-world purpose and audience, such as a letter, report, article, or speech.' },
      { term: 'Formal letter conventions', definition: 'The structural rules of a formal letter including address, date, salutation, sign-off, and tone.' },
      { term: 'Ethos', definition: 'An appeal to the writer\'s credibility or authority to persuade the audience.' },
      { term: 'Pathos', definition: 'An appeal to the audience\'s emotions to influence their response.' },
      { term: 'Logos', definition: 'An appeal to logic and reason, using evidence, statistics, or rational argument to persuade.' },
      { term: 'Direct address', definition: 'Using second-person pronouns (you, your) to engage the reader personally.' },
      { term: 'Hyperbole', definition: 'Deliberate exaggeration for effect, used to emphasise a point or create a dramatic impact.' },
      { term: 'Tricolon', definition: 'A list or series of three parallel phrases or clauses, used for rhythm and emphasis.' },
      { term: 'Counterpoint', definition: 'An acknowledgement of an opposing view, followed by a refutation, used to strengthen an argument.' },
    ],
    examTips: [
      'Always establish the form clearly at the start -- a letter needs an address and salutation, a speech needs direct address and an engaging opening.',
      'Use a checklist of persuasive techniques but ensure every technique serves the argument rather than being included for its own sake.',
      'Maintain a consistent tone and register throughout -- do not switch between formal and informal mid-response.',
      'For descriptive writing, plan a clear structure before writing: where will you begin, how will the description develop, and what is the final image?',
      'Use a range of sentence structures deliberately: vary lengths, use subordinate clauses, and experiment with starting sentences in different ways.',
    ],
    commonMistakes: [
      'Forgetting formal letter conventions such as the correct sign-off when the recipient is named or unnamed.',
      'Overloading the response with techniques at the expense of a coherent, developed argument.',
      'Writing descriptively when the task requires argument, or vice versa.',
      'Neglecting accuracy: one in ten words spelled incorrectly or repeated punctuation errors significantly reduce the mark.',
    ],
    practiceQuestions: [
      {
        question: 'Write a letter to your headteacher arguing that students should be allowed to use their phones in school. (40 marks)',
        markAllocation: 40,
        guidance: 'Use formal letter conventions. Develop at least three distinct arguments, each in its own paragraph. Use a range of rhetorical techniques. Counter at least one opposing view. Aim for around 450-600 words.',
      },
      {
        question: 'Write an article for a student magazine about the pressures of social media on young people. (40 marks)',
        markAllocation: 40,
        guidance: 'Use an engaging headline and subheadings. Adopt an appropriate tone for a student readership. Include a mix of information, opinion, anecdote, and rhetorical technique. Structure the article with a clear introduction, development, and conclusion.',
      },
      {
        question: 'Write a description of a city at night. (40 marks)',
        markAllocation: 40,
        guidance: 'Focus on creating atmosphere through sensory detail, figurative language, and structural choices. Plan a clear movement through the cityscape. Vary sentence lengths and punctuation for effect. Aim for a memorable final image.',
      },
    ],
    revisionActivities: [
      'Write one transactional text per week in exam conditions, then self-assess against the mark scheme focusing on form, tone, and technical accuracy.',
      'Build a "rhetoric toolkit": collect and annotate five examples each of ethos, pathos, logos, tricolon, and direct address from speeches, editorials, and opinion articles.',
      'Practise opening paragraphs for five different writing tasks, focusing on establishing purpose, audience, and tone within the first three sentences.',
      'Proofread three pieces of your own writing for common errors (comma splices, apostrophe misuse, sentence fragments) and compile a personal error checklist.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. IGCSE Literature Poetry
  // ---------------------------------------------------------------------------
  {
    id: 'rg-igcse-lit-poetry',
    title: 'IGCSE Literature: Poetry Anthology',
    yearGroup: 'Y10-Y11',
    subject: 'English Literature',
    examBoard: 'Edexcel IGCSE',
    keyTopics: [
      'Analysing a named poem closely: language, structure, and form',
      'Comparing two poems thematically and in terms of technique',
      'Understanding how poetic form (sonnet, free verse, dramatic monologue) creates meaning',
      'Analysing rhythm, metre, and sound devices',
      'Exploring the speaker\'s voice and how it develops across a poem',
      'Placing poems in their historical, cultural, and biographical context',
      'Key themes across the anthology: identity, conflict, nature, love, power, and loss',
    ],
    keyTerms: [
      { term: 'Enjambment', definition: 'When a sentence or phrase runs over from one line to the next without a pause, creating a sense of movement or urgency.' },
      { term: 'Caesura', definition: 'A deliberate pause within a line of poetry, created by punctuation, which can slow the pace or create dramatic effect.' },
      { term: 'Volta', definition: 'A turn or shift in argument, tone, or perspective within a poem, often signalled by "but", "yet", or "however".' },
      { term: 'Dramatic monologue', definition: 'A poem in which a single fictional speaker addresses a silent audience, revealing character through their speech.' },
      { term: 'Iambic pentameter', definition: 'A metrical pattern of ten syllables per line alternating between unstressed and stressed beats, often associated with the human heartbeat.' },
      { term: 'Sibilance', definition: 'The repetition of soft "s" or "sh" sounds within a line of poetry, often creating a gentle, sinister, or whispering effect.' },
      { term: 'Extended metaphor', definition: 'A metaphor that is developed and sustained across several lines or an entire poem.' },
      { term: 'Free verse', definition: 'Poetry without a regular rhyme scheme or metre, allowing the form to mirror the content and emotion.' },
      { term: 'Juxtaposition', definition: 'The placement of two contrasting ideas, images, or characters side by side to highlight their differences.' },
    ],
    examTips: [
      'Always start with a clear thesis that responds directly to the question, not a retelling of the poem.',
      'Move through the poem methodically but avoid treating it as a line-by-line commentary -- group related techniques and effects.',
      'Comment on form and structure as well as language: why does the poem have this many stanzas? Why does the line break here?',
      'For comparison questions, make integrated comparisons -- compare a point about Poem A directly with Poem B rather than writing about each separately.',
      'Include a brief contextual point where it illuminates the poem, but never let context dominate at the expense of close analysis.',
    ],
    commonMistakes: [
      'Identifying poetic devices without explaining their effect on the reader or how they contribute to the poem\'s meaning.',
      'Writing about poems as though they are autobiographical accounts of the poet\'s experience rather than crafted literary texts.',
      'Ignoring form and structure in favour of language analysis alone.',
      'Treating comparison as a list of similarities and differences rather than an integrated analytical argument.',
    ],
    practiceQuestions: [
      {
        question: 'How does the poet explore the theme of memory in this poem? (20 marks)',
        markAllocation: 20,
        guidance: 'Analyse language choices, structural features, and form. Develop three or four substantial points each supported by close reading of specific words or phrases. Include a brief contextual reference where relevant.',
      },
      {
        question: 'Compare how two poets present ideas about power and conflict. (20 marks)',
        markAllocation: 20,
        guidance: 'Make integrated comparisons throughout your response. Analyse methods as well as ideas -- how does each poet\'s form, structure, and language reflect their attitude to power? Aim for four comparative points.',
      },
      {
        question: 'How does the poet use voice and perspective to shape the reader\'s response in this poem? (20 marks)',
        markAllocation: 20,
        guidance: 'Consider who is speaking, what they reveal about themselves, and how the poet uses first-person perspective, tone, and address to position the reader. Close-read specific moments where the speaker\'s voice is most revealing.',
      },
    ],
    revisionActivities: [
      'Create a poem comparison grid with themes along one axis and poems along the other, filling in relevant quotations and techniques for each intersection.',
      'Practise writing analytical paragraphs that integrate a quotation within a sentence rather than dropping in a block of quoted text.',
      'Record yourself reading a poem aloud, listening back to notice where natural stresses fall and how this relates to the written metre and punctuation.',
      'Produce a one-page revision sheet for each poem covering: theme, key technique, best quotation, contextual link, and comparison poem.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. IGCSE Literature: Of Mice and Men
  // ---------------------------------------------------------------------------
  {
    id: 'rg-igcse-lit-omam',
    title: 'IGCSE Literature: Of Mice and Men',
    yearGroup: 'Y10-Y11',
    subject: 'English Literature',
    examBoard: 'Edexcel IGCSE',
    keyTopics: [
      'Steinbeck\'s presentation of friendship, loyalty, and protection',
      'The impossibility of the American Dream in Depression-era America',
      'Power structures: race, gender, physical ability, and age',
      'Loneliness and the human need for companionship',
      'Fate, inevitability, and the cyclical structure of the novella',
      'Animal imagery and its function in the text',
      'Key characters: George, Lennie, Crooks, Curley\'s wife, Candy, Curley',
    ],
    keyTerms: [
      { term: 'Cyclical structure', definition: 'The novella begins and ends at the same location by the Salinas River, suggesting the inevitability and repetition of the characters\' fate.' },
      { term: 'Symbolism', definition: 'The use of objects or images to represent ideas: the rabbits symbolise the dream; the puppy symbolises vulnerability.' },
      { term: 'Social marginalisation', definition: 'The exclusion of individuals from the mainstream of society based on race, gender, disability, or age.' },
      { term: 'Naturalism', definition: 'A literary mode in which characters\' lives are shaped by forces of nature, environment, and society beyond their control.' },
      { term: 'Tragedy', definition: 'A genre in which the protagonist is brought to ruin by circumstances or their own nature, often despite their positive qualities.' },
      { term: 'Foreshadowing', definition: 'Events early in the novella that anticipate the tragic ending, such as Lennie\'s killing of the mouse and the puppy.' },
      { term: 'Binary opposition', definition: 'The pairing of contrasting concepts (strength and vulnerability, dream and reality) to structure the novella\'s themes.' },
      { term: 'Dialogue', definition: 'Steinbeck\'s use of vernacular speech patterns to establish character, class, and authenticity.' },
      { term: 'Authorial intent', definition: 'The purpose or message Steinbeck intends to communicate through his narrative and characterisation choices.' },
    ],
    examTips: [
      'Use the term "novella" and refer to Steinbeck\'s deliberate craft choices rather than simply summarising plot.',
      'Link every character analysis to a broader theme -- individual characters function as representatives of social groups.',
      'The historical context of the Great Depression and Jim Crow-era racial segregation is essential for analysing Crooks and the power hierarchy.',
      'Discuss the ending in terms of mercy versus tragedy rather than presenting George\'s decision as simply right or wrong.',
      'Use structural analysis: comment on why Steinbeck opens and closes the novella at the riverbank.',
    ],
    commonMistakes: [
      'Analysing Curley\'s wife only as a villain or temptress without acknowledging Steinbeck\'s sympathetic presentation of her loneliness and thwarted ambition.',
      'Failing to connect the dream of the farm to the wider context of the American Dream ideology.',
      'Writing about plot events rather than analysing Steinbeck\'s language and structural choices.',
      'Neglecting shorter chapters or scenes (such as Crooks\'s bunkhouse chapter) in favour of only the most dramatic moments.',
    ],
    practiceQuestions: [
      {
        question: 'How does Steinbeck present Curley\'s wife as a victim in the novella? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore both her victimisation at the hands of other characters and Steinbeck\'s sympathetic authorial perspective. Use evidence from her introduction, the bunkhouse chapter, and the barn scene. Link to the historical context of women in 1930s America.',
      },
      {
        question: 'How does Steinbeck use the theme of dreams to develop his argument about American society? (20 marks)',
        markAllocation: 20,
        guidance: 'Consider multiple characters\' dreams (George and Lennie\'s farm, Curley\'s wife\'s Hollywood ambition, Candy\'s hope). Explore how Steinbeck uses these dreams to comment on the gap between aspiration and reality in Depression-era America.',
      },
      {
        question: 'How does Steinbeck present power and powerlessness in Of Mice and Men? (20 marks)',
        markAllocation: 20,
        guidance: 'Map the power hierarchy on the ranch. Explore how characters exercise or are denied power based on race, gender, ability, and age. Use specific quotations and analyse language choices that reflect these power dynamics.',
      },
    ],
    revisionActivities: [
      'Draw an annotated power hierarchy of the ranch, placing characters from most to least powerful and supporting each position with a specific quotation.',
      'For each chapter, write one sentence identifying its primary narrative purpose (e.g., establishing character, building tension, foreshadowing) and one key quotation.',
      'Write practice paragraphs on each major character, ensuring you explore both how Steinbeck presents them and what they represent thematically.',
      'Compare the opening and closing descriptions of the riverbank in detail, annotating differences in language, atmosphere, and what each suggests about fate.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. IGCSE Literature: An Inspector Calls
  // ---------------------------------------------------------------------------
  {
    id: 'rg-igcse-lit-inspector',
    title: 'IGCSE Literature: An Inspector Calls',
    yearGroup: 'Y10-Y11',
    subject: 'English Literature',
    examBoard: 'Edexcel IGCSE',
    keyTopics: [
      'Priestley\'s socialist message and the responsibilities of the upper classes',
      'The Inspector as a dramatic and symbolic device',
      'The generational divide: the young Birlings versus the older generation',
      'Dramatic irony and Priestley\'s use of time',
      'The theme of guilt, responsibility, and social conscience',
      'The role of Eva Smith/Daisy Renton as a symbol of the working class',
      'Key characters: Inspector Goole, Arthur Birling, Sybil Birling, Sheila, Eric, Gerald',
    ],
    keyTerms: [
      { term: 'Dramatic irony', definition: 'When the audience knows something a character does not, creating tension, humour, or pathos.' },
      { term: 'Morality play', definition: 'A dramatic form in which characters represent moral qualities and the audience is taught a lesson; Priestley draws on this tradition.' },
      { term: 'Social responsibility', definition: 'The obligation of individuals and institutions to act in ways that benefit society, a central message Priestley promotes.' },
      { term: 'Capitalism', definition: 'An economic system based on private ownership and profit, which Priestley critiques through Arthur Birling\'s attitudes.' },
      { term: 'Dramatic tension', definition: 'The anxiety or suspense created for the audience through conflict, revelation, or uncertainty about what will happen next.' },
      { term: 'Catalyst', definition: 'A person or event that triggers significant change in others; the Inspector functions as a catalyst for the Birlings\' self-examination.' },
      { term: 'Collective responsibility', definition: 'The idea that society as a whole shares responsibility for the welfare of its members, regardless of individual agency.' },
      { term: 'Exposition', definition: 'The opening section of a play that establishes setting, character relationships, and dramatic context.' },
      { term: 'Deus ex machina', definition: 'An unexpected figure or event that appears to resolve a problem; the Inspector operates with god-like knowledge and authority.' },
    ],
    examTips: [
      'Always consider Priestley\'s 1945 context: the play was written just after World War Two but set in 1912, creating dramatic irony about the wars to come.',
      'Analyse what the Inspector represents beyond his literal role as a police officer -- consider him as a symbol of collective conscience.',
      'Explore the contrast between how characters respond at the end: who has genuinely changed and who has not, and what this suggests about human nature.',
      'Reference specific stage directions as well as dialogue -- Priestley uses the physical stage as a site of meaning.',
      'The play has a morality structure: track how each Birling family member is implicated in Eva\'s death and what their responses reveal.',
    ],
    commonMistakes: [
      'Focusing only on the Inspector and neglecting the development of Sheila and Eric as characters who represent genuine moral change.',
      'Treating the play\'s ending as ambiguous without exploring what Priestley intends by leaving the moral question open.',
      'Forgetting that the play is set in 1912 but written in 1945 -- Priestley exploits this gap deliberately.',
      'Writing about characters as real people rather than dramatic constructs serving Priestley\'s social argument.',
    ],
    practiceQuestions: [
      {
        question: 'How does Priestley use the character of the Inspector to convey his social message? (20 marks)',
        markAllocation: 20,
        guidance: 'Analyse the Inspector\'s language, interrogation methods, and final speech. Explore what he represents symbolically. Link to Priestley\'s socialist beliefs and the 1945 post-war context in which audiences first saw the play.',
      },
      {
        question: 'How does Priestley present Arthur Birling as a figure of moral failure? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore Birling\'s capitalist outlook, his dramatic irony (his predictions about the Titanic and war), his treatment of Eva Smith, and his response at the play\'s end. Analyse specific language choices and link to Priestley\'s political purpose.',
      },
      {
        question: 'How does Priestley explore the theme of responsibility in An Inspector Calls? (20 marks)',
        markAllocation: 20,
        guidance: 'Compare how different characters engage with the concept of responsibility. Explore the contrast between individual and collective responsibility. Use evidence from across the play and consider Priestley\'s wider social message.',
      },
    ],
    revisionActivities: [
      'Create a responsibility timeline for each Birling family member, tracking when their involvement with Eva Smith occurred and how they respond to the revelation.',
      'Write a paragraph analysing the Inspector\'s final speech, focusing on Priestley\'s language choices and the speech\'s function as the play\'s moral climax.',
      'Compare Arthur Birling and Inspector Goole as dramatic opposites: list their contrasting attitudes, language choices, and dramatic functions.',
      'Annotate the opening stage directions, identifying every detail Priestley includes and what each contributes to the play\'s themes and dramatic effects.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. IGCSE Literature: Macbeth
  // ---------------------------------------------------------------------------
  {
    id: 'rg-igcse-lit-macbeth',
    title: 'IGCSE Literature: Macbeth',
    yearGroup: 'Y10-Y11',
    subject: 'English Literature',
    examBoard: 'Edexcel IGCSE',
    keyTopics: [
      'Ambition and its destructive consequences',
      'The relationship between Macbeth and Lady Macbeth',
      'Kingship, tyranny, and the natural order',
      'The supernatural: the witches, visions, and the pathetic fallacy of darkness',
      'Guilt, psychological deterioration, and the corrupting effect of power',
      'Gender and power: Lady Macbeth\'s challenge to and dependence on gender norms',
      'Shakespeare\'s Jacobean context: the Great Chain of Being, divine right of kings, and witchcraft',
    ],
    keyTerms: [
      { term: 'Hamartia', definition: 'A tragic flaw in a protagonist\'s character that leads to their downfall; Macbeth\'s is his unchecked ambition.' },
      { term: 'Hubris', definition: 'Excessive pride or arrogance that leads a character to defy moral or divine order, resulting in catastrophe.' },
      { term: 'Equivocation', definition: 'The use of deliberately ambiguous language to mislead; the witches\' prophecies are equivocal, promising the truth while concealing its real meaning.' },
      { term: 'Soliloquy', definition: 'A speech in which a character speaks their thoughts aloud, giving the audience privileged access to their inner mind.' },
      { term: 'The Great Chain of Being', definition: 'A Jacobean belief in a divinely ordained hierarchy in which every creature and person had a fixed place; regicide was the ultimate disruption of this order.' },
      { term: 'Tragic arc', definition: 'The structural pattern of a tragedy in which the protagonist rises, reaches a peak, then falls to ruin and death.' },
      { term: 'Aside', definition: 'A brief comment spoken by a character directly to the audience, unheard by other characters on stage.' },
      { term: 'Imagery', definition: 'Descriptive language appealing to the senses, used by Shakespeare to develop themes of blood, darkness, and nature.' },
      { term: 'Nemesis', definition: 'The inevitable punishment or downfall that befalls a character who has transgressed moral or divine law.' },
    ],
    examTips: [
      'Always refer to Shakespeare by name and comment on his dramatic and linguistic choices as a craftsman.',
      'Reference the Jacobean context -- King James I\'s interest in witchcraft, the divine right of kings, and anxieties about regicide -- where it enriches your analysis.',
      'Track Macbeth\'s psychological deterioration through his language: the quality of his verse changes as he descends into tyranny.',
      'Analyse Lady Macbeth\'s language carefully: her "unsex me here" speech reveals how gender norms both empower and ultimately destroy her.',
      'Use dramatic terminology (soliloquy, aside, stage direction) to show awareness of the play as a staged performance.',
    ],
    commonMistakes: [
      'Blaming the witches entirely for Macbeth\'s actions without exploring his own agency and ambition.',
      'Treating Lady Macbeth as simply evil rather than as a complex character who also suffers guilt and psychological collapse.',
      'Focusing only on Act 1 and Act 5 without analysing how the middle acts develop themes and character.',
      'Paraphrasing Shakespeare\'s language rather than analysing its specific effects and connotations.',
    ],
    practiceQuestions: [
      {
        question: 'How does Shakespeare present Macbeth as a tragic hero? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore both Macbeth\'s heroic qualities and his fatal flaws. Use the classical definition of a tragic hero and trace the arc from his initial bravery through his moral decline to his death. Analyse specific soliloquies and language choices.',
      },
      {
        question: 'How does Shakespeare use the supernatural to explore themes of ambition and fate? (20 marks)',
        markAllocation: 20,
        guidance: 'Analyse the witches\' prophecies, the dagger vision, and Banquo\'s ghost. Explore how Shakespeare uses these supernatural elements to externalise Macbeth\'s psychological state. Link to Jacobean beliefs about witchcraft and divine order.',
      },
      {
        question: 'How does Shakespeare present the relationship between Macbeth and Lady Macbeth as the play develops? (20 marks)',
        markAllocation: 20,
        guidance: 'Explore the shift in power within their relationship across the play. Compare their language and behaviour in Act 1 with Act 3 onwards, where their roles effectively reverse. Analyse what this reversal suggests about guilt and the corrupting effects of power.',
      },
    ],
    revisionActivities: [
      'Create a psychological character profile for Macbeth, noting three quotations from each act that trace his mental and moral deterioration.',
      'Annotate the "Is this a dagger" soliloquy (Act 2 Scene 1) for language choices, dramatic effect, and what it reveals about Macbeth\'s psychological state.',
      'Compare Lady Macbeth\'s "unsex me here" speech with her sleepwalking scene: write a paragraph exploring how her language changes and what this reveals about her inner life.',
      'Create a thematic quotation bank with at least three quotations per theme (ambition, guilt, kingship, the supernatural, gender) ready for use in exam responses.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 11. IAL Units 1-2 Language Study
  // ---------------------------------------------------------------------------
  {
    id: 'rg-ial-units-1-2',
    title: 'IAL Units 1-2: Language Study',
    yearGroup: 'Y12-Y13',
    subject: 'English Language',
    examBoard: 'Edexcel IAL',
    keyTopics: [
      'Language frameworks: phonology, graphology, lexis, grammar, discourse, and pragmatics',
      'Analysing spoken language: features of spontaneous and planned speech',
      'Analysing written language: genre, register, and style in non-fiction and literary texts',
      'Language change: historical and contemporary change; attitudes to change',
      'Language and identity: sociolect, dialect, idiolect, and language in social groups',
      'Language acquisition: key theories (Chomsky, Skinner, Vygotsky) and stages of development',
      'Language and power: dominance, solidarity, and ideological models',
    ],
    keyTerms: [
      { term: 'Phonology', definition: 'The study of the sound system of language, including phonemes, prosodic features, and phonological processes.' },
      { term: 'Pragmatics', definition: 'The study of how context shapes the meaning of language beyond its literal or grammatical meaning.' },
      { term: 'Discourse analysis', definition: 'The study of language in use above the sentence level, examining how texts are organised and how meaning is constructed across exchanges.' },
      { term: 'Idiolect', definition: 'The unique language variety of an individual, shaped by their background, experiences, and personality.' },
      { term: 'Sociolect', definition: 'A variety of language used by a particular social group, defined by factors such as age, class, or occupation.' },
      { term: 'Language acquisition device (LAD)', definition: 'Chomsky\'s hypothesis that humans are born with an innate biological capacity to acquire language.' },
      { term: 'Cooperative principle', definition: 'Grice\'s theory that speakers follow maxims of quantity, quality, relation, and manner to communicate effectively and cooperatively.' },
      { term: 'Deixis', definition: 'Language that points to something in time, space, or person (e.g., "this", "here", "now") whose meaning depends on context.' },
      { term: 'Semantic change', definition: 'The process by which the meaning of a word shifts over time through processes such as broadening, narrowing, amelioration, or pejoration.' },
    ],
    examTips: [
      'Apply linguistic frameworks systematically: always consider phonology, lexis, grammar, and discourse, selecting those most relevant to the data.',
      'Use metalanguage precisely and consistently -- using technical terms correctly demonstrates subject knowledge and earns marks.',
      'In data-response questions, always ground your analysis in specific examples from the data rather than making general claims.',
      'When discussing language change or variation, consider multiple factors (social, historical, technological) rather than attributing change to a single cause.',
      'For spoken language analysis, recognise features such as false starts, fillers, repair, adjacency pairs, and turn-taking alongside the standard written frameworks.',
    ],
    commonMistakes: [
      'Describing what a text does without explaining why the language choices produce that effect.',
      'Applying all frameworks mechanically to every text rather than selecting the most relevant for the specific data.',
      'Conflating descriptive and prescriptive approaches to language variation -- show you understand both and can evaluate them critically.',
      'Neglecting pragmatics and discourse-level features in favour of purely lexical or grammatical analysis.',
    ],
    practiceQuestions: [
      {
        question: 'Analyse how language is used in the following pair of texts about social media, one from 2005 and one from 2023, to explore language change. (40 marks)',
        markAllocation: 40,
        guidance: 'Apply relevant language frameworks to both texts. Identify specific lexical, grammatical, and discourse-level changes. Consider the influence of technology, social change, and attitudes to language change. Reference relevant linguistic theories where appropriate.',
      },
      {
        question: 'Using the transcript below, analyse the features of spoken language and what they suggest about the power relationship between the two speakers. (30 marks)',
        markAllocation: 30,
        guidance: 'Focus on phonological features, turn-taking, interruption, hedging, and topic control. Apply relevant theories of language and power (e.g., Lakoff, Grice, Goffman). Ground every observation in specific evidence from the transcript.',
      },
      {
        question: 'Discuss the view that children\'s language acquisition is primarily determined by their innate biological capacity rather than their environment. (30 marks)',
        markAllocation: 30,
        guidance: 'Evaluate both nativist (Chomsky) and behaviourist (Skinner) positions, as well as interactionist approaches (Vygotsky). Use specific examples of acquisition stages and features. Develop a clear, argued position rather than simply describing theories.',
      },
    ],
    revisionActivities: [
      'Build a language frameworks reference card with definitions and example analytical phrases for each framework (phonology, lexis, grammar, discourse, pragmatics).',
      'Collect three spoken language transcripts from different contexts (e.g., classroom, TV interview, casual conversation) and annotate each for five key spoken language features.',
      'Write a 400-word analysis of a single advertisement using all relevant language frameworks, then peer-review it against a mark scheme focusing on specificity of evidence and precision of terminology.',
      'Create a revision timeline for language change, placing key developments (printing press, standardisation, colonialism, digital communication) in chronological order with their linguistic consequences.',
    ],
  },

  // ---------------------------------------------------------------------------
  // 12. IAL Units 3-4 Coursework
  // ---------------------------------------------------------------------------
  {
    id: 'rg-ial-units-3-4',
    title: 'IAL Units 3-4: Coursework',
    yearGroup: 'Y12-Y13',
    subject: 'Both',
    examBoard: 'Edexcel IAL',
    keyTopics: [
      'Constructing an independent investigation question for the language investigation',
      'Research methodology: data collection, ethical considerations, and sampling',
      'Applying linguistic theories and frameworks to primary data',
      'Writing a critical commentary that links linguistic and literary analysis',
      'The creative writing component: producing original writing in a specific form and style',
      'Writing a reflective commentary on creative choices and influences',
      'Academic writing conventions: referencing, bibliography, and avoiding plagiarism',
    ],
    keyTerms: [
      { term: 'Primary data', definition: 'Data collected directly by the researcher through observation, recording, interview, or survey for the specific purpose of the investigation.' },
      { term: 'Secondary data', definition: 'Existing data or sources consulted by the researcher, such as published transcripts, corpora, or literary criticism.' },
      { term: 'Hypothesis', definition: 'A testable statement or claim that the investigation sets out to explore and evaluate using evidence.' },
      { term: 'Corpus', definition: 'A systematic collection of language data, spoken or written, used as the basis for linguistic analysis.' },
      { term: 'Triangulation', definition: 'Using multiple data sources or methods to strengthen the validity and reliability of an investigation\'s findings.' },
      { term: 'Critical commentary', definition: 'A piece of writing that analyses and evaluates a text\'s language, form, and meaning in an academic register.' },
      { term: 'Reflective commentary', definition: 'A discursive piece in which the writer explains and justifies the choices made in their own creative or analytical writing.' },
      { term: 'Intertextuality', definition: 'The relationship between a text and other texts it references, alludes to, or is in dialogue with, consciously or unconsciously.' },
      { term: 'Analytical register', definition: 'The formal, objective, and precise language style expected in academic writing, avoiding colloquialisms and personal anecdote.' },
    ],
    examTips: [
      'Choose an investigation topic that genuinely interests you -- the quality of coursework is directly proportional to the depth of your engagement with the material.',
      'Plan your investigation question carefully: it should be specific, arguable, and answerable with the data you can realistically collect.',
      'In your commentary, explicitly link your creative or analytical choices to named theories, frameworks, or texts to demonstrate academic rigour.',
      'For creative writing, read widely in your chosen form before writing -- imitate the conventions before breaking them deliberately.',
      'Treat your bibliography as a living document: record every source as you read it rather than reconstructing it at the end.',
    ],
    commonMistakes: [
      'Choosing a research question that is too broad to be answered with a manageable amount of data.',
      'Describing data features without linking them to linguistic theories or frameworks in the investigation write-up.',
      'Writing a reflective commentary that narrates the writing process rather than analysing specific language and structural choices and their effects.',
      'Failing to maintain a consistent analytical register, lapsing into informal language or personal anecdote in academic sections.',
    ],
    practiceQuestions: [
      {
        question: 'Write a 500-word plan for a language investigation into gender differences in workplace email communication, including your hypothesis, data collection method, and ethical considerations. (Formative task)',
        markAllocation: 0,
        guidance: 'Formulate a specific, testable hypothesis. Justify your data collection method and sample size. Address ethical issues including consent, anonymity, and data storage. Identify two or three linguistic frameworks most relevant to your hypothesis.',
      },
      {
        question: 'Write a 1,000-word critical commentary on a literary text of your choice, analysing how the writer uses language and structure to create meaning. (Coursework component)',
        markAllocation: 50,
        guidance: 'Apply literary and linguistic frameworks systematically. Develop a clear analytical argument. Embed close reading of specific textual moments. Reference secondary criticism where relevant. Maintain an academic register throughout.',
      },
      {
        question: 'Write a piece of original creative non-fiction (800-1,000 words) in the style of a writer you have studied, followed by a 400-word reflective commentary explaining your stylistic choices. (Coursework component)',
        markAllocation: 50,
        guidance: 'Demonstrate clear awareness of the conventions of your chosen form and the stylistic fingerprint of your chosen writer. In the commentary, analyse specific language, structural, and stylistic choices and justify them with reference to your source texts and the effect you intended to achieve.',
      },
    ],
    revisionActivities: [
      'Draft three potential investigation questions, then evaluate each against the criteria of specificity, arguability, and feasibility before selecting the strongest.',
      'Write two contrasting analytical paragraphs on the same piece of data -- one using a linguistic framework and one using a literary framework -- then reflect on what each approach reveals.',
      'Read three published examples of academic linguistic investigations and annotate their structure, noting how they introduce data, apply frameworks, and draw conclusions.',
      'Produce a draft bibliography for your coursework, ensuring every source is formatted correctly, and check your investigation for any uncited ideas that require referencing.',
    ],
  },

];
