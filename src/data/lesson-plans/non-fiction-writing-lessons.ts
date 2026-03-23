import type { LessonPlan } from './macbeth-lessons';

// ─── Lesson 1: Writing to Argue — Persuasive Techniques ─────────────────────

const lesson1: LessonPlan = {
  id: 'nonfiction-01-writing-to-argue',
  title: 'Writing to Argue: Persuasive Techniques',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the conventions and purpose of argumentative writing.',
    'Identify and deploy a range of persuasive techniques including ethos, pathos, and logos.',
    'Construct a sustained, logically structured argument on a given topic.',
  ],
  successCriteria: [
    'I can distinguish between arguing and persuading and explain the purpose of each.',
    'I can use at least four persuasive techniques accurately in my own writing.',
    'I can structure an argument with a clear thesis, developed paragraphs, and a compelling conclusion.',
  ],
  keywords: [
    'argument', 'counterargument', 'thesis', 'ethos',
    'pathos', 'logos', 'rebuttal', 'discourse marker',
  ],
  starterActivity: {
    title: 'Agree or Disagree Barometer',
    duration: '8 minutes',
    instructions:
      'Display a provocative statement on the board: "School uniforms should be abolished." Students move to positions along a human barometer line from Strongly Agree to Strongly Disagree. Teacher selects students from each position and asks them to justify their stance. Record the strongest arguments on the board. Introduce the lesson focus: today we learn how to construct these arguments in writing, using techniques that make our reasoning irresistible.',
    differentiation: {
      support: 'Provide sentence starters: "I believe... because..." and "One reason is..."',
      core: 'Students must give a reason and an example to support their position.',
      stretch: 'Students must anticipate and respond to a counterargument from the opposing side.',
    },
    resources: ['Provocative statement slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Persuasive Techniques Toolkit',
      duration: '18 minutes',
      instructions:
        'Teacher introduces a toolkit of persuasive techniques using the acronym AFOREST (Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triplets). For each technique, display a real example from a newspaper opinion piece or speech transcript. Students annotate a model argumentative paragraph, identifying each technique used. Then students write their own opening paragraph arguing for or against the statement "Social media does more harm than good," consciously deploying at least three AFOREST techniques. Peer-mark using a checklist.',
      differentiation: {
        support: 'Provide a word bank and a partially completed paragraph with gaps for students to insert techniques.',
        core: 'Students write a full paragraph independently and annotate the techniques they have used.',
        stretch: 'Students write two paragraphs — one arguing for, one against — and evaluate which is more effective.',
      },
      resources: ['AFOREST techniques handout', 'Model paragraph for annotation', 'Peer-marking checklist'],
    },
    {
      title: 'Building a Full Argument',
      duration: '22 minutes',
      instructions:
        'Teach the structure of a full argumentative piece: bold opening statement, three developed paragraphs (each with a topic sentence, evidence, explanation, and link back to the thesis), a counterargument paragraph with rebuttal, and a powerful conclusion. Students plan and write a 300-word argument on the topic "Teenagers should be allowed to vote at 16." Use a planning frame to organise ideas before writing. Teacher models the first paragraph live on the board, thinking aloud about technique choices and connective use.',
      differentiation: {
        support: 'Provide a completed planning frame and paragraph starters for each section.',
        core: 'Students use a blank planning frame and write independently with discourse marker prompts visible.',
        stretch: 'Students incorporate at least one embedded counterargument within a main paragraph rather than separating it.',
      },
      resources: ['Argument structure diagram', 'Planning frame worksheet', 'Discourse markers list'],
    },
  ],
  plenaryActivity: {
    title: 'Technique Spotlight Share',
    duration: '7 minutes',
    instructions:
      'Students highlight what they consider their most effective sentence from their argument. Three volunteers read theirs aloud. The class identifies which persuasive techniques are present and votes on the most convincing. Teacher reinforces: a strong argument blends logical reasoning with emotional appeal and never relies on one technique alone.',
    differentiation: {
      support: 'Students identify the technique they used from a displayed list before sharing.',
      core: 'Students explain why they chose that technique and what effect it creates.',
      stretch: 'Students suggest how the shared sentences could be improved with an additional layer of persuasion.',
    },
  },
  homework:
    'Write a 400-word argumentative article for a school newspaper on the topic: "Homework should be banned." Use at least five AFOREST techniques and underline each one.',
  worksheetQuestions: [
    {
      question: 'Define the term "counterargument" and explain why including one strengthens your own argument.',
      lines: 4,
      modelAnswer:
        'A counterargument is an opposing viewpoint that challenges your thesis. Including one in argumentative writing strengthens your position because it shows you have considered alternative perspectives and can refute them with evidence or reasoning. This makes your argument appear more balanced, credible, and intellectually rigorous, which persuades the reader that your stance is well-considered rather than one-sided.',
      marks: 3,
    },
    {
      question: 'Read the following extract and identify three persuasive techniques used: "Are we really prepared to stand by while our green spaces vanish? Every year, 7,000 acres of parkland are lost to development. This is devastating, disgraceful, and deeply short-sighted."',
      lines: 5,
      modelAnswer:
        'The writer uses a rhetorical question ("Are we really prepared to stand by...") to challenge the reader and provoke guilt. A statistic ("7,000 acres") is used to provide concrete evidence that adds credibility and shock value. The triplet of adjectives ("devastating, disgraceful, and deeply short-sighted") creates a rhythmic, emphatic effect using the rule of three combined with alliteration on the "d" sound, which intensifies the sense of outrage.',
      marks: 4,
    },
    {
      question: 'Write a counterargument paragraph for the following thesis: "All students should study a foreign language until the age of 16." Begin by acknowledging the opposing view, then rebut it.',
      lines: 8,
      modelAnswer:
        'Some may argue that forcing students to study a language until 16 is unnecessary, particularly for those who struggle academically and would benefit from focusing on core subjects like Maths and English. While this is an understandable concern, it overlooks the cognitive benefits of language learning, which research has shown improves memory, problem-solving, and even performance in other subjects. Furthermore, in an increasingly globalised world, linguistic skills are not a luxury but a necessity. Rather than narrowing the curriculum, we should be broadening it — and language learning is central to producing well-rounded, employable young people.',
      marks: 5,
    },
    {
      question: 'Explain the difference between "ethos," "pathos," and "logos" and give one example of each.',
      lines: 6,
      modelAnswer:
        'Ethos is an appeal to credibility or authority — for example, "As a qualified doctor with twenty years of experience, I can assure you that this treatment works." Pathos is an appeal to emotion — for example, "Imagine a child going to school hungry, too tired to concentrate, knowing there is no dinner waiting at home." Logos is an appeal to logic and reason — for example, "Statistics show that 85% of students who receive tutoring improve by at least one grade." Effective argumentative writing blends all three to build a convincing, multi-layered case.',
      marks: 4,
    },
    {
      question: 'Write the opening paragraph of an argument for the motion: "The school day should start at 10am." Use at least three persuasive techniques.',
      lines: 8,
      modelAnswer:
        'Is it not absurd that we drag our teenagers out of bed at the crack of dawn, force them onto crowded buses, and expect them to absorb complex information before their brains have even woken up? Scientific research consistently demonstrates that adolescents require between eight and ten hours of sleep, yet the average British teenager gets barely six. Starting the school day at 10am would be transformative: improved concentration, better mental health, and stronger academic results. It is time we stopped clinging to an outdated Victorian timetable and started putting the wellbeing of our young people first.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson establishes the foundational techniques students will use across all transactional writing tasks in Section B.',
    'The AFOREST acronym is a useful scaffold but encourage students to move beyond it as the unit progresses — examiners reward sophistication over formulaic application.',
    'Model the difference between arguing (presenting a balanced case with logic) and persuading (appealing to emotions with a clear bias) — students often conflate the two.',
    'Collect the homework articles and use them as exemplars or for peer assessment in the next lesson.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Persuasive writing',
    'Argument structure',
    'Discourse marker usage',
  ],
};

// ─── Lesson 2: Writing to Persuade — Speeches and Articles ──────────────────

