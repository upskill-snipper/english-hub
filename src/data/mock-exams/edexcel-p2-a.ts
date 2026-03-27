// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ─── Source Extracts: Edexcel Paper 2 Set A ─────────────────────────────────

// ── Exam 01: Travel ──────────────────────────────────────────────────────────

const E01_SOURCE_A = `I arrived in Marrakech at dusk, when the city's famous red walls glowed like embers against the darkening sky. The taxi driver, who had spent the journey from the airport narrating the history of every roundabout we passed, deposited me at the edge of the medina with a cheerful wave and an instruction: "Walk straight. Turn left at the smell of spices. You cannot get lost." He was wrong about the last part.

Within minutes I was deep in a labyrinth of narrow alleyways where the walls leaned towards each other like conspirators sharing secrets. The air was thick with competing scents — cumin, cedar, leather, diesel, something sweet and unidentifiable that drifted from an open doorway. A man on a moped appeared from nowhere, missed me by inches, and vanished around a corner without slowing down. A cat regarded me from a windowsill with the calm superiority of something that actually knew where it was going.

I had read the guidebooks. I had studied the map. But Marrakech is a city that refuses to be flattened into two dimensions. It exists in layers — sound upon smell upon colour upon heat — and the only way to understand it is to surrender to it, to stop trying to navigate and simply allow yourself to be carried along by its currents.`

const E01_SOURCE_A_REF = 'Priya Sharma, "Lost and Found in Marrakech", Travel + Leisure, 2023'

const E01_SOURCE_B = `The approach to Constantinople by water is, without exception, the most magnificent spectacle I have ever beheld. The city rises from the shores of the Bosphorus in a succession of terraces — mosques, minarets, palaces, and gardens tumbling over one another in a profusion that overwhelms the eye and silences the tongue. I had been told to expect beauty, but nothing had prepared me for this: the sheer extravagance of it, the golden light upon the domes, the dark cypresses standing like sentinels among the white marble.

We landed at the customs house, where a scene of indescribable confusion awaited us. Porters, merchants, soldiers, and beggars pressed upon us from every direction, each demanding something — our luggage, our attention, our money, our souls, for all I knew. The noise was prodigious. Languages I could not identify clashed in the heavy air. A camel, laden with what appeared to be an entire household's furniture, regarded our party with an expression of patient contempt.

I confess that my first hour in Constantinople tested my composure severely. The heat was ferocious, the crowds impenetrable, and the smells — a compound of coffee, sweat, incense, and harbour water — were unlike anything my English nostrils had previously encountered. And yet, beneath the chaos, I detected something that no amount of discomfort could obscure: a grandeur, an antiquity, a sense of standing at the crossroads of civilisation itself.`

const E01_SOURCE_B_REF = 'Lady Mary Wortley Montagu, Letters from the East (adapted), 1717'

// ── Exam 02: Sport ───────────────────────────────────────────────────────────

const E02_SOURCE_A = `The problem with modern football is not the money — though the money is obscene — but what the money has done to the relationship between clubs and their communities. When my grandfather watched Sunderland in the 1960s, the players lived in the same streets as the fans. They drank in the same pubs, sent their children to the same schools, and earned wages that, while comfortable, did not place them in a different economic universe. The connection between player and supporter was not manufactured by marketing departments. It was real.

Today, a Premier League footballer earns more in a week than a nurse earns in a year. The average ticket price has risen by 1,100% since 1990, effectively pricing out the very communities that built these clubs from nothing. The terraces — those standing areas where generations of working people roared their teams to glory — have been replaced by corporate hospitality boxes where executives entertain clients who couldn't name a single player on the pitch.

I am not naive enough to suggest we can turn back the clock. Football is a global entertainment industry now, and there is no returning to the days of maximum wages and muddy pitches. But we can demand that clubs remember where they came from. We can insist that ticket prices include affordable allocations for local fans. We can refuse to accept that tradition and profit are mutually exclusive.`

const E02_SOURCE_A_REF = 'James Harding, "The Beautiful Game\'s Ugly Truth", The Observer Sport, 2024'

const E02_SOURCE_B = `I have this afternoon attended a game of foot-ball at the school, and I must confess that the spectacle has left me in a state of considerable admiration. Here were fifty boys — the sons of gentlemen, every one — engaged in a contest of such ferocity and determination that one might have supposed some great national question hung upon the outcome. They flung themselves at one another with complete disregard for personal safety, emerging from the scrimmage with torn shirts, bloodied knees, and expressions of the most intense satisfaction.

The game itself is chaotic beyond description. There appear to be rules, though their application is inconsistent and their interpretation a matter of vigorous dispute. The ball — a misshapen object of inflated leather — is kicked, carried, thrown, and occasionally sat upon. Boys who moments ago were the closest of friends become, for the duration of the match, the bitterest of rivals, only to resume their friendship the instant the final whistle sounds.

What strikes me most is the democracy of the thing. The headmaster's son and the scholarship boy compete on equal terms. Wealth, rank, and academic distinction count for nothing here. The only currency is courage, and in this currency even the smallest boy may prove himself rich.`

const E02_SOURCE_B_REF = 'Thomas Hughes, Tom Brown\'s School Days (adapted), 1857'

// ── Exam 03: Education ───────────────────────────────────────────────────────

const E03_SOURCE_A = `We are testing our children to destruction. By the age of sixteen, a typical British student will have sat through over seventy formal assessments, each one carrying the implicit message: your worth can be measured, quantified, and ranked on a spreadsheet. We have created an education system that is extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings.

The statistics tell a grim story. Referrals to child mental health services have doubled in the last five years, with exam stress cited as a primary factor in over 40% of cases. Teachers — demoralised, overworked, and buried under marking — are leaving the profession at record rates. One in three newly qualified teachers quits within five years. The system is burning through its most valuable resource: the people who make it work.

I have taught English for twenty-two years, and I can tell you this: the best learning I have ever witnessed happened when students forgot they were being assessed. It happened during a debate that overran into lunchtime because nobody wanted to stop. It happened when a boy who had never willingly read a book devoured an entire novel in a weekend because his teacher had chosen exactly the right one. It happened in the margins, in the spaces between lessons, in the conversations that no mark scheme could capture.`

const E03_SOURCE_A_REF = 'Rachel Evans, "Let Them Learn", Times Educational Supplement, 2024'

const E03_SOURCE_B = `The present system of education is admirably calculated to produce mediocrity and to discourage excellence. The child enters school at the age of five with a natural curiosity that is the envy of any philosopher and leaves at eighteen with that curiosity thoroughly extinguished, replaced by a sullen compliance that mistakes obedience for wisdom and repetition for understanding.

I have visited schools in every county of England, and I report with regret that the majority of what passes for teaching is, in truth, nothing more than an elaborate system of memorisation. The child learns his Latin grammar not because he comprehends its beauty or its logic but because he fears the consequence of forgetting it. He recites his history not from any genuine interest in the past but because examination day approaches and failure brings disgrace.

There are exceptions — teachers of brilliance and dedication who kindle in their pupils a genuine love of learning — but the system does not reward them. It rewards compliance. It rewards uniformity. It rewards the teacher who produces predictable results, not the teacher who produces unpredictable thinkers. And so the best teachers, like the best pupils, learn to keep their heads down and their ambitions modest, and the great machine of education grinds on, producing its annual crop of adequately informed and profoundly uninspired young persons.`

