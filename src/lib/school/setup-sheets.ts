/**
 * The Staff and Classes sheets of the spreadsheet a school returns before it
 * starts, read for the operator's setup page (/admin/schools/[schoolId]).
 *
 * Pure functions: no I/O. The Pupils sheet is read by parseStudentsCsv in
 * ./csv-parse.ts, the parser the school's own upload uses; these two share its
 * tokeniser, so a sheet pasted straight from Excel (tab-separated) or saved
 * as CSV reads the same.
 *
 * The headers, as the school's spreadsheet writes them:
 *   Staff:   First name, Last name, School email address,
 *            Role (Head of department | Teacher),
 *            Classes taught (class codes, comma-separated)
 *   Classes: Class code, Year group, Teacher's school email address,
 *            Exam board (AQA | Edexcel | OCR | Eduqas)
 * A header matches case-insensitively, with a trailing bracketed hint ignored
 * and a curly apostrophe read as a straight one, so "Role (Head of department
 * | Teacher)" and "Role" are the same column. Columns the sheet has that are
 * not listed here are ignored.
 *
 * Every problem is returned per row (header = row 1), never thrown, so the
 * operator sees the whole sheet's faults at once.
 */

import { tokeniseCsv } from '@/lib/school/csv-parse'
import type { InviteRole } from '@/lib/school/invite-staff'

export interface SheetError {
  /** 1-based row in the sheet; the header is row 1. */
  readonly row: number
  readonly field?: string
  /** Who or what the row is about: an email address or a class code, when known. */
  readonly subject?: string
  readonly message: string
}

export interface SheetResult<T> {
  readonly rows: T[]
  readonly errors: SheetError[]
  /** Non-blank data rows read, with or without errors. */
  readonly totalRows: number
  /** Required columns the header does not have. When any are missing, no row is read. */
  readonly missingHeaders: string[]
}

export interface StaffSheetRow {
  readonly row: number
  readonly firstName: string
  readonly lastName: string
  /** Lower case, trimmed. */
  readonly email: string
  readonly role: InviteRole
  /** As listed. Not acted on: each class's teacher comes from the Classes sheet. */
  readonly classesTaught: string[]
}

export const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'Eduqas'] as const
export type ExamBoard = (typeof EXAM_BOARDS)[number]

export interface ClassesSheetRow {
  readonly row: number
  /** As written, trimmed. It becomes the class's `name`. */
  readonly classCode: string
  readonly yearGroup: string | null
  /** Lower case, trimmed; null when the cell is blank. */
  readonly teacherEmail: string | null
  readonly examBoard: ExamBoard
}

