'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

// ── Types ────────────────────────────────────────────────────────────────────

export interface WorksheetQuestion {
  number: number
  question: string
  marks?: number
  lines?: number
  modelAnswer?: string
  /** Optional hint text shown in Foundation difficulty */
  hint?: string
}

export interface WorksheetSection {
  title: string
  instructions?: string
  questions: WorksheetQuestion[]
  /** Optional extract/passage to display before questions */
  extract?: string
  /** Optional two-column layout (e.g., for matching exercises) */
  twoColumn?: boolean
}

export type DifficultyBadge = 'foundation' | 'core' | 'extension'

export interface PrintableWorksheetProps {
  schoolName?: string
  className?: string
  date?: string
  title: string
  subtitle?: string
  sections: WorksheetSection[]
  showAnswers?: boolean
  containerClassName?: string
  /** Difficulty badge shown in header */
  difficulty?: DifficultyBadge
  /** Total marks for the worksheet */
  totalMarks?: number
  /** Additional instructions shown below the header */
  generalInstructions?: string
}

// ── Print Styles ─────────────────────────────────────────────────────────────

const PRINT_STYLES = `
@media print {
  /* Hide everything except the worksheet */
  body > *:not(#printable-worksheet-root) {
    display: none !important;
  }

  nav, header, aside, footer,
  [data-print-hide],
  .no-print {
    display: none !important;
  }

  #printable-worksheet-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .worksheet-container {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    padding: 15mm 20mm;
    background: white !important;
    color: black !important;
    font-size: 11pt;
    line-height: 1.5;
  }

  .worksheet-container * {
    color: black !important;
    border-color: #333 !important;
  }

  .worksheet-header {
    border-bottom: 2px solid black !important;
    padding-bottom: 8mm;
    margin-bottom: 8mm;
  }

  .worksheet-section {
    page-break-inside: avoid;
    margin-bottom: 6mm;
  }

  .worksheet-question {
    page-break-inside: avoid;
    margin-bottom: 8mm;
  }

  .answer-line {
    border-bottom: 1.5px solid #555 !important;
    height: 10mm;
    margin-bottom: 3mm;
  }

  .model-answer {
    border: 1px dashed #999 !important;
    padding: 3mm;
    margin-top: 2mm;
    background: #f9f9f9 !important;
    font-style: italic;
  }

  .worksheet-extract {
    border: 1px solid #999 !important;
    padding: 4mm;
    margin-bottom: 4mm;
    background: #fafafa !important;
    page-break-inside: avoid;
  }

  .worksheet-hint {
    border-left: 2px solid #ccc !important;
    padding-left: 3mm;
    margin-top: 2mm;
    font-style: italic;
    font-size: 10pt;
  }

  .difficulty-badge {
    border: 1px solid #666 !important;
    padding: 1mm 3mm;
    font-size: 9pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .worksheet-footer {
    position: fixed;
    bottom: 10mm;
    left: 20mm;
    right: 20mm;
    text-align: center;
    font-size: 9pt;
    color: #666 !important;
    border-top: 1px solid #ccc !important;
    padding-top: 3mm;
  }

  .two-column-section {
    columns: 2;
    column-gap: 8mm;
  }

  .two-column-section .worksheet-question {
    break-inside: avoid;
  }
}
`

// ── Difficulty badge colours (screen only — prints as outline) ───────────────

const DIFFICULTY_STYLES: Record<DifficultyBadge, string> = {
  foundation:
    'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
  core: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700',
  extension:
    'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
}

const DIFFICULTY_LABELS: Record<DifficultyBadge, string> = {
  foundation: 'Foundation',
  core: 'Core',
  extension: 'Extension',
}

// ── Component ────────────────────────────────────────────────────────────────

