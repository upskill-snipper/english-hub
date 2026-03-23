import type { LessonPlan } from '@/types'

// ─── Lesson 1: First Reading Strategies — Making Meaning ─────────────────────

const lesson1: LessonPlan = {
  id: 'unseen-poetry-01-first-reading',
  title: 'First Reading Strategies: Making Meaning from Unseen Poetry',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Develop a systematic approach to reading an unseen poem for the first time.',
    'Apply annotation strategies to identify subject, speaker, tone, and purpose.',
    'Summarise the overall meaning of an unseen poem in their own words.',
  ],
  successCriteria: [
    'I can read an unseen poem and identify the subject, speaker, and situation.',
    'I can annotate a poem systematically using a first-reading checklist.',
    'I can write a clear one-sentence summary of what the poem is about.',
    'I can identify at least two possible interpretations of the poem\'s meaning.',
  ],
  keywords: [
    'annotation', 'speaker', 'subject', 'tone',
    'interpretation', 'literal meaning', 'inference', 'overview',
  ],
  starterActivity: {
    title: 'What Do You Notice?',
    duration: '8 minutes',
    instructions:
      'Display the following original poem on the board without a title:\n\n"The last train pulls away from the platform,\nleaving only the echo of its whistle\nand a woman who stands with her hand still raised,\nfingers curled around a goodbye\nshe did not mean to give.\nThe clock above her ticks\nlike a heart that has forgotten\nwhy it beats."\n\nStudents have 90 seconds of silent reading, then share one thing they noticed with a partner. Collect responses on the board and categorise them: language, meaning, feeling, structure. Explain that today they will learn a systematic approach to making sense of any poem they encounter for the first time.',
    differentiation: {
      support: 'Provide prompt questions: "Who is speaking? Where are they? How do they feel?"',
      core: 'Students identify one language feature and explain why the poet might have used it.',
      stretch: 'Students consider what the poem might be about beyond its literal meaning — what bigger ideas does it explore?',
    },
    resources: ['Poem displayed on board', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'The SMILE Strategy — A First Reading Framework',
      duration: '20 minutes',
      instructions:
        'Introduce the SMILE framework for first reading: Subject (what is the poem about?), Message (what is the poet trying to say?), Imagery (what pictures does the poet create?), Language (what interesting word choices stand out?), Effect (how does the poem make you feel and why?). Model the strategy using the starter poem, annotating on the board with colour-coded highlights for each element. Students then apply SMILE independently to a second original poem:\n\n"My grandfather\'s hands were maps\nof every field he ever turned,\neach crease a furrow, each callus\na stone he chose not to move.\nHe spoke in seasons —\nspring for promises,\nautumn for truths —\nand when winter came at last,\nhis hands lay still as frozen earth,\nholding nothing,\nholding everything."\n\nStudents annotate their copy and complete a SMILE grid for the poem.',
      differentiation: {
        support: 'Provide a partially completed SMILE grid with the Subject and Message rows filled in.',
        core: 'Students complete the full SMILE grid independently with textual evidence for each row.',
        stretch: 'Students write a short paragraph explaining how two SMILE elements work together to create meaning.',
      },
      resources: ['SMILE framework poster/handout', 'Printed poem copies', 'SMILE grid worksheet', 'Coloured highlighters'],
    },
    {
      title: 'Guided Practice — Three Readings Approach',
      duration: '20 minutes',
      instructions:
        'Explain the Three Readings approach: Read 1 — what is happening? (literal meaning); Read 2 — how is it written? (techniques and choices); Read 3 — why has the poet written it this way? (deeper meaning and effects). Students apply this to a third original poem:\n\n"She built her house from arguments,\nbrick by brick, each one\na word she wished she hadn\'t said.\nThe roof leaked regret\nand the windows let in\nonly the thinnest light.\nBut in the garden — oh, the garden —\nwild things grew without permission:\ndandelions, daisies,\na stubborn rose that climbed\nthe wall she\'d meant to keep them out.\nShe never could explain\nwhy she loved the garden most."\n\nFor each reading, students write one to two sentences summarising their understanding. Class discussion: how did your understanding change between readings? Teacher draws out the idea that meaning deepens with each reading and that first impressions can be refined.',
      differentiation: {
        support: 'Provide guided questions for each reading stage: "Reading 1: Who is \'she\'? What did she build? What grows in the garden?"',
        core: 'Students complete all three readings independently and note how their understanding changed.',
        stretch: 'Students evaluate which reading stage was most useful and explain why, linking to exam technique.',
      },
      resources: ['Printed poem copies', 'Three Readings worksheet', 'Guided questions sheet (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'One-Sentence Summary Challenge',
    duration: '7 minutes',
    instructions:
      'Students write a one-sentence summary of the third poem\'s meaning, then swap with a partner. Partners give feedback: does the summary capture the poem\'s main idea? Is it specific enough? Could it apply to any poem or is it clearly about this one? Two or three strong examples shared with the class. Teacher reinforces that being able to summarise a poem\'s meaning concisely is the foundation of every good unseen poetry response.',
    differentiation: {
      support: 'Sentence frame: "This poem is about... and the poet suggests that..."',
      core: 'Students write their summary without scaffolding and include one technique the poet uses.',
      stretch: 'Students write two possible summaries reflecting different interpretations of the poem.',
    },
  },
  homework:
    'Find any poem you have not studied before (from a library book, website, or anthology). Apply the SMILE strategy to annotate it and bring your annotations to the next lesson.',
  worksheetQuestions: [
    {
      question: 'Read the poem about the grandfather\'s hands. What is the poem\'s subject and who is the speaker?',
      lines: 4,
      modelAnswer:
        'The poem\'s subject is the speaker\'s grandfather and the life he lived as a farmer. The speaker is a grandchild reflecting on their grandfather after his death. We can infer this from the past tense ("were", "spoke") and the final image of his hands lying "still as frozen earth", which suggests he has passed away.',
      marks: 3,
    },
    {
      question: 'Using the SMILE framework, identify the Message of the poem about the house built from arguments.',
      lines: 5,
      modelAnswer:
        'The poet\'s message is that even when we build emotional walls around ourselves through conflict and regret, life and beauty can still find a way through. The "house" represents emotional defences built from arguments, while the "garden" represents the natural, uncontrollable parts of life — love, growth, hope — that persist despite our attempts to shut them out. The speaker "loved the garden most" because these uncontrolled, beautiful things are what truly matter.',
      marks: 4,
    },
    {
      question: 'Explain how the Three Readings approach helps you develop a deeper understanding of an unseen poem.',
      lines: 5,
      modelAnswer:
        'The Three Readings approach helps build understanding in layers. The first reading establishes the literal meaning — what is happening in the poem. The second reading shifts attention to how the poem is written, noticing techniques like metaphor, structure, and word choice. The third reading asks why the poet made these choices, leading to analysis of deeper meaning and effects on the reader. Each reading adds depth, moving from surface understanding to analytical interpretation, which is exactly what the examiner is looking for.',
      marks: 4,
    },
    {
      question: 'Annotate the starter poem (about the train station). Identify the subject, tone, and one language technique the poet uses.',
      lines: 6,
      modelAnswer:
        'The subject is a woman at a train station who has just said goodbye to someone — perhaps permanently. The tone is melancholic and regretful, suggested by the phrase "a goodbye she did not mean to give", which implies the parting was unintended or unwanted. One key technique is the simile "like a heart that has forgotten why it beats", which compares the ticking clock to a purposeless heart. This suggests the woman feels empty and lost after the departure, as if her reason for living has left with the train.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'All poems in this lesson are original and written for teaching purposes — no copyright concerns.',
    'The SMILE framework is one of several possible approaches. Adapt or replace with your department\'s preferred model if applicable.',
    'Emphasise that there is no single "correct" answer with unseen poetry — the examiner rewards well-supported interpretation.',
    'This lesson focuses on reading skills only; analysis and writing skills will be developed in subsequent lessons.',
    'Students who struggle with inference may benefit from additional scaffolding on literal comprehension before moving to interpretation.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO1: Inference',
    'Annotation skills',
    'Summary and interpretation',
    'Independent reading strategies',
  ],
}

// ─── Lesson 2: Identifying Poetic Techniques ────────────────────────────────

const lesson2: LessonPlan = {
  id: 'unseen-poetry-02-poetic-techniques',
  title: 'Identifying Poetic Techniques in Unseen Poetry',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and name a range of poetic techniques commonly used in GCSE-level poetry.',
    'Locate examples of specific techniques within unseen poems.',
    'Begin to explain the effect of identified techniques on meaning and the reader.',
  ],
  successCriteria: [
    'I can define and identify at least eight poetic techniques in an unseen poem.',
    'I can locate specific examples of techniques and quote them accurately.',
    'I can begin to explain why a poet might have chosen a particular technique.',
    'I can distinguish between identifying a technique and analysing its effect.',
  ],
  keywords: [
    'metaphor', 'simile', 'personification', 'alliteration',
    'enjambment', 'caesura', 'sibilance', 'semantic field',
  ],
  starterActivity: {
    title: 'Technique Recall Relay',
    duration: '7 minutes',
    instructions:
      'In teams of four, students have three minutes to list as many poetic techniques as they can on a mini-whiteboard. Teams then pass their boards clockwise; the next team adds any techniques they had that the previous team missed. Repeat once more. The team with the longest combined list wins. Teacher compiles a master list on the board, briefly defining any techniques students are unsure about. Emphasise: identifying techniques is step one — the marks come from explaining their effects.',
    differentiation: {
      support: 'Provide a word bank of twelve techniques for students to choose from and define.',
      core: 'Students recall techniques from memory and provide a brief definition for each.',
      stretch: 'Students provide an original example sentence for each technique they list.',
    },
    resources: ['Mini-whiteboards', 'Technique word bank (support tier)', 'Timer'],
  },
  mainActivities: [
    {
      title: 'Technique Toolkit — Definitions and Examples',
      duration: '18 minutes',
      instructions:
        'Distribute the Poetic Techniques Toolkit handout listing sixteen key techniques with definitions. Students read the following original poem and identify as many techniques as they can, highlighting and labelling each one:\n\n"The sea was a grey wolf today,\nsnarling at the harbour wall,\nits white teeth snapping at the boats\nthat huddled, trembling, side by side.\nBeneath — beneath — the water pulled\nits cold hands through the sand\nand dragged the pebbles, hissing,\nback into its throat.\nThe lighthouse stood alone,\nits single eye unblinking,\nand watched the wolf devour the shore\none mouthful at a time."\n\nTeacher models the first three techniques (metaphor: "grey wolf"; personification: "snarling", "white teeth snapping"; alliteration: "side by side") then students work in pairs to find at least five more. Feedback as a class, with teacher recording techniques and line references on the board.',
      differentiation: {
        support: 'Provide a checklist of eight techniques to find, with line numbers as hints for where to look.',
        core: 'Students identify techniques independently using the toolkit, aiming for at least eight examples.',
        stretch: 'Students identify techniques not on the toolkit (e.g., extended metaphor, semantic field of predation) and explain the overall effect.',
      },
      resources: ['Poetic Techniques Toolkit handout', 'Printed poem copies', 'Highlighters', 'Technique checklist (support tier)'],
    },
    {
      title: 'Technique Spotting Under Pressure',
      duration: '22 minutes',
      instructions:
        'Students work individually on a second original poem, applying their technique identification skills under light time pressure (twelve minutes for annotation, ten minutes for written responses):\n\n"Morning crept through the curtains\non soft, pale feet,\nspilling its gold across the bedroom floor\nlike a careless child with paint.\nThe alarm clock shattered the silence —\na hammer on glass —\nand the day, unwelcome, barged in,\nloud and graceless,\ndemanding to be lived.\nShe lay still.\nLet it wait, she thought.\nLet the gold stay a little longer."\n\nFor each quotation, students write one sentence using a phrase from the Effects Toolkit. After writing, students peer-assess using a checklist: Does the paragraph zoom in on a specific word? Does it explain connotations? Does it link to the poem\'s wider meaning?',
      differentiation: {
        support: 'Provide a table with two columns (Technique | Quotation) and sentence starters for the explanation question.',
        core: 'Students complete both tasks independently within the time limit.',
        stretch: 'Students answer a third question: "How do the techniques work together to create an overall effect in this poem?"',
      },
      resources: ['Printed poem copies', 'Annotation materials', 'Response table (support tier)', 'Timer'],
    },
  ],
  plenaryActivity: {
    title: 'Identify vs Analyse — What\'s the Difference?',
    duration: '8 minutes',
    instructions:
      'Display two student responses side by side: Response A simply identifies a technique ("The poet uses a simile"); Response B identifies and analyses ("The poet compares morning to \'a careless child with paint\', suggesting that the early light is messy and uncontrolled, creating a sense of playful beauty before the harsh reality of the day intrudes"). Students vote: which response would score higher and why? Teacher reinforces that identification alone earns minimal marks — the marks come from explaining effect. This skill will be the focus of the next lesson.',
    differentiation: {
      support: 'Students identify one difference between Response A and Response B.',
      core: 'Students explain why Response B is better using assessment criteria language.',
      stretch: 'Students improve Response B further by adding an alternative interpretation or linking to the wider poem.',
    },
  },
  homework:
    'Create a revision flashcard set for ten poetic techniques: term on one side, definition and an original example on the other. Bring to the next lesson for peer testing.',
  worksheetQuestions: [
    {
      question: 'Read the poem about the sea. Identify four different poetic techniques and provide a quotation for each.',
      lines: 8,
      modelAnswer:
        '1. Extended metaphor — the sea is compared to a "grey wolf" throughout the poem, with references to "teeth", "snarling", and "devour". 2. Personification — "its cold hands" gives the water human qualities, suggesting a deliberate, menacing action. 3. Repetition — "Beneath — beneath —" emphasises the hidden danger below the surface. 4. Alliteration — "side by side" draws attention to the boats\' closeness and vulnerability.',
      marks: 4,
    },
    {
      question: 'Choose one technique from the sea poem and explain why the poet might have used it.',
      lines: 5,
      modelAnswer:
        'The poet uses an extended metaphor comparing the sea to a "grey wolf" to emphasise the power and danger of the ocean. By sustaining this comparison throughout the poem — "snarling", "white teeth snapping", "devour the shore" — the poet creates a sense of relentless predatory threat. This transforms the sea from a natural feature into something actively hostile and violent, perhaps reflecting how humans are powerless against the forces of nature.',
      marks: 4,
    },
    {
      question: 'Read the poem about morning. List four techniques used and provide a quotation for each.',
      lines: 8,
      modelAnswer:
        '1. Personification — "Morning crept through the curtains on soft, pale feet" gives morning human qualities of gentle, quiet movement. 2. Simile — "like a careless child with paint" compares the spreading light to a child making a mess, suggesting beauty without intention. 3. Metaphor — "A hammer on glass" compares the alarm clock to something violently breaking the peaceful silence. 4. Short sentence — "She lay still." creates a pause that mirrors the character\'s resistance to starting the day.',
      marks: 4,
    },
    {
      question: 'Explain the difference between identifying a technique and analysing its effect. Use an example from either poem.',
      lines: 5,
      modelAnswer:
        'Identifying a technique means simply naming it and providing a quotation, for example: "The poet uses personification: \'Morning crept on soft, pale feet\'." Analysing the effect means explaining why the poet chose this technique and what impact it has on the reader. For example: "The poet personifies morning as creeping on \'soft, pale feet\', creating a sense of gentleness and quiet intimacy. The word \'crept\' suggests the light enters cautiously, almost respectfully, which contrasts sharply with the violent \'shattering\' of the alarm clock, highlighting the tension between peace and the demands of daily life."',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The Poetic Techniques Toolkit should be kept as a reference document throughout the unseen poetry unit.',
    'Emphasise from this lesson onwards that technique identification without analysis is a common reason students underperform on Section C.',
    'The sea poem uses an extended metaphor, which is a higher-level concept — differentiate accordingly.',
    'Consider displaying the master technique list as a working wall display that students can refer to in future lessons.',
    'All poems are original and copyright-free for classroom use.',
  ],
  targetedSkills: [
    'AO2: Language and structure analysis',
    'Technique identification',
    'Quotation selection',
    'Analytical writing foundations',
    'Timed annotation practice',
  ],
}

// ─── Lesson 3: Analysing Language and Word Choice ────────────────────────────

const lesson3: LessonPlan = {
  id: 'unseen-poetry-03-language-word-choice',
  title: 'Analysing Language and Word Choice in Unseen Poetry',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse specific word choices and explain their connotations and effects.',
    'Develop the skill of "zooming in" on individual words within a quotation.',
    'Write analytical sentences that explore multiple layers of meaning in language.',
  ],
  successCriteria: [
    'I can identify a key word within a quotation and explain its connotations.',
    'I can explain how a single word contributes to the overall meaning of a poem.',
    'I can write a detailed analytical sentence that explores the effect of word choice on the reader.',
    'I can consider alternative word choices and explain why the poet\'s choice is more effective.',
  ],
  keywords: [
    'connotation', 'denotation', 'diction', 'word choice',
    'semantic field', 'register', 'ambiguity', 'nuance',
  ],
  starterActivity: {
    title: 'Word Swap Challenge',
    duration: '8 minutes',
    instructions:
      'Display the line: "The moon dripped silver onto the sleeping town." Ask students to replace "dripped" with three alternative verbs (e.g., poured, spilled, threw). For each, discuss: how does the meaning change? What does "dripped" suggest that the alternatives don\'t? Draw out that "dripped" implies slowness, delicacy, something precious (like a liquid being carefully measured). Establish the lesson focus: in unseen poetry, the highest-scoring responses zoom in on individual words and explore why the poet chose that specific word over any other.',
    differentiation: {
      support: 'Provide three alternative words and ask students to rank them from closest to furthest in meaning from "dripped".',
      core: 'Students generate their own alternatives and explain the difference in effect.',
      stretch: 'Students explain how "dripped" connects to the wider image (moon, silver, sleeping) to create an overall atmosphere.',
    },
    resources: ['Line displayed on board', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Zooming In — From Quotation to Word-Level Analysis',
      duration: '20 minutes',
      instructions:
        'Teacher models the "zoom in" technique using this original poem:\n\n"The orchard holds its breath in March,\neach branch a clenched fist\nwaiting for permission to bloom.\nThe soil remembers last year\'s fruit —\nhow it fell, how it split,\nhow the wasps came uninvited\nand drank their fill.\nNow the roots grip the dark\nlike hands gripping a rope,\npulling something heavy\ntoward the light."\n\nModel three levels of analysis for the quotation "each branch a clenched fist": Level 1 — identify technique (metaphor); Level 2 — explain meaning (branches compared to fists suggests tension and restraint); Level 3 — zoom in on word "clenched" (connotations of anger, pain, determination — the tree is personified as enduring and struggling, not passively waiting). Students practise the same three-level approach on two further quotations from the poem: "The soil remembers" and "roots grip the dark". Teacher circulates and provides feedback on depth of word-level analysis.',
      differentiation: {
        support: 'Provide a writing frame: "The word _____ suggests _____ because it has connotations of _____."',
        core: 'Students complete three-level analysis for both quotations independently.',
        stretch: 'Students explore how the word-level choices across the poem create a sustained semantic field and explain its overall effect.',
      },
      resources: ['Printed poem copies', 'Three-level analysis model on board', 'Writing frame (support tier)'],
    },
    {
      title: 'Independent Practice — Word Choice Analysis',
      duration: '20 minutes',
      instructions:
        'Students read a new original poem and write three word-level analysis paragraphs:\n\n"My mother ironed our futures flat,\npressed the creases out of chaos\nwith steam and stubborn hands.\nShe starched our collars stiff with expectation,\nhung our days on wire hangers\nin a row, neat as soldiers,\nand if one fell —\nshe\'d pick it up,\nsmooth it down,\nand pin it back in place.\nWe wore her love like Sunday shirts:\nstiff, uncomfortable,\nbut always, always clean."\n\nFor each paragraph, students must: (1) select a quotation, (2) identify the technique, (3) zoom in on one specific word, (4) explain its connotations, and (5) link to the poet\'s message about the mother. After writing, students peer-assess using a checklist: Does the paragraph zoom in on a specific word? Does it explain connotations? Does it link to the poem\'s wider meaning?',
      differentiation: {
        support: 'Provide three pre-selected quotations and a structured paragraph template for each.',
        core: 'Students select their own quotations and write three analytical paragraphs independently.',
        stretch: 'Students write a concluding sentence for each paragraph that considers an alternative interpretation of the word choice.',
      },
      resources: ['Printed poem copies', 'Peer assessment checklist', 'Paragraph template (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Best Word, Best Analysis',
    duration: '7 minutes',
    instructions:
      'Each student writes on a sticky note the single most interesting word from the mother poem and one sentence explaining why. Sticky notes are placed on the board. Teacher reads three or four strong examples aloud. Class votes on the most convincing analysis. Teacher reinforces: the best unseen poetry responses don\'t just quote whole phrases — they zoom in on the single word that does the most work.',
    differentiation: {
      support: 'Students choose from a shortlist of five key words and complete a sentence frame.',
      core: 'Students select any word and write their analysis independently.',
      stretch: 'Students explain why their chosen word is more important to the poem\'s meaning than any other single word.',
    },
  },
  homework:
    'Choose any three lines from the orchard poem. For each line, identify one key word and write a sentence explaining its connotations and effect. Aim for word-level precision.',
  worksheetQuestions: [
    {
      question: 'Read the orchard poem. Choose the quotation "The soil remembers last year\'s fruit" and analyse the word "remembers".',
      lines: 5,
      modelAnswer:
        'The poet personifies the soil by saying it "remembers", attributing human memory to the earth. The word "remembers" has connotations of nostalgia and loss — it suggests the soil is haunted by the past, carrying the traces of fruit that has fallen and decayed. This creates a sense of cyclical sadness: growth, fruiting, falling, and decay. The choice of "remembers" rather than a neutral word like "contains" gives the soil emotional depth, suggesting that nature itself experiences a form of grief or longing.',
      marks: 4,
    },
    {
      question: 'In the mother poem, analyse the effect of the word "starched" in "She starched our collars stiff with expectation."',
      lines: 5,
      modelAnswer:
        'The word "starched" literally refers to treating fabric to make it rigid and crisp. However, in this context it metaphorically suggests the mother imposed stiffness and formality on her children\'s lives through her high expectations. "Starched" has connotations of something being made unnaturally rigid — it implies the children were shaped and controlled, their natural softness removed. The word suggests love expressed through discipline and control rather than warmth, which connects to the poem\'s final image of love that is "stiff, uncomfortable, but always, always clean."',
      marks: 4,
    },
    {
      question: 'Explain what "zooming in" means in the context of poetry analysis. Why is it an important skill?',
      lines: 4,
      modelAnswer:
        '"Zooming in" means selecting a single word within a quotation and analysing its specific connotations, associations, and effects, rather than discussing the quotation as a whole. It is important because it demonstrates close reading and shows the examiner that the student can engage with the poet\'s precise choices. Word-level analysis is what distinguishes a competent response from a sophisticated one — it shows the student understands that every word in a poem is deliberately chosen.',
      marks: 3,
    },
    {
      question: 'Choose any quotation from the mother poem and write a full analytical paragraph that zooms in on one word.',
      lines: 8,
      modelAnswer:
        'The poet describes the children\'s days as "hung on wire hangers in a row, neat as soldiers." The simile "neat as soldiers" compares the organised daily routines to a military line-up. Zooming in on the word "soldiers" reveals connotations of discipline, obedience, and a lack of individuality — soldiers follow orders and stand uniformly. This suggests the mother\'s love, while well-intentioned, imposed rigid control on her children\'s lives, leaving little room for personal expression or disorder. The word also carries connotations of duty and sacrifice, perhaps implying the mother saw raising her children as her own form of service, carried out with military precision and dedication.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Word-level analysis is often the weakest skill area for GCSE students — they tend to quote whole phrases without zooming in.',
    'The Word Swap starter is highly effective and can be reused with different lines throughout the unit.',
    'Encourage students to use the phrase "the word X suggests..." as a habit-forming sentence structure.',
    'The mother poem tends to generate strong personal responses — allow space for this but redirect toward analytical writing.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO2: Language analysis',
    'Word-level analysis',
    'Connotation exploration',
    'Analytical paragraph writing',
    'Close reading',
  ],
}

// ─── Lesson 4: Structure and Form Analysis ───────────────────────────────────

const lesson4: LessonPlan = {
  id: 'unseen-poetry-04-structure-form',
  title: 'Structure and Form Analysis in Unseen Poetry',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse structural features in unseen poems, including enjambment, caesura, stanza breaks, and line length.',
    'Understand how poets use form (sonnet, free verse, dramatic monologue) to shape meaning.',
    'Write about structure and form in a way that links to meaning, rather than simply identifying features.',
  ],
  successCriteria: [
    'I can identify at least four structural features in an unseen poem.',
    'I can explain how the structure of a poem contributes to its meaning.',
    'I can discuss the poet\'s choice of form and explain why it is significant.',
    'I can write an analytical paragraph about structure that goes beyond feature-spotting.',
  ],
  keywords: [
    'enjambment', 'caesura', 'stanza', 'volta',
    'free verse', 'end-stopping', 'line break', 'form',
  ],
  starterActivity: {
    title: 'Shape the Meaning',
    duration: '8 minutes',
    instructions:
      'Display the same sentence written in three different structural layouts on the board:\n\nVersion A: "I waited for you at the door and you did not come."\nVersion B: "I waited / for you / at the door / and you / did not come."\nVersion C: "I waited for you at the door.\n\nAnd you did not come."\n\nDiscuss: which version feels most emotional and why? Draw out that line breaks, spacing, and layout change the pace, emphasis, and emotional weight of the words. Establish: structure is not decoration — it is meaning.',
    differentiation: {
      support: 'Provide the key terms "pace", "emphasis", and "pause" and ask students to match one to each version.',
      core: 'Students explain the effect of each version in their own words.',
      stretch: 'Students create a fourth version using a different structural choice and explain its effect.',
    },
    resources: ['Three versions displayed on board'],
  },
  mainActivities: [
    {
      title: 'Structural Features Masterclass',
      duration: '20 minutes',
      instructions:
        'Teacher introduces six key structural features with definitions and effects: enjambment (continuation creates momentum or urgency), caesura (mid-line pause creates reflection or disruption), short lines (slow pace, create emphasis), long lines (create breathlessness or flow), stanza breaks (shift in time, tone, or perspective), volta (turning point in argument or emotion). Students apply these to the following original poem:\n\n"We used to walk the long way home from school,\nkicking cans along the gutter, counting\ncracks in the pavement — stepping over each one\nbecause your mother told you they were doors\nto somewhere else.\n\nYou believed her.\n\nI didn\'t. But I stepped over them anyway,\njust in case — just in case the cracks\nled somewhere better than the street\nwe always walked,\nthe house\nI always\nwent back to."\n\nTeacher models annotation of enjambment in lines 2-3 ("counting / cracks") — the line break mirrors the act of counting, each line a new step. Students annotate the rest of the poem for structural features and write brief notes on the effect of each. Class discussion: what is the effect of the isolated line "You believed her."? Why do the final lines get progressively shorter?',
      differentiation: {
        support: 'Provide an annotation guide highlighting where each structural feature appears, with sentence starters for effects.',
        core: 'Students annotate independently and write effect notes for at least four structural features.',
        stretch: 'Students write a paragraph explaining how the structure of the entire poem mirrors its emotional journey.',
      },
      resources: ['Structural features handout', 'Printed poem copies', 'Annotation guide (support tier)'],
    },
    {
      title: 'Form and Meaning — Why This Shape?',
      duration: '20 minutes',
      instructions:
        'Introduce the concept of poetic form: free verse (no fixed pattern — freedom, individuality, modern voice), regular stanzas (order, control, tradition), single stanza (continuous thought, stream of consciousness), couplets (connection, balance, resolution). Students read a second original poem and identify its form:\n\n"Tell me again how the river runs —\nhow it starts as nothing, a trickle\nbetween stones, barely a whisper,\nthen gathers itself, voice by voice,\nuntil it roars through the valley\nwith the confidence of something\nthat has never once considered stopping.\n\nTell me again. I need to remember\nhow a small thing becomes\nunstoppable."\n\nStudents write a paragraph answering: "Why has the poet chosen this form for this poem?" They should consider: why two stanzas and not one? Why is the second stanza shorter? Why free verse rather than a fixed form? What is the effect of the repeated opening "Tell me again"? Peer discussion and feedback before sharing two or three strong paragraphs with the class.',
      differentiation: {
        support: 'Provide guided questions: "How many stanzas? Which is longer? Why might the poet have done this?"',
        core: 'Students write a paragraph independently linking form to meaning.',
        stretch: 'Students compare this poem\'s form to a hypothetical version written as a sonnet and explain what would change.',
      },
      resources: ['Printed poem copies', 'Form reference sheet', 'Guided questions (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Structure Statement — True or False',
    duration: '7 minutes',
    instructions:
      'Display five statements about structure and form: (1) "Enjambment always means the poet is excited" — False; (2) "A volta signals a shift in the poem" — True; (3) "Free verse means the poet made no deliberate choices about structure" — False; (4) "Short lines always slow the reader down" — True; (5) "Writing about structure means counting the number of stanzas" — False. Students vote and justify. Teacher reinforces: structural analysis must always link to meaning, not just describe features.',
    differentiation: {
      support: 'Students identify whether each statement is true or false.',
      core: 'Students justify each answer with a reason.',
      stretch: 'Students rewrite the false statements to make them accurate.',
    },
  },
  homework:
    'Reread the poem about walking home from school. Write two paragraphs: one analysing the effect of the progressively shorter final lines, and one explaining why the line "You believed her." stands alone as its own stanza.',
  worksheetQuestions: [
    {
      question: 'Identify three structural features in the poem about walking home from school and explain the effect of each.',
      lines: 8,
      modelAnswer:
        '1. Enjambment in "counting / cracks in the pavement" — the line break mimics the physical act of stepping from one paving stone to the next, creating a sense of rhythm and movement that matches the content. 2. The isolated single line "You believed her." forms its own stanza, creating a dramatic pause. Its brevity and separation emphasise the simplicity and innocence of the friend\'s belief, contrasting with the speaker\'s doubt. 3. The final lines become progressively shorter ("the street / we always walked, / the house / I always / went back to"), which slows the pace and creates a narrowing effect, mirroring the speaker\'s sense of being trapped or confined.',
      marks: 6,
    },
    {
      question: 'Explain the difference between "structure" and "form" in poetry analysis.',
      lines: 4,
      modelAnswer:
        'Form refers to the overall type or pattern of a poem — for example, whether it is a sonnet, free verse, dramatic monologue, or ballad. Structure refers to how the poem is organised internally — including stanza arrangement, line lengths, enjambment, caesura, and where key shifts or turns (volta) occur. Both should be analysed in terms of how they contribute to the poem\'s meaning, not simply identified.',
      marks: 3,
    },
    {
      question: 'In the river poem, why has the poet chosen to write in free verse rather than a fixed form?',
      lines: 5,
      modelAnswer:
        'The poet has chosen free verse because the poem is about a river — something that flows freely without fixed boundaries. A rigid, rhyming structure would contradict the poem\'s message about natural, unstoppable movement. The free verse form mirrors the river itself: the lines flow into each other, building momentum, just as the river "gathers itself, voice by voice, until it roars." The lack of a fixed pattern also reflects the poem\'s deeper message — that powerful things grow organically, not within imposed structures.',
      marks: 4,
    },
    {
      question: 'Why is the second stanza of the river poem shorter than the first? What is the effect of this structural choice?',
      lines: 5,
      modelAnswer:
        'The first stanza describes the river\'s journey from "nothing, a trickle" to a roaring force, building in length and energy. The second stanza is deliberately shorter — just three lines — and shifts from description to personal plea: "Tell me again. I need to remember." This structural contrast suggests the speaker feels small and uncertain, unlike the powerful river. The brevity of the second stanza creates a sense of vulnerability, and the shift from external description to internal need marks a volta — the poem is not really about a river but about the speaker\'s need for resilience and courage.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Structure is often the weakest area in students\' unseen poetry responses — many students skip it entirely or describe features without linking to meaning.',
    'The "Shape the Meaning" starter is a powerful demonstration that can be referenced throughout the unit.',
    'Encourage students to always ask "why here?" when they notice a structural feature — why did the poet place the line break, stanza break, or pause at this specific point?',
    'The progressive shortening of lines at the end of the school poem is a useful model for how structure mirrors emotion.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO2: Structure and form analysis',
    'Structural feature identification',
    'Linking structure to meaning',
    'Analytical paragraph writing',
    'Understanding poetic form',
  ],
}

// ─── Lesson 5: Tone, Mood, and Atmosphere ────────────────────────────────────

const lesson5: LessonPlan = {
  id: 'unseen-poetry-05-tone-mood-atmosphere',
  title: 'Tone, Mood, and Atmosphere in Unseen Poetry',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Distinguish between tone (poet\'s attitude), mood (feeling created), and atmosphere (overall environment).',
    'Identify how poets create and shift tone, mood, and atmosphere through language and structural choices.',
    'Write analytically about tone, mood, and atmosphere with embedded evidence.',
  ],
  successCriteria: [
    'I can define tone, mood, and atmosphere and explain how they differ.',
    'I can identify the tone of an unseen poem and support my interpretation with evidence.',
    'I can explain how specific language and structural choices create mood and atmosphere.',
    'I can identify and analyse a shift in tone within a poem.',
  ],
  keywords: [
    'tone', 'mood', 'atmosphere', 'shift',
    'juxtaposition', 'contrast', 'register', 'voice',
  ],
  starterActivity: {
    title: 'Tone Detectives',
    duration: '7 minutes',
    instructions:
      'Display three short extracts on the board, each describing rain but with a different tone:\n\n1. "The rain hammered the roof like fists on a table, demanding to be heard."\n2. "Rain slid down the window, slow as tears she would not cry."\n3. "The rain came — finally, finally — and the garden opened its mouth and drank."\n\nStudents match each extract to a tone word: angry/threatening, melancholic/sorrowful, joyful/relieved. Discuss: what specific words create each tone? Establish definitions: tone = the poet\'s attitude; mood = the feeling created in the reader; atmosphere = the overall environment or "world" of the poem.',
    differentiation: {
      support: 'Provide the three tone words and ask students to match them to the extracts.',
      core: 'Students identify the tone words independently and explain which specific words create that tone.',
      stretch: 'Students write a fourth rain description with a tone of their choice and challenge the class to identify it.',
    },
    resources: ['Three extracts displayed on board', 'Tone vocabulary word mat'],
  },
  mainActivities: [
    {
      title: 'Tracking Tone and Mood Through a Poem',
      duration: '22 minutes',
      instructions:
        'Students read the following original poem and track how the tone shifts across its three stanzas:\n\n"The fair came every August,\nstinking of toffee apples and diesel,\nits lights spinning wild against the dark.\nWe\'d run between the stalls, pockets\njingling with coins our parents\ncouldn\'t really spare,\nand the music — that tinny, looping music —\nmade everything feel possible.\n\nBut the last night was always different.\nThe rides slowed. The bulbs flickered.\nThe man who sold the candy floss\nlooked tired, and we noticed\nfor the first time\nthat his hands were old.\n\nNow I drive past the empty field\nwhere the fair used to stand,\nand I swear I can smell toffee apples\non the wind — that sick-sweet smell\nthat meant summer was almost over\nand nothing gold could stay."\n\nStudents annotate each stanza with a tone/mood label and evidence. Teacher models Stanza 1: tone is nostalgic and excited — "spinning wild", "everything feel possible", "jingling" create a mood of childhood joy and energy. Students complete Stanzas 2 and 3 independently, then discuss how and why the tone shifts. Key question: what is the overall atmosphere of the poem, considering all three stanzas together?',
      differentiation: {
        support: 'Provide three tone options for each stanza and ask students to choose the best fit with evidence.',
        core: 'Students identify tone, mood, and atmosphere independently for each stanza with supporting quotations.',
        stretch: 'Students write a paragraph explaining how the poet uses the tonal shift across the three stanzas to create a broader message about memory and loss.',
      },
      resources: ['Printed poem copies', 'Tone/mood tracking grid', 'Tone vocabulary word mat'],
    },
    {
      title: 'Writing About Atmosphere — Analytical Practice',
      duration: '20 minutes',
      instructions:
        'Students read a second original poem and write two analytical paragraphs about its atmosphere:\n\n"The house had been waiting.\nYou could tell by the way the door\nstood slightly open,\nby the dust that had arranged itself\nin careful layers on the stairs,\nby the clock in the hallway\nthat had stopped at twenty past three\nand never been corrected.\nThe curtains held the light at arm\'s length.\nThe mirrors showed only the walls.\nAnd in the kitchen, a single cup\nsat on the table,\nhalf full —\nas if someone had meant to come back\nand simply\nforgotten."\n\nParagraph 1 should analyse how language creates atmosphere. Paragraph 2 should analyse how structure contributes to the atmosphere. Teacher provides a model opening for Paragraph 1: "The poet creates an atmosphere of abandonment and suspended time through their language choices. The personification of the house \'waiting\' immediately suggests..." Students continue independently.',
      differentiation: {
        support: 'Provide a paragraph frame for both paragraphs with sentence starters and quotation prompts.',
        core: 'Students write both paragraphs independently, using the model opening as a guide for quality.',
        stretch: 'Students write a third paragraph exploring how the atmosphere connects to a wider theme, such as absence, memory, or regret.',
      },
      resources: ['Printed poem copies', 'Paragraph frame (support tier)', 'Model opening on board'],
    },
  ],
  plenaryActivity: {
    title: 'Atmosphere in One Word',
    duration: '6 minutes',
    instructions:
      'Students select one word to summarise the atmosphere of the house poem and write it on a sticky note with one sentence of justification. Place on the board. Teacher groups similar words together and discusses: which single word best captures the atmosphere? Why is it important to be precise with tone/mood vocabulary in the exam? Highlight the difference between vague words ("sad", "dark") and precise ones ("desolate", "suspended", "haunting").',
    differentiation: {
      support: 'Choose from a shortlist of five atmosphere words.',
      core: 'Select their own word and justify it with a specific quotation.',
      stretch: 'Explain why their word is more accurate than a simpler alternative (e.g., why "suspended" is better than "still").',
    },
  },
  homework:
    'Create a vocabulary bank of at least fifteen precise tone and mood words (not basic words like "happy" or "sad"). For each word, write a brief definition. This will be a reference resource for the rest of the unit.',
  worksheetQuestions: [
    {
      question: 'Read the fair poem. Identify the tone of each stanza and provide evidence to support your choices.',
      lines: 8,
      modelAnswer:
        'Stanza 1 has a tone of nostalgic excitement — words like "spinning wild", "jingling", and "everything feel possible" create a mood of childhood energy and wonder. Stanza 2 shifts to a tone of disillusionment and sadness — "The rides slowed. The bulbs flickered" uses short, deflating sentences, and noticing the candy floss seller\'s old hands signals a loss of innocence. Stanza 3 is wistful and elegiac — the speaker drives past an "empty field" and can "smell toffee apples on the wind", suggesting the memory lingers painfully. The final phrase "nothing gold could stay" encapsulates a tone of resigned acceptance that beautiful things are temporary.',
      marks: 6,
    },
    {
      question: 'How does the poet create an atmosphere of abandonment in the house poem? Analyse two language features.',
      lines: 6,
      modelAnswer:
        'The poet creates an atmosphere of abandonment through personification and carefully chosen detail. The dust has "arranged itself in careful layers", personifying it as something deliberate and patient — it has had time to settle undisturbed, emphasising how long the house has been empty. The curtains "held the light at arm\'s length" personifies them as actively rejecting brightness, suggesting the house exists in a state of chosen darkness or mourning. Both details create the sense that the house itself is a character, patiently waiting for someone who will not return.',
      marks: 4,
    },
    {
      question: 'Explain the difference between tone, mood, and atmosphere. Use examples from either poem.',
      lines: 5,
      modelAnswer:
        'Tone is the poet\'s attitude toward the subject — in the fair poem, the tone shifts from affectionate nostalgia to resigned sadness. Mood is the emotional feeling created in the reader — the mood of Stanza 1 is joyful and energetic, while Stanza 3 creates a mood of melancholy. Atmosphere is the overall environment or "world" of the poem — the house poem creates an atmosphere of abandonment and suspended time through its setting and imagery. While these terms overlap, tone focuses on the writer, mood on the reader, and atmosphere on the world of the poem itself.',
      marks: 4,
    },
    {
      question: 'Why is it important to identify tonal shifts within a poem? How does this help your analysis?',
      lines: 4,
      modelAnswer:
        'Identifying tonal shifts is important because it shows the examiner you understand that poems are not static — they develop and change. A shift in tone often reveals the poet\'s key message or creates emotional impact through contrast. For example, the fair poem shifts from excited nostalgia to sadness, which emphasises the theme of lost innocence. Commenting on how and why tone changes demonstrates sophisticated reading and allows you to discuss the poet\'s structural choices, linking AO2 analysis to AO1 interpretation.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'Students often confuse tone, mood, and atmosphere — the starter activity helps establish clear definitions early.',
    'A tone vocabulary word mat should be available for all unseen poetry lessons from this point onwards.',
    'The fair poem is particularly effective for demonstrating tonal shifts — consider using it as a reference text throughout the unit.',
    'Encourage students to avoid vague tone words ("nice", "bad", "dark") and use precise vocabulary instead.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO1: Interpretation',
    'AO2: Language and structure analysis',
    'Tone and mood identification',
    'Analytical vocabulary',
    'Paragraph writing',
  ],
}

// ─── Lesson 6: Imagery and Sensory Language ──────────────────────────────────

const lesson6: LessonPlan = {
  id: 'unseen-poetry-06-imagery-sensory-language',
  title: 'Imagery and Sensory Language in Unseen Poetry',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse different types of imagery (visual, auditory, tactile, olfactory, gustatory) in unseen poems.',
    'Explain how poets use sensory language to create vivid experiences for the reader.',
    'Write analytical paragraphs about imagery that explore both literal and figurative meanings.',
  ],
  successCriteria: [
    'I can identify at least three types of sensory imagery in an unseen poem.',
    'I can explain how specific images create meaning beyond their literal description.',
    'I can analyse how imagery contributes to the poem\'s themes and message.',
    'I can write about imagery using the language of effects on the reader.',
  ],
  keywords: [
    'imagery', 'visual', 'auditory', 'tactile',
    'olfactory', 'gustatory', 'figurative', 'sensory language',
  ],
  starterActivity: {
    title: 'Five Senses Challenge',
    duration: '7 minutes',
    instructions:
      'Display the word "BONFIRE" on the board. Students have two minutes to write one descriptive sentence for each of the five senses: sight, sound, touch, smell, taste. Share examples and discuss: which sense created the most vivid image? Why? Establish: poets use sensory language deliberately to make the reader experience the poem, not just understand it. Today\'s lesson explores how to analyse imagery and explain its effects.',
    differentiation: {
      support: 'Provide sentence starters: "It looked like... It sounded like... It felt like..."',
      core: 'Students write original sensory sentences and identify which is most effective.',
      stretch: 'Students write sentences that combine two senses (synaesthesia) and explain the effect.',
    },
    resources: ['Prompt word on board', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Imagery Analysis — Seeing Beyond the Literal',
      duration: '22 minutes',
      instructions:
        'Students read the following original poem and identify all examples of sensory imagery, categorising each by sense type:\n\n"The bakery on the corner breathes\nits warm yeast breath into the street\nat half past five each morning,\nand the whole road wakes\nwith flour on its tongue.\n\nMr Karim shapes the dough\nwith hands that know the weight of hunger,\nrolling, pressing, folding\nlike a man writing a letter\nhe knows by heart.\nThe oven roars its orange throat\nand swallows everything he offers.\n\nBy seven, the queue stretches\npast the newsagent, past the barber,\npast the bench where old men sit\nand tear the bread with careful fingers,\nblowing steam like prayers\ninto the cold morning air."\n\nTeacher models analysis of "warm yeast breath" — visual and olfactory imagery working together; personification of the bakery as a living, breathing entity; the word "breath" suggests intimacy and life. Students annotate remaining imagery and complete a table: Image | Sense(s) | Literal Meaning | Figurative/Deeper Meaning. Class discussion focuses on how the imagery creates a portrait of community and care.',
      differentiation: {
        support: 'Provide the imagery table with the "Image" column pre-filled; students complete the remaining columns.',
        core: 'Students identify images independently, categorise by sense, and explain figurative meaning.',
        stretch: 'Students write a paragraph explaining how the poet uses imagery to create a semantic field of nourishment and how this connects to a broader theme of community.',
      },
      resources: ['Printed poem copies', 'Imagery table worksheet', 'Pre-filled table (support tier)'],
    },
    {
      title: 'Writing About Imagery — Analytical Paragraphs',
      duration: '20 minutes',
      instructions:
        'Students read a second original poem and write two analytical paragraphs about its use of imagery:\n\n"After the storm, the garden lay stunned,\nits roses flat as fallen soldiers,\nthe lawn a swamp of mud and petals.\nA snail traced its silver signature\nacross the path, slow and certain,\nwhile the birds — cautious now —\nreturned one note at a time,\ntesting the air with half-songs\nas if the sky might break again.\n\nBut look: already the sun\nwas threading gold through the clouds,\nand the earth, still trembling,\nopened its dark mouth\nand swallowed the rain\nlike medicine."\n\nParagraph 1: analyse one example of visual imagery and explain its effect. Paragraph 2: analyse one example of auditory or tactile imagery and explain its effect. Teacher provides success criteria: each paragraph should include a quotation, technique identification, word-level zoom, and a comment on the reader\'s response.',
      differentiation: {
        support: 'Provide two pre-selected quotations and a paragraph frame with sentence starters.',
        core: 'Students select their own quotations and write two paragraphs meeting all success criteria.',
        stretch: 'Students write a third paragraph analysing how the imagery shifts from destruction to recovery and what this suggests about the poem\'s message.',
      },
      resources: ['Printed poem copies', 'Success criteria checklist', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Most Powerful Image',
    duration: '6 minutes',
    instructions:
      'Students nominate the single most powerful image from either poem and explain in one sentence why it is effective. Nominated images are collected on the board. Class votes on the most powerful. Teacher reinforces: in the exam, you do not need to write about every image — select the most interesting ones and analyse them in depth. Quality of analysis always beats quantity.',
    differentiation: {
      support: 'Students choose from three pre-selected images and complete a sentence frame for their explanation.',
      core: 'Students select and justify their choice independently.',
      stretch: 'Students explain why their chosen image is more effective than a close alternative from the same poem.',
    },
  },
  homework:
    'Write a short original poem (eight to twelve lines) that includes at least three different types of sensory imagery. Annotate your own poem, labelling each type of imagery and explaining why you chose it.',
  worksheetQuestions: [
    {
      question: 'Read the bakery poem. Identify three examples of sensory imagery, state which sense each appeals to, and explain the effect.',
      lines: 8,
      modelAnswer:
        '1. "Warm yeast breath" — olfactory and tactile imagery. The personification of the bakery "breathing" creates a sense of the shop as a living, nurturing presence. The warmth is both literal (from the oven) and figurative (suggesting comfort and care). 2. "The oven roars its orange throat" — auditory and visual imagery. The oven is personified as a roaring creature, suggesting both power and appetite. "Orange throat" combines colour and body to create a vivid, almost mythical image. 3. "Blowing steam like prayers" — visual imagery with a simile. Comparing steam to prayers elevates the simple act of eating bread to something sacred, suggesting the bread is not just food but something spiritual and communal.',
      marks: 6,
    },
    {
      question: 'Analyse the image "A snail traced its silver signature across the path" from the storm poem.',
      lines: 5,
      modelAnswer:
        'The poet uses visual imagery and metaphor to describe the snail\'s trail as a "silver signature". The word "signature" transforms the snail\'s trail from something mundane into something deliberate and personal — as if the snail is leaving its mark or claiming ownership of the garden after the storm. The word "silver" adds a sense of preciousness and beauty to what is literally slime. The verb "traced" suggests careful, intentional movement, contrasting with the violence of the storm. This image contributes to the poem\'s theme of recovery: even the smallest creature is calmly reasserting its presence after chaos.',
      marks: 4,
    },
    {
      question: 'What is the difference between literal and figurative imagery? Use an example from the storm poem.',
      lines: 4,
      modelAnswer:
        'Literal imagery describes something as it actually is — for example, "the lawn a swamp of mud and petals" creates a visual picture of the real, physical state of the garden after the storm. Figurative imagery uses comparison or symbolism to suggest deeper meaning — for example, the earth "swallowed the rain like medicine" is a simile that figuratively presents the rain as healing, suggesting the storm, though destructive, was ultimately beneficial. The most effective analysis discusses both levels: what the image literally shows and what it figuratively suggests.',
      marks: 3,
    },
    {
      question: 'How does the poet use imagery in the bakery poem to create a sense of community? Write a full paragraph.',
      lines: 8,
      modelAnswer:
        'The poet uses a rich pattern of sensory imagery to transform a simple bakery into the heart of a community. The bakery "breathes its warm yeast breath into the street", using olfactory imagery and personification to suggest the shop nurtures the whole neighbourhood — its warmth literally reaches out into the public space. Mr Karim shapes dough "like a man writing a letter he knows by heart", a simile that elevates his labour from routine to something deeply personal and caring. The final image of old men "blowing steam like prayers" uses visual imagery to connect the act of eating bread with spiritual communion. Throughout, the imagery appeals to multiple senses — smell, touch, sight, sound — immersing the reader in the scene and suggesting that this bakery provides not just physical nourishment but emotional and communal sustenance.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Students often struggle to move beyond "the poet uses visual imagery to help the reader picture the scene" — push for specificity.',
    'The bakery poem works well for exploring how imagery can convey social and cultural themes, not just descriptive ones.',
    'The creative homework (writing their own poem) helps students understand imagery from the poet\'s perspective.',
    'Remind students that in the exam, they should select two or three powerful images to analyse in depth rather than listing every image superficially.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO2: Language analysis',
    'Imagery identification and analysis',
    'Sensory language exploration',
    'Analytical paragraph writing',
    'Figurative vs literal meaning',
  ],
}

// ─── Lesson 7: Writing About Effects on the Reader ───────────────────────────

const lesson7: LessonPlan = {
  id: 'unseen-poetry-07-effects-on-reader',
  title: 'Writing About Effects on the Reader',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand what "effect on the reader" means in the context of AQA\'s mark scheme.',
    'Develop a repertoire of phrases for expressing effects beyond "this makes the reader feel...".',
    'Write analytical paragraphs that convincingly articulate the impact of the poet\'s choices on the reader.',
  ],
  successCriteria: [
    'I can explain the effect of a poet\'s choices on the reader with specificity and nuance.',
    'I can use a range of phrases to express effects, avoiding repetition of "this makes the reader feel...".',
    'I can link effects on the reader to the poet\'s purpose and wider message.',
    'I can distinguish between weak, competent, and strong effect statements.',
  ],
  keywords: [
    'effect', 'reader response', 'impact', 'evoke',
    'convey', 'suggest', 'imply', 'provoke',
  ],
  starterActivity: {
    title: 'Weak vs Strong — Spot the Difference',
    duration: '8 minutes',
    instructions:
      'Display two responses about the same quotation on the board:\n\nWeak: "The poet uses a metaphor. This makes the reader feel sad."\nStrong: "By comparing the empty chair to \'a mouth that has forgotten how to speak\', the poet evokes a profound sense of absence — the chair becomes a symbol of silenced conversation and lost companionship. The reader is left with an unsettling awareness that the person who once sat there is not merely gone but has been erased from daily life."\n\nStudents identify three specific differences between the responses. Draw out: the strong response names the effect precisely, explains why the reader responds that way, and connects to the poem\'s wider meaning. Weak responses identify a technique and slap on a vague emotion.',
    differentiation: {
      support: 'Provide three prompt questions: "Which response quotes the poem? Which explains why the reader feels that way? Which connects to a bigger idea?"',
      core: 'Students identify three differences independently and note what makes the strong response effective.',
      stretch: 'Students rewrite the weak response to match the quality of the strong one, using different vocabulary.',
    },
    resources: ['Two responses displayed on board'],
  },
  mainActivities: [
    {
      title: 'The Effects Toolkit — Beyond "Makes the Reader Feel"',
      duration: '20 minutes',
      instructions:
        'Distribute the Effects Toolkit — a handout listing twenty alternative phrases for expressing effect on the reader, grouped by type:\n\nEmotional effects: "evokes a sense of...", "creates a feeling of...", "provokes discomfort in the reader because..."\nIntellectual effects: "forces the reader to confront...", "challenges the reader\'s assumption that...", "invites the reader to consider..."\nImaginative effects: "immerses the reader in...", "conjures an image of...", "transports the reader to..."\nStructural effects: "creates a sense of urgency by...", "slows the reader\'s pace, encouraging reflection on...", "disrupts the reader\'s expectations by..."\n\nStudents practise using these phrases by writing effect statements for five quotations from the following original poem:\n\n"I found your handwriting in a book today —\na margin note in blue,\nsomething about the weather,\nsomething about next Tuesday,\nand your name, underlined twice,\nas if you were afraid of being forgotten.\n\nI closed the book.\nI could not read another page\nwithout hearing your voice\nrise from the ink\nlike smoke from a candle\nsomeone has just blown out."\n\nFor each quotation, students write one sentence using a phrase from the Effects Toolkit.',
      differentiation: {
        support: 'Provide five pre-selected quotations and match each to a suggested phrase from the toolkit.',
        core: 'Students select their own quotations and choose appropriate phrases independently.',
        stretch: 'Students write two different effect statements for the same quotation, demonstrating range of interpretation.',
      },
      resources: ['Effects Toolkit handout', 'Printed poem copies', 'Pre-selected quotations sheet (support tier)'],
    },
    {
      title: 'Full Paragraph Practice — Articulating Effects',
      duration: '22 minutes',
      instructions:
        'Students write three full analytical paragraphs on a second original poem, with the specific focus of articulating effects on the reader:\n\n"The classroom is empty now.\nChairs stacked, tables wiped,\nthe whiteboard cleaned of everything\nexcept a smudge\nwhere someone leaned too close.\n\nOutside, the playground cools.\nA skipping rope lies coiled\nlike a sleeping snake\nbeside the drain.\nThe goalposts cast long shadows\nacross the grass\nas if the game is still being played\nby children made of light.\n\nSomewhere, a caretaker\nturns a key,\nand the school holds its breath\nuntil morning."\n\nEach paragraph must: (1) embed a quotation, (2) identify a technique, (3) analyse word choice, and (4) articulate the effect on the reader using the Effects Toolkit. After writing, students highlight every effect statement in their work. Teacher circulates and identifies strong examples to share with the class.',
      differentiation: {
        support: 'Provide a paragraph template: "The poet uses [technique] in the quotation [quote]. The word [word] suggests [meaning]. This [effect phrase from toolkit] because [explanation]."',
        core: 'Students write three paragraphs independently, using varied effect phrases.',
        stretch: 'Students add a sentence to each paragraph considering how the effect contributes to the poem\'s overall impact and message.',
      },
      resources: ['Printed poem copies', 'Effects Toolkit handout', 'Paragraph template (support tier)', 'Highlighters'],
    },
  ],
  plenaryActivity: {
    title: 'Effect Statement Gallery Walk',
    duration: '5 minutes',
    instructions:
      'Students leave their books open on their desks. Class does a gallery walk, reading peers\' effect statements. Each student places a sticky dot next to the most convincing effect statement they read (not their own). Teacher identifies the three most-dotted responses and reads them aloud, asking the class to identify what makes them effective. Reinforce: the examiner is looking for you to explain how the poem affects the reader and why — this is where the highest marks live.',
    differentiation: {
      support: 'Students look specifically for effect statements that use toolkit phrases effectively.',
      core: 'Students evaluate which effect statements are most convincing and consider why.',
      stretch: 'Students note one effect statement that could be improved and mentally draft a better version.',
    },
  },
  homework:
    'Rewrite your three paragraphs from today\'s lesson, improving every effect statement. Aim to use at least three different phrases from the Effects Toolkit. Highlight your effect statements in a different colour.',
  worksheetQuestions: [
    {
      question: 'Read the handwriting poem. Write an effect statement for the quotation "your name, underlined twice, as if you were afraid of being forgotten."',
      lines: 5,
      modelAnswer:
        'The detail of the name being "underlined twice" evokes a poignant sense of vulnerability — the act of underlining suggests a desperate need for permanence, as if the person sensed their own impermanence and tried to anchor themselves to the page. The phrase "afraid of being forgotten" forces the reader to confront the uncomfortable reality that people we love can gradually fade from our memory. This creates a feeling of guilt and urgency in the reader, prompting us to consider whether we do enough to preserve the memory of those who matter to us.',
      marks: 4,
    },
    {
      question: 'Write an analytical paragraph about the classroom poem that focuses on the effect of the imagery "children made of light."',
      lines: 8,
      modelAnswer:
        'The poet describes the goalposts casting "long shadows across the grass / as if the game is still being played / by children made of light." This haunting visual image conjures the ghostly after-impressions of children who have left the playground but whose presence lingers in the fading evening light. The phrase "children made of light" evokes a sense of ethereal beauty and impermanence — these are not real children but memory-children, shadows of energy and joy that existed in this space. The reader is left with a bittersweet awareness of time passing: the game is over, the children have gone home, but the playground still holds the echo of their play. This image immerses the reader in a moment of quiet nostalgia, suggesting that spaces absorb the life that fills them and release it slowly, like warmth from a stone after the sun has set.',
      marks: 5,
    },
    {
      question: 'List five alternative phrases to "this makes the reader feel sad" and explain when each would be most appropriate.',
      lines: 6,
      modelAnswer:
        '1. "This evokes a sense of melancholy" — use when the sadness is gentle and reflective, not dramatic. 2. "This creates a feeling of profound loss" — use when the poem deals with death, absence, or endings. 3. "This provokes an uncomfortable awareness of..." — use when the poem forces the reader to confront a difficult truth. 4. "The reader is left with a lingering sense of..." — use when the effect builds gradually and stays with the reader after the poem ends. 5. "This unsettles the reader by suggesting..." — use when the sadness comes from something unexpected or disturbing rather than straightforwardly sorrowful.',
      marks: 5,
    },
    {
      question: 'Why is it important to explain effects on the reader in your unseen poetry response? How does this help you access higher marks?',
      lines: 4,
      modelAnswer:
        'AQA\'s mark scheme for unseen poetry rewards "thoughtful consideration of the methods used" and their effects. Simply identifying techniques without explaining their impact on the reader caps a response at the lower bands. To access higher marks, students must show they understand why a poet made specific choices and how those choices shape the reader\'s experience. Explaining effects demonstrates critical engagement rather than surface-level observation, and it shows the examiner that the student is reading actively and thoughtfully, not just spotting features from a checklist.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'The Effects Toolkit should become a key reference document — encourage students to keep it in their folders and use it in every subsequent lesson.',
    'The most common weak habit is "the poet uses X which makes the reader feel Y" — break this pattern early and consistently.',
    'Model the difference between emotional, intellectual, and imaginative effects — students tend to default to emotional only.',
    'The handwriting poem often generates personal responses — allow a brief moment for this but redirect to analytical writing.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO1: Interpretation',
    'AO2: Analysis of effects',
    'Analytical writing quality',
    'Effect statement variety',
    'Reader response articulation',
  ],
}

// ─── Lesson 8: Comparison Skills — Two Unseen Poems ─────────────────────────

const lesson8: LessonPlan = {
  id: 'unseen-poetry-08-comparison-skills',
  title: 'Comparison Skills: Responding to Two Unseen Poems',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the requirements of AQA Paper 2, Section C, Question 2 (comparison of two unseen poems).',
    'Develop strategies for identifying similarities and differences between two poems.',
    'Write comparative paragraphs using appropriate connectives and integrated evidence.',
  ],
  successCriteria: [
    'I can identify meaningful points of comparison between two unseen poems.',
    'I can structure a comparative paragraph that discusses both poems with embedded evidence.',
    'I can use comparative connectives fluently (similarly, in contrast, whereas, however, likewise).',
    'I can compare methods as well as themes and ideas.',
  ],
  keywords: [
    'comparison', 'contrast', 'similarly', 'whereas',
    'methods', 'connective', 'integrated', 'parallel',
  ],
  starterActivity: {
    title: 'Quick Comparison — Two Images',
    duration: '7 minutes',
    instructions:
      'Display two single-line descriptions of the sea:\n\nLine A: "The sea was a lullaby, rocking the boats to sleep."\nLine B: "The sea chewed the coastline with its yellow teeth."\n\nStudents write three comparison sentences using: "Both lines...", "Line A... whereas Line B...", "While Line A presents the sea as..., Line B suggests...". Share examples. Establish: comparison is not two separate analyses — it is about making connections and distinctions within the same sentence or paragraph.',
    differentiation: {
      support: 'Provide the three sentence starters and ask students to complete them.',
      core: 'Students write three comparison sentences independently using different connectives.',
      stretch: 'Students explain which line they find more effective and why, using comparative language.',
    },
    resources: ['Two lines displayed on board', 'Comparative connectives list'],
  },
  mainActivities: [
    {
      title: 'Comparing Two Poems — Finding Connections',
      duration: '22 minutes',
      instructions:
        'Students read two original poems about fathers and identify points of comparison:\n\nPoem A: "My Father\'s Shed"\n"My father\'s shed smelled of turpentine\nand sawdust and the slow rot\nof things he meant to fix.\nHe\'d stand for hours at the workbench,\nsanding the same plank smooth\nas if the wood might forgive him\nfor every rough edge in the house.\nI\'d watch from the doorway,\nnot daring to enter,\nand he\'d nod — just once —\nwhich meant: you can stay.\nThat was his kindness:\na nod,\na planed surface,\na door left open."\n\nPoem B: "What My Father Taught Me"\n"My father taught me how to hold a fish\nwithout flinching — thumb behind the gills,\nfirm enough to keep, gentle enough to free.\nHe taught me how to read the river:\nwhere the current hides its strength,\nwhere the rocks pretend to sleep.\nHe never once said \'I love you\'\nbut he showed me where the kingfishers nest\nand let me name the boat.\nI know now that love\nis not always a sentence.\nSometimes it is a river\nyou teach someone else to read."\n\nUsing a comparison grid, students identify similarities and differences across five categories: subject matter, tone, imagery, structure, and message. Teacher models the first row (subject matter): "Both poems are about a father-child relationship where love is shown through actions rather than words. However, Poem A focuses on the father\'s solitary work and the child\'s observation from a distance, whereas Poem B emphasises shared activity and taught skills."',
      differentiation: {
        support: 'Provide a partially completed comparison grid with prompts for each category.',
        core: 'Students complete the comparison grid independently with evidence for each point.',
        stretch: 'Students add a sixth row: "overall effect on the reader" and compare how each poem makes them feel and why.',
      },
      resources: ['Printed copies of both poems', 'Comparison grid worksheet', 'Partially completed grid (support tier)'],
    },
    {
      title: 'Writing Comparative Paragraphs',
      duration: '20 minutes',
      instructions:
        'Teacher models a comparative paragraph structure: Point of comparison → Poem A evidence and analysis → Comparative connective → Poem B evidence and analysis → Overall comparison statement. Model paragraph: "Both poets present fathers who express love through actions rather than words. In Poem A, the father\'s affection is conveyed through the understated gesture of a nod — \'just once — which meant: you can stay\', suggesting his love is rationed and restrained but genuine. Similarly, the father in Poem B \'never once said I love you\' but instead \'showed me where the kingfishers nest\', replacing verbal declarations with shared experiences in nature. However, while Poem A\'s father communicates through permission (allowing the child to stay), Poem B\'s father communicates through teaching and inclusion, which creates a warmer, more generous portrait of paternal love."\n\nStudents write two comparative paragraphs of their own, focusing on: (1) imagery and (2) tone. Peer assessment using a checklist: Does the paragraph discuss both poems? Does it use comparative connectives? Does it analyse methods, not just themes?',
      differentiation: {
        support: 'Provide a paragraph frame with blanks for quotations, analysis, and connectives.',
        core: 'Students write two comparative paragraphs independently following the modelled structure.',
        stretch: 'Students write a third paragraph comparing the structural choices in both poems and their effects.',
      },
      resources: ['Model paragraph on board', 'Comparative connectives handout', 'Paragraph frame (support tier)', 'Peer assessment checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Comparison Dos and Don\'ts',
    duration: '6 minutes',
    instructions:
      'Display five statements and students sort them into "Do" or "Don\'t":\n1. "Write about Poem A then write about Poem B separately" — Don\'t.\n2. "Use connectives like \'similarly\', \'in contrast\', \'whereas\'" — Do.\n3. "Compare methods as well as themes" — Do.\n4. "Write the same amount about both poems" — Don\'t (more on Poem B is fine as it\'s shorter).\n5. "Make sure every paragraph mentions both poems" — Do.\nTeacher clarifies: the comparison question is only worth 8 marks, so two or three well-structured comparative paragraphs are sufficient.',
    differentiation: {
      support: 'Students sort the statements with teacher guidance.',
      core: 'Students sort independently and explain their reasoning.',
      stretch: 'Students add two more "Do" or "Don\'t" statements of their own based on what they learned.',
    },
  },
  homework:
    'Reread both poems about fathers. Write one further comparative paragraph focusing on a point of comparison we did not cover in class (e.g., use of natural imagery, the child\'s perspective, the poem\'s ending).',
  worksheetQuestions: [
    {
      question: 'Identify three similarities and two differences between Poem A and Poem B.',
      lines: 8,
      modelAnswer:
        'Similarities: 1. Both poems are about father-child relationships where love is expressed through actions rather than words. 2. Both poems use imagery from the father\'s world (woodwork in Poem A, fishing/river in Poem B) to symbolise the relationship. 3. Both speakers reflect on their fathers from an adult perspective, understanding now what they could not fully appreciate as children. Differences: 1. Poem A presents the father as solitary and distant — the child watches "from the doorway, not daring to enter" — whereas Poem B\'s father actively includes the child through teaching. 2. Poem A has a more restrained, melancholic tone, while Poem B ends with a warm, philosophical reflection on the nature of love.',
      marks: 5,
    },
    {
      question: 'Write a comparative paragraph about how the two poets use imagery differently to present the father figures.',
      lines: 8,
      modelAnswer:
        'Both poets use imagery from the father\'s world to represent his character and the nature of his love. In Poem A, the father is associated with the imagery of his shed — "turpentine", "sawdust", and "sanding the same plank smooth" — which suggests repetitive, solitary labour and a man who expresses care through making things right, "as if the wood might forgive him." This creates an image of a father who channels his emotions into physical work rather than words. In contrast, Poem B draws its imagery from the natural world — rivers, fish, kingfishers — suggesting a father whose love is expressed through sharing knowledge of the living world. Whereas Poem A\'s shed imagery feels enclosed and isolated, Poem B\'s river imagery is open and flowing, which creates a warmer, more expansive sense of the father-child bond.',
      marks: 5,
    },
    {
      question: 'Compare the endings of the two poems. How does each poet conclude their poem and what is the effect?',
      lines: 6,
      modelAnswer:
        'Poem A concludes with a list: "a nod, a planed surface, a door left open." The stripped-back, minimal structure mirrors the father\'s restrained character — his love is expressed in small, practical gestures. The "door left open" is the most significant detail, ending the poem on an image of quiet invitation that the reader must interpret. Poem B, by contrast, ends with a metaphorical reflection: "love is not always a sentence. Sometimes it is a river you teach someone else to read." This is more overtly philosophical, directly articulating the poem\'s message. While Poem A leaves the reader to infer the father\'s love, Poem B states it explicitly through metaphor, creating a more emotionally resolved conclusion.',
      marks: 4,
    },
    {
      question: 'What are the key features of a successful comparative paragraph? List four.',
      lines: 4,
      modelAnswer:
        '1. Both poems are discussed within the same paragraph, not separately. 2. Comparative connectives (similarly, in contrast, whereas, however) are used to link the analysis of the two poems. 3. The paragraph compares methods (how the poets write) as well as themes (what they write about). 4. Evidence is embedded from both poems, with specific quotations and word-level analysis rather than general statements.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The comparison question (Paper 2, Section C, Q2) is worth 8 marks — students should spend approximately 15-20 minutes on it in the exam.',
    'The most common error is writing about each poem separately. Emphasise integrated comparison from the start.',
    'The father poems pair well because they share a theme but differ in tone, imagery, and approach — this gives students meaningful points of comparison.',
    'Remind students that they should focus on methods (how the poets write) rather than just themes (what the poems are about) to access higher bands.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO1: Comparison of ideas',
    'AO2: Comparison of methods',
    'Comparative writing structure',
    'Use of connectives',
    'Integrated evidence',
  ],
}

// ─── Lesson 9: Timed Practice — Section C Approach ──────────────────────────

const lesson9: LessonPlan = {
  id: 'unseen-poetry-09-timed-practice',
  title: 'Timed Practice: Section C Approach and Strategy',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the timing, structure, and mark allocation of AQA Paper 2, Section C.',
    'Develop a time management strategy for reading, planning, and writing under exam conditions.',
    'Complete a timed response to a single unseen poem question (Question 1 practice).',
  ],
  successCriteria: [
    'I can allocate my time effectively across reading, planning, and writing for a 24-mark question.',
    'I can produce a planned, structured response to an unseen poem within 30 minutes.',
    'I can apply the skills from previous lessons (annotation, technique analysis, word-level zoom, effects) under timed conditions.',
    'I can self-assess my response against the AQA mark scheme descriptors.',
  ],
  keywords: [
    'time management', 'mark allocation', 'planning',
    'annotation', 'paragraph structure', 'mark scheme', 'self-assessment',
  ],
  starterActivity: {
    title: 'Section C — What You Need to Know',
    duration: '8 minutes',
    instructions:
      'Display the Section C breakdown on the board: Question 1 = 24 marks (one unseen poem); Question 2 = 8 marks (comparison with a second poem). Total time recommended: 45 minutes (30 for Q1, 15 for Q2). Discuss: "If Question 1 is worth 24 marks and you have 30 minutes, how much is each minute worth?" (0.8 marks per minute). Ask: "What is the biggest risk in this section?" Draw out: running out of time, spending too long annotating and not enough writing, writing about the second poem before finishing the first. Distribute the timing guide: 5 minutes reading and annotating, 3 minutes planning, 22 minutes writing.',
    differentiation: {
      support: 'Provide a pre-printed timing guide as a bookmark-sized card students can keep.',
      core: 'Students create their own timing plan based on the breakdown provided.',
      stretch: 'Students consider how to adapt the timing if they find the poem particularly challenging or straightforward.',
    },
    resources: ['Section C breakdown slide', 'Timing guide handout'],
  },
  mainActivities: [
    {
      title: 'Guided Annotation Under Time Pressure',
      duration: '10 minutes',
      instructions:
        'Students are given five minutes to read and annotate the following original poem. Teacher times strictly and calls out each minute. After five minutes, pens down.\n\n"The allotment in November\nis a museum of failed ambitions:\nrunner beans collapsed on their canes\nlike drunks against lamp posts,\ncourgettes swollen to absurd proportions,\nforgotten and now rotting\nwith the dignified patience of old men\nwaiting for a bus that will not come.\n\nBut here — a row of winter kale,\ndefiantly green, its ruffled leaves\nraised like fists against the frost.\nAnd there — a robin on the fence post,\nits chest a small furnace\nburning through the grey.\n\nThe gardener leans on his fork,\nbreath clouding in the cold,\nand smiles.\nHe has learned what the kale knows:\nthat stubbornness\nis its own kind of beauty."\n\nTeacher then leads a three-minute planning discussion: what are the three or four most interesting features to write about? How will you structure your response? Students create a quick bullet-point plan. Key message: you do not need to write about everything — select the best material and analyse it thoroughly.',
      differentiation: {
        support: 'Provide an annotation checklist: "Have you identified the subject? Tone? Two techniques? One interesting word?"',
        core: 'Students annotate freely and create their own plan.',
        stretch: 'Students identify a through-line or argument for their response (e.g., "the poet contrasts decay with resilience to suggest...").',
      },
      resources: ['Printed poem copies', 'Timer', 'Annotation checklist (support tier)'],
    },
    {
      title: 'Timed Writing — 22 Minutes',
      duration: '30 minutes',
      instructions:
        'Students write their response to the question: "In \'The Allotment in November\', how does the poet present ideas about resilience and beauty? You should consider the poet\'s use of language, structure, and form." Strict timed conditions: 22 minutes writing, no talking, no support materials except the poem and their plan. Teacher displays a countdown timer. After 22 minutes, students stop writing. Remaining eight minutes used for self-assessment: students re-read their response and highlight evidence of each skill: quotation use (yellow), technique identification (green), word-level analysis (blue), effect on reader (pink). Students then use a simplified mark scheme grid to estimate their band.',
      differentiation: {
        support: 'Provide a response opening: "The poet presents resilience and beauty through a contrast between decay and defiance. In the first stanza..." Students continue from this point.',
        core: 'Students write a full response independently within the time limit.',
        stretch: 'Students aim to include a comment on structure or form as well as language analysis, and consider the poet\'s overall message in their conclusion.',
      },
      resources: ['Lined paper or exam booklets', 'Countdown timer', 'Simplified mark scheme grid', 'Coloured highlighters for self-assessment'],
    },
  ],
  plenaryActivity: {
    title: 'Reflection — What Went Well, Even Better If',
    duration: '7 minutes',
    instructions:
      'Students complete a reflection slip with three prompts: (1) "What went well — one thing I did effectively under timed conditions." (2) "Even better if — one thing I need to improve before the exam." (3) "My estimated band from self-assessment and why." Teacher collects reflection slips to inform planning for the final lesson. Share two or three reflections aloud. Reinforce: timed practice is about building stamina and strategy, not producing a perfect response. The goal is to produce a good response under pressure.',
    differentiation: {
      support: 'Provide sentence starters for each reflection prompt.',
      core: 'Students complete the reflection independently with specific detail.',
      stretch: 'Students set a specific, measurable target for the next timed practice.',
    },
  },
  homework:
    'Rewrite your timed response at home without time pressure. Focus on improving the areas you identified in your "Even Better If" reflection. Bring both versions (timed and improved) to the next lesson for comparison.',
  worksheetQuestions: [
    {
      question: 'How does the poet use contrast in the allotment poem? Identify and analyse one key contrast.',
      lines: 6,
      modelAnswer:
        'The poet creates a central contrast between decay and resilience. The first stanza presents the allotment in November as a place of failure and decline: "runner beans collapsed on their canes like drunks against lamp posts" and courgettes "rotting with the dignified patience of old men." However, the second stanza introduces a volta with "But here" — the winter kale stands "defiantly green", its leaves "raised like fists against the frost." This contrast is significant because it suggests that beauty and purpose can be found even in decline, and that resilience (stubbornness) is itself a form of beauty. The poet uses the allotment as a metaphor for life: not everything thrives, but what endures deserves admiration.',
      marks: 5,
    },
    {
      question: 'Analyse the simile "like drunks against lamp posts" and explain its effect on the reader.',
      lines: 5,
      modelAnswer:
        'The simile compares collapsed runner beans to "drunks against lamp posts", which creates a darkly humorous visual image. The word "drunks" has connotations of loss of control, dignity, and purpose — the beans, once upright and productive, have slumped into a state of comic ruin. This personification humanises the plants and creates a tone of affectionate mockery rather than despair. The reader is invited to smile at the image rather than feel sadness, which establishes the poem\'s overall tone: warm, wry, and ultimately life-affirming despite the November setting.',
      marks: 4,
    },
    {
      question: 'Explain the significance of the final three lines: "He has learned what the kale knows: / that stubbornness / is its own kind of beauty."',
      lines: 5,
      modelAnswer:
        'The final lines reveal the poem\'s central message: that persistence and determination are beautiful in themselves, regardless of outcome. By stating that the gardener "has learned what the kale knows", the poet elevates the vegetable to a teacher and the gardener to a student, reversing the expected hierarchy between humans and plants. The word "stubbornness" is typically negative, implying unreasonable persistence, but the poet redefines it as "its own kind of beauty" — a quiet, unshowy form of beauty found in refusal to give up. The short final line creates emphasis, leaving the reader with a philosophical reflection that extends beyond gardening to life itself.',
      marks: 4,
    },
    {
      question: 'List four steps in your timed approach strategy for the unseen poetry question. Explain why each step is important.',
      lines: 6,
      modelAnswer:
        '1. Read the poem twice (2-3 minutes) — the first reading establishes literal meaning; the second identifies techniques and interesting features. This prevents misinterpretation. 2. Annotate key features (2-3 minutes) — highlight the most interesting quotations and note techniques and effects in the margin. This provides material for the response. 3. Plan three or four paragraphs (2-3 minutes) — decide which features to write about and in what order. This prevents rambling and ensures the response has structure. 4. Write the response (20-22 minutes) — write three or four analytical paragraphs with embedded quotations, technique identification, word-level analysis, and effects on the reader. Keeping to time ensures you have enough time for the comparison question.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is the first fully timed practice — expect students to feel pressured. Reassure them that the purpose is to practise strategy, not produce perfection.',
    'The allotment poem works well because it has clear techniques, an accessible subject, and a volta that students can identify.',
    'Self-assessment against the mark scheme is a powerful metacognitive tool — consider using it regularly.',
    'Collect the "Even Better If" reflections to inform differentiation in the final lesson.',
    'The homework (rewriting without time pressure) helps students see the gap between what they can do with time and what they produce under pressure, motivating them to improve their exam strategy.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO1: Reading and interpretation under pressure',
    'AO2: Language and structure analysis',
    'Time management',
    'Self-assessment',
    'Exam technique',
  ],
}

// ─── Lesson 10: Exam Practice — Full Response Under Conditions ───────────────

const lesson10: LessonPlan = {
  id: 'unseen-poetry-10-exam-practice',
  title: 'Exam Practice: Full Section C Response Under Conditions',
  text: 'Unseen Poetry',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Complete a full Section C response (Question 1 and Question 2) under exam conditions.',
    'Apply all skills developed across the unit: annotation, language analysis, structural analysis, effects, and comparison.',
    'Demonstrate effective time management across both questions.',
  ],
  successCriteria: [
    'I can produce a complete, structured response to Question 1 (24 marks) within 30 minutes.',
    'I can produce a comparative response to Question 2 (8 marks) within 15 minutes.',
    'I can apply SMILE/Three Readings, word-level analysis, structural analysis, and effect statements under pressure.',
    'I can manage my time effectively to answer both questions within 45 minutes.',
  ],
  keywords: [
    'exam conditions', 'sustained response', 'time management',
    'comparison', 'methods', 'mark scheme', 'assessment objectives',
  ],
  starterActivity: {
    title: 'Pre-Exam Checklist and Mindset',
    duration: '5 minutes',
    instructions:
      'Display a pre-exam checklist on the board: (1) Read the poem twice before you write anything. (2) Annotate for 3-5 minutes — not longer. (3) Plan your paragraphs — what are your three or four best points? (4) Every paragraph needs: quotation, technique, word-level zoom, effect. (5) Leave 15 minutes for the comparison question. (6) Compare methods, not just themes. Students copy the checklist onto a revision card. Brief discussion: what is your personal target from last lesson\'s reflection? Students write their target at the top of their response paper.',
    differentiation: {
      support: 'Teacher reviews the checklist step by step with targeted students before the exam begins.',
      core: 'Students review the checklist independently and set their personal target.',
      stretch: 'Students add one additional personal checkpoint to the list based on their self-assessment from Lesson 9.',
    },
    resources: ['Pre-exam checklist slide', 'Blank revision cards', 'Response paper/exam booklets'],
  },
  mainActivities: [
    {
      title: 'Question 1 — Single Poem Response (30 minutes)',
      duration: '30 minutes',
      instructions:
        'Full exam conditions: silence, no support materials, timed. Students read, annotate, plan, and write a response to the following:\n\nQuestion: In the poem below, how does the poet present ideas about change and the passing of time?\n\n"The Photograph"\n"This is us before the world changed:\nyour arm around my shoulder,\nboth of us squinting at the future\nas if it were the sun.\n\nWe didn\'t know that summer\nwould be the last one shaped like that —\nall barbecues and borrowed time,\nlaughter loud enough to drown\nwhat the news was saying.\n\nNow I hold the photograph\nthe way you hold a match:\ncarefully, knowing\nit will burn down to your fingers\nif you let it.\n\nBut I let it.\nI let the heat come close\nbecause the alternative — the dark —\nis so much worse\nthan the small pain\nof remembering."\n\nTeacher displays a countdown timer. No interruptions during writing time.',
      differentiation: {
        support: 'Provide a planning grid with prompts: "Stanza 1 — what technique can you see? Stanza 2 — what is the tone? Stanza 3 — what is the key image?"',
        core: 'Students complete the response independently under timed conditions.',
        stretch: 'Students aim for four analytical paragraphs covering language, imagery, structure, and the poem\'s overall message.',
      },
      resources: ['Printed poem with question', 'Response paper', 'Countdown timer', 'Planning grid (support tier)'],
    },
    {
      title: 'Question 2 — Comparison Response (15 minutes)',
      duration: '15 minutes',
      instructions:
        'Without a break, students move to Question 2. Display the second poem:\n\n"The Old Coat"\n"I found your coat in the cupboard today —\nthe brown one with the torn pocket\nwhere you kept your lists:\nthings to fix, things to buy,\nthings you never got around to.\n\nIt still smells of you.\nWool and rain and the garage\nwhere you spent your Sundays\nbuilding shelves for things\nwe didn\'t need.\n\nI tried it on.\nThe sleeves were too long,\nthe shoulders too wide,\nbut I wore it anyway —\nout to the garden,\ninto the rain —\nbecause for a moment,\njust a moment,\nI was not wearing a coat.\nI was wearing your arms around me."\n\nQuestion: In both "The Photograph" and "The Old Coat", the poets write about memory and loss. What are the similarities and differences between the ways the poets present these ideas?\n\nStudents have 15 minutes to write two or three comparative paragraphs. Timer continues.',
      differentiation: {
        support: 'Provide two sentence starters: "Both poems explore memory through a physical object..." and "However, while Poem 1..., Poem 2...".',
        core: 'Students write two or three comparative paragraphs independently within the time limit.',
        stretch: 'Students aim to compare methods (how the poets write) as well as ideas (what they write about) in every paragraph.',
      },
      resources: ['Printed second poem with question', 'Response paper', 'Countdown timer'],
    },
  ],
  plenaryActivity: {
    title: 'Post-Exam Debrief and Peer Assessment',
    duration: '10 minutes',
    instructions:
      'Students swap papers with a partner. Using a simplified mark scheme grid, partners assess both responses and provide: (1) a band estimate for Question 1, (2) a band estimate for Question 2, (3) one "what went well" comment, (4) one "even better if" comment. Students then reflect on their own performance: did they manage their time? Did they hit their personal target? What would they do differently next time? Whole-class discussion: what has been the most useful skill or strategy from this unit? Teacher provides final guidance: in the real exam, trust your training, select your best material, and write about effects.',
    differentiation: {
      support: 'Provide a peer assessment tick sheet with criteria to look for (quotations used, techniques named, effects explained, both poems compared).',
      core: 'Students use the mark scheme grid independently and write qualitative feedback.',
      stretch: 'Students identify the single strongest paragraph in their partner\'s response and explain why it would score highly.',
    },
  },
  homework:
    'Complete the unit reflection sheet: (1) List the three most important skills you have developed. (2) Identify your biggest remaining weakness. (3) Write a plan for how you will continue to practise unseen poetry before the exam. Optional extension: write a full Section C response to a new unseen poem of your choice.',
  worksheetQuestions: [
    {
      question: 'Read "The Photograph." How does the poet use the extended metaphor of the match in Stanza 3? Analyse its effect.',
      lines: 6,
      modelAnswer:
        'In Stanza 3, the poet compares holding the photograph to holding "a match: carefully, knowing it will burn down to your fingers if you let it." This extended metaphor transforms the photograph from a harmless object into something dangerous — the match will cause pain if held too long, just as dwelling on memories can become emotionally painful. The word "carefully" suggests the speaker handles the memory with deliberate caution, aware of its power to hurt. However, the speaker chooses to "let the heat come close" because "the dark is so much worse than the small pain of remembering." This reveals that the speaker prefers the pain of memory to the emptiness of forgetting, presenting grief not as something to avoid but as a form of continued connection.',
      marks: 5,
    },
    {
      question: 'Analyse the final four lines of "The Old Coat": "because for a moment, / just a moment, / I was not wearing a coat. / I was wearing your arms around me."',
      lines: 6,
      modelAnswer:
        'The repetition of "just a moment" emphasises how brief and fragile this feeling of connection is — the speaker knows the illusion cannot last but treasures it nonetheless. The final transformation — from wearing a coat to "wearing your arms around me" — is the poem\'s emotional climax. The coat, a physical object, becomes a substitute for human touch, suggesting that we preserve the dead through the objects they leave behind. The directness and simplicity of the final line is striking after the poem\'s understated tone; it drops all metaphorical distance and states the speaker\'s need plainly. This creates a powerful effect on the reader: the raw honesty is deeply moving because it articulates a universal desire to physically feel the presence of someone who is gone.',
      marks: 5,
    },
    {
      question: 'Compare how the two poems use physical objects to represent memory. Write a comparative paragraph.',
      lines: 8,
      modelAnswer:
        'Both poems use a physical object — a photograph and a coat — as a vessel for memory and emotional connection to someone who is absent. In "The Photograph", the object is visual: the speaker looks at an image of the past and must navigate the pain of seeing what no longer exists. The photograph is compared to a match, suggesting memory is volatile and dangerous. In "The Old Coat", the object is tactile: the speaker puts on the coat and physically inhabits the absent person\'s space, smelling them ("wool and rain and the garage") and feeling their presence. While both objects trigger grief, the photograph creates distance (looking at the past), whereas the coat creates closeness (literally wearing the person\'s embrace). This difference in method reflects a difference in coping: the photograph speaker accepts pain as the price of remembering, while the coat speaker seeks physical comfort and momentary reunion.',
      marks: 5,
    },
    {
      question: 'Using the mark scheme, assess the following response extract and suggest how it could be improved: "The poet uses a simile in the poem. The photograph is like a match. This makes the reader feel sad because the person has gone."',
      lines: 6,
      modelAnswer:
        'This response would sit in a lower band because it identifies a technique (simile) but does not analyse it in depth. To improve: (1) Embed the quotation rather than paraphrasing — "the speaker holds the photograph \'the way you hold a match: carefully, knowing it will burn down to your fingers.\'" (2) Zoom in on a specific word — "the word \'carefully\' suggests deliberate caution, implying the speaker knows the memory has the power to hurt." (3) Replace the vague effect statement — instead of "makes the reader feel sad", write: "This evokes a sense of fragile, painful devotion — the reader understands that the speaker chooses to risk emotional pain rather than surrender the memory to darkness." (4) Link to the poet\'s wider message — "This suggests that grief is not passive suffering but an active choice to keep loving."',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson is a full mock exam — maintain strict exam conditions for the 45-minute writing period.',
    'The two poems pair well for comparison: both use physical objects, both explore memory and loss, but they differ in sensory approach (visual vs tactile) and emotional tone.',
    'Collect the responses for formal marking if this is being used as an assessment point.',
    'The peer assessment activity develops metacognitive skills and helps students internalise the mark scheme.',
    'Consider photographing strong responses (anonymised) to use as exemplars in future lessons.',
    'All poems are original and written for teaching purposes.',
  ],
  targetedSkills: [
    'AO1: Reading and interpretation',
    'AO2: Language, structure, and form analysis',
    'Comparison skills',
    'Time management',
    'Exam technique',
    'Self and peer assessment',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const unseenPoetryLessons: LessonPlan[] = [
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
