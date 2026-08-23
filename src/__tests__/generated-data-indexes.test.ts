/**
 * Drift guards for the generated listing indexes.
 *
 * DEFECT CLASS THIS CATCHES (Aug 2026 performance remediation): five browse
 * surfaces stopped importing their full dataset and now render from a small
 * GENERATED index, with the heavy content fetched on demand. That is only safe
 * while the index and the source data agree. If they drift, nothing crashes -
 * the app quietly shows a wrong card count, a stale slide outline, a student row
 * with old figures, or a paper card that will not open. Silent wrong content is
 * exactly the failure mode this product cannot ship, so the agreement is
 * asserted here rather than left to whoever remembers to regenerate.
 *
 * The course index is deliberately not covered: `verifyCourseIndex()` already
 * guards it from the server render of /courses in development, and re-checking
 * it here would pull all ~7.2 MB of course content into the test run.
 */
import { describe, it, expect } from 'vitest'

import { flashcardDeckIndex } from '@/data/flashcards/deck-index'
import { loadFlashcardDeck } from '@/data/flashcards/deck-loaders'
import { flashcardDecks } from '@/data/flashcard-data'

import { presentationIndex } from '@/data/presentation-index'
import { toCatalogueEntry, teacherToCatalogueEntry } from '@/lib/pptx/content-adapter'
import type { TeacherPresentation } from '@/lib/pptx/content-adapter'
import { y7Presentations } from '@/data/curriculum/y7-presentation-content'
import { y8Presentations } from '@/data/curriculum/y8-presentation-content'
import { y9Presentations } from '@/data/curriculum/y9-presentation-content'
import { igcsePresentations } from '@/data/curriculum/igcse-presentation-content'
import { ialPresentations } from '@/data/curriculum/ial-presentation-content'
import { allTeacherPowerpointsComplete } from '@/data/teacher-powerpoints'

import { MOCK_EXAM_INDEX } from '@/data/mock-exams/paper-index'
import { allMockExamPapers } from '@/data/mock-exams'

import { DEMO_STUDENT_INDEX } from '@/data/demo/students-index'
import { DEMO_STUDENTS } from '@/data/demo/students-detail'

describe('flashcard deck index', () => {
  it('describes exactly the decks in the corpus, in order', () => {
    expect(flashcardDeckIndex.map((d) => d.id)).toEqual(flashcardDecks.map((d) => d.id))
  })

  it('carries the labels and card ids the browse grid and progress maths read', () => {
    for (let i = 0; i < flashcardDecks.length; i++) {
      const deck = flashcardDecks[i]
      const row = flashcardDeckIndex[i]
      expect({
        title: row.title,
        description: row.description,
        category: row.category,
        board: row.board,
        cardCount: row.cardCount,
        cardIds: row.cardIds,
      }).toEqual({
        title: deck.title,
        description: deck.description,
        category: deck.category,
        board: deck.board,
        cardCount: deck.cards.length,
        cardIds: deck.cards.map((c) => c.id),
      })
    }
  })

  it('has a working loader for every listed deck', async () => {
    for (const row of flashcardDeckIndex) {
      const deck = await loadFlashcardDeck(row.id)
      // A missing loader entry means a deck a student can see but cannot open.
      expect(deck, `no loader resolved deck "${row.id}"`).toBeDefined()
      expect(deck!.cards.length).toBe(row.cardCount)
    }
  })
})

describe('presentation library index', () => {
  const expected = [
    ...y7Presentations.map((p) => ({ ...toCatalogueEntry(p), bundle: 'y7' })),
    ...y8Presentations.map((p) => ({ ...toCatalogueEntry(p), bundle: 'y8' })),
    ...y9Presentations.map((p) => ({ ...toCatalogueEntry(p), bundle: 'y9' })),
    ...igcsePresentations.map((p) => ({ ...toCatalogueEntry(p), bundle: 'igcse' })),
    ...ialPresentations.map((p) => ({ ...toCatalogueEntry(p), bundle: 'ial' })),
    ...allTeacherPowerpointsComplete.map((p) => ({
      ...teacherToCatalogueEntry(p as unknown as TeacherPresentation),
      bundle: 'teacher',
    })),
  ]

  it('lists every authored presentation and nothing else', () => {
    expect([...presentationIndex.map((e) => e.id)].sort()).toEqual(
      [...expected.map((e) => e.id)].sort(),
    )
  })

  it('matches the adapter output the page used to compute at runtime', () => {
    const byId = new Map(presentationIndex.map((e) => [e.id, e]))
    for (const e of expected) {
      // `bundle` decides which module the download path dynamic-imports, so a
      // wrong value means a deck that cannot be generated.
      expect(byId.get(e.id)).toEqual(e)
    }
  })
})

