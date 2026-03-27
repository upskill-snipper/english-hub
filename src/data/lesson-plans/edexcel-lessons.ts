// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

export interface LessonActivity {
  title: string;
  duration: string;
  instructions: string;
  differentiation?: { support: string; core: string; stretch: string };
  resources?: string[];
}

export interface WorksheetQuestion {
  question: string;
  lines: number;
  modelAnswer?: string;
  marks?: number;
}

export interface LessonPlan {
  id: string;
  title: string;
  text: string;
  board: string;
  yearGroup: string;
  duration: string;
  objectives: string[];
  successCriteria: string[];
  keywords: string[];
  starterActivity: LessonActivity;
  mainActivities: LessonActivity[];
  plenaryActivity: LessonActivity;
  homework?: string;
  worksheetQuestions: WorksheetQuestion[];
  teacherNotes: string[];
  targetedSkills: string[];
}

// ── Lesson 1: Edexcel Language Paper 1 — Fiction & Imaginative Writing Overview ──

const lesson1: LessonPlan = {
  id: "edexcel-01-lang-paper1-overview",
  title: "Edexcel Language Paper 1: Fiction & Imaginative Writing Overview",
  text: "Edexcel Language Paper 1",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand the structure and timing of Edexcel Language Paper 1 (1EN0/01)",
    "Identify the requirements for each question (Q1–Q5) and their mark allocations",
    "Recognise how Edexcel assessment objectives AO1–AO6 map onto each question",
    "Develop a strategic approach to reading the fiction extract and planning responses"
  ],
  successCriteria: [
    "I can outline the five questions on Paper 1 and their mark allocations",
    "I can explain what each assessment objective requires in my own words",
    "I can create a timing plan that allocates minutes proportionally to marks",
    "I can identify which AOs are tested in each question"
  ],
  keywords: [
    "assessment objective",
    "fiction extract",
    "imaginative writing",
    "inference",
    "evaluation",
    "narrative perspective",
    "mark allocation",
    "1EN0/01"
  ],
  starterActivity: {
    title: "Paper 1 Myth-Buster Quiz",
    duration: "8 minutes",
    instructions:
      "Display ten common misconceptions about the Edexcel Language Paper 1 on the board (e.g. 'You must write a story for Q5', 'Q1 is just copying out quotes'). Students use mini-whiteboards to vote true or false. Teacher reveals answers, correcting myths and establishing accurate expectations for each question.",
    differentiation: {
      support: "Provide a simplified version with five statements and key terms glossed.",
      core: "Students justify their true/false answers with reasoning before feedback.",
      stretch: "Students predict which assessment objective each statement relates to."
    },
    resources: ["Myth-Buster slide deck", "Mini-whiteboards"]
  },
  mainActivities: [
    {
      title: "Mapping the Paper: Question-by-Question Breakdown",
      duration: "20 minutes",
      instructions:
        "Distribute a blank Paper 1 overview grid. Walk through each question: Q1 (1 mark, short answer retrieval), Q2 (6 marks, language analysis AO2), Q3 (6 marks, structure analysis AO2), Q4 (15 marks, critical evaluation AO4), Q5 (40 marks, imaginative writing AO5/AO6). Students complete the grid noting mark allocation, AO focus, timing recommendation, and one top tip per question. Use an exemplar past paper to show how questions appear.",
      differentiation: {
        support: "Pre-fill the grid with mark allocations; students add AOs and tips.",
        core: "Students complete the full grid and write timing allocations independently.",
        stretch: "Students rank questions by difficulty and create a personal priority order with justification."
      },
      resources: [
        "Paper 1 overview grid worksheet",
        "Edexcel specimen/past paper (redacted if needed)",
        "AO reference card"
      ]
    },
    {
      title: "Mini Practice: Tackling Q2 Language Analysis",
      duration: "20 minutes",
      instructions:
        "Provide a short fiction extract (approx. 400 words). Model how to approach Q2 by identifying language features, selecting a quotation, and analysing effects. Students practise writing one analytical paragraph following the Edexcel-friendly structure: identify technique, embed quotation, analyse effect on reader, link to writer's purpose. Peer-assess using a simplified mark scheme checklist.",
      differentiation: {
        support: "Provide a sentence-starter frame and pre-highlighted quotations in the extract.",
        core: "Students select their own quotations and write a full paragraph independently.",
        stretch: "Students write two paragraphs and self-assess against the Level 3 descriptors from the mark scheme."
      },
      resources: [
        "Fiction extract handout",
        "Q2 model paragraph on visualiser",
        "Peer-assessment checklist aligned to Edexcel mark scheme"
      ]
    }
  ],
  plenaryActivity: {
    title: "3-2-1 Reflection",
    duration: "7 minutes",
    instructions:
      "Students write: 3 things they now know about Paper 1, 2 strategies they will use in the exam, and 1 question they still have. Collect responses to inform future lesson planning and identify students needing further support.",
    differentiation: {
      support: "Provide sentence starters for each of the three prompts.",
      core: "Students complete all three reflections in full sentences.",
      stretch: "Students add a fourth element: one piece of advice they would give to a Year 9 student about Paper 1."
    }
  },
  homework:
    "Using the AO reference card, write a 100-word explanation of why Q5 is worth the most marks. What skills does Edexcel want you to demonstrate in the imaginative writing task?",
  worksheetQuestions: [
    {
      question: "List the five questions on Edexcel Language Paper 1 and state the mark allocation for each.",
      lines: 6,
      modelAnswer:
        "Q1: 1 mark (short answer retrieval). Q2: 6 marks (language analysis, AO2). Q3: 6 marks (structure analysis, AO2). Q4: 15 marks (critical evaluation, AO4). Q5: 40 marks (imaginative writing, AO5 content/organisation and AO6 technical accuracy).",
      marks: 5
    },
    {
      question: "Explain the difference between AO2 and AO4 in the context of Paper 1.",
      lines: 5,
      modelAnswer:
        "AO2 requires analysis of how writers use language and structure to achieve effects and influence readers. It is about identifying specific techniques and explaining their impact. AO4 requires critical evaluation of texts, meaning students must make a judgement about a statement and argue for or against it using textual evidence. AO2 is analytical; AO4 is evaluative.",
      marks: 4
    },
    {
      question: "Why is time management especially important on Paper 1? Create a timing plan.",
      lines: 5,
      modelAnswer:
        "Paper 1 is 1 hour 45 minutes with 68 marks available. Q5 alone is worth 40 marks (over half), so at least 45 minutes should be allocated to it. A suggested plan: Q1 (2 mins), Q2 (8 mins), Q3 (8 mins), Q4 (20 mins), Q5 (45 mins), checking (5 mins). Without a plan, students risk spending too long on lower-mark questions and rushing the highest-value task.",
      marks: 4
    },
    {
      question: "What does 'imaginative writing' mean in the context of Q5? What options might you be given?",
      lines: 4,
      modelAnswer:
        "Imaginative writing on Edexcel Paper 1 Q5 can include descriptive writing or narrative writing. Students are typically given a choice of two prompts — one may be an image stimulus and the other a written prompt. The writing should demonstrate creative use of language, varied sentence structures, and effective organisation with a clear sense of audience and purpose.",
      marks: 3
    },
    {
      question: "Identify two language features you might analyse in a Q2 response and explain why they are effective.",
      lines: 5,
      modelAnswer:
        "Metaphor: comparing one thing to another creates a vivid image and can convey abstract ideas concretely, helping the reader visualise and emotionally engage. Short sentences: these create tension or emphasis by slowing the pace and forcing the reader to focus on a single idea, often used at dramatic moments to heighten impact.",
      marks: 4
    },
    {
      question: "What is the difference between language and structure in the context of Q2 and Q3?",
      lines: 5,
      modelAnswer:
        "Language (Q2) refers to the specific words, phrases, and techniques a writer uses — such as metaphor, simile, alliteration, or emotive language. Structure (Q3) refers to how the text is organised and sequenced — such as the opening, shifts in focus, paragraph length, chronological or non-chronological order, and how the ending relates to the beginning.",
      marks: 4
    }
  ],
  teacherNotes: [
    "Use the most recent available Edexcel specimen or past paper for authenticity. Check copyright permissions before photocopying.",
    "Emphasise that Q5 is worth more than half the paper — students who rush this question significantly limit their grade.",
    "The AO reference card should be kept in student folders for use throughout the course.",
    "This overview lesson is best delivered early in Year 10 and revisited in Year 11 revision."
  ],
  targetedSkills: [
    "Exam Technique",
    "Language Analysis",
    "Time Management",
    "Question Decoding",
    "AO2: Language and Structure"
  ]
};

// ── Lesson 2: Edexcel Language Paper 2 — Non-Fiction & Transactional Writing Overview ──

