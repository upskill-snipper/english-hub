/**
 * christmas-carol-pptx-lessons.ts
 *
 * Three high-quality A Christmas Carol lesson plans for PowerPoint generation.
 * Dickens quotes are public domain — used freely.
 * Uses the LessonPlanData interface from generate-teaching-pdf.
 */

import type { LessonPlanData } from "@/lib/generate-teaching-pdf"

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 1: Introducing Scrooge (Stave 1)
// ═══════════════════════════════════════════════════════════════════════════

const lesson1: LessonPlanData = {
  title: "Introducing Scrooge — Characterisation, Imagery & Dickens's Social Purpose (Stave 1)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "A Christmas Carol — Charles Dickens",
  objectives: [
    "Analyse how Dickens uses a dense accumulation of similes, metaphors, and semantic fields to characterise Scrooge in Stave 1",
    "Explore how Dickens contrasts Scrooge's coldness with the warmth of Christmas to establish the novella's moral framework",
    "Understand Victorian attitudes to poverty, including the Poor Law 1834 and Malthusian economics",
    "Examine how Scrooge's language reveals his values and functions as a vehicle for Dickens's social critique",
    "Begin to develop AO3 contextual arguments linking Scrooge to real Victorian attitudes towards the poor",
  ],
  starterActivity: {
    title: "Name That Character: Cold as...",
    duration: "7 minutes",
    instructions:
      "1. Display the following quotation on the board WITHOUT revealing the source:\n   'Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.'\n2. Students read the quotation silently and write three words to describe the person being described (2 minutes).\n3. Pair-share: compare words. Most common words will likely include: cold, isolated, hard, mean.\n4. Cold-call three pairs. Write their words on the board.\n5. Reveal that this describes Ebenezer Scrooge, the protagonist of A Christmas Carol.\n6. Ask: 'Dickens chose to open his story by making us dislike Scrooge as intensely as possible. Why might an author want the reader to hate the main character from the very first page?'\n7. Cold-call two responses. Introduce the concept: if the reader hates Scrooge at the start, his transformation will be more dramatic and more emotionally satisfying.",
    differentiation: {
      support: "Display the quotation with key words underlined (flint, solitary, oyster). Provide a word bank of descriptive adjectives: miserly, isolated, cold-hearted, bitter, hostile. Ask students to choose three words from the bank and explain their choices.",
      core: "Students generate their own three words independently and explain why Dickens uses such extreme language to introduce his protagonist.",
      stretch: "Students analyse the two similes in the quotation (flint, oyster) in detail: what specific qualities of flint and oysters does Dickens transfer to Scrooge? Why are these natural objects effective choices?",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: Dickens's Portrait of Scrooge (Stave 1 opening paragraphs)",
      duration: "15 minutes",
      instructions:
        "1. Distribute printed extracts from the opening of Stave 1, from 'Marley was dead' to Scrooge's conversation with his nephew Fred.\n2. Teacher reads the extract aloud with relish — Dickens intended this prose to be performed.\n3. Display five annotation tasks on the board. Students annotate in pairs (8 minutes):\n   (a) Highlight every simile and metaphor used to describe Scrooge. How many are there? What is the cumulative effect of so many?\n   (b) Circle words from the semantic field of COLD (e.g. 'cold', 'froze', 'icy', 'nipped'). Why does Dickens associate Scrooge with winter?\n   (c) Underline the sentence: 'The cold within him froze his old features.' What is the 'cold within'? How does Dickens make internal qualities physical?\n   (d) Find where the narrator directly addresses the reader. What effect does this have?\n   (e) Note the contrast between Scrooge and his nephew Fred. What technique is Dickens using? (Foil / juxtaposition)\n4. Cold-call five students, one per task.\n5. Teacher models a key analytical point: 'Dickens uses pathetic fallacy in reverse — Scrooge is so cold that he generates his own personal winter. The weather does not affect him; he affects the weather. The sentence \"He carried his own low temperature always about with him\" makes Scrooge's emotional isolation into a literal, physical force.'\n6. Students copy this model point.",
      differentiation: {
        support: "Provide the extract with key phrases pre-highlighted in three colours: similes (yellow), cold imagery (blue), direct address (green). Include a glossary: simile, metaphor, semantic field, pathetic fallacy, foil, juxtaposition, accumulation.",
        core: "Students annotate independently using the five tasks and copy the model analytical point. Write one original observation about Dickens's language choices.",
        stretch: "Students write a paragraph exploring why Dickens uses ACCUMULATION — piling up simile after simile — rather than a single, elegant description. What is the rhetorical effect of excess? Connect this to Dickens's background as a journalist and public speaker.",
      },
    },
    {
      title: "Scrooge vs the Poor: 'Are There No Prisons?' (Stave 1)",
      duration: "15 minutes",
      instructions:
        "1. Read aloud the scene where two charity collectors visit Scrooge and ask him to donate to the poor.\n2. Display Scrooge's key responses on the board:\n   - 'Are there no prisons?'\n   - 'And the Union Workhouses?... Are they still in operation?'\n   - 'If they would rather die, they had better do it, and decrease the surplus population.'\n3. Context input (3 minutes): explain the Poor Law Amendment Act 1834 and Malthusian economics. Workhouses were designed to be worse than the poorest living conditions so that only the truly desperate would enter. Thomas Malthus argued that poverty was natural and that charity interfered with population control.\n4. Students complete a two-column table (6 minutes):\n   Column 1: What Scrooge says (short quotation)\n   Column 2: What this reveals about Victorian upper-class attitudes to poverty\n5. Class discussion (3 minutes): 'Is Scrooge unusual, or is he representative of a whole class of Victorians? Is Dickens attacking one man or an entire system?'\n6. Teacher makes the key point: 'Scrooge is not a cartoon villain. He is a mouthpiece for real Victorian economic philosophy — Malthusianism. Dickens uses him to dramatise and then demolish the argument that the poor deserve their suffering.'\n7. Students write this point in their books and underline 'mouthpiece' and 'Malthusianism'.",
      differentiation: {
        support: "Provide the two-column table pre-printed with Scrooge's quotations in column 1. Supply sentence starters for column 2: 'This reveals that wealthy Victorians believed... / This echoes Malthus's argument that...' Include a context card explaining the Poor Law and Malthus in simple terms.",
        core: "Students complete both columns independently and participate in the discussion with textual evidence.",
        stretch: "Students write a paragraph arguing that Dickens deliberately makes Scrooge voice Malthusian philosophy so that when Scrooge is redeemed, the philosophy itself is discredited. How does personal transformation become political argument?",
      },
    },
    {
      title: "Exam Practice: Characterisation Paragraph",
      duration: "10 minutes",
      instructions:
        "1. Display the exam-style question: 'How does Dickens present Scrooge as a cold and isolated character in Stave 1?'\n2. Teacher models the topic sentence: 'Dickens constructs Scrooge as an embodiment of emotional and physical coldness, deploying an accumulation of wintry similes and metaphors to make his isolation tangible.'\n3. Students write a full PEEL paragraph (7 minutes) using one quotation from today's lesson.\n4. Quick peer check (2 minutes): partner verifies the paragraph contains a quotation, a technique, and a context link.\n5. One volunteer shares their paragraph aloud.",
      differentiation: {
        support: "Provide a PEEL frame: 'Dickens presents Scrooge as cold and isolated by... For example, he describes Scrooge as \"...\" The word/image ... suggests... Dickens does this because he wants Victorian readers to...'",
        core: "Write a full PEEL paragraph independently with embedded quotation and technique analysis.",
        stretch: "Write a PEEL paragraph and add a second sentence to the Explain section offering an alternative interpretation. For example: 'While \"solitary as an oyster\" suggests isolation, an oyster also contains a pearl — could Dickens be hinting that goodness is hidden inside Scrooge, waiting to be revealed?'",
      },
    },
  ],
  plenary: {
    title: "Prediction: Can This Man Change?",
    instructions:
      "1. Display the question: 'Based on everything you have read in Stave 1, do you think Scrooge is capable of change?'\n2. Students write YES, NO, or MAYBE on mini-whiteboards with one reason.\n3. Hold up boards simultaneously.\n4. Teacher selects one from each category to justify their position.\n5. Introduce the concept: 'Dickens was an optimist. He believed that even the worst people could be redeemed — and that stories had the power to change hearts. A Christmas Carol is his proof.'\n6. Students write one sentence completing: 'Dickens introduces Scrooge as... because he wants to show that even...'",
    differentiation: {
      support: "Provide sentence starters: 'I think Scrooge can/cannot change because...' and 'Dickens introduces him this way because...'",
      core: "Students respond independently with a reason and write the concluding sentence.",
      stretch: "Students consider a meta-literary question: Dickens published A Christmas Carol on 19 December 1843 and it sold 6,000 copies in five days. What does this tell us about how hungry Victorian readers were for a story about redemption? Why might this message have been so needed?",
    },
  },
  keyVocabulary: [
    "characterisation — the methods an author uses to create and develop a character",
    "simile — a comparison using 'like' or 'as' (e.g. 'hard and sharp as flint')",
    "metaphor — a comparison that describes one thing as if it were another",
    "semantic field — a group of words related to the same topic (e.g. cold: froze, icy, nipped)",
    "accumulation — the piling up of words, images, or details for rhetorical effect",
    "pathetic fallacy — attributing human emotions to weather, nature, or inanimate objects",
    "foil — a character who contrasts with another to highlight their qualities (Fred vs Scrooge)",
    "Malthusian economics — the belief that poverty is natural and charity interferes with population balance",
    "workhouse — a Victorian institution where the destitute were housed in harsh conditions",
    "Poor Law 1834 — legislation that made workhouses the only form of poor relief, designed to be punitive",
    "surplus population — Scrooge's Malthusian phrase suggesting the poor are expendable",
    "novella — a short novel, typically focused on a single theme or character arc",
    "mouthpiece — a character used by the author to voice a particular philosophy or viewpoint",
    "redemption — the act of being saved from sin, error, or moral failure",
    "didactic — intended to teach or convey a moral lesson",
  ],
  resourcesNeeded: [
    "Printed extracts from Stave 1 (opening description of Scrooge through to the charity collectors scene)",
    "Projector for starter quotation, annotation tasks, context slides, and exam question",
    "Two-column table handout for the Scrooge vs the Poor activity",
    "Context card explaining the Poor Law 1834 and Malthusian economics (support tier)",
    "Glossary handout for support-tier students",
    "PEEL paragraph frame for support-tier students",
    "Mini-whiteboards and pens for plenary",
  ],
  homework:
    "Write a 200–250 word response to the question:\n'How does Dickens use language to make the reader dislike Scrooge in Stave 1?'\n\nSuccess criteria:\n- Include at least two embedded quotations from Stave 1\n- Identify and analyse at least two language techniques (e.g. simile, metaphor, semantic field, accumulation)\n- Explain the effect of Dickens's language choices on the reader\n- Include one AO3 sentence linking Scrooge's attitudes to Victorian economic philosophy\n- Use PEEL structure and formal academic register",
  teacherNotes: [
    "The opening description of Scrooge is the most commonly examined extract in AQA Christmas Carol papers. Students should be able to analyse at least three of the similes/metaphors from memory. Drill these: 'hard and sharp as flint', 'solitary as an oyster', 'the cold within him froze his old features'.",
    "The Malthus/Poor Law context is essential for AO3 and is consistently the weakest element of student responses. Spend time making it concrete: explain what a workhouse actually looked like, what 'surplus population' really means. Students who understand this context produce dramatically better essays.",
    "Dickens's prose is designed for oral performance — he toured and read his works aloud to huge audiences. Read the opening with theatrical energy. If you read it flat, students will treat the language as dead text. If you perform it, they hear how alive and witty it is.",
    "The 'oyster' simile is rich for stretch students: oysters are sealed shut, hidden inside a hard shell, but contain something precious. This could foreshadow Scrooge's redemption — the goodness hidden within the hardness.",
    "Common misconception: students often write that Dickens 'hates' Scrooge. Redirect this — Dickens creates Scrooge with enormous energy and evident enjoyment. The point is not that Scrooge is hateful but that his philosophy is wrong, and Dickens will prove it wrong through the story.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 2: Ghosts and Redemption (Staves 2–4)
// ═══════════════════════════════════════════════════════════════════════════

const lesson2: LessonPlanData = {
  title: "Ghosts and Redemption — Transformation Arc, Symbolism & the Supernatural (Staves 2–4)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "A Christmas Carol — Charles Dickens",
  objectives: [
    "Analyse how Dickens uses the three ghosts as structural devices to engineer Scrooge's transformation",
    "Explore how each ghost represents a different aspect of moral education: memory, empathy, and consequence",
    "Examine key moments of Scrooge's emotional change and the language Dickens uses to convey them",
    "Understand how the novella's structure (past, present, future) mirrors the Christian concept of repentance",
    "Evaluate whether Scrooge's transformation is psychologically convincing or morally didactic",
  ],
  starterActivity: {
    title: "Three Lessons: What Would Change You?",
    duration: "6 minutes",
    instructions:
      "1. Display the question: 'If you could be shown three things to make you a better person, what would they be?'\n2. Offer the framework: (a) Something from your PAST, (b) Something happening in the PRESENT, (c) Something about your FUTURE.\n3. Students write their three choices silently for 2 minutes.\n4. Pair-share for 2 minutes.\n5. Cold-call two students to share.\n6. Teacher bridges: 'Dickens designed the three ghosts to deliver exactly this education: Past (memory and regret), Present (empathy and awareness), Future (fear and consequence). Each ghost teaches Scrooge — and the reader — a different lesson about how to live.'\n7. Display the structure diagram: Stave 2 = Past, Stave 3 = Present, Stave 4 = Future, Stave 5 = Transformation.",
    differentiation: {
      support: "Provide sentence starters: 'From my past, I would want to be shown... because... In the present, I would want to see... For my future, I would want to know...' Display a simple diagram of the three ghosts with labels.",
      core: "Students write their three choices independently and explain how a personal revelation might change someone's behaviour.",
      stretch: "Students consider why Dickens chose THIS order (past → present → future). What would change if the ghosts visited in a different order? Why must fear of the future come last?",
    },
  },
  mainActivities: [
    {
      title: "Ghost of Christmas Past: Memory and Regret (Stave 2 key extracts)",
      duration: "15 minutes",
      instructions:
        "1. Teacher provides a brief summary of Stave 2: the Ghost shows Scrooge his childhood loneliness, his apprenticeship with the kind Fezziwig, and the moment Belle breaks off their engagement.\n2. Display three key quotations from Stave 2 on the board:\n   (a) 'A solitary child, neglected by his friends, is left there still.' (Scrooge sees his younger self)\n   (b) Fezziwig's party: 'the happiness he gives, is quite as great as if it cost a fortune'\n   (c) Belle's farewell: 'Another idol has displaced me... A golden one.'\n3. Students annotate each quotation (6 minutes):\n   - What does Scrooge feel when he sees each memory?\n   - What lesson is the Ghost teaching him?\n   - What technique does Dickens use? (e.g. juxtaposition, symbolism, direct speech)\n4. Class discussion (4 minutes): 'The Ghost does not lecture Scrooge — it simply SHOWS him. Why is showing more powerful than telling?'\n5. Key point on the board: 'The Ghost of Christmas Past forces Scrooge to confront the human cost of his choices. By seeing himself as a lonely child, Scrooge reconnects with vulnerability — the emotional capacity he has suppressed. Dickens suggests that memory is the first step toward moral recovery.'\n6. Students copy this point.",
      differentiation: {
        support: "Provide the three quotations on cards with guided questions printed beneath each: 'Who is speaking? What does Scrooge remember? How does he react? What word/phrase is most powerful and why?'",
        core: "Students annotate all three quotations independently, identifying technique and effect for each.",
        stretch: "Students compare Fezziwig to Scrooge as employers. Write a paragraph: 'How does Dickens use Fezziwig as a moral contrast to Scrooge?' Consider Fezziwig's generosity as a model for the kind of employer Dickens wants his readers to become.",
      },
    },
    {
      title: "Ghost of Christmas Present: Empathy and the Cratchits (Stave 3 key extracts)",
      duration: "12 minutes",
      instructions:
        "1. Brief summary of Stave 3: the Ghost shows Scrooge the Cratchit family's Christmas dinner, Tiny Tim's illness, and poverty across London.\n2. Display two key quotations:\n   (a) Tiny Tim: 'God bless us, every one!'\n   (b) The Ghost echoes Scrooge's own words back at him: 'If he be like to die, he had better do it, and decrease the surplus population.'\n3. Students answer in their books (5 minutes):\n   - Why does Dickens give Tiny Tim such a famous line? What does it represent?\n   - What is the effect of throwing Scrooge's own words back at him? How does this use dramatic irony?\n   - What lesson is the Ghost of Christmas Present teaching Scrooge?\n4. Teacher draws out the key point: 'Dickens weaponises Scrooge's own language against him. When the Ghost quotes back the phrase \"surplus population\", Scrooge is forced to hear how his Malthusian philosophy sounds when applied to a real, named, lovable child. The abstract becomes personal — and that is when Scrooge begins to crack.'\n5. Students copy this point and underline 'the abstract becomes personal'.",
      differentiation: {
        support: "Provide a guided response frame: 'Tiny Tim represents... because... When the Ghost quotes Scrooge's own words, the effect is... because... The lesson the Ghost teaches is...'",
        core: "Students answer all three questions independently and copy the key point.",
        stretch: "Students write a paragraph evaluating Dickens's use of Tiny Tim: is he a convincing character, or is he a sentimental device designed to manipulate the reader's emotions? Can both be true? Does sentimentality weaken or strengthen Dickens's social argument?",
      },
    },
    {
      title: "Ghost of Christmas Yet to Come: Fear and Transformation (Stave 4 & 5)",
      duration: "12 minutes",
      instructions:
        "1. Brief summary of Stave 4: the silent, hooded Ghost shows Scrooge people celebrating his death, his belongings being sold by thieves, and finally his own grave. Stave 5: Scrooge wakes, transformed.\n2. Display two key quotations:\n   (a) Stave 4: 'Spirit!... hear me! I am not the man I was.'\n   (b) Stave 5: 'I will honour Christmas in my heart, and try to keep it all the year.'\n3. Students write a comparison paragraph (8 minutes):\n   'How has Scrooge changed between Stave 1 and Stave 5? What language shows this transformation?'\n4. Quick share (3 minutes): two volunteers read their paragraphs.\n5. Teacher consolidation: 'Dickens structures the novella as a moral education. Each Ghost strips away one layer of Scrooge's defences: Past removes his emotional numbness, Present removes his ignorance of others' suffering, Future removes his sense of invulnerability. Only when all three defences are gone can redemption occur.'",
      differentiation: {
        support: "Provide a comparison table: Column 1 = Scrooge in Stave 1 (cold, miserly, isolated), Column 2 = Scrooge in Stave 5. Students complete Column 2 and write a paragraph using sentence starters: 'In Stave 1, Scrooge was... whereas by Stave 5, he has become... Dickens shows this change through...'",
        core: "Students write a comparison paragraph independently, referring to both Stave 1 and Stave 5 with at least one quotation from each.",
        stretch: "Students evaluate: is Scrooge's transformation believable? Can a person really change overnight? Or is Dickens more interested in the symbolic/moral lesson than psychological realism? What does this tell us about the novella's genre (moral fable vs realistic fiction)?",
      },
    },
  ],
  plenary: {
    title: "Which Ghost Is Most Effective?",
    instructions:
      "1. Display the question: 'Which ghost is most responsible for Scrooge's transformation? Past, Present, or Future?'\n2. Students vote by standing in three corners of the room (or by holding up 1, 2, or 3 fingers).\n3. Teacher takes a quick tally and identifies the majority.\n4. Ask one student from the minority to argue their case — why do they disagree?\n5. Final reflection (1 minute): students write one sentence: 'The most important lesson Dickens teaches through the ghosts is...'",
    differentiation: {
      support: "Provide a cue card with one argument for each ghost's effectiveness. Students choose and explain using the stem: 'I think the Ghost of Christmas... is most effective because...'",
      core: "Students vote, justify their choice with textual evidence, and write a concluding sentence.",
      stretch: "Students argue that the question is flawed — the ghosts work as a SYSTEM, not individually. Each one would fail without the others. What is the literary term for a structure where each part builds on the last? (cumulative structure / rising action)",
    },
  },
  keyVocabulary: [
    "transformation arc — the journey of change a character undergoes across a narrative",
    "redemption — the act of being saved from sin, error, or moral failure; Scrooge's central journey",
    "allegory — a story in which characters and events represent broader moral or political ideas",
    "morality tale — a narrative designed to teach right from wrong through character and plot",
    "supernatural — events or beings beyond natural explanation; the ghosts as agents of change",
    "repentance — genuine remorse for past wrongdoing and commitment to change",
    "juxtaposition — placing two contrasting elements together for dramatic effect",
    "foil — a character who highlights another's qualities through contrast (Fezziwig vs Scrooge)",
    "sentimentality — an appeal to tender emotions, sometimes criticised as manipulative",
    "Malthusian — relating to the philosophy that poverty is natural and charity is harmful",
    "didactic — intended to teach a moral or political lesson",
    "pathos — a quality that evokes pity, sadness, or compassion in the reader",
    "symbolism — using concrete objects or characters to represent abstract ideas",
    "cumulative structure — a narrative design where each section builds upon the emotional impact of the previous",
    "moral education — the process of learning right from wrong through experience or instruction",
  ],
  resourcesNeeded: [
    "Printed key quotation cards for Staves 2, 3, and 4 (three sets per student or per pair)",
    "Projector for structure diagram, quotation displays, and discussion prompts",
    "Comparison table handout for support-tier students (Stave 1 vs Stave 5)",
    "Guided response frame for support-tier students",
    "Glossary handout for support-tier students",
    "Mini-whiteboards for plenary voting (if not using corners method)",
  ],
  homework:
    "Write a 250-word response to the question:\n'How does Dickens use the three ghosts to change Scrooge?'\n\nSuccess criteria:\n- Refer to all three ghosts, dedicating roughly equal attention to each\n- Include at least one embedded quotation per ghost\n- Explain what each ghost teaches Scrooge (memory, empathy, consequence)\n- Analyse at least one language technique\n- Include one AO3 sentence linking the story's structure to its moral purpose\n- Use PEEL structure and formal academic register",
  teacherNotes: [
    "This lesson covers a lot of ground (three staves). Prioritise depth over breadth — if one section runs short, extend the Ghost of Christmas Present section (the Cratchits and Tiny Tim), as this is the most frequently examined.",
    "The 'surplus population' echo is one of the most powerful moments in the novella for exam purposes. It combines dramatic irony, characterisation, AO3 context (Malthus), and structural patterning. Train students to deploy it in any essay about Scrooge, ghosts, or the theme of responsibility.",
    "Tiny Tim is often dismissed by students as 'just a cute kid'. Challenge this — he is a carefully crafted political symbol. Dickens makes him lovable so that the reader cannot accept Malthusian arguments about surplus population when applied to a real child. Sentimentality here is a political weapon.",
    "The transformation debate is worth investing in because evaluative arguments score highest on AO1. Students who can discuss whether the transformation is 'convincing' or 'symbolic' demonstrate critical sophistication.",
    "Pace tip: use a timer visible to students for each activity. This lesson has three main activities covering three staves — tight time management is essential.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 3: Dickens's Message — Context, Social Criticism & Legacy
// ═══════════════════════════════════════════════════════════════════════════

const lesson3: LessonPlanData = {
  title: "Dickens's Message — Victorian Context, Social Criticism & the Power of Literature",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "A Christmas Carol — Charles Dickens",
  objectives: [
    "Understand Dickens's personal background and how it shaped his social and political convictions",
    "Analyse how A Christmas Carol functions as a vehicle for social reform, not merely a ghost story",
    "Explore the allegorical significance of Ignorance and Want (Stave 3) as Dickens's most direct political statement",
    "Evaluate the extent to which A Christmas Carol changed Victorian attitudes to poverty and charity",
    "Develop AO3 contextual arguments that integrate seamlessly into literary analysis",
  ],
  starterActivity: {
    title: "The Author Behind the Story",
    duration: "7 minutes",
    instructions:
      "1. Display three facts about Dickens's life on the board (without naming him):\n   (a) At age 12, he was sent to work in a boot-blacking factory while his father was imprisoned for debt.\n   (b) He visited Manchester's slums and London's ragged schools in 1843 and was horrified by what he saw.\n   (c) He wrote an entire novel in six weeks, published it at his own expense on 19 December 1843, and it sold 6,000 copies in five days.\n2. Students guess: who is this person? (Most will know — confirm it is Charles Dickens.)\n3. Key question: 'How might these experiences have affected the kind of stories Dickens chose to write?'\n4. Cold-call three students.\n5. Teacher consolidation: 'Dickens did not write A Christmas Carol for entertainment. He wrote it as a weapon — a deliberate, strategic attack on the political and economic systems that kept millions of people in poverty. Understanding this purpose is essential for AO3.'",
    differentiation: {
      support: "Provide a biography card with five key facts about Dickens's life in bullet-point form. Students highlight the fact they think most influenced A Christmas Carol and explain their choice.",
      core: "Students infer connections between Dickens's experiences and the novella independently, offering verbal explanations.",
      stretch: "Students consider why Dickens chose fiction rather than a political pamphlet or newspaper article. What can a story do that an argument cannot? Why is Scrooge more persuasive than a speech in Parliament?",
    },
  },
  mainActivities: [
    {
      title: "Ignorance and Want: Dickens's Most Direct Political Statement (Stave 3)",
      duration: "15 minutes",
      instructions:
        "1. Read aloud the passage from Stave 3 where the Ghost of Christmas Present reveals two emaciated children beneath his robes: Ignorance and Want.\n2. Display the key quotation on the board:\n   'They are Man's... This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom.'\n3. Explain: these are not literal children. They are ALLEGORY — abstract concepts given physical form.\n4. Students annotate the passage in pairs (6 minutes). Focus questions:\n   (a) Why does Dickens name them Ignorance and Want? What do these words mean in context?\n   (b) Why is Ignorance more dangerous than Want? What is Dickens saying about education?\n   (c) Who are 'Man's' children? (All of humanity — Dickens makes poverty everyone's responsibility.)\n   (d) The Ghost echoes Scrooge's phrase: 'Are there no prisons? Are there no workhouses?' What is the effect?\n5. Cold-call three pairs for their strongest annotations.\n6. Teacher makes the key point: 'This is the moment where Dickens drops the fictional mask entirely. He is speaking directly to his middle-class readership: these children are YOUR responsibility. Ignorance — failure to educate the poor — will destroy society. Dickens predicted that if the rich continued to ignore poverty, revolution or social collapse would follow.'\n7. Students copy this point.",
      differentiation: {
        support: "Provide the passage with key phrases underlined and a glossary defining: allegory, Ignorance (lack of knowledge/education), Want (poverty/deprivation), Doom. Supply guided questions on a card.",
        core: "Students annotate independently and write the key point. Explain in their own words why Dickens personifies poverty as children.",
        stretch: "Students write a paragraph connecting Ignorance and Want to the wider context of Victorian education reform. Dickens was a campaigner for ragged schools — free schools for destitute children. How does this passage function as propaganda for education reform?",
      },
    },
    {
      title: "Context Integration Workshop: Weaving AO3 into Analysis",
      duration: "15 minutes",
      instructions:
        "1. Display two student paragraphs on the board — one with bolted-on context ('In Victorian times, people were poor. Dickens shows this through Scrooge.') and one with integrated context ('Dickens positions Scrooge as a mouthpiece for Malthusian economics — the callous philosophy that \"surplus population\" should be left to die — only to systematically dismantle it through the Cratchits' humanity.').\n2. Ask: 'Which paragraph would score higher? Why?' Class discussion (3 minutes).\n3. Teacher explains the difference: bolted-on context sits in a separate sentence and does not connect to the quotation or technique. Integrated context weaves historical understanding into the language analysis itself.\n4. Students receive a handout with four context facts:\n   (a) The Poor Law 1834 and workhouse conditions\n   (b) Malthusian economics and 'surplus population'\n   (c) Dickens's childhood in the blacking factory\n   (d) The publication context — Christmas 1843, sold out in five days\n5. Students choose one context fact and write a PEEL paragraph that integrates it into an analysis of a Stave 1 quotation (8 minutes).\n6. Two volunteers share their paragraphs. Class identifies where the context appears — is it bolted on or integrated?",
      differentiation: {
        support: "Provide a paragraph frame that models integration: 'Dickens uses [quotation] to [technique], which reflects the Victorian [context]. This suggests that Dickens wanted his readers to [purpose]...' Students follow the frame with their chosen context fact.",
        core: "Students write a PEEL paragraph independently, choosing their own context fact and quotation. Teacher checks for integration during circulation.",
        stretch: "Students write two paragraphs: one with deliberately bolted-on context and one with seamlessly integrated context. They then annotate both to explain why the second is more effective. This metacognitive exercise builds exam awareness.",
      },
    },
    {
      title: "Whole-Text Argument: What Is Dickens's Message?",
      duration: "10 minutes",
      instructions:
        "1. Display the exam-style question: 'What is Dickens's message in A Christmas Carol, and how does he convey it?'\n2. Teacher models a thesis statement: 'Dickens's central message is that wealth carries moral responsibility, and that the deliberate ignorance of poverty is a greater sin than poverty itself. He conveys this through Scrooge's transformation from Malthusian mouthpiece to generous benefactor.'\n3. Students write their own thesis statement in ONE sentence (3 minutes).\n4. Pair-share: read thesis statements aloud. Partner identifies: (a) Is the message clear? (b) Is there a reference to how Dickens conveys it?\n5. Four volunteers share their thesis statements with the class. Teacher identifies the strongest and explains why.",
      differentiation: {
        support: "Provide a thesis template: 'Dickens's message is that... He conveys this by using [character/ghost/structure] to show that...'",
        core: "Students write an independent thesis statement that includes both the message and the method.",
        stretch: "Students write two contrasting thesis statements — one focused on personal morality ('individuals must be generous') and one focused on systemic critique ('the economic system must change'). Which reading does the text better support? This mirrors the kind of evaluative question that appears at the top of the mark scheme.",
      },
    },
  ],
  plenary: {
    title: "Still Relevant? Dickens in the 21st Century",
    instructions:
      "1. Display the question: 'Is A Christmas Carol still relevant today?'\n2. Students write three bullet points: one way the novella IS still relevant, one way it might NOT be, and one thing that surprises them about the text.\n3. Quick share: cold-call three students.\n4. Teacher's closing point: 'A Christmas Carol has never gone out of print since 1843. It has been adapted more than any other English novel. Its message — that we are responsible for each other — is the same message Priestley wrote into An Inspector Calls a century later. Great literature endures because it speaks to something permanent in human nature.'\n5. Students write one sentence in their books: 'The most important thing I have learned about Dickens's message is...'",
    differentiation: {
      support: "Provide prompts for each bullet point: 'The novella is still relevant because today we still see... / It might not be relevant because... / I was surprised that...'",
      core: "Students write three bullet points independently and share verbally.",
      stretch: "Students write a short paragraph connecting A Christmas Carol to a modern issue (food banks, homelessness, cost-of-living crisis). How would Dickens respond? What would a modern Scrooge look like?",
    },
  },
  keyVocabulary: [
    "allegory — a story in which characters and events represent abstract ideas or moral qualities",
    "social criticism — writing that exposes and challenges injustice, inequality, or corruption in society",
    "philanthropy — the desire to promote the welfare of others, especially through charitable donations",
    "Malthusian economics — the theory that poverty is inevitable and charity disrupts natural population control",
    "workhouse — a Victorian institution providing harsh shelter and labour for the destitute poor",
    "ragged school — a free school for destitute children; a cause Dickens championed",
    "authorial purpose — the reason an author writes a text; what they want to achieve or change",
    "didactic — intended to teach a moral lesson",
    "propaganda — material designed to promote a particular political cause or point of view",
    "integrated context — embedding historical/social understanding within literary analysis rather than as a separate section",
    "thesis statement — a single sentence that presents the central argument of an essay",
    "mouthpiece — a character used to voice the author's or a philosophy's views",
    "reform — the improvement of social or political conditions through legislation or action",
    "personification — representing an abstract idea as a human figure (Ignorance and Want as children)",
    "legacy — the lasting impact of a person's work or actions",
  ],
  resourcesNeeded: [
    "Printed extract: Ignorance and Want passage from Stave 3 (one per student)",
    "Projector for biography facts, quotation displays, model paragraphs, and exam question",
    "Context facts handout with four key facts for the integration workshop",
    "Model paragraph comparison handout (bolted-on vs integrated context)",
    "PEEL paragraph frame for support-tier students",
    "Biography card for support-tier students",
    "Glossary handout for support-tier students",
  ],
  homework:
    "Write a 300-word essay response to the question:\n'How does Dickens use A Christmas Carol to criticise Victorian attitudes to poverty?'\n\nSuccess criteria:\n- Present a clear thesis statement in your opening sentence\n- Refer to at least two different staves of the novella\n- Include embedded quotations with technique analysis (AO2)\n- Integrate Victorian context (Poor Law, Malthus, workhouses) into your analysis, not as a separate section (AO3)\n- Discuss Dickens's authorial purpose — what did he want to achieve with this novella?\n- Use PEEL paragraphs and formal academic register\n- Include a concluding sentence that returns to the question",
  teacherNotes: [
    "The Ignorance and Want passage is extremely high-value for exams. It can be used for questions about the supernatural, social responsibility, Dickens's message, and the theme of poverty. Students should memorise the names and the Ghost's warning about 'Doom' on Ignorance's brow.",
    "The context integration workshop is the most important skill-building activity in this lesson. Students lose marks every year for 'bolted-on' context. Practise the difference explicitly — it is a learnable technique, not an innate talent.",
    "Dickens's biography should be handled carefully: the point is not to write a biography in an exam, but to understand HOW personal experience shaped the text. The blacking factory made Dickens empathise with child poverty. The ragged schools made him believe in education as the solution. These are not background — they are the engine of the novella.",
    "The 'still relevant?' plenary is designed to develop the evaluative thinking needed for top-band AO1. Students who can argue that the text both is and is not relevant show critical sophistication.",
    "Cross-text connection: if students are also studying An Inspector Calls, draw the parallel explicitly — both texts argue that we are responsible for each other, both use a supernatural figure to deliver the message, and both were written in response to social inequality. This comparison can strengthen answers for either text.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export const christmasCarolPptxLessons: LessonPlanData[] = [
  lesson1,
  lesson2,
  lesson3,
]
