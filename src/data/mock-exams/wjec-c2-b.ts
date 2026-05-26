// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Exam 06 - Health & Medicine
const HEALTH_SOURCE_A = `The NHS is not merely a healthcare system. It is the closest thing we have to a national religion - a shared article of faith that says no one in this country should die because they cannot afford to live. And yet, seventy-five years after its founding, that faith is being tested as never before.

I spent three months embedded in A&E departments across England and Wales, and what I witnessed was not dysfunction but a slow, systemic suffocation. In Swansea, a seventy-two-year-old woman waited nineteen hours on a trolley in a corridor because there were no beds. In Leeds, a junior doctor told me she had worked thirty consecutive hours and could no longer remember whether she had eaten. In Birmingham, a paramedic crew sat in their ambulance outside the hospital for six hours, unable to hand over their patient, while emergency calls stacked up unanswered across the city.

These are not failures of individual commitment. Every doctor, nurse, porter, and receptionist I met was working with a ferocity of purpose that left me humbled and, frankly, frightened - because you cannot sustain that intensity indefinitely. You cannot run a health service on goodwill alone. The staffing shortages, the crumbling infrastructure, the impossible waiting lists - these are political choices disguised as unfortunate circumstances. And until we name them honestly, nothing will change.`

const HEALTH_SOURCE_A_REF = 'Rhian Davies, "The Unravelling", Wales Online, 2024'

const HEALTH_SOURCE_B = `It is a melancholy truth that the hospitals of this country, which ought to be sanctuaries of healing, are too often little better than antechambers of death. I have visited no fewer than seven of the principal infirmaries of the metropolis, and in each I found the same dispiriting catalogue of neglect: wards so overcrowded that patients lie two to a bed; ventilation so inadequate that the very air seems thick with contagion; and a shortage of trained nurses so severe that the sick are left for hours without attention or comfort.

The fault lies not with those who labour within these institutions, for I have seen among them devotion and self-sacrifice of the most extraordinary kind. A nurse at St Thomas's told me that she regularly works from six in the morning until ten at night, with no interval for rest, and that she considers this unremarkable. The fault lies with a system that treats the health of the poor as an afterthought - an expense to be minimised rather than a duty to be honoured.

I am told that reform is impossible, that the costs would be prohibitive, that the public purse cannot bear the burden. I do not believe it. A nation that can afford to maintain the largest navy in the world can afford to ensure that its citizens do not die of diseases that are entirely preventable. What is lacking is not resources but resolve.`

const HEALTH_SOURCE_B_REF = 'Florence Nightingale, Notes on Hospitals (1859)'

// Exam 07 - Environment
const ENV_SOURCE_A = `Last summer, I stood on a beach in Pembrokeshire that I had visited every year since childhood. The rock pools where I had spent hours as a boy, cataloguing crabs and anemones with the obsessive precision of a seven-year-old naturalist, were empty. Not depleted. Not diminished. Empty. The seaweed that had once draped every surface in glistening curtains of brown and green had gone. The water was clear in a way that should have been beautiful but was, in fact, terrifying - the clarity of absence.

Wales has lost 73% of its monitored insect populations since 1990. One in six species in the UK is now at risk of extinction. The hedgehog population has halved in twenty years. These numbers are so large that they become abstract, and abstraction is the enemy of action. So let me make it concrete: the dawn chorus in my village is quieter than it was when I was a child. Not metaphorically. Measurably. Quantifiably. There are fewer birds singing because there are fewer birds, because there are fewer insects, because we have poisoned the soil and paved the meadows and called it progress.

We speak of the environment as though it were something separate from us - a resource to be managed, a backdrop to human activity. It is not. It is the ground beneath our feet, the air in our lungs, the food on our plates. When it dies, we die. This is not ideology. It is biology.`

const ENV_SOURCE_A_REF = 'Gethin Roberts, "Silent Spring, Silent Wales", The New Statesman, 2025'

const ENV_SOURCE_B = `I have been walking in the countryside near my home in the Lake District, and I am bound to say that the changes wrought upon this landscape within my own lifetime fill me with the deepest apprehension. Where once stood ancient woodland - oak and ash and elm, sheltering a thousand forms of life beneath their canopy - there are now bare hillsides, stripped of every tree and given over to sheep that crop the grass to its very roots.

The streams that once ran clear now carry a burden of mud and filth from the denuded hills. The fish that were once so plentiful that a man might catch his supper in half an hour have all but vanished. The red squirrel, which was formerly so common that children regarded it as a pest, is now so rare that its appearance occasions wonder.

I do not pretend to understand the science of these matters, but I know what I see. The land is being exhausted. It is being used without thought for the future, as though its fertility were infinite and its beauty of no account. Our grandchildren will inherit a country that is poorer in every sense - poorer in beauty, poorer in variety, poorer in the simple, sustaining pleasure of a walk through woods that have stood for centuries. And they will ask us, rightly, what we were thinking.`

const ENV_SOURCE_B_REF = 'John Ruskin, Letters to the Working Men of England (1871)'

