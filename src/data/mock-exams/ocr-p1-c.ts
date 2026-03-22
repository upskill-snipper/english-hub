import type { MockExamPaper } from '../mock-exams'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 11 — Sport & Competition
const SPORT_SOURCE_A = `There is something profoundly dishonest about the way we talk about sport in this country. We dress it up in the language of aspiration and togetherness — "inspiring a generation", "bringing the nation together" — while ignoring the uncomfortable reality that elite sport is, at its core, an industry built on exclusion. For every child who makes it to a national squad, thousands are discarded along the way, their confidence shattered by a system that measures human worth in hundredths of a second.

I have spent twenty years coaching young athletes, and I have watched the system consume them. At fourteen, they are told they are special. At sixteen, they are dropped from programmes with a form letter and a suggestion to "keep enjoying sport recreationally". The psychological damage this inflicts is rarely discussed. We prefer the medal ceremonies, the tearful interviews, the narrative of triumph against adversity. We do not talk about the eighteen-year-old gymnast who cannot eat without anxiety, or the swimmer who has not had a single weekend free since she was eleven.

The funding model makes this worse. Since the introduction of National Lottery funding in 1997, British sport has operated on a ruthless "no compromise" approach: money flows to sports and athletes most likely to win medals. This has been spectacularly successful in terms of Olympic performance. But success measured purely in gold medals tells us nothing about whether sport is actually improving the health and wellbeing of the population. Grassroots sports facilities continue to close at an alarming rate. School playing fields are sold to developers. Community swimming pools operate on skeleton budgets.

We need an honest conversation about what sport is for. If the answer is simply "winning", then let us at least be truthful about the human cost. If the answer is something broader — health, community, joy — then we must fundamentally rethink how we fund and organise it.`

const SPORT_SOURCE_A_REF = 'Rachel Okonkwo, "The Medal Factory", The Observer, 2024'

const SPORT_SOURCE_B = `The modern passion for athletic sports is one of the most curious and, to my mind, one of the most encouraging features of our national life. Where formerly young men of the working classes spent their Saturday half-holidays in pursuits which I shall not enumerate but which contributed nothing to their physical or moral improvement, they now gather in their thousands upon football grounds and cricket fields, participating in contests which demand discipline, co-operation, and the subordination of individual desire to the common good.

I do not suggest that sport is without its dangers. The gambling element, which attaches itself to any form of competition as inevitably as rust to iron, must be guarded against with the utmost vigilance. But the spectacle of thirty thousand working men watching a football match in orderly good humour, cheering impartially for displays of skill and courage regardless of which side produces them, strikes me as evidence of something admirable in the English character.

The lessons of the playing field, moreover, are the lessons of life itself. The boy who learns to accept defeat graciously and to share the credit of victory with his fellows has received an education more valuable than any amount of book-learning. Sport teaches what no classroom can: that effort matters more than outcome, that the team is greater than any individual, and that true strength lies not in the fist but in the will.`

const SPORT_SOURCE_B_REF = 'From a speech by Lord Kinnaird to the Football Association, 1898'

// Exam 12 — Science & Discovery
const SCIENCE_SOURCE_A = `We are living through the greatest revolution in biological science since Darwin, and almost nobody is paying attention. The development of CRISPR gene-editing technology — which allows scientists to alter DNA with unprecedented precision — has moved from laboratory curiosity to practical reality in less than a decade. Crops that resist drought. Mosquitoes engineered to stop spreading malaria. The potential elimination of inherited diseases that have caused suffering for millennia. The possibilities are extraordinary.

They are also terrifying. Last year, a research team in China announced it had edited the genes of human embryos — not to cure disease, but to enhance cognitive function. The scientific community reacted with horror. Regulatory bodies issued stern statements. Governments held emergency meetings. And then, as is the way with these things, the news cycle moved on and we forgot about it.

We cannot afford to forget. Gene editing raises questions that go to the very heart of what it means to be human. If we can eliminate genetic predispositions to depression, should we? If we can engineer children who are taller, stronger, more intelligent, will we create a society divided not merely by wealth but by biology? Who decides which traits are "defects" to be corrected and which are variations to be celebrated?

The scientists I have spoken to are overwhelmingly optimistic. They see a future free from genetic disease, a world where no child is born to suffer from conditions that we had the power to prevent. I share their excitement. But I cannot shake the feeling that we are editing a text we have not yet fully learned to read, making permanent changes to a code we only partially understand.`

const SCIENCE_SOURCE_A_REF = 'Professor James Whitworth, "Rewriting the Code of Life", New Scientist, 2025'

const SCIENCE_SOURCE_B = `The advances of modern science have bestowed upon mankind powers which, a century ago, would have been attributed to sorcery. We have harnessed the lightning to carry our messages across continents. We have conquered diseases that once swept away entire populations. We have peered into the very structure of matter and found there a universe more strange and wonderful than any imagined by the poets.

Yet I confess that these triumphs, magnificent as they are, fill me with an unease I find difficult to articulate. There is in the scientific mind a tendency to assume that because a thing can be done, it ought to be done — that knowledge, of whatever kind, is always preferable to ignorance. This I cannot accept. There are, I believe, territories of inquiry into which we venture at our peril: not because the knowledge itself is dangerous, but because we lack the wisdom to employ it responsibly.

The chemist who discovers a new explosive may intend it for the quarry and the mine. He cannot ensure that it will not be used upon the battlefield. The physician who unravels the mysteries of contagion equips us to save lives; but the same knowledge, in malicious hands, becomes a weapon of unspeakable horror. Knowledge is neutral. Human nature is not.`

const SCIENCE_SOURCE_B_REF = 'From a lecture by Professor Thomas Huxley at the Royal Institution, 1882'

// Exam 13 — Housing
const HOUSING_SOURCE_A = `I moved seven times before my eighteenth birthday. Not because my parents were restless or adventurous, but because that is what happens when you rent in modern Britain. Each time, the pattern was the same: a letter from the letting agent, a scramble to find somewhere affordable, the grim ritual of packing boxes while my mother tried to pretend it was an adventure. "Think of it as a fresh start," she would say, taping shut a box of kitchen things. I learned not to make close friends with the neighbours.

The housing crisis in this country is not a natural disaster. It is a political choice. Since the Right to Buy scheme was introduced in 1980, local authority housing stock has declined by over two million homes. Private rents have risen by 60% in the last decade alone. A generation of young people — my generation — has been locked out of home ownership entirely, condemned to spend a third of their income enriching landlords while being told that if they just stopped buying coffee and avocados they could afford a deposit.

The human cost is staggering. Research by Shelter found that over a million children in England are living in unsuitable housing: damp, overcrowded, temporary. These children are more likely to suffer from respiratory illness, more likely to struggle at school, more likely to experience mental health problems. We know this. The evidence has been available for decades. And yet the construction of social housing remains at historically low levels.

Housing is not a luxury. It is the foundation upon which everything else is built — education, health, employment, family life. Until we treat it as a right rather than a commodity, nothing will change.`

const HOUSING_SOURCE_A_REF = 'Aisha Patel, "Generation Rent", The New Statesman, 2025'

const HOUSING_SOURCE_B = `The condition of the dwellings occupied by the labouring poor in our great cities is a matter which demands the immediate and earnest attention of Parliament. I have this session laid before the House evidence gathered from every quarter of the kingdom, and the picture it presents is one which ought to make every member assembled here ashamed of the civilisation he professes to represent.

In Manchester, I have seen cellars in which families of six and eight persons live without light, without ventilation, and without access to clean water. In Liverpool, I have visited courts where the refuse of years lies piled against the walls and where fever is so constant a visitor that the inhabitants speak of it with the resignation one might reserve for bad weather. In London — the richest city on the face of the earth — I have found streets where the death rate exceeds that of the most disease-ridden districts of Calcutta.

Let no member comfort himself with the thought that these are exceptional cases. They are not. They are the ordinary, everyday conditions in which millions of our fellow subjects pass their entire lives. And let no member suppose that the inhabitants of these places are there by choice, or that they remain through idleness. I have found among them industrious men and women working twelve and fourteen hours daily, who cannot earn sufficient wages to secure anything better.

The cost of doing nothing is already being paid — in sickness, in crime, in the degradation of human beings who deserve better from the nation that claims their loyalty.`

