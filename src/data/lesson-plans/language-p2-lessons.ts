// @ts-nocheck
import type { LessonPlan } from "../../types";

// ─── Original Source Texts ───────────────────────────────────────────────────

const SOURCE_MODERN_SCHOOL_UNIFORMS = `Source A: 'Why School Uniforms Are Holding Students Back' — an article by journalist Priya Khatri, published in The Daily Perspective, 2023.

Every morning, millions of teenagers across Britain pull on the same blazer, knot the same tie, and shuffle through the same school gates looking virtually identical. We are told this promotes equality. I would argue it promotes conformity — and that is not the same thing.

Proponents of school uniform claim it removes visible markers of wealth, preventing bullying based on clothing. Yet anyone who has spent five minutes in a secondary school knows that status is signalled through shoes, bags, phones, and hairstyles. Uniform does not eliminate inequality; it merely disguises it beneath a thin polyester veneer.

More troublingly, uniform policies disproportionately punish students from disadvantaged backgrounds. A family struggling to afford a branded blazer costing sixty pounds faces isolation rooms and detentions when their child arrives in the wrong shade of grey. How does this promote equality? It entrenches it.

Furthermore, adolescence is a critical period for identity formation. Psychologists consistently emphasise the importance of self-expression during these years. Stripping young people of the right to choose what they wear sends a clear message: your individuality does not matter here. We want compliance, not creativity.

Some will argue that uniform prepares students for the workplace. But the modern workplace is moving rapidly away from rigid dress codes. Tech companies, creative industries, and even many law firms now embrace individual style. We are preparing students for a world that no longer exists.

It is time we trusted young people to dress themselves — and focused our energy on what actually matters: the quality of their education.`;

const SOURCE_19C_SCHOOL_UNIFORMS = `Source B: 'On the Dress of Scholars' — an extract from an address by Reverend Thomas Hartwell, Headmaster of St Edmund's Grammar School, published in The Educational Review, 1876.

It has long been my firm conviction that the dress of a scholar ought to reflect the discipline of his mind. A boy who arrives at his lessons in slovenly attire cannot be expected to apply himself with the rigour that learning demands. The uniform of our school — the dark coat, the white collar, the cap worn at the proper angle — these are not mere garments. They are the outward expression of an inward commitment to order and self-improvement.

I have observed, over thirty years of teaching, that those schools which permit their pupils to dress as they please invariably suffer from a laxity of conduct that pervades every aspect of their institution. Where there is no standard of appearance, there is soon no standard of behaviour. The boy who chooses his own coat believes he may also choose his own rules.

There are those who argue that such regulations are oppressive — that they crush the spirit of the young. I say this is sentimental nonsense. A child's spirit is not found in his waistcoat. It is found in his character, his perseverance, and his willingness to submit to that which is greater than himself. The uniform teaches him that he belongs to something beyond his own small desires: a community, a tradition, a purpose.

Let us not be swayed by modern fancies which place the whims of children above the wisdom of their elders. The uniform endures because it works. It moulds boys into men of discipline, and I see no reason to abandon a practice which has served this nation admirably for generations.`;

const SOURCE_MODERN_TECHNOLOGY = `Source A: 'Screen Time Is Stealing Childhood' — an opinion piece by Dr Hannah Lowe, published in The Guardian Weekend, 2024.

Walk into any restaurant, any waiting room, any family gathering, and you will see the same scene: children hunched over glowing screens, thumbs twitching, eyes glazed, utterly disconnected from the world around them. We have sleepwalked into a crisis, and most parents are too exhausted — or too addicted themselves — to notice.

The statistics are staggering. The average British teenager now spends over seven hours a day on screens outside of school. That is nearly half their waking life consumed by algorithmic feeds designed by Silicon Valley engineers whose explicit goal is to maximise engagement — which is a polite way of saying addiction.

The consequences are already visible. Rates of anxiety and depression among young people have doubled since 2010 — the year the smartphone became ubiquitous. Attention spans have shortened dramatically. Teachers report that students increasingly cannot sustain focus for more than a few minutes without reaching for a device.

But perhaps most devastating is what screen time replaces. Every hour spent scrolling is an hour not spent climbing trees, reading books, arguing with siblings, or simply being bored — and boredom, as any psychologist will tell you, is the birthplace of creativity.

I am not suggesting we ban technology entirely. That would be foolish and impractical. But we must recognise that giving a child unlimited access to a smartphone is not neutral. It is a choice with profound consequences. We owe our children boundaries — even when they protest, even when it is inconvenient, even when every other parent seems to have surrendered.`;

const SOURCE_19C_TECHNOLOGY = `Source B: 'The Railway and Its Discontents' — an extract from a letter by Mr Edward Ashworth to The Times, 1847.

Sir, — I write to express my deep unease at the manner in which the railway is transforming the habits and character of our nation. I do not deny its utility in matters of commerce; goods may now travel distances in hours which formerly required days, and this is undoubtedly convenient. But I fear we have embraced this mechanical marvel without pausing to consider what it is taking from us.

The stagecoach journey, for all its discomforts, was an education in patience and in the art of conversation. Travellers were compelled to speak with one another, to share stories, to observe the changing landscape through which they passed. The railway passenger, by contrast, sits in sullen isolation, buried in his newspaper, hurtling through countryside he never sees.

I observe, too, that the railway has bred a most unhealthy restlessness in the population. Young men who once found contentment in the village of their birth now speak of nothing but London. Families are scattered. Communities are hollowed out. The ancient rhythms of rural life, governed by seasons and sustained by proximity, are being dismantled in favour of speed and novelty.

My neighbours assure me that progress cannot be halted, and perhaps they are right. But I would ask them this: when we have made everything faster, when we have connected every town and city with iron rails, shall we find ourselves happier? Or shall we discover, too late, that in our haste to go everywhere, we have lost the ability to be content anywhere?`;

const SOURCE_MODERN_TRAVEL = `Source A: 'Why I Quit Tourism' — a blog post by travel writer Marcus Chen, published on The Honest Nomad, 2023.

Last summer, I stood in the Sistine Chapel shoulder to shoulder with three hundred other tourists, all holding phones above their heads, all recording the ceiling through a screen, and I thought: what are we actually doing here? Nobody was looking up. Nobody was experiencing anything. We were all just collecting evidence that we had been somewhere, to post on social media for people who would scroll past it in two seconds.

That was the moment I quit tourism. Not travel — tourism. There is a difference, and it matters.

Tourism is an industry built on the commodification of place. It takes a living city — Barcelona, Venice, Dubrovnik — and converts it into a backdrop for selfies. It drives out local residents, inflates housing costs, fills streets with identical souvenir shops, and leaves behind a trail of plastic waste and resentment. The places we claim to love are being destroyed by our love for them.

I have spent fifteen years writing about destinations, and I have watched this transformation accelerate beyond recognition. Villages in Bali that once sustained themselves through fishing now survive entirely on Instagram influencers seeking the perfect sunrise photograph. The culture becomes a performance. The authenticity we seek is manufactured for our consumption.

Travel, by contrast, requires humility. It means arriving without expectations, learning the language badly, eating what locals eat, and accepting that you are a guest — not a customer. It means being uncomfortable, being lost, and allowing a place to change you rather than demanding it perform for you.`;

const SOURCE_19C_TRAVEL = `Source B: 'Recollections of the Italian Journey' — an extract from the journal of Miss Charlotte Baines, published privately, 1863.

We arrived in Florence on the fourteenth of April, after a journey of some three weeks from Dover. I confess that the fatigue of travel had worn considerably upon my spirits, for the roads through the Alps were treacherous and our carriage suffered a broken axle near the village of Lanslebourg, which detained us for two full days. Yet I would not exchange a single discomfort for the reward that awaited us.

Florence revealed herself gradually, as all great cities should. We approached through olive groves silvered by morning light, and I caught my first glimpse of the cathedral dome rising above the terracotta rooftops with a gasp that I could not suppress. My companion, Mrs Hadley, who has made this journey before, smiled at my astonishment and said simply: "Wait until you see it at sunset."

She was right. Nothing I had read, no engraving I had studied, could have prepared me for the reality of this city. The paintings in the Uffizi Gallery moved me to tears — not from sentimentality, but from the sheer overwhelming evidence of human genius gathered in one place. I stood before Botticelli's Venus and felt the centuries collapse. The woman who painted — or rather, who was painted — five hundred years ago seemed to breathe.

I am aware that travel of this kind is a privilege afforded to few, and I do not take it lightly. But I believe firmly that those who can travel ought to do so, for it enlarges the soul in ways that no book, however brilliant, can replicate. To see the world is to understand, at last, how small and how magnificent one's own place within it truly is.`;

const SOURCE_MODERN_FOOD = `Source A: 'The Hidden Cost of Cheap Food' — an article by food journalist Amara Osei, published in The Independent, 2024.

The British supermarket is a masterpiece of illusion. Walk through those automatic doors and you enter a world of abundance: strawberries in December, avocados from Peru, chicken breasts at two pounds a kilo. Everything is clean, packaged, and astonishingly cheap. It feels like progress. It is, in reality, a catastrophe.

Behind every bargain lies a chain of exploitation so long and so complex that most consumers never see it. The tomatoes in your salad were likely picked by migrant workers earning below minimum wage in southern Spain, housed in plastic shanty towns without running water. The prawns in your stir-fry may have been peeled by forced labourers in Thailand. The chicken — ah, the chicken. Raised in windowless sheds, forty thousand birds crammed together, pumped with antibiotics, slaughtered at six weeks old. This is not farming. It is industrial production, and the product happens to be alive.

The environmental cost is equally staggering. Food production accounts for a quarter of global greenhouse gas emissions. Our appetite for cheap beef is burning the Amazon. Our demand for palm oil is destroying orangutan habitats in Borneo. Every cellophane-wrapped convenience carries an ecological debt that our children will be forced to repay.

Yet when anyone suggests that food should cost more — that the true price should reflect the human suffering, animal cruelty, and environmental destruction embedded in every transaction — they are accused of elitism. "Not everyone can afford organic," comes the inevitable reply. This is true. But the solution is not to accept exploitation as the price of feeding a nation. The solution is to demand a food system that is fair for everyone — farmer, worker, animal, and planet alike.`;

const SOURCE_19C_FOOD = `Source B: 'On the Condition of the Labouring Poor' — an extract from a report by social reformer Mrs Elizabeth Grantly, published in The Reformer's Journal, 1862.

I have spent the past six months visiting the homes of working families in the manufacturing districts of Lancashire, and I am compelled to report what I have witnessed, however uncomfortable it may prove to the readers of this journal.

The diet of the labouring poor is a disgrace to a nation which considers itself civilised. In household after household, I found the same wretched fare: bread of the coarsest kind, often adulterated with chalk or alum to increase its weight; tea so weak as to be little more than coloured water; potatoes when they could be had; and meat perhaps once a week, if the family were fortunate. Children with the swollen bellies of malnutrition stared at me from doorways with eyes too large for their faces.

The cause of this misery is not idleness, as comfortable commentators so often suggest. The men and women I visited work twelve hours a day, six days a week, in conditions that would appal any person of feeling. They are paid wages which make proper nourishment impossible. A factory hand earning fourteen shillings a week cannot feed a family of six on wholesome food when bread alone costs a third of his income.

Meanwhile, the owners of these same factories dine on roasted game and French wines, and assure one another that the poor are poor because they lack moral fibre. I have seen the moral fibre of the poor. It is extraordinary. What they lack is not character but justice — a fair wage for honest labour, and food that does not poison them while it fails to nourish.`;

const SOURCE_MODERN_SPORT = `Source A: 'Football Has Lost Its Soul' — a column by sports journalist Dani Rojas, published in The Athletic, 2024.

I fell in love with football on a concrete pitch in south London, playing with a ball so worn the panels were peeling off. There were no sponsors, no VAR reviews, no post-match press conferences. There was just the ball, the game, and the feeling — indescribable and immediate — of being completely alive.

I no longer recognise the sport I loved. Professional football in 2024 is not a game; it is a content delivery platform worth billions of pounds, in which the actual football is almost incidental to the commercial apparatus that surrounds it. Matches are scheduled for television convenience, not supporter welfare. Ticket prices exclude the working-class communities that built every major club. Players earn more in a week than a nurse earns in a decade, and we are told this is simply "the market."

The corruption runs deeper than money. The 2022 World Cup was held in Qatar — a nation with no footballing tradition, where migrant workers died building stadiums that will never be filled again. FIFA awarded it the tournament anyway, because FIFA's moral compass points exclusively towards revenue.

Even at grassroots level, the joy is being squeezed out. Children's football has become a hyper-competitive industry of academies and scouts, where eight-year-olds are released by professional clubs for not developing quickly enough. We have created a system that identifies and discards talent before it has had time to grow.

I still believe football can be beautiful. But beauty requires space, spontaneity, and a certain disregard for profit. Until we reclaim the game from those who see it only as a commodity, that beauty will remain confined to concrete pitches where nobody important is watching.`;

const SOURCE_19C_SPORT = `Source B: 'The Value of Athletic Pursuits' — an extract from a speech by Dr James Whitmore, delivered at the annual prize-giving of Hartington College, 1889.

Gentlemen, I wish to speak today not of Latin declensions or mathematical proofs, but of a subject which I consider equally vital to the formation of character: the playing field.

There is a fashion among certain intellectuals to dismiss athletic pursuits as trivial — as mere recreation, unworthy of serious consideration. I say this view is profoundly mistaken. The boy who plays cricket learns patience, for he must wait his turn and make the best of whatever the bowler sends him. The boy who rows learns endurance, for the river does not care whether he is tired. The boy who plays football learns that individual brilliance means nothing without cooperation — that the team must always come before the self.

These are not small lessons. They are the very foundations upon which a decent society is built. I have observed, over many years, that the qualities which make a good sportsman — discipline, courage, fairness, and the ability to accept defeat with grace — are precisely the qualities which make a good man.

Some will object that sport encourages aggression and an unhealthy spirit of competition. To this I reply: the world is competitive, whether we wish it so or not. Far better that a young man learns to compete within the rules of a game than that he encounters competition for the first time in the harsher arena of adult life, entirely unprepared.

Let us not undervalue what the playing field teaches. A nation that neglects the bodies of its young neglects their characters also, and a generation raised without sport will be a generation ill-equipped for the challenges that await them.`;

// ─── Lesson Plans ────────────────────────────────────────────────────────────

