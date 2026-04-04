// Year 7 -- Lesson Presentation Content
// Structured slide data for all three terms.
// Use with a PowerPoint-generation or in-app slide renderer.

export interface SlideContent {
  id: string;
  slideNumber: number;
  title: string;
  bulletPoints: string[];
  teacherNotes: string;
  activity?: string;
  image?: string;
}

export interface LessonPresentation {
  id: string;
  lessonTitle: string;
  yearGroup: string;
  termUnit: string;
  totalSlides: number;
  slides: SlideContent[];
}

// ─────────────────────────────────────────────────────────────────────────────
// TERM 1 -- The Fox Girl and the White Gazelle
// ─────────────────────────────────────────────────────────────────────────────

const t1Presentation1: LessonPresentation = {
  id: 'y7-t1-pres-01',
  lessonTitle: 'Introducing Fox Girl and White Gazelle',
  yearGroup: 'Year 7',
  termUnit: 'Term 1 -- The Fox Girl and the White Gazelle',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t1-p1-s1',
      slideNumber: 1,
      title: 'Welcome to The Fox Girl and the White Gazelle',
      bulletPoints: [
        'Author: Victoria Williamson -- Scottish writer and former aid worker',
        'Set in Glasgow, Scotland -- a city of many cultures and communities',
        'Two protagonists: Reema (Syrian refugee) and Caylin (Scottish girl)',
        'Central themes: identity, belonging, friendship, and migration',
        'Our key question this term: how does a writer make us care about characters?',
      ],
      teacherNotes:
        'Open with the cover image if available. Ask students what they already know about refugees or migration -- keep it brief and sensitive. Establish that this is a novel about real issues but told through the lens of character and story. Preview the three lessons: introduction, language analysis, analytical writing.',
      activity: 'Think-Pair-Share: What do you think the title tells us about the two main characters? What might "fox girl" and "white gazelle" suggest?',
      image: 'fox-girl-cover',
    },
    {
      id: 'y7-t1-p1-s2',
      slideNumber: 2,
      title: 'The Two Protagonists -- First Impressions',
      bulletPoints: [
        'Reema: 12 years old, arrived in Glasgow from Syria as a refugee',
        'Caylin: 12 years old, Scottish, struggling at school and at home',
        'Both girls are outsiders -- for very different reasons',
        'Williamson uses parallel narratives: each chapter alternates perspective',
        'First impressions are constructed carefully -- every detail is a choice',
      ],
      teacherNotes:
        'Introduce the concept of a parallel narrative structure. Explain that switching perspective is a deliberate technique -- it creates comparison and invites empathy. Stress that first impressions in fiction, just like in life, carry assumptions the writer wants us to examine.',
      activity: 'Quick-write (3 minutes): Describe yourself in three sentences as if you were a character in a novel. What details would you choose and why?',
    },
    {
      id: 'y7-t1-p1-s3',
      slideNumber: 3,
      title: 'Setting the Scene -- Glasgow as a Character',
      bulletPoints: [
        'Setting is not just background -- it shapes character and mood',
        'Glasgow is presented as unwelcoming at first, then gradually warmer',
        'Urban detail: tower blocks, parks, school corridors, market stalls',
        'Reema experiences the city through unfamiliar language and signs',
        'Caylin experiences the same streets through fear and social pressure',
      ],
      teacherNotes:
        'Show (or describe) images of urban Glasgow. Discuss how the same place can feel completely different depending on who is experiencing it. Link to the idea of perspective -- the setting changes based on the narrator. This prepares students for the language analysis lesson.',
      activity: 'Class discussion: Can a place feel hostile to one person and safe to another at the same time? Share an example from your own experience.',
    },
    {
      id: 'y7-t1-p1-s4',
      slideNumber: 4,
      title: 'What is a Protagonist?',
      bulletPoints: [
        'Protagonist: the main character whose journey we follow',
        'A novel can have more than one protagonist -- called dual or multiple protagonists',
        'Protagonists are not always likeable -- they must be interesting and complex',
        'We identify with protagonists because we share their perspective',
        'Williamson gives both girls strengths AND flaws -- this makes them believable',
      ],
      teacherNotes:
        'Clarify the difference between protagonist and hero. Not all protagonists are heroic -- many are flawed, struggling, or even morally complicated. Introduce the idea that complexity makes characters more interesting and more realistic. Ask students to name protagonists they have studied or read about.',
    },
    {
      id: 'y7-t1-p1-s5',
      slideNumber: 5,
      title: 'Building Blocks of Character',
      bulletPoints: [
        'Appearance -- how a character looks and what it suggests',
        'Actions -- what a character does, especially under pressure',
        'Dialogue -- how a character speaks and what they choose NOT to say',
        'Thoughts and feelings -- access to the inner world creates empathy',
        'How others react -- other characters act as a mirror to the protagonist',
      ],
      teacherNotes:
        'This is the core analytical framework students will use all term. Display it as a reference throughout the lesson. Emphasise that good analysis identifies WHICH method is being used and explains WHY the writer chose it. Avoid students simply describing what happens.',
      activity: 'Matching task: Give students six short extracts. They must identify which building block each extract uses and write one sentence explaining the effect.',
    },
    {
      id: 'y7-t1-p1-s6',
      slideNumber: 6,
      title: 'Direct vs Indirect Characterisation',
      bulletPoints: [
        'Direct: the narrator tells us what a character is like ("She was fierce")',
        'Indirect: the writer shows us through evidence -- actions, words, reactions',
        'Most literary fiction relies heavily on indirect characterisation',
        'Indirect characterisation invites the reader to interpret and infer',
        'In assessments: always analyse HOW the writer shows character, not just WHAT',
      ],
      teacherNotes:
        'Model the distinction with a simple example: "He was unkind" (direct) versus a scene where he knocks someone\'s books over and walks away laughing (indirect). Ask students which is more powerful and why. Link this to the examiner tip -- analysis of method earns marks.',
      activity: 'Rewrite challenge: Take the sentence "Reema was nervous" and rewrite it as indirect characterisation in 2--3 sentences. Share with a partner.',
    },
    {
      id: 'y7-t1-p1-s7',
      slideNumber: 7,
      title: 'Key Vocabulary for This Unit',
      bulletPoints: [
        'Protagonist -- the main character whose story we follow',
        'Characterisation -- the methods a writer uses to build a character',
        'Parallel narrative -- two or more storylines told side by side',
        'Empathy -- the ability to understand and share another\'s feelings',
        'Perspective -- the point of view through which events are experienced',
      ],
      teacherNotes:
        'Students should add these terms to their vocabulary logs. Consider a brief paired quiz at the start of the next lesson to consolidate definitions. These terms will appear in assessments throughout the term.',
      activity: 'Vocabulary relay: In teams, students take turns writing one of these terms on the board and giving a definition without using the word itself.',
    },
    {
      id: 'y7-t1-p1-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Homework',
      bulletPoints: [
        'Today we met Reema and Caylin -- two outsiders in the same city',
        'We explored how Williamson builds setting to reflect character perspective',
        'We identified the five building blocks of characterisation',
        'We distinguished between direct and indirect characterisation',
        'Next lesson: close reading -- analysing the language Williamson uses',
      ],
      teacherNotes:
        'Use the final few minutes for an exit ticket: students write one thing they found interesting and one question they still have. Collect these to inform the opening of the next lesson. Homework should be reading the first two chapters if the novel is being studied alongside the lessons.',
      activity: 'Exit ticket: Write one sentence explaining why you think Williamson chose to tell this story from two different perspectives.',
    },
  ],
};

