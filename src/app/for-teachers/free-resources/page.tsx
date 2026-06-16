'use client'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  FileText,
  CheckCircle,
  Lock,
  Star,
  GraduationCap,
  Clock,
  ChevronDown,
  ChevronUp,
  Layers,
  PenTool,
  BarChart3,
  ClipboardList,
  Users,
  Award,
} from 'lucide-react'
import { y11IgcseLitInspectorLessons } from '@/data/lesson-plans/y11-igcse-lit-inspector-lessons'
import {
  generateLessonPlan,
  generateWorksheet,
  generateMarkScheme,
  generateRevisionGuide,
} from '@/lib/generate-teaching-pdf'
import {
  generateLessonPlanWord,
  generateWorksheetWord,
  generateMarkSchemeWord,
} from '@/lib/generate-docx'
import { generateLessonPlanPptx } from '@/lib/generate-pptx'
import { DownloadMenu } from '@/components/DownloadMenu'
import { useT } from '@/lib/i18n/use-t'
import {
  act1LessonPlan,
  characterWorksheetMeta,
  characterWorksheetQuestions,
  quotesWorksheetMeta,
  quotesWorksheetQuestions,
  responsibilityMarkSchemeMeta,
  responsibilityMarkSchemeAnswers,
  inspectorCallsRevisionGuide,
} from '@/lib/inspector-calls-free-pack'

/* ------------------------------------------------------------------ */
/*  Pull the first lesson as our free sample                           */
/* ------------------------------------------------------------------ */

const lesson = y11IgcseLitInspectorLessons[0]

/* ------------------------------------------------------------------ */
/*  Teaching guide data (hand-curated for the free pack)               */
/* ------------------------------------------------------------------ */

