// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ─── Source Extracts ───────────────────────────────────────────────────────────
// Each paper has two non-fiction sources on a shared theme.

// ── Paper 06: Food & Health ────────────────────────────────────────────────────

const P06_SOURCE_A = `There is a peculiar cruelty in the modern food industry, and it is this: the people who can least afford to eat well are precisely the people who most need to. Walk into any supermarket in a deprived area and count the metres of shelf space devoted to fresh vegetables. Then count the metres devoted to crisps, biscuits, and ready meals loaded with salt, sugar, and fat. The mathematics of malnutrition are not complicated.

A report published last month by the Food Foundation revealed that the poorest fifth of British households would need to spend 47% of their income on food to meet government nutritional guidelines. The wealthiest fifth spend just 11%. This is not a gap. It is a chasm — and it is widening every year.

I grew up on a council estate in Salford where the nearest greengrocer was a forty-minute bus ride away. My mother, who worked two cleaning jobs and raised three children alone, performed miracles with mince and tinned tomatoes, but she could not defeat geography and economics. We ate what was available, what was affordable, what could be prepared in the twenty minutes between her arriving home and our needing to be fed. Nutrition, in that context, was a luxury — something that belonged to people who had time and money and a car to drive to the farmers' market.

The conversation about healthy eating in this country is saturated with privilege. We are lectured about our five-a-day by people who have never had to choose between heating and eating. We are told to cook from scratch by people who have never worked a twelve-hour shift and come home to find the electricity meter has run out.`

const P06_SOURCE_A_REF = 'Rachel Okonkwo, "Hunger in Plain Sight", The Observer, 2024'

const P06_SOURCE_B = `I have lately had occasion to examine the dietary of the labouring poor in several manufacturing districts, and I am compelled to report that the condition of their nourishment is far worse than the public generally supposes. The staple food of the factory operative consists of tea — of the weakest and most unwholesome kind — white bread, and, when funds permit, a small quantity of bacon or cheese. Fresh vegetables are almost unknown. Milk, which the children especially require, is beyond the means of most families.

The consequences of this deficiency are visible to any medical man who cares to look. The children are stunted, pale, and listless. Their teeth decay before they are fully grown. The women suffer from ailments that proper nourishment would prevent, and the men, whose labour demands the greatest expenditure of physical energy, are fed upon a diet that would scarcely sustain a clerk at his desk.

It is commonly supposed that the poor eat badly because they are ignorant of the principles of nutrition, and there is perhaps some small truth in this — but it is a truth vastly overstated. The poor eat badly because they are poor. A woman who has three shillings to feed a family of six for a week is not lacking in nutritional knowledge; she is lacking in three shillings. The solution to the problem of working-class diet is not education but income, not cookery lessons but fair wages.`

const P06_SOURCE_B_REF = 'Dr Edward Lankester, evidence to the Select Committee on Public Health, 1862'

// ── Paper 07: Work & Employment ────────────────────────────────────────────────

const P07_SOURCE_A = `The office is dead. Or, more precisely, the office as we knew it — that fluorescent-lit cathedral of presenteeism where millions of workers sat in identical chairs performing identical rituals of busyness — has been fatally wounded, and no amount of corporate nostalgia will revive it.

Three years after the pandemic forced the greatest workplace experiment in history, the data is unequivocal. A Stanford University study tracking 16,000 workers over nine months found that remote employees were 13% more productive than their office-based counterparts, took fewer sick days, and reported significantly higher job satisfaction. McKinsey's 2024 global survey found that 87% of workers offered flexible arrangements chose to take them. When given the choice, people vote with their feet — or, rather, with their slippers.

And yet a strange counter-revolution is underway. CEOs who spent 2020 praising their employees' resilience and adaptability are now issuing return-to-office mandates with the fervour of Victorian factory owners. The arguments are familiar: collaboration requires proximity; culture cannot be built through screens; junior employees need mentoring that only physical presence provides. These claims are not without merit, but they are selectively deployed. The CEO who insists that creativity requires a shared physical space rarely explains why he spent the previous decade closing regional offices and consolidating staff into soulless open-plan warehouses that destroyed the very intimacy he now claims to value.

The truth is that the fight over remote work is not really about productivity. It is about control — and the uncomfortable discovery, by a managerial class accustomed to measuring commitment by hours spent visibly at a desk, that their workers can function perfectly well without supervision.`

const P07_SOURCE_A_REF = 'James Ashworth, "The Great Return", Financial Times, 2024'

const P07_SOURCE_B = `The factory bell rings at half-past five in the morning, and by six o'clock every hand must be at his station. I have seen children of eight and nine years running through the dark streets, their breakfast — if breakfast it can be called — clutched in one hand, terrified of the consequences should they arrive one minute late. The overlooker stands at the gate with his watch, and the gate is closed at the stroke of six with a punctuality that the most precise chronometer might envy.

Once inside, the operative belongs to the mill. He does not choose his hours, his pace, or his rest. The machinery dictates all. He eats when the engine stops and works when it runs, and if he is ill or tired or broken in spirit, the machinery does not care. I have spoken with men who have worked in the same room, at the same loom, for twenty years and more, and who tell me that they have never once been consulted about any aspect of their working conditions — not the temperature of the room, nor the length of the day, nor the speed at which they are expected to work.

There are those who defend this system on the grounds that it produces wealth, and so indeed it does — but the wealth flows upward while the labour flows down, and the man who works the hardest sees the least of it. The mill-owner drives his carriage past the very door through which his workers file each morning, and if he feels any discomfort at the contrast between his condition and theirs, he conceals it admirably.`

const P07_SOURCE_B_REF = 'Friedrich Engels, The Condition of the Working Class in England (1845)'

// ── Paper 08: Childhood ────────────────────────────────────────────────────────

const P08_SOURCE_A = `We have stolen childhood, and we have done it so gradually that we barely noticed. The theft was not dramatic — no single moment of loss — but an incremental erosion, carried out with the very best intentions by adults who believed they were giving children more when, in fact, they were giving them less.

Consider the modern child's schedule. She wakes at seven, is driven to school by eight, sits in lessons until three-thirty, attends an after-school club until five, is driven to swimming or piano or tutoring, eats a hurried dinner, completes homework, and is in bed by nine. Her weekends are similarly colonised: Saturday morning football, Saturday afternoon birthday party (attendance essentially compulsory), Sunday violin practice and spelling test revision. She is eight years old and she has the diary of a cabinet minister.

What is missing from this schedule is precisely the thing that makes childhood childhood: unstructured time. Time to be bored. Time to lie on the grass and watch clouds. Time to build a den from old blankets and negotiate the complex social politics of who gets to be inside and who must stand guard. Time to fail at something without an adult swooping in to help. These are not luxuries. They are the raw materials of psychological development, and we have systematically removed them in the name of enrichment.

The irony is savage. A generation of parents terrified that their children will fall behind has produced a generation of children who are anxious, overscheduled, and increasingly unable to entertain themselves without adult direction or a screen.`

