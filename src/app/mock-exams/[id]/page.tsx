'use client'

import { useState, useEffect, useCallback, useMemo, use } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Award,
  FileText,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Hash,
  Timer,
  Send,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BarChart3,
  Target,
  Sparkles,
  BookOpen,
  Eye,
  PenLine,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

// ─── Types ──────────────────────────────────────────────────────────────────

interface GradeBoundary {
  grade: number
  minMarks: number
}

interface ExamQuestion {
  number: number
  label: string
  marks: number
  type: string
  prompt: string
  sourceText?: string
  isMultipleChoice?: boolean
  options?: string[]
  correctOption?: number
  markScheme?: string[]
  modelAnswer?: string
}

interface ExamPaperData {
  id: string
  paperName: string
  paperType: 'language' | 'literature'
  paperNumber: 1 | 2
  examBoard: string
  timeAllowed: string
  timeMinutes: number
  totalMarks: number
  questions: ExamQuestion[]
  gradeBoundaries: GradeBoundary[]
  sectionA?: string
  sectionB?: string
}

type ExamPhase = 'intro' | 'exam' | 'results'

// ─── Grade Boundaries ───────────────────────────────────────────────────────

const AQA_LANG_P1_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 68 },
  { grade: 8, minMarks: 61 },
  { grade: 7, minMarks: 54 },
  { grade: 6, minMarks: 46 },
  { grade: 5, minMarks: 38 },
  { grade: 4, minMarks: 30 },
  { grade: 3, minMarks: 22 },
  { grade: 2, minMarks: 14 },
  { grade: 1, minMarks: 7 },
]

const AQA_LANG_P2_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 67 },
  { grade: 8, minMarks: 60 },
  { grade: 7, minMarks: 52 },
  { grade: 6, minMarks: 44 },
  { grade: 5, minMarks: 36 },
  { grade: 4, minMarks: 28 },
  { grade: 3, minMarks: 21 },
  { grade: 2, minMarks: 14 },
  { grade: 1, minMarks: 7 },
]

const AQA_LIT_P1_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 56 },
  { grade: 8, minMarks: 50 },
  { grade: 7, minMarks: 44 },
  { grade: 6, minMarks: 37 },
  { grade: 5, minMarks: 30 },
  { grade: 4, minMarks: 24 },
  { grade: 3, minMarks: 18 },
  { grade: 2, minMarks: 12 },
  { grade: 1, minMarks: 6 },
]

const AQA_LIT_P2_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 79 },
  { grade: 8, minMarks: 71 },
  { grade: 7, minMarks: 62 },
  { grade: 6, minMarks: 53 },
  { grade: 5, minMarks: 44 },
  { grade: 4, minMarks: 35 },
  { grade: 3, minMarks: 26 },
  { grade: 2, minMarks: 17 },
  { grade: 1, minMarks: 9 },
]

// ─── Exam Paper Data ────────────────────────────────────────────────────────

