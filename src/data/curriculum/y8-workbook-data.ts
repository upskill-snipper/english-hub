// =============================================================================
// Year 8 Workbook & Homework Data
// =============================================================================

export interface WorkbookExercise {
  id: string
  title: string
  termUnit: string
  type:
    | 'comprehension'
    | 'analysis'
    | 'creative-writing'
    | 'grammar'
    | 'vocabulary'
    | 'comparison'
    | 'evaluation'
    | 'planning'
    | 'quotation-practice'
    | 'language-analysis'
    | 'speech-writing'
    | 'media-literacy'
  instructions: string
  modelAnswer: string
  marks: number
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery'
  keywords: string[]
  linkedObjectives: string[]
}

export interface HomeworkTask {
  id: string
  title: string
  halfTerm: number
  weekNumber: number
  type: 'reading-response' | 'extended-writing' | 'research' | 'creative' | 'revision' | 'analysis'
  instructions: string
  modelAnswer: string
  marks: number
  estimatedMinutes: number
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery'
  keywords: string[]
  linkedObjectives: string[]
}

// =============================================================================
// TERM 1 WORKBOOK: Dystopian Fiction & Power (The Hunger Games focus)
// =============================================================================

const t1Exercises: WorkbookExercise[] = [
  {
    id: 'y8-t1-ex01',
    title: 'First Impressions of District 12',
    termUnit: 'T1: Dystopian Fiction',
    type: 'comprehension',
    instructions:
      '<p>Read the opening chapter extract from <em>The Hunger Games</em> describing District 12.</p>' +
      '<ol>' +
      '<li>Identify three details that show District 12 is a place of poverty. (3 marks)</li>' +
      '<li>What impression does the reader get of Katniss from the opening? Use evidence. (3 marks)</li>' +
      '<li>How does Collins create a sense of unease in the opening? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Three details showing poverty: the "Seam" is described as a coal-mining area with hunger, the houses are barely standing, and the streets are deserted with an air of oppression. ' +
      'Katniss is presented as resourceful and protective -- she hunts illegally to feed her family, showing courage and defiance. The reader respects her independence. ' +
      'Collins creates unease through the contrast between the quiet District and the looming threat of the Reaping. The matter-of-fact tone about starvation normalises suffering, making the world feel bleak and dangerous.',
    marks: 10,
    difficulty: 'developing',
    keywords: ['dystopia', 'setting', 'characterisation', 'inference'],
    linkedObjectives: ['Y8.R1', 'Y8.R3', 'Y8.R5'],
  },
  {
    id: 'y8-t1-ex02',
    title: 'Power and Control in Panem',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>The Capitol maintains power over the districts through various methods.</p>' +
      '<ol>' +
      '<li>List four methods the Capitol uses to control the districts. (4 marks)</li>' +
      '<li>Explain how the Hunger Games themselves are a tool of power. Use the concept of "bread and circuses." (4 marks)</li>' +
      "<li>Compare the Capitol's control to a real-world example of authoritarian power. (4 marks)</li>" +
      '</ol>',
    modelAnswer:
      'Methods of control: the Hunger Games as punishment and entertainment; restricting food supply and resources; the Peacekeepers who enforce rules through violence; propaganda via mandatory viewing of the Games. ' +
      'The Games function as "bread and circuses" -- they distract the wealthier districts with entertainment while reminding poorer districts of the Capitol\'s absolute power. The spectacle prevents unified rebellion by forcing districts to compete against each other. ' +
      'This mirrors real authoritarian regimes such as totalitarian states that use state media to control narratives, enforce curfews, and make public examples of dissenters to suppress opposition.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['power', 'control', 'totalitarianism', 'propaganda', 'bread and circuses'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2'],
  },
  {
    id: 'y8-t1-ex03',
    title: 'Inequality: The Reaping System',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>The tessera system means poorer children are more likely to be chosen for the Games.</p>' +
      '<ol>' +
      '<li>Explain how the tessera system works. (2 marks)</li>' +
      '<li>Why does this system represent inequality? (3 marks)</li>' +
      '<li>Write a paragraph analysing how Collins uses the tessera system to comment on class and poverty. Use a quotation in your answer. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The tessera system allows children to enter their name additional times in the Reaping in exchange for a small supply of grain and oil. Each tessera entry is cumulative, so by age eighteen a poor child could have their name entered dozens of times. ' +
      'This represents inequality because wealthier families never need tesserae, meaning their children face far lower odds of being selected. The system punishes poverty -- the most vulnerable are most at risk. ' +
      'Collins uses the tessera system as a microcosm of class inequality. The fact that "the odds are not in your favour" if you are poor mirrors real-world systems where disadvantaged communities bear disproportionate burdens. Collins forces the reader to question whether systems presented as "fair" are truly equitable.',
    marks: 10,
    difficulty: 'secure',
    keywords: ['inequality', 'class', 'tessera', 'social commentary', 'poverty'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W3'],
  },
  {
    id: 'y8-t1-ex04',
    title: 'Inference: Reading Between the Lines',
    termUnit: 'T1: Dystopian Fiction',
    type: 'comprehension',
    instructions:
      '<p>Read the extract where Katniss volunteers for Prim at the Reaping.</p>' +
      '<ol>' +
      "<li>What can we infer about Katniss and Prim's relationship? (2 marks)</li>" +
      "<li>What can we infer about the crowd's reaction when they refuse to clap? (3 marks)</li>" +
      '<li>Explain what the three-finger salute implies about the people of District 12. (3 marks)</li>' +
      '<li>How does Collins use this moment to develop the theme of resistance? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'We can infer Katniss loves Prim unconditionally and would sacrifice herself without hesitation -- this is instinctive, not calculated. Their bond is the emotional heart of the story. ' +
      "The crowd's refusal to clap is a silent act of defiance. We can infer they are disgusted by the system but afraid to speak out openly. Their silence is more powerful than cheering would be. " +
      'The three-finger salute implies District 12 has its own culture of quiet resistance -- a shared gesture of respect and solidarity that the Capitol cannot control. ' +
      'Collins uses this moment to plant the seeds of rebellion. The personal act of love (volunteering) becomes political because it exposes the cruelty of the system and unites the crowd in shared grief and anger.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['inference', 'implication', 'subtext', 'resistance', 'defiance'],
    linkedObjectives: ['Y8.R2', 'Y8.R3', 'Y8.R5'],
  },
  {
    id: 'y8-t1-ex05',
    title: 'Embedding Quotations: The PEEL Method',
    termUnit: 'T1: Dystopian Fiction',
    type: 'quotation-practice',
    instructions:
      '<p>Embedding quotations means weaving them into your own sentences rather than dropping them in.</p>' +
      '<p><strong>Dropped:</strong> Katniss is brave. "I volunteer as tribute."</p>' +
      '<p><strong>Embedded:</strong> Katniss demonstrates courage when she declares "I volunteer as tribute," sacrificing herself to save her sister.</p>' +
      '<ol>' +
      '<li>Rewrite these three dropped quotations as embedded quotations: (6 marks)<br/>' +
      'a) The Capitol is powerful. "May the odds be ever in your favour."<br/>' +
      'b) Katniss is a hunter. "I pull on my hunting boots."<br/>' +
      'c) District 12 is poor. "Starvation is not an uncommon fate."</li>' +
      '<li>Write your own PEEL paragraph about Katniss as a survivor, embedding at least two quotations. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'a) The Capitol\'s condescending power is captured in the chilling phrase "May the odds be ever in your favour," which disguises cruelty as generosity. ' +
      'b) Collins establishes Katniss as a skilled hunter from the outset as she instinctively reaches to "pull on [her] hunting boots," suggesting this is routine survival. ' +
      'c) The bleak reality of District 12 is exposed through the narrator\'s resigned observation that "starvation is not an uncommon fate," normalising suffering in a way that shocks the reader. ' +
      'PEEL paragraph: Katniss is presented as the ultimate survivor throughout the novel. Collins shows her resourcefulness when she instinctively reaches for her "hunting boots," revealing that survival is a daily practice, not a choice. Furthermore, her willingness to declare "I volunteer as tribute" demonstrates that her survival instinct extends to protecting those she loves. Collins suggests that true survival is not selfish -- it requires courage, skill, and love.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['embedding quotations', 'PEEL', 'evidence', 'analytical writing'],
    linkedObjectives: ['Y8.W1', 'Y8.W3', 'Y8.R5'],
  },
  {
    id: 'y8-t1-ex06',
    title: 'Katniss as a Protagonist',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>Analyse Katniss as a protagonist using the prompts below.</p>' +
      '<ol>' +
      '<li>List three character traits of Katniss and provide evidence for each. (6 marks)</li>' +
      '<li>How does Katniss compare to a traditional hero? Consider strengths and flaws. (4 marks)</li>' +
      '<li>Why is Katniss an effective protagonist for a dystopian novel? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Three traits: (1) Resourceful -- she hunts illegally to feed her family, demonstrating practical intelligence; (2) Loyal -- she volunteers for Prim without hesitation, showing fierce protectiveness; (3) Distrustful -- she struggles to trust allies in the arena, revealing the emotional cost of her upbringing. ' +
      'Unlike a traditional hero, Katniss does not seek glory or power. She is reluctant, driven by necessity rather than ambition. Her flaws -- emotional guardedness, difficulty expressing feelings -- make her human and relatable. ' +
      'Katniss is effective as a dystopian protagonist because she is both a product of the oppressive system and its greatest threat. Her survival skills come from poverty, and her defiance is born from personal love rather than ideology, making her rebellion feel authentic and accessible to readers.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['protagonist', 'characterisation', 'hero', 'dystopia', 'archetype'],
    linkedObjectives: ['Y8.R3', 'Y8.R5', 'Y8.W3'],
  },
  {
    id: 'y8-t1-ex07',
    title: 'The Role of the Media in Panem',
    termUnit: 'T1: Dystopian Fiction',
    type: 'evaluation',
    instructions:
      '<p>The Games are televised, and tributes must perform for sponsors.</p>' +
      '<ol>' +
      '<li>How does the Capitol use media to control public perception? (3 marks)</li>' +
      '<li>Why is the "interview" segment before the Games significant? (3 marks)</li>' +
      '<li>Write a comparative paragraph linking the role of media in Panem to reality television today. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      "The Capitol uses media as propaganda -- mandatory viewing ensures all citizens witness the consequences of rebellion. The Games are edited and narrated to create the Capitol's preferred story, controlling truth. " +
      'The interview segment is significant because it forces tributes to become performers. They must suppress fear and present a likeable persona to win sponsors, showing how the system commodifies human life. ' +
      'Collins draws deliberate parallels to reality television. Just as contestants on modern shows are edited into heroes or villains, tributes are packaged for entertainment. The audience in Panem, like viewers today, becomes desensitised to suffering when it is framed as spectacle. Collins challenges us to question our own complicity as consumers of dramatic content.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['media', 'propaganda', 'reality television', 'spectacle', 'manipulation'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2'],
  },
  {
    id: 'y8-t1-ex08',
    title: 'Vocabulary of Power and Oppression',
    termUnit: 'T1: Dystopian Fiction',
    type: 'vocabulary',
    instructions:
      '<p>Match each keyword to its correct definition, then use each in a sentence about <em>The Hunger Games</em>.</p>' +
      '<table><tr><th>Word</th><th>Definition options</th></tr>' +
      '<tr><td>1. Totalitarian</td><td>A. Unfair distribution of resources or opportunities</td></tr>' +
      '<tr><td>2. Propaganda</td><td>B. Cruel and unjust use of power or authority</td></tr>' +
      '<tr><td>3. Inequality</td><td>C. A government that demands total obedience and controls all aspects of life</td></tr>' +
      '<tr><td>4. Oppression</td><td>D. Biased information used to promote a political cause</td></tr>' +
      '<tr><td>5. Rebellion</td><td>E. Open resistance to authority</td></tr>' +
      '</table>' +
      '<ol>' +
      '<li>Match each word to its definition. (5 marks)</li>' +
      '<li>Use each word in a sentence about <em>The Hunger Games</em>. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Matching: 1-C, 2-D, 3-A, 4-B, 5-E. ' +
      'Sentences: (1) The Capitol operates as a totalitarian regime, controlling every aspect of life in the districts. ' +
      '(2) The televised Games serve as propaganda, presenting the Capitol as generous and just. ' +
      '(3) The tessera system reinforces inequality by disproportionately endangering poorer children. ' +
      '(4) The districts suffer daily oppression through food shortages, surveillance, and violent enforcement. ' +
      "(5) Katniss's defiance at the Reaping plants the first seeds of rebellion against the Capitol.",
    marks: 10,
    difficulty: 'foundation',
    keywords: ['totalitarian', 'propaganda', 'inequality', 'oppression', 'rebellion'],
    linkedObjectives: ['Y8.V1', 'Y8.V2', 'Y8.W1'],
  },
  {
    id: 'y8-t1-ex09',
    title: "Writer's Methods: How Collins Builds Tension",
    termUnit: 'T1: Dystopian Fiction',
    type: 'language-analysis',
    instructions:
      '<p>Read the extract describing the countdown before the Games begin in the arena.</p>' +
      '<ol>' +
      '<li>Identify three language techniques Collins uses to build tension. (3 marks)</li>' +
      '<li>For each technique, explain its effect on the reader. (6 marks)</li>' +
      '<li>How does Collins use sentence structure to create a sense of urgency? (3 marks)</li>' +
      '</ol>',
    modelAnswer:
      "Three techniques: (1) First-person present tense narration creates immediacy, making the reader feel they are experiencing the countdown alongside Katniss; (2) Short, declarative sentences mirror Katniss's racing thoughts and quickened heartbeat, increasing pace; (3) Sensory detail -- sounds, physical sensations -- grounds the reader in the terrifying moment. " +
      'Collins uses sentence structure strategically: the sentences become progressively shorter as the countdown approaches zero, mimicking rising panic. Fragments and minor sentences strip away description, leaving only raw action and instinct. This structural shift forces the reader to read faster, physically replicating the urgency Katniss feels.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['tension', 'sentence structure', 'present tense', 'pace', 'sensory detail'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W3'],
  },
  {
    id: 'y8-t1-ex10',
    title: 'Creative Writing: A Dystopian Opening',
    termUnit: 'T1: Dystopian Fiction',
    type: 'creative-writing',
    instructions:
      '<p>Write the opening 200-250 words of your own dystopian story.</p>' +
      '<p>Your opening must:</p>' +
      '<ul>' +
      '<li>Establish a setting that feels oppressive or controlled</li>' +
      '<li>Introduce a protagonist through action or thought</li>' +
      '<li>Use at least two techniques you have studied (e.g., short sentences for tension, sensory detail, first-person narration)</li>' +
      '<li>Include a hint of the conflict or threat to come</li>' +
      '</ul>' +
      '<p>After writing, annotate your work identifying the techniques you used. (12 marks for writing, 4 marks for annotation)</p>',
    modelAnswer:
      'A strong response would establish an oppressive world through specific sensory details (grey skies, surveillance cameras, silent streets), introduce a protagonist through action rather than description (e.g., hiding something, breaking a rule), and create tension through short sentences and a foreboding tone. ' +
      'The annotation should identify techniques such as: pathetic fallacy to reflect mood, first-person narration for intimacy, a semantic field of control/confinement, and deliberate sentence variation to control pace. The best responses will show, not tell -- allowing the reader to infer the nature of the dystopia rather than explaining it directly.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['dystopia', 'creative writing', 'setting', 'protagonist', 'narrative voice'],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  {
    id: 'y8-t1-ex11',
    title: 'Comparing Dystopian Worlds',
    termUnit: 'T1: Dystopian Fiction',
    type: 'comparison',
    instructions:
      '<p>Compare the dystopian world of <em>The Hunger Games</em> with one other dystopian text you have encountered (e.g., <em>1984</em>, <em>The Giver</em>, <em>Divergent</em>, a short story, or a film).</p>' +
      '<ol>' +
      '<li>What methods of control exist in each world? (4 marks)</li>' +
      '<li>How are protagonists similar or different? (4 marks)</li>' +
      '<li>Which dystopia do you find more frightening, and why? Write a developed paragraph. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Strong answers will identify specific methods of control in both texts (e.g., surveillance, restricted information, physical punishment) and find meaningful points of comparison. ' +
      'Protagonists should be compared in terms of their awareness of oppression, their motivations for resistance, and their character arcs. ' +
      'The evaluative paragraph should present a clear personal response supported by evidence, explaining why one dystopia resonates more. The best responses will consider which world feels more plausible or closer to reality, demonstrating critical engagement beyond surface-level comparison.',
    marks: 14,
    difficulty: 'mastery',
    keywords: ['comparison', 'dystopia', 'protagonist', 'evaluation', 'critical thinking'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2', 'Y8.W3'],
  },
  {
    id: 'y8-t1-ex12',
    title: 'The Significance of Names in The Hunger Games',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>Collins chooses character names deliberately. Research or consider the origins of these names:</p>' +
      '<ol>' +
      '<li>Katniss (a plant) -- what does this suggest about her character? (2 marks)</li>' +
      '<li>Panem (from the Latin "panem et circenses") -- what does this reveal about the world? (3 marks)</li>' +
      '<li>Cinna -- research the historical Cinna. How does this connect to the character? (3 marks)</li>' +
      '<li>Why do authors choose names with symbolic significance? Write a paragraph explaining using examples. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Katniss is an edible aquatic plant, suggesting the protagonist is rooted in nature, survival, and sustenance -- she is both nourishment and resilience for her family and district. ' +
      'Panem comes from "panem et circenses" (bread and circuses), the Roman strategy of pacifying the public with food and entertainment. This reveals that Collins\'s world is built on the same principle of distraction and control. ' +
      'Cinna was a Roman conspirator; the character Cinna in the novel is also a quiet revolutionary who uses his art (fashion design) as a form of protest. ' +
      'Authors use symbolic names to add layers of meaning. Names create expectations, reinforce themes, and reward attentive readers. They function as a compact form of characterisation, embedding significance before a character even speaks.',
    marks: 12,
    difficulty: 'mastery',
    keywords: ['symbolism', 'names', 'allusion', 'classical references', 'authorial intent'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.V2'],
  },
  {
    id: 'y8-t1-ex13',
    title: 'Survival and Morality in the Arena',
    termUnit: 'T1: Dystopian Fiction',
    type: 'evaluation',
    instructions:
      '<p>In the arena, tributes must decide how far they will go to survive.</p>' +
      '<ol>' +
      "<li>How does Katniss's approach to survival differ from the Career tributes? (3 marks)</li>" +
      '<li>Is Katniss morally justified in her actions during the Games? Argue both sides. (6 marks)</li>' +
      '<li>What is Collins saying about human nature through the arena? (3 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Katniss survives through evasion, resourcefulness, and alliances built on genuine connection, while the Careers treat the Games as sport, having trained for violence. This contrast highlights different responses to systemic cruelty. ' +
      'For justification: Katniss kills only in self-defence or to protect allies; she did not choose to enter the arena; the system is designed to force violence. Against: she still participates in the killing; her alliance choices are partly strategic; surviving means others die. ' +
      "Collins suggests that extreme systems corrupt moral choices. The arena strips away civilisation and forces impossible decisions, but characters like Katniss and Rue who maintain compassion expose the system's cruelty more powerfully than those who embrace it.",
    marks: 12,
    difficulty: 'mastery',
    keywords: ['morality', 'survival', 'ethics', 'human nature', 'evaluation'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2'],
  },
  {
    id: 'y8-t1-ex14',
    title: 'Grammar Focus: Semicolons and Colons',
    termUnit: 'T1: Dystopian Fiction',
    type: 'grammar',
    instructions:
      '<p>Semicolons link closely related independent clauses. Colons introduce explanations, lists, or elaborations.</p>' +
      '<ol>' +
      '<li>Add semicolons or colons to these sentences (4 marks):<br/>' +
      'a) The Capitol demands obedience __ resistance is punished with death.<br/>' +
      'b) Katniss had one goal __ protect Prim at all costs.<br/>' +
      'c) The arena was terrifying __ every sound could signal danger.<br/>' +
      'd) Three things define District 12 __ coal, poverty, and hunger.</li>' +
      '<li>Write four original sentences about <em>The Hunger Games</em> using semicolons and colons correctly (two of each). (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'a) The Capitol demands obedience; resistance is punished with death. (Semicolon -- two related independent clauses.) ' +
      'b) Katniss had one goal: protect Prim at all costs. (Colon -- introduces explanation.) ' +
      'c) The arena was terrifying; every sound could signal danger. (Semicolon -- two related independent clauses.) ' +
      'd) Three things define District 12: coal, poverty, and hunger. (Colon -- introduces a list.) ' +
      'Original sentences should demonstrate understanding of both marks and relate to the text studied.',
    marks: 8,
    difficulty: 'developing',
    keywords: ['semicolon', 'colon', 'punctuation', 'grammar', 'independent clause'],
    linkedObjectives: ['Y8.G1', 'Y8.G2', 'Y8.W1'],
  },
  {
    id: 'y8-t1-ex15',
    title: 'The Tribute Parade: Appearance vs Reality',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>Read the extract describing the tribute parade where Katniss and Peeta are set alight with synthetic fire.</p>' +
      '<ol>' +
      '<li>How does Cinna use fashion to make a political statement? (3 marks)</li>' +
      '<li>What is ironic about the Capitol audience cheering for tributes they will watch die? (3 marks)</li>' +
      '<li>Explore the theme of appearance versus reality in this scene. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      "Cinna transforms Katniss from a coal miner's daughter into a figure of fire and power, directly challenging the Capitol's view of District 12 as expendable. Fashion becomes protest. " +
      'The irony is devastating: the audience adores the tributes as celebrities while knowing they are being sent to slaughter. Their enthusiasm reveals a complete disconnection between spectacle and suffering. ' +
      'Appearance vs reality operates on multiple levels: Katniss appears confident but is terrified; the parade appears celebratory but marks the beginning of a death sentence; the Capitol appears generous but is profoundly cruel. Collins uses this scene to show how surface glamour disguises systemic violence.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['irony', 'appearance vs reality', 'symbolism', 'fashion', 'protest'],
    linkedObjectives: ['Y8.R4', 'Y8.R5', 'Y8.R6'],
  },
  {
    id: 'y8-t1-ex16',
    title: 'First-Person Narration: Advantages and Limitations',
    termUnit: 'T1: Dystopian Fiction',
    type: 'evaluation',
    instructions:
      '<p><em>The Hunger Games</em> is told in first person, present tense, by Katniss.</p>' +
      '<ol>' +
      '<li>List three advantages of first-person narration for this story. (3 marks)</li>' +
      '<li>List two limitations of first-person narration. (2 marks)</li>' +
      "<li>How would the story change if it were told from a Capitol citizen's perspective? Write a paragraph. (5 marks)</li>" +
      '</ol>',
    modelAnswer:
      "Advantages: (1) Creates intimacy -- we experience Katniss's fear, confusion, and determination directly; (2) Present tense adds urgency and uncertainty about survival; (3) Limited perspective mirrors the information control in the dystopia -- we only know what Katniss knows. " +
      "Limitations: (1) We cannot see events Katniss does not witness, limiting our understanding of other characters' motivations; (2) We only get Katniss's interpretation of events, which may be biased. " +
      "From a Capitol citizen's perspective, the Games might seem exciting and justified. The narrative would likely present the tributes as willing participants, the Capitol as benevolent, and the violence as deserved punishment. This shift would expose how perspective shapes morality and truth.",
    marks: 10,
    difficulty: 'secure',
    keywords: ['first person', 'narration', 'perspective', 'present tense', 'unreliable narrator'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W5'],
  },
  {
    id: 'y8-t1-ex17',
    title: 'Rue and the Theme of Innocence',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>Rue is one of the youngest tributes and forms an alliance with Katniss.</p>' +
      '<ol>' +
      '<li>How does Collins present Rue as innocent and vulnerable? (3 marks)</li>' +
      "<li>Why is Rue's death a turning point in the novel? (4 marks)</li>" +
      "<li>How does Katniss's response to Rue's death become an act of defiance? (5 marks)</li>" +
      '</ol>',
    modelAnswer:
      'Rue is presented as innocent through her small size, her association with nature and birdsong, and her resemblance to Prim -- all suggesting she should be protected, not hunted. ' +
      "Rue's death is a turning point because it transforms Katniss from a survivor into a symbol of resistance. The death forces both Katniss and the reader to confront the true horror of the system -- children killing children. " +
      "Katniss's response -- decorating Rue's body with flowers -- is an act of defiance because it humanises a tribute the Capitol wants to treat as disposable. By honouring Rue, Katniss rejects the Games' premise and broadcasts her grief as a political statement. District 11's response (sending bread) confirms that this personal act has become a catalyst for collective resistance.",
    marks: 12,
    difficulty: 'secure',
    keywords: ['innocence', 'symbolism', 'turning point', 'defiance', 'catalyst'],
    linkedObjectives: ['Y8.R3', 'Y8.R4', 'Y8.R5'],
  },
  {
    id: 'y8-t1-ex18',
    title: 'Writing to Argue: Should the Hunger Games Be Abolished?',
    termUnit: 'T1: Dystopian Fiction',
    type: 'creative-writing',
    instructions:
      '<p>Imagine you are a citizen of Panem writing a letter to President Snow arguing that the Hunger Games should be abolished.</p>' +
      '<p>Your letter should:</p>' +
      '<ul>' +
      '<li>Use formal register and persuasive techniques</li>' +
      '<li>Include at least three arguments with supporting evidence</li>' +
      '<li>Anticipate and counter one opposing argument</li>' +
      '<li>Use rhetorical questions, emotive language, and a tricolon</li>' +
      '</ul>' +
      '<p>Write 250-300 words. (14 marks)</p>',
    modelAnswer:
      'A strong response will adopt formal register ("I write to urge you to consider..."), present clear arguments (moral cost, economic waste, risk of rebellion), use persuasive techniques (rhetorical questions: "How long can a nation built on the blood of its children endure?"; tricolon: "The Games bring fear, division, and suffering"; emotive language: "innocent children torn from their families"). ' +
      "The counter-argument should acknowledge the Capitol's position (maintaining order, preventing rebellion) before dismantling it (the Games breed resentment, not obedience). The tone should be respectful but urgent, showing understanding of power dynamics while arguing for change.",
    marks: 14,
    difficulty: 'mastery',
    keywords: [
      'persuasion',
      'formal register',
      'rhetorical techniques',
      'argument',
      'counter-argument',
    ],
    linkedObjectives: ['Y8.W2', 'Y8.W4', 'Y8.W6'],
  },
  {
    id: 'y8-t1-ex19',
    title: 'Symbolism: Fire and the Mockingjay',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>Two recurring symbols in <em>The Hunger Games</em> are fire and the mockingjay.</p>' +
      '<ol>' +
      '<li>What does fire symbolise at different points in the story? Give at least two examples. (4 marks)</li>' +
      '<li>How does the mockingjay become a symbol of resistance? (4 marks)</li>' +
      '<li>Why are symbols powerful in dystopian fiction? Write a paragraph explaining. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Fire symbolises multiple things: during the tribute parade, it represents transformation and power (Katniss becomes "the girl on fire"); in the arena, fire is a weapon the Gamemakers use against Katniss, representing the Capitol\'s destructive control; metaphorically, fire represents the spark of rebellion that cannot be extinguished. ' +
      "The mockingjay becomes a symbol of resistance because the bird itself is unintended -- a hybrid the Capitol did not plan. Like the mockingjay, resistance grows organically and cannot be fully controlled. Katniss's mockingjay pin becomes a rallying symbol for the districts. " +
      'Symbols are powerful in dystopian fiction because they communicate ideas that cannot be spoken openly under oppressive regimes. A symbol can unite people, carry meaning across borders, and persist even when words are censored. They give resistance a visual identity.',
    marks: 12,
    difficulty: 'mastery',
    keywords: ['symbolism', 'fire', 'mockingjay', 'motif', 'resistance'],
    linkedObjectives: ['Y8.R4', 'Y8.R5', 'Y8.R6'],
  },
  {
    id: 'y8-t1-ex20',
    title: 'End of Term Assessment: Analytical Essay',
    termUnit: 'T1: Dystopian Fiction',
    type: 'analysis',
    instructions:
      '<p>Write an analytical essay responding to the following question:</p>' +
      '<p><strong>"Collins presents the Hunger Games as a critique of power, inequality, and entertainment. How far do you agree?"</strong></p>' +
      '<p>Your essay should:</p>' +
      '<ul>' +
      '<li>Have a clear introduction with your argument</li>' +
      '<li>Include at least three developed paragraphs using PEEL structure</li>' +
      '<li>Embed quotations from the text</li>' +
      "<li>Analyse writer's methods (language, structure, symbolism)</li>" +
      '<li>Reach a clear conclusion</li>' +
      '</ul>' +
      '<p>Write 400-500 words. (20 marks)</p>',
    modelAnswer:
      "A top-level response will clearly argue agreement or partial agreement, addressing all three themes (power, inequality, entertainment) in separate paragraphs. Each paragraph should follow PEEL, embed quotations smoothly, and analyse Collins's methods rather than simply retelling the plot. " +
      "The introduction should establish a clear thesis. Body paragraphs should move from point to evidence to explanation to link, with analysis of how language choices, structural decisions, and symbolic elements convey Collins's critique. " +
      "The conclusion should synthesise the argument and may connect to the modern world, considering whether Collins's warnings are relevant today. The strongest essays will demonstrate personal engagement and independent thinking while maintaining a formal analytical register.",
    marks: 20,
    difficulty: 'mastery',
    keywords: ['essay', 'PEEL', 'thesis', 'analysis', "writer's methods", 'conclusion'],
    linkedObjectives: ['Y8.R4', 'Y8.R5', 'Y8.R6', 'Y8.W2', 'Y8.W3'],
  },
]

// =============================================================================
// TERM 2 WORKBOOK: Poetry & Shakespeare (Macbeth focus)
// =============================================================================

const t2Exercises: WorkbookExercise[] = [
  {
    id: 'y8-t2-ex01',
    title: 'Introduction to Poetry: Form and Structure',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'comprehension',
    instructions:
      '<p>Read the poem provided by your teacher (a ballad or narrative poem).</p>' +
      '<ol>' +
      '<li>How many stanzas does the poem have? (1 mark)</li>' +
      '<li>Identify the rhyme scheme of the first stanza using letter notation (e.g., ABAB). (2 marks)</li>' +
      '<li>Is the poem written in free verse or a regular metre? Explain how you know. (3 marks)</li>' +
      '<li>How does the structure of the poem contribute to its meaning? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Answers will vary by poem. Students should accurately count stanzas, identify rhyme schemes using letter notation, and distinguish between regular metre (consistent rhythm pattern) and free verse (no fixed pattern). ' +
      'For the structural analysis, students should explain how choices like stanza breaks create pauses for reflection, how rhyme creates musicality or emphasis, and how the overall shape of the poem mirrors its content (e.g., a poem about decay might have disintegrating structure).',
    marks: 10,
    difficulty: 'developing',
    keywords: ['stanza', 'rhyme scheme', 'metre', 'free verse', 'form', 'structure'],
    linkedObjectives: ['Y8.R7', 'Y8.R8', 'Y8.V3'],
  },
  {
    id: 'y8-t2-ex02',
    title: 'Imagery in Poetry: Simile, Metaphor, Personification',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'language-analysis',
    instructions:
      '<p>Identify and analyse examples of imagery in the poems you have studied.</p>' +
      '<ol>' +
      '<li>Define simile, metaphor, and personification. (3 marks)</li>' +
      '<li>Find one example of each from your studied poems and explain the effect. (9 marks)</li>' +
      '<li>Which type of imagery do you find most powerful? Justify your answer. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Simile: a comparison using "like" or "as" (e.g., "My love is like a red, red rose" -- creates a vivid visual connection between love and beauty/nature). ' +
      'Metaphor: a direct comparison stating something is something else (e.g., "Life is a broken-winged bird" -- Langston Hughes (the American Harlem Renaissance poet, 1902-1967, NOT Ted Hughes) suggests life without dreams is damaged and grounded, unable to reach potential). ' +
      'Personification: giving human qualities to non-human things (e.g., "The wind howled in anger" -- makes nature feel threatening and emotional, creating atmosphere). ' +
      'The evaluative response should demonstrate genuine personal preference with specific reasoning about why that technique resonates, considering factors like vividness, emotional impact, and subtlety.',
    marks: 16,
    difficulty: 'developing',
    keywords: ['simile', 'metaphor', 'personification', 'imagery', 'figurative language'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.V3'],
  },
  {
    id: 'y8-t2-ex03',
    title: 'Comparing Two Poems: Themes and Methods',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'comparison',
    instructions:
      '<p>Compare the two poems studied in class that share a common theme (e.g., conflict, nature, identity, or loss).</p>' +
      '<ol>' +
      '<li>What is the shared theme? How does each poem approach it differently? (4 marks)</li>' +
      '<li>Compare one language technique used in each poem. (4 marks)</li>' +
      '<li>Compare the structure or form of each poem and how it supports meaning. (4 marks)</li>' +
      '<li>Which poem do you find more effective in exploring the theme? Write a comparative paragraph. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Strong answers will identify a shared theme and articulate how each poet takes a distinct perspective or approach. The language comparison should go beyond identification to analysis of effect -- how the technique creates meaning differently in each poem. ' +
      'Structural comparison should consider features such as stanza length, enjambment, rhyme, and how these choices reflect content. ' +
      'The evaluative paragraph must present a clear preference supported by specific evidence, using comparative connectives (whereas, by contrast, similarly, however) and addressing both poems rather than writing about them in isolation.',
    marks: 18,
    difficulty: 'secure',
    keywords: ['comparison', 'theme', 'language', 'structure', 'evaluation'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.R8', 'Y8.W3'],
  },
  {
    id: 'y8-t2-ex04',
    title: 'Sound in Poetry: Alliteration, Assonance, Onomatopoeia',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'language-analysis',
    instructions:
      '<p>Poets use sound techniques to create effects beyond meaning alone.</p>' +
      '<ol>' +
      '<li>Define alliteration, assonance, sibilance, and onomatopoeia. (4 marks)</li>' +
      '<li>Read aloud the poem extract provided. Identify two sound techniques and explain the mood they create. (4 marks)</li>' +
      '<li>Write four lines of your own poetry using at least two sound techniques. Annotate them. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Alliteration: repetition of consonant sounds at the start of words ("Peter Piper picked"). Assonance: repetition of vowel sounds within words ("the rain in Spain"). Sibilance: repetition of "s" sounds, creating a hissing or whispering effect. Onomatopoeia: words that imitate sounds ("crash," "buzz," "whisper"). ' +
      'The sound analysis should connect technique to mood (e.g., sibilance creating menace, plosive alliteration creating aggression, soft assonance creating gentleness). ' +
      'Original poetry should demonstrate conscious use of sound, with annotations showing awareness of effect rather than just identification.',
    marks: 14,
    difficulty: 'developing',
    keywords: ['alliteration', 'assonance', 'sibilance', 'onomatopoeia', 'sound'],
    linkedObjectives: ['Y8.R7', 'Y8.V3', 'Y8.W5'],
  },
  {
    id: 'y8-t2-ex05',
    title: 'Introduction to Macbeth: Context and Setting',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'comprehension',
    instructions:
      '<p>Before studying the play, explore its context.</p>' +
      '<ol>' +
      '<li>When was <em>Macbeth</em> written? Who was the monarch at the time? (2 marks)</li>' +
      "<li>Why would Shakespeare's audience have been interested in a play about a Scottish king? (3 marks)</li>" +
      '<li>What was the "Divine Right of Kings"? Why is this relevant to the play? (3 marks)</li>' +
      '<li>What did Jacobean audiences believe about witchcraft? How might this affect their response to the play? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Macbeth was written around 1606. James I (James VI of Scotland) was the monarch, having recently united the English and Scottish crowns. ' +
      "The play flattered James by dramatising his supposed ancestor, Banquo, and by showing the dangers of regicide -- reinforcing James's legitimacy. A play about Scottish history would resonate with a king proud of his heritage. " +
      'The Divine Right of Kings held that monarchs were chosen by God and that overthrowing them was a sin against divine order. This is central to Macbeth because the murder of Duncan disrupts natural and spiritual order. ' +
      "Jacobean audiences genuinely believed in witchcraft. James I himself wrote a treatise on the subject. The witches would have been terrifying rather than theatrical, and the play's warning about supernatural temptation would have felt urgent and real.",
    marks: 12,
    difficulty: 'developing',
    keywords: ['Jacobean', 'James I', 'Divine Right of Kings', 'witchcraft', 'context'],
    linkedObjectives: ['Y8.R6', 'Y8.R8', 'Y8.V2'],
  },
  {
    id: 'y8-t2-ex06',
    title: 'The Witches: Supernatural and Ambiguity',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'analysis',
    instructions:
      "<p>Read Act 1 Scene 1 and the witches' prophecies in Act 1 Scene 3.</p>" +
      '<ol>' +
      '<li>What atmosphere does Shakespeare create in the opening scene? How? (3 marks)</li>' +
      '<li>What do the witches predict for Macbeth and Banquo? (3 marks)</li>' +
      "<li>Are the witches responsible for Macbeth's downfall, or do they simply reveal his existing ambition? Argue your view. (6 marks)</li>" +
      '</ol>',
    modelAnswer:
      'The opening creates an atmosphere of chaos, evil, and moral confusion. The short scene with thunder, the chanting rhythm, and the paradox "Fair is foul, and foul is fair" establishes that the world of the play is one where normal values are inverted. ' +
      "The witches predict Macbeth will be Thane of Cawdor and King, and that Banquo's descendants will be kings though he will not. " +
      'Students should argue either position with evidence: the witches as catalysts (they plant the idea but Macbeth chooses to act) or as puppet-masters (supernatural forces drive events). The strongest answers will acknowledge the deliberate ambiguity -- Shakespeare leaves this unresolved, forcing the audience to question the nature of fate versus free will.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['witches', 'supernatural', 'prophecy', 'ambiguity', 'fate', 'free will'],
    linkedObjectives: ['Y8.R4', 'Y8.R5', 'Y8.R6'],
  },
  {
    id: 'y8-t2-ex07',
    title: "Shakespeare's Language: Understanding Early Modern English",
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'vocabulary',
    instructions:
      "<p>Shakespeare's language can seem unfamiliar, but many patterns help us decode it.</p>" +
      '<ol>' +
      '<li>Translate these Shakespearean words into modern English (5 marks):<br/>' +
      'a) thou / thee<br/>' +
      'b) hath<br/>' +
      'c) wherefore<br/>' +
      'd) hither<br/>' +
      'e) prithee</li>' +
      '<li>Rewrite this speech in modern English while keeping its meaning: "Is this a dagger which I see before me, / The handle toward my hand? Come, let me clutch thee." (3 marks)</li>' +
      '<li>Why does Shakespeare use verse (iambic pentameter) for some characters and prose for others? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'a) thou/thee = you (subject/object forms); b) hath = has; c) wherefore = why (not "where"); d) hither = here/to this place; e) prithee = I pray thee / please. ' +
      'Modern translation: "Is this a dagger I can see in front of me, with its handle pointing towards my hand? Come here, let me grab you." The translation should preserve the questioning, uncertain tone. ' +
      "Shakespeare uses verse (iambic pentameter) for noble characters and important speeches, reflecting elevated status and heightened emotion. Prose is used for lower-status characters, comic scenes, or moments of madness (e.g., Lady Macbeth's sleepwalking). The shift between verse and prose signals changes in status, sanity, or significance.",
    marks: 12,
    difficulty: 'developing',
    keywords: ['iambic pentameter', 'verse', 'prose', 'Early Modern English', 'Shakespeare'],
    linkedObjectives: ['Y8.V2', 'Y8.V3', 'Y8.R8'],
  },
  {
    id: 'y8-t2-ex08',
    title: 'Lady Macbeth: Power and Gender',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'analysis',
    instructions:
      '<p>Read Lady Macbeth\'s soliloquy in Act 1 Scene 5 ("unsex me here").</p>' +
      '<ol>' +
      '<li>What does Lady Macbeth ask the spirits to do? (3 marks)</li>' +
      '<li>What does this speech reveal about gender expectations in the Jacobean era? (4 marks)</li>' +
      '<li>Analyse the language of the speech. How does Shakespeare use imagery of darkness and violence? (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Lady Macbeth asks the spirits to strip away her femininity ("unsex me here"), fill her with cruelty, thicken her blood so she cannot feel remorse, and replace her breast milk with poison. She wants to remove everything associated with womanhood that might prevent her from acting violently. ' +
      'This reveals that Jacobean society associated femininity with gentleness, compassion, and nurturing. Lady Macbeth perceives these qualities as weaknesses that must be eliminated to achieve power. Shakespeare simultaneously explores and challenges these gender norms. ' +
      'The imagery of darkness ("thick night," "blanket of the dark") connects Lady Macbeth to the witches and suggests her transformation is unnatural. The violent imagery ("take my milk for gall") perverts motherhood, making her ambition feel monstrous. Shakespeare uses the body as a battleground between feminine nature and masculine ambition.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['Lady Macbeth', 'gender', 'soliloquy', 'imagery', 'darkness', 'ambition'],
    linkedObjectives: ['Y8.R3', 'Y8.R5', 'Y8.R6'],
  },
  {
    id: 'y8-t2-ex09',
    title: 'Macbeth\'s Soliloquy: "Is this a dagger?"',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'language-analysis',
    instructions:
      '<p>Read Macbeth\'s "Is this a dagger" soliloquy (Act 2, Scene 1).</p>' +
      '<ol>' +
      '<li>What is happening at this point in the play? (2 marks)</li>' +
      "<li>Is the dagger real or imaginary? What does this suggest about Macbeth's state of mind? (3 marks)</li>" +
      '<li>Analyse three language features Shakespeare uses in this speech and explain their effects. (9 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Macbeth is about to murder King Duncan. He is alone, preparing himself for the act, when he sees a dagger floating before him. ' +
      "The dagger is imaginary -- a hallucination. This suggests Macbeth's mind is fracturing under the pressure of guilt and ambition. He cannot distinguish reality from fantasy, indicating that the decision to murder is destroying his reason. " +
      'Language features: (1) Rhetorical questions ("Is this a dagger...?") reveal his uncertainty and inner turmoil -- he is arguing with himself. (2) Imperative verbs ("Come, let me clutch thee") show his desperation to make the vision real, to commit fully. (3) The shift to darkness imagery ("witchcraft celebrates," "wicked dreams") as the speech progresses shows Macbeth surrendering to evil, with the natural world itself becoming corrupt to match his intentions.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['soliloquy', 'hallucination', 'guilt', 'ambition', 'rhetorical question'],
    linkedObjectives: ['Y8.R3', 'Y8.R5', 'Y8.R7'],
  },
  {
    id: 'y8-t2-ex10',
    title: 'Blood Imagery in Macbeth',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'analysis',
    instructions:
      '<p>Blood is a recurring motif throughout <em>Macbeth</em>.</p>' +
      '<ol>' +
      '<li>Find three references to blood from different points in the play. (3 marks)</li>' +
      '<li>How does the meaning of blood change as the play progresses? (4 marks)</li>' +
      '<li>Write a paragraph comparing how blood is used symbolically by Macbeth and Lady Macbeth. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Three references: (1) Early -- blood represents honour and bravery in battle; (2) Middle -- blood represents guilt after Duncan\'s murder ("Will all great Neptune\'s ocean wash this blood clean from my hand?"); (3) Late -- Lady Macbeth\'s sleepwalking ("Out, damned spot") shows blood as inescapable psychological torment. ' +
      "Blood transforms from a symbol of heroism to guilt to madness. This arc mirrors Macbeth's moral decline and Shakespeare's exploration of how violence corrupts. " +
      'Comparison: Macbeth confronts the blood immediately after the murder, recognising his guilt intellectually. Lady Macbeth initially dismisses the blood as easily washed away, but it returns to haunt her subconsciously in her sleepwalking. Shakespeare suggests that suppressed guilt is ultimately more destructive than guilt that is faced.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['blood', 'motif', 'symbolism', 'guilt', 'imagery'],
    linkedObjectives: ['Y8.R4', 'Y8.R5', 'Y8.R7'],
  },
  {
    id: 'y8-t2-ex11',
    title: 'Writing About Poetry: PEETAL Paragraphs',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'quotation-practice',
    instructions:
      '<p>PEETAL stands for Point, Evidence, Explain, Technique, Analyse, Link.</p>' +
      '<ol>' +
      '<li>What does each element of PEETAL require? Write a brief guide. (6 marks)</li>' +
      '<li>Write a PEETAL paragraph about any poem studied this term. (8 marks)</li>' +
      '<li>Peer-assess or self-assess your paragraph using the PEETAL checklist. Note what you did well and what you could improve. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      "Guide: Point -- a clear topic sentence stating your argument; Evidence -- a short embedded quotation; Explain -- what the evidence shows on a surface level; Technique -- identify the specific method the writer uses; Analyse -- explore the deeper meaning, connotations, and effect on the reader; Link -- connect to the poem's wider themes or to context. " +
      'The paragraph should demonstrate all six elements in sequence, with the analysis being the most developed section. Quotations should be embedded, not dropped in. ' +
      'The self-assessment should honestly identify strengths (e.g., "My evidence was well-chosen") and targets (e.g., "I need to develop my analysis of the technique\'s effect further").',
    marks: 18,
    difficulty: 'developing',
    keywords: ['PEETAL', 'analytical writing', 'paragraph structure', 'self-assessment'],
    linkedObjectives: ['Y8.W1', 'Y8.W3', 'Y8.R5'],
  },
  {
    id: 'y8-t2-ex12',
    title: 'Macbeth and Banquo: Foils',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'comparison',
    instructions:
      '<p>A foil is a character who contrasts with another to highlight particular qualities.</p>' +
      '<ol>' +
      "<li>How do Macbeth and Banquo respond differently to the witches' prophecies? (4 marks)</li>" +
      '<li>What does this contrast reveal about each character? (4 marks)</li>' +
      '<li>Why does Shakespeare use Banquo as a foil for Macbeth? What is the dramatic purpose? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Macbeth is immediately fascinated and consumed by the prophecies, asking for more information and dwelling on their implications. Banquo is cautious and suspicious, warning that evil can use truth as bait. ' +
      "This reveals Macbeth's pre-existing ambition -- he is susceptible because the prophecies align with his desires. Banquo's restraint shows moral strength and rationality, making Macbeth's fall a choice rather than inevitability. " +
      "Shakespeare uses Banquo as a foil to demonstrate that the same situation (hearing the prophecy) can lead to different outcomes depending on character. Banquo proves that moral alternatives exist, which increases Macbeth's culpability. Additionally, Banquo's integrity contrasts with Macbeth's corruption, making the tragedy more acute.",
    marks: 12,
    difficulty: 'secure',
    keywords: ['foil', 'contrast', 'characterisation', 'Banquo', 'dramatic purpose'],
    linkedObjectives: ['Y8.R3', 'Y8.R4', 'Y8.R6'],
  },
  {
    id: 'y8-t2-ex13',
    title: 'Writing Your Own Poem: Extended Metaphor',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'creative-writing',
    instructions:
      '<p>Write a poem of 12-20 lines built around a single extended metaphor.</p>' +
      '<p>For example: life as a journey, school as a jungle, memory as a photograph.</p>' +
      '<p>Your poem should:</p>' +
      '<ul>' +
      '<li>Sustain the metaphor throughout -- do not break the comparison</li>' +
      '<li>Use at least two other techniques (e.g., alliteration, enjambment, repetition)</li>' +
      '<li>Have a deliberate structure (stanzas, line breaks, volta/turn)</li>' +
      '</ul>' +
      '<p>After writing, annotate your poem explaining your choices. (10 marks for poem, 4 marks for annotation)</p>',
    modelAnswer:
      'A strong poem will sustain the chosen metaphor without breaking the conceit, developing it across the poem so it gains depth. For example, a poem comparing memory to a photograph might explore fading, cropping, filters, and developing. ' +
      'Annotations should explain deliberate choices: why certain line breaks were used, how sound techniques reinforce meaning, why the poem is structured in that particular way, and what the intended emotional effect is. The annotation demonstrates metacognitive awareness of craft.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['extended metaphor', 'poetry writing', 'annotation', 'craft', 'structure'],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  {
    id: 'y8-t2-ex14',
    title: "The Banquet Scene: Macbeth's Guilt",
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'analysis',
    instructions:
      "<p>Read the banquet scene (Act 3, Scene 4) where Macbeth sees Banquo's ghost.</p>" +
      '<ol>' +
      '<li>Why is it significant that the ghost appears at a banquet? (3 marks)</li>' +
      '<li>How does Lady Macbeth respond to his outburst? What does this show about their relationship? (4 marks)</li>' +
      '<li>Analyse how Shakespeare uses dramatic irony in this scene. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      "The ghost appearing at a banquet is significant because the banquet represents Macbeth's attempt to perform legitimate kingship -- feasting with his lords. The ghost shatters this illusion, showing that his reign is built on murder and cannot sustain the appearance of normality. " +
      'Lady Macbeth tries to cover for him by dismissing his behaviour as a childhood ailment, then privately berates him. This shows the shift in their relationship: she is still managing appearances, but her control is weakening and his instability threatens them both. ' +
      "Dramatic irony operates powerfully: the audience and Macbeth know Banquo is dead because Macbeth ordered the murder, but the lords are confused. Macbeth's toast to Banquo's absence is ironic because he caused it. The audience watches the public mask crumble, creating tension as we wonder if the truth will be exposed.",
    marks: 12,
    difficulty: 'secure',
    keywords: ['dramatic irony', 'banquet', 'guilt', 'ghost', 'public vs private'],
    linkedObjectives: ['Y8.R3', 'Y8.R5', 'Y8.R6'],
  },
  {
    id: 'y8-t2-ex15',
    title: 'Poetic Voice and Tone',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'language-analysis',
    instructions:
      '<p>Poets create a "voice" through their choice of words, tone, and register.</p>' +
      '<ol>' +
      '<li>Define tone and voice in poetry. (2 marks)</li>' +
      '<li>Read the two short poems provided. Describe the tone of each and identify three words or phrases that create it. (6 marks)</li>' +
      '<li>How can the same subject be presented with completely different tones? Demonstrate by writing two four-line stanzas about "rain" -- one joyful, one threatening. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Tone is the emotional quality or attitude conveyed (e.g., angry, nostalgic, celebratory). Voice is the persona or personality that speaks the poem -- it may or may not be the poet themselves. ' +
      'Answers will vary by poems studied, but should identify specific diction choices and explain how connotations create emotional atmosphere. ' +
      'The two stanzas about rain should demonstrate clear contrast through word choice: the joyful version might use "dance," "silver," "laughter"; the threatening version might use "hammered," "drowned," "relentless." Students should understand that tone is created through deliberate vocabulary selection.',
    marks: 14,
    difficulty: 'developing',
    keywords: ['tone', 'voice', 'register', 'diction', 'connotation'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W5'],
  },
  {
    id: 'y8-t2-ex16',
    title: "Macbeth's Tragic Arc",
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'evaluation',
    instructions:
      '<p>A tragic hero typically moves from greatness to downfall through a fatal flaw (<em>hamartia</em>).</p>' +
      '<ol>' +
      "<li>What is Macbeth's status at the beginning of the play? (2 marks)</li>" +
      '<li>What is his fatal flaw? How does it lead to his downfall? (4 marks)</li>' +
      '<li>Does Macbeth deserve sympathy? Write a balanced argument. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'At the beginning, Macbeth is a respected warrior, praised as "brave" and "noble." He has the king\'s trust and has just won a significant battle. ' +
      'His fatal flaw is ambition, ignited by the witches and fuelled by Lady Macbeth. Once he murders Duncan, each subsequent crime becomes easier, creating a spiral of violence. His ambition blinds him to the moral consequences of his actions until it is too late. ' +
      'For sympathy: Macbeth is manipulated by supernatural forces and his wife; he feels genuine guilt; his soliloquies reveal a tortured conscience. Against: he chooses to murder Duncan; he continues killing without external pressure; he becomes a tyrant. The best answers will conclude that Shakespeare creates a complex figure who is simultaneously pitiable and reprehensible -- that is the nature of tragedy.',
    marks: 12,
    difficulty: 'mastery',
    keywords: ['tragic hero', 'hamartia', 'ambition', 'downfall', 'sympathy'],
    linkedObjectives: ['Y8.R3', 'Y8.R4', 'Y8.R6'],
  },
  {
    id: 'y8-t2-ex17',
    title: 'Enjambment and Caesura in Poetry',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'language-analysis',
    instructions:
      '<p>Enjambment is when a sentence continues past the end of a line. Caesura is a pause within a line, often marked by punctuation.</p>' +
      '<ol>' +
      '<li>Identify two examples of enjambment and two of caesura in the poem provided. (4 marks)</li>' +
      '<li>Explain the effect of each example on pace and meaning. (8 marks)</li>' +
      '<li>Write four lines of poetry that use both enjambment and caesura deliberately. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Answers depend on the studied poem. Enjambment creates momentum, urgency, or a sense of overflow -- the meaning spills past the line break. Caesura creates pauses that can suggest hesitation, reflection, or a dramatic shift. ' +
      'Students should explain each example in context: e.g., "The enjambment here suggests the speaker\'s thoughts are racing, unable to be contained within a single line" or "The caesura creates a moment of silence, mirroring the grief the speaker feels." ' +
      'The original lines should show deliberate control: enjambment carrying meaning across a line break and caesura creating a meaningful pause mid-line.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['enjambment', 'caesura', 'pace', 'line break', 'structural techniques'],
    linkedObjectives: ['Y8.R7', 'Y8.R8', 'Y8.W5'],
  },
  {
    id: 'y8-t2-ex18',
    title: "Lady Macbeth's Decline",
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'analysis',
    instructions:
      "<p>Track Lady Macbeth's transformation from Act 1 to Act 5.</p>" +
      '<ol>' +
      '<li>How is Lady Macbeth presented in Act 1? (3 marks)</li>' +
      '<li>How has she changed by Act 5, Scene 1 (the sleepwalking scene)? (3 marks)</li>' +
      '<li>What does this transformation suggest about guilt and the human conscience? (4 marks)</li>' +
      '<li>Is Lady Macbeth a villain or a victim? Write a developed paragraph arguing your view. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'In Act 1, Lady Macbeth is commanding, ambitious, and calculating. She takes charge of the murder plot, manipulates Macbeth, and shows no apparent remorse. She appears stronger than her husband. ' +
      'By Act 5, she is broken. The sleepwalking scene reveals a woman consumed by guilt, compulsively washing imaginary blood from her hands, reliving the murder in fragmented speech. Her descent into madness leads to her death. ' +
      'This transformation suggests that guilt cannot be suppressed indefinitely. The conscience will surface, whether through hallucinations, madness, or physical deterioration. Shakespeare implies that even the most determined attempts to silence morality will fail. ' +
      'The villain/victim paragraph should engage with both readings: she is complicit and driving force behind the murder (villain), but she is also a product of a patriarchal society where power for women required violence, and her punishment is disproportionate to her agency (victim).',
    marks: 16,
    difficulty: 'mastery',
    keywords: ['Lady Macbeth', 'guilt', 'transformation', 'sleepwalking', 'conscience'],
    linkedObjectives: ['Y8.R3', 'Y8.R4', 'Y8.R6'],
  },
  {
    id: 'y8-t2-ex19',
    title: 'Unseen Poetry Practice',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'analysis',
    instructions:
      '<p>Read the unseen poem provided by your teacher.</p>' +
      '<ol>' +
      '<li>What is the poem about? Summarise in two sentences. (2 marks)</li>' +
      '<li>Identify and analyse two language techniques used by the poet. (6 marks)</li>' +
      '<li>How does the structure of the poem support its meaning? (4 marks)</li>' +
      '<li>What is the overall message or theme of the poem? (2 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Answers will depend on the specific unseen poem. A strong summary will capture both the literal subject and the deeper meaning. ' +
      'Language analysis should follow a clear pattern: identify the technique, provide the quotation, explain the surface meaning, explore deeper connotations and effects on the reader. ' +
      'Structural analysis should consider stanza arrangement, line length, rhyme or lack thereof, and any shifts or turning points. ' +
      'The theme should be expressed as a statement about human experience (e.g., "The poem explores how memory can both comfort and torment us") rather than a simple topic ("The poem is about memory").',
    marks: 14,
    difficulty: 'secure',
    keywords: ['unseen poetry', 'analysis', 'theme', 'language', 'structure'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.R8'],
  },
  {
    id: 'y8-t2-ex20',
    title: 'End of Term Assessment: Poetry Comparison Essay',
    termUnit: 'T2: Poetry & Shakespeare',
    type: 'comparison',
    instructions:
      '<p>Write a comparative essay responding to the following question:</p>' +
      '<p><strong>"Compare how two poets present the theme of [chosen theme] in [Poem A] and [Poem B]."</strong></p>' +
      '<p>Your essay should:</p>' +
      '<ul>' +
      '<li>Compare throughout (do not write about one poem then the other)</li>' +
      '<li>Analyse language, structure, and form in both poems</li>' +
      '<li>Embed quotations and use PEETAL paragraphs</li>' +
      '<li>Include a clear introduction and conclusion</li>' +
      '<li>Use comparative connectives (similarly, in contrast, whereas, however)</li>' +
      '</ul>' +
      '<p>Write 400-500 words. (20 marks)</p>',
    modelAnswer:
      'A top-level response will compare the poems throughout rather than treating them separately. Each paragraph should make a comparative point, using one poem as the primary focus and the other as comparison. ' +
      'The introduction should identify the shared theme and signal the argument (e.g., "Both poets explore loss, but while Poem A finds comfort in memory, Poem B presents grief as permanent"). ' +
      'Body paragraphs should analyse specific language choices and structural features, explaining how they create meaning differently in each poem. Comparative connectives should be used naturally throughout. ' +
      'The conclusion should synthesise the comparison and offer a personal evaluation of which poem is more effective and why.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['comparison', 'essay', 'PEETAL', 'connectives', 'poetry analysis'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.R8', 'Y8.W2', 'Y8.W3'],
  },
]

