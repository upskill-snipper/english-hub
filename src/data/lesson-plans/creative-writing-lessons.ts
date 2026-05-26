// @ts-nocheck
import type { LessonPlan } from '../../types'

// ─── Lesson 1: Narrative Openings - Hooking the Reader ──────────────────────

const lesson1: LessonPlan = {
  id: 'cw-01-narrative-openings',
  title: 'Narrative Openings: Hooking the Reader',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the techniques professional writers use to hook readers in opening paragraphs.',
    'Apply at least three different opening strategies to original creative writing.',
    'Evaluate the impact of different narrative openings on reader engagement.',
  ],
  successCriteria: [
    'I can identify and name at least four types of narrative opening and explain the effect of each.',
    'I can write three different openings for the same story scenario, each using a distinct technique.',
    'I can evaluate which opening is most effective for a given audience and purpose, using terminology accurately.',
  ],
  keywords: [
    'in medias res',
    'narrative hook',
    'pathetic fallacy',
    'foreshadowing',
    'direct address',
    'anecdote',
    'exposition',
    'prolepsis',
  ],
  starterActivity: {
    title: 'First Lines Gallery Walk',
    duration: '8 minutes',
    instructions:
      'Display ten famous opening lines from novels around the room (e.g., "It was a bright cold day in April, and the clocks were striking thirteen" - Orwell; "Call me Ishmael" - Melville; "Last night I dreamt I went to Manderley again" - du Maurier). Students walk around, read each one, and rank their top three on a sticky note, briefly explaining why each one "hooked" them. Gather responses: what do the most popular openings have in common?',
    differentiation: {
      support: 'Provide a prompt card with sentence starters: "This opening hooked me because..."',
      core: 'Students identify the specific technique used in each opening (e.g., mystery, shock, setting, voice).',
      stretch:
        'Students categorise all ten openings by technique type and identify which technique appears most frequently among published writers.',
    },
    resources: [
      'Printed opening lines (x10)',
      'Sticky notes',
      'Technique classification handout (stretch tier)',
    ],
  },
  mainActivities: [
    {
      title: 'Opening Techniques Toolkit',
      duration: '15 minutes',
      instructions:
        'Teacher delivers a direct instruction segment on six key opening techniques: (1) In medias res - dropping the reader into the middle of action, (2) Atmospheric description - using pathetic fallacy and sensory detail, (3) Dialogue - opening with speech to create immediacy, (4) Mystery or question - withholding information to provoke curiosity, (5) Direct address - speaking to the reader to build intimacy, (6) Shocking statement - a bold or disturbing claim to arrest attention. For each technique, show a model example and annotate it as a class, identifying the specific language choices that create impact.',
      differentiation: {
        support:
          'Students receive a pre-annotated model and highlight the key features rather than annotating from scratch.',
        core: 'Students annotate each model independently, labelling techniques and effects.',
        stretch:
          'Students also identify the limitations or risks of each technique (e.g., in medias res can confuse readers if context is never provided).',
      },
      resources: [
        'Opening techniques PowerPoint',
        'Six model paragraphs handout',
        'Annotation guide',
      ],
    },
    {
      title: 'Write Three Openings Challenge',
      duration: '22 minutes',
      instructions:
        'Provide a single story scenario: "A teenager returns to a place they have not visited since childhood. Something has changed." Students must write three different openings for this story, each using a different technique from the toolkit. Each opening should be 50-80 words. After writing, students swap with a partner and annotate each other\'s work, identifying which technique was used and highlighting the most effective phrase in each opening. Pairs then discuss: which opening would you most want to keep reading? Why?',
      differentiation: {
        support:
          'Students write two openings instead of three, using a scaffolded frame with the first sentence provided for each technique.',
        core: 'Students write three openings independently and provide written feedback to their partner.',
        stretch:
          'Students write a fourth opening that deliberately combines two techniques, then evaluate whether blending techniques strengthens or weakens the hook.',
      },
      resources: [
        'Story scenario card',
        'Lined writing paper or exercise books',
        'Peer feedback frame',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Opening Line Showdown',
    duration: '8 minutes',
    instructions:
      'Select four or five students to read aloud their strongest opening. The class votes on which one they would most want to continue reading, holding up numbered cards. The "winning" opening is displayed under the visualiser, and the class collaboratively annotates it, identifying what makes it effective. Teacher reinforces: a strong opening creates a question in the reader\'s mind that they need answered.',
    differentiation: {
      support: 'Students contribute to annotation by identifying one technique they recognise.',
      core: 'Students explain the effect of at least two techniques in the winning opening.',
      stretch:
        'Students suggest one revision to the winning opening that would make it even more compelling.',
    },
  },
  homework:
    "Write a polished opening paragraph (100-150 words) for a story of your choice. Use at least two techniques from today's lesson. Annotate your own work, labelling the techniques and explaining their intended effect.",
  worksheetQuestions: [
    {
      question:
        'Read the following opening: "The door was already open when I arrived. That was the first wrong thing." Identify the technique used and explain its effect on the reader.',
      lines: 4,
      modelAnswer:
        'This opening uses mystery and foreshadowing. The short, declarative sentence "That was the first wrong thing" implies that more wrong things will follow, creating a sense of unease and provoking the reader to continue. The word "first" is crucial - it signals a pattern of escalating wrongness, building anticipation and dread from the very start.',
      marks: 3,
    },
    {
      question:
        'Write an in medias res opening for a story about a chase scene. Your opening should be 2-3 sentences.',
      lines: 5,
      modelAnswer:
        'My lungs screamed as I rounded the corner, feet skidding on wet tarmac. Behind me, the footsteps were getting closer - heavier, faster, more certain than my own. I did not dare look back. This drops the reader directly into the action without exposition, creating immediacy and urgency through present-tense sensory details and short, breathless sentences.',
      marks: 4,
    },
    {
      question:
        'Compare two opening techniques - direct address and atmospheric description. Which is more effective for a ghost story, and why?',
      lines: 6,
      modelAnswer:
        'Atmospheric description is arguably more effective for a ghost story because it allows the writer to establish an unsettling mood through pathetic fallacy and sensory detail before any character or event is introduced. For example, describing mist clinging to gravestones or the creak of an unseen door primes the reader to feel afraid. Direct address ("You know that feeling when...") can also work by making the reader complicit in the fear, but it risks breaking the immersive quality that gothic settings depend upon. The most skilled writers might combine both, using direct address within an atmospheric framework.',
      marks: 5,
    },
    {
      question:
        'A student writes: "Once upon a time there was a girl called Sarah and she lived in a house." Rewrite this opening using a more effective technique and explain your choice.',
      lines: 6,
      modelAnswer:
        'Rewrite: "Sarah pressed her palm against the window and watched the rain erase the garden path. The house was quieter now. Too quiet." This revision replaces the fairy-tale formula with atmospheric description and mystery. The sensory detail of rain "erasing" the path suggests something being lost or hidden, while "too quiet" implies a recent disturbance, hooking the reader by creating an unanswered question about what has changed.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The gallery walk works best with openings printed on A4 and laminated, spread around the room at reading height.',
    'When modelling annotations, use a colour-coding system: one colour for technique identification, another for effect analysis.',
    'During the Three Openings Challenge, circulate and target students who default to the same technique three times.',
    'The "winning" opening in the plenary should ideally come from a mid-ability student to maintain high expectations across the class.',
    'This lesson links directly to AQA Paper 1 Question 5 (creative writing) - make this explicit to students.',
  ],
  targetedSkills: [
    'Creative Writing',
    'Narrative Writing',
    'Narrative Structure',
    "Writer's Methods",
    'Engagement and Impact',
  ],
}

// ─── Lesson 2: Setting and Atmosphere - Show Don't Tell ─────────────────────

const lesson2: LessonPlan = {
  id: 'cw-02-setting-atmosphere',
  title: "Setting and Atmosphere: Show Don't Tell",
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the difference between "showing" and "telling" in descriptive writing.',
    'Use sensory detail, figurative language, and precise vocabulary to create vivid settings.',
    'Craft an atmospheric setting description that conveys mood without explicitly stating it.',
  ],
  successCriteria: [
    'I can identify examples of "telling" in weak writing and transform them into "showing" using specific techniques.',
    'I can write a setting description that uses at least three senses and two figurative devices.',
    'I can create a clear mood or atmosphere in my writing without using words like "scary", "sad", or "happy".',
  ],
  keywords: [
    'pathetic fallacy',
    'sensory detail',
    'connotation',
    'figurative language',
    'personification',
    'semantic field',
    'atmosphere',
    'imagery',
  ],
  starterActivity: {
    title: 'Tell vs Show Transformation',
    duration: '7 minutes',
    instructions:
      'Display five "telling" sentences on the board (e.g., "The house was scary", "She was nervous", "It was a hot day", "The room was messy", "He was angry"). Students work in pairs to transform each one into a "showing" version that conveys the same idea without using the original adjective. Share examples - teacher highlights the most effective transformations and identifies common techniques (sensory detail, body language, environmental detail).',
    differentiation: {
      support:
        'Students transform three of the five sentences, with a model transformation provided for the first one.',
      core: 'Students transform all five sentences independently, aiming for variety of technique.',
      stretch:
        'Students transform all five and then write a rule explaining the difference between showing and telling in their own words.',
    },
    resources: ['Five "telling" sentences slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Atmospheric Writing Masterclass',
      duration: '18 minutes',
      instructions:
        'Teacher models the process of writing an atmospheric setting description live under the visualiser. Begin with the brief: "Describe a forest at night. The mood should be threatening." Think aloud through decisions: choosing verbs with dark connotations ("the branches clawed"), using pathetic fallacy ("the wind muttered"), selecting a semantic field of predation ("stalking shadows", "teeth of frost"). Annotate the completed paragraph together, colour-coding: sensory details in blue, figurative language in green, connotation choices in orange. Then provide a second brief: "Describe a beach at dawn. The mood should be hopeful." Students attempt this independently, applying the same techniques.',
      differentiation: {
        support:
          'Provide a word bank of sensory and figurative vocabulary organised by mood (threatening / hopeful / melancholy).',
        core: 'Students write independently using the annotated model as a reference.',
        stretch:
          'Students write the beach description but subvert the expected mood - make the beach feel threatening or the forest feel safe - to demonstrate that technique, not subject, creates atmosphere.',
      },
      resources: ['Visualiser', 'Mood word bank (support tier)', 'Colour-coding key handout'],
    },
    {
      title: 'Setting and Mood Gallery',
      duration: '22 minutes',
      instructions:
        'Students receive one of four setting photographs (an abandoned fairground, a snowy mountain, a crowded market, a moonlit lake). Each student writes a 150-word setting description that establishes a specific mood - but they must not name the mood anywhere in their writing. After 15 minutes of writing, students display their work at their table. Other students visit, read the description, and write on a feedback slip: (1) the mood they detected, (2) the most effective technique used, (3) one specific improvement suggestion. Writers collect their slips and review: did readers detect the intended mood? If not, what revisions are needed?',
      differentiation: {
        support:
          'Students write 100 words using a planning frame that prompts them to address each sense in turn.',
        core: 'Students write 150 words independently and respond thoughtfully to feedback.',
        stretch:
          'Students write 150 words, then revise their piece in light of feedback, producing a second draft that addresses at least two suggestions.',
      },
      resources: [
        'Four setting photographs (printed or projected)',
        'Feedback slips',
        'Planning frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Before and After',
    duration: '6 minutes',
    instructions:
      'Display a weak "telling" paragraph about a setting. Students collectively improve it by suggesting "showing" alternatives, with teacher scribing under the visualiser. Compare the before and after versions side by side. Students write one sentence summarising the most important lesson they have learned about creating atmosphere.',
    differentiation: {
      support: 'Students contribute one suggestion verbally.',
      core: 'Students write their summary sentence using at least one key term from the lesson.',
      stretch:
        'Students write their summary sentence and include a self-target for their next piece of descriptive writing.',
    },
  },
  homework:
    'Choose a room in your home. Write a 200-word description of it twice: once to make it feel warm and welcoming, once to make it feel cold and hostile. The physical details should remain the same - only your language choices should change.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between "showing" and "telling" in creative writing. Use an example to illustrate your answer.',
      lines: 5,
      modelAnswer:
        '"Telling" states emotions or qualities directly: "The room was cold and frightening." "Showing" conveys the same ideas through sensory detail, figurative language, and implication: "Frost crawled across the windowpane like white fingers, and somewhere in the darkness, a floorboard groaned." The second version allows the reader to feel the cold and fear through imagery and personification rather than being told what to feel, creating a more immersive and powerful reading experience.',
      marks: 3,
    },
    {
      question:
        'Write a "showing" description of a busy city street. Use at least two senses and one example of figurative language. (50-80 words)',
      lines: 6,
      modelAnswer:
        'The street was a river of bodies, surging and splitting around the traffic islands. Exhaust fumes clung to the back of my throat, thick as tar. Somewhere a jackhammer stuttered, competing with the wail of a siren and the percussion of a hundred heels on concrete. Neon signs bled colour across the wet pavement - red, green, gold - as if the city itself were bruised.',
      marks: 4,
    },
    {
      question:
        'What is "pathetic fallacy" and why is it useful for creating atmosphere in creative writing?',
      lines: 4,
      modelAnswer:
        "Pathetic fallacy is the technique of reflecting a character's emotions or the mood of a scene through weather and natural elements. For example, a storm might mirror inner turmoil, or sunshine might reflect joy. It is useful because it allows a writer to reinforce atmosphere without stating emotions directly, weaving mood into the fabric of the setting so that the reader absorbs the feeling almost unconsciously.",
      marks: 3,
    },
    {
      question:
        'Read this sentence: "The garden was beautiful and peaceful." Rewrite it using the "show don\'t tell" technique, then explain what you changed and why.',
      lines: 6,
      modelAnswer:
        'Rewrite: "Lavender spilled over the stone wall in purple waves, and the only sound was the lazy drone of a bumblebee navigating the foxgloves." I replaced the abstract adjectives "beautiful" and "peaceful" with concrete sensory details - the colour of lavender, the sound of a bee, the visual of foxgloves. The verb "spilled" suggests natural abundance, and "lazy drone" implies stillness and calm. The reader can now see and hear the garden rather than being told how to feel about it.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The live modelling segment is the most important part of this lesson - resist the urge to use a pre-written model. Students need to see the messy, iterative process of drafting.',
    'For the photograph activity, choose images with strong atmospheric potential. Avoid images that are too obviously "scary" or "happy" - ambiguous images produce the most interesting writing.',
    'Ban the words "nice", "good", "bad", "scary", "beautiful" during writing tasks to force students toward more precise vocabulary.',
    'Encourage students to read their work aloud - they will often hear problems (flat rhythm, repetition, cliche) that they cannot see on the page.',
    'Links to AQA Paper 1 Q5 (descriptive writing option) and GCSE marking criteria for vocabulary and sentence structure.',
  ],
  targetedSkills: [
    'Descriptive Writing',
    'Creative Writing',
    'Sensory Language',
    'Figurative Language',
    "Writer's Methods",
  ],
}

// ─── Lesson 3: Character Creation and Development ───────────────────────────

const lesson3: LessonPlan = {
  id: 'cw-03-character-creation',
  title: 'Character Creation and Development',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how writers reveal character through action, dialogue, appearance, and thought rather than direct description.',
    'Create original, multi-dimensional characters using indirect characterisation techniques.',
    'Apply characterisation skills to produce a short extract introducing a character to the reader.',
  ],
  successCriteria: [
    'I can explain the four main methods of indirect characterisation and give an example of each.',
    'I can create a character profile that goes beyond surface traits to include contradictions and complexity.',
    "I can write a 150-word extract that reveals a character's personality without directly stating it.",
  ],
  keywords: [
    'characterisation',
    'indirect characterisation',
    'archetype',
    'motivation',
    'interiority',
    'subtext',
    'body language',
    'mannerism',
  ],
  starterActivity: {
    title: 'Character Reveal Without a Name',
    duration: '7 minutes',
    instructions:
      'Display a short paragraph describing a person through their actions and environment only - no name, no age, no direct personality description (e.g., a paragraph about someone who alphabetises their spice rack, irons their jeans, and flinches when a picture frame is crooked). Students discuss: What kind of person is this? How do you know? What specific details told you? Teacher introduces the principle: great writers show who a character is through what they do, say, think, and own - not by telling the reader directly.',
    differentiation: {
      support:
        'Teacher provides guiding questions: "What does this person care about? Are they relaxed or anxious?"',
      core: 'Students infer at least three personality traits with textual evidence for each.',
      stretch:
        'Students also predict how this character might react in a crisis, based on the details provided.',
    },
    resources: ['Character paragraph display slide', 'Discussion prompt cards'],
  },
  mainActivities: [
    {
      title: 'The Four Windows of Characterisation',
      duration: '18 minutes',
      instructions:
        'Teacher introduces four methods of indirect characterisation using the acronym SAID: Speech (what and how they speak), Actions (what they do and how they do it), Interiority (their private thoughts and feelings), Description (appearance, possessions, environment). For each method, analyse a short extract from a published text. Then students create a character using a "Four Windows" planning sheet: a page divided into four quadrants, one for each SAID element. They must create a character who is not a stereotype - the character should have at least one trait that contradicts expectations (e.g., a soldier who writes poetry, a bully who rescues stray cats).',
      differentiation: {
        support: 'Provide a partially completed Four Windows sheet with prompts in each quadrant.',
        core: 'Students complete the sheet independently, ensuring at least one contradictory trait.',
        stretch:
          'Students create two characters who are connected (rivals, siblings, strangers who will meet) and ensure their Four Windows sheets create contrast.',
      },
      resources: [
        'SAID characterisation handout',
        'Four Windows planning sheet',
        'Published extract examples',
      ],
    },
    {
      title: 'Character Introduction Draft',
      duration: '22 minutes',
      instructions:
        'Using their Four Windows plan, students write a 150-200 word extract that introduces their character to the reader. The rules: (1) They cannot use the word "was" more than twice. (2) They cannot directly state any personality trait. (3) They must use at least three of the four SAID methods. After writing, students swap with a partner who reads the extract and writes down: the character\'s name, three personality traits they detected, and which SAID method was used most effectively. If the partner cannot identify the intended traits, the writer knows revision is needed.',
      differentiation: {
        support:
          'Students write 100-120 words, with sentence starters provided for each SAID method.',
        core: 'Students write 150-200 words following all three rules.',
        stretch:
          'Students write 200 words and deliberately include subtext - a moment where the character says one thing but clearly means another.',
      },
      resources: [
        'Lined writing paper',
        'Partner feedback form',
        'Sentence starters (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Character in a Line',
    duration: '6 minutes',
    instructions:
      'Challenge: write a single sentence that tells the reader everything they need to know about a character without naming a single personality trait. Share three or four examples under the visualiser. Class discusses what each sentence reveals and how. Exit ticket: "Which SAID method do you find easiest to use, and which do you need to practise?"',
    differentiation: {
      support: 'Students choose from three provided sentence frames and complete them.',
      core: 'Students write their sentence independently.',
      stretch:
        'Students write two sentences about the same character - one that creates a positive impression and one that creates a negative impression, using different SAID methods.',
    },
  },
  homework:
    'Observe a real person (family member, friend, stranger on the bus) for five minutes. Write a 150-word character sketch using only indirect characterisation. Do not name them or state any trait directly. Bring your sketch to the next lesson for peer review.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between direct and indirect characterisation. Why do examiners reward indirect characterisation more highly?',
      lines: 5,
      modelAnswer:
        'Direct characterisation tells the reader about a character explicitly: "Tom was shy and clever." Indirect characterisation reveals personality through speech, actions, thoughts, and description: "Tom sat at the back of the classroom, his fingers tracing equations in the margin of his notebook, eyes fixed on the desk whenever anyone spoke to him." Examiners reward indirect characterisation because it demonstrates more sophisticated writing skill - it shows control of language, an understanding of implication, and trust in the reader to draw their own conclusions, which is a hallmark of mature, engaging writing.',
      marks: 4,
    },
    {
      question:
        'A character is described as "kind". Write a short paragraph (3-4 sentences) that shows this character\'s kindness through their actions without using the word "kind" or any synonym.',
      lines: 5,
      modelAnswer:
        'Mrs Okafor noticed the new boy standing alone by the fence, his lunchbox unopened on his lap. She crossed the playground, sat beside him on the damp bench without being asked, and began talking about the weather as if they had known each other for years. When she left, she placed a chocolate biscuit on top of his lunchbox and walked away before he could refuse it. The new boy watched her go and, for the first time that week, he smiled.',
      marks: 4,
    },
    {
      question:
        'Why might a writer give a character contradictory traits? Use an example to support your answer.',
      lines: 5,
      modelAnswer:
        'Contradictory traits make characters feel realistic and three-dimensional because real people are full of contradictions. A writer might create a tough, battle-hardened soldier who tenderly cares for a wounded bird - the contradiction reveals hidden vulnerability and depth, making the reader more invested in the character. Without contradictions, characters risk becoming stereotypes or archetypes, which feel flat and predictable. The tension between opposing traits also creates internal conflict, which drives narrative and keeps the reader engaged.',
      marks: 4,
    },
    {
      question:
        'Read this extract: "Dave was tall and strong. He was brave. He had blue eyes and brown hair." Rewrite it using the SAID method to create a more engaging character introduction.',
      lines: 6,
      modelAnswer:
        'Dave ducked under the doorframe without thinking - a habit so ingrained he no longer noticed the bruise on his forehead from the times he forgot. He scanned the room the way he scanned everything: quickly, quietly, noting the exits. His jaw was set, but his hands - scarred across the knuckles, nails bitten to the quick - trembled slightly when he reached for his coffee. "I\'m fine," he said, before anyone had asked. This uses all four SAID elements: Speech ("I\'m fine" reveals defensiveness), Action (scanning exits reveals hypervigilance), Interiority (implied through habit), and Description (scarred hands, bitten nails suggest anxiety beneath strength).',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The "was" restriction in the writing task is deliberately provocative - it forces active verb choices and more dynamic prose.',
    'Students often conflate appearance with personality. Emphasise that describing what someone looks like is not characterisation unless the details imply personality (e.g., bitten nails imply anxiety).',
    'The contradictory trait requirement is essential - without it, students default to one-dimensional heroes and villains.',
    'SAID is an original acronym for this lesson. If your department uses a different framework, adapt accordingly.',
    'This lesson supports AQA Paper 1 Q5 narrative writing and Literature character analysis skills (AO1/AO2).',
  ],
  targetedSkills: [
    'Creative Writing',
    'Character Analysis',
    'Characterisation',
    'Narrative Writing',
    "Writer's Methods",
  ],
}

// ─── Lesson 4: Dialogue and Speech Punctuation ──────────────────────────────

const lesson4: LessonPlan = {
  id: 'cw-04-dialogue-speech',
  title: 'Dialogue and Speech Punctuation',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Punctuate direct speech accurately and consistently, including split speech.',
    'Use dialogue to reveal character, advance plot, and create tension rather than simply conveying information.',
    'Integrate dialogue tags, action beats, and interior thought to create dynamic, purposeful conversation scenes.',
  ],
  successCriteria: [
    'I can punctuate direct speech correctly in at least five different sentence structures, including split speech.',
    'I can write a dialogue exchange where each character has a distinct voice and the conversation serves a narrative purpose.',
    'I can use action beats and thought interjections alongside dialogue to create a layered, engaging scene.',
  ],
  keywords: [
    'dialogue tag',
    'action beat',
    'direct speech',
    'split speech',
    'subtext',
    'idiolect',
    'exposition',
    'speech verb',
  ],
  starterActivity: {
    title: 'Punctuation Hospital',
    duration: '8 minutes',
    instructions:
      'Display six sentences containing direct speech, all with deliberate punctuation errors (missing inverted commas, capital letters in wrong places, full stops instead of commas before dialogue tags, new speakers not on new lines). Students work in pairs to diagnose and correct each error. Review answers as a class, building a "rules of speech punctuation" checklist on the board. Keep this visible throughout the lesson.',
    differentiation: {
      support:
        'Provide the rules checklist first, then ask students to use it to find and fix errors.',
      core: 'Students correct all six sentences and articulate the rule each error violates.',
      stretch:
        'Students correct all six, then write a seventh correctly punctuated sentence that includes split speech.',
    },
    resources: ['Six error sentences slide', 'Rules checklist (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Dialogue That Does More Than Talk',
      duration: '18 minutes',
      instructions:
        'Teacher explains that strong dialogue serves at least one of three purposes: (1) revealing character - showing who someone is through how they speak, (2) advancing plot - moving the story forward through information exchange, (3) creating tension - building conflict through what is said and unsaid. Analyse three short dialogue extracts (provided on handout), identifying which purpose each serves and how the writer achieves it. Focus particularly on the concept of subtext - what characters mean versus what they say. Introduce action beats as an alternative to dialogue tags: instead of "she said angrily", write "She slammed the mug onto the counter." Students practise converting five dialogue-tag sentences into action-beat versions.',
      differentiation: {
        support:
          'Students identify the purpose of each extract from a multiple-choice list and convert three dialogue tags.',
        core: 'Students analyse all three extracts with written explanations and convert all five dialogue tags.',
        stretch:
          'Students also write an original two-line exchange that contains subtext - the characters discuss something mundane but the real conflict is beneath the surface.',
      },
      resources: [
        'Three dialogue extracts handout',
        'Action beats vs dialogue tags guide',
        'Conversion exercise sheet',
      ],
    },
    {
      title: 'The Argument Scene',
      duration: '22 minutes',
      instructions:
        'Students write a dialogue scene (200-250 words) in which two characters have an argument. The constraints: (1) Each character must have a distinct voice - the reader should be able to tell who is speaking even without dialogue tags. (2) At least one moment of subtext must be included - a character says something that means something different from the literal words. (3) Action beats must be used at least three times. (4) All speech must be punctuated correctly. Before writing, students plan: Who are the characters? What is the surface argument about? What is the real, deeper conflict? After writing, peer assessment using a checklist: correct punctuation, distinct voices, subtext present, action beats used.',
      differentiation: {
        support:
          'Students write 120-150 words, with a planning frame and a bank of action beats to choose from.',
        core: 'Students write 200-250 words following all four constraints.',
        stretch:
          'Students write the scene and then add a paragraph of interior thought from one character, revealing what they are really feeling during the argument.',
      },
      resources: [
        'Planning frame',
        'Action beat word bank (support tier)',
        'Peer assessment checklist',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Speech Punctuation Rapid Fire',
    duration: '5 minutes',
    instructions:
      'Teacher reads aloud ten sentences. For each one, students hold up a green card if the punctuation is correct and a red card if it is incorrect. If incorrect, cold-call a student to fix it. Fast-paced, game-style atmosphere. Finish with: "What is the one speech punctuation rule you will never get wrong again?" - students write their answer on a sticky note as an exit ticket.',
    differentiation: {
      support:
        'Students have the rules checklist from the starter available during the rapid fire.',
      core: 'Students respond from memory and explain corrections.',
      stretch:
        'Students who finish early write the most complex correctly punctuated speech sentence they can.',
    },
  },
  homework:
    'Eavesdrop on a real conversation (on the bus, at home, in a shop). Write it down as a dialogue scene with correct punctuation, dialogue tags, and action beats. Then write a paragraph reflecting on what the conversation revealed about the speakers.',
  worksheetQuestions: [
    {
      question:
        'Punctuate the following sentence correctly: Come here she whispered I need to tell you something',
      lines: 3,
      modelAnswer:
        '"Come here," she whispered. "I need to tell you something." The opening inverted commas go before "Come", a comma follows "here" (inside the inverted commas), the dialogue tag "she whispered" is lowercase and followed by a full stop. The second piece of speech opens with a capital letter because it is a new sentence.',
      marks: 3,
    },
    {
      question:
        'Explain the difference between a dialogue tag and an action beat. Give an example of each.',
      lines: 5,
      modelAnswer:
        "A dialogue tag attributes speech to a character using a speech verb: '\"I don't believe you,\" she said.' An action beat is a physical action placed next to dialogue that implies how the words are spoken without using a speech verb: 'She folded her arms. \"I don't believe you.\"' Action beats are often more effective because they show the character's body language and emotion, adding visual detail to the scene rather than relying on adverbs or speech verbs.",
      marks: 4,
    },
    {
      question:
        'What is "subtext" in dialogue? Write a two-line exchange between a parent and teenager where the subtext is different from the literal words.',
      lines: 6,
      modelAnswer:
        'Subtext is the unspoken meaning beneath the surface of dialogue - what characters really mean versus what they actually say. Example: "How was school?" Mum asked, not looking up from her phone. "Fine." He dropped his bag by the door and went straight upstairs. On the surface, this is a simple question and answer. The subtext is that neither person is genuinely engaging - the mother\'s attention is elsewhere, and the teenager\'s monosyllabic reply and immediate departure suggest avoidance. The real communication is about disconnection and emotional distance.',
      marks: 5,
    },
    {
      question:
        'Why is it important to give characters distinct voices in dialogue? How can a writer achieve this?',
      lines: 5,
      modelAnswer:
        'Distinct voices make characters feel real and prevent dialogue from becoming flat or confusing. A writer can achieve this through vocabulary choices (a professor might use formal, precise language while a teenager uses slang), sentence length (a nervous character might speak in short, fragmented bursts while a confident one uses long, flowing sentences), speech habits (catchphrases, interruptions, pauses), and register (formal vs informal). Ideally, a reader should be able to identify the speaker from their words alone, without needing dialogue tags.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Speech punctuation is a persistent weakness at GCSE. The "Punctuation Hospital" starter can be repeated in future lessons with different error types.',
    'The subtext concept is challenging but essential. Use the iceberg metaphor: the words are above the water, the meaning is below.',
    'Remind students that in the exam, a few lines of well-punctuated, purposeful dialogue can significantly boost their SPaG marks.',
    'Common errors to watch for: full stops before closing inverted commas in tagged speech, not starting new lines for new speakers, overuse of exclamation marks.',
    'This lesson supports AQA Paper 1 Q5 and also reinforces SPaG skills assessed across both Language papers.',
  ],
  targetedSkills: [
    'Creative Writing',
    'Narrative Writing',
    'SPaG',
    'Characterisation',
    'Technical Accuracy',
  ],
}

// ─── Lesson 5: Sentence Structures for Effect ───────────────────────────────

const lesson5: LessonPlan = {
  id: 'cw-05-sentence-structures',
  title: 'Sentence Structures for Effect',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how sentence length, type, and structure create specific effects on the reader.',
    'Use a range of sentence structures - simple, compound, complex, minor, and fragments - deliberately and for effect.',
    'Apply varied sentence structures to control pace, emphasis, and rhythm in creative writing.',
  ],
  successCriteria: [
    'I can identify and name five different sentence structures and explain the typical effect of each.',
    'I can write a paragraph that deliberately varies sentence structure to control pace and create impact.',
    'I can analyse how published writers use sentence structure and apply similar techniques in my own writing.',
  ],
  keywords: [
    'syntax',
    'simple sentence',
    'compound sentence',
    'complex sentence',
    'minor sentence',
    'fragment',
    'periodic sentence',
    'cumulative sentence',
    'anaphora',
    'tricolon',
  ],
  starterActivity: {
    title: 'The Power of the Short Sentence',
    duration: '7 minutes',
    instructions:
      'Display two versions of the same paragraph - one written entirely in long, complex sentences, and one that is identical except that the final sentence has been replaced with a short, sharp three-word sentence. Read both aloud. Students discuss: which version is more powerful? Why? Introduce the principle: short sentences after long ones create emphasis. It is about contrast. They hit hard. (Demonstrate the effect in real time with that three-sentence sequence.)',
    differentiation: {
      support:
        'Students identify which version they prefer and circle the short sentence, explaining its effect verbally.',
      core: 'Students explain in writing why the short sentence is effective, using terms like "emphasis", "pace", and "contrast".',
      stretch:
        'Students write their own three-sentence sequence that moves from long to short, creating a moment of impact.',
    },
    resources: ['Two-version paragraph slide', 'Exercise books'],
  },
  mainActivities: [
    {
      title: 'Sentence Structure Toolkit',
      duration: '18 minutes',
      instructions:
        'Teacher introduces six sentence structures with their typical effects: (1) Simple sentences - clarity, impact, finality. (2) Compound sentences - connection, continuation, balance. (3) Complex sentences - detail, sophistication, subordination. (4) Minor sentences/fragments - urgency, shock, isolation. (5) Periodic sentences (main clause delayed to the end) - suspense, anticipation. (6) Cumulative sentences (main clause first, details added) - layering, immersion. For each, provide a published example and a student-friendly model. Students then complete a matching exercise: ten sentences are provided, each must be identified by type, and students must explain the effect in context.',
      differentiation: {
        support:
          'Students match sentence types from a provided list and explain three effects using sentence starters.',
        core: 'Students identify all ten types and explain effects independently.',
        stretch:
          'Students rewrite three of the sentences using a different structure and evaluate how the effect changes.',
      },
      resources: [
        'Sentence structure toolkit handout',
        'Matching exercise worksheet',
        'Published examples sheet',
      ],
    },
    {
      title: 'Pace Control Challenge',
      duration: '22 minutes',
      instructions:
        'Students write a 200-word passage describing a character walking through a building and discovering something unexpected. The passage must be written in three clear phases: Phase 1 (calm approach) - use long, flowing complex and cumulative sentences to create a slow, measured pace. Phase 2 (growing unease) - mix sentence lengths, introduce compound sentences with unsettling conjunctions ("but", "yet"). Phase 3 (discovery) - use short, simple sentences and fragments to create shock and immediacy. After writing, students highlight their work in three colours corresponding to the three phases and annotate at least three deliberate sentence structure choices.',
      differentiation: {
        support:
          'Students write 120 words using a scaffolded frame that provides the first sentence of each phase.',
        core: 'Students write 200 words independently, following the three-phase structure.',
        stretch:
          'Students add a fourth phase - aftermath - using periodic sentences to create a reflective, uncertain tone.',
      },
      resources: [
        'Phase structure guide',
        'Highlighters (three colours)',
        'Scaffolded frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Rhythm Read-Aloud',
    duration: '6 minutes',
    instructions:
      'Three volunteers read their passages aloud. The class listens with eyes closed and raises a hand each time they hear a shift in pace. Discuss: could you hear the sentence structure changes? Where was the most effective moment? Teacher reinforces: if you can hear the pace change when you read aloud, your sentence structures are working. Always read your creative writing aloud before submitting it.',
    differentiation: {
      support: 'Students identify one pace shift they heard.',
      core: 'Students identify where the pace shifted and name the sentence structure that caused it.',
      stretch:
        'Students offer a specific revision suggestion to improve the rhythm of one passage.',
    },
  },
  homework:
    "Find a paragraph from any novel, short story, or article. Copy it out and annotate every sentence, identifying its type and explaining why the writer chose that structure at that point. Write a brief conclusion about the writer's overall approach to sentence variety.",
  worksheetQuestions: [
    {
      question:
        'Explain the difference between a periodic sentence and a cumulative sentence. Give an example of each.',
      lines: 5,
      modelAnswer:
        'A periodic sentence withholds the main clause until the end, building suspense: "Through the rain, past the abandoned cars, over the broken fence, she finally saw the house." A cumulative sentence places the main clause first and then adds detail: "She saw the house, its windows dark, its roof sagging, weeds choking the path to the door." Periodic sentences create anticipation because the reader must wait for the main idea. Cumulative sentences create immersion because details layer on top of each other, building a rich picture.',
      marks: 4,
    },
    {
      question:
        'Why might a writer use a sentence fragment (e.g., "Gone.") in a piece of creative writing? Is it always effective?',
      lines: 4,
      modelAnswer:
        'A sentence fragment creates impact through brevity - it can convey shock, finality, or urgency. "Gone." after a long descriptive passage hits the reader like a punch because of the contrast in length. However, fragments are not always effective: overused, they become gimmicky and lose their power. They work best as occasional punctuation in otherwise varied prose. In an exam, one or two well-placed fragments demonstrate control; ten fragments suggest the writer cannot construct full sentences.',
      marks: 4,
    },
    {
      question:
        'Write a five-sentence paragraph that moves from slow pace to fast pace using deliberate sentence structure changes. Annotate each sentence.',
      lines: 8,
      modelAnswer:
        '(1) The corridor stretched ahead of her, long and dim, its walls lined with photographs she did not recognise, their frames thick with dust and tilted at odd angles as if someone had brushed past them in a hurry. [Complex/cumulative - slow, detailed, immersive] (2) She walked on, and the air grew colder. [Compound - transitional, connecting calm to unease] (3) A door at the far end stood open. [Simple - clear, factual, focusing attention] (4) Something moved. [Minor sentence - abrupt, creating shock] (5) She ran. [Two-word sentence - maximum impact, urgency, pace at its fastest]',
      marks: 5,
    },
    {
      question:
        'A student writes: "I walked into the room. I saw a table. I saw a chair. I looked at the window. It was dark outside." What is wrong with this writing and how could sentence variety improve it?',
      lines: 5,
      modelAnswer:
        'The writing is monotonous because every sentence follows the same structure: short, simple, subject-verb-object. This creates a flat, list-like rhythm with no variation in pace or emphasis. Improvement: combine some sentences into complex structures ("As I walked into the room, my eyes were drawn to the window, where darkness pressed against the glass"), vary lengths to create contrast, and use a periodic or cumulative sentence to add sophistication. The key principle is that sentence variety creates rhythm, and rhythm holds the reader\'s attention.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Reading aloud is non-negotiable in this lesson. Students must hear sentence rhythm, not just see it on the page.',
    'The three-phase writing task is the core assessment opportunity - it reveals whether students can deploy structures deliberately rather than accidentally.',
    'Be cautious with fragment overuse. Students who learn about fragments often go overboard. Emphasise that fragments are seasoning, not the main course.',
    'This lesson is essential preparation for the top-band AQA mark scheme descriptor: "extensive and ambitious use of sentence forms".',
    'Consider displaying the three-phase passages on the working wall as models for future writing tasks.',
  ],
  targetedSkills: [
    'Creative Writing',
    'Sentence Structure',
    "Writer's Methods",
    'Technical Accuracy',
    'Narrative Writing',
  ],
}

// ─── Lesson 6: Descriptive Writing - The Five Senses ────────────────────────

const lesson6: LessonPlan = {
  id: 'cw-06-five-senses',
  title: 'Descriptive Writing: The Five Senses',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand why multi-sensory description creates more immersive and effective writing than visual description alone.',
    'Deploy all five senses - sight, sound, smell, taste, and touch - deliberately and with precise vocabulary.',
    'Use unexpected or unconventional sensory details to elevate descriptive writing beyond the predictable.',
  ],
  successCriteria: [
    'I can explain why relying only on sight weakens descriptive writing and identify which senses are underused in sample texts.',
    'I can write a description that uses all five senses, each with precise and original vocabulary.',
    'I can use synaesthesia or unexpected sensory combinations to create distinctive, memorable imagery.',
  ],
  keywords: [
    'sensory detail',
    'synaesthesia',
    'onomatopoeia',
    'tactile imagery',
    'olfactory imagery',
    'gustatory imagery',
    'auditory imagery',
    'precise vocabulary',
  ],
  starterActivity: {
    title: 'The Blindfold Description',
    duration: '8 minutes',
    instructions:
      'Place a mystery object in a bag (something with interesting texture, smell, and sound - such as a pine cone, a leather glove, or a crinkly sweet wrapper). One volunteer reaches in without looking and describes the object using only touch, smell, and sound. The class writes down what they think the object is. Reveal the object. Discuss: which sensory details were most helpful? Why? Introduce the lesson principle: most student writing is 90% visual. Today we address the other four senses.',
    differentiation: {
      support:
        'Teacher prompts the volunteer with questions: "What does it feel like? Is it warm or cold? Does it have a smell?"',
      core: 'Students write down sensory details as the volunteer speaks and use them to make their guess.',
      stretch:
        'Students write a two-sentence description of the mystery object based only on the non-visual clues, before the reveal.',
    },
    resources: ['Mystery object in an opaque bag', 'Exercise books'],
  },
  mainActivities: [
    {
      title: 'Sense Stations',
      duration: '18 minutes',
      instructions:
        'Set up five stations, each focused on one sense. Station 1 (Sight): a detailed photograph - write five visual details using precise vocabulary, no cliches. Station 2 (Sound): play an audio clip of a soundscape (market, storm, forest) - write five sound descriptions using onomatopoeia and simile. Station 3 (Smell): a sealed jar with a distinctive scent (coffee, cinnamon, vinegar) - write five smell descriptions without naming the source. Station 4 (Touch): an object with interesting texture (sandpaper, velvet, a shell) - write five tactile descriptions. Station 5 (Taste): a flavour word bank - write five taste descriptions using metaphor and comparison. Students rotate every 3 minutes, collecting sensory vocabulary in a grid.',
      differentiation: {
        support:
          'Each station has a vocabulary prompt card with useful adjectives and verbs for that sense.',
        core: 'Students write original descriptions without prompts, aiming for precision over quantity.',
        stretch:
          'Students include at least one example of synaesthesia at each station (e.g., describing a sound as "sharp" or a smell as "heavy").',
      },
      resources: [
        'Five station setups',
        'Sensory vocabulary grid',
        'Audio clip and speaker',
        'Scent jar',
        'Texture objects',
        'Prompt cards (support tier)',
      ],
    },
    {
      title: 'Multi-Sensory Description Draft',
      duration: '22 minutes',
      instructions:
        'Students choose one of three scenarios: (A) A fish market at dawn, (B) A bonfire on a winter night, (C) A school kitchen at lunchtime. Using their sensory vocabulary grids from the stations activity, they write a 200-word descriptive piece that uses all five senses. The challenge: each sense must appear at least once, but sight should not dominate - aim for no more than 40% visual detail. After writing, students underline and label each sensory detail with its sense type (S for sight, So for sound, Sm for smell, Ta for taste, To for touch) and check their balance.',
      differentiation: {
        support:
          'Students write 120-150 words using a structured planning frame that allocates two sentences per sense.',
        core: 'Students write 200 words independently with balanced sensory coverage.',
        stretch:
          'Students write 200 words and include at least two examples of synaesthesia, then write a sentence explaining why these unexpected sensory combinations are effective.',
      },
      resources: [
        'Three scenario cards',
        'Sensory vocabulary grids (from stations)',
        'Planning frame (support tier)',
        'Highlighters for labelling',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Missing Sense',
    duration: '5 minutes',
    instructions:
      'Display a short descriptive paragraph on the board that uses only sight and sound. Students identify the missing senses and suggest one addition for each. Teacher scribes improvements. Class reads the improved version aloud and compares the impact. Exit question: "Which sense did you find hardest to write about today, and what will you do to improve?"',
    differentiation: {
      support: 'Students identify the missing senses from a checklist.',
      core: 'Students suggest specific additions for each missing sense.',
      stretch: 'Students rewrite the entire paragraph, integrating all five senses seamlessly.',
    },
  },
  homework:
    'Sit in a specific location for ten minutes (a park, your kitchen, a bus stop) and write a "sensory journal" entry. Record at least three details for each of the five senses. Then write a 150-word description of the location using your journal notes.',
  worksheetQuestions: [
    {
      question:
        "Why is it a weakness to rely only on visual description in creative writing? Explain with reference to the reader's experience.",
      lines: 4,
      modelAnswer:
        'Relying only on sight creates a flat, superficial description - like watching a scene through glass. The reader can see but cannot feel immersed. Using multiple senses creates a three-dimensional experience: sounds give depth, smells trigger memory and emotion (smell is the sense most closely linked to memory), textures create physical intimacy, and tastes can evoke comfort or revulsion. Multi-sensory writing makes the reader feel as though they are inside the scene rather than observing it from outside.',
      marks: 3,
    },
    {
      question:
        'What is "synaesthesia" in creative writing? Give two original examples and explain why this technique is effective.',
      lines: 5,
      modelAnswer:
        'Synaesthesia is describing one sense using the language of another - blending sensory categories in unexpected ways. Examples: "The trumpet\'s notes were golden and warm" (sound described as colour and temperature), "The silence tasted bitter" (absence of sound described as taste). This technique is effective because it forces the reader to make an unusual mental connection, creating vivid, memorable imagery that stands out from more conventional descriptions. It also suggests that experiences are complex and interconnected, not neatly divided into separate senses.',
      marks: 4,
    },
    {
      question:
        'Write a description of rain using four different senses (not just sight). Each sense should have at least one sentence.',
      lines: 6,
      modelAnswer:
        'Sound: The rain began as a whisper on the leaves, then rose to a steady percussion on the roof tiles, each drop striking its own note. Touch: It hit my face in cold needles, running down my collar in a slow, unwelcome trickle that made my shoulders tense. Smell: The pavement released that ancient scent - petrichor, mineral and green, rising from the earth like something long buried finally exhaling. Taste: I tilted my head back and caught a drop on my tongue - it tasted of nothing and everything, clean as the sky itself.',
      marks: 5,
    },
    {
      question:
        'A student writes: "The cake looked nice. It was brown with white icing on top." Improve this description using at least three senses.',
      lines: 5,
      modelAnswer:
        'The cake sat on the wire rack, its sponge risen into a golden dome, cracked along the top where the heat had split it open like a small earthquake. Steam curled from the fracture, carrying the dense sweetness of vanilla and butter into every corner of the kitchen. I pressed a fingertip to the icing - still warm, yielding, slightly gritty with sugar - and brought it to my lips. It dissolved instantly, leaving a trace of almond that lingered long after the sweetness had gone. This uses sight (golden dome, cracked surface), smell (vanilla and butter), touch (warm, yielding, gritty), and taste (almond, sweetness).',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The stations activity requires advance preparation. Set up before the lesson and brief any support staff.',
    'For the scent jar, avoid anything that might trigger allergies. Coffee grounds and cinnamon sticks are generally safe.',
    'Students consistently underuse smell and taste. The sensory journal homework is designed to address this.',
    'Synaesthesia is a stretch concept but very high-value for exam responses. Even core students can attempt simple versions like "loud colour" or "sharp sound".',
    'This lesson directly supports the AQA Paper 1 Q5 mark scheme criterion for "extensive and ambitious vocabulary".',
  ],
  targetedSkills: [
    'Descriptive Writing',
    'Creative Writing',
    'Sensory Language',
    'Vocabulary',
    "Writer's Methods",
  ],
}

// ─── Lesson 7: Building Tension and Suspense ────────────────────────────────

const lesson7: LessonPlan = {
  id: 'cw-07-tension-suspense',
  title: 'Building Tension and Suspense',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse the techniques writers use to create and sustain tension in narrative writing.',
    'Use pacing, withholding information, and sensory detail to build suspense in original creative writing.',
    'Structure a passage that escalates tension through deliberate shifts in pace, focus, and sentence structure.',
  ],
  successCriteria: [
    'I can identify at least five tension-building techniques and explain the effect of each on the reader.',
    'I can write a passage that builds from calm to climax using deliberate structural and linguistic choices.',
    'I can use the "zoom in" technique to slow the pace at a moment of high tension.',
  ],
  keywords: [
    'suspense',
    'tension',
    'foreshadowing',
    'red herring',
    'cliffhanger',
    'pacing',
    'withholding',
    'dramatic irony',
    'zoom in',
    'slow motion writing',
  ],
  starterActivity: {
    title: 'The Slow Reveal',
    duration: '7 minutes',
    instructions:
      "Teacher reads aloud a tense passage from a published text (e.g., an extract from Susan Hill's The Woman in Black or a horror short story) while the room lights are dimmed. Students listen and note down every moment they feel tension increase. After the reading, map the tension on a graph together: X-axis is time, Y-axis is tension level. Identify the peaks and discuss: what did the writer do at each peak to make you feel more tense?",
    differentiation: {
      support: 'Students identify three moments of increased tension and describe what they felt.',
      core: 'Students map the tension graph and label each peak with the technique used.',
      stretch:
        'Students also identify moments where tension dips and explain why the writer includes these "relief" moments.',
    },
    resources: [
      'Tense passage extract (printed or projected)',
      'Tension graph template',
      'Dimmer switch or lamps',
    ],
  },
  mainActivities: [
    {
      title: 'Tension Toolkit: Techniques and Effects',
      duration: '15 minutes',
      instructions:
        "Teacher introduces eight key tension-building techniques with examples: (1) Foreshadowing - hinting at danger to come. (2) Short sentences - increasing pace and urgency. (3) Sensory overload - bombarding the reader with detail to mirror panic. (4) Withholding - not telling the reader everything, forcing them to imagine the worst. (5) Zoom in / slow motion - stretching a single moment across many sentences. (6) Pathetic fallacy - using environment to mirror internal fear. (7) Sound focus - emphasising sounds in silence creates hyper-awareness. (8) Rhetorical questions / interior monologue - putting the reader inside the character's frightened mind. Students receive a techniques handout and match each technique to an example extract, then rank them by effectiveness for different scenarios.",
      differentiation: {
        support:
          'Students match techniques to examples using a guided grid with the first two completed.',
        core: 'Students match all eight and rank the top three for a given scenario.',
        stretch:
          'Students also identify which techniques are most effective in combination and explain why.',
      },
      resources: ['Tension techniques handout', 'Eight example extracts', 'Matching grid'],
    },
    {
      title: 'Escalation Writing: The Corridor',
      duration: '25 minutes',
      instructions:
        'Students write a 250-word passage using the following scenario: "A character walks down a long, empty corridor towards a closed door at the far end. By the time they reach the door, the reader should be terrified - but nothing explicitly frightening has happened." The challenge: create fear from nothing. Students must structure their passage in three phases - (1) Normality (the character enters the corridor, everything seems fine), (2) Unease (small details begin to feel wrong), (3) Dread (the character reaches the door, tension is at maximum). They must use at least five techniques from the toolkit. After writing, students highlight and label each technique used in the margin.',
      differentiation: {
        support:
          'Students write 150 words using a scaffolded frame that provides the first sentence of each phase and a checklist of techniques to include.',
        core: 'Students write 250 words independently, labelling five techniques.',
        stretch:
          'Students write 250 words and then add a final paragraph - the door opens - where the tension breaks in an unexpected way (not a jump scare, but something subtler and more unsettling).',
      },
      resources: [
        'Scenario card',
        'Techniques checklist',
        'Scaffolded frame (support tier)',
        'Highlighters',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Tension Thermometer',
    duration: '6 minutes',
    instructions:
      'One student reads their corridor passage aloud while the rest of the class holds up a "tension thermometer" - a strip of card numbered 1-10. Students raise and lower the thermometer as the tension rises and falls. After the reading, discuss: where was the peak? What technique caused it? Was there a moment where tension dropped unintentionally? How could it be fixed?',
    differentiation: {
      support: 'Students use the thermometer and identify the peak moment.',
      core: 'Students explain which technique created the peak.',
      stretch: 'Students suggest a specific revision to address any unintentional tension drops.',
    },
  },
  homework:
    'Write a 200-word passage that builds tension in an everyday setting (a supermarket, a classroom, a bus journey). The key challenge: make the mundane feel menacing without introducing any overtly frightening elements. Annotate your work, labelling at least four tension techniques.',
  worksheetQuestions: [
    {
      question:
        'Explain how "withholding information" creates tension in creative writing. Use an example to support your answer.',
      lines: 5,
      modelAnswer:
        'Withholding information means deliberately not telling the reader everything - leaving gaps that their imagination fills. For example, writing "Something moved in the corner of the room" is more terrifying than "A rat moved in the corner of the room" because the reader\'s imagination will conjure something worse than anything the writer could name. Withholding works because the human brain is wired to fear the unknown - we are more frightened by what we cannot see or understand than by what we can. The reader becomes an active participant in generating their own fear.',
      marks: 4,
    },
    {
      question:
        'What is the "zoom in" or "slow motion" technique? How does it affect pacing and why is it effective at moments of high tension?',
      lines: 5,
      modelAnswer:
        'The "zoom in" technique involves stretching a single moment across multiple sentences, describing it in granular, slow-motion detail. For example, instead of "She opened the door", a writer might spend an entire paragraph on the character\'s hand reaching for the handle - the cold metal, the faint click of the latch, the resistance of the hinges. This slows the pace dramatically, mirroring the way time seems to stretch during moments of fear. It is effective because it forces the reader to wait, building anticipation, and the extreme detail creates hyper-awareness that mirrors the character\'s heightened senses.',
      marks: 4,
    },
    {
      question:
        'Write three sentences that use foreshadowing to hint that something bad is about to happen. Do not state anything frightening directly.',
      lines: 5,
      modelAnswer:
        '(1) "If I had known what was waiting behind that door, I would never have crossed the threshold." This uses proleptic foreshadowing - the narrator looking back from the future - to create dread by telling the reader that something terrible happened without revealing what. (2) "The dog refused to enter the garden. It stood at the gate, whimpering, its ears flat against its skull." Animals sensing danger is a classic foreshadowing device. (3) "The clock on the mantelpiece had stopped at 3:17. She did not know it yet, but that was the last ordinary moment she would ever have."',
      marks: 4,
    },
    {
      question:
        'Why do writers include moments of "relief" or reduced tension in a suspenseful passage? Would constant high tension be more effective?',
      lines: 5,
      modelAnswer:
        'Constant high tension is actually less effective because the reader becomes desensitised - like holding a note at maximum volume, it eventually becomes background noise. Relief moments (a character relaxing, a moment of humour, a false alarm) are essential because they reset the reader\'s tension baseline, making the next escalation feel even more intense by contrast. This pattern of tension-relief-greater tension is sometimes called the "roller coaster" structure. The dips make the peaks feel higher. Skilled writers use relief moments strategically, often placing them just before the biggest shock.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Dimming the lights for the starter reading genuinely improves engagement - students listen more attentively in low light.',
    'The "corridor" scenario is deliberately minimalist. Resist students who want to add monsters, ghosts, or murderers. The skill is creating fear from nothing.',
    'The tension thermometer is a powerful formative assessment tool. Note students whose writing does not elicit thermometer rises - they may need additional support with pacing.',
    'Link explicitly to Gothic literature study if your scheme includes Jekyll and Hyde, Frankenstein, or The Woman in Black.',
    'This lesson is high-value for AQA Paper 1 Q5 narrative writing, where atmosphere and control of pace are key discriminators at the top bands.',
  ],
  targetedSkills: [
    'Creative Writing',
    'Narrative Writing',
    'Narrative Structure',
    'Descriptive Writing',
    "Writer's Methods",
  ],
}

// ─── Lesson 8: Narrative Voice and Perspective ──────────────────────────────

const lesson8: LessonPlan = {
  id: 'cw-08-narrative-voice',
  title: 'Narrative Voice and Perspective',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Understand how narrative perspective (first, second, third limited, third omniscient) shapes the reader's experience of a story.",
    'Develop a consistent and distinctive narrative voice that suits the character and genre.',
    'Experiment with unreliable narration and the effect of withholding or distorting information through perspective.',
  ],
  successCriteria: [
    'I can explain the key differences between four narrative perspectives and the advantages and limitations of each.',
    "I can write the same scene from two different perspectives and explain how the reader's experience changes.",
    "I can craft a narrative voice with distinctive features - vocabulary, tone, rhythm - that reveals the narrator's personality.",
  ],
  keywords: [
    'first person',
    'third person limited',
    'third person omniscient',
    'second person',
    'unreliable narrator',
    'narrative voice',
    'free indirect discourse',
    'stream of consciousness',
  ],
  starterActivity: {
    title: 'Whose Story Is It?',
    duration: '7 minutes',
    instructions:
      'Display the same event - "A vase is knocked off a table and breaks" - described from four different perspectives: (1) The person who knocked it, in first person. (2) Their parent, in first person. (3) A third-person omniscient narrator who knows both characters\' thoughts. (4) A third-person limited narrator who only follows the child. Students read all four and discuss: How does the perspective change the story? Which version do you sympathise with? Which gives you the most information? Which creates the most tension?',
    differentiation: {
      support: 'Students identify which perspective each extract uses from a list of options.',
      core: "Students explain how each perspective changes the reader's sympathy and understanding.",
      stretch:
        'Students write a fifth version in second person ("You reach for the glass and your elbow catches the vase...") and discuss its unusual effect.',
    },
    resources: ['Four perspective extracts slide', 'Discussion prompt questions'],
  },
  mainActivities: [
    {
      title: 'Perspective Deep Dive',
      duration: '18 minutes',
      instructions:
        'Teacher delivers structured notes on four narrative perspectives, covering advantages and pitfalls of each: First person - intimate, immediate, but limited to one character\'s knowledge and potentially unreliable. Third person limited - close to one character but allows more elegant description and reflection. Third person omniscient - all-knowing, allows dramatic irony and multiple viewpoints, but can feel distant. Second person - unusual, creates immediacy and reader involvement, but can feel gimmicky if sustained. For each, analyse a short published example. Then introduce "unreliable narration" - when the narrator\'s account is untrustworthy. Students identify clues in a short extract that suggest the narrator is unreliable (e.g., contradictions, suspicious omissions, overly defensive tone).',
      differentiation: {
        support:
          'Students complete a comparison table with key features of each perspective, using sentence starters.',
        core: 'Students complete the table independently and write a paragraph analysing the unreliable narrator extract.',
        stretch:
          'Students evaluate which perspective is most effective for different genres (horror, romance, mystery) and justify their choices.',
      },
      resources: [
        'Perspective notes handout',
        'Published extracts (x4)',
        'Unreliable narrator extract',
        'Comparison table',
      ],
    },
    {
      title: 'Same Scene, Different Voice',
      duration: '22 minutes',
      instructions:
        "Students write the same short scene twice in 150 words each, using two different perspectives. The scene: \"A student is caught cheating in an exam.\" Version 1: First person from the cheating student's perspective - capture their panic, justifications, and selective telling. Version 2: Third person limited from the invigilator's perspective - capture their suspicion, decision-making, and interpretation of the student's behaviour. After writing, students annotate the key differences between their two versions: what information is available? Where does sympathy fall? What is the tone of each? Pair discussion: which version is more compelling and why?",
      differentiation: {
        support:
          'Students write 100 words per version using a planning grid with prompts for thoughts, observations, and feelings for each perspective.',
        core: 'Students write 150 words per version independently, with clear annotation.',
        stretch:
          'Students write a third version - an unreliable first-person account from the student who denies cheating but whose narrative contains clues that they are lying.',
      },
      resources: ['Scene scenario card', 'Planning grid (support tier)', 'Annotation guide'],
    },
  ],
  plenaryActivity: {
    title: 'Perspective Recommendation',
    duration: '6 minutes',
    instructions:
      'Display three story briefs (a ghost story, a war diary, a mystery set in a school). Students write on mini-whiteboards which perspective they would recommend for each and why. Discuss as a class - is there a "best" perspective, or does it depend on the story\'s purpose? Teacher reinforces: in the exam, choose your perspective deliberately and stick with it consistently. Perspective shifts are the most common structural error in creative writing.',
    differentiation: {
      support: 'Students choose a perspective for one scenario and explain their choice verbally.',
      core: 'Students recommend perspectives for all three scenarios with written justifications.',
      stretch:
        'Students identify a scenario where a deliberately unusual perspective choice (e.g., second person ghost story) would be effective and explain why.',
    },
  },
  homework:
    'Choose a fairy tale you know well (Cinderella, Little Red Riding Hood, The Three Little Pigs). Rewrite the opening 200 words from the perspective of the villain, in first person. Focus on creating a distinctive voice and include at least one moment of unreliable narration.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between "third person limited" and "third person omniscient" narration. What are the advantages of each?',
      lines: 5,
      modelAnswer:
        'Third person limited follows one character closely, only revealing their thoughts and perceptions: "She noticed the stain on his shirt and wondered if he had been in a fight." The reader knows only what this character knows, creating suspense. Third person omniscient knows everything about all characters: "She noticed the stain. He noticed her noticing. Neither spoke." This allows dramatic irony and a broader view of events. Limited narration creates intimacy and mystery; omniscient narration creates complexity and allows the writer to control information distribution across multiple characters.',
      marks: 4,
    },
    {
      question: 'What is an "unreliable narrator"? Why might a writer choose to use one?',
      lines: 5,
      modelAnswer:
        "An unreliable narrator is one whose account of events cannot be fully trusted - they may be lying, deluded, biased, or lacking crucial information. A writer might use an unreliable narrator to create mystery (the reader must work out what really happened), to explore themes of truth and perception, or to generate dramatic irony (the reader understands more than the narrator does). It also makes reading an active, detective-like experience - the reader must look for clues, contradictions, and omissions to piece together the truth behind the narrator's distorted version.",
      marks: 4,
    },
    {
      question:
        'Write the opening two sentences of a story in first person that immediately suggests the narrator might be unreliable. Explain the clues you included.',
      lines: 5,
      modelAnswer:
        '"I didn\'t mean to do it. Well - I did mean to, but not in the way they said." These two sentences immediately signal unreliability through contradiction (denying and then partially admitting), defensive tone ("not in the way they said"), and vague language that avoids stating what actually happened. The reader is intrigued but instantly wary - they know this narrator is going to present a version of events rather than the truth, and the story becomes about reading between the lines.',
      marks: 4,
    },
    {
      question:
        'Why is it important to maintain a consistent narrative perspective throughout a piece of creative writing? What goes wrong when writers accidentally shift perspective?',
      lines: 5,
      modelAnswer:
        "Consistent perspective maintains the reader's trust and immersion. If a first-person narrator suddenly reveals another character's private thoughts (which they could not possibly know), the illusion breaks - the reader is jolted out of the story by the inconsistency. Accidental perspective shifts are one of the most common errors in student creative writing, often caused by the writer knowing more than their narrator and letting that knowledge leak into the prose. In exam conditions, consistent perspective is a key indicator of narrative control and is rewarded in the higher mark bands for structure and organisation.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'The "same scene, different perspective" task is the most diagnostically useful activity - it reveals whether students truly understand perspective or are just switching pronouns.',
    'Unreliable narration is a stretch concept but deeply engaging. Use examples from texts students may know: Gone Girl, Life of Pi, or The Curious Incident of the Dog in the Night-Time.',
    'The most common exam error is perspective drift - starting in first person and accidentally slipping into omniscient. Drill this with regular short writing tasks.',
    'Second person narration is risky in exams but can be very effective for descriptive writing tasks. Advise students to use it only if they are confident.',
    'This lesson supports both AQA Paper 1 Q5 creative writing and Literature analysis of narrative voice (AO2).',
  ],
  targetedSkills: [
    'Creative Writing',
    'Narrative Writing',
    'Narrative Structure',
    "Writer's Methods",
    'Character Analysis',
  ],
}

// ─── Lesson 9: Crafting Endings - Resolution and Impact ─────────────────────

const lesson9: LessonPlan = {
  id: 'cw-09-crafting-endings',
  title: 'Crafting Endings: Resolution and Impact',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the different types of narrative ending and the distinct impact each creates on the reader.',
    'Apply techniques for writing satisfying, resonant endings that do not resort to cliche.',
    'Evaluate the effectiveness of different ending strategies for different narrative purposes.',
  ],
  successCriteria: [
    'I can identify and explain at least five types of narrative ending with examples.',
    'I can write an ending for a given narrative that avoids cliche and creates a deliberate emotional impact.',
    'I can evaluate which ending type best suits a given story and justify my choice using terminology.',
  ],
  keywords: [
    'resolution',
    'denouement',
    'circular narrative',
    'ambiguous ending',
    'cliffhanger',
    'epiphany',
    'catharsis',
    'anticlimax',
  ],
  starterActivity: {
    title: 'Worst Endings Ever',
    duration: '7 minutes',
    instructions:
      'Display five notoriously bad ending techniques: (1) "It was all a dream." (2) "And then I woke up." (3) A sudden, unexplained rescue. (4) Every single plot thread tied up in one convenient sentence. (5) "And they all lived happily ever after." Students discuss in pairs: why is each of these a weak ending? What do they have in common? (Answer: they feel unearned - they cheat the reader by avoiding the difficult work of resolution.) Teacher frames the lesson: a great ending is earned by everything that comes before it.',
    differentiation: {
      support:
        'Students rank the five endings from worst to least worst and explain their bottom choice.',
      core: 'Students explain what makes each ending weak and identify the common flaw.',
      stretch:
        'Students rewrite one of the weak endings to make it effective (e.g., making the "dream" ending genuinely ambiguous rather than a cop-out).',
    },
    resources: ['Five weak endings slide', 'Discussion prompt cards'],
  },
  mainActivities: [
    {
      title: 'The Endings Anthology',
      duration: '18 minutes',
      instructions:
        'Teacher presents five effective ending strategies with published examples: (1) Circular ending - returns to the opening image or situation, but the meaning has changed. (2) Ambiguous ending - leaves key questions unanswered, trusting the reader to interpret. (3) Epiphany ending - the character realises something profound about themselves or the world. (4) Image ending - closes with a powerful visual image that encapsulates the theme. (5) Quiet ending - no grand climax, just a small, human moment that resonates. For each type, read and annotate a short example. Students then categorise ten final paragraphs from different stories by ending type and discuss: which endings are most satisfying and why?',
      differentiation: {
        support: 'Students categorise six of the ten endings with a reference card for each type.',
        core: 'Students categorise all ten endings and write a sentence explaining why each is effective.',
        stretch:
          'Students identify endings that blend two types and explain how the combination creates a richer effect.',
      },
      resources: [
        'Ending strategies handout',
        'Ten final paragraphs worksheet',
        'Reference card (support tier)',
      ],
    },
    {
      title: 'Write the Ending',
      duration: '22 minutes',
      instructions:
        'Provide the opening and middle of a short story (approximately 300 words): a character has left home after an argument, walked to a place that is important to them, and is sitting alone, reflecting. Students must write the ending (150-200 words). The constraints: (1) No "it was all a dream" or "and then everything was fine." (2) The ending must use one of the five strategies from the anthology. (3) The ending must connect back to at least one detail from the opening. After writing, students label which ending strategy they used and write two sentences explaining why they chose it. Peer assessment: partners read each other\'s endings and answer - does the ending feel earned? Is it satisfying?',
      differentiation: {
        support:
          'Students write 100-120 words with a planning frame that provides the first sentence and prompts for each strategy.',
        core: 'Students write 150-200 words independently with a clear strategy choice.',
        stretch:
          'Students write two different endings for the same story using two different strategies, then evaluate which is more effective and why.',
      },
      resources: [
        'Story opening and middle handout',
        'Planning frame (support tier)',
        'Peer assessment guide',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Last Line Challenge',
    duration: '6 minutes',
    instructions:
      'Challenge: write the best final sentence you have ever written. It should be a standalone sentence that could close any story and leave the reader thinking. Share five or six examples. Class votes on the most powerful. Teacher reinforces: the final sentence is the last thing the reader carries away - make it count. It should echo, not explain.',
    differentiation: {
      support: 'Students choose from three provided final sentence frames and complete them.',
      core: 'Students write an original final sentence independently.',
      stretch:
        'Students write two final sentences - one that provides closure and one that creates ambiguity - and explain the different effects.',
    },
  },
  homework:
    'Find the ending of a novel, short story, or film that you love. Write 200 words analysing why the ending is effective: what strategy does it use? How does it connect to the rest of the narrative? What emotion does it leave the audience with?',
  worksheetQuestions: [
    {
      question:
        'Explain what a "circular narrative" ending is and why it can be effective. Give an example.',
      lines: 5,
      modelAnswer:
        'A circular narrative ending returns to the opening image, location, or situation, but the meaning has changed because of what has happened in the story. For example, a story that opens with a character sitting on a park bench might end with them sitting on the same bench - but now the reader knows what has happened in between, so the image carries new weight and significance. This technique is effective because it creates a sense of completeness and symmetry, and it forces the reader to compare the beginning and end, recognising how far the character has come or how much has changed.',
      marks: 4,
    },
    {
      question:
        'Why is "It was all a dream" considered a weak ending? Under what circumstances could a dream ending actually work?',
      lines: 5,
      modelAnswer:
        '"It was all a dream" is weak because it retroactively removes the stakes from everything the reader has invested in - nothing that happened was real, so none of it mattered. The reader feels cheated. However, a dream ending can work if the dream itself reveals a psychological truth about the character (as in literary fiction where the dream is the point), or if the ambiguity between dream and reality is maintained - the reader is not told definitively that it was a dream but is left to wonder. The key is that the ending must still matter, even if the events were not literally real.',
      marks: 4,
    },
    {
      question:
        'Write an "image ending" for a story about a character who has just said goodbye to someone they love. Your ending should be 2-3 sentences that close with a visual image rather than a statement of emotion.',
      lines: 5,
      modelAnswer:
        "She stood at the window and watched the car until it was nothing but a smudge of silver on the horizon, then nothing at all. The street was empty. On the kitchen table, his coffee cup sat exactly where he had left it, a faint ring of warmth still visible on the wood. This works because the image of the cooling coffee ring says more about loss than any direct statement could - it is a trace of presence that is already fading, mirroring the character's grief without naming it.",
      marks: 4,
    },
    {
      question:
        'What does it mean for an ending to feel "earned"? Why is this concept important in creative writing?',
      lines: 5,
      modelAnswer:
        'An ending feels "earned" when it grows naturally from the events, characters, and themes established earlier in the narrative. It does not come from nowhere or rely on coincidence - the reader can look back and see how the story was always heading toward this conclusion, even if they did not predict it. This matters because readers are sophisticated: they can sense when an ending has been imposed on a story rather than developed from within it. Earned endings create catharsis and satisfaction; unearned endings create frustration and the feeling that the writer gave up or took a shortcut.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The "Worst Endings Ever" starter always generates energetic discussion. Students will have strong opinions about dream endings in particular.',
    'Emphasise the connection between openings (Lesson 1) and endings - a strong ending often echoes or answers the opening.',
    'In exams, many students lose marks by rushing their ending in the final minutes. This lesson should make them plan their ending in advance.',
    'The "image ending" is the most transferable technique - it works for both narrative and descriptive writing tasks.',
    'This lesson pairs naturally with Lesson 1 (Narrative Openings). Consider teaching them in the same week.',
  ],
  targetedSkills: [
    'Creative Writing',
    'Narrative Writing',
    'Narrative Structure',
    "Writer's Methods",
    'Engagement and Impact',
  ],
}

// ─── Lesson 10: Exam Practice - Timed Descriptive/Narrative Writing ─────────

const lesson10: LessonPlan = {
  id: 'cw-10-exam-practice',
  title: 'Exam Practice: Timed Descriptive/Narrative Writing',
  text: 'Creative Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply the creative writing skills developed across this unit under timed exam conditions.',
    'Plan, write, and proofread a complete creative writing response within 45 minutes.',
    'Self-assess against the AQA Paper 1 Q5 mark scheme to identify strengths and areas for improvement.',
  ],
  successCriteria: [
    'I can produce a well-structured, engaging piece of creative writing within 45 minutes that uses a range of techniques from this unit.',
    'I can allocate time effectively: 5 minutes planning, 35 minutes writing, 5 minutes proofreading.',
    'I can self-assess my work against the mark scheme descriptors and set a specific improvement target.',
  ],
  keywords: [
    'mark scheme',
    'content and organisation',
    'technical accuracy',
    'ambitious vocabulary',
    'structural features',
    'proofreading',
    'time management',
    'planning',
  ],
  starterActivity: {
    title: 'Mark Scheme Unpacking',
    duration: '8 minutes',
    instructions:
      'Display the AQA Paper 1 Q5 mark scheme descriptors for Level 3 (13-16 marks) and Level 4 (17-20 marks). Students compare the two levels in pairs and identify the key differences. Teacher highlights: the jump from Level 3 to Level 4 requires "compelling and convincing" communication, "extensive and ambitious" vocabulary, "varied and inventive" structural features, and "secure" technical accuracy. Students write down one technique from this unit that could help them achieve each of these descriptors.',
    differentiation: {
      support:
        'Provide a simplified version of the mark scheme with key words highlighted and a glossary.',
      core: 'Students compare both levels independently and identify upgrade points.',
      stretch:
        'Students also read the Level 2 descriptors and identify the specific weaknesses that keep writing at that level.',
    },
    resources: [
      'AQA Paper 1 Q5 mark scheme (projected)',
      'Simplified mark scheme (support tier)',
      'Exercise books',
    ],
  },
  mainActivities: [
    {
      title: 'Planning Under Pressure',
      duration: '5 minutes',
      instructions:
        'Reveal the exam question. Offer a choice of two prompts (as in the real exam): (A) "Describe a place that is coming to life at the start of the day." (B) "Write a story about a journey that does not go as planned." Students choose one and spend exactly 5 minutes planning. Teacher displays a planning template on the board: (1) Opening technique and first line. (2) Three key moments or images in the middle. (3) Ending strategy and final line. (4) Perspective choice. (5) Three ambitious vocabulary words to include. Timer visible on the board throughout.',
      differentiation: {
        support: 'Students use a printed planning template with prompts for each section.',
        core: 'Students plan using the board template in their exercise books.',
        stretch:
          'Students plan quickly and use remaining time to draft their first sentence, ensuring a strong opening.',
      },
      resources: [
        'Exam question slide',
        'Planning template (projected and printed for support tier)',
        'Visible timer',
      ],
    },
    {
      title: 'Timed Writing',
      duration: '35 minutes',
      instructions:
        'Students write their response in silence under exam conditions. Timer is visible. Teacher circulates but does not assist with content - only with time management prompts at key intervals: at 10 minutes ("You should be into your second paragraph"), at 20 minutes ("You should be approaching your main event or central image"), at 30 minutes ("Begin thinking about your ending"), at 33 minutes ("Start your final paragraph now"). Students are expected to produce 400-500 words. No word-processing tools - handwritten only, as in the exam.',
      differentiation: {
        support:
          'Students aim for 300-350 words. Provide a discreet prompt card with five techniques to include (e.g., sensory detail, short sentence for effect, figurative language).',
        core: 'Students aim for 400-500 words under full exam conditions.',
        stretch:
          'Students aim for 450-500 words and consciously deploy at least one technique from each lesson in this unit.',
      },
      resources: ['Lined paper or exercise books', 'Visible timer', 'Prompt card (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Proofread, Self-Assess, Target',
    duration: '10 minutes',
    instructions:
      'Students spend 5 minutes proofreading their work, focusing on three priorities: (1) Spelling errors - circle and correct. (2) Missing or incorrect punctuation - insert in a different colour. (3) One sentence they can upgrade - cross out and rewrite above. Then students self-assess using a simplified mark scheme grid, giving themselves a mark out of 24 for Content & Organisation and a mark out of 16 for Technical Accuracy. Finally, students write one specific target for improvement on a sticky note: not "write better" but "use more varied sentence structures in my opening paragraph" or "include touch and smell as well as sight."',
    differentiation: {
      support:
        'Teacher guides the proofreading with three specific checks displayed on the board. Self-assessment uses a simplified three-level grid (bronze/silver/gold).',
      core: 'Students proofread independently and self-assess against the full mark scheme descriptors.',
      stretch:
        'Students proofread, self-assess, and then identify the single paragraph that is weakest, explaining what they would change in a redraft.',
    },
  },
  homework:
    'Redraft your exam response at home, addressing the specific target you set in the plenary. You have unlimited time - produce the best version of this piece you are capable of. Highlight or annotate three changes you made and explain why each one improves the writing.',
  worksheetQuestions: [
    {
      question:
        'Explain how you would allocate 45 minutes for a creative writing exam question. Why is each stage important?',
      lines: 5,
      modelAnswer:
        '5 minutes planning: essential for structuring the response and avoiding a rambling, unfocused piece. Plan the opening, three key moments, and the ending. 35 minutes writing: the bulk of the time, aiming for 400-500 words of carefully crafted prose. Pace yourself - do not spend 20 minutes on the opening. 5 minutes proofreading: catches basic SPaG errors that cost marks and allows one sentence to be upgraded. Without planning, writing tends to meander; without proofreading, avoidable errors remain. Each stage contributes to a higher mark.',
      marks: 3,
    },
    {
      question:
        'What is the difference between a Level 3 and a Level 4 response in AQA Paper 1 Q5? Identify two key differences.',
      lines: 5,
      modelAnswer:
        'A Level 3 response (13-16 marks for content) is "clear and chosen" in its communication with "increasingly sophisticated" vocabulary, while a Level 4 response (17-20 marks) is "compelling and convincing" with "extensive and ambitious" vocabulary. The key differences are consistency and ambition: Level 4 writing sustains its quality throughout rather than having strong moments surrounded by weaker sections, and it takes greater risks with language, structure, and imagery. Level 4 also shows "varied and inventive" structural features, meaning the organisation itself contributes to the effect, rather than being merely competent.',
      marks: 4,
    },
    {
      question:
        'List five techniques from this unit that you could use to improve a creative writing exam response. For each, explain briefly how it would help.',
      lines: 8,
      modelAnswer:
        '(1) In medias res opening - immediately engages the examiner and avoids a slow, unfocused start. (2) Show don\'t tell - demonstrates sophisticated language control and earns credit for ambitious vocabulary. (3) Varied sentence structures - explicitly rewarded in the mark scheme for "varied and effective" or "varied and inventive" sentence forms. (4) Sensory detail beyond sight - shows range and ambition in descriptive vocabulary. (5) A planned ending strategy (e.g., circular or image ending) - demonstrates structural control and leaves the examiner with a strong final impression. Together, these techniques address both Content & Organisation and Technical Accuracy assessment objectives.',
      marks: 5,
    },
    {
      question:
        'A student writes the following opening for a descriptive piece: "The beach was nice. The sun was shining and it was a good day. I could see the sea." Rewrite this opening using techniques from this unit to transform it into a Level 4 response. (60-80 words)',
      lines: 8,
      modelAnswer:
        'Dawn spilled across the shoreline like liquid copper, turning the wet sand into a mirror that held the sky. The sea exhaled - a long, slow breath that dragged the pebbles back with a rattle and released them, over and over, as if counting time. Salt thickened the air, coating my lips, settling in my hair. Somewhere behind the dunes, a gull cried out once and was answered by silence. This uses pathetic fallacy (dawn as "liquid copper"), personification (the sea "exhaled"), sensory detail (taste of salt, sound of gull), varied sentence structures (cumulative, complex, simple), and ambitious vocabulary throughout.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best as a culminating assessment after the full creative writing unit has been taught.',
    'Enforce exam conditions strictly during the writing phase - no talking, no phones, no help. Students need to experience real time pressure.',
    'Circulate during writing to note common issues for a whole-class feedback session in the following lesson.',
    'The proofreading phase is essential. Many students have never been explicitly taught how to proofread - model it in a previous lesson if needed.',
    'Collect the self-assessment sticky notes as formative data. They reveal what students perceive as their weaknesses, which may differ from their actual weaknesses.',
    'Consider marking a sample of responses against the actual AQA mark scheme and returning them with examiner-style annotations to demystify the assessment process.',
  ],
  targetedSkills: [
    'Creative Writing',
    'Descriptive Writing',
    'Narrative Writing',
    'Exam Technique',
    'Time Management',
    'SPaG',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const creativeWritingLessons: LessonPlan[] = [
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
]
