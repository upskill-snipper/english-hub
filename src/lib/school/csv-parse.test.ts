/**
 * Unit tests for the school bulk-upload CSV parser.
 *
 * 12+ cases covering: happy path, UTF-8 BOM, quoted commas, missing required
 * fields, bad email format, unknown class, Excel CRLF line endings, bare-CR
 * Mac-Classic line endings, unicode names, trailing blank rows, comment
 * lines, header synonyms, duplicate emails in the file, empty files, invalid
 * role, and the template round-trip.
 */

import { describe, it, expect } from 'vitest';

import {
  parseStudentsCsv,
  errorsToCsv,
  STUDENT_COLUMNS,
} from './csv-parse';
import { getStudentCsvTemplate } from './csv-template';

const HEADER = 'firstName,lastName,email,yearGroup,classCode';

describe('parseStudentsCsv', () => {
  it('parses the happy path with all fields valid', () => {
    const csv = [
      HEADER,
      'Alex,Morgan,alex@example.com,Year 10,10A',
      'Priya,Patel,priya@example.com,Year 11,11C',
    ].join('\n');

    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.totalRows).toBe(2);
    expect(result.valid).toEqual([
      {
        row: 2,
        firstName: 'Alex',
        lastName: 'Morgan',
        email: 'alex@example.com',
        yearGroup: 'Year 10',
        classCode: '10A',
      },
      {
        row: 3,
        firstName: 'Priya',
        lastName: 'Patel',
        email: 'priya@example.com',
        yearGroup: 'Year 11',
        classCode: '11C',
      },
    ]);
  });

  it('strips the UTF-8 BOM from the start of the file', () => {
    const bom = '\uFEFF';
    const csv = bom + HEADER + '\n' + 'Sam,Lee,sam@example.com,Year 9,9B';
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid).toHaveLength(1);
    expect(result.valid[0].firstName).toBe('Sam');
  });

  it('handles quoted commas and escaped double quotes inside cells', () => {
    const csv = [
      HEADER,
      '"Smith, Jr","O""Brien",smith@example.com,Year 10,10A',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid[0].firstName).toBe('Smith, Jr');
    expect(result.valid[0].lastName).toBe('O"Brien');
  });

  it('emits MISSING_REQUIRED for every empty required cell on a partial row', () => {
    // A row where some required cells are present and others are missing
    // must emit a MISSING_REQUIRED error for each empty required field.
    // Wholly-empty rows (commas only) are handled by the trailing-blank-row
    // test below — they are silently skipped as an Excel artefact.
    const csv = [HEADER, 'Alex,,alex@example.com,,'].join('\n');
    const result = parseStudentsCsv(csv);
    const fields = result.errors.map((e) => e.field);
    expect(fields).toEqual(
      expect.arrayContaining(['lastName', 'yearGroup', 'classCode']),
    );
    expect(result.valid).toEqual([]);
  });

  it('silently skips a wholly-blank row (commas only) as an Excel artefact', () => {
    // Excel frequently appends one or more empty trailing rows when a
    // workbook is saved as CSV. Those rows contain no user intent and
    // must not be surfaced as errors.
    const csv = [HEADER, 'Alex,Morgan,alex@example.com,Year 10,10A', ',,,,'].join(
      '\n',
    );
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid).toHaveLength(1);
    expect(result.totalRows).toBe(1);
  });

  it('flags invalid email formats with INVALID_EMAIL', () => {
    const csv = [HEADER, 'Bob,Jones,not-an-email,Year 10,10A'].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.valid).toEqual([]);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].code).toBe('INVALID_EMAIL');
    expect(result.errors[0].field).toBe('email');
  });

  it('flags unknown classes when knownClassCodes is supplied', () => {
    const csv = [
      HEADER,
      'Bob,Jones,bob@example.com,Year 10,99Z',
      'Mia,Khan,mia@example.com,Year 10,10A',
    ].join('\n');
    const result = parseStudentsCsv(csv, {
      knownClassCodes: new Set(['10A', '10B']),
    });
    expect(result.valid).toHaveLength(1);
    expect(result.valid[0].email).toBe('mia@example.com');
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].code).toBe('UNKNOWN_CLASS');
    expect(result.errors[0].field).toBe('classCode');
  });

  it('accepts CRLF (Excel on Windows) line endings', () => {
    const csv =
      HEADER + '\r\n' + 'Alex,Morgan,alex@example.com,Year 10,10A\r\n';
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid).toHaveLength(1);
  });

  it('accepts bare CR (Mac Classic) line endings', () => {
    const csv = HEADER + '\r' + 'Alex,Morgan,alex@example.com,Year 10,10A';
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid).toHaveLength(1);
  });

  it('preserves unicode names including accented characters and CJK', () => {
    const csv = [
      HEADER,
      'Zoë,Ångström,zoe@example.com,Year 10,10A',
      '小明,李,xiaoming@example.com,Year 11,11A',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid[0].firstName).toBe('Zoë');
    expect(result.valid[0].lastName).toBe('Ångström');
    expect(result.valid[1].firstName).toBe('小明');
  });

  it('silently skips trailing blank rows', () => {
    const csv = [
      HEADER,
      'Alex,Morgan,alex@example.com,Year 10,10A',
      '',
      '',
      ',,,,,',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    // The wholly-blank rows are skipped; the ",,,,," row has empty required
    // fields but is treated as blank because every cell is empty.
    expect(result.valid).toHaveLength(1);
    expect(result.errors).toEqual([]);
  });

  it('returns an EMPTY_FILE error when the content is empty or whitespace', () => {
    expect(parseStudentsCsv('').errors[0]?.code).toBe('EMPTY_FILE');
    expect(parseStudentsCsv('   \n  \n ').errors[0]?.code).toBe('EMPTY_FILE');
  });

  it('accepts header synonyms like "first_name" and "Email Address"', () => {
    const csv = [
      'First_Name,Last Name,Email Address,Year,Class Code',
      'Alex,Morgan,alex@example.com,Year 10,10A',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid[0].firstName).toBe('Alex');
    expect(result.valid[0].yearGroup).toBe('Year 10');
  });

  it('skips comment lines at the top of the file', () => {
    const csv = [
      '# English Hub student import',
      '# - remember to save as CSV',
      '',
      HEADER,
      'Alex,Morgan,alex@example.com,Year 10,10A',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.errors).toEqual([]);
    expect(result.valid).toHaveLength(1);
  });

  it('flags duplicate emails within a single file', () => {
    const csv = [
      HEADER,
      'Alex,Morgan,alex@example.com,Year 10,10A',
      'Alexa,Morgan,ALEX@EXAMPLE.COM,Year 10,10B',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.valid).toHaveLength(1);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].code).toBe('DUPLICATE_EMAIL_IN_FILE');
  });

  it('flags any role other than STUDENT with INVALID_ROLE', () => {
    const csv = [
      'firstName,lastName,email,yearGroup,classCode,role',
      'Alex,Morgan,alex@example.com,Year 10,10A,TEACHER',
    ].join('\n');
    const result = parseStudentsCsv(csv);
    expect(result.valid).toEqual([]);
    expect(result.errors[0]?.code).toBe('INVALID_ROLE');
  });

  it('emits MISSING_HEADER errors when required columns are absent', () => {
    const csv = ['firstName,lastName,email', 'Alex,Morgan,alex@example.com'].join(
      '\n',
    );
    const result = parseStudentsCsv(csv);
    const codes = result.errors.map((e) => e.code);
    expect(codes).toEqual(
      expect.arrayContaining(['MISSING_HEADER']),
    );
    expect(result.valid).toEqual([]);
  });

  it('round-trips the canonical template without errors', () => {
    const template = getStudentCsvTemplate();
    const result = parseStudentsCsv(template);
    expect(result.errors).toEqual([]);
    expect(result.valid).toHaveLength(2);
    expect(result.valid.map((r) => r.email)).toEqual([
      'alex.morgan@example.school.uk',
      'priya.patel@example.school.uk',
    ]);
  });

  it('exposes the canonical column order for the template generator', () => {
    expect(STUDENT_COLUMNS).toEqual([
      'firstName',
      'lastName',
      'email',
      'yearGroup',
      'classCode',
      'role',
    ]);
  });
});

describe('errorsToCsv', () => {
  it('serialises errors with escaped quotes and a fixed column order', () => {
    const csv = errorsToCsv([
      {
        row: 2,
        field: 'email',
        code: 'INVALID_EMAIL',
        message: 'He said "no"',
      },
      { row: 3, code: 'UNKNOWN_CLASS', message: 'Missing class' },
    ]);
    expect(csv.split('\n')[0]).toBe('row,field,code,message');
    expect(csv).toContain('"He said ""no"""');
    expect(csv).toContain('3,,UNKNOWN_CLASS,"Missing class"');
  });
});
