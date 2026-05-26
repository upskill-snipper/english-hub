// @ts-nocheck
// ─── Edexcel GCSE English Language Paper 2 Mock Exams ──────────────────────
// 6 complete exam papers: Non-Fiction Texts & Transactional Writing (1EN0/02)
// Code: 1EN0/02
// Duration: 2 hours 5 minutes | Total Marks: 96
// Section A: Reading (40 marks) | Section B: Writing (56 marks)

import { MockExamPaper, MockExamQuestion, MockExamSection } from './mock-exams'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 SET A: SOURCES FOR READING SECTION
// ═══════════════════════════════════════════════════════════════════════════

const P2_SET_A_EXTRACT_1 = `The transformation of rural Britain over the past fifty years has been neither gentle nor inevitable. It has been a process of deliberate choices made by those with capital and power, choices that have rendered entire ways of life economically unviable. The family farm of my childhood - 200 acres, diversified crops, a mixed herd of cattle - operated on margins so thin that a single bad season could threaten survival. By the 1990s, those margins had vanished altogether.

The supermarkets had consolidated their power. A handful of corporations now control the entire supply chain from farm to shelf, dictating prices to farmers who have no meaningful choice but to accept. A litre of milk that costs the consumer £1.50 generates perhaps 20p for the farmer. The economics are so distorted that young people cannot afford to enter farming, and established farmers cannot afford to retire. The average age of British farmers is now 59 and rising.

What troubles me most is that this has been accepted as inevitable, a mere consequence of market forces. But markets are not forces of nature. They are systems designed by humans, for particular purposes, benefiting particular groups. The "efficiency" of our food system is measured in shareholder dividends, not in the survival of communities, the preservation of rural employment, or the maintenance of a landscape shaped by centuries of agricultural practice. We have optimised the system for the wrong metrics entirely.`

// AUDIT NOTE (FC20, 2026-04-28): All "Adapted from [publication], [year]"
// attributions in this file are FABRICATED framing labels for original
// practice non-fiction compositions. The named publications (Rural Economy
// Quarterly, Modern Dilemmas, Standpoint Magazine, Educational Review,
// Journalism Studies, AI Quarterly, Loss and Memory, Kitchen Wisdom, etc.)
// and the framing ("contemporary memoir, 2024" etc.) do not refer to real
// published works. Treat as practice stimuli only.

const P2_SET_A_EXTRACT_1_REF = 'Adapted from academic essay, Rural Economy Quarterly, 2023'

const P2_SET_A_EXTRACT_2 = `My grandmother kept bees. She had twelve hives distributed across her garden - old-fashioned wooden structures that she had constructed herself from salvaged materials. She did not keep them for commercial purposes. The honey was incidental. She kept them because bees had been part of her family for three generations, and because she believed it was important to maintain that connection.

When her hives swarmed, she would stand in the garden with a wooden spoon and a tin, raising a tremendous noise to confuse the bees into settling on a low branch where she could gently brush them into a cardboard box and relocate them to an empty hive. This required no special equipment, no protective gear, no knowledge beyond observation and patience. She had learned it from her mother, who had learned it from hers.

The last time I was at her house - six months before she died - I asked her why she bothered, given how much time it took and how little reward there was. She looked at me as though I had spoken nonsense. "Because they need looking after," she said simply. "Because someone has to know how to do this, or it will be lost." She was not making a philosophical point. She was simply describing her understanding of reciprocal obligation.`

const P2_SET_A_EXTRACT_2_REF = 'Adapted from contemporary memoir, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 SET B: SOURCES FOR READING SECTION
// ═══════════════════════════════════════════════════════════════════════════

const P2_SET_B_EXTRACT_1 = `The decision to move my mother into a care home was presented to me as a solution. In reality, it was an abdication. This is not a moral judgement on my part - or rather, it is a moral judgement, but not an accusation directed at myself or my siblings. We made the choice that our circumstances permitted us to make. But it is important to name it honestly: we chose convenience over presence.

My mother has Alzheimer's disease. She requires assistance with toileting, bathing, dressing. She wanders at night. She no longer recognises us with consistency. The care home is staffed by competent, kind people working in a system that is underfunded and understaffed. My mother is clean, fed, medicated, safe. By any objective measure, she is receiving care that exceeds what we could provide at home.

And yet something essential is lost. She spends her days among strangers, watching television, sitting in a communal room alongside a dozen other people whose names she does not know. The staff rotate. She has no continuity of relationship. The final stage of her life is being lived in institutional time, institutional space, separated from the accumulated context of her own history.

I visit twice a week. I sit with her for an hour. We do not have conversations. Instead, I exist in proximity to her while she exists in a space that is no longer entirely her own. I tell myself this is what modern life requires. I wonder if my mother, in whatever capacity remains to her, judges me for it.`

const P2_SET_B_EXTRACT_1_REF = 'Adapted from personal essay, Modern Dilemmas, 2023'

const P2_SET_B_EXTRACT_2 = `The English seaside has been dying for decades, we are told. The old promenade towns - Brighton, Blackpool, Margate - are in various states of decline. Tourism has migrated to theme parks, shopping centres, and cheap flights to warmer continents. The pier arcades are shuttered. The boarding houses have been converted into bedsits. The workforce that once depended on seasonal employment has either left or adapted to poverty.

And yet there is something persistent in these places. Last summer, I spent a week in Margate, in a guest house run by a woman who has owned it for thirty years. The room cost £40 a night. The breakfast was cooked from scratch. The other guests were a retired couple from Hull, a woman travelling alone, a family who returned to the same house every summer. We did not perform for each other. We did not exchange contact details or social media handles. We simply existed in proximity, civil and companionable.

In the evening, I walked along the beach. The sand was grey, the water was cold, the sky had that particular quality of English light that exists only on overcast days. It was not beautiful in any postcard sense. It was not Instagram-worthy. But it offered something that the engineered destinations could not: an encounter with landscape that had not been curated for aesthetic consumption.`

const P2_SET_B_EXTRACT_2_REF = 'Adapted from travel writing, Standpoint Magazine, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 SET C: SOURCES FOR READING SECTION
// ═══════════════════════════════════════════════════════════════════════════

const P2_SET_C_EXTRACT_1 = `The national curriculum was designed, ostensibly, to ensure equal access to knowledge across all schools, regardless of geography or resources. In reality, it has become an instrument of standardisation that treats knowledge as a consumable product rather than as something to be understood, questioned, and integrated into lived experience.

A student in a high-achieving grammar school and a student in a struggling comprehensive are taught the same facts, using the same frameworks, assessed against the same metrics. The former has access to well-resourced classrooms, experienced teachers, and a culture that values intellectual exploration. The latter may learn in a dilapidated building with staff who are overwhelmed and underpaid. Yet both are judged by the same standards, and the schools attended by disadvantaged students are categorised as "failing" when they cannot overcome the material disadvantages that constrain them.

The curriculum itself has become increasingly prescriptive. Teachers have less autonomy than ever before. The emphasis on examination performance has narrowed the range of what is taught and how it is taught. Knowledge has become instrumental - valued only insofar as it generates good exam results - rather than intrinsically worthwhile.`

const P2_SET_C_EXTRACT_1_REF = 'Adapted from education policy article, The Educational Review, 2024'

const P2_SET_C_EXTRACT_2 = `I was trained as a journalist in an era when we still believed in the possibility of truth. We had practices - verification, attributed sourcing, correction of errors - that were imperfect but designed to move us incrementally closer to accuracy. We had editorial standards. We had libel lawyers. We had a sense that publishing false information was a serious matter with legal and ethical consequences.

The internet has upended all of this. Speed has become more important than accuracy. A story that generates engagement is valuable regardless of its factual foundation. Misinformation spreads faster than corrections, and the corrections are read only by people who have already encountered the original falsehood. The attention economy has fundamentally restructured what it means to publish information.

I no longer call myself a journalist. The category has become meaningless. I write things. People read them, or they do not. The boundary between journalism, opinion, entertainment, and advertising has dissolved. We are all creators now, generating content in an attention marketplace where truth is merely one possible commodity among many.`

const P2_SET_C_EXTRACT_2_REF = 'Adapted from media commentary, Journalism Studies, 2023'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 SET D: SOURCES FOR READING SECTION
// ═══════════════════════════════════════════════════════════════════════════

const P2_SET_D_EXTRACT_1 = `The conversation about artificial intelligence has become unmoored from reality. On one side, we have the Silicon Valley utopians who believe AI will solve all problems, extend human life indefinitely, and generally represent the next step in human evolution. On the other, we have the apocalypticists who see only existential risk and the inevitable subjugation of humanity to uncontrollable algorithmic forces.

Both positions share an error: they treat AI as though it were a phenomenon operating outside human control or responsibility. In fact, AI systems are tools created by humans, trained on data selected by humans, deployed to serve the interests of humans. The problems are not inherent to the technology. They are inherent to us.

An algorithm that perpetuates racial bias does so because it was trained on historical data that encodes centuries of discrimination. A chatbot that produces confident nonsense does so because it is optimised for plausible-sounding text generation, not for truth. A recommendation system that encourages extremism does so because it is designed to maximise engagement. None of these are failures of the technology. They are faithful implementations of human choices.

What troubles me is that the technology serves as a convenient alibi. We can blame the algorithm while the humans who deployed it, who benefit from it, and who shaped its design remain invisible.`

