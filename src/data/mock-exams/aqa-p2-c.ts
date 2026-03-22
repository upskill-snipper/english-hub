import type { MockExamPaper } from '../mock-exams'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Exam 11: Justice & Prison
const EXAM11_SOURCE_A = `There is something profoundly wrong with a society that locks away its most vulnerable citizens and calls it justice. I spent three months visiting prisons across England and Wales, speaking to inmates, guards, and governors, and what I found was not a system designed to rehabilitate but a system designed to warehouse. Men and women are crammed into cells built for one but housing two or three, with a plastic curtain separating the toilet from the bed, eating meals on their laps because there is no table, and marking off days on walls because time has become the only currency they possess.

The numbers tell their own story. Reoffending rates in the UK stand at 48% within twelve months of release. Among those serving sentences of less than a year, the figure rises to 64%. We are spending forty-seven thousand pounds per prisoner per year to achieve a system that fails nearly half the time. If a hospital discharged patients only to have half of them return within a year with the same condition, we would call it a scandal. When our prisons do the same, we call it inevitable.

What I found most disturbing was not the overcrowding or the violence — though both are endemic — but the sheer waste of human potential. I met a man who had taught himself to read in prison, a woman who had written a novel, a young father who had gained three A-levels. The system had given them time, and they had done something extraordinary with it. But the system had given them nothing else: no support, no pathway, no reason to believe that what they had achieved mattered to anyone beyond those walls.`

const EXAM11_SOURCE_A_REF = 'Rachel Osei, "Behind Closed Doors", The Observer, 2024'

const EXAM11_SOURCE_B = `I have had occasion this past month to inspect several of Her Majesty's gaols, and I must confess that the experience has considerably altered my views on the question of punishment. I went in believing, as most right-thinking men do, that prison exists to deter the criminal and to protect the honest citizen. I come away believing that it does neither with any efficiency, and that it creates, in many cases, precisely the hardened villain it purports to contain.

The separate system, as it is practised at Pentonville, confines each prisoner to his cell for twenty-three hours of the day. He works alone, eats alone, exercises alone in a small yard with walls too high to see over, and worships on Sundays in a chapel fitted with partitions so that no prisoner may see another's face. The theory, I am told, is that solitude encourages reflection and repentance. The reality, which any observer with functioning eyes might discern, is that solitude encourages madness. I spoke to the prison chaplain, a good man worn thin by the futility of his office, who told me that fully one quarter of the inmates under his care exhibit signs of mental derangement.

And what becomes of them upon release? They are turned out at the gate with a suit of clothes and five shillings, blinking in the daylight like creatures dug from the earth, and expected to become honest members of a society that will not employ them, house them, or acknowledge them as human beings.`

const EXAM11_SOURCE_B_REF = 'Charles Reade, It Is Never Too Late to Mend (1856)'

// Exam 12: Media & Journalism
const EXAM12_SOURCE_A = `Journalism is dying, and we are all complicit in its murder. Every time you scroll past a paywall, every time you share an article without reading beyond the headline, every time you declare that "the mainstream media can't be trusted" while uncritically consuming the claims of anonymous social media accounts, you drive another nail into the coffin of accountability.

I have been a journalist for twenty-two years. I have watched newsrooms shrink from bustling floors of a hundred reporters to skeleton crews of fifteen. I have watched colleagues — brilliant, dedicated, irreplaceable colleagues — take redundancy packages and retrain as teachers, civil servants, anything that offers the security that journalism no longer can. In 2005, there were approximately 23,000 journalists working in local and regional news in the UK. Today, that number stands below 6,000. Entire towns have no reporter assigned to cover their council meetings, their courts, their schools. Democracy does not die in darkness — it dies in the spaces where nobody is watching.

The consequences are not abstract. When local journalism disappears, corruption increases. A 2023 study by the Reuters Institute found that in areas that had lost their local newspaper, council spending on outsourced contracts rose by 19% — not because the councils became more corrupt overnight, but because the knowledge that someone was watching had been the only thing keeping them honest.`

const EXAM12_SOURCE_A_REF = 'James Hargreaves, "Who Will Watch the Watchers?", The New Statesman, 2024'

const EXAM12_SOURCE_B = `The modern newspaper is a curious institution. It professes to inform, but it selects; it claims to present facts, but it arranges them to suit its purposes; it speaks in the name of the public, but it serves the interests of its proprietor. I do not say this in a spirit of hostility, for I have spent the better part of my working life in the service of the press and I recognise, as clearly as any man, the great good that a free press may accomplish. But I say it because honesty compels me to acknowledge what daily experience confirms: that the power of the press is immense, largely unaccountable, and frequently exercised with a recklessness that would be thought criminal in any other profession.

Consider the case of the wretched individual who, having been accused of a crime he did not commit, finds his name and likeness published in every newspaper in the land before any court has pronounced upon his guilt. His reputation is destroyed in a morning. His family suffers the cruelty of neighbours who have read the reports and formed their verdict. And when, weeks or months later, the charges are quietly dropped, the correction appears — if it appears at all — in three lines on page fourteen. The damage is irreversible. The press has moved on to its next sensation, leaving behind a ruined life and a profound injustice.

I believe in the freedom of the press as fervently as any man alive. But freedom without responsibility is mere licence, and licence, unchecked, becomes tyranny of the most insidious kind — a tyranny exercised not by the state but by those who claim to protect us from it.`

const EXAM12_SOURCE_B_REF = 'W.T. Stead, "The Government by Journalism", The Contemporary Review, 1886'

// Exam 13: Food & Agriculture
const EXAM13_SOURCE_A = `We have become a nation of people who do not know where their food comes from, and this ignorance is not accidental — it is cultivated. The supermarket, with its fluorescent lights and its infinite shelves of plastic-wrapped produce, is designed to sever the connection between the thing you eat and the place it grew. A chicken breast in a polystyrene tray bears no resemblance to a chicken. A bag of pre-washed salad leaves tells you nothing of the migrant workers who picked them at four in the morning for less than the minimum wage.

I spent a year working on farms across Britain — arable, dairy, livestock, organic, industrial — and what I learned changed the way I think about every meal I eat. The dairy farmer in Somerset who wept when he told me he was selling his herd because the supermarkets were paying him less per litre than it cost to produce. The fruit farmer in Kent whose strawberries rotted in the fields because there were no longer enough seasonal workers to pick them. The pig farmer in Yorkshire who had invested everything in high-welfare systems only to be undercut by imports from countries where the regulations he was legally required to meet simply did not exist.

These are not sentimental stories. They are economic realities with profound consequences. When we allow our farming industry to collapse — and make no mistake, that is what is happening — we do not merely lose picturesque landscapes and rural traditions. We lose food security. We lose the ability to feed ourselves. And in a world of climate crisis and geopolitical instability, that is not a romantic concern. It is an existential one.`

const EXAM13_SOURCE_A_REF = 'Meera Patel, "The True Cost of Cheap Food", The Guardian, 2024'

