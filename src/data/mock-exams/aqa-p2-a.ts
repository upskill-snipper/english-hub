import type { MockExamPaper } from '../mock-exams'

// ─── Source Texts ──────────────────────────────────────────────────────────────

// Exam 01: Poverty & Homelessness
const EXAM_01_SOURCE_A = `Walk through any British city centre after midnight and you will see them: figures huddled in doorways, wrapped in sleeping bags that offer little protection against the biting wind. Last January, I spent a week volunteering with a street outreach team in Manchester, and what I witnessed fundamentally changed my understanding of homelessness. It is not, as comfortable narratives suggest, a matter of poor choices. It is a matter of systems failing the people they were designed to protect.

On our first night, we met David, a forty-three-year-old former electrician who had been sleeping rough for eight months. He had lost his job after a back injury, fallen behind on rent, and been evicted within six weeks. The speed of his descent was breathtaking. "One day you're paying taxes," he told me, "the next you're invisible." That word — invisible — came up again and again in our conversations with rough sleepers. Not forgotten. Invisible. As though they had ceased to exist entirely.

The government's own figures reveal the scale of the crisis: over 300,000 people in England are currently without a permanent home. Temporary accommodation costs taxpayers over one billion pounds annually — money spent managing a crisis rather than preventing one. Meanwhile, mental health services have been cut by twenty-three per cent in real terms since 2010, and social housing waiting lists stretch to over a million households. We are not merely failing to solve this problem. We are actively manufacturing it.`

const EXAM_01_SOURCE_A_REF = 'Priya Sharma, "Sleeping on the Streets of Britain", The Observer, 2023'

const EXAM_01_SOURCE_B = `I have spent this past month investigating the condition of those unhappy persons who, through misfortune or vice, have been reduced to seeking shelter in the casual wards of our workhouses, and I must confess that what I have discovered has filled me with a shame that I cannot easily set aside. These are not, as popular opinion would have it, the idle and the dissolute. Among their number I found former clerks, seamstresses, labourers, and even a schoolmaster — persons who had, until recently, maintained themselves with industry and self-respect.

The casual ward at Whitechapel, which I visited on Thursday last, accommodates some forty men in a space designed for twenty. They sleep upon bare wooden boards, without pillow or blanket, packed so close together that the turning of one man disturbs his neighbours on either side. The air is foul beyond description. A single gas lamp burns at one end of the room, casting shadows that make the scene resemble nothing so much as a charcoal sketch of purgatory.

What is most striking is the silence of these men. They do not complain, for complaint achieves nothing. They do not protest, for protest requires an audience that cares to listen. They endure, with a patience that is not virtue but exhaustion — the patience of men who have discovered that society, for all its talk of Christian charity, regards their suffering as an inconvenience rather than an injustice.`

const EXAM_01_SOURCE_B_REF = 'James Greenwood, "A Night in a Workhouse", The Pall Mall Gazette, 1866'

// Exam 02: Education Reform
const EXAM_02_SOURCE_A = `Our education system is broken — and we all know it. Every autumn, a fresh cohort of five-year-olds enters school bright-eyed and bursting with curiosity, and every summer, a generation of sixteen-year-olds leaves drained, anxious, and convinced that their worth as human beings can be reduced to a string of numbers on a results slip. Somewhere between those two points, something goes catastrophically wrong.

The problem is not our teachers, who are among the most dedicated professionals in the country and who work, on average, fifty-four hours per week for salaries that would make a city banker laugh. The problem is a system that has become so obsessed with measurement that it has forgotten what it is supposed to be measuring. We test children at seven, at eleven, at sixteen, and at eighteen. We rank them, grade them, sort them into sets, and then express surprise when they develop anxiety disorders at twice the rate of previous generations.

I am not arguing against standards. I am arguing against a definition of standards so narrow that it excludes creativity, critical thinking, collaboration, and emotional intelligence — the very skills that employers consistently tell us they value most. Finland, which routinely tops international education rankings, does not test its children until they are sixteen. Its teachers are trusted professionals, not data-entry clerks. Its students are among the happiest in Europe. There is another way.`

const EXAM_02_SOURCE_A_REF = 'James Hargreaves, "The Exam Factory", The New Statesman, 2024'

const EXAM_02_SOURCE_B = `The present system of education in this country is, I fear, admirably calculated to produce one result: the suppression of every spark of originality in the youthful mind. I have observed the progress of several schools, both in London and in the provinces, and I find everywhere the same dispiriting method — the pupil is required to learn by rote, to repeat without understanding, and to demonstrate his knowledge through the mechanical reproduction of facts that he has neither questioned nor, in any meaningful sense, comprehended.

A boy of twelve whom I examined last week could recite the kings and queens of England in perfect order, from William the Conqueror to our present sovereign, yet could not tell me why the Civil War was fought, nor what principles were at stake. He had been trained to remember but not to think. His education, if I may call it such, had furnished his memory while leaving his judgement entirely uncultivated.

I do not blame the schoolmasters, who labour under a system of payment by results that rewards the appearance of learning rather than its substance. They are rational men responding to irrational incentives. If we wish them to educate rather than merely to instruct, we must create the conditions in which genuine education becomes possible — and that begins with the recognition that a child's mind is not a vessel to be filled but a fire to be kindled.`

const EXAM_02_SOURCE_B_REF = 'Matthew Arnold, Reports on Elementary Schools, 1869'

// Exam 03: Technology Impact
const EXAM_03_SOURCE_A = `Last Tuesday, I watched my fourteen-year-old daughter attempt to read a novel. She managed three pages before reaching for her phone, scrolling through notifications for ten minutes, then returning to the book — only to re-read the same paragraph she had already finished. This is not laziness. This is what technology has done to the adolescent brain, and we need to talk about it honestly rather than pretending that everything is fine.

The evidence is now overwhelming. A landmark study published by the University of Oxford in 2024 found that teenagers who spend more than three hours daily on screens show measurably reduced attention spans, lower reading comprehension scores, and significantly higher rates of anxiety and depression. The average British teenager spends four hours and twenty-two minutes on their phone each day. That is not a statistic. That is nearly a third of their waking life surrendered to an algorithm designed not to inform or educate but to addict.

I am not a Luddite calling for the smashing of machines. Technology has brought extraordinary benefits — access to information, connection across distances, creative tools that previous generations could not have imagined. But there is a difference between using technology and being used by it, and our children are overwhelmingly on the wrong side of that distinction. We owe them boundaries, not because we fear progress, but because we understand that a childhood consumed by screens is a childhood only partially lived.`

const EXAM_03_SOURCE_A_REF = 'Rachel Okonkwo, "Screen-Bound: The Silent Crisis in Our Homes", The Telegraph, 2024'

const EXAM_03_SOURCE_B = `There is abroad in the land a terror of the machine which I confess I find both curious and instructive. In drawing rooms and lecture halls alike, one hears the same anxious refrain: that the telegraph, the steam press, and the railway are destroying the habits of reflection and contemplation upon which civilised life depends. We are told that the young read nothing but newspapers, that they demand sensation rather than instruction, and that the velocity of modern communication has produced a generation incapable of sustained thought.

I have some sympathy with these complaints, for I too have observed that the young man of today appears to exist in a state of perpetual agitation, forever rushing from one engagement to the next, absorbing information in fragments rather than wholes. The railway, which compresses a journey of days into a matter of hours, has taught him to expect that all things should be accomplished with similar speed — including those things, such as learning and moral development, which by their nature require patience and time.

And yet I cannot join the chorus of despair. Every age believes itself uniquely threatened by its own inventions. The printing press was condemned as an instrument of chaos. The novel was denounced as a corruptor of youth. If we are to judge the telegraph and the railway, let us do so honestly: they have expanded the boundaries of human knowledge and connection, and if they have also introduced new temptations and distractions, that is the price of progress, and it is a price worth paying.`

const EXAM_03_SOURCE_B_REF = 'From a lecture by Thomas Huxley, "On the Progress of Science", 1871'

