export interface FormativeAssessmentTool {
  id: string;
  title: string;
  type: 'exit-ticket' | 'hinge-question' | 'mini-whiteboard' | 'think-pair-share' | 'quiz' | 'observation';
  yearGroup: string;
  skill: 'reading' | 'writing' | 'speaking' | 'grammar' | 'knowledge';
  purpose: string;
  howToUse: string[];
  questions?: string[];
  whatToLookFor: string[];
  followUpActions: string[];
}

export const formativeAssessmentTools: FormativeAssessmentTool[] = [
  // ─── EXIT TICKETS (5) ───────────────────────────────────────────────────────

  {
    id: 'et-y7-reading-comprehension',
    title: 'Y7 Reading Comprehension Exit Ticket',
    type: 'exit-ticket',
    yearGroup: 'Y7',
    skill: 'reading',
    purpose:
      'Check whether students can locate and retrieve information from a text before the lesson ends, identifying those who need additional support with literal comprehension.',
    howToUse: [
      'Distribute a half-sheet slip with three questions based on the lesson text in the final 5 minutes.',
      'Ask students to complete individually and in silence to obtain an honest snapshot of understanding.',
      'Collect slips as students leave and sort them into three piles: secure, developing, and struggling.',
      'Use the sorted piles to plan the opening activity for the following lesson.',
      'Record patterns across the class on your assessment tracker to inform grouping decisions.',
    ],
    questions: [
      'Write one piece of evidence from the text that tells you where the story is set.',
      'What does the word "desolate" suggest about the mood of this scene? Use the text to support your answer.',
      'How does the character feel at the end of the extract? Find a quotation to prove it.',
    ],
    whatToLookFor: [
      'Whether students can locate specific details rather than paraphrase vaguely.',
      'Accurate use of quotation marks around retrieved text.',
      'Any confusion between inference and retrieval responses.',
      'Students who leave questions blank, indicating a confidence or access barrier.',
    ],
    followUpActions: [
      'Begin next lesson with a modelled retrieval example for students in the struggling pile.',
      'Pair developing students with secure peers during the next reading activity.',
      'Adjust the pace of the reading unit if more than 30% of the class are in the struggling pile.',
    ],
  },

  {
    id: 'et-y8-analysis-paragraph',
    title: 'Y8 Analysis Paragraph Exit Ticket',
    type: 'exit-ticket',
    yearGroup: 'Y8',
    skill: 'writing',
    purpose:
      'Assess whether students can independently construct an analytical paragraph using Point-Evidence-Explanation structure after a writing lesson.',
    howToUse: [
      'In the final 8 minutes, display a short unseen quotation on the board related to the lesson topic.',
      'Students write a single analytical paragraph on an exit slip responding to the quotation.',
      'Collect the slips and mark with a simple colour code: green (PEE complete), amber (partial), red (missing key element).',
      'Identify the most common missing element (point, evidence, or explanation) across the class.',
      'Plan a short 10-minute re-teach at the start of the next lesson focused on that element.',
    ],
    questions: [
      'Write one analytical paragraph exploring how the writer uses language to create tension in this quotation.',
      'Identify the technique used in the quotation and explain the effect it has on the reader.',
      'What does this quotation reveal about the character or theme? Support your point with evidence from the text.',
    ],
    whatToLookFor: [
      'Whether the point is a clear arguable claim rather than a statement of fact.',
      'Whether the evidence is embedded naturally within a sentence rather than dropped in.',
      'Depth of explanation: does the student explore effect, connotation, or impact on the reader?',
      'Appropriate use of analytical vocabulary such as "suggests", "implies", or "conveys".',
    ],
    followUpActions: [
      'Use two anonymous examples from exit slips (one strong, one developing) as a peer-marking activity next lesson.',
      'Provide a sentence-starter scaffold for students who produced red-coded slips.',
      'Challenge green-coded students to extend their explanation with a counter-argument in the next lesson.',
    ],
  },

  {
    id: 'et-y9-context-knowledge',
    title: 'Y9 Context Knowledge Check Exit Ticket',
    type: 'exit-ticket',
    yearGroup: 'Y9',
    skill: 'knowledge',
    purpose:
      'Determine how well students have retained contextual information about a studied text and whether they can begin to connect context to meaning.',
    howToUse: [
      'Prepare a five-question exit slip covering key contextual facts taught this term.',
      'Students complete it individually in the final 5 minutes without notes or textbooks.',
      'Mark slips rapidly using the answer key and record scores on the class tracker.',
      'Identify any contextual detail that fewer than 60% of the class answered correctly.',
      'Re-teach that contextual point at the start of the following lesson using a retrieval practice activity.',
    ],
    questions: [
      'Name two historical events that influenced the writing of the text studied this term.',
      'What was the social position of women during the period in which this text was written?',
      'Explain one way in which the author\'s own life experiences are reflected in the text.',
      'How might a contemporary reader have responded differently to this text compared to a modern reader?',
      'Identify one critical perspective that could be applied when reading this text.',
    ],
    whatToLookFor: [
      'Accuracy of factual recall: dates, names, and key events stated correctly.',
      'Whether students can move beyond listing facts to connecting context to the text.',
      'Misconceptions or oversimplifications in students\' understanding of the historical period.',
      'Students who conflate the author\'s biography with the text\'s themes.',
    ],
    followUpActions: [
      'Create a context card for students who scored below 3 out of 5 to use in future lessons.',
      'Add the lowest-scoring contextual point to the next lesson\'s starter retrieval quiz.',
      'Set a home-learning task asking students to find one additional contextual fact independently.',
    ],
  },

  {
    id: 'et-igcse-language-technique',
    title: 'IGCSE Language Technique Exit Ticket',
    type: 'exit-ticket',
    yearGroup: 'Y10-Y11',
    skill: 'reading',
    purpose:
      'Check that IGCSE students can identify and explain language techniques under timed conditions, mirroring the demands of Paper 1 Section A.',
    howToUse: [
      'In the final 10 minutes, provide a 4-line extract from an unseen non-fiction source.',
      'Students must identify two language techniques and explain the effect of each in full sentences.',
      'Collect slips and check for accuracy of identification and quality of effect explanation.',
      'Sort slips by the quality of effect explanation rather than technique identification alone.',
      'Use the sorted slips to model exemplary effect explanations at the start of the next lesson.',
    ],
    questions: [
      'Identify two language techniques the writer uses in this extract and explain the effect of each.',
      'How does the writer\'s choice of words in line 2 influence the reader\'s feelings about the subject?',
      'What effect does the sentence structure in the final sentence create for the reader?',
    ],
    whatToLookFor: [
      'Whether students name the technique accurately rather than describing it vaguely.',
      'Quality of effect explanation: does it focus on reader impact rather than just writer intent?',
      'Whether students zoom in on specific words or phrases rather than commenting on whole sentences.',
      'Use of hedged analytical language: "could suggest", "might imply", "arguably conveys".',
    ],
    followUpActions: [
      'Share two annotated exemplar responses in the next lesson and ask students to grade them using the mark scheme.',
      'Provide a language technique reference card for students who misidentified techniques.',
      'Set a timed practice task for homework focusing on the weakest area identified across the class.',
    ],
  },

  {
    id: 'et-ial-linguistic-framework',
    title: 'IAL Linguistic Framework Check Exit Ticket',
    type: 'exit-ticket',
    yearGroup: 'Y12-Y13',
    skill: 'knowledge',
    purpose:
      'Assess whether A-level students can apply linguistic frameworks accurately to a data source, and identify gaps in framework knowledge ahead of Unit 1 or Unit 3 assessments.',
    howToUse: [
      'Provide a short language data extract (spoken transcript or written text, 6-8 lines) at the end of the lesson.',
      'Students annotate the extract applying three specified linguistic frameworks and write one evaluative comment.',
      'Collect the annotated slips and review the accuracy and depth of framework application.',
      'Identify which framework is least confidently applied across the class.',
      'Plan a targeted 15-minute framework workshop at the start of the next lesson.',
    ],
    questions: [
      'Apply the phonological framework to this spoken transcript: identify two features and comment on their function.',
      'Using the pragmatic framework, explain what the speaker\'s utterance implies beyond its literal meaning.',
      'Identify one feature of syntax in this written extract and explain its effect on the reader.',
      'Which discourse framework feature is most prominent here, and what does it reveal about the speaker\'s purpose?',
    ],
    whatToLookFor: [
      'Whether students use precise metalinguistic terminology rather than informal descriptions.',
      'Evidence of evaluative commentary rather than listing or labelling alone.',
      'Ability to link framework features to purpose, audience, or social context.',
      'Any framework that is consistently avoided, suggesting a knowledge gap rather than oversight.',
    ],
    followUpActions: [
      'Return annotated slips with one targeted question written on each to prompt deeper thinking.',
      'Create a framework revision worksheet focused on the least-applied framework across the class.',
      'Ask students to apply the same frameworks to a second extract for homework and self-assess using a model answer.',
    ],
  },

  // ─── HINGE QUESTIONS (4) ────────────────────────────────────────────────────

  {
    id: 'hq-y7-inference',
    title: 'Y7 Inference Hinge Question',
    type: 'hinge-question',
    yearGroup: 'Y7',
    skill: 'reading',
    purpose:
      'Diagnose whether students can distinguish inference from retrieval, a foundational skill for all subsequent analytical reading work.',
    howToUse: [
      'Display the question and four options on the board after students have read the lesson text.',
      'Ask students to hold up fingers (1, 2, 3, or 4) to indicate their answer simultaneously.',
      'Scan the room to gauge the distribution of responses before revealing the correct answer.',
      'If fewer than 70% select the correct answer, pause and address the misconception through whole-class discussion.',
      'Use the incorrect answer choices as prompts: ask "Why might someone choose option B?" to expose reasoning.',
    ],
    questions: [
      'The text says the character "slammed the door and did not look back." What can we infer from this?\nA) The character is tired.\nB) The character is angry or upset and does not want to return.\nC) The door was broken.\nD) The character forgot something inside.',
    ],
    whatToLookFor: [
      'Students selecting option A or C, which rely on literal or invented detail rather than inference.',
      'Students who select B but cannot explain their reasoning when asked.',
      'Confident show of hands on one wrong answer, suggesting a shared misconception about what inference means.',
      'Hesitation or looking at peers before responding, indicating low confidence rather than understanding.',
    ],
    followUpActions: [
      'If most students chose the literal answer, revisit the definition of inference using a think-aloud modelled example.',
      'Ask two or three students who chose B to explain their reasoning to the class.',
      'Provide two further inference practice sentences before moving on to the main lesson task.',
    ],
  },

  {
    id: 'hq-y8-persuasive-technique',
    title: 'Y8 Persuasive Technique Hinge Question',
    type: 'hinge-question',
    yearGroup: 'Y8',
    skill: 'reading',
    purpose:
      'Identify whether students can distinguish between different persuasive techniques and correctly name them, a prerequisite for analytical writing about non-fiction texts.',
    howToUse: [
      'Display a short extract from a persuasive text alongside the four-option question.',
      'Students write their answer on mini-whiteboards or select via a show of fingers simultaneously.',
      'Do not allow discussion before responses are shown, to ensure genuine independent assessment.',
      'Reveal the answer and ask a student who chose correctly to explain their reasoning.',
      'Address the most common incorrect choice directly, explaining why it does not fit.',
    ],
    questions: [
      '"Every single child in this country deserves a decent meal." Which persuasive technique is the writer using?\nA) Alliteration to create rhythm.\nB) Rhetorical question to challenge the reader.\nC) Inclusive pronoun and absolute to create shared responsibility.\nD) Anecdote to build emotional connection.',
      'The writer uses the phrase "we must act now." What is the main persuasive effect of this?\nA) It creates a sense of urgency and collective responsibility.\nB) It uses a metaphor to describe the problem.\nC) It lists examples to support the argument.\nD) It uses irony to challenge the reader.',
    ],
    whatToLookFor: [
      'Students who cannot distinguish between technique and effect, selecting the technique label rather than the effect.',
      'Confusion between anecdote and statistics as evidence-based techniques.',
      'Students who identify the correct technique but choose the wrong effect description.',
      'Patterns of error that suggest students are guessing based on the first plausible-sounding option.',
    ],
    followUpActions: [
      'Use the most common wrong answer as a class discussion point before the next writing task.',
      'Provide a persuasive techniques reference mat for students who answered incorrectly.',
      'Ask students to find an example of the confused technique in a new text to consolidate the distinction.',
    ],
  },

  {
    id: 'hq-y9-theme-analysis',
    title: 'Y9 Theme Analysis Hinge Question',
    type: 'hinge-question',
    yearGroup: 'Y9',
    skill: 'reading',
    purpose:
      'Assess whether students can identify how a writer develops a theme through language and structure, moving beyond surface-level plot description.',
    howToUse: [
      'Display the question after the class has read and discussed a key passage from the studied text.',
      'Students select their answer on mini-whiteboards or by show of hands simultaneously.',
      'Count responses in each category before confirming the answer.',
      'Use any incorrect responses as a springboard to discuss the difference between theme and plot.',
      'Follow up with a brief partner discussion task that requires students to justify their answer in writing.',
    ],
    questions: [
      'Dickens describes Scrooge as "a tight-fisted hand at the grindstone." This primarily develops the theme of:\nA) Physical cruelty, because Scrooge works hard.\nB) Greed and exploitation, because the metaphor links him to relentless, joyless labour.\nC) Poverty, because Dickens is criticising the working class.\nD) Isolation, because Scrooge does not speak to anyone.',
      'How does Steinbeck develop the theme of loneliness through Crooks in Chapter 4?\nA) By showing Crooks is physically disabled.\nB) By describing the objects in his room and his hostile reaction to Lennie entering.\nC) By having other characters ignore him at dinner.\nD) By showing Crooks reads many books.',
    ],
    whatToLookFor: [
      'Whether students can connect language choices to thematic meaning rather than plot events.',
      'Confusion between character traits and the themes those traits represent.',
      'Students selecting the answer that repeats the most words from the question, suggesting surface processing.',
      'Whether students spontaneously reference specific language choices when justifying their answer.',
    ],
    followUpActions: [
      'Ask students who chose correctly to write a full analytical sentence expanding on their choice.',
      'Model how to move from a hinge question answer to a full paragraph for students who chose incorrectly.',
      'Set a comparative task for homework: find a second moment in the text where the same theme is developed.',
    ],
  },

  {
    id: 'hq-igcse-essay-structure',
    title: 'IGCSE Essay Structure Hinge Question',
    type: 'hinge-question',
    yearGroup: 'Y10-Y11',
    skill: 'writing',
    purpose:
      'Check whether IGCSE students understand the structural and analytical requirements of a well-organised literature essay response before independent exam practice.',
    howToUse: [
      'Display two sample paragraph openings and ask students to identify which is more effective for an exam essay.',
      'Students write their choice and one reason on a mini-whiteboard and display simultaneously.',
      'Ask one student from each side to justify their choice before confirming the correct answer.',
      'If the class is split, discuss the criteria that make one opening stronger than the other.',
      'Connect the answer directly to the mark scheme descriptors students should know by this stage.',
    ],
    questions: [
      'Which paragraph opening is more effective for an IGCSE literature essay?\nA) "In Chapter 1, Priestley shows that Mr Birling is selfish when he talks about himself a lot."\nB) "Priestley constructs Mr Birling as a symbol of capitalist complacency, immediately undermining his authority through dramatic irony by having him make confidently wrong predictions about world affairs."\nC) "Mr Birling is an important character in An Inspector Calls because he represents the upper class."\nD) "The theme of responsibility is shown when Mr Birling speaks in Act 1."',
    ],
    whatToLookFor: [
      'Whether students can identify that option B demonstrates both a clear argument and a method-effect link.',
      'Confusion between identifying a theme and constructing an analytical argument about that theme.',
      'Students who prefer option A because it is simpler and they believe simplicity is safer.',
      'Whether students can explain what "dramatic irony" means and why it strengthens the argument in option B.',
    ],
    followUpActions: [
      'Ask students to rewrite option A to match the quality of option B as a short practice task.',
      'Provide the relevant mark scheme band descriptors for students to self-assess their rewrite.',
      'Plan a whole-class lesson on constructing essay openings if fewer than 60% chose option B.',
    ],
  },

  // ─── MINI-WHITEBOARD ACTIVITIES (3) ─────────────────────────────────────────

  {
    id: 'mwb-y7-vocabulary',
    title: 'Y7 Vocabulary Mini-Whiteboard Practice',
    type: 'mini-whiteboard',
    yearGroup: 'Y7',
    skill: 'knowledge',
    purpose:
      'Rapidly check retention of tier 2 and tier 3 vocabulary introduced during the lesson, enabling immediate re-teaching of any misunderstood words.',
    howToUse: [
      'Call out a word from the lesson vocabulary list and ask students to write a synonym, definition, or example sentence on their whiteboard.',
      'On the count of three, all students hold their whiteboards up simultaneously.',
      'Scan the room quickly and identify any patterns of error before asking students to wipe their boards.',
      'Repeat with 5-8 words in quick succession to maintain pace and engagement.',
      'For any word where more than a third of the class is incorrect, pause and clarify immediately using a visual or example.',
    ],
    questions: [
      'Write a synonym for "melancholy".',
      'Write a sentence using the word "foreboding" correctly.',
      'What does "omniscient" mean? Write a short definition.',
      'Write the word that means "the repetition of the same consonant sound at the start of words".',
      'Complete this sentence: "The writer uses juxtaposition to ____."',
    ],
    whatToLookFor: [
      'Synonyms that are close in meaning but not precise, indicating partial understanding.',
      'Example sentences where the word is used grammatically but does not demonstrate secure understanding of meaning.',
      'Students who write nothing or copy from a neighbour, suggesting significant vocabulary gaps.',
      'Whether students can use the word in context rather than just reciting a memorised definition.',
    ],
    followUpActions: [
      'Add any misunderstood words to the class vocabulary display and revisit them in the next three lessons.',
      'Ask students who demonstrated secure understanding to create a vocabulary example card to share with the class.',
      'Set a vocabulary consolidation task for home learning focused on the most frequently misunderstood words.',
    ],
  },

  {
    id: 'mwb-y8-punctuation',
    title: 'Y8 Punctuation Mini-Whiteboard Check',
    type: 'mini-whiteboard',
    yearGroup: 'Y8',
    skill: 'grammar',
    purpose:
      'Identify specific punctuation misconceptions before students apply punctuation independently in a writing task, preventing errors from being practised and embedded.',
    howToUse: [
      'Display a sentence on the board with missing or incorrect punctuation and ask students to write the corrected version on their whiteboard.',
      'Students hold up boards simultaneously on the count of three.',
      'Identify the most common error and address it by annotating the sentence on the board.',
      'Progress from simple sentence punctuation to more complex structures involving colons, semi-colons, and dashes.',
      'End with a sentence that students construct themselves using a specified punctuation mark correctly.',
    ],
    questions: [
      'Correct this sentence: "the cat sat on the mat it was sleeping."',
      'Add a semi-colon to this sentence to link two independent clauses: "The weather was terrible. We went outside anyway."',
      'Where should the apostrophe go? Write the correct version: "The boys coats were soaking wet."',
      'Rewrite this sentence using a colon to introduce a list: "She packed three things in her bag, a book, a pen, and her lunch."',
      'Write a sentence of your own that uses a dash correctly to add additional information.',
    ],
    whatToLookFor: [
      'Comma splices: students using a comma rather than a semi-colon or full stop between independent clauses.',
      'Confusion between its (possessive) and it\'s (contraction) as a persistent error.',
      'Apostrophe placement errors in plural possessives (boys\' vs boy\'s).',
      'Students who can correct given sentences but cannot construct their own, suggesting procedural rather than conceptual understanding.',
    ],
    followUpActions: [
      'Provide a punctuation self-editing checklist for students to use during the upcoming writing task.',
      'Target students with persistent comma splice errors with a short one-to-one explanation during independent work time.',
      'Display a punctuation reference chart on the board for the duration of the next writing task.',
    ],
  },

  {
    id: 'mwb-y9-quotation-embedding',
    title: 'Y9 Quotation Embedding Mini-Whiteboard Practice',
    type: 'mini-whiteboard',
    yearGroup: 'Y9',
    skill: 'writing',
    purpose:
      'Check whether students can embed quotations grammatically within analytical sentences rather than dropping them in as isolated blocks of text.',
    howToUse: [
      'Provide a quotation from the studied text and a sentence starter on the board.',
      'Students complete the sentence on their whiteboard, embedding the quotation grammatically.',
      'Hold up boards simultaneously; check for correct punctuation of embedded quotations.',
      'Model the correction of one common error on the board before students wipe and try again.',
      'Repeat with three or four different quotations and sentence starters, increasing complexity each time.',
    ],
    questions: [
      'Embed this quotation into an analytical sentence: "of mice and men" -- start with "Steinbeck\'s title..."',
      'Complete this sentence so the quotation is embedded: "Scrooge is shown to be isolated when Dickens describes him as \'____.\'"',
      'Write a sentence embedding the quotation "What a piece of work is a man" that includes the word "suggests".',
      'Rewrite this dropped quotation as an embedded one: "Macbeth is ambitious. \'I have no spur to prick the sides of my intent.\'"',
    ],
    whatToLookFor: [
      'Whether students punctuate embedded quotations with inverted commas and maintain sentence flow.',
      'Grammatical agreement between the sentence and the embedded quotation: tense and pronoun consistency.',
      'Students who write the full quotation in full capital letters or as a separate sentence, showing unfamiliarity with embedding.',
      'Whether students integrate the author\'s name naturally rather than always starting with "The writer says".',
    ],
    followUpActions: [
      'Provide a sentence frame resource for students who struggled with embedding during independent writing time.',
      'Display three model embedded sentences on the board as a reference for the subsequent essay task.',
      'Ask students who embedded correctly to peer-mark a partner\'s paragraph for quotation embedding in the next task.',
    ],
  },

  // ─── THINK-PAIR-SHARE (4) ───────────────────────────────────────────────────

  {
    id: 'tps-y7-character',
    title: 'Y7 Character Discussion Think-Pair-Share',
    type: 'think-pair-share',
    yearGroup: 'Y7',
    skill: 'speaking',
    purpose:
      'Develop students\' ability to articulate character judgements using textual evidence, building the verbal skills that underpin written analytical responses.',
    howToUse: [
      'Pose the question on the board and give students 90 seconds to think individually and jot notes.',
      'Pair students (ideally one more confident with one less confident reader) to discuss for 2 minutes.',
      'Take feedback from three or four pairs, asking each to share their partner\'s view rather than their own.',
      'Record key vocabulary and phrases that emerge on the board for students to use in subsequent writing.',
      'Close by asking students to write one sentence summarising the class\'s view of the character.',
    ],
    questions: [
      'Is this character a villain, a victim, or something more complicated? What does the text tell us?',
      'Which word or phrase in the passage best captures this character\'s personality? Explain your choice.',
      'How do you think the reader is meant to feel about this character at this point in the story?',
    ],
    whatToLookFor: [
      'Whether students support their opinions with specific reference to the text or rely on general impressions.',
      'Quality of listening during the pair stage: does each student accurately report their partner\'s view?',
      'Students who offer binary judgements (good/bad, like/dislike) rather than nuanced responses.',
      'The vocabulary students use spontaneously: is it analytical or conversational?',
    ],
    followUpActions: [
      'Display the most insightful comment from the discussion (anonymised) as a model for the class.',
      'Use the vocabulary generated during sharing as a word bank for the written follow-up task.',
      'If discussions were superficial, provide a sentence-starter resource to scaffold the next think-pair-share.',
    ],
  },

  {
    id: 'tps-y8-poets-message',
    title: 'Y8 Poet\'s Message Discussion Think-Pair-Share',
    type: 'think-pair-share',
    yearGroup: 'Y8',
    skill: 'speaking',
    purpose:
      'Help students move from identifying poetic techniques to discussing the poet\'s overall message or intention, a higher-order analytical skill.',
    howToUse: [
      'After reading the poem twice, pose the question and allow 2 minutes of silent individual thinking.',
      'Students discuss in pairs for 3 minutes, with one student acting as note-taker.',
      'Take feedback from pairs, building a collaborative interpretation on the board.',
      'Challenge the class: "Does anyone disagree with what has been said? What does the text tell us?"',
      'Students write a one-paragraph response to the question independently to consolidate the discussion.',
    ],
    questions: [
      'What is the poet trying to make the reader think or feel by the end of this poem?',
      'Do you think the poet is criticising, celebrating, or mourning something? What makes you say that?',
      'Which image in the poem do you think best communicates the poet\'s message? Why?',
      'Has your interpretation of the poem changed since reading it a second time? What changed?',
    ],
    whatToLookFor: [
      'Whether students can distinguish between what the poem describes and what it means.',
      'Evidence of genuine discussion rather than one student dominating while the other remains silent.',
      'Responses that reference specific lines or words rather than vague general impressions.',
      'Whether students are willing to revise their initial interpretation when challenged.',
    ],
    followUpActions: [
      'Model how a class discussion point can be transformed into an opening essay sentence.',
      'Ask each pair to select one quotation that best supports their interpretation for the subsequent written task.',
      'If students struggle with the concept of poetic intention, plan a lesson on how to approach the poet\'s voice.',
    ],
  },

  {
    id: 'tps-y9-social-context',
    title: 'Y9 Social Context Discussion Think-Pair-Share',
    type: 'think-pair-share',
    yearGroup: 'Y9',
    skill: 'speaking',
    purpose:
      'Develop students\' ability to connect social and historical context to specific moments in the studied text, preparing them for context-based examination questions.',
    howToUse: [
      'Provide a brief context card with two or three key historical facts relevant to the discussion question.',
      'Students think individually for 90 seconds before discussing in pairs for 3 minutes.',
      'During pair discussion, circulate and note down strong contextual connections being made.',
      'Take shared feedback and ask: "How would this change the meaning of the text for a contemporary audience?"',
      'Record three key contextual points on the board that students should include in their written response.',
    ],
    questions: [
      'How does knowledge of the Great Depression help you understand the relationship between George and Lennie?',
      'Dickens published "A Christmas Carol" in 1843 when child poverty was widespread. How does this change how you read Tiny Tim?',
      'How might the rigid class system of the Edwardian era explain why Sheila and Eva Smith are treated so differently?',
      'Would a reader in the 1930s have been more or less shocked by Crooks\' treatment than a modern reader? Why?',
    ],
    whatToLookFor: [
      'Whether students can move beyond listing context to explaining how it illuminates a specific moment in the text.',
      'Confusion between the author\'s historical period and the text\'s setting period.',
      'Students who can retrieve contextual facts but cannot apply them analytically.',
      'Quality of discussion: are students building on each other\'s points or speaking in turn without engaging?',
    ],
    followUpActions: [
      'Provide a context-to-text sentence frame for the written follow-up: "Given that ______, it is significant that Dickens/Steinbeck/Priestley ______."',
      'Ask students to find one more contextual detail independently for home learning and share it next lesson.',
      'If context application is weak across the class, plan a dedicated context-to-text lesson before the next essay.',
    ],
  },

  {
    id: 'tps-ial-language-data',
    title: 'IAL Language Data Interpretation Think-Pair-Share',
    type: 'think-pair-share',
    yearGroup: 'Y12-Y13',
    skill: 'speaking',
    purpose:
      'Develop A-level students\' ability to construct interpretive arguments about language data before committing to a written analytical response, reducing the tendency to merely describe.',
    howToUse: [
      'Provide a language data source (transcript, text, or comparative pair) and allow 3 minutes of silent annotation.',
      'Students discuss their preliminary interpretations in pairs for 4 minutes, each taking turns to lead.',
      'One student from each pair shares the most significant insight they generated together.',
      'Challenge: "What would a different linguistic framework reveal that your initial analysis missed?"',
      'Students draft a thesis statement independently based on the discussion before beginning extended analysis.',
    ],
    questions: [
      'What is the most significant feature of this data source and what does it reveal about language use in this context?',
      'Which linguistic framework is most productive for analysing this data? Could a different framework challenge your reading?',
      'What does this data reveal about the relationship between the speakers or the writer and their audience?',
      'If you had to argue for one dominant interpretation of this data, what would it be and why?',
    ],
    whatToLookFor: [
      'Whether students generate analytical arguments or default to feature-spotting and labelling.',
      'Evidence of genuine intellectual engagement during the pair stage: are they challenging each other\'s interpretations?',
      'Whether students can apply multiple frameworks or tend to rely on one comfortable approach.',
      'Quality of the thesis statement: is it specific, arguable, and grounded in the data?',
    ],
    followUpActions: [
      'Ask students to exchange thesis statements and provide one written question that challenges their partner\'s argument.',
      'Identify the pair that generated the strongest interpretation and ask them to share their discussion process.',
      'Plan a lesson on constructing counter-arguments if students\' discussions are consistently one-directional.',
    ],
  },

  // ─── QUIZZES (4) ────────────────────────────────────────────────────────────

  {
    id: 'quiz-y7-term1-knowledge',
    title: 'Y7 Term 1 Knowledge Quiz',
    type: 'quiz',
    yearGroup: 'Y7',
    skill: 'knowledge',
    purpose:
      'Consolidate and assess retention of core literary, grammatical, and vocabulary knowledge taught in Term 1, identifying gaps before content builds further in Term 2.',
    howToUse: [
      'Distribute the quiz at the start of the lesson and allow 15 minutes for completion in silence.',
      'Students self-mark using the answer key read aloud by the teacher, correcting in a different colour.',
      'Students record their score and reflect on which two questions they found hardest.',
      'Teacher records scores on the class tracker and identifies any question answered incorrectly by the majority.',
      'Plan retrieval practice for the lowest-scoring topic in the next three starters.',
    ],
    questions: [
      'What is a noun? Give an example from our studied text.',
      'What does "simile" mean? Write an example.',
      'What is the difference between a narrator and an author?',
      'What does "theme" mean in the context of a story?',
      'Name one theme in the text we studied this term.',
      'What is personification? Write your own example sentence.',
      'What does "foreshadowing" mean? Find an example from the text.',
      'What is an adjective? Identify one in this sentence: "The dark forest loomed ahead."',
      'What is the difference between first-person and third-person narration?',
      'Write a definition of "metaphor" and explain how it is different from a simile.',
    ],
    whatToLookFor: [
      'Whether students can produce their own examples rather than simply reciting definitions.',
      'Confusion between similar techniques: simile vs metaphor, personification vs metaphor.',
      'Whether the lowest-scoring questions relate to grammar or literary terms.',
      'Students who score highly on definitions but cannot apply terms to the studied text.',
    ],
    followUpActions: [
      'Display the correct answers to the three most-missed questions as a retrieval display for the following two weeks.',
      'Set a personalised revision task: each student must revise the two topics they found hardest.',
      'Incorporate the lowest-scoring question type into the starter activity for the next four lessons.',
    ],
  },

  {
    id: 'quiz-y8-spag',
    title: 'Y8 SPaG Quiz',
    type: 'quiz',
    yearGroup: 'Y8',
    skill: 'grammar',
    purpose:
      'Assess students\' spelling, punctuation, and grammar accuracy in a focused, time-limited format to inform targeted intervention before major writing assessments.',
    howToUse: [
      'Administer the 10-question quiz as the lesson starter over 10 minutes without access to notes.',
      'Students swap papers and peer-mark using the answer key, awarding one mark per question.',
      'Students record their score and circle the questions they marked wrong on their partner\'s paper.',
      'Teacher collects data on the three most common errors across the class.',
      'Target the most common error in a 5-minute explanation and practice activity at the end of the lesson.',
    ],
    questions: [
      'Correct the spelling: "The students arguement was convinceing."',
      'Add the missing apostrophe: "Its the schools decision to change the policy."',
      'Which sentence is correct? A) "Me and my friend went." B) "My friend and I went."',
      'Correct the comma splice: "She was tired, she went to bed."',
      'Add the correct punctuation: "The following items are needed pen pencil and ruler."',
      'Which word is correct? "The effect/affect of the speech was powerful."',
      'Correct the sentence: "He was laying on the bed, reading a book." (Hint: consider lay/lie)',
      'Is this sentence active or passive? "The book was written by Dickens."',
      'Correct the error: "There going to the libary tomorrow."',
      'Add a semi-colon to join these two sentences: "The play was brilliant. The audience stood and applauded."',
    ],
    whatToLookFor: [
      'Apostrophe errors: confusion between its/it\'s and failure to use apostrophes in contracted forms.',
      'Comma splices as a persistent pattern across the majority of the class.',
      'Spelling errors in high-frequency academic vocabulary such as "argument", "evidence", "necessary".',
      'Confusion between homophones: effect/affect, their/there/they\'re, lay/lie.',
    ],
    followUpActions: [
      'Create a class SPaG target list based on the three most common errors and share it with students.',
      'Incorporate the most common spelling errors into the weekly spelling test for the next four weeks.',
      'Ask students to add their personal SPaG targets to their writing checklist for use in the next assessment.',
    ],
  },

  {
    id: 'quiz-y9-context',
    title: 'Y9 Context Quiz',
    type: 'quiz',
    yearGroup: 'Y9',
    skill: 'knowledge',
    purpose:
      'Test retention of contextual knowledge taught alongside the Year 9 studied texts, ensuring students have accurate factual knowledge to deploy in examination-style responses.',
    howToUse: [
      'Students complete the 10-question quiz individually in 12 minutes at the start of the lesson.',
      'Teacher reads correct answers aloud and students self-mark in a different colour.',
      'Students tally their score and identify which two contextual areas need further revision.',
      'Teacher records class performance by question on the assessment tracker.',
      'Any question answered incorrectly by more than half the class is re-taught in the following lesson.',
    ],
    questions: [
      'In which year was "A Christmas Carol" published?',
      'What were the two main political causes of the Great Depression in America?',
      'What is the name of the Poor Law that Dickens was protesting against in "A Christmas Carol"?',
      'What social group does Crooks represent in "Of Mice and Men"?',
      'What does "Marxist criticism" argue when applied to literature?',
      'What event in Dickens\' own childhood influenced his portrayal of poverty?',
      'Why did Steinbeck set "Of Mice and Men" in the 1930s Salinas Valley?',
      'What is meant by the term "social mobility" in the context of Victorian England?',
      'Name one female critic or theorist whose ideas could be applied to the treatment of women in this period.',
      'What does "social realism" mean as a literary movement?',
    ],
    whatToLookFor: [
      'Whether students can recall accurate dates and names rather than approximations.',
      'Any contextual area (historical, social, biographical, critical) that is consistently weak across the class.',
      'Students who answer questions about context correctly but cannot apply that context to specific moments in the text.',
      'Confusion between context about the text\'s setting and context about the time of writing.',
    ],
    followUpActions: [
      'Revisit the lowest-scoring contextual area with a short structured reading and retrieval activity next lesson.',
      'Create a context revision card for any area scored below 50% across the class and add it to students\' revision folders.',
      'Set a home-learning task requiring students to connect three contextual facts to specific moments in the studied text.',
    ],
  },

  {
    id: 'quiz-igcse-exam-terminology',
    title: 'IGCSE Exam Terminology Quiz',
    type: 'quiz',
    yearGroup: 'Y10-Y11',
    skill: 'knowledge',
    purpose:
      'Ensure IGCSE students have secure knowledge of the terminology used in exam questions and mark schemes, reducing the risk of misreading or misinterpreting examination tasks.',
    howToUse: [
      'Administer the quiz without notes or revision materials in the first 10 minutes of the lesson.',
      'Students self-mark against the model answers read by the teacher, scoring 1 mark for each accurate definition.',
      'Students calculate their score and identify the three terms they are least secure on.',
      'Teacher uses the aggregate data to identify any term that requires whole-class consolidation.',
      'Post the complete glossary on the classroom wall for reference during exam preparation.',
    ],
    questions: [
      'What does the exam command word "explore" require you to do in a literature question?',
      'What is meant by "narrative voice" in a language paper question?',
      'What does "structural choice" mean and how is it different from "language choice"?',
      'Define "implicit meaning" and give an example.',
      'What is a "rhetorical device"? Name two examples.',
      'What does "tone" mean in the context of language analysis?',
      'What is the difference between a "theme" and a "motif"?',
      'What does "characterisation" mean and what methods can writers use to characterise?',
      'Define "juxtaposition" and explain why a writer might use it.',
      'What does the exam command word "compare" require you to do in a language question?',
    ],
    whatToLookFor: [
      'Whether students understand command words and what each requires them to do in a response.',
      'Confusion between implicit and explicit meaning, which leads to retrieval rather than analysis in exams.',
      'Inability to distinguish between language and structural features: a critical distinction in Papers 1 and 2.',
      'Students who can define terms but cannot give examples, suggesting shallow rather than applied knowledge.',
    ],
    followUpActions: [
      'Share the official mark scheme glossary with students and ask them to annotate it with personal examples.',
      'Practice applying the most misunderstood command word in a short timed exam-style task next lesson.',
      'Ask students to create their own personalised terminology revision cards for the terms they scored lowest on.',
    ],
  },
];
