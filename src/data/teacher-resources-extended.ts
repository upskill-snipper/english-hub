// Teacher Resources Extended
// Comprehensive support for busy English teachers: gap analysis, lesson ideas, homework bank

export interface StudentGap {
  id: string;
  title: string;
  description: string;
  diagnosticQuestion: string;
  interventionActivities: InterventionActivity[];
  recommendedResources: string[];
  estimatedRecoveryTime: string;
  assessmentCheckpoints: string[];
}

export interface InterventionActivity {
  title: string;
  description: string;
  steps: string[];
  duration: string;
}

export interface LessonIdea {
  id: string;
  title: string;
  description: string;
  duration: string;
  suitableFor: ("KS3" | "GCSE" | "both")[];
  resourcesNeeded: string[];
  differentiation: string;
}

export interface HomeworkTask {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  markingGuidance: string;
  modelAnswer: string;
  suitableFor: "KS3" | "GCSE" | "both";
}

// ============================================================================
// 1. STUDENT GAP ANALYSIS - Common Weaknesses & Interventions
// ============================================================================

export const studentGapAnalysis: StudentGap[] = [
  {
    id: "identify-language-techniques",
    title: "Cannot identify language techniques",
    description: "Students struggle to spot and name literary/language devices in texts (metaphor, simile, personification, alliteration, etc.)",
    diagnosticQuestion: "Read this sentence: 'The moon was a silver coin in the night sky.' What technique is used and why?",
    interventionActivities: [
      {
        title: "Technique Hunt",
        description: "Provide short passages with highlighted techniques. Students identify and label each one, then discuss effect.",
        steps: [
          "Provide 3-4 short extracts (5-10 lines each)",
          "Highlight 1-2 techniques per extract",
          "Students write name + brief effect explanation",
          "Peer check and discuss in pairs",
          "Teacher clarifies misconceptions"
        ],
        duration: "15 minutes"
      },
      {
        title: "Technique Definition Cards",
        description: "Create flashcard pairs: technique name + definition + example. Use for matching games and repeated exposure.",
        steps: [
          "Create 10 cards with technique names",
          "Create 10 cards with definitions and examples",
          "Mix up and have students match pairs",
          "Display matched pairs on classroom wall for reference",
          "Review daily for 2 weeks"
        ],
        duration: "10 minutes daily"
      },
      {
        title: "Reverse Engineering",
        description: "Give effect/meaning, students identify which technique creates it. Builds understanding of purpose.",
        steps: [
          "Write intended effect: 'The writer wants to show the character is angry'",
          "Provide example sentence using a technique",
          "Students identify the technique and explain the link",
          "Extend: 'Which other technique could achieve the same effect?'"
        ],
        duration: "20 minutes"
      },
      {
        title: "Create Your Own",
        description: "Students write sentences using specific techniques. Builds understanding through creation.",
        steps: [
          "Give students a simple sentence: 'The house was old.'",
          "Ask them to rewrite using metaphor, simile, personification (different versions)",
          "Compare versions and discuss which is most effective",
          "Display best examples as models for class"
        ],
        duration: "25 minutes"
      }
    ],
    recommendedResources: [
      "Flashcard sets for all KS4 techniques",
      "Annotation overlays for key texts",
      "Technique effect checklist posters",
      "Short story collections with pre-marked examples"
    ],
    estimatedRecoveryTime: "3-4 weeks with 15 mins daily practice",
    assessmentCheckpoints: [
      "Can identify 8/10 techniques in unseen passage",
      "Can name technique without highlighting",
      "Can explain why writer used technique (effect/purpose)"
    ]
  },
  {
    id: "weak-paragraph-structure",
    title: "Weak paragraph structure and cohesion",
    description: "Students write disjointed paragraphs without clear topic sentences, evidence, or explanation. Ideas don't link.",
    diagnosticQuestion: "Write one paragraph analyzing this character. Use a quote and explain what it reveals.",
    interventionActivities: [
      {
        title: "PEEL Frame Mastery",
        description: "Explicitly teach and scaffold the PEEL (Point-Evidence-Explanation-Link) structure.",
        steps: [
          "Model writing one paragraph showing each stage in different color",
          "Provide sentence starters for each part",
          "Students highlight their own work: Point (blue), Evidence (yellow), Explanation (green), Link (pink)",
          "Peer check using visual guide",
          "Gradually reduce scaffolding over 3-4 lessons"
        ],
        duration: "30 minutes per lesson, 4 lessons"
      },
      {
        title: "Paragraph Jigsaw",
        description: "Scrambled sentences from good paragraph. Students rebuild in correct order, explaining reasoning.",
        steps: [
          "Take a well-written paragraph and cut into 5-6 sentences",
          "Randomize order and give to students",
          "Students rebuild the paragraph in correct order with evidence",
          "Compare to original and discuss why that order works",
          "Label each sentence (P/E/E/L)"
        ],
        duration: "20 minutes"
      },
      {
        title: "Evidence Sandwich",
        description: "Dedicate practice to the 'explanation' part—the hardest skill for most students.",
        steps: [
          "Provide a point and a quote",
          "Ask: 'Why does the writer use this word/phrase?' (not 'What does it mean?')",
          "Model 2-3 explanations for the same quote, showing depth variation",
          "Students write 3 different explanations for one piece of evidence",
          "Discuss which is most analytical"
        ],
        duration: "25 minutes"
      },
      {
        title: "Link Back Practice",
        description: "Students struggle with links. Practice explicitly returning to the essay question.",
        steps: [
          "Write the essay question on board",
          "Students write a paragraph but stop before the final link sentence",
          "On mini-whiteboards, students write a link that explicitly refers back to the question",
          "Share and discuss strongest links",
          "Model the difference between weak and strong links"
        ],
        duration: "15 minutes"
      }
    ],
    recommendedResources: [
      "Colored PEEL poster for classroom",
      "Sentence starter display",
      "Paragraph checklist (Point? Evidence? Explanation x2? Link?)",
      "Example paragraphs at different grade levels"
    ],
    estimatedRecoveryTime: "4-6 weeks with weekly paragraph practice",
    assessmentCheckpoints: [
      "Can identify P/E/E/L in teacher model",
      "Can write paragraph with all four parts present",
      "Can write explanation that goes beyond just defining words",
      "Link sentence explicitly references essay question"
    ]
  },
  {
    id: "no-contextual-knowledge",
    title: "No contextual knowledge affecting comprehension",
    description: "Students lack background about texts, eras, authors, or historical events that prevent deep understanding.",
    diagnosticQuestion: "Why might the writer have included the date 1984 in the title of this novel? What does that year represent?",
    interventionActivities: [
      {
        title: "Context Snap",
        description: "Quick-fire 5-minute sessions pairing contextual facts with text references.",
        steps: [
          "Create 10 context cards (author facts, historical events, cultural references)",
          "Create 10 text reference cards (quotes or scenes that rely on that context)",
          "Students match pairs and explain the link",
          "Display answers and discuss",
          "Repeat with new sets weekly"
        ],
        duration: "5-10 minutes daily"
      },
      {
        title: "Author/Era Documentary",
        description: "Short, focused video/document about author's life or historical setting. Activates schema before text work.",
        steps: [
          "Find 5-minute documentary segment or create 1-page infographic",
          "Students jot down 5 facts as they view",
          "Discuss: 'How might this have influenced the writer?'",
          "Refer back to this context when analyzing text in lessons"
        ],
        duration: "10 minutes + ongoing references"
      },
      {
        title: "Context Question Bank",
        description: "Explicit teaching: give context, ask students to predict its textual impact.",
        steps: [
          "Teach one contextual fact (e.g., 'This poem was written during WWI')",
          "Ask: 'What themes might you expect?' 'What emotions might appear?'",
          "Read the text",
          "Discuss: 'Did the context help you understand the text?'",
          "Repeat for 3-4 contextual points"
        ],
        duration: "20 minutes"
      },
      {
        title: "Context Annotation",
        description: "When analyzing, students mark places where context influences meaning.",
        steps: [
          "Provide text and context information on facing pages",
          "Students read and highlight phrases affected by context",
          "Write brief explanations: 'This is significant because [context]...'",
          "Compare annotations with peers"
        ],
        duration: "25 minutes"
      }
    ],
    recommendedResources: [
      "Author biography posters",
      "Historical timeline for text era",
      "1-page context sheets for each text",
      "YouTube documentaries (BBC Learning, TED, etc.)",
      "Context-to-text connection graphic organizers"
    ],
    estimatedRecoveryTime: "Ongoing throughout study of text (2-3 weeks per text)",
    assessmentCheckpoints: [
      "Can list 5 contextual facts about author/era",
      "Can explain one way context influenced the text",
      "Analysis mentions context without being prompted"
    ]
  },
  {
    id: "cannot-compare-texts",
    title: "Cannot compare texts or construct meaningful links",
    description: "Students struggle with comparative analysis—finding links, contrasts, and thematic connections across texts.",
    diagnosticQuestion: "Compare how two texts present the theme of power. What are key similarities and differences?",
    interventionActivities: [
      {
        title: "Venn Diagram Deep Dive",
        description: "Start simple: overlapping circles force students to think about what's shared vs. unique.",
        steps: [
          "Draw 3 large Venn diagrams on board",
          "Left circle: Unique features of Text A",
          "Right circle: Unique features of Text B",
          "Middle: Shared features",
          "Model filling in one together, then students do independently",
          "Use different lenses: theme, character type, structure, language"
        ],
        duration: "20 minutes per comparison"
      },
      {
        title: "Comparison Sentence Starters",
        description: "Explicit language scaffolds. Students complete sentences comparing texts.",
        steps: [
          "Provide starters: 'Both texts explore... However, Text A suggests... whereas Text B...'",
          "Students complete 5-10 sentences",
          "Peer check for accuracy",
          "Combine into short paragraph",
          "Remove scaffolds gradually"
        ],
        duration: "15 minutes"
      },
      {
        title: "Comparative Close Reading",
        description: "Take one concept (e.g., 'power'). Find how it appears in 2-3 texts. Compare language choices.",
        steps: [
          "Identify theme in all texts",
          "Find 1-2 quotes from each showing this theme",
          "Compare: same word choice? Different tone? Opposite message?",
          "Students write: 'Text A and B both use... but Text A emphasizes... while Text B highlights...'",
          "Discuss: Why might writers make different choices?"
        ],
        duration: "30 minutes"
      },
      {
        title: "Evidence Ranking",
        description: "Give students 6-8 quotes (mix from different texts). Rank by how well they support a comparative point.",
        steps: [
          "State comparative claim: 'Text A celebrates nature more than Text B'",
          "Provide mixed quotes",
          "Students rank quotes by relevance (best evidence vs. weaker)",
          "Write brief comparative paragraph using top 3 quotes"
        ],
        duration: "25 minutes"
      }
    ],
    recommendedResources: [
      "Comparison sentence starter display",
      "Venn diagram templates (blank)",
      "Thematic index linking texts to shared themes",
      "Comparative model essays (low/mid/high grade)"
    ],
    estimatedRecoveryTime: "5-6 weeks with weekly comparison tasks",
    assessmentCheckpoints: [
      "Can identify one similarity and one difference between texts",
      "Can write comparative sentence with evidence from both texts",
      "Comparison discusses effect of the difference on reader"
    ]
  },
  {
    id: "spelling-grammar-errors",
    title: "Spelling and grammar errors losing marks",
    description: "Students make basic spelling, punctuation, and grammar errors that lose marks in formal writing.",
    diagnosticQuestion: "Proofread this paragraph and identify all spelling and grammar mistakes.",
    interventionActivities: [
      {
        title: "Personal Error Log",
        description: "Students track their own recurring errors. Build awareness and muscle memory.",
        steps: [
          "During term, students record every error teacher marks",
          "Organize by type: spelling, comma splice, tense shift, etc.",
          "Review at end of week—identify top 3 recurring errors",
          "Create mini-rules for their top errors",
          "Self-check future work against personal log first"
        ],
        duration: "Ongoing, 5 mins weekly"
      },
      {
        title: "Proofreading Protocol",
        description: "Teach a systematic approach to checking work before submission.",
        steps: [
          "Read work backwards (sentence by sentence) to catch spelling",
          "Re-read forward looking only for punctuation",
          "Check common errors (run-ons, tense consistency, subject-verb agreement)",
          "Use spell-check as final check, not first",
          "Provide checklist poster"
        ],
        duration: "10-15 minutes per written task"
      },
      {
        title: "Error Spot & Fix",
        description: "Give intentionally flawed sentences. Students identify and correct errors.",
        steps: [
          "Write 10 sentences with various errors",
          "Students identify error type and correct it",
          "Model the corrected version",
          "Discuss why the error matters (clarity? formality? credibility?)",
          "Rotate error types weekly"
        ],
        duration: "10 minutes"
      },
      {
        title: "Sentence Reconstruction",
        description: "Jumbled/poorly written sentences. Students rewrite clearly and correctly.",
        steps: [
          "Provide poorly written sentence: 'The character he go to the shop because he want food'",
          "Students rewrite with correct grammar, maintaining meaning",
          "Discuss what was wrong and why the correction works",
          "Model 2-3 options (different ways to fix same error)"
        ],
        duration: "15 minutes"
      },
      {
        title: "Homophones & Tricky Words Game",
        description: "Target specific problem words (their/there/they're, to/too/two, etc.)",
        steps: [
          "Create sentences with blanks: 'The book is _______ (their/there/they're)'",
          "Students choose correct word and explain rule",
          "Create mnemonic aids for difficult distinctions",
          "Weekly 5-minute practice of 5 tricky words"
        ],
        duration: "10 minutes weekly"
      }
    ],
    recommendedResources: [
      "Personal error log template",
      "Proofreading checklist poster",
      "Common mistakes poster (top 10 for this cohort)",
      "Homophones reference sheet",
      "Grammar rules poster (specific to key errors)"
    ],
    estimatedRecoveryTime: "6-8 weeks with consistent application + weekly focus",
    assessmentCheckpoints: [
      "Zero spelling errors in short response",
      "No tense shifts within paragraph",
      "Sentences are complete (no run-ons or fragments)",
      "Punctuation is accurate (commas, apostrophes, etc.)"
    ]
  },
  {
    id: "shallow-textual-analysis",
    title: "Shallow analysis—just summarizing, not interpreting",
    description: "Students retell plot or paraphrase quotes instead of analyzing meaning, effect, and writer's purpose.",
    diagnosticQuestion: "The character says 'I'll never forgive you.' What does this reveal about the character and their relationship?",
    interventionActivities: [
      {
        title: "So What? Because? Deeper Strategy",
        description: "Teach students to push beyond surface-level observations with strategic questioning.",
        steps: [
          "Student makes observation: 'The character is angry'",
          "Teacher prompts: 'So what? Why does that matter?'",
          "Student: 'It shows the relationship is broken'",
          "Teacher: 'Because what? What evidence proves this?'",
          "Student cites evidence and interprets deeper meaning",
          "Create poster with 'So What?' and 'Because?' questions"
        ],
        duration: "Ongoing during whole-class analysis"
      },
      {
        title: "Quote Exploration Matrix",
        description: "Scaffold deep analysis with a structured approach to each piece of evidence.",
        steps: [
          "Provide quote + 5-column chart: Quote | What's Happening? | Why Does Writer Show This? | Effect on Reader | Link to Theme",
          "Model filling in all 5 columns for one quote",
          "Students complete for 2-3 quotes independently",
          "Share and discuss varied interpretations"
        ],
        duration: "20-25 minutes per quote"
      },
      {
        title: "Word-Level Deep Dives",
        description: "Zoom into single word choices and analyze what they reveal.",
        steps: [
          "Highlight one word: 'The woman crept into the room'",
          "Why 'crept' instead of 'walked'? What does it suggest about her state of mind?",
          "How would it change if it said 'strutted'? 'tiptoed'? 'slunk'?",
          "Each word choice reveals the writer's intention",
          "Model with 3-4 examples per lesson"
        ],
        duration: "10-15 minutes"
      },
      {
        title: "Effect on Reader",
        description: "Explicitly teach students to discuss impact, not just identify techniques.",
        steps: [
          "Provide technique identification: 'This is a metaphor'",
          "Ask: 'What does it make you feel? Why? How does it enhance meaning?'",
          "Model answers: 'The metaphor creates...' 'It suggests that...' 'This makes the reader feel...'",
          "Students rewrite analysis focusing on effect rather than definition"
        ],
        duration: "15 minutes"
      }
    ],
    recommendedResources: [
      "'So What? Because?' poster",
      "Quote exploration matrix template",
      "Analytical language display (effect vocabulary)",
      "Model analytical paragraphs at different grades",
      "Word significance checklist"
    ],
    estimatedRecoveryTime: "4-6 weeks with daily brief focus + weekly in-depth practice",
    assessmentCheckpoints: [
      "Analysis goes beyond retelling—discusses meaning",
      "Student explains writer's intention or effect on reader",
      "Analytical vocabulary used appropriately (suggests, creates, reveals, etc.)"
    ]
  },
  {
    id: "poor-topic-sentence-focus",
    title: "Poor topic sentence—unfocused paragraphs",
    description: "Topic sentences are vague, too broad, or missing. Paragraphs lack clear central idea.",
    diagnosticQuestion: "What is the main point of this paragraph? Write it as one sentence.",
    interventionActivities: [
      {
        title: "Topic Sentence Revision",
        description: "Take existing weak paragraphs. Rewrite topic sentences to be clear and specific.",
        steps: [
          "Provide paragraph with weak topic sentence: 'Shakespeare is important'",
          "Read evidence—what's actually being discussed? (e.g., his influence on language)",
          "Rewrite: 'Shakespeare fundamentally changed the English language by introducing over 1,700 words'",
          "Discuss: Which is clearer? Stronger? Why?",
          "Students revise 3-5 of their own weak topic sentences"
        ],
        duration: "20 minutes"
      },
      {
        title: "Topic Sentence Formula",
        description: "Provide structure for writing focused topic sentences.",
        steps: [
          "Formula: [Character/Text/Technique] + [specific observation] + [linked to essay question]",
          "Example: 'Lady Macbeth's ruthlessness in Act 1 reveals how ambition corrupts even the strongest character'",
          "Students write 5 topic sentences using formula",
          "Peer review: Does it clearly state the paragraph's purpose?"
        ],
        duration: "15 minutes"
      },
      {
        title: "Topic Sentence Prediction",
        description: "Read evidence first. Students predict what topic sentence should be.",
        steps: [
          "Show paragraph without topic sentence",
          "Ask: 'What point does this evidence prove?'",
          "Students write predicted topic sentence",
          "Reveal actual topic sentence",
          "Compare and discuss strengths of each version"
        ],
        duration: "15 minutes"
      }
    ],
    recommendedResources: [
      "Topic sentence formula display",
      "Examples of weak vs. strong topic sentences",
      "Topic sentence checklist (Is it specific? Focused? Linked to question?)",
      "Model paragraphs with highlighted topic sentences"
    ],
    estimatedRecoveryTime: "2-3 weeks with daily practice",
    assessmentCheckpoints: [
      "Topic sentence clearly states paragraph's main point",
      "Topic sentence is specific, not vague",
      "All evidence in paragraph supports the topic sentence"
    ]
  },
  {
    id: "weak-quotation-integration",
    title: "Weak quotation integration and selection",
    description: "Students use quotes that don't support their point, or embed them awkwardly without context.",
    diagnosticQuestion: "Choose a quote to support this point: 'The protagonist is deeply flawed.' Why is this the best quote?",
    interventionActivities: [
      {
        title: "Quote Match",
        description: "Give analytical claims and quote options. Students select the best quote and justify.",
        steps: [
          "Claim: 'The writer portrays London as dangerous'",
          "Provide 4 quotes (1 perfect fit, 3 weaker matches)",
          "Students select best and explain why: 'This quote specifically shows...'",
          "Discuss why other quotes are less effective",
          "Repeat with 5-6 different claims"
        ],
        duration: "20 minutes"
      },
      {
        title: "Phrase Over Full Quote",
        description: "Teach students to use specific phrases rather than long quotations.",
        steps: [
          "Show example: Full quote (too long, dilutes analysis)",
          "Show revision: Key phrase embedded ('The writer's description of the street as a 'dark corridor' creates menace')",
          "Model the same with 2-3 examples",
          "Students rewrite their own analysis using shorter, targeted phrases"
        ],
        duration: "15 minutes"
      },
      {
        title: "Context + Quote + Analysis Sandwich",
        description: "Scaffold the full quotation integration process.",
        steps: [
          "Step 1 (Context): Introduce what's happening when character speaks",
          "Step 2 (Quote): Embed relevant phrase naturally",
          "Step 3 (Analysis): Explain what it reveals—don't just define words",
          "Model with one example",
          "Students write 2-3 properly integrated quotes"
        ],
        duration: "25 minutes"
      },
      {
        title: "Quote Annotation",
        description: "For each quote used, students annotate: Why this quote? What does it prove?",
        steps: [
          "Provide essay with embedded quotes",
          "Students write brief note next to each: 'This quote shows that [character trait]'",
          "If note doesn't justify the quote, it shouldn't be there",
          "Encourages deliberate quote selection"
        ],
        duration: "15 minutes"
      }
    ],
    recommendedResources: [
      "Context + Quote + Analysis template",
      "Quote integration sentence starters",
      "Model essay with highlighted and annotated quotes",
      "Quote selection checklist"
    ],
    estimatedRecoveryTime: "3-4 weeks with weekly practice",
    assessmentCheckpoints: [
      "All quotes are relevant to the analytical point",
      "Quotes are integrated smoothly into sentences",
      "Student explains what each quote proves"
    ]
  },
  {
    id: "difficulty-with-inference",
    title: "Difficulty making inferences—sticks to literal meaning",
    description: "Students only understand surface-level meaning. Cannot read between the lines or understand implications.",
    diagnosticQuestion: "The character remains silent when accused. What might this silence suggest about their character?",
    interventionActivities: [
      {
        title: "What's Not Said? Activity",
        description: "Train students to notice what's implied, not stated directly.",
        steps: [
          "Provide simple dialogue with gaps: 'She turned away. 'It doesn't matter,' she whispered.'",
          "Ask: What's left unsaid? What does her silence suggest?",
          "Model inferential thinking: 'She's avoiding the topic, which suggests hurt or shame'",
          "Repeat with 3-4 examples",
          "Students practice with their own extracts"
        ],
        duration: "15 minutes"
      },
      {
        title: "Inference Ladder",
        description: "Scaffold thinking from observation → inference → deeper interpretation.",
        steps: [
          "Observation: 'The character doesn't make eye contact'",
          "Inference: Why might they do this?",
          "Deeper: What does this suggest about their mental state or situation?",
          "Model one example, then students build ladders for 2-3 observations"
        ],
        duration: "20 minutes"
      },
      {
        title: "Symbol & Metaphor Interpretation",
        description: "Symbolic or metaphorical details require inference. Build this skill explicitly.",
        steps: [
          "Identify symbol: 'The garden falls into disrepair'",
          "Ask: What might this represent beyond the literal garden?",
          "Provide sentence starters: 'This symbolizes... because it suggests that...'",
          "Model 2-3 examples from texts",
          "Students interpret symbols in their own texts"
        ],
        duration: "20 minutes"
      },
      {
        title: "Character Motivation Hunt",
        description: "Infer why characters do things (rarely explicit). Build inference muscles.",
        steps: [
          "Provide action: 'He left the room without explanation'",
          "Ask: Why might he do this? Generate 3-4 possibilities",
          "Which fits the character best? Support with evidence",
          "Discuss: What did we infer? What was stated?"
        ],
        duration: "15 minutes"
      }
    ],
    recommendedResources: [
      "Inference ladder graphic organizer",
      "Symbol interpretation template",
      "'What's implied?' checklist",
      "Model inferences from key texts"
    ],
    estimatedRecoveryTime: "4-5 weeks with consistent daily practice",
    assessmentCheckpoints: [
      "Can articulate what's implied (not stated) in a passage",
      "Can support inferences with textual evidence",
      "Discusses meaning beyond surface-level interpretation"
    ]
  },
  {
    id: "weak-essay-openings",
    title: "Weak essay openings—no immediate focus",
    description: "Opening paragraphs are vague, off-topic, or don't address the question directly.",
    diagnosticQuestion: "Write an opening paragraph for this essay question: 'How does the writer present power in this text?'",
    interventionActivities: [
      {
        title: "Opening Sentence Clarity Audit",
        description: "Analyze opening sentences. Strengthen with direct focus.",
        steps: [
          "Weak: 'This novel has many themes'",
          "Strong: 'This novel explores power through the relationship between Prospero and Caliban'",
          "Identify the difference: the strong opening directly addresses the question",
          "Students revise 5 weak opening sentences to be direct and focused"
        ],
        duration: "15 minutes"
      },
      {
        title: "No Scene-Setting Rule",
        description: "Teach students not to waste words. Go straight to the point.",
        steps: [
          "Show weak opening with scene-setting: 'William Shakespeare was born in 1564...'",
          "Show strong: Opens with analytical stance on the essay question",
          "Model 2-3 improvements",
          "Rule: First sentence should address the question or make your position clear"
        ],
        duration: "10 minutes"
      },
      {
        title: "Opening Template",
        description: "Provide structure for writing focused openings.",
        steps: [
          "Template: 'This text explores [topic] through [specific methods]. The writer [central claim].'",
          "Model filling in template for their essay question",
          "Students complete template for their topic",
          "Expand into full opening paragraph"
        ],
        duration: "15 minutes"
      },
      {
        title: "Hook Without Fluff",
        description: "Students want 'hooks.' Teach them to hook with analysis, not random facts.",
        steps: [
          "Weak hook: 'Did you know Shakespeare wrote 37 plays?'",
          "Strong hook: 'From the opening scene, the writer establishes power as violent and corrupting'",
          "Discuss: Which directly addresses the question?",
          "Practice: Write opening sentences that grab attention through insight, not random facts"
        ],
        duration: "15 minutes"
      }
    ],
    recommendedResources: [
      "Opening sentence template display",
      "Strong vs. weak opening examples (graded)",
      "Opening paragraph checklist",
      "Model essays showing strong openings"
    ],
    estimatedRecoveryTime: "2-3 weeks with weekly essay practice",
    assessmentCheckpoints: [
      "Opening sentence directly addresses essay question",
      "No background information or scene-setting in opening",
      "Reader immediately understands your analytical focus"
    ]
  },
  {
    id: "no-exam-exam-technique",
    title: "Poor exam technique—time management and structure",
    description: "Students run out of time, produce unfinished answers, or don't follow exam question demands.",
    diagnosticQuestion: "You have 45 minutes. How would you plan this essay to ensure you finish a complete answer?",
    interventionActivities: [
      {
        title: "Timed Practice with Scaffolds",
        description: "Regular timed writes with support. Builds speed and confidence.",
        steps: [
          "Set timer for actual exam duration (e.g., 45 mins)",
          "Provide question and planning template",
          "Students write under timed conditions",
          "Review: Did they finish? Was structure clear?",
          "Identify time-management issues",
          "Repeat weekly, gradually removing scaffolds"
        ],
        duration: "50 minutes (includes planning and reflection)"
      },
      {
        title: "5-Minute Planning Rule",
        description: "Teach students to spend first 5 minutes planning, not writing.",
        steps: [
          "Show how planning prevents rambling and saves time overall",
          "Model planning: Highlight key words in question, jot 3-4 main points, note evidence",
          "Complete exam question under time pressure with planning",
          "Discuss: Did plan help focus the answer?"
        ],
        duration: "Once, then reinforce in each timed practice"
      },
      {
        title: "Question Command Word Decoder",
        description: "Students often miss what the question actually asks (compare vs. analyze, etc.)",
        steps: [
          "Create display of command words: Compare, Analyze, Evaluate, Discuss, etc.",
          "Define what each requires (compare = two sides; analyze = examine closely, etc.)",
          "In every timed practice, students highlight and define the command word first",
          "Check: Did their answer match the command word's requirement?"
        ],
        duration: "5 minutes per exam practice"
      },
      {
        title: "Section Target Timing",
        description: "Break essay into sections with time targets (intro 10 mins, main body 25 mins, etc.)",
        steps: [
          "Provide timing guide based on marks available",
          "Students add timing targets to their plan",
          "Timed practice: Check time at each section target",
          "Review: Were targets realistic? Did they stay on track?"
        ],
        duration: "Ongoing in timed practices"
      }
    ],
    recommendedResources: [
      "Exam timing guide (question type dependent)",
      "Planning template for exam questions",
      "Command word glossary poster",
      "Exam technique checklist (Do I understand the question? Have I planned?)",
      "Model answers written in exam time limits"
    ],
    estimatedRecoveryTime: "6-8 weeks with weekly timed practice",
    assessmentCheckpoints: [
      "Completes full answer within time limit",
      "Opening addresses the specific question asked",
      "Essay has clear structure (intro, developed body, conclusion)"
    ]
  },
  {
    id: "weak-vocabulary-range",
    title: "Weak vocabulary range limiting expression",
    description: "Students overuse basic words and simple sentence structures. Limited ability to express complex ideas.",
    diagnostionQuestion: "Rewrite this sentence using more precise vocabulary: 'The character is sad about what happened'",
    interventionActivities: [
      {
        title: "Synonym Upgrade Game",
        description: "Replace overused words with more sophisticated alternatives.",
        steps: [
          "Identify overused words in student writing: 'nice,' 'good,' 'bad,' 'sad,' 'happy'",
          "Create a 'banned words' list for the term",
          "Generate 5-10 sophisticated alternatives for each",
          "Students hunt their own writing and upgrade vocabulary",
          "Weekly vocabulary focus: New word introduction + daily use practice"
        ],
        duration: "10 minutes setup, 5 mins daily in writing"
      },
      {
        title: "Academic Phrase Bank",
        description: "Teach phrases that sound analytical and formal (without sounding robotic).",
        steps: [
          "Create display of academic phrases: 'This suggests...,' 'The implication is...,' 'The writer conveys...'",
          "Model using in analytical sentences",
          "Students rewrite their analysis using academic phrases",
          "Discuss: How does language choice affect credibility?"
        ],
        duration: "10 minutes introduction, ongoing use"
      },
      {
        title: "Word Web Construction",
        description: "Teach word families. One concept explored through multiple related words.",
        steps: [
          "Central concept: 'Fear'",
          "Build web: terror, dread, anxiety, apprehension, unease, trepidation",
          "Discuss nuances: Which conveys most intense fear? Which is subtle?",
          "Students create 2-3 word webs for concepts in their text",
          "Practice using precise word from web instead of generic 'fear'"
        ],
        duration: "20 minutes per word web"
      },
      {
        title: "Reading for Vocabulary",
        description: "Deliberate reading practice. Students notice and collect sophisticated vocabulary.",
        steps: [
          "Assign short text passage",
          "Students highlight 5 words they don't know or want to use",
          "Define and note context",
          "Attempt to use 3 in their own analytical writing this week",
          "Share new vocabulary with class"
        ],
        duration: "15 minutes reading + ongoing use"
      }
    ],
    recommendedResources: [
      "Banned words list (cohort-specific)",
      "Synonym posters for overused words",
      "Academic phrase bank display",
      "Subject-specific terminology poster",
      "Word webs for key concepts"
    ],
    estimatedRecoveryTime: "8-10 weeks (vocabulary building is ongoing)",
    assessmentCheckpoints: [
      "Vocabulary is appropriate for formal writing context",
      "Avoids overused basic words",
      "Uses precise words that convey intended nuance"
    ]
  },
  {
    id: "poor-conclusion-writing",
    title: "Poor conclusion writing—repetition or trail-off",
    description: "Conclusions just repeat the introduction or end weakly without synthesis or significance.",
    diagnosticQuestion: "Write a concluding paragraph for this essay that sums up your argument and explains why it matters.",
    interventionActivities: [
      {
        title: "Conclusion as Synthesis, Not Repetition",
        description: "Teach students to synthesize evidence into broader insight, not restate introduction.",
        steps: [
          "Weak conclusion: Just repeats introduction",
          "Strong conclusion: Pulls evidence together to show bigger picture",
          "Model: 'Throughout the text, the writer uses violence to corrupt power. This reveals the author's belief that absolute power is inherently destructive.'",
          "Discuss the difference: synthesis vs. repetition",
          "Students rewrite weak conclusions to synthesize instead of repeat"
        ],
        duration: "20 minutes"
      },
      {
        title: "So What? Why Does It Matter?",
        description: "Conclusions should answer 'Why does your analysis matter?'",
        steps: [
          "After summarizing main points, ask: 'So what? What's the significance?'",
          "Model conclusion sentences: 'This matters because it reveals...,' 'This significance lies in...'",
          "Students write conclusions that address importance/meaning",
          "Peer review: Does it explain why the analysis matters?"
        ],
        duration: "15 minutes"
      },
      {
        title: "Conclusion Checklist",
        description: "Provide structure to prevent weak endings.",
        steps: [
          "Does it reference the essay question?",
          "Does it summarize main points (briefly)?",
          "Does it explain significance or broader implication?",
          "Does it avoid introducing new evidence?",
          "Does it feel complete, not abrupt?",
          "Students self-check conclusions against this list"
        ],
        duration: "10 minutes per essay"
      },
      {
        title: "Final Sentence Strength",
        description: "The last sentence should feel conclusive and powerful.",
        steps: [
          "Weak: 'In conclusion, the writer uses many techniques'",
          "Strong: 'Ultimately, the writer reveals a world where language itself becomes an instrument of control'",
          "Model final sentences that feel authoritative",
          "Students practice rewriting final sentences to end strong"
        ],
        duration: "10 minutes"
      }
    ],
    recommendedResources: [
      "Conclusion template (Reference question + synthesize + significance)",
      "Conclusion checklist",
      "Strong vs. weak conclusion examples",
      "Significance language starter display"
    ],
    estimatedRecoveryTime: "3-4 weeks with each essay assignment",
    assessmentCheckpoints: [
      "Conclusion synthesizes evidence rather than repeating introduction",
      "Student explains significance or broader implication",
      "Final sentence feels conclusive and authoritative"
    ]
  },
  {
    id: "difficulty-writing-creatively",
    title: "Difficulty with creative writing—flat characters, weak dialogue, telling not showing",
    description: "Creative writing lacks vivid detail, dynamic dialogue, and sensory engagement. Over-reliance on telling rather than showing.",
    diagnosticQuestion: "Write a short scene (100 words) showing a character's sadness through action and dialogue, not narration.",
    interventionActivities: [
      {
        title: "Show Don't Tell Revision",
        description: "Identify places where students explain emotion. Replace with action/sensory detail.",
        steps: [
          "Weak: 'She was angry'",
          "Strong: 'Her jaw clenched. She turned away, fists balled, knuckles white.'",
          "Model 3-4 examples of converting telling to showing",
          "Students identify places they 'told' instead of 'showed'",
          "Rewrite 3-5 sentences using action, dialogue, or sensory detail"
        ],
        duration: "25 minutes"
      },
      {
        title: "Dialogue Deep Dive",
        description: "Teach dialogue as characterization and plot advancement, not just information delivery.",
        steps: [
          "Model: Dialogue that reveals character (voice, vocabulary, patterns)",
          "Practice writing dialogue for different character types",
          "Review: Does dialogue sound natural? Does it reveal character?",
          "Common mistake: Dialogue that's just exposition ('As you know, I...')",
          "Rewrite dialogue to make it more natural and character-driven"
        ],
        duration: "30 minutes"
      },
      {
        title: "Sensory Detail Hunt",
        description: "Students identify places where sensory detail would enhance writing.",
        steps: [
          "Provide passage lacking sensory details",
          "Ask: What would the reader see? Hear? Smell? Feel? Taste?",
          "Add 2-3 sensory details to enhance mood and immersion",
          "Model: Compare original vs. sensory-enhanced version",
          "Students add sensory details to their own writing"
        ],
        duration: "20 minutes"
      },
      {
        title: "Character Building Interviews",
        description: "Before writing, students deeply develop characters by answering interview questions.",
        steps: [
          "Ask 10 character questions: What does she want? What's she afraid of? How does she speak?",
          "Students answer in character (helps develop voice)",
          "Use these character insights to make choices in narrative",
          "Write scenes that reveal this character detail by detail"
        ],
        duration: "20 minutes planning per character"
      }
    ],
    recommendedResources: [
      "'Show Don't Tell' revision checklist",
      "Character interview template",
      "Sensory detail prompt cards",
      "Model stories with highlighted sensory language",
      "Dialogue style guides"
    ],
    estimatedRecoveryTime: "6-8 weeks with regular creative writing assignments",
    assessmentCheckpoints: [
      "Uses action and dialogue to show emotion, not narration",
      "Dialogue sounds natural and reveals character",
      "Writing includes sensory details that enhance mood"
    ]
  }
];

