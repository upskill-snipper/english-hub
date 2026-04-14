// @ts-nocheck
// ─── Cambridge IGCSE Language A / Language B Mock Exams Set 2 ───────────────
// Additional Cambridge IGCSE English Language Mock Exams
// Paper 1: Reading (80 marks, 2 hours) - 3 mock exams
// Paper 2: Directed Writing and Composition (80 marks, 2 hours) - 3 mock exams

import type { MockExamPaper } from './mock-exams'

// ═════════════════════════════════════════════════════════════════════════════
// PAPER 1: READING PASSAGES (80 marks, 2 hours) - MOCK EXAMS 4-6
// ═════════════════════════════════════════════════════════════════════════════

// ─── Paper 1, Mock 4: Source Passages ────────────────────────────────────────

const P1_M4_PASSAGE_A = `The rise of artificial intelligence has sparked both excitement and profound anxiety. We stand at a technological crossroads where machines can now perform tasks that were once exclusively human: writing prose, creating visual art, engaging in sophisticated conversation, even making decisions in medical diagnoses and criminal justice. These capabilities represent extraordinary achievements in computer science and mathematics. Yet they also raise unsettling questions about the future of human labour, creativity, and purpose.

Proponents of AI argue that it will free humans from tedious and dangerous work, allowing us to focus on more meaningful activities. Just as the invention of the washing machine liberated women from hours of manual labour, AI might liberate us from repetitive cognitive tasks. Perhaps we could spend more time on art, philosophy, education, and human connection. This optimistic vision assumes that society will smoothly transition to this new world, that displaced workers will find new employment, and that the benefits will be broadly distributed.

However, the historical precedent is not encouraging. The Industrial Revolution did eventually create new types of work, but the transition was brutal. Entire communities were devastated by technological change. Livelihoods disappeared faster than new opportunities emerged. Workers and communities had no safety net, no retraining programmes, no social support. We have created far more sophisticated social systems now, but we have also created far more sophisticated inequalities. AI might concentrate wealth more dramatically than any technology in history.

The deepest concern is not economic but existential. For centuries, human labour and creation have been central to our sense of identity and meaning. Work is not merely how we survive; it is how we contribute to society and define ourselves. If machines can do everything better, faster, and cheaper than humans, what is our role? This is not a problem to be solved by economics alone. It is a challenge to how we construct meaning in human life.`

const P1_M4_PASSAGE_B = `Urban parks are among the most valuable resources in modern cities, yet they are chronically underfunded and neglected. These green spaces serve multiple essential functions: they provide recreation and exercise opportunities, improve mental and physical health, filter air pollution, reduce flooding, support biodiversity, and improve the aesthetic and social quality of urban life. A growing body of research demonstrates that access to parks correlates with lower rates of depression, anxiety, and obesity. Yet despite this evidence, parks are systematically starved of resources.

The problem is one of economics and political priority. Parks generate no revenue. They do not produce GDP. They do not contribute to the metrics by which we typically measure success in capitalist societies. A pristine park is essentially invisible to policymakers obsessed with economic growth. Meanwhile, wealthy neighbourhoods lobby for park improvements while poor neighbourhoods watch their parks deteriorate. The result is that parks often exacerbate existing inequality rather than alleviating it.

The solution requires cities to value parks differently. Parks must be understood as essential infrastructure, like water systems or electrical grids. Cities should invest in parks with the same commitment they invest in roads and buildings. This is not a luxury but a necessity for maintaining liveable, healthy cities. Moreover, parks should be designed with intention to serve all communities equitably, not merely those with the loudest voices or the deepest pockets.

The surprising truth is that good parks are remarkably cost-effective. A small investment in park maintenance prevents much larger expenses in healthcare, flood management, and crime prevention. Every pound spent on parks returns multiple pounds in health benefits and economic value. This calculation should satisfy even the most hardened fiscal conservative. Yet parks remain underfunded because their benefits are diffuse, long-term, and difficult to quantify in traditional economic terms.`

// ─── Paper 1, Mock 5: Source Passages ────────────────────────────────────────

const P1_M5_PASSAGE_A = `The smartphone has become an extension of human consciousness. Billions of people carry these devices everywhere, consulting them hundreds of times per day. We use smartphones to navigate physical space, make decisions about what to eat, remember our friends' birthdays, and even to fall asleep. We have outsourced functions of memory, navigation, and decision-making to these devices. This transformation has happened so rapidly that we have barely begun to understand its consequences.

Defenders of smartphone technology argue that it extends human capability. We can access the accumulated knowledge of humanity instantaneously. We can maintain relationships across great distances. We can document and share our experiences with others. These are genuine enhancements to human experience. Yet the benefits come with hidden costs that we are only beginning to measure.

Attention is the fundamental currency of human consciousness, and smartphones are designed to capture and commodify it. The engineers and designers who create these devices employ sophisticated techniques to maximise engagement: infinite scroll, notifications, social validation through likes and comments. These techniques exploit psychological vulnerabilities the same way that junk food exploits our taste buds. We are offered something that feels good in the moment but damages our long-term wellbeing.

The most insidious effect is not addiction in the technical sense but the erosion of our capacity for deep attention. Reading a lengthy book, having a genuine conversation, pursuing a difficult intellectual task—all of these require sustained attention. Smartphones fragment our attention into microseconds of engagement with multiple platforms. Studies show that even the mere presence of a smartphone reduces cognitive performance. We are creating a generation that may have lost the capacity for the kind of sustained thought that created human civilisation.

This is not a problem that can be solved by individual willpower. The devices are designed by brilliant people using billions of dollars in research funding specifically to make them addictive. Complaining that individuals lack discipline is like complaining that people lack willpower in resisting junk food in an environment of aggressive marketing and engineered products. The solution requires regulation and design changes that prioritise human wellbeing over engagement metrics.`

