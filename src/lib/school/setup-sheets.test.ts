/**
 * The Staff and Classes sheets, as a school's spreadsheet writes them and as
 * the operator pastes them: saved as CSV, or copied straight out of Excel,
 * which puts tab-separated text on the clipboard.
 */

import { describe, it, expect } from 'vitest'

import { parseStaffSheet, parseClassesSheet, headerKey } from './setup-sheets'
import { parseStudentsCsv } from './csv-parse'

describe('headers', () => {
  it('match as written, ignoring case, a bracketed hint and a curly apostrophe', () => {
    expect(headerKey('Role (Head of department | Teacher)')).toBe('role')
    expect(headerKey('  Classes taught (class codes, comma-separated) ')).toBe('classes taught')
    expect(headerKey('Teacher’s school email address')).toBe("teacher's school email address")
  })
})

describe('the Staff sheet', () => {
  const HEADER = 'First name,Last name,School email address,Role,Classes taught'

  it('reads each person, mapping the two roles', () => {
    const r = parseStaffSheet(
      [
        HEADER,
        'Nia,Jones,Nia.Jones@X.sch.uk,Head of department,"10A, 11C"',
        'Sam,Smith,sam@x.sch.uk,teacher,',
      ].join('\r\n'),
    )
    expect(r.errors).toEqual([])
    expect(r.rows).toEqual([
      {
        row: 2,
        firstName: 'Nia',
        lastName: 'Jones',
        email: 'nia.jones@x.sch.uk',
        role: 'head_of_department',
        classesTaught: ['10A', '11C'],
      },
      expect.objectContaining({
        row: 3,
        email: 'sam@x.sch.uk',
        role: 'teacher',
        classesTaught: [],
      }),
    ])
  })

  it('reads a range pasted from Excel, tab-separated, with the hinted headers', () => {
    const r = parseStaffSheet(
      [
        'First name\tLast name\tSchool email address\tRole (Head of department | Teacher)\tClasses taught (class codes, comma-separated)',
        'Nia\tJones\tnia@x.sch.uk\tHead of department\t10A, 11C',
      ].join('\n'),
    )
    expect(r.errors).toEqual([])
    expect(r.rows[0]).toMatchObject({ email: 'nia@x.sch.uk', classesTaught: ['10A', '11C'] })
  })

  it('reports, per row, a bad email, a repeat, and a role it does not take', () => {
    const r = parseStaffSheet(
      [
        HEADER,
        'A,One,a@x.sch.uk,Teacher,',
        'B,Two,not-an-email,Teacher,',
        'C,Three,A@x.sch.uk,Teacher,',
        'D,Four,d@x.sch.uk,Administrator,',
      ].join('\n'),
    )
    expect(r.rows.map((x) => x.row)).toEqual([2])
    expect(r.errors.map((e) => e.row)).toEqual([3, 4, 5])
    expect(r.errors[1].message).toContain('row 2')
    expect(r.errors[2].message).toContain('Administrator')
    expect(r.totalRows).toBe(4)
  })

  it('refuses a sheet without a required column, reading no row', () => {
    const r = parseStaffSheet('First name,Last name,Email\nA,B,a@x.sch.uk')
    expect(r.missingHeaders).toEqual(['Role'])
    expect(r.rows).toEqual([])
  })
})

describe('the Classes sheet', () => {
  const HEADER = "Class code,Year group,Teacher's school email address,Exam board"

  it('reads each class, in the spelling the site uses for each board', () => {
    const r = parseClassesSheet(
      [
        HEADER,
        '10A,Year 10,Nia@x.sch.uk,aqa',
        '11C,Year 11,,Pearson Edexcel',
        '9B,,sam@x.sch.uk,OCR',
        '12E,Year 12,sam@x.sch.uk,WJEC Eduqas',
      ].join('\n'),
    )
    expect(r.errors).toEqual([])
    expect(r.rows).toEqual([
      {
        row: 2,
        classCode: '10A',
        yearGroup: 'Year 10',
        teacherEmail: 'nia@x.sch.uk',
        examBoard: 'AQA',
      },
      { row: 3, classCode: '11C', yearGroup: 'Year 11', teacherEmail: null, examBoard: 'Edexcel' },
      { row: 4, classCode: '9B', yearGroup: null, teacherEmail: 'sam@x.sch.uk', examBoard: 'OCR' },
      {
        row: 5,
        classCode: '12E',
        yearGroup: 'Year 12',
        teacherEmail: 'sam@x.sch.uk',
        examBoard: 'Eduqas',
      },
    ])
  })

  it('accepts the curly apostrophe Excel autocorrects into the teacher column', () => {
    const r = parseClassesSheet(
      [
        'Class code,Year group,Teacher’s school email address,Exam board (AQA | Edexcel | OCR | Eduqas)',
        '10A,Year 10,n@x.sch.uk,AQA',
      ].join('\n'),
    )
    expect(r.missingHeaders).toEqual([])
    expect(r.rows[0].teacherEmail).toBe('n@x.sch.uk')
  })

  it('reports a board it does not take and a class listed twice', () => {
    const r = parseClassesSheet(
      [HEADER, '10A,Year 10,,AQA', '10a,Year 10,,AQA', '11C,Year 11,,WJEC'].join('\n'),
    )
    expect(r.rows.map((x) => x.classCode)).toEqual(['10A'])
    expect(r.errors.map((e) => e.row)).toEqual([3, 4])
  })
})

describe('the Pupils sheet, read by the school upload parser', () => {
  it('accepts its headers as the school writes them', () => {
    const r = parseStudentsCsv(
      [
        'First name,Last name,Email address,Year group,Class code',
        'Alex,Morgan,alex@x.sch.uk,Year 10,10A',
      ].join('\n'),
    )
    expect(r.errors).toEqual([])
    expect(r.valid).toHaveLength(1)
  })

  it('and as a range pasted from Excel', () => {
    const r = parseStudentsCsv(
      [
        'First name\tLast name\tEmail address\tYear group\tClass code',
        'Alex\tMorgan\talex@x.sch.uk\tYear 10\t10A',
      ].join('\n'),
    )
    expect(r.errors).toEqual([])
    expect(r.valid[0]).toMatchObject({ email: 'alex@x.sch.uk', classCode: '10A' })
  })
})
