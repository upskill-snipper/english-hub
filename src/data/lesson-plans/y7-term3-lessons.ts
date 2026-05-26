import type { LessonPlan } from '@/types'

export const y7Term3Lessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // T3.1 - Shaping Meaning: Stories (Lessons 1-5)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 1: Narrative Conventions - What Makes a Good Story ─────────────
  {
    id: 'y7-t3-01-narrative-conventions',
    title: 'Narrative Conventions - What Makes a Good Story',
    text: 'T3.1 Shaping Meaning: Stories',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify the key conventions of narrative writing (7R.3)',
      'Understand how setting, character, conflict, and resolution work together to create a story',
      'Analyse how writers use narrative conventions to engage readers',
      'Begin to evaluate the effectiveness of different narrative openings',
    ],
    successCriteria: [
      'I can name and define at least five narrative conventions',
      'I can identify narrative conventions in an extract from a published story',
      'I can explain how a writer uses setting and character to hook the reader',
      'I can rank different story openings and justify my choices',
    ],
    keywords: [
      'narrative',
      'convention',
      'setting',
      'character',
      'conflict',
      'resolution',
      'exposition',
      'climax',
    ],
    starterActivity: {
      title: 'Story in a Minute',
      duration: '8 minutes',
      instructions:
        'Display the titles of five well-known stories or fairy tales on the board. Students have 60 seconds to retell one of them to a partner in as few sentences as possible. Afterwards, pairs discuss: what elements did every retelling include? Teacher takes class feedback and records common elements (character, setting, problem, ending) on the board, introducing the term "narrative conventions".',
      differentiation: {
        support:
          'Provide a prompt card with four headings: Who? Where? What goes wrong? How does it end?',
        core: 'Students retell the story and identify at least three common elements independently.',
        stretch:
          'Students consider which element is most essential - could a story work without one of them? Justify your answer.',
      },
      resources: ['Story titles slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Mapping Narrative Conventions',
        duration: '15 minutes',
        instructions:
          'Teacher introduces the narrative arc (exposition, rising action, climax, falling action, resolution) using a visual diagram. Students receive an extract from a well-known short story and work in pairs to identify each convention at work: setting, character introduction, dialogue, conflict, and foreshadowing. Pairs annotate the extract using a colour-coding key provided on the worksheet. Class discussion follows: which conventions appear early vs later, and why?',
        differentiation: {
          support:
            'Provide a partially completed annotation with two conventions already identified and labelled.',
          core: 'Students annotate the extract identifying all five conventions with colour coding.',
          stretch:
            'Students explain how the writer manipulates conventions - for example, starting in medias res or withholding the resolution.',
        },
        resources: [
          'Narrative arc diagram handout',
          'Short story extract',
          'Colour-coding key sheet',
          'Highlighters (five colours)',
        ],
      },
      {
        title: 'Evaluating Story Openings',
        duration: '20 minutes',
        instructions:
          'Provide students with four different story openings (e.g. dialogue opening, action opening, description opening, mystery opening). Students read all four and complete a ranking activity: order them from most to least effective at hooking the reader, writing a sentence of justification for each ranking. Students then write their own opening paragraph (100 words) using the convention they found most effective. Two or three volunteers share under the visualiser for class feedback.',
        differentiation: {
          support:
            'Provide sentence starters for the justification: "This opening is effective because..." and a writing frame for the original paragraph.',
          core: 'Students rank all four openings with justifications and write an original opening paragraph.',
          stretch:
            'Students write two opening paragraphs using different conventions and evaluate which is more effective and why.',
        },
        resources: [
          'Four story openings handout',
          'Ranking grid worksheet',
          'Writing frame (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Convention Bingo',
      duration: '7 minutes',
      instructions:
        'Students receive a bingo card with nine narrative convention terms. Teacher reads out definitions or examples one at a time. Students cross off the matching term. First to complete a line explains all three terms to the class. Teacher uses this to check and correct misconceptions.',
      differentiation: {
        support: 'Bingo card includes brief definitions beneath each term.',
        core: 'Students match definitions to terms on their bingo card.',
        stretch:
          'When a student wins, they must provide an original example from a text they know for each term on their winning line.',
      },
    },
    homework:
      'Read the opening chapter of your current reading book and identify at least four narrative conventions. Write a paragraph explaining how the writer uses one convention to engage the reader.',
    worksheetQuestions: [
      {
        question: 'List five narrative conventions and write a one-sentence definition for each.',
        lines: 6,
        modelAnswer:
          'Setting - the time and place where the story takes place. Character - the people or figures who drive the action. Conflict - the problem or challenge the character faces. Climax - the turning point or moment of highest tension. Resolution - how the conflict is resolved and the story concludes.',
        marks: 5,
      },
      {
        question:
          'Read the extract below and identify which narrative conventions are present. Explain how the writer uses one of them to engage the reader.\n\n"The village sat silent under a low grey sky. Anna pushed open the gate, her heart hammering. She had not been here since the fire."',
        lines: 6,
        modelAnswer:
          'The extract uses setting ("village sat silent under a low grey sky"), character (Anna), and foreshadowing/mystery ("since the fire"). The setting is effective because the adjectives "silent" and "grey" create an atmosphere of unease and emptiness, which hints that something terrible happened here and makes the reader want to find out what the fire destroyed.',
        marks: 4,
      },
      {
        question:
          'Why might a writer choose to begin a story with dialogue rather than description? Give one advantage and one disadvantage.',
        lines: 4,
        modelAnswer:
          'A dialogue opening throws the reader straight into the action and immediately reveals character through voice, which can be more engaging than description. However, a disadvantage is that without description the reader may feel disoriented because they have no sense of where or when the story is set.',
        marks: 3,
      },
      {
        question:
          'Explain the difference between "exposition" and "climax" in a story. Use an example from a story you know.',
        lines: 5,
        modelAnswer:
          'Exposition is the opening section of a story where the writer introduces the characters, setting, and situation before the main conflict begins. The climax is the moment of highest tension or the turning point where the conflict reaches its peak. For example, in a fairy tale, the exposition introduces the character and their ordinary life, while the climax might be the moment they confront the villain.',
        marks: 4,
      },
      {
        question:
          'Write a story opening (80-100 words) that uses at least three narrative conventions. Label each convention you have used.',
        lines: 10,
        modelAnswer:
          'The market square buzzed with noise and colour as the sun dipped behind the cathedral tower. [Setting] Twelve-year-old Kai threaded through the crowd, clutching a crumpled letter he had found on his doorstep that morning. [Character] The letter said only three words: "They know everything." [Conflict/mystery] He glanced over his shoulder. Was it his imagination, or had that figure in the grey coat been following him since he left home? [Foreshadowing] The conventions used are setting, character, conflict, and foreshadowing.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson establishes foundational terminology that will be revisited across the entire term. Consider creating a classroom display of the narrative arc.',
      'The story openings for the ranking activity can be sourced from age-appropriate published fiction or teacher-written examples. Vary the genre to maintain engagement.',
      "The writing task at the end serves as a useful baseline assessment of students' narrative writing at the start of the unit.",
      'Collect the homework annotations to gauge which conventions students can identify independently and which need reinforcement.',
    ],
    targetedSkills: [
      '7R.3',
      'Narrative Conventions',
      'Story Structure',
      'Evaluating Openings',
      'Creative Writing',
    ],
  },

  // ── Lesson 2: Moral Themes in Folktales - Messages and Meanings ──────────
  {
    id: 'y7-t3-02-moral-themes-folktales',
    title: 'Moral Themes in Folktales - Messages and Meanings',
    text: 'T3.1 Shaping Meaning: Stories',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify the moral or message in a range of folktales (7R.1)',
      'Understand how writers use characters and events to convey themes (7R.5)',
      'Analyse how the structure of a folktale supports its moral message',
      'Compare themes across different cultural traditions',
    ],
    successCriteria: [
      'I can identify the moral in at least two different folktales',
      "I can explain how a character's actions reveal the story's message",
      'I can use evidence from the text to support my interpretation of the theme',
      'I can recognise that different cultures share similar moral messages',
    ],
    keywords: [
      'moral',
      'theme',
      'folktale',
      'allegory',
      'virtue',
      'consequence',
      'archetype',
      'universal',
    ],
    starterActivity: {
      title: 'Moral Matching',
      duration: '7 minutes',
      instructions:
        'Display six well-known moral statements (e.g. "Slow and steady wins the race", "Don\'t judge a book by its cover") alongside six folktale titles. Students match each moral to the correct story. Teacher reveals answers and asks: how do we know the moral of a story if it is not stated directly? Introduce the idea that writers embed messages through characters\' actions and consequences.',
      differentiation: {
        support:
          'Provide a one-sentence summary of each folktale beneath its title to aid matching.',
        core: 'Students complete the matching activity and explain one choice.',
        stretch:
          'Students identify a folktale that could have more than one moral and argue for both interpretations.',
      },
      resources: ['Moral matching slide/worksheet', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Close Reading: Unpicking the Moral',
        duration: '18 minutes',
        instructions:
          'Students read a complete short folktale (e.g. an Aesop\'s fable or a West African Anansi story). Teacher models the first paragraph, demonstrating how to underline key moments where the character makes a choice that leads to a consequence. Students then work in pairs to continue annotating the rest of the story, identifying: (1) what the main character wants, (2) how they behave, (3) what happens as a result. Pairs write a one-sentence theme statement: "This story teaches that..." Teacher takes class feedback, modelling how to move from a simple moral to a more sophisticated theme statement.',
        differentiation: {
          support:
            'Provide a guided reading worksheet with three boxes: Want / Behaviour / Consequence, with the first box partially completed.',
          core: 'Students annotate the full story and write a one-sentence theme statement independently.',
          stretch:
            'Students evaluate whether the moral is presented as simple (right/wrong) or nuanced. Could a reader disagree with the message?',
        },
        resources: [
          'Folktale text (printed)',
          'Want/Behaviour/Consequence worksheet (support tier)',
          'Highlighters',
        ],
      },
      {
        title: 'Comparing Morals Across Cultures',
        duration: '18 minutes',
        instructions:
          'Students read a second folktale from a different cultural tradition that shares a similar theme (e.g. a Chinese folktale about greed alongside an Aesop fable about greed). In groups of three, students complete a comparison grid: What is the moral? How is it conveyed? What is similar? What is different? Groups share their findings with the class. Teacher draws out the idea that some moral messages are universal across cultures, introducing the concept of "universal themes".',
        differentiation: {
          support:
            'Provide a pre-filled example row in the comparison grid and sentence starters for the "similar/different" columns.',
          core: 'Students complete the comparison grid and contribute one finding to class discussion.',
          stretch:
            'Students consider why the same moral appears in different cultures and write a paragraph exploring this, linking to the concept of universal human experience.',
        },
        resources: [
          'Second folktale text (printed)',
          'Comparison grid worksheet',
          'Sentence starters sheet (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Theme Statement Gallery',
      duration: '7 minutes',
      instructions:
        'Each pair writes their best theme statement on a sticky note and places it on the board. Class reads the gallery silently. Teacher selects three and asks: which is the most precise? Which is the most sophisticated? What makes a strong theme statement? Students vote with thumbs for the strongest.',
      differentiation: {
        support: 'Teacher provides a sentence frame: "This story teaches that... because...".',
        core: 'Students write and display a complete theme statement.',
        stretch:
          'Students refine a weaker theme statement from the gallery, explaining their improvements.',
      },
    },
    homework:
      "Read a folktale from a tradition you have not studied before (a selection is provided on the homework sheet). Write a paragraph explaining the moral and how the writer conveys it through the characters' actions.",
    worksheetQuestions: [
      {
        question:
          'What is the difference between a "moral" and a "theme"? Give an example of each.',
        lines: 4,
        modelAnswer:
          'A moral is a specific lesson or rule the story teaches, such as "honesty is the best policy." A theme is the broader idea or topic the story explores, such as "the importance of truth in human relationships." A moral is direct and instructive; a theme is wider and more open to interpretation.',
        marks: 3,
      },
      {
        question:
          "Read the folktale extract provided. What is the main character's key mistake, and what consequence does it lead to?",
        lines: 5,
        modelAnswer:
          "The main character's key mistake is their greed or pride - they take more than they need despite being warned. The consequence is that they lose everything they had, which teaches the reader that selfishness leads to ruin. The writer makes the consequence dramatic to ensure the moral is clear.",
        marks: 4,
      },
      {
        question:
          "Explain how the writer uses the character's actions (not just the ending) to convey the moral of the story. Use evidence from the text.",
        lines: 6,
        modelAnswer:
          "The writer conveys the moral gradually through the character's repeated bad choices. Each time the character ignores advice or acts selfishly, a small negative consequence follows, building towards the final punishment. This pattern of action and consequence teaches the reader the moral lesson step by step, rather than simply stating it at the end. For example, the character's dismissal of the wise elder's warning foreshadows their downfall.",
        marks: 5,
      },
      {
        question:
          'Why do you think similar moral messages appear in folktales from completely different cultures? Write a paragraph explaining your ideas.',
        lines: 6,
        modelAnswer:
          'Similar morals appear across cultures because all human societies face the same fundamental challenges: how to live together, how to handle temptation, and how to treat others fairly. Folktales were used to teach children and communities how to behave, so it is natural that cultures independently developed stories about honesty, kindness, and the dangers of greed. These shared moral messages suggest that certain values are universal to the human experience, regardless of geography or time period.',
        marks: 4,
      },
      {
        question:
          'Write a theme statement for each of the two folktales you studied today. Then write one sentence explaining what they have in common.',
        lines: 5,
        modelAnswer:
          'Folktale 1: "The story explores how greed blinds people to what truly matters, leading to isolation and loss." Folktale 2: "The tale examines the consequences of prioritising material wealth over relationships and community." Both stories share the universal theme that excessive desire for more leads to the destruction of what one already has.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Select folktales that are age-appropriate and culturally sensitive. Ensure representation from at least two different continents across the lesson.',
      'The transition from "moral" to "theme" is a key conceptual step at this stage. Scaffold it explicitly: morals are direct lessons; themes are broader ideas.',
      'This lesson lays the groundwork for the comparative work in Lessons 3-5. Ensure students retain their comparison grids for reference.',
      'If time allows, explore whether modern stories (films, TV shows) also contain morals, to help students see the relevance of folktale conventions.',
    ],
    targetedSkills: [
      '7R.1',
      '7R.5',
      'Theme Identification',
      'Moral Analysis',
      'Cross-Cultural Comparison',
    ],
  },

  // ── Lesson 3: Comparing Stories - Finding Similarities ────────────────────
  {
    id: 'y7-t3-03-comparing-stories',
    title: 'Comparing Stories - Finding Similarities',
    text: 'T3.1 Shaping Meaning: Stories',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify similarities and differences between two stories (7R.6)',
      'Compare how writers use narrative conventions to shape meaning',
      'Develop comparative vocabulary and connectives',
      'Organise comparative ideas using a structured framework',
    ],
    successCriteria: [
      'I can identify at least three points of comparison between two stories',
      'I can use comparative connectives accurately (similarly, in contrast, whereas)',
      'I can explain how both writers use a specific convention differently',
      'I can complete a comparison framework with evidence from both texts',
    ],
    keywords: [
      'compare',
      'contrast',
      'similarity',
      'difference',
      'connective',
      'whereas',
      'similarly',
      'interpretation',
    ],
    starterActivity: {
      title: 'Spot the Link',
      duration: '8 minutes',
      instructions:
        'Display two images side by side (e.g. two different paintings of a storm). Students write three similarities and three differences on mini-whiteboards. Teacher collects responses and models how to turn observations into comparative sentences using connectives: "Both images...", "Similarly...", "In contrast...", "Whereas...". Introduce the idea that comparing texts requires the same skills.',
      differentiation: {
        support:
          'Provide sentence starters with connectives already embedded: "Both images show... Similarly..."',
        core: 'Students write three comparative sentences independently using at least two different connectives.',
        stretch:
          'Students write a comparative sentence that analyses the effect of the difference, not just identifying it.',
      },
      resources: ['Two images slide', 'Mini-whiteboards', 'Comparative connectives list'],
    },
    mainActivities: [
      {
        title: 'Building a Comparison Framework',
        duration: '18 minutes',
        instructions:
          'Students revisit the two folktales from Lesson 2 (or receive two new short stories with overlapping themes). Teacher introduces a comparison framework with four rows: Theme, Character, Setting, Writer\'s Methods. Teacher models completing the first row together, finding evidence from both texts and writing a comparative sentence. Students work in pairs to complete the remaining three rows. Teacher circulates, pushing students to move beyond surface-level comparison ("both have a character") to analytical comparison ("both characters face temptation, but they respond differently").',
        differentiation: {
          support:
            'Provide a partially completed framework with one side filled in, so students only need to find evidence from the second text.',
          core: 'Students complete all four rows of the framework with evidence and comparative sentences.',
          stretch:
            'Students add a fifth row of their own choosing (e.g. tone, structure, narrator) and complete it independently.',
        },
        resources: [
          'Two story texts (from Lesson 2 or new)',
          'Comparison framework worksheet',
          'Comparative connectives word mat',
        ],
      },
      {
        title: 'Writing Comparative Sentences',
        duration: '17 minutes',
        instructions:
          'Using their completed framework, students select their strongest comparison point and write a short comparative paragraph (4-5 sentences). Teacher provides a model paragraph structure: comparative point, evidence from Text A, brief analysis, evidence from Text B, brief analysis, linking sentence. Students draft their paragraph. After 12 minutes, pairs swap and peer-assess using a checklist: Does it compare (not just describe)? Does it use evidence? Does it use comparative connectives?',
        differentiation: {
          support:
            'Provide a paragraph writing frame with gaps for evidence and analysis, with connectives pre-printed.',
          core: 'Students write a comparative paragraph independently using the framework.',
          stretch:
            'Students write a second comparative paragraph on a different comparison point, using different connectives.',
        },
        resources: [
          'Model comparative paragraph (displayed)',
          'Paragraph writing frame (support tier)',
          'Peer-assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Connective Challenge',
      duration: '7 minutes',
      instructions:
        'Teacher displays a weak comparative sentence (e.g. "Both stories have a character who is greedy. The first character is a king. The second is a farmer."). Students have two minutes to rewrite it as one strong comparative sentence using appropriate connectives. Volunteers share, and the class votes on the most effective version. Teacher highlights key features of the winning sentence.',
      differentiation: {
        support: 'Teacher provides a menu of three connectives to choose from.',
        core: 'Students rewrite the sentence using at least one comparative connective.',
        stretch:
          "Students rewrite the sentence and add an analytical comment about what the difference reveals about the writers' intentions.",
      },
    },
    homework:
      'Choose two stories you have read (they can be from class or your own reading). Write five comparative sentences, each using a different connective, comparing one aspect of the stories.',
    worksheetQuestions: [
      {
        question: 'List four comparative connectives and write an example sentence using each one.',
        lines: 5,
        modelAnswer:
          'Similarly - "Similarly, both writers use a young protagonist who must overcome a challenge." In contrast - "In contrast, the first story is set in a rural village, while the second takes place in a futuristic city." Whereas - "Whereas the hero in Text A succeeds through bravery, the hero in Text B relies on intelligence." Likewise - "Likewise, both stories end with the character learning an important lesson."',
        marks: 4,
      },
      {
        question:
          'What is the difference between describing two stories separately and comparing them? Why is comparison a higher-level skill?',
        lines: 4,
        modelAnswer:
          'Describing two stories separately means writing about each one in turn without connecting them. Comparing means examining them side by side, identifying what is similar and different, and explaining what those similarities or differences reveal. Comparison is a higher-level skill because it requires analysis - you must think about why writers make different choices and what effect those choices have, rather than simply summarising.',
        marks: 3,
      },
      {
        question:
          'Read the two short extracts below. Write a comparative paragraph that compares how the writers create a sense of danger.',
        lines: 8,
        modelAnswer:
          'Both writers create a sense of danger, but they use different methods to achieve this. In Text A, the writer uses short, fragmented sentences such as "He ran. He stumbled. The shadow followed." to create a breathless pace that mirrors the character\'s panic. Similarly, Text B conveys danger, but through descriptive imagery: "the forest closed in around her like a tightening fist." Whereas Text A\'s danger feels immediate and physical, Text B\'s danger is more atmospheric and psychological. Both approaches are effective, but they engage the reader in different ways - Text A through pace and Text B through imagery.',
        marks: 5,
      },
      {
        question:
          'Using your comparison framework, identify the most significant similarity between the two stories you studied. Explain why this similarity matters.',
        lines: 5,
        modelAnswer:
          'The most significant similarity is that both stories explore the theme of consequences - characters who act selfishly face punishment, while those who are generous are rewarded. This matters because it reveals that both writers, despite coming from different cultures and time periods, share the belief that stories should teach moral lessons about how to treat others. The similarity suggests that this moral concern is universal.',
        marks: 4,
      },
      {
        question:
          'A student writes: "Text A is about a king who is greedy. Text B is about a girl who is kind." Explain what is wrong with this as a comparison, and rewrite it as a proper comparative sentence.',
        lines: 5,
        modelAnswer:
          'This is not a comparison - it is two separate descriptions. The student describes each text individually without connecting them or using comparative language. A proper comparative sentence: "Whereas Text A centres on a king whose greed leads to his downfall, Text B presents a girl whose kindness is ultimately rewarded, suggesting that the two writers use contrasting characters to explore opposite sides of the same moral - that our treatment of others determines our fate."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson introduces comparative writing skills that are essential for the assessment in Lesson 5. Ensure all students leave with a completed comparison framework.',
      'The comparison framework can be displayed as a poster or kept in books as a reference tool for future comparative work.',
      'Push students to move beyond surface comparison. The phrase "what does this difference reveal?" is a useful teacher prompt during circulation.',
      'Consider pairing stronger and weaker readers for the framework activity to support access to both texts.',
    ],
    targetedSkills: [
      '7R.6',
      'Comparative Analysis',
      'Connective Use',
      'Evidence Selection',
      'Analytical Writing',
    ],
  },

  // ── Lesson 4: Writing Structured Comparison Paragraphs ────────────────────
  {
    id: 'y7-t3-04-structured-comparison-paragraphs',
    title: 'Writing: Structured Comparison Paragraphs',
    text: 'T3.1 Shaping Meaning: Stories',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Write a structured comparative paragraph using a clear framework (7W.2)',
      'Embed evidence from two texts fluently within comparative writing (7W.5)',
      'Use comparative connectives to link ideas across texts',
      'Self-assess and improve comparative paragraphs against success criteria',
    ],
    successCriteria: [
      'I can write a comparative paragraph that addresses both texts, not just one',
      'I can embed short quotations from both texts within my sentences',
      'I can use at least three different comparative connectives accurately',
      'I can self-assess my paragraph using the comparative writing checklist and set a target',
    ],
    keywords: [
      'embed',
      'quotation',
      'comparative',
      'paragraph structure',
      'fluency',
      'integrate',
      'connective',
      'analysis',
    ],
    starterActivity: {
      title: 'Fix the Paragraph',
      duration: '8 minutes',
      instructions:
        'Display a weak comparative paragraph on the board that makes several common errors: it discusses Text A fully before mentioning Text B (not integrated), it uses no connectives, and its quotations are dropped in without embedding. Students identify three problems in pairs, then discuss as a class. Teacher annotates the paragraph, highlighting each weakness, and introduces the lesson focus: learning to write integrated, fluent comparative paragraphs.',
      differentiation: {
        support:
          'Provide a checklist of three errors to look for (not integrated, no connectives, dropped quotations).',
        core: 'Students identify all three problems and suggest one improvement for each.',
        stretch:
          'Students rewrite the opening two sentences of the weak paragraph to correct the errors before class discussion.',
      },
      resources: ['Weak paragraph slide', 'Error checklist (support tier)'],
    },
    mainActivities: [
      {
        title: 'Deconstructing a Model Comparative Paragraph',
        duration: '15 minutes',
        instructions:
          'Teacher displays a high-quality model comparative paragraph (comparing two characters from the stories studied). Teacher reads it aloud and models annotation: circling connectives, underlining embedded quotations, boxing the comparative point and the analytical sentences. Students receive a second model paragraph and independently annotate it using the same system. Pairs compare their annotations and discuss: how is this paragraph structured? What makes it flow? Teacher draws out a clear structure: Comparative Point > Evidence A + Analysis > Connective > Evidence B + Analysis > Linking Sentence.',
        differentiation: {
          support:
            'Provide an annotation key with symbols for each feature and one feature already identified.',
          core: 'Students annotate the second paragraph independently, identifying all key features.',
          stretch:
            'Students evaluate which analytical sentence is stronger and explain what makes it more effective.',
        },
        resources: ['Two model comparative paragraphs', 'Annotation key sheet', 'Highlighters'],
      },
      {
        title: 'Guided and Independent Comparative Writing',
        duration: '22 minutes',
        instructions:
          'Using the comparison frameworks from Lesson 3, students write their own comparative paragraph responding to: "Compare how the two writers present the theme of [greed/kindness/courage]." Teacher writes the first sentence together on the board (the comparative point), then releases students to continue independently. Provide a word bank of embedded quotation sentence starters (e.g. "The writer describes X as \'...\', which suggests...") and comparative connectives. After 15 minutes of writing, students self-assess against a five-point checklist. They highlight their strongest sentence in green and their weakest in orange, then write one specific improvement target.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for each stage of the paragraph structure, plus the word bank.',
          core: 'Students write a full comparative paragraph using the word bank and self-assess using the checklist.',
          stretch:
            'Students write the paragraph without the writing frame, then write a second paragraph on a different comparison point.',
        },
        resources: [
          'Comparison frameworks (from Lesson 3)',
          'Word bank: quotation starters and connectives',
          'Five-point self-assessment checklist',
          'Writing frame (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Before and After',
      duration: '5 minutes',
      instructions:
        'Teacher revisits the weak paragraph from the starter. Students look at their own comparative paragraph and identify one specific way their writing is better than the weak example. Students share with a partner. Teacher takes two or three examples to model to the class, reinforcing the features of strong comparative writing.',
      differentiation: {
        support: 'Teacher prompts with: "Look for connectives, embedding, or integration."',
        core: 'Students identify one specific improvement and explain it to a partner.',
        stretch:
          'Students identify one way their paragraph could be even better and rewrite one sentence to demonstrate.',
      },
    },
    homework:
      'Rewrite your comparative paragraph incorporating the improvement target you set during the self-assessment. Then write a brief note explaining what you changed and why it improves the paragraph.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between a "dropped" quotation and an "embedded" quotation? Write an example of each.',
        lines: 5,
        modelAnswer:
          "A dropped quotation is placed into the paragraph as a standalone sentence without being woven into the writer's own words, e.g. \"The character is scared. 'His hands trembled.'\" An embedded quotation is integrated into the sentence, e.g. \"The character's fear is evident as 'his hands trembled' when he approached the door.\" Embedded quotations are more fluent and show control of evidence.",
        marks: 3,
      },
      {
        question:
          'Write a comparative point sentence that could begin a paragraph comparing two characters. Your sentence must include a comparative connective.',
        lines: 3,
        modelAnswer:
          "Both writers present their protagonists as outsiders; however, whereas Text A's character is isolated by choice, Text B's character is excluded by society, which creates different reader responses to their situations.",
        marks: 3,
      },
      {
        question:
          'Read the model comparative paragraph provided. Identify and label: (a) the comparative point, (b) evidence from Text A, (c) evidence from Text B, (d) at least two comparative connectives, (e) the linking sentence.',
        lines: 6,
        modelAnswer:
          '(a) The comparative point is the opening sentence that establishes what is being compared. (b) Evidence from Text A is the first quotation used, embedded within an analytical sentence. (c) Evidence from Text B is the second quotation, introduced after a comparative connective. (d) Comparative connectives such as "Similarly" and "In contrast" are used to link ideas. (e) The linking sentence at the end connects the comparison back to the theme or question.',
        marks: 5,
      },
      {
        question:
          'Write a full comparative paragraph comparing how two writers create a sense of setting. Use embedded quotations and at least two comparative connectives.',
        lines: 10,
        modelAnswer:
          'Both writers create vivid settings, but they use contrasting methods to establish atmosphere. In Text A, the writer presents the village as welcoming through warm imagery, describing the houses as having "golden light spilling from every window," which suggests safety and community. In contrast, Text B\'s writer creates an unwelcoming setting through pathetic fallacy: "the sky hung low and grey, pressing down like a weight." The verb "pressing" implies that the environment itself is hostile, creating a sense of oppression that mirrors the character\'s emotional state. Whereas Text A\'s setting offers comfort, Text B\'s setting foreshadows the challenges ahead, demonstrating how writers use setting not just as a backdrop but as a tool to shape the reader\'s expectations.',
        marks: 6,
      },
      {
        question:
          'A student writes: "Text A uses a simile. Text B also uses a simile. They are both effective." Rewrite this as a proper comparative analysis sentence with embedded evidence.',
        lines: 5,
        modelAnswer:
          'Both writers employ similes to convey danger; however, they create different effects. Text A\'s simile, "the river roared like a wounded animal," personifies the natural world as something alive and threatening, whereas Text B\'s simile, "the silence spread like ice," creates menace through stillness rather than noise, suggesting that the danger is invisible and inescapable.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is the direct preparation for the assessment in Lesson 5. Students should leave with a strong model paragraph and a clear understanding of the expected structure.',
      'The self-assessment checklist should include: (1) Does my paragraph discuss both texts? (2) Have I used embedded quotations? (3) Have I used at least two comparative connectives? (4) Have I analysed, not just described? (5) Does my paragraph link back to the question?',
      'Collect and review the self-assessed paragraphs to identify students who will need additional support before the assessment.',
      'Consider displaying the weak/strong paragraph comparison as a permanent reference in the classroom.',
    ],
    targetedSkills: [
      '7W.2',
      '7W.5',
      'Comparative Writing',
      'Quotation Embedding',
      'Self-Assessment',
      'Paragraph Structure',
    ],
  },

  // ── Lesson 5: Assessment - Comparative Analysis ───────────────────────────
  {
    id: 'y7-t3-05-assessment-comparative-analysis',
    title: 'Assessment: Comparative Analysis',
    text: 'T3.1 Shaping Meaning: Stories',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Demonstrate the ability to compare two texts in a sustained written response (7R.6)',
      'Apply comparative paragraph structure under timed conditions (7W.2)',
      'Select and embed evidence from two texts effectively',
      "Show understanding of theme, character, and writer's methods across two stories",
    ],
    successCriteria: [
      'I can write at least two comparative paragraphs in the time allowed',
      "I can compare theme, character, or writer's methods across both texts",
      'I can embed quotations from both texts to support my analysis',
      'I can use comparative connectives to link my points clearly',
    ],
    keywords: [
      'assessment',
      'comparative',
      'analysis',
      'timed writing',
      'evidence',
      'structure',
      'connective',
      'sustained response',
    ],
    starterActivity: {
      title: 'Assessment Preparation',
      duration: '10 minutes',
      instructions:
        'Students re-read both assessment texts (provided fresh or revisited from previous lessons). Teacher displays the assessment question and reads it aloud. Students spend five minutes planning their response using a comparison framework or bullet-point plan. Teacher reminds students of the paragraph structure, the importance of connectives, and the need to embed evidence. Distribute the success criteria checklist for reference during writing.',
      differentiation: {
        support:
          'Provide a pre-printed planning frame with spaces for two comparison points, with prompt questions to guide evidence selection.',
        core: 'Students plan independently using a blank comparison framework.',
        stretch:
          'Students plan three or more comparison points and consider how to sequence them for maximum impact.',
      },
      resources: [
        'Assessment texts (x2)',
        'Assessment question slide',
        'Planning frame (support tier)',
        'Success criteria checklist',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Comparative Writing',
        duration: '35 minutes',
        instructions:
          'Students write their comparative analysis response under timed conditions. The question should be displayed throughout (e.g. "Compare how the two writers present the theme of courage. You should compare: the writers\' ideas and attitudes, the writers\' use of language and structure, the overall impact on the reader."). Students write in silence. Teacher circulates to monitor engagement and offer minimal, non-directive prompts to students who are stuck (e.g. "Look at your plan - what is your next comparison point?"). At the halfway mark (17 minutes), teacher gives a quiet time reminder.',
        differentiation: {
          support:
            'Provide a writing frame with the paragraph structure outlined and connectives listed at the top. Students should aim for two paragraphs.',
          core: 'Students write two to three comparative paragraphs independently under timed conditions.',
          stretch:
            'Students write three or more paragraphs and attempt a short introduction and conclusion framing their overall comparison.',
        },
        resources: [
          'Assessment question (displayed)',
          'Lined paper or assessment booklet',
          'Writing frame (support tier)',
          'Timer displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reflection and Self-Assessment',
      duration: '8 minutes',
      instructions:
        'Students put down their pens and re-read their response. Using the success criteria checklist, they tick each criterion they believe they have met and circle one area for improvement. Students write a brief reflection: "One thing I did well was... Next time I would improve..." Teacher collects responses and reflections together.',
      differentiation: {
        support:
          'Teacher reads the checklist aloud and students self-assess one criterion at a time.',
        core: 'Students self-assess independently using the checklist and write a reflection.',
        stretch:
          'Students identify a specific sentence in their response that could be improved and rewrite it on the reflection sheet.',
      },
    },
    homework:
      'No homework set following the assessment. Students who wish to improve may rewrite one paragraph for additional feedback.',
    worksheetQuestions: [
      {
        question:
          "Compare how the two writers present the theme of [specified theme]. You should compare:\n- the writers' ideas and perspectives\n- the writers' use of language and/or structure\n- the overall impact on the reader\n\nWrite your response as a series of comparative paragraphs.",
        lines: 30,
        modelAnswer:
          'A strong response will include: an opening that establishes the focus of comparison; two or more comparative paragraphs, each addressing a specific point of comparison (e.g. how both writers present the protagonist\'s response to the theme, how both writers use specific language techniques); embedded quotations from both texts; comparative connectives such as "similarly," "in contrast," "whereas," "both writers"; analytical comments that go beyond description to explain the effect on the reader; a concluding sentence that draws the comparison together. Higher-level responses will explore subtle differences in writers\' attitudes and consider how context may influence meaning.',
        marks: 20,
      },
    ],
    teacherNotes: [
      'This is a formal assessment lesson. Ensure the classroom is set up for individual, silent writing. Remove or cover any classroom displays that could provide scaffold if you want to assess unassisted performance.',
      'The assessment question should mirror the style and demands of the comparative work practised in Lessons 3 and 4.',
      'Consider allowing support-tier students to use the comparison framework as a planning tool, as the goal is to assess comparative writing ability rather than planning skills.',
      'Mark using a rubric that assesses: comparison (vs. description), evidence use, connective range, analytical depth, and overall coherence. Share rubric criteria with students before the assessment.',
      'Use the self-assessment reflections to inform your marking priorities and identify students who need targeted feedback.',
    ],
    targetedSkills: [
      '7R.6',
      '7W.2',
      'Comparative Analysis',
      'Timed Writing',
      'Evidence Embedding',
      'Self-Assessment',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // T3.2 - Poetry (Lessons 6-10)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 6: Introduction to Poetry - What Makes a Poem ─────────────────
  {
    id: 'y7-t3-06-introduction-to-poetry',
    title: 'Introduction to Poetry - What Makes a Poem',
    text: 'T3.2 Poetry',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify the key features that distinguish poetry from prose (7R.3)',
      'Understand the terms stanza, line, verse, rhyme, rhythm, and enjambment',
      'Explore how the layout of a poem affects how it is read and understood',
      'Begin to read poetry aloud with attention to rhythm and emphasis',
    ],
    successCriteria: [
      'I can name at least five features of poetry and explain each one',
      'I can identify stanzas, rhyme, and enjambment in a poem',
      'I can explain how the layout of a poem is different from prose and why this matters',
      'I can read a poem aloud with appropriate pace and emphasis',
    ],
    keywords: ['poetry', 'stanza', 'verse', 'line', 'rhyme', 'rhythm', 'enjambment', 'form'],
    starterActivity: {
      title: 'Poem or Not?',
      duration: '7 minutes',
      instructions:
        'Display four short texts on the board: a poem, a prose paragraph, a set of song lyrics, and a text arranged to look like a poem but written in prose. Students vote on which are poems and which are not, holding up cards marked P (poem) or N (not a poem). Teacher reveals answers and asks: what clues did you use? Class discussion builds towards a working definition of poetry, highlighting form, rhythm, and concentrated language.',
      differentiation: {
        support:
          'Provide a hint sheet listing three features to look for: line breaks, rhyme, and rhythm.',
        core: 'Students vote and explain their reasoning for at least one text.',
        stretch:
          'Students argue why song lyrics might or might not count as poetry, drawing on the features discussed.',
      },
      resources: ['Four texts slide', 'P/N voting cards'],
    },
    mainActivities: [
      {
        title: 'Annotating a Poem: Key Features',
        duration: '18 minutes',
        instructions:
          'Students receive a printed copy of an accessible poem (e.g. a poem with clear rhyme, stanzas, and enjambment). Teacher reads the poem aloud twice: first for enjoyment, second for annotation. Teacher models annotating the first stanza, labelling: stanza, line, rhyme scheme (using letter notation ABAB etc.), an example of enjambment, and a comment on rhythm. Students then annotate the remaining stanzas in pairs. Class reconvenes to share findings - teacher adds to a whole-class annotated version on the board.',
        differentiation: {
          support:
            'Provide a glossary card defining each feature with an example, and pre-label the first two features on the printed poem.',
          core: 'Students annotate the poem identifying all five features independently.',
          stretch:
            'Students explain the effect of one feature - for example, why does the poet use enjambment at that specific point?',
        },
        resources: [
          'Printed poem (one per student)',
          'Poetry features glossary card (support tier)',
          'Coloured pens for annotation',
        ],
      },
      {
        title: 'Reading Aloud: Performance Poetry',
        duration: '18 minutes',
        instructions:
          'Teacher models reading a stanza aloud, demonstrating how to pause at punctuation (not at line ends unless punctuated), how to emphasise key words, and how to vary pace for effect. Students practise in pairs, taking turns to read a stanza each. Each pair selects their "best" stanza reading to perform to another pair. Teacher selects two or three confident pairs to perform to the class. Class gives feedback: what did the reader do well? How did hearing it aloud change your understanding of the poem?',
        differentiation: {
          support:
            'Provide a marked-up copy of the poem with pauses and emphases indicated using symbols (/ for pause, bold for emphasis).',
          core: 'Students read aloud with attention to punctuation and emphasis.',
          stretch:
            'Students experiment with reading the poem in different ways (fast/slow, loud/soft) and discuss how this changes the meaning and mood.',
        },
        resources: [
          'Poem copies (from previous activity)',
          'Performance guidance sheet (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Poetry Features Quiz',
      duration: '7 minutes',
      instructions:
        'Teacher gives a rapid-fire quiz: read out a definition and students write the matching poetry term on their mini-whiteboard. Cover all key terms: stanza, rhyme, rhythm, enjambment, verse, line, form. Teacher uses incorrect answers to address misconceptions. Final question: "In one sentence, what makes a poem different from prose?"',
      differentiation: {
        support: 'Students may refer to their glossary card during the quiz.',
        core: 'Students answer from memory.',
        stretch:
          'Students write their own quiz question using a feature not covered in the quiz and pose it to the class.',
      },
    },
    homework:
      "Find a poem you enjoy (from a book, a poetry website, or the school library). Write a paragraph explaining what makes it a poem, identifying at least three features from today's lesson.",
    worksheetQuestions: [
      {
        question: 'Define the following poetry terms: stanza, rhyme, rhythm, enjambment, form.',
        lines: 6,
        modelAnswer:
          'Stanza - a group of lines in a poem, separated by a space, similar to a paragraph in prose. Rhyme - the repetition of similar sounds, usually at the end of lines. Rhythm - the pattern of stressed and unstressed syllables that creates a beat. Enjambment - when a sentence or phrase runs over from one line to the next without punctuation. Form - the overall structure and shape of the poem, including its stanza pattern, line length, and rhyme scheme.',
        marks: 5,
      },
      {
        question:
          'Look at the poem you annotated in class. Write out the rhyme scheme of the first stanza using letter notation (e.g. ABAB).',
        lines: 3,
        modelAnswer:
          'The answer will depend on the specific poem used. For a poem with alternating rhyme, the answer would be ABAB, meaning the first and third lines rhyme (A), and the second and fourth lines rhyme (B). Students should demonstrate they understand the notation system.',
        marks: 2,
      },
      {
        question: 'Explain why a poet might use enjambment. What effect can it have on the reader?',
        lines: 4,
        modelAnswer:
          'A poet might use enjambment to create a sense of momentum or urgency, pulling the reader quickly from one line to the next. It can also be used to create surprise by placing an unexpected word at the start of the new line, or to mirror the content of the poem - for example, enjambment might reflect a character running or a thought that cannot be contained.',
        marks: 3,
      },
      {
        question:
          'What is the difference between reading a poem and reading a prose paragraph? Explain at least two differences.',
        lines: 5,
        modelAnswer:
          'When reading a poem, you must pay attention to line breaks and stanza divisions, which control the pace and rhythm of reading in ways that prose does not. Poems often use condensed, figurative language where every word carries weight, so reading requires closer attention to individual word choices. Additionally, poems are often designed to be read aloud, so rhythm and sound patterns (rhyme, alliteration) are more important than in prose.',
        marks: 4,
      },
      {
        question:
          'Write a short poem (4-8 lines) that includes at least two of the following features: rhyme, enjambment, a clear rhythm. Label the features you have used.',
        lines: 8,
        modelAnswer:
          'An example: "The wind came calling through the trees / and shook the leaves like copper coins [rhyme: trees/breeze in next stanza] / that tumbled down [enjambment] / across the ground in rustling streams." Students should label the features used. Accept any poem that genuinely demonstrates the claimed features.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson introduces poetry as a form. Choose a poem that is accessible and engaging - humour or strong narrative works well for Year 7.',
      'The reading aloud activity is important: many students read poetry as if every line end is a pause. Explicitly teach them to follow the punctuation, not the line breaks.',
      'Avoid overwhelming students with too many technical terms. Focus on the five key terms and build from there in subsequent lessons.',
      'The starter activity is designed to surface and challenge misconceptions about what poetry is. Be prepared for debate about song lyrics - this is a productive discussion.',
    ],
    targetedSkills: [
      '7R.3',
      'Poetry Terminology',
      'Annotation',
      'Reading Aloud',
      'Form and Structure',
    ],
  },

  // ── Lesson 7: Poetic Methods - Imagery and Sound ─────────────────────────
  {
    id: 'y7-t3-07-poetic-methods-imagery-sound',
    title: 'Poetic Methods: Imagery and Sound',
    text: 'T3.2 Poetry',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse imagery in poetry, including simile, metaphor, and personification (7R.3)',
      'Understand how sound devices (alliteration, onomatopoeia, sibilance) create effects (7R.5)',
      'Explain how poets use imagery and sound to shape meaning and mood',
      'Begin to write analytically about poetic methods using evidence',
    ],
    successCriteria: [
      'I can identify at least three types of imagery in a poem',
      'I can identify at least two sound devices in a poem',
      'I can explain the effect of an image or sound device on the reader',
      'I can write an analytical sentence about a poetic method using the PEE structure',
    ],
    keywords: [
      'imagery',
      'simile',
      'metaphor',
      'personification',
      'alliteration',
      'onomatopoeia',
      'sibilance',
      'connotation',
    ],
    starterActivity: {
      title: 'Imagery or Sound?',
      duration: '7 minutes',
      instructions:
        'Display eight short quotations from poems on the board. Students sort them into two categories: Imagery (appeals to sight, creates a picture) and Sound (appeals to the ear, creates an auditory effect). Some quotations may belong in both categories. Students hold up I or S cards. Teacher reveals answers and explains that imagery creates mental pictures while sound devices create auditory effects - and that the best poets combine both.',
      differentiation: {
        support:
          'Provide definitions of imagery and sound at the top of the worksheet with an example of each.',
        core: 'Students sort all eight quotations and justify one choice.',
        stretch:
          'Students identify quotations that use both imagery and sound simultaneously and explain how they work together.',
      },
      resources: ['Quotations slide/worksheet', 'I/S voting cards'],
    },
    mainActivities: [
      {
        title: 'Imagery Toolkit: Simile, Metaphor, Personification',
        duration: '18 minutes',
        instructions:
          'Teacher revisits the definitions of simile, metaphor, and personification using examples from a poem. For each device, teacher models the analysis process: identify the device, explain the comparison, explore the connotations, and comment on the effect. Students then receive a poem rich in imagery and work in pairs to find and analyse one example of each device, recording their findings in a three-column table (Device / Quotation / Effect). Pairs share their best analysis with the class.',
        differentiation: {
          support:
            'Provide a pre-started table with the device names and one quotation already identified. Include an "effect" sentence starter: "This suggests... because...".',
          core: 'Students find and analyse one example of each device independently.',
          stretch:
            'Students rank the three images from least to most effective and write a justification explaining their ranking.',
        },
        resources: [
          'Poem handout (rich in imagery)',
          'Three-column table worksheet',
          'Sentence starters (support tier)',
        ],
      },
      {
        title: 'Sound Toolkit: Alliteration, Onomatopoeia, Sibilance',
        duration: '18 minutes',
        instructions:
          'Teacher introduces the three sound devices with clear definitions and examples from the same poem. Teacher reads a stanza aloud twice, asking students to close their eyes the second time and focus on what they hear. Students identify examples of sound devices in the poem, recording them in a new table. For each example, students write: what sound is created, and how does it affect the mood? Teacher models one example fully, then students complete the rest. Class discussion: how do the sound devices work with the imagery to create an overall effect?',
        differentiation: {
          support:
            'Highlight lines in the poem that contain sound devices so students can focus on identifying which device is used and its effect.',
          core: 'Students find at least two sound devices and analyse their effect.',
          stretch:
            "Students write a PEE paragraph about one sound device, linking its effect to the poem's overall theme or mood.",
        },
        resources: [
          'Same poem handout',
          'Sound devices table worksheet',
          'PEE paragraph frame (stretch tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Best Analysis Competition',
      duration: '7 minutes',
      instructions:
        'Each pair selects their strongest analytical sentence (about either imagery or sound). Teacher collects five on the board. Class votes on the most perceptive analysis. Teacher highlights what makes it effective: specific device identified, quotation embedded, connotation explored, effect explained. This becomes the model for analytical writing about poetry going forward.',
      differentiation: {
        support: 'Teacher reads all five aloud and explains the features of the winning analysis.',
        core: 'Students vote and explain their choice.',
        stretch: 'Students improve the second-place analysis to make it as strong as the winner.',
      },
    },
    homework:
      'Choose one image and one sound device from the poem studied in class. Write a PEE paragraph about each, explaining the effect on the reader.',
    worksheetQuestions: [
      {
        question:
          'Define the following terms and give an example of each: simile, metaphor, personification, alliteration, onomatopoeia.',
        lines: 8,
        modelAnswer:
          'Simile - a comparison using "like" or "as," e.g. "The moon glowed like a lantern." Metaphor - a direct comparison stating something is something else, e.g. "The classroom was a zoo." Personification - giving human qualities to non-human things, e.g. "The wind whispered through the trees." Alliteration - repetition of the same consonant sound at the start of nearby words, e.g. "The slippery snake slithered silently." Onomatopoeia - a word that imitates the sound it describes, e.g. "The fire crackled and hissed."',
        marks: 5,
      },
      {
        question:
          'Read the following line from a poem: "The sea clawed at the cliffs with hungry fingers." Identify the poetic method used and explain its effect.',
        lines: 5,
        modelAnswer:
          'The poet uses personification, giving the sea human qualities by describing it as having "hungry fingers" that "clawed." This creates an image of the sea as a predatory, aggressive force, suggesting it is alive and dangerous. The verb "clawed" has violent connotations, implying the sea is attacking the cliffs, while "hungry" suggests it is insatiable and will never stop. This makes the reader feel the power and threat of the natural world.',
        marks: 4,
      },
      {
        question:
          'What is sibilance? Give an example and explain what effect it typically creates.',
        lines: 4,
        modelAnswer:
          'Sibilance is the repetition of "s" or "sh" sounds. For example, "the soft sea shushed against the shore." Sibilance typically creates a gentle, soothing, or secretive effect, imitating sounds like whispering, wind, or water. However, it can also create a sinister, snake-like quality depending on the context.',
        marks: 3,
      },
      {
        question:
          'Explain the difference between imagery and sound devices. Why might a poet use both together?',
        lines: 5,
        modelAnswer:
          "Imagery creates mental pictures by appealing to the reader's visual imagination - it helps you see what the poet is describing. Sound devices create auditory effects - they affect how the poem sounds when read aloud. A poet might use both together to create a fully immersive experience: the imagery shows the reader the scene while the sound devices make them feel as though they are hearing it too. This combination engages multiple senses and makes the poem more powerful and memorable.",
        marks: 4,
      },
      {
        question:
          'Write a PEE paragraph analysing the use of imagery in the following lines: "The forest stood in silence, / its branches reaching out like skeletal arms, / grasping at the fading light."',
        lines: 8,
        modelAnswer:
          'The poet creates a sinister and unsettling image of the forest through the use of a simile and personification. The branches are compared to "skeletal arms," which creates connotations of death and decay, transforming the trees from natural objects into something threatening and corpse-like. The verb "grasping" personifies the branches, suggesting they are alive and desperate, as if trying to clutch the last remaining light before darkness falls. This creates a tense atmosphere and may symbolise a fear of the unknown or the approach of something dangerous.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Choose a poem that is rich in both imagery and sound devices. Nature poetry or war poetry often provides strong examples.',
      'Students often confuse simile and metaphor. Use a physical sorting activity if misconceptions persist.',
      'The "close your eyes and listen" technique during the sound activity is very effective - it forces students to focus on the auditory qualities of language.',
      'This lesson builds directly towards the step-by-step analysis in Lesson 8. Ensure students retain their annotated poems and analysis tables.',
    ],
    targetedSkills: [
      '7R.3',
      '7R.5',
      'Imagery Analysis',
      'Sound Device Analysis',
      'PEE Writing',
      'Poetic Methods',
    ],
  },

  // ── Lesson 8: Analysing a Poem Step by Step ──────────────────────────────
  {
    id: 'y7-t3-08-analysing-poem-step-by-step',
    title: 'Analysing a Poem Step by Step',
    text: 'T3.2 Poetry',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Apply a structured approach to analysing an unseen poem (7R.2)',
      "Identify and comment on the poet's choices of language, form, and structure (7R.5)",
      "Write an analytical response that explores the poet's intentions and effects",
      'Develop confidence in approaching unfamiliar poems independently',
    ],
    successCriteria: [
      'I can follow a step-by-step process to analyse an unseen poem',
      'I can comment on at least two language choices and their effects',
      'I can comment on at least one structural or form choice',
      'I can write a multi-paragraph analytical response about a poem',
    ],
    keywords: [
      'analysis',
      'language',
      'structure',
      'form',
      'intention',
      'effect',
      'interpretation',
      'unseen',
    ],
    starterActivity: {
      title: 'First Impressions',
      duration: '8 minutes',
      instructions:
        'Display a new, unseen poem on the board (not the one used in Lessons 6-7). Teacher reads it aloud once without any discussion. Students write three words that describe their initial response to the poem (e.g. "sad", "mysterious", "angry"). Teacher collects responses on the board and explains that first impressions are the starting point for analysis - the rest of the lesson will teach them how to move from impression to evidence-based analysis.',
      differentiation: {
        support:
          'Provide an emotion word bank to help students articulate their first impressions.',
        core: 'Students write three words and briefly explain one choice.',
        stretch:
          'Students write a sentence predicting what the poem might be about and what evidence supports their prediction.',
      },
      resources: ['Unseen poem (displayed)', 'Emotion word bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'The Five-Step Analysis Method',
        duration: '22 minutes',
        instructions:
          "Teacher introduces a five-step method for analysing a poem: (1) Read and respond - what is the poem about? (2) Form and structure - how is it laid out? What is the effect? (3) Language - what methods does the poet use? (4) Zoom in - choose two key quotations and analyse them in detail (5) Step back - what is the poet's message or intention? Teacher models Steps 1-3 on the board using the unseen poem. Students receive a printed copy and annotate along with the teacher. For Steps 4 and 5, students work independently: they select two quotations, annotate them (identifying method, connotation, effect), and write a one-sentence summary of the poet's overall message. Teacher circulates and supports.",
        differentiation: {
          support:
            'Provide a five-step analysis worksheet with prompts for each step and space to write. Steps 1-3 are partially completed from the teacher modelling.',
          core: 'Students complete all five steps, with independent work on Steps 4 and 5.',
          stretch:
            "Students complete all five steps and write a paragraph connecting their two key quotations to the poem's overall message.",
        },
        resources: [
          'Unseen poem (printed, one per student)',
          'Five-step analysis worksheet',
          'Five-step method poster/slide',
        ],
      },
      {
        title: 'Writing an Analytical Response',
        duration: '15 minutes',
        instructions:
          'Using their five-step annotations, students write a two-paragraph analytical response. Paragraph 1 should analyse a language choice (using PEE). Paragraph 2 should analyse a structural or form choice. Teacher provides a model opening sentence for each paragraph. Students write independently. With three minutes remaining, students read their response aloud to a partner, who gives one "star" (something effective) and one "wish" (something to improve).',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for both paragraphs and the model opening sentences.',
          core: 'Students write two paragraphs using PEE structure independently.',
          stretch:
            'Students write a third paragraph exploring an alternative interpretation of the poem and evaluating which reading is more convincing.',
        },
        resources: [
          'Writing frame (support tier)',
          'Model opening sentences (displayed)',
          'Peer feedback "star and wish" slips',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Five Steps Recall',
      duration: '5 minutes',
      instructions:
        'Students close their books. Teacher displays the five steps with one word missing from each. Students fill in the blanks on mini-whiteboards. Teacher checks understanding and reinforces: this five-step method can be applied to any poem, and it will be the approach used in the end-of-year assessment.',
      differentiation: {
        support: 'Only two words are missing; the rest are visible.',
        core: 'Five words are missing - one from each step.',
        stretch:
          'All five step titles are blanked out, and students must recall them in the correct order.',
      },
    },
    homework:
      'Apply the five-step analysis method to a new short poem provided on the homework sheet. Complete the analysis worksheet and write one PEE paragraph about a language choice.',
    worksheetQuestions: [
      {
        question: 'List the five steps of the poetry analysis method in the correct order.',
        lines: 5,
        modelAnswer:
          "1. Read and respond - understand what the poem is about and note initial impressions. 2. Form and structure - examine the layout, stanza pattern, rhyme scheme, and line length. 3. Language - identify the poet's use of imagery, sound devices, word choices, and other methods. 4. Zoom in - select two key quotations and analyse them in detail (method, connotation, effect). 5. Step back - consider the poet's overall message, intention, or theme.",
        marks: 5,
      },
      {
        question: 'Read the poem provided. What is it about? Write a two-sentence summary.',
        lines: 3,
        modelAnswer:
          'The answer will depend on the poem used. A strong response summarises both the surface meaning (what literally happens or is described) and the deeper meaning (what theme or emotion the poet explores). For example: "On the surface, the poem describes a storm passing over a town. On a deeper level, it explores the idea that powerful emotions, like anger, eventually pass and leave calm behind."',
        marks: 2,
      },
      {
        question:
          'Choose one quotation from the poem. Identify the poetic method used and analyse its effect on the reader in detail.',
        lines: 7,
        modelAnswer:
          "A strong response will: identify a specific quotation, name the poetic method accurately (e.g. metaphor, personification, alliteration), explore the connotations of key words, explain the effect on the reader (what it makes them think, feel, or imagine), and link the effect back to the poem's overall theme or mood.",
        marks: 5,
      },
      {
        question:
          "Comment on one structural choice the poet has made (e.g. stanza length, line breaks, enjambment, the poem's ending). Why might the poet have made this choice?",
        lines: 5,
        modelAnswer:
          'A strong response will identify a specific structural feature and explain its purpose. For example: "The poet uses short, single-line stanzas in the middle of the poem, which slows the pace and forces the reader to pause on each image individually. This mirrors the speaker\'s careful observation of the scene and creates a contemplative mood." Or: "The poet uses enjambment in lines 3-4, which creates momentum and urgency, reflecting the character\'s panic."',
        marks: 4,
      },
      {
        question:
          "What do you think is the poet's overall message or intention? Use evidence from the poem to support your answer.",
        lines: 6,
        modelAnswer:
          "A strong response will propose a clear interpretation of the poet's message and support it with at least two pieces of evidence. For example: \"I believe the poet's message is that nature is more powerful than humanity. This is supported by the personification of the storm as a 'giant' that 'roared across the valley,' which presents nature as an overwhelming force. Additionally, the final image of the 'tiny houses' emphasises human smallness in comparison. Together, these choices suggest the poet wants the reader to feel humility before the natural world.\"",
        marks: 5,
      },
    ],
    teacherNotes: [
      'The five-step method is designed to be simple and memorable. Display it as a permanent reference in the classroom from this lesson onwards.',
      'Choose an unseen poem that is accessible but has enough depth for analysis. Avoid poems that are too abstract for Year 7.',
      'The key learning in this lesson is process, not perfection. Students need to feel confident approaching an unfamiliar poem without panic.',
      'The peer feedback at the end of the writing activity helps students identify their own strengths and areas for development. Collect the "star and wish" slips if you want to monitor the quality of peer feedback.',
    ],
    targetedSkills: [
      '7R.2',
      '7R.5',
      'Poetry Analysis',
      'Five-Step Method',
      'Analytical Writing',
      'Unseen Poetry',
    ],
  },

  // ── Lesson 9: Comparing Poems - Thematic Connections ─────────────────────
  {
    id: 'y7-t3-09-comparing-poems',
    title: 'Comparing Poems - Thematic Connections',
    text: 'T3.2 Poetry',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Compare two poems that share a common theme (7R.6)',
      'Analyse how different poets use methods to explore the same idea',
      'Write a comparative response about poetry using connectives and embedded evidence',
      'Evaluate which poem is more effective in conveying its message',
    ],
    successCriteria: [
      'I can identify the shared theme between two poems',
      'I can compare how two poets use language, imagery, or structure differently',
      'I can write a comparative paragraph about two poems with embedded quotations',
      'I can offer a judgement about which poem I find more effective and justify it',
    ],
    keywords: [
      'compare',
      'contrast',
      'thematic',
      'connection',
      'perspective',
      'attitude',
      'method',
      'evaluation',
    ],
    starterActivity: {
      title: 'Same Theme, Different Voice',
      duration: '8 minutes',
      instructions:
        'Display the titles and first lines of two poems that share a theme (e.g. two poems about nature, or two poems about memory). Students predict: what might these poems have in common? How might they be different? Students discuss in pairs and share predictions. Teacher reads both first stanzas aloud and asks: were your predictions correct? What surprised you? Introduce the lesson focus: comparing how different poets explore the same idea.',
      differentiation: {
        support:
          'Provide the shared theme explicitly and ask students to predict how each poet might approach it differently.',
        core: 'Students predict the shared theme and at least one possible difference.',
        stretch:
          "Students predict how the poets' methods (not just ideas) might differ, based on the tone of the first lines.",
      },
      resources: ['Two poems slide (titles and first stanzas)', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Parallel Analysis: Two Poems Side by Side',
        duration: '20 minutes',
        instructions:
          'Students receive both poems printed side by side. They apply the five-step method from Lesson 8 to both poems, using a comparison grid to record their findings under four headings: Theme/Message, Language Methods, Structure/Form, Tone/Mood. Teacher models the first row (Theme/Message) together, demonstrating how to note what each poet says about the shared theme and whether their perspectives are similar or different. Students complete the remaining rows in pairs. Teacher circulates, encouraging students to look for both similarities and differences and to be specific about methods, not just ideas.',
        differentiation: {
          support:
            'Provide a comparison grid with prompt questions in each cell (e.g. "What imagery does Poet A use? What imagery does Poet B use? Are they similar or different?").',
          core: 'Students complete all four rows of the comparison grid with evidence from both poems.',
          stretch:
            'Students add a fifth row: "Which poem is more effective?" with a justified answer.',
        },
        resources: [
          'Two poems (printed side by side)',
          'Comparison grid worksheet',
          'Five-step analysis reference card',
        ],
      },
      {
        title: 'Writing a Comparative Poetry Paragraph',
        duration: '17 minutes',
        instructions:
          'Students write one comparative paragraph responding to: "Compare how the two poets present [the shared theme]. Focus on the poets\' use of language." Teacher provides the paragraph structure on the board: Comparative Point > Quotation from Poem A + Analysis > Connective > Quotation from Poem B + Analysis > Linking Sentence. Students draft their paragraph using their comparison grids for evidence. With three minutes remaining, students highlight their comparative connectives in one colour and their embedded quotations in another, as a self-check.',
        differentiation: {
          support:
            'Provide a writing frame with the paragraph structure and sentence starters. Connectives are pre-printed at transition points.',
          core: 'Students write the paragraph independently using the displayed structure.',
          stretch:
            'Students write a second comparative paragraph focusing on structure or form rather than language.',
        },
        resources: [
          'Paragraph structure slide',
          'Comparison grids (completed)',
          'Writing frame (support tier)',
          'Highlighters (two colours)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Which Poem Wins?',
      duration: '5 minutes',
      instructions:
        'Students stand. Teacher poses the question: "Which poem is more effective at conveying the theme?" Students move to one side of the room for Poem A, the other for Poem B. Two students from each side give a one-sentence justification. Teacher highlights that evaluative judgements must be supported by evidence - there is no wrong answer as long as it is justified.',
      differentiation: {
        support:
          'Teacher provides a sentence frame: "I think Poem [A/B] is more effective because...".',
        core: 'Students justify their choice with a specific reference to a poetic method.',
        stretch:
          'Students argue for the poem they did not choose, practising considering alternative perspectives.',
      },
    },
    homework:
      'Write a comparative paragraph responding to: "Compare how the two poets present [the shared theme]. Focus on the poets\' use of structure." Use your comparison grid and follow the paragraph structure from class.',
    worksheetQuestions: [
      {
        question:
          'What does it mean to compare poems "thematically"? How is this different from comparing their language?',
        lines: 4,
        modelAnswer:
          "Comparing poems thematically means examining the ideas, messages, or subjects they explore - for example, both poems might explore the theme of loss, but one might present it as something painful while the other presents it as something that brings growth. Comparing language means examining the specific methods the poets use (simile, metaphor, word choice) rather than the ideas themselves. A strong comparative response does both: it compares the themes and analyses how the poets' language choices shape those themes differently.",
        marks: 3,
      },
      {
        question:
          "Identify the shared theme of the two poems studied in class. Write a sentence explaining each poet's perspective on this theme.",
        lines: 4,
        modelAnswer:
          'The answer will depend on the poems used. A strong response identifies the shared theme clearly and articulates each poet\'s distinct attitude. For example: "Both poems explore the theme of the power of nature. Poet A presents nature as beautiful and awe-inspiring, using imagery of light and colour. Poet B, in contrast, presents nature as dangerous and indifferent to humanity, using violent and threatening imagery."',
        marks: 3,
      },
      {
        question:
          'Choose one poetic method that both poets use (e.g. imagery, personification, rhyme). Compare how they use it differently. Use quotations from both poems.',
        lines: 8,
        modelAnswer:
          "A strong response identifies a shared method and shows how each poet uses it to create a different effect. For example: \"Both poets use personification to present nature, but to very different effect. Poet A writes that the river 'sang gently over the stones,' personifying it as something musical and soothing, which creates a peaceful, harmonious mood. In contrast, Poet B personifies the sea as aggressive, describing how it 'snarled and spat at the harbour wall.' The verbs 'snarled' and 'spat' have animalistic, hostile connotations, presenting nature as something to be feared. This contrast reveals fundamentally different attitudes: Poet A celebrates nature's beauty, while Poet B warns of its power.\"",
        marks: 6,
      },
      {
        question:
          'Which poem do you find more effective in conveying the shared theme? Write a paragraph justifying your choice with reference to specific poetic methods.',
        lines: 7,
        modelAnswer:
          "A strong response states a clear preference and justifies it with evidence. For example: \"I find Poem B more effective because the poet's use of violent imagery and short, punchy sentences creates an immediate emotional impact that stays with the reader. The metaphor of the sea as a 'beast' is more memorable than Poem A's gentler imagery because it surprises the reader and challenges the conventional view of nature as beautiful. Additionally, Poem B's lack of rhyme creates an unsettling, unpredictable feeling that mirrors its content, whereas Poem A's regular rhyme scheme, while pleasant, feels more predictable.\"",
        marks: 5,
      },
      {
        question:
          'Write a comparative paragraph about the two poems, focusing on how the poets use structure differently. Use comparative connectives and embedded quotations.',
        lines: 8,
        modelAnswer:
          "Both poets use structure to reinforce their themes, but they make contrasting choices. Poem A uses regular, four-line stanzas with a consistent ABAB rhyme scheme, which creates a sense of order and harmony that mirrors its celebration of nature's beauty. In contrast, Poem B uses irregular stanza lengths and no consistent rhyme, reflecting the chaos and unpredictability of the storm it describes. Whereas Poem A's enjambment is gentle, allowing images to flow smoothly between lines, Poem B uses abrupt caesura mid-line to create sudden pauses that mimic the jolting impact of thunder. These structural differences reveal how form and content work together: Poem A's structure embodies calm, while Poem B's structure embodies disruption.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'Select two poems that are similar enough in theme for meaningful comparison but different enough in method to generate discussion.',
      'This lesson draws heavily on the comparative skills from Lessons 3-4 (prose comparison) and the poetry analysis skills from Lessons 6-8. Remind students of these connections explicitly.',
      "The physical movement in the plenary is effective for engagement and for identifying students' evaluative positions. Insist on evidence-based justification.",
      'This lesson is the final preparation before the end-of-year assessment in Lesson 10. Ensure all students leave with a completed comparison grid and at least one comparative paragraph.',
    ],
    targetedSkills: [
      '7R.6',
      'Comparative Poetry Analysis',
      'Evaluative Judgement',
      'Connective Use',
      'Evidence Embedding',
    ],
  },

  // ── Lesson 10: End of Year Assessment - Poetry and Prose ─────────────────
  {
    id: 'y7-t3-10-end-of-year-assessment',
    title: 'End of Year Assessment: Poetry and Prose',
    text: 'T3.2 Poetry',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Demonstrate reading comprehension and analytical skills across poetry and prose (7R.2-7R.6)',
      'Write sustained analytical and comparative responses under timed conditions (7W.2-7W.5)',
      'Select and embed evidence effectively to support interpretations',
      "Show understanding of writers' methods, themes, and effects across different forms",
    ],
    successCriteria: [
      'I can write a clear analytical response about an unseen poem using PEE structure',
      'I can write a comparative response that addresses both texts with connectives',
      "I can identify and comment on writers' language, structure, and form choices",
      'I can organise my response into clear, focused paragraphs',
    ],
    keywords: [
      'assessment',
      'analysis',
      'comparison',
      'evidence',
      'structure',
      'evaluation',
      'sustained',
      'timed',
    ],
    starterActivity: {
      title: 'Assessment Preparation and Reading Time',
      duration: '10 minutes',
      instructions:
        'Distribute the assessment paper containing: (Section A) an unseen poem with questions, and (Section B) a comparative question on two short texts (one poem and one prose extract). Students have ten minutes of reading time to read all texts carefully, annotate key features, and plan their responses. Teacher reminds students of the five-step method for poetry, the comparison framework, and the paragraph structures practised across the term. Display a "toolkit reminder" slide with key terms and structures.',
      differentiation: {
        support:
          'Provide a planning sheet with guided prompts for each section: "Step 1: What is the poem about?", "Step 2: What methods can you find?" etc.',
        core: 'Students read, annotate, and plan independently using the reading time.',
        stretch:
          'Students plan their time allocation for each section and prioritise their strongest points.',
      },
      resources: [
        'Assessment paper (Sections A and B)',
        'Planning sheet (support tier)',
        'Toolkit reminder slide',
      ],
    },
    mainActivities: [
      {
        title: 'Section A: Poetry Analysis',
        duration: '18 minutes',
        instructions:
          'Students respond to Section A: analysis questions on an unseen poem. Questions should progress in difficulty: a comprehension question (what is the poem about?), a language analysis question (how does the poet use [specific method]?), and an extended analysis question (how does the poet convey [theme/mood]? - write a multi-paragraph response). Students write in silence. Teacher circulates to monitor, offering only time prompts, not content support.',
        differentiation: {
          support:
            'The comprehension question includes a short glossary of difficult vocabulary. The extended question provides bullet-point prompts of what to include.',
          core: 'Students respond to all questions independently.',
          stretch:
            "The extended question invites students to evaluate the effectiveness of the poet's choices as well as analysing them.",
        },
        resources: ['Assessment paper (Section A)', 'Lined answer booklet'],
      },
      {
        title: 'Section B: Comparative Analysis',
        duration: '20 minutes',
        instructions:
          'Students respond to Section B: a comparative question on two texts (a poem and a prose extract that share a theme). The question should mirror the format practised: "Compare how the two writers present [theme]. Consider: the writers\' ideas, the writers\' use of language and structure, the effect on the reader." Students write in silence. Teacher gives a five-minute warning.',
        differentiation: {
          support:
            'Provide a writing frame for the comparative response with spaces for Comparison Point 1, Evidence A, Analysis, Evidence B, Analysis, and Linking Sentence - repeated for two paragraphs.',
          core: 'Students write two or more comparative paragraphs independently.',
          stretch:
            'Students write three paragraphs and include an evaluative conclusion about which text is more effective.',
        },
        resources: [
          'Assessment paper (Section B)',
          'Lined answer booklet',
          'Comparative writing frame (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reflection and Term Review',
      duration: '7 minutes',
      instructions:
        'Students put down their pens. Teacher leads a brief reflection: "What did you find easiest? What was most challenging? What would you do differently?" Students write three sentences: one thing they are proud of from this term, one skill they have improved, and one target for Year 8. Teacher collects assessments and reflections. If time allows, teacher invites two or three students to share their proudest moment from the term.',
      differentiation: {
        support:
          'Provide sentence starters: "I am proud of... I have improved at... Next year I want to...".',
        core: 'Students write three reflective sentences independently.',
        stretch:
          'Students write a paragraph reflecting on their progress across the whole of Term 3, linking specific lessons to their development.',
      },
    },
    homework:
      'No homework set following the end-of-year assessment. Students are encouraged to continue reading over the summer and to keep a reading journal.',
    worksheetQuestions: [
      {
        question:
          'Section A, Question 1: Read the poem carefully. In your own words, explain what the poem is about. (Comprehension)',
        lines: 4,
        modelAnswer:
          'A strong response summarises both the literal subject of the poem and its deeper meaning. For example: "The poem describes a person watching a sunset over the sea. On a deeper level, it explores the feeling of time passing and the bittersweet awareness that beautiful moments are fleeting." Students should show understanding of the whole poem, not just the first stanza.',
        marks: 4,
      },
      {
        question:
          'Section A, Question 2: How does the poet use imagery in the poem? Identify two examples and analyse their effects. (Language Analysis)',
        lines: 8,
        modelAnswer:
          "A strong response identifies two specific examples of imagery, names the technique (simile, metaphor, personification), quotes the text, and analyses the effect. Each analysis should explore connotations and the reader's response. For example: the student might analyse a metaphor by explaining what is being compared, what connotations the comparison carries, and how this contributes to the poem's theme or mood.",
        marks: 8,
      },
      {
        question:
          'Section A, Question 3: How does the poet convey a sense of [specified theme/mood] in the poem? Write a multi-paragraph response considering language and structure. (Extended Analysis)',
        lines: 14,
        modelAnswer:
          "A strong response will include: multiple PEE paragraphs addressing both language and structure; specific, embedded quotations; analysis of connotations and effects; comments on structural choices (stanza pattern, line length, enjambment, rhyme); and a sense of the poet's overall intention. Higher-level responses will offer personal interpretation, consider alternative readings, and evaluate the effectiveness of the poet's choices.",
        marks: 12,
      },
      {
        question:
          "Section B: Compare how the two writers present [specified theme]. You should consider: the writers' ideas and perspectives, the writers' use of language and/or structure, the effect on the reader. Write a sustained comparative response.",
        lines: 20,
        modelAnswer:
          "A strong response will include: a clear focus on the shared theme; two or more comparative paragraphs, each with a clear comparison point; embedded quotations from both texts; comparative connectives (similarly, in contrast, whereas, both writers); analytical comments on methods and effects; awareness that one text is a poem and the other is prose, with relevant comments on how form affects meaning; and a concluding sentence or paragraph that draws the comparison together. Higher-level responses will evaluate which text is more effective, consider the writers' different contexts and purposes, and offer nuanced interpretations that go beyond surface-level comparison.",
        marks: 16,
      },
    ],
    teacherNotes: [
      'This is the formal end-of-year assessment. It should assess the full range of skills developed across Term 3 (and ideally across the whole year).',
      'Select an unseen poem and a prose extract that share a clear thematic connection (e.g. both about nature, memory, conflict, or growing up). Ensure both are accessible to the full ability range.',
      'The mark scheme should reward: range of methods identified, depth of analysis, quality of comparison (not just description), evidence use, and written fluency.',
      'Consider splitting the assessment across two lessons if 60 minutes feels too pressured. Section A in one lesson, Section B in the next.',
      'Use the reflective sentences at the end to inform your reporting and to help students set meaningful targets for Year 8.',
      'Provide the assessment data to the Year 8 teacher to ensure continuity and appropriate challenge in the next academic year.',
    ],
    targetedSkills: [
      '7R.2',
      '7R.3',
      '7R.5',
      '7R.6',
      '7W.2',
      '7W.5',
      'Poetry Analysis',
      'Comparative Analysis',
      'Timed Writing',
      'Unseen Text Response',
    ],
  },
]