const P08_SOURCE_A_REF = 'Professor Helen Brookes, "Let Them Be Bored", The Atlantic, 2024'

const P08_SOURCE_B = `My childhood was spent largely out of doors, in a freedom that would horrify the modern parent. From the age of seven or eight I roamed the fields and lanes around our village with a liberty that was, I now realise, the great unremarked privilege of rural poverty. My mother, occupied from dawn with the business of keeping house on almost nothing, had neither the time nor the inclination to supervise our play, and so we were turned out after breakfast and expected to return at dusk, and what we did in the intervening hours was our own affair.

We built dams in the stream and watched them fail. We climbed trees that were certainly too tall for us and fell out of them with a regularity that would alarm a modern risk assessor. We caught tadpoles and kept them in jars and were mystified when they grew legs. We fought, made up, fought again, and learned through painful experience that Tommy Griggs could not be trusted and that Sally Evans would always take your side if you gave her first go on the rope swing.

I do not wish to romanticise this. There was cruelty in it — the casual savagery of children left to their own devices — and there was danger, and there were long afternoons of aching, desperate boredom that no modern child-rearing manual would tolerate. But there was also something that I fear we have lost: the slow, unsupervised discovery of who you are when nobody is watching, when no adult is assessing your performance, when the world is yours to explore and the only deadline is the fading of the light.`

const P08_SOURCE_B_REF = 'Adapted from Flora Thompson, Lark Rise to Candleford (1945)'

// ── Paper 09: Housing ──────────────────────────────────────────────────────────

const P09_SOURCE_A = `I am thirty-four years old. I have a degree, a full-time job, and a credit score that my bank describes as "excellent." I have never missed a rent payment in twelve years of renting. And I cannot buy a house. Not a nice house. Not a house in a fashionable area. Any house. Anywhere.

The numbers are brutal and they are simple. The average house price in England is now £290,000. The average salary is £35,000. To secure a mortgage, I would need a deposit of approximately £30,000 — a sum that, after rent, bills, food, and the modest cost of occasionally leaving my flat, I am able to save at a rate of approximately £200 per month. At this rate, I will have my deposit in twelve and a half years, by which time house prices will have risen further, and I will be back where I started.

Meanwhile, I pay £1,100 per month in rent for a one-bedroom flat with damp in the bathroom and a landlord who takes six weeks to fix the boiler. This £1,100 buys me nothing — no equity, no security, no right to hang a picture without permission. It vanishes into someone else's mortgage like water into sand. I am, in the memorable phrase of a housing charity, "paying more to have less."

My parents bought their first home in 1988 for £42,000 on a single teacher's salary. They did not have wealthy parents. They did not have extraordinary luck. They simply lived in a country where housing was a thing you could afford. That country no longer exists.`

const P09_SOURCE_A_REF = 'Sophie Brennan, "Generation Rent", The New Statesman, 2024'

const P09_SOURCE_B = `The housing of the labouring classes in this city is a disgrace to any nation that calls itself civilised. In the parish of St Giles alone, I have this week inspected lodgings in which human beings are packed together with a density that would be considered inhumane in the housing of cattle. In one cellar — and I use the word advisedly, for it was below the level of the street, accessible only by a flight of broken steps, without daylight or ventilation — I found eleven persons sleeping upon straw that had not been changed in weeks. The walls streamed with moisture. The air was so foul that my companion, a medical man of thirty years' experience, was obliged to retreat to the street to recover himself.

The rent demanded for these quarters is not inconsiderable. The lodging-house keeper charges fourpence per night — a sum which, over the course of a week, amounts to more than many of these poor creatures earn. They pay, in proportion to their means, far more for their wretched accommodation than a gentleman pays for his comfortable rooms in the West End. This is one of the cruellest ironies of poverty: that the poor pay more for everything, and receive less.

I am aware that there are those who attribute the housing crisis to the moral failings of the poor themselves — their supposed improvidence, their want of cleanliness, their preference for gin over fresh air. To such persons I would say only this: place any man in a cellar without light or water, compel him to work fourteen hours a day for a wage that barely sustains life, and then observe how long his moral character survives the experiment.`

const P09_SOURCE_B_REF = 'Charles Booth, Life and Labour of the People in London (1889)'

// ── Paper 10: Entertainment ────────────────────────────────────────────────────

const P10_SOURCE_A = `The British high street is dying, and its most visible symptom is the disappearance of places where people used to gather for no commercial reason at all. The youth club, the community hall, the public library with its Saturday morning reading group — these were never glamorous institutions, but they were the connective tissue of community life, and their loss has left wounds that no amount of online connectivity can heal.

I spent my teenage years in a youth club above a chip shop in Wolverhampton. It smelled of sweat and cheap deodorant and the rubber of table-tennis balls. The carpet was catastrophic. The pool table had a lean that favoured the left-hand cushion, and the jukebox played the same thirty songs in a rotation that everyone knew by heart. It was, by any objective measure, terrible — and it was the most important place in my life.

Because what that youth club provided was not entertainment in the modern, curated, algorithm-driven sense. It provided space — physical, social, psychological space in which teenagers could simply exist alongside each other, learning through proximity the complex, unwritten rules of human coexistence. You learned to wait your turn. You learned that the quiet kid in the corner could beat everyone at chess. You learned to negotiate, to compromise, to read a room. These were not skills that anyone taught us. They were skills we absorbed through the simple, irreplaceable act of being together in the same place.

Today's teenagers have infinite entertainment and almost no communal space. They can stream any film, play any game, access any information — but they cannot walk to a place where other teenagers are and simply be among them. We have given them everything except the thing they need most: each other.`

const P10_SOURCE_A_REF = 'Michael Donovan, "The Lost Spaces of Youth", The Guardian, 2024'