// Exam 04: Gender Equality
const EXAM_04_SOURCE_A = `When my daughter told me she wanted to be an engineer, her primary school teacher smiled indulgently and suggested she might also like to consider teaching or nursing. My daughter was six years old. She had not yet learned that society had opinions about which ambitions were appropriate for her, but she was about to. That moment — that gentle, well-meaning, devastating redirection — encapsulates everything that is still wrong with gender equality in Britain.

We like to congratulate ourselves on how far we have come. Women can vote, own property, pursue careers, and run for office. These are genuine achievements, won through generations of struggle. But equality in law is not equality in practice. The gender pay gap in the UK remains at 14.3 per cent. Women hold only eight per cent of FTSE 100 CEO positions. Two women a week are killed by a current or former partner. These statistics do not describe a society that has achieved equality. They describe a society that has achieved the comfortable illusion of equality.

The most insidious form of inequality is the one that operates through expectation rather than prohibition. No law prevents my daughter from becoming an engineer. But a thousand small signals — the gendered toys, the classroom assumptions, the media representations, the well-meaning teacher suggesting nursing — combine to create an invisible architecture of limitation that is all the more powerful for being unacknowledged.`

const EXAM_04_SOURCE_A_REF = 'Sophie Brennan, "The Glass Ceiling Starts at Six", The Guardian, 2023'

const EXAM_04_SOURCE_B = `I have been asked to set down my views upon the present condition of women, and I do so with the frank acknowledgement that I am sensible of the difficulty of the subject. There are those who maintain that woman's sphere is the domestic one, and that any attempt to enlarge it is an offence against nature and against God. I was once of this opinion myself. I am so no longer.

I have this year visited the factory districts of Lancashire, where I have seen women labouring twelve hours daily at the loom, their children left in the care of neighbours or, too often, left in no care at all. I have visited the governess institutions, where educated women of good family work for salaries that would shame a common labourer, their learning valued only insofar as it may be transmitted to the children of others. And I have spoken with women of every station who have confided to me, with a candour born of desperation, that they feel themselves to be prisoners — not of any man, but of a system that has determined their worth and their function before they drew their first breath.

The argument against the education and emancipation of women rests upon the assumption that their present condition reflects their natural capacity. This is a fallacy of the most elementary kind. One might as well argue that a bird kept always in a cage cannot fly, and conclude from this that flight is not in its nature.`

const EXAM_04_SOURCE_B_REF = 'Harriet Martineau, "On the Education of Women", Edinburgh Review, 1859'

// Exam 05: Urban Development
const EXAM_05_SOURCE_A = `They are building a shopping centre where the community garden used to be. I know this because I watched the diggers arrive on a Monday morning in March, their caterpillar tracks churning the soil that, just days earlier, had held the first crocuses of spring. Margaret Chen, who is seventy-eight and has tended a plot there for thirty-one years, stood at the fence with her hands in her pockets and said nothing. There was nothing to say. The decision had been made in a boardroom, by people who had never set foot in the garden, and no amount of petitions or protests had altered it.

This is how modern urban development works. A piece of land is identified, its commercial value calculated, and its human value — the memories, the relationships, the community it sustained — is dismissed as sentimental. The shopping centre will create three hundred jobs, we are told, mostly minimum-wage, mostly zero-hours, mostly performed by people who would rather have kept their allotments. It will generate business rates for the council. It will attract shoppers from surrounding areas. These are the metrics that matter, apparently. The fact that Margaret Chen's mental health has measurably deteriorated since losing her garden does not appear on any spreadsheet.

We have become a society that knows the price of everything and the value of nothing, to borrow Wilde's devastating formulation. Our cities are being redesigned not for the people who live in them but for the money that flows through them, and the consequence is a landscape of identikit retail parks, luxury apartment blocks, and artisan coffee shops where communities used to be.`

const EXAM_05_SOURCE_A_REF = 'Tom Ashworth, "Concrete Over Community", The Observer, 2024'

const EXAM_05_SOURCE_B = `I walked yesterday through the district of St Giles, where a great work of demolition is presently under way. Whole streets of houses — ancient, cramped, and admittedly insanitary — are being torn down to make way for a new thoroughfare that will, we are promised, bring light and air and commerce to a quarter of London that has long been a byword for poverty and disease. The improvement, we are assured, will be magnificent.

And yet I find myself uneasy. The houses that are being destroyed are wretched, certainly — dark, damp, and overcrowded, with drainage that offends both nose and reason. But they are also homes. I spoke with a woman who has lived in the same two rooms for twenty-seven years, who raised five children within those crumbling walls, and who now stands in the street with her possessions in a handcart, uncertain where she will sleep tonight. The new thoroughfare will not accommodate her. The handsome shops and offices that will rise upon the rubble of her home are not designed for her custom. She is, in the language of progress, an obstacle to improvement.

This is the paradox of our age: we demolish in the name of civilisation the very communities upon which civilisation depends. The poor are dispersed, scattered to the outlying parishes, and the bonds of neighbourhood — of mutual aid, of shared hardship, of knowing one's neighbours by name — are severed as cleanly as the surveyor's line cuts through the map.`

const EXAM_05_SOURCE_B_REF = 'Charles Dickens, "On the Demolition of St Giles", Household Words, 1856'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────────

