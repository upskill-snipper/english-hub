import type { MockExamPaper } from '../mock-exams'

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Exam 01: Poverty
const POVERTY_21C = `In 2024, the Joseph Rowntree Foundation reported that 3.8 million people in the United Kingdom experienced destitution — a word that should have no place in the sixth-largest economy on earth. Destitution means not having enough money to feed yourself, to heat your home, to keep the lights on. It means choosing, every single day, between eating and staying warm.

I spent three weeks visiting food banks across South Wales, and what struck me was not the scale of need — though the scale is staggering — but the shame. Person after person told me they had never imagined they would need help. A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport. These were people who had worked all their lives and found, through no fault of their own, that work was no longer enough.

The volunteers who run these food banks are extraordinary. They work without pay, without recognition, and often without adequate resources. But charity, however generous, is not a substitute for policy. We cannot food-bank our way out of a structural crisis. The question is not whether people deserve help — of course they do — but why, in one of the wealthiest nations in history, they need it at all.`

const POVERTY_21C_REF = 'Rhiannon Davies, "The New Hunger", Wales Online, 2024'

const POVERTY_19C = `I have lately returned from a tour of the mining districts of South Wales, and I am compelled to lay before the public an account of what I have witnessed, however painful the recital may be. The condition of the labouring poor in these regions beggars description, and I do not exaggerate when I say that I have seen families living in circumstances which would disgrace a civilised nation.

In the town of Merthyr Tydfil, which has grown with such astonishing rapidity on account of the iron trade, I visited a row of cottages adjoining the works. The heat from the furnaces rendered the air almost unbreathable. In one dwelling I found a widow with five children, the eldest not above twelve years of age, subsisting on bread and tea alone. The children were thin and listless, their complexions sallow, their eyes dull. The widow herself, a woman of perhaps forty, had the appearance of one twenty years older. She told me, with a quiet dignity that moved me deeply, that her husband had been killed in the works three months prior, and that no compensation had been offered.

What are we to make of a system that consumes men in its furnaces and discards their families without a thought? The wealth of this nation flows from the labour of these people, and yet they see none of its benefits. This is not misfortune. It is injustice.`

const POVERTY_19C_REF = 'Thomas Rees, Letters on the Condition of the Welsh Poor (1849)'

// Exam 02: Education
const EDUCATION_21C = `Every September, I watch a new cohort of Year 7 students arrive at our school, and every September I notice the same thing: the gap between the confident and the anxious has grown wider. Some children bounce through the gates with new backpacks and labelled pencil cases and the easy assurance of parents who have rehearsed the route and bought the uniform without a second thought. Others arrive quietly, in shoes that are slightly too big or slightly too small, carrying last year's bag, watching everything with the careful alertness of someone who knows that mistakes are expensive.

The attainment gap in Wales is not a mystery. We know exactly what causes it: poverty, housing insecurity, parental stress, lack of access to books, tutors, and quiet spaces to study. We have known this for decades. What we lack is not understanding but will. The Curriculum for Wales promises to nurture every learner, to value wellbeing alongside attainment, and these are admirable ambitions. But ambition without resource is just aspiration, and aspiration without action is just words.

I have taught for twenty-two years. I have seen initiatives come and go, each one heralded as transformative, each one quietly abandoned when the funding dried up. What my students need is not another policy document. They need smaller classes, more teaching assistants, breakfast in the morning, and someone who has time to notice when they are struggling.`

const EDUCATION_21C_REF = 'Nia Griffiths, "Mind the Gap", TES Cymru, 2024'

const EDUCATION_19C = `Sir — I write to call the attention of your readers to the lamentable state of education in the rural districts of Wales. Having undertaken, at the request of the Commissioners, a survey of the parish schools in Cardiganshire, I find myself unable to report with any satisfaction upon their condition.

In the majority of schools I visited, the instruction was conducted wholly in English, a language which many of the children could scarcely understand and which their parents spoke not at all. The schoolmaster, often a young man of limited education himself, was expected to teach reading, writing, arithmetic, and Scripture to classes of forty or fifty children, ranging in age from five to fourteen, in a single room. The older children were frequently absent, being required to assist with the harvest or to tend livestock, and their attendance was so irregular as to render any sustained programme of learning impossible.

I do not doubt that there are many zealous and devoted teachers in these districts, but zeal without proper support is insufficient. The children of the poor deserve an education equal to that enjoyed by their more fortunate countrymen. If we deny them this, we deny them the means of improvement, and we condemn them to repeat the poverty of their parents. This is not economy. It is waste — waste of human talent and human possibility on a scale that should alarm every thinking citizen.`

const EDUCATION_19C_REF = 'Rev. James Phillips, Report on Education in Rural Wales, The Cambrian newspaper (1847)'

// Exam 03: Travel
const TRAVEL_21C = `There is a moment, about forty minutes into the train journey from Shrewsbury to Aberystwyth, when the landscape changes so completely that it feels like crossing into another country. The gentle English farmland gives way to something wilder, older, less tamed. The hills rise steeply on either side of the track, covered in rough grass and bracken, and the sky opens up above them — vast, indifferent, magnificent.

I had come to walk the Ceredigion coast path, a sixty-mile stretch of clifftop trail that runs from Cardigan to Ynyslas. I had packed waterproofs and walking boots and a vague hope that the Welsh weather might cooperate. It did not. For four of the five days I spent on the path, the rain was relentless — not the gentle drizzle of popular imagination, but hard, horizontal rain that found every gap in every layer and soaked me to the skin within an hour.

And yet, I cannot remember the last time I felt so alive. There is something about walking in wild weather, in a landscape that has no interest whatsoever in your comfort, that strips away the accumulated nonsense of daily life. The emails, the deadlines, the endless performative busyness — all of it falls away when you are standing on a cliff edge with the wind roaring in your ears and the Atlantic smashing itself against the rocks below. The path does not care about your to-do list. The sea does not check its phone. And slowly, reluctantly, you begin to remember what it feels like to simply be.`

const TRAVEL_21C_REF = 'Owen Hartley, "Walking Into Weather", National Geographic Traveller UK, 2024'

