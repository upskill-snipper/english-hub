'use client'

import { useState, useCallback, useRef } from 'react'
import {
  Upload,
  FileSpreadsheet,
  Download,
  CheckCircle,
  AlertCircle,
  Users,
  GraduationCap,
  Loader2,
  X,
  Info,
  ArrowRight,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DownloadMenu } from '@/components/DownloadMenu'
import { useT } from '@/lib/i18n/use-t'

// ── Types ────────────────────────────────────────────────────────────────────

type UserType = 'students' | 'teachers'

type ParsedRow = Record<string, string>

interface ValidationError {
  row: number
  field: string
  message: string
}

interface ImportResult {
  created: number
  errors: Array<{ row: number; email: string; reason: string }>
  users: Array<{
    name: string
    email: string
    password: string
    role: string
    extra: string
  }>
}

// ── Constants ────────────────────────────────────────────────────────────────

const STUDENT_COLUMNS = ['first_name', 'last_name', 'email', 'year_group', 'class_name']
const TEACHER_COLUMNS = ['first_name', 'last_name', 'email', 'job_title', 'classes']

const REQUIRED_STUDENT_FIELDS = ['first_name', 'last_name', 'email']
const REQUIRED_TEACHER_FIELDS = ['first_name', 'last_name', 'email']

// ── CSV helpers ───────────────────────────────────────────────────────────────

function generateCSV(columns: string[]): string {
  return columns.join(',') + '\n'
}

