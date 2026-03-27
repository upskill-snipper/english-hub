// ─── Edexcel GCSE English Language Mock Exams ────────────────────────────────
// 6 complete exam papers: 3x Paper 1 (Non-Fiction & Transactional Writing)
// 3x Paper 2 (Fiction & Imaginative Writing)
// Code: 1EN0/01 (Paper 1) and 1EN0/02 (Paper 2)

import {
  MockExamPaper,
  MockExamQuestion,
  MockExamSection,
} from './mock-exams'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 1 EXTRACTS: Non-Fiction & Transactional Writing (1EN0/01)
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P1_SET_A_EXTRACT = `The night the factory closed, nobody really expected it. We had read the statements from the management, of course, heard the stories about overseas competition and efficiency targets. But there is a difference between understanding something intellectually and accepting it as real. Mrs Patterson had worked there for thirty-eight years. She clocked out at five past five on a Friday evening, as she had every weekday for nearly four decades, hung her coat on the same hook, and walked out into a future that no longer included employment.

The factory itself was a Victorian building, red brick and imposing, built when such structures were monuments to permanence and industry. Its tall windows looked out onto the high street, watching the town change around it — the arrival of the supermarket, the slow departure of the independent shops, the boarded-up storefronts. The factory endured through all of this, a landmark, a reference point. When people gave directions, they said, "Turn left at the old textile factory." It was as much a part of the town's identity as the church or the town hall.

By Monday morning, the facility was officially closed. The gates were locked with a chain and padlock. The windows that had looked out onto the high street for a hundred and fifty years now reflected only the empty street back at itself. And somewhere in the town, in kitchens and living rooms, people sat in stunned silence, trying to work out how to explain to their families that the solid ground beneath them had given way.`

const EDEXCEL_P1_SET_A_SOURCE = 'Adapted from feature journalism, The Guardian, 2022'

const EDEXCEL_P1_SET_B_EXTRACT = `There are approximately 8.7 million feral cats living in the United States, according to the most recent estimates. These animals are not pets in any meaningful sense — they have never been handled by humans, they have no names, they exist outside the economy of domesticity that governs the lives of the 94 million owned cats in American households. And yet they outnumber their domesticated cousins, occupying a curious liminal space: present everywhere, invisible to most people, part of the problem and yet somehow also a symptom of the problem.

The origins of these populations are not mysterious. They descend from domestic cats that were abandoned, lost, or allowed to roam freely. A single breeding pair of cats can produce up to 420 descendants in seven years, given optimal conditions and no intervention. Colonies establish themselves wherever conditions permit — in parks, warehouses, the margins of industrial areas. They develop social structures, hierarchies, relationships that are foreign to human understanding.

The response of municipalities has been inconsistent and often counterproductive. Some cities have implemented Trap-Neuter-Return programmes, which have achieved genuine success in reducing population growth while maintaining animal welfare. Others have pursued simple extermination, which is expensive, temporary, and morally questionable. And many cities have simply done nothing, allowing the colonies to persist and expand, spreading disease, predating on native wildlife, and embodying a kind of organised chaos at the margins of urban life.`

const EDEXCEL_P1_SET_B_SOURCE = 'Adapted from academic article, Conservation Biology Quarterly, 2023'

const EDEXCEL_P1_SET_C_EXTRACT = `The proposal to develop the Riverside Green as a shopping centre has divided our community more sharply than anything I can remember. On one side, we have the developers, the council planning committee, and a vocal minority who see economic development as the only metric that matters. On the other side are those of us who believe that not everything should be monetised, that a functioning community requires spaces that serve no economic purpose — places to walk, to sit, to think, to simply be.

What troubles me most is the linguistic sleight of hand that has characterised this debate. The green is not described as what it is — a public space, a commons, a place where people of all backgrounds gather — but rather as "underutilised" and "inefficient." These are economic terms, and they have insinuated themselves into a conversation that should be fundamentally about values. An elderly woman who sits there every morning to feed the pigeons is not "using" the space "efficiently." A child playing unsupervised is not generating "economic output." And yet these activities are precisely what makes the green valuable.

I urge you to consider what the developers do not mention: the proven links between access to green space and mental health; the disproportionate impact on the elderly and on families who cannot afford to travel to other parks; the loss of habitat for the local bird population; the contribution of the green space to air quality and flood management. These are not merely environmental issues. They are justice issues.`

const EDEXCEL_P1_SET_C_SOURCE = 'Letter to local council, submitted by community group, 2024'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 EXTRACTS: Fiction & Imaginative Writing (1EN0/02)
// ═══════════════════════════════════════════════════════════════════════════

const EDEXCEL_P2_SET_A_SOURCE_1 = `The café was not remarkable in any way. It occupied a corner site on a street that contained several hundred other cafés, each one offering roughly the same menu at roughly the same price. Yet on Tuesday mornings, a particular group of women gathered at the corner table — the same table every week, as if it had been reserved for them in perpetuity.

They were not young, nor were they fashionable. Their clothes were the clothes of people who had stopped trying to impress the world with their appearance roughly two decades ago. But when they laughed — and they laughed often — there was a quality to it that made other customers turn to look. It was not the high, performative laughter of people conscious of an audience. It was the laughter of people who had known each other so long that they could communicate in shorthand, could reference events and jokes from years past, could find humour in the smallest observations of daily life.

Rosalind had been coming to Tuesday mornings for eleven years. She had not planned it. It had begun when her marriage ended, when she had needed somewhere to be on a day when staying at home felt impossible. One of her friends had invited her to join the group, and she had come, expecting to feel like an intruder. Instead, she had found something she had not realised she was searching for: a space where she belonged without having to perform or explain or justify.

She arrived, as always, at ten past ten. The table was empty. She sat down, ordered coffee, and waited. By ten twenty, she was alone. By ten thirty, she had begun to understand that something was wrong.`

const EDEXCEL_P2_SET_A_SOURCE_1_REF = 'Original short fiction, 2024'

const EDEXCEL_P2_SET_A_SOURCE_2 = `It took me five years to understand that my mother had been leaving me all along. Not physically — she was present in the kitchen, in the garden, driving me to school. But something essential had withdrawn. I could feel it in the way she looked at me: with affection, certainly, but also with a kind of distance, as though she was watching me from the other side of glass.

Later, I learned about the depression, the medication, the appointments with the therapist whose name I never knew. My father spoke about it in quiet conversations with his sister, conversations that ended abruptly when I entered the room. For years, I interpreted her distance as rejection. It took becoming an adult myself to understand that her withdrawal was not a comment on me, but a symptom of her own struggle with consciousness itself.

When she finally spoke about it — this was after I had moved away, after I had my own problems to contend with — she apologised. "I was not present for you," she said. "I was somewhere else."

I told her what I had come to believe: that her honesty about her absence was a kind of presence. That her refusal to pretend was a gift. That I would rather have a mother who was honestly struggling than one who performed a false competence.`

const EDEXCEL_P2_SET_A_SOURCE_2_REF = 'Adapted from contemporary memoir, 2023'

const EDEXCEL_P2_SET_B_SOURCE_1 = `The library closed on a Tuesday in November. The notice had been posted three months earlier, but the reality of closure came as a shock nonetheless. Mrs Chen, who had worked there for twenty-three years, arrived on the Tuesday to find the doors locked, the books already packed into boxes. She had not said goodbye to the regular patrons. There had been no ceremony, no acknowledgment of the thousands of hours she had spent helping people find stories.

The building itself was not grand — a Victorian red-brick structure that had been adapted and modified countless times. Its roof leaked. The heating system was temperamental. The computers were old. In the calculus of local government budgets, its closure made sense. It was inefficient. Its footfall did not justify its cost. In purely economic terms, keeping it open was indefensible.

But the closure eliminated a crucial gathering point for the elderly, the unemployed, the lonely. It removed a space where children could experience books before they could afford to buy them. It severed a connection for people whose lives had few connections remaining.`

const EDEXCEL_P2_SET_B_SOURCE_1_REF = 'Adapted from local news feature, BBC Local, 2023'

const EDEXCEL_P2_SET_B_SOURCE_2 = `I was born in 1947 in a village where electricity was still a novelty. My childhood was lived by lamplight and candle, by the rhythms of agriculture and season. We did not have a telephone. News arrived by post or by word of mouth. The wider world was something that happened somewhere else, to other people.

Then I went to grammar school, and the world rushed in. Suddenly I was encountering ideas, books, people from different backgrounds. I felt, for the first time, a hunger — a hunger for knowledge, for understanding, for connection with the world beyond my village. That hunger has never left me.

Now, living in an age of unlimited information, of instant communication, of constant connectivity, I observe something curious: I do not see this hunger in young people. They have access to everything, and yet they seem satisfied with nothing, endlessly scrolling, endlessly consuming, but never quite sated. Perhaps it is the nature of unlimited access to diminish appetite.`


const EDEXCEL_P2_SET_C_SOURCE_1 = `The house had been empty for three years. Not abandoned — Emma's father had paid the property taxes, arranged for the gutters to be cleaned, ensured it did not fall into official neglect. But no one had lived there. No light had burned in the windows. No voice had carried through the hallways. The silence had accumulated like dust.

Now, standing in the doorway, Emma felt the weight of it. Not of the house itself — the physical structure was neither heavy nor light, merely there — but of what it contained. In the kitchen, her mother's recipe books sat on the shelf above the stove, their spines faded from decades of sunlight. In the study, her father's reading glasses rested on the desk beside a half-read novel, bookmarked three years ago at a page he had never returned to.

The house was a museum of interruption. It preserved a life mid-pause, assuming that resumption was still possible. But Emma knew, standing in that hallway, that nothing could resume. The pause had become permanent.`

const EDEXCEL_P2_SET_C_SOURCE_1_REF = 'Original literary fiction composition'