const TRAVEL_19C = `We set out from Dolgellau at seven o'clock on a fine August morning, our intention being to ascend Cadair Idris by the path known as the Pony Track and to take our dinner upon the summit, if the weather should permit. Our party consisted of myself, my wife, her sister Miss Evans, and a guide — a stout, cheerful fellow named Griffith, who spoke English with that musical lilt peculiar to the Welsh and who assured us, with a confidence I found simultaneously comforting and suspicious, that we should have a grand day of it.

The ascent was toilsome but not, for the first hour, unreasonably so. The path wound upward through green pastures dotted with sheep who regarded us with the magnificent indifference that is the particular gift of their species. My wife and Miss Evans walked ahead, their skirts gathered in one hand, their botanical specimens in the other, exclaiming at every new wildflower with an enthusiasm that I confess I could not entirely share, my own attention being principally occupied by the increasing steepness of the gradient and the decreasing reliability of my knees.

At the summit, we were rewarded beyond all expectation. The clouds parted — as though arranged by Providence for our particular benefit — and below us lay the whole of Meirionnydd, spread out like a map made flesh. Lakes glittered in their hollows. Rivers threaded through the valleys like veins of silver. And in the far distance, the sea — that great, restless, eternal presence that frames this country on three sides — shimmered in the afternoon light.`

const TRAVEL_19C_REF = 'George Borrow, Wild Wales: Its People, Language, and Scenery (1862)'

// Exam 04: Technology
const TECHNOLOGY_21C = `Last month, a school in Cardiff became the first in Wales to introduce AI-powered marking software. The system, developed by a London-based technology firm, can assess a GCSE English essay in approximately ninety seconds, providing feedback on structure, vocabulary, spelling, punctuation, and even — its creators claim — the quality of argument. The headteacher described it as "a game-changer." Several of her colleagues were less enthusiastic.

I am not a Luddite. I use technology every day, and I recognise that it has transformed education in ways that are overwhelmingly positive. Online resources have democratised access to knowledge. Digital tools have made collaboration possible across distances that would once have been insurmountable. But there is a difference between technology that supports learning and technology that replaces the human relationships at its heart.

When I mark a student's essay, I am not merely checking for errors. I am reading for voice, for personality, for the particular way that this particular student sees the world. I am noticing that the quiet girl in the third row has suddenly produced a paragraph of startling originality, or that the boy who never stops talking has written something unexpectedly tender. An algorithm cannot notice these things. It cannot say, "This is different from your usual work — tell me what happened." It cannot see the human being behind the handwriting. And if we lose that, we lose something that no amount of efficiency can replace.`

const TECHNOLOGY_21C_REF = 'Dr Catrin Morgan, "The Algorithm Cannot See You", Golwg360, 2024'

const TECHNOLOGY_19C = `The electric telegraph is, without question, the most remarkable invention of our age, and its consequences for the life of this nation — and indeed of the whole civilised world — are as yet only dimly apprehended. I was present at the demonstration conducted last Tuesday at the General Post Office, at which a message was transmitted from London to Bristol and a reply received within the space of ten minutes. The assembled company, which included several Members of Parliament and a number of distinguished men of science, watched in a silence that bordered upon reverence.

And yet I confess that my admiration is tempered by an unease which I find difficult to articulate. There is, it seems to me, a danger in this passion for speed. When a letter required three days to reach its destination, the writer had leisure to consider his words, to weigh his meaning, to compose his thoughts with care. The interval between sending and receiving allowed for reflection. Now, when a message may be dispatched and answered within the hour, I fear that we shall lose the habit of deliberation and acquire instead a nervous impatience, a craving for immediate response, that will do no service to the quality of our discourse.

I do not propose that we abandon the telegraph — that would be as foolish as proposing that we abandon the railway. But I would urge that we consider, before we surrender ourselves entirely to the cult of velocity, what it is that we sacrifice when we demand that everything be faster.`

const TECHNOLOGY_19C_REF = 'Editorial, The Quarterly Review (1858)'

// Exam 05: Gender
const GENDER_21C = `When the Welsh women's football team qualified for the UEFA Nations League promotion play-offs in 2024, the news was reported on page fourteen of the Western Mail, beneath an article about a local dog show. The men's team, by contrast, had received front-page coverage for losing a friendly. If you wanted a single image to illustrate the state of gender equality in Welsh sport, you could do worse than that.

The numbers are stark. Women's sport receives approximately 10% of media coverage in the UK. Female athletes earn, on average, a fraction of their male counterparts. Facilities for women's teams remain inferior — I have spoken to players who train on pitches without floodlights, who share changing rooms with the men's reserve team, who buy their own kit because the club's budget does not extend to them.

But statistics do not capture the subtler problem, which is one of assumption. We assume that women's sport is less exciting, less skilful, less worthy of attention, not because we have watched it and formed this judgement, but because we have absorbed it from a culture that has always valued men's bodies in motion more than women's. Challenging this assumption requires more than funding, though funding would help. It requires a fundamental reimagining of what sport is for, and who it belongs to.`

const GENDER_21C_REF = 'Megan Lewis, "Level the Playing Field", The Guardian Wales, 2024'

const GENDER_19C = `Sir — I observe, with something between amusement and despair, that the question of female education has once again been raised in your pages, and that once again it has been met with the same weary objections that have been offered, in substantially identical form, for the last hundred years. Women's minds, we are told, are not suited to rigorous study. They lack the capacity for abstract thought. Their proper sphere is the home, and any attempt to draw them from it will result in the collapse of domestic happiness and, presumably, of civilisation itself.

I have six daughters. The eldest can read Virgil in the original. The second has a talent for mathematics that her schoolmaster — to his credit — has described as exceptional. The third writes poetry of considerable merit. I mention these facts not to boast, but to offer evidence against the proposition that the female intellect is inherently limited.

The real objection to women's education, I suspect, is not that women cannot learn, but that educated women are inconvenient. They ask questions. They form opinions. They refuse to accept, with the grateful docility that is expected of them, whatever arrangements men have seen fit to make on their behalf. This is not a deficiency of the female mind. It is a consequence of its proper development, and any society that fears it is a society that has something to hide.`

const GENDER_19C_REF = 'Letter from Eleanor Davies, published in The Cardiff Times (1872)'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────