// Exam 08 - Work & Industry
const WORK_SOURCE_A = `The gig economy was supposed to set us free. That was the promise, anyway - be your own boss, set your own hours, work from anywhere. Silicon Valley sold us a vision of liberation, and millions of us bought it. But freedom, it turns out, looks remarkably like exploitation when you strip away the branding.

I spent six months working as a delivery rider for three different apps simultaneously, and I can tell you exactly what the gig economy looks like from the saddle of a bicycle at eleven o'clock on a rainy Tuesday night: it looks like desperation. My fellow riders - mostly young men, mostly from immigrant backgrounds, mostly without the language skills or legal status to demand anything better - earned an average of £4.80 an hour after expenses. No sick pay. No holiday pay. No pension. No protection of any kind. We were, in the terminology of the platform, "independent contractors." In the terminology of reality, we were disposable.

The app tracked our every movement. It measured our speed, our acceptance rate, our customer ratings. A score below 4.5 meant fewer deliveries. Fewer deliveries meant less money. Less money meant accepting every order, no matter how far, no matter how dangerous the route, no matter that the rain was horizontal and the streets were black with ice. This is not flexibility. It is algorithmic control with a smiley-face interface.`

const WORK_SOURCE_A_REF = 'Priya Sharma, "Pedalling in Circles", The Observer, 2024'

const WORK_SOURCE_B = `I went down into the mine at half-past five in the morning and did not emerge until seven in the evening. In those thirteen and a half hours I saw things that no man who has not witnessed them could readily believe, and that no man who has witnessed them can easily forget.

The passages were so low that I was compelled to crawl on my hands and knees for considerable distances, and in some places to lie flat upon my stomach and drag myself forward by my elbows. The air was thick with coal dust and so hot that within minutes my shirt was soaked through. Children - boys and girls of ten and twelve years of age - worked in these passages, hauling carts of coal by means of chains attached to leather belts around their waists. They worked in darkness, for candles were too expensive to waste on mere haulage, and they worked in silence, for they had long since ceased to find anything remarkable in their condition.

I asked one boy, whose name was Thomas and whose age was eleven, what he wished to be when he grew up. He looked at me with an expression of such blank incomprehension that I realised my question had no meaning for him. There was no "when he grew up." There was only this: the darkness, the dust, the chain, the coal. Today, tomorrow, and every day after until his body failed him.`

const WORK_SOURCE_B_REF = 'Lord Shaftesbury, Report on the Employment of Children in Mines (1842)'

// Exam 09 - Immigration
const IMMIGRATION_SOURCE_A = `My parents came to Cardiff from Somalia in 1998. They arrived with two suitcases, three children under five, and a level of optimism that I now recognise as either extraordinary courage or magnificent delusion. They spoke no Welsh, very little English, and knew precisely no one. My father, who had been an engineer in Mogadishu, took a job washing dishes in a hotel. My mother, who had been a teacher, cleaned offices from five until eight every morning before walking us to school.

I tell you this not to inspire pity - my parents would be mortified - but to establish a simple fact: immigration is not an abstraction. It is not a policy debate or a newspaper headline or a statistic on a graph. It is a human being standing in a kitchen at four in the morning, ironing a school uniform with hands that are raw from bleach, because they believe - with a conviction that borders on the irrational - that this country will give their children opportunities they themselves will never have.

And here is the thing that is almost never said in our increasingly toxic public discourse: they were right. I went to a comprehensive school, then to university, then to law school. My sister is a GP. My brother runs a construction company. We pay our taxes, we vote, we volunteer, we argue about rugby. We are, by any reasonable measure, exactly the kind of citizens that any country would want. And yet the prevailing narrative insists that people like my parents are a problem to be solved rather than an asset to be celebrated.`

const IMMIGRATION_SOURCE_A_REF = 'Amina Hassan, "We Are Here", BBC Wales, 2025'

const IMMIGRATION_SOURCE_B = `The question of immigration is one upon which strong feelings are held on every side, and I do not propose to add to the stock of inflammatory rhetoric that already surrounds it. I wish only to record what I have observed, and to let the facts speak for their own eloquence.

I have spent some weeks among the Irish families who have lately arrived in our city in such numbers, driven from their own country by famine and despair. They are crowded into the courts and alleys of the poorest districts, six or eight families to a house, living in conditions that would disgrace a stable. They are, for the most part, willing and industrious people who ask for nothing but the opportunity to work. I have seen men queue from before dawn at the factory gates, waiting in silence and in cold for the chance of a day's labour at wages that an Englishman would scorn.

And yet they are met with hostility at every turn. They are told they steal English jobs, though they take only the work that no Englishman will do. They are told they are dirty and diseased, though their squalor is the consequence of the housing we provide them. They are told they are a burden upon the parish, though they work harder and for less than any native-born labourer I have encountered. The prejudice against them is deep and general, and it is sustained not by evidence but by the ancient human instinct to fear what is unfamiliar.`

const IMMIGRATION_SOURCE_B_REF =
  'Friedrich Engels, The Condition of the Working Class in England (1845)'