const P1_M5_PASSAGE_B = `Language is the primary architecture through which humans construct reality. The words available to us shape what we can think and perceive. Languages that have multiple words for different types of snow enable speakers to notice distinctions about snow that speakers of languages with a single word cannot perceive. Languages that have no future tense may affect how speakers conceptualise planning and causality. This hypothesis, known as linguistic relativity, suggests that language does not merely express thought but actually constitutes it.

The implications are profound. If language shapes reality, then the loss of languages is the loss of particular ways of experiencing and understanding the world. Every language that dies takes with it unique conceptual frameworks, metaphors, and ways of categorising human experience. We are in the midst of a linguistic extinction event: approximately one language dies every nine days. By the end of this century, half of the world's seven thousand languages will have disappeared.

The loss is not merely cultural but cognitive. Languages encode knowledge that has been accumulated over millennia. Indigenous languages contain sophisticated ecological knowledge about local plants, animals, and weather patterns accumulated through careful observation across countless generations. This knowledge is valuable not merely for cultural preservation but for addressing contemporary challenges like climate change and biodiversity loss.

Yet language preservation is not viewed as a priority. Schools systematically eliminate minority languages in favour of dominant languages. Children are punished for speaking their home languages and encouraged to adopt the language of the dominant culture. This is portrayed as progress, as creating opportunities for economic advancement. But it comes at the cost of erasing distinctive human knowledge and ways of understanding the world.

The tragedy is that this linguistic impoverishment impoverishes us all. We lose not merely the languages but the possibilities of thought and perception they enable. We create a world where humanity thinks in increasingly similar ways, according to the categories provided by whichever languages remain dominant.`

// ─── Paper 1, Mock 6: Source Passages ────────────────────────────────────────

const P1_M6_PASSAGE_A = `The prison system in many developed countries has become a mechanism of social control targeting specific populations rather than a genuine apparatus of justice. The statistics are stark: the United States incarcerates approximately 650 people per 100,000 of population, a rate six to ten times higher than other wealthy democracies. This incarceration does not fall equally across the population. Black men are incarcerated at roughly five times the rate of white men, despite committing crimes at similar rates. Poor people are massively overrepresented, not because they commit more crimes but because they cannot afford adequate legal representation and are more likely to be charged and convicted.

The stated purpose of incarceration is threefold: punishment, rehabilitation, and public safety. Yet modern prisons achieve none of these objectives. They are places where human beings are subjected to extreme deprivation, violence, and psychological torment. Rehabilitation programmes are underfunded and inadequate. Recidivism rates are extremely high, indicating that prisons do not reduce crime. The only objective that prisons consistently achieve is punishment—and they inflict it indiscriminately on the poor and racial minorities.

The root problem is that prisons are viewed as a solution to poverty, mental illness, and addiction—conditions that require healthcare, education, and social support. Instead of addressing these causes, we incarcerate the people suffering from them. We turn human suffering into a criminal problem to be locked away rather than a social problem to be addressed. This approach fails on its own terms: incarceration does not reduce crime.

Substantial evidence suggests that alternatives to incarceration—rehabilitation programmes, education, mental health services, addressing root causes of crime—are more effective and far more humane. Countries with lower incarceration rates and more investment in social support have lower crime rates. Yet prisons persist partly because they serve a function beyond justice: they serve as a mechanism of control, removing from society the people deemed inconvenient or threatening.`

const P1_M6_PASSAGE_B = `Food production is the largest driver of biodiversity loss on Earth. Industrial agriculture requires vast monocultures—expanses of single crops covering thousands of hectares—which eliminate habitat for wild animals and plants. Pesticides poison ecosystems and kill the insects that pollinate crops. Factory farming concentrates thousands of animals in horrible conditions, creating breeding grounds for disease and generating massive environmental pollution through waste. Meanwhile, one-third of all food produced globally is wasted, much of it perfectly edible, discarded by retailers and consumers who prioritise appearance over nutrition.

This system is simultaneously destructive to the environment and inadequate for human nutrition. Billions of people suffer from hunger and malnutrition. Meanwhile, wealthy countries produce massive surpluses of cheap calories in the form of highly processed foods that contribute to obesity and diet-related disease. We have created a food system that simultaneously starves people and poisons them.

The problem is not scarcity but distribution and production methods. We produce enough food to feed everyone on Earth adequately. The problem is that food is produced for profit, not for human need. Foods that are cheap to produce but nutritionally poor are heavily marketed to poor communities. Foods that are nutritious but unprofitable to produce are not grown. The agricultural system is optimised for corporate profit, not human health or environmental sustainability.

Solutions exist. Regenerative agriculture, which works with natural ecosystems rather than against them, produces food sustainably while restoring soil health and supporting biodiversity. Small-scale farming, local food systems, and crop diversity all improve resilience and sustainability. Yet these approaches are marginalised by a system dominated by massive agricultural corporations. Governments subsidise industrial agriculture while failing to support sustainable alternatives.

The transition to a genuinely sustainable food system requires not merely individual consumer choices but systemic change. It requires governments to stop subsidising destructive industrial agriculture. It requires investment in sustainable farming methods and local food systems. It requires valuing food security and environmental health more highly than agricultural profits.`

