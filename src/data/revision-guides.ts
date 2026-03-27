export interface RevisionGuide {
  id: string;
  title: string;
  board: string;
  subject: string;
  sections: RevisionSection[];
}

export interface RevisionSection {
  id: string;
  title: string;
  keyPoints: string[];
  examTips: string[];
  practiceQuestions: { question: string; marks: number; guidanceNotes: string; }[];
  mnemonics?: string[];
  commonMistakes: string[];
}

export const revisionGuides: RevisionGuide[] = [
  {
    id: "aqa-lang-p1",
    title: "AQA Language Paper 1 Complete Revision Guide",
    board: "AQA",
    subject: "GCSE English Language",
    sections: [
      {
        id: "aqa-p1-q1",
        title: "Question 1: Reading and Selecting Information (4 marks)",
        keyPoints: [
          "You need to locate four key pieces of information from the source text",
          "Information must be in your own words, not copied directly",
          "Answers are awarded 1 mark each (4 marks total)",
          "Look for explicit, clear statements—not inference",
          "Skim the text quickly to identify the correct paragraphs",
          "Use the question as a guide to what information to find"
        ],
        examTips: [
          "Spend no more than 3-4 minutes on this question—it's worth only 4 marks",
          "Underline key phrases in the question to guide your search",
          "Write in point form if needed; full sentences aren't required",
          "Check that each piece of information is different and distinct",
          "Don't include opinions or your own analysis—stick to facts"
        ],
        practiceQuestions: [
          {
            question: "From lines 1-20, select four pieces of information about the location.",
            marks: 4,
            guidanceNotes: "Scan the text for references to place, geography, landscape features. Extract factual details without copying word-for-word. Consider climate, terrain, structures, and surroundings."
          },
          {
            question: "Identify four key details about the character's background from the passage.",
            marks: 4,
            guidanceNotes: "Look for biographical information: where they're from, their history, family, experiences. Paraphrase rather than quote. Each detail should be separate and relevant."
          }
        ],
        commonMistakes: [
          "Copying directly from the text instead of paraphrasing—loses marks",
          "Including information that requires inference or interpretation",
          "Selecting overlapping or related points instead of distinct pieces of information",
          "Writing in full sentences when point form would be quicker",
          "Including information from outside the specified line range"
        ]
      },
      {
        id: "aqa-p1-q2",
        title: "Question 2: Language Analysis (8 marks)",
        keyPoints: [
          "Identify three language techniques: simile, metaphor, personification, alliteration, assonance, plosives, sibilance, hyperbole, oxymoron, etc.",
          "Explain the effect of each technique on the reader",
          "Consider context: what is the writer trying to achieve?",
          "Link language choice to writer's purpose and audience",
          "Use PEE structure: Point, Evidence, Explanation",
          "Write approximately 2-3 sentences per technique for full marks"
        ],
        examTips: [
          "Choose techniques that have a clear, significant effect—avoid weak choices",
          "Quote short, precise phrases (2-5 words) rather than full sentences",
          "Use terminology accurately: say 'metaphor' not 'like a metaphor'",
          "Explain how the technique works before explaining its effect",
          "Consider sound effects, visual imagery, and emotional impact",
          "Link to the writer's intent: 'This suggests...' 'This conveys...' 'This emphasizes...'"
        ],
        practiceQuestions: [
          {
            question: "Analyse the language used in lines 15-25. Focus on how the writer creates mood.",
            marks: 8,
            guidanceNotes: "Identify 3-4 language techniques. For each, quote, name the technique, explain how it works, then explain its effect on the reader. Link to atmosphere and emotion. Aim for depth over quantity."
          },
          {
            question: "How does the writer's language in the final paragraph create impact?",
            marks: 8,
            guidanceNotes: "Look for techniques like short sentences, repetition, word choice, imagery. Explain why these choices matter. Consider punch, emphasis, clarity, emotional response."
          }
        ],
        mnemonics: [
          "SMILE = Simile, Metaphor, Imagery, Language, Emotive",
          "PEE = Point, Evidence, Explanation"
        ],
        commonMistakes: [
          "Naming techniques without explaining their effect",
          "Explaining the technique without linking it to the writer's purpose",
          "Choosing weak or unclear techniques that are hard to analyse",
          "Writing too much—remember this is only worth 8 marks",
          "Focusing on meaning rather than language and its effects",
          "Using vague terminology: 'this is good writing' instead of specific technique names"
        ]
      },
      {
        id: "aqa-p1-q3",
        title: "Question 3: Tone, Form, Structure (8 marks)",
        keyPoints: [
          "Tone: the writer's attitude toward the subject and reader (serious, sarcastic, bitter, humorous, etc.)",
          "Form: genre and text type (article, speech, memoir, advertisement, blog, etc.)",
          "Structure: how the text is organized and sequenced (opening hook, build-up, climax, resolution, repetition, etc.)",
          "How these elements work together to create effect",
          "The relationship between structure and purpose",
          "Paragraphing, sentence length variation, and their impact"
        ],
        examTips: [
          "Make a quick plan before writing: identify 2-3 structural features",
          "Look at opening and closing: often significant",
          "Comment on sentence length and variety",
          "Consider pace and rhythm: short sentences = urgency, long sentences = reflection",
          "Link structural choices to the writer's purpose and effect on the reader",
          "Quote brief phrases to support structural observations"
        ],
        practiceQuestions: [
          {
            question: "How does the writer's use of structure create tension?",
            marks: 8,
            guidanceNotes: "Look at: paragraph length, sentence length, pacing, use of short/long sentences, positioning of key information. Explain how arrangement affects the reader's response."
          },
          {
            question: "Analyse the tone and form of this extract. How do they combine to engage the reader?",
            marks: 8,
            guidanceNotes: "Identify the tone (attitude, style), the form (text type), and how they work together. Consider whether formal/informal, serious/playful, personal/detached. Link to audience and purpose."
          }
        ],
        commonMistakes: [
          "Confusing tone with subject matter",
          "Describing structure without explaining its effect",
          "Not commenting on sentence or paragraph length",
          "Ignoring the opening and closing paragraphs",
          "Treating tone, form, and structure as separate issues rather than interconnected",
          "Writing about what happens rather than how it's presented"
        ]
      },
      {
        id: "aqa-p1-q4",
        title: "Question 4: Evaluation and Critical Response (20 marks)",
        keyPoints: [
          "Evaluate the writer's perspective, argument, or viewpoint",
          "Judge how effectively the writer has conveyed their ideas",
          "Consider use of evidence: are examples relevant and convincing?",
          "Assess writer's techniques and their success",
          "Develop your own interpretation with evidence to support it",
          "Consider alternative viewpoints or counter-arguments",
          "Integration of language analysis with evaluation"
        ],
        examTips: [
          "Write 3-4 well-developed paragraphs (aim for 350-400 words)",
          "Use detailed evidence from the text—quote and analyse",
          "Use phrases: 'I find this convincing because...', 'The writer successfully...', 'However, one might argue...'",
          "Make judgements clear: 'effectively', 'powerfully', 'unconvincingly', 'poorly'",
          "Combine language analysis with evaluation—don't separate them",
          "Address both the content (what is said) and the technique (how it's said)"
        ],
        practiceQuestions: [
          {
            question: "How successfully does the writer convey their perspective on childhood memories?",
            marks: 20,
            guidanceNotes: "Make a clear judgement. Use evidence to show how effectively techniques work. Consider: is the writing persuasive? Are the examples powerful? Does the emotional impact work? Support every point with quotation and analysis."
          },
          {
            question: "To what extent do you find this account of the journey convincing?",
            marks: 20,
            guidanceNotes: "Evaluate both the writer's ideas and their methods. Consider: credibility, detail, language choice, structure. Include what works well and what might be less convincing. Develop explanation fully with evidence."
          }
        ],
        mnemonics: [
          "UVWXYZ = Understand, Value, Weigh, eXamine, Your judgement, Zone in on evidence"
        ],
        commonMistakes: [
          "Simply summarizing the text instead of evaluating it",
          "Making judgements without supporting evidence",
          "Not integrating language analysis into evaluation",
          "Being too lenient or too harsh without justification",
          "Ignoring alternative perspectives",
          "Keeping evaluation separate from textual detail"
        ]
      },
      {
        id: "aqa-p1-timing",
        title: "Paper 1 Timing and Strategy",
        keyPoints: [
          "Paper 1 is 1 hour 45 minutes (105 minutes total) for 64 marks",
          "Average: 1.64 minutes per mark",
          "Q1 (4 marks): 4-5 minutes",
          "Q2 (8 marks): 12-15 minutes",
          "Q3 (8 marks): 12-15 minutes",
          "Q4 (20 marks): 30-35 minutes",
          "Reading time: 5-10 minutes at the start"
        ],
        examTips: [
          "Spend a few minutes reading and annotating the text thoroughly before answering",
          "Don't rush Q1—accuracy matters",
          "Allocate more time to Q4 as it carries the most marks",
          "Leave 5 minutes at the end to check Q4 for spelling and sentence boundaries",
          "If you get stuck on a question, move on and return if time permits",
          "Watch the clock—don't run overtime on any one question"
        ],
        practiceQuestions: [
          {
            question: "Complete a full Paper 1 mock in 1 hour 45 minutes. How effectively did you manage time?",
            marks: 0,
            guidanceNotes: "Time yourself strictly. Note which questions you spent the most time on. Did you finish Q4? Could you have managed time better? Aim to leave 5 minutes for proofreading."
          },
          {
            question: "Which question type do you find most time-consuming? How can you streamline your approach?",
            marks: 0,
            guidanceNotes: "If Q2 (language analysis) takes too long, practice being more concise. If Q4 (evaluation) feels rushed, prepare ideas before writing. Identify your weakness and target it."
          }
        ],
        commonMistakes: [
          "Spending too long on Q1 and Q2, leaving insufficient time for Q4",
          "Reading the text too slowly without annotation",
          "Writing rough drafts before final answers—wasting time",
          "Not finishing Q4 due to poor time management",
          "Overthinking Q1—it's straightforward selection"
        ]
      },
      {
        id: "aqa-p1-summary",
        title: "Paper 1 Integration and Skills",
        keyPoints: [
          "Reading comprehension: understanding explicit and implicit information",
          "Language analysis: identifying techniques and explaining effects",
          "Structural awareness: understanding how texts are organized",
          "Evaluation: forming and supporting judgements about effectiveness",
          "Synthesis: combining multiple skills in longer responses",
          "Accurate terminology and precise quotation throughout"
        ],
        examTips: [
          "Practice all question types regularly—familiarity builds confidence",
          "Develop a bank of language technique terms with examples",
          "Read widely: fiction, non-fiction, journalism, memoir, speeches",
          "Annotate texts as you read: mark techniques, tone shifts, structural points",
          "Write timed practice answers and mark against the mark scheme",
          "Peer assess or ask a teacher to give feedback on Q4 answers"
        ],
        practiceQuestions: [
          {
            question: "Take a complete past paper and do Q1-Q4 under timed conditions.",
            marks: 64,
            guidanceNotes: "This is your best preparation. Complete the full paper in one sitting. Mark strictly against the official mark scheme. Identify patterns in your strengths and weaknesses."
          },
          {
            question: "Compare your analysis approach on two different texts. Which techniques are most common?",
            marks: 0,
            guidanceNotes: "Build awareness of patterns across different texts. Notice which techniques appear repeatedly and which are rare. This helps you spot them faster in the exam."
          }
        ],
        commonMistakes: [
          "Treating each question type in isolation rather than as a unified reading task",
          "Memorizing pre-written essays instead of developing flexible thinking",
          "Not checking your work before submitting",
          "Ignoring feedback from previous attempts"
        ]
      }
    ]
  },
  {
    id: "aqa-lang-p2",
    title: "AQA Language Paper 2 Complete Revision Guide",
    board: "AQA",
    subject: "GCSE English Language",
    sections: [
      {
        id: "aqa-p2-q1",
        title: "Question 1: Summary Writing (8 marks)",
        keyPoints: [
          "Identify the key points from two source texts",
          "Compare the viewpoints presented in each text",
          "Write a summary of similarities and differences",
          "Use your own words—not direct copying",
          "Include only relevant information (about 200 words)",
          "Structure clearly: similarities first, then differences, or vice versa"
        ],
        examTips: [
          "Read both texts carefully, annotating similarities and differences",
          "Don't spend time on copied sentences—rephrase",
          "Use signposting language: 'Similarly', 'Both', 'In contrast', 'However'",
          "Keep summary concise—avoid repetition",
          "Check you've addressed both similarities AND differences",
          "Aim for balanced coverage of both texts"
        ],
        practiceQuestions: [
          {
            question: "Compare how Writer A and Writer B present their views on social media.",
            marks: 8,
            guidanceNotes: "Identify 3-4 similarities and 3-4 differences. Write about 200 words. Use own words throughout. Structure clearly. Link to the specific viewpoints in each text."
          },
          {
            question: "Summarize the similar and different attitudes toward technology shown in both extracts.",
            marks: 8,
            guidanceNotes: "Find explicit and implicit viewpoints. Explain what each writer believes and where they agree/disagree. Keep it concise and organized."
          }
        ],
        commonMistakes: [
          "Copying sentences directly from the texts",
          "Including only similarities or only differences",
          "Writing a summary of one text then the other, rather than comparing",
          "Being too long-winded—aim for concision",
          "Missing implicit attitudes—look beyond the obvious",
          "Not clearly signposting similarities and differences"
        ]
      },
      {
        id: "aqa-p2-q2",
        title: "Question 2: Language Analysis (12 marks)",
        keyPoints: [
          "Analyse how the writer uses language in one text",
          "Focus on a specific section or purpose",
          "Identify 3-4 language techniques with clear effects",
          "Explain the writer's purpose and how language serves it",
          "Use precise terminology",
          "Link analysis to the writer's intent"
        ],
        examTips: [
          "Choose techniques that are clearly relevant to the question focus",
          "Quote brief, precise phrases",
          "Explain how each technique works before explaining its effect",
          "Address the writer's purpose explicitly",
          "Write 3-4 well-developed paragraphs",
          "Use connectives to link your points: 'This', 'Furthermore', 'In addition'"
        ],
        practiceQuestions: [
          {
            question: "How does Writer A use language to persuade the reader?",
            marks: 12,
            guidanceNotes: "Identify persuasive techniques: rhetorical questions, emotive language, facts, examples, direct address, superlatives. Explain how each persuades. Address audience and purpose."
          },
          {
            question: "Analyse the language used to create atmosphere in the opening paragraph.",
            marks: 12,
            guidanceNotes: "Look at: descriptive language, imagery, sound devices, word choice. Explain how each creates mood. Consider the effect on the reader."
          }
        ],
        commonMistakes: [
          "Analyzing language without linking to purpose",
          "Choosing weak techniques that are hard to discuss",
          "Writing superficially—not developing explanations",
          "Confusing effect on reader with literal meaning",
          "Not using accurate terminology",
          "Including too many techniques without depth"
        ]
      },
      {
        id: "aqa-p2-q3",
        title: "Question 3: Comparison Analysis (12 marks)",
        keyPoints: [
          "Compare how two writers use language or structure",
          "Address both similarities and differences",
          "Use subject terminology precisely",
          "Develop explanations with evidence",
          "Link to writer's purpose and effect",
          "Structure around comparison points, not separate texts"
        ],
        examTips: [
          "Use comparative language: 'Both', 'Similarly', 'Whereas', 'In contrast', 'However'",
          "Avoid describing one text then the other—weave comparison throughout",
          "Make equal references to both texts",
          "Choose 3-4 significant comparison points",
          "Explain why the differences/similarities matter",
          "Link comparisons to effects on the reader"
        ],
        practiceQuestions: [
          {
            question: "Compare how the two writers structure their texts to affect the reader.",
            marks: 12,
            guidanceNotes: "Look at: openings, paragraph length, pacing, use of short/long sentences, climactic moments. Explain how each writer's choices work. Show similarities and differences in approach."
          },
          {
            question: "Compare the tone of Writer A and Writer B. How does tone affect each text's impact?",
            marks: 12,
            guidanceNotes: "Identify each writer's tone (attitude, voice). Show where they're similar and different. Explain how tone shapes the reader's response to ideas."
          }
        ],
        commonMistakes: [
          "Treating texts separately instead of comparing them",
          "Only discussing differences, ignoring similarities, or vice versa",
          "Not using comparative language or connectives",
          "Imbalanced coverage (much more on one text)",
          "Comparison without explanation of why it matters",
          "Missing the connection between comparison points and effect on reader"
        ]
      },
      {
        id: "aqa-p2-q4",
        title: "Question 4: Writing to Persuade or Explain (24 marks)",
        keyPoints: [
          "Write clearly for your audience and purpose",
          "Persuade: use rhetorical devices, emotive language, logical arguments",
          "Explain: use clear structure, examples, accessible language",
          "Organize into paragraphs with clear topic ideas",
          "Use varied sentence structures",
          "Check spelling and punctuation carefully",
          "Aim for 400-450 words"
        ],
        examTips: [
          "Plan before writing: list key points and structure",
          "Write a compelling opening to engage the reader",
          "Use rhetorical questions, facts, examples, or expert opinion",
          "Write in paragraphs: each with a main idea",
          "Vary sentence length: short for impact, longer for development",
          "Use active voice generally; passive for formality if appropriate",
          "Leave time to proofread for errors"
        ],
        practiceQuestions: [
          {
            question: "Write to persuade your school that the uniform policy should be relaxed.",
            marks: 24,
            guidanceNotes: "Plan 3-4 main arguments. Use rhetorical devices. Address counterarguments. Write clearly and persuasively. Aim for 400+ words. Check all spelling and punctuation."
          },
          {
            question: "Write to explain how technology is changing the way we learn.",
            marks: 24,
            guidanceNotes: "Organize into clear sections. Provide examples and evidence. Use clear, accessible language. Link ideas with connectives. Maintain consistent register."
          }
        ],
        mnemonics: [
          "ACDC = Address audience, Create interest, Develop argument, Conclude strongly"
        ],
        commonMistakes: [
          "Unclear or rambling writing without clear structure",
          "Forgetting to address the specific audience",
          "Spelling and punctuation errors that undermine credibility",
          "All short sentences or all long sentences—lack of variety",
          "Not allocating enough time to planning and proofreading",
          "Writing too little (under 300 words loses marks)"
        ]
      },
      {
        id: "aqa-p2-q5",
        title: "Question 5: Writing to Describe or Narrate (40 marks)",
        keyPoints: [
          "Create engaging narrative or descriptive writing",
          "Develop character, setting, or story effectively",
          "Use vivid imagery and specific detail",
          "Control pace and structure",
          "Vary vocabulary and sentence structure",
          "Maintain consistent tense (usually past for narrative)",
          "Aim for 500+ words to maximize marks"
        ],
        examTips: [
          "Plan your story or description: beginning, middle, end or key points",
          "Show, don't tell: use specific detail rather than telling the reader what to feel",
          "Use varied sentences: short for tension/impact, longer for description",
          "Develop dialogue if appropriate—it brings narratives to life",
          "Use sensory detail: sights, sounds, smells, textures, tastes",
          "Save time to proofread—avoid careless errors",
          "Aim for 500-600 words for full marks"
        ],
        practiceQuestions: [
          {
            question: "Write a narrative describing a moment when something unexpected happened.",
            marks: 40,
            guidanceNotes: "Create a clear beginning, middle, and end. Develop character and emotion. Use vivid detail. Vary sentence structure. Aim for 500+ words. Proofread carefully."
          },
          {
            question: "Describe a place that is important to you, bringing it to life for the reader.",
            marks: 40,
            guidanceNotes: "Use sensory detail: what do readers see, hear, smell, feel? Organize spatially or thematically. Vary sentence length. Include specific, concrete details. Maintain engaging tone throughout."
          }
        ],
        mnemonics: [
          "STEP = Show, Tension, Emotion, Pacing (for narrative)",
          "SEEL = Sight, Emotion, Experience, Language (for description)"
        ],
        commonMistakes: [
          "Rushing the writing—planning pays off in the exam",
          "Using generic, vague descriptions instead of specific details",
          "Telling the reader what to feel instead of showing through detail",
          "Inconsistent tense (switching between past and present)",
          "All similar sentence lengths—lack of rhythm and impact",
          "Not allocating enough time—writing too little for 40 marks",
          "Careless spelling and punctuation that distract from content"
        ]
      },
      {
        id: "aqa-p2-timing",
        title: "Paper 2 Timing and Strategy",
        keyPoints: [
          "Paper 2 is 1 hour 45 minutes (105 minutes) for 80 marks",
          "Average: 1.3 minutes per mark",
          "Q1 (8 marks): 12-15 minutes",
          "Q2 (12 marks): 15-18 minutes",
          "Q3 (12 marks): 15-18 minutes",
          "Q4 (24 marks): 20-25 minutes",
          "Q5 (40 marks): 35-40 minutes"
        ],
        examTips: [
          "Read all texts quickly (2-3 minutes) before starting Q1",
          "Spend most time on Q5—it's worth 40 marks",
          "Don't panic if your story/description feels rushed; content matters most",
          "Allocate time proportionally: more time = more marks",
          "Leave 5 minutes to proofread your writing questions (Q4 and Q5)",
          "If you run out of time on Q5, stop mid-piece—don't leave it blank"
        ],
        practiceQuestions: [
          {
            question: "Complete a full Paper 2 mock in 1 hour 45 minutes. Check your time allocation.",
            marks: 0,
            guidanceNotes: "Track time spent on each question. Did you allocate roughly 35+ minutes to Q5? Could you improve time management? Aim to finish with 5 minutes to spare."
          },
          {
            question: "Which writing question (Q4 or Q5) do you find more challenging for time? Why?",
            marks: 0,
            guidanceNotes: "If Q5 is rushed, practice speed writing. If Q4 is rushed, work on concise planning. Identify your weakness and practice it separately."
          }
        ],
        commonMistakes: [
          "Spending too long on Q1-Q3, leaving insufficient time for Q5",
          "Not planning writing answers—leading to rambling or disorganized text",
          "Rushing narrative/descriptive writing due to time pressure",
          "Running out of time and having to finish hastily or incompletely"
        ]
      }
    ]
  }
];

  {
    id: "aqa-lit-p1",
    title: "AQA Literature Paper 1 Revision Guide",
    board: "AQA",
    subject: "GCSE English Literature",
    sections: [
      {
        id: "aqa-lit-p1-shakespeare",
        title: "Shakespeare: Character and Context",
        keyPoints: [
          "Know key characters: motivations, development, relationships",
          "Understand historical context: Elizabethan/Jacobean society, gender, power",
          "Identify main themes: ambition, love, betrayal, power, fate, etc.",
          "Understand dramatic techniques: soliloquies, dramatic irony, tragic flaws",
          "Know key quotations for each character and theme",
          "Understand the genre: tragedy, comedy, or history and its conventions"
        ],
        examTips: [
          "Memorize 5-6 key quotations for each major character",
          "Understand the context when the play was written and first performed",
          "Know how to relate character actions to broader themes",
          "Practice embedding quotations smoothly into analysis",
          "Understand dramatic purpose: why does Shakespeare include this scene?",
          "Link characterization to themes and historical context"
        ],
        practiceQuestions: [
          {
            question: "How does Shakespeare present the relationship between Macbeth and Lady Macbeth?",
            marks: 15,
            guidanceNotes: "Discuss: how they influence each other, how their relationship changes, key moments that show development. Use 3-4 quotations. Link to themes of ambition and power."
          },
          {
            question: "To what extent is Othello a victim of Iago's manipulation?",
            marks: 15,
            guidanceNotes: "Analyse Othello's agency vs. Iago's influence. Use quotations to show Iago's methods and Othello's weaknesses. Consider context: race, prejudice, military hierarchy."
          }
        ],
        mnemonics: [
          "CREED = Character, Relationship, Events, Effect, Development"
        ],
        commonMistakes: [
          "Retelling plot instead of analysing character and theme",
          "Using quotations without explanation",
          "Ignoring historical and social context",
          "Treating characters as real people rather than dramatic constructs",
          "Missing irony and dramatic purpose",
          "Not linking character analysis to broader themes"
        ]
      },
      {
        id: "aqa-lit-p1-19thcentury",
        title: "19th Century Novel: Setting, Society, Theme",
        keyPoints: [
          "Understand the historical setting: industrial revolution, social hierarchy, gender roles",
          "Identify major characters and their development across the novel",
          "Recognize major themes: class, morality, love, social change, injustice",
          "Understand the narrative structure: first-person, third-person, epistolary?",
          "Know key quotations that reveal character or theme",
          "Understand social attitudes of the time and how the novel critiques them"
        ],
        examTips: [
          "Read the novel at least twice: once for plot, once for analysis",
          "Annotate as you read: mark key themes, character moments, social commentary",
          "Create a character web showing relationships and changes",
          "Identify key chapters that encapsulate major themes",
          "Practice embedding quotations that reveal character or social critique",
          "Link characters' struggles to broader social issues of the 19th century"
        ],
        practiceQuestions: [
          {
            question: "How does the author use Pip's development to explore social class and ambition?",
            marks: 15,
            guidanceNotes: "Analyse key moments: his ambitions, encounters with different classes, final understanding. Use 3-4 quotations. Link to Victorian attitudes about class and social mobility."
          },
          {
            question: "To what extent is Jane Eyre a critique of Victorian society's treatment of women?",
            marks: 15,
            guidanceNotes: "Discuss Jane's agency, independence, limitations. Consider marriage, work, morality. Use quotations showing her resistance or acceptance. Link to historical context."
          }
        ],
        commonMistakes: [
          "Summarizing plot rather than analysing theme",
          "Not engaging with historical and social context",
          "Ignoring the perspective from which the novel is told",
          "Using quotations without explanation",
          "Missing subtlety in characterization",
          "Treating Victorian attitudes as universal rather than historically specific"
        ]
      },
      {
        id: "aqa-lit-p1-comparison",
        title: "Comparing Shakespeare and 19th Century Novel",
        keyPoints: [
          "Identify similar themes across texts: ambition, morality, social hierarchy, love",
          "Compare how different genres explore these themes",
          "Analyse how historical period shapes presentation",
          "Link character development and motivation across texts",
          "Use comparative language: both, whereas, similarly, in contrast",
          "Integrate quotations from both texts in same paragraph"
        ],
        examTips: [
          "Plan comparison carefully: identify 3-4 key comparison points",
          "Don't alternate between texts—weave comparison throughout",
          "Use comparative phrases: 'Both texts explore...', 'While Shakespeare...', 'In contrast...'",
          "Quote from both texts in most paragraphs",
          "Explain why comparison matters: what does it reveal about each text?",
          "Consider how genre and period shape different approaches to similar themes"
        ],
        practiceQuestions: [
          {
            question: "Compare how ambition is presented in Macbeth and Great Expectations.",
            marks: 15,
            guidanceNotes: "Analyse the causes, consequences, and moral dimensions of ambition in each text. Use 2-3 quotations from each. Discuss: How does genre (drama vs. novel) shape presentation?"
          },
          {
            question: "Compare how the two texts present the struggle between social expectation and personal desire.",
            marks: 15,
            guidanceNotes: "Identify specific characters facing this conflict. Analyse their responses. Link to historical context (Elizabethan theatre vs. Victorian society). Show similarities and differences."
          }
        ],
        commonMistakes: [
          "Discussing texts separately instead of comparing them",
          "Imbalanced coverage (much more on one text)",
          "Not using comparative language",
          "Comparison without explanation of significance",
          "Missing historical and genre differences",
          "Generic comparisons ('both have characters')"
        ]
      },
      {
        id: "aqa-lit-p1-language",
        title: "Language Analysis: Shakespeare and Prose",
        keyPoints: [
          "Shakespeare: verse/prose distinction, blank verse, rhyming couplets, dramatic language",
          "19th century: narrative technique, dialogue, description, social comment through language",
          "Analyse how language reveals character: what characters say and how they say it",
          "Identify techniques: metaphor, imagery, symbolism, irony, repetition",
          "Understand how language creates tone and mood",
          "Link language analysis to character and theme"
        ],
        examTips: [
          "For Shakespeare: note whether characters speak in verse or prose—what does this suggest?",
          "Look for patterns: does a character use particular metaphors or imagery?",
          "Analyse formal vs. informal language and what it reveals",
          "Quote brief phrases (2-5 words) rather than full lines",
          "Explain technique before explaining effect",
          "Link language choices to character motivation and dramatic purpose"
        ],
        practiceQuestions: [
          {
            question: "Analyse how Shakespeare uses language to reveal Macbeth's state of mind.",
            marks: 10,
            guidanceNotes: "Look at: imagery (blood, darkness), syntax (fragmented speech), repetition, tone. Choose 2-3 quotations. Explain how language shows confusion, ambition, guilt."
          },
          {
            question: "How does the author use description to establish setting and mood in Chapter 5?",
            marks: 10,
            guidanceNotes: "Identify descriptive techniques: imagery, word choice, sensory detail. Explain effect. Link to character's perspective or emotional state if told from their viewpoint."
          }
        ],
        commonMistakes: [
          "Naming techniques without explaining effect",
          "Quoting full lines or speeches instead of brief phrases",
          "Not linking language analysis to character or theme",
          "For Shakespeare: ignoring verse/prose distinction",
          "Missing patterns in a character's language use",
          "Generic explanations ('this makes it dramatic')"
        ]
      },
      {
        id: "aqa-lit-p1-structure",
        title: "Structure and Narrative: How Texts Unfold",
        keyPoints: [
          "Structure in drama: acts, scenes, turning points, climax, resolution",
          "Structure in prose: narrative perspective, chapter divisions, time shifts, pacing",
          "How opening and closing frame the work",
          "Parallel scenes or moments that create patterns",
          "Climactic scenes and their dramatic significance",
          "How structure shapes the reader's or audience's response"
        ],
        examTips: [
          "Map the plot: identify key turning points",
          "Note significant structural choices: flashbacks, time jumps, changes in narrator",
          "Look for patterns: repeated scenes, parallel characters, cyclical structure",
          "Consider: why does the writer/dramatist structure it this way?",
          "Examine opening and closing for significance",
          "Link structure to theme: how does it reinforce main ideas?"
        ],
        practiceQuestions: [
          {
            question: "How does Shakespeare structure Macbeth to show the protagonist's fall from power?",
            marks: 10,
            guidanceNotes: "Analyse key scenes showing: ambition (Act 1), moral corruption (Act 3), paranoia (Act 4), defeat (Act 5). Discuss pacing and dramatic tension. Link structure to tragedy."
          },
          {
            question: "How does the narrative structure of the novel affect your understanding of Pip's development?",
            marks: 10,
            guidanceNotes: "Consider: first-person retrospective narration, flashbacks, Pip's changing perspective. How does this narrative choice reveal his growth? What would change with third-person narration?"
          }
        ],
        commonMistakes: [
          "Confusing structure with plot (summarizing events rather than analysing structure)",
          "Missing significance of structural choices",
          "Not explaining why structure matters",
          "Ignoring opening and closing",
          "Missing parallel scenes or patterns",
          "Treating structure as neutral rather than as a deliberate choice"
        ]
      },
      {
        id: "aqa-lit-p1-synthesis",
        title: "Synthesis: Bringing It All Together",
        keyPoints: [
          "Integrate character, theme, language, and structure in analysis",
          "Write fluently without separating different types of analysis",
          "Use quotations as evidence for claims",
          "Link personal interpretation to textual support",
          "Consider multiple valid interpretations",
          "Relate literature to historical and social contexts"
        ],
        examTips: [
          "Write practice essays under timed conditions",
          "Plan essays before writing: identify main point, supporting examples",
          "Aim for 3-4 substantial paragraphs (400-500 words)",
          "Each paragraph should have: point, evidence, analysis, connection to theme",
          "Use subject terminology accurately throughout",
          "Read your work aloud to check for clarity and flow"
        ],
        practiceQuestions: [
          {
            question: "To what extent do you agree that Macbeth is a tragedy about the corrupting nature of ambition?",
            marks: 30,
            guidanceNotes: "Make a clear argument. Support with 4-5 quotations from the play. Analyse: character development, language, structure, context. Address alternative interpretations. Write 400+ words."
          },
          {
            question: "Analyse how the author presents the theme of class in the novel. What does the text suggest about social mobility?",
            marks: 30,
            guidanceNotes: "Discuss 3-4 characters or situations revealing class attitudes. Use quotations. Link to Victorian context. Consider narrative perspective. Develop your interpretation with evidence."
          }
        ],
        commonMistakes: [
          "Disconnected analysis—keeping language, character, and structure separate",
          "Unsupported claims without evidence",
          "Over-reliance on plot summary",
          "Not developing explanations fully",
          "Ignoring context or treating it superficially",
          "Essays that are too short or too brief on key points"
        ]
      }
    ]
  }
];

  {
    id: "aqa-lit-p2",
    title: "AQA Literature Paper 2 Revision Guide",
    board: "AQA",
    subject: "GCSE English Literature",
    sections: [
      {
        id: "aqa-lit-p2-modern",
        title: "Modern Texts: Character and Society",
        keyPoints: [
          "Modern text: understand contemporary setting and social issues",
          "Identify major characters and their psychological development",
          "Recognize themes: identity, family, society, morality, change",
          "Understand narrative technique: first/third person, perspective shifts",
          "Note how the text reflects contemporary concerns",
          "Know key quotations revealing character or social critique"
        ],
        examTips: [
          "Read the text multiple times: note personal responses on first read",
          "Annotate themes, character development, and key moments",
          "Consider how contemporary setting affects character choices",
          "Practice essay writing on different aspects of the text",
          "Develop knowledge of author's other works (if studied)",
          "Link text to contemporary social issues it addresses"
        ],
        practiceQuestions: [
          {
            question: "How does the author present the theme of identity in the novel?",
            marks: 15,
            guidanceNotes: "Analyse how characters develop or struggle with identity. Use 3-4 quotations. Consider: family influence, social pressure, self-discovery. Link to contemporary context."
          },
          {
            question: "To what extent is this a critique of modern family life?",
            marks: 15,
            guidanceNotes: "Discuss characters' family relationships, conflicts, and dynamics. Use evidence. Consider: what does the text suggest about families? How does this reflect contemporary society?"
          }
        ],
        commonMistakes: [
          "Treating modern setting as irrelevant rather than integral",
          "Plot summary instead of thematic analysis",
          "Not linking text to contemporary social issues",
          "Missing subtlety in character development",
          "Underestimating the text's complexity"
        ]
      },
      {
        id: "aqa-lit-p2-poetry",
        title: "Poetry: Form, Language, and Meaning",
        keyPoints: [
          "Understand form: stanza structure, line length, rhyme scheme, meter",
          "Identify poetic devices: metaphor, simile, personification, alliteration, assonance",
          "Recognize how form creates meaning: e.g., short lines suggest pace",
          "Understand voice and perspective: who is speaking?",
          "Analyse sound effects: rhythm, rhyme, repetition",
          "Link form and language to emotional impact and meaning"
        ],
        examTips: [
          "Read poems aloud to hear effects of sound and rhythm",
          "Annotate: mark devices, effect, voice, structure",
          "Compare poems within the anthology thematically",
          "Learn 2-3 key quotations from each poem",
          "Understand the context: when was it written? What was happening?",
          "Practice discussing form and language together, not separately"
        ],
        practiceQuestions: [
          {
            question: "How does the poet use form and language to convey sadness in 'Funeral Blues'?",
            marks: 15,
            guidanceNotes: "Analyse: short lines/stanzas (pace), repetition (emphasis), word choice (darkness, death), tone. Explain effect. Link to emotional impact on reader."
          },
          {
            question: "Compare how two poems explore love. Discuss form, language, and their effects.",
            marks: 15,
            guidanceNotes: "Choose two poems with contrasting or similar approaches. Analyse form (structure, rhythm), language (devices, word choice), tone. Show similarities and differences."
          }
        ],
        mnemonics: [
          "SMILE = Stanza, Metre, Imagery, Language, Effect"
        ],
        commonMistakes: [
          "Naming devices without explaining effect",
          "Ignoring form and structure",
          "Not reading poems aloud—missing sound effects",
          "Treating rhyme as automatically good/bad",
          "Missing the voice and perspective",
          "Not linking form to meaning"
        ]
      },
      {
        id: "aqa-lit-p2-unseen",
        title: "Unseen Poetry: Quick Analysis Under Pressure",
        keyPoints: [
          "Read the poem twice: once for overall meaning, once for detail",
          "Identify speaker/perspective: who is speaking? What is their attitude?",
          "Note form and structure: rhyme scheme, stanza form, line length",
          "Identify language devices and their effects",
          "Understand the poem's central idea or emotion",
          "Develop an interpretation supported by close analysis"
        ],
        examTips: [
          "Spend 3-4 minutes reading and annotating before writing",
          "Don't panic if the poem is difficult—extract what you can",
          "Identify at least 2-3 language/structural devices to discuss",
          "Read the poem aloud to hear rhythm and sound effects",
          "Make a quick note of the overall effect or meaning",
          "Structure answer: introduction (overview), body (analysis), conclusion (reflection)"
        ],
        practiceQuestions: [
          {
            question: "Read the unseen poem provided. Analyse how the poet creates mood.",
            marks: 15,
            guidanceNotes: "Identify 3-4 techniques that create mood: word choice, imagery, rhythm, line length. Quote brief phrases. Explain effect on reader. Don't worry if you don't know the poem—careful reading is key."
          },
          {
            question: "What is the poem about? How does the poet's use of language convey the main idea?",
            marks: 15,
            guidanceNotes: "First: understand what the poem literally says. Second: identify how language reveals deeper meaning. Use 2-3 quotations. Explain the relationship between form and meaning."
          }
        ],
        commonMistakes: [
          "Spending too long reading—missing time for writing",
          "Making assumptions without textual support",
          "Over-explaining literal meaning instead of analysing language",
          "Naming devices without explaining effect",
          "Not reading aloud—missing sound effects",
          "Ignoring form and structure"
        ]
      },
      {
        id: "aqa-lit-p2-comparison",
        title: "Comparing Modern Text and Poetry",
        keyPoints: [
          "Identify similar themes across prose and poetry",
          "Analyse how different forms explore these themes",
          "Compare narrative techniques: how perspective works in each",
          "Link language and form to thematic exploration",
          "Consider context: how do time periods affect the works?",
          "Integrate quotations from both texts in comparative analysis"
        ],
        examTips: [
          "Plan comparison: identify 3-4 key comparison points (themes, techniques, effects)",
          "Weave comparison throughout—don't alternate between texts",
          "Use comparative language: 'Both explore...', 'While the prose...', 'In contrast...'",
          "Quote from both texts in most paragraphs",
          "Explain why comparison reveals something important",
          "Consider how genre (poetry vs. prose) shapes exploration of theme"
        ],
        practiceQuestions: [
          {
            question: "Compare how the modern text and a poem from the anthology explore identity.",
            marks: 15,
            guidanceNotes: "Identify specific characters/speakers dealing with identity. Analyse how prose and poetry explore this differently. Use 2-3 quotations from each. Discuss: what does each form reveal?"
          },
          {
            question: "Compare the treatment of relationship/love in the modern text and in poetry.",
            marks: 15,
            guidanceNotes: "Analyse how characters/speakers experience and express relationships. Compare language, form, and tone. Show similarities and differences in perspective."
          }
        ],
        commonMistakes: [
          "Discussing text and poem separately instead of comparing",
          "Imbalanced coverage",
          "Not using comparative language",
          "Missing the significance of genre differences",
          "Generic comparisons without depth",
          "Not integrating quotations smoothly"
        ]
      },
      {
        id: "aqa-lit-p2-synthesis-modern",
        title: "Synthesis: Modern Text Analysis",
        keyPoints: [
          "Integrate character, theme, narrative technique, and language",
          "Develop personal interpretation supported by evidence",
          "Link text to contemporary social and historical context",
          "Consider multiple valid readings of the text",
          "Use subject terminology accurately",
          "Write fluently without separating different analytical approaches"
        ],
        examTips: [
          "Plan essays carefully: identify main argument, supporting points",
          "Write 3-4 substantial paragraphs (400-500 words)",
          "Each paragraph: point, evidence, analysis, connection to theme",
          "Quote relevant phrases (don't over-quote)",
          "Link character actions to broader themes",
          "Reference context when relevant"
        ],
        practiceQuestions: [
          {
            question: "To what extent is this a novel about the struggle for individual identity?",
            marks: 30,
            guidanceNotes: "Make a clear argument. Use 4-5 quotations. Analyse: character choices, relationships, conflicts, development. Link to contemporary context. Address alternative readings. Write 400+ words."
          },
          {
            question: "How does the author present family relationships? What does the text suggest about family in modern society?",
            marks: 30,
            guidanceNotes: "Discuss 3-4 family relationships or situations. Use evidence. Link to characterization, setting, theme. Consider: what values or critiques are present? Write 400+ words."
          }
        ],
        commonMistakes: [
          "Plot summary instead of analysis",
          "Disconnected observations without linking to theme",
          "Unsupported claims",
          "Not integrating context",
          "Too brief or underdeveloped",
          "Missing personal interpretation"
        ]
      },
      {
        id: "aqa-lit-p2-synthesis-poetry",
        title: "Synthesis: Poetry Analysis and Comparison",
        keyPoints: [
          "Analyse poems as integrated form-meaning (not separating structure/language)",
          "Compare poems thematically within the anthology",
          "Develop interpretation of unseen poetry with close analysis",
          "Link poetry to historical/cultural context",
          "Use subject terminology precisely: form, structure, device, effect",
          "Write about sound, image, and meaning holistically"
        ],
        examTips: [
          "Plan poetry essays around themes rather than individual poems",
          "Use comparative language when discussing multiple poems",
          "Quote brief lines or phrases (not full stanzas usually)",
          "Explain how form creates effect (not just naming devices)",
          "For unseen: make careful observations; you don't need to know the poem",
          "Write 3-4 paragraphs (350-450 words) for poetry comparison/analysis"
        ],
        practiceQuestions: [
          {
            question: "Compare how two poems explore loss. Discuss form, language, and their combined effect.",
            marks: 30,
            guidanceNotes: "Choose two contrasting or similar approaches. Analyse: speaker, perspective, structure (form, rhythm, rhyme), language (devices, word choice), tone. Link form to emotional impact. Write 400+ words."
          },
          {
            question: "Analyse the unseen poem. How does the poet use form and language to create meaning?",
            marks: 30,
            guidanceNotes: "Analyse 3-4 significant techniques. Show how they work together. Explain effect on reader. Don't worry about knowing the poet—focus on close reading. Write 400+ words."
          }
        ],
        commonMistakes: [
          "Separate analysis of form and language",
          "Over-explanation of literal meaning",
          "Naming devices without linking to effect",
          "Not reading aloud—missing sound/rhythm",
          "Treating all poems equally rather than finding significant differences",
          "Essays that are too short"
        ]
      }
    ]
  }
];

  {
    id: "edexcel-lang",
    title: "Edexcel Language Revision Guide",
    board: "Edexcel/Pearson",
    subject: "GCSE English Language",
    sections: [
      {
        id: "edexcel-p1-section-a",
        title: "Paper 1 Section A: Reading Non-Fiction Texts (20 marks)",
        keyPoints: [
          "Two non-fiction texts on related topics or with contrasting viewpoints",
          "Question 1: Select and paraphrase information (4 marks)",
          "Question 2: Identify purpose, audience, form—text A then B (8 marks)",
          "Question 3: Compare perspectives in both texts (8 marks)",
          "Understand how non-fiction writers argue and persuade",
          "Analyse perspective: explicit viewpoint and implicit attitudes"
        ],
        examTips: [
          "Read both texts quickly to understand the topic and viewpoints",
          "Q1: Find 4 key points, paraphrase in your own words",
          "Q2: Identify purpose (to persuade, inform, entertain), audience (age, knowledge, interest), form (article, speech, advertisement, letter)",
          "Q3: Compare how writers differ in their perspectives—use language and structural evidence",
          "Spend about 2 minutes on Q1, 5-7 minutes on Q2, 8-10 minutes on Q3"
        ],
        practiceQuestions: [
          {
            question: "Select four key facts about climate change from Text A. (4 marks)",
            marks: 4,
            guidanceNotes: "Scan for explicit information. Paraphrase—don't copy. Each fact should be distinct. Check you have four separate points."
          },
          {
            question: "Identify the purpose, audience, and form of Text B. (8 marks)",
            marks: 8,
            guidanceNotes: "Purpose: what is the writer trying to achieve? Audience: who are they writing for? Form: what type of text? Give specific evidence for each."
          }
        ],
        commonMistakes: [
          "Copying directly from texts in Q1",
          "Vague or general purpose statements",
          "Missing implicit attitudes and perspectives",
          "Not supporting observations with textual evidence"
        ]
      },
      {
        id: "edexcel-p1-section-b",
        title: "Paper 1 Section B: Writing to Inform (20 marks)",
        keyPoints: [
          "Write to inform a specific audience about a topic",
          "Organize logically: introduction, development, conclusion",
          "Use informative language: clear, precise, engaging",
          "Structure for clarity: subheadings, paragraphing, topic sentences",
          "Maintain appropriate register and tone",
          "Aim for 200-300 words approximately"
        ],
        examTips: [
          "Spend 2-3 minutes planning your response",
          "Write an engaging opening that captures the topic and audience interest",
          "Use clear paragraphs with topic sentences",
          "Vary sentence length for readability",
          "Include specific details and examples to inform",
          "Check spelling and punctuation—accuracy adds credibility to informative writing"
        ],
        practiceQuestions: [
          {
            question: "Write an informative article for a school magazine about volunteering opportunities.",
            marks: 20,
            guidanceNotes: "Organize into clear sections. Use subheadings if appropriate. Include specific examples. Aim for 250+ words. Write for a school audience. Check for errors."
          },
          {
            question: "Write to inform a general audience about the history and benefits of renewable energy.",
            marks: 20,
            guidanceNotes: "Structure logically: background, development, current situation. Be informative and accessible. Avoid jargon or explain technical terms. 250+ words."
          }
        ],
        commonMistakes: [
          "Writing too little—aim for at least 200 words",
          "Unclear organization—missing paragraph structure",
          "Generic writing without specific examples",
          "Careless spelling and punctuation errors"
        ]
      },
      {
        id: "edexcel-p2-section-a",
        title: "Paper 2 Section A: Reading Literary and Non-Fiction Texts (20 marks)",
        keyPoints: [
          "One literature extract and one non-fiction text",
          "Question 1: Select and synthesize information (4 marks)",
          "Question 2: Analyse author's methods (8 marks)",
          "Question 3: Evaluate effectiveness and engage critically (8 marks)",
          "Understand how writers use language for effect",
          "Consider context and author's purpose"
        ],
        examTips: [
          "Q1: Find key information from one or both texts—paraphrase clearly",
          "Q2: Identify language techniques (metaphor, simile, personification, rhetoric, tone) and explain their effect",
          "Q3: Make a critical judgment about effectiveness—support with evidence",
          "For literary text: comment on characterization, imagery, narrative style",
          "For non-fiction: analyse argumentative techniques, persuasive devices, structural choices"
        ],
        practiceQuestions: [
          {
            question: "Identify and explain four language techniques the author uses to create mood.",
            marks: 8,
            guidanceNotes: "Quote short phrases. Name technique. Explain effect. Link to overall mood or atmosphere. Aim for 2-3 sentences per technique."
          },
          {
            question: "To what extent do you find the argument in this text convincing? (8 marks)",
            marks: 8,
            guidanceNotes: "Make a judgment. Use evidence to support your view. Consider: strength of arguments, use of evidence, rhetorical devices, credibility."
          }
        ],
        commonMistakes: [
          "Analyzing language without linking to effect",
          "Making evaluative claims without evidence",
          "Confusing literary and non-fiction techniques",
          "Not addressing both texts in Q1"
        ]
      },
      {
        id: "edexcel-p2-section-b",
        title: "Paper 2 Section B: Writing to Explain or Narrate (20 marks)",
        keyPoints: [
          "Write to explain: clarify a complex concept, process, or issue",
          "Write to narrate: tell a story with clear beginning, middle, end",
          "Use clear structure and logical development",
          "Use precise language to convey meaning",
          "Adapt register and tone to purpose",
          "Aim for 250-300 words approximately"
        ],
        examTips: [
          "Choose explain or narrate based on your strength and the prompt",
          "Plan before writing: identify main points (explain) or plot points (narrate)",
          "For explanation: use connectives like 'therefore', 'as a result', 'this means'",
          "For narration: create interest through detail, dialogue, pace variation",
          "Vary sentence structure—don't use all short or all long sentences",
          "Proofread for spelling and punctuation"
        ],
        practiceQuestions: [
          {
            question: "Write an explanation of how social media has changed communication.",
            marks: 20,
            guidanceNotes: "Structure logically: introduction, development, conclusion. Use connectives. Be clear and informative. Aim for 250+ words. Address audience appropriately."
          },
          {
            question: "Write a narrative about a significant moment that changed your perspective.",
            marks: 20,
            guidanceNotes: "Create a clear beginning, middle, end. Use detail and sensory language. Vary pace. Develop emotion or significance. Aim for 250+ words."
          }
        ],
        commonMistakes: [
          "Unclear or rambling structure",
          "Not addressing the specific prompt",
          "Insufficient development—too short",
          "Careless errors undermining credibility"
        ]
      },
      {
        id: "edexcel-lit-single",
        title: "English Literature Single Text with Unseen Poetry",
        keyPoints: [
          "Core text: single play or prose text studied in depth",
          "Understand characters, themes, structure, language in context",
          "Analyse how writers use form to convey meaning",
          "Develop interpretation supported by evidence",
          "Unseen poetry: analyse quickly with close reading",
          "Compare studied and unseen texts"
        ],
        examTips: [
          "Read the core text multiple times",
          "Annotate thoroughly: mark key themes, character moments, significant language",
          "Create a character map showing relationships and development",
          "Learn 5-6 key quotations for main characters and themes",
          "For unseen poetry: read carefully, identify speaker/tone/key imagery",
          "Practice essay writing under timed conditions"
        ],
        practiceQuestions: [
          {
            question: "Analyse how a key character's development reveals the play's main theme.",
            marks: 30,
            guidanceNotes: "Choose a character with clear development. Use 4-5 quotations showing change. Explain how their journey relates to central theme. Link to language and structure."
          },
          {
            question: "Compare how your studied text and the unseen poem explore loss.",
            marks: 30,
            guidanceNotes: "Analyse characters/speakers dealing with loss. Discuss techniques. Compare form and effect. Use evidence from both texts. 400+ words."
          }
        ],
        commonMistakes: [
          "Plot summary instead of analysis",
          "Not engaging with context",
          "Weak analysis of language and structure",
          "Insufficient evidence for claims"
        ]
      },
      {
        id: "edexcel-lit-multiple",
        title: "English Literature Comparative Study",
        keyPoints: [
          "Two texts (or collections) studied for comparison",
          "Identify common themes across texts",
          "Analyse how different genres/periods treat similar ideas",
          "Develop comparative understanding",
          "Use evidence from both texts integrated in analysis",
          "Consider context: historical period, author's circumstances"
        ],
        examTips: [
          "Plan essays around themes, not individual texts",
          "Use comparative language: both, similarly, whereas, in contrast",
          "Quote from both texts in most paragraphs",
          "Avoid alternating between texts—weave comparison throughout",
          "Consider why comparison is significant",
          "Address genre and contextual differences"
        ],
        practiceQuestions: [
          {
            question: "Compare how the two texts explore power and powerlessness.",
            marks: 30,
            guidanceNotes: "Identify characters/speakers experiencing power/powerlessness. Analyse methods (language, form, structure). Show similarities and differences. Use 4-6 quotations total."
          },
          {
            question: "Both texts engage with social change. Compare their approaches and effectiveness.",
            marks: 30,
            guidanceNotes: "Discuss: What social changes do they address? How do form and genre shape their exploration? Analyse language. Compare perspectives and impact."
          }
        ],
        commonMistakes: [
          "Treating texts separately instead of comparing",
          "Imbalanced coverage",
          "Missing the point of comparison—why does it matter?",
          "Not integrating quotations smoothly"
        ]
      },
      {
        id: "edexcel-timing",
        title: "Edexcel Paper Timing and Strategy",
        keyPoints: [
          "Paper 1: 1 hour 45 minutes (105 mins) for 40 marks",
          "Section A: 20 marks in ~35 minutes",
          "Section B: 20 marks in ~35 minutes",
          "Paper 2: 1 hour 45 minutes (105 mins) for 40 marks",
          "Section A: 20 marks in ~35 minutes",
          "Section B: 20 marks in ~35 minutes"
        ],
        examTips: [
          "Balance time evenly across sections",
          "Don't rush reading Section A—careful analysis is key",
          "Allocate adequate time to writing questions (Section B)",
          "Leave 5 minutes to proofread writing",
          "Track time carefully—watch the clock",
          "If running out of time, prioritize Section B (where most marks are often awarded)"
        ],
        practiceQuestions: [
          {
            question: "Complete a full past paper under timed conditions. Review your time allocation.",
            marks: 0,
            guidanceNotes: "Did you balance sections evenly? Did Section A analysis feel rushed? Could you improve time management? Aim to finish with 5 minutes to spare."
          }
        ],
        commonMistakes: [
          "Spending too long on Q1 Section A",
          "Rushing writing answers due to poor time allocation",
          "Not finishing all questions"
        ]
      },
      {
        id: "edexcel-integration",
        title: "Integration: Edexcel Approach",
        keyPoints: [
          "Reading and writing integrated: reading informs writing",
          "Literary and non-fiction study enriches language study",
          "Analysis skills transfer across all question types",
          "Development of voice and style through practice",
          "Critical thinking: evaluation and interpretation",
          "Synthesis: combining multiple skills in extended responses"
        ],
        examTips: [
          "Read widely: literary and non-fiction texts",
          "Analyze language and techniques across different genres",
          "Write regularly—develop your natural style",
          "Seek feedback on your writing from teachers or peers",
          "Revise using mark schemes and sample answers",
          "Practice essay writing under timed conditions"
        ],
        practiceQuestions: [
          {
            question: "How has studying literature informed your understanding of language techniques?",
            marks: 0,
            guidanceNotes: "Reflect on how close reading of poetry and prose has developed your analytical vocabulary. Notice which techniques appear across different texts."
          }
        ],
        commonMistakes: [
          "Treating reading and writing as separate skills",
          "Not developing a personal analytical voice",
          "Memorizing essays rather than developing flexible thinking"
        ]
      }
    ]
  }
];

  {
    id: "ocr-lang",
    title: "OCR Language Revision Guide",
    board: "OCR",
    subject: "GCSE English Language",
    sections: [
      {
        id: "ocr-component-1",
        title: "Component 1: Communicating Effectively (80 marks)",
        keyPoints: [
          "Written Communication Task: write for a specific purpose and audience (40 marks)",
          "Listening and Speaking Portfolio: record spoken interactions (40 marks)",
          "Purposes: inform, explain, persuade, entertain, describe",
          "Audiences: from familiar to unfamiliar groups",
          "Register and tone appropriate to context",
          "Clear structure and effective use of language",
          "Listening and speaking skills: clarity, engagement, response to feedback"
        ],
        examTips: [
          "For writing task: plan carefully—identify purpose, audience, form",
          "Use register appropriate to audience: formal for officials, casual for friends",
          "Structure writing clearly: introduction, development, conclusion",
          "For speaking: prepare brief notes, not full scripts",
          "Speak clearly and engage with your audience",
          "Listen actively and respond appropriately in conversations",
          "Record spontaneous speech—not pre-learned scripts"
        ],
        practiceQuestions: [
          {
            question: "Write a persuasive letter to your local councillor about a community issue (40 marks)",
            marks: 40,
            guidanceNotes: "Identify: purpose (persuade), audience (councillor), form (letter). Use appropriate tone: formal and respectful. Structure arguments logically. Use persuasive techniques. Aim for 400+ words."
          },
          {
            question: "Record a conversation with a peer about a topic of interest (40 marks)",
            marks: 40,
            guidanceNotes: "Prepare brief notes about your topic. Speak spontaneously (not scripted). Engage with your partner: ask questions, respond, build on ideas. Show active listening."
          }
        ],
        commonMistakes: [
          "Written task: unclear purpose or audience",
          "Not matching register to audience",
          "Insufficient length or underdeveloped ideas",
          "Speaking: reading from a full script instead of spontaneous speech",
          "Not engaging with the listener"
        ]
      },
      {
        id: "ocr-component-2",
        title: "Component 2: Reading and Writing Non-Fiction Texts (100 marks)",
        keyPoints: [
          "Reading: analyse informative, persuasive, or entertaining non-fiction texts",
          "Writing: produce non-fiction text for specific purpose and audience",
          "Understand rhetorical devices and persuasive techniques",
          "Analyse language choices and their effects",
          "Synthesize information from multiple sources",
          "Produce well-structured, error-free writing"
        ],
        examTips: [
          "Reading task: annotate texts, identify techniques, explain effects",
          "Note: purpose (what is the writer trying to achieve?), audience (who is this for?), form (what type of text?)",
          "For persuasive texts: identify rhetorical questions, emotive language, statistics, expert opinion",
          "Writing task: plan structure before writing",
          "Aim for 400+ words in writing tasks",
          "Proofread carefully—accuracy matters"
        ],
        practiceQuestions: [
          {
            question: "Analyse how the writer uses language to persuade the reader to support a cause.",
            marks: 40,
            guidanceNotes: "Identify 4-5 persuasive techniques. Quote and explain effect. Link to overall persuasive purpose. Consider: word choice, tone, structure, examples."
          },
          {
            question: "Write an informative article for a newspaper about an issue you've researched.",
            marks: 40,
            guidanceNotes: "Research your topic. Structure clearly: headline, introduction, development, conclusion. Use specific examples and evidence. Aim for 400+ words. Check accuracy and spelling."
          }
        ],
        commonMistakes: [
          "Analysis without explanation of effect",
          "Using vague techniques or weak examples",
          "Writing that is too brief or underdeveloped",
          "Not addressing specific audience needs in writing task",
          "Careless errors: spelling, punctuation, sentence boundaries"
        ]
      },
      {
        id: "ocr-english-lit",
        title: "English Literature (H2D)",
        keyPoints: [
          "Close study of six texts: two poetry, two drama, two prose",
          "Analyse: characterization, theme, language, structure, context",
          "Understand form: how genre shapes meaning",
          "Develop personal interpretation supported by evidence",
          "Comparative study: themes across texts",
          "Understanding social, historical, cultural context"
        ],
        examTips: [
          "Read each text multiple times: first for enjoyment, then for analysis",
          "Annotate thoroughly: mark techniques, themes, character moments",
          "Learn 5-6 key quotations per text",
          "Practice timed essay writing (45-50 minutes per essay)",
          "Compare texts thematically, not separately",
          "Link language analysis to character and theme",
          "Consider context: when written, author's perspective, social values of the time"
        ],
        practiceQuestions: [
          {
            question: "Compare how two writers explore the theme of power and ambition.",
            marks: 30,
            guidanceNotes: "Choose texts across different genres. Analyse: characterization, language, structure. Use 4-6 quotations. Show similarities and differences in approach. Link to context."
          },
          {
            question: "Analyse how the dramatic structure of the play enhances its tragic effect.",
            marks: 30,
            guidanceNotes: "Consider: acts/scenes, turning points, climax, resolution. Analyse specific scenes. Use quotations. Explain dramatic impact. Link structure to theme."
          }
        ],
        commonMistakes: [
          "Plot summary instead of analysis",
          "Weak engagement with context",
          "Insufficient textual evidence",
          "Not integrating close reading with broader interpretation"
        ]
      },
      {
        id: "ocr-spoken",
        title: "Spoken Language Study (40 marks)",
        keyPoints: [
          "Analyse transcripts of spoken interactions",
          "Understand: accent, dialect, register, formality, conversation conventions",
          "Identify: turn-taking, adjacency pairs, discourse markers, non-verbal communication",
          "Analyse purpose and effect of language choices",
          "Consider social and contextual factors",
          "Develop terminology: phonetics, pragmatics, sociolinguistics"
        ],
        examTips: [
          "Study transcripts carefully: mark features like: pauses, overlaps, features of accent/dialect",
          "Use subject terminology precisely: register, formality, address terms, etc.",
          "Analyse: What is the speaker trying to achieve? How does language support this?",
          "Consider: social relationship between speakers, context, purpose",
          "Link language choices to social factors: age, gender, relationship, power dynamics",
          "Compare informal and formal speech: where do features appear? Why?"
        ],
        practiceQuestions: [
          {
            question: "Analyse the conversation transcript. What does it reveal about the relationship between speakers?",
            marks: 40,
            guidanceNotes: "Examine: register (formal/informal), turn-taking, address terms, tone. How do language choices show the relationship? What is the purpose of the interaction?"
          },
          {
            question: "Compare two transcripts. What are the differences in register, formality, and tone? Why?",
            marks: 40,
            guidanceNotes: "Identify specific linguistic features in each. Explain: who are the speakers? What's the context? Why do these differences appear?"
          }
        ],
        commonMistakes: [
          "Unclear terminology or misuse of linguistic terms",
          "Not explaining why language features appear",
          "Treating speech as 'wrong' compared to written English",
          "Missing social context and its influence on language"
        ]
      },
      {
        id: "ocr-writing-skills",
        title: "OCR Writing Skills Across All Components",
        keyPoints: [
          "Clear paragraph structure: topic idea, development, conclusion",
          "Varied sentence structures: simple, complex, compound",
          "Accurate spelling, particularly subject-specific terminology",
          "Correct punctuation: full stops, commas, semicolons, colons appropriately",
          "Subject terminology used accurately",
          "Sustained register appropriate to audience and purpose"
        ],
        examTips: [
          "Plan before writing: identify main points and organize logically",
          "Write in paragraphs: each with a clear focus",
          "Use topic sentences to guide readers",
          "Vary sentence length: short sentences for impact, longer for explanation",
          "Use precise vocabulary—choose words carefully",
          "Proofread: check for spelling, punctuation, sentence boundaries",
          "Read aloud to check flow and clarity"
        ],
        practiceQuestions: [
          {
            question: "Write an analytical essay on a text of your choice, demonstrating accurate use of terminology and sophisticated writing.",
            marks: 0,
            guidanceNotes: "Structure: introduction, 3-4 body paragraphs, conclusion. Use subject terminology correctly. Integrate quotations smoothly. Vary sentence structures. Proofread carefully."
          }
        ],
        commonMistakes: [
          "Unclear paragraph structure",
          "Repetitive sentence patterns",
          "Careless spelling and punctuation errors",
          "Inconsistent register",
          "Overuse of quotations without explanation"
        ]
      },
      {
        id: "ocr-timing",
        title: "OCR Assessment Timing Strategy",
        keyPoints: [
          "Component 1: Coursework over the course (no exam time limit)",
          "Component 2: Written exam, 2 hours 30 minutes (150 marks total)",
          "Reading component: 50 marks in ~50 minutes",
          "Writing component: 50 marks in ~60 minutes",
          "Spoken Language: independent study (40 marks, assessed on exam day)",
          "English Literature: Written exam, 2 hours 30 minutes (90 marks)"
        ],
        examTips: [
          "For Component 2: Read all texts quickly before answering",
          "Allocate 5 minutes to planning each writing task",
          "Leave 10 minutes to proofread written work",
          "For literature exam: plan essays carefully—5 minutes planning, 40-45 minutes writing",
          "Don't rush—quality analysis is more valuable than length",
          "Check the clock regularly to avoid losing time"
        ],
        practiceQuestions: [
          {
            question: "Complete a Component 2 mock exam in 2 hours 30 minutes. Evaluate your time management.",
            marks: 0,
            guidanceNotes: "Did you have enough time for all questions? Which section was most rushed? Could you improve planning or writing speed? Aim to finish with 5-10 minutes to spare."
          }
        ],
        commonMistakes: [
          "Not allocating enough time to reading and annotating texts",
          "Rushing writing due to poor time allocation",
          "Not proofreading final work",
          "Forgetting to address all parts of a multi-part question"
        ]
      }
    ]
  },

  {
    id: "wjec-lang",
    title: "WJEC/Eduqas Language Revision Guide",
    board: "WJEC/Eduqas",
    subject: "GCSE English Language",
    sections: [
      {
        id: "wjec-component-1",
        title: "Component 1: Reading and Vocabulary (80 marks, 2 hours)",
        keyPoints: [
          "Read and analyse two non-fiction texts (linked theme or contrasting viewpoints)",
          "Q1: Select and synthesize information (10 marks)",
          "Q2: Analyse writer's method in one text (15 marks)",
          "Q3: Evaluate effectiveness across both texts (20 marks)",
          "Q4: Vocabulary and language feature identification (10 marks)",
          "Q5: Language analysis and interpretation (25 marks)"
        ],
        examTips: [
          "Spend first 5 minutes reading and annotating both texts",
          "Q1: Find key points from both texts, paraphrase, synthesize",
          "Q2: Identify language techniques, quote, explain effect",
          "Q3: Make judgments about which is more effective—support with evidence",
          "Q4: Understand word meanings from context",
          "Q5: Deeper analysis of language choices and their cumulative effect",
          "Allocate 5-7 minutes per question based on marks"
        ],
        practiceQuestions: [
          {
            question: "Identify and explain four language techniques used in this extract to create atmosphere.",
            marks: 15,
            guidanceNotes: "Name technique, quote, explain effect. Consider: word choice, imagery, sentence structure, sound devices. Link to overall atmosphere."
          },
          {
            question: "Which writer is more effective in persuading their audience? Evaluate both texts.",
            marks: 20,
            guidanceNotes: "Make a clear judgment. Use evidence from both texts. Consider: argument strength, evidence quality, rhetorical devices, language effectiveness."
          }
        ],
        commonMistakes: [
          "Not synthesizing information from both texts in Q1",
          "Naming techniques without explaining effect",
          "Generic evaluative statements without evidence",
          "Not addressing vocabulary questions appropriately"
        ]
      },
      {
        id: "wjec-component-2",
        title: "Component 2: Writing for Effect (80 marks, 2 hours)",
        keyPoints: [
          "Q1: Write to inform (20 marks)",
          "Q2: Write to persuade or entertain (20 marks)",
          "Q3: Creative or descriptive writing (40 marks)",
          "All tasks require specific purpose and audience",
          "Register and tone appropriate throughout",
          "Clear structure and developed ideas",
          "Accurate spelling and punctuation"
        ],
        examTips: [
          "Spend 3-4 minutes planning each response",
          "Q1 (20 marks): ~15 minutes writing, aim for 200-250 words",
          "Q2 (20 marks): ~15 minutes writing, aim for 200-250 words",
          "Q3 (40 marks): ~25-30 minutes writing, aim for 350-400 words",
          "For all tasks: match register to audience",
          "Use varied sentence structures",
          "Leave 5 minutes to proofread"
        ],
        practiceQuestions: [
          {
            question: "Write to inform a student magazine about opportunities in your school.",
            marks: 20,
            guidanceNotes: "Purpose: inform. Audience: students. Organize logically. Include specific examples. Use accessible language. 200+ words."
          },
          {
            question: "Write a persuasive article arguing for change at your school or in your community.",
            marks: 20,
            guidanceNotes: "Build an argument. Use persuasive techniques: rhetorical questions, emotive language, examples. Address counterarguments. 200+ words."
          },
          {
            question: "Write a narrative or description about a significant moment in your life.",
            marks: 40,
            guidanceNotes: "For narrative: clear beginning, middle, end. For description: vivid imagery, sensory detail. Develop emotion or significance. 350+ words."
          }
        ],
        commonMistakes: [
          "Writing too little—especially for Q3",
          "Not matching register to audience",
          "Unclear structure or rambling ideas",
          "Careless spelling and punctuation"
        ]
      },
      {
        id: "wjec-component-3",
        title: "Component 3: Understanding Non-Fiction Texts (40 marks, 1 hour 15 mins)",
        keyPoints: [
          "Study a single non-fiction text in detail (provided as part of the course)",
          "Understand: author's purpose, audience, main arguments, supporting evidence",
          "Analyse language choices and their effects",
          "Evaluate effectiveness and credibility",
          "Make inferences and draw conclusions",
          "Relate text to broader social and historical context"
        ],
        examTips: [
          "Know the text thoroughly: re-read multiple times",
          "Annotate: mark main ideas, supporting evidence, persuasive techniques",
          "Understand the author's perspective and bias",
          "Practice essay writing on different aspects of the text",
          "Use quotations to support analysis",
          "Link language analysis to author's purpose and audience effect"
        ],
        practiceQuestions: [
          {
            question: "How does the author use language to construct a particular viewpoint?",
            marks: 20,
            guidanceNotes: "Identify 3-4 language choices that reveal the author's perspective. Quote and explain effect. Link to overall argument or viewpoint."
          },
          {
            question: "To what extent is this text an effective piece of persuasive writing?",
            marks: 20,
            guidanceNotes: "Make a judgment. Use evidence: argument strength, language effectiveness, rhetorical devices, credibility. Address strengths and weaknesses."
          }
        ],
        commonMistakes: [
          "Plot summary rather than analysis",
          "Superficial engagement with language",
          "Not supporting claims with evidence",
          "Ignoring author's perspective and potential bias"
        ]
      },
      {
        id: "wjec-english-lit",
        title: "English Literature (40 marks per component)",
        keyPoints: [
          "Component A: Drama text (40 marks)",
          "Component B: Prose text (40 marks)",
          "Component C: Poetry (40 marks)",
          "Close study of character, theme, language, structure",
          "Understand historical and cultural context",
          "Analyse how form shapes meaning",
          "Develop personal interpretation with evidence"
        ],
        examTips: [
          "Read texts multiple times: for enjoyment, then for analysis",
          "Annotate: mark themes, character moments, significant language",
          "Learn 5-6 key quotations per text",
          "Practice timed essay writing (40-45 minutes per essay)",
          "For poetry: read aloud to hear effects of sound and rhythm",
          "Consider context: when written, historical attitudes, author's perspective",
          "Link close reading to broader thematic understanding"
        ],
        practiceQuestions: [
          {
            question: "Analyse how the dramatist presents a key relationship in the play.",
            marks: 40,
            guidanceNotes: "Choose a significant relationship. Analyse: dialogue, action, stage directions. Use 4-5 quotations. Link to character development and theme."
          },
          {
            question: "How does the author use setting to develop theme in the novel?",
            marks: 40,
            guidanceNotes: "Identify 3-4 significant settings. Analyse: description, symbolism, character response. Use evidence. Link setting to theme and character."
          },
          {
            question: "Analyse how the poet uses form and language to express emotion.",
            marks: 40,
            guidanceNotes: "Look at: stanza form, line length, rhyme, meter, word choice, imagery. Explain how form and language work together. Use quotations."
          }
        ],
        commonMistakes: [
          "Plot summary rather than analysis",
          "Weak engagement with context",
          "Insufficient or irrelevant quotations",
          "Not linking close reading to theme"
        ]
      },
      {
        id: "wjec-speaking",
        title: "Speaking and Listening (Assessed Continuously)",
        keyPoints: [
          "Classroom discussion and participation",
          "Individual presentation (2-3 minutes)",
          "Response to others: listening and engagement",
          "Clarity, expression, use of Standard English where appropriate",
          "Development of ideas and participation in dialogue",
          "Assessment by teacher (internally assessed)"
        ],
        examTips: [
          "Prepare presentations thoroughly",
          "Speak clearly and at appropriate pace",
          "Make eye contact with audience",
          "Listen actively to others—show engagement",
          "Respond thoughtfully to questions or comments",
          "Develop your ideas: don't just read a script",
          "Practice speaking in front of others"
        ],
        practiceQuestions: [
          {
            question: "Prepare and deliver a 2-3 minute presentation on a topic you've studied.",
            marks: 0,
            guidanceNotes: "Choose a topic with substance. Prepare brief notes. Speak naturally (not scripted). Engage audience with eye contact and tone variation. Practice beforehand."
          }
        ],
        commonMistakes: [
          "Reading directly from a script",
          "Speaking too quickly or unclearly",
          "Not engaging with audience",
          "Insufficient preparation"
        ]
      },
      {
        id: "wjec-timing",
        title: "WJEC Timing and Strategy",
        keyPoints: [
          "Component 1: 2 hours (80 marks) for reading and language analysis",
          "Component 2: 2 hours (80 marks) for writing",
          "Component 3: 1 hour 15 minutes (40 marks) for non-fiction analysis",
          "Literature: Three components, 1 hour 15 minutes each (40 marks each)",
          "Speaking and Listening: Continuous assessment throughout course"
        ],
        examTips: [
          "Allocate time proportionally: more time per mark on Components 1 and 2",
          "Component 1: 5 mins reading, then ~8-10 mins per question",
          "Component 2: 3 mins planning per question, appropriate writing time",
          "Leave 5 minutes to proofread writing tasks",
          "Don't rush reading and annotation—careful analysis saves time later",
          "Watch the clock throughout the exam"
        ],
        practiceQuestions: [
          {
            question: "Complete a full Component 1 exam in 2 hours. Review your time allocation.",
            marks: 0,
            guidanceNotes: "Did you spend enough time reading? Which questions felt rushed? Could you improve pacing? Aim to finish with 5 minutes to spare."
          }
        ],
        commonMistakes: [
          "Rushing through text reading and annotation",
          "Not leaving enough time for writing answers",
          "Not proofreading final responses",
          "Losing track of time and running out"
        ]
      }
    ]
  },

  {
    id: "igcse-lang",
    title: "IGCSE English Language Revision Guide",
    board: "Cambridge IGCSE",
    subject: "English Language",
    sections: [
      {
        id: "igcse-p1-q1",
        title: "Paper 1 Question 1: Reading Comprehension (25 marks)",
        keyPoints: [
          "Answer questions about a prose passage (900-1000 words)",
          "Questions range from literal comprehension to inference and interpretation",
          "Demonstrate understanding through direct quotation and paraphrase",
          "Show ability to infer meaning beyond the literal text",
          "Analyse writer's effects using appropriate terminology",
          "Write in complete sentences with clear explanation"
        ],
        examTips: [
          "Read the passage carefully twice: once for overall understanding, once for detail",
          "Read all questions before answering—helps guide your reading",
          "Quote when answering factual questions to show you've found the right part",
          "For inference questions: support your answer with textual evidence",
          "Use language analysis terminology: metaphor, simile, tone, mood, effect",
          "Explain effects thoroughly—don't just name techniques",
          "Aim for 2-3 sentences per mark available"
        ],
        practiceQuestions: [
          {
            question: "What does the passage tell us about the character's background? (5 marks)",
            marks: 5,
            guidanceNotes: "Find explicit and implicit information. Quote to show evidence. Paraphrase to demonstrate understanding. Draw inferences from details."
          },
          {
            question: "Analyse how the writer creates tension in this section. (10 marks)",
            marks: 10,
            guidanceNotes: "Identify 3-4 language techniques or structural features. Quote briefly. Explain effect. Link to building tension. Write 6-8 sentences."
          }
        ],
        commonMistakes: [
          "Quoting too much without paraphrasing",
          "Not supporting inferences with evidence",
          "Naming techniques without explaining effect",
          "Answers too brief—not enough explanation",
          "Misunderstanding inference (assuming rather than deducing)"
        ]
      },
      {
        id: "igcse-p1-q2",
        title: "Paper 1 Question 2: Directed Writing (25 marks)",
        keyPoints: [
          "Write in a specified form for a specific purpose and audience",
          "Forms: letter, article, advertisement, speech, leaflet, email, memo, report",
          "Adapt register and tone to suit audience and purpose",
          "Organize writing clearly: appropriate structure for the form",
          "Use persuasive, informative, or entertaining techniques as appropriate",
          "Aim for 250-300 words"
        ],
        examTips: [
          "Read the task carefully: identify form, purpose, and audience",
          "Spend 3-4 minutes planning: note main ideas and structure",
          "Match the register to your audience: formal for officials, less formal for peers",
          "Organize into paragraphs: each with a main idea",
          "Use techniques appropriate to purpose: persuasive devices for persuasion, clear explanation for information",
          "Vary sentence length and structure",
          "Proofread for spelling and punctuation"
        ],
        practiceQuestions: [
          {
            question: "Write a letter to the principal of your school persuading them to extend lunch breaks.",
            marks: 25,
            guidanceNotes: "Purpose: persuade. Audience: principal (formal). Form: letter (with appropriate greeting/closing). Use persuasive techniques. Aim for 250+ words."
          },
          {
            question: "Write an article for a school magazine informing students about a cultural event.",
            marks: 25,
            guidanceNotes: "Purpose: inform. Audience: school community (less formal). Form: article (headline, byline). Organize logically. Include key details. 250+ words."
          }
        ],
        commonMistakes: [
          "Wrong register for audience",
          "Not addressing the specific task",
          "Insufficient length (under 200 words loses marks)",
          "Unclear structure or rambling",
          "Careless spelling and punctuation undermining credibility"
        ]
      },
      {
        id: "igcse-p2-q1",
        title: "Paper 2 Question 1: Summary of Key Points (15 marks)",
        keyPoints: [
          "Read two source texts and select key information",
          "Synthesize points of similarity or difference",
          "Answer in full sentences, not lists",
          "Write approximately 200 words",
          "Use your own words—avoid direct copying",
          "Demonstrate understanding of main ideas"
        ],
        examTips: [
          "Read both texts carefully, annotating key points",
          "Identify the focus of the question: similarities, differences, or both",
          "Select only the most important information",
          "Paraphrase—show you understand the texts",
          "Organize logically: similarities first then differences, or vice versa",
          "Use signposting: 'Similarly', 'Both', 'However', 'In contrast'",
          "Write in full sentences with clear paragraphing"
        ],
        practiceQuestions: [
          {
            question: "Summarize the key similarities and differences between the two writers' views on education.",
            marks: 15,
            guidanceNotes: "Identify 3-4 main points from each text. Write 200 words. Paraphrase thoroughly. Use own words. Structure clearly."
          },
          {
            question: "What are the main similarities in how both texts present technology?",
            marks: 15,
            guidanceNotes: "Find explicit and implicit attitudes. Paraphrase. Explain with reference to textual detail. Aim for full, well-developed sentences."
          }
        ],
        commonMistakes: [
          "Copying directly from the texts",
          "Including minor details instead of key points",
          "Not clearly signposting similarities/differences",
          "Writing too little (under 150 words)",
          "Confusing summary with commentary"
        ]
      },
      {
        id: "igcse-p2-q2",
        title: "Paper 2 Question 2: Essay on Key Texts (35 marks)",
        keyPoints: [
          "Analyse texts studied in class: prose, drama, or poetry",
          "Answer essay prompt about character, theme, language, structure, or context",
          "Support interpretation with detailed textual evidence",
          "Develop sustained argument or analysis",
          "Use subject terminology accurately",
          "Write approximately 400-500 words"
        ],
        examTips: [
          "Plan essay carefully: identify main argument, supporting points (3-4), relevant quotations",
          "Write clear introduction stating your position",
          "Each body paragraph: topic sentence, evidence, explanation, link to thesis",
          "Quote relevant phrases (2-5 words usually) not full passages",
          "Explain how quotations support your argument",
          "Use terminology accurately: character, theme, metaphor, narrative perspective, etc.",
          "Write clear conclusion restating main points",
          "Proofread for spelling and punctuation"
        ],
        practiceQuestions: [
          {
            question: "Analyse how the central character develops throughout the novel. What does their journey reveal about the novel's themes?",
            marks: 35,
            guidanceNotes: "Identify key moments showing development. Use 4-5 quotations. Explain link to themes. Structure: introduction, 3-4 body paragraphs, conclusion. 400+ words."
          },
          {
            question: "Compare how two writers present power and powerlessness. Which do you find more effective and why?",
            marks: 35,
            guidanceNotes: "Analyse both texts. Use comparative language. Justify your judgment. Link to language, structure, characterization. Integrate quotations. 400+ words."
          }
        ],
        commonMistakes: [
          "Plot summary instead of analysis",
          "Weak textual support—few or no quotations",
          "Not addressing specific prompt",
          "Unclear argument or rambling discussion",
          "Essays too brief (under 300 words)",
          "Insufficient engagement with context"
        ]
      },
      {
        id: "igcse-p3-oral",
        title: "Speaking Component: Oral Exam (30 marks)",
        keyPoints: [
          "Conversation with examiner about a chosen topic (5-7 minutes)",
          "Prepare speaking notes on a topic from the course",
          "Show understanding of texts studied",
          "Respond spontaneously to questions",
          "Speak clearly and engage with the conversation",
          "Use appropriate register and vocabulary"
        ],
        examTips: [
          "Choose a topic you can speak about with confidence and enthusiasm",
          "Prepare notes (not a script) covering key points",
          "Practice speaking aloud beforehand",
          "Speak clearly at a moderate pace—not too fast",
          "Listen to examiner's questions carefully",
          "Respond naturally (not from memory)",
          "Develop your ideas: explain, give examples, expand",
          "If you don't understand a question, politely ask for clarification"
        ],
        practiceQuestions: [
          {
            question: "Prepare a presentation on a character from your studied texts. Be ready to discuss their development and significance.",
            marks: 30,
            guidanceNotes: "Prepare notes on: who the character is, key moments in their development, why they're significant to the text. Practice speaking for 5-7 minutes. Be ready for follow-up questions."
          }
        ],
        commonMistakes: [
          "Reading directly from a script",
          "Speaking too quickly or unclearly",
          "Not developing ideas—giving minimal responses",
          "Not engaging with the examiner's questions",
          "Insufficient preparation leading to hesitation and silence"
        ]
      },
      {
        id: "igcse-timing",
        title: "IGCSE Timing and Strategy",
        keyPoints: [
          "Paper 1: 2 hours (50 marks) for Q1 comprehension and Q2 writing",
          "Paper 2: 2 hours (50 marks) for Q1 summary and Q2 essay",
          "Paper 3: Oral exam, 15 minutes per candidate (30 marks)",
          "Total: 130 marks available"
        ],
        examTips: [
          "Paper 1 Q1: 30-40 minutes for careful reading and comprehension answers",
          "Paper 1 Q2: 35-40 minutes for planning and directed writing",
          "Paper 2 Q1: 25-30 minutes for reading and summary writing",
          "Paper 2 Q2: 50-60 minutes for essay planning and writing",
          "Leave 5-10 minutes overall to proofread written work",
          "Don't rush—quality answers are worth more than quantity",
          "Watch the clock and pace yourself accordingly"
        ],
        practiceQuestions: [
          {
            question: "Complete a full timed mock exam (both papers). Review your time allocation.",
            marks: 0,
            guidanceNotes: "Did you have enough time for all questions? Which sections felt rushed? Could you improve planning or writing speed? Aim to finish on time with time for proofreading."
          }
        ],
        commonMistakes: [
          "Spending too long on reading—missing time for writing",
          "Not planning writing answers adequately",
          "Rushing final answers due to time pressure",
          "Not proofreading final responses",
          "Running out of time and leaving questions incomplete"
        ]
      },
      {
        id: "igcse-integration",
        title: "IGCSE: Integration and Holistic Development",
        keyPoints: [
          "Reading and writing skills develop together",
          "Analysis of examined texts improves writing ability",
          "Speaking skills enhance understanding of oral texts",
          "Subject terminology used consistently across all components",
          "Critical thinking applied across all assessment types",
          "Synthesis: combining comprehension, analysis, and expression"
        ],
        examTips: [
          "Read widely: develop vocabulary and understanding of different writing styles",
          "Analyse language in everything you read—develop habit of close analysis",
          "Write regularly—practice essay writing and other forms",
          "Seek feedback from teachers and peers",
          "Use past papers and mark schemes to understand examiners' expectations",
          "Develop your analytical voice—don't memorize essays",
          "Practice all components: reading, writing, speaking"
        ],
        practiceQuestions: [
          {
            question: "How have your reading and writing skills developed through the course? Give specific examples.",
            marks: 0,
            guidanceNotes: "Reflect on: new vocabulary learned, analytical techniques developed, writing styles mastered. Notice connections between reading analysis and writing ability."
          }
        ],
        commonMistakes: [
          "Treating reading and writing as separate skills",
          "Memorizing essays rather than developing analytical thinking",
          "Not practicing all components equally",
          "Neglecting to improve areas of weakness"
        ]
      }
    ]
  }
];