const EDEXCEL_P2_SET_C_SOURCE_2 = `I understand now why my grandmother kept the letters. For fifty years, she maintained a box beneath her bed containing correspondence with her sister, who emigrated to Australia in 1952. They wrote monthly, sometimes more frequently during periods of crisis or celebration. The letters were neither literary nor formally beautiful. They were accounts: of weather, of children\'s achievements, of small grievances and larger joys.

When my grandmother died, I was asked to sort through her papers. I found the letters — hundreds of them — arranged chronologically, each envelope carefully preserved, the stamps from different eras cataloguing decades of postal history. I could have recycled them. They held no market value, no particular artistic merit.

Instead, I began to read. And as I read, I encountered something I had not anticipated: the lived texture of a relationship that spanned the entire second half of the twentieth century. The letters revealed a sister bond that persisted across continents, that survived separations and deaths and changing circumstances. They were not great literature, but they were testimony to the ordinary extraordinary labour of maintaining love across distance and time.`

const EDEXCEL_P2_SET_C_SOURCE_2_REF = 'Adapted from contemporary memoir, 2024'
const EDEXCEL_P2_SET_B_SOURCE_2_REF = 'From collected essays by William Davies, 2022'

// ═══════════════════════════════════════════════════════════════════════════
// EDEXCEL PAPER 1: NON-FICTION & TRANSACTIONAL WRITING (1EN0/01)
// ═══════════════════════════════════════════════════════════════════════════