const lesson2: LessonPlan = {
  id: 'nonfiction-02-writing-to-persuade',
  title: 'Writing to Persuade: Speeches and Articles',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the features of persuasive speeches and opinion articles.',
    'Understand how writers adapt persuasive techniques to suit form and audience.',
    'Write a persuasive speech or article with a clear, sustained viewpoint.',
  ],
  successCriteria: [
    'I can identify at least five features of a persuasive speech and explain their effect on the audience.',
    'I can explain how the conventions of a speech differ from those of an article.',
    'I can produce a persuasive piece that maintains a consistent tone and deploys rhetorical devices purposefully.',
  ],
  keywords: [
    'rhetoric', 'anaphora', 'direct address', 'imperative',
    'inclusive pronoun', 'emotive language', 'call to action',
  ],
  starterActivity: {
    title: 'Speech or Article?',
    duration: '7 minutes',
    instructions:
      'Display two short extracts side by side — one from a famous speech (e.g., Malala Yousafzai\'s UN address) and one from a newspaper opinion column. Students read both and list three differences between the two forms in terms of tone, structure, and language. Discuss as a class: what makes a speech different from a written article? Introduce the idea that speeches are designed to be heard, so they rely heavily on rhythm, repetition, and direct address.',
    differentiation: {
      support: 'Provide a comparison table with headings (Tone, Structure, Language) and one example already filled in.',
      core: 'Students identify three differences independently and share with a partner before class discussion.',
      stretch: 'Students explain which extract is more persuasive and why, linking their answer to audience and purpose.',
    },
    resources: ['Speech extract handout', 'Article extract handout', 'Comparison table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Analysing a Model Speech',
      duration: '18 minutes',
      instructions:
        'Distribute a printed copy of an abridged persuasive speech (e.g., Greta Thunberg\'s "How dare you" speech or an original model). Teacher reads it aloud with expression. Students annotate the speech, identifying: direct address, rhetorical questions, anaphora (deliberate repetition), rule of three, emotive language, imperatives, inclusive pronouns (we/our/us), and shifts in tone. Then in pairs, students rank the three most effective techniques and write a sentence explaining why each is powerful. Share under the visualiser.',
      differentiation: {
        support: 'Provide a pre-highlighted version with technique labels for students to match and explain.',
        core: 'Students annotate independently using a technique checklist, then rank and explain.',
        stretch: 'Students analyse how the speech builds momentum — how does the order of techniques create a crescendo effect?',
      },
      resources: ['Printed speech extract', 'Annotation technique checklist', 'Highlighters'],
    },
    {
      title: 'Writing a Persuasive Speech',
      duration: '23 minutes',
      instructions:
        'Students write a persuasive speech (250-350 words) on the topic: "This house believes that climate change is the greatest threat facing humanity." Teacher models the opening on the board, demonstrating how to hook the audience with a provocative question or shocking statistic, then establish the speaker\'s position clearly. Students use a speech planning frame: Hook → Position statement → Three developed arguments (each using at least one rhetorical device) → Counterargument dismissal → Call to action. Final five minutes: three students deliver their opening to the class.',
      differentiation: {
        support: 'Provide sentence starters for each section of the planning frame and a rhetorical devices word bank.',
        core: 'Students plan and write independently, consciously varying their sentence structures.',
        stretch: 'Students write the speech and then adapt the opening paragraph into an article format, noting the changes required.',
      },
      resources: ['Speech planning frame', 'Rhetorical devices reference sheet', 'Timer'],
    },
  ],
  plenaryActivity: {
    title: 'Delivery and Feedback',
    duration: '7 minutes',
    instructions:
      'Two volunteers deliver their speech openings to the class. The audience uses two stars and a wish feedback: they identify two effective techniques and suggest one improvement. Teacher draws out the key learning: persuasive writing for speeches must sound powerful when spoken aloud — read your work back to yourself as a final check.',
    differentiation: {
      support: 'Provide a feedback frame: "I thought ___ was effective because..." and "To improve, you could..."',
      core: 'Students give verbal feedback linking their comments to specific persuasive techniques.',
      stretch: 'Students evaluate whether the speech would need adapting if the audience changed (e.g., adults vs. teenagers).',
    },
  },
  homework:
    'Rewrite your speech as a newspaper opinion article. Adapt the tone, structure, and conventions to suit the new form. Write 300-400 words.',
  worksheetQuestions: [
    {
      question: 'What is "anaphora" and why is it effective in persuasive speeches?',
      lines: 4,
      modelAnswer:
        'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive sentences or clauses. For example, Martin Luther King Jr.\'s repeated use of "I have a dream" builds rhythm, momentum, and emotional intensity. In speeches, anaphora is particularly effective because it creates a musical, memorable quality that reinforces the speaker\'s key message and makes the audience feel swept along by the argument.',
      marks: 3,
    },
    {
      question: 'Explain three ways a persuasive speech differs from a persuasive article.',
      lines: 6,
      modelAnswer:
        'First, a speech uses direct address ("Ladies and gentlemen," "my friends") to create a personal connection with a live audience, while an article typically addresses the reader more indirectly. Second, speeches rely heavily on sound-based devices such as repetition, rhetorical questions, and pauses for dramatic effect, because they are designed to be heard rather than read. Third, articles follow print conventions such as headlines, subheadings, and a formal sign-off, whereas speeches build through a clear arc from introduction to an emotional crescendo and call to action.',
      marks: 4,
    },
    {
      question: 'Write the opening paragraph of a speech persuading your school governors to invest in better mental health support for students. Use at least three rhetorical devices.',
      lines: 8,
      modelAnswer:
        'Good morning, governors, teachers, and fellow students. I stand before you today not to ask for new computers, not to request better sports facilities, but to plead for something far more important: the mental health of every young person in this school. Did you know that one in five teenagers in the UK experiences a diagnosable mental health condition? One in five. That means in this room alone, several of us are silently struggling. We cannot continue to ignore this crisis. We must act, we must invest, and we must show our students that their wellbeing matters as much as their grades.',
      marks: 5,
    },
    {
      question: 'What is the difference between "writing to argue" and "writing to persuade"?',
      lines: 4,
      modelAnswer:
        'Writing to argue involves presenting a balanced, logical case where the writer acknowledges opposing viewpoints and uses evidence and reasoning to reach a conclusion. Writing to persuade is more one-sided: the writer uses emotional appeals, rhetorical devices, and passionate language to convince the reader to adopt a particular viewpoint or take a specific action. In practice, the best transactional writing often blends elements of both.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'If using real speeches, ensure they are age-appropriate and ideologically neutral. Alternatively, write your own model to control the content precisely.',
    'Encourage students to practise reading their speeches aloud — this develops their ear for rhythm and helps them identify awkward phrasing.',
    'The homework task (converting speech to article) is excellent preparation for exam questions that specify a form.',
    'Remind students that AQA Paper 2, Section B may ask for a speech, article, letter, or leaflet — flexibility across forms is essential.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Speech writing',
    'Rhetorical device deployment',
    'Audience awareness',
  ],
};

// ─── Lesson 3: Writing to Advise — Letters and Guides ───────────────────────

const lesson3: LessonPlan = {
  id: 'nonfiction-03-writing-to-advise',
  title: 'Writing to Advise: Letters and Guides',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the purpose and tone of advisory writing and how it differs from arguing or persuading.',
    'Identify the conventions of formal and informal letters and advice guides.',
    'Write an advisory text that uses an appropriate register and offers practical, structured guidance.',
  ],
  successCriteria: [
    'I can explain the key differences between advising, arguing, and persuading.',
    'I can use the correct conventions for a formal letter, including addresses, date, salutation, and sign-off.',
    'I can sustain a supportive, authoritative tone throughout an advisory piece.',
  ],
  keywords: [
    'advisory tone', 'register', 'imperative mood', 'modal verb',
    'conditional language', 'salutation', 'formal conventions',
  ],
  starterActivity: {
    title: 'What Makes Good Advice?',
    duration: '7 minutes',
    instructions:
      'Display three short extracts on the board — one that argues, one that persuades, and one that advises. Students sort them into the correct category and underline words or phrases that helped them decide. Discuss: what makes the advisory extract different in tone? Introduce the idea that advisory writing is supportive rather than confrontational — it guides the reader without pressuring them. Key language features: modal verbs (could, should, might), conditional phrasing ("If you find that..."), and second-person address.',
    differentiation: {
      support: 'Provide the three category labels on cards and a glossary of modal verbs.',
      core: 'Students sort independently and identify two language features unique to advisory writing.',
      stretch: 'Students rewrite the argumentative extract in an advisory tone and explain what changes they made.',
    },
    resources: ['Three extract cards', 'Sorting activity slide', 'Modal verbs glossary (support tier)'],
  },
  mainActivities: [
    {
      title: 'Letter Conventions and Model Analysis',
      duration: '15 minutes',
      instructions:
        'Teacher displays a model formal advisory letter (e.g., a letter to a Year 11 student offering advice on managing exam stress). Students annotate the letter, identifying: sender\'s address, recipient\'s address, date, formal salutation (Dear Mr/Ms), paragraphing conventions (one topic per paragraph), advisory tone markers (modal verbs, conditional language, empathetic phrases), and formal sign-off (Yours sincerely/faithfully). Students then complete a quick-fire quiz: "Yours sincerely or Yours faithfully?" for different scenarios, reinforcing the rule (sincerely = named recipient, faithfully = unnamed).',
      differentiation: {
        support: 'Provide a labelled diagram of letter layout and a checklist for students to tick off as they annotate.',
        core: 'Students annotate independently and complete the quiz without support materials.',
        stretch: 'Students identify how the model letter could be improved and rewrite one paragraph at a higher level.',
      },
      resources: ['Model advisory letter', 'Letter layout diagram', 'Sincerely/faithfully quiz slide'],
    },
    {
      title: 'Writing an Advisory Letter',
      duration: '25 minutes',
      instructions:
        'Students write a formal letter in response to the following scenario: "A Year 9 student has written to the school\'s student support team saying they are struggling with friendship issues and feel isolated. Write a letter offering practical advice." Students use a planning grid to organise their letter into: acknowledgement of the problem, three pieces of practical advice (each in its own paragraph with explanation and encouragement), and a supportive closing paragraph. Teacher models the opening paragraph, demonstrating empathetic tone: "Thank you for reaching out — it takes real courage to ask for help." Students write for 20 minutes, then swap and peer-assess against a success criteria checklist.',
      differentiation: {
        support: 'Provide a completed planning grid and sentence starters for each paragraph.',
        core: 'Students use a blank planning grid and write independently, aiming for at least four paragraphs.',
        stretch: 'Students write the letter and then produce a second version as an informal advice guide (e.g., a leaflet), noting the differences in tone and format.',
      },
      resources: ['Scenario card', 'Planning grid', 'Success criteria checklist', 'Peer assessment sheet'],
    },
  ],
  plenaryActivity: {
    title: 'Tone Check',
    duration: '8 minutes',
    instructions:
      'Display three sentences from student work (anonymous). Class decides whether each sentence has the correct advisory tone or whether it slips into arguing or persuading. Students suggest revisions for any that miss the mark. Key takeaway: advisory writing should feel like a knowledgeable friend offering help, not a politician making a case.',
    differentiation: {
      support: 'Students choose from two rewritten options for each incorrect sentence.',
      core: 'Students rewrite incorrect sentences independently.',
      stretch: 'Students explain the specific language choices that caused the tone shift and how to avoid them.',
    },
  },
  homework:
    'Write a 300-word advice guide for Year 7 students starting secondary school. Include at least five pieces of practical advice, use subheadings, and maintain an encouraging, supportive tone throughout.',
  worksheetQuestions: [
    {
      question: 'Explain two differences between writing to advise and writing to persuade.',
      lines: 4,
      modelAnswer:
        'Writing to advise uses a supportive, empathetic tone and aims to help the reader make their own informed decisions, using modal verbs like "could" and "might" to suggest rather than demand. Writing to persuade, by contrast, takes a firm, one-sided position and uses emotive language, rhetorical devices, and strong imperatives to push the reader towards a particular viewpoint. Advisory writing respects the reader\'s autonomy, while persuasive writing seeks to override it.',
      marks: 3,
    },
    {
      question: 'When writing a formal letter, explain when you would use "Yours sincerely" and when you would use "Yours faithfully."',
      lines: 3,
      modelAnswer:
        'Use "Yours sincerely" when you know the name of the person you are writing to and have addressed them by name in the salutation (e.g., "Dear Mrs Thompson"). Use "Yours faithfully" when you do not know the recipient\'s name and have used a generic salutation such as "Dear Sir or Madam." A useful memory aid: Sincerely = you See the name; Faithfully = you Forget the name.',
      marks: 2,
    },
    {
      question: 'Rewrite the following sentence so that it uses an advisory rather than an argumentative tone: "You must stop using your phone before bed because it is ruining your sleep."',
      lines: 4,
      modelAnswer:
        'An advisory version might read: "You might find it helpful to put your phone away at least thirty minutes before bed. Research suggests that screen light can interfere with sleep quality, so even a small change to your routine could make a noticeable difference to how rested you feel." This version uses a modal verb ("might"), conditional language ("could make"), and a supportive tone rather than a directive command.',
      marks: 3,
    },
    {
      question: 'Write the opening paragraph of a formal letter to a local councillor advising them on how to improve facilities for young people in your area.',
      lines: 8,
      modelAnswer:
        'Dear Councillor Patel, I am writing to you as a concerned resident of the Westfield community to offer some suggestions regarding the provision of recreational facilities for young people in our area. Having lived here for fifteen years and witnessed the gradual decline of youth services, I believe there are several practical and cost-effective steps the council could take to make a meaningful difference. I hope you will find the following ideas worthy of consideration.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Students often struggle to maintain an advisory tone — they naturally drift into arguing. Provide regular tone-check reminders during writing time.',
    'The formal letter conventions (addresses, date, salutation, sign-off) frequently lose students marks in exams. Drill these throughout the unit.',
    'Link this lesson to the AQA mark scheme: examiners reward writing that is "convincingly matched to purpose, form, and audience."',
    'The homework task (Year 7 advice guide) can be displayed around the school if permission is granted — real audience motivates quality.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Advisory writing',
    'Formal letter conventions',
    'Register and tone control',
  ],
};