const lesson2: LessonPlan = {
  id: "edexcel-02-lang-paper2-overview",
  title: "Edexcel Language Paper 2: Non-Fiction & Transactional Writing Overview",
  text: "Edexcel Language Paper 2",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand the structure and timing of Edexcel Language Paper 2 (1EN0/02)",
    "Identify the requirements for each question (Q1–Q7) including the two-source reading section",
    "Recognise how AO1, AO2, AO3, AO5 and AO6 are tested across the paper",
    "Develop confidence with transactional writing formats: articles, letters, speeches, reviews, and reports"
  ],
  successCriteria: [
    "I can outline every question on Paper 2 and its mark allocation",
    "I can explain the difference between the reading section (Sources A and B) and the writing section",
    "I can identify the key features of at least three transactional writing formats",
    "I can create a timing plan for Paper 2"
  ],
  keywords: [
    "non-fiction",
    "transactional writing",
    "synthesis",
    "comparison",
    "viewpoint",
    "rhetorical devices",
    "audience",
    "purpose",
    "1EN0/02"
  ],
  starterActivity: {
    title: "Format Matching Challenge",
    duration: "8 minutes",
    instructions:
      "Display five transactional writing formats (article, letter, speech, report, review) and five purpose/audience descriptions. Students match each format to its purpose and audience. Discuss conventions of each format: where does a letter begin? What makes a speech different from an article? This primes students for the writing demands of Section B.",
    differentiation: {
      support: "Provide a format features reference sheet to help with matching.",
      core: "Students match independently and add one convention for each format.",
      stretch: "Students rank the formats by difficulty and explain which they find most challenging and why."
    },
    resources: ["Format matching cards or slide", "Format features reference sheet"]
  },
  mainActivities: [
    {
      title: "Deconstructing Paper 2: Section A (Reading) Deep Dive",
      duration: "22 minutes",
      instructions:
        "Walk through Section A using an exemplar paper. Explain the two-source structure: Source A (19th century non-fiction) and Source B (20th/21st century non-fiction). Break down each reading question: Q1 (retrieval, 1 mark), Q2 (language analysis on one source, 6 marks), Q3 (language/structure on one source, 6 marks), Q4 (synthesis across both sources, 6 marks), Q5 (comparison of writers' viewpoints, 15 marks). Students annotate a Paper 2 overview sheet. Emphasise Q5 as the highest-value reading question requiring explicit comparison with connectives.",
      differentiation: {
        support: "Pre-fill question numbers and marks; students add AOs and key strategies.",
        core: "Students complete the full overview sheet and write a one-sentence strategy for each question.",
        stretch: "Students write a model opening sentence for Q5 that demonstrates an explicit comparison structure."
      },
      resources: [
        "Paper 2 overview worksheet",
        "Edexcel specimen/past paper",
        "Comparison connectives word bank"
      ]
    },
    {
      title: "Section B (Writing) Format Workshop",
      duration: "20 minutes",
      instructions:
        "Focus on Q6 and Q7 (the transactional writing tasks). Explain that students choose one from two options, each specifying a format, audience, and purpose. Model the opening of an article and a letter side-by-side, showing how format conventions differ. Students then plan and write the opening paragraph of a given transactional writing prompt, choosing between article or speech format. Peer-assess focusing on: correct format conventions, clear sense of audience, persuasive/engaging tone.",
      differentiation: {
        support: "Provide a format template with structural prompts (e.g. 'Dear...', headline, subheading).",
        core: "Students choose their format and write independently, using a conventions checklist.",
        stretch: "Students write openings in both formats and evaluate which is more effective for the given purpose."
      },
      resources: [
        "Transactional writing prompt card",
        "Format conventions checklist",
        "Peer-assessment sheet"
      ]
    }
  ],
  plenaryActivity: {
    title: "Paper 2 Comparison Relay",
    duration: "7 minutes",
    instructions:
      "Divide the class into teams. Each team receives a set of quick-fire questions about Paper 2 (e.g. 'How many marks is Q5?', 'Name two comparison connectives', 'What century is Source A from?'). Teams relay answers on whiteboards. Fastest correct answer wins. Recap key takeaways as a class.",
    differentiation: {
      support: "Questions are multiple-choice with two options.",
      core: "Open recall questions requiring precise answers.",
      stretch: "Bonus questions requiring students to explain why a particular strategy works for a specific question."
    }
  },
  homework:
    "Write the opening two paragraphs of a speech arguing that school uniforms should be abolished. Use at least three rhetorical devices. Annotate your work to identify the devices used.",
  worksheetQuestions: [
    {
      question: "How does the structure of Paper 2 differ from Paper 1? Explain the key differences.",
      lines: 5,
      modelAnswer:
        "Paper 1 has one fiction extract and tests imaginative/creative writing. Paper 2 has two non-fiction sources (one 19th century, one modern) and tests transactional writing. Paper 2 requires comparison skills across sources, while Paper 1 focuses on a single text. Paper 2 writing tasks specify a particular format (article, letter, speech, etc.), whereas Paper 1 offers more open creative prompts.",
      marks: 4
    },
    {
      question: "What is 'synthesis' and which question on Paper 2 tests it?",
      lines: 4,
      modelAnswer:
        "Synthesis means combining information or ideas from two different sources to identify similarities or differences. Q4 on Paper 2 tests synthesis by asking students to find and combine relevant points from both Source A and Source B on a given topic, showing how the sources relate to each other.",
      marks: 3
    },
    {
      question: "Explain what Q5 requires and why it is the most challenging reading question.",
      lines: 6,
      modelAnswer:
        "Q5 asks students to compare writers' viewpoints and how they are conveyed across both sources. It is worth 15 marks and is challenging because students must identify what each writer thinks, analyse the methods they use to express those viewpoints, and make explicit comparisons using connectives. It tests both understanding (AO1) and analytical skill (AO2/AO3) simultaneously.",
      marks: 5
    },
    {
      question: "List four conventions of a formal letter that you would need in a Paper 2 writing response.",
      lines: 4,
      modelAnswer:
        "1. Sender's address in the top right corner. 2. Recipient's name and address on the left. 3. Formal greeting (Dear Mr/Mrs/Sir/Madam). 4. Formal sign-off (Yours sincerely if named, Yours faithfully if not). Other conventions include: clear paragraphing, formal register, and a concluding paragraph that restates the purpose.",
      marks: 4
    },
    {
      question: "Name three rhetorical devices you could use in a transactional writing response and give an example of each.",
      lines: 6,
      modelAnswer:
        "1. Rhetorical question: 'How can we call ourselves a fair society when children go hungry?' — engages the reader and prompts reflection. 2. Rule of three: 'This policy is unjust, unworkable, and unnecessary' — creates a rhythmic, memorable emphasis. 3. Direct address: 'You have the power to change this' — makes the reader feel personally involved and responsible.",
      marks: 4
    },
    {
      question: "Create a timing plan for Paper 2 (2 hours 5 minutes total, 96 marks).",
      lines: 5,
      modelAnswer:
        "Q1: 2 minutes (1 mark). Q2: 10 minutes (6 marks). Q3: 10 minutes (6 marks). Q4: 10 minutes (6 marks). Q5: 25 minutes (15 marks). Q6/Q7: 45 minutes (40 marks, choosing one question). Checking/proofreading: 5 minutes. Total: 107 minutes. This ensures proportional time allocation based on marks available.",
      marks: 4
    }
  ],
  teacherNotes: [
    "Paper 2 timing is generous (2 hours 5 minutes) compared to Paper 1 — students should be encouraged to plan thoroughly, especially for the writing task.",
    "The 19th-century source in Section A can be challenging for weaker readers. Build in regular exposure to 19th-century non-fiction throughout the course.",
    "Emphasise that Q6/Q7 is a choice — students should read both options carefully before deciding.",
    "Format conventions are a common area where students lose marks unnecessarily. Display format reference posters in the classroom."
  ],
  targetedSkills: [
    "Exam Technique",
    "Transactional Writing",
    "Comparison",
    "Synthesis",
    "Rhetorical Devices",
    "AO1: Reading Comprehension",
    "AO5: Content and Organisation"
  ]
};

// ── Lesson 3: Macbeth for Edexcel — Extract-Based Analysis Approach ──

const lesson3: LessonPlan = {
  id: "edexcel-03-macbeth-extract-analysis",
  title: "Macbeth for Edexcel: Extract-Based Analysis Approach",
  text: "Macbeth",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand how Edexcel structures the Macbeth question on Paper 1 Literature (1ET0/01)",
    "Practise the extract-to-wider-play approach required by the Edexcel mark scheme",
    "Analyse Shakespeare's language, form, and structure in a key extract (Act 1, Scene 7 — 'If it were done')",
    "Develop the skill of linking analysis to context and the wider play as required by AO1, AO2, and AO3"
  ],
  successCriteria: [
    "I can explain the structure of the Edexcel Macbeth question and what it requires",
    "I can analyse language and dramatic techniques in the given extract",
    "I can link my analysis of the extract to the wider play and relevant context",
    "I can write a paragraph that addresses AO1, AO2, and AO3"
  ],
  keywords: [
    "extract",
    "soliloquy",
    "ambition",
    "conscience",
    "dramatic irony",
    "regicide",
    "hubris",
    "tragic hero",
    "Jacobean"
  ],
  starterActivity: {
    title: "Extract-Based Thinking: What Would Edexcel Ask?",
    duration: "8 minutes",
    instructions:
      "Display a short extract from Act 1, Scene 7 (Macbeth's 'If it were done when 'tis done' soliloquy). Before revealing the question, ask students: 'If you were an examiner, what question would you ask about this extract?' Students write their predicted question on whiteboards. Reveal the actual Edexcel-style question and discuss how close their predictions were. Establish the pattern: Edexcel gives an extract and asks students to analyse it in relation to the whole play.",
    differentiation: {
      support: "Provide three possible question stems to choose from.",
      core: "Students write their own question independently.",
      stretch: "Students write a question and identify which AOs it would test."
    },
    resources: ["Extract handout (Act 1, Scene 7, lines 1–28)", "Mini-whiteboards"]
  },
  mainActivities: [
    {
      title: "Close Analysis of the Extract: Language and Dramatic Techniques",
      duration: "22 minutes",
      instructions:
        "Read the extract aloud with the class. Students annotate the extract guided by three focus questions: (1) What language reveals Macbeth's inner conflict? (2) What dramatic techniques does Shakespeare use? (3) How does this extract connect to key themes of ambition and guilt? Model annotation of the first five lines, identifying the conditional 'If' as revealing hesitation, the metaphor of 'trammel up the consequence' as Macbeth wishing to avoid repercussions, and the soliloquy form as giving direct access to his tortured conscience. Students continue annotating independently, then share three key findings with a partner.",
      differentiation: {
        support: "Provide a partially annotated extract with key quotations underlined and prompts for analysis.",
        core: "Students annotate independently using the three focus questions as a framework.",
        stretch: "Students identify how the extract foreshadows later events and connects to the Jacobean context of regicide and the Divine Right of Kings."
      },
      resources: [
        "Annotatable extract handout",
        "Annotation guide with technique bank",
        "Coloured pens for coding (language/structure/context)"
      ]
    },
    {
      title: "Writing an Edexcel-Standard Paragraph: Extract to Wider Play",
      duration: "20 minutes",
      instructions:
        "Introduce the Edexcel paragraph structure: Point (answer the question with a clear argument), Evidence (embed a quotation from the extract), Analyse (explore language/technique and effect), Context (link to Jacobean context), Wider Play (connect to another moment in the play). Model a full paragraph on the board. Students then write their own paragraph on a different aspect of the extract. Use the Edexcel mark scheme Level 4/5 descriptors as a success checklist. Two or three students share paragraphs under the visualiser for class feedback.",
      differentiation: {
        support: "Provide a paragraph frame with sentence starters for each element (Point, Evidence, Analyse, Context, Wider Play).",
        core: "Students write a full paragraph independently using the structure.",
        stretch: "Students write two paragraphs and evaluate which would score higher against the mark scheme descriptors, explaining why."
      },
      resources: [
        "Model paragraph on visualiser/slide",
        "Paragraph frame (support tier)",
        "Edexcel mark scheme Level 4/5 descriptors (simplified)"
      ]
    }
  ],
  plenaryActivity: {
    title: "Mark Scheme Traffic Light Self-Assessment",
    duration: "7 minutes",
    instructions:
      "Display simplified Edexcel mark scheme descriptors for Levels 3, 4, and 5. Students re-read their paragraph and highlight it with traffic light colours: green (I did this well), amber (I attempted this), red (I need to improve this). Students write one specific target for improvement on a sticky note and place it in their book. Teacher collects a quick tally of red areas to inform next lesson.",
    differentiation: {
      support: "Provide the descriptors as a simplified checklist with yes/no boxes.",
      core: "Students self-assess using the full traffic light system and write a specific target.",
      stretch: "Students rewrite one sentence from their paragraph to move it from Level 4 to Level 5."
    }
  },
  homework:
    "Find and annotate a second extract from Macbeth (Act 3, Scene 4 — the Banquet Scene, lines 93–107) using the same three focus questions from today's lesson. Write one analytical paragraph linking the extract to the theme of guilt.",
  worksheetQuestions: [
    {
      question: "How does the Edexcel Macbeth question differ from other exam boards? What is the extract-based approach?",
      lines: 5,
      modelAnswer:
        "Edexcel provides a printed extract from the play and asks students to analyse it in relation to the whole text. Students must show close analysis of the extract's language, form, and structure, but also demonstrate knowledge of the wider play by linking to other scenes, characters, and themes. This differs from some boards which may focus purely on a theme across the whole text.",
      marks: 4
    },
    {
      question: "What does the word 'If' at the start of Macbeth's soliloquy in Act 1, Scene 7 reveal about his state of mind?",
      lines: 4,
      modelAnswer:
        "The conditional 'If' immediately reveals Macbeth's hesitation and uncertainty about killing Duncan. Rather than stating firm intent, the conditional suggests he is weighing up consequences, showing his conscience is still active. This contrasts with Lady Macbeth's certainty, highlighting the internal conflict that defines his character at this point.",
      marks: 4
    },
    {
      question: "Explain why Shakespeare uses the soliloquy form in this extract. How does it affect the audience?",
      lines: 5,
      modelAnswer:
        "The soliloquy gives the audience direct, unfiltered access to Macbeth's private thoughts. It creates dramatic irony because the audience knows his inner turmoil while other characters do not. It also builds sympathy, as we see Macbeth is not a straightforward villain but a man wrestling with his conscience, which aligns with the tragic hero archetype.",
      marks: 4
    },
    {
      question: "How would a Jacobean audience have responded to Macbeth's contemplation of regicide? Link to context.",
      lines: 5,
      modelAnswer:
        "A Jacobean audience would have been horrified by Macbeth's plan to kill King Duncan. They believed in the Divine Right of Kings — that monarchs were appointed by God — so killing a king was not just murder but a sin against God and the natural order. This would have resonated especially strongly given the Gunpowder Plot of 1605, a recent attempt to assassinate King James I.",
      marks: 4
    },
    {
      question: "Write a model paragraph analysing the metaphor 'trammel up the consequence' from the extract.",
      lines: 8,
      modelAnswer:
        "Shakespeare uses the metaphor 'trammel up the consequence' to reveal Macbeth's desperate wish to contain the repercussions of Duncan's murder. The word 'trammel' means to catch in a net, suggesting Macbeth sees the consequences as wild and uncontrollable — something that must be trapped. This reveals his awareness that the murder will unleash chaos, yet his ambition drives him to seek a way around it. A Jacobean audience would recognise this as hubris: the belief that a mortal can control fate. This foreshadows the unravelling of Macbeth's power in Acts 3–5, where guilt and paranoia consume him.",
      marks: 6
    },
    {
      question: "Identify one moment later in the play that connects to Macbeth's conflict in this extract. Explain the link.",
      lines: 5,
      modelAnswer:
        "In Act 5, Scene 1, Lady Macbeth sleepwalks and obsessively tries to wash imagined blood from her hands. This connects to Macbeth's fear in Act 1, Scene 7 that the murder cannot be cleanly 'done' — the consequences he feared have manifested as inescapable psychological torment. Shakespeare shows that the 'consequence' could not be 'trammelled up', fulfilling the prophecy of Macbeth's own anxieties.",
      marks: 4
    }
  ],
  teacherNotes: [
    "The Edexcel Shakespeare question is in Paper 1 Section A and is worth 40 marks (with 4 marks for SPaG). Ensure students know SPaG counts here.",
    "Practise the extract-to-wider-play skill repeatedly — it is the most common area where students underperform on Edexcel.",
    "Act 1, Scene 7 is one of the most frequently examined extracts. Build a bank of 6–8 key extracts for exam preparation.",
    "Encourage students to learn 10–15 key quotations from across the play to support the 'wider play' element of their responses."
  ],
  targetedSkills: [
    "Shakespeare",
    "Character Analysis",
    "Language Analysis",
    "AO1: Textual Reference",
    "AO2: Writer's Methods",
    "AO3: Context",
    "Extract Analysis"
  ]
};