const t1Presentation2: LessonPresentation = {
  id: 'y7-t1-pres-02',
  lessonTitle: 'Analysing Language and Character',
  yearGroup: 'Year 7',
  termUnit: 'Term 1 -- The Fox Girl and the White Gazelle',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t1-p2-s1',
      slideNumber: 1,
      title: 'Recap: What We Know So Far',
      bulletPoints: [
        'Two protagonists: Reema and Caylin -- both outsiders, different reasons',
        'Williamson uses parallel narrative to invite comparison',
        'Character is built through: appearance, actions, dialogue, thoughts, reactions',
        'Indirect characterisation is more powerful than direct statement',
        'Today\'s focus: how does Williamson use specific language choices?',
      ],
      teacherNotes:
        'Start with a brief verbal recap -- ask students to recall key terms from last lesson. Use cold-calling or mini whiteboards. Then reveal the lesson focus: moving from identifying techniques to analysing the specific words and phrases Williamson chooses.',
      activity: 'Starter: Give students two sentences. Which uses direct characterisation? Which uses indirect? How can you tell?',
    },
    {
      id: 'y7-t1-p2-s2',
      slideNumber: 2,
      title: 'What is Language Analysis?',
      bulletPoints: [
        'Language analysis: examining why a writer chose specific words or phrases',
        'Every word in a literary text is a deliberate decision',
        'We analyse at word level: verbs, adjectives, nouns, adverbs',
        'We also analyse at phrase and sentence level: patterns, contrasts, structure',
        'The goal is always to explain EFFECT -- what does this make the reader think or feel?',
      ],
      teacherNotes:
        'Stress that language analysis is not about identifying techniques for their own sake. The technique is a tool -- the effect on the reader is the point. Students often name a technique without explaining its effect. Model what a weak and a strong analysis look like side by side.',
    },
    {
      id: 'y7-t1-p2-s3',
      slideNumber: 3,
      title: 'Key Language Techniques',
      bulletPoints: [
        'Simile -- comparing two things using "like" or "as" to create vivid imagery',
        'Metaphor -- stating one thing IS another to suggest a deeper connection',
        'Personification -- giving human qualities to objects or abstract ideas',
        'Verb choice -- action words that reveal emotion, intention, or power',
        'Sensory language -- appeals to sight, sound, smell, taste, or touch',
      ],
      teacherNotes:
        'Display these on a permanent reference card or classroom poster. Students should not be learning these for the first time -- this is consolidation and application. Focus lesson time on practising analysis rather than defining terms. Have students identify each technique in short extracts.',
      activity: 'Technique hunt: Provide a short passage from the novel. Students highlight and label each technique they can find, then rank them by impact.',
    },
    {
      id: 'y7-t1-p2-s4',
      slideNumber: 4,
      title: 'Analysing Reema -- Language of Displacement',
      bulletPoints: [
        'Williamson uses imagery of cold, grey, and unfamiliar to reflect Reema\'s experience',
        'Key verbs: "pressed," "froze," "clutched" -- suggest fear and survival instinct',
        'Similes often link Reema to nature: the fox and the gazelle',
        'Short, fragmented sentences can mirror anxiety and disorientation',
        'Language shifts gradually -- as Reema settles, warmth and colour increase',
      ],
      teacherNotes:
        'Use a specific extract here -- ideally one from early in the novel where Reema arrives or navigates a new environment. Guide students through a modelled analysis of two or three key word choices before asking them to continue independently.',
      activity: 'Close reading: Annotate the provided extract from Reema\'s perspective. Find three language choices and for each one write: technique -- quotation -- effect on the reader.',
    },
    {
      id: 'y7-t1-p2-s5',
      slideNumber: 5,
      title: 'Analysing Caylin -- Language of Conflict',
      bulletPoints: [
        'Caylin\'s language is often aggressive or defensive -- reflecting her home life',
        'Short sentences and blunt dialogue suggest she is guarded and mistrustful',
        'Contrast between her harsh exterior and moments of vulnerability',
        'Williamson uses conflict verbs: "shoved," "snapped," "glared"',
        'Occasional warmth breaks through -- these moments are carefully placed for impact',
      ],
      teacherNotes:
        'Compare this extract to the Reema extract from the previous slide. Ask students: how does the language for each character reflect their different circumstances? The contrast is a key analytical point students should be able to make.',
      activity: 'Pair task: One student analyses a Reema extract, one analyses a Caylin extract. Together, identify one key similarity and one key difference in the language used.',
    },
    {
      id: 'y7-t1-p2-s6',
      slideNumber: 6,
      title: 'The PEE Paragraph Structure',
      bulletPoints: [
        'P -- Point: state what the writer is doing or what we learn',
        'E -- Evidence: provide a specific quotation from the text',
        'E -- Explain: analyse the language and explain its effect on the reader',
        'Always embed quotations -- do not just drop them in without context',
        'The Explain step should be the longest part of your paragraph',
      ],
      teacherNotes:
        'Introduce or consolidate PEE as the core analytical writing structure. Students may have encountered it before (as PEE, PEA, PEEL, or PETER). Standardise the school version used. Model a full paragraph on the board using an extract from the novel, narrating your thinking aloud.',
      activity: 'Build-a-paragraph: Give students a quotation and a point. They must write the Explain section only -- at least two sentences of genuine language analysis.',
    },
    {
      id: 'y7-t1-p2-s7',
      slideNumber: 7,
      title: 'Common Analysis Mistakes to Avoid',
      bulletPoints: [
        'Naming a technique without explaining why it matters -- "This is a metaphor"',
        'Retelling the story instead of analysing -- "Reema feels scared because..."',
        'Using vague effect words: "interesting," "powerful," "effective" without explanation',
        'Ignoring specific word choices -- always zoom in on individual words',
        'Treating the character as a real person rather than a constructed one',
      ],
      teacherNotes:
        'This slide works well as a "spot the mistake" activity. Display examples of weak analytical sentences and ask students to improve them. Emphasise that even a small improvement -- adding a specific word analysis -- dramatically increases the quality of a response.',
      activity: 'Upgrade challenge: Improve these three weak analytical sentences by adding specific word analysis and a clearer explanation of effect.',
    },
    {
      id: 'y7-t1-p2-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Looking Ahead',
      bulletPoints: [
        'Language analysis focuses on WHY a writer chose specific words',
        'We analysed Reema\'s language of displacement and Caylin\'s language of conflict',
        'PEE paragraph structure: Point -- Evidence -- Explain',
        'The Explain section is where marks are made or lost',
        'Next lesson: putting it all together in a full analytical paragraph',
      ],
      teacherNotes:
        'End with a class discussion: which character do students find it easier to write about, and why? This gives useful diagnostic information. Preview the next lesson -- students will be writing their own analytical paragraphs independently. Homework: choose one quotation from tonight\'s reading and write a PEE paragraph about it.',
      activity: 'Exit ticket: Write one analytical sentence about either Reema or Caylin that includes a specific word choice and its effect.',
    },
  ],
};

