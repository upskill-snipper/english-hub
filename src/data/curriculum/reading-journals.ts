export interface JournalPrompt {
  id: string;
  yearGroup: string;
  text: string;
  type: 'response' | 'prediction' | 'connection' | 'question' | 'analysis' | 'evaluation' | 'creative-response';
  prompt: string;
  scaffoldingSentenceStarters: string[];
  challengeExtension: string;
  linkedSkill: string;
}

export interface ReadingResponseActivity {
  id: string;
  title: string;
  yearGroups: string[];
  duration: string;
  description: string;
  instructions: string[];
  materials: string[];
  differentiation: {
    support: string;
    core: string;
    stretch: string;
  };
}

// ---------------------------------------------------------------------------
// JOURNAL PROMPTS -- 6 per year group, Y7-Y13 (42 total)
// Progression: personal response -> prediction -> connection -> question ->
//              analysis -> evaluation -> creative-response
// ---------------------------------------------------------------------------

export const journalPrompts: JournalPrompt[] = [

  // -------------------------------------------------------------------------
  // Y7
  // -------------------------------------------------------------------------
  {
    id: 'jp-y7-01',
    yearGroup: 'Y7',
    text: 'Personal Response',
    type: 'response',
    prompt: 'How did this text make you feel? Write about one moment that stood out to you and explain why it affected you.',
    scaffoldingSentenceStarters: [
      'When I read this part, I felt...',
      'This moment stood out to me because...',
      'I was surprised / moved / confused when...',
    ],
    challengeExtension: 'Compare your emotional response to a time in your own life when you felt something similar. What does that connection reveal?',
    linkedSkill: 'Personal response and engagement with texts',
  },
  {
    id: 'jp-y7-02',
    yearGroup: 'Y7',
    text: 'Prediction',
    type: 'prediction',
    prompt: 'What do you think will happen next in the story? Use clues from the text to support your prediction.',
    scaffoldingSentenceStarters: [
      'I predict that... because...',
      'The author hints at... which makes me think...',
      'Based on what I have read, I expect...',
    ],
    challengeExtension: 'Write an alternative ending of 100 words that changes one key decision a character makes.',
    linkedSkill: 'Inference and use of textual evidence',
  },
  {
    id: 'jp-y7-03',
    yearGroup: 'Y7',
    text: 'Text-to-Self Connection',
    type: 'connection',
    prompt: 'Does anything in this text remind you of your own life or experiences? Explain the connection clearly.',
    scaffoldingSentenceStarters: [
      'This reminds me of when I...',
      'I can relate to [character] because...',
      'A similar situation I have experienced is...',
    ],
    challengeExtension: 'Explain how your personal connection helps you understand the theme of the text more deeply.',
    linkedSkill: 'Making personal connections and building reading engagement',
  },
  {
    id: 'jp-y7-04',
    yearGroup: 'Y7',
    text: 'Reader Questions',
    type: 'question',
    prompt: 'Write three questions you would ask the author or a character. Explain why each question matters to your understanding.',
    scaffoldingSentenceStarters: [
      'I wonder why...',
      'I would ask [character]...',
      'Something that confuses me is...',
    ],
    challengeExtension: 'Try to answer one of your questions using evidence from the text, then explain what remains unanswered.',
    linkedSkill: 'Active questioning and monitoring comprehension',
  },
  {
    id: 'jp-y7-05',
    yearGroup: 'Y7',
    text: 'Character Analysis',
    type: 'analysis',
    prompt: 'Choose one character and describe what they are like. Use at least two quotations from the text as evidence.',
    scaffoldingSentenceStarters: [
      '[Character] is presented as... because...',
      'The author shows [character\'s] personality through...',
      'The quotation "..." tells us that...',
    ],
    challengeExtension: 'Explain how the character changes (or refuses to change) across the text and what this suggests about the author\'s message.',
    linkedSkill: 'Character analysis and use of quotation',
  },
  {
    id: 'jp-y7-06',
    yearGroup: 'Y7',
    text: 'Creative Response',
    type: 'creative-response',
    prompt: 'Write a short diary entry from the perspective of a character at a key moment in the text.',
    scaffoldingSentenceStarters: [
      'Dear Diary, today I...',
      'I cannot believe what happened when...',
      'I felt [emotion] because...',
    ],
    challengeExtension: 'Write a second diary entry from the perspective of a different character at the same moment. Compare the two viewpoints.',
    linkedSkill: 'Creative writing and perspective-taking',
  },

  // -------------------------------------------------------------------------
  // Y8
  // -------------------------------------------------------------------------
  {
    id: 'jp-y8-01',
    yearGroup: 'Y8',
    text: 'Emotional Impact',
    type: 'response',
    prompt: 'Identify the moment in the text that created the strongest emotional impact. Explain what the author does to create that effect.',
    scaffoldingSentenceStarters: [
      'The most powerful moment for me was...',
      'The author creates tension / empathy / unease by...',
      'My emotional response shifted when...',
    ],
    challengeExtension: 'Research the term "pathos" and explain how the author uses it in this moment. Is it effective? Why or why not?',
    linkedSkill: 'Analysing the effect of writers\' choices on the reader',
  },
  {
    id: 'jp-y8-02',
    yearGroup: 'Y8',
    text: 'Foreshadowing and Prediction',
    type: 'prediction',
    prompt: 'Find one example of foreshadowing in the text. What do you think it is preparing the reader for?',
    scaffoldingSentenceStarters: [
      'The author foreshadows... when they write "..."',
      'This detail seems significant because...',
      'I predict this will lead to... because...',
    ],
    challengeExtension: 'Explain why authors use foreshadowing and analyse the effect it has on suspense in this text.',
    linkedSkill: 'Identifying and interpreting literary devices',
  },
  {
    id: 'jp-y8-03',
    yearGroup: 'Y8',
    text: 'Text-to-Text Connection',
    type: 'connection',
    prompt: 'How does this text connect to another text you have read? Identify at least one similarity and one difference in theme or technique.',
    scaffoldingSentenceStarters: [
      'This text reminds me of [other text] because...',
      'Both texts explore the theme of...',
      'Unlike [other text], this text...',
    ],
    challengeExtension: 'Consider what both texts together suggest about the theme. Does reading them alongside each other change your understanding?',
    linkedSkill: 'Comparative reading and thematic analysis',
  },
  {
    id: 'jp-y8-04',
    yearGroup: 'Y8',
    text: 'Authorial Intent',
    type: 'question',
    prompt: 'What do you think the author is trying to say to the reader? Write a question you would ask the author about their intentions.',
    scaffoldingSentenceStarters: [
      'I think the author wants the reader to consider...',
      'I would ask the author why they chose to...',
      'The message I take from this text is...',
    ],
    challengeExtension: 'Research the author\'s background or context. Does this change how you read the text? Explain your thinking.',
    linkedSkill: 'Considering authorial purpose and context',
  },
  {
    id: 'jp-y8-05',
    yearGroup: 'Y8',
    text: 'Language Analysis',
    type: 'analysis',
    prompt: 'Find one sentence or phrase where the language is particularly powerful. Analyse the effect of specific word choices.',
    scaffoldingSentenceStarters: [
      'The writer uses the word "..." which...',
      'The phrase "..." is effective because...',
      'The connotations of "..." suggest...',
    ],
    challengeExtension: 'Explain how this language choice connects to the broader theme or mood of the whole text.',
    linkedSkill: 'Language analysis and understanding of connotation',
  },
  {
    id: 'jp-y8-06',
    yearGroup: 'Y8',
    text: 'Alternative Viewpoint',
    type: 'creative-response',
    prompt: 'Rewrite a key scene from the perspective of a minor or background character. How does the scene change?',
    scaffoldingSentenceStarters: [
      'From where I was standing, I could see...',
      'Nobody noticed me, but I...',
      'If they had asked me, I would have said...',
    ],
    challengeExtension: 'Reflect on your rewrite: what does it reveal about narrative perspective and how it shapes our sympathy?',
    linkedSkill: 'Creative writing, narrative perspective, and empathy',
  },

  // -------------------------------------------------------------------------
  // Y9
  // -------------------------------------------------------------------------
  {
    id: 'jp-y9-01',
    yearGroup: 'Y9',
    text: 'Reader Positioning',
    type: 'response',
    prompt: 'How does the author position you as a reader? Do you feel sympathetic, critical, or unsettled? Explore how the text achieves this.',
    scaffoldingSentenceStarters: [
      'The author positions the reader to feel...',
      'I find myself sympathising with / questioning...',
      'The narrative voice makes me...',
    ],
    challengeExtension: 'Consider whether you think this positioning is manipulative or justified, and what that reveals about the author\'s purpose.',
    linkedSkill: 'Understanding reader positioning and narrative voice',
  },
  {
    id: 'jp-y9-02',
    yearGroup: 'Y9',
    text: 'Structural Prediction',
    type: 'prediction',
    prompt: 'Analyse the structure of the text so far. Based on structural patterns, predict how the text will develop or resolve.',
    scaffoldingSentenceStarters: [
      'The structure of this text follows a pattern of...',
      'The author builds tension through...',
      'Based on how the text is organised, I expect...',
    ],
    challengeExtension: 'Compare the structure of this text to a conventional narrative or genre structure. How does it conform to or subvert expectations?',
    linkedSkill: 'Structural analysis and genre awareness',
  },
  {
    id: 'jp-y9-03',
    yearGroup: 'Y9',
    text: 'Text-to-World Connection',
    type: 'connection',
    prompt: 'How does this text connect to wider society, history, or current events? What does it reveal about the world?',
    scaffoldingSentenceStarters: [
      'This text reflects the real-world issue of...',
      'The author is commenting on society by...',
      'This connects to contemporary events because...',
    ],
    challengeExtension: 'Evaluate how effectively the text illuminates this real-world issue. Does it deepen understanding or oversimplify?',
    linkedSkill: 'Contextual reading and social awareness',
  },
  {
    id: 'jp-y9-04',
    yearGroup: 'Y9',
    text: 'Ambiguity and Uncertainty',
    type: 'question',
    prompt: 'Identify one moment in the text that is deliberately ambiguous. What are the possible interpretations and why might the author leave this open?',
    scaffoldingSentenceStarters: [
      'This part of the text could mean...',
      'Alternatively, it could be interpreted as...',
      'The author leaves this ambiguous in order to...',
    ],
    challengeExtension: 'Research the concept of "polysemy" in literary criticism. How does accepting multiple meanings enrich reading?',
    linkedSkill: 'Handling ambiguity and developing multiple interpretations',
  },
  {
    id: 'jp-y9-05',
    yearGroup: 'Y9',
    text: 'Theme Exploration',
    type: 'analysis',
    prompt: 'Identify the most important theme in the text. How is it developed through character, language, and structure?',
    scaffoldingSentenceStarters: [
      'A key theme in this text is...',
      'The author develops this theme through...',
      'The theme is reinforced when...',
    ],
    challengeExtension: 'Compare how this theme is treated in another text. What does each author\'s approach reveal about their context or beliefs?',
    linkedSkill: 'Thematic analysis across literary elements',
  },
  {
    id: 'jp-y9-06',
    yearGroup: 'Y9',
    text: 'Monologue',
    type: 'creative-response',
    prompt: 'Write a dramatic monologue in the voice of a character at a turning point in the text. Reveal their inner conflict.',
    scaffoldingSentenceStarters: [
      'I have always believed that...',
      'But now I am not so sure...',
      'What nobody understands is...',
    ],
    challengeExtension: 'Annotate your monologue to identify the techniques you have used and explain how they reflect the original text\'s style.',
    linkedSkill: 'Dramatic monologue, voice, and stylistic imitation',
  },

  // -------------------------------------------------------------------------
  // Y10
  // -------------------------------------------------------------------------
  {
    id: 'jp-y10-01',
    yearGroup: 'Y10',
    text: 'Critical First Response',
    type: 'response',
    prompt: 'Write a critical first response to the text. What are your initial impressions of how it is constructed and what it is trying to achieve?',
    scaffoldingSentenceStarters: [
      'My initial critical impression is that...',
      'The text appears to be constructed in order to...',
      'What strikes me most about the craft of this text is...',
    ],
    challengeExtension: 'Revisit your response after class discussion. What has changed in your critical perspective and what remains the same?',
    linkedSkill: 'Critical reading and forming analytical judgements',
  },
  {
    id: 'jp-y10-02',
    yearGroup: 'Y10',
    text: 'Tension and Anticipation',
    type: 'prediction',
    prompt: 'How does the writer build tension and anticipation? Predict what the narrative or argument will do next to sustain or release this tension.',
    scaffoldingSentenceStarters: [
      'The writer builds tension through...',
      'The reader is made to anticipate... because...',
      'I predict the tension will be resolved / heightened when...',
    ],
    challengeExtension: 'Write the next paragraph of the text, consciously employing the tension-building techniques you have identified.',
    linkedSkill: 'Analysing narrative tension and genre conventions',
  },
  {
    id: 'jp-y10-03',
    yearGroup: 'Y10',
    text: 'Intertextuality',
    type: 'connection',
    prompt: 'Can you identify any references, allusions, or parallels to other texts, myths, or cultural stories in this text? What effect do these create?',
    scaffoldingSentenceStarters: [
      'This text alludes to / references...',
      'The parallel between this text and [other text] suggests...',
      'The intertextual reference creates the effect of...',
    ],
    challengeExtension: 'Explain how understanding the intertextual reference deepens the meaning of the text for a knowledgeable reader.',
    linkedSkill: 'Identifying intertextuality and cultural literacy',
  },
  {
    id: 'jp-y10-04',
    yearGroup: 'Y10',
    text: 'Challenging the Text',
    type: 'question',
    prompt: 'What assumptions does this text make? Challenge at least one assumption by considering whose voice or perspective is missing.',
    scaffoldingSentenceStarters: [
      'The text assumes that...',
      'A perspective that is missing from this text is...',
      'I would challenge the author by asking...',
    ],
    challengeExtension: 'Write a short response to the text from the missing perspective you have identified.',
    linkedSkill: 'Critical literacy and identifying bias and omission',
  },
  {
    id: 'jp-y10-05',
    yearGroup: 'Y10',
    text: 'Writer\'s Craft',
    type: 'analysis',
    prompt: 'Select one extract of no more than five lines and produce a detailed close-reading analysis of the writer\'s craft.',
    scaffoldingSentenceStarters: [
      'In this extract, the writer uses... to convey...',
      'The structural choice of... is significant because...',
      'The cumulative effect of these techniques is...',
    ],
    challengeExtension: 'Compare the techniques in your chosen extract to a passage from a different text on a similar theme.',
    linkedSkill: 'Close reading and analytical writing',
  },
  {
    id: 'jp-y10-06',
    yearGroup: 'Y10',
    text: 'Evaluation',
    type: 'evaluation',
    prompt: 'How successful is this text in achieving its purpose? Consider its effect on the reader, its craft, and its relevance.',
    scaffoldingSentenceStarters: [
      'Overall, I believe this text is [highly / partially / not] successful because...',
      'The text is most effective when...',
      'However, it is less convincing when...',
    ],
    challengeExtension: 'Write a 200-word critical evaluation that could serve as a published review, balancing strengths and limitations.',
    linkedSkill: 'Evaluation, critical judgement, and extended writing',
  },

  // -------------------------------------------------------------------------
  // Y11
  // -------------------------------------------------------------------------
  {
    id: 'jp-y11-01',
    yearGroup: 'Y11',
    text: 'Contextualised Response',
    type: 'response',
    prompt: 'Write a personal response to the text that integrates relevant contextual knowledge -- historical, biographical, or social -- without letting it overshadow close reading.',
    scaffoldingSentenceStarters: [
      'My reading of this text is shaped by the context of...',
      'Understanding [context] enables me to appreciate...',
      'However, the text itself suggests...',
    ],
    challengeExtension: 'Reflect on the tension between biographical and close-reading approaches. Which do you find more illuminating here and why?',
    linkedSkill: 'Contextualised reading and balancing context with close analysis',
  },
  {
    id: 'jp-y11-02',
    yearGroup: 'Y11',
    text: 'Structural Patterns',
    type: 'prediction',
    prompt: 'Map the structural arc of the text so far using a diagram or written plan. Predict how the remaining section will complete or subvert the pattern.',
    scaffoldingSentenceStarters: [
      'The text follows a [cyclical / linear / fragmented] structure because...',
      'The structural turning point occurs when...',
      'I predict the text will conclude by...',
    ],
    challengeExtension: 'Consider how the structural choice reinforces or complicates the text\'s themes. Refer to at least two specific structural decisions.',
    linkedSkill: 'Structural analysis and whole-text reading',
  },
  {
    id: 'jp-y11-03',
    yearGroup: 'Y11',
    text: 'Comparative Connection',
    type: 'connection',
    prompt: 'Write a structured comparative paragraph linking this text to your other examined text. Focus on a shared theme and contrasting methods.',
    scaffoldingSentenceStarters: [
      'Both [Text A] and [Text B] explore the theme of...',
      'Whereas [Text A] presents this through..., [Text B] instead...',
      'This comparison reveals that...',
    ],
    challengeExtension: 'Develop this into a full comparative essay plan covering three distinct thematic or methodological comparisons.',
    linkedSkill: 'Comparative analysis and essay planning',
  },
  {
    id: 'jp-y11-04',
    yearGroup: 'Y11',
    text: 'Socratic Questions',
    type: 'question',
    prompt: 'Write three Socratic questions about this text -- questions that probe underlying assumptions, definitions, or implications. Then attempt to answer one.',
    scaffoldingSentenceStarters: [
      'What do we mean when we say...?',
      'What evidence supports the assumption that...?',
      'What would follow if we accepted that...?',
    ],
    challengeExtension: 'Use one of your Socratic questions as the basis for a structured debate or a discursive journal entry exploring both sides.',
    linkedSkill: 'Higher-order questioning and philosophical inquiry',
  },
  {
    id: 'jp-y11-05',
    yearGroup: 'Y11',
    text: 'Whole-Text Analysis',
    type: 'analysis',
    prompt: 'Analyse how the author uses one key technique consistently across the whole text. Track its development and shifting significance.',
    scaffoldingSentenceStarters: [
      'The author uses [technique] throughout the text to...',
      'In the opening, this technique establishes...',
      'By the end of the text, the technique has evolved to suggest...',
    ],
    challengeExtension: 'Write an essay paragraph for each stage of the text\'s development of this technique, forming the basis of an exam-ready response.',
    linkedSkill: 'Whole-text analysis and tracking development',
  },
  {
    id: 'jp-y11-06',
    yearGroup: 'Y11',
    text: 'Critical Evaluation',
    type: 'evaluation',
    prompt: 'Evaluate the extent to which the text successfully communicates its central message. Consider what a critical reader might argue against your view.',
    scaffoldingSentenceStarters: [
      'The text is largely successful in communicating... because...',
      'A critical reader might argue that...',
      'On balance, I maintain that...',
    ],
    challengeExtension: 'Write a counter-argument paragraph, then a rebuttal paragraph, modelling the dialectical structure of a strong critical essay.',
    linkedSkill: 'Dialectical thinking, evaluation, and argument construction',
  },

  // -------------------------------------------------------------------------
  // Y12
  // -------------------------------------------------------------------------
  {
    id: 'jp-y12-01',
    yearGroup: 'Y12',
    text: 'Autonomous Critical Response',
    type: 'response',
    prompt: 'Write an independent critical response to the text, establishing your own thesis about its most significant feature. Avoid summarising; analyse and argue.',
    scaffoldingSentenceStarters: [
      'The most significant feature of this text is... because...',
      'My central argument is that...',
      'This is evidenced most clearly in...',
    ],
    challengeExtension: 'Situate your thesis within a critical debate: which established critical perspectives support or challenge your reading?',
    linkedSkill: 'Forming and sustaining an independent critical argument',
  },
  {
    id: 'jp-y12-02',
    yearGroup: 'Y12',
    text: 'Genre and Expectation',
    type: 'prediction',
    prompt: 'Analyse how this text uses, subverts, or hybridises genre conventions. What effect does this have on the reader\'s experience and expectations?',
    scaffoldingSentenceStarters: [
      'This text belongs to / draws on the genre of...',
      'The author subverts the convention of... by...',
      'The effect of this generic subversion is...',
    ],
    challengeExtension: 'Research a critical essay on genre theory (e.g., Derrida\'s "The Law of Genre") and apply one key idea to your reading.',
    linkedSkill: 'Genre theory and advanced contextual analysis',
  },
  {
    id: 'jp-y12-03',
    yearGroup: 'Y12',
    text: 'Critical Lens',
    type: 'connection',
    prompt: 'Apply one critical theory (feminist, Marxist, postcolonial, or psychoanalytic) as a lens to reread the text. What does this approach reveal or obscure?',
    scaffoldingSentenceStarters: [
      'Reading through a [theoretical] lens, the text...',
      'This approach foregrounds...',
      'However, this critical lens may obscure...',
    ],
    challengeExtension: 'Write a critical paragraph applying two competing theories to the same passage. What does the tension between them reveal?',
    linkedSkill: 'Applying critical theory and metaliterary thinking',
  },
  {
    id: 'jp-y12-04',
    yearGroup: 'Y12',
    text: 'Interpretive Debate',
    type: 'question',
    prompt: 'Identify a critical debate about this text or its context. Present at least two competing interpretations, then argue for your own position.',
    scaffoldingSentenceStarters: [
      'Critics disagree about whether...',
      '[Critic A] argues that... whereas [Critic B] contends...',
      'My own reading, informed by the text, is that...',
    ],
    challengeExtension: 'Find a published critical essay on this text. Summarise its argument and evaluate how far you agree, with close textual reference.',
    linkedSkill: 'Critical debate, research skills, and independent argument',
  },
  {
    id: 'jp-y12-05',
    yearGroup: 'Y12',
    text: 'Form and Meaning',
    type: 'analysis',
    prompt: 'Analyse how the form of the text (prose, verse, drama, hybrid) is inseparable from its meaning. How would the meaning change if the form were different?',
    scaffoldingSentenceStarters: [
      'The choice of [form] is integral to the meaning because...',
      'If this text were written in [alternative form], the effect would be...',
      'The formal feature of... enacts the meaning of...',
    ],
    challengeExtension: 'Rewrite a short passage in a different form, then write a critical reflection on what is gained and lost in the translation.',
    linkedSkill: 'Form analysis and understanding of form-meaning relationships',
  },
  {
    id: 'jp-y12-06',
    yearGroup: 'Y12',
    text: 'Sustained Evaluation',
    type: 'evaluation',
    prompt: 'Write a sustained critical evaluation of the text\'s enduring significance. Consider its literary merit, cultural impact, and relevance to contemporary readers.',
    scaffoldingSentenceStarters: [
      'The enduring significance of this text lies in...',
      'Its literary merit is demonstrated by...',
      'For contemporary readers, it remains relevant because...',
    ],
    challengeExtension: 'Write a 400-word introduction to a hypothetical critical anthology in which you argue for the inclusion of this text.',
    linkedSkill: 'Evaluative writing, literary canon, and sustained argument',
  },

  // -------------------------------------------------------------------------
  // Y13
  // -------------------------------------------------------------------------
  {
    id: 'jp-y13-01',
    yearGroup: 'Y13',
    text: 'Scholarly Critical Response',
    type: 'response',
    prompt: 'Write a scholarly critical response to the text that situates your reading within a wider critical conversation. Reference at least one secondary source.',
    scaffoldingSentenceStarters: [
      'As [critic] argues, "..." which is demonstrated here when...',
      'While the prevailing critical view holds that..., I contend...',
      'My reading both builds on and departs from...',
    ],
    challengeExtension: 'Draft the opening three paragraphs of a full critical essay, ensuring each paragraph advances a distinct point in your overall argument.',
    linkedSkill: 'Scholarly writing, critical synthesis, and secondary sources',
  },
  {
    id: 'jp-y13-02',
    yearGroup: 'Y13',
    text: 'Narrative and Ideological Prediction',
    type: 'prediction',
    prompt: 'Consider the ideological implications of the text\'s trajectory. What does its resolution (or refusal to resolve) suggest about the author\'s worldview?',
    scaffoldingSentenceStarters: [
      'The ideological trajectory of this text suggests...',
      'The author\'s resolution (or lack of it) implies...',
      'This reflects the broader cultural context of...',
    ],
    challengeExtension: 'Write a critical paragraph that connects the text\'s resolution to a specific historical or ideological context, using secondary sources.',
    linkedSkill: 'Ideological analysis and contextual criticism',
  },
  {
    id: 'jp-y13-03',
    yearGroup: 'Y13',
    text: 'Intertext and Canon',
    type: 'connection',
    prompt: 'How does this text position itself in relation to the literary canon? Does it reinforce, challenge, or expand canonical norms?',
    scaffoldingSentenceStarters: [
      'This text positions itself [within / against] the canon by...',
      'Its relationship to [canonical text] is one of...',
      'By [including / excluding / subverting]..., the author suggests...',
    ],
    challengeExtension: 'Research and respond to a critical debate about the literary canon (e.g., debates around inclusion and diversity). How does this text participate in that debate?',
    linkedSkill: 'Canon formation, literary history, and critical research',
  },
  {
    id: 'jp-y13-04',
    yearGroup: 'Y13',
    text: 'Epistemological Questions',
    type: 'question',
    prompt: 'What does this text suggest about how we know things -- about truth, reality, or human experience? Formulate one epistemological question the text raises.',
    scaffoldingSentenceStarters: [
      'This text raises the question of whether...',
      'The epistemological concern of... is central to...',
      'The text suggests that our knowledge of... is always...',
    ],
    challengeExtension: 'Write a critical reflection linking the epistemological question to a specific theoretical framework (e.g., poststructuralism, phenomenology).',
    linkedSkill: 'Philosophical reading, epistemology, and theoretical application',
  },
  {
    id: 'jp-y13-05',
    yearGroup: 'Y13',
    text: 'Synthesis and Argument',
    type: 'analysis',
    prompt: 'Synthesise close textual analysis, contextual knowledge, and critical theory into a single, coherent analytical argument about the text\'s central preoccupation.',
    scaffoldingSentenceStarters: [
      'The central preoccupation of this text -- [theme] -- is enacted through...',
      'This is contextualised by...',
      'The critical perspective of... enriches this reading by...',
    ],
    challengeExtension: 'Produce a full essay plan with annotated paragraph summaries showing how close reading, context, and theory interact throughout.',
    linkedSkill: 'Synthesis, essay architecture, and advanced analytical writing',
  },
  {
    id: 'jp-y13-06',
    yearGroup: 'Y13',
    text: 'Reflective Critical Evaluation',
    type: 'evaluation',
    prompt: 'Write a reflective critical evaluation of your own reading journey through this text. How has your interpretation evolved and what does that reveal about the nature of reading?',
    scaffoldingSentenceStarters: [
      'My reading of this text has evolved from... to...',
      'What initially seemed to me like... I now understand as...',
      'This shift in my interpretation suggests that reading is...',
    ],
    challengeExtension: 'Write a metacritical reflection (300 words) on what it means to "read well" at A level, drawing on your experience of this text.',
    linkedSkill: 'Metacognition, reflective criticism, and understanding of literary study',
  },
];