// Second part continues below due to length...

// ============================================================================
// 2. LESSON IDEAS BANK - 50 Quick Teaching Activities
// ============================================================================

export const lessonIdeasBank: LessonIdea[] = [
  // ---- STARTER ACTIVITIES (15 starters: 5-minute engagement hooks)
  {
    id: "starter-quote-prediction",
    title: "Quote Prediction",
    description: "Show a provocative quote from the text without context. Students predict who said it, when, and why. Builds anticipation and engages prior knowledge.",
    duration: "5 minutes",
    suitableFor: ["KS3", "GCSE"],
    resourcesNeeded: ["Quote slide", "whiteboard"],
    differentiation: "Give struggling students 2-3 character options. Push others to predict mood/scene details."
  },
  {
    id: "starter-vocabulary-sprint",
    title: "Vocabulary Sprint",
    description: "Display 5 subject-specific words. Students write definitions in their own words (30 seconds each). Quick activation of key concepts.",
    duration: "5 minutes",
    suitableFor: ["KS3", "GCSE"],
    resourcesNeeded: ["Word slides", "mini-whiteboards"],
    differentiation: "KS3: Use words from upcoming lesson. GCSE: Use advanced synonyms requiring nuance."
  },
  {
    id: "starter-statement-agree-disagree",
    title: "Statement: Agree/Disagree/Unsure",
    description: "Display a bold statement about the text/topic. Students position themselves physically (corners of room) or use thumbs up/down. Creates discussion opener.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Statement slide", "space to move"],
    differentiation: "Provide reasoning sentence-starters for explanations."
  },
  {
    id: "starter-image-analysis",
    title: "Image Analysis Speed Round",
    description: "Show an image related to text/theme. 30 seconds silent observation, then popcorn share observations. Activates visual literacy.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Relevant image", "projector"],
    differentiation: "Provide question prompts for struggling students (What's the mood? Who might this be?)."
  },
  {
    id: "starter-previous-lesson-recall",
    title: "Last Lesson: Quick Recall",
    description: "Display 3 questions about previous lesson content. Students write answers on mini-whiteboards. Checks understanding and builds momentum.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Question slide", "mini-whiteboards"],
    differentiation: "Mix recall and inference questions for mixed ability."
  },
  {
    id: "starter-word-cloud-generate",
    title: "Word Cloud: Character/Theme",
    description: "Display a character/theme name. Students shout words that come to mind. Write all on board (or use Wordle generator). Quick mood-setting.",
    duration: "5 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Whiteboard", "markers"],
    differentiation: "Introduce character with brief context if unfamiliar."
  },
  {
    id: "starter-mystery-character",
    title: "Mystery Character",
    description: "Describe a character without naming them. Students guess who based on description. Builds familiarity and engagement.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Character descriptions printed/displayed"],
    differentiation: "Give struggling students multiple choice options."
  },
  {
    id: "starter-comparison-quick",
    title: "Quick Comparison: Then vs. Now",
    description: "Display two versions of something (character at start vs. end of text, old social custom vs. modern). Students spot differences quickly.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Comparison images/quotes"],
    differentiation: "Provide frame: 'In the past... now... This shows...'"
  },
  {
    id: "starter-emotion-scale",
    title: "Emotion on a Scale",
    description: "Display a moment from text. Students place it on 1-10 scale (scary-safe, hopeful-bleak, etc.). Quick gauge of emotional literacy.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Scene description", "number line on board"],
    differentiation: "Discuss reasoning for varied placements."
  },
  {
    id: "starter-three-truths-one-lie",
    title: "Three Truths, One Lie",
    description: "State 4 facts about text (3 true, 1 false). Students vote on which is false. Reinforces knowledge checkpoints.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Prepared statements"],
    differentiation: "Adjust difficulty of false statement for ability level."
  },
  {
    id: "starter-caption-cartoon",
    title: "Caption the Scene",
    description: "Show a scene-relevant illustration without caption. Students write their own captions individually or in pairs. Creative and quick.",
    duration: "5 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Illustration/cartoon image"],
    differentiation: "Provide word bank for struggling students."
  },
  {
    id: "starter-dialect-or-register",
    title: "Spot the Accent/Register",
    description: "Read an extract aloud with different character voices/accents. Students identify the character or register shift. Builds listening skills.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Text extract", "your voice"],
    differentiation: "Exaggerate accents/register shifts for KS3."
  },
  {
    id: "starter-author-biography-teaser",
    title: "Author Biography Speed Facts",
    description: "Share 2-3 surprising facts about the author. Students predict how these might influence the text. Activates biographical context.",
    duration: "5 minutes",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Author fact cards"],
    differentiation: "Provide facts; ask students to link to text independently."
  },
  {
    id: "starter-text-message-dialogue",
    title: "Translate to Text/Tweet",
    description: "Display formal dialogue from text. Students translate to modern text/tweet language. Highlights language change and character.",
    duration: "5 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Dialogue excerpt"],
    differentiation: "Provide sentence frames for translation."
  },
  {
    id: "starter-what-would-you-do",
    title: "What Would You Do? Dilemma",
    description: "Pose a moral dilemma a character faces. Students decide quickly what they'd do. Sets up character study and ethical discussion.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Dilemma description"],
    differentiation: "Ask: Why did the character choose differently?"
  },

  // ---- MAIN CLASSROOM ACTIVITIES (20 differentiated activities)
  {
    id: "main-jigsaw-reading",
    title: "Jigsaw Reading",
    description: "Divide text into 4-5 sections. Assign each group a section. They become 'experts,' then reform groups with one expert from each section. Covers whole text efficiently.",
    duration: "30-40 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Text divided into sections", "worksheet with questions for each section"],
    differentiation: "Assign easier sections to lower ability groups. Provide guided questions for some groups."
  },
  {
    id: "main-character-hot-seat",
    title: "Hot Seat: Interview a Character",
    description: "One student (or you) sits as a character. Others ask questions. Character answers in-role. Builds empathy and deep character understanding.",
    duration: "20-30 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Chair", "question cards (optional)"],
    differentiation: "Provide character knowledge cards for student in hot seat. Scaffold questions for less experienced students."
  },
  {
    id: "main-debate-resolution",
    title: "Debate: Text-Based Resolution",
    description: "State a resolution: 'Character X was justified in their actions.' Half argue for, half against. Use textual evidence.",
    duration: "35-40 minutes",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Resolution statement", "whiteboard for evidence tracking"],
    differentiation: "Provide evidence cards for lower ability students. Ask higher ability to find counter-evidence."
  },
  {
    id: "main-close-reading-pair-work",
    title: "Paired Close Reading with Annotation",
    description: "Pairs read short passage together. Highlight/annotate for: language techniques, key words, character voice, mood shifts. Discuss findings.",
    duration: "25-30 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Passage printout or slides", "highlighters/colored pens"],
    differentiation: "Provide annotation prompt cards for struggling pairs (What mood word appears? What technique is used?)."
  },
  {
    id: "main-creative-rewrite",
    title: "Creative Rewrite: Change a Scene",
    description: "Take a key scene. Rewrite from different perspective, in different genre, with different ending. Deepens understanding through creative lens.",
    duration: "35 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Original scene", "writing templates (optional)"],
    differentiation: "Provide frame for rewrite. Ask higher ability to explain how change affects meaning."
  },
  {
    id: "main-comparison-matrix",
    title: "Comparison Matrix: Two Texts/Characters",
    description: "Create matrix: rows = characters/texts, columns = themes/techniques/actions. Fill in examples. Visual comparison building.",
    duration: "30-35 minutes",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Matrix template", "texts/character summaries"],
    differentiation: "Pre-fill some boxes for lower ability. Ask higher ability to rank similarities/differences by significance."
  },
  {
    id: "main-vocabulary-game-taboo",
    title: "Vocabulary Game: Taboo or Pictionary",
    description: "Students describe/draw vocabulary words without saying the word. Others guess. Fun, repeated vocabulary exposure.",
    duration: "20-25 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Vocabulary cards", "whiteboard/paper for drawings"],
    differentiation: "Use advanced vocabulary for high ability. Provide images for struggling students in Pictionary."
  },
  {
    id: "main-mini-essay-timed-write",
    title: "Mini Essay: Timed Write (45 mins)",
    description: "Full exam-style question with planning time. Students write under timed conditions. Builds stamina and technique.",
    duration: "50 minutes (5 plan + 40 write + 5 review)",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Essay question", "planning template", "timer"],
    differentiation: "Provide sentence starters for lower ability. Ask higher ability to peer-check for analysis depth."
  },
  {
    id: "main-image-text-pairing",
    title: "Match Images to Text Moments",
    description: "Display 6-8 images without captions. Students match to key moments in text, explaining their choices.",
    duration: "20-25 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Curated images", "text references"],
    differentiation: "Provide page numbers/summaries for lower ability. Ask higher ability to create images for alternate moments."
  },
  {
    id: "main-dialogue-craft",
    title: "Writing Dialogue: Skill Focus",
    description: "Model effective dialogue (natural, reveals character, advances plot). Students write conversation between two characters, applying techniques.",
    duration: "30 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Model dialogue", "dialogue guidelines poster", "writing paper"],
    differentiation: "Provide sentence starters and character context. Ask higher ability to add stage directions revealing emotion."
  },
  {
    id: "main-theme-web",
    title: "Theme Web: Evidence Collection",
    description: "Central circle = theme. Outer circles = examples from text (quotes, scenes, character actions). Visual consolidation of theme understanding.",
    duration: "30-35 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Large paper/whiteboard", "markers", "text references"],
    differentiation: "Provide starter examples for lower ability. Ask higher ability to rank evidence by significance."
  },
  {
    id: "main-perspective-shift-writing",
    title: "Perspective Shift: Rewrite in Different Voice",
    description: "Rewrite scene from different character's perspective or as interior monologue. Deepens empathy and understanding of multiple viewpoints.",
    duration: "30 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Original scene", "writing template"],
    differentiation: "Provide character thoughts/motivations for struggling students. Ask higher ability to explain how perspective changes interpretation."
  },
  {
    id: "main-annotate-complex-passage",
    title: "Deep Annotation: Language & Context",
    description: "Display complex passage. Model detailed annotation noting: word choice, techniques, historical context, author's purpose. Students annotate similarly.",
    duration: "25-30 minutes",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Complex passage", "annotation key/legend"],
    differentiation: "Provide annotation prompts. Ask higher ability to link annotations to essay question."
  },
  {
    id: "main-fact-or-interpretation",
    title: "Fact vs. Interpretation: Sort Activity",
    description: "Display statements about text (some factual, some interpretive). Students sort into columns. Builds critical thinking about evidence vs. analysis.",
    duration: "20-25 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Statement cards", "two-column poster"],
    differentiation: "Provide definitions of fact vs. interpretation. Ask higher ability to convert facts into interpretive statements."
  },
  {
    id: "main-socratic-seminar-circle",
    title: "Socratic Seminar: Student-Led Discussion",
    description: "Arrange in circle. Students ask questions, respond to each other's ideas. Teacher facilitates, not dictates. Builds critical discussion.",
    duration: "35-40 minutes",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Discussion question", "student preparation"],
    differentiation: "Provide question cards for quieter students. Ask higher ability to pose follow-up questions that deepen thinking."
  },
  {
    id: "main-storyboard-visual-summary",
    title: "Storyboard: Visual Summary of Events",
    description: "Divide text into 6-8 key moments. Students draw/describe each in sequence. Visual consolidation and sequencing practice.",
    duration: "30 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Storyboard template", "colored pencils"],
    differentiation: "Provide images to sequence for lower ability. Ask higher ability to add captions explaining significance of each moment."
  },
  {
    id: "main-irony-spotting-hunt",
    title: "Irony Hunt: Find 3 Examples",
    description: "Students search text for irony (situational, verbal, dramatic). Record with explanation of why it's ironic. Builds sophisticated understanding.",
    duration: "25-30 minutes",
    suitableFor: ["GCSE"],
    resourcesNeeded: ["Text access", "irony definition poster"],
    differentiation: "Provide page references for lower ability. Ask higher ability to analyze effect of irony on reader/meaning."
  },
  {
    id: "main-writing-analysis-paragraph",
    title: "Scaffolded Analysis Paragraph Writing",
    description: "Provide: claim, quote, and analysis starters. Students complete PEEL paragraph. Builds analytical writing muscle.",
    duration: "20-25 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["PEEL template with scaffolding"],
    differentiation: "Provide more detailed scaffolds for lower ability. Ask higher ability to remove scaffolds for second paragraph."
  },

  // ---- PLENARY ACTIVITIES (15 review/synthesis activities)
  {
    id: "plenary-exit-ticket",
    title: "Exit Ticket: One Thing Learned",
    description: "Students write one thing they learned today and one remaining question. Checks understanding and informs next lesson.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Exit ticket template or card"],
    differentiation: "Scaffold sentence starters for lower ability."
  },
  {
    id: "plenary-quiz-show-style",
    title: "Quiz Show: Team Challenge",
    description: "Two teams compete. Quick questions about lesson. Fun recap and engagement booster.",
    duration: "10 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Quiz questions", "scoreboard"],
    differentiation: "Mix easy and hard questions. Award points for reasoning, not just correct answers."
  },
  {
    id: "plenary-summary-sentence-building",
    title: "Build the Summary Sentence",
    description: "Display sentence with blanks. Students complete with key terms/ideas from lesson. Co-creates lesson summary.",
    duration: "5 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Sentence template with blanks"],
    differentiation: "Provide word bank for lower ability. Ask higher ability to create their own summary sentence."
  },
  {
    id: "plenary-whip-around",
    title: "Whip Around: Quick Fire Answers",
    description: "Pose a question. Go around the room, each student gives one-word or brief answer. Builds participation and consolidation.",
    duration: "5-10 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Focus question"],
    differentiation: "Pass option available. Scaffold responses for struggling students (or accept their idea even if imperfect)."
  },
  {
    id: "plenary-reflection-thinking-pair-share",
    title: "Reflection: Think-Pair-Share",
    description: "Reflect individually (2 mins). Discuss with partner (2 mins). Share with class (1 min). Deepens metacognitive thinking.",
    duration: "5-7 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Reflection prompt"],
    differentiation: "Prompt examples: 'What was hardest? How did we solve it?'"
  },
  {
    id: "plenary-mud-map",
    title: "Mud, Glitter, Gold",
    description: "Students write: Mud (unclear concept), Glitter (interesting discovery), Gold (something valuable learned). Honest feedback.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Mud-Glitter-Gold template"],
    differentiation: "Visual format works for all abilities."
  },
  {
    id: "plenary-concept-connection",
    title: "Connect Today to Previous Learning",
    description: "Display today's focus. Students name one connection to previous lessons or their own life. Builds schema.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Visual of today's learning"],
    differentiation: "Provide sentence starters."
  },
  {
    id: "plenary-quiz-yourself",
    title: "Self-Quiz: Check Your Learning",
    description: "Display 3-5 quick questions. Students answer to self-assess. Enables reflection on progress.",
    duration: "5-7 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Quiz slide"],
    differentiation: "Vary difficulty of questions by ability."
  },
  {
    id: "plenary-peer-teach-one-minute",
    title: "Peer Teaching: Explain to a Partner",
    description: "Each student teaches their partner one key idea from the lesson in one minute. Consolidates learning through teaching.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Focus concept"],
    differentiation: "Provide sentence frame: 'Today we learned... The most important part is... because...'"
  },
  {
    id: "plenary-gallery-walk-review",
    title: "Gallery Walk: Review Student Work",
    description: "Display student work around room. Class walks and views others' annotations/answers/diagrams. Celebrates learning.",
    duration: "8-10 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Student work displayed", "sticky notes for comments"],
    differentiation: "Peers leave positive comments on sticky notes."
  },
  {
    id: "plenary-one-word-summary",
    title: "One-Word Summary",
    description: "Each student suggests one word summarizing today's learning. Create word cloud or list. Synthesizes lesson into essence.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Whiteboard or Wordle generator"],
    differentiation: "Ask: 'Why did you choose that word?'"
  },
  {
    id: "plenary-traffic-light-understanding",
    title: "Traffic Light Self-Assessment",
    description: "Green = confident, Amber = okay, Red = need help. Students indicate against learning objectives. Targets intervention.",
    duration: "3-5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Learning objectives displayed", "red/amber/green cards or hand signals"],
    differentiation: "Follow up with red-card students in next lesson or immediately if possible."
  },
  {
    id: "plenary-future-prediction",
    title: "Predict What Happens Next",
    description: "For ongoing texts: students predict next plot turn or character action. Builds anticipation and hooks next lesson.",
    duration: "5 minutes",
    suitableFor: ["KS3"],
    resourcesNeeded: ["Current story moment"],
    differentiation: "Ask: 'What evidence supports your prediction?'"
  },
  {
    id: "plenary-question-to-friend",
    title: "Question to Your Friend",
    description: "Students write one question they'd ask a friend about today's topic. Frames learning for ongoing conversation.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Question template"],
    differentiation: "Scaffold question type: 'Why...?', 'What if...?', 'How would you...?'"
  },
  {
    id: "plenary-homework-preview",
    title: "Homework Preview & Purpose",
    description: "Explain homework, model first question, explain how it connects to lesson. Clear expectations.",
    duration: "5 minutes",
    suitableFor: ["both"],
    resourcesNeeded: ["Homework task", "whiteboard to model"],
    differentiation: "Provide partially completed example for lower ability."
  }
];