// ── Lesson 4: A Christmas Carol for Edexcel — Character & Theme Exploration ──

const lesson4: LessonPlan = {
  id: "edexcel-04-christmas-carol-character-theme",
  title: "A Christmas Carol for Edexcel: Character & Theme Exploration",
  text: "A Christmas Carol",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand how Edexcel assesses A Christmas Carol on Paper 2 Literature (1ET0/02)",
    "Explore Dickens's use of character as a vehicle for social commentary",
    "Analyse how Scrooge's transformation reflects key themes of redemption, social responsibility, and class",
    "Practise structuring responses that balance character analysis with thematic exploration (AO1, AO2, AO4)"
  ],
  successCriteria: [
    "I can explain the structure of the Edexcel A Christmas Carol question",
    "I can analyse how Dickens uses Scrooge to convey ideas about social responsibility",
    "I can link character development to Victorian context",
    "I can write an analytical paragraph that addresses character, theme, and context"
  ],
  keywords: [
    "redemption",
    "transformation",
    "social responsibility",
    "Victorian",
    "philanthropy",
    "misanthrope",
    "allegory",
    "Malthusian",
    "workhouse"
  ],
  starterActivity: {
    title: "Scrooge's Journey: Before and After",
    duration: "8 minutes",
    instructions:
      "Display two quotations side by side — one from Stave 1 ('Are there no prisons? Are there no workhouses?') and one from Stave 5 ('I will honour Christmas in my heart'). Students write three observations about how Scrooge has changed, focusing on language, tone, and attitude. Discuss as a class, introducing the concept of transformation as Dickens's central structural device.",
    differentiation: {
      support: "Provide a comparison table with prompts: 'In Stave 1 Scrooge is... In Stave 5 Scrooge is...'",
      core: "Students write three independent observations comparing language and attitude.",
      stretch: "Students explain what Dickens is trying to teach the reader through this transformation and link to Victorian context."
    },
    resources: ["Quotation comparison slide", "Comparison table (support tier)"]
  },
  mainActivities: [
    {
      title: "Character as Social Commentary: Tracking Dickens's Message",
      duration: "22 minutes",
      instructions:
        "Distribute a character-theme tracking grid covering Scrooge, Bob Cratchit, Tiny Tim, the Ghost of Christmas Present, and Ignorance and Want. For each character, students identify: (1) key quotation, (2) what the character represents, (3) what Dickens is criticising or advocating through them, (4) relevant Victorian context. Model the first row (Scrooge in Stave 1) as a class, emphasising how Scrooge's line 'decrease the surplus population' echoes Malthusian economics, which Dickens opposed. Students complete the remaining rows using their texts and notes.",
      differentiation: {
        support: "Pre-fill quotations; students focus on interpretation and context columns.",
        core: "Students complete the full grid independently, selecting their own quotations.",
        stretch: "Students add a column evaluating how effective each character is as a vehicle for Dickens's message, ranking them with justification."
      },
      resources: [
        "Character-theme tracking grid",
        "Text copies of A Christmas Carol",
        "Victorian context reference sheet"
      ]
    },
    {
      title: "Crafting an Edexcel Response: Character and Theme Paragraph",
      duration: "20 minutes",
      instructions:
        "Display a sample Edexcel-style question: 'Explore how Dickens presents ideas about social responsibility in A Christmas Carol.' Discuss how this question requires both character analysis and thematic exploration. Model a paragraph structure: Argument (link character to theme), Evidence (embedded quotation), Analysis (language technique and effect), Context (Victorian social conditions), Evaluation (Dickens's purpose/message). Students write one paragraph using their tracking grid. Peer-assess using Edexcel Level descriptors.",
      differentiation: {
        support: "Provide a paragraph frame with the argument and evidence pre-selected; students write analysis, context, and evaluation.",
        core: "Students write a full paragraph independently and peer-assess.",
        stretch: "Students write a counter-argument paragraph (e.g. exploring whether Dickens's message is too simplistic) and compare the two."
      },
      resources: [
        "Sample question slide",
        "Model paragraph",
        "Paragraph frame (support tier)",
        "Edexcel Level descriptors for the 19th-century novel question"
      ]
    }
  ],
  plenaryActivity: {
    title: "Dickens's Message in One Sentence",
    duration: "7 minutes",
    instructions:
      "Challenge students to summarise Dickens's central message in A Christmas Carol in exactly one sentence of no more than 25 words. Share three or four examples under the visualiser. Vote on the most accurate and concise. Use this to reinforce the importance of concise, purposeful writing in exam responses.",
    differentiation: {
      support: "Provide a sentence starter: 'Dickens uses A Christmas Carol to argue that...'",
      core: "Students write their sentence independently within the word limit.",
      stretch: "Students explain which assessment objective their sentence best demonstrates."
    }
  },
  homework:
    "Write a full paragraph answering: 'How does Dickens use Tiny Tim to present ideas about poverty and compassion?' Include a quotation, language analysis, and Victorian context.",
  worksheetQuestions: [
    {
      question: "How is A Christmas Carol assessed on the Edexcel Literature paper? Describe the question format.",
      lines: 4,
      modelAnswer:
        "A Christmas Carol appears in Paper 2, Section A of the Edexcel English Literature exam. Students are given an essay-style question (no extract provided) and must write about the whole text. The question typically asks students to explore how Dickens presents a character, theme, or idea. It is worth 40 marks, testing AO1 (textual reference), AO2 (writer's methods), and AO4 (context, where relevant to the argument).",
      marks: 4
    },
    {
      question: "What does the phrase 'decrease the surplus population' reveal about Scrooge's attitude in Stave 1?",
      lines: 5,
      modelAnswer:
        "This phrase reveals Scrooge's cold, inhumane attitude towards the poor. The word 'surplus' reduces human beings to excess stock, dehumanising them. It echoes the Malthusian economic theory that population growth outstrips resources, which was used to justify neglect of the poor. Dickens uses Scrooge to embody — and then reject — this callous philosophy, showing readers the moral bankruptcy of such thinking.",
      marks: 4
    },
    {
      question: "Explain the allegorical significance of the characters Ignorance and Want.",
      lines: 5,
      modelAnswer:
        "Ignorance and Want are two emaciated children hiding beneath the Ghost of Christmas Present's robes. They represent the real children of Victorian London suffering from poverty and lack of education. Ignorance is described as the more dangerous, reflecting Dickens's belief that society's refusal to acknowledge poverty (ignorance of it) perpetuates suffering. They are an allegory for the social ills Dickens wanted his readers to confront.",
      marks: 4
    },
    {
      question: "How does Dickens use the structure of five staves to reinforce the theme of redemption?",
      lines: 5,
      modelAnswer:
        "The five-stave structure mirrors the five acts of a play and the trajectory of a moral journey. Stave 1 establishes Scrooge's coldness; Staves 2–4 take him through past, present, and future, forcing him to confront the consequences of his behaviour; Stave 5 shows his joyful transformation. This structure creates a clear arc of redemption, showing that change is possible even for the most hardened individual. The word 'stave' also means a verse of a song, linking to the musical, celebratory title.",
      marks: 5
    },
    {
      question: "Why is Victorian context important when analysing A Christmas Carol for Edexcel? Give two specific examples.",
      lines: 6,
      modelAnswer:
        "Victorian context is essential because Dickens wrote A Christmas Carol as direct social commentary. Example 1: The 1834 Poor Law Amendment Act created workhouses that punished poverty — Scrooge's reference to 'prisons' and 'workhouses' reflects the callous attitude Dickens criticised. Example 2: The novella was published in 1843, during a period of extreme inequality between the industrial rich and the urban poor — Dickens used Scrooge's wealth alongside the Cratchits' poverty to dramatise this divide and argue for compassion.",
      marks: 5
    },
    {
      question: "Compare how Dickens presents Scrooge and Bob Cratchit to convey ideas about wealth and generosity.",
      lines: 6,
      modelAnswer:
        "Dickens uses contrast between Scrooge and Bob to highlight that wealth does not equal worth. Scrooge is wealthy but miserable, isolated, and morally bankrupt — described through cold imagery ('cold within him'). Bob is poor but rich in love, family, and generosity — his family's modest Christmas dinner is presented with warmth and joy. This juxtaposition argues that true richness lies in human connection, not financial wealth. Through Bob's loyalty despite Scrooge's cruelty, Dickens also critiques the power imbalance between employer and worker in Victorian society.",
      marks: 5
    }
  ],
  teacherNotes: [
    "Unlike the Shakespeare question, the A Christmas Carol question on Edexcel does NOT provide an extract. Students must select their own evidence from across the whole text.",
    "Ensure students have a bank of at least 15–20 key quotations memorised, spread across all five staves.",
    "The question is in Paper 2, Section A and is worth 40 marks. There are no SPaG marks for this question (unlike Shakespeare).",
    "Dickens's social message is central to high-scoring responses. Students who only analyse characters without connecting to Victorian context will be capped at lower levels."
  ],
  targetedSkills: [
    "Character Analysis",
    "Theme Analysis",
    "AO1: Textual Reference",
    "AO2: Writer's Methods",
    "AO4: Evaluation",
    "Contextual Understanding",
    "Essay Structure"
  ]
};

