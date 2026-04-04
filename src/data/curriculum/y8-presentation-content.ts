export interface SlideContent {
  id: string;
  slideNumber: number;
  title: string;
  bulletPoints: string[];
  teacherNotes: string;
  activity?: string;
}

export interface LessonPresentation {
  id: string;
  lessonTitle: string;
  yearGroup: string;
  termUnit: string;
  totalSlides: number;
  slides: SlideContent[];
}

export const y8Presentations: LessonPresentation[] = [
  // ============================================================
  // TERM 1 -- THE HUNGER GAMES
  // ============================================================
  {
    id: "y8-t1-p1",
    lessonTitle: "The World of Panem and Dystopia",
    yearGroup: "Year 8",
    termUnit: "Term 1 -- The Hunger Games",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t1-p1-s1",
        slideNumber: 1,
        title: "What Is a Dystopia?",
        bulletPoints: [
          "A dystopia is an imagined society that appears ordered but is deeply unjust",
          "Dystopian fiction exposes real-world problems through exaggeration",
          "Common features: surveillance, propaganda, oppression, loss of freedom",
          "Contrasted with utopia -- a perfect, idealised society",
          "Examples: 1984, Brave New World, The Hunger Games",
        ],
        teacherNotes:
          "Open with a quick class brainstorm: what makes a society 'perfect'? Use student answers to introduce the tension between utopia and dystopia. This sets up critical thinking before the text is introduced.",
        activity:
          "Think-pair-share: Name one rule in an imaginary society that sounds fair but could be used unfairly. Share with the class.",
      },
      {
        id: "y8-t1-p1-s2",
        slideNumber: 2,
        title: "Introducing Panem",
        bulletPoints: [
          "Panem is a nation built on the ruins of North America after catastrophe",
          "It is divided into 12 Districts plus the Capitol",
          "Each District serves a specific economic function (mining, agriculture, luxury goods)",
          "The Capitol controls all resources and holds absolute political power",
          "The word 'Panem' comes from the Latin phrase 'panem et circenses' -- bread and circuses",
        ],
        teacherNotes:
          "Display a simple map of Panem's districts if available. Explain the Latin phrase and discuss how the Capitol uses spectacle (the Games) to distract and control the population. Connect to Roman history briefly.",
        activity:
          "Quick write: If you lived in Panem, which district do you think you would be in based on your interests? What would that mean for your life?",
      },
      {
        id: "y8-t1-p1-s3",
        slideNumber: 3,
        title: "Katniss Everdeen -- Protagonist",
        bulletPoints: [
          "Katniss is a 16-year-old from District 12, the coal-mining district",
          "She is the sole provider for her mother and younger sister Prim",
          "She hunts illegally outside the district fence to feed her family",
          "Her key traits: resourceful, loyal, emotionally guarded, courageous",
          "Her name comes from a real aquatic plant -- a subtle symbol of survival",
        ],
        teacherNotes:
          "Focus on how Collins establishes Katniss as a survivor before the plot begins. Students often connect with her protective instinct toward Prim. Highlight how her illegal hunting immediately shows the injustice of Panem.",
      },
      {
        id: "y8-t1-p1-s4",
        slideNumber: 4,
        title: "The Reaping -- Setting Up Stakes",
        bulletPoints: [
          "Each year, one male and one female tribute are chosen from each district",
          "Tributes are selected by lottery from a pool of names called the 'tesserae'",
          "Poorer children can enter their name extra times in exchange for food -- a cruel incentive",
          "The Reaping is a public, televised ceremony designed to maximise fear and compliance",
          "Prim's name is drawn; Katniss volunteers as tribute -- the novel's inciting incident",
        ],
        teacherNotes:
          "Emphasise the structural injustice of the tesserae system: poverty makes you more likely to die in the Games. This is a key moment for discussion of inequality. Play a short clip of the Reaping scene from the film if appropriate.",
        activity:
          "Discussion: Why does the Capitol make the Reaping a public event? What does this tell us about how it controls people?",
      },
      {
        id: "y8-t1-p1-s5",
        slideNumber: 5,
        title: "The Capitol -- Wealth and Spectacle",
        bulletPoints: [
          "Capitol citizens are wealthy, pampered, and obsessed with fashion and entertainment",
          "They watch the Hunger Games as a form of entertainment, not as a political act",
          "Their excess is deliberately contrasted with district poverty",
          "Effie Trinket represents Capitol superficiality -- cheerful about children dying",
          "The Capitol's architecture and imagery draws on ancient Roman imperial aesthetics",
        ],
        teacherNotes:
          "Ask students to consider: is Effie Trinket evil? This opens up discussion about complicity and systems of oppression -- people can participate in injustice without seeing themselves as cruel.",
      },
      {
        id: "y8-t1-p1-s6",
        slideNumber: 6,
        title: "Dystopian Conventions -- A Checklist",
        bulletPoints: [
          "Authoritarian government with total control over citizens",
          "Propaganda and information control to maintain loyalty",
          "Economic inequality -- a wealthy ruling class exploits the poor",
          "A protagonist who begins to question or resist the system",
          "A world that looks ordered on the surface but is built on violence",
        ],
        teacherNotes:
          "Use this slide as a reference checklist throughout the unit. Students can tick off features as they encounter them in the novel. This builds analytical habit of linking evidence to genre conventions.",
        activity:
          "Annotation task: In the opening chapter extract, identify and label as many dystopian conventions as you can find.",
      },
      {
        id: "y8-t1-p1-s7",
        slideNumber: 7,
        title: "Collins and Context -- Why Was This Written?",
        bulletPoints: [
          "Suzanne Collins was inspired partly by channel-surfing between reality TV and war coverage",
          "The novel explores media desensitisation -- becoming numb to suffering when it is entertainment",
          "Published in 2008, the series engages with post-9/11 anxieties about surveillance and state power",
          "Collins draws on the myth of Theseus and the Minotaur for her plot structure",
          "The series has been read as a commentary on class, race, and capitalism in modern America",
        ],
        teacherNotes:
          "Contextual understanding enriches literary analysis. Students do not need to memorise every detail -- encourage them to select one contextual point they find most interesting and explain how it connects to the text.",
      },
      {
        id: "y8-t1-p1-s8",
        slideNumber: 8,
        title: "Key Vocabulary for This Unit",
        bulletPoints: [
          "Dystopia: an imagined oppressive or nightmarish society",
          "Protagonist: the central character whose journey we follow",
          "Allegory: a story with a deeper symbolic or political meaning",
          "Propaganda: information used to promote a political agenda",
          "Complicity: participation in or acceptance of wrongdoing",
        ],
        teacherNotes:
          "Display this vocabulary on the classroom wall for the duration of the unit. Encourage students to use these terms in their written responses from the start.",
        activity:
          "Vocabulary challenge: Write one sentence using at least two of these words that describes something about Panem.",
      },
    ],
  },

  {
    id: "y8-t1-p2",
    lessonTitle: "Power, Inequality and Resistance",
    yearGroup: "Year 8",
    termUnit: "Term 1 -- The Hunger Games",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t1-p2-s1",
        slideNumber: 1,
        title: "How Power Works in Panem",
        bulletPoints: [
          "Power in Panem is maintained through fear, spectacle, and economic control",
          "The annual Hunger Games serve as a reminder of the Capitol's absolute authority",
          "Districts are kept poor and isolated to prevent organised resistance",
          "The Capitol controls food, travel, communication, and the media",
          "President Snow understands that a small amount of hope is more dangerous than none at all",
        ],
        teacherNotes:
          "Open with Snow's quote about hope from the novel or film. Ask students: why would hope be dangerous to a ruler? This is a counter-intuitive idea that prompts deep thinking about power and control.",
        activity:
          "Rank the following methods of control from most to least effective: fear, poverty, propaganda, violence. Justify your top choice.",
      },
      {
        id: "y8-t1-p2-s2",
        slideNumber: 2,
        title: "Economic Inequality -- District vs Capitol",
        bulletPoints: [
          "District 12 citizens face starvation while Capitol citizens waste food at parties",
          "The tesserae system forces the poorest children into greater danger",
          "Wealthier districts (1, 2) train 'Career Tributes' -- those groomed to win",
          "This inequality is structural, not accidental -- it is designed to keep districts weak",
          "Collins uses food imagery repeatedly to represent power and deprivation",
        ],
        teacherNotes:
          "Career Tributes are a key example of how inequality is internalised -- some districts have been conditioned to see participation as a privilege. Discuss how this mirrors how inequality can be accepted or even embraced.",
        activity:
          "Text analysis: Find two quotations from the novel that highlight the contrast between Capitol wealth and District poverty. Annotate the language choices.",
      },
      {
        id: "y8-t1-p2-s3",
        slideNumber: 3,
        title: "Symbols of Resistance",
        bulletPoints: [
          "The Mockingjay pin becomes Katniss's symbol -- accidentally adopted as a rebel emblem",
          "The three-finger salute from District 12 is an act of collective defiance",
          "Katniss covering Rue's body with flowers is a public rejection of the Capitol's narrative",
          "Peeta's bread -- a small act of kindness -- challenges the dehumanising logic of the Games",
          "Resistance often begins with small, symbolic gestures rather than open revolt",
        ],
        teacherNotes:
          "Symbols are central to both the novel's plot and its meaning. Ask: why do symbols matter in political movements? Students can think of real-world examples (raised fist, kneeling, certain flags).",
      },
      {
        id: "y8-t1-p2-s4",
        slideNumber: 4,
        title: "Katniss as an Accidental Revolutionary",
        bulletPoints: [
          "Katniss does not begin the novel wanting to change the system",
          "Her actions are motivated by survival, loyalty, and love -- not ideology",
          "The Capitol's decision to change the rules mid-game reveals its fear of her",
          "Her berry gambit -- threatening mutual suicide -- is an act of resistance it cannot ignore",
          "Collins raises the question: can one person's private choices become political acts?",
        ],
        teacherNotes:
          "This slide works well for a discussion about whether individual action can create systemic change. Students often find Katniss's 'unintentional' heroism more relatable than a deliberate hero.",
        activity:
          "Debate prompt: Is Katniss a hero, a symbol, or just a survivor? Use evidence from the text to support your view.",
      },
      {
        id: "y8-t1-p2-s5",
        slideNumber: 5,
        title: "Peeta and the Politics of Narrative",
        bulletPoints: [
          "Peeta understands that controlling your own story is a form of power",
          "He chooses to present himself as Katniss's love interest to gain public sympathy",
          "He tells Caesar: 'I don't want them to change me' -- asserting his identity against the Capitol",
          "His skills are with words and persuasion, not weapons -- a different kind of strength",
          "Collins suggests that narrative and image are tools of both oppression and liberation",
        ],
        teacherNotes:
          "Peeta's media awareness is very relevant to students today. Ask: who controls the narrative on social media? How do public images shape public opinion? Connect to the concept of propaganda.",
      },
      {
        id: "y8-t1-p2-s6",
        slideNumber: 6,
        title: "Gender and Power",
        bulletPoints: [
          "Katniss subverts typical gender roles -- she is the hunter, provider, and fighter",
          "Her mother's emotional collapse after her father's death shows the vulnerability of dependence",
          "The Capitol uses Katniss's femininity as a marketing tool (the 'girl on fire' image)",
          "Female tributes are sometimes sexualised by the Capitol's audience -- Collins critiques this",
          "Haymitch, Cinna, and Peeta each support Katniss in different ways, challenging masculine stereotypes",
        ],
        teacherNotes:
          "Handle with sensitivity. Focus on Collins's deliberate subversion of gender norms. Students may note that Katniss is still framed romantically -- the novel is not free of the conventions it critiques.",
      },
      {
        id: "y8-t1-p2-s7",
        slideNumber: 7,
        title: "Real-World Connections",
        bulletPoints: [
          "Reality TV formats that place contestants in survival-based competition",
          "Historical examples of 'bread and circuses' politics -- Rome, modern media spectacle",
          "Economic systems where the poorest bear the greatest risks",
          "Protest symbols that grow beyond their original context (e.g., the raised fist)",
          "The concept of 'performative loyalty' -- publicly supporting a regime to survive",
        ],
        teacherNotes:
          "Students engage deeply when fiction connects to the real world. Encourage them to identify their own examples rather than providing all of them. Avoid prescribing political conclusions -- the aim is critical thinking.",
        activity:
          "In pairs: identify one real-world parallel to a theme in The Hunger Games. Prepare a 60-second explanation for the class.",
      },
      {
        id: "y8-t1-p2-s8",
        slideNumber: 8,
        title: "Analytical Focus -- Authorial Intent",
        bulletPoints: [
          "Analytical writing considers why an author made specific choices",
          "Ask: what effect does this word/image/structure create for the reader?",
          "Link language choices to theme: how does Collins use X to explore power/inequality?",
          "Avoid summarising plot -- explain the significance of events",
          "The word 'Collins suggests...' is more analytical than 'Collins says...'",
        ],
        teacherNotes:
          "This is a writing skills slide to prepare students for analytical tasks. Model the difference between a descriptive and analytical sentence on the board using a shared text extract.",
        activity:
          "Upgrade this sentence: 'Collins writes that the Capitol is rich and the districts are poor.' Make it more analytical in under 30 words.",
      },
    ],
  },

  {
    id: "y8-t1-p3",
    lessonTitle: "Analytical Writing About Prose",
    yearGroup: "Year 8",
    termUnit: "Term 1 -- The Hunger Games",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t1-p3-s1",
        slideNumber: 1,
        title: "What Makes Good Analytical Writing?",
        bulletPoints: [
          "Strong analytical writing goes beyond describing what happens",
          "It explains how language creates meaning and effect",
          "It connects language choices to the writer's themes and intentions",
          "It uses precise quotations embedded naturally into sentences",
          "It considers multiple possible interpretations of a text",
        ],
        teacherNotes:
          "Begin with a pair of student-accessible examples: one descriptive paragraph, one analytical. Ask students to identify what makes the second more effective. This inductive approach builds understanding before presenting the framework.",
        activity:
          "Read the two sample paragraphs provided. Write two things the analytical paragraph does that the descriptive one does not.",
      },
      {
        id: "y8-t1-p3-s2",
        slideNumber: 2,
        title: "The PEEL Paragraph Structure",
        bulletPoints: [
          "P -- Point: make a clear analytical claim about the text",
          "E -- Evidence: provide a precise, embedded quotation",
          "E -- Explain: analyse the language choices (word, technique, effect)",
          "L -- Link: connect back to the question or a wider theme",
          "Each paragraph should do one clear job -- avoid cramming in multiple ideas",
        ],
        teacherNotes:
          "PEEL is a familiar structure for many students. The key challenge is moving from 'this shows' to genuine analysis of how the language creates meaning. Model each stage on the board using a shared Hunger Games extract.",
      },
      {
        id: "y8-t1-p3-s3",
        slideNumber: 3,
        title: "Embedding Quotations",
        bulletPoints: [
          "A floating quotation disrupts the flow: 'The world is beautiful.' This shows Katniss loves nature.",
          "An embedded quotation integrates smoothly: Katniss notices 'the world is beautiful', which suggests...",
          "Use a colon or a comma to introduce a quotation naturally",
          "Only quote the words you are analysing -- trim unnecessary context",
          "Always analyse the specific word choices, not just the quotation as a whole",
        ],
        teacherNotes:
          "Practise embedding as a whole class by giving students a quotation and asking them to write an embedding sentence. This is a mechanical skill that improves with repetition. Collect mini whiteboards for quick feedback.",
        activity:
          "Take these three quotations from the extract and write them as embedded quotations in full analytical sentences.",
      },
      {
        id: "y8-t1-p3-s4",
        slideNumber: 4,
        title: "Analysing Language -- Going Deeper",
        bulletPoints: [
          "Identify the technique first: metaphor, verb choice, adjective, structural feature, etc.",
          "Then explain the connotations of the specific word chosen",
          "Then consider the effect on the reader: what feeling or idea does it create?",
          "Then connect to a theme or the author's wider purpose",
          "Avoid 'the writer uses a metaphor to make it more interesting' -- be specific",
        ],
        teacherNotes:
          "The most common analytical error at this level is stopping after naming the technique. Push students with: 'so what?' after every explanation to build the habit of connecting technique to meaning.",
        activity:
          "Analyse the word 'reaping' as a title for the lottery chapter. Consider its literal meaning, its metaphorical connotations, and its effect on the reader.",
      },
      {
        id: "y8-t1-p3-s5",
        slideNumber: 5,
        title: "Sample Analytical Paragraph -- Modelled",
        bulletPoints: [
          "Question: How does Collins present power in this extract?",
          "Point: Collins presents power as crushing and inescapable for the poor",
          "Evidence: The verb 'tesserae' functions as a noun trap -- the word itself signals entrapment",
          "Explain: The economic system forces children to mortgage their safety for food",
          "Link: This reinforces Collins's wider theme that inequality is built into the system",
        ],
        teacherNotes:
          "Read through the full model paragraph (provided on the student handout) slowly. Annotate it with the class using different colours for each PEEL element. Ask: what makes this more than a summary?",
      },
      {
        id: "y8-t1-p3-s6",
        slideNumber: 6,
        title: "Common Mistakes to Avoid",
        bulletPoints: [
          "Retelling the plot rather than analysing language choices",
          "Using very long quotations when a short phrase is more effective",
          "Writing 'this shows' without explaining how the language creates the effect",
          "Ignoring the question and writing generally about the whole text",
          "Making unsupported claims: 'Collins wants us to feel sad' -- how do we know?",
        ],
        teacherNotes:
          "These mistakes are best addressed through peer review or teacher-annotated exemplars. Consider displaying a before-and-after paragraph that corrects each mistake. This is more memorable than a list of rules.",
        activity:
          "Error-spot exercise: The paragraph on your sheet contains three of these mistakes. Identify them and rewrite the paragraph to fix them.",
      },
      {
        id: "y8-t1-p3-s7",
        slideNumber: 7,
        title: "Writing About Structure",
        bulletPoints: [
          "Structure refers to how a text is organised: chapter order, scene order, perspective",
          "Collins uses first-person present tense -- this creates immediacy and limits our knowledge",
          "The Reaping is placed in Chapter 1 to establish stakes immediately -- in medias res",
          "Parallel scenes (e.g., feast scenes in district vs Capitol) highlight contrast structurally",
          "Ask: why does Collins tell us this now? What is the effect of this ordering?",
        ],
        teacherNotes:
          "Students often neglect structure in favour of language analysis. Remind them that structural choices are just as deliberate as word choices. First-person present tense is especially worth exploring in this novel.",
      },
      {
        id: "y8-t1-p3-s8",
        slideNumber: 8,
        title: "Building Towards Your Assessment",
        bulletPoints: [
          "Assessment task: Write two analytical paragraphs on how Collins presents a key theme",
          "Choose one of: power, inequality, survival, or identity",
          "Select two quotations from the extracts provided -- one for each paragraph",
          "Use the PEEL structure and embed your quotations",
          "Aim to name at least one technique and explain its specific effect in each paragraph",
        ],
        teacherNotes:
          "Give students time in class to plan their paragraph before writing. A planning scaffold (point / quotation / technique / effect / link) helps students who struggle to get started. Mark for analytical depth, not length.",
        activity:
          "Planning task: Choose your theme and write a one-sentence point for each of your two paragraphs. Share with a partner for feedback before writing.",
      },
    ],
  },

  // ============================================================
  // TERM 2 -- CONFLICT POETRY AND MACBETH
  // ============================================================
  {
    id: "y8-t2-p1",
    lessonTitle: "Conflict Poetry -- Imagery and Tone",
    yearGroup: "Year 8",
    termUnit: "Term 2 -- Conflict Poetry and Macbeth",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t2-p1-s1",
        slideNumber: 1,
        title: "What Is Conflict Poetry?",
        bulletPoints: [
          "Conflict poetry explores the experience, causes, and consequences of war and violence",
          "It is written from many perspectives: soldiers, civilians, survivors, critics",
          "Tone ranges from patriotic and heroic to bitter, horrified, and sorrowful",
          "The tradition spans centuries -- from Homer to Wilfred Owen to Carol Ann Duffy",
          "Conflict poetry often challenges propaganda by presenting the human cost of war",
        ],
        teacherNotes:
          "Open with two short quotations in contrasting tones -- one patriotic, one anti-war -- without revealing their source. Ask students what attitude each expresses. This immediately establishes tone as central to the unit.",
        activity:
          "Which of these two quotations do you find more powerful and why? Write three sentences explaining your response.",
      },
      {
        id: "y8-t2-p1-s2",
        slideNumber: 2,
        title: "Understanding Tone",
        bulletPoints: [
          "Tone is the attitude of the speaker or writer toward the subject",
          "It is conveyed through word choice, imagery, structure, and rhythm",
          "A poem can shift in tone -- this change is often the key moment to analyse",
          "Useful tone words: elegiac, bitter, defiant, ironic, reverent, despairing, accusatory",
          "Tone is not the same as mood -- mood is the emotional atmosphere felt by the reader",
        ],
        teacherNotes:
          "Students often confuse tone and mood. A quick distinction: tone is the speaker's attitude (angry, mournful); mood is what the reader feels (tense, sad). Use a simple analogy: tone is the teacher's voice; mood is how the class feels.",
        activity:
          "Match each of these five quotations from conflict poems to the tone word that best describes it. Justify one of your choices in a sentence.",
      },
      {
        id: "y8-t2-p1-s3",
        slideNumber: 3,
        title: "Imagery -- Painting with Words",
        bulletPoints: [
          "Imagery creates vivid mental pictures through figurative and descriptive language",
          "Simile: comparing two things using 'like' or 'as'",
          "Metaphor: describing something as if it were something else",
          "Personification: giving human qualities to non-human things",
          "Sensory imagery: appealing to sight, sound, smell, touch, and taste",
        ],
        teacherNotes:
          "Spend time on sensory imagery, which is often overlooked in favour of simile and metaphor. War poetry in particular relies heavily on olfactory and auditory imagery. Give students an extract to mark up with sensory labels.",
        activity:
          "Read the extract and highlight: red for visual, blue for auditory, green for olfactory imagery. Which sense does the poet rely on most? Why might that be?",
      },
      {
        id: "y8-t2-p1-s4",
        slideNumber: 4,
        title: "Wilfred Owen -- Dulce et Decorum Est",
        bulletPoints: [
          "Written 1917-1918 during World War One; Owen died in action one week before the Armistice",
          "The title is Latin for 'It is sweet and right to die for your country' -- used ironically",
          "Owen attacks the 'old lie' -- the propaganda that war is glorious and honourable",
          "The poem moves from physical exhaustion to a gas attack to a direct address to the reader",
          "Key imagery: 'guttering, choking, drowning' -- visceral, present-tense suffering",
        ],
        teacherNotes:
          "Read the poem aloud before analysis. Owen's sound devices (sibilance in 'guttering, choking, drowning') are best experienced aurally. Invite students to describe the physical effect of the poem before moving to literary analysis.",
      },
      {
        id: "y8-t2-p1-s5",
        slideNumber: 5,
        title: "Analysing Owen's Language Choices",
        bulletPoints: [
          "'Like old beggars under sacks' -- simile degrades the heroic image of soldiers",
          "'drunk with fatigue' -- metaphor for extreme exhaustion, not celebration",
          "'the white eyes writhing' -- alliteration and visual horror slow the reader down",
          "The second stanza shifts to present tense -- Owen relives the trauma",
          "The final lines directly address 'my friend' -- implicating the civilian reader",
        ],
        teacherNotes:
          "The shift to direct address in the final lines is one of the poem's most powerful structural moves. Ask students: who is Owen's 'friend'? Why does he use second person at the end?",
        activity:
          "Write one analytical sentence about the simile 'like old beggars under sacks'. Include: technique name, specific word analysis, effect on the reader.",
      },
      {
        id: "y8-t2-p1-s6",
        slideNumber: 6,
        title: "Structure and Form in Conflict Poetry",
        bulletPoints: [
          "Many war poems use or subvert the sonnet form (14 lines, traditionally about love)",
          "Owen's poem uses a modified sonnet structure -- the 'love' here is of country, warped into death",
          "Enjambment (running lines together) can create a breathless, panicked pace",
          "Caesura (mid-line pauses) can slow the poem down for emphasis or grief",
          "A shift in tone, tense, or address marks a 'volta' -- the poem's turning point",
        ],
        teacherNotes:
          "Structural analysis is often underdeveloped at Year 8. Introduce the concept of the volta as a key feature to identify and analyse in any poem. Ask: what changes at the turning point and why?",
      },
      {
        id: "y8-t2-p1-s7",
        slideNumber: 7,
        title: "Responding to Poetry -- Key Questions to Ask",
        bulletPoints: [
          "What is the speaker's attitude toward the subject of the poem?",
          "Which imagery is most striking and why might the poet have chosen it?",
          "How does the structure or form reinforce or contradict the content?",
          "Does the tone shift? If so, when and why?",
          "What is the poem's overall message and how is it communicated?",
        ],
        teacherNotes:
          "These five questions form a reliable framework for approaching any unseen poem. Practise applying them to short extracts before students tackle a full unseen poem independently.",
        activity:
          "Using these five questions as headings, write brief notes on the poem you have just read. You will use these notes to write your analytical paragraph.",
      },
      {
        id: "y8-t2-p1-s8",
        slideNumber: 8,
        title: "Key Vocabulary for Conflict Poetry",
        bulletPoints: [
          "Elegy: a poem mourning someone's death",
          "Irony: when what is said is the opposite of what is meant",
          "Volta: the turning point in a poem where tone or argument shifts",
          "Propaganda: material designed to promote a particular political view",
          "Juxtaposition: placing two contrasting ideas or images side by side for effect",
        ],
        teacherNotes:
          "Add these terms to the existing unit word wall. Students should be using these in their written responses. A quick retrieval quiz at the start of the next lesson will consolidate learning.",
        activity:
          "Write one sentence using 'juxtaposition' or 'irony' that makes a point about Dulce et Decorum Est.",
      },
    ],
  },

  {
    id: "y8-t2-p2",
    lessonTitle: "Comparing War Poems",
    yearGroup: "Year 8",
    termUnit: "Term 2 -- Conflict Poetry and Macbeth",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t2-p2-s1",
        slideNumber: 1,
        title: "Why Compare Poems?",
        bulletPoints: [
          "Comparison highlights what is unique about each poem's perspective and technique",
          "It develops critical thinking: no single poem tells the whole truth about a subject",
          "Comparing allows us to explore how context shapes meaning",
          "Different poets writing about similar events can produce radically different tones",
          "Comparison is a core skill in GCSE English Literature -- this unit begins building it",
        ],
        teacherNotes:
          "Frame comparison as genuinely interesting, not just a mechanical task. Ask: if two people witnessed the same event, why might they describe it differently? This human question makes the literary skill feel purposeful.",
        activity:
          "Think of an event you and a friend both experienced. Write two sentences: how you remember it and how they might describe it differently.",
      },
      {
        id: "y8-t2-p2-s2",
        slideNumber: 2,
        title: "Poems in Focus -- An Overview",
        bulletPoints: [
          "Dulce et Decorum Est (Owen, 1918): the horror of chemical warfare, anti-propaganda",
          "Charge of the Light Brigade (Tennyson, 1854): a tribute to doomed soldiers' courage",
          "Remains (Armitage, 2008): a soldier haunted by killing, modern PTSD",
          "War Photographer (Duffy, 1985): the ethical burden of documenting conflict",
          "Each poem reflects its historical moment and its poet's attitude toward violence",
        ],
        teacherNotes:
          "Provide students with a simple comparison grid listing the four poems, their dates, and their subjects. This reference document helps students structure comparison without losing track of the poems' identities.",
      },
      {
        id: "y8-t2-p2-s3",
        slideNumber: 3,
        title: "The Charge of the Light Brigade -- Context",
        bulletPoints: [
          "Tennyson wrote the poem in response to a newspaper report, within days of the battle",
          "The charge was a catastrophic military blunder that killed 278 out of 637 men",
          "Tennyson was Poet Laureate -- his role was partly to celebrate national events",
          "The poem praises the soldiers' obedience and courage despite the command being an error",
          "Repeated phrase: 'Someone had blunder'd' -- the only acknowledgement of failure",
        ],
        teacherNotes:
          "Compare Tennyson's role as Poet Laureate with Owen's position as a soldier -- their social positions shape their perspectives. Ask: whose account of war is more trustworthy? This is a productive but nuanced question.",
        activity:
          "Tennyson includes 'someone had blunder'd' but does not dwell on it. Why might he have made this choice? What does it tell us about his purpose?",
      },
      {
        id: "y8-t2-p2-s4",
        slideNumber: 4,
        title: "How to Structure a Comparison",
        bulletPoints: [
          "Comparative connectives: similarly, in contrast, whereas, unlike, both poets...",
          "Always anchor your comparison in specific evidence from both texts",
          "Compare a specific feature: tone, imagery, structure, perspective",
          "Avoid: 'Poem A does X and Poem B does Y' with no connection between them",
          "Aim for: 'Both poets use [feature] but to different effect because...'",
        ],
        teacherNotes:
          "Model the difference between a weak and strong comparative sentence on the board. The most common error is 'parallel description' -- describing each poem separately rather than actually comparing them.",
        activity:
          "Improve this comparison sentence: 'Owen uses similes. Tennyson uses repetition.' Write a comparative sentence that connects both techniques to a shared theme.",
      },
      {
        id: "y8-t2-p2-s5",
        slideNumber: 5,
        title: "Comparing Attitudes to Soldiers",
        bulletPoints: [
          "Owen presents soldiers as victims -- dehumanised, exhausted, suffering",
          "Tennyson presents soldiers as heroes -- noble, courageous, glorious even in death",
          "Armitage (Remains) presents a soldier as perpetrator and victim simultaneously",
          "Duffy (War Photographer) presents soldiers obliquely -- through the photographer's lens",
          "Each attitude is shaped by the poet's distance from, or experience of, combat",
        ],
        teacherNotes:
          "This slide drives the key conceptual comparison. Ask students: which attitude do they find most convincing and why? There is no single right answer but responses should be anchored in textual evidence.",
        activity:
          "Write a comparative paragraph: How do Owen and Tennyson present the experience of soldiers differently? Use one quotation from each poem.",
      },
      {
        id: "y8-t2-p2-s6",
        slideNumber: 6,
        title: "Comparing Structure and Form",
        bulletPoints: [
          "Tennyson uses ballad-like repetition and rhythm -- driving, martial, relentless",
          "Owen uses a modified sonnet structure -- love transformed into death",
          "Armitage uses colloquial, spoken language -- no formal structure, mimicking memory",
          "Form reinforces meaning: Tennyson's rhythm mirrors the cavalry charge itself",
          "Disrupted or irregular structure can suggest psychological fragmentation",
        ],
        teacherNotes:
          "Have students tap out the rhythm of a stanza from each poem. The physical experience of Tennyson's galloping dactylic hexameter versus Owen's heavier, interrupted metre is memorable and analytically useful.",
      },
      {
        id: "y8-t2-p2-s7",
        slideNumber: 7,
        title: "Context and Its Effect on Meaning",
        bulletPoints: [
          "A poem written by a combatant carries different authority than one by an observer",
          "Historical context: the nature of the conflict (WW1 trench warfare vs Crimean cavalry)",
          "Social context: class, rank, and gender shape what a poet is permitted to say",
          "Publication context: a poem in a newspaper vs a letter to a friend vs a war memorial",
          "Ask: how might a contemporary audience have read this poem differently from us?",
        ],
        teacherNotes:
          "Context should inform analysis, not replace it. A common error is to write biographical summary instead of textual analysis. Model: 'Owen's experience as a soldier lends weight to his imagery of...' -- context as support, not centrepiece.",
      },
      {
        id: "y8-t2-p2-s8",
        slideNumber: 8,
        title: "Assessment Preparation -- Comparison Task",
        bulletPoints: [
          "Task: Compare how two poets present the human cost of war",
          "Choose two poems from the unit; plan three points of comparison",
          "Each point: one quotation from each poem, one analytical technique per quotation",
          "Introduction: name both poems, poets, and state your overall comparative argument",
          "Conclusion: which poem do you find more powerful? Why?",
        ],
        teacherNotes:
          "Give students a structured planning frame: three rows, each with 'theme / Poem A quotation + technique / Poem B quotation + technique / comparison comment'. Planning before writing significantly improves the quality of responses.",
        activity:
          "Complete the planning frame for your comparison essay. Peer review: does your partner's plan include at least one technique per poem?",
      },
    ],
  },

  {
    id: "y8-t2-p3",
    lessonTitle: "Introduction to Shakespeare -- Macbeth",
    yearGroup: "Year 8",
    termUnit: "Term 2 -- Conflict Poetry and Macbeth",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t2-p3-s1",
        slideNumber: 1,
        title: "Who Was Shakespeare?",
        bulletPoints: [
          "William Shakespeare (1564-1616): playwright, poet, and actor from Stratford-upon-Avon",
          "He wrote approximately 37 plays, 154 sonnets, and several longer poems",
          "His plays were performed at the Globe Theatre, London, from 1599",
          "He wrote for a wide audience: from groundlings (standing) to nobility in the galleries",
          "His works were not considered 'classic' in his lifetime -- they were popular entertainment",
        ],
        teacherNotes:
          "Dispel the myth that Shakespeare is 'difficult' by emphasising he wrote for a mass, mixed audience -- not for classrooms. The language has shifted, but the themes (ambition, jealousy, betrayal) are universal. Begin with what students already know.",
        activity:
          "What do you already know or think you know about Shakespeare? Write three words or phrases. We will revisit these at the end of the unit.",
      },
      {
        id: "y8-t2-p3-s2",
        slideNumber: 2,
        title: "The Jacobean Context",
        bulletPoints: [
          "Macbeth was written c.1606 for King James I of England (James VI of Scotland)",
          "James was fascinated by witchcraft -- he wrote a book called Daemonologie in 1597",
          "The Gunpowder Plot of 1605 (a Catholic assassination attempt on James) fuelled fears of treachery",
          "Macbeth's themes of regicide, treason, and divine kingship were directly relevant to current events",
          "James believed in the 'divine right of kings' -- that monarchs ruled by God's authority",
        ],
        teacherNotes:
          "Students often underestimate how dangerous political the play is. Murdering a king in 1606 was not just a crime -- it was a cosmic sin. This context is essential for understanding Macbeth's psychological torment.",
      },
      {
        id: "y8-t2-p3-s3",
        slideNumber: 3,
        title: "The Plot -- A First Overview",
        bulletPoints: [
          "Macbeth is a Scottish general who receives a prophecy that he will become king",
          "Encouraged by Lady Macbeth, he murders King Duncan and seizes the throne",
          "His reign is marked by increasing paranoia and further killings to protect his position",
          "Lady Macbeth descends into guilt and madness; Macbeth becomes a tyrant",
          "He is ultimately defeated and killed -- the natural order is restored",
        ],
        teacherNotes:
          "Keep the plot overview brief -- students will encounter the text in detail. Focus on the dramatic arc: from honoured general to murderous tyrant to defeated villain. Ask: at what point does Macbeth make the choice that destroys him?",
        activity:
          "Draw a simple graph of Macbeth's 'moral descent' -- mark the key decisions that take him further from virtue. We will return to this at the end of the unit.",
      },
      {
        id: "y8-t2-p3-s4",
        slideNumber: 4,
        title: "The Three Witches -- Fate and Free Will",
        bulletPoints: [
          "The play opens with the witches -- immediately establishing a world of moral disorder",
          "Their prophecies are equivocal: true in a literal sense but misleading in meaning",
          "The question: do the witches cause Macbeth's downfall, or merely reveal what is already in him?",
          "In Jacobean belief, witches were agents of the devil -- not neutral or playful figures",
          "Their paradoxes ('Fair is foul, and foul is fair') signal that nothing can be trusted",
        ],
        teacherNotes:
          "The debate about free will vs fate is central to the play. Push students to consider both positions: if Macbeth had ignored the witches, nothing would have happened -- or would it? His ambition is present before they speak.",
        activity:
          "Debate: Are the witches to blame for Macbeth's crimes? Write a one-sentence argument for and against.",
      },
      {
        id: "y8-t2-p3-s5",
        slideNumber: 5,
        title: "Macbeth -- Character Introduction",
        bulletPoints: [
          "First described as brave and loyal: 'brave Macbeth -- well he deserves that name'",
          "Praised for his violent prowess on the battlefield -- violence is valorised by the state",
          "His first soliloquy reveals his ambition and his moral awareness of what he is considering",
          "He is not a simple villain: he feels fear, guilt, and regret throughout the play",
          "Shakespeare creates a tragic hero: admirable qualities corrupted by a fatal flaw (ambition)",
        ],
        teacherNotes:
          "The concept of the tragic hero (hamartia/fatal flaw) is a key literary term to introduce here. Macbeth's ambition is not evil in itself -- it is the willingness to act on it through murder that destroys him.",
      },
      {
        id: "y8-t2-p3-s6",
        slideNumber: 6,
        title: "Lady Macbeth -- Power and Gender",
        bulletPoints: [
          "Lady Macbeth is presented as more ruthlessly ambitious than her husband",
          "Her 'unsex me here' soliloquy asks supernatural forces to remove her feminine compassion",
          "She manipulates Macbeth by questioning his masculinity: 'Was the hope drunk wherein you dressed yourself?'",
          "She organises the murder of Duncan while Macbeth hesitates",
          "Her later madness and sleepwalking suggest that the guilt she suppressed re-emerges",
        ],
        teacherNotes:
          "Lady Macbeth is one of Shakespeare's most complex female characters. Discuss how her role subverts Jacobean gender expectations -- and how Shakespeare ultimately 'punishes' her for transgressing them. Is this Shakespeare's view or the period's?",
        activity:
          "Who is more responsible for Duncan's murder: Macbeth or Lady Macbeth? Write a short argument with reference to specific lines from the play.",
      },
      {
        id: "y8-t2-p3-s7",
        slideNumber: 7,
        title: "Key Themes -- Ambition, Power, and Guilt",
        bulletPoints: [
          "Ambition: presented as a destructive force when unchecked by morality",
          "Power: corrupts those who obtain it through illegitimate means",
          "Guilt: externalised as hallucinations -- the dagger, Banquo's ghost",
          "Appearance vs reality: 'look like the innocent flower, but be the serpent under it'",
          "Natural order: the murder of a king disrupts nature -- storms, unnatural animal behaviour",
        ],
        teacherNotes:
          "These themes link back to conflict poetry (the human cost of violent action) and to The Hunger Games (power, corruption, resistance). Encourage students to make cross-text connections where appropriate.",
      },
      {
        id: "y8-t2-p3-s8",
        slideNumber: 8,
        title: "Shakespeare's Language -- A First Look",
        bulletPoints: [
          "Shakespeare writes in blank verse (unrhymed iambic pentameter) for noble characters",
          "Iambic pentameter: 10 syllables per line, alternating unstressed and stressed beats (da-DUM)",
          "Prose is used for lower-status characters or moments of psychological disorder",
          "When the metre breaks down, it signals emotional disturbance or dramatic tension",
          "Soliloquy: a speech addressed to the audience, revealing a character's private thoughts",
        ],
        teacherNotes:
          "Tap out iambic pentameter with the class using 'Shall I com-PARE thee TO a SUM-mer's DAY'. This makes an abstract concept concrete. Introduce blank verse as a poetic skill rather than a barrier.",
        activity:
          "Read Act 1, Scene 7, lines 1-7 aloud. Mark the stressed syllables. Where does the metre feel smooth? Where does it break? What might the break suggest about Macbeth's state of mind?",
      },
    ],
  },

  // ============================================================
  // TERM 3 -- RHETORIC AND MEDIA
  // ============================================================
  {
    id: "y8-t3-p1",
    lessonTitle: "What is Rhetoric? Ethos, Pathos, Logos",
    yearGroup: "Year 8",
    termUnit: "Term 3 -- Rhetoric and Media",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t3-p1-s1",
        slideNumber: 1,
        title: "What Is Rhetoric?",
        bulletPoints: [
          "Rhetoric is the art of using language persuasively and effectively",
          "It has been studied formally since ancient Greece -- Aristotle wrote about it c.350 BC",
          "All persuasive communication uses rhetoric: speeches, adverts, debates, social media posts",
          "Rhetoric is not trickery -- it is the skillful use of language to move an audience",
          "Understanding rhetoric helps us both produce and evaluate persuasive writing",
        ],
        teacherNotes:
          "Open with a short clip or transcript of a famous speech -- Dr King, Churchill, or Greta Thunberg. Ask: what made that persuasive? Collect student answers and use them to introduce the rhetorical triangle.",
        activity:
          "Watch the 60-second clip. List three things the speaker does that make the speech compelling. We will name these techniques by the end of the lesson.",
      },
      {
        id: "y8-t3-p1-s2",
        slideNumber: 2,
        title: "Aristotle's Rhetorical Triangle",
        bulletPoints: [
          "Aristotle identified three modes of persuasion: ethos, pathos, and logos",
          "Ethos: persuasion through the speaker's credibility and character",
          "Pathos: persuasion through emotional appeal",
          "Logos: persuasion through logic, evidence, and reason",
          "Effective rhetoric usually combines all three -- over-reliance on one weakens the argument",
        ],
        teacherNotes:
          "Draw the triangle on the board: ethos, pathos, logos at each point, 'audience' at the centre. Ask students which mode they find most persuasive personally. Results are often split and lead to interesting discussion about different audiences.",
      },
      {
        id: "y8-t3-p1-s3",
        slideNumber: 3,
        title: "Ethos -- Building Credibility",
        bulletPoints: [
          "Ethos is established by demonstrating knowledge, experience, and trustworthiness",
          "A doctor citing medical evidence uses ethos; a celebrity endorsing medicine does not",
          "Speakers can build ethos through: shared values, personal experience, qualifications, tone",
          "Ethos can be undermined: if a speaker contradicts themselves or is caught lying",
          "In writing, formal register, precise vocabulary, and balanced argument signal ethos",
        ],
        teacherNotes:
          "Ask: why might you be more persuaded by a climate scientist than a politician on climate change? This helps students distinguish genuine ethos from claimed authority. Connect to media literacy: who is the source?",
        activity:
          "Rank these speakers from most to least credible on the topic of healthy eating: a doctor, a celebrity, a nutritionist, a parent, a personal trainer. Justify your top and bottom choice.",
      },
      {
        id: "y8-t3-p1-s4",
        slideNumber: 4,
        title: "Pathos -- The Emotional Appeal",
        bulletPoints: [
          "Pathos connects with the audience's emotions: fear, hope, anger, compassion, pride",
          "Storytelling is one of the most powerful uses of pathos -- specific human stories move us",
          "Emotive language, vivid imagery, and personal anecdote all create pathos",
          "Pathos can be manipulative: exploiting emotion to bypass rational thinking",
          "Recognising pathos helps us evaluate whether our emotional response is justified",
        ],
        teacherNotes:
          "Show a charity advertisement and a political campaign advertisement. Ask: what emotion is each trying to create? Is the emotional appeal appropriate to the situation? This critical evaluation is the media literacy goal.",
        activity:
          "Rewrite this factual statement to include pathos: 'Climate change is causing ice caps to melt.' Aim to move the reader emotionally without adding false information.",
      },
      {
        id: "y8-t3-p1-s5",
        slideNumber: 5,
        title: "Logos -- Logic and Evidence",
        bulletPoints: [
          "Logos uses facts, statistics, logical reasoning, and expert testimony",
          "A well-structured argument with clear cause-and-effect reasoning is an example of logos",
          "Statistics must be used carefully: they can mislead as well as inform",
          "Logical fallacies undermine logos: e.g., false dichotomy, ad hominem, slippery slope",
          "Logos alone is often unconvincing -- humans are not purely rational decision-makers",
        ],
        teacherNotes:
          "Introduce one or two logical fallacies in accessible terms. 'False dichotomy' (you are either with us or against us) and 'ad hominem' (attacking the person, not the argument) are common in political discourse and easy for students to spot.",
        activity:
          "Spot the fallacy: 'If we allow students to retake exams, soon everyone will demand infinite chances and the whole system will collapse.' What type of faulty reasoning is this?",
      },
      {
        id: "y8-t3-p1-s6",
        slideNumber: 6,
        title: "Rhetorical Devices -- A Toolkit",
        bulletPoints: [
          "Rule of three: listing three items for emphasis and rhythm ('liberty, equality, fraternity')",
          "Rhetorical question: a question not intended to be answered, used for dramatic effect",
          "Anaphora: repeating a word or phrase at the start of successive sentences ('I have a dream...')",
          "Antithesis: placing contrasting ideas side by side ('Ask not what your country can do for you...')",
          "Direct address: speaking directly to the audience using 'you' to create personal connection",
        ],
        teacherNotes:
          "Each device should be illustrated with a short, memorable example. Anaphora and rule of three are the easiest for students to produce themselves. Antithesis requires more guidance -- model the construction on the board.",
        activity:
          "Write a two-sentence persuasive statement on school uniform using at least two rhetorical devices from this slide. Label the devices you have used.",
      },
      {
        id: "y8-t3-p1-s7",
        slideNumber: 7,
        title: "Rhetoric in Everyday Life",
        bulletPoints: [
          "Advertising uses all three modes: celebrity endorsement (ethos), emotional narratives (pathos), statistics (logos)",
          "Political speeches rely on anaphora, direct address, and appeals to national identity (ethos/pathos)",
          "Social media posts use emotional language and images to generate shares and reactions (pathos)",
          "News headlines use rhetorical framing to guide reader interpretation before they read the article",
          "Understanding rhetoric makes us more resistant to manipulation and more effective communicators",
        ],
        teacherNotes:
          "The aim of this slide is to connect the ancient theoretical framework to students' daily media consumption. Ask them to recall the last advertisement that genuinely made them want to buy something. What technique did it use?",
        activity:
          "Analyse a social media advertisement or headline you have seen recently. Which mode of persuasion does it primarily use? Is it effective?",
      },
      {
        id: "y8-t3-p1-s8",
        slideNumber: 8,
        title: "Key Vocabulary -- Rhetoric Unit",
        bulletPoints: [
          "Rhetoric: the art of persuasive and effective communication",
          "Ethos: appeal to credibility and trustworthiness",
          "Pathos: appeal to emotion",
          "Logos: appeal to logic and evidence",
          "Anaphora: repetition of a word or phrase at the start of successive clauses",
        ],
        teacherNotes:
          "Students should be able to define all five terms confidently by next lesson. A vocabulary self-test at the start of the following lesson helps consolidate retention.",
        activity:
          "Write your own sentence for each of the five vocabulary terms that shows you understand the meaning (not just a definition -- use the word in context).",
      },
    ],
  },

  {
    id: "y8-t3-p2",
    lessonTitle: "Analysing Speeches",
    yearGroup: "Year 8",
    termUnit: "Term 3 -- Rhetoric and Media",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t3-p2-s1",
        slideNumber: 1,
        title: "What Makes a Great Speech?",
        bulletPoints: [
          "A great speech combines clarity of argument, emotional resonance, and memorable language",
          "It is carefully structured: strong opening, developed argument, powerful conclusion",
          "It is tailored to its specific audience, context, and purpose",
          "It uses rhetorical devices to create rhythm, emphasis, and emotional impact",
          "Great speeches often respond to a specific moment of crisis, change, or injustice",
        ],
        teacherNotes:
          "Begin by asking students to name a speech they have heard of or found memorable. Anchor the lesson in student experience. The aim is analytical -- we want students to move from 'it was good' to 'here is why it was effective'.",
        activity:
          "Write down one speech you have heard or know about. What do you remember most about it? Is it a line, a feeling, an image, or an idea?",
      },
      {
        id: "y8-t3-p2-s2",
        slideNumber: 2,
        title: "Martin Luther King -- 'I Have a Dream' (1963)",
        bulletPoints: [
          "Delivered at the March on Washington, 28 August 1963, to a crowd of 250,000",
          "King was addressing both the marchers and a national television audience simultaneously",
          "He uses anaphora ('I have a dream...') to build emotional intensity through repetition",
          "Biblical allusion links the civil rights movement to religious authority and moral legitimacy",
          "The speech ends with a vision of unity -- transforming political demand into communal hope",
        ],
        teacherNotes:
          "If possible, play the final two minutes of the speech. Students who have never heard it are often visibly moved. Ask: what techniques does King use in the final crescendo? Link to anaphora, rule of three, and call-and-response.",
        activity:
          "Identify three rhetorical devices in the extract provided. For each one, explain the effect it creates on the audience.",
      },
      {
        id: "y8-t3-p2-s3",
        slideNumber: 3,
        title: "Greta Thunberg -- 'How Dare You' (2019)",
        bulletPoints: [
          "Delivered at the UN Climate Action Summit, September 2019",
          "Thunberg was 16 at the time -- her age is part of her ethos: she represents the future",
          "Her tone is accusatory and confrontational -- a deliberate break from diplomatic norms",
          "She uses repetition of 'how dare you' as a form of anaphora -- building righteous anger",
          "Factual references to climate science provide logos alongside her emotional pathos",
        ],
        teacherNotes:
          "Thunberg's speech is deliberately different from King's in tone -- where King ends in hope, Thunberg ends in accusation. Ask students which they find more effective and why. There is no correct answer -- the discussion builds analytical thinking.",
        activity:
          "Compare the opening lines of King's speech and Thunberg's speech. How does the tone differ? Write two sentences using the word 'whereas' to structure your comparison.",
      },
      {
        id: "y8-t3-p2-s4",
        slideNumber: 4,
        title: "Analysing a Speech -- A Framework",
        bulletPoints: [
          "Purpose: what does the speaker want the audience to think, feel, or do?",
          "Audience: who is being addressed -- and how does this shape the language choices?",
          "Tone: what is the speaker's attitude and how does it shift during the speech?",
          "Devices: which rhetorical techniques are used and to what effect?",
          "Structure: how does the speech build -- does it rise to a climax? End with a call to action?",
        ],
        teacherNotes:
          "This framework maps onto existing analytical skills from the poetry and prose units. Encourage students to notice that the same analytical vocabulary applies across genres. This builds transferable skills for GCSE.",
      },
      {
        id: "y8-t3-p2-s5",
        slideNumber: 5,
        title: "The Role of Audience",
        bulletPoints: [
          "Speakers adapt their language, tone, and content for specific audiences",
          "A speech to a hostile audience may require more logos; a sympathetic audience more pathos",
          "Dual audiences: a speech can address those present and a wider public simultaneously",
          "Register: formal language signals authority; informal language can create solidarity",
          "Cultural references build audience connection -- but only for audiences who share that culture",
        ],
        teacherNotes:
          "Ask students to consider: how would they change their language when speaking to their peers vs their headteacher vs a job interviewer? This practical reflection makes the concept of audience register concrete.",
        activity:
          "Take the opening sentence of your speech extract. Rewrite it for two different audiences: (a) primary school children and (b) government ministers. How does the language change?",
      },
      {
        id: "y8-t3-p2-s6",
        slideNumber: 6,
        title: "Structure of a Persuasive Speech",
        bulletPoints: [
          "Opening: hook the audience -- a striking claim, statistic, rhetorical question, or story",
          "Context: establish why this issue matters and why now",
          "Argument: develop two or three main points with evidence and rhetorical support",
          "Counterargument: acknowledge opposing views and rebut them -- builds credibility",
          "Conclusion: call to action or vision -- leave the audience with something to carry away",
        ],
        teacherNotes:
          "Students often write persuasive speeches that lack a counterargument. Acknowledge the opposition and then rebut it -- this is a sophisticated move that makes the overall argument stronger, not weaker.",
        activity:
          "Map the speech extract onto this structure. Label each section: opening, context, argument, counterargument, conclusion. Does it follow the pattern? Are there any gaps?",
      },
      {
        id: "y8-t3-p2-s7",
        slideNumber: 7,
        title: "Writing Your Own Speech -- Planning",
        bulletPoints: [
          "Choose a topic you care about -- conviction makes persuasion more effective",
          "Identify your audience and purpose before drafting",
          "Plan your ethos, pathos, and logos appeals before writing",
          "Select two or three rhetorical devices you will deliberately use",
          "Draft your opening sentence first -- it must hook the reader immediately",
        ],
        teacherNotes:
          "Students who struggle with topics can choose from a teacher-prepared list: school uniform, social media age limits, compulsory sport, screen time, or a topic of current relevance. Emphasise that the quality of argument matters more than the topic choice.",
        activity:
          "Planning frame: Write your topic, audience, purpose, one ethos appeal, one pathos appeal, one logos appeal, and your opening sentence. Peer review before drafting.",
      },
      {
        id: "y8-t3-p2-s8",
        slideNumber: 8,
        title: "Peer Assessment -- Evaluating Speeches",
        bulletPoints: [
          "Does the speech have a clear and consistent argument throughout?",
          "Are rhetorical devices used effectively (not just listed without purpose)?",
          "Is there a balance of ethos, pathos, and logos?",
          "Does the language suit the audience and purpose?",
          "Does the conclusion leave a strong, memorable impression?",
        ],
        teacherNotes:
          "Use these criteria as a formal peer-assessment checklist. Ask students to write one specific improvement suggestion alongside each criterion. Vague praise ('it was good') should be challenged -- ask them to be precise.",
        activity:
          "Peer review: use the five criteria to evaluate your partner's speech draft. Write at least one specific strength and one specific suggestion for each criterion.",
      },
    ],
  },

  {
    id: "y8-t3-p3",
    lessonTitle: "Media Literacy and Bias",
    yearGroup: "Year 8",
    termUnit: "Term 3 -- Rhetoric and Media",
    totalSlides: 8,
    slides: [
      {
        id: "y8-t3-p3-s1",
        slideNumber: 1,
        title: "What Is Media Literacy?",
        bulletPoints: [
          "Media literacy is the ability to access, analyse, evaluate, and create media content",
          "It includes understanding how media shapes our view of the world",
          "All media is constructed -- it represents a version of reality, not reality itself",
          "The choices made in presenting information (framing) influence how we interpret it",
          "Media literacy is one of the most important skills for navigating modern life",
        ],
        teacherNotes:
          "Ask students: where do you get your news? Most will cite social media. Ask: do you think that gives you an accurate picture of the world? Use their answers to establish why this unit matters to them personally.",
        activity:
          "List three sources of news or information you have used in the past week. For each one, write one question about how reliable you think it is.",
      },
      {
        id: "y8-t3-p3-s2",
        slideNumber: 2,
        title: "How Is Media Constructed?",
        bulletPoints: [
          "Every media text involves choices: what to include, exclude, foreground, or background",
          "Headlines are designed to attract attention -- they prioritise impact over nuance",
          "Images are selected and sometimes cropped or staged to create specific impressions",
          "The order in which information is presented shapes how audiences interpret it",
          "Even 'neutral' reporting involves decisions about whose voice is included",
        ],
        teacherNotes:
          "Show the same news event covered by two different outlets with different headlines. Ask: what assumptions does each headline make? What does each choose to emphasise? This practical activity is more effective than abstract explanation.",
        activity:
          "Compare these two headlines about the same event. Write one sentence explaining how each uses language to frame the story differently.",
      },
      {
        id: "y8-t3-p3-s3",
        slideNumber: 3,
        title: "Understanding Bias",
        bulletPoints: [
          "Bias is a systematic tendency to favour one perspective over another",
          "All media carries some degree of bias -- the goal is to identify and account for it",
          "Political bias: favouring a left-wing or right-wing perspective",
          "Selection bias: covering some stories more than others based on the outlet's interests",
          "Confirmation bias: audiences seek out media that confirms their existing beliefs",
        ],
        teacherNotes:
          "Confirmation bias is particularly important for digital media literacy. Algorithms serve users content they are likely to engage with -- which tends to reinforce existing views. Ask: have you ever changed your mind because of something you read online?",
        activity:
          "Think about a topic you feel strongly about. What types of sources or media would you naturally go to for information about it? Why? Would those sources challenge your view?",
      },
      {
        id: "y8-t3-p3-s4",
        slideNumber: 4,
        title: "Techniques of Bias in Print Media",
        bulletPoints: [
          "Loaded language: word choice with strong positive or negative connotations",
          "Cherry-picking statistics: selecting data that supports a predetermined conclusion",
          "Framing: presenting an issue in a particular context to guide interpretation",
          "False balance: giving equal weight to a fringe view and a mainstream scientific consensus",
          "Omission: simply not reporting information that contradicts the preferred narrative",
        ],
        teacherNotes:
          "Loaded language is the most accessible technique for students to identify and analyse. Build directly on the rhetoric unit: loaded language is essentially pathos applied to news reporting. The same analytical skills apply.",
        activity:
          "Rewrite this biased sentence using neutral language: 'Reckless protesters brought the city centre to a standstill in a misguided demonstration.' What changed and why?",
      },
      {
        id: "y8-t3-p3-s5",
        slideNumber: 5,
        title: "Social Media and the Spread of Misinformation",
        bulletPoints: [
          "Misinformation: false or inaccurate information spread regardless of intent",
          "Disinformation: false information spread deliberately to deceive",
          "Social media algorithms prioritise engagement -- outrage and fear drive more clicks than calm facts",
          "The 'filter bubble': when your media diet only confirms what you already believe",
          "Sharing is fast; fact-checking is slow -- misinformation often travels further than corrections",
        ],
        teacherNotes:
          "This slide connects directly to students' lived experience. Avoid being preachy -- frame it as: this happens to everyone, including adults. The goal is habits of inquiry, not fear of media. Ask: what do you do before you share something?",
        activity:
          "Scenario: a friend sends you a shocking statistic about your school. Before sharing it, what three checks would you make to verify it?",
      },
      {
        id: "y8-t3-p3-s6",
        slideNumber: 6,
        title: "How to Evaluate a Source",
        bulletPoints: [
          "Who created it? What are their credentials, interests, and potential biases?",
          "When was it published? Is it recent enough to be relevant?",
          "What is the evidence? Are claims supported by verifiable data or expert testimony?",
          "Is it corroborated? Do other independent sources report the same information?",
          "What is the purpose? Inform, persuade, entertain, sell? Does that affect its reliability?",
        ],
        teacherNotes:
          "The SIFT method (Stop, Investigate the source, Find better coverage, Trace claims to original context) is a widely-used framework. A simplified version of these questions is all students need at this stage.",
        activity:
          "Apply these five questions to one of the sources from your list at the start of the lesson. Write a brief evaluation: is this a reliable source? Why or why not?",
      },
      {
        id: "y8-t3-p3-s7",
        slideNumber: 7,
        title: "Analysing Media Language -- Applying Your Skills",
        bulletPoints: [
          "The same language analysis tools from English Literature apply to media texts",
          "Identify: connotation, tone, framing, rhetorical devices, structure",
          "Ask: what impression does this language create and how?",
          "Consider the implied audience: who is this written for and what assumptions does it make?",
          "Consider what is absent: what is not being said and why might that matter?",
        ],
        teacherNotes:
          "This slide explicitly connects the media literacy unit to students' existing analytical toolkit. The skills are transferable. Ask: in what ways is analysing a newspaper article similar to analysing a poem?",
        activity:
          "Analyse the newspaper article extract using the bullet points as a checklist. Write one analytical paragraph focusing on language and framing.",
      },
      {
        id: "y8-t3-p3-s8",
        slideNumber: 8,
        title: "End-of-Year Reflection -- What Have You Learned?",
        bulletPoints: [
          "Term 1: how fiction uses language, character, and structure to explore power and inequality",
          "Term 2: how poetry and drama reflect human experiences of conflict, ambition, and guilt",
          "Term 3: how rhetoric and media shape the way we think, feel, and understand the world",
          "Across all units: analytical language skills apply to any text in any medium",
          "Critical thinking -- asking 'how' and 'why', not just 'what' -- is the skill that connects them all",
        ],
        teacherNotes:
          "End with a brief whole-class reflection. Ask students to share one thing they will take away from Year 8 English. This consolidates learning, celebrates progress, and builds motivation for Year 9. Consider a brief written self-assessment.",
        activity:
          "Final reflection: write three sentences. (1) The most interesting text we studied this year was... because... (2) The analytical skill I have improved most is... (3) In Year 9, I want to develop my ability to...",
      },
    ],
  },
];
