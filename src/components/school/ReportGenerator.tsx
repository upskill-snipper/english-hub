'use client'

import { useState, useMemo, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils'
import { percentageToGCSEGradeLabel } from '@/lib/grades'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FileText,
  Printer,
  Download,
  Mail,
  Calendar,
  Users,
  User,
  Building2,
  TrendingUp,
  GraduationCap,
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronRight,
} from 'lucide-react'
import type {
  ClassAnalytics,
  StudentAnalytics,
  SchoolOverview,
} from '@/lib/types'
import {
  generateClassReport,
  generateStudentReport,
  generateParentReport,
  generateHoDReport,
  generateProgressReport,
  type ReportData,
  type ReportSection,
  type ReportTableSection,
  type TableRow,
} from '@/lib/report-templates'

// ── Types ─────────────────────────────────────────────────────────────────────

type ReportType =
  | 'class-overview'
  | 'individual-student'
  | 'progress-report'
  | 'parents-evening'
  | 'head-of-department'

interface ReportTypeOption {
  value: ReportType
  label: string
  description: string
  icon: typeof FileText
  requiresStudent: boolean
  requiresClass: boolean
  requiresDateRange: boolean
}

export interface ReportGeneratorProps {
  schoolName: string
  teacherName: string
  classes: ClassAnalytics[]
  students: StudentAnalytics[]
  schoolOverview?: SchoolOverview
  className?: string
}

// ── Constants ─────────────────────────────────────────────────────────────────

const REPORT_TYPES: ReportTypeOption[] = [
  {
    value: 'class-overview',
    label: 'Class Overview',
    description: 'Summary of class performance, weak areas, and recommendations',
    icon: Users,
    requiresStudent: false,
    requiresClass: true,
    requiresDateRange: false,
  },
  {
    value: 'individual-student',
    label: 'Individual Student',
    description: 'Detailed analysis of a single student\'s performance',
    icon: User,
    requiresStudent: true,
    requiresClass: false,
    requiresDateRange: false,
  },
  {
    value: 'progress-report',
    label: 'Progress Report',
    description: 'Student progress over a specified date range',
    icon: TrendingUp,
    requiresStudent: true,
    requiresClass: false,
    requiresDateRange: true,
  },
  {
    value: 'parents-evening',
    label: 'Parents\' Evening',
    description: 'Parent-friendly report with grades, strengths, and home support tips',
    icon: GraduationCap,
    requiresStudent: true,
    requiresClass: false,
    requiresDateRange: false,
  },
  {
    value: 'head-of-department',
    label: 'Head of Department',
    description: 'Department-wide summary across all classes',
    icon: Building2,
    requiresStudent: false,
    requiresClass: false,
    requiresDateRange: false,
  },
]

// ── Print Styles ──────────────────────────────────────────────────────────────

const REPORT_PRINT_STYLES = `
@media print {
  body > *:not(#report-print-root) {
    display: none !important;
  }

  nav, header, aside, footer,
  [data-print-hide],
  .no-print {
    display: none !important;
  }

  #report-print-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .report-container {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    padding: 15mm 20mm;
    background: white !important;
    color: black !important;
    font-size: 11pt;
    line-height: 1.6;
  }

  .report-container * {
    color: black !important;
    border-color: #333 !important;
  }

  .report-header {
    border-bottom: 2px solid black !important;
    padding-bottom: 8mm;
    margin-bottom: 8mm;
  }

  .report-section {
    page-break-inside: avoid;
    margin-bottom: 6mm;
  }

  .report-section-title {
    font-size: 13pt;
    font-weight: 700;
    margin-bottom: 3mm;
    border-bottom: 1px solid #999 !important;
    padding-bottom: 2mm;
  }

  .report-table {
    width: 100%;
    border-collapse: collapse;
  }

  .report-table td {
    padding: 2mm 3mm;
    border-bottom: 1px solid #ddd !important;
  }

  .report-table td:first-child {
    font-weight: 600;
    width: 45%;
  }

  .report-highlight-good {
    color: #166534 !important;
  }

  .report-highlight-warning {
    color: #92400e !important;
  }

  .report-highlight-critical {
    color: #991b1b !important;
  }

  .report-footer {
    position: fixed;
    bottom: 10mm;
    left: 20mm;
    right: 20mm;
    text-align: center;
    font-size: 9pt;
    color: #666 !important;
    border-top: 1px solid #ccc !important;
    padding-top: 3mm;
  }

  .report-list-item {
    margin-bottom: 2mm;
    padding-left: 4mm;
  }

  .report-list-item::before {
    content: "\\2022  ";
    font-weight: bold;
  }
}
`