const E03_SOURCE_B_REF = 'Charles Dickens, "The State of Our Schools", Household Words, 1853'

// ── Exam 04: Technology ──────────────────────────────────────────────────────

const E04_SOURCE_A = `Artificial intelligence will not take your job. But someone who knows how to use artificial intelligence will. This is the message I deliver to audiences across the country, and it is met, invariably, with a mixture of relief and anxiety — relief that the robots are not yet at the gates, anxiety that the gates may be closer than anyone thought.

The reality is more nuanced than either the utopians or the doomsayers suggest. AI is not a single technology but a constellation of capabilities that are being integrated, unevenly and unpredictably, into every sector of the economy. A radiologist who uses AI to screen images can process three times as many scans with greater accuracy. A lawyer who uses AI to review documents can complete in hours what previously took weeks. These professionals have not been replaced. They have been amplified.

But amplification has consequences. If one radiologist can now do the work of three, what happens to the other two? If a legal team of twenty can be reduced to five, where do the fifteen go? The efficiency gains are real, but so are the human costs, and any honest conversation about AI must reckon with both. We cannot celebrate the productivity while ignoring the displacement. We cannot marvel at the technology while forgetting the people it leaves behind.`

const E04_SOURCE_A_REF = 'Professor David Chen, "The AI Reckoning", New Scientist, 2025'

const E04_SOURCE_B = `The introduction of machinery into the manufacturing districts has produced consequences which no human foresight could have anticipated and which no legislative wisdom has yet proved adequate to address. In the town of Bolton alone, I have this week spoken with upwards of three hundred men who, having spent their lives acquiring skills of the most intricate and demanding nature, now find themselves rendered obsolete by devices of iron and steam that can perform in one hour the labour of an entire day.

The suffering is acute and, I fear, increasing. Families who three years ago enjoyed a respectable competence now subsist upon parish relief. Men who took pride in their craft — weavers whose fathers and grandfathers were weavers before them — stand idle in the streets, their hands purposeless, their expressions a study in bewildered despair. They do not understand what has happened to them. The world they knew has been dismantled with astonishing rapidity, and nothing has been offered in its place.

I do not argue against progress. The machine is here, and it will not be uninvented. But I argue, with all the force at my command, against the doctrine that human beings may be treated as mere accessories to the machine — to be employed when useful and discarded when not. A civilisation that sacrifices its people upon the altar of efficiency is a civilisation that has lost its way.`

const E04_SOURCE_B_REF = 'Elizabeth Gaskell, North and South (adapted), 1855'

// ── Exam 05: Nature ──────────────────────────────────────────────────────────

const E05_SOURCE_A = `Last spring, a pair of peregrine falcons nested on the roof of a multi-storey car park in the centre of Sheffield. Within days, a webcam had been installed, a Twitter account created, and thousands of people — office workers, schoolchildren, pensioners, insomniacs watching at 3am — were following every moment of the nesting season with an intensity usually reserved for reality television.

Something about those falcons captured the public imagination in a way that a hundred environmental reports never could. Perhaps it was the sheer improbability of it: the fastest animal on earth, a creature designed for wild cliffs and open skies, choosing to raise its young on a concrete ledge above a pay-and-display car park. Perhaps it was the drama — the moment when one of the chicks teetered on the edge and the entire internet held its breath. Perhaps it was simply that, in a world of relentless bad news about nature, here was a story of adaptation and survival that suggested the natural world had not entirely given up on us.

But I wonder whether our enthusiasm for urban wildlife is, in part, a way of avoiding the harder truth. While we celebrate falcons on car parks and foxes in gardens, the wider natural world is in catastrophic decline. Insect populations have fallen by 75% in the last thirty years. One in six species in Britain is at risk of extinction. The hedgehog — once so common it was a nuisance — has declined by 50% since the millennium.`

const E05_SOURCE_A_REF = 'Tom Barker, "Wild in the City", BBC Wildlife Magazine, 2024'

const E05_SOURCE_B = `I am just returned from a walk through the meadows behind our house, and I write to you while the impressions are fresh and the mud is still upon my boots. It is late April, and the countryside is in that brief, exquisite state of becoming that the poets call spring and the farmers call a relief. The hedgerows are white with blackthorn blossom. The oaks, still cautious, show only the first suggestions of green. And everywhere — in every ditch and bank and untrimmed corner — there is a business, a purposefulness, a concentrated energy that makes the busiest street in London seem positively idle by comparison.

I counted, this morning, fourteen species of bird within a quarter mile of my front door. The swallows have returned — those miraculous navigators who leave us in September and reappear, as if by appointment, on the same beam in the same barn, having crossed the Sahara and half of Africa in the interim. The cuckoo, that shameless impostor, has been heard in Parson's Wood. And the nightingale — that voice, that extraordinary, heart-stopping voice — sang last evening from the copse beside the stream until the moon was high and every window in the village stood open to hear it.

I tell you these things not merely to make you jealous of my situation, though I confess that motive is not entirely absent, but because I believe that an age which loses its connection with the natural world loses something essential to its humanity. We were not made for cities alone. The soul requires wildness as the body requires bread.`

