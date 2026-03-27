// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 06 — Environment & Climate
const EXAM_06_SOURCE_A = `The flooding came without adequate warning. Three weeks ago, I stood on the banks of the River Severn and watched as murky brown water swallowed a row of terraced houses inch by inch. The families who lived there had been told they were safe — told by the Environment Agency, told by their insurance companies, told by a government that has spent two decades talking about climate adaptation while cutting flood defence budgets by a third.

What struck me was not the water itself but the faces of the people watching it rise. There was no panic. These communities have flooded before — in 2007, in 2014, in 2020. What I saw was something worse than panic: resignation. A woman named Carol, sixty-three, stood in wellington boots on her front step and told me, with perfect calm, that this was the fourth time she had lost everything. "You stop replacing the carpets after the second time," she said. "You stop putting photographs on low shelves. You learn to live above the waterline."

We talk about climate change as though it were a future problem, something that will inconvenience our grandchildren. But Carol is living with it now. The two-degree warming that policy documents discuss in the abstract has already arrived in her living room, and it smells of sewage and river mud.`

const EXAM_06_SOURCE_A_REF = 'James Hartley, "Below the Waterline", The Observer, 2025'

const EXAM_06_SOURCE_B = `I have lately returned from a journey through those districts of our country which have suffered most grievously from the late inundations, and I must confess that the scenes I have witnessed have filled me with both sorrow and indignation. The River Thames, swollen beyond all precedent by the extraordinary rains of October, has burst its ancient banks and laid waste to miles of productive farmland, drowning livestock and destroying the crops upon which so many humble families depend for their winter sustenance.

In the village of Marlow, I found families huddled in the upper storeys of their cottages, the ground floors being entirely submerged. The water, which bore upon its surface every species of filth and debris, had risen to a depth of four feet in the principal street. Children peered from upper windows with expressions of bewildered misery. One farmer, a man of perhaps fifty years, sat upon his roof with his dog beside him and told me, with a stoicism I found deeply affecting, that he had lost his entire harvest and half his cattle. "The river gives and the river takes," he said. "It has always been so."

What is most distressing is the utter inadequacy of the relief efforts. The parish authorities appear overwhelmed and the charitable subscriptions, though generously given, are wholly insufficient to meet the scale of the calamity.`

const EXAM_06_SOURCE_B_REF = 'William Howard Russell, dispatch to The Times, November 1852'

// Exam 07 — Travel & Exploration
const EXAM_07_SOURCE_A = `I did not come to the Arctic to find myself. I came because I had read about the ice sheets disappearing and I wanted to see them before they were gone — a morbid kind of tourism, I suppose, but an honest one. What I found instead was a landscape so vast and so indifferent to human presence that all the urgent questions I had brought with me simply evaporated, like breath in minus thirty degrees.

Svalbard is not beautiful in the way travel brochures suggest. There are no sweeping panoramas that make you feel elevated or inspired. Instead, there is a flatness that goes on and on until it meets a sky the colour of old steel, and a silence so complete that you can hear your own blood moving. The glaciers, which I had come specifically to photograph, were not the pristine white cathedrals I had imagined but dirty, fractured walls of blue-grey ice, streaked with centuries of trapped sediment. They groaned. That was the thing nobody had told me — glaciers make sounds. Deep, structural sounds, like a building settling, or a body shifting in sleep.

Our guide, a Norwegian woman named Ingrid who had lived on Svalbard for twenty years, told me that the glacier we were standing on had retreated two kilometres since she first arrived. "You are looking at a photograph of something that no longer exists," she said. "By the time you show this to anyone, it will have changed again."

The ice does not care about our guilt or our grief. It simply melts.`

const EXAM_07_SOURCE_A_REF = 'Priya Kaur, "The Retreating Edge", National Geographic Traveller, 2025'

const EXAM_07_SOURCE_B = `We had now been three days upon the glacier, and the difficulties of our ascent increased with every hour. The ice, far from presenting the smooth and level surface which the distant view had promised, was broken into a wilderness of crevasses — some narrow enough to step across, others so broad and deep that we were obliged to make detours of half a mile or more. The cold was intense. My thermometer, consulted at six o'clock in the morning, registered twelve degrees below the freezing point, and the wind, which blew steadily from the north-east, cut through our woollen garments as though they were made of paper.

Yet I must confess that, amidst all these hardships, I experienced a species of exhilaration which I have never felt before or since. The world below us had vanished. There was nothing but ice and sky and the vast, indifferent silence of the mountains. Every step was a negotiation with danger, and this constant alertness produced in me a clarity of mind that bordered on the euphoric. My companion Mr Henderson, a man not given to poetic sentiment, turned to me at one point and said simply: "I have never been so alive."

The glacier stretched before us like a frozen river, its surface marked by the passage of centuries — compressed snow, trapped air, the slow accumulation of time made visible and solid beneath our feet. To walk upon it was to walk upon history itself.`

const EXAM_07_SOURCE_B_REF = 'Edward Whymper, Scrambles Amongst the Alps, 1871'

// Exam 08 — Health & Medicine
const EXAM_08_SOURCE_A = `The waiting room of an NHS hospital at three o'clock in the morning is one of the most revealing places in Britain. Here, stripped of pretension and daylight, you see the country as it really is: exhausted, anxious, and held together by the extraordinary patience of people who have been sitting in plastic chairs for six hours without complaint.

I spent a night in the emergency department of a large London hospital for this article, and what I witnessed was not the catastrophe the headlines describe but something more complicated — a system that functions through the sheer willpower of its staff while crumbling at every institutional seam. A junior doctor named Amira, twenty-eight years old and fourteen hours into her shift, told me she had treated thirty-seven patients since midday. Her hands were steady. Her eyes were not. "I love this job," she said, refilling her coffee cup for the fifth time. "But I cannot sustain this. Nobody can."

The numbers tell a familiar story: 7.8 million people on NHS waiting lists, ambulance response times double what they were five years ago, one in ten nursing posts unfilled. But numbers are abstractions. What they translate to, in practice, is a seventy-four-year-old man named Arthur sitting in a corridor on a trolley for eleven hours because there are no beds, apologising to the nurses for being a nuisance. Arthur fought in no wars and climbed no mountains. He paid his taxes for fifty years and now he cannot get a bed. That is the measure of where we are.`

const EXAM_08_SOURCE_A_REF = 'Rebecca Cole, "Night Shift", The New Statesman, 2025'

const EXAM_08_SOURCE_B = `I have this past week visited the great hospitals of London, and I am bound to report that, while the dedication of the medical men and women who labour within them is beyond question, the conditions in which they are compelled to work would disgrace a civilised nation. At St Thomas's Hospital, I observed a single ward containing forty-two patients, many of them suffering from infectious diseases, with only three nurses to attend to their needs. The air was foul beyond description. The windows, though large, were kept shut against the cold, and the ventilation — that most elementary requirement of any place of healing — was wholly neglected.

In one bed I found a soldier, lately returned from the Crimea, whose wound had become so infected that the surgeon held out little hope for his recovery. He had served his country faithfully and now lay in a bed whose sheets had not been changed in four days, attended by nurses so overburdened that they could offer him little more than occasional draughts of water. The man bore his suffering with a fortitude that moved me deeply, but I confess that my admiration for his courage was mingled with a hot fury at the system which had brought him to such a pass.

It is not the fault of the nurses. It is not the fault of the surgeons. It is the fault of a nation that will spend millions on armaments and grudge every penny spent on the care of those whom those armaments have broken.`

