// @ts-nocheck
// ─── KS3 English Guide ───────────────────────────────────────────────────────

export interface KS3Guide {
  title: string
  overview: string // HTML
  keyStage: string
  yearGroups: string
  sections: {
    heading: string
    content: string // HTML
    tips?: string[]
  }[]
  skillsFramework: {
    area: string
    skills: string[]
    gcsePrepTip: string
  }[]
  transitionToGCSE: {
    heading: string
    content: string
    recommendations: string[]
  }
}

export const ks3Guide: KS3Guide = {
  title: 'KS3 English: Building Your Foundation',

  overview: `<p>Key Stage 3 English spans <strong>Years 7, 8, and 9</strong> (ages 11-14) and represents the most important developmental window in your secondary school English career. While there is no formal external examination at the end of KS3, the skills you build during these three years directly determine how well-prepared you are for GCSE - and, ultimately, for A-Level and beyond. Every single GCSE Assessment Objective has its roots in KS3 learning, so the work you do now is far from "just practice"; it <em>is</em> the foundation your exam success will be built upon.</p>

<p>The KS3 English curriculum is governed by the <strong>National Curriculum for England</strong>, which sets out expectations across three interconnected pillars: <strong>Reading</strong>, <strong>Writing</strong>, and <strong>Spoken English</strong>. Schools have significant freedom in how they deliver these, but the core expectations remain consistent: students should read widely and critically, write accurately and effectively for different purposes, and develop confidence in spoken communication. Most schools assess progress through internal assessments - end-of-unit tests, extended writing tasks, and spoken presentations - that mirror the kinds of questions and tasks you will encounter at GCSE.</p>

<p>What makes KS3 unique is the opportunity it provides to <strong>experiment, take risks, and develop your voice</strong> without the pressure of a final grade hanging over every piece of work. This is the time to read voraciously, try ambitious vocabulary, attempt complex sentence structures, and push yourself beyond your comfort zone. Students who treat KS3 as a genuine learning phase - rather than simply waiting for "the real thing" to begin in Year 10 - consistently outperform their peers at GCSE and beyond. The habits you form now, from annotating texts carefully to planning your writing before you start, will become second nature by the time you sit your exams.</p>`,

  keyStage: 'Key Stage 3',
  yearGroups: 'Years 7-9 (Ages 11-14)',

  sections: [
    {
      heading: 'Reading Comprehension',
      content: `<p>Reading comprehension at KS3 is about far more than simply understanding what a text says on the surface. You will develop four critical reading skills that map directly onto GCSE Assessment Objectives: <strong>inference</strong> (reading between the lines to understand implied meanings), <strong>deduction</strong> (drawing logical conclusions from evidence in the text), <strong>summarising</strong> (distilling key ideas concisely), and <strong>comparing</strong> (identifying similarities and differences across two or more texts).</p>

<p>In Years 7 and 8, the focus is typically on building confidence with a range of text types - fiction extracts, newspaper articles, autobiographies, travel writing, speeches, and more. You will learn to identify a writer's <strong>purpose</strong> (why they wrote the text), <strong>audience</strong> (who they wrote it for), and <strong>perspective</strong> (their viewpoint or attitude). By Year 9, the expectation shifts towards more sophisticated analysis: you should be able to explain <em>how</em> you know something rather than simply stating <em>what</em> you know. This is the crucial leap from description to analysis that separates strong GCSE candidates from average ones.</p>

<p>You will encounter texts from across different time periods, including pre-20th-century writing. Getting comfortable with older styles of English now - longer sentences, unfamiliar vocabulary, different social contexts - will pay enormous dividends when you face 19th-century source texts in your GCSE Language papers and set texts in Literature.</p>`,
      tips: [
        'Read for at least 20 minutes every day - fiction, non-fiction, anything that interests you. The single biggest predictor of GCSE English success is how much you read.',
        'When answering comprehension questions, always use the PEE structure: Point, Evidence (a quotation), Explanation. Get into this habit now and it will feel effortless at GCSE.',
        'Practise inference by asking yourself "How do I know this?" after every claim you make about a text. If you cannot point to specific words or phrases as evidence, your inference is not yet supported.',
        'Keep a vocabulary journal. When you encounter unfamiliar words in your reading, look them up, write them down, and try to use them in your own writing within the next week.',
        'When comparing two texts, use a simple grid: list the similarities in one column and the differences in another, then look for patterns before you start writing.',
      ],
    },
    {
      heading: 'Writing Skills',
      content: `<p>KS3 is where you develop your ability to write confidently across the four main modes: <strong>narrative</strong> (storytelling), <strong>descriptive</strong> (creating vivid pictures with words), <strong>persuasive</strong> (convincing a reader of your viewpoint), and <strong>informative/explanatory</strong> (communicating facts and ideas clearly). At GCSE, you will be assessed on creative writing (narrative/descriptive) and transactional writing (persuasive/informative), so building fluency in all four modes now is essential.</p>

<p><strong>Planning</strong> is the single most undervalued skill at KS3. Many students dive straight into writing without any plan, then wonder why their work lacks structure or runs out of steam halfway through. A simple five-minute plan - noting your opening hook, three or four key paragraphs, and your ending - will transform the quality of your writing. At GCSE, the students who score highest on AO5 (communication and organisation) are almost always the ones who plan effectively.</p>

<p><strong>Paragraphing</strong> is another foundational skill that must become automatic during KS3. Each paragraph should contain one main idea, developed with detail and explanation. Use discourse markers (<em>However, Furthermore, In contrast, Consequently</em>) to link paragraphs and guide your reader through your argument or narrative. Learn to vary paragraph length for effect - a single short sentence can work as a powerful paragraph in creative writing.</p>

<p><strong>Vocabulary</strong> choices distinguish good writing from great writing. At KS3, aim to move beyond your "comfort vocabulary" - the words you always default to - and start incorporating more precise, ambitious language. Instead of "nice," try "amiable," "idyllic," or "gratifying," depending on your exact meaning. Instead of "said," try "asserted," "murmured," or "conceded." Precision is more impressive than complexity: a well-chosen simple word always beats a misused complicated one.</p>`,
      tips: [
        'Always plan before you write. Spend 5 minutes planning for a 30-minute task, or 10 minutes for a longer assignment. A plan is not wasted time - it is invested time.',
        'Practise writing openings. The first sentence of any piece of writing is the most important. Try starting with dialogue, a question, a bold statement, or a vivid sensory detail.',
        'Read your work aloud before submitting it. If you stumble over a sentence, your reader will too. Rewrite anything that does not flow naturally.',
        'Build a "toolkit" of techniques for each writing mode: similes and sensory language for descriptive writing, rhetorical questions and statistics for persuasive writing, dialogue and short sentences for narrative tension.',
        'Learn the difference between formal and informal register, and practise switching between them. GCSE writing tasks specify a purpose and audience - getting the register right is worth significant marks.',
      ],
    },
    {
      heading: 'Shakespeare Introduction',
      content: `<p>For many students, KS3 is their first real encounter with <strong>William Shakespeare</strong>, and it can feel daunting. The language is unfamiliar, the sentence structures are inverted, and the cultural references can seem alien. But here is the truth: Shakespeare wrote for ordinary people - groundlings who paid a penny to stand in the mud - and once you learn to decode his language, his plays are full of humour, drama, love, betrayal, and every human emotion imaginable. KS3 is your chance to build familiarity and confidence before Shakespeare becomes a compulsory element of your GCSE Literature exam.</p>

<p>At KS3, schools typically study a range of Shakespeare's works. Common choices include <strong><em>A Midsummer Night's Dream</em></strong> (a comedy of love and magic, perfect for Year 7), <strong><em>The Tempest</em></strong> (themes of power, forgiveness, and colonialism), <strong><em>Romeo and Juliet</em></strong> (often studied in Year 8 or 9 as a bridge to GCSE), <strong><em>Much Ado About Nothing</em></strong> (witty comedy exploring gender and honour), and <strong><em>Julius Caesar</em></strong> (political power and betrayal). You may not study all of these, but exposure to at least two or three plays across KS3 is standard.</p>

<p>The key to understanding Shakespeare is learning to work with <strong>Early Modern English</strong>. Some practical strategies: read the text aloud (Shakespeare wrote for the ear, not the page), look for the verb in each sentence (it is often in an unexpected position), learn common Shakespearean vocabulary (<em>thee/thou</em> = you, <em>hath</em> = has, <em>doth</em> = does, <em>wherefore</em> = why, <em>ere</em> = before, <em>hence</em> = from here), and do not panic if you do not understand every word - focus on the gist of each speech first, then zoom in on details.</p>

<p>At GCSE, Shakespeare is assessed as a <strong>closed-book extract question</strong> (for all major exam boards), meaning you will be given a passage and asked to analyse it in the context of the wider play. The analytical skills you build at KS3 - identifying dramatic irony, understanding character motivation, recognising how Shakespeare uses language for effect - are exactly what the GCSE question demands.</p>`,
      tips: [
        'Watch a filmed version of any Shakespeare play you study. Seeing the play performed brings the language to life and helps you understand character dynamics that are hard to grasp from the page alone.',
        'Create a character map for each play, noting relationships, motivations, and how characters change. This is invaluable revision material for GCSE.',
        'Learn 10-15 key quotations from each play you study. Even at KS3, getting into the habit of memorising short, punchy quotations will serve you enormously at GCSE when the exam is closed-book.',
        'Do not try to "translate" Shakespeare into modern English word-for-word. Instead, read a speech, summarise the meaning in your own words, then go back and look at how Shakespeare\'s specific word choices create particular effects.',
        'Pay attention to the context: when was the play written, what was happening in England at the time, and how might the original audience have reacted differently from a modern one?',
      ],
    },
    {
      heading: 'Poetry Skills',
      content: `<p>Poetry at KS3 introduces you to one of the most concentrated and powerful forms of writing. Unlike prose, where a writer has pages to develop ideas, a poet must achieve their effects in a compressed space - every single word, every line break, every sound matters. Learning to read and analyse poetry during KS3 builds the close-reading skills that are indispensable at GCSE, where the poetry component typically accounts for around 20-25% of your Literature grade.</p>

<p>You will learn to identify and analyse a range of <strong>poetic techniques</strong>, including: <strong>metaphor</strong> and <strong>simile</strong> (comparisons that create vivid imagery), <strong>personification</strong> (giving human qualities to non-human things), <strong>alliteration</strong> and <strong>sibilance</strong> (repeated sounds for effect), <strong>enjambment</strong> (lines running on without punctuation) and <strong>caesura</strong> (pauses within lines), <strong>rhyme scheme</strong> and <strong>rhythm</strong> (the musical patterns of a poem), and <strong>tone</strong> (the poet's attitude or mood).</p>

<p>Beyond individual techniques, you will learn to consider <strong>form and structure</strong>. Form refers to the type of poem - a sonnet, a ballad, free verse, a dramatic monologue - and how the poet's choice of form contributes to meaning. Structure refers to how the poem is organised: how it begins and ends, how ideas develop or shift across stanzas, and where the poet places the most important images or ideas. At GCSE (particularly AO2), examiners reward students who can discuss structure as confidently as they discuss language.</p>

<p>Common poets studied at KS3 include <strong>William Blake</strong>, <strong>John Keats</strong>, <strong>Maya Angelou</strong>, <strong>Wilfred Owen</strong>, <strong>Simon Armitage</strong>, <strong>Carol Ann Duffy</strong>, and <strong>Benjamin Zephaniah</strong>. You may also encounter poems from other cultures and traditions, broadening your understanding of how poetry works across different contexts and perspectives.</p>`,
      tips: [
        'Read every poem at least three times: once for overall impression, once for meaning, and once for technique. Your understanding will deepen with each reading.',
        'When analysing a technique, always follow the pattern: identify the technique, quote the example, and explain the effect on the reader. Naming a technique without explaining its effect earns minimal credit at GCSE.',
        'Learn the correct terminology now. Saying "the poet uses enjambment to create a sense of breathless urgency" is far more impressive than "the sentence carries on to the next line."',
        'Practise writing your own poetry. You do not need to be a poet to benefit - writing a sonnet teaches you more about the form than any amount of reading about it.',
        'Keep a "poetry anthology" in your exercise book or folder. When you study a poem you find interesting, note down three key quotations and what makes them effective. This becomes a personal revision resource.',
      ],
    },
    {
      heading: 'Spoken English',
      content: `<p>Spoken English is sometimes treated as the "optional extra" of KS3, but it is a vital skill in its own right and has a direct link to GCSE. At GCSE, all major exam boards include a <strong>Spoken Language endorsement</strong> - a separate grade (Pass, Merit, or Distinction) that appears on your certificate alongside your Language grade. While it does not count towards your numerical grade, universities and employers do see it, and the skills it develops - clarity of expression, confidence in argument, ability to adapt to an audience - underpin everything you do in English.</p>

<p>At KS3, Spoken English typically covers three areas: <strong>presentation skills</strong> (delivering a prepared talk or speech to an audience), <strong>group discussion</strong> (contributing to and building on others' ideas in a structured conversation), and <strong>formal speaking</strong> (using Standard English in appropriate contexts, such as debates or interviews). Many schools also incorporate <strong>drama activities</strong> - hot-seating characters, improvisation, and rehearsed performances - which build confidence and deepen understanding of texts.</p>

<p>One of the most valuable things Spoken English teaches is the ability to <strong>think on your feet</strong>. When you present to a class and someone asks an unexpected question, you must formulate a coherent response in real time. When you participate in a debate, you must listen to the opposing argument and respond directly to their points rather than simply repeating your own. These skills are cognitively demanding, and the more you practise them during KS3, the more natural they become.</p>

<p>There is also a strong connection between spoken fluency and writing quality. Students who are confident speakers tend to write with greater fluency, variety, and sense of audience. The ability to "hear" your writing - to sense whether a sentence sounds right, whether the tone is appropriate, whether the rhythm is varied - often develops through sustained practice in spoken communication.</p>`,
      tips: [
        'Volunteer to speak in class whenever you can. The only way to build confidence in spoken English is through practice, and the classroom is a safe environment to take risks.',
        'When preparing a presentation, use cue cards with key words rather than a full script. Reading aloud from a page is not presenting - it is reading. Eye contact, varied tone, and natural delivery are what make a presentation compelling.',
        'In group discussions, practise the skill of building on others\' ideas: "I agree with what Sarah said about... and I would add that..." This shows listening, collaboration, and the ability to develop an argument.',
        'Record yourself speaking (on your phone or computer) and listen back. You will notice habits you were not aware of - filler words like "um" and "like," speaking too quickly, or trailing off at the end of sentences.',
        'Learn the difference between Standard English and non-standard English. You do not need to abandon your natural dialect, but you do need to be able to switch into Standard English for formal contexts - this is what the GCSE endorsement assesses.',
      ],
    },
    {
      heading: 'Grammar & Punctuation',
      content: `<p>Grammar and punctuation - often grouped under the umbrella of <strong>SPaG</strong> (Spelling, Punctuation, and Grammar) - are the technical foundations of all your writing. At GCSE, SPaG is assessed through <strong>AO6</strong>, which is worth 20% of your Language grade in the writing sections. But its impact extends far beyond that: poor grammar and punctuation can obscure your meaning in analytical responses too, costing you marks across both Language and Literature papers. KS3 is the time to master these skills so thoroughly that they become automatic.</p>

<p><strong>Sentence types</strong> are the building blocks. You should be confident using all four types: <strong>simple sentences</strong> (one independent clause - "The door opened."), <strong>compound sentences</strong> (two independent clauses joined by a coordinating conjunction - "The door opened and she stepped inside."), <strong>complex sentences</strong> (an independent clause with one or more dependent clauses - "Although she was nervous, she stepped inside when the door opened."), and <strong>minor sentences</strong> (fragments used deliberately for effect - "Silence. Nothing but silence."). At GCSE, varying your sentence types is explicitly rewarded in the AO6 mark scheme.</p>

<p><strong>Punctuation</strong> at KS3 should go well beyond full stops and commas. You need to master: <strong>semicolons</strong> (to link closely related independent clauses), <strong>colons</strong> (to introduce lists, explanations, or elaborations), <strong>dashes</strong> (for parenthetical information or dramatic effect), <strong>ellipsis</strong> (to suggest trailing off or omission), <strong>apostrophes</strong> (for possession and contraction - and never for plurals), and <strong>speech punctuation</strong> (speech marks, new line for each speaker, comma before the closing speech mark). Examiners report that accurate use of semicolons and colons is one of the clearest markers of a top-band writer at GCSE.</p>

<p><strong>Paragraphing</strong> is a structural skill that many students still struggle with at GCSE. The rule is straightforward: start a new paragraph when you change <strong>T</strong>ime, <strong>T</strong>opic, <strong>T</strong>alker (speaker), or <strong>P</strong>lace (the TTP rule, sometimes expanded to TTTP). In analytical writing, each paragraph should address one point. In creative writing, paragraph breaks also control pace - short paragraphs speed the reader up, long paragraphs slow them down.</p>`,
      tips: [
        'Learn the semicolon rule: a semicolon joins two independent clauses (each could stand alone as a sentence) that are closely related. If you can replace the semicolon with a full stop and both halves still make sense, you have used it correctly.',
        'Practise identifying and correcting common errors: comma splices (using a comma where you need a semicolon or full stop), misused apostrophes (it\'s = it is; its = belonging to it), and subject-verb agreement ("The group of students were" should be "The group of students was").',
        'Write one paragraph each week focusing on a specific punctuation mark you find difficult. Deliberate practice of individual skills is more effective than general writing practice for building accuracy.',
        'When proofreading your work, read it backwards - sentence by sentence, from the end to the beginning. This forces your brain to focus on the mechanics of each sentence rather than getting caught up in the meaning.',
        'Create a personal "error log." Every time a teacher marks a SPaG mistake in your work, record it. After a few weeks, you will see patterns - and you can target those specific weaknesses.',
      ],
    },
  ],

  skillsFramework: [
    {
      area: 'Reading Comprehension',
      skills: [
        'Identifying explicit information in a text',
        'Making inferences from textual evidence',
        'Selecting and synthesising evidence across texts',
        'Summarising key ideas and arguments',
      ],
      gcsePrepTip:
        'AO1 at GCSE requires you to identify and interpret both explicit and implicit information. Use KS3 to build the habit of always supporting every point with a direct quotation - by Year 10, this should be second nature so you can focus on the quality of your interpretation rather than remembering to include evidence.',
    },
    {
      area: 'Language Analysis',
      skills: [
        "Identifying writers' language choices and their effects",
        'Recognising and naming literary and linguistic techniques',
        'Explaining how word choice creates meaning and tone',
        'Using subject terminology accurately in analysis',
      ],
      gcsePrepTip:
        'AO2 is typically the highest-weighted Assessment Objective in GCSE Language and appears across both Language and Literature papers. KS3 is the time to build your vocabulary of subject terminology - learn what a semantic field is, understand connotation versus denotation, and practise explaining effects rather than just identifying techniques. A student who can confidently discuss sibilance, juxtaposition, and pathetic fallacy at the start of Year 10 has a significant advantage.',
    },
    {
      area: 'Comparison',
      skills: [
        'Identifying similarities and differences between texts',
        "Comparing writers' methods and perspectives",
        'Structuring comparative responses effectively',
        'Using comparative connectives with confidence',
      ],
      gcsePrepTip:
        'AO3 requires you to compare writers\' ideas, perspectives, and methods across two or more texts. The most common weakness at GCSE is writing about Text A and then writing about Text B separately, rather than genuinely comparing them. Use KS3 to practise integrated comparison - discuss both texts in every paragraph, using connectives like "Similarly," "In contrast," "While X presents... Y instead suggests...".',
    },
    {
      area: 'Evaluation',
      skills: [
        'Forming and expressing personal opinions about texts',
        'Supporting evaluative judgements with evidence',
        'Considering alternative interpretations',
        "Engaging critically with a writer's choices",
      ],
      gcsePrepTip:
        'AO4 asks you to evaluate texts critically and support your views with textual references. This is often the most challenging AO for GCSE students because it requires a genuine personal response, not just analysis. KS3 is your chance to develop the confidence to say "I think the writer is successful here because..." or "This is less effective because..." - practise forming and defending opinions about everything you read.',
    },
    {
      area: 'Creative Writing',
      skills: [
        'Writing for different purposes and audiences',
        'Organising ideas with effective paragraphing and structure',
        'Using a range of vocabulary for effect',
        'Crafting engaging openings and satisfying conclusions',
        'Adapting tone, style, and register appropriately',
      ],
      gcsePrepTip:
        'AO5 assesses your ability to communicate clearly, effectively, and imaginatively. At GCSE, the writing sections are worth 50% of your Language grade, so this is enormously important. Use KS3 to experiment with different styles and voices. Write short stories, diary entries, speeches, letters, and articles. The wider your range of writing experience, the more adaptable and confident you will be when faced with any GCSE writing prompt.',
    },
    {
      area: 'SPaG (Spelling, Punctuation & Grammar)',
      skills: [
        'Using a range of sentence types for variety and effect',
        'Punctuating accurately including semicolons, colons, and dashes',
        'Spelling accurately including ambitious vocabulary',
        'Paragraphing effectively for coherence and impact',
      ],
      gcsePrepTip:
        'AO6 rewards accuracy and range in your use of vocabulary, sentence structures, spelling, and punctuation. At GCSE, it is worth 20% of the writing mark - but poor SPaG also undermines the clarity of your analytical responses, so its real impact is even greater. The non-negotiable goal for KS3 is to eliminate basic errors (comma splices, apostrophe misuse, homophones) entirely, and to develop confident use of semicolons, colons, and varied sentence structures. These are skills that require years of practice - start now.',
    },
  ],

  transitionToGCSE: {
    heading: 'Making the Leap: From KS3 to GCSE',
    content: `<p>The transition from KS3 to GCSE is one of the most significant academic steps you will take. The content is not radically different - you are still reading, writing, and analysing - but the <strong>expectations</strong> increase sharply. At KS3, you are rewarded for demonstrating understanding; at GCSE, you must demonstrate <strong>analysis</strong>, <strong>evaluation</strong>, and <strong>conceptualised argument</strong>. The difference between a description ("The writer uses a metaphor") and an analysis ("The writer's metaphor of a 'caged bird' evokes the suffocating constraint of oppression, with the verb 'caged' implying imprisonment that is imposed rather than chosen") is the difference between a Grade 4 and a Grade 8.</p>

<p>Year 9 is the critical transition year. Many schools begin GCSE content in Year 9 (starting the set texts for Literature, for example), while others use it as an intensive preparation year. Either way, this is when you should shift your mindset from "learning skills" to "applying skills under pressure." Start timing yourself on practice responses, get used to writing under exam conditions, and begin memorising quotations for the Literature texts you will study.</p>

<p>The biggest shock for most students is the <strong>volume and pace</strong> of GCSE English. You will study a minimum of four set texts for Literature (Shakespeare, a 19th-century novel, a modern text, and a poetry anthology) while simultaneously developing your Language skills across reading and writing. Students who arrive in Year 10 with strong foundational skills - confident close reading, fluent writing, solid SPaG - can focus on refining their exam technique. Students who arrive with gaps in these foundations spend much of Year 10 catching up, and the pressure only intensifies in Year 11.</p>`,
    recommendations: [
      'Start reading more challenging texts in Year 9: 19th-century novels (Dickens, Brontë, Stevenson), literary non-fiction, and quality journalism. The more comfortable you are with complex language and ideas, the easier GCSE will feel.',
      'Build a quotation bank. If your school has already told you which set texts you will study, start reading them over the summer and noting down memorable quotations. Even 10 well-chosen quotations per text will give you a head start.',
      'Practise timed writing. Give yourself 45 minutes to write a creative piece or 20 minutes to write an analytical paragraph. GCSE exams are tightly timed, and learning to write at pace is a skill that takes months to develop.',
      'Identify and address your weaknesses honestly. If your spelling is poor, dedicate 10 minutes a day to learning common misspellings. If your analysis is too descriptive, practise writing "effect on the reader" sentences. Targeted work on specific weaknesses is far more productive than general revision.',
      'Get familiar with the exam board your school uses (AQA, Edexcel, OCR, or WJEC). Each board has a slightly different format, and understanding what each question asks for - before you start Year 10 - gives you a genuine advantage.',
      'Develop the habit of redrafting. At KS3, you can afford to write something, review it, and improve it. At GCSE, you write under timed conditions with no second draft. The only way to produce high-quality first drafts is to have practised the process of improving your writing so many times that you automatically avoid common pitfalls.',
      'Read examiner reports for your exam board (freely available online). These reveal exactly what examiners reward and penalise, and they are written in plain English. Understanding what "conceptualised response" or "judicious use of quotation" actually means in practice will help you target your preparation effectively.',
    ],
  },
}
