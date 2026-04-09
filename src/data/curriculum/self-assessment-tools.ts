/**
 * Student self-assessment checklists and peer assessment guides for Y7-Y13 English.
 * Covers KS3 (Y7-Y9), IGCSE (Y10-Y11), and IAL (Y12-Y13).
 * All strings are ASCII-safe.
 */

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface SelfAssessmentChecklist {
  id: string;
  title: string;
  yearGroup: string;
  taskType: 'essay' | 'creative-writing' | 'analysis' | 'speech' | 'general';
  checklistItems: { item: string; category: string; tip: string }[];
  targetGrade: string;
  reflectionPrompts: string[];
}

export interface PeerAssessmentGuide {
  id: string;
  title: string;
  yearGroup: string;
  taskType: string;
  assessmentCriteria: { criterion: string; whatToLookFor: string; feedbackStarter: string }[];
  constructiveFeedbackPhrases: string[];
  improvementSuggestions: string[];
}

// ── Self-Assessment Checklists ────────────────────────────────────────────────

export const selfAssessmentChecklists: SelfAssessmentChecklist[] = [

  // 1. Y7 PEE Paragraph
  {
    id: 'sa-y7-pee',
    title: 'Y7 PEE Paragraph Self-Assessment',
    yearGroup: 'Year 7',
    taskType: 'analysis',
    targetGrade: '3-4',
    checklistItems: [
      {
        item: 'I have stated a clear point in my opening sentence.',
        category: 'Structure',
        tip: 'Your point should answer the question directly and not simply repeat it.',
      },
      {
        item: 'I have included a quotation that supports my point.',
        category: 'Evidence',
        tip: 'Choose the shortest quotation that still proves your point.',
      },
      {
        item: 'My quotation is embedded within a sentence, not dropped in alone.',
        category: 'Evidence',
        tip: 'Use the author\'s name: "Hardy presents..." or "The writer describes...".',
      },
      {
        item: 'I have explained how the quotation proves my point.',
        category: 'Explanation',
        tip: 'Ask yourself: what does this word/phrase make the reader think or feel?',
      },
      {
        item: 'I have identified a language technique used in my quotation.',
        category: 'Language',
        tip: 'Look for simile, metaphor, personification, repetition, or alliteration.',
      },
      {
        item: 'I have explained the effect of that technique on the reader.',
        category: 'Language',
        tip: 'Start with "This makes the reader..." or "This creates a sense of...".',
      },
      {
        item: 'My paragraph is written in formal English with no slang.',
        category: 'Vocabulary',
        tip: 'Replace "shows" with "suggests", "illustrates", "implies", or "conveys".',
      },
      {
        item: 'I have checked my paragraph for spelling and punctuation errors.',
        category: 'SPAG',
        tip: 'Read your work aloud quietly -- if it sounds wrong, it probably is.',
      },
    ],
    reflectionPrompts: [
      'Which part of PEE do you find hardest to write, and why?',
      'Could you add a second piece of evidence to strengthen your paragraph further?',
      'What one change would improve your paragraph the most?',
    ],
  },

  // 2. Y7 Creative Writing
  {
    id: 'sa-y7-creative',
    title: 'Y7 Creative Writing Self-Assessment',
    yearGroup: 'Year 7',
    taskType: 'creative-writing',
    targetGrade: '3-4',
    checklistItems: [
      {
        item: 'My opening sentence grabs the reader\'s attention.',
        category: 'Structure',
        tip: 'Try starting with action, dialogue, a question, or a vivid description.',
      },
      {
        item: 'I have used at least three different sentence lengths for effect.',
        category: 'Style',
        tip: 'Short sentences create tension; long ones build atmosphere.',
      },
      {
        item: 'I have used show-don\'t-tell to describe characters\' feelings.',
        category: 'Characterisation',
        tip: 'Instead of "she was scared", write "her hands trembled against the door".',
      },
      {
        item: 'I have included at least two varied language techniques.',
        category: 'Language',
        tip: 'Choose from simile, metaphor, personification, alliteration, or onomatopoeia.',
      },
      {
        item: 'My vocabulary is ambitious and avoids overused words like "nice" and "good".',
        category: 'Vocabulary',
        tip: 'Use a thesaurus to find a more precise word.',
      },
      {
        item: 'I have used dialogue punctuated correctly at least once.',
        category: 'SPAG',
        tip: 'Remember: new speaker, new line. Punctuation goes inside the speech marks.',
      },
      {
        item: 'My writing has a clear sense of setting that uses all five senses.',
        category: 'Description',
        tip: 'Include at least one reference to sound, smell, touch, or taste -- not just sight.',
      },
      {
        item: 'My ending is satisfying and links back to the opening.',
        category: 'Structure',
        tip: 'A circular structure or a twist ending can be very effective.',
      },
      {
        item: 'I have varied my punctuation with commas, dashes, colons, or semicolons.',
        category: 'SPAG',
        tip: 'A well-placed dash -- like this -- can add dramatic emphasis.',
      },
    ],
    reflectionPrompts: [
      'What is the strongest image or moment in your writing?',
      'Where could you add more sensory detail to bring the scene to life?',
      'Which sentence are you most proud of, and what makes it effective?',
    ],
  },

  // 3. Y8 Analytical Essay
  {
    id: 'sa-y8-essay',
    title: 'Y8 Analytical Essay Self-Assessment',
    yearGroup: 'Year 8',
    taskType: 'essay',
    targetGrade: '4-5',
    checklistItems: [
      {
        item: 'My introduction introduces the text, author, and my overall argument.',
        category: 'Structure',
        tip: 'State your thesis clearly: "Throughout the novel, Hardy explores...".',
      },
      {
        item: 'Each paragraph begins with a topic sentence that links to the question.',
        category: 'Structure',
        tip: 'The first sentence of each paragraph should stand alone as a mini-argument.',
      },
      {
        item: 'I have used at least two pieces of evidence per paragraph.',
        category: 'Evidence',
        tip: 'A second quotation can develop or complicate your first point.',
      },
      {
        item: 'I have zoomed into specific word choices, not just quoted long passages.',
        category: 'Analysis',
        tip: 'Pick out the single most interesting word in your quotation and analyse it.',
      },
      {
        item: 'I have commented on how language techniques create effects.',
        category: 'Language',
        tip: 'Name the technique, then explain what it makes the reader think or feel.',
      },
      {
        item: 'I have used discourse markers to connect my ideas.',
        category: 'Style',
        tip: 'Try "Furthermore", "In contrast", "However", or "This is reinforced when...".',
      },
      {
        item: 'My conclusion summarises my argument without simply repeating it.',
        category: 'Structure',
        tip: 'A strong conclusion answers "so what?" -- why does this matter?',
      },
      {
        item: 'I have written in third person throughout (no "I think").',
        category: 'Style',
        tip: 'Replace "I think" with "It could be argued that..." or "The reader may infer...".',
      },
      {
        item: 'My spelling, punctuation, and grammar are accurate throughout.',
        category: 'SPAG',
        tip: 'Check especially: apostrophes, comma splices, and consistent tense.',
      },
    ],
    reflectionPrompts: [
      'Which paragraph contains your strongest analysis? What makes it effective?',
      'Where in your essay do you make a point without fully explaining the evidence?',
      'How well does your conclusion reflect your overall argument?',
    ],
  },

  // 4. Y8 Persuasive Writing
  {
    id: 'sa-y8-persuasive',
    title: 'Y8 Persuasive Writing Self-Assessment',
    yearGroup: 'Year 8',
    taskType: 'essay',
    targetGrade: '4-5',
    checklistItems: [
      {
        item: 'My opening establishes a clear viewpoint and engages the reader immediately.',
        category: 'Structure',
        tip: 'A rhetorical question or shocking statistic can be an effective hook.',
      },
      {
        item: 'I have used at least four different persuasive techniques (AFOREST).',
        category: 'Language',
        tip: 'Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triples.',
      },
      {
        item: 'I have used a counter-argument and then refuted it.',
        category: 'Argument',
        tip: 'Acknowledge the other side then explain why your view is stronger.',
      },
      {
        item: 'My tone is appropriate for my intended audience.',
        category: 'Audience',
        tip: 'Consider: is the reader a peer, a parent, a politician? Adjust your register.',
      },
      {
        item: 'I have used the rule of three (tricolon) at least once.',
        category: 'Language',
        tip: 'Groups of three are memorable and persuasive: "It is unfair, unjust, and unacceptable."',
      },
      {
        item: 'I have used at least one emotive anecdote or scenario.',
        category: 'Language',
        tip: 'A brief story makes abstract arguments feel real and urgent.',
      },
      {
        item: 'My conclusion ends with a strong call to action.',
        category: 'Structure',
        tip: 'Tell the reader exactly what you want them to do or believe.',
      },
      {
        item: 'My writing is in the correct format for the task (article, letter, speech).',
        category: 'Form',
        tip: 'Check: does a letter need an address? Does an article need a headline?',
      },
    ],
    reflectionPrompts: [
      'Which persuasive technique do you use most effectively, and why?',
      'How well have you considered the needs and concerns of your audience?',
      'If you could add one more piece of evidence or technique, what would it be?',
    ],
  },

  // 5. Y9 Literature Essay with Context
  {
    id: 'sa-y9-lit-context',
    title: 'Y9 Literature Essay with Context Self-Assessment',
    yearGroup: 'Year 9',
    taskType: 'essay',
    targetGrade: '5-6',
    checklistItems: [
      {
        item: 'I have included relevant historical, social, or biographical context in my introduction.',
        category: 'Context',
        tip: 'Context should directly explain why the author writes this way -- not just background facts.',
      },
      {
        item: 'My context links explicitly to the author\'s intentions or choices.',
        category: 'Context',
        tip: 'Use "Because [historical context], [author] deliberately..." to make the link.',
      },
      {
        item: 'I have analysed language at word level, not just technique level.',
        category: 'Analysis',
        tip: 'Comment on the connotations, etymology, or register of specific words.',
      },
      {
        item: 'I have considered alternative interpretations of quotations.',
        category: 'Analysis',
        tip: 'Use "Alternatively..." or "Some readers may argue..." to show depth.',
      },
      {
        item: 'I have discussed the writer\'s methods and their effects on the reader.',
        category: 'Language',
        tip: 'Focus on HOW the writer achieves effects, not just WHAT they describe.',
      },
      {
        item: 'I have referenced the genre or literary tradition of the text.',
        category: 'Context',
        tip: 'e.g., Gothic fiction, Victorian novel, Bildungsroman, Jacobean tragedy.',
      },
      {
        item: 'My paragraphs build a cumulative argument across the essay.',
        category: 'Structure',
        tip: 'Each paragraph should develop the argument, not repeat the same point in different words.',
      },
      {
        item: 'My essay has a critical, evaluative voice throughout.',
        category: 'Style',
        tip: 'Evaluative verbs: "powerfully suggests", "subtly implies", "deliberately evokes".',
      },
      {
        item: 'I have proofread for tense consistency -- present tense for literary analysis.',
        category: 'SPAG',
        tip: 'Write "Dickens presents" not "Dickens presented" -- the text always exists in the present.',
      },
    ],
    reflectionPrompts: [
      'How effectively does your contextual knowledge inform your analysis rather than replace it?',
      'Which paragraph offers the most nuanced or developed interpretation?',
      'What does a confident reader know about this text that your essay does not yet show?',
    ],
  },

  // 6. Y9 Transactional Writing
  {
    id: 'sa-y9-transactional',
    title: 'Y9 Transactional Writing Self-Assessment',
    yearGroup: 'Year 9',
    taskType: 'essay',
    targetGrade: '5-6',
    checklistItems: [
      {
        item: 'I have matched my format precisely to the task (e.g., letter, report, article, speech).',
        category: 'Form',
        tip: 'Use the correct structural features: headings, salutations, sign-offs as appropriate.',
      },
      {
        item: 'My register (formal/informal) is consistent and appropriate for the audience.',
        category: 'Audience',
        tip: 'A formal letter to a headteacher requires different vocabulary than a speech to peers.',
      },
      {
        item: 'I have a clear and sustained purpose (inform, argue, advise, persuade).',
        category: 'Purpose',
        tip: 'Every paragraph should serve your stated purpose -- cut anything that does not.',
      },
      {
        item: 'I have organised my writing with a clear structure and sequenced paragraphs.',
        category: 'Structure',
        tip: 'Plan before you write: introduction, three or four developed points, conclusion.',
      },
      {
        item: 'My vocabulary is varied, precise, and ambitious throughout.',
        category: 'Vocabulary',
        tip: 'Avoid repetition -- use synonyms and varied sentence starters.',
      },
      {
        item: 'I have used a range of punctuation for effect and clarity.',
        category: 'SPAG',
        tip: 'Semicolons separate related clauses; colons introduce lists or explanations.',
      },
      {
        item: 'I have used at least one statistical or factual reference to support my points.',
        category: 'Evidence',
        tip: 'Even invented but plausible statistics add authority to persuasive writing.',
      },
      {
        item: 'My conclusion reinforces my purpose and leaves a lasting impression.',
        category: 'Structure',
        tip: 'Return to your opening idea or end with a memorable final line.',
      },
      {
        item: 'I have checked that my writing fulfils all bullet points in the task brief.',
        category: 'Task',
        tip: 'Tick off each bullet point in the task -- every one is worth marks.',
      },
    ],
    reflectionPrompts: [
      'How clearly does your writing fulfil its stated purpose?',
      'Where is your register most effective, and where does it slip?',
      'If this were a real piece of writing, would it achieve its intended effect on the reader?',
    ],
  },

  // 7. IGCSE Language Reading
  {
    id: 'sa-igcse-lang-reading',
    title: 'IGCSE English Language Reading Self-Assessment',
    yearGroup: 'Year 10-11',
    taskType: 'analysis',
    targetGrade: '6-9',
    checklistItems: [
      {
        item: 'I have re-read the question carefully and identified exactly what it is asking.',
        category: 'Exam Technique',
        tip: 'Underline the key command words: "explain", "analyse", "identify", "compare".',
      },
      {
        item: 'I have used the correct line references specified in the question.',
        category: 'Exam Technique',
        tip: 'Do not quote from outside the specified lines -- you will not gain marks.',
      },
      {
        item: 'My quotations are carefully selected -- the shortest that still prove the point.',
        category: 'Evidence',
        tip: 'Avoid copying out whole sentences when a single phrase will do.',
      },
      {
        item: 'I have explained the effect of language on the reader, not just named techniques.',
        category: 'Analysis',
        tip: 'Naming a metaphor is worth 1 mark; explaining its effect can earn 3.',
      },
      {
        item: 'I have matched the number of points I make to the marks available.',
        category: 'Exam Technique',
        tip: 'For a 10-mark question, aim for 4-5 distinct points with evidence and comment.',
      },
      {
        item: 'For inference questions, I have read between the lines, not just retrieved facts.',
        category: 'Reading',
        tip: '"The writer implies..." or "This suggests that..." signals inference.',
      },
      {
        item: 'For summary questions, I have used my own words and not copied the text.',
        category: 'Reading',
        tip: 'Paraphrase: change both the words AND the sentence structure.',
      },
      {
        item: 'I have considered the writer\'s purpose and how it shapes language choices.',
        category: 'Analysis',
        tip: 'Ask: why has the writer chosen this word or technique at this moment?',
      },
      {
        item: 'I have managed my time and left room to check my answers.',
        category: 'Exam Technique',
        tip: 'Roughly 1 minute per mark is a useful guide for planning your time.',
      },
    ],
    reflectionPrompts: [
      'Which question type do you find most challenging, and what strategy will you use next time?',
      'Where in your answers do you state a point without fully supporting or explaining it?',
      'How well do your answers use the mark allocation to guide the depth of your response?',
    ],
  },

  // 8. IGCSE Language Writing
  {
    id: 'sa-igcse-lang-writing',
    title: 'IGCSE English Language Writing Self-Assessment',
    yearGroup: 'Year 10-11',
    taskType: 'creative-writing',
    targetGrade: '6-9',
    checklistItems: [
      {
        item: 'I have clearly identified whether the task requires creative or transactional writing.',
        category: 'Task',
        tip: 'Re-read the task prompt before writing -- one misread can cost many marks.',
      },
      {
        item: 'My writing communicates clearly and engages the reader throughout.',
        category: 'Communication',
        tip: 'Every paragraph should add something new -- cut anything that repeats or pads.',
      },
      {
        item: 'I have used a varied range of sentence structures for effect.',
        category: 'Style',
        tip: 'Vary simple, compound, and complex sentences. Use the minor sentence sparingly.',
      },
      {
        item: 'My vocabulary is precise, varied, and ambitious.',
        category: 'Vocabulary',
        tip: 'One well-chosen word is worth more than three ordinary ones.',
      },
      {
        item: 'I have organised my writing with a clear beginning, middle, and end.',
        category: 'Structure',
        tip: 'Even under time pressure, spend two minutes planning your structure.',
      },
      {
        item: 'For the creative task, I have used literary techniques to create effects.',
        category: 'Language',
        tip: 'At least: imagery, varied sentence length, and precise word choice.',
      },
      {
        item: 'For the transactional task, I have used the correct format and register.',
        category: 'Form',
        tip: 'Check format features: letter headings, article subheadings, speech openings.',
      },
      {
        item: 'My punctuation is accurate and used deliberately for effect.',
        category: 'SPAG',
        tip: 'Examiners notice commas, semicolons, and dashes used with control.',
      },
      {
        item: 'I have left time to re-read and improve my writing.',
        category: 'Exam Technique',
        tip: 'Small improvements -- a more precise word, a varied sentence -- add up.',
      },
    ],
    reflectionPrompts: [
      'What is the most effective moment in your writing, and why does it work?',
      'Where does your writing feel rushed or underdeveloped?',
      'What one technique or structural choice would most improve your response?',
    ],
  },

  // 9. IGCSE Literature Essay
  {
    id: 'sa-igcse-lit-essay',
    title: 'IGCSE Literature Essay Self-Assessment',
    yearGroup: 'Year 10-11',
    taskType: 'essay',
    targetGrade: '6-9',
    checklistItems: [
      {
        item: 'I have addressed both aspects of the question if it has two parts.',
        category: 'Task',
        tip: 'Highlight each part of the question before you plan -- address both equally.',
      },
      {
        item: 'My introduction states my overall interpretation and key argument.',
        category: 'Structure',
        tip: 'Avoid "In this essay I will..." -- instead, state your thesis directly.',
      },
      {
        item: 'Each paragraph has a clear focus on one idea linked to the question.',
        category: 'Structure',
        tip: 'If a paragraph covers two different ideas, split it in two.',
      },
      {
        item: 'I have selected precise, brief quotations and embedded them in my sentences.',
        category: 'Evidence',
        tip: 'Do not quote more than two lines at a time.',
      },
      {
        item: 'I have analysed the writer\'s language choices in detail.',
        category: 'Analysis',
        tip: 'Zoom in on individual words: their connotations, register, sound effects.',
      },
      {
        item: 'I have discussed the effects of the writer\'s structural choices.',
        category: 'Analysis',
        tip: 'Think about: where the writer places key moments, shifts in tense or narrator.',
      },
      {
        item: 'I have considered the text in its historical or cultural context.',
        category: 'Context',
        tip: 'Context must be relevant -- explain how it influences the writer\'s choices.',
      },
      {
        item: 'I have expressed alternative readings or considered different viewpoints.',
        category: 'Analysis',
        tip: '"A modern reader may interpret this differently from a Victorian audience..."',
      },
      {
        item: 'My conclusion draws together my argument and offers a final evaluative judgement.',
        category: 'Structure',
        tip: 'End with a strong, confident statement about the writer\'s overall achievement.',
      },
      {
        item: 'My essay is written throughout in formal academic English.',
        category: 'Style',
        tip: 'No contractions, no first person, no colloquialisms.',
      },
    ],
    reflectionPrompts: [
      'How well does your essay maintain a consistent, evaluative argument throughout?',
      'Which paragraph most successfully links language analysis to the writer\'s purpose?',
      'What would a Grade A* response say that your essay does not yet include?',
    ],
  },

  // 10. IAL Data Analysis (Unit WEN04)
  {
    id: 'sa-ial-data-analysis',
    title: 'IAL English Language Data Analysis Self-Assessment (WEN04)',
    yearGroup: 'Year 12-13',
    taskType: 'analysis',
    targetGrade: '6-8',
    checklistItems: [
      {
        item: 'I have identified the key linguistic features of each data text before writing.',
        category: 'Analysis',
        tip: 'Annotate first: mark phonology, lexis, grammar, discourse, pragmatics.',
      },
      {
        item: 'I have used appropriate linguistic frameworks throughout my analysis.',
        category: 'Framework',
        tip: 'Systematically apply: phonology, morphology, lexis, grammar, discourse, pragmatics.',
      },
      {
        item: 'I have linked my analysis to relevant linguistic theories and theorists.',
        category: 'Theory',
        tip: 'Name theorists precisely: Grice\'s maxims, Labov\'s narrative structure, Lakoff\'s politeness.',
      },
      {
        item: 'I have compared the data texts where the question requires it.',
        category: 'Comparative',
        tip: 'Use explicit comparative discourse markers: "In contrast to Text A, Text B...".',
      },
      {
        item: 'My analysis is data-led -- I am commenting on what I can see, not what I assume.',
        category: 'Analysis',
        tip: 'Every claim must be evidenced with a specific example from the data.',
      },
      {
        item: 'I have considered the context of production and reception of each text.',
        category: 'Context',
        tip: 'Think about: who produced this, for whom, when, where, and with what intention.',
      },
      {
        item: 'I have used precise metalanguage throughout.',
        category: 'Terminology',
        tip: 'Use: deixis, hedging, ellipsis, adjacency pairs, anaphoric reference accurately.',
      },
      {
        item: 'I have avoided making unsupported value judgements about the language.',
        category: 'Analysis',
        tip: 'Describe and analyse language -- do not label it as "good", "bad", or "wrong".',
      },
      {
        item: 'My response is structured logically with a clear analytical progression.',
        category: 'Structure',
        tip: 'Framework-by-framework or text-by-text -- be consistent and signpost your structure.',
      },
      {
        item: 'I have considered issues of power, identity, or ideology where relevant.',
        category: 'Critical',
        tip: 'Think about whose language norms are privileged and who is marginalised.',
      },
    ],
    reflectionPrompts: [
      'Which linguistic framework do you apply most confidently, and which needs more development?',
      'How well do you integrate theory as analytical tools rather than just naming them?',
      'What would make your analysis more nuanced or sophisticated?',
    ],
  },

  // 11. IAL Essay Writing (Units WEN01/WEN02)
  {
    id: 'sa-ial-essay',
    title: 'IAL English Language Essay Writing Self-Assessment',
    yearGroup: 'Year 12-13',
    taskType: 'essay',
    targetGrade: '6-8',
    checklistItems: [
      {
        item: 'My introduction defines key terms and establishes a clear thesis.',
        category: 'Structure',
        tip: 'Define contested terms like "dialect", "Standard English", or "gender" at the outset.',
      },
      {
        item: 'I have argued a clear line throughout, not just described the topic.',
        category: 'Argument',
        tip: 'Each paragraph should advance your argument, not merely add more information.',
      },
      {
        item: 'I have engaged with a range of linguistic theories and debated them critically.',
        category: 'Theory',
        tip: 'Do not just describe theories -- evaluate their strengths, limitations, and applicability.',
      },
      {
        item: 'I have used specific, accurate examples of language data to support my points.',
        category: 'Evidence',
        tip: 'Transcripts, historical texts, and social media data are all valid evidence.',
      },
      {
        item: 'I have acknowledged counter-arguments and responded to them.',
        category: 'Argument',
        tip: 'A sophisticated essay recognises complexity: "However, critics such as...".',
      },
      {
        item: 'My terminology is precise and used correctly throughout.',
        category: 'Terminology',
        tip: 'One misused term undermines your credibility -- check definitions before using them.',
      },
      {
        item: 'My writing is formal, academic, and free from colloquialisms.',
        category: 'Style',
        tip: 'A-level essays are written in third person with hedged, qualified claims.',
      },
      {
        item: 'I have balanced breadth (range of examples) with depth (close analysis).',
        category: 'Balance',
        tip: 'Do not sprint through ten examples -- develop four or five in genuine depth.',
      },
      {
        item: 'My conclusion offers a nuanced, evaluative judgement, not a simple summary.',
        category: 'Structure',
        tip: 'Synthesise your argument: "The evidence suggests that while X is significant, Y...".',
      },
    ],
    reflectionPrompts: [
      'How well does your essay distinguish between description, explanation, and critical evaluation?',
      'Where do you rely on assertion rather than evidenced argument?',
      'Which theorist or concept could you develop more fully to strengthen your essay?',
    ],
  },

  // 12. IAL Coursework
  {
    id: 'sa-ial-coursework',
    title: 'IAL English Language Coursework Self-Assessment',
    yearGroup: 'Year 12-13',
    taskType: 'general',
    targetGrade: '6-8',
    checklistItems: [
      {
        item: 'My investigation has a clearly stated research question that is linguistically focused.',
        category: 'Research',
        tip: 'A good question is specific, answerable, and genuinely investigable with your data.',
      },
      {
        item: 'I have collected primary data that is sufficient and appropriate for my question.',
        category: 'Data',
        tip: 'Aim for a minimum of 500-800 words of transcribed or collected data.',
      },
      {
        item: 'My methodology section explains HOW and WHY I collected data in this way.',
        category: 'Methodology',
        tip: 'Justify your choices: why these participants? Why this setting or context?',
      },
      {
        item: 'My analysis uses multiple linguistic frameworks systematically.',
        category: 'Analysis',
        tip: 'Do not use only lexis -- apply phonology, grammar, discourse, and pragmatics too.',
      },
      {
        item: 'I have linked my findings to relevant linguistic theories and scholars.',
        category: 'Theory',
        tip: 'Integrate theory organically: "This supports Labov\'s findings that...".',
      },
      {
        item: 'I have discussed the limitations of my study honestly.',
        category: 'Evaluation',
        tip: 'Small sample size, researcher effect, and data bias are all valid limitations.',
      },
      {
        item: 'My conclusion answers my original research question based on the evidence.',
        category: 'Conclusion',
        tip: 'Return to your research question explicitly -- have you answered it?',
      },
      {
        item: 'I have written a creative/crafted piece that uses language deliberately.',
        category: 'Creative',
        tip: 'Your commentary must explain every linguistic choice you made and why.',
      },
      {
        item: 'My references and appendices are complete, accurate, and correctly formatted.',
        category: 'Academic',
        tip: 'Include your full data transcripts in the appendix -- the examiner may check.',
      },
      {
        item: 'My total word count is within the specified limit for each component.',
        category: 'Admin',
        tip: 'Check the specification: exceeding the word count can result in a mark penalty.',
      },
    ],
    reflectionPrompts: [
      'How well does your research question shape the focus of your entire investigation?',
      'Where in your analysis do you make claims that are not fully supported by your data?',
      'What would you do differently if you were starting the coursework again?',
    ],
  },
];