// ── Lesson 5: Romeo & Juliet for Edexcel — Love, Conflict & Tragedy ──

const lesson5: LessonPlan = {
  id: "edexcel-05-romeo-juliet-love-conflict",
  title: "Romeo & Juliet for Edexcel: Love, Conflict & Tragedy",
  text: "Romeo and Juliet",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand how Romeo and Juliet is assessed on Edexcel Literature Paper 1 alongside Macbeth (1ET0/01)",
    "Explore how Shakespeare intertwines the themes of love, conflict, and tragedy across the play",
    "Analyse key extracts showing how love and conflict coexist, focusing on Act 1, Scene 5 and Act 3, Scene 1",
    "Practise the Edexcel extract-plus-wider-play response structure"
  ],
  successCriteria: [
    "I can explain how love and conflict are interconnected in Romeo and Juliet",
    "I can analyse Shakespeare's language in at least two key extracts",
    "I can link the themes to Elizabethan context (honour, patriarchy, fate)",
    "I can write an analytical paragraph that moves from extract to wider play"
  ],
  keywords: [
    "oxymoron",
    "sonnet",
    "patriarchy",
    "honour code",
    "dramatic irony",
    "tragic flaw",
    "fate",
    "Petrarchan love",
    "catharsis"
  ],
  starterActivity: {
    title: "Love vs Conflict: Quotation Sort",
    duration: "8 minutes",
    instructions:
      "Provide students with twelve quotations from across the play on cards. Students sort them into three categories: Love, Conflict, or Both. Key quotations that belong in 'Both' include 'My only love sprung from my only hate' and 'O brawling love, O loving hate'. Discuss why so many quotations fit both categories — establishing that love and conflict are inseparable in the play.",
    differentiation: {
      support: "Reduce to eight quotations with act/scene references and a brief gloss for each.",
      core: "Students sort twelve quotations independently and justify their 'Both' choices.",
      stretch: "Students rank the 'Both' quotations by importance and explain which best encapsulates the play's central tension."
    },
    resources: ["Quotation sort cards (12 quotations)", "Sorting grid worksheet"]
  },
  mainActivities: [
    {
      title: "Extract Analysis: Act 1, Scene 5 — The Shared Sonnet",
      duration: "20 minutes",
      instructions:
        "Read the shared sonnet between Romeo and Juliet (Act 1, Scene 5, lines 93–110) aloud with two students taking the parts. Annotate the extract as a class, focusing on: the religious imagery ('holy shrine', 'pilgrim', 'saints'), the sonnet form as a symbol of perfect love, and the dramatic irony of their meeting at a Capulet feast. Students write one paragraph analysing how Shakespeare presents love in this extract. Emphasise that Edexcel expects close language analysis (AO2) supported by context (AO3).",
      differentiation: {
        support: "Provide a cloze paragraph with key analytical vocabulary missing for students to complete.",
        core: "Students write a full paragraph independently, embedding at least two quotations.",
        stretch: "Students compare the religious imagery to Romeo's earlier Petrarchan language about Rosaline, evaluating what the shift reveals about the nature of Romeo's love."
      },
      resources: [
        "Extract handout (Act 1, Scene 5, lines 93–110)",
        "Sonnet form reference card",
        "Cloze paragraph (support tier)"
      ]
    },
    {
      title: "Linking Love to Conflict: Act 3, Scene 1 as Turning Point",
      duration: "22 minutes",
      instructions:
        "Transition to Act 3, Scene 1 — the deaths of Mercutio and Tybalt. Read key extracts: Romeo's 'O, I am fortune's fool!' and his earlier attempt to keep peace ('Tybalt, the reason that I have to love thee / Doth much excuse the appertaining rage'). Discuss how Romeo's love for Juliet directly causes the conflict with Tybalt. Students create a dual-column analysis: left column analyses how love motivates Romeo's actions; right column analyses how conflict destroys them. This models the Edexcel skill of connecting extract analysis to the wider play.",
      differentiation: {
        support: "Pre-populate the left column; students complete the conflict column with guided prompts.",
        core: "Students complete both columns independently, selecting their own quotations.",
        stretch: "Students add a third column evaluating whether Romeo's tragedy is caused by fate, his own choices, or the society he lives in."
      },
      resources: [
        "Extract handout (Act 3, Scene 1 — key passages)",
        "Dual-column analysis worksheet",
        "Fate vs free will discussion prompt"
      ]
    }
  ],
  plenaryActivity: {
    title: "Edexcel Exam Question Prediction",
    duration: "7 minutes",
    instructions:
      "Students write their own Edexcel-style question on Romeo and Juliet based on today's lesson. Share three or four examples. The class votes on which question is most likely to appear in a real exam and explains why. Teacher reveals past/specimen question phrasing for comparison. Assign the most realistic student question as the basis for homework.",
    differentiation: {
      support: "Provide a question stem: 'Explore how Shakespeare presents...'",
      core: "Students write a full question independently.",
      stretch: "Students write two questions testing different AOs and identify which AOs each question targets."
    }
  },
  homework:
    "Write two paragraphs answering: 'How does Shakespeare present the relationship between love and conflict in Romeo and Juliet?' One paragraph must focus on the extract studied today; the other must reference a different part of the play.",
  worksheetQuestions: [
    {
      question: "Explain the significance of the shared sonnet form in Act 1, Scene 5.",
      lines: 5,
      modelAnswer:
        "Shakespeare writes Romeo and Juliet's first meeting as a shared sonnet — a 14-line poem traditionally associated with love. By splitting the sonnet between them, Shakespeare shows their instant connection and mutual attraction. The form suggests their love is balanced and equal. The rhyming couplet at the end, sealed with a kiss, implies their union is perfect — yet the audience knows this perfection is doomed, creating poignant dramatic irony.",
      marks: 4
    },
    {
      question: "How does the religious imagery in the shared sonnet affect the audience's perception of Romeo and Juliet's love?",
      lines: 5,
      modelAnswer:
        "The religious imagery ('holy shrine', 'pilgrim', 'saints', 'prayer') elevates their love from physical attraction to something sacred and divine. By framing their meeting in terms of worship and devotion, Shakespeare suggests their love transcends the worldly feud between their families. For an Elizabethan audience, this religious language would carry profound weight, implying their love is sanctioned by a higher power even as society forbids it.",
      marks: 4
    },
    {
      question: "Why is Act 3, Scene 1 considered the turning point of the play? Explain in terms of love and conflict.",
      lines: 6,
      modelAnswer:
        "Act 3, Scene 1 is the turning point because it is where love and conflict collide with fatal consequences. Romeo's love for Juliet makes him refuse to fight Tybalt, but this leads to Mercutio's death. Romeo's grief then drives him to kill Tybalt in revenge, destroying his chance of peace. His banishment separates him from Juliet, setting the tragic ending in motion. The scene marks the shift from comedy (love, marriage, hope) to tragedy (death, exile, despair).",
      marks: 5
    },
    {
      question: "Analyse the oxymoron 'O brawling love, O loving hate' and explain how it encapsulates the play's themes.",
      lines: 5,
      modelAnswer:
        "The oxymorons 'brawling love' and 'loving hate' compress the play's two central forces into single phrases. 'Brawling love' suggests that in Verona, love cannot exist without violence — it must fight to survive. 'Loving hate' implies that the families' hatred is so deeply ingrained it has become almost an affection, something they cling to. Together, these oxymorons establish that love and conflict are not opposites but are inseparably intertwined in the world of the play.",
      marks: 4
    },
    {
      question: "How does the concept of honour drive the conflict in Romeo and Juliet? Link to Elizabethan context.",
      lines: 5,
      modelAnswer:
        "In Elizabethan society, family honour was paramount, and insults had to be answered with violence. Tybalt embodies this honour code — he sees Romeo's presence at the Capulet ball as a personal insult and pursues revenge. Even Romeo, who initially tries to avoid conflict, is drawn into it when Mercutio dies defending his honour. Shakespeare critiques this code by showing how it leads to senseless death and prevents reconciliation, suggesting that rigid adherence to honour is destructive.",
      marks: 4
    },
    {
      question: "What does 'O, I am fortune's fool!' reveal about Romeo's understanding of his situation?",
      lines: 4,
      modelAnswer:
        "Romeo's exclamation reveals his sudden realisation that fate has trapped him. 'Fortune's fool' suggests he sees himself as a plaything of destiny — 'fortune' controls him and he is merely a 'fool' (victim/puppet). This moment of self-awareness echoes the Prologue's 'star-cross'd lovers', confirming the theme of fate. However, it could also be read as Romeo deflecting responsibility for his own violent choice, raising the question of whether fate or free will drives the tragedy.",
      marks: 4
    }
  ],
  teacherNotes: [
    "Romeo and Juliet is an alternative Shakespeare text on Edexcel Paper 1 (alongside Macbeth, The Tempest, Twelfth Night, etc.). Check which text your school has chosen.",
    "The extract-plus-wider-play structure is identical to the Macbeth approach. Cross-reference with Lesson 3 for consistency.",
    "Students often separate love and conflict into distinct themes — this lesson deliberately shows they are inseparable, which is key to high-level analysis.",
    "The shared sonnet is one of the most commonly examined extracts. Ensure all students can analyse it confidently."
  ],
  targetedSkills: [
    "Shakespeare",
    "Theme Analysis",
    "Language Analysis",
    "AO1: Textual Reference",
    "AO2: Writer's Methods",
    "AO3: Context",
    "Dramatic Techniques"
  ]
};

// ── Lesson 6: Edexcel Poetry Anthology — Time & Place Cluster ──

