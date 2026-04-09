"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

/* ─── Types ───────────────────────────────────────────────────── */

interface DifferentiatedActivity {
  support: string;
  core: string;
  extension: string;
}

interface FullLessonPlan {
  id: string;
  title: string;
  text: string;
  topic: string;
  yearGroup: string;
  duration: string;
  examBoard: string;
  subject: "English Literature" | "English Language";
  overview: string;
  learningObjectives: string[];
  keyVocabulary: { term: string; definition: string }[];
  starterActivity: { title: string; description: string; duration: string };
  mainActivity: {
    title: string;
    description: string;
    duration: string;
    differentiation: DifferentiatedActivity;
  };
  plenary: { title: string; description: string; duration: string };
  resourcesNeeded: string[];
  assessmentCriteria: string[];
  homeworkSuggestions: string[];
}

/* ─── Full lesson plan data ──────────────────────────────────── */

const LESSON_PLANS: Record<string, FullLessonPlan> = {
  "introduction-to-macbeth": {
    id: "introduction-to-macbeth",
    title: "Introduction to Macbeth",
    text: "Macbeth",
    topic: "Shakespeare",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Introduce students to Macbeth through Act 1 Scene 1 and the witches. Explore the context of Jacobean England, the Great Chain of Being, and how Shakespeare uses the supernatural to unsettle his audience from the very first line.",
    learningObjectives: [
      "Understand the historical and social context of Macbeth (Jacobean England, King James I)",
      "Analyse how Shakespeare presents the supernatural in Act 1 Scene 1",
      "Explore the significance of the witches' language and its dramatic effect",
      "Begin to develop personal responses to the opening of the play",
    ],
    keyVocabulary: [
      { term: "Jacobean", definition: "Relating to the reign of King James I (1603-1625)" },
      { term: "Supernatural", definition: "Phenomena beyond the natural world; magical or otherworldly" },
      { term: "Great Chain of Being", definition: "Elizabethan/Jacobean belief in a divinely ordered hierarchy" },
      { term: "Regicide", definition: "The act of killing a king" },
      { term: "Equivocation", definition: "Using ambiguous language to deceive; saying one thing and meaning another" },
      { term: "Pathetic fallacy", definition: "Attributing human emotions to weather or nature to reflect mood" },
    ],
    starterActivity: {
      title: "First Impressions",
      description:
        "Display the three witches' opening lines on the board. Students discuss in pairs: What atmosphere is created? What do you notice about the language? Why might Shakespeare choose to open with these characters? Feed back to class and record initial thoughts on a class mind map.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Close Reading of Act 1, Scene 1",
      description:
        "Students read Act 1 Scene 1 aloud in groups, then annotate the text focusing on language devices, atmosphere, and dramatic effect. Teacher models annotation of the first few lines before students work independently.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a glossary of archaic terms and a scaffolded annotation frame with guided questions (e.g., 'Circle any words that create a dark atmosphere. Why has Shakespeare chosen these words?').",
        core:
          "Annotate the scene independently, identifying at least three language techniques and explaining their effect on the audience. Write a paragraph analysing how Shakespeare creates an unsettling opening.",
        extension:
          "Compare Act 1 Scene 1 with a modern adaptation (e.g., Polanski's film). How does the director reinterpret Shakespeare's staging? Consider what the opening tells us about the play's themes of disorder and deception.",
      },
    },
    plenary: {
      title: "Exit Ticket: Three Key Takeaways",
      description:
        "Students write three things they have learned about: (1) the context of the play, (2) the witches' role, and (3) one technique Shakespeare uses in the opening. Share one takeaway with a partner before handing in exit tickets.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Copies of Macbeth (Act 1 Scene 1)",
      "Projected slides with context information (Jacobean England, King James I)",
      "Annotation frame handout (for support group)",
      "Glossary of archaic terms",
      "Mini whiteboards for starter activity",
      "Exit ticket slips",
    ],
    assessmentCriteria: [
      "Can explain the historical context of the play and its relevance to Jacobean audiences",
      "Can identify and explain the effect of at least two language techniques used by Shakespeare",
      "Can offer a personal response to the opening scene with supporting evidence",
      "Can use subject-specific terminology accurately (AO1, AO2)",
    ],
    homeworkSuggestions: [
      "Read Act 1 Scene 3 and write five questions you would ask the witches about their prophecies",
      "Research King James I and witchcraft - create a one-page fact file",
      "Write a paragraph explaining why Shakespeare opens the play with the witches rather than Macbeth",
    ],
  },
  "language-paper1-q5-creative-writing": {
    id: "language-paper1-q5-creative-writing",
    title: "Language Paper 1 Q5: Creative Writing",
    text: "Language Paper 1",
    topic: "Creative Writing",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Language",
    overview:
      "Master the 40-mark creative writing question. Focus on narrative structure, descriptive techniques, and crafting an engaging opening using sensory detail and varied sentence forms.",
    learningObjectives: [
      "Understand the assessment objectives for AQA Paper 1 Question 5 (AO5 and AO6)",
      "Craft an engaging narrative opening using sensory detail and varied sentence structures",
      "Apply a range of descriptive techniques including metaphor, simile, and personification",
      "Structure a creative piece using a clear narrative arc (exposition, rising action, climax)",
    ],
    keyVocabulary: [
      { term: "Sensory detail", definition: "Description that appeals to the five senses (sight, sound, smell, touch, taste)" },
      { term: "Narrative arc", definition: "The structure of a story: exposition, rising action, climax, falling action, resolution" },
      { term: "Figurative language", definition: "Language that uses figures of speech (metaphor, simile, personification) rather than literal meaning" },
      { term: "Sentence forms", definition: "Different types of sentences: simple, compound, complex, minor, fragments" },
      { term: "Cyclical structure", definition: "A narrative that ends where it began, creating a sense of completion" },
      { term: "Zoom in/out", definition: "Moving from a wide establishing shot to a close-up detail, or vice versa" },
    ],
    starterActivity: {
      title: "Golden Openings",
      description:
        "Display three example openings: a weather description, a dialogue opener, and an in medias res opening. Students rank them from weakest to strongest and justify their choices. Discuss what makes an opening engaging: hooks, atmosphere, intrigue.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Crafting Your Opening",
      description:
        "Using the image stimulus projected on the board, students plan and write the opening 150 words of a creative piece. Teacher models the 'zoom in' technique live, narrating thought process aloud. Students then draft their own opening, focusing on sensory detail and at least three different sentence forms.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a sentence starter bank and a descriptive techniques checklist. Students fill in a structured planning frame before writing. Aim for 100 words with at least two techniques.",
        core:
          "Plan using a mind map, then write 150 words independently. Include at least three descriptive techniques and two types of sentence form. Self-assess against the AO5/AO6 checklist.",
        extension:
          "Write 200+ words incorporating cyclical structure or a non-linear timeline. Experiment with second person narration or unreliable narrator. Peer assess a partner's work against Level 4 descriptors.",
      },
    },
    plenary: {
      title: "Gallery Walk and Stars/Wish",
      description:
        "Students leave their openings on desks. Class does a gallery walk reading three peers' work. Each student leaves one 'star' (something effective) and one 'wish' (suggestion for improvement) on a sticky note. Return to own work to read feedback.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Image stimulus (projected)",
      "Example openings handout (three contrasting styles)",
      "Sentence starter bank (for support group)",
      "AO5/AO6 checklist handout",
      "Descriptive techniques checklist",
      "Sticky notes for peer feedback",
      "Planning frame (for support group)",
    ],
    assessmentCriteria: [
      "Uses a range of descriptive techniques with clear, deliberate effect (AO5)",
      "Employs varied sentence structures for impact, including at least two different forms (AO6)",
      "Creates a compelling opening that engages the reader through atmosphere or intrigue",
      "Demonstrates accurate spelling, punctuation, and grammar throughout (AO6)",
    ],
    homeworkSuggestions: [
      "Complete the full creative piece (minimum 350 words) using your opening as a starting point",
      "Read the opening chapter of a novel and annotate the techniques the writer uses to engage the reader",
      "Write the same scene from two different perspectives or in two different styles (e.g., horror vs comedy)",
    ],
  },
  "comparing-power-conflict-poems": {
    id: "comparing-power-conflict-poems",
    title: "Comparing Power and Conflict Poems",
    text: "AQA Poetry Anthology",
    topic: "Poetry",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Develop the skill of comparing two Power and Conflict poems thematically and structurally. Students practise integrated comparison using connectives and learn to structure a high-level comparative essay response.",
    learningObjectives: [
      "Compare two poems on the theme of power/conflict using integrated comparison",
      "Use comparative connectives fluently to link analysis across poems",
      "Structure a comparative essay using the alternating (zigzag) method",
      "Analyse how poets use form and structure to convey meaning (AO2)",
    ],
    keyVocabulary: [
      { term: "Integrated comparison", definition: "Weaving analysis of both poems together within paragraphs, rather than writing about each separately" },
      { term: "Comparative connectives", definition: "Linking words for comparison: similarly, in contrast, whereas, likewise, conversely" },
      { term: "Alternating method", definition: "A comparison structure that moves between poems point by point (also called zigzag method)" },
      { term: "Block method", definition: "A comparison structure that discusses one poem fully, then the other" },
      { term: "Form", definition: "The overall shape and type of a poem: sonnet, free verse, dramatic monologue, etc." },
      { term: "Volta", definition: "A turning point or shift in a poem's argument, tone, or focus" },
    ],
    starterActivity: {
      title: "Spot the Connection",
      description:
        "Display key quotations from two power/conflict poems on the board (e.g., 'Ozymandias' and 'My Last Duchess'). Students match quotations that share a similar theme or technique, then explain the connection in one sentence. Introduce the concept of 'integrated comparison'.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Building a Comparative Paragraph",
      description:
        "Teacher models writing a comparative paragraph using the alternating method. Students identify the structure: Point about Poem A, Evidence from A, Analysis of A, Comparative link, Point about Poem B, Evidence from B, Analysis of B. Students then write their own comparative paragraph on a different theme.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a comparative paragraph frame with sentence starters and a bank of comparative connectives. Students choose from pre-selected quotations and fill in the analysis sections.",
        core:
          "Write one full comparative paragraph independently using the alternating method. Select own quotations and use at least two comparative connectives. Self-assess against the mark scheme descriptors.",
        extension:
          "Write two comparative paragraphs exploring different aspects (language and structure). Include analysis of the poets' intentions and contextual links. Aim for Level 5/6 descriptors.",
      },
    },
    plenary: {
      title: "Connective Challenge",
      description:
        "Display a basic comparative sentence on the board. In pairs, students must improve it by adding a more sophisticated comparative connective, a technique reference, and an effect on the reader. Share the best examples with the class.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "AQA Poetry Anthology (Power and Conflict cluster)",
      "Comparative paragraph frame handout",
      "Bank of comparative connectives",
      "Mark scheme descriptors (Level 4-6)",
      "Quotation cards for starter activity",
      "Model comparative paragraph (teacher-written)",
    ],
    assessmentCriteria: [
      "Can compare two poems using integrated comparison rather than the block method",
      "Uses comparative connectives accurately and fluently",
      "Analyses language and/or structural techniques in both poems with clear effect on reader",
      "Shows awareness of poets' intentions and relevant context (AO3)",
    ],
    homeworkSuggestions: [
      "Write a full comparative essay on two poems from the Power and Conflict cluster (30 marks, 45 mins timed)",
      "Create a comparison grid for four poems that share a common theme",
      "Practise identifying the volta in five different poems from the anthology",
    ],
  },
  "christmas-carol-scrooges-transformation": {
    id: "christmas-carol-scrooges-transformation",
    title: "A Christmas Carol: Scrooge's Transformation",
    text: "A Christmas Carol",
    topic: "19th Century Novel",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Track Scrooge's character arc from miser to philanthropist. Analyse how Dickens uses the novella to critique Victorian attitudes to poverty and social responsibility.",
    learningObjectives: [
      "Track Scrooge's transformation across the five staves of the novella",
      "Analyse how Dickens uses language to present Scrooge before and after his transformation",
      "Understand Dickens' social message about poverty, charity, and responsibility",
      "Evaluate Dickens' use of the novella form to convey his moral message (AO2)",
    ],
    keyVocabulary: [
      { term: "Novella", definition: "A short novel, typically with a simple plot and a moral message" },
      { term: "Allegory", definition: "A story with a hidden moral or political meaning beyond the surface narrative" },
      { term: "Stave", definition: "A chapter in A Christmas Carol (musical term, like staves of a song)" },
      { term: "Philanthropy", definition: "The desire to promote the welfare of others, often through charitable giving" },
      { term: "Malthusian", definition: "Relating to Thomas Malthus, who argued the poor should not be helped as overpopulation was natural" },
      { term: "Redemption", definition: "The act of being saved from sin, error, or evil; being made better" },
    ],
    starterActivity: {
      title: "Before and After",
      description:
        "Display two quotations about Scrooge: one from Stave 1 ('hard and sharp as flint') and one from Stave 5 ('as good a friend, as good a master'). Students identify and compare the language choices, then predict what causes the transformation. Record ideas on mini whiteboards.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Tracking the Transformation",
      description:
        "Students work through a character arc timeline, selecting key quotations from each stave that show stages of Scrooge's change. For each quotation, they analyse the language techniques used and explain how Dickens shifts the reader's attitude towards Scrooge. Teacher pauses for guided discussion after each stave.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide pre-selected quotations on cards to place on the timeline. Students match each quote to the correct stave and write one sentence explaining what it shows about Scrooge. Use a word bank for analysis.",
        core:
          "Select own quotations from the text for each stave. Write analytical paragraphs for at least two staves using the What-How-Why framework. Include reference to Dickens' social message.",
        extension:
          "Analyse how Dickens uses the structure of the novella (five staves) to mirror a musical/spiritual journey. Write a critical evaluation of whether Scrooge's transformation is convincing, with textual evidence.",
      },
    },
    plenary: {
      title: "Dickens' Message",
      description:
        "Class discussion: What is Dickens trying to teach Victorian readers through Scrooge's transformation? How is this still relevant today? Students write one sentence summarising Dickens' social message to use as a contextual paragraph opener in essays.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Copies of A Christmas Carol",
      "Character arc timeline template",
      "Quotation cards (for support group)",
      "Mini whiteboards",
      "Context slides: Victorian poverty, workhouses, Malthus",
      "Word bank for analysis (for support group)",
    ],
    assessmentCriteria: [
      "Can identify key moments in Scrooge's transformation with accurate textual reference",
      "Can analyse Dickens' language choices and explain their effect on the reader",
      "Can explain Dickens' social message and link it to Victorian context (AO3)",
      "Can evaluate the effectiveness of Scrooge's transformation as a narrative device",
    ],
    homeworkSuggestions: [
      "Write a full essay: How does Dickens present Scrooge's transformation in A Christmas Carol? (30 marks)",
      "Create a revision poster showing Scrooge's key quotations from each stave with brief analysis",
      "Research the Poor Law Amendment Act 1834 and write a paragraph linking it to the novella",
    ],
  },
  "inspector-calls-social-responsibility": {
    id: "inspector-calls-social-responsibility",
    title: "An Inspector Calls: Social Responsibility",
    text: "An Inspector Calls",
    topic: "Modern Drama",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Explore how Priestley presents the theme of social responsibility through the Birling family. Analyse the Inspector as a mouthpiece for Priestley's socialist message and consider how the play challenges capitalist attitudes.",
    learningObjectives: [
      "Analyse how Priestley presents the theme of responsibility through different characters",
      "Understand the significance of the Inspector as a dramatic device and mouthpiece for Priestley",
      "Compare the older and younger generations' attitudes to responsibility",
      "Link Priestley's message to the historical context of 1912 and 1945 (AO3)",
    ],
    keyVocabulary: [
      { term: "Social responsibility", definition: "The idea that individuals and organisations have a duty to act in the best interests of society" },
      { term: "Dramatic device", definition: "A technique used by a playwright to convey meaning or create effect (e.g., dramatic irony, the Inspector as a mouthpiece)" },
      { term: "Capitalism", definition: "An economic system based on private ownership and profit, often associated with Mr Birling" },
      { term: "Socialism", definition: "An economic system based on collective ownership and social equality, associated with the Inspector/Priestley" },
      { term: "Dramatic irony", definition: "When the audience knows something the characters do not (e.g., Birling's speeches about the Titanic)" },
      { term: "Mouthpiece", definition: "A character who expresses the author's own views and beliefs" },
    ],
    starterActivity: {
      title: "Responsibility Spectrum",
      description:
        "Students place each Birling family member on a 'responsibility spectrum' from 'fully responsible' to 'no responsibility' for Eva Smith's death. They must justify their placement with a brief quotation or reason. Compare placements with a partner and discuss disagreements.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "The Inspector's Message",
      description:
        "Close reading of the Inspector's final speech ('We don't live alone. We are members of one body. We are responsible for each other.'). Students annotate the speech, identifying persuasive techniques, religious imagery, and Priestley's socialist message. Then write an analytical paragraph on how Priestley uses the Inspector to convey the theme of responsibility.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a pre-annotated version of the speech with key techniques highlighted. Students use a writing frame to construct their paragraph: Point, Evidence, Technique, Explanation, Link to context.",
        core:
          "Annotate the speech independently and write one PETEL paragraph. Include at least one reference to context (1912/1945 dual setting) and one comment on the Inspector as a dramatic device.",
        extension:
          "Write two paragraphs: one on the Inspector's speech and one comparing it to Mr Birling's speech in Act 1. Evaluate how Priestley uses structure (placing these speeches at opposite ends of the play) to reinforce his message.",
      },
    },
    plenary: {
      title: "Then and Now",
      description:
        "Quick-fire discussion: Is Priestley's message about social responsibility still relevant today? Students give a modern example of when society has failed to take collective responsibility. Write one sentence connecting the play to a modern issue.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Copies of An Inspector Calls",
      "Inspector's final speech extract (enlarged/projected)",
      "Responsibility spectrum template",
      "PETEL writing frame (for support group)",
      "Context card: 1912 vs 1945",
      "Mr Birling's Act 1 speech extract (for extension group)",
    ],
    assessmentCriteria: [
      "Can analyse how Priestley presents responsibility through language and dramatic devices",
      "Can compare characters' attitudes to responsibility with supporting quotations",
      "Can explain the significance of the 1912/1945 dual setting in relation to the theme (AO3)",
      "Can construct a well-structured analytical paragraph with embedded quotations (AO1, AO2)",
    ],
    homeworkSuggestions: [
      "Write a full essay: How does Priestley present the theme of responsibility in An Inspector Calls?",
      "Create a character profile for Sheila, tracking her changing attitude to responsibility through the play",
      "Compare the Inspector's final speech with a modern political speech about social responsibility",
    ],
  },
  "persuasive-writing-techniques": {
    id: "persuasive-writing-techniques",
    title: "Persuasive Writing Techniques",
    text: "Language Paper 2",
    topic: "Non-Fiction Writing",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Language",
    overview:
      "Build a toolkit of persuasive devices: rhetorical questions, tricolon, emotive language, anecdotes, statistics, and direct address. Apply them in a structured speech or article.",
    learningObjectives: [
      "Identify and explain the effect of key persuasive techniques (AFOREST and beyond)",
      "Apply persuasive techniques in a structured speech or article",
      "Understand how to match tone and register to audience and purpose",
      "Use paragraphing and discourse markers to create a cohesive argument (AO5, AO6)",
    ],
    keyVocabulary: [
      { term: "Rhetoric", definition: "The art of persuasive speaking or writing; using language effectively to influence others" },
      { term: "Tricolon", definition: "A series of three parallel words, phrases, or clauses for emphasis ('education, education, education')" },
      { term: "Emotive language", definition: "Words chosen to evoke an emotional response in the reader/listener" },
      { term: "Anecdote", definition: "A short personal story used to illustrate a point and make an argument relatable" },
      { term: "Counterargument", definition: "Acknowledging and refuting the opposing viewpoint to strengthen your own argument" },
      { term: "Direct address", definition: "Speaking directly to the audience using 'you' to create a personal connection" },
    ],
    starterActivity: {
      title: "Spot the Technique",
      description:
        "Play short clips or display extracts from famous speeches (e.g., Martin Luther King, Greta Thunberg, Malala Yousafzai). Students identify as many persuasive techniques as they can in 3 minutes. Discuss which techniques were most effective and why.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Build Your Argument",
      description:
        "Students choose a topic from a list of debate statements (e.g., 'School uniforms should be abolished', 'Social media does more harm than good'). They plan a persuasive speech using a structured template, then write the opening two paragraphs incorporating at least four different persuasive techniques.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a persuasive techniques reference card and a structured planning template with sentence starters. Students focus on incorporating three techniques and writing one strong paragraph.",
        core:
          "Use the planning template independently. Write two paragraphs with at least four techniques. Include a counterargument. Self-assess using the AO5/AO6 checklist.",
        extension:
          "Write three or more paragraphs including a sophisticated counterargument and rebuttal. Experiment with rhetorical patterning (e.g., anaphora, antithesis). Adapt register for a specific audience (e.g., headteacher vs students).",
      },
    },
    plenary: {
      title: "Elevator Pitch",
      description:
        "Each student delivers their strongest persuasive sentence to the class (30 seconds max). Class votes on the most persuasive statement. Discuss what made the winning entries effective.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Famous speech clips or extracts",
      "Debate statement cards",
      "Persuasive techniques reference card",
      "Structured planning template",
      "AO5/AO6 success criteria checklist",
      "Sentence starter bank (for support group)",
    ],
    assessmentCriteria: [
      "Can identify and name a range of persuasive techniques accurately",
      "Can apply at least four persuasive techniques in their own writing with clear effect",
      "Matches tone and register appropriately to the audience and purpose",
      "Structures an argument logically with clear paragraphing and discourse markers (AO5, AO6)",
    ],
    homeworkSuggestions: [
      "Complete the full persuasive speech/article (minimum 300 words) and self-assess against the mark scheme",
      "Find a persuasive text in a newspaper or online and annotate the techniques used",
      "Write the opposing argument to your speech, then practise rebutting each point",
    ],
  },
  "unseen-poetry-approach": {
    id: "unseen-poetry-approach",
    title: "Unseen Poetry Approach",
    text: "Unseen Poetry",
    topic: "Poetry",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Equip students with a systematic approach to tackling unseen poetry. Use the SMILE framework (Structure, Meaning, Imagery, Language, Effect) to analyse unfamiliar poems confidently.",
    learningObjectives: [
      "Apply the SMILE framework to analyse an unfamiliar poem systematically",
      "Identify and analyse poetic techniques including imagery, form, and sound devices",
      "Write a structured analytical response to an unseen poem under timed conditions",
      "Develop confidence in responding to poems not previously studied (AO1, AO2)",
    ],
    keyVocabulary: [
      { term: "SMILE", definition: "A framework for poetry analysis: Structure, Meaning, Imagery, Language, Effect" },
      { term: "Enjambment", definition: "When a sentence or phrase runs over from one line to the next without punctuation" },
      { term: "Caesura", definition: "A pause in the middle of a line of poetry, often created by punctuation" },
      { term: "Sibilance", definition: "Repetition of 's' and 'sh' sounds, often creating a soft or sinister effect" },
      { term: "Tone", definition: "The attitude or feeling conveyed by the poet's word choices and style" },
      { term: "Stanza", definition: "A group of lines in a poem, separated by a blank line (like a paragraph in prose)" },
    ],
    starterActivity: {
      title: "Poem in 60 Seconds",
      description:
        "Display a short, accessible poem (4-8 lines). Students have 60 seconds to read it and jot down their immediate response: What is it about? How does it make you feel? What do you notice? Share responses with the class to show that initial reactions are a valid starting point.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "SMILE Analysis in Action",
      description:
        "Teacher introduces the SMILE framework with a worked example. Then students apply it to a new unseen poem, working through each element systematically. After annotation, students write a timed paragraph (15 minutes) responding to the question: How does the poet present [theme]?",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a SMILE analysis grid with guiding questions for each element. Students work in pairs to annotate the poem, then independently write a paragraph using sentence starters from the grid.",
        core:
          "Use the SMILE framework independently to annotate the poem. Write one analytical paragraph under timed conditions (15 mins). Include analysis of at least two techniques with effect on the reader.",
        extension:
          "Analyse the poem using SMILE, then write two paragraphs under timed conditions. Include comments on form and structure as well as language. Consider how the poem relates to the wider poetic tradition.",
      },
    },
    plenary: {
      title: "What Would the Examiner Say?",
      description:
        "Display the AQA mark scheme descriptors for Levels 4-6. Students highlight which descriptors their paragraph achieves. Identify one 'next step' target for improving their unseen poetry responses.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Two unseen poems (one for modelling, one for independent practice)",
      "SMILE framework poster or handout",
      "SMILE analysis grid (for support group)",
      "AQA Literature Paper 2 Section C mark scheme",
      "Timer for timed paragraph writing",
      "Sentence starter bank (for support group)",
    ],
    assessmentCriteria: [
      "Can apply the SMILE framework to analyse an unfamiliar poem",
      "Can identify poetic techniques and explain their effect on meaning and the reader",
      "Can write a structured analytical paragraph with embedded quotations",
      "Shows confidence in offering a personal response to an unseen poem (AO1)",
    ],
    homeworkSuggestions: [
      "Find an unfamiliar poem online and complete a full SMILE analysis grid independently",
      "Write a timed response (20 mins) to an unseen poem from a past paper",
      "Create a revision card for five poetic techniques you find hardest to spot, with examples",
    ],
  },
  "language-analysis-skills": {
    id: "language-analysis-skills",
    title: "Language Analysis Skills",
    text: "Language Paper 1",
    topic: "Reading Skills",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Language",
    overview:
      "Develop close reading and language analysis skills. Students learn to identify and analyse the effect of word choices, figurative language, and sentence structures using the What-How-Why framework.",
    learningObjectives: [
      "Identify language techniques in an unseen fiction extract (Paper 1 Q2 and Q3 skills)",
      "Analyse the effect of specific word choices on the reader using the What-How-Why framework",
      "Understand how writers use sentence structure for effect (short sentences, listing, complex sentences)",
      "Write analytical comments that go beyond feature-spotting to explore deeper meanings",
    ],
    keyVocabulary: [
      { term: "What-How-Why", definition: "An analysis framework: What technique is used? How does it work? Why has the writer chosen it?" },
      { term: "Connotation", definition: "The implied or associated meaning of a word beyond its literal definition" },
      { term: "Semantic field", definition: "A group of words related to a particular theme or subject (e.g., words related to war, nature, death)" },
      { term: "Juxtaposition", definition: "Placing two contrasting ideas or images side by side for effect" },
      { term: "Motif", definition: "A recurring element (image, idea, symbol) that develops a theme throughout a text" },
      { term: "Register", definition: "The level of formality in language, determined by audience, purpose, and context" },
    ],
    starterActivity: {
      title: "Word Swap",
      description:
        "Display a sentence from a fiction extract. Replace a key word with a synonym (e.g., 'crept' vs 'walked'). Students discuss in pairs: What difference does the word choice make? What connotations does each word carry? Feed back to establish that every word choice is deliberate.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Deep Dive into Language",
      description:
        "Students read a fiction extract and highlight/underline interesting language choices. Teacher models a What-How-Why analysis of one quotation. Students then select three quotations and write analytical paragraphs for each, progressing from identification to analysis of effect on the reader.",
      duration: "35 mins",
      differentiation: {
        support:
          "Pre-highlight key quotations in the extract. Provide a What-How-Why table template for students to complete. Include a technique identification checklist and a sentence starter bank.",
        core:
          "Select own quotations and write three What-How-Why paragraphs independently. Include at least two different techniques (e.g., metaphor and sentence structure). Focus on the effect on the reader.",
        extension:
          "Write about how multiple techniques work together within a single quotation. Consider how the writer's choices relate to the wider themes or narrative. Attempt perceptive/evaluative comments (Level 4 descriptors).",
      },
    },
    plenary: {
      title: "Level Up",
      description:
        "Display a basic analytical comment (Level 1/2) on the board. As a class, improve it step by step: add a technique name, embed the quotation, explain the effect, and add a perceptive comment. Students write the improved version in their books as a model.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Fiction extract (19th or 20th century prose)",
      "What-How-Why analysis table template",
      "Technique identification checklist",
      "Sentence starter bank (for support group)",
      "AQA Paper 1 Q2/Q3 mark scheme descriptors",
      "Pre-highlighted extract (for support group)",
    ],
    assessmentCriteria: [
      "Can identify a range of language techniques accurately (beyond the obvious)",
      "Can explain the effect of language choices on the reader using What-How-Why",
      "Goes beyond feature-spotting to explore connotations and deeper meanings",
      "Embeds quotations fluently within analytical sentences (AO1, AO2)",
    ],
    homeworkSuggestions: [
      "Read a short story or novel extract and highlight five examples of effective language, writing a What-How-Why paragraph for each",
      "Complete a past paper Q2 (Language Paper 1) under timed conditions (8 minutes)",
      "Create a revision resource: a glossary of 15 language techniques with definitions and examples",
    ],
  },
  "jekyll-hyde-victorian-context": {
    id: "jekyll-hyde-victorian-context",
    title: "Jekyll and Hyde: Victorian Context",
    text: "Jekyll and Hyde",
    topic: "19th Century Novel",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Link Stevenson's novella to its Victorian context: repression, duality, Darwinian theory, and the fear of degeneration. Analyse how Stevenson uses setting and symbolism to reflect anxieties of the era.",
    learningObjectives: [
      "Understand key aspects of Victorian context: respectability, repression, scientific discovery, and social anxiety",
      "Analyse how Stevenson links the characters of Jekyll and Hyde to Victorian fears about duality and degeneration",
      "Explore how setting, symbolism, and narrative structure reflect the tensions of Victorian society",
      "Embed contextual analysis into essay responses confidently (AO3)",
    ],
    keyVocabulary: [
      { term: "Victorian respectability", definition: "The emphasis on moral propriety, decency, and social reputation central to middle-class Victorian identity" },
      { term: "Degeneration", definition: "The Victorian fear that civilisation could regress to a more primitive, animalistic state" },
      { term: "Darwinism", definition: "Charles Darwin's theory of evolution by natural selection, which unsettled Victorian beliefs about human superiority" },
      { term: "Atavism", definition: "The reappearance of primitive or ancestral traits; regression to an earlier evolutionary stage" },
      { term: "Gothic", definition: "A literary genre featuring dark, mysterious settings, supernatural elements, and psychological terror" },
      { term: "Fin de siecle", definition: "End of the century; a period of cultural anxiety and decadence in the late 1800s" },
    ],
    starterActivity: {
      title: "Victorian Headlines",
      description:
        "Display a set of real Victorian newspaper headlines relating to Jack the Ripper, Darwin's Origin of Species, and urban poverty. Students discuss in pairs: What fears and anxieties would a Victorian reader bring to Jekyll and Hyde? Feed back to build a class 'context cloud' on the board.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Linking Text to Context",
      description:
        "Students work through a series of key extracts from the novella, annotating each one with relevant contextual links. For each extract, they answer: What is Stevenson showing about Victorian society? What fear or anxiety does this reflect? How does the language reinforce this? Teacher models the first extract, then students work through the remaining three independently.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide a context-matching activity: students draw lines between pre-selected quotations and context cards (e.g., 'troglodytic' linked to Darwinism). Then write one sentence explaining each link using the frame: 'Stevenson reflects Victorian anxieties about ___ through ___.'",
        core:
          "Annotate four extracts independently, writing a contextual analysis sentence for each. Then write a full paragraph linking one extract to its Victorian context using embedded quotations and AO3-focused analysis.",
        extension:
          "Write two paragraphs comparing how Stevenson uses different aspects of context (e.g., science vs. religion, or repression vs. freedom). Evaluate which contextual factor is most important to understanding the novella and justify your argument.",
      },
    },
    plenary: {
      title: "Context Elevator Pitch",
      description:
        "Each student has 30 seconds to explain one contextual link to the novella to their partner as if they were an examiner awarding AO3 marks. Partners judge whether the link is clear, relevant, and well-explained. Swap roles and repeat with a different contextual link.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Copies of Jekyll and Hyde",
      "Victorian newspaper headlines (projected or printed)",
      "Four key extracts from the novella (printed handout)",
      "Context cards for matching activity (for support group)",
      "Context slides: Darwinism, Victorian respectability, Jack the Ripper, urban poverty",
      "AO3 mark scheme descriptors",
    ],
    assessmentCriteria: [
      "Can explain at least three aspects of Victorian context relevant to the novella",
      "Can link specific textual evidence to contextual factors with clear analysis (AO3)",
      "Can explain how Stevenson uses language and setting to reflect Victorian anxieties",
      "Uses embedded quotations and subject-specific terminology accurately (AO1, AO2)",
    ],
    homeworkSuggestions: [
      "Write a full essay: How does Stevenson use Jekyll and Hyde to reflect Victorian anxieties about science and morality?",
      "Create a context timeline placing key events (Darwin, Jack the Ripper, 1886 publication) alongside moments from the novella",
      "Research one aspect of Victorian context (e.g., the temperance movement, or gaslit London) and write a paragraph explaining how it connects to the novella",
    ],
  },
  "romeo-juliet-balcony-scene": {
    id: "romeo-juliet-balcony-scene",
    title: "Romeo and Juliet: The Balcony Scene",
    text: "Romeo and Juliet",
    topic: "Shakespeare",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Close analysis of Act 2 Scene 2, the iconic balcony scene. Explore Shakespeare's use of light and dark imagery, extended metaphor, and the tension between private love and public conflict.",
    learningObjectives: [
      "Analyse Shakespeare's use of light and dark imagery in Act 2 Scene 2",
      "Explore how extended metaphor and religious imagery elevate Romeo and Juliet's love",
      "Understand the dramatic tension between the private world of the lovers and the public feud",
      "Develop close reading skills by examining how Shakespeare's language choices shape meaning (AO2)",
    ],
    keyVocabulary: [
      { term: "Extended metaphor", definition: "A metaphor that is developed across several lines or throughout a passage (e.g., Romeo's comparison of Juliet to the sun)" },
      { term: "Light/dark imagery", definition: "Contrasting images of light and darkness used to represent love, danger, secrecy, and hope" },
      { term: "Soliloquy", definition: "A speech in which a character speaks their thoughts aloud, usually when alone on stage" },
      { term: "Religious imagery", definition: "Language drawn from religion (saints, pilgrims, prayer) used by Shakespeare to sanctify the lovers' relationship" },
      { term: "Patriarchal society", definition: "A society in which men hold power and authority; relevant to Juliet's lack of autonomy" },
      { term: "Dramatic irony", definition: "When the audience knows something the characters do not; the Prologue tells us the lovers are 'star-crossed'" },
    ],
    starterActivity: {
      title: "Light vs Dark",
      description:
        "Display the quotation 'But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.' Students discuss in pairs: Why does Romeo compare Juliet to the sun? What does this tell us about his feelings? List all the connotations of 'sun' and 'light' on the board. Introduce the concept of extended metaphor.",
      duration: "10 mins",
    },
    mainActivity: {
      title: "Close Analysis of the Balcony Scene",
      description:
        "Students read Act 2 Scene 2 in pairs, then work through a close-reading task focusing on three key passages: Romeo's soliloquy ('But soft, what light...'), Juliet's 'What's in a name?' speech, and the exchange of vows. For each passage, students identify language techniques, explain their effect, and consider what they reveal about the nature of Romeo and Juliet's love.",
      duration: "35 mins",
      differentiation: {
        support:
          "Provide the three extracts pre-printed with key words underlined. Students complete a guided analysis grid: Quotation / Technique / What it shows about love. Use sentence starters: 'Shakespeare uses ___ to suggest that...'",
        core:
          "Analyse all three passages independently. Write two PEEL paragraphs: one on light/dark imagery and one on religious imagery. Include at least one comment on the dramatic irony created by the Prologue.",
        extension:
          "Compare Juliet's language in this scene with her language in Act 3 Scene 5 (the morning after). How does Shakespeare show that the balcony scene represents an idealised love that cannot survive in the real world? Write a critical analysis considering how the scene foreshadows tragedy.",
      },
    },
    plenary: {
      title: "What Would Juliet Say?",
      description:
        "Display Juliet's line: 'What's in a name? That which we call a rose by any other name would smell as sweet.' Students write a modern-day equivalent in one sentence, then explain what Juliet's argument reveals about the tension between identity and love. Vote on the best modern rewriting.",
      duration: "10 mins",
    },
    resourcesNeeded: [
      "Copies of Romeo and Juliet (Act 2 Scene 2)",
      "Three key extracts printed on handout",
      "Guided analysis grid (for support group)",
      "Sentence starter bank (for support group)",
      "Projected images of balcony scene from different productions",
      "AO2 mark scheme descriptors",
    ],
    assessmentCriteria: [
      "Can analyse Shakespeare's use of imagery (light/dark, religious) with clear explanation of effect",
      "Can explain how the balcony scene creates dramatic tension between love and conflict",
      "Can write a close-analysis paragraph using embedded quotations and subject terminology (AO1, AO2)",
      "Can recognise how dramatic irony shapes the audience's response to the scene",
    ],
    homeworkSuggestions: [
      "Write a full essay: How does Shakespeare present love in Act 2 Scene 2 of Romeo and Juliet?",
      "Compare the balcony scene with the Capulet ball (Act 1 Scene 5) - how does Shakespeare develop the relationship between Romeo and Juliet across these two scenes?",
      "Watch two different film versions of the balcony scene (e.g., Zeffirelli 1968 and Luhrmann 1996) and write a comparison of how each director interprets the scene",
    ],
  },
};