const t1Presentation3: LessonPresentation = {
  id: 'y7-t1-pres-03',
  lessonTitle: 'Writing Analytical Paragraphs',
  yearGroup: 'Year 7',
  termUnit: 'Term 1 -- The Fox Girl and the White Gazelle',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t1-p3-s1',
      slideNumber: 1,
      title: 'From Analysis to Writing',
      bulletPoints: [
        'We can identify techniques and explain effects -- now we write formally',
        'An analytical paragraph is a structured argument supported by textual evidence',
        'Good analytical writing is clear, specific, and focused on the question',
        'Today: model paragraphs, guided practice, and independent writing',
        'Assessment focus: how does Williamson present character in this novel?',
      ],
      teacherNotes:
        'Set the lesson objective clearly. Students have had two lessons building up to this point. Today is about translating skills into writing. Begin with the model paragraph so students have a concrete target to aim for.',
    },
    {
      id: 'y7-t1-p3-s2',
      slideNumber: 2,
      title: 'Anatomy of a Strong Analytical Paragraph',
      bulletPoints: [
        'Topic sentence: names the point AND links to the question',
        'Embedded quotation: the evidence woven into the sentence, not dropped in',
        'Technique identification: brief -- one or two words at most',
        'Analysis of specific language: focus on one or two key words',
        'Effect on the reader: what does this make us think, feel, or understand?',
      ],
      teacherNotes:
        'Display a model paragraph with each component colour-coded. Walk through each element slowly. Ask students to identify each component before explaining what makes the analysis strong. The model should focus on either Reema or Caylin using an extract already studied.',
      activity: 'Colour-code task: Print out the model paragraph. Students highlight each component in a different colour: topic sentence, evidence, technique, analysis, effect.',
    },
    {
      id: 'y7-t1-p3-s3',
      slideNumber: 3,
      title: 'Model Paragraph -- Annotated',
      bulletPoints: [
        'Point: Williamson presents Reema as deeply vulnerable but resilient',
        'Evidence: "she pressed herself flat against the cold wall, breath ragged"',
        'Technique: sensory language and verb choice',
        '"Pressed" suggests Reema is trying to make herself invisible -- to disappear',
        'Effect: the reader understands her fear as physical, not just emotional',
      ],
      teacherNotes:
        'Read through this model paragraph with the class. Stress the verb "pressed" -- it is a small word but carries enormous meaning. Ask: what would change if the writer used "stood"? Modelling the thinking behind word-level analysis is crucial at this stage.',
      activity: 'Add to the model: Can students write one more sentence of analysis about the word "ragged"? What does it suggest and why did Williamson choose it?',
    },
    {
      id: 'y7-t1-p3-s4',
      slideNumber: 4,
      title: 'Guided Writing -- Together',
      bulletPoints: [
        'Question: How does Williamson present Caylin as conflicted in this extract?',
        'Step 1 -- Identify the most interesting quotation (class vote)',
        'Step 2 -- Write the topic sentence together',
        'Step 3 -- Embed the quotation in a sentence',
        'Step 4 -- Analyse one specific word and explain its effect',
      ],
      teacherNotes:
        'This is a whole-class collaborative writing exercise. Use a visualiser or shared screen. Type the paragraph live as students contribute ideas. Encourage multiple suggestions and discuss why some word choices work better than others. The goal is visible thinking -- students should see the drafting process.',
      activity: 'Live drafting: The teacher types and the class contributes. Every student must suggest at least one word or phrase to include.',
    },
    {
      id: 'y7-t1-p3-s5',
      slideNumber: 5,
      title: 'Paired Writing -- With Support',
      bulletPoints: [
        'Work with your partner to write one analytical paragraph',
        'Use the quotation bank provided -- choose ONE quotation to analyse',
        'Follow the five-step structure from the previous slide',
        'Focus: you have 10 minutes -- quality over quantity',
        'Your paragraph should be 5--7 sentences long',
      ],
      teacherNotes:
        'Circulate during this phase. Target students who are struggling with the Explain step -- this is consistently the weakest area. Prompt with questions: "What does that specific word suggest?" "How does that make the reader feel?" "Why did the writer choose THIS word rather than a simpler one?" Collect two or three examples to share with the class.',
      activity: 'Paired analytical paragraph: Choose one quotation from the bank and write a full PEE paragraph together. Be ready to share.',
    },
    {
      id: 'y7-t1-p3-s6',
      slideNumber: 6,
      title: 'Peer Feedback -- Two Stars and a Wish',
      bulletPoints: [
        'Read your partner\'s paragraph carefully before commenting',
        'Star 1: identify the strongest analytical sentence -- what makes it work?',
        'Star 2: identify one piece of evidence that is well embedded',
        'Wish: suggest one specific improvement -- be precise, not vague',
        'Respond to feedback: make one edit to your paragraph based on the wish',
      ],
      teacherNotes:
        'Model the feedback process first using the guided paragraph from slide 4. Show students what a useful "wish" looks like versus a vague one ("write more" is not useful; "add analysis of the word \'froze\' and explain what it suggests about her emotional state" is useful). Allow 5 minutes for feedback and 3 minutes for revision.',
      activity: 'Two Stars and a Wish: Written peer feedback followed by one timed revision.',
    },
    {
      id: 'y7-t1-p3-s7',
      slideNumber: 7,
      title: 'Extending Your Analysis -- The "So What?" Test',
      bulletPoints: [
        'After every analytical point, ask: "So what? Why does this matter?"',
        'Link to theme: does this quotation also reveal something about belonging?',
        'Link to context: how does this reflect the real experience of refugees?',
        'Link to structure: why did Williamson place this moment here in the novel?',
        'The best analysis connects the specific to the wider meaning of the text',
      ],
      teacherNotes:
        'Introduce the "So what?" test as a self-editing tool. It is simple but effective. If a student can read their analysis and ask "so what?" and not find an answer in their paragraph, they need to extend it. Model adding a linking sentence to the class paragraph that connects the language point to the theme of belonging.',
      activity: '"So what?" extension: Take the paragraph you wrote today and add one final sentence that links your analysis to the wider themes of the novel.',
    },
    {
      id: 'y7-t1-p3-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Assessment Preparation',
      bulletPoints: [
        'A strong analytical paragraph: topic sentence, embedded evidence, technique, analysis, effect',
        'Focus on specific words -- one well-analysed word is worth more than five named techniques',
        'Use the "So what?" test to check your analysis goes far enough',
        'Peer feedback strengthens writing -- give precise, actionable suggestions',
        'Coming up: written assessment on character presentation in the novel',
      ],
      teacherNotes:
        'Outline the assessment task for next week if appropriate. Students should know the question format (likely a 20--25 minute analytical response to a passage-based question). Recommend that homework this week includes one independent PEE paragraph on a quotation of their own choosing from the novel.',
      activity: 'Exit ticket: Write the topic sentence for a paragraph you COULD write about this novel. It must name the character, a quality, AND link to the question.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TERM 2 -- Voice and Identity
// ─────────────────────────────────────────────────────────────────────────────

const t2Presentation1: LessonPresentation = {
  id: 'y7-t2-pres-01',
  lessonTitle: 'What is Voice?',
  yearGroup: 'Year 7',
  termUnit: 'Term 2 -- Voice and Identity',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t2-p1-s1',
      slideNumber: 1,
      title: 'Welcome to Term 2 -- Voice and Identity',
      bulletPoints: [
        'This term we explore how writers create distinctive voices in their writing',
        'Voice: the unique personality, tone, and style a writer brings to a text',
        'Identity: who we are -- shaped by culture, language, family, and experience',
        'We will read diverse texts and write in a range of forms and voices',
        'Central question: how do writers use language to express who they are?',
      ],
      teacherNotes:
        'Introduce the term by asking students to think about a person they know whose voice they would recognise immediately even without seeing them. What makes that voice distinctive? Translate this idea to writing -- a distinctive written voice works in the same way. Preview the three main areas: descriptive writing, perspective writing, and voice in poetry.',
      activity: 'Opening discussion: If your life were a book, what would the narrator\'s voice sound like? List three adjectives to describe it.',
    },
    {
      id: 'y7-t2-p1-s2',
      slideNumber: 2,
      title: 'What Makes a Voice Distinctive?',
      bulletPoints: [
        'Word choice (diction): formal or informal, simple or complex, literal or figurative',
        'Sentence structure: long and complex, short and punchy, or a deliberate mix',
        'Tone: the attitude a writer takes -- angry, wistful, humorous, sombre',
        'Rhythm: the pace and flow of the writing -- fast and urgent or slow and reflective',
        'Point of view: first person (I), second person (you), or third person (he/she/they)',
      ],
      teacherNotes:
        'Display two short passages -- one from a formal news report, one from a first-person diary entry. Ask students to identify the differences and use this to build the vocabulary on the slide. Emphasise that voice is not one single choice but the combination of all these elements working together.',
      activity: 'Voice detective: Read the two extracts. For each one, identify the tone, point of view, and one distinctive word choice. What do these choices tell you about the narrator?',
    },
    {
      id: 'y7-t2-p1-s3',
      slideNumber: 3,
      title: 'Voice in Literature -- Examples',
      bulletPoints: [
        'First-person narrators speak directly to the reader -- creates intimacy',
        'Unreliable narrators may not tell the whole truth -- creates tension',
        'The narrator\'s voice reflects their age, background, and emotional state',
        'Voice can shift during a text -- revealing character change or growth',
        'Writers often draw on their own experiences to make their voice authentic',
      ],
      teacherNotes:
        'Use examples familiar to students -- characters from texts already studied or well-known children\'s and YA literature. If possible, read a brief extract aloud and ask students to describe the narrator\'s voice before revealing who wrote it.',
      activity: 'Read aloud: The teacher reads two short extracts in contrasting voices. Students guess: how old is this narrator? Where are they from? How are they feeling?',
    },
    {
      id: 'y7-t2-p1-s4',
      slideNumber: 4,
      title: 'Identity and Writing',
      bulletPoints: [
        'Identity includes: nationality, ethnicity, language, family, beliefs, experiences',
        'Writers often explore their own identity through their work',
        'Identity can be a source of pride, conflict, confusion, or celebration',
        'Readers connect with writing that feels authentic and personal',
        'This term you will experiment with writing from your own identity',
      ],
      teacherNotes:
        'Handle this sensitively -- students have diverse and complex identities. Frame identity as something to celebrate and explore, not define or limit. Reassure students that their writing is their own and they choose what to share. Connect to the texts studied last term: Reema and Caylin both navigate identity questions.',
      activity: 'Identity map: Draw a simple map with "me" at the centre. Add six or more elements of your identity around it. These will fuel your writing this term.',
    },
    {
      id: 'y7-t2-p1-s5',
      slideNumber: 5,
      title: 'First Person vs Third Person Voice',
      bulletPoints: [
        'First person: "I walked down the street" -- personal, immediate, subjective',
        'Third person: "She walked down the street" -- more distance, can be more objective',
        'Third person limited: close to one character\'s thoughts (like Fox Girl)',
        'Third person omniscient: the narrator knows everything -- god-like perspective',
        'Choice of person affects how much the reader trusts and connects with the narrator',
      ],
      teacherNotes:
        'Students often assume first person is always more engaging -- challenge this. Third person can be just as intimate if closely aligned to a character\'s perspective. Use the Fox Girl novel as a reference point since students will be familiar with Williamson\'s third-person limited approach.',
      activity: 'Rewrite experiment: Take the opening sentence of your identity map and write it in first person, then in third person. How does the feeling change?',
    },
    {
      id: 'y7-t2-p1-s6',
      slideNumber: 6,
      title: 'Voice and Register',
      bulletPoints: [
        'Register: the level of formality appropriate for a specific context',
        'Formal register: essays, reports, speeches -- precise and impersonal',
        'Informal register: diaries, messages, casual conversation -- relaxed and personal',
        'Writers code-switch: shifting register depending on the audience and purpose',
        'A distinctive literary voice often blends registers for effect',
      ],
      teacherNotes:
        'Introduce "code-switching" carefully -- it has a linguistic and cultural meaning that may resonate with some students personally. Frame it positively as a sophisticated skill. Discuss how students themselves shift register between home and school, texting and essay-writing.',
      activity: 'Register challenge: Write the same piece of information (e.g., you are late to school) in three different registers: text to a friend, note to a teacher, official letter to a headteacher.',
    },
    {
      id: 'y7-t2-p1-s7',
      slideNumber: 7,
      title: 'Key Vocabulary -- Voice and Identity',
      bulletPoints: [
        'Voice -- the distinctive personality and style of a narrator or writer',
        'Tone -- the attitude or feeling conveyed by a piece of writing',
        'Register -- the level of formality used in writing or speech',
        'Point of view -- the perspective from which a story is told',
        'Authenticity -- the quality of being genuine, real, or true to life',
      ],
      teacherNotes:
        'Add these to vocabulary logs. These terms will be used in both reading analysis and writing assessment this term. Ensure students understand authenticity in particular -- it is a key criterion in descriptive and creative writing marking.',
      activity: 'Term glossary: Students begin a dedicated vocabulary section for this term. They must write each term, its definition, and their own example sentence.',
    },
    {
      id: 'y7-t2-p1-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Looking Ahead',
      bulletPoints: [
        'Voice is the combination of diction, tone, structure, rhythm, and point of view',
        'Identity shapes voice -- writers draw on who they are to make writing authentic',
        'Register shifts depending on audience and purpose',
        'This term: descriptive writing, perspective writing, and exploring your own voice',
        'Next lesson: descriptive writing techniques -- showing, not telling',
      ],
      teacherNotes:
        'Preview the next two lessons. Students should come to the next lesson having thought about a place that is important to them -- this will be the seed for their descriptive writing. Homework: find a short piece of writing you enjoy (online, in a book, anywhere) and note three things about its voice.',
      activity: 'Exit ticket: In one sentence, define "voice" in your own words without using any of the vocabulary from the slide.',
    },
  ],
};