const lesson6: LessonPlan = {
  id: "edexcel-06-poetry-time-and-place",
  title: "Edexcel Poetry Anthology: Time & Place Cluster",
  text: "Edexcel Poetry Anthology",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand the structure of the Edexcel Poetry Anthology and how the Time and Place cluster is assessed",
    "Analyse at least two poems from the Time and Place cluster in detail",
    "Develop comparison skills required for the Edexcel poetry comparison question",
    "Identify how poets use language, structure, and form to convey ideas about time and place"
  ],
  successCriteria: [
    "I can explain how the Edexcel poetry question requires comparison of two poems",
    "I can analyse language, structure, and form in poems from the Time and Place cluster",
    "I can identify similarities and differences between two poems on a shared theme",
    "I can write a comparative paragraph using appropriate connectives"
  ],
  keywords: [
    "cluster",
    "comparison",
    "imagery",
    "enjambment",
    "volta",
    "tone",
    "perspective",
    "juxtaposition",
    "nostalgia",
    "displacement"
  ],
  starterActivity: {
    title: "Time and Place Word Cloud",
    duration: "7 minutes",
    instructions:
      "Display the titles of all poems in the Time and Place cluster. Students brainstorm associations with the phrase 'time and place' on a mind map — what themes might these poems explore? (e.g. memory, home, change, loss, belonging, travel, identity). After two minutes of individual brainstorming, share ideas as a class and create a collective word cloud on the board. This establishes the thematic territory of the cluster before close analysis begins.",
    differentiation: {
      support: "Provide a starter list of six associated words to build upon.",
      core: "Students brainstorm independently and contribute at least five ideas.",
      stretch: "Students group their ideas into sub-themes and predict which poems might explore each one."
    },
    resources: ["Cluster poem title list slide", "Mind map template"]
  },
  mainActivities: [
    {
      title: "Close Analysis: Two Key Poems from the Cluster",
      duration: "25 minutes",
      instructions:
        "Focus on two poems that offer strong comparison potential (e.g. 'The Prelude' by Wordsworth and 'Kamikaze' by Beatrice Garland, or 'London' by Blake and 'The Emigree' by Carol Rumens — select based on your school's chosen poems). Read both poems aloud. For each poem, students complete an analysis grid covering: subject/narrative, key quotations (3 per poem), language techniques, structural features, tone/mood, and the poet's message about time and/or place. Model the first poem's grid entries as a class, then students complete the second independently.",
      differentiation: {
        support: "Pre-fill key quotations for both poems; students focus on technique identification and effect analysis.",
        core: "Students complete the full grid for the second poem independently.",
        stretch: "Students annotate the poems directly, identifying patterns and shifts in tone that the grid cannot capture."
      },
      resources: [
        "Poem texts (printed, annotatable copies)",
        "Analysis grid worksheet (two columns, one per poem)",
        "Language/structure technique bank"
      ]
    },
    {
      title: "Building a Comparative Paragraph",
      duration: "18 minutes",
      instructions:
        "Introduce the Edexcel comparison paragraph structure: Similarity/Difference statement, Poem A evidence and analysis, Comparison connective, Poem B evidence and analysis, Evaluative comment on effect. Model a paragraph comparing how both poems present a sense of place (or time). Emphasise that Edexcel rewards integrated comparison — not 'Poem A then Poem B' but woven analysis. Students write one comparative paragraph. Share two examples under the visualiser for class feedback.",
      differentiation: {
        support: "Provide a paragraph frame with connectives and sentence starters embedded.",
        core: "Students write a full comparative paragraph independently.",
        stretch: "Students write two comparative paragraphs — one on similarity, one on difference — and evaluate which is stronger."
      },
      resources: [
        "Comparison paragraph model",
        "Comparison connectives mat (similarly, conversely, whereas, in contrast, likewise)",
        "Paragraph frame (support tier)"
      ]
    }
  ],
  plenaryActivity: {
    title: "Comparison in a Nutshell",
    duration: "7 minutes",
    instructions:
      "Each student writes one sentence comparing the two poems studied today. The sentence must include: both poem titles, one similarity or difference, and one technique. Display five examples on the board. Class votes on the most precise and analytical. Use this to reinforce that effective comparison is concise and specific.",
    differentiation: {
      support: "Provide a sentence frame: 'Both [Poem A] and [Poem B] use [technique] to...'",
      core: "Students write independently, aiming for precision and analytical vocabulary.",
      stretch: "Students write a second sentence that challenges or nuances their first comparison."
    }
  },
  homework:
    "Choose a third poem from the Time and Place cluster. Write a paragraph comparing it to one of the two poems studied in class, using the comparison structure practised today.",
  worksheetQuestions: [
    {
      question: "How is the poetry anthology assessed on Edexcel Literature Paper 2? Describe the question format.",
      lines: 5,
      modelAnswer:
        "The poetry anthology appears in Paper 2, Section B of Edexcel English Literature. Students are given one named poem from their studied cluster and must compare it with another poem of their choice from the same cluster. The question asks students to explore how both poets present a particular theme or idea. It is worth 30 marks, testing AO1, AO2, and AO3. Integrated comparison is expected throughout.",
      marks: 4
    },
    {
      question: "What does 'integrated comparison' mean and why is it important for achieving high marks on Edexcel?",
      lines: 4,
      modelAnswer:
        "Integrated comparison means weaving analysis of both poems together throughout the response, rather than writing about Poem A in full and then Poem B. It involves using comparison connectives to move between poems within paragraphs. Edexcel mark schemes reward this because it demonstrates the ability to synthesise ideas and see connections, which is a higher-order skill than sequential analysis.",
      marks: 4
    },
    {
      question: "Choose one poem from the Time and Place cluster. Identify one key quotation and analyse the language technique used.",
      lines: 6,
      modelAnswer:
        "In 'The Prelude', Wordsworth describes the mountain as 'a huge peak, black and huge' — the repetition of 'huge' emphasises the overwhelming scale of nature, while 'black' creates a sinister, foreboding tone. The simplicity of the language mirrors the child narrator's limited ability to articulate terror, making the fear feel raw and immediate. This conveys the power of place to transform experience.",
      marks: 4
    },
    {
      question: "Explain one similarity and one difference between two poems from the cluster in terms of how they present 'place'.",
      lines: 6,
      modelAnswer:
        "Similarity: Both 'The Prelude' and 'The Emigree' present place as something that has a powerful emotional and psychological impact on the speaker — nature overwhelms in Wordsworth, while the homeland haunts in Rumens. Difference: In 'The Prelude', the place is physically present and experienced directly, while in 'The Emigree', the place exists only in memory, making it idealised and potentially unreliable. This difference affects how each poet uses imagery — Wordsworth's is sensory and immediate, Rumens's is dreamlike and symbolic.",
      marks: 5
    },
    {
      question: "Why might a poet choose to use enjambment when writing about time or place? Give an example if possible.",
      lines: 4,
      modelAnswer:
        "Enjambment — where a sentence runs over a line break without punctuation — can mirror the continuous, uncontrollable flow of time or the experience of moving through a place. It creates momentum and prevents the reader from pausing, reflecting how memories or journeys feel relentless. In 'The Prelude', enjambment mirrors the flowing movement of the boat on the lake and the escalating sense of awe.",
      marks: 3
    },
    {
      question: "List three comparison connectives and write a sentence using each one to compare two poems.",
      lines: 6,
      modelAnswer:
        "1. 'Similarly': Similarly, both Wordsworth and Rumens use natural imagery to convey the emotional significance of place. 2. 'Conversely': Conversely, while Wordsworth presents place as threatening, Rumens idealises her homeland as a source of comfort. 3. 'Whereas': Whereas 'The Prelude' uses first-person narration to create immediacy, 'The Emigree' uses a more reflective, elegiac tone to convey distance from the remembered place.",
      marks: 3
    }
  ],
  teacherNotes: [
    "Edexcel's poetry anthology is divided into clusters. Check which cluster your school has been assigned — Time and Place is one option.",
    "The comparison question names one poem; students choose the second. Practise making strategic choices about which poem to compare.",
    "Build a comparison grid across all poems in the cluster over multiple lessons so students can see the full range of potential pairings.",
    "Students often struggle to compare rather than contrast. Explicitly teach that similarities can be just as analytically rich as differences."
  ],
  targetedSkills: [
    "Poetry Comparison",
    "Poetry Analysis",
    "Language Analysis",
    "Structural Techniques",
    "AO1: Textual Reference",
    "AO2: Writer's Methods",
    "Comparative Analysis"
  ]
};

// ── Lesson 7: Edexcel Poetry Anthology — Belonging Cluster ──