const EXAM_PAPERS: Record<string, ExamPaperData> = {
  'aqa-lang-p1': {
    id: 'aqa-lang-p1',
    paperName: 'English Language Paper 1',
    paperType: 'language',
    paperNumber: 1,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 80,
    sectionA: 'Reading',
    sectionB: 'Writing',
    gradeBoundaries: AQA_LANG_P1_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'List four things',
        marks: 4,
        type: 'Retrieval',
        prompt: 'Read again the first part of the source, from lines 1 to 5.\n\nList four things about the setting from this part of the source.',
        sourceText: `The morning light crept through the narrow gap in the curtains, casting a thin golden line across the dusty floorboards. The room was small and cluttered, filled with towers of old newspapers and cardboard boxes that hadn't been opened in years. A cracked mirror hung at an angle on the far wall, reflecting the sagging ceiling with its web of fine cracks. The air was thick with the smell of damp wool and stale tea. In the corner, a radiator ticked and groaned as it struggled to life, offering little warmth against the February chill that had settled into every surface.`,
        markScheme: [
          'The morning light was golden / came through the curtains',
          'The room was small and cluttered',
          'There were towers of old newspapers and cardboard boxes',
          'The boxes hadn\'t been opened in years',
          'A cracked mirror hung on the wall',
          'The ceiling was sagging with cracks',
          'The air smelled of damp wool and stale tea',
          'The radiator struggled to work / offered little warmth',
          'It was February / cold / the chill had settled',
        ],
      },
      {
        number: 2,
        label: 'Language analysis',
        marks: 8,
        type: 'Language Analysis',
        prompt: 'Look in detail at the source from lines 1 to 5.\n\nHow does the writer use language to describe the setting?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
        sourceText: `The morning light crept through the narrow gap in the curtains, casting a thin golden line across the dusty floorboards. The room was small and cluttered, filled with towers of old newspapers and cardboard boxes that hadn't been opened in years. A cracked mirror hung at an angle on the far wall, reflecting the sagging ceiling with its web of fine cracks. The air was thick with the smell of damp wool and stale tea. In the corner, a radiator ticked and groaned as it struggled to life, offering little warmth against the February chill that had settled into every surface.`,
        markScheme: [
          'Level 4 (7-8 marks): Detailed, perceptive analysis of language with sophisticated use of subject terminology',
          'Level 3 (5-6 marks): Clear, relevant explanation of effects of language with appropriate terminology',
          'Level 2 (3-4 marks): Some understanding of language with some terminology',
          'Level 1 (1-2 marks): Simple awareness of language',
        ],
        modelAnswer: 'The writer uses personification when describing the light as it "crept" through the curtains, suggesting something secretive or hesitant, as though the morning itself is reluctant to enter this neglected space. The metaphor of "towers" of newspapers creates an image of instability and accumulation, implying the occupant has been overwhelmed by the passage of time. The verb "groaned" applied to the radiator gives it a sense of exhaustion, mirroring the decay of the room itself.',
      },
      {
        number: 3,
        label: 'Structure analysis',
        marks: 8,
        type: 'Structure',
        prompt: 'You now need to think about the whole of the source.\n\nThis text is from the opening of a short story.\n\nHow has the writer structured the text to interest you as a reader?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the source develops\n- any other structural features that interest you.',
        markScheme: [
          'Level 4 (7-8 marks): Detailed, perceptive analysis of structural features with sophisticated use of terminology',
          'Level 3 (5-6 marks): Clear understanding of structural features with appropriate examples',
          'Level 2 (3-4 marks): Some understanding of structural features',
          'Level 1 (1-2 marks): Simple awareness of structure',
        ],
      },
      {
        number: 4,
        label: 'Evaluation',
        marks: 20,
        type: 'Evaluation',
        prompt: 'Focus this part of your answer on the second half of the source.\n\nA student, having read this section of the text, said: "The writer makes the reader feel sympathy for the character. It is as though they have been forgotten by the world."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- write about your own impressions of the character\n- evaluate how the writer has created these impressions\n- support your opinions with references to the text.',
        markScheme: [
          'Level 4 (16-20 marks): Convincing, critical evaluation with textual detail. Perceptive understanding of writer\'s methods.',
          'Level 3 (11-15 marks): Clear, relevant evaluation with appropriate textual references.',
          'Level 2 (6-10 marks): Some evaluative comment with some textual reference.',
          'Level 1 (1-5 marks): Simple, limited comment on the text.',
        ],
      },
      {
        number: 5,
        label: 'Creative writing',
        marks: 40,
        type: 'Creative Writing',
        prompt: 'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of people.\n\nWrite a description suggested by this picture: [A photograph of an abandoned building overgrown with plants]\n\nOR\n\nWrite the opening part of a story about a place that has been forgotten.\n\n(24 marks for content and organisation, 16 marks for technical accuracy)',
        markScheme: [
          'Content and Organisation (24 marks):',
          'Level 4 (19-24): Compelling, convincing communication. Extensive, ambitious vocabulary. Sustained crafting of linguistic devices.',
          'Level 3 (13-18): Clear, connected writing with conscious crafting. Increasingly sophisticated vocabulary and phrasing.',
          'Level 2 (7-12): Connected writing with some success in engaging the reader.',
          'Level 1 (1-6): Simple communication of ideas.',
          '',
          'Technical Accuracy (16 marks):',
          'Level 4 (13-16): Consistent accuracy. Wide range of sentence forms for effect.',
          'Level 3 (9-12): Mostly accurate. Uses a variety of sentence forms.',
          'Level 2 (5-8): Some accuracy in spelling, punctuation, and grammar.',
          'Level 1 (1-4): Limited accuracy.',
        ],
      },
    ],
  },

  'aqa-lang-p2': {
    id: 'aqa-lang-p2',
    paperName: 'English Language Paper 2',
    paperType: 'language',
    paperNumber: 2,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 80,
    sectionA: 'Reading',
    sectionB: 'Writing',
    gradeBoundaries: AQA_LANG_P2_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'True or false',
        marks: 4,
        type: 'Retrieval',
        prompt: 'Read again Source A from lines 1 to 8.\n\nChoose four statements below which are TRUE.\n\nShade the circles in the boxes of the ones that you think are true.',
        isMultipleChoice: true,
        options: [
          'The writer visited the school on a Monday morning.',
          'The school was located in a rural village.',
          'There were approximately thirty children in the classroom.',
          'The teacher had been working at the school for over a decade.',
          'The children were wearing school uniforms.',
          'The classroom had large windows overlooking a garden.',
          'Some of the desks were shared between two children.',
          'The writer felt immediately welcomed by the staff.',
        ],
        correctOption: -1,
        sourceText: `Source A: From a 2019 newspaper article about education in rural communities.\n\nI arrived at the small village school on a Tuesday morning, just as the bell was ringing. The building sat at the edge of the village, its red brick walls softened by years of ivy. Inside, the single classroom held roughly twenty-five children of various ages, all sharing wooden desks that had been worn smooth by generations of use. Large windows flooded the room with pale morning light, looking out over a courtyard rather than the surrounding fields. The head teacher, Mrs Patterson, had been a fixture of the village for fifteen years. She greeted me warmly, as did the two teaching assistants who bustled about organising exercise books. The children wore no uniforms -- just everyday clothes, many hand-me-downs by the look of them.`,
        markScheme: [
          'B: The school was located in a rural village (TRUE)',
          'D: The teacher had been working at the school for over a decade (TRUE)',
          'G: Some of the desks were shared between two children (TRUE)',
          'H: The writer felt immediately welcomed by the staff (TRUE)',
        ],
      },
      {
        number: 2,
        label: 'Summary',
        marks: 8,
        type: 'Summary',
        prompt: 'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the differences between the two schools described.',
        sourceText: `Source A describes a small rural village school. Source B (below) describes a modern city academy.\n\nSource B: From a 2022 report on urban education.\n\nThe academy was a glass-and-steel structure that dominated the end of the high street, its entrance framed by digital screens displaying the school motto and latest Ofsted rating. Over twelve hundred students passed through its automatic doors each morning, scanned in by electronic registers. Each child wore an immaculate blazer in the school's signature navy and gold. Classrooms were equipped with interactive whiteboards, individual laptops, and climate control. The corridors hummed with efficiency. Department heads managed teams of specialists; the maths department alone had eleven teachers. There was a sense of relentless forward motion, of targets and data driving every decision.`,
        markScheme: [
          'Level 4 (7-8 marks): Perceptive synthesis and interpretation of both sources. Clear inferences from both texts.',
          'Level 3 (5-6 marks): Clear synthesis with relevant references to both sources.',
          'Level 2 (3-4 marks): Some comparison with references.',
          'Level 1 (1-2 marks): Simple identification of difference(s).',
        ],
      },
      {
        number: 3,
        label: 'Language analysis',
        marks: 12,
        type: 'Language Analysis',
        prompt: 'You now need to refer only to Source B.\n\nHow does the writer use language to convey their impression of the modern school?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
        markScheme: [
          'Level 4 (10-12 marks): Detailed, perceptive analysis with sophisticated use of terminology.',
          'Level 3 (7-9 marks): Clear, relevant explanation of language effects.',
          'Level 2 (4-6 marks): Some understanding of language with some terminology.',
          'Level 1 (1-3 marks): Simple awareness of language.',
        ],
      },
      {
        number: 4,
        label: 'Comparison of viewpoints',
        marks: 16,
        type: 'Comparison',
        prompt: 'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the schools they describe.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your ideas with references to both texts.',
        markScheme: [
          'Level 4 (13-16 marks): Perceptive understanding of both writers\' methods with detailed comparison.',
          'Level 3 (9-12 marks): Clear comparison with relevant references.',
          'Level 2 (5-8 marks): Some comparison of ideas/methods.',
          'Level 1 (1-4 marks): Simple identification of attitudes.',
        ],
      },
      {
        number: 5,
        label: 'Transactional writing',
        marks: 40,
        type: 'Transactional Writing',
        prompt: '"Technology in schools does more harm than good. Students would learn better with books, pens, and face-to-face teaching."\n\nWrite an article for a broadsheet newspaper in which you argue for or against this statement.\n\n(24 marks for content and organisation, 16 marks for technical accuracy)',
        markScheme: [
          'Content and Organisation (24 marks):',
          'Level 4 (19-24): Compelling, convincing argument. Sophisticated use of structural and organisational devices.',
          'Level 3 (13-18): Clear, connected argument with conscious crafting.',
          'Level 2 (7-12): Some success in presenting a viewpoint.',
          'Level 1 (1-6): Simple communication.',
          '',
          'Technical Accuracy (16 marks):',
          'Level 4 (13-16): Consistent accuracy with wide range of sentence forms.',
          'Level 3 (9-12): Mostly accurate with variety of sentence forms.',
          'Level 2 (5-8): Some accuracy.',
          'Level 1 (1-4): Limited accuracy.',
        ],
      },
    ],
  },

  'aqa-lit-p1': {
    id: 'aqa-lit-p1',
    paperName: 'English Literature Paper 1',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 64,
    gradeBoundaries: AQA_LIT_P1_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'Shakespeare: Macbeth',
        marks: 34,
        type: 'Extract + Essay',
        prompt: 'Read the following extract from Act 1 Scene 7 of Macbeth and then answer the question that follows.\n\nIn this extract, Macbeth is debating whether to murder King Duncan.\n\n---\n\nMACBETH:\nIf it were done when \'tis done, then \'twere well\nIt were done quickly. If th\' assassination\nCould trammel up the consequence, and catch\nWith his surcease success; that but this blow\nMight be the be-all and the end-all here,\nBut here, upon this bank and shoal of time,\nWe\'d jump the life to come.\n\n---\n\nStarting with this extract, how does Shakespeare present Macbeth\'s inner conflict?\n\nWrite about:\n- how Shakespeare presents Macbeth\'s conflict in this extract\n- how Shakespeare presents Macbeth\'s conflict in the play as a whole.\n\n[30 marks + 4 marks for AO4 (spelling, punctuation, grammar)]',
        markScheme: [
          'AO1: Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references to support and illustrate interpretations.',
          'AO2: Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.',
          'AO3: Show understanding of the relationships between texts and the contexts in which they were written.',
          'AO4: Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
          '',
          'Level 6 (26-30): Critical, exploratory, conceptualised response. Judicious use of precise references. Analysis of writer\'s methods with subject terminology used judiciously.',
          'Level 5 (21-25): Thoughtful, developed response. Apt references integrated into interpretations. Examination of writer\'s methods with subject terminology used effectively.',
          'Level 4 (16-20): Clear, sustained response. Effective use of references. Clear understanding of writer\'s methods with appropriate subject terminology.',
        ],
      },
      {
        number: 2,
        label: '19th-century novel: A Christmas Carol',
        marks: 30,
        type: 'Extract + Essay',
        prompt: 'Read the following extract from A Christmas Carol by Charles Dickens and then answer the question that follows.\n\nIn this extract, Scrooge is being visited by the Ghost of Christmas Present.\n\n---\n\n"Spirit," said Scrooge, with an interest he had never felt before, "tell me if Tiny Tim will live."\n\n"I see a vacant seat," replied the Ghost, "in the poor chimney-corner, and a crutch without an owner, carefully preserved. If these shadows remain unaltered by the Future, the child will die."\n\n"No, no," said Scrooge. "Oh, no, kind Spirit! say he will be spared."\n\n---\n\nStarting with this extract, how does Dickens present the character of Scrooge as someone who is changing?\n\nWrite about:\n- how Dickens presents Scrooge in this extract\n- how Dickens presents Scrooge\'s transformation in the novel as a whole.\n\n[30 marks]',
        markScheme: [
          'AO1: Read, understand and respond to texts with personal response and textual references.',
          'AO2: Analyse language, form and structure with relevant terminology.',
          'AO3: Show understanding of contexts.',
          '',
          'Level 6 (26-30): Critical, exploratory, conceptualised response.',
          'Level 5 (21-25): Thoughtful, developed response with apt references.',
          'Level 4 (16-20): Clear, sustained response with effective references.',
        ],
      },
    ],
  },

  'aqa-lit-p2': {
    id: 'aqa-lit-p2',
    paperName: 'English Literature Paper 2',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'AQA',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 96,
    gradeBoundaries: AQA_LIT_P2_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'Modern text: An Inspector Calls',
        marks: 34,
        type: 'Essay',
        prompt: 'How does Priestley use the character of Mr Birling to explore ideas about social responsibility?\n\nWrite about:\n- how Priestley presents Mr Birling\n- how Priestley uses Mr Birling to explore ideas about social responsibility.\n\n[30 marks + 4 marks for AO4 (spelling, punctuation, grammar)]',
        markScheme: [
          'Level 6 (26-30): Critical, exploratory, conceptualised response with judicious references. Analysis of writer\'s methods with terminology used judiciously.',
          'Level 5 (21-25): Thoughtful, developed response with apt references.',
          'Level 4 (16-20): Clear, sustained response with effective use of references.',
        ],
      },
      {
        number: 2,
        label: 'Poetry anthology comparison',
        marks: 30,
        type: 'Comparison',
        prompt: 'Compare how poets present ideas about power and conflict in "Ozymandias" by Percy Bysshe Shelley and one other poem from the anthology.\n\n[30 marks]',
        markScheme: [
          'Level 6 (26-30): Critical, exploratory comparison. Judicious references. Analysis of methods with terminology used judiciously.',
          'Level 5 (21-25): Thoughtful, developed comparison with apt references.',
          'Level 4 (16-20): Clear comparison with effective references.',
        ],
      },
      {
        number: 3,
        label: 'Unseen poetry',
        marks: 32,
        type: 'Analysis + Comparison',
        prompt: 'Part A (24 marks):\n\nRead the poem below. In "Storm on the Island" by Seamus Heaney, the speaker describes the experience of a violent storm.\n\nHow does the poet present the power of nature in this poem?\n\n---\n\nPart B (8 marks):\n\nNow read "Wind" by Ted Hughes.\n\nIn both poems, the poets describe the power of nature. What are the similarities and differences between the ways the poets present the power of nature in these two poems?',
        markScheme: [
          'Part A (24 marks):',
          'Level 4 (19-24): Exploratory response with precise references. Detailed analysis of methods.',
          'Level 3 (13-18): Clear understanding with relevant references.',
          '',
          'Part B (8 marks):',
          'Level 4 (7-8): Well-developed comparison with precise references.',
          'Level 3 (5-6): Clear comparison with relevant references.',
        ],
      },
    ],
  },
}

