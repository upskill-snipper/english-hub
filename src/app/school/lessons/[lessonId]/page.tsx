'use client'

import { useState, useRef, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Printer,
  BookOpen,
  Target,
  CheckCircle,
  CheckSquare,
  Sparkles,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  GraduationCap,
  ClipboardList,
  Home,
  Star,
  ListChecks,
  Award,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  PrintableWorksheet,
  type WorksheetSection,
} from '@/components/school/PrintableWorksheet'

// ── Types ────────────────────────────────────────────────────────────────────

interface TimingSection {
  phase: string
  duration: string
  title: string
  description: string
  teacherNotes?: string
  activities: {
    support: string
    core: string
    stretch: string
  }
  assessmentQuestions?: string[]
  exitTicket?: string
}

interface AssessmentCriterion {
  band: string
  description: string
  marks: string
}

interface LessonData {
  id: string
  title: string
  topic: string
  text?: string
  skill: string
  examBoard: string
  yearGroup: string
  duration: number
  difficulty: 'Foundation' | 'Intermediate' | 'Higher'
  recommended?: boolean
  recommendReason?: string
  learningObjectives: string[]
  successCriteria: string[]
  keywords: { term: string; definition: string }[]
  priorKnowledge: string[]
  resources: string[]
  timings: TimingSection[]
  worksheetSections: WorksheetSection[]
  modelAnswers: { question: string; answer: string }[]
  homeworkTasks?: string[]
  extensionTasks?: string[]
  assessmentCriteria?: AssessmentCriterion[]
}

// ── Lesson data catalogue ────────────────────────────────────────────────────