const HOUSING_SOURCE_B_REF = 'From a speech by Lord Shaftesbury to the House of Lords, 1884'

// Exam 14 — Arts & Culture
const ARTS_SOURCE_A = `When the government announced last year that arts funding would be cut by a further fifteen percent, the response from the cultural sector was predictable: outrage, open letters, impassioned speeches about the irreplaceable value of the arts. What was more revealing was the response from everybody else. There was, overwhelmingly, silence. A collective shrug. The sense that, in times of economic difficulty, art is a luxury we can no longer afford.

This attitude is not merely wrong. It is economically illiterate. The creative industries contribute over £115 billion annually to the UK economy — more than the automotive, aerospace, and life sciences sectors combined. For every pound of public money invested in the arts, an estimated five pounds is generated in economic return. To cut arts funding in the name of fiscal responsibility is like burning your furniture to save on heating bills: it produces a brief warmth followed by a much longer cold.

But the economic argument, powerful as it is, misses the deeper point. The arts are not valuable because they generate revenue. They are valuable because they make us human. A society without music, without theatre, without literature, without the visual arts, is not a society at all — it is merely a collection of individuals engaged in the business of survival. The arts give us a shared language for experiences that would otherwise remain private and incommunicable: grief, joy, love, rage, wonder, despair.

I grew up on a council estate in Salford. The local library saved my life — not metaphorically, but literally. The books I found there showed me that the world was larger than the four streets I knew, that other lives were possible, that imagination was not a weakness but a form of power. Every child deserves that discovery. To deny it to them because we cannot see its value on a spreadsheet is a failure not of economics but of imagination.`

const ARTS_SOURCE_A_REF = 'David Oyelaran, "The Case for Culture", The Guardian, 2025'

const ARTS_SOURCE_B = `I am asked what is the use of art, and I confess the question fills me with a weariness I can scarcely express. One might as well ask what is the use of a sunset, or of birdsong, or of the particular quality of light that falls through a cathedral window on a winter afternoon. Art does not justify itself by its usefulness, any more than love does, or laughter, or the pleasure of walking through an autumn wood.

Yet since the question is put, and put persistently, I shall attempt an answer. Art is useful because it teaches us to see. The painter shows us colours we have looked at a thousand times without noticing. The poet arranges words we use daily into patterns that suddenly reveal meanings we had not suspected. The novelist places us inside the consciousness of another human being — a feat which, in ordinary life, is entirely impossible and which constitutes, I believe, the closest thing to a moral education that exists.

A nation which neglects its artists does not merely lose its paintings and its poems. It loses, by slow degrees, its capacity for feeling, its tolerance for ambiguity, its willingness to entertain ideas that do not immediately prove their practical worth. It becomes, in the most precise sense of the word, barbarous — not because it lacks civilisation's outward forms, but because it has forgotten what those forms were created to protect.`

const ARTS_SOURCE_B_REF = 'From an essay by John Ruskin, Modern Painters, 1856'

// Exam 15 — Immigration
const IMMIGRATION_SOURCE_A = `My parents arrived in this country in 1998 with two suitcases, three hundred pounds, and a conviction that Britain was a place where hard work would be rewarded. Twenty-six years later, my father runs a small engineering firm that employs fourteen people. My mother is a ward sister at the local hospital, where she has worked for two decades. My brother is a solicitor. I am a teacher. Between us, we have paid more in taxes than I care to calculate.

I mention this not because I believe immigrants should have to justify their existence through economic contribution — the idea that a human being's right to live in safety and dignity depends on their productivity is morally grotesque — but because the public conversation about immigration in this country has become so divorced from reality that basic facts need restating.

Net migration is not "out of control". The overwhelming majority of immigrants come to work, to study, or to join family members already here. They are younger, on average, than the existing population, which means they contribute more in taxes than they consume in public services. The NHS would collapse within weeks without immigrant workers. The care sector, the hospitality industry, agriculture, construction — these are not abstract economic categories. They are the essential services upon which all of our daily lives depend.

None of this means that immigration policy should not be debated, or that legitimate concerns about infrastructure and public services should be dismissed. But the debate must start from facts, not from the inflammatory headlines and misleading statistics that have poisoned public discourse for far too long. We deserve better than politicians who stoke fear for electoral advantage while quietly relying on immigrant labour to keep the country running.`

const IMMIGRATION_SOURCE_A_REF = 'Priya Chakraborty, "Facts, Fear, and the Immigration Debate", The Independent, 2025'

const IMMIGRATION_SOURCE_B = `The question of immigration is one upon which reasonable men may reasonably differ, but it ought to be discussed with a candour and a respect for evidence which has, I regret to say, been conspicuously absent from the public prints. We are told that the foreigner comes among us to steal our bread, to lower our wages, and to undermine those institutions which centuries of English struggle have established. These charges deserve examination.

It is true that the arrival of foreign workers creates competition for employment, and that this competition may, in certain trades, exert a downward pressure upon wages. This I do not deny. But it is equally true that the immigrant brings with him skills, industry, and a willingness to undertake labour which our own people have shown themselves reluctant to perform. The market gardens of Kent, the textile mills of Lancashire, the building trades of London — all have been enriched, and in some cases sustained, by the enterprise of those who have come to our shores seeking a better life.

Moreover, I would ask those who speak most loudly against the foreigner to consider the character of the men and women they condemn. To leave one's home, one's language, one's family, and to begin again in a strange country, requires a courage and a determination which ought to command respect rather than suspicion. The immigrant is not, as a rule, the idle or the feckless. He is the ambitious, the energetic, the hopeful. A nation which turns away such people impoverishes itself in ways that no ledger can record.`

const IMMIGRATION_SOURCE_B_REF = 'From an address by Sidney Webb to the Fabian Society, 1903'

// ─── Exam Papers ─────────────────────────────────────────────────────────────