// Exam 10 - Childhood
const CHILDHOOD_SOURCE_A = `We are raising the most protected and the most anxious generation in human history, and these two facts are not unrelated. In our determination to keep children safe from every conceivable danger - from strangers, from traffic, from germs, from failure, from boredom, from the unsupervised outdoors - we have inadvertently created a generation that does not know how to assess risk, tolerate discomfort, or entertain itself without a screen.

I am a secondary school teacher in Newport, and I have watched this transformation unfold over fifteen years. The children who arrive in Year 7 today are qualitatively different from those who arrived in 2010. They are more anxious, more risk-averse, and more dependent on adult intervention. They cannot resolve playground disputes without a teacher. They cannot cope with a low mark without their parents emailing the headteacher. They have been so thoroughly bubble-wrapped that the ordinary challenges of adolescence - rejection, competition, boredom, physical discomfort - hit them like a truck.

The statistics confirm what every teacher already knows. Referrals to CAMHS have increased by 353% in a decade. One in six children aged five to sixteen now has a probable mental health disorder. Self-harm among teenage girls has tripled since 2010. We have tried to eliminate suffering from childhood, and we have produced suffering on an industrial scale.`

const CHILDHOOD_SOURCE_A_REF = 'David Pritchard, "The Fragile Generation", TES Cymru, 2025'

const CHILDHOOD_SOURCE_B = `The children of the poor have no childhood. This is a plain statement of fact which admits of no qualification and requires no elaboration, though I shall provide both. From the moment they are old enough to be of use - which is to say, from the age of five or six - they are put to work. They mind babies, they sweep crossings, they pick oakum, they sell matches, they beg. Their days are not divided, as ours are, into periods of work and periods of play; for them, there is only work, punctuated by sleep.

I watched a girl of perhaps eight years tending her infant brother in a doorway off Drury Lane. She held him with a competence that was at once impressive and heartbreaking - the competence of someone who has never had the luxury of being incompetent. She fed him from a bottle, wiped his face, sang to him in a voice so quiet I had to strain to hear it. When I asked her name, she regarded me with the wary, appraising look of someone who has learned early that adults are not to be trusted.

"Mary," she said, after a pause long enough to suggest that she was considering whether to tell me the truth.

I asked whether she went to school. She smiled at this, as at an excellent joke, and shook her head. I asked what she did all day. "I mind the baby," she said, "and when he sleeps, I mind myself." It was the most economical description of a childhood I have ever heard, and the saddest.`

const CHILDHOOD_SOURCE_B_REF =
  'Charles Dickens, "A Walk Through the Workhouse", Household Words (1850)'

// ─── Exam Papers ────────────────────────────────────────────────────────────