const t2Presentation2: LessonPresentation = {
  id: 'y7-t2-pres-02',
  lessonTitle: 'Descriptive Writing Techniques',
  yearGroup: 'Year 7',
  termUnit: 'Term 2 -- Voice and Identity',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t2-p2-s1',
      slideNumber: 1,
      title: 'The Art of Description',
      bulletPoints: [
        'Descriptive writing creates a vivid experience in the reader\'s mind',
        'The goal is not to list features -- it is to make the reader feel present',
        'The best description uses carefully chosen detail, not exhaustive detail',
        'Technique and selection are both essential -- what you leave out matters too',
        'Today: show-not-tell, sensory detail, figurative language, and structure',
      ],
      teacherNotes:
        'Open with a contrasting example: a travel-brochure description of a place (generic, uninteresting) versus a literary description of the same place (specific, sensory, atmospheric). Ask students why one engages them and the other does not. Establish that the goal is to generate an emotional response in the reader.',
      activity: 'Spot the difference: Read two descriptions of the same street. Which is more effective and why? List at least three reasons.',
    },
    {
      id: 'y7-t2-p2-s2',
      slideNumber: 2,
      title: 'Show, Don\'t Tell',
      bulletPoints: [
        '"Tell": stating a fact directly -- "The room was dirty and neglected"',
        '"Show": describing so the reader deduces the fact themselves',
        'Show: "Paint curled from the walls in grey strips; the single bulb flickered"',
        'Showing requires specific, concrete detail rather than general statement',
        'Telling has its place -- use it strategically, not by default',
      ],
      teacherNotes:
        'The show-don\'t-tell principle is widely known but often poorly understood. Emphasise that it is not an absolute rule -- some of the greatest writers "tell" very effectively. The key is intentionality. Model the transformation of three "tell" sentences into "show" descriptions, narrating your thinking.',
      activity: 'Show it: Transform these four "tell" sentences into "show" descriptions. Each must include at least one specific detail and one technique.',
    },
    {
      id: 'y7-t2-p2-s3',
      slideNumber: 3,
      title: 'Sensory Language',
      bulletPoints: [
        'Engage all five senses -- sight, sound, smell, taste, touch',
        'Most student writing over-relies on sight -- challenge this habit',
        'Sound: "the clatter of pipes," "a low hum that pressed against the walls"',
        'Smell: often triggers memory -- powerful for creating atmosphere',
        'Touch and texture: underused but highly effective for grounding the reader',
      ],
      teacherNotes:
        'Bring in a physical object or image as a stimulus. Ask students to describe it using only non-visual senses first, then add visual detail. This forces them out of their default habit. Point out that smell and sound are often the most memorable and evocative -- they carry strong emotional associations.',
      activity: 'Sensory tour: Describe your chosen place using ONLY non-visual senses. You have 5 minutes. Then add visual detail and compare which version feels more alive.',
    },
    {
      id: 'y7-t2-p2-s4',
      slideNumber: 4,
      title: 'Figurative Language in Descriptive Writing',
      bulletPoints: [
        'Simile: "the fog settled like a held breath"',
        'Metaphor: "the market was a living creature, restless and loud"',
        'Personification: "the building watched us from across the square"',
        'Extended metaphor: sustaining one comparison across several sentences',
        'Avoid cliches -- fresh comparisons are more powerful than familiar ones',
      ],
      teacherNotes:
        'Focus on the quality of figurative language rather than the quantity. One original, well-developed metaphor is more impressive than five cliches. Introduce the "cliche test": if you have heard the comparison before, it is probably a cliche. Challenge students to find an unusual angle on familiar things.',
      activity: 'Cliche busting: Replace these five cliched comparisons with original ones: "as cold as ice," "the sun smiled down," "the wind howled," "as quiet as a mouse," "the city never slept."',
    },
    {
      id: 'y7-t2-p2-s5',
      slideNumber: 5,
      title: 'Sentence Structure for Effect',
      bulletPoints: [
        'Vary sentence length deliberately -- short sentences create impact and urgency',
        'Long, complex sentences build atmosphere and slow the reader down',
        'The one-word or two-word sentence: use sparingly for maximum impact',
        'Fronted adverbials: "Beyond the gate, the garden stretched into silence"',
        'Repetition and listing: "The cold, the dark, the silence -- it was everywhere"',
      ],
      teacherNotes:
        'Students rarely think about sentence structure in their creative writing. Demonstrate by reading a passage aloud -- students will hear the rhythm of varied sentence length in a way they cannot see on a page. Ask them to tap the table at the end of each sentence to feel the pace.',
      activity: 'Rhythm rewrite: Take a paragraph of flat, same-length sentences. Rewrite it by varying the sentence length deliberately. Read both versions aloud.',
    },
    {
      id: 'y7-t2-p2-s6',
      slideNumber: 6,
      title: 'Structuring a Descriptive Piece',
      bulletPoints: [
        'Opening: hook the reader -- not "I am going to describe..."',
        'Build detail gradually -- do not describe everything at once',
        'Create movement or change within the description -- time passing, weather shifting',
        'Climax or turning point: the most significant moment or detail',
        'Closing: return to an image or idea from the opening -- creates circularity',
      ],
      teacherNotes:
        'Structure is often neglected in descriptive writing because students think it only applies to narrative. A well-structured description has a beginning, a development, and an ending -- even if nothing "happens" in a plot sense. Use a model text to annotate each structural stage.',
      activity: 'Planning frame: Use the five-stage structure above to plan a descriptive piece about a place that matters to you. Bullet points only -- planning, not writing.',
    },
    {
      id: 'y7-t2-p2-s7',
      slideNumber: 7,
      title: 'Model Descriptive Paragraph',
      bulletPoints: [
        'Opening with sensory detail draws the reader in immediately',
        'Notice: the writer establishes atmosphere before introducing any human presence',
        'Figurative language is selective -- one strong metaphor, one precise simile',
        'Sentence length varies: long for atmosphere, short for impact',
        'The closing detail echoes the opening -- the description has shape',
      ],
      teacherNotes:
        'Display a model paragraph and annotate it live with the class. Ask students to identify each technique on this slide within the model text. Then ask: what is the overall effect? What emotion does this description create? Does the structure contribute to the effect?',
      activity: 'Annotation task: Annotate the model paragraph by labelling at least five distinct techniques and writing a one-sentence explanation of each.',
    },
    {
      id: 'y7-t2-p2-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Writing Task',
      bulletPoints: [
        'Show-don\'t-tell: describe so the reader deduces, rather than stating directly',
        'Engage multiple senses -- especially non-visual ones',
        'Choose figurative language carefully -- original is always better than cliched',
        'Vary sentence structure deliberately for pace, rhythm, and impact',
        'Structure your description: hook, development, climax, and circular close',
      ],
      teacherNotes:
        'Set the independent descriptive writing task for homework or the next lesson. The stimulus could be a photograph, a place students know, or an imaginative scenario. Remind students of the assessment criteria: technique, voice, structure, and accuracy.',
      activity: 'Writing task: Describe a place that matters to you. Use at least three of today\'s techniques. Aim for 150--200 words. Underline each technique you have used.',
    },
  ],
};