// ═════════════════════════════════════════════════════════════════════════════
// PAPER 2: DIRECTED WRITING AND COMPOSITION (80 marks, 2 hours) - MOCK EXAMS 4-6
// ═════════════════════════════════════════════════════════════════════════════

// ─── Paper 2, Mock 4: Source Materials ───────────────────────────────────────

const P2_M4_SOURCE_A = `According to a recent report from the World Health Organisation, air pollution causes approximately 7 million premature deaths annually—making it one of the leading causes of preventable death globally. Air pollution is not evenly distributed; it predominantly affects low-income communities and developing countries with weak environmental regulations.

The major sources of air pollution are well understood: vehicle emissions, industrial facilities, power plants, and residential heating. Developed countries have implemented regulations that have significantly reduced pollution levels in recent decades. However, pollution remains a significant health threat. Moreover, in many developing countries, pollution has actually increased as industrialisation accelerates without corresponding environmental protections.

The health effects are severe: respiratory disease, heart disease, stroke, and cancer. Children exposed to high levels of air pollution show reduced lung development. Elderly people are particularly vulnerable. Even in wealthy countries with relatively low pollution, pollution continues to cause significant health damage. Studies suggest that reducing air pollution to safe levels would be one of the most effective public health interventions available.

The solution requires a combination of approaches: transitioning to renewable energy, improving public transportation, regulating industrial emissions, and developing cleaner technologies. Some countries have made substantial progress; others lag far behind.`

const P2_M4_DIRECTED_TASK = `You are writing for a health and environmental magazine. You have read the report on air pollution and health (Source A). Write an article (approximately 450-550 words) persuading your readers that air pollution is a serious health issue deserving immediate action. You should:
- Present compelling evidence about air pollution's health effects
- Explain who is most vulnerable and why pollution is an equity issue
- Propose concrete actions that individuals and governments should take
- Use persuasive techniques to engage your audience`

// ─── Paper 2, Mock 5: Source Materials ───────────────────────────────────────

const P2_M5_SOURCE_A = `A coalition of technology companies and civil liberties groups has raised concerns about facial recognition technology being deployed by law enforcement and government agencies. The technology can identify individuals with remarkable accuracy, but it also enables mass surveillance at unprecedented scale. Civil liberties advocates worry that governments might use the technology to monitor protests, track activists, or suppress political opposition.

Law enforcement agencies argue that facial recognition is a valuable tool for finding criminals, missing persons, and suspects. They claim that with proper oversight and regulation, the technology can be deployed responsibly to enhance public safety without violating privacy rights.

However, studies have shown that facial recognition algorithms are significantly more likely to misidentify people with dark skin tones, particularly women. This raises concerns that the technology could increase racial bias in the criminal justice system. Moreover, no clear regulatory framework currently exists to ensure responsible use of the technology.`

const P2_M5_DIRECTED_TASK = `You are a policy advisor to a local government considering whether to deploy facial recognition technology for law enforcement purposes. You have read the report on facial recognition (Source A). Write a memo (approximately 400-500 words) to your city council recommending whether they should or should not deploy facial recognition technology. You should:
- Clearly state your recommendation and provide strong justification
- Address both the potential benefits and serious concerns
- Acknowledge the strongest arguments from those who disagree with you
- Propose conditions or safeguards if you believe the technology should be deployed
- Use appropriate memo format with clear structure`

// ─── Paper 2, Mock 6: Source Materials ───────────────────────────────────────

const P2_M6_SOURCE_A = `A debate has emerged about whether universities should prioritise academic excellence or social diversity in admissions decisions. Universities have traditionally selected students based primarily on academic performance. However, research shows that family background, school quality, and socioeconomic status significantly affect academic performance. Students from wealthy backgrounds typically have access to better schools, tutoring, and test preparation, giving them substantial advantages in competitive admissions processes.

Advocates for diversification argue that universities should consider socioeconomic background and other factors beyond test scores. They argue that diverse student bodies create better educational environments for all students. They also argue that higher education should serve as an engine of social mobility, enabling talented students from disadvantaged backgrounds to advance.

Critics argue that prioritising anything other than academic merit undermines educational excellence. They worry that admissions decisions based on background characteristics amount to discrimination. They argue that universities should remain meritocratic institutions focused on identifying the most talented students regardless of background.

However, defenders of diverse admissions note that "merit" is not a purely objective measure. Academic performance depends on opportunity, resources, and chance—not merely inherent ability. A student with excellent performance from a poorly resourced school may have greater underlying talent than a student with slightly higher grades from a wealthy school with extensive resources.`

const P2_M6_DIRECTED_TASK = `You are writing for an education policy journal. You have read the debate about university admissions (Source A). Write an opinion article (approximately 450-550 words) arguing for a particular approach to university admissions. You should:
- Clearly state your position on how universities should make admissions decisions
- Support your argument with evidence and logical reasoning
- Acknowledge and address the strongest arguments from those who disagree
- Explain how your proposed approach would affect students, universities, and society
- Use persuasive techniques to convince your readers`

