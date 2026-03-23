import type { LessonPlan } from '@/types'

export const jekyllHydeLessonPlans: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1: Context & the Gothic Genre
  // ─────────────────────────────────────────────
  {
    id: "jh-01-context-gothic",
    title: "Context & the Gothic Genre",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the social, historical, and literary context of the novella",
      "Explore the key features of the Gothic genre and their purpose",
      "Identify connections between Victorian society and the themes of the novella",
      "Understand Stevenson's influences and purpose in writing the text",
    ],
    successCriteria: [
      "I can explain at least three features of Victorian society relevant to the novella",
      "I can identify and explain key conventions of the Gothic genre",
      "I can connect Stevenson's context to the themes of duality and repression",
    ],
    keywords: [
      "Gothic",
      "Victorian",
      "duality",
      "repression",
      "respectability",
      "Darwinism",
      "atavism",
      "supernatural",
    ],
    starterActivity: {
      title: "Gothic Image Gallery",
      duration: "7 minutes",
      instructions:
        "Display six images associated with the Gothic genre: a crumbling castle, a dark London street, a laboratory, a full moon, a locked door, a shadowy figure. Students identify what connects these images and brainstorm the feelings they evoke (fear, mystery, unease). Introduce the term 'Gothic' and explain its literary origins. Ask: Why might Victorian writers be drawn to horror and the supernatural?",
      differentiation: {
        support: "Provide a word bank of Gothic vocabulary and match words to images.",
        core: "Generate their own Gothic vocabulary and predict how these elements might appear in the novella.",
        stretch:
          "Consider why the Gothic genre became popular during a period of rapid scientific advancement.",
      },
      resources: ["Gothic image set (projected)", "Mini whiteboards"],
    },
    mainActivities: [
      {
        title: "Victorian Context — Information Carousel",
        duration: "15 minutes",
        instructions:
          "Set up four context stations: (1) Victorian respectability and the 'double life' — the pressure to maintain a moral public image, (2) Darwin, evolution, and the fear of degeneration — the idea that humans could regress to a more primitive state, (3) Science vs religion — the anxiety caused by new scientific discoveries, (4) Victorian London — the contrast between wealthy areas and the dark, dangerous streets. Students rotate in groups, spending 3 minutes at each station, recording key notes on a context map. Debrief: Which context do you think is most relevant to a story about a doctor who transforms into a monster?",
        differentiation: {
          support: "Provide a partially completed context map with key vocabulary glossed.",
          core: "Complete the context map independently from station materials.",
          stretch:
            "At each station, predict how this context might appear in the novella's characters or events.",
        },
        resources: [
          "Four station cards",
          "Context map handout",
          "Key vocabulary definitions",
        ],
      },
      {
        title: "Gothic Conventions — Feature Analysis",
        duration: "15 minutes",
        instructions:
          "Teacher-led introduction to Gothic conventions with examples from literature: the supernatural, isolated/claustrophobic settings, darkness and mystery, doubles/doppelgangers, transgression of boundaries, the uncanny, extreme emotions, and the threat of the 'other.' For each convention, students write a brief definition and example. Then read a short extract from the novella (the description of Hyde's door or Utterson's nightmare) and identify which Gothic conventions are present. Students write a paragraph: 'How does Stevenson use Gothic conventions in this extract?'",
        differentiation: {
          support:
            "Provide definitions of each convention and guided questions for the extract analysis.",
          core: "Define conventions independently and analyse the extract with embedded quotations.",
          stretch:
            "Consider how Stevenson adapts traditional Gothic conventions for a modern urban setting.",
        },
        resources: [
          "Gothic conventions handout",
          "Short extract from the novella",
          "Analysis frame",
        ],
      },
      {
        title: "Stevenson's Purpose — Why Write This Story?",
        duration: "12 minutes",
        instructions:
          "Brief teacher input on Stevenson's life: his own struggles with respectability (his bohemian lifestyle vs his strict Calvinist upbringing in Edinburgh), the story's origin in a dream, and its immediate impact on Victorian readers. Discussion: What might Stevenson have wanted to explore or expose about Victorian society? Students write a PEEL paragraph: 'What was Stevenson's purpose in writing Jekyll and Hyde?'",
        differentiation: {
          support: "Provide a PEEL paragraph frame with sentence starters.",
          core: "Write a PEEL paragraph independently using today's contextual knowledge.",
          stretch:
            "Consider whether Stevenson was criticising Victorian society or exploring universal human nature.",
        },
        resources: ["Stevenson biography card", "PEEL frame"],
      },
    ],
    plenaryActivity: {
      title: "Context Quick Quiz",
      duration: "6 minutes",
      instructions:
        "Five quick-fire questions on context (displayed one at a time). Students answer on whiteboards. Questions cover: one Gothic convention, one fact about Victorian society, one fact about Darwin, one about Stevenson, and one linking context to theme. Review answers and clarify any misconceptions. Emphasise that context must be woven into analysis, not presented as a separate section.",
      differentiation: {
        support: "Multiple-choice format for the quiz questions.",
        core: "Answer from memory on whiteboards.",
        stretch: "For each answer, add one sentence explaining its relevance to the novella.",
      },
    },
    homework:
      "Research one additional fact about Victorian society, the Gothic genre, or Stevenson's life. Write a paragraph explaining how it connects to Jekyll and Hyde.",
    worksheetQuestions: [
      {
        question:
          "Explain two features of Victorian society that are relevant to Jekyll and Hyde.",
        lines: 6,
        modelAnswer:
          "One feature was the emphasis on respectability — Victorian gentlemen were expected to maintain an impeccable public image, suppressing any 'unacceptable' desires or behaviours. This is directly relevant to Jekyll, who creates Hyde to indulge his hidden impulses without damaging his reputation. A second feature was the impact of Darwinism, which raised fears about humanity's animal nature. Hyde's ape-like appearance and violent behaviour reflect Victorian anxieties about evolutionary regression — the idea that civilised humans could degenerate into something primitive.",
        marks: 4,
      },
      {
        question:
          "What is the Gothic genre? List four conventions and explain one in detail.",
        lines: 6,
        modelAnswer:
          "The Gothic genre is a type of literature that explores fear, the supernatural, and the darker aspects of human nature. Four conventions are: supernatural events, dark and isolated settings, the theme of the double/doppelganger, and transgression of moral or scientific boundaries. The doppelganger is particularly relevant to Jekyll and Hyde — Hyde is Jekyll's dark double, the physical embodiment of his repressed desires. This convention explores the idea that every person has a hidden self, making the reader question their own dual nature.",
        marks: 4,
      },
      {
        question:
          "How might Darwin's theory of evolution have influenced Stevenson's creation of Mr Hyde?",
        lines: 5,
        modelAnswer:
          "Darwin's theory suggested that humans evolved from more primitive beings. This created a Victorian fear of 'atavism' — the possibility that humans could regress to an earlier, more animalistic state. Hyde embodies this fear: he is described as 'ape-like' and 'troglodytic', suggesting he represents the primitive, pre-civilised human that lurks beneath the surface of every respectable gentleman. Stevenson uses Hyde to explore whether civilisation is merely a thin veneer over humanity's true nature.",
        marks: 4,
      },
      {
        question:
          "What was Stevenson's personal connection to the themes of duality and repression?",
        lines: 4,
        modelAnswer:
          "Stevenson grew up in Edinburgh with a strict Calvinist upbringing that emphasised sin and moral duty. However, he was drawn to a more bohemian, adventurous lifestyle. This personal tension between respectability and desire mirrors Jekyll's struggle. Edinburgh itself — with its respectable New Town and its dark, dangerous Old Town — may have inspired the novella's exploration of hidden double lives.",
        marks: 3,
      },
      {
        question:
          "How does the Gothic genre allow Stevenson to explore ideas that might otherwise be taboo?",
        lines: 5,
        modelAnswer:
          "The Gothic genre uses supernatural and horrifying elements to explore ideas that are too dangerous or controversial to discuss directly. By framing Jekyll's hidden desires as a Gothic transformation, Stevenson can explore the dark side of human nature — violence, selfishness, and moral corruption — without directly accusing Victorian society. The supernatural element provides a safe distance: readers can engage with disturbing ideas about their own dual nature while telling themselves 'it's just a story.' This makes the Gothic a powerful vehicle for social criticism.",
        marks: 4,
      },
      {
        question:
          "Why is the Victorian setting of London important to the novella?",
        lines: 4,
        modelAnswer:
          "Victorian London was a city of extreme contrasts: wealthy, respectable areas existed alongside dark, poverty-stricken streets. This physical duality mirrors the psychological duality of Jekyll and Hyde. The foggy, labyrinthine streets create an atmosphere of mystery and danger typical of the Gothic genre. London also represents the heart of 'civilised' society, making the emergence of a primitive, violent figure like Hyde even more shocking and subversive.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Front-load key vocabulary (atavism, repression, duality) as students will encounter these terms throughout the unit.",
      "The carousel stations work best with clear timings — use a visible countdown timer.",
      "Darwinism is often the hardest context for students to grasp; use the image of an evolutionary chart to make it visual.",
      "Stevenson's Edinburgh background is a useful hook — show images of the Old Town vs New Town.",
      "Emphasise that this novella was a huge bestseller and sensation — it was the Victorian equivalent of a thriller.",
      "The Gothic conventions handout should be kept for reference throughout the unit.",
      "If students have studied Frankenstein or Dracula, draw comparisons to deepen Gothic understanding.",
    ],
    targetedSkills: [
      "AO3: Context",
      "Genre knowledge",
      "Note-taking",
      "Analytical writing (PEEL)",
      "Discussion and oracy",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 2: Chapters 1-3 — The Mystery of Hyde
  // ─────────────────────────────────────────────
  {
    id: "jh-02-chapters1-3-mystery",
    title: "Chapters 1-3: The Mystery of Hyde",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Stevenson establishes mystery and suspense in the opening chapters",
      "Explore the characterisation of Utterson, Enfield, and Hyde",
      "Understand how Stevenson uses setting to create atmosphere",
      "Identify the narrative techniques that build the reader's curiosity",
    ],
    successCriteria: [
      "I can explain how Stevenson creates mystery in the opening chapters",
      "I can analyse the first descriptions of Hyde and explain their effects",
      "I can discuss how setting and atmosphere contribute to the Gothic tone",
    ],
    keywords: [
      "mystery",
      "suspense",
      "unreliable narration",
      "third-person limited",
      "facade",
      "atmosphere",
      "uncanny",
      "foreboding",
    ],
    starterActivity: {
      title: "The Door — First Impressions",
      duration: "7 minutes",
      instructions:
        "Display the description of the mysterious door from Chapter 1: 'a certain sinister block of building thrust forward its gable on the street... bore in every feature the marks of prolonged and sordid negligence.' Students sketch the door based on the description and annotate with the feelings it creates. Discuss: What does a building's appearance suggest about what happens inside? How does Stevenson use the door to create mystery before we even meet Hyde?",
      differentiation: {
        support: "Provide key words from the quotation already highlighted for discussion.",
        core: "Annotate the description independently and explain the effect of 'sinister' and 'sordid'.",
        stretch: "Consider the door as a symbol: What does it represent about hidden identities?",
      },
      resources: ["Projected quotation", "Plain paper for sketches"],
    },
    mainActivities: [
      {
        title: "Enfield's Account — Analysing the Trampling Scene",
        duration: "15 minutes",
        instructions:
          "Read Enfield's account of Hyde trampling the girl in Chapter 1. Students annotate the extract for: Hyde's behaviour, witnesses' reactions, language techniques used to describe Hyde. Key quotations to analyse: 'trampled calmly over the child's body', 'like some damned Juggernaut', 'gave me one look, so ugly that it brought out the sweat on me.' Discuss: Why can nobody describe exactly what is wrong with Hyde? What is Stevenson suggesting about the nature of evil? Students write a paragraph analysing how Stevenson presents Hyde in this first encounter.",
        differentiation: {
          support: "Provide guided annotation with key quotations pre-highlighted.",
          core: "Annotate independently and write a paragraph with embedded quotations.",
          stretch:
            "Analyse the significance of the witnesses' inability to describe Hyde — what does this suggest about evil?",
        },
        resources: ["Chapter 1 extract (trampling scene)", "Annotation guide"],
      },
      {
        title: "Utterson — The Detective Figure",
        duration: "15 minutes",
        instructions:
          "Analyse Utterson's character across Chapters 1-3. He is our lens into the story — a rational, respectable lawyer who tries to solve the mystery through logic. Students complete a character profile: his personality traits (evidence from the text), his relationship with Jekyll, his reaction to Hyde, and his role as a narrative device. Key quotation: 'If he be Mr Hyde, I shall be Mr Seek.' Discuss the pun and what it reveals about Utterson's determination. Then discuss: Why does Stevenson choose a lawyer — someone bound by rules and rationality — as the viewpoint character?",
        differentiation: {
          support: "Provide the character profile template with some sections completed.",
          core: "Complete the profile independently with textual evidence.",
          stretch:
            "Evaluate: Is Utterson a reliable narrator? What are the limitations of seeing events through his perspective?",
        },
        resources: ["Chapters 1-3 text", "Character profile template"],
      },
      {
        title: "Setting and Atmosphere — The Streets of London",
        duration: "13 minutes",
        instructions:
          "Students analyse how Stevenson uses the London setting in Chapters 1-3 to create a Gothic atmosphere. Focus on: the contrast between Jekyll's respectable front door and Hyde's dingy back entrance, the fog and darkness, and the 'nocturnal' quality of key scenes. Students create a two-column table: 'Respectable London' vs 'Hidden London' and place quotations in each column. Write a paragraph: 'How does Stevenson use setting to reflect the theme of duality?'",
        differentiation: {
          support: "Provide quotations to sort into the two columns with guided questions.",
          core: "Find their own quotations and write an analytical paragraph.",
          stretch:
            "Connect the setting to the wider Victorian context: How does London itself embody duality?",
        },
        resources: ["Setting extracts from Chapters 1-3", "Two-column template"],
      },
    ],
    plenaryActivity: {
      title: "Mystery Board",
      duration: "5 minutes",
      instructions:
        "Create a class 'mystery board' (like a detective wall). Students write on sticky notes: What do we know about Hyde? What questions remain unanswered? What do we predict? Stick notes on the board under each heading. This creates a visual tracking tool for the novella and engages students' curiosity for the next lesson.",
      differentiation: {
        support: "Write one note for the 'What do we know?' section.",
        core: "Write one note for each section.",
        stretch: "Write a prediction with a specific textual justification.",
      },
    },
    homework:
      "Write a paragraph answering: 'How does Stevenson create a sense of mystery in the opening chapters of Jekyll and Hyde?' Include at least two quotations.",
    worksheetQuestions: [
      {
        question:
          "How does Stevenson present Hyde's first appearance in the trampling scene? Analyse the language used.",
        lines: 6,
        modelAnswer:
          "Stevenson presents Hyde as casually violent: he 'trampled calmly over the child's body.' The juxtaposition of 'trampled' (violent) and 'calmly' (controlled) is deeply unsettling, suggesting Hyde feels no remorse or emotion. The simile 'like some damned Juggernaut' compares him to an unstoppable, crushing force, implying he is inhuman and mechanical in his cruelty. The witnesses' visceral reactions — one doctor turns 'sick and white with the desire to kill him' — suggest Hyde provokes a primal response that goes beyond rational disgust.",
        marks: 4,
      },
      {
        question:
          "Why is it significant that characters cannot describe what is wrong with Hyde's appearance?",
        lines: 5,
        modelAnswer:
          "Enfield says Hyde gives 'a strong feeling of deformity' but cannot specify any particular feature that is wrong. This inability to articulate Hyde's wrongness is significant because it suggests evil is not a physical quality but something felt instinctively. Stevenson implies that Hyde represents something fundamentally unnatural — a violation of human norms that the rational mind cannot process or describe. This 'uncanny' quality is a key Gothic convention and makes Hyde more frightening than any specific deformity could.",
        marks: 4,
      },
      {
        question:
          "What does the pun 'If he be Mr Hyde, I shall be Mr Seek' reveal about Utterson?",
        lines: 4,
        modelAnswer:
          "The pun reveals Utterson's determination to uncover the truth about Hyde. It shows his rational, methodical approach — he frames the mystery as something to be solved through investigation. The play on words also links to the children's game hide and seek, suggesting a pursuit between hunter and quarry. However, the pun also foreshadows the danger of seeking hidden truths — some things are hidden for a reason.",
        marks: 3,
      },
      {
        question:
          "How does Stevenson use the contrast between Jekyll's front door and Hyde's back entrance to develop the theme of duality?",
        lines: 5,
        modelAnswer:
          "Jekyll's front door is on a respectable street, representing his public, gentlemanly facade. Hyde's entrance is a blistered, neglected door in a dingy back street, representing the hidden, dark side of Jekyll's nature. The fact that both doors lead to the same building is symbolically significant: respectable Jekyll and monstrous Hyde are literally the same person. This architectural duality mirrors the psychological duality at the heart of the novella and reflects the wider Victorian theme of public respectability concealing private vice.",
        marks: 4,
      },
      {
        question:
          "Why does Stevenson choose to tell the story through Utterson's perspective rather than Jekyll's?",
        lines: 5,
        modelAnswer:
          "By using Utterson's limited perspective, Stevenson ensures the reader can only see what Utterson sees and know what he knows. This creates suspense because the truth about Jekyll and Hyde is hidden from both Utterson and the reader simultaneously. We share Utterson's confusion, frustration, and growing horror as clues accumulate without a clear explanation. The limited perspective also creates dramatic irony — the reader may guess the truth before Utterson does, which generates tension as we watch him slowly approach a conclusion we have already reached.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson create a Gothic atmosphere in the opening chapters? Use specific examples.",
        lines: 5,
        modelAnswer:
          "Stevenson creates a Gothic atmosphere through dark, foggy settings: 'the fog still slept on the wing of the building.' The streets are described as empty and eerie, with events occurring at night. The mysterious door with its 'marks of prolonged and sordid negligence' creates a sense of decay and hidden secrets. The characters' unease and inability to explain Hyde adds psychological horror. These elements combine to create an atmosphere of dread and mystery that is characteristic of the Gothic genre.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The trampling scene is crucial — it establishes Hyde's nature before the reader sees Jekyll.",
      "Emphasise the detective/mystery genre elements; students respond well to the idea of solving a case alongside Utterson.",
      "The door symbolism is a high-value exam point and recurs throughout the novella.",
      "The mystery board is a practical engagement tool — keep it visible and update it each lesson.",
      "Some students may already know the twist; reassure them that knowing doesn't diminish the text's power.",
      "The inability to describe Hyde is a sophisticated analytical point — push higher-ability students on this.",
      "Link the fog and darkness to the concept of moral obscurity — things are literally and figuratively unclear.",
    ],
    targetedSkills: [
      "AO1: Response to text",
      "AO2: Language analysis",
      "AO2: Narrative technique",
      "Close reading",
      "Analytical writing",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 3: Chapters 4-6 — The Murder of Carew
  // ─────────────────────────────────────────────
  {
    id: "jh-03-chapters4-6-murder",
    title: "Chapters 4-6: The Carew Murder",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse the Carew murder scene as a pivotal moment in the novella",
      "Explore how Stevenson escalates the violence and horror",
      "Understand the significance of Jekyll's changing behaviour in these chapters",
      "Analyse how Stevenson develops the mystery and builds toward the climax",
    ],
    successCriteria: [
      "I can analyse the language Stevenson uses in the murder scene",
      "I can explain how the violence escalates from trampling to murder",
      "I can discuss what Jekyll's behaviour in Chapters 5-6 reveals about the duality theme",
    ],
    keywords: [
      "escalation",
      "brutality",
      "regression",
      "ape-like",
      "atavism",
      "composure",
      "deterioration",
      "facade",
    ],
    starterActivity: {
      title: "Escalation Scale",
      duration: "6 minutes",
      instructions:
        "Display the trampling scene from Chapter 1 alongside a brief summary of the Carew murder. Students plot both events on a 'violence scale' from 1-10. Discuss: How has Hyde's behaviour escalated? What does this suggest about the trajectory of the novella? Introduce the concept of escalation and predict where this trajectory might lead.",
      differentiation: {
        support: "Place pre-written descriptions on the scale and explain the difference.",
        core: "Plot both events, explain the escalation, and predict what comes next.",
        stretch: "Consider why Stevenson escalates the violence — what is the structural purpose?",
      },
    },
    mainActivities: [
      {
        title: "The Carew Murder — Close Reading",
        duration: "20 minutes",
        instructions:
          "Read the murder scene aloud. Students annotate for: the contrast between the peaceful setting (moonlight, the old man's 'innocent and old-world kindness') and the sudden violence, the animalistic language describing Hyde ('ape-like fury', 'hailing down a storm of blows'), the sensory details ('bones were audibly shattered'), and the maid's reaction (fainting). Analyse in detail: Why does Stevenson choose a vulnerable, innocent victim? How does the moonlight setting heighten the horror? Students write two analytical paragraphs about the murder scene.",
        differentiation: {
          support: "Provide guided annotation with key phrases highlighted and analysis starters.",
          core: "Annotate independently and write two paragraphs with embedded quotations.",
          stretch:
            "Analyse the maid's role as a witness — why does Stevenson use a female observer for this scene?",
        },
        resources: ["Murder scene extract (Chapter 4)", "Annotation guide", "Lined paper"],
      },
      {
        title: "Jekyll's Behaviour — The Mask Slipping",
        duration: "15 minutes",
        instructions:
          "Students track Jekyll's behaviour across Chapters 5-6: his initial relief after the murder, his period of sociability and charity, and then his sudden withdrawal and 'the light of some foul soul that cried aloud for justice.' Create a timeline showing Jekyll's emotional states. For each phase, students record evidence and explain what it reveals about the internal battle between Jekyll and Hyde. Key discussion: Is Jekyll in control at this point? What evidence suggests the transformation is becoming involuntary?",
        differentiation: {
          support: "Provide the timeline with phases identified; students add evidence and explanation.",
          core: "Create the timeline independently with detailed evidence.",
          stretch:
            "Analyse what Jekyll's period of 'good works' suggests — is it genuine or desperate compensation?",
        },
        resources: ["Chapters 5-6 text or extracts", "Timeline template"],
      },
      {
        title: "Atavism and the 'Ape-like' Hyde",
        duration: "12 minutes",
        instructions:
          "Focus on the language of evolutionary regression in the murder scene. Define atavism (a return to a more primitive state). Students collect all animal/primitive language used to describe Hyde across Chapters 1-6: 'ape-like', 'troglodytic', 'hissing', references to his small stature and energy. Discuss: What is Stevenson saying about human nature? Is Hyde what humans really are beneath civilisation? Students write a paragraph linking Hyde's characterisation to Darwinist context.",
        differentiation: {
          support: "Provide the quotations pre-collected and define key terms.",
          core: "Collect quotations independently and write the paragraph with context.",
          stretch:
            "Evaluate: Is Hyde an externalised animal nature, or something worse — a purely evil force?",
        },
        resources: ["Quotation collection sheet", "Atavism definition card"],
      },
    ],
    plenaryActivity: {
      title: "Update the Mystery Board",
      duration: "7 minutes",
      instructions:
        "Return to the mystery board from Lesson 2. Students add new notes: What new information do we have? What questions are answered? What new questions emerge? The murder of Carew changes the stakes entirely — discuss how the novella shifts from mystery to thriller. Has anyone's prediction changed?",
      differentiation: {
        support: "Add one new piece of information to the board.",
        core: "Add one fact, one question, and one updated prediction.",
        stretch: "Write a note explaining how the murder changes the genre of the story.",
      },
    },
    homework:
      "Write a PEEL paragraph answering: 'How does Stevenson present Hyde as animalistic in the Carew murder scene?' Include contextual reference to Darwinism.",
    worksheetQuestions: [
      {
        question:
          "Analyse the language Stevenson uses to describe the Carew murder. How does he convey the horror of the scene?",
        lines: 6,
        modelAnswer:
          "Stevenson describes Hyde attacking 'with ape-like fury', trampling the victim and 'hailing down a storm of blows under which the bones were audibly shattered.' The simile 'ape-like fury' connects Hyde to animalistic, primitive violence, reflecting Victorian fears of evolutionary regression. The metaphor of a 'storm of blows' suggests uncontrollable, natural force rather than calculated violence. The visceral detail 'bones were audibly shattered' engages the reader's senses, making the horror physical and immediate. The broken cane symbolises the extent of the violence — even the weapon cannot withstand Hyde's fury.",
        marks: 5,
      },
      {
        question:
          "Why does Stevenson choose Sir Danvers Carew as Hyde's murder victim? What is the effect of his characterisation?",
        lines: 5,
        modelAnswer:
          "Carew is described as an 'aged and beautiful gentleman' with 'innocent and old-world kindness.' By making the victim elderly, gentle, and innocent, Stevenson maximises the horror of the attack — Hyde's violence is not provoked but entirely gratuitous. Carew's respectability also mirrors Jekyll's public persona, suggesting that Hyde's violence is directed at the very qualities Jekyll tries to embody. The murder of an innocent reinforces that Hyde is pure, motiveless evil.",
        marks: 4,
      },
      {
        question:
          "What does the term 'atavism' mean, and how does it relate to Hyde?",
        lines: 4,
        modelAnswer:
          "Atavism refers to the reversion to an earlier, more primitive evolutionary state. Hyde embodies Victorian fears of atavism: he is described as 'ape-like' and 'troglodytic' (cave-dwelling), suggesting he represents humanity's animal past. His small stature could suggest he is less evolved. Stevenson uses Hyde to explore the Darwinist anxiety that civilisation is a thin veneer and that the primitive, violent animal within could re-emerge at any time.",
        marks: 4,
      },
      {
        question:
          "How does Jekyll's behaviour in Chapters 5-6 suggest the battle between his two selves is intensifying?",
        lines: 5,
        modelAnswer:
          "After the murder, Jekyll initially seems relieved and enters a period of sociability and religious devotion. However, this abruptly ends and he becomes reclusive, with 'a look in the eye and quality of manner that seemed to testify to some deep-seated terror of the mind.' The alternation between sociability and withdrawal mirrors the alternation between Jekyll and Hyde, suggesting the transformations are becoming harder to control. Jekyll's good works may be desperate attempts to reassert his 'good' self, but the deterioration shows Hyde is growing stronger.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson use the setting of the murder scene to heighten its impact?",
        lines: 4,
        modelAnswer:
          "The murder takes place on a moonlit night — 'the lane glittered in the full moon.' The peaceful, romantic setting creates a stark contrast with the sudden, extreme violence, making the attack even more shocking. Moonlight is also a Gothic convention associated with transformation and revelation. The beautiful setting lulls both the victim and the reader into a false sense of security before the horror erupts.",
        marks: 3,
      },
      {
        question:
          "Compare the trampling in Chapter 1 with the murder in Chapter 4. What does the escalation reveal about Hyde?",
        lines: 5,
        modelAnswer:
          "The trampling is casual and almost accidental — Hyde walks 'calmly' over the child. The murder is explosive and frenzied — Hyde attacks with 'ape-like fury.' The escalation reveals that Hyde is becoming more violent and less controlled as the novella progresses. In Chapter 1, Hyde can be bought off with money; by Chapter 4, his violence is motiveless and unstoppable. This escalation mirrors the loss of Jekyll's control and suggests that evil, once unleashed, grows more powerful and harder to contain.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The murder scene is graphic — prepare students and check for any sensitivities.",
      "The contrast between the moonlit setting and the violence is a key exam point — drill this.",
      "Atavism is a high-value contextual term that impresses examiners — ensure all students can define and use it.",
      "Jekyll's fluctuating behaviour in Chapters 5-6 is often overlooked; it provides crucial evidence of the duality theme.",
      "The broken cane is a useful symbol to analyse — it represents the breaking of civilised restraint.",
      "Update the mystery board each lesson to maintain engagement and track the narrative arc.",
      "Link the escalation to structure: Stevenson builds tension by increasing the stakes with each chapter.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language analysis",
      "AO2: Structural analysis",
      "AO3: Context (Darwinism)",
      "Comparative analysis",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 4: Chapters 7-10 — The Revelation
  // ─────────────────────────────────────────────
  {
    id: "jh-04-chapters7-10-revelation",
    title: "Chapters 7-10: The Revelation",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse the final chapters and the revelation of Jekyll's dual identity",
      "Explore the significance of the narrative structure — multiple perspectives and delayed revelation",
      "Understand the themes of loss of control and self-destruction",
      "Evaluate the ending and Stevenson's message about human nature",
    ],
    successCriteria: [
      "I can explain the significance of the narrative shift to letters in the final chapters",
      "I can analyse how Stevenson presents Jekyll's loss of control",
      "I can evaluate what the ending suggests about human nature",
    ],
    keywords: [
      "revelation",
      "epistolary",
      "confession",
      "loss of control",
      "self-destruction",
      "dual narrative",
      "tragic",
      "hubris",
    ],
    starterActivity: {
      title: "The Window Scene — Dramatic Shift",
      duration: "7 minutes",
      instructions:
        "Read aloud the brief but powerful window scene from Chapter 7, where Jekyll's expression changes from a smile to 'an expression of such abject terror and despair, as froze the very blood of the two gentlemen below.' Students respond: What has happened? What do Utterson and Enfield witness? Why does Stevenson not explain the transformation directly? Discuss how this scene builds unbearable tension for the revelation.",
      differentiation: {
        support: "Answer guided questions about the scene with a word bank.",
        core: "Analyse the language of the quotation and explain the effect on the reader.",
        stretch: "Consider what the window itself symbolises — a frame through which hidden truths are glimpsed.",
      },
    },
    mainActivities: [
      {
        title: "Dr Lanyon's Narrative — Witnessing the Transformation",
        duration: "15 minutes",
        instructions:
          "Read key extracts from Lanyon's letter (Chapter 9). Analyse his reaction to witnessing the transformation: 'my mind submerged in terror', 'my life is shaken to its roots.' Students annotate the language of horror and disbelief. Discuss: Why does Lanyon die after witnessing the truth? What does this say about the power of the revelation? Students write a paragraph analysing how Stevenson uses Lanyon's perspective to convey the horror of the truth.",
        differentiation: {
          support: "Provide guided annotation with key phrases highlighted.",
          core: "Annotate independently and write a paragraph with embedded quotations.",
          stretch:
            "Evaluate: Is Lanyon's death realistic or symbolic? What does it represent about Victorian inability to accept duality?",
        },
        resources: ["Lanyon's letter extracts", "Annotation guide"],
      },
      {
        title: "Jekyll's Full Statement — The Confession",
        duration: "20 minutes",
        instructions:
          "Read key extracts from Jekyll's final statement (Chapter 10). Focus on: (1) His explanation of why he created the potion — 'man is not truly one, but truly two', (2) His initial pleasure in being Hyde — 'I felt younger, lighter, happier', (3) The loss of control — waking as Hyde without the potion, (4) His final despair. Students create a timeline of Jekyll's relationship with Hyde: excitement → pleasure → dependence → loss of control → despair → death. For each stage, record a key quotation and its significance. Then write an extended response about how Stevenson presents Jekyll's downfall.",
        differentiation: {
          support: "Provide the timeline with stages labelled and some quotations filled in.",
          core: "Create the timeline independently and write the extended response.",
          stretch:
            "Analyse Jekyll's confession critically: Is he taking responsibility or making excuses? Is he a victim or a villain?",
        },
        resources: ["Jekyll's statement extracts (Chapter 10)", "Timeline template"],
      },
      {
        title: "Narrative Structure — Why Letters?",
        duration: "10 minutes",
        instructions:
          "Discuss the structural significance of the shift from Utterson's third-person narrative to the first-person letters of Lanyon and Jekyll. Why does Stevenson save the truth for last? Why use multiple perspectives? Students consider: the detective structure (clues building to revelation), the unreliability of each narrator, and the way the epistolary form creates a sense of confession and finality. Students write a paragraph about how Stevenson's narrative structure contributes to the impact of the revelation.",
        differentiation: {
          support: "Match structural features to their effects from a provided list.",
          core: "Write analytically about the narrative structure.",
          stretch:
            "Compare this structure to a modern detective story — how is Stevenson both using and subverting conventions?",
        },
      },
    ],
    plenaryActivity: {
      title: "Complete the Mystery Board",
      duration: "8 minutes",
      instructions:
        "Return to the mystery board for the final time. All questions should now be answered. Students write one final reflection: 'Knowing the truth, what is the novella really about?' Share responses. The board now serves as a complete visual summary of the novella's narrative arc, useful for revision.",
      differentiation: {
        support: "Complete a sentence: 'The novella is really about...'",
        core: "Write a reflective sentence and justify it with evidence.",
        stretch: "Write a thematic statement that encompasses the whole novella.",
      },
    },
    homework:
      "Write two paragraphs: one analysing how Stevenson presents Jekyll's loss of control, and one evaluating whether Jekyll deserves sympathy.",
    worksheetQuestions: [
      {
        question:
          "Why does Stevenson reveal the truth about Jekyll and Hyde through letters rather than through direct narration?",
        lines: 5,
        modelAnswer:
          "Letters create a sense of confession and intimacy — the reader receives the truth directly from those involved, without a narrator's filter. The epistolary form also mimics the structure of a legal case (appropriate for a 'strange case'), with evidence building toward a conclusion. Delaying the revelation until the final chapters maintains suspense throughout the novella. Multiple perspectives (Lanyon's horror, Jekyll's guilt) provide different angles on the same truth, creating a richer understanding than a single narrator could offer.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson present Jekyll's initial attitude toward his transformation? What does this reveal?",
        lines: 5,
        modelAnswer:
          "Jekyll describes his first transformation with excitement: 'I felt younger, lighter, happier in body; within I was conscious of a heady recklessness.' The positive language suggests that becoming Hyde was initially pleasurable — a release from the constraints of respectability. The word 'recklessness' reveals that Jekyll wanted freedom from moral responsibility. This suggests the duality was not forced upon him but welcomed, which complicates any simple reading of Jekyll as victim and Hyde as villain.",
        marks: 4,
      },
      {
        question:
          "Analyse Jekyll's statement: 'man is not truly one, but truly two.' What does this mean and why is it significant?",
        lines: 5,
        modelAnswer:
          "Jekyll argues that every person contains two opposing natures — good and evil — within a single body. His experiment attempted to separate these natures, giving each its own physical form. This is significant because it challenges the Victorian ideal of the unified, morally consistent gentleman. Stevenson suggests that the pressure to appear entirely good is itself destructive, because it forces the dark side underground where it grows more powerful. The statement is also a universal claim about human nature, extending beyond Jekyll to all people.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson present Jekyll's loss of control over his transformations?",
        lines: 6,
        modelAnswer:
          "Initially, Jekyll controls the transformations through the potion. However, the loss of control is gradual and terrifying: he begins waking as Hyde without taking the potion — 'I had gone to bed Henry Jekyll, I had awakened Edward Hyde.' The involuntary nature of these transformations suggests Hyde is growing stronger while Jekyll weakens. Jekyll must take increasing doses to maintain his own form. Eventually, the original ingredients run out, trapping him. Stevenson uses this escalation to argue that evil, once indulged, cannot be controlled or contained — it will ultimately consume the person who unleashes it.",
        marks: 5,
      },
      {
        question:
          "Why does Dr Lanyon die after witnessing the transformation? What does his death symbolise?",
        lines: 4,
        modelAnswer:
          "Lanyon dies from the shock of seeing Jekyll transform into Hyde. His death symbolises the inability of rational, scientific Victorians to cope with the truth about human nature. Lanyon represents orthodox science and conventional morality — when confronted with proof that man is dual, his worldview collapses and he cannot survive. Stevenson may be suggesting that Victorian society's insistence on respectability is so rigid that acknowledging the truth about human duality would destroy it.",
        marks: 4,
      },
      {
        question:
          "Do you think Jekyll deserves sympathy? Explain your view with reference to the text.",
        lines: 6,
        modelAnswer:
          "Jekyll partially deserves sympathy because his initial motivation — to separate good from evil — could be seen as a noble scientific aim. His confession reveals genuine anguish at what he has become. However, he also admits that Hyde's pleasures were 'undignified' and that he enjoyed the freedom from moral consequence. He created Hyde not to eliminate evil but to indulge it secretly while maintaining his reputation. His concern for respectability, rather than genuine morality, makes him partly responsible for everything Hyde does. Ultimately, Jekyll is a tragic figure — pitiable but not innocent.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The revelation chapters are dense; pre-select key extracts rather than trying to read everything.",
      "Jekyll's 'Full Statement of the Case' is the most frequently examined chapter — ensure thorough coverage.",
      "The question of whether Jekyll is victim or villain is excellent preparation for evaluative exam questions.",
      "Lanyon's death is often overlooked but provides rich material for analysis of Victorian attitudes.",
      "The window scene in Chapter 7 is brief but dramatically powerful — it works well as a starter.",
      "Completing the mystery board provides closure and a useful revision resource.",
      "Emphasise that Jekyll's confession is itself unreliable — he may be minimising his responsibility.",
    ],
    targetedSkills: [
      "AO1: Sustained response",
      "AO2: Narrative structure",
      "AO2: Language analysis",
      "Evaluative writing",
      "Critical reading",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 5: Jekyll Character Study
  // ─────────────────────────────────────────────
  {
    id: "jh-05-jekyll-character",
    title: "Character Study: Dr Jekyll",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse Jekyll's character in depth, tracing his development across the novella",
      "Explore Jekyll's motivations, flaws, and their connection to Victorian values",
      "Evaluate whether Jekyll is a sympathetic or culpable character",
      "Develop exam-ready arguments about Jekyll's significance",
    ],
    successCriteria: [
      "I can analyse Jekyll's character with evidence from multiple chapters",
      "I can explain how Jekyll represents Victorian anxieties about respectability",
      "I can write a sustained analytical response about Jekyll's character",
    ],
    keywords: [
      "hubris",
      "tragic hero",
      "respectability",
      "hypocrisy",
      "repression",
      "culpability",
      "moral ambiguity",
      "downfall",
    ],
    starterActivity: {
      title: "Jekyll: Hero or Villain?",
      duration: "6 minutes",
      instructions:
        "Students stand on a physical spectrum in the room: one end is 'Hero', the other is 'Villain', the middle is 'Victim.' They position themselves based on their current view of Jekyll and explain their choice to a nearby student. Take a class poll. Establish that Jekyll's moral ambiguity is what makes him a compelling character and a rich exam topic.",
      differentiation: {
        support: "Choose a position and explain with one reason.",
        core: "Choose a position and support with textual evidence.",
        stretch: "Argue that Jekyll is all three simultaneously and explain how.",
      },
    },
    mainActivities: [
      {
        title: "Jekyll Through Others' Eyes",
        duration: "15 minutes",
        instructions:
          "Before hearing Jekyll's own voice, students analyse how other characters perceive him. Collect evidence from: Utterson's view (a trusted friend, a good man), Enfield's view (a well-known, respected figure), Lanyon's view (a scientist who has gone wrong). Create a character profile of 'public Jekyll' using these perspectives. Then compare with Jekyll's self-description in Chapter 10. Key question: How does the public Jekyll differ from the private Jekyll? What does this gap reveal about Victorian society?",
        differentiation: {
          support: "Provide quotations from each character's perspective to organise.",
          core: "Find their own quotations and analyse the gap between public and private.",
          stretch:
            "Evaluate: Is Jekyll's respectable image a lie, or was he genuinely good before the experiment?",
        },
        resources: ["Quotation sheets from key chapters", "Character profile template"],
      },
      {
        title: "Jekyll's Confession — Motivations and Flaws",
        duration: "20 minutes",
        instructions:
          "Deep-dive into Chapter 10. Students analyse Jekyll's stated motivations: 'I concealed my pleasures... I stood already committed to a profound duplicity of life.' He admits that his desire for respectability led him to hide his true nature, creating the conditions for Hyde. Analyse key quotations in detail. Then examine his flaws: hubris (believing he can control the experiment), hypocrisy (wanting to sin without consequences), and selfishness (using Hyde to avoid responsibility). Students write a three-paragraph character analysis of Jekyll: (1) His motivations, (2) His flaws, (3) Whether he is ultimately responsible for his own destruction.",
        differentiation: {
          support: "Provide a paragraph frame for each of the three sections.",
          core: "Write three paragraphs independently with embedded quotations.",
          stretch:
            "Include a fourth paragraph arguing whether Stevenson intends Jekyll as a warning or a figure of sympathy.",
        },
        resources: [
          "Chapter 10 extracts",
          "Writing frame (support)",
          "Key quotation bank",
        ],
      },
      {
        title: "Jekyll as a Tragic Figure",
        duration: "12 minutes",
        instructions:
          "Introduce the concept of the tragic hero: a character of high status who is brought down by a fatal flaw (hubris). Students discuss whether Jekyll fits this model: he is a respected doctor (high status), his flaw is intellectual pride and the desire to separate good from evil (hubris), and his downfall is complete (death). But does Jekyll also subvert the tragic hero model? He is partly aware of his flaw from the start and chooses to continue anyway. Students write a final paragraph evaluating Jekyll as a tragic figure.",
        differentiation: {
          support: "Fill in a tragic hero comparison chart with guided prompts.",
          core: "Write an evaluative paragraph about Jekyll as a tragic hero.",
          stretch:
            "Compare Jekyll to another tragic figure (Macbeth, Frankenstein) and analyse the parallels.",
        },
      },
    ],
    plenaryActivity: {
      title: "Return to the Spectrum",
      duration: "7 minutes",
      instructions:
        "Students return to the Hero/Villain/Victim spectrum from the starter. Has their position changed? If so, why? Students explain any shift in their thinking. This demonstrates intellectual development within the lesson and encourages metacognition.",
      differentiation: {
        support: "State whether they have moved and give one reason.",
        core: "Explain their movement (or lack of it) with a new piece of evidence.",
        stretch: "Argue that the question itself is too simple — Jekyll defies categorisation.",
      },
    },
    homework:
      "Write a full essay response: 'How does Stevenson present Dr Jekyll as a complex character?' Use evidence from at least three chapters.",
    worksheetQuestions: [
      {
        question:
          "What does Jekyll mean when he says 'I concealed my pleasures' and 'I stood already committed to a profound duplicity of life'?",
        lines: 5,
        modelAnswer:
          "Jekyll admits that long before the experiment, he was already living a double life — hiding his true desires behind a mask of respectability. The word 'concealed' suggests deliberate deception, while 'profound duplicity' implies the split was deep and fundamental, not a minor secret. This is significant because it reveals that the duality existed before Hyde — the experiment merely gave it physical form. Stevenson suggests that Victorian society's demand for respectability creates the very duplicity it condemns.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson present Jekyll's hubris, and why is it significant?",
        lines: 5,
        modelAnswer:
          "Jekyll's hubris — excessive pride — is shown in his belief that he can scientifically separate good from evil without consequences. He describes his experiment with intellectual excitement, seeing himself as a pioneer. However, his assumption that evil can be contained and controlled proves fatally wrong. Stevenson presents hubris as the driving force of Jekyll's downfall: the belief that human knowledge can master human nature. This connects to broader Victorian anxieties about science overstepping its boundaries.",
        marks: 4,
      },
      {
        question:
          "Is Jekyll genuinely good, or has he always been capable of evil? Use evidence to support your answer.",
        lines: 6,
        modelAnswer:
          "Jekyll's own confession suggests he was never purely good. He admits to 'irregularities' and 'pleasures' that he concealed, and describes an 'impatient gaiety of disposition' that conflicted with his desire for respectability. However, he also claims a 'hard law of life' that every person contains dual nature. The evidence suggests Jekyll was a morally complex person — not purely good, but not evil either — who made the catastrophic decision to indulge his dark side without restraint. Stevenson's point is that no one is purely good; the danger lies in pretending otherwise.",
        marks: 5,
      },
      {
        question:
          "How does Jekyll's relationship with respectability connect to Victorian context?",
        lines: 5,
        modelAnswer:
          "Victorian society demanded that gentlemen maintain an impeccable public image. Jekyll embodies this pressure: he is a successful doctor, a charitable figure, and a pillar of society. But his confession reveals that maintaining this facade required 'concealing his pleasures' and living in 'duplicity.' Stevenson uses Jekyll to argue that the Victorian cult of respectability is itself destructive — by forbidding any expression of human imperfection, it forces dark desires underground where they become more dangerous. Jekyll's transformation is the extreme consequence of social repression.",
        marks: 4,
      },
      {
        question:
          "Can Jekyll be considered a tragic hero? Explain your reasoning.",
        lines: 5,
        modelAnswer:
          "Jekyll fits the tragic hero model in several ways: he has high status (respected doctor), a fatal flaw (hubris and desire for dual existence), and a complete downfall (death). Like classical tragic heroes, his fall inspires both pity and fear. However, he also subverts the model: he is partly aware of his flaw from the start and chooses to continue the experiment even after seeing its dangers. His tragedy is therefore not purely fate but partly choice, making him a more morally complex figure than the traditional tragic hero.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson use Jekyll to convey his message about human nature?",
        lines: 5,
        modelAnswer:
          "Through Jekyll, Stevenson argues that human nature is fundamentally dual — every person contains both good and evil impulses. Jekyll's attempt to separate these elements fails catastrophically, suggesting they cannot be divided. More importantly, the attempt to deny or suppress the dark side (as Victorian society demanded) makes it more powerful and destructive. Stevenson's message is that acknowledging human complexity is healthier than pretending to be purely good. Jekyll's destruction is caused not by evil itself but by the attempt to manage evil through denial and separation.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The physical spectrum activity works well but requires clear classroom management — move tables if needed.",
      "Jekyll's 'pleasures' are deliberately vague — Stevenson never specifies them, leaving it to the reader's imagination.",
      "Higher-ability students should recognise that Jekyll's confession may itself be unreliable — he may be minimising guilt.",
      "The tragic hero comparison is useful but ensure students understand it is a framework, not a perfect fit.",
      "The three-paragraph writing task is a substantial formative assessment; consider collecting for marking.",
      "If students have studied Macbeth, the hubris comparison is particularly effective.",
      "Emphasise that exam questions on Jekyll often require discussing Hyde too — they are inseparable.",
    ],
    targetedSkills: [
      "AO1: Sustained character analysis",
      "AO2: Language analysis",
      "AO3: Context (Victorian respectability)",
      "Evaluative writing",
      "Critical thinking",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 6: Hyde Character Study
  // ─────────────────────────────────────────────
  {
    id: "jh-06-hyde-character",
    title: "Character Study: Mr Hyde",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Stevenson presents Hyde throughout the novella",
      "Explore the significance of Hyde's physical appearance and its connection to Victorian ideas",
      "Understand Hyde as a symbol of repressed human nature",
      "Evaluate different interpretations of what Hyde represents",
    ],
    successCriteria: [
      "I can analyse the language used to describe Hyde with close attention to word choice",
      "I can explain what Hyde represents in relation to Victorian context",
      "I can evaluate multiple interpretations of Hyde's significance",
    ],
    keywords: [
      "deformity",
      "atavism",
      "physiognomy",
      "degeneration",
      "animalistic",
      "uncanny",
      "the Other",
      "primordial",
    ],
    starterActivity: {
      title: "Describing the Indescribable",
      duration: "7 minutes",
      instructions:
        "Challenge: Students have 60 seconds to draw Hyde based only on what they remember from the text. Display drawings. Then reveal key descriptions — most characters say they CANNOT describe what is wrong with him. Discuss: Why does Stevenson make Hyde so hard to describe? What is more frightening — a specific monster or something you cannot quite define? Introduce the concept of the 'uncanny' (something that feels wrong but you cannot say why).",
      differentiation: {
        support: "Draw Hyde and label with three words that describe him.",
        core: "Draw and then analyse why their image might not match the text's descriptions.",
        stretch: "Explain the literary purpose of making Hyde 'indescribable' rather than specifically deformed.",
      },
    },
    mainActivities: [
      {
        title: "Hyde's Physical Descriptions — Quotation Gathering and Analysis",
        duration: "18 minutes",
        instructions:
          "Students work through the novella gathering every physical description of Hyde. Organise into categories: (1) Animal imagery ('ape-like', 'hissing'), (2) Deformity and wrongness ('deformity without any nameable malformation'), (3) Size and stature (small, young, energetic), (4) Emotional reactions he provokes ('a strong feeling of deformity', 'disgust, loathing and fear'). For each category, students select the most powerful quotation and write a detailed analysis explaining its effect and connection to context. Key focus: Why is Hyde small? Why do people react with instinctive hatred?",
        differentiation: {
          support: "Provide quotations pre-gathered; students categorise and analyse with sentence starters.",
          core: "Gather and categorise independently; write detailed analyses.",
          stretch:
            "Connect Hyde's descriptions to the Victorian pseudo-science of physiognomy (the idea that physical appearance reflects moral character).",
        },
        resources: ["Full novella or collected extracts", "Quotation organiser grid"],
      },
      {
        title: "What Does Hyde Represent? — Interpretations Gallery",
        duration: "17 minutes",
        instructions:
          "Present four interpretations of what Hyde represents: (1) The primitive/animal self (Darwinist reading), (2) The repressed desires of a Victorian gentleman, (3) The 'Other' — everything society fears and rejects, (4) The inevitable result of moral hypocrisy. Students read a brief explanation of each interpretation, then choose the one they find most convincing. In groups organised by interpretation, they gather evidence from the text to support their reading. Each group presents their case. Class votes on the most convincing interpretation. Establish that all four can coexist — the richness of the text supports multiple readings.",
        differentiation: {
          support: "Read the explanations with guided questions and choose with support.",
          core: "Choose independently, gather evidence, and present clearly.",
          stretch:
            "Argue that the interpretations are not mutually exclusive and explain how they overlap.",
        },
        resources: ["Interpretation cards (4 sets)", "Evidence gathering sheet"],
      },
      {
        title: "Analytical Writing — How Does Stevenson Present Hyde?",
        duration: "12 minutes",
        instructions:
          "Students write two analytical paragraphs about Hyde. Paragraph 1 should focus on AO2 — language techniques used to present Hyde. Paragraph 2 should focus on AO3 — what Hyde represents in the context of Victorian society. Circulate and provide live feedback, particularly on the integration of quotations and subject terminology.",
        differentiation: {
          support: "Use a dual paragraph frame with prompts for AO2 and AO3.",
          core: "Write two paragraphs independently.",
          stretch: "Add a third paragraph evaluating which interpretation of Hyde is most convincing.",
        },
        resources: ["Paragraph frame (support)", "Key quotation bank"],
      },
    ],
    plenaryActivity: {
      title: "Hyde in One Sentence",
      duration: "6 minutes",
      instructions:
        "Students summarise what Hyde represents in one sentence. Share and compare. The best summary should balance physical description, symbolic meaning, and contextual significance. Display the strongest examples as models of concise analytical writing.",
      differentiation: {
        support: "Complete a gap-fill sentence about Hyde's significance.",
        core: "Write their own sentence and justify their choices.",
        stretch: "Write the sentence, then identify which Assessment Objectives it addresses.",
      },
    },
    homework:
      "Write a PEEL paragraph answering: 'How does Stevenson use the character of Hyde to explore Victorian fears about human nature?' Include AO2 and AO3.",
    worksheetQuestions: [
      {
        question:
          "Why does Stevenson make Hyde's appearance so difficult for characters to describe?",
        lines: 5,
        modelAnswer:
          "Stevenson deliberately makes Hyde indescribable to create a sense of the uncanny — something that feels profoundly wrong without a specific cause. Enfield says Hyde gives 'a strong feeling of deformity, although I couldn't specify the point.' This suggests that what is wrong with Hyde is not physical but spiritual or moral — he radiates wrongness that cannot be rationalised. This is more frightening than any specific deformity because it cannot be understood or categorised. It also suggests that evil is not a visible trait but a felt presence, challenging the Victorian pseudo-science of physiognomy.",
        marks: 4,
      },
      {
        question:
          "Analyse the significance of Hyde being described as 'ape-like'. How does this connect to Victorian context?",
        lines: 5,
        modelAnswer:
          "The description 'ape-like' directly connects Hyde to Darwinian ideas about evolution. If humans evolved from apes, then the 'ape-like' Hyde represents a regression to a more primitive state — atavism. This reflects a widespread Victorian fear that civilisation was fragile and that humans could devolve. Stevenson uses this language to suggest that beneath every civilised gentleman lies an animal nature that could re-emerge. The 'ape-like' description also dehumanises Hyde, positioning him as something less than human and therefore even more threatening.",
        marks: 4,
      },
      {
        question:
          "Why is Hyde physically smaller than Jekyll? What might this symbolise?",
        lines: 4,
        modelAnswer:
          "Hyde is smaller because, as Jekyll explains, he represents only the evil part of Jekyll's nature, which has been 'less exercised' than the good part. Hyde is 'less developed' because Jekyll has spent his life suppressing his dark impulses. Symbolically, Hyde's small stature suggests that evil is a concentrated, potent force — small but incredibly powerful. It may also suggest that Hyde is 'younger', a less evolved version of the self, connecting to atavistic fears.",
        marks: 3,
      },
      {
        question:
          "How does Stevenson use other characters' reactions to Hyde to characterise him?",
        lines: 5,
        modelAnswer:
          "Rather than describing Hyde directly, Stevenson often characterises him through the reactions he provokes. The doctor in Chapter 1 feels a 'desire to kill him.' Utterson feels 'hitherto unknown disgust, loathing and fear.' Enfield cannot look at him 'without a turn of nausea.' These extreme, visceral reactions suggest Hyde provokes a primal, instinctive response — people recognise his wrongness on a gut level even if they cannot articulate it. This technique makes Hyde more terrifying by showing his effect rather than his appearance.",
        marks: 4,
      },
      {
        question:
          "Explain one interpretation of what Hyde represents and support it with evidence.",
        lines: 6,
        modelAnswer:
          "One interpretation is that Hyde represents the repressed desires of a Victorian gentleman. Jekyll confesses that he 'concealed my pleasures' to maintain his reputation, and the experiment was designed to allow him to indulge these desires without consequence. Hyde is therefore not a separate being but Jekyll's own desires given physical form. The fact that Hyde grows stronger over time suggests that repression makes desire more powerful, not weaker. Stevenson uses this to critique Victorian morality: by demanding perfect respectability, society creates the conditions for explosive, destructive release.",
        marks: 5,
      },
      {
        question:
          "Compare Hyde to a typical Gothic monster (e.g., Frankenstein's creature or Dracula). How is he similar and different?",
        lines: 5,
        modelAnswer:
          "Like Frankenstein's creature, Hyde is created by a scientist who oversteps moral boundaries, suggesting both authors critique unrestrained scientific ambition. Like Dracula, Hyde is associated with the night and provokes instinctive horror. However, Hyde is different because he is not an external threat — he comes from within. While Frankenstein's creature and Dracula are 'Other', Hyde is the self. This makes him arguably more terrifying: the monster is not out there but inside every person. Stevenson's innovation is to locate horror within the human psyche rather than in the supernatural.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The 'indescribable' nature of Hyde is a sophisticated point — model how to write about absence of description.",
      "Physiognomy is useful context for higher-ability students — the Victorians believed facial features revealed character.",
      "The interpretations gallery generates excellent discussion; ensure each group has strong evidence before presenting.",
      "Hyde's small stature surprises many students — ensure they understand Jekyll's explanation.",
      "The comparison to other Gothic monsters is valuable for students studying the wider genre.",
      "Emphasise that Hyde is not a separate person but a part of Jekyll — this is crucial for the duality theme.",
      "This lesson pairs naturally with the Jekyll character study; consider teaching them consecutively.",
    ],
    targetedSkills: [
      "AO1: Character analysis",
      "AO2: Language analysis",
      "AO3: Context (Darwinism, physiognomy)",
      "Evaluative writing",
      "Comparative thinking",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 7: Theme — Duality
  // ─────────────────────────────────────────────
  {
    id: "jh-07-theme-duality",
    title: "Theme: Duality",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Stevenson presents the theme of duality throughout the novella",
      "Explore duality in characters, settings, structure, and language",
      "Understand the philosophical and contextual basis for the duality theme",
      "Develop exam-ready arguments about Stevenson's presentation of duality",
    ],
    successCriteria: [
      "I can explain the theme of duality and its significance to the novella",
      "I can identify duality in at least three aspects of the text (character, setting, structure)",
      "I can write analytically about how Stevenson uses duality to convey his message",
    ],
    keywords: [
      "duality",
      "binary opposition",
      "good and evil",
      "civilisation vs primitive",
      "public vs private",
      "light vs dark",
      "facade",
      "dichotomy",
    ],
    starterActivity: {
      title: "Split Image",
      duration: "6 minutes",
      instructions:
        "Display an image split down the middle: one half shows a respectable Victorian street in daylight, the other shows a dark, menacing alley at night. Students list the contrasts they see. Introduce the concept of duality (the existence of two opposing elements within one thing). Ask: Where have we already seen duality in this novella? Brainstorm examples together.",
      differentiation: {
        support: "List three contrasts with a word bank for vocabulary.",
        core: "List contrasts and connect them to specific examples from the novella.",
        stretch: "Consider whether the two halves are truly separate or part of the same thing.",
      },
    },
    mainActivities: [
      {
        title: "Duality in Characters — Evidence Mapping",
        duration: "15 minutes",
        instructions:
          "Students create a duality map showing how characters embody the theme: Jekyll/Hyde (the most obvious dual figure), Utterson (represses his own pleasures — 'mortified his taste for wine'), the setting (Jekyll's respectable front vs Hyde's dingy back door), and society itself (public respectability vs private vice). For each example, students record a key quotation and explain how it demonstrates duality. Key discussion: Is anyone in the novella truly 'one' person, or does Stevenson suggest everyone is dual?",
        differentiation: {
          support: "Provide the duality map with examples identified; students add quotations and explanations.",
          core: "Create the map independently with detailed evidence.",
          stretch:
            "Analyse Utterson's suppressed pleasures — does Stevenson suggest Utterson is also dual?",
        },
        resources: ["Duality map template", "Key quotation bank"],
      },
      {
        title: "Duality in Setting, Structure, and Language",
        duration: "18 minutes",
        instructions:
          "Expand the analysis beyond character. Students work in three groups: (1) Setting: the two doors (front and back), day vs night, respectable streets vs dark alleys. (2) Structure: the shift from third-person narration to first-person letters, the detective mystery structure giving way to confession. (3) Language: binary oppositions ('good' vs 'evil', 'angel' vs 'fiend'), the contrast between rational and emotional language. Each group analyses their area and creates a poster with quotations and analysis. Groups rotate to view each other's work and take notes. Teacher synthesises: Stevenson embeds duality into every level of the text.",
        differentiation: {
          support: "Provide guided worksheets for each group with quotations and analysis starters.",
          core: "Work independently within the group, contributing analysis and quotations.",
          stretch:
            "Evaluate: In which aspect (character, setting, structure, language) is duality most effectively presented?",
        },
        resources: ["A3 poster paper", "Marker pens", "Novella copies", "Guided worksheets (support)"],
      },
      {
        title: "Analytical Writing — The Theme of Duality",
        duration: "14 minutes",
        instructions:
          "Students write two paragraphs responding to: 'How does Stevenson present the theme of duality in Jekyll and Hyde?' Paragraph 1 should focus on character-level duality, Paragraph 2 on structural or linguistic duality. Remind students to include: subject terminology, embedded quotations, analysis of specific words, and contextual links. Peer assess using a traffic-light system against the success criteria.",
        differentiation: {
          support: "Use a paragraph frame with prompts and a quotation bank.",
          core: "Write two paragraphs independently.",
          stretch: "Add a concluding sentence evaluating Stevenson's message: Can duality ever be resolved?",
        },
        resources: ["Paragraph frame (support)", "Peer assessment criteria"],
      },
    ],
    plenaryActivity: {
      title: "Duality Still Matters",
      duration: "7 minutes",
      instructions:
        "Quick discussion: Where do we see duality in modern life? Students suggest examples (social media personas vs real life, public figures' hidden behaviour, etc.). Link back to Stevenson's message: Victorian society is not unique in its hypocrisy — duality is a fundamental aspect of human nature. This makes the novella timeless.",
      differentiation: {
        support: "Suggest one modern example of duality.",
        core: "Suggest an example and explain the parallel to the novella.",
        stretch: "Argue whether modern society handles duality better or worse than Victorian society.",
      },
    },
    homework:
      "Write a full response: 'How does Stevenson use setting to present the theme of duality?' Include quotations, analysis, and context.",
    worksheetQuestions: [
      {
        question:
          "What is meant by 'duality' in the context of Jekyll and Hyde?",
        lines: 4,
        modelAnswer:
          "Duality refers to the existence of two contrasting elements within a single entity. In Jekyll and Hyde, it primarily refers to the idea that every person contains both good and evil within them. The novella explores this through Jekyll's literal split into two beings, but also through the wider Victorian society's division between public respectability and private vice. Stevenson argues that duality is a fundamental feature of human nature that cannot be resolved through separation.",
        marks: 3,
      },
      {
        question:
          "How does Stevenson use the two doors of Jekyll's house to symbolise duality?",
        lines: 5,
        modelAnswer:
          "Jekyll's house has a grand, respectable front door on a pleasant street and a blistered, neglected back door on a dingy lane. The front door represents Jekyll's public persona — the respectable doctor. The back door, used by Hyde, represents his hidden, dark nature. The fact that both doors lead to the same building symbolises that Jekyll and Hyde are the same person. Stevenson uses this architectural duality to argue that respectability and vice are not separate but coexist within the same individual.",
        marks: 4,
      },
      {
        question:
          "How does the character of Utterson demonstrate that duality is not limited to Jekyll?",
        lines: 5,
        modelAnswer:
          "Utterson is described as someone who 'mortified his taste for fine vintages' and allowed others to enjoy freedoms he denied himself. He suppresses his own desires to maintain a respectable image, suggesting he too lives a form of dual existence — denying his true preferences in favour of social convention. Stevenson uses Utterson to suggest that duality is not unique to Jekyll but a universal condition of Victorian society. Even the most rational, disciplined man has desires he represses.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson use the structure of the novella to reflect the theme of duality?",
        lines: 5,
        modelAnswer:
          "The novella has a dual structure: the first seven chapters are told from Utterson's third-person perspective, while the final two chapters are first-person letters. This structural shift mirrors the novella's thematic revelation — the external, public view (Utterson's investigation) gives way to the internal, private truth (Jekyll's confession). The reader experiences the same journey from surface to depth that the theme of duality demands. The structure itself embodies the idea that truth is hidden beneath appearance.",
        marks: 4,
      },
      {
        question:
          "Explain Jekyll's statement: 'man is not truly one, but truly two.' Do you agree with this view?",
        lines: 6,
        modelAnswer:
          "Jekyll argues that every person contains two opposing natures and that his experiment proves this. The statement is philosophically provocative — it challenges the idea of a unified, consistent self. There is psychological truth in it: most people experience conflicting desires and impulses. However, Jekyll's experiment shows that attempting to separate the two natures is catastrophic. Stevenson seems to agree that humans are dual but also argues that the two sides must coexist and be balanced, not separated. The tragedy is not duality itself but the attempt to deny it.",
        marks: 5,
      },
      {
        question:
          "How does the theme of duality connect to Victorian social context?",
        lines: 5,
        modelAnswer:
          "Victorian society was built on rigid codes of respectability that required, especially of gentlemen, an impeccable public image. This created a culture of hypocrisy where private vices were common but hidden. The duality theme directly critiques this: Jekyll's experiment is an extreme version of what every Victorian gentleman did — maintaining a respectable facade while secretly indulging forbidden desires. Stevenson suggests that the more rigidly society demands perfection, the more violently the repressed side will eventually emerge.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Duality is the most frequently examined theme — students must be able to discuss it confidently.",
      "Push students beyond the obvious Jekyll/Hyde duality to see it in setting, structure, and minor characters.",
      "Utterson's self-denial is often overlooked but is a valuable point for higher-band responses.",
      "The modern parallels discussion (social media, public vs private) makes the theme accessible and relevant.",
      "The group poster activity produces useful revision resources — photograph and share digitally.",
      "Ensure students can spell and define 'duality' — it should appear in every exam response on this text.",
      "Link to the repression theme: duality is the condition; repression is the response; destruction is the consequence.",
    ],
    targetedSkills: [
      "AO1: Thematic response",
      "AO2: Language, structure, symbolism",
      "AO3: Context (Victorian respectability)",
      "Analytical writing",
      "Group research and presentation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 8: Theme — Reputation & Secrecy
  // ─────────────────────────────────────────────
  {
    id: "jh-08-theme-reputation-secrecy",
    title: "Theme: Reputation & Secrecy",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Stevenson presents the theme of reputation throughout the novella",
      "Explore how secrecy functions as both a plot device and a thematic concern",
      "Understand the connection between reputation, secrecy, and Victorian social norms",
      "Evaluate the consequences of prioritising reputation over truth",
    ],
    successCriteria: [
      "I can explain how reputation drives characters' behaviour in the novella",
      "I can analyse how secrecy functions at multiple levels of the text",
      "I can write about how Stevenson uses reputation and secrecy to critique Victorian society",
    ],
    keywords: [
      "reputation",
      "secrecy",
      "respectability",
      "blackmail",
      "discretion",
      "concealment",
      "propriety",
      "social standing",
    ],
    starterActivity: {
      title: "What Would You Hide?",
      duration: "7 minutes",
      instructions:
        "Pose the question (hypothetically): If you lived in a society where any deviation from 'perfect' behaviour could ruin your career and social life, what aspects of yourself might you feel pressured to hide? Students write responses anonymously on slips of paper. Collect and read a few aloud (checking for appropriateness). Discuss: What are the psychological effects of constantly hiding parts of yourself? Link to Victorian society and Jekyll's predicament.",
      differentiation: {
        support: "Choose from a list of common things people might feel pressured to hide.",
        core: "Write their own response and explain the psychological impact.",
        stretch:
          "Consider why a society might demand such rigid standards — what are the supposed benefits?",
      },
    },
    mainActivities: [
      {
        title: "Reputation in the Novella — Character Analysis",
        duration: "18 minutes",
        instructions:
          "Students analyse how reputation drives the behaviour of key characters. Track through the text: (1) Enfield and Utterson agree not to discuss the door — 'the more it looks like Queer Street, the less I ask.' (2) Jekyll's motivation: he 'concealed his pleasures' to protect his reputation. (3) Utterson's reluctance to investigate too deeply — he fears scandal for his friend. (4) The gentlemen's unspoken agreement to suppress information. For each example, students explain how reputation prevents truth from emerging. Write a paragraph: 'How does the protection of reputation enable Hyde's crimes?'",
        differentiation: {
          support: "Provide quotations and guided questions for each character's behaviour.",
          core: "Find evidence independently and write the paragraph.",
          stretch:
            "Argue that the characters' protection of reputation makes them partly responsible for Hyde's crimes.",
        },
        resources: ["Key extracts", "Evidence table template"],
      },
      {
        title: "Secrecy as Structure — How Secrets Drive the Plot",
        duration: "15 minutes",
        instructions:
          "Map the secrets in the novella and show how they drive the plot: Jekyll's secret experiment, the secret connection between Jekyll and Hyde, Lanyon's sealed letter, Jekyll's locked cabinet, the unspoken agreement among gentlemen not to pry. Students create a 'secrecy web' showing how each secret connects to others and how the gradual revelation of secrets creates the novella's suspense. Discuss: Is the novella itself structured as a series of locked doors being opened? Students write about how Stevenson uses secrecy as a structural device.",
        differentiation: {
          support: "Provide the secrecy web partially completed with key secrets identified.",
          core: "Create the web independently and write about secrecy as structure.",
          stretch:
            "Analyse the irony: a society obsessed with secrets creates the conditions for the worst secret of all.",
        },
        resources: ["A4 paper for secrecy web", "Novella copies"],
      },
      {
        title: "Victorian Reputation Culture — Contextual Link",
        duration: "12 minutes",
        instructions:
          "Teacher input on Victorian reputation culture: the importance of 'good name', the fear of scandal, the concept of 'respectability' as social currency, and the consequences of exposure (social ruin, professional destruction). Read a brief historical example of a Victorian figure destroyed by scandal. Students write a contextual paragraph linking the theme of reputation to Victorian social norms, explaining how Stevenson both reflects and critiques this culture.",
        differentiation: {
          support: "Provide a paragraph frame with contextual information embedded.",
          core: "Write the paragraph independently with specific textual references.",
          stretch:
            "Compare Victorian reputation culture to modern 'cancel culture' — are there parallels?",
        },
      },
    ],
    plenaryActivity: {
      title: "Whose Fault Is It?",
      duration: "8 minutes",
      instructions:
        "Debate: 'The characters' obsession with reputation is partly to blame for Hyde's crimes.' Students take a position and defend it with evidence. This develops evaluative thinking and links reputation to moral responsibility — connecting to the wider themes of the novella. Take a class vote and summarise the strongest arguments.",
      differentiation: {
        support: "Choose a pre-written argument card and present it.",
        core: "Formulate their own argument with supporting evidence.",
        stretch: "Present an argument, then argue the opposite side to show balance.",
      },
    },
    homework:
      "Write two paragraphs: one about how reputation drives Jekyll's behaviour, and one about how secrecy enables Hyde's crimes.",
    worksheetQuestions: [
      {
        question:
          "How does the theme of reputation influence Utterson's behaviour in the novella?",
        lines: 5,
        modelAnswer:
          "Utterson's concern for Jekyll's reputation shapes his entire investigation. He is reluctant to pry too deeply, preferring to protect his friend's 'good name.' When he suspects blackmail, his first thought is for Jekyll's reputation rather than for justice. His discretion — a valued quality in a Victorian lawyer — actually enables the mystery to continue unchallenged. Stevenson uses Utterson to show how the obsession with reputation can prevent people from confronting uncomfortable truths, even when lives are at stake.",
        marks: 4,
      },
      {
        question:
          "Why does Jekyll create Hyde, and how does this connect to the theme of reputation?",
        lines: 5,
        modelAnswer:
          "Jekyll creates Hyde so he can indulge his 'undignified' desires without damaging his respectable reputation. He wants to sin without consequence — to have the pleasure of vice without the social penalty. This directly connects to the reputation theme: Jekyll's experiment is the ultimate expression of a society that values appearance over reality. Rather than accepting his complex nature, Jekyll tries to literally separate his public and private selves. Stevenson critiques this as both cowardly and catastrophically dangerous.",
        marks: 4,
      },
      {
        question:
          "Analyse the significance of Enfield's statement: 'the more it looks like Queer Street, the less I ask.'",
        lines: 5,
        modelAnswer:
          "Enfield's statement reveals the Victorian gentleman's code of discretion — the less respectable something appears, the less one should investigate, to avoid being associated with scandal. 'Queer Street' refers to financial or social difficulty. This attitude of deliberate ignorance enables secrets to flourish. Stevenson uses this to critique Victorian society's complicity in its own hypocrisy: by refusing to look beneath the surface, gentlemen allow dark deeds to continue unchallenged. The culture of discretion becomes a culture of wilful blindness.",
        marks: 4,
      },
      {
        question:
          "How does Stevenson use locked doors and sealed letters as symbols in the novella?",
        lines: 5,
        modelAnswer:
          "Locked doors (Hyde's entrance, Jekyll's cabinet) symbolise secrets and the barriers people erect to hide their true nature. Sealed letters (Lanyon's letter, Jekyll's confession) represent truths that are deliberately concealed and only revealed after death. The act of breaking down Jekyll's door at the climax symbolises the violent exposure of hidden truth. These symbols reinforce the theme that Victorian society is built on concealment, and that the truth, once sealed away, builds pressure until it must eventually be released — often destructively.",
        marks: 4,
      },
      {
        question:
          "Is secrecy presented as entirely negative in the novella, or does Stevenson suggest it serves a purpose?",
        lines: 5,
        modelAnswer:
          "While secrecy enables Hyde's crimes and prevents early intervention, Stevenson also suggests it serves a social function. Utterson's discretion, Enfield's code of silence, and the gentlemen's mutual respect for privacy maintain social order and trust. The problem is not secrecy itself but the extremity of Victorian demands for respectability, which forces people to hide normal human complexity. Stevenson's critique is nuanced: secrecy becomes destructive when it is used to maintain an impossible standard of perfection, rather than to protect legitimate privacy.",
        marks: 5,
      },
      {
        question:
          "How does the theme of reputation connect to Victorian social context?",
        lines: 4,
        modelAnswer:
          "In Victorian society, a gentleman's reputation was his most valuable asset — it determined his career, social circle, and marriage prospects. Scandals could destroy lives overnight. This created enormous pressure to conform to rigid moral standards publicly, even if private behaviour differed. Stevenson reflects this through Jekyll, whose entire experiment is motivated by the desire to preserve his reputation while indulging forbidden desires. The novella argues that this impossible standard creates dangerous hypocrisy.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "The anonymous starter activity requires sensitivity — review slips before reading aloud.",
      "Reputation and secrecy are often combined in exam questions; teach them together for maximum impact.",
      "Enfield's 'Queer Street' quotation is extremely useful for multiple essay topics — ensure students memorise it.",
      "The secrecy web activity is creative and produces a useful visual revision tool.",
      "Higher-ability students should recognise that the characters' discretion is both admirable and dangerous.",
      "The debate plenary connects reputation to moral responsibility — this is a sophisticated evaluative point.",
      "Link this theme to the duality theme: reputation creates the need for a double life.",
    ],
    targetedSkills: [
      "AO1: Thematic response",
      "AO2: Symbolism and structure",
      "AO3: Context (Victorian reputation culture)",
      "Evaluative writing",
      "Debate and oracy",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 9: Writer's Methods — Gothic & Narrative
  // ─────────────────────────────────────────────
  {
    id: "jh-09-writers-methods-gothic",
    title: "Writer's Methods: Gothic & Narrative Techniques",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse Stevenson's key Gothic techniques: atmosphere, setting, the supernatural, and horror",
      "Explore narrative methods: limited perspective, multiple narrators, and epistolary structure",
      "Understand how these methods create meaning and serve Stevenson's purpose",
      "Practise integrating AO2 analysis into exam-style writing",
    ],
    successCriteria: [
      "I can identify and analyse Gothic techniques with specific textual evidence",
      "I can explain how narrative structure creates suspense and meaning",
      "I can write about methods using accurate subject terminology",
    ],
    keywords: [
      "Gothic",
      "atmosphere",
      "pathetic fallacy",
      "limited perspective",
      "epistolary",
      "foreshadowing",
      "dramatic irony",
      "in medias res",
    ],
    starterActivity: {
      title: "Gothic Technique Bingo",
      duration: "7 minutes",
      instructions:
        "Students receive a bingo card with Gothic techniques (fog, darkness, moonlight, the double, locked rooms, the uncanny, transformation, death, etc.). Read aloud six short quotations from the novella. For each, students identify which Gothic technique is being used and mark it on their card. First to complete a line wins. Review all answers to ensure understanding.",
      differentiation: {
        support: "Techniques are defined on the bingo card; students match quotations to definitions.",
        core: "Identify techniques from quotations independently.",
        stretch: "For each match, write a one-sentence analysis of the effect.",
      },
      resources: ["Bingo cards", "Six quotations (projected)"],
    },
    mainActivities: [
      {
        title: "Gothic Atmosphere — Close Reading of Key Passages",
        duration: "18 minutes",
        instructions:
          "Students analyse three key atmospheric passages: (1) The fog-bound London of Utterson's nightmare: 'a great field of lamps of a nocturnal city... the figure of a man walking swiftly.' (2) The night of the Carew murder: 'the early part of the night was cloudless, and the lane... glittered in the full moon.' (3) The description of Jekyll's laboratory: 'the dingy, windowless structure.' For each, students annotate for: pathetic fallacy, sensory details, Gothic imagery, and the emotional effect on the reader. Then write a comparative paragraph: 'How does Stevenson use setting to create different Gothic atmospheres at different points in the novella?'",
        differentiation: {
          support: "Provide guided annotation for each passage with technique identification starters.",
          core: "Annotate independently and write the comparative paragraph.",
          stretch:
            "Analyse how Stevenson adapts the Gothic from rural castles to urban London — what is gained and lost?",
        },
        resources: ["Three extract sheets", "Annotation guide", "Gothic technique reference sheet"],
      },
      {
        title: "Narrative Methods — How Does Stevenson Tell the Story?",
        duration: "17 minutes",
        instructions:
          "Analyse Stevenson's narrative choices: (1) Third-person limited (Utterson's perspective) — creates mystery because we only know what he knows. (2) Embedded narratives (Enfield's story, Lanyon's letter) — multiple viewpoints build a fragmented picture. (3) Epistolary conclusion (letters from Lanyon and Jekyll) — confession and revelation. (4) The 'case' structure — the title itself ('Strange Case') frames the story as a mystery to be solved. For each narrative method, students explain: What effect does it create? How does it serve the story? Students write a paragraph about how narrative structure creates suspense.",
        differentiation: {
          support: "Match narrative methods to their effects from a provided list, then write with sentence starters.",
          core: "Explain each method's effect independently and write a paragraph.",
          stretch:
            "Evaluate: Which narrative method is most important for creating suspense? Justify with evidence.",
        },
        resources: ["Narrative methods reference sheet"],
      },
      {
        title: "Putting It Together — Exam-Style Paragraph",
        duration: "10 minutes",
        instructions:
          "Students write one polished paragraph in response to: 'How does Stevenson use Gothic conventions to create tension in Jekyll and Hyde?' The paragraph must include: a clear topic sentence, an embedded quotation, analysis of language/technique, a reference to the Gothic genre, and a link to Stevenson's purpose. Peer assess against a five-point checklist.",
        differentiation: {
          support: "Use a paragraph frame with the five required elements marked.",
          core: "Write independently, ensuring all five elements are included.",
          stretch: "Write the paragraph and then annotate it, labelling where they address each AO.",
        },
        resources: ["Five-point checklist", "Paragraph frame (support)"],
      },
    ],
    plenaryActivity: {
      title: "Method Most Likely To...",
      duration: "8 minutes",
      instructions:
        "Quick-fire game: Teacher calls out purposes (e.g., 'create suspense', 'make the reader sympathise', 'build atmosphere', 'reveal character') and students call out or write the method most likely to achieve that purpose, with an example from the text. This reinforces the connection between method and purpose, which is essential for AO2.",
      differentiation: {
        support: "Choose from a displayed list of methods.",
        core: "Recall methods from memory and provide an example.",
        stretch: "Provide the example and explain why that method achieves that purpose.",
      },
    },
    homework:
      "Create a revision poster: 'Stevenson's Methods in Jekyll and Hyde.' Include at least six methods, each with a quotation and brief analysis. This will be used in the exam practice lesson.",
    worksheetQuestions: [
      {
        question:
          "How does Stevenson use fog as a Gothic device in the novella?",
        lines: 5,
        modelAnswer:
          "Fog appears repeatedly, creating an atmosphere of obscurity and confusion: 'the fog still slept on the wing of the building... the next moment the fog had settled down again.' The fog symbolises moral obscurity — the inability to see truth clearly in a society built on concealment. It also creates a sense of claustrophobia and disorientation, typical of Gothic fiction. In practical terms, the fog literally obscures the streets of London, making it a city of hidden dangers — an appropriate setting for a story about hidden identities.",
        marks: 4,
      },
      {
        question:
          "Analyse how Stevenson uses the third-person limited narrative to create suspense.",
        lines: 5,
        modelAnswer:
          "By limiting the narrative to Utterson's perspective, Stevenson ensures the reader can only see what Utterson sees and know what he knows. This creates suspense because the truth about Jekyll and Hyde is hidden from both Utterson and the reader simultaneously. We share Utterson's confusion, frustration, and growing horror as clues accumulate without a clear explanation. The limited perspective also creates dramatic irony — the reader may guess the truth before Utterson does, which generates tension as we watch him slowly approach a conclusion we have already reached.",
        marks: 4,
      },
      {
        question:
          "Why does Stevenson frame the novella as a 'Strange Case'? What is the effect of this framing?",
        lines: 4,
        modelAnswer:
          "The title 'Strange Case' frames the novella as a mystery to be investigated, like a legal case. This engages the reader as a detective figure alongside Utterson, creating an active reading experience. The word 'strange' signals that what follows defies rational explanation, preparing the reader for the supernatural. The 'case' framing also reflects the Victorian obsession with classification and rationality — yet the case ultimately reveals something that cannot be rationally explained, subverting the detective genre.",
        marks: 3,
      },
      {
        question:
          "How does Stevenson use the shift from third-person narration to first-person letters to create impact in the final chapters?",
        lines: 5,
        modelAnswer:
          "The shift from Utterson's distant, rational perspective to the intimate, first-person confessions of Lanyon and Jekyll creates a powerful emotional impact. Suddenly the reader is inside the minds of those directly affected. Lanyon's letter conveys raw terror; Jekyll's statement combines intellectual reflection with despair. The epistolary form also creates a sense of finality — these are last words, written in the shadow of death. The structural shift mirrors the thematic revelation: the surface (Utterson's investigation) gives way to the depth (Jekyll's soul).",
        marks: 4,
      },
      {
        question:
          "How does Stevenson adapt traditional Gothic conventions for an urban London setting?",
        lines: 5,
        modelAnswer:
          "Traditional Gothic fiction is set in remote castles, forests, or ruins. Stevenson transplants Gothic horror into the streets of London, making it more immediate and relevant to Victorian readers. The foggy streets replace dark forests; the laboratory replaces the dungeon; the locked cabinet replaces the castle tower. This urban Gothic suggests that horror is not distant and exotic but present in the heart of civilised society. The transformation of a respectable city into a landscape of terror reinforces Stevenson's message that evil lurks within the familiar.",
        marks: 4,
      },
      {
        question:
          "Identify one example of foreshadowing in the novella and explain its effect.",
        lines: 4,
        modelAnswer:
          "Utterson's nightmare after hearing Enfield's story foreshadows the truth about Jekyll and Hyde. In the dream, Hyde 'glide more stealthily through sleeping houses' and stands at Jekyll's bedside. This foreshadows the revelation that Hyde emerges from within Jekyll — literally appearing in his bedroom as an involuntary transformation. The nightmare also foreshadows the novella's Gothic horror: the image of Hyde moving through houses suggests an invasion of private, safe spaces, anticipating the way the truth will eventually invade and destroy the characters' carefully maintained facades.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Gothic bingo is an engaging starter but can be noisy — establish rules before beginning.",
      "The three atmospheric passages provide excellent comparative material; this mirrors exam skill requirements.",
      "Ensure students understand 'third-person limited' as distinct from 'third-person omniscient.'",
      "The urban Gothic point is often missed by students who associate Gothic only with castles; emphasise it.",
      "Narrative structure questions appear frequently in the exam; this lesson is essential preparation.",
      "The revision poster homework should be checked before the exam practice lesson.",
      "Link fog to moral obscurity — this is a concise, memorable analytical point for exams.",
    ],
    targetedSkills: [
      "AO2: Gothic techniques",
      "AO2: Narrative structure",
      "Subject terminology",
      "Comparative analysis",
      "Analytical writing",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 10: Exam Practice
  // ─────────────────────────────────────────────
  {
    id: "jh-10-exam-practice",
    title: "Exam Practice: Jekyll and Hyde",
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Apply knowledge of the novella to an exam-style question",
      "Practise planning, structuring, and timing an exam response",
      "Develop the ability to integrate AO1, AO2, and AO3 effectively",
      "Self-assess against the AQA mark scheme and identify areas for improvement",
    ],
    successCriteria: [
      "I can plan a structured response to an exam question in under 5 minutes",
      "I can write an analytical response addressing AO1, AO2, and AO3",
      "I can self-assess using the mark scheme and set a target for improvement",
    ],
    keywords: [
      "assessment objectives",
      "mark scheme",
      "band descriptors",
      "critical response",
      "embedded quotation",
      "conceptualised",
      "judicious",
      "evaluative",
    ],
    starterActivity: {
      title: "Decoding the Question",
      duration: "8 minutes",
      instructions:
        "Display the exam question: 'How does Stevenson present the theme of duality in The Strange Case of Dr Jekyll and Mr Hyde?' Students underline key words and discuss: What is the question asking? What must you include? Establish the requirements: discuss duality, analyse Stevenson's methods, use textual evidence, include context. Students list their three strongest points on a sticky note — this becomes the basis for their plan.",
      differentiation: {
        support: "Teacher models underlining key words and explains what the question requires.",
        core: "Underline key words independently and list three strong points.",
        stretch:
          "Identify what distinguishes a Grade 5 response from a Grade 8 response for this specific question.",
      },
    },
    mainActivities: [
      {
        title: "Rapid Planning",
        duration: "7 minutes",
        instructions:
          "Students have 5 minutes to create a plan. Model the approach: three paragraphs, each with a key argument, quotation, technique to analyse, and contextual link. Suggested structure: Paragraph 1: Duality in character (Jekyll/Hyde as two sides of one person). Paragraph 2: Duality in setting and symbolism (the two doors, London's contrasts). Paragraph 3: Duality in structure and narrative (the shift from investigation to confession). Students write their own plan. Teacher circulates to check plans have clear focus and evidence.",
        differentiation: {
          support: "Provide a planning template with paragraph prompts and a quotation bank.",
          core: "Plan independently using the modelled approach.",
          stretch: "Plan four paragraphs including an evaluative conclusion about Stevenson's message.",
        },
        resources: ["Planning template (support)", "Quotation bank (support)"],
      },
      {
        title: "Timed Writing",
        duration: "30 minutes",
        instructions:
          "Students write their response in exam conditions (silence, timed). Remind them of the typical 45-minute allocation; today's 30 minutes develops pace. Circulate silently, noting common issues for whole-class feedback. Give 10-minute and 2-minute warnings. Encourage early finishers to re-read, add quotations, refine word choices, and check spelling of key terms (duality, Stevenson, Victorian).",
        differentiation: {
          support: "Use the planning template and quotation bank during writing.",
          core: "Write independently under timed conditions.",
          stretch: "Aim for four developed paragraphs with an evaluative, conceptualised response.",
        },
        resources: ["Lined paper or exercise books", "Timer displayed"],
      },
      {
        title: "Self-Assessment and Target Setting",
        duration: "10 minutes",
        instructions:
          "Distribute a simplified AQA mark scheme. Walk through Bands 4 and 6, highlighting differences. Students colour-code their work: AO1 references (blue), AO2 method analysis (green), AO3 context (orange). They assess which band their response falls into and write: one strength, one area for improvement, and one specific action they will take next time. Collect work for teacher marking.",
        differentiation: {
          support: "Use a simplified checklist version of the mark scheme.",
          core: "Use the full simplified mark scheme to self-assess.",
          stretch:
            "Rewrite their weakest paragraph at a higher band, labelling the improvements.",
        },
        resources: ["Simplified mark scheme", "Coloured highlighters"],
      },
    ],
    plenaryActivity: {
      title: "Quotation Confidence Check",
      duration: "5 minutes",
      instructions:
        "Flash five key quotations on screen one at a time. For each, students write on their whiteboards: (1) Who says/what it describes, (2) One word for the theme it connects to. This rapid check identifies quotation gaps that need addressing before the exam. Note any quotations that many students cannot place and address in future revision sessions.",
      differentiation: {
        support: "Identify who says the quotation or what it describes.",
        core: "Identify the source and connect to a theme.",
        stretch: "Identify source, theme, and one technique used in the quotation.",
      },
    },
    homework:
      "Rewrite one paragraph from your exam response, improving it based on your self-assessment. Annotate the improvements. Also: revise five key quotations for the next lesson's quiz.",
    worksheetQuestions: [
      {
        question:
          "Plan a response to: 'How does Stevenson present Mr Hyde as a frightening character?' Write three topic sentences for your paragraphs.",
        lines: 6,
        modelAnswer:
          "Paragraph 1: Stevenson presents Hyde as frightening through his indescribable physical appearance, which provokes instinctive horror in everyone who encounters him, suggesting evil cannot be rationalised or categorised. Paragraph 2: The escalating violence of Hyde's actions — from trampling a child to beating a man to death — creates a sense of uncontrollable, growing menace that makes him increasingly terrifying. Paragraph 3: Most frighteningly, Stevenson reveals that Hyde is not an external monster but an internal one — he emerges from within a respectable doctor, suggesting that the capacity for evil exists within every person.",
        marks: 3,
      },
      {
        question:
          "Write an analytical paragraph about how Stevenson uses setting to present the theme of duality.",
        lines: 8,
        modelAnswer:
          "Stevenson uses the physical setting of Jekyll's house to symbolise the duality at the heart of the novella. The house has two entrances: a grand, respectable front door on a pleasant street, and a neglected, 'blistered and distained' back door in a sinister lane. This architectural duality mirrors Jekyll's psychological split — the respectable facade concealing a dark interior. The word 'blistered' suggests disease and decay hidden behind the beautiful front, implying that the back entrance reveals the truth that the front conceals. That both doors lead to the same building is Stevenson's central metaphor: respectability and vice are not separate but coexist within the same structure, just as Jekyll and Hyde coexist within the same person. In the context of Victorian London, where wealthy areas bordered impoverished slums, this physical duality reflected a broader social hypocrisy that Stevenson sought to expose.",
        marks: 6,
      },
      {
        question:
          "What are the three Assessment Objectives for the AQA English Literature exam on Jekyll and Hyde?",
        lines: 4,
        modelAnswer:
          "AO1: Read, understand, and respond to texts — maintain a critical style and develop an informed personal response, using textual references including quotations. AO2: Analyse the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology. AO3: Show understanding of the relationships between texts and the contexts in which they were written.",
        marks: 3,
      },
      {
        question:
          "Rewrite this Grade 5 sentence at Grade 7+ level: 'Stevenson uses darkness and fog to make the setting scary, which links to the Gothic genre.'",
        lines: 5,
        modelAnswer:
          "Stevenson employs pervasive fog and darkness as Gothic devices that transform London into a landscape of moral obscurity, where the boundaries between respectability and vice, known and unknown, dissolve as completely as the street landmarks in the mist. The fog functions as both pathetic fallacy — mirroring the characters' confusion and inability to perceive truth — and as a symbol of the deliberate concealment that sustains Victorian respectability, suggesting that the entire society exists in a self-imposed darkness that enables horrors like Hyde to flourish unseen.",
        marks: 4,
      },
      {
        question:
          "Identify three common mistakes students make when writing about Jekyll and Hyde in the exam.",
        lines: 5,
        modelAnswer:
          "First, students often treat Jekyll and Hyde as two separate characters rather than two aspects of one person — this misses the central point about duality. Second, students frequently retell the plot rather than analysing methods and meanings, spending too long explaining what happens instead of how and why Stevenson writes it. Third, students often add context as a bolt-on paragraph rather than integrating it into their analysis — for example, discussing Victorian society in a separate section rather than weaving it into analysis of specific quotations and techniques.",
        marks: 3,
      },
      {
        question:
          "If you had 45 minutes to answer an exam question on Jekyll and Hyde, how would you divide your time? Explain your reasoning.",
        lines: 5,
        modelAnswer:
          "5 minutes for planning (identifying key arguments, selecting quotations, structuring paragraphs). 35 minutes for writing (approximately 10-12 minutes per paragraph for three well-developed paragraphs). 5 minutes for checking (re-reading for accuracy, adding any missed quotations, checking spelling of key terms). Planning is essential because a clear structure prevents rambling. The checking time allows students to catch errors and add refinements that can push a response into a higher band. Rushing without planning typically produces a narrative response rather than an analytical one.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "This lesson mirrors the Christmas Carol exam practice lesson for consistency of approach.",
      "The 30-minute writing window is deliberately shorter than the exam to build pace and stamina.",
      "Self-assessment with colour coding is a powerful metacognitive tool — model it before students attempt it.",
      "Collect the work for marking and provide individual feedback before the mock exam.",
      "The quotation confidence check identifies gaps quickly — note results and address in revision lessons.",
      "Common errors to watch for: treating Jekyll and Hyde as separate, plot retelling, bolted-on context.",
      "Consider displaying strong anonymous paragraphs at the start of the following lesson for peer learning.",
      "The Grade 5 to Grade 7+ rewrite question is highly effective — students see exactly what improvement looks like.",
    ],
    targetedSkills: [
      "AO1: Critical response",
      "AO2: Methods analysis",
      "AO3: Context integration",
      "Exam technique and timing",
      "Self-assessment and metacognition",
    ],
  },
]
