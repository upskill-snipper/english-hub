import type { LessonPlan } from '@/types';

export const y7Term2Lessons: LessonPlan[] = [
  // ── T2.1 Finding My Voice ─────────────────────────────────────────────────

  // ── Lesson 1: What is Voice? ──────────────────────────────────────────────
  {
    id: 'y7-t2-01-what-is-voice',
    title: 'What is Voice? Identifying Tone in Autobiographical Extracts',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Define "voice" and "tone" in the context of autobiographical writing (7R.3)',
      'Identify how a writer\'s tone shapes the reader\'s response',
      'Compare the voices of two different autobiographical extracts',
      'Begin to articulate personal reading preferences using appropriate terminology',
    ],
    successCriteria: [
      'I can explain the difference between voice and tone using my own words',
      'I can identify the tone of an autobiographical extract and support my answer with evidence',
      'I can compare the tone of two extracts and explain which I find more engaging and why',
      'I can use at least three key vocabulary words accurately in my written responses',
    ],
    keywords: [
      'voice',
      'tone',
      'autobiography',
      'perspective',
      'first person',
      'conversational',
      'formal',
      'reflective',
    ],
    starterActivity: {
      title: 'Whose Voice Is This?',
      duration: '8 minutes',
      instructions:
        'Play three short audio clips (or read aloud three brief passages) from very different speakers — e.g. a sports commentator, a child narrating a picture book, and a formal news report. Students discuss in pairs: How does each voice make you feel? What words would you use to describe each one? Collect suggestions on the board to build a "Tone Word Bank" that will be used throughout the lesson.',
      differentiation: {
        support:
          'Provide a pre-printed list of ten tone words (e.g. serious, playful, angry, calm) for students to choose from.',
        core: 'Students generate their own tone words after hearing the clips.',
        stretch:
          'Students explain why specific word choices or sentence lengths in each clip create that particular tone.',
      },
      resources: ['Audio clips or prepared reading passages', 'Tone Word Bank template'],
    },
    mainActivities: [
      {
        title: 'Exploring Autobiographical Voice',
        duration: '18 minutes',
        instructions:
          'Distribute two short autobiographical extracts (approximately 150 words each) — one with a humorous, conversational tone and one with a serious, reflective tone. Teacher models annotating the first extract, identifying specific word choices and sentence structures that create the tone. Students then independently annotate the second extract using the same approach. Pairs share their annotations and agree on the dominant tone of each extract.',
        differentiation: {
          support:
            'Provide a guided annotation sheet with prompts such as "Circle any informal words" and "Underline sentences that feel serious or thoughtful."',
          core: 'Students annotate independently and identify specific language features that create tone.',
          stretch:
            'Students consider how the tone might shift if certain words were replaced — e.g. swap "trudged" for "walked" — and explain the effect.',
        },
        resources: [
          'Two autobiographical extracts (printed handout)',
          'Guided annotation sheet (support tier)',
          'Highlighters',
        ],
      },
      {
        title: 'Comparing Voices: Which Speaks to Me?',
        duration: '20 minutes',
        instructions:
          'Students write a comparative response answering: "Which autobiographical extract has a more engaging voice? Explain your answer using evidence from both texts." Teacher provides a model opening sentence on the board. After 12 minutes of writing, students swap books with a partner for peer feedback using the success criteria as a checklist. Students then have 5 minutes to improve one section of their response based on feedback received.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters: "Extract A has a ___ tone because...", "In contrast, Extract B...", "I find Extract ___ more engaging because...".',
          core: 'Students write a comparative response independently using evidence from both extracts.',
          stretch:
            'Students explore how the writer\'s purpose (to entertain vs. to inform) influences the tone and evaluate which purpose is more effectively achieved.',
        },
        resources: [
          'Writing frame (support tier)',
          'Success criteria checklist for peer feedback',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Tone Continuum',
      duration: '7 minutes',
      instructions:
        'Draw a continuum on the board from "Most Formal" to "Most Informal." Students place each extract on the continuum and justify their positioning with one piece of evidence. Then ask: "Where would your own voice sit if you were writing about your life?" Students write a single sentence about their day in the tone they would naturally use, then share with a partner.',
      differentiation: {
        support: 'Provide sentence starters for the justification: "I placed this extract here because...".',
        core: 'Students position and justify independently.',
        stretch:
          'Students write the same sentence about their day in two contrasting tones and explain how word choice changed the effect.',
      },
    },
    homework:
      'Find a short autobiographical extract from a book, magazine, or online source. Write 3-4 sentences identifying the tone and explaining how the writer creates it through specific word choices.',
    worksheetQuestions: [
      {
        question:
          'Define the term "voice" as it is used in English literature. How is voice different from "tone"?',
        lines: 4,
        modelAnswer:
          'Voice is the distinctive style and personality of a writer that comes through in their writing — it is who they are on the page. Tone is the attitude or mood the writer takes towards their subject in a particular piece. A writer has one voice but can use many different tones depending on what they are writing about.',
        marks: 3,
      },
      {
        question:
          'Read the following sentence from an autobiography: "School was, without question, the most spectacularly pointless experience of my entire existence." What tone does the writer use here? Identify two words or phrases that help create this tone.',
        lines: 5,
        modelAnswer:
          'The writer uses a humorous and exaggerated tone. The phrase "spectacularly pointless" creates this tone through hyperbole — "spectacularly" is an extreme adverb that makes the complaint feel dramatic and entertaining rather than genuinely bitter. "Entire existence" further exaggerates, suggesting nothing in their whole life was worse than school, which creates a comic effect.',
        marks: 4,
      },
      {
        question:
          'Why do autobiographical writers often use a first-person narrative voice? What effect does this have on the reader?',
        lines: 4,
        modelAnswer:
          'Autobiographical writers use first person because they are writing about their own experiences. The use of "I" creates intimacy and directness, making the reader feel as though the writer is speaking to them personally. It also builds trust, as the reader accepts the writer as the authority on their own life, and allows the writer to share their emotions and thoughts in a way that third person would not achieve.',
        marks: 3,
      },
      {
        question:
          'Compare the tone of these two openings:\n\nA: "I was born in a tiny village where nothing ever happened and nobody ever left."\nB: "The day I arrived in this world, chaos erupted — the midwife tripped over the cat and my father fainted."\n\nWhich do you find more engaging? Explain your answer with reference to specific words or phrases.',
        lines: 8,
        modelAnswer:
          'Extract B is more engaging because it uses a humorous and dramatic tone to draw the reader in. The word "chaos" immediately creates excitement, while the specific comic details — the midwife tripping over the cat and the father fainting — paint a vivid, entertaining scene. In contrast, Extract A uses a reflective, understated tone with the repetition of "nothing" and "nobody," which creates a quieter, more melancholy mood. While both are effective, Extract B is more engaging because the humour makes the reader want to continue reading to find out what other amusing events occurred.',
        marks: 5,
      },
      {
        question:
          'Write three sentences about your morning routine. First, write them in a serious, formal tone. Then rewrite the same content in a humorous, informal tone. Underline the words you changed.',
        lines: 8,
        modelAnswer:
          'Formal: "Each morning, I rise at seven o\'clock, consume a nutritious breakfast, and prepare myself for the school day ahead." Informal: "Every morning, I drag myself out of bed at some ridiculous hour, shove down a bowl of cereal, and stumble out the door looking like I\'ve been attacked by my own pillow." Changes include: "rise" to "drag myself out of bed" (more physical, comedic), "consume a nutritious breakfast" to "shove down a bowl of cereal" (informal verb, specific detail), and the addition of the simile about the pillow for comic effect.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Select autobiographical extracts that are age-appropriate and represent diverse voices — consider extracts from Boy by Roald Dahl, Chinese Cinderella by Adeline Yen Mah, or I Know Why the Caged Bird Sings by Maya Angelou.',
      'The Tone Word Bank created in the starter should be displayed as a working wall resource and added to throughout Term 2.',
      'Some students may confuse "voice" and "tone" — reinforce the analogy: voice is who you are, tone is your mood on a particular day.',
      'This lesson establishes foundational vocabulary for the entire unit. Revisit these terms explicitly in subsequent lessons.',
    ],
    targetedSkills: [
      '7R.3',
      'Identifying Tone',
      'Comparative Analysis',
      'Autobiographical Reading',
      'Close Reading',
    ],
  },

  // ── Lesson 2: Language and Identity ───────────────────────────────────────
  {
    id: 'y7-t2-02-language-and-identity',
    title: 'Language and Identity: How Word Choice Reveals Who We Are',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand how writers use word choice to reveal identity and personality (7R.5)',
      'Analyse how specific vocabulary reflects a character\'s background, age, or attitude',
      'Explore the concept of idiolect and how language defines individuals',
      'Make inferences about a person based on their language choices',
    ],
    successCriteria: [
      'I can explain how a writer\'s word choice reveals something about who they are',
      'I can identify specific words or phrases that suggest a person\'s background, age, or personality',
      'I can define idiolect and give an example from my own speech',
      'I can write a short passage where my word choices deliberately reveal something about a character',
    ],
    keywords: [
      'idiolect',
      'word choice',
      'diction',
      'identity',
      'dialect',
      'register',
      'connotation',
      'reveal',
    ],
    starterActivity: {
      title: 'What Do Your Words Say About You?',
      duration: '7 minutes',
      instructions:
        'Display five different ways of saying the same thing — e.g. five ways of greeting someone ranging from very formal to slang. Students rank them from most to least formal and discuss: Who might say each one? When would you use each? Students then write down three words or phrases that only they or their friendship group use. Introduce the term "idiolect" as the unique language fingerprint each person has.',
      differentiation: {
        support: 'Provide the five greetings already printed with a matching exercise linking each to a speaker type.',
        core: 'Students rank, discuss, and generate their own idiolect examples.',
        stretch:
          'Students consider how their language changes between contexts — speaking to a friend vs. a teacher vs. a grandparent — and what this reveals about social identity.',
      },
      resources: ['Greetings display slide', 'Mini whiteboards'],
    },
    mainActivities: [
      {
        title: 'Decoding Identity Through Language',
        duration: '18 minutes',
        instructions:
          'Provide three short character monologues (approximately 80 words each) written in distinctly different voices — e.g. a Victorian gentleman, a modern teenager, a weary factory worker. Students work in pairs to annotate each monologue, identifying specific words and phrases that reveal who the speaker is. For each monologue, students complete a character profile card answering: What is their approximate age? What is their social background? What is their attitude to life? Students must use evidence from the text to justify every answer.',
        differentiation: {
          support:
            'Provide pre-structured profile cards with multiple-choice options for age range, background, and attitude, plus space to copy supporting evidence.',
          core: 'Students complete open profile cards with evidence-based justifications.',
          stretch:
            'Students identify how grammatical choices (sentence length, complexity, use of questions) as well as vocabulary reveal identity.',
        },
        resources: [
          'Three character monologues handout',
          'Character profile cards',
          'Highlighters',
        ],
      },
      {
        title: 'Crafting Identity Through Word Choice',
        duration: '20 minutes',
        instructions:
          'Students create their own character and write a 100-word monologue in that character\'s voice. Before writing, they must complete a planning card: character name, age, background, personality trait they want to reveal. Teacher models turning a bland sentence ("I went to the shop") into one rich with identity ("I dragged myself to the corner shop, hood up, earbuds in, dodging Mrs Patel\'s inevitable interrogation about my GCSEs"). Students draft, then read their monologue to a partner who guesses the character\'s identity from the language alone.',
        differentiation: {
          support:
            'Provide a word bank organised by character type (formal/elderly, casual/young, professional/busy) and sentence starters.',
          core: 'Students plan and write independently, using the planning card to guide their word choices.',
          stretch:
            'Students write the same character\'s monologue in two different contexts (e.g. talking to a friend vs. writing a formal letter) to explore how register shifts while identity remains.',
        },
        resources: [
          'Character planning card',
          'Word bank by character type (support tier)',
          'Lined writing paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Guess the Speaker',
      duration: '8 minutes',
      instructions:
        'Select four student monologues (with permission) and read them aloud without revealing the character. The class votes on what they think the character\'s age, background, and personality are. After each reveal, ask: "Which specific words gave it away?" Reinforce that every word choice is a decision that reveals identity.',
      differentiation: {
        support: 'Students are given three options for each category to choose from.',
        core: 'Students infer character details and justify with evidence from the monologue.',
        stretch:
          'Students suggest alternative word choices that would change the reader\'s perception of the character\'s identity.',
      },
    },
    homework:
      'Listen to a conversation at home or on TV and write down five words or phrases that reveal something about the speaker\'s identity (age, background, mood). For each one, explain what it reveals and why.',
    worksheetQuestions: [
      {
        question:
          'What is an idiolect? Give two examples from your own speech that are part of your personal idiolect.',
        lines: 4,
        modelAnswer:
          'An idiolect is the unique way an individual person uses language — their personal vocabulary, phrases, and speech patterns that make the way they speak distinctive. Examples will vary but might include catchphrases, words borrowed from another language spoken at home, slang specific to their friend group, or habitual sentence structures.',
        marks: 3,
      },
      {
        question:
          'Read the following extract: "Right then, love, pop yourself down there and I\'ll fetch you a nice cuppa. You look like you\'ve had a proper long day." What can you infer about this speaker from their word choices? Consider age, personality, and background.',
        lines: 6,
        modelAnswer:
          'The speaker is likely an older person, perhaps middle-aged or elderly, as suggested by the use of "love" as a term of address and "cuppa" for a cup of tea — both are informal but warm British English expressions more commonly used by older generations. The phrase "pop yourself down" is gentle and caring, suggesting a nurturing personality. "Proper long day" uses colloquial language suggesting a working-class or Northern English background. Overall, the word choices create the impression of a kind, hospitable person who is attentive to others\' needs.',
        marks: 4,
      },
      {
        question:
          'Explain the difference between "dialect" and "register." Give an example of each.',
        lines: 5,
        modelAnswer:
          'Dialect refers to a variety of language associated with a particular region or social group, including distinctive vocabulary and grammar — for example, saying "nowt" instead of "nothing" in Yorkshire dialect. Register refers to the level of formality a speaker chooses based on the situation — for example, saying "Hey, what\'s up?" to a friend (informal register) versus "Good afternoon, how may I assist you?" in a job interview (formal register). Dialect is about where you come from; register is about adapting to context.',
        marks: 4,
      },
      {
        question:
          'Rewrite the following sentence in two different ways to reveal two different characters. Original: "I walked into the room and sat down."\n\nCharacter A: A nervous Year 7 student on their first day.\nCharacter B: A confident head teacher.',
        lines: 8,
        modelAnswer:
          'Character A: "I sort of shuffled through the door, keeping my head down, and slid into the nearest chair before anyone could look at me." The verbs "shuffled" and "slid" suggest nervousness and a desire to be invisible, while "before anyone could look at me" reveals social anxiety. Character B: "I strode into the room, surveyed the assembled staff, and took my seat at the head of the table." "Strode" suggests confidence and authority, "surveyed" implies control and ownership of the space, and "head of the table" reinforces their position of power.',
        marks: 5,
      },
      {
        question:
          'Why is word choice important when a writer is trying to create a convincing character? Use an example from today\'s lesson to support your answer.',
        lines: 5,
        modelAnswer:
          'Word choice is important because every word carries connotations that reveal information about a character\'s age, background, education, personality, and mood without the writer having to tell the reader directly. It is the difference between showing and telling. For example, a character who says "I was absolutely famished, darling" gives a very different impression from one who says "I\'m well starving, mate" — both mean the same thing, but the vocabulary, register, and terms of address paint entirely different people.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson connects closely to spoken language study — consider linking to any speaking and listening assessments.',
      'Be sensitive to students who speak English as an additional language; frame multilingualism as an asset and a rich part of their idiolect.',
      'The monologue writing task is excellent for formative assessment of students\' ability to make deliberate language choices.',
      'Consider displaying the best student monologues as a working wall display to celebrate achievement and provide models for future lessons.',
    ],
    targetedSkills: [
      '7R.5',
      'Word Choice Analysis',
      'Inference',
      'Creative Writing',
      'Character Voice',
    ],
  },

  // ── Lesson 3: Descriptive Writing — Show Don't Tell ───────────────────────
  {
    id: 'y7-t2-03-descriptive-writing-show-dont-tell',
    title: 'Descriptive Writing: Show Don\'t Tell',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand the principle of "show don\'t tell" in descriptive writing (7W.1, 7W.5)',
      'Transform "telling" sentences into "showing" sentences using sensory detail',
      'Use a range of techniques — metaphor, simile, personification, sensory language — to show emotion and atmosphere',
      'Draft a descriptive paragraph that demonstrates the show-don\'t-tell technique',
    ],
    successCriteria: [
      'I can explain the difference between showing and telling in writing',
      'I can rewrite a "telling" sentence as a "showing" sentence using at least two techniques',
      'I can use sensory detail (sight, sound, smell, touch, taste) to create atmosphere',
      'I can write a descriptive paragraph of at least 80 words that shows rather than tells',
    ],
    keywords: [
      'show don\'t tell',
      'sensory detail',
      'metaphor',
      'simile',
      'personification',
      'atmosphere',
      'imagery',
      'connotation',
    ],
    starterActivity: {
      title: 'Tell vs. Show Challenge',
      duration: '7 minutes',
      instructions:
        'Display two versions of the same scene side by side. Version A: "It was a cold day. The boy was scared." Version B: "Frost crept across the windowpane like white fingers. The boy\'s hands trembled as he pressed himself into the doorway, his breath coming in short, ragged gasps." Students discuss in pairs: Which is more effective? Why? What does Version B do that Version A does not? Teacher introduces the "show don\'t tell" concept and explains that strong descriptive writing makes the reader feel rather than just understand.',
      differentiation: {
        support: 'Provide a simple table comparing what each version does, with some cells pre-filled.',
        core: 'Students identify the specific techniques used in Version B and explain their effects.',
        stretch:
          'Students identify the specific senses targeted in Version B and discuss which sense is most effective at creating the feeling of fear.',
      },
      resources: ['Display slide with two versions', 'Comparison table (support tier)'],
    },
    mainActivities: [
      {
        title: 'Transforming Telling into Showing',
        duration: '15 minutes',
        instructions:
          'Provide a worksheet with six "telling" sentences (e.g. "She was happy," "The house was old," "He was angry"). Teacher models transforming the first sentence into a "showing" paragraph using sensory detail, metaphor, and specific actions. Students then work in pairs to transform the remaining five sentences. For each, they must include at least one figurative technique and one sensory detail. After ten minutes, pairs share their best transformation and the class votes on the most effective.',
        differentiation: {
          support:
            'Provide technique prompt cards (e.g. "Try a simile: happy like ___", "What would happiness look like on someone\'s face?") and a sensory checklist.',
          core: 'Students transform sentences independently using a range of techniques.',
          stretch:
            'Students transform the same telling sentence in two contrasting ways — one using visual imagery and one using sound — and evaluate which is more powerful.',
        },
        resources: [
          'Telling-to-Showing worksheet',
          'Technique prompt cards (support tier)',
          'Sensory checklist',
        ],
      },
      {
        title: 'Writing a Show-Don\'t-Tell Paragraph',
        duration: '22 minutes',
        instructions:
          'Students choose one of three scenarios: (1) Walking into school on a Monday morning, (2) The moment before opening an exam paper, (3) Stepping outside into the first snow of winter. Their task is to write a descriptive paragraph of 80-120 words that shows the emotions and atmosphere of the scene without ever directly naming the emotion. Teacher displays a "banned words" list (happy, sad, scared, angry, cold, nice, good, bad) to force students away from telling. After writing, students highlight every sensory detail in one colour and every figurative technique in another, then count their totals to self-assess.',
        differentiation: {
          support:
            'Provide a planning grid with five boxes labelled with the five senses and space to brainstorm ideas for their chosen scenario before writing.',
          core: 'Students plan and write independently, using the banned word list as a constraint.',
          stretch:
            'Students experiment with varying sentence length for effect — short sentences for tension, longer sentences for atmosphere — and annotate their choices.',
        },
        resources: [
          'Scenario choice cards',
          'Banned words list display',
          'Sensory planning grid (support tier)',
          'Highlighters (two colours)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Gallery Walk',
      duration: '8 minutes',
      instructions:
        'Students leave their books open on their desks. Class conducts a silent gallery walk, reading three other students\' paragraphs. For each, they leave a sticky note with one "star" (something effective) and one "wish" (a suggestion for improvement). Students return to their desks, read feedback, and write one sentence explaining what they will improve when they revisit this piece.',
      differentiation: {
        support: 'Provide sentence starters for feedback: "I liked how you..." and "You could improve by...".',
        core: 'Students give specific, evidence-based feedback referencing techniques.',
        stretch:
          'Students identify the most effective single sentence in each paragraph and explain why it works.',
      },
    },
    homework:
      'Choose an everyday moment (eating breakfast, waiting for the bus, walking the dog) and write a descriptive paragraph of 100 words that shows the experience without telling. Use at least three senses and two figurative techniques.',
    worksheetQuestions: [
      {
        question:
          'Explain the principle of "show don\'t tell" in descriptive writing. Why is showing more effective than telling?',
        lines: 4,
        modelAnswer:
          'Show don\'t tell means using descriptive details, actions, sensory language, and figurative techniques to let the reader experience a scene or emotion rather than simply stating it. Showing is more effective because it engages the reader\'s imagination, makes them feel as though they are in the scene, and creates a more vivid and memorable reading experience. Telling is flat and passive; showing is immersive and active.',
        marks: 3,
      },
      {
        question:
          'Transform the following "telling" sentence into a "showing" paragraph of 3-4 sentences: "The garden was beautiful."',
        lines: 6,
        modelAnswer:
          'Sunlight spilled across the lawn like liquid gold, catching the dew on each blade of grass until the whole garden seemed to shimmer. Roses clustered along the fence, their petals soft as velvet, filling the air with a sweetness so rich you could almost taste it. Somewhere in the apple tree, a blackbird sang — its melody threading through the stillness like a needle through silk. Even the old stone bench, dappled with lichen, seemed to glow with quiet warmth.',
        marks: 4,
      },
      {
        question:
          'Identify and label the techniques used in this sentence: "The wind howled through the empty streets, dragging litter across the pavement like tumbleweeds in a ghost town."',
        lines: 5,
        modelAnswer:
          'Personification: "The wind howled" — the wind is given the human/animal quality of howling, which creates a threatening, lonely atmosphere. Personification: "dragging litter" — the wind is presented as physically pulling objects, suggesting force and aggression. Simile: "like tumbleweeds in a ghost town" — comparing the litter to tumbleweeds creates a sense of emptiness and abandonment, as ghost towns are deserted and eerie. Together, these techniques show the reader that the streets are desolate and unsettling.',
        marks: 5,
      },
      {
        question:
          'A student writes: "The classroom was very noisy and it was hard to concentrate." Rewrite this sentence using the show-don\'t-tell technique. You must include at least two senses.',
        lines: 6,
        modelAnswer:
          'Chairs screeched against the floor as voices ricocheted off every wall — a dozen conversations tangled into a single, deafening roar. The sharp smell of whiteboard marker hung in the air, and somewhere a pen was being clicked with maddening, metronomic persistence. Words on the page blurred and swam as the noise pressed against my temples like a vice.',
        marks: 4,
      },
      {
        question:
          'Why might a writer deliberately use a short, simple sentence after a long descriptive one? What effect does this create?',
        lines: 4,
        modelAnswer:
          'A short sentence after a long one creates contrast that draws the reader\'s attention. The long sentence builds atmosphere or tension, and the short sentence delivers impact — it might reveal something shocking, create a pause for dramatic effect, or emphasise a key moment. For example: "The forest stretched in every direction, dark and tangled, branches clawing at the sky like skeletal fingers. Then silence." The short sentence "Then silence" is more powerful because of the detailed description that preceded it.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is a pivotal lesson for descriptive writing across KS3. The "show don\'t tell" principle should be referenced in every subsequent creative writing lesson.',
      'The banned words list is an effective constraint — students initially find it frustrating but quickly discover it forces more creative choices.',
      'Consider modelling a live write under the visualiser to demonstrate the thinking process behind transforming telling into showing.',
      'Collect the self-assessment highlight counts to identify students who are over-relying on one sense or avoiding figurative techniques.',
    ],
    targetedSkills: [
      '7W.1',
      '7W.5',
      'Descriptive Writing',
      'Sensory Language',
      'Figurative Techniques',
      'Show Don\'t Tell',
    ],
  },

  // ── Lesson 4: Reflective Writing — Personal Narrative ─────────────────────
  {
    id: 'y7-t2-04-reflective-writing',
    title: 'Reflective Writing: Personal Narrative',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand the features of reflective writing and how it differs from descriptive or narrative writing (7W.6)',
      'Identify how writers use reflection to add depth and meaning to personal experiences',
      'Write reflectively about a personal experience, combining narrative with insight',
      'Use temporal connectives and shifts between past and present tense to structure reflection',
    ],
    successCriteria: [
      'I can identify the features that make a piece of writing reflective rather than simply narrative',
      'I can explain how a writer moves between narrating an event and reflecting on its significance',
      'I can write a reflective paragraph that includes both what happened and what it meant to me',
      'I can use at least two temporal connectives and one tense shift in my writing',
    ],
    keywords: [
      'reflective writing',
      'personal narrative',
      'insight',
      'significance',
      'temporal connectives',
      'tense shift',
      'hindsight',
      'introspection',
    ],
    starterActivity: {
      title: 'Narrative vs. Reflective: Spot the Difference',
      duration: '8 minutes',
      instructions:
        'Display two versions of the same event: Version A is purely narrative ("I fell off my bike. I hit the ground. My knee was bleeding.") Version B adds reflection ("I fell off my bike — and in that moment, sprawled on the tarmac with gravel embedded in my palms, I understood for the first time that I was not, in fact, invincible. Looking back now, I think that was the afternoon my childhood ended."). Students identify in pairs what Version B does differently and why it is more interesting. Teacher draws out that reflection adds meaning and interpretation, not just more detail.',
      differentiation: {
        support: 'Highlight the reflective sentences in Version B in advance so students can focus on explaining their effect.',
        core: 'Students identify the reflective elements independently and explain why they add depth.',
        stretch:
          'Students notice the tense shift from past ("I fell") to present ("Looking back now, I think") and discuss why writers move between tenses in reflective writing.',
      },
      resources: ['Display slide with two versions'],
    },
    mainActivities: [
      {
        title: 'Analysing a Reflective Mentor Text',
        duration: '15 minutes',
        instructions:
          'Distribute a short reflective extract (approximately 200 words) from an autobiographical text. Teacher reads aloud, then students annotate using a colour-coded system: one colour for narrative (what happened), one for description (sensory detail), and one for reflection (what it meant). Students then calculate the ratio — how much of the extract is narrative vs. reflective? Discuss as a class: What balance works best in reflective writing? Teacher introduces the concept of the "reflection sandwich" — narrate, describe, reflect.',
        differentiation: {
          support:
            'Provide the extract with the first two examples of each category pre-highlighted as a model.',
          core: 'Students highlight and categorise independently, then calculate ratios.',
          stretch:
            'Students evaluate whether the extract has the right balance and suggest where additional reflection could strengthen the piece.',
        },
        resources: [
          'Reflective extract handout',
          'Highlighters (three colours)',
          'Reflection sandwich diagram',
        ],
      },
      {
        title: 'Writing My Own Reflective Paragraph',
        duration: '22 minutes',
        instructions:
          'Students choose a small, significant personal moment — first day at secondary school, learning to ride a bike, a time they felt proud or embarrassed. They use a three-part planning frame: (1) What happened? (narrative), (2) What did I see/hear/feel? (description), (3) What did it mean to me? Why does it still matter? (reflection). Students write a reflective paragraph of 100-150 words. Teacher models the transition from narrative to reflection using phrases like "Looking back...", "At the time I didn\'t realise...", "Now I understand that...".',
        differentiation: {
          support:
            'Provide the three-part planning frame with sentence starters for each section and a bank of reflective transition phrases.',
          core: 'Students plan and write independently using the three-part structure.',
          stretch:
            'Students include a moment of hindsight where their present self disagrees with or reinterprets what their past self felt, using tense shifts deliberately.',
        },
        resources: [
          'Three-part planning frame',
          'Reflective transition phrases bank',
          'Lined writing paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reflective Writing Checklist',
      duration: '7 minutes',
      instructions:
        'Students use a checklist to self-assess their paragraph: (1) Does it include narrative? (2) Does it include sensory description? (3) Does it include reflection on significance? (4) Does it use at least one temporal connective? (5) Does it shift between past and present tense at least once? Students tick each box and identify one area for improvement. Volunteers share their strongest reflective sentence with the class.',
      differentiation: {
        support: 'Teacher reads the checklist aloud and students check each item with support.',
        core: 'Students self-assess independently and set a specific improvement target.',
        stretch:
          'Students explain why their reflective sentence is the strongest part of their writing and what makes it effective.',
      },
    },
    homework:
      'Write a reflective paragraph (120-150 words) about a moment when you learned something important. Use the reflection sandwich structure: narrate, describe, reflect. Include at least one shift between past and present tense.',
    worksheetQuestions: [
      {
        question:
          'What makes reflective writing different from simply telling a story? Explain with reference to at least two features of reflective writing.',
        lines: 5,
        modelAnswer:
          'Reflective writing goes beyond narrating events to explore their significance and meaning. While a story simply tells what happened, reflective writing adds the writer\'s thoughts, feelings, and insights about why the experience mattered. Two key features are: (1) interpretation — the writer explains what they learned or how they changed, and (2) hindsight — the writer uses their present understanding to reinterpret past events, often shifting between past and present tense to show how their perspective has evolved.',
        marks: 4,
      },
      {
        question:
          'Read the following extract: "I remember standing at the school gates, my new blazer stiff and oversized. At the time, I thought I would never fit in. Now, three years later, I realise that everyone felt exactly the same." Identify the narrative, descriptive, and reflective elements.',
        lines: 6,
        modelAnswer:
          'Narrative: "standing at the school gates" — this tells us what happened and where. Descriptive: "my new blazer stiff and oversized" — this uses sensory detail (touch) and visual description to paint the scene. Reflective: "At the time, I thought I would never fit in. Now, three years later, I realise that everyone felt exactly the same" — this adds meaning by comparing the writer\'s feelings then with their understanding now, using a tense shift from past to present to show growth in perspective.',
        marks: 4,
      },
      {
        question:
          'List four temporal connectives or reflective transition phrases that a writer might use when shifting from narrative to reflection.',
        lines: 3,
        modelAnswer:
          'Examples include: "Looking back now...", "At the time, I didn\'t realise that...", "With hindsight, I can see...", "Now I understand that...", "Years later, I came to appreciate...", "In that moment, I couldn\'t have known...".',
        marks: 2,
      },
      {
        question:
          'A student writes: "I scored the winning goal. Everyone cheered. I was happy. It was a good day." This is narrative but not reflective. Rewrite it to include reflection on the significance of the moment.',
        lines: 8,
        modelAnswer:
          'I scored the winning goal — the ball hit the back of the net and for a single, suspended second, the world went silent. Then the roar crashed over me, my teammates bundling on top of me in a tangle of limbs and laughter. I remember the weight of them, the grass against my face, the taste of mud and triumph. At the time, I thought it was about football. Looking back now, I realise it was the first time I felt I truly belonged — not because I was talented, but because these people cared enough to celebrate with me.',
        marks: 5,
      },
      {
        question:
          'Why do reflective writers often shift between past and present tense? What effect does this have on the reader?',
        lines: 4,
        modelAnswer:
          'Reflective writers shift between past and present tense to show the distance between the event and their current understanding. The past tense narrates what happened, while the present tense reveals what the writer thinks or knows now. This creates a sense of growth and maturity — the reader understands that the writer has changed because of the experience. It also makes the writing feel more immediate and honest, as the writer is openly reflecting in real time.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Reflective writing can feel vulnerable for some students. Reassure them that they can write about small, everyday moments — reflection does not require dramatic events.',
      'The "reflection sandwich" is a useful scaffolding tool but students should be encouraged to move beyond it as they gain confidence — real reflective writing weaves narrative, description, and reflection together fluidly.',
      'This lesson links directly to the next lesson on crafting a personal narrative and builds toward the final assessment.',
      'Consider sharing a brief reflective anecdote of your own to model the tone and vulnerability expected.',
    ],
    targetedSkills: [
      '7W.6',
      'Reflective Writing',
      'Personal Narrative',
      'Tense Control',
      'Temporal Connectives',
    ],
  },

  // ── Lesson 5: Crafting a Personal Narrative ───────────────────────────────
  {
    id: 'y7-t2-05-crafting-personal-narrative',
    title: 'Crafting a Personal Narrative: Structure and Voice',
    text: 'Year 7 Term 2: Finding My Voice',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand how narrative structure (beginning, development, climax, resolution) shapes a personal narrative (7W.2)',
      'Explore how voice and perspective enhance autobiographical writing (7W.6)',
      'Plan a structured personal narrative with deliberate choices about where to begin and end',
      'Draft the opening of a personal narrative using techniques from previous lessons',
    ],
    successCriteria: [
      'I can map a personal experience onto a narrative arc (beginning, development, climax, resolution)',
      'I can explain why starting in the middle of the action (in medias res) can be effective',
      'I can plan a personal narrative with at least four structural stages',
      'I can write an opening paragraph of 80-100 words that establishes voice, setting, and hooks the reader',
    ],
    keywords: [
      'narrative arc',
      'structure',
      'in medias res',
      'climax',
      'resolution',
      'hook',
      'chronological',
      'flashback',
    ],
    starterActivity: {
      title: 'Where Do You Start?',
      duration: '8 minutes',
      instructions:
        'Display three different openings for the same personal story about getting lost on holiday: (1) Chronological: "Last summer, we went to France." (2) In medias res: "I was alone. The street signs were in a language I couldn\'t read and my phone was dead." (3) Ending first: "I laugh about it now, but at the time, being lost in Marseille aged eleven was the most terrifying experience of my life." Students rank the openings from least to most engaging and discuss why. Teacher introduces the concept that where you start a story is a structural choice that affects the reader\'s engagement.',
      differentiation: {
        support: 'Provide definitions of chronological, in medias res, and flashback alongside the three openings.',
        core: 'Students rank and justify independently, using specific features of each opening.',
        stretch:
          'Students write a fourth alternative opening for the same story and explain why their structural choice is effective.',
      },
      resources: ['Three openings display slide'],
    },
    mainActivities: [
      {
        title: 'Mapping the Narrative Arc',
        duration: '15 minutes',
        instructions:
          'Teacher displays a narrative arc diagram (exposition, rising action, climax, falling action, resolution) and maps the "lost in France" story onto it as a model. Students then choose their own personal experience — something with a clear problem, turning point, and outcome — and map it onto their own narrative arc diagram. For each stage, they write 2-3 bullet points noting what happened and how they felt. Teacher circulates and supports students who struggle to identify a climax or turning point.',
        differentiation: {
          support:
            'Provide a pre-printed arc diagram with guiding questions at each stage: "What was the problem?", "What was the worst moment?", "How did it end?".',
          core: 'Students map their experience independently and identify the emotional arc alongside the plot arc.',
          stretch:
            'Students consider non-chronological structures — could they start at the climax and flash back? — and annotate their arc with structural alternatives.',
        },
        resources: [
          'Narrative arc diagram template',
          'Guided arc with questions (support tier)',
        ],
      },
      {
        title: 'Drafting the Opening',
        duration: '22 minutes',
        instructions:
          'Using their narrative arc plan, students draft the opening 80-100 words of their personal narrative. Teacher displays a checklist on the board: (1) Hook the reader — start with action, dialogue, or a surprising statement, (2) Establish voice — is this your natural speaking voice or a more formal narrative voice?, (3) Set the scene — use sensory detail to ground the reader in time and place, (4) Create intrigue — make the reader want to know what happens next. Teacher models writing an opening under the visualiser, thinking aloud about each choice. Students then draft independently.',
        differentiation: {
          support:
            'Provide three opening sentence starters to choose from (one action, one dialogue, one reflective) and a voice checklist from Lesson 1.',
          core: 'Students draft independently using the checklist to guide their choices.',
          stretch:
            'Students write two contrasting openings for the same story — one chronological and one in medias res — and evaluate which is more effective and why.',
        },
        resources: [
          'Opening checklist display',
          'Opening sentence starters (support tier)',
          'Lined writing paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Opening Line Share',
      duration: '7 minutes',
      instructions:
        'Each student reads their opening sentence aloud (just the first sentence). After each, the class gives a thumbs up/thumbs middle/thumbs down for "How much does this make you want to read on?" Teacher selects two or three strong examples and asks the class to identify what makes them effective hooks. Students write one improvement target for their opening on a sticky note.',
      differentiation: {
        support: 'Students can read to a partner first for confidence before sharing with the class.',
        core: 'Students share and receive feedback from the whole class.',
        stretch:
          'Students explain what structural and stylistic choices they made in their opening and why.',
      },
    },
    homework:
      'Complete the first draft of your personal narrative (300-400 words) using your narrative arc plan. Include at least one moment of reflection and at least two show-don\'t-tell descriptions.',
    worksheetQuestions: [
      {
        question:
          'What are the five stages of a narrative arc? Briefly describe what happens at each stage.',
        lines: 6,
        modelAnswer:
          'Exposition: the introduction where the setting, characters, and situation are established. Rising action: events that build tension and develop the conflict or problem. Climax: the turning point or most intense moment of the story. Falling action: events that follow the climax as the tension begins to decrease. Resolution: the conclusion where the conflict is resolved and the story reaches its end, often with a reflection or lesson learned.',
        marks: 5,
      },
      {
        question:
          'What does "in medias res" mean? Why might a writer choose to start a personal narrative this way?',
        lines: 4,
        modelAnswer:
          'In medias res is a Latin phrase meaning "in the middle of things." A writer might choose this technique to immediately hook the reader by placing them in the most exciting or dramatic part of the story from the very first line. It creates intrigue because the reader wants to understand how the character arrived in this situation and what will happen next. It avoids slow, descriptive openings that might lose the reader\'s attention.',
        marks: 3,
      },
      {
        question:
          'Read the following opening: "The phone rang at 3am. Nobody calls at 3am with good news." What techniques does the writer use to hook the reader?',
        lines: 5,
        modelAnswer:
          'The writer uses a short, declarative sentence ("The phone rang at 3am") to create immediate intrigue — the specific time suggests something unusual and potentially alarming. The second sentence shifts to a reflective, present-tense observation that adds foreboding: the writer is addressing the reader directly with a universal truth ("Nobody calls at 3am with good news"). This combination of narrative action and reflective commentary creates a hook by establishing both an event and an emotional tone of dread, making the reader want to know who called and why.',
        marks: 4,
      },
      {
        question:
          'Plan a narrative arc for a personal experience of your choice. At each stage, write 2-3 bullet points describing what happened and how you felt.',
        lines: 10,
        modelAnswer:
          'Example — learning to swim: Exposition: I was seven years old, terrified of water, standing at the edge of the local pool. My mum had signed me up for lessons without telling me. Rising action: The instructor told me to jump in. I refused three times. Other children were already swimming. I felt humiliated. Climax: On the fourth attempt, I jumped — the cold hit me like an electric shock, I went under, and for a moment I thought I would never come up. Falling action: The instructor caught me. I realised I was floating. I kicked my legs and moved forward. Resolution: By the end of the lesson, I could swim a width. Looking back, it taught me that the things I fear most are usually smaller than I imagine.',
        marks: 5,
      },
      {
        question:
          'Write the opening paragraph (80-100 words) of a personal narrative about a time you tried something new. Use at least one hook technique and establish your voice.',
        lines: 8,
        modelAnswer:
          'I was going to die. I was absolutely, categorically, without question going to die — and it was all because my best friend had convinced me that "indoor climbing is basically just a ladder with extra steps." Standing at the base of the wall, harness cutting into my thighs, chalk drying my palms, I stared up at the coloured holds scattered across the surface like sweets thrown at a wall. Fifteen metres. It might as well have been Everest. My friend was already halfway up, calling down encouragements I chose to interpret as taunts.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson brings together skills from Lessons 1-4 (voice, word choice, show don\'t tell, reflection). Make these connections explicit for students.',
      'The homework — a 300-400 word first draft — is substantial. Consider providing class time next lesson for students who need additional support.',
      'In medias res is a technique students often enjoy once they understand it. Encourage them to experiment but remind them they still need to provide context for the reader.',
      'Keep the narrative arc plans as they will feed directly into the assessment in Lesson 10.',
    ],
    targetedSkills: [
      '7W.2',
      '7W.6',
      'Narrative Structure',
      'Personal Voice',
      'Opening Techniques',
      'Planning',
    ],
  },

  // ── T2.2 Exploring Others' Voices ─────────────────────────────────────────

  // ── Lesson 6: Empathy Through Reading — Journey to Jo'burg ────────────────
  {
    id: 'y7-t2-06-empathy-through-reading',
    title: 'Empathy Through Reading: Journey to Jo\'burg',
    text: 'Year 7 Term 2: Exploring Others\' Voices',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Engage with a text from a culture and context different from students\' own (7R.1)',
      'Understand the historical context of apartheid South Africa and its impact on individuals',
      'Make inferences about characters\' feelings and motivations based on their actions and dialogue (7R.4)',
      'Explore how reading can develop empathy and understanding of others\' experiences',
    ],
    successCriteria: [
      'I can explain the basic historical context of the text and why it matters to the story',
      'I can make at least two inferences about a character\'s feelings using evidence from the text',
      'I can explain how reading about someone else\'s experience has changed or deepened my understanding',
      'I can identify how the writer uses specific details to make the reader feel empathy for the characters',
    ],
    keywords: [
      'empathy',
      'inference',
      'context',
      'apartheid',
      'motivation',
      'perspective',
      'cultural understanding',
      'compassion',
    ],
    starterActivity: {
      title: 'Walking in Someone Else\'s Shoes',
      duration: '8 minutes',
      instructions:
        'Display three photographs from different parts of the world showing children in very different circumstances — e.g. a child walking to school across a desert, a child at a well-resourced school, a child helping with farming. Students write three questions they would ask each child if they could meet them. Discuss: What do all three children have in common? What might be different? Introduce the concept that reading stories from other cultures helps us understand experiences beyond our own. Briefly introduce the context of apartheid South Africa.',
      differentiation: {
        support: 'Provide question starters: "What is your daily life like?", "What do you wish for?", "What challenges do you face?".',
        core: 'Students generate their own questions and begin to identify assumptions they might be making.',
        stretch:
          'Students reflect on why the questions they ask reveal their own cultural position and what they take for granted.',
      },
      resources: ['Three photographs display slide', 'Brief apartheid context card'],
    },
    mainActivities: [
      {
        title: 'Reading and Responding to Journey to Jo\'burg',
        duration: '20 minutes',
        instructions:
          'Teacher reads aloud a key extract from Journey to Jo\'burg by Beverley Naidoo (approximately 400 words), pausing at key moments to model reading strategies: predicting, questioning, and inferring. After reading, students complete a response grid with four columns: (1) What happens in this extract? (summary), (2) How does the character feel? (inference), (3) What evidence supports your inference? (quotation), (4) How does this make you feel as a reader? (empathy response). Teacher models the first row of the grid using a specific moment from the extract.',
        differentiation: {
          support:
            'Provide the extract with key emotional moments pre-highlighted and a partially completed grid with the summary column filled in.',
          core: 'Students complete the full response grid independently using evidence from the text.',
          stretch:
            'Students consider how the writer\'s narrative choices (what is included and what is left out) shape the reader\'s emotional response and whether a different narrative perspective would change the empathy felt.',
        },
        resources: [
          'Extract from Journey to Jo\'burg (printed handout)',
          'Four-column response grid',
          'Pre-highlighted extract (support tier)',
        ],
      },
      {
        title: 'The Empathy Bridge: Connecting to Our Own Lives',
        duration: '18 minutes',
        instructions:
          'Students write a reflective response (100-120 words) answering: "What did reading this extract help you understand about someone else\'s experience? Is there anything in the characters\' feelings that connects to your own life, even though the circumstances are very different?" Teacher emphasises that empathy does not require the same experience — it requires the ability to recognise shared human emotions (fear, love, determination) across different contexts. Students share responses in groups of four, then each group feeds back one key insight to the class.',
        differentiation: {
          support:
            'Provide a writing frame: "Before reading this extract, I thought... Now I understand... I can connect to the character\'s feeling of ___ because in my own life...".',
          core: 'Students write independently, making at least one connection between the text and their own emotional experience.',
          stretch:
            'Students evaluate the writer\'s techniques for generating empathy — which specific narrative choices made them feel the most? — and explain why fiction can be a powerful tool for understanding others.',
        },
        resources: [
          'Writing frame (support tier)',
          'Reflective response template',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Word, One Sentence',
      duration: '7 minutes',
      instructions:
        'Each student writes one word on a mini whiteboard that captures how the extract made them feel. Display all whiteboards simultaneously. Teacher groups similar responses and discusses patterns. Then each student writes one sentence completing: "Empathy in reading means..." Teacher collects these for display on the working wall.',
      differentiation: {
        support: 'Provide a word bank of emotion words to choose from.',
        core: 'Students generate their own word and sentence independently.',
        stretch:
          'Students explain why the word they chose is more precise than alternatives and how the writer specifically created that response.',
      },
    },
    homework:
      'Research one fact about apartheid South Africa that you did not know before. Write a short paragraph (80-100 words) explaining what you learned and how it changes your understanding of the extract we read in class.',
    worksheetQuestions: [
      {
        question:
          'What is empathy? How is it different from sympathy? Why is empathy important when reading literature from different cultures?',
        lines: 5,
        modelAnswer:
          'Empathy is the ability to understand and share another person\'s feelings by imagining yourself in their situation. Sympathy is feeling sorry for someone without necessarily understanding their experience. Empathy is deeper because it requires connection, not just pity. When reading literature from different cultures, empathy is important because it helps us understand experiences that are very different from our own, breaks down stereotypes, and develops our capacity for compassion and human understanding.',
        marks: 4,
      },
      {
        question:
          'Using the extract from Journey to Jo\'burg, choose one moment where you can infer how a character is feeling. Write the quotation and explain what you infer and how you know.',
        lines: 6,
        modelAnswer:
          'Answers will vary depending on the extract used. A strong response will: (1) select a precise, relevant quotation, (2) identify the emotion the character is likely feeling, (3) explain how specific words, actions, or details in the quotation suggest that emotion, and (4) consider what the character\'s circumstances contribute to the feeling. For example, if a character is walking in silence, the student might infer fear or determination and explain how the absence of dialogue creates tension.',
        marks: 4,
      },
      {
        question:
          'Why is it important to understand the historical context of a text? How does knowing about apartheid change the way you read Journey to Jo\'burg?',
        lines: 5,
        modelAnswer:
          'Understanding historical context is important because it helps the reader appreciate the full weight of what characters experience. Without knowing about apartheid — the system of racial segregation in South Africa — a reader might not understand why the characters face such restrictions and dangers. Knowing the context transforms a simple journey into a story about injustice, courage, and survival, making the characters\' emotions more powerful and the story\'s themes more urgent.',
        marks: 4,
      },
      {
        question:
          'A student says: "I can\'t connect with this book because the characters\' lives are nothing like mine." How would you respond to this? Explain why you agree or disagree.',
        lines: 6,
        modelAnswer:
          'I would disagree, because empathy does not require identical experiences. While the specific circumstances in Journey to Jo\'burg are very different from most students\' lives, the emotions are universal — fear of losing a loved one, the courage to take a difficult journey, the frustration of unfair rules. Most readers can connect to the feeling of being treated unfairly or wanting to protect someone they love. Literature asks us to look beyond surface differences and recognise the human emotions we all share.',
        marks: 4,
      },
      {
        question:
          'What technique does the writer use to make you feel empathy for the characters? Choose one technique and explain how it works, using an example from the text.',
        lines: 6,
        modelAnswer:
          'Answers will vary. Strong responses might discuss: first-person or close third-person narration (puts the reader inside the character\'s perspective), sensory detail (makes the reader experience the physical reality of the character\'s situation), dialogue (reveals vulnerability or courage), or withholding information (creates anxiety that mirrors the character\'s own uncertainty). The key is that the student identifies a specific technique, provides a textual example, and explains how it generates an emotional response in the reader.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Handle the historical context of apartheid with care and sensitivity. Provide factual, age-appropriate context without sensationalising.',
      'Some students may find the content emotionally challenging. Be prepared for sensitive discussions and have a plan for supporting students who are affected.',
      'Journey to Jo\'burg by Beverley Naidoo is widely available and age-appropriate for Year 7. Alternative texts could include The Other Side by Jacqueline Woodson or Boy Overboard by Morris Gleitzman.',
      'The empathy bridge activity is deliberately personal — reassure students that there are no wrong answers and that connecting to shared emotions is the goal, not comparing experiences.',
    ],
    targetedSkills: [
      '7R.1',
      '7R.4',
      'Inference',
      'Empathy',
      'Cultural Understanding',
      'Contextual Knowledge',
    ],
  },

  // ── Lesson 7: Viewpoint and Perspective ───────────────────────────────────
  {
    id: 'y7-t2-07-viewpoint-and-perspective',
    title: 'Viewpoint and Perspective',
    text: 'Year 7 Term 2: Exploring Others\' Voices',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand how viewpoint (first, second, third person) shapes the reader\'s experience (7R.3)',
      'Analyse how a writer\'s perspective influences the way events are presented (7R.5)',
      'Explore how the same event can be told differently depending on who is telling it',
      'Evaluate the effect of viewpoint choices on reliability and reader sympathy',
    ],
    successCriteria: [
      'I can identify and explain the differences between first, second, and third person viewpoints',
      'I can analyse how the viewpoint of a text affects the reader\'s understanding and sympathy',
      'I can rewrite a short passage from a different character\'s perspective and explain how the meaning changes',
      'I can evaluate whether a narrator is reliable and justify my answer with evidence',
    ],
    keywords: [
      'viewpoint',
      'perspective',
      'first person',
      'third person',
      'omniscient',
      'limited',
      'unreliable narrator',
      'bias',
    ],
    starterActivity: {
      title: 'The Playground Incident',
      duration: '8 minutes',
      instructions:
        'Teacher narrates a simple scenario: "During break, two students collide in the playground. One drops their drink. An argument follows." Then display three accounts of the same incident: (1) from Student A who was bumped, (2) from Student B who bumped them, (3) from a teacher who watched from a distance. Students read all three and discuss: Why are the accounts different? Whose version do you believe? Can all three be telling the truth? Teacher introduces the concept that perspective determines what we see, what we include, and what we leave out.',
      differentiation: {
        support: 'Highlight the key differences between the three accounts with annotations.',
        core: 'Students identify the differences independently and discuss whose account they trust most and why.',
        stretch:
          'Students consider what a fourth perspective (e.g. a CCTV camera) might show and whether an "objective" account is ever truly possible.',
      },
      resources: ['Three accounts display slide'],
    },
    mainActivities: [
      {
        title: 'Analysing Viewpoint in Literature',
        duration: '18 minutes',
        instructions:
          'Provide two short extracts (approximately 100 words each) presenting the same type of event (e.g. a child being told off) — one in first person and one in third person omniscient. Students annotate both extracts, identifying: (1) What can we see/know in this viewpoint? (2) What is hidden from us? (3) How does the viewpoint make us feel about the character? Students complete a comparison table exploring the advantages and limitations of each viewpoint. Class discussion: Why might a writer choose first person for an autobiography but third person for a novel?',
        differentiation: {
          support:
            'Provide the comparison table with some cells pre-filled and guiding questions for each column.',
          core: 'Students complete the comparison independently with evidence from both extracts.',
          stretch:
            'Students evaluate which viewpoint is more effective for creating empathy and which is more effective for creating suspense, justifying with specific textual evidence.',
        },
        resources: [
          'Two viewpoint extracts handout',
          'Viewpoint comparison table',
          'Highlighters',
        ],
      },
      {
        title: 'Shifting Perspective: Rewriting a Scene',
        duration: '20 minutes',
        instructions:
          'Provide a short passage (approximately 100 words) written from one character\'s perspective — e.g. a child in trouble with a parent. Students rewrite the same scene from the other character\'s perspective (the parent). They must keep the same events but change what the narrator notices, thinks, and feels. After writing, students compare their two versions in pairs and discuss: How did the meaning change? Did your sympathy shift? Which details were included or omitted in each version?',
        differentiation: {
          support:
            'Provide a planning frame asking: "What does this character see?", "What are they thinking?", "What do they feel?" before writing. Include sentence starters.',
          core: 'Students rewrite independently and analyse the shift in meaning.',
          stretch:
            'Students write a third version from a neutral observer and discuss whether true neutrality is achievable in narrative — does every telling involve some bias?',
        },
        resources: [
          'Original passage handout',
          'Perspective shift planning frame (support tier)',
          'Lined writing paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reliability Spectrum',
      duration: '7 minutes',
      instructions:
        'Teacher introduces the concept of the "unreliable narrator." Display a spectrum from "Completely Reliable" to "Completely Unreliable." Students position the narrators from today\'s lesson on the spectrum and justify their placement with one piece of evidence. Exit question on mini whiteboards: "Give one reason why a first-person narrator might be unreliable."',
      differentiation: {
        support: 'Provide three options for why a narrator might be unreliable (e.g. they are lying, they don\'t know the full story, they are biased) and students choose the most relevant.',
        core: 'Students generate their own reason and justify it.',
        stretch:
          'Students consider whether third-person narrators can also be unreliable and give an example of how this might work.',
      },
    },
    homework:
      'Choose a well-known fairy tale (e.g. The Three Little Pigs, Goldilocks). Write a 150-word retelling from the villain\'s perspective. Think carefully about how the viewpoint changes the story\'s meaning and the reader\'s sympathy.',
    worksheetQuestions: [
      {
        question:
          'Define first person, second person, and third person viewpoint. Give an example sentence for each.',
        lines: 6,
        modelAnswer:
          'First person: the narrator is a character in the story, using "I" and "me." Example: "I walked into the room and immediately knew something was wrong." Second person: the narrator addresses the reader directly as "you." Example: "You walk into the room. You sense something is wrong." Third person: the narrator is outside the story, using "he," "she," or "they." Example: "She walked into the room and immediately knew something was wrong." Third person can be omniscient (knowing all characters\' thoughts) or limited (knowing only one character\'s thoughts).',
        marks: 4,
      },
      {
        question:
          'Why might two people give very different accounts of the same event? Give at least three reasons.',
        lines: 5,
        modelAnswer:
          'Three reasons include: (1) Position — they were physically in different locations and saw different things. (2) Bias — they have personal interests that make them emphasise certain details and minimise others. (3) Emotion — their feelings at the time affect what they noticed and how they remember it. Additional reasons could include: incomplete knowledge, different values leading to different interpretations, or the passage of time distorting memory.',
        marks: 3,
      },
      {
        question:
          'Read the following first-person extract: "She started it. She always starts it. I was just standing there, minding my own business, when she came over and shoved me for no reason." Do you think this narrator is reliable? Explain your answer.',
        lines: 5,
        modelAnswer:
          'This narrator is likely unreliable. The repeated emphasis on the other person starting it ("She started it. She always starts it") sounds defensive and exaggerated — the word "always" is an absolute that suggests bias rather than truth. "Minding my own business" is a cliched phrase often used to deflect blame, and "for no reason" is unlikely to be literally true — most actions have a reason, even if the narrator does not want to acknowledge it. The overall tone is self-justifying, which suggests the narrator is presenting a one-sided version of events.',
        marks: 4,
      },
      {
        question:
          'A novel is written in third person omniscient. What are the advantages and disadvantages of this viewpoint compared to first person?',
        lines: 6,
        modelAnswer:
          'Advantages of third person omniscient: the reader can access multiple characters\' thoughts and feelings, creating a fuller picture of events; it allows the writer to reveal information that no single character knows; and it can create dramatic irony when the reader knows more than the characters. Disadvantages: it can feel more distant and less intimate than first person; the reader may not bond as strongly with any single character; and it removes the tension of the unreliable narrator, where the reader must question what they are being told.',
        marks: 5,
      },
      {
        question:
          'Rewrite the following sentence from the teacher\'s perspective instead of the student\'s: Student\'s version: "Mr Harris gave us a ridiculous amount of homework just to ruin our weekend."',
        lines: 5,
        modelAnswer:
          'Teacher\'s version: "I set the class a consolidation task over the weekend — nothing excessive, just twenty minutes of practice to reinforce what we\'d covered. Most of them would benefit from the repetition, and I hoped it might prevent the usual Monday-morning blank looks." The shift changes the tone from resentful and exaggerated ("ridiculous," "ruin our weekend") to measured and purposeful ("consolidation task," "reinforce"). The teacher\'s perspective reveals motivation (helping students learn) that the student\'s version deliberately ignores.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The playground incident starter is deliberately simple to make the concept of perspective accessible before applying it to literature.',
      'The unreliable narrator concept is introduced lightly here — it will be developed further in Year 8 and 9. For now, the key idea is that first-person narrators have limitations and biases.',
      'The fairy tale homework is engaging and accessible — consider sharing strong examples next lesson.',
      'Link this lesson explicitly to the empathy work in Lesson 6: perspective determines whose experience we prioritise.',
    ],
    targetedSkills: [
      '7R.3',
      '7R.5',
      'Viewpoint Analysis',
      'Perspective Shifting',
      'Critical Reading',
      'Reliability Assessment',
    ],
  },

  // ── Lesson 8: Writing from Another's Perspective — Diary Entries ──────────
  {
    id: 'y7-t2-08-writing-from-anothers-perspective',
    title: 'Writing from Another\'s Perspective: Diary Entries',
    text: 'Year 7 Term 2: Exploring Others\' Voices',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand the conventions of diary writing — informal register, first person, present/past tense, emotional honesty (7W.1)',
      'Write in the voice of a character from a studied text, maintaining consistency of perspective and tone (7W.6)',
      'Use details from the text to ensure the diary entry is rooted in the character\'s experience and context',
      'Explore how writing as another person develops empathy and understanding',
    ],
    successCriteria: [
      'I can identify and use at least three conventions of diary writing in my own work',
      'I can write in a character\'s voice that is distinct from my own, using vocabulary and tone appropriate to that character',
      'I can include specific details from the studied text to ground my diary entry in the character\'s world',
      'I can reflect on how writing as another person helped me understand their experience',
    ],
    keywords: [
      'diary entry',
      'conventions',
      'in character',
      'first person',
      'informal register',
      'empathy',
      'voice consistency',
      'authentic',
    ],
    starterActivity: {
      title: 'Diary Detective',
      duration: '8 minutes',
      instructions:
        'Display two short diary entries — one real (from a published diary, adapted) and one fictional (from a novel). Students read both and identify the conventions of diary writing: date, first person, informal language, honest emotions, present tense reflections on past events, direct address to the diary ("Dear Diary" or similar). Students then decide which is real and which is fictional — what clues helped them tell the difference? Teacher creates a class list of diary conventions on the board.',
      differentiation: {
        support: 'Provide a checklist of possible conventions for students to tick off as they find them.',
        core: 'Students identify conventions independently and attempt to distinguish real from fictional.',
        stretch:
          'Students analyse how the fictional diary entry mimics real diary conventions to create authenticity and discuss why novelists use the diary form.',
      },
      resources: ['Two diary entries display slide', 'Conventions checklist (support tier)'],
    },
    mainActivities: [
      {
        title: 'Stepping Into Character',
        duration: '15 minutes',
        instructions:
          'Students select a character from a text studied this term (e.g. a character from Journey to Jo\'burg or from the autobiographical extracts explored earlier). They complete a character preparation sheet: (1) Name and age, (2) Three words that describe their personality, (3) What has just happened to them? (4) How are they feeling right now? (5) What words or phrases would this character use that are different from your own? Teacher models the preparation for a character, showing how details from the text inform each answer. Emphasise that every answer must be rooted in textual evidence or reasonable inference.',
        differentiation: {
          support:
            'Provide a partially completed preparation sheet with textual references already identified, requiring students to fill in feelings and language choices.',
          core: 'Students complete the preparation sheet independently using the text for reference.',
          stretch:
            'Students identify potential contradictions in the character\'s feelings — moments where they might feel two conflicting emotions at once — and plan to include this complexity in their diary entry.',
        },
        resources: [
          'Character preparation sheet',
          'Studied text (for reference)',
          'Partially completed prep sheet (support tier)',
        ],
      },
      {
        title: 'Drafting the Diary Entry',
        duration: '22 minutes',
        instructions:
          'Students write a diary entry of 150-200 words in their chosen character\'s voice, set at a specific moment from the text. The entry must include: a date appropriate to the text\'s setting, at least three diary conventions identified in the starter, at least one moment of reflection (not just narrating events), and vocabulary/tone consistent with the character. Teacher models writing the first few sentences under the visualiser, thinking aloud about voice consistency: "Would this character use the word \'fantastic\'? Or would they say something different?"',
        differentiation: {
          support:
            'Provide a diary entry writing frame with prompts at each stage: "Dear Diary, Today..." / "What happened:" / "How I feel:" / "What I\'m thinking about now:" and a character word bank.',
          core: 'Students write independently, using their preparation sheet to maintain voice consistency.',
          stretch:
            'Students include subtext — moments where the character writes one thing but the reader understands something deeper beneath the surface — and annotate these moments in the margin.',
        },
        resources: [
          'Diary entry writing frame (support tier)',
          'Character word bank (support tier)',
          'Lined paper with date line',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Hot Seat Diary Reading',
      duration: '8 minutes',
      instructions:
        'Three volunteers sit in the "hot seat" and read their diary entry aloud in character. After each reading, the class asks two questions to the character (not the student) and the student answers in character. This tests voice consistency and deepens understanding. After all three, class votes on which diary entry felt most authentic and explains why.',
      differentiation: {
        support: 'Allow students to read to a partner rather than the whole class if preferred.',
        core: 'Students participate in the hot seat and answer questions in character.',
        stretch:
          'Students challenge each other with questions that test the depth of their character understanding — e.g. "What would you do if...?".',
      },
    },
    homework:
      'Write a second diary entry for the same character, set at a different moment in the text. Aim for 150-200 words. This time, try to show how the character\'s feelings have changed between the two entries.',
    worksheetQuestions: [
      {
        question:
          'List five conventions of diary writing. For each, explain why it is important for making a diary entry feel authentic.',
        lines: 8,
        modelAnswer:
          '(1) Date — grounds the entry in a specific moment in time. (2) First person ("I") — diaries are personal and private. (3) Informal register — people write naturally in diaries, not formally. (4) Emotional honesty — diaries are where people express feelings they might not share aloud. (5) Reflection — diary writers don\'t just record events; they think about what they mean. Each convention matters because together they create the illusion of intimacy and privacy that makes diary writing distinctive.',
        marks: 5,
      },
      {
        question:
          'Why is it important to use details from the text when writing a diary entry in character? What happens if you ignore the text?',
        lines: 4,
        modelAnswer:
          'Using details from the text ensures the diary entry is grounded in the character\'s actual experiences, world, and historical context. It demonstrates understanding of the text and makes the entry feel authentic. If you ignore the text, the diary entry becomes your own feelings projected onto the character rather than a genuine exploration of their perspective. The details — specific events, settings, language — are what make the character\'s voice distinct from your own.',
        marks: 3,
      },
      {
        question:
          'A student writes a diary entry for a Victorian child that includes the phrase "OMG, school was so boring today." What is wrong with this? How would you improve it?',
        lines: 5,
        modelAnswer:
          'The phrase "OMG" is modern internet slang that a Victorian child would never use — it breaks the voice consistency and destroys the authenticity of the diary entry. "So boring" is also too modern and casual. A more appropriate version might be: "School was dreadfully tedious today — nothing but Latin declensions until my head ached." This uses vocabulary ("dreadfully," "tedious," "declensions") and sentence structure that feel appropriate to the period and character.',
        marks: 4,
      },
      {
        question:
          'Read the following diary entry opening and identify what makes it effective:\n\n"12th March. I cannot sleep. Every time I close my eyes I see their faces — Mma\'s face when she heard the news, Dineo\'s when I told her we had to go. Tomorrow we walk. I do not know how far."\n\nExplain how the writer creates a sense of the character\'s emotional state.',
        lines: 6,
        modelAnswer:
          'The entry is effective because it reveals emotional turmoil through specific, concrete details rather than simply stating "I am upset." "I cannot sleep" shows disturbance without naming the emotion. "Every time I close my eyes I see their faces" suggests the character is haunted by the impact of events on people they love. The dash creates a pause that mimics the character\'s racing thoughts. The short final sentences ("Tomorrow we walk. I do not know how far.") create a sense of uncertainty and fear through their simplicity — the character is so overwhelmed that complex language fails them.',
        marks: 5,
      },
      {
        question:
          'How does writing in another person\'s voice help you develop empathy? Reflect on your experience of writing today\'s diary entry.',
        lines: 5,
        modelAnswer:
          'Writing in another person\'s voice forces you to step outside your own experience and think deeply about how someone else sees the world. You have to consider their background, their feelings, their fears, and the language they would use — all of which requires genuine understanding, not just surface knowledge. In today\'s diary entry, I had to think about what the character would notice, worry about, and hope for, which helped me understand their situation on a more emotional level than simply reading about them.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The hot seat activity is excellent for speaking and listening assessment as well as creative writing.',
      'Students often default to their own voice when writing in character. The preparation sheet is essential scaffolding — do not skip it.',
      'If using Journey to Jo\'burg, the diary entry could be written from Naledi\'s or Tiro\'s perspective at a key moment in their journey.',
      'The homework asks for a second entry showing emotional change — this develops students\' ability to track character development, a key skill for GCSE literature.',
    ],
    targetedSkills: [
      '7W.1',
      '7W.6',
      'Diary Writing',
      'Character Voice',
      'Empathetic Writing',
      'Textual Reference',
    ],
  },

  // ── Lesson 9: Letters with Purpose — Transactional Bridge ─────────────────
  {
    id: 'y7-t2-09-letters-with-purpose',
    title: 'Letters with Purpose: Transactional Bridge',
    text: 'Year 7 Term 2: Exploring Others\' Voices',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand the conventions and structural features of formal and informal letters (7W.1)',
      'Adapt tone and register to suit audience and purpose (7W.9)',
      'Write a letter with a clear purpose — to persuade, inform, or explain',
      'Recognise that letter writing is a bridge between creative and transactional writing',
    ],
    successCriteria: [
      'I can identify the structural conventions of a formal letter (address, date, salutation, sign-off)',
      'I can explain the difference between formal and informal register and choose appropriately for my audience',
      'I can write a letter with a clear purpose, using persuasive, informative, or explanatory techniques',
      'I can adapt my voice and tone to suit the audience of my letter',
    ],
    keywords: [
      'formal letter',
      'informal letter',
      'register',
      'audience',
      'purpose',
      'salutation',
      'persuade',
      'transactional writing',
    ],
    starterActivity: {
      title: 'Formal vs. Informal: Spot the Register',
      duration: '7 minutes',
      instructions:
        'Display pairs of sentences side by side — one formal, one informal — saying the same thing (e.g. "I am writing to express my concern regarding..." vs. "I\'m really worried about..."). Students sort eight sentences into formal and informal categories and identify specific words or phrases that signal the register. Class discussion: When would you use each register? Who is your audience in each case? Teacher introduces the concept that a letter\'s purpose and audience determine its register.',
      differentiation: {
        support: 'Provide a sorting template with formal/informal columns and clue words highlighted.',
        core: 'Students sort independently and justify their decisions with reference to specific language features.',
        stretch:
          'Students rewrite one formal sentence informally and one informal sentence formally, then explain what they changed and why.',
      },
      resources: ['Sorting exercise display slide', 'Sorting template (support tier)'],
    },
    mainActivities: [
      {
        title: 'Anatomy of a Formal Letter',
        duration: '15 minutes',
        instructions:
          'Distribute a model formal letter (e.g. a student writing to a head teacher requesting a change to the school uniform policy). Students annotate the letter, identifying structural features: sender\'s address, date, recipient\'s address, salutation (Dear Mr/Ms...), introduction stating purpose, body paragraphs with supporting points, formal sign-off (Yours sincerely/faithfully), and name. Teacher discusses the differences between "Yours sincerely" (when you know the name) and "Yours faithfully" (when you don\'t). Students then label a blank template with all structural features.',
        differentiation: {
          support:
            'Provide the letter with some features already labelled and arrows pointing to the remaining features for students to identify.',
          core: 'Students annotate all features independently and explain the purpose of each.',
          stretch:
            'Students evaluate the effectiveness of the letter\'s arguments — is the student persuasive? What could strengthen their case? — and rewrite the weakest paragraph.',
        },
        resources: [
          'Model formal letter handout',
          'Blank letter template',
          'Structural features labels',
        ],
      },
      {
        title: 'Writing a Letter with Purpose',
        duration: '22 minutes',
        instructions:
          'Students choose one of three letter-writing tasks: (1) Write a formal letter to the head teacher arguing for or against a proposed change (e.g. no phones in school, a four-day school week), (2) Write a formal letter to a character from a studied text offering advice or asking a question, (3) Write a letter to their future self reflecting on their Year 7 experience so far. Teacher displays the success criteria and a "register reminder" poster showing formal alternatives for common informal phrases. Students plan briefly (5 minutes) then draft (17 minutes). Remind students to use the correct structural conventions throughout.',
        differentiation: {
          support:
            'Provide a letter template with structural features pre-printed (address lines, "Dear...", paragraph spaces, "Yours...") and sentence starters for each paragraph.',
          core: 'Students plan and write independently, choosing the appropriate register for their audience.',
          stretch:
            'Students include at least one rhetorical device (rhetorical question, rule of three, emotive language) in their letter and annotate where they used it.',
        },
        resources: [
          'Letter template (support tier)',
          'Register reminder poster',
          'Planning grid',
          'Task choice cards',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Register Remix',
      duration: '8 minutes',
      instructions:
        'Select one student\'s formal letter (with permission) and display it. Class identifies three formal phrases and challenges the student to "remix" them into informal register. Then the reverse: teacher displays an informal text message and the class formally converts it into letter register. Discuss: Why does register matter? What impression does the wrong register create?',
      differentiation: {
        support: 'Teacher guides the conversion with prompts and options.',
        core: 'Students convert register independently and explain the effect of each change.',
        stretch:
          'Students discuss contexts where deliberately using the "wrong" register might be effective — e.g. a formal complaint written in a deliberately calm, understated way for impact.',
      },
    },
    homework:
      'Write an informal letter (150-200 words) to a friend or family member about something important to you. Then write the opening paragraph of a formal letter on the same topic to a different audience (e.g. a teacher, a MP, a newspaper). Compare the two registers and note three specific differences.',
    worksheetQuestions: [
      {
        question:
          'List the structural conventions of a formal letter in the correct order.',
        lines: 6,
        modelAnswer:
          'In order: (1) Sender\'s address (top right), (2) Date (below sender\'s address), (3) Recipient\'s name and address (left side), (4) Salutation — "Dear Mr/Mrs/Ms [Name]" or "Dear Sir/Madam," (5) Opening paragraph stating the purpose of the letter, (6) Body paragraphs developing the points, (7) Closing paragraph summarising and stating any action required, (8) Sign-off — "Yours sincerely" if you used their name, "Yours faithfully" if you used "Dear Sir/Madam," (9) Your full name.',
        marks: 4,
      },
      {
        question:
          'What is the difference between "Yours sincerely" and "Yours faithfully"? When would you use each one?',
        lines: 3,
        modelAnswer:
          '"Yours sincerely" is used when you know the recipient\'s name and have addressed them by name (e.g. "Dear Mrs Johnson"). "Yours faithfully" is used when you do not know the recipient\'s name and have used "Dear Sir/Madam." A simple rule: sincerely goes with a name, faithfully goes with "Sir/Madam."',
        marks: 2,
      },
      {
        question:
          'Rewrite the following informal sentences in formal register suitable for a letter to a head teacher:\n\na) "The school lunches are well gross and nobody likes them."\nb) "Can we please just have our phones back? It\'s so unfair."',
        lines: 6,
        modelAnswer:
          'a) "I am writing to raise concerns about the quality of the school catering. Many students have expressed dissatisfaction with the current menu options, and I believe improvements would benefit the school community." b) "I would like to respectfully request that the school reconsiders its policy on mobile phone use. The current restrictions feel disproportionate, and I believe a revised policy could balance responsibility with fairness."',
        marks: 4,
      },
      {
        question:
          'Why is it important to consider your audience when writing a letter? What might happen if you use the wrong register?',
        lines: 4,
        modelAnswer:
          'Audience determines every choice a writer makes — from vocabulary and tone to structure and formality. Using the wrong register undermines the writer\'s credibility: an informal letter to a head teacher might seem disrespectful and would be unlikely to be taken seriously, while an overly formal letter to a friend would seem cold and strange. Matching register to audience shows awareness, respect, and communication skill.',
        marks: 3,
      },
      {
        question:
          'Write the opening paragraph of a formal letter to your local council persuading them to build a new park in your area. Use at least one persuasive technique.',
        lines: 6,
        modelAnswer:
          '"Dear Sir/Madam, I am writing to urge the council to consider the development of a public park in the [area name] neighbourhood. Currently, local residents — particularly young people — have no safe, green space in which to exercise, socialise, or simply enjoy the outdoors. Surely a community that invests in the wellbeing of its residents is a community worth living in? I believe that a modest investment in green space would yield significant benefits for public health, community cohesion, and the area\'s reputation." Persuasive techniques used: rhetorical question ("Surely...?"), emotive language ("safe, green space"), and rule of three ("exercise, socialise, or simply enjoy the outdoors").',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson bridges creative and transactional writing, preparing students for the GCSE Language Paper 2 Section B format.',
      'The letter-to-a-character option (Task 2) is a creative way to bridge the literary study in T2.2 with transactional writing skills.',
      'Register is a concept students will revisit throughout KS3 and KS4. This lesson establishes the foundational understanding.',
      'Consider displaying strong student letters as models for future reference. The register remix plenary is an effective way to make the abstract concept of register concrete and memorable.',
    ],
    targetedSkills: [
      '7W.1',
      '7W.9',
      'Letter Writing',
      'Formal Register',
      'Audience Awareness',
      'Transactional Writing',
    ],
  },

  // ── Lesson 10: Assessment — Creative Writing: Identity Piece ──────────────
  {
    id: 'y7-t2-10-assessment-identity-piece',
    title: 'Assessment: Creative Writing — Identity Piece',
    text: 'Year 7 Term 2: Finding My Voice / Exploring Others\' Voices',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Demonstrate the ability to write an extended creative piece that explores identity (7W.1-7W.6)',
      'Apply techniques developed across the term: voice, word choice, show don\'t tell, reflection, structure, and perspective',
      'Write with a clear sense of audience and purpose',
      'Self-assess against the term\'s success criteria and identify areas of strength and development',
    ],
    successCriteria: [
      'I can write an extended piece (300-400 words) with a clear, consistent voice and sense of identity',
      'I can use show-don\'t-tell techniques, sensory detail, and figurative language effectively',
      'I can structure my piece deliberately, using a narrative arc or reflective structure',
      'I can include moments of reflection that add depth and meaning to my writing',
      'I can use vocabulary and tone choices that reveal character or personality',
    ],
    keywords: [
      'assessment',
      'identity',
      'creative writing',
      'extended writing',
      'self-assessment',
      'drafting',
      'revision',
      'crafting',
    ],
    starterActivity: {
      title: 'Assessment Preparation: Toolkit Review',
      duration: '10 minutes',
      instructions:
        'Display a "Writing Toolkit" poster summarising the key techniques from the term: voice and tone (Lesson 1), word choice and identity (Lesson 2), show don\'t tell (Lesson 3), reflective writing (Lesson 4), narrative structure (Lesson 5), empathy and perspective (Lessons 6-7), writing in character (Lesson 8), register and audience (Lesson 9). Students spend five minutes reviewing their books and selecting three techniques they feel most confident with and one they want to challenge themselves to include. They write these on a planning card that they can refer to during writing.',
      differentiation: {
        support: 'Provide a pre-printed toolkit card with each technique and a brief reminder of what it means, with tick boxes.',
        core: 'Students review independently and select techniques with brief notes on how they plan to use them.',
        stretch:
          'Students identify how they can combine techniques — e.g. using show-don\'t-tell within a reflective moment — and note these combinations on their planning card.',
      },
      resources: ['Writing Toolkit poster', 'Planning cards', 'Student exercise books'],
    },
    mainActivities: [
      {
        title: 'Assessment Task: Writing an Identity Piece',
        duration: '35 minutes',
        instructions:
          'Students choose one of three assessment tasks:\n\nTask A — Personal Narrative: Write about a moment that shaped who you are. Use narrative structure, reflection, and show-don\'t-tell techniques.\n\nTask B — In Someone Else\'s Shoes: Write a diary entry or monologue from the perspective of a character you have studied this term. Maintain their voice and include details from the text.\n\nTask C — Letter to My Future Self: Write a letter reflecting on who you are now and who you hope to become. Use appropriate register and include moments of honest reflection.\n\nAll tasks require 300-400 words and should demonstrate the skills developed across the term. Students should spend the first 5 minutes planning (using their narrative arc, planning frame, or preparation sheet from previous lessons) and the remaining 30 minutes writing. Teacher circulates but does not provide content support — this is an assessment of independent application.',
        differentiation: {
          support:
            'Provide a planning template with guiding prompts for each task and a reminder card of key techniques with brief definitions. Students may also refer to their exercise books.',
          core: 'Students plan and write independently using their planning card and toolkit knowledge.',
          stretch:
            'Students are challenged to incorporate at least five different techniques from the term and to experiment with structure — e.g. a non-chronological opening, a circular structure, or a reflective coda.',
        },
        resources: [
          'Assessment task sheet with all three options',
          'Planning templates (one per task)',
          'Technique reminder card (support tier)',
          'Lined paper or exercise books',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Reflection',
      duration: '10 minutes',
      instructions:
        'Students complete a self-assessment grid against the five success criteria, rating themselves green/amber/red for each. They then write three sentences: (1) "The technique I used most effectively was... because..." (2) "The area I found most challenging was..." (3) "Next term, I want to develop my ability to..." Teacher collects the self-assessments alongside the written pieces to inform marking and feedback. Final whole-class reflection: "What have you learned about your own voice this term?"',
      differentiation: {
        support: 'Provide the self-assessment grid with sentence starters and examples of what green/amber/red looks like for each criterion.',
        core: 'Students self-assess independently with honest, specific reflections.',
        stretch:
          'Students identify a specific paragraph in their writing and explain which techniques they used and why they made those choices — demonstrating metacognitive awareness of their craft.',
      },
    },
    homework:
      'Re-read your assessment piece at home with fresh eyes. Write a 100-word reflection identifying one strength and one area for improvement, with a specific plan for how you will improve that area next term.',
    worksheetQuestions: [
      {
        question:
          'Before you begin writing, plan your chosen task. Use the space below to create a brief plan. Include: your chosen task (A, B, or C), the structure you will use, three key techniques you will include, and any key vocabulary or phrases you want to incorporate.',
        lines: 10,
        modelAnswer:
          'A strong plan will clearly identify the task, outline a structure (e.g. narrative arc stages, diary entry sections, letter structure), list specific techniques with brief notes on how they will be used (e.g. "Show don\'t tell — describe the feeling of nervousness through physical sensations instead of saying \'I was nervous\'"), and include some pre-planned vocabulary or phrases that suit the chosen voice and register.',
        marks: 5,
      },
      {
        question:
          'After completing your writing, identify one sentence or paragraph that you are most proud of. Copy it below and explain why you think it is effective. What techniques did you use?',
        lines: 6,
        modelAnswer:
          'A strong response will select a specific piece of their writing, accurately identify the techniques used (e.g. simile, sensory detail, tense shift, reflective comment), and explain the intended effect on the reader. For example: "I\'m proud of the sentence \'My hands shook like leaves in a storm as I reached for the microphone\' because the simile shows the reader how nervous I was without me having to say it directly, and the natural imagery makes it feel relatable."',
        marks: 4,
      },
      {
        question:
          'Identify one area of your writing that you think could be improved. Copy the sentence or section below and rewrite it. Explain what you changed and why the new version is better.',
        lines: 8,
        modelAnswer:
          'A strong response will honestly identify a weaker section, provide a specific rewrite, and articulate why the revision is an improvement. For example: "Original: \'I was sad when I left.\' This is telling, not showing. Revised: \'I kept my eyes fixed on the car window, watching the house shrink until it was just a dot on the horizon, swallowed by the rain.\' The revised version uses visual imagery and the metaphor of the house shrinking to show the sadness of leaving without naming the emotion."',
        marks: 5,
      },
      {
        question:
          'Reflect on the skills you have developed across this term. Which skill from the list below has improved the most? Explain with an example from your work.\n\n- Voice and tone\n- Show don\'t tell\n- Reflective writing\n- Writing from another\'s perspective\n- Narrative structure\n- Register and audience awareness',
        lines: 6,
        modelAnswer:
          'A strong response will select one skill, explain how their understanding or ability has grown over the term, and provide a specific example from their own work that demonstrates the improvement. For example: "My show-don\'t-tell writing has improved the most. At the start of term, I would have written \'The garden was beautiful\' but now I write descriptions using sensory detail and figurative language. In my assessment piece, I wrote \'Petals curled open like tiny fists unclenching in the morning sun\' — this shows beauty through imagery rather than stating it."',
        marks: 4,
      },
      {
        question:
          'What does "identity" mean in the context of this term\'s writing? How can writing help us understand our own identity and the identities of others?',
        lines: 5,
        modelAnswer:
          'In this term\'s context, identity refers to who we are — our experiences, personality, background, values, and the way we see the world. Writing helps us understand our own identity because it forces us to reflect on our experiences and articulate what matters to us. It helps us understand others\' identities because writing in another person\'s voice or reading their stories requires us to step outside our own perspective and engage with different experiences, emotions, and worldviews. This term has shown that writing is both a mirror (reflecting ourselves) and a window (showing us others).',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is a summative assessment that draws on all skills from the term. Ensure students have access to their exercise books for reference but not to pre-written drafts.',
      'The three task options accommodate different preferences and strengths — Task A suits confident personal writers, Task B suits those who engaged strongly with the literary texts, and Task C bridges creative and transactional skills.',
      'Mark against the five success criteria using a school-appropriate framework. Consider providing formative feedback that identifies one strength and one specific target for improvement.',
      'The self-assessment is a valuable metacognitive tool. Compare students\' self-assessments with your own assessments to identify students who significantly over- or under-estimate their work.',
      'Consider using the self-assessment reflections to inform planning for Term 3.',
    ],
    targetedSkills: [
      '7W.1',
      '7W.2',
      '7W.3',
      '7W.4',
      '7W.5',
      '7W.6',
      'Creative Writing',
      'Self-Assessment',
      'Identity Writing',
      'Extended Writing',
    ],
  },
];