const EXAM13_SOURCE_B = `The English farmer is the most abused and least understood man in the kingdom. He is blamed when prices are high and pitied when they are low. He is told by the townsman that he is backward, by the politician that he is privileged, and by the economist that he is inefficient. He bears all this with a patience that is either admirable or foolish, depending upon one's point of view, and he continues, year after year, to perform the one task that no other class of men can perform: he feeds us.

I have this week returned from a tour of the agricultural districts, and I find the condition of the labouring poor to be desperate beyond anything I had anticipated. The harvest has failed for the second successive year. The price of wheat has fallen to a level at which no farmer can produce it without loss. In village after village, I found cottages standing empty, their occupants having departed for the towns in search of work that the land can no longer provide. The fields that once supported families now support only crows.

What strikes me with particular force is the silence of these communities. There are no riots, no demonstrations, no petitions to Parliament. The agricultural poor suffer with a quietness that is easily mistaken for contentment. But it is not contentment. It is the silence of people who have learned that nobody is listening.`

const EXAM13_SOURCE_B_REF = 'William Cobbett, Rural Rides (1830)'

// Exam 14: Sport & Competition
const EXAM14_SOURCE_A = `Professional sport has become a laboratory for everything that is wrong with modern capitalism, and we cheer it on from the stands. The Premier League is not a sporting competition — it is a financial arms race in which clubs backed by sovereign wealth funds and billionaire oligarchs compete to spend the most obscene sums on human talent, while the communities those clubs were built to serve are priced out of their own stadiums. A match-day ticket at the Emirates costs more than a week's wages for a worker on the national living wage. The beautiful game has become the exclusive game.

But the corruption runs deeper than ticket prices. The treatment of young athletes — children, really — reveals the true moral character of professional sport. Academies recruit boys as young as nine, subject them to years of intense physical and psychological pressure, and then release the vast majority at sixteen or seventeen with no qualifications, no fallback, and a shattered sense of identity. For every player who makes it, there are a hundred who are discarded. We celebrate the one and forget the hundred, because the story of success is commercially useful and the story of failure is not.

I am not against competition. Competition is fundamental to human flourishing. But what we have built is not competition — it is exploitation dressed in the language of aspiration. When we tell a fourteen-year-old that he could be the next Marcus Rashford, we are not inspiring him. We are using him. And when his dream collapses, as it almost certainly will, we will not be there to catch him.`

const EXAM14_SOURCE_A_REF = 'David Okoro, "The Price of the Game", The Athletic, 2024'

const EXAM14_SOURCE_B = `I attended yesterday the great prize-fight between Hickman and Neate, and I must say that, whatever the moralists may allege against such spectacles, I have never witnessed a more complete display of human courage, endurance, and skill. The crowd numbered some twenty thousand persons, drawn from every rank of society — gentlemen in fine coats standing shoulder to shoulder with labourers in smocks — and for the space of two hours, all distinctions of class were suspended in the shared intensity of the contest.

There is something in a fair fight that speaks to the deepest instincts of our nature. Not the cruelty — for I will not pretend there is no cruelty in it — but the willingness of two men to test themselves absolutely, to discover, in the most literal sense, what they are made of. Hickman fought with a ferocity that was terrifying to behold, but Neate endured it with a calm and terrible patience, taking blow after blow until his moment came, and when it came, he struck with a force that seemed to gather in it all the silent suffering he had borne.

The moralist will say that such exhibitions degrade us. I say they reveal us. Every man in that crowd saw in the fighters something he recognised in himself — not the violence, but the refusal to yield. And if that is a base instinct, then it is also the instinct upon which every great achievement of our civilisation has been built, for what is courage but the refusal to accept defeat?`

const EXAM14_SOURCE_B_REF = 'William Hazlitt, "The Fight", New Monthly Magazine, 1822'

// Exam 15: Art & Creativity
const EXAM15_SOURCE_A = `Arts education is being systematically dismantled in this country, and we will pay for it in ways we cannot yet imagine. Since 2010, the number of students taking GCSE art and design has fallen by 47%. Drama entries have dropped by 40%. Music by 38%. These are not statistical fluctuations. They are the consequences of deliberate policy choices that have told an entire generation that creativity is a luxury, not a necessity.

The argument against the arts is always economic: they are expensive to teach, difficult to measure, and unlikely to lead to employment. This argument is wrong on every count. The creative industries contribute over a hundred billion pounds to the UK economy annually — more than aerospace, automotive, and life sciences combined. They employ over two million people. They are one of the few sectors in which Britain genuinely leads the world. And we are undermining their future workforce with a curriculum that treats art as an optional extra, a reward for schools that have achieved sufficiently high scores in the subjects that actually matter.

But the deeper damage is not economic. It is human. When you cut arts education, you do not simply remove a subject from the timetable. You remove a language — the language through which young people learn to express what cannot be expressed in essays or equations. The teenager who cannot articulate her grief but can paint it. The boy who cannot sit still in a classroom but can lose himself for hours in a drum kit. These are not indulgences. They are lifelines. And we are cutting them with the smiling efficiency of people who have never needed them.`

const EXAM15_SOURCE_A_REF = 'Priya Chandra, "The Creativity Crisis", The Observer, 2024'

const EXAM15_SOURCE_B = `I hold it to be an indisputable truth that the cultivation of the arts is essential to the moral and spiritual health of any nation, and that a society which neglects them does so at the peril of its own soul. The manufacturer may tell me that his factory produces more wealth in a week than all the painters in England produce in a year. He may be right. But the wealth he produces is consumed and forgotten, while the painting endures — not merely as an object of beauty, but as evidence that human beings are capable of something more than the mere getting and spending which occupies the greater part of their waking hours.

I have observed with growing alarm the tendency of our age to value everything by its utility and nothing by its truth. A bridge is useful; a painting is not. A steam engine is productive; a symphony is not. And from these observations, my practical countrymen draw the conclusion that we should build more bridges and compose fewer symphonies. They cannot see — or will not see — that the symphony speaks to a need as real and as urgent as the need for bridges: the need to know that life has meaning beyond its material conditions.

The child who is taught to draw, to sing, to shape words into poetry, is not being taught a trade. He is being taught to see — to attend to the world with a patience and precision that no other discipline requires in quite the same way. And a nation of people who cannot see is a nation that will build its bridges in the wrong places.`

