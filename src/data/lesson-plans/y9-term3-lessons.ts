import type { LessonPlan } from '@/types'

export const y9Term3Lessons: LessonPlan[] = [
  // ── Lesson 1: 1930s America - Context and the American Dream ─────────────
  {
    id: 'y9t3-01',
    title: '1930s America - Context and the American Dream',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand the historical context of 1930s America, including the Great Depression and the Dust Bowl (9R.1)',
      'Explain the concept of the American Dream and its relevance to the novella (9R.2)',
      'Connect contextual knowledge to specific characters and events in Of Mice and Men (9R.6)',
      'Practise integrating context into analytical writing rather than writing standalone context paragraphs (9W.3)',
    ],
    successCriteria: [
      'I can explain what caused the Great Depression and describe its effects on ordinary Americans',
      'I can define the American Dream and explain why it was central to 1930s culture',
      'I can connect at least two pieces of contextual knowledge to specific moments in the novella',
      'I can write a sentence that weaves context into an analytical point rather than stating it separately',
    ],
    keywords: [
      'Great Depression',
      'American Dream',
      'Dust Bowl',
      'migrant worker',
      'bindle',
      'itinerant',
      'context',
      'authorial intent',
      'social realism',
    ],
    starterActivity: {
      title: 'What Do You Already Know? - Image Gallery Walk',
      duration: '8 minutes',
      instructions:
        'Display six images around the room: a Dust Bowl photograph, a breadline queue, a migrant family\'s car piled with belongings, a Hollywood glamour photograph from the 1930s, a ranch bunkhouse, and an image of the Wall Street Crash newspaper front page. Students circulate and write one word or phrase on a sticky note next to each image capturing what it makes them think or feel. Teacher gathers responses and builds a shared mind map on the board, drawing connections between the images and introducing the phrase "1930s America."',
      differentiation: {
        support:
          'Provide a word bank of contextual terms (e.g. poverty, migration, inequality, desperation, aspiration) to help students articulate their responses.',
        core: 'Students write spontaneous responses and begin to draw connections between images.',
        stretch:
          'Students write a sentence for at least two images linking what they see to a possible theme in a novel set in this period, justifying their prediction.',
      },
      resources: [
        'Six historical images printed or displayed digitally',
        'Sticky notes and pens',
        'Blank mind-map template on board',
      ],
    },
    mainActivities: [
      {
        title: 'Context Reading and Annotation',
        duration: '22 minutes',
        instructions:
          'Distribute the Context Information Sheet covering: the Wall Street Crash, unemployment figures (25% by 1933), the Dust Bowl, migrant ranch workers, and the American Dream. Students read in pairs, highlighting what they consider the three most important facts and annotating with "This matters because..." for each. Teacher then leads a 5-minute whole-class discussion, drawing out the key idea that George and Lennie\'s world is shaped entirely by these forces. Students complete a two-column chart: one column for historical fact, one for how it connects to something they have already read or know about the novella.',
        differentiation: {
          support:
            'Provide a pre-annotated version of the sheet with one "This matters because..." example completed. Students add two more of their own.',
          core: 'Students annotate the full sheet and complete the two-column chart independently.',
          stretch:
            "Students write a paragraph using the two-column chart, integrating at least two contextual points into an analytical statement about Steinbeck's purpose rather than simply listing facts.",
        },
        resources: [
          'Context Information Sheet (Great Depression, Dust Bowl, American Dream)',
          'Two-column chart template',
          'Class copies of Of Mice and Men',
        ],
      },
      {
        title: 'Contextual Writing Practice',
        duration: '18 minutes',
        instructions:
          'Model the difference between a "context dumped" paragraph and an "integrated context" paragraph using two examples on the board. Highlight what makes the second version stronger. Students then write their own integrated analytical sentence in response to the prompt: "How does the historical context of the 1930s shape the lives of George and Lennie?" They draft, swap with a partner, give written feedback using the success criteria, then revise. Teacher circulates and offers targeted feedback, particularly praising instances where students avoid the "standalone context paragraph" trap.',
        differentiation: {
          support:
            'Provide a sentence frame: "Steinbeck sets the novella during the Great Depression, a period when [historical detail], which explains why [character/event in text]."',
          core: 'Students write two to three sentences integrating context into analysis, then revise after peer feedback.',
          stretch:
            'Students write a full analytical paragraph (Point, Evidence, Explain, Context) and evaluate how effectively context supports their argument rather than simply decorating it.',
        },
        resources: [
          'Model paragraph examples displayed on board',
          'Peer feedback prompts (What works? What could be stronger?)',
          'PEEC paragraph scaffold for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Three Facts, One Connection - Exit Ticket',
      duration: '7 minutes',
      instructions:
        'Students write on a slip of paper: three key contextual facts they have learned today, and one specific connection between a contextual fact and a character or event in the novella. Teacher collects slips and uses them to identify misconceptions and strong examples to share at the start of the next lesson.',
      differentiation: {
        support:
          'Provide sentence frames: "One fact I have learned is... This connects to the novella because..."',
        core: 'Students write all three facts and one clear connection in their own words.',
        stretch:
          "Students include a comment on Steinbeck's authorial intent: what he wanted readers to think or feel by setting the novella in this period.",
      },
    },
    homework:
      "Research one aspect of 1930s America not covered in class (e.g. Jim Crow laws, women's rights, the role of Hollywood). Write a paragraph explaining what you found and how it might connect to Of Mice and Men.",
    worksheetQuestions: [
      {
        question:
          'What was the Great Depression? Give two specific details about its impact on ordinary Americans.',
        lines: 4,
        modelAnswer:
          'The Great Depression was a period of severe economic collapse that followed the Wall Street Crash of 1929. By 1933, approximately 25% of working-age Americans were unemployed. Banks collapsed, savings were wiped out, and many families lost their homes. This context is essential for understanding why characters like George and Lennie have no permanent home and move desperately from ranch to ranch.',
        marks: 4,
      },
      {
        question:
          'What was the Dust Bowl, and how did it affect the people Steinbeck was writing about?',
        lines: 4,
        modelAnswer:
          'The Dust Bowl was an environmental disaster caused by drought and over-farming that devastated the Great Plains in the 1930s. It destroyed agriculture across Oklahoma, Texas, and Kansas, forcing hundreds of thousands of farming families to migrate west to California seeking work. These displaced migrants became the ranch workers Steinbeck depicts in the novella - rootless, dispossessed, and vulnerable.',
        marks: 4,
      },
      {
        question:
          'What is the American Dream? How does Steinbeck engage with this concept in Of Mice and Men?',
        lines: 5,
        modelAnswer:
          "The American Dream is the belief that anyone in America, regardless of birth or background, can achieve success and prosperity through hard work. Steinbeck engages with this concept by showing that for migrant workers in the 1930s, the Dream was an illusion. George and Lennie's farm represents the Dream, but it is systematically destroyed, suggesting that the economic and social system makes genuine independence impossible for the working poor.",
        marks: 5,
      },
      {
        question:
          'Rewrite the following sentence so that context is integrated into analysis rather than presented separately: "The Great Depression caused mass unemployment. George and Lennie are migrant workers."',
        lines: 5,
        modelAnswer:
          'A strong integrated version might read: "George and Lennie\'s existence as rootless migrant workers reflects the reality of the Great Depression, during which mass unemployment forced millions of men to travel between jobs with no security, no home, and no prospect of permanence - a social reality Steinbeck uses to establish the emotional stakes of their shared dream." The key is connecting the historical detail directly to a character or idea in the text.',
        marks: 4,
      },
      {
        question:
          'Why is it important to integrate context into analytical writing rather than writing a separate "context paragraph"?',
        lines: 4,
        modelAnswer:
          "Integrated context demonstrates understanding of how historical and social forces directly shape the meaning of the text. A standalone context paragraph simply lists historical facts and does not show analytical skill. Examiners reward students who connect context to specific quotations, characters, and authorial choices, showing that history is not background decoration but the very fabric from which the novella's meaning is woven.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'Some students may arrive with limited or no prior knowledge of the Great Depression. The gallery walk is designed to activate curiosity rather than assumed knowledge - treat it as a discovery activity, not a recall test.',
      'The distinction between "context dumped" and "integrated context" is the key pedagogical lesson of this unit. Introduce it firmly here and reinforce it in every subsequent lesson. Students who are aiming for top grades need to make this a habit.',
      'When sharing the 25% unemployment statistic, pause and make it concrete: "In a class of 30, that would be 7 or 8 people with no income at all." This helps students grasp the scale of the crisis.',
      'If time allows, show a 60-second clip from the documentary footage of the Dust Bowl or the PBS "Dust Bowl" documentary to bring the context alive before the reading activity.',
      'Students from refugee or migrant backgrounds may find personal resonance with the material. Handle sensitively and use as an opportunity to build empathy rather than making assumptions about individual experiences.',
    ],
    targetedSkills: [
      '9R.1 - Reading for meaning and context',
      '9R.2 - Retrieval and identification',
      '9R.6 - Evaluating authorial intent',
      '9W.3 - Integrating evidence and context in analytical writing',
    ],
  },

  // ── Lesson 2: George and Lennie - An Unusual Friendship ──────────────────
  {
    id: 'y9t3-02',
    title: 'George and Lennie - An Unusual Friendship',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse the relationship between George and Lennie and explain why it is unusual in its context (9R.2)',
      "Explore Steinbeck's use of animal imagery and foil characterisation (9R.4)",
      "Discuss the ambiguity of the novella's ending and evaluate George's final act (9R.6)",
      'Write an analytical paragraph about the relationship using embedded quotations (9W.4)',
    ],
    successCriteria: [
      "I can explain why Slim considers George and Lennie's friendship unusual",
      'I can analyse at least two examples of animal imagery used to describe Lennie',
      "I can discuss the complexity of George's character, including his frustration and his loyalty",
      'I can write an analytical paragraph with an embedded quotation and a contextual link',
    ],
    keywords: [
      'foil',
      'animal imagery',
      'companionship',
      'loyalty',
      'dependency',
      'ambiguity',
      'intellectual disability',
      'foreshadowing',
      'characterisation',
    ],
    starterActivity: {
      title: 'Unusual Friendships - Discussion Prompt',
      duration: '7 minutes',
      instructions:
        'Pose the question: "Can a friendship be genuine if the two people are not equal?" Students discuss in pairs for two minutes, then share with the class. Record key ideas on the board. Teacher then reads Slim\'s line: "Funny how you an\' him string along together." Ask: what does Slim\'s observation tell us about the world these characters inhabit? Establish the key contextual point that migrant workers almost never travelled in pairs.',
      differentiation: {
        support:
          'Provide a prompt card with three possible reasons why two people might form an unlikely friendship (shared goals, mutual need, habit) to scaffold discussion.',
        core: 'Students discuss freely and share one developed point.',
        stretch:
          "Students consider whether unequal friendships might actually be stronger than equal ones, and whether Steinbeck invites us to view George and Lennie's relationship as equal or exploitative.",
      },
      resources: [
        "Slim's quotation displayed on board",
        'Discussion prompt cards for support students',
      ],
    },
    mainActivities: [
      {
        title: 'Close Reading - George and Lennie in Chapter 1',
        duration: '22 minutes',
        instructions:
          'Direct students to the opening chapter. Read together the passage beginning "A few miles south of Soledad..." through to where George tells Lennie to "just come back an\' report." Students annotate for: (a) examples of animal imagery describing Lennie, (b) evidence of George\'s frustration, (c) evidence of George\'s care. Take whole-class feedback. Then students write individual annotations in response to: "What does Steinbeck want us to understand about this relationship from the very first page?" Teacher models how to move from noticing a technique to analysing its effect using specific language: "The verb [x] suggests...", "The comparison to [animal] implies...".',
        differentiation: {
          support:
            'Provide a pre-highlighted extract with three quotations already marked. Students write one annotation for each marked quotation using the sentence frames provided.',
          core: 'Students annotate the full passage and identify at least three points covering animal imagery, frustration, and care.',
          stretch:
            "Students consider how the opening chapter creates reader sympathy for both characters simultaneously, and write a sentence explaining the dual effect - why we sympathise with George's frustration and with Lennie's vulnerability at the same time.",
        },
        resources: [
          'Class copies of Of Mice and Men (Chapter 1)',
          'Pre-highlighted extract for support students',
          'Annotation colour code guide (red = animal imagery, blue = frustration, green = care)',
        ],
      },
      {
        title: 'Analytical Paragraph Writing - The Relationship',
        duration: '18 minutes',
        instructions:
          'Students write a full analytical paragraph in response to: "How does Steinbeck present the relationship between George and Lennie in Chapter 1?" Model a strong paragraph on the board (Point - Evidence - Explain - Context) before students begin. Emphasise embedding quotations (not just inserting them with a colon) and including a contextual link (the rarity of companionship among migrant workers). Students write for 12 minutes, then use the last 6 minutes for peer assessment using three specific criteria: embedded quotation, language analysis, and contextual link.',
        differentiation: {
          support:
            'Provide a paragraph frame: "Steinbeck presents the relationship as [adjective] through [technique]. For example, [embedded quotation]. This suggests [explanation]. In the context of [historical detail], this is significant because [link]."',
          core: 'Students write a full independent paragraph following the PEEC structure.',
          stretch:
            "Students write two contrasting paragraphs: one exploring George's frustration and one exploring his loyalty, then write a concluding sentence that holds both ideas in tension.",
        },
        resources: [
          'Model paragraph displayed on board',
          'PEEC paragraph frame for support students',
          'Peer assessment criteria strip',
        ],
      },
    ],
    plenaryActivity: {
      title: "Hot Take - Is George's Final Act Love or Murder?",
      duration: '8 minutes',
      instructions:
        'Present the question: "George\'s killing of Lennie is an act of love, not murder. Do you agree?" Students write their view in one sentence, then share and defend. Teacher challenges students to find textual evidence for both sides. Establish that the ambiguity is deliberate and that strong essays explore rather than resolve it. Students add the word "ambiguity" to their keyword glossary.',
      differentiation: {
        support:
          'Provide two "evidence cards" - one with a quotation supporting the "act of love" reading and one supporting the "murder" reading - to help students formulate their view.',
        core: 'Students form their own view and support it with reference to the text.',
        stretch:
          'Students argue that the question itself is a false binary, explaining why Steinbeck deliberately refuses to let the reader reach a simple judgement.',
      },
    },
    homework:
      'Find three quotations about the dream of the farm (at least one from Chapter 1 and one from Chapter 3). For each quotation, write two sentences: one analysing what the language suggests, and one linking it to the historical context.',
    worksheetQuestions: [
      {
        question:
          "Why does Slim describe George and Lennie's friendship as unusual? What does this tell us about the world they live in?",
        lines: 5,
        modelAnswer:
          'Slim says he has "hardly never seen two guys travel together," which highlights how rare genuine companionship is among migrant ranch workers. In the context of the Great Depression, men moved alone out of necessity - competing for scarce jobs, trusting no one. George and Lennie\'s friendship therefore marks them as extraordinary and makes their eventual separation all the more devastating.',
        marks: 5,
      },
      {
        question:
          'Identify two examples of animal imagery used to describe Lennie in Chapter 1. What does each suggest about his character?',
        lines: 6,
        modelAnswer:
          'Steinbeck describes Lennie drinking from the pool "like a horse," which suggests he acts on animal instinct without rational thought. He also describes Lennie\'s hands as "paws," implying great physical power combined with a lack of fine motor control or deliberate cruelty. Both images emphasise his physicality and his inability to regulate his own strength - key to understanding the tragedy that follows.',
        marks: 6,
      },
      {
        question:
          "How does Steinbeck show both George's frustration with Lennie and his genuine affection for him in Chapter 1?",
        lines: 5,
        modelAnswer:
          'George\'s frustration is shown when he tells Lennie his life "would be so easy" without him, yet his affection is revealed when he recites the dream of the farm in response to Lennie\'s pleading. He tells the dream with both weariness and tenderness - it is clearly a ritual they have repeated many times. Steinbeck presents George as a complex figure whose resentment and love coexist, reflecting the genuine cost of compassion in a harsh world.',
        marks: 5,
      },
      {
        question:
          'What is a foil character? How are George and Lennie used as foils for each other?',
        lines: 4,
        modelAnswer:
          "A foil is a character whose contrasting qualities highlight another character's traits. George and Lennie are foils: George is small, sharp, and quick-thinking, while Lennie is physically enormous but intellectually limited. Their contrasts make each other's qualities more vivid - George's intelligence seems sharper against Lennie's simplicity, and Lennie's gentleness seems more poignant against the harsh world George navigates on his behalf.",
        marks: 4,
      },
      {
        question:
          'Write an analytical paragraph in response to: "How does Steinbeck use language to present Lennie in Chapter 1?" Include at least one embedded quotation.',
        lines: 8,
        modelAnswer:
          'Steinbeck uses persistent animal imagery to present Lennie as physically powerful but intellectually innocent. He describes Lennie drinking "snorting into the water like a horse," a simile that positions Lennie as instinct-driven rather than rational - he satisfies his needs without thought or self-awareness. The verb "snorting" carries a suggestion of unconscious, animalistic behaviour, reinforcing the idea that Lennie cannot moderate his own impulses. In the context of the 1930s ranch world, where men were expected to be tough and self-controlled, this characterisation positions Lennie as perpetually vulnerable - a man whose gentleness and lack of control will be exploited or destroyed by a society that has no place for those who are different.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'The word "disability" needs careful handling. Steinbeck never uses this term - he simply shows Lennie\'s behaviour. Encourage students to use respectful, accurate language in their essays ("intellectual disability" or "learning difficulty") and to avoid dismissive terms like "stupid." The aim is analytical precision, not clinical diagnosis.',
      'Some students may struggle with the ambiguity of the ending. Validate both responses (it is an act of love / it is still killing) and make clear that Steinbeck deliberately prevents a simple reading. The best analytical writing inhabits this uncertainty rather than resolving it.',
      'The peer assessment in the paragraph writing activity works best if students have internalised the three criteria before they begin writing. Write them clearly on the board and briefly model what each looks like in a strong paragraph.',
      'If the class has not yet read Chapter 1, this lesson can be used as a pre-reading prediction lesson, with the close reading completed for homework or in a subsequent lesson.',
    ],
    targetedSkills: [
      '9R.2 - Identifying and retrieving key information',
      '9R.4 - Analysing language and technique',
      '9R.6 - Evaluating authorial intent and ambiguity',
      '9W.4 - Analytical paragraph writing with embedded quotation',
    ],
  },

  // ── Lesson 3: Curley's Wife - A Marginalised Voice ───────────────────────
  {
    id: 'y9t3-03',
    title: "Curley's Wife - A Marginalised Voice",
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse Steinbeck's presentation of Curley's wife as a victim of patriarchal society (9R.4)",
      "Explore the significance of Curley's wife having no name (9R.6)",
      "Distinguish between how male characters perceive Curley's wife and how Steinbeck presents her to the reader (9R.5)",
      'Write analytically about gender, power, and marginalisation (9W.4)',
    ],
    successCriteria: [
      "I can explain why Steinbeck chose not to give Curley's wife a name and what this reveals",
      "I can identify the gap between the male characters' perception and the reader's understanding",
      "I can analyse at least two moments where Steinbeck generates sympathy for Curley's wife",
      "I can connect her characterisation to the context of women's lives in 1930s America",
    ],
    keywords: [
      'patriarchy',
      'marginalisation',
      'dramatic irony',
      'perception',
      'sympathy',
      'objectification',
      'autonomy',
      'double marginalisation',
      'power',
    ],
    starterActivity: {
      title: 'Name or No Name? - Discussion Provocation',
      duration: '8 minutes',
      instructions:
        'Present students with two headings on the board: "Characters with names" and "Characters without names." Ask students to name as many characters from the novella as they can. Establish that every named character is male and that the only woman in the novella is never given a name. Pose the question: "Why might an author deliberately leave a character unnamed? Is this an insult or a comment?" Students discuss in pairs, then share. Teacher introduces the concept of patriarchy and writes the definition on the board.',
      differentiation: {
        support:
          'Provide a list of character names from the novella for students to sort into the two categories.',
        core: 'Students sort from memory and discuss the implications of their findings.',
        stretch:
          "Students consider whether leaving Curley's wife nameless is an act of criticism by Steinbeck or an act of sympathy - can it be both? How?",
      },
      resources: [
        'Two-column board display (names / no name)',
        'Character list for support students',
      ],
    },
    mainActivities: [
      {
        title: "Close Reading - Curley's Wife's Introduction and Her Monologue",
        duration: '22 minutes',
        instructions:
          "Students read two extracts: (1) the passage in Chapter 2 where Curley's wife first appears and the men react to her; (2) her speech to Lennie in Chapter 5 about her Hollywood dream. For the first extract, students annotate: how do the men describe her? What language does Steinbeck use in the stage directions/narration that differs from the men's view? For the second, students identify: what does her dream reveal about her character beyond what the men see? Teacher leads a discussion on dramatic irony - the gap between what the characters know and what the reader understands.",
        differentiation: {
          support:
            "Provide a two-column annotation sheet pre-labelled: 'What the men say/think' and 'What the reader is invited to understand.' Students fill in the columns using guided questions.",
          core: 'Students annotate both extracts independently and identify at least two examples of dramatic irony.',
          stretch:
            "Students write a comparative observation: how does Steinbeck's presentation of Curley's wife in Chapter 2 differ from Chapter 5, and what does this shift reveal about his purpose?",
        },
        resources: [
          'Printed extracts: Chapter 2 introduction and Chapter 5 monologue',
          'Two-column annotation sheet for support students',
          'Class copies of Of Mice and Men',
        ],
      },
      {
        title: 'Analytical Writing - Sympathy and Judgement',
        duration: '18 minutes',
        instructions:
          "Students respond in writing to: 'How does Steinbeck present Curley's wife as a victim of her society?' Remind students of the essay pitfall: do not call her a villain or blame her for the tragedy. Teacher models an opening analytical sentence that distinguishes between character perception and authorial presentation. Students write for 12 minutes. In the final 6 minutes, students highlight in their own paragraph: (a) one moment where they have analysed language, and (b) one moment where they have integrated context. If they cannot find these, they add them in.",
        differentiation: {
          support:
            "Provide three quotations with sentence starters: 'Steinbeck's use of [technique] in [quotation] suggests that Curley's wife is not [men's view] but rather [alternative reading], because...'",
          core: 'Students write an independent analytical paragraph incorporating quotation, language analysis, and contextual reference.',
          stretch:
            "Students write a paragraph that explicitly addresses Steinbeck's dual presentation: how he critiques patriarchy by showing the gap between the men's dehumanising view and the reader's more complex, empathetic understanding.",
        },
        resources: [
          'Model opening sentence displayed on board',
          'Quotation cards for support students',
          'Self-assessment highlight guide',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Two Truths About One Character',
      duration: '7 minutes',
      instructions:
        "Students write two true statements about Curley's wife that might seem contradictory - for example, 'She is presented as threatening by the men' and 'She is presented as a victim by Steinbeck.' Share statements with the class. Teacher uses these to reinforce the idea that complexity, not contradiction, is the mark of a sophisticated response. Students add 'dramatic irony' and 'double marginalisation' to their keyword glossary with their own definitions.",
      differentiation: {
        support:
          "Provide two sentence frames: 'Although [character]... Steinbeck actually...' to help students structure contradictory truths.",
        core: 'Students generate their own two contrasting statements independently.',
        stretch:
          "Students write a third statement that reconciles the first two, demonstrating how both can be true simultaneously and what that reveals about Steinbeck's craft.",
      },
    },
    homework:
      "Find the passage in Chapter 5 where Steinbeck describes Curley's wife after her death. Annotate it for: language that suggests peace or innocence, language that contrasts with how she was described while alive, and what Steinbeck's purpose might be in this description. Bring your annotations to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "Why does Steinbeck choose not to give Curley's wife a name? What does this choice tell the reader about her position in the novella's society?",
        lines: 5,
        modelAnswer:
          "The absence of a name is a deliberate authorial choice that reflects the patriarchal values of 1930s America. A woman's identity was defined entirely by her husband - she existed as a possession, not a person. By denying her a name, Steinbeck is not endorsing this erasure; he is critiquing it. The reader is invited to notice and resist the dehumanisation that the male characters accept without question.",
        marks: 5,
      },
      {
        question:
          "How do the male characters in the novella perceive Curley's wife, and how does Steinbeck want the reader to perceive her?",
        lines: 5,
        modelAnswer:
          "The male characters see Curley's wife as dangerous and flirtatious - George calls her a 'tart' and Candy warns the men to stay away from her. However, Steinbeck uses dramatic irony to invite readers to understand what the men cannot: she is desperately lonely, trapped in a loveless marriage, and seeking basic human connection. The gap between the men's hostile judgement and the reader's more empathetic understanding is central to Steinbeck's social critique.",
        marks: 5,
      },
      {
        question:
          "What was Curley's wife's dream? How does her dream reflect the novella's wider theme of disillusionment?",
        lines: 4,
        modelAnswer:
          "Curley's wife dreamed of being in the movies - a man told her she was a natural for pictures, but the promised letter never arrived. Her dream was almost certainly built on a false promise from a predatory man. Like George and Lennie's farm, her dream offered a vision of escape and self-determination that was systematically denied to her. Her Hollywood dream reinforces Steinbeck's argument that the American Dream exploits the vulnerable rather than liberating them.",
        marks: 4,
      },
      {
        question:
          "What is dramatic irony? Give one example of how Steinbeck uses dramatic irony in his presentation of Curley's wife.",
        lines: 4,
        modelAnswer:
          "Dramatic irony occurs when the reader understands more about a situation than the characters do. When Curley's wife wanders the ranch 'looking for somebody to talk to,' the men interpret this as flirtation and a threat. The reader, however, understands that she is lonely and seeking connection - she has no friends, no autonomy, and nothing to fill her days. The men's hostile misreading is part of the tragic irony that defines her existence.",
        marks: 4,
      },
      {
        question:
          "Analyse the following quotation: After Curley's wife's death, Steinbeck writes that 'the meanness and the plannings and the discontent and the ache for attention were all gone from her face.' What does this description reveal about Steinbeck's presentation of her?",
        lines: 6,
        modelAnswer:
          "The cumulative list - 'meanness,' 'plannings,' 'discontent,' 'ache for attention' - names the qualities that defined her in life. Crucially, Steinbeck presents these not as permanent traits but as the visible marks of suffering: they are 'gone' in death, replaced by 'youthful sweetness.' This suggests that everything the men judged her for was the result of loneliness and entrapment, not her true nature. In death she is finally free of the roles the ranch imposed on her. Steinbeck uses this moment to deliver his final argument: the woman the men called a 'tart' was a young girl whose potential was destroyed by a society that refused to see her as a person.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "Some students may initially sympathise with the male characters' view of Curley's wife, particularly if they have read her first appearance without context. The two-extract close reading is designed to shift this view - use the Chapter 5 monologue to rebuild a more complete picture.",
      'The concept of dramatic irony is introduced here but will be revisited in several subsequent lessons. It is one of the key analytical tools for this text, so ensure students can define it and apply it before moving on.',
      "Students from backgrounds where gender inequality remains prevalent may engage strongly with this material. Handle with sensitivity, framing the historical context as Steinbeck's critique rather than a universal truth.",
      "It is worth explicitly addressing the common exam mistake of calling Curley's wife a villain. Write it on the board: 'Avoid: She is the villain. Aim for: She is presented as a victim of a society that...' and ask students to revise any instance of this in their work.",
    ],
    targetedSkills: [
      '9R.4 - Analysing language, structure, and form',
      '9R.5 - Interpreting implied and explicit meaning',
      '9R.6 - Evaluating authorial intent',
      '9W.4 - Extended analytical writing',
    ],
  },

  // ── Lesson 4: Crooks and Discrimination ──────────────────────────────────
  {
    id: 'y9t3-04',
    title: 'Crooks - Racial Discrimination and the Limits of Aspiration',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse Steinbeck's presentation of Crooks as a victim of racial discrimination (9R.4)",
      "Explore the significance of Crooks's room as a symbol of segregation and isolation (9R.5)",
      'Examine the scene in which Crooks briefly allows himself to believe in the dream, and its destruction (9R.6)',
      'Write analytically about power, race, and aspiration using embedded quotation and context (9W.4)',
    ],
    successCriteria: [
      "I can explain how racial segregation shaped Crooks's daily life on the ranch",
      "I can analyse what Crooks's room symbolises about his position in the social hierarchy",
      "I can explain why Crooks's moment of hope is so significant and why its destruction is so devastating",
      'I can write a paragraph that integrates context about Jim Crow-era America into analysis of Crooks',
    ],
    keywords: [
      'segregation',
      'Jim Crow',
      'discrimination',
      'symbol',
      'isolation',
      'dignity',
      'power',
      'aspiration',
      'internalised oppression',
    ],
    starterActivity: {
      title: 'Where Does Crooks Sleep? - Mapping the Ranch',
      duration: '8 minutes',
      instructions:
        'Provide students with a simple sketch map of the ranch (bunkhouse, barn, Crooks\'s room, yard). Ask: "Where does each character sleep? What does this tell us about their status?" Students mark the map and discuss with a partner. Focus in on Crooks\'s separation from the bunkhouse - his room is attached to the barn, not the main living space. Ask: "What does this physical arrangement immediately tell us about how Crooks is treated?" Introduce the concept of segregation and explain briefly that while California did not have formal Jim Crow laws, racial prejudice was deeply embedded in social practice.',
      differentiation: {
        support:
          'Provide labels for the map with brief character descriptions to help students match names to locations.',
        core: 'Students complete the map independently and write one sentence about what the arrangement reveals.',
        stretch:
          'Students annotate the map with symbolic interpretations of each location, connecting spatial separation to social hierarchy.',
      },
      resources: ['Printed ranch sketch maps', 'Character labels for support students'],
    },
    mainActivities: [
      {
        title: "Close Reading - Crooks's Room (Chapter 4)",
        duration: '22 minutes',
        instructions:
          "Students read the passage in Chapter 4 where Steinbeck describes Crooks's room, from the opening description ('Crooks's bunk was a long box filled with straw...') through to Lennie's arrival. Students annotate for: (a) details that suggest Crooks has been denied full humanity (segregation, isolation), (b) details that suggest dignity, intelligence, and resistance (books, the civil code, his tidiness), (c) the moment Crooks shifts from hostility to tentative connection when Lennie visits. Teacher facilitates a discussion: why does Steinbeck give Crooks an ordered room full of books? What does this say about his character beneath the damage discrimination has done?",
        differentiation: {
          support:
            'Provide a three-section annotation template (Denied humanity / Dignity and resistance / Connection) with one example in each section to model the annotation task.',
          core: 'Students annotate the full passage across all three categories.',
          stretch:
            "Students write a sentence for each annotation explaining what Steinbeck wants the reader to understand about Crooks's inner life that the other ranch workers are unable to see.",
        },
        resources: [
          'Class copies of Of Mice and Men (Chapter 4)',
          'Three-section annotation template for support students',
        ],
      },
      {
        title: 'Crooks and the Dream - Hope and Its Destruction',
        duration: '18 minutes',
        instructions:
          "Students read two moments: (1) Crooks tentatively asking to join the dream of the farm; (2) Curley's wife entering and threatening him with lynching. After reading, pose the question: 'Why is this moment - hope raised and immediately destroyed - so central to the novella?' Students discuss briefly, then write a paragraph in response to: 'How does Steinbeck use Crooks to explore the theme of aspiration in Of Mice and Men?' Teacher circulates, encouraging students to connect Crooks's withdrawal from the dream to the broader argument that the social hierarchy makes hope impossible for the most marginalised.",
        differentiation: {
          support:
            "Provide the key quotations (Crooks asking to join the dream; Curley's wife's threat) and a sentence frame to help students structure their paragraph.",
          core: 'Students write an independent paragraph integrating at least two quotations and one contextual link.',
          stretch:
            "Students write two paragraphs: one exploring the significance of Crooks allowing himself hope, and one exploring the significance of him withdrawing it, then write a concluding sentence connecting both to Steinbeck's purpose.",
        },
        resources: [
          'Key quotation cards for support students',
          'Paragraph frame',
          'Class copies of Of Mice and Men',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Most Powerful Moment - Discussion and Vote',
      duration: '7 minutes',
      instructions:
        "Students vote (show of hands) on the most powerful moment in Crooks's characterisation: (a) the description of his segregated room, (b) his conversation with Lennie about loneliness, (c) his moment of hope asking to join the dream, or (d) Curley's wife's threat destroying that hope. After voting, three students defend their choice with a reason. Teacher closes by asking: 'What does the existence of Crooks's character tell us about what Steinbeck thought was wrong with his society?'",
      differentiation: {
        support:
          'Provide a brief summary sentence of each moment to help students recall and evaluate.',
        core: 'Students vote and defend their choice with a reference to the text.',
        stretch:
          "Students argue that the four moments form a deliberate arc in Steinbeck's characterisation, explaining the logic and purpose of each stage.",
      },
    },
    homework:
      "Crooks says: 'A guy goes nuts if he ain't got nobody. Don't make no difference who the guy is, long as he's with you.' Write a paragraph analysing this quotation. Include: language analysis, a connection to the theme of loneliness, and a link to historical context. Aim for five to eight sentences.",
    worksheetQuestions: [
      {
        question:
          'Why does Crooks live separately from the other ranch workers? What does this tell us about the society Steinbeck is depicting?',
        lines: 4,
        modelAnswer:
          "Crooks is racially segregated - he sleeps in a 'little shed' attached to the barn rather than in the bunkhouse with the white workers. This reflects the deeply entrenched racial prejudice of 1930s California. While formal Jim Crow laws were associated with the American South, racial segregation was widespread in social practice across America. Steinbeck makes this structural injustice visible by giving the reader direct access to Crooks's isolated space.",
        marks: 4,
      },
      {
        question:
          "What does the presence of a copy of the California civil code in Crooks's room suggest about his character?",
        lines: 4,
        modelAnswer:
          "The civil code represents Crooks's awareness of his legal rights. He is not ignorant of the law - he knows it. However, in a society governed by prejudice rather than fairness, legal rights offer no real protection. This detail reveals a painful irony: Crooks is intelligent and informed, yet entirely powerless. It also suggests he has not fully surrendered - he maintains the knowledge of his rights as a form of quiet, private resistance.",
        marks: 4,
      },
      {
        question:
          "Analyse the quotation: 'I seen hundreds of men come by on the road an\' on the ranches, with their bindles on their back an\' that same damn thing in their heads... an\' never a God damn one of 'em gets it.' What does this reveal about Crooks's worldview?",
        lines: 5,
        modelAnswer:
          "Crooks's use of 'hundreds' and the repeated 'same damn thing' conveys deep cynicism born from long observation. He has watched enough men cling to dreams to know they never materialise. The dismissive 'never a God damn one' reveals not cruelty but self-protection - if he does not believe, he cannot be hurt. His scepticism is not a character flaw but a rational response to a lifetime of watching hope destroyed by the system. Steinbeck uses Crooks here to voice the novella's bleakest possibility: that dreaming is a form of delusion.",
        marks: 5,
      },
      {
        question:
          'Why is the moment when Crooks asks to join the dream so significant? Why is its destruction immediately afterwards even more significant?',
        lines: 5,
        modelAnswer:
          "When Crooks tentatively asks to join the dream, it is one of the most emotionally powerful moments in the novella - a man who has spent years suppressing hope briefly allows himself to feel it. This makes the destruction of that hope by Curley's wife's racial threat all the more devastating. In one exchange, Steinbeck shows how racial power operates: even the most marginalised white woman can silence and diminish a Black man. Crooks's withdrawal - 'I didn't mean it. Jus' foolin'' - demonstrates how thoroughly discrimination has taught him to deny his own desires.",
        marks: 5,
      },
      {
        question:
          "Write an analytical paragraph in response to: 'How does Steinbeck use Crooks to explore the theme of loneliness?' Include an embedded quotation and a contextual link.",
        lines: 8,
        modelAnswer:
          "Steinbeck uses Crooks to present loneliness not as a personal condition but as the inevitable consequence of racial discrimination. Crooks tells Lennie, 'A guy goes nuts if he ain't got nobody,' a statement that reveals both his desperate need for connection and his understanding that it is being systematically denied to him. The informal dialect and the stark simplicity of 'nobody' carry enormous emotional weight - this is not philosophical musing but lived experience. In the context of racial segregation in 1930s America, Crooks's isolation is not self-imposed but structurally enforced: he sleeps alone, eats alone, and is excluded from the social rituals that create community among the white workers. Steinbeck presents this as a moral indictment of a society that destroys the humanity of those it marginalises.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'The topic of racism requires careful, informed handling. Make clear from the outset that Steinbeck is critiquing racism, not depicting it approvingly. If there are students from racially marginalised backgrounds in the class, be attentive to how this material lands and provide space for any feelings that arise.',
      'The California civil code detail is one of the richest in the novel. Students who notice it often produce the most sophisticated analysis. Draw explicit attention to it during the close reading if students do not identify it independently.',
      "Crooks's dialect is important - it is consistent with the other workers' dialect and should not be read as a marker of lower intelligence. Steinbeck uses all the workers' dialects authentically, and Crooks's speech is notably more complex and articulate than Lennie's.",
      'The parallel between Crooks and Candy (both marginalised, both drawn to the dream, both excluded from it) is worth flagging here, as it will be explored in more depth in subsequent lessons.',
    ],
    targetedSkills: [
      '9R.4 - Analysing language, symbolism, and characterisation',
      '9R.5 - Interpreting implied meaning',
      "9R.6 - Evaluating Steinbeck's social critique",
      '9W.4 - Analytical writing with embedded quotation and contextual integration',
    ],
  },

  // ── Lesson 5: The Ranch as Microcosm ─────────────────────────────────────
  {
    id: 'y9t3-05',
    title: 'The Ranch as Microcosm - Setting and Social Hierarchy',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse Steinbeck's use of setting to reflect and critique the social structure of 1930s America (9R.4)",
      'Understand the term microcosm and apply it to the ranch setting (9R.1)',
      "Explore how each key setting (bunkhouse, Crooks's room, barn, clearing) carries symbolic meaning (9R.5)",
      'Write an analytical paragraph about setting that connects physical space to thematic meaning (9W.4)',
    ],
    successCriteria: [
      'I can define microcosm and explain how the ranch functions as one',
      'I can analyse what at least two specific settings reveal about power and inequality',
      "I can explain how the cyclical structure (clearing to clearing) reinforces the novella's themes",
      'I can write a paragraph connecting a setting to a theme using specific textual evidence',
    ],
    keywords: [
      'microcosm',
      'symbol',
      'pathetic fallacy',
      'cyclical structure',
      'bunkhouse',
      'segregation',
      'atmosphere',
      'social hierarchy',
      'enclosure',
    ],
    starterActivity: {
      title: 'Settings on a Spectrum - Emotional Mapping',
      duration: '8 minutes',
      instructions:
        'Draw a horizontal line on the board labelled "Freedom" at one end and "Imprisonment" at the other. Call out the main settings: the clearing by the river, the bunkhouse, Crooks\'s room, the barn, and the boss\'s office. Students discuss in pairs where each setting belongs on the spectrum and why. Take feedback and draw out the key insight: the clearing is the only space that offers temporary freedom, and even that is reclaimed by tragedy. Introduce the term "microcosm" and write the definition on the board.',
      differentiation: {
        support:
          'Provide brief descriptions of each setting (one or two sentences) to help students evaluate where each belongs on the spectrum.',
        core: 'Students evaluate all five settings and justify their placement.',
        stretch:
          'Students consider whether any setting changes its position on the spectrum across the course of the novella - does the clearing move from freedom towards imprisonment as the story progresses?',
      },
      resources: ['Spectrum line drawn on board', 'Setting description cards for support students'],
    },
    mainActivities: [
      {
        title: 'Setting Analysis - Close Reading of Key Descriptions',
        duration: '20 minutes',
        instructions:
          "Distribute three brief extracts: (1) the opening description of the clearing in Chapter 1; (2) the description of the bunkhouse in Chapter 2; (3) the description of Crooks's room in Chapter 4. Students work in groups of three, each taking one extract. They annotate for: specific language choices, what the setting reveals about the characters who inhabit it, and what it symbolises about the novella's wider themes. Groups then share their analysis with the class. Teacher draws connections between all three, building towards the conclusion that the ranch is a carefully designed microcosm of 1930s American inequality.",
        differentiation: {
          support:
            'Assign the bunkhouse extract to support students, as it is the most straightforward. Provide annotation prompts: "What does this detail suggest about the workers\' status?", "What does this reveal about who has power here?"',
          core: 'Students analyse their assigned extract and contribute to whole-class discussion.',
          stretch:
            'Students compare their extract to one other setting and write a comparative observation about how Steinbeck uses different spaces to convey different aspects of the social hierarchy.',
        },
        resources: [
          "Printed extracts: opening clearing, bunkhouse description, Crooks's room description",
          'Annotation prompt cards for support students',
        ],
      },
      {
        title: 'Writing About Setting - Connecting Space to Theme',
        duration: '18 minutes',
        instructions:
          "Model an analytical paragraph about setting on the board: pick the bunkhouse and demonstrate how to move from physical description → symbolic meaning → thematic conclusion → contextual link. Students then write their own paragraph in response to: 'How does Steinbeck use setting to reflect the power structures of 1930s America?' Students choose their own setting. After 12 minutes, students swap and peer assess using: Does the response move beyond description? Is there a symbolic interpretation? Is context integrated?",
        differentiation: {
          support:
            'Provide a four-step prompt sheet: (1) Name a physical detail. (2) What does it symbolise? (3) What theme does it connect to? (4) What does this tell us about 1930s society? Students use this to structure their paragraph.',
          core: 'Students write an independent analytical paragraph.',
          stretch:
            'Students write two paragraphs on two different settings, linking them with a comparative connective to show how Steinbeck creates contrasting spaces to reflect contrasting social positions.',
        },
        resources: [
          'Model paragraph on board',
          'Four-step prompt sheet for support students',
          'Peer assessment criteria strip',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Cyclical Structure - Beginning and Ending in the Same Place',
      duration: '7 minutes',
      instructions:
        'Read aloud the opening lines of Chapter 1 and then the opening lines of Chapter 6 (both set at the clearing). Ask: "What has changed and what has stayed the same? Why does Steinbeck bring us back to exactly the same place?" Students write one sentence explaining the effect of the cyclical structure. Teacher closes: "The ranch is a closed system - people arrive and leave, but the structure of inequality remains unchanged. The clearing is not a place of freedom; it is the place where freedom is finally and permanently denied."',
      differentiation: {
        support:
          'Provide both passages printed side by side with the question: "What is the same? What is different? What does this suggest?"',
        core: 'Students listen to the readings and write their own analytical sentence.',
        stretch:
          'Students articulate why a cyclical structure is more devastating than a linear one for this particular story - what emotional effect does returning to the same place create?',
      },
    },
    homework:
      "Steinbeck describes the bunkhouse in Chapter 2 as a space that reveals the workers' lack of permanence and individuality. Write a paragraph (8-10 sentences) analysing one specific detail from the bunkhouse description and explaining what it reveals about the workers' lives. Include an embedded quotation and a contextual link.",
    worksheetQuestions: [
      {
        question:
          'What is a microcosm? How does the ranch function as a microcosm of 1930s American society?',
        lines: 4,
        modelAnswer:
          'A microcosm is a small community or place that reflects the characteristics and structures of a larger society. The ranch functions as a microcosm because it contains the same class hierarchy, racial segregation, gender inequality, and economic exploitation found across 1930s America. By confining the action to a single ranch, Steinbeck can examine these social structures with concentrated intensity.',
        marks: 4,
      },
      {
        question: "What does the bunkhouse reveal about the ranch workers' lives and status?",
        lines: 4,
        modelAnswer:
          "The bunkhouse's impersonal layout - rows of beds, apple-box shelves, nothing permanent - reveals that the workers are treated as disposable labour rather than individuals with dignity. They own almost nothing, have no privacy, and could be replaced at any moment. The presence of insecticide on the shelf suggests even basic sanitary conditions are unreliable. Steinbeck uses the bunkhouse to make visible the workers' lack of security and individuality.",
        marks: 4,
      },
      {
        question:
          'What is pathetic fallacy? Give one example of how Steinbeck uses the natural setting to reflect or contrast with the mood of the narrative.',
        lines: 4,
        modelAnswer:
          'Pathetic fallacy is when natural features of the setting - weather, light, landscape - reflect or contrast with the emotional mood of the narrative. Steinbeck uses it in the final chapter when the clearing, described so peacefully in Chapter 1, is revisited as George prepares to kill Lennie. The natural beauty of the setting - sunlight, trees, a pool of water - contrasts painfully with the human tragedy about to occur, intensifying the emotional devastation through that contrast.',
        marks: 4,
      },
      {
        question:
          'Why does Steinbeck begin and end the novella in the same location - the clearing by the Salinas River? What effect does this cyclical structure create?',
        lines: 5,
        modelAnswer:
          "The cyclical structure reinforces the novella's central argument that migrant workers are trapped in inescapable cycles of poverty, exploitation, and loneliness. By returning to the exact same location, Steinbeck shows that despite everything the characters have experienced - the hope, the friendship, the dream - they end up in the same place they started, except all hope has been destroyed. The structure mirrors the lives of migrant workers who moved from ranch to ranch without ever escaping the system.",
        marks: 5,
      },
      {
        question:
          "Write an analytical paragraph in response to: 'How does Steinbeck use setting to create a sense of entrapment in Of Mice and Men?' Include at least one embedded quotation.",
        lines: 8,
        modelAnswer:
          "Steinbeck designs the ranch as a closed system from which there is no real escape. The bunkhouse, described as a long, rectangular building with 'small, square windows' and rows of identical beds, conveys a sense of confinement through its geometry - the workers are arranged in rows like livestock, stripped of individuality and privacy. The smallness of the windows - limiting both light and perspective - functions as a symbol of the narrow lives available to men trapped in the migrant labour system. Even the most intimate space in the novella, Crooks's room, is 'a little shed that leaned off the wall of the barn' - a space defined by its subordination to a larger structure, just as Crooks himself is subordinate within the racial hierarchy. Steinbeck uses these physical details to make structural inequality visible and tangible, asking the reader to feel the walls closing in rather than simply understand them intellectually.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'The concept of microcosm is simple to define but requires careful scaffolding for students to apply analytically rather than mechanically. Push beyond "the ranch is like America" towards specific, evidence-based connections between the ranch\'s social structure and wider historical context.',
      'The group work in the setting analysis activity benefits from clear role assignment: one student reads aloud, one leads annotation, one records the main points for sharing. This ensures all students engage with the extract.',
      'Pathetic fallacy is a term that students often use inaccurately - check that they understand it is not simply "describing weather" but specifically involves the weather or setting reflecting or contrasting with human emotion. The clearing/violence contrast is the strongest example in this novella.',
      'The cyclical structure point is best understood through the actual reading aloud of the two openings side by side. The physical similarity and the emotional difference are powerful and tangible when experienced rather than described.',
    ],
    targetedSkills: [
      '9R.1 - Understanding key terms and contextual concepts',
      '9R.4 - Analysing language, structure, and symbolism',
      '9R.5 - Interpreting implied and symbolic meaning',
      '9W.4 - Analytical paragraph writing with embedded quotation',
    ],
  },

  // ── Lesson 6: Dreams and Disillusionment ─────────────────────────────────
  {
    id: 'y9t3-06',
    title: 'Dreams and Disillusionment - Thematic Analysis',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse the dreams of multiple characters and the pattern of their destruction (9R.2)',
      'Evaluate the function of the farm dream as a structural device and a symbol (9R.5)',
      'Explore the interconnection between dreams, loneliness, and power in the novella (9R.6)',
      'Write a thematic essay paragraph that moves beyond character summary to structural and contextual analysis (9W.5)',
    ],
    successCriteria: [
      'I can identify the dream of at least four characters and explain what each represents',
      'I can explain the pattern of hope-possibility-destruction that shapes each dream',
      'I can connect the theme of dreams to the theme of loneliness and to the historical context',
      'I can write an analytical paragraph that explores dreams as a theme rather than just describing characters',
    ],
    keywords: [
      'disillusionment',
      'aspiration',
      'symbolism',
      'pattern',
      'inevitability',
      'theme',
      'American Dream',
      'power',
      'interconnection',
    ],
    starterActivity: {
      title: 'Dreams Tracker - Character by Character',
      duration: '8 minutes',
      instructions:
        'Students work in pairs to complete a "Dreams Tracker" grid: four columns (Character, What they dream of, What stage the dream reaches, How and why it is destroyed) for at least four characters (George and Lennie, Curley\'s wife, Crooks, Candy). Give students five minutes, then take class feedback. Teacher completes the grid on the board. Ask: "Is there a pattern here? What does Steinbeck do to every dream in this novella?" Establish the arc: hope → brief possibility → destruction.',
      differentiation: {
        support:
          'Provide the Dreams Tracker with the "What they dream of" column already completed. Students fill in the remaining three columns.',
        core: 'Students complete the full grid from memory and class knowledge.',
        stretch:
          'Students add a fifth column: "What the dream symbolises beyond its literal meaning" - drawing on the idea that each dream represents a broader human need (security, belonging, freedom, etc.).',
      },
      resources: [
        'Dreams Tracker grid (printed or on mini-whiteboards)',
        'Pre-completed support version',
      ],
    },
    mainActivities: [
      {
        title: 'Thematic Analysis - The Function of the Farm Dream',
        duration: '20 minutes',
        instructions:
          "Read together the passage in Chapter 1 where George tells the dream for the first time, and the passage in Chapter 6 where he tells it for the last time before killing Lennie. Students annotate for: (a) what language George uses both times, (b) what Lennie's response reveals about why the dream matters to him, (c) what changes between the two tellings. Teacher facilitates discussion: the dream is told identically - but everything that surrounds it has changed. This is Steinbeck's design: the dream itself is unchanged because the system that denies it is unchanged. The dream is both comfort and cruel illusion simultaneously.",
        differentiation: {
          support:
            'Provide the two passages printed side by side with annotation prompts: "Circle any repeated words or phrases. What does George\'s tone suggest each time? How does Lennie respond?"',
          core: 'Students annotate both passages and identify changes in context and meaning.',
          stretch:
            'Students write a sentence arguing whether the dream in Chapter 6 functions as mercy or cruelty - is George comforting Lennie or cruelly maintaining a fiction that both of them know will never be realised?',
        },
        resources: [
          'Printed passages: Chapter 1 dream-telling and Chapter 6 dream-telling',
          'Class copies of Of Mice and Men',
        ],
      },
      {
        title: 'Extended Writing - Dreams, Loneliness, and Power',
        duration: '18 minutes',
        instructions:
          "Pose the essay question: 'How does Steinbeck use the theme of dreams to explore loneliness and powerlessness in Of Mice and Men?' Remind students of the common mistake: do not explore dreams in isolation from the other themes. Model a topic sentence on the board that connects all three: 'Steinbeck presents dreams not as individual fantasies but as the inevitable response of powerless people to the loneliness that the social system imposes upon them.' Students write a full analytical paragraph responding to this question. Circulate and encourage students to avoid simply listing each character's dream - push them to identify the pattern and what it means.",
        differentiation: {
          support:
            'Provide a three-point scaffold: (1) State the pattern (every dream is destroyed). (2) Link to loneliness (why do characters dream - because they are lonely and powerless). (3) Link to context (the system makes the dream impossible). Students write a sentence for each point, then connect them into a paragraph.',
          core: 'Students write an independent analytical paragraph following the PEEC structure.',
          stretch:
            "Students write two paragraphs - one focusing on the farm dream and one on a secondary character's dream - and conclude with a sentence explaining what the destruction of both dreams reveals about Steinbeck's view of the American Dream as a systemic lie.",
        },
        resources: [
          'Model topic sentence on board',
          'Three-point scaffold for support students',
          'PEEC paragraph reminder card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Which Dream Matters Most? - Ranked Discussion',
      duration: '7 minutes',
      instructions:
        "Students rank the four characters' dreams from 'most significant to the novella's meaning' to 'least significant,' then share and defend their ranking. Teacher draws out: the farm dream is structurally the most important, but the secondary dreams show that the farm dream is not unique - every character in the novella has a dream that is destroyed, which turns the farm dream from a personal tragedy into a social argument. Write on the board: 'Steinbeck's purpose is not to tell one sad story - it is to show that the system makes all dreams impossible for all marginalised people.'",
      differentiation: {
        support:
          'Provide a sentence frame for defence: "I think [dream] is the most significant because it shows [theme/purpose]..."',
        core: 'Students rank and defend with textual reference.',
        stretch:
          "Students consider whether any character's dream actually partially succeeds, and what that might reveal about how power operates differently for different characters.",
      },
    },
    homework:
      'Choose one quotation about the farm dream from the novella. Write an analytical paragraph (8-10 sentences) responding to: "How does Steinbeck use the dream of the farm to explore the theme of disillusionment?" Your paragraph must include: embedded quotation, language analysis, structural comment (e.g. foreshadowing or cyclical structure), and a contextual link.',
    worksheetQuestions: [
      {
        question:
          'Identify the dreams of four characters in the novella and explain what each dream represents beyond its literal meaning.',
        lines: 8,
        modelAnswer:
          "George and Lennie's farm dream represents the American Dream of self-sufficiency, independence, and dignity for the working poor. Curley's wife's dream of Hollywood stardom represents the desire for individual recognition and escape from a suffocating marriage. Crooks's brief dream of joining the farm represents the need for basic human belonging and freedom from racial exclusion. Candy's dream of the farm represents the desire for security in old age - a future in which his worth is not measured by physical labour. All four dreams share a common structure: they offer hope of a better life that the social system systematically denies.",
        marks: 8,
      },
      {
        question:
          'Explain the pattern of hope → brief possibility → destruction that shapes the farm dream in the novella.',
        lines: 5,
        modelAnswer:
          "At first the farm dream seems like pure fantasy - something George tells to comfort Lennie. When Candy offers his savings, the dream becomes financially realistic for the first time. Steinbeck allows readers to share the characters' excitement and believe in the possibility. This makes its destruction - when Lennie kills Curley's wife - all the more devastating. By engineering this pattern deliberately, Steinbeck structures the novella around the repeated raising and shattering of hope, creating a cumulative argument that the system prevents all such dreams from being realised.",
        marks: 5,
      },
      {
        question:
          'How are the themes of dreams, loneliness, and powerlessness interconnected in Of Mice and Men?',
        lines: 5,
        modelAnswer:
          'Characters dream because they are lonely, and they are lonely because they are powerless. The social and economic system - racial segregation, gender inequality, age discrimination, class exploitation - denies them the connections and security that would make dreaming unnecessary. Steinbeck shows that loneliness is not a personal failing but a structural condition: the system keeps workers isolated, competitive, and desperate, which in turn fuels the very dreams that the system is designed to prevent. Dreams, loneliness, and powerlessness form a closed loop.',
        marks: 5,
      },
      {
        question:
          "Why does George tell the farm dream to Lennie one final time before shooting him? What does this moment reveal about Steinbeck's purpose?",
        lines: 5,
        modelAnswer:
          "George ensures Lennie dies thinking about the rabbits and the farm - he dies happy, in his favourite place, imagining his best possible future. This is simultaneously an act of profound love and a deeply cruel irony: the dream that has sustained them is told for the last time as the vehicle for Lennie's death. Steinbeck uses this moment to suggest that the dream was always both comfort and illusion - it kept Lennie alive emotionally and now, in a devastating inversion, it is the means by which George helps him die peacefully. The dream serves its final purpose in the moment of its complete and permanent destruction.",
        marks: 5,
      },
      {
        question:
          "Write an analytical paragraph in response to: 'How does Steinbeck use the theme of dreams to explore the American Dream in Of Mice and Men?' Include an embedded quotation.",
        lines: 8,
        modelAnswer:
          "Steinbeck systematically presents the American Dream - the belief that hard work can lead to prosperity and independence - as an illusion that traps the vulnerable rather than liberating them. George and Lennie's farm dream, recited like a catechism throughout the novella, encapsulates this idea: 'We'd have a little house an' a room to ourself... An' when we put in a crop, why, we'd be there to take the crop up.' The simple, repetitive vocabulary and the domestic detail ('a little house,' 'our own') reveal the modesty of the dream - this is not wild ambition but the most basic desire for security and belonging. That even this minimal aspiration is systematically destroyed by the same forces of prejudice, poverty, and exploitation that defined 1930s America is Steinbeck's sharpest indictment: the American Dream does not fail because people are undeserving - it fails because the system is designed to keep the marginalised exactly where they are.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "The key pedagogical shift in this lesson is from character-level analysis (each character has a dream) to structural-level analysis (the pattern of all dreams is the same, and that pattern is Steinbeck's argument). Push students towards the structural insight rather than letting them simply list examples.",
      'The Chapter 1 and Chapter 6 dream-telling comparison is very powerful if read aloud by the teacher with deliberate pacing. The first telling should sound hopeful; the second should sound quiet and devastated. Do not rush this reading.',
      'The interconnection of dreams, loneliness, and power is the most sophisticated analytical point in this unit. Not all students will reach it in a single lesson - flag it as the target for top-grade work and return to it in subsequent lessons.',
      "Students who focus only on George and Lennie's dream will struggle with the broader thematic question. The Dreams Tracker activity in the starter is designed to ensure all four characters' dreams are on the table before any analytical writing begins.",
    ],
    targetedSkills: [
      '9R.2 - Identifying and retrieving thematic information',
      '9R.5 - Interpreting symbolic and structural meaning',
      '9R.6 - Evaluating authorial intent and structural design',
      '9W.5 - Extended analytical and thematic writing',
    ],
  },

  // ── Lesson 7: Steinbeck's Language - Dialect, Description, Imagery ────────
  {
    id: 'y9t3-07',
    title: "Steinbeck's Language - Dialect, Description, and Imagery",
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse Steinbeck's use of dialect to create authenticity and reveal character (9R.4)",
      "Explore Steinbeck's descriptive techniques, including light/darkness symbolism and animal imagery (9R.4)",
      "Understand the term 'register' and explain how different characters' speech patterns reveal personality (9R.5)",
      'Write an analytical paragraph that comments on both the meaning and the method of a quotation (9W.4)',
    ],
    successCriteria: [
      "I can explain three purposes of Steinbeck's use of dialect",
      'I can analyse at least two examples of animal imagery and explain their symbolic meaning',
      "I can identify how different characters' registers reveal their personalities",
      'I can write an analytical sentence that comments on how a quotation works, not just what it means',
    ],
    keywords: [
      'dialect',
      'register',
      'imagery',
      'animal imagery',
      'symbolism',
      'light and darkness',
      'descriptive technique',
      'authenticity',
      'connotation',
    ],
    starterActivity: {
      title: 'Standard or Dialect? - Spot the Difference',
      duration: '8 minutes',
      instructions:
        "Display four quotations side by side with 'corrected' standard English versions. For example: 'Guys like us, that work on ranches, are the loneliest guys in the world' vs 'People like us, who work on ranches, are the loneliest people in the world.' Ask: what is lost when the dialect is removed? Students discuss in pairs. Take feedback and establish: the dialect carries authenticity, class markers, and emotional directness. It is not a flaw - it is a deliberate technique. Ask students to define dialect and write the definition in their notes.",
      differentiation: {
        support:
          'Provide three observations about what the dialect adds (e.g. authenticity, character voice, class markers) for students to agree or disagree with and explain.',
        core: 'Students identify what is lost in the standard English version and explain why.',
        stretch:
          "Students argue whether George's dialect makes his profound observations more or less powerful, and why Steinbeck might have chosen to give weighty observations to characters who speak in working-class dialect.",
      },
      resources: [
        'Dialect vs Standard English comparison displayed on board',
        'Definition prompt card for support students',
      ],
    },
    mainActivities: [
      {
        title: 'Language Analysis Carousel',
        duration: '22 minutes',
        instructions:
          "Set up four stations around the room, each with a different extract and a specific language focus: Station 1 - Opening description of the clearing (light, colour, natural imagery); Station 2 - George's speech about loneliness (dialect, register, emotional weight); Station 3 - Lennie described arriving at the clearing (animal imagery); Station 4 - Final chapter description of the clearing at sunset (light symbolism, pathetic fallacy). Students spend 5 minutes at each station annotating the extract for the specified technique. After the carousel, whole-class discussion draws together the key insight: Steinbeck uses language to layer meaning - nothing is simply decorative.",
        differentiation: {
          support:
            "Provide annotation sentence starters at each station: 'The [technique] of [quotation] suggests...' and 'This is effective because...'",
          core: 'Students annotate at each station and contribute to whole-class discussion.',
          stretch:
            "At each station, students write an additional observation connecting the extract's language to the novella's broader themes or Steinbeck's purpose.",
        },
        resources: [
          'Four station extracts (printed)',
          'Annotation sentence starters for support students',
          'Timer displayed on board',
        ],
      },
      {
        title: "Analytical Writing - 'How' Not Just 'What'",
        duration: '18 minutes',
        instructions:
          "Model the difference between a 'what' comment ('This quotation shows that Lennie is like an animal') and a 'how' comment ('Steinbeck\'s use of the simile \"paws\" rather than \"hands\" dehumanises Lennie through comparison to a bear\'s anatomy, simultaneously emphasising his physicality and his lack of fine motor control - the very quality that makes him dangerous despite his gentleness'). Students practise converting three 'what' statements into 'how' statements, then write a full paragraph in response to: 'How does Steinbeck use language to present the relationship between humans and the natural world in Of Mice and Men?'",
        differentiation: {
          support:
            "Provide the three 'what' statements to convert, with prompts: 'What technique is being used? What specific words are doing the work? What does this suggest beyond the surface meaning?'",
          core: 'Students convert the three statements and then write an independent paragraph.',
          stretch:
            "Students write a paragraph that analyses language at three levels simultaneously: word level (specific vocabulary choices), sentence level (syntax and rhythm), and structural level (how this passage fits into the novella's larger design).",
        },
        resources: [
          "Model 'what' and 'how' comparison on board",
          "Three 'what' statements for support students",
          'Paragraph response sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Best Sentence Competition',
      duration: '7 minutes',
      instructions:
        "Students nominate their best analytical sentence from today's work and read it aloud. Class votes for the sentence that best demonstrates 'how not what' analysis. Teacher annotates the winning sentence on the board, pointing out what makes it analytically strong. Students copy the winning sentence and write a brief note on why it works. End with: 'Every sentence you write about language should answer the question: how does this technique create this effect?'",
      differentiation: {
        support:
          'Students can nominate a sentence from their worksheet work or from a provided model, adding one word or phrase of their own.',
        core: 'Students nominate from their own written work.',
        stretch:
          'Students identify not only why the sentence is strong but also how it could be improved - what is the next level beyond what has been achieved?',
      },
    },
    homework:
      "Choose any one quotation from Of Mice and Men that you find particularly powerful. Write a paragraph (8-10 sentences) analysing the language of that quotation. You must comment on at least two specific techniques (e.g. a particular verb, an image, the dialect, sentence structure) and explain what each adds to the reader's understanding. Do not just describe what the quotation means - explain how the language creates that meaning.",
    worksheetQuestions: [
      {
        question:
          "Explain three reasons why Steinbeck uses dialect in his characters' speech. Give a brief example for each.",
        lines: 6,
        modelAnswer:
          "First, dialect creates authenticity: Steinbeck worked on ranches and knew how migrant workers spoke. By reproducing their speech phonetically, he grounds the novella in social reality. Second, dialect reveals class and education: the workers' informal speech contrasts with the boss's more formal register, showing differences in power and background. Third, dialect builds empathy: by hearing characters' voices directly and honestly, the reader is drawn into their world and encouraged to take them seriously. For example, George's 'Guys like us, that work on ranches, are the loneliest guys in the world' uses plain vocabulary and informal grammar yet contains profound emotional truth.",
        marks: 6,
      },
      {
        question:
          'Analyse the following quotation: Lennie "drank with long gulps, snorting into the water like a horse." What techniques does Steinbeck use and what does the quotation convey?',
        lines: 5,
        modelAnswer:
          "Steinbeck uses a simile comparing Lennie to a horse to establish his animal-like, instinctive behaviour from the very first chapter. The verb 'snorting' suggests uncontrolled physicality - Lennie satisfies his needs without self-awareness or restraint. The adverb 'long' in 'long gulps' conveys the scale of his physical capacity. Together, these techniques establish the pattern of animal imagery that recurs throughout the novella, positioning Lennie as someone driven by instinct rather than rational thought - a characterisation essential to understanding the tragedy that follows.",
        marks: 5,
      },
      {
        question:
          'What is a character\'s "register"? Identify the registers of two different characters and explain what each reveals.',
        lines: 5,
        modelAnswer:
          "A character's register is the level of formality, vocabulary, and complexity in their speech. Slim speaks with measured, authoritative language - Steinbeck tells us his 'slow speech had overtones not of thought, but of understanding beyond thought', and his speech is calm and considered, which reveals his natural authority and wisdom. In contrast, Curley speaks in short, aggressive sentences with confrontational vocabulary, reflecting his insecurity and the way he uses physical intimidation to assert dominance. Register reveals personality, social position, and power dynamics without requiring direct authorial comment.",
        marks: 5,
      },
      {
        question:
          'How does Steinbeck use light and darkness symbolically in the novella? Give one specific example.',
        lines: 4,
        modelAnswer:
          'Steinbeck associates warm, natural light with hope and the possibility of connection, while fading or dim light accompanies tension and tragedy. In the final chapter, as George prepares to shoot Lennie, the description emphasises a setting sun - the light is diminishing at the moment the dream is finally extinguished. This is a deliberate example of pathetic fallacy: the dying light mirrors the death of hope. The opening chapter, by contrast, is bathed in golden light, establishing the clearing as a place of beauty and possibility - which makes its final function as the site of tragedy all the more devastating.',
        marks: 4,
      },
      {
        question:
          "Rewrite the following 'what' comment as a 'how' comment that analyses language technique: 'The quotation shows that Crooks is lonely and has been isolated from others.'",
        lines: 6,
        modelAnswer:
          "A strong 'how' comment might read: 'Steinbeck uses the second person address in Crooks's observation that 'a guy goes nuts if he ain't got nobody' to make loneliness feel like a universal condition rather than a personal complaint - the shift from 'I' to 'a guy' implies that this is the experience of all men in Crooks's position, not merely his own. The colloquial 'goes nuts' carries a weight of genuine psychological suffering beneath its casual language, suggesting a man who has learned to speak plainly about pain that is actually devastating. The dialect form 'ain't got nobody' - with its double negative - intensifies the absolute emptiness he describes: there is not merely an absence of one person but an absence of everyone.'",
        marks: 6,
      },
    ],
    teacherNotes: [
      "The distinction between 'what' and 'how' analysis is the central skill of this lesson and arguably the most important technical skill in the entire GCSE English Literature course. Model it explicitly and repeatedly, and praise every instance where a student makes this shift in their writing.",
      'The carousel activity requires five minutes per station to be effective. Use a visible timer and keep transitions brisk. If students finish early at a station, direct them to the stretch question rather than moving on early.',
      "Students sometimes feel that commenting on dialect is 'obvious' and avoid it. Actively encourage dialect analysis by modelling how much there is to say about specific word choices and phonetic spellings.",
      'The "best sentence" plenary is highly motivating for most classes. Establish in advance that all contributions are valued and that the vote is for the technique, not the person - this reduces anxiety about sharing work.',
    ],
    targetedSkills: [
      '9R.4 - Analysing language techniques and their effects',
      '9R.5 - Interpreting implied and connotative meaning',
      '9W.4 - Precise analytical writing with language focus',
      '9W.6 - Developing vocabulary for literary analysis',
    ],
  },

  // ── Lesson 8: Foreshadowing and Cyclical Structure ────────────────────────
  {
    id: 'y9t3-08',
    title: 'Foreshadowing and Cyclical Structure - Nothing Happens by Accident',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Trace the chain of foreshadowing through the novella and explain how each incident builds towards the climax (9R.3)',
      "Analyse the effect of the cyclical structure on the reader's experience of the novella (9R.5)",
      'Understand how the six-chapter structure mirrors a dramatic three-act play (9R.4)',
      'Write analytically about structure, connecting structural choices to thematic meaning (9W.5)',
    ],
    successCriteria: [
      'I can identify at least four moments of foreshadowing and explain the chain they create',
      "I can explain the effect of the cyclical structure on the novella's themes of inevitability and entrapment",
      'I can connect the compressed three-day timeframe to the feeling of urgency and powerlessness',
      'I can write an analytical paragraph about structure that links technique to effect to theme',
    ],
    keywords: [
      'foreshadowing',
      'cyclical structure',
      'inevitability',
      'dramatic irony',
      'escalation',
      'six-chapter structure',
      'structural parallel',
      'compressed timeframe',
      'tension',
    ],
    starterActivity: {
      title: 'Foreshadowing Timeline - Building the Chain',
      duration: '8 minutes',
      instructions:
        "Draw a timeline on the board from Chapter 1 to Chapter 6. Ask students: 'What events in the early chapters hint at what will happen at the end?' Students call out suggestions and teacher places them on the timeline. Build the chain together: dead mouse → girl in Weed → Curley's hand → dead puppy → Curley's wife's death. Discuss: each incident involves Lennie touching something soft, panicking, and holding on or using excessive force. Ask: 'By the time we get to Chapter 5, is Curley's wife's death a shock or an inevitability? What does that do to the reader's experience?'",
      differentiation: {
        support:
          'Provide a list of six events from across the novella, including the foreshadowing incidents. Students identify which are foreshadowing and place them on a pre-drawn timeline.',
        core: 'Students contribute to building the timeline from memory.',
        stretch:
          'Students consider whether anything in the novella feels genuinely unpredictable, or whether Steinbeck creates a sense of total inevitability - and what narrative purpose this serves.',
      },
      resources: ['Timeline drawn on board', 'Event list cards for support students'],
    },
    mainActivities: [
      {
        title: 'Close Reading - The Mouse, The Dress, The Hand, The Puppy',
        duration: '20 minutes',
        instructions:
          "Students read four brief extracts: (1) Lennie with the dead mouse (Chapter 1); (2) George describing the girl's dress in Weed (Chapter 1); (3) Lennie crushing Curley's hand (Chapter 3); (4) Lennie with the dead puppy (Chapter 5). For each, students annotate: what happens, what technique Steinbeck uses (e.g. repetition of the touching-panicking-holding pattern), and what emotion the reader feels at this moment. Teacher facilitates a discussion comparing the reader's reaction to the mouse (perhaps curiosity or faint concern) to the dead puppy (dread). Ask: 'How does Steinbeck use the escalating series to shift the reader's emotional response from concern to dread to devastating resignation?'",
        differentiation: {
          support:
            'Provide the four extracts printed with the question: "What is the pattern you can see across all four? Write one sentence for each identifying the repeated element." Students focus on identifying the pattern before commenting on effect.',
          core: 'Students annotate all four extracts and track the shift in reader response.',
          stretch:
            'Students consider whether the repetition of the pattern serves to generate sympathy for Lennie (he never learns, never means to hurt anyone) or to position him as an inevitably destructive force - and whether Steinbeck intends both readings simultaneously.',
        },
        resources: [
          'Four printed extracts',
          'Annotation prompt sheet',
          'Class copies of Of Mice and Men',
        ],
      },
      {
        title: 'Structural Analysis - Writing About Form',
        duration: '18 minutes',
        instructions:
          "Model how to write about structure as a technique: demonstrate the difference between 'the novella is structured in six chapters' (observation) and 'Steinbeck's six-chapter structure, mirroring the three-act structure of a play, creates a relentless dramatic momentum that strips characters of the time and space to reflect, adapt, or escape - the tragedy feels less like misfortune than like the inevitable working-out of a system' (analysis). Students write a paragraph in response to: 'How does Steinbeck use foreshadowing to create a sense of inevitability in Of Mice and Men?' Circulate and challenge students to explain why the technique matters to the reader's experience, not just what the technique is.",
        differentiation: {
          support:
            "Provide a scaffold: (1) Name a foreshadowing incident. (2) Describe what it hints at. (3) Explain how it makes the reader feel. (4) Connect to Steinbeck's purpose. Students write one sentence for each step, then join them into a paragraph.",
          core: 'Students write an independent paragraph following PEEC structure.',
          stretch:
            'Students write about foreshadowing and cyclical structure in the same paragraph, arguing that together they create an inescapable tragic architecture - not just hinting at the ending but making it feel as though it could never have been otherwise.',
        },
        resources: [
          'Model sentences on board (observation vs analysis)',
          'Four-step scaffold for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Does Steinbeck Want Us to Be Surprised?',
      duration: '7 minutes',
      instructions:
        "Pose the question: 'If we know from Chapter 1 that Lennie will eventually kill something human, does knowing this make the story more or less powerful? Why might Steinbeck want us to dread rather than be surprised by the ending?' Students discuss in pairs for two minutes, then share. Teacher closes by introducing the concept of Greek tragedy - where the audience knows the ending from the start, and the power comes from watching the protagonist move inevitably towards it. Steinbeck writes in this tradition.",
      differentiation: {
        support:
          "Provide two arguments to consider: 'Knowing makes it more powerful because we feel dread' and 'Knowing makes it less powerful because there is no surprise.' Students choose which they agree with and explain why.",
        core: 'Students discuss both views and reach their own conclusion.',
        stretch:
          "Students draw a parallel between Of Mice and Men's structure and a Greek tragedy they may have encountered, considering what both traditions share in their view of fate, power, and inevitability.",
      },
    },
    homework:
      "The novella takes place over approximately three days. Write a paragraph (8-10 sentences) explaining: why Steinbeck might have chosen such a compressed timeframe, what effect this creates for the reader, and how it connects to the novella's themes of inevitability and powerlessness. Use at least one embedded quotation.",
    worksheetQuestions: [
      {
        question:
          'List the chain of foreshadowing incidents in the novella in chronological order. Explain what each one foreshadows and what effect the chain creates.',
        lines: 8,
        modelAnswer:
          "The chain runs: (1) Lennie kills a mouse by petting it too hard - foreshadows his pattern of loving what he destroys. (2) The girl's dress in Weed (George describes how Lennie grabbed it) - foreshadows the same pattern applied to Curley's wife. (3) Lennie crushes Curley's hand - demonstrates that when panicking, Lennie holds on and does not let go, exactly what happens with Curley's wife. (4) Lennie kills his puppy - directly precedes Curley's wife's death, making the fatal outcome impossible to avoid. Together, the chain creates a sense of inevitable tragedy: by the time we reach Chapter 5, Steinbeck has made the ending feel predetermined.",
        marks: 8,
      },
      {
        question:
          "Why does Steinbeck compress the novella's action into approximately three days? What effect does this create?",
        lines: 4,
        modelAnswer:
          'The compressed timeframe creates intensity and urgency - events unfold so rapidly that characters have no time to reflect, adapt, or find an alternative. This reinforces the sense that they are powerless within the system. It also reflects the reality of migrant life: everything can change in an instant. The brevity emphasises the fragility of the dream - it takes only moments to destroy what has taken a lifetime to build.',
        marks: 4,
      },
      {
        question:
          "Explain the effect of the cyclical structure on the novella's meaning. What message does it convey about the lives of migrant workers?",
        lines: 5,
        modelAnswer:
          "By beginning and ending at the same clearing, Steinbeck creates a structural loop that mirrors the inescapable cycles of migrant life. George and Lennie arrive at the clearing full of the dream; George leaves alone, shattered. The physical return to the starting point shows that despite everything - the hope, the friendship, the near-achievement of the dream - nothing has actually changed in the world that trapped them. The cycle of poverty, loneliness, and exploitation continues unchanged. The structure is Steinbeck's bleakest argument: there is no way out.",
        marks: 5,
      },
      {
        question:
          'What is the significance of the heron eating the water snake in Chapter 6? How does this detail function structurally?',
        lines: 4,
        modelAnswer:
          "The heron catching and eating the snake is a small act of natural predation that mirrors the human tragedy about to occur. It reminds the reader that nature, like society, operates on a hierarchy in which the strong consume the weak. Structurally, it functions as a final piece of foreshadowing immediately before Lennie's death, connecting the human story to a pattern embedded in nature itself. This universalises the tragedy: the strong destroying the vulnerable is not a social accident but, Steinbeck implies bleakly, the way of all things.",
        marks: 4,
      },
      {
        question:
          "Write an analytical paragraph in response to: 'How does Steinbeck use foreshadowing to prepare the reader for the novella's tragic ending?' Include at least one embedded quotation.",
        lines: 8,
        modelAnswer:
          "Steinbeck uses a carefully escalating chain of foreshadowing incidents to make the novella's tragic ending feel inevitable rather than arbitrary. From the very first chapter, Lennie's habit of accidentally destroying what he loves is established when George confiscates a dead mouse - 'You've broke it pettin' it.' The verb 'broke' introduces the pattern that will recur throughout the novella: Lennie's love is lethal because his immense strength overwhelms his intentions. This pattern escalates through the incident in Weed, Curley's crushed hand, and the dead puppy, each incident more severe than the last. By the time Lennie is alone with Curley's wife in the barn, the reader has been prepared - through this structural chain - to understand that what is coming cannot be prevented. The foreshadowing serves a moral as well as structural purpose: it positions Lennie's actions as the result of who he is and what the world has done to him, not as random violence, generating devastating sympathy for a man who can never escape the consequences of his own kindness.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'The key analytical move in this lesson is from identifying foreshadowing to explaining its effect on the reader. Many students can list the incidents; fewer can explain what it feels like to read the novella when you know what is coming, and how that feeling was engineered by Steinbeck. Push hard for this second step.',
      'The Greek tragedy reference in the plenary is optional depending on class knowledge. If the class has studied Macbeth or another tragedy, the parallel with dramatic irony and inevitable fate is a useful connection to make.',
      'Avoid framing foreshadowing as a kind of trickery or technique the author uses. Frame it as Steinbeck being honest with the reader: he is not trying to surprise us - he is trying to make us feel the dread that these characters live with every day.',
      'If students have not finished the novella, you will need to manage careful spoiler handling in this lesson. It is better to teach this lesson after the class has read to the end, but the foreshadowing chain can be introduced earlier if necessary.',
    ],
    targetedSkills: [
      '9R.3 - Understanding how narrative structure creates meaning',
      '9R.4 - Analysing structural techniques including foreshadowing',
      '9R.5 - Interpreting symbolic and structural significance',
      '9W.5 - Analytical writing about structure and form',
    ],
  },

  // ── Lesson 9: Integrating Context into Essays ─────────────────────────────
  {
    id: 'y9t3-09',
    title: 'Integrating Context into Essays - Writing for High Marks',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Consolidate understanding of how to integrate contextual knowledge into analytical writing (9W.3)',
      'Distinguish between different types of context (historical, social, biographical, literary) and use each appropriately (9W.7)',
      'Practise structuring a multi-paragraph analytical response with integrated context throughout (9W.8)',
      'Evaluate model essays and identify what makes contextual integration effective (9R.7)',
    ],
    successCriteria: [
      'I can identify four types of context relevant to Of Mice and Men and give an example of each',
      'I can explain the difference between "context dumped" writing and integrated context writing',
      'I can write a paragraph that integrates context without losing focus on language and technique',
      'I can plan a structured multi-paragraph response in which context is woven throughout, not confined to one paragraph',
    ],
    keywords: [
      'context',
      'historical context',
      'biographical context',
      'social context',
      'integrated',
      'authorial intent',
      'analytical register',
      'evidence',
      'synthesis',
    ],
    starterActivity: {
      title: 'Context Sorting - Four Types',
      duration: '8 minutes',
      instructions:
        'Display eight contextual statements on the board. Students categorise them into four types: (1) Historical context (Great Depression, Dust Bowl); (2) Social context (racial segregation, gender inequality, class); (3) Biographical context (Steinbeck worked on ranches, knew migrant workers); (4) Literary/generic context (novella form, play-novelette, social realism). Students sort in pairs, then take class feedback. Teacher emphasises: examiners expect all four types, and all four must be connected to specific moments in the text - not presented as background information.',
      differentiation: {
        support:
          'Provide the eight statements on individual cards with the four category labels. Students physically sort the cards.',
        core: 'Students read the statements on the board and write them into the correct category.',
        stretch:
          'Students add one more example of their own for each category and write a sentence connecting it to a specific character or event in the novella.',
      },
      resources: [
        'Eight contextual statements (displayed and on cards for support)',
        'Four-category sorting grid',
      ],
    },
    mainActivities: [
      {
        title: 'Model Essay Analysis - Identifying Effective Context Integration',
        duration: '20 minutes',
        instructions:
          "Distribute a model analytical paragraph about Crooks that integrates all four types of context. Students annotate it using a colour-code: yellow = historical context, blue = social context, green = biographical context, pink = literary context. Then students annotate in a second pass: where does the context directly support or explain a language point? Where is it woven into the argument rather than bolted on? Teacher facilitates discussion: in a strong paragraph, context is not a separate ingredient - it is dissolved into the analysis so thoroughly that you cannot remove it without the analysis collapsing. Introduce the phrase: 'context as explanation, not decoration.'",
        differentiation: {
          support:
            'Provide the model paragraph pre-highlighted with one type of context already marked. Students add the remaining three.',
          core: 'Students colour-code the full paragraph across all four types and identify where context supports language analysis.',
          stretch:
            "Students rewrite one sentence from the model paragraph to make the context integration even stronger - either making it more specific, connecting it more tightly to the language analysis, or making the link to Steinbeck's purpose more explicit.",
        },
        resources: [
          'Printed model paragraph on Crooks',
          'Colour-code annotation guide',
          'Highlighters (four colours per student)',
        ],
      },
      {
        title: 'Structured Essay Planning and Paragraph Writing',
        duration: '18 minutes',
        instructions:
          "Pose the essay question: 'How does Steinbeck present the theme of loneliness in Of Mice and Men?' Students spend 5 minutes planning a three-paragraph response, identifying: (a) main point for each paragraph, (b) key quotation for each paragraph, (c) contextual link for each paragraph. Teacher models a plan on the board. Students then write one full paragraph from their plan, aiming to integrate context throughout rather than confining it to a single sentence. Peer assess using the criteria: Is the context integrated or bolted on? Does the paragraph begin with language analysis or context?",
        differentiation: {
          support:
            'Provide a three-box planning frame with prompts: "Character/moment → Quotation → Language analysis → Context link → Steinbeck\'s purpose." Students complete the frame before writing.',
          core: 'Students plan independently and write one analytical paragraph.',
          stretch:
            'Students write two paragraphs from their plan and include a linking sentence between them that shows how the two examples develop a single, coherent argument about loneliness.',
        },
        resources: [
          'Essay planning frame for support students',
          'Model plan on board',
          'Peer assessment criteria strip',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Context Test - Remove and Rebuild',
      duration: '7 minutes',
      instructions:
        "Return to a student paragraph from the writing activity. Remove all contextual references and read the result aloud. Ask: 'Is it still a good paragraph? What is lost?' Establish that strong integrated context is load-bearing - the analysis is weakened or incomplete without it. Students write one sentence they will use in the timed assessment to integrate context: it should name a specific historical/social detail and connect it directly to a language choice in the text. Share two examples.",
      differentiation: {
        support:
          'Provide sentence frame: "This reflects the reality of [specific context], which Steinbeck makes visible through [specific language choice], suggesting that [analytical point]."',
        core: 'Students write their own context-integration sentence from scratch.',
        stretch:
          'Students write two contrasting sentences - one showing context bolted on, one showing context integrated - and explain the difference in analytical quality.',
      },
    },
    homework:
      'Write a full analytical paragraph (10-12 sentences) in response to: "How does Steinbeck present the theme of power in Of Mice and Men?" Your paragraph must include: an embedded quotation, a language analysis comment, a reference to at least two types of context (historical and social), and a statement about Steinbeck\'s purpose. This is preparation for the timed assessment in Lesson 10.',
    worksheetQuestions: [
      {
        question:
          'What are the four types of context relevant to Of Mice and Men? Give one specific example of each.',
        lines: 6,
        modelAnswer:
          'Historical context: the Great Depression reduced unemployment to 25% by 1933, shaping the desperate lives of migrant workers like George and Lennie. Social context: racial segregation excluded Black workers like Crooks from the white community on the ranch. Biographical context: Steinbeck worked on ranches himself and spent time with migrant workers, giving his portrayal authenticity and first-hand authority. Literary/generic context: Steinbeck originally conceived the novella as a play-novelette, which explains the dominance of dialogue in characterisation and the tight six-chapter structure.',
        marks: 6,
      },
      {
        question:
          'What is the difference between "context dumped" writing and integrated context writing? Illustrate with two short examples.',
        lines: 6,
        modelAnswer:
          '"Context dumped" writing places historical information in a separate paragraph disconnected from analysis: "The Great Depression caused mass unemployment in the 1930s. George and Lennie are migrant workers." Integrated context weaves the historical detail directly into the analysis: "George and Lennie\'s existence as rootless migrant workers reflects the reality of the Great Depression, in which mass unemployment stripped men of permanence and belonging - a social condition Steinbeck makes tangible through their nightly ritual of reciting the farm dream, which functions as a substitute for the home and stability the Depression has made impossible." In the integrated version, the historical context explains and deepens the analysis rather than sitting beside it as background.',
        marks: 6,
      },
      {
        question:
          "Analyse this weak context sentence and rewrite it as an integrated analytical sentence: 'Women had no rights in the 1930s. Curley's wife is treated badly by the men.'",
        lines: 5,
        modelAnswer:
          "A stronger version might read: 'The casual cruelty with which the male workers dismiss Curley's wife as a 'tart' reflects the patriarchal values of 1930s America, in which women's legal rights were limited and social freedom was strictly policed - Steinbeck uses this historical reality not to endorse it but to expose it, positioning the reader to feel the injustice of a system that reduces a complex, dreaming, lonely woman to a threat rather than a person.' The revision connects the historical detail directly to a quotation and a reading of authorial intent.",
        marks: 5,
      },
      {
        question:
          "Why is Steinbeck's biographical context relevant to Of Mice and Men? How does it affect your reading of the novella?",
        lines: 4,
        modelAnswer:
          'Steinbeck worked on ranches in California and spent time with migrant workers, so his portrayal is drawn from direct observation rather than imagined. This gives the novella its documentary quality - the bunkhouse conditions, the dialect, the social dynamics, and the emotional reality all carry the authority of lived experience. Knowing this context, the reader can trust that Steinbeck is not sentimentalising the working poor but presenting their lives with honest and informed empathy. His authorial intent - to generate social conscience - is strengthened by this authenticity.',
        marks: 4,
      },
      {
        question:
          "Write a full analytical paragraph in response to: 'How does Steinbeck present the theme of loneliness in Of Mice and Men?' Ensure that context is integrated throughout.",
        lines: 10,
        modelAnswer:
          "Steinbeck presents loneliness as a structural condition imposed by the social and economic system rather than a personal failing, using every major character to demonstrate a different facet of its operation. When Crooks tells Lennie, 'A guy goes nuts if he ain't got nobody,' the informal second-person address transforms individual suffering into universal truth - the shift from personal experience to 'a guy' suggests that this is the inevitable psychological consequence for all men living in the migrant labour system. The dialect form 'ain't got nobody' - with its resonant double negative - articulates total human deprivation: not the absence of one person but the absence of all. Steinbeck's biographical knowledge of ranch life informs this portrayal: he had witnessed the isolation of men who moved from ranch to ranch without ever forming lasting bonds, and in Crooks he distils this experience into its sharpest form. The historical context of racial segregation in 1930s America adds an additional layer: Crooks's loneliness is not merely the consequence of the migrant system but also of a society that physically and legally excludes him from community. Steinbeck's purpose is clear - loneliness is not an accident of character but the deliberate, systemic product of a society that treats people as disposable labour.",
        marks: 10,
      },
    ],
    teacherNotes: [
      'This lesson is preparation for the timed assessment in Lesson 10. Make the connection explicit: every skill practised today will be directly applicable tomorrow. Students should leave this lesson with a clear sense of what "integrated context" looks like in their own writing.',
      'The model paragraph annotation activity is the most important part of this lesson. If time is tight, prioritise it over the planning and writing activity - students learn more from analysing a strong model than from writing in isolation.',
      'When students are writing their paragraphs, watch for the most common failure mode: writing a context paragraph first and then separate analysis. Intervene early if you see this pattern and redirect towards weaving context into the analysis.',
      'The "Context Test" plenary (removing context and reading the result) is a powerful teaching moment if done with a strong student paragraph. Ask for a volunteer before the lesson begins to avoid putting anyone on the spot.',
    ],
    targetedSkills: [
      '9W.3 - Integrating evidence and context effectively',
      '9W.7 - Using different types of context appropriately',
      '9W.8 - Planning and structuring multi-paragraph responses',
      '9R.7 - Evaluating the effectiveness of analytical writing',
    ],
  },

  // ── Lesson 10: Timed Assessment ───────────────────────────────────────────
  {
    id: 'y9t3-10',
    title: 'Timed Assessment - Of Mice and Men Full Essay Response',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Produce an independently written analytical essay response under timed exam conditions (9W.8)',
      'Demonstrate the ability to structure a coherent, multi-paragraph argument with a clear line of reasoning (9W.9)',
      'Apply all skills developed across the unit: close reading, language analysis, structural comment, and integrated context (9R.1-9R.7, 9W.1-9W.9)',
      'Practise exam time management, planning under pressure, and sustaining analytical quality across an extended response (9W.8)',
    ],
    successCriteria: [
      'I can plan my response in 5 minutes and produce at least three full analytical paragraphs',
      'I can embed quotations and comment on language technique throughout my essay',
      'I can integrate contextual knowledge throughout my response, not just in one dedicated paragraph',
      'I can maintain an appropriate analytical register and clear line of argument from introduction to conclusion',
    ],
    keywords: [
      'essay',
      'argument',
      'analytical register',
      'planning',
      'introduction',
      'conclusion',
      'embedded quotation',
      'sustained analysis',
      'evaluation',
    ],
    starterActivity: {
      title: 'Pre-Assessment Preparation - 5-Minute Recall and Plan',
      duration: '10 minutes',
      instructions:
        "Display the assessment question on the board (see below). Students have 5 minutes to write a brief plan: three or four bullet points, each identifying a main analytical point, a key quotation, and a contextual link. Teacher circulates briefly to check that plans are focused and specific - plans that are too broad (e.g. 'talk about dreams') should be redirected towards specific moments and quotations. Remind students of the key marking criteria: analytical argument, language analysis, structural comment, integrated context. In the final 2 minutes, review the assessment conditions: silent individual work, class copies of the novel may be used for quotation checking only (no extended reading), responses to be written in full sentences throughout.",
      differentiation: {
        support:
          'Provide a planning grid with three rows (one per paragraph) and four columns (Main point / Key quotation / Language to analyse / Context link). Students complete the grid rather than writing bullet points.',
        core: 'Students plan using bullet points, ensuring they have a quotation and a context link for each paragraph.',
        stretch:
          'Students plan four paragraphs, identify a linking argument that will thread through all four, and write a one-sentence thesis statement that captures their overall argument.',
      },
      resources: [
        'Assessment question displayed on board',
        'Planning grid for support students',
        'Essay planning sheet (blank lined)',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Essay Writing - Main Response',
        duration: '40 minutes',
        instructions:
          "Assessment question: 'How does Steinbeck present the idea that the lives of ordinary people are shaped by forces beyond their control in Of Mice and Men?' Students write their essay response independently under timed conditions. Class copies of the novel are available for reference (quotation checking only). Teacher circulates silently, available to clarify the question if genuinely misunderstood but not offering content or structural support. At the 20-minute mark, write '20 minutes remaining' on the board. At the 35-minute mark, write '5 minutes remaining' as a signal to complete the current paragraph and begin a conclusion. Students who finish early should be directed to reread and improve embedded quotations, language analysis, and context integration.",
        differentiation: {
          support:
            "Provide a planning grid completed during the starter activity. Students may also use a paragraph frame for their first paragraph to establish the pattern: Point → Embedded quotation → Language analysis → Context link → Steinbeck's purpose.",
          core: 'Students write independently using their plan.',
          stretch:
            'Students aim for four full paragraphs plus a conclusion, and include structural analysis (foreshadowing, cyclical structure, or the compressed timeframe) as a distinct point within their response rather than a single passing comment.',
        },
        resources: [
          'Class copies of Of Mice and Men',
          'Essay paper or lined response sheets',
          'Timer displayed on board',
          'Planning grid completed in starter (for support students)',
        ],
      },
      {
        title: 'Self-Assessment and Targeted Improvement',
        duration: '5 minutes',
        instructions:
          "With 5 minutes remaining in the lesson, students stop writing and complete a brief self-assessment. They annotate their own essay with three symbols: (Q) wherever they have embedded a quotation and analysed the language, (C) wherever they have integrated context, and (A) wherever they have made an explicit statement about Steinbeck's purpose or authorial intent. Students count each symbol type and note which they have used least - this becomes their personal target for improvement when the work is returned.",
        differentiation: {
          support:
            'Provide a self-assessment checklist: "Have I... used at least three quotations? Commented on specific words or phrases? Mentioned the historical/social context? Explained what Steinbeck wanted the reader to think or feel?" Students tick each criterion and write one sentence noting what they would add if they had more time.',
          core: 'Students complete the symbol annotation and personal target note.',
          stretch:
            'Students write two sentences: one identifying the strongest analytical moment in their essay, and one identifying where the argument is weakest and how they would strengthen it with a specific quotation or contextual point.',
        },
        resources: [
          'Self-assessment checklist for support students',
          'Self-assessment symbol guide on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reflection - What Did I Do Well? What Would I Change?',
      duration: '5 minutes',
      instructions:
        'Students write two sentences on a sticky note: one sentence beginning "In this essay, I demonstrated..." and one beginning "Next time, I will improve my essay by..." These are attached to their work before submission. Teacher briefly reinforces: the goal of timed writing is not perfection - it is the application of skills under pressure. Every timed essay makes the next one easier. Mark and return the essays with targets aligned to the self-assessment criteria from the main activity.',
      differentiation: {
        support:
          'Sentence frames provided: "In this essay, I demonstrated [skill] when I [specific moment]..." and "Next time, I will improve by [specific action]..."',
        core: 'Students write both sentences independently.',
        stretch:
          'Students write a third sentence: "The most important thing I learned from this essay about Of Mice and Men is..." - connecting the writing experience back to the literary and thematic content of the unit.',
      },
    },
    homework:
      "Teacher returns the assessed essay with written feedback and two specific targets. Students complete a 'response to feedback' task: (1) rewrite one paragraph from their essay incorporating the teacher's first target; (2) write a new additional paragraph that addresses the second target. This extends the essay beyond the timed conditions and provides a further opportunity to practise integrated context and embedded quotation.",
    worksheetQuestions: [
      {
        question:
          "Essay question: 'How does Steinbeck present the idea that the lives of ordinary people are shaped by forces beyond their control in Of Mice and Men?' Write a full analytical introduction to this essay (4-6 sentences). Your introduction should name the text and author, establish your main argument, identify the key forces beyond characters' control, and signal your approach.",
        lines: 8,
        modelAnswer:
          "In Of Mice and Men (1937), John Steinbeck presents a world in which ordinary people are systematically denied control over their own lives by the interlocking forces of economic poverty, racial discrimination, gender inequality, and the brutal logic of the migrant labour system. Through the tragic arc of George and Lennie's story - and through the parallel experiences of Crooks, Candy, and Curley's wife - Steinbeck argues that the American Dream is not a personal aspiration but a structural impossibility for those at the bottom of the social hierarchy. The forces that shape his characters' lives are historical and social, not individual: they are the product of a society designed to keep the poor, the marginalised, and the vulnerable in precisely the positions that suit the powerful. In exploring these forces through carefully crafted characterisation, accumulative foreshadowing, and a cyclical structure that refuses resolution, Steinbeck transforms personal tragedy into social critique.",
        marks: 8,
      },
      {
        question:
          'Write one full analytical paragraph exploring how George and Lennie are shaped by forces beyond their control. Include an embedded quotation, language analysis, and contextual integration.',
        lines: 10,
        modelAnswer:
          "George and Lennie's rootlessness is not a choice but a structural consequence of the Great Depression's destruction of stable employment. When George tells Lennie that 'guys like us, that work on ranches, are the loneliest guys in the world,' the inclusive pronoun 'us' positions their loneliness as collective rather than individual - it is the condition of an entire class of dispossessed workers, not two men's personal misfortune. The colloquial directness of 'guys like us' is itself significant: it is the language of a man speaking from inside the suffering, not observing it from outside. Steinbeck, who had worked on ranches and knew migrant workers personally, ensures that George's words carry the authority of lived experience rather than sentiment. The adjective 'loneliest' is carefully chosen - not merely alone, but superlatively isolated, suggesting a complete absence of the human connection that makes life meaningful. That this loneliness is systemic rather than chosen is the force beyond George's control: the Depression has stripped migrant workers of permanence, security, and community, leaving them with nothing but the dream - which, as the novella demonstrates with devastating clarity, the same system will also destroy.",
        marks: 10,
      },
      {
        question:
          "Write one full analytical paragraph exploring how Curley's wife is shaped by forces beyond her control. Include an embedded quotation, language analysis, and contextual integration.",
        lines: 10,
        modelAnswer:
          "Curley's wife is shaped by the patriarchal structures of 1930s American society, which denied women legal independence, social autonomy, and even a name of their own. Steinbeck's decision to leave her unnamed - she is identified throughout the novella only as Curley's wife - is both a reflection and a critique of this erasure: her identity is entirely defined by her husband, and the men on the ranch who call her a 'tart' confirm that she is seen as a possession rather than a person. When she tells Lennie of her Hollywood dream - 'I coulda made somethin' of myself' - the past conditional 'coulda made' carries the weight of a life foreclosed. The aspirational language is undercut by the tense: she is no longer speaking of hope but of its permanent loss. The force beyond her control is twofold - the patriarchal marriage system that imprisoned her, and the class system that made her the only woman on an isolated ranch with no education, no income, and no community. Steinbeck presents her death not as the consequence of bad choices but as the inevitable outcome of a society that had already decided what kind of life she was permitted to have.",
        marks: 10,
      },
      {
        question:
          'Write one full analytical paragraph exploring how Crooks is shaped by forces beyond his control. Include an embedded quotation, language analysis, and contextual integration.',
        lines: 10,
        modelAnswer:
          "Crooks's isolation is the direct product of racial discrimination so deeply embedded in 1930s American society that it has been internalised by its victim as well as enforced by its perpetrators. His segregated room - described as 'a little shed that leaned off the wall of the barn' - is the physical manifestation of his social exclusion: a space defined by its subordination to the larger structure, just as Crooks himself is subordinated within the racial hierarchy. The diminutive 'little' infantilises the space, and the verb 'leaned' suggests precariousness - both the structure and its occupant are at the mercy of the main building. When Crooks reflects, 'I seen hundreds of men come by on the road an' on the ranches, with their bindles on their back an' that same damn thing in their heads. An' never a God damn one of 'em gets it,' his cynicism is not misanthropy but a rational response to decades of watching the same social forces crush the same dreams. The word 'hundreds' conveys the scale of this pattern - it is not George and Lennie who are unusual in failing; it is the system that is unusually effective at preventing success. Steinbeck uses Crooks to present racial discrimination not as a Southern aberration but as a nationwide condition, making his suffering a comment on an entire society's moral failure.",
        marks: 10,
      },
      {
        question:
          "Write a conclusion to the essay question: 'How does Steinbeck present the idea that the lives of ordinary people are shaped by forces beyond their control in Of Mice and Men?' Your conclusion should synthesise your argument, refer to Steinbeck's purpose, and avoid simply repeating your introduction.",
        lines: 8,
        modelAnswer:
          "Across Of Mice and Men, Steinbeck demonstrates with systematic precision that the forces which shape his characters' lives - economic collapse, racial segregation, gender inequality, and class exploitation - are not accidents of fate but the deliberate products of a social and economic system that benefits from keeping people divided, desperate, and controllable. Through the structural design of the novella - its escalating foreshadowing, its cyclical return to the same empty clearing, its compression into three relentless days - Steinbeck enacts rather than merely describes this powerlessness. The reader's growing dread as the chain of foreshadowed incidents builds towards its inevitable conclusion is itself an experience of being unable to change what is coming, mirroring the characters' own helplessness. Steinbeck's purpose is ultimately political: to generate empathy for the marginalised, expose the cruelty of a system that presents itself as a land of opportunity, and ask whether a society that produces such suffering can truly call itself just. The farm dream, recited with heartbreaking fidelity to the very last, is the novella's most powerful image of what ordinary people deserve - and the tragedy is that deserving it has never been enough.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'The assessment question has been chosen to be genuinely open and to reward the full range of skills developed across the unit: character analysis, language analysis, structural comment, and contextual integration all have a clear place in a strong response to this question. Avoid a question that invites character description rather than analytical argument.',
      'Students should have access to class copies of the novel during the assessment. This is standard practice for closed-text GCSE assessments where a clean copy is provided. However, they should not spend significant time re-reading - the novel is a reference tool for checking quotations, not a crutch.',
      'The self-assessment annotation (Q, C, A symbols) serves a dual function: it gives students immediate feedback on their own work and it gives the teacher a quick diagnostic of which skills are most secure and which need further development across the class.',
      'When marking the essays, prioritise quality of argument and integration of context over quantity of quotation or length. A focused three-paragraph essay with genuinely analytical commentary is worth more than a long essay that summarises characters and adds quotations without analysis.',
      'The homework response-to-feedback task is an important closing loop. It ensures that the assessment does not simply generate a grade but becomes a further learning opportunity. Return essays within one week to maintain momentum.',
    ],
    targetedSkills: [
      '9R.1 - Reading and understanding the full text',
      '9R.7 - Evaluating and synthesising critical responses',
      '9W.8 - Planning and structuring an extended essay under timed conditions',
      '9W.9 - Sustaining analytical register and argument across a full essay response',
    ],
  },
]
