'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'
import {
  AlertTriangle,
  Users,
  UserCheck,
  Flag,
  ArrowRight,
  ClipboardList,
  UserPlus,
  Phone,
  BookOpen,
  Target,
  CheckCircle2,
  TrendingUp,
  Download,
  Calendar,
  MessageSquare,
  Star,
  ArrowUpRight,
} from 'lucide-react'
import { toast } from 'sonner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import DemoBanner from '@/components/demo/DemoBanner'
import { DEMO_STUDENTS, DEMO_CLASSES } from '@/data/demo-data'

// -- At-Risk Students data ---------------------------------------------------

type RiskLevel = 'High' | 'Medium' | 'Low'

interface AtRiskStudent {
  id: string
  name: string
  yearGroup: string
  riskLevel: RiskLevel
  issue: string
  currentIntervention: string
  assignedTo: string
}

const atRiskStudents: AtRiskStudent[] = [
  {
    id: 's3',
    name: 'Jake Morrison',
    yearGroup: 'Year 10',
    riskLevel: 'High',
    issue: 'Not logged in 14 days',
    currentIntervention: 'None',
    assignedTo: 'Ms. Thompson',
  },
  {
    id: 's4',
    name: 'Priya Sharma',
    yearGroup: 'Year 11',
    riskLevel: 'High',
    issue: 'Score below 40%',
    currentIntervention: 'Weekly check-in',
    assignedTo: 'Mr. Patel',
  },
  {
    id: 's5',
    name: 'Ethan Clarke',
    yearGroup: 'Year 9',
    riskLevel: 'Medium',
    issue: 'Missed 5 assignments',
    currentIntervention: 'None',
    assignedTo: 'Mrs. Clarke',
  },
  {
    id: 's2',
    name: 'Oliver Bennett',
    yearGroup: 'Year 10',
    riskLevel: 'Medium',
    issue: 'Score below 40%',
    currentIntervention: 'Small group support',
    assignedTo: 'Ms. Thompson',
  },
  {
    id: 's6',
    name: 'Sophie Turner',
    yearGroup: 'Year 9',
    riskLevel: 'Low',
    issue: 'Not logged in 14 days',
    currentIntervention: 'None',
    assignedTo: 'Mrs. Okafor',
  },
  {
    id: 's7',
    name: 'Callum Reid',
    yearGroup: 'Year 8',
    riskLevel: 'High',
    issue: 'Missed 5 assignments',
    currentIntervention: 'Weekly check-in',
    assignedTo: 'Mr. Roberts',
  },
  {
    id: 's8',
    name: 'Fatima Al-Rashid',
    yearGroup: 'Year 11',
    riskLevel: 'Medium',
    issue: 'Score below 40%',
    currentIntervention: 'None',
    assignedTo: 'Ms. Khan',
  },
  {
    id: 's9',
    name: 'Daniel Osei',
    yearGroup: 'Year 7',
    riskLevel: 'Low',
    issue: 'Missed 5 assignments',
    currentIntervention: 'None',
    assignedTo: 'Ms. Williams',
  },
  {
    id: 's10',
    name: 'Megan Fletcher',
    yearGroup: 'Year 10',
    riskLevel: 'High',
    issue: 'Not logged in 14 days',
    currentIntervention: 'None',
    assignedTo: 'Mr. Davies',
  },
  {
    id: 's11',
    name: 'Liam Patel',
    yearGroup: 'Year 11',
    riskLevel: 'Medium',
    issue: 'Score below 40%',
    currentIntervention: 'Small group support',
    assignedTo: 'Mr. Patel',
  },
]

// -- Intervention Types ------------------------------------------------------

interface InterventionType {
  title: string
  description: string
  icon: React.ReactNode
  recommended: string
}

const interventionTypes: InterventionType[] = [
  {
    title: 'One-to-One Support',
    description:
      'Dedicated sessions with a teacher or learning mentor to address individual gaps in understanding and build confidence.',
    icon: <UserPlus className="h-5 w-5" />,
    recommended: 'High-risk students with specific skill gaps',
  },
  {
    title: 'Small Group Sessions',
    description:
      'Targeted group work with 3-5 students facing similar challenges. Promotes peer learning alongside structured support.',
    icon: <Users className="h-5 w-5" />,
    recommended: 'Medium-risk students with shared weaknesses',
  },
  {
    title: 'Parental Contact',
    description:
      'Engaging parents and guardians to support learning at home. Includes scheduled calls, progress reports, and home-learning packs.',
    icon: <Phone className="h-5 w-5" />,
    recommended: 'Students with attendance or engagement issues',
  },
  {
    title: 'Modified Resources',
    description:
      'Adapted learning materials including scaffolded worksheets, audio resources, and differentiated tasks to meet individual needs.',
    icon: <BookOpen className="h-5 w-5" />,
    recommended: 'Students struggling with standard materials',
  },
  {
    title: 'Exam Technique Focus',
    description:
      'Intensive practice on exam structure, timing, and mark-scheme expectations. Includes mock exam walkthroughs and model answers.',
    icon: <Target className="h-5 w-5" />,
    recommended: 'Year 10-11 students below target grades',
  },
]

