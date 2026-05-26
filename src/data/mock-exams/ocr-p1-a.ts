// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Paper 01 - Social Media
const P01_SOURCE_A = `There is no doubt that social media has transformed the way we communicate, but we must stop pretending that this transformation has been entirely positive. I am a secondary school teacher, and every day I watch my students disappear into their phones during break times, scrolling through feeds that make them anxious, inadequate, and distracted. Last term, a Year 10 student told me she had not slept properly in three weeks because she was afraid of missing messages in her group chat overnight. She was fourteen years old.

The platforms themselves are designed to be addictive. Former engineers at major technology companies have admitted that features such as infinite scrolling and notification alerts were deliberately created to exploit psychological vulnerabilities. We are not dealing with a neutral tool; we are dealing with a product engineered to capture and hold attention at any cost. The fact that this product is being marketed primarily to children and teenagers should alarm us all.

I am not suggesting we ban social media - that ship has sailed. But I am suggesting that we regulate it with the same seriousness we apply to tobacco and alcohol. Our children deserve better than to be treated as data points in an advertising algorithm.`

const P01_SOURCE_A_REF = 'Rachel Adeyemi, "Scrolling Into Crisis", The Observer, 2024'

const P01_SOURCE_B = `I find it curious that every generation discovers a new reason to worry about its young people, and that the worry always centres on whatever technology is newest and least understood. In the 1950s it was television. In the 1980s it was video games. Now it is social media. The pattern is so consistent that one might reasonably ask whether the problem lies with the technology or with the anxiety itself.

I have spent the past three years researching how teenagers actually use social media - not how adults imagine they use it - and my findings are reassuring. The vast majority of young people use these platforms to maintain existing friendships, share creative work, and access communities of interest that would otherwise be unavailable to them. A fifteen-year-old in a rural village can connect with other young musicians, artists, or writers across the country. A teenager questioning their identity can find support and understanding that their immediate environment may not provide.

Does social media carry risks? Of course. So does crossing the road. The question is not whether risks exist, but whether we respond to them with proportionate, evidence-based policy or with moral panic dressed up as concern.`

const P01_SOURCE_B_REF =
  'Professor Daniel Okafor, "The Myth of the Screen-Damaged Generation", New Statesman, 2024'

// Paper 02 - Environment
const P02_SOURCE_A = `I stood at the edge of what used to be Thornfield Meadow and tried to remember what it had looked like before the developers moved in. There had been wildflowers here - ox-eye daisies, red clover, meadow buttercups - and on summer evenings the air had hummed with insects. Now there were three hundred identical houses, a strip of turf that the brochure optimistically called a "village green," and a car park.

The loss of our green spaces is not merely an aesthetic problem. It is a public health emergency. Studies consistently demonstrate that access to nature reduces stress, improves mental health, and encourages physical activity. When we concrete over meadows and woodlands, we are not simply losing pleasant views; we are removing the very environments that keep people well. A 2023 report by Natural England found that communities with the least access to green space had significantly higher rates of depression and cardiovascular disease.

We tell ourselves that housing is more important, and of course people need homes. But this is a false choice. We can build the homes we need without destroying every scrap of natural habitat. What we lack is not space but imagination - and the political will to demand better of our developers.`

const P02_SOURCE_A_REF = 'Catherine Hargreaves, "The Last Meadow", The Guardian Weekend, 2024'

const P02_SOURCE_B = `The countryside, as we know it, is not a natural phenomenon but a human creation, shaped over centuries by farming, forestry, and deliberate landscape design. To speak of "preserving" it is therefore somewhat misleading: what we are really preserving is one particular version of the land, frozen at a moment that happens to coincide with our own nostalgia.

I do not say this to dismiss environmental concerns - I share them - but to introduce a note of honesty into a debate that is too often driven by sentimentality. When local residents campaign against new housing developments on the grounds that they will "destroy the character of the countryside," they are frequently defending a landscape that was itself created by destroying whatever came before it. The fields they love were once forests. The hedgerows were planted, not grown.

This does not mean we should build everywhere without restraint. It means we should make decisions based on ecological evidence rather than emotional attachment. Some green spaces are genuinely irreplaceable habitats; others are agriculturally degraded land of limited biodiversity. Treating them identically is not conservation. It is sentimentality.`

const P02_SOURCE_B_REF = 'Dr James Whitfield, "Landscape and Illusion", Prospect Magazine, 2023'

// Paper 03 - Education
const P03_SOURCE_A = `The school day as currently structured is an act of slow-motion cruelty. We take young people at the precise age when their brains are undergoing the most dramatic reorganisation since infancy, when their sleep cycles are biologically shifted towards later waking, and we force them into classrooms at half past eight in the morning to sit in rows and absorb information that many of them will never use again.

I spent twenty-five years as a headteacher, and for most of that time I enforced the system without questioning it. It was only after I retired that I had the freedom to ask: why? Why do we teach subjects in rigid fifty-minute blocks? Why do we test memory rather than understanding? Why do we sort children into hierarchies based on their ability to perform under exam conditions - a skill that correlates poorly with any measure of adult success?

The answer, I eventually concluded, is inertia. We teach this way because we have always taught this way. The exam system persists not because it produces well-educated citizens but because it produces measurable outcomes, and measurable outcomes are what governments require. We have confused measurement with meaning.`

const P03_SOURCE_A_REF = 'David Pennington, "The Exam Factory", Times Educational Supplement, 2024'

const P03_SOURCE_B = `There is a fashionable argument circulating in educational circles that exams are harmful, outdated, and should be replaced with something gentler and more holistic. I find this argument unconvincing. Not because exams are perfect - they are not - but because every proposed alternative is worse.

Continuous assessment sounds humane until you realise it means students are being assessed constantly, that every piece of work carries a grade, and that the pressure never lifts. Portfolio-based assessment sounds creative until you consider the opportunities for parental assistance, private tutoring, and outright plagiarism. Teacher assessment sounds fair until you examine the research on unconscious bias in marking.

Exams, for all their limitations, offer something that no other system provides: a level playing field. On the day of the exam, every student sits in the same room, with the same paper, under the same conditions. The child of a millionaire and the child of a cleaner face identical questions. No amount of private coaching can substitute for genuine understanding when you are alone with the paper. Exams are stressful, certainly. So is every worthwhile challenge in adult life. Perhaps what our children need is not less stress but better preparation for it.`

const P03_SOURCE_B_REF =
  'Professor Helen Marchetti, "In Defence of Examinations", The Spectator, 2024'

// Paper 04 - Health and Wellbeing
const P04_SOURCE_A = `We are, by any objective measure, the most health-conscious generation in history. We count our steps, track our sleep, monitor our heart rates, and photograph our meals. We have more nutritional information available to us than any previous civilisation. And yet we are, collectively, more anxious about our health than ever before.

This is not a coincidence. The wellness industry - now worth an estimated four trillion dollars globally - has a vested interest in making us feel that our bodies are perpetually in crisis. Every headline warns of a new dietary danger. Every influencer promotes a new supplement, detox, or elimination protocol. The message, repeated across a thousand platforms, is always the same: you are not well enough, and the solution can be purchased.

I watched my nineteen-year-old daughter spend three months following a diet she found online that promised to "reduce inflammation." She eliminated gluten, dairy, sugar, alcohol, and most fruit. She lost weight she did not need to lose. She became withdrawn and irritable. When I finally persuaded her to see our family doctor, he told her she was malnourished. She had been trying to be healthy. The industry that sold her this plan had made her ill.`

