/**
 * Canonical student-import CSV template.
 *
 * The admin page's "Download template" link serves this verbatim. The header
 * row matches `STUDENT_COLUMNS` in `./csv-parse.ts` and the comment lines at
 * the top of the file are `#`-prefixed so the parser ignores them. We ship a
 * two-row example so admins see the expected shape without reading the docs.
 *
 * Keep this pure - no Node APIs, no dynamic imports. Edge-runtime safe.
 */

export const STUDENT_CSV_TEMPLATE_FILENAME = 'students-template.csv'

/**
 * Returns the canonical CSV template string. Lines beginning with `#` are
 * stripped by `parseStudentsCsv` so the admin can leave the notes in or
 * remove them at their discretion.
 */
export function getStudentCsvTemplate(): string {
  const lines = [
    '# English Hub - student bulk-upload template',
    '# Columns: firstName,lastName,email,yearGroup,classCode,role',
    '# - All five columns before "role" are REQUIRED.',
    '# - "role" is optional and defaults to STUDENT. Any other value is rejected.',
    '# - "classCode" must match a class that already exists at your school.',
    '# - Email addresses must be unique across the file.',
    '# - Remove these comment lines or leave them in; the importer ignores any',
    '#   row beginning with "#".',
    'firstName,lastName,email,yearGroup,classCode,role',
    'Alex,Morgan,alex.morgan@example.school.uk,Year 10,10A,STUDENT',
    'Priya,Patel,priya.patel@example.school.uk,Year 11,11C,STUDENT',
  ]
  // Use CRLF so the file opens cleanly in Excel on Windows. The parser
  // handles either style.
  return lines.join('\r\n') + '\r\n'
}