describe('mock exam paper index', () => {
  it('describes exactly the aggregated papers, in order', () => {
    expect(MOCK_EXAM_INDEX.map((p) => p.id)).toEqual(allMockExamPapers.map((p) => p.id))
  })

  it('matches the fields the listing and config screens render', () => {
    for (let i = 0; i < allMockExamPapers.length; i++) {
      const paper = allMockExamPapers[i]
      const row = MOCK_EXAM_INDEX[i]
      expect({
        board: row.board,
        paperNumber: row.paperNumber,
        title: row.title,
        subtitle: row.subtitle,
        totalTimeMinutes: row.totalTimeMinutes,
        totalMarks: row.totalMarks,
        questionCount: row.questionCount,
        sections: row.sections.length,
      }).toEqual({
        board: paper.board,
        paperNumber: paper.paperNumber,
        title: paper.title,
        subtitle: paper.subtitle,
        totalTimeMinutes: paper.totalTimeMinutes,
        totalMarks: paper.totalMarks,
        questionCount: paper.sections.reduce((a, s) => a + s.questions.length, 0),
        sections: paper.sections.length,
      })
    }
  })

  it('never carries question content - that is what put 2.8 MB in the bundle', () => {
    for (const row of MOCK_EXAM_INDEX) {
      expect(row).not.toHaveProperty('questions')
      for (const section of row.sections) {
        expect(section).not.toHaveProperty('questions')
      }
    }
  })
})

describe('demo student index', () => {
  it('describes exactly the roster, in order', () => {
    expect(DEMO_STUDENT_INDEX.map((s) => s.id)).toEqual(DEMO_STUDENTS.map((s) => s.id))
  })

  it('reproduces every field the demo list and table surfaces read', () => {
    const fields = [
      'name',
      'email',
      'yearGroup',
      'className',
      'classId',
      'teacher',
      'teacherName',
      'status',
      'atRisk',
      'riskReason',
      'overallProgress',
      'averageScore',
      'assignmentsCompleted',
      'assignmentsTotal',
      'lastActive',
      'workingAtGrade',
      'predictedGrade',
      'targetGrade',
      'readingAge',
      'strengths',
      'weaknesses',
      'recommendations',
    ] as const

    for (let i = 0; i < DEMO_STUDENTS.length; i++) {
      const student = DEMO_STUDENTS[i]
      const row = DEMO_STUDENT_INDEX[i]
      for (const field of fields) {
        expect(row[field], `${student.id}.${field}`).toEqual(student[field])
      }
      // The grade-distribution chart reads these instead of mockExamResults.
      expect(row.mockGrades).toEqual(student.mockExamResults.map((m) => m.grade))
      // The generator normalises the two optional EAL fields to explicit
      // false/null rather than copying `undefined`, which keeps the encoded rows
      // compact. Both stay falsy, and nothing in the UI distinguishes an absent
      // flag from a false one, so the normalisation is asserted rather than
      // treated as drift.
      expect(row.isEal).toBe(student.isEal === true)
      expect(row.ealProficiency ?? null).toEqual(student.ealProficiency ?? null)
    }
  })

  it('never carries the per-student detail the roster chunk owns', () => {
    for (const row of DEMO_STUDENT_INDEX) {
      for (const key of [
        'essays',
        'mockExamResults',
        'quizAttempts',
        'moduleProgress',
        'activity',
      ]) {
        expect(row).not.toHaveProperty(key)
      }
    }
  })
})