const EXAM_08_SOURCE_B_REF = 'Florence Nightingale, letter to Sidney Herbert, Secretary of State for War, 1855'

// Exam 09 — Immigration
const EXAM_09_SOURCE_A = `My parents came to this country with two suitcases and a dictionary. They spoke no English. They knew nobody. They had left behind everything that was familiar — language, food, family, the particular quality of light in a Gujarati afternoon — in exchange for a council flat in Leicester and the theoretical promise of a better life for their children. That was thirty-two years ago. My father now runs three pharmacies. My mother teaches mathematics. I write for national newspapers. This is an immigration success story, and I am tired of telling it.

I am tired of it because the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets. My parents did not come here to boost GDP. They came because they were afraid, because political violence had made their home uninhabitable, because my mother wanted her children to grow up somewhere they would not be beaten for their surname. The fact that they subsequently prospered is wonderful but irrelevant to the moral question of whether they should have been admitted at all.

The current debate frames immigration as a problem to be managed rather than a reality to be understood. We speak of "flows" and "pressures" and "capacity" — the language of plumbing, not of people. Behind every statistic is a family making an impossible decision at three in the morning: to stay and risk everything, or to leave and lose everything. There is no version of that choice that is comfortable, and our public discourse should reflect its gravity rather than reducing it to slogans on the side of a bus.`

const EXAM_09_SOURCE_A_REF = 'Anish Patel, "The Weight of Suitcases", The Atlantic, 2024'

const EXAM_09_SOURCE_B = `The condition of the Irish immigrants in our great cities is a matter which demands the immediate and serious attention of every thinking Englishman. I have walked through the courts and alleys of Liverpool where these unfortunate people are congregated, and I have seen sights which would move the hardest heart. Families of ten and twelve persons occupy single rooms in buildings that are scarcely fit for habitation by animals. The streets run with filth. The children are barefoot, ragged, and half-starved, their faces bearing that peculiar expression of premature age which extreme poverty stamps upon the young.

And yet I must record, with a frankness that may displease some readers, that these people are not the idle, dissolute wretches that popular prejudice would have us believe. In every cellar and garret I visited, I found evidence of industry and enterprise. Women took in washing, mending, or piecework at rates so low as to constitute a species of slavery. Men walked miles each morning to seek work at the docks, often returning empty-handed but never ceasing to try. They clung to their faith, their families, and their dignity with a tenacity that shamed my comfortable assumptions.

The hatred directed against them in certain quarters — the accusations of criminality, of lowering wages, of threatening the English way of life — is, I am convinced, not merely unjust but profoundly ignorant. They did not leave their homeland from choice. They left because they were starving. That single fact should be sufficient to command our compassion, whatever our politics.`

const EXAM_09_SOURCE_B_REF = 'Friedrich Engels, The Condition of the Working Class in England, 1845'

// Exam 10 — Childhood & Youth
const EXAM_10_SOURCE_A = `Something has gone wrong with childhood. I do not say this as a nostalgic adult romanticising the past — my own childhood in the 1990s was no golden age — but as a secondary school teacher who has watched, over fifteen years, the slow erosion of something I can only call unstructured time. My students do not play. They do not wander. They do not experience the particular, irreplaceable boredom of a long afternoon with nothing to do, because every moment of their lives has been scheduled, supervised, and optimised.

By the age of eleven, the average British child has a timetable that would exhaust a management consultant: school from eight-thirty to three-thirty, followed by homework, tutoring, sports clubs, music practice, and — increasingly — content creation for social media platforms. Their weekends are not their own. A recent study found that British children spend an average of forty-seven minutes per day in unstructured outdoor play, down from four hours in the 1970s. Forty-seven minutes. That is less time than most adults spend commuting.

The consequences are measurable and alarming: a 40% increase in childhood anxiety diagnoses over the past decade, a 25% rise in self-harm among under-sixteens, and — perhaps most insidiously — a generation of young people who have been so thoroughly trained in the art of achievement that they have no idea what they actually enjoy. "What do you do for fun?" I asked a Year 10 student recently. She stared at me as though I had asked the question in a foreign language.`

const EXAM_10_SOURCE_A_REF = 'Hannah Morris, "The Scheduled Child", The Guardian Education, 2025'

const EXAM_10_SOURCE_B = `The children of the poor are not, properly speaking, children at all. They are, from the earliest age at which they can hold a broom or carry a pail, workers — diminutive adults burdened with responsibilities that would tax the strength and patience of their elders. I have seen girls of seven years minding infants while their mothers laboured in the mills. I have seen boys of nine hauling coal in baskets strapped to their backs, ascending ladders in darkness so complete that they navigated by touch alone.

Yet there persists, even in the most wretched circumstances, something indestructible in the nature of childhood. On a Saturday afternoon in Manchester, I observed a group of factory children — released from their labours for a precious half-day — playing in a courtyard between two warehouses. They had no toys. Their playground was a patch of mud and cobblestones. But they ran, they shrieked, they invented games of bewildering complexity from nothing but sticks and imagination. One boy had fashioned a kite from newspaper and string, and though it would not fly — the courtyard walls being too high to admit sufficient wind — he ran with it held above his head, making the sounds of wind with his mouth, perfectly content.

It struck me then that the capacity for play is not a luxury that prosperity confers upon the young but a fundamental impulse, as necessary as food or sleep, which no amount of hardship can entirely suppress. To deny children the opportunity to exercise this impulse — whether through the cruelty of labour or the indifference of neglect — is to commit an offence against nature itself.`

