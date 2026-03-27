'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  FileText,
  Printer,
  Calendar,
  User,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

// ── Mock Data ─────────────────────────────────────────────────────────────────

interface Report {
  id: string
  title: string
  teacher: string
  date: string
  type: 'progress' | 'end_of_term' | 'mock_exam'
  summary: string
  details: {
    attendance: string
    effort: string
    attainment: string
    behaviour: string
    strengths: string
    areasForImprovement: string
    parentActions: string
    teacherComment: string
  }
}

const reports: Report[] = [
  {
    id: '1',
    title: 'Spring Term Progress Report',
    teacher: 'Ms Richardson',
    date: '2026-03-15',
    type: 'progress',
    summary:
      'Olivia has made excellent progress this term, particularly in her analysis of Macbeth. Her written expression continues to improve and she engages well in class discussions.',
    details: {
      attendance: '96%',
      effort: 'Excellent',
      attainment: 'Grade 7 (Above target)',
      behaviour: 'Outstanding',
      strengths:
        'Olivia demonstrates a sophisticated understanding of character motivation in Shakespeare. Her essay writing has improved significantly — she now consistently embeds quotations fluently and develops analytical points with clear topic sentences. Her creative writing for Language Paper 1 is imaginative and well-structured.',
      areasForImprovement:
        'Olivia should focus on developing her comparative skills for Language Paper 2 Question 4. She sometimes rushes her unseen poetry responses and would benefit from spending more time planning before writing. Subject terminology could be used more consistently throughout her responses.',
      parentActions:
        'Please encourage Olivia to complete her weekly revision modules on The English Hub, particularly the Language Paper 2 content. Reading a broadsheet newspaper article weekly would also help with her non-fiction comprehension.',
      teacherComment:
        'Olivia is a pleasure to teach and is on track to achieve her target grade if she maintains her current effort. I am confident she will perform well in her summer exams.',
    },
  },
  {
    id: '2',
    title: 'Mock Exam Results — English Literature',
    teacher: 'Ms Richardson',
    date: '2026-02-20',
    type: 'mock_exam',
    summary:
      'Olivia achieved a Grade 7 in her English Literature mock exam. This is above the class average of Grade 5 and in line with her target.',
    details: {
      attendance: '96%',
      effort: 'Very Good',
      attainment: 'Grade 7',
      behaviour: 'Excellent',
      strengths:
        'Olivia performed particularly well on the Macbeth extract question (28/34) and the An Inspector Calls question (26/34). Her analysis was detailed and she used quotations effectively to support her arguments.',
      areasForImprovement:
        'The poetry comparison question was weaker (18/30). Olivia needs to practise structuring comparative responses, ensuring she gives equal attention to both poems. Her unseen poetry response (14/24) showed some understanding but lacked depth in analysis of structural features.',
      parentActions:
        'Encourage Olivia to use the poetry comparison practice modules on The English Hub. Two practice responses per week would significantly help her confidence in this area.',
      teacherComment:
        'A very strong performance overall. With targeted revision on the poetry sections, Olivia could realistically achieve a Grade 8 in the summer.',
    },
  },
  {
    id: '3',
    title: 'Autumn Term End of Term Report',
    teacher: 'Ms Richardson',
    date: '2025-12-18',
    type: 'end_of_term',
    summary:
      'Olivia has settled well into Year 10 English and has shown a positive attitude towards her GCSE studies. She is beginning to develop the analytical skills needed for the higher grades.',
    details: {
      attendance: '94%',
      effort: 'Good',
      attainment: 'Grade 6 (On target)',
      behaviour: 'Very Good',
      strengths:
        'Olivia has shown a natural aptitude for creative writing. Her Language Paper 1 Section B responses are engaging and demonstrate a good range of vocabulary. She participates actively in class discussions about Macbeth.',
      areasForImprovement:
        'Olivia needs to develop her essay writing stamina — she sometimes runs out of time in timed conditions. Her quotation knowledge for Macbeth needs to be more extensive to achieve the higher grades. Reading for pleasure would also help broaden her vocabulary.',
      parentActions:
        'Please ensure Olivia is completing her English homework on time. Encouraging 20 minutes of reading per day would have a significant positive impact on her writing quality.',
      teacherComment:
        'Olivia has made a positive start to GCSE English. With consistent effort and regular revision, she has the potential to exceed her target grade.',
    },
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function getTypeBadge(type: Report['type']) {
  switch (type) {
    case 'progress':
      return <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Progress Report</Badge>
    case 'end_of_term':
      return <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">End of Term</Badge>
    case 'mock_exam':
      return <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20">Mock Exam</Badge>
  }
}

function formatReportDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ── Report Card Component ─────────────────────────────────────────────────────

function ReportCard({ report }: { report: Report }) {
  const [expanded, setExpanded] = useState(false)

  const handlePrint = () => {
    const printContent = `
      <html>
        <head>
          <title>${report.title}</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #1a1a1a; }
            h1 { font-size: 24px; margin-bottom: 4px; }
            h2 { font-size: 18px; margin-top: 24px; margin-bottom: 8px; color: #333; }
            .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
            .summary { font-size: 15px; line-height: 1.6; margin-bottom: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
            .grid-item { padding: 12px; background: #f9f9f9; border-radius: 6px; }
            .grid-item strong { display: block; font-size: 12px; text-transform: uppercase; color: #666; margin-bottom: 4px; }
            .section { margin-bottom: 16px; }
            .section p { font-size: 14px; line-height: 1.7; color: #333; }
            .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 13px; color: #666; }
          </style>
        </head>
        <body>
          <h1>${report.title}</h1>
          <div class="meta">${report.teacher} &mdash; ${formatReportDate(report.date)}</div>
          <div class="summary">${report.summary}</div>
          <div class="grid">
            <div class="grid-item"><strong>Attendance</strong>${report.details.attendance}</div>
            <div class="grid-item"><strong>Effort</strong>${report.details.effort}</div>
            <div class="grid-item"><strong>Attainment</strong>${report.details.attainment}</div>
            <div class="grid-item"><strong>Behaviour</strong>${report.details.behaviour}</div>
          </div>
          <h2>Strengths</h2>
          <div class="section"><p>${report.details.strengths}</p></div>
          <h2>Areas for Improvement</h2>
          <div class="section"><p>${report.details.areasForImprovement}</p></div>
          <h2>Suggested Actions for Parents</h2>
          <div class="section"><p>${report.details.parentActions}</p></div>
          <h2>Teacher's Comment</h2>
          <div class="section"><p>${report.details.teacherComment}</p></div>
          <div class="footer">The English Hub &mdash; Parent Portal &mdash; Printed ${new Date().toLocaleDateString('en-GB')}</div>
        </body>
      </html>
    `
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(printContent)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <Card>
      <CardContent className="p-0">
        {/* Collapsed header — always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full flex-col gap-3 p-4 text-left transition-colors hover:bg-accent/30 sm:flex-row sm:items-center sm:justify-between sm:p-5"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">{report.title}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                {getTypeBadge(report.type)}
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <User className="h-3 w-3" />
                  {report.teacher}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatReportDate(report.date)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </button>

        {/* Expanded details */}
        {expanded && (
          <div className="border-t border-border">
            {/* Summary */}
            <div className="bg-accent/20 px-4 py-3 sm:px-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{report.summary}</p>
            </div>

            <div className="px-4 py-4 sm:px-5 sm:py-5">
              {/* Quick stats grid */}
              <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { label: 'Attendance', value: report.details.attendance },
                  { label: 'Effort', value: report.details.effort },
                  { label: 'Attainment', value: report.details.attainment },
                  { label: 'Behaviour', value: report.details.behaviour },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border p-2.5 text-center"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Detail sections */}
              <div className="space-y-4">
                <DetailSection title="Strengths" content={report.details.strengths} />
                <DetailSection title="Areas for Improvement" content={report.details.areasForImprovement} />
                <DetailSection title="Suggested Actions for Parents" content={report.details.parentActions} />
                <DetailSection title="Teacher's Comment" content={report.details.teacherComment} />
              </div>

              {/* Print button */}
              <Separator className="my-4" />
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrint()
                  }}
                  className="gap-2"
                >
                  <Printer className="h-4 w-4" />
                  Print Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function DetailSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-foreground/80">{content}</p>
    </div>
  )
}

// ── Page Component ────────────────────────────────────────────────────────────

export default function ParentReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/parent">
          <Button variant="ghost" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-heading-lg text-foreground">Reports</h1>
          <p className="text-body-sm text-muted-foreground">
            Progress reports from Olivia&apos;s teachers
          </p>
        </div>
      </div>

      {/* Reports count */}
      <div className="flex items-center gap-2">
        <Badge variant="secondary">{reports.length} reports</Badge>
        <span className="text-xs text-muted-foreground">
          Tap a report to expand full details
        </span>
      </div>

      {/* Report list */}
      <div className="space-y-3">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>

      {/* Empty state hint */}
      {reports.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FileText className="h-10 w-10 text-muted-foreground/70" />
            <p className="mt-3 text-sm font-medium text-muted-foreground">No reports yet</p>
            <p className="mt-1 text-xs text-muted-foreground/70">
              Reports from teachers will appear here when available
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