// -- Active Interventions tracker --------------------------------------------

interface ActiveIntervention {
  id: string
  studentName: string
  interventionType: string
  startDate: string
  reviewDate: string
  progressNotes: string
}

const activeInterventions: ActiveIntervention[] = [
  {
    id: 'int-1',
    studentName: 'Priya Sharma',
    interventionType: 'Weekly check-in',
    startDate: '2026-02-10',
    reviewDate: '2026-04-14',
    progressNotes:
      'Attendance improving. Score up from 34% to 41%. Needs continued support with essay structure.',
  },
  {
    id: 'int-2',
    studentName: 'Oliver Bennett',
    interventionType: 'Small group support',
    startDate: '2026-02-24',
    reviewDate: '2026-04-21',
    progressNotes:
      'Engaging well in group sessions. Quotation integration improving. Still below target on timed work.',
  },
  {
    id: 'int-3',
    studentName: 'Callum Reid',
    interventionType: 'Weekly check-in',
    startDate: '2026-03-03',
    reviewDate: '2026-04-28',
    progressNotes:
      'Parental meeting held. Assignment submission rate increased from 40% to 65%. Motivation still inconsistent.',
  },
  {
    id: 'int-4',
    studentName: 'Liam Patel',
    interventionType: 'Small group support',
    startDate: '2026-03-10',
    reviewDate: '2026-05-05',
    progressNotes:
      'Early stages. Initial diagnostic completed. Focused on Language Paper 2 skills this half-term.',
  },
]

// -- Success Stories ---------------------------------------------------------

interface SuccessStory {
  studentName: string
  previousStatus: string
  currentStatus: string
  previousScore: number
  currentScore: number
  intervention: string
  duration: string
}

const successStories: SuccessStory[] = [
  {
    studentName: 'Zara Hussain',
    previousStatus: 'At Risk',
    currentStatus: 'On Track',
    previousScore: 38,
    currentScore: 62,
    intervention: 'One-to-One Support',
    duration: '8 weeks',
  },
  {
    studentName: 'Kieran Walsh',
    previousStatus: 'At Risk',
    currentStatus: 'On Track',
    previousScore: 42,
    currentScore: 67,
    intervention: 'Small Group Sessions',
    duration: '6 weeks',
  },
  {
    studentName: 'Aisha Begum',
    previousStatus: 'At Risk',
    currentStatus: 'On Track',
    previousScore: 35,
    currentScore: 58,
    intervention: 'Modified Resources + Parental Contact',
    duration: '10 weeks',
  },
]

// -- Risk badge helper -------------------------------------------------------

function riskBadge(level: RiskLevel) {
  switch (level) {
    case 'High':
      return (
        <Badge className="bg-red-500/10 text-red-700 border-red-500/30 dark:text-red-300">
          High
        </Badge>
      )
    case 'Medium':
      return (
        <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/30 dark:text-amber-300">
          Medium
        </Badge>
      )
    case 'Low':
      return <Badge className="bg-primary/10 text-primary border-primary/30">Low</Badge>
  }
}

// -- Page Component ----------------------------------------------------------

