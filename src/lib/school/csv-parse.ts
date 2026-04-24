/**
 * CSV parser for the school admin bulk student upload flow (Wave 5, web-only).
 *
 * Pure function: no I/O, no globals. Consumed by both the `/validate` API route
 * and the web admin preview page so the preview is an exact dry-run of what the
 * server will accept.
 *
 * The parser is tolerant by design:
 *  - accepts UTF-8 BOM at start of file (Excel on Windows writes it)
 *  - accepts CRLF, LF, and bare CR line endings (old Excel / Mac Classic)
 *  - supports RFC 4180 quoted fields with embedded commas and escaped "" quotes
 *  - skips wholly-blank trailing rows (Excel commonly appends one)
 *
 * Validation is deliberately row-by-row so one bad row does not poison the
 * batch. Each error carries `row` (1-based, header = 1) and an optional
 * `field` so the UI can highlight the offending cell. Class membership is
 * validated against the optional `knownClassCodes` Set — callers that already
 * loaded the school's classes pass it in; callers that do not get "unknown
 * class" errors elided at the parse stage and resolved server-side instead.
 *
 * British English in doc comments. Strict TypeScript.
 */

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

/** A parsed, validated student row ready for the commit endpoint. */
export interface StudentRow {
  /** 1-based row number in the original file (header = 1, first data = 2). */
  readonly row: number;
  readonly firstName: string;
  readonly lastName: string;
  /** Normalised: lowercased, trimmed. */
  readonly email: string;
  readonly yearGroup: string;
  readonly classCode: string;
}

/** Error classes surfaced to the admin in the preview table. */
export type ParseErrorCode =
  | 'MISSING_HEADER'
  | 'MISSING_REQUIRED'
  | 'INVALID_EMAIL'
  | 'UNKNOWN_CLASS'
  | 'DUPLICATE_EMAIL_IN_FILE'
  | 'INVALID_ROLE'
  | 'EMPTY_FILE';

export interface ParseError {
  readonly row: number;
  readonly field?: string;
  readonly code: ParseErrorCode;
  readonly message: string;
}

export interface ParseResult {
  readonly valid: StudentRow[];
  readonly errors: ParseError[];
  /** Total non-blank data rows encountered (valid + rows with errors). */
  readonly totalRows: number;
}

export interface ParseOptions {
  /**
   * Optional set of class codes known to exist at the caller's school. When
   * provided, the parser emits UNKNOWN_CLASS errors for rows whose classCode
   * is not in the set. Matching is case-insensitive.
   */
  readonly knownClassCodes?: ReadonlySet<string>;
  /**
   * Optional role column value the caller wishes to enforce. Defaults to
   * 'STUDENT'. Any other value on a row yields INVALID_ROLE so admins cannot
   * accidentally create teacher rows via the student template.
   */
  readonly expectedRole?: 'STUDENT';
}

// ---------------------------------------------------------------------------
// Column contract
// ---------------------------------------------------------------------------

/**
 * Canonical column order in the student template. The parser tolerates any
 * header order as long as every required header is present.
 */
export const STUDENT_COLUMNS = [
  'firstName',
  'lastName',
  'email',
  'yearGroup',
  'classCode',
  'role',
] as const;

type StudentColumn = (typeof STUDENT_COLUMNS)[number];

const REQUIRED_FIELDS: ReadonlyArray<StudentColumn> = [
  'firstName',
  'lastName',
  'email',
  'yearGroup',
  'classCode',
];

/**
 * Header synonyms accepted on import. Keys are lowercased normalised header
 * cells as read from the file; values are the canonical column name we
 * emit. This lets admins paste from a school MIS export without hand-editing
 * the column names to camelCase.
 */
const HEADER_ALIASES: Readonly<Record<string, StudentColumn>> = {
  firstname: 'firstName',
  first_name: 'firstName',
  'first name': 'firstName',
  given_name: 'firstName',
  givenname: 'firstName',
  lastname: 'lastName',
  last_name: 'lastName',
  'last name': 'lastName',
  surname: 'lastName',
  familyname: 'lastName',
  family_name: 'lastName',
  email: 'email',
  'email address': 'email',
  emailaddress: 'email',
  yeargroup: 'yearGroup',
  year_group: 'yearGroup',
  'year group': 'yearGroup',
  year: 'yearGroup',
  classcode: 'classCode',
  class_code: 'classCode',
  'class code': 'classCode',
  class: 'classCode',
  classname: 'classCode',
  class_name: 'classCode',
  role: 'role',
};