const teachingGuide = {
  contextNotes: [
    'An Inspector Calls was written by J.B. Priestley in 1945 but set in 1912, creating a deliberate dual time frame that generates dramatic irony throughout the play.',
    'Priestley was a committed democratic socialist. His wartime BBC Postscripts broadcasts reached audiences of over 16 million and called for a more just, equal post-war society.',
    'The play was first performed in Moscow in 1945 before its London premiere in 1946. Its socialist message was better received by Soviet audiences initially.',
    'The 1912 setting places the play in the Edwardian era -- a period of rigid class hierarchy, no welfare state, no NHS, and no votes for women. The Titanic sank in April 1912, weeks after the play is set.',
    'By 1945, Britain had endured two World Wars. The Labour landslide victory of that year and the creation of the welfare state are the political context in which Priestley wrote.',
  ],
  themes: [
    {
      name: 'Responsibility',
      description: 'Individual vs collective responsibility for others in society',
    },
    {
      name: 'Class',
      description: 'The rigid Edwardian class system and exploitation of the working class',
    },
    {
      name: 'Gender',
      description:
        'The limited roles available to women in 1912 and the double standards applied to them',
    },
    {
      name: 'Age and Generational Change',
      description:
        'The contrast between the older Birlings (resistant to change) and the younger generation (Sheila and Eric, who accept responsibility)',
    },
    {
      name: 'Guilt and Conscience',
      description: "Each character's varying capacity for guilt and moral self-examination",
    },
    {
      name: 'Appearance vs Reality',
      description:
        'The gap between the respectable surface of the Birling family and the moral failings beneath',
    },
  ],
  characters: [
    {
      name: 'Arthur Birling',
      description:
        "A prosperous manufacturer, self-made man, and committed capitalist. Priestley's mouthpiece for everything wrong with individualism.",
    },
    {
      name: 'Sybil Birling',
      description:
        "Arthur's wife, socially superior, cold and prejudiced. Represents the upper-middle class refusal to accept responsibility.",
    },
    {
      name: 'Sheila Birling',
      description:
        'Their daughter. Initially shallow but undergoes genuine moral transformation. Represents hope for the younger generation.',
    },
    {
      name: 'Eric Birling',
      description:
        'Their son. Drinks heavily, has an affair with Eva Smith. Accepts responsibility but is weak and immature.',
    },
    {
      name: 'Gerald Croft',
      description:
        "Sheila's fiance, upper class. Had an affair with Eva/Daisy Renton. Ultimately sides with the older generation.",
    },
    {
      name: 'Inspector Goole',
      description:
        "The mysterious inspector. Functions as Priestley's mouthpiece and moral conscience. Possibly supernatural.",
    },
    {
      name: 'Eva Smith / Daisy Renton',
      description:
        'Never appears on stage. Represents the vulnerable working class exploited by every member of the Birling family.',
    },
  ],
  keyQuotes: [
    {
      quote: 'We are members of one body. We are responsible for each other.',
      speaker: 'Inspector Goole',
      significance: "Priestley's central thesis -- collective responsibility",
    },
    {
      quote: 'A man has to mind his own business and look after himself and his own.',
      speaker: 'Mr Birling',
      significance: 'Capitalist individualism that Priestley systematically undermines',
    },
    {
      quote: 'They will be taught it in fire and blood and anguish.',
      speaker: 'Inspector Goole',
      significance: 'Prophetic warning alluding to both World Wars',
    },
    {
      quote: "But these girls aren't cheap labour -- they're people.",
      speaker: 'Sheila Birling',
      significance: "Sheila's moral awakening and generational shift",
    },
    {
      quote: 'The Titanic -- she sails next week... absolutely unsinkable.',
      speaker: 'Mr Birling',
      significance: "Dramatic irony that undermines Birling's authority",
    },
  ],
  assessmentCriteria: [
    {
      code: 'AO1',
      description:
        'Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.',
      weighting: '20%',
    },
    {
      code: 'AO2',
      description:
        'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
      weighting: '20%',
    },
    {
      code: 'AO3',
      description:
        'Show understanding of the relationships between texts and the contexts in which they were written.',
      weighting: '10%',
    },
    {
      code: 'AO4',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '5%',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Download handlers - open professional HTML docs in new tab          */
/* ------------------------------------------------------------------ */

function downloadLessonPlan() {
  generateLessonPlan('An Inspector Calls', act1LessonPlan)
}

function downloadWorksheet() {
  generateWorksheet('An Inspector Calls', characterWorksheetMeta, characterWorksheetQuestions)
}

function downloadTeachingGuide() {
  generateRevisionGuide('An Inspector Calls', inspectorCallsRevisionGuide)
}

function downloadQuotesWorksheet() {
  generateWorksheet('An Inspector Calls', quotesWorksheetMeta, quotesWorksheetQuestions)
}

function downloadMarkScheme() {
  generateMarkScheme(
    'An Inspector Calls',
    responsibilityMarkSchemeMeta,
    responsibilityMarkSchemeAnswers,
  )
}

function downloadLessonPlanWord() {
  generateLessonPlanWord('An Inspector Calls', act1LessonPlan)
}

function downloadWorksheetWord() {
  generateWorksheetWord('An Inspector Calls', characterWorksheetMeta, characterWorksheetQuestions)
}

function downloadQuotesWorksheetWord() {
  generateWorksheetWord('An Inspector Calls', quotesWorksheetMeta, quotesWorksheetQuestions)
}

function downloadMarkSchemeWord() {
  generateMarkSchemeWord(
    'An Inspector Calls',
    responsibilityMarkSchemeMeta,
    responsibilityMarkSchemeAnswers,
  )
}

async function downloadLessonPlanPptx() {
  try {
    await generateLessonPlanPptx('An Inspector Calls', act1LessonPlan)
  } catch (err) {
    console.error('PPTX download failed:', err)
    alert('PowerPoint download failed. Please try the PDF download instead.')
  }
}

/* ------------------------------------------------------------------ */
/*  Subscription preview cards                                         */
/* ------------------------------------------------------------------ */

const subscriptionFeatures = [
  {
    icon: Layers,
    title: '30+ Inspector Calls Lessons',
    description: 'Full scheme of work covering every act, character, and theme',
  },
  {
    icon: BookOpen,
    title: 'Complete Schemes of Work',
    description: 'Ready-made sequences for all IGCSE and GCSE set texts',
  },
  {
    icon: PenTool,
    title: 'AI Essay Marking',
    description: 'Instant, specification-aligned feedback on student essays',
  },
  {
    icon: BarChart3,
    title: 'Student Progress Tracking',
    description: 'Real-time analytics across every class and student',
  },
  {
    icon: ClipboardList,
    title: 'Mock Exam Papers',
    description: 'Practice papers with mark schemes for every specification',
  },
  {
    icon: Users,
    title: 'Department Collaboration',
    description: 'Share resources, track department-wide progress, and standardise',
  },
]

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function FreeResourcesPage() {
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  const t = useT()
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({})

  function toggleAnswer(index: number) {
    setShowAnswers((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ------------------------------------------------------------ */}
      {/*  HERO                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            <Star className="mr-1.5 h-3.5 w-3.5" />
            100% Free -- No Account Required
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t('for_teachers_free.h1')}{' '}
            <span className="block text-primary">{tr(`An Inspector Calls`)}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('for_teachers_free.intro')}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground/80">
            Resources available for all major exam boards (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE).
            Your school&apos;s content is tailored to your chosen board.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-primary" />
              {lesson.yearGroup}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-primary" />
              AQA GCSE English Literature
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {lesson.duration}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">
        {/* ---------------------------------------------------------- */}
        {/*  A. COMPLETE LESSON PLAN                                     */}
        {/* ---------------------------------------------------------- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{tr(`Complete Lesson Plan`)}</h2>
              <p className="text-sm text-muted-foreground">
                Displayed in full below and downloadable
              </p>
            </div>
          </div>

          <Card className="p-6 md:p-8 space-y-8 border-border/60 bg-card">
            {/* Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Title</p>
                <p className="font-medium">{lesson.title}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
                  Duration
                </p>
                <p className="font-medium">{lesson.duration}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
                  Year Group
                </p>
                <p className="font-medium">{lesson.yearGroup}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Board</p>
                <p className="font-medium">{lesson.board} English Literature</p>
              </div>
            </div>

            {/* Objectives */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Objectives</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
                {lesson.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ol>
            </div>

            {/* Success Criteria */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Success Criteria`)}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {lesson.successCriteria.map((sc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-700 mt-0.5 shrink-0" />
                    <span>{sc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keywords */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {lesson.keywords.map((kw) => (
                  <Badge key={kw} variant="secondary" className="text-xs">
                    {kw}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Starter Activity */}
            <div className="rounded-lg border border-border/50 p-5 bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/30">
                  Starter
                </Badge>
                <span className="text-sm font-medium">{lesson.starterActivity.title}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {lesson.starterActivity.duration}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lesson.starterActivity.instructions}
              </p>
              {lesson.starterActivity.differentiation && (
                <div className="mt-4 space-y-2 text-xs">
                  <p className="font-medium text-foreground">Differentiation:</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div className="rounded-md border border-border/40 p-3 bg-background/50">
                      <p className="font-medium text-blue-600 mb-1">Support</p>
                      <p className="text-muted-foreground">
                        {lesson.starterActivity.differentiation.support}
                      </p>
                    </div>
                    <div className="rounded-md border border-border/40 p-3 bg-background/50">
                      <p className="font-medium text-teal-700 mb-1">Core</p>
                      <p className="text-muted-foreground">
                        {lesson.starterActivity.differentiation.core}
                      </p>
                    </div>
                    <div className="rounded-md border border-border/40 p-3 bg-background/50">
                      <p className="font-medium text-purple-600 mb-1">Stretch</p>
                      <p className="text-muted-foreground">
                        {lesson.starterActivity.differentiation.stretch}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main Activities */}
            {lesson.mainActivities.map((act, i) => (
              <div key={i} className="rounded-lg border border-border/50 p-5 bg-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/30">
                    Main {i + 1}
                  </Badge>
                  <span className="text-sm font-medium">{act.title}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{act.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{act.instructions}</p>
                {act.differentiation && (
                  <div className="mt-4 space-y-2 text-xs">
                    <p className="font-medium text-foreground">Differentiation:</p>
                    <div className="grid gap-2 sm:grid-cols-3">
                      <div className="rounded-md border border-border/40 p-3 bg-background/50">
                        <p className="font-medium text-blue-600 mb-1">Support</p>
                        <p className="text-muted-foreground">{act.differentiation.support}</p>
                      </div>
                      <div className="rounded-md border border-border/40 p-3 bg-background/50">
                        <p className="font-medium text-teal-700 mb-1">Core</p>
                        <p className="text-muted-foreground">{act.differentiation.core}</p>
                      </div>
                      <div className="rounded-md border border-border/40 p-3 bg-background/50">
                        <p className="font-medium text-purple-600 mb-1">Stretch</p>
                        <p className="text-muted-foreground">{act.differentiation.stretch}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Plenary */}
            <div className="rounded-lg border border-border/50 p-5 bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/30">Plenary</Badge>
                <span className="text-sm font-medium">{lesson.plenaryActivity.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lesson.plenaryActivity.instructions}
              </p>
              {lesson.plenaryActivity.differentiation && (
                <div className="mt-4 space-y-2 text-xs">
                  <p className="font-medium text-foreground">Differentiation:</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div className="rounded-md border border-border/40 p-3 bg-background/50">
                      <p className="font-medium text-blue-600 mb-1">Support</p>
                      <p className="text-muted-foreground">
                        {lesson.plenaryActivity.differentiation.support}
                      </p>
                    </div>
                    <div className="rounded-md border border-border/40 p-3 bg-background/50">
                      <p className="font-medium text-teal-700 mb-1">Core</p>
                      <p className="text-muted-foreground">
                        {lesson.plenaryActivity.differentiation.core}
                      </p>
                    </div>
                    <div className="rounded-md border border-border/40 p-3 bg-background/50">
                      <p className="font-medium text-purple-600 mb-1">Stretch</p>
                      <p className="text-muted-foreground">
                        {lesson.plenaryActivity.differentiation.stretch}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Homework */}
            {lesson.homework && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Homework</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{lesson.homework}</p>
              </div>
            )}

            {/* Teacher Notes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Teacher Notes`)}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {lesson.teacherNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download */}
            <DownloadMenu
              size="lg"
              label="Download Lesson Plan"
              options={[
                { label: 'Download PDF', format: 'pdf', onClick: downloadLessonPlan },
                { label: 'Download Word (.docx)', format: 'word', onClick: downloadLessonPlanWord },
                {
                  label: 'Download PowerPoint (.pptx)',
                  format: 'pptx',
                  onClick: downloadLessonPlanPptx,
                },
              ]}
            />
          </Card>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  B. WORKSHEET                                                */}
        {/* ---------------------------------------------------------- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <ClipboardList className="h-5 w-5 text-teal-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Worksheet</h2>
              <p className="text-sm text-muted-foreground">
                {lesson.worksheetQuestions.length} questions with mark allocations and toggleable
                model answers
              </p>
            </div>
          </div>

          <Card className="p-6 md:p-8 space-y-6 border-border/60 bg-card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{tr(`An Inspector Calls -- Act 1`)}</h3>
                <p className="text-xs text-muted-foreground">
                  {lesson.board} | {lesson.yearGroup}
                </p>
              </div>
              <Badge variant="secondary">
                {lesson.worksheetQuestions.reduce((sum, q) => sum + (q.marks || 0), 0)} marks total
              </Badge>
            </div>

            <div className="space-y-6">
              {lesson.worksheetQuestions.map((q, i) => (
                <div key={i} className="rounded-lg border border-border/50 p-5 bg-muted/20">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-sm font-medium">
                      <span className="text-primary mr-2">Q{i + 1}.</span>
                      {q.question}
                    </p>
                    {q.marks && (
                      <Badge variant="outline" className="shrink-0 text-xs">
                        {q.marks} marks
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Answer lines: {q.lines}</p>
                  {q.modelAnswer && (
                    <div>
                      <button
                        onClick={() => toggleAnswer(i)}
                        className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {showAnswers[i] ? (
                          <>
                            <ChevronUp className="h-3.5 w-3.5" />
                            Hide Model Answer
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3.5 w-3.5" />
                            Show Model Answer
                          </>
                        )}
                      </button>
                      {showAnswers[i] && (
                        <div className="mt-3 rounded-md border border-emerald-500/20 bg-emerald-500/5 p-4">
                          <p className="text-xs font-medium text-teal-700 mb-2">
                            {tr(`Model Answer:`)}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {q.modelAnswer}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <DownloadMenu
              size="lg"
              label="Download Worksheet"
              options={[
                { label: 'Download PDF', format: 'pdf', onClick: downloadWorksheet },
                { label: 'Download Word (.docx)', format: 'word', onClick: downloadWorksheetWord },
              ]}
            />
          </Card>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  C. TEACHING GUIDE EXCERPT                                   */}
        {/* ---------------------------------------------------------- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
              <BookOpen className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{tr(`Teaching Guide Excerpt`)}</h2>
              <p className="text-sm text-muted-foreground">
                Context, themes, characters, quotes, and assessment criteria
              </p>
            </div>
          </div>

          <Card className="p-6 md:p-8 space-y-8 border-border/60 bg-card">
            {/* Context Notes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Context Notes`)}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {teachingGuide.contextNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Themes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Key Themes`)}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {teachingGuide.themes.map((theme) => (
                  <div
                    key={theme.name}
                    className="rounded-md border border-border/40 p-4 bg-muted/20"
                  >
                    <p className="font-medium text-sm mb-1">{theme.name}</p>
                    <p className="text-xs text-muted-foreground">{theme.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Characters */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Key Characters`)}</h3>
              <div className="space-y-3">
                {teachingGuide.characters.map((char) => (
                  <div key={char.name} className="flex items-start gap-3 text-sm">
                    <Badge
                      variant="outline"
                      className="shrink-0 mt-0.5 text-xs min-w-[120px] justify-center"
                    >
                      {char.name}
                    </Badge>
                    <p className="text-muted-foreground">{char.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Quotes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Key Quotes`)}</h3>
              <div className="space-y-4">
                {teachingGuide.keyQuotes.map((q, i) => (
                  <div key={i} className="rounded-md border-l-2 border-primary/40 pl-4 py-2">
                    <p className="text-sm italic text-foreground/90">&quot;{q.quote}&quot;</p>
                    <p className="text-xs text-primary mt-1">-- {q.speaker}</p>
                    <p className="text-xs text-muted-foreground mt-1">{q.significance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Criteria */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{tr(`Assessment Criteria (AQA GCSE)`)}</h3>
              <div className="space-y-3">
                {teachingGuide.assessmentCriteria.map((ac) => (
                  <div key={ac.code} className="flex items-start gap-3 text-sm">
                    <Badge className="bg-primary/10 text-primary border-primary/30 shrink-0 mt-0.5">
                      {ac.code}
                    </Badge>
                    <div>
                      <p className="text-muted-foreground">{ac.description}</p>
                      <p className="text-xs text-muted-foreground/70 mt-0.5">
                        Weighting: {ac.weighting}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DownloadMenu
              size="lg"
              options={[
                {
                  label: 'Download Revision Guide (PDF)',
                  format: 'pdf',
                  onClick: downloadTeachingGuide,
                },
              ]}
            />
          </Card>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  D. KEY QUOTES WORKSHEET                                     */}
        {/* ---------------------------------------------------------- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <PenTool className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{tr(`Key Quotes Worksheet`)}</h2>
              <p className="text-sm text-muted-foreground">
                8 quote analysis tasks using the WHAT-HOW-WHY framework
              </p>
            </div>
          </div>
          <Card className="p-6 md:p-8 space-y-4 border-border/60 bg-card">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Practise analysing the most important quotations from An Inspector Calls. Each task
              provides a key quotation and asks you to identify language techniques, explain
              context, and link to Priestley&apos;s wider message. Includes a comparative extended
              writing task worth 8 marks.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                8 questions
              </Badge>
              <Badge variant="secondary" className="text-xs">
                45 marks total
              </Badge>
              <Badge variant="secondary" className="text-xs">
                WHAT-HOW-WHY framework
              </Badge>
            </div>
            <DownloadMenu
              size="lg"
              label="Download Quotes Worksheet"
              options={[
                { label: 'Download PDF', format: 'pdf', onClick: downloadQuotesWorksheet },
                {
                  label: 'Download Word (.docx)',
                  format: 'word',
                  onClick: downloadQuotesWorksheetWord,
                },
              ]}
            />
          </Card>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  E. MARK SCHEME                                              */}
        {/* ---------------------------------------------------------- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
              <BarChart3 className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{tr(`Mark Scheme`)}</h2>
              <p className="text-sm text-muted-foreground">
                Essay: &quot;How does Priestley present responsibility?&quot;
              </p>
            </div>
          </div>
          <Card className="p-6 md:p-8 space-y-4 border-border/60 bg-card">
            <p className="text-sm text-muted-foreground leading-relaxed">
              A complete mark scheme for the responsibility essay with question-by-question marking
              criteria, example answers at three grade boundaries (7-9, 4-6, 1-3), AO mapping, and
              common misconceptions to watch for when marking. Covers AO1, AO2, and AO3 across three
              sub-questions worth 36 marks total.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                3 sub-questions
              </Badge>
              <Badge variant="secondary" className="text-xs">
                36 marks total
              </Badge>
              <Badge variant="secondary" className="text-xs">
                AO1 + AO2 + AO3
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Grade boundary examples
              </Badge>
            </div>
            <DownloadMenu
              size="lg"
              label="Download Mark Scheme"
              options={[
                { label: 'Download PDF', format: 'pdf', onClick: downloadMarkScheme },
                { label: 'Download Word (.docx)', format: 'word', onClick: downloadMarkSchemeWord },
              ]}
            />
          </Card>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  6. WHAT ELSE YOU GET (locked/preview)                       */}
        {/* ---------------------------------------------------------- */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">{tr(`What Else You Get With a Subscription`)}</h2>
            <p className="text-muted-foreground mt-2">
              This free pack is just the beginning. Here is what subscribers unlock:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="relative overflow-hidden border-border/40 bg-card/50 p-5"
                >
                  <div className="absolute top-3 right-3">
                    <Lock className="h-4 w-4 text-muted-foreground/40" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 mb-3">
                    <Icon className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                  <div className="mt-3 h-20 rounded-md bg-muted/30 border border-border/30 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground/50 italic">
                      Preview available with subscription
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  7. CTA SECTION                                              */}
        {/* ---------------------------------------------------------- */}
        <section className="rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 via-card to-emerald-500/5 p-8 md:p-12 text-center">
          <Award className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{tr(`Ready to Transform Your Teaching?`)}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get full access to every lesson plan, worksheet, teaching guide, AI essay marking, and
            student progress tracking. Start a 7-day free trial — no card required — then continue
            for a small monthly or annual fee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button render={<Link href="/auth/teacher-register" />} size="lg">
              Start Your Free Week
            </Button>
            <Button render={<Link href="/teachers" />} variant="outline" size="lg">
              See All Plans
            </Button>
            <Button render={<Link href="/schools" />} variant="ghost" size="lg">
              Founding Schools Programme
            </Button>
          </div>
        </section>

        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under
          the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose
          of criticism and review.
        </p>
      </div>
    </div>
  )
}