const LESSONS: Record<string, LessonData> = {
  'poetry-comparison': {
    id: 'poetry-comparison',
    title: 'Comparing Poems: Structure & Language',
    topic: 'Poetry',
    text: 'AQA Power & Conflict Anthology',
    skill: 'Comparison',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
    learningObjectives: [
      'Compare how two poets use structure to convey meaning',
      'Analyse the effect of language choices across two poems',
      'Construct a comparative paragraph using a connective framework',
    ],
    successCriteria: [
      'I can identify structural features in both poems and explain their effect',
      'I can compare language techniques using appropriate terminology',
      'I can write a comparative paragraph that addresses both poems equally',
      'I can use connectives of comparison and contrast fluently',
    ],
    keywords: [
      { term: 'enjambment', definition: 'A line of poetry that continues onto the next line without punctuation, creating momentum or urgency' },
      { term: 'caesura', definition: 'A pause in the middle of a line of poetry, often created by punctuation, used for emphasis or to shift tone' },
      { term: 'stanza', definition: 'A grouped set of lines within a poem, separated by a blank line, similar to a paragraph in prose' },
      { term: 'juxtaposition', definition: 'Placing two contrasting ideas, images, or words side by side to highlight their differences' },
      { term: 'comparison connective', definition: 'Words or phrases used to link ideas across texts (similarly, however, in contrast, whereas)' },
      { term: 'semantic field', definition: 'A group of words related in meaning, used to create a dominant impression (e.g. war, nature, religion)' },
    ],
    priorKnowledge: [
      'Basic knowledge of the Power & Conflict anthology',
      'Understanding of common language techniques (metaphor, simile, personification)',
      'Ability to write a PEE paragraph',
    ],
    resources: [
      'Anthology copies or printed extracts',
      'Comparison framework sheet (printable)',
      'Model comparative paragraph handout',
      'Mini-whiteboards for starter activity',
    ],
    timings: [
      {
        phase: 'Starter',
        duration: '10 min',
        title: 'Quick-Fire Technique Recall',
        description: 'Students match structural/language techniques to their definitions on mini-whiteboards. Teacher reads a definition, students hold up the term. Recap key vocabulary needed for the lesson.',
        teacherNotes: 'Focus on: enjambment, caesura, volta, semantic field, juxtaposition. This warms up analytical vocabulary and identifies any gaps.',
        activities: {
          support: 'Provide a word bank of 8 techniques with definitions partially completed. Students match and fill in the gaps.',
          core: 'Match 12 techniques to definitions from memory, then self-check against the answer slide.',
          stretch: 'Match techniques and provide an example from a poem studied this term for each one.',
        },
        assessmentQuestions: [
          'Can students recall key terminology without prompts?',
          'Are there common gaps in knowledge that need addressing before the main activity?',
        ],
      },
      {
        phase: 'Main Activity 1',
        duration: '15 min',
        title: 'Guided Annotation: Identifying Comparison Points',
        description: 'Teacher models annotating the first poem for structural features, then students independently annotate the second poem. Class discussion identifies 3-4 key comparison points.',
        teacherNotes: 'Use "Exposure" and "Bayonet Charge" as paired poems. Model the first annotation thinking aloud. Circulate during independent work to check understanding.',
        activities: {
          support: 'Pre-annotated first poem provided. Students complete a guided annotation frame for the second poem with prompts.',
          core: 'Annotate both poems using a colour-coding system (structure = blue, language = green, tone = red).',
          stretch: 'Annotate independently and begin ranking comparison points by significance, justifying their top choice.',
        },
        assessmentQuestions: [
          'Are students identifying structural features or only language features?',
          'Can students articulate WHY a feature is significant, not just name it?',
        ],
      },
      {
        phase: 'Main Activity 2',
        duration: '20 min',
        title: 'Comparative Paragraph Writing',
        description: 'Using the comparison framework sheet, students write a comparative paragraph addressing one structural feature across both poems. Teacher circulates for targeted feedback.',
        teacherNotes: 'Display the sentence starters and connective bank. Emphasise "similarly/however/in contrast/whereas" as key connectives. Aim for at least one completed paragraph.',
        activities: {
          support: 'Use the scaffolded paragraph frame with sentence starters for each sentence. Focus on completing one solid paragraph.',
          core: 'Write one comparative paragraph using the framework, then attempt a second without the scaffold.',
          stretch: 'Write two comparative paragraphs and include contextual links in each. Aim to explore alternative interpretations.',
        },
        assessmentQuestions: [
          'Are students addressing BOTH poems equally or focusing on one?',
          'Are comparison connectives being used accurately?',
        ],
      },
      {
        phase: 'Plenary',
        duration: '15 min',
        title: 'Peer Assessment & Gallery Walk',
        description: 'Students exchange paragraphs with a partner for peer assessment using the success criteria. Selected paragraphs shared on the visualiser. Exit ticket: one strength and one target.',
        teacherNotes: 'Use a visualiser or project 2-3 strong examples. Highlight what makes them effective. Collect exit tickets to inform next lesson planning.',
        activities: {
          support: 'Peer assess using a simplified 3-star checklist (comparison connective used, both poems discussed, technique named).',
          core: 'Peer assess using full success criteria. Write one "even better if" suggestion.',
          stretch: 'Peer assess and rewrite one sentence from their partner\'s paragraph to improve it, explaining the change.',
        },
        exitTicket: 'Write down: (1) One thing you did well in your comparative paragraph. (2) One specific target for next time.',
        assessmentQuestions: [
          'Can students identify strengths and weaknesses in peer work?',
          'Do exit tickets show understanding of what makes a strong comparison?',
        ],
      },
    ],
    worksheetSections: [
      {
        title: 'Section A: Technique Identification',
        instructions: 'Read the extracts from both poems below. Identify and name the technique used in each highlighted section.',
        questions: [
          {
            number: 1,
            question: 'In "Exposure", Wilfred Owen writes: "Our brains ache, in the merciless iced east winds that knive us..." Name the technique used in "knive us" and explain its effect.',
            marks: 3,
            lines: 4,
            modelAnswer: 'Owen uses a verb (or metaphor) "knive us" to suggest the wind is a deliberate attacker, personifying the cold as a violent force. This conveys the soldiers\' suffering by making nature seem hostile and aggressive, as if it is intentionally harming them.',
          },
          {
            number: 2,
            question: 'In "Bayonet Charge", Ted Hughes writes: "Suddenly he awoke and was running - raw / In raw-seamed hot khaki..." Identify the structural choice at the start and explain why Hughes begins the poem this way.',
            marks: 3,
            lines: 4,
            modelAnswer: 'Hughes uses an in medias res opening ("Suddenly he awoke and was running") which plunges the reader directly into the action. This creates immediacy and mirrors the soldier\'s disorientation - there is no build-up, reflecting how war gives no time for preparation.',
          },
          {
            number: 3,
            question: 'Compare how both poets use enjambment in the extracts above. What effect does this create in each poem?',
            marks: 4,
            lines: 5,
            modelAnswer: 'Both Owen and Hughes use enjambment to create a sense of momentum. In "Exposure", the enjambment across "iced east winds that knive us..." creates a relentless, drawn-out quality mirroring the soldiers\' endless waiting. In contrast, Hughes\' enjambment in "raw / In raw-seamed" creates urgency and breathlessness, reflecting the frantic pace of the charge. While Owen\'s enjambment emphasises stasis and suffering, Hughes\' emphasises chaotic movement.',
          },
        ],
      },
      {
        title: 'Section B: Comparative Paragraph',
        instructions: 'Using the framework below, write a comparative paragraph about how both poets present the experience of conflict. Use comparison connectives (similarly, however, in contrast, whereas).',
        questions: [
          {
            number: 4,
            question: 'Compare how Owen in "Exposure" and Hughes in "Bayonet Charge" present the physical experience of conflict. You should compare: the poets\' use of language, the effects on the reader.',
            marks: 8,
            lines: 12,
            modelAnswer: 'Both Owen and Hughes present the physical experience of conflict as overwhelming and dehumanising, though they do so in contrasting ways. Owen uses the metaphor "knive us" to present nature itself as a weapon, suggesting that the soldiers suffer not just from enemy fire but from the environment. The verb "knive" implies deliberate cruelty, as if nature conspires against them. Similarly, Hughes presents physical suffering through visceral imagery: "raw / In raw-seamed hot khaki" uses the adjective "raw" to suggest skin rubbed open, creating a painful, sensory image. However, while Owen\'s soldiers experience a slow, numbing suffering emphasised by the cyclical structure, Hughes\' soldier endures a frantic, overwhelming rush conveyed through the breathless enjambment and present tense. This contrast highlights different aspects of conflict: Owen reveals the torment of waiting, whereas Hughes captures the terror of action.',
          },
        ],
      },
    ],
    modelAnswers: [
      {
        question: 'How do both poets use structure to convey the experience of war?',
        answer: 'Owen structures "Exposure" with a cyclical, repetitive form - the refrain "But nothing happens" creates a sense of futile waiting that mirrors the stalemate of trench warfare. The half-rhymes (e.g., "knive us"/"nervous") create discomfort rather than resolution. In contrast, Hughes structures "Bayonet Charge" as a single, breathless narrative that mirrors the soldier\'s forward momentum. The three-stanza structure moves from action to hesitation to dehumanised instinct, charting the soldier\'s psychological breakdown. Both structures reflect the poets\' different perspectives: Owen shows war as endless stasis, Hughes shows it as overwhelming chaos.',
      },
    ],
    homeworkTasks: [
      'Choose a different pair of poems from the anthology. Write one comparative paragraph comparing how both poets use a structural feature to convey meaning. Use at least two comparison connectives.',
      'Create a revision flashcard set for 8 key structural and language terms covered in this lesson. Each card should include: term, definition, example from a poem.',
    ],
    extensionTasks: [
      'Research the biographical context of Wilfred Owen and Ted Hughes. How might their personal experiences have influenced the structural choices in "Exposure" and "Bayonet Charge"?',
      'Write a full comparative essay (3 paragraphs) comparing the presentation of conflict in the two poems, addressing structure, language, and tone.',
    ],
    assessmentCriteria: [
      { band: 'Band 1 (1-4 marks)', description: 'Simple comparison with limited reference to both texts. Basic identification of features with little explanation of effect.', marks: '1-4' },
      { band: 'Band 2 (5-8 marks)', description: 'Clear comparison addressing both poems. Language and/or structure analysed with some explanation of effects. Comparison connectives used.', marks: '5-8' },
      { band: 'Band 3 (9-12 marks)', description: 'Detailed, perceptive comparison of both poems. Sophisticated analysis of language and structure with exploration of effects on the reader. Fluent use of comparison connectives and subject terminology.', marks: '9-12' },
    ],
  },
  'macbeth-ambition': {
    id: 'macbeth-ambition',
    title: 'Macbeth: The Theme of Ambition',
    topic: 'Shakespeare',
    text: 'Macbeth',
    skill: 'Thematic Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
    learningObjectives: [
      'Trace how Shakespeare presents ambition across key scenes',
      'Analyse how language reveals Macbeth\'s psychological state',
      'Evaluate Shakespeare\'s message about unchecked ambition for a Jacobean audience',
    ],
    successCriteria: [
      'I can identify at least 3 key quotations about ambition from different acts',
      'I can analyse language techniques Shakespeare uses to present ambition',
      'I can link ambition to contextual ideas (Divine Right, Jacobean morality)',
      'I can construct an analytical paragraph with embedded quotations',
    ],
    keywords: [
      { term: 'hamartia', definition: 'A fatal flaw in a tragic hero that leads to their downfall' },
      { term: 'hubris', definition: 'Excessive pride or self-confidence, often leading to a character\'s ruin' },
      { term: 'soliloquy', definition: 'A speech in which a character speaks their thoughts aloud, alone on stage' },
      { term: 'aside', definition: 'A remark spoken to the audience that other characters on stage do not hear' },
      { term: 'Divine Right of Kings', definition: 'The belief that monarchs are chosen by God and their authority cannot be questioned' },
      { term: 'tragic hero', definition: 'A noble character whose fatal flaw causes their downfall, evoking pity and fear' },
      { term: 'vaulting ambition', definition: 'Ambition that overreaches itself; from Macbeth\'s own description of his desire for power' },
    ],
    priorKnowledge: [
      'Plot overview of Macbeth (Acts 1-5)',
      'Understanding of the concept of a tragic hero',
      'Basic knowledge of the Jacobean era and King James I',
    ],
    resources: [
      'Macbeth text or printed extract booklet',
      'Quotation tracking sheet',
      'Ambition timeline visual',
      'Model paragraph handout',
      'Exit ticket slips',
    ],
    timings: [
      {
        phase: 'Starter',
        duration: '10 min',
        title: 'Ambition Spectrum',
        description: 'Students position characters on an "ambition spectrum" from least to most ambitious. Discussion: is ambition always negative? When does healthy ambition become destructive?',
        teacherNotes: 'Include: Macbeth, Lady Macbeth, Banquo, Malcolm, Macduff. Key debate point: Banquo is ambitious but resists temptation - why? This sets up the moral framework for the lesson.',
        activities: {
          support: 'Use character cards with a key quotation for each. Place on a physical spectrum line on desks.',
          core: 'Position characters and justify each placement with a quotation from memory or text.',
          stretch: 'Position characters and evaluate whether Shakespeare presents ambition differently for male and female characters.',
        },
        assessmentQuestions: [
          'Can students distinguish between positive and destructive ambition?',
          'Are students using textual evidence to support their opinions?',
        ],
      },
      {
        phase: 'Main Activity 1',
        duration: '15 min',
        title: 'Quotation Tracking: Ambition Across the Play',
        description: 'Students work through 5 key extracts chronologically, highlighting language that reveals ambition. They complete a tracking sheet noting how ambition changes across the play.',
        teacherNotes: 'Key extracts: Act 1 Scene 7 "vaulting ambition", Act 1 Scene 5 Lady Macbeth\'s soliloquy, Act 3 Scene 1 "To be thus is nothing", Act 5 Scene 5 "Tomorrow" soliloquy. Show how ambition transforms from aspiration to despair.',
        activities: {
          support: 'Pre-highlighted extracts with guided questions for each (What does this tell us about ambition here?)',
          core: 'Annotate extracts independently and track the shift in ambition across acts using a timeline chart.',
          stretch: 'Track ambition in both Macbeth and Lady Macbeth, noting how their arcs mirror and invert each other.',
        },
        assessmentQuestions: [
          'Can students identify HOW ambition changes, not just THAT it changes?',
          'Are annotations focusing on language or just summarising plot?',
        ],
      },
      {
        phase: 'Main Activity 2',
        duration: '20 min',
        title: 'Analytical Paragraph: How Does Shakespeare Present Ambition?',
        description: 'Using the model paragraph as a guide, students write an analytical paragraph exploring how Shakespeare uses language to present ambition in a chosen extract.',
        teacherNotes: 'Model paragraph should demonstrate: embedded quotation, language analysis (word level), link to context (Jacobean attitudes to ambition/regicide), writer\'s intention. Circulate to provide verbal feedback.',
        activities: {
          support: 'Fill-in-the-gap paragraph frame focusing on one quotation. Teacher works with this group.',
          core: 'Write a full paragraph using the model as a guide. Must include: quotation, technique, effect, context.',
          stretch: 'Write two paragraphs exploring contrasting presentations of ambition. Include alternative interpretations.',
        },
        assessmentQuestions: [
          'Are students embedding quotations rather than bolt-on quoting?',
          'Is context being linked meaningfully or just added as an afterthought?',
        ],
      },
      {
        phase: 'Plenary',
        duration: '15 min',
        title: 'Shakespeare\'s Message: Discussion & Exit Ticket',
        description: 'Class discussion: What is Shakespeare\'s overall message about ambition? Students complete an exit ticket with their most confident quotation and one aspect they need to revise.',
        teacherNotes: 'Guide towards: Shakespeare presents ambition as inherently destructive when it overrides moral conscience. Link to the Great Chain of Being and Divine Right of Kings. Collect exit tickets to plan differentiation for next lesson.',
        activities: {
          support: 'Complete a sentence: "Shakespeare shows that ambition is... because..."',
          core: 'Write a 3-sentence summary of Shakespeare\'s message about ambition with one supporting quotation.',
          stretch: 'Write a counter-argument: Could Shakespeare be presenting ambition as natural but corrupted by external forces (the witches, Lady Macbeth)?',
        },
        exitTicket: 'Write: (1) Your most confident quotation about ambition and a one-sentence analysis. (2) One thing you need to revise before the next lesson.',
        assessmentQuestions: [
          'Can students articulate Shakespeare\'s message beyond "ambition is bad"?',
          'Do exit tickets reveal understanding of the contextual dimension?',
        ],
      },
    ],
    worksheetSections: [
      {
        title: 'Section A: Quotation Analysis',
        instructions: 'For each quotation, identify the speaker, the context, and analyse how it presents the theme of ambition.',
        questions: [
          {
            number: 1,
            question: '"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on th\'other." Explain how Shakespeare presents ambition in this quotation.',
            marks: 4,
            lines: 5,
            modelAnswer: 'Shakespeare uses the metaphor of horse-riding ("spur", "vaulting") to present ambition as something that requires external motivation and can easily overreach. The verb "o\'erleaps" suggests ambition going beyond its natural limits, while "falls" foreshadows Macbeth\'s eventual downfall. Shakespeare is warning that ambition without moral justification ("no spur") leads to destruction. For a Jacobean audience, this would reinforce the idea that disrupting the natural order brings punishment.',
          },
          {
            number: 2,
            question: '"Stars, hide your fires; / Let not light see my black and deep desires." How does Shakespeare use imagery here to reveal Macbeth\'s ambition?',
            marks: 4,
            lines: 5,
            modelAnswer: 'Shakespeare uses the contrast between "light" and "black" to present Macbeth\'s ambition as something dark and shameful that must be hidden. The imperative "hide your fires" personifies the stars and suggests Macbeth wants to conceal his intentions from God/heaven - the stars representing divine oversight. The adjectives "black and deep" suggest his desires are both morally corrupt ("black") and profoundly dangerous ("deep"). This reveals that Macbeth is aware his ambition is sinful, creating dramatic irony as he proceeds anyway.',
          },
          {
            number: 3,
            question: 'Compare how ambition is presented in the two quotations above. How does Macbeth\'s relationship with his own ambition change?',
            marks: 6,
            lines: 8,
            modelAnswer: 'In the first quotation, Macbeth presents his ambition as something separate from himself - an external force ("vaulting ambition") that he observes almost objectively. He recognises its danger and seems to resist it, acknowledging it could "fall". However, in the second quotation, ambition has become internalised as "my... desires" - it is now part of his identity. Rather than resisting, he now seeks to conceal it, suggesting he has accepted the ambition even though he knows it is "black". This shift from resistance to concealment traces Macbeth\'s moral deterioration and foreshadows his eventual inability to control his ambition once it fully consumes him.',
          },
        ],
      },
    ],
    modelAnswers: [
      {
        question: 'How does Shakespeare present the destructive nature of ambition throughout Macbeth?',
        answer: 'Shakespeare presents ambition as a force that corrupts the soul progressively. Initially, Macbeth is a "valiant" warrior whose ambition is channelled into loyal service. However, once the witches\' prophecy awakens his latent desire for power, ambition becomes a destructive force. The metaphor "vaulting ambition, which o\'erleaps itself" in Act 1 Scene 7 presents ambition as exceeding natural limits - like a rider jumping too far and falling. As the play progresses, Macbeth\'s language shifts from hesitation to paranoia ("To be thus is nothing; but to be safely thus"), showing how one act of ambition demands further acts to maintain power. Shakespeare\'s message, directed at his Jacobean audience who had witnessed the Gunpowder Plot, is that ambition which disrupts the divine order leads inevitably to self-destruction. The final image of Macbeth as a "dead butcher" shows how ambition has stripped him of all humanity.',
      },
    ],
    homeworkTasks: [
      'Learn 5 key quotations about ambition from Macbeth. For each, write one sentence explaining how it presents the theme.',
      'Write an analytical paragraph answering: How does Shakespeare use the soliloquy form to reveal Macbeth\'s inner conflict about ambition?',
    ],
    extensionTasks: [
      'Compare how ambition is presented in Macbeth and Ozymandias. What similarities and differences can you identify in how both writers warn about the dangers of excessive ambition?',
      'Research the Gunpowder Plot of 1605. Write a paragraph explaining how this event might have influenced Shakespeare\'s presentation of ambition and regicide in Macbeth.',
    ],
    assessmentCriteria: [
      { band: 'Band 1 (1-10 marks)', description: 'Simple awareness of theme with narrative/descriptive response. Limited quotation use. Basic understanding of context.', marks: '1-10' },
      { band: 'Band 2 (11-20 marks)', description: 'Clear understanding of how ambition is presented. Relevant quotations with some analysis of language. References to context that support the argument.', marks: '11-20' },
      { band: 'Band 3 (21-30 marks)', description: 'Detailed, critical analysis of Shakespeare\'s presentation of ambition. Precise, embedded quotations with perceptive language analysis. Sophisticated integration of context throughout.', marks: '21-30' },
    ],
  },
  'language-paper1-q2': {
    id: 'language-paper1-q2',
    title: 'Language Paper 1 Q2: Language Analysis',
    topic: 'Language',
    skill: 'Language Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 45,
    difficulty: 'Foundation',
    learningObjectives: [
      'Identify relevant language features in a prose extract',
      'Analyse the effect of specific word choices on the reader',
      'Structure a Q2 response using the "What, How, Why" framework',
    ],
    successCriteria: [
      'I can select 2-3 relevant quotations from the specified lines',
      'I can name the language technique used in each quotation',
      'I can explain the effect on the reader with detail',
      'I can use subject terminology accurately',
    ],
    keywords: [
      { term: 'connotation', definition: 'The associated meaning or feeling a word suggests beyond its literal definition' },
      { term: 'imagery', definition: 'Visually descriptive language that creates pictures in the reader\'s mind' },
      { term: 'semantic field', definition: 'A group of words related in meaning used to create a dominant impression' },
      { term: 'pathetic fallacy', definition: 'Attributing human emotions to weather or nature to reflect mood' },
      { term: 'sibilance', definition: 'Repetition of "s" sounds to create a hissing, sinister, or soft effect' },
      { term: 'plosive', definition: 'Harsh consonant sounds (b, d, g, k, p, t) that create a forceful, aggressive tone' },
      { term: 'tone', definition: 'The attitude or feeling conveyed by the writer\'s word choices' },
    ],
    priorKnowledge: [
      'Basic understanding of language techniques',
      'Ability to select short, relevant quotations',
      'Familiarity with AQA Paper 1 structure',
    ],
    resources: [
      'Practice extract (19th or 20th century prose)',
      '"What, How, Why" framework sheet',
      'Technique checklist handout',
    ],
    timings: [
      {
        phase: 'Starter',
        duration: '8 min',
        title: 'Technique Speed Round',
        description: 'Display 6 short sentences on the board. Students identify the technique in each and write the effect in one sentence. Quick-fire review as a class.',
        teacherNotes: 'Use sentences with clear examples: a simile, metaphor, personification, alliteration, short sentence, listing. This builds confidence before tackling a full extract.',
        activities: {
          support: 'Provide a technique word bank. Students match technique to sentence.',
          core: 'Identify technique and write the effect in one sentence per example.',
          stretch: 'Identify technique, explain effect, and suggest what the writer\'s intention might be.',
        },
        assessmentQuestions: [
          'Can all students name at least 4 basic techniques?',
          'Are students confusing simile and metaphor? Address if so.',
        ],
      },
      {
        phase: 'Main Activity 1',
        duration: '12 min',
        title: 'Model Response Deconstruction',
        description: 'Teacher displays a model Q2 response. Students highlight the "What" (quotation), "How" (technique), and "Why" (effect) in three different colours. Class discusses what makes it effective.',
        teacherNotes: 'Use a response that scores 7/8 marks. Emphasise: short embedded quotations, precise terminology, focus on the reader\'s response ("this creates a sense of..." / "this suggests to the reader...").',
        activities: {
          support: 'Pre-highlighted model with labels. Students copy the framework into their notes.',
          core: 'Highlight the model independently, then compare with the teacher\'s annotations.',
          stretch: 'Highlight and evaluate: what could make this response even stronger? Suggest an improvement.',
        },
        assessmentQuestions: [
          'Can students distinguish between the "How" and the "Why"?',
          'Are students noting the importance of short, embedded quotations?',
        ],
      },
      {
        phase: 'Main Activity 2',
        duration: '15 min',
        title: 'Independent Practice: Writing a Q2 Response',
        description: 'Students read a new extract and write their own Q2 response using the "What, How, Why" framework. Aim for 2-3 analytical points in 10-12 minutes (exam timing).',
        teacherNotes: 'Circulate and provide live feedback. Common issues: quotations too long, technique not named, effect too vague. This is the core assessed task of the lesson.',
        activities: {
          support: 'Quotations pre-selected. Students analyse using the framework with sentence starters.',
          core: 'Select own quotations and write 2-3 points using the framework independently.',
          stretch: 'Write 3 points and include a comment on how techniques work together to create an overall effect.',
        },
        assessmentQuestions: [
          'Are students working within exam timing (10-12 minutes)?',
          'Are quotations short and embedded, or long and bolt-on?',
        ],
      },
      {
        phase: 'Plenary',
        duration: '10 min',
        title: 'Self-Assessment Against Mark Scheme',
        description: 'Students use a simplified AQA mark scheme to self-assess their response. They highlight evidence of each skill and identify their current band. Set a personal target.',
        teacherNotes: 'Display band descriptors 2 (5-6 marks) and 3 (7-8 marks). Students should be aiming for Band 2 minimum. Collect responses for teacher marking.',
        activities: {
          support: 'Use a tick-sheet version of the mark scheme. Identify which skills are present.',
          core: 'Self-assess against the mark scheme and write a target for improvement.',
          stretch: 'Self-assess and rewrite their weakest point to move it into the next band.',
        },
        exitTicket: 'Rate your confidence 1-5 for: (a) selecting quotations, (b) naming techniques, (c) explaining effect on the reader.',
        assessmentQuestions: [
          'Are students able to honestly self-assess?',
          'Do targets show specific understanding of what to improve?',
        ],
      },
    ],
    worksheetSections: [
      {
        title: 'Language Paper 1, Question 2 Practice',
        instructions: 'Read the extract carefully. How does the writer use language to describe the setting? Refer to the text in your answer. [8 marks]',
        questions: [
          {
            number: 1,
            question: 'Select a quotation from lines 1-5 that describes the setting. Name the technique used and explain the effect on the reader.',
            marks: 3,
            lines: 5,
            modelAnswer: 'The writer uses the metaphor "the fog crept like a thief through the alleyways" to personify the fog as something sinister and criminal. The verb "crept" has connotations of stealth and danger, suggesting the setting is threatening. This creates a sense of unease for the reader, as the fog seems to have malicious intent.',
          },
          {
            number: 2,
            question: 'Select a second quotation from the extract. Analyse how the writer\'s language choice creates a specific atmosphere.',
            marks: 3,
            lines: 5,
            modelAnswer: 'The writer describes the street as "a corridor of shadows, each doorway a gaping mouth." The noun "corridor" suggests the character is trapped, while "gaping mouth" personifies the doorways as threatening, as if they might swallow anyone who enters. The semantic field of enclosure and threat creates a claustrophobic, gothic atmosphere.',
          },
          {
            number: 3,
            question: 'How do the language techniques across the extract work together to create an overall impression of the setting?',
            marks: 2,
            lines: 4,
            modelAnswer: 'Across the extract, the writer consistently uses personification and dark imagery to present the setting as hostile and alive with threat. The accumulation of sinister details builds gradually, creating an escalating sense of dread that mirrors the character\'s growing fear.',
          },
        ],
      },
    ],
    modelAnswers: [
      {
        question: 'Full model Q2 response for this extract',
        answer: 'The writer uses language to present the setting as threatening and oppressive. The metaphor "the fog crept like a thief" personifies the fog as a criminal, with the verb "crept" suggesting stealth and danger. This makes the reader feel uneasy, as if the setting itself is a predator. Furthermore, the writer describes doorways as "gaping mouths", using personification to suggest the buildings are alive and threatening. The adjective "gaping" implies something hungry and consuming, creating a gothic atmosphere of entrapment. Finally, the short sentence "There was no escape" creates a blunt, definitive tone that mirrors the character\'s desperation. The abrupt syntax contrasts with the flowing descriptive sentences before it, shocking the reader and emphasising the character\'s hopelessness.',
      },
    ],
    homeworkTasks: [
      'Complete a full Q2 response on the second practice extract provided. Time yourself: aim for 10-12 minutes. Self-assess using the mark scheme.',
      'Create a "technique toolkit" page in your exercise book with 10 language techniques, their definitions, and an example of each.',
    ],
    extensionTasks: [
      'Find a paragraph from a novel you are reading at home. Write a Q2-style analysis of the language used to create mood or atmosphere.',
      'Compare two extracts from different centuries. How do the writers\' language choices reflect their time period?',
    ],
    assessmentCriteria: [
      { band: 'Band 1 (1-2 marks)', description: 'Simple identification of language features. Limited or no analysis of effects. Quotations may be absent or too long.', marks: '1-2' },
      { band: 'Band 2 (3-5 marks)', description: 'Clear identification with some analysis of effects. Relevant quotations selected. Some use of subject terminology.', marks: '3-5' },
      { band: 'Band 3 (6-8 marks)', description: 'Detailed, perceptive analysis of language. Short, well-chosen quotations embedded fluently. Precise subject terminology. Exploration of effects on the reader.', marks: '6-8' },
    ],
  },
  'pee-paragraphs': {
    id: 'pee-paragraphs',
    title: 'Building PEE Paragraphs: Point, Evidence, Explain',
    topic: 'Skills',
    skill: 'Essay Structure',
    examBoard: 'All',
    yearGroup: 'Year 9',
    duration: 45,
    difficulty: 'Foundation',
    learningObjectives: [
      'Understand the structure of a PEE paragraph',
      'Select relevant evidence to support an analytical point',
      'Write clear explanations that analyse the effect of language',
    ],
    successCriteria: [
      'I can write a clear analytical point that answers the question',
      'I can select a short, relevant quotation as evidence',
      'I can explain how the quotation supports my point using subject terminology',
      'I can link my explanation to the effect on the reader',
    ],
    keywords: [
      { term: 'point', definition: 'The opening analytical statement that directly answers the question' },
      { term: 'evidence', definition: 'A short, relevant quotation from the text that supports your point' },
      { term: 'explanation', definition: 'Analysis of HOW and WHY the evidence supports your point' },
      { term: 'quotation', definition: 'The exact words from a text, placed in quotation marks' },
      { term: 'embed', definition: 'To weave a quotation naturally into your own sentence' },
      { term: 'analyse', definition: 'To examine something in detail, exploring how and why it works' },
      { term: 'effect', definition: 'The impact a technique or word choice has on the reader' },
    ],
    priorKnowledge: [
      'Basic reading comprehension skills',
      'Familiarity with quotation marks',
      'Some knowledge of language techniques (simile, metaphor)',
    ],
    resources: [
      'PEE framework poster / handout',
      'Colour-coded model paragraphs',
      'Practice extract',
    ],
    timings: [
      {
        phase: 'Starter',
        duration: '8 min',
        title: 'Paragraph Surgery',
        description: 'Display a "broken" PEE paragraph with common mistakes (no quotation, vague point, retelling instead of analysing). Students diagnose the problems and suggest fixes.',
        teacherNotes: 'Common mistakes to include: Point that retells plot, evidence that is too long (full sentence), explanation that says "this shows" without saying how. Make it fun - "Doctor, what is wrong with this paragraph?"',
        activities: {
          support: 'Identify 2 problems from a checklist of options.',
          core: 'Identify all problems and rewrite one sentence to fix it.',
          stretch: 'Identify problems, fix them all, and improve the paragraph to include subject terminology.',
        },
        assessmentQuestions: [
          'Can students identify the difference between retelling and analysing?',
          'Do students understand what "too long" means for a quotation?',
        ],
      },
      {
        phase: 'Main Activity 1',
        duration: '12 min',
        title: 'Colour-Coded Modelling',
        description: 'Teacher models writing a PEE paragraph live on the board, thinking aloud. Point in blue, Evidence in green, Explanation in red. Students annotate their copy in the same colours.',
        teacherNotes: 'Use a simple, accessible text (e.g. a descriptive paragraph about a storm). Emphasise the thinking process: "My point answers the question...", "I need a SHORT quotation...", "Now I explain HOW this works..."',
        activities: {
          support: 'Follow along with a partially completed paragraph frame. Fill in the gaps as the teacher models.',
          core: 'Annotate the model independently and then write their own point for a different aspect of the text.',
          stretch: 'Annotate and extend: add a fourth sentence that explores an alternative interpretation.',
        },
        assessmentQuestions: [
          'Are students understanding the thinking process, not just copying the product?',
          'Can students explain WHY we use short quotations?',
        ],
      },
      {
        phase: 'Main Activity 2',
        duration: '15 min',
        title: 'Independent PEE Practice',
        description: 'Students write 2 PEE paragraphs about the practice extract. Teacher circulates providing targeted feedback to each group.',
        teacherNotes: 'Prioritise circulating to the support group first. Encourage students to colour-code their own writing. Display a checklist: Did you make a clear point? Is your quotation short? Did you explain the EFFECT?',
        activities: {
          support: 'Write 1 paragraph using the sentence starter frame. Second paragraph with fewer prompts.',
          core: 'Write 2 paragraphs independently using the framework as a reference.',
          stretch: 'Write 2 paragraphs without the framework. Add context or alternative interpretations.',
        },
        assessmentQuestions: [
          'Are paragraphs following the PEE structure consistently?',
          'Is the "Explain" section actually analysing effect, or just restating the point?',
        ],
      },
      {
        phase: 'Plenary',
        duration: '10 min',
        title: 'Traffic Light Self-Assessment',
        description: 'Students rate their confidence (red/amber/green) for each part of PEE. Share one strong paragraph on the visualiser. Exit ticket: write the "explain" sentence for a given point and quotation.',
        teacherNotes: 'The exit ticket tests the hardest skill (explanation). Collect these to identify students who need further support. Green = confident, Amber = mostly there, Red = need more practice.',
        activities: {
          support: 'Complete the exit ticket with a sentence starter provided.',
          core: 'Complete the exit ticket independently.',
          stretch: 'Complete the exit ticket and write an improved version that includes subject terminology.',
        },
        exitTicket: 'Given: Point - "The writer presents the character as powerful." Evidence - "iron fist". Write the Explanation sentence.',
        assessmentQuestions: [
          'Can students write an explanation independently?',
          'Is the exit ticket showing analysis of HOW, not just WHAT?',
        ],
      },
    ],
    worksheetSections: [
      {
        title: 'Section A: Identifying PEE',
        instructions: 'Read each paragraph below. Underline the Point in blue, the Evidence in green, and the Explanation in red.',
        questions: [
          {
            number: 1,
            question: '"The writer presents the character as threatening. This is shown through the simile "he loomed over her like a dark cloud." The comparison to a "dark cloud" suggests danger and an approaching storm, making the reader feel that something bad is about to happen." Label each part of this paragraph (Point / Evidence / Explanation).',
            marks: 2,
            lines: 3,
            modelAnswer: 'Point: "The writer presents the character as threatening." Evidence: "he loomed over her like a dark cloud." Explanation: "The comparison to a dark cloud suggests danger and an approaching storm, making the reader feel that something bad is about to happen."',
          },
          {
            number: 2,
            question: 'Write your own PEE paragraph about the following quotation from a description of a forest: "The trees stretched their gnarled fingers towards the grey sky."',
            marks: 4,
            lines: 6,
            modelAnswer: 'The writer presents the forest as unsettling and hostile. The personification "the trees stretched their gnarled fingers" gives the trees human qualities, making them seem alive and reaching out as if to grab someone. The adjective "gnarled" has connotations of age, decay and ugliness, suggesting the forest is ancient and unwelcoming. This creates an eerie atmosphere for the reader, as the natural world seems threatening rather than peaceful.',
          },
        ],
      },
    ],
    modelAnswers: [
      {
        question: 'What makes a strong PEE paragraph?',
        answer: 'A strong PEE paragraph starts with a clear, analytical point that directly answers the question (not plot retelling). The evidence should be a short, embedded quotation - ideally just a few key words rather than a whole sentence. The explanation should analyse HOW the quotation supports the point, naming a technique where possible and exploring the EFFECT on the reader. The strongest paragraphs also consider connotations of individual words and link to the writer\'s intention or context.',
      },
    ],
    homeworkTasks: [
      'Write 3 PEE paragraphs about a text you are studying in class. Colour-code each paragraph to show the Point, Evidence, and Explanation clearly.',
      'Find an example of effective descriptive writing in a book, newspaper, or online article. Write a PEE paragraph analysing one technique the writer uses.',
    ],
    extensionTasks: [
      'Upgrade your PEE paragraphs to PEEL paragraphs by adding a "Link" sentence that connects back to the question or introduces your next point.',
      'Write a PEE paragraph, then rewrite it as a PETER paragraph (Point, Evidence, Technique, Explain, Reader response). Compare the two: which is more effective?',
    ],
    assessmentCriteria: [
      { band: 'Developing', description: 'Can identify parts of a PEE paragraph. Point may retell rather than analyse. Quotations present but may be too long. Explanation is basic or restates the point.', marks: '1-3' },
      { band: 'Secure', description: 'Clear analytical point. Short, relevant quotation selected. Explanation analyses the effect with some reference to technique. Structure is consistent.', marks: '4-6' },
      { band: 'Excelling', description: 'Precise, insightful point. Embedded quotation. Detailed explanation exploring connotations, technique, and reader response. May include alternative interpretations.', marks: '7-9' },
    ],
  },
}

