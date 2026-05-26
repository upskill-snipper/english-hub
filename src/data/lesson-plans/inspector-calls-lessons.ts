// @ts-nocheck
export interface LessonActivity {
  title: string
  duration: string
  instructions: string
  differentiation?: {
    support: string
    core: string
    stretch: string
  }
  resources?: string[]
}

export interface WorksheetQuestion {
  question: string
  lines: number
  modelAnswer?: string
  marks?: number
}

export interface LessonPlan {
  id: string
  title: string
  text: string
  board: string
  yearGroup: string
  duration: string
  objectives: string[]
  successCriteria: string[]
  keywords: string[]
  starterActivity: LessonActivity
  mainActivities: LessonActivity[]
  plenaryActivity: LessonActivity
  homework?: string
  worksheetQuestions: WorksheetQuestion[]
  teacherNotes: string[]
  targetedSkills: string[]
}

export const inspectorCallsLessonPlans: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1: Context - 1912 vs 1945 and Priestley's Message
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-1-context',
    title: "Context: 1912 vs 1945 and Priestley's Message",
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand the significance of the dual time setting (written 1945, set 1912)',
      "Explore Priestley's socialist political beliefs and how they shape the play",
      'Analyse how historical context creates dramatic irony for the 1945 audience',
      'Begin to link contextual knowledge to analytical writing about the text',
    ],
    successCriteria: [
      'I can explain at least three key differences between 1912 and 1945 Britain',
      "I can describe Priestley's political message and link it to the play's purpose",
      'I can identify examples of dramatic irony created by the dual time setting',
      'I can write a paragraph embedding contextual knowledge into analysis',
    ],
    keywords: [
      'Edwardian era',
      'post-war Britain',
      'socialism',
      'capitalism',
      'dramatic irony',
      'didactic',
      'welfare state',
      'social hierarchy',
    ],
    starterActivity: {
      title: 'Two Photographs, Two Worlds',
      duration: '8 minutes',
      instructions:
        'Display two images side by side: one of a wealthy Edwardian dinner party (circa 1912) and one of bomb-damaged British streets (circa 1945). Students write three observations about each image in silence for 2 minutes. Pair-share for 2 minutes. Class discussion: What might an audience in 1945 think when watching a play set in the complacent world of 1912? Collect responses on the board and introduce the concept of dramatic irony through hindsight.',
      differentiation: {
        support:
          "Provide a sentence starter: 'In the 1912 image I can see... which suggests...' and 'The 1945 image shows... which tells us...'",
        core: 'Students should make inferences about wealth, class and security from both images without prompts.',
        stretch:
          "Students should speculate on Priestley's intentions: why set the play in 1912 rather than writing about 1945 directly?",
      },
      resources: [
        'Edwardian dinner party photograph',
        'Post-Blitz street photograph',
        'Mini whiteboards',
      ],
    },
    mainActivities: [
      {
        title: 'Timeline Mapping: 1912-1945',
        duration: '15 minutes',
        instructions:
          'Distribute the blank timeline worksheet. Students work in pairs to place pre-cut event cards on a timeline from 1912 to 1945. Events include: sinking of the Titanic (1912), World War I (1914-1918), Russian Revolution (1917), General Strike (1926), Wall Street Crash (1929), World War II (1939-1945), Beveridge Report (1942), Labour election victory (1945). Once placed, students annotate each event with one sentence explaining why it matters for understanding the play. Teacher models the first annotation: the Titanic sinking in 1912 matters because Birling calls it unsinkable - the 1945 audience knows he is wrong, which undermines his authority. Whole-class check and discussion of the most important three events for the play.',
        differentiation: {
          support:
            "Provide event cards with brief descriptions already printed. Supply a word bank: 'undermines', 'foreshadows', 'exposes', 'reveals'.",
          core: 'Students place events and write their own annotations linking each to the play.',
          stretch:
            'Students rank the events in order of importance for understanding the play and justify their top choice in a short paragraph.',
        },
        resources: ['Blank timeline worksheet', 'Pre-cut event cards', 'Glue sticks'],
      },
      {
        title: "Priestley's Political Purpose",
        duration: '15 minutes',
        instructions:
          "Teacher input (5 minutes): Brief exposition on Priestley's biography - his service in WWI, his journalism, his 1940s radio Postscripts broadcasts, and his role in founding the Common Wealth Party. Emphasise that Priestley believed in collective responsibility and wanted to prevent Britain returning to the selfish individualism of the Edwardian era. Students then read a short extract of Priestley's own words (from a Postscript broadcast) and highlight key phrases that connect to the play's themes. In groups of three, students create a spider diagram: 'Priestley's Message' at the centre, with branches for capitalism, socialism, responsibility, class, and change. Each branch should include a one-sentence explanation and, where possible, a link to something they already know about the play.",
        differentiation: {
          support:
            'Provide a partially completed spider diagram with sentence starters on each branch.',
          core: 'Students complete the spider diagram independently with at least one play link per branch.',
          stretch:
            "Students add a further branch exploring why Priestley chose the form of a 'well-made play' to deliver his political message.",
        },
        resources: [
          'Priestley biography handout',
          'Postscript broadcast extract',
          'A3 paper for spider diagrams',
        ],
      },
      {
        title: 'Context into Analysis: Writing a PEEL Paragraph',
        duration: '15 minutes',
        instructions:
          "Teacher models a PEEL paragraph on the board responding to: 'How does Priestley use the character of Mr Birling to criticise capitalism?' Model paragraph should embed context about 1912 complacency and the 1945 audience's hindsight. Deconstruct the model: identify the Point, Evidence (quotation from memory - 'unsinkable, absolutely unsinkable'), Explanation, and Language/Link to context. Students then write their own PEEL paragraph responding to: 'How does Priestley use the dual time setting to convey his message about social responsibility?' Peer assessment using success criteria checklist: Does the paragraph include a clear point? A quotation or textual reference? Explanation of effect? A link to context? Students annotate their partner's work with two strengths and one target.",
        differentiation: {
          support:
            "Provide a paragraph frame with sentence starters: 'Priestley uses the dual time setting to...', 'This is evident when Birling states...', 'The 1945 audience would recognise that...', 'This links to Priestley's message because...'",
          core: 'Students write independently using the PEEL structure, aiming for at least two contextual references.',
          stretch:
            'Students write a second paragraph exploring how Priestley uses the Inspector as a mouthpiece for socialist values, without scaffolding.',
        },
        resources: [
          'Model paragraph on whiteboard/slide',
          'PEEL paragraph frame (support version)',
          'Peer assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket: 3-2-1',
      duration: '7 minutes',
      instructions:
        "Students complete an exit ticket on a slip of paper: 3 things they learned about the context of An Inspector Calls, 2 ways Priestley uses the dual time setting to create meaning, and 1 question they still have about the play's context. Collect exit tickets as students leave. Use remaining time for a quick-fire recap: teacher asks 'Would Priestley agree or disagree?' with statements such as 'Everyone should look after themselves', 'The rich have a duty to the poor', 'War changes nothing'. Students show thumbs up (agree) or thumbs down (disagree) and must justify their answer.",
      differentiation: {
        support:
          'Display key vocabulary on the board for students to use in their exit ticket responses.',
        core: 'Students complete the 3-2-1 independently with full sentences.',
        stretch:
          "For their '1 question', students must pose a question that links context to a specific character or event in the play.",
      },
      resources: ['Exit ticket slips', 'Statement slides'],
    },
    homework:
      'Create a revision flashcard set (minimum 8 cards) covering key contextual facts about 1912 and 1945 Britain. Each card should have the fact on one side and its relevance to An Inspector Calls on the other. Be prepared to quiz a partner next lesson.',
    worksheetQuestions: [
      {
        question:
          'Explain two key differences between life in Britain in 1912 and life in Britain in 1945.',
        lines: 6,
        modelAnswer:
          'In 1912, Britain was a rigidly class-based society where the wealthy upper and middle classes held significant power and there was no welfare state to support the poor. By 1945, Britain had experienced two devastating world wars which had broken down some class barriers, as people from all backgrounds had fought and suffered together. Additionally, in 1945 the Labour government was elected with a mandate to create the welfare state, reflecting a widespread belief in collective responsibility - the very message Priestley promotes through the play.',
        marks: 4,
      },
      {
        question:
          "What is dramatic irony? Give one example from An Inspector Calls that relies on the audience's knowledge of events between 1912 and 1945.",
        lines: 6,
        modelAnswer:
          "Dramatic irony is when the audience knows something that the characters on stage do not. In An Inspector Calls, Birling confidently declares that the Titanic is 'unsinkable, absolutely unsinkable' and that war is impossible. The 1945 audience knows the Titanic sank in 1912 and that two world wars followed, so Birling's confident predictions are shown to be foolish. This undermines his authority and makes the audience distrust his capitalist views from the outset.",
        marks: 4,
      },
      {
        question:
          "What were Priestley's political beliefs? How do these connect to the themes of An Inspector Calls?",
        lines: 8,
        modelAnswer:
          "Priestley was a committed socialist who believed in collective responsibility - the idea that all members of society have a duty to care for one another. He was critical of capitalism and the selfishness of the upper classes. These beliefs are central to An Inspector Calls: the Birling family represent the capitalist class who exploit workers like Eva Smith, while the Inspector acts as Priestley's mouthpiece, delivering the message that 'we are members of one body' and that failing to take responsibility for others will lead to suffering 'in fire and blood and anguish'.",
        marks: 5,
      },
      {
        question:
          'Why do you think Priestley chose to set the play in 1912 rather than in 1945 when he was writing it?',
        lines: 8,
        modelAnswer:
          'Priestley set the play in 1912 to create dramatic irony and to show the consequences of the selfish, capitalist attitudes represented by characters like Birling. By setting it before two world wars, the audience can see that the complacency and greed of the Edwardian upper classes contributed to national catastrophe. Priestley is warning his 1945 audience not to return to these pre-war attitudes now that the war is over. The dual time setting makes the play function as both a critique of the past and a warning for the future.',
        marks: 5,
      },
      {
        question:
          "Explain what the term 'didactic' means and why An Inspector Calls can be described as a didactic play.",
        lines: 6,
        modelAnswer:
          "Didactic means intended to teach a moral or political lesson. An Inspector Calls is didactic because Priestley wrote it with the explicit purpose of teaching his audience about social responsibility. The Inspector delivers clear moral messages, particularly in his final speech, and the structure of the play - in which each character is shown to have contributed to Eva Smith's death - is designed to make the audience reflect on their own responsibility to others in society.",
        marks: 4,
      },
      {
        question:
          "Read the following quotation from Birling: 'a man has to mind his own business and look after himself and his own.' How does Priestley use this line to convey his message? In your answer, refer to the play's context.",
        lines: 10,
        modelAnswer:
          "Priestley uses Birling's statement to represent the capitalist philosophy of individualism that Priestley opposed. Birling's belief that 'a man has to mind his own business and look after himself' reflects the attitudes of the Edwardian upper class in 1912 who felt no responsibility towards the working class. Priestley presents this view early in the play so that the Inspector's subsequent investigation can systematically dismantle it. The 1945 audience, having lived through the collective effort of two world wars and the spirit of the Blitz, would recognise Birling's selfishness as dangerous and outdated. Priestley structures the play so that Birling's individualism is proven wrong by the consequences of the family's actions on Eva Smith, reinforcing his socialist message that 'we are members of one body'.",
        marks: 8,
      },
      {
        question:
          'How might a 1945 audience have responded differently to this play compared to a modern audience? Explain your ideas.',
        lines: 8,
        modelAnswer:
          "A 1945 audience would have had direct personal experience of the events Birling dismisses - both world wars, the sinking of the Titanic, and the economic hardships of the 1930s. This would make Birling's dramatic irony even more powerful and his arrogance more offensive. They would also be living through the creation of the welfare state and may have been more receptive to Priestley's socialist message about collective responsibility. A modern audience may not immediately recognise the historical references but might connect the themes of inequality and exploitation to contemporary issues such as the gap between rich and poor, workers' rights, and corporate responsibility.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is a context-heavy lesson - keep the pace brisk and interactive to maintain engagement. The timeline activity works well as a competitive task if you set a time limit.',
      'Emphasise from the start that AQA Paper 2 requires students to write about the whole play from memory with no extract provided. Context must be woven into analysis, not bolted on as a separate paragraph.',
      'Some students may have limited prior knowledge of WWI/WWII. A brief visual recap (2-3 minutes) at the start of the timeline activity can help bridge gaps without derailing the lesson.',
      "The Postscript broadcast extract is particularly powerful - Priestley's own voice reinforces the idea of the playwright as a political figure. If possible, play an audio clip.",
      'The PEEL paragraph is the first scaffolded writing task in this scheme. Return to this structure throughout subsequent lessons, gradually removing scaffolding as students gain confidence.',
      'Collect exit tickets and review them before the next lesson to identify misconceptions about the dual time setting - this is a common area of confusion.',
    ],
    targetedSkills: [
      'AO3: Understanding of context and its relationship to the text',
      'AO1: Informed personal response with textual references',
      'Analytical paragraph writing using PEEL structure',
      'Embedding contextual knowledge into literary analysis',
      'Identifying and explaining dramatic irony',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 2: Act 1 - The Birling Household & Dramatic Irony
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-2-act1-birling-household',
    title: 'Act 1: The Birling Household & Dramatic Irony',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Priestley establishes the Birling household through stage directions and dialogue in Act 1',
      "Explore how dramatic irony undermines Birling's authority and foreshadows the play's message",
      'Examine the significance of the opening stage directions as a microcosm of capitalist values',
      'Develop the skill of writing about stagecraft and authorial intent from memory',
    ],
    successCriteria: [
      'I can analyse the effect of specific stage directions from the opening of Act 1',
      "I can explain how Priestley uses Birling's speeches to create dramatic irony",
      "I can link the presentation of the Birling household to Priestley's wider message",
      'I can write analytically about stagecraft using subject terminology',
    ],
    keywords: [
      'stage directions',
      'dramatic irony',
      'stagecraft',
      'microcosm',
      'hubris',
      'patriarchal',
      'bourgeois',
      'authorial intent',
    ],
    starterActivity: {
      title: 'The Room Speaks: Reading Stage Directions',
      duration: '8 minutes',
      instructions:
        "Display the opening stage directions on the board: 'The dining room... of a fairly large suburban house, belonging to a prosperous manufacturer. It has good solid furniture of the period... dessert plates and champagne glasses... pink and intimate lighting.' Students have 3 minutes to annotate a printed copy of these directions, circling key words and writing inferences in the margins. Then cold-call 4-5 students to share one inference each. Guide discussion toward: What impression does Priestley want to create? What values does this room represent? Why 'pink and intimate' rather than harsh or bright? Establish that the room is a microcosm of the Birlings' complacent, self-satisfied world.",
      differentiation: {
        support:
          'Provide annotation prompts: \'What does the word "prosperous" suggest?\', \'Why mention "champagne glasses"?\', \'What mood does "pink and intimate" create?\'',
        core: 'Students annotate independently and should identify at least three inferences about wealth, comfort and complacency.',
        stretch:
          "Students should consider why Priestley gives such detailed stage directions - what does this tell us about how he wants to control the audience's first impression?",
      },
      resources: ['Printed extract of opening stage directions', 'Highlighters'],
    },
    mainActivities: [
      {
        title: "Birling's Speech: Mapping Dramatic Irony",
        duration: '18 minutes',
        instructions:
          "Teacher reads aloud Birling's speech from Act 1 (from 'Just because the Kaiser makes a speech or two...' through to 'the Titanic... unsinkable, absolutely unsinkable'). Students follow along on their printed extract. In pairs, students complete a three-column table: Column 1 - Birling's claim (quotation); Column 2 - What actually happened (historical fact); Column 3 - Effect on the audience. Students should identify at least four examples of dramatic irony. After 10 minutes of pair work, teacher leads whole-class feedback, building a master table on the board. Key discussion question: 'Priestley could have made Birling say anything - why does he choose these specific predictions?' Guide students to understand that Priestley deliberately makes Birling wrong about everything to discredit his capitalist worldview entirely. The audience cannot trust a man who is wrong about the Titanic, war, and social progress.",
        differentiation: {
          support:
            'Provide the quotations pre-selected in Column 1 so students focus on Columns 2 and 3. Include a fact sheet of key events 1912-1945.',
          core: 'Students identify quotations and complete all three columns independently in pairs.',
          stretch:
            "Students add a fourth column: 'How this links to Priestley's message about capitalism and responsibility.' They should write in full sentences.",
        },
        resources: [
          "Printed extract of Birling's speeches",
          'Three-column table worksheet',
          '1912-1945 fact sheet (support)',
        ],
      },
      {
        title: 'Hot-Seating: Interrogating Birling',
        duration: '12 minutes',
        instructions:
          "Select a confident student to sit in the hot-seat as Mr Birling. The class acts as a panel of 1945 audience members who have just watched Birling's speech. Students prepare two questions each (2 minutes), then the hot-seat runs for 6 minutes. The student as Birling must respond in character, defending his views. After the hot-seat, brief class discussion (4 minutes): How did it feel to challenge Birling? What does his refusal to accept responsibility tell us? Teacher draws out that Birling's stubbornness represents the older generation's resistance to change - a key theme Priestley explores throughout the play.",
        differentiation: {
          support:
            "Provide question stems: 'Mr Birling, you said... but we now know that... How do you explain this?'",
          core: 'Students prepare their own questions that challenge Birling using specific references to his speeches.',
          stretch:
            "Students should frame questions that force Birling to confront the consequences of his philosophy, linking to Eva Smith's death.",
        },
        resources: ['Hot-seat chair', 'Question stem cards (support)'],
      },
      {
        title: 'Analytical Writing: Stagecraft and Dramatic Irony',
        duration: '15 minutes',
        instructions:
          "Students write two PEEL paragraphs responding to: 'How does Priestley use the opening of Act 1 to establish the Birling household and create dramatic irony?' Paragraph 1 should focus on stage directions and what they reveal about the Birlings' world. Paragraph 2 should focus on Birling's speeches and how dramatic irony undermines his authority. Teacher circulates, targeting support students first. With 5 minutes remaining, select two students to read their best paragraph aloud. Class identifies strengths using the success criteria. Teacher gives brief whole-class feedback on common issues (e.g., retelling rather than analysing, forgetting to link to Priestley's message).",
        differentiation: {
          support:
            'Provide a paragraph frame for Paragraph 1: \'Priestley uses stage directions at the opening of Act 1 to present the Birling household as... For example, the direction "..." suggests... This is significant because Priestley wants to show...\'',
          core: 'Students write both paragraphs independently using PEEL, with at least one quotation per paragraph from memory.',
          stretch:
            "Students write a third paragraph exploring how the lighting change ('pink and intimate' to 'brighter and harder') when the Inspector arrives symbolises the exposure of the Birlings' complacency.",
        },
        resources: ['Paragraph frame (support)', 'Success criteria checklist on board'],
      },
    ],
    plenaryActivity: {
      title: 'Freeze Frame: Before and After the Inspector',
      duration: '7 minutes',
      instructions:
        "In groups of four, students create two freeze frames: one showing the Birling family before the Inspector arrives (comfortable, self-satisfied, celebrating) and one showing their reaction the moment the Inspector is announced. Each group performs both frames. Class discusses: What has changed? Why does Priestley structure the act so that the celebration is interrupted? Introduce the idea that the Inspector's arrival shatters the 'pink and intimate' world of the Birlings - just as the wars shattered Edwardian complacency.",
      differentiation: {
        support:
          "Provide a description card for each freeze frame to guide students' body language and positioning.",
        core: 'Students create their own freeze frames based on their understanding of the text.',
        stretch:
          "After performing, students must explain their choices using subject terminology: 'We positioned Birling at the head of the table to represent his patriarchal dominance...'",
      },
      resources: ['Open space in classroom'],
    },
    homework:
      'From memory, write a paragraph analysing how Priestley uses Mr Birling in Act 1 to criticise capitalism. Include at least two quotations and a reference to context. Aim for 150-200 words.',
    worksheetQuestions: [
      {
        question:
          'What impression does Priestley create of the Birling household through the opening stage directions? Refer to specific details in your answer.',
        lines: 8,
        modelAnswer:
          "Priestley creates an impression of wealth, comfort and complacency through the opening stage directions. The 'good solid furniture', 'champagne glasses' and 'dessert plates' suggest a family enjoying the luxuries of their upper-middle-class status. The 'pink and intimate' lighting creates a warm, enclosed atmosphere that suggests the Birlings are insulated from the outside world and its problems. The word 'prosperous' immediately establishes Birling as a successful capitalist. Priestley uses these details to construct a microcosm of the Edwardian upper-middle class: materially comfortable but morally complacent, unaware of or indifferent to the suffering of the working class beyond their dining room walls.",
        marks: 5,
      },
      {
        question:
          "Identify three examples of dramatic irony in Birling's speeches in Act 1. For each, explain what Birling says, what actually happened, and the effect on the audience.",
        lines: 12,
        modelAnswer:
          "First, Birling claims the Titanic is 'unsinkable, absolutely unsinkable' - the audience knows it sank on its maiden voyage in 1912, killing over 1,500 people, making Birling appear foolish. Second, Birling dismisses the threat of war, stating there is no chance of conflict - the audience knows two devastating world wars followed, revealing Birling's dangerous complacency. Third, Birling predicts that 'in twenty or thirty years' time' there will be peace and prosperity - the audience knows that the period brought economic depression, mass unemployment, and global conflict. The cumulative effect is that the audience cannot trust Birling's judgment on anything, including his capitalist philosophy that 'a man has to look after himself'. Priestley systematically discredits Birling to discredit the ideology he represents.",
        marks: 6,
      },
      {
        question:
          "Why is the lighting change from 'pink and intimate' to 'brighter and harder' significant when the Inspector arrives?",
        lines: 6,
        modelAnswer:
          "The lighting change symbolises the shift from the Birlings' comfortable self-deception to the harsh scrutiny of the Inspector's investigation. 'Pink and intimate' suggests warmth, privacy and a rose-tinted view of the world - the Birlings see only what flatters them. 'Brighter and harder' suggests exposure, interrogation and truth. Priestley uses this stagecraft to show that the Inspector brings moral clarity, forcing the characters (and the audience) to confront uncomfortable realities about exploitation and responsibility.",
        marks: 4,
      },
      {
        question:
          'How does Priestley present Mr Birling as a character the audience should not trust? Refer to at least two methods.',
        lines: 8,
        modelAnswer:
          "Priestley presents Birling as untrustworthy through dramatic irony and characterisation. His confidently wrong predictions about the Titanic and war immediately establish him as a man of poor judgment. Additionally, Priestley characterises Birling as self-important and socially insecure: he repeatedly mentions his connections to influential people and his expectation of a knighthood, suggesting he values status above substance. His long, pompous speeches about business and self-reliance are presented as monologues that nobody else contributes to, implying he is not interested in others' views. Priestley uses these methods to ensure the audience distrusts Birling's capitalist worldview before the Inspector even arrives.",
        marks: 5,
      },
      {
        question:
          'What is the significance of the engagement celebration at the start of the play?',
        lines: 6,
        modelAnswer:
          "The engagement celebration between Sheila and Gerald is significant because it represents the merging of two wealthy families for social and business advantage - Birling explicitly mentions that Gerald's father is his business rival and that the marriage might lead to the two companies working together. This reveals that even personal relationships are transactional in the Birlings' capitalist world. The celebration also creates a mood of self-satisfaction that the Inspector's arrival will shatter, making the dramatic contrast more powerful. Priestley uses the engagement to show that the upper classes treat relationships as business deals, prioritising profit and status over genuine human connection.",
        marks: 4,
      },
      {
        question:
          "Explain the term 'microcosm' and how the Birling dining room functions as a microcosm in An Inspector Calls.",
        lines: 6,
        modelAnswer:
          'A microcosm is a small-scale representation of something much larger. The Birling dining room functions as a microcosm of Edwardian capitalist society: it contains a wealthy manufacturer, his socially ambitious wife, their privileged children, and a young man from an even wealthier family. Their behaviour - celebrating profit, ignoring the poor, prioritising appearances - reflects the broader attitudes of the upper and middle classes in 1912. When the Inspector forces them to confront their treatment of Eva Smith, the dining room becomes a microcosm of the moral reckoning Priestley wanted all of British society to undergo.',
        marks: 4,
      },
      {
        question:
          'How does Priestley use the character of Mr Birling in the opening of Act 1 to convey his message about social responsibility? Write a detailed analytical paragraph.',
        lines: 12,
        modelAnswer:
          "Priestley uses Mr Birling in the opening of Act 1 as a vehicle to expose the failures of capitalist individualism. Birling's assertion that 'a man has to mind his own business and look after himself and his own' directly contradicts Priestley's socialist belief in collective responsibility. By placing this statement immediately before the Inspector's arrival, Priestley structures the play so that Birling's philosophy is about to be tested and found wanting. The dramatic irony of Birling's predictions - that the Titanic is 'unsinkable' and that war is impossible - ensures the 1945 audience already distrusts his judgment, so his moral philosophy is undermined before it is even challenged. Priestley presents Birling as a 'hard-headed practical man of business' who sees everything in terms of profit and loss, including his daughter's engagement. This characterisation embodies the dehumanising effects of capitalism: people become commodities, and relationships become transactions. Priestley's message is clear: a society built on Birling's values will inevitably produce victims like Eva Smith.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "This lesson works best if students have their own printed copies of the opening stage directions and Birling's speeches to annotate. Since AQA Paper 2 is a closed-book exam, emphasise that students should be memorising key quotations as they go.",
      "The hot-seating activity is high-engagement but needs careful management. Choose a student who can maintain character under pressure. Prepare a few 'planted' questions in case the class is reluctant to participate.",
      "When discussing the lighting change, push students beyond the obvious - it is not just about mood but about Priestley's control of audience perception. This is a strong point to make about stagecraft as an authorial method.",
      'The three-column dramatic irony table is an excellent revision resource. Encourage students to keep it in their folders and add to it throughout the scheme.',
      "Remind students that 'Priestley presents' or 'Priestley uses' should be their default phrasing - not 'Birling is' or 'In the play'. This keeps the focus on authorial intent, which is rewarded at AO2.",
      "If time is tight, the freeze frame plenary can be replaced with a think-pair-share: 'How does the atmosphere change when the Inspector arrives, and why does this matter?'",
    ],
    targetedSkills: [
      'AO1: Informed personal response supported by textual references from memory',
      'AO2: Analysis of stagecraft, dramatic irony and authorial methods',
      'AO3: Understanding of how context shapes meaning',
      'Writing analytically about the effects of stage directions',
      'Memorising and deploying key quotations',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 3: Acts 1-2 - Sheila's Response and Change
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-3-sheila-response-change',
    title: "Acts 1-2: Sheila's Response and Change",
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      "Trace Sheila's character arc from the engagement celebration through her confession in Act 1 to her challenge of Gerald in Act 2",
      "Analyse how Priestley uses Sheila as a symbol of the younger generation's capacity for change",
      "Explore how language, stage directions and dramatic structure convey Sheila's transformation",
      "Write a sustained analytical response about Sheila's role in conveying Priestley's message",
    ],
    successCriteria: [
      "I can identify key moments in Sheila's transformation and explain their significance",
      "I can analyse specific quotations showing Sheila's change in language and attitude",
      'I can explain how Priestley uses Sheila to represent hope for social change',
      "I can write a multi-paragraph response linking Sheila to Priestley's message",
    ],
    keywords: [
      'character arc',
      'transformation',
      'generational divide',
      'conscience',
      'empathy',
      'moral awakening',
      'proxy',
      'catalyst',
    ],
    starterActivity: {
      title: "Tracking Sheila's Language",
      duration: '8 minutes',
      instructions:
        "Display four quotations from Sheila on the board, out of order: (1) 'Oh - it's wonderful! Look - Mummy - isn't it a beauty?' (about the ring), (2) 'But these girls aren't cheap labour - they're people', (3) 'I behaved badly too. I know I did. I'm ashamed of it', (4) 'You fool - he knows. Of course he knows. And I hate to think how much he knows that we don't know yet.' Students must place them in chronological order and, for each, write one sentence explaining what it reveals about Sheila's state of mind. Share and discuss: What pattern do students notice? Establish the trajectory from superficiality to moral awareness.",
      differentiation: {
        support:
          "Provide the chronological order and ask students only to write the inference sentences. Supply sentence starter: 'This quotation shows Sheila is... because...'",
        core: 'Students order the quotations and write inference sentences independently.',
        stretch:
          "Students identify the specific language shift in each quotation - from exclamatory/materialistic to declarative/moral - and comment on what this reveals about Priestley's methods.",
      },
      resources: ['Quotation cards or slides', 'Mini whiteboards'],
    },
    mainActivities: [
      {
        title: "Sheila's Confession: Close Language Analysis",
        duration: '18 minutes',
        instructions:
          "Focus on Sheila's account of getting Eva Smith sacked from Milwards. Teacher reads the key passage aloud while students follow on printed extracts. Students annotate independently for 5 minutes, focusing on: language choices that reveal Sheila's emotions, stage directions that show her physical response, and any shifts in tone. Then, in pairs, students complete an analysis grid: Quotation | Method | Effect | Link to Priestley's message. Teacher models the first row: Quotation - 'I went to the manager at Milwards and I told him that if they didn't get rid of that girl, I'd never go near the place again'; Method - Sheila's own retelling reveals her abuse of class power; Effect - the audience sees how casual cruelty by the privileged destroys working-class lives; Link - Priestley shows that even seemingly 'nice' people participate in systems of exploitation. Pairs complete at least three more rows. Whole-class feedback, with teacher selecting rows that demonstrate strong analytical thinking.",
        differentiation: {
          support:
            "Pre-select three quotations and provide the 'Method' column completed. Students focus on 'Effect' and 'Link'.",
          core: 'Students select their own quotations and complete all four columns with detailed responses.',
          stretch:
            "Students should also consider how Sheila's confession compares to Birling's reaction - what does the contrast reveal about generational attitudes?",
        },
        resources: [
          "Printed extract of Sheila's confession passage",
          'Analysis grid worksheet',
          'Highlighters',
        ],
      },
      {
        title: "Before and After: Sheila's Transformation Map",
        duration: '12 minutes',
        instructions:
          "Students create a transformation map on A3 paper, divided into two halves: 'Sheila at the start of the play' and 'Sheila by the end of Act 2'. For each half, students must include: at least two quotations, a description of her relationship with other characters, her attitude toward Eva Smith/the working class, and her role in the Birling household. In the middle, students draw an arrow and label it with the key moments that catalyse her change. Teacher circulates and challenges students to think about why Priestley chooses to transform Sheila rather than, say, Mrs Birling or Gerald.",
        differentiation: {
          support:
            'Provide a pre-structured template with headings and sentence starters for each section.',
          core: 'Students complete the transformation map with detailed quotations and explanations.',
          stretch:
            "Students add a third section: 'What Sheila represents' - exploring her symbolic function as the younger generation capable of moral growth.",
        },
        resources: ['A3 paper', 'Coloured pens', 'Template (support)'],
      },
      {
        title: "Exam-Style Writing: Sheila and Priestley's Message",
        duration: '15 minutes',
        instructions:
          "Students write a sustained response (aim for three paragraphs) to: 'How does Priestley use the character of Sheila Birling to convey his ideas about responsibility and change?' Remind students: no extract will be provided in the real exam. They must write from memory, embedding quotations and linking to Priestley's intentions and context. Teacher circulates for the first 5 minutes, prioritising students who need support. With 3 minutes remaining, students self-assess using a checklist: Have I discussed Priestley's intentions? Have I included quotations? Have I analysed language/methods? Have I linked to context? Have I covered more than one moment in the play?",
        differentiation: {
          support:
            "Provide a planning frame: Paragraph 1 - Sheila at the start (quotation + analysis); Paragraph 2 - Sheila's confession and change (quotation + analysis); Paragraph 3 - What Sheila represents for Priestley's message.",
          core: 'Students plan and write independently, aiming for three paragraphs with embedded quotations.',
          stretch:
            'Students should incorporate a comparison with another character (e.g., Mrs Birling or Birling) to strengthen their argument about generational change.',
        },
        resources: ['Planning frame (support)', 'Self-assessment checklist on board'],
      },
    ],
    plenaryActivity: {
      title: 'Spectrum Line: Is Sheila a Victim or a Villain?',
      duration: '7 minutes',
      instructions:
        "Students stand and position themselves on an imaginary line across the classroom: one end is 'Sheila is entirely a victim of her upbringing' and the other is 'Sheila is entirely responsible for her actions.' Students must justify their position to someone near them, then the teacher selects 3-4 students from different points on the spectrum to share. Guide discussion toward: Priestley presents Sheila as both - she is a product of a selfish class system but she also makes a choice to change. This is Priestley's point: we can all choose to take responsibility.",
      differentiation: {
        support:
          "Provide a card with a sentence frame: 'I am standing here because I think Sheila is... This is shown when she...'",
        core: "Students justify their position using textual evidence and Priestley's intentions.",
        stretch:
          'Students must argue the opposite viewpoint before giving their own, demonstrating an ability to consider multiple interpretations.',
      },
      resources: ['Open space in classroom', 'Sentence frame cards (support)'],
    },
    homework:
      "Learn three key Sheila quotations by heart (choose from those studied today). For each, write two sentences of analysis from memory, focusing on language and Priestley's message.",
    worksheetQuestions: [
      {
        question:
          'How does Priestley present Sheila at the beginning of Act 1? What impression does the audience form of her?',
        lines: 6,
        modelAnswer:
          "At the beginning of Act 1, Priestley presents Sheila as a young, excited woman focused on her engagement. Her exclamation 'Oh - it's wonderful!' about the ring and her childish address to her mother ('Mummy') suggest she is sheltered and materialistic. The audience's initial impression is of a privileged, somewhat superficial young woman who has been protected from the realities of the outside world by her wealthy family. Priestley establishes this starting point so that her subsequent transformation is all the more dramatic and meaningful.",
        marks: 4,
      },
      {
        question:
          "Explain how Sheila's language changes between Act 1 and Act 2. Use quotations to support your answer.",
        lines: 8,
        modelAnswer:
          "In Act 1, Sheila's language is exclamatory and emotional: 'Oh - it's wonderful!' and 'I'll never let it out of my sight.' This reflects her naivety and focus on material possessions. After learning about Eva Smith, her language becomes more reflective and morally aware: 'But these girls aren't cheap labour - they're people' shows a recognition of the working class as human beings worthy of respect. By Act 2, she speaks with authority and insight: 'You fool - he knows' demonstrates that she has developed understanding that surpasses the adults around her. The shift from exclamatory to declarative sentences reflects her movement from emotional reaction to rational moral judgment.",
        marks: 5,
      },
      {
        question:
          "Why does Priestley choose Sheila to be the first character who genuinely accepts responsibility for Eva Smith's death?",
        lines: 8,
        modelAnswer:
          "Priestley chooses Sheila as the first to accept responsibility because she represents the younger generation, who Priestley believed were more capable of change and moral growth. By having Sheila respond with genuine shame - 'I behaved badly too. I know I did. I'm ashamed of it' - Priestley contrasts her with her parents, who resist and deflect. This positions the younger generation as the hope for a more socially responsible future. For the 1945 audience, this was a powerful message: the older generation who created the conditions for two world wars could not change, but the younger generation building the post-war world could and must choose differently.",
        marks: 5,
      },
      {
        question:
          "Analyse the quotation: 'But these girls aren't cheap labour - they're people.' What does this reveal about Sheila and about Priestley's message?",
        lines: 8,
        modelAnswer:
          "This quotation marks a pivotal moment in Sheila's moral awakening. The contrasting structure - 'aren't cheap labour' versus 'they're people' - shows Sheila rejecting the dehumanising language of capitalism and replacing it with a recognition of shared humanity. The word 'cheap' exposes how the working class were reduced to their economic value by the upper classes, while 'people' reasserts their dignity. Priestley uses Sheila as a mouthpiece here to articulate his socialist message: that a capitalist system which treats workers as commodities is morally bankrupt. The fact that this insight comes from within the Birling family suggests that change is possible even from those who have benefited from exploitation.",
        marks: 6,
      },
      {
        question:
          "How does Sheila's reaction to the Inspector differ from her parents' reactions? Why is this significant?",
        lines: 8,
        modelAnswer:
          "Sheila responds to the Inspector with honesty, shame, and a willingness to learn, whereas her parents become defensive and hostile. While Birling tries to use his social status to intimidate the Inspector and Mrs Birling refuses to accept any blame, Sheila openly admits her guilt and begins to challenge the family's values. This is significant because Priestley uses the generational divide to suggest that social change is possible through the younger generation. Sheila's willingness to accept the Inspector's message reflects Priestley's hope that post-war Britain would reject the selfish values of the past and embrace collective responsibility.",
        marks: 5,
      },
      {
        question:
          'What role does Sheila play in the structure of the play? How does Priestley use her dramatically?',
        lines: 8,
        modelAnswer:
          "Structurally, Sheila functions as both a participant in the family's guilt and a proxy for the audience's moral journey. She is the first to confess, the first to feel genuine remorse, and increasingly becomes an ally of the Inspector - even taking on his role of questioning Gerald and her parents. Priestley uses her dramatically as a bridge between the Inspector's socialist message and the audience: as she changes, the audience is encouraged to change too. Her growing authority in the play - from 'silly' girl to moral conscience - mirrors the transformation Priestley wanted for British society.",
        marks: 5,
      },
      {
        question:
          'How does Priestley use the character of Sheila Birling to explore ideas about responsibility? Write a detailed response referring to the whole play.',
        lines: 14,
        modelAnswer:
          "Priestley uses Sheila Birling to demonstrate that accepting responsibility is the first step toward moral redemption. Initially, Sheila is presented as a privileged, materialistic young woman: her excitement over her engagement ring and her childish language suggest she has been sheltered from the consequences of her family's wealth. However, when she learns that she got Eva Smith sacked from Milwards out of jealousy, her response is immediate and genuine: 'I behaved badly too. I know I did. I'm ashamed of it.' Unlike her parents, Sheila does not try to deflect blame or justify her actions. This capacity for shame becomes the foundation of her moral transformation. As the play progresses, Sheila's language shifts from emotional to analytical - 'But these girls aren't cheap labour - they're people' - showing that she can see beyond her class privilege to recognise shared humanity. Priestley positions her as increasingly aligned with the Inspector, even taking over his interrogative role. By Act 3, when her parents try to dismiss the Inspector's visit, Sheila insists that the family's guilt remains regardless of whether the Inspector was 'real'. Priestley uses this to show that true responsibility is about moral accountability, not legal obligation. For the 1945 audience, Sheila represents hope: the younger generation can learn, change, and build a better society based on collective responsibility rather than selfish individualism.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'Sheila is one of the most commonly examined characters. Ensure students have a bank of at least five memorised quotations by the end of this lesson.',
      'The transformation map is an excellent revision resource - laminate strong examples and display them in the classroom or share digitally.',
      "When discussing Sheila's confession about Milwards, handle the class dynamic carefully. Some students may struggle with the idea that jealousy and spite can cause serious harm. Draw parallels to modern situations (e.g., online bullying, reporting someone out of spite) to make it relatable.",
      "Push higher-ability students to discuss Sheila as a structural device, not just a character - she is the audience's entry point into the moral argument of the play.",
      "The spectrum line plenary often generates strong debate. If time is short, it can be done as a written reflection instead: 'Where would you stand on the spectrum and why?'",
      "Remind students that AQA rewards responses that cover the 'whole play' - so they need to be able to write about Sheila at the start, middle, and end of the text.",
    ],
    targetedSkills: [
      'AO1: Sustained critical response with textual references from memory',
      'AO2: Analysis of language, structure and form as methods',
      "AO3: Linking characterisation to Priestley's context and purpose",
      'Tracing character development across a whole text',
      'Writing multi-paragraph analytical responses under timed conditions',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 4: Act 2 - Gerald and Mrs Birling
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-4-gerald-mrs-birling',
    title: 'Act 2: Gerald and Mrs Birling',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley presents Gerald's relationship with Eva/Daisy and its moral complexities",
      "Examine Mrs Birling's refusal to accept responsibility and its dramatic consequences",
      'Explore how Priestley uses both characters to critique upper-class attitudes to gender and morality',
      "Compare the responses of Gerald and Mrs Birling to the Inspector's interrogation",
    ],
    successCriteria: [
      "I can analyse Gerald's treatment of Eva/Daisy, considering multiple interpretations",
      'I can explain how Priestley uses Mrs Birling to represent the most entrenched capitalist attitudes',
      "I can compare the two characters' responses to the Inspector and link this to Priestley's themes",
      'I can write analytically about gender, class and morality using textual evidence from memory',
    ],
    keywords: [
      'exploitation',
      'power imbalance',
      'patriarchy',
      'charity',
      'prejudice',
      'moral blindness',
      'hypocrisy',
      'dramatic irony',
    ],
    starterActivity: {
      title: 'Rescue or Exploitation? A Continuum',
      duration: '7 minutes',
      instructions:
        "Display the statement: 'Gerald rescued Daisy Renton. He was her hero.' Students write 'Agree', 'Disagree', or 'It's complicated' on their whiteboards with a one-sentence justification. Take a show of boards. Then display a second statement: 'Gerald used his wealth and power to take advantage of a vulnerable woman.' Take a second show of boards. Discuss: Can both statements be true at the same time? Introduce the concept of power imbalance - even if Gerald had genuine feelings, the relationship was unequal because of his class, gender, and wealth. This is the lens through which Priestley wants us to read Act 2.",
      differentiation: {
        support:
          "Provide a sentence stem: 'I think Gerald's relationship with Daisy was... because...'",
        core: 'Students independently justify their position with reference to specific details from the text.',
        stretch:
          "Students should consider what Priestley's intention was in creating this ambiguity - why make Gerald's actions open to interpretation?",
      },
      resources: ['Mini whiteboards', 'Statement slides'],
    },
    mainActivities: [
      {
        title: "Gerald's Account: Language and Power Analysis",
        duration: '15 minutes',
        instructions:
          "Students work in pairs with a printed extract of Gerald's account of his relationship with Daisy Renton. Task: highlight all the language that suggests Gerald had power over Daisy (e.g., 'I insisted', 'I installed her', 'she was young and pretty and warm-hearted') and all the language that suggests genuine care (e.g., 'she was pretty and warm-hearted', 'I was sorry for her'). Students create a two-column table: 'Evidence of care' and 'Evidence of power/exploitation'. Whole-class discussion: Does Gerald's language reveal more about care or control? Focus on verbs like 'installed' - he treats her like a possession. Even his sympathy ('I was sorry for her') positions him as the powerful saviour. Teacher draws out that Priestley critiques a system where a woman's survival depends entirely on the goodwill of a wealthy man.",
        differentiation: {
          support:
            'Pre-highlight five key quotations and ask students to sort them into the two columns with explanations.',
          core: 'Students independently highlight and categorise, writing at least four entries per column.',
          stretch:
            "Students should identify how Gerald's language compares to Birling's language about Eva - are they more different or more similar than they appear?",
        },
        resources: [
          "Printed extract of Gerald's account",
          'Two-column analysis worksheet',
          'Highlighters',
        ],
      },
      {
        title: 'Mrs Birling: The Immovable Object',
        duration: '15 minutes',
        instructions:
          "Teacher delivers a brief recap of Mrs Birling's interrogation in Act 2 (3 minutes), focusing on her role as chair of the Brumley Women's Charity Organisation and her refusal to help Eva/Daisy. Students then work individually on an analysis task: they are given five key Mrs Birling quotations on cards - (1) 'Girls of that class', (2) 'She was claiming elaborate fine feelings... that were simply absurd in a girl in her position', (3) 'I did nothing I'm ashamed of', (4) 'She only had herself to blame', (5) 'the father of the child... should be made an example of'. For each quotation, students write: What this reveals about Mrs Birling's attitudes + How Priestley wants the audience to respond + A link to context or theme. After 10 minutes, teacher selects students to feed back on the most dramatically ironic quotation (number 5 - she unwittingly condemns her own son).",
        differentiation: {
          support:
            'Provide analysis prompts for each quotation: \'The word/phrase "..." suggests Mrs Birling believes... Priestley wants the audience to feel...\'',
          core: 'Students analyse all five quotations with detailed responses covering attitude, audience response, and context.',
          stretch:
            "Students should write an additional paragraph comparing Mrs Birling's attitude to Sheila's - what does the contrast reveal about Priestley's message on generational change?",
        },
        resources: ['Five quotation cards', 'Analysis frame worksheet', 'Prompt cards (support)'],
      },
      {
        title: 'Comparative Writing: Gerald vs Mrs Birling',
        duration: '15 minutes',
        instructions:
          "Students write a comparative response: 'How does Priestley use the characters of Gerald and Mrs Birling in Act 2 to explore attitudes toward Eva Smith and the working class?' Students should aim for two paragraphs: one on Gerald (exploring the ambiguity of his actions and what they reveal about gender and class), one on Mrs Birling (exploring her refusal to accept responsibility and its dramatic consequences). Each paragraph should include a quotation from memory, analysis of language, and a link to Priestley's message. Teacher circulates and uses targeted questioning to push students: 'You've said what Gerald did - now tell me what Priestley is showing us about society.' Self-assessment in final 2 minutes against success criteria.",
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for each paragraph and a quotation bank.',
          core: 'Students write independently with at least one quotation per paragraph from memory.',
          stretch:
            'Students write a third paragraph drawing the comparison together: what do Gerald and Mrs Birling have in common, despite appearing very different?',
        },
        resources: [
          'Writing frame (support)',
          'Quotation bank (support)',
          'Success criteria checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Who Is More Guilty: Gerald or Mrs Birling?',
      duration: '8 minutes',
      instructions:
        "Students stand and move to one side of the room (Gerald) or the other (Mrs Birling) based on who they think bears more responsibility for Eva's death. A student from each side presents their argument (1 minute each). Then open the floor for rebuttals (2 minutes). Teacher summarises: Priestley's point is that all of them are guilty - it is the system of class and power that destroys Eva, not any single individual. Close with a key quotation from the Inspector: 'each of you helped to kill her.'",
      differentiation: {
        support:
          'Allow students to prepare their argument in writing for 1 minute before speaking.',
        core: 'Students must use at least one quotation in their argument.',
        stretch:
          "Students should argue that the question itself is flawed - Priestley's point is about collective, not individual, responsibility.",
      },
      resources: ['Open space in classroom'],
    },
    homework:
      "Write a PEEL paragraph from memory answering: 'How does Priestley present Mrs Birling as a character who refuses to change?' Include a quotation, language analysis, and a link to Priestley's message about social responsibility.",
    worksheetQuestions: [
      {
        question:
          "How does Priestley present Gerald's relationship with Eva/Daisy Renton? Is he presented sympathetically or critically?",
        lines: 8,
        modelAnswer:
          "Priestley presents Gerald's relationship with Eva/Daisy with deliberate ambiguity. On one hand, Gerald appears sympathetic: he rescued her from the unwanted attentions of Alderman Meggarty, provided her with accommodation, and genuinely seems to have cared for her. However, Priestley also makes clear the power imbalance: Gerald's language - 'I installed her' - treats Daisy as a possession, and the relationship ultimately exists on his terms. He ends it when it becomes inconvenient. Priestley uses Gerald to critique a patriarchal society where women's survival depends on the goodwill of wealthy men - even seemingly kind actions are rooted in unequal power structures.",
        marks: 5,
      },
      {
        question:
          "Analyse the quotation from Mrs Birling: 'Girls of that class.' What does this reveal about her attitudes?",
        lines: 6,
        modelAnswer:
          "Mrs Birling's dismissive phrase 'girls of that class' reveals her deeply entrenched snobbery and her belief that class determines moral worth. The demonstrative 'that' creates distance, as if the working class are a separate and inferior species. The plural 'girls' is dehumanising - she does not see Eva as an individual but as a type. Priestley uses Mrs Birling to represent the most extreme form of class prejudice: she genuinely believes that working-class people do not experience emotions with the same depth or legitimacy as her own class. This attitude enables her to deny Eva help without any guilt.",
        marks: 5,
      },
      {
        question:
          "Why is Mrs Birling's statement that 'the father of the child... should be made an example of' dramatically ironic?",
        lines: 6,
        modelAnswer:
          "This statement is dramatically ironic because the audience realises - either before or at the same time as Mrs Birling - that the father is her own son, Eric. By insisting the father should be 'made an example of' and held entirely responsible, Mrs Birling unknowingly condemns Eric. Priestley structures this moment so that Mrs Birling's rigid insistence on blaming others traps her: she cannot retract her judgment when she discovers it applies to her own family. This exposes her hypocrisy - she is happy to assign blame to strangers but horrified when it touches her own class.",
        marks: 4,
      },
      {
        question:
          "Compare how Gerald and Mrs Birling respond to the Inspector's questioning. What do their responses reveal about their characters?",
        lines: 10,
        modelAnswer:
          "Gerald responds to the Inspector with initial reluctance but eventually tells the truth about his relationship with Daisy Renton. He shows some genuine emotion - Sheila notes he is 'moved' - and his account suggests real, if temporary, feeling for Daisy. However, he ultimately aligns himself with the older generation by questioning the Inspector's legitimacy in Act 3. Mrs Birling, by contrast, is hostile and dismissive from the outset. She refuses to acknowledge any wrongdoing, claiming 'I did nothing I'm ashamed of', and attempts to use her social status to intimidate the Inspector. Priestley uses Gerald to show that even those capable of feeling can still fail to accept lasting responsibility, while Mrs Birling represents total moral blindness - an inability or unwillingness to see beyond class prejudice under any circumstances.",
        marks: 6,
      },
      {
        question:
          'How does Priestley use the character of Mrs Birling to criticise the upper classes?',
        lines: 8,
        modelAnswer:
          "Priestley uses Mrs Birling as the most damning critique of upper-class attitudes. Her assertion that Eva's 'fine feelings' were 'simply absurd in a girl in her position' reveals a belief that the working class are incapable of genuine human emotion. Her role as chair of the Brumley Women's Charity Organisation exposes the hypocrisy of upper-class philanthropy: she holds the power to help vulnerable women but uses that power to punish those who do not show sufficient deference. By making Mrs Birling the character least capable of change, Priestley suggests that the entrenched upper classes are beyond redemption and that social progress must come from the younger generation.",
        marks: 5,
      },
      {
        question:
          "What is the significance of Gerald's verb 'installed' when describing his treatment of Daisy Renton?",
        lines: 6,
        modelAnswer:
          "The verb 'installed' is significant because it implies Gerald treated Daisy as an object rather than a person - one 'installs' furniture or equipment, not a human being. It reveals the power imbalance in their relationship: Gerald controls where Daisy lives, and the verb suggests she is placed there for his convenience. Priestley uses this word choice to critique the patriarchal assumption that wealthy men have the right to arrange women's lives. Even Gerald's apparently kind gesture is expressed in language of ownership and control, suggesting that exploitation can be disguised as generosity.",
        marks: 4,
      },
      {
        question:
          'How does Priestley use the characters of Gerald and Mrs Birling to explore ideas about responsibility in Act 2? Write a detailed response.',
        lines: 14,
        modelAnswer:
          "In Act 2, Priestley uses Gerald and Mrs Birling to explore different but equally damaging failures of responsibility. Gerald's treatment of Eva/Daisy initially appears compassionate - he rescues her from Alderman Meggarty and provides her with somewhere to live. However, Priestley reveals that Gerald's 'rescue' is itself a form of exploitation: the verb 'installed' suggests possession rather than care, and Gerald abandons Daisy when the relationship no longer suits him. Priestley uses Gerald to show that individual acts of charity within an unjust system do not constitute genuine responsibility - they are temporary and self-serving. Mrs Birling represents an even more complete failure of responsibility. As chair of the Brumley Women's Charity Organisation, she holds institutional power to help vulnerable women, yet she refuses Eva because Eva used the Birling name and because she believed Eva's 'fine feelings' were 'simply absurd in a girl in her position'. Priestley exposes the cruelty of a class system where those with the power to help instead judge and punish. Mrs Birling's dramatic irony - unwittingly condemning her own son as the father who should be 'made an example of' - demonstrates that moral blindness eventually comes at a personal cost. Together, these characters show Priestley's argument that responsibility cannot be avoided: it must be accepted collectively, or society will continue to produce victims like Eva Smith.",
        marks: 8,
      },
      {
        question:
          'How does Priestley present attitudes toward women through the characters of Gerald and Mrs Birling?',
        lines: 8,
        modelAnswer:
          "Priestley reveals how patriarchal attitudes damage women across class lines. Gerald's relationship with Daisy - though outwardly romantic - is built on her dependence and his power, reflecting a society where women's security depends on men's generosity. Mrs Birling, despite being a woman herself, enforces patriarchal standards: she condemns Eva for having 'fine feelings' above her 'position' and judges her for being pregnant outside marriage, effectively punishing a woman for being exploited by men. Priestley uses both characters to show that the oppression of women is sustained not only by individual men but by a class system in which even women of privilege enforce the rules that harm women below them.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'The Gerald discussion requires sensitivity. Students may initially see his actions as purely heroic - guide them toward understanding power imbalance without dismissing any genuine care Gerald may have felt. The point is complexity.',
      "Mrs Birling is often students' least favourite character. Use this to discuss Priestley's intention: she is designed to be unsympathetic because she represents the attitudes Priestley most wanted to challenge.",
      'The dramatic irony of Mrs Birling condemning Eric is one of the most powerful moments in the play. Ensure students understand the structural mechanics: Priestley has the Inspector lead Mrs Birling into a trap of her own making.',
      'For lower-ability students, the comparative writing task may need to be reduced to one paragraph focusing on Mrs Birling, with Gerald covered through discussion rather than writing.',
      "Emphasise that AQA examiners reward responses that discuss 'the whole play' - students should reference Act 3 where possible (e.g., Gerald questioning the Inspector's identity, Mrs Birling's lack of change).",
      "Key quotations to ensure students memorise from this lesson: 'I installed her', 'girls of that class', 'I did nothing I'm ashamed of', 'the father of the child should be made an example of'.",
    ],
    targetedSkills: [
      'AO1: Sustained critical response comparing two characters',
      'AO2: Analysis of language choices and dramatic irony',
      'AO3: Understanding of gender and class context',
      'Evaluating multiple interpretations of a character',
      'Comparative analytical writing from memory',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 5: Act 3 - Eric's Confession
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-5-eric-confession',
    title: "Act 3: Eric's Confession",
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley presents Eric's confession and its dramatic impact in Act 3",
      'Explore Eric as a product of his upbringing and as a symbol of guilt and wasted privilege',
      "Examine how Priestley uses the revelation about Eric to expose the Birling family's hypocrisy",
      'Develop analytical writing about character, theme and structure from memory',
    ],
    successCriteria: [
      "I can analyse key quotations from Eric's confession and explain their significance",
      'I can explain how Priestley uses Eric to critique the upper-middle class',
      "I can discuss how Eric's revelation connects to the play's themes of responsibility and class",
      'I can write a developed analytical paragraph about Eric from memory',
    ],
    keywords: [
      'confession',
      'guilt',
      'privilege',
      'alcoholism',
      'dysfunction',
      'hypocrisy',
      'complicity',
      'structural climax',
    ],
    starterActivity: {
      title: 'What Do We Already Know About Eric?',
      duration: '7 minutes',
      instructions:
        "Students brainstorm everything they know about Eric from Acts 1 and 2 - in pairs, they list every detail (e.g., he drinks too much, he is 'not quite at ease', Sheila says he has been 'steadily drinking', he exits abruptly in Act 1). Teacher collects on the board. Then ask: 'Priestley plants all these clues before Eric's confession. Why?' Establish the concept of structural foreshadowing - Priestley builds dramatic anticipation so that Eric's confession feels both shocking and inevitable. This is the climax of the Inspector's investigation.",
      differentiation: {
        support:
          'Provide a list of Act 1-2 references to Eric and ask students to explain what each one foreshadows.',
        core: 'Students brainstorm from memory and explain the concept of foreshadowing in their own words.',
        stretch:
          "Students should consider how the audience's growing awareness of Eric's secret mirrors the Inspector's investigative method.",
      },
      resources: ['Mini whiteboards', 'Board/flipchart'],
    },
    mainActivities: [
      {
        title: "Close Reading: Eric's Confession",
        duration: '18 minutes',
        instructions:
          "Teacher reads Eric's confession passage aloud (from his return in Act 3 through to the revelation that he stole money from Birling's office). Students follow on printed extracts. First pass: students underline every phrase that reveals Eric's emotional state. Second pass: students circle every phrase that reveals something about the Birling family's failures. In pairs, students complete an analysis table with three columns: Quotation | What this reveals about Eric | What this reveals about the Birling family. Focus quotations should include: 'I was in that state when a chap easily turns nasty', 'she didn't want me to marry her', 'I got it - from the office', 'you're not the kind of father a chap could go to'. Teacher leads whole-class feedback, drawing out that Priestley presents Eric as both perpetrator and victim: he exploits Eva but has himself been failed by a family that prioritises appearances over genuine care.",
        differentiation: {
          support:
            'Provide five pre-selected quotations with the first column completed. Students focus on the two analysis columns.',
          core: 'Students select their own quotations and complete all three columns independently.',
          stretch:
            "Students add a fourth column: 'How Priestley uses this to convey his message' - linking each quotation to a theme or contextual point.",
        },
        resources: [
          "Printed extract of Eric's confession",
          'Three-column analysis table',
          'Highlighters',
        ],
      },
      {
        title: 'Eric and the Birlings: A Family on Trial',
        duration: '15 minutes',
        instructions:
          "Group activity (groups of 4-5). Each group is assigned one of Eric's key lines and must prepare a 90-second presentation explaining: what the line reveals, how it connects to other characters, and why Priestley includes it. Lines to assign: (1) 'you're not the kind of father a chap could go to' - what does this reveal about Birling's parenting? (2) 'She didn't want me to marry her' - how does this contrast with Mrs Birling's assumptions? (3) 'I got it - from the office' - what does the theft reveal about Eric's desperation and the family's wealth? (4) 'We did her in all right' - why is Eric the one to articulate collective guilt? Each group presents to the class. Teacher synthesises: Priestley uses Eric's confession as the moment when the family's dysfunction is fully exposed - every member has failed Eva, but they have also failed each other.",
        differentiation: {
          support:
            "Provide guided questions for each group's quotation to structure their discussion and presentation.",
          core: 'Groups prepare independently using their knowledge of the text and themes.',
          stretch:
            "Groups should include a comparison with at least one other character's response to guilt in their presentation.",
        },
        resources: ['Quotation assignment cards', 'Guided questions (support)'],
      },
      {
        title: 'Analytical Writing: Eric and Responsibility',
        duration: '13 minutes',
        instructions:
          "Students write two PEEL paragraphs responding to: 'How does Priestley use the character of Eric to explore ideas about guilt and responsibility?' Paragraph 1 should focus on what Eric did to Eva and what this reveals about power and privilege. Paragraph 2 should focus on Eric's response to his guilt and how it contrasts with his parents' responses. Remind students to write from memory - no looking at extracts. Teacher circulates, targeting students who need support with paragraph openings and quotation recall. In final 2 minutes, students highlight the strongest sentence in their work and share with a partner.",
        differentiation: {
          support:
            'Provide a paragraph frame with sentence starters and a short quotation bank of four key Eric quotations.',
          core: 'Students write independently from memory, embedding at least one quotation per paragraph.',
          stretch:
            "Students write a third paragraph exploring how Eric's confession is the structural climax of the Inspector's investigation and why Priestley saves it until last.",
        },
        resources: ['Paragraph frame (support)', 'Quotation bank (support)'],
      },
    ],
    plenaryActivity: {
      title: 'One Word, One Sentence',
      duration: '7 minutes',
      instructions:
        "Round 1: Each student writes one word on their whiteboard that best captures Eric's role in the play (e.g., 'guilt', 'wasted', 'mirror', 'product'). Show boards and discuss the most interesting choices. Round 2: Each student writes one sentence explaining how Priestley uses Eric to convey his message. Cold-call 4-5 students to share. Teacher closes by reinforcing: Eric is both a critique of the upper classes (his alcoholism and violence are products of a dysfunctional, materialistic family) and a vehicle for Priestley's message (like Sheila, he ultimately accepts guilt, showing the younger generation can change).",
      differentiation: {
        support:
          'Allow students to choose from a list of five suggested words rather than generating their own.',
        core: 'Students generate their own word and sentence independently.',
        stretch:
          'Students should explain why their chosen word is better than alternative choices, demonstrating precision of analysis.',
      },
      resources: ['Mini whiteboards'],
    },
    homework:
      "Create a revision mind map for Eric covering: key quotations (minimum 4), his relationships with other characters, his role in Eva's story, and how Priestley uses him to convey messages about responsibility, class and the younger generation.",
    worksheetQuestions: [
      {
        question:
          "How does Priestley use foreshadowing in Acts 1 and 2 to prepare the audience for Eric's confession?",
        lines: 6,
        modelAnswer:
          "Priestley plants several clues about Eric's secret throughout Acts 1 and 2. The stage direction 'not quite at ease' suggests Eric's discomfort from the outset. Sheila's observation that he has been 'steadily drinking' hints at a deeper problem, and his sudden, unexplained exit in Act 1 creates suspense. The audience gradually pieces together that Eric is hiding something significant. Priestley uses this structural technique to create dramatic anticipation - by the time Eric confesses, his revelation feels both shocking in its details and inevitable in its occurrence.",
        marks: 4,
      },
      {
        question:
          "Analyse the quotation: 'you're not the kind of father a chap could go to.' What does this reveal about the Birling family?",
        lines: 8,
        modelAnswer:
          "Eric's accusation reveals the emotional void at the centre of the Birling family. Despite their material wealth, the family lacks genuine communication and emotional support. The phrase 'not the kind of father' suggests Birling has prioritised his business and social reputation over his relationship with his son. Eric's use of the informal 'chap' rather than 'I' is telling - he distances himself from the pain of this admission. Priestley uses this line to show that the Birling family's capitalist values - prioritising profit, status, and appearances - have corroded their personal relationships. The family that cannot care for its own members certainly cannot be trusted to care for the wider community.",
        marks: 5,
      },
      {
        question:
          "How does Priestley present Eric's treatment of Eva Smith? Is Eric presented as a villain or a victim, or both?",
        lines: 8,
        modelAnswer:
          "Priestley presents Eric as both villain and victim. Eric's treatment of Eva is unambiguously wrong: he forced himself on her when she was vulnerable ('I was in that state when a chap easily turns nasty'), used her, and stole money in a clumsy attempt to help. However, Priestley also shows that Eric is a product of his environment: his alcoholism, his lack of emotional support from his parents, and his inability to handle responsibility are all consequences of growing up in a family that valued money over human connection. Unlike his parents, Eric feels genuine remorse - 'We did her in all right' - which aligns him with Sheila and Priestley's message that acknowledgment of guilt is the first step toward change.",
        marks: 5,
      },
      {
        question:
          "Why does Priestley choose to reveal Eric's involvement last in the Inspector's investigation?",
        lines: 6,
        modelAnswer:
          "Priestley saves Eric's confession until last because it serves as the structural climax of the play. Each revelation has escalated the family's guilt - from Birling's sacking of Eva, to Sheila's jealousy, to Gerald's affair, to Mrs Birling's refusal of charity. Eric's confession - involving sexual exploitation, unwanted pregnancy, and theft - represents the most complete failure of responsibility and brings the investigation full circle, as Mrs Birling has already unknowingly condemned her own son. By placing Eric last, Priestley ensures the maximum dramatic impact and forces every member of the family to confront their collective guilt.",
        marks: 4,
      },
      {
        question:
          "Explain the significance of Eric's line: 'We did her in all right.' Why is it important that Eric says this?",
        lines: 6,
        modelAnswer:
          "Eric's line 'We did her in all right' is significant because it is the first time a character uses collective language - 'we' - to describe the family's guilt. Unlike Birling's attempts to deflect blame and Mrs Birling's refusal to accept any responsibility, Eric acknowledges that Eva's death was caused by all of them acting together. The blunt, informal language ('did her in') strips away the euphemisms the family has been using. Priestley gives this line to Eric because, as part of the younger generation, he represents the possibility of honest self-examination. This moment prefigures the Inspector's final speech about collective responsibility.",
        marks: 5,
      },
      {
        question: 'How does Priestley use Eric to critique the upper-middle class?',
        lines: 8,
        modelAnswer:
          "Priestley uses Eric to expose the corruption beneath the Birlings' respectable surface. Eric's alcoholism suggests that the family's wealth and status cannot provide genuine fulfilment or emotional wellbeing. His resort to violence ('I was in that state when a chap easily turns nasty') reveals the aggression that privilege can mask. His theft from his father's business shows that the family's wealth, far from promoting morality, has given Eric a sense of entitlement without responsibility. Priestley presents Eric as the inevitable product of a capitalist family that teaches its children to take what they want without considering the consequences for others.",
        marks: 5,
      },
      {
        question:
          'How does Priestley use the character of Eric Birling to explore ideas about responsibility? Write a detailed response referring to the whole play.',
        lines: 14,
        modelAnswer:
          "Priestley uses Eric Birling to demonstrate both the destructive consequences of irresponsibility and the redemptive potential of guilt. Throughout Acts 1 and 2, Priestley foreshadows Eric's involvement through stage directions ('not quite at ease') and his heavy drinking, creating dramatic anticipation. When Eric's confession finally comes in Act 3, it represents the climax of the Inspector's investigation: Eric forced himself on Eva, made her pregnant, and stole money from his father's office in a misguided attempt to support her. Priestley does not excuse Eric's actions, but he contextualises them within a family that has failed to provide emotional support or moral guidance. Eric's accusation - 'you're not the kind of father a chap could go to' - indicts the Birling family's prioritisation of wealth and status over human connection. Crucially, Priestley aligns Eric with Sheila as a character capable of genuine remorse: his declaration that 'We did her in all right' uses collective language that anticipates the Inspector's message about shared responsibility. Unlike his parents, who attempt to deny and deflect after the Inspector leaves, Eric insists that their guilt remains regardless of whether the Inspector was real. Priestley uses this generational divide to argue that the younger generation must reject their parents' selfish individualism and embrace collective responsibility - the very transformation Priestley hoped for in post-war Britain.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "Handle Eric's treatment of Eva sensitively. The text implies sexual assault ('I was in that state when a chap easily turns nasty' and Eva 'didn't want me to marry her'). Use age-appropriate language and focus on power imbalance and consent without graphic detail.",
      'Some students may struggle with the idea that Eric can be both a perpetrator and a victim. Emphasise that Priestley is critiquing the system that produced Eric, not excusing his actions.',
      'The group presentation activity can be adapted for timing - if pressed, have pairs rather than groups, or select only two quotations for class discussion.',
      'Eric is sometimes neglected in revision because students focus on Sheila and the Inspector. Emphasise that Eric is a strong choice for exam responses on responsibility, guilt, the younger generation, and class.',
      "Key quotations for memorisation from this lesson: 'not quite at ease', 'I was in that state when a chap easily turns nasty', 'you're not the kind of father a chap could go to', 'We did her in all right'.",
      "Link back to Lesson 3 (Sheila) throughout - the parallel between the two siblings' moral journeys is a strong exam point.",
    ],
    targetedSkills: [
      'AO1: Critical response to a character across the whole play',
      'AO2: Analysis of structure, foreshadowing and dramatic climax',
      'AO3: Contextual understanding of class, privilege and gender',
      'Writing about a character as both an individual and a symbol',
      'Memorising and deploying quotations under timed conditions',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 6: The Inspector's Final Speech - Close Reading
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-6-inspector-final-speech',
    title: "The Inspector's Final Speech - Close Reading",
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      "Conduct a detailed close reading of the Inspector's final speech, analysing language, rhetoric and imagery",
      "Explore how the speech functions as Priestley's direct message to the audience",
      "Examine the speech's structural position and its impact on the play's meaning",
      'Write a sustained analytical response about the speech from memory',
    ],
    successCriteria: [
      "I can identify and analyse specific rhetorical and linguistic techniques in the Inspector's speech",
      'I can explain how Priestley uses the Inspector as a mouthpiece for his socialist message',
      "I can discuss the structural significance of the speech's placement at the end of the play",
      "I can write from memory about the Inspector's final speech with embedded quotations",
    ],
    keywords: [
      'rhetoric',
      'collective pronoun',
      'imperative',
      'tricolon',
      'prophetic',
      'mouthpiece',
      'polemic',
      'apocalyptic imagery',
    ],
    starterActivity: {
      title: 'Memory Challenge: Reconstruct the Speech',
      duration: '8 minutes',
      instructions:
        "Students are given 2 minutes to write down as much of the Inspector's final speech as they can remember from memory. Then display the full speech on the board. Students compare their version with the original, circling any phrases they got right and adding any they missed. Discuss: Which parts were easiest to remember and why? (Often the most powerful, rhythmic, or imagistic phrases stick - 'fire and blood and anguish', 'we are members of one body'.) This is a useful insight into what makes rhetoric memorable, and it helps students understand what examiners expect in terms of quotation recall.",
      differentiation: {
        support:
          'Provide the speech with key phrases blanked out; students fill in the gaps from memory.',
        core: 'Students attempt to reconstruct the speech from scratch, then compare with the original.',
        stretch:
          'Students must also explain why certain phrases are more memorable - what rhetorical techniques make them stick?',
      },
      resources: [
        'Blank paper',
        'Full speech displayed on board/slide',
        'Gap-fill version (support)',
      ],
    },
    mainActivities: [
      {
        title: 'Annotating the Speech: Language and Rhetoric',
        duration: '18 minutes',
        instructions:
          "Students receive a printed copy of the full speech with wide margins for annotation. Teacher guides a close reading in stages. Stage 1 (3 minutes): Read the speech aloud dramatically. Students listen and underline phrases that feel most powerful. Stage 2 (10 minutes): In pairs, students annotate the speech for specific techniques: collective pronouns ('we', 'one'), imperatives ('remember'), tricolon ('fire and blood and anguish'), apocalyptic imagery, contrasts (individual vs collective), repetition, and shifts in tone. Each annotation should include the technique name and a brief note on its effect. Stage 3 (5 minutes): Whole-class feedback. Build a class annotation on the board/visualiser, with teacher adding analytical vocabulary. Key discussion points: Why does Priestley use the collective 'we'? Why end with a warning rather than a comforting message? How does the apocalyptic imagery ('fire and blood and anguish') connect to the wars the 1945 audience has experienced?",
        differentiation: {
          support:
            'Provide an annotation key with technique names and definitions. Pre-label three techniques on the printed speech as models.',
          core: 'Students annotate independently, identifying at least six techniques with effects.',
          stretch:
            "Students should compare the Inspector's rhetoric to political speeches they know - what makes this speech persuasive? How does it function as polemic?",
        },
        resources: [
          'Printed speech with wide margins',
          'Annotation key (support)',
          'Coloured pens',
          'Visualiser or document camera',
        ],
      },
      {
        title: "The Inspector as Priestley's Mouthpiece",
        duration: '12 minutes',
        instructions:
          "Class discussion followed by individual writing. Teacher poses the question: 'Is the Inspector a character or a device?' Students discuss in threes for 3 minutes, then share ideas. Teacher draws out: the Inspector functions as Priestley's mouthpiece - his final speech is not really addressed to the Birlings but to the audience. The speech breaks the 'fourth wall' in effect, if not literally. Students then write a paragraph responding to: 'How does Priestley use the Inspector's final speech to directly address the audience?' Students should discuss: the use of 'we' (including the audience in the collective), the prophetic tone (the Inspector seems to know the future), and the warning structure (if you don't change, there will be consequences). Teacher circulates and pushes students to use the term 'mouthpiece' and to link to Priestley's socialist politics.",
        differentiation: {
          support:
            'Provide a paragraph frame: \'Priestley uses the Inspector\'s final speech as a... The Inspector addresses not just the Birlings but... The collective pronoun "we" is significant because... The warning about "fire and blood and anguish" would have resonated with the 1945 audience because...\'',
          core: 'Students write independently with at least two quotations and a link to context.',
          stretch:
            "Students should discuss the Inspector's ambiguous identity - is he a ghost, a time traveller, a divine figure, or something else? How does this ambiguity enhance the power of his message?",
        },
        resources: ['Paragraph frame (support)'],
      },
      {
        title: "Exam Practice: The Inspector's Speech in Full",
        duration: '15 minutes',
        instructions:
          "Students write a full exam-style response to: 'How does Priestley use the Inspector's final speech to convey his ideas about social responsibility?' Students should aim for three paragraphs covering: (1) language and rhetoric - specific techniques and their effects, (2) the Inspector as Priestley's mouthpiece and the speech's message, (3) the structural significance of the speech and its impact on the audience (context). Remind students: from memory, no extract, embed quotations. Teacher circulates silently for the first 10 minutes, making notes on common strengths and areas for improvement. In the final 2 minutes, students count their quotations and check they have discussed Priestley's intentions.",
        differentiation: {
          support:
            'Provide a planning grid with the three paragraph focuses and two quotations per paragraph to choose from.',
          core: 'Students plan and write independently from memory, aiming for three developed paragraphs.',
          stretch:
            'Students should incorporate an alternative interpretation - some critics argue the speech is too didactic and heavy-handed. Do they agree? Why might Priestley have chosen this approach?',
        },
        resources: ['Planning grid (support)', 'Lined paper', 'Timer visible on board'],
      },
    ],
    plenaryActivity: {
      title: 'Deliver the Speech',
      duration: '7 minutes',
      instructions:
        "Two volunteers deliver the Inspector's final speech to the class from memory (or near-memory with the text as a safety net). The class acts as the audience - after each delivery, they give feedback: which version was more effective and why? What tone, pace, and emphasis worked best? Teacher closes by connecting this back to the written analysis: the techniques you identified on paper are what make this speech powerful when spoken aloud. Priestley wrote for the stage - always consider how his words would sound, not just how they read.",
      differentiation: {
        support:
          'Students follow along on their printed copy and identify the three most powerful moments.',
        core: 'Students provide specific feedback using rhetorical terminology.',
        stretch:
          "Students should direct the performer - 'Slow down on the tricolon to let each word land' - demonstrating their understanding of rhetoric in practice.",
      },
      resources: ['Printed speech copies'],
    },
    homework:
      "Memorise the Inspector's final speech in full. You will be tested next lesson. Learn it in sections: opening statement, central argument, and final warning. Practice saying it aloud to help it stick.",
    worksheetQuestions: [
      {
        question:
          "Identify and explain the effect of the tricolon 'fire and blood and anguish' in the Inspector's final speech.",
        lines: 6,
        modelAnswer:
          "The tricolon 'fire and blood and anguish' creates a rhythmic, escalating sequence that builds to a powerful climax. Each word increases in emotional intensity: 'fire' suggests destruction, 'blood' suggests violence and death, and 'anguish' suggests profound suffering. The polysyndeton (repetition of 'and') gives each word equal weight, forcing the audience to absorb the horror of each individually. For the 1945 audience, these words would evoke the Blitz, the battlefields, and the grief of wartime - Priestley is warning that if society does not learn the lessons of collective responsibility, this suffering will repeat itself.",
        marks: 5,
      },
      {
        question:
          "Why does the Inspector use the collective pronoun 'we' in his final speech? What effect does this create?",
        lines: 6,
        modelAnswer:
          "The Inspector uses 'we' rather than 'you' to include himself - and by extension the audience - in the moral argument. The phrase 'we are members of one body' positions everyone as part of the same collective responsibility, eliminating the possibility of standing apart and judging the Birlings without self-examination. Priestley uses this pronoun deliberately to prevent the audience from distancing themselves from the play's message: they too are responsible for how society treats its most vulnerable members. The collective pronoun transforms the speech from a lecture directed at the Birlings into a challenge directed at everyone.",
        marks: 4,
      },
      {
        question:
          'How does the speech function as a warning? What is the Inspector warning the Birlings - and the audience - about?',
        lines: 8,
        modelAnswer:
          "The speech functions as a prophetic warning structured around a conditional statement: if society does not learn that 'we are members of one body', then the consequences will be 'fire and blood and anguish'. The Inspector warns that individualism and selfishness - the attitudes demonstrated by Birling throughout the play - will lead to catastrophe. For the 1945 audience, the warning is both retrospective (the two world wars were the consequence of pre-1914 social injustice) and prospective (if post-war Britain returns to those values, disaster will follow again). Priestley gives the Inspector a prophetic voice - he seems to know the future - which makes the warning feel supernatural and urgent.",
        marks: 5,
      },
      {
        question:
          "Explain what the term 'mouthpiece' means and how the Inspector functions as Priestley's mouthpiece.",
        lines: 6,
        modelAnswer:
          "A mouthpiece is a character who speaks the author's beliefs and values directly to the audience. The Inspector functions as Priestley's mouthpiece because his final speech articulates Priestley's core socialist beliefs: that all people are interconnected ('members of one body'), that the wealthy have a responsibility to the poor, and that selfishness leads to collective suffering. The Inspector does not speak like a realistic police inspector - his language is rhetorical, prophetic, and philosophical. Priestley uses him as a dramatic device to deliver a political message directly to the audience, blurring the line between character and author.",
        marks: 4,
      },
      {
        question:
          "What is the structural significance of placing the Inspector's speech at the end of the play, just before his exit?",
        lines: 6,
        modelAnswer:
          "Priestley places the speech at the end so it functions as the moral conclusion of the investigation: every family member's guilt has been established, and the Inspector now delivers the lesson that their individual actions are connected to a systemic failure of responsibility. By placing it just before his mysterious exit, Priestley ensures the speech lingers - the Inspector's departure without explanation gives his words a supernatural authority. Structurally, the speech also sets up the final act's division between those who accept the message (Sheila and Eric) and those who reject it (Birling and Mrs Birling), making the audience choose whose response to align with.",
        marks: 5,
      },
      {
        question:
          "Analyse the phrase 'We are members of one body. We are responsible for each other.' How does Priestley use this to convey his socialist message?",
        lines: 8,
        modelAnswer:
          "The phrase 'We are members of one body' uses a metaphor drawn from Christian teaching (the body of Christ in 1 Corinthians 12) and socialist philosophy to argue that all humans are interconnected. The word 'members' suggests belonging - no one can be excluded from this collective. 'One body' implies that harm to any part damages the whole, just as the Birlings' individual acts of cruelty combined to destroy Eva Smith. The follow-up sentence, 'We are responsible for each other', translates the metaphor into a clear moral imperative. The declarative sentence structure gives it the force of a universal truth. Priestley uses this to articulate the core of his socialist vision: a just society requires collective responsibility, not the individualism championed by Birling.",
        marks: 6,
      },
      {
        question:
          "How does Priestley use the Inspector's final speech to convey his ideas about responsibility? Write a detailed analytical response.",
        lines: 14,
        modelAnswer:
          "Priestley uses the Inspector's final speech as the rhetorical climax of the play, delivering his socialist message directly to the audience through the Inspector as his mouthpiece. The speech opens with the declaration that 'We are members of one body. We are responsible for each other', which uses the collective pronoun 'we' to include everyone - characters and audience alike - in the moral argument. The metaphor of 'one body' draws on both Christian and socialist traditions to argue that society is interconnected, and harm to any part damages the whole. Priestley then structures the speech as a conditional warning: if this lesson is not learned, 'then they will be taught it in fire and blood and anguish'. The tricolon escalates in intensity, with 'fire' suggesting destruction, 'blood' suggesting violence, and 'anguish' suggesting prolonged suffering. For the 1945 audience, who had lived through two world wars, these words would carry devastating weight - they are not hypothetical but historical. Priestley's structural choice to place this speech immediately before the Inspector's mysterious exit gives it a prophetic, almost supernatural authority. The Inspector does not wait for a response; he delivers his verdict and leaves. This forces the characters - and the audience - to decide how to respond without guidance, mirroring the moral choice Priestley believed post-war Britain faced: return to selfish individualism or commit to collective responsibility.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "This is a high-value lesson - the Inspector's final speech is one of the most frequently examined passages. Invest time in thorough annotation and memorisation.",
      'The memory reconstruction starter is diagnostic: it shows you which students have been revising and which need support with quotation recall. Adjust your intervention accordingly.',
      'When annotating, model the difference between identifying a technique and analysing its effect. Many students can spot a tricolon but struggle to explain why three items are more powerful than two or four.',
      "The 'mouthpiece' discussion is crucial for AO2. Students who can discuss the Inspector as a dramatic device rather than a realistic character will access higher mark bands.",
      'For the speech delivery plenary, if no volunteers come forward, the teacher should deliver it - modelling how rhetoric works in practice is powerful.',
      'Memorisation homework is demanding but essential. Suggest strategies: write it out three times, record yourself and listen back, teach it to a family member, break it into three sections and learn one per evening.',
    ],
    targetedSkills: [
      'AO1: Detailed critical response with memorised quotations',
      'AO2: Analysis of language, rhetoric and dramatic structure',
      "AO3: Linking the speech to Priestley's socialist context and the 1945 audience",
      'Close reading and annotation of a key passage',
      'Identifying and explaining rhetorical techniques',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 7: Character Study - Arthur Birling vs Inspector Goole
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-7-birling-vs-inspector',
    title: 'Character Study: Arthur Birling vs Inspector Goole',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Compare and contrast how Priestley presents Birling and the Inspector as ideological opposites',
      'Analyse how Priestley uses the two characters to dramatise the conflict between capitalism and socialism',
      "Explore how language, stagecraft and structure position the audience to reject Birling and accept the Inspector's message",
      "Write a comparative analytical response linking both characters to Priestley's purpose",
    ],
    successCriteria: [
      'I can explain how Birling and the Inspector represent opposing ideologies',
      'I can analyse specific methods Priestley uses to undermine Birling and elevate the Inspector',
      "I can compare the two characters' language, status and function in the play",
      'I can write a sustained comparative response from memory',
    ],
    keywords: [
      'ideological conflict',
      'capitalism',
      'socialism',
      'antagonist',
      'foil',
      'authority',
      'omniscience',
      'allegorical',
    ],
    starterActivity: {
      title: 'Two Columns: Birling vs the Inspector',
      duration: '7 minutes',
      instructions:
        "Students draw a line down the centre of their page: 'Birling' on the left, 'The Inspector' on the right. In 3 minutes, they list as many contrasts as they can from memory - appearance, language, beliefs, behaviour, effect on other characters, what happens to them. Pair-share and add to lists. Teacher collects the most insightful contrasts on the board. Key contrasts to establish: Birling speaks at length but says nothing wise; the Inspector speaks concisely but with devastating authority. Birling represents the past; the Inspector represents the future. Birling is named and known; the Inspector is mysterious and unknowable.",
      differentiation: {
        support:
          'Provide category headings to structure the comparison: Appearance, Language, Beliefs, Relationship with other characters, Role in the play.',
        core: 'Students generate contrasts independently across multiple aspects of both characters.',
        stretch:
          "Students should identify which contrasts are most important for understanding Priestley's message and explain why.",
      },
      resources: ['Exercise books/paper'],
    },
    mainActivities: [
      {
        title: 'Language Comparison: Speeches Side by Side',
        duration: '18 minutes',
        instructions:
          "Students receive a worksheet with two extracts side by side: Birling's speech about looking after yourself ('a man has to mind his own business and look after himself and his own') and the Inspector's final speech ('We are members of one body. We are responsible for each other.'). Task 1 (8 minutes): Students annotate both speeches, identifying contrasts in: pronoun use (I/he vs we), sentence type (declarative vs imperative), tone (confident/pompous vs urgent/prophetic), imagery, and worldview. Task 2 (5 minutes): In pairs, students complete a comparison grid: Feature | Birling | Inspector | What this reveals. Task 3 (5 minutes): Whole-class discussion - teacher draws out that Priestley structures these two speeches as the thesis and antithesis of the play. Birling's speech is the problem; the Inspector's speech is the solution.",
        differentiation: {
          support:
            'Provide the comparison grid partially completed with feature names and one example row filled in.',
          core: 'Students complete annotations and grid independently, covering at least five features.',
          stretch:
            "Students should discuss why Priestley places Birling's speech at the beginning and the Inspector's at the end - what is the structural argument?",
        },
        resources: ['Side-by-side speech extract worksheet', 'Comparison grid', 'Highlighters'],
      },
      {
        title: 'Status and Power: Who Wins?',
        duration: '12 minutes',
        instructions:
          "Teacher introduces the concept of status transactions - in every scene, characters gain or lose status. Students track the power dynamic between Birling and the Inspector through three key moments: (1) The Inspector's arrival - Birling tries to assert authority ('I was an alderman for years - and Lord Mayor two years ago'); (2) The interrogation - the Inspector takes control ('One person and one line of inquiry at a time'); (3) The Inspector's exit - he delivers his final speech and leaves on his own terms. For each moment, students write: Who has higher status? What methods does Priestley use to show this? Why does it matter? Whole-class feedback: Priestley systematically strips Birling of authority and transfers it to the Inspector, mirroring the transfer of power from capitalism to socialism that Priestley hoped for in 1945.",
        differentiation: {
          support:
            'Provide the three moments with quotations already selected; students focus on answering the three analysis questions.',
          core: 'Students analyse all three moments with their own quotation selections and detailed explanations.',
          stretch:
            "Students should also consider the end of Act 3, when Birling briefly regains confidence after learning the Inspector may not be real - what does Priestley achieve by giving Birling a temporary 'victory' before the final phone call?",
        },
        resources: ['Status tracking worksheet'],
      },
      {
        title: 'Comparative Essay: Birling vs the Inspector',
        duration: '15 minutes',
        instructions:
          "Students write a comparative response: 'How does Priestley use the characters of Mr Birling and Inspector Goole to present conflicting ideas about responsibility?' Aim for three paragraphs: (1) How Birling represents capitalist individualism and why Priestley undermines him, (2) How the Inspector represents socialist collective responsibility and why Priestley elevates him, (3) How the conflict between them is resolved - or not - and what this means for Priestley's message. All from memory, embedding quotations. Teacher circulates and uses a monitoring sheet to record which students include context, methods, and quotations. Brief whole-class feedback in final 2 minutes on the most common missed element.",
        differentiation: {
          support:
            'Provide a sentence starter for each paragraph and a quotation bank of six quotations (three per character).',
          core: 'Students plan and write independently from memory with at least two quotations per paragraph.',
          stretch:
            "Students should discuss the Inspector's allegorical nature - is he a ghost, a divine figure, a representation of conscience? How does this affect the comparison with the very human, very flawed Birling?",
        },
        resources: ['Sentence starters and quotation bank (support)', 'Lined paper'],
      },
    ],
    plenaryActivity: {
      title: 'Prosecution and Defence',
      duration: '8 minutes',
      instructions:
        "Split the class in half: one side prosecutes Birling's worldview (arguing it is dangerous and selfish), the other defends it (arguing it is pragmatic and realistic). Each side has 2 minutes to prepare three arguments, then 1 minute each to present. Teacher adjudicates and asks: 'Which side does Priestley want to win?' Close by emphasising that the play is not a balanced debate - Priestley deliberately loads the argument in the Inspector's favour. This is a didactic play, and understanding that is essential for exam success.",
      differentiation: {
        support: 'Provide argument cards with key points and quotations for each side.',
        core: 'Students prepare their own arguments using textual evidence.',
        stretch:
          "Students on the 'defence' side must argue convincingly despite personally disagreeing - developing their ability to consider alternative interpretations.",
      },
      resources: ['Argument cards (support)'],
    },
    homework:
      'Create a detailed comparison table for Birling and the Inspector covering: key quotations (3 each), methods Priestley uses to present them, their role in the play, and how they connect to the themes of capitalism vs socialism. This should serve as a revision resource.',
    worksheetQuestions: [
      {
        question:
          'How does Priestley use Mr Birling and Inspector Goole as ideological foils? Explain what each character represents.',
        lines: 8,
        modelAnswer:
          "Priestley creates Birling and the Inspector as ideological foils - characters whose opposing beliefs illuminate each other. Birling represents capitalist individualism: his philosophy that 'a man has to mind his own business and look after himself and his own' prioritises self-interest over community. The Inspector represents socialist collective responsibility: his insistence that 'we are members of one body' and 'we are responsible for each other' argues for a society built on mutual care. By placing these two worldviews in direct conflict, Priestley dramatises the political choice facing post-war Britain: return to the selfish pre-war values Birling embodies, or build a new society based on the Inspector's vision of collective responsibility.",
        marks: 5,
      },
      {
        question:
          "Analyse how Priestley uses dramatic irony to undermine Birling's authority. Give at least two examples.",
        lines: 8,
        modelAnswer:
          "Priestley uses dramatic irony to systematically destroy Birling's credibility. Birling's confident assertion that the Titanic is 'unsinkable, absolutely unsinkable' is proven wrong by the 1945 audience's knowledge that it sank, killing over 1,500 people. His dismissal of the possibility of war - claiming it is impossible - is contradicted by two world wars. These errors of judgment are not accidental: Priestley deliberately makes Birling wrong about every major prediction to ensure the audience cannot trust him on anything, including his capitalist philosophy. If Birling is wrong about the Titanic and war, the audience is positioned to conclude he is equally wrong about social responsibility.",
        marks: 5,
      },
      {
        question:
          "How does the Inspector's language differ from Birling's? What does this reveal about each character?",
        lines: 8,
        modelAnswer:
          "Birling's language is verbose, self-aggrandising and full of personal pronouns: he delivers long speeches about 'I' and 'my' experience, peppered with references to his social status. The Inspector's language is concise, authoritative and collective: he uses 'we', asks direct questions, and delivers moral judgments in short, powerful sentences. Birling rambles to fill space and assert dominance; the Inspector speaks only when necessary, and each word carries weight. This contrast reveals that Birling's authority is superficial - based on wealth and bluster - while the Inspector's authority is moral and genuine. Priestley uses these contrasting speech patterns to position the audience: Birling talks but says nothing of value; the Inspector speaks and changes everything.",
        marks: 5,
      },
      {
        question:
          "Why does Priestley make the Inspector's identity mysterious? How does this affect his role in the play?",
        lines: 6,
        modelAnswer:
          "Priestley makes the Inspector's identity mysterious to elevate him beyond a realistic character into an allegorical or symbolic figure. If the Inspector were simply a police officer, his authority would be limited to law enforcement. By making him unexplained - possibly supernatural, possibly a manifestation of collective conscience - Priestley gives his message universal moral authority. The mystery also prevents the Birlings (and the audience) from dismissing the Inspector as a mere official: his message transcends his identity. The name 'Goole' - suggesting 'ghoul' - reinforces his otherworldly status.",
        marks: 4,
      },
      {
        question:
          'How does Priestley use the structure of the play to position the audience against Birling and in favour of the Inspector?',
        lines: 8,
        modelAnswer:
          "Priestley structures the play so that Birling's worldview is established and then systematically dismantled. Birling's capitalist speech comes at the very beginning, when the family feels secure, and is immediately undercut by the Inspector's arrival. Throughout the play, each revelation proves Birling's philosophy wrong - his 'looking after himself' has contributed to Eva's destruction. The Inspector's final speech comes at the end, functioning as the moral verdict on everything the audience has witnessed. Priestley ensures the Inspector has the last word before he exits, while Birling is left scrambling to deny the truth. The final phone call - announcing a real inspector is on the way - delivers the ultimate structural blow to Birling's attempts to evade responsibility.",
        marks: 5,
      },
      {
        question:
          'How does Priestley use the characters of Mr Birling and Inspector Goole to present conflicting ideas about responsibility? Write a detailed comparative response.',
        lines: 14,
        modelAnswer:
          "Priestley uses Birling and the Inspector as embodiments of two irreconcilable worldviews: capitalist individualism and socialist collective responsibility. Birling's declaration that 'a man has to mind his own business and look after himself and his own' establishes the play's central thesis to be challenged. His language is characterised by first-person pronouns and possessive determiners - 'himself', 'his own' - reflecting a philosophy of self-interest. Priestley then uses dramatic irony to discredit this worldview: Birling's confident predictions about the Titanic and the impossibility of war are proven catastrophically wrong, ensuring the audience rejects his moral authority along with his factual judgments. The Inspector, by contrast, represents everything Birling opposes. His final speech - 'We are members of one body. We are responsible for each other' - uses collective pronouns and declarative sentences to articulate Priestley's socialist vision. Where Birling's language excludes (concerned only with 'himself and his own'), the Inspector's language includes (embracing all of society as 'one body'). Priestley reinforces this contrast structurally: Birling speaks first but is proven wrong; the Inspector speaks last and his message is vindicated by the final phone call. The play's resolution confirms Priestley's argument: collective responsibility is not merely desirable but necessary, and those who deny it - like Birling - will be forced to confront it 'in fire and blood and anguish'.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "This comparative lesson is excellent preparation for exam questions that ask about a single character but implicitly require comparison (e.g., 'How does Priestley present Mr Birling?' almost always benefits from a comparison with the Inspector).",
      'The side-by-side speech analysis is a powerful visual tool. If possible, display both speeches on the board simultaneously throughout the lesson.',
      "Push students to understand that Priestley's play is not a balanced debate - it is a polemic. The Inspector is designed to win. Students who describe the play as 'showing both sides' are missing Priestley's didactic intent.",
      "The prosecution/defence plenary can generate heated debate. Use it to reinforce that understanding Birling's perspective (even while disagreeing) is a skill examiners reward - the best responses consider alternative interpretations.",
      "Key quotations to reinforce: 'a man has to mind his own business and look after himself and his own' (Birling), 'We are members of one body' (Inspector), 'One person and one line of inquiry at a time' (Inspector's authority), 'I was an alderman for years' (Birling's status anxiety).",
      "The Inspector's name 'Goole' - sounding like 'ghoul' - is a small but powerful point for AO2. Ensure students note this.",
    ],
    targetedSkills: [
      'AO1: Comparative critical response with sustained argument',
      'AO2: Analysis of contrasting language, structure and dramatic methods',
      'AO3: Linking characters to political context (capitalism vs socialism)',
      'Comparative writing skills (integrating two characters in one response)',
      'Understanding authorial intent in a didactic text',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 8: Theme - Social Responsibility
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-8-social-responsibility',
    title: 'Theme: Social Responsibility',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Priestley explores the theme of social responsibility across the whole play',
      'Examine how different characters represent different attitudes toward responsibility',
      'Explore how structure, the Inspector, and the ending reinforce the theme',
      'Write a thematic essay response suitable for AQA Paper 2 from memory',
    ],
    successCriteria: [
      'I can explain how each main character embodies a different attitude toward responsibility',
      'I can analyse specific methods Priestley uses to convey his message about responsibility',
      "I can discuss how the play's structure reinforces the theme of collective responsibility",
      'I can write a sustained thematic response from memory with embedded quotations and context',
    ],
    keywords: [
      'social responsibility',
      'collective responsibility',
      'individualism',
      'moral accountability',
      'chain of events',
      'catalyst',
      'systemic',
      'welfare state',
    ],
    starterActivity: {
      title: 'Responsibility Ranking',
      duration: '8 minutes',
      instructions:
        "Students are given cards with the names of the five main characters (Birling, Mrs Birling, Sheila, Eric, Gerald). In pairs, they rank them from most to least responsible for Eva's death. They must justify their ranking with brief reasons. After 3 minutes, pairs compare rankings with another pair and debate any differences. Whole-class discussion: Is it possible to rank them? Teacher introduces the key idea: Priestley's point is that they are all responsible - the chain of events is collective, not individual. Eva's death is caused by a system, not a single person. This is the theme of social responsibility.",
      differentiation: {
        support:
          "Provide a sentence frame: 'I ranked ___ as most responsible because they...' and a reminder of what each character did.",
        core: 'Students rank independently with textual justifications.',
        stretch:
          "Students should argue that the ranking exercise is itself flawed - because Priestley's message is about collective, not comparative, responsibility.",
      },
      resources: ['Character name cards', 'Reminder sheet (support)'],
    },
    mainActivities: [
      {
        title: 'Mapping Responsibility Across the Play',
        duration: '15 minutes',
        instructions:
          "Students create a responsibility map on A3 paper. In the centre: Eva Smith. Around her: each of the five main characters. For each character, students write: (1) What they did to Eva, (2) A key quotation showing their attitude to responsibility, (3) Whether they accept or reject responsibility by the end. Students then draw connecting lines between characters to show how their actions form a chain. Teacher circulates and asks probing questions: 'What connects Birling sacking Eva to Sheila getting her fired from Milwards?' 'If Mrs Birling had helped Eva, would Eric's involvement have mattered?' Whole-class discussion: Priestley shows that responsibility is interconnected - each character's failure enables the next. This is his structural argument for collective responsibility.",
        differentiation: {
          support:
            'Provide a template with character names positioned around Eva and sentence starters for each section.',
          core: 'Students complete the map independently with detailed quotations and analysis.',
          stretch:
            'Students add a second layer: for each character, identify which theme is most relevant to their involvement (class, gender, age, power) and explain why.',
        },
        resources: ['A3 paper', 'Coloured pens', 'Template (support)'],
      },
      {
        title: 'Accept vs Reject: The Ending and Responsibility',
        duration: '12 minutes',
        instructions:
          "Focus on Act 3 after the Inspector leaves. Teacher recaps: Birling and Mrs Birling try to dismiss the Inspector's visit; Sheila and Eric insist the lesson remains valid regardless. Students work in pairs to complete a table: 'Characters who accept responsibility' (Sheila, Eric) vs 'Characters who reject responsibility' (Birling, Mrs Birling, Gerald - though Gerald is more ambiguous). For each column, students find: (1) A quotation showing their position, (2) An explanation of what this reveals about their character/generation, (3) A link to Priestley's message. Key discussion: Why does Priestley end the play with the phone call announcing another inspector? Students should understand that the phone call is Priestley's structural guarantee that responsibility cannot be evaded - those who tried to escape it (the older generation) are forced to confront it again.",
        differentiation: {
          support:
            'Provide quotations for each column and ask students to match them to the correct character and write explanations.',
          core: 'Students select their own quotations and write detailed explanations for both columns.',
          stretch:
            "Students should write a paragraph on the significance of the phone call as a structural device - what does it represent? How does it ensure the audience leaves with Priestley's message?",
        },
        resources: ['Two-column table worksheet', 'Quotation bank (support)'],
      },
      {
        title: 'Exam-Style Essay: Social Responsibility',
        duration: '18 minutes',
        instructions:
          "Students write a full exam-style response: 'How does Priestley explore the theme of social responsibility in An Inspector Calls?' This is a timed exercise - 18 minutes mirrors the rough time allocation for one question on AQA Paper 2. Students should aim for 4 paragraphs: (1) How Birling represents the rejection of responsibility, (2) How the Inspector represents collective responsibility, (3) How the younger generation (Sheila/Eric) offer hope for change, (4) How the structure of the play reinforces the theme (the chain of events, the ending). Teacher does not interrupt during writing time. After 18 minutes, students count their paragraphs, quotations, and contextual references. Self-assess against the mark scheme criteria displayed on the board.",
        differentiation: {
          support:
            'Provide a planning grid with the four paragraph focuses and two suggested quotations per paragraph.',
          core: 'Students plan independently and aim for four paragraphs from memory with at least six quotations total.',
          stretch:
            'Students should aim for five paragraphs, adding a discussion of Eva Smith as a symbol of the working class and the significance of her being absent from the stage.',
        },
        resources: [
          'Planning grid (support)',
          'AQA mark scheme criteria on board',
          'Lined paper',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Message in One Sentence',
      duration: '7 minutes',
      instructions:
        "Each student writes one sentence summarising Priestley's message about social responsibility. Teacher selects 5-6 to read aloud. Class votes on which best captures the theme. Teacher then displays the 'gold standard' sentence: 'Priestley argues that all members of society are collectively responsible for each other's welfare, and that the selfish individualism of the upper classes leads to the suffering of the most vulnerable.' Students copy this into their books as a touchstone for revision. Final discussion: How does this message connect to the world today?",
      differentiation: {
        support:
          "Provide a sentence frame: 'Priestley's message about social responsibility is that...'",
        core: 'Students compose their sentence independently.',
        stretch:
          "Students should write two versions: one summarising Priestley's message and one explaining how a modern audience might apply it.",
      },
      resources: ['Mini whiteboards or paper'],
    },
    homework:
      "Using your responsibility map and essay plan from today, write or refine a full exam response to: 'How does Priestley explore the theme of social responsibility in An Inspector Calls?' Aim for 40-45 minutes of focused writing. Bring your response to next lesson for peer marking.",
    worksheetQuestions: [
      {
        question:
          'How does Priestley use the structure of the play - the chain of events - to convey his message about collective responsibility?',
        lines: 8,
        modelAnswer:
          "Priestley structures the play so that each character's mistreatment of Eva Smith is revealed in sequence, forming a chain of events that leads to her death. No single character is solely responsible; instead, their individual acts of selfishness combine to destroy her. Birling sacks her, Sheila gets her fired from Milwards, Gerald uses and abandons her, Mrs Birling denies her charity, and Eric exploits her. Priestley uses this chain to argue that responsibility is collective and systemic - it is the interconnected failures of the privileged class, not one person's cruelty, that creates victims like Eva. The structure itself becomes an argument for socialism: in an interconnected society, individual selfishness has collective consequences.",
        marks: 6,
      },
      {
        question:
          "Compare how Birling and Sheila respond to the idea of responsibility. What does their difference reveal about Priestley's message?",
        lines: 8,
        modelAnswer:
          "Birling consistently rejects responsibility. He defends his decision to sack Eva as a normal business practice and, even after the Inspector's visit, tries to dismiss the whole event. His response reveals a character incapable of moral growth, trapped in his capitalist worldview. Sheila, by contrast, accepts responsibility immediately: 'I behaved badly too. I know I did. I'm ashamed of it.' Even after the Inspector is revealed as potentially fraudulent, Sheila insists their guilt remains. Priestley uses this contrast to argue that the older generation - entrenched in pre-war capitalist values - cannot change, but the younger generation can. The difference represents Priestley's hope for post-war Britain: that the young would reject their parents' selfishness and build a more socially responsible society.",
        marks: 6,
      },
      {
        question:
          'What is the significance of the final phone call in the play? How does it relate to the theme of responsibility?',
        lines: 6,
        modelAnswer:
          "The final phone call - announcing that a girl has died and a real police inspector is on the way - is structurally devastating. It comes just as Birling and Mrs Birling have convinced themselves that the Inspector was a hoax and that they can escape responsibility. The phone call proves that responsibility cannot be evaded: even if the first Inspector was not 'real', the consequences of the family's actions are. Priestley uses this ending to reinforce his message that moral responsibility exists regardless of legal or official accountability. It also functions as a cyclical structure, suggesting that history will repeat itself if the lesson is not learned.",
        marks: 5,
      },
      {
        question:
          "How does Priestley present Eva Smith's absence from the stage as significant to the theme of social responsibility?",
        lines: 6,
        modelAnswer:
          "Eva Smith never appears on stage - we only hear about her through the accounts of the Birling family and the Inspector. Her absence is significant because it represents how the working class are silenced and made invisible by the upper classes. The Birlings have the power to speak; Eva does not. Priestley forces the audience to reconstruct Eva's suffering through the words of those who caused it, which implicates the audience in the same power dynamic. Eva's absence also makes her a universal symbol: she could be any working-class woman exploited by the privileged, which strengthens Priestley's argument that social responsibility must be systemic, not individual.",
        marks: 5,
      },
      {
        question:
          "Explain how the Inspector's line 'We are members of one body' connects to Priestley's political beliefs about social responsibility.",
        lines: 6,
        modelAnswer:
          "The line 'We are members of one body' encapsulates Priestley's socialist belief that society is a collective organism in which every person is connected and every person matters. The metaphor of 'one body' suggests that harm to any part damages the whole - just as the Birlings' individual acts of cruelty combined to destroy Eva. For Priestley, social responsibility is not optional charity but a fundamental truth about human existence. This line connects to his support for the welfare state and his belief that post-war Britain should be rebuilt on principles of mutual care rather than the selfish individualism that had characterised the Edwardian era.",
        marks: 4,
      },
      {
        question:
          'How does Priestley explore the theme of social responsibility in An Inspector Calls? Write a detailed thematic response referring to the whole play.',
        lines: 16,
        modelAnswer:
          "Priestley explores social responsibility as the central moral argument of An Inspector Calls, using character, structure, and rhetoric to argue that all members of society are collectively accountable for each other's welfare. The play opens with Birling articulating the opposing view - capitalist individualism - in his assertion that 'a man has to mind his own business and look after himself and his own'. Priestley immediately undermines this through dramatic irony: Birling's wrong predictions about the Titanic and war destroy his credibility, positioning the audience to reject his philosophy. The Inspector's investigation then provides the evidence against individualism: each Birling has contributed to Eva Smith's death through individual acts of selfishness - sacking, jealousy, exploitation, charity denied. Priestley structures these revelations as a chain, demonstrating that responsibility is collective and interconnected. No single character killed Eva; the system killed her. The Inspector's final speech delivers the explicit message: 'We are members of one body. We are responsible for each other.' The collective pronoun 'we' includes the audience, and the warning of 'fire and blood and anguish' connects to the 1945 audience's experience of two world wars - the consequence of the social irresponsibility Birling represents. Crucially, Priestley divides the characters' responses along generational lines: Sheila and Eric accept responsibility, while Birling and Mrs Birling deny it. This represents Priestley's hope that the younger generation would build the welfare state and reject the selfish values of the past. The final phone call ensures that responsibility cannot be evaded, reinforcing Priestley's argument that moral accountability is inescapable.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'This is the key thematic lesson. Social responsibility is the most commonly examined theme and students must be able to write about it with confidence and depth.',
      "The ranking starter deliberately leads to 'you can't rank them' - this is the point. Be prepared for some students to resist this conclusion. Use it as a teaching moment about collective vs individual responsibility.",
      'The timed essay (18 minutes) is crucial exam preparation. Resist the urge to extend the time - students need to learn to write at exam pace. Many will find 18 minutes challenging; use this as a diagnostic.',
      'The responsibility map is one of the most useful revision resources in the scheme. Consider displaying completed examples on the wall or sharing digitally.',
      "Emphasise that AQA rewards responses that discuss 'the whole play' - a response that only discusses Act 1 or only discusses the Inspector's speech will be limited. The best responses range across all three acts.",
      "The homework essay should be peer-marked in the next lesson using the AQA mark scheme. This develops students' understanding of what examiners reward.",
    ],
    targetedSkills: [
      'AO1: Sustained thematic response covering the whole play',
      'AO2: Analysis of structure, language and dramatic methods',
      "AO3: Linking theme to Priestley's socialist context and purpose",
      'Writing under timed conditions at exam pace',
      'Synthesising character analysis into a thematic argument',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 9: Theme - Gender and Generational Divide
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-9-gender-generational-divide',
    title: 'Theme: Gender and Generational Divide',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Priestley explores attitudes toward women in 1912 and challenges them for a 1945 audience',
      'Examine the generational divide between the older and younger Birlings and its significance',
      "Explore how gender and generation intersect in the play's treatment of responsibility and change",
      'Write analytically about gender and generational themes from memory',
    ],
    successCriteria: [
      'I can analyse how different characters represent different attitudes toward women',
      "I can explain the significance of the generational divide in relation to Priestley's message",
      'I can discuss how gender and generation intersect using specific textual evidence',
      'I can write a sustained analytical response on these themes from memory',
    ],
    keywords: [
      'patriarchy',
      'gender roles',
      'generational divide',
      'Edwardian values',
      'objectification',
      'agency',
      'double standards',
      'social mobility',
    ],
    starterActivity: {
      title: "Who Has Power? Who Doesn't?",
      duration: '8 minutes',
      instructions:
        "Display a power hierarchy pyramid on the board with four tiers. Students must place the following characters/groups on the pyramid and justify: Mr Birling, Mrs Birling, Sheila, Eric, Gerald, the Inspector, Eva Smith, working-class women. Discuss in pairs for 3 minutes. Whole-class feedback: What determines someone's power in this play - gender, class, age, or all three? Key point: Eva Smith sits at the very bottom as a young, working-class woman. She has no power against any of the other characters. Priestley shows that gender and class intersect to create the most vulnerable members of society.",
      differentiation: {
        support: 'Provide the pyramid template with two characters already placed as models.',
        core: 'Students place all characters independently and justify at least three placements.',
        stretch:
          "Students should discuss where the Inspector fits - he has moral power but no clear social power. What does this tell us about Priestley's values?",
      },
      resources: ['Power pyramid template', 'Character name cards'],
    },
    mainActivities: [
      {
        title: 'Gender in the Play: How Are Women Treated?',
        duration: '15 minutes',
        instructions:
          "Students create a four-quadrant analysis page. Each quadrant focuses on one female character/figure: Sheila, Mrs Birling, Eva Smith, and 'women in general' (as discussed by the male characters). For each quadrant, students write: (1) How this character is treated by men in the play, (2) A key quotation showing attitudes toward them, (3) How Priestley challenges or reinforces these attitudes. Key quotations to draw on: Birling on the engagement as a business deal; Gerald 'installing' Daisy; Mrs Birling's 'girls of that class'; Sheila's transformation from 'pretty' fiancee to moral conscience. Teacher circulates and pushes students to connect: How does Eva's treatment by each male character reveal something about patriarchal attitudes? Whole-class feedback focusing on how Priestley critiques a society that treats women as possessions, commodities, or charity cases.",
        differentiation: {
          support:
            'Provide key quotations for each quadrant and ask students to write the analysis only.',
          core: 'Students select their own quotations and complete all four quadrants independently.',
          stretch:
            "Students add a fifth section: 'How Priestley challenges patriarchy' - discussing whether the play is feminist or whether it still centres male experience.",
        },
        resources: ['Four-quadrant analysis worksheet', 'Quotation bank (support)'],
      },
      {
        title: 'The Generational Divide: Old vs Young',
        duration: '15 minutes',
        instructions:
          "Teacher delivers a brief input (3 minutes) on the significance of the generational divide: Priestley wrote for a 1945 audience that was deciding whether to rebuild Britain on old or new values. The older Birlings represent the pre-war establishment; the younger characters represent the hope of change. Students then work in pairs to create a comparison table: 'Older generation (Birling, Mrs Birling)' vs 'Younger generation (Sheila, Eric)'. Rows should cover: Attitude to Eva, Response to guilt, Attitude to the Inspector, What happens to them at the end, What they represent for Priestley's message. Gerald should be discussed as an ambiguous figure - young in age but aligned with the older generation in his final response. After 10 minutes of pair work, teacher leads feedback, drawing out that the generational divide is Priestley's structural argument for change: the old ways must be rejected in favour of the new.",
        differentiation: {
          support:
            'Provide the comparison table with row headings and one example per column completed as a model.',
          core: 'Students complete the table independently with detailed textual evidence.',
          stretch:
            "Students should write a paragraph on Gerald's ambiguous position - why does Priestley make him young in age but old in attitude? What does this suggest about the limits of generational change?",
        },
        resources: ['Comparison table worksheet', 'Template (support)'],
      },
      {
        title: 'Essay Writing: Gender and Generation',
        duration: '15 minutes',
        instructions:
          "Students choose one of two essay questions and write a response from memory: Option A: 'How does Priestley explore attitudes toward women in An Inspector Calls?' Option B: 'How does Priestley use the generational divide to convey his message about change and responsibility?' Students should aim for three developed paragraphs in 15 minutes. Teacher circulates and targets students who are struggling with paragraph openings or quotation recall. In the final 2 minutes, students swap essays with a partner and write one specific strength and one improvement target on the back.",
        differentiation: {
          support:
            'Provide a planning frame for each option with paragraph focuses and two suggested quotations per paragraph.',
          core: 'Students select their question and write independently from memory.',
          stretch:
            'Students should attempt to address both gender and generation in a single response, showing how they intersect.',
        },
        resources: ['Planning frames (support)', 'Lined paper'],
      },
    ],
    plenaryActivity: {
      title: 'Modern Connections',
      duration: '7 minutes',
      instructions:
        "Display three modern headlines on the board (e.g., 'Gender pay gap persists in 2020s', 'Young people more likely to support climate action than older generations', 'Working-class women disproportionately affected by austerity'). Students discuss in pairs: How do these connect to the themes of gender and generation in An Inspector Calls? Would Priestley be surprised by these headlines? Class feedback. Teacher closes: Priestley's play remains relevant because the issues of gender inequality and generational conflict have not been resolved. The play is not just a historical document - it is a continuing challenge.",
      differentiation: {
        support:
          "Provide a sentence frame: 'This headline connects to the play because Priestley shows that...'",
        core: "Students make independent connections between modern headlines and the play's themes.",
        stretch:
          "Students should evaluate whether the play's message about gender has aged well or whether Priestley's treatment of women is itself limited by his time.",
      },
      resources: ['Headline slides'],
    },
    homework:
      'Write a response to whichever essay question you did NOT choose in class today (Option A or B). Aim for 30 minutes of focused writing from memory. Bring both essays to the next lesson for comparison.',
    worksheetQuestions: [
      {
        question:
          'How does Priestley present attitudes toward women in An Inspector Calls? Refer to at least two characters.',
        lines: 8,
        modelAnswer:
          "Priestley presents a range of attitudes toward women, all of which reveal the patriarchal nature of Edwardian society. Birling treats women as business assets - his daughter's engagement is valued for its commercial potential. Gerald 'installs' Daisy Renton, treating her as a possession to be placed and removed at his convenience. Mrs Birling, despite being a woman, enforces patriarchal standards by condemning Eva for having 'fine feelings' above her 'position'. Priestley critiques all of these attitudes by showing their consequences: Eva Smith, a young working-class woman with no power, is destroyed by a society that treats her as expendable. Through Sheila's transformation, Priestley suggests that challenging these attitudes is possible - but only if society is willing to change.",
        marks: 6,
      },
      {
        question:
          'Explain the significance of the generational divide between the older and younger Birlings. Why does Priestley create this division?',
        lines: 8,
        modelAnswer:
          "Priestley creates the generational divide to embody the political choice facing post-war Britain. The older Birlings - Arthur and Sybil - represent the entrenched values of the Edwardian upper-middle class: they deny responsibility, prioritise appearances, and refuse to change. The younger Birlings - Sheila and Eric - represent the possibility of moral growth: they accept guilt, challenge their parents, and align with the Inspector's message. Priestley creates this division because he wanted to persuade his 1945 audience that the younger generation must reject the values that had led to two world wars and build a society based on collective responsibility. The generational divide is Priestley's structural argument for social transformation.",
        marks: 5,
      },
      {
        question:
          'How does Priestley present Eva Smith as a victim of both gender and class oppression?',
        lines: 8,
        modelAnswer:
          "Eva Smith is presented as a victim of intersecting oppressions: she suffers because she is working class and because she is a woman. As a worker, she is sacked by Birling for asking for fair wages and fired from Milwards at Sheila's whim. As a woman, she is exploited sexually by Gerald and Eric, and denied charity by Mrs Birling because she dared to use the Birling name. Priestley shows that working-class women occupied the most vulnerable position in Edwardian society - they had no economic security, no social power, and no recourse to justice. Eva's absence from the stage reinforces this: she has no voice, and her story is told entirely through those who harmed her.",
        marks: 5,
      },
      {
        question:
          "Why is Gerald's position in the generational divide ambiguous? What does Priestley achieve by making him difficult to categorise?",
        lines: 6,
        modelAnswer:
          "Gerald is young in age but ultimately aligns with the older generation's response: after the Inspector leaves, he is the one who investigates whether the Inspector was genuine and leads the attempt to dismiss the whole event. Priestley makes Gerald ambiguous to show that generational change is not automatic - being young does not guarantee moral growth. Gerald has the capacity for feeling (his relationship with Daisy shows genuine emotion) but ultimately chooses to protect his social position rather than accept responsibility. Priestley uses Gerald to warn that privilege and self-interest can prevent even young people from embracing change.",
        marks: 4,
      },
      {
        question:
          'How does Priestley challenge the patriarchal treatment of women through the character of Sheila?',
        lines: 8,
        modelAnswer:
          "Priestley uses Sheila's transformation to challenge patriarchal attitudes from within the privileged class. At the start of the play, Sheila conforms to the expected role of an upper-middle-class woman: she is delighted by her engagement ring, addresses her mother as 'Mummy', and is presented as decorative and compliant. However, through the Inspector's investigation, Sheila develops moral authority that surpasses every male character in the play. She challenges Gerald's infidelity, confronts her parents' hypocrisy, and articulates the play's moral argument with clarity: 'But these girls aren't cheap labour - they're people.' Priestley uses Sheila to show that women are capable of moral leadership when freed from patriarchal expectations - a powerful message for a 1945 audience witnessing women's expanded roles after wartime.",
        marks: 5,
      },
      {
        question:
          'How does Priestley use the theme of the generational divide to convey his message about responsibility and change? Write a detailed response.',
        lines: 14,
        modelAnswer:
          "Priestley uses the generational divide as his primary structural device for arguing that social change is both necessary and possible. The older Birlings - Arthur and Sybil - are characterised by their resistance to the Inspector's message. Birling's assertion that 'a man has to look after himself and his own' represents the capitalist individualism of the pre-war era, and his response to the investigation is to deny, deflect, and ultimately attempt to discredit the Inspector entirely. Mrs Birling's refusal to accept any blame - 'I did nothing I'm ashamed of' - represents the moral blindness of the upper classes. Priestley presents both characters as beyond redemption: they cannot change because their identities are built on the very values that destroyed Eva Smith. The younger Birlings offer a stark contrast. Sheila's transformation - from materialistic fiancee to moral conscience - demonstrates that self-examination and genuine shame can lead to growth. Eric's blunt acknowledgment that 'We did her in all right' shows the younger generation's capacity for honest self-assessment. Priestley aligns Sheila and Eric with the Inspector's message, positioning them as the characters the audience should emulate. For the 1945 audience, the generational divide would have been deeply resonant: the older generation had created the conditions for two world wars, and the younger generation was tasked with building a new society. Priestley uses the play to argue that this new society must be built on collective responsibility - and that the greatest danger is repeating the mistakes of the past.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'This lesson covers two interconnected themes. If time is tight, focus on one and set the other as extended homework. However, strong exam responses often address both themes simultaneously.',
      "The power pyramid starter generates excellent discussion about intersectionality - even if you don't use that term. Guide students to see that Eva Smith's vulnerability comes from the intersection of her gender and class.",
      'Be aware that discussing gender in the play may prompt questions about whether Priestley himself was a feminist. He was progressive for his time but the play still centres male experience - Eva is defined entirely through the men and women who harmed her. Higher-ability students may find this a productive tension to explore.',
      "Gerald's ambiguous position in the generational divide is a sophisticated point. Push higher-ability students to discuss him in the 'accept vs reject' framework from Lesson 8.",
      'The modern connections plenary can be powerful but needs careful selection of headlines. Choose examples that are clearly relevant and avoid anything too politically contentious for the classroom context.',
      "Key quotations for this lesson: 'girls of that class', 'I installed her', 'these girls aren't cheap labour - they're people', 'I did nothing I'm ashamed of', 'We did her in all right'.",
    ],
    targetedSkills: [
      'AO1: Sustained thematic response covering gender and generation',
      'AO2: Analysis of characterisation, structure and language as methods',
      'AO3: Understanding of Edwardian patriarchy and post-war social change',
      'Exploring the intersection of multiple themes in a single response',
      'Writing analytically from memory under timed conditions',
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 10: Exam Skills - AQA Paper 2 Essay from Memory
  // ─────────────────────────────────────────────
  {
    id: 'aic-lesson-10-exam-skills-aqa-essay',
    title: 'Exam Skills: AQA Paper 2 Essay from Memory',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand the requirements and mark scheme of AQA Paper 2 Section A (An Inspector Calls)',
      'Develop a strategic approach to planning and structuring an essay from memory in exam conditions',
      'Practise writing a full-length essay response within the time allocation',
      'Self- and peer-assess using the AQA mark scheme to identify strengths and targets',
    ],
    successCriteria: [
      'I can explain what AQA examiners are looking for in a Paper 2 Section A response',
      'I can plan an essay in 5 minutes with a clear structure and quotation selection',
      'I can write a sustained, analytical essay from memory in approximately 45 minutes',
      "I can accurately assess my own and others' work using the AQA mark scheme",
    ],
    keywords: [
      'assessment objectives',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'mark scheme',
      'thesis statement',
      'essay structure',
      'time management',
    ],
    starterActivity: {
      title: 'Decoding the Mark Scheme',
      duration: '10 minutes',
      instructions:
        "Display the AQA mark scheme descriptors for Band 5-6 (the top bands) on the board. Students read in pairs and highlight key words and phrases: 'critical, exploratory', 'convincing', 'judicious use of precise references', 'analysis of writer's methods', 'detailed understanding of context'. Teacher unpacks each phrase: What does 'judicious' mean? (Choosing quotations carefully, not dumping in every quotation you know.) What does 'exploratory' mean? (Considering alternative interpretations, not just one reading.) What does 'writer's methods' mean? (Talking about Priestley's choices - language, structure, form, stagecraft - not just what happens.) Display a simplified checklist on the board that students can use throughout the lesson: (1) Clear argument/thesis, (2) Quotations from memory, (3) Analysis of methods, (4) Links to Priestley's intentions, (5) Context woven in, (6) Covers the whole play.",
      differentiation: {
        support:
          'Provide a simplified mark scheme with key phrases underlined and definitions in brackets.',
        core: 'Students decode the mark scheme in pairs and create their own checklist.',
        stretch:
          "Students should compare Band 3-4 with Band 5-6 descriptors and identify the specific differences - what moves a response from 'good' to 'excellent'?",
      },
      resources: [
        'AQA mark scheme descriptors (printed or displayed)',
        'Simplified version (support)',
        'Highlighters',
      ],
    },
    mainActivities: [
      {
        title: 'Planning Under Pressure: 5-Minute Essay Plans',
        duration: '12 minutes',
        instructions:
          "Teacher reveals the essay question: 'How does Priestley use the character of Inspector Goole to convey his ideas about social responsibility?' Students have exactly 5 minutes to plan their response. Teacher models the planning process on the board simultaneously: Step 1 (1 minute) - Identify 3-4 key points that cover the whole play. Step 2 (2 minutes) - Select 2 quotations per point from memory. Step 3 (1 minute) - Note the methods and context links for each point. Step 4 (1 minute) - Write a thesis statement (one sentence capturing your overall argument). After 5 minutes, students share plans in pairs and add anything they missed. Teacher displays a model plan for comparison and discusses: Why is it important to plan? (It prevents repetition, ensures whole-play coverage, and gives you a roadmap so you don't lose time.) Emphasise that 5 minutes of planning saves time in the long run.",
        differentiation: {
          support:
            "Provide a planning template with four numbered paragraph boxes, each containing prompts: 'Point:', 'Quotation 1:', 'Quotation 2:', 'Method:', 'Context link:'",
          core: 'Students plan independently using whatever method they prefer (bullet points, spider diagram, numbered list).',
          stretch:
            "Students should plan for two possible essay questions simultaneously - the revealed question and a backup: 'How does Priestley explore the theme of social responsibility?' - to practise adaptability.",
        },
        resources: ['Planning template (support)', 'Timer on board'],
      },
      {
        title: 'Timed Essay Writing',
        duration: '30 minutes',
        instructions:
          "Students write their full essay response in silence under exam conditions. The question remains displayed on the board: 'How does Priestley use the character of Inspector Goole to convey his ideas about social responsibility?' Time allocation: 30 minutes (this is slightly compressed from the real exam's approximate 45 minutes to allow for the planning and assessment activities). Teacher circulates silently, making notes on common issues but not intervening. Ensure all students are writing - prompt any who are stuck by pointing to their plan. At 15 minutes, quietly announce 'halfway' so students can pace themselves. At 25 minutes, announce '5 minutes remaining' so students can write a conclusion if they haven't already.",
        differentiation: {
          support:
            'Students may use their planning template and a quotation revision sheet (not the full text). This mirrors the scaffolded approach they need to move away from but provides a safety net for now.',
          core: 'Students write entirely from memory with no notes or resources.',
          stretch:
            "Students should aim to include an alternative interpretation in at least one paragraph (e.g., 'Some audiences might view the Inspector as an intrusive, authoritarian figure, but Priestley positions him as...').",
        },
        resources: [
          'Lined paper or exam paper',
          'Timer on board',
          'Quotation revision sheet (support only)',
        ],
      },
      {
        title: 'Peer Assessment Using the Mark Scheme',
        duration: '8 minutes',
        instructions:
          "Students swap essays with a partner. Each student reads their partner's essay and completes a peer assessment sheet with the following sections: (1) Band - which AQA band does this response fit? (2) AO1 - Is there a clear argument with textual references? Circle the best quotation used. (3) AO2 - Does the response analyse Priestley's methods? Underline one strong analytical sentence. (4) AO3 - Is context woven in? Star any contextual reference. (5) Two specific strengths. (6) One specific target for improvement (not 'write more' - something actionable like 'analyse the effect of a specific word' or 'link your final paragraph to context'). Students return essays with the peer assessment sheet. 2 minutes for students to read their feedback and write a one-sentence action target at the bottom of their essay.",
        differentiation: {
          support:
            'Provide a simplified peer assessment sheet with tick-boxes and sentence frames for strengths and targets.',
          core: 'Students complete the full peer assessment independently with detailed comments.',
          stretch:
            'Students should write a brief model sentence demonstrating the improvement they have suggested - showing, not just telling.',
        },
        resources: [
          'Peer assessment sheets',
          'AQA mark scheme descriptors for reference',
          'Simplified version (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Top Tips Wall',
      duration: '5 minutes (remaining time)',
      instructions:
        "Each student writes one exam tip on a sticky note based on what they learned today - it could be about planning, timing, quotation selection, analytical writing, or mark scheme requirements. Students place their sticky notes on a designated wall or board space. Teacher reads out 4-5 of the best and adds them to a 'Top Tips' display that remains visible for revision. Close by asking: 'What is the single most important thing you need to do between now and the exam to improve your An Inspector Calls response?' Students write their answer on the back of their essay as a personal target.",
      differentiation: {
        support: "Provide a tip prompt: 'One thing I learned about exam writing today is...'",
        core: 'Students generate their own tip based on personal reflection.',
        stretch:
          'Students should write a tip that would help someone else - demonstrating their understanding of common pitfalls and how to avoid them.',
      },
      resources: ['Sticky notes', 'Display board'],
    },
    homework:
      'Rewrite your essay from today, incorporating the feedback from your peer assessor. You should aim to move up at least one band. Spend 45 minutes - the full exam time allocation. Bring both versions (original and rewrite) to the next lesson so you can track your improvement.',
    worksheetQuestions: [
      {
        question:
          'What are the four Assessment Objectives for AQA English Literature, and what does each one require?',
        lines: 8,
        modelAnswer:
          "AO1 requires a personal and informed response to the text, supported by references (quotations or specific examples from the text). AO2 requires analysis of the writer's methods - how language, structure, form and stagecraft create meaning and effects, using relevant subject terminology. AO3 requires understanding of the relationship between the text and its context - how the historical, social and cultural setting shapes the writer's choices and the text's meaning. AO4 (worth only 4 marks for this question) requires accurate spelling, punctuation and grammar, and the use of a wide vocabulary and varied sentence structures.",
        marks: 4,
      },
      {
        question:
          "Write a strong thesis statement for the following essay question: 'How does Priestley present the theme of social responsibility in An Inspector Calls?'",
        lines: 4,
        modelAnswer:
          'Priestley presents social responsibility as the defining moral challenge of his era, using the Inspector as a mouthpiece for socialist collective responsibility and the Birling family as a microcosm of the selfish individualism that Priestley believed had caused two world wars and must be rejected in post-war Britain.',
        marks: 3,
      },
      {
        question:
          "Explain what 'judicious use of precise references' means in the AQA mark scheme. Give an example of a judicious reference and a non-judicious one.",
        lines: 6,
        modelAnswer:
          '\'Judicious use of precise references\' means selecting quotations carefully so that each one is directly relevant to your argument and is then analysed in detail. A judicious reference would be: \'The Inspector\'s declaration that "we are members of one body" uses the collective pronoun and the metaphor of a shared body to articulate Priestley\'s socialist vision.\' A non-judicious reference would be: \'The Inspector says lots of things like "we are members of one body" and "fire and blood and anguish" and "one person and one line of inquiry at a time"\' - this lists quotations without analysing any of them in depth.',
        marks: 4,
      },
      {
        question:
          'What is the difference between a Band 3 response and a Band 5 response on the AQA mark scheme? Identify two key differences.',
        lines: 6,
        modelAnswer:
          "A Band 3 response shows 'clear understanding' and provides a 'clear explanation' of the text, with 'relevant references' and 'clear understanding of context'. A Band 5 response shows 'critical, exploratory' engagement with the text, with 'judicious use of precise references' and analysis that is 'convincing' with a 'detailed, perceptive understanding of context'. The key differences are depth (Band 5 analyses rather than explains) and sophistication (Band 5 explores alternative readings and makes precise, targeted references rather than general ones).",
        marks: 4,
      },
      {
        question:
          "Plan a response to: 'How does Priestley use the character of Mr Birling to convey his ideas about social responsibility?' Write your plan including four paragraph focuses with at least one quotation per paragraph.",
        lines: 10,
        modelAnswer:
          "Paragraph 1: Birling as the voice of capitalist individualism - 'a man has to mind his own business and look after himself and his own'. Analyse the possessive language and link to 1912 attitudes. Paragraph 2: Dramatic irony destroys Birling's credibility - 'unsinkable, absolutely unsinkable'. Explain how wrong predictions undermine his philosophy for the 1945 audience. Paragraph 3: Birling's treatment of Eva Smith - he sacked her for asking for a pay rise, treating workers as 'cheap labour'. Link to Priestley's critique of capitalism and workers' rights. Paragraph 4: Birling's response at the end - he tries to dismiss the Inspector and avoid responsibility, contrasting with Sheila and Eric. The phone call at the end proves responsibility cannot be evaded. Thesis: Priestley uses Birling to embody the capitalist values he believed had caused social destruction, systematically discrediting him to persuade the audience to reject individualism in favour of collective responsibility.",
        marks: 5,
      },
      {
        question:
          "Write a model analytical paragraph responding to: 'How does Priestley use the Inspector's final speech to convey his ideas about responsibility?' Your paragraph should include a quotation from memory, analysis of a method, and a link to context.",
        lines: 12,
        modelAnswer:
          "Priestley uses the Inspector's final speech as the rhetorical climax of the play, articulating his socialist message directly to the audience through the Inspector as his mouthpiece. The declaration that 'We are members of one body' uses the collective pronoun 'we' to include the audience in the moral argument - this is not a message for the Birlings alone but for everyone watching. The metaphor of 'one body' draws on both Christian theology and socialist philosophy to argue that all members of society are interconnected, and that harm to any part damages the whole. The subsequent warning - that failure to learn this lesson will result in 'fire and blood and anguish' - would have been devastatingly resonant for the 1945 audience, who had lived through the very consequences the Inspector describes. Priestley structures the speech as a conditional: accept collective responsibility, or face destruction. For post-war Britain, this was not an abstract argument but an urgent political choice, and Priestley uses the Inspector's prophetic authority to ensure his audience understood the stakes.",
        marks: 8,
      },
      {
        question:
          'Identify three common mistakes students make in AQA Paper 2 An Inspector Calls essays and explain how to avoid each one.',
        lines: 8,
        modelAnswer:
          "First, retelling the story rather than analysing it - students describe what happens instead of explaining how and why Priestley presents it that way. To avoid this, always begin sentences with 'Priestley uses/presents/conveys' rather than 'Birling says' or 'The Inspector does'. Second, not covering the whole play - students focus only on one act or one moment. To avoid this, plan before writing and ensure each paragraph covers a different part of the play. Third, bolting context on as a separate paragraph rather than weaving it in - a final paragraph that just lists historical facts will not score highly. To avoid this, link context to specific quotations within analytical paragraphs, showing how historical context shapes the meaning of the text.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'This is the most exam-focused lesson in the scheme. The 30-minute timed write is challenging but essential. Students need to experience writing under pressure before the real exam.',
      'The mark scheme decoding starter is high-value - many students have never read the actual mark scheme. Understanding what examiners want is half the battle.',
      'During the timed write, resist the urge to help students who are stuck. In the real exam, they will have no support. Note who struggles and provide targeted intervention in subsequent lessons.',
      "Peer assessment is a skill that needs modelling. Consider doing one whole-class peer assessment of an anonymous response before students assess each other's work. This calibrates their judgment.",
      'The planning activity is crucial. Many students lose marks not because they lack knowledge but because they fail to plan and end up with repetitive, poorly structured responses. 5 minutes of planning should become automatic.',
      "The rewrite homework is one of the most effective improvement strategies. Students who revise their work based on specific feedback consistently improve. Consider displaying 'before and after' paragraphs (anonymised) to show the class what improvement looks like.",
      'Remind students of the time split on the actual paper: AQA Paper 2 is 2 hours 15 minutes total. Section A (An Inspector Calls) should take approximately 45 minutes, including 5 minutes of planning and 40 minutes of writing.',
      'This lesson works well as the penultimate or final lesson before a mock exam or the real exam. It brings together all the knowledge and skills developed across the scheme.',
    ],
    targetedSkills: [
      'AO1: Sustained, critical personal response with precise textual references',
      "AO2: Analysis of writer's methods using subject terminology",
      'AO3: Contextual understanding woven into analysis',
      'AO4: Accurate spelling, punctuation and grammar',
      'Exam technique: planning, timing, structuring and self-assessment',
    ],
  },
]
