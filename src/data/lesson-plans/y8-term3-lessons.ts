import type { LessonPlan } from '../../types';

export const y8Term3Lessons: LessonPlan[] = [
  // ── Lesson 1: Introduction to Rhetoric -- Ethos, Pathos, Logos ───────────
  {
    id: 'y8t3-01',
    title: 'Introduction to Rhetoric -- Ethos, Pathos, Logos',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Define rhetoric and explain its origins in ancient Greece (8R.1)',
      'Identify and distinguish the three Aristotelian appeals: ethos, pathos, and logos',
      'Recognise these appeals in short modern persuasive texts and speeches',
      'Understand why speakers and writers choose different appeals for different audiences',
    ],
    successCriteria: [
      'I can define rhetoric and name its three classical appeals',
      'I can identify at least one example of ethos, pathos, and logos in a given text',
      'I can explain why a speaker might prioritise one appeal over another',
      'I can begin to evaluate which appeal is most effective and justify my view',
    ],
    keywords: [
      'rhetoric',
      'ethos',
      'pathos',
      'logos',
      'persuasion',
      'appeal',
      'audience',
      'credibility',
      'emotion',
      'evidence',
    ],
    starterActivity: {
      title: 'Which Would Convince You?',
      duration: '8 minutes',
      instructions:
        'Display three short statements on the board, each making the same argument (e.g. "You should donate to our charity") but using a different approach: Statement A quotes a celebrity endorsement, Statement B shares a story about a child who was helped, Statement C presents statistics about the scale of the problem. Students vote on a mini-whiteboard (A, B, or C) for whichever they find most convincing, then discuss their reasons with a partner. Teacher collects responses and reveals that these three statements represent the three classical appeals, introducing the terms ethos, pathos, and logos without definitions yet.',
      differentiation: {
        support:
          'Pair students with a talk partner and allow oral voting before writing. Provide a sentence frame: "I find statement ___ most convincing because it makes me feel / because it proves / because I trust..."',
        core: 'Students vote independently and give a one-sentence reason before the class discussion.',
        stretch:
          'Students predict what the three categories might be called and attempt to define the principle behind each before the teacher reveals the classical terms.',
      },
      resources: ['Three-statement slide on board', 'Mini-whiteboards and pens'],
    },
    mainActivities: [
      {
        title: 'Ethos, Pathos, Logos -- Direct Teaching and Sorting',
        duration: '20 minutes',
        instructions:
          'Teacher delivers a 10-minute input introducing Aristotle and the three appeals with clear definitions, visual icons, and two examples each from modern advertising, politics, and charity campaigns. Students receive a card-sort of 12 short quotations from real speeches and adverts; working in pairs they classify each quotation as primarily ethos, pathos, or logos, then add a brief reason in the third column of their table. Teacher reviews answers whole-class, emphasising that many texts blend all three appeals and that identifying the dominant one requires judgement. Conclude by asking: which appeal do you think is most powerful? Students record a one-sentence opinion.',
        differentiation: {
          support:
            'Provide a colour-coded reference mat with the definition and one clear example of each appeal. Allow students to match quotations to colour before writing a reason.',
          core: 'Students complete the card-sort and reasons table independently in pairs.',
          stretch:
            'Students identify texts that deliberately blend two or three appeals and explain the strategic reason for each combination.',
        },
        resources: [
          'Teacher input slides on Aristotle and three appeals',
          'Card-sort quotation strips (12 cards per pair)',
          'Ethos/Pathos/Logos reference mat',
          'Classification table worksheet',
        ],
      },
      {
        title: 'Appeals in Action -- Annotating a Short Speech Extract',
        duration: '22 minutes',
        instructions:
          'Students receive a 200-word extract from a well-known public speech (e.g. a charity appeal or a political call to action). Working independently, they annotate the text using three coloured pens or three annotation symbols, labelling every example of ethos, pathos, and logos they can find. They then choose the single most powerful moment in the extract and write a PEEL paragraph explaining how the speaker uses one appeal to influence the audience. Teacher circulates to prompt students to embed a short quotation and move from "this shows" to "this suggests." In the final 3 minutes students share their chosen quotation with the person next to them and justify their choice.',
        differentiation: {
          support:
            'Provide a partially annotated copy of the extract with three examples already labelled and a PEEL paragraph frame with sentence starters.',
          core: 'Students annotate independently and write a full PEEL paragraph using the model from earlier in the term.',
          stretch:
            'Students write a second paragraph comparing how the speaker balances all three appeals across the extract as a whole, evaluating which is dominant and why.',
        },
        resources: [
          'Speech extract handout (one per student)',
          'Three coloured pens or annotation stickers',
          'PEEL paragraph frame (for support)',
          'Model PEEL paragraph on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket -- Define, Identify, Evaluate',
      duration: '10 minutes',
      instructions:
        'Students complete a three-part exit ticket: (1) Define ethos, pathos, and logos in one phrase each. (2) Give one original example of each from real life (not from the lesson materials). (3) Rank the three appeals in order of persuasive power for a Year 8 audience and give one reason for their ranking. Teacher collects tickets to inform groupings for Lesson 2.',
      differentiation: {
        support: 'Allow students to use their reference mat for parts 1 and 2 but complete part 3 without support.',
        core: 'Students complete all three parts independently.',
        stretch: 'Students also consider whether the most powerful appeal might change depending on the audience and give a specific example.',
      },
    },
    homework:
      'Find a real advertisement, charity appeal, or political speech online or in a newspaper. Write 150 words identifying at least one example of each appeal and explaining which you think is most effectively used. Bring the source or a screenshot to Lesson 2.',
    worksheetQuestions: [
      {
        question: 'Define rhetoric in your own words and explain where the term originates.',
        lines: 4,
        modelAnswer:
          'Rhetoric is the art of using language persuasively to influence an audience. The term comes from ancient Greece, where Aristotle and other philosophers studied the techniques speakers use to win arguments and change minds. Rhetoric covers not just what is said but how it is said, including word choice, structure, and appeal.',
        marks: 3,
      },
      {
        question: 'Explain what ethos means as a rhetorical appeal and give one example from public life.',
        lines: 4,
        modelAnswer:
          'Ethos is an appeal to credibility and trustworthiness. The speaker establishes that they are qualified, experienced, or morally reliable, so the audience should trust their message. For example, a doctor appearing in a health campaign uses ethos because their medical qualification gives them authority on the subject.',
        marks: 3,
      },
      {
        question: 'How does pathos differ from logos? Use the word "evidence" in your answer.',
        lines: 5,
        modelAnswer:
          'Pathos appeals to the emotions of the audience, aiming to make them feel sympathy, fear, hope, or anger. Logos, by contrast, appeals to reason and logic by presenting facts, statistics, or structured evidence. A speaker using logos might cite scientific evidence to prove a point, while a speaker using pathos might share a personal story to make the audience feel the human cost of an issue.',
        marks: 4,
      },
      {
        question: 'Read this sentence: "As a parent of three young children, I urge you to support this campaign." Which rhetorical appeal is being used? Explain your answer.',
        lines: 4,
        modelAnswer:
          'This sentence primarily uses ethos. By identifying as a parent, the speaker establishes a personal connection to the issue and implies they have direct experience, making their appeal more credible. The phrase "as a parent" signals that the speaker is not speaking from abstract principle but from lived experience, which encourages the audience to trust them.',
        marks: 3,
      },
      {
        question: 'Why might a speaker choose to blend all three appeals rather than relying on just one?',
        lines: 5,
        modelAnswer:
          'Different audience members respond to different kinds of persuasion: some are moved by facts and logic, others by emotion, and others by the credibility of the speaker. By blending ethos, pathos, and logos, a speaker can appeal to a wider audience simultaneously. A speech that only used statistics might feel cold and unconvincing, while one that relied only on emotion might seem untrustworthy. Combining all three creates a more balanced and powerful argument.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Students often initially confuse pathos with "being emotional" in a negative sense. Emphasise that pathos is a legitimate and powerful rhetorical strategy, not a sign of weak argument.',
      'The card-sort works best if quotations are drawn from genuine sources students might recognise (charity adverts, political soundbites, sports speeches). Authenticity increases engagement.',
      'When marking PEEL paragraphs, look for three specific things: an embedded quotation (not a dropped-in full sentence), a description of the technique, and a comment on the effect on the audience rather than just the meaning.',
      'This lesson sets the analytical vocabulary for the entire term. Revisit the three terms at the start of every subsequent lesson as a quick warm-up to embed the terminology before applying it to new material.',
    ],
    targetedSkills: [
      '8R.1 - Reading for meaning and retrieval',
      '8R.3 - Understanding language and technique',
      '8R.7 - Developing personal reading responses',
      '8W.4 - Analytical writing with evidence',
      '8Sp.1 - Speaking to inform and explain',
    ],
  },

  // ── Lesson 2: Analysing Malala Yousafzai's UN Speech ────────────────────
  {
    id: 'y8t3-02',
    title: "Analysing Malala Yousafzai's UN Speech",
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      "Understand the context of Malala Yousafzai's 2013 UN speech and its significance (8R.2)",
      'Identify rhetorical techniques including the three appeals, repetition, and direct address',
      "Write a detailed analytical paragraph about Malala's use of rhetoric",
      'Evaluate how context shapes the persuasive choices a speaker makes',
    ],
    successCriteria: [
      "I can explain who Malala is, why she spoke at the UN, and why the speech matters",
      'I can identify at least four rhetorical techniques in the speech with supporting quotations',
      'I can write an analytical paragraph using PEEL with an embedded quotation',
      'I can explain how personal experience strengthens ethos in this speech',
    ],
    keywords: [
      'direct address',
      'repetition',
      'anaphora',
      'inclusive pronoun',
      'imperative',
      'ethos',
      'pathos',
      'logos',
      'context',
      'advocacy',
    ],
    starterActivity: {
      title: 'Two Minutes, Five Facts',
      duration: '8 minutes',
      instructions:
        "Students have 2 minutes to write down everything they already know about Malala Yousafzai. After time is called, the teacher takes a rapid round of one fact per student, building a class list on the board. Teacher then fills key gaps: the Taliban ban on girls' education in the Swat Valley, the assassination attempt in 2012, Malala's survival and subsequent international advocacy. Students note any new facts. Teacher frames the lesson question: \"How does Malala use her personal story as a rhetorical weapon in her UN speech?\"",
      differentiation: {
        support:
          'Provide a brief illustrated fact-file about Malala for students who have little prior knowledge, so they can contribute to the class list.',
        core: 'Students write their own facts and contribute to the class list.',
        stretch:
          'Students begin to consider how her personal experience would affect the credibility and emotional weight of her speech before listening to it.',
      },
      resources: ['Board or whiteboard for class list', 'Malala fact-file (for support students)', 'Speech extract handout'],
    },
    mainActivities: [
      {
        title: 'Listening and First Annotation',
        duration: '20 minutes',
        instructions:
          "Play the first 4 minutes of Malala's UN speech (or read aloud a 300-word extract if video is unavailable). Students follow on their printed extract, annotating any moment that strikes them as powerful with a simple asterisk (*). After the listening, students share their marked moments in pairs and begin to name the techniques using the vocabulary from Lesson 1. Teacher models annotating the opening paragraph on the board: identifying the direct address (\"honourable Secretary-General\"), the inclusive pronoun (\"our\"), the use of personal narrative as ethos, and the shift to pathos when she describes the attack. Students then annotate the remainder of the extract independently, aiming to label at least six moments.",
        differentiation: {
          support:
            "Provide an annotated glossary alongside the extract defining anaphora, imperative, and inclusive pronoun with examples from other texts so students can apply the labels to Malala's speech.",
          core: 'Students annotate independently after the modelled first paragraph.',
          stretch:
            'Students also note the structural choices: where does Malala place her most emotional material? Where does she use logos? How does she sequence the appeals for maximum effect?',
        },
        resources: [
          "Printed extract of Malala's UN speech (300 words)",
          'Video clip or teacher read-aloud',
          'Annotation glossary (for support)',
          'Coloured pens for annotation',
        ],
      },
      {
        title: 'Analytical Writing -- From Annotation to Paragraph',
        duration: '22 minutes',
        instructions:
          "Teacher models converting one annotation into a full PEEL paragraph on the board, thinking aloud at each stage: Point (which technique?), Evidence (exact embedded quotation), Explain (what does it mean/do?), Link (how does it serve Malala's purpose?). Students then independently write two analytical paragraphs: one on how Malala uses ethos, one on how she uses pathos. Remind them that each paragraph should reference a specific quotation. In the final 4 minutes students compare their evidence choices with a partner and discuss: did you choose the same quotation? Which is stronger and why?",
        differentiation: {
          support:
            'Provide a partially completed PEEL frame for the ethos paragraph with the quotation already embedded and the Point written, so students focus on Explain and Link.',
          core: 'Students write both paragraphs independently using the modelled example as a guide.',
          stretch:
            'Students write a third paragraph evaluating which appeal is most effective overall in the speech and explaining their judgement with reference to the audience and context.',
        },
        resources: [
          'Model PEEL paragraph displayed on board',
          'PEEL frame scaffold (for support)',
          'Speech extract handout (continued from activity 1)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Quotation Auction',
      duration: '10 minutes',
      instructions:
        'Display six quotations from the speech. Each student has a budget of 10 points to bid on the quotations they think are most analytically rich (i.e. most worth writing about). Students allocate their points across the six quotations, then explain their top choice to the class. Teacher uses responses to assess how well students can evaluate the analytical potential of evidence before discussing which quotations offer the most scope for analysis and why.',
      differentiation: {
        support: 'Provide a one-line hint for each quotation indicating which technique it contains.',
        core: 'Students allocate points and justify their top choice independently.',
        stretch: 'Students justify ALL their allocations, explaining why some quotations are worth fewer points than others.',
      },
    },
    homework:
      "Read the full text of Malala's UN speech (available freely online). Choose three quotations not used in today's lesson and write a bullet-point explanation (3-4 sentences each) of the technique used and its effect. Bring your annotated copy to Lesson 3.",
    worksheetQuestions: [
      {
        question: "Give two pieces of contextual information about Malala Yousafzai's life that are relevant to understanding the power of her UN speech.",
        lines: 4,
        modelAnswer:
          "Malala Yousafzai was a Pakistani schoolgirl who campaigned for girls' education under Taliban rule in the Swat Valley, which had banned girls from attending school. In 2012, she was shot by a Taliban gunman on her way home from school. Her survival and continued advocacy gave her international credibility as a speaker, making her personal experience a powerful source of ethos in her 2013 UN address.",
        marks: 4,
      },
      {
        question: 'What is anaphora? Find one example of anaphora in the speech extract and explain its effect.',
        lines: 5,
        modelAnswer:
          'Anaphora is the repetition of the same word or phrase at the beginning of successive clauses or sentences. In the speech, Malala repeats the phrase "We call upon..." at the start of multiple demands directed at world leaders. This repetition creates a rhythmic, cumulative force, making each demand feel equally urgent and driving home the range of change that she and her supporters are calling for.',
        marks: 4,
      },
      {
        question: "Explain how Malala uses her personal experience to strengthen her ethos in the speech.",
        lines: 5,
        modelAnswer:
          "Malala does not rely on titles or qualifications to establish credibility; instead, she uses her own survival story. By recounting what happened to her, she demonstrates that she speaks from direct experience of the injustice she is fighting against. This is a particularly powerful form of ethos because the audience cannot dismiss her as an outsider: she has lived the reality she is describing, which makes her authority personal and moral rather than merely professional.",
        marks: 4,
      },
      {
        question: 'How does Malala use inclusive pronouns such as "we" and "our" in the speech? What effect do they create?',
        lines: 4,
        modelAnswer:
          "By using \"we\" and \"our,\" Malala invites the audience to see themselves as part of the movement for education rights rather than as passive observers. The inclusive pronouns make the argument collective: the problem is not just Malala's, but humanity's. This rhetorical move also prevents the audience from distancing themselves from responsibility, encouraging them to feel personally invested in the cause.",
        marks: 3,
      },
      {
        question: "Write one analytical paragraph about Malala's use of pathos in her speech. Use the PEEL structure and embed a quotation.",
        lines: 8,
        modelAnswer:
          "Malala draws powerfully on pathos to create an emotional connection with her audience. When she describes the moment of the attack, she uses vivid and specific language that places the listener inside the experience, generating sympathy and shock. The use of emotive language such as \"fear\" and \"silence\" alongside the stark simplicity of her account forces the audience to confront the reality of living under violent oppression. This emotional appeal is highly effective because it transforms a distant political issue into an intimate human story, making it impossible for the listener to remain unmoved. The pathos here works in tandem with her ethos: her willingness to relive a traumatic event publicly demonstrates her courage and commitment, reinforcing trust in her as a speaker.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "If playing the speech video, ensure subtitles are available for students with hearing difficulties or for those who find Malala's accent initially unfamiliar. The printed extract should always accompany any audio or video.",
      'Handle the topic of the assassination attempt with care. Some students may find violent content distressing. You do not need to describe the attack in graphic detail; the contextual impact is sufficient.',
      'The "Quotation Auction" plenary is particularly effective because it forces meta-cognitive evaluation: students must think about WHY a quotation is analytically useful, not just WHAT it says. This is a key skill for exam writing.',
      "Malala's speech is a rich text for this unit because it contains all three appeals in a clearly identifiable sequence. Point this out explicitly: context (ethos) > personal narrative (pathos) > specific demands (logos). This structure is worth teaching as a model for student speeches in Lesson 5.",
    ],
    targetedSkills: [
      '8R.2 - Reading for context and purpose',
      '8R.3 - Understanding language and technique',
      '8R.4 - Analysing structure and form',
      '8W.4 - Analytical writing with evidence',
      '8Sp.3 - Listening and responding critically',
    ],
  },

  // ── Lesson 3: Greta Thunberg and Sheikha Moza -- Persuasion in Context ───
  {
    id: 'y8t3-03',
    title: 'Greta Thunberg and Sheikha Moza -- Persuasion in Context',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Compare the rhetorical strategies of two contemporary female speakers from different cultural contexts (8R.6)',
      'Understand how audience, purpose, and context shape persuasive choices',
      'Develop comparative analytical writing skills using connectives of comparison',
      "Reflect on how identity and positionality contribute to a speaker's rhetorical power",
    ],
    successCriteria: [
      'I can identify at least two similarities and two differences in the rhetorical strategies of the two speakers',
      'I can explain how the context of each speech shapes the language choices made',
      'I can write a comparative paragraph using connectives such as "similarly," "however," and "in contrast"',
      "I can consider how a speaker's identity (age, gender, nationality) affects audience reception",
    ],
    keywords: [
      'comparative',
      'context',
      'purpose',
      'audience',
      'tone',
      'register',
      'positionality',
      'juxtaposition',
      'contrast',
      'rhetorical question',
    ],
    starterActivity: {
      title: 'Spot the Speaker -- Context Clues',
      duration: '8 minutes',
      instructions:
        "Display two short speech extracts on the board (anonymised, no names). Students read both and, using only the language and content, try to answer: Who might be speaking? Where might this be? What is the topic? What tone does each speaker adopt? After 3 minutes of pair discussion, teacher takes brief responses. Reveal the speakers and discuss: how well did the language give away the context? This activity foregrounds the idea that speakers' identities and contexts are always readable in their language choices.",
      differentiation: {
        support: 'Provide a table with three columns (Speaker A / Speaker B / Evidence) to structure observations.',
        core: 'Students discuss freely in pairs then share orally.',
        stretch: 'Students also identify the specific language features that gave away the context before the reveal.',
      },
      resources: ['Two anonymised speech extracts on board', 'Observation table (for support)'],
    },
    mainActivities: [
      {
        title: 'Contextualising the Speakers',
        duration: '20 minutes',
        instructions:
          "Teacher delivers a brief contextual input on both speakers (8 minutes): Greta Thunberg -- teenage Swedish climate activist, speaking at the UN Climate Action Summit 2019, targeting world leaders who she holds responsible for inaction; Sheikha Moza bint Nasser -- Chairperson of Qatar Foundation, speaking at education and development conferences, a senior figure in a Gulf state with significant philanthropic reach. Students complete a Context Grid noting for each speaker: their identity, their platform, their audience, their topic, and the tone they are likely to adopt. Partners compare grids and discuss: in what ways does each speaker's context create both authority and challenge for them?",
        differentiation: {
          support: 'Provide a partially completed Context Grid with headings and some information already filled in.',
          core: 'Students complete the grid from the teacher input and their own prior knowledge.',
          stretch: 'Students add a row to their grid: "Challenges this speaker faces in being taken seriously" and explain how their rhetorical choices might respond to those challenges.',
        },
        resources: [
          'Teacher input slides on both speakers',
          'Context Grid worksheet',
          'Short biographies of both speakers (one paragraph each)',
        ],
      },
      {
        title: 'Comparative Analysis -- Reading and Writing',
        duration: '22 minutes',
        instructions:
          'Students receive a 200-word extract from each speaker. Working independently, they annotate both extracts (10 minutes), then write one comparative paragraph (12 minutes) that addresses the question: "How do Greta Thunberg and Sheikha Moza each use their personal identity to strengthen their argument?" The paragraph should include at least one quotation from each speaker, use at least one connective of comparison, and comment on the effect of a specific technique in each case. Teacher circulates, encouraging students to move from listing features to analysing effects.',
        differentiation: {
          support:
            "Provide a comparative paragraph frame: \"Both [Speaker A] and [Speaker B] use [technique]... However, [Speaker A] differs in that... This suggests that [Speaker A's] purpose is...\"",
          core: 'Students write independently with access to a connectives word bank.',
          stretch:
            'Students write a second paragraph evaluating which speaker they find more convincing overall, substantiating their judgement with reference to context, technique, and effect.',
        },
        resources: [
          'Printed extracts from both speeches',
          'Comparative connectives word bank',
          'Comparative paragraph frame (for support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Would It Work? -- Audience Swap',
      duration: '10 minutes',
      instructions:
        "Pose the question: 'If Greta Thunberg had delivered her speech to a different audience -- say, a business conference -- what would she need to change?' Students discuss in pairs for 3 minutes, then share responses. Teacher extends: 'What about Sheikha Moza speaking to a group of teenage activists?' This exercise consolidates understanding of how audience shapes rhetoric and prepares students for the persuasive writing unit (Lesson 5).",
      differentiation: {
        support: 'Provide three prompt questions: What tone would change? What evidence would change? What appeals would change?',
        core: 'Students discuss freely and contribute to the whole-class conversation.',
        stretch: 'Students draft three bullet points of specific changes each speaker would need to make and justify each one.',
      },
    },
    homework:
      'Research one other contemporary female public speaker from any country (not Malala, Greta, or Sheikha Moza). Write a 100-word profile explaining: who they are, what they speak about, and what rhetorical approach they typically use. Be prepared to introduce your chosen speaker to the class in Lesson 4.',
    worksheetQuestions: [
      {
        question: "Explain how the context of Greta Thunberg's UN speech in 2019 shapes the tone she adopts.",
        lines: 5,
        modelAnswer:
          'Greta Thunberg was speaking directly to world leaders at the UN Climate Action Summit, holding them accountable for decades of environmental inaction. This context leads her to adopt a tone that is accusatory and urgent rather than diplomatic or deferential. Because her audience holds political power, she uses confrontational rhetorical questions and blunt declarative statements to challenge them directly, a tone that would be inappropriate in many other settings but that suits the high stakes of the occasion.',
        marks: 4,
      },
      {
        question: 'What is positionality and why does it matter in rhetoric?',
        lines: 4,
        modelAnswer:
          "Positionality refers to the social and personal position a speaker occupies -- their age, gender, nationality, class, and experience -- and how that position shapes both what they say and how an audience receives them. In rhetoric, positionality matters because it influences credibility (ethos): a speaker's identity can either strengthen or weaken audience trust, and speakers often make deliberate choices about whether to highlight or downplay aspects of their identity.",
        marks: 3,
      },
      {
        question: 'Write a sentence comparing the use of direct address in the two speeches studied in this lesson.',
        lines: 3,
        modelAnswer:
          'Both Greta Thunberg and Sheikha Moza use direct address to create a sense of immediacy, though Thunberg employs it confrontationally ("How dare you!"), while Sheikha Moza uses it to build a sense of shared responsibility and collective purpose.',
        marks: 3,
      },
      {
        question: 'Explain what a rhetorical question is and give one example from either speech studied.',
        lines: 4,
        modelAnswer:
          "A rhetorical question is a question asked for effect rather than to receive an answer; the speaker already implies the answer and uses the question to engage the audience or challenge them to think. In Greta Thunberg's speech, \"How dare you?\" is a rhetorical question that expresses outrage and places moral responsibility on the audience rather than genuinely asking for a response.",
        marks: 3,
      },
      {
        question: 'Which speaker do you find more persuasive, and why? Use evidence from both speeches in your answer.',
        lines: 7,
        modelAnswer:
          "I find Greta Thunberg more persuasive because her speech creates a more immediate emotional impact through its confrontational tone and direct accusations. The repetition of \"How dare you\" is more immediately striking than the measured diplomacy often used in formal conference speeches. However, Sheikha Moza's use of statistical evidence and institutional authority gives her arguments a more durable credibility. Thunberg appeals powerfully to pathos, while Sheikha Moza balances ethos and logos more carefully. The most effective choice depends on the audience: Thunberg's approach suits an audience that already shares her values, while Sheikha Moza's approach may persuade those who respond better to measured authority.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'Sheikha Moza is less well known to most Year 8 students than Greta Thunberg. Invest time in the contextual input for her so that the comparison is genuinely informed rather than superficial.',
      'The discussion of positionality can be sensitive -- particularly around gender, ethnicity, and privilege. Frame it analytically: we are asking how identity functions rhetorically, not making judgements about whether a speaker deserves their platform.',
      'If any students are from Qatar or the Gulf region, they may have more contextual knowledge about Sheikha Moza. Invite this knowledge respectfully as a resource for the class.',
      "Greta Thunberg's \"How dare you\" speech is freely available online and the transcript is straightforward for Year 8 students to read. The emotional directness of her language makes it particularly accessible for analysis at this level.",
    ],
    targetedSkills: [
      '8R.2 - Reading for context and purpose',
      '8R.6 - Comparing texts',
      '8R.3 - Understanding language and technique',
      '8W.4 - Analytical writing with evidence',
      '8Sp.3 - Listening and responding critically',
    ],
  },

  // ── Lesson 4: Persuasive Language Techniques -- AFOREST and Beyond ────────
  {
    id: 'y8t3-04',
    title: 'Persuasive Language Techniques -- AFOREST and Beyond',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Identify and name the AFOREST techniques and three additional advanced techniques (8R.3)',
      'Analyse the effect of each technique on a specific audience',
      'Select and deploy appropriate techniques when planning persuasive writing',
      'Understand that the most effective persuasion combines multiple techniques purposefully',
    ],
    successCriteria: [
      'I can name all seven AFOREST techniques and explain what each one does',
      'I can identify at least five techniques in a persuasive text and explain their effects',
      'I can explain which techniques are most suited to a given audience and purpose',
      'I can create a technique bank to use in my own persuasive writing',
    ],
    keywords: [
      'anecdote',
      'fact',
      'opinion',
      'rhetorical question',
      'emotive language',
      'statistics',
      'rule of three',
      'hyperbole',
      'alliteration',
      'counter-argument',
    ],
    starterActivity: {
      title: 'AFOREST Recall Race',
      duration: '8 minutes',
      instructions:
        'Students have 90 seconds to write down as many persuasive techniques as they can remember from any previous learning. After time is called, teacher reveals the AFOREST acronym (Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplet/Rule of three) and students check how many they recalled. Class discusses any they missed. Teacher then reveals three "Beyond AFOREST" techniques that will be covered this lesson: hyperbole, alliteration, and counter-argument with refutation. Students add these to their glossary.',
      differentiation: {
        support: 'Provide the first letter of each AFOREST technique on the mini-whiteboard as a prompt.',
        core: 'Students recall freely and then check against the acronym.',
        stretch: 'Students write a definition and an example for each technique they recall before the reveal.',
      },
      resources: ['Mini-whiteboards and pens', 'AFOREST reveal slide', 'Student glossary booklets'],
    },
    mainActivities: [
      {
        title: 'Technique Deep-Dive -- Analysis Carousel',
        duration: '20 minutes',
        instructions:
          "Set up five stations around the room, each with a different persuasive text (charity leaflet, newspaper editorial, speech extract, advertisement, campaign poster). Each text is rich in specific persuasive techniques. Student groups of 3-4 rotate through the stations every 4 minutes; at each station they have a recording sheet where they identify techniques, copy a short quotation, and note the intended effect on the reader. After the carousel, the class reconvenes and each group contributes one finding per station. Teacher records examples on the board, building a shared technique bank that students copy into their glossary.",
        differentiation: {
          support: "Provide a spotter's guide card listing all ten techniques with definitions for students to use at each station.",
          core: 'Students use their AFOREST knowledge and the three new techniques to analyse each text.',
          stretch: 'Students rank the techniques used at each station in order of effectiveness for the specific audience of that text, giving a reason for their ranking.',
        },
        resources: [
          'Five persuasive texts (one per station)',
          'Recording sheet with table for quotations and effects',
          "Technique spotter's guide (for support)",
          'Timer visible to all groups',
        ],
      },
      {
        title: 'Building a Personal Technique Bank',
        duration: '22 minutes',
        instructions:
          'Each student creates a personal Technique Bank -- a one-page reference document they will use in Lesson 5 and the end-of-term assessment. The bank has three columns: Technique name, What it does, My best example (written by them). Teacher models completing the first two entries (Anecdote and Rhetorical question). Students complete all ten entries independently. When they finish, they add a "Personal Notes" section at the bottom where they identify the two techniques they feel most confident using and the two they find hardest to write themselves. Teacher uses this self-assessment to plan targeted support in Lesson 5.',
        differentiation: {
          support: 'Provide a pre-formatted Technique Bank template with the technique names already printed in column one.',
          core: 'Students create their bank from their notes and the class technique bank on the board.',
          stretch: 'Students add an eleventh entry of their own choice -- a technique not covered in the lesson -- and justify its inclusion with a definition and example.',
        },
        resources: [
          'Technique Bank template (for support)',
          'Blank A4 or exercise book page (for core and stretch)',
          'Class technique bank on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Technique Speed-Write',
      duration: '10 minutes',
      instructions:
        'Teacher announces a topic (e.g. "Schools should have longer lunch breaks"). Students have 6 minutes to write as many sentences as possible, each one deliberately using a different technique from their bank. They label each sentence with the technique used. In the final 3 minutes, students share their best sentence with the class and the class identifies the technique. This transitions directly into the speech-writing work of Lesson 5.',
      differentiation: {
        support: 'Allow students to use their Technique Bank and write a minimum of four labelled sentences.',
        core: 'Students aim for six labelled sentences covering at least five different techniques.',
        stretch: 'Students aim for eight sentences covering all ten techniques and then arrange them in the most persuasive sequence they can justify.',
      },
    },
    homework:
      'Choose a topic you feel strongly about. Write a 200-word persuasive paragraph using at least six different AFOREST or advanced techniques. Label each technique in the margin. This will form the basis of your speech planning in Lesson 5.',
    worksheetQuestions: [
      {
        question: 'What does the acronym AFOREST stand for?',
        lines: 4,
        modelAnswer:
          'AFOREST stands for: Anecdote (a short personal or illustrative story), Fact (a verifiable piece of information), Opinion (a personal view presented as though it has authority), Rhetorical question (a question asked for effect, not answer), Emotive language (words chosen to trigger an emotional response), Statistics (numerical data used as evidence), Triplet or Rule of Three (three words, phrases, or clauses in sequence for rhythm and emphasis).',
        marks: 4,
      },
      {
        question: 'Explain what a counter-argument with refutation is and give an example.',
        lines: 5,
        modelAnswer:
          'A counter-argument with refutation involves acknowledging the opposing view before dismissing or undermining it. This technique strengthens a persuasive piece by demonstrating that the writer has considered other perspectives and found them unconvincing. For example: "Some argue that school uniforms restrict self-expression. However, the evidence from countries with uniform policies consistently shows improved academic performance and reduced bullying -- benefits that far outweigh any loss of individual style."',
        marks: 4,
      },
      {
        question: "Find a sentence from any text in today's lesson that uses emotive language. Write it out and explain the effect of the emotive words.",
        lines: 5,
        modelAnswer:
          'The sentence "Thousands of innocent children are left to suffer in silence while the world turns its back" uses heavily emotive language. "Innocent" generates sympathy and implies the children are blameless victims. "Suffer in silence" combines a physical and emotional experience, making the reader feel the isolation of those affected. "Turns its back" is a metaphor that shifts moral responsibility onto the reader, generating guilt and urgency.',
        marks: 4,
      },
      {
        question: 'Why might a writer use hyperbole in a persuasive text? Give an example and explain the risk of overusing it.',
        lines: 5,
        modelAnswer:
          "Hyperbole is deliberate exaggeration used to emphasise a point and provoke a strong reaction. For example, \"This is the most important decision our generation will ever face\" uses hyperbole to convey urgency. However, overusing hyperbole makes writing seem exaggerated or untrustworthy: if every point is \"the most important\" or \"catastrophic,\" the reader stops believing the writer's claims. Effective persuasive writing uses hyperbole selectively, reserving it for the most significant moments.",
        marks: 4,
      },
      {
        question: 'Write three sentences on the topic "Social media has changed society forever," each using a different persuasive technique. Label the technique used in each sentence.',
        lines: 6,
        modelAnswer:
          '[Fact] Research by the Pew Institute found that 72% of adults use at least one social media platform daily. [Rhetorical question] If we cannot disconnect for even a single hour, what does that tell us about who is really in control? [Emotive language] Millions of young people lie awake at night, haunted by the relentless pressure to perform their lives for a digital audience that neither knows nor truly cares for them.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The carousel works best with genuinely varied texts. Include at least one text aimed at a young audience and one aimed at adults so students begin to see how technique selection varies with audience.',
      'Students frequently confuse "fact" and "opinion" in persuasive writing. Reinforce the distinction: a fact can be verified independently; an opinion is a belief, even when stated with great confidence. Persuasive writers often present opinions using the syntax of facts.',
      'The Technique Bank is a resource students should keep for the rest of the term. Encourage students to annotate it with their own examples from homework and from lessons, making it truly personal.',
      'The speed-write plenary is deliberately low-stakes and fun. The aim is fluency rather than polish. Reassure students that the quality of the technique matters more than the quality of the writing at this point.',
    ],
    targetedSkills: [
      '8R.3 - Understanding language and technique',
      '8W.2 - Writing to persuade and argue',
      '8W.3 - Organising writing effectively',
      '8W.5 - Vocabulary and language choices',
      '8Sp.1 - Speaking to inform and explain',
    ],
  },

  // ── Lesson 5: Writing a Persuasive Speech ────────────────────────────────
  {
    id: 'y8t3-05',
    title: 'Writing a Persuasive Speech',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Plan and draft a persuasive speech of 300-400 words on a chosen topic (8W.2)',
      'Apply rhetorical techniques from Lessons 1-4 deliberately and purposefully',
      'Structure a speech using an effective opening, developed argument, and memorable conclusion',
      "Peer-assess a partner's draft against a clear success criteria checklist",
    ],
    successCriteria: [
      'I can plan a speech with a clear argument, three supporting points, and a counter-argument',
      'I can use at least five different rhetorical techniques in my speech',
      'I can open with a device that immediately engages the audience',
      'I can give my partner specific, evidence-based feedback using the assessment checklist',
    ],
    keywords: [
      'thesis',
      'argument',
      'structure',
      'hook',
      'signposting',
      'counter-argument',
      'refutation',
      'conclusion',
      'drafting',
      'peer assessment',
    ],
    starterActivity: {
      title: 'Great Openings -- What Do They Have in Common?',
      duration: '8 minutes',
      instructions:
        "Display the opening 2-3 sentences of four famous speeches (e.g. opening lines from Malala's UN speech, a Churchill speech, a Martin Luther King address, and a student council speech). Students work in pairs to identify: what technique does each opening use? How does it immediately capture attention? Class shares observations. Teacher draws out the key principle: an effective speech opening uses a hook -- a rhetorical question, a shocking statistic, a bold statement, or an anecdote -- before stating the thesis. Students choose their own opening strategy before drafting begins.",
      differentiation: {
        support: 'Provide the names of the four opening techniques alongside each extract so students identify rather than generate.',
        core: 'Students identify techniques and explain effects in pairs before sharing.',
        stretch: 'Students rank the four openings in order of effectiveness for a Year 8 audience and justify their ranking.',
      },
      resources: ['Four speech opening extracts on slide', 'Mini-whiteboards for quick notes'],
    },
    mainActivities: [
      {
        title: 'Planning Frame -- Structure Before Draft',
        duration: '15 minutes',
        instructions:
          'Students complete a structured planning frame (8 minutes silent planning): Topic, Audience, My thesis (one sentence stating my position), Three main points (one sentence each), Counter-argument I will address, Technique I will use in my opening, Technique I will use in my conclusion. Teacher circulates to check that thesis statements are genuinely arguable (not just factual statements) and that plans include a counter-argument. After 8 minutes, students spend 2 minutes sharing their thesis with a partner who challenges it: "What would someone who disagreed with you say?" This sharpens the argument before drafting begins.',
        differentiation: {
          support: 'Provide a fully structured planning frame with sentence starters for each section: "I believe that... because..." and "Some people argue... however..."',
          core: 'Students complete the planning frame independently.',
          stretch: 'Students add a column to their plan noting which specific AFOREST technique they will use for each main point and why.',
        },
        resources: [
          'Planning frame handout',
          'Technique Bank from Lesson 4',
          'Speech structure model on board',
        ],
      },
      {
        title: 'Drafting and Peer Assessment',
        duration: '30 minutes',
        instructions:
          "Students draft their speech (20 minutes). Teacher encourages writing without stopping to correct: the aim is a complete first draft. During the draft, teacher circulates to prompt students who are stuck on openings or who are writing in a neutral, essay-like register rather than a spoken, audience-directed register. Remind students: speak to your audience, not at a page. After 20 minutes, students swap drafts with a partner and complete the peer assessment checklist (10 minutes): tick/cross/comment for each criterion (hook, thesis clear, three developed points, one counter-argument addressed, at least five techniques used, memorable conclusion, appropriate spoken register). Partners return drafts with verbal comments. Students spend the final 3 minutes annotating one improvement they will make in the next draft.",
        differentiation: {
          support: 'Provide a sentence-by-sentence writing scaffold: "I want to talk to you today about... You might be wondering... Let me tell you why..."',
          core: 'Students draft from their plan using their Technique Bank for reference.',
          stretch: 'Students also consider pace and pausing: mark their draft with P (pause) and U (emphasise this word) to begin thinking about delivery.',
        },
        resources: [
          'Peer assessment checklist',
          'Technique Bank from Lesson 4',
          'Speech writing scaffold (for support)',
          'Drafting paper or exercise books',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Spotlight Share',
      duration: '7 minutes',
      instructions:
        'Three volunteers (or teacher-selected students) read their opening paragraph aloud to the class. After each reading, the class identifies: what hook was used? Which technique was most effective? One specific improvement they would suggest. Teacher reinforces the key lesson: an excellent speech opening makes the audience want to keep listening. Students note one technique from a classmate\'s speech they wish to incorporate into their own next draft.',
      differentiation: {
        support: 'Ensure support students are not put on the spot; volunteers only for reading aloud. They can still contribute to the class feedback.',
        core: 'All students contribute to the peer feedback discussion.',
        stretch: 'Stretch students give specific, technique-referenced feedback rather than general comments.',
      },
    },
    homework:
      "Redraft your speech incorporating your partner's feedback and your own annotated improvement. Aim for 350-400 words. You will deliver a 90-second version of your speech in the following lesson. Practise at least twice at home -- stand up and speak it aloud, do not just read it silently.",
    worksheetQuestions: [
      {
        question: "What is a thesis statement in a persuasive speech? Write an example thesis statement on the topic of homework.",
        lines: 4,
        modelAnswer:
          "A thesis statement is a single clear sentence that states the speaker's position on the topic. It appears early in the speech and tells the audience exactly what the speaker intends to argue. Example: \"Regular homework is not a tool for learning but a source of unnecessary stress that undermines the very engagement with education it claims to support.\"",
        marks: 3,
      },
      {
        question: 'Explain why a counter-argument makes a speech more persuasive, not less.',
        lines: 4,
        modelAnswer:
          'Including a counter-argument shows the audience that the speaker has considered the opposing view fairly before rejecting it. This builds credibility (ethos) because the speaker appears reasonable and knowledgeable rather than one-sided. By then refuting the counter-argument, the speaker also removes a potential objection from the audience\'s mind, making the overall argument harder to dismiss.',
        marks: 3,
      },
      {
        question: 'Give three features that distinguish the register of a spoken speech from a written essay.',
        lines: 5,
        modelAnswer:
          'A spoken speech uses direct address ("you," "we") to engage the live audience, whereas an essay typically avoids second person. A speech uses shorter sentences and rhetorical questions to maintain oral rhythm and listener attention. A speech also uses repetition and the rule of three more heavily, because listeners cannot re-read; these devices make ideas more memorable on a single hearing.',
        marks: 3,
      },
      {
        question: 'Write an effective opening for a speech arguing that school should start at 9:30 am. Use one clearly identifiable rhetorical technique.',
        lines: 5,
        modelAnswer:
          '[Rhetorical question opening] What if the simplest change we could make to improve mental health, academic results, and wellbeing for every young person in this country cost absolutely nothing? The evidence is clear: teenagers who start school at 9:30 am perform better, feel better, and arrive ready to learn. The only question is why we are still making our children pay the price for an outdated system designed for the industrial age.',
        marks: 4,
      },
      {
        question: 'A student says: "I just say what I think. I don\'t need techniques." Explain why this view misunderstands how persuasion works.',
        lines: 5,
        modelAnswer:
          "Persuasion is not just about holding a strong view -- it is about communicating that view in a way the audience finds compelling. Without conscious technique, a speaker may fail to engage the audience emotionally, provide insufficient evidence to satisfy sceptics, or lose the listener's attention through a lack of rhythm and structure. Rhetorical techniques are not artificial additions to genuine feeling; they are the tools that make genuine feeling legible and convincing to other people.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'The most common failure mode in speech writing is students producing a formal essay with "Dear audience" added at the top. Circulate actively during the drafting phase and interrupt any student who is writing in a neutral, hedging register to prompt them to use first and second person and to speak directly to an imagined audience.',
      'Some students are reluctant to read aloud. Do not force this; instead, ensure that the peer assessment stage gives every student meaningful feedback regardless of whether they perform their speech. Delivery can be assessed more formally in a separate lesson.',
      'If time allows, a brief gallery walk of printed drafts with sticky-note feedback is a highly effective alternative to the paired peer assessment. Students gain more diverse feedback and the physical movement re-engages them after a sustained drafting session.',
      'The planning stage is non-negotiable. Students who skip straight to drafting almost always produce structurally weak speeches. Enforce the planning time firmly.',
    ],
    targetedSkills: [
      '8W.2 - Writing to persuade and argue',
      '8W.3 - Organising writing effectively',
      '8W.5 - Vocabulary and language choices',
      '8Sp.2 - Speaking to persuade and argue',
      '8Sp.4 - Peer feedback and self-assessment',
    ],
  },

  // ── Lesson 6: Introduction to Media Literacy ─────────────────────────────
  {
    id: 'y8t3-06',
    title: 'Introduction to Media Literacy',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Define media literacy and explain why it is a critical skill in the modern world (8R.1)',
      'Identify the key questions a media-literate reader asks of any text or image',
      'Analyse how choices of image, headline, and layout create meaning in media texts',
      'Begin to evaluate media sources for reliability, purpose, and potential bias',
    ],
    successCriteria: [
      'I can define media literacy and name at least four questions a critical media reader should ask',
      'I can analyse how a front page or advertisement uses visual and linguistic choices to create meaning',
      'I can distinguish between a primary and secondary source and explain why this matters',
      'I can begin to question the purpose and audience of a media text before accepting its message',
    ],
    keywords: [
      'media literacy',
      'source',
      'bias',
      'primary source',
      'secondary source',
      'representation',
      'framing',
      'audience',
      'purpose',
      'agenda',
    ],
    starterActivity: {
      title: 'Same Event, Different Covers',
      duration: '8 minutes',
      instructions:
        'Display two newspaper front pages covering the same news event but from papers with very different editorial positions. Students have 3 minutes to note: What is different about the headline? The image chosen? The language used? The amount of space given to different aspects? After discussion, teacher introduces the key question for the lesson: "How do media texts construct a version of reality rather than simply reflecting it?" Introduce the term "framing" -- the idea that every editorial choice shapes how an audience understands an event.',
      differentiation: {
        support: 'Provide an observation grid with the categories (headline, image, language, layout) pre-printed to guide comparison.',
        core: 'Students observe and note differences freely before sharing.',
        stretch: 'Students attempt to identify the likely editorial bias of each paper from the front-page choices alone, before any discussion.',
      },
      resources: ['Two contrasting front pages displayed on board or printed', 'Observation grid (for support)'],
    },
    mainActivities: [
      {
        title: 'The Five Key Questions -- A Framework for Critical Reading',
        duration: '20 minutes',
        instructions:
          'Teacher presents the Five Key Questions framework for media literacy: (1) Who created this? (2) What techniques are used to attract attention? (3) How might different people understand this message differently? (4) What values or points of view are represented -- or left out? (5) Why was this created? Students receive a printed media text (e.g. an advertisement or a news story). Working in pairs, they apply all five questions, writing a short answer to each. Teacher models answering question 1 and question 5 for the text, then students continue independently. Pairs share their most interesting finding with the class.',
        differentiation: {
          support: 'Provide sentence starters for each question: "This was created by... which means...", "The purpose of this text appears to be... because..."',
          core: 'Students apply all five questions independently in pairs.',
          stretch: 'Students add a sixth question of their own and justify why it is valuable for critical reading.',
        },
        resources: [
          'Five Key Questions framework on board',
          'Printed media text (one per pair)',
          'Question response worksheet',
          'Sentence starters (for support)',
        ],
      },
      {
        title: 'Image Analysis -- Reading the Visual',
        duration: '22 minutes',
        instructions:
          'Teacher explains that media literacy applies equally to images as to words. Introduce three key visual techniques: composition (what is in the foreground vs. background), colour and lighting (what mood is created), and camera angle (how the subject is positioned relative to the viewer). Students then receive two photographs of the same person or event taken from different perspectives or with different cropping. They write an analytical comparison (8-10 sentences) explaining how the visual choices in each photograph create a different impression of the subject. Emphasise that photographs are as constructed and purposeful as written texts.',
        differentiation: {
          support: 'Provide a table with the three visual techniques as headers and sentence starters for each analytical point.',
          core: 'Students write their comparison paragraph independently.',
          stretch: 'Students also consider how the captions beneath images (which they write themselves for each photograph) would further guide audience interpretation.',
        },
        resources: [
          'Two contrasting photographs of the same subject (printed or displayed)',
          'Visual techniques reference card',
          'Comparison table (for support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Media Literacy Pledge',
      duration: '10 minutes',
      instructions:
        "Students write a personal Media Literacy Pledge -- three specific habits they commit to practising when they encounter media in their daily lives (e.g. \"I will check who owns the publication before I trust a news story,\" \"I will look for the same story reported by at least two different sources\"). Students share one pledge in a class round-robin. Teacher closes by connecting media literacy to the term's broader theme: just as we have been learning to recognise persuasion in speeches, we must learn to recognise it in the media we consume every day.",
      differentiation: {
        support: 'Provide a menu of six possible pledge statements for students to choose and personalise from.',
        core: 'Students write three original pledges.',
        stretch: 'Students also write a brief explanation of why each pledge matters and what might happen if they ignored it.',
      },
    },
    homework:
      'For three days this week, keep a Media Diary: note one media text you encounter each day (social media post, news headline, advertisement, TV clip). For each entry, apply at least two of the Five Key Questions and record your findings. Bring your diary to Lesson 7.',
    worksheetQuestions: [
      {
        question: 'Define media literacy in your own words.',
        lines: 3,
        modelAnswer:
          'Media literacy is the ability to access, analyse, evaluate, and create media in a variety of forms. A media-literate person does not simply consume media passively; they question who created it, why, for whom, and what messages it encodes or omits. Media literacy is increasingly essential in a world where information -- and misinformation -- reaches audiences rapidly and without editorial gatekeeping.',
        marks: 3,
      },
      {
        question: 'What is "framing" in media, and how can the same event be framed differently by two different publications?',
        lines: 5,
        modelAnswer:
          'Framing refers to the way a media outlet presents an event by emphasising certain aspects and downplaying or omitting others. Two publications covering the same event might choose different photographs, use different emotional language in their headlines, foreground different voices, or structure the story to support a different conclusion. For example, a new government policy might be framed as "ambitious reform" by one paper and as "reckless change" by another, each framing shaping how readers interpret the same facts.',
        marks: 4,
      },
      {
        question: 'Explain the difference between a primary source and a secondary source. Give one example of each in a media context.',
        lines: 4,
        modelAnswer:
          'A primary source is an original, first-hand account or piece of evidence -- for example, a video recorded at the scene of an event, or a statement made directly by an individual involved. A secondary source interprets or reports on primary sources -- for example, a news article that summarises and comments on the video. Primary sources are generally considered more reliable, though they can still be selective or misleading depending on what is included or excluded.',
        marks: 3,
      },
      {
        question: 'Look at the two photographs studied in this lesson. Describe one way the composition of each photograph creates a different impression of the subject.',
        lines: 4,
        modelAnswer:
          'In photograph A, the subject is photographed from a low angle, making them appear larger and more powerful -- the camera looks up at them, giving them authority over the viewer. In photograph B, the same subject is photographed from a high angle, making them appear smaller and less significant -- the camera looks down at them, subtly diminishing their status. These compositional choices demonstrate that photographs always carry an editorial point of view.',
        marks: 4,
      },
      {
        question: 'Why is it important for citizens -- not just journalists -- to be media-literate?',
        lines: 5,
        modelAnswer:
          "In a democratic society, citizens make decisions -- about voting, about public issues, about their own lives -- partly on the basis of information they receive through the media. If citizens cannot evaluate that information critically, they are vulnerable to manipulation by media outlets, advertisers, politicians, and other actors with specific agendas. Media literacy is therefore a civic skill: it is what allows individuals to participate in public life as informed, independent thinkers rather than passive consumers of whoever's message reaches them first.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'Choose front pages from genuine UK national newspapers for the starter -- ideally from a story that both papers covered within the past few years. Students engage far more strongly with real examples than with fabricated ones.',
      'The image analysis activity requires careful curation. Avoid images that might be distressing or that touch on race, gender, or other sensitive characteristics in ways that could make students feel targeted. Sports photography or political rally photography works well.',
      'Some students come with sophisticated existing knowledge of media manipulation from social media. Welcome this knowledge as a resource and connect it explicitly to the academic vocabulary being introduced.',
      'The Media Diary homework is the foundation for Lesson 7. Remind students to bring it. If possible, allow students to photograph media examples on their phones rather than writing lengthy descriptions, as this increases engagement with the task.',
    ],
    targetedSkills: [
      '8R.1 - Reading for meaning and retrieval',
      '8R.2 - Reading for context and purpose',
      '8R.5 - Reading non-fiction and media texts',
      '8W.1 - Writing for purpose and audience',
      '8Sp.3 - Listening and responding critically',
    ],
  },

  // ── Lesson 7: Analysing Bias and Representation in News ──────────────────
  {
    id: 'y8t3-07',
    title: 'Analysing Bias and Representation in News',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Define bias and explain how it can appear in news reporting without deliberate dishonesty (8R.5)',
      'Identify specific language choices and structural decisions that reveal bias in news texts',
      'Analyse how different groups of people are represented in news coverage',
      'Develop an awareness of their own potential bias as readers and consumers of news',
    ],
    successCriteria: [
      'I can define bias and distinguish between intentional and unintentional bias',
      'I can identify at least three linguistic techniques through which bias is expressed in a news article',
      'I can analyse how a specific group is represented in two contrasting news reports',
      'I can reflect on my own reading habits and consider how they might shape my understanding of events',
    ],
    keywords: [
      'bias',
      'representation',
      'editorial',
      'loaded language',
      'selection',
      'omission',
      'stereotype',
      'neutral language',
      'connotation',
      'perspective',
    ],
    starterActivity: {
      title: 'Media Diary Share',
      duration: '10 minutes',
      instructions:
        'Students share one finding from their Media Diary homework (from Lesson 6). In groups of four, each student briefly presents their most interesting example -- what the text was, which two Key Questions they applied, and what they found. Groups then select the most compelling example from their four to share with the class. Teacher uses the examples to identify recurring patterns: which sources did students consult most? Did they notice any bias? This warm-up activates prior learning and introduces the lesson focus.',
      differentiation: {
        support: "Students who did not complete the diary can participate by listening and contributing an observation about a classmate's example.",
        core: 'Students share and discuss their diary entries as described.',
        stretch: "Students in the stretch group compare their three diary entries and identify any pattern in the sources they consulted -- what does this reveal about their own media diet?",
      },
      resources: ['Student Media Diaries from homework', 'Board to note class patterns'],
    },
    mainActivities: [
      {
        title: 'Decoding Bias -- Language Under the Microscope',
        duration: '20 minutes',
        instructions:
          'Teacher delivers a 10-minute input on five key ways bias appears in news language: (1) Loaded language -- choosing words with strong connotations rather than neutral equivalents (e.g. "claimed" vs "said"); (2) Selection -- which facts are included; (3) Omission -- which facts are left out; (4) Source selection -- whose voice is quoted; (5) Placement -- where in the article key information appears. Students then receive a news article. Working in pairs, they complete a Bias Audit: for each of the five categories, they find one example and note whether it seems biased in a particular direction and why.',
        differentiation: {
          support: 'Provide a side-by-side comparison of five loaded words and their neutral equivalents (e.g. "protesters" vs "rioters") to help students identify loaded language in the article.',
          core: 'Students conduct the Bias Audit independently after the modelled input.',
          stretch: 'Students also identify who is not quoted in the article and explain what perspectives are therefore missing.',
        },
        resources: [
          'Teacher input slides on five types of bias',
          'News article for Bias Audit (one per pair)',
          'Bias Audit worksheet',
          'Loaded language comparison card (for support)',
        ],
      },
      {
        title: 'Representation Comparison -- Who Gets a Voice?',
        duration: '20 minutes',
        instructions:
          'Students receive two short news reports covering the same story (ideally from publications with different editorial positions). The focus is representation: How is the main group or individual in the story described in each article? What language is used? Whose voices are quoted? What images (if any) are used? Students write a comparative analytical paragraph (minimum 8 sentences) answering the question: "How do these two articles represent the group or individual differently, and what effect does this have on the reader?" Teacher circulates to ensure students are using specific textual evidence and are moving from observation to analysis.',
        differentiation: {
          support: 'Provide a comparative frame: "In Article A, the group is represented as... because the writer uses the word \'...\' which suggests... In Article B, however..."',
          core: 'Students write independently using their Bias Audit vocabulary.',
          stretch: 'Students evaluate which article they consider more responsible journalism and justify their view with reference to the principles of balanced reporting.',
        },
        resources: [
          'Two contrasting news articles on the same story',
          'Comparative paragraph frame (for support)',
          'Bias Audit vocabulary from activity 1',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Balanced Headline Challenge',
      duration: '10 minutes',
      instructions:
        "Display the headline from one of today's articles. Students have 4 minutes to rewrite the headline in the most neutral language possible, then write a second headline that is biased in the opposite direction from the original. They share both versions with the class. This exercise demonstrates that writing about events is never value-free: even the attempt at neutrality involves choices. Teacher closes: \"Bias is not always dishonest. It is sometimes the inevitable result of being a human being with a perspective. Media literacy is not about finding unbiased media -- it is about knowing that all media has a perspective and reading accordingly.\"",
      differentiation: {
        support: 'Allow students to work in pairs for the rewriting task.',
        core: 'Students write both headlines independently.',
        stretch: 'Students write three versions: biased left, biased right, and as neutral as possible, then explain what they had to change for each version.',
      },
    },
    homework:
      'Find a news story covered by both a tabloid newspaper and a broadsheet. Print or note down the headline, first paragraph, and one image caption from each. Write 150 words comparing how the two sources represent the story differently. Focus on specific word choices.',
    worksheetQuestions: [
      {
        question: 'Define bias in the context of news reporting and explain why it is not always deliberate.',
        lines: 4,
        modelAnswer:
          'In news reporting, bias refers to a tendency to present information in a way that favours a particular perspective, person, or group. Bias is not always deliberate: journalists bring their own cultural background, assumptions, and editorial guidelines to every story they cover, and these inevitably shape their word choices, which sources they contact, and which facts they prioritise. A journalist can produce biased reporting without any intention to mislead, simply by making choices that reflect their own unconscious assumptions.',
        marks: 3,
      },
      {
        question: "Explain what \"loaded language\" is and give one example from today's lesson.",
        lines: 4,
        modelAnswer:
          'Loaded language refers to words that carry strong positive or negative connotations beyond their literal meaning. For example, describing a protest group as "activists" has different connotations from describing the same group as "agitators" or "troublemakers." The neutral term might be "protesters," but a writer choosing a loaded word guides the reader towards a specific emotional response before any evidence is presented.',
        marks: 3,
      },
      {
        question: 'What is "selection and omission" in news reporting, and why does it matter?',
        lines: 5,
        modelAnswer:
          'Selection refers to which facts, voices, and details a journalist chooses to include in a story. Omission refers to what is left out. Because no article can include every piece of information, selection and omission are inevitable -- but they are also one of the most powerful forms of bias. By excluding certain voices (e.g. the perspective of those affected by a policy) or by omitting context that would change the meaning of a statistic, a journalist can produce a technically accurate story that nonetheless gives readers a misleading picture.',
        marks: 4,
      },
      {
        question: 'How can the placement of information within a news article express bias?',
        lines: 4,
        modelAnswer:
          'Readers pay most attention to the beginning and, to a lesser extent, the end of a news article. Information buried in the final paragraphs is less likely to be read and less likely to affect the reader\'s overall impression. A journalist can therefore express bias by placing information that supports their preferred interpretation high in the article, while relegating counter-evidence or alternative perspectives to the bottom. This is a form of structural bias that operates independently of word choice.',
        marks: 3,
      },
      {
        question: 'A student says: "I only read news from one source because I trust it completely." What advice would you give them, and why?',
        lines: 5,
        modelAnswer:
          'I would advise them to consult at least two or three sources covering the same stories. Every news source -- even one with high journalistic standards -- has an editorial perspective shaped by ownership, audience, and institutional culture. Consuming news from only one source means accepting that perspective uncritically. Comparing multiple sources does not mean distrusting them all; it means developing a more complete picture of events by noticing what each source emphasises, downplays, or omits. This is the core practice of media literacy.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Select news articles carefully to avoid topics that might be personally sensitive for students in the class (e.g. stories about immigration, religion, or specific ethnic communities, depending on your school context). Sports reporting or business news can provide excellent examples of bias with lower personal stakes.',
      'Students often initially believe that bias means "lying." Reinforce throughout the lesson that bias is a matter of selection, emphasis, and framing rather than outright falsehood. This distinction is crucial for media literacy.',
      'The Media Diary homework from Lesson 6 feeds directly into this lesson. If many students have not completed it, adjust the starter to a group discussion about media sources students use rather than a diary share.',
      'If students have mobile devices available, they can look up the same news story in real time on two different news websites during the comparison activity, which is more engaging than working from printed extracts.',
    ],
    targetedSkills: [
      '8R.5 - Reading non-fiction and media texts',
      '8R.6 - Comparing texts',
      '8R.2 - Reading for context and purpose',
      '8W.4 - Analytical writing with evidence',
      '8Sp.3 - Listening and responding critically',
    ],
  },

  // ── Lesson 8: Fake News and Misinformation ───────────────────────────────
  {
    id: 'y8t3-08',
    title: 'Fake News and Misinformation',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Distinguish between fake news, misinformation, disinformation, and satire (8R.5)',
      'Identify red-flag features that indicate a source may be unreliable',
      'Apply a fact-checking process to evaluate the credibility of a piece of information',
      'Understand the real-world consequences of misinformation and why critical reading matters',
    ],
    successCriteria: [
      'I can define and distinguish between the four types of false or misleading information',
      'I can name at least five red flags that suggest a source may be untrustworthy',
      'I can apply a three-step fact-checking process to a given claim',
      'I can explain the real-world harm that misinformation can cause',
    ],
    keywords: [
      'misinformation',
      'disinformation',
      'fake news',
      'satire',
      'credibility',
      'verification',
      'fact-checking',
      'algorithm',
      'echo chamber',
      'source',
    ],
    starterActivity: {
      title: 'Real or Fake? -- Ten Claims',
      duration: '8 minutes',
      instructions:
        'Display ten claims on the board -- a mix of true facts, obvious falsehoods, plausible-sounding misinformation, and satirical headlines. Students vote True / False / Unsure for each claim using their mini-whiteboards. After all ten, reveal the answers. Teacher leads a brief discussion: which false claims were most convincing? Why? What made the true claims seem reliable? This activity establishes the emotional reality of how hard it is to distinguish true from false information and generates buy-in for the lesson.',
      differentiation: {
        support: 'Allow pairs to discuss before voting so no student feels embarrassed by wrong answers.',
        core: 'Students vote individually and then discuss in pairs.',
        stretch: 'Students also note, for each claim, what feature made them believe or doubt it.',
      },
      resources: ['Ten claims displayed on board (prepare in advance)', 'Mini-whiteboards and pens'],
    },
    mainActivities: [
      {
        title: 'Mapping the Landscape -- Four Types of False Information',
        duration: '20 minutes',
        instructions:
          'Teacher introduces the key distinctions (10 minutes): Misinformation -- false information shared without intent to deceive (e.g. a well-meaning person sharing a health myth); Disinformation -- false information deliberately created and spread to manipulate (e.g. state-sponsored propaganda); Fake news -- a term with two meanings: genuine fabricated news stories, and a political label applied to real reporting someone dislikes; Satire -- deliberate fiction that comments on real events, intended to be understood as fictional (e.g. satirical news websites). Students complete a Four-Type Sorting task: they receive eight short examples and must classify each into the correct category with a brief reason. Teacher reviews answers, emphasising that satire is not harmful when its fictional nature is clear, but becomes harmful when shared out of context.',
        differentiation: {
          support: 'Provide definition cards for each of the four types alongside the sorting task.',
          core: 'Students complete the sorting task independently.',
          stretch: 'Students identify one real-world example of each type from their own media experience and explain why it fits the category.',
        },
        resources: [
          'Teacher input slides on four types of false information',
          'Eight example sorting cards per student or pair',
          'Definition cards (for support)',
        ],
      },
      {
        title: 'Fact-Checking in Practice -- The SIFT Method',
        duration: '22 minutes',
        instructions:
          "Teacher introduces the SIFT fact-checking method (10 minutes): Stop -- pause before sharing; Investigate the source -- who created this?; Find better coverage -- does a reliable source report the same thing?; Trace claims to their original context -- has the information been taken out of context? Students apply SIFT to two claims from the starter activity that were difficult to evaluate (8 minutes): they record each SIFT step and reach a conclusion about the claim's credibility. In the final 4 minutes, groups share their findings. Teacher emphasises: fact-checking does not mean knowing all the answers; it means developing the habits that lead to better-informed decisions.",
        differentiation: {
          support: 'Provide a SIFT template with the four steps printed as headers and prompts ("To investigate the source I would look for...") for each step.',
          core: 'Students apply SIFT to both claims using the method from the input.',
          stretch: 'Students also identify what kind of source (database, academic, government, news archive) would be most appropriate for verifying each type of claim and why.',
        },
        resources: [
          'SIFT method reference card',
          'Two claims for fact-checking (printed)',
          'SIFT template (for support)',
          'Access to internet or printed reliable source extracts',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Consequences -- A Brief Case Study',
      duration: '10 minutes',
      instructions:
        'Teacher briefly presents one documented case study of real-world harm caused by misinformation (e.g. a health misinformation campaign that led to declining vaccination rates, or a false rumour that caused public panic). Students discuss in pairs: who was harmed? How could media literacy have broken the chain? What responsibility do social media platforms and individual users share? Class shares key points. Teacher closes: the skills of this unit are not abstract -- they are essential tools for safe participation in modern public life.',
      differentiation: {
        support: 'Provide three discussion prompt questions to guide the pair discussion.',
        core: 'Students discuss freely and contribute to the class conversation.',
        stretch: "Students consider the ethical responsibility of algorithm design: if a platform's algorithm amplifies false information because it generates more engagement, who is morally responsible?",
      },
    },
    homework:
      'Find one example of misinformation or disinformation that has circulated online (research this safely using a reliable fact-checking website such as Full Fact or Snopes). Write 150 words explaining: what the false claim was, why it spread, and what harm it caused or could have caused. Identify which of the four categories it belongs to.',
    worksheetQuestions: [
      {
        question: 'Explain the difference between misinformation and disinformation. Why does the distinction matter?',
        lines: 5,
        modelAnswer:
          'Misinformation is false information that is shared without the intent to deceive: the person sharing it genuinely believes it to be true. Disinformation is false information that is deliberately created and spread with the intention of manipulating an audience. The distinction matters because it affects how we respond: misinformation requires education and correction, while disinformation requires a stronger response that considers the motivations and resources of those deliberately spreading it.',
        marks: 4,
      },
      {
        question: 'What is satire, and when does satire become harmful?',
        lines: 4,
        modelAnswer:
          'Satire is a form of creative writing or media that uses humour, exaggeration, and irony to comment critically on real events or public figures. It is intended to be understood as fictional and is a long-standing form of political commentary. Satire becomes harmful when it is shared without its fictional context: if a satirical headline is shared on social media stripped of the signals that identify it as satire, readers may accept it as factual reporting, spreading misinformation unintentionally.',
        marks: 3,
      },
      {
        question: 'List five red-flag features that suggest a piece of online information may be unreliable.',
        lines: 5,
        modelAnswer:
          'Five red flags are: (1) no named author or an unfamiliar publication with no "About" page; (2) a sensational or emotionally charged headline designed to provoke sharing before reading; (3) no links to sources or original research; (4) a URL or website name designed to mimic a well-known reliable source; (5) the claim cannot be found on any established news outlet or fact-checking website. Additional red flags include very recent publication date with extraordinary claims, and poor spelling or unprofessional layout.',
        marks: 5,
      },
      {
        question: 'What is an "echo chamber" in the context of online media consumption? How does algorithmic content affect this?',
        lines: 5,
        modelAnswer:
          'An echo chamber is an environment in which a person only encounters information and opinions that confirm their existing beliefs, because they only follow, share, and engage with like-minded sources. Social media algorithms amplify echo chambers by showing users content similar to what they have previously engaged with, which maximises time on the platform but reduces exposure to diverse or challenging perspectives. The result is that individuals can become increasingly convinced that their view of the world is widely shared and factually supported, making them more vulnerable to misinformation that reinforces their existing beliefs.',
        marks: 4,
      },
      {
        question: 'Why is it not enough to say "I would never believe fake news"? What does responsible media consumption actually require?',
        lines: 5,
        modelAnswer:
          'Believing you are immune to misinformation is itself a form of vulnerability: overconfidence leads people to skip the verification steps that critical reading requires. Research in cognitive science shows that even highly educated people can be misled by false information, particularly when it confirms their existing beliefs or is shared by someone they trust. Responsible media consumption requires active habits -- pausing before sharing, checking sources, finding multiple independent reports -- not simply the belief that one has good judgement.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The ten claims for the starter should be prepared carefully: include some that are surprising-but-true and some that are plausible-but-false, as these generate the most useful discussion. Avoid claims that touch on politically charged current events where students may have strong personal views.',
      'The SIFT method (Stop, Investigate, Find, Trace) was developed by media literacy educator Mike Caulfield and is widely used in secondary education. If students find the acronym helpful, consider displaying it as a permanent classroom poster for the rest of the term.',
      'The case study in the plenary should be chosen with care. Health misinformation (e.g. anti-vaccination myths) is generally safe ground for this age group and has well-documented real-world consequences. Avoid case studies involving recent traumatic events.',
      'Some students will already use fact-checking websites. Celebrate this knowledge and build on it. Others may be unaware that dedicated fact-checking organisations exist: introduce Full Fact (UK), Snopes (US), and the Reuters Fact Check service as reliable starting points.',
    ],
    targetedSkills: [
      '8R.5 - Reading non-fiction and media texts',
      '8R.1 - Reading for meaning and retrieval',
      '8R.2 - Reading for context and purpose',
      '8W.1 - Writing for purpose and audience',
      '8Sp.3 - Listening and responding critically',
    ],
  },

  // ── Lesson 9: Writing for Different Media Formats ────────────────────────
  {
    id: 'y8t3-09',
    title: 'Writing for Different Media Formats',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand how purpose, audience, and format determine the register and structure of media writing (8W.1)',
      'Adapt the same information for three different media formats: news article, social media post, and editorial',
      'Apply vocabulary of media formats including lede, inverted pyramid, byline, hashtag, and opinion piece',
      'Evaluate which format is most effective for a given communicative purpose',
    ],
    successCriteria: [
      'I can explain how a news article, a social media post, and an editorial differ in purpose, audience, and register',
      'I can write a 100-word news article using the inverted pyramid structure',
      'I can write a social media post that is concise, engaging, and appropriate in tone',
      'I can write a short editorial paragraph that combines fact with clear personal opinion',
    ],
    keywords: [
      'lede',
      'inverted pyramid',
      'byline',
      'editorial',
      'opinion piece',
      'register',
      'format',
      'caption',
      'headline',
      'engagement',
    ],
    starterActivity: {
      title: 'Same Story, Three Ways',
      duration: '8 minutes',
      instructions:
        'Display three versions of the same piece of news: a formal news article excerpt, a tweet about the story, and an editorial opinion on the story. Students read all three and answer: What is different about the language? The length? The person (first, second, third)? The purpose? Teacher takes brief responses and introduces the lesson challenge: "By the end of today, you will be able to write all three of these formats about any given event." The lesson frames format-switching as a professional writing skill with real-world relevance.',
      differentiation: {
        support: 'Provide a simple table with three columns (News article / Social media / Editorial) and three rows (Purpose / Audience / Register) for students to complete as they read.',
        core: 'Students discuss the differences in pairs and share observations.',
        stretch: 'Students also identify which of the three formats they consider most influential and why.',
      },
      resources: ['Three-format comparison displayed on board', 'Comparison table (for support)'],
    },
    mainActivities: [
      {
        title: 'Format by Format -- Direct Teaching and Modelled Writing',
        duration: '22 minutes',
        instructions:
          'Teacher presents each of the three formats in turn (12 minutes): News article -- the inverted pyramid structure (most important information first), third person, neutral register, the five Ws (Who, What, When, Where, Why) in the lede; Social media post -- strict character limits create pressure for word economy, informal register acceptable, hashtags and direct address increase engagement, emotional hook in first three words; Editorial/Opinion piece -- first person permitted, argument-led, combines factual evidence with clear personal position. After each format, teacher briefly models writing one example using a provided news event (e.g. "Local school wins national science competition"). Students write alongside the model. After all three are modelled, students check their three modelled attempts and identify one strength and one improvement for each.',
        differentiation: {
          support: 'Provide a format template for each of the three types with structural prompts.',
          core: 'Students write alongside the teacher model for each format.',
          stretch: 'Students attempt their modelled pieces before seeing the teacher version and then compare, identifying differences in approach.',
        },
        resources: [
          'Teacher input slides on three formats',
          'News event prompt for modelled writing',
          'Three format templates (for support)',
          'Examples of each format displayed on board',
        ],
      },
      {
        title: 'Independent Practice -- One Story, Three Formats',
        duration: '22 minutes',
        instructions:
          'Students receive a brief factual news prompt (4-5 bullet points of key information about a fictitious or real event). Working independently, they write all three formats from this single set of facts: (1) A 100-word news article using inverted pyramid structure; (2) A social media post of no more than 50 words; (3) An editorial paragraph of 80-100 words expressing a personal opinion on the event. Teacher circulates to ensure appropriate register shifts across the three formats and to challenge students who are writing all three in the same neutral style. In the final 3 minutes, students share their social media post with the person next to them.',
        differentiation: {
          support: 'Provide the news article and social media post formats as partially completed templates, asking students to write only the editorial independently.',
          core: 'Students write all three independently from the bullet-point prompt.',
          stretch: 'Students write a fourth format: a letter to the editor responding to the editorial they have just written, taking an opposing view.',
        },
        resources: [
          'News event bullet-point prompt (one per student)',
          'Three format templates (for support)',
          'Word count guide for each format displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Format Fitness Test',
      duration: '8 minutes',
      instructions:
        'Teacher reads aloud three short pieces of student writing (with permission) without naming the intended format. The class votes on which format each piece belongs to and whether it successfully achieves the register of that format. For each piece, the class identifies one specific feature that reveals the format and one feature that could be improved. This closes the lesson with a focus on evaluative vocabulary (register, purpose, audience) that students will need in the assessment.',
      differentiation: {
        support: 'Provide the three format names on a card so students can point to their answer rather than having to recall the vocabulary.',
        core: 'Students vote and give oral reasons.',
        stretch: 'Students write a one-sentence improvement note for each piece before the class discussion.',
      },
    },
    homework:
      'Choose a real news event from this week. Write all three formats (news article 100 words, social media post 50 words, editorial 80 words) about it. Bring all three to Lesson 10 as possible material for your assessment preparation.',
    worksheetQuestions: [
      {
        question: 'What is the "inverted pyramid" structure in news writing? Why is it used?',
        lines: 4,
        modelAnswer:
          'The inverted pyramid is a structure in which the most important information (the who, what, when, where, and why) is presented in the first paragraph (the lede), with subsequent paragraphs providing progressively more detail and background. It is used because readers often do not read to the end of an article: the inverted pyramid ensures they receive the essential information first. It also makes it easy for sub-editors to cut an article from the bottom without losing the key story.',
        marks: 3,
      },
      {
        question: 'Explain what a "lede" is and write an example lede for the following event: a local school wins a national robotics competition.',
        lines: 5,
        modelAnswer:
          'A lede is the opening sentence or paragraph of a news article, which summarises the most important facts of the story, typically answering the five Ws (Who, What, When, Where, Why). Example: Students at Greenfield Academy in Manchester claimed the national title at the UK Schools Robotics Championship on Friday, beating 47 competing schools with their self-navigating delivery robot -- the first time a state school has won the competition in its twelve-year history.',
        marks: 4,
      },
      {
        question: 'List three differences in register between a news article and a social media post.',
        lines: 4,
        modelAnswer:
          'A news article uses formal, third-person, neutral language, while a social media post may use informal language, first or second person, and conversational phrasing. A news article uses complete sentences and paragraphs, while a social media post uses short phrases and may omit articles and full punctuation for impact. A news article avoids direct calls to action, while a social media post often ends with an instruction to share, comment, or click a link.',
        marks: 3,
      },
      {
        question: 'What is an editorial, and how does it differ from a news report?',
        lines: 4,
        modelAnswer:
          'An editorial (also called an opinion piece) is a piece of journalism in which a writer or the publication itself expresses a personal opinion or argument about a news topic. Unlike a news report, which aims to present facts neutrally and quotes multiple voices, an editorial uses first-person voice, makes an explicit argument, and often calls for a specific response or change. An editorial is still expected to base its argument on verifiable facts, but its purpose is to persuade rather than to inform.',
        marks: 3,
      },
      {
        question: 'Why does writing for different media formats require a writer to think carefully about audience before anything else?',
        lines: 5,
        modelAnswer:
          'Every formatting and language choice in media writing -- the length, the register, the vocabulary level, the use of images or hashtags -- is determined by the likely behaviour and expectations of the audience. A social media post must hook its reader in three words because the average reader scrolls past in less than a second. A broadsheet editorial can develop a complex argument over several paragraphs because its readers expect and seek detailed analysis. If a writer ignores the audience, they risk producing text that is technically correct but completely ineffective because it is pitched at the wrong level, in the wrong tone, on the wrong platform.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The most common error in this lesson is students writing all three formats in the same register. Circulate actively and prompt them with specific questions: "Would a journalist really write it this way on social media? What would they cut?" and "Is this opinion or fact? An editorial should have both."',
      'If students have access to devices, showing them the actual accounts of well-known news organisations on social platforms alongside their formal websites makes the register contrast vivid and immediately relevant.',
      'The independent practice works best with a news prompt that has a clear element of controversy or human interest, as these generate stronger editorial paragraphs. A purely factual announcement tends to produce weak opinions.',
      'This lesson directly prepares students for the breadth of writing tasks they may encounter in assessments and in their wider lives. Explicitly connecting media writing skills to citizenship and career readiness can motivate students who do not yet see the relevance of English to their futures.',
    ],
    targetedSkills: [
      '8W.1 - Writing for purpose and audience',
      '8W.2 - Writing to persuade and argue',
      '8W.3 - Organising writing effectively',
      '8W.5 - Vocabulary and language choices',
      '8R.5 - Reading non-fiction and media texts',
    ],
  },

  // ── Lesson 10: End-of-Term Assessment -- Persuasive Writing ───────────────
  {
    id: 'y8t3-10',
    title: 'End-of-Term Assessment -- Persuasive Writing',
    text: 'Rhetoric and Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Demonstrate understanding of rhetorical techniques and persuasive strategies developed across Term 3 (8W.2)',
      'Produce a well-structured persuasive piece of 350-450 words under timed conditions',
      'Apply at least five rhetorical techniques purposefully and accurately',
      'Reflect on performance and identify areas for development in a structured self-assessment',
    ],
    successCriteria: [
      'I can write a persuasive piece with a clear thesis, three developed arguments, and a counter-argument',
      'I can use at least five rhetorical techniques deliberately and label them in the margin',
      'I can maintain an appropriate register and spoken-address voice throughout',
      'I can complete an honest self-assessment identifying my strengths and one key target',
    ],
    keywords: [
      'assessment',
      'rhetoric',
      'ethos',
      'pathos',
      'logos',
      'structure',
      'technique',
      'register',
      'audience',
      'self-assessment',
    ],
    starterActivity: {
      title: 'Term 3 Knowledge Recall',
      duration: '10 minutes',
      instructions:
        "Students complete a five-question quick-fire knowledge check on mini-whiteboards (one question at a time, 1 minute per question): (1) Name the three Aristotelian appeals. (2) What does AFOREST stand for? (3) Define media literacy in one sentence. (4) What is the difference between misinformation and disinformation? (5) What is the inverted pyramid structure in news writing? Teacher shows answers after all five; students mark their own. This starter activates the term's key knowledge before the assessment and allows students to identify any gap they need to quickly review in their notes before writing.",
      differentiation: {
        support: 'Allow students to keep their Technique Bank visible during the knowledge check but not during the assessment itself.',
        core: 'Students complete the knowledge check independently from memory.',
        stretch: 'Students also write a sixth question of their own that they believe tests a key concept from Term 3.',
      },
      resources: ['Mini-whiteboards and pens', 'Five-question slide (one question at a time)', 'Answer slide'],
    },
    mainActivities: [
      {
        title: 'Assessment Briefing and Planning',
        duration: '10 minutes',
        instructions:
          'Teacher distributes the assessment task and reads it aloud with the class. The task offers students a choice of two prompts (e.g. "Write a speech arguing that schools should ban smartphones" or "Write a speech arguing that every student should learn a second language"). Students have 10 minutes of planning time: they may use their Technique Bank but not their exercise books or any other notes. Planning must cover: thesis statement, three main arguments (one sentence each), counter-argument, opening technique, closing technique. Teacher circulates to check plans are sufficiently detailed before writing begins. Emphasise: the quality of the plan predicts the quality of the piece.',
        differentiation: {
          support: 'Provide a planning frame with the section headers and prompts pre-printed.',
          core: 'Students plan independently using the planning structure from Lesson 5.',
          stretch: 'Students also note in their plan which specific appeal (ethos, pathos, or logos) they will prioritise in each paragraph and why.',
        },
        resources: [
          'Assessment task sheet (one per student)',
          'Planning frame (for support)',
          'Technique Bank from Lesson 4 (permitted during planning only)',
        ],
      },
      {
        title: 'Timed Writing -- Assessment',
        duration: '30 minutes',
        instructions:
          'Students write their assessed piece independently and in silence. Technique Bank is not permitted during the writing phase. Students should label techniques used in the margin (this is expected and forms part of the assessment). Teacher circulates silently, timing the session and ensuring assessment conditions are maintained. With 5 minutes remaining, teacher gives a quiet time warning. Students should use this time to re-read their piece and check: Have I used my thesis? Have I included a counter-argument? Have I labelled at least five techniques? Is my register appropriate throughout? Teacher collects scripts at the end.',
        differentiation: {
          support: 'Students who require additional support may have the planning frame and may have up to 35 minutes for writing.',
          core: 'Students write for 30 minutes from their completed plan.',
          stretch: 'Stretch students aim for 450 words and include a sixth technique not from the AFOREST list, labelling and explaining it in the margin.',
        },
        resources: [
          'Assessment task sheet',
          'Lined assessment paper',
          'Timer visible to class',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '10 minutes',
      instructions:
        'After scripts are collected, students complete a self-assessment form (returned to them separately from their work). The form has three sections: (1) Strengths -- name two things you did well in this piece and explain how you know (reference specific techniques or decisions you made). (2) Target -- name one specific thing you would improve if you had ten more minutes. (3) Term 3 Learning Journey -- write two sentences about the most important thing you learned this term about either rhetoric or media literacy and explain how it will change how you read or write in the future. Teacher collects self-assessments to use alongside marked scripts when planning intervention for next term.',
      differentiation: {
        support: 'Provide sentence starters for each section of the self-assessment form.',
        core: 'Students complete the self-assessment independently.',
        stretch: "Students add a fourth section: one question about rhetoric or media they still want answered -- this feeds into next term's planning.",
      },
    },
    homework:
      'No formal homework is set this lesson. Students are encouraged to re-read any notes or materials from Term 3 that they feel less confident about. Marked assessments will be returned in the first lesson of Term 4 with individual written feedback and class improvement targets.',
    worksheetQuestions: [
      {
        question: 'Name the three Aristotelian appeals and give a one-line definition of each.',
        lines: 4,
        modelAnswer:
          'Ethos is an appeal to the credibility and trustworthiness of the speaker. Pathos is an appeal to the emotions of the audience. Logos is an appeal to reason, logic, and evidence. Together, the three appeals form the classical framework for understanding how persuasive communication works on its audience.',
        marks: 3,
      },
      {
        question: 'Explain what is meant by "register" in writing and give an example of how register should change between a formal speech and a social media post.',
        lines: 5,
        modelAnswer:
          'Register refers to the level of formality and the specific language choices a writer makes in response to their audience, purpose, and format. In a formal speech, the register is measured and authoritative: sentences are complete, vocabulary is precise, and the speaker maintains a level of dignity appropriate to the occasion. In a social media post, the register is conversational and immediate: sentences may be incomplete, contractions are acceptable, and the tone is designed to provoke an instant emotional reaction and engagement rather than careful reflection.',
        marks: 4,
      },
      {
        question: 'A student writes: "People should care more about climate change." Improve this sentence by adding an example of either pathos or logos.',
        lines: 4,
        modelAnswer:
          '[Pathos version] Every year, millions of children in coastal communities watch their homes and futures slip beneath rising floodwaters -- and still, too many of us find reasons not to care about climate change. [Logos version] With global temperatures projected to rise by 2.7 degrees Celsius by 2100 under current policies, the scientific evidence demands that we treat climate change not as a distant concern but as the defining emergency of our time.',
        marks: 4,
      },
      {
        question: 'What is the difference between misinformation and disinformation? Use an example to illustrate your answer.',
        lines: 5,
        modelAnswer:
          'Misinformation is false information shared without the intent to deceive. For example, a person who shares a health myth they genuinely believe to be true is spreading misinformation, even though they have no malicious intent. Disinformation is false information deliberately created and spread to manipulate. For example, a state-sponsored campaign that fabricates statistics about an election is disinformation, because the creators know the information is false and intend for it to change public behaviour. The distinction lies in intent.',
        marks: 4,
      },
      {
        question: 'Write a persuasive paragraph of 80-100 words on the following statement: "Young people are better informed than ever before." You may agree, disagree, or argue a nuanced position. Use at least two rhetorical techniques and label them in the margin.',
        lines: 10,
        modelAnswer:
          "[Rhetorical question] Has the age of information made us more informed -- or simply more overwhelmed? Young people today have access to more data than any previous generation, and many use it brilliantly: the student activists of the past decade have shown a grasp of global issues that would shame many of their elders. [Pathos + concession] Yet access is not the same as understanding. For every young person who fact-checks their sources, another shares a sensational headline without reading beyond the title. The question is not whether the information is there -- it is whether we have taught young people how to use it.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'Ensure the two assessment prompts are genuinely different in topic so that students who are sensitive about a particular issue can choose the alternative without feeling disadvantaged. Both prompts should be of comparable difficulty in terms of the range of techniques they invite.',
      'The marginal labelling of techniques is a valuable assessment tool: it allows you to confirm that students are using techniques consciously and can name them, rather than using them accidentally. Reward accurate labelling explicitly in your marking feedback.',
      'Self-assessment forms collected separately from marked scripts allow you to compare student self-perception with your own judgement. Significant discrepancies -- either students overestimating or underestimating their performance -- are useful data for pastoral and pedagogical conversations.',
      'When returning marked work in Term 4, use the self-assessment forms to personalise written feedback: comment specifically on whether the student correctly identified their strengths and target, as this metacognitive accuracy is itself a valuable learning outcome.',
    ],
    targetedSkills: [
      '8W.2 - Writing to persuade and argue',
      '8W.3 - Organising writing effectively',
      '8W.4 - Analytical writing with evidence',
      '8W.5 - Vocabulary and language choices',
      '8Sp.4 - Peer feedback and self-assessment',
    ],
  },
];