export const ocrP1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11 — Sport & Competition
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-11',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-11-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${SPORT_SOURCE_A_REF}\nSource B: ${SPORT_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-11-q1',
            questionNumber: 1,
            questionText: 'Read Source A. Identify four problems the writer describes with the current elite sport system in Britain.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: SPORT_SOURCE_A,
            extractSource: SPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': '1. Thousands of children are discarded from sport programmes. 2. Young athletes suffer psychological damage from being dropped. 3. Funding only goes to sports likely to win medals. 4. Grassroots sports facilities continue to close.',
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-11-q2',
            questionNumber: 2,
            questionText: 'Read Source A. How does the writer use evidence and examples to support her argument that the sport funding model is flawed? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: SPORT_SOURCE_A,
            extractSource: SPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses specific examples like the "eighteen-year-old gymnast who cannot eat without anxiety" and the "swimmer who has not had a single weekend free since she was eleven" to show the human cost. She also uses the date 1997 and the phrase "no compromise" to reference the actual funding model. These examples make her argument more convincing because they show real consequences.',
              'Grade 6-7': 'Okonkwo builds a systematic case by layering different types of evidence. She begins with anecdotal experience — "I have spent twenty years coaching" — to establish authority, then moves to institutional critique with the specific reference to National Lottery funding since 1997. The juxtaposition of "spectacularly successful in terms of Olympic performance" with the decline of grassroots facilities creates a damning contrast. The unnamed athletes — the gymnast, the swimmer — function as representative figures, their anonymity suggesting these are not isolated cases but systemic consequences.',
              'Grade 8-9': 'The writer deploys evidence strategically, moving from the personal to the systemic to create an argument of escalating force. Her twenty years of coaching experience is offered not as mere anecdote but as a foundation of authority from which to critique institutional practice. The specific date of 1997 and the quoted phrase "no compromise" serve a dual function: they lend factual weight while the scare quotes around the funding philosophy subtly reframe institutional language as an indictment. The shift from named policy to unnamed athletes — "the eighteen-year-old gymnast", "the swimmer" — is rhetorically masterful: their anonymity transforms individual suffering into a systemic pattern. The paragraph structure itself mirrors the argument: the optimistic language of sport ("inspiring a generation") is systematically dismantled as each new piece of evidence reveals the gap between rhetoric and reality.',
            },
            markScheme: [
              'Identifies specific evidence and examples used in the text',
              'Explains how the evidence supports the argument',
              'Analyses the effect of the evidence on the reader',
              'Top band: detailed, perceptive analysis of how evidence is deployed strategically',
            ],
          },
          {
            id: 'ocr-p1-11-q3',
            questionNumber: 3,
            questionText: 'Read Source A. How does the writer use language and structure to present her views on elite sport in Britain?\n\nAnalyse the effects of the writer\'s choices.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: SPORT_SOURCE_A,
            extractSource: SPORT_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses strong language like "profoundly dishonest" and "ruthless" to show her disapproval. She structures the article by first talking about how sport is presented positively, then revealing the negative reality. She uses rhetorical questions at the end — "If the answer is simply winning" — to make the reader think about what sport should be for. The list of closed facilities at the end makes the problem seem widespread.',
              'Grade 6-7': 'Okonkwo opens with a direct accusation — "profoundly dishonest" — that immediately positions the reader as complicit in a deception. The language of public relations ("inspiring a generation", "bringing the nation together") is placed in quotation marks, framing official discourse as a veneer concealing exploitation. Structurally, the piece moves from broad critique to specific human examples to policy analysis and finally to a call for honesty, creating an argumentative arc that leaves the reader no room for comfortable neutrality. The tricolon "Grassroots sports facilities continue to close... School playing fields are sold... Community swimming pools operate on skeleton budgets" uses the rule of three to emphasise systemic decline. The conditional structure of the final paragraph — "If the answer is... then let us" — forces readers to confront an uncomfortable binary.',
              'Grade 8-9': 'The writer\'s opening gambit — "There is something profoundly dishonest" — establishes a tone of moral authority that pervades the entire piece. The strategic deployment of official language in quotation marks ("inspiring a generation", "no compromise") functions as a form of rhetorical appropriation: the establishment\'s own words are turned against it, becoming evidence of its hypocrisy. Structurally, the piece enacts the very exposure it argues for: the public-facing narrative of triumph is presented first, then systematically stripped away to reveal the human wreckage beneath. The unnamed athletes are rendered through the language of pathology — "cannot eat without anxiety", "has not had a single weekend free" — reframing sporting achievement as a form of institutional harm. The descending scale of the final paragraph\'s tricolon (from "grassroots sports facilities" to "school playing fields" to "community swimming pools") traces the impact from the general to the local, making the abstract personal. The conditional framing of the conclusion is particularly effective: by presenting two possible purposes for sport and spelling out the implications of each, Okonkwo avoids didacticism while making her preferred conclusion inescapable.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Analyses structural choices and their effects',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and meaning',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-11-q4',
            questionNumber: 4,
            questionText: 'Read both sources. Compare how the two writers convey their different perspectives on the value of sport.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${SPORT_SOURCE_A}\n\nSource B:\n${SPORT_SOURCE_B}`,
            extractSource: `${SPORT_SOURCE_A_REF} / ${SPORT_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers discuss sport but have different views. Source A is critical and says elite sport damages young people, while Source B is positive and says sport teaches valuable life lessons. Source A uses examples of athletes being harmed — "the gymnast who cannot eat without anxiety" — while Source B uses more idealistic language like "discipline, co-operation". Source A focuses on the problems with modern funding, while Source B was written over a century ago and sees sport as improving working-class life. Both writers use persuasive language but Source A is more negative.',
              'Grade 6-7': 'The two writers occupy diametrically opposed positions on sport\'s social function, though their disagreement is partly a product of their different historical moments. Okonkwo writes from within a system she has witnessed first-hand, and her perspective is shaped by disillusionment: the language of "dishonesty" and "ruthlessness" reveals someone whose faith in sport\'s rhetoric has been destroyed by its reality. Lord Kinnaird, by contrast, writes from the optimism of a nascent sporting culture, where organised athletics represent progress from less wholesome pastimes. Their methods reflect these positions: Okonkwo uses specific, unnamed case studies to indict a system, while Kinnaird employs the panoramic view — "thirty thousand working men" — to celebrate collective virtue. Both deploy tricolons, but to opposite effect: Okonkwo\'s lists accumulate damage, while Kinnaird\'s — "discipline, co-operation, and the subordination of individual desire" — accumulate moral benefits.',
              'Grade 8-9': 'These texts present a fascinating dialogue across more than a century about sport\'s capacity to serve or damage those it claims to benefit. Okonkwo writes as an insider-turned-critic whose rhetoric of exposure — "profoundly dishonest", "calculated indifference" — depends on the very idealism that Kinnaird articulates. Without the Victorian faith in sport as moral education, Okonkwo\'s sense of betrayal would have no foundation. Their methods reflect fundamentally different epistemologies: Okonkwo privileges the specific and the individual (the unnamed gymnast, the swimmer) as evidence of systemic failure, while Kinnaird privileges the collective and the general ("thirty thousand working men") as evidence of social progress. Both writers use the conditional — Okonkwo\'s "If the answer is simply winning" and Kinnaird\'s implicit framework of sport as moral alternative — but where Kinnaird\'s conditions have been met (sport has replaced less wholesome pursuits), Okonkwo\'s remain unresolved, leaving the reader in a state of productive discomfort. The writers\' contrasting treatment of class is particularly revealing: Kinnaird views working-class participation in sport paternalistically, as evidence that the masses can be civilised; Okonkwo, by contrast, shows how the system exploits and discards young people from all backgrounds. Their disagreement is ultimately not about sport itself but about power — who benefits from the narratives we construct around it, and who is consumed by them.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-11-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-11-q5',
            questionNumber: 5,
            questionText: '"Competitive sport does more harm than good."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear, purposeful article with: a sustained argument for or against; some persuasive techniques such as rhetorical questions and emotive language; generally accurate spelling and punctuation; appropriate use of paragraphs.',
              'Grade 6-7': 'A well-crafted article with: sophisticated use of rhetorical techniques including counter-argument; appropriate register for a broadsheet audience; a compelling structure that builds to a strong conclusion; consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'An outstanding article with: a compelling and nuanced argument that acknowledges complexity; a distinctive authorial voice appropriate to the broadsheet form; structural sophistication including effective use of topic sentences and paragraph transitions; technical virtuosity with varied sentence forms and precise vocabulary.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose — argue persuasively; Audience — broadsheet readers; Form — article with headline; Structure — coherent argument with introduction, development, conclusion',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12 — Science & Discovery
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-12',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-12-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${SCIENCE_SOURCE_A_REF}\nSource B: ${SCIENCE_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-12-q1',
            questionNumber: 1,
            questionText: 'Read Source A. Identify four potential consequences of gene-editing technology that the writer describes.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: SCIENCE_SOURCE_A,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': '1. Crops that resist drought. 2. Mosquitoes engineered to stop spreading malaria. 3. The elimination of inherited diseases. 4. A society divided by biology as well as wealth.',
            },
            markScheme: ['1 mark per valid consequence identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-12-q2',
            questionNumber: 2,
            questionText: 'Read Source A. How does the writer present a balanced view while still conveying concern about gene-editing technology? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: SCIENCE_SOURCE_A,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer shows balance by listing positive things gene editing can do — "crops that resist drought", "elimination of inherited diseases" — but then says they are "also terrifying". He shares the scientists\' optimism but says he "cannot shake the feeling" that it is dangerous. This makes the reader take his concerns more seriously because he is being fair.',
              'Grade 6-7': 'Whitworth constructs a carefully balanced argument that lends greater weight to his concerns precisely because he acknowledges the technology\'s promise. The opening paragraph\'s list of benefits — drought-resistant crops, malaria prevention, disease elimination — is syntactically enthusiastic, with short declarative sentences building momentum. The single-word paragraph shift to "They are also terrifying" creates a structural volta that reframes everything that came before. The writer repeatedly positions himself as sympathetic to scientific progress — "I share their excitement" — before deploying the adversative conjunction "But" to pivot to his real concern. The extended metaphor of "editing a text we have not yet fully learned to read" captures his anxiety with elegant precision.',
              'Grade 8-9': 'The writer employs a sophisticated rhetorical strategy of concessive argumentation, where each acknowledgement of gene editing\'s potential serves as a platform for deeper concern. The opening paragraph\'s breathless catalogue of benefits — the asyndetic list of "Crops that resist drought. Mosquitoes engineered to stop spreading malaria. The potential elimination of inherited diseases" — mimics the pace of scientific enthusiasm before the devastating pivot: "They are also terrifying." This structural pattern (concession followed by counter-argument) recurs throughout, creating a rhythm that enacts the writer\'s central thesis: that optimism and anxiety are inseparable responses to transformative technology. The series of rhetorical questions in paragraph three — "If we can eliminate genetic predispositions to depression, should we?" — performs balance syntactically while making the questions themselves feel unanswerable. The concluding metaphor of editing an incompletely understood text is masterfully judged: it respects the science while questioning the scientists, using their own language of "code" and "editing" to articulate the limits of their understanding.',
            },
            markScheme: [
              'Identifies how the writer presents both positive and negative perspectives',
              'Explains the effect of balanced presentation on the reader',
              'Analyses specific techniques used to convey concern within a balanced framework',
              'Top band: perceptive analysis of how balance itself becomes a persuasive strategy',
            ],
          },
          {
            id: 'ocr-p1-12-q3',
            questionNumber: 3,
            questionText: 'Read Source A. How does the writer use language and structure to engage the reader on the topic of gene-editing technology?\n\nAnalyse the effects of the writer\'s choices.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: SCIENCE_SOURCE_A,
            extractSource: SCIENCE_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses dramatic language like "greatest revolution" and "terrifying" to grab the reader\'s attention. The structure moves from positive to negative to make the reader reconsider. Rhetorical questions in paragraph three engage the reader directly. The final metaphor about "editing a text" is memorable and makes the idea easier to understand.',
              'Grade 6-7': 'Whitworth opens with a bold claim — "the greatest revolution in biological science since Darwin" — that immediately establishes the stakes, while the counterpoint "almost nobody is paying attention" creates urgency and positions the reader as potentially complicit in dangerous indifference. The structure follows a carefully managed emotional trajectory: wonder, alarm, philosophical questioning, and finally ambivalent resolution. The shift from the impersonal third paragraph (rhetorical questions about society) to the personal final paragraph ("I share their excitement... I cannot shake the feeling") creates intimacy, drawing the reader into the writer\'s own uncertainty. The extended metaphor of genetic "code" as "text" bridges the scientific and the literary, making complex biotechnology accessible through humanistic analogy.',
              'Grade 8-9': 'The writer\'s opening claim positions gene editing within a Darwinian framework that simultaneously elevates and threatens: if this is a revolution on the scale of evolution itself, the implications are both thrilling and terrifying. The accusation that "almost nobody is paying attention" creates an immediate contract with the reader — you are now paying attention, and therefore implicated in what follows. Structurally, the piece traces an epistemological journey from certainty to doubt: the confident declaratives of paragraph one ("The possibilities are extraordinary") give way to the interrogatives of paragraph three, and finally to the hedged, subordinate-clause-heavy syntax of the conclusion ("I cannot shake the feeling that we are editing a text we have not yet fully learned to read"). This syntactic deceleration enacts the very caution the writer advocates. The rhetorical questions function not as devices seeking agreement but as genuine philosophical provocations — "Who decides which traits are \'defects\'?" — that expose the value judgements embedded in supposedly neutral scientific language. The concluding metaphor operates on multiple levels: "editing a text" invokes both the CRISPR mechanism and the humanistic tradition of textual interpretation, suggesting that genetic science requires not just technical skill but hermeneutic wisdom.',
            },
            markScheme: [
              'Analyses specific language choices and their effects on the reader',
              'Analyses structural choices and their effects',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and the writer\'s purpose',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-12-q4',
            questionNumber: 4,
            questionText: 'Read both sources. Compare how the two writers convey their different perspectives on scientific progress.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${SCIENCE_SOURCE_A}\n\nSource B:\n${SCIENCE_SOURCE_B}`,
            extractSource: `${SCIENCE_SOURCE_A_REF} / ${SCIENCE_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are concerned about science going too far. Source A focuses on gene editing and worries about a divided society, while Source B talks about science more generally and worries about knowledge being misused. Source A uses modern examples like CRISPR, while Source B uses more old-fashioned examples like explosives. Both use persuasive language, but Source A is more balanced whereas Source B seems more cautious overall.',
              'Grade 6-7': 'Both writers share a fundamental anxiety about the gap between scientific capability and human wisdom, but their temporal positions produce fascinatingly different articulations of this concern. Whitworth writes from within the crisis — gene editing is here, and the decisions are urgent — while Huxley writes from the broader perspective of a Victorian witnessing the acceleration of industrial science. Their methods reflect these positions: Whitworth uses specific, contemporary examples (CRISPR, the Chinese research team) to create immediacy, while Huxley uses hypothetical scenarios (the chemist, the physician) to construct universal principles. Both employ the concessive structure of acknowledging wonder before expressing concern, but where Whitworth\'s "But" signals personal anxiety, Huxley\'s "Yet" introduces philosophical conviction. The shared metaphor of reading/understanding — Whitworth\'s "text we have not yet fully learned to read" and Huxley\'s implicit suggestion that knowledge requires wisdom to interpret — reveals a remarkably consistent intellectual tradition spanning nearly 150 years.',
              'Grade 8-9': 'These texts, separated by almost a century and a half, enact a dialogue about whether human wisdom can ever keep pace with human ingenuity — and the persistence of the question is itself the most powerful argument that it cannot. Whitworth and Huxley occupy similar philosophical positions but express them through radically different rhetorical means shaped by their respective contexts. Whitworth\'s anxiety is specific and urgent: he names technologies, dates, and research teams, grounding his argument in the particular because the threat is no longer hypothetical. Huxley, writing when science\'s destructive potential was largely theoretical, constructs his argument through elegant generalisations and hypothetical scenarios — "The chemist who discovers a new explosive may intend it for the quarry" — that derive their power from timeless moral reasoning rather than contemporary evidence. The most revealing comparison is in their conclusions. Whitworth\'s final metaphor — "editing a text we have not yet fully learned to read" — expresses hope that understanding might catch up with capability; the text can, presumably, be learned. Huxley\'s devastating final sentence — "Knowledge is neutral. Human nature is not" — offers no such comfort, locating the danger not in the limits of understanding but in the permanence of human fallibility. Both writers use the rhythms of academic discourse (measured syntax, balanced clauses, concessive structures) to perform the very rationality they fear may be insufficient, creating a profound irony that enriches both texts.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-12-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-12-q5',
            questionNumber: 5,
            questionText: '"Scientific progress should never be limited by fear."\n\nWrite a speech to be delivered at a school debate in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: a sustained argument; some rhetorical techniques such as direct address and repetition; generally accurate spelling and punctuation; appropriate use of paragraphs.',
              'Grade 6-7': 'A well-crafted speech with: effective use of rhetorical devices including anaphora and counter-argument; appropriate register for a debate; a compelling structure that builds to a persuasive conclusion; consistent technical accuracy with varied sentence forms.',
              'Grade 8-9': 'An outstanding speech with: a nuanced argument that engages with complexity; a distinctive and authoritative voice; structural sophistication that mirrors the rhythms of spoken rhetoric; technical virtuosity with ambitious vocabulary and varied syntax.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose — argue persuasively; Audience — school debate; Form — speech with appropriate conventions; Structure — coherent argument with clear progression',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13 — Housing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-13',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-13-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${HOUSING_SOURCE_A_REF}\nSource B: ${HOUSING_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-13-q1',
            questionNumber: 1,
            questionText: 'Read Source A. Identify four effects of the housing crisis that the writer describes.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: HOUSING_SOURCE_A,
            extractSource: HOUSING_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': '1. Families are forced to move frequently — the writer moved seven times before eighteen. 2. Local authority housing stock has declined by over two million homes. 3. Young people are locked out of home ownership. 4. Over a million children are living in unsuitable housing with health consequences.',
            },
            markScheme: ['1 mark per valid effect identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-13-q2',
            questionNumber: 2,
            questionText: 'Read Source A. How does the writer use personal experience to strengthen her argument about the housing crisis? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: HOUSING_SOURCE_A,
            extractSource: HOUSING_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer starts by telling us about her childhood, moving seven times before she was eighteen. This makes the reader feel sympathy for her. She includes her mother saying "Think of it as a fresh start" which shows how the family tried to cope. She says she "learned not to make close friends" which shows how it affected her socially. This personal experience makes the statistics later feel more real.',
              'Grade 6-7': 'Patel deploys personal narrative as a rhetorical framing device, opening with the specific detail of "seven times before my eighteenth birthday" to transform an abstract policy issue into lived experience. The mother\'s dialogue — "Think of it as a fresh start" — is devastating in its quiet irony: the reader understands the desperate optimism behind the words even as the writer exposes their futility through the accompanying image of "taping shut a box of kitchen things". The structural choice to move from personal anecdote to national statistics ("two million homes", "60%") creates a powerful inductive argument: if this is one family\'s experience, the data shows it is millions of families\' experiences. The understatement of "I learned not to make close friends" is more emotionally effective than any overt expression of pain.',
              'Grade 8-9': 'The writer\'s personal narrative operates on multiple rhetorical levels simultaneously. At the surface level, the childhood experience of frequent moves creates pathos and establishes experiential authority. But the opening paragraph is also carefully constructed to pre-empt dismissal: the parenthetical explanation "Not because my parents were restless or adventurous" addresses the implied counter-argument that housing instability is a lifestyle choice. The mother\'s direct speech — "Think of it as a fresh start" — functions as a microcosm of the broader rhetorical pattern: the official narrative (positive spin) is juxtaposed with material reality (taping boxes). The devastating restraint of "I learned not to make close friends with the neighbours" achieves more than any explicit statement of suffering could, enlisting the reader\'s imagination to fill in the emotional weight. Structurally, the transition from personal to political — from childhood memory to Right to Buy statistics — enacts the argument\'s central thesis: that housing policy is not an abstraction but the accumulated weight of millions of individual experiences of displacement and insecurity.',
            },
            markScheme: [
              'Identifies how personal experience is used in the text',
              'Explains the effect of personal narrative on the reader',
              'Analyses how personal experience interacts with other forms of evidence',
              'Top band: perceptive analysis of the strategic function of personal narrative within the broader argument',
            ],
          },
          {
            id: 'ocr-p1-13-q3',
            questionNumber: 3,
            questionText: 'Read Source A. How does the writer use language and structure to argue that housing should be treated as a fundamental right?\n\nAnalyse the effects of the writer\'s choices.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: HOUSING_SOURCE_A,
            extractSource: HOUSING_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses emotive language like "condemned" and "locked out" to make the reader feel the unfairness. She includes statistics such as "60%" and "a million children" to make her argument convincing. The structure moves from personal experience to facts to a strong conclusion. The final sentence — "Until we treat it as a right rather than a commodity, nothing will change" — is short and powerful.',
              'Grade 6-7': 'Patel constructs her argument through a carefully escalating structure that moves from the personal to the statistical to the philosophical. The language of the opening paragraph is deliberately understated — "that is what happens when you rent" — using the flat declarative to normalise suffering in a way that makes it more shocking. The second paragraph shifts register dramatically, deploying the language of political critique: "not a natural disaster" but "a political choice" establishes a binary that assigns blame. The statistics are deployed not as neutral data but as accusations, with the temporal markers ("since 1980", "in the last decade") implying deliberate political failure. The sardonic reference to "coffee and avocados" acknowledges and dismantles a common dismissal. The concluding paragraph\'s distinction between "right" and "commodity" crystallises the entire argument into a single opposition, and the list of what housing enables — "education, health, employment, family life" — positions housing as foundational rather than additional.',
              'Grade 8-9': 'The writer\'s rhetorical strategy is one of controlled escalation, with each paragraph raising the stakes while tightening the argument\'s logical grip. The opening\'s deceptively simple narrative voice — the repeated "each time, the same" rhythm — creates a structural mimicry of the very cycle it describes. The shift in paragraph two to politicised discourse is signalled by the emphatic negation "is not a natural disaster" — a construction that implies the housing crisis has been naturalised in public consciousness and must be actively denaturalised. The parenthetical "my generation" performs an interesting rhetorical manoeuvre: it simultaneously personalises the systemic and collectivises the personal, refusing to let the reader maintain comfortable distance. The language choices in paragraph three escalate from economic deprivation to human consequence: "respiratory illness", "struggle at school", "mental health problems" — a descending scale from body to mind to spirit that mirrors housing\'s corrosive effect on whole lives. The final paragraph\'s chiastic structure — housing as "foundation" rather than "commodity", "right" rather than luxury — resolves the entire argument into an elegant philosophical proposition. The concluding sentence\'s use of "Until... nothing will change" creates a temporal ultimatum that positions the reader as either part of the solution or complicit in its absence.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Analyses structural choices and their effects on the reader',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and argument',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-13-q4',
            questionNumber: 4,
            questionText: 'Read both sources. Compare how the two writers convey their different perspectives on the housing crisis.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${HOUSING_SOURCE_A}\n\nSource B:\n${HOUSING_SOURCE_B}`,
            extractSource: `${HOUSING_SOURCE_A_REF} / ${HOUSING_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that housing conditions are unacceptable and need to change. Source A focuses on modern problems like high rents and lack of social housing, while Source B describes Victorian slum conditions. Source A uses personal experience and statistics, while Source B uses descriptions of what the writer saw in Manchester and Liverpool. Both writers are angry, but Source A blames government policy while Source B appeals to Parliament to take action. Both end with strong conclusions demanding change.',
              'Grade 6-7': 'Patel and Shaftesbury share a fundamental conviction that housing conditions represent a moral failure of the societies they address, but their rhetorical positions differ significantly. Patel writes as an affected individual whose personal authority comes from lived experience — "I moved seven times" — while Shaftesbury writes as a privileged observer whose authority derives from his social position and his willingness to witness conditions beneath his station. Their methods reflect these positions: Patel\'s argument is inductive, moving from personal experience to systemic critique, while Shaftesbury\'s is empirical, cataloguing conditions city by city with the precision of a social investigator. Both deploy shame as a rhetorical weapon — Patel through the exposure of political hypocrisy, Shaftesbury through direct address to Parliament ("ought to make every member assembled here ashamed") — but where Patel\'s shame is directed at policy, Shaftesbury\'s is directed at civilisation itself. The most striking parallel is their shared insistence on visibility: both writers argue that housing deprivation persists partly because it is hidden from those with the power to change it.',
              'Grade 8-9': 'The persistence of housing injustice across nearly 150 years gives these texts a devastating dialogic resonance: Shaftesbury\'s Victorian slums and Patel\'s modern rental insecurity speak to a structural failure that transcends historical period. Both writers employ the rhetoric of exposure — making the invisible visible — but their relationships to their subjects differ profoundly. Patel writes from within the crisis, her personal narrative simultaneously establishing authority and performing vulnerability; Shaftesbury ventures into the crisis as an investigator, his authority deriving from the social distance he has crossed. This difference shapes their respective languages: Patel\'s understatement ("I learned not to make close friends") derives its power from what it withholds, while Shaftesbury\'s detailed description ("walls ran with damp", "neither privacy nor ventilation") derives its power from what it reveals. Both writers weaponise statistics, but to different effects: Patel\'s data indicts specific political decisions (Right to Buy, 1980), while Shaftesbury\'s comparative mortality rates indict an entire civilisation by measuring it against Calcutta. The most revealing methodological comparison is in their treatment of agency: Patel explicitly names housing as "a political choice" rather than a natural disaster, assigning clear responsibility; Shaftesbury, constrained by his parliamentary audience, uses the passive voice and impersonal constructions that imply systemic failure while stopping short of direct accusation. Both conclude with economic arguments — Patel\'s list of what housing enables, Shaftesbury\'s accounting of costs "already being paid" — recognising that moral arguments, however powerful, require practical reinforcement.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-13-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-13-q5',
            questionNumber: 5,
            questionText: '"Everyone has the right to a safe and affordable home."\n\nWrite a letter to your local MP in which you argue that more needs to be done to address the housing crisis.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear letter with: appropriate formal register; a sustained argument with some supporting evidence; some persuasive techniques; generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7': 'A well-crafted letter with: consistently appropriate formal register; sophisticated rhetorical techniques including counter-argument; effective use of evidence and examples; a compelling structure that balances passion with reason; consistent technical accuracy.',
              'Grade 8-9': 'An outstanding letter with: a commanding and authoritative voice; a nuanced argument that anticipates and addresses objections; strategic deployment of evidence, personal experience, and rhetorical technique; structural sophistication; technical virtuosity with ambitious vocabulary and varied syntax.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose — argue persuasively; Audience — MP (formal); Form — letter with appropriate conventions; Structure — coherent argument with clear demands',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14 — Arts & Culture
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-14',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-14-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${ARTS_SOURCE_A_REF}\nSource B: ${ARTS_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-14-q1',
            questionNumber: 1,
            questionText: 'Read Source A. Identify four reasons the writer gives for why the arts should be funded and valued.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: ARTS_SOURCE_A,
            extractSource: ARTS_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': '1. The creative industries contribute over £115 billion annually to the UK economy. 2. For every pound invested, five pounds is generated in return. 3. The arts make us human and give us a shared language for experiences. 4. The arts can transform lives — the writer says the library "saved my life".',
            },
            markScheme: ['1 mark per valid reason identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-14-q2',
            questionNumber: 2,
            questionText: 'Read Source A. How does the writer use both economic and personal arguments to defend arts funding? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: ARTS_SOURCE_A,
            extractSource: ARTS_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses statistics like "£115 billion" and "five pounds" return for every pound to make an economic argument. He then says the economic argument "misses the deeper point" and talks about how the library on his council estate "saved my life". This combination of facts and personal experience makes the argument convincing because it appeals to both logic and emotion.',
              'Grade 6-7': 'Oyelaran constructs a deliberately layered argument that deploys economic evidence strategically before transcending it. The statistics — "£115 billion annually", "more than the automotive, aerospace, and life sciences sectors combined" — are chosen not merely for their factual weight but for their capacity to reframe the debate: comparing arts revenue to traditionally "serious" industries challenges the assumption that culture is economically trivial. The simile "like burning your furniture to save on heating bills" translates economic argument into vivid domestic imagery. However, the pivotal sentence "the economic argument, powerful as it is, misses the deeper point" performs a crucial structural turn: having won the pragmatic argument, the writer explicitly sets it aside as insufficient. The personal narrative that follows — growing up on a council estate, the transformative library — gains additional rhetorical force because it arrives after economic rationality has been established and found wanting. The claim that the library "saved my life — not metaphorically, but literally" inverts the expected cliché, demanding the reader take the statement at face value.',
              'Grade 8-9': 'The writer\'s dual-track argument is architecturally sophisticated: the economic case is constructed first as a concession to pragmatism before being deliberately superseded by the existential case, creating a rhetorical hierarchy where material value is acknowledged but subordinated to human value. The economic evidence is deployed with forensic precision — the specific figure of £115 billion, the comparative framing against automotive and aerospace sectors, the five-to-one return ratio — but each statistic is immediately contextualised through accessible analogy (the furniture-burning simile) that prevents the argument from becoming abstract. The transitional sentence "the economic argument, powerful as it is, misses the deeper point" is a masterpiece of concessive rhetoric: the parenthetical acknowledgement of power simultaneously validates and diminishes the economic case, clearing space for the personal narrative that follows. The council estate childhood functions as both testimony and reproach — "Every child deserves that discovery" universalises a specific experience while the final sentence\'s juxtaposition of "spreadsheet" and "imagination" crystallises the entire argument into a single opposition between instrumental and intrinsic value. The careful escalation from statistics to philosophy to autobiography creates an argument that is simultaneously irrefutable at every level: economically sound, philosophically compelling, and personally undeniable.',
            },
            markScheme: [
              'Identifies both economic and personal arguments in the text',
              'Explains how each type of argument affects the reader',
              'Analyses the relationship between the two types of argument',
              'Top band: perceptive analysis of how the layered argument creates cumulative persuasive force',
            ],
          },
          {
            id: 'ocr-p1-14-q3',
            questionNumber: 3,
            questionText: 'Read Source A. How does the writer use language and structure to persuade the reader that arts funding cuts are wrong?\n\nAnalyse the effects of the writer\'s choices.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: ARTS_SOURCE_A,
            extractSource: ARTS_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer starts by describing the government\'s funding cuts and the public\'s silence, which creates a sense of urgency. He uses strong language like "economically illiterate" and "merely a collection of individuals" to show his disapproval. The structure builds from the problem to the economic argument to the personal story. The ending is powerful because it comes from his own life experience.',
              'Grade 6-7': 'Oyelaran opens by juxtaposing the cultural sector\'s outrage with the public\'s silence, and it is the silence that carries the greater rhetorical weight — indifference is presented as more damaging than hostility. The phrase "economically illiterate" is strategically provocative, turning the accusation of impracticality back on those who make it. The furniture-burning simile is both accessible and devastating, reducing the government\'s position to absurdity through domestic analogy. Structurally, the piece\'s movement from public response to economic data to philosophical argument to personal narrative creates an ascending scale of persuasive intimacy, drawing the reader progressively closer. The negative definition in paragraph three — "A society without music, without theatre, without literature" — uses anaphoric repetition to create a cumulative sense of deprivation. The final paragraph\'s shift to first person ("I grew up") introduces vulnerability into what has been a confident, assertive voice, making the conclusion both unexpected and deeply affecting.',
              'Grade 8-9': 'The writer\'s rhetorical architecture is built on a principle of progressive revelation: each paragraph strips away a layer of assumption to expose a deeper truth. The opening\'s focus on silence rather than protest is a sophisticated gambit — by making public indifference the primary problem, Oyelaran positions his entire article as an act of resistance against that silence. The language escalates through carefully chosen registers: the economic vocabulary of paragraph two ("contribute", "generate", "invest") gives way to the philosophical vocabulary of paragraph three ("human", "shared language", "incommunicable") and finally to the intimate vocabulary of paragraph four ("council estate", "saved my life", "four streets"). This register shift enacts the very argument being made: that economic language is necessary but insufficient, that human experience exceeds quantification. The simile of burning furniture performs double duty: it ridicules the government\'s position while also, through its domestic setting, anticipating the personal narrative to come. The anaphoric negation of paragraph three — "without music, without theatre, without literature, without the visual arts" — creates a rhetorical void that the reader is compelled to fill with their own valued cultural experiences, making the argument personal even before the autobiographical turn. The qualification "not metaphorically, but literally" is structurally crucial: by refusing the expected figurative reading, the writer demands that the reader confront arts access as a matter of life and death, elevating the stakes to their highest possible level.',
            },
            markScheme: [
              'Analyses specific language choices and their persuasive effects',
              'Analyses structural choices and their contribution to the argument',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and persuasive purpose',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-14-q4',
            questionNumber: 4,
            questionText: 'Read both sources. Compare how the two writers convey their different perspectives on the value of the arts.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${ARTS_SOURCE_A}\n\nSource B:\n${ARTS_SOURCE_B}`,
            extractSource: `${ARTS_SOURCE_A_REF} / ${ARTS_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers believe the arts are essential, but they argue this in different ways. Source A uses economic statistics and personal experience, while Source B uses more philosophical and poetic language. Source A is responding to specific government cuts, making it more urgent, while Source B makes a timeless argument about art teaching us to see. Both use lists to build their arguments. Source A is more practical and modern while Source B is more idealistic.',
              'Grade 6-7': 'Both writers defend the arts against utilitarian dismissal, but their defensive strategies are shaped by their historical moments. Oyelaran must contend with a contemporary discourse that values arts only instrumentally — hence his strategic deployment of economic data before transcending it. Ruskin, writing in the Victorian era, confronts the same philistinism but from a position of greater cultural authority: his rhetorical question about sunsets assumes the reader shares his aesthetic sensibility in a way that Oyelaran cannot. Their methods differ accordingly: Oyelaran builds from evidence to principle, while Ruskin begins with principle and condescends to evidence ("Yet since the question is put"). The shared conviction that art is fundamentally about perception — Oyelaran\'s "shared language for experiences" and Ruskin\'s "teaches us to see" — suggests a continuous tradition of aesthetic thought. However, Oyelaran\'s personal narrative from a council estate democratises access to this tradition in a way that Ruskin, for all his eloquence, never quite achieves.',
              'Grade 8-9': 'These texts represent two historically distant but philosophically aligned defences of art against the persistent demand that it justify itself in practical terms. The comparison reveals how the terms of this defence have shifted while its core conviction remains unchanged. Oyelaran and Ruskin both argue that art\'s value transcends utility, but their rhetorical positions are fundamentally different: Oyelaran must first concede the economic argument ("£115 billion") before claiming the higher ground, while Ruskin can dismiss the question itself with magnificent disdain ("One might as well ask what is the use of a sunset"). This difference reflects a broader cultural shift: in Ruskin\'s era, aesthetic value could be asserted as self-evident; in Oyelaran\'s, it must be earned through pragmatic credentials. Their methods of persuasion reflect these positions: Oyelaran accumulates evidence inductively, building from statistics through philosophy to personal testimony; Ruskin argues deductively, from aesthetic principle to specific artistic practice to social consequence. The most revealing comparison is in their conclusions. Oyelaran ends with a specific child on a specific estate, personalising the argument to its most intimate scale. Ruskin ends with civilisation itself, warning of "barbarism" — a word that carries the full weight of Victorian imperial anxiety. Both endings function as threats: Oyelaran threatens the loss of individual potential, Ruskin the collapse of civilised society. Together, they frame the stakes at every scale from personal to civilisational.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-14-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-14-q5',
            questionNumber: 5,
            questionText: '"Arts subjects in schools are just as important as science and maths."\n\nWrite an article for your school magazine in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear article with: an appropriate tone for a school magazine audience; a sustained argument; some persuasive techniques; generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted article with: a confident and engaging voice appropriate for the school audience; sophisticated rhetorical techniques; effective use of specific examples; consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'An outstanding article with: a distinctive and compelling voice; a nuanced argument that avoids simplistic binary opposition; structural sophistication including a memorable opening and conclusion; technical virtuosity with precise vocabulary and varied syntax.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose — argue persuasively; Audience — school community; Form — magazine article; Structure — coherent argument with engaging introduction and strong conclusion',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15 — Immigration
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-15',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-15-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${IMMIGRATION_SOURCE_A_REF}\nSource B: ${IMMIGRATION_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-15-q1',
            questionNumber: 1,
            questionText: 'Read Source A. Identify four points the writer makes about the contribution of immigrants to British society.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: IMMIGRATION_SOURCE_A,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': '1. Her father runs a small engineering firm employing fourteen people. 2. Her mother has worked as a ward sister at a hospital for two decades. 3. Immigrants are younger on average and contribute more in taxes. 4. The NHS would collapse without immigrant workers.',
            },
            markScheme: ['1 mark per valid point identified from the text, maximum 4 marks'],
          },
          {
            id: 'ocr-p1-15-q2',
            questionNumber: 2,
            questionText: 'Read Source A. How does the writer challenge common misconceptions about immigration? Use evidence from the text in your answer.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: IMMIGRATION_SOURCE_A,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer challenges the idea that immigration is "out of control" by putting it in quotation marks to show she disagrees. She says most immigrants come to work, study, or join family. She uses her own family as an example — her father runs a business and her mother is a nurse. She also says immigrants pay more taxes than they use in services, which goes against the idea that they are a burden.',
              'Grade 6-7': 'Chakraborty employs a multi-layered strategy of refutation. She begins with personal testimony — her family\'s trajectory from "two suitcases, three hundred pounds" to professional success — which functions as a living counter-example to anti-immigration narratives. The quotation marks around "out of control" perform a critical distancing, marking the phrase as someone else\'s language that does not survive scrutiny. She then deploys factual rebuttal — immigrants are younger, contribute more in taxes — before naming specific sectors (NHS, care, hospitality, agriculture, construction) to demonstrate that immigration is not abstract but structurally essential. The parenthetical aside "the idea that a human being\'s right to live in safety and dignity depends on their productivity is morally grotesque" challenges not just misconceptions about immigration but the entire framework within which the debate is conducted, refusing to let economic contribution become the sole measure of human worth.',
              'Grade 8-9': 'The writer\'s strategy of challenge operates simultaneously on empirical, rhetorical, and moral levels. Her opening family narrative — the precise detail of "two suitcases, three hundred pounds" — counters anti-immigration sentiment not through argument but through embodied evidence: the reader is confronted with a specific family whose contributions are beyond dispute. The subsequent disclaimer — "I mention this not because I believe immigrants should have to justify their existence through economic contribution" — is a sophisticated pre-emptive strike that challenges the very terms of the debate. By naming the economic justification framework as "morally grotesque" even while deploying it, Chakraborty exposes the double bind immigrants face: damned if they do not contribute, reduced to economic units if they do. The scare-quoted "out of control" is surgically dismantled by the measured, factual sentences that follow — a structural contrast between hysteria and evidence that performs the rationality the writer advocates. The naming of essential sectors — "The NHS would collapse within weeks" — transforms immigrants from a statistical abstraction into the invisible infrastructure of daily life. The final paragraph\'s concessive structure ("None of this means...") pre-empts the accusation of naivety while redirecting responsibility: it is not immigration that is the problem but "inflammatory headlines and misleading statistics", shifting blame from immigrants to those who weaponise discourse about them.',
            },
            markScheme: [
              'Identifies specific misconceptions the writer challenges',
              'Explains how the writer uses evidence and rhetoric to challenge them',
              'Analyses the effectiveness of the writer\'s methods of challenge',
              'Top band: perceptive analysis of how the writer challenges both specific claims and the broader framework of debate',
            ],
          },
          {
            id: 'ocr-p1-15-q3',
            questionNumber: 3,
            questionText: 'Read Source A. How does the writer use language and structure to present her argument about immigration in Britain?\n\nAnalyse the effects of the writer\'s choices.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: IMMIGRATION_SOURCE_A,
            extractSource: IMMIGRATION_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer structures her argument by starting with her family\'s story, then moving to facts and statistics, and ending with a call for better debate. She uses emotive language like "morally grotesque" and "poisoned public discourse" to show her strong feelings. The list of sectors that depend on immigrants — "The NHS, the care sector, the hospitality industry" — makes the argument convincing. The short final sentence is powerful and memorable.',
              'Grade 6-7': 'Chakraborty opens with a carefully constructed family narrative whose details are precisely chosen: "two suitcases, three hundred pounds" conveys vulnerability, while the subsequent professional achievements (engineering firm, ward sister, solicitor, teacher) trace an arc of contribution. The structural shift from personal to political is managed through the pivotal disclaimer about economic justification — a sentence that simultaneously deploys and critiques the metrics-based framework. The language becomes increasingly combative as the piece progresses: "calculated indifference" gives way to "inflammatory headlines and misleading statistics" and finally "politicians who stoke fear for electoral advantage". This escalation mirrors the writer\'s movement from defence to attack. The penultimate paragraph\'s list of essential sectors is punctuated by the crucial clarification "these are not abstract economic categories" — a moment where the writer breaks through her own rhetorical framework to insist on the human reality beneath the data. The final sentence\'s balancing of "facts" against "fear" creates a moral binary that positions the reader as choosing between reason and prejudice.',
              'Grade 8-9': 'The writer\'s rhetorical architecture is constructed with forensic precision, each paragraph performing a distinct argumentative function while contributing to a cumulative effect of irrefutable logic infused with moral passion. The opening paragraph\'s inventory of family achievements — "two suitcases, three hundred pounds... engineering firm... ward sister... solicitor... teacher" — enacts the immigrant narrative of progress through a series of ascending declaratives whose very simplicity refuses to be contradicted. The parenthetical "between us, we have paid more in taxes than I care to calculate" is beautifully judged: the tone of exhausted reluctance transforms what could be defensive self-justification into a quiet reproach. The structural masterwork is the second paragraph\'s first sentence: "Net migration is not \'out of control\'" — a flat declarative that performs the rationality it advocates, stripping the scare-quoted phrase of its emotional power through calm negation. The listing technique in "The NHS would collapse within weeks without immigrant workers. The care sector, the hospitality industry, agriculture, construction" creates a cascading effect where each named sector adds another load-bearing pillar to the argument, making the removal of any one unthinkable. The concluding paragraph\'s concessive opening ("None of this means that immigration policy should not be debated") performs a crucial act of rhetorical generosity that strengthens rather than weakens the writer\'s position: by granting legitimacy to debate, she claims the reasonable ground and cedes extremism to her opponents. The final image — "politicians who stoke fear for electoral advantage while quietly relying on immigrant labour to keep the country running" — delivers the essay\'s most devastating irony: the hypocrisy of those who publicly condemn what they privately require.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Analyses structural choices and their effects on the reader',
              'Uses well-chosen textual references to support analysis',
              'Explores the relationship between language, structure, and argument',
              'Top band: perceptive, detailed analysis showing conceptualised understanding',
            ],
          },
          {
            id: 'ocr-p1-15-q4',
            questionNumber: 4,
            questionText: 'Read both sources. Compare how the two writers convey their different perspectives on immigration.\n\nIn your answer, you should:\n• compare their different perspectives and attitudes\n• compare the methods they use to convey those perspectives\n• support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${IMMIGRATION_SOURCE_A}\n\nSource B:\n${IMMIGRATION_SOURCE_B}`,
            extractSource: `${IMMIGRATION_SOURCE_A_REF} / ${IMMIGRATION_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are broadly in favour of immigration and argue against those who oppose it. Source A uses personal experience and modern statistics, while Source B uses more general observations and formal language. Source A is written by someone who is herself from an immigrant family, which gives her a personal perspective, while Source B is written by a politician addressing a society. Both challenge negative views — Source A says immigration is not "out of control" and Source B says immigrants are "ambitious" and "energetic" rather than lazy. Both end by arguing that rejecting immigrants harms the country.',
              'Grade 6-7': 'Both Chakraborty and Webb defend immigration against hostile public sentiment, but their rhetorical positions are shaped by profoundly different relationships to the subject. Chakraborty writes as a second-generation immigrant whose personal stake is inseparable from her argument — her family\'s story is both evidence and identity. Webb writes as a sympathetic outsider whose advocacy derives from intellectual conviction rather than personal experience. Their methods reflect these positions: Chakraborty\'s argument moves from the personal to the systemic, grounding abstract claims in lived reality; Webb\'s argument is entirely analytical, building from concession ("It is true that... competition may... exert a downward pressure") to counter-argument through logical reasoning. Both writers challenge dehumanising stereotypes, but through different means: Chakraborty names specific professions (engineer, nurse, solicitor, teacher) to individualise immigrants; Webb characterises them collectively through moral qualities ("courage", "determination", "ambitious", "energetic") that demand respect. The most significant shared technique is their strategic use of concession — both acknowledge legitimate concerns before reframing the debate — but where Chakraborty concedes in her final paragraph as a gesture of magnanimity, Webb concedes at the outset as a gesture of fairness.',
              'Grade 8-9': 'These texts illuminate how the rhetoric of immigration advocacy has evolved over more than a century while retaining certain persistent structural features. Both writers defend immigration through a combination of economic pragmatism and moral argument, but their relative weightings reveal their historical positions. Webb, writing in 1903, can rely on moral sentiment — "a courage and a determination which ought to command respect" — because the Edwardian audience he addresses still responds to appeals to character; Chakraborty, writing in a post-truth media landscape, must lead with data and specific evidence because sentiment alone has been compromised by the very "inflammatory headlines" she denounces. The writers\' relationships to their subjects produce fascinatingly different rhetorical textures. Chakraborty\'s first-person narrative creates an intimacy that Webb\'s third-person analysis cannot match, but Webb\'s external perspective allows a panoramic vision — "the market gardens of Kent, the textile mills of Lancashire, the building trades of London" — that maps immigration onto the physical geography of the nation. Both deploy what might be called "the rhetoric of inversion": Chakraborty inverts the burden of proof ("the idea that a human being\'s right to live... depends on their productivity is morally grotesque"), while Webb inverts the accusation of social threat ("A nation which turns away such people impoverishes itself"). In both cases, the threat is redirected from the immigrant to the host society that rejects them. The most revealing formal comparison is in their conclusions: Chakraborty ends with an accusation of political hypocrisy that assumes bad faith among those in power; Webb ends with a statement about national character that assumes good faith can be persuaded. This difference measures the distance between Victorian optimism about public discourse and contemporary cynicism about it — and in that gap lies much of the story of political communication in the intervening century.',
            },
            markScheme: [
              'Compares perspectives and attitudes from both sources',
              'Compares methods used by both writers',
              'Uses well-chosen references from both texts',
              'Analyses how context shapes different perspectives',
              'Top band: perceptive, detailed comparison with conceptualised understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-15-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section, including planning time.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-15-q5',
            questionNumber: 5,
            questionText: '"Immigration has been overwhelmingly positive for Britain."\n\nWrite a speech for a public debate in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear speech with: a sustained argument for or against; some rhetorical techniques such as direct address and repetition; generally accurate spelling and punctuation; appropriate paragraphing.',
              'Grade 6-7': 'A well-crafted speech with: sophisticated use of rhetorical devices including anaphora, tricolon, and counter-argument; appropriate register for a public debate; effective use of evidence and examples; consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'An outstanding speech with: a compelling and nuanced argument that engages with complexity and avoids caricature; a distinctive and authoritative voice; structural sophistication that builds to a powerful peroration; technical virtuosity with varied sentence forms, precise vocabulary, and controlled rhythm.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose — argue persuasively; Audience — public debate; Form — speech with appropriate conventions; Structure — coherent argument with compelling opening and conclusion',
              'Technical Accuracy (8 marks): Sentence demarcation; Standard English; Spelling; Punctuation; Range of sentence forms and vocabulary',
            ],
          },
        ],
      },
    ],
  },
]