const P10_SOURCE_B = `The amusements of the working people are few and coarse, and it would be well if those who deplore this fact would consider the causes before they presume to judge. A man who labours from six in the morning until eight at night, whose body aches and whose mind is dulled by the monotony of his employment, does not seek refined entertainment when his day's work is done. He seeks oblivion — and he finds it, most readily and most cheaply, in the public house.

I do not defend drunkenness. But I understand it. The gin-palace, with its bright gaslight and its warmth and its noise and its promise of a few hours' forgetfulness, offers the working man the only escape available to him. The theatre is beyond his means. The concert hall would not admit him. The library requires a level of literacy that his truncated education has not provided. The pleasure garden charges an entrance fee he cannot afford. And so he drinks, and his wife drinks, and presently his children drink, and the cycle of degradation continues — not because the poor are morally weaker than the rich, but because they have been offered no alternative.

Those who wish to reform the habits of the labouring classes would do better to provide them with recreation than to preach at them about temperance. Build them parks. Open reading rooms. Establish places of rational amusement where a man may spend his evening without recourse to alcohol. Give him something to do, and he will do it. Give him nothing, and he will drink. The fault lies not in his character but in his circumstances.`

const P10_SOURCE_B_REF = 'Charles Dickens, "Amusements of the People", Household Words, 1850'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────────