export const edexcelMockExams: MockExamPaper[] = [
  {
    id: 'edexcel-lang-p1-set-a',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/01 - Set A',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p1-a-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_SET_A_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-a-q1',
            questionNumber: 1,
            questionText: 'What do you understand from the extract about Mrs Patterson and her experience of the factory closure?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'Mrs Patterson worked at the factory for thirty-eight years. She had a routine of clocking out at five past five every day. The closure meant she lost her job and her future was uncertain. The action of "clocking out" and "walking out" shows she expected to return but didn\'t.',
              'Grade 6-7': 'Mrs Patterson\'s thirty-eight-year tenure establishes her complete institutional identity. The precision of "five past five" and the repetition "as she had every weekday for nearly four decades" emphasise the ritualistic nature of her employment — work has structured her entire adult life. Her exit is presented as simultaneously ordinary and catastrophic: she performs the familiar ritual unaware it is final. The closure severs not merely a job but a framework of meaning and temporal structure that has defined her existence.',
            },
            markScheme: [
              'Identifies key details (38 years, daily routine)',
              'Understands the significance of the routine',
              'Recognises the impact of the closure',
              'Supports with textual reference',
            ],
          },
          {
            id: 'edexcel-p1-a-q2',
            questionNumber: 2,
            questionText: 'Analyse how the writer presents the factory building across the extract. Comment on the language choices and effects.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The factory is described as a "Victorian building, red brick and imposing" which makes it sound important and strong. It is called a "landmark" which shows it was well-known. The phrase "monument to permanence" suggests it was built to last forever. The writer says the windows "looked out onto the high street" for 150 years, showing it was there a very long time. By the end, the windows "reflected only the empty street back at itself," which is sad because now there is nothing to see.',
              'Grade 6-7': 'The writer constructs the factory as an embodiment of historical permanence through accumulating temporal markers. "Victorian," "imposing," and "monument to permanence" establish it as a structure designed for duration. The extended metaphor of vision — windows that "looked out," that "reflected" — personifies the building as a witnessing consciousness observing the town\'s decay. Paradoxically, the factory endures while everything around it deteriorates. The final image presents a reversal: windows that once observed become mirrors reflecting absence. The progression from subject (the factory watching) to object (the factory reflected) enacts a loss of agency and presence. The precision of "hundred and fifty years" anchors the building in historical time, making its closure not merely an economic event but a rupture in temporal continuity.',
            },
            markScheme: [
              'Identifies appropriate language techniques (metaphor, personification)',
              'Explains effects on reader',
              'Uses textual evidence',
              'Shows sophisticated analysis of writer\'s choices',
            ],
          },
          {
            id: 'edexcel-p1-a-q3',
            questionNumber: 3,
            questionText: 'The writer contrasts what people "understood intellectually" with what they found it hard to "accept as real." Explain this contrast and why the writer makes it.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer is saying that people knew the factory would close — they had read the statements and heard the stories. But knowing it in their minds was different from accepting it was really happening. This matters because it shows how people can understand facts but still be shocked when they happen. The contrast emphasises that reality is more powerful than information.',
              'Grade 6-7': 'The distinction between intellectual understanding and emotional acceptance reveals a gap between abstract knowledge and embodied experience. People could process the information logically — they understood the economic rationale — yet they remained psychologically unprepared for actualisation. This gap is particularly significant for a community whose identity and economic security were bound to the factory\'s existence. The writer implies that understanding is insufficient when faced with structural change; the human subject resists the rationalisation of loss. By highlighting this contrast, the writer challenges a utilitarian logic that assumes information equals acceptance, and instead asserts the legitimacy of emotional difficulty in the face of material reality.',
            },
            markScheme: [
              'Explains the intellectual/emotional distinction',
              'Shows awareness of the writer\'s purpose',
              'Uses specific textual support',
              'Considers implications for community',
            ],
          },
          {
            id: 'edexcel-p1-a-q4',
            questionNumber: 4,
            questionText: 'To what extent do you agree that the writer presents the factory closure as a tragedy? Use evidence to support your judgement.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I think the writer does present it as a tragedy. The extract is sad and emotional. Words like "stunning silence," "stood in stunned silence," and the image of gates being locked show loss. Mrs Patterson losing her job after 38 years is tragic. But you could argue it is not a tragedy because the writer also explains that the factory faced competition and efficiency targets, which are business reasons. So it is inevitable rather than tragic.',
              'Grade 6-7': 'I substantially agree that the writer presents closure as tragedy, though with important nuance. The language of emotional devastation — "stunned silence," "solid ground beneath them had given way" — employs tragic rhetoric. The extended description of the factory\'s historical significance, its role as "landmark" and "reference point," establishes what is lost as culturally meaningful, not merely economic. The synecdoche of Mrs Patterson (specific individual loss standing for collective catastrophe) personalises the impact. However, the writer\'s opening acknowledgment of economic rationale ("overseas competition") complicates simple tragedy: this is a tragedy structured by systemic forces, not chance or individual failing. The writer seems to argue that the tragedy lies not in the event itself but in the society\'s inability to value what the factory provided beyond profit — community, identity, continuity. This transforms the narrative from individual misfortune into social critique.',
              'Grade 8-9': 'The writer constructs a sophisticated tragic narrative that operates simultaneously as social analysis. The presentation as tragedy is evident: the classical tragic structure moves from stability through revelation to catastrophe; the individual (Mrs Patterson) serves as tragic protagonist whose unknowing final action ("clocked out") proves to be her final day; the community faces recognition of precarity masked as permanence. Yet the writer resists pure tragedy — there is irony in presenting economic rationalisation as banal inevitability rather than malevolent fate. The tragedy, then, is not of classical form but of what the sociologist might call "structural tragedy": the collision between human need for continuity and meaning with economic systems that recognise only quantifiable metrics. By invoking the factory\'s historical embeddedness ("hundred and fifty years," "monument to permanence"), the writer argues that what is tragic is not the closure per se but the impossibility, within current economic frameworks, of valuing non-quantifiable social goods. The writer\'s restraint — the absence of explicit moral condemnation — paradoxically intensifies the tragic effect by suggesting this is simply how our system operates.',
            },
            markScheme: [
              'Makes a clear judgement on whether it is presented as tragedy',
              'Uses evidence effectively',
              'Shows sustained evaluation',
              'Considers multiple perspectives',
              'Demonstrates sophisticated understanding of tragedy as concept',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-a-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You should write approximately 300-500 words.',
        totalMarks: 56,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-a-q5',
            questionNumber: 5,
            questionText: 'An online news platform is running a campaign called "Invisible Institutions" to highlight community spaces and services that are at risk of closure.\n\nWrite an article for publication on this platform, arguing for the preservation of an important community space. You should use persuasive techniques and compelling language to engage readers and convince them of your position.\n\n(32 marks for content and organisation / 24 marks for technical accuracy and vocabulary)',
            marks: 56,
            suggestedTimeMinutes: 50,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'The Local Library Must Survive: Why Our Community Cannot Afford to Lose This Space\n\nOur local library is under threat of closure. The council says it is inefficient and underused. But this tells only part of the story. The library is not just a building with books — it is a vital space where our community gathers.\n\nFor many people, the library is a refuge. Elderly residents come to read the newspapers and speak to staff members who treat them with dignity. Unemployed people use the computers to search for jobs and receive help with applications. Children from families that cannot afford books discover stories that change their lives. The library is where people find not just information but connection.\n\nThe council\'s decision to measure the library\'s value purely in financial terms is wrong. Some things are too important to be measured by profit. Community, belonging, education — these cannot be calculated in a spreadsheet. Yet they are precisely what the library provides.\n\nI urge the council to reconsider this decision. Do not close our library. Invest in it. Upgrade it. Staff it properly. Communities are built on institutions that serve human needs rather than economic ones. The library is one of those institutions.',
              'Grade 6-7': 'The Invisible Institution: Why We Must Preserve Our Public Libraries\n\nOur library is closing. In three months, the doors will lock. The books will be moved to storage. The computers will be switched off. And our community will have lost something it did not realise it depended upon.\n\nThe closure is justified in the language of efficiency and cost-benefit analysis. The library, we are told, has "low footfall," "declining circulation," and "insufficient cost-per-visitor." These statistics are accurate and, in purely economic terms, they support closure. Yet they obscure what matters most: the library\'s irreplaceable social function.\n\nConsider what the library provides. For the elderly on fixed incomes, it offers free access to information, warmth, and social interaction. For children in families that cannot afford books, it represents a gateway to literacy and imagination. For the unemployed, it provides not just job-search facilities but a space of dignity where people retain identity beyond their economic status. For the lonely, it offers community and connection without the transaction-based logic of consumption.\n\nWhat the closure represents is a fundamental devaluation of these goods. Our society has decided, collectively and often unconsciously, that if something cannot be measured economically, it does not matter. But human flourishing cannot be quantified. Community cannot be monetised. Belonging cannot be calculated. Yet these are what libraries provide.\n\nThe library is not a luxury service for the culturally elite. It is an institution of democratic access — a space where all citizens, regardless of income, can access knowledge and each other. To close it is not merely a financial decision. It is a choice about what kind of society we wish to be.\n\nWe can afford to preserve our library. What we cannot afford is the loss of the spaces that hold our communities together.',
              'Grade 8-9': 'The Disappearing Commons: On the Closure of Public Libraries and the Erosion of Civic Space\n\nOur public library is scheduled for closure. The justification is straightforward: declining visitor numbers, rising maintenance costs, and an economics that no longer recognise value in non-revenue-generating services. The decision is presented as regrettable but inevitable — the rational response to an intractable fiscal reality.\n\nThis narrative deserves interrogation. The premise that public goods should be evaluated by economic metrics alone represents a particular ideological choice, not an inevitable truth. Libraries are not failing because they are "inefficient"; they are undervalued because we have constructed economic frameworks that systematically render non-commodified human goods invisible.\n\nConsider what the library actually provides — services that the market cannot and will not supply. For those without disposable income, it offers free access to information, technology, and cultural resources. For the elderly and isolated, it furnishes not merely books but human connection and spatial belonging. For children in economically disadvantaged households, it represents a crucial site of intellectual development independent of family resources. For the unemployed, it provides dignity and agency in a social context that does not demand consumption. These functions cannot be priced; they cannot be externally monetised; and yet they are precisely those that generate genuine social value.\n\nThe library represents something increasingly rare in contemporary capitalism: the commons — a space constituted around need and access rather than profit and exchange. Its closure enacts a loss at the level of both material provision and symbolic meaning. It tells citizens that their dignity, their intellectual life, their need for community, is not society\'s concern if it cannot be rendered productive.\n\nI do not argue that libraries are cost-neutral. Rather, I contend that some costs are justified by benefits that exceed economic calculation. A functioning democracy requires spaces where citizens encounter each other as equals, where access is predicated on need rather than affluence, where the cultural and intellectual life of all is supported. Libraries are such spaces.\n\nThe library\'s "inefficiency" is, paradoxically, its greatest value. It serves those the market has deemed unprofitable. It resists commodification. It persists in asserting that human flourishing involves goods beyond consumption. In closing it, we do not merely lose a building. We lose a crucial institution of democratic life.',
            },
            markScheme: [
              'Writes with clear persuasive purpose and engaging tone',
              'Uses rhetorical techniques (metaphor, appeals, repetition)',
              'Structures argument logically with clear sections',
              'Adapts register and vocabulary appropriately for publication',
              'Uses varied sentence structures for effect',
              'Demonstrates accurate spelling, punctuation, grammar',
              'Uses sophisticated vocabulary precisely',
            ],
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 1: SET B
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-set-b',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/01 - Set B',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p1-b-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_SET_B_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-b-q1',
            questionNumber: 1,
            questionText: 'According to the extract, what problems result from the feral cat population?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The extract mentions that the feral cats spread disease, predate on native wildlife, and represent "organised chaos at the margins of urban life." They damage ecosystems and pose health risks.',
              'Grade 6-7': 'The text identifies three problems: disease transmission, predation on native species (damaging biodiversity), and the creation of what the writer calls "organised chaos at the margins of urban life" — suggesting they represent disorder and ecological imbalance in urban ecosystems.',
            },
            markScheme: [
              'Identifies disease transmission',
              'Identifies predation on wildlife',
              'Identifies ecosystem/urban disruption',
              'Uses textual support',
            ],
          },
          {
            id: 'edexcel-p1-b-q2',
            questionNumber: 2,
            questionText: 'Analyse how the writer uses language in the first paragraph to establish the scale and nature of the feral cat problem.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer begins with "approximately 8.7 million," which is a huge number showing the scale of the problem. The writer then says feral cats "outnumber their domesticated cousins" — there are more feral cats than pet cats. The phrase "liminal space" (between two things) suggests the cats exist between being wild and domestic, between being noticed and invisible. This shows the complexity of the problem.',
              'Grade 6-7': 'The opening statistic "8.7 million" establishes numerical magnitude immediately. The precision of "8.7" lends scientific authority while the quantity itself shocks. The writer then establishes a paradox: these animals are simultaneously omnipresent ("present everywhere") and invisible ("invisible to most people"), existing in a "liminal space" — neither fully wild nor domestic, neither fully visible nor absent. This paradox is crucial: the problem is not simply that there are many cats, but that they resist categorisation and awareness. The phrase "part of the problem and yet somehow also a symptom of the problem" suggests causality loops: the cats are both cause and effect, agent and consequence. This rhetorical complexity elevates the discussion beyond mere population management to systemic dysfunction.',
            },
            markScheme: [
              'Identifies the shocking statistic and its effect',
              'Analyses the paradox of presence/invisibility',
              'Explains the significance of "liminal"',
              'Shows understanding of the writer\'s purpose',
            ],
          },
          {
            id: 'edexcel-p1-b-q3',
            questionNumber: 3,
            questionText: 'The writer describes three different municipal responses to feral cat populations. Which response does the writer seem to favour? Explain your answer with reference to the text.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer seems to favour Trap-Neuter-Return because it is described as having "achieved genuine success in reducing population growth while maintaining animal welfare." The word "genuine" shows the writer thinks this approach really works. In contrast, extermination is called "expensive, temporary, and morally questionable." Doing nothing is also criticised. So the writer clearly prefers TNR.',
              'Grade 6-7': 'The Trap-Neuter-Return programme is presented most positively through the evaluative language "achieved genuine success," which confers both effectiveness (success) and authenticity (genuine). The programme is framed as solving the problem while respecting animal welfare — a moral imperative the writer implicitly endorses. In contrast, "simple extermination" is dismissed through multiple critiques: "expensive" (economic failure), "temporary" (ineffectual long-term), and "morally questionable" (ethical failure). The third option, doing nothing, is reduced to a passive failure ("done nothing, allowing the colonies to persist and expand"), presented as abdication rather than policy. The writer\'s preference for TNR is clear; it is the only approach that satisfies both practical and moral criteria.',
            },
            markScheme: [
              'Identifies TNR as the favoured approach',
              'Uses evaluative language from the text',
              'Explains why other approaches are criticised',
              'Shows close textual analysis',
            ],
          },
          {
            id: 'edexcel-p1-b-q4',
            questionNumber: 4,
            questionText: 'To what extent do you agree that the feral cat problem is fundamentally about failure to take responsibility for domestic animals? Use evidence from the text to support your judgement.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I agree with this view. The text says the feral populations "descend from domestic cats that were abandoned, lost, or allowed to roam freely." This shows that humans created the problem by not caring for their pets properly. If people kept their cats indoors or neutered them, there would be fewer feral cats. But I also think it is partly about population growth — the text says a pair of cats can produce 420 descendants in seven years, so even responsible people cannot control all the cats once the population starts.',
              'Grade 6-7': 'I substantially agree that the problem originates in human irresponsibility, though the situation is more complex than simple failure. The text explicitly traces the problem\'s etiology: "They descend from domestic cats that were abandoned, lost, or allowed to roam freely." This establishes human negligence — abandonment, loss, or deliberate freedom — as causative. However, the writer moves beyond simple blame through the biological fact: a single breeding pair can produce 420 descendants in seven years. This suggests that initial human irresponsibility generates a cascade that becomes unmanageable through human agency alone. The problem, then, is twofold: initial negligence and the subsequent inability to contain its consequences. The writer\'s presentation of three municipal responses — Trap-Neuter-Return, extermination, inaction — suggests that while the root cause is human irresponsibility, the solution is systemic and ongoing, not merely individual correction.',
              'Grade 8-9': 'I agree with significant qualification. The text\'s genealogy of the feral population traces it to human irresponsibility: "abandoned, lost, or allowed to roam freely." This establishes human agency as initiating cause. However, the writer constructs a narrative of escalation and system failure that complicates moralising blame. The exponential reproductive capacity ("420 descendants in seven years") transforms an individual moral failing into an ecological problem that exceeds individual or even municipal control. What emerges is a critique not merely of individual pet owners but of the systems — legal, economic, infrastructural — that enable abandonment without consequence. The writer\'s framework of three municipal responses suggests that the problem cannot be solved retrospectively; it requires ongoing management. Furthermore, the text\'s language of cats developing "social structures, hierarchies, relationships... foreign to human understanding" subtly repositions them from consequence to agency — they are not merely symptom but subjects with their own logic. This complicates a purely responsibilist narrative. The writer seems to argue that while the problem originates in human failure, its solution requires systems-level intervention, not moral correction of individuals.',
            },
            markScheme: [
              'Makes a clear judgement with qualification',
              'Uses evidence effectively',
              'Considers causation and complexity',
              'Shows understanding of systems thinking',
              'Sustains balanced evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-b-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You should write approximately 300-500 words.',
        totalMarks: 56,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-b-q5',
            questionNumber: 5,
            questionText: 'Your local council is considering implementing a Trap-Neuter-Return (TNR) programme for feral cat colonies in your area. Write a letter to your council representative arguing either for or against this initiative.\n\nYou should:\n- Take a clear position\n- Use evidence and reasoned argument\n- Anticipate and address counter-arguments\n- Adopt an appropriate formal tone\n\n(32 marks for content and organisation / 24 marks for technical accuracy and vocabulary)',
            marks: 56,
            suggestedTimeMinutes: 50,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': '[Your Address]\n[Date]\n\n[Councillor Name]\n[Council Address]\n\nDear [Councillor Name],\n\nI am writing to support the proposed Trap-Neuter-Return (TNR) programme for feral cats in our area.\n\nOur council has a problem with feral cat colonies. Some people want to remove the cats by killing them, but I believe TNR is the better solution. TNR works by catching cats, sterilizing them, and returning them to their colonies. This means the population will not grow, but the cats are not harmed.\n\nThere are several reasons why TNR is good. First, it is humane — we do not kill animals when we do not have to. Second, it actually works — studies show TNR reduces population growth more effectively than killing does. Third, it is cost-effective — we spend money once to sterilize, not repeatedly catching and killing cats.\n\nSome people worry that TNR is too expensive. But the alternative, killing large numbers of cats repeatedly, is actually more expensive. Other people think the cats will still cause problems, but a stable, managed population is better than an expanding one.\n\nI urge you to support TNR. It is the right choice both morally and practically.\n\nYours faithfully,\n[Name]',
              'Grade 6-7': '[Your Address]\n[Date]\n\n[Councillor Name]\n[Council Address]\n\nDear [Councillor Name],\n\nI am writing to advocate strongly for the implementation of a Trap-Neuter-Return (TNR) programme to address the feral cat population in our community.\n\nOur area faces a genuine problem with feral cat colonies. These populations pose ecological risks — predation on native wildlife — and public health concerns. However, the response must be proportionate and humane.\n\nTNR represents the most effective solution. The programme operates on a simple principle: capture, sterilize, and return cats to their established colonies. This approach delivers multiple benefits. First, it interrupts reproductive cycles, stabilizing population growth without requiring ongoing removal. Second, it maintains animal welfare: contained populations develop stable structures and diminish aggressive territorial behaviour. Third, it proves more cost-effective than repeated extermination, which requires permanent funding and produces only temporary results.\n\nI acknowledge concerns that TNR may not fully eliminate feral populations. This is true. However, the alternative — continuous removal — is itself both more expensive and more cruel. Our council faces a choice not between elimination and non-elimination, but between humane management and brutal extermination.\n\nThe evidence is compelling. Cities implementing TNR programmes report successful population stabilization within two to three years. Public health authorities increasingly recognise TNR as the most ethical approach. Most importantly, TNR treats animals with dignity while addressing legitimate community concerns.\n\nI urge you to support the TNR programme. It represents sound policy, fiscal responsibility, and ethical principle aligned.\n\nYours faithfully,\n[Name]',
              'Grade 8-9': '[Your Address]\n[Date]\n\n[Councillor Name]\n[Council Address]\n\nDear [Councillor Name],\n\nI write in support of the proposed Trap-Neuter-Return (TNR) programme, arguing that it represents the most effective, economical, and ethical response to our community\'s feral cat population.\n\nOur council confronts a genuine problem. Feral colonies pose ecological risks through predation on native species and public health concerns through disease transmission. These risks demand systematic intervention. However, the form that intervention takes reflects our values as a community.\n\nThe conventional response — removal or elimination — fails on multiple grounds. First, it is inefficient: repeatedly culling a population without addressing reproduction creates a perpetual management burden and expense. Second, it is economically irrational: permanent funding is required for temporary results. Third, it is ethically indefensible: mass killing of sentient creatures, while sometimes unavoidable, should not be our default response when alternatives exist.\n\nTNR offers a superior approach grounded in ecological reality. By sterilizing established colonies while returning them to their territories, TNR stabilizes populations while preserving the territorial structures that actually reduce aggressive behaviour and conflict. The programme leverages biology rather than fighting it: a sterilized population naturally declines as unmated individuals age. Within two to three years, population equilibrium emerges without ongoing intervention.\n\nI anticipate concerns about costs. Yet economic analysis reveals that TNR\'s per-animal costs decline rapidly; year one\'s expenditure addresses the problem more comprehensively than indefinite culling. Furthermore, stabilized feral colonies reduce the public health risks associated with the displacement and behavioural stress that trigger disease transmission.\n\nSome worry that TNR is insufficiently decisive. Yet decisiveness divorced from effectiveness is merely expensive performance. Our community deserves a solution that actually works.\n\nI urge your support. TNR represents the evidence-based, fiscally responsible, and ethically sound path forward.\n\nYours faithfully,\n[Name]',
            },
            markScheme: [
              'Establishes clear position on TNR',
              'Develops logical argument with evidence',
              'Addresses counter-arguments effectively',
              'Maintains appropriate formal register throughout',
              'Structures letter correctly with salutation and closing',
              'Uses sophisticated vocabulary precisely',
              'Demonstrates accurate grammar, spelling, punctuation',
            ],
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 1: SET C
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-set-c',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Non-Fiction Texts and Transactional Writing',
    subtitle: 'English Language 1EN0/01 - Set C',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p1-c-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_SET_C_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p1-c-q1',
            questionNumber: 1,
            questionText: 'What does the writer mean by describing the green space as "underutilised" and "inefficient"? Why does the writer object to this language?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The developers describe the green as "underutilised" meaning not many people use it, and "inefficient" meaning it does not produce economic output. The writer objects because these are business terms that judge value only by money and use. But the green has value beyond economics — it provides space for people to relax, socialise, and be outdoors.',
              'Grade 6-7': 'These terms apply economic metrics to a public good, suggesting the green "fails" because it does not generate revenue or serve economic productivity. The writer objects because this language colonises the discussion, imposing financial logic onto spaces that should be evaluated by different criteria: social benefit, public health, democratic access, environmental function. By highlighting the "linguistic sleight of hand," the writer reveals how economic vocabulary naturalises particular values while rendering others invisible.',
            },
            markScheme: [
              'Explains what developers mean by these terms',
              'Shows why this language is problematic',
              'References social/environmental values',
              'Uses textual evidence',
            ],
          },
          {
            id: 'edexcel-p1-c-q2',
            questionNumber: 2,
            questionText: 'Analyse the writer\'s use of examples in the second paragraph. What is the effect of these examples?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The writer gives examples of people using the green: an elderly woman feeding pigeons and a child playing. These examples show real people who benefit from the space, but in ways that do not produce economic value. The woman is not spending money or producing output. The child is just playing. This makes the reader sympathize — these are valuable activities even though they are not "efficient."',
              'Grade 6-7': 'The examples function as ethical counterargument. By presenting concrete human practices — the elderly woman\'s morning ritual, the unsupervised child\'s play — the writer instantiates activities that the economic vocabulary renders invisible. The woman\'s feeding pigeons is "not \'using\' the space \'efficiently\'", but this practice embodies precisely the social goods the economic framework cannot value: routine, care, ritual, modest contentment. The child\'s unsupervised play similarly resists quantification; yet it represents crucial developmental access. By humanising the green space\'s use through specific, tender examples, the writer creates emotional and ethical resistance to purely economic evaluation.',
            },
            markScheme: [
              'Identifies the concrete examples',
              'Explains their human significance',
              'Shows contrast with economic logic',
              'Analyses persuasive effect',
            ],
          },
          {
            id: 'edexcel-p1-c-q3',
            questionNumber: 3,
            questionText: 'In the final paragraph, the writer lists several benefits of keeping the green space. How does this list contribute to the writer\'s overall argument?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'The list includes mental health, flood management, habitat, and air quality. This shows the green space has many different purposes that the developers have not mentioned. Mental health is important for people. Flood management is practical and protects the community. Habitat protects animals. Air quality helps everyone breathe. By including all these benefits, the writer shows the developers are only looking at money, not the many ways the green space helps the community.',
              'Grade 6-7': 'The list subversively reframes the discussion by introducing criteria the economic logic excludes. "Mental health" introduces a medical/psychological dimension; "proven links" appeals to research authority. "Disproportionate impact on the elderly and families" shifts from abstract value to justice concerns — the elderly are vulnerable and cannot access alternative spaces. "Habitat" and "air quality" shift to environmental registers. Critically, the writer notes that "these are not merely environmental issues. They are justice issues" — making explicit that the discussion is fundamentally about who benefits from development and who bears costs. The list\'s comprehensiveness implies that a complete evaluation cannot be purely economic; it must integrate public health, environmental, and justice dimensions.',
            },
            markScheme: [
              'Identifies the multiple benefits listed',
              'Shows how list expands evaluation criteria',
              'Explains the significance of "justice issues"',
              'Demonstrates rhetorical effect',
            ],
          },
          {
            id: 'edexcel-p1-c-q4',
            questionNumber: 4,
            questionText: 'To what extent do you agree that the writer\'s arguments against developing the green space are compelling? Use evidence from the text to support your judgement.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 4-5': 'I think the writer makes some good points. The examples of the elderly woman and child show real people who would lose something important. And the benefits list at the end — mental health, flood management, habitat — shows the green does more than just sit there unused. However, the developers might say the shopping centre would provide jobs and tax revenue, which the green space does not. The writer does not really answer this argument. So the arguments are partly compelling but not fully.',
              'Grade 6-7': 'I find the writer\'s arguments substantially compelling, though with acknowledged limitations. The primary strength is the reframing of the discussion from economic terms to social/environmental justice. By exposing "linguistic sleight of hand," the writer reveals that economic language is not natural or neutral but ideological — a particular way of assigning value. The examples (elderly woman, child) and the justice-based argument are rhetorically powerful because they assert human and environmental goods that economic calculation excludes. However, the writer does not engage substantively with the developers\' counter-argument about economic benefit, employment, and tax revenue. A fully compelling argument would need to address how the lost economic benefit is weighed against the social/environmental gains. The writer implies that some things should not be economised — "not everything should be monetised" — but does not fully justify why public goods should be prioritised over economic development and employment.',
              'Grade 8-9': 'I find the arguments substantially compelling within their rhetorical register, with important caveats about what they exclude. The writer\'s primary move — exposing economic language as ideological rather than neutral — is philosophically sound and rhetorically effective. By highlighting "linguistic sleight of hand," the writer performs an ideological critique: she reveals that to call the green "underutilised" is not to describe objective reality but to impose a particular evaluative framework. This is persuasive because it challenges readers to recognise their complicity in naturalised economic logic. The turn toward justice ("these are justice issues") is strategically powerful because it shifts from environmental preservation to equity — the differential capacity of elderly and poor families to access alternative goods. The writer\'s examples create affective identification that rational argument alone cannot achieve. However, the arguments are less compelling when examined for what they exclude: substantive engagement with economic necessity, the genuine employment benefits of development, and the possibility that some communities may rationally choose economic benefit over green space preservation. The writer asserts that "not everything should be monetised" but does not fully justify this normative claim or address how societies decide which things should be protected from market logic. Furthermore, the opposition between "economic benefit" and "community benefit" is presented as stark; the writer does not explore whether these might sometimes align or whether communities might have complex, non-uniform preferences. The arguments are compelling as critique of pure economism; they are less compelling as a complete policy framework.',
            },
            markScheme: [
              'Makes clear judgement with qualification',
              'Evaluates the ideological critique effectively',
              'Acknowledges both strengths and limitations',
              'Shows awareness of excluded perspectives',
              'Demonstrates sophisticated understanding of argument',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-c-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section. You should write approximately 300-500 words.',
        totalMarks: 56,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p1-c-q5',
            questionNumber: 5,
            questionText: 'Write a response article for a local newspaper in which you defend the proposed shopping centre development. You should:\n- Present the economic and social benefits of the development\n- Address the environmental and community concerns raised by opponents\n- Adopt a persuasive but balanced tone\n- Structure your argument logically\n\n(32 marks for content and organisation / 24 marks for technical accuracy and vocabulary)',
            marks: 56,
            suggestedTimeMinutes: 50,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'Economic Development and Community Benefit: Why the Riverside Shopping Centre Is Right for Our Town\n\nThe proposal to develop Riverside Green as a shopping centre has attracted criticism from those who value the current open space. I understand these concerns, but I believe the development will ultimately benefit our entire community.\n\nFirst, the shopping centre will create jobs. The construction will provide temporary employment, and the completed centre will employ hundreds of people. This is crucial for our town, which has seen declining employment in recent years. Second, the centre will attract customers and investment. This means more money circulating in the local economy. Shops and restaurants will flourish. The council will receive tax revenue to spend on schools and public services.\n\nI acknowledge that we will lose the green space. This is a real loss. But our town has other parks and open spaces. This particular piece of land has been underused for years. Meanwhile, we need jobs, economic vitality, and the investment that only a major development can bring.\n\nSome worry about environmental concerns. However, the development will include green roofs and sustainable design. We can protect the environment and develop economically at the same time.\n\nI believe this development is necessary for our town\'s future. Let\'s not let perfect be the enemy of good. We need jobs and economic growth. The shopping centre provides both.',
              'Grade 6-7': 'Making Progress: How Riverside Shopping Centre Will Benefit Our Community\n\nThe proposed Riverside Shopping Centre has provoked debate about development, environmental responsibility, and community values. I support the development, believing it addresses genuine community needs that a green space, however pleasant, cannot meet.\n\nEconomic regeneration is not a luxury; it is essential. Our town has suffered disproportionately from deindustrialisation and retail decline. The shopping centre will generate employment across construction, retail, hospitality, and services — jobs at every skill level. Economic analysis suggests 400+ permanent positions. For a town with persistent unemployment, this is transformative. Furthermore, increased footfall benefits existing businesses, attracts investment, and generates council revenue for public services.\n\nI recognise the environmental concerns. However, opposition frequently frames this as a binary choice: development or preservation. This false dichotomy ignores possibilities for genuine integration. The proposed centre includes extensive green roofs, integrated planting, and sustainable design. We can develop and maintain environmental responsibility.\n\nThe green space, while pleasant, serves limited functions. Visitor numbers have declined steadily. Maintaining it requires public subsidy. The land could serve either as a modest recreational space or as an engine of economic regeneration. For a community facing genuine economic hardship, the choice seems clear.\n\nI propose we view this not as betrayal of environmental values but as pragmatic prioritisation. A thriving community with jobs, economic security, and public investment is itself a good — arguably a precondition for sustained environmental commitment. We should support development that balances growth with responsibility.',
              'Grade 8-9': 'Sustainable Prosperity: Reconciling Development and Community Values\n\nThe Riverside Shopping Centre proposal illuminates a fundamental tension in contemporary urban planning: how to balance economic necessity with environmental and social preservation. Opponents frame this as a stark choice between development and environment. I argue that this binary is false, and that the development, properly conceived, serves both economic and environmental interests.\n\nOur community faces material economic challenges. Deindustrialisation has eliminated traditional employment; high street decline has eroded retail vitality. Unemployment, particularly youth unemployment, persists at levels that demand intervention. The shopping centre generates estimated 400+ permanent jobs, with multiplier effects throughout the service economy. For households experiencing precarity, employment is not merely economic data — it is security, dignity, and participation. Development critics rarely address how preservation advocates propose to address these genuine material needs.\n\nThe opposition positions environmental concern against economic necessity, assuming this framing is inevitable. However, modern development need not embody this opposition. The proposed centre integrates green infrastructure — extensive roofing, vertical gardens, sustainable drainage systems. Rather than choosing between environmental responsibility and economic development, integrated design achieves both.\n\nCritically, I accept the opposition\'s justice concern while drawing different conclusions. They rightly note that environmental goods (space, air quality, habitat) are unevenly distributed. Those without resources cannot access alternative recreational space. However, the solution is not to preserve a single green space in perpetuity while leaving chronic unemployment and economic precarity unaddressed. True justice requires: (1) ensuring development is genuinely sustainable and integrated with nature; (2) guaranteeing that economic benefits are distributed fairly, not captured by investors alone; (3) maintaining and expanding other public spaces, so preservation is not concentrated in a single location.\n\nI propose we support development on condition that the council commits to: environmental integration and rigorous sustainability standards; binding local employment guarantees; and systematic investment in other public green space.\n\nThis is not a choice between environment and development. It is a choice between false austerity and genuine sustainability — development that creates prosperity while respecting environmental limits.\n\nWe need not sacrifice our values. We must, however, acknowledge that complete preservation comes at the cost of economic opportunity. True wisdom lies in integration.',
            },
            markScheme: [
              'Presents economic benefits clearly and persuasively',
              'Acknowledges environmental/community concerns respectfully',
              'Proposes balanced integration of concerns',
              'Maintains logical argument structure',
              'Adopts appropriate register for newspaper',
              'Uses sophisticated vocabulary and complex sentences',
              'Demonstrates accurate spelling, grammar, punctuation',
            ],
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 2: FICTION & IMAGINATIVE WRITING (1EN0/02)
  // ═══════════════════════════════════════════════════════════════════════════
  // SET A
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2-set-a',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/02 - Set A',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-a-reading',
        title: 'Section A: Reading',
        description: `Read the two extracts below carefully. Then answer all the questions in this section.\n\nSource 1: ${EDEXCEL_P2_SET_A_SOURCE_1_REF}\nSource 2: ${EDEXCEL_P2_SET_A_SOURCE_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-a-q1',
            questionNumber: 1,
            questionText: 'Read Source 1. Why has Rosalind come to Tuesday mornings at the café?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P2_SET_A_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'Rosalind started coming to Tuesday mornings because her marriage ended. She needed somewhere to be and staying at home was impossible. A friend invited her to join the group. She found she belonged there without having to perform or explain.',
              'Grade 6-7': 'Rosalind\'s attendance originated in crisis: her marriage ended, necessitating escape from the domestic space. Tuesday mornings provided refuge, a space where she could exist without the performance demanded elsewhere. Crucially, she found "something she had not realised she was searching for: a space where she belonged without having to perform or explain or justify." The café group offered unconditional acceptance and the comfort of long-term friendship—precisely what divorce had disrupted.',
            },
            markScheme: [
              'Identifies marriage ending as cause',
              'References need for refuge/escape',
              'Notes the appeal of acceptance',
              'Uses textual support',
            ],
          },
          {
            id: 'edexcel-p2-a-q2',
            questionNumber: 2,
            questionText: 'Analyse how the writer presents the group of women in Source 1. What qualities does the writer emphasise?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P2_SET_A_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer describes them as "not young, nor fashionable" — they don\'t try to impress. They are not "remarkable" and the café is ordinary. But when they laugh, others turn to look. Their laughter is genuine, not performative. They know each other so well they communicate in shorthand. The writer emphasises that their strength comes from genuine connection, not appearance or novelty.',
              'Grade 6-7': 'The writer constructs the group through deliberate paradox. They are unremarkable in conventional terms: unglamorous, aged, frequenting an ordinary café. Yet their presence generates attention ("made other customers turn to look"). This inversion of expectation emphasises that their power derives not from aesthetic or social capital but from authentic connection. The laughter is specifically "not the high, performative laughter of people conscious of an audience" — it is genuine. The writer emphasises intimacy ("known each other so long," "communicate in shorthand," "reference events and jokes from years past") that transcends the need for performance. Their strength is relational rather than individual, based on sustained presence and mutual understanding.',
            },
            markScheme: [
              'Identifies paradox of unremarkable/compelling',
              'Explains genuine vs. performative connection',
              'Shows understanding of relational strength',
              'Uses specific textual evidence',
            ],
          },
          {
            id: 'edexcel-p2-a-q3',
            questionNumber: 3,
            questionText: 'Now read Source 2. Compare how both sources present the theme of absence and loss.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'comparison',
            extract: EDEXCEL_P2_SET_A_SOURCE_2,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_2_REF,
            modelAnswers: {
              'Grade 4-5': 'In Source 1, Rosalind arrives to find the group has disappeared. In Source 2, the narrator\'s mother was physically present but mentally absent. Both show people being absent in different ways. In Source 1, the absence is sudden and shocking. In Source 2, the absence is slow and gradual. Both explore how absence affects the narrator — shock in one, confusion and hurt in the other.',
              'Grade 6-7': 'Both texts explore absence as a form of loss, but with different temporal structures. Source 1 constructs absence as sudden rupture: the arrival for routine encounter meets empty space. The "something was wrong" realisation is acute. Source 2, conversely, presents absence as slow erosion: the mother\'s withdrawal is gradual, imperceptible, "leaving all along." The narrator interprets her mother\'s physical presence with emotional distance as rejection until adulthood provides reinterpretation. Both texts suggest that absence is not merely physical non-presence but a withdrawal of attention, presence, or engagement. Significantly, both suggest recovery or meaning-making: Rosalind waiting (suggesting hope), the adult narrator reframing her mother\'s honesty about absence as a form of presence.',
            },
            markScheme: [
              'Identifies presence of absence theme in both',
              'Compares temporal structures (sudden vs. gradual)',
              'Notes different forms of absence',
              'Shows understanding of emotional impact',
            ],
          },
          {
            id: 'edexcel-p2-a-q4',
            questionNumber: 4,
            questionText: 'To what extent do both sources suggest that belonging requires loss? Use evidence from both texts to develop your answer.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: EDEXCEL_P2_SET_A_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'I think both sources suggest that belonging requires loss. In Source 1, Rosalind finds belonging at the café because her marriage ends. She had to lose her marriage to find the group. In Source 2, the narrator only understands her mother\'s love after becoming an adult and understanding depression. She lost the simple love of childhood to gain adult understanding. However, you could argue that loss and belonging are not directly connected — they just happen to occur together in these texts.',
              'Grade 6-7': 'Both texts substantially suggest that belonging—authentic, unconditional belonging—emerges from loss, though in different registers. Source 1 is explicit: Rosalind\'s marital breakdown generates the necessity of refuge that becomes belonging. The loss is prerequisite; she discovers the group only "when her marriage ended, when she had needed somewhere to be." The loss creates openness to connection. Source 2 operates differently: the narrator\'s loss is not of a relationship but of childhood innocence and the imagined completeness of maternal presence. The mother\'s honesty about her own struggle ("I was somewhere else") is recognised as a form of love—her refusal to perform false presence becomes more valuable than false completeness would have been. Loss here generates deeper, more mature understanding of belonging. Both suggest that unconditional belonging requires recognising and accepting loss—loss of illusion (the mother\'s perfect presence), loss of previous identity (Rosalind\'s married self). The texts imply that belonging predicated on denial of loss is false belonging; true belonging acknowledges what has been surrendered.',
              'Grade 8-9': 'I find this claim substantially supported with crucial qualification. Both texts align loss with authentic belonging, but they articulate different mechanisms. Source 1 presents loss as causative: the marital breakdown forces Rosalind into a liminal state (homeless, identity-disrupted) that generates receptiveness to new forms of belonging. The café group offers "something she had not realised she was searching for" — the loss creates the conditions for recognition of need. Source 2 presents a more complex iteration: the narrator\'s loss is not of membership but of a fantasised maternal presence. Adulthood requires recognising the mother\'s withdrawal as symptom, not rejection. The narrator then reframes the mother\'s honesty about absence as a form of genuine presence ("her honesty about her absence was a kind of presence"). Both suggest that the illusions and defensive narratives necessary for earlier forms of belonging must be surrendered for mature, authentic connection. However, I would argue the texts are more precise than my initial formulation suggests: it is not that belonging requires loss, but rather that loss can catalyse recognition of authentic belonging—and that complete belonging requires relinquishing the fantasy of completeness. Source 1\'s Rosalind does not belong because she has lost; rather, loss forces her into a state where she can recognise belonging when offered. Source 2\'s narrator does not gain belonging through loss but through reinterpretation of loss as evidence of love. The relationship between loss and belonging, then, is not simple causation but dialectical: loss disrupts false belonging (married identity, maternal fantasy), creating space for authentic forms to emerge.',
            },
            markScheme: [
              'Makes clear evaluation of claim',
              'Uses evidence from both sources',
              'Shows understanding of different loss mechanisms',
              'Considers complexity and nuance',
              'Demonstrates sophisticated analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-a-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section.',
        totalMarks: 56,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-a-q5',
            questionNumber: 5,
            questionText: 'Write a creative narrative exploring one of the following:\n\nEither:\n(a) Write a story that begins with an unexpected absence — a place, person, or group that has vanished without explanation.\n\nOr:\n(b) Write a narrative that explores the experience of belonging to a community or group, and what that belonging means to the individual.\n\nYour writing should:\n- Develop vivid, engaging characters\n- Create a clear sense of place or setting\n- Use language effectively to create mood and atmosphere\n- Explore emotional depth\n\n(32 marks for content and organisation / 24 marks for technical accuracy and vocabulary)',
            marks: 56,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': '[Student narrative about choosing option (a): An unexpected absence]\n\nThe Chess Club\n\nEvery Thursday evening for three years, Michael had climbed the narrow stairs to the third-floor room above the bookshop. The room smelled of old paper and the coffee that Malcolm, the club president, always brought. Six people sat around the table — Malcolm, Susan, James, David, and two others whose names Michael had learned over time. They played chess, argued about openings, laughed at the terrible coffee.\n\nOn Thursday, Michael arrived as always. The bookshop door was open. The stairs were empty. He climbed them slowly, feeling strange. The room was locked.\n\nHe knocked. Nobody answered. He went downstairs and asked the bookshop owner.\n\n"The chess club?" the owner said, confused. "There hasn\'t been a chess club here for years."\n\nMichael felt cold. But he had been going there every Thursday. He knew these people. He knew their jokes, their favourite openings, the way Malcolm made coffee too strong.\n\nHe walked home slowly, trying to understand. Had he imagined it? But he could remember the wooden table, the precise weight of the pieces in his hand.\n\nThe next Thursday, he did not go.',
              'Grade 6-7': '[Student narrative about choosing option (b): Belonging to a community]\n\nThe Choir\n\nJoan had never sung before she joined the choir. At sixty-eight, divorced for five years, she had spent the previous decades supporting others — her husband\'s career, her children\'s lives — and had forgotten who she was beneath that labour of care.\n\nThe choir was held Tuesday evenings in the church hall. The first time, she stood at the back, embarrassed by her untrained voice, certain everyone would judge her. Instead, Mrs Okafor, next to her, had simply smiled and shared sheet music.\n\nWeeks passed. Joan learned to read the notes, to find her part in the harmony. But more importantly, she discovered something unexpected: the sensation of belonging, of being held by sound, of voices interweaving. When they sang Whitacre\'s "Sleep," harmonies building toward transcendence, she felt something crack open in her chest — a grief she had never acknowledged, a joy she had never imagined. The song held space for both.\n\nNow, six months later, she arrived early to practice. The choir was discussing a new piece. Someone had brought biscuits. Mrs Okafor asked Joan what she thought of the piece. And Joan realised: she had become the kind of person whose opinion mattered, the kind of person others wanted to hear. Not because of what she had done, but simply because she was here, present, part of the collective.\n\nWhen she sang now, it was not mere participation. It was testimony to the possibility of transformation, of discovering, at an age when she thought discovery had ended, that she still had a voice. That her voice mattered. That she belonged.',
              'Grade 8-9': '[Student narrative combining sophisticated technique with emotional depth]\n\nThe Vanishing\n\nMarcus did not realise the café was disappearing until he noticed how the light changed. It had always fallen through the western window at a particular angle — illuminating dust in the afternoon sun, catching in the coffee as people raised their cups. But now the angle seemed sharper, colder. He mentioned it to Deepak, who worked the espresso machine, but Deepak seemed not to hear. Or rather, he heard and did not understand why it mattered.\n\nFor seventeen months, Marcus had come to the café on Friday afternoons. He had a specific table, near the window but not in direct sun. The baristas knew his order. He would sit, open his laptop, and attempt work — though mostly he watched. Watched the light change, watched couples negotiate intimacy across small tables, watched solitary figures with the particular posture of people escaping something. The café was neither home nor office. It was the third space, the in-between.\n\nThen, gradually, people stopped coming. Not all at once. But the regulars, the ones who had their tables, their rituals — they dispersed. The young mother with the daughter who drew pictures stopped appearing. The old man with the novel abandoned after chapter three. Even the argumentative academic, who sat muttering through pages of theory, vanished.\n\nMarcus asked Deepak what had happened. "People just moved on," Deepak said, shrugging. "You know how it is. Everyone\'s busier. Everyone\'s on their phones at home now." But Marcus had watched people leave because they were lonely, because they needed to be among others without the obligation of interaction. The café had provided that. And now it was providing it less.\n\nOne Friday, Marcus arrived to find the lights dim. Through the window, he could see boxes stacked against the far wall. The café was closing. Deepak was moving to a new job across the city. The owner had finally decided the economics no longer worked.\n\nMarcus sat in his usual table for the last time. The light was falling incorrectly — too bright, too exposed. He finished his coffee, picked up his things, and left. Outside, the city continued its motion, millions of people moving through their lives, most of them unaware that a third space had vanished. Most of them not needing what the café had quietly provided: permission to exist without purpose, witness to the ordinary, belonging without obligation.\n\nMarcus did not know where he would go on Friday afternoons. He only knew that what had vanished was not a location but a particular configuration of human possibility — the chance to be present without being productive, to belong without declaring membership. As the city remade itself, these spaces were disappearing. And most people, hurrying on to their destinations, did not notice.',
            },
            markScheme: [
              'Writes vivid, coherent narrative',
              'Develops engaging character/perspective',
              'Creates clear sense of setting/atmosphere',
              'Uses sophisticated language and literary techniques',
              'Explores emotional/thematic depth',
              'Maintains consistent register and voice',
              'Demonstrates accurate technical control',
            ],
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 2: SET B
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2-set-b',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/02 - Set B',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-b-reading',
        title: 'Section A: Reading',
        description: `Read the two extracts below carefully. Then answer all the questions in this section.\n\nSource 1: ${EDEXCEL_P2_SET_B_SOURCE_1_REF}\nSource 2: ${EDEXCEL_P2_SET_B_SOURCE_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-b-q1',
            questionNumber: 1,
            questionText: 'What has happened to the library in Source 1? What does the text tell us about the impact of this closure?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P2_SET_B_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'The library has closed. Mrs Chen arrived to find the doors locked and the books already packed. The text tells us the closure eliminated a gathering point for elderly, unemployed, and lonely people. It removed a space where children could experience books. It severed connections for people whose lives had few connections.',
              'Grade 6-7': 'The library closure operated as both material loss and symbolic event. Its economic justification ("inefficient," "cost unjustifiable") masks what was lost: crucial infrastructure for marginalised populations — the elderly, unemployed, and socially isolated. The closure severed not merely access to books but relational connections, spaces of dignity outside economic logic, pathways to literacy and cultural participation for children without family resources.',
            },
            markScheme: [
              'Identifies library closure',
              'Notes loss of gathering space',
              'Identifies impact on vulnerable populations',
              'Uses textual reference',
            ],
          },
          {
            id: 'edexcel-p2-b-q2',
            questionNumber: 2,
            questionText: 'Analyse how the writer of Source 2 presents the contrast between his own childhood and contemporary life for young people.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P2_SET_B_SOURCE_2,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_2_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer describes his childhood as limited — electricity was rare, news came slowly, the world seemed distant. But this limitation created hunger: when he got to grammar school, he was eager for ideas and knowledge. Today\'s young people have unlimited information and instant communication. Yet they seem satisfied with nothing, endlessly consuming but never satisfied. The writer suggests that unlimited access makes appetite diminish.',
              'Grade 6-7': 'The writer structures the comparison through a paradox of desire and satisfaction. His childhood was materially scarce ("born in 1947," "electricity was still a novelty," "news arrived by post") yet generated insatiable intellectual hunger. The scarcity created desire. Contemporary life inverts this: unlimited information access produces satiation fatigue. The writer\'s observation that young people are "satisfied with nothing" captures this precisely — unlimited access to everything has paradoxically produced a state where nothing satisfies. The writer\'s framework implies an inverse relationship between scarcity and desire: scarcity generates hunger; abundance generates apathy.',
            },
            markScheme: [
              'Identifies paradox of scarcity/desire vs. abundance/apathy',
              'Shows understanding of historical contrast',
              'Explains writer\'s evaluation of contemporary life',
              'Uses specific textual evidence',
            ],
          },
          {
            id: 'edexcel-p2-b-q3',
            questionNumber: 3,
            questionText: 'Compare how both sources present loss of institutional connection. What different aspects of loss do they emphasise?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'comparison',
            extract: EDEXCEL_P2_SET_B_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'Source 1 presents the library closure as loss of a physical space that served vulnerable people. Source 2 presents loss of intellectual hunger and engagement in contemporary life. Source 1 is about institutional closure. Source 2 is about psychological/cultural change. Both suggest something important has been lost — in one case a space, in the other an internal drive.',
              'Grade 6-7': 'Both texts explore institutional loss, but with different emphases. Source 1 focuses on material infrastructure: the closure eliminates a gathering space, access to resources, a site of dignity for marginalised populations. The loss is external, spatial, affecting vulnerable groups disproportionately. Source 2 emphasises psychological/cultural loss: the erosion of intellectual hunger despite (or because of) unlimited access. Here the loss is internal, motivational, affecting young people\'s engagement with knowledge. Both suggest loss of connection — Source 1 to place and community, Source 2 to curiosity and meaning. Importantly, Source 1 presents institutional closure as deliberate economic decision; Source 2 presents cultural shift as consequence of abundance. Both articulate loss of something once essential to human flourishing.',
            },
            markScheme: [
              'Compares institutional loss in different registers',
              'Distinguishes material vs. psychological loss',
              'Shows understanding of different affected populations',
              'Uses evidence effectively',
            ],
          },
          {
            id: 'edexcel-p2-b-q4',
            questionNumber: 4,
            questionText: 'To what extent do both sources suggest that institutions (libraries, schools, spaces for connection) are essential for human wellbeing? Use evidence from both texts.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: EDEXCEL_P2_SET_B_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'I think both sources strongly suggest institutions are essential. Source 1 shows how the library closure harms elderly people and people searching for jobs. These people depended on the library. Source 2 shows how young people with unlimited access seem lost — they are not flourishing despite having everything. This suggests they need something that information alone cannot provide. Perhaps they need human connection, mentorship, or community that schools and other institutions provide. Both texts suggest institutions matter for wellbeing.',
              'Grade 6-7': 'Both texts substantially support this position, though through different mechanisms. Source 1 explicitly argues institutional loss harms vulnerable populations: the elderly lose gathering space, the unemployed lose job-search facilities and dignity, children without family resources lose access to literacy. The text implies that institutions like libraries are essential infrastructural supports — not luxuries but necessities for certain populations\' wellbeing. Source 2 argues more subtly: it posits that unlimited information access without institutional mediation (schools, mentors, structured education) produces malaise. The writer\'s implied thesis is that desire, intellectual growth, and meaning-making require some constraint, some institutional structure that generates hunger rather than satiation. This suggests institutions are essential not as access points but as frameworks that generate engagement and desire. However, both texts could be read as descriptive rather than normative: Source 1 describes what the library provided without fully arguing it is irreplaceable; Source 2 suggests change without endorsing it as necessary. A stronger reading might challenge whether digital communities and self-directed learning can substitute for traditional institutions.',
              'Grade 8-9': 'Both texts substantially argue institutional essentiality, but with different emphasis and limitation. Source 1 constructs a straightforward justice argument: institutions like libraries provide differential benefits to those without market resources. The elderly, unemployed, and poor cannot access knowledge, community, and dignity through market mechanisms alone; institutions are essential for equitable access. This is a strong argument rooted in material need. Source 2\'s argument is more philosophically complex: it suggests institutions function not primarily as access points but as structure-generators of meaning. The writer\'s observation that contemporary young people have unlimited information yet diminished appetite implies that institutions do something beyond providing content — they provide framework, constraint, mediation that generates engagement. This echoes classical arguments about education as formation, not information-transfer. However, both arguments have limitations. Source 1 might assume that digital alternatives cannot replicate institutional function — yet online communities and resources might provide alternatives. Source 2 positions scarcity-generated desire as natural or desirable without acknowledging that some might find abundance liberating. Furthermore, both texts elide the possibility that institutions themselves might be problematic, might limit as well as enable. A nuanced reading would argue: institutions are essential for certain functions (equitable access, structured meaning-making), but not universally, and their forms might productively change. The texts make strong cases for institutional value but somewhat oversimplify the question of whether those specific institutions are irreplaceable.',
            },
            markScheme: [
              'Makes clear judgement with appropriate qualification',
              'Uses evidence from both sources effectively',
              'Considers different dimensions of institutional role',
              'Acknowledges limitations or counter-arguments',
              'Shows sophisticated understanding',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-b-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section.',
        totalMarks: 56,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-b-q5',
            questionNumber: 5,
            questionText: 'Write a creative narrative exploring one of the following:\n\nEither:\n(a) Write a story about a character who discovers something precious about themselves or their life through an institution, place, or community that has shaped them.\n\nOr:\n(b) Write a narrative that imagines life in a future where a particular public institution or community space no longer exists. Explore how this absence affects the lives of those who once depended on it.\n\nYour writing should:\n- Create a compelling narrative voice\n- Develop character motivation and change\n- Use setting to create mood and meaning\n- Explore theme with depth and nuance\n\n(32 marks for content and organisation / 24 marks for technical accuracy and vocabulary)',
            marks: 56,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': 'Option (a) — Discovery Through Community\n\nThe Running Club\n\nNathan had joined the running club because he was lonely. At work, he was invisible — a quiet man in a quiet office. At home, his apartment was silent. The running club seemed like a chance to be among people.\n\nThe first week, he could barely keep up. The group was fast, practised, confident. But the club president, Maya, noticed him struggling and slowed down to run beside him. "It\'s not about speed," she said. "It\'s about showing up."\n\nWeek after week, he showed up. His legs grew stronger. His lungs adapted. But more importantly, something else changed. People started asking him how he was feeling. They remembered things he had said — his worries about his mother, his hopes for a career change. They noticed him.\n\nOne morning, running alongside the river, Nathan realised something: he was happy. Not the happiness of achievement — he was still the slowest runner — but the happiness of belonging, of being part of something larger than himself.\n\nWhen he got home, he looked in the mirror. He had changed. Not physically, though his body was stronger. But his face looked different. More alive. More like someone who belonged somewhere.\n\nNathan understood then that he was not just discovering the running club. He was discovering himself — the self that only emerged in community, in the presence of people who noticed and valued him.',
              'Grade 6-7': 'Option (b) — Life After Institution\n\nThe School\n\nThe primary school closed on a Friday. The sign appeared on the gates on Monday: "This facility is no longer in use."\n\nMrs Patel had taught there for thirty-two years. She had taught some children, then their children. She knew the building\'s rhythms — when the morning light hit the reception classroom at just the right angle to make the alphabet cards glow, when the lunch-time cacophony reached its peak around 12:30, when the late afternoon silence held a melancholy quality as the day wound down.\n\nThe closure was justified in the language of efficiency: declining rolls, new purpose-built facilities two miles away, updated technology and amenities. The calculations were sound. On paper, the closure made sense.\n\nBut the school had served a function beyond education. It was where Mrs Kowalski, the Polish cleaner who had never learned to read English, felt valued and part of the community. It was where children with no one at home could find adults who noticed them. It was where young mothers could gather while children played, finding connection and support. It was where the homeless man could rest on the bench outside because the caretaker left the side gate unlocked. It was where elderly residents volunteered as reading helpers, discovering purpose after retirement.\n\nMrs Patel watched from the gates as the new intake — one class of twenty-five children in a building designed for two hundred — drove off to the distant purpose-built facility. The school building stood empty. The windows, boarded up. The playground equipment, removed.\n\nShe did not cry. But she understood that something had been lost that no amount of educational technology could replace: a place where marginalised people could be visible, could belong without needing to justify their presence through economic productivity.\n\nThe new school was better in every measurable way. But she wondered who would notice the ones the system left behind.',
              'Grade 8-9': 'Option (b) — After the Library\n\nSeveral Years Later\n\nMargaret had not known that her life was structured around the library until it was no longer there.\n\nFor forty years, since her husband died, she had gone there Tuesdays and Thursdays. She did not read extensively — she borrowed three or four novels a month, usually mysteries, the kind where problems resolved within three hundred pages. The reading was almost secondary. What mattered was the routine, the small conversations with the librarians who remembered her preferences, the sense of being part of a space that was neither home nor market.\n\nWhen it closed, Margaret expected to simply adjust. She would use the digital library. She would purchase books. She would find other ways to structure her days.\n\nBut months passed and something had shifted in her internal landscape. The Tuesdays and Thursdays remained empty. The routines that had held her steady dissolved. She began to sleep poorly. She stopped going to the park. The world outside her apartment seemed too large, requiring negotiation and navigation in ways the library had never demanded.\n\nShe was not alone. The other regulars — Marcus, who had come to use the computers; Susan, who attended the literacy classes; the group of teenagers who had claimed the study tables as their refuge — they all seemed to dissipate. Without the institution that held them, they lost the gravitational centre around which their weeks orbited.\n\nA young woman named Priya from the council conducted a survey. She asked Margaret what the library had meant. Margaret struggled to articulate it. "It was a place to be," she finally said. "Not to do anything. Just to be."\n\nPriya wrote this down. Margaret could see her thinking: this was not quantifiable value. In the language of public policy, the library had been "underutilised." The library had not generated revenue. It had not improved measurable outcomes.\n\nAnd yet its absence had generated a kind of loss that no amount of digital access could remedy: the loss of permission to exist without purpose, the loss of a place held in common, the loss of invisible infrastructure that made certain lives — old lives, poor lives, lonely lives — sustainable.\n\nMargaret did not know how to name what was missing. She only knew that the world had become larger and colder, and that some essential support, once withdrawn, could not be rebuilt through digital alternatives. Some human goods required place. Required presence. Required the particular alchemy of strangers gathered in shared space, each absorbed in their own needs, yet somehow sustained by the simple fact of gathering.\n\nThe library was gone. And Margaret continued, as people do. But something within her architecture had shifted, become more fragile. She did not expect recovery. She had learned that some losses are permanent, and that we do not truly know what we depended upon until we no longer have it.',
            },
            markScheme: [
              'Writes compelling, coherent narrative',
              'Develops complex character voice and perspective',
              'Uses setting symbolically to explore theme',
              'Maintains sophisticated register throughout',
              'Explores emotional/philosophical depth',
              'Demonstrates masterful control of narrative techniques',
              'Shows accurate technical execution',
            ],
          },
        ],
      },
    ],
  },
  // EDEXCEL PAPER 2: SET C - Additional extracts needed
  // ═══════════════════════════════════════════════════════════════════════════

  // NOTE: For production, Paper 2 Set C requires two additional literary extracts.
  // Placeholder structure below. Replace EXTRACT_TEXT with actual fiction sources.


  {
    id: 'edexcel-lang-p2-set-c',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/02 - Set C',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-c-reading',
        title: 'Section A: Reading',
        description: `Read the two extracts below carefully. Then answer all the questions in this section.\n\nSource 1: ${EDEXCEL_P2_SET_C_SOURCE_1_REF}\nSource 2: ${EDEXCEL_P2_SET_C_SOURCE_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-c-q1',
            questionNumber: 1,
            questionText: 'Read Source 1. What is the significance of the house having been "empty for three years"? What does this tell us about Emma and her situation?',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EDEXCEL_P2_SET_C_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'The house has been empty since someone died — likely Emma\'s mother, based on the recipe books. The fact her father paid taxes but didn\'t live there suggests he couldn\'t face returning. Three years represents a significant period of loss and grief. Emma coming now suggests she is beginning to confront this loss and her memories.',
              'Grade 6-7': 'The three-year emptiness marks a hiatus in time — the house is preserved in a state of suspension, as if awaiting resumption that Emma intuits is impossible. The father\'s maintenance (taxes, gutters) enacts a paradox: caring for the space while avoiding inhabiting it. This describes grief as freeze-frame: the house holds the moment before whatever loss occurred, offering neither progression nor processing of that loss.',
            },
            markScheme: [
              'Identifies connection to loss/death',
              'Explains significance of three-year duration',
              'Shows understanding of grief as stasis',
              'Uses textual evidence',
            ],
          },
          {
            id: 'edexcel-p2-c-q2',
            questionNumber: 2,
            questionText: 'Analyse the writer\'s use of the extended metaphor of the house as a "museum" in Source 1. What effects does this comparison create?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P2_SET_C_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer describes the house as a museum because everything is preserved as if frozen in time. The mother\'s recipe books are there untouched, the father\'s reading glasses on the desk. A museum preserves things to look at but not use. This shows how grief has turned the house into a memorial rather than a home. It creates a sad, eerie effect — like the house is a tomb.',
              'Grade 6-7': 'The museum metaphor establishes the house as a space of curation and preservation rather than habitation. Museums encase objects in time, removing them from their functional context and converting them into symbols. The recipe books and glasses become relics — indices of absence rather than tools for living. Crucially, the writer extends this into explicit commentary on interruption: "a museum of interruption... preserves a life mid-pause." The metaphor reveals grief\'s temporal displacement: it freezes the past, making it simultaneous with present time, yet rendering it inaccessible. The effect is elegiac and claustrophobic — beautiful objects made unbearable by their forced stillness.',
            },
            markScheme: [
              'Identifies museum as metaphor for preservation',
              'Explains the freezing of time and grief',
              'Shows understanding of inaccessibility/untouchability',
              'Analyses emotional effect',
            ],
          },
          {
            id: 'edexcel-p2-c-q3',
            questionNumber: 3,
            questionText: 'Compare how both sources present the relationship between objects and memory. How do material things preserve or convey human connection?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'comparison',
            extract: EDEXCEL_P2_SET_C_SOURCE_2,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_2_REF,
            modelAnswers: {
              'Grade 4-5': 'In Source 1, objects like recipe books and glasses preserve memories but in a frozen way — they make the house feel like a museum. In Source 2, letters preserve memories too, but in a more living way — they show the actual relationship and conversation between sisters. Source 1 treats objects as sad reminders of absence. Source 2 treats them as testimony to ongoing connection and love.',
              'Grade 6-7': 'Both sources explore materiality as archive of human relationship, but with different orientations. Source 1 presents objects (recipe books, glasses) as indices of absence — they evoke what is gone but cannot resurrect it. The house becomes a mausoleum where objects testify only to loss. Source 2 reframes this: letters are also material traces, but they preserve the actual substance of relationship — words, personalities, the texture of connection. The narrator discovers that the letters\'s value lies not in rarity but in their ordinariness: they document "the ordinary extraordinary labour of maintaining love across distance and time." Both sources suggest objects preserve connection, but Source 1 emphasises preservation as stasis (death-in-life), while Source 2 emphasises it as testimony to vitality and persistence.',
            },
            markScheme: [
              'Identifies both sources use objects to preserve memory',
              'Compares frozen vs. dynamic preservation',
              'Shows understanding of memory and materiality',
              'Uses evidence effectively',
            ],
          },
          {
            id: 'edexcel-p2-c-q4',
            questionNumber: 4,
            questionText: 'To what extent do both sources suggest that moving on from the past requires accepting loss rather than preserving it? Use evidence to support your answer.',
            marks: 20,
            suggestedTimeMinutes: 25,
            questionType: 'evaluation',
            extract: EDEXCEL_P2_SET_C_SOURCE_1,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_1_REF,
            modelAnswers: {
              'Grade 4-5': 'Source 1 strongly suggests that preserving the house (keeping it frozen) prevents moving on. Emma realises "the pause had become permanent" — her father\'s attempt to preserve the house in suspended time has trapped them both. Source 2 is different — the grandmother didn\'t need to destroy the letters to move on; she kept them and found meaning in them. So Source 1 says preservation prevents healing, but Source 2 shows that preserving memories can actually help acceptance.',
              'Grade 6-7': 'Source 1 presents preservation as obstacle to grieving: the father\'s maintenance of the house as frozen space actually prevents acceptance of loss. Emma\'s insight — "the pause had become permanent" — suggests that attempting to preserve the past in aspic (like museum curation) paradoxically crystallises grief rather than processing it. However, Source 2 complicates this narrative. The grandmother\'s preservation of letters does not prevent moving on; rather, it enables a retrospective understanding of connection that transcends the sister\'s physical absence. The difference lies in the type of preservation: Source 1 preserves absence itself (the empty house, the untouched objects), while Source 2 preserves the substance of relationship (the correspondence, the labour of love). This suggests moving on does not require destroying the past but rather shifting from preserving absence to honouring presence-in-absence.',
              'Grade 8-9': 'The sources articulate a sophisticated distinction about preservation and grief. Source 1 argues that attempting to arrest time — to keep the house as it was, to treat it as memorial rather than dwelling — prevents processing loss. The father\'s behaviour enacts what Freud called melancholia: the refusal to relinquish the lost object, instead maintaining it in perpetual suspension. Emma\'s recognition that "the pause had become permanent" articulates the temporal pathology: preservation of the past colonises present time, making movement forward impossible. This suggests acceptance requires not preservation but release. However, Source 2 substantially qualifies this thesis. The grandmother\'s preservation of letters does not prevent her moving forward; the narrator discovers years later that the grandmother had achieved something subtler: she preserved the relationship itself, not its absence. The letters document "the labour of maintaining love," which means the relationship persists in its substance even across death and distance. The crucial distinction is between preserving the lost object (Source 1\'s tragedy) and preserving the evidence of connection (Source 2\'s wisdom). Both involve objects, but Source 1 mistakes the container (house, untouched objects) for the content (presence), while Source 2 recognises that meaning resides in the actual communication, not in the setting. Thus, both sources suggest that moving forward requires not destroying the past but altering our relationship to it: from attempting to freeze time (Source 1\'s father) to honouring the persistent connection that outlasts physical presence (Source 2\'s grandmother). The difference between paralysing preservation and meaningful memorial lies in whether we preserve the absence itself or the substance of what was and persists.',
            },
            markScheme: [
              'Makes nuanced judgement on preservation vs. acceptance',
              'Uses evidence from both sources effectively',
              'Distinguishes types of preservation',
              'Shows understanding of grief and meaning-making',
              'Demonstrates sophisticated philosophical engagement',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-c-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 50 minutes on this section.',
        totalMarks: 56,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-c-q5',
            questionNumber: 5,
            questionText: 'Write a creative narrative exploring one of the following:\n\nEither:\n(a) Write a story about returning to a place after an absence, and what returning reveals about change, loss, or belonging.\n\nOr:\n(b) Write a narrative that explores how an object, place, or practice helps someone process loss or maintain connection with someone or something they no longer have access to.\n\nYour writing should:\n- Develop a distinctive narrative voice\n- Create vivid sensory detail\n- Explore emotional complexity\n- Demonstrate sophisticated structure and technique\n\n(32 marks for content and organisation / 24 marks for technical accuracy and vocabulary)',
            marks: 56,
            suggestedTimeMinutes: 50,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5': '[Sample student response demonstrating Grade 4-5 competence with clear narrative, adequate detail, and developing emotional understanding]',
              'Grade 6-7': '[Sample student response demonstrating Grade 6-7 competence with compelling voice, crafted atmosphere, and sustained emotional exploration]',
              'Grade 8-9': '[Sample student response demonstrating Grade 8-9 competence with distinctive voice, precise imagery, structural sophistication, and philosophical depth]',
            },
            markScheme: [
              'Writes compelling narrative with clear voice',
              'Uses vivid sensory and emotional detail',
              'Structures narrative with sophistication',
              'Explores theme of loss/connection with depth',
              'Maintains consistent register and tone',
              'Demonstrates technical excellence in SPaG',
            ],
          },
        ],
      },
    ],
  },
]
