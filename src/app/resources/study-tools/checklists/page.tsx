'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useT } from '@/lib/i18n/use-t'

/* ─── Types ──────────────────────────────────────────────────── */

type ChecklistItem = {
  id: string
  label: string
  detail?: string
}

type ChecklistSection = {
  title: string
  items: ChecklistItem[]
}

type ChecklistBoard = {
  slug: string
  label: string
  colour: string
  sections: ChecklistSection[]
}

/* ─── Checklist data ─────────────────────────────────────────── */

const CHECKLISTS: ChecklistBoard[] = [
  {
    slug: 'aqa-language',
    label: 'AQA English Language (8700)',
    colour: 'border-primary',
    sections: [
      {
        title: 'Paper 1: Explorations in Creative Reading and Writing',
        items: [
          {
            // 31 October 2026: "list 4 things" and, below, "Summarise
            // differences/similarities" were Q1 and Q2 before summer 2026 (see
            // src/data/mark-scheme-guides/aqa-lang-paper1.ts, paper2.ts). Ids kept.
            id: 'aqa-l-1',
            label: 'Q1: Identify and interpret explicit information',
            detail: '4 marks - four multiple-choice parts',
          },
          {
            id: 'aqa-l-2',
            label: 'Q2: Analyse language using subject terminology',
            detail: '8 marks - 2-3 detailed paragraphs',
          },
          {
            id: 'aqa-l-3',
            label: 'Q3: Analyse structure and organisation',
            detail: '8 marks - focus, shift, narrative perspective',
          },
          {
            id: 'aqa-l-4',
            label: 'Q4: Critically evaluate texts',
            detail: '20 marks - agree/disagree with statement',
          },
          {
            id: 'aqa-l-5',
            label: 'Q5: Descriptive writing',
            detail: '40 marks (24 content + 16 SPaG)',
          },
          {
            id: 'aqa-l-6',
            label: 'Q5: Narrative writing',
            detail: '40 marks (24 content + 16 SPaG)',
          },
          {
            id: 'aqa-l-7',
            label: 'Timing practice: 15 min reading, 45 min Q5',
            detail: 'Critical for exam success',
          },
        ],
      },
      {
        title: "Paper 2: Writers' Viewpoints and Perspectives",
        items: [
          { id: 'aqa-l-8', label: 'Q1: True/false statements', detail: '4 marks - shade boxes' },
          {
            id: 'aqa-l-9',
            label: 'Q2: Infer the differences between the sources',
            detail: '8 marks - use both sources',
          },
          {
            id: 'aqa-l-10',
            label: 'Q3: Analyse language in one source',
            detail: '12 marks - detailed analysis',
          },
          {
            id: 'aqa-l-11',
            label: "Q4: Compare writers' viewpoints",
            detail: '16 marks - compare methods and perspectives',
          },
          {
            id: 'aqa-l-12',
            label: 'Q5: Writing to present a viewpoint',
            detail: '40 marks - letter, article, speech, essay',
          },
          {
            id: 'aqa-l-13',
            label: 'Non-fiction text types and conventions',
            detail: 'Letters, articles, speeches, leaflets',
          },
          {
            id: 'aqa-l-14',
            label: 'Persuasive and argumentative techniques',
            detail: 'Rhetoric, anecdotes, statistics, counter-arguments',
          },
        ],
      },
      {
        title: 'Core Skills',
        items: [
          {
            id: 'aqa-l-15',
            label: 'Subject terminology: identify and use correctly',
            detail: 'Metaphor, simile, personification, alliteration, etc.',
          },
          {
            id: 'aqa-l-16',
            label: 'Structural features vocabulary',
            detail: 'Shift, cyclical structure, juxtaposition, flashback',
          },
          {
            id: 'aqa-l-17',
            label: 'Spelling, punctuation and grammar',
            detail: 'Sentence variety, paragraphing, ambitious vocabulary',
          },
          {
            id: 'aqa-l-18',
            label: 'PEE/PEEL paragraph structure',
            detail: 'Point, Evidence, Explanation, Link',
          },
          {
            id: 'aqa-l-19',
            label: 'Spoken Language endorsement',
            detail: 'Presentation, listening, response to questions',
          },
        ],
      },
    ],
  },
  {
    slug: 'aqa-literature',
    label: 'AQA English Literature (8702)',
    colour: 'border-primary',
    sections: [
      {
        title: 'Paper 1: Shakespeare and the 19th-Century Novel',
        items: [
          {
            id: 'aqa-lit-1',
            label: 'Shakespeare: respond to extract + whole text',
            detail: '34 marks, 50-55 minutes',
          },
          {
            id: 'aqa-lit-2',
            label: 'Shakespeare: key quotes (10-15 memorised)',
            detail: 'Must be embedded in response',
          },
          {
            id: 'aqa-lit-3',
            label: 'Shakespeare: context (historical, social, literary)',
            detail: 'Jacobean/Elizabethan society',
          },
          {
            id: 'aqa-lit-4',
            label: "Shakespeare: writer's methods (language, structure, form)",
            detail: 'Soliloquy, dramatic irony, imagery',
          },
          {
            id: 'aqa-lit-5',
            label: '19th-century novel: respond to extract + whole text',
            detail: '30 marks, 45-50 minutes',
          },
          {
            id: 'aqa-lit-6',
            label: '19th-century novel: key quotes memorised',
            detail: '10-15 key quotes with analysis',
          },
          {
            id: 'aqa-lit-7',
            label: '19th-century novel: Victorian context',
            detail: 'Class, religion, science, gender, empire',
          },
        ],
      },
      {
        title: 'Paper 2: Modern Texts and Poetry',
        items: [
          {
            id: 'aqa-lit-8',
            label: 'Modern text: essay on one theme/character',
            detail: '34 marks, no extract given',
          },
          {
            id: 'aqa-lit-9',
            label: 'Modern text: full plot and character knowledge',
            detail: 'Must reference specific moments',
          },
          {
            id: 'aqa-lit-10',
            label: 'Poetry anthology: compare two poems',
            detail: '30 marks - named poem + your choice',
          },
          {
            id: 'aqa-lit-11',
            label: 'Poetry: all 15 Power and Conflict poems studied',
            detail: 'Or Love and Relationships cluster',
          },
          {
            id: 'aqa-lit-12',
            label: 'Poetry: comparison techniques',
            detail: 'Theme, method, context links',
          },
          { id: 'aqa-lit-13', label: 'Unseen poetry: single poem analysis', detail: '24 marks' },
          { id: 'aqa-lit-14', label: 'Unseen poetry: compare two unseen poems', detail: '8 marks' },
        ],
      },
      {
        title: 'Core Skills',
        items: [
          {
            id: 'aqa-lit-15',
            label: 'AO1: Responding to text with textual references',
            detail: 'Use quotes, not just plot summary',
          },
          {
            id: 'aqa-lit-16',
            label: 'AO2: Analyse language, form and structure',
            detail: "Writer's methods and effects",
          },
          {
            id: 'aqa-lit-17',
            label: 'AO3: Show understanding of context',
            detail: 'Social, historical, literary',
          },
          {
            id: 'aqa-lit-18',
            label: 'AO4: Spelling, punctuation and grammar',
            detail: 'Only assessed on Paper 1 Shakespeare',
          },
          {
            id: 'aqa-lit-19',
            label: 'Essay planning under timed conditions',
            detail: '5 minutes planning per essay',
          },
        ],
      },
    ],
  },
  {
    slug: 'edexcel-language',
    label: 'Edexcel English Language (1EN0)',
    colour: 'border-primary',
    sections: [
      {
        title: 'Paper 1: Fiction and Imaginative Writing',
        items: [
          {
            id: 'edx-l-1',
            label: 'Section A Q1: one-word/short answers',
            detail: 'Simple retrieval',
          },
          // 31 October 2026: Q2 was "close language analysis" and Q3 "whole text
          // analysis"; on Paper 2 the 19th century, Q1 to Q4, a Q5 comparison and a
          // Q6 writing task with "two tasks from choice". Corrected to the 1EN0 guides
          // in src/data/mark-scheme-guides/. The ids are kept so ticks survive.
          {
            id: 'edx-l-2',
            label: 'Section A Q2: two points from a short section',
            detail: 'Retrieval, quoted or in your own words',
          },
          {
            id: 'edx-l-3',
            label: 'Section A Q3: language and structure',
            detail: 'A short section named in the question',
          },
          {
            id: 'edx-l-4',
            label: 'Section A Q4: evaluate critically',
            detail: 'How successful is the writer?',
          },
          {
            id: 'edx-l-5',
            label: 'Section B: imaginative writing (one task)',
            detail: 'A story, a description or a monologue, from a choice of two',
          },
          {
            id: 'edx-l-6',
            label: 'Creative writing techniques',
            detail: 'Imagery, varied sentences, ambitious vocabulary',
          },
        ],
      },
      {
        title: 'Paper 2: Non-Fiction and Transactional Writing',
        items: [
          {
            id: 'edx-l-7',
            label: 'Section A: read and analyse two non-fiction texts',
            detail: 'From the 20th and 21st centuries, linked by a theme',
          },
          {
            id: 'edx-l-8',
            label: 'Q1 to Q6: retrieval, language and structure, evaluation',
            detail: 'Q1 to Q3 on Text 1, Q4 to Q6 on Text 2',
          },
          {
            id: 'edx-l-9',
            label: "Q7(a) and Q7(b): synthesis, then compare writers' perspectives",
            detail: 'Use both texts with comparison connectives',
          },
          {
            id: 'edx-l-10',
            label: 'Section B Q8 or Q9: transactional writing',
            detail: 'One task from a choice of two',
          },
          {
            id: 'edx-l-11',
            label: 'Text types: articles, letters, reviews, speeches',
            detail: 'Know conventions for each',
          },
        ],
      },
    ],
  },
  {
    slug: 'edexcel-literature',
    label: 'Edexcel English Literature (1ET0)',
    colour: 'border-primary',
    sections: [
      {
        title: 'Paper 1: Shakespeare and Post-1914 Literature',
        items: [
          // 9 October 2026: this said "Shakespeare: extract-based essay", "Analyse extract +
          // link to whole play". Pearson's 1ET0/01 (specification Issue 2, PDF page 23) sets one
          // two-part question on a printed extract: (a) the extract itself, (b) a theme from it
          // elsewhere in the play. The id is unchanged so a student's ticks survive.
          {
            id: 'edx-lit-1',
            label: 'Shakespeare: two-part question on a printed extract',
            detail: '(a) the extract; (b) its theme elsewhere in the play',
          },
          { id: 'edx-lit-2', label: 'Shakespeare: 15+ key quotes memorised' },
          { id: 'edx-lit-3', label: "Shakespeare: context and writer's purpose" },
          {
            id: 'edx-lit-4',
            label: 'Post-1914 text: essay question (no extract)',
            detail: 'Must know text thoroughly',
          },
          {
            id: 'edx-lit-5',
            label: 'Post-1914 text: themes and characters',
            detail: 'AIC, LOTF, Blood Brothers, etc.',
          },
        ],
      },
      {
        title: 'Paper 2: 19th-Century Novel and Poetry',
        items: [
          {
            id: 'edx-lit-6',
            label: '19th-century novel: extract + essay',
            detail: 'ACC, J&H, Frankenstein, etc.',
          },
          // Corrected 2 October 2026 against Pearson's specification (1ET0, Issue 2): the
          // anthology has collections, not clusters, the poem of choice comes from the named
          // poem's collection, and there is no single unseen poem question (edx-lit-9, removed).
          {
            id: 'edx-lit-7',
            label: 'Poetry anthology: compare two poems',
            detail: 'Named poem + one of your choice from the same collection',
          },
          { id: 'edx-lit-8', label: 'Poetry: know all 15 poems in your collection' },
          {
            id: 'edx-lit-10',
            label: 'Unseen poetry: compare two poems',
            detail: 'Linked by a theme: language, form and structure',
          },
        ],
      },
    ],
  },
  {
    slug: 'caie-language',
    label: 'Cambridge IGCSE First Language English',
    colour: 'border-primary',
    // 31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0500-paper1.ts
    // and -paper2.ts. Paper 1 was Q1 15, Q2 25 and a 10-mark summary, 50 of its 80
    // marks; Paper 2's directed writing and each composition were 25. Paper 1 is four
    // questions of 20 (2027-2029 syllabus; the November 2026 paper is three, of 30,
    // 25 and 25), Paper 2 two sections of 40, and Paper 1 does not mark spelling and
    // grammar. Ids are kept so ticks survive; caie-l-11 is new. Second read: Paper 2's
    // title now says what differs in November 2026 too, as Paper 1's does.
    sections: [
      {
        title: 'Paper 1: Reading (from 2027; November 2026 is three questions, of 30, 25 and 25)',
        items: [
          {
            id: 'caie-l-1',
            label: 'Q1: Comprehension (Text A)',
            detail: '20 marks - short answers, in your own words where asked',
          },
          {
            id: 'caie-l-2',
            label: 'Q2: Summary task (Text B)',
            detail:
              "20 marks - a summary of no more than 120 words (15), the writer's attitude (5)",
          },
          {
            id: 'caie-l-3',
            label: 'Q3: Short answers and language task (Text C)',
            detail: '20 marks - word meanings (10), then how the language creates effects (10)',
          },
          {
            id: 'caie-l-11',
            label: 'Q4: Extended response to reading (Text C)',
            detail: '20 marks - about 250-300 words in a set form, such as a letter or speech',
          },
        ],
      },
      {
        title:
          'Paper 2: Directed Writing and Composition (from 2027; in November 2026 the directed writing is one 40-mark task)',
        items: [
          {
            id: 'caie-l-4',
            label: 'Directed writing: respond to the text(s) in a given form',
            detail:
              '40 marks - a short answer on the text (5), then a speech, letter, article or report (35)',
          },
          {
            id: 'caie-l-5',
            label: 'Composition: descriptive writing',
            detail:
              '40 marks if you choose one of the two descriptive titles - sensory detail, structure',
          },
          {
            id: 'caie-l-6',
            label: 'Composition: narrative writing',
            detail:
              '40 marks if you choose one of the two narrative titles - plot, characterisation, atmosphere',
          },
          {
            id: 'caie-l-7',
            label: 'Register and audience awareness',
            detail: 'Formal/informal, persuasive/informative',
          },
        ],
      },
      {
        title: 'Core Skills',
        items: [
          { id: 'caie-l-8', label: 'Own-words paraphrasing', detail: 'Critical for Qs 1, 2 and 3' },
          {
            id: 'caie-l-9',
            label: 'Selecting and organising evidence',
            detail: 'Relevant quotation, not copying',
          },
          {
            id: 'caie-l-10',
            label: 'Accuracy in spelling and grammar',
            detail: 'Marked in Paper 2, in the directed writing and the composition',
          },
        ],
      },
    ],
  },
  {
    slug: 'caie-literature',
    label: 'Cambridge IGCSE Literature (0475)',
    colour: 'border-primary',
    sections: [
      {
        title: 'Paper 1: Poetry and Prose',
        items: [
          {
            id: 'caie-lit-1',
            label: 'Poetry set text: passage-based question',
            detail: '25 marks',
          },
          { id: 'caie-lit-2', label: 'Poetry set text: essay question', detail: '25 marks' },
          { id: 'caie-lit-3', label: 'Prose set text: passage-based question', detail: '25 marks' },
          { id: 'caie-lit-4', label: 'Prose set text: essay question', detail: '25 marks' },
        ],
      },
      {
        title: 'Paper 2: Drama',
        items: [
          { id: 'caie-lit-5', label: 'Drama set text: passage-based question', detail: '25 marks' },
          { id: 'caie-lit-6', label: 'Drama set text: essay question', detail: '25 marks' },
          { id: 'caie-lit-7', label: 'Shakespeare text thoroughly studied' },
          { id: 'caie-lit-8', label: 'Modern drama text thoroughly studied' },
        ],
      },
      {
        title: 'Core Skills',
        items: [
          { id: 'caie-lit-9', label: 'Close reading and textual analysis' },
          { id: 'caie-lit-10', label: 'Understanding of form, structure and language' },
          { id: 'caie-lit-11', label: 'Personal and critical response to texts' },
          { id: 'caie-lit-12', label: "Engagement with writers' ideas and attitudes" },
        ],
      },
    ],
  },
]