/** The headers to show the operator, in the sheet's order. */
export const STAFF_SHEET_HEADERS = [
  'First name',
  'Last name',
  'School email address',
  'Role',
  'Classes taught',
] as const
export const CLASSES_SHEET_HEADERS = [
  'Class code',
  'Year group',
  "Teacher's school email address",
  'Exam board',
] as const
export const PUPILS_SHEET_HEADERS = [
  'First name',
  'Last name',
  'Email address',
  'Year group',
  'Class code',
] as const

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** A header cell in the form it is compared in. */
export function headerKey(cell: string): string {
  return cell
    .replace(/[‘’ʼ]/g, "'")
    .replace(/\s*\([^)]*\)\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

interface ColumnSpec<K extends string> {
  readonly key: K
  /** The header as the school's sheet writes it. */
  readonly label: string
  readonly required: boolean
  /** Every accepted header, already in headerKey form. */
  readonly names: readonly string[]
}

interface ReadSheet<K extends string> {
  readonly columns: Partial<Record<K, number>>
  readonly missing: string[]
  readonly dataRows: Array<{ row: number; cells: string[] }>
  /** The header row's 1-based number, for reporting a missing column. */
  readonly headerRow: number
}

function isBlank(cells: ReadonlyArray<string>): boolean {
  return cells.every((c) => c.trim() === '')
}

/**
 * Find the header (skipping blank lines and `#` comments, as the pupil parser
 * does), map each column, and return the data rows that are not blank.
 */
function readSheet<K extends string>(
  text: string,
  specs: ReadonlyArray<ColumnSpec<K>>,
): ReadSheet<K> | null {
  const rows = tokeniseCsv(text ?? '')
  let headerIdx = 0
  while (
    headerIdx < rows.length &&
    (isBlank(rows[headerIdx]) || rows[headerIdx][0]?.trim().startsWith('#'))
  ) {
    headerIdx++
  }
  if (headerIdx >= rows.length) return null

  const columns: Partial<Record<K, number>> = {}
  rows[headerIdx].forEach((cell, idx) => {
    const key = headerKey(cell)
    const spec = specs.find((s) => s.names.includes(key))
    if (spec && columns[spec.key] === undefined) columns[spec.key] = idx
  })
  const missing = specs
    .filter((s) => s.required && columns[s.key] === undefined)
    .map((s) => s.label)

  const dataRows: Array<{ row: number; cells: string[] }> = []
  for (let i = headerIdx + 1; i < rows.length; i++) {
    if (isBlank(rows[i])) continue
    dataRows.push({ row: i + 1, cells: rows[i] })
  }
  return { columns, missing, dataRows, headerRow: headerIdx + 1 }
}

function cell<K extends string>(
  cells: ReadonlyArray<string>,
  columns: Partial<Record<K, number>>,
  key: K,
): string {
  const idx = columns[key]
  return idx === undefined ? '' : (cells[idx] ?? '').trim()
}

function emptyResult<T>(message: string): SheetResult<T> {
  return { rows: [], errors: [{ row: 1, message }], totalRows: 0, missingHeaders: [] }
}

// ---------------------------------------------------------------------------
// Staff
// ---------------------------------------------------------------------------

type StaffKey = 'firstName' | 'lastName' | 'email' | 'role' | 'classesTaught'

const STAFF_COLUMNS: ReadonlyArray<ColumnSpec<StaffKey>> = [
  {
    key: 'firstName',
    label: 'First name',
    required: true,
    names: ['first name', 'firstname', 'first_name', 'forename', 'given name'],
  },
  {
    key: 'lastName',
    label: 'Last name',
    required: true,
    names: ['last name', 'lastname', 'last_name', 'surname', 'family name'],
  },
  {
    key: 'email',
    label: 'School email address',
    required: true,
    names: ['school email address', 'school email', 'email address', 'email'],
  },
  { key: 'role', label: 'Role', required: true, names: ['role'] },
  {
    key: 'classesTaught',
    label: 'Classes taught',
    required: false,
    names: ['classes taught', 'classes', 'class codes'],
  },
]

/** 'Head of department' or 'Teacher', in any case or spelling of the separators. */
function readRole(raw: string): InviteRole | null {
  const v = raw.toLowerCase().replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  if (v === 'teacher') return 'teacher'
  if (v === 'head of department' || v === 'head of dept' || v === 'hod') {
    return 'head_of_department'
  }
  return null
}

export function parseStaffSheet(text: string): SheetResult<StaffSheetRow> {
  const sheet = readSheet(text, STAFF_COLUMNS)
  if (!sheet) return emptyResult('The sheet is empty: paste it with its header row.')
  if (sheet.missing.length > 0) {
    return {
      rows: [],
      errors: sheet.missing.map((label) => ({
        row: sheet.headerRow,
        field: label,
        message: `The header has no "${label}" column.`,
      })),
      totalRows: sheet.dataRows.length,
      missingHeaders: sheet.missing,
    }
  }

  const rows: StaffSheetRow[] = []
  const errors: SheetError[] = []
  const seen = new Map<string, number>()
  for (const { row, cells } of sheet.dataRows) {
    const firstName = cell(cells, sheet.columns, 'firstName')
    const lastName = cell(cells, sheet.columns, 'lastName')
    const emailRaw = cell(cells, sheet.columns, 'email')
    const email = emailRaw.toLowerCase()
    const roleRaw = cell(cells, sheet.columns, 'role')
    const role = readRole(roleRaw)
    const before = errors.length

    if (!email) {
      errors.push({ row, field: 'School email address', message: 'No school email address.' })
    } else if (!EMAIL_REGEX.test(email)) {
      errors.push({
        row,
        field: 'School email address',
        subject: emailRaw,
        message: `"${emailRaw}" is not a valid email address.`,
      })
    } else if (seen.has(email)) {
      errors.push({
        row,
        field: 'School email address',
        subject: email,
        message: `${email} is also on row ${seen.get(email)}; each person is invited once.`,
      })
    }
    if (!role) {
      errors.push({
        row,
        field: 'Role',
        subject: email || undefined,
        message: roleRaw
          ? `Role "${roleRaw}" is not one this step accepts: use "Head of department" or "Teacher".`
          : 'No role: use "Head of department" or "Teacher".',
      })
    }
    if (errors.length > before || !role) continue

    seen.set(email, row)
    rows.push({
      row,
      firstName,
      lastName,
      email,
      role,
      classesTaught: cell(cells, sheet.columns, 'classesTaught')
        .split(/[,;]/)
        .map((c) => c.trim())
        .filter(Boolean),
    })
  }
  return { rows, errors, totalRows: sheet.dataRows.length, missingHeaders: [] }
}

// ---------------------------------------------------------------------------
// Classes
// ---------------------------------------------------------------------------

type ClassKey = 'classCode' | 'yearGroup' | 'teacherEmail' | 'examBoard'

const CLASS_COLUMNS: ReadonlyArray<ColumnSpec<ClassKey>> = [
  {
    key: 'classCode',
    label: 'Class code',
    required: true,
    names: ['class code', 'classcode', 'class_code', 'class', 'class name'],
  },
  {
    key: 'yearGroup',
    label: 'Year group',
    required: true,
    names: ['year group', 'yeargroup', 'year_group', 'year'],
  },
  {
    key: 'teacherEmail',
    label: "Teacher's school email address",
    required: true,
    names: [
      "teacher's school email address",
      'teachers school email address',
      'teacher school email address',
      "teacher's email address",
      'teacher email address',
      "teacher's email",
      'teacher email',
    ],
  },
  {
    key: 'examBoard',
    label: 'Exam board',
    required: true,
    names: ['exam board', 'examboard', 'exam_board', 'board'],
  },
]

/** The four boards the sheet offers, in the spelling the rest of the site uses. */
function readExamBoard(raw: string): ExamBoard | null {
  const v = raw.toLowerCase().replace(/\s+/g, ' ').trim()
  if (v === 'aqa') return 'AQA'
  if (v === 'edexcel' || v === 'pearson edexcel') return 'Edexcel'
  if (v === 'ocr') return 'OCR'
  if (v === 'eduqas' || v === 'wjec eduqas') return 'Eduqas'
  return null
}

/** The class create route's limit on a class name (src/app/api/school/classes/route.ts). */
const MAX_CLASS_CODE_LENGTH = 100

export function parseClassesSheet(text: string): SheetResult<ClassesSheetRow> {
  const sheet = readSheet(text, CLASS_COLUMNS)
  if (!sheet) return emptyResult('The sheet is empty: paste it with its header row.')
  if (sheet.missing.length > 0) {
    return {
      rows: [],
      errors: sheet.missing.map((label) => ({
        row: sheet.headerRow,
        field: label,
        message: `The header has no "${label}" column.`,
      })),
      totalRows: sheet.dataRows.length,
      missingHeaders: sheet.missing,
    }
  }

  const rows: ClassesSheetRow[] = []
  const errors: SheetError[] = []
  const seen = new Map<string, number>()
  for (const { row, cells } of sheet.dataRows) {
    const classCode = cell(cells, sheet.columns, 'classCode')
    const boardRaw = cell(cells, sheet.columns, 'examBoard')
    const examBoard = readExamBoard(boardRaw)
    const teacherEmail = cell(cells, sheet.columns, 'teacherEmail').toLowerCase() || null
    const yearGroup = cell(cells, sheet.columns, 'yearGroup') || null
    const before = errors.length

    if (!classCode) {
      errors.push({ row, field: 'Class code', message: 'No class code.' })
    } else if (classCode.length > MAX_CLASS_CODE_LENGTH) {
      errors.push({
        row,
        field: 'Class code',
        subject: classCode.slice(0, 40),
        message: `The class code is longer than ${MAX_CLASS_CODE_LENGTH} characters.`,
      })
    } else if (seen.has(classCode.toLowerCase())) {
      errors.push({
        row,
        field: 'Class code',
        subject: classCode,
        message: `Class ${classCode} is also on row ${seen.get(classCode.toLowerCase())}; each class is listed once.`,
      })
    }
    if (!examBoard) {
      errors.push({
        row,
        field: 'Exam board',
        subject: classCode || undefined,
        message: boardRaw
          ? `Exam board "${boardRaw}" is not one this step accepts: use AQA, Edexcel, OCR or Eduqas.`
          : 'No exam board: use AQA, Edexcel, OCR or Eduqas.',
      })
    }
    if (errors.length > before || !examBoard) continue

    seen.set(classCode.toLowerCase(), row)
    rows.push({ row, classCode, yearGroup, teacherEmail, examBoard })
  }
  return { rows, errors, totalRows: sheet.dataRows.length, missingHeaders: [] }
}