// ═════════════════════════════════════════════════════════════════════════════
// EXPORT EXAM ARRAY
// ═════════════════════════════════════════════════════════════════════════════

export const igcseLangMocksSet2: MockExamPaper[] = [
  // ═════════════════════════════════════════════════════════════════════════
  // PAPER 1: READING & COMPREHENSION (80 marks, 2 hours)
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'igcse-lang-p1-mock-04',
    board: 'IGCSE',
    paperNumber: 1,
    title: 'Cambridge IGCSE English Language - Paper 1 Mock Exam 4',
    subtitle: 'Reading and Comprehension',
    code: '0500/11 / 0990/11',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'igcse-lang-p1-m4-reading',
        title: 'Reading Comprehension Section',
        description: 'Answer all questions on the answer sheet provided. Read the passages carefully and answer the questions in the spaces provided.',
        totalMarks: 80,
        suggestedTimeMinutes: 120,
        questions: [
          {
            id: 'igcse-lang-p1-m4-q1',
            questionNumber: 1,
            questionText: `According to Passage A, what are the main concerns about artificial intelligence mentioned in the passage? Identify three concerns.`,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M4_PASSAGE_A,
            extractSource: 'Passage A: The Rise of Artificial Intelligence',
            modelAnswers: {
              fullMark: '1. Loss of human jobs and economic displacement. 2. Concentration of wealth and increased inequality. 3. Existential concern about human identity and meaning if machines can do everything humans can do.',
              partialMarks: ['2 marks for identifying concern about job losses', '2 marks for identifying concern about wealth concentration', '2 marks for identifying existential concerns about human purpose and identity']
            }
          },
          {
            id: 'igcse-lang-p1-m4-q2',
            questionNumber: 2,
            questionText: `Explain how the writer uses the example of the Industrial Revolution to support their argument about AI.`,
            marks: 5,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M4_PASSAGE_A,
            extractSource: 'Passage A: The Rise of Artificial Intelligence',
            modelAnswers: {
              fullMark: 'The writer uses the Industrial Revolution as a historical precedent to show that while new technology eventually creates new jobs, the transition period is brutal and devastating for workers and communities. This suggests AI will follow a similar pattern, with job losses occurring faster than new opportunities emerge, leaving workers vulnerable.',
              partialMarks: ['2-3 marks for explaining the historical parallel', '2-3 marks for explaining how this supports the argument about AI']
            }
          },
          {
            id: 'igcse-lang-p1-m4-q3',
            questionNumber: 3,
            questionText: `Passage B discusses the importance of urban parks. What does the writer suggest is the main reason parks are underfunded?`,
            marks: 4,
            suggestedTimeMinutes: 8,
            questionType: 'short-answer',
            extract: P1_M4_PASSAGE_B,
            extractSource: 'Passage B: The Value of Urban Parks',
            modelAnswers: {
              fullMark: 'Parks are underfunded because they generate no revenue and do not contribute to GDP. They are invisible to policymakers focused on economic growth metrics.',
              partialMarks: ['2 marks for identifying lack of economic value/revenue generation', '2 marks for explaining policymakers prioritise economic metrics']
            }
          },
          {
            id: 'igcse-lang-p1-m4-q4',
            questionNumber: 4,
            questionText: `Explain the contradiction that the writer identifies between parks as investment and traditional economic thinking.`,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M4_PASSAGE_B,
            extractSource: 'Passage B: The Value of Urban Parks',
            modelAnswers: {
              fullMark: 'The writer points out that while parks do not generate revenue directly, they are cost-effective investments that return multiple times their cost through health benefits and crime prevention. However, traditional economic thinking focuses on immediate revenue generation, making the long-term and diffuse benefits of parks invisible to fiscal decision-makers.',
              partialMarks: ['2-3 marks for identifying the contradiction', '2-3 marks for explaining the conflict between traditional economics and actual value']
            }
          },
          {
            id: 'igcse-lang-p1-m4-q5',
            questionNumber: 5,
            questionText: `Which passage presents a more optimistic view of the future—Passage A or Passage B? Explain your answer with reference to the text.`,
            marks: 7,
            suggestedTimeMinutes: 12,
            questionType: 'short-answer',
            extract: '',
            extractSource: 'Both passages',
            modelAnswers: {
              fullMark: 'Passage A is less optimistic. While it acknowledges potential benefits of AI, it concludes with concerns about existential meaning and suggests that individual willpower cannot solve addiction-like problems created by design. Passage B is more optimistic, offering specific solutions (regenerative agriculture, policy changes) and suggesting that improvement is possible with proper investment and regulation.',
              partialMarks: ['2-3 marks for identifying which passage is more optimistic', '2-3 marks for supporting with textual evidence', '2 marks for explaining the difference in tone/approach']
            }
          },
          {
            id: 'igcse-lang-p1-m4-q6',
            questionNumber: 6,
            questionText: `Compare how the writers of Passage A and Passage B use evidence and reasoning to support their arguments.`,
            marks: 8,
            suggestedTimeMinutes: 15,
            questionType: 'short-answer',
            extract: '',
            extractSource: 'Both passages',
            modelAnswers: {
              fullMark: 'Passage A relies on logical reasoning and historical analogy (the Industrial Revolution), drawing implications from technological change. Passage B uses concrete evidence (statistics, research findings) and cost-benefit analysis, showing that parks are measurable investments. Passage A emphasizes existential concerns; Passage B emphasizes practical solutions and economics. Both use counter-argument (acknowledging opposing views) but Passage A suggests solutions are insufficient while Passage B offers specific remedies.',
              partialMarks: ['2 marks for identifying use of reasoning in A', '2 marks for identifying use of evidence in B', '2 marks for comparing their approaches', '2 marks for explaining differences in tone/persuasiveness']
            }
          }
        ]
      }
    ]
  },

  {
    id: 'igcse-lang-p1-mock-05',
    board: 'IGCSE',
    paperNumber: 1,
    title: 'Cambridge IGCSE English Language - Paper 1 Mock Exam 5',
    subtitle: 'Reading and Comprehension',
    code: '0500/11 / 0990/11',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'igcse-lang-p1-m5-reading',
        title: 'Reading Comprehension Section',
        description: 'Answer all questions on the answer sheet provided. Read the passages carefully and answer the questions in the spaces provided.',
        totalMarks: 80,
        suggestedTimeMinutes: 120,
        questions: [
          {
            id: 'igcse-lang-p1-m5-q1',
            questionNumber: 1,
            questionText: `What does the writer of Passage A mean by saying smartphones are "designed to capture and commodify" attention?`,
            marks: 5,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M5_PASSAGE_A,
            extractSource: 'Passage A: The Smartphone',
            modelAnswers: {
              fullMark: 'The writer means that smartphone technology uses deliberate design techniques to hold users\' attention so that they can sell advertising. Attention is sold as a commodity to advertisers—the longer users are engaged, the more valuable they are to companies.',
              partialMarks: ['2-3 marks for explaining "capture"', '2-3 marks for explaining "commodify" or relating to profit/advertising']
            }
          },
          {
            id: 'igcse-lang-p1-m5-q2',
            questionNumber: 2,
            questionText: `Identify four techniques mentioned in Passage A that smartphone designers use to maximise engagement.`,
            marks: 4,
            suggestedTimeMinutes: 8,
            questionType: 'short-answer',
            extract: P1_M5_PASSAGE_A,
            extractSource: 'Passage A: The Smartphone',
            modelAnswers: {
              fullMark: '1. Infinite scroll. 2. Notifications. 3. Social validation through likes. 4. Social validation through comments.',
              partialMarks: ['1 mark per technique identified']
            }
          },
          {
            id: 'igcse-lang-p1-m5-q3',
            questionNumber: 3,
            questionText: `Why does the writer compare junk food to smartphone design?`,
            marks: 4,
            suggestedTimeMinutes: 8,
            questionType: 'short-answer',
            extract: P1_M5_PASSAGE_A,
            extractSource: 'Passage A: The Smartphone',
            modelAnswers: {
              fullMark: 'Both exploit psychological vulnerabilities to trigger immediate pleasure despite long-term harm. Both are engineered to be addictive. Just as junk food feels good immediately but damages health, smartphone use feels rewarding but harms cognitive and psychological wellbeing.',
              partialMarks: ['2 marks for identifying similarity in addiction/pleasure', '2 marks for identifying harm despite immediate reward']
            }
          },
          {
            id: 'igcse-lang-p1-m5-q4',
            questionNumber: 4,
            questionText: `According to Passage B, how does language shape what we think and perceive? Use an example from the passage to explain your answer.`,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M5_PASSAGE_B,
            extractSource: 'Passage B: Language and Reality',
            modelAnswers: {
              fullMark: 'Language determines which concepts are available to our minds and therefore what distinctions we can perceive. The passage uses the example of languages with multiple words for snow: speakers of these languages can perceive and distinguish types of snow that speakers of languages with only one word for snow cannot.',
              partialMarks: ['2-3 marks for explaining how language shapes thought', '3 marks for using the snow example correctly']
            }
          },
          {
            id: 'igcse-lang-p1-m5-q5',
            questionNumber: 5,
            questionText: `What evidence does the writer provide to support the idea that language loss is occurring rapidly?`,
            marks: 4,
            suggestedTimeMinutes: 8,
            questionType: 'short-answer',
            extract: P1_M5_PASSAGE_B,
            extractSource: 'Passage B: Language and Reality',
            modelAnswers: {
              fullMark: 'One language dies every nine days. By the end of this century, half of the world\'s seven thousand languages will have disappeared. This represents a "linguistic extinction event."',
              partialMarks: ['2 marks for rate of language death', '2 marks for projection or scale of loss']
            }
          },
          {
            id: 'igcse-lang-p1-m5-q6',
            questionNumber: 6,
            questionText: `How do Passage A and Passage B present different types of threats to human wellbeing? Explain your answer.`,
            marks: 8,
            suggestedTimeMinutes: 15,
            questionType: 'short-answer',
            extract: '',
            extractSource: 'Both passages',
            modelAnswers: {
              fullMark: 'Passage A identifies a technological threat: smartphone design deliberately harms our capacity for sustained attention and deep thought. This is external technology damaging internal cognitive capacity. Passage B identifies a cultural/linguistic threat: the loss of linguistic diversity reduces the conceptual frameworks available to humanity. One threatens individual cognition; the other threatens collective human knowledge and perception. Both result from profit-driven systems prioritising short-term gain over human wellbeing.',
              partialMarks: ['2-3 marks for identifying threat in A', '2-3 marks for identifying threat in B', '2 marks for comparison/contrast']
            }
          }
        ]
      }
    ]
  },

  {
    id: 'igcse-lang-p1-mock-06',
    board: 'IGCSE',
    paperNumber: 1,
    title: 'Cambridge IGCSE English Language - Paper 1 Mock Exam 6',
    subtitle: 'Reading and Comprehension',
    code: '0500/11 / 0990/11',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'igcse-lang-p1-m6-reading',
        title: 'Reading Comprehension Section',
        description: 'Answer all questions on the answer sheet provided. Read the passages carefully and answer the questions in the spaces provided.',
        totalMarks: 80,
        suggestedTimeMinutes: 120,
        questions: [
          {
            id: 'igcse-lang-p1-m6-q1',
            questionNumber: 1,
            questionText: `What point is the writer making about the distribution of imprisonment in Passage A? Identify three specific examples provided.`,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M6_PASSAGE_A,
            extractSource: 'Passage A: The Prison System',
            modelAnswers: {
              fullMark: '1. The US incarceration rate is 6-10 times higher than other wealthy democracies. 2. Black men are incarcerated at 5 times the rate of white men despite similar crime rates. 3. Poor people are massively overrepresented in prisons. The point is that incarceration is not equally distributed but disproportionately targets specific populations, particularly the poor and racial minorities.',
              partialMarks: ['2 marks per specific statistic/example']
            }
          },
          {
            id: 'igcse-lang-p1-m6-q2',
            questionNumber: 2,
            questionText: `According to the passage, what is the fundamental failure of modern prisons?`,
            marks: 5,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M6_PASSAGE_A,
            extractSource: 'Passage A: The Prison System',
            modelAnswers: {
              fullMark: 'Prisons fail to achieve their three stated purposes: they do not punish (not with justice), they do not rehabilitate (programmes are underfunded), and they do not increase public safety (recidivism is high). They only inflict punishment indiscriminately on the vulnerable.',
              partialMarks: ['2 marks for identifying failure in rehabilitation', '2 marks for noting high recidivism/public safety failure', '1 mark for noting unjust punishment']
            }
          },
          {
            id: 'igcse-lang-p1-m6-q3',
            questionNumber: 3,
            questionText: `Why does the writer suggest that prisons address the wrong problem? Explain with reference to the text.`,
            marks: 5,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M6_PASSAGE_A,
            extractSource: 'Passage A: The Prison System',
            modelAnswers: {
              fullMark: 'Prisons treat poverty, mental illness, and addiction as criminal problems requiring punishment and incarceration, when they are actually social problems requiring healthcare, education, and support. By criminalising these social issues instead of addressing them, prisons fail to solve the actual problems they are supposed to address.',
              partialMarks: ['2-3 marks for identifying misidentification of root causes', '2-3 marks for explaining why this approach fails']
            }
          },
          {
            id: 'igcse-lang-p1-m6-q4',
            questionNumber: 4,
            questionText: `According to Passage B, what is the central contradiction in the global food system?`,
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'short-answer',
            extract: P1_M6_PASSAGE_B,
            extractSource: 'Passage B: Food Production',
            modelAnswers: {
              fullMark: 'The system simultaneously causes starvation and overfeeding, environmental destruction and hunger. We produce enough food to feed everyone adequately, yet billions suffer malnutrition while wealthy countries have obesity epidemics from cheap, processed food. The problem is not scarcity but how food is distributed and produced (for profit, not human need).',
              partialMarks: ['2-3 marks for identifying production is sufficient', '2-3 marks for explaining distribution/profit problem']
            }
          },
          {
            id: 'igcse-lang-p1-m6-q5',
            questionNumber: 5,
            questionText: `What evidence does the writer provide to support the claim that solutions to the food problem exist?`,
            marks: 4,
            suggestedTimeMinutes: 8,
            questionType: 'short-answer',
            extract: P1_M6_PASSAGE_B,
            extractSource: 'Passage B: Food Production',
            modelAnswers: {
              fullMark: 'The writer mentions regenerative agriculture, which produces food sustainably while restoring soil health and supporting biodiversity. Also mentions small-scale farming, local food systems, and crop diversity as proven alternatives that improve resilience and sustainability.',
              partialMarks: ['1 mark per example of alternative farming method']
            }
          },
          {
            id: 'igcse-lang-p1-m6-q6',
            questionNumber: 6,
            questionText: `Both passages identify systemic problems in society. Compare how the writers suggest these problems can be solved.`,
            marks: 8,
            suggestedTimeMinutes: 15,
            questionType: 'short-answer',
            extract: '',
            extractSource: 'Both passages',
            modelAnswers: {
              fullMark: 'Passage A suggests solutions require systemic change: stopping subsidies for harmful agriculture and investing in sustainable alternatives—acknowledging that individual consumer choice is insufficient. Similarly, Passage B argues that individual willpower is inadequate against systems designed to be addictive; regulation and design changes are necessary. Both writers reject individual-level solutions and demand policy/systemic change. However, Passage B emphasizes changing how decisions are made (stopping subsidies, investing differently), while Passage A emphasizes changing how products are designed. Both require confronting powerful interests profiting from the current system.',
              partialMarks: ['2 marks for identifying systemic change requirement in A', '2 marks for identifying systemic change requirement in B', '2 marks for comparing their solutions', '2 marks for noting both reject individual-level solutions']
            }
          }
        ]
      }
    ]
  },

  // ═════════════════════════════════════════════════════════════════════════
  // PAPER 2: DIRECTED WRITING AND COMPOSITION (80 marks, 2 hours)
  // ═════════════════════════════════════════════════════════════════════════

  {
    id: 'igcse-lang-p2-mock-04',
    board: 'IGCSE',
    paperNumber: 2,
    title: 'Cambridge IGCSE English Language - Paper 2 Mock Exam 4',
    subtitle: 'Directed Writing and Composition',
    code: '0500/21 / 0990/21',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'igcse-lang-p2-m4-directed',
        title: 'Directed Writing Task',
        description: 'Complete the directed writing task below based on the provided source material.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'igcse-lang-p2-m4-writing',
            questionNumber: 1,
            questionText: P2_M4_DIRECTED_TASK,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'extended-response',
            extract: P2_M4_SOURCE_A,
            extractSource: 'Source A: Air Pollution and Health',
            modelAnswers: {
              fullMark: 'A well-developed article that: (1) Presents compelling evidence about air pollution\'s health effects (respiratory disease, heart disease, stroke, cancer, impact on children and elderly); (2) Clearly articulates why this is an equity/justice issue (affects low-income communities disproportionately); (3) Proposes concrete actions (renewable energy transition, improved public transport, industrial emission regulation); (4) Uses persuasive techniques effectively (rhetorical questions, statistics, emotional appeals to vulnerable populations); (5) Maintains appropriate magazine article tone; (6) Meets word count requirements.',
              partialMarks: [
                '10 marks: Content and understanding—evidence of health effects, understanding of inequality',
                '10 marks: Structure and organization—clear article structure, logical flow',
                '10 marks: Style and tone—appropriate to magazine audience, persuasive language',
                '10 marks: Technical accuracy—grammar, spelling, punctuation'
              ]
            }
          }
        ]
      },
      {
        id: 'igcse-lang-p2-m4-composition',
        title: 'Composition Task',
        description: 'Complete one of the composition tasks below.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'igcse-lang-p2-m4-composition-a',
            questionNumber: 2,
            questionText: `Write a story which includes the line: "The letter arrived on a Tuesday, and everything changed."`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              fullMark: 'A compelling story that: (1) Incorporates the required line naturally; (2) Creates interesting characters with recognisable motivations; (3) Uses vivid imagery and descriptive language; (4) Maintains narrative tension and clear plot structure; (5) Uses dialogue effectively if included; (6) Demonstrates range of sentence structures and vocabulary; (7) Meets word count requirements (typically 300-500 words for short story).',
              partialMarks: [
                '10 marks: Narrative craft—plot, character, tension',
                '10 marks: Setting and atmosphere—vivid description, sensory detail',
                '10 marks: Language and style—vocabulary range, sentence variety, tone',
                '10 marks: Technical accuracy—grammar, spelling, punctuation'
              ]
            }
          },
          {
            id: 'igcse-lang-p2-m4-composition-b',
            questionNumber: 2,
            questionText: `Write a descriptive piece about a place that is under threat or changing. You may choose a real place or an imaginary location.`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              fullMark: 'An evocative descriptive piece that: (1) Brings the place vividly to life through detailed, sensory description; (2) Conveys the sense of threat or change through language and tone; (3) Creates atmosphere and emotional resonance; (4) Uses varied sentence structures and sophisticated vocabulary; (5) Maintains focus on the place while evoking the human dimension; (6) Meets word count requirements.',
              partialMarks: [
                '10 marks: Descriptive power—vivid imagery, sensory detail',
                '10 marks: Sense of place—specific detail that brings location to life',
                '10 marks: Conveying change/threat—through language choice, tone, atmosphere',
                '10 marks: Technical accuracy—grammar, spelling, punctuation'
              ]
            }
          }
        ]
      }
    ]
  },

  {
    id: 'igcse-lang-p2-mock-05',
    board: 'IGCSE',
    paperNumber: 2,
    title: 'Cambridge IGCSE English Language - Paper 2 Mock Exam 5',
    subtitle: 'Directed Writing and Composition',
    code: '0500/21 / 0990/21',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'igcse-lang-p2-m5-directed',
        title: 'Directed Writing Task',
        description: 'Complete the directed writing task below based on the provided source material.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'igcse-lang-p2-m5-writing',
            questionNumber: 1,
            questionText: P2_M5_DIRECTED_TASK,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'extended-response',
            extract: P2_M5_SOURCE_A,
            extractSource: 'Source A: Facial Recognition Technology',
            modelAnswers: {
              fullMark: 'A well-structured memo that: (1) Takes a clear position with strong justification (for or against); (2) Systematically addresses potential benefits and serious concerns; (3) Acknowledges strongest arguments from opposition; (4) If recommending deployment, proposes meaningful safeguards and oversight mechanisms; (5) Uses appropriate formal memo format (To, From, Date, Subject, clear sections); (6) Maintains objective, professional tone while making persuasive case; (7) Addresses practical implementation concerns.',
              partialMarks: [
                '10 marks: Clear position and justification',
                '10 marks: Addressing benefits and concerns comprehensively',
                '10 marks: Acknowledging opposing arguments and proposing solutions',
                '10 marks: Format, tone, and technical accuracy'
              ]
            }
          }
        ]
      },
      {
        id: 'igcse-lang-p2-m5-composition',
        title: 'Composition Task',
        description: 'Complete one of the composition tasks below.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'igcse-lang-p2-m5-composition-a',
            questionNumber: 2,
            questionText: `Write a piece describing a moment when you had to make a difficult decision. What was the decision, why was it difficult, and what did you learn?`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'personal-narrative',
            modelAnswers: {
              fullMark: 'A reflective narrative that: (1) Describes a genuine, significant decision clearly; (2) Explains the difficulty and conflicting considerations; (3) Conveys the emotional dimension of the experience; (4) Shows clear reflection on what was learned; (5) Uses specific, concrete detail to bring the moment alive; (6) Demonstrates range of language and sentence structures; (7) Creates emotional connection with reader.',
              partialMarks: [
                '10 marks: Clarity and significance of decision',
                '10 marks: Exploration of difficulty and conflict',
                '10 marks: Reflection and learning',
                '10 marks: Technical accuracy and language quality'
              ]
            }
          },
          {
            id: 'igcse-lang-p2-m5-composition-b',
            questionNumber: 2,
            questionText: `Write a dialogue-based story where two characters reveal information about each other that changes their relationship.`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              fullMark: 'A compelling dialogue-driven story that: (1) Uses dialogue as primary narrative vehicle; (2) Reveals character through how they speak, not just what they say; (3) Shows relationship dynamic and how it shifts; (4) Conveys significant revelation naturally within dialogue; (5) Uses dialogue punctuation correctly throughout; (6) Creates distinct character voices; (7) Builds tension and emotional impact.',
              partialMarks: [
                '10 marks: Dialogue authenticity and character voice',
                '10 marks: Relationship development and revelation',
                '10 marks: Narrative impact and emotional resonance',
                '10 marks: Technical accuracy—dialogue punctuation, grammar'
              ]
            }
          }
        ]
      }
    ]
  },

  {
    id: 'igcse-lang-p2-mock-06',
    board: 'IGCSE',
    paperNumber: 2,
    title: 'Cambridge IGCSE English Language - Paper 2 Mock Exam 6',
    subtitle: 'Directed Writing and Composition',
    code: '0500/21 / 0990/21',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'igcse-lang-p2-m6-directed',
        title: 'Directed Writing Task',
        description: 'Complete the directed writing task below based on the provided source material.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'igcse-lang-p2-m6-writing',
            questionNumber: 1,
            questionText: P2_M6_DIRECTED_TASK,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'extended-response',
            extract: P2_M6_SOURCE_A,
            extractSource: 'Source A: University Admissions',
            modelAnswers: {
              fullMark: 'A persuasive opinion article that: (1) Takes a clear, defensible position on admissions approach; (2) Supports argument with logical reasoning and evidence; (3) Addresses strongest opposing arguments and responds effectively; (4) Explains implications for students, universities, and society; (5) Uses persuasive techniques (rhetorical questions, concrete examples, appeals to values); (6) Maintains appropriate formal article tone; (7) Shows sophisticated engagement with complexity of issue.',
              partialMarks: [
                '10 marks: Clear position and logical support',
                '10 marks: Evidence and reasoning quality',
                '10 marks: Engagement with counter-arguments and implications',
                '10 marks: Persuasive technique and article quality'
              ]
            }
          }
        ]
      },
      {
        id: 'igcse-lang-p2-m6-composition',
        title: 'Composition Task',
        description: 'Complete one of the composition tasks below.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'igcse-lang-p2-m6-composition-a',
            questionNumber: 2,
            questionText: `Write a story that explores what it means to belong. This could be about fitting into a group, finding home, or being an outsider.`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              fullMark: 'A meaningful story that: (1) Explores theme of belonging authentically; (2) Creates protagonists readers care about; (3) Develops conflict related to belonging/outsider status; (4) Uses specific, concrete detail to bring emotional experience alive; (5) Shows resolution that reflects on the theme; (6) Uses varied sentence structures and sophisticated vocabulary; (7) Conveys emotional depth and insight about human experience.',
              partialMarks: [
                '10 marks: Thematic exploration of belonging',
                '10 marks: Character development and emotional authenticity',
                '10 marks: Narrative structure and resolution',
                '10 marks: Language quality and technical accuracy'
              ]
            }
          },
          {
            id: 'igcse-lang-p2-m6-composition-b',
            questionNumber: 2,
            questionText: `Write a reflective piece about an injustice you have witnessed or learned about. Explain what made it unjust and what should be done.`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'persuasive-writing',
            modelAnswers: {
              fullMark: 'A compelling reflective piece that: (1) Clearly identifies and describes the injustice; (2) Explains convincingly why it is unjust; (3) Proposes meaningful remedies; (4) Conveys genuine concern and emotional engagement; (5) Uses evidence or specific detail to support arguments; (6) Maintains balanced, thoughtful tone while being persuasive; (7) Demonstrates sophisticated thinking about justice and responsibility.',
              partialMarks: [
                '10 marks: Clarity and significance of injustice described',
                '10 marks: Explanation of why it is unjust',
                '10 marks: Proposed solutions and emotional authenticity',
                '10 marks: Language quality and persuasive technique'
              ]
            }
          }
        ]
      }
    ]
  }
]