export const aqaP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01 — Poverty & Homelessness
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-01',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-01-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_01_SOURCE_A_REF}\nSource B: ${EXAM_01_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-01-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer volunteered with a street outreach team.\nB) The writer spent a month in Manchester.\nC) Figures were huddled in doorways.\nD) Sleeping bags offered strong protection.\nE) The outreach work took place in January.\nF) The writer\'s understanding of homelessness changed.\nG) The writer blames poor personal choices for homelessness.\nH) The wind was described as biting.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, F, H — A: "I spent a week volunteering with a street outreach team." C: "figures huddled in doorways." F: "fundamentally changed my understanding of homelessness." H: "biting wind." B is false (a week, not a month). D is false (they offered "little protection"). E is true — "Last January." G is false (the writer says it is NOT about poor choices).',
              'Grade 6-7': 'A, C, F, H — Note: E is also arguably true ("Last January"), meaning careful selection is needed. B is false — it was a week. D is contradicted by "little protection." G is directly refuted by the text. The four clearest TRUE statements are A, C, F, and H.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-01-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the conditions experienced by homeless people in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources describe terrible conditions for homeless people. In Source A, people are sleeping in doorways with sleeping bags that give "little protection," while in Source B, men sleep in a workhouse on "bare wooden boards, without pillow or blanket." Both sources show overcrowding — Source B says forty men are in a space for twenty. Both writers highlight the silence of the homeless: David in Source A says he is "invisible" and Source B says the men "do not complain, for complaint achieves nothing." A difference is that Source A describes people sleeping outdoors with nothing, while Source B describes a shelter — but the shelter is still awful.',
              'Grade 6-7': 'Both writers document the material deprivation of homeless people, though their settings differ — Sharma describes the exposed vulnerability of rough sleeping ("doorways," "sleeping bags" offering "little protection"), while Greenwood depicts the institutional squalor of the workhouse casual ward, with forty men in a space for twenty sleeping on "bare wooden boards." Both sources emphasise the loss of dignity: David in Source A, a "former electrician," has been reduced to invisibility, while Greenwood\'s subjects include "former clerks, seamstresses, labourers" — the specificity of former occupations in both texts functioning to underscore how far these people have fallen. A crucial similarity is both writers\' focus on silence and invisibility. David says he became "invisible"; Greenwood\'s men "do not complain" and "do not protest." However, the causes of silence differ: in Source A it is society\'s refusal to see; in Source B it is the exhaustion of men who know "protest requires an audience that cares to listen." Both writers infer that the homeless are failed by systems — Sharma explicitly ("systems failing"), Greenwood through the damning phrase "society regards their suffering as an inconvenience."',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and/or differences in conditions',
              'Uses evidence from both texts to support points',
              'Synthesises information rather than alternating between texts',
              'Infers beyond surface-level details',
              'Top band: perceptive synthesis with judicious references',
            ],
          },
          {
            id: 'aqa-p2-01-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to convey the urgency of the homelessness crisis?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_01_SOURCE_A}`,
            extractSource: EXAM_01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses strong language to show how serious homelessness is. The phrase "biting wind" uses personification to make the cold seem aggressive. Statistics like "300,000 people" and "one billion pounds" shock the reader with the scale of the problem. The direct quote from David — "One day you\'re paying taxes, the next you\'re invisible" — makes the problem personal and real. The writer uses repetition of "invisible" to emphasise how society ignores homeless people. At the end, the sentence "We are actively manufacturing it" is powerful because "manufacturing" suggests the crisis is being produced deliberately.',
              'Grade 6-7': 'Sharma deploys a multi-layered rhetorical strategy that moves from sensory immediacy to statistical authority to moral accusation. The opening imperative — "Walk through any British city centre after midnight" — positions the reader as witness, making the crisis inescapable. The phrase "little protection against the biting wind" combines understatement ("little") with personification ("biting") to create a visceral sense of vulnerability. The anecdote of David is rhetorically precise: his former occupation as an "electrician" establishes respectability, while the temporal compression "lost his job... fallen behind on rent... been evicted within six weeks" uses the tricolon to dramatise the speed of descent. David\'s word "invisible" is strategically italicised through repetition — "Not forgotten. Invisible" — the sentence fragments forcing a distinction that redefines the problem from neglect to erasure. The final paragraph\'s statistics ("300,000," "one billion pounds," "twenty-three per cent") accumulate as an indictment, but the most devastating technique is the concluding antithesis: "managing a crisis rather than preventing one" and "We are not merely failing to solve this problem. We are actively manufacturing it." The verb "manufacturing" transforms government policy from passive neglect to deliberate production, converting a social tragedy into a political crime.',
              'Grade 8-9': 'Sharma constructs urgency through a rhetorical architecture that systematically closes every exit the reader might use to avoid engagement. The opening second-person imperative — "Walk through any British city centre after midnight and you will see them" — is not an invitation but a confrontation: the future tense "you will see" presents the crisis as an inevitability the reader must face. The pronoun "them" is deliberately dehumanising, before the subsequent phrase "figures huddled in doorways" restores specificity — this oscillation between abstraction and detail is a technique Sharma uses throughout to prevent emotional distance. David\'s testimony operates as a rhetorical centrepiece: the antithetical structure "One day you\'re paying taxes, the next you\'re invisible" compresses a life\'s catastrophe into a single sentence, the second-person "you" generalising his experience into a universal vulnerability. The word "invisible" is then subjected to a forensic correction — "Not forgotten. Invisible" — where the sentence fragments perform the precision of a diagnosis. The distinction matters: to be forgotten implies prior knowledge; to be invisible is to have been erased from perception entirely. The final paragraph shifts to institutional language — "300,000 people," "one billion pounds," "twenty-three per cent" — but Sharma subverts the bureaucratic register through the concluding metaphor. "Manufacturing" imports the language of industry: homelessness is not a natural disaster but a product, assembled from policy decisions ("mental health services cut," "social housing waiting lists") as deliberately as any commodity. The participial progression from "managing" to "manufacturing" implies an economy of suffering — the crisis is sustained because it generates the very spending that justifies the system\'s existence.',
            },
            markScheme: [
              'Analyses the effects of the writer\'s language choices in detail',
              'Selects judicious quotations and embeds them within analysis',
              'Uses subject terminology accurately (e.g., imperative, tricolon, antithesis)',
              'Considers how language positions and manipulates the reader',
              'Explores layers of meaning in individual words and phrases',
              'Top band: perceptive, detailed, conceptualised analysis of language',
            ],
          },
          {
            id: 'aqa-p2-01-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on society\'s treatment of homeless people.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are critical of how society treats homeless people. Sharma uses modern statistics to prove the crisis is getting worse, while Greenwood relies on describing what he personally saw. Both use individual stories: Sharma quotes David, while Greenwood describes the men in the workhouse. Both suggest society is hypocritical — Sharma says we tell ourselves excuses, and Greenwood criticises "Christian charity" that doesn\'t help. However, Sharma directly blames the government, while Greenwood is more focused on the conditions themselves. Both writers make the reader feel guilty for ignoring the problem.',
              'Grade 6-7': 'Both Sharma and Greenwood share a conviction that homelessness reflects a moral failure of society, but they convey this through radically different rhetorical strategies shaped by their historical moments. Sharma employs the confrontational mode of modern investigative journalism: direct address ("Walk through any British city centre"), statistical evidence ("300,000 people"), and explicit political accusation ("We are actively manufacturing it"). Her rhetoric is aggressive, designed to strip away complacency. Greenwood, constrained by Victorian conventions of decorum, uses the seemingly objective mode of reportage — meticulous physical detail ("bare wooden boards," "a single gas lamp") — but the objectivity is strategic: the accumulation of observed horror is more devastating for being understated. Both writers challenge the assumption that the homeless are responsible for their condition. Sharma refutes "comfortable narratives" about "poor choices" and lists David\'s cascade of misfortunes; Greenwood states that among the workhouse residents he found "former clerks, seamstresses, labourers, and even a schoolmaster." The listing of former occupations in both texts serves the same function: to establish that homelessness is a destination, not a character trait. The most significant shared technique is their focus on silence and invisibility. David\'s "invisible" mirrors Greenwood\'s men who "do not complain, for complaint achieves nothing." Yet the tone differs: Sharma\'s is outraged ("We are actively manufacturing it"), while Greenwood\'s final line — "an inconvenience rather than an injustice" — achieves its power through bitter restraint, the balanced phrasing of "inconvenience/injustice" exposing society\'s moral distortion.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout the response',
              'Analyses methods used by both writers to convey their viewpoints',
              'Uses well-selected evidence from both texts',
              'Shows clear understanding of different historical contexts',
              'Sustains a comparative structure rather than writing about each source separately',
              'Top band: perceptive, detailed comparison with a sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-01-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-01-q5',
            questionNumber: 5,
            questionText: '"Homelessness is not a natural disaster — it is a political choice, and it is a choice we can reverse."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative article that: directly addresses the statement; uses some persuasive devices such as rhetorical questions and statistics; has a clear introduction, body, and conclusion; matches the register of a newspaper article; demonstrates generally accurate spelling and punctuation with some sentence variety.',
              'Grade 6-7': 'A compelling argument that: engages critically with the statement rather than simply agreeing or disagreeing; uses a range of persuasive techniques including counter-argument; deploys evidence and examples effectively (may draw on source material); sustains an appropriate register for a broadsheet audience; demonstrates consistent technical accuracy with ambitious vocabulary and varied sentence structures.',
              'Grade 8-9': 'An assured, sophisticated argument that: develops a nuanced and original perspective on the statement; crafts a distinctive authorial voice appropriate to a broadsheet readership; deploys rhetorical strategies with precision — anaphora, tricolon, antithesis, strategic concession; uses counter-argument to strengthen rather than undermine the central position; demonstrates extensive vocabulary, varied syntax, and technical virtuosity throughout; structures the argument for cumulative impact.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling, convincing communication matched to purpose and audience',
              'AO5: Sustained crafting of a structured, coherent argument',
              'AO6 Technical Accuracy (16 marks): Accurate and consistent sentence demarcation',
              'AO6: Wide range of punctuation used accurately for effect',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms used for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02 — Education Reform
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-02',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-02-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_02_SOURCE_A_REF}\nSource B: ${EXAM_02_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-02-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) Five-year-olds enter school with curiosity.\nB) Sixteen-year-olds leave school feeling confident.\nC) The writer believes the education system is broken.\nD) Children receive a string of letters on results day.\nE) Five-year-olds are described as bright-eyed.\nF) Sixteen-year-olds leave school feeling anxious.\nG) Something goes wrong between starting and leaving school.\nH) The writer thinks the system works well for most students.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "a fresh cohort of five-year-olds enters school bright-eyed and bursting with curiosity." C: "Our education system is broken." E: "bright-eyed." F: "drained, anxious." B is false (they leave "drained" and "anxious"). D is false (it says "numbers" not "letters"). G is also true. H is false.',
              'Grade 6-7': 'A, C, E, F (or A, C, F, G) — Multiple combinations are valid. B is clearly false, D is false ("numbers" not "letters"), H is directly contradicted. The safest four are A, C, E, F.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-02-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the writers\' criticisms of the education systems they describe.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers criticise education for focusing on the wrong things. Source A says schools are "obsessed with measurement" and testing, while Source B criticises learning "by rote" and repeating without understanding. Both writers defend teachers — Source A says they are "dedicated professionals" and Source B says schoolmasters are "rational men responding to irrational incentives." Both think the system kills creativity. A difference is that Source A mentions mental health, saying students develop "anxiety disorders," while Source B focuses more on the failure to develop thinking skills.',
              'Grade 6-7': 'Both writers identify a fundamental misalignment between what education systems measure and what genuine learning requires, though their specific criticisms reflect different eras. Hargreaves attacks the modern testing regime — children tested "at seven, at eleven, at sixteen, and at eighteen" — arguing it produces anxiety rather than understanding, while Arnold criticises Victorian rote learning where pupils "repeat without understanding." The core complaint is identical across 150 years: both systems reward the reproduction of information over the development of thought. Both writers explicitly absolve teachers: Hargreaves calls them "dedicated professionals" underpaid and overworked, while Arnold describes schoolmasters as "rational men responding to irrational incentives." This shared defence implies that both writers locate the fault in systemic structures rather than individual failings. However, they differ in proposed solutions: Hargreaves points to Finland as an international model, using comparative evidence, while Arnold uses the metaphor of the mind as "a fire to be kindled" — a more philosophical approach that appeals to an ideal rather than a practical alternative. The emotional register also differs: Hargreaves conveys anger and urgency ("catastrophically wrong"), while Arnold maintains a tone of measured disappointment.',
            },
            markScheme: [
              'Must reference both sources throughout',
              'Identifies clear similarities and differences in criticisms',
              'Uses evidence from both texts',
              'Synthesises rather than alternating between sources',
              'Infers beyond surface-level details',
              'Top band: perceptive inferences with judicious textual support',
            ],
          },
          {
            id: 'aqa-p2-02-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to argue that the education system needs fundamental reform?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_02_SOURCE_A}`,
            extractSource: EXAM_02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer starts with the blunt statement "Our education system is broken" which immediately tells the reader there is a serious problem. The word "broken" suggests something that needs fixing. The contrast between five-year-olds who are "bright-eyed and bursting with curiosity" and sixteen-year-olds who are "drained, anxious" shows how school damages children. The word "drained" is powerful because it suggests all their energy has been taken away. The writer uses the metaphor of testing as an obsession to criticise the system. The reference to Finland is used to show that there is a better way of doing things.',
              'Grade 6-7': 'Hargreaves structures his argument through a devastating before-and-after contrast that frames the education system as actively destructive. The opening paragraph\'s juxtaposition of "bright-eyed and bursting with curiosity" against "drained, anxious, and convinced that their worth... can be reduced to a string of numbers" uses the semantic field of energy depletion — "drained" implies the system has extracted something vital. The alliterative "bright-eyed and bursting" creates a sense of abundant potential, making its loss more keenly felt. The phrase "something goes catastrophically wrong" is strategically vague — the adverb "catastrophically" is emotionally charged, but "something" withholds the specific cause, creating a mystery the article then solves. The second paragraph deploys strategic concession: "The problem is not our teachers" preemptively defuses the most common objection before redirecting blame to "a system that has become so obsessed with measurement." The metaphor of obsession pathologises the system — it is not merely mistaken but compulsive. The listing of test points — "at seven, at eleven, at sixteen, and at eighteen" — creates a claustrophobic rhythm of relentless assessment. The final paragraph uses the example of Finland as a rhetorical trump card, the three short sentences — "Its teachers are trusted professionals... Its students are among the happiest in Europe. There is another way" — building to a conclusion that is both hopeful and accusatory: if another way exists, the failure to adopt it is a choice.',
              'Grade 8-9': 'Hargreaves constructs his argument as a diagnostic narrative: the education system is presented not merely as flawed but as pathological, a system whose dysfunction has become its defining characteristic. The opening sentence — "Our education system is broken — and we all know it" — performs two rhetorical operations simultaneously. The dash creates a pause that mimics reluctant admission, while "we all know it" transforms a controversial claim into received wisdom, recruiting the reader\'s complicity before the argument has even begun. The first paragraph\'s temporal structure — "every autumn" to "every summer" — frames education as a cyclical process of destruction, the seasonal language imbuing it with the inevitability of natural law. The verb "reduced" in "their worth... can be reduced to a string of numbers" is precisely chosen: it means both "diminished" and "converted," implying that the examination system performs an act of violent simplification upon human complexity. The second paragraph\'s parenthetical — "who work, on average, fifty-four hours per week for salaries that would make a city banker laugh" — is rhetorically sophisticated: the statistical precision of "fifty-four hours" lends authority, while "make a city banker laugh" introduces class politics through the image of contemptuous amusement, positioning teachers as exploited by the same economic logic that drives the testing regime. The metaphor of measurement obsession is extended through the listing "rank them, grade them, sort them into sets" — four verbs that progressively dehumanise, moving from numerical ("rank") to categorical ("sort") to institutional ("sets"), each step further from the individual child. The final paragraph\'s invocation of Finland operates as an argumentum ad exemplum, but its real power lies in the three terminal sentences whose parallel structure ("Its teachers... Its students... There is") creates a litany of contrast that makes the British system seem not merely inferior but wilfully perverse.',
            },
            markScheme: [
              'Analyses the effects of specific language choices in detail',
              'Selects judicious quotations and embeds them in analysis',
              'Uses subject terminology accurately (metaphor, antithesis, tricolon, etc.)',
              'Considers how language positions and persuades the reader',
              'Explores multiple layers of meaning',
              'Top band: perceptive, detailed, conceptualised analysis of language',
            ],
          },
          {
            id: 'aqa-p2-02-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the failings of the education system.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers criticise the education system for failing students. Hargreaves is angry and uses strong language like "broken" and "catastrophically wrong," while Arnold is calmer and uses more formal language. Both defend teachers — Hargreaves says they are "dedicated" and Arnold says they are "rational men." Both think schools focus on the wrong things: Hargreaves criticises too many tests, Arnold criticises rote learning. Arnold uses the metaphor "a fire to be kindled" to suggest education should inspire, while Hargreaves uses statistics and the example of Finland. Both agree the system needs to change fundamentally.',
              'Grade 6-7': 'Both Hargreaves and Arnold share a fundamental critique — that the education systems of their respective eras prioritise quantifiable performance over genuine intellectual development — but their methods of argument reflect their different contexts and rhetorical traditions. Hargreaves employs the polemical register of modern journalism: the declarative opening "Our education system is broken" is confrontational, immediate, designed for an audience accustomed to directness. Arnold, writing within Victorian conventions, proceeds more cautiously: "I fear" and "I have observed" signal the measured authority of the inspector rather than the campaigner. Yet both writers achieve the same rhetorical goal of redirecting blame from individuals to systems. Hargreaves\'s defence of teachers as "dedicated professionals" who are essentially bureaucratic functionaries ("data-entry clerks") mirrors Arnold\'s exoneration of schoolmasters as "rational men responding to irrational incentives." The structural parallel is striking: both identify a perverse logic in which good people are compelled by bad systems to do harmful work. Their solutions, however, diverge interestingly. Hargreaves offers Finland as empirical proof that alternatives exist — a modern, evidence-based argument. Arnold, more philosophically, reaches for metaphor: the mind is "not a vessel to be filled but a fire to be kindled," an image whose power lies in its transformation of education from a mechanical to an organic process. Where Hargreaves says "there is another way," Arnold shows us what that way looks like through figurative language — a difference that reflects not just personal style but the different persuasive conventions of their eras.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout the response',
              'Analyses methods used by both writers',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context shapes perspective and method',
              'Sustains a comparative framework',
              'Top band: perceptive, detailed comparison with a sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-02-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-02-q5',
            questionNumber: 5,
            questionText: '"Examinations are the enemy of real learning. Schools should assess students through coursework, projects, and portfolios instead."\n\nWrite a speech to be delivered at a schools conference in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech that: addresses the audience directly; uses some persuasive devices (rhetorical questions, personal anecdotes); has a logical structure; matches the register of a speech (direct address, spoken markers); demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted speech that: engages with both sides of the argument; uses rhetorical techniques appropriate to the spoken form — repetition, tricolon, direct audience engagement; deploys evidence and personal experience effectively; maintains a consistent spoken register; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'An assured, persuasive speech that: develops a nuanced argument that acknowledges complexity; crafts a distinctive, authoritative voice; deploys sophisticated rhetorical strategies — anaphora, antithesis, strategic pauses, humour; builds to a powerful conclusion; demonstrates extensive vocabulary, varied syntax, and faultless technical accuracy throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling communication matched to the speech form',
              'AO5: Structured argument with effective use of discourse markers',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03 — Technology Impact
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-03',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-03-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_03_SOURCE_A_REF}\nSource B: ${EXAM_03_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-03-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer\'s daughter is fourteen years old.\nB) The daughter was reading a magazine.\nC) She managed three pages before picking up her phone.\nD) She scrolled through notifications for five minutes.\nE) She re-read a paragraph she had already finished.\nF) The writer blames laziness for this behaviour.\nG) The writer attributes this behaviour to what technology has done.\nH) The writer thinks we should talk about this honestly.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, G — A: "my fourteen-year-old daughter." C: "She managed three pages before reaching for her phone." E: "only to re-read the same paragraph she had already finished." G: "This is what technology has done to the adolescent brain." B is false (a novel). D is false (ten minutes). F is explicitly denied ("This is not laziness"). H is also true.',
              'Grade 6-7': 'A, C, E, G (or A, C, G, H) — Multiple valid combinations exist. B is false (novel, not magazine). D is false (ten, not five minutes). F is directly contradicted. The clearest four are A, C, E, G.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-03-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the writers\' concerns about technology\'s effect on young people.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers worry that technology damages young people\'s ability to concentrate. Source A says teenagers have "reduced attention spans" because of screens, while Source B says the railway has made young people expect everything to be fast, including things like "learning and moral development" that need patience. Both recognise that technology has benefits — Source A mentions "access to information" and Source B says the telegraph and railway "expanded the boundaries of human knowledge." A difference is that Source A is more alarmed, calling it a "crisis," while Source B is more balanced, saying the costs are "a price worth paying."',
              'Grade 6-7': 'Both Okonkwo and Huxley identify the same fundamental concern — that new technologies are restructuring young minds in ways that diminish sustained attention — though they respond with markedly different levels of alarm. Okonkwo\'s daughter, unable to read three pages without reaching for her phone, mirrors Huxley\'s young man who "absorbs information in fragments rather than wholes"; the temporal gap of 150 years has not altered the core complaint. Both writers note that speed is the problem: Okonkwo cites "four hours and twenty-two minutes" of daily screen time; Huxley describes the railway teaching young people "to expect that all things should be accomplished with similar speed." Both also offer concessions to progress — Okonkwo is "not a Luddite," Huxley "cannot join the chorus of despair" — but their conclusions differ sharply. Okonkwo demands "boundaries," framing the issue as a failure of adult responsibility, while Huxley takes a longer historical view, noting that "every age believes itself uniquely threatened by its own inventions," suggesting that present anxieties may be as overblown as previous ones about the printing press and the novel.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and differences in concerns',
              'Uses evidence from both texts',
              'Synthesises rather than alternating',
              'Infers beyond surface details',
              'Top band: perceptive synthesis with judicious textual references',
            ],
          },
          {
            id: 'aqa-p2-03-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to express her concerns about the impact of technology on young people?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_03_SOURCE_A}`,
            extractSource: EXAM_03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses a personal anecdote about her daughter to make the issue feel real and relatable. The phrase "reaching for her phone" suggests an automatic, almost addictive action. The statistics about screen time — "four hours and twenty-two minutes" — shock the reader with how much time is wasted. The metaphor of an "algorithm designed not to inform or educate but to addict" suggests technology companies are deliberately harming young people. The phrase "being used by it" reverses the normal idea of using technology, making young people sound like victims.',
              'Grade 6-7': 'Okonkwo constructs her argument through an escalation from the domestic to the societal, anchored by the opening anecdote that transforms private concern into public crisis. The scene of her daughter\'s failed attempt to read is narrated with clinical precision — "three pages," "ten minutes," "the same paragraph" — the specificity creating an almost experimental quality, as though the daughter is an unwitting subject in a study of attention collapse. The phrase "reaching for her phone" is significant: "reaching" connotes involuntary compulsion, an instinct rather than a decision. The second paragraph shifts to statistical authority, but the most powerful technique is the redefinition of a number: "That is not a statistic. That is nearly a third of their waking life surrendered to an algorithm." The verb "surrendered" militarises the image — this is territory lost, autonomy ceded — while "algorithm" reduces the opponent to cold mechanics. The tripartite purpose of the algorithm — "not to inform or educate but to addict" — uses the rule of three with a devastating twist: two positive verbs negated, followed by one that reframes technology as a drug. The final paragraph\'s central antithesis — "using technology and being used by it" — is the article\'s rhetorical centrepiece, a chiastic reversal that exposes the power imbalance. The concluding phrase "a childhood only partially lived" is deliberately understated, the adverb "partially" more haunting than a more dramatic formulation because it concedes that something is experienced while insisting that something essential is missing.',
              'Grade 8-9': 'Okonkwo\'s linguistic strategy operates through a systematic dismantling of the reader\'s defences, beginning with the deliberately mundane and escalating to the existential. The opening anecdote is structured as a micro-narrative of cognitive failure: "managed three pages" (the verb "managed" implies struggle against resistance), "reaching for her phone" (the present participle suggesting habitual compulsion), "re-read the same paragraph" (the prefix "re-" encoding futility). The sentence "This is not laziness" performs a pre-emptive counter-argument, its blunt declarative closing down the most comfortable interpretation before offering the more disturbing one: "This is what technology has done to the adolescent brain." The shift from "my fourteen-year-old daughter" to "the adolescent brain" is itself significant — the definite article and scientific noun depersonalise, transforming a parent\'s worry into a neurological diagnosis. The second paragraph\'s deployment of the Oxford study is rhetorically embedded: the percentages (70%, 62%) are devastating, but the real force lies in "the paradox is stark" — a metacommentary that instructs the reader how to process the information, converting statistics into philosophical contradiction. The phrase "surrendered to an algorithm designed not to inform or educate but to addict" layers multiple techniques: the passive voice of "surrendered" removes young people\'s agency; the tricolon negates two Enlightenment values before introducing a medical-criminal verb. The final paragraph\'s antithesis — "using technology and being used by it" — is a chiasmus that performs the reversal it describes, the subject becoming the object. The closing image, "a childhood only partially lived," achieves its power through calculated understatement: "partially" is more devastating than "not at all" because it concedes that something exists while insisting it is insufficient — the linguistic equivalent of a half-empty room.',
            },
            markScheme: [
              'Analyses the effects of the writer\'s language choices in detail',
              'Selects judicious quotations embedded within analysis',
              'Uses subject terminology accurately',
              'Considers how language positions and persuades the reader',
              'Explores layers of meaning in individual words and phrases',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-03-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the impact of technology on young people.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are concerned about technology\'s effect on young people, but they reach different conclusions. Okonkwo is very worried and calls it a "crisis," while Huxley is calmer and thinks the benefits outweigh the costs. Both recognise technology has good sides — Okonkwo mentions "access to information" and Huxley says technology has "expanded the boundaries of human knowledge." Both describe young people being unable to concentrate. Okonkwo uses modern statistics to support her argument, while Huxley uses historical examples about the printing press and the novel to show that people always panic about new technology. Okonkwo demands action ("we owe them boundaries") while Huxley suggests patience.',
              'Grade 6-7': 'Okonkwo and Huxley share the same starting observation — that new technologies diminish young people\'s capacity for sustained attention — but arrive at fundamentally opposed conclusions, and their rhetorical methods reflect this divergence. Okonkwo employs the language of crisis: "reduced attention spans," "anxiety and depression," "addict." Her rhetoric is urgent, parental, accusatory. Huxley, by contrast, adopts the measured tone of the historian: "Every age believes itself uniquely threatened by its own inventions" places the current anxiety within a pattern of recurring panic, deflating its urgency. Both writers use concession strategically, but to opposite ends. Okonkwo concedes benefits ("access to information, connection across distances") only to heighten the contrast with costs — the concession is rhetorical setup for "But there is a difference between using technology and being used by it." Huxley concedes the harms ("I have some sympathy") but uses this concession to position himself as reasonable before delivering his tolerant conclusion — the costs are "a price worth paying." The most telling contrast is in their use of evidence. Okonkwo deploys a personal anecdote and statistical data, creating an argument that is both emotionally intimate and empirically grounded. Huxley uses historical analogy — the printing press, the novel — an argument that privileges pattern over data. This methodological difference reflects a deeper philosophical divide: Okonkwo sees the present crisis as unprecedented in degree if not in kind; Huxley sees it as merely the latest iteration of an eternal cycle. Neither view is definitively more persuasive, but their juxtaposition illuminates the challenge of assessing technology: are we facing something genuinely new, or simply the newest version of something very old?',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers to convey their views',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how historical context shapes perspective',
              'Sustains a comparative structure',
              'Top band: perceptive, detailed comparison with sustained critical engagement',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-03-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-03-q5',
            questionNumber: 5,
            questionText: '"Smartphones should be banned in schools. They are destroying young people\'s ability to learn, to concentrate, and to connect with each other."\n\nWrite a letter to the Secretary of State for Education in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear formal letter that: addresses the recipient appropriately; uses some persuasive devices; presents a logical argument with examples; matches the formal register of a letter to a government minister; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A well-structured formal letter that: engages with the complexity of the issue; deploys a range of persuasive techniques including counter-argument; uses evidence effectively; sustains an appropriately formal and respectful register throughout; demonstrates consistent technical accuracy with varied sentence forms.',
              'Grade 8-9': 'A sophisticated formal letter that: develops a nuanced position that goes beyond simple agreement or disagreement; uses the conventions of formal correspondence to powerful rhetorical effect; deploys precisely chosen evidence and examples; crafts a distinctive, authoritative voice; demonstrates faultless technical accuracy with ambitious vocabulary and syntactic variety.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling communication matched to the letter form and audience',
              'AO5: Coherent argument with effective structural choices',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04 — Gender Equality
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-04',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-04-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_04_SOURCE_A_REF}\nSource B: ${EXAM_04_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-04-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer\'s daughter wanted to be an engineer.\nB) The teacher was a man.\nC) The teacher suggested nursing as an alternative.\nD) The daughter was seven years old.\nE) The teacher smiled indulgently.\nF) The writer describes the redirection as devastating.\nG) Society has opinions about appropriate ambitions.\nH) The daughter had already learned about gender expectations.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "my daughter told me she wanted to be an engineer." C: "suggested she might also like to consider teaching or nursing." E: "smiled indulgently." F: "gentle, well-meaning, devastating redirection." B is not stated (no gender given for the teacher). D is false (she was six). G is true but H is false ("She had not yet learned").',
              'Grade 6-7': 'A, C, E, F (or A, C, E, G) — D is clearly false (six, not seven). H is directly contradicted. B cannot be confirmed from the text. The strongest four are A, C, E, F.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-04-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the writers present the barriers women face.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers describe barriers that limit women\'s lives. Source A describes invisible barriers like "gendered toys" and "classroom assumptions" that steer girls away from certain careers, while Source B describes more direct barriers — women working twelve-hour days in factories or being paid poorly as governesses. Both writers suggest that society decides what women can do before they have a chance to choose. Source A says a "teacher suggesting nursing" redirects girls, while Source B says women\'s "worth and function" are decided "before they drew their first breath." A difference is that Source A focuses on subtle, invisible barriers, while Source B describes more obvious, physical limitations.',
              'Grade 6-7': 'Both Brennan and Martineau identify a system of pre-determined limitation operating upon women, but the nature of those barriers reflects their different historical contexts. Brennan describes what she calls an "invisible architecture of limitation" — subtle cultural signals (gendered toys, media representations, classroom assumptions) that operate through expectation rather than prohibition. Martineau documents more tangible barriers: women labouring "twelve hours daily" in factories, governesses paid salaries that "would shame a common labourer." Yet both writers identify the same underlying mechanism: society determining women\'s roles in advance. Brennan\'s daughter is redirected at six; Martineau\'s women have their "worth and function" decided "before they drew their first breath." Both also challenge the gap between rhetoric and reality. Brennan notes that legal equality has produced only "the comfortable illusion of equality"; Martineau dismantles the argument that women\'s condition reflects their "natural capacity" with the devastating analogy of the caged bird. A key difference is that Brennan\'s barriers are cultural and psychological, while Martineau\'s are also economic and legal — reflecting how the nature of inequality has shifted from overt to covert over 160 years.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and differences in barriers',
              'Uses evidence from both texts',
              'Synthesises rather than alternating',
              'Infers beyond surface-level details',
              'Top band: perceptive synthesis with judicious references',
            ],
          },
          {
            id: 'aqa-p2-04-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to challenge the idea that gender equality has been achieved?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_04_SOURCE_A}`,
            extractSource: EXAM_04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the personal story of her daughter to show that inequality starts very young. The phrase "smiled indulgently" suggests the teacher didn\'t take the daughter seriously. The list of achievements — "Women can vote, own property, pursue careers" — is then undercut by the statistics showing inequality still exists. The phrase "comfortable illusion of equality" is powerful because "illusion" means it isn\'t real. The metaphor "invisible architecture of limitation" suggests barriers that are built deliberately but cannot be seen. The listing of "gendered toys, the classroom assumptions, the media representations" shows how many different things limit women.',
              'Grade 6-7': 'Brennan constructs her argument through a rhetorical architecture of revelation — systematically stripping away the surface of equality to expose the structures beneath. The opening anecdote operates at multiple levels: "smiled indulgently" encodes the teacher\'s condescension in a single adverb — "indulgently" implies tolerance of a childish whim, reducing engineering to a phase to be grown out of. The tricolon of adjectives describing the redirection — "gentle, well-meaning, devastating" — performs a rhetorical ambush: the first two adjectives establish benign intent before the third detonates their complacency. The second paragraph uses the strategy of concession and demolition: "Women can vote, own property, pursue careers, and run for office" builds a catalogue of progress before "But equality in law is not equality in practice" introduces the devastating distinction. The statistics that follow — "14.3 per cent," "eight per cent," "Two women a week" — form a descending scale from financial to existential, the climax of "killed by a current or former partner" transforming the argument from economics to survival. The extended metaphor of "invisible architecture" in the final paragraph is the article\'s conceptual centrepiece: "architecture" implies deliberate design, not accidental inequality, while "invisible" explains why it persists unchallenged. The listing of contributing factors — "the gendered toys, the classroom assumptions, the media representations" — uses the definite article before each noun to present these as known, catalogued phenomena that society has simply chosen not to address.',
              'Grade 8-9': 'Brennan\'s linguistic strategy is one of controlled demolition: each paragraph removes a layer of the reader\'s assumption that equality has been achieved, until the structural foundations of inequality are exposed. The opening anecdote\'s power lies in its specificity and its misdirection. "Smiled indulgently" performs an entire ideology in two words: the adverb "indulgently" connotes parental tolerance of fantasy, encoding the assumption that a girl wanting to be an engineer is cute rather than serious. The three-part adjectival phrase "gentle, well-meaning, devastating" is syntactically calibrated — the comma before "devastating" creates a pause that mimics the moment of realisation, the rhythmic disruption forcing the reader to reassess the apparently innocuous scene. The second paragraph\'s opening — "We like to congratulate ourselves" — uses the inclusive first person to implicate the reader in collective self-delusion, before the verb "congratulate" is revealed as premature through the conjunction "But." The statistical sequence enacts a descent from economic inequality (14.3%) through professional exclusion (8%) to gendered violence ("Two women a week are killed"), the diminishing numbers paradoxically increasing the horror as the metric shifts from percentages to bodies. The final paragraph\'s extended metaphor of "invisible architecture of limitation" is the essay\'s conceptual keystone. "Architecture" implies intentionality — these barriers are designed, not accidental — while "invisible" explains their durability: what cannot be seen cannot be challenged. The concluding paradox — "all the more powerful for being unacknowledged" — identifies the mechanism by which inequality perpetuates itself: it is sustained not by active oppression but by the collective refusal to see the structures that produce it.',
            },
            markScheme: [
              'Analyses the effects of specific language choices in detail',
              'Selects and embeds judicious quotations',
              'Uses subject terminology accurately',
              'Considers how language challenges the reader\'s assumptions',
              'Explores multiple layers of meaning',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-04-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their perspectives on the position of women in society.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that women are unfairly limited by society. Brennan uses statistics like the "14.3 per cent" pay gap to prove inequality still exists, while Martineau uses descriptions of women she met, like factory workers and governesses. Both argue that society decides what women should do — Brennan talks about "invisible architecture" and Martineau says women\'s worth is decided "before they drew their first breath." Both challenge the idea that things are fine as they are. However, Martineau writes from a time when women had far fewer legal rights, while Brennan\'s argument is that legal equality hasn\'t led to real equality. Martineau uses the powerful analogy of a caged bird to argue that women\'s lack of achievement doesn\'t prove lack of ability.',
              'Grade 6-7': 'Brennan and Martineau, writing 164 years apart, share a conviction that women\'s inequality is systemic rather than natural, but their argumentative methods reflect their different audiences and rhetorical contexts. Brennan employs the modern arsenal of journalism: statistics (14.3%, 8%), personal anecdote (her daughter), and conceptual metaphor ("invisible architecture of limitation"). Her argument is confrontational — she directly challenges the reader\'s complacency. Martineau, aware of a more resistant audience, adopts a strategy of apparent modesty: "I have been asked to set down my views" and "I was once of this opinion myself" establish her as reasonable and open to persuasion, disarming hostility before delivering her critique. Both writers use the strategy of humanising abstraction through individual examples. Brennan\'s daughter represents the subtle redirection of female ambition; Martineau\'s factory women and governesses embody the economic consequences of limited opportunity. Both also identify a logical fallacy at the heart of the argument for women\'s inferiority: Brennan notes that "No law prevents my daughter from becoming an engineer" while invisible barriers do; Martineau demolishes the argument from nature with the caged bird analogy — "One might as well argue that a bird kept always in a cage cannot fly, and conclude from this that flight is not in its nature." This is perhaps the more powerful technique: where Brennan names the logical error, Martineau dramatises it, creating an image that makes the fallacy immediately, viscerally apparent. The comparison reveals how the nature of the argument for equality has shifted: Martineau must argue for women\'s basic capacity; Brennan must argue that capacity alone is insufficient without structural change.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods used by both writers',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context influences method and argument',
              'Sustains a comparative structure',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-04-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-04-q5',
            questionNumber: 5,
            questionText: '"Gender equality is not just a women\'s issue — it is a human issue, and it requires action from everyone."\n\nWrite an essay in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear essay that: addresses the statement directly; uses some persuasive devices and examples; has an introduction, developed paragraphs, and a conclusion; maintains a formal register appropriate to an essay; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-structured essay that: develops a thoughtful argument engaging with the complexity of the statement; uses a range of evidence and examples; employs counter-argument effectively; maintains a consistent academic register; demonstrates strong technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9': 'A sophisticated essay that: constructs a nuanced, original argument; demonstrates intellectual rigour and independence of thought; uses precisely selected evidence and examples; creates a distinctive, authoritative voice; deploys varied rhetorical strategies with control; shows faultless technical accuracy throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling communication matched to the essay form',
              'AO5: Coherent, sustained argument with effective structural choices',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used accurately for effect',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05 — Urban Development
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-05',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-05-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_05_SOURCE_A_REF}\nSource B: ${EXAM_05_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-05-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) A shopping centre is being built where a garden was.\nB) The diggers arrived on a Tuesday.\nC) Margaret Chen is seventy-eight years old.\nD) Margaret has tended a plot for thirty-one years.\nE) The first daffodils of spring had appeared.\nF) Margaret stood at the fence.\nG) The decision was made by local residents.\nH) Petitions had been unsuccessful.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, D, F — A: "They are building a shopping centre where the community garden used to be." C: "who is seventy-eight." D: "has tended a plot there for thirty-one years." F: "stood at the fence." B is false (Monday). E is false (crocuses, not daffodils). G is false (the decision was made "in a boardroom"). H is also true.',
              'Grade 6-7': 'A, C, D, F (or A, C, D, H) — B is clearly false (Monday, not Tuesday). E is false (crocuses, not daffodils). G is directly contradicted. Multiple valid combinations exist; the safest four are A, C, D, F.',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-05-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the writers present the impact of development on communities.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources describe communities being destroyed by development. In Source A, a community garden is replaced by a shopping centre, and in Source B, houses are demolished for a new road. Both writers use individual stories: Source A describes Margaret Chen, who has gardened for thirty-one years, and Source B describes a woman who lived in the same rooms for twenty-seven years. Both show that the new developments are not for the people who lived there — Source A says the jobs will be "minimum-wage" and "zero-hours," while Source B says "the handsome shops and offices" are "not designed for her custom." A difference is that Source B acknowledges the old houses were "insanitary," while Source A presents the garden as entirely positive.',
              'Grade 6-7': 'Both Ashworth and Dickens present urban development as an act of violence against community, though their contexts differ. Ashworth describes the replacement of a community garden with a shopping centre — a transformation from organic, human space to commercial infrastructure — while Dickens documents the demolition of residential streets for a new thoroughfare. Both writers centre their arguments on individual women who embody the human cost: Margaret Chen, seventy-eight, who "stood at the fence with her hands in her pockets and said nothing," and Dickens\'s woman of twenty-seven years\' residence who "stands in the street with her possessions in a handcart." Both images dramatise powerlessness through physical posture. Both writers also identify the same economic logic: development serves capital, not community. Ashworth\'s shopping centre creates "minimum-wage, mostly zero-hours" jobs; Dickens\'s thoroughfare will bring "handsome shops and offices" that exclude the displaced residents. However, Dickens offers a more ambivalent picture: the demolished houses were "wretched" and "insanitary," and his concession that demolition has a sanitary rationale complicates his argument in ways that Ashworth\'s more straightforward narrative does not. Both writers ultimately frame the issue as one of values: Ashworth quotes Wilde on knowing "the price of everything and the value of nothing"; Dickens identifies "the paradox of our age" — progress that destroys the community fabric it claims to serve.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and differences',
              'Uses evidence from both texts',
              'Synthesises rather than alternating between sources',
              'Infers beyond surface-level detail',
              'Top band: perceptive synthesis with judicious textual references',
            ],
          },
          {
            id: 'aqa-p2-05-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to criticise modern urban development?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_05_SOURCE_A}`,
            extractSource: EXAM_05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer starts with a specific, personal example to show the impact of development. The image of diggers "churning the soil" that had held "the first crocuses of spring" contrasts destruction with nature and new life. Margaret Chen "standing at the fence" with "her hands in her pockets" creates a picture of helplessness. The phrase "decided in a boardroom, by people who had never set foot in the garden" criticises how decisions are made by distant people. The sarcastic listing of "minimum-wage, mostly zero-hours" jobs shows the writer doesn\'t think the benefits are real. The quote from Oscar Wilde at the end — "the price of everything and the value of nothing" — sums up the argument powerfully.',
              'Grade 6-7': 'Ashworth constructs his criticism through a sustained opposition between the language of human value and the language of commercial transaction. The opening paragraph establishes this through concrete imagery: "caterpillar tracks churning the soil that, just days earlier, had held the first crocuses of spring" juxtaposes mechanical destruction with organic life, the specificity of "crocuses" lending the loss a seasonal poignancy — this is not merely land being destroyed but a cycle of renewal being interrupted. Margaret Chen is introduced with precise biographical detail — "seventy-eight," "thirty-one years" — numbers that quantify human investment in the language of measurement, challenging the development\'s own quantitative logic on its own terms. The phrase "said nothing. There was nothing to say" uses the repetition of "nothing" to perform the silencing of community voice, while the passive construction "the decision had been made in a boardroom" strips agency from both Margaret and the reader. The second paragraph deploys sarcasm through accumulation: "mostly minimum-wage, mostly zero-hours, mostly performed by people who would rather have kept their allotments" — the anaphoric "mostly" reduces the promised benefits to grudging qualifications. The clause "does not appear on any spreadsheet" is the paragraph\'s devastating conclusion, its language of bureaucratic exclusion exposing the limits of economic rationality. The Wilde quotation in the final paragraph — "the price of everything and the value of nothing" — functions as an epigram that crystallises the entire argument, while "identikit retail parks, luxury apartment blocks, and artisan coffee shops" uses the tricolon to satirise the monotonous homogeneity that replaces distinctive community.',
              'Grade 8-9': 'Ashworth\'s linguistic strategy operates through a systematic exposure of the epistemological violence of economic language — the way in which the vocabulary of development renders invisible the human realities it displaces. The opening scene is structured as an elegy: "caterpillar tracks churning the soil that, just days earlier, had held the first crocuses of spring" layers temporal registers — the industrial present ("churning") obliterating the organic past ("had held"), with the pluperfect tense encoding the garden as already lost. The specificity of "crocuses" is crucial: spring flowers connote renewal, and their destruction by machinery transforms the development from construction into a negation of the natural cycle. Margaret Chen\'s silence — "stood at the fence with her hands in her pockets and said nothing" — is the paragraph\'s rhetorical centre. The somatic detail of "hands in her pockets" connotes both resignation and concealment of emotion, while the polyptoton "said nothing. There was nothing to say" collapses the distinction between choice and impossibility: silence becomes the only adequate response to a decision that has already been made outside the vocabulary of community. The second paragraph performs a devastating act of rhetorical judo, appropriating the language of economic benefit only to expose its emptiness: "three hundred jobs" is immediately qualified by "minimum-wage, mostly zero-hours" — the anaphoric "mostly" functioning as a slow deflation of each promise. The sentence "The fact that Margaret Chen\'s mental health has measurably deteriorated since losing her garden does not appear on any spreadsheet" uses the language of quantification ("measurably") against the system that relies upon it, exposing a paradox: the harm is measurable but unmeasured, because the spreadsheet decides what counts as data. The concluding Wilde quotation is strategically positioned as an authoritative reformulation of the article\'s central thesis, while the final tricolon — "identikit retail parks, luxury apartment blocks, and artisan coffee shops where communities used to be" — uses the relative clause "where communities used to be" as a temporal haunting, each commercial space carrying the ghost of what it replaced.',
            },
            markScheme: [
              'Analyses the effects of specific language choices in detail',
              'Selects judicious quotations and embeds them within analysis',
              'Uses subject terminology accurately',
              'Considers how language positions the reader and conveys the writer\'s attitude',
              'Explores multiple layers of meaning in words and phrases',
              'Top band: perceptive, detailed, conceptualised analysis of language',
            ],
          },
          {
            id: 'aqa-p2-05-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their attitudes to urban development and its impact on communities.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers criticise development that destroys communities. Ashworth is angry about a garden being replaced by a shopping centre, and Dickens is concerned about houses being demolished for a new road. Both use the stories of individual women to show the human cost. Both argue that the new developments don\'t serve the people who are displaced. However, Dickens admits the old houses were awful — "dark, damp, and overcrowded" — which makes his argument more complicated. Both writers suggest that progress is being used as an excuse to ignore the needs of ordinary people.',
              'Grade 6-7': 'Both Ashworth and Dickens present urban development as a process that prioritises economic logic over human community, but Dickens\'s position is more ambivalent, and this difference shapes their rhetorical strategies. Ashworth\'s argument is relatively straightforward: the community garden is good, the shopping centre is bad, and the exchange represents a loss. His language is saturated with contempt for commercial values — "identikit retail parks," "minimum-wage, mostly zero-hours" — and the Wilde quotation crystallises a clear moral position. Dickens, however, constructs a genuinely paradoxical argument. He concedes that the demolished houses are "wretched" and "insanitary," acknowledging a legitimate case for demolition, before arguing that the human cost outweighs the sanitary benefit. This concession makes his criticism more powerful, not less, because it cannot be dismissed as sentimentality. Both writers use individual women as emblems of displacement: Ashworth\'s Margaret Chen, who "stood at the fence... and said nothing," and Dickens\'s woman "with her possessions in a handcart." Both images depict powerlessness, but Dickens\'s is more mobile — the handcart implies enforced movement, a life physically uprooted — while Ashworth\'s is static, Margaret frozen at the boundary of what was once hers. The most striking shared technique is their identification of a paradox at the heart of progress. Ashworth quotes Wilde; Dickens formulates his own: "we demolish in the name of civilisation the very communities upon which civilisation depends." Both writers recognise that the language of improvement conceals an act of destruction, and both deploy the tools of rhetoric to make that concealment visible.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers to convey their views',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context shapes perspective',
              'Sustains a comparative framework',
              'Top band: perceptive, detailed comparison with sustained critical engagement',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-05-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-05-q5',
            questionNumber: 5,
            questionText: '"New buildings and developments are the sign of a thriving town. Those who resist change are simply standing in the way of progress."\n\nWrite an article for your local newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear newspaper article that: addresses the statement with a personal point of view; uses some persuasive techniques such as rhetorical questions, emotive language, and examples; has a clear structure with a headline, introduction, body, and conclusion; matches the register of a local newspaper; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A compelling article that: engages critically with both sides of the statement; uses a range of rhetorical techniques fluently; deploys local and national examples effectively; sustains an appropriate register for a local newspaper audience; demonstrates consistent technical accuracy with varied and ambitious sentence structures.',
              'Grade 8-9': 'An assured, sophisticated article that: develops a nuanced argument that redefines "progress" and "change" on the writer\'s own terms; crafts a distinctive journalistic voice; deploys rhetorical strategies with precision — irony, concession, escalation; uses counter-argument strategically; demonstrates faultless technical accuracy with extensive vocabulary and masterful control of syntax.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling, convincing communication matched to purpose and audience',
              'AO5: Sustained, coherent argument with effective structural choices',
              'AO6 Technical Accuracy (16 marks): Accurate and consistent sentence demarcation',
              'AO6: Wide range of punctuation used accurately',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },
]