const P04_SOURCE_A_REF = 'Karen Brightwell, "The Wellness Trap", The Sunday Times Magazine, 2024'

const P04_SOURCE_B = `The human body is a mechanism of extraordinary resilience, capable of withstanding considerable abuse and recovering from injuries that would destroy any machine. And yet we persist in treating it as though it were made of glass - as though a single missed vitamin, a single night of poor sleep, a single meal of insufficient nutritional virtue might bring the whole structure crashing down.

Our grandparents did not count calories. They did not consult apps before deciding whether to eat bread. They worked physically demanding jobs, ate whatever was available, and most of them lived to respectable ages without once having heard the word "superfood." I do not suggest that nutritional science has taught us nothing - clearly it has - but I observe that the generation with the least nutritional knowledge was also the generation with the fewest eating disorders.

There is a point at which the pursuit of health becomes its own form of illness. When a person cannot eat a meal without calculating its macronutrient composition, when exercise becomes a punishment rather than a pleasure, when the body is treated not as a home but as a project - we have crossed a line. The Greeks had a word for the good life: eudaimonia. It did not involve protein shakes.`

const P04_SOURCE_B_REF = 'Martin Gallagher, "Bodies and Anxieties", The Dublin Review, 2023'

// Paper 05 - Urban Life
const P05_SOURCE_A = `I grew up on a council estate in east London, and I can tell you exactly when it stopped being a community and started being a postcode. It was the summer they demolished the youth centre. Before that, there had been somewhere to go - table tennis, a music room, adults who knew your name. After that, there was the street.

People who have never lived on an estate talk about them as though they are problems to be solved. They see the concrete, the graffiti, the broken lifts, and they conclude that the buildings themselves are the issue. Knock them down, they say. Build something better. But what made our estate difficult was never the architecture. It was the systematic withdrawal of every service that had once made it liveable: the youth workers, the caretakers, the community police officers, the library, the GP surgery. One by one, they disappeared, and nothing replaced them.

I do not romanticise estate life. It was hard, and sometimes it was frightening. But there was a solidarity born of shared circumstance that I have never encountered since - a willingness to help, to watch out for each other's children, to lend what you could not afford to give. That solidarity did not die naturally. It was killed, deliberately and methodically, by policies that treated communities as balance sheets.`

const P05_SOURCE_A_REF = 'Marcus Williams, "Concrete and Memory", Granta, 2024'

const P05_SOURCE_B = `The great city is, and always has been, the engine of civilisation. It is in cities that ideas collide, that strangers become collaborators, that the unexpected encounter on a street corner leads to the invention that transforms a generation. The countryside produces food; the city produces culture. This is not a value judgement but a historical observation, borne out across millennia and across every continent.

And yet the modern city seems determined to engineer the spontaneity out of urban life. Every new development is gated, monitored, surveilled. Public spaces are redesigned to discourage loitering - a word that once simply meant standing still and has been quietly reclassified as antisocial behaviour. Benches are fitted with armrests positioned to prevent sleeping. Walls are studded with metal spikes. The message is unmistakable: this space belongs to those who can afford it. Everyone else, move along.

The irony is considerable. The very qualities that made cities great - density, diversity, the democratic mixing of classes and cultures - are being systematically eliminated by a development model that treats public space as a problem and private ownership as the only solution.`