// ── Peer Assessment Guides ────────────────────────────────────────────────────

export const peerAssessmentGuides: PeerAssessmentGuide[] = [

  // 1. KS3 PEE / Analytical Paragraph
  {
    id: 'pa-ks3-pee',
    title: 'KS3 Analytical Paragraph Peer Assessment Guide',
    yearGroup: 'Year 7-9',
    taskType: 'analysis',
    assessmentCriteria: [
      {
        criterion: 'Point',
        whatToLookFor: 'Does the paragraph open with a clear statement that directly answers the question?',
        feedbackStarter: 'Your opening point is strong because... / Your opening point could be improved by...',
      },
      {
        criterion: 'Evidence',
        whatToLookFor: 'Is a quotation included, embedded in a sentence, and carefully chosen?',
        feedbackStarter: 'The quotation you have chosen is effective because... / You could improve your evidence by...',
      },
      {
        criterion: 'Explanation',
        whatToLookFor: 'Does the writer explain HOW the quotation proves the point?',
        feedbackStarter: 'Your explanation is convincing where you... / Your explanation could develop further by...',
      },
      {
        criterion: 'Language Analysis',
        whatToLookFor: 'Has the writer identified and explained the effect of a specific language technique?',
        feedbackStarter: 'Your language analysis is detailed when you... / You could develop your language analysis by...',
      },
      {
        criterion: 'Vocabulary and Accuracy',
        whatToLookFor: 'Is the writing formal, accurate, and does it use analytical vocabulary?',
        feedbackStarter: 'The vocabulary is impressive, particularly... / The accuracy could be improved by checking...',
      },
    ],
    constructiveFeedbackPhrases: [
      'This is a well-structured paragraph because...',
      'One strength of this writing is...',
      'To develop this paragraph further, you could...',
      'The most convincing part of this analysis is...',
      'A suggestion for your next draft would be...',
    ],
    improvementSuggestions: [
      'Add a second piece of evidence to develop the point further.',
      'Zoom in on a specific word in the quotation and explain its connotations.',
      'Use a more precise analytical verb instead of "shows" -- try "suggests", "implies", or "conveys".',
      'Make the link between your point and your evidence more explicit.',
    ],
  },

  // 2. KS3/KS4 Creative Writing
  {
    id: 'pa-ks3-creative',
    title: 'KS3/KS4 Creative Writing Peer Assessment Guide',
    yearGroup: 'Year 7-11',
    taskType: 'creative-writing',
    assessmentCriteria: [
      {
        criterion: 'Engaging Opening',
        whatToLookFor: 'Does the writing grab the reader\'s attention in the first sentence or paragraph?',
        feedbackStarter: 'The opening is engaging because... / The opening could be stronger if...',
      },
      {
        criterion: 'Language Techniques',
        whatToLookFor: 'Has the writer used at least two varied and effective literary techniques?',
        feedbackStarter: 'The technique that works best is... / A technique that could be added is...',
      },
      {
        criterion: 'Vocabulary',
        whatToLookFor: 'Is the vocabulary precise, varied, and ambitious?',
        feedbackStarter: 'The most effective word choice is... / You could replace [word] with something more precise, for example...',
      },
      {
        criterion: 'Structure and Pacing',
        whatToLookFor: 'Does the writing have a clear shape? Are sentence lengths varied for effect?',
        feedbackStarter: 'The structure is effective because... / The pacing could be improved by...',
      },
      {
        criterion: 'Satisfying Ending',
        whatToLookFor: 'Does the ending feel complete and does it link back to the opening or theme?',
        feedbackStarter: 'The ending works well because... / The ending could be more satisfying if...',
      },
    ],
    constructiveFeedbackPhrases: [
      'The image that stayed with me the most was...',
      'I felt the writing was most effective when...',
      'One change that would make a big difference is...',
      'The vocabulary is particularly strong in...',
      'I would have liked to read more about...',
    ],
    improvementSuggestions: [
      'Add a short, punchy sentence after a long one to create contrast and emphasis.',
      'Replace a "telling" statement with a "showing" description of a character\'s action or reaction.',
      'Develop the setting with at least one detail that appeals to a sense other than sight.',
      'Consider whether your ending echoes or contrasts with your opening for a more deliberate effect.',
    ],
  },

  // 3. IGCSE Literature Essay
  {
    id: 'pa-igcse-lit',
    title: 'IGCSE Literature Essay Peer Assessment Guide',
    yearGroup: 'Year 10-11',
    taskType: 'essay',
    assessmentCriteria: [
      {
        criterion: 'Response to the Question',
        whatToLookFor: 'Does the essay directly and consistently address every part of the question?',
        feedbackStarter: 'The essay addresses the question most directly when... / A part of the question not fully addressed is...',
      },
      {
        criterion: 'Use of Evidence',
        whatToLookFor: 'Are quotations well-chosen, brief, and embedded? Does each one support the argument?',
        feedbackStarter: 'The most effective quotation is... because... / The evidence could be stronger if...',
      },
      {
        criterion: 'Language Analysis',
        whatToLookFor: 'Does the writer analyse specific word choices and techniques, explaining their effects?',
        feedbackStarter: 'The language analysis is most convincing when... / The analysis could be developed by...',
      },
      {
        criterion: 'Contextual Understanding',
        whatToLookFor: 'Is relevant context included and does it link meaningfully to the analysis?',
        feedbackStarter: 'The contextual point that adds most to the analysis is... / Context could be integrated more by...',
      },
      {
        criterion: 'Structure and Argument',
        whatToLookFor: 'Does the essay build a coherent argument? Is there a strong introduction and conclusion?',
        feedbackStarter: 'The argument is clearest when... / The essay\'s structure could be improved by...',
      },
    ],
    constructiveFeedbackPhrases: [
      'Your analysis of the writer\'s technique is particularly strong where...',
      'The contextual point that adds most insight is...',
      'To reach the next grade band, you should...',
      'Your argument is most convincing when...',
      'One paragraph that could be developed further is...',
    ],
    improvementSuggestions: [
      'Zoom in on the specific word(s) in your quotation -- what are their connotations?',
      'Add an alternative reading ("A different interpretation could be...") to show critical depth.',
      'Make your context link explicit: explain how it directly influences the writer\'s choice.',
      'Strengthen your conclusion by returning to your thesis with a more nuanced final judgement.',
    ],
  },

  // 4. IGCSE Transactional / Non-Fiction Writing
  {
    id: 'pa-igcse-transactional',
    title: 'IGCSE Transactional Writing Peer Assessment Guide',
    yearGroup: 'Year 10-11',
    taskType: 'essay',
    assessmentCriteria: [
      {
        criterion: 'Format and Conventions',
        whatToLookFor: 'Is the correct format used with all appropriate structural features?',
        feedbackStarter: 'The format is appropriate because... / A format feature that is missing is...',
      },
      {
        criterion: 'Audience Awareness',
        whatToLookFor: 'Is the register and tone consistently suited to the intended audience?',
        feedbackStarter: 'The writing is clearly aimed at the target audience when... / The register slips when...',
      },
      {
        criterion: 'Purpose and Persuasion',
        whatToLookFor: 'Does the writing fulfil its stated purpose? Are persuasive or informative techniques used?',
        feedbackStarter: 'The purpose is achieved most effectively when... / An additional technique that could strengthen the writing is...',
      },
      {
        criterion: 'Organisation and Paragraphing',
        whatToLookFor: 'Is the writing logically organised with well-developed paragraphs?',
        feedbackStarter: 'The organisation is effective because... / The writing would flow better if...',
      },
      {
        criterion: 'Technical Accuracy',
        whatToLookFor: 'Is the writing free from major errors in spelling, punctuation, and grammar?',
        feedbackStarter: 'The technical accuracy is impressive, particularly... / An error to correct is...',
      },
    ],
    constructiveFeedbackPhrases: [
      'The most persuasive moment in this piece is...',
      'The register is well-maintained throughout, especially...',
      'A technique that could be added for greater impact is...',
      'The organisation is clear because...',
      'One area to focus on when redrafting is...',
    ],
    improvementSuggestions: [
      'Add a counter-argument followed by a confident rebuttal to strengthen your persuasive writing.',
      'Check all format features are present -- a missing headline or address costs easy marks.',
      'Vary your sentence starters to avoid beginning every paragraph the same way.',
      'Strengthen your conclusion with a specific call to action or a memorable final image.',
    ],
  },

  // 5. IAL Language Analysis
  {
    id: 'pa-ial-language',
    title: 'IAL English Language Data Analysis Peer Assessment Guide',
    yearGroup: 'Year 12-13',
    taskType: 'analysis',
    assessmentCriteria: [
      {
        criterion: 'Application of Linguistic Frameworks',
        whatToLookFor: 'Are multiple frameworks (phonology, lexis, grammar, discourse, pragmatics) applied systematically?',
        feedbackStarter: 'The frameworks are applied most effectively when... / A framework that could be developed further is...',
      },
      {
        criterion: 'Use of Metalanguage',
        whatToLookFor: 'Is precise and accurate linguistic terminology used throughout?',
        feedbackStarter: 'The metalanguage is used with particular precision when... / A term that is misapplied or could be more precise is...',
      },
      {
        criterion: 'Integration of Theory',
        whatToLookFor: 'Are relevant theories and theorists integrated as analytical tools, not just named?',
        feedbackStarter: 'The theory is most effectively integrated when... / A theory that could be applied here is...',
      },
      {
        criterion: 'Data-Led Analysis',
        whatToLookFor: 'Is every analytical claim supported by specific evidence from the data?',
        feedbackStarter: 'The analysis is most convincingly data-led when... / A claim that needs more specific evidence is...',
      },
      {
        criterion: 'Critical and Evaluative Stance',
        whatToLookFor: 'Does the writer evaluate competing explanations and avoid simplistic conclusions?',
        feedbackStarter: 'The critical stance is strongest when... / The analysis could be more evaluative by...',
      },
    ],
    constructiveFeedbackPhrases: [
      'The most sophisticated analytical point is...',
      'The use of [theory/theorist] is particularly effective because...',
      'A framework that could be applied to strengthen the analysis is...',
      'The claim that most needs evidential support is...',
      'The analysis would benefit from considering an alternative explanation, for example...',
    ],
    improvementSuggestions: [
      'Apply the pragmatics framework more explicitly -- consider face-threatening acts, politeness strategies, or implicature.',
      'Move from description to evaluation: not just "what" but "why this matters" and "what this tells us".',
      'Integrate a named theorist to anchor your analysis: does this data support or challenge their model?',
      'Add a comparative point between two texts or two instances within the same text for greater analytical depth.',
    ],
  },

  // 6. IAL / A-Level Extended Essay
  {
    id: 'pa-ial-essay',
    title: 'IAL English Language Extended Essay Peer Assessment Guide',
    yearGroup: 'Year 12-13',
    taskType: 'essay',
    assessmentCriteria: [
      {
        criterion: 'Thesis and Argument',
        whatToLookFor: 'Is there a clear, sustained, and original argument running through the entire essay?',
        feedbackStarter: 'The central argument is clearest when... / The thesis could be sharpened by...',
      },
      {
        criterion: 'Engagement with Theory',
        whatToLookFor: 'Are theories debated critically, with their strengths and limitations acknowledged?',
        feedbackStarter: 'The critical engagement with theory is strongest when... / A limitation of the theory that could be discussed is...',
      },
      {
        criterion: 'Use of Evidence',
        whatToLookFor: 'Is evidence specific, accurately presented, and integrated into the argument?',
        feedbackStarter: 'The evidence is used most effectively when... / A point that lacks sufficient evidence is...',
      },
      {
        criterion: 'Counter-Argument',
        whatToLookFor: 'Are alternative views acknowledged and thoughtfully addressed?',
        feedbackStarter: 'The counter-argument is handled most effectively when... / An alternative view that is not yet addressed is...',
      },
      {
        criterion: 'Academic Register and Style',
        whatToLookFor: 'Is the writing consistently formal, precise, and appropriately hedged?',
        feedbackStarter: 'The academic register is maintained well when... / The register becomes informal or imprecise when...',
      },
    ],
    constructiveFeedbackPhrases: [
      'The argument is most persuasive when...',
      'The theoretical debate is most sophisticated where...',
      'A strength of this essay is the way it...',
      'The essay would benefit from engaging more critically with...',
      'One suggestion for improving the structure is...',
    ],
    improvementSuggestions: [
      'Sharpen the thesis statement in the introduction so it takes a clear, specific position.',
      'Develop one theoretical point in more depth rather than listing several superficially.',
      'Acknowledge a counter-argument and explain why your position is nonetheless more convincing.',
      'Replace evaluatively weak phrases like "this shows that" with more precise hedged language: "this may suggest" or "this implies".',
    ],
  },
];