export const PrintableWorksheet = forwardRef<HTMLDivElement, PrintableWorksheetProps>(
  function PrintableWorksheet(
    {
      schoolName,
      className,
      date,
      title,
      subtitle,
      sections,
      showAnswers = false,
      containerClassName,
      difficulty,
      totalMarks,
      generalInstructions,
    },
    ref,
  ) {
    // Compute total marks from sections if not provided
    const computedTotalMarks =
      totalMarks ??
      sections.reduce(
        (sum, s) =>
          sum + s.questions.reduce((qSum, q) => qSum + (q.marks ?? 0), 0),
        0,
      )

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: PRINT_STYLES }} />
        <div
          ref={ref}
          id="printable-worksheet-root"
          className={cn('worksheet-container', containerClassName)}
        >
          {/* ── Header ─────────────────────────────────────────── */}
          <div className="worksheet-header border-b-2 border-border pb-4 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {schoolName && (
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {schoolName}
                  </p>
                )}
                <h1 className="text-xl font-bold text-foreground">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                )}
                {difficulty && (
                  <span
                    className={cn(
                      'difficulty-badge mt-2 inline-block rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                      DIFFICULTY_STYLES[difficulty],
                    )}
                  >
                    {DIFFICULTY_LABELS[difficulty]}
                  </span>
                )}
              </div>
              <div className="text-right text-sm text-muted-foreground shrink-0">
                {className && <p>Class: {className}</p>}
                {date && <p>Date: {date}</p>}
                {computedTotalMarks > 0 && (
                  <p className="font-medium">
                    Total: {computedTotalMarks} marks
                  </p>
                )}
                <p className="mt-2">Name: _____________________</p>
              </div>
            </div>
          </div>

          {/* ── General instructions ──────────────────────────── */}
          {generalInstructions && (
            <div className="mb-6 rounded-lg border border-border bg-muted/30 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Instructions
              </p>
              <p className="text-sm text-foreground">{generalInstructions}</p>
            </div>
          )}

          {/* ── Sections ──────────────────────────────────────── */}
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="worksheet-section mb-8">
              <h2 className="text-base font-bold text-foreground mb-1">
                {section.title}
              </h2>
              {section.instructions && (
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {section.instructions}
                </p>
              )}

              {/* Extract / passage block */}
              {section.extract && (
                <div className="worksheet-extract mb-5 rounded-lg border border-border bg-muted/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Extract
                  </p>
                  <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                    {section.extract}
                  </p>
                </div>
              )}

              <div
                className={cn(
                  'space-y-7',
                  section.twoColumn && 'two-column-section sm:columns-2 sm:gap-6',
                )}
              >
                {section.questions.map((q) => (
                  <div key={q.number} className="worksheet-question break-inside-avoid">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-bold text-foreground shrink-0 w-6">
                        {q.number}.
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm text-foreground">{q.question}</p>
                          {q.marks !== undefined && q.marks > 0 && (
                            <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                              [{q.marks} mark{q.marks !== 1 ? 's' : ''}]
                            </span>
                          )}
                        </div>

                        {/* Hint (Foundation scaffolding) */}
                        {q.hint && (
                          <div className="worksheet-hint mt-2 border-l-2 border-blue-300 pl-3 dark:border-blue-700">
                            <p className="text-xs text-blue-700 italic dark:text-blue-400">
                              Hint: {q.hint}
                            </p>
                          </div>
                        )}

                        {/* Answer lines */}
                        {(q.lines ?? 4) > 0 && (
                          <div className="mt-4">
                            {Array.from({ length: q.lines ?? 4 }).map((_, lineIdx) => (
                              <div
                                key={lineIdx}
                                className="answer-line border-b border-border/60 h-9 mb-1.5"
                              />
                            ))}
                          </div>
                        )}

                        {/* Model answer (teacher version) */}
                        {showAnswers && q.modelAnswer && (
                          <div className="model-answer mt-3 rounded-lg border border-dashed border-green-500/30 bg-green-500/5 p-3">
                            <p className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wider">
                              Model Answer
                            </p>
                            <p className="text-sm text-foreground whitespace-pre-wrap">
                              {q.modelAnswer}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ── Footer ────────────────────────────────────────── */}
          <div className="worksheet-footer mt-8 pt-3 border-t border-border text-center text-xs text-muted-foreground">
            {schoolName && <span>{schoolName}</span>}
            {schoolName && title && <span> &mdash; </span>}
            <span>{title}</span>
            {computedTotalMarks > 0 && (
              <span> &mdash; Total: {computedTotalMarks} marks</span>
            )}
          </div>
        </div>
      </>
    )
  },
)
