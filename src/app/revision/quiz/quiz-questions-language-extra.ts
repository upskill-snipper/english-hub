// ─── Extra Language quiz questions (100) ──────────────────────────────────
// Covers AQA Paper 1, AQA Paper 2, Edexcel, OCR, Eduqas and Cambridge IGCSE
// English Language. Any quoted source extracts are short, original
// fictional samples written for revision purposes.

import type { QuizQuestion } from './quiz-data'

export const languageExtraQuestions: QuizQuestion[] = [
  // ─── AQA Paper 1 (Q1-Q5)  - IDs 001-025 ──────────────────────────────────
  {
    id: 'language-extra-001',
    topic: 'exam-technique',
    question:
      'AQA Paper 1 Question 1 asks you to "list four things" from a specified section. What is the safest approach?',
    options: [
      'Quote whole sentences word-for-word',
      'Paraphrase or quote short pieces of explicit information from the lines named',
      'Infer feelings the character probably has',
      'Comment on the writer’s techniques',
    ],
    correctIndex: 1,
    explanation:
      'AO1 (identify and interpret explicit information) is tested. You only need short, explicit answers from the lines named - inference and analysis are not required.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-002',
    topic: 'language-techniques',
    question:
      'In the SAMPLE line "the slithering, sibilant sea slipped silently into the cove", which technique is most prominent?',
    options: ['Assonance', 'Sibilance', 'Plosive alliteration', 'Caesura'],
    correctIndex: 1,
    explanation:
      'Sibilance is the repetition of /s/ sounds, often used in AQA Paper 1 Q2 to create soft, hissing or unsettling effects.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-003',
    topic: 'language-techniques',
    question: 'AQA Paper 1 Q2 (8 marks) primarily assesses which Assessment Objective?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 1,
    explanation:
      'AO2 - explain, comment on and analyse how writers use language and structure. Subject terminology is also rewarded.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-004',
    topic: 'language-techniques',
    question: 'Which term best describes the sentence (SAMPLE) "Quietly, she opened the door"?',
    options: ['Fronted adverbial', 'Subordinate clause', 'Imperative', 'Compound sentence'],
    correctIndex: 0,
    explanation:
      'A fronted adverbial places the adverb (or adverbial phrase) before the main clause, controlling pace and emphasis - useful AO2 terminology.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-005',
    topic: 'language-techniques',
    question:
      'In the SAMPLE sentence "He ran and stumbled and fell and rose and ran again", which technique is used?',
    options: ['Asyndeton', 'Polysyndeton', 'Anaphora', 'Hypophora'],
    correctIndex: 1,
    explanation:
      'Polysyndeton repeats conjunctions (and…and…and) to create a breathless, accumulating rhythm - strong AO2 evidence in Q2.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-006',
    topic: 'language-techniques',
    question:
      'In the SAMPLE sentence "She arrived, she looked, she left", which technique is used?',
    options: ['Polysyndeton', 'Asyndeton', 'Triplet of similes', 'Anastrophe'],
    correctIndex: 1,
    explanation:
      'Asyndeton omits conjunctions, producing a clipped, decisive rhythm. Useful for showing pace or detachment in AQA Paper 1 Q2.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-007',
    topic: 'exam-technique',
    question:
      'AQA Paper 1 Q3 asks about structure across the WHOLE source. Which is the strongest structural focus?',
    options: [
      'Listing similes from the opening paragraph',
      'How the writer shifts focus from wide setting to a single character',
      'Spelling out the meaning of two metaphors',
      'Counting the number of full stops',
    ],
    correctIndex: 1,
    explanation:
      'Q3 (AO2 structure) rewards comments on focus shifts, openings, endings, zooming in/out and changes in perspective across the whole source.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-008',
    topic: 'language-techniques',
    question:
      'A narrative that ends back where it began (e.g. opens and closes on the same window) uses what structural feature?',
    options: ['In medias res', 'Cyclical structure', 'Foreshadowing', 'Flashback'],
    correctIndex: 1,
    explanation:
      'A cyclical (or circular) structure returns to its opening image, often suggesting entrapment or completion - high-value AO2 structural terminology.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-009',
    topic: 'language-techniques',
    question:
      'A story that opens "in the middle of the action" - e.g. mid-chase - is using which structural device?',
    options: ['Flashforward', 'In medias res', 'Cyclical structure', 'Epistolary form'],
    correctIndex: 1,
    explanation:
      'In medias res ("into the middle of things") drops the reader straight into events, creating immediate tension - strong AO2 structural point.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-010',
    topic: 'language-techniques',
    question: 'When an early image hints at a later, more serious event, this is called…',
    options: ['Foreshadowing', 'Hindsight', 'Allegory', 'Allusion'],
    correctIndex: 0,
    explanation:
      'Foreshadowing plants clues for events to come; pointing it out shows sophisticated AO2 structural awareness in Paper 1 Q3.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-011',
    topic: 'exam-technique',
    question:
      'AQA Paper 1 Q4 (20 marks) gives a statement and asks how far you agree. What must your response do?',
    options: [
      'Summarise the source neutrally',
      'Evaluate the writer’s methods AND respond to the focus of the statement',
      'Compare with a non-fiction source',
      'Re-tell the plot in your own words',
    ],
    correctIndex: 1,
    explanation:
      'AO4 (evaluate texts critically) requires a personal evaluative response supported by analysis of methods, anchored to the statement’s focus.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-012',
    topic: 'exam-technique',
    question:
      'In Paper 1 Q4 evaluation, which discourse marker is most useful for showing critical judgement?',
    options: ['"And then…"', '"This is effective because…"', '"Firstly…"', '"In conclusion…"'],
    correctIndex: 1,
    explanation:
      'AO4 rewards judgement on impact. Phrases like "this is effective because…" combine evaluation with reasoning, showing critical engagement.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-013',
    topic: 'exam-technique',
    question:
      'AQA Paper 1 Q5 creative writing is worth how many marks in total (content + technical accuracy)?',
    options: ['20', '24', '40', '50'],
    correctIndex: 2,
    explanation:
      'Q5 is 40 marks: 24 for content/organisation (AO5) and 16 for technical accuracy (AO6). It is the highest-tariff question on the paper.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-014',
    topic: 'exam-technique',
    question: 'For AQA Paper 1 Q5 (description from a picture), the strongest opening usually…',
    options: [
      'Describes every object in the photograph in order',
      'Begins with a sensory image or shifts the reader’s focus deliberately',
      'Lists three similes back-to-back',
      'Starts with "Once upon a time"',
    ],
    correctIndex: 1,
    explanation:
      'AO5 rewards crafted, atmospheric openings. A sensory hook or deliberate focus (e.g. zoom in/out) signals conscious shaping of structure.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-015',
    topic: 'language-techniques',
    question:
      'Repeating the same word or phrase at the start of successive clauses (e.g. "I came, I saw, I conquered") is called…',
    options: ['Anaphora', 'Epistrophe', 'Chiasmus', 'Zeugma'],
    correctIndex: 0,
    explanation:
      'Anaphora is repetition at the start of successive clauses - a powerful rhetorical device for both Paper 1 Q5 and Paper 2 Q5.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-016',
    topic: 'language-techniques',
    question:
      'Posing a question and then immediately answering it (e.g. "Why do we wait? Because we must.") is called…',
    options: ['Rhetorical question', 'Hypophora', 'Antithesis', 'Apostrophe'],
    correctIndex: 1,
    explanation:
      'Hypophora is a rhetorical move where the speaker asks a question then answers it themselves - useful in transactional and creative writing.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-017',
    topic: 'exam-technique',
    question: 'Which mark is given for technical accuracy on AQA Paper 1 Q5?',
    options: ['8', '12', '16', '24'],
    correctIndex: 2,
    explanation:
      'AO6 (technical accuracy - sentence variety, punctuation, spelling, vocabulary) is worth 16 marks on Q5.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-018',
    topic: 'language-techniques',
    question:
      'In SAMPLE narrative dialogue: "‘Get out,’ she whispered, the word splintering between them." What structural feature is the embedded dialogue creating?',
    options: [
      'Cyclical structure',
      'A shift in focus to character interaction and tension',
      'Foreshadowing of a happy ending',
      'A change in narrative voice',
    ],
    correctIndex: 1,
    explanation:
      'Embedded dialogue causes a structural shift in focus from setting/action to interaction - a useful AO2 structural point in Paper 1 Q3.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-019',
    topic: 'language-techniques',
    question:
      'In the SAMPLE phrase "the bruised sky bled into the sea", which technique is most clearly used?',
    options: [
      'Personification with violent semantic field',
      'Onomatopoeia',
      'Pathetic fallacy only',
      'Hyperbole',
    ],
    correctIndex: 0,
    explanation:
      'Personifying the sky as "bruised" and "bleeding" creates a violent semantic field, suggesting menace - strong Paper 1 Q2/Q4 evidence.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-020',
    topic: 'exam-technique',
    question: 'AQA Paper 1 Q3 mark scheme rewards "perceptive" responses when candidates…',
    options: [
      'List structural features without effect',
      'Analyse structural choices and explain their impact across the whole source',
      'Quote heavily from the opening only',
      'Memorise structural terms in a glossary',
    ],
    correctIndex: 1,
    explanation:
      'Top band Q3 needs analysis of structural choices across the whole source AND their effect on the reader.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-021',
    topic: 'language-techniques',
    question:
      'In the SAMPLE opening "Iron. Salt. Smoke. The harbour did not sleep." what is the dominant technique?',
    options: [
      'Minor sentences forming a sensory triplet',
      'Polysyndeton',
      'Compound-complex sentence',
      'Direct address',
    ],
    correctIndex: 0,
    explanation:
      'Three minor sentences create a clipped sensory list (sight/taste/smell), foregrounding atmosphere - high-level AO2 in Paper 1 Q2.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-022',
    topic: 'exam-technique',
    question:
      'For AQA Paper 1 Q5, candidates may choose between description and narrative. Which is generally safer for AO5 marks under time pressure?',
    options: [
      'Narrative - but only if you finish a complete plot',
      'Description - focused, sensory, with a clear structural arc',
      'Free verse poetry',
      'A play script',
    ],
    correctIndex: 1,
    explanation:
      'Description rewards crafted language and structure without the burden of plot resolution - generally safer in 45 minutes.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-023',
    topic: 'language-techniques',
    question: 'Which is the BEST AO2 sentence stem for Paper 1 Q2?',
    options: [
      '"The writer uses lots of adjectives."',
      '"The verb ‘splintered’ has connotations of fragility, suggesting…"',
      '"This quote shows a metaphor."',
      '"There are three words here."',
    ],
    correctIndex: 1,
    explanation:
      'Top-band AO2 zooms in on a specific word, names the technique, and explores connotations and effect on the reader.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-024',
    topic: 'exam-technique',
    question: 'In AQA Paper 1 Q4, the "focus" of the statement is important because…',
    options: [
      'It limits how many quotations you can use',
      'It tells you what aspect of the source the evaluation must address',
      'It gives you the order of paragraphs',
      'It is just a stylistic flourish',
    ],
    correctIndex: 1,
    explanation:
      'Q4 evaluation must stay tied to the statement’s focus (e.g. tension, character) so that AO4 judgements remain on-task.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-025',
    topic: 'language-techniques',
    question: 'Which best describes pathetic fallacy?',
    options: [
      'A weak, unconvincing argument',
      'Attributing human emotion to weather/nature to mirror mood',
      'A logical fallacy',
      'A deliberate misuse of grammar',
    ],
    correctIndex: 1,
    explanation:
      'Pathetic fallacy projects human emotion onto weather or nature (e.g. mournful rain). A staple AO2 term for both Papers.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },

  // ─── AQA Paper 2 (Q1-Q5) - IDs 026-050 ──────────────────────────────────
  {
    id: 'language-extra-026',
    topic: 'exam-technique',
    question:
      'AQA Paper 2 Q1 gives 8 statements as true/false. How should you treat statements that are PARTLY true?',
    options: [
      'Tick them as true if any part is true',
      'Only tick statements that are FULLY supported by the lines named',
      'Tick them all to maximise marks',
      'Leave them blank',
    ],
    correctIndex: 1,
    explanation:
      'Q1 awards 1 mark per correct shading. Half-true statements are false; only shade statements fully supported by the specified lines.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-027',
    topic: 'exam-technique',
    question: 'AQA Paper 2 Q2 (summary, 8 marks) requires you to write about…',
    options: [
      'The language techniques in Source A only',
      'Differences (or similarities) between the two sources using inference',
      'Your own opinion on the writers',
      'A creative re-write of the sources',
    ],
    correctIndex: 1,
    explanation:
      'Q2 tests AO1 (inference and synthesis) - make inferred points about both sources and support with brief evidence.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-028',
    topic: 'exam-technique',
    question: 'In a Paper 2 Q2 summary paragraph, the strongest structure is…',
    options: [
      'Source A point + quote, then a separate Source B point + quote, then explicit comparative inference',
      'Two long quotations only',
      'Bullet points without quotation',
      'A retelling of Source A then Source B',
    ],
    correctIndex: 0,
    explanation:
      'A clear "Point-Evidence-Inference" cycle for both sources, ending in a comparative inference, hits AO1 reliably.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-029',
    topic: 'exam-technique',
    question: 'AQA Paper 2 Q3 (12 marks) is a single-source language analysis. Which AO is tested?',
    options: ['AO1 only', 'AO2 only', 'AO3 only', 'AO4 only'],
    correctIndex: 1,
    explanation:
      'Q3 on Paper 2 is pure AO2 - analyse how the writer uses language to achieve effects, with subject terminology.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-030',
    topic: 'exam-technique',
    question:
      'AQA Paper 2 Q4 (16 marks) requires comparison of writers’ METHODS and PERSPECTIVES. Which AO is dominant?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 2,
    explanation:
      'Q4 is AO3 - compare writers’ ideas and perspectives AND the methods they use to convey them, across the two sources.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-031',
    topic: 'exam-technique',
    question: 'For Paper 2 Q4, which connective set is most useful for AO3 perspective comparison?',
    options: [
      '"And", "but", "so"',
      '"Similarly", "in contrast", "whereas", "however"',
      '"Then", "next", "finally"',
      '"Big", "small", "loud"',
    ],
    correctIndex: 1,
    explanation:
      'Comparative connectives signal genuine comparison of perspective - essential for AO3.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-032',
    topic: 'exam-technique',
    question:
      'AQA Paper 2 Q5 transactional writing is worth 40 marks (AO5/AO6). Which form is NOT typically set?',
    options: ['Letter', 'Article', 'Speech', 'Short story'],
    correctIndex: 3,
    explanation:
      'Q5 is non-fiction transactional: letter, article, speech, leaflet, essay etc. A short story belongs to Paper 1 Q5.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-033',
    topic: 'exam-technique',
    question: 'Which feature is essential in a Paper 2 Q5 formal letter?',
    options: [
      'Two addresses, date, formal salutation/sign-off',
      'Emojis and casual slang',
      'Bullet points only',
      'A headline and byline',
    ],
    correctIndex: 0,
    explanation:
      'Formal letter conventions (addresses, date, "Dear Sir/Madam"/"Yours faithfully" or named "Yours sincerely") signal awareness of form (AO5).',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-034',
    topic: 'exam-technique',
    question:
      'In a Paper 2 Q5 newspaper article, the audience is general readers. Which register is most appropriate?',
    options: [
      'Highly colloquial slang throughout',
      'Formal but engaging - sophisticated vocabulary with rhetorical features',
      'Pure academic jargon',
      'Text-message abbreviations',
    ],
    correctIndex: 1,
    explanation:
      'Articles need a formal-but-engaging register: discourse markers, rhetorical devices, varied sentence forms - all AO5/AO6.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-035',
    topic: 'language-techniques',
    question:
      'Which rhetorical device is BEST suited to opening a Paper 2 Q5 speech to engage the audience immediately?',
    options: [
      'Direct address combined with a rhetorical question',
      'A semi-colon list of statistics',
      'A long subordinate clause about etymology',
      'Footnotes',
    ],
    correctIndex: 0,
    explanation:
      'Direct address ("you") plus a rhetorical question forces immediate engagement and signals conscious crafting (AO5).',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-036',
    topic: 'language-techniques',
    question:
      'A SAMPLE Paper 2 source describes Victorian London as "soot-blackened, gas-lit and reeking with the day’s commerce". The triplet creates…',
    options: [
      'A sensory list signalling oppressive atmosphere',
      'A simile chain',
      'An onomatopoeic refrain',
      'A piece of dialogue',
    ],
    correctIndex: 0,
    explanation:
      'The triplet of sensory adjectives builds a layered, oppressive image of the city - strong AO2 evidence.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-037',
    topic: 'language-techniques',
    question: 'Which statistic-form is most persuasive in transactional writing?',
    options: [
      'Vague claims ("a lot of people")',
      'Precise but plausible figures ("nearly two-thirds of teenagers")',
      'No statistics at all',
      'Always a percentage with three decimal places',
    ],
    correctIndex: 1,
    explanation:
      'Precise, plausible-sounding statistics appear authoritative - even fabricated ones in exam writing - and support AO5 persuasion.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-038',
    topic: 'exam-technique',
    question: 'In Paper 2 Q4, "perspective" most clearly refers to…',
    options: [
      'The genre of the source',
      'The writer’s viewpoint, attitude or feelings',
      'The number of paragraphs in the source',
      'The font of the printed source',
    ],
    correctIndex: 1,
    explanation:
      'AO3 perspective = the writer’s viewpoint or attitude. You compare these viewpoints AND the methods used to convey them.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-039',
    topic: 'exam-technique',
    question:
      'Paper 2 sources often include a 19th-century non-fiction text. What should you do FIRST when reading it?',
    options: [
      'Skip it - it’s too hard',
      'Read it carefully, decoding archaic vocabulary using context',
      'Translate it into modern English on the page',
      'Underline every adjective',
    ],
    correctIndex: 1,
    explanation:
      'AO1 inference relies on understanding the source. Use context to decode archaic vocabulary; you don’t need a literal translation.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-040',
    topic: 'language-techniques',
    question:
      'In the SAMPLE persuasive line "We must act. We must act now. We must act together.", which technique is dominant?',
    options: ['Anaphora', 'Asyndeton', 'Hypophora', 'Caesura'],
    correctIndex: 0,
    explanation:
      'Repeating "We must act" at the start of successive sentences is anaphora - emphatic and rallying, ideal for Paper 2 Q5 speech.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-041',
    topic: 'exam-technique',
    question: 'Which is the strongest sign of AO6 (technical accuracy) in transactional writing?',
    options: [
      'Only simple sentences',
      'Varied sentence forms with accurate punctuation including semi-colons or colons used purposefully',
      'No paragraphs',
      'Repeated use of one connective',
    ],
    correctIndex: 1,
    explanation:
      'Top-band AO6 demands sentence variety, ambitious vocabulary and a range of accurate punctuation including colons/semi-colons.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-042',
    topic: 'exam-technique',
    question:
      'A Paper 2 Q5 task asks you to "write a letter to your headteacher arguing…". The audience is…',
    options: [
      'General teenagers',
      'A single, named adult in authority - register should be formal but personal',
      'A national newspaper readership',
      'Yourself',
    ],
    correctIndex: 1,
    explanation:
      'Audience analysis (AO5) shapes register: formal, respectful, but able to challenge and persuade an authority figure.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-043',
    topic: 'language-techniques',
    question: 'Which is the BEST example of antithesis for a Paper 2 Q5 speech?',
    options: [
      '"It was the best of times; it was the worst of times."',
      '"The cat sat on the mat."',
      '"And and and."',
      '"Why? Because."',
    ],
    correctIndex: 0,
    explanation:
      'Antithesis sets opposites in balanced clauses - striking and memorable for persuasive writing (AO5).',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-044',
    topic: 'exam-technique',
    question:
      'Approximately how long should you spend on AQA Paper 2 Q5 (40 marks of a 1h45 paper)?',
    options: ['10 minutes', '20 minutes', '45 minutes', '60 minutes'],
    correctIndex: 2,
    explanation:
      'Most schemes recommend ~45 minutes on Q5 (15 reading the sources + ~10 mins each on Q1-Q4 then 45 mins on Q5).',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-045',
    topic: 'language-techniques',
    question: 'Which connective most clearly signals a contrasting perspective in Q4?',
    options: ['"Whereas"', '"And"', '"So"', '"Then"'],
    correctIndex: 0,
    explanation:
      '"Whereas" sets up direct contrast between writers’ perspectives - essential AO3 vocabulary.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-046',
    topic: 'exam-technique',
    question: 'On Paper 2 Q3, why is it risky to write only about ONE technique?',
    options: [
      'It is fine - analyse one technique deeply',
      'You miss the breadth required for top-band AO2; aim for 3-4 different methods',
      'You will lose AO1 marks',
      'You will lose AO5 marks',
    ],
    correctIndex: 1,
    explanation:
      'Top band Q3 requires a range of methods (e.g. word class, imagery, sentence form) analysed for effect.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-047',
    topic: 'language-techniques',
    question: 'Which best defines "semantic field"?',
    options: [
      'A field studied in semantics class',
      'A group of words linked by shared meaning or association',
      'A type of metaphor',
      'A grammatical mood',
    ],
    correctIndex: 1,
    explanation:
      'A semantic field clusters connected vocabulary (e.g. of warfare, of decay) - strong AO2 terminology in Q2 and Q3.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-048',
    topic: 'exam-technique',
    question: 'In Paper 2 Q4, "methods" includes which of the following?',
    options: [
      'Only similes and metaphors',
      'Tone, structure, language choices, sentence forms and rhetorical devices',
      'Only the title of the source',
      'Only the date of publication',
    ],
    correctIndex: 1,
    explanation:
      '"Methods" in Q4 is broad - language, structure, tone, form. AO3 rewards comparing both perspectives AND methods.',
    boards: ['aqa'],
  },
  {
    id: 'language-extra-049',
    topic: 'language-techniques',
    question:
      'In the SAMPLE article line "Should we tolerate this? Should we accept it? Should we, in good conscience, look away?", the writer uses…',
    options: [
      'A triplet of rhetorical questions with anaphora',
      'A single declarative sentence',
      'Asyndetic minor sentences',
      'Dialogue',
    ],
    correctIndex: 0,
    explanation:
      'Three rhetorical questions, each opening with "Should we", combine triadic structure and anaphora - high-impact AO5 technique.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-050',
    topic: 'exam-technique',
    question: 'On AQA Paper 2, what is the safest way to introduce a quotation?',
    options: [
      'Drop it in with no integration',
      'Embed it grammatically into your own sentence (e.g. "the writer describes the city as ‘soot-blackened’")',
      'Quote whole paragraphs',
      'Always use block quotation',
    ],
    correctIndex: 1,
    explanation:
      'Embedded quotations show fluency and allow tighter analysis - supporting both AO2 and AO3.',
    boards: ['aqa'],
  },

  // ─── Edexcel Language - IDs 051-065 (15) ─────────────────────────────────
  {
    id: 'language-extra-051',
    topic: 'exam-technique',
    question: 'Edexcel GCSE English Language Paper 1 focuses on…',
    options: [
      '20th- and 21st-century fiction (non-fiction comes in Paper 2)',
      '19th-century poetry',
      'Shakespeare extracts',
      'Translation work',
    ],
    correctIndex: 0,
    explanation:
      'Edexcel Paper 1 = fiction (20th/21st-century). Paper 2 = non-fiction across the 19th, 20th and 21st centuries.',
    boards: ['edexcel', 'edexcel-igcse-lang'],
  },
  {
    id: 'language-extra-052',
    topic: 'exam-technique',
    question: 'In Edexcel Paper 1 Section A, the longest reading question typically asks you to…',
    options: [
      'Compare two extracts',
      'Evaluate how successful the writer is in achieving a specific effect',
      'Write a letter',
      'Translate Old English',
    ],
    correctIndex: 1,
    explanation:
      'The 15-mark Edexcel evaluation question mirrors AO4 - supported judgement on the writer’s success in achieving a stated effect.',
    boards: ['edexcel', 'edexcel-igcse-lang'],
  },
  {
    id: 'language-extra-053',
    topic: 'exam-technique',
    question:
      'Edexcel Paper 2 (Non-fiction) Question 7(b) compares the two non-fiction texts. Which is the dominant AO?',
    options: ['AO1', 'AO2', 'AO3', 'AO5'],
    correctIndex: 2,
    explanation:
      'Q7(b) is the comparison question - AO3, comparing writers’ ideas and perspectives and how these are conveyed.',
    boards: ['edexcel'],
  },
  {
    id: 'language-extra-054',
    topic: 'exam-technique',
    question: 'Edexcel Paper 1 Section B (imaginative writing) gives you…',
    options: [
      'No choice - one task only',
      'A choice between two tasks, often supported by an image or prompt',
      'Three transactional tasks',
      'Only a poetry task',
    ],
    correctIndex: 1,
    explanation:
      'Edexcel Section B offers a choice of imaginative tasks, often with image stimuli - pick the one that allows your strongest AO5.',
    boards: ['edexcel'],
  },
  {
    id: 'language-extra-055',
    topic: 'exam-technique',
    question: 'Edexcel Paper 2 transactional writing tasks reward awareness of…',
    options: [
      'Form, audience and purpose (FAP)',
      'Only spelling',
      'Only handwriting',
      'Only paragraph length',
    ],
    correctIndex: 0,
    explanation:
      'Edexcel mark schemes weight Form, Audience and Purpose heavily - match register, conventions and tone to the task.',
    boards: ['edexcel', 'edexcel-igcse-lang', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-056',
    topic: 'language-techniques',
    question:
      'In a SAMPLE Edexcel non-fiction extract: "We trudged, hungry and hollow-eyed, through the endless white." Which technique most clearly conveys exhaustion?',
    options: [
      'The verb "trudged" combined with a descriptive triple ("hungry, hollow-eyed, endless")',
      'A simile',
      'A pun',
      'A statistic',
    ],
    correctIndex: 0,
    explanation:
      'The plodding verb plus listing of suffering builds AO2 evidence of exhaustion - useful for the language analysis question.',
    boards: ['edexcel', 'edexcel-igcse-lang'],
  },
  {
    id: 'language-extra-057',
    topic: 'exam-technique',
    question: 'Edexcel’s short response questions (1-2 marks) typically test…',
    options: [
      'AO1 - finding explicit information or short inference',
      'AO5 only',
      'AO6 only',
      'AO3 only',
    ],
    correctIndex: 0,
    explanation:
      'Short Edexcel questions are AO1: locate or briefly infer information. Don’t over-write.',
    boards: ['edexcel', 'edexcel-igcse-lang'],
  },
  {
    id: 'language-extra-058',
    topic: 'language-techniques',
    question: 'Which sentence stem best evidences AO3 in Edexcel Paper 2 Q7(b)?',
    options: [
      '"The writer of Source 1 presents X positively, whereas the writer of Source 2 conveys X with hostility through…"',
      '"Both writers use words."',
      '"This is a metaphor."',
      '"I think it is good."',
    ],
    correctIndex: 0,
    explanation:
      'Top-band AO3 needs comparison of perspective AND of method, with comparative connectives.',
    boards: ['edexcel'],
  },
  {
    id: 'language-extra-059',
    topic: 'exam-technique',
    question:
      'In Edexcel English Language Paper 2 transactional writing, what mark allocation is roughly given to communication/organisation vs. technical accuracy?',
    options: [
      'Roughly equal split between AO5 and AO6',
      'Communication ~24, technical accuracy ~16 (a 60/40-style split)',
      'Only AO6 is assessed',
      'Only AO5 is assessed',
    ],
    correctIndex: 1,
    explanation:
      'Edexcel transactional writing weights communication/organisation more than technical accuracy, similar to AQA Q5.',
    boards: ['edexcel'],
  },
  {
    id: 'language-extra-060',
    topic: 'language-techniques',
    question:
      'A SAMPLE Edexcel transactional brief: "Write a speech to your local council about the closure of a youth centre." Which structural feature is most persuasive at the OPENING?',
    options: [
      'An anecdote linking the speaker to the centre, ending in a rhetorical question',
      'A list of legal references',
      'A bibliography',
      'An apology for being there',
    ],
    correctIndex: 0,
    explanation:
      'A short personal anecdote builds ethos; a rhetorical question pivots into the central argument - strong AO5 opening.',
    boards: ['edexcel', 'edexcel-igcse-lang', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-061',
    topic: 'exam-technique',
    question: 'On Edexcel International GCSE English Language A Paper 1, the anthology contains…',
    options: [
      'Pre-released non-fiction texts students study in advance',
      'Brand-new unseen extracts only',
      'Only poetry',
      'Only Shakespeare',
    ],
    correctIndex: 0,
    explanation:
      'Edexcel iGCSE English Language A Paper 1 uses the pre-released "Pearson Edexcel International GCSE English Anthology" of non-fiction texts.',
    boards: ['edexcel-igcse-lang'],
  },
  {
    id: 'language-extra-062',
    topic: 'language-techniques',
    question: 'Which best defines "tone" in non-fiction analysis?',
    options: [
      'The writer’s attitude conveyed by word choice and structure',
      'The font used by the printer',
      'The number of paragraphs',
      'The genre of the text',
    ],
    correctIndex: 0,
    explanation:
      'Tone = the writer’s attitude (e.g. ironic, indignant, nostalgic), conveyed through diction and structure.',
    boards: ['edexcel', 'aqa', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-063',
    topic: 'exam-technique',
    question: 'In Edexcel imaginative writing, examiners reward "ambitious vocabulary" used…',
    options: [
      'Repeatedly and randomly',
      'Precisely and in context - not as a thesaurus dump',
      'Only in the final sentence',
      'Only in dialogue',
    ],
    correctIndex: 1,
    explanation:
      'Ambitious vocabulary must serve meaning. Misused "long" words damage AO5/AO6 - precision beats length.',
    boards: ['edexcel', 'aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-064',
    topic: 'language-techniques',
    question:
      'A SAMPLE imaginative opening reads: "Three years to the day, I returned to the bridge." Which structural feature is foregrounded?',
    options: [
      'In medias res combined with implied flashback / cyclical possibility',
      'Polysyndeton',
      'Hypophora',
      'Pathetic fallacy',
    ],
    correctIndex: 0,
    explanation:
      'The opening drops us into a returning moment, hinting at a buried backstory and possible cyclical structure - strong AO5.',
    boards: ['edexcel', 'aqa', 'ocr', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-065',
    topic: 'exam-technique',
    question: 'Edexcel mark schemes refer to "controlled and assured" responses. This signals…',
    options: [
      'Top-band work - sustained focus, conscious crafting, accurate technical control',
      'Mid-band work',
      'Lower-band work',
      'Off-task work',
    ],
    correctIndex: 0,
    explanation:
      '"Controlled and assured" is a top-band descriptor across AO5/AO6 (and AO2/AO4 in reading): deliberate, sustained, accurate.',
    boards: ['edexcel'],
  },

  // ─── OCR Language - IDs 066-075 (10) ─────────────────────────────────────
  {
    id: 'language-extra-066',
    topic: 'exam-technique',
    question:
      'OCR GCSE English Language Paper 1 ("Communicating Information and Ideas") focuses on…',
    options: [
      '19th- and 21st-century non-fiction texts',
      'Pre-1900 poetry',
      'Shakespeare',
      'Translation',
    ],
    correctIndex: 0,
    explanation:
      'OCR Paper 1 (J351/01) pairs a 19th-century and a 21st-century non-fiction text - comparison is central.',
    boards: ['ocr'],
  },
  {
    id: 'language-extra-067',
    topic: 'exam-technique',
    question: 'OCR GCSE English Language Paper 2 ("Exploring Effects and Impact") focuses on…',
    options: [
      'Two literature texts',
      '20th- and 21st-century literary prose extracts',
      'Only modern poetry',
      'Drama scripts only',
    ],
    correctIndex: 1,
    explanation:
      'OCR Paper 2 (J351/02) examines 20th/21st-century prose, with reading and original writing tasks.',
    boards: ['ocr'],
  },
  {
    id: 'language-extra-068',
    topic: 'exam-technique',
    question:
      'OCR uses an extended comparison question on Paper 1. The strongest opening line for it would…',
    options: [
      'State a comparative thesis about the two writers’ shared/differing focus or attitude',
      'List the techniques you will use',
      'Translate the 19th-century text',
      'Apologise for word count',
    ],
    correctIndex: 0,
    explanation:
      'A clear comparative thesis sentence orients the response and supports AO3 throughout.',
    boards: ['ocr'],
  },
  {
    id: 'language-extra-069',
    topic: 'language-techniques',
    question:
      'A SAMPLE OCR Paper 1 19th-century extract reads: "The mill, that great and tireless beast, devoured the morning light." Which technique?',
    options: [
      'Extended metaphor with personification (industrial machinery as predator)',
      'Onomatopoeia',
      'A simile',
      'A pun',
    ],
    correctIndex: 0,
    explanation:
      'Personifying the mill as a "tireless beast" that "devours" light is an extended metaphor - strong AO2 evidence.',
    boards: ['ocr', 'aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'language-extra-070',
    topic: 'exam-technique',
    question:
      'OCR Paper 2 includes an original writing task. Which choice usually best supports AO5/AO6 under timed conditions?',
    options: [
      'A focused, single-scene narrative or descriptive piece with a clear arc',
      'A multi-chapter epic',
      'A bibliography',
      'A literary essay',
    ],
    correctIndex: 0,
    explanation:
      'A single tight scene allows AO5 crafting and AO6 control; sprawling pieces lose focus and accuracy.',
    boards: ['ocr', 'aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'language-extra-071',
    topic: 'language-techniques',
    question: 'Which is the BEST example of a "shift in focus" structural feature?',
    options: [
      'The narrative moves from a wide panorama of a town to a single child at a window',
      'The narrative repeats the same image three times',
      'The narrative uses a metaphor',
      'The narrative changes tense',
    ],
    correctIndex: 0,
    explanation:
      'Zooming from wide to narrow (panoramic to intimate) is a classic structural shift - useful for OCR/AQA structure points.',
    boards: ['ocr', 'aqa', 'edexcel', 'eduqas', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-072',
    topic: 'exam-technique',
    question: 'OCR mark schemes value "perceptive analysis". This best means…',
    options: [
      'Surface-level identification of techniques',
      'Insightful exploration of subtle effects, including writers’ choices and craft',
      'Listing every technique without effect',
      'Long quotations only',
    ],
    correctIndex: 1,
    explanation:
      '"Perceptive" = subtle, original insight into deliberate authorial craft - top-band AO2/AO3.',
    boards: ['ocr'],
  },
  {
    id: 'language-extra-073',
    topic: 'language-techniques',
    question: 'In OCR comparison, "ideas, attitudes and perspectives" shared between texts means…',
    options: [
      'Surface topic similarities only',
      'Both content (what they think) AND tone (how they feel about it)',
      'Only the publication date',
      'Only the genre',
    ],
    correctIndex: 1,
    explanation:
      'AO3 in OCR comparison expects you to compare both the writers’ stances AND their emotional/critical attitudes.',
    boards: ['ocr'],
  },
  {
    id: 'language-extra-074',
    topic: 'exam-technique',
    question:
      'On OCR original writing, a "narrative voice that is consistent" is rewarded under which AO?',
    options: ['AO5', 'AO6 only', 'AO1', 'AO3'],
    correctIndex: 0,
    explanation:
      'AO5 (communicate clearly, organise ideas, adapt tone for purpose/audience) rewards consistent voice.',
    boards: ['ocr', 'aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'language-extra-075',
    topic: 'language-techniques',
    question:
      'A SAMPLE OCR Paper 2 extract uses dialogue: "‘You came back,’ he said. She did not answer." What structural effect is created?',
    options: [
      'A shift in focus to two characters and tension through silence (unanswered dialogue)',
      'Cyclical structure',
      'Hyperbole',
      'A pun',
    ],
    correctIndex: 0,
    explanation:
      'Dialogue triggers a structural shift to interaction; the unanswered line creates tension - strong AO2 structural point.',
    boards: ['ocr', 'aqa', 'edexcel', 'eduqas'],
  },

  // ─── Eduqas Language - IDs 076-085 (10) ──────────────────────────────────
  {
    id: 'language-extra-076',
    topic: 'exam-technique',
    question: 'Eduqas (WJEC) GCSE English Language Component 1 focuses on…',
    options: [
      '20th-century literary prose reading + creative prose writing',
      '19th-century poetry only',
      'Shakespeare only',
      'Translation work',
    ],
    correctIndex: 0,
    explanation:
      'Eduqas Component 1 ("20th-century literature reading and creative prose writing") pairs a literary extract with a creative writing task.',
    boards: ['eduqas'],
  },
  {
    id: 'language-extra-077',
    topic: 'exam-technique',
    question:
      'Eduqas Component 2 ("19th- and 21st-century non-fiction reading and transactional/persuasive writing") includes which writing forms?',
    options: [
      'Letters, articles, reports, reviews, speeches and similar transactional forms',
      'Only short stories',
      'Only sonnets',
      'Only translations',
    ],
    correctIndex: 0,
    explanation:
      'Component 2 transactional/persuasive writing covers a range of non-fiction forms - match form, audience and purpose.',
    boards: ['eduqas'],
  },
  {
    id: 'language-extra-078',
    topic: 'language-techniques',
    question:
      'A SAMPLE Eduqas Component 1 extract opens: "Snow. Always snow. Snow that hushed the village and hardened the lanes." Which technique is dominant?',
    options: [
      'Repetition with anaphora-like effect, plus pathetic fallacy via "hushed" and "hardened"',
      'A simile chain',
      'Hyperbole',
      'Pun',
    ],
    correctIndex: 0,
    explanation:
      'The repetition and the personifying verbs build atmosphere - high-value AO2 evidence for Eduqas reading questions.',
    boards: ['eduqas', 'aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'language-extra-079',
    topic: 'exam-technique',
    question: 'In Eduqas creative writing, the "purpose" of the task is most often…',
    options: [
      'To describe and/or narrate compellingly for a general reader',
      'To persuade a council',
      'To analyse a novel',
      'To translate Latin',
    ],
    correctIndex: 0,
    explanation:
      'Component 1 creative writing prioritises descriptive/narrative craft - vivid sensory detail and structural shaping (AO5).',
    boards: ['eduqas'],
  },
  {
    id: 'language-extra-080',
    topic: 'language-techniques',
    question:
      'Which of the following is the strongest evidence of "controlled vocabulary" (AO6) in transactional writing?',
    options: [
      'A precise verb chosen for tone (e.g. "demanded" rather than "asked")',
      'Repeating "very"',
      'Using slang inconsistently',
      'Random use of long words',
    ],
    correctIndex: 0,
    explanation:
      'Precise verb choice is high-value AO6: it shows conscious selection rather than vocabulary "showing off".',
    boards: ['eduqas', 'aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'language-extra-081',
    topic: 'exam-technique',
    question:
      'Eduqas Component 2 includes a comparative reading question. Which structural approach is safest?',
    options: [
      'Integrated comparison: shared point, evidence from both, comparative inference',
      'A long summary of Source 1, then a long summary of Source 2',
      'Bullet points only',
      'Quoting whole paragraphs without analysis',
    ],
    correctIndex: 0,
    explanation:
      'Integrated comparison sustains AO3 throughout, rather than risking a one-sided response.',
    boards: ['eduqas'],
  },
  {
    id: 'language-extra-082',
    topic: 'language-techniques',
    question:
      'In a SAMPLE Eduqas transactional task ("Write a leaflet for parents about screen time"), the AUDIENCE shapes which decisions?',
    options: [
      'Register (formal-but-accessible), tone (concerned, supportive), and structural choices (subheadings, bullet lists)',
      'Only the font',
      'Only the title',
      'Only the spelling of "screen"',
    ],
    correctIndex: 0,
    explanation:
      'Audience awareness (parents) shapes register, tone AND form conventions - central to AO5.',
    boards: ['eduqas', 'aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'language-extra-083',
    topic: 'exam-technique',
    question:
      'Eduqas mark schemes describe top-band AO5 as "convincing and compelling". Which is the best definition?',
    options: [
      'Sustained, crafted, deliberate writing that engages the reader throughout',
      'Long writing of any kind',
      'Writing with many adjectives',
      'Writing with no paragraphing',
    ],
    correctIndex: 0,
    explanation:
      '"Convincing and compelling" = sustained craft and reader engagement throughout - top-band AO5.',
    boards: ['eduqas'],
  },
  {
    id: 'language-extra-084',
    topic: 'language-techniques',
    question:
      'A SAMPLE Eduqas Component 2 extract reads: "And so, dear reader, I ask: what would YOU have done?" Which technique is most prominent?',
    options: [
      'Direct address combined with a rhetorical question',
      'A triplet of similes',
      'Polysyndeton',
      'Sibilance',
    ],
    correctIndex: 0,
    explanation:
      'Direct address ("dear reader, YOU") plus a rhetorical question creates intimacy and pressure - strong AO2 in non-fiction analysis.',
    boards: ['eduqas', 'aqa', 'edexcel', 'ocr', 'cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-085',
    topic: 'exam-technique',
    question: 'On Eduqas Component 1 creative writing, candidates are usually offered…',
    options: [
      'A choice of titles, prompts and/or images for description or narrative',
      'No choice at all',
      'Only a translation task',
      'Only a play script task',
    ],
    correctIndex: 0,
    explanation:
      'Eduqas typically offers multiple stimuli (titles, opening lines, images). Choose the option that lets you craft your strongest AO5/AO6.',
    boards: ['eduqas'],
  },

  // ─── Cambridge IGCSE 0500/0990 - IDs 086-100 (15) ────────────────────────
  {
    id: 'language-extra-086',
    topic: 'exam-technique',
    question:
      'Cambridge IGCSE English (0500/0990) Paper 1 Question 2 is the EXTENDED RESPONSE TO READING (based on Text C). Marks are split into…',
    options: [
      'Reading (R) marks for understanding/development AND Writing (W) marks for accuracy/structure',
      'Only writing marks',
      'Only spelling marks',
      'Only reading marks',
    ],
    correctIndex: 0,
    // VERIFIED: Cambridge 0500/0990 syllabus 2024-2026, Paper 1 (Reading) - Q2 extended response = 30 marks (15 R + 15 W); accessed 2026
    explanation:
      'Paper 1 Question 2 (extended response to reading, based on Text C) is worth 30 marks: 15 Reading marks and 15 Writing marks. Directed writing (40 marks: 15 R + 25 W) is on Paper 2 Section A, not Paper 1.',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-087',
    topic: 'exam-technique',
    question:
      'In Cambridge 0500/0990 Paper 2 Section A directed writing (Question 1), candidates must use an appropriate FORM - typically…',
    options: [
      'Letter, speech or report/article (specified by the task)',
      'Always a sonnet',
      'Always dialogue',
      'A bibliography',
    ],
    correctIndex: 0,
    // VERIFIED: Cambridge 0500/0990 syllabus 2024-2026, Paper 2 Section A directed writing = 40 marks (15 R + 25 W); accessed 2026
    explanation:
      'Paper 2 Section A (Question 1) directed writing names the form (letter/speech/article). It is worth 40 marks: 15 Reading and 25 Writing. Use the named form’s conventions consistently.',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-088',
    topic: 'exam-technique',
    question:
      'Cambridge 0500/0990 Paper 1 Question 1(e) (analysis of language used by writers to achieve effects) - which approach is BEST?',
    options: [
      'Quote shorter phrases or single words and analyse connotations and effect',
      'Quote whole paragraphs without analysis',
      'Only summarise the texts',
      'Only list techniques without quotations',
    ],
    correctIndex: 0,
    // VERIFIED: Cambridge 0500/0990 syllabus 2024-2026, Paper 1 Q1(e) language analysis on Text A; accessed 2026
    explanation:
      'Paper 1 Q1(e) rewards close, focused analysis of writers’ language choices - short embedded quotations and explored effects. (Paper 2 Q1 is directed writing, not language analysis.)',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-089',
    topic: 'exam-technique',
    question:
      'Cambridge 0500/0990 Paper 1 Question 1(f) is the SUMMARY question. Which is most important?',
    options: [
      'Use your own words and concise prose, focusing only on points relevant to the bullet(s)',
      'Quote the source word-for-word',
      'Add personal opinion',
      'Use bullet points throughout',
    ],
    correctIndex: 0,
    // VERIFIED: Cambridge 0500/0990 syllabus 2024-2026, Paper 1 Q1(f) summary = 15 marks (10 R + 5 W); accessed 2026
    explanation:
      'Paper 1 Q1(f) summary (15 marks: 10 Reading + 5 Writing) demands concise own-words summary of relevant points - direct copying loses Reading and Writing marks. (Paper 2 Q2 is composition.)',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-090',
    topic: 'exam-technique',
    question:
      'Cambridge 0500/0990 Paper 1 Question 1(e) (analysis of writers’ effects) usually targets…',
    options: [
      'Two short sub-paragraphs from the source, analysed for choices and effects',
      'The whole source in equal detail',
      'Only the title',
      'Only the final line',
    ],
    correctIndex: 0,
    // VERIFIED: Cambridge 0500/0990 syllabus 2024-2026, Paper 1 Q1(e) language analysis names two short paragraphs from Text A; accessed 2026
    explanation:
      'Q1(e) names two short paragraphs from Text A; analyse word/phrase choice and effect within them - concentrated language analysis.',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-091',
    topic: 'language-techniques',
    question:
      'A SAMPLE Cambridge IGCSE source describes a market: "a riot of colour, a riot of noise, a riot of competing tongues". The technique is…',
    options: ['Triplet with anaphora ("a riot of…")', 'Sibilance', 'Asyndeton', 'Hypophora'],
    correctIndex: 0,
    explanation:
      'Three parallel phrases beginning "a riot of…" combine triadic structure with anaphora - high-value language analysis point.',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-092',
    topic: 'exam-technique',
    question: 'Cambridge 0500/0990 Paper 2 Section B (Composition) offers a choice between…',
    options: [
      'Descriptive and narrative writing tasks',
      'Only a translation',
      'Only a summary',
      'Only a play script',
    ],
    correctIndex: 0,
    explanation:
      'Composition offers descriptive and narrative options - pick the form that best showcases your craft (the Cambridge equivalent of AO5/AO6).',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-093',
    topic: 'language-techniques',
    question:
      'In Cambridge composition, which is the strongest sign of a CRAFTED narrative ending?',
    options: [
      'A cyclical return to the opening image, leaving an implied resonance',
      'An abrupt "and then I woke up"',
      'A list of every character',
      'No ending at all',
    ],
    correctIndex: 0,
    explanation:
      'A cyclical, resonant ending shows conscious structural shaping - top-band Writing in Cambridge composition.',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-094',
    topic: 'exam-technique',
    question:
      'Cambridge 0500/0990 directed writing tasks specify a PURPOSE. If the purpose is "to persuade", the strongest opening will…',
    options: [
      'Engage with a hook (anecdote, statistic, rhetorical question) tied to the audience',
      'Apologise for writing',
      'Open with a long quotation from another source',
      'Open with a glossary',
    ],
    correctIndex: 0,
    explanation:
      'Persuasive openings need an audience-aware hook (ethos/logos/pathos) - central to the Reading and Writing marks.',
    boards: ['cambridge-0500', 'cambridge-0990', 'aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-095',
    topic: 'language-techniques',
    question:
      'Which sentence stem most clearly evidences AO2-style analysis suitable for Cambridge Paper 2 Q1?',
    options: [
      '"The verb ‘shattered’ has violent, brittle connotations, suggesting…"',
      '"There is a verb here."',
      '"The writer uses words."',
      '"This is good writing."',
    ],
    correctIndex: 0,
    explanation:
      'Top responses zoom in on a specific word, name the technique and explore connotations and effects on the reader.',
    boards: ['cambridge-0500', 'cambridge-0990', 'aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-096',
    topic: 'exam-technique',
    question:
      'In the Cambridge Paper 1 Q1(f) summary, what proportion of marks is for Reading vs. Writing?',
    options: [
      '10 Reading + 5 Writing (Reading-dominant, but writing style still assessed)',
      'Only Writing marks',
      'Only Reading marks',
      'Equal split with no Writing marks',
    ],
    correctIndex: 0,
    // VERIFIED: Cambridge 0500/0990 syllabus 2024-2026, Paper 1 Q1(f) summary = 15 marks (10 R + 5 W); accessed 2026
    explanation:
      'The Paper 1 Q1(f) summary is 15 marks: 10 Reading + 5 Writing - Reading-dominant, but Writing marks reward concise, well-organised own-words prose.',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
  {
    id: 'language-extra-097',
    topic: 'language-techniques',
    question:
      'A SAMPLE Cambridge directed-writing speech opens: "Friends - and I do call you friends - we stand at a crossroads tonight." Which technique is most prominent?',
    options: [
      'Direct address with parenthetical aside, plus metaphor ("crossroads")',
      'Sibilance',
      'Onomatopoeia',
      'Rhyme',
    ],
    correctIndex: 0,
    explanation:
      'Direct address plus the parenthetical builds intimacy; the "crossroads" metaphor frames a choice - strong directed-writing opening.',
    boards: ['cambridge-0500', 'cambridge-0990', 'aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-098',
    topic: 'exam-technique',
    question:
      'In Cambridge composition, which is the strongest evidence of "varied sentence forms"?',
    options: [
      'A deliberate mix of simple, compound, complex AND occasional minor sentences for effect',
      'Only complex sentences',
      'Only simple sentences',
      'Only one-word sentences',
    ],
    correctIndex: 0,
    explanation:
      'A controlled, deliberate mix of sentence types is top-band Writing - minor sentences should be used sparingly for effect.',
    boards: ['cambridge-0500', 'cambridge-0990', 'aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-099',
    topic: 'language-techniques',
    question: 'Which best defines "purpose and audience" for Cambridge directed writing?',
    options: [
      'WHY you are writing and WHO will read it - these jointly shape register, form and content',
      'The genre of an unrelated novel',
      'The publication date',
      'The number of paragraphs',
    ],
    correctIndex: 0,
    explanation:
      'Purpose (why) and audience (who) jointly drive every craft decision in transactional/directed writing across all boards.',
    boards: ['cambridge-0500', 'cambridge-0990', 'aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'language-extra-100',
    topic: 'exam-technique',
    question:
      'Across ALL GCSE/IGCSE Language papers, the single most reliable habit for boosting top-band marks is…',
    options: [
      'Plan briefly, sustain focus on the question, embed short quotations, and analyse choices and effects',
      'Write as much as possible without planning',
      'Quote the source in long blocks',
      'Memorise one essay and reproduce it',
    ],
    correctIndex: 0,
    explanation:
      'Planning, focus on the question, embedded quotation and analysis of authorial choice are the universal habits behind top-band performance.',
    boards: [
      'aqa',
      'edexcel',
      'ocr',
      'eduqas',
      'edexcel-igcse-lang',
      'cambridge-0500',
      'cambridge-0990',
    ],
  },
]