export const edexcelP2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 06 — Food & Health
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-06',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-06-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P06_SOURCE_A_REF}\nSource B: ${P06_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-06-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The modern food industry has a cruelty about it.\nB) Fresh vegetables dominate supermarket shelves in deprived areas.\nC) The poorest households would need nearly half their income for healthy food.\nD) The wealthiest households spend 47% on food.\nE) The gap between rich and poor diets is widening.\nF) The figures come from the Food Foundation.\nG) The poorest fifth spend 11% of income on food.\nH) The mathematics of malnutrition are complicated.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P06_SOURCE_A}\n\nSource B:\n${P06_SOURCE_B}`,
            extractSource: `Source A: ${P06_SOURCE_A_REF} | Source B: ${P06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "There is a peculiar cruelty in the modern food industry." C: "the poorest fifth... would need to spend 47% of their income." E: "it is widening every year." F: "A report published last month by the Food Foundation."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-06-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does Okonkwo use language to argue that poverty is the real cause of unhealthy eating?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P06_SOURCE_A}`,
            extractSource: P06_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'Okonkwo uses strong language to make the reader sympathise with poor families. She describes the gap between rich and poor as "a chasm" which is a metaphor suggesting a deep, dangerous divide. She uses personal experience — growing up on "a council estate in Salford" — to make her argument more convincing and emotional. The phrase "performed miracles with mince and tinned tomatoes" praises her mother while showing the limited ingredients available. The repetition of "We are told" and "We are lectured" in the final paragraph creates an angry tone, suggesting poor people are patronised by those who do not understand their lives.',
              'Grade 6-7': 'Okonkwo constructs her argument through a deliberate rhetorical journey from statistical authority to personal testimony to political anger. The opening sentence deploys the abstract noun "cruelty" alongside the qualifier "peculiar," suggesting this is not accidental harm but something distinctive and deliberate. The imperative "Walk into any supermarket" directly addresses the reader, transforming them from passive audience into witness. The statistical evidence — "47% of their income" versus "just 11%" — is framed not as a "gap" but a "chasm," the metaphor implying depth, danger, and impassability. The shift to personal narrative ("I grew up on a council estate") moves from logos to pathos, the hyperbolic "performed miracles" simultaneously celebrating maternal resourcefulness and exposing its impossible conditions. The final paragraph\'s parallel structure — "We are lectured... We are told" — uses the passive voice to position the poor as objects of condescension, while the specificity of "twelve-hour shift" and "electricity meter" grounds the argument in lived, material reality.',
              'Grade 8-9': 'Okonkwo\'s prose operates through a carefully controlled escalation from diagnostic detachment to contained fury. The opening paradox — "the people who can least afford to eat well are precisely the people who most need to" — establishes the structural irony that drives the entire piece. The imperative "Walk into any supermarket" is both rhetorical invitation and challenge, the verb "count" repeated to enforce an empirical methodology that produces its own damning evidence. The metaphorical progression from "gap" to "chasm" performs a rhetorical correction in real time, the writer rejecting her own word as insufficiently severe. The autobiographical section deploys the tricolon "available... affordable... prepared" to reveal how food choice is determined entirely by circumstance, each word narrowing the field of possibility. The phrase "Nutrition was a luxury" inverts our cultural assumptions: the essential is reframed as the unattainable. The final paragraph\'s anaphoric "We are" constructions weaponise the first-person plural, claiming collective identity with the lectured poor while exposing the class assumptions embedded in public health discourse. The closing image — "the electricity meter has run out" — is devastating in its specificity, replacing abstract poverty with concrete domestic crisis.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-06-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does Dr Lankester use language to convey the seriousness of the dietary problems facing the poor?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P06_SOURCE_B}`,
            extractSource: P06_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'Lankester uses listing to show how poor the diet is: "tea... white bread... bacon or cheese." The phrase "Fresh vegetables are almost unknown" makes it sound like vegetables are exotic, emphasising how rare they are. He describes the children as "stunted, pale, and listless" — three adjectives that create a picture of unhealthiness. The final paragraph attacks the idea that the poor are ignorant, using the direct statement "The poor eat badly because they are poor" which is short and blunt and hard to argue with.',
              'Grade 6-7': 'Lankester employs the measured, authoritative register of the expert witness while embedding emotional appeals within ostensibly clinical language. The dietary catalogue — "tea of the weakest and most unwholesome kind, white bread, and... bacon or cheese" — uses the conditionality of "when funds permit" to reveal that even this meagre diet is aspirational. The tricolon "stunted, pale, and listless" moves from physical to visible to psychological, each adjective representing a deepening consequence. The comparative "would scarcely sustain a clerk at his desk" is strategically class-conscious: by measuring the labourer\'s diet against the needs of a sedentary worker, Lankester makes the inadequacy visceral. The final paragraph\'s rhetorical demolition of the ignorance argument pivots on the brilliant reduction: "she is lacking in three shillings." By replacing the abstract noun "knowledge" with the concrete "three shillings," Lankester collapses the moral argument into an economic one, exposing the self-serving nature of blaming the poor for their poverty.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys seriousness',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-06-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the link between poverty and diet.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P06_SOURCE_A}\n\nSource B:\n${P06_SOURCE_B}`,
            extractSource: `Source A: ${P06_SOURCE_A_REF} | Source B: ${P06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that poverty, not ignorance, causes unhealthy eating. Okonkwo uses personal experience of growing up poor in Salford, while Lankester uses evidence from inspecting the homes of the poor. Both are angry at people who blame the poor — Okonkwo attacks those who "lecture" about five-a-day, and Lankester challenges the idea that the poor are "ignorant." Both use statistics or specific details to support their points. Okonkwo\'s tone is more personal and passionate, while Lankester writes in a more formal, official style because he is giving evidence to a committee.',
              'Grade 6-7': 'Okonkwo and Lankester, separated by over 160 years, arrive at remarkably similar conclusions through different rhetorical strategies. Both writers reject the dominant narrative that poor diet results from ignorance, but their methods of refutation differ. Okonkwo attacks from the inside, using autobiographical authority: she grew up poor and therefore speaks with experiential legitimacy. Lankester attacks from the outside, using professional authority: he has "examined" and can "report." Both writers use the structural technique of building an evidence base before delivering a devastating concluding argument. Okonkwo accumulates statistics (47% versus 11%) before the personal narrative; Lankester catalogues dietary deficiencies before the rhetorical question about "three shillings." The most striking parallel is their shared anger at the privileged tendency to moralise poverty. Okonkwo\'s "saturated with privilege" and Lankester\'s dismissal of those who attribute poor diet to "ignorance" both identify the same ideological manoeuvre: the transformation of a structural problem into an individual failing. Their tones differ — Okonkwo is openly furious ("a peculiar cruelty"), Lankester is precisely contemptuous ("there is perhaps some small truth in this") — but both deploy controlled anger in service of the same argument: that the solution is economic, not educational.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both writers\' viewpoints',
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-06-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-06-q5',
            questionNumber: 5,
            questionText: 'Your school or college wants to improve the food available to students.\n\nWrite a letter to the headteacher in which you argue for changes to the school canteen and food provision.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with appropriate form features (Dear..., formal register, Yours sincerely); a sustained argument with reasons and examples; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted letter with sophisticated argument structure; counter-arguments anticipated and addressed; persuasive techniques used effectively; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling letter demonstrating complete command of form and register; nuanced argument with strategic concession; distinctive, authoritative voice; technical virtuosity in SPaG.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-06-q6',
            questionNumber: 6,
            questionText: 'A health magazine for young people has asked for contributions on the topic "You Are What You Eat."\n\nWrite an article for the magazine in which you explore the challenges young people face in eating healthily.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with appropriate form features (headline, paragraphs, audience awareness); a sustained exploration of the topic with relevant examples; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with distinctive journalistic voice; effective blend of personal experience and wider argument; structural sophistication; accurate, varied SPaG.',
              'Grade 8-9': 'An outstanding article with assured voice and register; sophisticated exploration that balances personal insight with social commentary; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 07 — Work & Employment
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-07',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-07-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P07_SOURCE_A_REF}\nSource B: ${P07_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-07-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes the traditional office has been fatally wounded.\nB) The pandemic lasted for one year.\nC) Remote employees were found to be 13% more productive.\nD) Office-based workers took fewer sick days.\nE) A Stanford University study tracked 16,000 workers.\nF) Remote workers reported lower job satisfaction.\nG) 87% of workers offered flexible arrangements chose them.\nH) The study lasted over nine months.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P07_SOURCE_A}\n\nSource B:\n${P07_SOURCE_B}`,
            extractSource: `Source A: ${P07_SOURCE_A_REF} | Source B: ${P07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, G — A: "the office... has been fatally wounded." C: "remote employees were 13% more productive." E: "A Stanford University study tracking 16,000 workers." G: "87% of workers offered flexible arrangements chose to take them."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-07-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does Ashworth use language to argue that the return-to-office movement is really about control?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P07_SOURCE_A}`,
            extractSource: P07_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'Ashworth uses humour to make his argument engaging. He describes the office as a "fluorescent-lit cathedral of presenteeism" which is a metaphor comparing the office to a church, suggesting workers worship the idea of being seen at their desks. The humorous ending "with their slippers" makes working from home sound relaxed and sensible. He compares modern CEOs to "Victorian factory owners" to suggest they are old-fashioned and controlling. The final paragraph directly states the argument: "It is about control," using a short, blunt sentence for impact.',
              'Grade 6-7': 'Ashworth constructs his argument through a rhetorical strategy of deflation — systematically stripping the return-to-office movement of its intellectual credibility to reveal the power dynamics beneath. The opening metaphor, "fluorescent-lit cathedral of presenteeism," is devastatingly precise: "cathedral" implies worship, "presenteeism" identifies what is worshipped — not productivity but visibility — and "fluorescent-lit" bathes the whole image in unflattering artificiality. The statistical evidence from Stanford and McKinsey functions as an empirical foundation, but Ashworth immediately undercuts the data\'s formality with the bathetic "with their slippers," a tonal shift that performs the very informality the office-defenders fear. The historical comparison to "Victorian factory owners" is not merely insulting but analytical — it positions the return-to-office mandate within a lineage of employer control. The final paragraph\'s structure enacts a rhetorical unveiling: "The truth is that the fight over remote work is not really about productivity" delays the key word "control" to the end of the sentence, creating anticipation and emphasis. The closing phrase — "can function perfectly well without supervision" — deploys the adverb "perfectly" with quiet, devastating confidence.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-07-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does Engels use language to convey the powerlessness of factory workers?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P07_SOURCE_B}`,
            extractSource: P07_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'Engels describes children "running through the dark streets" which creates a picture of urgency and fear. The word "terrified" shows how scared workers are of being late. He personifies the machinery — it "dictates all" — making it sound like a tyrant controlling workers\' lives. The phrase "the machinery does not care" is simple but powerful, showing how the system is inhuman. The contrast between the mill-owner in his "carriage" and the workers "filing" through the door highlights the injustice. The word "filing" makes workers sound like they are in a prison.',
              'Grade 6-7': 'Engels constructs the factory as a totalising system of control through a prose style that mirrors the relentlessness it describes. The opening image of children "running through the dark streets" is cinematic in its immediacy, the present participle creating a sense of perpetual, desperate motion. The overlooker\'s watch and the gate closed "at the stroke of six" establish time as an instrument of oppression — the ironic comparison to "the most precise chronometer" elevating mechanical punctuality to an absurd virtue. The central paragraph\'s anaphoric "He does not choose" constructions systematically strip agency from the worker, while the personification of machinery — it "dictates," it "does not care" — transfers authority from human to mechanical. The tricolon "ill or tired or broken in spirit" escalates from physical to psychological damage. The final paragraph deploys economic irony with surgical precision: "the wealth flows upward while the labour flows down" uses parallel structure to make inequality feel like a natural law. The image of the mill-owner driving past his own workers elevates individual observation to social metaphor.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys powerlessness',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-07-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the relationship between workers and those who control their working conditions.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P07_SOURCE_A}\n\nSource B:\n${P07_SOURCE_B}`,
            extractSource: `Source A: ${P07_SOURCE_A_REF} | Source B: ${P07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that employers control workers unfairly. Ashworth focuses on modern offices where CEOs want workers back in the building so they can watch them. Engels describes Victorian factories where machinery controls every aspect of workers\' lives. Both use comparison to highlight inequality — Ashworth compares CEOs to "Victorian factory owners" and Engels contrasts the mill-owner\'s carriage with the workers. Ashworth\'s tone is witty and sarcastic while Engels is more serious and angry. Both suggest the real issue is power, not productivity or efficiency.',
              'Grade 6-7': 'Ashworth and Engels, writing nearly two centuries apart, both identify the same fundamental dynamic: the employer\'s desire to control workers\' bodies and time. Ashworth\'s "fluorescent-lit cathedral of presenteeism" and Engels\'s factory where "the operative belongs to the mill" are separated by technology but united by principle — in both cases, the employer demands physical presence as proof of subordination. Their methods diverge significantly. Ashworth deploys irony and cultural criticism, using humour ("with their slippers") to expose the absurdity of return-to-office mandates. Engels employs documentary realism, accumulating observed detail — children running, the overlooker\'s watch, the gate closing — to build an overwhelming case. Yet both writers share a rhetorical strategy of exposure: Ashworth reveals that "the fight over remote work is not really about productivity," while Engels shows that the factory system is not about efficiency but about the upward flow of wealth. The most revealing connection is in their treatment of the employer. Ashworth\'s CEO "rarely explains" his contradictions; Engels\'s mill-owner "conceals" his discomfort "admirably." Both verbs suggest deliberate evasion — the employer who knows the truth but refuses to acknowledge it. The implication in both texts is that the relationship between worker and employer is fundamentally dishonest.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both writers\' viewpoints',
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-07-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-07-q5',
            questionNumber: 5,
            questionText: 'Your local council is considering reducing funding for work experience programmes in schools.\n\nWrite a letter to the council arguing that work experience is important for young people.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with appropriate form features (formal opening and closing, respectful register); a sustained argument with relevant reasons and examples; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted letter with sophisticated argument structure; evidence of awareness of counter-arguments; appropriate register for audience; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling letter with masterful command of formal register; nuanced argument that demonstrates understanding of the council\'s position while making an irrefutable case; distinctive voice; technical virtuosity.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-07-q6',
            questionNumber: 6,
            questionText: 'A careers website for young people has asked for contributions about the future of work.\n\nWrite an article in which you explore what the world of work might look like for your generation.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with appropriate form features (headline, paragraphs, audience awareness); a sustained exploration with relevant ideas; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with distinctive voice; effective blend of speculation and current evidence; structural sophistication; accurate, varied SPaG.',
              'Grade 8-9': 'An outstanding article with assured journalistic voice; sophisticated exploration that balances optimism and realism; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 08 — Childhood
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-08',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-08-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P08_SOURCE_A_REF}\nSource B: ${P08_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-08-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes childhood has been stolen.\nB) The theft of childhood happened suddenly.\nC) Adults acted with good intentions.\nD) The modern child wakes at six o\'clock.\nE) The child attends an after-school club until five.\nF) The child has the diary of a cabinet minister.\nG) The child described is eight years old.\nH) Weekend schedules are free and unstructured.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P08_SOURCE_A}\n\nSource B:\n${P08_SOURCE_B}`,
            extractSource: `Source A: ${P08_SOURCE_A_REF} | Source B: ${P08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, G — A: "We have stolen childhood." C: "carried out with the very best intentions." E: "attends an after-school club until five." G: "She is eight years old."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-08-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does Professor Brookes use language to argue that modern children have lost the freedom of unstructured time?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P08_SOURCE_A}`,
            extractSource: P08_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'Brookes uses the metaphor of "stolen childhood" to make it sound like a crime has been committed. The long list of the child\'s daily activities — "school... after-school club... swimming or piano or tutoring" — creates a sense of an exhausting, packed schedule. Comparing the child\'s diary to "a cabinet minister" is humorous but also shocking because it highlights how overworked children are. The rhetorical list "Time to be bored. Time to lie on the grass" repeats "Time to" to emphasise what is missing. The word "irony" at the end draws attention to the contradiction that trying to help children has actually harmed them.',
              'Grade 6-7': 'Brookes constructs her argument through a rhetorical architecture of progressive revelation. The opening verb "stolen" immediately criminalises modern parenting, yet the qualifying phrase "so gradually that we barely noticed" introduces the concept of incremental, unconscious harm — more insidious than deliberate cruelty. The second paragraph enacts its own argument: the breathless catalogue of activities, linked by commas rather than full stops, syntactically reproduces the relentlessness of the child\'s schedule. The bathetic comparison to "a cabinet minister" deploys humour to crystallise the absurdity. The third paragraph pivots from diagnosis to prescription, and the anaphoric "Time to" constructions are deliberately expansive — "lie on the grass and watch clouds" — their leisurely rhythm performing the very spaciousness they advocate. The abstract noun "enrichment" is placed in scare quotes by context if not typography, its meaning inverted: what adults call enrichment is actually impoverishment. The final paragraph\'s "savage irony" weaponises the parents\' own logic against them: the verb "produced" reduces child-rearing to manufacturing, while the tricolon "anxious, overscheduled, and increasingly unable" presents a generation defined by its deficits.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-08-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the value of an unsupervised childhood?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P08_SOURCE_B}`,
            extractSource: P08_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses a warm, nostalgic tone to describe childhood freedom. The phrase "turned out after breakfast and expected to return at dusk" makes it sound like the children were almost wild animals, free to roam. The listing of activities — building dams, climbing trees, catching tadpoles — creates a sense of endless adventure. Specific names like "Tommy Griggs" and "Sally Evans" make the memories feel real and personal. The writer is honest, admitting there was "cruelty" and "danger," which makes the positive memories more believable. The final image of "the fading of the light" is poetic and suggests childhood itself fading away.',
              'Grade 6-7': 'Thompson constructs her memoir through a careful balance of celebration and candour that gives her nostalgia moral authority. The opening phrase "largely out of doors" establishes physical freedom as the defining feature of childhood, while "the great unremarked privilege of rural poverty" performs a sophisticated rhetorical manoeuvre — reframing deprivation as liberation. The mother\'s absence is presented not as neglect but as the enabling condition of freedom: "neither the time nor the inclination" pairs economic necessity with philosophical choice. The central paragraph\'s accumulation of activities — "built dams... climbed trees... caught tadpoles" — uses the past simple tense with deliberate repetition, each short clause a discrete memory that collectively builds an impression of rich, varied experience. The social learning — "Tommy Griggs could not be trusted" — embeds complex psychological development within apparently simple observation. The concessive paragraph ("I do not wish to romanticise this") is strategically essential: by acknowledging "cruelty," "danger," and "desperate boredom," Thompson earns the right to her final, elegiac claim about "the slow, unsupervised discovery of who you are when nobody is watching." The closing image — "the fading of the light" — operates as both literal (the deadline of dusk) and metaphorical (the passing of this kind of childhood).',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys value and nostalgia',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-08-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on childhood freedom.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P08_SOURCE_A}\n\nSource B:\n${P08_SOURCE_B}`,
            extractSource: `Source A: ${P08_SOURCE_A_REF} | Source B: ${P08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers believe that unstructured time is important for children, but they approach the topic differently. Brookes writes as an expert, using research and argument to show that modern children are over-scheduled. Thompson writes from personal memory, describing her own free childhood. Both use lists — Brookes lists the child\'s packed schedule, Thompson lists the outdoor adventures — but for opposite effects: Brookes\'s list feels exhausting while Thompson\'s feels exciting and free. Both writers are honest about downsides: Brookes admits parents mean well, and Thompson admits there was cruelty and danger in her childhood. This makes both arguments more convincing.',
              'Grade 6-7': 'Brookes and Thompson share a fundamental conviction — that children need unsupervised time — but their rhetorical strategies reveal different relationships to the argument. Brookes writes as a diagnostician, analysing a contemporary problem through evidence and logic; Thompson writes as a witness, testifying to a lost world through memory and sensation. This distinction shapes their methods. Brookes\'s catalogue of the modern child\'s schedule is designed to exhaust the reader, its accumulative syntax reproducing the breathlessness it critiques. Thompson\'s catalogue of childhood activities achieves the opposite effect: the short, simple clauses — "We built dams... We climbed trees... We caught tadpoles" — are spacious, each one a self-contained world. Both writers deploy strategic concession to strengthen their arguments. Brookes\'s acknowledgement that adults acted "with the very best intentions" and Thompson\'s admission of "casual savagery" and "desperate boredom" serve the same function: they demonstrate intellectual honesty that makes the central claim more credible. The most revealing difference lies in tone. Brookes\'s "savage irony" is angry, accusatory, directed at a parenting culture she holds responsible. Thompson\'s nostalgia is gentler, suffused with loss: "the fading of the light" suggests not only the end of day but the end of an era. Together, the texts construct a powerful argument through complementary emotions: Brookes provides the intellectual case, Thompson provides the emotional proof.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both writers\' viewpoints',
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-08-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-08-q5',
            questionNumber: 5,
            questionText: 'A parent-teacher association has asked for young people\'s views on the question: "Are children today given too little freedom?"\n\nWrite a speech in which you present your views to the parent-teacher association.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with appropriate form features (direct address, rhetorical questions, appropriate register for adult audience); a sustained argument with personal examples; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with sophisticated rhetorical techniques; effective balance of personal experience and broader argument; counter-arguments addressed; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling speech with masterful rhetoric; nuanced argument that acknowledges parental concerns while making a persuasive case; distinctive voice that commands attention; technical virtuosity.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-08-q6',
            questionNumber: 6,
            questionText: 'A national newspaper is running a series called "The Childhood We Deserve."\n\nWrite an article in which you argue for what you believe would be the ideal childhood.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with appropriate form features (headline, paragraphs, engaging opening); a sustained exploration with relevant ideas and examples; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with distinctive journalistic voice; effective blend of argument and personal reflection; well-organised with a clear line of reasoning; accurate, varied SPaG.',
              'Grade 8-9': 'An outstanding article with assured voice; sophisticated argument that avoids simplistic nostalgia; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 09 — Housing
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-09',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-09-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P09_SOURCE_A_REF}\nSource B: ${P09_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-09-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The writer is thirty-four years old.\nB) The writer has a poor credit score.\nC) The writer has never missed a rent payment.\nD) The average house price in England is £250,000.\nE) The average salary is £35,000.\nF) The writer needs a deposit of approximately £30,000.\nG) The writer can save £500 per month.\nH) The writer has been renting for twelve years.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P09_SOURCE_A}\n\nSource B:\n${P09_SOURCE_B}`,
            extractSource: `Source A: ${P09_SOURCE_A_REF} | Source B: ${P09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "I am thirty-four years old." C: "I have never missed a rent payment." E: "The average salary is \u00a335,000." F: "a deposit of approximately \u00a330,000."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-09-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does Brennan use language to convey her frustration at the impossibility of buying a home?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P09_SOURCE_A}`,
            extractSource: P09_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'Brennan uses a frustrated, direct tone throughout. She lists her qualifications — "a degree, a full-time job, and a credit score" — to show she has done everything right but still cannot buy a home, which creates sympathy. The phrase "Any house. Anywhere" uses short sentences for dramatic emphasis. The word "brutal" to describe the numbers suggests they are violent and cruel. The simile "like water into sand" describes how rent money disappears with nothing to show for it. The contrast between her parents\' experience — buying for \u00a342,000 — and current prices highlights how unfair the situation is. The final sentence, "That country no longer exists," is blunt and sad.',
              'Grade 6-7': 'Brennan constructs her argument through a rhetoric of accumulation and deflation. The opening paragraph establishes credentials through a tricolon — "a degree, a full-time job, and a credit score" — each item representing a supposed marker of financial readiness, before the devastating adversative "And I cannot buy a house." The subsequent fragments — "Not a nice house. Not a house in a fashionable area. Any house. Anywhere" — perform a progressive lowering of expectations, each sentence stripping away another aspiration until nothing remains. The mathematical vocabulary of paragraph two ("£290,000... £35,000... £30,000... £200 per month") deploys numbers as evidence of structural impossibility, the grinding arithmetic mimicking the writer\'s own frustrated calculations. The simile "like water into sand" captures both the futility and the invisibility of rent payments — money absorbed without trace. The penultimate paragraph\'s listing of domestic indignities ("damp in the bathroom," "six weeks to fix the boiler") grounds the abstract housing crisis in lived, physical discomfort. The final paragraph\'s shift to the parents\' experience deploys historical comparison not as nostalgia but as political argument: "That country no longer exists" transforms housing policy failure into a kind of national death.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-09-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does Booth use language to convey the injustice of housing conditions for the poor?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P09_SOURCE_B}`,
            extractSource: P09_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'Booth uses strong, emotive language to make the reader feel shocked. He calls the housing "a disgrace to any nation that calls itself civilised," which directly challenges the country\'s self-image. The description of the cellar — "below the level of the street... without daylight or ventilation" — makes it sound like a dungeon. The detail about "eleven persons sleeping upon straw" is specific and disturbing. He points out the irony that the poor "pay more for everything, and receive less," which makes the injustice clear and simple. The final paragraph challenges those who blame the poor by using the imperative "place any man in a cellar" — daring the reader to experience poverty themselves.',
              'Grade 6-7': 'Booth constructs his case through a rhetorical strategy of controlled outrage, deploying the language of objective investigation while embedding emotional and moral judgments within apparently factual description. The opening gambit — "a disgrace to any nation that calls itself civilised" — weaponises national pride, making the housing crisis a matter of collective shame. The cellar description accumulates specific, verifiable details ("below the level of the street," "eleven persons," "straw that had not been changed in weeks"), each detail functioning simultaneously as evidence and as emotional appeal. The anecdote of his companion — "a medical man of thirty years\' experience" — being "obliged to retreat" operates through a logic of proxy: if a hardened professional cannot endure even a visit, how can the inhabitants survive residence? The economic analysis of the second paragraph deploys irony as an analytical tool: "the poor pay more for everything" inverts the intuitive assumption that poverty means paying less. The final paragraph shifts register from reportage to direct address, the conditional construction "place any man in a cellar... and then observe" transforming a sociological argument into a moral challenge. The verb "survives" — applied to "moral character" rather than physical health — subtly redefines what poverty destroys.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language conveys injustice',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-09-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the injustice of housing.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P09_SOURCE_A}\n\nSource B:\n${P09_SOURCE_B}`,
            extractSource: `Source A: ${P09_SOURCE_A_REF} | Source B: ${P09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers present housing as deeply unfair. Brennan focuses on the impossibility of buying a home despite doing everything right, while Booth describes the horrifying conditions poor people live in. Both highlight financial injustice: Brennan shows how her rent "vanishes into someone else\'s mortgage," and Booth explains that the poor "pay more for everything, and receive less." Brennan uses personal experience and specific numbers to make her case, while Booth uses descriptions of what he has seen during inspections. Both challenge people who blame the victims — Brennan implicitly challenges the idea that young people are lazy, and Booth directly attacks those who blame the poor\'s "moral failings." Brennan\'s tone is personally frustrated while Booth\'s is professionally outraged.',
              'Grade 6-7': 'Brennan and Booth, separated by over a century, both expose housing injustice through a shared rhetorical strategy: the systematic demolition of victim-blaming narratives. Brennan pre-empts the accusation of personal failure by opening with her credentials ("a degree, a full-time job, a credit score described as excellent"), making it structurally impossible to attribute her homelessness to individual inadequacy. Booth performs the same manoeuvre from a different angle, using the conditional challenge "place any man in a cellar" to demonstrate that moral failure is a consequence, not a cause, of poor housing. Their methods differ in perspective. Brennan writes from inside the crisis: her first-person testimony generates empathy through identification. Booth writes from outside: his third-person investigation generates empathy through observation. Both are effective, but they work through different mechanisms — Brennan asks "this could be you," while Booth asks "look at what is being done to them." The most powerful parallel is their shared identification of the economic paradox at the heart of housing injustice. Brennan\'s "paying more to have less" and Booth\'s observation that the poor pay "far more for their wretched accommodation" than a gentleman identify the same structural cruelty across 135 years. This temporal echo is itself an argument: the persistence of the problem implies systemic, not individual, failure. Both writers use the specificity of numbers (Brennan\'s mortgage calculations, Booth\'s fourpence per night) to make abstract injustice mathematically undeniable.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both writers\' viewpoints',
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-09-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-09-q5',
            questionNumber: 5,
            questionText: 'A local newspaper is asking young people for their views on housing.\n\nWrite a letter to the newspaper in which you explain the challenges young people face in finding affordable housing.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with appropriate form features (Dear Editor, formal register, sign-off); a sustained argument with relevant examples; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted letter with a distinctive voice; effective blend of personal concern and wider social argument; counter-arguments anticipated; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling letter with sophisticated argument that addresses root causes; distinctive voice that balances frustration with constructive proposals; technical virtuosity.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-09-q6',
            questionNumber: 6,
            questionText: 'A magazine aimed at young adults has asked for contributions to a feature called "Home Truths."\n\nWrite an article in which you explore what "home" means to your generation.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with appropriate form features (headline, engaging opening, paragraphs); a sustained exploration with personal and wider perspectives; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with distinctive voice; effective exploration that moves between personal reflection and social commentary; well-organised structure; accurate, varied SPaG.',
              'Grade 8-9': 'An outstanding article with assured voice; sophisticated exploration that redefines "home" for a new generation; ambitious vocabulary and syntax; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PAPER 10 — Entertainment
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-10',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-10-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${P10_SOURCE_A_REF}\nSource B: ${P10_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-10-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The British high street is dying.\nB) Youth clubs were glamorous institutions.\nC) Community spaces were the connective tissue of community life.\nD) Online connectivity has healed the wounds left by lost spaces.\nE) The writer spent his teenage years in a youth club.\nF) The youth club was above a chip shop.\nG) The youth club was in Wolverhampton.\nH) The carpet in the youth club was new.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${P10_SOURCE_A}\n\nSource B:\n${P10_SOURCE_B}`,
            extractSource: `Source A: ${P10_SOURCE_A_REF} | Source B: ${P10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, G — A: "The British high street is dying." C: "they were the connective tissue of community life." E: "I spent my teenage years in a youth club." G: "a youth club above a chip shop in Wolverhampton."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-10-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does Donovan use language to argue that young people have lost vital communal spaces?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${P10_SOURCE_A}`,
            extractSource: P10_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'Donovan uses the metaphor "connective tissue" to describe community spaces, suggesting that without them the community falls apart like a body without muscles and tendons. He deliberately describes the youth club as terrible — "the carpet was catastrophic," the pool table had "a lean" — to show that the physical quality did not matter. What mattered was being together. The phrase "simply exist alongside each other" emphasises how basic and important this need is. The listing of social skills learned — "to wait your turn... to negotiate, to compromise, to read a room" — shows how much was gained from these spaces. The final contrast — "infinite entertainment and almost no communal space" — uses antithesis to highlight what has been lost.',
              'Grade 6-7': 'Donovan constructs his argument through a rhetorical strategy of deliberate diminishment followed by elevation. The youth club is introduced through its most unappealing qualities — the smell of "sweat and cheap deodorant," the "catastrophic" carpet, the biased pool table — yet this unflinching honesty serves a persuasive purpose: by refusing to romanticise the physical space, Donovan isolates and elevates its social function. The metaphor "connective tissue" is anatomically precise: connective tissue is invisible, unglamorous, but without it the body cannot function. The paragraph listing social skills acquired ("to wait your turn... to negotiate, to compromise, to read a room") deploys the infinitive form to create a curriculum of implicit learning, each skill presented not as taught but as "absorbed" — a verb suggesting osmosis rather than instruction. The antithetical structure of the final paragraph — "infinite entertainment and almost no communal space" — crystallises the argument through juxtaposition: "infinite" against "almost no," the quantitative abundance of digital entertainment against the qualitative poverty of physical togetherness. The closing phrase — "everything except the thing they need most: each other" — uses the colon to create a dramatic pause before the devastating simplicity of the final two words.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers persuasive strategies',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-10-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does Dickens use language to argue that the working classes need better entertainment, not moral lectures?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${P10_SOURCE_B}`,
            extractSource: P10_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'Dickens creates sympathy for the working man by describing his exhausting life: "from six in the morning until eight at night" shows the extremely long hours. The word "oblivion" is powerful — it suggests the worker does not just want relaxation but to forget his terrible life completely. Dickens lists all the things the worker cannot access — "the theatre... the concert hall... the library... the pleasure garden" — to show he has no alternative to the pub. The direct, simple sentences at the end — "Give him something to do, and he will do it. Give him nothing, and he will drink" — are powerful because they are short and clear, like a logical argument that cannot be denied.',
              'Grade 6-7': 'Dickens constructs his argument through a rhetoric of sympathetic materialism that refuses to separate moral behaviour from economic conditions. The opening sentence establishes the worker\'s exhaustion through accumulated physical detail: "body aches," "mind is dulled," "monotony" — a tricolon that moves from physical to psychological to existential suffering. The verb "seeks" applied to "oblivion" is carefully chosen: it dignifies the impulse to drink by framing it as a rational response to intolerable conditions. The central paragraph\'s systematic catalogue of inaccessible entertainments — "The theatre is beyond his means. The concert hall would not admit him. The library requires..." — uses parallel structure to demonstrate that each alternative has its own barrier: financial, social, educational. The cumulative effect is that of doors closing one by one, until only the gin-palace remains. The final paragraph\'s imperative constructions — "Build them parks. Open reading rooms" — shift from analysis to prescription, the short, direct sentences performing the practical simplicity Dickens advocates. The closing aphorism — "The fault lies not in his character but in his circumstances" — deploys the "not... but" construction to execute a clean ideological substitution, replacing moral blame with structural analysis in a single sentence.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of word choices',
              'Considers how language builds an argument',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-10-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the importance of communal spaces for entertainment and social life.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 26,
            questionType: 'comparison',
            extract: `Source A:\n${P10_SOURCE_A}\n\nSource B:\n${P10_SOURCE_B}`,
            extractSource: `Source A: ${P10_SOURCE_A_REF} | Source B: ${P10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that people need physical spaces to gather together. Donovan focuses on teenagers who have lost youth clubs and community spaces, while Dickens focuses on working-class adults who have no entertainment except the pub. Both blame the system rather than the people: Donovan blames the closure of community spaces, and Dickens blames low wages and long hours. Both use listing to make their points — Donovan lists the skills learned at youth clubs, while Dickens lists all the entertainment options the poor cannot access. Donovan\'s tone is nostalgic and personal, while Dickens is more campaigning and practical, directly telling the authorities what to do. Both end with powerful, simple statements about what people really need.',
              'Grade 6-7': 'Donovan and Dickens, writing 174 years apart, both identify the same fundamental need — communal space — and both locate the failure to provide it within systemic rather than individual shortcomings. Their arguments, however, are shaped by different social contexts and different rhetorical traditions. Donovan\'s argument operates through nostalgia strategically deployed. His detailed, affectionate description of the youth club — its terrible carpet, its biased pool table — establishes the space\'s value precisely through its imperfection: the point is not the quality of the facility but the quality of the interaction it enables. Dickens\'s argument operates through structural analysis: he catalogues the barriers between the working man and "rational amusement" — cost, admission policies, literacy, entrance fees — to demonstrate that the gin-palace is not a choice but a last resort. Both writers share a rhetorical strategy of reframing blame. Donovan\'s claim that teenagers have "infinite entertainment and almost no communal space" repositions the problem from screen addiction to spatial poverty. Dickens\'s "The fault lies not in his character but in his circumstances" explicitly transfers responsibility from individual morality to social structure. The most revealing difference lies in their proposed solutions. Donovan diagnoses loss but offers no prescription; his argument is elegiac, mourning what has vanished. Dickens is interventionist: "Build them parks. Open reading rooms." This difference reflects their different genres — Donovan writes journalism, Dickens writes polemic — but it also reflects a difference in optimism. Dickens believes the problem can be solved with investment; Donovan is less certain that what has been lost can be rebuilt.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both writers\' viewpoints',
              'Top band: sustained, detailed comparison with analysis of methods',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-10-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-10-q5',
            questionNumber: 5,
            questionText: 'Your local council is planning to close the only youth centre in your area to save money.\n\nWrite a speech to be delivered at a public meeting in which you argue that the youth centre should remain open.\n\n(16 marks)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with appropriate form features (direct address to audience, rhetorical questions, emotive language); a sustained argument with personal examples; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with sophisticated rhetorical techniques; effective use of anecdote and evidence; appropriate register for a public meeting; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling speech with masterful rhetoric; nuanced argument that addresses the council\'s financial concerns while making an irrefutable case for the centre\'s social value; distinctive, passionate voice; technical virtuosity.',
            },
            markScheme: [
              'Content and organisation (10 marks): clear argument, appropriate register and form, effective structure',
              'Technical accuracy (6 marks): sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-10-q6',
            questionNumber: 6,
            questionText: 'A website about youth culture has asked for contributions to a feature called "What We Do For Fun."\n\nWrite an article in which you explore how young people today spend their leisure time and whether this has changed for better or worse.\n\n(24 marks)',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with appropriate form features (headline, paragraphs, awareness of target audience); a sustained exploration of the topic with relevant personal and wider examples; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with distinctive voice; effective balance of personal experience and broader cultural commentary; well-organised with clear line of argument; accurate, varied SPaG.',
              'Grade 8-9': 'An outstanding article with assured journalistic voice; sophisticated exploration that avoids simplistic generational stereotypes; ambitious vocabulary and structural choices; flawless technical accuracy.',
            },
            markScheme: [
              'Content and organisation (16 marks): communication, register, form, organisation, engaging the reader',
              'Technical accuracy (8 marks): sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },
]