const P2_SET_D_EXTRACT_1_REF = 'Adapted from technology ethics paper, AI Quarterly, 2024'

const P2_SET_D_EXTRACT_2 = `I grew up in a household where books were scarce but deeply valued. My parents had a small shelf - perhaps forty volumes total - and these books were treated with reverence. We did not read them casually. We did not bend the spines or fold down page corners. We read them carefully, and we returned them to the shelf in order.

My mother taught me to read before I started school. She would sit with a book on her knee, running her finger beneath each word. The rhythm of her voice was the first music I knew. Reading was not presented as a skill to be acquired or a box to be ticked. It was presented as an act of civilisation, as access to other minds and other ways of being.

Now my children grow up surrounded by text - on screens, in messages, in notifications. They have read more words by the age of seven than I read in the first twenty years of my life. And yet they read differently. There is a quality of presence, of sustained attention, that I associate with book reading, and it is largely absent from their interaction with digital text.

I do not know if this matters. Perhaps I am simply nostalgic for a form of literacy that is dying. Or perhaps something valuable is being lost, and future generations will regret its passing.`

const P2_SET_D_EXTRACT_2_REF = 'Adapted from parenting essay, The Modern Family, 2023'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 SET E: SOURCES FOR READING SECTION
// ═══════════════════════════════════════════════════════════════════════════

const P2_SET_E_EXTRACT_1 = `The city centre of almost every British town has become a standardised non-place. You could arrive blindfolded, have the blindfold removed, and struggle to know where you were. The independent shops have been replaced by chain stores. The local restaurants have been replaced by franchises. The vernacular architecture of place has been replaced by corporate templates that minimise risk and maximise return on investment.

This is not accidental. It is the result of decades of planning decisions that privilege large-scale development over small businesses, that make it economically impossible for independent retailers to survive, that treat the high street as a location for retail consumption rather than as a social space. The landlords who own the buildings have no incentive to offer reasonable rents to small business owners. They would rather wait for a chain store or a property developer than accept modest returns from a family business.

The homogenisation of the high street is presented as inevitable, a simple consequence of consumer choice and market competition. But this is a false narrative. The conditions that have produced this outcome were deliberately constructed. Different choices could be made. Local authorities could restrict chain stores. Landlords could reduce rents. Planners could enforce local design standards. But these choices are not made, because the people in power benefit from the status quo.`

const P2_SET_E_EXTRACT_1_REF = 'Adapted from urban planning article, Town Planning Quarterly, 2024'

const P2_SET_E_EXTRACT_2 = `I work in a hospital, and I am witnessing a peculiar form of ethical erosion that is difficult to articulate. Individually, every decision that management makes is defensible. We do more with less because we have no choice. We prioritise those cases that will produce the best statistical outcomes because we are measured on outcomes. We discharge patients as soon as medically possible because we need the beds. We document everything obsessively because we live in fear of litigation.

And yet collectively, these decisions have altered the fundamental nature of medicine as a practice. The doctor-patient relationship, which once depended on continuity and knowledge of particular individuals, has been replaced by a more transactional model. The time available for careful thinking and nuanced decision-making has been compressed. The focus on measurable outcomes has created perverse incentives - hospitals can improve their statistics by treating easier cases and avoiding complex or difficult patients.

I still love the work. I still believe in the importance of caring for sick people. But I increasingly feel that I am engaged in a performance of medicine rather than medicine itself - going through the motions that appear to satisfy the audit requirements while providing less and less of what medicine is actually supposed to do.`

const P2_SET_E_EXTRACT_2_REF = 'Adapted from healthcare professional memoir, Medical Life, 2023'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 SET F: SOURCES FOR READING SECTION
// ═══════════════════════════════════════════════════════════════════════════

const P2_SET_F_EXTRACT_1 = `The grief of losing a parent does not operate on a timeline. This is something that nobody tells you. You receive condolences as though it is an event with a beginning and an end - "my deepest sympathies," people say, and they mean well, and they expect that after a suitable period you will have moved through your grief and resumed normal functioning.

But grief is not an event. It is a permanent alteration in the geography of the self. The absence of my father is present in ways that are sometimes obvious and sometimes invisible. There are moments when I reach for my phone to call him before remembering he is dead. There are decisions I make by asking myself what he would think. There are photographs I cannot look at, and songs I cannot listen to, and conversations that can no longer happen.

What my grief has taught me is that the measure of a life is not located in grand gestures or exceptional achievements. It is located in the small, daily exchanges - the telephone call on Sunday afternoon, the remembered preferences, the inside jokes that existed only between two people. These are the irreplaceable elements. And once they are gone, they cannot be recovered or replicated.`

const P2_SET_F_EXTRACT_1_REF = "Adapted from grieving daughter's essay, Loss and Memory, 2023"

const P2_SET_F_EXTRACT_2 = `I learned to cook in a professional kitchen, where everything is measured, timed, and standardised. A sauce is not properly made until it reaches a precise temperature. A dish is not ready until it conforms to exact specifications. This is how you produce consistent results for paying customers.

But cooking at home is different. It is more forgiving, more creative, more responsive to mood and circumstance. You can throw in what is available. You can taste and adjust. You can experiment with proportions. The home cook is not pursuing consistency. They are pursuing satisfaction - the particular satisfaction of transforming simple ingredients into nourishment through attention and care.

I have noticed something curious over the past decade: the professionalisation of home cooking. Television programmes present recipes as though they are engineering problems to be solved through precise replication of steps. People buy specialist equipment. The language of cooking has become technical. There is a sense that home cooking is something that requires certification, expert knowledge, expensive ingredients.

This troubles me. The democratisation of cooking expertise has coincided with the mystification of cooking itself. It has been taken from the realm of everyday competence and placed on a pedestal where only the sufficiently knowledgeable and equipped can aspire to access it.`

const P2_SET_F_EXTRACT_2_REF = 'Adapted from food culture essay, Kitchen Wisdom, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// EDEXCEL PAPER 2: NON-FICTION & TRANSACTIONAL WRITING (1EN0/02)
// ═══════════════════════════════════════════════════════════════════════════