// ---------------------------------------------------------------------------
// READING RESPONSE ACTIVITIES -- 15 activities
// ---------------------------------------------------------------------------

export const readingResponseActivities: ReadingResponseActivity[] = [
  {
    id: 'rra-01',
    title: 'Book Spine Poems',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    duration: '20-30 minutes',
    description: 'Students select a stack of books from the classroom library and arrange them so that the titles, read in sequence down the spines, form an original poem. The poem should relate thematically to a text currently being studied.',
    instructions: [
      'Introduce the concept of a found poem using book spines with an example.',
      'Allow students 10 minutes to browse the classroom library and select 5-10 books.',
      'Students arrange their books and refine the sequence until the titles create a meaningful or evocative poem.',
      'Students write up their poem and annotate each title with a brief note on why they chose it.',
      'Share poems with the class and discuss the themes that emerged.',
    ],
    materials: [
      'Classroom library or a curated selection of 40+ books',
      'Journal or blank paper for writing up the poem',
      'Optional: camera or phone to photograph the physical spine arrangement',
    ],
    differentiation: {
      support: 'Provide a smaller, pre-selected bank of 15-20 books with varied title lengths. Offer a sentence starter: "My poem is about... because I chose the title..."',
      core: 'Students select independently from the full library and write a short reflection on the thematic links between their poem and the class text.',
      stretch: 'Students write a second spine poem that contrasts with the first, then write a critical reflection comparing the two and explaining the choices made.',
    },
  },
  {
    id: 'rra-02',
    title: 'Character Hot Seating',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10'],
    duration: '30-45 minutes',
    description: 'One student sits in the "hot seat" and speaks in role as a character from the class text. The rest of the class prepares and asks questions designed to probe the character\'s motivations, feelings, and decisions.',
    instructions: [
      'Explain the activity and model an example with a well-known character.',
      'Give students 10 minutes to prepare questions for the character, drawing on textual evidence.',
      'The student in the hot seat spends 2-3 minutes silently preparing their character.',
      'Conduct the hot seating session, allowing 10-15 minutes for questions and responses.',
      'Debrief: discuss how the student interpreted the character and whether responses were consistent with the text.',
      'Students record three things they learned about the character\'s motivation in their journals.',
    ],
    materials: [
      'A designated "hot seat" chair at the front of the room',
      'Question preparation sheet or journal',
      'Copy of the class text for reference',
    ],
    differentiation: {
      support: 'Provide a list of suggested questions and key quotations about the character. Allow the student in the hot seat to use their copy of the text.',
      core: 'Students formulate their own questions, categorising them as factual, inferential, or evaluative. The student in the hot seat answers without the text.',
      stretch: 'The student in the hot seat must justify each answer with a specific reference to the text. After the activity, they write a reflective paragraph on what the exercise revealed about characterisation.',
    },
  },
  {
    id: 'rra-03',
    title: 'Freeze Frame',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    duration: '25-35 minutes',
    description: 'Small groups create a silent, still tableau (freeze frame) representing a key moment from the text. The rest of the class interprets the image, identifying characters, emotions, and subtext.',
    instructions: [
      'Assign each group a different key moment from the text.',
      'Groups have 10 minutes to discuss and rehearse their freeze frame, considering body language, facial expression, and positioning.',
      'Each group presents their freeze frame to the class.',
      'The audience interprets the scene: who is who, what is happening, and what emotions are present.',
      'Groups reveal which moment they depicted and discuss whether the interpretation matched their intention.',
      'Students write a journal entry describing what their freeze frame communicated and what was difficult to convey without words.',
    ],
    materials: [
      'A list of key moments from the text for group assignment',
      'Sufficient space for groups to perform (desks moved if needed)',
      'Journal for post-activity reflection',
    ],
    differentiation: {
      support: 'Provide a description of the moment and suggested roles for each group member. Offer sentence starters for the reflection.',
      core: 'Groups select their own moment from a provided list and independently decide on interpretation. Reflection focuses on the relationship between visual language and textual meaning.',
      stretch: 'Groups create two freeze frames: one showing the external action and one showing the internal emotional state (thought-tracking). They write a critical comparison of the two.',
    },
  },
  {
    id: 'rra-04',
    title: 'Book Reviews',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    duration: '45-60 minutes',
    description: 'Students write a structured book review of a text they have read independently or as a class, practising evaluation, summary without spoilers, and recommendation.',
    instructions: [
      'Share examples of professional book reviews (e.g., from newspapers or literary magazines).',
      'Discuss the conventions of the review genre: brief summary, analysis of strengths and weaknesses, recommendation.',
      'Students plan their review using a provided scaffold or their own structure.',
      'Students draft their review (approximately 250-400 words).',
      'Peer review: students swap reviews and give structured feedback.',
      'Students publish their reviews in a class display, blog, or journal.',
    ],
    materials: [
      'Examples of published book reviews',
      'Review planning scaffold (optional)',
      'Journal or word processor for drafting',
    ],
    differentiation: {
      support: 'Provide a structured template with headings (Opening Hook, Brief Summary, Strengths, Weaknesses, Recommendation) and sentence starters for each section.',
      core: 'Students write independently using the published examples as models, aiming for a coherent voice and balanced evaluation.',
      stretch: 'Students write a review that engages with the broader genre or literary context of the book, and considers its place within the author\'s body of work.',
    },
  },
  {
    id: 'rra-05',
    title: 'Literary Letters',
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11'],
    duration: '40-50 minutes',
    description: 'Students write a letter to a character, the author, or a future reader of the text. The letter should demonstrate personal engagement, analytical thinking, and a clear sense of purpose and audience.',
    instructions: [
      'Discuss the conventions of formal and informal letter writing.',
      'Model a literary letter to a character from a well-known text, demonstrating how personal response and textual analysis can coexist.',
      'Students choose their recipient (character, author, or future reader) and decide on their purpose.',
      'Students draft their letter, incorporating at least two references to the text.',
      'Students share letters in small groups and discuss how different recipients changed the tone and focus.',
      'Students write a short reflection on what the letter format revealed about their relationship to the text.',
    ],
    materials: [
      'Model literary letter example',
      'Letter-writing conventions guide (optional)',
      'Journal or paper for drafting',
    ],
    differentiation: {
      support: 'Provide a letter template with guided questions for each paragraph (e.g., "In the first paragraph, introduce yourself and explain why you are writing to this character").',
      core: 'Students write independently, balancing personal voice with analytical content. They aim for a consistent register appropriate to their chosen recipient.',
      stretch: 'Students write two letters to the same recipient at different points in the text, showing how their understanding has evolved. They reflect on the change in their critical perspective.',
    },
  },
  {
    id: 'rra-06',
    title: 'Reading Logs',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    duration: 'Ongoing -- 10 minutes per session',
    description: 'Students maintain a structured reading log throughout a unit or term, recording responses, quotations, questions, and reflections as they read. The log builds a cumulative record of their reading journey.',
    instructions: [
      'Set up the reading log at the start of term: introduce the sections (summary, quotation bank, response, question, vocabulary).',
      'After each reading session or chapter, students spend 10 minutes completing their log entry.',
      'Periodically, review logs in class: students share their best entry with a partner.',
      'Use the log as the basis for class discussion, feeding student observations into whole-class analysis.',
      'At the end of the unit, students write a "reading journey" reflection looking back at how their responses evolved.',
    ],
    materials: [
      'Dedicated reading log notebook or journal section',
      'Reading log entry template (optional)',
    ],
    differentiation: {
      support: 'Provide a structured entry template with specific prompts for each section. Initially model completed entries on the board.',
      core: 'Students use a loose framework but develop their own personal style and focus areas within the log.',
      stretch: 'Students incorporate critical vocabulary, begin to identify patterns across entries, and use the log as material for self-directed essay planning.',
    },
  },
  {
    id: 'rra-07',
    title: 'Text-to-Text Connections',
    yearGroups: ['Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    duration: '40-50 minutes',
    description: 'Students systematically explore the connections between two or more texts, identifying thematic, stylistic, contextual, and structural links. This activity prepares students for comparative writing.',
    instructions: [
      'Introduce the three types of connection: text-to-text, text-to-self, text-to-world.',
      'Provide students with two short extracts from different texts on a related theme.',
      'Students read both extracts and annotate connections, using a colour-coded system.',
      'Students complete a double-entry journal: one side for Text A, the other for Text B, noting parallels and contrasts.',
      'Students write a comparative paragraph drawing on their annotations.',
      'Class discussion: what did making connections explicitly reveal about each text?',
    ],
    materials: [
      'Two or more extracts from related texts',
      'Double-entry journal template or blank journal spread',
      'Highlighters or coloured pens',
    ],
    differentiation: {
      support: 'Pre-annotate one extract for students and model the double-entry process. Provide sentence starters for the comparative paragraph.',
      core: 'Students annotate both extracts independently and write one well-developed comparative paragraph.',
      stretch: 'Students identify three distinct types of connection (thematic, linguistic, structural) and write a multi-paragraph comparative analysis, referencing critical or contextual material.',
    },
  },
  {
    id: 'rra-08',
    title: 'Critical Reading Annotations',
    yearGroups: ['Y10', 'Y11', 'Y12', 'Y13'],
    duration: '30-40 minutes',
    description: 'Students learn and practise a systematic method for annotating texts critically, moving beyond comprehension to analysis of language, structure, and context.',
    instructions: [
      'Introduce a colour-coded annotation system (e.g., language choice, structural feature, contextual link, personal response, critical question).',
      'Model the system on a short extract projected on the board.',
      'Students apply the system to their own copy of a chosen extract, working in silence for 15 minutes.',
      'Students share their most interesting annotation with a partner and explain their reasoning.',
      'Class discussion: which annotations led to the most analytical insights?',
      'Students reflect in their journal on how systematic annotation changes their reading practice.',
    ],
    materials: [
      'Printed or projected extract (one per student for annotation)',
      'Annotation key / legend card',
      'Coloured pens or highlighters (at least 4 colours)',
    ],
    differentiation: {
      support: 'Use only three annotation categories initially. Pre-highlight some examples to model the process before students annotate independently.',
      core: 'Students use the full annotation system and write a short paragraph developing their most interesting annotation into a full analytical point.',
      stretch: 'Students create their own annotation system tailored to the demands of their exam specification, and reflect critically on the limitations of annotation as a reading method.',
    },
  },
  {
    id: 'rra-09',
    title: 'Story Mapping',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    duration: '35-45 minutes',
    description: 'Students create a visual map of a narrative, tracking the journey of characters, the development of plot, and the shifting emotional landscape of the story.',
    instructions: [
      'Introduce the concept of story mapping using a simple example (e.g., a fairy tale).',
      'Students draw a large map of the narrative world, marking key locations and plot events.',
      'At each plot point, students annotate the emotional state of the protagonist using a simple scale or icon.',
      'Students add quotations to the map at relevant points.',
      'Students use their map to write a paragraph analysing how the setting reflects or contrasts with the protagonist\'s emotional state.',
    ],
    materials: [
      'A3 paper or large journal pages',
      'Coloured pens',
      'Copy of the class text for reference',
    ],
    differentiation: {
      support: 'Provide a partially completed map with key locations marked. Students add the emotional annotations and two quotations.',
      core: 'Students complete the map independently and write one analytical paragraph using it as a planning tool.',
      stretch: 'Students add a second layer to the map tracking a secondary character, and write a comparative analysis of the two characters\' journeys.',
    },
  },
  {
    id: 'rra-10',
    title: 'Reading Conference Journal',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    duration: '20-30 minutes per conference',
    description: 'Students prepare for and then reflect on a one-to-one or small-group reading conference with their teacher. The journal captures their preparation, the conversation, and their post-conference thinking.',
    instructions: [
      'Before the conference, students write three things they want to discuss about their current reading: a question, a personal response, and an analytical observation.',
      'Students meet with the teacher for a 5-10 minute reading conference.',
      'Immediately after the conference, students write a journal entry: what did they learn, what surprised them, what do they want to explore further?',
      'Students set one reading goal for the next fortnight based on the conference.',
      'At the next conference, students report back on whether they met their goal.',
    ],
    materials: [
      'Reading conference journal section',
      'Reading conference preparation prompt card',
      'Teacher conference notes (optional record sheet)',
    ],
    differentiation: {
      support: 'Provide a structured preparation prompt sheet to guide what students bring to the conference. The teacher leads the conversation with open questions.',
      core: 'Students prepare independently and lead the conversation, with the teacher following their agenda.',
      stretch: 'Students set their own goals, research a critical angle between conferences, and bring a secondary source to discuss alongside the text.',
    },
  },
  {
    id: 'rra-11',
    title: 'The Reading Circle',
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11'],
    duration: '50-60 minutes',
    description: 'Students adopt assigned roles within a reading circle (Discussion Director, Passage Picker, Connector, Illustrator, Vocabulary Enricher) and prepare contributions based on an agreed section of reading.',
    instructions: [
      'Assign roles to each student in a group of 4-5. Explain each role\'s responsibilities.',
      'Students read the assigned section independently and prepare their role contribution (10-15 minutes or as homework).',
      'The reading circle meets and each student shares their contribution in turn (20-25 minutes).',
      'The group discusses the passages, connections, and vocabulary, guided by the Discussion Director.',
      'Each student writes a reflective journal entry: what was most valuable about their role? What would they do differently?',
      'Rotate roles for the next reading circle session.',
    ],
    materials: [
      'Role cards with instructions for each role',
      'Agreed reading section (e.g., a chapter)',
      'Journal for preparation notes and post-circle reflection',
    ],
    differentiation: {
      support: 'Assign the Illustrator or Vocabulary Enricher role first. Provide a sentence-by-sentence guide for role preparation.',
      core: 'Students rotate roles across sessions, developing all five competencies over time.',
      stretch: 'Students critique the reading circle format itself: what does it enable and what does it limit as a reading method? They propose improvements.',
    },
  },
  {
    id: 'rra-12',
    title: 'Vocabulary Collector',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10'],
    duration: '15-20 minutes per session (ongoing)',
    description: 'Students maintain a personal vocabulary collector in their reading journal, recording new, interesting, or powerful words encountered in their reading, with definitions, examples, and a personal sentence.',
    instructions: [
      'Introduce the vocabulary collector format: word, part of speech, definition in own words, original context sentence, personal example sentence.',
      'After each reading session, students add at least two new words to their collector.',
      'Weekly "word auction": each student brings their best word and argues for its value.',
      'Students use words from their collector in their writing tasks throughout the unit.',
      'At the end of the unit, students select their five most valuable words and write a paragraph reflecting on what they reveal about the text\'s language.',
    ],
    materials: [
      'Dedicated vocabulary section in the reading journal',
      'Dictionary (print or digital) for reference',
    ],
    differentiation: {
      support: 'Provide a bank of 15 suggested words from the text to choose from. Students focus on two of the five columns initially.',
      core: 'Students identify their own words independently and complete all five columns.',
      stretch: 'Students research etymology and word families for three of their collected words, and write a short piece demonstrating all five words in a connected context.',
    },
  },
  {
    id: 'rra-13',
    title: 'The Author\'s Chair',
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11', 'Y12'],
    duration: '40-50 minutes',
    description: 'Students write a short creative response to the class text -- a continuation, a prequel, a parallel narrative, or a reimagining -- and then share it from the "author\'s chair", fielding questions from the class.',
    instructions: [
      'Read the class text and discuss the stylistic features students should attempt to replicate or respond to.',
      'Students write their creative response (150-300 words) as homework or in class.',
      'Students take turns sitting in the author\'s chair and reading their response aloud.',
      'The class asks questions about creative decisions: why this choice, what were you trying to achieve?',
      'Students write a craft annotation for their piece, identifying three specific stylistic choices and their intended effect.',
    ],
    materials: [
      'Designated "author\'s chair" at the front of the room',
      'Written creative response (in journal or separate paper)',
      'Craft annotation sheet or journal',
    ],
    differentiation: {
      support: 'Provide a writing frame with guided prompts and sentence starters. Allow students to read from their journal rather than from memory.',
      core: 'Students write independently and annotate their three most significant stylistic choices.',
      stretch: 'Students write a self-critical preface to their piece (100 words) evaluating how successfully they captured the original author\'s voice and what they would change.',
    },
  },
  {
    id: 'rra-14',
    title: 'Critical Conversation Cards',
    yearGroups: ['Y10', 'Y11', 'Y12', 'Y13'],
    duration: '30-40 minutes',
    description: 'Students use a set of discussion prompt cards to conduct a structured critical conversation about a text, practising the oral skills that underpin analytical writing.',
    instructions: [
      'Distribute a set of critical conversation cards (each with an analytical question or a critical prompt).',
      'Students form groups of 3-4 and take turns drawing a card and responding to the prompt.',
      'Other students in the group can build on, challenge, or redirect the response.',
      'Each group must reach a shared "group position" on at least two questions by the end of the activity.',
      'Students record their individual position and the group position in their journal.',
      'Whole-class debrief: where did groups agree and disagree?',
    ],
    materials: [
      'Set of 20-30 critical conversation cards (printed and laminated)',
      'Journal for recording positions',
    ],
    differentiation: {
      support: 'Provide a simplified set of cards with personal response prompts before introducing analytical prompts. Students are not required to challenge; building on is sufficient.',
      core: 'Students use the full card set and practise the academic language of agreement, disagreement, and qualification.',
      stretch: 'Students design their own additional cards based on the critical debates they have researched, incorporating references to secondary sources.',
    },
  },
  {
    id: 'rra-15',
    title: 'Reading Portfolio Curation',
    yearGroups: ['Y11', 'Y12', 'Y13'],
    duration: '60-90 minutes (end-of-unit project)',
    description: 'At the end of a unit or term, students curate a reading portfolio from their journal, selecting and presenting their best entries, annotating them with metacognitive reflections on their development as readers and critics.',
    instructions: [
      'Explain the purpose of the portfolio: it is a curated showcase of critical growth, not a complete record.',
      'Students review all journal entries from the unit and select 5-7 that best represent their development.',
      'For each entry, students write a brief curatorial note (50-80 words) explaining why they selected it and what it shows about their reading.',
      'Students write a 200-word introductory statement for the portfolio articulating their identity as a critical reader.',
      'Portfolios are shared with the teacher and, optionally, with peers for celebration and feedback.',
    ],
    materials: [
      'Complete reading journal from the unit',
      'Portfolio organisation sheet or dedicated section',
      'Optional: word processor for final presentation',
    ],
    differentiation: {
      support: 'Provide a curatorial note template with guided questions. Teacher pre-selects a shortlist of 8-10 entries for the student to choose from.',
      core: 'Students review and select independently, writing curatorial notes and an introductory statement.',
      stretch: 'Students write a critical essay of 400-500 words reflecting on how their reading practice has changed during the unit, using specific entries as evidence. They evaluate what aspects of their critical reading still need development.',
    },
  },
];