const lesson7: LessonPlan = {
  id: "edexcel-07-poetry-belonging",
  title: "Edexcel Poetry Anthology: Belonging Cluster",
  text: "Edexcel Poetry Anthology",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Explore key poems from the Belonging cluster of the Edexcel Poetry Anthology",
    "Analyse how poets use language, structure, and form to present ideas about identity, community, and exclusion",
    "Develop comparison skills by identifying thematic and methodological links across poems",
    "Practise writing comparative analysis paragraphs to Edexcel mark scheme standards"
  ],
  successCriteria: [
    "I can analyse at least two poems from the Belonging cluster in detail",
    "I can explain how different poets present ideas about belonging and identity",
    "I can compare poets' methods using integrated comparison",
    "I can identify how form and structure contribute to meaning in the poems"
  ],
  keywords: [
    "identity",
    "belonging",
    "alienation",
    "community",
    "cultural identity",
    "voice",
    "persona",
    "free verse",
    "dialect",
    "heritage"
  ],
  starterActivity: {
    title: "Belonging Spectrum",
    duration: "8 minutes",
    instructions:
      "Draw an imaginary spectrum across the room — one end labelled 'Total Belonging' and the other 'Total Exclusion'. Read out five brief scenarios (e.g. 'You move to a new country where you don't speak the language', 'Your family has lived in the same village for generations'). Students physically position themselves on the spectrum and explain their reasoning. Link to the idea that belonging is not binary — it exists on a spectrum, just as the poems in this cluster present varied, complex experiences of belonging.",
    differentiation: {
      support: "Provide laminated position cards (Belonging / Mostly Belonging / Somewhere Between / Mostly Excluded / Excluded) for students to hold up instead of moving.",
      core: "Students position themselves and articulate their reasoning verbally.",
      stretch: "Students suggest which poems from the cluster might represent each position on the spectrum."
    },
    resources: ["Spectrum labels (printed A3)", "Scenario cards"]
  },
  mainActivities: [
    {
      title: "Dual-Poem Analysis: Exploring Belonging Through Language and Structure",
      duration: "25 minutes",
      instructions:
        "Select two poems from the Belonging cluster that offer rich comparison (e.g. 'Half-caste' by John Agard and 'No Problem' by Benjamin Zephaniah, or 'What Were They Like?' by Denise Levertov and 'Poppies' by Jane Weir — adjust to your school's selection). Read both poems aloud, the first with teacher modelling of tone and emphasis. For each poem, students complete a comparative analysis table: speaker's perspective, key imagery, tone shifts, structural choices, and how belonging/exclusion is presented. Model the first row (speaker's perspective) for both poems, then students complete the remaining rows.",
      differentiation: {
        support: "Pre-fill the table for Poem A; students complete Poem B with guided prompts alongside.",
        core: "Students complete the full table for both poems independently.",
        stretch: "Students identify how each poet's personal context (biography, culture, historical period) shapes their presentation of belonging."
      },
      resources: [
        "Poem texts (annotatable copies)",
        "Comparative analysis table worksheet",
        "Poet biography cards"
      ]
    },
    {
      title: "Comparative Writing: Crafting an Edexcel Response",
      duration: "18 minutes",
      instructions:
        "Display an Edexcel-style question: 'Compare how poets present ideas about belonging in [Poem A] and one other poem from the Belonging cluster.' Recap the integrated comparison structure from Lesson 6. Students plan and write one comparative paragraph, choosing a specific aspect to compare (e.g. how both poets use voice/persona to convey belonging, or how structural choices reflect the experience of exclusion). Share two paragraphs under the visualiser. Class identifies strengths using the Edexcel Level 4/5 descriptors.",
      differentiation: {
        support: "Provide a planning frame with the comparison aspect pre-selected and sentence starters.",
        core: "Students choose their own comparison focus and write a full paragraph.",
        stretch: "Students write a second paragraph that takes the opposing view or explores a contrasting aspect, creating a more balanced response."
      },
      resources: [
        "Sample question slide",
        "Planning frame (support tier)",
        "Edexcel Level 4/5 poetry descriptors (simplified)"
      ]
    }
  ],
  plenaryActivity: {
    title: "Poet's Voice: Reading Aloud",
    duration: "7 minutes",
    instructions:
      "Two or three volunteers read aloud a stanza from their chosen poem with expression and emphasis that reflects their interpretation. The class listens and comments on how the reading brought out meaning — what was emphasised? What tone was created? Use this to reinforce that poetry is a spoken art form and that understanding tone and voice is essential for analysis.",
    differentiation: {
      support: "Students can read along with a partner for confidence.",
      core: "Students volunteer individually and explain one choice they made in their reading.",
      stretch: "Students read the same stanza in two different ways and the class discusses how interpretation changes."
    }
  },
  homework:
    "Write a comparison of two poems from the Belonging cluster, answering: 'How do the poets present the experience of feeling like an outsider?' Write at least two comparative paragraphs.",
  worksheetQuestions: [
    {
      question: "What themes might you expect to find in the Belonging cluster? List at least five.",
      lines: 4,
      modelAnswer:
        "Identity, cultural heritage, community, exclusion, alienation, displacement, home, family, race and ethnicity, language and dialect, nostalgia, acceptance, prejudice, migration, and the tension between individual and collective identity.",
      marks: 3
    },
    {
      question: "Why might a poet choose to write in dialect or non-standard English when exploring belonging?",
      lines: 5,
      modelAnswer:
        "Writing in dialect or non-standard English is an act of cultural assertion — it claims belonging to a specific community and resists the dominance of 'standard' English. It can also convey authenticity, making the speaker's voice feel genuine and rooted in a particular place or culture. For example, John Agard's use of Caribbean dialect in 'Half-caste' challenges the reader's assumptions about what 'proper' English sounds like, turning language itself into a statement about belonging and identity.",
      marks: 4
    },
    {
      question: "Choose one poem from the Belonging cluster. Analyse how the poet uses imagery to convey ideas about belonging or exclusion.",
      lines: 6,
      modelAnswer:
        "In 'The Emigree', Carol Rumens uses light imagery — 'my city takes me dancing', 'sunlight' — to present the speaker's remembered homeland as a place of warmth and joy. This idealised imagery conveys a deep sense of belonging to a place that exists now only in memory. The contrast with the 'dark city' of the present suggests that exclusion from the homeland has not diminished its emotional significance. The imagery implies that true belonging is felt internally, not determined by physical presence.",
      marks: 4
    },
    {
      question: "Explain how form and structure can contribute to the theme of belonging. Give an example from one poem.",
      lines: 5,
      modelAnswer:
        "Form and structure can mirror the experience of belonging or exclusion. For example, free verse (no regular rhyme or metre) can convey a sense of dislocation or freedom from constraint, reflecting a speaker who does not 'fit' conventional patterns. Alternatively, a tightly structured poem with regular rhyme might suggest order, stability, and rootedness. In 'Half-caste', the lack of punctuation and irregular line lengths create a sense of urgency and defiance, structurally embodying the speaker's refusal to be defined by others.",
      marks: 4
    },
    {
      question: "What is a 'persona' in poetry and how might it relate to the theme of belonging?",
      lines: 4,
      modelAnswer:
        "A persona is a character or voice adopted by the poet — not necessarily the poet themselves. Poets use persona to explore experiences of belonging from different perspectives, including those that may not be their own. This allows them to give voice to marginalised or silenced experiences. The use of persona can also create distance, suggesting that the experience of exclusion is universal rather than purely autobiographical.",
      marks: 3
    },
    {
      question: "Write a comparative sentence linking two poems from the Belonging cluster. Identify one similarity in method.",
      lines: 4,
      modelAnswer:
        "Both 'Half-caste' and 'No Problem' use a direct, confrontational first-person voice to challenge societal prejudice, placing the reader in the position of the person who has been excluded. This shared method makes the experience of not belonging feel immediate and personal, demanding the reader's engagement rather than allowing passive sympathy.",
      marks: 3
    }
  ],
  teacherNotes: [
    "The Belonging cluster explores identity, race, culture, and community. Handle discussions sensitively, particularly around race and prejudice.",
    "Ensure students have read all poems in the cluster before this lesson. This lesson focuses on comparison skills, not first encounters with the poems.",
    "Adjust poem selections based on your school's chosen cluster. The Edexcel anthology offers different cluster options.",
    "Display comparison connectives prominently in the classroom throughout the poetry unit."
  ],
  targetedSkills: [
    "Poetry Comparison",
    "Poetry Analysis",
    "Language Analysis",
    "Comparative Analysis",
    "AO1: Textual Reference",
    "AO2: Writer's Methods",
    "Cultural Context"
  ]
};

// ── Lesson 8: Edexcel Unseen Poetry — Two-Poem Comparison Technique ──

const lesson8: LessonPlan = {
  id: "edexcel-08-unseen-poetry-comparison",
  title: "Edexcel Unseen Poetry: Two-Poem Comparison Technique",
  text: "Unseen Poetry",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand the structure of the Edexcel unseen poetry section (Paper 2 Literature, Section C)",
    "Develop a systematic approach to reading and annotating an unseen poem under timed conditions",
    "Practise comparing two unseen poems on a shared theme, as required by the Edexcel exam",
    "Build confidence with the specific demands of the unseen poetry comparison question"
  ],
  successCriteria: [
    "I can annotate an unseen poem systematically within five minutes",
    "I can identify key themes, techniques, and effects in a poem I have never seen before",
    "I can compare two unseen poems using integrated comparison structure",
    "I can write a comparison response that addresses AO1 and AO2"
  ],
  keywords: [
    "unseen",
    "annotation",
    "comparison",
    "inference",
    "tone",
    "mood",
    "imagery",
    "form",
    "connotation",
    "ambiguity"
  ],
  starterActivity: {
    title: "60-Second Annotation Challenge",
    duration: "8 minutes",
    instructions:
      "Display a very short poem (4–6 lines) on the board. Students have exactly 60 seconds to annotate as many features as they can on a printed copy. After time is up, share findings as a class, tallying the types of features identified (language, structure, form, tone). Discuss the hierarchy: what should you annotate first when time is limited? Establish a priority order: (1) meaning/subject, (2) tone/mood, (3) key imagery, (4) structural features, (5) form.",
    differentiation: {
      support: "Provide an annotation checklist to guide what to look for.",
      core: "Students annotate freely, then compare their approach with the priority order.",
      stretch: "Students annotate and then explain which single annotation would be most valuable in an exam response."
    },
    resources: ["Short poem printed handout", "Annotation checklist (support tier)", "Timer"]
  },
  mainActivities: [
    {
      title: "Reading and Analysing the First Unseen Poem",
      duration: "18 minutes",
      instructions:
        "Distribute Unseen Poem A (select a poem on a clear theme such as nature, memory, or conflict — approximately 16–24 lines). Guide students through the systematic reading process: (1) Read the whole poem once for overall meaning (2 mins). (2) Re-read, annotating key features using the priority order (3 mins). (3) Identify the poet's message or attitude (1 min). Students then write three analytical bullet points, each identifying a technique, embedding a quotation, and explaining the effect. This mirrors the first part of the Edexcel unseen question.",
      differentiation: {
        support: "Provide guided annotation prompts in the margin of the poem (e.g. 'What technique is used here?' 'What mood does this create?').",
        core: "Students follow the three-step process independently and write three bullet points.",
        stretch: "Students write a full paragraph response to a question about the poem's theme, going beyond bullet points."
      },
      resources: [
        "Unseen Poem A handout (with annotation space)",
        "Systematic reading process card",
        "Bullet point response template"
      ]
    },
    {
      title: "The Comparison: Introducing Unseen Poem B",
      duration: "24 minutes",
      instructions:
        "Distribute Unseen Poem B (on a similar theme to Poem A but with contrasting methods — e.g. if Poem A is reflective and uses extended metaphor, Poem B might be energetic and use direct language). Students read and annotate Poem B using the same process (5 mins). Then, introduce the comparison task: 'Compare how the poets present [theme] in Poem A and Poem B.' Model the planning stage: create a Venn diagram or comparison grid identifying similarities and differences in subject, method, tone, and effect. Students plan their comparison (5 mins) and then write two comparative paragraphs (14 mins). Emphasise that Edexcel rewards comparison of methods, not just themes.",
      differentiation: {
        support: "Provide a pre-started Venn diagram with one similarity and one difference filled in. Offer a paragraph frame for the first comparative paragraph.",
        core: "Students complete the planning and write two paragraphs independently.",
        stretch: "Students write three paragraphs: similarity in theme, difference in method, and an evaluative conclusion on which poem is more effective."
      },
      resources: [
        "Unseen Poem B handout",
        "Venn diagram/comparison grid template",
        "Paragraph frame (support tier)",
        "Timer for timed writing"
      ]
    }
  ],
  plenaryActivity: {
    title: "Top Tips Board",
    duration: "7 minutes",
    instructions:
      "Each student writes one 'top tip' for tackling unseen poetry comparison on a sticky note. Collect and display on a class 'Top Tips Board'. Read out the five most useful tips. Students copy their favourite three into their books. This creates a student-generated revision resource and consolidates learning through articulation.",
    differentiation: {
      support: "Provide a sentence starter: 'When comparing unseen poems, always remember to...'",
      core: "Students write an original, specific tip based on today's learning.",
      stretch: "Students write a tip and explain which common mistake it prevents."
    }
  },
  homework:
    "Complete a full unseen poetry comparison using two new poems provided on a homework sheet. Follow the systematic reading process and write at least two comparative paragraphs. Time yourself — aim for 30 minutes maximum.",
  worksheetQuestions: [
    {
      question: "Describe the structure of the Edexcel unseen poetry question. How many poems are involved and what are you asked to do?",
      lines: 5,
      modelAnswer:
        "The Edexcel unseen poetry section (Paper 2, Section C) involves two unseen poems. The first question asks students to analyse one poem, focusing on language, structure, and form (AO1/AO2). The second question provides a second poem and asks students to compare the two poems on a shared theme. The comparison question requires students to discuss similarities and/or differences in how the poets present the given theme, comparing methods as well as ideas.",
      marks: 4
    },
    {
      question: "Explain the five-step priority order for annotating an unseen poem. Why is this order important?",
      lines: 5,
      modelAnswer:
        "1. Overall meaning/subject — understand what the poem is about. 2. Tone/mood — identify the emotional quality. 3. Key imagery — find the most striking language features. 4. Structural features — note stanza breaks, enjambment, shifts, and patterns. 5. Form — consider rhyme scheme, metre, and the type of poem. This order is important because meaning and tone are foundational — without understanding these, analysis of technique becomes disconnected. Working from big picture to small detail ensures responses are grounded and purposeful.",
      marks: 4
    },
    {
      question: "What is the difference between comparing themes and comparing methods? Which does Edexcel prioritise?",
      lines: 4,
      modelAnswer:
        "Comparing themes means discussing what both poems are about — the ideas, subjects, and messages. Comparing methods means discussing how the poets convey those ideas — through language techniques, structural choices, form, tone, and imagery. Edexcel prioritises methods because it tests AO2 (analyse the methods writers use). A response that only compares themes without analysing how they are presented will be limited to lower levels.",
      marks: 4
    },
    {
      question: "Write a comparative sentence comparing how two poems use imagery to present a shared theme.",
      lines: 4,
      modelAnswer:
        "While Poem A uses an extended metaphor of the sea to present memory as vast and uncontrollable, Poem B employs a simile comparing memory to 'a locked room', suggesting something deliberately contained and private. Both use imagery to convey the power of memory, but Poem A emphasises its overwhelming nature while Poem B focuses on the desire to control and conceal it.",
      marks: 3
    },
    {
      question: "What should you do if you find an unseen poem confusing or difficult to understand?",
      lines: 5,
      modelAnswer:
        "First, do not panic — unseen poems are meant to be unfamiliar. Re-read the poem at least twice, focusing on the title and opening/closing lines for clues about subject and tone. Look for words or images you do recognise and build outward from them. Focus on what you can analyse (specific techniques and their effects) even if you are unsure of the overall meaning. Write about the effect on the reader — even tentative analysis of language features will score marks. Avoid leaving the question blank.",
      marks: 4
    },
    {
      question: "Why is it important to discuss 'the effect on the reader' in your analysis? How does this relate to AO2?",
      lines: 4,
      modelAnswer:
        "Discussing the effect on the reader shows that you understand how a writer's choices create meaning and impact. AO2 specifically asks students to analyse 'the effects of the writer's choices of language, structure and form.' Without discussing effect, analysis remains descriptive (feature-spotting) rather than analytical. Phrases like 'this creates a sense of...', 'this evokes...' or 'the reader is made to feel...' demonstrate engagement with AO2.",
      marks: 3
    }
  ],
  teacherNotes: [
    "The unseen poetry section is in Paper 2, Section C and is worth 32 marks in total (20 for the first poem, 12 for the comparison).",
    "Select unseen poems that are accessible but analytically rich. Avoid poems that are too obscure for the first practice session.",
    "Time pressure is significant in this section. Practise timed conditions regularly once the technique is established.",
    "The comparison question carries fewer marks (12) but students often lose marks here by writing about the poems separately rather than comparatively."
  ],
  targetedSkills: [
    "Unseen Poetry",
    "Poetry Comparison",
    "Poetry Analysis",
    "Annotation",
    "AO1: Textual Reference",
    "AO2: Writer's Methods",
    "Comparative Analysis",
    "Time Management"
  ]
};