// ── Ordered lesson IDs for prev/next navigation ──────────────────────────────

const LESSON_ORDER = Object.keys(LESSONS)

// ── Default lesson for unknown IDs ───────────────────────────────────────────

function getDefaultLesson(id: string): LessonData {
  return {
    id,
    title: 'Lesson Plan',
    topic: 'General',
    skill: 'Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
    learningObjectives: ['Develop key analytical skills', 'Apply techniques to exam-style questions'],
    successCriteria: ['I can analyse a text using appropriate terminology', 'I can write a structured analytical paragraph'],
    keywords: [
      { term: 'analysis', definition: 'Examining something in detail to understand its meaning and effect' },
      { term: 'technique', definition: 'A specific method or device used by a writer to create effect' },
      { term: 'effect', definition: 'The impact or response created in the reader' },
      { term: 'evidence', definition: 'A quotation or reference from the text that supports your point' },
    ],
    priorKnowledge: ['Basic reading comprehension', 'Familiarity with the text'],
    resources: ['Text copies', 'Worksheet'],
    timings: [
      {
        phase: 'Starter',
        duration: '10 min',
        title: 'Retrieval Practice',
        description: 'Quick recall activity based on prior learning.',
        activities: { support: 'Guided recall with prompts.', core: 'Independent recall.', stretch: 'Recall and extend with application.' },
      },
      {
        phase: 'Main Activity',
        duration: '35 min',
        title: 'Core Learning Task',
        description: 'Focused analytical work on the key skill area.',
        activities: { support: 'Scaffolded task with framework.', core: 'Independent analysis task.', stretch: 'Extended analysis with alternative interpretations.' },
      },
      {
        phase: 'Plenary',
        duration: '15 min',
        title: 'Review & Assessment',
        description: 'Peer or self-assessment against success criteria.',
        activities: { support: 'Checklist self-assessment.', core: 'Full success criteria assessment.', stretch: 'Assessment plus improvement rewrite.' },
      },
    ],
    worksheetSections: [],
    modelAnswers: [],
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function difficultyColor(d: string): string {
  switch (d) {
    case 'Foundation':
      return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'Higher':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    default:
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

function phaseColor(phase: string): { bg: string; text: string; border: string; icon: string } {
  if (phase.toLowerCase().includes('starter')) return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', icon: 'text-amber-400' }
  if (phase.toLowerCase().includes('plenary')) return { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', icon: 'text-purple-400' }
  return { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', icon: 'text-blue-400' }
}

function phaseIndex(phase: string): number {
  if (phase.toLowerCase().includes('starter')) return 0
  if (phase.toLowerCase().includes('plenary')) return 3
  return 1
}

// ── Print styles ─────────────────────────────────────────────────────────────

const LESSON_PRINT_STYLES = `
@media print {
  /* Hide interactive elements */
  nav, aside, header, footer,
  [data-print-hide],
  .no-print {
    display: none !important;
  }

  /* Reset body */
  body {
    background: white !important;
    color: black !important;
    font-size: 10pt;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  /* A4 format */
  .print-container {
    width: 210mm;
    margin: 0 auto;
    padding: 12mm 18mm;
    background: white !important;
  }

  .print-container * {
    color: black !important;
    border-color: #444 !important;
  }

  /* Section handling */
  .print-section {
    page-break-inside: avoid;
    margin-bottom: 5mm;
  }

  .print-page-break {
    page-break-before: always;
  }

  /* Cards should look clean */
  .print-container [class*="card"] {
    border: 1px solid #ccc !important;
    box-shadow: none !important;
    background: white !important;
  }

  /* Badges */
  .print-container [class*="badge"] {
    border: 1px solid #999 !important;
    background: #f5f5f5 !important;
    color: black !important;
    font-weight: 600 !important;
  }

  /* Timing cards - always show expanded in print */
  .timing-content {
    max-height: none !important;
    opacity: 1 !important;
    overflow: visible !important;
  }

  /* Differentiation grid */
  .diff-support { border-left: 3px solid #888 !important; }
  .diff-core { border-left: 3px solid #555 !important; }
  .diff-stretch { border-left: 3px solid #222 !important; }

  /* Vocabulary sidebar */
  .vocab-sidebar dt {
    font-weight: 700 !important;
  }

  /* Checkboxes in print */
  .objective-checkbox {
    width: 12px;
    height: 12px;
    border: 1.5px solid black !important;
    border-radius: 2px;
    display: inline-block;
    margin-right: 6px;
    vertical-align: middle;
  }

  /* Assessment criteria table */
  .assessment-table {
    width: 100%;
    border-collapse: collapse;
  }
  .assessment-table th,
  .assessment-table td {
    border: 1px solid #666 !important;
    padding: 4mm 3mm;
    text-align: left;
    font-size: 9pt;
  }
  .assessment-table th {
    background: #eee !important;
    font-weight: 700;
  }

  /* Timeline line */
  .timeline-line {
    border-left: 2px solid #999 !important;
  }

  /* Footer */
  @page {
    margin: 10mm;
    size: A4;
    @bottom-center {
      content: counter(page);
    }
  }
}
`

// ── Main Component ───────────────────────────────────────────────────────────

export default function LessonDetailPage() {
  const params = useParams()
  const lessonId = params.lessonId as string
  const worksheetRef = useRef<HTMLDivElement>(null)

  const [showAnswers, setShowAnswers] = useState(false)
  const [expandedTimings, setExpandedTimings] = useState<Set<number>>(new Set([0]))
  const [checkedObjectives, setCheckedObjectives] = useState<Set<number>>(new Set())
  const [checkedCriteria, setCheckedCriteria] = useState<Set<number>>(new Set())

  const lesson = LESSONS[lessonId] ?? getDefaultLesson(lessonId)

  // Prev/Next navigation
  const currentIndex = LESSON_ORDER.indexOf(lessonId)
  const prevLesson = currentIndex > 0 ? LESSONS[LESSON_ORDER[currentIndex - 1]] : null
  const nextLesson = currentIndex >= 0 && currentIndex < LESSON_ORDER.length - 1 ? LESSONS[LESSON_ORDER[currentIndex + 1]] : null

  function toggleTiming(index: number) {
    setExpandedTimings((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  function expandAll() {
    setExpandedTimings(new Set(lesson.timings.map((_, i) => i)))
  }

  function collapseAll() {
    setExpandedTimings(new Set())
  }

  function handlePrint() {
    window.print()
  }

  function handlePrintWorksheet() {
    // Open a new window with just the worksheet for clean printing
    const printWindow = window.open('', '_blank')
    if (!printWindow || !worksheetRef.current) {
      // Fallback to regular print
      window.print()
      return
    }
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]')
    let styleHtml = ''
    styles.forEach((s) => { styleHtml += s.outerHTML })
    printWindow.document.write(`
      <!DOCTYPE html>
      <html><head><title>${lesson.title} - Worksheet</title>${styleHtml}
      <style>body { background: white !important; padding: 20px; }</style>
      </head><body>${worksheetRef.current.outerHTML}</body></html>
    `)
    printWindow.document.close()
    printWindow.onload = () => {
      printWindow.print()
      printWindow.close()
    }
  }

  function toggleObjective(index: number) {
    setCheckedObjectives((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  function toggleCriterion(index: number) {
    setCheckedCriteria((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const isRecommended = lesson.recommended ?? false

  // Calculate total marks for worksheet
  const totalMarks = lesson.worksheetSections.reduce(
    (sum, section) => sum + section.questions.reduce((qSum, q) => qSum + (q.marks ?? 0), 0),
    0,
  )

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LESSON_PRINT_STYLES }} />

      <div className="min-h-screen bg-background print-container">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link
            href="/school/lessons"
            className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors no-print"
            data-print-hide
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Lesson Plans
          </Link>

          {/* ── HEADER ─────────────────────────────────────────────── */}
          <div className="mb-6 print-section">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {isRecommended && (
                    <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-xs">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Suggested by Analytics
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">{lesson.examBoard}</Badge>
                  <Badge variant="outline" className="text-xs">{lesson.yearGroup}</Badge>
                  <Badge variant="outline" className={cn('text-xs', difficultyColor(lesson.difficulty))}>
                    {lesson.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {lesson.topic}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Target className="h-3 w-3 mr-1" />
                    {lesson.skill}
                  </Badge>
                </div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  {lesson.title}
                </h1>
                {lesson.text && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Text: <span className="font-medium text-foreground">{lesson.text}</span>
                  </p>
                )}
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {lesson.duration} minutes
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2 shrink-0 no-print" data-print-hide>
                <Button onClick={handlePrint} variant="outline" size="sm">
                  <Printer className="h-4 w-4" />
                  Print Lesson Plan
                </Button>
                <Button variant="default" size="sm">
                  <Users className="h-4 w-4" />
                  Assign to Class
                </Button>
              </div>
            </div>

            {isRecommended && lesson.recommendReason && (
              <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                <p className="text-sm text-amber-400 flex items-start gap-2">
                  <Sparkles className="h-4 w-4 mt-0.5 shrink-0" />
                  {lesson.recommendReason}
                </p>
              </div>
            )}
          </div>

          <Separator className="mb-6" />

          {/* ── MAIN GRID: Content + Vocabulary Sidebar ──────────── */}
          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

            {/* Left column: main content */}
            <div className="min-w-0 space-y-6">

              {/* ── Learning Objectives with Checkboxes ──────────── */}
              <Card className="print-section">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Learning Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {lesson.learningObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground group">
                        <button
                          onClick={() => toggleObjective(i)}
                          className="mt-0.5 shrink-0 no-print"
                          data-print-hide
                        >
                          <div className={cn(
                            'h-4 w-4 rounded border-2 transition-colors flex items-center justify-center',
                            checkedObjectives.has(i)
                              ? 'bg-primary border-primary text-primary-foreground'
                              : 'border-muted-foreground/30 hover:border-primary/50',
                          )}>
                            {checkedObjectives.has(i) && (
                              <CheckCircle className="h-3 w-3" />
                            )}
                          </div>
                        </button>
                        {/* Print-only checkbox */}
                        <span className="objective-checkbox hidden print:inline-block" />
                        <span className={cn(
                          'transition-colors',
                          checkedObjectives.has(i) && 'line-through text-muted-foreground',
                        )}>
                          {obj}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* ── Success Criteria with Checkboxes ──────────────── */}
              <Card className="print-section">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-green-400" />
                    Success Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {lesson.successCriteria.map((sc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground group">
                        <button
                          onClick={() => toggleCriterion(i)}
                          className="mt-0.5 shrink-0 no-print"
                          data-print-hide
                        >
                          <div className={cn(
                            'h-4 w-4 rounded border-2 transition-colors flex items-center justify-center',
                            checkedCriteria.has(i)
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-muted-foreground/30 hover:border-green-500/50',
                          )}>
                            {checkedCriteria.has(i) && (
                              <CheckCircle className="h-3 w-3" />
                            )}
                          </div>
                        </button>
                        <span className="objective-checkbox hidden print:inline-block" />
                        <span className={cn(
                          'transition-colors',
                          checkedCriteria.has(i) && 'line-through text-muted-foreground',
                        )}>
                          {sc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* ── Prior Knowledge ───────────────────────────────── */}
              <div className="print-section">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Prior Knowledge Required
                </h3>
                <ul className="space-y-1">
                  {lesson.priorKnowledge.map((pk, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                      {pk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Resources ─────────────────────────────────────── */}
              <Card className="print-section">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-400" />
                    Resources Needed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {lesson.resources.map((res, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-blue-400/50 shrink-0" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Separator />

              {/* ── LESSON STRUCTURE TIMELINE ──────────────────────── */}
              <section className="print-section">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Lesson Structure
                  </h2>
                  <div className="flex items-center gap-2 no-print" data-print-hide>
                    <Button variant="ghost" size="sm" onClick={expandAll}>
                      Expand All
                    </Button>
                    <Button variant="ghost" size="sm" onClick={collapseAll}>
                      Collapse All
                    </Button>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border timeline-line hidden sm:block" />

                  <div className="space-y-3">
                    {lesson.timings.map((timing, i) => {
                      const isExpanded = expandedTimings.has(i)
                      const colors = phaseColor(timing.phase)

                      return (
                        <div key={i} className="relative sm:pl-12">
                          {/* Timeline dot */}
                          <div className={cn(
                            'absolute left-2.5 top-5 h-3 w-3 rounded-full border-2 bg-background hidden sm:block z-10',
                            colors.border, colors.bg,
                          )} />

                          <Card className={cn('transition-all', isExpanded && 'ring-1 ring-border')}>
                            <button
                              onClick={() => toggleTiming(i)}
                              className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-accent/30 transition-colors rounded-xl no-print"
                              data-print-hide
                            >
                              <Badge
                                variant="outline"
                                className={cn('shrink-0 text-xs font-bold', colors.bg, colors.text, colors.border)}
                              >
                                {timing.phase}
                              </Badge>
                              <div className="flex-1 min-w-0">
                                <span className="text-sm font-semibold text-foreground">{timing.title}</span>
                              </div>
                              <span className="text-xs text-muted-foreground shrink-0 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {timing.duration}
                              </span>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                              )}
                            </button>

                            {/* Print-only header (always visible in print) */}
                            <div className="hidden print:block px-5 pt-4">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-bold uppercase">{timing.phase}</span>
                                <span className="text-xs">({timing.duration})</span>
                                <span className="text-sm font-semibold">{timing.title}</span>
                              </div>
                            </div>

                            {/* Expanded content (always visible in print) */}
                            <div className={cn(
                              'timing-content overflow-hidden transition-all',
                              isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 print:max-h-none print:opacity-100',
                            )}>
                              <CardContent className="pt-0 pb-5 px-5">
                                <p className="text-sm text-foreground mb-4">{timing.description}</p>

                                {timing.teacherNotes && (
                                  <div className="mb-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                                    <p className="text-xs font-semibold text-amber-400 mb-1 uppercase tracking-wider">
                                      Teacher Notes
                                    </p>
                                    <p className="text-sm text-muted-foreground">{timing.teacherNotes}</p>
                                  </div>
                                )}

                                {/* Differentiated Activities */}
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                                  <Users className="h-3.5 w-3.5" />
                                  Differentiated Activities
                                </h4>
                                <div className="grid gap-2 sm:grid-cols-3">
                                  <div className="diff-support rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-green-400 mb-1">
                                      Support (LA)
                                    </p>
                                    <p className="text-xs text-foreground">{timing.activities.support}</p>
                                  </div>
                                  <div className="diff-core rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1">
                                      Core (MA)
                                    </p>
                                    <p className="text-xs text-foreground">{timing.activities.core}</p>
                                  </div>
                                  <div className="diff-stretch rounded-lg border border-purple-500/20 bg-purple-500/5 p-3">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1">
                                      Stretch (HA)
                                    </p>
                                    <p className="text-xs text-foreground">{timing.activities.stretch}</p>
                                  </div>
                                </div>

                                {/* Assessment questions for this phase */}
                                {timing.assessmentQuestions && timing.assessmentQuestions.length > 0 && (
                                  <div className="mt-4">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                      <ClipboardList className="h-3.5 w-3.5" />
                                      Assessment Checkpoints
                                    </h4>
                                    <ul className="space-y-1">
                                      {timing.assessmentQuestions.map((q, qi) => (
                                        <li key={qi} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                                          {q}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Exit ticket */}
                                {timing.exitTicket && (
                                  <div className="mt-4 rounded-lg border border-purple-500/20 bg-purple-500/5 p-3">
                                    <p className="text-xs font-semibold text-purple-400 mb-1 uppercase tracking-wider flex items-center gap-1.5">
                                      <ListChecks className="h-3.5 w-3.5" />
                                      Exit Ticket
                                    </p>
                                    <p className="text-sm text-foreground">{timing.exitTicket}</p>
                                  </div>
                                )}
                              </CardContent>
                            </div>
                          </Card>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              <Separator />

              {/* ── HOMEWORK & EXTENSION ───────────────────────────── */}
              {(lesson.homeworkTasks?.length || lesson.extensionTasks?.length) && (
                <div className="grid gap-4 sm:grid-cols-2 print-section">
                  {lesson.homeworkTasks && lesson.homeworkTasks.length > 0 && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Home className="h-4 w-4 text-orange-400" />
                          Homework Tasks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-3 list-decimal list-inside">
                          {lesson.homeworkTasks.map((task, i) => (
                            <li key={i} className="text-sm text-foreground leading-relaxed">
                              {task}
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  )}

                  {lesson.extensionTasks && lesson.extensionTasks.length > 0 && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          Extension / Challenge
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-3 list-decimal list-inside">
                          {lesson.extensionTasks.map((task, i) => (
                            <li key={i} className="text-sm text-foreground leading-relaxed">
                              {task}
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {/* ── ASSESSMENT CRITERIA / RUBRIC ──────────────────── */}
              {lesson.assessmentCriteria && lesson.assessmentCriteria.length > 0 && (
                <Card className="print-section">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-500" />
                      Assessment Criteria
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Use this rubric to assess student work against band descriptors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="assessment-table w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="py-2 px-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[140px]">Band</th>
                            <th className="py-2 px-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Descriptor</th>
                            <th className="py-2 px-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[80px]">Marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lesson.assessmentCriteria.map((criterion, i) => (
                            <tr key={i} className="border-b border-border/50 last:border-b-0">
                              <td className="py-2.5 px-3 font-medium text-foreground text-xs">{criterion.band}</td>
                              <td className="py-2.5 px-3 text-muted-foreground text-xs leading-relaxed">{criterion.description}</td>
                              <td className="py-2.5 px-3 text-foreground text-xs font-mono">{criterion.marks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Separator />

              {/* ── WORKSHEETS & MODEL ANSWERS TABS ────────────────── */}
              <Tabs defaultValue="worksheet" className="print-section">
                <div className="flex items-center justify-between mb-4 no-print" data-print-hide>
                  <TabsList>
                    <TabsTrigger value="worksheet">
                      <FileText className="h-3.5 w-3.5 mr-1.5" />
                      Worksheet
                      {totalMarks > 0 && (
                        <Badge variant="secondary" className="ml-2 text-[10px]">{totalMarks} marks</Badge>
                      )}
                    </TabsTrigger>
                    <TabsTrigger value="answers">
                      <GraduationCap className="h-3.5 w-3.5 mr-1.5" />
                      Model Answers
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAnswers(!showAnswers)}
                      className="text-xs"
                    >
                      {showAnswers ? (
                        <><EyeOff className="h-3.5 w-3.5" /> Hide Answers</>
                      ) : (
                        <><Eye className="h-3.5 w-3.5" /> Show Answers</>
                      )}
                    </Button>
                    {lesson.worksheetSections.length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrintWorksheet}
                        className="text-xs"
                      >
                        <Printer className="h-3.5 w-3.5" />
                        Print Worksheet
                      </Button>
                    )}
                  </div>
                </div>

                {/* Worksheet Tab */}
                <TabsContent value="worksheet">
                  {lesson.worksheetSections.length > 0 ? (
                    <div className="print-page-break">
                      <PrintableWorksheet
                        ref={worksheetRef}
                        title={lesson.title}
                        subtitle={`${lesson.topic} | ${lesson.skill} | ${lesson.examBoard}`}
                        sections={lesson.worksheetSections}
                        showAnswers={showAnswers}
                      />
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                        <FileText className="mb-3 h-8 w-8 text-muted-foreground opacity-50" />
                        <p className="text-sm text-muted-foreground">
                          No worksheet available for this lesson plan.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Model Answers Tab */}
                <TabsContent value="answers">
                  {lesson.modelAnswers.length > 0 ? (
                    <div className="space-y-4 print-section">
                      {lesson.modelAnswers.map((ma, i) => (
                        <Card key={i}>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm text-foreground">
                              {ma.question}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="rounded-lg border border-dashed border-green-500/30 bg-green-500/5 p-4">
                              <p className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                                <GraduationCap className="h-3.5 w-3.5" />
                                Model Answer (Teacher Reference)
                              </p>
                              <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                                {ma.answer}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                        <GraduationCap className="mb-3 h-8 w-8 text-muted-foreground opacity-50" />
                        <p className="text-sm text-muted-foreground">
                          No model answers available for this lesson plan.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>

            </div>

            {/* ── RIGHT SIDEBAR: Key Vocabulary ─────────────────── */}
            <aside className="space-y-6">
              {/* Key Vocabulary */}
              <Card className="print-section sticky top-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-indigo-400" />
                    Key Vocabulary
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {lesson.keywords.length} terms for this lesson
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <dl className="vocab-sidebar space-y-3">
                    {lesson.keywords.map((kw, i) => (
                      <div key={i} className="border-b border-border/30 pb-2.5 last:border-b-0 last:pb-0">
                        <dt className="text-sm font-semibold text-foreground capitalize">
                          {kw.term}
                        </dt>
                        <dd className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {kw.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>

              {/* Quick lesson info panel */}
              <Card className="print-section">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                    Lesson Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{lesson.duration} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phases</span>
                    <span className="font-medium text-foreground">{lesson.timings.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Objectives</span>
                    <span className="font-medium text-foreground">{lesson.learningObjectives.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Worksheet</span>
                    <span className="font-medium text-foreground">
                      {lesson.worksheetSections.length > 0 ? `${totalMarks} marks` : 'None'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <Badge variant="outline" className={cn('text-[10px]', difficultyColor(lesson.difficulty))}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>

          <Separator className="my-6" />

          {/* ── PREV / NEXT NAVIGATION ──────────────────────────── */}
          <nav className="flex items-center justify-between no-print print-section" data-print-hide>
            <div>
              {prevLesson ? (
                <Link
                  href={`/school/lessons/${prevLesson.id}`}
                  className="group flex items-center gap-3 rounded-lg border border-border p-3 hover:bg-accent/30 transition-colors max-w-xs"
                >
                  <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Previous Lesson</p>
                    <p className="text-sm font-medium text-foreground truncate">{prevLesson.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div>
              {nextLesson ? (
                <Link
                  href={`/school/lessons/${nextLesson.id}`}
                  className="group flex items-center gap-3 rounded-lg border border-border p-3 hover:bg-accent/30 transition-colors max-w-xs text-right"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Next Lesson</p>
                    <p className="text-sm font-medium text-foreground truncate">{nextLesson.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground shrink-0 transition-colors" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>

        </div>
      </div>
    </>
  )
}