// Third section continues below due to length...

// ============================================================================
// 3. HOMEWORK BANK - 30 Tasks (KS3 & GCSE)
// ============================================================================

export const homeworkBank: HomeworkTask[] = [
  {
    id: "hw-01-vocabulary-context-sentences",
    title: "Vocabulary: Write Sentences with Context",
    description: "Write 5 sentences using subject vocabulary words correctly in context. Each sentence must demonstrate understanding of word meaning.",
    estimatedTime: "15-20 minutes",
    markingGuidance: "Award 1 mark per correct usage. Sentence must be accurate and show meaning understanding (not just define the word).",
    modelAnswer: "Word: 'Ambiguous' - Example: 'The character's motives remain ambiguous throughout the play, leaving readers unsure of his true intentions.'",
    suitableFor: "both"
  },
  {
    id: "hw-02-paragraph-analysis-quote",
    title: "Analyze One Quote (PEEL paragraph)",
    description: "Write a paragraph analyzing a provided quote using PEEL structure: Point, Evidence, Explanation, Link. Minimum 150 words.",
    estimatedTime: "20-25 minutes",
    markingGuidance: "Point (clear) = 2 marks, Evidence (relevant & integrated) = 2 marks, Explanation (analytical, not just definition) = 3 marks, Link (references question) = 1 mark. Total = 8 marks.",
    modelAnswer: "Point: The character's silence reveals his shame. Evidence: After the accusation, 'He turned away, offering no defense.' Explanation: The writer's choice of 'turned away' suggests the character cannot face his accusers, implying guilt or moral weakness. This also reveals how power operates—the silent character is seen as weak. Link: This supports the essay's theme that power is defined by voice and visibility.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-03-character-study-profile",
    title: "Character Profile: Create a Character Bio",
    description: "Create a detailed profile of an assigned character including: appearance, personality, key actions, relationships, development. Use evidence from text.",
    estimatedTime: "25-30 minutes",
    markingGuidance: "Completeness of details = 3 marks, Evidence from text = 4 marks, Understanding of development/change = 3 marks. Total = 10 marks.",
    modelAnswer: "Name: Lady Macbeth | Initial Appearance: Ambitious, strong-willed, mentally sharp | Development: Begins as manipulator of Macbeth, convinces him to kill Duncan. Later, guilt manifests in sleepwalking and eventual suicide. | Key Quote: 'Out, damned spot!' reveals internal psychological breakdown.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-04-theme-evidence-collection",
    title: "Theme Tracking: Collect 5 Textual References",
    description: "Choose a theme (power, love, ambition, identity). Find 5 moments where this theme appears. Record: scene, quote/description, how it shows the theme.",
    estimatedTime: "20 minutes",
    markingGuidance: "Relevance of references = 5 marks, Accuracy of scene location = 3 marks, Explanation of thematic link = 2 marks. Total = 10 marks.",
    modelAnswer: "Theme: Power | Reference 1 - Scene: Opening | Quote: 'Now is the winter of our discontent' | How it shows theme: The language immediately establishes power struggle and political disorder.",
    suitableFor: "both"
  },
  {
    id: "hw-05-creative-diary-entry",
    title: "Creative Writing: Character Diary Entry",
    description: "Write a diary entry from a character's perspective (200-250 words) capturing their thoughts/emotions at a key moment in the text.",
    estimatedTime: "25-30 minutes",
    markingGuidance: "Voice/characterization = 3 marks, Textual knowledge (accurate to scene/moment) = 3 marks, Writing quality (varied sentences, vocabulary) = 2 marks, Length = 1 mark. Total = 9 marks.",
    modelAnswer: "Dear Diary, Today I did something I never thought I'd do. He asked me to choose—family or love. My hands shook as I made my choice. I said his name, not theirs. What have I become?",
    suitableFor: "KS3"
  },
  {
    id: "hw-06-comparison-write-paragraph",
    title: "Comparison: Write Comparative Paragraph",
    description: "Write a paragraph comparing how two texts treat the same theme/character type. Use embedded quotes from both texts.",
    estimatedTime: "25-30 minutes",
    markingGuidance: "Identification of similarity/difference = 2 marks, Evidence from both texts = 4 marks, Analytical link = 2 marks, Conclusion about significance = 2 marks. Total = 10 marks.",
    modelAnswer: "Both texts explore power through conflict, but they present different models. Text A shows power as violent and corrupting ('He seized control'). Text B presents power as subtle and linguistic ('Her words controlled the room'). This reveals two views: power as physical force vs. power as influence.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-07-close-reading-annotate",
    title: "Close Reading: Annotate Provided Passage",
    description: "Annotate a provided short passage (10-15 lines) marking: techniques, word choices, tone shifts, mood. Write brief explanations for each annotation.",
    estimatedTime: "15-20 minutes",
    markingGuidance: "Identification of devices = 4 marks, Accuracy of explanations = 4 marks, Link to effect/meaning = 2 marks. Total = 10 marks.",
    modelAnswer: "[On text: 'The room fell silent'] Annotation: Semantic field of silence/absence—creates tension and unease. Implies power shift: whoever breaks silence has power.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-08-author-research-biography",
    title: "Author Research: Find 3 Biographical Facts",
    description: "Research the author and find 3 biographical facts that might have influenced the text. Explain the possible connection for each.",
    estimatedTime: "20-25 minutes",
    markingGuidance: "Accuracy of facts = 3 marks, Quality of sources = 2 marks, Thoughtfulness of connections to text = 5 marks. Total = 10 marks.",
    modelAnswer: "Fact: Author lived during period of war. Connection: Text includes themes of conflict and loss. This reflects his lived experience and gives authenticity to emotional scenes.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-09-imagery-analysis-extended",
    title: "Imagery Analysis: Track One Image Pattern",
    description: "Identify one recurring image (e.g., light/darkness, water, cages). Find 3-4 instances. Explain what the pattern suggests about meaning.",
    estimatedTime: "25 minutes",
    markingGuidance: "Identification of image = 2 marks, Location of 3+ instances = 3 marks, Pattern interpretation = 4 marks, Conclusion about significance = 1 mark. Total = 10 marks.",
    modelAnswer: "Image: Light. Instance 1: 'A beam of light through the window.' Instance 2: 'His face darkened.' Instance 3: 'Hope flickered.' Pattern: Light represents hope/truth. Darkness represents despair/ignorance. The text suggests that enlightenment is fleeting.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-10-essay-planning-graphic-organizer",
    title: "Essay Planning: Complete Graphic Organizer",
    description: "Plan an essay response to a given question using provided graphic organizer (thesis, 3 main points with evidence, conclusion idea).",
    estimatedTime: "15-20 minutes",
    markingGuidance: "Thesis clarity = 2 marks, Relevance of 3 points = 4 marks, Evidence selection = 3 marks, Logical organization = 1 mark. Total = 10 marks.",
    modelAnswer: "Question: How does the writer present ambition? | Thesis: The writer shows ambition as corrupting and destructive. | Point 1: Protagonist's ambition leads to moral compromise (evidence: specific quote). | Point 2: Ambition isolates him from family (evidence: specific scene).",
    suitableFor: "GCSE"
  },
  {
    id: "hw-11-vocabulary-word-web",
    title: "Vocabulary: Create Word Web for One Concept",
    description: "Choose a key concept (e.g., 'fear,' 'power,' 'love'). Create a word web showing related words, antonyms, synonyms, and example usage in text.",
    estimatedTime: "15 minutes",
    markingGuidance: "Center word = 1 mark, Related words (5+) = 3 marks, Connections/relationships shown = 3 marks, Text references = 3 marks. Total = 10 marks.",
    modelAnswer: "Center: POWER | Related: Control, Dominance, Authority, Influence, Weakness (antonym) | Text reference: In Act 2, 'power' appears in contexts of both violent seizing and subtle influence.",
    suitableFor: "both"
  },
  {
    id: "hw-12-discussion-question-response",
    title: "Discuss: Written Response to Big Question",
    description: "Respond to an open-ended discussion question (e.g., 'Is this character a hero or villain?'). Present a clear position with supporting evidence.",
    estimatedTime: "20 minutes",
    markingGuidance: "Clear position = 2 marks, Supporting evidence (2+) = 4 marks, Acknowledgment of alternative view = 2 marks, Conclusion = 2 marks. Total = 10 marks.",
    modelAnswer: "Question: Is Character X sympathetic? My position: Yes, despite his actions. Evidence 1: His background reveals difficult circumstances. Evidence 2: His internal conflict is shown through soliloquy. Counterpoint: Some might argue his violence is unforgivable. My conclusion: Understanding is not the same as approval.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-13-short-creative-rewrite",
    title: "Creative: Rewrite a Scene (50-75 words)",
    description: "Rewrite a key scene from a different character's perspective, in a different genre, or with a different ending (brief: 50-75 words).",
    estimatedTime: "20-25 minutes",
    markingGuidance: "Accuracy to original scene = 2 marks, Creative choice clearly shown = 3 marks, Writing quality = 2 marks, Word count = 1 mark. Total = 8 marks.",
    modelAnswer: "Original: Character leaves without explanation. Rewrite (from her perspective): 'I had to leave. His face would break my resolve, and I'd never find the strength to do what must be done. One foot in front of the other. Don't look back.'",
    suitableFor: "KS3"
  },
  {
    id: "hw-14-language-technique-identification",
    title: "Identify Techniques in Unseen Text",
    description: "Provided a short unseen text passage, identify and name 5 language techniques and briefly explain the effect of each.",
    estimatedTime: "15-20 minutes",
    markingGuidance: "Correct identification = 2 marks, Accurate naming = 2 marks, Effect explanation = 6 marks. Total = 10 marks.",
    modelAnswer: "Technique 1: Metaphor - 'Heart of stone' - shows emotional hardness. Technique 2: Alliteration - 'Silent shadow' - creates eerie mood.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-15-source-comparison-plan",
    title: "Plan a Comparative Answer (Two Texts)",
    description: "Plan (don't write full answer) a response comparing how two texts approach a similar theme/technique. Include thesis and 3 comparison points.",
    estimatedTime: "15-20 minutes",
    markingGuidance: "Thesis comparing both = 2 marks, 3 clear points = 4 marks, Evidence selection = 3 marks, Awareness of differences = 1 mark. Total = 10 marks.",
    modelAnswer: "Thesis: Both texts explore power, but Text A emphasizes violence while Text B emphasizes rhetoric. | Point 1: Power expressed as violence (A) vs. words (B). | Point 2: Protagonist's success/failure linked to each approach. | Point 3: Reader sympathy differs based on method.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-16-character-relationship-map",
    title: "Create Character Relationship Map",
    description: "Draw/create a diagram showing key characters and the relationships between them (allies, enemies, complex). Add brief notes on how relationships change.",
    estimatedTime: "20 minutes",
    markingGuidance: "All major characters included = 2 marks, Accuracy of relationships = 4 marks, Notes on change/complexity = 3 marks, Visual clarity = 1 mark. Total = 10 marks.",
    modelAnswer: "[Visual diagram with characters as nodes] A ←→ B (allies, become enemies) | A → C (power dynamic, C dominated)",
    suitableFor: "KS3"
  },
  {
    id: "hw-17-proofreading-exercise",
    title: "Proofreading: Correct Given Text",
    description: "Provided text with 10 deliberate errors (spelling, grammar, punctuation). Identify and correct all errors. Explain the rule for each.",
    estimatedTime: "15 minutes",
    markingGuidance: "Identification = 5 marks, Correction = 3 marks, Rule explanation = 2 marks. Total = 10 marks.",
    modelAnswer: "Error: 'Their going to the store' | Correction: 'They're going to the store' | Rule: They're = they are (contraction); their = possessive.",
    suitableFor: "KS3"
  },
  {
    id: "hw-18-context-research-sheet",
    title: "Research: Complete Context Information Sheet",
    description: "Fill in provided sheet with research on text's historical/cultural context: dates, events, social norms, author details, relevant to text understanding.",
    estimatedTime: "25-30 minutes",
    markingGuidance: "Completeness = 3 marks, Accuracy = 4 marks, Relevance to text = 3 marks. Total = 10 marks.",
    modelAnswer: "Text written: 1818 | Historical context: Post-Napoleonic War anxiety | Social norms: Women's limited agency | Relevance: These anxieties appear as themes of power and control in the novel.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-19-paragraph-reversal",
    title: "Improve Weak Paragraph: Revise & Rewrite",
    description: "Given a weak analytical paragraph, rewrite it improving: topic sentence clarity, evidence integration, explanation depth, link to question.",
    estimatedTime: "20 minutes",
    markingGuidance: "Topic sentence improvement = 2 marks, Evidence integration = 2 marks, Explanation depth = 3 marks, Link quality = 2 marks, Writing flow = 1 mark. Total = 10 marks.",
    modelAnswer: "Weak: 'Shakespeare uses metaphors. Metaphors help the reader understand better. This is important.' Strong: 'Through the metaphor of disease pervading the state of Denmark, Shakespeare reveals how corruption spreads insidiously, infecting every level of society. This extended image suggests that rot cannot be contained—it will ultimately destroy the entire body politic.'",
    suitableFor: "GCSE"
  },
  {
    id: "hw-20-timed-mini-write",
    title: "Timed Writing: 20-Minute Essay",
    description: "Answer an essay question in 20 minutes (shorter practice run). Focus on clear structure and time management. Plan for 3 mins, write for 15 mins, review for 2 mins.",
    estimatedTime: "25 minutes",
    markingGuidance: "Structure = 2 marks, Evidence use = 3 marks, Analysis quality = 3 marks, Completion/length = 2 marks. Total = 10 marks.",
    modelAnswer: "[Full essay response following exam-style structure]",
    suitableFor: "GCSE"
  },
  {
    id: "hw-21-creative-dialogue-writing",
    title: "Write Dialogue: Original Conversation",
    description: "Write a 150-200 word dialogue between two characters (given or your choice) that reveals character voice and advances understanding.",
    estimatedTime: "20-25 minutes",
    markingGuidance: "Character differentiation (distinct voices) = 3 marks, Natural dialogue flow = 2 marks, Reveals character insight = 3 marks, Writing quality = 2 marks. Total = 10 marks.",
    modelAnswer: "'You knew, didn't you?' 'I suspected.' 'And did nothing.' 'What could I do?' The question hung between them, heavy as the silence that followed. [continues to show conflict through dialogue]",
    suitableFor: "KS3"
  },
  {
    id: "hw-22-symbol-significance",
    title: "Analyze One Symbol's Significance",
    description: "Choose one object/image that functions symbolically in the text. Find 2-3 instances. Explain what it symbolizes and its significance to overall meaning.",
    estimatedTime: "20 minutes",
    markingGuidance: "Symbol identification = 2 marks, 2-3 instances located = 3 marks, Symbolic meaning = 3 marks, Significance to theme = 2 marks. Total = 10 marks.",
    modelAnswer: "Symbol: The rose | Instance 1: Given as love token. Instance 2: Crushed underfoot. Instance 3: Referenced as decayed. Meaning: Beauty and love, and their fragility. Significance: The recurring destruction of the rose mirrors the text's theme of beauty destroyed by violence.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-23-tone-analysis-passage",
    title: "Analyze Tone in Given Passage",
    description: "Read provided passage. Identify the tone and explain how the writer creates it through word choice, punctuation, sentence structure.",
    estimatedTime: "15-20 minutes",
    markingGuidance: "Tone identification = 2 marks, Device identification = 3 marks, Effect explanation = 4 marks, Link to meaning = 1 mark. Total = 10 marks.",
    modelAnswer: "Tone: Menacing/ominous | How created: Short, punchy sentences ('He arrived.' 'She stared.') create tension. Descriptive words ('dark,' 'cold') establish dread. Repetition of 'wait' emphasizes anticipation. These choices make the reader feel uneasy, mirroring the character's anxiety.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-24-perspective-analysis",
    title: "How Does Perspective/Narration Shape Understanding?",
    description: "Analyze how the text's narrative perspective (first person, third person, unreliable narrator?) shapes reader understanding and interpretations.",
    estimatedTime: "20-25 minutes",
    markingGuidance: "Understanding of narrative perspective = 2 marks, Evidence from text = 3 marks, Analysis of how it shapes meaning = 4 marks, Conclusion = 1 mark. Total = 10 marks.",
    modelAnswer: "The text uses an unreliable first-person narrator who misrepresents events. This forces readers to read between the lines and question the narrator's truthfulness. We must reconstruct 'truth' from contradictions. This technique implicates readers in the narrator's moral confusion.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-25-reading-journal-entry",
    title: "Reading Journal: Reflective Entry",
    description: "Write a reflective journal entry (250+ words) responding to recent reading: What moved you? What confused you? What do you predict? What questions do you have?",
    estimatedTime: "20-25 minutes",
    markingGuidance: "Evidence of engagement = 3 marks, Depth of reflection = 3 marks, Textual reference = 2 marks, Writing quality = 2 marks. Total = 10 marks.",
    modelAnswer: "'I didn't expect the character to betray his best friend. It made me reconsider everything. Now I'm wondering if friendship is ever truly solid, or if it always cracks under pressure. The author seems to suggest...'",
    suitableFor: "KS3"
  },
  {
    id: "hw-26-examine-assumption",
    title: "Question an Assumption: Critical Thinking",
    description: "The text (or critical interpretation) assumes X about a character/event. Do you agree? Write a counter-argument with evidence.",
    estimatedTime: "20 minutes",
    markingGuidance: "Understanding of assumption = 2 marks, Counter-argument clarity = 3 marks, Supporting evidence = 3 marks, Conclusion = 2 marks. Total = 10 marks.",
    modelAnswer: "Assumption: The protagonist is villainous. Counter-argument: His actions stem from desperation and circumstance, not evil intent. Evidence 1: He hesitates before each act. Evidence 2: He expresses regret. Therefore, judging him as purely villainous oversimplifies.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-27-structure-analysis",
    title: "Analyze Text Structure: How It Creates Meaning",
    description: "Examine the text's structure (chapters, sections, narrative timeline). How does this structure create meaning, suspense, or emotional effect?",
    estimatedTime: "20 minutes",
    markingGuidance: "Structure identified = 2 marks, Specific examples = 3 marks, Effect analysis = 4 marks, Link to overall meaning = 1 mark. Total = 10 marks.",
    modelAnswer: "The text alternates between past and present timelines. This structure builds suspense: readers know the outcome but not the cause. The gradual reveals create mystery and deepen tragic irony.",
    suitableFor: "GCSE"
  },
  {
    id: "hw-28-key-quote-memorization",
    title: "Memorize Key Quotes: Record 5",
    description: "Identify and record 5 essential quotes from the text that will be useful for essays. Include brief note on why each is significant.",
    estimatedTime: "15 minutes",
    markingGuidance: "5 accurate quotes = 5 marks, Significance notes = 5 marks. Total = 10 marks.",
    modelAnswer: "Quote 1: 'All power corrupts' (p. 45) - Significance: Central thesis of the text. Quote 2: [continues x4]",
    suitableFor: "GCSE"
  },
  {
    id: "hw-29-theme-final-reflection",
    title: "Final Theme Reflection: What's the Text Really About?",
    description: "Write a 200-word reflection: After reading/studying this text, what do you believe is its central message or theme? Why? What evidence?",
    estimatedTime: "20 minutes",
    markingGuidance: "Thesis clarity = 3 marks, Evidence = 4 marks, Personal engagement = 2 marks, Writing quality = 1 mark. Total = 10 marks.",
    modelAnswer: "'The text explores how individuals are powerless against systems. While characters struggle for agency, larger forces—society, fate, circumstance—ultimately determine outcomes. Evidence: Multiple characters make choices that seem free but result from social pressure. This suggests the text questions whether free will truly exists.'",
    suitableFor: "both"
  },
  {
    id: "hw-30-practice-exam-question",
    title: "Full Practice Exam Question (45 mins)",
    description: "Complete a full exam-question response under timed conditions (45 minutes including planning). This is a complete summative practice.",
    estimatedTime: "50 minutes (5 plan, 40 write, 5 review)",
    markingGuidance: "Use full exam rubric: 8-9 marks = sophisticated analysis, 6-7 = secure understanding, 5 = adequate with some gaps, 4 = developing, 3 = basic. Award for analysis depth, evidence selection, technical accuracy, engagement with question.",
    modelAnswer: "[Full exam-length essay response]",
    suitableFor: "GCSE"
  }
];

// Export all resources for use in application
export const allTeacherResources = {
  studentGapAnalysis,
  lessonIdeasBank,
  homeworkBank
};