// ── Lesson 9: Edexcel Spoken Language Endorsement Preparation ──

const lesson9: LessonPlan = {
  id: "edexcel-09-spoken-language-endorsement",
  title: "Edexcel Spoken Language Endorsement Preparation",
  text: "Spoken Language Endorsement",
  board: "Edexcel",
  yearGroup: "10-11",
  duration: "60 minutes",
  objectives: [
    "Understand the requirements of the Edexcel Spoken Language Endorsement (separate from the GCSE grade)",
    "Plan a spoken presentation that meets the Pass, Merit, or Distinction criteria",
    "Develop skills in presenting, listening, and responding to questions",
    "Practise structuring a spoken argument with clear, formal Standard English and audience engagement"
  ],
  successCriteria: [
    "I can explain what the Spoken Language Endorsement requires and how it is graded",
    "I can plan a structured spoken presentation with a clear argument and supporting evidence",
    "I can identify techniques for engaging an audience during a live presentation",
    "I can respond to questions confidently and develop my ideas spontaneously"
  ],
  keywords: [
    "endorsement",
    "Standard English",
    "register",
    "rhetoric",
    "audience engagement",
    "articulation",
    "counter-argument",
    "spontaneous speech",
    "formal register"
  ],
  starterActivity: {
    title: "Great Speakers: What Makes Them Effective?",
    duration: "8 minutes",
    instructions:
      "Play a 90-second clip of an effective public speaker (e.g. a TED Talk excerpt, a speech from a film, or a student model). Students note three things the speaker does well — focusing on voice (pace, tone, emphasis), content (structure, evidence, rhetoric), and engagement (eye contact, gestures, audience interaction). Share observations as a class. Establish that effective spoken language combines what you say with how you say it.",
    differentiation: {
      support: "Provide a three-column observation grid: Voice / Content / Engagement.",
      core: "Students make independent notes and contribute at least one observation per category.",
      stretch: "Students rank the three categories by importance for the Edexcel endorsement and justify their ranking."
    },
    resources: ["Video clip (90 seconds)", "Observation grid (support tier)"]
  },
  mainActivities: [
    {
      title: "Understanding the Endorsement Criteria and Planning a Presentation",
      duration: "22 minutes",
      instructions:
        "Distribute the Edexcel Spoken Language Endorsement criteria (simplified). Walk through the three grades: Pass, Merit, Distinction. Key requirements: present individual ideas, use Standard English appropriately, listen and respond to questions. Students choose a topic from a list of options (or propose their own, subject to teacher approval). Topics should allow for a clear argument with supporting evidence (e.g. 'Social media does more harm than good', 'The school day should start later', 'Everyone should learn a second language'). Students plan their presentation using a structured template: Introduction (hook + thesis), Three main points (each with evidence), Counter-argument acknowledgement, Conclusion (call to action or summary).",
      differentiation: {
        support: "Provide a heavily scaffolded planning template with sentence starters for each section and a model plan to reference.",
        core: "Students use the planning template independently, developing their own argument structure.",
        stretch: "Students plan without the template, create their own structure, and include at least two rhetorical devices and a genuine counter-argument."
      },
      resources: [
        "Edexcel Spoken Language criteria sheet (simplified)",
        "Topic choice list",
        "Presentation planning template",
        "Model plan (support tier)"
      ]
    },
    {
      title: "Mini Practice: Presenting and Responding to Questions",
      duration: "20 minutes",
      instructions:
        "In groups of four, each student delivers a 90-second mini-presentation based on their plan (introduction and one main point only — this is a practice, not the full assessment). After each presentation, the group asks two questions. The presenter must respond using Standard English, developing their ideas spontaneously. Observers use a peer feedback sheet aligned to the endorsement criteria, noting strengths and one target. Rotate until all group members have presented.",
      differentiation: {
        support: "Allow students to use prompt cards during their presentation. Provide a bank of question stems for peers to use.",
        core: "Students present from memory or brief notes. Peers generate their own questions.",
        stretch: "Students present without notes and must handle a deliberately challenging counter-argument question from their group."
      },
      resources: [
        "Timer (90 seconds per student)",
        "Peer feedback sheet",
        "Question stem bank (support tier)",
        "Prompt cards"
      ]
    }
  ],
  plenaryActivity: {
    title: "Self-Assessment: Where Am I?",
    duration: "7 minutes",
    instructions:
      "Display the Pass, Merit, and Distinction criteria side by side. Students re-read the criteria and honestly assess where they currently sit based on today's practice. They write: 'Currently I am working at [Pass/Merit/Distinction] because...' and 'To move up, I need to...' Collect these for teacher review and to inform individual feedback before the formal assessment.",
    differentiation: {
      support: "Provide the criteria as a checklist with tick boxes — students tick what they achieved and circle what they need to work on.",
      core: "Students write a full self-assessment with specific examples from their practice.",
      stretch: "Students set three specific, measurable targets for their formal assessment and explain how they will achieve each one."
    }
  },
  homework:
    "Complete your presentation plan in full. Practise delivering your presentation at home (to a mirror, a family member, or by recording yourself). Time yourself — aim for 3–5 minutes. Write down three questions someone might ask you and plan your responses.",
  worksheetQuestions: [
    {
      question: "What is the Edexcel Spoken Language Endorsement and how does it relate to your GCSE grade?",
      lines: 4,
      modelAnswer:
        "The Spoken Language Endorsement is a separate, compulsory component of the GCSE English Language qualification. It is graded Pass, Merit, or Distinction (not numerically) and is reported on the student's certificate alongside their GCSE grade but does not affect the 1–9 grade. It assesses the ability to present ideas, use Standard English, and respond to questions.",
      marks: 3
    },
    {
      question: "What are the key differences between a Merit and a Distinction in the Spoken Language Endorsement?",
      lines: 5,
      modelAnswer:
        "For a Merit, students present ideas clearly and appropriately, use Standard English consistently, listen to questions and respond with some development. For a Distinction, students present ideas with confidence and flair, use Standard English with sophistication (varying tone, register, and vocabulary for effect), listen perceptively, respond to questions with spontaneous development and counter-argument, and engage the audience compellingly throughout.",
      marks: 4
    },
    {
      question: "List four techniques for engaging an audience during a spoken presentation.",
      lines: 4,
      modelAnswer:
        "1. Rhetorical questions — make the audience think and feel involved. 2. Direct address ('you', 'we') — creates a personal connection. 3. Varied pace and tone — emphasises key points and maintains interest. 4. Anecdote or example — makes abstract arguments concrete and relatable. Other valid answers include: eye contact, pausing for effect, humour, gestures, and audience interaction.",
      marks: 4
    },
    {
      question: "Why is it important to acknowledge a counter-argument in your presentation?",
      lines: 4,
      modelAnswer:
        "Acknowledging a counter-argument shows intellectual maturity and balance. It demonstrates that you have considered multiple perspectives, making your argument more credible and persuasive. It also pre-empts questions from the audience, showing confidence in your position. The Distinction criteria values this kind of sophisticated, nuanced argumentation.",
      marks: 3
    },
    {
      question: "What does 'Standard English' mean and why is it required for the endorsement?",
      lines: 4,
      modelAnswer:
        "Standard English is the conventionally accepted form of English used in formal contexts — it avoids slang, dialect forms, and informal grammar. It is required because the endorsement assesses students' ability to communicate formally and appropriately in a public-speaking context. This does not mean students must lose their accent or identity, but that they can adapt their register to suit a formal audience and purpose.",
      marks: 3
    },
    {
      question: "How should you respond if someone asks a question you were not expecting during your presentation?",
      lines: 5,
      modelAnswer:
        "Take a brief pause to think — this shows composure, not weakness. Acknowledge the question ('That is a really interesting point'). Relate it to something you do know or have planned. If you genuinely do not know, say so honestly but redirect: 'I have not researched that specific area, but based on what I have found, I believe...' Maintain Standard English and a confident tone throughout. The ability to handle unexpected questions is key to achieving Distinction.",
      marks: 4
    }
  ],
  teacherNotes: [
    "The Spoken Language Endorsement must be conducted under controlled conditions. This lesson is preparation — the formal assessment should follow once students have had time to practise.",
    "Record the formal assessment for moderation purposes, as required by Edexcel.",
    "Students with specific communication needs may require reasonable adjustments — consult the Edexcel access arrangements guidance.",
    "Encourage students to choose topics they feel genuinely passionate about — authentic engagement is visible to assessors and aids confidence."
  ],
  targetedSkills: [
    "Speaking and Listening",
    "Persuasive Speaking",
    "Rhetorical Devices",
    "Standard English",
    "Audience Awareness",
    "Spontaneous Response"
  ]
};