/* ─── LS key ─────────────────────────────────────────────────── */

const LS_CHECKED = 'teh-checklists-checked'

/* ─── Component ──────────────────────────────────────────────── */

export default function ChecklistsPage() {
  const t = useT()
  const [activeBoard, setActiveBoard] = useState(CHECKLISTS[0].slug)
  const [checked, setChecked] = useState<Record<string, Set<string>>>({})
  const [mounted, setMounted] = useState(false)

  const board = CHECKLISTS.find((b) => b.slug === activeBoard)!

  /* Load from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_CHECKED)
      if (saved) {
        const parsed: Record<string, string[]> = JSON.parse(saved)
        const mapped: Record<string, Set<string>> = {}
        for (const [key, val] of Object.entries(parsed)) {
          mapped[key] = new Set(val)
        }
        setChecked(mapped)
      }
    } catch {
      // ignore
    }
    setMounted(true)
  }, [])

  /* Save to localStorage */
  useEffect(() => {
    if (!mounted) return
    const serialisable: Record<string, string[]> = {}
    for (const [key, val] of Object.entries(checked)) {
      serialisable[key] = [...val]
    }
    localStorage.setItem(LS_CHECKED, JSON.stringify(serialisable))
  }, [checked, mounted])

  /* Derived */
  const boardChecked = checked[activeBoard] ?? new Set<string>()

  const totalItems = useMemo(
    () => board.sections.reduce((sum, s) => sum + s.items.length, 0),
    [board],
  )
  const checkedCount = boardChecked.size
  const progressPct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0

  /* Handlers */
  const toggleItem = useCallback(
    (itemId: string) => {
      setChecked((prev) => {
        const current = new Set(prev[activeBoard] ?? [])
        if (current.has(itemId)) current.delete(itemId)
        else current.add(itemId)
        return { ...prev, [activeBoard]: current }
      })
    },
    [activeBoard],
  )

  const clearAll = useCallback(() => {
    setChecked((prev) => ({ ...prev, [activeBoard]: new Set<string>() }))
  }, [activeBoard])

  const checkAll = useCallback(() => {
    const allIds = board.sections.flatMap((s) => s.items.map((i) => i.id))
    setChecked((prev) => ({ ...prev, [activeBoard]: new Set(allIds) }))
  }, [activeBoard, board])

  if (!mounted) {
    return (
      <>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('resources.study_tools.checklists.title')}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {t('resources.study_tools.checklists.subtitle')}
          </p>
        </div>
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('resources.study_tools.checklists.title')}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          {t('resources.study_tools.checklists.subtitle')}
        </p>
      </div>

      {/* Board selector tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {CHECKLISTS.map((b) => {
          const bChecked = checked[b.slug] ?? new Set()
          const bTotal = b.sections.reduce((sum, s) => sum + s.items.length, 0)
          const bPct = bTotal > 0 ? Math.round((bChecked.size / bTotal) * 100) : 0
          return (
            <button
              key={b.slug}
              onClick={() => setActiveBoard(b.slug)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                activeBoard === b.slug
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {b.label}
              {bChecked.size > 0 && (
                <span
                  className={`ms-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    activeBoard === b.slug ? 'bg-card/20 text-white' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {bPct}%
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mb-6 rounded-xl border border-border bg-card p-5 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">{board.label}</p>
            <p className="text-xs text-muted-foreground">
              {checkedCount} {t('resources.study_tools.checklists.of')} {totalItems}{' '}
              {t('resources.study_tools.checklists.skills_covered')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-primary">{progressPct}%</span>
            <div className="flex gap-1.5">
              <button
                onClick={checkAll}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-muted"
              >
                {t('resources.study_tools.checklists.check_all')}
              </button>
              <button
                onClick={clearAll}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-muted"
              >
                {t('resources.study_tools.checklists.clear_all')}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              progressPct === 100
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                : 'bg-gradient-to-r from-primary to-primary/60'
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {progressPct === 100 && (
          <p className="mt-2 text-sm font-semibold text-emerald-500">
            {t('resources.study_tools.checklists.all_covered')}
          </p>
        )}
      </div>

      {/* Checklist sections */}
      <div className="space-y-6">
        {board.sections.map((section) => {
          const sectionChecked = section.items.filter((i) => boardChecked.has(i.id)).length
          const sectionTotal = section.items.length
          const sectionPct = Math.round((sectionChecked / sectionTotal) * 100)

          return (
            <section
              key={section.title}
              className={`overflow-hidden rounded-xl border-s-4 ${board.colour} border border-border bg-card shadow-md`}
            >
              {/* Section header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h2 className="text-base font-bold text-foreground">{section.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {sectionChecked}/{sectionTotal}
                  </span>
                  <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${sectionPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Items */}
              <ul className="divide-y divide-border">
                {section.items.map((item) => {
                  const isChecked = boardChecked.has(item.id)
                  return (
                    <li key={item.id}>
                      <label className="flex cursor-pointer items-start gap-3 px-5 py-3 transition-colors hover:bg-muted">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary/30"
                        />
                        <div className="flex-1">
                          <span
                            className={`text-sm leading-snug ${
                              isChecked ? 'text-muted-foreground line-through' : 'text-foreground'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.detail && (
                            <p
                              className={`mt-0.5 text-xs ${isChecked ? 'text-muted-foreground-subtle' : 'text-muted-foreground'}`}
                            >
                              {item.detail}
                            </p>
                          )}
                        </div>
                        {isChecked && (
                          <svg
                            className="h-5 w-5 shrink-0 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        )}
                      </label>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>

      {/* Tip box */}
      <div className="mt-10 rounded-xl border border-primary/20 bg-primary/[0.04] p-6">
        <h3 className="text-lg font-bold text-foreground">
          {t('resources.study_tools.checklists.tip.title')}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{t('resources.study_tools.checklists.tip.confident.label')}</strong>{' '}
              {t('resources.study_tools.checklists.tip.confident.body')}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{t('resources.study_tools.checklists.tip.prioritise.label')}</strong>{' '}
              {t('resources.study_tools.checklists.tip.prioritise.body')}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{t('resources.study_tools.checklists.tip.revisit.label')}</strong>{' '}
              {t('resources.study_tools.checklists.tip.revisit.body')}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{t('resources.study_tools.checklists.tip.saved.label')}</strong>{' '}
              {t('resources.study_tools.checklists.tip.saved.body')}
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