const t2Presentation3: LessonPresentation = {
  id: 'y7-t2-pres-03',
  lessonTitle: 'Writing from Different Perspectives',
  yearGroup: 'Year 7',
  termUnit: 'Term 2 -- Voice and Identity',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t2-p3-s1',
      slideNumber: 1,
      title: 'Perspective -- Seeing Through Different Eyes',
      bulletPoints: [
        'Perspective: the unique viewpoint from which an event or place is experienced',
        'The same moment can feel completely different to different people',
        'Writers use perspective to create empathy, tension, or irony',
        'Changing perspective changes meaning -- this is a powerful writing tool',
        'Today: we write as characters very different from ourselves',
      ],
      teacherNotes:
        'Begin with a simple exercise: show an image of an everyday scene (a playground, a street market, a waiting room) and ask four different students to describe how they would experience it if they were: a very young child, an elderly person, someone new to the country, someone very wealthy. Discuss how dramatically different the responses are.',
      activity: 'Perspective warm-up: Describe the classroom you are sitting in now -- but as a student who has just arrived from a very different country. What would seem strange, unfamiliar, or surprising?',
    },
    {
      id: 'y7-t2-p3-s2',
      slideNumber: 2,
      title: 'How Perspective Shapes Voice',
      bulletPoints: [
        'Age shapes perspective: a child notices different things from an adult',
        'Culture shapes perspective: familiar objects may be strange to a newcomer',
        'Emotion shapes perspective: fear, grief, and joy change what we notice',
        'Power shapes perspective: those with less power often see more clearly',
        'Voice must be consistent -- every detail should come from the same viewpoint',
      ],
      teacherNotes:
        'Stress the consistency point. A common weakness in perspective writing is inconsistency -- the narrator knows things they could not know, or uses language that does not fit their character. Students need to "inhabit" their character fully before they begin writing.',
      activity: 'Character profile: Create a brief profile of the character you will write as today. Include: age, background, reason for being in the scene, one thing they are hoping for, one thing they are afraid of.',
    },
    {
      id: 'y7-t2-p3-s3',
      slideNumber: 3,
      title: 'Techniques for Writing in Role',
      bulletPoints: [
        'Use vocabulary appropriate to the character\'s age, education, and background',
        'Notice details that YOUR character would notice -- not everything',
        'Reveal character through what they choose to describe and how they describe it',
        'Internal monologue: thoughts and feelings woven into the description',
        'Avoid anachronism and inconsistency -- stay inside your character\'s world',
      ],
      teacherNotes:
        'The concept of selective noticing is important. A character who is hungry will notice food-related details. A character who is frightened will notice exits and threats. This selectivity is itself a form of characterisation. Model this with a short example from a well-known text.',
      activity: 'Noticing exercise: You are in a busy market. What would each of these characters notice first: a street artist, a police officer, a child looking for their parent, a tourist?',
    },
    {
      id: 'y7-t2-p3-s4',
      slideNumber: 4,
      title: 'Reading Example -- Perspective Writing',
      bulletPoints: [
        'Examine how a published author writes from an unfamiliar perspective',
        'Notice: the language choices are consistent with the character\'s world',
        'The character\'s thoughts and feelings shape every descriptive detail',
        'The writer has clearly "lived inside" this character before writing',
        'Identify three specific choices that establish the character\'s perspective',
      ],
      teacherNotes:
        'Use an extract from a published text written from an unusual or challenging perspective -- a child narrator, a historical perspective, a character from a very different culture. If using a published extract, prepare questions at three levels: retrieval, inference, and evaluation.',
      activity: 'Close reading: In the extract provided, find three language choices that reveal the narrator\'s perspective. For each one, explain what it tells us about who this person is.',
    },
    {
      id: 'y7-t2-p3-s5',
      slideNumber: 5,
      title: 'The Challenge of Empathy in Writing',
      bulletPoints: [
        'Empathy in writing: imagining an experience that is not your own',
        'This requires research, imagination, and sensitivity',
        'Be careful not to stereotype -- specific and complex is better than generic',
        'Draw on what you know about human emotion, even if the context is unfamiliar',
        'Read widely -- the best preparation for perspective writing is reading',
      ],
      teacherNotes:
        'This is a values-based discussion as much as a craft discussion. Writing from the perspective of someone very different from yourself is a powerful act of empathy -- but it can also go wrong if done carelessly. Encourage students to focus on specific, human details rather than broad cultural generalisations.',
    },
    {
      id: 'y7-t2-p3-s6',
      slideNumber: 6,
      title: 'Planning Your Perspective Piece',
      bulletPoints: [
        'Choose your character: who are you writing as? Be specific',
        'Choose your moment: a single scene, not a whole life story',
        'Establish the setting: where and when does this scene take place?',
        'Identify the emotional core: what does your character want or fear?',
        'Plan 3--4 key details that will establish the perspective clearly',
      ],
      teacherNotes:
        'Give students a choice of scenarios or allow free choice if the group is confident. Guided planning is more effective than unstructured free writing at this stage. Circulate during planning and ask questions to deepen students\' thinking about their character.',
      activity: 'Planning frame: Complete the five questions above for your perspective piece. Share your character and scenario with a partner -- does it sound convincing?',
    },
    {
      id: 'y7-t2-p3-s7',
      slideNumber: 7,
      title: 'Drafting and Self-Editing',
      bulletPoints: [
        'Write quickly first -- get the ideas down without stopping to perfect',
        'Read back and ask: does every detail come from MY character\'s perspective?',
        'Check for inconsistencies: does the language always fit the character?',
        'Have you included: sensory detail, internal thought, and distinctive voice?',
        'Improve one sentence per paragraph after drafting -- quality over quantity',
      ],
      teacherNotes:
        'Allow 15--20 minutes of sustained writing time. Minimise interruptions during this phase. After writing, guide a structured self-editing process using the checklist on this slide. Students who finish early should focus on adding one more sensory detail per paragraph.',
      activity: 'Timed writing: 15 minutes of uninterrupted perspective writing. Then 5 minutes of self-editing using the checklist above.',
    },
    {
      id: 'y7-t2-p3-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Sharing',
      bulletPoints: [
        'Perspective shapes every detail of a piece of writing -- what is noticed and how',
        'Voice must be consistent -- inhabit your character fully before and during writing',
        'Empathy is a skill: specific, human detail is more powerful than generalisation',
        'Self-editing: check that every detail comes from your character\'s viewpoint',
        'Next lesson: how poets use voice and form to express identity',
      ],
      teacherNotes:
        'Close with a sharing circle -- two or three volunteers read a favourite sentence from their writing and explain why they are proud of it. Celebrate specificity and originality. Connect to the wider theme of the term: voice is a way of saying "I exist and my perspective matters."',
      activity: 'Gallery share: Post your best sentence on a sticky note on the board. Read each other\'s and leave a "star" sticker on your favourite.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TERM 3 -- Stories, Shaping Meaning, and Poetry
// ─────────────────────────────────────────────────────────────────────────────

const t3Presentation1: LessonPresentation = {
  id: 'y7-t3-pres-01',
  lessonTitle: 'Narrative Structure and Folk Tales',
  yearGroup: 'Year 7',
  termUnit: 'Term 3 -- Stories, Shaping Meaning, and Poetry',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t3-p1-s1',
      slideNumber: 1,
      title: 'Welcome to Term 3 -- Stories and Shaping Meaning',
      bulletPoints: [
        'This term we explore HOW stories are constructed -- not just what happens',
        'Narrative structure: the architecture of a story -- how it is built',
        'Folk tales and oral traditions: the oldest form of storytelling',
        'We will read, analyse, and write our own structured narratives',
        'Central question: why do humans tell stories, and how do they shape meaning?',
      ],
      teacherNotes:
        'Open with the question: what is the oldest story you know? Guide students towards fairy tales, myths, folk tales, religious stories. Establish that storytelling is universal -- every culture in history has told stories. Ask: why? What do stories DO for us? This leads naturally into the concept of narrative as meaning-making.',
      activity: 'Opening question: Tell the person next to you the plot of any story in 30 seconds. Then discuss: how did you decide what to include and what to leave out?',
    },
    {
      id: 'y7-t3-p1-s2',
      slideNumber: 2,
      title: 'What is Narrative Structure?',
      bulletPoints: [
        'Narrative structure: the organised framework a story follows',
        'Freytag\'s Pyramid: exposition, rising action, climax, falling action, resolution',
        'Not all stories follow this -- some subvert or play with structure deliberately',
        'Understanding structure helps us analyse WHY a story has a particular effect',
        'Structure is a choice -- and choices can be analysed',
      ],
      teacherNotes:
        'Draw Freytag\'s Pyramid on the board and ask students to map a well-known story onto it (Cinderella, The Lion King, any familiar narrative). This makes the abstract model concrete. Then introduce the idea that modern stories often subvert this -- in media res openings, non-linear structures, unresolved endings.',
      activity: 'Structure mapping: Plot a well-known story onto Freytag\'s Pyramid. Identify the exact moment of climax and explain how you know it is the highest point of tension.',
    },
    {
      id: 'y7-t3-p1-s3',
      slideNumber: 3,
      title: 'The Oral Tradition -- Folk Tales',
      bulletPoints: [
        'Folk tales: stories passed down through generations by word of mouth',
        'Features: repetition, threes, clear moral, archetypal characters',
        'Folk tales exist in every culture -- with striking similarities across traditions',
        'They encode social values, warnings, and wisdom in narrative form',
        'Modern literature often draws on folk tale conventions',
      ],
      teacherNotes:
        'Discuss the global nature of folk tale conventions -- the rule of three, the youngest child who succeeds, the dangerous forest. Ask if students know folk tales from their own cultural backgrounds. This is a rich opportunity for cultural sharing. Establish that these patterns exist because they are deeply resonant and easy to remember.',
      activity: 'Folk tale features hunt: Read the short folk tale extract provided. Identify as many traditional features as you can. Compare with a partner -- did you find the same ones?',
    },
    {
      id: 'y7-t3-p1-s4',
      slideNumber: 4,
      title: 'Archetypal Characters and Plots',
      bulletPoints: [
        'Archetypes: recurring character types found across cultures and centuries',
        'The hero, the villain, the mentor, the trickster, the innocent',
        'Archetypal plots: the quest, the rags-to-riches, the rebirth, the fall',
        'Carl Jung argued these patterns are hardwired into human psychology',
        'Recognising archetypes helps us analyse how stories create emotional responses',
      ],
      teacherNotes:
        'Students often find archetypes immediately recognisable and enjoyable to apply. Use popular culture examples freely -- films, games, TV shows. The point is that these patterns transcend medium and genre. Link back to characters studied earlier in the year -- do Reema and Caylin fit any archetypes?',
      activity: 'Archetype hunt: Match each of the following characters (from books, films, or TV you know) to an archetype. Justify your choice with evidence from the story.',
    },
    {
      id: 'y7-t3-p1-s5',
      slideNumber: 5,
      title: 'The Rule of Three in Storytelling',
      bulletPoints: [
        'The rule of three: repetition in groups of three is a universal narrative pattern',
        'Three attempts, three characters, three wishes -- the third always decides the outcome',
        'The rule of three creates rhythm, expectation, and satisfying resolution',
        'Used in folk tales, speeches, advertising, and everyday conversation',
        'Breaking the rule of three deliberately can create surprise or subversion',
      ],
      teacherNotes:
        'Illustrate with multiple quick examples: Goldilocks, Three Little Pigs, "reading, writing, and arithmetic," political speechmaking. Then show a modern story that subverts the rule of three (e.g., gives only two attempts, or four). Ask: what is the effect of breaking the pattern? This leads to analysis of deliberate structural choice.',
      activity: 'Write a rule-of-three micro-narrative: three characters attempt the same task. The first fails badly, the second almost succeeds, the third finds an unexpected solution. Aim for 100 words.',
    },
    {
      id: 'y7-t3-p1-s6',
      slideNumber: 6,
      title: 'How Structure Creates Meaning',
      bulletPoints: [
        'Where a story begins shapes everything -- in media res drops us into action',
        'The climax position determines what the story is really about',
        'Endings can resolve, subvert, or leave the reader questioning',
        'Flashbacks and non-linear structure can create mystery and dramatic irony',
        'Structure is never neutral -- every choice implies a set of values',
      ],
      teacherNotes:
        'The key insight here is that structure is ideological -- it implies a worldview. A story that ends with order restored implies that order is desirable. A story that ends ambiguously implies life is complex. This is a challenging but important idea. Use a simple example: how does changing the ending of Cinderella change what the story is saying?',
      activity: 'Structural analysis: Look at the beginning and ending of the folk tale extract. What does the structure suggest the story values? What does the resolution imply about the world?',
    },
    {
      id: 'y7-t3-p1-s7',
      slideNumber: 7,
      title: 'Planning Your Own Folk Tale',
      bulletPoints: [
        'Choose an archetypal character type as your protagonist',
        'Identify your central conflict: what does your protagonist want or fear?',
        'Plan using the rule of three: three challenges or three attempts',
        'Decide on your moral or theme: what does the story say about the world?',
        'Choose an ending that reinforces your theme -- or deliberately subverts it',
      ],
      teacherNotes:
        'This planning session feeds into a written folk tale assignment. Students should use the structural knowledge from today\'s lesson consciously -- not just writing a story, but constructing a narrative with deliberate structural choices. Provide a planning template with five labelled sections.',
      activity: 'Folk tale planning: Complete the five-point plan above. Swap with a partner and check: does the planned structure match the intended theme?',
    },
    {
      id: 'y7-t3-p1-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Looking Ahead',
      bulletPoints: [
        'Narrative structure is a set of deliberate choices that create meaning',
        'Folk tales use universal patterns: rule of three, archetypes, clear morals',
        'Structure shapes the reader\'s experience and emotional response',
        'Every structural choice implies a set of values or a view of the world',
        'Next lesson: introducing poetry -- how poets compress meaning into form',
      ],
      teacherNotes:
        'Review the key terms from today. Preview the poetry lesson -- some students may feel anxious about poetry. Frame it positively: poetry is compressed storytelling and uses all the language techniques already studied. Homework: complete the folk tale plan and write the opening paragraph.',
      activity: 'Exit ticket: Name one structural technique and explain in one sentence how it creates meaning in a story you know.',
    },
  ],
};