function downloadCSV(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function parseCSVText(text: string): ParsedRow[] {
  const lines = text.trim().split(/\r?\n/)
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map((h) => h.trim().toLowerCase().replace(/['"]/g, ''))
  const rows: ParsedRow[] = []
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map((v) => v.trim().replace(/^["']|["']$/g, ''))
    if (values.every((v) => v === '')) continue
    const row: ParsedRow = {}
    headers.forEach((h, idx) => {
      row[h] = values[idx] ?? ''
    })
    rows.push(row)
  }
  return rows
}

function validateRows(rows: ParsedRow[], requiredFields: string[]): ValidationError[] {
  const errors: ValidationError[] = []
  rows.forEach((row, idx) => {
    requiredFields.forEach((field) => {
      if (!row[field] || row[field].trim() === '') {
        errors.push({ row: idx + 2, field, message: `Missing ${field}` })
      }
    })
    if (row.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
      errors.push({ row: idx + 2, field: 'email', message: 'Invalid email format' })
    }
  })
  return errors
}

// ── Sub-components ────────────────────────────────────────────────────────────

function TabButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ElementType
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200',
        active
          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/30'
          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800',
      ].join(' ')}
    >
      <Icon className="size-4 shrink-0" />
      {label}
    </button>
  )
}

function PreviewTable({
  rows,
  columns,
  validationErrors,
}: {
  rows: ParsedRow[]
  columns: string[]
  validationErrors: ValidationError[]
}) {
  const tx = useT()
  const errorRows = new Set(validationErrors.map((e) => e.row))

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900">
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 w-10">
              #
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500"
              >
                {col.replace(/_/g, ' ')}
              </th>
            ))}
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 w-10">
              {tx('school.b15.import.preview_col_status')}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 5).map((row, idx) => {
            const rowNum = idx + 2
            const hasError = errorRows.has(rowNum)
            const rowErrors = validationErrors.filter((e) => e.row === rowNum)
            return (
              <tr
                key={idx}
                className={[
                  'border-b border-zinc-800/60 last:border-0 transition-colors',
                  hasError ? 'bg-red-950/30' : 'hover:bg-zinc-800/30',
                ].join(' ')}
              >
                <td className="px-3 py-2.5 text-zinc-500 tabular-nums">{rowNum}</td>
                {columns.map((col) => (
                  <td
                    key={col}
                    className={[
                      'px-3 py-2.5',
                      hasError && rowErrors.some((e) => e.field === col)
                        ? 'text-red-400 font-medium'
                        : 'text-zinc-300',
                    ].join(' ')}
                  >
                    {row[col] || (
                      <span className="text-red-500 italic text-xs">
                        {tx('school.b15.import.cell_missing')}
                      </span>
                    )}
                  </td>
                ))}
                <td className="px-3 py-2.5">
                  {hasError ? (
                    <AlertCircle className="size-4 text-red-400" />
                  ) : (
                    <CheckCircle className="size-4 text-emerald-500" />
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function ResultsTable({ users }: { users: ImportResult['users'] }) {
  const tx = useT()
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900">
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import.res_col_name')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import.res_col_email')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import.res_col_role_class')}
            </th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {tx('school.b15.import.res_col_temp_pw')}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 10).map((user, idx) => (
            <tr
              key={idx}
              className="border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/30"
            >
              <td className="px-3 py-2.5 text-zinc-200 font-medium">{user.name}</td>
              <td className="px-3 py-2.5 text-zinc-400">{user.email}</td>
              <td className="px-3 py-2.5 text-zinc-400">{user.extra}</td>
              <td className="px-3 py-2.5">
                <code className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-clay-600 font-mono">
                  {user.password}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length > 10 && (
        <div className="px-4 py-2.5 text-center text-xs text-zinc-500 border-t border-zinc-800">
          {tx('school.b15.import.showing_n_of').replace('{count}', String(users.length))}
        </div>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ImportUsersPage() {
  const tx = useT()
  const [userType, setUserType] = useState<UserType>('students')
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [parsedRows, setParsedRows] = useState<ParsedRow[]>([])
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
  const [step, setStep] = useState<'upload' | 'preview' | 'importing' | 'done'>('upload')
  const [importProgress, setImportProgress] = useState(0)
  const [importResult, setImportResult] = useState<ImportResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const columns = userType === 'students' ? STUDENT_COLUMNS : TEACHER_COLUMNS
  const requiredFields = userType === 'students' ? REQUIRED_STUDENT_FIELDS : REQUIRED_TEACHER_FIELDS

  // ── Reset when switching tabs ──────────────────────────────────────────────

  function handleTabSwitch(type: UserType) {
    setUserType(type)
    setFile(null)
    setParsedRows([])
    setValidationErrors([])
    setStep('upload')
    setImportProgress(0)
    setImportResult(null)
  }

  // ── Template downloads ─────────────────────────────────────────────────────

  function downloadStudentTemplate() {
    const content =
      generateCSV(STUDENT_COLUMNS) +
      'Jane,Smith,jane.smith@example.com,Year 9,9A\n' +
      'Tom,Jones,tom.jones@example.com,Year 10,10B\n'
    downloadCSV('student_import_template.csv', content)
  }

  function downloadTeacherTemplate() {
    const content =
      generateCSV(TEACHER_COLUMNS) +
      'Sarah,Williams,s.williams@school.edu,Head of English,10A 10B 11A\n' +
      'Mark,Brown,m.brown@school.edu,English Teacher,9C 9D\n'
    downloadCSV('teacher_import_template.csv', content)
  }

  // ── File handling ─────────────────────────────────────────────────────────

  const processFile = useCallback(
    async (f: File) => {
      setFile(f)
      const text = await f.text()
      const rows = parseCSVText(text)
      const errors = validateRows(rows, requiredFields)
      setParsedRows(rows)
      setValidationErrors(errors)
      setStep('preview')
    },
    [requiredFields],
  )

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const dropped = e.dataTransfer.files[0]
      if (dropped) processFile(dropped)
    },
    [processFile],
  )

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0]
      if (selected) processFile(selected)
    },
    [processFile],
  )

  function clearFile() {
    setFile(null)
    setParsedRows([])
    setValidationErrors([])
    setStep('upload')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // ── Import ────────────────────────────────────────────────────────────────

  async function handleImport() {
    if (!file || parsedRows.length === 0) return
    setStep('importing')
    setImportProgress(0)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('userType', userType)

    // Simulate progress while the request is in flight
    const interval = setInterval(() => {
      setImportProgress((prev) => {
        if (prev >= 85) {
          clearInterval(interval)
          return prev
        }
        return prev + Math.random() * 12
      })
    }, 400)

    try {
      const res = await fetch('/api/school/import', {
        method: 'POST',
        body: formData,
      })
      clearInterval(interval)
      setImportProgress(100)

      if (!res.ok) throw new Error(await res.text())

      const data: ImportResult = await res.json()
      setImportResult(data)
      setStep('done')
    } catch {
      clearInterval(interval)
      // On error keep result null and go back to preview with progress reset
      setImportProgress(0)
      setStep('preview')
    }
  }

  // ── Download results ───────────────────────────────────────────────────────

  function downloadLoginDetails(format: 'excel' | 'pdf') {
    const url =
      format === 'excel'
        ? '/api/school/export/logins?format=xlsx'
        : '/api/school/export/logins?format=pdf'
    window.open(url, '_blank')
  }

  // ── Render ────────────────────────────────────────────────────────────────

  const validRowCount = parsedRows.length - new Set(validationErrors.map((e) => e.row)).size

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="space-y-8">
        {/* ── Header ── */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            {tx('school.b15.import.title')}
          </h1>
          <p className="mt-2 text-zinc-400">{tx('school.b15.import.subtitle')}</p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-2 rounded-xl bg-zinc-900 p-1.5 w-fit">
          <TabButton
            active={userType === 'students'}
            onClick={() => handleTabSwitch('students')}
            icon={GraduationCap}
            label={tx('school.b15.import.tab_students')}
          />
          <TabButton
            active={userType === 'teachers'}
            onClick={() => handleTabSwitch('teachers')}
            icon={Users}
            label={tx('school.b15.import.tab_teachers')}
          />
        </div>

        {/* ── Template download section ── */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
              <FileSpreadsheet className="size-4 text-indigo-400" />
              {tx('school.b15.import.step1_title')}
            </CardTitle>
            <CardDescription className="text-zinc-400">
              {userType === 'students'
                ? tx('school.b15.import.step1_desc_students')
                : tx('school.b15.import.step1_desc_teachers')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {userType === 'students' ? (
                <Button variant="outline" onClick={downloadStudentTemplate} className="gap-2">
                  <Download className="size-4" />
                  {tx('school.b15.import.btn_student_template')}
                </Button>
              ) : (
                <Button variant="outline" onClick={downloadTeacherTemplate} className="gap-2">
                  <Download className="size-4" />
                  {tx('school.b15.import.btn_teacher_template')}
                </Button>
              )}
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {tx('school.b15.import.required_cols')}
              </p>
              <div className="flex flex-wrap gap-2">
                {columns.map((col) => (
                  <Badge
                    key={col}
                    variant="secondary"
                    className="font-mono text-xs bg-zinc-800 text-zinc-300 border-zinc-700"
                  >
                    {col}
                  </Badge>
                ))}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                <li className="flex items-start gap-1.5">
                  <span className="mt-0.5 text-indigo-400">*</span>
                  <span>
                    <strong className="text-zinc-300">first_name</strong>,{' '}
                    <strong className="text-zinc-300">last_name</strong>, and{' '}
                    <strong className="text-zinc-300">email</strong> are required. Other fields are
                    optional but recommended.
                  </span>
                </li>
                {userType === 'students' && (
                  <li className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-indigo-400">*</span>
                    <span>
                      <strong className="text-zinc-300">year_group</strong> examples: Year 7, Year
                      10, KS3. <strong className="text-zinc-300">class_name</strong> examples: 10A,
                      10B.
                    </span>
                  </li>
                )}
                {userType === 'teachers' && (
                  <li className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-indigo-400">*</span>
                    <span>
                      For <strong className="text-zinc-300">classes</strong>, list class names
                      separated by spaces or commas (e.g.{' '}
                      <code className="text-clay-600">10A 10B 11C</code>).
                    </span>
                  </li>
                )}
                <li className="flex items-start gap-1.5">
                  <span className="mt-0.5 text-indigo-400">*</span>
                  <span>
                    Save as <strong className="text-zinc-300">.csv</strong> or{' '}
                    <strong className="text-zinc-300">.xlsx</strong> before uploading.
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* ── Upload section ── */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
              <Upload className="size-4 text-indigo-400" />
              {tx('school.b15.import.step2_title')}
            </CardTitle>
            <CardDescription className="text-zinc-400">
              {tx('school.b15.import.step2_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Drop zone */}
            {step === 'upload' && (
              <>
                <div
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={[
                    'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-8 py-14 text-center transition-all duration-200',
                    isDragging
                      ? 'border-indigo-500 bg-indigo-950/30 scale-[1.01]'
                      : 'border-zinc-700 bg-zinc-950/40 hover:border-indigo-600 hover:bg-zinc-800/30',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'flex size-14 items-center justify-center rounded-full transition-colors',
                      isDragging ? 'bg-indigo-600/20' : 'bg-zinc-800',
                    ].join(' ')}
                  >
                    <Upload
                      className={[
                        'size-6 transition-colors',
                        isDragging ? 'text-indigo-400' : 'text-zinc-500',
                      ].join(' ')}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-200">
                      {isDragging
                        ? tx('school.b15.import.drop_active')
                        : tx('school.b15.import.drop_heading')}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      {tx('school.b15.import.drop_or')}{' '}
                      <span className="text-indigo-400 underline underline-offset-2">
                        {tx('school.b15.import.drop_browse')}
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-zinc-600">{tx('school.b15.import.drop_hint')}</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,.xlsx"
                  className="hidden"
                  onChange={onFileChange}
                />
              </>
            )}

            {/* Preview step */}
            {(step === 'preview' || step === 'importing') && file && parsedRows.length > 0 && (
              <div className="space-y-4">
                {/* File info bar */}
                <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="size-5 text-indigo-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{file.name}</p>
                      <p className="text-xs text-zinc-500">
                        {parsedRows.length}{' '}
                        {parsedRows.length === 1
                          ? tx('school.b15.import.rows_detected_one')
                          : tx('school.b15.import.rows_detected_many')}
                      </p>
                    </div>
                  </div>
                  {step === 'preview' && (
                    <button
                      onClick={clearFile}
                      className="rounded-md p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition-colors"
                      aria-label="Remove file"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                </div>

                {/* Validation summary */}
                {validationErrors.length > 0 && (
                  <div className="flex items-start gap-2.5 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm">
                    <AlertCircle className="size-4 mt-0.5 shrink-0 text-red-400" />
                    <div className="text-red-300">
                      <span className="font-semibold">
                        {new Set(validationErrors.map((e) => e.row)).size !== 1
                          ? tx('school.b15.import.validation_error_bar_plural').replace(
                              '{count}',
                              String(new Set(validationErrors.map((e) => e.row)).size),
                            )
                          : tx('school.b15.import.validation_error_bar').replace(
                              '{count}',
                              String(new Set(validationErrors.map((e) => e.row)).size),
                            )}
                      </span>{' '}
                      {tx('school.b15.import.rows_skipped')}
                    </div>
                  </div>
                )}
                {validationErrors.length === 0 && (
                  <div className="flex items-center gap-2.5 rounded-lg border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300">
                    <CheckCircle className="size-4 shrink-0" />
                    {tx('school.b15.import.all_valid').replace(
                      '{count}',
                      String(parsedRows.length),
                    )}
                  </div>
                )}

                {/* Table preview (first 5 rows) */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {tx('school.b15.import.preview_label')}
                  </p>
                  <PreviewTable
                    rows={parsedRows}
                    columns={columns}
                    validationErrors={validationErrors}
                  />
                  {parsedRows.length > 5 && (
                    <p className="mt-2 text-xs text-zinc-600 text-center">
                      {tx('school.b15.import.more_rows').replace(
                        '{count}',
                        String(parsedRows.length - 5),
                      )}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Import progress */}
            {step === 'importing' && (
              <div className="space-y-3 rounded-lg border border-zinc-800 bg-zinc-950/50 p-5">
                <div className="flex items-center gap-3">
                  <Loader2 className="size-5 animate-spin text-indigo-400 shrink-0" />
                  <span className="text-sm font-medium text-zinc-200">
                    {tx('school.b15.import.creating')}
                  </span>
                  <span className="ml-auto text-sm tabular-nums text-zinc-500">
                    {Math.round(importProgress)}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all duration-300"
                    style={{ width: `${importProgress}%` }}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ── Import button ── */}
        {step === 'preview' && parsedRows.length > 0 && (
          <div className="flex items-center gap-4">
            <Button
              onClick={handleImport}
              disabled={validRowCount === 0}
              size="lg"
              className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40 disabled:opacity-40"
            >
              <Users className="size-4" />
              {userType === 'students'
                ? validRowCount !== 1
                  ? tx('school.b15.import.btn_import_students_plural').replace(
                      '{count}',
                      String(validRowCount),
                    )
                  : tx('school.b15.import.btn_import_students').replace(
                      '{count}',
                      String(validRowCount),
                    )
                : validRowCount !== 1
                  ? tx('school.b15.import.btn_import_teachers_plural').replace(
                      '{count}',
                      String(validRowCount),
                    )
                  : tx('school.b15.import.btn_import_teachers').replace(
                      '{count}',
                      String(validRowCount),
                    )}
            </Button>
            {validationErrors.length > 0 && (
              <p className="text-sm text-zinc-500">
                {new Set(validationErrors.map((e) => e.row)).size !== 1
                  ? tx('school.b15.import.skip_warning_many').replace(
                      '{count}',
                      String(new Set(validationErrors.map((e) => e.row)).size),
                    )
                  : tx('school.b15.import.skip_warning_one').replace(
                      '{count}',
                      String(new Set(validationErrors.map((e) => e.row)).size),
                    )}
              </p>
            )}
          </div>
        )}

        {/* ── Results section ── */}
        {step === 'done' && importResult && (
          <div className="space-y-5">
            {/* Success / error summary */}
            <Card className="border-emerald-900/50 bg-emerald-950/20">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-8 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-xl font-bold text-emerald-300">
                      {importResult.created !== 1
                        ? tx('school.b15.import.success_created_many').replace(
                            '{count}',
                            String(importResult.created),
                          )
                        : tx('school.b15.import.success_created_one').replace(
                            '{count}',
                            String(importResult.created),
                          )}
                    </p>
                    {importResult.errors.length > 0 && (
                      <p className="text-sm text-zinc-400 mt-0.5">
                        {importResult.errors.length !== 1
                          ? tx('school.b15.import.error_rows_skipped_many').replace(
                              '{count}',
                              String(importResult.errors.length),
                            )
                          : tx('school.b15.import.error_rows_skipped_one').replace(
                              '{count}',
                              String(importResult.errors.length),
                            )}
                      </p>
                    )}
                  </div>
                </div>

                {/* Error details */}
                {importResult.errors.length > 0 && (
                  <div className="rounded-lg border border-red-900/40 bg-red-950/20 p-4 space-y-2">
                    <p className="text-sm font-semibold text-red-300">
                      {importResult.errors.length !== 1
                        ? tx('school.b15.import.errors_section_many').replace(
                            '{count}',
                            String(importResult.errors.length),
                          )
                        : tx('school.b15.import.errors_section_one').replace(
                            '{count}',
                            String(importResult.errors.length),
                          )}
                    </p>
                    <ul className="space-y-1">
                      {importResult.errors.map((err, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                          <AlertCircle className="size-3.5 mt-0.5 shrink-0 text-red-400" />
                          <span>
                            Row {err.row}
                            {err.email ? ` (${err.email})` : ''} — {err.reason}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Download login details */}
            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
                  <Download className="size-4 text-indigo-400" />
                  {tx('school.b15.import.download_login_title')}
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  {tx('school.b15.import.download_login_desc').replace('{userType}', userType)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <DownloadMenu
                  size="lg"
                  label={tx('school.b15.import.download_btn')}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40"
                  options={[
                    {
                      label: tx('school.b15.import.download_excel'),
                      format: 'csv',
                      onClick: () => downloadLoginDetails('excel'),
                    },
                    {
                      label: tx('school.b15.import.download_pdf'),
                      format: 'pdf',
                      onClick: () => downloadLoginDetails('pdf'),
                    },
                  ]}
                />
              </CardContent>
            </Card>

            {/* Table preview of created users */}
            {importResult.users.length > 0 && (
              <Card className="border-zinc-800 bg-zinc-900">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-zinc-100">
                    {tx('school.b15.import.created_accounts_title')}
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    {tx('school.b15.import.created_accounts_desc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResultsTable users={importResult.users} />
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* ── Important notes box ── */}
        <Card className="border-amber-900/40 bg-amber-950/10">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-start gap-3">
              <Info className="size-5 shrink-0 mt-0.5 text-clay-600" />
              <div className="space-y-1.5">
                <p className="font-semibold text-amber-700">
                  {tx('school.b15.import.important_title')}
                </p>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-amber-500" />
                    {tx('school.b15.import.important_pw_note').replace('{userType}', userType)}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-amber-500" />
                    {userType === 'students'
                      ? tx('school.b15.import.important_change_students')
                      : tx('school.b15.import.important_change_teachers')}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── What happens next? ── */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
              <ArrowRight className="size-4 text-indigo-400" />
              {tx('school.b15.import.what_next_title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {(userType === 'students'
                ? [
                    tx('school.b15.import.next_students_1'),
                    tx('school.b15.import.next_students_2'),
                    tx('school.b15.import.next_students_3'),
                    tx('school.b15.import.next_students_4'),
                  ]
                : [
                    tx('school.b15.import.next_teachers_1'),
                    tx('school.b15.import.next_teachers_2'),
                    tx('school.b15.import.next_teachers_3'),
                    tx('school.b15.import.next_teachers_4'),
                  ]
              ).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                  <CheckCircle className="size-4 mt-0.5 shrink-0 text-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
