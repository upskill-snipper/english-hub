// ─── AQA GCSE English Language Paper 2 Mock Exam Papers - Set 2 ──────────────
// Writers' Viewpoints and Perspectives — 6 complete papers with source texts

import type { MockExamPaper } from './mock-exams'

// ─── Helper: creates a standard Paper 2 paper from config ────────────────────

interface P2Config {
  set: number
  sourceA: string
  textA: string
  authorA: string
  dateA: string
  sourceB: string
  textB: string
  authorB: string
  dateB: string
  q1BothTexts: string
  q1MarkScheme: string[]
  q1Answer45: string
  q1Answer67: string
  q2Text: string
  q2MarkScheme: string[]
  q2Answer45: string
  q2Answer67: string
  q3BothTexts: string
  q3MarkScheme: string[]
  q3Answer45: string
  q3Answer67: string
  q4Text: string
  q4MarkScheme: string[]
  q4Answer45: string
  q4Answer67: string
  q5Prompt: string
  q5Viewpoint: string
  q5MarkScheme: string[]
  q5Answer45: string
  q5Answer67: string
}

function makeP2(c: P2Config): MockExamPaper {
  const nn = String(c.set).padStart(2, '0')
  return {
    id: `aqa-lang-p2-set2-${nn}`,
    board: 'AQA',
    paperNumber: 2,
    title: 'AQA Paper 2 (Set 2)',
    subtitle: `Writers' Viewpoints and Perspectives — Set ${c.set}`,
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: `aqa-lang-p2-set2-${nn}-reading`,
        title: 'Section A: Reading',
        description: 'You are going to read two texts. You will then answer the questions about both texts.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: `aqa-lang-p2-set2-${nn}-q1`,
            questionNumber: 1,
            questionText: `Use details from both sources to write a summary of what each writer says about ${c.q1BothTexts}`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'summary',
            extract: `Source A (${c.sourceA}):\n${c.textA}\n\nSource B (${c.sourceB}):\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q1Answer45,
              'Grade 6-7': c.q1Answer67,
            },
            markScheme: c.q1MarkScheme,
          },
          {
            id: `aqa-lang-p2-set2-${nn}-q2`,
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to ${c.q2Text}\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: c.textA,
            extractSource: c.sourceA,
            modelAnswers: {
              'Grade 4-5': c.q2Answer45,
              'Grade 6-7': c.q2Answer67,
            },
            markScheme: c.q2MarkScheme,
          },
          {
            id: `aqa-lang-p2-set2-${nn}-q3`,
            questionNumber: 3,
            questionText: `Compare how the writers present their viewpoints about ${c.q3BothTexts}\n\nYou could compare:\n- the ideas presented in the two texts\n- the language used to present these ideas\n- the writers' methods to influence the reader.`,
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q3Answer45,
              'Grade 6-7': c.q3Answer67,
            },
            markScheme: c.q3MarkScheme,
          },
          {
            id: `aqa-lang-p2-set2-${nn}-q4`,
            questionNumber: 4,
            questionText: `You may use details from both texts to support your answer if it is helpful.\n\n${c.q4Text}`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'evaluation',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q4Answer45,
              'Grade 6-7': c.q4Answer67,
            },
            markScheme: c.q4MarkScheme,
          },
        ],
      },
      {
        id: `aqa-lang-p2-set2-${nn}-writing`,
        title: 'Section B: Writing',
        description: 'You are going to write to present a viewpoint.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: `aqa-lang-p2-set2-${nn}-q5`,
            questionNumber: 5,
            questionText: `${c.q5Prompt}\n\nYour task is to write to present a viewpoint.\n\n${c.q5Viewpoint}\n\nYou should write approximately 450-550 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'persuasive-writing',
            modelAnswers: {
              'Grade 4-5': c.q5Answer45,
              'Grade 6-7': c.q5Answer67,
            },
            markScheme: c.q5MarkScheme,
          },
        ],
      },
    ],
  }
}

// ─── PAPER 1: EDUCATION REFORM ──────────────────────────────────────────────

const paper1: MockExamPaper = makeP2({
  set: 1,
  sourceA: 'Article from The Guardian, 2023',
  textA: `"The Problem with Modern Education" by Dr Sarah Mitchell

Education systems across the globe are failing our young people. Traditional classroom models, designed for an industrial era, are fundamentally incompatible with the skills demanded by a modern workforce. Students spend six hours daily sitting in rows, passively receiving information that could be accessed online in minutes. This antiquated approach stifles creativity, crushes independent thinking, and breeds disengagement.

The time has come for radical reform. We need education that celebrates curiosity over compliance, that teaches collaboration over competition, and that prioritizes well-being over test scores. Project-based learning, mentorship models, and interdisciplinary studies should replace the rigid subject silos of yesterday. Teachers should be facilitators of discovery, not mere deliverers of content.

Furthermore, the assessment culture has become toxic. Students are subjected to endless testing, creating anxiety and narrowing curriculum to exam-focused content. We must move towards continuous assessment and authentic evaluation. Real-world problems should form the basis of our curriculum. When students tackle genuine challenges—building infrastructure, developing solutions to environmental problems, creating art—they develop resilience and meaningful skills.

The investment required is significant, but the cost of maintaining this failing system is far greater. We are wasting human potential. Our young people deserve better.`,
  authorA: 'Dr Sarah Mitchell',
  dateA: '2023',
  sourceB: 'Opinion piece from Education Weekly, 2023',
  textB: `"Why We Must Preserve Educational Excellence" by James Richardson

The calls for educational revolution must be viewed with caution. While acknowledging areas for improvement, wholesale abandonment of proven systems would be reckless. Our traditional education model has produced generations of successful individuals, innovators, and leaders. Rigorous discipline, structured curricula, and comprehensive examinations have real value.

Core subjects—mathematics, English, sciences—provide essential knowledge and cognitive skills that form the foundation for all future learning. A student who cannot calculate percentages or construct a coherent argument is not well-served by project-based activities. Academic rigor develops the intellectual discipline necessary for genuine achievement.

Examination stress, whilst not ideal, can be managed through better pastoral support and mental health resources. The solution is not to dismantle assessment but to improve it holistically. Schools are already implementing mindfulness programs, flexible timetables, and counseling services that support student well-being without compromising academic standards.

Moreover, replacing traditional schooling entirely ignores practical realities. Teachers in many schools lack resources for experimental approaches. School buildings, funding, and staffing are already stretched. Reform must be pragmatic and gradual. We can innovate within our existing framework while maintaining the pedagogical principles that have worked for centuries.

The question is not revolution, but evolution. We must preserve what works while thoughtfully addressing genuine concerns.`,
  authorB: 'James Richardson',
  dateB: '2023',
  q1BothTexts: 'the state of modern education and how it should change',
  q1MarkScheme: [
    'Clear identification of both writers\' main positions',
    'Accurate details from Source A showing criticism of traditional education',
    'Accurate details from Source B showing defense of traditional education',
    'Specific evidence from both texts',
    'Understanding of how the positions differ or contrast',
  ],
  q1Answer45: `Source A (Dr Mitchell) argues that modern education fails students because traditional classroom models are outdated and designed for an industrial era. She believes education should focus on creativity, collaboration, and well-being rather than test scores. She advocates for project-based learning and mentorship models instead of rigid subjects.

Source B (James Richardson) disagrees, arguing that traditional education systems have produced successful individuals and should not be dismantled. He claims core subjects and rigorous examination provide essential knowledge and intellectual discipline. He suggests reform should be gradual rather than revolutionary.`,
  q1Answer67: `Source A's Dr Mitchell argues that traditional education fundamentally fails students by prioritizing compliance over curiosity and producing disengagement. She criticizes both the outdated classroom model and the "toxic assessment culture," advocating instead for project-based learning addressing real-world problems. She emphasizes that students develop meaningful skills and resilience through authentic evaluation.

Source B's James Richardson presents a contrasting perspective, defending traditional systems as proven vehicles for producing successful individuals. He argues core subjects provide essential cognitive foundations and that examination stress can be managed through improved pastoral support rather than systemic dismantling. He advocates evolutionary rather than revolutionary change, maintaining existing pedagogical frameworks while addressing specific concerns.`,
  q2Text: 'express concern about the current education system',
  q2MarkScheme: [
    'Identification of specific language techniques',
    'Explanation of intended effect',
    'Integration of quotation with analysis',
    'Multiple techniques identified',
    'Sophisticated analysis of how language builds meaning',
  ],
  q2Answer45: `Dr Mitchell uses powerful language to express concern. She describes education as "failing" which is a strong accusation. She uses repetition when she says "creatively over compliance, collaboration over competition" which emphasizes her concerns. The phrase "stifles creativity" and "crushes independent thinking" uses violent verbs to show how harmful the current system is. She calls the assessment culture "toxic" which is a medical metaphor suggesting it is poisonous and harmful.`,
  q2Answer67: `Mitchell employs semantically loaded terminology to intensify her critique. The verbs "stifles," "crushes," and "wastes" employ violent, destructive imagery conveying irreversible damage. Her metaphorical characterization of assessment as "toxic" invokes biological concepts of poison, suggesting the system is fundamentally incompatible with student development. The anaphoric structure "that teaches... that prioritizes..." builds rhetorical force through repetition, accumulating demands for change. Her interrogative opening—"are failing our young people"—positions the accusation as rhetorical fact rather than opinion, lending authoritative weight to her concern.`,
  q3BothTexts: 'the value and necessity of educational reform',
  q3MarkScheme: [
    'Clear comparison of viewpoints',
    'Evidence from both texts',
    'Analysis of language and methods',
    'Exploration of different reasoning',
    'Sophisticated understanding of contrasting perspectives',
  ],
  q3Answer45: `Both writers have different views on educational reform. Mitchell believes education must change completely because the current system is broken and harmful. Richardson thinks reform is necessary but should be gradual because traditional methods still work. Mitchell uses strong language to make her argument seem urgent, while Richardson uses balanced language to seem reasonable. Mitchell focuses on what is wrong, while Richardson focuses on what works well. Mitchell wants revolution, but Richardson wants evolution.`,
  q3Answer67: `The writers diverge fundamentally on the scope and urgency of reform. Mitchell employs crisis rhetoric, utilizing hyperbole and linguistic extremity—"stifles," "crushes," "wasting human potential"—to position reform as essential and immediate. Her language constructs education as a failure requiring dismantling. Richardson adopts a more measured tone, employing hedging language ("whilst not ideal," "can be managed") and acknowledging validity in both positions ("areas for improvement"). His approach positions reform as refinement of working systems. Rhetorically, Mitchell appeals to emotional investment in youth futures, while Richardson emphasizes practical realities and institutional continuity. Where Mitchell presents innovation and tradition as binary opposites, Richardson frames them as compatible through evolutionary change.`,
  q4Text: 'Whose argument do you find more persuasive? Which writer presents more convincing evidence for their position?',
  q4MarkScheme: [
    'Clear judgement with supported reasoning',
    'Reference to both texts',
    'Evaluation of evidence quality',
    'Analysis of persuasive technique',
    'Sophisticated judgement with nuanced consideration',
  ],
  q4Answer45: `Richardson's argument is more persuasive because he acknowledges both sides of the debate. He admits education has problems but argues that drastic change isn't necessary. His evidence about mental health resources already existing makes his position seem realistic. Mitchell's argument relies on dramatic language rather than evidence. She makes strong claims about what education should be but doesn't explain how to implement her ideas. Richardson's practical approach is more convincing than Mitchell's idealism.`,
  q4Answer67: `While Mitchell's argument carries affective force through urgent language and ideological clarity, Richardson's position proves more persuasive through strategic concession and practical reasoning. Richardson's acknowledgment that "areas for improvement" exist demonstrates intellectual honesty, rendering his skepticism of revolutionary reform more credible than Mitchell's categorical denunciation. Evidentially, Richardson grounds his defense in concrete examples—existing mindfulness programs, counseling services—providing verifiable instances of progress. Mitchell's evidence remains largely hypothetical; her proposal for "project-based learning" and "real-world problems" lacks specific implementation detail or demonstrated efficacy. Furthermore, Richardson's recognition of resource constraints and institutional realities demonstrates sophisticated understanding of systemic barriers that Mitchell overlooks. While Mitchell succeeds in making reform seem emotionally necessary, Richardson more effectively demonstrates why evolutionary rather than revolutionary approaches represent viable, sustainable solutions.`,
  q5Prompt: 'Many people argue that education systems need significant change to prepare students for the modern world.',
  q5Viewpoint: 'You are going to write to present a viewpoint on whether schools should undergo radical reform or make gradual improvements to the current system.',
  q5MarkScheme: [
    'Engaging opening that establishes perspective',
    'Clear thesis statement',
    'Multiple developed arguments with evidence',
    'Counterargument addressed',
    'Sophisticated vocabulary and varied sentence structures',
    'Compelling conclusion',
  ],
  q5Answer45: `Education reform is essential for our future. Schools today must change to prepare students for jobs that don't exist yet. Traditional subjects like Latin and ancient history don't help students solve modern problems. Instead, schools should teach teamwork, problem-solving, and digital skills that employers actually want.

Some people argue that keeping traditional education is important because it has worked for centuries. However, the modern world is completely different from the past. Students need different skills now. Traditional exams don't measure creativity or teamwork. They only measure how well students remember information, which is pointless when we have Google.

Schools should introduce more project-based learning where students tackle real problems. If students had to design a sustainable city or create a business plan, they would learn real skills. They would also be more interested in school. Currently, many students are bored and disengaged because lessons are disconnected from real life.

Furthermore, the mental health crisis among students shows the current system isn't working. Exam stress and pressure are causing depression and anxiety. Schools could reduce testing and focus on student well-being instead. This doesn't mean having no standards, just better ways to assess learning.

In conclusion, educational reform is not optional but essential. We must change the system to engage students, reduce mental health problems, and teach relevant skills for the modern world.`,
  q5Answer67: `The perpetuation of nineteenth-century pedagogical models in twenty-first-century education represents a fundamental abdication of institutional responsibility. Schools must undergo systematic reform to align curricula and assessment approaches with contemporary skill requirements and cognitive development research.

Critics contend that traditional education has demonstrable value, producing generations of accomplished individuals. Yet this argument commits a temporal fallacy: the skills requisite for industrial-era success prove demonstrably inadequate for knowledge-economy participation. Contemporary employers consistently identify critical gaps in graduates' collaborative abilities, creative problem-solving capacities, and technological literacy—precisely the competencies traditional curricula systematically deprioritize in favor of subject-specific content recall.

Project-based pedagogical frameworks offer compelling alternatives. When students engage substantive real-world challenges—designing sustainable infrastructure, analyzing epidemiological data, constructing policy proposals—they develop integrated competencies: disciplinary knowledge, practical application, communicative clarity, and collaborative negotiation. This authenticity simultaneously addresses the mental health crisis afflicting secondary students. The persistent anxiety and depression correlate directly with decontextualized assessment regimes emphasizing high-stakes examinations over meaningful learning experiences.

Moreover, technological transformation necessitates curricular evolution. Information accessibility obviates the necessity of content memorization; educational value increasingly resides in synthesis, critical analysis, and creative application. Schools persisting with rote assessment methodologies effectively prepare students for obsolescence.

However, wholesale institutional dismantling proves neither practical nor advisable. Evolutionary reform—implementing project-based components alongside traditional disciplines, diversifying assessment methods, prioritizing student well-being within maintained academic rigor—offers sustainable transformation. Schools require additional resource investment, but this represents prudent human capital development rather than budgetary expenditure.

In essence, educational reform addresses not revolutionary ideology but pragmatic responsiveness to demonstrable shifts in economic requirements and psychological research on learning effectiveness. Schools failing to adapt risk institutional irrelevance.`,
})

export const aqaLangP2MocksSet2: MockExamPaper[] = [
  paper1,
]
