import type { LessonPlan } from '@/types'

export const y8ExtendedLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 1 - THE HUNGER GAMES (DEEPER STUDY)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson y8ext-01: Consolidating Dystopia Analysis ──────────────────────
  {
    id: 'y8ext-01',
    title: 'Consolidating Dystopia Analysis - Control, Fear and Compliance',
    text: 'The Hunger Games',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Consolidate understanding of dystopia as a genre by analysing how control is maintained in Panem (8R.4)',
      'Examine how Collins uses fear, propaganda and spectacle as tools of oppression',
      'Develop extended analytical writing that synthesises evidence from across the novel',
      'Understand how the Hunger Games themselves function as a political mechanism of control',
    ],
    successCriteria: [
      'I can explain at least three methods the Capitol uses to control the Districts',
      'I can select and analyse quotations showing how fear and spectacle are weaponised',
      'I can write an extended analytical paragraph that synthesises evidence from more than one part of the novel',
      'I can use subject terminology including dystopia, propaganda, compliance, and spectacle accurately',
    ],
    keywords: [
      'dystopia',
      'propaganda',
      'compliance',
      'spectacle',
      'surveillance',
      'totalitarianism',
      'oppression',
      'ideology',
    ],
    starterActivity: {
      title: 'Control Mechanisms Sorting Activity',
      duration: '8 minutes',
      instructions:
        'Provide students with twelve cards, each describing a method of control (e.g. the tesserae system, the Peacekeepers, the televised Games, restricting travel, controlling food supply, mandatory viewing of the Games, rewarding victors, punishing rebellion, the Capitol\'s luxury as deterrent, tesserae debt, restricting information, public executions). Students work in pairs to sort them into three categories: "Fear", "Dependency", and "Spectacle". Pairs share their most debated card. Teacher draws out the idea that the Capitol uses multiple overlapping methods and that the Hunger Games serve all three categories simultaneously.',
      differentiation: {
        support:
          'Provide a partially sorted grid with three cards already placed in each category, so students sort the remaining six.',
        core: 'Students sort all twelve cards and write one sentence justifying each category.',
        stretch:
          'Students add a fourth category of their own devising, justify why it is needed, and explain which single method of control they consider most effective and why.',
      },
      resources: [
        'Control mechanism cards (printed or digital)',
        'Sorting grid template',
        'Mini-whiteboards',
      ],
    },
    mainActivities: [
      {
        title: "Close Reading: The Capitol's Propaganda Machine",
        duration: '20 minutes',
        instructions:
          'Distribute two short extracts: (1) Caesar Flickerman\'s televised interview with Katniss, and (2) the moment the Capitol audience cheers during the Games. Teacher models reading extract 1, highlighting language that presents the Games as entertainment and glamour. Pose the question: "How does Collins show that the Capitol turns suffering into spectacle?" Students annotate extract 2 independently, identifying: language that dehumanises tributes, language that frames violence as entertainment, and moments where characters conform or resist. Students then write two analytical sentences for each extract using the stem: "Collins presents the Capitol\'s propaganda through the verb/noun/adjective ___, which suggests..."',
        differentiation: {
          support:
            'Provide a pre-annotated extract 1 with four quotations already identified. Students write one analytical sentence per quotation using a provided sentence frame.',
          core: 'Students annotate both extracts and write two analytical sentences each, using subject terminology accurately.',
          stretch:
            "Students write a comparative paragraph examining how Collins's language shifts between the perspective of Capitol citizens and District tributes, exploring how this structural technique positions the reader.",
        },
        resources: [
          'Caesar Flickerman extract handout',
          'Capitol audience extract handout',
          'Analytical sentence frames card',
          'Subject terminology glossary',
        ],
      },
      {
        title:
          'Extended Writing: "How Does Collins Show That the Hunger Games Are a Tool of Political Control?"',
        duration: '22 minutes',
        instructions:
          'Students plan and write an extended analytical response of three paragraphs addressing the question above. Teacher displays a planning scaffold: Introduction (define the central argument), Paragraph 1 (fear and punishment - tesserae, Peacekeepers), Paragraph 2 (spectacle and propaganda - the Games as television event), Paragraph 3 (dependency and complicity - the role of victors and the reaping system). Students plan for four minutes using a bullet-point frame, then write for fifteen minutes. In the final three minutes, students highlight one quotation in each paragraph they are most confident about and one they would improve, ready for peer feedback.',
        differentiation: {
          support:
            'Provide a partially completed planning frame with one quotation per paragraph already selected. Students add their own quotation and write sentences around the provided ones.',
          core: 'Students complete the three-paragraph response independently using their planning frame and own selected quotations.',
          stretch:
            'Students write a fourth paragraph evaluating which method of control Collins presents as most powerful, using language such as "ultimately", "perhaps most significantly", and "it could be argued that".',
        },
        resources: [
          'Planning scaffold handout',
          'Quotation bank from across the novel',
          'PEEL paragraph reminder card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Peer Feedback: Two Stars and a Wish',
      duration: '10 minutes',
      instructions:
        'Students swap extended writing responses with a partner. Partners read and annotate using the success criteria: two stars identify where the writer has used an embedded quotation well and where they have explained how language creates meaning. One wish identifies one specific improvement (e.g. "add the effect on the reader", "embed rather than drop your quotation", "use more precise terminology"). Students have three minutes to read their feedback and respond in writing with one sentence explaining what they will do differently next time. Teacher takes two or three examples to model what strong analytical writing looks like at this level.',
      differentiation: {
        support:
          'Provide a peer feedback sentence frame: "You successfully... because... One thing you could improve is..."',
        core: 'Students write two stars and one wish using the success criteria as a checklist.',
        stretch:
          "Students write an evaluative comment on the overall argument, noting whether their partner's response answers the question directly and what the most persuasive point is.",
      },
    },
    homework:
      'Write a further paragraph responding to the question: "How does Katniss\'s decision to eat the berries challenge the Capitol\'s control?" Include at least two embedded quotations and explain how Collins positions the reader to see this as an act of resistance.',
    worksheetQuestions: [
      {
        question:
          'Identify three methods the Capitol uses to control the Districts. For each, provide a specific example from the novel.',
        lines: 8,
        modelAnswer:
          "Three methods include: (1) Fear through Peacekeepers and public punishment - the Districts know that any act of rebellion will be met with brutal force. (2) Spectacle through the televised Hunger Games - citizens are forced to watch children from their own district fight and die, which reinforces powerlessness and dependence. (3) Dependency through the tesserae system - the poorest families are forced to enter their children's names more times in exchange for grain, which perpetuates poverty and creates division within Districts.",
        marks: 6,
      },
      {
        question:
          'How does the word "spectacle" apply to the Hunger Games? Explain using evidence from the novel.',
        lines: 5,
        modelAnswer:
          "A spectacle is a public performance designed for an audience to watch. Collins presents the Hunger Games as spectacle through the televised interviews, styled tributes, and mandatory viewing, which transforms children's deaths into entertainment. This serves the Capitol by making the Districts passive viewers of their own oppression rather than active resistors.",
        marks: 4,
      },
      {
        question:
          'Explain how Collins uses the character of Caesar Flickerman to show the role of propaganda in Panem.',
        lines: 6,
        modelAnswer:
          'Caesar Flickerman is the smiling, enthusiastic host of the Games, whose role is to make the tributes likeable and the Games entertaining for Capitol audiences. Collins uses him to show how propaganda operates through charm and spectacle - he humanises the tributes just enough for audiences to care about their deaths, which increases viewership and investment in the Games. His character shows that propaganda does not always look like force; sometimes it wears a smile.',
        marks: 5,
      },
      {
        question:
          'Write one analytical paragraph exploring how Collins presents the idea of compliance in The Hunger Games. Use at least one embedded quotation.',
        lines: 8,
        modelAnswer:
          'Collins presents compliance as a survival strategy that the Capitol actively engineers. When Katniss reflects that "taking the tesserae is yet one more way of planting fear and resentment", the reader understands that the system is designed to force the poor to participate in their own oppression. The noun "resentment" suggests that even as people comply they resist internally, but compliance at the surface level keeps the Capitol\'s power intact. Collins positions the reader to see compliance not as weakness but as rational response to an overwhelming system.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'This lesson assumes students have read or studied at least the first half of the novel - select extracts accordingly.',
      'The sorting activity can be done physically with printed cards or digitally using a collaborative tool; both work equally well.',
      'Emphasise the distinction between compliance as active choice and compliance as coerced response - this will be useful when students later compare Panem with 1984.',
      'If time is short, the extended writing can be set as homework and the lesson focus adjusted to peer feedback on previous work.',
    ],
    targetedSkills: [
      '8R.4',
      '8R.5',
      'Analytical Writing',
      'Synthesising Evidence',
      'Subject Terminology',
    ],
  },

  // ── Lesson y8ext-02: Comparing The Hunger Games with 1984 Extracts ─────────
  {
    id: 'y8ext-02',
    title: 'Cross-Text Comparison - The Hunger Games and 1984: Surveillance and Control',
    text: 'The Hunger Games / 1984 (George Orwell)',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Read and respond to an extract from 1984, making connections with The Hunger Games (8R.1)',
      'Compare how two writers from different eras present themes of surveillance and totalitarian control',
      'Develop comparative writing skills using discourse markers such as "similarly", "in contrast", and "both writers"',
      "Understand how context shapes a writer's approach to dystopian themes",
    ],
    successCriteria: [
      'I can identify at least two similarities and two differences in how Collins and Orwell present state control',
      'I can write a comparative paragraph using discourse markers accurately',
      'I can comment on at least one contextual factor that might have influenced each writer',
      'I can explain how both texts position the reader to feel sympathy with the oppressed',
    ],
    keywords: [
      'surveillance',
      'totalitarianism',
      'comparison',
      'context',
      'discourse marker',
      'Big Brother',
      'dystopia',
      'doublethink',
    ],
    starterActivity: {
      title: 'Then and Now: Dystopian Regimes',
      duration: '8 minutes',
      instructions:
        'Display two images side by side: a wartime propaganda poster from the 1940s and a still from a modern surveillance city. Ask students: "What do these have in common? What is different?" Students discuss in pairs for two minutes, then share with the class. Teacher provides brief context: George Orwell wrote 1984 in 1948, heavily influenced by Stalinist Russia and Nazi Germany. Suzanne Collins wrote The Hunger Games in 2008, influenced by reality television culture and post-9/11 surveillance debates. Ask: "Why might both writers choose to set their fears in the future rather than the present?" Take three or four responses and park ideas on the board to return to in the plenary.',
      differentiation: {
        support:
          "Provide a contextual fact card with three bullet points about Orwell's 1948 context and three about Collins's 2008 context.",
        core: 'Students discuss the images independently and note two contextual links to the starter question.',
        stretch:
          'Students consider how writing in the future tense (dystopian setting) allows writers to make political commentary without direct censorship, using the term "allegory".',
      },
      resources: ['Propaganda poster image', 'Surveillance city image', 'Contextual fact cards'],
    },
    mainActivities: [
      {
        title:
          'First Reading of 1984 Extract: "It was terribly dangerous to let your thoughts wander..."',
        duration: '18 minutes',
        instructions:
          'Teacher reads the extract from 1984 Part 1, Chapter 1 (Winston at his desk, aware of the telescreen) aloud while students follow on their copies. Pause at three key moments: (1) the description of the telescreen, (2) Winston\'s awareness of facial expression control, (3) the phrase "thoughtcrime does not entail death: thoughtcrime IS death." Students annotate for: language showing surveillance, language showing internal resistance, and language showing the power of the state over private thought. After reading, students complete a dual-column annotation table comparing the first extract from The Hunger Games (District 12 under Capitol control) with this Orwell extract. They record three quotations from each text under the heading "Evidence of State Control."',
        differentiation: {
          support:
            'Provide a guided annotation sheet with three key quotations from each text pre-selected and sentence starters for the comparison: "In The Hunger Games, Collins shows... whereas in 1984, Orwell shows..."',
          core: 'Students find and record three quotations per text independently and write one comparative sentence under each pair.',
          stretch:
            "Students write a brief contextual note beneath each quotation explaining how the writer's historical moment may have shaped their choice of language or detail.",
        },
        resources: [
          '1984 extract handout (Part 1, Chapter 1)',
          'The Hunger Games Chapter 1 extract (re-used from earlier in unit)',
          'Dual-column annotation table',
        ],
      },
      {
        title: 'Modelled and Independent Comparative Writing',
        duration: '22 minutes',
        instructions:
          'Teacher displays a modelled comparative paragraph on the board and reads it aloud, highlighting the structure: point - Collins text evidence and analysis - Orwell text evidence and analysis - evaluative comment on similarity or difference - effect on reader. Annotate the model together, naming each element. Students then write two comparative paragraphs independently: Paragraph 1 comparing how both writers show physical surveillance, Paragraph 2 comparing how both writers show psychological control (fear of thought and punishment). Remind students of key discourse markers displayed on the board: "Similarly, both writers...", "In contrast to Collins, Orwell...", "While both texts depict...", "A key difference is that..."',
        differentiation: {
          support:
            'Provide a writing frame for each paragraph with the opening clause and a quotation slot already structured. Students fill in the quotation, the "this suggests" explanation, and a final link sentence.',
          core: 'Students write both paragraphs independently using the modelled structure and discourse marker bank.',
          stretch:
            'Students write a third evaluative paragraph arguing which writer presents the more frightening vision of state control, and justify their view using specific language choices from each text.',
        },
        resources: [
          'Modelled comparative paragraph displayed on board',
          'Discourse marker bank card',
          'Comparative paragraph writing frame (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Speed Date: Similarities and Differences',
      duration: '7 minutes',
      instructions:
        'Students stand and take their written paragraph with them. In thirty-second exchanges, they share their most important point of similarity and most important point of difference with three different classmates. After three rounds, return to seats. Teacher asks: "Who heard a similarity they hadn\'t thought of? Who heard a difference that surprised them?" Take responses and end by returning to the board ideas from the starter: "Has your thinking about why writers choose dystopian futures changed?"',
      differentiation: {
        support:
          'Allow students to read directly from their written paragraph rather than speaking from memory.',
        core: 'Students share their points verbally, adapting their written ideas for spoken delivery.',
        stretch:
          'Students add a final sentence to their paragraph in light of a new idea they encountered during the speed-dating activity.',
      },
    },
    homework:
      'Research one of the following: (a) Stalinist Russia, (b) 1940s Nazi Germany, or (c) post-9/11 surveillance legislation. Write a paragraph (8-10 sentences) explaining how this context might have influenced a dystopian writer. Be prepared to share your findings next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is a "telescreen" in 1984? How is it similar to and different from the Hunger Games\' method of surveillance?',
        lines: 6,
        modelAnswer:
          "A telescreen in 1984 is a two-way monitor that allows the Party to watch and listen to citizens at all times. It is similar to the Hunger Games' surveillance in that both serve as tools of constant observation used to suppress resistance. However, the telescreen is private and domestic - it watches people in their own homes - whereas the Hunger Games are public spectacle; the surveillance in Panem is partly about making the Districts watch themselves being punished, using the Games to create fear through visibility rather than secrecy.",
        marks: 5,
      },
      {
        question:
          'Write a comparative sentence using a discourse marker that connects how Collins and Orwell present fear.',
        lines: 3,
        modelAnswer:
          "Both Collins and Orwell present fear as the primary mechanism by which the state maintains control: while Collins shows this through the public spectacle of the Hunger Games, Orwell demonstrates it through the internalised terror of thoughtcrime, suggesting that the most effective forms of oppression operate within the individual's own mind.",
        marks: 3,
      },
      {
        question:
          'What does the phrase "thoughtcrime IS death" reveal about the society in 1984? How does this compare with the world of Panem?',
        lines: 6,
        modelAnswer:
          'The phrase reveals that in Oceania even private thoughts are considered criminal - the state has extended its control beyond behaviour into consciousness itself. The use of capitals on "IS" emphasises the absolute, irrefutable nature of this law. By comparison, in Panem, the Capitol controls through physical punishment and spectacle; citizens can still think freely, as Katniss\'s internal narration shows. This suggests that Orwell\'s dystopia represents a more totalising form of oppression, whereas Collins focuses on systemic economic and social control.',
        marks: 5,
      },
      {
        question:
          'How does context - the time in which each book was written - help explain the differences between the two novels?',
        lines: 6,
        modelAnswer:
          "Orwell wrote 1984 in 1948, having witnessed the rise of Stalinist totalitarianism and Nazi propaganda; his novel reflects anxiety about the state's capacity to control truth and thought. Collins wrote in 2008, when reality television and government surveillance technology (post-9/11) were prominent concerns; her novel uses the spectacle of televised violence to critique media culture and entertainment that desensitises audiences to suffering. Both writers channel contemporary fears into futuristic settings, but the specific forms those fears take reflect their distinct historical moments.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'Select a short, accessible 1984 extract (approximately 300-400 words) - the opening telescreen scene works well and does not require prior reading of the whole novel.',
      'Students do not need to have read 1984 in full; treat it as an unseen extract comparison.',
      'The contextual dimension is challenging for Year 8 - keep it light; the goal is awareness of context, not detailed historical knowledge.',
      'This lesson pairs well with y8ext-03 (Year 8 Wider Reading Response) if you want to build a two-lesson cross-text sequence.',
    ],
    targetedSkills: [
      '8R.1',
      'Comparative Writing',
      'Contextual Understanding',
      'Discourse Markers',
      '8R.4',
    ],
  },

  // ── Lesson y8ext-03: Year 8 Wider Reading Response ────────────────────────
  {
    id: 'y8ext-03',
    title: 'Year 8 Wider Reading Response - Independent Unseen Text',
    text: 'Unseen Dystopian/Prose Extract',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Apply reading and analytical skills independently to an unseen prose extract (8R.1, 8R.5)',
      'Demonstrate understanding of how writers use language and structure to create meaning',
      'Make and justify personal responses to an unfamiliar text',
      'Develop exam-style reading skills including skimming, scanning, and close analysis',
    ],
    successCriteria: [
      'I can identify the key themes and ideas in an unseen extract',
      'I can select quotations that are relevant to a given question and embed them accurately',
      'I can write a structured analytical response of at least three paragraphs to an unseen text',
      'I can comment on both language choices and structural features in my response',
    ],
    keywords: [
      'unseen',
      'retrieval',
      'inference',
      'structural feature',
      'language analysis',
      'personal response',
      'annotation',
      'independent reading',
    ],
    starterActivity: {
      title: 'Two-Minute First Response',
      duration: '7 minutes',
      instructions:
        'Distribute the unseen extract face down. On teacher\'s signal, students turn it over and read it in silence for two minutes. They must not annotate during this time - the goal is a first, holistic impression. After reading, students write for two minutes in response to: "What is this text about? What mood or atmosphere does it create? What is your immediate reaction?" Students share responses briefly with a partner. Teacher emphasises that first responses matter: trained readers use them as a foundation before moving to closer analysis.',
      differentiation: {
        support:
          'Provide a sentence frame: "This text is about... It creates a feeling of... My reaction is..."',
        core: 'Students write their response freely using their own language.',
        stretch:
          'Students note two specific language techniques they noticed instinctively during the first read and predict how they might discuss these in a formal response.',
      },
      resources: ['Unseen extract handout (face down initially)', 'Timer displayed on board'],
    },
    mainActivities: [
      {
        title: 'Active Annotation: Building a Reading Toolkit',
        duration: '18 minutes',
        instructions:
          'Re-read the extract together. Teacher models active annotation on the first paragraph: underline key words, bracket structural features (e.g. short sentence for impact, shift in perspective, paragraph break), and note effects in the margin. Students continue annotating paragraphs 2-4 independently, using the annotation key displayed on the board: (1) circle vocabulary worth analysing, (2) bracket structural features, (3) asterisk the most important moment. Students then write three "quick analysis" sentences - one per annotated paragraph - using the pattern: "The word/phrase ___ suggests ___ which creates the effect of ___."',
        differentiation: {
          support:
            'Provide an annotation key card and a partially annotated extract with three quotations circled. Students add their own two annotations and write two quick-analysis sentences.',
          core: 'Students annotate all four paragraphs and write three quick-analysis sentences.',
          stretch:
            'Students also annotate for structural choices across the whole extract (e.g. how the opening and closing paragraphs relate, how tension builds) and write one structural analysis sentence.',
        },
        resources: [
          'Unseen extract (own copy)',
          'Annotation key card',
          'Quick-analysis sentence frame card',
        ],
      },
      {
        title: 'Timed Independent Response',
        duration: '25 minutes',
        instructions:
          'Display the question: "How does the writer create tension and unease in this extract? Write about language and structure." Students plan for three minutes (bullet points only - one point per paragraph), then write independently for twenty minutes. Teacher circulates and offers brief, non-directive prompts where students are stuck (e.g. "What is the effect of that choice on the reader?"). In the final two minutes, students re-read their response and underline one sentence they are most proud of. Teacher takes two or three examples to read aloud anonymously as models.',
        differentiation: {
          support:
            'Provide a planning frame with three paragraph headings: (1) Language that creates tension, (2) Structural choices that build unease, (3) Effect on the reader overall. Students add one quotation to each heading before writing.',
          core: 'Students plan and write independently, aiming for three paragraphs with one quotation each.',
          stretch:
            'Students write a fourth paragraph evaluating which technique the writer uses most effectively, using evaluative language such as "the most significant", "arguably" and "this is particularly effective because".',
        },
        resources: ['Question displayed on board', 'Planning frame (support version)', 'Timer'],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment: Traffic Light Against Success Criteria',
      duration: '5 minutes',
      instructions:
        'Students re-read the success criteria displayed on the board and traffic-light their response: green = I achieved this, amber = I partially achieved this, red = I did not achieve this. For any amber or red criterion, students write one specific action point. Teacher collects responses (or photographs students\' work) to inform planning for the next writing lesson. Brief class discussion: "What is the hardest part of responding to an unseen text? What strategies helped you most today?"',
      differentiation: {
        support:
          'Provide the success criteria on a card so students can hold it next to their work while self-assessing.',
        core: 'Students traffic-light and write one action point per amber/red criterion.',
        stretch:
          'Students write a two-sentence summary of their overall strengths and next steps based on the self-assessment.',
      },
    },
    homework:
      'Choose any short prose extract from a book you are currently reading or have recently finished (approximately one page). Write a paragraph analysing how the writer creates atmosphere in your chosen extract. Bring the book and your paragraph to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is meant by "retrieval"? Give an example of a retrieval question you might be asked about a text.',
        lines: 4,
        modelAnswer:
          'Retrieval means finding information that is directly stated in the text. A retrieval question might ask: "Where does the character live?" or "What time of day does the extract take place?" Retrieval questions test whether you can locate specific facts without needing to interpret the writer\'s intentions.',
        marks: 3,
      },
      {
        question:
          'What is the difference between retrieval and inference? Use an example to illustrate your answer.',
        lines: 5,
        modelAnswer:
          'Retrieval is finding information that is directly stated; inference is working out something that is implied but not stated directly. For example, if a text says "she clenched her fists", retrieval would note the action, but inference would suggest she is angry or nervous - an interpretation based on the detail, not a fact the text states outright.',
        marks: 4,
      },
      {
        question:
          'Explain what a "structural feature" is and give two examples of how a writer might use structure to affect the reader.',
        lines: 6,
        modelAnswer:
          "A structural feature is a deliberate choice about how a text is organised or built rather than about individual word choices. Two examples: (1) a very short sentence following a long, complex one creates contrast and emphasis - drawing the reader's eye and creating impact; (2) withholding information at the start and revealing it gradually (narrative withholding) creates tension and keeps the reader engaged.",
        marks: 4,
      },
      {
        question:
          'Write a quick-analysis sentence about the following phrase from an imaginary text: "The silence pressed in like walls."',
        lines: 4,
        modelAnswer:
          'The metaphor "pressed in like walls" suggests that the silence is not merely an absence of sound but a physical, oppressive force that closes around the character; this creates a sense of claustrophobia and unease, positioning the reader to feel the character\'s isolation and growing fear.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose an unseen extract that connects thematically to the wider Year 8 unit - a short dystopian, conflict, or persuasive prose piece works well.',
      'The timed nature of the main activity is important: students need to practise working independently within time constraints in preparation for Year 9 and beyond.',
      'Traffic-light self-assessment is only valuable if students are honest - model what "amber" looks like by sharing a sample response and discussing it together first.',
      'The homework is deliberately open and reader-led to support the reading for pleasure dimension of the wider Year 8 programme.',
    ],
    targetedSkills: ['8R.1', '8R.5', 'Independent Reading', 'Timed Writing', 'Self-Assessment'],
  },

  // ── Lesson y8ext-04: Cross-Genre Comparison (Novel and Poem) ──────────────
  {
    id: 'y8ext-04',
    title: 'Cross-Genre Comparison - The Hunger Games and a Conflict Poem',
    text: 'The Hunger Games / Conflict Poetry',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Compare how a novel extract and a conflict poem present similar themes using different literary forms (8R.4)',
      'Understand how genre shapes the way writers communicate meaning',
      'Develop comparative writing that analyses both language choices and form',
      'Explore the relationship between structure, form, and meaning in poetry and prose',
    ],
    successCriteria: [
      'I can identify how the same theme is explored differently in prose and poetry',
      'I can comment on how form and genre affect the way meaning is communicated',
      'I can write a comparative paragraph that discusses both texts and uses appropriate terminology',
      'I can use terminology including form, genre, structure, stanza, narrator, and perspective accurately',
    ],
    keywords: [
      'genre',
      'form',
      'prose',
      'poetry',
      'stanza',
      'voice',
      'perspective',
      'comparison',
      'structure',
      'theme',
    ],
    starterActivity: {
      title: 'Same Theme, Different Form - Quick-Think',
      duration: '8 minutes',
      instructions:
        'Display two short texts side by side on the board: a three-line prose description of a soldier\'s experience and a three-line poem about the same moment. Ask: "What is the same? What is different? Which feels more powerful to you, and why?" Students discuss in pairs for three minutes and share. Teacher draws out key differences: poetry is concentrated - every word, line break, and sound choice is deliberate; prose allows more development of thought and scene. Ask students to predict: "If you wanted to write about oppression and resistance, would you choose poetry or prose? What would each form allow you to do?" Take responses and display key ideas for the lesson.',
      differentiation: {
        support:
          'Provide a prompt card listing three things to look for: (1) length, (2) feeling or emotion, (3) specific words.',
        core: 'Students generate their own observations and explanations.',
        stretch:
          "Students consider how the intended audience might differ for a poem versus a novel, and how this shapes the writer's choices.",
      },
      resources: ['Two short text examples displayed on board', 'Prompt card (support)'],
    },
    mainActivities: [
      {
        title: 'Reading the Poem - First Response and Annotation',
        duration: '18 minutes',
        instructions:
          'Distribute the selected conflict poem (e.g. "Exposure" by Wilfred Owen, "War Photographer" by Carol Ann Duffy, or "The Right Word" by Imtiaz Dharker - choose based on class level and fit with the unit). Teacher reads the poem aloud twice - first for atmosphere, second for meaning. After the first reading, students write one word describing how the poem made them feel. After the second reading, students annotate for: strong verbs, repeated sounds or words, line breaks that create emphasis, the speaker\'s perspective. Students discuss in pairs: "What is the speaker\'s attitude to conflict or oppression? How is this similar to Katniss\'s perspective in The Hunger Games?"',
        differentiation: {
          support:
            'Provide a guided annotation sheet with four specific prompts matched to the poem and a glossary of key poetic terms (stanza, enjambment, speaker, volta).',
          core: "Students annotate independently and write two sentences summarising the speaker's perspective.",
          stretch:
            "Students identify the volta (turn in the poem) and explain how the poet uses this structural feature to shift the reader's understanding.",
        },
        resources: [
          'Selected conflict poem handout',
          'Guided annotation sheet (support)',
          'Poetic terms glossary card',
        ],
      },
      {
        title: 'Comparative Paragraph Writing: Novel and Poem',
        duration: '22 minutes',
        instructions:
          'Teacher displays a Hunger Games extract that connects thematically to the poem (e.g. Katniss\'s reaction to Rue\'s death, or the moment she volunteers at the Reaping). Model a comparative paragraph on the board using the structure: "Both [Collins] and [poet] present [theme]. In [text 1], [quotation and analysis]. Similarly/In contrast, in [text 2], [quotation and analysis]. The key difference in form is that the poem [structural observation], whereas the novel [prose observation]." Students write two comparative paragraphs independently: Paragraph 1 comparing how both texts present the idea of loss or sacrifice, Paragraph 2 comparing how both writers make the reader feel empathy for their central figure. Students share one sentence with the class in the final two minutes.',
        differentiation: {
          support:
            'Provide a writing frame with the sentence starters already written and quotation slots to fill in. Students add analysis and one comparative comment.',
          core: 'Students write both paragraphs independently using the modelled structure and quotation bank.',
          stretch:
            'Students write an evaluative final paragraph arguing whether the poem or the novel communicates the theme more powerfully, using evaluative language and making explicit reference to form.',
        },
        resources: [
          'The Hunger Games thematic extract handout',
          'Comparative paragraph writing frame (support)',
          'Quotation bank for both texts',
          'Discourse marker bank card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Form Reflection: What Does Each Genre Do Best?',
      duration: '7 minutes',
      instructions:
        'Class discussion: "If you were a writer who wanted to challenge an unjust government, which form would you choose - a novel, a poem, or something else? Why?" Students vote with a show of hands and justify their choice. Teacher draws out the idea that both forms can be powerful but in different ways: poems reach across time and can be memorised and shared; novels allow sustained exploration of systems and character. Return to the starter question and ask how their answers have changed. Students write one final sentence: "I think [form] is more effective for exploring [theme] because..."',
      differentiation: {
        support: 'Provide the sentence frame for the final written sentence.',
        core: 'Students write their own sentence and justify their view.',
        stretch:
          'Students name a third genre (e.g. film, speech, journalism) and explain how it would change the way the theme is communicated.',
      },
    },
    homework:
      'Find a poem or song lyric that deals with the theme of injustice or resistance. Copy out two lines and write a paragraph (6-8 sentences) analysing how the writer uses language to communicate their message. Be prepared to share your example with the class.',
    worksheetQuestions: [
      {
        question:
          'What is meant by "form" in the context of comparing texts? Give two examples of different literary forms.',
        lines: 4,
        modelAnswer:
          'Form refers to the type or genre of a text and the conventions associated with it - including how it is structured, how meaning is communicated, and what the reader expects. Two examples of literary forms are poetry (concentrated, line-by-line, with stanza structure and sound effects) and prose (written in sentences and paragraphs, allowing sustained narrative or argument).',
        marks: 3,
      },
      {
        question:
          'Explain how a line break in a poem can affect the meaning or impact for the reader.',
        lines: 4,
        modelAnswer:
          'A line break creates a pause and emphasises the word at the end of the line and the word at the start of the next. Poets use line breaks deliberately to control rhythm, create ambiguity (a word can carry two meanings depending on whether it is read as ending a thought or beginning one), and build tension by making the reader wait for what comes next.',
        marks: 3,
      },
      {
        question:
          'Write a comparative sentence connecting The Hunger Games and a conflict poem you have studied. Use at least one discourse marker.',
        lines: 4,
        modelAnswer:
          "While Collins uses sustained third-person narrative to build the reader's empathy with Katniss over many chapters, Owen concentrates the horror of conflict into a single extended poem, using half-rhyme and repetition to mimic the soldier's exhausted, trapped consciousness - both writers, however, ultimately position the reader to feel the human cost of systems that exploit vulnerable individuals.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Choose a poem that fits comfortably with the Year 8 class's existing poetry knowledge - if they have studied conflict poems in Term 2, draw on those texts rather than introducing a new poem.",
      'The cross-genre comparison is a challenging skill; spend time on the modelled paragraph and consider writing it together on the board before students attempt independent writing.',
      'This lesson works well as a bridge between the Hunger Games unit (T1) and the conflict poetry unit (T2) - it can be taught at the beginning of T2 or at the end of T1 as a transition lesson.',
    ],
    targetedSkills: ['8R.4', 'Comparative Writing', 'Genre Awareness', 'Poetic Analysis', '8W.5'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CROSS-TEXT COMPARISONS AND WRITING DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson y8ext-05: Feedback and Redrafting Session ──────────────────────
  {
    id: 'y8ext-05',
    title: 'Feedback and Redrafting - Improving Analytical Writing',
    text: 'The Hunger Games / Any Year 8 Studied Text',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand how to use teacher and peer feedback to improve analytical writing (8W.6)',
      'Practise targeted redrafting using specific improvement strategies',
      'Develop metacognitive awareness of own writing strengths and areas for development',
      'Apply improvement techniques including upgrading vocabulary, embedding quotations, and developing analysis',
    ],
    successCriteria: [
      'I can identify the specific feedback given on my writing and explain what it means',
      'I can redraft at least one paragraph, making at least two targeted improvements',
      'I can explain why my redrafted version is stronger than my first draft',
      'I can identify one remaining target to work on in future writing',
    ],
    keywords: [
      'redrafting',
      'feedback',
      'improvement',
      'metacognition',
      'analytical writing',
      'vocabulary',
      'embedding',
      'precision',
    ],
    starterActivity: {
      title: 'Before and After: Spot the Improvement',
      duration: '8 minutes',
      instructions:
        'Display two versions of the same analytical paragraph on the board (a deliberately weak first draft and a stronger redrafted version). Students work in pairs to identify all the differences between the two versions and categorise each change: (1) better vocabulary, (2) embedded quotation instead of dropped quotation, (3) more precise analysis, (4) clearer point, (5) improved structure. Pairs share findings. Teacher uses this to introduce the session\'s purpose: redrafting is not rewriting from scratch - it is making targeted, specific improvements. Ask: "Which change do you think made the biggest difference? Why?"',
      differentiation: {
        support:
          'Provide a list of the five categories on a card and ask students to match each change to a category rather than generating categories themselves.',
        core: 'Students identify differences and generate their own categories.',
        stretch:
          'Students rank the five types of improvement in order of impact on the quality of analytical writing and justify their ranking.',
      },
      resources: ['Before and after paragraph displayed on board', 'Category card (support)'],
    },
    mainActivities: [
      {
        title: 'Reading and Decoding Feedback',
        duration: '12 minutes',
        instructions:
          'Return marked writing from the previous assessment or extended writing task (y8ext-01, y8ext-03, or formal assessment). Students receive their work and read the feedback in silence for two minutes. They then colour-code feedback using three highlighters: yellow = "I understand this and know how to act on it", orange = "I understand this but need help implementing it", pink = "I do not fully understand this feedback." Students pair with someone who has a similar feedback pattern and discuss: "What is this comment asking me to do?" Teacher circulates, targeting students with pink highlights. Whole class: teacher addresses the two or three most common feedback themes, explaining what each one means in practical terms.',
        differentiation: {
          support:
            'Provide a "Feedback Translation" sheet that pairs common written feedback phrases (e.g. "develop your analysis", "embed your quotation") with plain-language explanations and one-sentence examples.',
          core: 'Students decode feedback independently using colour coding.',
          stretch:
            'Students write a brief explanation of each piece of feedback in their own words before beginning to redraft.',
        },
        resources: [
          'Returned marked work',
          'Highlighters (three colours)',
          'Feedback Translation sheet (support)',
        ],
      },
      {
        title: 'Targeted Redrafting',
        duration: '28 minutes',
        instructions:
          'Students select the paragraph from their returned work that received the most feedback or that they feel least confident about. Teacher displays a "Redrafting Menu" on the board with specific strategies: (1) Replace a vague adverb or adjective with a more precise one. (2) Embed a dropped quotation using "Collins\'s phrase ___ suggests..." (3) Add a "This is significant because..." sentence to deepen analysis. (4) Change "shows" to a more precise analytical verb (explores, implies, reinforces, challenges, subverts). (5) Add a reference to the effect on the reader. Students work silently for twenty-five minutes to produce a redrafted version of their chosen paragraph. They write their original version and improved version side by side (or annotate directly on the original using a different colour). In the final three minutes, students write one sentence explaining what they changed and why.',
        differentiation: {
          support:
            'Students redraft using items 1-3 from the menu only. Provide a vocabulary upgrade bank with twenty precise analytical verbs and twenty evaluative adjectives.',
          core: 'Students attempt at least three items from the menu in their redrafted paragraph.',
          stretch:
            'Students attempt all five items from the menu and write an evaluative reflection comparing their two versions, explaining which improvement they found most challenging and why.',
        },
        resources: [
          'Redrafting Menu displayed on board',
          'Vocabulary upgrade bank (support)',
          'Analytical verb bank',
          'Coloured pens or digital annotation tools',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Improvement Gallery',
      duration: '7 minutes',
      instructions:
        'Ask four or five volunteers (or select anonymously) to share their original and redrafted sentences aloud. After each pair of sentences, ask the class: "What specifically is better? What technique did they use?" Teacher names the technique explicitly each time. End with the question: "Why is redrafting important? What would happen to your writing if you never redrafted?" Students write one target for their next piece of writing - something specific they will do differently from the start next time.',
      differentiation: {
        support:
          'Students write their target using the frame: "Next time I write analytically, I will ___ because ___."',
        core: 'Students write their target independently.',
        stretch:
          'Students write two targets - one for language choices and one for structure - and explain how they relate to each other.',
      },
    },
    homework:
      'Redraft a second paragraph from the same piece of work, applying the same strategies from the Redrafting Menu. Write a note in the margin explaining what you changed and why. Bring both the original and the redraft to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between "editing" and "redrafting"? When is each most useful?',
        lines: 5,
        modelAnswer:
          'Editing typically refers to small-scale corrections - fixing spelling, punctuation, and grammar errors. Redrafting involves more substantial rethinking and rewriting - improving argument, structure, vocabulary, and analysis. Editing is most useful once a piece is nearly finished; redrafting is most valuable when feedback suggests that the content or approach needs deepening, not just surface correction.',
        marks: 4,
      },
      {
        question:
          'Rewrite the following weak analytical sentence to make it stronger: "Collins uses the word \'fire\' which is interesting."',
        lines: 4,
        modelAnswer:
          "One possible rewrite: \"Collins's repeated use of the noun 'fire' as a motif associated with Katniss implies that resistance and destruction are inseparable - she embodies a force that, once ignited, cannot easily be controlled by the Capitol, which reinforces her role as a symbol of dangerous hope.\"",
        marks: 3,
      },
      {
        question:
          'Name three specific improvements a writer can make when redrafting an analytical paragraph.',
        lines: 4,
        modelAnswer:
          'Three improvements include: (1) Embedding a quotation within a sentence rather than placing it on its own line or prefacing it with "Collins writes". (2) Replacing a general verb like "shows" with a more precise analytical verb such as "implies", "subverts", or "reinforces". (3) Adding a sentence that explains the effect on the reader, connecting the analysis to the writer\'s intended impact.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson is most effective when students have a substantial piece of marked work to return to - plan it to follow a formal assessment or extended writing task.',
      'The Feedback Translation sheet is a valuable resource to create and keep permanently in student books/folders.',
      'If students have not yet had a formal assessment, this lesson can use a shared class paragraph as the "first draft" - write it together in the starter and then redraft it together as the main activity.',
      'The Redrafting Menu should be adapted to the specific feedback patterns you have identified in marking - make it class-specific rather than generic.',
    ],
    targetedSkills: [
      '8W.6',
      'Analytical Writing',
      'Metacognition',
      'Vocabulary Development',
      'Redrafting',
    ],
  },

  // ── Lesson y8ext-06: Year 8 End-of-Term Speaking and Listening Task ────────
  {
    id: 'y8ext-06',
    title: 'Year 8 Speaking and Listening - Debating Dystopia',
    text: 'The Hunger Games / 1984 / Wider Reading',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Develop skills in formal debate and spoken argumentation (8SL.1, 8SL.2)',
      'Use evidence from texts studied across Year 8 to construct and defend a spoken argument',
      'Practise active listening and responding to counter-arguments in a structured discussion',
      'Build confidence in presenting a point of view clearly and persuasively in front of an audience',
    ],
    successCriteria: [
      'I can present a clear argument with at least two supporting points in a two-minute contribution',
      'I can reference a text I have studied to support a point I am making',
      'I can listen actively to an opposing argument and respond to at least one specific point it raises',
      'I can use formal spoken language appropriate to a debate context',
    ],
    keywords: [
      'debate',
      'argument',
      'counter-argument',
      'formal register',
      'active listening',
      'rebuttal',
      'evidence',
      'oracy',
    ],
    starterActivity: {
      title: 'The Big Debate: Which Is the Greater Evil?',
      duration: '10 minutes',
      instructions:
        "Introduce the debate motion: \"This house believes that ignorance is more dangerous than fear as a tool of control.\" Display three positions on the board: Agree, Disagree, Unsure. Students move to the physical space representing their current view (or signal digitally). Teacher asks two or three students from each position to briefly justify their choice in one sentence. Teacher then explains the debate format for the lesson and introduces the four groups. Groups are: Team A (Agree - ignorance as greater danger, citing Panem's restricted information), Team B (Disagree - fear as greater danger, citing the Hunger Games as spectacle), Team C (Agree - citing 1984's concept of doublethink and memory control), Team D (Disagree - citing Macbeth's Lady Macbeth or conflict poetry). Students have two minutes to choose which group to join and briefly explain why.",
      differentiation: {
        support:
          'Provide each group with a brief argument card listing two pre-written points to start from.',
        core: 'Students choose their group and begin building their own argument from the motion.',
        stretch:
          'Students consider both sides before choosing, and note one strong counter-argument they will need to address.',
      },
      resources: [
        'Motion displayed on board',
        'Group argument cards (support)',
        'Space for physical movement',
      ],
    },
    mainActivities: [
      {
        title: 'Preparation: Building the Argument',
        duration: '20 minutes',
        instructions:
          'In groups, students prepare for the debate. Each group must: (1) Agree on their main argument in one sentence. (2) Identify two or three supporting points with at least one textual reference each. (3) Anticipate the opposing team\'s main argument and prepare a rebuttal. (4) Decide who will speak and in what order. Teacher circulates, prompting groups to use specific textual evidence rather than vague generalisations, and to distinguish between their main argument and their counter-argument strategy. Provide the spoken language framework: "Our central argument is... We support this with... We would argue against the opposing position by..."',
        differentiation: {
          support:
            'Provide a preparation scaffold with spaces for: main argument sentence, two supporting points with text reference slots, and one counter-argument sentence.',
          core: 'Students prepare independently in groups using the spoken language framework.',
          stretch:
            'Students prepare a "concession and rebuttal" - acknowledging the strongest point of the opposing team before explaining why their argument is still more compelling.',
        },
        resources: [
          'Preparation scaffold (support)',
          'Spoken language framework card',
          'Year 8 text quotation bank',
        ],
      },
      {
        title: 'The Formal Debate',
        duration: '22 minutes',
        instructions:
          'Run the debate in structured rounds. Round 1 (8 minutes): Each group has ninety seconds to present their opening argument. Groups present in turn - no interruptions. Round 2 (8 minutes): Each group has ninety seconds to respond directly to one point raised by another group. Encourage direct address: "In response to what Team A said about..." Round 3 (6 minutes): Open floor - teacher facilitates three or four minutes of open discussion, then each group has thirty seconds to deliver a closing statement. Teacher or a student scribe notes key arguments and key textual references made during the debate on the board. After the debate, class votes on which group presented the most convincing case (they can vote for a group other than their own).',
        differentiation: {
          support:
            'Allow students in a support role to read from a prepared card rather than speaking from memory; assign them a specific, short speaking role (e.g. reading the textual evidence while a partner argues the point).',
          core: 'Students participate in all three rounds with at least one speaking contribution each.',
          stretch:
            'Students take on a "devil\'s advocate" role in Round 2, arguing against their own position to demonstrate they understand both sides.',
        },
        resources: [
          'Timer',
          'Whiteboard or flipchart for scribe notes',
          'Debate protocol rules displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reflection: What Makes a Powerful Spoken Argument?',
      duration: '5 minutes',
      instructions:
        'Brief class reflection: "What made the most convincing spoken contributions today?" Students suggest qualities: clarity of argument, specific evidence, confident tone, listening and responding to others, use of formal language. Teacher names these as oracy skills and connects them to future tasks: speeches (T3), presentations, and oral examinations. Students write one sentence in their books completing: "In a spoken argument, I am most confident at... My next target is..."',
      differentiation: {
        support: 'Provide the sentence frame for the reflection.',
        core: 'Students write their reflection independently.',
        stretch:
          'Students identify one specific moment from the debate where they could have made a stronger argument and rewrite that contribution as they wish they had said it.',
      },
    },
    homework:
      "Write up your group's opening argument as a short formal speech (one paragraph, approximately 120 words). Use the three-part structure: claim - evidence - explanation. Practise reading it aloud so it flows naturally. Bring it to the next speaking and listening lesson.",
    worksheetQuestions: [
      {
        question: 'What is a "rebuttal" in a debate? Write an example of one.',
        lines: 4,
        modelAnswer:
          'A rebuttal is a direct response to a point made by the opposing team, explaining why their argument is incomplete or incorrect. For example: "While Team A argues that fear is the primary tool of control in Panem, we would argue that this overlooks the role of ignorance - the Districts are prevented from communicating with each other, which means they cannot organise collective resistance. Fear may motivate compliance, but ignorance ensures that compliance continues even when fear temporarily lifts."',
        marks: 3,
      },
      {
        question:
          'Give two features of formal spoken language that make a debate contribution more effective.',
        lines: 4,
        modelAnswer:
          'Two features: (1) Using hedging language such as "it could be argued", "the evidence suggests" or "one might argue" shows awareness of complexity and sounds measured rather than aggressive. (2) Using discourse markers such as "firstly", "furthermore", and "in conclusion" organises the spoken argument so the audience can follow the logic clearly.',
        marks: 3,
      },
      {
        question: 'How does preparing for a spoken debate help develop written analytical skills?',
        lines: 5,
        modelAnswer:
          'Preparing for a debate requires students to identify a clear argument, find textual evidence, anticipate counter-arguments, and organise points logically - all of which are skills needed for written analytical essays. The debate process also forces students to articulate why evidence supports an argument, which deepens analytical thinking that can then be transferred to writing. Thinking through spoken argument first often clarifies the logical structure before students attempt to write it down.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The debate motion can be adapted to fit the texts most recently studied - the key is to create a genuine question that cannot be resolved through factual recall alone.',
      'Some Year 8 students find formal speaking tasks anxiety-inducing; allow preparation time to be generous and ensure that "speaking from a card" is explicitly presented as a legitimate approach, not a shortcut.',
      'The vote at the end should be about the quality of the argument, not personal preference - brief pre-teaching of what makes an argument "convincing" is worthwhile.',
      'This lesson meets Speaking and Listening requirements and can be used as an assessed task if needed - brief teacher observation notes during the debate serve as evidence.',
    ],
    targetedSkills: [
      '8SL.1',
      '8SL.2',
      'Oracy',
      'Debate',
      'Argument Construction',
      'Active Listening',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // END-OF-YEAR REVISION, CONSOLIDATION AND TRANSITION
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson y8ext-07: Grammar Focus - Complex Sentences ────────────────────
  {
    id: 'y8ext-07',
    title: 'Grammar Focus - Complex Sentences for Analytical Writing',
    text: 'Grammar in Context (Year 8 Studied Texts)',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand the structure and purpose of complex sentences in formal analytical writing (8W.2)',
      'Identify and use a range of subordinating conjunctions to build complex sentences',
      'Apply complex sentence structures to analytical writing about studied texts',
      'Understand how sentence-level choices affect the clarity and sophistication of written argument',
    ],
    successCriteria: [
      'I can distinguish between simple, compound, and complex sentences',
      'I can identify the main clause and subordinate clause in a complex sentence',
      'I can write at least three different complex sentences about a studied text using different subordinating conjunctions',
      'I can explain why a particular sentence structure is effective in analytical writing',
    ],
    keywords: [
      'complex sentence',
      'main clause',
      'subordinate clause',
      'subordinating conjunction',
      'syntax',
      'sentence variety',
      'clause',
      'analytical writing',
    ],
    starterActivity: {
      title: 'Sentence Sort: Simple, Compound, Complex',
      duration: '8 minutes',
      instructions:
        'Display eight sentences on the board, drawn from Year 8 analytical writing and studied texts. Students sort them into three columns: Simple, Compound, Complex. Examples should include: a simple declarative sentence about Katniss, a compound sentence joining two observations with "and" or "but", and several complex sentences with subordinate clauses in different positions. Students work individually for three minutes, then check with a partner. Teacher reveals answers and asks: "Which type of sentence is most common in strong analytical writing? Why?" Draw out that complex sentences allow writers to show the relationship between ideas, which is essential for analysis.',
      differentiation: {
        support:
          'Provide a definition card: Simple = one main clause. Compound = two main clauses joined by a coordinating conjunction (FANBOYS). Complex = one main clause and at least one subordinate clause joined by a subordinating conjunction.',
        core: 'Students sort independently and justify one choice to a partner.',
        stretch:
          'Students rewrite two of the simple sentences as complex sentences by adding a subordinate clause and explain what analytical information the subordinate clause adds.',
      },
      resources: ['Sentence sort display', 'Definition card (support)', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Building Complex Sentences: Subordinating Conjunctions in Practice',
        duration: '20 minutes',
        instructions:
          'Teacher explains the function of subordinating conjunctions (because, although, while, since, whereas, unless, despite the fact that, even though, which suggests, who, whose). Demonstrate on the board using examples from The Hunger Games: "Katniss volunteers although she knows it is almost certainly a death sentence" - the subordinate clause adds the crucial context of her self-sacrifice. Model three sentences, naming the subordinating conjunction and explaining what relationship it creates (cause, contrast, condition, qualification). Students complete a "Conjunction Workout": for each of five statements about studied texts, students must rewrite it as a complex sentence using a different subordinating conjunction each time. Students compare versions with a partner and choose the most effective.',
        differentiation: {
          support:
            'Provide the five statements pre-written with a subordinating conjunction already chosen for each. Students add the subordinate clause only.',
          core: 'Students choose their own subordinating conjunction for each statement and write the full complex sentence.',
          stretch:
            'Students write sentences with the subordinate clause in three different positions (at the start, in the middle, at the end) and explain how the position changes the emphasis.',
        },
        resources: [
          'Subordinating conjunctions reference card',
          'Five-statement Conjunction Workout worksheet',
          'Complex sentence examples from studied texts',
        ],
      },
      {
        title: 'Applying Complex Sentences to Analytical Paragraphs',
        duration: '22 minutes',
        instructions:
          'Students take a short analytical paragraph they have previously written (from any unit across Year 8 - ideally a piece with feedback suggesting more varied sentences or clearer analysis). Teacher models taking one sentence from the sample paragraph and upgrading it using a complex sentence structure: "Collins shows Katniss is brave" becomes "Although the odds are overwhelmingly against her, Collins presents Katniss as a figure whose courage derives not from certainty of success but from a refusal to accept injustice as inevitable." Students then upgrade three sentences in their own paragraph using the techniques from the Conjunction Workout. They write their original sentence and upgraded version side by side. Students share one upgrade with a partner and discuss which subordinating conjunction creates the clearest analytical link.',
        differentiation: {
          support:
            'Provide three sentence stems for students to complete: "Although Collins shows... she also suggests...", "While [character] appears to be..., the reader understands...", "Despite the fact that..., Collins implies..."',
          core: 'Students upgrade three sentences independently, choosing their own conjunctions.',
          stretch:
            'Students upgrade a full paragraph (four or five sentences) and annotate each complex sentence to explain what the subordinate clause adds to the analytical argument.',
        },
        resources: [
          "Students' previous analytical writing",
          'Complex sentence stems (support)',
          'Subordinating conjunctions reference card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Sentence Upgrade Challenge',
      duration: '5 minutes',
      instructions:
        'Display a weak analytical sentence on the board: "Orwell uses language to show control." Challenge students to upgrade it into the most complex, analytically precise sentence they can in sixty seconds using any subordinating conjunction. Students write on mini-whiteboards. Teacher selects three or four to share and the class votes on the most effective upgrade. Teacher names what made it effective (precise verb, clear causal link, embedded quotation slot, reference to reader). Students copy their best sentence into their books and underline the subordinating conjunction.',
      differentiation: {
        support: 'Allow students to use a sentence stem from the lesson to complete the upgrade.',
        core: 'Students attempt the upgrade independently.',
        stretch:
          'Students write two upgrades - one with the subordinate clause at the start and one at the end - and explain which is more effective for analytical writing.',
      },
    },
    homework:
      'Write five new complex sentences about a text you have studied this year, each using a different subordinating conjunction. At least two of your sentences should include an embedded quotation. Be prepared to share your strongest sentence next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between a main clause and a subordinate clause? Give an example of each.',
        lines: 4,
        modelAnswer:
          'A main clause is a group of words with a subject and a verb that makes complete grammatical sense on its own. A subordinate clause also has a subject and a verb but does not make complete sense alone - it depends on the main clause. Example: "Katniss volunteers" is a main clause. "Although she knows she may die" is a subordinate clause - it makes no complete sense on its own.',
        marks: 3,
      },
      {
        question:
          'Choose any three subordinating conjunctions and explain what kind of relationship each one creates between clauses.',
        lines: 5,
        modelAnswer:
          '"Although" creates a contrast or concession - it introduces information that contradicts or qualifies what the main clause says. "Because" creates a causal link - the subordinate clause explains the reason for what the main clause states. "Whereas" creates a direct comparison - it is used to highlight the difference between two ideas or situations.',
        marks: 4,
      },
      {
        question:
          'Rewrite this sentence as a complex sentence: "Lady Macbeth is ambitious. She persuades Macbeth to kill Duncan."',
        lines: 3,
        modelAnswer:
          "Because Lady Macbeth's ambition is absolute and untempered by moral doubt, she persuades Macbeth to commit regicide, positioning her as the more calculating and ruthless of the two at this point in the play.",
        marks: 3,
      },
      {
        question:
          'Why is sentence variety important in analytical writing? What happens if a student uses only simple sentences?',
        lines: 4,
        modelAnswer:
          'Sentence variety is important because it allows the writer to show the relationship between ideas with precision - complex sentences in particular demonstrate that a student can subordinate one idea to another, which is a hallmark of sophisticated analytical thinking. Using only simple sentences produces choppy, list-like writing that states observations without connecting or developing them, which limits the depth of analysis.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson works well as a mid-Year 8 grammar intervention or as revision preparation before Year 9.',
      'Embed grammar teaching in examples drawn from texts students know well - abstract grammar lessons without context rarely stick.',
      'The "Conjunction Workout" can be repeated across multiple lessons with different sentences until complex sentence use becomes habitual.',
      'Encourage students to keep their subordinating conjunctions reference card in their books permanently as a writing tool.',
    ],
    targetedSkills: ['8W.2', 'Grammar', 'Sentence Structure', 'Analytical Writing', 'Syntax'],
  },

  // ── Lesson y8ext-08: Building Vocabulary for Year 9 ──────────────────────
  {
    id: 'y8ext-08',
    title: 'Building Vocabulary for Year 9 - Precision and Power in Language',
    text: 'Vocabulary Across Year 8 Studied Texts',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Develop a wider range of precise analytical and evaluative vocabulary for use in reading and writing (8W.1)',
      'Understand how vocabulary choices distinguish strong analytical writing from basic responses',
      'Build a personal vocabulary toolkit for use in Year 9 English',
      'Practise using new vocabulary in context through structured speaking and writing tasks',
    ],
    successCriteria: [
      'I can explain the meaning of at least ten new analytical or evaluative vocabulary words',
      'I can use five new words accurately in sentences about studied texts',
      'I can explain the difference between two near-synonyms (e.g. "implies" vs "suggests")',
      'I can identify words in a text that I do not yet know and use strategies to work out their meaning',
    ],
    keywords: [
      'analytical vocabulary',
      'evaluative language',
      'connotation',
      'nuance',
      'etymology',
      'synonym',
      'register',
      'precision',
    ],
    starterActivity: {
      title: 'Vocabulary Auction',
      duration: '8 minutes',
      instructions:
        'Display fifteen words on the board: six analytical verbs (e.g. implies, subverts, juxtaposes, foreshadows, reinforces, undermines), five evaluative adjectives (e.g. compelling, ambiguous, pervasive, inevitable, paradoxical), four precise nouns (e.g. motif, archetype, allegory, ideology). Each pair has a budget of 100 points to "bid" for the words they already know and can use confidently. After bidding, teacher reveals the definitions. Students count how many of their "purchased" words they correctly knew. Class discussion: "Which words would be most useful in Year 9? Which were you surprised to not know?" Students select five words they do not yet own confidently as their personal targets for the lesson.',
      differentiation: {
        support:
          'Provide a glossary of the fifteen words - students participate in the auction with the glossary open, so the focus is on understanding rather than guessing.',
        core: 'Students bid based on their existing knowledge and work out meanings from context before checking.',
        stretch:
          'Students use the etymology (word origins) displayed briefly alongside each word to predict the meaning before the definition is revealed.',
      },
      resources: [
        'Vocabulary auction display',
        'Glossary card (support)',
        'Etymology notes (stretch)',
      ],
    },
    mainActivities: [
      {
        title: 'Deep Dive: Understanding Nuance Between Near-Synonyms',
        duration: '20 minutes',
        instructions:
          'Teacher presents five near-synonym pairs and models the distinction: (1) "implies" (the meaning is carried within the text) vs "suggests" (the reader draws a conclusion). (2) "subverts" (actively overturns an expectation) vs "challenges" (questions or tests). (3) "reinforces" (strengthens something already present) vs "creates" (brings something new into being). (4) "compelling" (irresistibly attractive or convincing) vs "interesting" (vague and undeveloped). (5) "pervasive" (spreading throughout) vs "common" (frequently occurring). For each pair, students write one sentence about a Year 8 text using the more precise word, then discuss with a partner whether their choice was justified. Teacher circulates and pushes students to explain why they chose one word over the other.',
        differentiation: {
          support:
            'Provide example sentences for three of the five pairs with the near-synonym underlined. Students write their own sentence for the remaining two pairs.',
          core: 'Students write one sentence per pair for all five, using the more precise word.',
          stretch:
            'Students write a sentence for both words in two of the pairs, showing how the different words produce a different analytical meaning.',
        },
        resources: [
          'Near-synonym pairs displayed on board',
          'Example sentences reference card (support)',
          'Vocabulary notebook or dedicated section in exercise book',
        ],
      },
      {
        title: 'Building a Personal Vocabulary Toolkit',
        duration: '22 minutes',
        instructions:
          'Students create a "Year 9 Vocabulary Toolkit" page in their exercise book or as a printed template. The page has five sections: Analytical Verbs (minimum 8 words), Evaluative Adjectives (minimum 6 words), Precise Nouns for Literary Discussion (minimum 6 words), Words for Comparing Texts (minimum 5 words), Words for Discussing the Reader\'s Response (minimum 5 words). Students fill in the toolkit using the words from the lesson, their vocabulary from across the year, and three additional words they look up in a dictionary or thesaurus under teacher direction. For each word, students write: the word, a brief definition in their own words, and one example sentence. Students share their three new words with a partner and explain why they chose them.',
        differentiation: {
          support:
            'Provide a partially completed toolkit with ten words already entered (one per section). Students add five new words of their own choosing.',
          core: 'Students complete the full toolkit with thirty words across all five sections.',
          stretch:
            'Students add a sixth section: "Words That Changed My Writing" - words they now use regularly that they did not know at the start of Year 8. They reflect on how their vocabulary has grown.',
        },
        resources: [
          'Vocabulary Toolkit template (printed or drawn in book)',
          'Dictionaries and thesauri',
          'Year 8 keyword reference from across all three terms',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Word of the Week Nomination',
      duration: '5 minutes',
      instructions:
        'Each student nominates one word from their toolkit as their "Word of the Week" - the word they are most committed to using in their next piece of writing. They share it with their partner in one sentence that uses the word correctly. Teacher collects a class list of nominated words and displays it on the classroom wall or in a shared document. Students copy the full list into their toolkit. End with the question: "What is the difference between knowing a word and owning it?" Teacher\'s answer: you own a word when you use it accurately without thinking - and that takes practice.',
      differentiation: {
        support:
          'Students nominate a word from the lesson starter list and use the provided example sentence as a model.',
        core: 'Students nominate their own word and write an original sentence.',
        stretch:
          'Students nominate a word and explain how using it would improve a specific sentence from their previous written work.',
      },
    },
    homework:
      "Use at least five words from your Year 9 Vocabulary Toolkit in a piece of writing this week - this could be a paragraph response, a diary entry written from a character's perspective, or a reflective piece about your Year 8 English learning. Underline each toolkit word you use.",
    worksheetQuestions: [
      {
        question:
          'What does "subverts" mean? Write a sentence using it in the context of a text you have studied this year.',
        lines: 4,
        modelAnswer:
          '"Subverts" means to actively undermine or overturn an expectation, convention, or system of power. Example: "Collins subverts the conventional heroic narrative by presenting Katniss\'s greatest act of defiance not as physical combat but as the threat of a shared suicide - a gesture that weaponises vulnerability rather than strength."',
        marks: 3,
      },
      {
        question: 'Explain the difference between "implies" and "suggests" in analytical writing.',
        lines: 4,
        modelAnswer:
          '"Implies" suggests that the meaning is carried within the writer\'s words themselves - the text implies something through its language choices. "Suggests" tends to be used when the reader is drawing a conclusion from the text - the text suggests something that the reader then infers. In practice, "implies" is often considered slightly more precise in analytical writing as it ties the meaning more firmly to the writer\'s deliberate choices.',
        marks: 3,
      },
      {
        question:
          'Choose two of the following words and use each in a sentence about a Year 8 text: pervasive, archetype, ideology, juxtapose, paradoxical.',
        lines: 6,
        modelAnswer:
          'Example: "The ideology of the Capitol is pervasive throughout Panem - it reaches into the Districts not only through the Peacekeepers but through the very names and numbers assigned to each District, stripping communities of cultural identity." / "Collins juxtaposes the opulent spectacle of the Capitol with the starvation of District 12, creating a paradoxical world where abundance and death coexist in the same nation."',
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is best placed towards the end of Year 8 - students benefit from having a year's worth of vocabulary to consolidate and build from.",
      'The Vocabulary Toolkit is a genuinely useful resource for students to keep and refer to in Year 9 - encourage them to maintain it across the year.',
      'The auction format generates engagement and healthy competition; ensure no student feels embarrassed about not knowing a word - frame "not yet knowing" as an opportunity.',
      'Link vocabulary development to reading: students who read widely acquire vocabulary faster. Use this lesson to motivate the reading for pleasure celebration in y8ext-09.',
    ],
    targetedSkills: [
      '8W.1',
      'Vocabulary Development',
      'Analytical Language',
      'Independent Learning',
      'Transition',
    ],
  },

  // ── Lesson y8ext-09: Year 8 Reading for Pleasure Celebration ─────────────
  {
    id: 'y8ext-09',
    title: 'Year 8 Reading for Pleasure - Celebration and Recommendation',
    text: 'Student-Selected Wider Reading',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Celebrate and share individual reading experiences from across Year 8',
      'Develop spoken and written skills in book recommendation and review',
      'Reflect on personal reading choices and identify reading preferences',
      'Inspire classmates to read widely by sharing genuine enthusiasm for chosen books',
    ],
    successCriteria: [
      'I can talk about a book I have read this year for at least two minutes with enthusiasm and detail',
      'I can write a structured book recommendation paragraph that would persuade someone to read my book',
      "I can listen to classmates' recommendations and identify at least one book I would like to read next",
      'I can reflect on how my reading confidence or preferences have changed across Year 8',
    ],
    keywords: [
      'recommendation',
      'review',
      'genre',
      'reading preferences',
      'persuasion',
      'summary',
      'hook',
      'reflection',
    ],
    starterActivity: {
      title: 'Bookshelf Mapping',
      duration: '8 minutes',
      instructions:
        'Students draw a simple "bookshelf" with eight spaces on a piece of paper (or use a printed template). They fill it with the names of books they can remember reading - from primary school, Year 7, Year 8, home, or holidays. It does not matter if they remember the title exactly. Students compare shelves with a partner: "What do we have in common? What is different? What is the oldest book either of us remembers?" Teacher facilitates brief discussion: "Can you see any patterns in your reading? Do you tend to go back to the same genres or authors?" Students circle the three books they remember most vividly and will use these as the basis for the lesson.',
      differentiation: {
        support:
          'Allow students to draw the cover if they cannot remember the title, or to name a character rather than a book title.',
        core: 'Students map their bookshelf and identify patterns in their reading independently.',
        stretch:
          'Students categorise their bookshelf by genre, theme, and year read, and reflect on how their reading choices have changed over time.',
      },
      resources: ['Bookshelf template (optional)', 'Coloured pens'],
    },
    mainActivities: [
      {
        title: 'Two-Minute Recommendation: Speaking Task',
        duration: '22 minutes',
        instructions:
          'Students prepare a two-minute verbal book recommendation for the book they are most enthusiastic about from their bookshelf map. Provide the recommendation structure on the board: (1) The hook - one sentence to make the listener immediately curious. (2) What kind of book it is - genre, themes, mood. (3) Who the main character is and why they are interesting. (4) A moment from the book that stayed with you - describe it without spoiling the ending. (5) Who you would recommend it to and why. Students have eight minutes to prepare notes (not a script). Then run timed two-minute recommendations: students stand and speak, classmates listen and note the title of any book they would like to read on their bookshelf map. After six to eight recommendations, briefly discuss: "What made you want to read the book? What information did the speaker give that was most useful?"',
        differentiation: {
          support:
            'Allow students to read from a prepared paragraph rather than speaking from notes, and reduce the expectation to one minute.',
          core: 'Students speak for two minutes from notes, covering at least four of the five recommendation elements.',
          stretch:
            "Students include a brief quotation from the book and explain what it reveals about the author's style, as if recommending to a discerning reader who wants to know about the writing quality.",
        },
        resources: [
          'Recommendation structure displayed on board',
          'Timer',
          'Bookshelf map for classmates to note recommendations',
        ],
      },
      {
        title: 'Written Book Recommendation',
        duration: '22 minutes',
        instructions:
          'Students write a formal written book recommendation (approximately 150 words) for the school library display or the class reading journal. The written recommendation must include: a compelling opening sentence (hook), a brief description of the book without spoiling the plot, one thing that makes the book particularly good (characters, writing style, themes, or emotional impact), and a recommendation of who would enjoy it. Teacher models a written recommendation on the board, highlighting the techniques used: present tense for immediacy, second person address ("If you enjoy..."), specific rather than generic praise ("The scene where... is genuinely terrifying" rather than "It is really exciting"), and a strong closing sentence that makes the reader want to start immediately. Students draft independently, then swap with a partner for one-minute feedback.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for each of the four components.',
          core: 'Students write their recommendation independently using the modelled structure.',
          stretch:
            'Students write two versions of the recommendation - one for a peer audience (informal, enthusiastic) and one for a school newsletter (more formal, measured) - and compare the language choices in each.',
        },
        resources: [
          'Modelled written recommendation on board',
          'Writing frame (support)',
          'Word count guide',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reading Resolutions: What I Will Read Next',
      duration: '5 minutes',
      instructions:
        'Students look at all the titles they noted from classmates\' recommendations on their bookshelf map. They write three "Reading Resolutions" - specific books or authors they commit to trying over the summer or in Year 9. Students share one resolution with the class and briefly explain why. Teacher collects the class list (or photographs the board) and creates a "Year 8 Reading Recommendations" display. End with a brief reflection: "How has your reading changed since the start of Year 8? What kind of reader do you want to be in Year 9?"',
      differentiation: {
        support: 'Students write one resolution with a sentence explaining their choice.',
        core: 'Students write three resolutions with a sentence each.',
        stretch:
          'Students write a short paragraph reflecting on how their reading identity has developed across Year 8, naming specific books that influenced their thinking or writing.',
      },
    },
    homework:
      'Start one of your Reading Resolutions over the next fortnight. Read at least two chapters and write five sentences: what you think of it so far, whether it matches what the person who recommended it said, and one thing the author does well.',
    worksheetQuestions: [
      {
        question:
          'What is the purpose of a book recommendation? How is it different from a book review?',
        lines: 4,
        modelAnswer:
          'A book recommendation aims to persuade someone to read a specific book - it is written from a position of enthusiasm and focuses on what the reader will enjoy. A book review is a more balanced evaluation that considers both strengths and weaknesses, and is often written for an audience who may or may not have read the book. A recommendation is fundamentally persuasive; a review is more analytical.',
        marks: 3,
      },
      {
        question:
          'Write a "hook" sentence for a book you have read recently. Your hook should make the reader immediately curious about the book.',
        lines: 3,
        modelAnswer:
          'Example: "What would you do if the government forced you to choose between watching children fight to the death and becoming one of them - and the only form of resistance available was to refuse to play by the rules at all?"',
        marks: 2,
      },
      {
        question: 'Explain three things that make a spoken book recommendation effective.',
        lines: 5,
        modelAnswer:
          'Three things: (1) Genuine personal enthusiasm - listeners are persuaded by a speaker who clearly loved the book, not one reciting a summary. (2) Specific detail - naming a character, a scene, or a moment from the book is more compelling than vague praise. (3) Audience awareness - saying explicitly who the book is for ("if you enjoyed... you\'ll love this") helps the listener quickly decide whether it is for them.',
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is designed for the final weeks of Year 8 as a celebration of the year's reading - it is deliberately more relaxed and student-led.",
      'If possible, invite the school librarian to attend and contribute their own recommendation - this reinforces the library as a reading resource for Year 9.',
      'Display the class recommendations list prominently for the last few weeks of term and ensure copies are given to students to take into the summer.',
      'This lesson also provides informal speaking and listening assessment opportunities if needed.',
    ],
    targetedSkills: ['Reading for Pleasure', 'Oracy', 'Persuasive Writing', 'Reflection', '8SL.1'],
  },

  // ── Lesson y8ext-10: Transition to Year 9 Preparation ────────────────────
  {
    id: 'y8ext-10',
    title: 'Transition to Year 9 - Reflecting on Progress and Looking Forward',
    text: 'Year 8 Across the Curriculum',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Reflect on learning and progress across the full Year 8 English curriculum',
      'Identify personal strengths and areas for continued development in reading, writing, and speaking',
      'Understand what Year 9 English will involve and how Year 8 skills form the foundation',
      'Set specific, meaningful targets for Year 9 English learning',
    ],
    successCriteria: [
      'I can articulate at least two things I have learned or improved in English this year',
      'I can identify a specific area of reading, writing, or speaking I want to develop in Year 9',
      'I can write a self-assessment that is honest, specific, and supported by evidence from my work',
      'I can set one SMART target for the start of Year 9',
    ],
    keywords: [
      'reflection',
      'progress',
      'self-assessment',
      'target setting',
      'transition',
      'skills audit',
      'metacognition',
      'aspiration',
    ],
    starterActivity: {
      title: 'Year 8 Highlights: Three Images',
      duration: '8 minutes',
      instructions:
        'Students close their eyes for thirty seconds and try to picture three moments from their Year 8 English lessons - a text, a task, a discussion, or a piece of writing. They open their eyes and sketch or note their three moments quickly. Students share one moment with a partner: "What was it? Why did you remember it?" Teacher facilitates brief class sharing: "Can anyone tell me something they remember from Term 1? Term 2? Term 3?" Build a class timeline on the board of the Year 8 curriculum from memory. This serves both as a warm-up and as an informal audit of what stuck. Ask: "What does it tell us about our learning that we remember some things more vividly than others?"',
      differentiation: {
        support: 'Provide a brief list of unit titles and key texts from Year 8 to prompt memory.',
        core: 'Students recall their moments independently before using the board timeline for reference.',
        stretch:
          'Students reflect on why certain moments are memorable - was it the task, the text, the discussion, the challenge, or something personal to them? What does this reveal about how they learn best?',
      },
      resources: ['Board or display for class timeline', 'Unit titles list (support)'],
    },
    mainActivities: [
      {
        title: 'Skills Audit: Reading, Writing, Speaking and Listening',
        duration: '20 minutes',
        instructions:
          'Provide a Skills Audit sheet divided into three sections: Reading, Writing, and Speaking and Listening. Each section lists six skills with brief descriptions (e.g. "I can write an analytical paragraph with an embedded quotation and developed analysis" / "I can compare two texts and discuss similarities and differences"). For each skill, students rate themselves: Red (not yet confident), Amber (developing), Green (confident). Students complete the audit honestly - teacher circulates and asks students to evidence their self-ratings: "Can you show me a piece of work that demonstrates this?" After completion, students identify: their top three Green skills (what they are proud of), their top one Red or Amber skill (what to prioritise in Year 9), and the task from the year that challenged them most and why.',
        differentiation: {
          support:
            'Provide definitions or examples for any skills that are described in abstract terms, so students can make an informed rating.',
          core: 'Students complete the audit independently and locate one piece of work to evidence each Green rating.',
          stretch:
            'Students write a brief paragraph evaluating their own trajectory across the year - have they improved most in reading, writing, or speaking? What contributed to that improvement?',
        },
        resources: [
          'Skills Audit sheet (Year 8 English - Reading, Writing, Speaking)',
          "Students' exercise books and assessed work",
        ],
      },
      {
        title: 'Letter to My Year 9 Self',
        duration: '22 minutes',
        instructions:
          'Students write a letter to themselves to be read at the start of Year 9. The letter must include: (1) Something they are proud of from Year 8 English - be specific. (2) The most important thing they learned about how to read analytically. (3) The most important thing they learned about how to write analytically. (4) One habit or approach they want to keep in Year 9. (5) One target they are setting themselves for the year ahead. Teacher models the opening on the board: "Dear [name], By the time you read this, Year 8 will be behind you. Here is what you need to remember..." Students write for fifteen minutes. In the final five minutes, students re-read and underline one sentence they want to keep as their Year 9 motto - a phrase that captures what they most want to remember about their Year 8 learning.',
        differentiation: {
          support:
            'Provide a letter template with the five sections as headings and sentence starters for each.',
          core: 'Students write freely in letter form, covering all five elements.',
          stretch:
            'Students add a sixth element: advice for a student who is about to start Year 8 English - what do they wish they had known at the beginning?',
        },
        resources: [
          'Letter template (support)',
          'Modelled letter opening on board',
          'Envelopes (optional - letters can be sealed and returned at the start of Year 9)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Word, One Sentence, One Target',
      duration: '5 minutes',
      instructions:
        'To close the year, each student contributes three things: (1) One word that describes their Year 8 English experience. (2) One sentence that sums up the most important thing they will take into Year 9. (3) One target for the first half-term of Year 9. Teacher collects these (or displays them on mini-whiteboards for a photograph) and creates a class word cloud or display. Teacher closes with a forward-looking statement about Year 9 English - what texts they will study, what skills they will build on, and what the year ahead offers. Remind students that everything they have done in Year 8 is the foundation for everything that comes next.',
      differentiation: {
        support:
          'Students write their word and sentence in their books - verbal contribution optional.',
        core: 'Students contribute all three elements, either verbally or in writing.',
        stretch:
          'Students write a SMART target for Year 9: Specific, Measurable, Achievable, Relevant, Time-bound. They share it with their teacher before leaving.',
      },
    },
    homework:
      'Over the summer, read at least one book from your Reading Resolutions list. When you return to school in September, be prepared to recommend it to your new Year 9 English class in two minutes. Think about what the book made you feel, think, or question.',
    worksheetQuestions: [
      {
        question:
          'Write down three things you have learned or improved in English this year. Be as specific as possible.',
        lines: 6,
        modelAnswer:
          'Example responses: (1) I have learned how to embed quotations within sentences rather than dropping them in isolation, which makes my analytical writing flow more naturally. (2) I have improved my ability to make inferences - to go beyond what is directly stated and comment on what a writer implies or suggests. (3) I have developed a wider range of analytical vocabulary, including words like "subverts", "juxtaposes", and "reinforces", which allow me to express analytical ideas more precisely.',
        marks: 4,
      },
      {
        question: 'What is a SMART target? Write a SMART target for your Year 9 English learning.',
        lines: 6,
        modelAnswer:
          'A SMART target is Specific, Measurable, Achievable, Relevant, and Time-bound. Example: "By the end of the first half-term in Year 9, I will use a complex sentence with a subordinating conjunction in every analytical paragraph I write. I will highlight these sentences in my work and check that I have included one before I hand in any assessed piece."',
        marks: 4,
      },
      {
        question: 'What is "metacognition"? Why is it useful for a learner?',
        lines: 5,
        modelAnswer:
          'Metacognition means thinking about your own thinking and learning - being aware of how you learn, what strategies work for you, and where your understanding is secure or uncertain. It is useful because learners who understand their own strengths and weaknesses can direct their effort more efficiently, self-correct more effectively, and take greater ownership of their progress rather than relying entirely on the teacher to identify what they need to work on.',
        marks: 4,
      },
      {
        question:
          'Looking back over Year 8, which unit or text did you find most challenging? What specifically made it difficult, and what did you do to overcome it?',
        lines: 6,
        modelAnswer:
          'This is a reflective question with no single correct answer. A strong response will: name a specific unit or text, identify a precise aspect of challenge (e.g. "I found comparative writing difficult because I wasn\'t sure how to link two texts in one paragraph"), and describe a concrete strategy used to improve (e.g. "I practised using discourse markers and asked for a model paragraph to work from"). The response should show genuine self-awareness rather than generic statements.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson works best in the final two weeks of the Summer term - students need enough time in the year to have something meaningful to reflect on.',
      "The letters-to-self activity is particularly effective if you can return the letters at the start of Year 9 - coordinate with the students' Year 9 teacher if possible.",
      "The Skills Audit should be specific to your school's Year 8 programme of study - adapt the skills list to match the actual objectives taught across the year.",
      "This lesson also serves as an informal but meaningful transition document - noting student self-assessments helps Year 9 teachers understand incoming students' self-perceived strengths and needs.",
      'Allow the tone to be genuinely celebratory - students at this age rarely get the chance to look back and appreciate how much they have learned.',
    ],
    targetedSkills: [
      'Reflection',
      'Metacognition',
      'Self-Assessment',
      'Target Setting',
      'Transition to Year 9',
    ],
  },
]