// ─── Lesson 4: Writing to Inform — Reports and News Articles ────────────────

const lesson4: LessonPlan = {
  id: 'nonfiction-04-writing-to-inform',
  title: 'Writing to Inform: Reports and News Articles',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the conventions and language features of informative writing.',
    'Analyse the structure of news articles and reports, including the inverted pyramid model.',
    'Write an informative text that presents facts clearly, concisely, and in an appropriate format.',
  ],
  successCriteria: [
    'I can explain the key features of informative writing and how it differs from persuasive writing.',
    'I can structure a news article using the inverted pyramid model.',
    'I can write objectively, selecting facts and details to inform rather than influence the reader.',
  ],
  keywords: [
    'inverted pyramid', 'objectivity', 'byline', 'headline',
    'standfirst', 'five Ws', 'formal register', 'third person',
  ],
  starterActivity: {
    title: 'Fact vs Opinion Sort',
    duration: '7 minutes',
    instructions:
      'Display ten statements on the board — a mix of facts and opinions about a recent school event (e.g., "350 students attended the charity fundraiser" vs "The charity fundraiser was the best school event this year"). Students sort them into Fact and Opinion columns on mini-whiteboards. Discuss: why is this distinction important in informative writing? Establish the ground rule: writing to inform should be objective, factual, and free from the writer\'s personal bias.',
    differentiation: {
      support: 'Provide a definition card for "fact" and "opinion" with examples.',
      core: 'Students sort all ten statements and explain their reasoning for two that were tricky.',
      stretch: 'Students rewrite three opinion statements as factual, informative sentences.',
    },
    resources: ['Fact/Opinion statements slide', 'Mini-whiteboards', 'Definition cards (support tier)'],
  },
  mainActivities: [
    {
      title: 'Deconstructing a News Article',
      duration: '18 minutes',
      instructions:
        'Distribute a printed news article (or a teacher-written model). Teacher introduces the inverted pyramid structure: the most important information comes first (who, what, when, where, why), followed by supporting details, then background context. Students label each section of the article: headline, byline, standfirst (introductory summary), lead paragraph (answering the five Ws), body paragraphs (expanding with detail and quotations), and concluding context. In pairs, students then evaluate: does this article remain objective throughout, or does any bias creep in? Highlight any subjective language.',
      differentiation: {
        support: 'Provide a pre-labelled diagram of the inverted pyramid and a glossary of article terminology.',
        core: 'Students label the article independently and identify any instances of bias.',
        stretch: 'Students compare the model article with a tabloid version of the same story and analyse how bias is introduced through language choices.',
      },
      resources: ['Printed news article', 'Inverted pyramid diagram', 'Highlighters', 'Tabloid comparison (stretch tier)'],
    },
    {
      title: 'Writing a News Article',
      duration: '23 minutes',
      instructions:
        'Students write a news article (250-350 words) based on the following scenario: "A local park is set to be redeveloped to include new sports facilities, but residents are divided on the plans." Teacher provides a fact sheet with key details (dates, statistics, quotations from residents on both sides). Students must select and organise this information using the inverted pyramid structure. Emphasise: the writer should present both sides without revealing their own opinion. The headline should be concise and informative. Include at least two direct quotations from the fact sheet.',
      differentiation: {
        support: 'Provide a writing frame with paragraph starters and the five Ws pre-identified from the fact sheet.',
        core: 'Students select information from the fact sheet and organise it independently.',
        stretch: 'Students write two versions of the headline — one neutral, one with tabloid bias — and explain the effect of each.',
      },
      resources: ['Scenario fact sheet', 'Writing frame (support tier)', 'Inverted pyramid checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Headline Hospital',
    duration: '7 minutes',
    instructions:
      'Display five student-written headlines on the board (anonymous). Class evaluates each: Is it informative? Is it concise? Does it contain any bias? Students vote on the most effective headline and suggest improvements for the weakest. Teacher reinforces: a good headline summarises the story accurately in as few words as possible.',
    differentiation: {
      support: 'Students choose the best headline from a multiple-choice selection.',
      core: 'Students evaluate all five headlines and rewrite the weakest one.',
      stretch: 'Students explain how changing a single word in a headline can shift it from objective to biased.',
    },
  },
  homework:
    'Write a 300-word news report for a local newspaper about a real or imagined event in your community. Follow the inverted pyramid structure and include at least two quotations.',
  worksheetQuestions: [
    {
      question: 'Explain the "inverted pyramid" structure used in news writing and why it is effective.',
      lines: 4,
      modelAnswer:
        'The inverted pyramid is a structure where the most important information (who, what, when, where, why) is placed at the top of the article, followed by supporting details in descending order of importance, with background context at the bottom. This is effective because readers can grasp the essential facts quickly, editors can cut from the bottom without losing key information, and it mirrors how people naturally consume news — many readers only read the first few paragraphs.',
      marks: 3,
    },
    {
      question: 'What are the "five Ws" and why should they appear in the opening paragraph of a news article?',
      lines: 4,
      modelAnswer:
        'The five Ws are Who, What, When, Where, and Why (sometimes with How added). They should appear in the opening paragraph because the lead of a news article must give the reader all the essential facts immediately. A reader who only reads the first paragraph should still understand the key details of the story. For example: "Residents of Elm Street [Who] protested [What] outside the town hall [Where] on Saturday morning [When] over plans to close the local library [Why]."',
      marks: 3,
    },
    {
      question: 'Rewrite the following biased sentence as an objective, informative statement: "The council\'s outrageous decision to close the beloved community centre has devastated local families."',
      lines: 4,
      modelAnswer:
        'An objective version: "The council voted on Thursday to close the Riverside Community Centre, a decision that has prompted mixed reactions from local residents." This removes the emotive adjectives ("outrageous," "beloved," "devastated") and replaces them with neutral, factual language. The informative writer presents the event without signalling their own viewpoint, allowing the reader to form their own opinion.',
      marks: 3,
    },
    {
      question: 'Write a standfirst (introductory summary of two to three sentences) for a news article about a school introducing a four-day week trial.',
      lines: 5,
      modelAnswer:
        'Greenfield Academy will become the first secondary school in the region to trial a four-day school week from September, with students attending Monday to Thursday and completing independent study at home on Fridays. The pilot scheme, which will run for one academic year, has been backed by the headteacher but has divided opinion among parents and staff. The school says it aims to reduce teacher burnout and improve student wellbeing.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The fact sheet for the main writing task should contain more information than students need — selecting and prioritising information is a key skill.',
    'Distinguish clearly between news reports (objective) and opinion articles (subjective) — students often confuse the two in exams.',
    'If time allows, display a broadsheet and tabloid version of the same story side by side to illustrate how language choices shape reader perception.',
    'Link to AO5: examiners reward "compelling" and "convincing" writing — even informative writing must be engaging, not dull.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Informative writing',
    'News article conventions',
    'Objective language use',
  ],
};

// ─── Lesson 5: Rhetorical Devices Masterclass ───────────────────────────────

const lesson5: LessonPlan = {
  id: 'nonfiction-05-rhetorical-devices',
  title: 'Rhetorical Devices Masterclass',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and define a wide range of rhetorical devices used in non-fiction writing.',
    'Analyse the effect of rhetorical devices on the reader in context.',
    'Deploy rhetorical devices purposefully and with variety in original transactional writing.',
  ],
  successCriteria: [
    'I can define and identify at least eight rhetorical devices in a given text.',
    'I can explain the effect of each device on the reader, linking to purpose and audience.',
    'I can use a range of rhetorical devices in my own writing without the result feeling forced or formulaic.',
  ],
  keywords: [
    'anaphora', 'antithesis', 'hyperbole', 'litotes',
    'juxtaposition', 'tricolon', 'sibilance', 'zeugma',
  ],
  starterActivity: {
    title: 'Device Matching Game',
    duration: '8 minutes',
    instructions:
      'Distribute cards to pairs: one set has rhetorical device names, the other has definitions and examples. Students match them as quickly as possible. Include: rhetorical question, anaphora, antithesis, hyperbole, litotes (understatement), tricolon (rule of three), direct address, imperative, sibilance, and zeugma. First pair to match all correctly wins. Teacher then reveals answers and briefly defines any devices students found unfamiliar — pay particular attention to litotes, antithesis, and zeugma, which are less commonly known.',
    differentiation: {
      support: 'Reduce the set to six devices and provide a help sheet with simplified definitions.',
      core: 'Full set of ten devices. Students must match and then write an original example for two of them.',
      stretch: 'Full set plus two additional advanced devices (asyndeton, polysyndeton). Students write original examples for all.',
    },
    resources: ['Device matching cards (2 sets per pair)', 'Answer key slide', 'Help sheet (support tier)'],
  },
  mainActivities: [
    {
      title: 'Rhetoric in Action — Annotating Real Texts',
      duration: '20 minutes',
      instructions:
        'Distribute three short extracts: (1) a political speech, (2) a charity campaign text, (3) an opinion article. Each extract is rich in rhetorical devices. Students work through all three, annotating every device they can find and writing a one-sentence explanation of its effect in the margin. Teacher circulates, challenging students to push beyond the obvious (e.g., "Yes, there is a rhetorical question — but what does the writer want the reader to feel?"). After individual annotation, students compare findings in groups of three and compile a "top five most powerful devices" list with justifications.',
      differentiation: {
        support: 'Pre-highlight the devices in the extracts; students focus on naming and explaining the effect.',
        core: 'Students identify, name, and explain devices independently across all three texts.',
        stretch: 'Students evaluate which extract uses rhetoric most effectively and write a comparative paragraph.',
      },
      resources: ['Three printed extracts', 'Rhetorical devices reference sheet', 'Annotation guide'],
    },
    {
      title: 'Deploying Devices — Controlled Writing',
      duration: '20 minutes',
      instructions:
        'Students receive a "rhetoric challenge grid" — a 3x3 grid with nine rhetorical devices. They must write a 200-word persuasive passage on the topic "Why every student should read for pleasure" that incorporates at least six of the nine devices. Each time they use a device, they tick it off and label it in the margin. Teacher models the first two sentences, embedding antithesis and a rhetorical question naturally. Emphasise: the devices should enhance the writing, not dominate it. After writing, pairs swap work and verify that each claimed device is correctly used and effective.',
      differentiation: {
        support: 'Reduce to four required devices. Provide sentence starters that naturally lead into specific devices.',
        core: 'Six devices required. Students label each device used in the margin.',
        stretch: 'All nine devices required. Students must also ensure variety in sentence structure and paragraph organisation.',
      },
      resources: ['Rhetoric challenge grid', 'Topic card', 'Peer verification checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Device of the Day',
    duration: '7 minutes',
    instructions:
      'Each student writes down the one rhetorical device they found most powerful today and explains in two sentences why it is effective. Volunteers share. Teacher selects a "Device of the Day" and challenges students to use it in conversation or writing before the next lesson. Final reinforcement: rhetorical devices are tools, not tricks — they must serve the argument, not replace it.',
    differentiation: {
      support: 'Students select from a shortlist of three devices and use a sentence starter for their explanation.',
      core: 'Students choose freely and write a two-sentence explanation.',
      stretch: 'Students explain when their chosen device would be inappropriate or counterproductive.',
    },
  },
  homework:
    'Create a rhetorical devices revision poster or flashcard set covering at least ten devices. Each entry must include: the device name, a clear definition, an original example, and a one-sentence explanation of its effect.',
  worksheetQuestions: [
    {
      question: 'Define "antithesis" and explain its effect on the reader. Provide an original example.',
      lines: 5,
      modelAnswer:
        'Antithesis is the placing of two contrasting ideas side by side in a balanced structure to emphasise the difference between them. For example: "We must choose between the comfort of ignorance and the challenge of truth." The effect is to present the writer\'s argument as a clear, binary choice, making the preferred option seem obvious. The balanced structure gives the sentence a rhythmic, memorable quality that adds weight to the argument.',
      marks: 4,
    },
    {
      question: 'What is the difference between "hyperbole" and "litotes"? Give an example of each.',
      lines: 5,
      modelAnswer:
        'Hyperbole is deliberate exaggeration used to emphasise a point or create dramatic effect — for example, "I have told you a million times to tidy your room." Litotes is deliberate understatement, often using a negative to express a positive — for example, "The exam results were not bad at all" (meaning they were very good). Both are persuasive tools: hyperbole amplifies emotion and urgency, while litotes can create irony, humour, or a sense of modest authority.',
      marks: 4,
    },
    {
      question: 'Read the following extract and identify four rhetorical devices: "We stand at a crossroads. We can choose complacency, or we can choose courage. Every child, every family, every community deserves better. Is it not time we demanded change?"',
      lines: 6,
      modelAnswer:
        'The extract contains: (1) a metaphor — "crossroads" compares the situation to a physical junction, suggesting a critical decision point; (2) antithesis — "complacency" is contrasted with "courage," presenting a clear moral choice; (3) anaphora and tricolon — "every child, every family, every community" repeats "every" three times, building inclusivity and momentum; (4) a rhetorical question — "Is it not time..." engages the reader directly and implies the answer is obviously yes. Together, these devices create an emotionally charged, logically structured call to action.',
      marks: 5,
    },
    {
      question: 'Explain why overusing rhetorical devices can weaken a piece of writing.',
      lines: 4,
      modelAnswer:
        'Overusing rhetorical devices can make writing feel formulaic, artificial, and manipulative rather than genuinely persuasive. If every sentence contains a rhetorical question or a tricolon, the effect becomes predictable and the reader may disengage or distrust the writer. Effective non-fiction writing uses devices strategically — deploying them at key moments for maximum impact — and balances rhetoric with clear reasoning, specific evidence, and a natural, authentic voice.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'This lesson works best mid-unit, after students have encountered individual devices in context across previous lessons.',
    'The matching game cards should be laminated for reuse. Consider a competitive element with a leaderboard.',
    'When modelling, always show how a device sounds natural rather than inserted — this is the difference between a Grade 5 and a Grade 8 response.',
    'The rhetoric challenge grid can be adapted for different topics and reused as a regular writing warm-up.',
    'Explicitly link devices to the AQA mark scheme: Level 4 (Grade 7-9) requires "a range of ambitious vocabulary and linguistic devices used with precision."',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Rhetorical device identification',
    'Rhetorical device deployment',
    'Analytical writing',
  ],
};

// ─── Lesson 6: Structural Features for Non-Fiction ──────────────────────────

const lesson6: LessonPlan = {
  id: 'nonfiction-06-structural-features',
  title: 'Structural Features for Non-Fiction',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how structural choices shape meaning and impact in non-fiction writing.',
    'Analyse how writers use openings, endings, paragraph organisation, and shifts in focus to guide the reader.',
    'Apply deliberate structural techniques to improve the organisation of original transactional writing.',
  ],
  successCriteria: [
    'I can identify and name at least five structural features used in non-fiction texts.',
    'I can explain how structural choices contribute to the overall effectiveness of a piece.',
    'I can plan and write a structurally sophisticated piece that uses deliberate openings, shifts, and conclusions.',
  ],
  keywords: [
    'topic sentence', 'discourse marker', 'shift in focus',
    'circular structure', 'anecdote', 'zoom in/zoom out',
    'cohesion', 'paragraph function',
  ],
  starterActivity: {
    title: 'Paragraph Jigsaw',
    duration: '8 minutes',
    instructions:
      'Distribute a well-structured opinion article that has been cut into individual paragraphs and shuffled. In pairs, students arrange the paragraphs into the correct order. Discuss: how did you know which paragraph came first? Last? What clues helped you (discourse markers, topic sentences, logical progression)? Reveal the original order and highlight the structural features that created cohesion.',
    differentiation: {
      support: 'Reduce to five paragraphs and underline the discourse markers in each.',
      core: 'Seven paragraphs, no additional support — students rely on internal textual clues.',
      stretch: 'Students identify a paragraph that could be moved without breaking the logic and explain why.',
    },
    resources: ['Cut-up article paragraphs (1 set per pair)', 'Original article for reveal'],
  },
  mainActivities: [
    {
      title: 'Structural Techniques Toolkit',
      duration: '18 minutes',
      instructions:
        'Teacher introduces a toolkit of structural techniques for non-fiction: (1) The Hook Opening — start with an anecdote, provocative statement, or shocking statistic; (2) Zoom In / Zoom Out — move between personal/specific detail and broader societal context; (3) Shift in Focus — use discourse markers to pivot between ideas (However, Conversely, On the other hand); (4) Circular Structure — return to the opening image or idea at the end; (5) The Power Ending — conclude with a call to action, question, or single-sentence paragraph for impact. For each technique, show an annotated example from a published non-fiction text. Students take notes on a structural techniques reference sheet.',
      differentiation: {
        support: 'Provide a pre-completed reference sheet with definitions; students add their own examples for each.',
        core: 'Students complete the reference sheet with definitions and examples during the presentation.',
        stretch: 'Students evaluate which structural technique is most important for achieving a high grade and justify their answer.',
      },
      resources: ['Structural techniques presentation slides', 'Reference sheet', 'Annotated published extracts'],
    },
    {
      title: 'Restructuring and Writing',
      duration: '22 minutes',
      instructions:
        'Students receive a weak student response to the prompt: "Write an article for a broadsheet newspaper arguing that the arts are as important as STEM subjects." The response has valid points but poor structure — no clear opening hook, no discourse markers, no shifts in focus, and a flat ending. Students first annotate the weak response, identifying structural problems. Then they rewrite it, applying at least four structural techniques from the toolkit. They may reorganise paragraphs, add new openings and endings, and insert discourse markers, but should keep the core arguments intact. Final five minutes: compare two rewrites under the visualiser.',
      differentiation: {
        support: 'Provide the structural problems pre-identified and a planning frame for the rewrite with paragraph functions labelled.',
        core: 'Students identify problems and rewrite independently, labelling their structural choices in the margin.',
        stretch: 'Students rewrite and then compose a brief examiner-style commentary explaining how their structural choices improve the piece.',
      },
      resources: ['Weak student response handout', 'Structural techniques checklist', 'Planning frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Opening Line Challenge',
    duration: '7 minutes',
    instructions:
      'Display a generic essay topic: "Should junk food be banned in schools?" Students have three minutes to write the most compelling opening line they can — it must use one of the hook techniques covered today (anecdote, shocking statistic, provocative question, vivid image). Volunteers share and the class votes on the strongest opener. Teacher reinforces: in the exam, your opening line is your first impression — make it count.',
    differentiation: {
      support: 'Choose from three hook types displayed on the board, with an example of each.',
      core: 'Students write freely, choosing any hook technique.',
      stretch: 'Students write two openings using different hook types and explain which is more effective for this topic.',
    },
  },
  homework:
    'Take a piece of writing you have produced earlier in this unit and restructure it. Add a hook opening, insert discourse markers between paragraphs, include at least one shift in focus, and write a power ending. Annotate your changes.',
  worksheetQuestions: [
    {
      question: 'Explain what a "circular structure" is and why a writer might choose to use one in a non-fiction text.',
      lines: 4,
      modelAnswer:
        'A circular structure is when a writer returns to an image, phrase, or idea from the opening at the end of the text, creating a sense of completeness and resolution. A writer might use this to reinforce their central argument, create a satisfying sense of closure, or show how the reader\'s understanding of the opening idea should have shifted after reading the full piece. For example, an article about homelessness might open and close with a description of a person sleeping rough, but the closing description carries more emotional weight because of the arguments and evidence presented in between.',
      marks: 4,
    },
    {
      question: 'What is a "topic sentence" and where should it appear in a paragraph?',
      lines: 3,
      modelAnswer:
        'A topic sentence is the opening sentence of a paragraph that introduces the main idea or argument that the rest of the paragraph will develop. It should appear at the beginning of the paragraph so that the reader immediately understands the focus. In non-fiction writing, strong topic sentences act as signposts, guiding the reader through the argument and ensuring each paragraph has a clear, distinct purpose.',
      marks: 2,
    },
    {
      question: 'List four discourse markers that signal a shift in focus or a contrasting idea, and write a sentence using one of them.',
      lines: 5,
      modelAnswer:
        'Four discourse markers that signal contrast or shift: "However," "On the other hand," "Conversely," and "Nevertheless." Example sentence: "Many argue that social media connects people across the globe; however, recent studies suggest it may actually be increasing feelings of isolation among teenagers." These markers are essential for guiding the reader through a complex argument and signalling when the writer is about to present an alternative perspective.',
      marks: 3,
    },
    {
      question: 'Explain the "zoom in / zoom out" technique and give an example of how it might be used in an article about education.',
      lines: 5,
      modelAnswer:
        'The "zoom in / zoom out" technique involves shifting between specific, personal detail (zoom in) and broader, societal context (zoom out). In an article about education, a writer might zoom in on a single student\'s experience: "Fifteen-year-old Amira sits at her kitchen table, textbooks spread around her, unable to afford the private tutor her classmates take for granted." The writer then zooms out: "Amira is not alone. Across the UK, 4.3 million children are growing up in poverty, and the attainment gap between the richest and poorest students continues to widen." This technique makes abstract issues feel personal and human.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Structure is often undervalued by students who focus exclusively on language techniques. Emphasise that AO5 rewards organisation equally.',
    'The paragraph jigsaw is reusable with different texts — build a bank of cut-up articles for regular practice.',
    'When modelling, show how structural choices are planned before writing begins — discourage students from just starting to write without a clear structural plan.',
    'The "weak response" activity is more effective if you use an anonymised student response from a previous cohort rather than an artificially bad model.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'Structural analysis',
    'Paragraph organisation',
    'Discourse marker usage',
    'Planning and drafting',
  ],
};

// ─── Lesson 7: Audience and Purpose — Adapting Register ─────────────────────

const lesson7: LessonPlan = {
  id: 'nonfiction-07-audience-purpose-register',
  title: 'Audience and Purpose: Adapting Register',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how audience and purpose determine the register, tone, and formality of a text.',
    'Analyse how the same content can be adapted for different audiences and purposes.',
    'Write the same information in two different registers, demonstrating conscious control of language.',
  ],
  successCriteria: [
    'I can define "register" and explain how it is shaped by audience, purpose, and form.',
    'I can identify specific language features that signal formal or informal register.',
    'I can adapt my own writing to suit at least two different audiences while maintaining accuracy and impact.',
  ],
  keywords: [
    'register', 'formality', 'audience', 'purpose',
    'colloquial language', 'Standard English', 'tone', 'lexical choice',
  ],
  starterActivity: {
    title: 'Text Message vs Formal Letter',
    duration: '7 minutes',
    instructions:
      'Display a scenario: "You are going to be late for an important meeting." Show two versions of the message — one as a text to a friend ("gonna be late lol traffic is mental") and one as an email to an employer ("Dear Ms Chen, I am writing to inform you that I will unfortunately be delayed by approximately fifteen minutes due to unforeseen traffic congestion"). Students identify five specific differences between the two and categorise them (vocabulary, grammar, punctuation, tone, structure). Introduce the key term: register.',
    differentiation: {
      support: 'Provide a comparison table with categories pre-filled; students add examples from the two texts.',
      core: 'Students identify five differences independently and categorise them.',
      stretch: 'Students write a third version — a voicemail to a teacher — and explain which register choices they made and why.',
    },
    resources: ['Two-version message slide', 'Comparison table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Register Analysis Gallery Walk',
      duration: '17 minutes',
      instructions:
        'Set up six stations around the room, each displaying a different non-fiction text: (1) a formal report, (2) a tabloid news article, (3) a personal blog post, (4) a charity leaflet aimed at teenagers, (5) an academic essay extract, (6) a travel magazine review. At each station, students answer three questions on their worksheet: Who is the intended audience? What is the purpose? What specific language features reveal the register? Students spend 2-3 minutes at each station. Class feedback: teacher draws out the key learning that audience + purpose = register.',
      differentiation: {
        support: 'Provide audience and purpose options to choose from at each station, plus a glossary of register-related terms.',
        core: 'Students answer all three questions independently at each station.',
        stretch: 'Students rank the six texts from most to least formal and write a paragraph justifying their ranking.',
      },
      resources: ['Six printed texts (laminated for reuse)', 'Gallery walk worksheet', 'Glossary (support tier)'],
    },
    {
      title: 'Register Transformation Writing',
      duration: '24 minutes',
      instructions:
        'Students receive a set of factual bullet points about a local issue (e.g., plans to build a new skate park). They must write two texts using the same information: (1) a formal letter to the local council supporting the plans, and (2) an informal blog post for a youth website encouraging teenagers to attend a public consultation meeting. Each text should be 150-200 words. After writing, students highlight five specific language choices in each text that demonstrate their register awareness. Teacher models one sentence in both registers to start: "The proposed recreational facility would significantly benefit young residents" vs "This skate park could be a total game-changer for us."',
      differentiation: {
        support: 'Provide a sentence-level register conversion sheet with formal and informal equivalents for key phrases.',
        core: 'Students write both texts independently and highlight register features.',
        stretch: 'Students write a third version — a speech to Year 7 students — and explain how the register differs from both the letter and the blog post.',
      },
      resources: ['Factual bullet points handout', 'Register conversion sheet (support tier)', 'Highlighting pens'],
    },
  ],
  plenaryActivity: {
    title: 'Register Remix',
    duration: '7 minutes',
    instructions:
      'Display a single formal sentence on the board. Students have 90 seconds to rewrite it in the most informal register they can. Then display an informal sentence and students rewrite it formally. Volunteers share. Teacher reinforces: in the exam, you must identify the required register from the question (audience, purpose, form) and sustain it consistently throughout your response. Slipping between registers is one of the most common reasons students lose marks.',
    differentiation: {
      support: 'Provide the formal sentence with key words underlined to indicate what needs changing.',
      core: 'Students rewrite both sentences independently.',
      stretch: 'Students explain which specific changes they made and link each to audience awareness.',
    },
  },
  homework:
    'Choose a topic you feel strongly about. Write 150 words about it for a broadsheet newspaper audience and 150 words for a Year 8 school assembly audience. Annotate five register differences between the two versions.',
  worksheetQuestions: [
    {
      question: 'Define "register" and explain three factors that determine it.',
      lines: 4,
      modelAnswer:
        'Register is the level of formality in a piece of writing, determined by the combination of audience, purpose, and form. Audience determines who you are writing for — a letter to a headteacher requires a formal register, while a blog for teenagers can be informal. Purpose shapes whether the tone is serious, persuasive, or light-hearted. Form dictates conventions — a newspaper report has a different register from a personal diary entry. A skilled writer adapts their register fluidly to suit any combination of these three factors.',
      marks: 3,
    },
    {
      question: 'List four features of formal register and four features of informal register.',
      lines: 6,
      modelAnswer:
        'Formal register features: (1) Standard English grammar with no contractions, (2) sophisticated, Latinate vocabulary (e.g., "consequently" rather than "so"), (3) passive voice constructions (e.g., "It has been decided"), (4) complex sentence structures with subordinate clauses. Informal register features: (1) contractions ("don\'t," "can\'t"), (2) colloquial vocabulary and slang (e.g., "loads of" rather than "a significant number of"), (3) first-person and direct address ("I reckon," "you know"), (4) shorter, simpler sentences, sometimes fragments for effect.',
      marks: 4,
    },
    {
      question: 'Rewrite the following informal sentence in a formal register suitable for a letter to an MP: "Honestly, the state of the roads round here is doing my head in — potholes everywhere and nobody seems to care."',
      lines: 5,
      modelAnswer:
        'A formal version: "I am writing to express my significant concern regarding the deteriorating condition of the roads in the Westfield area. The prevalence of potholes presents a serious safety hazard to motorists and pedestrians alike, and residents feel that insufficient action has been taken by the local authority to address this issue." This replaces colloquial language ("doing my head in") with formal vocabulary ("significant concern"), removes the informal tone, and uses Standard English throughout.',
      marks: 4,
    },
    {
      question: 'Why is sustaining register important in exam conditions? What happens if a student\'s register is inconsistent?',
      lines: 4,
      modelAnswer:
        'Sustaining register is important because the AQA mark scheme rewards writing that is "convincingly matched to purpose, form, and audience" throughout. If a student begins with a formal tone but lapses into colloquial language mid-way through, it suggests a lack of control and awareness. Inconsistent register can drop a response by one or two mark bands because it undermines the credibility of the writer\'s voice. Examiners look for sustained, deliberate control — not occasional flashes of formality surrounded by casual writing.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'Register is the single most common weakness in student transactional writing. Many students default to an informal, conversational tone regardless of the task.',
    'The gallery walk texts should be laminated and can be reused. Vary the texts each year to keep the activity fresh.',
    'Explicitly teach the difference between "adapting register" and "dumbing down." Writing for a young audience still requires precision and skill.',
    'Link to Paper 2 Section B: the question always specifies an audience, purpose, and form — students must decode all three before writing.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Register adaptation',
    'Audience awareness',
    'Formal and informal writing',
  ],
};

// ─── Lesson 8: Newspaper Articles and Reviews ───────────────────────────────

const lesson8: LessonPlan = {
  id: 'nonfiction-08-articles-and-reviews',
  title: 'Newspaper Articles and Reviews',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the conventions of newspaper articles and reviews as distinct non-fiction forms.',
    'Analyse how writers use tone, structure, and evaluative language in reviews.',
    'Write a review that balances personal opinion with objective detail and uses appropriate conventions.',
  ],
  successCriteria: [
    'I can identify and explain the key structural and language conventions of a review.',
    'I can use evaluative language to express nuanced opinions rather than simple like/dislike judgments.',
    'I can write a review that engages the reader with vivid description, critical evaluation, and a clear recommendation.',
  ],
  keywords: [
    'review', 'evaluative language', 'star rating', 'critique',
    'recommendation', 'headline', 'subheading', 'byline',
  ],
  starterActivity: {
    title: 'Rate and Review',
    duration: '7 minutes',
    instructions:
      'Display three one-line reviews of the same fictional film: (1) "It was good. I liked it." (2) "A visually stunning but emotionally hollow blockbuster that prioritises spectacle over substance." (3) "OMG this film was literally the best thing ever everyone needs to see it right now!!!!" Students rank them from least to most effective and explain why. Discuss: what makes review (2) the strongest? Introduce the key concept: effective reviews use evaluative language that is specific, balanced, and authoritative — not vague praise or breathless hyperbole.',
    differentiation: {
      support: 'Provide a word bank of evaluative adjectives to replace "good" and "liked."',
      core: 'Students rewrite review (1) to make it as effective as review (2).',
      stretch: 'Students explain the register and audience problems with review (3) and rewrite it for a broadsheet newspaper.',
    },
    resources: ['Three reviews slide', 'Evaluative language word bank (support tier)'],
  },
  mainActivities: [
    {
      title: 'Anatomy of a Review',
      duration: '18 minutes',
      instructions:
        'Distribute a model review (e.g., a restaurant review, film review, or book review written by the teacher in exam style). Students annotate it, identifying: headline (witty, often a pun or play on words), introduction with context (what is being reviewed, where, when), descriptive detail that sets the scene, balanced evaluation (strengths and weaknesses), specific evidence to support opinions, evaluative vocabulary (rather than vague adjectives), a clear recommendation or verdict, and a star rating or summary judgment. Teacher guides the annotation, pausing to ask: "What makes this sentence evaluative rather than just descriptive?" Students complete an analysis grid mapping each convention to a specific example from the text.',
      differentiation: {
        support: 'Provide the analysis grid partially completed with conventions listed; students find examples.',
        core: 'Students complete the grid independently with conventions and examples.',
        stretch: 'Students identify one weakness in the model review and suggest how to improve it, with specific rewritten sentences.',
      },
      resources: ['Model review handout', 'Analysis grid worksheet', 'Highlighters'],
    },
    {
      title: 'Writing a Review',
      duration: '23 minutes',
      instructions:
        'Students write a review (250-350 words) of something they have genuine experience of: a restaurant, a film, a book, a video game, a school trip, or a local attraction. They must follow the conventions identified in the model analysis. Provide a planning frame: (1) Catchy headline, (2) Opening with context and scene-setting, (3) Two paragraphs evaluating strengths (with specific detail), (4) One paragraph acknowledging weaknesses (balanced critique), (5) Verdict and recommendation. Teacher models a headline and opening for a school canteen review: "Lukewarm Lasagne and Limp Lettuce: A Lunchtime at Greenfield Academy." Emphasise: use sensory language for description and evaluative adjectives for judgment.',
      differentiation: {
        support: 'Provide a sentence-level planning frame with starters for each section and an evaluative vocabulary list.',
        core: 'Students plan and write independently, aiming to include all five conventions.',
        stretch: 'Students write the review and then draft an alternative headline — one for a broadsheet, one for a tabloid — and explain the register difference.',
      },
      resources: ['Planning frame', 'Evaluative vocabulary list', 'Timer'],
    },
  ],
  plenaryActivity: {
    title: 'Headline Workshop',
    duration: '7 minutes',
    instructions:
      'Students share their review headlines with the class. Evaluate: Is it engaging? Does it hint at the verdict? Does it use wordplay or alliteration? The class votes on the best headline and explains why it works. Teacher reinforcement: a great headline does three things — it grabs attention, sets the tone, and hints at the writer\'s opinion without giving everything away.',
    differentiation: {
      support: 'Students choose from three headline templates and adapt them for their review.',
      core: 'Students write and share their own original headline.',
      stretch: 'Students revise another student\'s headline to make it more effective and explain their changes.',
    },
  },
  homework:
    'Write a 350-word review of a book you have read or a film you have watched recently. It must include: a witty headline, an opening with context, at least two paragraphs of balanced evaluation, specific evidence, and a clear verdict.',
  worksheetQuestions: [
    {
      question: 'Explain the difference between a "descriptive" sentence and an "evaluative" sentence in a review. Give an example of each.',
      lines: 5,
      modelAnswer:
        'A descriptive sentence presents factual detail without judgment: "The restaurant is located on the high street and serves Italian cuisine with a menu of over forty dishes." An evaluative sentence offers the writer\'s critical assessment: "While the menu boasts an impressive range, the execution is inconsistent — the carbonara was silky and authentic, but the risotto arrived lukewarm and underseasoned." Effective reviews blend both: description provides context, and evaluation provides the critic\'s voice and authority.',
      marks: 3,
    },
    {
      question: 'Why is it important for a review to include both strengths and weaknesses rather than being entirely positive or entirely negative?',
      lines: 4,
      modelAnswer:
        'A balanced review is more credible and trustworthy. If a reviewer only praises, the reader may suspect bias or a lack of critical thinking. If a reviewer only criticises, the piece feels mean-spirited and the reader may dismiss it as unfair. By acknowledging both strengths and weaknesses, the reviewer demonstrates authority and fairness, which makes their final verdict more convincing. Balance also shows the sophistication expected at higher grade boundaries.',
      marks: 3,
    },
    {
      question: 'Write an evaluative paragraph about a school subject you enjoy. Include at least three evaluative adjectives and one piece of specific evidence.',
      lines: 6,
      modelAnswer:
        'English Literature is, without question, the most intellectually stimulating subject on the GCSE curriculum. The texts themselves — from Shakespeare\'s psychologically complex Macbeth to Stevenson\'s chillingly atmospheric Jekyll and Hyde — offer endlessly rich material for discussion and debate. What elevates the subject further is the freedom to develop a personal interpretation: unlike subjects that demand a single correct answer, English rewards originality, creativity, and the confidence to challenge established readings. It is demanding, certainly, but immensely rewarding.',
      marks: 4,
    },
    {
      question: 'Write a headline for each of the following reviews: (a) a positive review of a new pizza restaurant, (b) a negative review of a school play, (c) a mixed review of a theme park.',
      lines: 5,
      modelAnswer:
        '(a) "A Slice of Perfection: Why Napoli\'s Deserves Every One of Its Five Stars" — uses a pun on "slice" and a confident superlative. (b) "Much Ado About Nothing Much: A School Production That Missed Its Cue" — uses a Shakespeare pun and theatrical language to signal disappointment. (c) "Thrills, Spills, and a Few Too Many Bills: Adventureland Delivers Excitement at a Price" — uses a tricolon with rhyme to signal a mixed verdict. Each headline hints at the review\'s conclusion and uses wordplay to engage the reader.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Reviews are a popular exam form but students often produce either fan reviews (all praise) or rants (all criticism). Drill the importance of balance.',
    'The model review should be written in exam conditions style — avoid using a published review that exceeds what students could produce in 45 minutes.',
    'Teach students that the best review headlines use puns, alliteration, or cultural references — model several before they write their own.',
    'This lesson pairs well with the next lesson on formal letter writing, as both require sustained register and audience awareness.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Review writing',
    'Evaluative language',
    'Descriptive writing within non-fiction',
  ],
};

// ─── Lesson 9: Formal Letter Writing ────────────────────────────────────────

const lesson9: LessonPlan = {
  id: 'nonfiction-09-formal-letter-writing',
  title: 'Formal Letter Writing',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Master the layout and conventions of a formal letter, including addresses, salutation, and sign-off.',
    'Understand how to adapt tone, register, and content for a formal audience.',
    'Write a complete formal letter in response to an exam-style prompt with sustained formality and clear argumentation.',
  ],
  successCriteria: [
    'I can lay out a formal letter correctly with all required conventions (addresses, date, salutation, sign-off).',
    'I can sustain a formal register throughout, avoiding colloquial language and maintaining a professional tone.',
    'I can structure my letter with a clear introduction, developed body paragraphs, and a purposeful conclusion.',
  ],
  keywords: [
    'formal register', 'salutation', 'complimentary close',
    'Yours sincerely', 'Yours faithfully', 'recipient',
    'Standard English', 'passive voice',
  ],
  starterActivity: {
    title: 'Spot the Mistakes',
    duration: '7 minutes',
    instructions:
      'Display a deliberately flawed formal letter on the board (wrong address position, "Dear Bob" to a stranger, informal language in the body, "Yours sincerely" with "Dear Sir," etc.). Students work in pairs to identify as many errors as possible in two minutes. Aim for at least eight errors. Teacher reveals the corrected version and addresses each mistake. Key learning point: formal letter conventions are non-negotiable — getting them wrong signals to the examiner that you have not mastered the form.',
    differentiation: {
      support: 'Provide a checklist of formal letter conventions so students can compare systematically.',
      core: 'Students identify errors without support materials and explain why each is wrong.',
      stretch: 'Students rewrite the letter correctly from memory, then compare with the model.',
    },
    resources: ['Flawed letter slide', 'Corrected letter reveal slide', 'Conventions checklist (support tier)'],
  },
  mainActivities: [
    {
      title: 'Formal Letter Conventions Masterclass',
      duration: '15 minutes',
      instructions:
        'Teacher delivers a focused mini-lesson on formal letter conventions using a annotated model letter on the board: (1) Your address (top right, no name), (2) Recipient\'s address (left, below your address), (3) Date (below recipient\'s address), (4) Salutation — "Dear Mr/Mrs/Ms [Surname]" if known, "Dear Sir or Madam" if not, (5) Opening paragraph — state your purpose clearly, (6) Body paragraphs — one topic per paragraph, formal register throughout, (7) Closing paragraph — summarise and state desired outcome, (8) Sign-off — "Yours sincerely" if named, "Yours faithfully" if not, (9) Your full name (printed below signature). Students copy the layout into their books and annotate each feature. Quick-fire drill: teacher calls out scenarios, students write the correct salutation and sign-off on whiteboards.',
      differentiation: {
        support: 'Provide a template with labelled boxes showing where each element goes.',
        core: 'Students memorise the layout and reproduce it from memory after the teacher clears the board.',
        stretch: 'Students explain why each convention exists — what does it communicate about the writer?',
      },
      resources: ['Annotated model letter slide', 'Letter layout template (support tier)', 'Mini-whiteboards'],
    },
    {
      title: 'Writing a Formal Letter — Exam Practice',
      duration: '26 minutes',
      instructions:
        'Students respond to the following exam-style prompt: "A local supermarket has applied for a licence to open 24 hours a day, seven days a week. Write a letter to your local council either supporting or opposing this application." Students have 25 minutes — mirroring the time pressure of the exam. Before writing, spend two minutes planning: state your position, list three arguments with evidence, anticipate one counterargument. During writing, teacher circulates with a checklist, giving live feedback on layout and register. Students must produce at least four paragraphs plus opening and closing.',
      differentiation: {
        support: 'Provide a planning frame with paragraph functions and sentence starters for the opening and closing.',
        core: 'Students plan and write independently under timed conditions.',
        stretch: 'Students include a paragraph that uses concession ("While I acknowledge that...") before rebutting the counterargument.',
      },
      resources: ['Exam-style prompt card', 'Planning frame (support tier)', 'Formal letter checklist', 'Timer'],
    },
  ],
  plenaryActivity: {
    title: 'Layout Audit',
    duration: '7 minutes',
    instructions:
      'Students swap letters with a partner. The partner checks ONLY the layout and conventions — not the content. They tick or cross each convention on a checklist: correct address positions, date, appropriate salutation, formal register sustained, correct sign-off. Students return letters with feedback. Teacher reinforces: layout errors are the easiest marks to gain — and the easiest to lose. Commit the format to memory.',
    differentiation: {
      support: 'Use a simplified checklist with three key conventions to check.',
      core: 'Full checklist of eight conventions.',
      stretch: 'Partners also comment on one strength and one area for improvement in register or argumentation.',
    },
  },
  homework:
    'Write a formal letter to the headteacher proposing a change to the school that you believe would benefit students. Use full formal letter conventions, sustain a formal register, and include at least three developed arguments.',
  worksheetQuestions: [
    {
      question: 'Write out the correct layout for the opening of a formal letter to Mrs J. Patterson, Head of Planning, at Westfield District Council, 14 High Street, Westfield, WF3 8PQ. Your address is 7 Oak Lane, Westfield, WF2 4RD. Today\'s date is 15 March 2026.',
      lines: 10,
      modelAnswer:
        '7 Oak Lane\nWestfield\nWF2 4RD\n\nMrs J. Patterson\nHead of Planning\nWestfield District Council\n14 High Street\nWestfield\nWF3 8PQ\n\n15 March 2026\n\nDear Mrs Patterson,\n\n[The sender\'s address is positioned at the top right. The recipient\'s full address is positioned on the left below. The date follows. The salutation uses the recipient\'s name, so the letter will close with "Yours sincerely."]',
      marks: 4,
    },
    {
      question: 'Explain why formal letters should avoid contractions, slang, and first-name terms.',
      lines: 4,
      modelAnswer:
        'Formal letters should avoid contractions (e.g., "don\'t" should be "do not"), slang, and first-name terms because these features are associated with informal, casual communication. A formal letter is a professional document that may be read by people in positions of authority — councillors, headteachers, business leaders — and its language must reflect respect, seriousness, and competence. Using informal language in a formal letter undermines the writer\'s credibility and suggests a lack of awareness of social conventions.',
      marks: 3,
    },
    {
      question: 'Write the closing paragraph and sign-off for a formal letter to the editor of a newspaper in which you have argued that public libraries should receive more funding.',
      lines: 6,
      modelAnswer:
        'In conclusion, I would urge you and your readers to consider the invaluable role that public libraries play in our communities. They are not a luxury but a lifeline — for students, for job seekers, for the elderly, and for anyone who believes in the power of free access to knowledge. I trust that you will give this matter the prominence it deserves in your publication, and I look forward to seeing a robust public debate on this vital issue.\n\nYours faithfully,\n\nSamira Khan\n\n[Note: "Yours faithfully" is correct here because the letter was addressed to "Dear Sir or Madam" — the editor\'s name was not used.]',
      marks: 4,
    },
    {
      question: 'Identify three differences between a formal letter and a formal email in terms of layout and conventions.',
      lines: 5,
      modelAnswer:
        'First, a formal letter includes the sender\'s and recipient\'s postal addresses, while an email uses email addresses in the To/From fields and does not require postal addresses. Second, a letter uses "Yours sincerely/faithfully" as a sign-off, while an email typically uses "Kind regards" or "Best wishes," which are slightly less formal. Third, a letter follows a rigid spatial layout (addresses, date, salutation in fixed positions), while an email has a more flexible format with a subject line replacing the need for a headline or reference number. Despite these differences, both should maintain a formal register and Standard English throughout.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'Formal letter writing appears regularly in AQA Paper 2, Section B. Students who master the conventions have an immediate advantage.',
    'The "Spot the Mistakes" starter is excellent for revision lessons too — adapt the errors each time.',
    'Ensure students understand that in the exam, they do not need to invent realistic addresses — a simple placeholder is acceptable. However, they must show they know where each element goes.',
    'The timed writing task is crucial exam preparation. Resist the urge to give students extra time — building stamina under pressure is essential.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Formal letter conventions',
    'Sustained formal register',
    'Argumentative writing in letter form',
  ],
};

// ─── Lesson 10: Exam Practice — Section B Timed Writing ─────────────────────

const lesson10: LessonPlan = {
  id: 'nonfiction-10-exam-practice-section-b',
  title: 'Exam Practice: Section B Timed Writing',
  text: 'Non-Fiction / Transactional Writing',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply all transactional writing skills under timed exam conditions.',
    'Decode an exam question to identify audience, purpose, and form before writing.',
    'Self-assess and improve a timed response using the AQA mark scheme criteria.',
  ],
  successCriteria: [
    'I can decode an exam question and identify the required audience, purpose, and form within one minute.',
    'I can plan and write a complete, well-structured transactional response in 45 minutes.',
    'I can self-assess my work against the mark scheme and identify specific areas for improvement.',
  ],
  keywords: [
    'Section B', 'mark scheme', 'AO5', 'AO6',
    'content and organisation', 'technical accuracy',
    'time management', 'proofreading',
  ],
  starterActivity: {
    title: 'Question Decoding Drill',
    duration: '8 minutes',
    instructions:
      'Display four exam-style questions one at a time. For each, students write on whiteboards: (1) the AUDIENCE, (2) the PURPOSE, (3) the FORM. Example: "Write an article for a broadsheet newspaper in which you argue that the voting age should be lowered to 16." Answer: Audience = broadsheet newspaper readers (educated adults), Purpose = argue, Form = article. Practise all four questions rapidly. Discuss common mistakes: students who ignore the form and write a generic essay, or who miss the audience and use the wrong register. Final question for discussion: "How does identifying these three things before you write help you access the higher mark bands?"',
    differentiation: {
      support: 'Provide the three categories on a template card that students fill in for each question.',
      core: 'Students decode independently on whiteboards, then check with a partner.',
      stretch: 'Students explain what register, tone, and structural choices each question demands and why.',
    },
    resources: ['Four exam-style questions on slides', 'Template cards (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Planning Under Pressure',
      duration: '7 minutes',
      instructions:
        'Reveal the timed writing question: "Write a speech to be delivered at a school assembly in which you persuade students to get involved in community volunteering." Students have exactly five minutes to plan using a structured planning frame: (1) Audience and register notes, (2) Opening hook, (3) Three main arguments with supporting detail, (4) Counterargument and rebuttal, (5) Closing call to action. Teacher times strictly. After five minutes, briefly share two plans under the visualiser to demonstrate efficient versus inefficient planning. Key message: five minutes of planning saves ten minutes of muddled writing.',
      differentiation: {
        support: 'Provide a planning frame with prompts for each section.',
        core: 'Students use a blank planning frame and complete it within the time limit.',
        stretch: 'Students plan without a frame, using their own method, and include notes on specific rhetorical devices they intend to use.',
      },
      resources: ['Exam question slide', 'Planning frame', 'Timer'],
    },
    {
      title: 'Timed Writing — 35 Minutes',
      duration: '35 minutes',
      instructions:
        'Students write their response in full under exam conditions: silence, no support materials (other than their plan), and a strict 35-minute time limit. Teacher circulates silently, noting common issues for class feedback but not intervening. At the 30-minute mark, give a five-minute warning and remind students to leave two minutes for proofreading. At 33 minutes, instruct students to stop writing and begin proofreading: check spelling, punctuation, paragraphing, and any sentences that do not make sense. Students should correct errors directly on their script.',
      differentiation: {
        support: 'Allow students to keep their planning frame visible and provide a proofreading checklist for the final two minutes.',
        core: 'Full exam conditions with no support materials.',
        stretch: 'Students aim for the top band: "compelling, convincing communication" with "extensive, ambitious vocabulary" and "varied, inventive structural features."',
      },
      resources: ['Lined paper or exam booklets', 'Timer', 'Proofreading checklist (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Self-Assessment Against the Mark Scheme',
    duration: '10 minutes',
    instructions:
      'Distribute a student-friendly version of the AQA Paper 2 Section B mark scheme (AO5 and AO6 descriptors simplified). Students read through the band descriptors and highlight the band they believe their response falls into for both AO5 (Content and Organisation) and AO6 (Technical Accuracy). They write a WWW (What Went Well) and an EBI (Even Better If) comment at the bottom of their work, referencing specific mark scheme language. Teacher collects work for marking and uses the self-assessments to compare with their own judgments.',
    differentiation: {
      support: 'Provide a simplified mark scheme with three bands (developing, secure, excellent) and guiding questions.',
      core: 'Full mark scheme. Students self-assess against both AO5 and AO6 independently.',
      stretch: 'Students identify the single change that would move their response up one mark band and rewrite one paragraph to demonstrate it.',
    },
  },
  homework:
    'Complete a second timed response at home: "Write a letter to your local MP arguing that more should be done to support young people\'s mental health." Allow yourself exactly 45 minutes (5 minutes planning, 35 minutes writing, 5 minutes proofreading). Self-assess using the mark scheme.',
  worksheetQuestions: [
    {
      question: 'Explain the difference between AO5 (Content and Organisation) and AO6 (Technical Accuracy) in the AQA Paper 2 Section B mark scheme.',
      lines: 5,
      modelAnswer:
        'AO5 assesses the quality of your ideas and how effectively you organise them. It rewards clear communication, a convincing viewpoint, varied structural features (e.g., discourse markers, varied paragraph lengths, deliberate openings and endings), and writing that is matched to audience, purpose, and form. AO5 is worth 24 marks. AO6 assesses the accuracy of your spelling, punctuation, grammar, and sentence structures. It rewards varied and accurate sentence forms, correct use of a range of punctuation, and accurate spelling of ambitious vocabulary. AO6 is worth 16 marks. Together, Section B is worth 40 marks — half the paper.',
      marks: 4,
    },
    {
      question: 'A student writes: "Volunteering is well good because you get to help people and stuff and it looks good on your CV innit." Rewrite this sentence for a speech at a school assembly, maintaining a formal but engaging register.',
      lines: 5,
      modelAnswer:
        'A revised version: "Community volunteering is one of the most rewarding experiences a young person can have. Not only does it allow you to make a tangible difference in the lives of others, but it also develops the leadership skills, resilience, and empathy that universities and employers are actively seeking." This replaces slang ("well good," "innit") with precise vocabulary, removes vague fillers ("and stuff"), and transforms a casual observation into a developed, persuasive point with a clear benefit for the audience.',
      marks: 4,
    },
    {
      question: 'List five things you should check during the proofreading stage of a timed exam response.',
      lines: 5,
      modelAnswer:
        '(1) Spelling — particularly of ambitious vocabulary and homophones (their/there/they\'re, effect/affect). (2) Punctuation — check that every sentence ends with a full stop, question mark, or exclamation mark, and that commas are used correctly in complex sentences. (3) Paragraphing — ensure each new point or topic starts a new paragraph, and check that paragraph breaks are clearly indicated. (4) Sentence structure — read sentences aloud in your head to catch any that are incomplete, run-on, or do not make grammatical sense. (5) Register consistency — scan for any lapses into informal language that do not match the audience and purpose specified in the question.',
      marks: 5,
    },
    {
      question: 'Write the opening paragraph of a speech persuading your school to introduce a "screen-free day" once a month. Use at least two rhetorical devices and establish a clear, authoritative tone.',
      lines: 8,
      modelAnswer:
        'Good morning, everyone. I want you to try something for me. Close your eyes — just for a moment — and think about the last time you went a full day without looking at a screen. No phone. No laptop. No scrolling, no swiping, no streaming. Difficult to remember, isn\'t it? That is precisely the problem. We have become so dependent on our devices that the very idea of a single day without them feels radical, even frightening. But what if I told you that one screen-free day a month could reduce your stress levels, improve your sleep, and — here is the real surprise — actually make you happier? Today, I am going to explain exactly why this school should lead the way.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson should fall at or near the end of the unit. Students need to have covered all forms and purposes before attempting timed practice.',
    'Strict exam conditions are essential — do not allow questions, support materials, or extensions. Building resilience under pressure is the primary goal.',
    'The self-assessment plenary is powerful: students who can accurately self-assess are better placed to improve independently.',
    'Mark the timed responses using the full AQA mark scheme and return them with a grade, a WWW, and an EBI. Where possible, annotate with mark scheme language so students learn to think like examiners.',
    'Consider running a second exam practice lesson with a different form (e.g., article or letter) to build confidence across all possible question types.',
  ],
  targetedSkills: [
    'AO5: Content and Organisation',
    'AO6: Technical Accuracy',
    'Exam technique',
    'Time management',
    'Self-assessment',
    'Proofreading',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const nonFictionWritingLessons: LessonPlan[] = [
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