const EXAM_10_SOURCE_B_REF = 'Charles Dickens, "A Preliminary Word", Household Words, 1850'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const aqaP2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06 — Environment & Climate
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-06',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-06-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_06_SOURCE_A_REF}\nSource B: ${EXAM_06_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-06-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer stood on the banks of the River Thames.\nB) Brown water flooded a row of terraced houses.\nC) The Environment Agency had warned of flooding.\nD) Flood defence budgets have been cut.\nE) The government has spent two decades discussing climate adaptation.\nF) The families had been told they were at risk.\nG) The writer watched the flooding happen.\nH) Insurance companies had guaranteed safety.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, D, E, G — B: "murky brown water swallowed a row of terraced houses." D: "cutting flood defence budgets by a third." E: "spent two decades talking about climate adaptation." G: "I stood on the banks... and watched." A is false (it was the River Severn). C is false (the warning was inadequate). F is false (they were told they were safe, not at risk). H is a distortion (they were told they were safe, not given a guarantee).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-06-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two sources present the impact of flooding on ordinary people.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources show ordinary people suffering because of flooding. In Source A, Carol has lost her belongings four times and has stopped replacing her carpets. In Source B, families are "huddled in the upper storeys" and a farmer has lost "his entire harvest and half his cattle." Both sources show people accepting their situation — Carol speaks with "perfect calm" and the farmer shows "stoicism." A difference is that Source A links the flooding to climate change and government failure, while Source B treats it more as a natural disaster. Source A focuses on one person\'s repeated experience while Source B shows a whole community affected at once.',
              'Grade 6-7': 'Both writers foreground the stoicism of flood victims as a means of amplifying the injustice they describe, yet the nature of that stoicism differs significantly. Hartley\'s Carol has developed practical coping strategies born of repetition — she has "stopped replacing the carpets" and learned to "live above the waterline" — suggesting a long-term adaptation to recurring crisis. Russell\'s farmer, by contrast, expresses a fatalistic acceptance rooted in tradition: "The river gives and the river takes. It has always been so." Carol\'s resignation is modern and systemic (she has been failed by institutions), while the farmer\'s is philosophical and pre-industrial (he sees flooding as part of the natural order). Both sources document material devastation — loss of possessions, livelihoods, security — but Source A emphasises emotional and psychological damage through the detail of photographs no longer placed on "low shelves," while Source B catalogues economic loss: "crops," "livestock," "harvest." A further distinction lies in culpability: Hartley explicitly blames the government and Environment Agency, whereas Russell directs his criticism at "the parish authorities" and the inadequacy of charitable relief, reflecting different expectations of state responsibility across the two periods.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-06-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to convey the devastating impact of flooding and to criticise those responsible?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_06_SOURCE_A}`,
            extractSource: EXAM_06_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the verb "swallowed" to describe the water taking the houses, which makes the flood seem like a living creature eating them up. The repetition of "told" — "told by the Environment Agency, told by their insurance companies, told by a government" — shows all the different people who let the residents down. Carol\'s quote about stopping "replacing the carpets" is effective because it shows she has given up, which makes us feel sympathy. The metaphor of "living above the waterline" suggests people have had to permanently change their lives because of flooding.',
              'Grade 6-7': 'Hartley deploys a carefully constructed rhetoric that moves from witness testimony to systemic indictment. The personification of water as something that "swallowed" houses transforms a natural event into an act of predation, while "inch by inch" creates a painful temporal extension — the reader is forced to experience the slow violation of domestic space. The anaphoric tricolon "told by the Environment Agency, told by their insurance companies, told by a government" structures blame as a cascade of institutional failure, the repetition of "told" becoming increasingly accusatory with each iteration. Carol\'s direct speech is strategically deployed: her pragmatic detail about carpets and photograph shelves grounds the abstract crisis in devastating domestic specificity. The phrase "live above the waterline" operates as both literal description and metaphor — these people have been forced to retreat upward in their own homes, conceding territory to a threat their government was supposed to prevent. The final paragraph\'s masterstroke is the juxtaposition of abstract policy language ("two-degree warming," "policy documents") with visceral sensory reality: the warming "has already arrived in her living room, and it smells of sewage and river mud." The olfactory detail punctures bureaucratic abstraction with unignorable physicality.',
              'Grade 8-9': 'Hartley constructs a rhetorical architecture that systematically collapses the distance between political abstraction and lived experience. The opening sentence\'s passive construction — "The flooding came without adequate warning" — performs a double function: it establishes the event while embedding a judgment within the adverb "adequate," a word whose bureaucratic register ironically mirrors the institutional language the article will go on to indict. The personification of water "swallowing" houses invokes a Gothic vocabulary of consumption, but the adverbial "inch by inch" transforms this from dramatic spectacle into something more insidious — a creeping, relentless process that mirrors the slow political neglect the writer holds responsible. The anaphoric "told by" tricolon operates as a structural prosecution, each repetition adding another defendant to the dock. The progression from "Environment Agency" through "insurance companies" to "a government" enacts an escalation of culpability — from the specific agency to the abstract state. Carol\'s voice is the article\'s emotional and rhetorical centre. Her statement "You stop replacing the carpets after the second time" deploys the second-person "you" not as direct address but as a marker of universalised experience — this is what anyone would do. The shift from "you" to the devastating specificity of "photographs on low shelves" transforms a general coping strategy into an image of mourning: photographs are memory made material, and their elevation is an act of preservation against recurring loss. The final sentence performs the article\'s central argument in miniature: "it smells of sewage and river mud" translates policy failure into olfactory reality, the present tense insisting that this is not a story about the past but an ongoing condition.',
            },
            markScheme: [
              'Analyses persuasive and descriptive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-06-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the causes of flooding and society\'s response to it.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_06_SOURCE_A}\n\nSource B:\n${EXAM_06_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_06_SOURCE_A_REF} | Source B: ${EXAM_06_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are concerned about flooding and its effects on people, but they have different views on the cause. Hartley in Source A clearly blames the government and climate change, saying the government has spent "two decades talking about climate adaptation while cutting flood defence budgets." Russell in Source B does not blame anyone for the flood itself but criticises the relief efforts as "utterly inadequate." Both writers use individual stories to make their points more powerful — Carol in Source A and the farmer in Source B. Hartley is angrier and more political, while Russell is more descriptive and focuses on what he sees rather than arguing a point.',
              'Grade 6-7': 'The two writers share a journalistic commitment to bearing witness but diverge fundamentally in their understanding of causation and culpability. Hartley, writing in the context of climate science and institutional accountability, presents flooding as a man-made crisis: the government has been "cutting flood defence budgets by a third" while "talking about climate adaptation." His anger is directed at specific, identifiable failures of governance. Russell, writing in 1852, lacks this framework of human causation; the Thames has "burst its ancient banks" — the adjective "ancient" naturalising the event as part of an eternal cycle. The farmer\'s fatalism ("The river gives and the river takes") reflects a pre-industrial worldview in which flooding is divine or natural rather than political. Both writers use individual testimony to humanise their arguments, but the function differs. Carol\'s voice in Source A is evidence in a prosecution — her repeated losses prove systemic failure. The farmer\'s voice in Source B is a site of pathos — his stoicism is admired rather than interrogated. Methodologically, Hartley combines statistics, personal testimony, and direct accusation, deploying the full arsenal of modern campaigning journalism. Russell relies on the conventions of Victorian reportage: detailed physical description, emotional appeal, and an implicit trust that simply showing the reader what he has seen will be sufficient to inspire action. The difference reflects not just individual style but shifting assumptions about what writing can and should do in the face of suffering.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-06-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-06-q5',
            questionNumber: 5,
            questionText: '"The environment is not a political issue — it is a survival issue. Every person alive today has a moral duty to change the way they live."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative piece that: addresses the statement directly and takes a clear position; uses some persuasive devices (rhetorical questions, statistics, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7': 'A well-crafted argument that: engages critically with both the "survival issue" and "moral duty" elements; uses a range of rhetorical techniques fluently (anaphora, tricolon, counter-argument); deploys evidence and examples effectively; matches the register of a broadsheet article consistently; demonstrates consistent technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9': 'A compelling, assured argument that: offers a nuanced, sophisticated perspective that interrogates the terms of the statement; crafts a distinctive authorial voice appropriate to the broadsheet form; deploys rhetorical strategies with precision and control, including effective counter-argument; demonstrates extensive vocabulary, varied syntax, and technical virtuosity throughout; creates a sense of urgency without sacrificing intellectual rigour.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07 — Travel & Exploration
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-07',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-07-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_07_SOURCE_A_REF}\nSource B: ${EXAM_07_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-07-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer went to the Arctic to find herself.\nB) The writer wanted to see the ice sheets before they disappeared.\nC) The writer describes her tourism as honest.\nD) The landscape was welcoming to visitors.\nE) The questions she brought with her became more urgent.\nF) The temperature was minus thirty degrees.\nG) The writer had read about disappearing ice sheets.\nH) Human presence dominated the landscape.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, C, F, G — B: "I wanted to see them before they were gone." C: "a morbid kind of tourism, I suppose, but an honest one." F: "minus thirty degrees." G: "I had read about the ice sheets disappearing." A is false (she explicitly says she did not come to find herself). D is false (the landscape was "indifferent to human presence"). E is false (her questions "evaporated"). H is false (the landscape was indifferent to human presence).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-07-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two writers describe the experience of encountering glaciers.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers describe glaciers as impressive and powerful. In Source A, the glaciers make "deep, structural sounds" which surprised the writer. In Source B, the glacier is compared to "a frozen river" and walking on it is described as walking "upon history itself." A difference is that Source A focuses on the glaciers melting and retreating — they have gone back "two kilometres" — while Source B presents the glacier as permanent and ancient. Source A makes the reader feel sad about climate change, while Source B creates a sense of adventure and excitement.',
              'Grade 6-7': 'Both writers present glaciers as sublime — vast, powerful, and exceeding human comprehension — yet their emotional registers differ profoundly. Kaur\'s glaciers are objects of mourning: "dirty, fractured walls of blue-grey ice, streaked with centuries of trapped sediment" — the adjectives "dirty" and "fractured" strip away any romantic grandeur, presenting ice that is already damaged. Whymper\'s glacier, by contrast, is an object of wonder: "the slow accumulation of time made visible and solid," a metaphor that transforms ice into a monument. Both writers note the physical reality of the experience — Kaur records the sounds glaciers make, Whymper the crevasses and cold — but their interpretations diverge. Kaur\'s guide frames the glacier as something "that no longer exists," emphasising impermanence, while Whymper\'s companion declares "I have never been so alive," emphasising personal transformation. The fundamental difference is temporal orientation: Kaur looks forward with grief (the ice will continue to melt), while Whymper looks backward with reverence (the ice contains "the passage of centuries").',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-07-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to convey a sense of loss and environmental grief?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_07_SOURCE_A}`,
            extractSource: EXAM_07_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses negative language to show the Arctic is not what she expected. The glaciers are "not the pristine white cathedrals" she imagined but "dirty, fractured walls." The word "dirty" is surprising because we expect ice to be clean. The guide\'s quote about "a photograph of something that no longer exists" is powerful because it makes the reader realise the ice is disappearing. The final sentence, "The ice does not care about our guilt or our grief," personifies the ice to show nature is indifferent to human feelings, which makes the loss feel even sadder.',
              'Grade 6-7': 'Kaur constructs environmental grief through a sustained rhetoric of disappointed expectation and temporal anxiety. The opening paragraph establishes the journey as a form of pre-emptive mourning — "I wanted to see them before they were gone" — the subordinate clause transforming tourism into elegy. The description of Svalbard systematically dismantles aesthetic consolation: it is "not beautiful in the way travel brochures suggest," the glaciers are "not the pristine white cathedrals I had imagined." This anaphoric negation ("not... not...") performs the stripping away of comforting narratives. The personification of glaciers through sound — "They groaned" — is particularly effective: the short declarative sentence isolates the sound, and the verb "groaned" anthropomorphises the ice, suggesting pain or protest. The simile "like a building settling, or a body shifting in sleep" deepens this: both comparisons carry intimations of collapse and unconsciousness. Ingrid\'s devastating observation — "You are looking at a photograph of something that no longer exists" — collapses present and future, suggesting that even the act of witnessing is already a form of retrospection. The final sentence\'s personification — "The ice does not care about our guilt or our grief" — uses the paired abstract nouns to name the emotional complex the article has been constructing, while "does not care" denies the reader the consolation of a responsive natural world.',
              'Grade 8-9': 'Kaur\'s prose enacts a phenomenology of environmental grief, moving through stages of anticipation, disillusionment, witness, and finally a bleak acceptance that refuses consolation. The opening sentence\'s negation — "I did not come to the Arctic to find myself" — immediately resists the conventions of travel writing, rejecting the genre\'s promise of personal transformation. Instead, the journey is framed as "morbid tourism," the adjective acknowledging the ethical discomfort of witnessing destruction as spectacle. The description of Svalbard performs what might be termed an "anti-sublime": where Romantic writers found in Arctic landscapes a transcendent terror that elevated the human spirit, Kaur finds only "a flatness that goes on and on" and "a sky the colour of old steel." The simile "old steel" is precisely chosen — it connotes not natural beauty but industrial decay, the manufactured world bleeding into the natural. The glaciers\' sounds constitute the passage\'s most original and disturbing image: "Deep, structural sounds, like a building settling, or a body shifting in sleep." The word "structural" is key — it implies that the sounds emanate from the fundamental architecture of the ice, that what is groaning is not the surface but the foundation. The simile\'s progression from "building" to "body" enacts an escalating anthropomorphism that culminates in Ingrid\'s temporal paradox: "You are looking at a photograph of something that no longer exists." This statement collapses the ontological distinction between presence and absence — the glacier is simultaneously here and already gone, existing in a state of continuous disappearance. The final sentence\'s stark declarative — "It simply melts" — is devastating in its refusal of rhetoric. After three paragraphs of elaborate description, the monosyllabic simplicity enacts the indifference it describes.',
            },
            markScheme: [
              'Analyses descriptive and persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language creates emotional response in the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-07-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the natural world and humanity\'s place within it.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_07_SOURCE_A}\n\nSource B:\n${EXAM_07_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_07_SOURCE_A_REF} | Source B: ${EXAM_07_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers describe dramatic natural landscapes, but their attitudes are very different. Kaur in Source A sees nature as something humans are destroying — the glaciers are melting and "the ice does not care." She feels guilty and sad. Whymper in Source B sees nature as a challenge to be conquered and feels "exhilaration" climbing the glacier. Both writers find the landscape overwhelming, but Kaur is made to feel small and powerless while Whymper feels "alive." Source A is about loss and environmental damage, while Source B is about adventure and human achievement.',
              'Grade 6-7': 'The two writers occupy fundamentally different positions in the history of humanity\'s relationship with the natural world, and their texts reflect this shift. Whymper, writing in the era of Victorian exploration, approaches the glacier as a site of human testing and triumph. Nature is an adversary that, once conquered, rewards the climber with "a clarity of mind that bordered on the euphoric." His companion\'s declaration "I have never been so alive" positions the natural world as a catalyst for human self-realisation. Kaur, writing in the age of climate crisis, approaches the same landscape with grief rather than ambition. The glacier is not an obstacle to overcome but a victim to mourn — it has "retreated two kilometres" and its sounds are those of structural failure, not geological permanence. Methodologically, Whymper employs the conventions of Victorian adventure writing: precise measurement ("twelve degrees below the freezing point"), heroic understatement, and the elevation of physical hardship into moral virtue. Kaur employs the conventions of contemporary environmental journalism: scientific context, personal reflection, and the strategic deployment of expert testimony (Ingrid\'s devastating observation about photographs). The most revealing comparison is in their closing images: Whymper\'s glacier is "history itself" — solid, permanent, a monument to deep time. Kaur\'s ice "simply melts" — transient, indifferent, already becoming something else. Between these two images lies a century and a half of human impact on the planet.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-07-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-07-q5',
            questionNumber: 5,
            questionText: '"Travel broadens the mind — but in the age of climate change, it also damages the planet. We need to rethink how and why we travel."\n\nWrite a speech to be delivered at a school assembly in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech that: addresses the statement and takes a position; uses some rhetorical devices appropriate to speech (direct address, rhetorical questions, repetition); has a clear structure with an engaging opening and a memorable conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted speech that: engages critically with the tension between travel\'s benefits and environmental cost; uses a range of techniques appropriate to the spoken form (anaphora, shifts in pace, audience interaction); deploys specific examples and evidence persuasively; maintains an appropriate register for a school assembly; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured speech that: offers a nuanced perspective acknowledging complexity without sacrificing clarity of argument; crafts a distinctive voice that balances authority with accessibility; deploys rhetorical strategies with precision, including effective use of pauses, shifts in tone, and audience engagement; demonstrates extensive vocabulary, varied syntax, and technical virtuosity; creates a memorable and thought-provoking experience for the audience.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08 — Health & Medicine
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-08',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-08-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_08_SOURCE_A_REF}\nSource B: ${EXAM_08_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-08-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer visited a hospital at three in the morning.\nB) The waiting room was empty.\nC) People had been sitting for six hours.\nD) The writer describes the waiting room as revealing.\nE) Patients were complaining loudly.\nF) The writer saw the country as it really is.\nG) The chairs were comfortable.\nH) People were exhausted and anxious.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, D, H — A: "at three o\'clock in the morning." C: "sitting in plastic chairs for six hours." D: "one of the most revealing places in Britain." H: "exhausted, anxious." B is false (it was full of people). E is false (they waited "without complaint"). F is arguably true but refers to a general observation. G is false (the chairs are "plastic").',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-08-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the problems facing healthcare in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources show hospitals that are overcrowded and understaffed. In Source A, there are "7.8 million people on NHS waiting lists" and "one in ten nursing posts unfilled." In Source B, there are "forty-two patients" in one ward with "only three nurses." Both writers praise the dedication of staff — Source A describes Amira working fourteen hours, and Source B says the dedication of medical staff is "beyond question." A difference is that Source A focuses on waiting times and lack of beds, while Source B focuses on hygiene and infection. Source B also links the problem to military spending, while Source A blames general underfunding.',
              'Grade 6-7': 'Both writers document a healthcare system overwhelmed by demand and undermined by inadequate resources, yet the specific nature of the crisis differs across the centuries. Cole\'s NHS struggles with volume: 7.8 million waiting lists, doubled ambulance response times, unfilled nursing posts — the crisis is systemic and statistical. Nightingale\'s hospital struggles with conditions: foul air, unchanged sheets, inadequate ventilation — the crisis is environmental and immediate. Both writers identify a cruel irony in the treatment of those who have served: Cole\'s Arthur "paid his taxes for fifty years" and cannot get a bed; Nightingale\'s soldier "served his country faithfully" and lies in dirty sheets. The parallel is striking — both writers use individual cases to personify institutional failure. A key difference lies in the writers\' identification of root cause: Cole implies chronic political underfunding, while Nightingale explicitly indicts misallocated national spending — a nation that "will spend millions on armaments and grudge every penny spent on the care of those whom those armaments have broken." Both share a conviction that staff are not to blame: Cole notes Amira\'s dedication despite impossible conditions, and Nightingale insists "It is not the fault of the nurses."',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-08-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to convey the scale of the NHS crisis and to generate sympathy for those affected?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_08_SOURCE_A}`,
            extractSource: EXAM_08_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses statistics to show the scale of the crisis: "7.8 million people on NHS waiting lists" is a shocking number that makes the reader understand how serious the problem is. The description of Amira working "fourteen hours" makes us feel sorry for NHS staff. The detail that she has "treated thirty-seven patients since midday" shows how overworked she is. Arthur waiting on "a trolley for eleven hours" creates sympathy because he is an elderly man being neglected. The fact that Arthur apologises "for being a nuisance" is particularly sad because he is the one being let down, not causing problems.',
              'Grade 6-7': 'Cole deploys a carefully layered rhetorical strategy that moves from atmospheric scene-setting to statistical evidence to devastating individual portraiture. The opening metaphor of the waiting room as "one of the most revealing places in Britain" establishes the hospital as a microcosm of national failure. The description "stripped of pretension and daylight" uses the participial phrase to create a double exposure: the waiting room strips both artificial light and social masks. Amira\'s portrait uses precise numerical detail — "thirty-seven patients since midday," "fourteen hours into her shift," "fifth time" refilling coffee — to create an accumulation of exhaustion. The syntactic contrast between "Her hands were steady. Her eyes were not" is masterful: the parallel structure invites comparison, while the terminal negation ("were not") performs the failure. The transition from statistics to Arthur enacts the article\'s central argument: "numbers are abstractions" gives way to a man on a trolley, and the reader is forced to convert data into suffering. Arthur\'s characterisation is strategic: he "fought in no wars and climbed no mountains" — the negatives define him by his ordinariness, making his neglect not a dramatic injustice but a routine one. His apology "for being a nuisance" is the passage\'s emotional climax because it reverses the moral relationship: the man who should receive care instead offers consideration to those failing to provide it.',
              'Grade 8-9': 'Cole constructs a rhetoric of escalating moral indictment that moves from institutional critique to individual portraiture, with each rhetorical shift tightening the argument\'s emotional grip. The opening sentence\'s claim that the A&E waiting room is "one of the most revealing places in Britain" operates as a thesis statement: the hospital will function throughout as a diagnostic tool for national health — in both the medical and political sense. The participial "stripped of pretension and daylight" performs a dual exposure, connecting the physical (fluorescent light, plastic chairs) with the social (the absence of the comfortable fictions daylight enables). The portrait of Amira is built through a rhetoric of precise enumeration — "twenty-eight years old," "fourteen hours," "thirty-seven patients," "fifth time" — each number adding weight to an already unsustainable load. The syntactic parallelism of "Her hands were steady. Her eyes were not" distils professional competence and personal exhaustion into a single, devastating opposition: the body functions while the person behind it falters. Her quoted speech — "I love this job. But I cannot sustain this. Nobody can" — escalates from individual to universal through pronominal shift: "I" becomes "nobody," personal testimony becomes systemic diagnosis. The paragraph\'s transition to statistics is strategically positioned after Amira\'s testimony, ensuring the numbers attach to a human face. But it is the subsequent reversal — "But numbers are abstractions" — that performs the article\'s most sophisticated argumentative move: having deployed statistics for their rhetorical force, Cole then undermines the very medium, insisting on the irreducibility of individual experience. Arthur is the article\'s moral centre precisely because of his absence of distinction: "fought in no wars and climbed no mountains" constructs him through negation, defining ordinary citizenship by what it lacks. The final image — Arthur "apologising to the nurses for being a nuisance" — is devastating because it exposes a specifically British pathology: the citizen who has been failed by the state and responds not with anger but with politeness, not with demands but with self-deprecation. The concluding sentence — "That is the measure of where we are" — uses the demonstrative "that" to crystallise the entire article into Arthur\'s apology, transforming a moment of individual kindness into an indictment of national failure.',
            },
            markScheme: [
              'Analyses persuasive and descriptive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language generates sympathy and positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-08-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to healthcare failures and the treatment of vulnerable people.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_08_SOURCE_A}\n\nSource B:\n${EXAM_08_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_08_SOURCE_A_REF} | Source B: ${EXAM_08_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are angry about the state of hospitals and sympathetic to patients and staff. Cole in Source A is frustrated that the NHS is underfunded, using statistics like "7.8 million people on waiting lists" to prove her point. Nightingale in Source B is furious about the conditions in military hospitals, describing the "foul" air and unchanged sheets. Both writers praise the dedication of staff — Amira works despite exhaustion, and Nightingale says the doctors\' dedication is "beyond question." Both use individual patients to create sympathy: Arthur in Source A and the soldier in Source B. A key difference is that Nightingale directly blames government spending on armaments, while Cole implies blame more generally.',
              'Grade 6-7': 'Both writers share a strategy of bearing witness to institutional failure while protecting individual practitioners from blame, but their rhetorical approaches reflect different conventions and contexts. Cole operates within modern investigative journalism: she spends a night in A&E, combines statistical evidence with personal testimony, and builds an argument that is both evidential and emotional. Nightingale writes from the authority of direct professional experience, deploying the conventions of formal correspondence: measured syntax, strategic concession ("while the dedication of the medical men and women... is beyond question"), and a climactic accusation that gains force from its restraint. Both writers use a key structural move: the transition from systemic overview to individual case. Cole moves from "7.8 million" to Arthur; Nightingale moves from "forty-two patients" to the individual soldier. In both cases, the individual functions as synecdoche — a single embodiment of mass failure. The most revealing comparison lies in their attribution of blame. Cole is diffuse in her criticism: the system is "crumbling at every institutional seam," a metaphor that distributes failure across the entire structure. Nightingale is surgically precise: "a nation that will spend millions on armaments and grudge every penny spent on the care of those whom those armaments have broken." The zeugma of "armaments" — the cause of both injury and underfunding — is a devastating rhetorical compression that Cole\'s more generalised critique cannot match.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-08-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-08-q5',
            questionNumber: 5,
            questionText: '"The NHS is the greatest achievement of British society. We must be prepared to pay whatever it costs to save it."\n\nWrite a letter to your local MP in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear formal letter that: addresses the statement and takes a position; uses appropriate letter conventions (Dear..., Yours sincerely); uses some persuasive devices (rhetorical questions, examples, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted formal letter that: engages critically with both the "greatest achievement" claim and the "whatever it costs" element; maintains an appropriate formal register throughout while remaining persuasive; uses a range of rhetorical techniques suited to the form (appeal to shared values, logical argument, evidence); demonstrates consistent technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9': 'A compelling, assured formal letter that: offers a nuanced position that acknowledges the complexity of healthcare funding; crafts a distinctive voice that balances deference to the recipient with moral authority; deploys rhetorical strategies with precision, including effective counter-argument and strategic concession; demonstrates extensive vocabulary, varied syntax, and technical virtuosity; maintains the formal letter register throughout while building a powerful and memorable argument.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 09 — Immigration
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-09',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-09-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_09_SOURCE_A_REF}\nSource B: ${EXAM_09_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-09-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer\'s parents arrived with two suitcases.\nB) They spoke fluent English on arrival.\nC) They brought a dictionary with them.\nD) They had family already in Leicester.\nE) They were given a council flat.\nF) Their new home was in Manchester.\nG) They left behind everything familiar.\nH) The writer\'s father now runs two pharmacies.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, G — A: "two suitcases and a dictionary." C: "a dictionary." E: "a council flat in Leicester." G: "left behind everything that was familiar." B is false (they "spoke no English"). D is false (they "knew nobody"). F is false (the flat was in Leicester). H is false (he runs three pharmacies, not two).',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-09-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two sources present the experiences of immigrants.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources show immigrants arriving with very little and working hard. In Source A, Patel\'s parents came with "two suitcases and a dictionary" and his father now runs "three pharmacies." In Source B, Irish immigrants show "industry and enterprise" with women taking in work and men walking "miles each morning" to find jobs. Both sources say immigrants face unfair prejudice — Source A mentions the demand to "prove their worth" and Source B mentions "accusations of criminality." A difference is that Source A focuses on a successful family, while Source B focuses on people still living in poverty.',
              'Grade 6-7': 'Both writers challenge anti-immigrant narratives by documenting the reality of immigrant experience, but their emphases and methods differ considerably. Patel presents immigration through the lens of family memoir: his parents\' arrival with "two suitcases and a dictionary" is a carefully distilled image of vulnerability and aspiration, while their subsequent success — pharmacies, teaching, journalism — provides concrete evidence of contribution. Engels, by contrast, documents ongoing hardship: families of "ten and twelve persons" in single rooms, children "barefoot, ragged, and half-starved." Where Patel\'s narrative is one of achievement, Engels\'s is one of endurance. Both writers emphasise the industry of immigrants: Patel\'s parents prospered through hard work; Engels\'s Irish immigrants take work "at rates so low as to constitute a species of slavery." Both also insist that immigration was not a choice: Patel\'s parents fled "political violence," while Engels\'s Irish "left because they were starving." The fundamental similarity is the writers\' shared conviction that prejudice against immigrants is rooted in ignorance, but they address it differently: Patel interrogates the very framework that demands immigrants justify their presence through economic contribution, while Engels directly refutes specific accusations of idleness and criminality.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-09-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to challenge the way immigration is discussed in public debate?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_09_SOURCE_A}`,
            extractSource: EXAM_09_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses personal experience to challenge public debate. The opening image of "two suitcases and a dictionary" is powerful because it shows how little his parents had. He repeats "I am tired of it" to show his frustration with having to prove immigrants\' worth. The metaphor comparing immigration language to "plumbing" is effective because it shows how the debate dehumanises people. The listing of "flows" and "pressures" and "capacity" shows how political language turns people into statistics. The final image of a family "making an impossible decision at three in the morning" creates sympathy by making the reader imagine the fear immigrants feel.',
              'Grade 6-7': 'Patel constructs a rhetorically sophisticated challenge to immigration discourse by first presenting and then dismantling the "success story" narrative. The opening paragraph\'s accumulation of detail — "two suitcases," "no English," "knew nobody" — establishes the classic immigrant trajectory, but the declarative "I am tired of telling it" subverts expectation: the reader anticipates celebration and receives exhaustion. The second paragraph articulates why: "the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets." The metaphor of "balance sheets" exposes the transactional framework underlying supposedly welcoming attitudes. The third paragraph attacks the linguistic infrastructure of the debate itself: "flows," "pressures," "capacity" are identified and dismissed as "the language of plumbing, not of people." This metalinguistic strategy — naming and rejecting the vocabulary of immigration policy — positions Patel not merely as a contributor to the debate but as a critic of its terms. The final image — "a family making an impossible decision at three in the morning" — deploys temporal specificity ("three in the morning") to create intimacy and vulnerability, while "impossible" resists the binary of stay/leave that policy debate assumes. The concluding phrase "slogans on the side of a bus" is a pointed cultural reference that anchors the abstract argument in recent political history.',
              'Grade 8-9': 'Patel\'s rhetorical strategy is radical in its refusal to participate in the debate on its existing terms: rather than arguing for or against immigration, he interrogates the discursive framework itself, exposing how language shapes — and distorts — public understanding. The opening paragraph performs a deliberate seduction: the archetypal immigration narrative (poverty to success, struggle to achievement) is presented with precision and apparent pride, only to be repudiated in the devastating pivot "I am tired of telling it." The anaphoric "I am tired" performs exhaustion at the level of syntax, the repetition enacting the very cycle of justification Patel refuses. The second paragraph\'s central argument — that "the demand that immigrants prove their worth through economic contribution reduces human beings to balance sheets" — deploys the financial metaphor to expose the implicit contract underlying liberal tolerance: you may stay, provided you produce. The adjective "wonderful but irrelevant" applied to his parents\' prosperity is a masterclass in rhetorical positioning: conceding the fact while denying its pertinence. The third paragraph executes a metalinguistic critique: the scare-quoted "flows," "pressures," "capacity" are first presented as the accepted vocabulary of debate, then recharacterised through the devastating analogy "the language of plumbing, not of people." The reduction is precise — plumbing manages the movement of an undifferentiated substance through a system, which is exactly how immigration policy treats human beings. The final sentence\'s structure — "to stay and risk everything, or to leave and lose everything" — uses syntactic parallelism to present both options as equally catastrophic, the repeated "everything" insisting that there is no cost-free choice. The closing reference to "slogans on the side of a bus" is strategically placed as the article\'s final image, deflating the preceding moral seriousness with a reminder of the crudeness with which public discourse actually operates.',
            },
            markScheme: [
              'Analyses persuasive and rhetorical language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language challenges assumptions and positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-09-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their attitudes towards immigration and the treatment of immigrants.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_09_SOURCE_A}\n\nSource B:\n${EXAM_09_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_09_SOURCE_A_REF} | Source B: ${EXAM_09_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are sympathetic to immigrants and critical of how they are treated. Patel in Source A uses his own family\'s experience to argue that immigrants should not have to prove their worth. Engels in Source B uses detailed descriptions of Irish immigrants\' living conditions to create sympathy. Both writers say immigrants did not leave by choice — Patel\'s parents fled "political violence" and Engels says the Irish "left because they were starving." Both writers criticise the prejudice immigrants face: Patel is frustrated by the "demand" to prove economic value, and Engels challenges "accusations of criminality." A difference is that Patel is personally connected to the issue as an immigrant\'s child, while Engels writes as an outside observer.',
              'Grade 6-7': 'Both writers share an unwavering conviction that anti-immigrant sentiment is morally and intellectually bankrupt, but they approach the argument from fundamentally different positions. Patel writes as a second-generation immigrant, deploying personal testimony as both evidence and authority. His argument is philosophical: he challenges the framework of the debate itself, rejecting the premise that immigrants must demonstrate economic value. Engels writes as a middle-class observer documenting working-class suffering, a position that gives him rhetorical distance but limits his emotional authority. His argument is empirical: he describes what he has seen and challenges his readers to reconcile their prejudices with the evidence. Both writers use strategic concession: Patel acknowledges his parents\' success while denying its relevance ("wonderful but irrelevant"); Engels acknowledges that his candour "may displease some readers" while insisting on truth. Methodologically, Patel operates through abstraction and metaphor — "balance sheets," "the language of plumbing" — attacking discourse itself. Engels operates through accumulation of physical detail — "barefoot, ragged, and half-starved" — attacking ignorance through confrontation with reality. Both conclude with moral imperatives: Patel demands that discourse "reflect the gravity" of immigrant experience; Engels insists that the fact of starvation "should be sufficient to command our compassion." The progression from 1845 to 2024 reveals a depressing continuity: the specific immigrant group changes, but the structure of prejudice — the accusations of criminality, the resentment of economic competition, the refusal of compassion — remains essentially unchanged.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-09-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-09-q5',
            questionNumber: 5,
            questionText: '"This country has always been shaped by immigration. We should celebrate the diversity it brings rather than fear it."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative piece that: addresses the statement directly and takes a clear position; uses some persuasive devices (rhetorical questions, examples, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation with some variety in sentence forms.',
              'Grade 6-7': 'A well-crafted argument that: engages critically with both the historical claim and the call to celebrate diversity; uses a range of rhetorical techniques fluently, including counter-argument; deploys specific evidence and examples effectively; matches the register of a broadsheet article consistently; demonstrates consistent technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9': 'A compelling, assured argument that: offers a nuanced, sophisticated perspective that goes beyond simple agreement or disagreement; crafts a distinctive authorial voice appropriate to the form; deploys rhetorical strategies with precision and control, including effective counter-argument and strategic concession; demonstrates extensive vocabulary, varied syntax, and technical virtuosity throughout; engages with the complexity of identity, belonging, and national narratives.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 10 — Childhood & Youth
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-10',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-10-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_10_SOURCE_A_REF}\nSource B: ${EXAM_10_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-10-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes something has gone wrong with childhood.\nB) The writer grew up in the 1980s.\nC) The writer is a secondary school teacher.\nD) The writer romanticises her own childhood.\nE) The writer has taught for fifteen years.\nF) Students experience long periods of boredom.\nG) Every moment of students\' lives has been scheduled.\nH) The writer\'s childhood was a golden age.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, G — A: "Something has gone wrong with childhood." C: "a secondary school teacher." E: "over fifteen years." G: "every moment of their lives has been scheduled, supervised, and optimised." B is false (she grew up in the 1990s). D is false (she explicitly says she is not romanticising). F is false (children do not experience boredom — that is her point). H is false (she says "my own childhood in the 1990s was no golden age").',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-10-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two sources present the experiences of children.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources describe children who have lost something important. In Source A, modern children have lost "unstructured time" and spend only "forty-seven minutes per day" in outdoor play. In Source B, Victorian children have lost their childhood entirely — girls of seven are "minding infants" and boys of nine are "hauling coal." Both writers believe play is essential for children. However, the reasons for the loss are very different: in Source A it is over-scheduling and pressure to achieve, while in Source B it is poverty and child labour. Source B shows that even in terrible conditions, children find ways to play — making kites from "newspaper and string" — while Source A suggests modern children no longer know how to play.',
              'Grade 6-7': 'Both writers document the curtailment of childhood, but the nature and cause of that curtailment differ profoundly. Morris\'s contemporary children are over-scheduled: their time is consumed by "homework, tutoring, sports clubs, music practice" and social media. Dickens\'s children are over-worked: they labour in factories and mines from an age when "they can hold a broom or carry a pail." The material conditions are incomparable — scheduled activities versus physical exploitation — yet both writers identify a shared consequence: the denial of unstructured play, which both regard as essential to childhood. A key difference lies in the children\'s response. Morris\'s students, when asked "What do you do for fun?", cannot answer — they have internalised the absence of play so completely that the concept has become alien. Dickens\'s factory children, released for a half-day, immediately and instinctively play: they "ran, they shrieked, they invented games of bewildering complexity from nothing." This suggests that the Victorian threat to childhood, though materially more severe, was less psychologically penetrating: the impulse to play survived exploitation but may not survive optimisation. Both writers ultimately argue that society has a responsibility to protect childhood, but their understanding of the threat differs: for Dickens, it is economic; for Morris, it is cultural.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-10-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to convey her concern about modern childhood and to persuade the reader that something needs to change?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_10_SOURCE_A}`,
            extractSource: EXAM_10_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer opens with the dramatic statement "Something has gone wrong with childhood" which immediately tells the reader there is a serious problem. She uses the rule of three — "scheduled, supervised, and optimised" — to show how controlled children\'s lives are. The word "optimised" is interesting because it sounds like something from a business, not a childhood. The statistic of "forty-seven minutes" compared to "four hours in the 1970s" shocks the reader. The final anecdote about the student who couldn\'t answer "What do you do for fun?" is very effective because it shows a real example of the problem.',
              'Grade 6-7': 'Morris constructs her argument through a carefully escalating rhetoric that moves from personal authority to statistical evidence to devastating anecdote. The opening declarative — "Something has gone wrong with childhood" — deploys the vague pronoun "something" strategically: it creates anxiety through imprecision, the unidentified threat more unsettling than a named one. The pre-emptive defence ("I do not say this as a nostalgic adult romanticising the past") disarms the reader\'s likely objection before it forms. The tricolon "scheduled, supervised, and optimised" is charged with corporate register — particularly "optimised," a word from business management repurposed to describe childhood, the mismatch between register and subject performing the very critique the article makes. The statistical comparison — "forty-seven minutes" versus "four hours in the 1970s" — is strategically followed by the comparative "less time than most adults spend commuting," which reframes the abstract number as a lived reality. The final paragraph\'s statistics ("40% increase," "25% rise") provide the evidential foundation, but it is the concluding anecdote that delivers the emotional payload: the student who stares at the question "What do you do for fun?" "as though I had asked the question in a foreign language." The simile is devastating because it implies that the concept of fun has become linguistically inaccessible — not merely unfamiliar but incomprehensible.',
              'Grade 8-9': 'Morris\'s prose operates through a sustained rhetoric of dispossession, systematically cataloguing what has been taken from childhood while deploying the very precision and efficiency she critiques. The opening sentence — "Something has gone wrong with childhood" — is structurally foundational: the abstract pronoun "something" and the euphemistic "gone wrong" create a deliberate vagueness that the article will progressively diagnose, positioning the reader as patient receiving a gradually revealed prognosis. The parenthetical concession about the 1990s is rhetorically sophisticated: by denying nostalgia, Morris claims the authority of the dispassionate analyst rather than the sentimental traditionalist. The term she coins — "unstructured time" — is itself revealing: the positive state (freedom, play, boredom) can only be named through negation, as the absence of structure, suggesting that structure has become so totalising that it defines even its own opposite. The tricolon "scheduled, supervised, and optimised" enacts a semantic escalation from the organisational to the industrial: "optimised" is the key term, importing the vocabulary of algorithmic efficiency into the domain of childhood. The child has become a process to be refined. The statistical paragraph performs a rhetorical double movement: the numbers — "forty-seven minutes," "four hours" — are presented as evidence, but the subsequent comparison to commuting time re-encodes the abstract data as experiential absurdity. The final anecdote is the article\'s structural and emotional climax, and its power lies in the gap between question and non-response. The simile "as though I had asked the question in a foreign language" does not merely suggest unfamiliarity but untranslatability — "fun" exists in a linguistic register that the student can no longer access. This is not a child who has forgotten how to play; it is a child for whom the category of play has been cognitively eliminated. The horror is not in what the student says but in the fact that she has nothing to say.',
            },
            markScheme: [
              'Analyses persuasive and rhetorical language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language creates concern and positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-10-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on childhood and what children need.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_10_SOURCE_A}\n\nSource B:\n${EXAM_10_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_10_SOURCE_A_REF} | Source B: ${EXAM_10_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers believe children need time to play freely. Morris in Source A argues that modern children are too busy with scheduled activities and have lost "unstructured time." Dickens in Source B shows children who work in factories but still find ways to play when given a chance. Both writers think adults are responsible for the problem — in Source A, parents over-schedule their children, and in Source B, factory owners exploit them. A key difference is that Source B\'s children still have the instinct to play even in terrible conditions, while Source A\'s children seem to have lost that instinct completely. Both writers use specific examples — Morris uses the student who can\'t answer "What do you do for fun?" and Dickens uses the boy with the newspaper kite.',
              'Grade 6-7': 'Both writers share a conviction that play is a fundamental human need, but they arrive at this conclusion from opposite directions and their methods reflect different literary traditions. Morris argues from statistics and professional observation: she quantifies the loss of play ("forty-seven minutes"), catalogues its consequences ("40% increase in childhood anxiety"), and builds a systematic case for institutional failure. Her register is that of the evidence-based commentator, though the article\'s emotional power derives from the devastating specificity of the final anecdote. Dickens argues from sensory description and moral philosophy: the courtyard scene — children playing with "sticks and imagination" — is presented as empirical proof of play\'s indestructibility. The image of the boy running with a non-flying kite, "making the sounds of wind with his mouth, perfectly content," is the passage\'s emotional centre, and its power lies in the contrast between material deprivation and imaginative abundance. The two writers\' closing arguments reveal their fundamental difference. Morris ends with a child who cannot name what she enjoys — the loss of play as cognitive erasure. Dickens concludes with a philosophical declaration: the capacity for play is "a fundamental impulse, as necessary as food or sleep." The implication is provocative when read across the centuries: Dickens\'s Victorian children, exploited and impoverished, retained what Morris\'s privileged contemporary children have lost. The greater threat to childhood is not deprivation but optimisation — not the absence of resources but the absence of freedom.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-10-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-10-q5',
            questionNumber: 5,
            questionText: '"Children today are under more pressure than any previous generation. Schools, parents, and society must do more to protect young people\'s mental health."\n\nWrite a speech to be delivered at a parents\' evening in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech that: addresses the statement and takes a position; uses some rhetorical devices appropriate to speech (direct address to parents, rhetorical questions, repetition); has a clear structure with an engaging opening and a memorable conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted speech that: engages critically with both the claim about pressure and the call for protection; uses techniques appropriate to the spoken form and the specific audience of parents (shared responsibility, emotional appeal, practical suggestions); deploys evidence and examples persuasively; maintains an appropriate register for the setting; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured speech that: offers a nuanced perspective that avoids simplistic blame while maintaining a clear argument; crafts a distinctive voice that balances authority with empathy, appropriate for addressing parents; deploys rhetorical strategies with precision, including effective counter-argument, personal anecdote, and audience engagement; demonstrates extensive vocabulary, varied syntax, and technical virtuosity; creates a genuine sense of shared purpose and urgency.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },
]