export const edexcelLangP2Mocks: MockExamPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // MOCK PAPER 2 SET A
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'edexcel-lang-p2-set-a',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set A',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-a-reading',
        title: 'Section A: Reading',
        description: `Read both extracts carefully. Then answer all the questions in this section.`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-a-q1',
            questionNumber: 1,
            questionText:
              "What is the writer's main concern about the farming industry in Extract 1?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P2_SET_A_EXTRACT_1,
            extractSource: P2_SET_A_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer is concerned that family farms are disappearing because they cannot make enough profit. Supermarkets control food prices and farmers get very little money. Young people cannot afford to become farmers and older farmers cannot retire. The system is designed to benefit rich companies, not to keep farming communities alive.',
              'Grade 6-7':
                'The writer argues that the economic pressures on farming are the result of deliberate structural choices rather than inevitable market forces. Supermarket consolidation has radically compressed farmer profit margins - a milk producer receives only 20p from every £1.50 consumer purchase - rendering diversified family farming economically unviable. The writer emphasizes that this system benefits particular stakeholders (corporations, shareholders) while rendering rural communities economically impossible to sustain. The concern transcends mere profitability to encompass the loss of agricultural employment and the erosion of landscape shaped by centuries of practice.',
            },
            markScheme: [
              'Identifies supermarket consolidation/pricing pressure',
              'References specific economic figures',
              'Recognises impact on rural employment and sustainability',
              'Understands systemic rather than accidental nature of problem',
            ],
          },
          {
            id: 'edexcel-p2-a-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Extract 2 present the relationship between the speaker and her grandmother through language and detail?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: P2_SET_A_EXTRACT_2,
            extractSource: P2_SET_A_EXTRACT_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows a close relationship by describing specific memories of the grandmother keeping bees. The grandmother made her own hives from "salvaged materials" which shows she was resourceful and independent. The writer describes the grandmother\'s actions in detail - using a spoon and tin, confusing the bees with noise - which shows the writer remembers this carefully. When the writer asks why she bothers, the grandmother says "someone has to know how to do this, or it will be lost." This shows the grandmother\'s values - duty and passing on knowledge.',
              'Grade 6-7':
                'The writer constructs intimacy through accumulated sensory detail and inherited knowledge. The specific memory of bee management - the wooden spoon, the tin, the noise-making - demonstrates that the grandmother\'s actions have been internalised and remembered with precision. The grandmother\'s response to the writer\'s question operates on multiple registers: it is simultaneously a practical statement and a philosophical assertion about reciprocal obligation and intergenerational transmission. The phrase "Because they need looking after" anthropomorphises the bees while affirming a logic based on care rather than utility. The grandmother\'s refusal to provide justification for her choices signals a different value system entirely - one where some practices are maintained not because they generate return, but because "someone has to know how to do this, or it will be lost." This operates as an implicit critique of instrumental thinking.',
            },
            markScheme: [
              'Identifies specific language techniques (detail, repetition)',
              'Analyses effect on reader/significance',
              'Supports with textual evidence',
              'Shows understanding of implicit values and meaning',
            ],
          },
          {
            id: 'edexcel-p2-a-q3',
            questionNumber: 3,
            questionText:
              'Compare how the two extracts present attitudes towards knowledge and skill. How are the attitudes similar or different?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'comparison',
            extract: `${P2_SET_A_EXTRACT_1}\n\n---\n\n${P2_SET_A_EXTRACT_2}`,
            extractSource: 'Both extracts',
            modelAnswers: {
              'Grade 4-5':
                'Both extracts show concern about knowledge being lost. Extract 1 shows how farming knowledge and skills are disappearing because young people cannot afford to become farmers. Extract 2 shows how bee-keeping knowledge is being lost because fewer people are learning how to do it. Both writers suggest that this is a problem because knowledge is valuable even if it does not make money. However, Extract 1 focuses on the economic systems that cause this loss, while Extract 2 focuses on the personal relationship and memory.',
              'Grade 6-7':
                'Both extracts present knowledge and skill as embodied practices transmitted through intergenerational relationships, but they locate the threat to this transmission differently. Extract 1 attributes the loss of agricultural knowledge to structural economic pressures - supermarket consolidation has made farming economically impossible, severing the transmission chain by rendering entry into the profession unfeasible. Extract 2 presents the loss of bee-keeping as the result of absence rather than economic impossibility - the grandmother maintains her practice despite (perhaps because of) its lack of commercial purpose, motivated by an ethic of stewardship. Both writers valorise knowledge that exists outside instrumental frameworks. Extract 1 critiques the application of purely economic metrics to measure "efficiency"; Extract 2 through the grandmother\'s response, asserts that some practices must be maintained simply because "someone has to know how to do this." The key difference: Extract 1 emphasises systemic constraint, Extract 2 emphasises personal commitment.',
            },
            markScheme: [
              'Identifies relevant similarities and/or differences',
              'Uses appropriate textual evidence from both extracts',
              'Analyses language and meaning',
              'Develops sustained comparative argument',
            ],
          },
          {
            id: 'edexcel-p2-a-q4',
            questionNumber: 4,
            questionText:
              'Evaluate how effectively the writer of Extract 1 uses evidence to support the argument. Consider both the strengths and limitations of the evidence provided.',
            marks: 20,
            suggestedTimeMinutes: 26,
            questionType: 'extended-response',
            extract: P2_SET_A_EXTRACT_1,
            extractSource: P2_SET_A_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses specific evidence to support the argument. The example of the 200-acre family farm shows that farmers cannot make enough money. The statistic about milk prices (£1.50 for consumers but only 20p for farmers) is very effective because it shows clearly how little farmers earn. The fact that the average age of farmers is 59 and rising proves that young people are not entering farming. These statistics are persuasive because they are specific and concrete. However, the evidence is limited because the writer only discusses one type of farming and one milk statistic. The writer could have included evidence about other products or other countries to show the problem is widespread. The writer does not cite sources for the statistics, which makes it harder to verify them. Overall, the evidence supports the argument effectively but could be stronger with more examples and sources.',
              'Grade 6-7':
                'The writer employs mixed strategies of anecdotal and quantitative evidence with varying degrees of effectiveness. The personal example of the "family farm of my childhood" establishes credibility through embodied knowledge and provides an accessible entry point to the argument. The specific economic figures (£1.50 price point vs. 20p farmer return) are deployed effectively as concrete proof of structural disadvantage. However, these figures require context to be fully persuasive - without understanding the farm gate system and supply chain dynamics, readers may struggle to evaluate the claim\'s accuracy. The statistic concerning average farmer age (59 and rising) functions as evidence of systemic unsustainability, effectively demonstrating that the problem is not individual failure but structural impossibility. The weakness of the evidence base lies in its rhetorical rather than empirical foundation. The writer asserts that "this has been accepted as inevitable" but provides no evidence of this acceptance - no citation of policy documents, media coverage, or public discourse. The claim that "markets are not forces of nature" is philosophically sound but would benefit from historical or comparative evidence. The greatest strength is the writer\'s insistence on reframing the problem as a consequence of human choice rather than natural necessity, but this remains largely asserted rather than demonstrated. The evidence works cumulatively to establish plausibility rather than proof.',
            },
            markScheme: [
              'Identifies the evidence presented',
              'Evaluates effectiveness and persuasiveness',
              'Considers both strengths and limitations',
              'Makes detailed judgements with supporting analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-a-writing',
        title: 'Section B: Writing',
        description: `You are advised to spend about 70 minutes on this section.
        
You should aim to write between 400-600 words for your response.`,
        totalMarks: 56,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: 'edexcel-p2-a-w1',
            questionNumber: 5,
            questionText:
              'Write an article for a newspaper or magazine in which you argue that a particular skill or craft is in danger of being lost. You should persuade your reader of the importance of this skill.',
            marks: 56,
            suggestedTimeMinutes: 70,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                "The article would identify a skill (e.g., traditional carpentry, letter-writing, cooking from scratch) and explain why it matters. The writer would use examples and evidence to show that the skill is disappearing. The argument would appeal to readers' values - perhaps nostalgia, cultural heritage, or practical benefit. The tone would be persuasive but accessible. The article would have a headline and would be structured in clear paragraphs. There might be some use of rhetorical devices (repetition, questions). The writing would be generally accurate in spelling and grammar, though there might be minor errors.",
              'Grade 6-7':
                'The article would demonstrate sophisticated understanding of the specific publication\'s conventions and audience. The headline would be attention-grabbing and encapsulate the argument. The opening would immediately engage the reader through personal anecdote, striking statistic, or rhetorical question. The body would deploy multiple forms of evidence - personal experience, historical context, contemporary examples - woven together to create a coherent argument. The writer would anticipate counterarguments (e.g., "Why preserve outdated skills?") and address them. Language choices would be precise and rhetorically effective: the repetition of key terms, varied sentence structures for emphasis, concrete imagery. The concluding section would move from specific (this particular skill) to general (what its loss represents) and would end with a call to action or memorable assertion. The writing would demonstrate syntactic confidence and sophisticated punctuation. The tone would be consistent and appropriate to the genre - neither patronising nor overly technical.',
            },
            markScheme: [
              'Engagement and persuasiveness of argument',
              'Effective use of evidence and example',
              'Appropriate tone and register for publication',
              'Structural clarity and coherence',
              'Accurate spelling, grammar, punctuation',
              'Sophisticated vocabulary and phrasing',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MOCK PAPER 2 SET B
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'edexcel-lang-p2-set-b',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set B',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-b-reading',
        title: 'Section A: Reading',
        description: `Read both extracts carefully. Then answer all the questions in this section.`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-b-q1',
            questionNumber: 1,
            questionText:
              "What do you understand about the writer's feelings towards moving her mother into a care home?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P2_SET_B_EXTRACT_1,
            extractSource: P2_SET_B_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer feels guilty about the decision. She says it was "an abdication" which is a strong word meaning she gave up responsibility. She acknowledges that the care home is good - her mother is "clean, fed, medicated, safe" - but she feels that something important is lost. The writer visits twice a week but feels this is not enough. She wonders if her mother "judges" her for it. The writer feels she chose "convenience over presence."',
              'Grade 6-7':
                'The writer\'s emotional response is characterised by ethical ambivalence. She refuses to absolve herself through the conventional narrative that positions institutional care as an acceptable or inevitable solution. Instead, she frames the decision as "an abdication" - a consciously chosen failure to meet her obligation toward her mother\'s final years. Significantly, she complicates this self-judgment by acknowledging the material impossibility of providing equivalent care at home given her mother\'s advanced dementia. The writer explicitly names this contradiction: her mother receives objectively good care, and yet she has lost something essential - continuity of relationship, institutional knowledge of her own history, presence within a space shaped by her own life. The phrase "institutional time, institutional space" emphasises the depersonalisation inherent in systems designed for efficiency. The final reflection - wondering if her mother "judges" her - reveals that the writer understands this as a failure on her part, not a limitation of circumstance. Her emotions combine guilt, complicity, and a kind of mourning for a relationship diminished before death.',
            },
            markScheme: [
              'Identifies key emotions (guilt, sadness, ambivalence)',
              'Supports with textual evidence',
              "Recognises the complexity of the writer's position",
              'Understands the contradiction between good care and lost presence',
            ],
          },
          {
            id: 'edexcel-p2-b-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Extract 2 use language to convey her experience of the seaside?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: P2_SET_B_EXTRACT_2,
            extractSource: P2_SET_B_EXTRACT_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses descriptive language to show what the seaside is like. She describes the beach as "grey" and the water as "cold." The sky has "that particular quality of English light that exists only on overcast days." These descriptions are not positive - she is not trying to make the seaside sound beautiful. Instead, she shows it as ordinary and unpretentious. The writer also uses specific details about the guest house (£40 a night, home cooked breakfast) and the other guests to show the simplicity of the experience. The phrase "not Instagram-worthy" suggests that the seaside offers something real rather than something designed to look good in photographs.',
              'Grade 6-7':
                'The writer constructs the seaside through a deliberate rejection of picturesque aesthetics and commercial spectacle. The colour palette is deliberately muted - grey sand, grey sky - and the language moves away from beauty to authenticity. The phrase "grey light" and "overcast" reject the postcard ideal, asserting instead that value exists in the unmanicured and unstandardised. The writer\'s deployment of specific detail - "£40 a night," "cooked from scratch," the list of ordinary guests - performs a kind of social democracy, suggesting that worth is distributed across ordinary people and modest transactions rather than concentrated in grand gestures. The synecdoche of "blind-folded" arrival opening the passage establishes a concern with the standardised (you couldn\'t tell where you are) against the particular (Margate still retains particularity despite decline). The final image explicitly rejects the aestheticization of landscape: "not beautiful in any postcard sense. It was not Instagram-worthy." This operates as a direct critique of the mediation of experience through commodity consumption. Instead, the writer asserts that value lies in "an encounter with landscape that had not been curated for aesthetic consumption." The language throughout privileges presence and authenticity against engineered experience.',
            },
            markScheme: [
              'Identifies relevant language techniques',
              'Explains effects on reader',
              'Uses textual evidence effectively',
              "Recognises the writer's implicit critique of aestheticisation",
            ],
          },
          {
            id: 'edexcel-p2-b-q3',
            questionNumber: 3,
            questionText:
              'How far do the two extracts present different perspectives on modern life?',
            marks: 28,
            suggestedTimeMinutes: 38,
            questionType: 'extended-response',
            extract: `${P2_SET_B_EXTRACT_1}\n\n---\n\n${P2_SET_B_EXTRACT_2}`,
            extractSource: 'Both extracts',
            modelAnswers: {
              'Grade 4-5':
                'The extracts present different perspectives on modern life. Extract 1 shows how modern systems (care homes, institutional care) create distance between family members. The writer has to place her mother in a care home because she cannot provide care herself, which is what modern life requires. Extract 2 shows a positive experience of something that resists modern commercialism - a simple seaside town that has not been turned into a theme park. Both extracts suggest that modern life has downsides, but they focus on different problems. Extract 1 is about loss and guilt related to family relationships. Extract 2 is about rejecting commercial experiences and finding value in ordinary places. Extract 1 is sad; Extract 2 is more hopeful.',
              'Grade 6-7':
                "Both extracts share a critique of systems that prioritise efficiency over human presence and meaning, but they arrive at different conclusions about modern life's possibilities. Extract 1 presents institutional systems as inescapable - the writer cannot escape the logic that produces institutional care. She seeks to name this clearly rather than accept the conventional narrative that renders the outcome inevitable or acceptable. Her critique is fundamentally one of complicity: modern structures make ethical failures unavoidable. Extract 2, conversely, suggests that resistance to systematisation remains possible, even if it is increasingly marginal. The modest guest house, the unmanicured beach, the unengineered relationships - these represent spaces that have escaped commodification, and the writer asserts their value precisely because they have not been optimised for consumption. The key difference: Extract 1 describes a modern life where choice is constrained and ethical compromise unavoidable; Extract 2 describes spaces where the modern logic of optimisation and consumption has not yet fully penetrated. Extract 1's perspective is one of moral difficulty; Extract 2's is one of resistance and persistence. Both suggest that modern life operates according to certain logics (institutional efficiency, commercial aesthetic), but they differ on whether these logics can be escaped or only mitigated.",
            },
            markScheme: [
              'Identifies different perspectives in both extracts',
              'Makes sustained comparison',
              'Uses textual evidence from both',
              'Develops sophisticated analysis of attitudes',
              'Considers both similarity and difference',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-b-writing',
        title: 'Section B: Writing',
        description: `You are advised to spend about 70 minutes on this section.
        
You should aim to write between 400-600 words for your response.`,
        totalMarks: 56,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: 'edexcel-p2-b-w1',
            questionNumber: 4,
            questionText:
              'Write a detailed description of a place that holds personal significance for you. Your description should help the reader understand not just what the place looks like, but what it means to you.',
            marks: 56,
            suggestedTimeMinutes: 70,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'The response would describe a specific place in concrete sensory detail - colours, sounds, textures, smells. It would explain why the place matters to the writer - perhaps memories connected to it, people associated with it, or what the writer feels when they are there. The description would move from physical details to emotional significance. The writing would use descriptive language (metaphor, simile) and would create a clear sense of place. The tone would be reflective and personal. The response would have clear structure, with an engaging opening that introduces the place, a developed middle section with specific details, and a conclusion that brings together physical and emotional meanings. Spelling and grammar would be generally accurate.',
              'Grade 6-7':
                "The response would demonstrate sophisticated control of descriptive language, moving fluidly between sensory detail and emotional resonance. The opening would immediately establish the place and signal its significance, perhaps through an arresting image or a reflection on its meaning. The body would layer different types of detail - architectural or natural features, the people encountered there, the sounds and smells, the light quality - interwoven with reflective commentary that reveals the place's significance without explicitly stating it. The writer would deploy precise language and varied sentence structures: shorter sentences for emphasis, longer syntactically complex sentences for reflection. Metaphor or symbolism might operate throughout - the place functioning as an external manifestation of internal emotional states. The writer would trust the reader to infer meaning from accumulated detail rather than explaining explicitly. The tone would be consistent - perhaps elegiac, perhaps celebratory, perhaps ambivalent - and appropriate to the meaning the place carries. The conclusion would offer a final perspective on the place that feels earned through the accumulated detail, perhaps a moment of insight or return that completes the reflective arc. The writing would demonstrate syntactic sophistication and semantic precision.",
            },
            markScheme: [
              'Vivid and precise sensory detail',
              'Clear connection between place and personal significance',
              'Sophisticated use of descriptive language',
              'Structural clarity and emotional coherence',
              'Accurate spelling, grammar, and punctuation',
              'Consistent and appropriate tone',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MOCK PAPER 2 SET C
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'edexcel-lang-p2-set-c',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set C',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-c-reading',
        title: 'Section A: Reading',
        description: `Read both extracts carefully. Then answer all the questions in this section.`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-c-q1',
            questionNumber: 1,
            questionText:
              'According to Extract 1, what is the main problem with the national curriculum?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P2_SET_C_EXTRACT_1,
            extractSource: P2_SET_C_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer says the curriculum treats knowledge as a product rather than something to understand and question. All students are taught the same facts in the same way and are assessed the same way, but students have different resources and opportunities. The curriculum has become too prescriptive, teachers have less freedom, and everything is focused on exam results rather than actual learning. The writer criticises using economic metrics (efficiency, profit) to measure education when education should focus on different values.',
              'Grade 6-7':
                'The writer identifies a fundamental category error: knowledge has been reframed from intrinsically valuable understanding to instrumental credential production. The standardisation that ostensibly promotes equality in fact reproduces inequality because it ignores material differences in resource distribution. A student in a well-resourced grammar school and a student in an under-resourced comprehensive are assessed by identical standards despite unequal opportunities, rendering the latter\'s schools categorically "failing" through no fault of their own. The writer argues that prescriptiveness has eroded teacher autonomy and that the focus on measurable outcomes has narrowed what is taught. Most importantly, the writer critiques the application of economic metrics (efficiency, profit) to a domain where such metrics are fundamentally inappropriate. Knowledge is valued only "insofar as it generates good exam results" rather than for its intrinsic worth. The problem is not merely that education is being narrowed, but that it is being measured by the wrong metrics entirely.',
            },
            markScheme: [
              'Identifies standardisation and its contradictions',
              'References prescriptiveness and narrowing of content',
              'Recognises the problem of using economic metrics',
              'Shows understanding of broader philosophical point',
            ],
          },
          {
            id: 'edexcel-p2-c-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer of Extract 2 conveys her loss of professional identity through language.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: P2_SET_C_EXTRACT_2,
            extractSource: P2_SET_C_EXTRACT_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer says "I no longer call myself a journalist" because the category "has become meaningless." She explains that the internet has changed what it means to be a journalist. Speed matters more than accuracy. Stories that engage readers are valuable regardless of truth. Misinformation spreads faster than corrections. She says "We are all creators now, generating content" which shows that everyone can produce text, so journalism is no longer a distinct profession. The writer uses the phrase "I write things. People read them, or they do not" which is deliberately simple and dismissive - she is saying that her work has been reduced to generic content production with no particular identity or purpose. The language shows frustration and loss.',
              'Grade 6-7':
                'The writer constructs the dissolution of her professional identity through a rhetoric of indistinction and loss of meaningful category. The declarative statement "I no longer call myself a journalist. The category has become meaningless" operates as a kind of professional death - not a voluntary resignation from the field, but the field\'s erasure of meaningful categorical distinction. The writer charts the erosion of professional standards through a parallel structure: "speed has become more important than accuracy"; "engagement" has superseded truth; "corrections are read only by people who have already encountered the original falsehood." Each sentence enacts a reversal of value that renders professional practice impossible. The catalogue of what has "dissolved" - "the boundary between journalism, opinion, entertainment, and advertising" - emphasises an undifferentiation in which the particular expertise of journalism has become indistinguishable from generic content. The final statement "I write things. People read them, or they do not. The boundary...has dissolved" employs deliberately flattened, almost dismissive diction. This signals the writer\'s refusal to claim expertise, dignity, or meaningful identity within a system where all distinctions have collapsed. The language moves from indignation through loss to resignation. Truth has become "merely one possible commodity among many" - a reduction to equivalence that renders judgment and verification meaningless.',
            },
            markScheme: [
              'Identifies relevant language techniques and tone shifts',
              'Explains how language conveys loss of identity',
              'Uses textual evidence effectively',
              "Shows understanding of the writer's implicit critique",
            ],
          },
          {
            id: 'edexcel-p2-c-q3',
            questionNumber: 3,
            questionText:
              'Both extracts are critical of contemporary systems. Which writer presents a more convincing critique, and why? You should refer to specific details from both extracts.',
            marks: 28,
            suggestedTimeMinutes: 38,
            questionType: 'extended-response',
            extract: `${P2_SET_C_EXTRACT_1}\n\n---\n\n${P2_SET_C_EXTRACT_2}`,
            extractSource: 'Both extracts',
            modelAnswers: {
              'Grade 4-5':
                'Both writers are critical, but Extract 1 presents a more convincing critique because it offers a clear analysis of the problem and suggests what should happen differently. The writer explains that the curriculum was designed to promote equality but that it actually reproduces inequality because of different resources. She identifies specific problems: teachers have less autonomy, knowledge is valued only for exam results, schools are judged unfairly if they serve disadvantaged students. The critique is specific and analytical. Extract 2 is more personal and emotional. The writer expresses frustration about journalism becoming meaningless, but she does not really explain why this happened or what the solution should be. She simply states that truth is now "merely one commodity among many" but does not explain how the internet caused this. Extract 1 is more convincing because it provides more evidence and analysis.',
              'Grade 6-7':
                'Extract 1 presents a more systematically coherent critique despite Extract 2\'s emotional power. Extract 1 employs a causal argument structure: the curriculum was designed to promote equality, but it actually reproduces inequality because material resource distribution remains unequal. The writer identifies specific mechanisms - prescribed content, reduced teacher autonomy, emphasis on measurable outcomes - that narrow educational practice. Crucially, the writer articulates why these are problems: knowledge is being measured against inappropriate metrics (economic efficiency), rendering the entire system fundamentally misaligned. Extract 2, by contrast, articulates loss and dissolution but does not fully explain causation or systemic mechanism. The writer asserts that "the internet has upended all of this" and that "misinformation spreads faster than corrections," but does not develop the structural explanation. Extract 2\'s strength is its emotional authenticity - the writer\'s embodied loss of professional identity is palpable. However, this personal testimony does not constitute systematic critique. The writer could have argued, for instance, that the business models of social media platforms create incentives toward engagement over accuracy, or that the collapse of traditional media institutions has eliminated editorial gatekeeping. Instead, she offers cultural observation rather than structural analysis. Extract 1 is more convincing because it moves from observation (the curriculum has changed) to analysis (here\'s why this change is problematic) to implicit prescription (we should measure education differently). Extract 2 remains at the level of documented loss without moving toward understanding or prescription.',
            },
            markScheme: [
              'Makes a clear judgement about which critique is more convincing',
              'Supports with evidence from both extracts',
              'Analyses the strength of each argument',
              'Considers both the quality of reasoning and the use of evidence',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-c-writing',
        title: 'Section B: Writing',
        description: `You are advised to spend about 70 minutes on this section.
        
You should aim to write between 400-600 words for your response.`,
        totalMarks: 56,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: 'edexcel-p2-c-w1',
            questionNumber: 4,
            questionText:
              'Write an article for a broadsheet newspaper in which you argue that a particular system or institution in contemporary life needs to be reformed. You should persuade your reader of the need for change.',
            marks: 56,
            suggestedTimeMinutes: 70,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'The article would identify a system (education, healthcare, social media, etc.) and explain what is wrong with it. The writer would provide evidence - statistics, examples, personal anecdotes - to support the argument. The tone would be serious and analytical, appropriate to a broadsheet newspaper. The article would be structured with a headline, opening paragraph that states the problem, body paragraphs that develop the argument with evidence, and a conclusion that calls for change. The language would be clear and persuasive, with some use of rhetorical devices (repetition, rhetorical questions, vivid examples). Spelling and grammar would be accurate. The writer would anticipate possible counterarguments and address them.',
              'Grade 6-7':
                'The article would demonstrate sophisticated understanding of broadsheet conventions and sophisticated argumentation. The headline would encapsulate the argument elegantly. The opening would immediately establish the scale of the problem (through statistic, vivid anecdote, or rhetorical question) and would flag the stakes. The body would deploy multiple forms of evidence strategically: historical context to show the problem is not inevitable, international comparison to show alternatives are possible, personal testimony to create emotional connection, statistical evidence to establish scale. The argument would be developed through sustained logical progression, each paragraph building on previous points. The writer would acknowledge legitimate counterarguments and address them head-on, strengthening the overall case. The language would be precise and varied: longer sentences for explanation, shorter sentences for emphasis; technical terminology used accurately; concrete imagery to illustrate abstract points. The conclusion would move from the specific problem to broader implications or values, ending with a call to action or affirmation that change is possible. The writing would demonstrate syntactic confidence and sophisticated punctuation throughout. The tone would be authoritative but not condescending, serious but not humorless.',
            },
            markScheme: [
              'Clear and well-developed argument for reform',
              'Effective use of evidence (statistics, examples, anecdotes)',
              'Sophisticated analysis of the problem',
              'Appropriate tone and register for broadsheet',
              'Acknowledgement and refutation of counterarguments',
              'Clear structural progression',
              'Accurate spelling, grammar, and punctuation',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MOCK PAPER 2 SET D
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'edexcel-lang-p2-set-d',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set D',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-d-reading',
        title: 'Section A: Reading',
        description: `Read both extracts carefully. Then answer all the questions in this section.`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-d-q1',
            questionNumber: 1,
            questionText:
              'What is the key distinction the writer makes in Extract 1 between understanding AI and responsibility for AI?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P2_SET_D_EXTRACT_1,
            extractSource: P2_SET_D_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer argues that AI systems are not natural forces but are created and controlled by humans. Therefore, problems with AI are not problems with the technology itself but problems with human choices. When an algorithm shows racial bias, it is because it was trained on biased data. When a chatbot produces nonsense, it is because it is designed to generate plausible-sounding text, not truth. These are not failures of the technology but results of what humans built. The writer says we use AI as an alibi - we blame the algorithm while the humans who created and benefit from it stay hidden.',
              'Grade 6-7':
                'The writer establishes a crucial distinction between the apparent autonomy of AI systems and their fundamental dependence on human choice and design. By emphasizing that "AI systems are tools created by humans, trained on data selected by humans, deployed to serve the interests of humans," the writer rejects the framing of technology as an autonomous force. More significantly, the writer demonstrates that apparent technical failures are actually expressions of human intent and value. The algorithm that perpetuates racial bias does so "because it was trained on historical data that encodes centuries of discrimination" - technical malfunction is revealed as the faithful translation of human structural bias into code. Similarly, the chatbot\'s confident nonsense and the recommendation system\'s extremism-amplification are not bugs but features - direct implementations of human optimization targets (plausibility and engagement, respectively). The writer\'s argument culminates in the assertion that technology "serves as a convenient alibi" - systems that were deliberately designed to prioritize certain values can be blamed on the technology itself, rendering the humans responsible "invisible." This simultaneously critiques both techno-utopianism and techno-pessimism: both treat AI as operating outside human control when in fact it is thoroughly enmeshed with human power and interest.',
            },
            markScheme: [
              'Identifies that problems are human, not technical',
              'Understands that design reflects values',
              'Recognises the concept of alibi/invisibility',
              'Shows grasp of broader philosophical point',
            ],
          },
          {
            id: 'edexcel-p2-d-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Extract 2 use personal recollection to explore attitudes towards reading and literacy?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: P2_SET_D_EXTRACT_2,
            extractSource: P2_SET_D_EXTRACT_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses memory of childhood reading - how her mother taught her to read, how books were valued in her household - to establish one model of literacy. She describes her mother running her finger under each word and reading with a particular rhythm. This memory shows that reading was seen as important and was taught with care and ritual. She contrasts this with how her children encounter text now - "on screens, in messages, in notifications." The children have read more words by age seven than the writer read in twenty years, but there is something missing about the quality of their attention. The writer uses her own experience to suggest that something valuable is being lost, but she also acknowledges uncertainty: "I do not know if this matters." The personal approach makes the argument more thoughtful and less absolute.',
              'Grade 6-7':
                'The writer structures the extract around a temporal contrast mediated through personal memory. The opening memory - the mother teaching reading, the ritual of careful attention - establishes a particular form of literacy characterised by presence, continuity, and reverence. The phrase "The rhythm of her voice was the first music I knew" elevates reading beyond skill acquisition to a foundational form of relationship and consciousness. Reading is "presented as an act of civilisation, as access to other minds and other ways of being." This framing emphasises meaning-making and consciousness-expansion rather than information transfer. The writer then moves to the present tense observation of her children\'s literacy practices: quantity has increased dramatically (they have read more words by age seven than the writer read in twenty years) yet something qualitative has been lost. The writer identifies this as "a quality of presence, of sustained attention" but resists explaining this explicitly. Instead, she uses the word "largely absent," creating an ellipsis that invites the reader to infer what has been lost. The final reflection - "I do not know if this matters. Perhaps I am simply nostalgic" - performs intellectual honesty, acknowledging her potential bias while also suggesting that nostalgia might not fully explain the loss. The personal recollection thus functions not as sentimental autobiography but as a methodological move: by grounding the observation in embodied experience, the writer makes the argument non-generalizable yet universally recognizable. The reader must evaluate the claim through their own experience.',
            },
            markScheme: [
              'Identifies how memory structures the argument',
              'Shows understanding of the contrast being made',
              'Analyzes language and tone',
              "Recognises the writer's intellectual honesty about bias",
            ],
          },
          {
            id: 'edexcel-p2-d-q3',
            questionNumber: 3,
            questionText:
              "Compare the ways the two extracts present responsibility for contemporary change. How similar or different are the writers' arguments?",
            marks: 28,
            suggestedTimeMinutes: 38,
            questionType: 'extended-response',
            extract: `${P2_SET_D_EXTRACT_1}\n\n---\n\n${P2_SET_D_EXTRACT_2}`,
            extractSource: 'Both extracts',
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that contemporary change is the result of human choices, not inevitable forces. Extract 1 shows that AI is not an autonomous force but is designed and deployed by humans who benefit from it. Problems with AI come from human decisions about how to train algorithms, what data to use, what outcomes to optimize. Extract 2 argues that the change in reading practices comes from human choices about technology (screens, notifications, etc.). However, the writers assign responsibility differently. Extract 1 explicitly blames humans - those who design and benefit from AI systems. Extract 2 is less clear about who is responsible. The writer suggests that the technologies are here and that things are changing, but she does not identify who created these technologies or who benefits from them. Instead, she expresses uncertainty: "I do not know if this matters." Extract 1 is clearer about assigning blame; Extract 2 is more ambivalent about whether change is good or bad, necessary or avoidable.',
              'Grade 6-7':
                'Both extracts reject deterministic narratives of inevitable technological change, but they differ in their attribution of agency and responsibility. Extract 1 makes an explicit argument that AI is a thoroughly humanised phenomenon - designed by specific actors, deployed to serve specific interests, trained on data shaped by specific choices. The writer insists on visibility and accountability: "the humans who deployed it, who benefit from it, and who shaped its design remain invisible." The argument is one of deliberate obscuration - technology serves as an alibi that renders human agency and interest opaque. Extract 2 presents a softer version of this argument. The writer acknowledges that her children\'s literacy practices are different, but she locates responsibility ambiguously. The technologies (screens, notifications) are presented as environmental facts, and the shift from "book reading" to "digital text" is noted without clear causal assignment. The writer\'s uncertainty - "I do not know if this matters" - might represent intellectual honesty, but it also suggests that unlike the AI writer, she has not settled on a clear attribution of responsibility. The key similarity: both writers reject the idea that change is impersonal or inevitable. The key difference: Extract 1 explicitly identifies human actors and interests; Extract 2 remains more observational, noting change without fully accounting for its causes. Extract 1 is a critique; Extract 2 is a meditation. This difference reflects their genres and purposes: Extract 1 is argument (assigning blame), while Extract 2 is reflective essay (exploring ambivalence).',
            },
            markScheme: [
              'Makes clear comparison of how responsibility is presented',
              'Uses evidence from both extracts',
              'Distinguishes between different types of argument',
              'Evaluates the effectiveness of each approach',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-d-writing',
        title: 'Section B: Writing',
        description: `You are advised to spend about 70 minutes on this section.
        
You should aim to write between 400-600 words for your response.`,
        totalMarks: 56,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: 'edexcel-p2-d-w1',
            questionNumber: 4,
            questionText:
              'Write an article for a news magazine in which you explore the impact of a particular technology on contemporary life. You should help your reader understand both potential benefits and risks.',
            marks: 56,
            suggestedTimeMinutes: 70,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                "The article would select a technology (social media, AI, smartphones, etc.) and explore how it has changed life. The writer would present both positive aspects (the technology connects people, provides information, creates opportunities) and negative aspects (it creates addiction, spreads misinformation, displaces jobs). The article would use specific examples and evidence. The tone would be balanced and analytical, not simply for or against the technology. The structure would be clear: headline, introduction that establishes the technology's importance, body paragraphs that develop both benefits and risks, and conclusion that helps readers think about the technology's future. The writing would be accurate in spelling and grammar. The writer would avoid being preachy and would trust readers to draw their own conclusions.",
              'Grade 6-7':
                'The article would demonstrate nuanced understanding of the technology\'s systemic role in contemporary life rather than treating it as a discrete tool with separable positive and negative effects. The headline and opening would establish the technology\'s ubiquity and significance without claiming neutrality about its impact. The body would develop the argument through specific, granular examples rather than abstract claims. For instance, rather than saying "social media creates anxiety," the writer might describe the particular mechanisms - algorithmic amplification of negative content, comparison-driven feedback loops, notification systems designed to maximize engagement - that produce psychological effects. The structure would not mechanically alternate between "benefit/risk" paragraphs but would weave these together, showing how the same feature might simultaneously create opportunity and risk. The writer would attend to who benefits and who bears costs - an important recognition that technology\'s impacts are distributed unequally. The language would be precise and specific, avoiding euphemism or imprecision. The conclusion would avoid false balance, instead offering a clear perspective on the technology\'s role while acknowledging genuine complexity. The writing would demonstrate sophisticated understanding of cause and effect, and would resist determinist narratives that treat technological change as inevitable or as operating outside human control and choice.',
            },
            markScheme: [
              "Clear engagement with the technology's impacts",
              'Balanced consideration of benefits and risks',
              'Specific examples and evidence',
              'Understanding of systemic effects',
              'Appropriate tone for news magazine',
              'Structural clarity and development',
              'Accurate spelling, grammar, and punctuation',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MOCK PAPER 2 SET E
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'edexcel-lang-p2-set-e',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set E',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-e-reading',
        title: 'Section A: Reading',
        description: `Read both extracts carefully. Then answer all the questions in this section.`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-e-q1',
            questionNumber: 1,
            questionText:
              "What is the writer's main argument about high street homogenisation in Extract 1?",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P2_SET_E_EXTRACT_1,
            extractSource: P2_SET_E_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer argues that the homogenisation of the high street is not inevitable but is the result of deliberate planning decisions. Local councils and planning authorities have allowed large chain stores while making it impossible for independent shops to survive. Landlords prefer to wait for chain stores to rent their properties rather than accept lower rents from small businesses. The writer says that "different choices could be made" - authorities could restrict chains, lower rents, or enforce local design standards. The argument is that the current situation benefits those in power (landlords, big companies) but is harmful to communities.',
              'Grade 6-7':
                'The writer\'s argument operates on two levels: description of what has happened, and critique of the narrative that explains it. The descriptive level identifies the empirical reality: city centres have become standardised, independent shops have been replaced by chains, vernacular architecture has been replaced by corporate templates. The key move is the rejection of the "false narrative" that treats this as inevitable consequence of "consumer choice and market competition." The writer argues instead that this outcome is the result of "decades of planning decisions" that privilege large-scale development over small business. Crucially, the writer identifies economic structure as determinative: landlords have "no incentive to offer reasonable rents to small business owners" because "they would rather wait for a chain store" with higher returns. This is not consumer preference driving business decisions; rather, economic incentive structures shape which businesses can survive. The writer\'s argument culminates in asserting that "different choices could be made" - pointing out that authorities could restrict chains, enforce design standards, or regulate rents. The final observation - that "the people in power benefit from the status quo" - makes clear that the persistence of this system serves particular interests, not general welfare. The argument is fundamentally about agency, choice, and interest: what appears inevitable is actually the result of deliberate decision-making by those with power.',
            },
            markScheme: [
              'Identifies that homogenisation results from deliberate choices',
              'References planning decisions and landlord incentives',
              'Recognises the "false narrative" of inevitability',
              'Understands that certain groups benefit',
            ],
          },
          {
            id: 'edexcel-p2-e-q2',
            questionNumber: 2,
            questionText:
              'Analyse how the writer of Extract 2 conveys her experience of working in healthcare through language and tone.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: P2_SET_E_EXTRACT_2,
            extractSource: P2_SET_E_EXTRACT_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses words that show strain and compromise. She says "each decision that management makes is defensible" but when combined they create a "peculiar form of ethical erosion." The word "erosion" suggests gradual damage that is hard to see. She lists many things that hospitals have to do: "do more with less," "prioritise cases with best outcomes," "discharge patients early." Each one individually seems reasonable, but together they create a problem. The tone becomes sad and resigned: "I still love the work" but she now feels she is engaged in "a performance of medicine rather than medicine itself." The word "performance" suggests she is going through motions rather than actually helping people. The overall tone is melancholic - the writer cares but feels helpless.',
              'Grade 6-7':
                'The writer employs a structure of accumulation and paradox to convey the experience of ethical compromise. The opening admits that "individually, every decision...is defensible" - the system generates local rationality. However, "collectively, these decisions have altered the fundamental nature of medicine." This movement from local justifiability to collective damage establishes the core problem: ethical erosion operates gradually and is difficult to identify within the logic of individual decisions. The language becomes increasingly technical as the writer catalogues administrative and metric-driven imperatives: "prioritise those cases...that will produce the best statistical outcomes," "document everything obsessively," "avoid complex or difficult patients." These phrases employ passive or nominalized constructions that create a sense of systems operating according to their own logic rather than human choice. The paradox sharpens in the final section: "I still love the work. I still believe in the importance of caring for sick people" - but these convictions are now enacted as "a performance of medicine rather than medicine itself." The word "performance" functions as a metaphor for inauthenticity while also invoking theater, suggesting that the writer is conscious of the gap between what medicine claims to do and what it actually does. The tone shifts from analytical (first three paragraphs) to elegiac (final paragraph), suggesting both awareness of the problem and inability to change it. The phrase "going through the motions" (implied rather than stated) captures a resignation that coexists with care. The overall effect is of someone caught within a system whose rationality is clear but whose consequences are ethically unacceptable, and who has limited power to change it.',
            },
            markScheme: [
              'Identifies how language conveys strain and compromise',
              'Analysed structure (accumulation, paradox)',
              'Explains tone shift from analytical to elegiac',
              'Uses textual evidence effectively',
            ],
          },
          {
            id: 'edexcel-p2-e-q3',
            questionNumber: 3,
            questionText:
              "Both extracts discuss systems that produce unintended or undesirable consequences. How similar are the writers' explanations of why these systems persist?",
            marks: 28,
            suggestedTimeMinutes: 38,
            questionType: 'extended-response',
            extract: `${P2_SET_E_EXTRACT_1}\n\n---\n\n${P2_SET_E_EXTRACT_2}`,
            extractSource: 'Both extracts',
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that systems persist because they benefit certain people or groups, even though they have negative effects for others. Extract 1 argues that the homogenisation of high streets persists because landlords benefit from it - they get more money from chain stores than from independent shops. Extract 2 argues that harmful hospital practices persist because they meet management\'s need to control costs and statistics, even though they harm patient care. Both writers reject the idea that the systems are inevitable. They both say that different choices could be made. In Extract 1, "different choices could be made." In Extract 2, the writer implies that hospitals could provide better care if management made different decisions. However, the writers differ in how explicitly they identify this problem. Extract 1 directly states that "people in power benefit." Extract 2 shows that doctors feel caught and helpless, but does not explicitly name who benefits. Extract 1 is a clear critique of power; Extract 2 is more about personal experience of powerlessness.',
              'Grade 6-7':
                'Both writers identify that systems producing negative consequences persist because they serve the interests of powerful actors, but they differ significantly in how explicitly they develop this argument. Extract 1 provides a structural explanation: landlords have clear economic incentives to maximise rental returns, which can be achieved more reliably through chain store tenants than independent businesses. The persistence of the system is overdetermined - it serves multiple interests (developers, chains, some local authorities) while distributing costs to communities and small business owners. The writer explicitly identifies this as benefiting "the people in power." The explanation emphasises how rational individual decisions (landlord maximising return, chain store seeking standardisation, authority seeking development revenue) combine to produce a system that serves concentrated interests. Extract 2 presents a more diffuse explanation. The hospital system persists not because any individual actor clearly benefits but because of cumulative, uncoordinated pressure. Management makes defensible decisions (cost control, outcome measurement, risk avoidance) that, in aggregate, transform medicine into something unrecognisable. Unlike Extract 1, there is no clear identification of beneficiaries. Instead, the writer conveys a sense of systemic momentum - the system is self-perpetuating not because it serves particular interests but because each component seems necessary within the existing framework. The crucial difference: Extract 1 explains persistence through interest-based analysis (X profits, therefore the system endures); Extract 2 explains persistence through institutional logic (the system seems necessary given current constraints). Extract 1 implies political change is possible if interests can be challenged; Extract 2 suggests resignation is more appropriate than optimism. Both identify that systems persist despite negative consequences, but Extract 1 offers a more empowering explanation (changeable power relations) while Extract 2 offers a more tragic explanation (systems that seem to operate by logic beyond human control).',
            },
            markScheme: [
              'Identifies similar explanations of system persistence',
              'Distinguishes between interest-based and institutional explanations',
              'Uses evidence from both extracts',
              'Analyses implications of each approach',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-e-writing',
        title: 'Section B: Writing',
        description: `You are advised to spend about 70 minutes on this section.
        
You should aim to write between 400-600 words for your response.`,
        totalMarks: 56,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: 'edexcel-p2-e-w1',
            questionNumber: 4,
            questionText:
              'Write a reflective essay about a moment when you became aware that something important in your life or community was changing. What was the change, and what did you feel about it?',
            marks: 56,
            suggestedTimeMinutes: 70,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'The essay would describe a specific moment of recognition - when the writer became aware of change. The change could be personal (a friend moving away, growing older) or communal (a local shop closing, a familiar place being demolished). The essay would use concrete detail to make the moment vivid. It would express the emotions the writer felt - nostalgia, sadness, perhaps some understanding of why the change happened. The essay would move from description of the moment to reflection on its significance. The writing would be personal and sincere without being sentimental. The structure would be clear: opening that establishes the moment, middle sections that develop detail and reflection, conclusion that brings together the emotional and intellectual responses. Spelling and grammar would be generally accurate.',
              'Grade 6-7':
                'The essay would use the specific moment of recognition as a lens to explore larger questions about change, loss, and time. The opening would not state its purpose didactically but would instead present a vivid, sensory moment that embodies the recognition. The body would layer different perspectives on the change: what it looks like externally, what it felt like emotionally, what its causes might be, what its implications are. The writer would resist easy interpretation, instead sitting with ambiguity and complexity. The tone would be reflective and exploratory rather than conclusive. Language would be precise and evocative without being overwrought. Sentence structures would vary - shorter sentences for moments of recognition or emotional intensity, longer sentences for reflection and analysis. The essay would move incrementally from the particular (this moment, this change) to the general (what this reveals about time, loss, or continuity). The conclusion would not resolve or explain the moment entirely but would offer a final perspective that feels earned through the accumulated reflection. The writing would demonstrate syntactic sophistication and emotional intelligence.',
            },
            markScheme: [
              'Specific, vivid moment of recognition',
              'Clear engagement with the experience of change',
              'Thoughtful exploration of emotions and implications',
              'Sophisticated use of language and detail',
              'Structural clarity and emotional coherence',
              'Accurate spelling, grammar, and punctuation',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MOCK PAPER 2 SET F
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'edexcel-lang-p2-set-f',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set F',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-f-reading',
        title: 'Section A: Reading',
        description: `Read both extracts carefully. Then answer all the questions in this section.`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-f-q1',
            questionNumber: 1,
            questionText:
              'According to Extract 1, what does the writer discover about grief from her own experience of loss?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P2_SET_F_EXTRACT_1,
            extractSource: P2_SET_F_EXTRACT_1_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer discovers that grief does not follow a timeline. People expect you to feel better after a certain period, but grief is permanent. It is not an event with a beginning and end; it is a permanent change in who you are. The writer describes how grief is present in everyday moments - wanting to call someone who is dead, making decisions based on what someone would think, avoiding songs or photographs. The main discovery is that what matters most in a life is not grand achievements but "small, daily exchanges" - phone calls, remembered preferences, inside jokes. When these are lost, they cannot be replaced.',
              'Grade 6-7':
                'The writer distinguishes between grief as conceptualised in conventional language (an "event" with expected duration and trajectory) and grief as lived reality (a permanent alteration of consciousness and relationship). The traditional narrative treats grief as something to move "through," with the expectation of return to "normal functioning" after "a suitable period." The writer\'s experience contradicts this: grief is not transitive but permanent. More profoundly, the writer identifies that the immeasurable dimensions of relationship - "small, daily exchanges," "telephone calls on Sunday afternoons," "inside jokes that existed only between two people" - constitute the actual substance of a life. Conventional eulogy focuses on "grand gestures or exceptional achievements," but these are the replaceable parts. What cannot be recovered is the particular, quotidian texture of intimate relationship - the unique tone of voice, the idiosyncratic patterns of communication, the accumulated references. The writer\'s argument suggests that the measure of a life is not located in accomplishment or legacy but in the density of particular, unrepeatable relationships. Loss of a parent thus reveals not merely the fact of that person\'s absence but the irreplaceability of the specific exchanges that constituted the relationship. This has profound implications: if a life\'s value is located in unrepeatable particularity, then loss is genuinely permanent and irredeemable.',
            },
            markScheme: [
              'Identifies that grief is permanent and non-linear',
              'Recognises the importance of small, daily exchanges',
              'Understands irreplaceability',
              'Shows grasp of broader philosophical implications',
            ],
          },
          {
            id: 'edexcel-p2-f-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Extract 2 use contrasts to present her argument about cooking?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: P2_SET_F_EXTRACT_2,
            extractSource: P2_SET_F_EXTRACT_2_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer contrasts professional and home cooking. Professional cooking is precise and standardised - "everything is measured, timed, and standardised." A sauce must reach an exact temperature. Home cooking is different - forgiving, creative, responsive to mood and circumstance. You can throw in what is available, taste and adjust. The writer then contrasts what cooking used to be with what it is becoming. Cooking used to be a form of "everyday competence" - something ordinary people did without special knowledge. Now it has been "mystified" and "professionalised." Television shows present recipes as problems to solve precisely. People buy specialist equipment. The language has become technical. The contrast shows that cooking has changed from something accessible to something that seems to require expertise and special equipment.',
              'Grade 6-7':
                'The writer employs systematic contrasts that operate on multiple levels to develop her argument about the demystification/remystification of cooking. The primary contrast is between professional kitchen (site of precision, standardisation, consistency) and home kitchen (site of adaptation, creativity, responsiveness). This contrast establishes that cooking is not a unified practice but changes according to context and purpose. The professional kitchen optimises for consistency and reproducibility; the home kitchen optimises for satisfaction and negotiation with available conditions. This distinction is not merely descriptive but evaluative: the home cook\'s aim - "pursuing satisfaction" through "attention and care" - is superior because it remains responsive to particular circumstances rather than abstract standards. The writer then introduces a temporal contrast: cooking as it "used to be" vs. cooking in the contemporary moment. Historically, cooking was simply a competence within everyday life - not marked as special or requiring certification. Contemporaneously, cooking has been subject to what the writer calls "professionalisation" and "mystification." This is paradoxical: increased access to expert knowledge (through television, recipes, instruction) has coincided with increased mystification. The writer attributes this to the elevation of cooking expertise into a special domain ("placed on a pedestal") requiring "certification, expert knowledge, expensive ingredients." The contrast operates as an implicit critique: what should be democratised (access to cooking knowledge) has instead been aristocratised. The underlying argument is about access and expertise: when cooking is presented as an engineering problem requiring precise technique and special equipment, it becomes less accessible to ordinary people despite (or because of) increased visibility of expert practice.',
            },
            markScheme: [
              'Identifies the contrasts (professional/home, past/present)',
              'Explains the significance of each contrast',
              'Uses textual evidence effectively',
              'Recognises the implicit critique embedded in contrasts',
            ],
          },
          {
            id: 'edexcel-p2-f-q3',
            questionNumber: 3,
            questionText:
              "Both extracts explore what makes life valuable and meaningful. How do the writers' perspectives on value differ?",
            marks: 28,
            suggestedTimeMinutes: 38,
            questionType: 'extended-response',
            extract: `${P2_SET_F_EXTRACT_1}\n\n---\n\n${P2_SET_F_EXTRACT_2}`,
            extractSource: 'Both extracts',
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that value lies in everyday, ordinary things rather than in grand achievements or specialised expertise. Extract 1 says that life\'s value is in "small, daily exchanges" rather than "grand gestures or exceptional achievements." Extract 2 says that value is in the act of cooking itself - the attention and care - rather than in producing perfect dishes or impressive meals. Both writers oppose the idea that value is in professional achievement or expert knowledge. However, they arrive at this through different experiences. Extract 1 is about loss and grief - what the writer learns from losing her father. She understands that the ordinary interactions are what cannot be replaced. Extract 2 is about how contemporary culture has made cooking seem like it requires expertise when it actually does not. Extract 1 focuses on what is lost when relationship ends; Extract 2 focuses on what is threatened when ordinary activities are made to seem special. Both suggest that value is accessible and quotidian, not something that requires certification or extraordinary effort.',
              'Grade 6-7':
                "The writers share a conviction that value is located in the quotidian and particular rather than in the exceptional or standardised, but they arrive at this conviction through different crises and articulate different kinds of threat to ordinary value. Extract 1 discovers through loss that life's value inheres in the unrepeatable, particular exchanges within relationship. The writer identifies a category error in conventional assessment: we measure a life's importance by achievement (\"grand gestures or exceptional achievements\") when actual significance lies in accumulated small moments whose significance is precisely that they are not reproducible or translatable. The crisis this confronts is permanent loss - once these exchanges cease, they cannot be recovered because they depend on the specific consciousness of another person. Extract 2 argues that cooking's value - understood as a form of everyday care and attention - is threatened by the contemporary professionalisation and mystification of the practice. The crisis here is different: not permanent loss but eroded accessibility. When cooking is reframed as an engineering problem requiring special knowledge and equipment, it becomes less accessible to ordinary people despite increased visibility of expert practice. The democratisation of information has paradoxically resulted in the aristocratisation of the practice. What unites them: both writers assert value in the ordinary. What divides them: Extract 1's crisis is loss (you cannot recover particular exchanges); Extract 2's crisis is mystification (ordinary people are discouraged from practices they once engaged in naturally). Extract 1 is elegiac; Extract 2 is critical. Extract 1 finds meaning in irreplaceability; Extract 2 finds meaning in ordinariness precisely because it should be accessible to all.",
            },
            markScheme: [
              'Identifies shared conviction about ordinary value',
              'Distinguishes between loss and mystification as crises',
              'Uses evidence from both extracts',
              'Develops sophisticated analysis of different perspectives',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-f-writing',
        title: 'Section B: Writing',
        description: `You are advised to spend about 70 minutes on this section.
        
You should aim to write between 400-600 words for your response.`,
        totalMarks: 56,
        suggestedTimeMinutes: 70,
        questions: [
          {
            id: 'edexcel-p2-f-w1',
            questionNumber: 4,
            questionText:
              'Write a personal essay in which you reflect on something you have learned about yourself or others through a particular experience. Your reflection should help your reader understand something meaningful about human nature or relationships.',
            marks: 56,
            suggestedTimeMinutes: 70,
            questionType: 'extended-writing',
            modelAnswers: {
              'Grade 4-5':
                'The essay would begin with a specific experience or incident that taught the writer something about themselves or others. The writer would describe the experience with concrete detail. The essay would then move to reflection on what the experience revealed. The tone would be honest and thoughtful without being overwrought. The writer would avoid being preachy but would help the reader see why this experience matters. The essay would use the particular experience to suggest something more general about human nature - how people respond to difficulty, what makes relationships meaningful, how people grow and change. The conclusion would bring together the experience and the reflection, helping the reader understand the insight. Spelling and grammar would be accurate. The writing would be clear and accessible.',
              'Grade 6-7':
                'The essay would trust the reader to infer meaning from accumulated detail and reflection rather than stating lessons didactically. The opening would present the experience through sensory or emotional detail rather than abstract announcement of theme. The body would layer different perspectives on the experience: what it felt like, what it revealed about others, what it suggested about oneself, how understanding has shifted with time. The writer would resist closure, instead sitting with complexity and ambiguity. The language would be precise and varied - shorter sentences for moments of realisation, longer sentences for reflection. Imagery would be specific and non-sentimental. The writer would draw on physical sensation or concrete observation to convey emotional or psychological states. The essay would move from the particular incident to general reflection about human nature, but only after earning this generalisation through specific detail. The conclusion would offer a final perspective that feels provisional rather than final - acknowledging that understanding remains incomplete. The writing would demonstrate sophisticated self-awareness and emotional intelligence. The form and content would be integrated - the way the essay moves and thinks would embody the insights it articulates.',
            },
            markScheme: [
              'Specific and vivid experience described with concrete detail',
              'Thoughtful and honest reflection on meaning',
              'Clear connection between particular and general',
              'Sophisticated language use and varied sentence structures',
              'Authentic emotional intelligence',
              'Structural clarity and coherence',
              'Accurate spelling, grammar, and punctuation',
            ],
          },
        ],
      },
    ],
  },
]