const t3Presentation2: LessonPresentation = {
  id: 'y7-t3-pres-02',
  lessonTitle: 'Introducing Poetry',
  yearGroup: 'Year 7',
  termUnit: 'Term 3 -- Stories, Shaping Meaning, and Poetry',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t3-p2-s1',
      slideNumber: 1,
      title: 'What is Poetry?',
      bulletPoints: [
        'Poetry is language at its most compressed and deliberate',
        'Every word, line break, and sound has been chosen with intention',
        'Poetry can tell stories, explore emotions, make arguments, or simply observe',
        'There is no single definition -- poetry resists easy categorisation',
        'Our goal: learn to read poetry closely and respond to it honestly',
      ],
      teacherNotes:
        'Address the anxiety many students feel about poetry head-on. Validate it: poetry can feel difficult because it demands close attention. But the skills for reading poetry are the same ones already practised -- language analysis, noticing patterns, inferring meaning. Frame poetry as a puzzle with multiple valid solutions.',
      activity: 'Opening provocation: Is a song lyric a poem? Is a tweet a poem? Discuss in pairs and share your criteria for what makes something "a poem."',
    },
    {
      id: 'y7-t3-p2-s2',
      slideNumber: 2,
      title: 'The Building Blocks of Poetry',
      bulletPoints: [
        'Form: the overall shape and structure of the poem (sonnet, free verse, ballad)',
        'Structure: how the poem is organised -- stanzas, line breaks, sections',
        'Voice: who is speaking and what is their tone and attitude?',
        'Imagery: the pictures created in the reader\'s mind through language',
        'Sound: rhythm, rhyme, alliteration, assonance -- the music of the poem',
      ],
      teacherNotes:
        'This is the analytical framework for the term. Display it permanently. Stress that analysing a poem means moving through all of these layers, not just identifying rhyme scheme. Students often focus only on content (what the poem is about) -- push them towards form and sound as equally important.',
      activity: 'First reading: Read the poem provided twice -- once silently, once aloud. Then list: one thing you noticed, one thing you found confusing, one thing you would like to explore.',
    },
    {
      id: 'y7-t3-p2-s3',
      slideNumber: 3,
      title: 'Reading Poetry Aloud',
      bulletPoints: [
        'Poetry was originally an oral form -- it is designed to be heard',
        'Reading aloud reveals rhythm, pace, and emotional tone',
        'Line breaks are breathing points -- they create emphasis and pause',
        'Punctuation guides pace -- commas slow, full stops stop, dashes interrupt',
        'The voice you use when reading is already an interpretation',
      ],
      teacherNotes:
        'Model reading the same poem in two very different ways -- one flat and monotone, one with full vocal expression. Ask students: which reading communicated more meaning and why? Establish that there is no single "correct" reading, but some are more defensible than others. All interpretations must be grounded in the text.',
      activity: 'Performance reading: In pairs, take turns reading the poem aloud. After each reading, the listener says: what emotion did the reading convey? Was it the same both times?',
    },
    {
      id: 'y7-t3-p2-s4',
      slideNumber: 4,
      title: 'Imagery and Language in Poetry',
      bulletPoints: [
        'Poetic imagery is concentrated -- every image carries multiple layers of meaning',
        'Extended metaphor: one comparison sustained across several lines',
        'Juxtaposition: placing contrasting images next to each other for effect',
        'Concrete vs abstract: grounding abstract ideas in physical detail',
        'Zooming in: moving from the general to the very specific',
      ],
      teacherNotes:
        'Focus on one image from the poem in depth rather than listing all the techniques. Model what it means to "unpack" an image -- exploring its literal meaning, its connotations, its emotional associations, and what it suggests about the poem\'s wider theme.',
      activity: 'Unpack an image: Choose the most interesting image from the poem. Write four sentences: what it literally means, what it suggests, what it makes you feel, and what it says about the poem\'s theme.',
    },
    {
      id: 'y7-t3-p2-s5',
      slideNumber: 5,
      title: 'Sound in Poetry',
      bulletPoints: [
        'Rhyme: end rhyme creates expectation; broken rhyme creates disruption',
        'Alliteration: repetition of consonant sounds -- creates emphasis and pace',
        'Assonance: repetition of vowel sounds -- creates a particular mood',
        'Sibilance: repeated "s" sounds -- soft and sinister simultaneously',
        'Rhythm: the pattern of stressed and unstressed syllables -- the heartbeat of the poem',
      ],
      teacherNotes:
        'Use physical demonstration -- clap or tap the rhythm of a line. Students find it difficult to hear rhythm when reading silently. Alliteration and sibilance are usually the easiest to identify; assonance is harder and worth spending extra time on. Emphasise that sound choices reinforce meaning -- they are not decorative.',
      activity: 'Sound hunt: Read the poem again and highlight: alliteration in yellow, assonance in blue, and any end rhymes in green. Then choose one example and explain its effect.',
    },
    {
      id: 'y7-t3-p2-s6',
      slideNumber: 6,
      title: 'Form and Structure -- Why Shape Matters',
      bulletPoints: [
        'The shape of a poem on the page is itself meaningful',
        'Short lines create tension and urgency; long lines feel expansive or meditative',
        'Stanza breaks are pauses -- what happens after each pause?',
        'Regular structure suggests order; irregular structure suggests disorder',
        'A poem that breaks its own pattern at a key moment draws attention to that moment',
      ],
      teacherNotes:
        'Show the poem visually without the words -- just the shape on the page. Ask: what do you predict this poem will be about based on its visual form? Then reveal the text. This exercise trains students to attend to form as a layer of meaning separate from but connected to content.',
      activity: 'Form analysis: Look at the shape of the poem. Write three observations about its structure. Then explain how one structural choice connects to the poem\'s meaning.',
    },
    {
      id: 'y7-t3-p2-s7',
      slideNumber: 7,
      title: 'Writing About Poetry -- The PEE Approach',
      bulletPoints: [
        'The same PEE structure applies to poetry as to prose analysis',
        'Point: what the poet is doing or what we understand from the poem',
        'Evidence: a short, precisely chosen quotation -- never more than one line',
        'Explain: analyse specific words AND discuss sound or form where relevant',
        'Always include the effect on the reader -- how does this make us feel or think?',
      ],
      teacherNotes:
        'The key difference from prose analysis is the attention to sound and form in the Explain section. Model a full PEE paragraph about the poem, making sure to include analysis of at least one sound device alongside the language analysis. Show how sound and meaning reinforce each other.',
      activity: 'PEE paragraph: Write one analytical paragraph about the poem using the PEE structure. Include analysis of a language technique AND a sound or form technique.',
    },
    {
      id: 'y7-t3-p2-s8',
      slideNumber: 8,
      title: 'Lesson Summary and Appreciation',
      bulletPoints: [
        'Poetry uses all the language techniques of prose -- plus sound and form',
        'Reading aloud reveals meaning that silent reading can miss',
        'Imagery, sound, form, and structure all contribute equally to meaning',
        'There is no single correct reading -- but all readings must be grounded in evidence',
        'Next lesson: comparing texts -- poetry and prose side by side',
      ],
      teacherNotes:
        'End the lesson with a genuine moment of appreciation -- ask students to share one thing about the poem they found beautiful, surprising, or interesting. Validate all responses. Homework: find a poem that resonates with you and be ready to share one image or line that you find powerful.',
      activity: 'Exit ticket: Write one sentence about the poem that you are genuinely proud of -- something you noticed that you did not expect to notice.',
    },
  ],
};