// =============================================================================
// TERM 3 WORKBOOK: Rhetoric, Speech Writing & Media Literacy
// =============================================================================

const t3Exercises: WorkbookExercise[] = [
  {
    id: 'y8-t3-ex01',
    title: 'What is Rhetoric?',
    termUnit: 'T3: Rhetoric & Media',
    type: 'comprehension',
    instructions:
      '<p>Rhetoric is the art of using language persuasively.</p>' +
      '<ol>' +
      '<li>Define rhetoric in your own words. (2 marks)</li>' +
      '<li>Aristotle identified three modes of persuasion: ethos, pathos, and logos. Define each. (3 marks)</li>' +
      '<li>For each mode, give a real-world example of where it is used (e.g., advertising, politics, everyday life). (3 marks)</li>' +
      '<li>Which mode of persuasion do you think is most powerful? Explain why. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Rhetoric is the skill of using language effectively to persuade, inform, or inspire an audience. It involves deliberate choices of words, structure, and delivery. ' +
      'Ethos: persuasion through credibility and character (e.g., a doctor endorsing a health product). Pathos: persuasion through emotion (e.g., a charity advert showing suffering). Logos: persuasion through logic and evidence (e.g., presenting statistics in a debate). ' +
      'The evaluative response should argue for one mode with specific reasoning, acknowledging that effective persuasion often combines all three. The strongest answers will recognise that the "most powerful" mode depends on context and audience.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['rhetoric', 'ethos', 'pathos', 'logos', 'persuasion'],
    linkedObjectives: ['Y8.R9', 'Y8.V2', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex02',
    title: 'Analysing a Famous Speech: Rhetorical Techniques',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    instructions:
      '<p>Read the speech extract provided (e.g., a speech by Malala Yousafzai, Greta Thunberg, or a historical figure).</p>' +
      '<ol>' +
      "<li>What is the speaker's purpose? (2 marks)</li>" +
      '<li>Identify and explain the effect of five rhetorical techniques used. (10 marks)</li>' +
      '<li>How does the speaker establish their credibility (ethos)? (3 marks)</li>' +
      "<li>Rate the speech's effectiveness out of 10 and justify your score. (3 marks)</li>" +
      '</ol>',
    modelAnswer:
      'Answers depend on the chosen speech. Purpose should identify the specific change the speaker wants to achieve (e.g., to persuade world leaders to act on climate change). ' +
      'Five techniques might include: rhetorical questions (engage the audience, make them think), tricolon/rule of three (creates rhythm and emphasis), anaphora/repetition (drives home key ideas), emotive language (appeals to pathos), direct address (creates connection). Each should be quoted and explained. ' +
      'Ethos might be established through personal experience, professional credentials, or moral authority. ' +
      'The rating should be justified with specific reference to how well the speech achieves its stated purpose.',
    marks: 18,
    difficulty: 'secure',
    keywords: ['rhetorical techniques', 'speech analysis', 'ethos', 'pathos', 'logos'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex03',
    title: 'Persuasive Techniques Toolkit',
    termUnit: 'T3: Rhetoric & Media',
    type: 'vocabulary',
    instructions:
      '<p>Build your persuasive techniques toolkit by completing the table below.</p>' +
      '<table><tr><th>Technique</th><th>Definition</th><th>Example</th><th>Effect</th></tr>' +
      '<tr><td>Rhetorical question</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Tricolon (rule of three)</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Anaphora</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Hyperbole</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Emotive language</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Direct address</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Antithesis</td><td></td><td></td><td></td></tr>' +
      '<tr><td>Imperative</td><td></td><td></td><td></td></tr>' +
      '</table>' +
      '<p>Complete all four columns for each technique. (16 marks)</p>',
    modelAnswer:
      'Rhetorical question: a question asked for effect, not requiring an answer; "How can we call ourselves civilised?"; makes the audience reflect and implicitly agree with the speaker. ' +
      'Tricolon: three words or phrases in succession; "Government of the people, by the people, for the people"; creates rhythm, emphasis, and memorability. ' +
      'Anaphora: repetition at the start of successive clauses; "We shall fight on the beaches, we shall fight on the landing grounds"; builds momentum and intensity. ' +
      'Hyperbole: deliberate exaggeration; "This is the greatest crisis in human history"; heightens urgency and emotional impact. ' +
      'Emotive language: words chosen to evoke strong feelings; "innocent children suffering"; creates sympathy and compels action. ' +
      'Direct address: speaking directly to the audience using "you" or "we"; "You have the power to change this"; creates personal connection and responsibility. ' +
      'Antithesis: contrasting ideas in parallel structure; "Ask not what your country can do for you, ask what you can do for your country"; creates memorable contrast. ' +
      'Imperative: command form of a verb; "Stand up. Speak out. Make a difference"; creates urgency and calls the audience to action.',
    marks: 16,
    difficulty: 'developing',
    keywords: [
      'rhetorical question',
      'tricolon',
      'anaphora',
      'hyperbole',
      'antithesis',
      'imperative',
    ],
    linkedObjectives: ['Y8.V2', 'Y8.V3', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex04',
    title: 'Writing a Persuasive Speech: Planning',
    termUnit: 'T3: Rhetoric & Media',
    type: 'planning',
    instructions:
      '<p>Plan a 2-minute speech on one of the following topics:</p>' +
      '<ul>' +
      '<li>School uniform should be abolished</li>' +
      '<li>Social media does more harm than good for teenagers</li>' +
      '<li>Every student should learn a musical instrument</li>' +
      '</ul>' +
      '<ol>' +
      '<li>Write a clear thesis statement (your main argument). (2 marks)</li>' +
      '<li>Plan three supporting arguments with evidence or examples. (6 marks)</li>' +
      '<li>Plan one counter-argument and your rebuttal. (3 marks)</li>' +
      '<li>Plan your opening hook and closing statement. (3 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Thesis: clear, specific, and arguable (e.g., "School uniform stifles individuality and does nothing to improve academic outcomes"). ' +
      'Three arguments should be distinct and escalate in importance. Each needs specific evidence or examples (statistics, case studies, logical reasoning). ' +
      'Counter-argument should address the strongest opposing point fairly before dismantling it with evidence or logic. ' +
      'Opening hook should grab attention (a question, a startling fact, a vivid anecdote). Closing statement should be memorable and call the audience to action or thought.',
    marks: 14,
    difficulty: 'developing',
    keywords: ['speech planning', 'thesis', 'argument', 'counter-argument', 'rebuttal'],
    linkedObjectives: ['Y8.W2', 'Y8.W4', 'Y8.S1'],
  },
  {
    id: 'y8-t3-ex05',
    title: 'Writing a Persuasive Speech: Drafting',
    termUnit: 'T3: Rhetoric & Media',
    type: 'speech-writing',
    instructions:
      '<p>Using your plan from the previous exercise, write your full speech (250-350 words).</p>' +
      '<p>Your speech must include:</p>' +
      '<ul>' +
      '<li>A compelling opening that hooks the audience</li>' +
      '<li>At least three developed arguments</li>' +
      '<li>A counter-argument and rebuttal</li>' +
      '<li>At least four different rhetorical techniques (label them in the margin)</li>' +
      '<li>A powerful conclusion with a call to action</li>' +
      '</ul>' +
      '<p>(16 marks for content and persuasion, 4 marks for technique labelling)</p>',
    modelAnswer:
      'A strong speech will open with an attention-grabbing hook (a provocative question, a surprising statistic, or a relatable anecdote). Arguments should be clearly structured, moving from the most accessible to the most impactful. ' +
      'Rhetorical techniques should feel natural, not forced -- they should enhance the argument rather than decorate it. The counter-argument section should demonstrate fairness before the rebuttal demonstrates superior reasoning. ' +
      'The conclusion should return to the opening theme, create a sense of resolution, and leave the audience with a clear call to action or a thought-provoking final image. ' +
      'Technique labels should accurately identify devices and show awareness of their purpose.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['speech writing', 'persuasion', 'rhetoric', 'structure', 'call to action'],
    linkedObjectives: ['Y8.W2', 'Y8.W4', 'Y8.W6', 'Y8.S1'],
  },
  {
    id: 'y8-t3-ex06',
    title: 'Media Literacy: Identifying Bias',
    termUnit: 'T3: Rhetoric & Media',
    type: 'media-literacy',
    instructions:
      '<p>Read the two news articles provided, which report the same event from different perspectives.</p>' +
      '<ol>' +
      '<li>Summarise the event reported in each article. (2 marks)</li>' +
      '<li>Identify three differences in how the articles present the event. (6 marks)</li>' +
      '<li>What words or phrases reveal bias in each article? Quote and explain. (6 marks)</li>' +
      '<li>Why is it important to read multiple sources? (2 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Summaries should capture the same core event, highlighting how emphasis differs between the two articles. ' +
      'Differences might include: selection of facts (what is included/omitted), positioning (headline emphasis, opening paragraph choices), and framing (how the event is contextualised). ' +
      'Bias is revealed through diction: loaded language (e.g., "protesters" vs "rioters"), adjectives that imply judgement, selective quotation, and use of passive voice to obscure responsibility. Students should quote specific words and explain their connotative differences. ' +
      'Reading multiple sources is important because no single source is neutral; comparing accounts helps readers identify bias, find common ground, and form informed opinions.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['bias', 'media literacy', 'framing', 'loaded language', 'perspective'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.V2'],
  },
  {
    id: 'y8-t3-ex07',
    title: 'Advertising: Persuasion in Visual Media',
    termUnit: 'T3: Rhetoric & Media',
    type: 'media-literacy',
    instructions:
      '<p>Analyse the advertisement provided (print or screen capture).</p>' +
      '<ol>' +
      '<li>What is being advertised? Who is the target audience? How do you know? (3 marks)</li>' +
      '<li>Identify three persuasive techniques used in the advert (consider visual, textual, and emotional elements). (6 marks)</li>' +
      '<li>What values or desires does the advert appeal to? (3 marks)</li>' +
      '<li>Design your own advert for an imaginary product aimed at teenagers. Annotate it to explain your persuasive choices. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Identification should specify the product, identify the target audience through clues (colour scheme, models, language register, setting), and explain the reasoning. ' +
      'Techniques might include: aspirational imagery (suggesting the product leads to a desirable lifestyle), celebrity endorsement (ethos), emotional appeal (pathos), scientific claims (logos), colour psychology, and positioning/layout choices. ' +
      'Values might include: belonging, attractiveness, success, fun, individuality, status. ' +
      'The designed advert should demonstrate understanding of how these techniques work in practice, with annotations showing conscious awareness of persuasive strategies rather than intuitive choices.',
    marks: 20,
    difficulty: 'developing',
    keywords: ['advertising', 'target audience', 'visual persuasion', 'media analysis', 'values'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W6'],
  },
  {
    id: 'y8-t3-ex08',
    title: 'Fact vs Opinion vs Inference',
    termUnit: 'T3: Rhetoric & Media',
    type: 'comprehension',
    instructions:
      '<p>Being able to distinguish facts, opinions, and inferences is essential for critical reading.</p>' +
      '<ol>' +
      '<li>Define fact, opinion, and inference. (3 marks)</li>' +
      '<li>Classify each of these statements as fact, opinion, or inference (6 marks):<br/>' +
      'a) The UK population exceeded 67 million in 2023.<br/>' +
      'b) Football is the most exciting sport in the world.<br/>' +
      'c) The politician smiled after being asked a difficult question, suggesting he was uncomfortable.<br/>' +
      'd) Water boils at 100 degrees Celsius at sea level.<br/>' +
      'e) The new school building is ugly and a waste of money.<br/>' +
      'f) Based on the dark clouds gathering, it is likely to rain soon.</li>' +
      '<li>Why do writers sometimes present opinions as if they are facts? (3 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Fact: a statement that can be verified as true or false with evidence. Opinion: a personal belief or judgement that cannot be proven. Inference: a conclusion drawn from evidence, but not directly stated. ' +
      'a) Fact -- verifiable with census data. b) Opinion -- "most exciting" is a value judgement. c) Inference -- the smile is observed, but the discomfort is inferred. d) Fact -- scientifically verifiable. e) Opinion -- "ugly" and "waste" are subjective judgements. f) Inference -- based on observable evidence but not certain. ' +
      'Writers present opinions as facts to increase their persuasive power. By removing qualifiers ("I think," "perhaps"), an opinion gains the authority of certainty, making it harder for readers to challenge. This is a key technique in propaganda and biased journalism.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['fact', 'opinion', 'inference', 'critical reading', 'bias'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.V2'],
  },
  {
    id: 'y8-t3-ex09',
    title: 'Analysing a Political Speech',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    instructions:
      '<p>Read the extract from a political speech provided by your teacher.</p>' +
      '<ol>' +
      "<li>What is the speaker's main argument or message? (2 marks)</li>" +
      '<li>How does the speaker use ethos, pathos, and logos? Give one example of each. (6 marks)</li>' +
      '<li>Identify the target audience. How does the speaker tailor their language for this audience? (4 marks)</li>' +
      '<li>Is the speech effective? Evaluate its strengths and weaknesses. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The main argument should be stated concisely, capturing both the explicit message and the implicit call to action. ' +
      'Ethos: how the speaker establishes authority (personal experience, credentials, moral standing). Pathos: how they appeal to emotions (stories, vivid language, shared values). Logos: how they use logic (statistics, cause-and-effect reasoning, evidence). ' +
      'Target audience identification should consider age, values, concerns, and political leaning, with specific examples of language choices that signal this (register, references, assumed knowledge). ' +
      'Evaluation should acknowledge both strengths (e.g., powerful imagery, logical structure) and weaknesses (e.g., lack of evidence, emotional manipulation, oversimplification) with specific references.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['political speech', 'ethos', 'pathos', 'logos', 'audience', 'evaluation'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex10',
    title: 'Writing to Persuade: Letter to a Newspaper',
    termUnit: 'T3: Rhetoric & Media',
    type: 'creative-writing',
    instructions:
      '<p>Write a letter to a newspaper editor responding to a controversial issue (e.g., screen time for teenagers, junk food advertising near schools, or lowering the voting age).</p>' +
      '<p>Your letter should:</p>' +
      '<ul>' +
      '<li>Follow formal letter conventions</li>' +
      '<li>Present a clear argument with at least three supporting points</li>' +
      '<li>Use at least three rhetorical techniques</li>' +
      '<li>Address a counter-argument</li>' +
      '<li>End with a clear call for action</li>' +
      '</ul>' +
      '<p>Write 250-300 words. (14 marks)</p>',
    modelAnswer:
      'A strong letter will open with a formal greeting and reference to the issue. The argument should be logical, moving from the most obvious point to the most nuanced. ' +
      'Rhetorical techniques should be integrated naturally: a rhetorical question to open ("Is it acceptable that...?"), a tricolon to emphasise a key point, emotive language to engage the reader\'s sympathies, and perhaps a statistic or expert reference for logos. ' +
      'The counter-argument should be handled respectfully before being rebutted with superior evidence or reasoning. ' +
      'The letter should close with a specific request or call to action, maintaining formal register throughout. The tone should be passionate but controlled, avoiding personal attacks.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['letter writing', 'formal register', 'persuasion', 'argument', 'newspaper'],
    linkedObjectives: ['Y8.W2', 'Y8.W4', 'Y8.W6'],
  },
  {
    id: 'y8-t3-ex11',
    title: 'Social Media and Persuasion',
    termUnit: 'T3: Rhetoric & Media',
    type: 'media-literacy',
    instructions:
      '<p>Social media has changed how persuasion works.</p>' +
      '<ol>' +
      '<li>How do social media platforms differ from traditional media (newspapers, TV) as tools of persuasion? (4 marks)</li>' +
      '<li>What is an "echo chamber"? Why is it a concern? (3 marks)</li>' +
      '<li>Analyse a social media post or campaign provided by your teacher. What persuasive techniques does it use? (4 marks)</li>' +
      '<li>Write a set of guidelines (5-7 rules) for being a critical consumer of social media. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Differences: social media is interactive (users share and comment), personalised by algorithms, faster-spreading, and blurs the line between professional and amateur content. Traditional media has editorial oversight and established credibility structures. ' +
      'An echo chamber is an environment where a person only encounters beliefs and opinions that mirror their own. This is concerning because it reinforces existing views, reduces exposure to different perspectives, and can radicalise opinions by removing nuance. ' +
      'Post analysis should identify techniques such as: emotional imagery, hashtag campaigns, influencer endorsement, shareability design, urgency, and simplification of complex issues. ' +
      'Guidelines should include practical advice such as: check the source, look for evidence, consider who benefits, read beyond headlines, seek opposing viewpoints, be sceptical of emotional manipulation, and distinguish between information and advertising.',
    marks: 16,
    difficulty: 'secure',
    keywords: [
      'social media',
      'echo chamber',
      'algorithm',
      'critical thinking',
      'digital literacy',
    ],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex12',
    title: 'Emotive Language vs Objective Language',
    termUnit: 'T3: Rhetoric & Media',
    type: 'language-analysis',
    instructions:
      "<p>The same information can be presented emotively or objectively depending on the writer's purpose.</p>" +
      '<ol>' +
      '<li>Rewrite each emotive sentence in objective language (4 marks):<br/>' +
      'a) Innocent children are being cruelly torn from their loving families.<br/>' +
      "b) The government's reckless spending has plunged the nation into chaos.</li>" +
      '<li>Rewrite each objective sentence in emotive language (4 marks):<br/>' +
      'a) The policy led to a 15% reduction in funding for after-school clubs.<br/>' +
      'b) Approximately 200 trees were removed to make way for the development.</li>' +
      '<li>When is emotive language appropriate and when might it be manipulative? Write a paragraph. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Objective rewrites: a) "Children are being separated from their families as part of the new policy." b) "Government expenditure has increased, contributing to economic instability." ' +
      'Emotive rewrites: a) "Vital lifelines for our children have been devastated, with clubs slashed by a heartless 15% cut." b) "Two hundred majestic trees, the lungs of our community, were heartlessly destroyed to make way for developers\' profits." ' +
      'Emotive language is appropriate when the writer genuinely wants to convey the human impact of an issue (charity campaigns, personal testimony). It becomes manipulative when it replaces evidence, exaggerates to distort truth, or exploits emotions to prevent rational thinking. The line between persuasion and manipulation depends on intent, accuracy, and whether the audience is given enough information to make their own judgement.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['emotive language', 'objective language', 'bias', 'manipulation', 'register'],
    linkedObjectives: ['Y8.R9', 'Y8.V2', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex13',
    title: 'Debating Skills: Structuring an Argument',
    termUnit: 'T3: Rhetoric & Media',
    type: 'planning',
    instructions:
      '<p>Prepare for a classroom debate on the motion: "This house believes that homework should be banned."</p>' +
      '<ol>' +
      '<li>List three arguments FOR the motion with supporting evidence. (6 marks)</li>' +
      '<li>List three arguments AGAINST the motion with supporting evidence. (6 marks)</li>' +
      '<li>For each side, identify the weakest argument and explain why. (4 marks)</li>' +
      '<li>Write a 1-minute opening statement for whichever side you are assigned. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'FOR: (1) Homework causes stress and anxiety, reducing wellbeing (evidence: mental health statistics); (2) Students from disadvantaged backgrounds lack resources, making homework inequitable; (3) Free time allows for other valuable activities (sport, creativity, family). ' +
      'AGAINST: (1) Homework reinforces learning and builds independent study skills essential for later education; (2) It teaches time management and self-discipline; (3) Research shows revision and practice improve long-term retention. ' +
      'Identifying weakest arguments demonstrates critical thinking -- students should explain why an argument is vulnerable (e.g., easily countered, based on assumption, lacks evidence). ' +
      'The opening statement should be engaging, clearly state the position, and preview the main arguments.',
    marks: 20,
    difficulty: 'developing',
    keywords: ['debate', 'argument', 'evidence', 'counter-argument', 'public speaking'],
    linkedObjectives: ['Y8.S1', 'Y8.S2', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex14',
    title: 'Analysing Non-Fiction: Charity Campaign',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    instructions:
      '<p>Read the charity campaign text provided (a leaflet, webpage, or advertisement).</p>' +
      '<ol>' +
      "<li>What is the campaign's purpose? Who is the target audience? (2 marks)</li>" +
      '<li>How does the text use pathos to engage the reader? Give two examples with analysis. (6 marks)</li>' +
      '<li>How does the text establish ethos (credibility)? (3 marks)</li>' +
      '<li>Evaluate the effectiveness of the campaign. What does it do well? What could be improved? (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Purpose and audience should be specific (e.g., "to encourage 25-40 year-old professionals to donate monthly to support clean water projects"). ' +
      'Pathos examples should identify specific language choices, imagery, or narrative techniques that create emotional responses (sympathy, guilt, hope), with analysis of how these emotions motivate the desired action. ' +
      'Ethos is established through statistics, testimonials, organisational credentials, partnerships, and transparent use of donations. ' +
      'Evaluation should be balanced: acknowledging what the campaign does well (e.g., powerful personal stories, clear call to action) and suggesting improvements (e.g., more evidence of impact, addressing potential donor fatigue, varying the emotional register).',
    marks: 16,
    difficulty: 'secure',
    keywords: ['charity', 'campaign', 'pathos', 'ethos', 'non-fiction analysis'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex15',
    title: 'Grammar Focus: Sentence Types for Effect',
    termUnit: 'T3: Rhetoric & Media',
    type: 'grammar',
    instructions:
      '<p>Skilled writers vary sentence types for effect: simple (one clause), compound (two clauses joined by a conjunction), complex (main clause + subordinate clause), and minor (fragments for impact).</p>' +
      '<ol>' +
      '<li>Identify the sentence type in each example (4 marks):<br/>' +
      'a) Climate change threatens our future.<br/>' +
      'b) We must act now, or our children will suffer the consequences.<br/>' +
      'c) Although many people deny it, the scientific evidence is overwhelming.<br/>' +
      'd) Enough.</li>' +
      '<li>Rewrite this paragraph varying sentence types for persuasive effect. The original uses only simple sentences:<br/>' +
      '"Plastic pollution is a problem. It kills marine life. It poisons our oceans. We need to stop using single-use plastic. The time for action is now." (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'a) Simple -- one main clause. b) Compound -- two independent clauses joined by "or." c) Complex -- subordinate clause ("Although many people deny it") + main clause. d) Minor -- a sentence fragment used for dramatic emphasis. ' +
      'Rewritten: "Plastic pollution is devastating our planet. It kills marine life, it poisons our oceans, and it chokes our beaches with waste that will outlast us all. Although governments have made promises, single-use plastic continues to flood our daily lives -- and it is killing us. The time for half-measures has passed. Act now."' +
      ' The rewrite should demonstrate conscious sentence variety: a simple opener for clarity, a complex sentence with tricolon for impact, a compound-complex sentence for nuance, and a minor sentence for dramatic force.',
    marks: 10,
    difficulty: 'developing',
    keywords: [
      'simple sentence',
      'compound sentence',
      'complex sentence',
      'minor sentence',
      'variety',
    ],
    linkedObjectives: ['Y8.G1', 'Y8.G2', 'Y8.W1'],
  },
  {
    id: 'y8-t3-ex16',
    title: 'Propaganda Techniques Through History',
    termUnit: 'T3: Rhetoric & Media',
    type: 'evaluation',
    instructions:
      '<p>Propaganda uses persuasion for political purposes, often distorting truth.</p>' +
      '<ol>' +
      '<li>Define propaganda. How does it differ from ordinary persuasion? (3 marks)</li>' +
      '<li>Name and explain three common propaganda techniques (e.g., bandwagon, scapegoating, loaded language, appeal to fear). (6 marks)</li>' +
      '<li>Look at the historical propaganda poster provided. What techniques does it use and what is its intended effect? (4 marks)</li>' +
      '<li>Where do you see propaganda techniques used in the modern world? Give two examples. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Propaganda is the systematic distribution of information (often misleading) to promote a political cause or point of view. It differs from persuasion in its intent to manipulate rather than inform, its willingness to distort truth, and its connection to institutional or political power. ' +
      'Techniques: Bandwagon -- suggesting everyone is doing it, so you should too (creates social pressure); Scapegoating -- blaming a group for problems to redirect anger (creates division); Appeal to fear -- warning of terrible consequences if the audience does not comply (overrides rational thinking). ' +
      'Poster analysis should identify visual and textual techniques with specific details. ' +
      "Modern examples might include: political campaign advertisements that oversimplify opponents' positions, or social media campaigns that use emotional imagery to promote particular viewpoints without evidence.",
    marks: 17,
    difficulty: 'mastery',
    keywords: ['propaganda', 'bandwagon', 'scapegoating', 'manipulation', 'critical thinking'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.V2'],
  },
  {
    id: 'y8-t3-ex17',
    title: 'Writing a Review: Film, Book, or Product',
    termUnit: 'T3: Rhetoric & Media',
    type: 'creative-writing',
    instructions:
      '<p>Write a review of a film, book, or product you have experienced recently. Your review should be 200-250 words.</p>' +
      '<p>Your review should:</p>' +
      '<ul>' +
      '<li>Open with an engaging hook</li>' +
      '<li>Provide a brief, spoiler-free summary</li>' +
      '<li>Evaluate at least two strengths and one weakness</li>' +
      '<li>Use a consistent tone appropriate for the target publication (magazine, blog, newspaper)</li>' +
      '<li>End with a clear recommendation and rating</li>' +
      '</ul>' +
      '<p>(12 marks)</p>',
    modelAnswer:
      'A strong review will establish tone and audience immediately through register and vocabulary choices. The summary should be concise and purposeful, giving just enough context without spoiling. ' +
      'Strengths and weaknesses should be specific and evidenced (naming particular scenes, features, or qualities). The review should demonstrate genuine critical engagement rather than simply stating "it was good/bad." ' +
      'The conclusion should provide a clear verdict with a rating, potentially identifying who would most enjoy/benefit from the subject being reviewed. The whole piece should feel like it belongs in its target publication.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['review', 'evaluation', 'tone', 'register', 'recommendation'],
    linkedObjectives: ['Y8.W2', 'Y8.W4', 'Y8.W6'],
  },
  {
    id: 'y8-t3-ex18',
    title: 'Comparing Speeches: Different Purposes, Shared Techniques',
    termUnit: 'T3: Rhetoric & Media',
    type: 'comparison',
    instructions:
      '<p>Compare two speeches studied in class that have different purposes (e.g., one to inspire, one to protest).</p>' +
      '<ol>' +
      '<li>What is the purpose of each speech? (2 marks)</li>' +
      '<li>Identify one technique used in both speeches. How is it used differently? (4 marks)</li>' +
      '<li>Which speech relies more on emotion and which on logic? Explain with evidence. (4 marks)</li>' +
      '<li>Which speech do you find more persuasive? Write a comparative paragraph justifying your choice. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Purposes should be precise (e.g., "to inspire a nation to persevere through war" vs "to demand immediate action on civil rights"). ' +
      'The shared technique should be analysed comparatively: e.g., both use repetition, but one uses it to build hope while the other uses it to build outrage. ' +
      'The emotion/logic comparison should use specific quotations to demonstrate how each speaker balances pathos and logos according to their purpose and audience. ' +
      'The evaluative paragraph should present a clear preference with comparative analysis, using connectives and addressing both speeches to demonstrate genuine comparison rather than sequential description.',
    marks: 16,
    difficulty: 'mastery',
    keywords: ['speech comparison', 'purpose', 'audience', 'rhetoric', 'evaluation'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W3'],
  },
  {
    id: 'y8-t3-ex19',
    title: 'Fake News and Misinformation',
    termUnit: 'T3: Rhetoric & Media',
    type: 'media-literacy',
    instructions:
      '<p>Misinformation is a growing concern in the digital age.</p>' +
      '<ol>' +
      '<li>Define: misinformation, disinformation, and malinformation. (3 marks)</li>' +
      '<li>What are three ways to check whether a news story is reliable? (3 marks)</li>' +
      '<li>Read the two versions of a news story provided. One is reliable; one contains misinformation. Identify which is which and explain how you can tell. (6 marks)</li>' +
      '<li>Why is media literacy an essential skill in the 21st century? Write a paragraph. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Misinformation: false information shared without intent to harm (e.g., sharing an inaccurate rumour). Disinformation: deliberately false information created to deceive (e.g., propaganda). Malinformation: true information shared to cause harm (e.g., leaking private data). ' +
      'Checking reliability: (1) Verify the source -- is it a recognised, reputable outlet? (2) Cross-reference -- do other sources report the same facts? (3) Check the evidence -- does the article cite sources, and are they credible? ' +
      'Analysis of the two versions should identify specific markers: loaded language, unsourced claims, emotional manipulation, lack of named sources, and logical fallacies in the unreliable version versus balanced reporting, named sources, and verifiable claims in the reliable version. ' +
      'Media literacy is essential because we consume more information than ever, through platforms with minimal editorial oversight. Without the skills to evaluate sources, identify bias, and distinguish fact from opinion, citizens are vulnerable to manipulation, polarisation, and poor decision-making.',
    marks: 16,
    difficulty: 'secure',
    keywords: [
      'misinformation',
      'disinformation',
      'fake news',
      'media literacy',
      'source evaluation',
    ],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-t3-ex20',
    title: 'End of Term Assessment: Persuasive Speech',
    termUnit: 'T3: Rhetoric & Media',
    type: 'speech-writing',
    instructions:
      '<p>Write and deliver a 3-minute persuasive speech on a topic of your choice that matters to you.</p>' +
      '<p>Your speech must demonstrate:</p>' +
      '<ul>' +
      '<li>A clear thesis and structured argument</li>' +
      '<li>Use of ethos, pathos, and logos</li>' +
      '<li>At least five rhetorical techniques (identified in annotations)</li>' +
      '<li>A counter-argument and rebuttal</li>' +
      '<li>A powerful opening and memorable conclusion</li>' +
      '<li>Awareness of audience (language register, tone, direct address)</li>' +
      '</ul>' +
      '<p>Write 350-450 words. (16 marks for written content, 4 marks for annotations)</p>',
    modelAnswer:
      'A top-level speech will open with a hook that immediately captures attention -- a provocative question, a vivid story, or a startling fact. The thesis will be clear and arguable. ' +
      'The body will present arguments that build in intensity, each supported by evidence (logos), personal connection (ethos), or emotional appeal (pathos). The counter-argument will be addressed fairly before being convincingly rebutted. ' +
      'Rhetorical techniques should be varied and effective: repetition for emphasis, antithesis for contrast, tricolon for rhythm, rhetorical questions for engagement, and imperatives for urgency. They should feel organic, not artificially inserted. ' +
      'The conclusion should circle back to the opening, creating a sense of completeness, and end with a clear, powerful call to action that the audience can act on. ' +
      'Annotations should demonstrate awareness of why each technique was chosen and how it serves the argument.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['speech', 'rhetoric', 'persuasion', 'ethos', 'pathos', 'logos', 'assessment'],
    linkedObjectives: ['Y8.R9', 'Y8.S1', 'Y8.W2', 'Y8.W4', 'Y8.W6'],
  },
]

// =============================================================================
// HOMEWORK TASKS (18 total: 3 per half-term)
// =============================================================================

export const y8HomeworkTasks: HomeworkTask[] = [
  // ── Half-Term 1 (T1a: Hunger Games / Dystopia) ──────────────────────────
  {
    id: 'y8-hw-ht1-01',
    title: 'Dystopian World-Building Journal',
    halfTerm: 1,
    weekNumber: 2,
    type: 'creative',
    instructions:
      '<p>Create a journal entry (200-250 words) written by a citizen of a dystopian world of your own invention.</p>' +
      '<p>Your entry must:</p>' +
      '<ul>' +
      '<li>Establish the rules and restrictions of your society</li>' +
      "<li>Reveal the character's feelings about the system through inference (show, don't tell)</li>" +
      '<li>Include at least one moment of tension or conflict</li>' +
      '<li>Use first-person narration and present tense</li>' +
      '</ul>',
    modelAnswer:
      "A strong response will create an original dystopian setting with specific, believable details rather than generic oppression. The character's emotions should be conveyed through actions, observations, and internal thoughts rather than direct statements. " +
      'The tension could be an encounter with authority, a forbidden act, or a moment of realisation. The first-person present tense should create immediacy, drawing the reader into the world.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['dystopia', 'world-building', 'creative writing', 'first person', 'inference'],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  {
    id: 'y8-hw-ht1-02',
    title: 'Power Structures Research Task',
    halfTerm: 1,
    weekNumber: 4,
    type: 'research',
    instructions:
      '<p>Research a real-world example of an authoritarian regime or a significant social movement against inequality.</p>' +
      '<ol>' +
      '<li>Provide a brief summary of the regime or movement (100 words). (4 marks)</li>' +
      '<li>Identify three parallels between your research and <em>The Hunger Games</em>. (6 marks)</li>' +
      '<li>What lessons does your research suggest about the relationship between power and resistance? (5 marks)</li>' +
      '</ol>' +
      '<p>Include a bibliography of at least two sources.</p>',
    modelAnswer:
      'The summary should be factual, concise, and historically accurate. Parallels should be specific and insightful (e.g., comparing propaganda techniques, control of resources, or the role of symbols in resistance movements). ' +
      'The reflection on power and resistance should demonstrate independent thinking, connecting historical evidence to the themes of the novel and drawing broader conclusions about human societies.',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['research', 'authoritarianism', 'power', 'resistance', 'parallels'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2'],
  },
  {
    id: 'y8-hw-ht1-03',
    title: 'Analytical Paragraph: A Key Moment',
    halfTerm: 1,
    weekNumber: 6,
    type: 'analysis',
    instructions:
      '<p>Choose a key moment from <em>The Hunger Games</em> that you found powerful or significant.</p>' +
      '<p>Write one PEEL paragraph (100-150 words) analysing how Collins presents this moment. You must:</p>' +
      '<ul>' +
      "<li>State a clear point about the moment's significance</li>" +
      '<li>Embed a quotation as evidence</li>' +
      '<li>Explain the effect of a specific language technique</li>' +
      '<li>Link to a wider theme of the novel</li>' +
      '</ul>',
    modelAnswer:
      'A strong paragraph will have a clear analytical point (not a retelling), a well-chosen embedded quotation, detailed analysis of a language technique with exploration of connotations, and a link to themes such as power, inequality, survival, or resistance. ' +
      'The response demonstrates the PEEL structure clearly and shows the student can write about literature analytically rather than narratively.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'developing',
    keywords: ['PEEL', 'analysis', 'quotation', 'language technique', 'theme'],
    linkedObjectives: ['Y8.W1', 'Y8.W3', 'Y8.R5'],
  },

  // ── Half-Term 2 (T1b: Hunger Games continued / Dystopia) ────────────────
  {
    id: 'y8-hw-ht2-01',
    title: 'Creative Response: Alternative Ending',
    halfTerm: 2,
    weekNumber: 2,
    type: 'creative',
    instructions:
      '<p>Write an alternative ending to <em>The Hunger Games</em> (250-300 words). Begin from the moment Katniss and Peeta are the last two tributes.</p>' +
      '<p>Your ending must:</p>' +
      '<ul>' +
      "<li>Maintain Katniss's voice and character</li>" +
      '<li>Present a different resolution to the final conflict</li>' +
      '<li>Include at least one moment of internal conflict</li>' +
      "<li>Consider the consequences of Katniss's choices for the wider world of Panem</li>" +
      '</ul>',
    modelAnswer:
      "A strong response will capture Katniss's narrative voice convincingly -- her directness, her practical thinking, her emotional guardedness. The alternative ending should feel plausible within the world Collins has created, not simply wish fulfilment. " +
      'Internal conflict should be shown through thought and hesitation rather than stated. The wider consequences should demonstrate understanding of the political stakes beyond personal survival.',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: [
      'creative writing',
      'narrative voice',
      'alternative ending',
      'character',
      'consequence',
    ],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  {
    id: 'y8-hw-ht2-02',
    title: 'Extended Reading Response',
    halfTerm: 2,
    weekNumber: 4,
    type: 'reading-response',
    instructions:
      '<p>Read a chapter or extract from a dystopian novel of your choice (e.g., <em>1984</em>, <em>Brave New World</em>, <em>The Giver</em>, <em>Divergent</em>, <em>The Maze Runner</em>).</p>' +
      '<ol>' +
      '<li>Summarise the extract in 50 words. (3 marks)</li>' +
      '<li>What dystopian features can you identify? List at least three. (3 marks)</li>' +
      '<li>Compare one aspect of this world to <em>The Hunger Games</em>. (4 marks)</li>' +
      '<li>Would you recommend this book? Write a mini-review (75 words). (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The summary should be concise and capture the essential content. Dystopian features should be specific (e.g., surveillance, restricted freedom, social hierarchy, controlled information) rather than vague. ' +
      'The comparison should identify a genuine point of connection or contrast, supported by specific details from both texts. ' +
      'The mini-review should demonstrate personal engagement, clear evaluation, and awareness of audience -- recommending to a specific type of reader.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['wider reading', 'dystopia', 'comparison', 'review', 'reading response'],
    linkedObjectives: ['Y8.R1', 'Y8.R4', 'Y8.W2'],
  },
  {
    id: 'y8-hw-ht2-03',
    title: 'Essay Plan: Themes in The Hunger Games',
    halfTerm: 2,
    weekNumber: 6,
    type: 'analysis',
    instructions:
      '<p>Create a detailed essay plan for the question: "How does Collins explore the theme of survival in <em>The Hunger Games</em>?"</p>' +
      '<ol>' +
      '<li>Write a thesis statement. (2 marks)</li>' +
      '<li>Plan three PEEL paragraphs with: point, quotation, technique to analyse, link to theme. (9 marks)</li>' +
      "<li>Plan your conclusion: what is Collins's overall message about survival? (4 marks)</li>" +
      '</ol>',
    modelAnswer:
      'The thesis should present a clear argument about survival (e.g., "Collins presents survival as both a physical necessity and a moral challenge, suggesting that true survival requires preserving one\'s humanity"). ' +
      'Each planned paragraph should have a distinct focus: e.g., (1) physical survival through skills and resourcefulness; (2) emotional survival through relationships; (3) moral survival -- the cost of violence. Quotations should be specific and technique analysis should be identified. ' +
      'The conclusion should synthesise the argument and connect to broader ideas about human nature.',
    marks: 15,
    estimatedMinutes: 35,
    difficulty: 'secure',
    keywords: ['essay plan', 'thesis', 'PEEL', 'survival', 'theme'],
    linkedObjectives: ['Y8.W2', 'Y8.W3', 'Y8.R5'],
  },

  // ── Half-Term 3 (T2a: Poetry) ──────────────────────────────────────────
  {
    id: 'y8-hw-ht3-01',
    title: 'Poetry Anthology Response',
    halfTerm: 3,
    weekNumber: 2,
    type: 'reading-response',
    instructions:
      '<p>Choose a poem from the class anthology that you find interesting or challenging.</p>' +
      '<ol>' +
      '<li>Write out the poem (or attach a copy). (1 mark)</li>' +
      '<li>Annotate the poem, identifying at least four techniques. (4 marks)</li>' +
      '<li>Write a paragraph (100-120 words) explaining what the poem means to you and how the poet conveys this meaning. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Annotations should be specific: identifying techniques by name, quoting the relevant words, and noting the effect. They should go beyond the obvious (e.g., not just "rhyme" but the specific rhyme scheme and its effect on tone). ' +
      'The paragraph should demonstrate personal engagement alongside analytical skill. It should explain what the poem is about on a deeper level and how specific techniques create meaning and emotional response. The best responses will show genuine thought rather than formulaic analysis.',
    marks: 15,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['annotation', 'poetry', 'personal response', 'technique', 'meaning'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W3'],
  },
  {
    id: 'y8-hw-ht3-02',
    title: 'Write Your Own Poem',
    halfTerm: 3,
    weekNumber: 4,
    type: 'creative',
    instructions:
      '<p>Write a poem (12-20 lines) inspired by a theme studied in class (e.g., identity, conflict, nature, memory).</p>' +
      '<p>Requirements:</p>' +
      '<ul>' +
      '<li>Use at least three different techniques from your toolkit</li>' +
      '<li>Make deliberate choices about form (stanzas, line length, rhyme/free verse)</li>' +
      '<li>Write a 50-word commentary explaining your key choices</li>' +
      '</ul>',
    modelAnswer:
      'The poem should demonstrate deliberate craft rather than accidental technique. Form choices should support content (e.g., a poem about chaos might use irregular stanza lengths). ' +
      'Techniques should be varied and effective -- not simply listed to tick boxes. The commentary should show metacognitive awareness: why specific techniques were chosen and what effects they were intended to create.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['poetry writing', 'techniques', 'form', 'commentary', 'craft'],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  {
    id: 'y8-hw-ht3-03',
    title: 'Poetry Comparison: Mini-Essay',
    halfTerm: 3,
    weekNumber: 6,
    type: 'extended-writing',
    instructions:
      '<p>Write a mini-essay (200-250 words) comparing how two poems present a shared theme.</p>' +
      '<p>Your response must:</p>' +
      '<ul>' +
      '<li>Compare throughout using comparative connectives</li>' +
      '<li>Analyse at least one technique from each poem</li>' +
      '<li>Embed quotations</li>' +
      '<li>Conclude with a personal evaluation of which poem is more effective</li>' +
      '</ul>',
    modelAnswer:
      'The response should demonstrate genuine comparison rather than sequential analysis. Comparative connectives (similarly, in contrast, whereas, however, both, while) should link the poems at the level of ideas and techniques. ' +
      'Quotations should be embedded and technique analysis should explore effect on the reader. The conclusion should present a justified personal preference, demonstrating critical independence.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['comparison', 'essay', 'connectives', 'evaluation', 'poetry'],
    linkedObjectives: ['Y8.R7', 'Y8.R8', 'Y8.W3'],
  },

  // ── Half-Term 4 (T2b: Macbeth) ─────────────────────────────────────────
  {
    id: 'y8-hw-ht4-01',
    title: 'Macbeth Character Profile',
    halfTerm: 4,
    weekNumber: 2,
    type: 'research',
    instructions:
      '<p>Create a detailed character profile for either Macbeth or Lady Macbeth.</p>' +
      '<ol>' +
      '<li>Key traits with evidence (quotations) from at least three different scenes. (6 marks)</li>' +
      '<li>How the character changes across the play (arc diagram or timeline). (4 marks)</li>' +
      "<li>The character's relationship with one other character. (3 marks)</li>" +
      "<li>One sentence summarising Shakespeare's message through this character. (2 marks)</li>" +
      '</ol>',
    modelAnswer:
      'Traits should be specific and evidenced from different points in the play, showing understanding of character development. The arc should track clear changes (e.g., Macbeth: brave warrior to ambitious plotter to guilt-ridden king to isolated tyrant). ' +
      'The relationship analysis should show how the dynamic shifts (e.g., Lady Macbeth moves from dominant to dependent). ' +
      'The summary sentence should capture Shakespeare\'s thematic purpose (e.g., "Through Macbeth, Shakespeare warns that unchecked ambition destroys the individual and the state").',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['character profile', 'Macbeth', 'Lady Macbeth', 'character arc', 'evidence'],
    linkedObjectives: ['Y8.R3', 'Y8.R4', 'Y8.R6'],
  },
  {
    id: 'y8-hw-ht4-02',
    title: 'Shakespeare in Modern English',
    halfTerm: 4,
    weekNumber: 4,
    type: 'creative',
    instructions:
      '<p>Choose a key scene from <em>Macbeth</em> (15-20 lines of dialogue) and rewrite it in modern English as a script.</p>' +
      '<p>Requirements:</p>' +
      '<ul>' +
      '<li>Preserve the meaning and emotion of the original</li>' +
      '<li>Update the language to feel natural and contemporary</li>' +
      '<li>Include stage directions that convey tone and body language</li>' +
      '<li>Write a short note (50 words) explaining what is gained and lost in translation</li>' +
      '</ul>',
    modelAnswer:
      'The modern version should capture the emotional truth of the scene while using natural contemporary language. Stage directions should show understanding of subtext and character motivation. ' +
      "The reflection note should thoughtfully consider what modern language gains (accessibility, clarity) and what it loses (rhythm, poetry, historical resonance, the weight of Shakespeare's imagery).",
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['Shakespeare', 'translation', 'script', 'modern English', 'adaptation'],
    linkedObjectives: ['Y8.R8', 'Y8.W4', 'Y8.W5'],
  },
  {
    id: 'y8-hw-ht4-03',
    title: 'Macbeth Key Quotations Revision Sheet',
    halfTerm: 4,
    weekNumber: 6,
    type: 'revision',
    instructions:
      '<p>Create a revision sheet of 10 key quotations from <em>Macbeth</em>.</p>' +
      '<p>For each quotation:</p>' +
      '<ul>' +
      '<li>Who says it and in which act/scene</li>' +
      '<li>What is happening at this point</li>' +
      '<li>Identify one technique used</li>' +
      '<li>Explain the significance of the quotation in one sentence</li>' +
      '</ul>',
    modelAnswer:
      'Quotations should be selected for significance -- they should represent key moments, themes, or character developments. The coverage should span the whole play rather than clustering in one act. ' +
      'Context should be concise and accurate. Techniques should be correctly identified. Significance statements should go beyond plot to thematic importance (e.g., not "Macbeth is feeling guilty" but "This quotation marks the point where Macbeth\'s guilt begins to outweigh his ambition, foreshadowing his psychological destruction").',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['revision', 'quotations', 'Macbeth', 'technique', 'significance'],
    linkedObjectives: ['Y8.R5', 'Y8.R6', 'Y8.R8'],
  },

  // ── Half-Term 5 (T3a: Rhetoric & Speech Writing) ────────────────────────
  {
    id: 'y8-hw-ht5-01',
    title: 'Speech Analysis: A Speaker You Admire',
    halfTerm: 5,
    weekNumber: 2,
    type: 'analysis',
    instructions:
      '<p>Find a speech by someone you admire (this could be a political leader, activist, athlete, or public figure). Watch or read the speech.</p>' +
      '<ol>' +
      '<li>Who is the speaker and what is the context? (2 marks)</li>' +
      '<li>What is the main message of the speech? (2 marks)</li>' +
      '<li>Identify and analyse three rhetorical techniques used. (6 marks)</li>' +
      '<li>Why do you find this speech effective or inspiring? Write a personal response (75 words). (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Context should include who the speaker is, when and where the speech was given, and what the occasion was. The main message should be expressed concisely. ' +
      'Technique analysis should quote specific examples and explain their effect on the audience. ' +
      'The personal response should go beyond "it was inspiring" to explain specifically what resonated -- the ideas, the delivery, the emotional connection -- demonstrating genuine engagement with rhetoric.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['speech analysis', 'rhetoric', 'personal response', 'techniques', 'admiration'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-hw-ht5-02',
    title: 'Writing to Argue: Opinion Article',
    halfTerm: 5,
    weekNumber: 4,
    type: 'extended-writing',
    instructions:
      '<p>Write an opinion article (250-300 words) for a school magazine on a topic you feel strongly about.</p>' +
      '<p>Your article should:</p>' +
      '<ul>' +
      '<li>Have a catchy headline</li>' +
      '<li>Open with a hook (question, statistic, or anecdote)</li>' +
      '<li>Present a clear argument with at least two supporting points</li>' +
      '<li>Use rhetorical techniques naturally throughout</li>' +
      '<li>End with a strong concluding statement</li>' +
      '</ul>',
    modelAnswer:
      "The headline should be engaging and hint at the article's angle. The opening should grab a teenage reader's attention immediately. " +
      'Arguments should be relevant to the school community and supported with evidence or relatable examples. Rhetorical techniques should enhance the argument without feeling forced. ' +
      'The register should be appropriate for a school magazine -- informed and passionate but accessible, not overly formal or academic. The conclusion should leave the reader thinking.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['opinion article', 'magazine', 'argument', 'headline', 'rhetoric'],
    linkedObjectives: ['Y8.W2', 'Y8.W4', 'Y8.W6'],
  },
  {
    id: 'y8-hw-ht5-03',
    title: 'Persuasion in Everyday Life Log',
    halfTerm: 5,
    weekNumber: 6,
    type: 'research',
    instructions:
      '<p>Over the course of one week, keep a log of five examples of persuasion you encounter in everyday life (advertisements, social media, conversations, news, packaging, etc.).</p>' +
      '<p>For each example:</p>' +
      '<ul>' +
      '<li>Describe what you encountered and where (2 marks)</li>' +
      '<li>Identify the persuasive technique(s) used (2 marks)</li>' +
      '<li>Evaluate how effective it was on you personally and why (1 mark)</li>' +
      '</ul>',
    modelAnswer:
      'Examples should be varied, showing awareness that persuasion operates in many contexts beyond traditional advertising. Descriptions should be specific enough to demonstrate genuine observation. ' +
      'Techniques should be correctly identified using terminology from the course. ' +
      'The effectiveness evaluation should be honest and reflective -- acknowledging when persuasion worked and analysing why, showing developing critical awareness of how rhetoric operates in daily life.',
    marks: 15,
    estimatedMinutes: 30,
    difficulty: 'foundation',
    keywords: ['persuasion', 'everyday life', 'advertising', 'critical awareness', 'log'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.V2'],
  },

  // ── Half-Term 6 (T3b: Media Literacy & Assessment) ──────────────────────
  {
    id: 'y8-hw-ht6-01',
    title: 'Media Comparison: Same Story, Different Sources',
    halfTerm: 6,
    weekNumber: 2,
    type: 'analysis',
    instructions:
      '<p>Find two different news sources reporting on the same recent event.</p>' +
      '<ol>' +
      '<li>Summarise each article in 50 words. (4 marks)</li>' +
      '<li>Identify three differences in how the event is reported (focus, language, framing). (6 marks)</li>' +
      '<li>Which source do you consider more reliable and why? (5 marks)</li>' +
      '</ol>' +
      '<p>Include links or screenshots of both articles.</p>',
    modelAnswer:
      'Summaries should be concise and capture the essential content and angle of each article. Differences should be specific and analytical, not just "one is longer." ' +
      'Students should consider: what facts are emphasised or omitted, what language reveals bias, how headlines frame the story, and whether sources are named and credible. ' +
      'The reliability assessment should use criteria learned in class (source reputation, evidence quality, language objectivity, balance of perspectives).',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['news comparison', 'bias', 'reliability', 'framing', 'media literacy'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8-hw-ht6-02',
    title: 'End of Year Revision: Key Skills Checklist',
    halfTerm: 6,
    weekNumber: 4,
    type: 'revision',
    instructions:
      '<p>Create a revision resource covering the three key skills areas from Year 8:</p>' +
      '<ol>' +
      '<li>Analysing fiction (from Term 1): write one model PEEL paragraph about <em>The Hunger Games</em>. (5 marks)</li>' +
      '<li>Analysing poetry (from Term 2): annotate a short poem extract identifying four techniques. (5 marks)</li>' +
      '<li>Persuasive writing (from Term 3): write the opening paragraph of a persuasive speech using three techniques. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The PEEL paragraph should demonstrate embedded quotations, technique analysis, and thematic connection. The poetry annotation should show accurate identification of techniques with effect analysis. The persuasive opening should demonstrate conscious use of rhetorical techniques with clear purpose. ' +
      'This task assesses whether students can apply the key skills from each term independently, functioning as both revision and self-assessment.',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['revision', 'PEEL', 'annotation', 'persuasion', 'key skills'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W2', 'Y8.W3'],
  },
  {
    id: 'y8-hw-ht6-03',
    title: 'Reflection: My Year 8 English Journey',
    halfTerm: 6,
    weekNumber: 6,
    type: 'extended-writing',
    instructions:
      '<p>Write a reflective piece (200-250 words) about your development as a reader and writer this year.</p>' +
      '<p>Consider:</p>' +
      '<ul>' +
      '<li>What text or topic engaged you most and why?</li>' +
      '<li>What skill have you improved most? Give a specific example.</li>' +
      '<li>What is your biggest area for development going into Year 9?</li>' +
      '<li>How has your understanding of how language works changed?</li>' +
      '</ul>',
    modelAnswer:
      'A strong reflection will be honest, specific, and demonstrate genuine metacognitive awareness. Students should reference particular texts, lessons, or pieces of work rather than making vague claims. ' +
      'The skill improvement section should include a concrete example (e.g., "At the start of the year, I dropped quotations into my work, but now I embed them into my sentences"). ' +
      'The development target should be specific and actionable. The language awareness reflection should show growth in understanding of how writers make deliberate choices for effect.',
    marks: 15,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['reflection', 'metacognition', 'self-assessment', 'targets', 'growth'],
    linkedObjectives: ['Y8.W4', 'Y8.W6', 'Y8.S2'],
  },
]

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const y8WorkbookExercises: WorkbookExercise[] = [
  ...t1Exercises,
  ...t2Exercises,
  ...t3Exercises,
]