// Hard-coded cap mirrored in the API route. Keeps the preview table cheap.
export const MAX_ROWS = 500;

// Email regex: deliberately narrow — we want to catch "bob@" and "bob@foo"
// (no TLD) as invalid so admins notice typos at preview time.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// Tokeniser
// ---------------------------------------------------------------------------

/**
 * Tokenise raw CSV text into rows of string cells. RFC 4180-ish: supports
 * quoted fields ("…"), escaped quotes ("" inside a quoted field), embedded
 * commas and embedded newlines inside quoted fields.
 */
function tokeniseCsv(raw: string): string[][] {
  // Strip UTF-8 BOM if present.
  const stripped = raw.charCodeAt(0) === 0xfeff ? raw.slice(1) : raw;
  if (stripped.length === 0) return [];

  const rows: string[][] = [];
  let cell = '';
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < stripped.length; i++) {
    const ch = stripped[i];
    const next = stripped[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        // Escaped quote: append a literal " and skip the pair.
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      continue;
    }

    if (ch === ',') {
      row.push(cell);
      cell = '';
      continue;
    }

    if (ch === '\n') {
      row.push(cell);
      rows.push(row);
      cell = '';
      row = [];
      continue;
    }

    if (ch === '\r') {
      // Treat CRLF, bare CR identically. If the next char is LF, skip it.
      row.push(cell);
      rows.push(row);
      cell = '';
      row = [];
      if (next === '\n') i++;
      continue;
    }

    cell += ch;
  }

  // Flush the trailing cell / row if the file does not end in a newline.
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

// ---------------------------------------------------------------------------
// Header resolution
// ---------------------------------------------------------------------------

interface HeaderMap {
  /** Index in the row array for each canonical column (undefined = missing). */
  readonly [column: string]: number | undefined;
}

function resolveHeaders(headerRow: ReadonlyArray<string>): {
  map: HeaderMap;
  missing: StudentColumn[];
} {
  const map: Record<string, number | undefined> = {};
  headerRow.forEach((cell, idx) => {
    const key = cell.trim().toLowerCase();
    const canonical = HEADER_ALIASES[key];
    if (canonical && map[canonical] === undefined) {
      map[canonical] = idx;
    }
  });

  const missing: StudentColumn[] = REQUIRED_FIELDS.filter(
    (col) => map[col] === undefined,
  );
  return { map, missing };
}

// ---------------------------------------------------------------------------
// Row validation
// ---------------------------------------------------------------------------

function isBlankRow(cells: ReadonlyArray<string>): boolean {
  return cells.every((c) => c.trim() === '');
}

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

/**
 * Parse and validate a CSV string of students. Never throws on malformed
 * content — every defect is returned as a ParseError so the UI can render
 * per-row indicators and the commit endpoint can refuse the file atomically.
 */