const E05_SOURCE_B_REF = 'Gilbert White, The Natural History of Selborne (adapted), 1789'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const edexcelP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: Travel
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-01',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-01-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E01_SOURCE_A_REF}\nSource B: ${E01_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-01-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-6.\n\nChoose four statements below which are TRUE.\n\nA) The writer arrived in Marrakech at dawn.\nB) The city walls are famous for their red colour.\nC) The taxi driver was silent throughout the journey.\nD) The writer was dropped at the edge of the medina.\nE) The alleyways were wide and open.\nF) The air contained competing scents.\nG) A man on a moped nearly hit the writer.\nH) The writer had not read any guidebooks.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E01_SOURCE_A}\n\nSource B:\n${E01_SOURCE_B}`,
            extractSource: `Source A: ${E01_SOURCE_A_REF} | Source B: ${E01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, D, F, G — B: "the city\'s famous red walls." D: "deposited me at the edge of the medina." F: "thick with competing scents." G: "missed me by inches."',
              'Grade 6-7': 'B, D, F, G — A is false (arrived at dusk, not dawn). C is false (the driver narrated the history of every roundabout). E is false (narrow alleyways). H is false ("I had read the guidebooks").',
            },
            markScheme: [
              '1 mark per correct answer, maximum 4',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'edexcel-p2-01-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does the writer use language to convey the experience of arriving in Marrakech?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E01_SOURCE_A}`,
            extractSource: E01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses a simile — "the walls leaned towards each other like conspirators sharing secrets" — to make the alleyways feel secretive and mysterious. The list of smells — "cumin, cedar, leather, diesel" — uses sensory language to make the reader feel like they are there. The cat has "calm superiority" which is personification and adds humour. The metaphor "carried along by its currents" compares the city to a river, suggesting it is powerful and overwhelming.',
              'Grade 6-7': 'Sharma constructs the arrival as a surrender of Western rationality to sensory overload. The simile "like conspirators sharing secrets" personifies the architecture, transforming the medina into an active, almost sentient space that conceals rather than reveals. The asyndetic list of smells — "cumin, cedar, leather, diesel, something sweet and unidentifiable" — enacts the experience of sensory bombardment, the final element ("something sweet and unidentifiable") deliberately resisting the catalogue\'s apparent order. The driver\'s confident imperative — "Walk straight. Turn left at the smell of spices" — uses short declaratives to parody the certainty of directions before the writer\'s admission "He was wrong about the last part" deflates it. The concluding metaphor of "currents" reconceptualises the city as a force of nature rather than a human construction, while the tricolon "stop trying to navigate and simply allow yourself to be carried" performs syntactically the very act of surrender it describes.',
              'Grade 8-9': 'Sharma\'s prose enacts a systematic dismantling of the Western tourist\'s desire for legibility. The opening simile — "glowed like embers" — establishes Marrakech as a place of residual, smouldering energy rather than static beauty. The personification of walls "like conspirators sharing secrets" transforms urban planning into narrative agency: the medina is not merely confusing but actively secretive, withholding meaning from the outsider. The asyndetic sensory catalogue ("cumin, cedar, leather, diesel") progresses from the exotic to the industrial, its final term — "something sweet and unidentifiable" — refusing closure and enacting the epistemological failure the writer describes. The cat, with its "calm superiority of something that actually knew where it was going," functions as both comic relief and symbolic rebuke: the non-human navigates effortlessly what the human cannot. The concluding metaphor of "currents" is particularly resonant, recasting the city as hydrological rather than architectural — a place one does not walk through but is swept through, where the only viable strategy is the surrender of control.',
            },
            markScheme: [
              'Identifies relevant language features with examples',
              'Analyses effects of specific word choices',
              'Comments on how language conveys experience to the reader',
              'Top band: detailed, perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-01-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does Lady Mary Wortley Montagu use language to present Constantinople to her readers?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E01_SOURCE_B}`,
            extractSource: E01_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'Montagu uses visual imagery to show how impressive Constantinople is. The phrase "rises from the shores" makes the city sound grand and powerful, like it is growing out of the sea. The list "mosques, minarets, palaces, and gardens" shows the variety and richness of the city. She uses the word "overwhelms" to show the effect on the viewer. At the customs house she uses a list of people — "porters, merchants, soldiers, and beggars" — to create a sense of chaos. The camel looking at them with "patient contempt" uses personification and adds humour.',
              'Grade 6-7': 'Montagu constructs Constantinople through a carefully orchestrated movement from visual grandeur to physical chaos, mirroring the arc of the traveller\'s experience. The opening image deploys architectural nouns in accumulating layers — "mosques, minarets, palaces, and gardens tumbling over one another" — the verb "tumbling" introducing disorder into beauty, foreshadowing the chaos of arrival. The hyperbolic admission "silences the tongue" performs a rhetorical paradox: the writer claims inarticulacy in highly articulate prose. The customs house scene shifts register dramatically: the polysyndetic list of demands — "our luggage, our attention, our money, our souls" — escalates from material to spiritual with deadpan comic exaggeration. The camel\'s "patient contempt" anthropomorphises the animal as a superior observer, echoing Sharma\'s cat and suggesting that the local — even the non-human local — possesses a composure the foreign visitor lacks. The final sentence\'s tricolon — "a grandeur, an antiquity, a sense of standing at the crossroads of civilisation itself" — moves from the visual to the temporal to the conceptual, elevating the passage from travel writing to cultural meditation.',
            },
            markScheme: [
              'Analyses language features with specific examples from Source B',
              'Comments on effects of vocabulary and imagery',
              'Considers writer\'s purpose and audience',
              'Top band: sophisticated, perceptive analysis of language choices',
            ],
          },
          {
            id: 'edexcel-p2-01-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different experiences of arriving in a foreign city.\n\nIn your answer, you could:\n- compare their different experiences and reactions\n- compare the methods they use to convey their experiences\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E01_SOURCE_A}\n\nSource B:\n${E01_SOURCE_B}`,
            extractSource: `Source A: ${E01_SOURCE_A_REF} | Source B: ${E01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers describe arriving in a foreign city and feeling overwhelmed by the sights, sounds and smells. Sharma describes Marrakech as a "labyrinth" while Montagu describes Constantinople as a place of "indescribable confusion." Both writers use lists to create a sense of sensory overload: Sharma lists smells ("cumin, cedar, leather") while Montagu lists the people at the customs house. Both writers use animals for humour — Sharma\'s cat with "calm superiority" and Montagu\'s camel with "patient contempt." However, Sharma is a modern tourist who accepts being lost, while Montagu is a historical traveller who is more formal and tries to maintain her composure. Sharma\'s tone is casual and humorous while Montagu\'s is more literary and grand.',
              'Grade 6-7': 'Both writers negotiate the tension between preparation and reality, but their rhetorical strategies differ fundamentally due to their historical contexts. Sharma\'s opening subverts the authority of the guidebook: she has "read the guidebooks" and "studied the map" but concludes that Marrakech "refuses to be flattened into two dimensions." This positions the modern traveller as someone who must abandon informational authority. Montagu, writing in 1717, claims no such prior knowledge; her authority derives from being a direct witness, and her rhetoric of overwhelm — "nothing had prepared me for this" — establishes the primacy of firsthand experience over secondhand report. Both writers structure their accounts through escalating sensory catalogues, but the catalogues serve different purposes. Sharma\'s asyndetic list of smells is impressionistic, blurring into "something sweet and unidentifiable"; Montagu\'s polysyndetic lists are taxonomic, attempting to classify even as they acknowledge failure. The animals function as comic mirrors in both texts: Sharma\'s cat and Montagu\'s camel both embody a local composure that shames the foreign visitor, but while Sharma reads the cat as knowing "where it was going" (a navigational superiority), Montagu reads the camel as possessing "patient contempt" (a social and perhaps civilisational superiority). The most significant difference is in resolution. Sharma concludes with a philosophy of surrender — "allow yourself to be carried along" — that valorises passivity. Montagu concludes by detecting "grandeur" beneath "chaos," asserting that the disciplined observer can find meaning where the casual visitor sees only confusion.',
            },
            markScheme: [
              'Compares experiences and perspectives from both sources',
              'Analyses methods used by both writers with examples',
              'Identifies similarities and differences throughout',
              'Top band: perceptive comparative analysis with sustained engagement',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-01-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-01-q5',
            questionNumber: 5,
            questionText: 'Your local council is considering closing a community centre to save money.\n\nWrite a letter to the council in which you argue that the community centre should remain open.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with: appropriate formal register and letter conventions (Dear..., Yours faithfully); a sustained argument with reasons; use of some rhetorical techniques; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted letter with: confident formal register; persuasive techniques including counter-argument; emotive and logical appeals balanced; accurate and varied SPaG with ambitious vocabulary.',
              'Grade 8-9': 'An assured, compelling letter with: sophisticated rhetorical strategy; nuanced argument acknowledging financial realities while insisting on social value; distinctive, authoritative voice; technical virtuosity in SPaG.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-01-q6',
            questionNumber: 6,
            questionText: 'A travel magazine is running a writing competition. The theme is "A Place That Changed Me."\n\nWrite your entry for the competition.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear travel article with: appropriate features (headline optional); sustained description and reflection; personal voice; generally accurate SPaG.',
              'Grade 6-7': 'A compelling magazine entry with: vivid sensory writing; reflective voice connecting place to personal growth; effective structural choices; accurate and varied SPaG.',
              'Grade 8-9': 'An outstanding piece with: assured literary voice blending description with introspection; sophisticated structural control; ambitious, precise language; technical excellence.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation, engagement with reader',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: Sport
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-02',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-02-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E02_SOURCE_A_REF}\nSource B: ${E02_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-02-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) The writer thinks money is the main problem with modern football.\nB) The writer\'s grandfather watched Sunderland.\nC) Players in the 1960s lived near the fans.\nD) The connection between players and fans was created by marketing.\nE) Players and fans used the same pubs.\nF) A Premier League footballer earns more weekly than a nurse earns yearly.\nG) Ticket prices have risen by 110% since 1990.\nH) Corporate hospitality boxes have replaced terraces.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E02_SOURCE_A}\n\nSource B:\n${E02_SOURCE_B}`,
            extractSource: `Source A: ${E02_SOURCE_A_REF} | Source B: ${E02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, C, E, F — B: "my grandfather watched Sunderland in the 1960s." C: "the players lived in the same streets as the fans." E: "drank in the same pubs." F: "earns more in a week than a nurse earns in a year."',
              'Grade 6-7': 'B, C, E, F — A is false (he says money is not the main problem). D is false (the connection was "not manufactured by marketing departments"). G is false (1,100%, not 110%). H is true but falls outside the specified lines.',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-02-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does the writer use language to argue that modern football has lost its connection with communities?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E02_SOURCE_A}`,
            extractSource: E02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer contrasts the past with the present to show what has been lost. In the 1960s, players "lived in the same streets," "drank in the same pubs" — the repetition of "same" emphasises equality. Today, the statistic "earns more in a week than a nurse earns in a year" shocks the reader by comparing football wages to an essential worker. The phrase "pricing out" is emotive, suggesting fans are being deliberately excluded. The metaphor of "terraces" being "replaced by corporate hospitality boxes" symbolises the loss of working-class culture.',
              'Grade 6-7': 'Harding constructs his argument through a temporal structure that positions the past as communal and the present as corporate. The anaphoric repetition of "the same" — "same streets," "same pubs," "same schools" — creates a rhythmic insistence on shared space that performs linguistically the social cohesion it describes. The parenthetical aside "though the money is obscene" is rhetorically strategic: the concession to the obvious criticism (that money is the problem) allows Harding to redirect towards a more nuanced argument about community. The statistical comparison — "more in a week than a nurse earns in a year" — juxtaposes football with healthcare, implicitly invoking a moral hierarchy of social value. The terraces are described not merely as standing areas but as places "where generations of working people roared their teams to glory": the verb "roared" connotes primal, communal energy, while "generations" implies inheritance and continuity. Their replacement by "corporate hospitality boxes" is loaded: "hospitality" is ironically distanced from genuine welcome, while "boxes" connotes containment and separation. The concluding tricolon of imperatives — "We can demand... We can insist... We can refuse" — shifts from analysis to activism, the collective pronoun "we" recruiting the reader into a community of resistance.',
            },
            markScheme: [
              'Identifies language features with specific examples',
              'Analyses effects of language on the reader',
              'Comments on persuasive techniques and their impact',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-02-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey his attitude towards the game of football and the boys who play it?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E02_SOURCE_B}`,
            extractSource: E02_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer\'s attitude is one of admiration. He uses hyperbole — "such ferocity and determination" — to show how impressed he is. The detail about "torn shirts, bloodied knees" could sound negative but is followed by "the most intense satisfaction," showing the writer sees this as positive. He calls the game "chaotic beyond description" which sounds critical but his tone is affectionate. The final paragraph reveals his real admiration: "The only currency is courage" is a metaphor that shows he values bravery above everything else.',
              'Grade 6-7': 'Hughes constructs an attitude of amused admiration that gradually deepens into genuine philosophical respect. The opening mock-heroic register — "one might have supposed some great national question hung upon the outcome" — establishes ironic distance while simultaneously elevating the boys\' commitment. The catalogue of injuries — "torn shirts, bloodied knees, and expressions of the most intense satisfaction" — uses bathos: the expected third element (more serious injury) is replaced by emotional fulfilment, subverting the reader\'s expectation. The description of the ball as "a misshapen object of inflated leather" is deliberately deflating, reducing the game\'s equipment to absurdity while the boys\' passion remains elevated. The rhetorical pivot occurs in the final paragraph, where "democracy" carries serious political weight. The antithesis between "headmaster\'s son and the scholarship boy" makes explicit the class dimension, while the metaphor "the only currency is courage" redefines economic language in moral terms, suggesting that the playing field offers a truer meritocracy than the society beyond it.',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on writer\'s attitude and how it is conveyed',
              'Considers tone and shifts in tone',
              'Top band: perceptive analysis of the writer\'s craft',
            ],
          },
          {
            id: 'edexcel-p2-02-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on sport and community.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E02_SOURCE_A}\n\nSource B:\n${E02_SOURCE_B}`,
            extractSource: `Source A: ${E02_SOURCE_A_REF} | Source B: ${E02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers discuss sport and community but from different angles. Harding argues that football has lost its community connections because of money, while Hughes presents football as a great leveller where everyone is equal. Harding\'s tone is angry and frustrated — he uses statistics and emotive language to criticise modern football. Hughes\'s tone is warm and admiring — he uses humorous description to celebrate the game. Both see sport as connected to class: Harding mourns "working people" being priced out while Hughes celebrates "the headmaster\'s son and the scholarship boy" competing equally. The main difference is that Harding looks at sport from outside as a critic while Hughes watches from inside as an admirer.',
              'Grade 6-7': 'Harding and Hughes both present sport as a site of community, but their temporal positions create fundamentally different arguments. Harding writes as an elegist: his community is lost, destroyed by commercialisation, and his rhetoric of decline ("replaced," "pricing out," "lost") positions modern football as a narrative of dispossession. Hughes writes as a discoverer: community is being created before his eyes on the playing field, and his rhetoric of revelation ("what strikes me most") positions sport as a source of ongoing wonder. Their methods mirror their perspectives. Harding deploys the tools of investigative journalism — statistics, comparisons, economic data — because his argument requires evidence of systemic failure. Hughes deploys the tools of literary observation — metaphor, irony, comic detail — because his argument requires the reader to see what he sees. Both writers invoke class, but with opposite trajectories: Harding\'s working people have been expelled from football by economic forces; Hughes\'s scholarship boy has been admitted to equality by sporting ones. The structural parallel is illuminating: Harding ends with a call to action ("We can demand... We can insist"), reasserting agency against a system; Hughes ends with a philosophical observation ("the only currency is courage"), suggesting that sport itself resolves what society cannot. Both are ultimately optimistic, but Harding\'s optimism requires human intervention while Hughes\'s requires only the existence of the game itself.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods with specific examples from both texts',
              'Identifies and explores similarities and differences',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-02-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-02-q5',
            questionNumber: 5,
            questionText: 'Your school or college is planning to reduce the number of PE lessons to make more time for academic subjects.\n\nWrite a speech to be delivered at a school assembly in which you argue for or against this proposal.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: direct address to the audience; sustained argument with reasons and examples; some rhetorical devices (rhetorical questions, rule of three); generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with: confident, engaging address; persuasive techniques including counter-argument; varied sentence structures for effect; accurate and ambitious SPaG.',
              'Grade 8-9': 'An assured, compelling speech with: commanding rhetorical strategy; nuanced argument balancing academic and physical wellbeing; distinctive, authoritative voice; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-02-q6',
            questionNumber: 6,
            questionText: '"Sport is about more than winning." Write an article for a broadsheet newspaper in which you argue for or against this view.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate form features (headline, paragraphs); sustained argument; use of examples and evidence; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with: distinctive journalistic voice; well-structured argument with evidence and anecdote; effective use of counter-argument; accurate and varied SPaG.',
              'Grade 8-9': 'An outstanding article with: assured, authoritative voice; sophisticated argument weaving personal reflection with broader social commentary; ambitious vocabulary and syntax; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: Education
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-03',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-03-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E03_SOURCE_A_REF}\nSource B: ${E03_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-03-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-7.\n\nChoose four statements below which are TRUE.\n\nA) A typical student will have sat over seventy assessments by age sixteen.\nB) The education system produces curious human beings effectively.\nC) Students receive the message that their worth can be measured.\nD) Referrals to child mental health services have tripled.\nE) Exam stress is cited in over 40% of mental health cases.\nF) Teachers are leaving the profession at record rates.\nG) One in five newly qualified teachers quits within five years.\nH) The system is efficient at producing data.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E03_SOURCE_A}\n\nSource B:\n${E03_SOURCE_B}`,
            extractSource: `Source A: ${E03_SOURCE_A_REF} | Source B: ${E03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, H — A: "over seventy formal assessments." C: "your worth can be measured, quantified, and ranked." E: "exam stress cited as a primary factor in over 40% of cases." H: "extraordinarily efficient at producing data."',
              'Grade 6-7': 'A, C, E, H — B is false (the system is "extraordinarily inefficient" at this). D is false (doubled, not tripled). F is true but appears in a later section. G is false (one in three, not one in five).',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-03-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does the writer use language to argue against the current examination system?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E03_SOURCE_A}`,
            extractSource: E03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer opens with the powerful phrase "testing our children to destruction" which uses emotive language to make exams sound violent and harmful. The statistic "over seventy formal assessments" shocks the reader with a specific number. The contrast between "extraordinarily efficient at producing data" and "extraordinarily inefficient at producing curious... human beings" uses the same word to highlight the system\'s wrong priorities. The metaphor "burning through its most valuable resource" compares teachers to something being wasted, which is a strong image.',
              'Grade 6-7': 'Evans constructs her argument through a rhetorical strategy that systematically dismantles the language of institutional authority. The opening phrase "testing our children to destruction" repurposes the engineering term (testing to destruction means testing until something breaks) as a metaphor for educational practice, implying that the system has exceeded its subjects\' structural capacity. The antithetical parallelism — "extraordinarily efficient at producing data and extraordinarily inefficient at producing curious, resilient, creative human beings" — weaponises the system\'s own vocabulary of efficiency against it. The tricolon of adjectives ("curious, resilient, creative") defines humanity in terms that resist quantification, implicitly arguing that what matters most cannot be measured. The statistics in paragraph two function as strategic irony: the writer deploys data to argue against a data-driven system. The metaphor "burning through" connotes both consumption and waste, while the final paragraph\'s shift to anecdotal evidence — "a debate that overran into lunchtime," "a boy who had never willingly read a book" — deliberately privileges narrative over data, performing the argument\'s thesis through its own methodology.',
            },
            markScheme: [
              'Identifies language techniques with examples from Source A',
              'Analyses effects of specific word choices',
              'Considers how language shapes the argument',
              'Top band: detailed, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-03-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does Dickens use language to criticise the education system of his time?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E03_SOURCE_B}`,
            extractSource: E03_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'Dickens uses sarcasm to attack the education system. The phrase "admirably calculated to produce mediocrity" sounds like praise but is actually criticism — the system is good at making average people. The contrast between a child entering school with "natural curiosity" and leaving with it "thoroughly extinguished" uses the metaphor of fire being put out, making education sound destructive. The word "sullen compliance" shows students are unhappy and just obeying, not truly learning. The final metaphor of a "great machine" compares education to something mechanical and unfeeling.',
              'Grade 6-7': 'Dickens constructs his critique through sustained ironic inversion, where the vocabulary of praise becomes the vehicle of condemnation. The opening clause "admirably calculated to produce mediocrity" deploys "admirably" in mordant opposition to "mediocrity," implying that the system\'s greatest achievement is its consistent failure. The temporal antithesis — "enters at five... leaves at eighteen" — creates a narrative of destruction compressed into a single sentence, the child\'s "natural curiosity" (positioned as innately philosophical) being replaced by "sullen compliance." The pairing of verbs — "obedience for wisdom and repetition for understanding" — exposes false equivalences that the system perpetuates. Dickens\'s catalogue of what "the system rewards" — "compliance... uniformity... predictable results" — uses anaphoric repetition to suggest monotonous replication. The industrial metaphor of the "great machine" that "grinds on" is particularly resonant in context: Dickens, writing during the Industrial Revolution, conflates educational and industrial processes, implying that children are processed as raw material. The final phrase — "adequately informed and profoundly uninspired" — enacts its own critique through the juxtaposition of "adequately" (damning with faint praise) and "profoundly" (intensifying the condemnation).',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on effects of irony, imagery and word choice',
              'Considers how language conveys criticism',
              'Top band: sophisticated, perceptive analysis',
            ],
          },
          {
            id: 'edexcel-p2-03-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the failings of the education system.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E03_SOURCE_A}\n\nSource B:\n${E03_SOURCE_B}`,
            extractSource: `Source A: ${E03_SOURCE_A_REF} | Source B: ${E03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers criticise the education system for killing creativity and curiosity. Evans says students are "tested to destruction" while Dickens says curiosity is "thoroughly extinguished." Both think the system values the wrong things — Evans criticises data and Evans says the system rewards "compliance" and "uniformity." Evans uses modern statistics to prove her point while Dickens uses irony and observation. Both writers praise exceptional teachers: Evans describes a teacher choosing "exactly the right book" while Dickens mentions "teachers of brilliance and dedication." The main difference is that Evans writes as a teacher inside the system while Dickens writes as a journalist observing from outside.',
              'Grade 6-7': 'Evans and Dickens, separated by over 170 years, construct remarkably parallel critiques whose convergence is itself an argument: the persistence of the same failings suggests systemic rather than temporal problems. Both writers identify a fundamental paradox in education: that the system designed to develop human potential instead constrains it. Evans frames this as an efficiency paradox ("extraordinarily efficient at producing data and extraordinarily inefficient at producing... human beings"); Dickens frames it as an achievement paradox ("admirably calculated to produce mediocrity"). Both use the system\'s own language against it, but their rhetorical registers differ significantly. Evans deploys the contemporary rhetoric of evidence-based argument — statistics, percentages, named studies — turning the tools of measurement against the culture of measurement. Dickens deploys the Victorian rhetoric of literary satire — ironic inversion, sustained metaphor, rhetorical parallelism — transforming critique into art. Both writers locate hope in the same place: the exceptional teacher. Evans\'s teacher who chose "exactly the right book" and Dickens\'s teachers of "brilliance and dedication" both represent the human element that survives the system. But their conclusions differ. Evans ends with narrative — specific, embodied examples of learning that "no mark scheme could capture" — arguing implicitly for an education defined by unmeasurable moments. Dickens ends with metaphor — "the great machine of education grinds on" — arguing that the system\'s momentum is its most dangerous quality. Evans believes the machine can be stopped; Dickens implies it cannot.',
            },
            markScheme: [
              'Compares perspectives throughout with sustained engagement',
              'Analyses methods from both sources with examples',
              'Identifies and explores similarities and differences',
              'Top band: perceptive, conceptualised comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-03-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-03-q5',
            questionNumber: 5,
            questionText: 'Your headteacher has asked students for their views on whether homework should be abolished.\n\nWrite a letter to your headteacher in which you argue your point of view.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear formal letter with: appropriate conventions; a sustained argument with supporting reasons; some persuasive techniques; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted formal letter with: confident, respectful register; balanced argument acknowledging both sides; effective use of evidence and personal experience; accurate and varied SPaG.',
              'Grade 8-9': 'An assured letter with: sophisticated argument that reframes the debate; distinctive voice balancing deference with conviction; ambitious vocabulary and syntax; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-03-q6',
            questionNumber: 6,
            questionText: '"Exams are the fairest way to assess students." Write an article for a broadsheet newspaper in which you argue for or against this view.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate form features; sustained argument with reasons and examples; awareness of audience; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with: distinctive voice; well-structured argument using evidence, example and counter-argument; structural variety; accurate and ambitious SPaG.',
              'Grade 8-9': 'An outstanding article with: authoritative journalistic voice; sophisticated argument exploring fairness, equity and assessment philosophy; compelling rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: Technology
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-04',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-04-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E04_SOURCE_A_REF}\nSource B: ${E04_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-04-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) AI will definitely take your job.\nB) The writer delivers this message to audiences across the country.\nC) Audiences respond with only relief.\nD) AI is a single technology.\nE) AI capabilities are being integrated unevenly.\nF) A radiologist using AI can process three times as many scans.\nG) A lawyer using AI completes document review more slowly.\nH) These professionals have been amplified, not replaced.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E04_SOURCE_A}\n\nSource B:\n${E04_SOURCE_B}`,
            extractSource: `Source A: ${E04_SOURCE_A_REF} | Source B: ${E04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, E, F, H — B: "I deliver to audiences across the country." E: "being integrated, unevenly and unpredictably." F: "can process three times as many scans." H: "They have been amplified."',
              'Grade 6-7': 'B, E, F, H — A is false ("AI will not take your job"). C is false (a "mixture of relief and anxiety"). D is false ("not a single technology but a constellation"). G is false ("can complete in hours what previously took weeks").',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-04-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does the writer use language to present a balanced argument about artificial intelligence?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E04_SOURCE_A}`,
            extractSource: E04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer opens with a bold statement — "Artificial intelligence will not take your job" — that grabs the reader\'s attention. But it is immediately followed by a warning: "someone who knows how to use artificial intelligence will." This two-sentence structure creates a surprising twist. The metaphor "constellation of capabilities" makes AI sound vast and complex, like the night sky. The writer uses concrete examples (radiologists, lawyers) to make the argument feel real. The rhetorical questions "what happens to the other two?" and "where do the fifteen go?" force the reader to think about the human consequences.',
              'Grade 6-7': 'Chen constructs balance through a deliberately binary rhetorical architecture. The opening two sentences establish the argumentative method: the first ("will not take your job") reassures; the second ("someone who knows how to use AI will") destabilises. This claim-and-qualify structure operates throughout the piece. The metaphor "constellation of capabilities" replaces the monolithic popular image of AI with something distributed and complex; "unevenly and unpredictably" further resists simplification. The examples of radiologists and lawyers are strategically chosen: both are high-status, highly-skilled professions, implicitly arguing that AI disruption is not limited to manual labour. The verb "amplified" is carefully chosen — it retains human agency (the professional is still the primary actor) while acknowledging technological enhancement. The rhetorical pivot in the final paragraph deploys paired structures that refuse to allow one perspective without the other: "the efficiency gains are real, but so are the human costs." The anaphoric "We cannot... We cannot..." insists on dual awareness, while the concluding image — "the people it leaves behind" — personifies displacement with quiet emotional force.',
            },
            markScheme: [
              'Identifies language techniques with examples from Source A',
              'Analyses effects of specific word choices and structures',
              'Comments on how language creates balance and nuance',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-04-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the impact of industrial machinery on working people?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E04_SOURCE_B}`,
            extractSource: E04_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses emotive language to show the suffering caused by machinery. The phrase "rendered obsolete" is cold and impersonal, making the workers sound like old machines themselves. The detail "three hundred men" gives a specific number to show the scale of the problem. The description of families who "now subsist upon parish relief" uses the word "subsist" which means barely surviving. The image of men standing "idle in the streets, their hands purposeless" is powerful because their hands used to be skilled. The final metaphor "altar of efficiency" compares efficiency to a god that demands human sacrifice, which is very dramatic.',
              'Grade 6-7': 'Gaskell constructs her account through a rhetoric of inversion: the introduction of machinery has reversed every expectation of progress. The opening clause — "consequences which no human foresight could have anticipated" — positions technological change as exceeding human comprehension, establishing a theme of helplessness. The verb "rendered obsolete" is devastatingly precise: "rendered" implies an external agency acting upon passive subjects, while "obsolete" borrows from the vocabulary of objects, dehumanising the workers through the very language used to describe them. The temporal contrast — "three years ago enjoyed a respectable competence" versus "now subsist upon parish relief" — compresses economic collapse into a single sentence. The description of men with "hands purposeless" metonymically reduces workers to their defining feature (skilled hands) and then negates it. Gaskell\'s culminating metaphor — "the altar of efficiency" — performs a complex rhetorical operation: by invoking religious sacrifice, she transforms economic policy into moral atrocity, while "altar" implies that efficiency has become an idol, a false god demanding human offerings. The final sentence\'s conditional clause — "a civilisation that sacrifices its people" — challenges the reader\'s self-definition: if we do this, are we still civilised?',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on effects of vocabulary, imagery and tone',
              'Considers how language conveys suffering and moral argument',
              'Top band: sophisticated, perceptive analysis',
            ],
          },
          {
            id: 'edexcel-p2-04-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the impact of new technology on working people.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E04_SOURCE_A}\n\nSource B:\n${E04_SOURCE_B}`,
            extractSource: `Source A: ${E04_SOURCE_A_REF} | Source B: ${E04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers discuss the impact of new technology on workers but from different time periods. Chen writes about AI in 2025 while Gaskell writes about industrial machinery in 1855. Both acknowledge that technology brings benefits but worry about the human cost. Chen says AI has "amplified" professionals while Gaskell says machines "can perform in one hour the labour of an entire day." Both writers use rhetorical questions and emotional language. The main difference is tone: Chen is more balanced and academic while Gaskell is more emotional and urgent. Both conclude that we cannot ignore the human cost of progress.',
              'Grade 6-7': 'Chen and Gaskell, writing 170 years apart about technologies separated by equal distance, construct strikingly parallel arguments whose convergence suggests that the relationship between technological progress and human displacement is a recurring structural problem rather than a historical accident. Both writers negotiate between acknowledging inevitability and insisting on moral responsibility, but their rhetorical strategies differ according to context. Chen\'s register is analytical and prophetic: he speaks to "audiences across the country" as a public intellectual, deploying the rhetoric of futurism (predictions, scenarios, conditional questions). Gaskell\'s register is testimonial and moral: she has "spoken with upwards of three hundred men," grounding her authority in direct witness rather than professional expertise. Their treatment of the displaced differs revealingly. Chen\'s displaced workers are abstractions — "the other two" radiologists, "the fifteen" lawyers — their anonymity reflecting the statistical nature of modern economic analysis. Gaskell\'s displaced workers are embodied: they have "hands purposeless" and "expressions" of "bewildered despair," their physicality insisting on their humanity. Both writers use the same rhetorical move of pre-emptive concession — Chen\'s "the efficiency gains are real" mirrors Gaskell\'s "I do not argue against progress" — but their conclusions diverge. Chen ends with a demand for honesty ("any honest conversation must reckon with both"); Gaskell ends with a moral challenge ("a civilisation that sacrifices its people... has lost its way"). Chen asks us to think differently; Gaskell asks us to be different.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods with specific examples from both texts',
              'Explores how context shapes perspective and method',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-04-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-04-q5',
            questionNumber: 5,
            questionText: 'A technology company has invited young people to contribute to a report on how AI is changing education.\n\nWrite a report in which you explain the advantages and disadvantages of AI in the classroom.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear report with: appropriate form features (title, subheadings, formal register); balanced coverage of advantages and disadvantages; some use of evidence or examples; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted report with: professional format and register; balanced, evidence-informed discussion; clear recommendations; accurate and varied SPaG.',
              'Grade 8-9': 'An assured report with: authoritative professional voice; nuanced analysis that avoids simplistic binary; strategic recommendations; ambitious vocabulary and syntax; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-04-q6',
            questionNumber: 6,
            questionText: '"Technology connects us to information but disconnects us from each other." Write an article for a magazine aimed at young adults in which you explore this idea.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate form features; sustained exploration of the idea; personal voice and examples; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with: engaging voice appropriate for young adult audience; nuanced exploration that avoids simplistic agreement or disagreement; effective use of anecdote and evidence; accurate and varied SPaG.',
              'Grade 8-9': 'An outstanding article with: distinctive, witty voice; sophisticated argument that interrogates the premise; ambitious structural choices; compelling rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: Nature
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p2-05',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p2-05-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${E05_SOURCE_A_REF}\nSource B: ${E05_SOURCE_B_REF}`,
        totalMarks: 36,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-05-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, lines 1-8.\n\nChoose four statements below which are TRUE.\n\nA) Peregrine falcons nested on a church roof.\nB) A webcam was installed within days.\nC) Thousands of people followed the nesting season.\nD) The falcons are the slowest animal on earth.\nE) The peregrine falcon is the fastest animal on earth.\nF) The chicks were raised on a concrete ledge.\nG) No one watched the webcam at night.\nH) One of the chicks teetered on the edge.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${E05_SOURCE_A}\n\nSource B:\n${E05_SOURCE_B}`,
            extractSource: `Source A: ${E05_SOURCE_A_REF} | Source B: ${E05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, C, E, F — B: "a webcam had been installed." C: "thousands of people... were following." E: "the fastest animal on earth." F: "choosing to raise its young on a concrete ledge."',
              'Grade 6-7': 'B, C, E, F — A is false (multi-storey car park, not a church). D is false (fastest, not slowest). G is false ("insomniacs watching at 3am"). H is true but appears later in the text.',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-05-q2',
            questionNumber: 2,
            questionText: 'You need to refer only to Source A for this question.\n\nHow does the writer use language to explore the relationship between humans and urban wildlife?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${E05_SOURCE_A}`,
            extractSource: E05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer creates a sense of wonder through language. The phrase "the fastest animal on earth" choosing a "pay-and-display car park" creates a contrast between the wild and the ordinary that is both funny and amazing. The comparison to "reality television" suggests humans are treating nature as entertainment. The list of people watching — "office workers, schoolchildren, pensioners, insomniacs" — shows how many different people were engaged. The phrase "the entire internet held its breath" is personification and hyperbole, showing the excitement. But the final paragraph changes tone with statistics about decline: "75%... one in six... 50%" — the numbers feel relentless and depressing.',
              'Grade 6-7': 'Barker constructs a deliberately two-movement piece whose structure enacts its argument: celebration followed by uncomfortable truth. The opening anecdote is presented through the vocabulary of social media culture — "webcam," "Twitter account" — implicitly questioning whether our engagement with nature has become mediated through technology. The catalogue of watchers ("office workers, schoolchildren, pensioners, insomniacs watching at 3am") is both celebratory and faintly absurd, the specificity of "3am" suggesting obsession as much as wonder. The comparison to "reality television" is strategically ambivalent: it could indicate genuine public enthusiasm, or it could imply that nature has been reduced to entertainment. The anaphoric "Perhaps it was" structure defers definitive explanation, enacting the writer\'s own uncertainty about what the falcons represent. The rhetorical pivot — "But I wonder whether our enthusiasm for urban wildlife is, in part, a way of avoiding the harder truth" — is devastating in its quietness: "I wonder" is more damaging than "I believe" because it invites complicity rather than resistance. The closing statistics form a descending pattern (75%, one in six, 50%) that mirrors ecological decline, while the parenthetical aside about the hedgehog — "once so common it was a nuisance" — uses bathos to measure loss through the mundane rather than the spectacular.',
            },
            markScheme: [
              'Identifies language features with specific examples',
              'Analyses effects of tone, imagery and structure',
              'Comments on how language explores the central tension',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-05-q3',
            questionNumber: 3,
            questionText: 'You need to refer only to Source B for this question.\n\nHow does the writer use language to convey the richness and importance of the natural world?',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${E05_SOURCE_B}`,
            extractSource: E05_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': 'White uses vivid description to show his love of nature. The hedgerows are "white with blackthorn blossom" which is visual imagery that creates a beautiful picture. He personifies the oaks as "still cautious," making them seem careful and thoughtful. The swallows are called "miraculous navigators" which shows how amazing he finds them. The nightingale\'s song is described with the exclamation "that voice, that extraordinary, heart-stopping voice" — the repetition of "that" and the adjective "heart-stopping" show how emotional the experience is. The final metaphor "the soul requires wildness as the body requires bread" compares nature to food, suggesting it is essential for survival.',
              'Grade 6-7': 'White constructs an argument for nature\'s value through the accumulation of precise, joyful observation that performs its own thesis: the act of detailed attention to the natural world becomes evidence of its importance. The personification of oaks as "still cautious" and showing "the first suggestions of green" endows the tree with psychological depth, while "suggestions" implies tentativeness, even politeness. The swallows are elevated through the parenthetical apposition "those miraculous navigators" from birds to almost mythological figures, while the factual detail of their migration route ("crossed the Sahara and half of Africa") grounds the wonder in geographical reality. The cuckoo is a "shameless impostor" — moral language applied to natural behaviour creates an intimate, conversational relationship between observer and observed. The description of the nightingale employs a syntactic stammer — "that voice, that extraordinary, heart-stopping voice" — the self-interrupting repetition enacting the writer\'s inability to move past the moment. The rhetorical shift in the final paragraph from personal to philosophical is achieved through the concluding aphorism: "the soul requires wildness as the body requires bread." The parallel structure equates spiritual and physical need, while the choice of "bread" — the most basic, universal food — positions nature not as luxury but as fundamental sustenance.',
            },
            markScheme: [
              'Analyses language with specific examples from Source B',
              'Comments on effects of personification, imagery and tone',
              'Considers how language conveys wonder and argues for value',
              'Top band: sophisticated, perceptive analysis of language choices',
            ],
          },
          {
            id: 'edexcel-p2-05-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the relationship between humans and the natural world.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${E05_SOURCE_A}\n\nSource B:\n${E05_SOURCE_B}`,
            extractSource: `Source A: ${E05_SOURCE_A_REF} | Source B: ${E05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers write about humans and nature but from very different perspectives. Barker is worried — he thinks our love of urban wildlife distracts from "catastrophic decline" in the wider natural world. White is joyful — he celebrates the nature around his home with detailed, loving descriptions. Both writers observe wildlife closely: Barker watches falcons on a car park while White counts "fourteen species of bird." However, Barker\'s observations lead to anxiety while White\'s lead to wonder. Barker uses statistics to shock the reader while White uses sensory language to delight the reader. Both believe nature matters to humans, but Barker warns we are losing it while White assumes it will always be there.',
              'Grade 6-7': 'Barker and White write from opposite sides of ecological history: White inhabits a world of natural abundance and writes in celebration; Barker inhabits a world of ecological crisis and writes in warning. This temporal contrast is fundamental to their different perspectives and methods. White\'s relationship with nature is intimate, domestic, and reciprocal. He counts species "within a quarter mile of my front door"; the natural world begins at his threshold. His prose reflects this intimacy through personification that grants nature personality: cautious oaks, shameless cuckoos, miraculous swallows. Barker\'s relationship with nature is mediated: the falcons are watched through webcams, the decline measured through statistics. His prose reflects this distance through the vocabulary of data and media: "Twitter account," "75%," "one in six." Both writers make philosophical claims about nature\'s importance to humanity, but the claims emerge from different emotional positions. White\'s aphorism — "the soul requires wildness as the body requires bread" — assumes that articulating the need is sufficient; the wildness is still there to be accessed. Barker\'s closing statistics imply that the wildness may not survive long enough for us to access it: the hedgehog\'s 50% decline since the millennium measures not just population loss but the erosion of the very ordinariness that White takes for granted. The deepest irony is structural: White\'s letter, describing abundance that now seems almost unimaginable, becomes — read alongside Barker — an inadvertent elegy for a world that has been lost. The fourteen species White counted would, in many contemporary English landscapes, be cause for celebration rather than casual observation.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods with specific examples from both texts',
              'Explores how context shapes perspective',
              'Top band: perceptive, sustained comparative analysis',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-05-writing',
        title: 'Section B: Transactional Writing',
        description: 'You are advised to spend about 50 minutes on this section. Answer BOTH questions.',
        totalMarks: 28,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-05-q5',
            questionNumber: 5,
            questionText: 'Your school or college is planning to create a wildlife garden on the school grounds.\n\nWrite a speech to be delivered at a school assembly in which you persuade students and staff to support this project.\n\n(8 marks for content / 4 marks for SPaG)',
            marks: 12,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: appropriate direct address; sustained persuasive argument with reasons; some rhetorical devices; generally accurate SPaG.',
              'Grade 6-7': 'A well-crafted speech with: engaging, enthusiastic address; persuasive techniques including counter-argument and emotional appeal; effective use of evidence and example; accurate and varied SPaG.',
              'Grade 8-9': 'An assured, compelling speech with: commanding rhetorical strategy connecting the local project to broader environmental themes; distinctive voice; ambitious language; technical excellence.',
            },
            markScheme: [
              'Content (8 marks): Purpose, audience, form, register, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
          {
            id: 'edexcel-p2-05-q6',
            questionNumber: 6,
            questionText: '"We have lost our connection with the natural world, and we are poorer for it." Write an article for a broadsheet newspaper in which you argue for or against this view.\n\n(12 marks for content / 4 marks for SPaG)',
            marks: 16,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: appropriate form features; sustained argument with personal examples and wider evidence; generally accurate SPaG.',
              'Grade 6-7': 'A compelling article with: distinctive voice; well-structured argument combining personal reflection with broader social and environmental commentary; effective counter-argument; accurate and varied SPaG.',
              'Grade 8-9': 'An outstanding article with: assured, literary voice; sophisticated argument interrogating definitions of "connection" and "nature"; ambitious structural choices; compelling rhetoric; technical virtuosity.',
            },
            markScheme: [
              'Content (12 marks): Communication, register, form, organisation',
              'SPaG (4 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },
]