// ── Highlight helpers ─────────────────────────────────────────────────────────

function highlightClass(highlight?: TableRow['highlight']): string {
  switch (highlight) {
    case 'good':
      return 'text-green-600 dark:text-green-400 report-highlight-good'
    case 'warning':
      return 'text-amber-600 dark:text-amber-400 report-highlight-warning'
    case 'critical':
      return 'text-red-600 dark:text-red-400 report-highlight-critical'
    default:
      return 'text-foreground'
  }
}

function highlightBadgeVariant(highlight?: TableRow['highlight']): 'default' | 'secondary' | 'destructive' | 'outline' {
  switch (highlight) {
    case 'good':
      return 'default'
    case 'warning':
      return 'secondary'
    case 'critical':
      return 'destructive'
    default:
      return 'outline'
  }
}

function sectionIcon(type: ReportSection['type']) {
  switch (type) {
    case 'summary':
      return FileText
    case 'detail':
      return ChevronRight
    case 'table':
      return FileText
    case 'recommendation':
      return AlertTriangle
    case 'next-steps':
      return CheckCircle
  }
}

// ── Subcomponents ─────────────────────────────────────────────────────────────

function ReportTableView({ rows }: { rows: TableRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/60">
      <table className="report-table w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                'transition-colors',
                i % 2 === 0 ? 'bg-muted/20' : 'bg-transparent',
              )}
            >
              <td className="px-3 py-2 font-medium text-muted-foreground w-[45%]">
                {row.label}
              </td>
              <td className={cn('px-3 py-2 font-semibold', highlightClass(row.highlight))}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ReportSectionView({ section }: { section: ReportSection | ReportTableSection }) {
  const Icon = sectionIcon(section.type)

  return (
    <div className="report-section mb-6">
      <div className="report-section-title flex items-center gap-2 border-b border-border/60 pb-2 mb-3">
        <Icon className="h-4 w-4 text-muted-foreground shrink-0 no-print" />
        <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
      </div>

      {section.type === 'table' && 'rows' in section ? (
        <ReportTableView rows={(section as ReportTableSection).rows} />
      ) : (
        <ul className="space-y-1.5">
          {section.content.map((line, i) => (
            <li key={i} className="report-list-item text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/30">
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ReportPreview({ report }: { report: ReportData }) {
  return (
    <div id="report-print-root" className="report-container">
      {/* Header */}
      <div className="report-header border-b-2 border-border pb-4 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              {report.header.schoolName}
            </p>
            <h2 className="text-lg font-bold text-foreground">{report.header.reportTitle}</h2>
            {report.header.className && (
              <p className="text-sm text-muted-foreground mt-0.5">
                Class: {report.header.className}
              </p>
            )}
            {report.header.studentName && (
              <p className="text-sm text-muted-foreground mt-0.5">
                Student: {report.header.studentName}
              </p>
            )}
          </div>
          <div className="text-right text-xs text-muted-foreground shrink-0 space-y-0.5">
            <p>Generated: {report.header.generatedDate}</p>
            {report.header.teacherName && <p>Teacher: {report.header.teacherName}</p>}
            <p>Academic Year: {report.header.academicYear}</p>
            {report.header.dateRange && (
              <p>
                Period: {formatDate(report.header.dateRange.from)} &mdash;{' '}
                {formatDate(report.header.dateRange.to)}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Sections */}
      {report.sections.map((section, i) => (
        <ReportSectionView key={i} section={section} />
      ))}

      {/* Footer */}
      <div className="report-footer mt-8 pt-3 border-t border-border text-center text-xs text-muted-foreground">
        <span>{report.header.schoolName}</span>
        <span> &mdash; </span>
        <span>{report.header.reportTitle}</span>
        <span> &mdash; </span>
        <span>{report.header.generatedDate}</span>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export function ReportGenerator({
  schoolName,
  teacherName,
  classes,
  students,
  schoolOverview,
  className,
}: ReportGeneratorProps) {
  const [reportType, setReportType] = useState<ReportType>('class-overview')
  const [selectedClassId, setSelectedClassId] = useState<string>(classes[0]?.class_id ?? '')
  const [selectedStudentId, setSelectedStudentId] = useState<string>('')
  const [dateFrom, setDateFrom] = useState<string>('')
  const [dateTo, setDateTo] = useState<string>('')
  const [emailSent, setEmailSent] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const selectedType = REPORT_TYPES.find((t) => t.value === reportType)!

  // Filter students based on selected class
  const filteredStudents = useMemo(() => {
    if (!selectedClassId) return students
    // If class analytics have top_performers, we can use that as a hint,
    // but we just filter by showing all students (the parent page should pass appropriate data)
    return students
  }, [students, selectedClassId])

  const selectedStudent = useMemo(
    () => students.find((s) => s.student_id === selectedStudentId),
    [students, selectedStudentId],
  )

  const selectedClass = useMemo(
    () => classes.find((c) => c.class_id === selectedClassId),
    [classes, selectedClassId],
  )

  // Generate report
  const report: ReportData | null = useMemo(() => {
    const opts = { schoolName, teacherName, className: selectedClass?.class_name }

    switch (reportType) {
      case 'class-overview': {
        if (!selectedClass) return null
        return generateClassReport(selectedClass, filteredStudents, opts)
      }
      case 'individual-student': {
        if (!selectedStudent) return null
        return generateStudentReport(selectedStudent, opts)
      }
      case 'progress-report': {
        if (!selectedStudent || !dateFrom || !dateTo) return null
        return generateProgressReport(selectedStudent, { from: dateFrom, to: dateTo }, opts)
      }
      case 'parents-evening': {
        if (!selectedStudent) return null
        return generateParentReport(selectedStudent, opts)
      }
      case 'head-of-department': {
        if (!schoolOverview) return null
        return generateHoDReport(schoolOverview, classes, { teacherName })
      }
      default:
        return null
    }
  }, [
    reportType,
    selectedClass,
    selectedStudent,
    filteredStudents,
    schoolOverview,
    classes,
    dateFrom,
    dateTo,
    schoolName,
    teacherName,
  ])

  // Check if we can generate
  const canGenerate = useMemo(() => {
    if (selectedType.requiresClass && !selectedClassId) return false
    if (selectedType.requiresStudent && !selectedStudentId) return false
    if (selectedType.requiresDateRange && (!dateFrom || !dateTo)) return false
    if (reportType === 'head-of-department' && !schoolOverview) return false
    return true
  }, [selectedType, selectedClassId, selectedStudentId, dateFrom, dateTo, reportType, schoolOverview])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleDownloadPDF = useCallback(() => {
    // Trigger print dialog which allows saving as PDF
    window.print()
  }, [])

  const handleEmailToParents = useCallback(() => {
    // Placeholder action
    setEmailSent(true)
    setTimeout(() => setEmailSent(false), 3000)
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: REPORT_PRINT_STYLES }} />

      <div className={cn('space-y-6', className)} data-print-hide>
        {/* ── Configuration Panel ────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Report Generator
            </CardTitle>
            <CardDescription>
              Generate and print formatted reports for classes, students, parents, or department heads.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Report type selector */}
            <div className="space-y-2">
              <Label>Report Type</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                {REPORT_TYPES.map((type) => {
                  const Icon = type.icon
                  const isActive = reportType === type.value
                  return (
                    <button
                      key={type.value}
                      onClick={() => {
                        setReportType(type.value)
                        setEmailSent(false)
                      }}
                      className={cn(
                        'flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all duration-200',
                        isActive
                          ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                          : 'border-border/60 hover:border-border hover:bg-muted/30',
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          className={cn(
                            'h-4 w-4',
                            isActive ? 'text-primary' : 'text-muted-foreground',
                          )}
                        />
                        <span
                          className={cn(
                            'text-sm font-medium',
                            isActive ? 'text-foreground' : 'text-muted-foreground',
                          )}
                        >
                          {type.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-snug">
                        {type.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Class selector */}
            {selectedType.requiresClass && (
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  Select Class
                </Label>
                <Select
                  value={selectedClassId}
                  onValueChange={(val) => setSelectedClassId(val as string)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a class..." />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((c) => (
                      <SelectItem key={c.class_id} value={c.class_id}>
                        {c.class_name} ({c.student_count} students)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Student selector */}
            {selectedType.requiresStudent && (
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  Select Student
                </Label>
                <Select
                  value={selectedStudentId}
                  onValueChange={(val) => setSelectedStudentId(val as string)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a student..." />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredStudents.map((s) => (
                      <SelectItem key={s.student_id} value={s.student_id}>
                        {s.student_name} — {percentageToGCSEGradeLabel(Math.round(s.avg_quiz_score))} avg.
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Date range */}
            {selectedType.requiresDateRange && (
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Date Range
                </Label>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-muted-foreground mb-1 block">From</label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="flex h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </div>
                  <span className="text-muted-foreground mt-5">to</span>
                  <div className="flex-1">
                    <label className="text-xs text-muted-foreground mb-1 block">To</label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="flex h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Validation message */}
            {!canGenerate && (
              <div className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-sm text-amber-600 dark:text-amber-400">
                <Clock className="h-4 w-4 shrink-0" />
                <span>
                  {selectedType.requiresClass && !selectedClassId && 'Please select a class. '}
                  {selectedType.requiresStudent && !selectedStudentId && 'Please select a student. '}
                  {selectedType.requiresDateRange && (!dateFrom || !dateTo) && 'Please set a date range. '}
                  {reportType === 'head-of-department' && !schoolOverview && 'School overview data is not available. '}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ── Action Buttons ─────────────────────────────────────────────── */}
        {report && (
          <div className="flex flex-wrap items-center gap-2" data-print-hide>
            <Button onClick={handlePrint} variant="outline" size="sm">
              <Printer className="h-4 w-4" data-icon="inline-start" />
              Print
            </Button>
            <Button onClick={handleDownloadPDF} variant="outline" size="sm">
              <Download className="h-4 w-4" data-icon="inline-start" />
              Download PDF
            </Button>
            {(reportType === 'parents-evening' || reportType === 'progress-report') && (
              <Button
                onClick={handleEmailToParents}
                variant={emailSent ? 'secondary' : 'default'}
                size="sm"
                disabled={emailSent}
              >
                <Mail className="h-4 w-4" data-icon="inline-start" />
                {emailSent ? 'Email Sent (placeholder)' : 'Email to Parents'}
              </Button>
            )}
            <div className="flex-1" />
            <Badge variant="outline">
              {selectedType.label}
            </Badge>
          </div>
        )}

        {/* ── Report Preview ─────────────────────────────────────────────── */}
        {report ? (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div
                ref={previewRef}
                className="bg-white dark:bg-card p-6 sm:p-8 max-w-4xl mx-auto"
              >
                <ReportPreview report={report} />
              </div>
            </CardContent>
          </Card>
        ) : canGenerate ? null : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <FileText className="h-12 w-12 text-muted-foreground/70 mb-4" />
              <p className="text-sm font-medium text-muted-foreground">
                Configure the options above to generate a report
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Select a report type and provide the required information
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
