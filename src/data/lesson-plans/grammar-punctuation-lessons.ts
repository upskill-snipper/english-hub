// @ts-nocheck
import type { LessonPlan } from './macbeth-lessons'

// ─── Lesson 1: Sentence Types - Simple, Compound, Complex ──────────────────

const lesson1: LessonPlan = {
  id: 'grammar-01-sentence-types',
  title: 'Sentence Types: Simple, Compound, and Complex',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and construct simple, compound, and complex sentences accurately.',
    'Understand how sentence type choices affect pace, tone, and reader engagement.',
    'Apply varied sentence structures to improve the quality of written responses.',
  ],
  successCriteria: [
    'I can define and identify simple, compound, and complex sentences in a given passage.',
    'I can explain how sentence type affects the rhythm and impact of a piece of writing.',
    'I can write a paragraph that deliberately uses all three sentence types for effect.',
  ],
  keywords: [
    'simple sentence',
    'compound sentence',
    'complex sentence',
    'subordinate clause',
    'coordinating conjunction',
    'independent clause',
    'sentence variety',
  ],
  starterActivity: {
    title: 'Sentence Sort Challenge',
    duration: '8 minutes',
    instructions:
      'Display twelve sentences on the board taken from a range of fiction and non-fiction extracts. Students work in pairs to sort them into three categories: simple, compound, and complex. They record their answers on mini-whiteboards. Teacher reveals the correct answers, then asks: "Which sentence type is most common? Why might a writer choose one over another?"',
    differentiation: {
      support:
        'Provide a reference card defining each sentence type with an example before sorting begins.',
      core: 'Students sort independently and write a one-sentence justification for each category decision.',
      stretch:
        'Students identify the subordinate clauses in the complex sentences and explain their grammatical function.',
    },
    resources: ['Sentence sort slide', 'Mini-whiteboards', 'Reference card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Building Blocks: Constructing Sentence Types',
      duration: '20 minutes',
      instructions:
        'Teacher models the construction of each sentence type on the board using colour-coded components: subject (blue), verb (red), object (green), conjunction (orange), subordinate clause (purple). Students then complete a worksheet where they: (1) identify the sentence type of ten given examples, (2) combine simple sentences into compound sentences using coordinating conjunctions, (3) add subordinate clauses to simple sentences to create complex sentences. Teacher circulates and addresses common errors such as comma splices.',
      differentiation: {
        support:
          'Provide a word bank of coordinating conjunctions (FANBOYS) and subordinating conjunctions. Sentences are pre-labelled with colour-coded parts.',
        core: 'Students complete all three tasks independently and self-check using the answer key on the reverse of the worksheet.',
        stretch:
          'Students write five original sentences - one simple, two compound with different conjunctions, and two complex with the subordinate clause in different positions - then annotate the grammatical function of each part.',
      },
      resources: [
        'Colour-coded model on board',
        'Sentence construction worksheet',
        'FANBOYS reference card',
      ],
    },
    {
      title: 'Sentence Types for Effect: Analysing and Writing',
      duration: '22 minutes',
      instructions:
        'Display a short extract from a GCSE English Language Paper 1 exemplar text. Students highlight the different sentence types and annotate the effect of each choice (e.g., a short simple sentence creates tension; a long complex sentence builds suspense). In pairs, students then write two contrasting descriptive paragraphs about the same scene: one using predominantly simple sentences and one using predominantly complex sentences. Pairs swap and evaluate which is more effective and why. Share exemplars under the visualiser.',
      differentiation: {
        support:
          'Provide a sentence starter bank and an effects glossary (e.g., "creates tension", "builds suspense", "controls pace").',
        core: 'Students write both paragraphs independently and provide written peer feedback using two stars and a wish.',
        stretch:
          'Students write a third paragraph that deliberately blends all three types for maximum effect, then annotate their own choices explaining why each sentence type was selected.',
      },
      resources: [
        'Exemplar extract slide',
        'Highlighters',
        'Effects glossary (support tier)',
        'Peer feedback frame',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Transform the Sentence',
    duration: '7 minutes',
    instructions:
      'Display a single simple sentence: "The rain fell." Students must transform it into a compound sentence and a complex sentence, then write one sentence explaining which version is most effective for creating atmosphere. Collect responses to assess understanding.',
    differentiation: {
      support:
        'Sentence starters provided: "The rain fell, and..." / "As the sky darkened, the rain fell..."',
      core: 'Students write both transformations and a full justification sentence.',
      stretch:
        'Students create three different complex sentence versions, varying the position of the subordinate clause, and evaluate which is most effective.',
    },
  },
  homework:
    'Find a paragraph from a novel or newspaper article. Identify each sentence type used and write a short analysis (100 words) explaining how the writer uses sentence variety for effect.',
  worksheetQuestions: [
    {
      question:
        'Define a simple sentence, a compound sentence, and a complex sentence. Give one example of each.',
      lines: 6,
      modelAnswer:
        'A simple sentence contains one independent clause with a subject and a verb: "The dog barked." A compound sentence contains two independent clauses joined by a coordinating conjunction: "The dog barked, and the cat ran away." A complex sentence contains an independent clause and at least one subordinate (dependent) clause: "Although it was raining, the dog barked loudly." The subordinate clause cannot stand alone as a sentence.',
      marks: 6,
    },
    {
      question:
        'Identify the sentence type for each of the following: (a) "She walked to school." (b) "He was tired, but he kept running." (c) "Because the alarm failed, she missed the bus."',
      lines: 3,
      modelAnswer:
        '(a) Simple sentence - one independent clause with subject "she" and verb "walked". (b) Compound sentence - two independent clauses joined by the coordinating conjunction "but". (c) Complex sentence - a subordinate clause ("Because the alarm failed") followed by an independent clause ("she missed the bus").',
      marks: 3,
    },
    {
      question:
        'Rewrite the following simple sentences as one compound and one complex sentence: "The storm arrived. The streets flooded. People ran for shelter."',
      lines: 5,
      modelAnswer:
        'Compound: "The storm arrived and the streets flooded, so people ran for shelter." Complex: "When the storm arrived and the streets flooded, people ran for shelter." The compound version links the events as equally important using coordinating conjunctions, while the complex version subordinates the storm and flooding as the cause, emphasising the running for shelter.',
      marks: 4,
    },
    {
      question:
        'Explain why a writer might use a short simple sentence after a series of long complex sentences. Use an example to support your answer.',
      lines: 5,
      modelAnswer:
        'A writer might use a short simple sentence after long complex sentences to create a sudden shift in pace that shocks or surprises the reader. For example, in a horror narrative: "As the darkness crept through the corridor, filling every corner with an impenetrable shadow that seemed almost alive, she heard it. She stopped." The short simple sentence "She stopped" creates a dramatic pause that builds tension and forces the reader to focus on the character\'s reaction.',
      marks: 4,
    },
    {
      question:
        'Write a paragraph (5-6 sentences) describing a busy market scene. Use at least one of each sentence type and label each sentence with its type.',
      lines: 8,
      modelAnswer:
        "The market buzzed with energy. [Simple] Stalls lined the narrow streets, and traders shouted their prices to passing customers. [Compound] Although the sun beat down relentlessly, the crowd showed no sign of thinning. [Complex] Colours exploded everywhere. [Simple] Children tugged at their parents' sleeves, begging for sweets, while the smell of fresh bread drifted from a nearby bakery. [Complex] The noise was overwhelming, yet somehow it felt like home. [Compound]",
      marks: 6,
    },
  ],
  teacherNotes: [
    'Common misconception: students often confuse compound and complex sentences. Emphasise that compound sentences join equally weighted clauses, while complex sentences have a main clause and a dependent clause.',
    'The comma splice is the most frequent error when students attempt compound sentences - reinforce that a comma alone cannot join two independent clauses.',
    'Link to AO6 (technical accuracy) throughout: examiners reward deliberate and accurate sentence variety.',
    'This lesson provides a foundation for all subsequent writing tasks - reference these sentence types in every writing lesson going forward.',
  ],
  targetedSkills: [
    'AO5: Writing - content and organisation',
    'AO6: Technical accuracy',
    'Grammar knowledge',
    'Analytical writing',
  ],
}

// ─── Lesson 2: Punctuation for Effect - Semicolons, Colons, Dashes ──────────

const lesson2: LessonPlan = {
  id: 'grammar-02-punctuation-for-effect',
  title: 'Punctuation for Effect: Semicolons, Colons, and Dashes',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the grammatical rules governing the use of semicolons, colons, and dashes.',
    'Analyse how these punctuation marks create specific effects in published writing.',
    'Deploy semicolons, colons, and dashes accurately and deliberately in original writing.',
  ],
  successCriteria: [
    'I can explain the difference between a semicolon, colon, and dash and when each is used.',
    'I can identify and analyse the effect of these punctuation marks in a given text.',
    'I can write sentences that accurately use semicolons, colons, and dashes for effect.',
  ],
  keywords: [
    'semicolon',
    'colon',
    'em dash',
    'independent clause',
    'juxtaposition',
    'elaboration',
    'parenthetical',
    'antithesis',
  ],
  starterActivity: {
    title: 'Punctuation Detectives',
    duration: '7 minutes',
    instructions:
      'Display three versions of the same sentence, each using a different punctuation mark: "She opened the door; the room was empty." / "She opened the door: the room was empty." / "She opened the door - the room was empty." Students discuss in pairs: do these sentences mean the same thing? What subtle difference does each punctuation mark create? Take feedback and establish that each mark signals a different relationship between the clauses.',
    differentiation: {
      support: 'Provide a prompt card with the basic function of each mark to guide discussion.',
      core: 'Students articulate the subtle difference in meaning or emphasis created by each mark.',
      stretch:
        'Students suggest a context or genre where each version would be most effective and justify their reasoning.',
    },
    resources: ['Three-sentence comparison slide', 'Prompt cards (support tier)'],
  },
  mainActivities: [
    {
      title: 'Rules and Functions: Direct Instruction and Practice',
      duration: '18 minutes',
      instructions:
        'Teacher delivers focused direct instruction on each punctuation mark in turn. Semicolons: link two closely related independent clauses; create balance or antithesis. Colons: introduce an explanation, list, or elaboration of the preceding clause. Dashes: create a dramatic pause, insert a parenthetical aside, or signal an afterthought. After each explanation, students complete three practice sentences using that mark correctly. Teacher models common errors (e.g., using a semicolon before a conjunction, using a colon after an incomplete clause) and students correct them.',
      differentiation: {
        support:
          'Provide sentence frames with gaps where the punctuation mark should be inserted, along with a rule summary card.',
        core: 'Students complete practice sentences independently and write one original sentence for each mark.',
        stretch:
          'Students write pairs of sentences where changing the punctuation mark changes the emphasis or meaning, then explain the difference.',
      },
      resources: [
        'Punctuation rules slides',
        'Practice sentence worksheet',
        'Rule summary card (support tier)',
      ],
    },
    {
      title: 'Punctuation in Action: Analysis and Creative Application',
      duration: '25 minutes',
      instructions:
        'Part 1 (10 minutes): Students read a non-fiction extract (e.g., a speech or opinion article) that uses semicolons, colons, and dashes effectively. They highlight each example and annotate the effect using the terminology from the direct instruction phase. Part 2 (15 minutes): Students write a persuasive letter (150-200 words) arguing for or against school uniform. They must include at least one semicolon, one colon, and one dash, each used accurately and for deliberate effect. They underline and annotate each use. Peer review in pairs, checking accuracy against the rules.',
      differentiation: {
        support:
          'Provide a writing frame for the letter with prompts indicating where each punctuation mark should be used. Annotation sentence starters provided.',
        core: 'Students write the letter independently, annotate their punctuation choices, and peer review for accuracy.',
        stretch:
          'Students write the letter without a frame, then write a short commentary (50 words) evaluating which punctuation choice was most effective and why.',
      },
      resources: [
        'Non-fiction extract handout',
        'Writing frame (support tier)',
        'Peer review checklist',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Punctuation Quick-Fire Quiz',
    duration: '7 minutes',
    instructions:
      'Teacher reads out ten sentences with a missing punctuation mark. Students hold up a card showing ";" or ":" or "-" to indicate which mark should be used. Teacher reveals the answer and briefly explains. Track scores for formative assessment.',
    differentiation: {
      support: 'Rule summary card remains available during the quiz.',
      core: 'Students respond independently and keep a personal score.',
      stretch:
        'After each answer, students write the full sentence with the correct mark and briefly note the effect.',
    },
  },
  homework:
    'Write a short review (150 words) of a film, book, or TV show. You must use at least two semicolons, two colons, and two dashes. Underline each one and write a brief annotation explaining why you chose that mark.',
  worksheetQuestions: [
    {
      question: 'Explain the three main uses of a semicolon. Give an example for each use.',
      lines: 6,
      modelAnswer:
        'A semicolon has three main uses: (1) To link two closely related independent clauses without a conjunction: "The sun set; the sky turned crimson." (2) To create balance or antithesis between two ideas: "She thrived in chaos; he crumbled under pressure." (3) To separate items in a complex list where the items themselves contain commas: "The team included Sarah, the captain; James, the vice-captain; and Priya, the goalkeeper."',
      marks: 6,
    },
    {
      question:
        'What is the difference between a colon and a semicolon? Why do students often confuse them?',
      lines: 5,
      modelAnswer:
        'A colon introduces what follows - it signals that an explanation, elaboration, or list is about to come. The clause before the colon must be a complete sentence. A semicolon links two equally weighted independent clauses that are closely related. Students often confuse them because both appear between clauses, but the key difference is the relationship: a colon says "here is what I mean" while a semicolon says "these two ideas are connected and balanced."',
      marks: 4,
    },
    {
      question:
        'Insert the correct punctuation mark (semicolon, colon, or dash) in each sentence and explain your choice: (a) "He had one goal _ to win." (b) "The café was empty _ the storm had kept everyone away." (c) "She turned the corner _ and there it was."',
      lines: 6,
      modelAnswer:
        '(a) Colon - "He had one goal: to win." The colon introduces an elaboration of "one goal". (b) Semicolon - "The café was empty; the storm had kept everyone away." The semicolon links two related independent clauses where the second explains the first. (c) Dash - "She turned the corner - and there it was." The dash creates a dramatic pause before the revelation, building suspense.',
      marks: 6,
    },
    {
      question:
        'Why might a writer choose to use a dash instead of a comma in a sentence? Give an example to illustrate your answer.',
      lines: 4,
      modelAnswer:
        'A writer might choose a dash over a comma to create a stronger pause and draw attention to what follows. Dashes signal a deliberate interruption or dramatic shift. For example: "The house was silent, peaceful, almost idyllic - until the screaming began." The dash here creates a jarring contrast that a comma would not achieve, amplifying the shock for the reader.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Students often overuse dashes once they learn them. Emphasise that all three marks should be used sparingly and deliberately.',
    'The most common error is using a colon after an incomplete clause (e.g., "My favourite foods are: pizza and chips"). Drill the rule that the clause before a colon must be a complete sentence.',
    'Link explicitly to AO6 marks: examiners reward accurate use of a range of punctuation, and semicolons/colons are specifically cited as markers of higher-band writing.',
    'Return to these marks regularly in subsequent writing tasks to embed them as habitual choices.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'AO5: Writing - content and organisation',
    'Punctuation knowledge',
    'Analytical writing',
  ],
}

// ─── Lesson 3: Paragraph Structure and Topic Sentences ──────────────────────

const lesson3: LessonPlan = {
  id: 'grammar-03-paragraph-structure',
  title: 'Paragraph Structure and Topic Sentences',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the role of topic sentences in controlling paragraph focus and coherence.',
    'Analyse how effective paragraphs are structured using the TEA model (Topic, Evidence, Analysis).',
    'Write well-structured paragraphs with clear topic sentences and logical development.',
  ],
  successCriteria: [
    'I can identify the topic sentence in a paragraph and explain its function.',
    'I can explain how a paragraph develops from a topic sentence through evidence and analysis.',
    'I can write a paragraph with a clear topic sentence, supporting evidence, and developed analysis.',
  ],
  keywords: [
    'topic sentence',
    'paragraph cohesion',
    'discourse marker',
    'TEA structure',
    'signposting',
    'supporting evidence',
    'concluding sentence',
  ],
  starterActivity: {
    title: 'Jumbled Paragraph Reconstruction',
    duration: '8 minutes',
    instructions:
      'Provide students with a well-written analytical paragraph that has been cut into individual sentences and jumbled. In pairs, students arrange the sentences into the most logical order. Reveal the original order and discuss: how did you know which sentence came first? What made the order feel logical? Introduce the concept of the topic sentence as the "controlling idea" of a paragraph.',
    differentiation: {
      support:
        'Provide the topic sentence already identified and in position; students order the remaining sentences.',
      core: 'Students reconstruct the full paragraph and identify the topic sentence, explaining their reasoning.',
      stretch:
        "Students reconstruct the paragraph, then write an alternative topic sentence that would change the paragraph's focus.",
    },
    resources: [
      'Jumbled paragraph strips (one set per pair)',
      'Original paragraph on slide for reveal',
    ],
  },
  mainActivities: [
    {
      title: 'Anatomy of a Paragraph: TEA Structure',
      duration: '20 minutes',
      instructions:
        'Teacher models the TEA paragraph structure using a colour-coded exemplar: Topic sentence (green), Evidence (yellow), Analysis (pink). Demonstrate how the topic sentence states the main idea, the evidence supports it, and the analysis explains the significance. Students then read three paragraphs of varying quality (one excellent, one adequate, one weak) and colour-code the TEA components. Class discussion: what makes the excellent paragraph successful? What is the weak paragraph missing? Students complete a gap-fill exercise creating topic sentences for three given sets of evidence and analysis.',
      differentiation: {
        support:
          'Provide topic sentence options to choose from rather than writing original ones. Colour-coding guided with labels.',
        core: 'Students colour-code independently, evaluate all three paragraphs, and write original topic sentences.',
        stretch:
          'Students rewrite the weak paragraph to match the quality of the excellent one, then annotate the improvements they made.',
      },
      resources: [
        'TEA model exemplar slide',
        'Three-paragraph quality comparison worksheet',
        'Highlighters (three colours)',
      ],
    },
    {
      title: 'Writing Strong Paragraphs: Practice and Peer Review',
      duration: '22 minutes',
      instructions:
        'Students write two analytical paragraphs responding to the question: "How does the writer use language to create a sense of danger?" using a provided extract. The first paragraph is guided with a writing frame; the second is written independently. Emphasis on: starting with a clear topic sentence, embedding a quotation as evidence, and developing analysis that links back to the topic sentence. Students then swap with a partner who highlights the TEA structure and provides feedback on whether the topic sentence effectively controls the paragraph.',
      differentiation: {
        support:
          'Full writing frame provided for both paragraphs with sentence starters and a quotation bank.',
        core: 'Writing frame for paragraph one only; paragraph two is independent. Peer feedback using a structured checklist.',
        stretch:
          'Both paragraphs written independently. Students add discourse markers to link the two paragraphs cohesively, then evaluate which paragraph is stronger and why.',
      },
      resources: [
        'Stimulus extract',
        'Writing frame (support/core tier)',
        'Peer feedback checklist',
        'Quotation bank (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Topic Sentence Auction',
    duration: '7 minutes',
    instructions:
      'Display six topic sentences - three are strong and three are weak (vague, unfocused, or factual rather than analytical). Students "bid" on the sentences they think are strong by raising their hand. Teacher reveals which are strong, discussing why the weak ones fail. Students rewrite one weak topic sentence to make it effective.',
    differentiation: {
      support:
        'Teacher highlights one clue in each weak sentence to help students spot the problem.',
      core: 'Students identify strong and weak sentences and articulate why each is effective or ineffective.',
      stretch:
        'Students rewrite all three weak sentences and explain the specific improvement made in each case.',
    },
  },
  homework:
    'Choose any topic you feel strongly about. Write three linked paragraphs (approximately 200 words total), each beginning with a clear topic sentence. Underline each topic sentence and use a discourse marker to link paragraphs two and three to the one before.',
  worksheetQuestions: [
    {
      question: 'What is a topic sentence and what is its function within a paragraph?',
      lines: 4,
      modelAnswer:
        'A topic sentence is the opening sentence of a paragraph that states the main idea or argument the paragraph will develop. Its function is to control the focus of the paragraph, signposting to the reader what will be discussed. Everything that follows in the paragraph should relate directly to the topic sentence. A strong topic sentence is specific, analytical (not just factual), and sets up the direction for the evidence and analysis that follow.',
      marks: 4,
    },
    {
      question:
        'Read the following paragraph and identify the topic sentence. Explain how the rest of the paragraph supports it.',
      lines: 5,
      modelAnswer:
        "The topic sentence is the first sentence, which introduces the main argument of the paragraph. The supporting evidence (quotation or example) directly illustrates the claim made in the topic sentence. The analysis then explains how the evidence proves the topic sentence's argument, using subject terminology and exploring the writer's methods. The paragraph remains focused because every sentence connects back to the controlling idea established in the topic sentence.",
      marks: 4,
    },
    {
      question:
        'Explain the TEA paragraph structure. Why is this structure effective for GCSE English responses?',
      lines: 5,
      modelAnswer:
        'TEA stands for Topic sentence, Evidence, and Analysis. The Topic sentence states the main point; the Evidence provides a specific example or quotation to support it; the Analysis explains how the evidence proves the point, exploring language, structure, or context. This structure is effective for GCSE responses because it ensures paragraphs are focused, well-supported, and analytical - directly addressing AO1 (understanding) and AO2 (analysis of methods). It prevents students from making unsupported assertions or losing focus.',
      marks: 4,
    },
    {
      question:
        'Write a topic sentence for a paragraph that will argue the following: a character in a novel is presented as increasingly isolated.',
      lines: 3,
      modelAnswer:
        'A strong topic sentence might be: "Throughout the novel, the writer increasingly presents the protagonist as isolated from those around them, using setting and dialogue to emphasise their growing separation from society." This is effective because it identifies the method (setting and dialogue), names the effect (isolation and separation), and sets up the direction for the evidence and analysis that will follow.',
      marks: 3,
    },
    {
      question:
        'A student writes: "In this paragraph I am going to talk about the theme of power." Explain why this is a weak topic sentence and rewrite it to make it effective.',
      lines: 5,
      modelAnswer:
        'This is weak because it is a statement of intention rather than an analytical claim - it tells the reader what the paragraph will "talk about" rather than making an argument. It is also vague: "the theme of power" does not specify what about power will be explored. A stronger version: "The writer presents power as inherently corrupting, using imagery of decay and decline to suggest that those who seek dominance ultimately destroy themselves." This version makes a specific, arguable claim that the paragraph can then support with evidence.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Students frequently confuse topic sentences with introductory statements of intent ("In this paragraph I will..."). Explicitly model the difference between a statement of intent and an analytical claim.',
    'The TEA structure is a scaffold, not a rigid formula. Once students are confident, encourage them to vary paragraph structures while maintaining the core principle of a controlling idea.',
    'Link to AO5 (organisation): examiners reward clear paragraphing with purposeful topic sentences as a key indicator of organised writing.',
    'This lesson pairs well with the sentence types lesson - students can practise using complex sentences for their topic sentences to create sophisticated openings.',
  ],
  targetedSkills: [
    'AO5: Writing - content and organisation',
    'AO1: Understanding and response',
    'Paragraph construction',
    'Analytical writing',
  ],
}

// ─── Lesson 4: Active and Passive Voice ─────────────────────────────────────

const lesson4: LessonPlan = {
  id: 'grammar-04-active-passive-voice',
  title: 'Active and Passive Voice',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Distinguish between active and passive voice constructions and identify each in context.',
    'Analyse the effects of active and passive voice choices in different text types.',
    'Make deliberate voice choices in writing to control emphasis, tone, and formality.',
  ],
  successCriteria: [
    'I can identify whether a sentence is written in active or passive voice and explain how I know.',
    'I can analyse why a writer has chosen active or passive voice in a given extract.',
    'I can rewrite sentences from active to passive (and vice versa) and explain the change in effect.',
  ],
  keywords: [
    'active voice',
    'passive voice',
    'agent',
    'subject',
    'emphasis',
    'formality',
    'impersonal tone',
    'transitive verb',
  ],
  starterActivity: {
    title: 'Who Did What? Headline Analysis',
    duration: '7 minutes',
    instructions:
      'Display six newspaper headlines - three in active voice ("Dog Bites Man") and three in passive voice ("Man Bitten by Dog"). Students sort them into two groups without being told the categories. After sorting, teacher reveals the terms "active" and "passive" voice and asks: what pattern did you notice? Who is the focus of each headline? Why might a newspaper choose one over the other?',
    differentiation: {
      support:
        'Provide the two category labels and ask students to sort, rather than identifying the categories themselves.',
      core: 'Students sort and then articulate the grammatical pattern in their own words.',
      stretch:
        'Students suggest a reason why passive voice is often used in headlines about crime or politics and connect this to bias or emphasis.',
    },
    resources: ['Headline cards or slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Grammar in Focus: Active and Passive Constructions',
      duration: '18 minutes',
      instructions:
        'Teacher explains the grammatical structure of active voice (subject + verb + object: "The cat chased the mouse") and passive voice (object + auxiliary verb + past participle + optional agent: "The mouse was chased by the cat"). Use diagrams to show how the subject and object swap positions. Students then complete a transformation exercise: ten sentences to convert from active to passive and ten from passive to active. Teacher models the first two, then students work independently. Review common errors: forgetting the auxiliary verb, confusion about irregular past participles.',
      differentiation: {
        support:
          'Provide a step-by-step transformation guide and a list of common irregular past participles. Sentences are shorter and simpler.',
        core: 'Students complete all twenty transformations independently and check answers with a partner.',
        stretch:
          'Students identify sentences where the passive construction is grammatically possible but stylistically awkward, explaining why active would be preferable.',
      },
      resources: [
        'Active/passive diagram slide',
        'Transformation exercise worksheet',
        'Irregular past participle list (support tier)',
      ],
    },
    {
      title: 'Voice Choices in Real Texts',
      duration: '25 minutes',
      instructions:
        'Students read three short extracts: (1) a crime report using passive voice to withhold the agent ("A window was smashed..."), (2) a sports commentary using active voice for energy and pace ("Rashford fires the ball into the net!"), (3) a scientific report using passive voice for impersonality ("The solution was heated to 100°C"). For each extract, students annotate: what voice is used? Why has the writer chosen this voice? What effect does it create? Students then write their own 100-word report of a school event twice - once predominantly in active voice and once in passive voice. They write a short comparison (50 words) evaluating the different effects.',
      differentiation: {
        support:
          'Annotations guided with sentence starters: "The writer uses passive voice here because..." Pre-written event details provided for the writing task.',
        core: 'Students annotate independently and write both versions of the report with a written comparison.',
        stretch:
          'Students write a third version that strategically blends active and passive voice, annotating each choice and explaining why it is the most effective version.',
      },
      resources: [
        'Three extract handout',
        'Annotation guidance (support tier)',
        'Lined response paper',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Voice Swap Challenge',
    duration: '7 minutes',
    instructions:
      'Display five sentences. Students must identify the voice, convert each to the opposite voice, and explain which version is more effective for the given context. Teacher takes feedback on the final sentence, which is deliberately ambiguous, to generate discussion.',
    differentiation: {
      support:
        'Voice is pre-identified for each sentence; students only need to convert and explain.',
      core: 'Students complete all three tasks for each sentence independently.',
      stretch:
        'Students write a rule or guideline about when to use each voice, based on the patterns they have observed in the lesson.',
    },
  },
  homework:
    'Find three examples of passive voice in newspapers, textbooks, or websites. For each, explain why the writer chose passive voice and rewrite the sentence in active voice, commenting on how the meaning or emphasis changes.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between active and passive voice. Give one example of each.',
      lines: 5,
      modelAnswer:
        'In active voice, the subject of the sentence performs the action: "The teacher marked the essays." The focus is on the doer (the teacher). In passive voice, the subject receives the action: "The essays were marked by the teacher." The focus shifts to the object (the essays). In passive constructions, the agent (the doer) can be omitted entirely: "The essays were marked." This allows the writer to hide or de-emphasise who performed the action.',
      marks: 4,
    },
    {
      question:
        'Convert the following sentences from active to passive voice: (a) "The council demolished the building." (b) "Scientists discovered a new species." (c) "The goalkeeper saved the penalty."',
      lines: 4,
      modelAnswer:
        '(a) "The building was demolished by the council." (b) "A new species was discovered by scientists." (c) "The penalty was saved by the goalkeeper." In each case, the original object becomes the subject, the verb becomes a past participle with an auxiliary ("was"), and the original subject becomes an optional agent introduced by "by".',
      marks: 3,
    },
    {
      question:
        'Why is passive voice commonly used in scientific writing and formal reports? Give an example.',
      lines: 5,
      modelAnswer:
        'Passive voice is commonly used in scientific writing because it creates an impersonal, objective tone that focuses on the process or result rather than the person performing the action. This makes the writing seem more authoritative and unbiased. For example, "The solution was heated to 100°C and the results were recorded" focuses on the experiment itself. If this were written in active voice - "I heated the solution" - the focus would shift to the individual, which is considered less appropriate in formal scientific contexts.',
      marks: 4,
    },
    {
      question:
        'A student writes: "Mistakes were made." Explain why a politician might choose this passive construction and what effect it creates.',
      lines: 5,
      modelAnswer:
        'The passive construction "Mistakes were made" deliberately omits the agent - the person who made the mistakes. This allows the politician to acknowledge that errors occurred without accepting personal responsibility or identifying who is to blame. The effect is evasive: it distances the speaker from accountability. In active voice, the sentence would require a subject: "I made mistakes" or "We made mistakes," which is a direct admission of fault. The passive construction is therefore a strategic rhetorical choice to deflect blame.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Students often assume passive voice is always "wrong" or "weak." Correct this: passive voice is a deliberate stylistic choice with specific effects. The issue is using it unintentionally.',
    'Link to Paper 2 non-fiction writing: passive voice is a powerful tool for formal letters, reports, and speeches.',
    'Common error: students confuse passive voice with past tense. Emphasise that voice and tense are different grammatical concepts - passive can occur in any tense.',
    'This lesson connects strongly to the persuasive writing unit, where students can use passive voice to depersonalise or deflect.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'AO5: Writing - content and organisation',
    'Grammar knowledge',
    'Rhetorical analysis',
  ],
}

// ─── Lesson 5: Subject-Verb Agreement and Common Errors ─────────────────────

const lesson5: LessonPlan = {
  id: 'grammar-05-subject-verb-agreement',
  title: 'Subject-Verb Agreement and Common Errors',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand and apply the rules of subject-verb agreement in simple and complex sentences.',
    'Identify and correct common agreement errors including those caused by intervening phrases.',
    'Recognise and fix frequent grammatical errors in tense consistency, pronoun reference, and homophones.',
  ],
  successCriteria: [
    'I can identify the subject and verb in a sentence and ensure they agree in number.',
    'I can spot and correct subject-verb agreement errors caused by intervening phrases or compound subjects.',
    'I can identify and correct at least four types of common grammatical error in a given text.',
  ],
  keywords: [
    'subject-verb agreement',
    'singular',
    'plural',
    'intervening phrase',
    'compound subject',
    'tense consistency',
    'pronoun reference',
    'homophone',
  ],
  starterActivity: {
    title: 'Error Hunt: Spot the Mistakes',
    duration: '8 minutes',
    instructions:
      'Display a short paragraph (6-8 sentences) containing deliberate subject-verb agreement errors and other common grammatical mistakes. Students work individually for three minutes to identify and correct as many errors as possible, then compare with a partner. Teacher reveals all errors and corrections, categorising them on the board. Introduce the lesson focus: subject-verb agreement is one of the most common errors in GCSE writing and one of the easiest to fix.',
    differentiation: {
      support: 'Errors are underlined in the paragraph; students need only provide the correction.',
      core: 'Students find and correct all errors independently, then categorise them by type.',
      stretch:
        'Students find all errors, correct them, and explain the grammatical rule that each error violates.',
    },
    resources: ['Error paragraph slide/handout', 'Answer key slide'],
  },
  mainActivities: [
    {
      title: 'Subject-Verb Agreement: Rules and Tricky Cases',
      duration: '20 minutes',
      instructions:
        'Teacher systematically covers the key rules: (1) A singular subject takes a singular verb; a plural subject takes a plural verb. (2) The subject, not the words between it and the verb, determines agreement: "The box of chocolates was [not were] on the table." (3) Compound subjects joined by "and" take a plural verb; those joined by "or" or "nor" take a verb matching the nearest subject. (4) Collective nouns can be singular or plural depending on meaning. (5) Indefinite pronouns (everyone, nobody, each) are singular. After each rule, students complete three practice sentences. Conclude with a ten-sentence quiz where students choose the correct verb form.',
      differentiation: {
        support:
          'Students receive a rule card summarising all five rules with examples. Practice sentences include the subject underlined to aid identification.',
        core: 'Students complete all practice sentences and the quiz independently, then peer-mark.',
        stretch:
          'Students write their own "tricky" agreement sentences to test a partner, focusing on intervening phrases and collective nouns.',
      },
      resources: [
        'Rules presentation slides',
        'Practice sentences worksheet',
        'Rule summary card (support tier)',
        'Ten-sentence quiz',
      ],
    },
    {
      title: 'Common Errors Clinic',
      duration: '22 minutes',
      instructions:
        "Students rotate through four \"error clinic\" stations, spending five minutes at each: (1) Tense Consistency - identify and correct tense shifts in a narrative paragraph. (2) Pronoun Reference - fix unclear or incorrect pronoun usage in a set of sentences. (3) Homophones - choose the correct homophone (there/their/they're, its/it's, your/you're, affect/effect) in context sentences. (4) Double Negatives and Non-Standard Forms - rewrite non-standard constructions in Standard English. Each station has an instruction card, practice task, and self-check answer sheet. After rotations, teacher consolidates the four error types and explains how each costs marks in exams.",
      differentiation: {
        support:
          'Stations include a rule reminder at the top of each task card. Sentences are shorter and errors are more obvious.',
        core: 'Students complete all four stations independently and self-check using the answer sheets.',
        stretch:
          'At each station, students add two original examples of the error type and explain why each is problematic.',
      },
      resources: [
        'Four station task cards with answer sheets',
        'Timer for rotations',
        'Rule reminders (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Proofreading Relay',
    duration: '7 minutes',
    instructions:
      'In teams of four, students receive a paragraph containing ten errors (a mix of all types covered in the lesson). The paragraph is passed around the team, with each member correcting two or three errors before passing it on. The first team to correctly identify and fix all ten errors wins. Teacher reviews the corrections as a class.',
    differentiation: {
      support:
        'Team includes a stronger student who checks corrections before the paragraph is passed on. Error types are labelled.',
      core: 'Teams work collaboratively, discussing corrections before writing them.',
      stretch:
        'Teams must also explain the rule each error violates in a brief annotation beside each correction.',
    },
  },
  homework:
    'Proofread a piece of your own recent writing (from any subject). Identify and correct at least five errors, categorising each by type (agreement, tense, pronoun, homophone, or other). Write a short reflection on which error type you make most often.',
  worksheetQuestions: [
    {
      question:
        'Choose the correct verb form and explain your choice: "The group of students (was/were) waiting outside the hall."',
      lines: 4,
      modelAnswer:
        'The correct form is "was" - "The group of students was waiting outside the hall." The subject is "group" (singular), not "students." The phrase "of students" is an intervening prepositional phrase that describes the group but does not change the subject. Since "group" is a singular collective noun used here to refer to the group as a single unit, it takes a singular verb.',
      marks: 3,
    },
    {
      question:
        'Identify and correct the subject-verb agreement error in each sentence: (a) "Neither the teacher nor the students was prepared." (b) "Everyone in the classes are expected to attend." (c) "The news are reported every evening."',
      lines: 5,
      modelAnswer:
        '(a) "Neither the teacher nor the students were prepared." With "neither...nor," the verb agrees with the nearest subject ("students" is plural, so "were"). (b) "Everyone in the classes is expected to attend." "Everyone" is a singular indefinite pronoun and takes a singular verb, regardless of the intervening phrase "in the classes." (c) "The news is reported every evening." "News" is an uncountable noun that takes a singular verb despite ending in "s."',
      marks: 6,
    },
    {
      question:
        'Explain why tense consistency is important in writing. Give an example of a tense consistency error and correct it.',
      lines: 4,
      modelAnswer:
        'Tense consistency is important because shifting between tenses without reason confuses the reader and undermines the coherence of the writing. Example error: "She walked into the room and sees a strange figure." This shifts from past tense ("walked") to present tense ("sees") within the same sentence. Corrected: "She walked into the room and saw a strange figure." Maintaining past tense keeps the narrative coherent.',
      marks: 4,
    },
    {
      question:
        'Choose the correct homophone and explain your reasoning: (a) "The dog wagged (its/it\'s) tail." (b) "(There/Their/They\'re) going to the cinema." (c) "The decision will (affect/effect) everyone."',
      lines: 5,
      modelAnswer:
        '(a) "its" - "its" is the possessive form (the tail belonging to the dog). "It\'s" is a contraction of "it is" or "it has," which would not make sense here. (b) "They\'re" - a contraction of "they are." "There" refers to a place, and "their" indicates possession. (c) "affect" - "affect" is a verb meaning to influence or have an impact on. "Effect" is typically a noun meaning the result or outcome. Since we need a verb here ("will affect"), "affect" is correct.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'Subject-verb agreement errors are among the most penalised errors in GCSE English. Students who eliminate these errors typically move up at least one band for AO6.',
    'Intervening phrases are the primary cause of agreement confusion. Teach students to mentally "bracket off" prepositional phrases to find the true subject.',
    "The homophone station frequently reveals that many students have not fully mastered there/their/they're and its/it's - this may need reinforcement across multiple lessons.",
    'Encourage students to read their work aloud during proofreading: many agreement errors are easier to hear than to see.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'Proofreading',
    'Grammar knowledge',
    'Self-correction strategies',
  ],
}

// ─── Lesson 6: Apostrophes - Possession and Contraction ─────────────────────

const lesson6: LessonPlan = {
  id: 'grammar-06-apostrophes',
  title: 'Apostrophes: Possession and Contraction',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand and apply the rules for apostrophes of contraction and possession accurately.',
    'Distinguish between possessive apostrophes for singular nouns, plural nouns, and irregular plurals.',
    "Identify and correct apostrophe errors in extended writing, including the its/it's distinction.",
  ],
  successCriteria: [
    'I can use apostrophes correctly in contractions and explain what letters have been omitted.',
    'I can apply the correct possessive apostrophe rules for singular, regular plural, and irregular plural nouns.',
    'I can proofread a text and correct all apostrophe errors, explaining the rule each correction follows.',
  ],
  keywords: [
    'apostrophe',
    'contraction',
    'possession',
    'singular possessive',
    'plural possessive',
    'irregular plural',
    'omission',
  ],
  starterActivity: {
    title: 'Apostrophe Catastrophe',
    duration: '7 minutes',
    instructions:
      'Display photographs of real-world apostrophe errors from shop signs, menus, and advertisements (e.g., "Apple\'s for sale", "Mens Clothing", "The Smith\'s House"). Students identify the error in each and suggest the correction. Discuss: why are apostrophe errors so common? Teacher establishes that there are only two uses of apostrophes - contraction and possession - and that every other use is wrong.',
    differentiation: {
      support:
        'Provide a checklist: "Is it a contraction? Is it showing possession? If neither, remove the apostrophe."',
      core: 'Students identify errors and state the rule that has been broken.',
      stretch:
        'Students explain why each error has occurred (e.g., confusion between plural and possessive) and write the correct version.',
    },
    resources: ['Apostrophe error photograph slide', 'Checklist card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Apostrophe Rules: Contraction and Possession Masterclass',
      duration: '20 minutes',
      instructions:
        "Teacher delivers structured instruction covering: (1) Contraction - the apostrophe replaces missing letters (do not → don't, it is → it's). Students practise converting ten phrases into contractions and vice versa. (2) Singular possession - add 's (the dog's bone, James's book). (3) Regular plural possession - add the apostrophe after the existing s (the dogs' bones, the teachers' staffroom). (4) Irregular plural possession - add 's because the plural does not end in s (the children's playground, the women's team). (5) The its/it's distinction - \"its\" is possessive; \"it's\" is always a contraction. Students complete a progressive exercise sheet moving from simple contractions to complex possessive constructions.",
      differentiation: {
        support:
          'Exercise sheet has rules printed at the top of each section. Focus on sections 1-3 with extension to 4-5 if ready.',
        core: 'Students complete all five sections independently and self-check.',
        stretch:
          'Students complete all sections and then write five sentences that each use both a contraction and a possessive apostrophe correctly.',
      },
      resources: [
        'Apostrophe rules presentation',
        'Progressive exercise sheet',
        'Self-check answer key',
      ],
    },
    {
      title: 'Apostrophe Application: Proofreading and Writing',
      duration: '23 minutes',
      instructions:
        'Part 1 (10 minutes): Students proofread a 200-word passage containing fifteen deliberate apostrophe errors - missing apostrophes, misplaced apostrophes, unnecessary apostrophes, and its/it\'s confusion. They correct each error and note the rule it violates. Part 2 (13 minutes): Students write a descriptive paragraph (100-150 words) about a family gathering that must include at least three contractions, two singular possessives, one plural possessive, and one use of "its" (without an apostrophe). They annotate each apostrophe use, labelling it as contraction or possession.',
      differentiation: {
        support:
          'In the proofreading task, errors are highlighted in bold. In the writing task, a word bank of possessive phrases is provided.',
        core: 'Students complete both tasks independently with full annotations.',
        stretch:
          'Students write an additional 50 words that include an irregular plural possessive and a sentence contrasting "its" and "it\'s." They also write a brief explanation of why apostrophe accuracy matters for GCSE marks.',
      },
      resources: [
        'Proofreading passage handout',
        'Lined response paper',
        'Possessive phrase word bank (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Apostrophe Decision Tree',
    duration: '7 minutes',
    instructions:
      'Students create a simple decision tree in their books: "Does the word show ownership? → Yes → Singular or plural? → ..." / "Does the word replace missing letters? → Yes → It\'s a contraction." Teacher displays five final test sentences and students apply their decision tree to insert apostrophes correctly.',
    differentiation: {
      support: 'A partially completed decision tree is provided; students fill in the gaps.',
      core: 'Students create the decision tree from scratch and apply it to all five sentences.',
      stretch:
        "Students add a branch for tricky cases (its/it's, names ending in s) and test their tree on two additional challenge sentences.",
    },
  },
  homework:
    'Write ten sentences - five using apostrophes of contraction and five using apostrophes of possession. At least one sentence must use a plural possessive and one must correctly use "its" without an apostrophe. Label each apostrophe use.',
  worksheetQuestions: [
    {
      question: 'Explain the two uses of apostrophes in English. Give two examples of each use.',
      lines: 5,
      modelAnswer:
        'Apostrophes have two uses: contraction and possession. Contraction: the apostrophe replaces omitted letters when two words are shortened into one. Examples: "do not" becomes "don\'t" (the apostrophe replaces the "o"); "they are" becomes "they\'re" (the apostrophe replaces the "a"). Possession: the apostrophe shows that something belongs to someone or something. Examples: "the student\'s bag" (the bag belonging to one student); "the students\' bags" (the bags belonging to multiple students). Apostrophes are never used to form plurals.',
      marks: 4,
    },
    {
      question:
        'Add apostrophes where needed: (a) "The childrens toys were scattered across the floor." (b) "Its been a long day and the dogs lost its collar." (c) "The two brothers houses were on the same street."',
      lines: 5,
      modelAnswer:
        '(a) "The children\'s toys were scattered across the floor." - "children" is an irregular plural (it does not end in s), so the possessive apostrophe goes before the s: children\'s. (b) "It\'s been a long day and the dog\'s lost its collar." - "It\'s" is a contraction of "it has"; "dog\'s" shows possession (the collar belonging to the dog); "its" has no apostrophe because it is the possessive pronoun. (c) "The two brothers\' houses were on the same street." - "brothers" is a regular plural ending in s, so the apostrophe goes after the s: brothers\'.',
      marks: 6,
    },
    {
      question:
        'Explain the difference between "its" and "it\'s." Why do so many people confuse them?',
      lines: 4,
      modelAnswer:
        '"It\'s" is always a contraction - it means "it is" or "it has" ("It\'s raining" = "It is raining"). "Its" without an apostrophe is a possessive pronoun showing ownership ("The cat licked its paw"). People confuse them because we normally associate apostrophes with possession (e.g., "Sarah\'s book"), so it feels logical to add an apostrophe when showing that something belongs to "it." However, possessive pronouns (his, hers, its, yours, theirs) never use apostrophes.',
      marks: 4,
    },
    {
      question:
        "A student writes: \"The teacher's were pleased with the student's work and gave them lot's of praise.\" Identify and correct every apostrophe error in this sentence.",
      lines: 5,
      modelAnswer:
        'There are two errors. (1) "teacher\'s" should be "teachers" - this is a plural noun (more than one teacher), not a possessive. No apostrophe is needed. (2) "lot\'s" should be "lots" - this is simply the plural of "lot." Apostrophes are never used to form plurals. The word "student\'s" is actually correct if referring to one student\'s work (singular possessive). Corrected sentence: "The teachers were pleased with the student\'s work and gave them lots of praise."',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Apostrophe errors are among the most heavily penalised SPaG errors at GCSE. Students who master apostrophes gain a disproportionate advantage in AO6.',
    "The \"greengrocer's apostrophe\" (apple's, banana's) is so common that students may not realise it is wrong. Use the real-world error photographs to make this memorable.",
    "The its/it's distinction requires repeated reinforcement. Consider a classroom display or frequent starter activities revisiting this throughout the year.",
    'Students who struggle with apostrophes often benefit from the decision tree approach: if it is not contraction or possession, there should be no apostrophe.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'Proofreading',
    'Punctuation knowledge',
    'Self-correction strategies',
  ],
}

// ─── Lesson 7: Commas, Lists, and Embedded Clauses ──────────────────────────

const lesson7: LessonPlan = {
  id: 'grammar-07-commas-clauses',
  title: 'Commas, Lists, and Embedded Clauses',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand and apply the main rules for comma usage: lists, subordinate clauses, and embedded clauses.',
    'Identify comma splices and run-on sentences and correct them appropriately.',
    'Use embedded clauses with paired commas to add detail and sophistication to writing.',
  ],
  successCriteria: [
    'I can use commas correctly in lists, after subordinate clauses, and around embedded clauses.',
    'I can identify and correct comma splices by replacing them with appropriate punctuation or conjunctions.',
    'I can write sentences that use embedded clauses to add additional information without disrupting the main clause.',
  ],
  keywords: [
    'comma',
    'comma splice',
    'embedded clause',
    'subordinate clause',
    'parenthetical',
    'relative clause',
    'run-on sentence',
    'listing comma',
  ],
  starterActivity: {
    title: 'The Comma That Saves Lives',
    duration: '7 minutes',
    instructions:
      'Display the famous pair: "Let\'s eat Grandma" vs "Let\'s eat, Grandma." Students discuss how the comma changes the meaning entirely. Then display three more pairs where comma placement changes meaning (e.g., "A woman without her man is nothing" vs "A woman: without her, man is nothing"). Students explain the difference in each pair. Teacher establishes that commas are not decorative - they are functional grammatical markers.',
    differentiation: {
      support:
        'Teacher explains the first pair and students attempt the remaining two with guidance.',
      core: 'Students explain all three pairs independently in writing.',
      stretch:
        'Students create their own ambiguous sentence where comma placement changes meaning, then share with the class.',
    },
    resources: ['Ambiguous sentence pairs slide'],
  },
  mainActivities: [
    {
      title: 'Comma Rules: Direct Instruction and Practice',
      duration: '20 minutes',
      instructions:
        'Teacher covers four key comma rules: (1) Listing commas - separating items in a list. (2) After a fronted subordinate clause - "Although it was raining, she went outside." (3) Around embedded (parenthetical) clauses - "The teacher, who had been there for twenty years, retired last week." (4) Before coordinating conjunctions in compound sentences (optional but encouraged). For each rule, teacher models two examples, students practise three, and common errors are addressed. Special focus on comma splices: "It was raining, she stayed inside" is incorrect - model four ways to fix it (full stop, semicolon, conjunction, subordination).',
      differentiation: {
        support:
          'A rule card with all four rules and examples is provided. Practice sentences have the subordinate or embedded clause already underlined.',
        core: 'Students complete all practice tasks independently and identify the comma rule used in each sentence.',
        stretch:
          'Students find and correct comma splices in a given paragraph, then rewrite each correction in two different ways.',
      },
      resources: ['Comma rules slides', 'Practice worksheet', 'Rule card (support tier)'],
    },
    {
      title: 'Embedded Clauses: Adding Sophistication to Writing',
      duration: '23 minutes',
      instructions:
        'Teacher explains that embedded clauses (also called parenthetical or relative clauses) add information in the middle of a sentence, enclosed by paired commas. Model: "The castle stood on the hill" → "The castle, which had been abandoned for decades, stood on the hill." Students practise adding embedded clauses to ten simple sentences, ensuring the main clause still makes grammatical sense when the embedded clause is removed. Students then write a descriptive paragraph (100-150 words) about a place, including at least four embedded clauses. Peer partners check each clause by "removing" it (covering it) to verify the sentence still works.',
      differentiation: {
        support:
          'A bank of embedded clauses is provided for students to insert into the simple sentences. Writing frame with prompts for where to add embedded clauses.',
        core: 'Students write original embedded clauses and compose the paragraph independently.',
        stretch:
          'Students vary the type of information in their embedded clauses (description, explanation, contrast) and annotate the effect of each one on the reader.',
      },
      resources: [
        'Embedded clause model slides',
        'Simple sentence expansion worksheet',
        'Embedded clause bank (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Comma Correction Race',
    duration: '7 minutes',
    instructions:
      'Teams of three receive a paragraph with eight comma errors (missing commas, unnecessary commas, and comma splices). The first team to correctly identify and fix all eight errors wins. Teacher reviews corrections and reinforces the four comma rules covered in the lesson.',
    differentiation: {
      support:
        'Error locations are indicated with a highlighted gap where the comma decision needs to be made.',
      core: 'Teams find and correct all errors collaboratively.',
      stretch: 'Teams must name the specific comma rule violated or needed for each correction.',
    },
  },
  homework:
    'Write a letter to a friend (150-200 words) describing a recent event. Underline every comma you use and write the rule number (1-4) next to it. Include at least two embedded clauses.',
  worksheetQuestions: [
    {
      question:
        'List the four main uses of commas covered in this lesson and give an example of each.',
      lines: 8,
      modelAnswer:
        '(1) Listing commas: "She packed a tent, a sleeping bag, a torch, and a map." (2) After a fronted subordinate clause: "Because the road was icy, the bus arrived late." The comma marks where the subordinate clause ends and the main clause begins. (3) Around embedded clauses: "My brother, who lives in Manchester, is visiting this weekend." The paired commas show that the embedded clause can be removed without affecting the main sentence. (4) Before a coordinating conjunction in a compound sentence: "The sky darkened, and the wind began to howl."',
      marks: 8,
    },
    {
      question:
        'What is a comma splice? Give an example and show two different ways to correct it.',
      lines: 5,
      modelAnswer:
        'A comma splice is when two independent clauses are joined only by a comma, which is grammatically incorrect. Example: "The rain stopped, the sun came out." Correction 1 (semicolon): "The rain stopped; the sun came out." Correction 2 (conjunction): "The rain stopped, and the sun came out." Other valid corrections include using a full stop to create two sentences, or subordinating one clause: "When the rain stopped, the sun came out."',
      marks: 4,
    },
    {
      question:
        'Add an embedded clause to each sentence: (a) "The old house creaked in the wind." (b) "The teacher gave out the results." (c) "The river flowed through the valley."',
      lines: 6,
      modelAnswer:
        '(a) "The old house, which had stood empty for years, creaked in the wind." (b) "The teacher, whose expression gave nothing away, gave out the results." (c) "The river, swollen by the recent rain, flowed through the valley." In each case, the embedded clause is enclosed by paired commas and can be removed without affecting the grammatical structure of the main clause.',
      marks: 6,
    },
    {
      question:
        'Proofread the following sentence and correct all comma errors: "Although it was late the children, wanted to keep playing but their parents who were tired said it was time to go home."',
      lines: 4,
      modelAnswer:
        'Corrected: "Although it was late, the children wanted to keep playing, but their parents, who were tired, said it was time to go home." Corrections: (1) Added a comma after "late" because "Although it was late" is a fronted subordinate clause. (2) Removed the comma after "children" because it incorrectly separated the subject from its verb. (3) Added a comma before "but" as it joins two independent clauses. (4) Added commas around "who were tired" because it is an embedded clause.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The comma splice is the single most common punctuation error in GCSE writing. Dedicate significant time to this and revisit it regularly.',
    'Students often add commas wherever they would pause in speech. Emphasise that commas follow grammatical rules, not breathing patterns.',
    'Embedded clauses are a hallmark of sophisticated writing and are explicitly rewarded in AO6 higher bands. Encourage students to practise these in every piece of extended writing.',
    'Link to the semicolon and colon lesson: students who understand comma splices can see why semicolons and colons are useful alternatives.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'AO5: Writing - content and organisation',
    'Punctuation knowledge',
    'Sentence construction',
  ],
}

// ─── Lesson 8: Word Classes and Their Functions ─────────────────────────────

const lesson8: LessonPlan = {
  id: 'grammar-08-word-classes',
  title: 'Word Classes and Their Functions',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and define the main word classes: nouns, verbs, adjectives, adverbs, prepositions, conjunctions, determiners, and pronouns.',
    'Analyse how writers select specific word classes to create particular effects.',
    'Use subject terminology accurately when discussing word classes in analytical responses.',
  ],
  successCriteria: [
    'I can identify and label at least seven word classes in a given sentence.',
    'I can explain the function of each word class and how it contributes to meaning.',
    "I can analyse a writer's word class choices using correct subject terminology in an analytical paragraph.",
  ],
  keywords: [
    'noun',
    'verb',
    'adjective',
    'adverb',
    'preposition',
    'conjunction',
    'determiner',
    'pronoun',
    'subject terminology',
    'word class',
  ],
  starterActivity: {
    title: 'Word Class Speed Sort',
    duration: '8 minutes',
    instructions:
      'Give each pair of students a set of 24 word cards. Students sort them into eight word class categories as quickly as possible. Some words are deliberately ambiguous (e.g., "light" can be a noun, adjective, or verb). Teacher stops the activity after four minutes and asks: which words were hardest to classify? Introduce the idea that word class depends on function in a sentence, not the word itself.',
    differentiation: {
      support:
        'Provide category headers and reduce the word set to 16 cards covering only nouns, verbs, adjectives, and adverbs.',
      core: 'Students sort all 24 cards into eight categories and identify at least two ambiguous words.',
      stretch:
        'Students write a sentence for each ambiguous word showing it functioning as two different word classes.',
    },
    resources: ['Word card sets (one per pair)', 'Category header cards (support tier)'],
  },
  mainActivities: [
    {
      title: 'Word Classes: Definitions, Functions, and Identification',
      duration: '22 minutes',
      instructions:
        'Teacher works through each word class using a single rich sentence displayed on the board: "The brave soldier marched quickly through the dark forest, and he never looked back." Students label every word with its word class. Teacher explains the function of each class: nouns name things; verbs show actions or states; adjectives modify nouns; adverbs modify verbs, adjectives, or other adverbs; prepositions show relationships; conjunctions link words or clauses; determiners specify nouns; pronouns replace nouns. Students then complete a structured worksheet: (1) label word classes in ten sentences, (2) identify the function of underlined words, (3) replace words with others from the same class to change the tone or mood.',
      differentiation: {
        support:
          'Provide a colour-coded reference poster. Worksheet focuses on tasks 1-2 with the four main word classes (noun, verb, adjective, adverb).',
        core: 'Students complete all three tasks for all eight word classes independently.',
        stretch:
          'Students analyse how changing a single word class choice (e.g., replacing one adjective with another) changes the mood, tone, or connotation of a sentence.',
      },
      resources: [
        'Model sentence slide',
        'Word class worksheet',
        'Reference poster (support tier)',
      ],
    },
    {
      title: "Word Classes in Action: Analysing Writer's Craft",
      duration: '20 minutes',
      instructions:
        'Students read a short literary extract and complete a word class analysis task. They highlight: (1) the three most powerful verbs and explain why the writer chose them, (2) two adjectives and their effect on the reader, (3) any adverbs and whether they strengthen or weaken the writing. Students then write an analytical paragraph using this frame: "The writer uses the [word class] \'[word]\' to [effect]. This is effective because [analysis]." Emphasis on using correct subject terminology (not "describing word" but "adjective"). Share exemplars and discuss how subject terminology improves analytical quality.',
      differentiation: {
        support:
          'Key words in the extract are pre-highlighted and labelled by word class. Paragraph frame provided with sentence starters.',
        core: 'Students highlight and analyse independently, then write the analytical paragraph using the frame.',
        stretch:
          "Students write two analytical paragraphs covering different word classes, without using the frame, and include a comment on the writer's overall pattern of word class choices.",
      },
      resources: [
        'Literary extract handout',
        'Highlighters',
        'Paragraph frame',
        'Subject terminology list',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Word Class Bingo',
    duration: '7 minutes',
    instructions:
      'Students create a 3x3 bingo grid and fill each square with a word class term. Teacher reads out definitions and example sentences; students cross off the matching word class. First student with a full line explains all three word classes to verify their understanding. Repeat for a full house if time allows.',
    differentiation: {
      support: "Definitions are accompanied by an example word on the teacher's slide.",
      core: 'Students identify the word class from the definition alone.',
      stretch:
        'Students must give their own example word for each class they cross off, used in a sentence.',
    },
  },
  homework:
    'Choose a paragraph from any text (novel, newspaper, website). Copy it out and label every word with its word class. Write a 100-word analysis explaining which word class dominates and what effect this creates.',
  worksheetQuestions: [
    {
      question:
        'Define four main word classes (noun, verb, adjective, adverb) and give two examples of each.',
      lines: 8,
      modelAnswer:
        'A noun names a person, place, thing, or idea: "dog," "happiness." A verb describes an action, state, or occurrence: "run," "believe." An adjective modifies a noun by describing its qualities: "tall," "mysterious." An adverb modifies a verb, adjective, or other adverb, often indicating how, when, where, or to what extent: "quickly," "extremely." Each word class has a distinct grammatical function and understanding them is essential for analysing language effectively.',
      marks: 8,
    },
    {
      question:
        'Identify the word class of each underlined word: "The (a) ancient (b) castle (c) stood (d) silently (e) on the hill."',
      lines: 5,
      modelAnswer:
        '(a) "ancient" - adjective. It modifies the noun "castle," describing its age. (b) "castle" - noun. It names a thing and is the subject of the sentence. (c) "stood" - verb. It describes the action (or state) of the castle. (d) "silently" - adverb. It modifies the verb "stood," telling us how the castle stood. (e) "on" - preposition. It shows the spatial relationship between the castle and the hill.',
      marks: 5,
    },
    {
      question:
        'Explain why the word "light" can belong to different word classes. Write three sentences using "light" as a different word class each time.',
      lines: 5,
      modelAnswer:
        'The word "light" can function as different word classes depending on its role in the sentence. As a noun: "The light shone through the window" (naming a thing). As an adjective: "She wore a light jacket" (modifying the noun "jacket"). As a verb: "Please light the candle" (describing an action). This demonstrates that word class is determined by function in context, not by the word itself.',
      marks: 4,
    },
    {
      question:
        'A student writes: "The writer uses good describing words to make the reader feel scared." Rewrite this sentence using correct subject terminology.',
      lines: 4,
      modelAnswer:
        'Rewritten: "The writer uses sinister adjectives such as \'ghastly\' and \'decaying\' to create a sense of fear in the reader." The improvement replaces the vague phrase "good describing words" with the correct subject terminology "adjectives" and provides specific examples. Using precise terminology demonstrates understanding and is explicitly rewarded by examiners assessing AO2 (analysis of language).',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The terms "describing word" and "doing word" must be replaced with "adjective" and "verb" by this stage. Insist on correct subject terminology in all written and verbal responses.',
    'Word class knowledge is foundational for AO2 analysis. Without it, students cannot accurately discuss language choices.',
    'The ambiguous words activity (e.g., "light," "run," "back") is an excellent way to develop understanding that word class is about function, not inherent meaning.',
    'Determiners and prepositions are often overlooked. While they are less frequently analysed in GCSE responses, students should know them for full marks in the SPaG component.',
  ],
  targetedSkills: [
    'AO2: Language analysis',
    'Subject terminology',
    'Grammar knowledge',
    'Analytical writing',
  ],
}

// ─── Lesson 9: Standard English vs Non-Standard ─────────────────────────────

const lesson9: LessonPlan = {
  id: 'grammar-09-standard-nonstandard',
  title: 'Standard English vs Non-Standard English',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand what Standard English is and when it is required in formal writing contexts.',
    'Identify common non-standard constructions and convert them to Standard English.',
    'Explore how writers deliberately use non-standard English for characterisation, voice, and authenticity.',
  ],
  successCriteria: [
    'I can define Standard English and explain why it is important in formal and academic contexts.',
    'I can identify at least five non-standard constructions and rewrite them in Standard English.',
    'I can explain why a writer might deliberately choose to use non-standard English and analyse its effect.',
  ],
  keywords: [
    'Standard English',
    'non-standard English',
    'dialect',
    'register',
    'formality',
    'idiolect',
    'code-switching',
    'colloquialism',
  ],
  starterActivity: {
    title: 'Formal or Informal? Register Sort',
    duration: '8 minutes',
    instructions:
      'Display ten sentences on the board - five in Standard English and five in non-standard English (e.g., "We was going to the shops" vs "We were going to the shops"). Students sort them into two columns and discuss: what makes some of these "wrong"? Teacher introduces the terms Standard English and non-standard English, emphasising that non-standard is not "wrong" in everyday speech - it is simply not appropriate for formal writing contexts. Discuss the concept of register and code-switching.',
    differentiation: {
      support:
        'Provide the two column headings and one example already sorted to establish the pattern.',
      core: 'Students sort all ten sentences and articulate the pattern they notice.',
      stretch:
        'Students identify the specific grammatical feature that makes each non-standard sentence non-standard (e.g., subject-verb disagreement, double negative, non-standard past tense).',
    },
    resources: ['Sentence sort slide', 'Two-column template'],
  },
  mainActivities: [
    {
      title: 'Standard English Rules and Non-Standard Patterns',
      duration: '20 minutes',
      instructions:
        'Teacher covers the most common non-standard constructions that appear in GCSE writing: (1) Subject-verb disagreement: "we was" → "we were", "they was" → "they were". (2) Double negatives: "I didn\'t do nothing" → "I didn\'t do anything." (3) Non-standard past tenses: "I done it" → "I did it", "she seen it" → "she saw it." (4) Missing adverbs: "she spoke quiet" → "she spoke quietly." (5) Non-standard pronoun usage: "me and my friend went" → "my friend and I went." For each pattern, teacher models the correction and explains the Standard English rule. Students complete a 20-sentence correction exercise, converting non-standard to Standard English.',
      differentiation: {
        support:
          'Exercise includes the non-standard feature underlined with the Standard English rule printed alongside. Focus on patterns 1-3.',
        core: 'Students correct all twenty sentences independently and identify which pattern each error represents.',
        stretch:
          'Students also explain why each non-standard form exists (e.g., dialect regularisation) and write a paragraph arguing whether Standard English should be the only form taught in schools.',
      },
      resources: [
        'Non-standard patterns slides',
        'Correction exercise worksheet',
        'Rule reference (support tier)',
      ],
    },
    {
      title: 'Non-Standard English in Literature: When Rules Are Broken Deliberately',
      duration: '22 minutes',
      instructions:
        'Students read two literary extracts that use non-standard English deliberately: (1) a dialogue extract using dialect (e.g., from a novel set in a specific region or featuring working-class characters) and (2) a first-person narrative written in a distinctive idiolect. For each extract, students answer: What non-standard features are used? Why has the writer chosen non-standard English here? What effect does it create? Students then write a short creative piece (100-150 words) featuring two characters - one speaking in Standard English and one in a non-standard dialect. They annotate their choices, explaining what each register communicates about the character.',
      differentiation: {
        support:
          'Guided analysis questions with sentence starters for each extract. A character profile and dialogue prompts provided for the creative task.',
        core: 'Students analyse both extracts independently and write the creative piece with full annotations.',
        stretch:
          'Students write an analytical paragraph comparing the two extracts, evaluating which writer uses non-standard English more effectively and why. Creative piece includes a shift in register for one character to demonstrate code-switching.',
      },
      resources: [
        'Two literary extract handouts',
        'Analysis question sheet',
        'Character profile (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Register Remix',
    duration: '7 minutes',
    instructions:
      'Display a short informal text message conversation. Students rewrite it in formal Standard English as if it were a business email. Then display a formal letter and students rewrite one paragraph as it might appear in a text message. Discuss: what changes? Why does register matter? How does this connect to exam writing?',
    differentiation: {
      support:
        'Teacher models the first transformation; students complete the second with a partner.',
      core: 'Students complete both transformations independently.',
      stretch:
        'Students write a third version in a literary register and discuss how register is a spectrum, not a binary.',
    },
  },
  homework:
    'Listen to or read a conversation (real or fictional) that uses non-standard English. Transcribe 5-10 lines and rewrite them in Standard English. Write a short commentary (100 words) explaining what is lost or changed in the Standard English version.',
  worksheetQuestions: [
    {
      question:
        'Define Standard English. Why is it important in formal writing and exam responses?',
      lines: 4,
      modelAnswer:
        'Standard English is the conventionally accepted form of English used in formal, academic, and professional contexts. It follows established grammatical rules and is the variety of English expected in published writing, education, and official communication. It is important in exam responses because GCSE marking criteria (AO6) explicitly require "Standard English" for higher-band marks. Using non-standard constructions in formal writing is penalised because it suggests a lack of grammatical control, even if the student uses non-standard forms accurately in speech.',
      marks: 4,
    },
    {
      question:
        'Rewrite the following sentences in Standard English: (a) "We was proper annoyed about it." (b) "She never done nothing wrong." (c) "Me and him went to the shop." (d) "He spoke really quiet like."',
      lines: 5,
      modelAnswer:
        '(a) "We were extremely annoyed about it." - "was" corrected to "were" (subject-verb agreement); "proper" replaced with "extremely" (adverb, not adjective, needed to modify "annoyed"). (b) "She did not do anything wrong." - "never done nothing" is a double negative; "done" corrected to "did" (standard past tense). (c) "He and I went to the shop." - "Me" replaced with "I" (subject pronoun); "him" replaced with "he"; conventionally, the first person comes last. (d) "He spoke really quietly." - "quiet" corrected to "quietly" (adverb needed to modify the verb "spoke"); "like" removed as a filler word.',
      marks: 8,
    },
    {
      question:
        'Why might a novelist choose to write dialogue in non-standard English? Give an example of the effect this creates.',
      lines: 5,
      modelAnswer:
        'A novelist might use non-standard English in dialogue to create authentic, believable characters that reflect a specific region, class, or cultural background. This makes characters feel real rather than artificial. For example, a character speaking in Yorkshire dialect ("tha knows" instead of "you know") immediately signals their identity and roots, helping the reader hear their distinctive voice. Non-standard English can also challenge assumptions about education and intelligence, or create contrast between characters of different social backgrounds. The effect is richer characterisation and a more immersive reading experience.',
      marks: 4,
    },
    {
      question:
        'Explain the concept of "code-switching." Give an example of when a person might code-switch between Standard and non-standard English.',
      lines: 5,
      modelAnswer:
        'Code-switching is the practice of shifting between different language varieties, registers, or dialects depending on the social context. A person might speak in a regional dialect at home with family (e.g., "I ain\'t got none left") but switch to Standard English in a job interview (e.g., "I don\'t have any remaining"). This is not dishonesty - it is a sophisticated linguistic skill that demonstrates awareness of audience and context. Code-switching shows that the speaker understands which register is appropriate for each situation.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Handle this topic sensitively: non-standard English is not "wrong" or "inferior." Many students speak non-standard dialects at home, and it is important not to imply their home language is deficient.',
    'Frame Standard English as a tool for formal contexts, not as the "correct" form of English. The goal is bidialectalism, not replacement.',
    'This lesson connects to Language Paper 2 Question 5 (formal writing) and to Literature analysis of dialogue and characterisation.',
    'The code-switching concept is empowering for students who speak non-standard dialects - it reframes their linguistic repertoire as an asset, not a deficit.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'AO5: Writing - content and organisation',
    'Standard English knowledge',
    'Register awareness',
  ],
}

// ─── Lesson 10: SPaG in Exam Responses - Maximising Marks ──────────────────

const lesson10: LessonPlan = {
  id: 'grammar-10-spag-exam-technique',
  title: 'SPaG in Exam Responses: Maximising Marks',
  text: 'Grammar and Punctuation',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how SPaG (Spelling, Punctuation, and Grammar) is assessed across GCSE English papers.',
    'Develop a systematic proofreading strategy to eliminate common errors under timed conditions.',
    'Apply all grammar and punctuation skills from the unit to produce a polished exam-standard response.',
  ],
  successCriteria: [
    'I can explain how and where SPaG marks are awarded in both Language and Literature papers.',
    'I can use a systematic proofreading checklist to identify and correct errors in my own writing.',
    'I can produce a timed written response that demonstrates accurate spelling, punctuation, and grammar at a higher-band standard.',
  ],
  keywords: [
    'SPaG',
    'AO6',
    'proofreading',
    'technical accuracy',
    'band descriptors',
    'self-correction',
    'timed writing',
    'mark scheme',
  ],
  starterActivity: {
    title: "Mark the Examiner's Way",
    duration: '8 minutes',
    instructions:
      "Display two student response extracts (anonymised) - one with strong SPaG and one with frequent errors. Students read both and predict which would score higher for AO6 (technical accuracy). Reveal the actual marks and the examiner's comments. Key finding: the content may be similar, but the student with accurate SPaG scores significantly higher. Teacher displays the AO6 band descriptors and highlights what examiners are specifically looking for.",
    differentiation: {
      support:
        'Teacher guides students through the band descriptors, highlighting key phrases with annotations.',
      core: 'Students identify which band each extract falls into and justify their decision using the descriptors.',
      stretch:
        "Students rewrite the weaker extract's first paragraph to bring it up to the higher band, noting every change made.",
    },
    resources: ['Two student response extracts', 'AO6 band descriptors handout'],
  },
  mainActivities: [
    {
      title: 'The SPaG Proofreading System',
      duration: '18 minutes',
      instructions:
        'Teacher introduces a systematic proofreading strategy using the acronym CAPS: C - Commas and punctuation (check for comma splices, missing full stops, correct semicolon/colon use). A - Agreement (check subject-verb agreement and tense consistency). P - Possession and apostrophes (check every apostrophe is either contraction or possession). S - Spelling and sentence structure (check homophones, sentence variety, and that every sentence is complete). Students practise the CAPS system on a provided 300-word response, making corrections in a different colour pen. Each letter is tackled as a separate "pass" through the text, training students to read for one error type at a time rather than trying to catch everything in a single read.',
      differentiation: {
        support:
          'CAPS checklist card provided with specific items to look for under each letter. The practice response has errors concentrated and numbered.',
        core: 'Students complete all four passes independently and tally the number of errors found in each category.',
        stretch:
          'Students complete all four passes, then add a fifth pass for "style" - identifying places where sentence structure could be varied or vocabulary upgraded for greater impact.',
      },
      resources: [
        'CAPS proofreading poster/slide',
        'Practice response handout',
        'CAPS checklist card (support tier)',
        'Coloured pens',
      ],
    },
    {
      title: 'Timed Writing with SPaG Focus',
      duration: '25 minutes',
      instructions:
        'Students complete a timed writing task under exam conditions: "Write a letter to your headteacher arguing for a change you would like to see in your school" (20 minutes writing + 5 minutes CAPS proofreading). Before writing, teacher reminds students of the key SPaG features that demonstrate higher-band accuracy: varied sentence types, semicolons and colons used correctly, embedded clauses, accurate apostrophes, Standard English throughout, and effective paragraphing with topic sentences. After the 20-minute writing phase, the teacher explicitly stops the class and guides them through the 5-minute CAPS proofreading process, timing each pass at just over one minute.',
      differentiation: {
        support:
          'A planning frame with paragraph prompts is provided. During proofreading, students focus on C and A passes only.',
        core: 'Students write and proofread independently using all four CAPS passes.',
        stretch:
          'Students write without a planning frame and complete a full CAPS proofread plus a style pass. They also write a brief self-assessment identifying their strongest and weakest SPaG area.',
      },
      resources: [
        'Task instruction slide',
        'Planning frame (support tier)',
        'CAPS checklist',
        'Timer',
        'Lined response paper',
      ],
    },
  ],
  plenaryActivity: {
    title: 'SPaG Pledge and Self-Assessment',
    duration: '7 minutes',
    instructions:
      'Students review their timed response and complete a self-assessment grid scoring themselves on each CAPS category (1-4). They then write a "SPaG Pledge" - one specific commitment to improve their weakest area (e.g., "I pledge to check every apostrophe in my writing by asking: is it contraction or possession?"). Teacher collects pledges for reference in future lessons.',
    differentiation: {
      support:
        'Self-assessment grid includes example statements for each score level. Pledge sentence starter provided.',
      core: 'Students self-assess independently and write a detailed pledge with an action plan.',
      stretch:
        'Students write a pledge for their two weakest areas and create three practice sentences that target each weakness.',
    },
  },
  homework:
    'Take any piece of extended writing from another subject (History, Geography, RE, etc.). Apply the CAPS proofreading system and correct all SPaG errors. Write a 100-word reflection on what you found: which error type was most common? What will you do differently next time?',
  worksheetQuestions: [
    {
      question:
        'Explain how SPaG marks are awarded in GCSE English. Why is technical accuracy worth paying attention to?',
      lines: 5,
      modelAnswer:
        'SPaG marks are awarded through AO6 in English Language and through the SPaG component in English Literature. In Language Paper 1 and Paper 2, Question 5 allocates up to 16 marks for AO6 (technical accuracy), which is assessed on the quality of sentence demarcation, punctuation, spelling, and Standard English. In Literature, up to 4 marks are available for SPaG in the extended response. Technical accuracy is worth attention because these marks are often the difference between grades - a student with strong content but poor SPaG will be capped in the lower bands of AO6, losing marks that could push them to a higher grade.',
      marks: 5,
    },
    {
      question:
        'Explain the CAPS proofreading strategy. Why is it more effective to proofread in multiple passes rather than one?',
      lines: 5,
      modelAnswer:
        'CAPS stands for Commas and punctuation, Agreement (subject-verb and tense), Possession and apostrophes, and Spelling and sentence structure. Multiple passes are more effective because the human brain struggles to check for all error types simultaneously. When we read our own writing, we tend to read what we meant to write rather than what we actually wrote. By focusing on one error type per pass, we are more likely to catch specific mistakes. Research shows that targeted proofreading catches significantly more errors than a single general read-through.',
      marks: 4,
    },
    {
      question:
        'Read the following extract from a student response and identify five SPaG errors. Correct each one and explain the rule it breaks.',
      lines: 8,
      modelAnswer:
        "Answers will vary depending on the extract provided, but should follow this format for each error: (1) Identify the error (quote the incorrect text). (2) Provide the correction. (3) Name the rule: e.g., \"The student wrote 'the students work' - this should be 'the students' work' because the work belongs to multiple students, requiring a plural possessive apostrophe.\" Each correction should demonstrate understanding of the relevant grammatical rule, not just the surface-level fix.",
      marks: 10,
    },
    {
      question:
        'A student says: "I don\'t need to worry about SPaG because my ideas are good." Write a response explaining why this attitude is problematic, using specific reference to how SPaG is marked.',
      lines: 6,
      modelAnswer:
        'While strong ideas are essential for AO5 (content and organisation), SPaG is assessed separately under AO6, and both assessment objectives contribute to the final mark. A student with excellent ideas but poor technical accuracy will score well on AO5 but be capped in the lower bands of AO6 - potentially losing 8-10 marks on a single question. Moreover, poor SPaG can actually undermine the clarity of ideas, making it harder for the examiner to follow the argument. In competitive grade boundaries, SPaG marks are often the difference between grades. The most successful students combine strong ideas with accurate technical expression.',
      marks: 5,
    },
    {
      question:
        'List five specific SPaG features that an examiner would expect to see in a Band 5 (top band) response. Give an example of each.',
      lines: 8,
      modelAnswer:
        '(1) Varied sentence structures used deliberately for effect: "The street was empty. Not a sound. Not a movement. Yet somewhere, hidden in the darkness that had swallowed every doorway and alley, something waited." (2) Accurate use of semicolons and colons: "The evidence is overwhelming: change is necessary." (3) Embedded clauses with paired commas: "The headteacher, who had served the school for fifteen years, announced her resignation." (4) Consistently accurate apostrophes: "The students\' results exceeded the school\'s expectations." (5) Secure Standard English with no lapses: consistent subject-verb agreement, correct tense usage, and appropriate register throughout.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best as a culmination of the grammar and punctuation unit. Ensure students have covered all previous lessons before attempting this synthesis lesson.',
    'The CAPS system should become a habit: display it as a classroom poster and reference it every time students complete extended writing.',
    'The timed writing task can be adapted to match whichever paper the class is next sitting - adjust the task to a narrative, description, speech, or article as needed.',
    'Collect the timed responses and use them diagnostically: identify whole-class patterns to inform revision priorities.',
    'SPaG pledges can be revisited at the start of subsequent writing lessons as a quick reminder and accountability check.',
  ],
  targetedSkills: [
    'AO6: Technical accuracy',
    'AO5: Writing - content and organisation',
    'Proofreading',
    'Exam technique',
    'Self-assessment',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const grammarPunctuationLessons: LessonPlan[] = [
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
