// ─── Types ───────────────────────────────────────────────────────────────────

import type { LessonPlan } from './macbeth-lessons';

// ─── Lesson 1: Opening Chapter — Pip and Magwitch in the Graveyard ──────────

const lesson1: LessonPlan = {
  id: 'great-expectations-01-opening-chapter',
  title: 'Opening Chapter: Pip and Magwitch in the Graveyard',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Dickens establishes Pip\'s character and narrative voice in the opening chapter.',
    'Explore the power dynamic between Pip and Magwitch and its significance to the wider novel.',
    'Examine Dickens\'s use of setting and pathetic fallacy to create atmosphere in the graveyard scene.',
  ],
  successCriteria: [
    'I can explain how Dickens uses first-person retrospective narration to generate sympathy for Pip.',
    'I can analyse at least two quotations from Chapter 1 that establish the power dynamic between Pip and Magwitch.',
    'I can explain how Dickens uses the marshes setting to reflect Pip\'s vulnerability and isolation.',
    'I can link the opening to Victorian attitudes towards class and criminality.',
  ],
  keywords: [
    'first-person narration', 'pathetic fallacy', 'retrospective narrator',
    'power dynamic', 'vulnerability', 'bildungsroman', 'convict', 'marshes',
  ],
  starterActivity: {
    title: 'First Impressions: The Opening Line',
    duration: '8 minutes',
    instructions:
      'Display the opening line: "My father\'s family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip." Students discuss in pairs: What does this opening tell us about the narrator? Why might Dickens choose to have Pip name himself? Teacher draws out ideas about identity, self-creation, and the childlike voice. Link to the concept of a bildungsroman — a coming-of-age story.',
    differentiation: {
      support: 'Provide prompt questions: "Who is speaking? How old do they sound? What does the name \'Pip\' suggest?"',
      core: 'Students annotate the opening line for language features and narrative voice before discussion.',
      stretch: 'Students consider the significance of self-naming in relation to the novel\'s themes of social mobility and reinvention.',
    },
    resources: ['Opening line slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Close Reading: The Graveyard Encounter',
      duration: '22 minutes',
      instructions:
        'Students read the extract from Chapter 1 where Pip encounters Magwitch in the graveyard (from "Hold your noise!" to "I was dreadfully frightened"). Teacher models annotation of the first paragraph, highlighting Dickens\'s use of imperative verbs, physical threat, and the inversion of adult-child power dynamics. Students then work in pairs to annotate the remainder of the extract, focusing on: (1) how Magwitch is presented, (2) how Pip responds, (3) how setting contributes to atmosphere. Students complete a dual-column table: "Magwitch\'s Power" vs "Pip\'s Vulnerability" with supporting quotations.',
      differentiation: {
        support: 'Provide a pre-highlighted extract with key quotations underlined and a word bank for analytical vocabulary.',
        core: 'Students independently annotate and complete the dual-column table with at least three quotations per column.',
        stretch: 'Students write a paragraph comparing how Dickens presents Magwitch here with how he is later revealed as Pip\'s benefactor, considering the effect on the reader.',
      },
      resources: ['Chapter 1 extract handout', 'Dual-column table worksheet', 'Annotation guide (support tier)'],
    },
    {
      title: 'Setting as Symbolism: The Marshes',
      duration: '18 minutes',
      instructions:
        'Teacher displays key quotations describing the marshes setting: "the dark flat wilderness," "the distant savage lair from which the wind was rushing was the sea," "the small bundle of shivers growing afraid of it all and beginning to cry was Pip." Students work in groups to create an annotated sketch of the setting, labelling each element with its symbolic significance. Class discussion: How does Dickens use the setting to reflect Pip\'s emotional state and social position? Why does Dickens place this encounter in a graveyard among the dead? Link to Victorian context — the vulnerability of orphaned children in industrial England.',
      differentiation: {
        support: 'Provide a partially completed annotated sketch with two examples already filled in.',
        core: 'Students create a full annotated sketch with at least four symbolic elements identified.',
        stretch: 'Students write a paragraph analysing how Dickens uses pathetic fallacy and symbolism to foreshadow later events in the novel.',
      },
      resources: ['Setting quotations slide', 'A3 paper for sketches', 'Coloured pens'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Dickens\'s Intentions',
    duration: '7 minutes',
    instructions:
      'Students answer on a slip of paper: "Why does Dickens choose to open the novel with Pip as a frightened child in a graveyard? What effect does this have on the reader?" Collect responses to assess understanding of authorial intention and narrative technique.',
    differentiation: {
      support: 'Sentence starter: "Dickens opens the novel with Pip as a child because he wants the reader to..."',
      core: 'Full written response expected with reference to at least one specific technique.',
      stretch: 'Students consider how the opening establishes expectations that Dickens will later subvert.',
    },
  },
  homework:
    'Write a paragraph explaining how Dickens presents the relationship between Pip and Magwitch in Chapter 1. Use at least two quotations and comment on Dickens\'s use of language.',
  worksheetQuestions: [
    {
      question: 'How does Dickens use the first-person narrative voice to create sympathy for Pip in the opening chapter?',
      lines: 5,
      modelAnswer:
        'Dickens uses a retrospective first-person narrator, meaning the adult Pip is looking back on his childhood experiences. This creates sympathy because the reader experiences the terror of the graveyard encounter through the eyes of a young, vulnerable child. Phrases such as "small bundle of shivers" emphasise Pip\'s fragility, while the child\'s inability to fully understand the danger he is in — evident in his simple, earnest responses to Magwitch — makes the reader feel protective of him. Dickens\'s choice of first-person narration also allows the reader to understand Pip\'s loneliness as an orphan, establishing the emotional foundation for the entire novel.',
      marks: 4,
    },
    {
      question: 'Analyse how Dickens presents Magwitch in the graveyard scene. What methods does he use to create a sense of threat?',
      lines: 6,
      modelAnswer:
        'Dickens presents Magwitch as a terrifying, almost animalistic figure. He is introduced through imperative commands — "Hold your noise!" and "Keep still, you little devil, or I\'ll cut your throat!" — which establish his physical dominance over the child Pip. Dickens describes him as "a fearful man, all in coarse grey, with a great iron on his leg," where the accumulation of threatening details and the reference to the iron leg-shackle mark him as a convict. The verb choices "limped," "shivered," and "growled" create a sense of a man reduced to something barely human by his circumstances. However, Dickens subtly plants sympathy beneath the threat — Magwitch is also cold, hungry, and desperate, which foreshadows his later role as a more complex, sympathetic character.',
      marks: 4,
    },
    {
      question: 'What is the significance of the graveyard setting in the opening chapter?',
      lines: 5,
      modelAnswer:
        'The graveyard setting is significant on multiple levels. Literally, it establishes Pip as an orphan — he is visiting the graves of his parents and five dead siblings, immediately positioning him as isolated and vulnerable. Symbolically, the graveyard represents death, decay, and the end of things, which contrasts with Pip\'s youth and the new beginning that his encounter with Magwitch represents. The "dark flat wilderness" of the marshes surrounding the graveyard reflects Pip\'s bleak prospects as a poor orphan, while the proximity to the prison hulks on the river foreshadows the theme of crime and punishment that runs throughout the novel.',
      marks: 4,
    },
    {
      question: 'How does the opening chapter establish the theme of social class?',
      lines: 5,
      modelAnswer:
        'The opening chapter establishes social class through the contrast between Pip\'s low social position and his lack of power. As an orphan raised "by hand" by his sister, Pip occupies the lowest rung of respectable society. His encounter with Magwitch — a convict who is even lower on the social hierarchy — creates a dynamic where two marginalised figures meet. Dickens uses this encounter to show how the class system dehumanises both: Pip is a "small bundle of shivers" with no family protection, while Magwitch has been reduced to animalistic desperation by the penal system. This establishes the novel\'s central concern with whether social class defines a person\'s worth.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Students do not need to have read the full novel before this lesson. The extract can stand alone for close reading purposes.',
    'Emphasise that the first-person retrospective narration is a key technique — the adult Pip is telling us about his childhood, which adds layers of reflection and irony.',
    'The graveyard scene is a likely extract for the AQA exam. Ensure students practise linking analysis to Dickens\'s wider intentions.',
    'Consider displaying images of the Kent marshes and Victorian prison hulks to bring the setting to life.',
  ],
  targetedSkills: [
    'AO2: Language and structure analysis',
    'AO3: Context',
    'Close reading',
    'Quotation selection',
    'Analytical writing',
  ],
};

// ─── Lesson 2: Satis House — Miss Havisham and Estella ──────────────────────

const lesson2: LessonPlan = {
  id: 'great-expectations-02-satis-house',
  title: 'Satis House: Miss Havisham and Estella',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Dickens uses Satis House as a symbolic setting to reflect Miss Havisham\'s psychological state.',
    'Explore the presentation of Estella as a weapon of Miss Havisham\'s revenge.',
    'Examine how Pip\'s first visit to Satis House triggers his dissatisfaction with his own social class.',
  ],
  successCriteria: [
    'I can explain how Dickens uses description of Satis House to symbolise decay, stagnation, and emotional damage.',
    'I can analyse the relationship between Miss Havisham and Estella using specific textual evidence.',
    'I can explain how Pip\'s encounter at Satis House changes his perception of himself and his aspirations.',
    'I can link Miss Havisham\'s character to Victorian attitudes towards women and marriage.',
  ],
  keywords: [
    'symbolism', 'Gothic', 'decay', 'manipulation',
    'aspiration', 'jilted', 'stagnation', 'cruelty',
  ],
  starterActivity: {
    title: 'Word Association: "Satis"',
    duration: '7 minutes',
    instructions:
      'Reveal that "Satis" means "enough" in Latin. Students brainstorm on whiteboards: why might a house be called "Enough House"? What could this suggest about its owner? After sharing ideas, teacher explains the irony — nothing in Satis House is "enough" for Miss Havisham, who has been consumed by her desire for revenge after being jilted on her wedding day. Display a key quotation: "I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes."',
    differentiation: {
      support: 'Provide the Latin meaning and a simple question: "If someone named their house \'Enough\', what might that tell us about them?"',
      core: 'Students generate three possible interpretations of the name before teacher feedback.',
      stretch: 'Students consider the irony of the name in relation to Miss Havisham\'s obsessive, never-ending grief.',
    },
    resources: ['Etymology slide', 'Mini-whiteboards', 'Key quotation display'],
  },
  mainActivities: [
    {
      title: 'Gothic Description: Analysing Satis House',
      duration: '20 minutes',
      instructions:
        'Students read the extract describing Pip\'s arrival at Satis House (Chapter 8). Teacher highlights key Gothic elements: darkness ("no glimpse of daylight"), decay ("the cold wind seemed to blow colder there than outside the gate"), and the stopped clocks ("I saw that her watch had stopped at twenty minutes to nine, and that a clock in the room had stopped at twenty minutes to nine"). Students complete a table with three columns: Quotation | Technique | Effect on Reader. Teacher models one row, then students work independently. Class discussion: What does the stopped time symbolise? How does Dickens use the house as an extension of Miss Havisham\'s psychology?',
      differentiation: {
        support: 'Provide quotations pre-selected with technique names in a word bank; students focus on writing the "effect" column.',
        core: 'Students identify their own quotations and techniques, completing at least four rows independently.',
        stretch: 'Students write a paragraph comparing Satis House to the marshes setting from Lesson 1, analysing what each reveals about Dickens\'s use of pathetic fallacy.',
      },
      resources: ['Chapter 8 extract', 'Quotation-Technique-Effect table', 'Gothic conventions handout'],
    },
    {
      title: 'Character Study: Miss Havisham and Estella',
      duration: '20 minutes',
      instructions:
        'Students read the section where Miss Havisham instructs Estella to play cards with Pip and Estella calls him "a common labouring-boy" with "coarse hands" and "thick boots." In pairs, students create a relationship diagram showing how Miss Havisham uses Estella. Key questions to address: Why does Miss Havisham want Estella to break hearts? What does Estella\'s cruelty reveal about her upbringing? How does Pip react to being called "common"? Students write a PEE paragraph answering: "How does Dickens present the effect of social class on Pip during his first visit to Satis House?"',
      differentiation: {
        support: 'Provide a paragraph frame with sentence starters and a quotation bank for the PEE paragraph.',
        core: 'Students write a full PEE paragraph independently with at least two embedded quotations.',
        stretch: 'Students evaluate whether Estella is a villain or a victim, supporting their argument with evidence from the text.',
      },
      resources: ['Extract from Chapter 8', 'Relationship diagram template', 'PEE paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Think-Pair-Share: Turning Point',
    duration: '8 minutes',
    instructions:
      'Students consider: "Is Pip\'s visit to Satis House the most important turning point in the novel? Why or why not?" Students think individually for one minute, discuss in pairs for two minutes, then share with the class. Teacher draws out the idea that this visit plants the seeds of Pip\'s shame about his social class and his desire to become a gentleman.',
    differentiation: {
      support: 'Provide a sentence starter: "Pip\'s visit to Satis House is important because it makes him feel..."',
      core: 'Students must reference a specific moment from the visit in their response.',
      stretch: 'Students compare this turning point to another key moment in the novel and argue which is more significant.',
    },
  },
  homework:
    'Write a paragraph analysing how Dickens presents Miss Havisham in Chapter 8. Focus on her appearance, her surroundings, and what these reveal about her character.',
  worksheetQuestions: [
    {
      question: 'How does Dickens use the description of Satis House to create a Gothic atmosphere?',
      lines: 6,
      modelAnswer:
        'Dickens creates a Gothic atmosphere through descriptions of darkness, decay, and stagnation. The house has "no glimpse of daylight," and all the clocks have stopped at "twenty minutes to nine" — the exact moment Miss Havisham was jilted. The wedding feast has been left to rot, with the bride-cake covered in cobwebs and spiders. These details create a sense of time frozen in a moment of trauma, which is deeply unsettling. The Gothic conventions of darkness, entrapment, and physical decay mirror Miss Havisham\'s psychological state — she is emotionally decaying just as her house and dress are physically deteriorating. Dickens uses the setting as an externalisation of her inner torment.',
      marks: 4,
    },
    {
      question: 'How does Dickens present the relationship between Miss Havisham and Estella?',
      lines: 6,
      modelAnswer:
        'Dickens presents the relationship as one of manipulation and control. Miss Havisham has raised Estella to be her instrument of revenge against men, instructing her to "break their hearts." Estella has been trained to be cold and cruel — she calls Pip "a common labouring-boy" without hesitation, showing no empathy. However, Dickens also presents Estella as a victim: she has been denied the ability to feel genuine emotion by Miss Havisham\'s upbringing. The relationship is parasitic — Miss Havisham feeds on Estella\'s cruelty as a substitute for her own inability to hurt Compeyson. This creates dramatic irony, as the reader can see the damage being done to both characters.',
      marks: 4,
    },
    {
      question: 'How does Pip\'s visit to Satis House change his view of himself?',
      lines: 5,
      modelAnswer:
        'Before visiting Satis House, Pip was content with his life at the forge with Joe. However, Estella\'s contempt for his "coarse hands" and "thick boots" makes him acutely aware of his low social standing for the first time. He becomes ashamed of being "common" — a word that haunts him throughout the novel. Dickens shows how a single encounter can shatter a child\'s self-image: Pip begins to wish he "was not common" and dreams of becoming a gentleman. This moment is the catalyst for Pip\'s central conflict between his genuine, humble roots and his aspirational desire to rise in social class.',
      marks: 4,
    },
    {
      question: 'What is the significance of the stopped clocks in Satis House?',
      lines: 4,
      modelAnswer:
        'The stopped clocks, all frozen at twenty minutes to nine, symbolise Miss Havisham\'s refusal to move on from the moment she was jilted by Compeyson. Time has literally stopped for her — she still wears her wedding dress and has left the wedding feast to decay. Dickens uses this detail to suggest that trauma can trap a person in an endless loop of suffering. The stopped clocks also create dramatic irony: while Miss Havisham believes she is preserving her pain as a form of power, she is actually destroying herself and Estella in the process.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson works well with projected images of Victorian Gothic architecture and decayed interiors.',
    'The relationship diagram activity can be extended across multiple lessons as students encounter more of Miss Havisham and Estella.',
    'Emphasise that Miss Havisham is both a perpetrator (manipulating Estella) and a victim (jilted by Compeyson) — this duality is key to AO1 and AO2.',
    'The theme of social class shame introduced here recurs throughout the novel and is central to exam responses.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language and structure analysis',
    'AO3: Context',
    'Gothic genre knowledge',
    'PEE paragraph writing',
  ],
};

// ─── Lesson 3: Pip's Transformation — From Forge to Gentleman ───────────────

const lesson3: LessonPlan = {
  id: 'great-expectations-03-pips-transformation',
  title: 'Pip\'s Transformation: From Forge to Gentleman',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Trace Pip\'s character development from humble blacksmith\'s apprentice to aspiring London gentleman.',
    'Analyse how Dickens uses Pip\'s transformation to critique Victorian social mobility and snobbery.',
    'Evaluate whether Pip\'s transformation represents genuine improvement or moral decline.',
  ],
  successCriteria: [
    'I can identify and explain at least three key stages in Pip\'s transformation.',
    'I can analyse quotations that show Pip\'s changing attitudes towards Joe and his origins.',
    'I can write an evaluative paragraph on whether Pip\'s transformation is positive or negative.',
    'I can connect Pip\'s journey to Dickens\'s views on the Victorian class system.',
  ],
  keywords: [
    'transformation', 'social mobility', 'snobbery', 'bildungsroman',
    'moral decline', 'aspiration', 'gentility', 'ingratitude',
  ],
  starterActivity: {
    title: 'Before and After: Pip\'s Journey',
    duration: '8 minutes',
    instructions:
      'Display two quotations side by side. Young Pip: "I was too coarse and common." London Pip (to Joe): "I was not at all pleased by the arrival of Joe." Students discuss: How has Pip changed? Is this a positive or negative change? Teacher introduces the concept of a bildungsroman and the question at the heart of Pip\'s story — does becoming a gentleman make you a better person?',
    differentiation: {
      support: 'Provide a simple comparison table: "Pip at the Forge" vs "Pip in London" with guiding prompts.',
      core: 'Students explain the contrast between the two quotations and what it reveals about Pip\'s character development.',
      stretch: 'Students predict what Dickens\'s own view might be, based on what they know about his background as a writer from a poor family.',
    },
    resources: ['Dual quotation slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Tracking Pip\'s Moral Journey',
      duration: '20 minutes',
      instructions:
        'Students receive a timeline worksheet with six key moments in Pip\'s transformation: (1) Content at the forge with Joe, (2) Shame after visiting Satis House, (3) Learning of his "great expectations," (4) Arriving in London and spending extravagantly, (5) Being ashamed of Joe\'s visit to London, (6) Learning the truth about his benefactor. For each moment, students must: identify a key quotation, rate Pip\'s moral standing on a scale of 1-10, and explain whether he is moving towards or away from genuine goodness. Students then plot these ratings on a graph to visualise Pip\'s moral arc.',
      differentiation: {
        support: 'Provide quotations for each moment and a partially completed graph; students focus on the moral ratings and explanations.',
        core: 'Students find their own quotations and complete the full timeline and graph independently.',
        stretch: 'Students annotate the graph with turning points and write an analytical paragraph explaining the overall shape of Pip\'s moral arc.',
      },
      resources: ['Timeline worksheet', 'Graph paper', 'Chapter reference guide'],
    },
    {
      title: 'Close Analysis: Joe\'s Visit to London (Chapter 27)',
      duration: '20 minutes',
      instructions:
        'Students read the extract where Joe visits Pip in London and Pip is embarrassed by Joe\'s manners and appearance. Key quotation: "I had neither the good sense nor the good feeling to know that this was all my fault." Students annotate for: Pip\'s behaviour and attitude, Joe\'s dignity and discomfort, Dickens\'s use of the retrospective narrator to show Pip\'s later regret. Students then write an analytical paragraph answering: "How does Dickens use Joe\'s visit to London to criticise Pip\'s snobbery?" Teacher models the first two sentences, then students continue independently.',
      differentiation: {
        support: 'Provide a paragraph scaffold with sentence starters and a quotation bank.',
        core: 'Students write a full paragraph with at least two embedded quotations and a comment on authorial intention.',
        stretch: 'Students write a second paragraph comparing Pip\'s treatment of Joe with Joe\'s consistent kindness, evaluating what this reveals about Dickens\'s views on true gentility.',
      },
      resources: ['Chapter 27 extract', 'Paragraph scaffold (support tier)', 'Model paragraph opening'],
    },
  ],
  plenaryActivity: {
    title: 'Debate: Is Pip a Sympathetic Character?',
    duration: '7 minutes',
    instructions:
      'Quick class vote: Is Pip sympathetic or unsympathetic at this point in the novel? Students must justify their position with one piece of evidence. Teacher summarises: Dickens deliberately makes Pip flawed so that his eventual moral growth is more meaningful. A perfect protagonist would not serve Dickens\'s purpose of criticising the class system.',
    differentiation: {
      support: 'Students choose from two pre-written arguments and explain why they agree with their chosen position.',
      core: 'Students articulate their own argument with textual support.',
      stretch: 'Students consider whether Dickens intends us to judge Pip or to understand how the class system corrupts good people.',
    },
  },
  homework:
    'Write a response to the question: "How does Dickens present Pip\'s relationship with Joe across the novel?" Plan and write two PEE paragraphs.',
  worksheetQuestions: [
    {
      question: 'How does Pip\'s attitude towards Joe change as he moves up in social class?',
      lines: 6,
      modelAnswer:
        'At the beginning of the novel, Pip adores Joe and sees him as his closest companion and protector: "I had a new sensation of feeling conscious that I was looking up to Joe in my heart." However, after visiting Satis House and receiving his "great expectations," Pip begins to view Joe as an embarrassment. When Joe visits London, Pip is ashamed of Joe\'s rough manners and appearance, admitting he wished he "could have kept him away." Dickens uses the retrospective narrator to show that the older Pip recognises his cruelty: "I had neither the good sense nor the good feeling to know that this was all my fault." This shift in attitude reveals how social ambition corrodes genuine human connections, and Dickens positions Joe as the moral compass against which Pip\'s decline is measured.',
      marks: 4,
    },
    {
      question: 'What is a bildungsroman and how does Great Expectations fit this genre?',
      lines: 5,
      modelAnswer:
        'A bildungsroman is a coming-of-age novel that traces the moral, psychological, and social development of a protagonist from youth to maturity. Great Expectations fits this genre because it follows Pip from a vulnerable orphan child on the marshes to a young gentleman in London and finally to a wiser, humbler adult. Crucially, Pip\'s growth is not linear — he must first decline morally (becoming snobbish and ungrateful) before he can truly mature. Dickens uses the bildungsroman structure to argue that genuine moral growth comes not from social advancement but from recognising the value of loyalty, kindness, and honest labour.',
      marks: 4,
    },
    {
      question: 'How does Dickens criticise the Victorian class system through Pip\'s transformation?',
      lines: 6,
      modelAnswer:
        'Dickens criticises the class system by showing that becoming a "gentleman" actually makes Pip a worse person. As Pip acquires wealth and status, he loses his kindness, loyalty, and moral integrity. He becomes ashamed of the forge, neglects Joe, and accumulates debt trying to live beyond his means. Meanwhile, Joe — who has no social standing — remains the most genuinely good character in the novel. Dickens\'s message is that the Victorian equation of wealth with worth is deeply flawed. True gentility, he suggests, is defined by character rather than class. This was a radical view in a society that treated social hierarchy as natural and divinely ordained.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The moral arc graph activity is a powerful visual tool that students can return to throughout the unit.',
    'Emphasise the role of the retrospective narrator — the adult Pip judging his younger self creates dramatic irony and self-criticism.',
    'Dickens\'s own experience of poverty (working in a blacking factory as a child) informs his critique of the class system.',
    'This lesson links closely to Lesson 4 (Social Class and Ambition) and should be taught in sequence.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language analysis',
    'AO3: Context',
    'Character tracking',
    'Evaluative writing',
  ],
};

// ─── Lesson 4: Social Class and Ambition ────────────────────────────────────

const lesson4: LessonPlan = {
  id: 'great-expectations-04-social-class-ambition',
  title: 'Social Class and Ambition in Great Expectations',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Dickens presents social class as a corrupting force across the novel.',
    'Explore the contrast between external gentility and internal moral worth through key characters.',
    'Evaluate Dickens\'s authorial intention in critiquing the rigid Victorian class system.',
  ],
  successCriteria: [
    'I can explain the Victorian class hierarchy and its relevance to the novel.',
    'I can compare at least two characters to illustrate Dickens\'s views on class and moral worth.',
    'I can write an evaluative paragraph on Dickens\'s critique of social ambition.',
    'I can use contextual detail about Dickens\'s own life to support my analysis.',
  ],
  keywords: [
    'social hierarchy', 'gentility', 'moral worth', 'materialism',
    'class mobility', 'meritocracy', 'snobbery', 'Victorian values',
  ],
  starterActivity: {
    title: 'Character Class Ranking',
    duration: '8 minutes',
    instructions:
      'Display a list of characters: Pip, Joe, Magwitch, Miss Havisham, Estella, Compeyson, Herbert, Jaggers. Students rank them from highest to lowest social class, then re-rank them from most to least morally good. Compare the two rankings on the board. Teacher draws out the key insight: in Dickens\'s novel, social rank and moral worth are frequently inverted. The "lowest" characters (Joe, Magwitch) are often the most morally admirable.',
    differentiation: {
      support: 'Provide character cards with brief descriptions to aid ranking.',
      core: 'Students justify their rankings with specific evidence from the text.',
      stretch: 'Students identify which character best represents Dickens\'s view that class does not determine moral worth and explain why.',
    },
    resources: ['Character list slide', 'Character cards (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Character Comparison: Joe vs Compeyson',
      duration: '20 minutes',
      instructions:
        'Students examine Joe and Compeyson as opposing examples of Dickens\'s class critique. Joe: low social standing, uneducated, speaks in dialect — but loyal, kind, self-sacrificing. Compeyson: well-educated, well-spoken, a "gentleman" — but a criminal, a fraud, and the man who destroyed Miss Havisham. Students create a comparison table and then write two PEE paragraphs: one on Joe and one on Compeyson. Key question: "What is Dickens saying about the relationship between social class and moral character through these two figures?"',
      differentiation: {
        support: 'Provide a partially completed comparison table and sentence starters for the PEE paragraphs.',
        core: 'Students complete the comparison independently and write two full PEE paragraphs.',
        stretch: 'Students add a third paragraph evaluating which character Dickens presents more effectively to convey his social message.',
      },
      resources: ['Character evidence sheets', 'Comparison table template', 'PEE scaffold (support tier)'],
    },
    {
      title: 'Contextual Investigation: Dickens and Class',
      duration: '20 minutes',
      instructions:
        'Teacher provides a brief contextual information sheet on Dickens\'s own life: his father\'s imprisonment for debt, his childhood work in a blacking factory, his self-made success as a writer, and his lifelong campaigning for social reform. Students read the information and then answer three guided questions linking Dickens\'s biography to the novel: (1) How might Dickens\'s childhood experiences have influenced his portrayal of Pip? (2) Why might Dickens present Joe — an honest labourer — as more admirable than wealthy characters? (3) What is Dickens\'s message about the possibility of genuine social mobility? Students write a contextual paragraph using AO3 skills.',
      differentiation: {
        support: 'Provide a paragraph frame: "Dickens\'s own experience of... may have influenced his presentation of... because..."',
        core: 'Students write a full AO3 paragraph linking at least two biographical details to the novel.',
        stretch: 'Students evaluate whether Dickens is criticising all ambition or only ambition that comes at the cost of moral integrity.',
      },
      resources: ['Dickens biography handout', 'Guided questions sheet', 'AO3 paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'One-Sentence Summary',
    duration: '7 minutes',
    instructions:
      'Students write one sentence summarising Dickens\'s message about social class in Great Expectations. Share three or four examples and collectively refine the best one. Example: "Dickens argues that true gentility is measured by kindness and loyalty, not wealth and social status."',
    differentiation: {
      support: 'Students choose from three pre-written options and explain why they selected it.',
      core: 'Students craft their own original sentence independently.',
      stretch: 'Students write two sentences — one summarising Dickens\'s view and one offering a counter-argument.',
    },
  },
  homework:
    'Research the Victorian class system and write a paragraph explaining how understanding it enhances a reader\'s interpretation of Great Expectations.',
  worksheetQuestions: [
    {
      question: 'How does Dickens use the character of Joe to present his views on social class?',
      lines: 6,
      modelAnswer:
        'Dickens uses Joe as the embodiment of genuine goodness, untouched by social ambition. Joe is uneducated, speaks in dialect ("wot larks"), and works as a blacksmith — placing him firmly in the working class. However, Dickens consistently presents him as the most morally admirable character in the novel. When Joe visits Pip in London, he is humble and dignified despite Pip\'s embarrassment: "You and me is not two figures to be together in London." Joe\'s self-awareness and refusal to pretend to be something he is not contrasts sharply with Pip\'s hollow attempts at gentility. Dickens\'s authorial intention is clear: Joe represents the values that truly matter — loyalty, honesty, and unconditional love — and these have nothing to do with social standing.',
      marks: 4,
    },
    {
      question: 'How does Dickens present the theme of ambition as both positive and destructive?',
      lines: 6,
      modelAnswer:
        'Dickens presents ambition as a double-edged force. Pip\'s desire to improve himself — initially inspired by his visit to Satis House — is understandable and even sympathetic. However, as his ambition becomes focused on wealth and social status rather than genuine self-improvement, it becomes destructive. He neglects Joe, accumulates debt, and loses sight of his own moral values. Conversely, characters like Herbert Pocket channel ambition constructively — Herbert works hard in business without sacrificing his kindness or integrity. Dickens suggests that ambition directed towards material gain and social climbing is corrupting, while ambition directed towards honest labour and genuine self-improvement is admirable.',
      marks: 4,
    },
    {
      question: 'How does Dickens\'s own background influence his presentation of class in the novel?',
      lines: 5,
      modelAnswer:
        'Dickens experienced both poverty and success in his own life. As a child, he was sent to work in a blacking factory when his father was imprisoned for debt — an experience that left him with a deep understanding of how the class system humiliates and dehumanises the poor. His later success as a writer made him acutely aware that social mobility does not necessarily bring happiness or moral improvement. These experiences directly inform Great Expectations: Pip\'s journey from poverty to wealth mirrors Dickens\'s own, and the novel\'s conclusion — that wealth does not equal worth — reflects Dickens\'s hard-won understanding that the Victorian class system was fundamentally unjust.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The character ranking starter generates excellent discussion and can be revisited at the end of the unit.',
    'Joe vs Compeyson is a high-impact comparison for exam responses — encourage students to keep these notes.',
    'Dickens\'s biography is an AO3 goldmine but remind students it must be linked to the text, not bolted on.',
    'Consider connecting this to wider Victorian context: the Industrial Revolution, urbanisation, and the self-made man.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO3: Context',
    'Comparative analysis',
    'Evaluative writing',
    'AO3: Authorial intention',
  ],
};

// ─── Lesson 5: Guilt and Redemption ─────────────────────────────────────────

const lesson5: LessonPlan = {
  id: 'great-expectations-05-guilt-redemption',
  title: 'Guilt and Redemption in Great Expectations',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Dickens presents guilt as a driving force in multiple characters\' lives.',
    'Explore the concept of redemption and whether Dickens suggests all characters can be redeemed.',
    'Examine how Dickens uses guilt structurally to connect characters and plotlines across the novel.',
  ],
  successCriteria: [
    'I can identify and explain how guilt motivates at least three characters in the novel.',
    'I can analyse quotations that reveal Pip\'s guilt about Magwitch, Joe, and his own ambitions.',
    'I can evaluate whether Dickens presents redemption as possible for all characters.',
    'I can write a structured analytical paragraph on the theme of guilt using AO1 and AO2 skills.',
  ],
  keywords: [
    'guilt', 'redemption', 'atonement', 'conscience',
    'moral reckoning', 'repentance', 'forgiveness', 'complicity',
  ],
  starterActivity: {
    title: 'Guilt Map',
    duration: '8 minutes',
    instructions:
      'Display a central bubble with the word "GUILT." Students work in pairs to create a mind map identifying every character who feels guilty in the novel and what they feel guilty about. Examples: Pip (helping a convict, neglecting Joe, false values), Miss Havisham (destroying Estella\'s capacity for love), Magwitch (his criminal past and its effect on Pip). After three minutes, share and compile a class version on the board. Teacher asks: "Is there a character in this novel who does not carry guilt?"',
    differentiation: {
      support: 'Provide character names around the central bubble and prompt questions for each.',
      core: 'Students identify at least four characters and explain the source of each one\'s guilt.',
      stretch: 'Students rank which character\'s guilt is most significant to the novel\'s plot and themes, justifying their choice.',
    },
    resources: ['Mind map template', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Pip\'s Guilt: A Textual Journey',
      duration: '20 minutes',
      instructions:
        'Students examine three key moments of Pip\'s guilt: (1) Stealing food for Magwitch as a child — "the guilty knowledge that I was going to rob Mrs Joe"; (2) Being ashamed of Joe when he receives his expectations — the guilt of ingratitude; (3) Realising Magwitch, not Miss Havisham, is his benefactor — "the sharpest and deepest pain of all." For each moment, students analyse a key quotation using the structure: What is Pip guilty about? How does Dickens convey this guilt through language? What does this guilt reveal about Pip\'s moral development? Students write one analytical paragraph on the moment they find most significant.',
      differentiation: {
        support: 'Provide the three quotations pre-selected with guided annotation questions.',
        core: 'Students analyse all three moments and choose the most significant for their paragraph.',
        stretch: 'Students trace how Pip\'s guilt evolves across the novel and argue whether it is ultimately a positive force that drives his redemption.',
      },
      resources: ['Three extract handouts', 'Analysis framework sheet', 'Paragraph scaffold (support tier)'],
    },
    {
      title: 'Redemption Arcs: Can Characters Be Forgiven?',
      duration: '20 minutes',
      instructions:
        'Students work in groups of four, each assigned a character: Pip, Miss Havisham, Magwitch, or Estella. Each group must answer: (1) What has this character done wrong? (2) Do they show genuine remorse? (3) Does Dickens offer them redemption? (4) Does the reader forgive them? Groups present findings to the class in two minutes each. Teacher draws out the key distinction: Dickens suggests that redemption requires genuine recognition of wrongdoing, not just suffering. Miss Havisham\'s deathbed repentance ("What have I done!") and Pip\'s return to Joe represent different kinds of moral reckoning.',
      differentiation: {
        support: 'Provide character evidence cards with key quotations and guiding questions.',
        core: 'Students use their own textual knowledge to build their group argument.',
        stretch: 'Students evaluate whether Dickens\'s treatment of redemption is realistic or overly moralistic, linking to Victorian literary conventions.',
      },
      resources: ['Character evidence cards (support tier)', 'Presentation planning sheet', 'Timer'],
    },
  ],
  plenaryActivity: {
    title: 'Verdict: Who Achieves Redemption?',
    duration: '7 minutes',
    instructions:
      'Students vote on which character achieves the most convincing redemption: Pip, Miss Havisham, Magwitch, or Estella. They must write one sentence justifying their vote on a sticky note and place it on the relevant section of the board. Teacher summarises the class view and links to Dickens\'s Christian moral framework — the possibility of forgiveness and moral renewal.',
    differentiation: {
      support: 'Students select from provided justification options.',
      core: 'Students write an original justification sentence.',
      stretch: 'Students explain why one character\'s redemption is more convincing than another\'s.',
    },
  },
  homework:
    'Answer the question: "How does Dickens present the theme of guilt in Great Expectations?" Write three PEE paragraphs focusing on three different characters.',
  worksheetQuestions: [
    {
      question: 'How does Dickens present Pip\'s guilt about his treatment of Joe?',
      lines: 6,
      modelAnswer:
        'Dickens presents Pip\'s guilt about Joe as the central moral crisis of the novel. As Pip rises in social class, he becomes increasingly ashamed of Joe\'s simplicity and lack of education. When Joe visits London, Pip admits he felt "a sense of relief" when Joe left — a devastating admission that reveals how deeply social ambition has corrupted his values. The retrospective narrator amplifies this guilt: the adult Pip, looking back, recognises his younger self\'s cruelty with painful clarity. Dickens uses Pip\'s guilt to argue that social ambition without moral awareness is destructive. Pip\'s eventual return to the forge and his tearful reunion with Joe represents his recognition that genuine human connection is worth more than any social advancement.',
      marks: 4,
    },
    {
      question: 'Does Dickens present Miss Havisham as a character worthy of redemption? Explain your view.',
      lines: 6,
      modelAnswer:
        'Dickens presents Miss Havisham\'s path to redemption as painful and incomplete. For most of the novel, she is consumed by bitterness and revenge, using Estella as a weapon to break men\'s hearts. However, when she finally sees the damage she has caused — Estella\'s inability to love and Pip\'s suffering — she is overwhelmed by guilt: "What have I done! What have I done!" Her kneeling before Pip and begging for forgiveness is a genuine moment of repentance. Yet Dickens complicates her redemption through the fire that engulfs her — she is literally consumed by the remnants of her wedding dress, suggesting that her obsessive grief has consequences that cannot be undone. Dickens implies that redemption requires more than a deathbed confession; it requires action, and Miss Havisham\'s comes too late.',
      marks: 4,
    },
    {
      question: 'How does Dickens use guilt as a structural device to connect the plotlines of the novel?',
      lines: 5,
      modelAnswer:
        'Dickens uses guilt as a thread that links the three stages of Pip\'s life and connects him to other characters. Pip\'s childhood guilt about helping Magwitch connects directly to the revelation in the third stage that Magwitch is his benefactor — the act of guilt becomes the act that determines his entire future. Miss Havisham\'s guilt about Estella connects to Pip\'s romantic disappointment, as he realises that Estella has been damaged by the same woman he hoped would elevate him. Structurally, guilt functions as both motivation and consequence throughout the novel, driving characters\' decisions and then haunting them afterwards. Dickens uses this pattern to reinforce his moral message: actions have consequences, and those consequences cannot be escaped.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The guilt map starter is an excellent revision tool and can be displayed in the classroom throughout the unit.',
    'Redemption is a key theme for exam responses — students should be able to discuss at least two characters\' redemption arcs.',
    'Link to Dickens\'s Christian values: the Victorian belief in moral improvement and the possibility of forgiveness.',
    'The group presentation activity requires careful timing — use a visible countdown timer.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language and structure',
    'AO3: Context',
    'Thematic analysis',
    'Group presentation skills',
  ],
};

// ─── Lesson 6: The Convict's Return — Identity and Revelation ───────────────

const lesson6: LessonPlan = {
  id: 'great-expectations-06-convicts-return',
  title: 'The Convict\'s Return: Identity and Revelation',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the dramatic impact of Magwitch\'s return in Chapter 39 and its effect on Pip.',
    'Explore how Dickens uses the revelation of Pip\'s benefactor to subvert the reader\'s expectations.',
    'Examine the theme of identity — how Pip\'s understanding of himself is shattered by this revelation.',
  ],
  successCriteria: [
    'I can explain why Magwitch\'s return is a pivotal structural turning point in the novel.',
    'I can analyse the language Dickens uses to describe Pip\'s reaction to learning the truth.',
    'I can evaluate how the revelation changes the reader\'s understanding of the entire novel.',
    'I can link the theme of identity to Dickens\'s critique of class-based assumptions.',
  ],
  keywords: [
    'revelation', 'benefactor', 'dramatic irony', 'anagnorisis',
    'identity crisis', 'subversion', 'repulsion', 'prejudice',
  ],
  starterActivity: {
    title: 'Prediction: Who Is Pip\'s Benefactor?',
    duration: '7 minutes',
    instructions:
      'Before revealing the answer, ask students: Who do you think has been funding Pip\'s life as a gentleman? Most students will guess Miss Havisham. Record guesses on the board. Then reveal: it is Magwitch, the convict from the graveyard. Discuss the class\'s reactions — shock, confusion, disbelief. Teacher explains this is exactly the reaction Dickens intended. The reveal forces both Pip and the reader to question every assumption they have made about class, worth, and identity.',
    differentiation: {
      support: 'Provide three options (Miss Havisham, Jaggers, Magwitch) and ask students to justify their choice.',
      core: 'Students explain their prediction with textual evidence before the reveal.',
      stretch: 'After the reveal, students identify moments of foreshadowing they missed on first reading.',
    },
    resources: ['Prediction slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Close Reading: Chapter 39 — Magwitch\'s Return',
      duration: '22 minutes',
      instructions:
        'Students read the extract from Chapter 39 where Magwitch reveals himself as Pip\'s benefactor. Key quotation: "The abhorrence in which I held the man, the dread I had of him, the repugnance with which I shrank from him, could not have been exceeded if he had been some terrible beast." Students annotate for: Pip\'s emotional reaction (revulsion, horror, shame), the power dynamic reversal from Chapter 1, and Dickens\'s use of language to convey Pip\'s class-based prejudice. Students complete a structured table: "What Pip Feels" | "Why He Feels It" | "What This Reveals About Class Prejudice." Then write an analytical paragraph on Pip\'s reaction.',
      differentiation: {
        support: 'Provide the extract with key words underlined and a feelings word bank.',
        core: 'Students annotate independently and write a full analytical paragraph with embedded quotations.',
        stretch: 'Students compare Pip\'s reaction to Magwitch here with his reaction in Chapter 1, analysing how the power dynamic has shifted and what this reveals about Pip\'s character development.',
      },
      resources: ['Chapter 39 extract', 'Annotation guide', 'Structured analysis table'],
    },
    {
      title: 'Identity Crisis: What Does Pip Lose?',
      duration: '18 minutes',
      instructions:
        'Teacher leads a guided discussion: What does Pip lose when he learns Magwitch is his benefactor? Students identify: his belief that Miss Havisham destined him for Estella, his sense of being a "real" gentleman, his self-image as someone deserving of elevated status. Students create a diagram showing Pip\'s "identity before" and "identity after" the revelation. Key discussion: Why is Pip repulsed by Magwitch? Is it because Magwitch is a criminal, or because Magwitch is from the lowest class? What does this tell us about Pip? Students write three sentences answering: "How does Dickens use Magwitch\'s return to expose Pip\'s snobbery?"',
      differentiation: {
        support: 'Provide a "before and after" template with guiding prompts for each section.',
        core: 'Students create the identity diagram independently and write their three analytical sentences.',
        stretch: 'Students evaluate whether Pip\'s reaction is understandable given his social conditioning, or whether Dickens intends us to condemn it outright.',
      },
      resources: ['Identity diagram template', 'Discussion prompt cards'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Structural Significance',
    duration: '8 minutes',
    instructions:
      'Students answer: "Why does Dickens place the revelation about Pip\'s benefactor at the end of the second stage of the novel? What is the structural effect?" Collect and review. Teacher emphasises that this is the novel\'s climactic reversal — everything that follows is a consequence of this moment.',
    differentiation: {
      support: 'Sentence starter: "Dickens places the revelation here because it changes everything for Pip by..."',
      core: 'Students write a full response referencing the three-stage structure of the novel.',
      stretch: 'Students explain how the revelation transforms the meaning of events in the first two stages, using the term "dramatic irony."',
    },
  },
  homework:
    'Write a response to: "How does Dickens present Magwitch in Chapter 39? Compare his presentation here with his appearance in Chapter 1." Two analytical paragraphs.',
  worksheetQuestions: [
    {
      question: 'Why is Magwitch\'s return such a significant turning point in the novel?',
      lines: 6,
      modelAnswer:
        'Magwitch\'s return is the novel\'s central reversal. It shatters Pip\'s belief that Miss Havisham was his benefactor and that he was destined to marry Estella. The revelation forces Pip to confront an uncomfortable truth: his entire life as a gentleman has been funded by a convict — the very type of person he has learned to look down upon. Structurally, Dickens places this at the transition between the second and third stages of the novel, marking the end of Pip\'s illusions and the beginning of his moral reckoning. The return also transforms the reader\'s understanding: every assumption about class and destiny is undermined. Dickens uses this reversal to argue that identity and worth cannot be determined by social origin.',
      marks: 4,
    },
    {
      question: 'Analyse Pip\'s reaction to learning that Magwitch is his benefactor. What does his reaction reveal?',
      lines: 6,
      modelAnswer:
        'Pip\'s reaction is one of horror and revulsion: "The abhorrence in which I held the man, the dread I had of him, the repugnance with which I shrank from him." The accumulation of negative nouns — "abhorrence," "dread," "repugnance" — reveals the intensity of Pip\'s disgust. Crucially, this reaction reveals Pip\'s deep-seated class prejudice: he is not horrified because Magwitch is dangerous (he is an old man by this point), but because a convict\'s money has made him a gentleman. Pip\'s identity is built on the assumption that his wealth comes from a respectable source. Dickens uses Pip\'s repulsion to expose the hypocrisy at the heart of the class system: the money that made Pip "genteel" is no different regardless of its source, but Pip cannot accept this because it destroys his self-image.',
      marks: 4,
    },
    {
      question: 'How does Dickens use dramatic irony in the revelation about Pip\'s benefactor?',
      lines: 5,
      modelAnswer:
        'Dickens employs dramatic irony throughout the first two stages of the novel by allowing both Pip and the reader to assume that Miss Havisham is his benefactor. This assumption seems logical: she is wealthy, she introduces Pip to Estella, and she appears to be grooming him for a higher social position. When the truth is revealed, the dramatic irony cuts in two directions. First, the reader realises they were as deceived as Pip — their own class-based assumptions led them to the wrong conclusion. Second, the retrospective narrator (the older Pip) has been telling the story knowing the truth all along, which adds a layer of self-criticism to his narration. Dickens uses this structural device to implicate the reader in the same snobbery he is critiquing.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is one of the most dramatic moments in the novel and a highly likely exam extract. Spend time on close language analysis.',
    'The prediction starter works brilliantly if students have not yet reached this point in their reading — the surprise mirrors Pip\'s.',
    'Emphasise the term "anagnorisis" (recognition/revelation) from classical tragedy — this elevates analytical vocabulary.',
    'Link Pip\'s repulsion to modern discussions about prejudice and unconscious bias for contemporary relevance.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language and structure',
    'AO3: Context',
    'Close reading',
    'Structural analysis',
  ],
};

// ─── Lesson 7: Miss Havisham's Fire — Consequences and Forgiveness ──────────

const lesson7: LessonPlan = {
  id: 'great-expectations-07-miss-havishams-fire',
  title: 'Miss Havisham\'s Fire: Consequences and Forgiveness',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the symbolic significance of the fire that engulfs Miss Havisham and her wedding dress.',
    'Explore how Dickens presents Miss Havisham\'s journey from vengeance to remorse.',
    'Evaluate the extent to which Dickens offers Miss Havisham redemption through her suffering.',
  ],
  successCriteria: [
    'I can explain the symbolic significance of Miss Havisham\'s fire and its connection to her character arc.',
    'I can analyse key quotations showing Miss Havisham\'s transition from vengeance to guilt.',
    'I can write an evaluative paragraph on whether Miss Havisham achieves genuine redemption.',
    'I can link the fire to Dickens\'s use of poetic justice and Victorian moral conventions.',
  ],
  keywords: [
    'poetic justice', 'symbolism', 'redemption', 'vengeance',
    'remorse', 'consequences', 'catharsis', 'moral reckoning',
  ],
  starterActivity: {
    title: 'Recall and Connect',
    duration: '7 minutes',
    instructions:
      'Students quickly list everything they know about Miss Havisham: her backstory, her relationship with Estella, her treatment of Pip, and her appearance. Teacher then asks: "Does Miss Havisham deserve sympathy? Has she earned forgiveness?" Take a quick show-of-hands vote. Record the results to compare at the end of the lesson.',
    differentiation: {
      support: 'Provide a character fact sheet for reference during recall.',
      core: 'Students create their list independently and justify their vote with one reason.',
      stretch: 'Students distinguish between what Miss Havisham has suffered (being jilted) and what she has chosen to do (weaponising Estella).',
    },
    resources: ['Character fact sheet (support tier)', 'Voting cards'],
  },
  mainActivities: [
    {
      title: 'Close Reading: "What Have I Done!" (Chapter 49)',
      duration: '20 minutes',
      instructions:
        'Students read the extract from Chapter 49 where Pip visits Miss Havisham and she begs for forgiveness. Key quotation: "Until you spoke to her the other day, and until I saw in you a looking-glass that showed me what I once felt myself, I did not know what I had done." Students annotate for: her recognition of guilt, the "looking-glass" metaphor, and the repetition of "What have I done!" Guided analysis: What triggers her remorse? Is it seeing herself reflected in Pip\'s suffering? Students write an analytical paragraph on how Dickens uses the metaphor of the looking-glass to convey Miss Havisham\'s self-recognition.',
      differentiation: {
        support: 'Provide the extract with the metaphor highlighted and a PEE scaffold for the paragraph.',
        core: 'Students annotate independently and write a full analytical paragraph with embedded quotations.',
        stretch: 'Students evaluate whether Miss Havisham\'s guilt is genuine self-awareness or simply self-pity, supporting their argument with textual evidence.',
      },
      resources: ['Chapter 49 extract', 'Metaphor analysis guide', 'PEE scaffold (support tier)'],
    },
    {
      title: 'The Fire: Symbolism and Poetic Justice',
      duration: '20 minutes',
      instructions:
        'Students read the extract describing the fire that consumes Miss Havisham\'s dress. Teacher guides annotation of the symbolic elements: the wedding dress that she has worn for decades as a monument to her grief now destroys her; the fire represents both punishment and purification; Pip\'s attempt to save her mirrors his capacity for forgiveness. Students complete a symbolism table: "Element" | "Literal Meaning" | "Symbolic Significance." Then discuss as a class: Is this poetic justice — a fitting punishment for her actions? Or is it excessively cruel? Students write a paragraph evaluating whether Dickens treats Miss Havisham fairly.',
      differentiation: {
        support: 'Provide the symbolism table partially completed with one example filled in.',
        core: 'Students complete the table with at least three symbolic elements and write their evaluation paragraph.',
        stretch: 'Students compare the fire to other moments of consequence in the novel (e.g., Magwitch\'s recapture, Compeyson\'s death) and analyse Dickens\'s pattern of poetic justice.',
      },
      resources: ['Fire extract', 'Symbolism table template', 'Poetic justice definition card'],
    },
  ],
  plenaryActivity: {
    title: 'Re-Vote: Does Miss Havisham Deserve Sympathy?',
    duration: '8 minutes',
    instructions:
      'Repeat the show-of-hands vote from the starter. Have opinions changed? Students who changed their minds explain what shifted their view. Teacher concludes: Dickens creates characters who are simultaneously victims and perpetrators — this moral complexity is what makes the novel enduring.',
    differentiation: {
      support: 'Students explain their vote using a sentence starter: "My view changed/stayed the same because..."',
      core: 'Students explain what specific textual evidence influenced their decision.',
      stretch: 'Students consider whether Dickens expects the reader to forgive Miss Havisham and what authorial techniques lead to that conclusion.',
    },
  },
  homework:
    'Write a response to: "How does Dickens present Miss Havisham\'s journey from vengeance to remorse?" Include analysis of at least two key moments.',
  worksheetQuestions: [
    {
      question: 'What is the symbolic significance of the fire that destroys Miss Havisham\'s wedding dress?',
      lines: 6,
      modelAnswer:
        'The fire is richly symbolic on multiple levels. The wedding dress that Miss Havisham has worn for decades represents her refusal to move beyond the moment of her betrayal — it is a physical manifestation of her psychological stagnation. When the dress catches fire, it suggests that clinging to the past is ultimately self-destructive. The fire can be read as poetic justice: the instrument of her obsession becomes the instrument of her destruction. However, it also carries connotations of purification — fire in Christian symbolism can represent cleansing, suggesting that Miss Havisham\'s suffering may be a form of atonement. Pip\'s attempt to extinguish the flames, despite everything Miss Havisham has done to him, demonstrates his capacity for forgiveness and compassion, reinforcing Dickens\'s message about moral generosity.',
      marks: 4,
    },
    {
      question: 'How does Dickens present Miss Havisham\'s moment of self-recognition in Chapter 49?',
      lines: 5,
      modelAnswer:
        'Dickens presents Miss Havisham\'s self-recognition through the powerful metaphor of the looking-glass. She tells Pip: "I saw in you a looking-glass that showed me what I once felt myself." This metaphor suggests that seeing Pip\'s pain — caused by Estella\'s coldness, which Miss Havisham engineered — forces her to recognise her own cruelty. The repetition of "What have I done!" conveys the overwhelming nature of her guilt; the exclamatory sentence structure suggests genuine horror at her own actions. Dickens presents her remorse as authentic but belated — she has spent decades inflicting pain and only now understands its consequences. Her kneeling before Pip reverses the power dynamic established in their earlier encounters, symbolising her moral humbling.',
      marks: 4,
    },
    {
      question: 'To what extent does Dickens present Miss Havisham as a victim?',
      lines: 6,
      modelAnswer:
        'Dickens presents Miss Havisham as both victim and perpetrator, creating deliberate moral ambiguity. She is undeniably a victim of Compeyson\'s fraud — he courted her for her money and abandoned her on their wedding day, leaving her psychologically devastated. In this sense, she is a victim of a patriarchal society where women\'s worth was tied to marriage. However, Dickens also shows that Miss Havisham chose to respond to her suffering by inflicting suffering on others: she raised Estella to be emotionally cold and used her as a weapon of revenge against men. This choice transforms her from victim to perpetrator. Dickens suggests that while suffering explains behaviour, it does not excuse it. Miss Havisham\'s tragedy is that she allowed one act of cruelty to define and consume her entire existence.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The re-vote plenary is very effective — students can see their own opinions shifting through close study, which reinforces the value of textual analysis.',
    'Miss Havisham is a popular exam character. Ensure students can discuss her as both victim and perpetrator.',
    'The fire scene is visually dramatic — consider using a film clip (the 2012 BBC adaptation is strong) alongside the text.',
    'Link the looking-glass metaphor to wider literary traditions of mirrors representing self-knowledge and vanity.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language and structure',
    'AO3: Context',
    'Symbolic analysis',
    'Evaluative writing',
  ],
};

// ─── Lesson 8: Estella and Pip's Relationship ──────────────────────────────

const lesson8: LessonPlan = {
  id: 'great-expectations-08-estella-pip-relationship',
  title: 'Estella and Pip\'s Relationship',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Dickens presents the evolving relationship between Estella and Pip across the novel.',
    'Explore how Estella functions both as a character in her own right and as a symbol of Pip\'s misguided aspirations.',
    'Evaluate Dickens\'s presentation of love, obsession, and emotional damage in the novel.',
  ],
  successCriteria: [
    'I can trace the development of Pip and Estella\'s relationship across key moments in the novel.',
    'I can analyse quotations that reveal both Pip\'s devotion and Estella\'s emotional detachment.',
    'I can evaluate whether Pip\'s feelings for Estella represent genuine love or class-driven obsession.',
    'I can discuss the significance of the novel\'s ending in relation to the themes of love and redemption.',
  ],
  keywords: [
    'unrequited love', 'obsession', 'emotional detachment', 'conditioning',
    'devotion', 'idealisation', 'autonomy', 'resolution',
  ],
  starterActivity: {
    title: 'Love or Obsession?',
    duration: '7 minutes',
    instructions:
      'Display two definitions: "Love: deep affection and care for another person\'s wellbeing" and "Obsession: an unhealthy preoccupation that consumes a person\'s thoughts." Students discuss in pairs: Which word better describes Pip\'s feelings for Estella? Take a class vote. Teacher explains that this ambiguity is deliberate on Dickens\'s part — Pip himself cannot distinguish between genuine love and the desire for social elevation that Estella represents.',
    differentiation: {
      support: 'Provide examples of Pip\'s behaviour towards Estella and ask students to categorise each as "love" or "obsession."',
      core: 'Students justify their vote with a specific quotation or event from the novel.',
      stretch: 'Students consider whether Pip\'s feelings for Estella are separable from his desire for social advancement — can he love her without wanting to be a gentleman?',
    },
    resources: ['Definition slide', 'Voting cards'],
  },
  mainActivities: [
    {
      title: 'Relationship Timeline',
      duration: '18 minutes',
      instructions:
        'Students create a visual timeline of Pip and Estella\'s relationship across the novel, identifying five key moments: (1) First meeting at Satis House — "He calls the knaves, jacks, this boy!" (2) Estella\'s warning — "I have no heart" (3) Pip\'s declaration in Chapter 44 — "You are part of my existence" (4) Estella\'s marriage to Drummle (5) The final meeting in the ruined garden. For each moment, students record: the key quotation, who holds the power, and how Dickens presents emotion (or its absence). Students then draw arrows between connected moments to show how earlier events influence later ones.',
      differentiation: {
        support: 'Provide the five moments pre-identified with quotations; students focus on analysing power dynamics.',
        core: 'Students create the full timeline independently with analysis of each moment.',
        stretch: 'Students add a parallel timeline showing how Miss Havisham\'s influence operates at each stage of the relationship.',
      },
      resources: ['Timeline template (A3)', 'Quotation reference sheet', 'Coloured pens'],
    },
    {
      title: 'Close Analysis: "I Have No Heart" and "You Are Part of My Existence"',
      duration: '22 minutes',
      instructions:
        'Students compare two key quotations. Estella: "I have no heart — if that has anything to do with my memory." Pip: "You are part of my existence, part of myself." Teacher models analysis of the first quotation: the dash suggests hesitation, the conditional clause creates ambiguity — does Estella truly lack emotion or is she warning Pip out of a suppressed kindness? Students independently analyse Pip\'s declaration. Class discussion: What is Dickens showing us about the nature of love through this contrast? Students then write a comparative paragraph analysing both quotations side by side.',
      differentiation: {
        support: 'Provide a comparative paragraph frame with sentence starters for each quotation.',
        core: 'Students write a full comparative paragraph with embedded quotations and analysis of language.',
        stretch: 'Students evaluate whether Dickens presents Estella\'s emotional detachment as a choice or a consequence of Miss Havisham\'s conditioning, and what this implies about free will.',
      },
      resources: ['Quotation display slide', 'Comparative paragraph frame (support tier)', 'Language analysis toolkit'],
    },
  ],
  plenaryActivity: {
    title: 'The Ending: Two Versions',
    duration: '8 minutes',
    instructions:
      'Teacher explains that Dickens wrote two endings: the original (Pip and Estella part ways) and the revised version (they leave the garden together with a hint of reunion). Read both final lines aloud. Students vote: which ending is better for the novel\'s themes? Why? Teacher summarises: the ambiguity of the ending reflects the ambiguity of Pip\'s entire journey — can people truly change? Can love survive damage?',
    differentiation: {
      support: 'Students choose their preferred ending and give one reason.',
      core: 'Students explain how each ending connects to the novel\'s themes of change and redemption.',
      stretch: 'Students argue which ending is more consistent with Dickens\'s moral vision across the whole novel.',
    },
  },
  homework:
    'Write a response to: "How does Dickens present the relationship between Pip and Estella?" Focus on two key moments and analyse Dickens\'s use of language.',
  worksheetQuestions: [
    {
      question: 'How does Dickens use Estella\'s character to explore the theme of emotional damage?',
      lines: 6,
      modelAnswer:
        'Dickens presents Estella as a product of Miss Havisham\'s deliberate emotional conditioning. Raised to "break hearts," Estella has been denied the ability to form genuine emotional connections. Her declaration "I have no heart" is both a statement of fact and a warning to Pip. Dickens uses Estella to explore how emotional damage is transmitted across generations — Miss Havisham\'s pain at being jilted is channelled into Estella, who then inflicts pain on others. The tragedy is that Estella herself recognises the damage: her warning to Pip suggests an awareness of her own limitations that she is powerless to overcome. Dickens implies that cruelty breeds cruelty, and that the victims of emotional abuse often become its unwitting perpetrators.',
      marks: 4,
    },
    {
      question: 'Is Pip\'s love for Estella genuine, or is it an extension of his social ambition? Explain with evidence.',
      lines: 6,
      modelAnswer:
        'Dickens deliberately blurs the line between love and ambition in Pip\'s feelings for Estella. Pip\'s attraction begins at Satis House, at the exact moment he becomes aware of his own social inferiority — Estella represents everything he wishes to become. His declaration "you are part of my existence" is passionate and sincere, yet his love is intertwined with his desire for social elevation. Dickens complicates the picture further: even when Pip learns that Estella is Magwitch\'s daughter (and therefore from the same low origins he despises), he continues to love her. This suggests that while Pip\'s initial attraction may have been driven by aspiration, his feelings have evolved into something deeper. Dickens uses this ambiguity to show that human emotions are rarely pure — love can be simultaneously genuine and self-serving.',
      marks: 4,
    },
    {
      question: 'What is the significance of the novel\'s ending for the relationship between Pip and Estella?',
      lines: 5,
      modelAnswer:
        'The novel\'s ending is deliberately ambiguous. In the revised version, Pip and Estella meet in the ruins of Satis House garden, and Pip narrates: "I saw no shadow of another parting from her." This line can be interpreted as hopeful — they will finally be together — or as melancholic, suggesting that their suffering has changed them both beyond full recovery. The ruined garden mirrors their relationship: something once cultivated has been destroyed, but new growth may be possible. Dickens chooses ambiguity because a clear happy ending would undermine his moral message about the lasting consequences of snobbery, manipulation, and misplaced values. The reader is left to decide whether redemption and reunion are truly possible.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The two-endings discussion is a perennially popular activity — students are fascinated by the idea of Dickens changing his mind.',
    'Emphasise that Estella is not simply a love interest — she is a complex character shaped by abuse and manipulation.',
    'The comparative paragraph activity (Estella vs Pip quotations) is excellent exam preparation for AO2-heavy responses.',
    'Link to Victorian gender roles: Estella has limited autonomy in a patriarchal society, which complicates any discussion of her choices.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language analysis',
    'AO3: Context',
    'Comparative writing',
    'Evaluative argument',
  ],
};

// ─── Lesson 9: Victorian Society and Justice ────────────────────────────────

const lesson9: LessonPlan = {
  id: 'great-expectations-09-victorian-society-justice',
  title: 'Victorian Society and Justice in Great Expectations',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Dickens uses the novel to critique the Victorian justice system and its treatment of the poor.',
    'Explore the presentation of crime and punishment through the characters of Magwitch and Compeyson.',
    'Evaluate Dickens\'s social message about inequality, poverty, and institutional injustice.',
  ],
  successCriteria: [
    'I can explain how the Victorian justice system treated criminals differently based on social class.',
    'I can compare the fates of Magwitch and Compeyson as evidence of Dickens\'s critique.',
    'I can analyse how Dickens uses Jaggers and Wemmick to represent the legal profession.',
    'I can write a contextual paragraph linking the novel to Victorian social reform movements.',
  ],
  keywords: [
    'justice', 'penal system', 'transportation', 'social reform',
    'inequality', 'institutional', 'recidivism', 'humanisation',
  ],
  starterActivity: {
    title: 'Crime and Punishment: Victorian vs Modern',
    duration: '8 minutes',
    instructions:
      'Display three Victorian punishments: transportation to Australia for theft, public execution for forgery, prison hulks for petty crime. Students discuss in pairs: How do these compare to modern sentencing? Why were Victorian punishments so severe? Teacher explains the context: the Victorian penal system was designed to protect property and privilege, not to rehabilitate. This is central to understanding Magwitch\'s story — a poor man punished far more harshly than the wealthy Compeyson for the same crime.',
    differentiation: {
      support: 'Provide a simple comparison table: "Victorian Punishment" vs "Modern Equivalent" for each example.',
      core: 'Students explain why Victorian justice might have been harsher and connect this to the novel.',
      stretch: 'Students consider how Dickens, as a social reformer, used fiction as a vehicle for political critique.',
    },
    resources: ['Victorian punishment slide', 'Comparison table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Magwitch vs Compeyson: Justice and Class',
      duration: '22 minutes',
      instructions:
        'Students examine the courtroom scene where Magwitch and Compeyson are tried together (Chapter 42). Key detail: Compeyson, the gentleman, received a lighter sentence than Magwitch, the uneducated labourer, despite Compeyson being the mastermind. Students create a comparison table covering: social class, role in the crime, appearance in court, sentence received, and Dickens\'s purpose. Key quotation from Magwitch: "And when we was put in the dock, I noticed first of all what a gentleman Compeyson looked, wi\' his curly hair and his black clothes and his white pocket-handkercher." Students analyse how appearance and class determined legal outcomes. Write a paragraph: "How does Dickens use the contrast between Magwitch and Compeyson to critique the Victorian justice system?"',
      differentiation: {
        support: 'Provide the comparison table partially completed and a paragraph frame for the writing task.',
        core: 'Students complete the table independently and write a full analytical paragraph.',
        stretch: 'Students research and reference one real Victorian legal case involving class bias, linking it to Dickens\'s critique.',
      },
      resources: ['Chapter 42 extract', 'Comparison table template', 'Paragraph frame (support tier)'],
    },
    {
      title: 'Jaggers and Wemmick: The Face of the Law',
      duration: '18 minutes',
      instructions:
        'Students examine Jaggers and Wemmick as representations of the legal system. Jaggers: powerful, feared, morally ambiguous — he washes his hands obsessively (symbolising his desire to cleanse himself of his work). Wemmick: divides his life rigidly between office (cold, professional) and home at the Castle (warm, loving) — symbolising how the justice system dehumanises those who work within it. Students create character profiles for both, identifying how Dickens uses each to comment on the law. Discussion: Why does Wemmick need a "Castle" to protect his humanity from the legal system?',
      differentiation: {
        support: 'Provide character profiles partially completed with key quotations.',
        core: 'Students create full profiles independently, identifying symbolic significance of key details.',
        stretch: 'Students write a paragraph arguing which character — Jaggers or Wemmick — more effectively represents Dickens\'s critique of Victorian justice, and why.',
      },
      resources: ['Character quotation sheets', 'Profile template', 'Symbolism guide'],
    },
  ],
  plenaryActivity: {
    title: 'Dickens the Reformer: One Key Message',
    duration: '7 minutes',
    instructions:
      'Students write one sentence summarising Dickens\'s message about justice in Great Expectations. Share and refine. Teacher links to Dickens\'s real-life campaigns: his journalism on prison conditions, his support for education reform, and his belief that poverty — not character — was the root cause of crime.',
    differentiation: {
      support: 'Choose from three pre-written summary statements and explain their choice.',
      core: 'Students write their own original summary sentence with textual evidence.',
      stretch: 'Students evaluate whether Dickens\'s message about justice is still relevant today, giving a modern example.',
    },
  },
  homework:
    'Write a contextual paragraph (AO3) explaining how understanding the Victorian justice system enhances a reader\'s appreciation of Magwitch\'s character.',
  worksheetQuestions: [
    {
      question: 'How does Dickens use the contrast between Magwitch and Compeyson to critique the justice system?',
      lines: 6,
      modelAnswer:
        'Dickens uses the contrast between Magwitch and Compeyson to expose the class bias inherent in the Victorian justice system. Both men committed the same crime, but Compeyson — who appeared in court as a "gentleman" with "curly hair" and "black clothes" — received a significantly lighter sentence than Magwitch, who looked rough and uneducated. Dickens makes clear that it was appearance and social class, not culpability, that determined the outcome: Compeyson was the mastermind, yet Magwitch was punished more severely. This critique reflects Dickens\'s wider argument that the Victorian legal system protected the privileged while punishing the poor. The injustice of Magwitch\'s treatment generates sympathy for him and positions the reader to question the fairness of an entire social system.',
      marks: 4,
    },
    {
      question: 'What is the symbolic significance of Jaggers washing his hands?',
      lines: 5,
      modelAnswer:
        'Jaggers\'s obsessive hand-washing is a powerful symbol of his desire to cleanse himself of the moral contamination of his work. As a criminal lawyer, he deals daily with the worst aspects of the justice system — poverty, violence, and corruption — and the hand-washing ritual represents his attempt to separate his professional life from his personal morality. The allusion to Pontius Pilate, who washed his hands before condemning Christ, suggests that Jaggers knows the system is unjust but participates in it regardless. Dickens uses this symbolic detail to show how the legal system corrupts even those who operate within it, forcing them to develop rituals of self-deception in order to function.',
      marks: 4,
    },
    {
      question: 'How does Dickens use the character of Wemmick to comment on Victorian society?',
      lines: 5,
      modelAnswer:
        'Dickens uses Wemmick\'s rigid division between his work life and home life to comment on the dehumanising effect of Victorian institutions. At the office, Wemmick is cold and mechanical — he refers to "portable property" and treats people as transactions. At his home, the Castle in Walworth, he is warm, playful, and caring — he tends his garden, fires a cannon at sunset, and looks after his elderly father (the "Aged P"). The Castle\'s drawbridge and moat are comic but symbolically significant: Wemmick needs physical barriers to protect his humanity from the crushing weight of the legal system. Dickens suggests that Victorian society forces people to compartmentalise, sacrificing warmth and compassion to survive in a harsh, class-driven world.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson is AO3-heavy and provides essential contextual grounding for exam responses.',
    'The Magwitch vs Compeyson comparison is one of the most powerful examples of class critique in the novel.',
    'Jaggers\'s hand-washing is a frequently examined symbol — ensure students can analyse it confidently.',
    'Consider linking to Dickens\'s other works (Oliver Twist, Bleak House) to show his consistent interest in social justice.',
    'Wemmick\'s Castle is a popular exam question topic — students should know the dual-life symbolism thoroughly.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language and structure',
    'AO3: Context',
    'Comparative analysis',
    'Contextual writing',
  ],
};

// ─── Lesson 10: Exam Practice — Analytical Writing ──────────────────────────

const lesson10: LessonPlan = {
  id: 'great-expectations-10-exam-practice',
  title: 'Exam Practice: Analytical Writing on Great Expectations',
  text: 'Great Expectations',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply knowledge of the novel to a timed exam-style question under controlled conditions.',
    'Demonstrate the ability to construct a sustained analytical response using AO1, AO2, and AO3 skills.',
    'Evaluate personal performance using mark scheme criteria and identify areas for improvement.',
  ],
  successCriteria: [
    'I can plan a structured response to an exam-style question within five minutes.',
    'I can write at least three analytical paragraphs with embedded quotations and language analysis.',
    'I can integrate contextual references naturally into my analysis rather than bolting them on.',
    'I can self-assess my work against the AQA mark scheme and identify two specific targets for improvement.',
  ],
  keywords: [
    'thesis statement', 'embedded quotation', 'analytical paragraph',
    'mark scheme', 'assessment objectives', 'topic sentence', 'evaluation', 'authorial intention',
  ],
  starterActivity: {
    title: 'Exam Technique Recap',
    duration: '8 minutes',
    instructions:
      'Display the AQA Literature Paper 1 mark scheme descriptors for Band 4 (achieving) and Band 5 (excelling). Students read both bands and, in pairs, identify the three most important differences between a Band 4 and Band 5 response. Teacher consolidates: Band 5 requires a "critical, exploratory, conceptualised response" with "judicious" use of quotations and context "convincingly" linked to interpretation. Students write three personal targets on a sticky note to guide their writing.',
    differentiation: {
      support: 'Provide a simplified mark scheme summary with key words highlighted.',
      core: 'Students identify differences independently and set their own targets.',
      stretch: 'Students annotate a model paragraph, identifying where it meets Band 4 and how it could be elevated to Band 5.',
    },
    resources: ['Mark scheme display slide', 'Simplified mark scheme (support tier)', 'Sticky notes'],
  },
  mainActivities: [
    {
      title: 'Planning Under Timed Conditions',
      duration: '7 minutes',
      instructions:
        'Display the exam-style question: "Starting with this extract, explore how Dickens presents the theme of social class in Great Expectations. Write about: how Dickens presents social class in this extract; how Dickens presents social class in the novel as a whole." Provide the Chapter 8 extract (Pip\'s first visit to Satis House, where Estella calls him "common"). Students spend five minutes planning: thesis statement, three paragraph topics, key quotations (from the extract and wider novel), and contextual links. Two minutes for teacher to model a strong plan on the board.',
      differentiation: {
        support: 'Provide a planning template with sections for thesis, three paragraphs, quotations, and context.',
        core: 'Students plan independently using their own structure.',
        stretch: 'Students plan an alternative argument (e.g., that Dickens presents class as inescapable rather than simply unjust) and choose the stronger approach.',
      },
      resources: ['Exam question slide', 'Chapter 8 extract', 'Planning template (support tier)'],
    },
    {
      title: 'Timed Writing',
      duration: '30 minutes',
      instructions:
        'Students write their response under timed conditions (30 minutes, replicating the proportional exam timing for a 30-mark question). Conditions: silent working, no notes or books (quotations from memory or paraphrased), exam paper and pen only. Teacher circulates to monitor focus and offer quiet individual prompts if a student is visibly stuck, but does not provide content support. Five-minute warning given before time is called.',
      differentiation: {
        support: 'Allow access to a quotation bank of ten key quotations. Provide sentence starters for the opening paragraph.',
        core: 'Students write entirely from memory, aiming for three full paragraphs plus an introduction.',
        stretch: 'Students aim for four paragraphs and a conclusion that evaluates Dickens\'s overall message about class, challenging or nuancing their thesis.',
      },
      resources: ['Lined paper or exam booklets', 'Timer display', 'Quotation bank (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Self-Assessment and Target Setting',
    duration: '10 minutes',
    instructions:
      'Students swap papers with a partner and read each other\'s responses. Using the simplified mark scheme, they highlight: one moment of strong analysis (green), one moment where context is well integrated (blue), and one area for improvement (pink). Students then write two specific, actionable targets for their next essay. Teacher collects both the essays and the targets to provide written feedback.',
    differentiation: {
      support: 'Provide a peer assessment checklist with tick-box criteria and sentence starters for targets.',
      core: 'Students use the mark scheme independently to assess and write two specific targets.',
      stretch: 'Students write a brief commentary (3-4 sentences) explaining what band their partner\'s work falls into and why, with specific evidence from the response.',
    },
  },
  homework:
    'Redraft the weakest paragraph from your timed essay. Improve it by adding a more precise quotation, a language analysis point, and a contextual link. Highlight your changes in a different colour.',
  worksheetQuestions: [
    {
      question: 'Model Question: How does Dickens present the theme of social class in the extract and in the novel as a whole? (Extract: Chapter 8 — Pip\'s first visit to Satis House.)',
      lines: 8,
      modelAnswer:
        'Dickens presents social class as a source of deep shame and psychological damage in the extract. When Estella calls Pip "a common labouring-boy" and mocks his "coarse hands" and "thick boots," Dickens shows how class judgements reduce a person to their material circumstances. The adjective "common" is weaponised by Estella, stripping Pip of his individuality and defining him solely by his social position. Dickens\'s choice to present this through a child\'s experience amplifies the cruelty — Pip has done nothing to deserve this contempt; it is an accident of birth. The effect on Pip is devastating: he later confesses, "I wished Joe had been rather more genteelly brought up, and then I should have been so too." This reveals how quickly class shame can corrupt a child\'s values, turning him against the one person who genuinely loves him.\n\nIn the wider novel, Dickens extends this critique by showing that social class is an unreliable measure of moral worth. Joe, the uneducated blacksmith, is consistently the most morally admirable character, while Compeyson, the "gentleman" criminal, is the most contemptible. The revelation that Pip\'s wealth comes from Magwitch — a convict — demolishes the assumption that gentility is earned or deserved. Dickens, drawing on his own childhood experience of poverty in the blacking factory, argues that the Victorian class system is fundamentally unjust: it rewards appearance over substance and punishes the poor for circumstances beyond their control. His authorial intention is to challenge the reader\'s own class-based assumptions, using Pip\'s painful journey as a mirror for society\'s values.',
      marks: 30,
    },
    {
      question: 'Write a single analytical paragraph responding to: "How does Dickens present Pip\'s shame about his social background?"',
      lines: 6,
      modelAnswer:
        'Dickens presents Pip\'s shame as a destructive force that separates him from the people who genuinely love him. After visiting Satis House, Pip becomes acutely conscious of his "coarse hands" and "thick boots," internalising Estella\'s contempt as self-hatred. The adjectives "coarse" and "thick" carry connotations of roughness and stupidity, reducing Pip\'s identity to his working-class physicality. His shame deepens when he receives his "great expectations" and begins to view Joe as an embarrassment rather than a friend: "I wished I could have kept him away." Dickens uses the retrospective narrator to reveal Pip\'s later regret — "I had neither the good sense nor the good feeling to know that this was all my fault" — showing that shame blinded Pip to his own cruelty. Dickens\'s message is that class-based shame is a poison that corrodes authentic relationships, and that recognising this truth is the first step towards genuine moral growth.',
      marks: 8,
    },
    {
      question: 'Identify three common weaknesses in GCSE literature essays and explain how to avoid each one.',
      lines: 6,
      modelAnswer:
        'First, feature-spotting without analysis: students identify a technique (e.g., "Dickens uses a metaphor") but do not explain its effect on the reader or link it to the writer\'s intention. To avoid this, always ask: "So what? Why does this matter?" Second, bolted-on context: students add a sentence about Victorian society that is disconnected from their textual analysis. To avoid this, integrate context into the analysis: "Dickens, writing in a society where class was considered fixed and divinely ordained, uses Pip\'s shame to challenge this assumption." Third, retelling the story instead of analysing it: students describe what happens rather than exploring how and why Dickens presents it. To avoid this, focus every sentence on the writer\'s choices — language, structure, form — rather than on the plot.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'This lesson replicates exam conditions as closely as possible. Enforce silence during the timed writing.',
    'The self-assessment activity is crucial — students internalise the mark scheme far more effectively when they apply it to real work.',
    'Collect essays for formal marking if this is an assessment point. Otherwise, use for formative feedback.',
    'The model answer for Question 1 is deliberately strong (Band 5) to give students a clear target to work towards.',
    'Consider photocopying one or two strong student responses (anonymised) to use as exemplars in the next lesson.',
  ],
  targetedSkills: [
    'AO1: Textual references',
    'AO2: Language and structure',
    'AO3: Context',
    'Exam technique',
    'Self-assessment',
    'Timed writing',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const greatExpectationsLessons: LessonPlan[] = [
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
];