/* ─── Page ───────────────────────────────────────────────────── */

export default function LessonPlanDetailPage() {
  const params = useParams<{ id: string }>();
  const plan = LESSON_PLANS[params.id];

  if (!plan) {
    return (
      <>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-md">
            <h2 className="text-lg font-bold text-foreground">Lesson Plan Not Found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The lesson plan you are looking for does not exist or has been removed.
            </p>
            <Link
              href="/resources/teaching/lesson-plans"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Back to Lesson Plans
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link href="/resources/teaching" className="hover:text-foreground transition-colors">
              Teaching Resources
            </Link>
            <span className="mx-2">/</span>
            <Link href="/resources/teaching/lesson-plans" className="hover:text-foreground transition-colors">
              Lesson Plans
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{plan.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-card/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {plan.subject}
            </span>
            <span className="rounded-full bg-card/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {plan.examBoard}
            </span>
            <span className="rounded-full bg-card/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {plan.yearGroup}
            </span>
            <span className="rounded-full bg-card/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {plan.duration}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {plan.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            {plan.overview}
          </p>

          {/* Print button */}
          <button
            onClick={() => window.print()}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-card/20 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-card/30 print:hidden"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
            </svg>
            Print Lesson Plan
          </button>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 print:px-0 print:py-4">
        {/* Learning Objectives */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Learning Objectives
          </h2>
          <ul className="mt-4 space-y-2">
            {plan.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-primary/5 p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground">{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Key Vocabulary
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {plan.keyVocabulary.map((vocab) => (
              <div key={vocab.term} className="rounded-lg border border-border bg-card p-4">
                <dt className="font-bold text-foreground">{vocab.term}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{vocab.definition}</dd>
              </div>
            ))}
          </div>
        </section>

        {/* Lesson Structure */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Lesson Structure
          </h2>

          {/* Starter */}
          <div className="mt-4 rounded-xl border-l-4 border-[#27AE60] bg-[#27AE60]/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#27AE60]">Starter: {plan.starterActivity.title}</h3>
              <span className="rounded-full bg-[#27AE60]/10 px-2.5 py-0.5 text-xs font-semibold text-[#27AE60]">
                {plan.starterActivity.duration}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.starterActivity.description}</p>
          </div>

          {/* Main Activity */}
          <div className="mt-4 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-primary">Main: {plan.mainActivity.title}</h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {plan.mainActivity.duration}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.mainActivity.description}</p>

            {/* Differentiation */}
            <div className="mt-4 space-y-3">
              <h4 className="text-sm font-bold text-foreground">Differentiation</h4>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Support</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.mainActivity.differentiation.support}</p>
              </div>
              <div className="rounded-lg bg-blue-500/10 border border-blue-500/30 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Core</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.mainActivity.differentiation.core}</p>
              </div>
              <div className="rounded-lg bg-purple-500/10 border border-purple-500/30 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">Extension</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.mainActivity.differentiation.extension}</p>
              </div>
            </div>
          </div>

          {/* Plenary */}
          <div className="mt-4 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-primary">Plenary: {plan.plenary.title}</h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {plan.plenary.duration}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.plenary.description}</p>
          </div>
        </section>

        {/* Resources Needed */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            Resources Needed
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {plan.resourcesNeeded.map((resource, i) => (
              <li key={i} className="flex items-start gap-2 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {resource}
              </li>
            ))}
          </ul>
        </section>

        {/* Assessment Criteria */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
            Assessment Criteria
          </h2>
          <ul className="mt-4 space-y-2">
            {plan.assessmentCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-sm text-muted-foreground">{criterion}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Homework Suggestions */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Homework Suggestions
          </h2>
          <ul className="mt-4 space-y-2">
            {plan.homeworkSuggestions.map((suggestion, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-muted p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground">{suggestion}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Back link */}
        <div className="print:hidden">
          <Link
            href="/resources/teaching/lesson-plans"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Lesson Plans
          </Link>
        </div>
      </div>

    </>
  );
}