const EXAM15_SOURCE_B_REF = 'John Ruskin, Lectures on Art, delivered at Oxford (1870)'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const aqaP2C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11 — Justice & Prison
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-11',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-11-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM11_SOURCE_A_REF}\nSource B: ${EXAM11_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-11-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer visited prisons in Scotland.\nB) The writer spoke to inmates and guards.\nC) Cells designed for one person sometimes house two or three.\nD) Prisoners eat their meals at a dining table.\nE) A plastic curtain separates the toilet from the bed.\nF) The writer spent three weeks visiting prisons.\nG) The writer believes the system is designed to rehabilitate.\nH) Prisoners mark off days on walls.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'B, C, E, H — B: "speaking to inmates, guards, and governors." C: "cells built for one but housing two or three." E: "a plastic curtain separating the toilet from the bed." H: "marking off days on walls."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-11-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two writers describe the conditions prisoners experience.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources describe terrible prison conditions. Source A describes overcrowded cells where prisoners are "crammed" together with no privacy, while Source B describes the opposite extreme — total isolation where prisoners spend "twenty-three hours" alone. Both writers show that prisoners are treated as less than human. Source A mentions prisoners eating on their laps with no table, while Source B describes a system designed to drive men mad. Both sources also describe what happens when prisoners are released — Source A says there is "no support, no pathway" and Source B says they are "turned out at the gate with five shillings."',
              'Grade 6-7': 'Both writers document prison conditions that fail their stated purpose, though the specific failures differ markedly across the 170-year gap. Osei describes overcrowding as the defining condition — cells "built for one but housing two or three" with degrading arrangements such as the "plastic curtain separating the toilet from the bed." Reade, conversely, describes the cruelty of enforced isolation under the "separate system," where prisoners spend twenty-three hours alone and worship in chapels "fitted with partitions." The conditions are opposite in their material form (overcrowding versus isolation) but identical in their dehumanising effect. Both writers emphasise the failure of post-release provision: Osei\'s prisoners receive "no support, no pathway," while Reade\'s are discharged with "a suit of clothes and five shillings." The most striking similarity is both writers\' recognition that the system produces the very outcomes it claims to prevent — Osei cites 48% reoffending rates, while Reade observes that prison "creates precisely the hardened villain it purports to contain."',
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
            id: 'aqa-p2-11-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to persuade the reader that the prison system is failing?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM11_SOURCE_A}`,
            extractSource: EXAM11_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the metaphor "warehouse" to describe prisons, which suggests prisoners are treated like objects rather than people. Statistics like "48%" reoffending rates and "forty-seven thousand pounds per prisoner" are used to shock the reader and show the system is wasting money. The comparison to a hospital is effective because it makes us see how unacceptable the failure rate is. The listing of achievements — "taught himself to read," "written a novel," "gained three A-levels" — shows that prisoners can change but the system does not help them.',
              'Grade 6-7': 'Osei constructs her argument through a carefully sequenced rhetorical strategy that moves from visceral description to statistical proof to moral appeal. The opening metaphor — "warehouse" — is devastating in its precision: it reduces rehabilitation to mere storage, stripping the system of any pretence to purpose. The first paragraph\'s accumulation of degrading details ("plastic curtain," "eating meals on their laps," "marking off days on walls") creates a sensory catalogue of indignity, each image more diminishing than the last. The second paragraph shifts register to data-driven argument: "48%," "64%," "forty-seven thousand pounds" are deployed as evidence of systematic failure. The hospital analogy is rhetorically powerful because it reframes prison failure in terms the reader instinctively recognises as unacceptable — we would not tolerate a 48% readmission rate in healthcare, so why do we accept it in criminal justice? The final paragraph performs the most sophisticated persuasive move: the tricolon of individual achievement ("taught himself to read... written a novel... gained three A-levels") humanises the statistics, while the devastating anaphoric negation — "no support, no pathway, no reason to believe" — systematically strips away any comfort the reader might take from these success stories.',
              'Grade 8-9': 'Osei orchestrates a tripartite rhetorical architecture — sensory, analytical, and moral — that systematically dismantles the reader\'s capacity for complacency. The opening paragraph\'s controlling metaphor, "warehouse," performs double duty: it dehumanises the system\'s intent while literalising its practice, since the subsequent description of cells "built for one but housing two or three" is precisely how one describes warehousing — maximising capacity with no regard for the contents. The verb "crammed" extends this semantic field, its connotations of compression and force denying prisoners any agency. The paragraph\'s most subtle technique is the shift to present participles — "eating," "marking" — which grammatically enact the endless, unchanging present tense of incarceration. The second paragraph executes a register shift from sensory to statistical, but the statistics are not merely presented; they are framed through analogy. The hospital comparison is a masterclass in audience manipulation: by mapping prison onto healthcare, Osei exploits the reader\'s existing moral framework. The word "scandal" is carefully positioned — its association with public outrage makes the contrasting "inevitable" (applied to prison failure) sound like moral surrender. The final paragraph achieves its power through juxtaposition: the individual achievements represent human flourishing against systemic indifference, while the anaphoric "no support, no pathway, no reason to believe" uses syntactic repetition to perform the system\'s emptiness. The final clause — "what they had achieved mattered to anyone beyond those walls" — positions the reader as implicitly complicit: if this essay has made us care, we are already among those who should have been there sooner.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-11-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the prison system and its purpose.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM11_SOURCE_A}\n\nSource B:\n${EXAM11_SOURCE_B}`,
            extractSource: `Source A: ${EXAM11_SOURCE_A_REF} | Source B: ${EXAM11_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers believe the prison system is failing. Source A uses modern statistics ("48% reoffending") to prove this, while Source B uses personal observation ("fully one quarter exhibit signs of mental derangement"). Both writers compare prison to something else to make their point — Source A compares it to a hospital, and Source B describes prisoners "like creatures dug from the earth." However, they focus on different problems: Source A is mainly about overcrowding and lack of support, while Source B is about the cruelty of isolation. Both writers end by criticising what happens when prisoners are released, showing that the system fails at every stage.',
              'Grade 6-7': 'Both Osei and Reade share the conviction that the prison system defeats its own stated objectives, but their critiques operate from different historical positions and employ distinct rhetorical strategies. Osei writes as a data-driven journalist: her authority derives from statistics ("48%," "forty-seven thousand pounds") and the systematic accumulation of evidence. She positions prison failure as measurable, quantifiable, and therefore inexcusable. Reade, writing in 1856, employs the conventions of Victorian social observation: first-person testimony, detailed description, and an appeal to the reader\'s moral sensibility. His authority is experiential rather than statistical — "any observer with functioning eyes might discern." Both writers use irony to expose the gap between institutional rhetoric and reality. Osei\'s hospital analogy reframes acceptable failure; Reade\'s observation that solitude is supposed to encourage "reflection and repentance" but actually encourages "madness" achieves a similar effect through direct contradiction. The most striking convergence is their treatment of release: both writers present the moment of discharge as the system\'s final betrayal. Osei\'s triple negation ("no support, no pathway, no reason to believe") and Reade\'s image of men "blinking in the daylight like creatures dug from the earth" achieve, through different means, the same devastating conclusion: prison does not prepare people for freedom because it was never designed to.',
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
        id: 'aqa-p2-11-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-11-q5',
            questionNumber: 5,
            questionText: '"Prison should focus on rehabilitation, not punishment. Locking people up and throwing away the key helps nobody."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative piece that: addresses the statement directly; uses some persuasive devices (rhetorical questions, direct address, statistics); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted argument that: engages with the complexity of the debate (acknowledging victims, public safety, and rehabilitation); uses a range of rhetorical techniques fluently; deploys evidence and examples effectively; matches the register of a broadsheet article; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured argument that: offers a nuanced perspective acknowledging the tension between justice, deterrence, and rehabilitation; crafts a distinctive voice appropriate to the form; deploys rhetorical strategies with precision and control; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
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
  // EXAM 12 — Media & Journalism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-12',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-12-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM12_SOURCE_A_REF}\nSource B: ${EXAM12_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-12-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes journalism is in decline.\nB) The writer blames only the government for this.\nC) People scroll past paywalls.\nD) People always read articles fully before sharing them.\nE) Some people distrust mainstream media.\nF) People uncritically consume social media claims.\nG) The writer says journalism is thriving.\nH) The writer says readers are complicit in the decline.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, F — A: "Journalism is dying." C: "every time you scroll past a paywall." E: "the mainstream media can\'t be trusted." F: "uncritically consuming the claims of anonymous social media accounts."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-12-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the concerns the two writers express about the press and its role in society.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers are concerned about the press, but for different reasons. Source A worries that journalism is disappearing — newsrooms have shrunk from "a hundred reporters to skeleton crews of fifteen." Source B worries about the press being too powerful and irresponsible. Both writers believe the press is important for society — Source A says it holds councils accountable, and Source B acknowledges "the great good that a free press may accomplish." However, Source A fears a world without journalism, while Source B fears a world where journalism operates without accountability.',
              'Grade 6-7': 'Both writers grapple with the relationship between press freedom and public accountability, though from opposing positions on the spectrum of concern. Hargreaves fears the absence of journalism: his anxiety is about the void left when reporters disappear, evidenced by the statistic that journalist numbers have fallen from 23,000 to below 6,000. Stead, conversely, fears the presence of unaccountable journalistic power — the press "selects," "arranges," and "serves the interests of its proprietor." Both writers identify concrete consequences of press failure: Hargreaves cites the 19% increase in council spending on outsourced contracts in areas without local newspapers; Stead describes the "wretched individual" whose reputation is destroyed by premature reporting. The key similarity is that both ultimately defend the principle of a free press while criticising its current practice — Hargreaves mourns its decline, while Stead demands that its "freedom" be tempered by "responsibility." Both writers recognise that democracy depends on the press functioning properly, though they diagnose opposite maladies.',
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
            id: 'aqa-p2-12-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to convey a sense of urgency about the decline of journalism?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM12_SOURCE_A}`,
            extractSource: EXAM12_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the metaphor "murder" in the opening sentence to make the decline of journalism sound violent and criminal. The phrase "we are all complicit" uses the pronoun "we" to include the reader in the blame. The repetition of "every time you" at the start of three phrases creates a sense of accumulating guilt. Statistics like "23,000" falling to "below 6,000" shock the reader by showing the scale of the loss. The phrase "Democracy does not die in darkness — it dies in the spaces where nobody is watching" is powerful because it rewrites a famous saying to make a new point.',
              'Grade 6-7': 'Hargreaves constructs urgency through a systematic escalation from personal accusation to statistical evidence to democratic crisis. The opening sentence\'s extended metaphor of "murder" — with readers as "complicit" — immediately criminalises passive consumption, elevating indifference to active harm. The anaphoric "every time you" creates a litany of everyday sins, each action (scrolling, sharing, declaring) presented as a discrete act of destruction. The verb phrase "drive another nail into the coffin" extends the death metaphor with grim specificity. The second paragraph shifts from accusation to elegy: the juxtaposition of "bustling floors of a hundred reporters" with "skeleton crews of fifteen" compresses decades of decline into a single image. The adjective "skeleton" is doubly resonant — it suggests both minimal staffing and death. The paragraph\'s closing sentence, adapted from a Washington Post slogan, reframes the familiar: "Democracy does not die in darkness — it dies in the spaces where nobody is watching." The dash creates a pause that performs the very absence it describes. The final paragraph deploys empirical evidence (the Reuters Institute study, the 19% increase) to convert emotional argument into material proof, ensuring the reader cannot dismiss the urgency as mere sentiment.',
              'Grade 8-9': 'Hargreaves engineers urgency through a rhetorical structure that progressively closes the escape routes available to the complacent reader. The opening sentence performs a dual provocation: "dying" is dramatic enough, but "murder" reframes decline as crime, and "complicit" redistributes guilt from the abstraction of market forces to the individual reader. The subsequent anaphora — "every time you scroll... every time you share... every time you declare" — constructs a catalogue of quotidian betrayals in which the second person pronoun functions as an accusatory finger. The syntactic parallelism creates inevitability: each clause is another count in an indictment. The second paragraph\'s most sophisticated technique is temporal compression: "twenty-two years" of experience is condensed into the single image of newsrooms shrinking from "bustling floors" to "skeleton crews." The noun "skeleton" operates across two semantic fields — the literal (bare minimum) and the morbid (bones, death) — collapsing the distinction between understaffing and extinction. The emotional weight falls on the parenthetical "brilliant, dedicated, irreplaceable" — three adjectives whose ascending syllable count performs the very accumulation of loss they describe. The adapted epigram in the paragraph\'s final sentence achieves its force through subversion: by contradicting the familiar ("not in darkness"), Hargreaves claims the reader\'s attention before delivering the real insight ("in the spaces where nobody is watching"), which is syntactically positioned as a correction, giving it the rhetorical authority of revealed truth. The final paragraph\'s deployment of the Reuters study transforms the argument from polemic to empiricism, the specificity of "19%" functioning as an anchor that prevents the reader from dismissing the preceding rhetoric as hyperbole.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-12-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the power and responsibility of the press.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM12_SOURCE_A}\n\nSource B:\n${EXAM12_SOURCE_B}`,
            extractSource: `Source A: ${EXAM12_SOURCE_A_REF} | Source B: ${EXAM12_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers care deeply about the press but see different problems. Hargreaves (Source A) is worried that journalism is disappearing and uses statistics to prove it — from "23,000" to "below 6,000" journalists. Stead (Source B) is worried about journalism being too powerful and irresponsible. Both use emotional examples: Hargreaves describes colleagues losing their jobs, while Stead describes an innocent person whose reputation is destroyed. Both writers believe the press matters for democracy — Hargreaves says it stops corruption and Stead says freedom of the press is important. They both use rhetorical techniques to persuade: Hargreaves uses direct address ("you") and Stead uses hypothetical examples.',
              'Grade 6-7': 'Hargreaves and Stead occupy mirror positions in their critiques of the press: Hargreaves mourns its disappearance while Stead warns against its unchecked power, yet both ultimately argue for the same thing — a press that is present, accountable, and responsible. Hargreaves employs the rhetoric of crisis journalism: statistics, direct accusation, and the urgency of a ticking clock. His extended metaphor of murder frames decline as a crime with identifiable perpetrators (the readers themselves). Stead, writing in 1886, adopts the measured cadences of Victorian essay-writing: balanced clauses ("it professes to inform, but it selects"), concessive argument ("I do not say this in a spirit of hostility"), and the construction of hypothetical scenarios (the falsely accused man). Both writers use specific examples to anchor abstract arguments: Hargreaves\'s "entire towns with no reporter" parallels Stead\'s "wretched individual" whose life is ruined by premature reporting. The crucial difference lies in what each writer fears most: Hargreaves fears the absence of scrutiny (councils spending freely because "nobody is watching"), while Stead fears the presence of irresponsible power ("freedom without responsibility is mere licence"). Their final sentences reveal their deepest convictions: Hargreaves positions the press as democracy\'s guardian, while Stead warns that the press can itself become a tyrant — "a tyranny exercised not by the state but by those who claim to protect us from it."',
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
        id: 'aqa-p2-12-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-12-q5',
            questionNumber: 5,
            questionText: '"Social media has made traditional journalism irrelevant. Anyone with a phone can be a reporter now."\n\nWrite a speech to be delivered at a school assembly in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative speech that: addresses the statement directly; uses some persuasive devices (rhetorical questions, direct address to the audience, anecdote); has a clear structure with opening, body, and conclusion; demonstrates generally accurate spelling and punctuation; adopts an appropriate register for a school assembly.',
              'Grade 6-7': 'A well-crafted speech that: engages critically with both sides of the argument; uses a range of rhetorical techniques appropriate to spoken discourse (tricolon, anaphora, shifts in pace); deploys examples and evidence effectively; demonstrates awareness of the school assembly audience; shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured speech that: offers a nuanced perspective on the relationship between citizen journalism and professional reporting; crafts a distinctive and engaging speaking voice; deploys rhetorical strategies with precision, including pauses, repetition, and audience engagement; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
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
  // EXAM 13 — Food & Agriculture
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-13',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-13-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM13_SOURCE_A_REF}\nSource B: ${EXAM13_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-13-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer believes people are disconnected from their food sources.\nB) Supermarkets deliberately maintain this disconnection.\nC) The writer praises the convenience of modern shopping.\nD) A chicken breast in a tray looks like a real chicken.\nE) Salad leaves are pre-washed before sale.\nF) Migrant workers pick salad leaves.\nG) Workers are always paid above the minimum wage.\nH) Supermarkets use fluorescent lighting.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, B, F, H — A: "We have become a nation of people who do not know where their food comes from." B: "this ignorance is not accidental — it is cultivated." F: "the migrant workers who picked them." H: "fluorescent lights."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-13-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the difficulties faced by farmers as described in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both sources describe farmers struggling to survive. In Source A, the dairy farmer is paid "less per litre than it cost to produce" by supermarkets, while in Source B, "the price of wheat has fallen" so farmers cannot make a profit. Both sources show people leaving farming — Source A\'s dairy farmer is "selling his herd" and Source B describes "cottages standing empty" as people leave for towns. Both writers show that farmers are undervalued by society. However, Source A blames supermarkets and foreign imports, while Source B blames crop failure and falling prices.',
              'Grade 6-7': 'Both writers document an agricultural sector in crisis, though separated by nearly two centuries. The economic pressures described are strikingly similar: Patel\'s Somerset dairy farmer receives "less per litre than it cost to produce," while Cobbett\'s farmers face wheat prices that mean "no farmer can produce it without loss" — both describe the impossible economics of producing food below cost. The human consequences mirror each other: Patel describes a farmer who "wept when he told me he was selling his herd," while Cobbett finds "cottages standing empty, their occupants having departed for the towns." In both cases, the land is being abandoned. Both writers also emphasise society\'s indifference: Patel notes that consumers are deliberately disconnected from food production, while Cobbett observes the "silence" of agricultural communities, which is "easily mistaken for contentment." The key difference lies in the agents of exploitation: Patel identifies supermarkets and foreign imports as the modern threats, while Cobbett points to market forces and harvest failure. Both writers, however, arrive at the same conclusion: that farming communities bear the cost of feeding a nation that neither understands nor values their labour.',
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
            id: 'aqa-p2-13-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to argue that the decline of British farming is a serious threat?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM13_SOURCE_A}`,
            extractSource: EXAM13_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer describes the supermarket as designed to "sever the connection" between food and where it comes from — the verb "sever" sounds violent, like cutting something with force. She uses personal stories to make us care: the dairy farmer who "wept" is emotional and makes us sympathise. The rule of three — "no support, no pathway, no reason to believe" in the pig farmer\'s case of being "undercut by imports" — shows the unfairness. The final paragraph uses strong language: "existential" means it threatens our very survival, which makes the reader take the issue seriously.',
              'Grade 6-7': 'Patel constructs her argument through a strategic movement from the abstract to the personal to the political, each stage escalating the stakes. The opening paragraph\'s central metaphor — the supermarket as a machine designed to "sever the connection" — uses a verb connoting violence to characterise what appears benign. The description of a "chicken breast in a polystyrene tray" is deliberately flat, its prosaic specificity enacting the very disconnection it describes. The second paragraph shifts to personal testimony, deploying a tricolon of individual farmers whose stories embody different facets of the crisis. The Somerset dairy farmer who "wept" is emotionally devastating because the verb is so stark and unadorned; Patel does not elaborate or sentimentalise, letting the single verb carry the full weight of despair. The fruit farmer\'s "strawberries rotted in the fields" creates a visceral image of waste that operates as a synecdoche for the entire agricultural crisis. The pig farmer\'s situation — "undercut by imports from countries where the regulations he was legally required to meet simply did not exist" — transforms individual hardship into systemic injustice through the irony of regulatory asymmetry. The final paragraph\'s most powerful technique is the escalation from "food security" through "the ability to feed ourselves" to "an existential one" — each phrase raises the stakes, culminating in a word ("existential") that reframes farming as a matter of national survival.',
              'Grade 8-9': 'Patel\'s rhetorical strategy operates through a progressive unveiling of concealed violence — moving from the systemic concealment of food production to the human cost of that concealment to its geopolitical consequences. The opening paragraph\'s key claim — "this ignorance is not accidental — it is cultivated" — performs a linguistic irony (using the agricultural verb "cultivated" to describe the deliberate growing of ignorance) that establishes the essay\'s central paradox: the more efficiently we produce food, the less we understand its production. The supermarket is presented as an epistemological machine: "fluorescent lights" and "plastic-wrapped produce" create a hermetic environment where the origins of food are systematically erased. The phrase "bears no resemblance to a chicken" achieves its effect through understatement — the gap between animal and product is so vast that Patel need only name it to make her point. The second paragraph\'s three farmer portraits are structured as a tricolon of decline, but their power lies in Patel\'s restraint. The dairy farmer "wept" — a monosyllabic verb placed at the end of a clause, its brevity refusing the reader the comfort of elaboration. The strawberries that "rotted in the fields" invert the agricultural order: food that should sustain becomes waste, the present tense "rotted" enacting decomposition in real time. The final paragraph executes a rhetorical pivot from the personal to the geopolitical through the devastating parenthetical "and make no mistake, that is what is happening" — an aside that refuses the reader\'s temptation to read the preceding as hypothetical. The climactic adjective "existential" is earned precisely because Patel has spent two paragraphs establishing the material reality that warrants it.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-13-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their perspectives on the value of farming and the treatment of those who work the land.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM13_SOURCE_A}\n\nSource B:\n${EXAM13_SOURCE_B}`,
            extractSource: `Source A: ${EXAM13_SOURCE_A_REF} | Source B: ${EXAM13_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers argue that farming is undervalued and farmers are treated unfairly. Source A focuses on how supermarkets exploit farmers by paying below production costs, while Source B describes how poor harvests and low prices drive families from the land. Both use emotional examples: Source A\'s weeping dairy farmer and Source B\'s empty cottages. Both writers show that the public does not understand farming — Source A says we are disconnected from our food and Source B says the farmer is "the most abused and least understood man in the kingdom." They differ in their conclusions: Source A warns about food security and calls farming "existential," while Source B focuses on the silent suffering of communities.',
              'Grade 6-7': 'Patel and Cobbett, writing nearly two centuries apart, construct remarkably similar arguments about the invisibility of agricultural labour, though their rhetorical methods reflect their different eras. Both writers open by establishing the fundamental paradox of farming: Patel notes our disconnection from the food we eat, while Cobbett declares the farmer "the most abused and least understood man in the kingdom" despite performing "the one task that no other class of men can perform: he feeds us." This shared recognition — that the essential worker is the most neglected — anchors both arguments. Methodologically, Patel combines investigative journalism with economic analysis: she names specific farmers, cites production costs, and identifies systemic causes (supermarket pricing, import competition). Cobbett employs the conventions of travel writing and social observation: his authority derives from having been there, from the accumulation of witnessed detail. Both writers use imagery of abandonment: Patel\'s strawberries "rotted in the fields" and Cobbett\'s fields "now support only crows" create parallel images of productive land reverting to waste. The most striking shared technique is their treatment of silence: Patel describes consumers who are deliberately kept ignorant, while Cobbett describes farming communities whose "silence is easily mistaken for contentment." In both cases, the absence of protest is reframed not as acceptance but as evidence of how completely these communities have been abandoned.',
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
        id: 'aqa-p2-13-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-13-q5',
            questionNumber: 5,
            questionText: '"We should all know exactly where our food comes from and how it is produced. Ignorance about what we eat is no longer acceptable."\n\nWrite a letter to the editor of a national newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative letter that: addresses the statement directly; uses appropriate letter conventions (Dear Sir/Madam, Yours faithfully); uses some persuasive devices (rhetorical questions, examples, statistics); has a clear structure; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7': 'A well-crafted letter that: engages with the complexity of food production and consumer responsibility; uses a range of rhetorical techniques appropriate to a formal letter; deploys evidence and examples effectively; demonstrates awareness of audience (editor and readers); shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured letter that: offers a nuanced perspective on food transparency, economic realities, and ethical consumption; crafts a distinctive voice appropriate to the form; deploys rhetorical strategies with precision; uses counter-argument effectively; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
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
  // EXAM 14 — Sport & Competition
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-14',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-14-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM14_SOURCE_A_REF}\nSource B: ${EXAM14_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-14-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer compares professional sport to capitalism.\nB) The Premier League is described as a sporting competition.\nC) Some clubs are backed by sovereign wealth funds.\nD) Ticket prices at the Emirates are affordable.\nE) Communities are being priced out of stadiums.\nF) The writer calls football "the beautiful game."\nG) The writer supports the current financial model.\nH) Billionaire oligarchs are involved in club ownership.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, H — A: "a laboratory for everything that is wrong with modern capitalism." C: "clubs backed by sovereign wealth funds." E: "communities those clubs were built to serve are priced out of their own stadiums." H: "billionaire oligarchs."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-14-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the writers\' views on what sport reveals about human nature.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'The two writers have very different views on sport. Source A sees modern sport as "exploitation dressed in the language of aspiration" and believes it reveals the greed of capitalism. Source B sees sport as revealing the best in human nature — "courage, endurance, and skill." Source A focuses on how young athletes are used and discarded, while Source B focuses on how a fight brings out qualities of determination in both fighters and spectators. However, both writers acknowledge that sport has a dark side: Source A mentions exploitation and Source B admits there is "cruelty" in fighting. Source B believes sport unites people across classes, while Source A believes it divides them by wealth.',
              'Grade 6-7': 'Okoro and Hazlitt present diametrically opposed readings of what competitive sport reveals about humanity, though both engage seriously with the moral questions it raises. Okoro views professional sport as a mirror for capitalist exploitation: it reveals not courage but the willingness to commodify human aspiration. His focus on academy footballers "recruited as young as nine" and "discarded" at seventeen frames sport as a system that consumes youth for profit. Hazlitt, conversely, views the prize-fight as a revelation of fundamental human virtues — "courage, endurance, and skill" — and argues that it temporarily dissolves social hierarchy, with "gentlemen in fine coats standing shoulder to shoulder with labourers." Both writers acknowledge the violence inherent in their respective sports but interpret it differently: Okoro sees exploitation disguised as opportunity, while Hazlitt sees cruelty transcended by courage. The most revealing difference lies in their treatment of failure: Okoro focuses on the "hundred who are discarded" for every success, while Hazlitt finds nobility even in the fighter who loses — Neate\'s "calm and terrible patience" is presented as admirable regardless of outcome. For Okoro, sport creates victims; for Hazlitt, it creates heroes.',
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
            id: 'aqa-p2-14-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to present professional sport as morally corrupt?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM14_SOURCE_A}`,
            extractSource: EXAM14_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the metaphor "laboratory" to compare sport to a scientific experiment, suggesting something cold and unnatural. The phrase "financial arms race" makes football sound like a war about money rather than a sport. The writer uses contrast between the cost of a ticket and "a week\'s wages for a worker" to show the unfairness. The phrase "the beautiful game has become the exclusive game" is effective because it changes a well-known saying to make a new point about how football has become only for the rich.',
              'Grade 6-7': 'Okoro constructs professional sport as a system of concealed exploitation through a sustained semantic field of corruption and deception. The opening metaphor — "a laboratory for everything that is wrong with modern capitalism" — is precisely chosen: a laboratory is a controlled environment where experiments are conducted on subjects, positioning athletes as test subjects rather than participants. The phrase "financial arms race" combines the lexis of warfare with economics, suggesting that spending has become weaponised. The paragraph\'s most devastating technique is the redefinition: "The beautiful game has become the exclusive game" — the substitution of a single adjective transforms celebration into critique. The second paragraph exposes the exploitation of youth through deliberately clinical language: "recruit," "subject," "release" form a lexical chain borrowed from institutional processing. The parenthetical "(children, really)" is a calculated interruption — the aside format mimics the way society pushes this uncomfortable truth to the margins. The ratio "for every player who makes it, there are a hundred who are discarded" uses the passive voice "discarded" to deny agency, framing young people as waste products of an industrial process. The final paragraph performs its most sophisticated manoeuvre by conceding ("I am not against competition") before redefining: "exploitation dressed in the language of aspiration" is a metaphor of disguise that positions the entire sporting industry as a confidence trick.',
              'Grade 8-9': 'Okoro systematically corrupts the language of sport — aspiration, competition, opportunity — revealing exploitation beneath each term. The controlling metaphor of "laboratory" in the opening sentence is multivalent: it suggests experimentation (on human subjects), controlled conditions (that benefit the experimenter, not the subject), and the clinical detachment of profit-driven observation. The subsequent "financial arms race" extends the semantic field of systemic violence, while the specification of "sovereign wealth funds and billionaire oligarchs" roots the abstraction in identifiable power structures. The paragraph\'s rhetorical climax — "The beautiful game has become the exclusive game" — achieves its force through minimal substitution: a single adjective change transforms a cliche of affection into an indictment, the sonic similarity between "beautiful" and "exclusive" (both trisyllabic, both ending in a sibilant) making the corruption sound almost natural. The second paragraph\'s most devastating technique is the chronological compression of an academy career into a single sentence: "recruit at nine... subject... release at sixteen or seventeen." The verbs form a euphemistic lifecycle that, when stripped of sporting context, reads as institutional abuse. The parenthetical "(children, really)" weaponises the aside form: its informality mimics the reader\'s own suppressed awareness, the adverb "really" functioning as a gentle insistence on a truth we prefer to avoid. The final paragraph\'s definition — "exploitation dressed in the language of aspiration" — operates as the essay\'s thesis in miniature: the clothing metaphor suggests that aspiration is not merely co-opted but actively worn as camouflage, a deliberate rhetorical strategy employed by those who profit from young people\'s dreams.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-14-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their contrasting attitudes to competition and its effects.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM14_SOURCE_A}\n\nSource B:\n${EXAM14_SOURCE_B}`,
            extractSource: `Source A: ${EXAM14_SOURCE_A_REF} | Source B: ${EXAM14_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'The two writers have opposite views on competition. Source A\'s Okoro thinks modern professional sport is corrupt and exploitative — he calls it "a laboratory for everything that is wrong with modern capitalism." Source B\'s Hazlitt thinks competition reveals the best qualities in people — "courage, endurance, and skill." Source A uses economic evidence like ticket prices to criticise sport, while Source B uses vivid description of the fight to celebrate it. Both writers address the issue of morality: Source A says sport exploits young people, while Source B argues against "the moralist" who condemns fighting. Source A ends with a warning about exploitation, while Source B ends with a celebration of human courage.',
              'Grade 6-7': 'Okoro and Hazlitt construct opposing philosophies of competition that reflect their historical moments and personal convictions. Okoro views competition through the lens of late capitalism: his lexis ("arms race," "laboratory," "exploitation") draws from economics and warfare, framing sport as a system of extraction. Hazlitt views competition through Romantic individualism: his lexis ("courage," "endurance," "the refusal to yield") draws from heroic narrative, framing sport as revelation of character. Their methods of persuasion differ accordingly: Okoro builds a prosecutorial case, accumulating evidence (ticket prices, academy statistics, the ratio of success to failure) to prove systemic corruption. Hazlitt builds an aesthetic case, using vivid sensory description (Neate\'s "calm and terrible patience," the blow that "seemed to gather in it all the silent suffering he had borne") to demonstrate the beauty of human resilience. Both writers anticipate and address counter-arguments: Okoro concedes that "competition is fundamental to human flourishing" before distinguishing true competition from exploitation; Hazlitt acknowledges "the moralists" before arguing that the instinct revealed by fighting is the same one that drives civilisation. The deepest divergence lies in their view of the relationship between competitor and spectator: Okoro sees spectators as consumers complicit in exploitation ("we cheer it on"), while Hazlitt sees spectators as participants in a shared experience of human truth ("every man in that crowd saw in the fighters something he recognised in himself").',
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
        id: 'aqa-p2-14-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-14-q5',
            questionNumber: 5,
            questionText: '"Competitive sport builds character and teaches young people valuable life lessons. Every child should be encouraged to compete."\n\nWrite an article for a magazine aimed at parents in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative article that: addresses the statement directly; uses some persuasive devices (rhetorical questions, anecdotes, direct address); has a clear structure with headline, introduction, body, and conclusion; demonstrates generally accurate spelling and punctuation; adopts an appropriate register for a parenting magazine.',
              'Grade 6-7': 'A well-crafted article that: engages with both the benefits and risks of competitive sport for young people; uses a range of rhetorical techniques appropriate to the form; deploys evidence, examples, and personal experience effectively; demonstrates awareness of the parent audience; shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured article that: offers a nuanced perspective balancing the developmental value of competition with the psychological risks of excessive pressure; crafts a distinctive voice appropriate to the form and audience; deploys rhetorical strategies with precision; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
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
  // EXAM 15 — Art & Creativity
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-15',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-15-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM15_SOURCE_A_REF}\nSource B: ${EXAM15_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-15-q1',
            questionNumber: 1,
            questionText: 'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) Arts education is being dismantled.\nB) GCSE art and design entries have risen.\nC) Drama entries have dropped by 40%.\nD) Music entries have increased by 38%.\nE) The decline has happened since 2010.\nF) The writer says the decline is accidental.\nG) An entire generation has been affected.\nH) Creativity has been treated as a luxury.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'A, C, E, H — A: "Arts education is being systematically dismantled." C: "Drama entries have dropped by 40%." E: "Since 2010." H: "creativity is a luxury, not a necessity."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p2-15-q2',
            questionNumber: 2,
            questionText: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the two writers argue for the value of the arts.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers passionately defend the arts. Source A argues that the creative industries are economically valuable, contributing "over a hundred billion pounds" to the UK economy. Source B argues that art matters because it shows humans are "capable of something more" than just making money. Both writers criticise a society that values only practical, useful things. However, Source A focuses more on the damage to young people when arts education is cut, while Source B focuses on the spiritual and moral importance of art. Both agree that cutting the arts makes society poorer — Source A says it removes "a language" for expression, and Source B says a nation that cannot see "will build its bridges in the wrong places."',
              'Grade 6-7': 'Both Chandra and Ruskin construct arguments for the arts that operate on two levels — the practical and the philosophical — though they weight these levels differently. Chandra leads with economic evidence: the creative industries contribute "over a hundred billion pounds" and employ "over two million people," deliberately countering the utilitarian argument on its own terms. Ruskin, writing in 1870, largely dismisses the economic argument, conceding that the manufacturer "may be right" about financial productivity before asserting that art speaks to "a need as real and as urgent as the need for bridges." Both writers identify the same cultural failing: the tendency to value only what is measurable. Chandra describes a curriculum that treats art as "an optional extra," while Ruskin describes an age that values "everything by its utility and nothing by its truth." The key difference lies in their conception of what is lost: Chandra focuses on individual expression — art as "a language through which young people learn to express what cannot be expressed in essays or equations" — while Ruskin frames the loss in civilisational terms, arguing that art teaches people "to see" and that a nation of people who cannot see will fail in all its endeavours. Both writers use their final sentences to crystallise their arguments: Chandra\'s image of lifelines being cut "with the smiling efficiency of people who have never needed them" is an accusation of privilege; Ruskin\'s warning about building "bridges in the wrong places" transforms the utilitarian argument against itself.',
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
            id: 'aqa-p2-15-q3',
            questionNumber: 3,
            questionText: 'You now need to refer only to Source A.\n\nHow does the writer use language to argue that the decline in arts education is both damaging and unjust?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM15_SOURCE_A}`,
            extractSource: EXAM15_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5': 'The writer uses the adverb "systematically" in "systematically dismantled" to suggest the destruction of arts education is deliberate and planned. Statistics like "47%," "40%," and "38%" create a pattern that shocks the reader with the scale of decline. The phrase "an optional extra" is used sarcastically to show how the arts are wrongly treated as unimportant. The writer uses emotional examples of the "teenager who cannot articulate her grief but can paint it" and the "boy who cannot sit still but can lose himself in a drum kit" to show that the arts help real people in important ways.',
              'Grade 6-7': 'Chandra constructs her argument through a rhetorical strategy that first dismantles the opposition\'s economic argument, then reveals the deeper human cost that economics cannot capture. The opening sentence\'s passive construction — "is being systematically dismantled" — is carefully chosen: the passive voice implies a perpetrator who remains unnamed, while "systematically" transforms what might be seen as neglect into calculated destruction. The statistical tricolon ("47%... 40%... 38%") creates a rhythmic descent, each percentage enacting the very decline it measures. The second paragraph executes an audacious rhetorical pivot: having established the emotional argument, Chandra attacks the economic objection on its own territory. The specification that creative industries contribute "more than aerospace, automotive, and life sciences combined" is devastating precisely because it compares art to the industries most revered by utilitarian thinkers. The phrase "subjects that actually matter" deploys sarcasm through reported speech — the italicised contempt is not Chandra\'s but the system\'s, and by ventriloquising it she exposes its absurdity. The final paragraph\'s most powerful technique is the metaphor of art as "a language": this reframes cutting arts education not as removing a subject but as silencing a form of communication. The two specific examples — the grieving teenager, the restless boy — are precisely chosen to represent populations typically failed by conventional education, making the cut personal and unjust. The final image, of lifelines being cut "with the smiling efficiency of people who have never needed them," concentrates the essay\'s anger into a single devastating accusation of privileged indifference.',
              'Grade 8-9': 'Chandra\'s linguistic strategy operates through a series of redefinitions that progressively reframe arts education from peripheral luxury to essential human infrastructure. The opening verb phrase "systematically dismantled" sets the register: "dismantled" implies a structure being deliberately taken apart, while "systematically" denies any defence of accidental neglect. The adverb transforms policy into sabotage. The statistical evidence — "47%... 40%... 38%" — functions not merely as proof but as a rhetorical device: the descending percentages create a formal pattern of decline, their proximity replicating the cumulative nature of the cuts. The sentence "These are not statistical fluctuations" performs the act of interpretive insistence: the negation forces the reader to abandon the comfortable explanation before Chandra supplies the uncomfortable one ("deliberate policy choices"). The second paragraph\'s masterful move is to colonise the opposition\'s territory. By demonstrating that creative industries outperform "aerospace, automotive, and life sciences combined," Chandra does not merely counter the economic argument — she humiliates it, using the comparison to industries associated with rigour and productivity to expose the intellectual laziness of dismissing the arts. The verb phrase "told an entire generation" positions policy as a form of speech act, making the curriculum itself a rhetorical device that communicates values. The final paragraph\'s controlling metaphor — art as "a language" — achieves its power through what it implies: that removing it is an act of silencing, and that those silenced are specifically the most vulnerable ("the teenager who cannot articulate her grief"). The closing image is the essay\'s most concentrated moment of moral accusation: "the smiling efficiency of people who have never needed them" compresses privilege, indifference, and cruelty into a single phrase, the oxymoronic "smiling efficiency" making the perpetrators more disturbing for their pleasant competence.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-15-q4',
            questionNumber: 4,
            questionText: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their attitudes towards the importance of the arts and the consequences of neglecting them.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM15_SOURCE_A}\n\nSource B:\n${EXAM15_SOURCE_B}`,
            extractSource: `Source A: ${EXAM15_SOURCE_A_REF} | Source B: ${EXAM15_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': 'Both writers strongly believe the arts are essential. Source A uses modern statistics to prove the arts are economically important ("over a hundred billion pounds"), while Source B uses philosophical arguments about the human soul. Both writers criticise a society that only values practical, useful things. Source A describes arts education being "dismantled" and Source B criticises the tendency to "value everything by its utility." Both use powerful final images: Source A says lifelines are being cut by people who "have never needed them" and Source B warns about building "bridges in the wrong places." The main difference is that Source A focuses on education and young people, while Source B focuses on the spiritual value of art for all of society.',
              'Grade 6-7': 'Chandra and Ruskin share an impassioned conviction that the arts are essential to human flourishing, but their arguments are rooted in different intellectual traditions and employ distinct rhetorical strategies. Chandra writes as a contemporary campaigner: her argument is built on evidence (statistics, economic data, specific policy consequences) and directed towards immediate action. Her lexis is urgent and accusatory — "dismantled," "cutting," "smiling efficiency." Ruskin writes as a Victorian aesthete and moral philosopher: his argument appeals to eternal truths about human nature and civilisation. His lexis is measured and declarative — "indisputable truth," "the moral and spiritual health of any nation." Both writers engage with and refute the utilitarian argument against the arts, though by different methods. Chandra attacks it with superior data: creative industries outperform traditionally valued sectors. Ruskin attacks it with redefinition: the painting "endures" while factory wealth "is consumed and forgotten," reframing durability as the true measure of value. Both writers use their conclusions to crystallise their arguments in memorable images: Chandra\'s "lifelines" being cut by privileged administrators and Ruskin\'s nation that "will build its bridges in the wrong places" both suggest that neglecting the arts creates not just cultural but practical failure. The deepest convergence is their shared understanding that the arts are not about producing artists but about producing people capable of perception: Chandra calls art "a language" for expressing what cannot otherwise be expressed; Ruskin says the child taught to draw "is being taught to see." Both position the arts as fundamental cognitive and emotional infrastructure, the loss of which diminishes every other area of human activity.',
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
        id: 'aqa-p2-15-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-15-q5',
            questionNumber: 5,
            questionText: '"The arts are a waste of time and money in schools. Students would be better off focusing on maths, science, and technology — the subjects that will actually get them jobs."\n\nWrite a speech to be delivered at a public debate in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5': 'A clear argumentative speech that: addresses the statement directly and takes a clear position; uses some persuasive devices (rhetorical questions, direct address, emotive language); has a clear structure with opening, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation; adopts an appropriate register for a public debate.',
              'Grade 6-7': 'A well-crafted speech that: engages critically with both the economic and human arguments for and against arts education; uses a range of rhetorical techniques appropriate to debate (tricolon, anaphora, counter-argument, shifts in register); deploys evidence and examples effectively; demonstrates awareness of the debate audience; shows consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': 'A compelling, assured speech that: offers a nuanced perspective that engages with the complexity of education funding, employability, and human development; crafts a distinctive and authoritative speaking voice; deploys rhetorical strategies with precision, including pauses, repetition, concession, and audience engagement; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout; uses counter-argument not as a concession but as a springboard for a more powerful case.',
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