export default function InterventionsPage() {
  const t = useT()
  const [planningStudent, setPlanningStudent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── 1. Demo Banner ─────────────────────────────────────────────────── */}
      <DemoBanner message={t('demo.b15.interventions.demo_banner')} />

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* ── 2. Header ──────────────────────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
              <AlertTriangle className="h-5 w-5 text-red-700 dark:text-red-300" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {t('demo.b15.interventions.title')}
            </h1>
          </div>
          <p className="text-muted-foreground mt-1">{t('demo.b15.interventions.subtitle')}</p>
        </div>

        {/* ── 3. Stats ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <Flag className="h-5 w-5 text-red-700 dark:text-red-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('demo.b15.interventions.flagged')}
                  </p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('demo.b15.interventions.receiving')}
                  </p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('demo.b15.interventions.new_flags')}
                  </p>
                  <p className="text-2xl font-bold text-foreground">15</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── 4. At-Risk Students Table ──────────────────────────────────── */}
        <Card className="bg-card border-border/60 mb-8">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-red-400" />
              {t('demo.b15.interventions.at_risk_title')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('demo.b15.interventions.at_risk_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left">
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_name')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_year')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_risk')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_issue')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_current')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_assigned')}
                    </th>
                    <th className="pb-3 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_action')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {atRiskStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b border-border/40 hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 pr-4">
                        <Link
                          href={`/demo/school/students/${student.id}`}
                          className="text-primary hover:text-primary/80 hover:underline font-medium"
                        >
                          {student.name}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">{student.yearGroup}</td>
                      <td className="py-3 pr-4">{riskBadge(student.riskLevel)}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{student.issue}</td>
                      <td className="py-3 pr-4">
                        {student.currentIntervention === 'None' ? (
                          <span className="text-muted-foreground italic">None</span>
                        ) : (
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            {student.currentIntervention}
                          </Badge>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">{student.assignedTo}</td>
                      <td className="py-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                          onClick={() => {
                            setPlanningStudent(student.name)
                            toast.success(`Intervention plan opened for ${student.name}`, {
                              description: 'Select an intervention type and assign a review date.',
                            })
                          }}
                        >
                          <ClipboardList className="h-3.5 w-3.5 mr-1.5" />
                          {t('demo.b15.interventions.plan_btn')}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── 5. Intervention Types ──────────────────────────────────────── */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {t('demo.b15.interventions.types_heading')}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interventionTypes.map((type) => (
              <Card
                key={type.title}
                className="bg-card border-border/60 hover:border-border transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{type.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Target className="h-3.5 w-3.5" />
                    <span>Recommended for: {type.recommended}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ── 6. Active Interventions Tracker ────────────────────────────── */}
        <Card className="bg-card border-border/60 mb-8">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              {t('demo.b15.interventions.active_title')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('demo.b15.interventions.active_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left">
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_student')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_int_type')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_start')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_review')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_notes')}
                    </th>
                    <th className="pb-3 font-medium text-muted-foreground">
                      {t('demo.b15.interventions.col_action')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeInterventions.map((intervention) => (
                    <tr
                      key={intervention.id}
                      className="border-b border-border/40 hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 pr-4 font-medium text-foreground">
                        {intervention.studentName}
                      </td>
                      <td className="py-3 pr-4">
                        <Badge className="bg-primary/10 text-primary border-primary/30">
                          {intervention.interventionType}
                        </Badge>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {intervention.startDate}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {intervention.reviewDate}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground max-w-xs">
                        <p className="line-clamp-2">{intervention.progressNotes}</p>
                      </td>
                      <td className="py-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                          onClick={() => {
                            toast.success(`Intervention updated for ${intervention.studentName}`, {
                              description: 'Progress notes saved. Next review date confirmed.',
                            })
                          }}
                        >
                          <MessageSquare className="h-3.5 w-3.5 mr-1.5" />
                          {t('demo.b15.interventions.update_btn')}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── 7. Success Stories ──────────────────────────────────────────── */}
        <Card className="bg-card border-border/60 mb-8">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              {t('demo.b15.interventions.success_title')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('demo.b15.interventions.success_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {successStories.map((story) => (
                <div
                  key={story.studentName}
                  className="rounded-lg border border-border/60 bg-muted/50 p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-foreground">{story.studentName}</span>
                  </div>

                  {/* Before / After comparison */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="rounded-md bg-red-500/10 border border-red-500/20 p-2 text-center">
                      <p className="text-[10px] uppercase tracking-wider text-red-700 dark:text-red-300 mb-1">
                        {t('demo.b15.interventions.before')}
                      </p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">
                        {story.previousScore}%
                      </p>
                      <Badge className="mt-1 bg-red-500/10 text-red-700 border-red-500/30 dark:text-red-300 text-[10px]">
                        {story.previousStatus}
                      </Badge>
                    </div>
                    <div className="rounded-md bg-primary/10 border border-primary/20 p-2 text-center">
                      <p className="text-[10px] uppercase tracking-wider text-primary mb-1">
                        {t('demo.b15.interventions.after')}
                      </p>
                      <p className="text-lg font-bold text-primary">{story.currentScore}%</p>
                      <Badge className="mt-1 bg-primary/10 text-primary border-primary/30 text-[10px]">
                        {story.currentStatus}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5">
                      <ArrowUpRight className="h-3 w-3 text-primary" />+
                      {story.currentScore - story.previousScore}% improvement
                    </p>
                    <p className="flex items-center gap-1.5">
                      <ClipboardList className="h-3 w-3 text-primary" />
                      {story.intervention}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      {story.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── 8. Export Button ────────────────────────────────────────────── */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => {
              toast.success('Intervention report exported', {
                description: 'The report has been generated and is ready for download.',
              })
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            {t('demo.b15.interventions.export_btn')}
          </Button>
        </div>
      </div>
    </div>
  )
}