export const wjecC2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 06 - Health & Medicine
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-06',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-06-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-06-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about the NHS (Source A).\n\nList five things you learn about the current state of the health service from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. A seventy-two-year-old woman waited nineteen hours on a trolley in Swansea. 2. A junior doctor in Leeds worked thirty consecutive hours. 3. A paramedic crew in Birmingham waited six hours outside hospital to hand over a patient. 4. There are staffing shortages across the NHS. 5. The infrastructure is crumbling.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-06-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to convey her feelings about the state of the NHS?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${HEALTH_SOURCE_A}`,
            extractSource: HEALTH_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "national religion" to show how important the NHS is to people. The phrase "slow, systemic suffocation" uses alliteration to emphasise how the service is being strangled. Specific examples like "nineteen hours on a trolley" shock the reader. The phrase "political choices disguised as unfortunate circumstances" shows her anger at the government.',
              'Grade 6-7':
                'Davies constructs a rhetorical architecture that moves from reverence to outrage. The opening metaphor - "the closest thing we have to a national religion" - elevates the NHS to sacred status, making its decline feel like desecration. The sustained metaphor of suffocation ("slow, systemic suffocation") uses sibilant alliteration to create an auditory sense of breath being squeezed out. The tricolon of case studies progresses through geography (Swansea, Leeds, Birmingham) but also through emotional register: from sympathy to admiration to systemic horror. The modifier "ferocity" applied to "purpose" is deliberately paradoxical - violence in the service of care - capturing the impossible demands placed on staff. The final sentence\'s antithesis - "political choices disguised as unfortunate circumstances" - strips away euphemism to expose culpability, with the verb "disguised" implying deliberate deception.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-06-q3',
            questionNumber: 3,
            questionText: `What do you learn about the problems facing healthcare from Source B?\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${HEALTH_SOURCE_B}`,
            extractSource: HEALTH_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that hospitals were overcrowded, with patients sharing beds. Ventilation was so poor the air felt thick with disease. There was a severe shortage of trained nurses. Nurses worked extremely long hours, from six in the morning until ten at night. The writer argues that the government could afford reform but lacked the will.',
              'Grade 6-7':
                'Nightingale reveals that Victorian hospitals were characterised by systematic neglect rather than isolated failure. The overcrowding was structural - "patients lie two to a bed" - suggesting not temporary pressure but permanent inadequacy. The description of air "thick with contagion" reveals understanding of disease transmission that anticipates germ theory. The nurse at St Thomas\'s who "considers this unremarkable" demonstrates how exploitation becomes normalised through institutional culture. Most significantly, Nightingale frames the problem as one of political priority: the comparison between naval expenditure and healthcare investment exposes a hierarchy of values in which military power outranks human wellbeing. Her rhetoric shifts from observation to moral argument, from "I have seen" to "I do not believe it," marking her transition from witness to advocate.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-06-q4',
            questionNumber: 4,
            questionText: `"Both writers feel passionately about healthcare, but the 21st-century writer is more effective because she uses real evidence rather than emotional appeals."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${HEALTH_SOURCE_A}\n\nSource B:\n${HEALTH_SOURCE_B}`,
            extractSource: `Source A: ${HEALTH_SOURCE_A_REF} | Source B: ${HEALTH_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "I partially agree. Davies uses powerful real-life examples like the woman on a trolley and the exhausted doctor, which are very convincing. However, Nightingale also uses real evidence from her visits to hospitals. Both writers combine facts with emotional language. Nightingale's comparison between navy spending and healthcare is a strong logical argument. I think both are effective in different ways.",
              'Grade 6-7':
                'The statement presents a false dichotomy. Both writers blend empirical evidence with emotional rhetoric, though their methods reflect their respective eras. Davies\'s "evidence" - the nineteen-hour wait, the thirty-hour shift - functions as testimony rather than data, and her most powerful moments are metaphorical ("slow, systemic suffocation") rather than statistical. Nightingale, conversely, deploys remarkably precise observation ("twelve feet by ten," "two to a bed") that constitutes the evidence-gathering methodology of her era. The real distinction is structural: Davies moves from sacred metaphor ("national religion") to secular outrage, while Nightingale moves from empirical witness to moral imperative. Davies implicates the reader through proximity; Nightingale appeals to national pride. Both are effective, but for different audiences: Davies addresses a public already sympathetic to the NHS, while Nightingale must first persuade her readers that the health of the poor matters at all.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-06-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-06-q5',
            questionNumber: 5,
            questionText: `You have been asked to write a contribution to a health awareness booklet aimed at teenagers.\n\nWrite an informative text explaining why mental health is just as important as physical health.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear informative text with: appropriate tone for teenagers; relevant points about mental health; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured informative piece with: engaging tone; well-developed explanations; consistent accuracy and varied vocabulary.',
              'Grade 8-9':
                'A compelling and authoritative text with: sophisticated awareness of audience; nuanced exploration of the topic; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-06-q6',
            questionNumber: 6,
            questionText: `"The government should make physical exercise compulsory for all citizens."\n\nWrite a speech for a debate arguing either for or against this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A speech with: clear position; some persuasive techniques; appropriate form with address to audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sustained argument; effective rhetorical devices; convincing counter-arguments addressed; consistent accuracy.',
              'Grade 8-9':
                'An outstanding speech with: commanding voice; sophisticated reasoning; masterful use of rhetorical techniques; technical precision throughout.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 07 - Environment
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-07',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-07-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-07-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about the environment (Source A).\n\nList five things you learn about environmental decline from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Rock pools in Pembrokeshire that used to be full of life are now empty. 2. Wales has lost 73% of its monitored insect populations since 1990. 3. One in six species in the UK is at risk of extinction. 4. The hedgehog population has halved in twenty years. 5. The dawn chorus is quieter than it used to be.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-07-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to make the reader feel concerned about the environment?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${ENV_SOURCE_A}`,
            extractSource: ENV_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the phrase "the clarity of absence" to show that the empty rock pools are frightening, not beautiful. The triple repetition of "Not depleted. Not diminished. Empty" builds up to a shocking final word. Statistics like "73%" make the problem feel real and urgent. The personal memory of childhood makes the reader feel sad about what has been lost.',
              'Grade 6-7':
                'Roberts employs a strategy of defamiliarisation: what should be positive - clear water, quiet mornings - is reframed as evidence of catastrophe. The tricolon "Not depleted. Not diminished. Empty" uses successive negation to reject euphemism before arriving at the brutal monosyllable. The oxymoron in "clarity of absence" transforms visual beauty into existential horror. The shift from personal anecdote to statistics to direct address ("the air in our lungs") creates a rhetorical funnel that narrows from the particular to the universal. The adverbial triplet "Measurably. Quantifiably" following "Not metaphorically" aggressively pre-empts dismissal by insisting on empirical rather than emotional truth. The closing sentences deploy the starkest possible syntax - "When it dies, we die" - reducing ecological complexity to primal cause and effect. The final antithesis - "This is not ideology. It is biology" - claims scientific authority while performing a deeply rhetorical manoeuvre.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-07-q3',
            questionNumber: 3,
            questionText: `What do you learn about environmental damage from Source B?\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${ENV_SOURCE_B}`,
            extractSource: ENV_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that ancient woodland has been destroyed and replaced with bare hillsides for sheep farming. Streams that were once clear now carry mud. Fish have almost disappeared from the rivers. The red squirrel has become extremely rare. Ruskin believes the land is being used up without any thought for the future.',
              'Grade 6-7':
                'Ruskin reveals a landscape undergoing systematic degradation driven by agricultural exploitation. The progression from woodland to "bare hillsides" represents ecological simplification - complex ecosystems reduced to monoculture. The streams "carry a burden of mud and filth" - the personifying noun "burden" suggests the waterways themselves suffer. The red squirrel\'s transformation from "pest" to wonder charts a reversal that encapsulates the broader narrative of loss. Most significantly, Ruskin identifies an economic logic behind the destruction: the land is "used without thought for the future, as though its fertility were infinite." This critique of short-term exploitation anticipates modern sustainability discourse. His final appeal to intergenerational responsibility - "our grandchildren will inherit" - frames environmental destruction as a moral debt passed to those who had no part in incurring it.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-07-q4',
            questionNumber: 4,
            questionText: `"Both writers are alarmed by environmental destruction, but the modern writer communicates more urgency because he uses scientific evidence."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${ENV_SOURCE_A}\n\nSource B:\n${ENV_SOURCE_B}`,
            extractSource: `Source A: ${ENV_SOURCE_A_REF} | Source B: ${ENV_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partially agree. Roberts uses statistics like "73%" and "one in six species" which give a scientific feel and make the problem seem undeniable. However, Ruskin is also effective even without statistics - his detailed descriptions of lost wildlife and ruined streams create powerful images. Both writers use personal experience to make their points convincing. Ruskin\'s appeal to future generations is very effective emotionally.',
              'Grade 6-7':
                'The statement overstates the role of "scientific evidence" in Roberts\'s rhetoric. His most powerful moments are not statistical but sensory: the empty rock pools, the quiet dawn chorus. Statistics are used strategically - "73%" establishes scale - but the emotional force comes from the personal, the particular, the remembered. Ruskin, meanwhile, explicitly disclaims scientific knowledge ("I do not pretend to understand the science") yet his methodology is essentially empirical: careful observation, comparison over time, inference from evidence. Both writers construct authority through witness rather than expertise. The real difference in urgency is temporal: Roberts writes from a position of accumulated data showing irreversible loss, while Ruskin writes as degradation is still in progress. Roberts\'s urgency comes from knowing the scale of what has been lost; Ruskin\'s comes from watching it happen in real time. Both are compelling, but they demand different responses: Roberts requires systemic action; Ruskin requires a change of values.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-07-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-07-q5',
            questionNumber: 5,
            questionText: `Your local council is considering building new houses on green belt land near your school.\n\nWrite a letter to the council expressing your views on this proposal.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear formal letter with: appropriate conventions; a range of relevant points; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured letter with: confident formal register; persuasive argument with evidence; consistent accuracy.',
              'Grade 8-9':
                'A sophisticated letter with: commanding authoritative voice; nuanced reasoning balancing multiple perspectives; flawless technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-07-q6',
            questionNumber: 6,
            questionText: `"Young people care more about the environment than any previous generation, yet they are the least willing to make personal sacrifices to protect it."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A newspaper article with: appropriate headline and structure; clear argument; relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging headline; sustained and developed argument; effective use of evidence; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: arresting headline; sophisticated and nuanced argument; masterful control of tone and register; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 08 - Work & Industry
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-08',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-08-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-08-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about the gig economy (Source A).\n\nList five things you learn about working conditions for delivery riders from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. Riders earned an average of £4.80 an hour after expenses. 2. They received no sick pay, holiday pay, or pension. 3. The riders were mostly young men from immigrant backgrounds. 4. The app tracked their every movement. 5. A customer rating below 4.5 meant fewer deliveries.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-08-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to criticise the gig economy?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${WORK_SOURCE_A}`,
            extractSource: WORK_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses sarcasm in "be your own boss" to mock the promises of the gig economy. The word "disposable" shows how little the workers are valued. The contrast between "independent contractors" and reality highlights the dishonesty of the companies. The description of riding "on a rainy Tuesday night" makes the reader feel sympathy for the workers.',
              'Grade 6-7':
                'Sharma constructs her critique through systematic exposure of linguistic deception. The opening paragraph ventriloquises Silicon Valley\'s rhetoric - "set us free," "be your own boss" - before the devastating pivot: "freedom, it turns out, looks remarkably like exploitation when you strip away the branding." The noun "branding" functions doubly, referencing both marketing and the literal marking of ownership. The juxtaposition of corporate terminology ("independent contractors") against Sharma\'s own blunt lexis ("disposable") enacts the gap between rhetoric and reality that is her central argument. The final paragraph\'s description of algorithmic control - tracking, measuring, scoring - uses the vocabulary of surveillance to reframe "flexibility" as panopticism. The closing metaphor "algorithmic control with a smiley-face interface" brilliantly encapsulates the gig economy\'s defining contradiction: totalitarian power dressed in the visual language of friendliness.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-08-q3',
            questionNumber: 3,
            questionText: `What do you learn about working conditions in the mines from Source B?\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${WORK_SOURCE_B}`,
            extractSource: WORK_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that the mine passages were so low that people had to crawl or lie flat. The air was thick with coal dust and very hot. Children as young as ten worked in the mines, hauling carts of coal with chains. They worked in complete darkness to save money on candles. A boy called Thomas, aged eleven, could not imagine any future beyond the mine.',
              'Grade 6-7':
                'Shaftesbury reveals a working environment that systematically dehumanises its workers. The physical conditions - passages requiring crawling, air "thick with coal dust" - reduce adult men to animals and children to machines. The detail of chains attached to leather belts literalises the metaphor of industrial slavery. The deprivation of light ("candles were too expensive") demonstrates how economic logic overrides basic human needs. Most powerfully, Thomas\'s "blank incomprehension" at the question about his future reveals not merely poverty but the obliteration of possibility itself. Shaftesbury\'s rhetoric relies on understatement and precise observation rather than overt commentary: the horror speaks for itself. The final sentence\'s repetitive structure - "the darkness, the dust, the chain, the coal" - creates a verbal equivalent of the monotonous, inescapable cycle of the boy\'s existence.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-08-q4',
            questionNumber: 4,
            questionText: `"Both writers expose the exploitation of workers, but the 19th-century source is more shocking because the workers are children."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${WORK_SOURCE_A}\n\nSource B:\n${WORK_SOURCE_B}`,
            extractSource: `Source A: ${WORK_SOURCE_A_REF} | Source B: ${WORK_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I agree that child labour is more shocking, because children should be protected. Thomas\'s story is heartbreaking. However, Sharma also shows exploitation of vulnerable people - immigrants who cannot demand better treatment. Both texts show workers being treated as less than human. The gig economy riders are "disposable" and the child miners work "in darkness." Both are powerful in different ways.',
              'Grade 6-7':
                "The statement assumes that the identity of the victim determines the power of the exposé. While the exploitation of children in Source B is undeniably harrowing, Source A's power lies in a different kind of shock: the recognition that exploitation has not been eliminated but merely rebranded. Shaftesbury's mine is visibly barbaric - the horror is on the surface. Sharma's gig economy is insidious precisely because it looks like freedom. The child miners are chained; the delivery riders are tracked by algorithms. Both are controlled, but the modern mechanism disguises itself as choice. Shaftesbury's Thomas cannot imagine a future; Sharma's riders were promised one that turned out to be a lie. The 19th-century text shocks through extremity; the 21st-century text shocks through proximity - this is happening now, on our streets, delivering our food. Both writers use individual stories to humanise systemic exploitation, but the rhetorical stakes differ: Shaftesbury demands new legislation; Sharma demands that we examine our own complicity.",
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-08-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-08-q5',
            questionNumber: 5,
            questionText: `Your school is running a careers week. You have been asked to write an information sheet for Year 11 students about preparing for the world of work.\n\nWrite an informative text advising students on how to prepare for employment.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear informative text with: appropriate form and register; practical advice; generally accurate SPaG.',
              'Grade 6-7':
                'A well-organised text with: engaging and authoritative tone; well-developed points with examples; consistent accuracy.',
              'Grade 8-9':
                'A compelling and polished text with: sophisticated awareness of audience; original insights; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-08-q6',
            questionNumber: 6,
            questionText: `"Technology is destroying more jobs than it creates. Within twenty years, most people will be unable to find meaningful work."\n\nWrite the text of a speech for a school debate in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A speech with: clear position; some persuasive techniques; appropriate form with address to audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sustained argument; effective rhetorical devices; convincing counter-arguments addressed; consistent accuracy.',
              'Grade 8-9':
                'An outstanding speech with: commanding voice; sophisticated reasoning; masterful use of rhetorical techniques; technical precision throughout.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 09 - Immigration
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-09',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-09-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-09-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about immigration (Source A).\n\nList five things you learn about the writer's family and their experience of immigration.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. The writer's parents came to Cardiff from Somalia in 1998. 2. They arrived with two suitcases and three children under five. 3. The father had been an engineer but took a job washing dishes. 4. The mother cleaned offices from five until eight every morning. 5. The writer went to university and then law school.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-09-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to challenge negative attitudes towards immigration?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}`,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses personal details to make immigration real, like "ironing a school uniform with hands that are raw from bleach." The list of what her family contributes - "We pay our taxes, we vote, we volunteer" - counters negative stereotypes. Calling the public debate "toxic" shows her frustration. The phrase "a problem to be solved rather than an asset to be celebrated" directly challenges negative views.',
              'Grade 6-7':
                'Hassan deploys a two-stage rhetorical strategy: humanisation followed by confrontation. The opening paragraph\'s accumulation of specific detail - "two suitcases, three children under five" - transforms "immigration" from political abstraction to embodied experience. The parenthetical self-correction "either extraordinary courage or magnificent delusion" establishes a voice that is wry, intelligent, and self-aware, preemptively disarming the reader\'s defences. The image of ironing "with hands that are raw from bleach" is a deliberate counter-narrative: not the immigrant as burden but as sacrifice. The second paragraph\'s shift to the present tense and first-person plural - "We pay our taxes, we vote, we volunteer, we argue about rugby" - insists on belonging through the everyday. The inclusion of rugby is culturally precise, claiming Welsh identity specifically. The concluding antithesis - "a problem to be solved rather than an asset to be celebrated" - exposes the framing bias of public discourse with surgical economy.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-09-q3',
            questionNumber: 3,
            questionText: `What do you learn about the experiences of Irish immigrants from Source B?\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: IMMIGRATION_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                "You learn that Irish immigrants were driven to England by famine. They lived in extremely overcrowded conditions, with six or eight families to a house. They were willing to work hard and queued from before dawn for the chance of a day's labour. They were met with hostility and accused of stealing jobs. The prejudice against them was based on fear rather than evidence.",
              'Grade 6-7':
                'Engels reveals a community trapped between desperation and prejudice. The immigrants are "driven" - the passive construction removing agency and emphasising compulsion. Their living conditions ("six or eight families to a house") parallel the overcrowding they fled, suggesting that displacement merely exchanges one form of suffering for another. Engels carefully establishes their moral credentials: they are "willing and industrious" and they "queue from before dawn," demonstrating a work ethic that contradicts the stereotypes levelled against them. His rhetorical strategy involves systematic dismantling of each prejudice: they "steal" jobs no one else wants; their "squalor" is caused by the housing they are given; they "burden" the parish less than native workers. The final sentence elevates the analysis from the particular to the anthropological: prejudice is sustained "not by evidence but by the ancient human instinct to fear what is unfamiliar," locating xenophobia in human nature rather than rational assessment.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-09-q4',
            questionNumber: 4,
            questionText: `"Both writers defend immigrants, but the 21st-century writer is more persuasive because she writes from personal experience."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `Source A: ${IMMIGRATION_SOURCE_A_REF} | Source B: ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "I partially agree. Hassan's personal story is very powerful because it gives a real example of successful immigration. However, Engels also uses vivid details from his observations, like men queuing in the cold before dawn. Both writers challenge prejudice effectively. Hassan makes the reader feel personally connected, while Engels uses logical arguments to dismantle stereotypes.",
              'Grade 6-7':
                'Personal experience gives Hassan\'s text emotional immediacy but also risks being dismissed as anecdotal - and she knows this, which is why she explicitly states "I tell you this not to inspire pity." Her persuasive power lies not in the personal story itself but in the gap between that story and the "prevailing narrative," which she forces the reader to confront. Engels, writing as an outsider observer, possesses a different authority: the authority of the disinterested witness. His systematic dismantling of each accusation - jobs, cleanliness, dependency - has the structure of a legal defence, and his concluding appeal to "the ancient human instinct to fear" universalises the argument beyond any specific immigrant group. The texts are complementary rather than competitive: Hassan provides the human face that makes us care; Engels provides the analytical framework that explains why we need to. The most persuasive case for immigration would use both.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-09-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-09-q5',
            questionNumber: 5,
            questionText: `Your school is organising a cultural diversity week. You have been asked to write a text for the school website.\n\nWrite an informative and engaging text explaining why cultural diversity benefits a school community.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear website text with: appropriate register for school audience; relevant ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted text with: engaging opening; thoughtful exploration of benefits; consistent accuracy and varied expression.',
              'Grade 8-9':
                'A sophisticated text with: compelling voice; nuanced argument that avoids cliché; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-09-q6',
            questionNumber: 6,
            questionText: `"Britain has a moral duty to accept refugees, regardless of the economic cost."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A newspaper article with: appropriate headline and structure; clear argument; relevant examples; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging headline; sustained and balanced argument; effective use of evidence; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: arresting headline; sophisticated reasoning that engages with complexity; masterful control of tone; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 10 - Childhood
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-10',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-10-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-10-q1',
            questionNumber: 1,
            questionText: `Read the 21st-century source text about modern childhood (Source A).\n\nList five things you learn about how childhood has changed from this text.`,
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. Today's children are the most protected and most anxious generation in history. 2. Children arriving in Year 7 are more anxious and risk-averse than those in 2010. 3. They cannot resolve playground disputes without a teacher. 4. Referrals to CAMHS have increased by 353% in a decade. 5. Self-harm among teenage girls has tripled since 2010.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c2-10-q2',
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to convey his concerns about modern childhood?\n\nYou should comment on specific words and phrases and the effects they create. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}`,
            extractSource: CHILDHOOD_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the metaphor "bubble-wrapped" to show that children are overprotected. The phrase "hit them like a truck" creates a violent image to show how unprepared they are. The list of things they are protected from - "strangers, from traffic, from germs, from failure, from boredom" - shows how extreme the protection has become. The final sentence uses irony: trying to eliminate suffering has created more suffering.',
              'Grade 6-7':
                'Pritchard constructs his argument through a series of paradoxes that expose the unintended consequences of well-meaning parenting. The opening sentence yokes "most protected" and "most anxious" in deliberate juxtaposition, with "these two facts are not unrelated" employing litotes to understate a causal relationship the reader must infer. The catalogue of dangers - "strangers, from traffic, from germs, from failure, from boredom, from the unsupervised outdoors" - escalates from genuine threats to absurd ones, the anaphoric "from" creating a suffocating rhythm that mimics overprotection itself. "Bubble-wrapped" reduces children to fragile objects, while "hit them like a truck" deploys violent vehicular imagery that suggests not gradual difficulty but sudden, devastating collision. The statistical triplet in the final paragraph - "353%," "one in six," "tripled" - creates an evidence base, but the closing sentence delivers the rhetorical coup de grâce: "eliminate suffering... produced suffering on an industrial scale." The paradox is made complete; the metaphor "industrial scale" implies mass production of the very thing society sought to prevent.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-c2-10-q3',
            questionNumber: 3,
            questionText: `What do you learn about the lives of poor children in the 19th century from Source B?\n\nYou must refer to the text to support your answer. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: `Source B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: CHILDHOOD_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'You learn that poor children had no real childhood and were put to work from the age of five or six. They did various jobs like minding babies, sweeping crossings, and selling matches. A girl of about eight was looking after her baby brother with adult-level skill. She did not go to school. Her entire day was spent caring for the baby or looking after herself.',
              'Grade 6-7':
                'Dickens reveals a world in which childhood as a distinct phase of life simply does not exist for the poor. The opening declarative - "The children of the poor have no childhood" - is deliberately absolute, refusing qualification. The catalogue of child labour ("mind babies... sweep crossings... pick oakum... sell matches... beg") presents exploitation as varied and normalised. Mary embodies this erasure: her "competence" in caring for her brother is simultaneously "impressive and heartbreaking," a paradox that captures how deprivation accelerates capability at the cost of innocence. Her "wary, appraising look" reveals learned distrust of adults - childhood vulnerability replaced by survival instinct. The most devastating detail is linguistic: "I mind the baby, and when he sleeps, I mind myself." The repetition of "mind" - meaning both "look after" and "attend to" - reduces an entire childhood to two activities, neither of which involves play, education, or joy. Dickens calls it "the most economical description of a childhood" - the adjective "economical" resonating with the poverty that produced it.',
            },
            markScheme: [
              'Identifies key information from the text',
              'Selects appropriate evidence',
              'Makes valid inferences',
              'Shows clear understanding of implicit meaning',
            ],
          },
          {
            id: 'wjec-c2-10-q4',
            questionNumber: 4,
            questionText: `"Both writers are concerned about children, but their concerns are so different that the texts cannot meaningfully be compared."\n\nTo what extent do you agree with this statement? You must refer to both Source A and Source B in your answer. [15]`,
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${CHILDHOOD_SOURCE_A}\n\nSource B:\n${CHILDHOOD_SOURCE_B}`,
            extractSource: `Source A: ${CHILDHOOD_SOURCE_A_REF} | Source B: ${CHILDHOOD_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "I disagree. Although the specific problems are different - overprotection versus poverty - both writers are concerned about children being denied a proper childhood. Pritchard's children are anxious because they are too sheltered; Dickens's children have no childhood at all. Both writers believe that adults are failing children, just in different ways. The texts can be compared because the underlying concern is the same.",
              'Grade 6-7':
                "I strongly disagree with the statement. The texts are not only comparable but illuminate each other in revealing ways. Both writers identify a failure to provide children with what they need: Dickens's children lack protection; Pritchard's have too much. Both describe childhoods defined by absence - Mary has no play, no school, no freedom; Pritchard's students have no risk, no independence, no resilience. The structural parallel is precise: in both cases, adult society has imposed conditions on children that serve adult needs rather than children's development. Victorian parents needed child labour; modern parents need the reassurance of safety. The comparison also reveals an uncomfortable irony: we have moved from a society that gave children no protection to one that gives them nothing but protection, and neither produces flourishing. Dickens's Mary \"minds herself\" because no one else will; Pritchard's students cannot mind themselves because everyone else does. The texts together suggest that healthy childhood requires a balance between safety and autonomy that neither era has achieved.",
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-10-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 60 minutes on this section. You should divide your time equally between the two tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-10-q5',
            questionNumber: 5,
            questionText: `A parents' group has asked your school to ban mobile phones during the school day.\n\nWrite a report for the headteacher outlining the arguments for and against this proposal.\n\n[16]`,
            marks: 16,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear report with: appropriate formal conventions; arguments on both sides; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured report with: clear subheadings and formal register; balanced and well-evidenced arguments; consistent accuracy.',
              'Grade 8-9':
                'A polished report with: professional presentation; sophisticated analysis of competing perspectives; technical precision.',
            },
            markScheme: [
              'Communication & Organisation (10 marks): Purpose, audience, form, structure',
              'Writing Accurately (6 marks): Sentence variety, vocabulary, SPaG',
            ],
          },
          {
            id: 'wjec-c2-10-q6',
            questionNumber: 6,
            questionText: `"Children today have it too easy. They need to experience hardship to build character."\n\nWrite a speech for a school assembly in which you argue your point of view on this statement.\n\n[24]`,
            marks: 24,
            suggestedTimeMinutes: 35,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A speech with: clear position; some persuasive techniques; appropriate form with address to audience; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sustained and nuanced argument; effective rhetorical devices; awareness of counter-arguments; consistent accuracy.',
              'Grade 8-9':
                'An outstanding speech with: compelling voice that balances authority and empathy; sophisticated engagement with the complexity of the statement; technical mastery.',
            },
            markScheme: [
              'Communication & Organisation (14 marks): Purpose, audience, form, voice, structure, paragraphing',
              'Writing Accurately (10 marks): Sentence variety, vocabulary range, SPaG',
            ],
          },
        ],
      },
    ],
  },
]