export const wjecC2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: POVERTY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-01',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-01-reading',
        title: 'Section A: Reading',
        description: 'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-01-q1',
            questionNumber: 1,
            questionText: 'Read the 21st-century source text about poverty in Wales (Source A).\n\nList five things you learn about poverty from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': '1. 3.8 million people in the UK experienced destitution in 2024. 2. Destitution means not having enough money for food or heating. 3. People who visit food banks feel ashamed. 4. The writer visited food banks across South Wales. 5. The volunteers who run food banks work without pay.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-01-q2',
            questionNumber: 2,
            questionText: 'How does the writer of Source A use language to persuade the reader that poverty in Wales is a serious problem?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${POVERTY_21C}`,
            extractSource: POVERTY_21C_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the statistic "3.8 million people" to shock the reader with the scale of the problem. The word "destitution" is very strong and suggests extreme poverty. The list of choices — "between eating and staying warm" — makes the reader feel sympathy because these are basic needs. The writer lists real jobs like "teaching assistant" and "retired nurse" to show that poverty can affect anyone, not just people who do not work. The phrase "no fault of their own" makes the reader feel it is unfair.',
              'Grade 6-7': 'Davies deploys a carefully layered persuasive strategy that moves from the statistical to the personal to the political. The opening statistic — "3.8 million" — establishes scale, but it is the appositive clause "a word that should have no place in the sixth-largest economy on earth" that converts fact into moral indictment, the modal verb "should" carrying the weight of outrage. The tricolon of deprivation — "to feed yourself, to heat your home, to keep the lights on" — uses infinitive repetition to reduce survival to a checklist of impossibilities. The semantic field of shame ("never imagined," "no fault of their own") reframes poverty as an emotional experience rather than a mere economic statistic. The rhetorical question at the close — "why, in one of the wealthiest nations in history, they need it at all" — is devastatingly placed: it transforms the reader\'s sympathy into political discomfort by implying systemic failure.',
              'Grade 8-9': 'Davies constructs a rhetorical architecture of escalating moral pressure. The opening sentence juxtaposes the clinical precision of "3.8 million" against the visceral connotations of "destitution," before the subordinate clause — "a word that should have no place in the sixth-largest economy on earth" — recontextualises the statistic as an obscenity. The second paragraph performs a crucial rhetorical shift from abstraction to testimony: the asyndetic listing of occupations ("A teaching assistant... a former small-business owner... a retired nurse") refuses the anonymity of statistics, while the shared grammatical structure creates an almost liturgical rhythm of dispossession. The phrase "work was no longer enough" inverts the foundational promise of meritocracy with devastating economy. The final paragraph\'s neologistic verb phrase "food-bank our way out" is perhaps the most powerful moment: it transforms a noun associated with charity into a verb of futile action, linguistically enacting the inadequacy of the response it describes. The closing rhetorical question achieves its force not through exclamation but through the quiet precision of "at all" — an understatement that functions as the essay\'s loudest moment.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers the writer\'s persuasive strategies',
              'Uses embedded quotations effectively',
              'Top band: sophisticated, conceptualised analysis of language',
            ],
          },
          {
            id: 'wjec-c2-01-q3',
            questionNumber: 3,
            questionText: 'Read the 19th-century source text (Source B).\n\nWhat do you learn about the lives of the poor in 19th-century Wales from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey conditions.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${POVERTY_19C}`,
            extractSource: POVERTY_19C_REF,
            modelAnswers: {
              'Grade 4-5': 'We learn that the poor in mining areas lived in terrible conditions. The cottages were next to furnaces and the air was "almost unbreathable." A widow with five children survived on "bread and tea alone." The children were "thin and listless" which shows they were malnourished. The widow\'s husband was killed at work and she received no compensation. The writer says the wealth of the nation comes from their labour but they get nothing back.',
              'Grade 6-7': 'Rees presents a systematic indictment of industrial exploitation. The physical conditions are conveyed through sensory detail: "the heat from the furnaces rendered the air almost unbreathable" places the domestic and the industrial in grotesque proximity. The widow functions as a representative figure — her individual suffering stands for a systemic failure. The detail of her appearing twenty years older than her actual age is a powerful metonym for the ageing effects of poverty. The phrase "quiet dignity that moved me deeply" complicates the portrait: this is not passive suffering but maintained selfhood under impossible circumstances. The rhetorical question — "What are we to make of a system that consumes men in its furnaces?" — uses the verb "consumes" to make the industrial process literally cannibalistic, while "discards" reduces human beings to waste material. The final tricolon — "This is not misfortune. It is injustice" — enacts a rhetorical reframing from natural disaster to moral failure.',
            },
            markScheme: [
              'Identifies relevant information from the source',
              'Comments on how language conveys conditions and attitudes',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-01-q4',
            questionNumber: 4,
            questionText: 'Both writers present their views on poverty.\n\nCompare the following:\n- the writers\' attitudes to poverty\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are angry about poverty and think it is unfair. Davies (Source A) uses statistics to show the scale of the problem, while Rees (Source B) uses personal observation of one family. Both writers think poverty is caused by the system, not by individual failure. Davies says "no fault of their own" and Rees calls it "injustice." Both use real examples from Wales. Davies focuses on shame while Rees focuses on physical suffering. Both writers use rhetorical questions to challenge the reader.',
              'Grade 6-7': 'Both writers share a conviction that poverty is systemic rather than individual, but their rhetorical strategies reflect their different historical contexts. Davies employs the data-driven discourse of modern journalism — "3.8 million," "169%" — while Rees relies on the Victorian tradition of first-person social investigation. Yet the parallel is striking: both writers anchor their arguments in specific Welsh locations (Merthyr Tydfil appears in both texts, 175 years apart), creating an implicit continuity of deprivation. Both use representative individuals to humanise statistics: Davies\'s "teaching assistant from Merthyr Tydfil" and Rees\'s widow function identically as synecdoche. The key attitudinal difference lies in their targets: Davies indicts the state ("charity is not a substitute for policy"), while Rees indicts the economic system ("a system that consumes men"). Both deploy rhetorical questions at their conclusions, but Davies\'s is quietly devastating ("why... they need it at all") while Rees\'s is more conventionally outraged ("What are we to make of...?"). The most unsettling comparison is perhaps unintentional: the persistence of the same crisis, described in remarkably similar terms, across nearly two centuries.',
              'Grade 8-9': 'The most striking feature of these texts, read together, is their uncanny symmetry: separated by 175 years, they describe substantially the same crisis in the same region of Wales, and the structural parallels expose the failure of the intervening period to resolve what both writers identify as a systemic rather than contingent problem. Both writers construct poverty as a violation of an implicit social contract: Davies frames it economically ("the sixth-largest economy on earth"), Rees morally ("the wealth of this nation flows from the labour of these people"). Both deploy the individual testimony as ethical evidence — Davies\'s food bank visitors and Rees\'s widow perform the same rhetorical function of converting abstraction into witness — but their narrative positions differ crucially. Rees writes as an outsider entering the world of the poor ("I visited," "I found"), maintaining the class boundary even as he condemns it; Davies collapses this distance through the second-person voice and the insistence that poverty "could have happened to any one of us." The most significant methodological difference is temporal: Rees documents a present crisis; Davies documents a present crisis that is also a historical failure, her statistics ("since 2010") implying a trajectory rather than a snapshot. Both writers arrive at the same conclusion — that poverty is chosen by the powerful, not by the poor — but where Rees frames this as a question ("What are we to make of...?"), Davies frames it as an imperative, refusing the rhetorical comfort of uncertainty.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-01-writing',
        title: 'Section B: Writing',
        description: 'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-01-q5',
            questionNumber: 5,
            questionText: 'Your local council is considering closing a community food bank to save money.\n\nWrite a letter to the council arguing that the food bank should remain open.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with: appropriate formal register; relevant reasons to keep the food bank open; generally accurate SPaG; some attempt at persuasive techniques.',
              'Grade 6-7': 'A well-structured letter with: consistent formal tone; a range of persuasive strategies including evidence and emotive language; secure accuracy; clear sense of audience.',
              'Grade 8-9': 'A compelling letter with: authoritative voice; sophisticated argument that anticipates counter-arguments; varied and precise vocabulary; technical control throughout.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; persuasive purpose; structured argument; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-01-q6',
            questionNumber: 6,
            questionText: '"In a wealthy country, no one should go hungry."\n\nWrite a speech for a school assembly arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: some rhetorical devices; a discernible argument; appropriate register for a school assembly; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with: effective use of rhetorical techniques (repetition, tricolon, direct address); balanced argument that considers multiple perspectives; consistent accuracy and varied sentence structures.',
              'Grade 8-9': 'An outstanding speech with: commanding voice and tone; sophisticated rhetorical architecture; nuanced argument that challenges assumptions; linguistic precision and flair; impeccable technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: EDUCATION
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-02',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-02-reading',
        title: 'Section A: Reading',
        description: 'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-02-q1',
            questionNumber: 1,
            questionText: 'Read the 21st-century source text about education in Wales (Source A).\n\nList five things you learn about the challenges facing schools from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': '1. There is a visible gap between confident and anxious students arriving in Year 7. 2. Some children arrive in shoes that do not fit properly. 3. The attainment gap is caused by poverty and housing insecurity. 4. The Curriculum for Wales promises to nurture every learner. 5. The writer has taught for twenty-two years.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-02-q2',
            questionNumber: 2,
            questionText: 'How does the writer of Source A use language to convey her frustration about the education system?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EDUCATION_21C}`,
            extractSource: EDUCATION_21C_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer contrasts the confident children with "new backpacks" and the anxious ones "in shoes that are slightly too big." This makes the reader see the inequality clearly. The phrase "mistakes are expensive" shows that poorer children cannot afford to get things wrong. She says the gap is "not a mystery" which suggests the government already knows but does nothing. The phrase "ambition without resource is just aspiration" sounds clever and memorable, making her argument more powerful.',
              'Grade 6-7': 'Griffiths constructs frustration through a rhetoric of deflation: each apparently positive statement is systematically undercut. The Curriculum for Wales "promises" and has "admirable ambitions" — but the approving vocabulary is immediately cancelled by the devastating epigram "ambition without resource is just aspiration, and aspiration without action is just words." The chain of diminishing synonyms enacts the process of dilution it describes. The opening vignette is structured as an implicit comparison that requires no commentary: the children with "labelled pencil cases" and those with "last year\'s bag" are placed side by side, and the reader is left to draw the moral conclusion. The phrase "careful alertness of someone who knows that mistakes are expensive" is particularly effective: "expensive" carries both literal (financial cost) and metaphorical (social consequence) weight, and the mature awareness attributed to the child — "someone who knows" — is itself an indictment of a system that forces children to understand scarcity before they understand fractions.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language conveys attitude and emotion',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-02-q3',
            questionNumber: 3,
            questionText: 'Read the 19th-century source text (Source B).\n\nWhat do you learn about the state of education in 19th-century Wales from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey the situation.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${EDUCATION_19C}`,
            extractSource: EDUCATION_19C_REF,
            modelAnswers: {
              'Grade 4-5': 'We learn that schools in rural Wales were in a very poor state. Teaching was done in English even though many children only spoke Welsh. Classes had 40-50 children of different ages in one room. Older children were often absent because they had to work on farms. The writer says the children of the poor deserve a good education. He calls the waste of talent something that "should alarm every thinking citizen."',
              'Grade 6-7': 'Phillips presents a picture of systematic educational failure rooted in cultural imperialism and economic necessity. The detail that instruction was "conducted wholly in English, a language which many of the children could scarcely understand" reveals a colonial dimension: education is not merely inadequate but actively alienating, imposed in a language that excludes its recipients. The numerical detail — "classes of forty or fifty children, ranging in age from five to fourteen, in a single room" — conveys impossibility through accumulation. The phrase "zeal without proper support is insufficient" echoes the structure of political rhetoric, using the concessive "I do not doubt" to praise individual teachers while indicting the system that fails them. The final sentence reframes educational neglect as economic irrationality: "This is not economy. It is waste." The short, antithetical sentences mimic a legal judgement, lending authority to the moral conclusion.',
            },
            markScheme: [
              'Identifies relevant information from the source',
              'Comments on how language conveys conditions and attitudes',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-02-q4',
            questionNumber: 4,
            questionText: 'Both writers present their views on education.\n\nCompare the following:\n- the writers\' attitudes to education and its failures\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers believe the education system is failing poorer children. Griffiths (Source A) describes the visible gap between rich and poor students, while Phillips (Source B) describes overcrowded classrooms with no resources. Both writers blame the system rather than individuals. Griffiths praises teachers but says they need more support; Phillips also praises "zealous and devoted teachers." Both end by saying that failing children is a waste. Griffiths uses personal experience while Phillips uses formal reporting.',
              'Grade 6-7': 'Both writers construct education as a failed promise, but their rhetorical strategies differ significantly. Griffiths writes from within the system — her authority derives from "twenty-two years" of teaching experience — while Phillips writes as an external investigator reporting to the public. This positional difference shapes their rhetoric: Griffiths\'s frustration is personal and cumulative ("I have seen initiatives come and go"), whereas Phillips\'s is observational and immediate ("I find myself unable to report with any satisfaction"). Both writers identify poverty as the fundamental barrier to educational achievement, but they frame it differently: Griffiths presents it as a visible daily reality (the shoes, the bags), while Phillips presents it as a structural economic problem (children absent for harvesting). The most revealing parallel is structural: both writers use a concessive pattern — acknowledging good intentions before demolishing them. Griffiths concedes the Curriculum for Wales is "admirable" before exposing it as empty aspiration; Phillips concedes that teachers are "zealous" before arguing that zeal is insufficient. Both arrive at the same conclusion: that educational failure is a political choice disguised as an economic constraint.',
              'Grade 8-9': 'These texts, separated by 177 years, present a devastating case study in the persistence of educational inequality in Wales. The most unsettling comparison is methodological: both writers use identical rhetorical structures — the concessive acknowledgement followed by the systemic critique — suggesting that the discourse of educational failure has become a genre unto itself, endlessly repeated and endlessly ineffective. Griffiths\'s observation that she has "seen initiatives come and go, each one heralded as transformative, each one quietly abandoned" is itself a meta-commentary on the kind of text Phillips is writing: the earnest report, the moral appeal, the call to action that changes nothing. Phillips\'s language betrays the assumptions of his era — the Commissioners, the hierarchy of the "children of the poor" and "their more fortunate countrymen" — while Griffiths writes in a register of democratic urgency. Yet both writers ultimately rely on the same rhetorical strategy: the conversion of educational failure into economic waste. Phillips calls it "waste of human talent"; Griffiths implies that unfunded aspiration is itself a form of institutional waste. The question these texts raise collectively is whether the persistence of the problem is a failure of understanding or a failure of will — and both writers, from their different centuries, reach the same uncomfortable answer.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-02-writing',
        title: 'Section B: Writing',
        description: 'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-02-q5',
            questionNumber: 5,
            questionText: 'You have been asked to write a report for your school governors about how to improve support for disadvantaged students.\n\nWrite your report.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear report with: appropriate formal layout and register; relevant practical suggestions; generally accurate SPaG.',
              'Grade 6-7': 'A well-structured report with: effective use of headings and subheadings; evidence-based recommendations; consistent formality and accuracy.',
              'Grade 8-9': 'An authoritative report with: professional tone; sophisticated analysis of the problem; prioritised, costed recommendations; impeccable technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; informative purpose with recommendations; logical structure; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-02-q6',
            questionNumber: 6,
            questionText: '"Every child deserves the same quality of education, regardless of where they live or how much money their parents earn."\n\nWrite an article for a national newspaper arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: recognisable article conventions (headline, introduction); a range of relevant points; generally accurate writing.',
              'Grade 6-7': 'A well-crafted article with: engaging headline and opening; balanced argument with evidence; effective use of rhetorical techniques; consistent accuracy.',
              'Grade 8-9': 'An outstanding article with: compelling journalistic voice; nuanced argument that interrogates the statement; sophisticated use of evidence, anecdote, and rhetoric; technical precision throughout.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; persuasive/rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: TRAVEL
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-03',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-03-reading',
        title: 'Section A: Reading',
        description: 'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-03-q1',
            questionNumber: 1,
            questionText: 'Read the 21st-century source text about walking in Wales (Source A).\n\nList five things you learn about the writer\'s experience on the coast path.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': '1. The writer walked the Ceredigion coast path, which is sixty miles long. 2. The path runs from Cardigan to Ynyslas. 3. It rained for four out of five days. 4. The rain was hard and horizontal, not gentle drizzle. 5. The writer felt very alive despite the bad weather.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-03-q2',
            questionNumber: 2,
            questionText: 'How does the writer of Source A use language to convey the experience of walking in the Welsh landscape?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TRAVEL_21C}`,
            extractSource: TRAVEL_21C_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer describes the landscape changing so much it "feels like crossing into another country." The hills are described as "wilder, older, less tamed" which makes Wales sound exciting and different. The rain is described as "hard, horizontal rain" which sounds intense. The writer uses personification when he says "the path does not care about your to-do list" to show that nature does not care about human worries. The phrase "simply be" at the end suggests the walk helps you feel peaceful and free.',
              'Grade 6-7': 'Hartley constructs the Welsh landscape as a site of existential renewal through a rhetoric of subtraction. The opening paragraph uses a tricolon of comparative adjectives — "wilder, older, less tamed" — that defines Wales not by what it is but by its distance from the familiar English landscape, establishing a geography of otherness. The sky is "vast, indifferent, magnificent" — the central adjective "indifferent" is crucial, positioning nature\'s unconcern as liberating rather than hostile. The rain description subverts expectation: "not the gentle drizzle of popular imagination" dismisses the cliche before replacing it with the visceral "hard, horizontal rain that found every gap." The personification of weather as an adversary who "found" weakness is both humorous and physical. The final paragraph\'s sequence of negative constructions — "does not care," "does not check" — creates freedom through negation: the landscape is defined by what it refuses to do, and this refusal becomes a gift. The concluding infinitive "to simply be" is deliberately, almost provocatively simple after the complex prose that precedes it.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language conveys experience and emotion',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-03-q3',
            questionNumber: 3,
            questionText: 'Read the 19th-century source text (Source B).\n\nWhat do you learn about the experience of travelling in 19th-century Wales from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey the experience.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${TRAVEL_19C}`,
            extractSource: TRAVEL_19C_REF,
            modelAnswers: {
              'Grade 4-5': 'We learn that people climbed Cadair Idris using a guide named Griffith. The party included women who collected plants along the way. The walk was tiring, especially the steep parts. At the top, they had an amazing view of all of Meirionnydd. The writer could see lakes, rivers, and the sea. The guide spoke English with a Welsh accent.',
              'Grade 6-7': 'Borrow presents Victorian travel as a social ritual with clear hierarchies and gendered expectations. The guide Griffith is characterised through his "musical lilt" and confident reassurance, performing the role of local colour for the English visitor. The women are described through the lens of genteel femininity — "skirts gathered in one hand, their botanical specimens in the other" — though Borrow\'s wry admission that he "could not entirely share" their botanical enthusiasm introduces self-deprecating humour that humanises the narrator. The summit description shifts register dramatically: the clouds part "as though arranged by Providence," a phrase that blends religious reverence with gentle irony. The landscape is rendered through a sequence of similes — "like a map made flesh," "like veins of silver" — that transform geography into something simultaneously cartographic and organic. The final image of the sea as "that great, restless, eternal presence" elevates travel writing into something approaching the sublime, the triple adjective structure creating a rhythm of reverence.',
            },
            markScheme: [
              'Identifies relevant information from the source',
              'Comments on how language conveys experience and perspective',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-03-q4',
            questionNumber: 4,
            questionText: 'Both writers describe experiences of travelling in Wales.\n\nCompare the following:\n- the writers\' attitudes to the Welsh landscape and the experience of travel\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers love the Welsh landscape but describe it differently. Hartley (Source A) walks alone in bad weather and finds it freeing, while Borrow (Source B) travels in a group on a fine day and enjoys the views. Hartley uses the landscape to escape modern life — "emails, deadlines" — while Borrow treats it as a pleasant adventure. Both writers are impressed by the landscape at the end. Hartley describes it as making him feel "alive" while Borrow describes the view as magnificent.',
              'Grade 6-7': 'Both writers present the Welsh landscape as transformative, but the nature of the transformation differs fundamentally. Hartley seeks erasure — the stripping away of modern identity ("the accumulated nonsense of daily life") — while Borrow seeks enrichment, adding experience to an already full life. This reflects their different cultural moments: Hartley writes from a position of digital saturation and existential fatigue; Borrow from one of Victorian curiosity and social confidence. Their rhetorical registers diverge accordingly: Hartley uses the contemporary language of mindfulness and anti-productivity ("simply be"), while Borrow employs the Romantic sublime ("great, restless, eternal"). The weather functions differently in each text: Hartley\'s rain is an antagonist that paradoxically liberates; Borrow\'s clearing clouds are providential, the landscape performing for its audience. Both writers use the second paragraph as a turning point — Hartley\'s from anticipation to hardship, Borrow\'s from effort to reward — but the structural logic is inverted: Hartley finds meaning in discomfort, Borrow in beauty. Perhaps the most telling difference is in their relationship to the landscape itself: Hartley is humbled by it ("the landscape has no interest whatsoever in your comfort"), while Borrow aestheticises it ("like a map made flesh"), maintaining the Victorian observer\'s comfortable distance.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-03-writing',
        title: 'Section B: Writing',
        description: 'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-03-q5',
            questionNumber: 5,
            questionText: 'A travel magazine has asked for contributions from readers about their favourite places.\n\nWrite an article for the magazine about a place you have visited that made a strong impression on you.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate magazine style; descriptive and reflective content; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted article with: engaging sensory detail; reflective commentary on the significance of the place; varied sentence structures and accurate writing.',
              'Grade 8-9': 'An outstanding article with: vivid, original description; sophisticated reflection on the meaning of place and travel; precise, evocative language; flawless technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; descriptive and reflective purpose; effective structure; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-03-q6',
            questionNumber: 6,
            questionText: '"Young people today spend too much time looking at screens and not enough time experiencing the natural world."\n\nWrite a speech for a school debate arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: some rhetorical devices; a discernible argument with examples; appropriate register for a school debate; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with: effective rhetorical techniques; balanced argument considering both sides; strong examples; consistent accuracy and varied syntax.',
              'Grade 8-9': 'An outstanding speech with: commanding rhetorical voice; sophisticated argument that challenges the binary of the statement; original examples and compelling reasoning; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-04',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-04-reading',
        title: 'Section A: Reading',
        description: 'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-04-q1',
            questionNumber: 1,
            questionText: 'Read the 21st-century source text about technology in education (Source A).\n\nList five things you learn about the introduction of AI marking software from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': '1. A school in Cardiff was the first in Wales to use AI marking software. 2. The software was made by a London-based company. 3. It can mark an essay in about ninety seconds. 4. It gives feedback on structure, vocabulary, spelling, and punctuation. 5. The headteacher called it "a game-changer" but other teachers were less positive.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-04-q2',
            questionNumber: 2,
            questionText: 'How does the writer of Source A use language to argue that human teachers cannot be replaced by technology?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TECHNOLOGY_21C}`,
            extractSource: TECHNOLOGY_21C_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer says she is "not a Luddite" to show she is not against all technology, which makes her argument more balanced. She describes marking as reading for "voice" and "personality," which makes it sound personal and human. She gives examples of students doing unexpected things — a "quiet girl" writing something original and a talkative "boy" writing something "tender" — to show that teachers notice things machines cannot. The repeated phrase "it cannot" emphasises the limitations of AI.',
              'Grade 6-7': 'Morgan constructs her argument through a carefully managed rhetoric of concession and refutation. The pre-emptive declaration "I am not a Luddite" is a strategic disarming of the most obvious counter-argument, establishing the writer as reasonable before she critiques technology. The central paragraph redefines marking through a semantic shift: the vocabulary moves from the technical ("checking for errors") to the humanistic ("voice," "personality," "the particular way that this particular student sees the world"). The repetition of "particular" insists on individuality as the irreducible element that technology cannot process. The anaphoric "It cannot" structure in the final paragraph accumulates absence: each repetition adds another dimension of human perception that the algorithm lacks. The most effective moment is the imagined teacher\'s response — "This is different from your usual work — tell me what happened" — which is simultaneously pedagogical and pastoral, embedding care within assessment. The final sentence\'s conditional "if we lose that" positions this loss as a choice, implicating the reader in the decision.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language builds an argument',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-04-q3',
            questionNumber: 3,
            questionText: 'Read the 19th-century source text (Source B).\n\nWhat do you learn about 19th-century attitudes to new technology from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey their perspective.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${TECHNOLOGY_19C}`,
            extractSource: TECHNOLOGY_19C_REF,
            modelAnswers: {
              'Grade 4-5': 'We learn that the electric telegraph was seen as the most remarkable invention of the time. A message could be sent from London to Bristol and answered in ten minutes, which amazed people. Important people watched the demonstration "in silence" showing how impressed they were. However, the writer worries that speed will make people impatient and stop them thinking carefully. He compares writing a letter, which took three days, with the instant telegraph. He does not want to get rid of the telegraph but wants people to think about what they might lose.',
              'Grade 6-7': 'The editorial reveals a Victorian culture negotiating the tension between technological progress and humanistic values. The opening superlative — "the most remarkable invention of our age" — establishes genuine admiration, while "only dimly apprehended" acknowledges that the consequences of technology outpace understanding of it. The demonstration scene is rendered with almost religious imagery: the audience watches "in a silence that bordered upon reverence," positioning technology as a secular miracle. Yet the concessive "and yet I confess" pivots from awe to anxiety, and the word "confess" implies that scepticism about progress is itself a transgression. The central argument is temporal: the contrast between the three-day letter and the one-hour telegraph frames speed as the enemy of deliberation. The phrase "the habit of deliberation" is telling — "habit" implies that careful thought is a practice that can be lost, not an innate capacity. The closing caveat — "I do not propose that we abandon the telegraph" — mirrors Morgan\'s "I am not a Luddite," suggesting that across centuries, critics of technology must first prove they are not opposed to progress before they are permitted to question it.',
            },
            markScheme: [
              'Identifies relevant information about attitudes',
              'Comments on how language conveys perspective and concern',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-04-q4',
            questionNumber: 4,
            questionText: 'Both writers express concerns about the impact of new technology.\n\nCompare the following:\n- the writers\' attitudes to technology and what it might replace\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are worried about technology replacing something important. Morgan (Source A) fears that AI will replace the human relationship between teacher and student. The 19th-century writer (Source B) fears that the telegraph will replace careful thinking. Both writers say they are not against technology completely. Morgan says she is "not a Luddite" and Source B says they do not want to "abandon the telegraph." Both use specific examples to support their arguments. The main difference is that Morgan focuses on human relationships while Source B focuses on the quality of thinking.',
              'Grade 6-7': 'Both writers occupy the same rhetorical position: the reasonable sceptic who must establish their pro-technology credentials before being permitted to critique. Morgan\'s "I am not a Luddite" and the editorial\'s "I do not propose that we abandon the telegraph" are functionally identical disclaimers, suggesting that the discourse of technological anxiety has a remarkably stable grammar across 166 years. Both writers frame their concern not as opposition to technology but as mourning for what it displaces: Morgan mourns the pedagogical relationship ("the human being behind the handwriting"), while the editorial mourns the culture of deliberation ("the habit of deliberation"). The key difference lies in specificity: Morgan\'s argument is grounded in vivid, particular examples — the quiet girl, the talkative boy — while the editorial\'s is abstract and philosophical. This makes Morgan more emotionally compelling but the editorial more broadly applicable. Both writers use rhetorical questions or conditional structures to position loss as a choice: Morgan\'s "if we lose that" and the editorial\'s "what it is that we sacrifice." The implication in both cases is the same: technological adoption is not inevitable but chosen, and with choice comes responsibility.',
              'Grade 8-9': 'These texts, read together, reveal that the discourse of technological anxiety is perhaps the most durable rhetorical genre in modern English. Both writers construct identical argumentative architectures: the concessive opening (technology is good), the pivot (but), the articulation of loss (what we sacrifice), the moderate conclusion (not rejection but caution). This structural parallelism is itself the most powerful argument against both writers\' positions — or, perhaps, the most powerful argument for them: the fact that we have been making the same warnings for 166 years without effect might suggest they are groundless, or it might suggest we have consistently failed to heed them. Morgan\'s argument is ultimately about epistemology: an algorithm "cannot see the human being behind the handwriting" because seeing a human being is not a data-processing task but an act of recognition that requires consciousness, empathy, and relationship. The editorial\'s argument is about temporality: speed destroys deliberation, and deliberation is the precondition of wisdom. Both writers identify the same fundamental concern — that efficiency and humanity are not always compatible — but Morgan makes this personal (the individual student) while the editorial makes it cultural (the quality of discourse). The most haunting parallel is the shared tone of resigned foreknowledge: both writers clearly suspect that their warnings will be ignored, and both write anyway, as though the act of articulating the loss is itself a form of resistance to it.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-04-writing',
        title: 'Section B: Writing',
        description: 'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-04-q5',
            questionNumber: 5,
            questionText: 'Your school is considering allowing students to use AI tools to help with homework.\n\nWrite a letter to your headteacher giving your views on this proposal.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with: appropriate formal register; a range of relevant points for and/or against; generally accurate SPaG.',
              'Grade 6-7': 'A well-structured letter with: balanced argument considering benefits and risks; practical suggestions; consistent formality and accuracy.',
              'Grade 8-9': 'A compelling letter with: sophisticated argument that goes beyond simple for/against; nuanced understanding of AI\'s potential and limitations; authoritative voice; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; persuasive/argumentative purpose; logical structure; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-04-q6',
            questionNumber: 6,
            questionText: '"Technology is making us less human, not more connected."\n\nWrite an article for a magazine aimed at young people arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: recognisable article conventions; a range of relevant points with examples; appropriate register for a young audience; generally accurate writing.',
              'Grade 6-7': 'A well-crafted article with: engaging opening and clear structure; balanced argument with personal examples and wider evidence; effective rhetorical techniques; consistent accuracy.',
              'Grade 8-9': 'An outstanding article with: distinctive voice appropriate to the audience; sophisticated argument that redefines the terms of the debate; original thinking and compelling examples; flawless technical control.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; persuasive/rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: GENDER
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-05',
    board: 'WJEC',
    paperNumber: 2,
    title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-05-reading',
        title: 'Section A: Reading',
        description: 'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-05-q1',
            questionNumber: 1,
            questionText: 'Read the 21st-century source text about gender equality in sport (Source A).\n\nList five things you learn about the treatment of women\'s sport from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': '1. The Welsh women\'s football team\'s success was reported on page fourteen of the newspaper. 2. The men\'s team got front-page coverage for losing a friendly. 3. Women\'s sport gets about 10% of media coverage in the UK. 4. Female athletes earn much less than male athletes. 5. Some women players train on pitches without floodlights.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-05-q2',
            questionNumber: 2,
            questionText: 'How does the writer of Source A use language to argue that women\'s sport is unfairly treated?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${GENDER_21C}`,
            extractSource: GENDER_21C_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses a specific example of the newspaper reporting to show the unfairness: the women\'s success was on page fourteen while the men\'s failure was on the front page. This contrast shocks the reader. She uses statistics — "approximately 10%" — to prove women\'s sport is ignored. The phrase "a fraction of their male counterparts" shows how unequal pay is. The word "assumption" is important because it suggests people are biased without realising it. The final sentence about "who it belongs to" makes the reader think about sport differently.',
              'Grade 6-7': 'Lewis opens with a devastatingly specific anecdote that functions as an allegory: the juxtaposition of page fourteen (women qualifying) and the front page (men losing a friendly) inverts every reasonable expectation of newsworthiness, and the parenthetical reference to the dog show adds a note of dark comedy that heightens the outrage. The phrase "If you wanted a single image to illustrate" explicitly positions this anecdote as synecdoche, inviting the reader to see the particular as representative. The second paragraph shifts to the empirical: "approximately 10%" and "a fraction" establish statistical authority. The tricolon of practical grievances — "pitches without floodlights... share changing rooms... buy their own kit" — descends from inconvenience to indignity, the asyndetic listing creating a sense of accumulated neglect. The third paragraph performs the most sophisticated rhetorical move: the redefinition of the problem from material ("funding") to cultural ("assumption"). The phrase "not because we have watched it and formed this judgement, but because we have absorbed it" distinguishes between active critical evaluation and passive cultural conditioning, implicating the reader in an unconscious prejudice.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language builds a persuasive argument',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-05-q3',
            questionNumber: 3,
            questionText: 'Read the 19th-century source text (Source B).\n\nWhat do you learn about 19th-century attitudes to gender and women\'s capabilities from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey their perspective.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${GENDER_19C}`,
            extractSource: GENDER_19C_REF,
            modelAnswers: {
              'Grade 4-5': 'We learn that in the 19th century, people argued that women were not suited to serious study. The writer disagrees and uses her own daughters as evidence — one can read Latin, another is good at mathematics, and a third writes poetry. She argues that the real reason people oppose women\'s education is that educated women "ask questions" and "form opinions." She says that society is afraid of women who think for themselves. The phrase "a society that has something to hide" is powerful because it suggests men are covering up their unfair control.',
              'Grade 6-7': 'Davies constructs her argument through a three-stage rhetoric of demolition. The opening paragraph ventriloquises the opposition with devastating precision: "Women\'s minds, we are told, are not suited to rigorous study" — the passive construction "we are told" immediately distances the claim from truth, while the escalating absurdity of the predicted consequences ("the collapse of domestic happiness and, presumably, of civilisation itself") uses the parenthetical "presumably" as a surgical instrument of irony. The second paragraph offers empirical refutation through personal testimony: the three daughters\'s accomplishments — Virgil, mathematics, poetry — span the humanities and sciences, pre-emptively countering any argument that female intellect is limited to specific domains. The disclaimer "not to boast, but to offer evidence" positions personal experience as data. The third paragraph performs the essay\'s most radical move: it redefines the opposition\'s argument for them. "The real objection" is not intellectual incapacity but social inconvenience — "educated women are inconvenient." The tricolon "They ask questions. They form opinions. They refuse to accept" uses short, punchy declaratives that enact the very directness and clarity that the opposition fears.',
            },
            markScheme: [
              'Identifies relevant information about attitudes',
              'Comments on how language conveys perspective and argument',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-05-q4',
            questionNumber: 4,
            questionText: 'Both writers argue against gender inequality.\n\nCompare the following:\n- the writers\' attitudes to gender equality and the barriers they identify\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that women are treated unfairly. Lewis (Source A) focuses on sport while Davies (Source B) focuses on education, but both identify the same problem: people assume women are less capable without any real evidence. Lewis says we have "absorbed" these assumptions from culture, and Davies says the "real objection" to educating women is that they become inconvenient. Both use specific examples — Lewis uses the newspaper story, Davies uses her daughters. Both writers are angry but controlled. The main difference is that Lewis focuses on practical inequality (pay, facilities) while Davies focuses on intellectual prejudice.',
              'Grade 6-7': 'Both writers identify unconscious cultural bias as the fundamental barrier to gender equality, but they operate in different registers and contexts. Lewis writes within a framework of data-driven advocacy: her statistics ("10% of media coverage," "a fraction") establish the material reality of inequality before she moves to its cultural roots. Davies, lacking access to such data, constructs her case through personal testimony and logical argument. The rhetorical strategies differ significantly: Lewis builds from the specific (the newspaper anecdote) to the abstract ("a fundamental reimagining"), while Davies moves from the abstract (the opposition\'s arguments) to the specific (her daughters) to the philosophical ("a society that has something to hide"). Both writers use irony as a weapon — Lewis\'s dog show juxtaposition and Davies\'s "presumably, of civilisation itself" — but Lewis\'s is situational while Davies\'s is verbal, reflecting the different tools available to them. The most striking parallel is their shared identification of the problem as attitudinal rather than material: Lewis\'s "assumption" and Davies\'s "inconvenient" both locate inequality in the minds of men rather than in the nature of women. This shared diagnosis, across 152 years, suggests that while the forms of gender inequality have changed, its psychological architecture remains remarkably stable.',
              'Grade 8-9': 'These texts reveal that the argument for gender equality has, across 152 years, maintained the same essential structure while adapting to radically different evidentiary standards. Both writers identify the same fundamental obstacle: not material disadvantage (though both document this) but the self-perpetuating nature of cultural assumption. Lewis\'s "not because we have watched it and formed this judgement" and Davies\'s "the real objection... is not that women cannot learn" perform identical rhetorical operations — they strip away the stated justification to expose the actual motivation beneath. The difference is that Lewis names this as a cultural process ("absorbed") while Davies names it as a power dynamic ("inconvenient"), and this distinction is historically revealing: Davies, writing from within a system of explicit patriarchal authority, can identify individual male resistance; Lewis, writing within a system of formal equality, must identify structural and cultural forces that operate without conscious agency. Both writers employ a strategy of inversion: Lewis inverts newsworthiness (success on page 14, failure on page 1); Davies inverts intellectual hierarchy (her daughters exceed the achievements attributed to male education). These inversions function not merely as evidence but as rhetorical enactments of the world as it should be. The most unsettling reading of these texts together is that Davies\'s letter could have been written yesterday with only minor adjustments to its examples — and that this durability is itself the strongest indictment of the culture both writers address.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-05-writing',
        title: 'Section B: Writing',
        description: 'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-05-q5',
            questionNumber: 5,
            questionText: 'Your school is organising an event to celebrate International Women\'s Day.\n\nWrite a leaflet to encourage students to attend the event and to explain why it matters.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear leaflet with: appropriate form (headings, subheadings, direct address); informative and persuasive content; generally accurate SPaG.',
              'Grade 6-7': 'A well-designed leaflet with: effective combination of information and persuasion; engaging tone appropriate for students; varied sentence structures; consistent accuracy.',
              'Grade 8-9': 'An outstanding leaflet with: sophisticated balance of practicality and principle; compelling voice that avoids condescension; precise and varied language; flawless technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; informative and persuasive purpose; effective layout; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-05-q6',
            questionNumber: 6,
            questionText: '"True equality between men and women has already been achieved. There is nothing left to fight for."\n\nWrite an article for a newspaper arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: recognisable article conventions; a range of relevant points with examples; generally accurate writing.',
              'Grade 6-7': 'A well-crafted article with: engaging headline and structure; balanced argument with specific evidence; effective rhetorical techniques; consistent accuracy.',
              'Grade 8-9': 'An outstanding article with: authoritative journalistic voice; sophisticated argument that examines the definition of equality; original examples drawn from multiple domains; technical mastery throughout.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; persuasive/rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },
]
