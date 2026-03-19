import { describe, it, expect } from 'vitest'
import { allCourses } from '@/data/courses'
import { practiceQuestions } from '@/data/practice-data'
import { flashcardDecks } from '@/data/flashcard-data'
import { techniques } from '@/data/techniques-data'

describe('Course data integrity', () => {
  it('has at least 8 courses', () => expect(allCourses.length).toBeGreaterThanOrEqual(8))
  it('every course has unique ID', () => {
    const ids = allCourses.map(c => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('every course has modules', () => {
    for (const c of allCourses) expect(c.moduleList.length).toBeGreaterThan(0)
  })
  it('every module has content', () => {
    for (const c of allCourses)
      for (const m of c.moduleList) expect(m.content?.length).toBeGreaterThan(0)
  })
})

describe('Practice data', () => {
  it('has questions', () => expect(practiceQuestions.length).toBeGreaterThanOrEqual(3))
  it('every question has model answers', () => {
    for (const q of practiceQuestions) expect(Object.keys(q.modelAnswers).length).toBeGreaterThan(0)
  })
})

describe('Flashcard data', () => {
  it('has decks', () => expect(flashcardDecks.length).toBeGreaterThanOrEqual(3))
  it('every deck has cards', () => {
    for (const d of flashcardDecks) expect(d.cards.length).toBeGreaterThan(0)
  })
})

describe('Techniques data', () => {
  it('has techniques', () => expect(techniques.length).toBeGreaterThanOrEqual(20))
})