const P05_SOURCE_B_REF =
  'Professor Amira Hassan, "Who Owns the City?", London Review of Books, 2024'

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const ocrP1A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 01 - Social Media
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-01',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-01-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${P01_SOURCE_A_REF}\nSource B: ${P01_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-01-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four concerns the writer expresses about social media and young people.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P01_SOURCE_A,
            extractSource: P01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Students disappear into their phones during break times. 2. A student could not sleep for three weeks because of group chat anxiety. 3. Social media platforms are deliberately designed to be addictive. 4. Children are being treated as data points in an advertising algorithm.',
            },
            markScheme: ['1 mark per valid concern identified, maximum 4'],
          },
          {
            id: 'ocr-p1-01-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use the example of the Year 10 student to strengthen her argument?\n\nExplain using evidence from the text.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: P01_SOURCE_A,
            extractSource: P01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the example of the Year 10 student to show that social media is genuinely harmful. The detail that she "had not slept properly in three weeks" makes the problem feel real and serious. The student was only "fourteen years old" which makes the reader feel sympathy because she is very young. The short sentence stating her age is placed at the end of the paragraph for emphasis. This personal example makes the argument more convincing because it shows a real person being affected, not just statistics.',
              'Grade 6-7':
                'The anecdote functions as rhetorical evidence, transforming an abstract argument about digital harm into a specific, human narrative. The detail of insomnia lasting "three weeks" quantifies the damage with clinical precision, while the cause - "afraid of missing messages in her group chat overnight" - exposes the absurdity of a child losing sleep over social notifications. The declarative "She was fourteen years old" is structurally isolated as a sentence fragment, its brevity contrasting with the elaborate preceding description to deliver a moment of moral shock. By specifying "Year 10," Adeyemi draws on her professional authority as a teacher, positioning herself as an eyewitness rather than a commentator. The anecdote also implicitly answers potential counterarguments: this is not a vulnerable outlier but a mainstream student in a normal school, suggesting the problem is systemic.',
            },
            markScheme: [
              'Explains how the example supports the argument',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the anecdote',
              'Comments on the effect on the reader',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-01-q3',
            questionNumber: 3,
            questionText:
              'Read Source B. How does the writer use language and structure to present their perspective on social media and young people?\n\nAnalyse the techniques used and their effects.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P01_SOURCE_B,
            extractSource: P01_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a calm, reasonable tone to argue that worries about social media are exaggerated. He lists past panics - "television" in the 1950s and "video games" in the 1980s - to show that adults always worry about new technology. The rhetorical question "whether the problem lies with the technology or with the anxiety itself" makes the reader think differently. In the second paragraph, he uses positive examples like teenagers connecting with "musicians, artists, or writers" to show the benefits. The comparison "So does crossing the road" makes fears seem silly by comparing social media to something ordinary.',
              'Grade 6-7':
                'Okafor constructs his argument through a strategy of contextualisation and deflation. The opening paragraph establishes a historical pattern - television, video games, social media - using a tricolon that reduces each successive panic to a predictable iteration of the same impulse. The phrase "the worry always centres on whatever technology is newest and least understood" reframes concern as ignorance, subtly discrediting opponents without directly attacking them. The second paragraph deploys Okafor\'s research credentials as an authority claim, and the parenthetical distinction between how teenagers "actually use" social media and "how adults imagine they use it" creates an epistemological hierarchy - his knowledge is empirical, theirs is speculative. Structurally, the final paragraph performs a rhetorical pivot: the concessive "Does social media carry risks? Of course" acknowledges the opposition before the devastating analogy "So does crossing the road" trivialises it. The closing antithesis between "proportionate, evidence-based policy" and "moral panic dressed up as concern" frames the debate as rationality versus hysteria.',
              'Grade 8-9':
                'Okafor\'s argument operates through a sophisticated rhetoric of reasonableness that positions emotional responses to social media as themselves the pathology requiring diagnosis. The opening paragraph\'s historical litany functions not merely as context but as a diagnostic framework: by identifying a recurring "pattern" of technophobia, Okafor implies that the current anxiety is a symptom of adult psychology rather than a response to genuine harm. The interrogative "whether the problem lies with the technology or with the anxiety itself" performs a Copernican reversal, relocating the crisis from the young to their elders. The second paragraph\'s authority is carefully constructed: "three years researching" implies longitudinal rigour, while "how teenagers actually use social media" deploys the adverb "actually" to claim exclusive access to unmediated reality. The examples - rural musicians, questioning teenagers - are strategically chosen to invoke liberal values of access and inclusion, making opposition seem not merely wrong but regressive. The final paragraph\'s analogy between social media and road-crossing is the argument\'s most audacious move: it simultaneously acknowledges risk and renders it banal, foreclosing the possibility of proportionate alarm. The closing phrase "moral panic dressed up as concern" is devastatingly precise - "dressed up" implies deliberate performance, and the substitution of "concern" for genuine care suggests that opponents\' emotions are themselves inauthentic.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Comments on structural choices',
              'Uses subject terminology accurately',
              "Considers the writer's perspective and how it is conveyed",
              'Embeds evidence from the text',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-01-q4',
            questionNumber: 4,
            questionText:
              'Read both Source A and Source B. Compare how the two writers convey their different perspectives on social media and young people.\n\nIn your answer you should:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${P01_SOURCE_A}\n\n---\n\nSource B:\n${P01_SOURCE_B}`,
            extractSource: `${P01_SOURCE_A_REF} / ${P01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers discuss social media and young people, but they have opposite views. Source A argues that social media is harmful and needs regulation, while Source B argues that concerns are exaggerated. Source A uses a personal example - the Year 10 student - to make the reader feel worried, while Source B uses research evidence to reassure the reader. Source A compares social media to "tobacco and alcohol" to suggest it is dangerous, while Source B compares it to "crossing the road" to suggest the risks are normal. Source A uses an emotional, urgent tone, while Source B is calmer and more academic. Both writers use rhetorical questions, but for different purposes: Source A to challenge ("our children deserve better") and Source B to reframe the debate.',
              'Grade 6-7':
                'The two sources occupy diametrically opposed positions on the harm-spectrum, and their rhetorical strategies reflect this opposition with striking precision. Adeyemi writes from the authority of the classroom - her identity as "a secondary school teacher" grounds her argument in daily, embodied experience. Okafor writes from the authority of the academy - his "three years researching" claims systematic, objective knowledge. This creates an implicit hierarchy of evidence: lived experience versus data, anecdote versus study. Both are valid, but they appeal to different values. Adeyemi\'s central technique is the individual case study: the sleepless fourteen-year-old is designed to provoke empathy and moral urgency. Okafor\'s equivalent is the historical pattern - television, video games - designed to provoke scepticism and intellectual distance. Where Adeyemi reaches for alarming comparisons ("tobacco and alcohol"), Okafor deflates with banal ones ("crossing the road"). Structurally, both writers use a three-paragraph argument, but Adeyemi escalates from personal observation to industry critique to policy demand, whereas Okafor moves from historical context to empirical evidence to rhetorical dismissal. The effect is that Source A leaves the reader feeling they must act, while Source B leaves the reader feeling they must think - and each writer would argue that their imperative is the more important one.',
              'Grade 8-9':
                'The two sources construct opposing epistemologies of childhood risk, and in doing so reveal as much about the politics of expertise as about social media itself. Adeyemi\'s argument is built on a rhetoric of witness: "I watch my students," "a Year 10 student told me." The first person operates as moral testimony - she has seen the damage, and her professional proximity to young people authorises her alarm. Okafor\'s argument, by contrast, is built on a rhetoric of pattern-recognition: the historical litany of panics positions social media anxiety not as a response to unprecedented harm but as the latest manifestation of a recurring cultural neurosis. His research is presented as corrective - studying "how teenagers actually use social media" rather than "how adults imagine they use it" - creating an implicit accusation that Adeyemi\'s classroom observations are themselves a form of imagination. The writers\' analogies are perhaps the most revealing point of comparison. Adeyemi\'s comparison to "tobacco and alcohol" invokes regulatory frameworks designed to protect the vulnerable from corporate exploitation; Okafor\'s comparison to "crossing the road" invokes everyday risk management. The gap between these analogies is ideological: Adeyemi sees young people as victims of a system; Okafor sees them as agents navigating a world. Both deploy rhetorical questions, but to opposing ends: Adeyemi\'s are prosecutorial, demanding accountability; Okafor\'s are Socratic, demanding reflection. The fundamental disagreement is not about social media but about whether childhood is a state of vulnerability requiring protection or a state of capability requiring trust.',
            },
            markScheme: [
              'Compares perspectives with clear understanding of differences',
              'Analyses methods used by both writers',
              'Uses evidence from both sources',
              'Shows sustained comparative argument',
              'Top band: perceptive, synthesised comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-01-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-01-q5',
            questionNumber: 5,
            questionText:
              '"Social media does more harm than good to young people."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful article with: a sustained argument for or against; some persuasive techniques including rhetorical questions and evidence; appropriate register for a newspaper audience; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted article with: a sophisticated and nuanced argument; effective use of rhetorical devices, counter-argument, and evidence; a distinctive voice appropriate to broadsheet register; well-organised paragraphs with discourse markers; consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding article with: a compelling, original argument that moves beyond binary positions; masterful rhetorical control including irony, concession, and strategic analogy; a distinctive, authoritative voice; ambitious vocabulary deployed with precision; structural sophistication with a powerful concluding statement; technical virtuosity throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Communication is convincing; tone, style and register match purpose and audience; argument is structured with clear viewpoint; paragraphs are coherently linked',
              'Technical Accuracy (8 marks): Sentence demarcation is accurate; wide range of punctuation used; spelling is accurate including ambitious vocabulary; varied sentence forms used for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 02 - Environment
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-02',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-02-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${P02_SOURCE_A_REF}\nSource B: ${P02_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-02-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four negative consequences of losing green spaces that the writer describes.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P02_SOURCE_A,
            extractSource: P02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Loss of wildflowers and natural habitats. 2. Increased stress and worsened mental health. 3. Less encouragement for physical activity. 4. Higher rates of depression and cardiovascular disease in communities without green space.',
            },
            markScheme: ['1 mark per valid consequence identified, maximum 4'],
          },
          {
            id: 'ocr-p1-02-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use the opening description of Thornfield Meadow to strengthen her argument?\n\nExplain using evidence from the text.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: P02_SOURCE_A,
            extractSource: P02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes what Thornfield Meadow "used to" look like to show what has been lost. She lists specific wildflowers - "ox-eye daisies, red clover, meadow buttercups" - which makes the old meadow sound beautiful and natural. The contrast with "three hundred identical houses" and a "car park" makes the development sound ugly and soulless. The word "identical" suggests the houses have no character. The detail about the "village green" being described "optimistically" by the brochure shows the writer thinks the developers are dishonest. This personal memory makes the reader feel the loss emotionally.',
              'Grade 6-7':
                'The opening description operates as a rhetorical before-and-after that frames the entire argument through loss. The verb "tried to remember" positions the narrator as someone struggling to recover a vanished reality, establishing the meadow as already half-erased from consciousness. The tricolon of wildflowers - "ox-eye daisies, red clover, meadow buttercups" - is deliberately specific: naming the flowers individualises them, making their destruction feel particular rather than abstract. The sensory detail that "the air had hummed with insects" evokes a living ecosystem, its past tense marking an extinction. Against this, the development is described in language stripped of life: "three hundred identical houses," "a strip of turf," "a car park." The sardonic parenthetical about the brochure\'s optimistic "village green" introduces the theme of corporate dishonesty that will structure the rest of the argument. Structurally, this opening transforms a policy argument into a personal elegy, ensuring the reader approaches the subsequent statistics with emotion already engaged.',
            },
            markScheme: [
              'Explains how the description supports the argument',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the opening',
              'Comments on language choices and their effects',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-02-q3',
            questionNumber: 3,
            questionText:
              'Read Source B. How does the writer use language and structure to present their argument about green spaces and development?\n\nAnalyse the techniques used and their effects.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P02_SOURCE_B,
            extractSource: P02_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a logical, academic tone to challenge common views about the countryside. He argues that the countryside is "not a natural phenomenon but a human creation" which surprises the reader. The short sentences "The fields they love were once forests. The hedgerows were planted, not grown" are effective because they present facts simply. The writer uses words like "nostalgia" and "sentimentality" to suggest that people who oppose development are emotional rather than rational. The final paragraph draws a distinction between "irreplaceable habitats" and "agriculturally degraded land" to show that not all green spaces are equally valuable.',
              'Grade 6-7':
                'Whitfield constructs his argument through a strategy of philosophical reframing. The opening sentence\'s paradox - the countryside as "a human creation" - destabilises the conservationist position by demonstrating that what appears natural is in fact artificial. The noun "nostalgia" is deployed twice through implication, framing opposition to development as backward-looking rather than evidence-based. The concessive structure "I do not say this to dismiss... but to introduce a note of honesty" performs intellectual generosity while simultaneously accusing opponents of dishonesty. The second paragraph\'s historical reversal - "The fields they love were once forests" - uses parallel structure to demonstrate that landscape is always palimpsest, each layer obliterating the last. The short declarative "The hedgerows were planted, not grown" derives its force from the antithesis of "planted" and "grown," the passive voice implying human agency where the reader assumed nature. The final paragraph\'s distinction between "irreplaceable habitats" and "agriculturally degraded land" introduces a taxonomy of value that reframes blanket preservation as intellectually lazy. The closing sentence - "It is sentimentality" - is devastating in its brevity, its fragmentary structure enacting the dismissal it describes.',
              'Grade 8-9':
                'Whitfield\'s argument is an exercise in epistemological disruption, systematically dismantling the categories through which conservation discourse operates. The opening proposition - "The countryside, as we know it, is not a natural phenomenon but a human creation" - performs a defamiliarisation that renders the familiar landscape suddenly strange and contingent. The parenthetical "as we know it" is precisely calibrated: it concedes the existence of a countryside while insisting that our knowledge of it is constructed. The concessive structure of the second paragraph - "I do not say this to dismiss environmental concerns - I share them" - is a masterclass in rhetorical positioning, establishing the writer as a fellow traveller who has simply thought more carefully. The accusation of "sentimentality" operates at multiple levels: it is simultaneously a psychological diagnosis (feeling rather than thinking), an aesthetic judgement (preferring the pretty to the true), and a political critique (defending privilege disguised as principle). The historical argument - fields were forests, hedgerows were planted - deploys a recursive logic in which every act of preservation is revealed as a prior act of destruction, creating an infinite regress that undermines the very concept of an original landscape to which one might return. The final paragraph\'s taxonomy of green space - "genuinely irreplaceable habitats" versus "agriculturally degraded land of limited biodiversity" - claims scientific authority to adjudicate what the public debate has left to emotion, positioning the writer as the rational arbiter between extremes.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Comments on structural choices and progression',
              'Uses subject terminology accurately',
              "Considers the writer's perspective and methods",
              'Embeds evidence from the text',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-02-q4',
            questionNumber: 4,
            questionText:
              'Read both Source A and Source B. Compare how the two writers convey their different perspectives on the relationship between development and the natural environment.\n\nIn your answer you should:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${P02_SOURCE_A}\n\n---\n\nSource B:\n${P02_SOURCE_B}`,
            extractSource: `${P02_SOURCE_A_REF} / ${P02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers discuss green spaces and development but have different views. Source A argues that green spaces are essential and should be protected, while Source B argues that we should make decisions based on evidence, not emotion. Source A uses personal experience and emotional language to make the reader feel sad about the loss of Thornfield Meadow. Source B uses a more academic tone and historical facts. Source A uses statistics from Natural England to support her argument, while Source B challenges the idea that all green spaces are equally valuable. Both writers acknowledge the need for housing, but Source A calls it a "false choice" while Source B sees it as a matter of making informed decisions.',
              'Grade 6-7':
                'The two sources exemplify contrasting approaches to environmental argument: the elegiac and the analytical. Hargreaves opens with personal memory and sensory specificity - named wildflowers, humming insects - establishing green space as lived experience. Whitfield opens with philosophical proposition - "not a natural phenomenon but a human creation" - establishing landscape as intellectual construct. This difference in register reflects a deeper disagreement about what counts as evidence: for Hargreaves, the loss of a meadow is self-evidently tragic; for Whitfield, the assumption that it is tragic requires examination. Both writers use concession, but to opposite ends: Hargreaves concedes "people need homes" before arguing for coexistence; Whitfield concedes "I share them" regarding environmental concerns before arguing for differentiation. The sources\' use of other voices is also revealing: Hargreaves cites Natural England, an institutional authority that reinforces her position with data; Whitfield cites "local residents" only to undermine their campaigns as "sentimentality." Perhaps most significantly, the two writers construct opposing relationships between past and present: Hargreaves\'s past is a lost paradise to be mourned; Whitfield\'s past is an arbitrary snapshot to be examined. This temporal disagreement is the argument\'s real crux - whether landscape has inherent value or only the value we project onto it.',
            },
            markScheme: [
              'Compares perspectives with clear understanding of differences',
              'Analyses methods used by both writers',
              'Uses evidence from both sources',
              'Shows sustained comparative argument',
              'Top band: perceptive, synthesised comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-02-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-02-q5',
            questionNumber: 5,
            questionText:
              'Your local council is planning to build new homes on a green space near your school.\n\nWrite a speech to be delivered at a public meeting in which you argue whether this development should or should not go ahead.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful speech with: a sustained argument; direct address to the audience; some persuasive techniques including rhetorical questions and emotive language; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted speech with: sophisticated rhetorical techniques including tricolon, anaphora, and counter-argument; appropriate register for a public meeting; a compelling opening and memorable conclusion; consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding speech with: compelling argument that addresses complexity; masterful rhetorical control with strategic use of personal testimony, evidence, and emotional appeal; a distinctive, authoritative voice; structural sophistication building to a powerful call to action; technical virtuosity throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Communication is convincing; tone, style and register match purpose and audience; argument is structured with clear viewpoint; paragraphs are coherently linked',
              'Technical Accuracy (8 marks): Sentence demarcation is accurate; wide range of punctuation used; spelling is accurate including ambitious vocabulary; varied sentence forms used for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 03 - Education
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-03',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-03-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${P03_SOURCE_A_REF}\nSource B: ${P03_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-03-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four criticisms the writer makes of the current education system.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P03_SOURCE_A,
            extractSource: P03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. Students are forced into classrooms early in the morning despite their biology. 2. Subjects are taught in rigid fifty-minute blocks. 3. The system tests memory rather than understanding. 4. Children are sorted into hierarchies based on exam performance which does not predict adult success.',
            },
            markScheme: ['1 mark per valid criticism identified, maximum 4'],
          },
          {
            id: 'ocr-p1-03-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use their personal experience to make their argument more convincing?\n\nExplain using evidence from the text.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: P03_SOURCE_A,
            extractSource: P03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer mentions he "spent twenty-five years as a headteacher" which shows he has a lot of experience in education. He admits he "enforced the system without questioning it" for most of that time, which makes him seem honest rather than someone who always complained. The fact that he only started questioning the system after retirement suggests that people inside the system cannot speak freely. His use of questions - "why do we teach subjects in rigid fifty-minute blocks?" - shows he has thought carefully about these issues. His personal experience makes the argument convincing because he is criticising a system he was part of.',
              'Grade 6-7':
                'Pennington deploys his autobiography as a form of confessional authority. The detail of "twenty-five years" establishes long service - this is not an outsider\'s critique but an insider\'s reckoning. The admission that he "enforced the system without questioning it" functions as a mea culpa that paradoxically strengthens his credibility: he implicates himself in the failure, refusing the comfortable position of the lifelong rebel. The structural timing is significant - he could "only" question the system "after I retired," implying that institutional pressure silences even those in leadership positions. The interrogatives that follow ("Why do we teach subjects in rigid fifty-minute blocks? Why do we test memory rather than understanding?") are presented not as rhetorical flourishes but as genuine questions that his career prevented him from asking. The dash that introduces "a skill that correlates poorly with any measure of adult success" adds an empirical claim almost parenthetically, as though the evidence is so obvious it barely needs stating. By framing his argument as a personal journey from compliance to critique, Pennington makes the reader complicit: if a headteacher could not see the problem, how could anyone else?',
            },
            markScheme: [
              'Explains how personal experience supports the argument',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the autobiographical approach',
              'Comments on the effect on the reader',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-03-q3',
            questionNumber: 3,
            questionText:
              'Read Source B. How does the writer use language and structure to defend the examination system?\n\nAnalyse the techniques used and their effects.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P03_SOURCE_B,
            extractSource: P03_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a direct, confident tone to defend exams. She calls the argument against exams "fashionable" which suggests it is a trend rather than a serious idea. She lists alternatives - "continuous assessment," "portfolio-based assessment," "teacher assessment" - and shows problems with each one, which makes her argument seem well-researched. The phrase "a level playing field" is a metaphor that makes exams sound fair. She uses the image of "the child of a millionaire and the child of a cleaner" facing the same paper, which appeals to the reader\'s sense of fairness. The final sentence suggests exams prepare children for adult life.',
              'Grade 6-7':
                'Marchetti structures her defence through systematic elimination of alternatives, a strategy that transforms the argument from "exams are good" to "exams are the least bad option" - a more defensible position. The adjective "fashionable" in the opening sentence immediately frames anti-exam sentiment as ephemeral and trend-driven. The second paragraph\'s tripartite structure creates a pattern of raise-and-demolish: each alternative is introduced with its appealing quality ("sounds humane," "sounds creative," "sounds fair") before the conjunction "until" pivots to its fatal flaw. The repetition of "until" creates rhythmic inevitability, training the reader to anticipate disappointment. The third paragraph\'s central metaphor - "a level playing field" - is deliberately clichéd, its familiarity lending the argument the force of received wisdom. The socioeconomic pairing "the child of a millionaire and the child of a cleaner" is strategically emotive, co-opting the language of social justice to defend an institution more commonly attacked from that perspective. The final sentence\'s shift from educational to life argument - "so is every worthwhile challenge in adult life" - reframes exam stress as preparation rather than harm, closing on a note of pragmatic wisdom that implicitly characterises anti-exam campaigners as overprotective.',
              'Grade 8-9':
                'Marchetti\'s argument is a masterclass in the rhetoric of pragmatic realism, systematically dismantling idealism while occupying the moral high ground traditionally claimed by her opponents. The opening\'s dismissive "fashionable" performs social positioning: it aligns anti-exam sentiment with intellectual superficiality, implying that those who hold it are following a trend rather than thinking independently. The second paragraph\'s structure is devastatingly effective: each alternative assessment method is introduced through free indirect discourse - "sounds humane," "sounds creative" - that ventriloquises its advocates before the temporal conjunction "until" shatters the illusion. The parallelism of "sounds... until" creates a formal pattern that converts argumentative logic into aesthetic pleasure, making agreement feel inevitable. What is most sophisticated is Marchetti\'s appropriation of progressive language for conservative ends: "a level playing field," "the child of a millionaire and the child of a cleaner" - these are the images and values of social mobility, redeployed to defend an institution that progressives typically attack. The final rhetorical move - equating exam stress with the challenges of adult life - performs a philosophical reframing in which the elimination of difficulty becomes a form of neglect. The imperative structure of the conclusion, "Perhaps what our children need is not less stress but better preparation for it," uses the modal "perhaps" to soften what is in fact an absolute claim, demonstrating the controlled understatement that characterises the piece throughout.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Comments on structural choices and progression',
              'Uses subject terminology accurately',
              "Considers the writer's perspective and methods",
              'Embeds evidence from the text',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-03-q4',
            questionNumber: 4,
            questionText:
              'Read both Source A and Source B. Compare how the two writers convey their different perspectives on the education system and examinations.\n\nIn your answer you should:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${P03_SOURCE_A}\n\n---\n\nSource B:\n${P03_SOURCE_B}`,
            extractSource: `${P03_SOURCE_A_REF} / ${P03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers discuss the education system but disagree about exams. Source A argues that the system is outdated and that exams test the wrong skills, while Source B argues that exams are the fairest form of assessment. Source A uses personal experience as a headteacher to give authority, while Source B uses logical argument and examples of alternative systems. Source A\'s tone is questioning and reflective, using rhetorical questions like "why?", while Source B\'s tone is confident and direct. Source A blames "inertia" for the system continuing, while Source B sees its continuation as evidence of its value. Both writers are knowledgeable about education, but they use their knowledge in different ways.',
              'Grade 6-7':
                'The two sources represent fundamentally different relationships with institutional knowledge. Pennington writes as a repentant insider - his authority derives from complicity and subsequent awakening, his rhetoric is confessional and questioning. Marchetti writes as a combative defender - her authority derives from systematic analysis, her rhetoric is forensic and declarative. Both writers use professional experience, but where Pennington\'s twenty-five years lead to doubt, Marchetti\'s expertise leads to certainty. The sources\' differing treatments of alternatives are particularly revealing: Pennington asks questions without offering specific alternatives, creating a rhetoric of open possibility; Marchetti systematically destroys each alternative, creating a rhetoric of closed necessity. Their audiences are differently positioned: Pennington invites the reader on a journey of discovery; Marchetti instructs the reader in an argument already concluded. Pennington\'s accusation of "inertia" implies the system persists through laziness; Marchetti\'s defence implies it persists through merit. Perhaps most significantly, they disagree on what education is for: Pennington suggests it should produce "well-educated citizens"; Marchetti suggests it should produce resilient individuals ready for "every worthwhile challenge in adult life." The gap between these visions - civic versus individual, collective versus competitive - is the argument\'s deepest fault line.',
            },
            markScheme: [
              'Compares perspectives with clear understanding of differences',
              'Analyses methods used by both writers',
              'Uses evidence from both sources',
              'Shows sustained comparative argument',
              'Top band: perceptive, synthesised comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-03-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-03-q5',
            questionNumber: 5,
            questionText:
              '"Exams are an outdated way of measuring what young people know and can do."\n\nWrite a blog post for a student website in which you argue for or against this statement.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful blog post with: a sustained argument; appropriate informal-yet-informed register; some persuasive techniques; personal voice; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted blog post with: sophisticated argument drawing on personal experience and wider evidence; engaging opening that hooks the reader; appropriate register balancing accessibility with intellectual substance; consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding blog post with: a compelling, original argument that acknowledges complexity; distinctive voice combining personal conviction with intellectual rigour; ambitious vocabulary and syntactic variety; structural sophistication including a powerful conclusion; technical virtuosity throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Communication is convincing; tone, style and register match purpose and audience; argument is structured with clear viewpoint; paragraphs are coherently linked',
              'Technical Accuracy (8 marks): Sentence demarcation is accurate; wide range of punctuation used; spelling is accurate including ambitious vocabulary; varied sentence forms used for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 04 - Health and Wellbeing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-04',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-04-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${P04_SOURCE_A_REF}\nSource B: ${P04_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-04-q1',
            questionNumber: 1,
            questionText:
              'Read Source A. Identify four ways the writer suggests the wellness industry is harmful.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P04_SOURCE_A,
            extractSource: P04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                "1. It makes people feel their bodies are always in crisis. 2. Every headline warns of new dietary dangers. 3. Influencers promote supplements, detoxes, and elimination diets. 4. The writer's daughter became malnourished by following an online diet.",
            },
            markScheme: ['1 mark per valid point identified, maximum 4'],
          },
          {
            id: 'ocr-p1-04-q2',
            questionNumber: 2,
            questionText:
              'Read Source A. How does the writer use the story of her daughter to convey her argument about the wellness industry?\n\nExplain using evidence from the text.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: P04_SOURCE_A,
            extractSource: P04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses her daughter\'s story to show the real harm the wellness industry causes. She describes how her daughter "eliminated gluten, dairy, sugar, alcohol, and most fruit" which sounds extreme. The list of eliminated foods gets longer, making the diet seem more and more restrictive. The short sentences "She lost weight she did not need to lose. She became withdrawn and irritable" show the effects clearly. The doctor saying she was "malnourished" is shocking because she was trying to be healthy. The final two sentences create a powerful contrast: "She had been trying to be healthy. The industry that sold her this plan had made her ill."',
              'Grade 6-7':
                'The daughter\'s story functions as the argument\'s emotional and evidential climax, transforming industry critique into personal narrative. The accumulative list of eliminated foods - "gluten, dairy, sugar, alcohol, and most fruit" - enacts the progressive restriction it describes, each comma removing another element until the diet becomes visibly absurd. The age specification "nineteen-year-old" positions the daughter as legally adult but experientially vulnerable, occupying the gap between independence and wisdom that the wellness industry exploits. The three short declarative sentences - "She lost weight she did not need to lose. She became withdrawn and irritable" - are clinically understated, their emotional restraint lending them greater force than hyperbole could achieve. The doctor\'s diagnosis - "malnourished" - operates as the paragraph\'s volta: a single medical word that reframes the entire wellness narrative as pathological. The closing antithesis - "She had been trying to be healthy. The industry... had made her ill" - is devastatingly simple, the parallel structure forcing the reader to hold the intention and the outcome simultaneously. The use of "sold" introduces the commercial dimension, reminding the reader that someone profited from this harm.',
            },
            markScheme: [
              'Explains how the story supports the argument',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the personal narrative',
              'Comments on the effect on the reader',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-04-q3',
            questionNumber: 3,
            questionText:
              'Read Source B. How does the writer use language and structure to present their argument about health and the body?\n\nAnalyse the techniques used and their effects.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P04_SOURCE_B,
            extractSource: P04_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a humorous, conversational tone to argue we worry too much about health. He describes the body as having "extraordinary resilience" to show it is strong. He compares our attitude to treating the body "as though it were made of glass" which is a simile showing we are too careful. He contrasts our grandparents\' attitude with ours - they "did not count calories" or "consult apps" yet they lived to "respectable ages." The word "superfood" is used with sarcasm. The final reference to the Greek word "eudaimonia" and the joke about protein shakes ends the piece with humour while making a serious point about balance.',
              'Grade 6-7':
                'Gallagher constructs his argument through a rhetoric of deflation, systematically reducing health anxiety to absurdity. The opening sentence\'s praise of the body\'s "extraordinary resilience" establishes a baseline of physical competence against which modern anxieties appear neurotic. The simile "as though it were made of glass" transforms health-consciousness into a form of delusion. The conditional tricolon - "a single missed vitamin, a single night of poor sleep, a single meal of insufficient nutritional virtue" - uses anaphoric repetition of "a single" to ridicule the catastrophising tendency. The generational comparison in paragraph two is strategically nostalgic: grandparents serve as evidence that health was achievable without technology, and the sardonic observation that they lived "without once having heard the word superfood" positions modern wellness vocabulary as itself the pathology. The concessive "I do not suggest that nutritional science has taught us nothing - clearly it has" prevents dismissal as anti-science, while the counter-observation about eating disorders delivers the paragraph\'s most devastating claim. The final paragraph shifts register to philosophical reflection: the extended "when" anaphora builds to a climax of absurdity, and the closing classical allusion - "eudaimonia" - elevates the argument from the dietary to the existential. The final sentence, "It did not involve protein shakes," is timed as a punchline, its bathos designed to make the reader laugh and, in laughing, agree.',
              'Grade 8-9':
                'Gallagher\'s argument operates through a deliberately anachronistic rhetoric that positions the modern wellness obsession as a departure from timeless wisdom. The opening sentence performs an important reframing: by describing the body as "a mechanism of extraordinary resilience," the writer simultaneously celebrates physical robustness and introduces a mechanistic vocabulary that he will later use to critique the reduction of the body to a "project." The simile "as though it were made of glass" is effective precisely because glass is both precious and fragile - it captures the paradox of a culture that simultaneously idealises and fears the body. The generational comparison is Gallagher\'s most strategically complex move: it invokes a past that is partly real and partly mythologised, creating an authority of experience that resists statistical challenge. The devastating juxtaposition - "the generation with the least nutritional knowledge was also the generation with the fewest eating disorders" - establishes a causal implication (knowledge produces disorder) that the writer never explicitly claims, allowing the reader to draw the more radical conclusion independently. The final paragraph\'s anaphoric "when" clauses build with sermonic intensity, each adding a new dimension to the pathology: calculation, punishment, alienation from the self. The classical allusion to "eudaimonia" performs cultural authority - it positions the writer as heir to a tradition of humanistic thought - while the bathetic final clause, "It did not involve protein shakes," collapses the pretensions of wellness culture into a single, unanswerable image.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Comments on structural choices and progression',
              'Uses subject terminology accurately',
              "Considers the writer's perspective and methods",
              'Embeds evidence from the text',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-04-q4',
            questionNumber: 4,
            questionText:
              'Read both Source A and Source B. Compare how the two writers convey their perspectives on modern attitudes to health and the body.\n\nIn your answer you should:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${P04_SOURCE_A}\n\n---\n\nSource B:\n${P04_SOURCE_B}`,
            extractSource: `${P04_SOURCE_A_REF} / ${P04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that modern attitudes to health have gone too far, but they approach the topic differently. Source A focuses on the wellness industry as a harmful commercial force, using her daughter\'s story to show real damage. Source B takes a more philosophical approach, arguing that health anxiety is a cultural problem rather than an industry problem. Source A uses an angry, concerned tone - "our children deserve better" - while Source B uses humour, ending with a joke about protein shakes. Both writers use contrasts: Source A contrasts trying to be healthy with becoming ill; Source B contrasts modern anxiety with grandparents\' simplicity. Source A blames the industry; Source B blames our attitude.',
              'Grade 6-7':
                'The two sources share a diagnosis - that modern health culture has become pathological - but differ significantly in their identification of the cause and in their rhetorical strategies. Brightwell writes as a parent, and her argument is structured around maternal testimony: the daughter\'s malnourishment provides both emotional power and evidential specificity. Gallagher writes as a cultural critic, and his argument is structured around historical and philosophical perspective: grandparents, the Greeks, the long view of human resilience. Both writers use irony, but of different kinds: Brightwell\'s irony is tragic (trying to be healthy made her daughter ill), while Gallagher\'s is comic (protein shakes and eudaimonia). This tonal difference reflects a deeper divergence in their analysis of power. Brightwell identifies a specific villain - the "four trillion dollar" wellness industry - creating a narrative of exploitation in which consumers are victims. Gallagher identifies no villain; his argument suggests that the problem is within us, a cultural disposition towards anxiety that predates and exceeds any individual industry. The most revealing comparison is in their proposed solutions: Brightwell implies regulation (the industry "sold" her daughter a harmful product); Gallagher implies wisdom (we need to rediscover what the Greeks knew). One locates the answer in political action; the other in philosophical reflection.',
            },
            markScheme: [
              'Compares perspectives with clear understanding of similarities and differences',
              'Analyses methods used by both writers',
              'Uses evidence from both sources',
              'Shows sustained comparative argument',
              'Top band: perceptive, synthesised comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-04-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-04-q5',
            questionNumber: 5,
            questionText:
              '"Young people today are under too much pressure to look and feel perfect."\n\nWrite a letter to the editor of a health magazine in which you argue for or against this view.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful letter with: appropriate format including salutation and sign-off; a sustained argument; some persuasive techniques; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted letter with: sophisticated argument drawing on personal experience and wider evidence; appropriate formal register for a magazine editor; effective use of rhetorical devices and counter-argument; consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding letter with: a compelling, nuanced argument that goes beyond simple agreement or disagreement; distinctive voice combining passion with restraint; ambitious vocabulary and syntactic variety; structural sophistication; impeccable letter conventions; technical virtuosity throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Communication is convincing; tone, style and register match purpose and audience; argument is structured with clear viewpoint; paragraphs are coherently linked',
              'Technical Accuracy (8 marks): Sentence demarcation is accurate; wide range of punctuation used; spelling is accurate including ambitious vocabulary; varied sentence forms used for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 05 - Urban Life
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p1-05',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-05-reading',
        title: 'Section A: Reading',
        description: `Read the two source texts carefully. Then answer all the questions in this section.\n\nSource A: ${P05_SOURCE_A_REF}\nSource B: ${P05_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-05-q1',
            questionNumber: 1,
            questionText:
              "Read Source A. Identify four things that changed on the writer's estate after the youth centre was demolished.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: P05_SOURCE_A,
            extractSource: P05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. There was nowhere for young people to go except the street. 2. Youth workers disappeared. 3. The community police officers were removed. 4. The library and GP surgery also disappeared.',
            },
            markScheme: ['1 mark per valid change identified, maximum 4'],
          },
          {
            id: 'ocr-p1-05-q2',
            questionNumber: 2,
            questionText:
              "Read Source A. How does the writer use their personal experience of estate life to challenge outsiders' perceptions?\n\nExplain using evidence from the text.",
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: P05_SOURCE_A,
            extractSource: P05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer says "people who have never lived on an estate talk about them as though they are problems to be solved." This challenges the view that estates are just bad places. He lists what the youth centre offered - "table tennis, a music room, adults who knew your name" - to show it was a proper community. He argues that the problem was not the buildings but the removal of services. He also shows positive things about estate life: "a solidarity born of shared circumstance" and people who looked after each other\'s children. The final sentence blames "policies" rather than residents for destroying the community.',
              'Grade 6-7':
                'Williams deploys his personal history as a counter-narrative to dominant media representations of estate life. The opening sentence\'s precision - "I can tell you exactly when it stopped being a community" - positions him as a witness whose specificity challenges outsiders\' generalisations. The list of youth centre offerings - "table tennis, a music room, adults who knew your name" - is strategically modest: these are not grand facilities but small, human-scale provisions, and their loss is therefore all the more poignant. The writer directly confronts outsiders in paragraph two: "People who have never lived on an estate" excludes them from authority, while the list of what they see - "the concrete, the graffiti, the broken lifts" - mirrors and mocks their superficial perception. The structural argument is powerful: the estate\'s problems are attributed not to its residents or its architecture but to "the systematic withdrawal of every service." The word "systematic" is crucial - it implies deliberate policy rather than accidental decline. The final paragraph\'s concessive "I do not romanticise estate life. It was hard, and sometimes it was frightening" earns the right to the celebration that follows, while the closing metaphor of communities as "balance sheets" indicts a worldview that can only measure value in financial terms.',
            },
            markScheme: [
              'Explains how personal experience challenges perceptions',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the insider perspective',
              'Comments on the effect on the reader',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-05-q3',
            questionNumber: 3,
            questionText:
              'Read Source B. How does the writer use language and structure to argue that modern cities are failing their residents?\n\nAnalyse the techniques used and their effects.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: P05_SOURCE_B,
            extractSource: P05_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer opens by praising cities as "the engine of civilisation" before criticising how modern cities have gone wrong. She lists ways public spaces are made unwelcoming - "gated, monitored, surveilled" and benches with armrests to stop sleeping. The phrase "move along" sounds like a police command, showing how cities treat people. She uses the word "irony" to point out that cities are destroying the qualities that made them great. The contrast between what cities were (places of "density, diversity, the democratic mixing") and what they are becoming (private, exclusive) is effective.',
              'Grade 6-7':
                'Hassan structures her argument as a narrative of decline from urban ideal to urban betrayal. The opening paragraph\'s celebration of the city as "the engine of civilisation" establishes a standard against which the modern reality will be measured and found wanting. The tricolon "ideas collide... strangers become collaborators... the unexpected encounter" presents urban life as inherently creative, its vitality inseparable from its chaos. The second paragraph performs the fall: the verbs "gated, monitored, surveilled" form a progressive intensification of control, while the parenthetical redefinition of "loitering" - "a word that once simply meant standing still" - demonstrates how language itself has been weaponised against the public. The physical details - armrested benches, spiked walls - function as metonyms for a broader hostility, their specificity grounding the abstract argument in tangible reality. The imperative "move along" is ventriloquised corporate authority, its colloquial directness contrasting with Hassan\'s academic register to dramatic effect. The final paragraph\'s invocation of "irony" is structurally positioned as the argument\'s key insight: the very qualities being destroyed - "density, diversity, the democratic mixing of classes and cultures" - are what made cities valuable. The closing noun phrase "private ownership as the only solution" exposes the ideological assumption driving development, its article "the only" revealing the false inevitability of the process.',
              'Grade 8-9':
                'Hassan\'s argument is constructed as a classical tragedy of the city, moving from celebration to corruption to lament. The opening paragraph\'s grandiloquent register - "the engine of civilisation," "across millennia and across every continent" - deliberately invokes the tradition of urban panegyric, establishing the city as an object of reverence before demonstrating its desecration. The binary "The countryside produces food; the city produces culture" is strategically reductive, a provocation designed to establish the stakes of what follows. The second paragraph enacts the corruption through a catalogue of anti-civic design: "gated, monitored, surveilled" progresses from physical barrier to technological observation to state control, each participle implying a more intimate violation of public freedom. Hassan\'s analysis of "loitering" performs a micro-history of linguistic appropriation - the transformation of a neutral verb into a quasi-criminal act becomes a synecdoche for the larger transformation of public space into controlled space. The physical details - armrested benches, metal spikes - are chosen for their dual function as design features and as weapons, their euphemistic integration into urban furniture making the violence they represent all the more insidious. The final paragraph\'s "irony" is not merely rhetorical but structural: the essay\'s opening celebration of urban diversity becomes, retrospectively, a eulogy for what has been lost, and the identification of "density, diversity, the democratic mixing of classes and cultures" as simultaneously the city\'s historical achievement and its current casualty creates a temporal loop in which the past indicts the present.',
            },
            markScheme: [
              'Analyses language techniques and their effects',
              'Comments on structural choices and progression',
              'Uses subject terminology accurately',
              "Considers the writer's perspective and methods",
              'Embeds evidence from the text',
              'Top band: perceptive, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-05-q4',
            questionNumber: 4,
            questionText:
              'Read both Source A and Source B. Compare how the two writers convey their perspectives on communities and urban spaces.\n\nIn your answer you should:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${P05_SOURCE_A}\n\n---\n\nSource B:\n${P05_SOURCE_B}`,
            extractSource: `${P05_SOURCE_A_REF} / ${P05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that communities in urban areas are being damaged, but they focus on different aspects. Source A writes about a specific council estate and uses personal memory, while Source B writes about cities in general and uses academic argument. Source A blames government policies for removing services, while Source B blames developers for privatising public space. Both writers feel that something valuable is being destroyed for profit. Source A\'s tone is personal and emotional - "I grew up on a council estate" - while Source B\'s tone is more formal and intellectual. Both use lists to show what has been lost: Source A lists services (youth workers, library, GP surgery) and Source B lists the qualities of good cities (density, diversity, mixing of classes).',
              'Grade 6-7':
                'The two sources converge on a shared thesis - that urban community is being systematically dismantled - but approach it from radically different positions of experience and authority. Williams writes from the ground: his estate is named, his memories are specific, his authority is biographical. Hassan writes from the academy: her cities are theoretical, her analysis is systemic, her authority is intellectual. This difference in scale produces different rhetorics of loss. Williams mourns a particular community - the youth centre, Mrs Thompson, the table tennis - and his argument derives its power from the disproportion between these modest, human-scale provisions and the forces that destroyed them. Hassan mourns an idea - the city as democratic space - and her argument derives its power from the historical grandeur of what is being betrayed. Both writers identify a similar villain: the reduction of human community to economic calculation. Williams\'s "balance sheets" and Hassan\'s "private ownership as the only solution" point to the same ideological framework. But their proposed counter-values differ: Williams offers solidarity born of "shared circumstance" - a working-class virtue; Hassan offers "the democratic mixing of classes and cultures" - a liberal ideal. The two sources are therefore not merely complementary but reveal a tension within progressive urbanism: between the defence of existing communities and the celebration of cosmopolitan mixing, which are not always the same thing.',
            },
            markScheme: [
              'Compares perspectives with clear understanding of similarities and differences',
              'Analyses methods used by both writers',
              'Uses evidence from both sources',
              'Shows sustained comparative argument',
              'Top band: perceptive, synthesised comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-05-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer the question below.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'ocr-p1-05-q5',
            questionNumber: 5,
            questionText:
              '"Every town and city should have free, open public spaces where people of all ages and backgrounds can gather."\n\nWrite an article for your local newspaper in which you argue for or against this view.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful article with: a sustained argument; appropriate register for a local newspaper; some persuasive techniques including examples and rhetorical questions; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted article with: sophisticated argument balancing idealism with practical consideration; effective use of local examples and wider evidence; appropriate journalistic register; consistent technical accuracy with varied sentence structures.',
              'Grade 8-9':
                'An outstanding article with: a compelling argument that addresses the political, social, and economic dimensions of public space; distinctive voice combining conviction with nuance; ambitious vocabulary and syntactic variety; structural sophistication building to a memorable conclusion; technical virtuosity throughout.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Communication is convincing; tone, style and register match purpose and audience; argument is structured with clear viewpoint; paragraphs are coherently linked',
              'Technical Accuracy (8 marks): Sentence demarcation is accurate; wide range of punctuation used; spelling is accurate including ambitious vocabulary; varied sentence forms used for effect',
            ],
          },
        ],
      },
    ],
  },
]