const t3Presentation3: LessonPresentation = {
  id: 'y7-t3-pres-03',
  lessonTitle: 'Comparing Texts',
  yearGroup: 'Year 7',
  termUnit: 'Term 3 -- Stories, Shaping Meaning, and Poetry',
  totalSlides: 8,
  slides: [
    {
      id: 'y7-t3-p3-s1',
      slideNumber: 1,
      title: 'Why Compare Texts?',
      bulletPoints: [
        'Comparison reveals what is unique about each text and what they share',
        'Similarities show us universal human experiences and themes',
        'Differences show us how form, context, and voice shape meaning',
        'Comparison is a higher-order analytical skill -- used in assessments',
        'Today: comparing a poem and a prose extract on a shared theme',
      ],
      teacherNotes:
        'Frame comparison as a skill they have already been practising implicitly -- comparing Reema and Caylin, comparing two versions of the same scene, comparing two pieces of student writing. Today formalises this into an academic skill. Preview the task: a poem and a prose extract on the theme of belonging or displacement.',
      activity: 'Starter: Think of two things you have read this year. What is one thing they have in common and one thing that is fundamentally different?',
    },
    {
      id: 'y7-t3-p3-s2',
      slideNumber: 2,
      title: 'What Can We Compare?',
      bulletPoints: [
        'Theme: what ideas do both texts explore? Do they reach the same conclusions?',
        'Voice and tone: how does each writer sound? Are they similar or different?',
        'Language: do both writers use figurative language? Are the effects similar?',
        'Structure and form: how is each text organised and does this reflect its meaning?',
        'Context: when was each text written and does context affect meaning?',
      ],
      teacherNotes:
        'Display this as a comparison framework -- students should use all five areas when planning their comparison. In a formal assessment, they are expected to move between texts fluidly rather than writing about one and then the other. Introduce the key comparative connectives on the next slide.',
      activity: 'Framework task: Using only the headings above, write five bullet points comparing the poem and prose extract at a glance -- before any detailed analysis.',
    },
    {
      id: 'y7-t3-p3-s3',
      slideNumber: 3,
      title: 'Comparative Language and Connectives',
      bulletPoints: [
        'Similarly: "Similarly, both writers use..."',
        'In contrast: "In contrast, the poet chooses..." ',
        'Whereas: "Whereas the prose narrator sounds angry, the poet sounds..."',
        'Both: "Both texts explore the theme of..." ',
        'However: "However, their methods are distinct because..."',
      ],
      teacherNotes:
        'These connectives should be posted on the wall and referred to throughout the lesson. The most common error in comparison writing is treating each text separately and adding "both texts" in the introduction. True comparison weaves between texts in every paragraph.',
      activity: 'Connective practice: Rewrite these five single-text sentences as comparative sentences using a connective from the list above. The sentences are on your worksheet.',
    },
    {
      id: 'y7-t3-p3-s4',
      slideNumber: 4,
      title: 'Reading Both Texts -- Shared Theme',
      bulletPoints: [
        'Read both texts: identify the shared theme in each',
        'Annotate: circle language that relates to the shared theme',
        'Note the tone in each text -- are both writers treating the theme the same way?',
        'Identify two or three quotations from each text that you want to compare',
        'Ask: do the texts agree, disagree, or offer different aspects of the theme?',
      ],
      teacherNotes:
        'Allow 10 minutes for close reading and annotation. Circulate and support students who are struggling to identify the shared theme or who are annotating too broadly. Encourage them to focus: choose the three MOST important quotations from each text, not every technique they can find.',
      activity: 'Dual annotation: Read both texts and annotate them side by side. For each text, circle your three best quotations and write a brief note explaining why each is significant.',
    },
    {
      id: 'y7-t3-p3-s5',
      slideNumber: 5,
      title: 'Planning a Comparative Response',
      bulletPoints: [
        'Do NOT plan: Text A paragraph 1, Text A paragraph 2, Text B paragraph 1...',
        'DO plan: Point 1 (evidence from both texts), Point 2 (evidence from both texts)',
        'Each paragraph should compare, not describe -- always move between texts',
        'Decide on three key comparative points before you begin writing',
        'Start with your most interesting comparison -- do not save it for the end',
      ],
      teacherNotes:
        'The block structure (all of text A, then all of text B) is the single most common error in comparison writing. Demonstrate the difference: write a block-structure paragraph and an integrated-comparison paragraph side by side. Ask students which is more analytical and why.',
      activity: 'Comparison plan: Write three bullet points -- each naming one comparative point AND identifying a quotation from EACH text that supports it.',
    },
    {
      id: 'y7-t3-p3-s6',
      slideNumber: 6,
      title: 'Model Comparative Paragraph',
      bulletPoints: [
        'The paragraph opens with a point that applies to both texts',
        'Evidence from Text A is analysed briefly',
        'A comparative connective introduces the contrast or similarity with Text B',
        'Evidence from Text B is analysed with the same depth',
        'The paragraph closes with a statement about the significance of this comparison',
      ],
      teacherNotes:
        'Display a model comparative paragraph and annotate it. Point out the connective that links the two pieces of evidence. Stress the balanced analysis -- both texts receive roughly equal analytical attention. A common error is giving one text much more analysis than the other.',
      activity: 'Annotation task: Colour-code the model paragraph -- one colour for Text A material, another for Text B material, a third for comparative connectives. Is the balance even?',
    },
    {
      id: 'y7-t3-p3-s7',
      slideNumber: 7,
      title: 'Independent Comparative Writing',
      bulletPoints: [
        'Write two comparative paragraphs using your plan',
        'Each paragraph must: state a comparative point, give evidence from both texts',
        'Use at least one comparative connective per paragraph',
        'Analyse specific language choices -- do not just summarise content',
        'Aim for 100--150 words per paragraph',
      ],
      teacherNotes:
        'Allow 15--20 minutes for independent writing. Circulate and support students who are reverting to block structure -- prompt them back to the integrated approach. After writing, lead a brief class discussion: which comparison felt most interesting or surprising?',
      activity: 'Independent writing: Two comparative paragraphs on the shared theme. Use your plan and the model paragraph for reference.',
    },
    {
      id: 'y7-t3-p3-s8',
      slideNumber: 8,
      title: 'Year 7 Summary -- What We Have Achieved',
      bulletPoints: [
        'Term 1: character analysis, language techniques, analytical writing (PEE)',
        'Term 2: voice, descriptive writing, writing from perspective',
        'Term 3: narrative structure, poetry analysis, comparative writing',
        'Core skills: close reading, language analysis, structured writing, empathy',
        'These skills are the foundation of everything in English from Year 8 onwards',
      ],
      teacherNotes:
        'End the year with a genuine celebration of progress. Ask students to look back at their first piece of writing from September and compare it to their most recent. The growth is usually significant and students benefit from having it named explicitly. Connect the skills to wider life: empathy, communication, and critical thinking matter everywhere.',
      activity: 'Year reflection: Write three sentences -- one thing you are proud of, one skill you want to improve, and one text or idea from this year that has stayed with you.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const y7Presentations: LessonPresentation[] = [
  // Term 1 -- The Fox Girl and the White Gazelle
  t1Presentation1,
  t1Presentation2,
  t1Presentation3,
  // Term 2 -- Voice and Identity
  t2Presentation1,
  t2Presentation2,
  t2Presentation3,
  // Term 3 -- Stories, Shaping Meaning, and Poetry
  t3Presentation1,
  t3Presentation2,
  t3Presentation3,
];