export const languageP2LessonPlans: LessonPlan[] = [
  // ── Lesson 1: Paper 2 Overview ───────────────────────────────────────────
  {
    id: "lang-p2-01-overview",
    title: "Paper 2 Overview — Non-Fiction Reading & Writing",
    text: `${SOURCE_MODERN_SCHOOL_UNIFORMS}\n\n${SOURCE_19C_SCHOOL_UNIFORMS}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure and timing of AQA English Language Paper 2",
      "Identify the skills assessed in each question (Q1-Q5)",
      "Recognise the features of non-fiction texts from different time periods",
      "Begin to develop strategies for approaching paired source material",
    ],
    successCriteria: [
      "I can describe what each question on Paper 2 asks me to do",
      "I can identify the marks and suggested timings for each question",
      "I can explain the difference between a modern and 19th-century non-fiction text",
      "I can identify key features of non-fiction writing such as purpose, audience, and form",
    ],
    keywords: [
      "non-fiction",
      "viewpoint",
      "synthesis",
      "comparison",
      "perspective",
      "19th century",
      "rhetoric",
    ],
    starterActivity: {
      title: "Fiction vs Non-Fiction Sort",
      duration: "8 minutes",
      instructions:
        "Display 10 short text extracts on the board (a mix of fiction and non-fiction). Students sort them into two columns in their books. Then discuss: what clues helped you decide? Elicit key features of non-fiction — real events, opinions, persuasion, information. Introduce the lesson focus: Paper 2 tests non-fiction reading and writing skills.",
      differentiation: {
        support:
          "Provide extracts pre-printed on cards so students can physically sort them before writing.",
        core: "Students sort independently and annotate the features that helped them identify each text type.",
        stretch:
          "Students must also identify the purpose and likely audience for each non-fiction extract.",
      },
      resources: [
        "Fiction vs Non-Fiction sort cards (10 extracts)",
        "Mini-whiteboards for initial responses",
      ],
    },
    mainActivities: [
      {
        title: "Paper 2 Walkthrough — Structure and Skills",
        duration: "15 minutes",
        instructions:
          "Using a projected breakdown of Paper 2, walk students through each question: Q1 (4 marks, true/false), Q2 (8 marks, synthesis), Q3 (12 marks, language analysis), Q4 (16 marks, comparison of viewpoints), Q5 (40 marks, non-fiction writing). For each, explain: what skill is being tested, how long to spend, and what a good answer looks like. Students complete a summary grid in their books with columns: Question, Marks, Time, Skill, Top Tip.",
        differentiation: {
          support:
            "Provide a partially completed summary grid with some cells pre-filled.",
          core: "Students complete the grid independently during the walkthrough.",
          stretch:
            "Students add a sixth column: 'What could go wrong?' identifying common mistakes for each question.",
        },
        resources: [
          "Paper 2 structure PowerPoint slide",
          "Summary grid template (printed or projected)",
        ],
      },
      {
        title: "First Look at Paired Sources",
        duration: "20 minutes",
        instructions:
          "Distribute Source A (modern article on school uniforms) and Source B (19th-century extract on school dress). Students read both texts independently (7 minutes). Then, in pairs, they complete a comparison table identifying: the date and context of each text, the writer's viewpoint, the tone, three similarities, and three differences. Cold-call pairs to share findings. Model how these two sources would generate questions across all four reading questions on the paper.",
        differentiation: {
          support:
            "Provide the comparison table with sentence starters (e.g., 'Both writers believe that...' / 'However, Source A argues...').",
          core: "Students complete the comparison table independently before discussing with a partner.",
          stretch:
            "Students write a paragraph comparing the two viewpoints using embedded quotations from both sources.",
        },
        resources: [
          "Source A and Source B printed handouts",
          "Comparison table template",
        ],
      },
      {
        title: "Quick-Fire Question Taster",
        duration: "10 minutes",
        instructions:
          "Students attempt one low-stakes example of Q1 (identify four true statements from eight options about Source A). Then briefly discuss: which statements were tricky and why? Emphasise the importance of reading precisely and not being misled by statements that are partially true.",
        differentiation: {
          support:
            "Reduce to six statements (four true, two false) with line references provided.",
          core: "Eight statements as per exam format, with line references.",
          stretch:
            "Eight statements without line references — students must locate evidence independently.",
        },
        resources: ["Q1 true/false statement sheet"],
      },
    ],
    plenaryActivity: {
      title: "Exit Ticket — Paper 2 at a Glance",
      duration: "7 minutes",
      instructions:
        "Students complete an exit ticket with three questions: (1) How many marks is the whole paper worth? (2) Which question is worth the most marks and what does it ask you to do? (3) What is one key difference between reading a modern text and a 19th-century text? Collect exit tickets to assess understanding and inform next lesson's starter.",
      differentiation: {
        support: "Questions are multiple choice.",
        core: "Questions require short written answers.",
        stretch:
          "Add a fourth question: 'Which question do you think will be hardest for you and why?'",
      },
      resources: ["Exit ticket slips (printed)"],
    },
    homework:
      "Read both sources again at home. Highlight five words or phrases in Source B (the 19th-century text) that feel different from modern English. For each, write what you think it means in modern language.",
    worksheetQuestions: [
      {
        question:
          "How many marks is AQA English Language Paper 2 worth in total?",
        lines: 1,
        modelAnswer: "Paper 2 is worth 80 marks in total (40 for reading, 40 for writing).",
        marks: 1,
      },
      {
        question:
          "How many sources will you be given to read, and what type of texts will they be?",
        lines: 2,
        modelAnswer:
          "You will be given two non-fiction sources. One will be a modern text (20th or 21st century) and one will be from the 19th century. They will be linked by a common theme.",
        marks: 2,
      },
      {
        question:
          "Complete the table below. For each question, write the number of marks and the key skill being tested.\n\nQ1: Marks ___ Skill: ___\nQ2: Marks ___ Skill: ___\nQ3: Marks ___ Skill: ___\nQ4: Marks ___ Skill: ___\nQ5: Marks ___ Skill: ___",
        lines: 6,
        modelAnswer:
          "Q1: 4 marks — Identifying true statements. Q2: 8 marks — Summarising and synthesising differences/similarities from both sources. Q3: 12 marks — Analysing how the writer uses language in one source. Q4: 16 marks — Comparing how the two writers convey their different viewpoints. Q5: 40 marks — Writing to present a viewpoint (e.g., article, speech, letter).",
        marks: 5,
      },
      {
        question:
          "Read Source A. What is the writer's main argument about school uniforms? Support your answer with a brief quotation.",
        lines: 3,
        modelAnswer:
          "The writer argues that school uniforms are harmful and should be abolished. She believes they do not achieve equality and instead suppress individuality, stating that uniform 'promotes conformity — and that is not the same thing' as equality.",
        marks: 2,
      },
      {
        question:
          "Read Source B. What is the writer's main argument about school dress? Support your answer with a brief quotation.",
        lines: 3,
        modelAnswer:
          "Reverend Hartwell argues firmly in favour of school uniform, believing it builds discipline and character. He states that 'the dress of a scholar ought to reflect the discipline of his mind,' suggesting that appearance and behaviour are directly linked.",
        marks: 2,
      },
      {
        question:
          "Identify two similarities and two differences between the viewpoints expressed in Source A and Source B.",
        lines: 6,
        modelAnswer:
          "Similarities: Both writers acknowledge that opponents exist (Source A mentions 'proponents of school uniform'; Source B mentions 'those who argue that such regulations are oppressive'). Both agree that uniform is connected to behaviour and identity. Differences: Source A argues uniform is harmful and suppresses identity, while Source B argues it builds character. Source A takes a progressive, modern stance questioning authority, while Source B takes a traditional, authoritative stance defending the status quo.",
        marks: 4,
      },
      {
        question:
          "What challenges might you face when reading a 19th-century text? Identify two potential difficulties and suggest a strategy for each.",
        lines: 5,
        modelAnswer:
          "1. Unfamiliar vocabulary (e.g., 'slovenly,' 'laxity') — Strategy: use context clues from the surrounding sentence to work out meaning. 2. Longer, more complex sentence structures with multiple clauses — Strategy: break the sentence down, identify the main clause first, then read the subordinate clauses as additional detail.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is designed as an accessible entry point — avoid going into too much depth on any single question type, as each will have a dedicated lesson.",
      "The source texts on school uniforms are used throughout Lessons 1-6, so ensure students keep their copies.",
      "For lower-ability groups, consider spending more time on the reading of Source B, as 19th-century language may be a barrier.",
      "The exit ticket data is valuable — use it to identify students who need additional support before the deeper dives in Lessons 2-6.",
    ],
    targetedSkills: [
      "AO1: Identify and interpret explicit and implicit information",
      "AO2: Explain, comment on and analyse language",
      "AO3: Compare writers' ideas and perspectives",
      "Exam technique and time management",
    ],
  },

  // ── Lesson 2: Q1 True or False ──────────────────────────────────────────
  {
    id: "lang-p2-02-q1-true-false",
    title: "Q1: True or False Statements — Quick Wins",
    text: SOURCE_MODERN_SCHOOL_UNIFORMS,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand how Q1 is structured and marked on Paper 2",
      "Develop a strategy for identifying true and false statements efficiently",
      "Practise selecting the correct four statements from eight options",
      "Recognise common traps: partial truths, paraphrased distractors, and inferences disguised as facts",
    ],
    successCriteria: [
      "I can identify four true statements from a list of eight in under 5 minutes",
      "I can explain why a false statement is false by referring to the text",
      "I can use a systematic strategy (e.g., tick/cross/annotate) to avoid careless errors",
      "I understand that Q1 tests explicit information, not inference or opinion",
    ],
    keywords: [
      "explicit",
      "implicit",
      "shade",
      "true",
      "false",
      "distractor",
      "paraphrase",
    ],
    starterActivity: {
      title: "Spot the Lie",
      duration: "7 minutes",
      instructions:
        "Display five statements about the teacher (three true, two false — e.g., 'I have a pet dog,' 'I once visited Japan'). Students vote on each using thumbs up/down. Reveal answers. Discuss: what made the false ones believable? Link to Q1 — the exam uses statements that sound plausible but contain subtle inaccuracies. Emphasise that this is a 4-mark question and should take no more than 5 minutes in the exam.",
      differentiation: {
        support: "Teacher highlights which statements are about facts vs opinions to scaffold understanding.",
        core: "Students vote independently and justify their reasoning.",
        stretch: "Students explain the technique: what makes a convincing lie?",
      },
    },
    mainActivities: [
      {
        title: "Anatomy of a Q1 — Modelling the Strategy",
        duration: "15 minutes",
        instructions:
          "Display Source A on the board. Present eight statements about the text (four true, four false). Model the strategy step by step: (1) Read the first statement. (2) Find the relevant section in the source. (3) Check whether the statement matches the text exactly — not roughly, but precisely. (4) Mark it as TRUE or FALSE. Work through the first four statements as a class, thinking aloud. Emphasise common traps: statements that reverse the writer's argument, statements that are true in real life but not stated in the text, and statements that exaggerate a claim.",
        differentiation: {
          support: "Provide line references alongside each statement.",
          core: "Students follow the modelling and annotate their own copies of the source.",
          stretch: "Students predict which statements are designed to be traps before the teacher reveals answers.",
        },
        resources: [
          "Source A printed handout",
          "Eight statements displayed on board",
        ],
      },
      {
        title: "Independent Practice — Two Sets",
        duration: "20 minutes",
        instructions:
          "Students complete two Q1-style tasks independently. Set 1 uses a fresh set of eight statements about Source A (the school uniforms article). Set 2 uses eight statements about a short new extract projected on the board (a 150-word news report about a local park closure). For each set, students have exactly 5 minutes — use a visible timer. After each set, reveal answers and students self-assess, writing corrections for any errors.",
        differentiation: {
          support: "Set 1 includes line references. Set 2 includes the relevant paragraph highlighted.",
          core: "Both sets without line references but statements are in text order.",
          stretch: "Set 2 statements are deliberately not in text order — students must scan the whole text.",
        },
        resources: [
          "Set 1 statement sheet",
          "Set 2 extract and statement sheet",
          "Timer displayed on board",
        ],
      },
      {
        title: "Crafting False Statements — Reverse Engineering",
        duration: "10 minutes",
        instructions:
          "Students work in pairs. Each pair writes two true statements and two false statements about Source A. False statements must be subtly wrong (not obviously ridiculous). Pairs swap with another pair and attempt to identify which are true and which are false. Discuss: what makes a good distractor? This deepens understanding of how the exam paper is constructed.",
        differentiation: {
          support: "Students write one true and one false statement, with a scaffold: 'Change one detail to make it false.'",
          core: "Two true, two false statements as described.",
          stretch: "Students must create one false statement that uses the exact wording from the text but changes the meaning through context.",
        },
      },
    ],
    plenaryActivity: {
      title: "Top Three Tips for Q1",
      duration: "8 minutes",
      instructions:
        "Students write their top three tips for Q1 on a sticky note. Collect and read a selection aloud. As a class, agree on the definitive top three strategies (e.g., 1. Read the statements first, then the text. 2. Check every word — one wrong word makes it false. 3. Do not spend more than 5 minutes). Students record these in their books as a revision resource.",
      differentiation: {
        support: "Choose from a list of six possible tips and rank the best three.",
        core: "Write three tips independently.",
        stretch: "Write tips and a brief explanation of why each matters, with an example from today's practice.",
      },
    },
    homework:
      "Complete the Q1 practice sheet (eight statements about a new source text on climate change). Time yourself — you should finish in under 5 minutes. Write a sentence explaining any statement you found tricky.",
    worksheetQuestions: [
      {
        question:
          "Read Source A. Choose four statements below which are TRUE.\n\nA) The writer believes school uniforms promote equality.\nB) The writer suggests that status is shown through items other than uniform.\nC) A branded blazer can cost sixty pounds.\nD) The writer argues that uniform prevents all bullying.\nE) Psychologists say self-expression matters during adolescence.\nF) The writer believes uniform prepares students well for modern workplaces.\nG) Tech companies and creative industries are moving away from rigid dress codes.\nH) The writer thinks young people should not be trusted to dress themselves.",
        lines: 2,
        modelAnswer: "The four true statements are B, C, E, and G.",
        marks: 4,
      },
      {
        question:
          "Explain why statement A is false. Refer to the text in your answer.",
        lines: 3,
        modelAnswer:
          "Statement A is false because the writer does not believe uniforms promote equality. She says 'We are told this promotes equality' but then argues against this, saying 'I would argue it promotes conformity — and that is not the same thing.' She is challenging the claim, not supporting it.",
        marks: 2,
      },
      {
        question:
          "Explain why statement D is false. Refer to the text in your answer.",
        lines: 3,
        modelAnswer:
          "Statement D is false because the writer argues the opposite: uniform does NOT prevent bullying. She states that 'status is signalled through shoes, bags, phones, and hairstyles' and that 'Uniform does not eliminate inequality; it merely disguises it.' The word 'all' in the statement makes it especially inaccurate.",
        marks: 2,
      },
      {
        question:
          "Why is it important to read each statement very carefully, paying attention to every word?",
        lines: 3,
        modelAnswer:
          "A single word can change a statement from true to false. For example, if the text says 'some schools' but the statement says 'all schools,' that makes it false. Examiners deliberately use words like 'always,' 'never,' 'all,' or 'only' to create traps. Reading precisely prevents careless errors on an otherwise straightforward question.",
        marks: 2,
      },
      {
        question:
          "How long should you spend on Q1 in the exam, and why?",
        lines: 2,
        modelAnswer:
          "You should spend no more than 5 minutes on Q1 because it is only worth 4 marks. Spending too long on Q1 takes time away from higher-mark questions like Q4 (16 marks) and Q5 (40 marks), which require much more detailed responses.",
        marks: 2,
      },
      {
        question:
          "Write your own TRUE statement about Source A. Include a quotation or reference to prove it is true.",
        lines: 3,
        modelAnswer:
          "Example: 'The writer argues that many law firms now allow employees to dress in their own style.' This is true because the text states 'even many law firms now embrace individual style.'",
        marks: 2,
      },
      {
        question:
          "Write your own FALSE statement about Source A that is designed to be a convincing distractor. Explain what makes it false.",
        lines: 4,
        modelAnswer:
          "Example false statement: 'The writer believes that all teenagers want to wear their own clothes to school.' This is a distractor because the writer does argue against uniform, but she never claims that all teenagers want this. The text talks about the importance of choice, not about what every student specifically wants. It sounds plausible but goes beyond what the text actually says.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Q1 is the most accessible question on the paper — use this lesson to build confidence, especially for lower-ability students.",
      "Emphasise repeatedly that Q1 tests EXPLICIT information only. Students should not infer or read between the lines.",
      "The 'crafting false statements' activity is excellent for deeper understanding but may need extending for higher-ability groups.",
      "Common student error: choosing more or fewer than four statements. Remind them that choosing five will result in marks being deducted.",
      "If time is tight, the reverse-engineering activity can be set as homework instead.",
    ],
    targetedSkills: [
      "AO1: Identify and interpret explicit information and ideas",
      "Exam technique: time management on low-mark questions",
      "Close reading for precision and accuracy",
    ],
  },

  // ── Lesson 3: Q2 Summary and Synthesis ──────────────────────────────────
  {
    id: "lang-p2-03-q2-summary-synthesis",
    title: "Q2: Summary and Synthesis — Comparing Two Sources",
    text: `${SOURCE_MODERN_SCHOOL_UNIFORMS}\n\n${SOURCE_19C_SCHOOL_UNIFORMS}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand what Q2 requires: summarising differences or similarities between two sources",
      "Develop the skill of synthesising information from two texts into a cohesive response",
      "Use evidence from both sources to support summary points",
      "Write perceptive inferences rather than simply restating explicit content",
    ],
    successCriteria: [
      "I can identify key differences or similarities between two sources on a given focus",
      "I can use short, embedded quotations from both sources",
      "I can make inferences about what the writers suggest, not just what they state",
      "I can structure a Q2 response using a clear comparative framework",
    ],
    keywords: [
      "synthesis",
      "summary",
      "inference",
      "comparison",
      "similarities",
      "differences",
      "embedded quotation",
    ],
    starterActivity: {
      title: "Two Pictures, One Theme",
      duration: "7 minutes",
      instructions:
        "Display two photographs of schools: one modern (colourful, informal, students in casual clothes) and one Victorian (rows of uniformed children, strict-looking teacher). Students write three similarities and three differences in 3 minutes. Share responses. Key point: Q2 asks you to do exactly this — but with texts, not images. You must compare what the sources say about a specific focus, using evidence from both.",
      differentiation: {
        support: "Provide sentence starters: 'Both images show...' / 'However, the modern image...'",
        core: "Students compare independently.",
        stretch: "Students also infer what each image suggests about attitudes to education in its era.",
      },
      resources: ["Two contrasting school photographs (projected)"],
    },
    mainActivities: [
      {
        title: "Deconstructing the Question and Sources",
        duration: "12 minutes",
        instructions:
          "Display a sample Q2: 'Use details from both sources. Write a summary of the differences between the writers' attitudes to school uniform.' Students underline key instruction words. Then re-read both sources with a specific focus: highlight anything related to attitudes to uniform. Create a two-column table on the board: Source A attitudes vs Source B attitudes. Students contribute points. Emphasise: Q2 is about WHAT the writers think (content/ideas), not HOW they write (language).",
        differentiation: {
          support: "Provide a pre-highlighted version of both sources with key attitudes underlined.",
          core: "Students highlight independently and contribute to class discussion.",
          stretch: "Students identify implicit attitudes as well as explicit ones (e.g., what does the word 'sentimental' in Source B imply about the writer's view of opponents?).",
        },
        resources: [
          "Source A and Source B handouts",
          "Sample Q2 question projected",
        ],
      },
      {
        title: "Modelling a Top-Band Response",
        duration: "15 minutes",
        instructions:
          "Model writing the first paragraph of a Q2 response on the board using the WHAT-HOW-LINK method: (1) WHAT does Source A say? State the point and embed a quotation. (2) HOW is Source B different/similar? State the contrasting or similar point with a quotation. (3) LINK — make an inference about what this tells us. Write the first paragraph together as a class. Then display a second model paragraph for students to annotate, identifying the three elements. Emphasise: you need to cover BOTH sources in EVERY paragraph.",
        differentiation: {
          support: "Provide a writing frame with sentence starters for the WHAT-HOW-LINK structure.",
          core: "Students annotate the model paragraph and plan their own second paragraph.",
          stretch: "Students write their own second paragraph independently, aiming for perceptive inference.",
        },
        resources: [
          "Model paragraph on board/slide",
          "WHAT-HOW-LINK writing frame",
        ],
      },
      {
        title: "Independent Writing — Timed Q2 Response",
        duration: "18 minutes",
        instructions:
          "Students write a full Q2 response (aim for 3 developed paragraphs) in 10 minutes — the recommended exam timing. Use a visible timer. After writing, students swap books with a partner and peer-assess using a checklist: (1) Does each paragraph reference both sources? (2) Are quotations embedded? (3) Are inferences made, not just surface-level points? Partners write one WWW (what went well) and one EBI (even better if).",
        differentiation: {
          support: "Students write 2 paragraphs using the writing frame. Peer-assessment uses a simplified tick-list.",
          core: "3 paragraphs as described, full peer-assessment.",
          stretch: "Students aim for 4 paragraphs and must include at least one point about implicit attitudes.",
        },
        resources: [
          "Timer displayed",
          "Peer-assessment checklist",
        ],
      },
    ],
    plenaryActivity: {
      title: "Common Mistakes Gallery",
      duration: "8 minutes",
      instructions:
        "Display three short Q2 responses on the board — each contains a common mistake: (1) Only discusses one source. (2) Retells the text rather than summarising attitudes. (3) Analyses language instead of summarising content. Students identify the mistake in each and explain how to fix it. Record the three 'rules' for Q2 in their books.",
      differentiation: {
        support: "Mistakes are labelled A, B, C; students match each to the correct description from a list.",
        core: "Students identify mistakes independently.",
        stretch: "Students rewrite one of the flawed responses correctly.",
      },
    },
    homework:
      "Write a Q2 response to the following question: 'Use details from both sources. Write a summary of the similarities between how the writers feel about the impact of school dress on character.' Aim for three paragraphs with evidence from both sources.",
    worksheetQuestions: [
      {
        question:
          "What does Q2 ask you to do? Explain in your own words.",
        lines: 3,
        modelAnswer:
          "Q2 asks you to summarise the key differences or similarities between the two sources on a specific topic. You must use evidence from both sources and make clear, comparative points. It tests your ability to synthesise information, not analyse language.",
        marks: 2,
      },
      {
        question:
          "Read Source A. What is the writer's attitude to school uniform? Find two quotations to support your answer.",
        lines: 4,
        modelAnswer:
          "The writer is strongly opposed to school uniform. She believes it 'promotes conformity' rather than equality and argues that it 'disproportionately punish[es] students from disadvantaged backgrounds.' Her attitude is critical and frustrated.",
        marks: 3,
      },
      {
        question:
          "Read Source B. What is the writer's attitude to school dress? Find two quotations to support your answer.",
        lines: 4,
        modelAnswer:
          "The writer is passionately in favour of school uniform. He sees it as essential to discipline, stating that 'the dress of a scholar ought to reflect the discipline of his mind.' He also believes it builds community, arguing that uniform teaches a boy 'he belongs to something beyond his own small desires.'",
        marks: 3,
      },
      {
        question:
          "Using the WHAT-HOW-LINK method, write one paragraph comparing the writers' attitudes to whether uniform affects students' identity.",
        lines: 8,
        modelAnswer:
          "In Source A, the writer argues that uniform damages students' sense of identity, describing adolescence as 'a critical period for identity formation' and suggesting that removing clothing choices tells young people 'your individuality does not matter here.' By contrast, Source B's writer dismisses this concern entirely, calling such arguments 'sentimental nonsense' and insisting that 'A child's spirit is not found in his waistcoat.' This suggests a fundamental disagreement about where identity comes from: Source A locates it in personal expression, while Source B locates it in character and community — reflecting a broader shift in how society views the individual over time.",
        marks: 4,
      },
      {
        question:
          "What is the difference between a 'summary' point and a 'language analysis' point? Why does this matter for Q2?",
        lines: 4,
        modelAnswer:
          "A summary point focuses on WHAT the writer says or thinks (the content and ideas). A language analysis point focuses on HOW the writer says it (the techniques, word choices, and effects). Q2 only requires summary — if you analyse language, you are answering Q3 instead and will not gain marks for Q2.",
        marks: 2,
      },
      {
        question:
          "Why is it important to reference BOTH sources in every paragraph of your Q2 answer?",
        lines: 3,
        modelAnswer:
          "Q2 is a synthesis question, meaning you must bring the two sources together. If you only write about one source, you cannot show the examiner that you can compare and connect ideas. Each paragraph should show a clear point of similarity or difference between the two texts to demonstrate the skill of synthesis.",
        marks: 2,
      },
      {
        question:
          "Identify one similarity and one difference between the attitudes in Source A and Source B towards the purpose of rules and discipline in schools.",
        lines: 6,
        modelAnswer:
          "Similarity: Both writers acknowledge that uniform is connected to behaviour and discipline — Source A admits proponents believe it 'removes visible markers of wealth,' while Source B directly links dress to 'the discipline of his mind.' Both accept the link exists, even if they disagree about its value. Difference: Source A sees discipline through uniform as oppressive, arguing it produces 'compliance, not creativity,' while Source B sees it as essential, claiming schools without uniform standards 'invariably suffer from a laxity of conduct.'",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Q2 is the question students most commonly confuse with Q4. Repeatedly stress: Q2 = WHAT they say (summary), Q4 = HOW they say it (methods).",
      "The WHAT-HOW-LINK method is a simplified structure — for higher-ability students, encourage more fluid comparative writing.",
      "The timed writing section is crucial for exam preparation. Resist the temptation to extend it.",
      "If students struggle with synthesis, try a physical activity: give them quotations on cards from both sources and ask them to match pairs that relate to the same point.",
    ],
    targetedSkills: [
      "AO1: Identify and interpret explicit and implicit information and ideas",
      "AO1: Select and synthesise evidence from different texts",
      "Comparative writing skills",
      "Inference and deduction",
    ],
  },

  // ── Lesson 4: Q3 Language Analysis ──────────────────────────────────────
  {
    id: "lang-p2-04-q3-language-analysis",
    title: "Q3: Language Analysis on a Single Source",
    text: SOURCE_19C_TECHNOLOGY,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand that Q3 asks for analysis of how language is used in ONE source",
      "Identify and analyse specific language features: word choice, imagery, rhetorical techniques, tone",
      "Write analytical paragraphs using the WHAT-HOW-WHY structure",
      "Develop the ability to comment on the effect of language on the reader",
    ],
    successCriteria: [
      "I can identify specific language choices in a non-fiction text",
      "I can use subject-specific terminology (e.g., metaphor, emotive language, rhetorical question)",
      "I can explain the effect of a writer's language choices on the reader",
      "I can write at least two developed analytical paragraphs in exam conditions",
    ],
    keywords: [
      "analysis",
      "language",
      "effect",
      "connotation",
      "rhetoric",
      "tone",
      "imagery",
      "emotive",
    ],
    starterActivity: {
      title: "Word Swap — How Language Changes Meaning",
      duration: "7 minutes",
      instructions:
        "Display the sentence: 'The railway passenger sits in sullen isolation.' Ask students to replace 'sullen' with three different adjectives (e.g., 'peaceful,' 'tragic,' 'comfortable'). Discuss: how does each word change the meaning and the reader's response? Key point: writers choose their words deliberately. Q3 asks you to examine those choices and explain their effects.",
      differentiation: {
        support: "Provide four adjectives to choose from and discuss which changes the meaning most.",
        core: "Students generate their own replacement words and explain the shift in meaning.",
        stretch: "Students also consider how 'isolation' could be replaced and the cumulative effect of the pairing.",
      },
    },
    mainActivities: [
      {
        title: "Close Reading and Annotation",
        duration: "12 minutes",
        instructions:
          "Distribute Source B (the 1847 letter about railways). Read aloud as a class. Then re-read independently, annotating: circle powerful word choices, underline imagery or figurative language, box rhetorical devices. In the margins, students write brief notes on the effect of each feature. After 8 minutes, share annotations as a class — build a collaborative list on the board of the key language features identified.",
        differentiation: {
          support: "Provide a glossary for challenging 19th-century vocabulary. Pre-identify three key quotations for students to focus on.",
          core: "Students annotate independently using the circle/underline/box system.",
          stretch: "Students also comment on sentence structure and how the writer's syntax contributes to tone.",
        },
        resources: [
          "Source B printed handout",
          "Annotation guide (circle/underline/box reminder card)",
        ],
      },
      {
        title: "Modelling WHAT-HOW-WHY Analysis",
        duration: "15 minutes",
        instructions:
          "Introduce the WHAT-HOW-WHY paragraph structure: WHAT does the writer say/what is the point? HOW do they say it (specific language feature + quotation)? WHY — what is the effect on the reader? Model one paragraph on the board: 'The writer uses the metaphor of \"iron rails\" to describe the railway, suggesting something cold and unyielding. The word \"iron\" connotes rigidity and industrial harshness, which creates a sense that the railway is stripping the landscape of its natural beauty. This positions the reader to share the writer's unease about technological progress.' Students then write their own paragraph on a different quotation, using the same structure.",
        differentiation: {
          support: "Provide a writing frame with sentence starters for each element (WHAT/HOW/WHY).",
          core: "Students write independently using the WHAT-HOW-WHY structure.",
          stretch: "Students write two paragraphs and link them, showing how language choices build a cumulative effect.",
        },
        resources: ["WHAT-HOW-WHY writing frame"],
      },
      {
        title: "Timed Practice — Q3 Response",
        duration: "18 minutes",
        instructions:
          "Display the exam-style question: 'You now need to refer only to Source B. How does the writer use language to express his concerns about the railway?' Students write a full Q3 response in 12 minutes (recommended exam timing). Aim for 3 analytical paragraphs. After writing, display the mark scheme descriptors for Level 3 and Level 4. Students self-assess: which level does their response match? They highlight one sentence they are proud of and one they would improve.",
        differentiation: {
          support: "Students write 2 paragraphs in 12 minutes using the writing frame. Self-assess against Level 2/3 descriptors.",
          core: "3 paragraphs, self-assess against Level 3/4.",
          stretch: "Students aim for a perceptive, evaluative response that considers the overall tone and how it develops.",
        },
        resources: [
          "Timer displayed",
          "Mark scheme descriptors (simplified, projected)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Terminology Quick Quiz",
      duration: "8 minutes",
      instructions:
        "Quick-fire quiz: teacher reads a definition, students write the correct terminology on mini-whiteboards. Cover: metaphor, simile, emotive language, rhetorical question, hyperbole, direct address, listing, juxtaposition. Then: can you find an example of any three of these in Source B? Students share examples.",
      differentiation: {
        support: "Provide a word bank of eight terms to choose from.",
        core: "Write terms from memory.",
        stretch: "After the quiz, students explain which techniques are most effective in Source B and why.",
      },
      resources: ["Mini-whiteboards and pens"],
    },
    homework:
      "Re-read Source B. Find three additional quotations you did not use in class. For each, write a WHAT-HOW-WHY paragraph analysing the writer's language choices.",
    worksheetQuestions: [
      {
        question:
          "What does Q3 on Paper 2 ask you to do? How is it different from Q2?",
        lines: 3,
        modelAnswer:
          "Q3 asks you to analyse how a writer uses language in ONE source to achieve a specific effect. Unlike Q2, which asks you to summarise WHAT both writers say, Q3 focuses on HOW the writer says it — the specific techniques, word choices, and their effects on the reader.",
        marks: 2,
      },
      {
        question:
          "Read the following quotation from Source B: 'The stagecoach journey, for all its discomforts, was an education in patience and in the art of conversation.' How does the writer use language here to present his view of the past?",
        lines: 5,
        modelAnswer:
          "The writer describes the stagecoach journey as 'an education,' using a metaphor that elevates a simple mode of transport into something valuable and formative. By calling conversation an 'art,' he implies it is a skill of beauty and refinement — something worth preserving. The concessive phrase 'for all its discomforts' shows he is not naively nostalgic; he acknowledges the hardship but argues the benefits outweighed it. This language positions the past as morally superior to the present, encouraging the reader to value what has been lost.",
        marks: 4,
      },
      {
        question:
          "The writer describes railway passengers as sitting 'in sullen isolation, buried in his newspaper.' Analyse the effect of the language used in this phrase.",
        lines: 5,
        modelAnswer:
          "The adjective 'sullen' suggests a mood of resentful gloom, implying that railway travel creates not just solitude but unhappiness. 'Isolation' reinforces this sense of disconnection from other people. The verb 'buried' is particularly powerful — it is a metaphor associated with death, suggesting the passenger is lifeless and cut off from the world. Combined, these words create a bleak image of modern travel as dehumanising, making the reader question whether speed and convenience are worth the loss of human connection.",
        marks: 4,
      },
      {
        question:
          "Identify a rhetorical question in Source B. Why does the writer use it, and what effect does it have on the reader?",
        lines: 5,
        modelAnswer:
          "The writer asks: 'shall we find ourselves happier? Or shall we discover, too late, that in our haste to go everywhere, we have lost the ability to be content anywhere?' This rhetorical question forces the reader to pause and reflect rather than passively absorbing the argument. The phrase 'too late' creates a sense of urgency and warning. The juxtaposition of 'everywhere' and 'anywhere' highlights the paradox at the heart of his argument — that unlimited mobility leads to rootlessness. The reader is positioned to agree that progress may come at too high a cost.",
        marks: 4,
      },
      {
        question:
          "What is the overall tone of Source B? Identify two language features that contribute to this tone.",
        lines: 5,
        modelAnswer:
          "The overall tone is one of anxious, measured concern — the writer is worried but presents his argument thoughtfully rather than hysterically. This is created through: (1) The formal, considered phrasing such as 'I write to express my deep unease,' which suggests careful deliberation rather than panic. (2) The use of balanced sentence structures, such as 'I do not deny its utility... But I fear,' which acknowledges opposing views before expressing concern. This makes the tone seem reasonable and measured, which increases its persuasive power.",
        marks: 4,
      },
      {
        question:
          "Write one WHAT-HOW-WHY paragraph analysing the effect of the following quotation: 'The ancient rhythms of rural life, governed by seasons and sustained by proximity, are being dismantled in favour of speed and novelty.'",
        lines: 8,
        modelAnswer:
          "WHAT: The writer expresses concern that traditional ways of life are being destroyed by the railway. HOW: He uses the phrase 'ancient rhythms' to describe rural life, with 'rhythms' being a metaphor that suggests a natural, harmonious pattern — like music or breathing. The verbs 'governed by seasons' and 'sustained by proximity' portray this way of life as organic, balanced, and self-sufficient. In stark contrast, 'dismantled' is a violent, mechanical verb that suggests deliberate destruction. WHY: The juxtaposition between the gentle, organic language of rural life and the harsh, industrial language of change positions the reader to feel that something precious and irreplaceable is being thoughtlessly torn apart. The pairing of 'speed and novelty' reduces the benefits of progress to something trivial and shallow compared to what is being lost.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "Q3 focuses on ONE source only — remind students repeatedly that they should not reference the other source.",
      "Students often struggle to move beyond 'feature spotting' — push them towards explaining EFFECT on the reader.",
      "The 19th-century source may present vocabulary challenges. Front-load any necessary definitions before the close reading activity.",
      "For the timed practice, be strict with timing — students need to develop fluency under pressure.",
      "The mark scheme distinguishes clearly between 'identifies features' (Level 1-2) and 'analyses effects' (Level 3-4). Display this distinction explicitly.",
    ],
    targetedSkills: [
      "AO2: Explain, comment on and analyse how writers use language to achieve effects",
      "AO2: Use relevant subject terminology to support views",
      "Analytical paragraph writing",
      "Close reading of 19th-century non-fiction",
    ],
  },

  // ── Lesson 5: Q4 Comparing Viewpoints ──────────────────────────────────
  {
    id: "lang-p2-05-q4-comparing-viewpoints",
    title: "Q4: Comparing Viewpoints — The 16-Mark Question",
    text: `${SOURCE_MODERN_TECHNOLOGY}\n\n${SOURCE_19C_TECHNOLOGY}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand that Q4 requires comparison of writers' viewpoints AND the methods they use to convey them",
      "Identify the viewpoints of two writers on a shared theme",
      "Analyse the methods each writer uses to present their viewpoint",
      "Write a structured comparative response covering both viewpoints and methods",
    ],
    successCriteria: [
      "I can identify and compare the viewpoints of two writers on a shared theme",
      "I can analyse specific methods (language, tone, structure, rhetorical devices) used by each writer",
      "I can write a comparative response that covers both WHAT the writers think and HOW they convey it",
      "I can use comparative connectives to link my analysis of both sources",
    ],
    keywords: [
      "viewpoint",
      "perspective",
      "comparison",
      "methods",
      "connectives",
      "attitude",
      "persuasion",
      "rhetoric",
    ],
    starterActivity: {
      title: "Same Topic, Different Views",
      duration: "7 minutes",
      instructions:
        "Project two short statements about technology: 'Smartphones are the greatest invention of the 21st century — they connect us to the entire world' and 'Smartphones are destroying our ability to think, talk, and live in the real world.' Students identify: what is the viewpoint in each? What methods does each use? (e.g., hyperbole, listing, emotive language). Then discuss: Q4 asks you to do exactly this — compare the viewpoints AND the methods used to convey them. This is worth 16 marks — the most on any reading question.",
      differentiation: {
        support: "Methods are identified by the teacher; students match them to the correct statement.",
        core: "Students identify viewpoints and methods independently.",
        stretch: "Students also comment on which statement is more persuasive and why.",
      },
    },
    mainActivities: [
      {
        title: "Mapping Viewpoints and Methods",
        duration: "15 minutes",
        instructions:
          "Distribute Source A (modern article on screen time) and Source B (1847 letter about railways). Students read both texts. Then complete a structured planning grid with four columns: Point of Comparison | Source A Viewpoint + Quotation | Source B Viewpoint + Quotation | Methods Used. Identify at least four points of comparison (e.g., both writers express concern about new technology; both believe something valuable is being lost; both acknowledge the opposing view; both use rhetorical questions). This grid will form the plan for their Q4 response.",
        differentiation: {
          support: "Points of comparison are pre-identified on the grid; students find the quotations.",
          core: "Students identify their own points of comparison and complete the grid.",
          stretch: "Students also note how the methods differ despite the similar viewpoints (e.g., modern vs Victorian rhetorical style).",
        },
        resources: [
          "Source A and Source B printed handouts",
          "Planning grid template",
        ],
      },
      {
        title: "Modelling a Comparative Paragraph",
        duration: "13 minutes",
        instructions:
          "Model a Q4 paragraph on the board using the structure: (1) Both/Similarly/In contrast — state the comparative point about viewpoints. (2) Source A does this by... — analyse the method with a quotation. (3) Similarly/However, Source B... — analyse the contrasting or similar method with a quotation. (4) Overall effect — what does this comparison reveal about their different perspectives? Write one full paragraph as a class. Then display a second model paragraph and ask students to annotate it, identifying the four structural elements.",
        differentiation: {
          support: "Provide a writing frame with the four elements as prompts.",
          core: "Students annotate the second model paragraph and plan their own third paragraph.",
          stretch: "Students write their own paragraph independently, aiming for perceptive comparison of methods.",
        },
        resources: ["Model paragraphs (projected)", "Writing frame handout"],
      },
      {
        title: "Timed Practice — Q4 Response",
        duration: "18 minutes",
        instructions:
          "Students write a full Q4 response in 15 minutes. Question: 'Compare how the writers of Source A and Source B convey their different attitudes to the impact of new technology on society. In your answer, you could: compare their different attitudes, compare the methods the writers use to convey their attitudes, support your response with references to both texts.' After writing, use a visualiser or read a strong example aloud. Discuss: what makes it effective? What could be improved?",
        differentiation: {
          support: "Students use their planning grid and the writing frame. Aim for 2-3 paragraphs.",
          core: "3-4 paragraphs using the grid as a plan.",
          stretch: "4+ paragraphs with perceptive analysis of how the different time periods influence the writers' methods.",
        },
        resources: ["Timer displayed", "Planning grids from earlier activity"],
      },
    ],
    plenaryActivity: {
      title: "Q4 vs Q2 — What Is the Difference?",
      duration: "7 minutes",
      instructions:
        "Display two student responses side by side — one is a Q2 answer, one is a Q4 answer, both on the same sources. Students identify which is which and explain the differences. Key distinction: Q2 focuses on WHAT (content and ideas), Q4 focuses on WHAT and HOW (viewpoints AND methods). Record this distinction clearly in books.",
      differentiation: {
        support: "Differences are highlighted in colour — students explain them.",
        core: "Students identify the differences independently.",
        stretch: "Students rewrite a sentence from the Q2 response to make it suitable for Q4.",
      },
    },
    homework:
      "Complete your Q4 response if unfinished. Then write a one-paragraph reflection: which part of Q4 do you find most challenging — identifying viewpoints, analysing methods, or making comparisons — and what will you do to improve?",
    worksheetQuestions: [
      {
        question:
          "What two things does Q4 ask you to compare? Why is it important to cover both?",
        lines: 3,
        modelAnswer:
          "Q4 asks you to compare the writers' viewpoints (what they think) AND the methods they use to convey those viewpoints (how they express them). You must cover both because the mark scheme rewards comparison of ideas and methods. Only writing about viewpoints without methods — or vice versa — will limit your response to the lower mark bands.",
        marks: 2,
      },
      {
        question:
          "What is Source A writer's main viewpoint about technology? Support with a quotation.",
        lines: 3,
        modelAnswer:
          "Dr Lowe believes that excessive screen time is severely damaging to children and that parents must set boundaries. She describes the situation as a 'crisis' and argues that 'giving a child unlimited access to a smartphone is not neutral. It is a choice with profound consequences.'",
        marks: 2,
      },
      {
        question:
          "What is Source B writer's main viewpoint about new technology? Support with a quotation.",
        lines: 3,
        modelAnswer:
          "Mr Ashworth is deeply uneasy about the impact of the railway on society, fearing it destroys community and contentment. He asks: 'when we have made everything faster... shall we find ourselves happier?' suggesting that technological progress does not lead to greater wellbeing.",
        marks: 2,
      },
      {
        question:
          "Identify one similarity between the viewpoints in Source A and Source B. How does each writer convey this shared concern?",
        lines: 6,
        modelAnswer:
          "Both writers share the concern that new technology replaces valuable human experiences. Source A argues that screen time replaces 'climbing trees, reading books, arguing with siblings, or simply being bored,' using a list to emphasise the range of lost experiences. Source B similarly laments the loss of 'the art of conversation' and 'the changing landscape,' using the elevated noun 'art' to dignify what has been destroyed. Both use lists, but Source A's is informal and relatable while Source B's is more nostalgic and literary, reflecting their different eras.",
        marks: 4,
      },
      {
        question:
          "Identify one difference between the methods the writers use to persuade their readers. Analyse this difference with quotations from both sources.",
        lines: 6,
        modelAnswer:
          "Source A uses statistics — 'The average British teenager now spends over seven hours a day on screens' — to give her argument a scientific, evidence-based authority. Source B, by contrast, relies on personal observation — 'I observe, too, that the railway has bred a most unhealthy restlessness' — using his own experience as proof. This difference reflects their contexts: Source A writes for a modern audience that values data, while Source B writes in an era when a gentleman's personal testimony carried significant authority.",
        marks: 4,
      },
      {
        question:
          "Write a full comparative paragraph for Q4, comparing how the two writers use tone to convey their attitudes to technological change.",
        lines: 8,
        modelAnswer:
          "Both writers adopt a tone of serious concern, but they express it differently. Source A's tone is urgent and alarming; Dr Lowe states that 'we have sleepwalked into a crisis,' with the metaphor of 'sleepwalked' suggesting dangerous unawareness, and the noun 'crisis' declaring the situation an emergency. Source B's tone is more measured and reflective; Mr Ashworth writes 'I write to express my deep unease,' where 'unease' is a more restrained word than 'crisis,' suggesting discomfort rather than panic. This difference in tone reflects their audiences: Source A must compete for attention in a modern media landscape, while Source B addresses readers of a respected Victorian journal who expected measured, intellectual discourse.",
        marks: 6,
      },
      {
        question:
          "List three comparative connectives you could use in a Q4 response and write a sentence using each one.",
        lines: 6,
        modelAnswer:
          "1. 'Similarly' — Similarly, Source B expresses concern about the loss of human connection, describing railway passengers as sitting 'in sullen isolation.' 2. 'In contrast' — In contrast, Source A uses a more aggressive, confrontational tone, directly accusing parents of being 'too addicted themselves' to act. 3. 'While' — While Source A grounds her argument in modern research and statistics, Source B relies on personal observation and appeals to tradition.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Q4 is the highest-tariff reading question at 16 marks — impress upon students that it deserves significant time and effort (approximately 20 minutes in the exam).",
      "The biggest weakness in Q4 responses is writing about Source A and then separately about Source B — students must integrate comparison throughout.",
      "These two source texts (screen time + railways) work well together because the thematic parallel is clear but the methods are interestingly different.",
      "Consider displaying the Q4 mark scheme bullet points so students understand that top-band responses require 'perceptive' analysis of methods and 'detailed' comparison.",
      "For lower-ability students, the planning grid is essential — do not skip it in the interest of time.",
    ],
    targetedSkills: [
      "AO3: Compare writers' ideas and perspectives as well as how these are conveyed across two or more texts",
      "AO2: Explain, comment on and analyse how writers use language and structure",
      "Comparative analytical writing",
      "Identifying and articulating viewpoints",
    ],
  },

  // ── Lesson 6: Q4 Advanced — Top-Band Comparison ────────────────────────
  {
    id: "lang-p2-06-q4-advanced",
    title: "Q4 Advanced: Structuring a Top-Band Comparison",
    text: `${SOURCE_MODERN_TRAVEL}\n\n${SOURCE_19C_TRAVEL}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the mark scheme descriptors for top-band Q4 responses (Level 4: 13-16 marks)",
      "Develop the skill of making perceptive, conceptualised comparisons",
      "Explore how context (time period, form, audience) shapes the methods writers use",
      "Move beyond basic comparison towards analytical, evaluative writing",
    ],
    successCriteria: [
      "I can explain how context influences a writer's viewpoint and methods",
      "I can make 'perceptive' comparisons that go beyond surface-level similarities and differences",
      "I can structure a response thematically rather than source-by-source",
      "I can analyse subtle differences in tone, register, and rhetorical strategy",
    ],
    keywords: [
      "perceptive",
      "conceptualised",
      "context",
      "register",
      "thematic comparison",
      "evaluation",
      "nuance",
    ],
    starterActivity: {
      title: "Good, Better, Best — Ranking Comparisons",
      duration: "8 minutes",
      instructions:
        "Display three Q4 paragraphs of different quality on the board (labelled X, Y, Z). X simply identifies both viewpoints with no methods. Y compares viewpoints and identifies a method in each source. Z compares viewpoints, analyses methods, and comments on how context influences the difference. Students rank them and explain why Z is strongest. Key point: today we are aiming for Z-level writing — perceptive, analytical, and context-aware.",
      differentiation: {
        support: "Paragraphs are colour-coded to highlight the differences (viewpoints in blue, methods in green, context in yellow).",
        core: "Students rank and annotate independently.",
        stretch: "Students identify specifically which words and phrases in paragraph Z make it 'perceptive.'",
      },
      resources: ["Three model paragraphs projected on board"],
    },
    mainActivities: [
      {
        title: "New Sources — Travel Writing Across the Centuries",
        duration: "15 minutes",
        instructions:
          "Distribute Source A (modern blog post on tourism) and Source B (1863 journal extract on Italian travel). Read both aloud. Then students annotate both sources, identifying: (1) the writer's viewpoint on travel, (2) key methods used (language, tone, structure, rhetoric), (3) contextual factors that influence their perspective (time period, form, audience, social position). Class discussion: what is similar? What is different? How does context explain the differences?",
        differentiation: {
          support: "Provide guiding questions for annotation: 'How does the writer feel about travel?' 'What words or techniques help you see this?' 'When was this written and who for?'",
          core: "Students annotate independently using the three-focus system.",
          stretch: "Students also identify moments where the writers' viewpoints are more complex or contradictory than they first appear.",
        },
        resources: ["Source A and Source B printed handouts"],
      },
      {
        title: "Thematic Planning — Building a Top-Band Structure",
        duration: "12 minutes",
        instructions:
          "Explain that top-band responses are structured thematically, not source-by-source. Model a thematic plan on the board: Theme 1 — Authenticity (both writers value genuine experience over superficial tourism/sightseeing, but express this differently). Theme 2 — Privilege (both acknowledge travel as a privilege, but respond to this differently). Theme 3 — Emotional impact (both describe powerful emotional responses to place, but through different methods). Students create their own 3-4 theme plan with quotations from both sources under each theme.",
        differentiation: {
          support: "Themes are provided; students find quotations to fit each theme.",
          core: "Students identify themes themselves and select supporting quotations.",
          stretch: "Students also plan a contextual comment for each theme (e.g., how 21st-century cynicism vs Victorian wonder shapes the tone).",
        },
        resources: ["Thematic planning template"],
      },
      {
        title: "Extended Writing — Full Q4 Response",
        duration: "18 minutes",
        instructions:
          "Students write a full Q4 response in 15 minutes. Question: 'Compare how the writers of Source A and Source B convey their different perspectives on the value of travel.' Use thematic plans. After writing, teacher reads the top-band mark scheme descriptors aloud. Students highlight one sentence in their response that they believe meets the top-band criteria and explain why in the margin.",
        differentiation: {
          support: "Aim for 2-3 thematic paragraphs using sentence starters.",
          core: "3-4 thematic paragraphs with integrated comparison.",
          stretch: "Include an evaluative conclusion that considers which writer's perspective is more convincing and why.",
        },
        resources: ["Thematic plans from previous activity", "Timer displayed"],
      },
    ],
    plenaryActivity: {
      title: "What Makes It Perceptive?",
      duration: "7 minutes",
      instructions:
        "Display a top-band Q4 paragraph written by the teacher. Students identify what makes it 'perceptive' — look for: precise analysis of specific language, awareness of context, conceptualised comparison (linking both sources to a bigger idea), and evaluative comments. Students write one target for their own Q4 writing going forward.",
      differentiation: {
        support: "Key 'perceptive' features are pre-highlighted; students explain why they matter.",
        core: "Students identify perceptive features independently.",
        stretch: "Students rewrite one of their own paragraphs to make it more perceptive, using the model as inspiration.",
      },
    },
    homework:
      "Rewrite your best Q4 paragraph from today's lesson, improving it using the 'perceptive' criteria discussed in the plenary. Then write a new paragraph on a theme you did not cover in class.",
    worksheetQuestions: [
      {
        question:
          "What does the mark scheme mean by 'perceptive' analysis? How is it different from 'clear' analysis?",
        lines: 4,
        modelAnswer:
          "'Clear' analysis identifies a method and explains its effect in a straightforward way — it is competent but not exceptional. 'Perceptive' analysis goes further: it shows deep understanding of WHY the writer makes specific choices, considers the effect of context, identifies subtle or unexpected interpretations, and often connects individual techniques to a broader argument about the writer's purpose or the text's meaning.",
        marks: 3,
      },
      {
        question:
          "Read Source A. What is Marcus Chen's viewpoint on modern tourism? Support with two quotations.",
        lines: 4,
        modelAnswer:
          "Chen believes modern tourism is destructive and superficial. He distinguishes between 'tourism' (harmful) and 'travel' (meaningful), arguing that tourism 'takes a living city and converts it into a backdrop for selfies.' He sees genuine travel as requiring 'humility' — 'arriving without expectations, learning the language badly' — suggesting it should be uncomfortable and transformative rather than commodified.",
        marks: 3,
      },
      {
        question:
          "Read Source B. What is Charlotte Baines's viewpoint on travel? Support with two quotations.",
        lines: 4,
        modelAnswer:
          "Baines sees travel as a profound, enriching experience that expands one's understanding of the world. She describes being moved 'to tears' by the art in the Uffizi Gallery, suggesting travel creates deep emotional and intellectual responses. She believes 'those who can travel ought to do so, for it enlarges the soul in ways that no book, however brilliant, can replicate.'",
        marks: 3,
      },
      {
        question:
          "Compare how the two writers use personal experience to present their viewpoints. Write a developed comparative paragraph.",
        lines: 8,
        modelAnswer:
          "Both writers draw on personal experience to make their arguments persuasive, but to very different effect. Source A uses a specific anecdote — standing in the Sistine Chapel among tourists 'all holding phones above their heads' — to illustrate his disgust with modern tourism. The image is deliberately unflattering, designed to make the reader feel uncomfortable and complicit. Source B also uses personal experience, but with reverence rather than cynicism: Baines recalls seeing the cathedral dome 'with a gasp that I could not suppress,' presenting herself as overwhelmed by beauty. The contrast is revealing: both writers describe visiting famous cultural sites, but Source A sees tourists destroying the experience while Source B sees the experience as transformative. This difference partly reflects their contexts — Source A writes in an age of mass tourism and social media, where oversaturation has bred cynicism, while Source B writes in an era when such travel was rare and therefore retained its power to astonish.",
        marks: 6,
      },
      {
        question:
          "How does the form of each text (blog post vs private journal) influence the writer's methods and tone?",
        lines: 5,
        modelAnswer:
          "Source A is a blog post, a public-facing form designed to provoke and persuade a wide audience. This explains its confrontational tone, use of direct address ('what are we actually doing here?'), and short, punchy sentences for impact. Source B is a private journal, written for personal reflection (or a small circle of acquaintances). This allows for a more intimate, lyrical tone — the writer can express vulnerability ('moved me to tears') without fear of public criticism. The form shapes the honesty of each text: Source A performs its honesty publicly for rhetorical effect, while Source B's honesty feels genuinely private and unguarded.",
        marks: 4,
      },
      {
        question:
          "Why is it better to structure a Q4 response thematically rather than writing about Source A first and then Source B?",
        lines: 3,
        modelAnswer:
          "A thematic structure forces you to compare throughout your response, which is what the question demands. Writing about Source A then Source B often results in two separate analyses with little genuine comparison. Thematic paragraphs (e.g., 'Both writers explore the idea of authenticity...') ensure every paragraph addresses both texts, making the comparison sustained and integrated — a key requirement of the top mark band.",
        marks: 2,
      },
      {
        question:
          "Write a thematic plan for a Q4 response on these two sources. Identify three themes for comparison, with a key quotation from each source for each theme.",
        lines: 8,
        modelAnswer:
          "Theme 1 — Authenticity vs Performance: Source A argues tourism converts places into 'a backdrop for selfies'; Source B describes travel as seeing Florence 'revealed herself gradually, as all great cities should.' Theme 2 — Emotional Impact: Source A describes cynicism and disgust ('what are we actually doing here?'); Source B describes wonder and being 'moved to tears.' Theme 3 — Privilege and Responsibility: Source A criticises privileged tourists who 'drive out local residents'; Source B acknowledges 'travel of this kind is a privilege afforded to few' and argues those who can travel 'ought to do so.' Each theme provides a point of comparison that covers both viewpoints and methods.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson assumes students have already covered Q4 basics in Lesson 5. If teaching to a weaker group, consider spending two lessons on Lesson 5 before moving to this.",
      "The travel sources work well because the viewpoints are more nuanced than simply 'for/against' — push students to recognise this complexity.",
      "Emphasise that contextual comments must be relevant to the analysis, not bolted on. 'This was written in 1863' is not analysis; 'The rarity of travel in 1863 explains Baines's sense of awe' is.",
      "The self-assessment activity (highlighting a 'perceptive' sentence) is valuable metacognitive practice — allow time for it.",
      "For top sets, introduce the concept of 'conceptualised response' — where the student has a clear thesis that runs through the whole answer.",
    ],
    targetedSkills: [
      "AO3: Compare writers' ideas and perspectives as well as how these are conveyed",
      "AO2: Analyse how writers use language and structure to achieve effects",
      "Contextual understanding and its application to analysis",
      "Thematic structuring and sustained comparison",
    ],
  },

  // ── Lesson 7: Q5 Article Writing ───────────────────────────────────────
  {
    id: "lang-p2-07-q5-article",
    title: "Q5: Writing to Present a Viewpoint — Article Format",
    text: `${SOURCE_MODERN_FOOD}\n\n${SOURCE_19C_FOOD}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the requirements of Q5: writing to present a viewpoint (40 marks)",
      "Learn the conventions of article writing: headline, strapline, opening, structure, tone",
      "Develop a clear, sustained viewpoint on a given topic",
      "Use a range of persuasive and rhetorical techniques effectively",
    ],
    successCriteria: [
      "I can write an article with a clear headline and appropriate structure",
      "I can sustain a consistent viewpoint throughout my writing",
      "I can use at least five persuasive techniques (e.g., direct address, rhetorical questions, statistics, anecdote, emotive language)",
      "I can vary my sentence structures for deliberate effect",
    ],
    keywords: [
      "article",
      "viewpoint",
      "headline",
      "rhetoric",
      "persuasion",
      "direct address",
      "counter-argument",
      "tone",
    ],
    starterActivity: {
      title: "Headline Workshop",
      duration: "7 minutes",
      instructions:
        "Display five headlines from real newspaper articles about food (e.g., 'The True Cost of Your Weekly Shop,' 'Why Your Avocado Toast Is Destroying the Planet'). Students discuss in pairs: what makes a good headline? Elicit key features: short, punchy, provocative, sometimes uses a pun or question. Students then write their own headline for an article about the cost of cheap food. Share best examples. Introduce Q5: 40 marks, the most valuable question on the paper.",
      differentiation: {
        support: "Provide a formula: [Topic] + [Strong Verb/Adjective] + [Provocation]. E.g., 'Cheap Food: The Price We Cannot Afford.'",
        core: "Students write headlines independently.",
        stretch: "Students write three headlines in different styles (factual, provocative, humorous) and evaluate which is most effective.",
      },
    },
    mainActivities: [
      {
        title: "Article Anatomy — Structure and Conventions",
        duration: "12 minutes",
        instructions:
          "Using Source A (modern food article) as a model, identify the key structural features of a newspaper article: (1) Headline — short and attention-grabbing. (2) Opening — hooks the reader with a bold statement, statistic, or scene-setting. (3) Body paragraphs — each makes a distinct point with evidence or examples. (4) Counter-argument — addresses the opposing view before dismissing it. (5) Conclusion — returns to the central argument with a memorable final line. Students annotate Source A identifying each structural element. Emphasise: the exam may ask for an article, speech, letter, or essay — today we focus on articles.",
        differentiation: {
          support: "Provide a pre-annotated version with structural labels and students explain why each feature is effective.",
          core: "Students annotate independently, then compare with a partner.",
          stretch: "Students also identify where the writer shifts tone or register and comment on why.",
        },
        resources: [
          "Source A printed handout",
          "Article structure reference card",
        ],
      },
      {
        title: "Planning and Drafting — Your Article",
        duration: "15 minutes",
        instructions:
          "Display the Q5 task: 'Write an article for a national newspaper in which you argue your viewpoint on whether we have a responsibility to change the way we eat.' Students spend 5 minutes planning using a paragraph planner: Headline, Opening Hook, Point 1, Point 2, Point 3, Counter-Argument, Conclusion. Then spend 10 minutes writing the opening three paragraphs (headline, hook, and first main point). Teacher circulates, providing feedback on openings.",
        differentiation: {
          support: "Provide a partially completed plan with the counter-argument pre-written. Focus on writing a strong opening paragraph.",
          core: "Students plan and write the first three sections independently.",
          stretch: "Students aim for a distinctive authorial voice — witty, angry, measured — and sustain it throughout.",
        },
        resources: ["Paragraph planner template"],
      },
      {
        title: "Technique Toolkit — Upgrading Your Writing",
        duration: "12 minutes",
        instructions:
          "Pause the writing. Display a 'Technique Toolkit' on the board: (1) Tricolon (rule of three), (2) Rhetorical question, (3) Direct address, (4) Anecdote, (5) Statistic (can be invented in the exam), (6) Emotive language, (7) Counter-argument + rebuttal, (8) Short sentence for impact. Students review what they have written so far and deliberately add at least three techniques they have not yet used. Highlight these in a different colour. Then continue writing the rest of the article (10 minutes).",
        differentiation: {
          support: "Students add two techniques, chosen from a simplified list with examples.",
          core: "Students add three techniques and annotate them in the margin.",
          stretch: "Students aim for all eight techniques and consider where each has maximum impact (e.g., rhetorical question at the end, anecdote at the start).",
        },
        resources: ["Technique Toolkit reference card"],
      },
    ],
    plenaryActivity: {
      title: "Read and Rank",
      duration: "6 minutes",
      instructions:
        "Three volunteers read their opening paragraphs aloud. Class votes on which is most engaging and explains why. Teacher draws out key success criteria: a clear viewpoint, an engaging opening, deliberate technique use, and a consistent tone. Students write one improvement target for their Q5 writing.",
      differentiation: {
        support: "Students vote and give a one-word reason (e.g., 'powerful,' 'vivid').",
        core: "Students explain their vote with reference to specific features.",
        stretch: "Students offer constructive criticism as well as praise.",
      },
    },
    homework:
      "Complete your article (aim for 400-500 words total). Underline and label at least five different persuasive techniques in your final draft. Bring to next lesson for peer assessment.",
    worksheetQuestions: [
      {
        question:
          "How many marks is Q5 worth, and how are those marks divided?",
        lines: 2,
        modelAnswer:
          "Q5 is worth 40 marks: 24 marks for content and organisation (AO5) and 16 marks for technical accuracy — spelling, punctuation, and grammar (AO6).",
        marks: 2,
      },
      {
        question:
          "List five conventions of an article that you should include in your Q5 response.",
        lines: 4,
        modelAnswer:
          "1. A headline that is short and engaging. 2. An opening that hooks the reader (bold statement, question, or anecdote). 3. Paragraphs that each develop a separate point. 4. A counter-argument that acknowledges the opposing view before rebutting it. 5. A strong conclusion that leaves a lasting impression. Optional: a strapline or subheading.",
        marks: 5,
      },
      {
        question:
          "Read the opening of Source A: 'The British supermarket is a masterpiece of illusion.' Why is this an effective opening line? What techniques does the writer use?",
        lines: 4,
        modelAnswer:
          "This is effective because it immediately creates intrigue — the reader wants to know what the 'illusion' is. The word 'masterpiece' is ironic, as it usually describes something admirable, but here it describes deception. The metaphor of 'illusion' positions the supermarket as deliberately misleading, like a magic trick. This bold, provocative opening establishes the writer's critical viewpoint from the very first sentence.",
        marks: 4,
      },
      {
        question:
          "Identify the counter-argument in Source A. How does the writer respond to it?",
        lines: 4,
        modelAnswer:
          "The counter-argument is: 'Not everyone can afford organic.' The writer acknowledges this is true ('This is true') but then immediately rebuts it, arguing that 'the solution is not to accept exploitation as the price of feeding a nation' but to 'demand a food system that is fair for everyone.' By conceding the point before redirecting the argument, the writer appears reasonable while maintaining her position.",
        marks: 3,
      },
      {
        question:
          "Write the opening paragraph (headline + first paragraph) of an article arguing that schools should provide free meals for all students.",
        lines: 8,
        modelAnswer:
          "Feed Every Child: Why Free School Meals Should Be a Right, Not a Privilege\n\nImagine being fourteen years old and hungry. Not the vague, mid-afternoon hunger of a missed snack, but the grinding, persistent hunger that makes concentration impossible and humiliation inevitable. For hundreds of thousands of British children, this is not a thought experiment — it is Tuesday. It is every day. And while politicians debate budgets and eligibility criteria, those children sit in classrooms unable to learn, unable to focus, unable to be anything other than hungry. Free school meals for all students would not just feed bodies — it would transform lives.",
        marks: 6,
      },
      {
        question:
          "Why is it important to include a counter-argument in your article? What does it show the examiner?",
        lines: 3,
        modelAnswer:
          "Including a counter-argument shows the examiner that you can anticipate opposing views and deal with them convincingly. It demonstrates maturity of thought and makes your argument more persuasive — a writer who only presents one side seems biased, while one who acknowledges the opposition and then dismantles it appears balanced, intelligent, and ultimately more convincing. This is a key feature of top-band writing.",
        marks: 3,
      },
      {
        question:
          "Explain three different ways you could open an article to hook the reader. Give an example of each.",
        lines: 6,
        modelAnswer:
          "1. Bold statement: 'The food industry is built on a lie — and we swallow it three times a day.' This shocks the reader into attention. 2. Rhetorical question: 'When did we decide that convenience mattered more than compassion?' This makes the reader think and feel implicated. 3. Anecdote: 'Last week, I watched a mother in a supermarket put back a packet of strawberries because she could not afford both the fruit and the bread. She chose the bread.' This creates empathy through a specific, human story.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "Q5 is worth half the paper — students must understand that this is where the bulk of their marks come from.",
      "Emphasise that AO6 (technical accuracy) is worth 16 marks — neat, accurate writing matters enormously.",
      "Students often forget to use article conventions (headline, etc.) under exam pressure. Drill this.",
      "The source texts on food provide thematic material that students can draw on in their own writing, as they would in the real exam.",
      "Warn students: they can invent statistics in the exam ('Studies show that 70% of parents...' ) but they must sound plausible.",
      "For the writing task, encourage students to choose a viewpoint they genuinely care about — authentic passion produces better writing.",
    ],
    targetedSkills: [
      "AO5: Communicate clearly, effectively, and imaginatively, selecting and adapting tone, style, and register",
      "AO5: Organise information and ideas using structural and grammatical features",
      "AO6: Use a range of vocabulary and sentence structures for clarity, purpose, and effect",
      "AO6: Accurate spelling, punctuation, and grammar",
    ],
  },

  // ── Lesson 8: Q5 Speech Writing ────────────────────────────────────────
  {
    id: "lang-p2-08-q5-speech",
    title: "Q5: Speech Writing — Rhetorical Techniques",
    text: `${SOURCE_MODERN_SPORT}\n\n${SOURCE_19C_SPORT}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the conventions of speech writing and how they differ from article writing",
      "Identify and deploy key rhetorical techniques: tricolon, anaphora, antithesis, direct address, rhetorical questions",
      "Write a persuasive speech that engages a specific audience",
      "Develop an authentic, passionate voice in transactional writing",
    ],
    successCriteria: [
      "I can write a speech with a clear opening address, body, and rallying conclusion",
      "I can use at least four rhetorical techniques deliberately and effectively",
      "I can sustain direct address to a specific audience throughout",
      "I can vary my tone — moving between passion, humour, anger, and sincerity",
    ],
    keywords: [
      "speech",
      "rhetoric",
      "tricolon",
      "anaphora",
      "antithesis",
      "direct address",
      "audience",
      "oratory",
    ],
    starterActivity: {
      title: "Famous Lines — What Makes Them Memorable?",
      duration: "8 minutes",
      instructions:
        "Display four famous speech extracts (e.g., 'I have a dream...' — MLK; 'We shall fight on the beaches...' — Churchill; 'Ask not what your country can do for you...' — JFK; 'The lady's not for turning' — Thatcher). Students identify the technique in each: anaphora (repetition), listing/tricolon, antithesis (contrast), metaphor. Discuss: why are these lines remembered decades later? Key point: speeches use different techniques from articles because they are heard, not read. Sound, rhythm, and repetition matter.",
      differentiation: {
        support: "Techniques are identified — students match each to the correct speech extract.",
        core: "Students identify techniques independently.",
        stretch: "Students explain why each technique is particularly suited to spoken delivery (e.g., repetition aids memory and creates rhythm).",
      },
      resources: ["Famous speech extracts projected on board"],
    },
    mainActivities: [
      {
        title: "Speech Structure and Conventions",
        duration: "10 minutes",
        instructions:
          "Explain the key differences between a speech and an article: (1) Address the audience directly and explicitly ('Ladies and gentlemen,' 'Fellow students'). (2) Use inclusive pronouns throughout ('we,' 'us,' 'our'). (3) Build to a climax — the most powerful point should come near the end. (4) Use repetition and rhythm for emphasis. (5) End with a call to action or rallying statement. Display the exam question: 'Write a speech for a school assembly in which you argue that sport is more important than academic results.' Read both sources for thematic inspiration.",
        differentiation: {
          support: "Provide a speech structure template with sections pre-labelled.",
          core: "Students take notes on the five conventions and plan their speech structure.",
          stretch: "Students also consider how to adapt their tone for a school assembly audience — not too formal, not too casual.",
        },
        resources: [
          "Source A and Source B printed handouts",
          "Speech structure template",
        ],
      },
      {
        title: "Rhetoric Relay — Practising Techniques",
        duration: "12 minutes",
        instructions:
          "Students work in pairs. Display six rhetorical techniques with definitions and examples: (1) Tricolon: 'Education, dedication, determination.' (2) Anaphora: 'We need change. We need courage. We need action.' (3) Antithesis: 'It is not about winning trophies; it is about building character.' (4) Rhetorical question: 'When did we decide that a grade on a piece of paper matters more than a child's happiness?' (5) Direct address: 'You know this is true.' (6) Emotive anecdote: 'I remember the day I scored my first goal...' Each pair writes one sentence for each technique on the topic of sport vs academics. Share best examples with the class.",
        differentiation: {
          support: "Provide sentence frames for each technique that students complete (e.g., 'We need ___. We need ___. We need ___.').",
          core: "Students write original sentences for all six techniques.",
          stretch: "Students combine two techniques in a single sentence (e.g., anaphora + rhetorical question).",
        },
        resources: ["Rhetorical techniques reference card"],
      },
      {
        title: "Writing the Speech — Timed Draft",
        duration: "22 minutes",
        instructions:
          "Students write their full speech in 20 minutes (slightly longer than the 45 minutes allocated in the exam for Q5, proportionally, to allow for learning). Use a visible timer. Remind students: start with an address to the audience, build your argument through three or four points, include a counter-argument, and end with a powerful call to action. After writing, students read their conclusion aloud to a partner. Partner gives feedback: is it memorable? Does it make you want to act?",
        differentiation: {
          support: "Use the speech structure template with sentence starters. Aim for 300 words.",
          core: "Write independently. Aim for 400-500 words with at least four deliberate techniques.",
          stretch: "Aim for a distinctive voice that shifts tone (e.g., humour to seriousness, personal anecdote to broader argument). 500+ words.",
        },
        resources: [
          "Timer displayed",
          "Rhetorical techniques reference card",
        ],
      },
    ],
    plenaryActivity: {
      title: "Deliver Your Opening",
      duration: "8 minutes",
      instructions:
        "Four volunteers stand and deliver the first 30 seconds of their speech to the class. Class provides feedback using two criteria: (1) Did it grab attention? (2) Could you hear the rhetorical techniques? Discuss: how does hearing a speech differ from reading it? Reinforce: examiners will read your speech, but you should write it as if it will be spoken — rhythm and power matter.",
      differentiation: {
        support: "Volunteers are chosen sensitively; alternative is to read to a partner instead.",
        core: "Volunteers deliver to the class.",
        stretch: "After delivering, the speaker identifies which technique landed best and which needs reworking.",
      },
    },
    homework:
      "Redraft your speech, improving it based on today's feedback. Highlight and label every rhetorical technique used. Practise reading it aloud — does it sound natural and powerful when spoken?",
    worksheetQuestions: [
      {
        question:
          "List three key differences between writing a speech and writing an article.",
        lines: 4,
        modelAnswer:
          "1. A speech directly addresses a specific audience (e.g., 'Fellow students') and uses 'we/us' throughout, while an article addresses a general readership. 2. A speech relies heavily on rhetorical techniques like repetition, tricolon, and anaphora because it is designed to be heard — rhythm and sound matter more than in print. 3. A speech typically builds to a climax and ends with a call to action, while an article may end with a reflective conclusion.",
        marks: 3,
      },
      {
        question:
          "Read Source B. Identify two rhetorical techniques Dr Whitmore uses in his speech and explain their effect.",
        lines: 5,
        modelAnswer:
          "1. Tricolon: 'discipline, courage, fairness, and the ability to accept defeat with grace' — listing qualities in a rhythmic pattern makes them sound like an established, inarguable set of values, adding authority to his argument. 2. Direct address / inclusive language: 'Let us not undervalue what the playing field teaches' — the use of 'Let us' involves the audience in his argument, creating a sense of shared responsibility and making it harder to disagree.",
        marks: 4,
      },
      {
        question:
          "Write an example of anaphora on the topic of why sport matters. Your example should be at least three sentences.",
        lines: 4,
        modelAnswer:
          "Sport teaches us to fail and get back up. Sport teaches us that effort matters more than talent. Sport teaches us that we are stronger together than we ever could be alone. Without it, we are raising a generation that has never learned the most important lesson of all: how to try.",
        marks: 3,
      },
      {
        question:
          "Write an example of antithesis on the topic of sport vs academic results.",
        lines: 3,
        modelAnswer:
          "We measure our children by the grades they achieve, not by the resilience they develop. We celebrate the student who memorises a textbook, but ignore the one who picks herself up after defeat and tries again. We have confused what is measurable with what is meaningful.",
        marks: 3,
      },
      {
        question:
          "Why is a 'call to action' important at the end of a speech? Write an example for this speech topic.",
        lines: 4,
        modelAnswer:
          "A call to action is important because a speech aims to change behaviour, not just inform. It tells the audience what to DO with the ideas they have heard. Example: 'So I am asking you — every student, every teacher, every parent in this room — to demand that sport is given equal time, equal funding, and equal respect. Not next year. Not next term. Now. Because our children cannot wait for us to realise what we should already know.'",
        marks: 4,
      },
      {
        question:
          "Write the opening paragraph of a speech to your year group arguing that competitive sport should be compulsory in all schools. Include at least two rhetorical techniques.",
        lines: 8,
        modelAnswer:
          "Good morning, Year 11. I want to ask you a question — and I want you to answer it honestly, even if only in your own heads. When was the last time you truly pushed yourself? Not in an exam hall, not revising at a desk, but physically — your muscles burning, your lungs screaming, your heart hammering so hard you could hear it? If you cannot remember, then something has gone seriously wrong. Because we are a generation that has been told, over and over, that what matters is our grades, our predicted scores, our university applications. But nobody — nobody — ever became resilient by filling in a worksheet. Resilience is built on the playing field, in the swimming pool, on the track. And it is time we fought to get it back.",
        marks: 6,
      },
      {
        question:
          "Compare how Source A and Source B both use personal experience in their arguments about sport. Which is more effective and why?",
        lines: 5,
        modelAnswer:
          "Source A opens with a personal anecdote: 'I fell in love with football on a concrete pitch in south London,' using sensory detail ('a ball so worn the panels were peeling off') to create a vivid, relatable memory. Source B uses professional experience: 'I have observed, over many years,' drawing authority from his role as a headmaster. Source A is arguably more effective for a modern audience because the emotional, personal opening creates immediate empathy, while Source B's appeal to authority may feel less persuasive to contemporary readers who value authenticity over hierarchy.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Speech is a very common Q5 form — students must know the conventions thoroughly.",
      "The live delivery activity is powerful but handle sensitively — never force reluctant speakers. Allow alternatives (reading to a partner, recording on a device).",
      "Common error: students write a speech that reads like an essay. Push for direct address, inclusive pronouns, and spoken-word rhythm.",
      "The sources on sport provide useful thematic material and model rhetoric — encourage students to 'borrow' techniques they notice.",
      "Remind students that in the exam, Q5 will be thematically linked to the sources they have read in Section A. They should draw on ideas from the sources.",
    ],
    targetedSkills: [
      "AO5: Communicate clearly, effectively, and imaginatively, selecting tone, style, and register for purpose and audience",
      "AO5: Organise information using structural and grammatical features",
      "AO6: Use a range of vocabulary and sentence structures",
      "AO6: Accurate spelling, punctuation, and grammar",
    ],
  },

  // ── Lesson 9: Q5 Letter Writing ────────────────────────────────────────
  {
    id: "lang-p2-09-q5-letter",
    title: "Q5: Letter Writing — Formal Persuasion",
    text: `${SOURCE_MODERN_FOOD}\n\n${SOURCE_19C_FOOD}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the conventions of formal letter writing for a persuasive purpose",
      "Learn correct letter format: addresses, date, greeting, sign-off",
      "Develop a formal but engaging register suitable for writing to a person in authority",
      "Construct a logical, well-evidenced argument within the letter format",
    ],
    successCriteria: [
      "I can format a letter correctly with appropriate greeting and sign-off",
      "I can sustain a formal register throughout while keeping the writing engaging",
      "I can structure my argument logically with clear paragraphs, each making a distinct point",
      "I can adapt my persuasive techniques for a formal context (e.g., reasoned argument over emotional appeal)",
    ],
    keywords: [
      "formal letter",
      "register",
      "persuasion",
      "recipient",
      "salutation",
      "sign-off",
      "formal register",
      "reasoned argument",
    ],
    starterActivity: {
      title: "Register Roulette",
      duration: "7 minutes",
      instructions:
        "Display the same request written in three different registers: (1) 'Oi, sort out the school dinners, they're rank.' (2) 'I am writing to express my serious concerns about the quality of food served in our school canteen.' (3) 'The school canteen food is not great and I think it should be better.' Students identify which is too informal, which is too bland, and which strikes the right formal-but-engaging tone. Discuss: when writing a letter to someone in authority, you need register (2) — formal, respectful, but with clear conviction.",
      differentiation: {
        support: "Labels are provided; students explain why each label fits.",
        core: "Students identify the register of each and explain.",
        stretch: "Students rewrite option (3) to match the formal-but-engaging register of option (2).",
      },
    },
    mainActivities: [
      {
        title: "Letter Format and Conventions",
        duration: "10 minutes",
        instructions:
          "Display a model formal letter on the board with annotations: (1) Your address (top right — in the exam, just write your school name). (2) Recipient's address (left). (3) Date. (4) Greeting: 'Dear Mr/Mrs/Ms [Name]' if known, 'Dear Sir/Madam' if not. (5) Opening paragraph: state your purpose clearly. (6) Body paragraphs: one point per paragraph with evidence. (7) Penultimate paragraph: counter-argument or concession. (8) Final paragraph: restate your position and request action. (9) Sign-off: 'Yours sincerely' (if named) or 'Yours faithfully' (if 'Dear Sir/Madam'). Students copy the format into their books as a reference.",
        differentiation: {
          support: "Provide a printed letter template with the format pre-labelled — students stick it in their books.",
          core: "Students copy the format with annotations.",
          stretch: "Students also note common errors (e.g., 'Yours Faithfully' with a capital F is wrong after 'Dear Mr Smith').",
        },
        resources: ["Model letter projected on board", "Letter template handout"],
      },
      {
        title: "Planning the Letter",
        duration: "10 minutes",
        instructions:
          "Display the Q5 task: 'Write a letter to your local MP in which you argue that the government should do more to ensure affordable, healthy food is available to all families.' Students read both sources for ideas and inspiration. Then plan their letter using a structured paragraph planner: (1) Purpose + reason for writing. (2) The scale of the problem. (3) The impact on families. (4) What the government should do. (5) Counter-argument + rebuttal. (6) Final appeal + request for action.",
        differentiation: {
          support: "Provide the paragraph planner with bullet-point prompts under each section.",
          core: "Students plan independently using the six-paragraph structure.",
          stretch: "Students also plan the specific tone of each paragraph (e.g., factual opening, emotive middle, assertive close).",
        },
        resources: [
          "Source A and Source B handouts",
          "Paragraph planner template",
        ],
      },
      {
        title: "Writing the Letter — Extended Practice",
        duration: "25 minutes",
        instructions:
          "Students write their full letter in 22 minutes. Circulate and provide targeted feedback, focusing on: (1) Is the format correct? (2) Is the register consistent? (3) Is each paragraph making a clear, distinct point? (4) Is there a counter-argument? With 5 minutes remaining, pause and remind students to write a strong final paragraph that restates their position and makes a clear request for action. After finishing, students proofread their own work for SPaG errors, correcting in a different colour.",
        differentiation: {
          support: "Use the paragraph planner with sentence starters. Aim for 300-350 words. Focus on format and register.",
          core: "Write independently. Aim for 400-500 words. Focus on sustained argument and counter-argument.",
          stretch: "Aim for 500+ words with sophisticated vocabulary, varied sentence structures, and a distinctive authorial voice within the formal register.",
        },
        resources: [
          "Timer displayed",
          "Paragraph planners from previous activity",
        ],
      },
    ],
    plenaryActivity: {
      title: "Format Check — Peer Review",
      duration: "8 minutes",
      instructions:
        "Students swap books with a partner. Partners check ONLY the format: (1) Is there a greeting? (2) Is the register formal throughout? (3) Is there a sign-off? (4) Is 'Yours sincerely/faithfully' used correctly? Partners tick or highlight any format errors. Then students self-assess: on a scale of 1-5, how confident are you with letter format? Record the number in their books.",
      differentiation: {
        support: "Provide a format checklist for partners to tick.",
        core: "Partners check format and register independently.",
        stretch: "Partners also assess whether the argument is logical and sustained, providing written feedback.",
      },
      resources: ["Format checklist (optional, for support tier)"],
    },
    homework:
      "Proofread and redraft your letter, correcting all SPaG errors and improving at least two paragraphs. Remember: AO6 (technical accuracy) is worth 16 marks. Bring the final draft to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "When should you use 'Yours sincerely' and when should you use 'Yours faithfully'?",
        lines: 2,
        modelAnswer:
          "Use 'Yours sincerely' when you have addressed the recipient by name (e.g., 'Dear Mrs Patel'). Use 'Yours faithfully' when you have used 'Dear Sir/Madam' because you do not know the recipient's name.",
        marks: 2,
      },
      {
        question:
          "Why is register important in a formal letter? What might happen if your register is too informal?",
        lines: 3,
        modelAnswer:
          "Register is important because it shows the examiner you can adapt your writing to suit the audience and purpose. A letter to an MP requires formal, respectful language. If the register is too informal (e.g., slang, abbreviations, overly casual phrasing), it undermines the writer's credibility and suggests they do not take the issue seriously. It would also lose marks for AO5 (selecting appropriate tone and register).",
        marks: 3,
      },
      {
        question:
          "Read Source B. Mrs Grantly is writing a kind of formal persuasive text. Identify two techniques she uses that you could adapt for your own letter writing.",
        lines: 5,
        modelAnswer:
          "1. Emotive, detailed description: Grantly describes 'children with the swollen bellies of malnutrition' and 'eyes too large for their faces,' using vivid physical detail to create sympathy and outrage. This technique works in a letter because it makes the problem feel real and urgent. 2. Pre-emptive counter-argument: She anticipates the objection that the poor are 'idle,' addressing it directly: 'The cause of this misery is not idleness, as comfortable commentators so often suggest.' This shows she understands the opposing view and can dismantle it, strengthening her credibility.",
        marks: 4,
      },
      {
        question:
          "Write the opening paragraph of a letter to your headteacher arguing that the school canteen should offer healthier options. Include a clear statement of purpose.",
        lines: 6,
        modelAnswer:
          "Dear Ms Thompson,\n\nI am writing to you to express my growing concern about the quality and nutritional value of the food currently available in our school canteen. As a Year 11 student who eats lunch at school five days a week, I have witnessed first-hand the limited range of healthy options on offer, and I believe this is having a detrimental impact on students' concentration, energy levels, and long-term wellbeing. I would like to respectfully propose several changes that I believe would benefit the entire school community.",
        marks: 4,
      },
      {
        question:
          "Write a counter-argument paragraph for the same letter. Acknowledge a likely objection and then rebut it.",
        lines: 6,
        modelAnswer:
          "I understand, of course, that the school operates within a limited budget, and that healthier ingredients may cost more than the processed alternatives currently served. This is a valid concern, and I do not underestimate the financial pressures the school faces. However, I would argue that the long-term costs of poor nutrition — reduced concentration in lessons, increased absence due to illness, and lower academic performance — far outweigh the short-term savings of cheaper food. Investing in students' health is investing in their education, and I believe this is a cost that can be justified.",
        marks: 4,
      },
      {
        question:
          "Why is it important to end a formal letter with a clear request for action? Write an example closing paragraph.",
        lines: 5,
        modelAnswer:
          "A clear request for action gives your letter purpose — without it, you have simply stated opinions without asking for change. It shows confidence and clarity. Example: 'I would be grateful if you would consider establishing a student-staff working group to review the canteen menu, with the aim of introducing at least three new healthy options by the start of next term. I would welcome the opportunity to discuss this further and would be happy to be involved in any consultation process. Thank you for taking the time to read my letter.\n\nYours sincerely,\n[Student Name]'",
        marks: 4,
      },
      {
        question:
          "What are three common mistakes students make when writing a formal letter in the exam? How can each be avoided?",
        lines: 5,
        modelAnswer:
          "1. Forgetting the format — no greeting or sign-off. Avoid this by memorising the layout and always starting with 'Dear...' 2. Slipping into informal register (e.g., 'gonna,' 'kids,' 'sort it out'). Avoid this by re-reading each paragraph and checking for casual language. 3. Not structuring the argument — just listing complaints without developing them. Avoid this by planning before writing, with one clear point per paragraph.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Letter format is frequently tested and frequently done poorly — drill the conventions until they are automatic.",
      "The biggest challenge is sustaining formal register. Students often start formally and slip into casual language by paragraph three.",
      "Remind students that in the exam, they do not need to write a real address — a school name or 'School Address Here' is sufficient.",
      "The source texts on food provide relevant ideas students can draw on (cost, ethics, health, responsibility).",
      "SPaG is worth 16 marks on Q5 — dedicate class time to proofreading. This is especially important for letter writing, where formality demands accuracy.",
      "For lower-ability students, the format itself is the priority. For higher-ability students, push for sophistication in argument and register.",
    ],
    targetedSkills: [
      "AO5: Communicate clearly and effectively, selecting appropriate tone, style, and register",
      "AO5: Organise information and ideas using structural and grammatical features",
      "AO6: Use a range of vocabulary and sentence structures for clarity and purpose",
      "AO6: Accurate spelling, punctuation, and grammar",
      "Formal letter conventions and format",
    ],
  },

  // ── Lesson 10: Full Paper Practice ─────────────────────────────────────
  {
    id: "lang-p2-10-full-paper-practice",
    title: "Full Paper Practice — Timed Conditions with Two Sources",
    text: `${SOURCE_MODERN_SPORT}\n\n${SOURCE_19C_SPORT}`,
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Apply all Paper 2 skills in timed, exam-style conditions",
      "Practise effective time management across all five questions",
      "Build exam stamina and confidence by completing a full paper simulation",
      "Self-assess performance using mark scheme descriptors",
    ],
    successCriteria: [
      "I can complete all five questions within the time allocation",
      "I can apply the skills and strategies learned in Lessons 1-9",
      "I can manage my time effectively, spending proportionate time on each question",
      "I can self-assess my work against the mark scheme and identify areas for improvement",
    ],
    keywords: [
      "exam practice",
      "time management",
      "self-assessment",
      "mark scheme",
      "exam technique",
      "stamina",
    ],
    starterActivity: {
      title: "Timing Strategy Recap",
      duration: "5 minutes",
      instructions:
        "Display the recommended timing breakdown on the board: Reading time: 10 minutes. Q1: 5 minutes. Q2: 8 minutes. Q3: 12 minutes. Q4: 20 minutes. Q5: 45 minutes. Total: 1 hour 45 minutes. Explain: today we are doing a compressed simulation — we have 50 minutes for writing, so timings are adjusted proportionally. Students write the adjusted timings in their books: Q1: 3 min, Q2: 5 min, Q3: 7 min, Q4: 12 min, Q5: 23 min. Emphasise: the real exam is 1 hour 45 minutes. Today is about practising the skill of switching between question types under pressure.",
      differentiation: {
        support: "Adjusted timings are pre-printed and stuck into books. Teacher will announce each time boundary.",
        core: "Students note their own timings and self-manage with clock-watching.",
        stretch: "Students also set personal targets for each question based on previous performance.",
      },
      resources: ["Timing breakdown slide"],
    },
    mainActivities: [
      {
        title: "Reading Time",
        duration: "7 minutes",
        instructions:
          "Distribute both sources (Source A: modern article on football, Source B: 1889 speech on sport). Students read both sources carefully, annotating as they go. Remind students: during reading time in the real exam, you should be identifying the writer's viewpoint, circling powerful language, and noting key differences between the texts. This is NOT wasted time — it is preparation that makes your answers faster and better.",
        differentiation: {
          support: "Provide guiding questions to annotate against: 'What does the writer think about sport?' 'What tone do they use?'",
          core: "Students annotate independently using strategies learned in previous lessons.",
          stretch: "Students make brief marginal notes linking specific quotations to specific questions (e.g., 'Q3 — language' next to a powerful phrase).",
        },
        resources: [
          "Source A and Source B printed handouts (exam-style layout)",
        ],
      },
      {
        title: "Section A: Reading Questions (Q1-Q4)",
        duration: "25 minutes",
        instructions:
          "Students complete all four reading questions in sequence under timed conditions. Display a running timer. Questions: Q1 (3 min): 'Choose four statements below which are TRUE. Shade the boxes of the ones that you think are true. Choose a maximum of four statements. [A-H about Source A].' Q2 (5 min): 'Use details from both sources. Write a summary of the differences between the writers' attitudes to the role of sport in society.' Q3 (7 min): 'You now need to refer only to Source B. How does Dr Whitmore use language to argue in favour of athletic pursuits?' Q4 (10 min): 'Compare how the writers of Source A and Source B convey their different perspectives on the value and purpose of sport. In your answer, you could compare their different attitudes, compare the methods they use to convey their attitudes, and support your response with references to both texts.' Teacher announces time boundaries between questions but does not interrupt for teaching.",
        differentiation: {
          support: "Provide a question-by-question prompt card with reminders (e.g., 'Q2: Write about BOTH sources. Focus on WHAT they say, not HOW.').",
          core: "Students work independently with time prompts.",
          stretch: "Students manage their own time without teacher prompts, aiming to finish with time to spare for checking.",
        },
        resources: [
          "Question paper (printed, exam-style layout)",
          "Timer displayed on board",
          "Prompt cards for support tier",
        ],
      },
      {
        title: "Section B: Writing (Q5)",
        duration: "20 minutes",
        instructions:
          "Students complete Q5 under timed conditions. Question: 'Write an article for a broadsheet newspaper in which you argue your viewpoint on whether competitive sport has a positive or negative influence on young people.' Remind students: 5 minutes planning (minimum), 13 minutes writing, 2 minutes proofreading. This is 40 marks — half the paper. Writing quality matters as much as content. Spelling, punctuation, and grammar are worth 16 of those marks.",
        differentiation: {
          support: "Provide a planning template. Focus on clear paragraphs, correct article format, and three persuasive techniques.",
          core: "Plan and write independently. Aim for 400+ words with varied techniques and a counter-argument.",
          stretch: "Aim for a sophisticated, engaging piece with a distinctive voice, varied sentence structures, and ambitious vocabulary.",
        },
        resources: [
          "Timer displayed",
          "Planning template for support tier",
        ],
      },
    ],
    plenaryActivity: {
      title: "Self-Assessment and Reflection",
      duration: "8 minutes",
      instructions:
        "Display simplified mark scheme descriptors for each question. Students self-assess each of their answers, giving themselves a level (1-4) for each question. Then complete a reflection slip: (1) Which question did you find easiest and why? (2) Which question did you find hardest and why? (3) Did you manage your time well? What would you change? (4) What is your number one priority for improvement before the real exam? Collect reflection slips — use to plan targeted revision sessions.",
      differentiation: {
        support: "Mark scheme is simplified to two bands (lower/higher) with student-friendly language.",
        core: "Full four-level mark scheme descriptors.",
        stretch: "Students also write a specific action plan: 'To improve my Q4, I will practise... by doing...'",
      },
      resources: [
        "Simplified mark scheme handout",
        "Reflection slip",
      ],
    },
    homework:
      "Choose the question you scored lowest on. Redo that question at home, this time without time pressure, using your notes and revision materials. Compare your second attempt with your timed attempt — what improved?",
    worksheetQuestions: [
      {
        question:
          "Q1: Choose four statements below which are TRUE about Source A.\n\nA) The writer first fell in love with football while watching a professional match.\nB) The writer played football on a concrete pitch in south London.\nC) The writer believes professional football in 2024 is primarily a sport.\nD) Ticket prices exclude working-class communities from attending matches.\nE) The 2022 World Cup was held in Brazil.\nF) The writer says players earn more in a week than a nurse earns in a year.\nG) Children's football has become hyper-competitive.\nH) The writer believes football can still be beautiful.",
        lines: 2,
        modelAnswer: "The four true statements are B, D, G, and H.",
        marks: 4,
      },
      {
        question:
          "Q2: Use details from both sources. Write a summary of the differences between the writers' attitudes to the role of sport in society.",
        lines: 10,
        modelAnswer:
          "Source A presents sport, specifically professional football, as having been corrupted and stripped of its value. The writer argues that football has become 'a content delivery platform worth billions of pounds' rather than a genuine game, suggesting its role in society is now primarily commercial rather than joyful. By contrast, Source B views sport as fundamentally positive and character-building, arguing that athletic pursuits teach 'discipline, courage, fairness, and the ability to accept defeat with grace.' While Source A focuses on how sport has been damaged by money and commercialisation, Source B sees it as a vital moral education. Additionally, Source A is concerned about the impact on children, noting that grassroots football has become a 'hyper-competitive industry' that 'discards talent' — suggesting sport harms young people. Source B takes the opposite view, arguing sport is essential for youth development, claiming 'a generation raised without sport will be a generation ill-equipped for the challenges that await them.'",
        marks: 8,
      },
      {
        question:
          "Q3: You now need to refer only to Source B. How does Dr Whitmore use language to argue in favour of athletic pursuits?",
        lines: 12,
        modelAnswer:
          "Dr Whitmore uses language to present sport as morally essential and intellectually serious. He opens by elevating sport to the status of academic subjects, stating he wishes to speak 'not of Latin declensions or mathematical proofs, but of a subject which I consider equally vital' — by placing sport alongside respected disciplines, his language demands that the audience take it seriously. He uses extended examples from specific sports to make his argument concrete: the cricket player learns 'patience,' the rower learns 'endurance,' and the footballer learns 'that individual brilliance means nothing without cooperation.' This listing technique creates a sense of accumulated evidence, making his argument feel comprehensive and irrefutable. The language becomes increasingly assertive: 'I say this view is profoundly mistaken' uses the intensifier 'profoundly' to dismiss opponents forcefully, while the declarative tone of 'I say' positions him as an authority issuing a judgement. His final paragraph uses imperative-like constructions — 'Let us not undervalue' — which, combined with the warning that neglecting sport means neglecting 'character,' creates a sense of moral urgency that compels the audience to agree.",
        marks: 12,
      },
      {
        question:
          "Q4: Compare how the writers of Source A and Source B convey their different perspectives on the value and purpose of sport.",
        lines: 15,
        modelAnswer:
          "Both writers are passionate advocates for sport, yet their perspectives differ dramatically due to their contexts and concerns. Source A's writer sees sport as something once beautiful that has been destroyed by commercialisation, while Source B's writer sees sport as an enduring force for moral good.\n\nBoth writers use personal experience to establish credibility, but to contrasting effect. Source A opens with a nostalgic anecdote: 'I fell in love with football on a concrete pitch in south London,' using sensory detail ('a ball so worn the panels were peeling off') to create an intimate, emotional connection with the reader. Source B similarly draws on experience — 'I have observed, over many years' — but adopts the authoritative tone of a headmaster reporting professional findings rather than sharing personal vulnerability. This difference reflects their audiences: Source A writes for a modern readership that values authenticity and emotion, while Source B addresses a Victorian audience that respected institutional authority.\n\nThe writers also differ in their use of tone. Source A is bitterly angry, describing football as 'a content delivery platform' — a deliberately cold, corporate metaphor that strips the sport of humanity. The writer's frustration builds through increasingly damning examples, from corrupt FIFA to discarded eight-year-olds. Source B's tone is measured and confident; Whitmore uses balanced constructions like 'I do not deny... but I would ask' which convey certainty rather than rage. While Source A wants to provoke outrage, Source B wants to inspire conviction.\n\nUltimately, both writers share the belief that sport matters deeply, but they are separated by 135 years of context. Source A mourns what sport has become; Source B celebrates what it has always been. The modern writer's cynicism and the Victorian writer's idealism reflect not just different attitudes to sport, but different relationships with progress itself.",
        marks: 16,
      },
      {
        question:
          "Q5: Write an article for a broadsheet newspaper in which you argue your viewpoint on whether competitive sport has a positive or negative influence on young people. (Plan on a separate sheet; write your article below.)",
        lines: 30,
        modelAnswer:
          "The Beautiful Lesson: Why Competitive Sport Is the Best Education We Never Talk About\n\nLast Saturday, I watched a twelve-year-old girl lose a tennis match. She had been leading, confidently, for most of the second set. Then she lost three games in a row, and the doubt crept in — you could see it in her shoulders, in the way her serve lost its snap. She lost the match in a tiebreak, shook her opponent's hand, and walked off court with tears she was trying very hard not to shed. Her mother hugged her. Her coach said: 'Next time.'\n\nThat girl learned more in ninety minutes on a tennis court than she will learn in a week of classrooms. She learned that confidence is fragile and must be rebuilt. She learned that losing is survivable. She learned that grace under pressure is a choice you make when every instinct screams at you to give up. These are not lessons you can teach from a textbook. They are lessons that only competition — real, meaningful, high-stakes competition — can provide.\n\nCritics of competitive sport argue that it damages children's mental health, creates anxiety, and rewards the naturally gifted while humiliating everyone else. These concerns are not entirely without merit. Poorly managed competition, where winning is the only measure of value, can indeed be harmful. But the solution is not to eliminate competition; it is to ensure that competition is accompanied by good coaching, supportive environments, and a culture that celebrates effort as much as victory.\n\nThe alternative — a world without competitive sport for young people — is far more frightening. We already face a generation struggling with resilience, conflict resolution, and the ability to cope with failure. Social media offers an illusion of success without effort. Exams reduce achievement to a letter on a page. Sport, uniquely, teaches that the process matters: the training, the teamwork, the getting-back-up-after-being-knocked-down. No app can replicate that.\n\nWe owe our young people the opportunity to compete, to fail, and to discover that failure is not the end of the story. It is merely the first chapter.\n\nSo let us stop wrapping our children in cotton wool and start trusting them to be brave.",
        marks: 40,
      },
    ],
    teacherNotes: [
      "This lesson is designed as a compressed paper simulation. The real exam is 1 hour 45 minutes — be transparent with students that today's timings are shorter and that the real exam will feel less rushed.",
      "The Q1 true/false statements: A is false (he played, not watched), C is false (he says it is NOT primarily a sport), E is false (it was Qatar, not Brazil), F is false (a decade, not a year).",
      "Do NOT teach during the timed sections — this is practice, not instruction. Circulate silently and note common issues for future lessons.",
      "The self-assessment is the most important part of this lesson — ensure students are honest and specific in their reflections.",
      "Collect the completed papers if possible and mark them yourself — students' self-assessment may be inaccurate and your marking will provide more reliable data for revision planning.",
      "Consider repeating this lesson format with different source texts closer to the exam — exam stamina is built through repetition.",
      "If you have additional time (e.g., a double lesson), allow the full 1 hour 45 minutes for a more authentic simulation.",
    ],
    targetedSkills: [
      "AO1: Identify and interpret explicit and implicit information and ideas",
      "AO1: Select and synthesise evidence from different texts",
      "AO2: Explain, comment on and analyse how writers use language and structure",
      "AO3: Compare writers' ideas and perspectives",
      "AO5: Communicate clearly, effectively, and imaginatively",
      "AO6: Accurate spelling, punctuation, and grammar",
      "Exam technique and time management",
    ],
  },
];