// ─── Timer Hook ─────────────────────────────────────────────────────────────

function useExamTimer(durationMinutes: number, isRunning: boolean) {
  const [secondsRemaining, setSecondsRemaining] = useState(durationMinutes * 60)

  useEffect(() => {
    if (!isRunning || secondsRemaining <= 0) return

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, secondsRemaining])

  const reset = useCallback(() => {
    setSecondsRemaining(durationMinutes * 60)
  }, [durationMinutes])

  const hours = Math.floor(secondsRemaining / 3600)
  const minutes = Math.floor((secondsRemaining % 3600) / 60)
  const seconds = secondsRemaining % 60

  const totalSeconds = durationMinutes * 60
  const progress = totalSeconds > 0 ? ((totalSeconds - secondsRemaining) / totalSeconds) * 100 : 0

  const isLow = secondsRemaining <= 300 // 5 minutes
  const isExpired = secondsRemaining <= 0

  return {
    hours,
    minutes,
    seconds,
    secondsRemaining,
    progress,
    isLow,
    isExpired,
    reset,
    formatted: `${hours > 0 ? `${hours}:` : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
  }
}

// ─── Grade Calculator ───────────────────────────────────────────────────────

function calculateGrade(score: number, boundaries: GradeBoundary[]): number {
  const sorted = [...boundaries].sort((a, b) => b.minMarks - a.minMarks)
  for (const boundary of sorted) {
    if (score >= boundary.minMarks) {
      return boundary.grade
    }
  }
  return 0
}

function getGradeColor(grade: number) {
  if (grade >= 7) return 'text-teal-800'
  if (grade >= 5) return 'text-amber-700'
  return 'text-red-600'
}

function getGradeBg(grade: number) {
  if (grade >= 7) return 'bg-teal-50 border-teal-200'
  if (grade >= 5) return 'bg-amber-50 border-amber-200'
  return 'bg-red-50 border-red-200'
}

function getGradeLabel(grade: number) {
  if (grade >= 7) return 'Excellent'
  if (grade >= 5) return 'Good pass'
  if (grade >= 4) return 'Standard pass'
  if (grade >= 1) return 'Below pass'
  return 'Ungraded'
}

// ─── Intro Phase ────────────────────────────────────────────────────────────

function ExamIntro({
  paper,
  onStart,
}: {
  paper: ExamPaperData
  onStart: () => void
}) {
  const isLanguage = paper.paperType === 'language'

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <Button
        variant="ghost"
        size="sm"
        className="mb-6"
        render={<Link href="/mock-exams" />}
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" />
        Back to Mock Exams
      </Button>

      <Card className="overflow-hidden">
        <div
          className={cn(
            'h-2',
            isLanguage
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
              : 'bg-gradient-to-r from-teal-800 to-clay-500'
          )}
        />

        <CardHeader>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
              {paper.examBoard}
            </Badge>
            <Badge
              variant="outline"
              className={cn(
                'text-xs',
                isLanguage
                  ? 'border-cyan-600/30 text-cyan-700'
                  : 'border-pink-600/30 text-pink-700'
              )}
            >
              {isLanguage ? 'Language' : 'Literature'}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Paper {paper.paperNumber}
            </Badge>
          </div>

          <CardTitle className="text-2xl sm:text-3xl">
            {paper.paperName}
          </CardTitle>
          <CardDescription className="text-base mt-2">
            {paper.examBoard} GCSE English{' '}
            {isLanguage ? 'Language' : 'Literature'} - Paper{' '}
            {paper.paperNumber}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Exam details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <Timer className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-semibold">{paper.timeAllowed}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <Award className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Total Marks</p>
                <p className="text-sm font-semibold">{paper.totalMarks}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <Hash className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Questions</p>
                <p className="text-sm font-semibold">
                  {paper.questions.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <GraduationCap className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Grade</p>
                <p className="text-sm font-semibold">1-9 scale</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Questions overview */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Question Overview
            </h3>
            <div className="space-y-2">
              {paper.questions.map((q) => (
                <div
                  key={q.number}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">
                    {q.number}
                  </span>
                  <span className="text-foreground/80 flex-1 min-w-0">
                    {q.label}
                  </span>
                  <Badge variant="outline" className="text-xs shrink-0">
                    {q.marks} marks
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Instructions */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <h3 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Exam Conditions
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                - The timer will start as soon as you click &quot;Start
                Exam&quot;
              </li>
              <li>
                - You can navigate between questions at any time
              </li>
              <li>
                - Your answers are saved automatically as you type
              </li>
              <li>
                - You can pause the timer if needed (not allowed in real exams)
              </li>
              <li>
                - Click &quot;Submit Exam&quot; when finished to see your
                estimated grade
              </li>
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center flex-wrap gap-3">
          <Button variant="secondary" render={<Link href="/mock-exams" />}>
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Back
          </Button>
          <Button size="lg" className="shadow-lg shadow-primary/20" onClick={onStart}>
            <Play className="h-4 w-4 mr-1.5" />
            Start Exam
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// ─── Question View ──────────────────────────────────────────────────────────

function QuestionView({
  question,
  answer,
  selectedOptions,
  onAnswerChange,
  onOptionToggle,
  questionIndex,
  totalQuestions,
}: {
  question: ExamQuestion
  answer: string
  selectedOptions: number[]
  onAnswerChange: (value: string) => void
  onOptionToggle: (optionIndex: number) => void
  questionIndex: number
  totalQuestions: number
}) {
  return (
    <div className="space-y-6">
      {/* Question header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge className="bg-primary/15 text-primary border-primary/30 text-xs">
              Question {question.number}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {question.type}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {question.marks} marks
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Question {questionIndex + 1} of {totalQuestions}
          </p>
        </div>
      </div>

      {/* Source text if present */}
      {question.sourceText && (
        <Card className="border-border/40 bg-muted/20">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-semibold text-foreground">
                Source Text
              </h4>
            </div>
            <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap font-serif">
              {question.sourceText}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question prompt */}
      <div className="rounded-xl border border-border/40 bg-card p-5">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">
            {question.number}
          </div>
          <div className="flex-1">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">
              {question.prompt}
            </p>
          </div>
        </div>
      </div>

      {/* Answer input */}
      {question.isMultipleChoice && question.options ? (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Select four statements (click to select/deselect)
          </h4>
          <div className="space-y-2">
            {question.options.map((option, i) => {
              const isSelected = selectedOptions.includes(i)
              const isDisabled = !isSelected && selectedOptions.length >= 4

              return (
                <button
                  key={i}
                  onClick={() => !isDisabled && onOptionToggle(i)}
                  disabled={isDisabled}
                  className={cn(
                    'w-full text-left p-3 rounded-lg border text-sm transition-all',
                    isSelected
                      ? 'border-primary bg-primary/10 text-foreground'
                      : isDisabled
                        ? 'border-border/20 bg-muted/20 text-muted-foreground/50 cursor-not-allowed'
                        : 'border-border/40 bg-card hover:border-border text-foreground/80 cursor-pointer'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'h-5 w-5 rounded border-2 flex items-center justify-center shrink-0',
                        isSelected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground/30'
                      )}
                    >
                      {isSelected && (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                    </div>
                    <span>
                      {String.fromCharCode(65 + i)}. {option}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {selectedOptions.length}/4 selected
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <PenLine className="h-4 w-4 text-primary" />
              Your Answer
            </h4>
            <span className="text-xs text-muted-foreground">
              {answer.split(/\s+/).filter(Boolean).length} words
            </span>
          </div>
          <Textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder={
              question.marks <= 8
                ? 'Write your answer here...'
                : 'Write your extended response here. Plan your answer carefully and aim to use the full time available...'
            }
            className={cn(
              'min-h-[200px] leading-relaxed resize-y',
              question.marks >= 20 && 'min-h-[350px]',
              question.marks >= 30 && 'min-h-[450px]'
            )}
          />
          {question.marks >= 20 && (
            <p className="text-xs text-muted-foreground">
              This is an extended writing question worth {question.marks}{' '}
              marks. Aim for a detailed, well-structured response.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Exam Phase ─────────────────────────────────────────────────────────────

function ExamView({
  paper,
  onSubmit,
  onQuit,
}: {
  paper: ExamPaperData
  onSubmit: (answers: string[], mcSelections: Record<number, number[]>) => void
  onQuit: () => void
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(
    () => paper.questions.map(() => '')
  )
  const [mcSelections, setMcSelections] = useState<Record<number, number[]>>(
    () => ({})
  )
  const [isPaused, setIsPaused] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)

  const timer = useExamTimer(paper.timeMinutes, !isPaused)
  const question = paper.questions[currentQuestion]

  const handleAnswerChange = useCallback(
    (value: string) => {
      setAnswers((prev) => {
        const next = [...prev]
        next[currentQuestion] = value
        return next
      })
    },
    [currentQuestion]
  )

  const handleOptionToggle = useCallback(
    (optionIndex: number) => {
      setMcSelections((prev) => {
        const current = prev[currentQuestion] ?? []
        if (current.includes(optionIndex)) {
          return {
            ...prev,
            [currentQuestion]: current.filter((i) => i !== optionIndex),
          }
        }
        if (current.length >= 4) return prev
        return { ...prev, [currentQuestion]: [...current, optionIndex] }
      })
    },
    [currentQuestion]
  )

  const answeredCount = useMemo(() => {
    return paper.questions.filter((q, i) => {
      if (q.isMultipleChoice) {
        return (mcSelections[i]?.length ?? 0) > 0
      }
      return answers[i].trim().length > 0
    }).length
  }, [answers, mcSelections, paper.questions])

  const handleSubmit = useCallback(() => {
    onSubmit(answers, mcSelections)
  }, [answers, mcSelections, onSubmit])

  // Auto-submit when time expires
  useEffect(() => {
    if (timer.isExpired) {
      handleSubmit()
    }
  }, [timer.isExpired, handleSubmit])

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar with timer */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <h1 className="text-sm font-semibold text-foreground truncate hidden sm:block">
              {paper.paperName}
            </h1>
            <Badge variant="outline" className="text-xs shrink-0">
              Q{currentQuestion + 1}/{paper.questions.length}
            </Badge>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm font-bold',
                timer.isLow
                  ? 'border-red-500/30 bg-red-500/10 text-red-400 animate-pulse'
                  : 'border-border bg-muted/50 text-foreground'
              )}
            >
              <Clock className="h-4 w-4" />
              {timer.formatted}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onQuit}>
              Quit
            </Button>
            <Button
              size="sm"
              onClick={() => setShowConfirmSubmit(true)}
            >
              <Send className="h-4 w-4 mr-1.5" />
              Submit
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <Progress
          value={timer.progress}
          className="h-1 rounded-none"
        />
      </div>

      {/* Paused overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <Card className="max-w-sm w-full mx-4">
            <CardContent className="pt-6 text-center">
              <Pause className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">
                Exam Paused
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                The timer has been paused. Note: pausing is not allowed in
                real exam conditions.
              </p>
              <Button onClick={() => setIsPaused(false)}>
                <Play className="h-4 w-4 mr-1.5" />
                Resume Exam
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Submit confirmation overlay */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <Send className="h-10 w-10 text-primary mx-auto mb-3" />
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Submit Exam?
                </h2>
                <p className="text-sm text-muted-foreground">
                  You have answered {answeredCount} of{' '}
                  {paper.questions.length} questions. Time remaining:{' '}
                  {timer.formatted}.
                </p>
                {answeredCount < paper.questions.length && (
                  <p className="text-sm text-amber-600 mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    You have unanswered questions.
                  </p>
                )}
              </div>
              <div className="flex gap-3 justify-center">
                <Button
                  variant="secondary"
                  onClick={() => setShowConfirmSubmit(false)}
                >
                  Continue Writing
                </Button>
                <Button onClick={handleSubmit}>Submit Exam</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Question navigation pills */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {paper.questions.map((q, i) => {
            const hasAnswer = q.isMultipleChoice
              ? (mcSelections[i]?.length ?? 0) > 0
              : answers[i].trim().length > 0
            const isCurrent = i === currentQuestion

            return (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={cn(
                  'h-8 w-8 rounded-lg text-xs font-bold transition-all border',
                  isCurrent
                    ? 'bg-primary text-primary-foreground border-primary'
                    : hasAnswer
                      ? 'bg-teal-50 text-teal-800 border-teal-200'
                      : 'bg-muted/50 text-muted-foreground border-border/40 hover:border-border'
                )}
              >
                {q.number}
              </button>
            )
          })}
        </div>

        {/* Question content */}
        <QuestionView
          question={question}
          answer={answers[currentQuestion]}
          selectedOptions={mcSelections[currentQuestion] ?? []}
          onAnswerChange={handleAnswerChange}
          onOptionToggle={handleOptionToggle}
          questionIndex={currentQuestion}
          totalQuestions={paper.questions.length}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
          <Button
            variant="secondary"
            disabled={currentQuestion === 0}
            onClick={() =>
              setCurrentQuestion((prev) => Math.max(0, prev - 1))
            }
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            {answeredCount}/{paper.questions.length} answered
          </span>

          {currentQuestion < paper.questions.length - 1 ? (
            <Button
              onClick={() =>
                setCurrentQuestion((prev) =>
                  Math.min(paper.questions.length - 1, prev + 1)
                )
              }
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={() => setShowConfirmSubmit(true)}>
              <Send className="h-4 w-4 mr-1.5" />
              Submit Exam
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Results Phase ──────────────────────────────────────────────────────────

function ResultsView({
  paper,
  answers,
  mcSelections,
  onRetry,
}: {
  paper: ExamPaperData
  answers: string[]
  mcSelections: Record<number, number[]>
  onRetry: () => void
}) {
  // Calculate a rough estimated score based on answer length and MC correctness
  const estimatedScore = useMemo(() => {
    let score = 0
    paper.questions.forEach((q, i) => {
      if (q.isMultipleChoice) {
        // For MC questions, we can't truly grade without a full answer key
        // Give partial marks based on selections
        const selections = mcSelections[i] ?? []
        score += Math.min(selections.length, q.marks)
      } else {
        const wordCount = answers[i].split(/\s+/).filter(Boolean).length
        if (wordCount === 0) return

        // Rough heuristic: proportion of marks based on response length
        if (q.marks <= 8) {
          // Short questions: decent answer is 50-150 words
          const ratio = Math.min(wordCount / 100, 1)
          score += Math.round(q.marks * ratio * 0.7)
        } else if (q.marks <= 20) {
          // Medium questions: decent answer is 150-400 words
          const ratio = Math.min(wordCount / 300, 1)
          score += Math.round(q.marks * ratio * 0.65)
        } else {
          // Long questions: decent answer is 300-800 words
          const ratio = Math.min(wordCount / 500, 1)
          score += Math.round(q.marks * ratio * 0.6)
        }
      }
    })
    return Math.min(score, paper.totalMarks)
  }, [answers, mcSelections, paper])

  const grade = calculateGrade(estimatedScore, paper.gradeBoundaries)
  const percentage = Math.round((estimatedScore / paper.totalMarks) * 100)
  const isLanguage = paper.paperType === 'language'

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <Card className="overflow-hidden">
        <div
          className={cn(
            'h-2',
            isLanguage
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
              : 'bg-gradient-to-r from-teal-800 to-clay-500'
          )}
        />

        <CardContent className="pt-8 pb-8">
          {/* Hero result */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-2xl border-2 mb-4"
              style={{
                borderColor: grade >= 7 ? 'rgb(52,211,153)' : grade >= 5 ? 'rgb(251,191,36)' : 'rgb(248,113,113)',
                background: grade >= 7 ? 'rgba(16,185,129,0.1)' : grade >= 5 ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)',
              }}
            >
              <span className={cn('text-5xl font-bold', getGradeColor(grade))}>
                {grade}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {getGradeLabel(grade)}
            </h2>
            <p className="text-muted-foreground">
              Estimated GCSE Grade for {paper.paperName}
            </p>
          </div>

          <Separator className="mb-8" />

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/40">
              <p className="text-2xl font-bold text-foreground">
                {estimatedScore}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                of {paper.totalMarks} marks
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/40">
              <p className="text-2xl font-bold text-foreground">
                {percentage}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Percentage
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/40">
              <p className={cn('text-2xl font-bold', getGradeColor(grade))}>
                Grade {grade}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                GCSE Grade
              </p>
            </div>
          </div>

          {/* Grade boundaries reference */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Grade Boundaries
            </h3>
            <div className="grid grid-cols-9 gap-1">
              {paper.gradeBoundaries.map(({ grade: g, minMarks }) => (
                <div
                  key={g}
                  className={cn(
                    'rounded-lg p-2 text-center border transition-all',
                    g === grade
                      ? 'ring-2 ring-primary ring-offset-1 ring-offset-background'
                      : '',
                    g >= 7
                      ? 'bg-teal-50 border-teal-200'
                      : g >= 5
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-muted border-border'
                  )}
                >
                  <div
                    className={cn('text-sm font-bold', getGradeColor(g))}
                  >
                    {g}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {minMarks}/{paper.totalMarks}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Question breakdown */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Your Responses
            </h3>
            <div className="space-y-3">
              {paper.questions.map((q, i) => {
                const wordCount = answers[i]
                  .split(/\s+/)
                  .filter(Boolean).length
                const hasAnswer = q.isMultipleChoice
                  ? (mcSelections[i]?.length ?? 0) > 0
                  : wordCount > 0

                return (
                  <div
                    key={q.number}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/40"
                  >
                    <div
                      className={cn(
                        'h-6 w-6 rounded-md flex items-center justify-center shrink-0',
                        hasAnswer
                          ? 'bg-teal-50 text-teal-800'
                          : 'bg-red-50 text-red-600'
                      )}
                    >
                      {hasAnswer ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <AlertCircle className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        Q{q.number}: {q.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {q.isMultipleChoice
                          ? `${mcSelections[i]?.length ?? 0} options selected`
                          : hasAnswer
                            ? `${wordCount} words written`
                            : 'No response'}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {q.marks} marks
                    </Badge>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Note about grading */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-8">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              About This Estimate
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This grade is an estimate based on response length and
              completion. For accurate grading of your written responses,
              AI-powered essay feedback will provide detailed marks against
              the marking guide with specific comments on how to improve. This
              feature is coming soon.
            </p>
          </div>

          {/* Marking guide / model answers section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" />
              Marking Guide
            </h3>
            <div className="space-y-4">
              {paper.questions.map((q) => (
                <details
                  key={q.number}
                  className="group rounded-lg border border-border/40 overflow-hidden"
                >
                  <summary className="flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">
                      {q.number}
                    </span>
                    <span className="text-sm font-medium text-foreground flex-1">
                      Q{q.number}: {q.label} ({q.marks} marks)
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-3 pb-3 pt-0">
                    <Separator className="mb-3" />
                    {q.markScheme && (
                      <div className="space-y-1">
                        {q.markScheme.map((item, idx) =>
                          item === '' ? (
                            <div key={idx} className="h-2" />
                          ) : (
                            <p
                              key={idx}
                              className="text-sm text-muted-foreground"
                            >
                              {item}
                            </p>
                          )
                        )}
                      </div>
                    )}
                    {q.modelAnswer && (
                      <div className="mt-3 p-3 rounded-lg bg-teal-50/50 border border-teal-200">
                        <p className="text-xs font-semibold text-teal-800 mb-1">
                          Example response (Grade 7+):
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {q.modelAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center flex-wrap">
            <Button variant="secondary" render={<Link href="/mock-exams" />}>
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              All Exams
            </Button>
            <Button onClick={onRetry}>
              <RotateCcw className="h-4 w-4 mr-1.5" />
              Retry This Paper
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── 404 / Not Found ────────────────────────────────────────────────────────

function PaperNotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
        <AlertCircle className="h-8 w-8 text-red-400" />
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-3">
        Exam Paper Not Found
      </h1>
      <p className="text-muted-foreground mb-8">
        The exam paper you are looking for does not exist or is not yet
        available. Please check the URL or browse available papers.
      </p>
      <Button render={<Link href="/mock-exams" />}>
        <ArrowLeft className="h-4 w-4 mr-1.5" />
        View Available Papers
      </Button>
    </div>
  )
}

// ─── Main Page Component ────────────────────────────────────────────────────

export default function ExamPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const paper = EXAM_PAPERS[id]

  const [phase, setPhase] = useState<ExamPhase>('intro')
  const [submittedAnswers, setSubmittedAnswers] = useState<string[]>([])
  const [submittedMcSelections, setSubmittedMcSelections] = useState<
    Record<number, number[]>
  >({})

  if (!paper) {
    return <PaperNotFound />
  }

  const handleStart = () => {
    setPhase('exam')
  }

  const handleSubmit = (
    answers: string[],
    mcSelections: Record<number, number[]>
  ) => {
    setSubmittedAnswers(answers)
    setSubmittedMcSelections(mcSelections)
    setPhase('results')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRetry = () => {
    setSubmittedAnswers([])
    setSubmittedMcSelections({})
    setPhase('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleQuit = () => {
    setPhase('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  switch (phase) {
    case 'intro':
      return <ExamIntro paper={paper} onStart={handleStart} />
    case 'exam':
      return (
        <ExamView
          paper={paper}
          onSubmit={handleSubmit}
          onQuit={handleQuit}
        />
      )
    case 'results':
      return (
        <ResultsView
          paper={paper}
          answers={submittedAnswers}
          mcSelections={submittedMcSelections}
          onRetry={handleRetry}
        />
      )
  }
}