// ── Lesson 10: Edexcel Full Exam Strategy — Paper-by-Paper Revision Plan ──

const lesson10: LessonPlan = {
  id: "edexcel-10-full-exam-strategy",
  title: "Edexcel Full Exam Strategy: Paper-by-Paper Revision Plan",
  text: "Edexcel GCSE English Exam Strategy",
  board: "Edexcel",
  yearGroup: "11",
  duration: "60 minutes",
  objectives: [
    "Consolidate understanding of all four Edexcel English exam papers (Language Paper 1, Language Paper 2, Literature Paper 1, Literature Paper 2)",
    "Create a personalised revision plan based on individual strengths and weaknesses",
    "Practise exam-day strategies: timing, question prioritisation, and mark-per-minute calculations",
    "Build confidence and reduce anxiety through familiarity with the exam structure"
  ],
  successCriteria: [
    "I can describe the structure, timing, and question types of all four exam papers",
    "I can identify my strongest and weakest areas across the exam papers",
    "I can create a realistic, personalised revision timetable",
    "I can apply timing strategies to maximise marks in each paper"
  ],
  keywords: [
    "revision strategy",
    "time management",
    "mark allocation",
    "assessment objectives",
    "exam technique",
    "prioritisation",
    "retrieval practice",
    "interleaving",
    "spaced repetition"
  ],
  starterActivity: {
    title: "Exam Paper Confidence Audit",
    duration: "8 minutes",
    instructions:
      "Distribute a confidence audit sheet listing every question across all four papers (Language P1 Q1–Q5, Language P2 Q1–Q7, Literature P1 Shakespeare and Post-1914 Literature, Literature P2 19th-century novel, poetry anthology, and unseen poetry). Students rate their confidence for each question from 1 (very worried) to 5 (very confident). This self-assessment will drive the personalised revision planning in the main activity.",
    differentiation: {
      support: "Simplify the audit by grouping questions into categories (e.g. 'Reading questions', 'Writing questions', 'Literature essays') rather than listing each individually.",
      core: "Students complete the full audit independently with honest self-assessment.",
      stretch: "Students rank their bottom three areas by urgency and estimate how many additional marks they could gain by improving each one."
    },
    resources: ["Confidence audit sheet", "Past mock results (if available)"]
  },
  mainActivities: [
    {
      title: "Paper-by-Paper Strategy Stations",
      duration: "28 minutes",
      instructions:
        "Set up four stations around the room, one per paper: (1) Language Paper 1, (2) Language Paper 2, (3) Literature Paper 1, (4) Literature Paper 2. Each station has: a one-page summary of the paper's structure, timing, and AOs; a 'common pitfalls' card; a 'top strategies' card; and one practice question with a model answer extract. Students rotate through all four stations (7 minutes each), completing a strategy notes sheet for each paper. At each station they record: paper structure summary, their timing plan, one key strategy they will use, and one common mistake they will avoid.",
      differentiation: {
        support: "Provide a partially completed strategy notes sheet with paper structures pre-filled; students add personal strategies and timing.",
        core: "Students complete the full strategy notes sheet at each station, engaging with all materials.",
        stretch: "Students add a 'mark maximiser' section at each station, identifying specific techniques for gaining the highest-level marks on that paper's most challenging question."
      },
      resources: [
        "Station summary cards (x4)",
        "Common pitfalls cards (x4)",
        "Top strategies cards (x4)",
        "Practice question with model answer extract (x4)",
        "Strategy notes sheet (four sections)"
      ]
    },
    {
      title: "Personalised Revision Plan Builder",
      duration: "15 minutes",
      instructions:
        "Using their confidence audit and strategy notes, students create a personalised 4-week revision plan. Provide a blank timetable template. Teach three evidence-based revision principles: (1) Spaced repetition — spread practice over time, not cramming. (2) Interleaving — mix topics rather than blocking them. (3) Retrieval practice — test yourself rather than re-reading. Students allocate specific revision activities to each week, prioritising their lowest-confidence areas. Activities should be specific (e.g. 'Practise Language P1 Q4 evaluation using a past paper', not just 'revise English'). Teacher circulates to review plans and challenge unrealistic or vague entries.",
      differentiation: {
        support: "Provide a pre-structured timetable with suggested activities that students select and personalise.",
        core: "Students create their own timetable from scratch, applying the three revision principles.",
        stretch: "Students create a timetable and a self-testing schedule, designing their own retrieval practice questions for each topic."
      },
      resources: [
        "Blank 4-week revision timetable template",
        "Revision principles reference card",
        "Suggested revision activities list",
        "Past paper question bank reference"
      ]
    }
  ],
  plenaryActivity: {
    title: "One Thing I Will Do Differently",
    duration: "7 minutes",
    instructions:
      "Each student writes one specific commitment on a card: 'In the exam, I will...' or 'In my revision, I will...' followed by a concrete action. Examples: 'In the exam, I will spend 45 minutes on Language P1 Q5' or 'In my revision, I will practise unseen poetry comparison every week.' Students read their commitment aloud to a partner, who signs the card as a witness. Cards are displayed on a classroom 'Commitment Wall' and can be revisited in subsequent lessons.",
    differentiation: {
      support: "Provide a list of example commitments for students to choose from or adapt.",
      core: "Students write an original, specific commitment based on their personal audit.",
      stretch: "Students write three commitments (one for revision, one for exam technique, one for a specific paper) and explain how each will gain them additional marks."
    }
  },
  homework:
    "Begin your revision plan this week. Complete one revision activity from your timetable and bring evidence of it to next lesson (e.g. a completed practice question, annotated notes, or a set of flashcards). Be ready to explain which revision principle you applied.",
  worksheetQuestions: [
    {
      question: "List all four Edexcel English exam papers and state the duration and total marks for each.",
      lines: 6,
      modelAnswer:
        "Language Paper 1 (1EN0/01): Fiction and Imaginative Writing — 1 hour 45 minutes, 64 marks. Language Paper 2 (1EN0/02): Non-Fiction and Transactional Writing — 2 hours 5 minutes, 96 marks. Literature Paper 1 (1ET0/01): Shakespeare and Post-1914 Literature — 1 hour 45 minutes, 80 marks (including 8 SPaG). Literature Paper 2 (1ET0/02): 19th-Century Novel, Poetry Anthology, and Unseen Poetry — 2 hours 15 minutes, 100 marks.",
      marks: 4
    },
    {
      question: "Explain the concept of 'spaced repetition' and how you could apply it to your English revision.",
      lines: 5,
      modelAnswer:
        "Spaced repetition means revisiting material at increasing intervals over time, rather than cramming everything in one session. For English, this could mean reviewing key quotations from Macbeth every three days in Week 1, then every five days in Week 2, then once a week in Week 3. Each time, the student tests themselves (retrieval practice) rather than just re-reading. This strengthens long-term memory and ensures quotations are available under exam pressure.",
      marks: 4
    },
    {
      question: "What is 'interleaving' and why is it more effective than blocked practice for exam revision?",
      lines: 5,
      modelAnswer:
        "Interleaving means mixing different topics or skills within a single revision session, rather than spending the whole session on one topic (blocked practice). For example, a revision session might include 20 minutes on Language P1 Q2, then 20 minutes on A Christmas Carol quotations, then 20 minutes on unseen poetry. This is more effective because it forces the brain to switch between different types of thinking, which improves the ability to identify and apply the right approach in an exam where questions test varied skills.",
      marks: 4
    },
    {
      question: "Create a timing plan for Edexcel Literature Paper 2 (2 hours 15 minutes, 100 marks). Show your working.",
      lines: 6,
      modelAnswer:
        "Total time: 135 minutes. Total marks: 100. Rate: approximately 1.35 minutes per mark. Section A (19th-century novel, 40 marks): 54 minutes — includes 5 minutes planning and 49 minutes writing. Section B (Poetry anthology comparison, 30 marks): 40 minutes — includes 5 minutes planning and 35 minutes writing. Section C (Unseen poetry, 20 + 12 marks = 32 marks): 38 minutes — split as 22 minutes on the first poem and 16 minutes on the comparison. Checking: 3 minutes.",
      marks: 5
    },
    {
      question: "Identify your two weakest areas across the four papers. For each, suggest one specific revision activity you could do.",
      lines: 6,
      modelAnswer:
        "Example response: Weakest area 1: Language Paper 1 Q4 (evaluation). Revision activity: Practise three past paper Q4 questions per week, using the mark scheme to self-assess and identify whether I am making clear judgements supported by evidence. Weakest area 2: Literature Paper 2 unseen poetry comparison. Revision activity: Complete one unseen poetry comparison each week using poems from a revision anthology, timing myself to 16 minutes and practising integrated comparison structure.",
      marks: 4
    },
    {
      question: "What should you do in the first five minutes of each exam paper? Explain your strategy.",
      lines: 5,
      modelAnswer:
        "In the first five minutes: (1) Read through the whole paper to see all questions and texts. (2) Note the mark allocations and calculate a rough timing plan. (3) For reading papers, skim-read the source text(s) to get an overview before tackling questions. (4) For literature papers, read the question carefully and underline key words to ensure you address the right focus. (5) Take a slow breath and begin with the first question. This prevents rushing, ensures you understand what is being asked, and gives your brain time to start processing the source material.",
      marks: 4
    }
  ],
  teacherNotes: [
    "This lesson works best in the spring term of Year 11, when students have studied all texts and attempted at least one full mock exam.",
    "If mock results are available, distribute them at the start so students can use real data for their confidence audit.",
    "The revision timetable should be realistic — encourage students to build in rest days and manageable sessions (30–45 minutes).",
    "Revisit the commitment cards in subsequent lessons to maintain accountability.",
    "Consider sharing the revision timetable template with parents/carers so they can support revision at home."
  ],
  targetedSkills: [
    "Exam Technique",
    "Time Management",
    "Revision Strategy",
    "Self-Assessment",
    "Question Decoding",
    "Essay Structure"
  ]
};

// ─── Export ──────────────────────────────────────────────────────────────────

export const edexcelLessons: LessonPlan[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
];