export function parseStudentsCsv(
  content: string,
  options: ParseOptions = {},
): ParseResult {
  const expectedRole = options.expectedRole ?? 'STUDENT';

  if (!content || content.trim().length === 0) {
    return {
      valid: [],
      errors: [
        {
          row: 1,
          code: 'EMPTY_FILE',
          message: 'The file is empty.',
        },
      ],
      totalRows: 0,
    };
  }

  const rows = tokeniseCsv(content);
  if (rows.length === 0) {
    return {
      valid: [],
      errors: [
        { row: 1, code: 'EMPTY_FILE', message: 'The file is empty.' },
      ],
      totalRows: 0,
    };
  }

  // Skip any comment-only rows at the top of the file. The template writes
  // "# …" explanations before the header; admins who leave those in should
  // not get a parser error.
  let headerIdx = 0;
  while (
    headerIdx < rows.length &&
    (isBlankRow(rows[headerIdx]) || rows[headerIdx][0]?.trim().startsWith('#'))
  ) {
    headerIdx++;
  }

  if (headerIdx >= rows.length) {
    return {
      valid: [],
      errors: [
        { row: 1, code: 'EMPTY_FILE', message: 'No header row found.' },
      ],
      totalRows: 0,
    };
  }

  const headerRow = rows[headerIdx];
  const { map, missing } = resolveHeaders(headerRow);

  if (missing.length > 0) {
    return {
      valid: [],
      errors: missing.map((field) => ({
        row: headerIdx + 1,
        field,
        code: 'MISSING_HEADER' as const,
        message: `Missing required header column: ${field}`,
      })),
      totalRows: 0,
    };
  }

  // Lowercase the known class codes once for O(1) membership checks.
  const knownClasses = options.knownClassCodes
    ? new Set(
        Array.from(options.knownClassCodes).map((c) => c.trim().toLowerCase()),
      )
    : null;

  const valid: StudentRow[] = [];
  const errors: ParseError[] = [];
  const seenEmails = new Map<string, number>();
  let totalRows = 0;

  for (let i = headerIdx + 1; i < rows.length; i++) {
    const cells = rows[i];

    // Trailing blank row (Excel artefact) — skip silently.
    if (isBlankRow(cells)) continue;

    totalRows++;

    const oneIndexedRow = i + 1;

    const firstName = (cells[map.firstName as number] ?? '').trim();
    const lastName = (cells[map.lastName as number] ?? '').trim();
    const emailRaw = (cells[map.email as number] ?? '').trim();
    const yearGroup = (cells[map.yearGroup as number] ?? '').trim();
    const classCode = (cells[map.classCode as number] ?? '').trim();
    const roleIdx = map.role;
    const roleRaw =
      roleIdx !== undefined ? (cells[roleIdx] ?? '').trim() : expectedRole;

    const email = emailRaw.toLowerCase();

    let rowHasError = false;

    if (!firstName) {
      errors.push({
        row: oneIndexedRow,
        field: 'firstName',
        code: 'MISSING_REQUIRED',
        message: 'First name is required.',
      });
      rowHasError = true;
    }
    if (!lastName) {
      errors.push({
        row: oneIndexedRow,
        field: 'lastName',
        code: 'MISSING_REQUIRED',
        message: 'Last name is required.',
      });
      rowHasError = true;
    }
    if (!email) {
      errors.push({
        row: oneIndexedRow,
        field: 'email',
        code: 'MISSING_REQUIRED',
        message: 'Email is required.',
      });
      rowHasError = true;
    } else if (!EMAIL_REGEX.test(email)) {
      errors.push({
        row: oneIndexedRow,
        field: 'email',
        code: 'INVALID_EMAIL',
        message: `"${emailRaw}" is not a valid email address.`,
      });
      rowHasError = true;
    } else {
      const existingRow = seenEmails.get(email);
      if (existingRow !== undefined) {
        errors.push({
          row: oneIndexedRow,
          field: 'email',
          code: 'DUPLICATE_EMAIL_IN_FILE',
          message: `Email "${emailRaw}" also appears on row ${existingRow}.`,
        });
        rowHasError = true;
      } else {
        seenEmails.set(email, oneIndexedRow);
      }
    }
    if (!yearGroup) {
      errors.push({
        row: oneIndexedRow,
        field: 'yearGroup',
        code: 'MISSING_REQUIRED',
        message: 'Year group is required.',
      });
      rowHasError = true;
    }
    if (!classCode) {
      errors.push({
        row: oneIndexedRow,
        field: 'classCode',
        code: 'MISSING_REQUIRED',
        message: 'Class code is required.',
      });
      rowHasError = true;
    } else if (knownClasses && !knownClasses.has(classCode.toLowerCase())) {
      errors.push({
        row: oneIndexedRow,
        field: 'classCode',
        code: 'UNKNOWN_CLASS',
        message: `Class "${classCode}" does not exist at this school.`,
      });
      rowHasError = true;
    }

    if (roleRaw && roleRaw.toUpperCase() !== expectedRole) {
      errors.push({
        row: oneIndexedRow,
        field: 'role',
        code: 'INVALID_ROLE',
        message: `Role must be ${expectedRole}; got "${roleRaw}".`,
      });
      rowHasError = true;
    }

    if (!rowHasError) {
      valid.push({
        row: oneIndexedRow,
        firstName,
        lastName,
        email,
        yearGroup,
        classCode,
      });
    }
  }

  return { valid, errors, totalRows };
}

/**
 * Serialise a list of parse errors into a CSV file admins can download and
 * hand-correct. The first column is the 1-based source row so they can find
 * the offending line in their spreadsheet.
 */
export function errorsToCsv(errors: ReadonlyArray<ParseError>): string {
  const header = 'row,field,code,message\n';
  const body = errors
    .map((e) => {
      const field = e.field ?? '';
      const msg = e.message.replace(/"/g, '""');
      return `${e.row},${field},${e.code},"${msg}"`;
    })
    .join('\n');
  return `${header}${body}\n`;
}
