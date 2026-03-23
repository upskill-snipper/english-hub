'use client'

import { useState, useMemo, useCallback } from 'react'
import { Download, FileSpreadsheet, Printer, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { StudentAnalytics, ClassAnalytics } from '@/lib/types'
import {
  exportClassReport,
  exportStudentReport,
  exportAttendanceData,
  exportGradeData,
  exportForSIMS,
  exportForALPS,
  formatForSIMS,
  formatForALPS,
  buildCsvString,
  generatePreview,
  type ExportType,
  type DateRange,
  type ExportFormat,
  type AttendanceRow,
} from '@/lib/export-utils'

/* ── Types ──────────────────────────────────────────────────────────────────── */

interface ExportDialogProps {
  /** Class analytics for class-level exports */
  classAnalytics?: ClassAnalytics
  /** Students in the class/school */
  students?: StudentAnalytics[]
  /** Single student for individual export */
  student?: StudentAnalytics
  /** Attendance/engagement data rows */
  attendanceRows?: AttendanceRow[]
  /** Target grades mapped by student_id */
  targetGrades?: Map<string, string>
  /** Class ID for attendance exports */
  classId?: string
  /** Custom trigger element */
  trigger?: React.ReactNode
  className?: string
}

const EXPORT_TYPES: { value: ExportType; label: string; description: string }[] = [
  { value: 'class-report', label: 'Class Report', description: 'Full class summary with all student data' },
  { value: 'student-report', label: 'Student Report', description: 'Individual student progress data' },
  { value: 'attendance', label: 'Engagement Data', description: 'Activity, streaks, and engagement levels' },
  { value: 'grades', label: 'Grades & Targets', description: 'Grades with target grades and gaps' },
  { value: 'sims', label: 'SIMS Format', description: 'Compatible with SIMS school management' },
  { value: 'alps', label: 'ALPS Format', description: 'Compatible with ALPS grading system' },
]

const DATE_RANGES: { value: DateRange; label: string }[] = [
  { value: 'this-term', label: 'This Term' },
  { value: 'this-year', label: 'This Academic Year' },
  { value: 'all-time', label: 'All Time' },
]

const FORMATS: { value: ExportFormat; label: string; icon: typeof FileSpreadsheet }[] = [
  { value: 'csv', label: 'CSV (Excel)', icon: FileSpreadsheet },
  { value: 'print', label: 'Print-friendly', icon: Printer },
]

/* ── Component ──────────────────────────────────────────────────────────────── */

export function ExportDialog({
  classAnalytics,
  students,
  student,
  attendanceRows,
  targetGrades,
  classId,
  trigger,
  className,
}: ExportDialogProps) {
  const [open, setOpen] = useState(false)
  const [exportType, setExportType] = useState<ExportType>('class-report')
  const [dateRange, setDateRange] = useState<DateRange>('this-term')
  const [format, setFormat] = useState<ExportFormat>('csv')
  const [showPreview, setShowPreview] = useState(false)

  /** Determine which export types are available given the provided data. */
  const availableTypes = useMemo(() => {
    return EXPORT_TYPES.filter((t) => {
      switch (t.value) {
        case 'class-report':
          return !!classAnalytics && !!students?.length
        case 'student-report':
          return !!student
        case 'attendance':
          return !!attendanceRows?.length
        case 'grades':
          return !!students?.length
        case 'sims':
          return !!students?.length
        case 'alps':
          return !!students?.length
        default:
          return false
      }
    })
  }, [classAnalytics, students, student, attendanceRows])

  /** Build preview CSV content for the current selection. */
  const previewData = useMemo(() => {
    if (!showPreview) return null
    try {
      const csv = buildPreviewCsv(exportType, { classAnalytics, students, student, attendanceRows, targetGrades, classId })
      if (!csv) return null
      return generatePreview(csv, 5)
    } catch {
      return null
    }
  }, [showPreview, exportType, classAnalytics, students, student, attendanceRows, targetGrades, classId])

  /** Handle the export action. */
  const handleExport = useCallback(() => {
    if (format === 'print') {
      handlePrintExport(exportType, { classAnalytics, students, student, attendanceRows, targetGrades, classId })
    } else {
      handleCsvExport(exportType, { classAnalytics, students, student, attendanceRows, targetGrades, classId })
    }
    setOpen(false)
  }, [format, exportType, classAnalytics, students, student, attendanceRows, targetGrades, classId])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          trigger ? (
            <span className={className}>{trigger}</span>
          ) : (
            <Button variant="outline" size="sm" className={className}>
              <Download className="size-4" data-icon="inline-start" />
              Export Data
            </Button>
          )
        }
      />

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Export School Data</DialogTitle>
          <DialogDescription>
            Choose the type of data, date range, and format for your export.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          {/* Export Type */}
          <div className="grid gap-2">
            <Label>Export Type</Label>
            <Select
              value={exportType}
              onValueChange={(val) => {
                setExportType(val as ExportType)
                setShowPreview(false)
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {availableTypes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    <span className="flex flex-col items-start">
                      <span>{t.label}</span>
                      <span className="text-xs text-muted-foreground">{t.description}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          <div className="grid gap-2">
            <Label>Date Range</Label>
            <Select value={dateRange} onValueChange={(val) => setDateRange(val as DateRange)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DATE_RANGES.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Format */}
          <div className="grid gap-2">
            <Label>Format</Label>
            <div className="flex gap-2">
              {FORMATS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFormat(f.value)}
                  className={cn(
                    'flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors',
                    format === f.value
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-border text-muted-foreground hover:bg-accent'
                  )}
                >
                  <f.icon className="size-4" />
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preview Toggle */}
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Eye className="size-4" />
            {showPreview ? 'Hide preview' : 'Preview data before export'}
          </button>

          {/* Preview Table */}
          {showPreview && previewData && (
            <div className="rounded-lg border overflow-x-auto max-h-48">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b bg-muted/50">
                    {previewData.headers.map((h, i) => (
                      <th key={i} className="px-2 py-1.5 text-left font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {previewData.rows.map((row, ri) => (
                    <tr key={ri} className="border-b last:border-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-2 py-1 whitespace-nowrap max-w-32 truncate">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {previewData.rows.length >= 5 && (
                <p className="px-2 py-1 text-xs text-muted-foreground bg-muted/30">
                  Showing first 5 rows...
                </p>
              )}
            </div>
          )}

          {showPreview && !previewData && (
            <p className="text-sm text-muted-foreground">No data available for preview.</p>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={availableTypes.length === 0}>
            <Download className="size-4" data-icon="inline-start" />
            Export
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ── Internal Helpers ────────────────────────────────────────────────────────── */

interface ExportDataSources {
  classAnalytics?: ClassAnalytics
  students?: StudentAnalytics[]
  student?: StudentAnalytics
  attendanceRows?: AttendanceRow[]
  targetGrades?: Map<string, string>
  classId?: string
}

/** Build a CSV string for preview purposes (no download). */
function buildPreviewCsv(type: ExportType, data: ExportDataSources): string | null {
  switch (type) {
    case 'class-report': {
      if (!data.classAnalytics || !data.students) return null
      // Build inline rather than triggering download
      const headers = ['Student Name', 'Email', 'Year Group', 'Avg Score', 'Completion %', 'Trajectory', 'Predicted Grade']
      const rows = data.students.map((s) => [
        s.student_name, s.student_email, s.year_group ?? '',
        String(Math.round(s.avg_quiz_score)), `${Math.round(s.completion_rate)}%`,
        s.trajectory, s.predicted_grade ?? '',
      ])
      return buildCsvString(headers, rows)
    }
    case 'student-report': {
      if (!data.student) return null
      const s = data.student
      const headers = ['Field', 'Value']
      const rows = [
        ['Name', s.student_name],
        ['Score', String(Math.round(s.avg_quiz_score))],
        ['Completion', `${Math.round(s.completion_rate)}%`],
        ['Trajectory', s.trajectory],
        ['Grade', s.predicted_grade ?? ''],
      ]
      return buildCsvString(headers, rows)
    }
    case 'grades': {
      if (!data.students) return null
      const headers = ['Student Name', 'Predicted Grade', 'Avg Score', 'Trajectory']
      const rows = data.students.map((s) => [
        s.student_name, s.predicted_grade ?? '', String(Math.round(s.avg_quiz_score)), s.trajectory,
      ])
      return buildCsvString(headers, rows)
    }
    case 'sims': {
      if (!data.students) return null
      return formatForSIMS(data.students)
    }
    case 'alps': {
      if (!data.students) return null
      return formatForALPS(data.students)
    }
    case 'attendance': {
      if (!data.attendanceRows) return null
      const headers = ['Student Name', 'Last Active', 'Engagement Level']
      const rows = data.attendanceRows.map((r) => [
        r.student_name, r.last_active_at ?? 'Never', r.engagement_level,
      ])
      return buildCsvString(headers, rows)
    }
    default:
      return null
  }
}

/** Trigger CSV download for the selected export type. */
function handleCsvExport(type: ExportType, data: ExportDataSources): void {
  switch (type) {
    case 'class-report':
      if (data.classAnalytics && data.students) {
        exportClassReport(data.classAnalytics, data.students)
      }
      break
    case 'student-report':
      if (data.student) {
        exportStudentReport(data.student)
      }
      break
    case 'attendance':
      if (data.attendanceRows && data.classId) {
        exportAttendanceData(data.attendanceRows, data.classId)
      }
      break
    case 'grades':
      if (data.students) {
        exportGradeData(data.students, data.targetGrades)
      }
      break
    case 'sims':
      if (data.students) {
        exportForSIMS(data.students)
      }
      break
    case 'alps':
      if (data.students) {
        exportForALPS(data.students)
      }
      break
  }
}

/** Open a print-friendly view for the selected export type. */
function handlePrintExport(type: ExportType, data: ExportDataSources): void {
  const csv = buildPreviewCsv(type, data)
  if (!csv) return

  const preview = generatePreview(csv, 1000)
  if (!preview.headers.length) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const tableRows = preview.rows
    .map((row) => `<tr>${row.map((cell) => `<td style="border:1px solid #ddd;padding:6px 10px;font-size:13px">${escapeHtml(cell)}</td>`).join('')}</tr>`)
    .join('')

  const headerRow = preview.headers
    .map((h) => `<th style="border:1px solid #ccc;padding:6px 10px;background:#f5f5f5;font-size:13px;text-align:left">${escapeHtml(h)}</th>`)
    .join('')

  const typeLabel = EXPORT_TYPES.find((t) => t.value === type)?.label ?? type

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${typeLabel} - Export</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { font-size: 18px; margin-bottom: 4px; }
        p { color: #666; font-size: 13px; margin-bottom: 16px; }
        table { border-collapse: collapse; width: 100%; }
        @media print { body { margin: 10px; } }
      </style>
    </head>
    <body>
      <h1>${typeLabel}</h1>
      <p>Exported on ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <table>
        <thead><tr>${headerRow}</tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
      <script>window.onload = function() { window.print(); }</script>
    </body>
    </html>
  `)
  printWindow.document.close()
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
