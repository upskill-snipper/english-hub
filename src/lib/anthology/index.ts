/**
 * Anthology Template System — Public API
 *
 * The master template for every printable resource The English Hub produces.
 * Every printed artefact — study guides, essay feedback, revision booklets,
 * progress reports, lesson plans, worksheets, homework — uses this template.
 *
 * Usage:
 *   import { generateAnthologyPdf, downloadAnthologyWord } from '@/lib/anthology'
 *
 *   // Open as printable PDF in new tab
 *   generateAnthologyPdf({ type: 'study-guide', content: { ... } })
 *
 *   // Download as Word document
 *   downloadAnthologyWord({ type: 'study-guide', content: { ... } }, 'My-Study-Guide')
 */

'use client'

import { anthologyPageHtml, anthologyWordHtml } from './html-shell'
import {
  renderStudyGuideBody,
  renderEssayFeedbackBody,
  renderRevisionBookletBody,
  renderCleanReportBody,
  renderLessonPlanBody,
  renderWorksheetBody,
  renderMarkSchemeBody,
  renderHomeworkBody,
} from './renderers'
import type { AnthologyDocument } from './types'

// Re-export types for convenience
export type {
  AnthologyDocument,
  AnthologyBrand,
  AnthologyCover,
  AnthologyFooter,
  StudyGuideContent,
  EssayFeedbackContent,
  RevisionBookletContent,
  CleanReportContent,
  LessonPlanContent,
  WorksheetContent,
  MarkSchemeContent,
  HomeworkContent,
  DataCardContent,
  AoScore,
  MarginComment,
  IndexItem,
  ReportKPI,
  ReportTableRow,
  LessonActivity,
  WorksheetQuestionContent,
  MarkSchemeAnswerContent,
  HomeworkQuestionContent,
  EssayParagraph,
  StudyGuideChapter,
  RevisionSection,
} from './types'

// ─── Body renderer dispatch ───────────────────────────────────────────────

function renderBody(doc: AnthologyDocument): string {
  switch (doc.type) {
    case 'study-guide':
      return renderStudyGuideBody(doc.content)
    case 'essay-feedback':
      return renderEssayFeedbackBody(doc.content)
    case 'revision-booklet':
      return renderRevisionBookletBody(doc.content)
    case 'clean-report':
      return renderCleanReportBody(doc.content)
    case 'lesson-plan':
      return renderLessonPlanBody(doc.content)
    case 'worksheet':
      return renderWorksheetBody(doc.content)
    case 'mark-scheme':
      return renderMarkSchemeBody(doc.content)
    case 'homework':
      return renderHomeworkBody(doc.content)
  }
}

function getContent(doc: AnthologyDocument) {
  return doc.content
}

function getTitle(doc: AnthologyDocument): string {
  const c = getContent(doc)
  return c.cover.titleLines.join(' ')
}

// ─── PDF Export (opens in new tab with print bar) ─────────────────────────

/**
 * Generates an Anthology-styled HTML document and opens it in a new browser tab.
 * User can print to PDF via Ctrl+P / Cmd+P, or use the built-in print bar.
 */
export function generateAnthologyPdf(doc: AnthologyDocument): void {
  const content = getContent(doc)
  const title = getTitle(doc)

  const html = anthologyPageHtml({
    title,
    brand: content.brand,
    cover: content.cover,
    bodyHtml: renderBody(doc),
    footer: content.footer,
    preview: true,
  })

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
  setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

// ─── Word Export (triggers download) ──────────────────────────────────────

/**
 * Generates an Anthology-styled HTML document and triggers a .doc download.
 * Word and Google Docs can open HTML files saved with a .doc extension.
 */
export function downloadAnthologyWord(
  doc: AnthologyDocument,
  fileName?: string,
): void {
  const content = getContent(doc)
  const title = getTitle(doc)

  const html = anthologyWordHtml({
    title,
    brand: content.brand,
    cover: content.cover,
    bodyHtml: renderBody(doc),
    footer: content.footer,
  })

  const blob = new Blob(['\ufeff' + html], { type: 'application/msword' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = (fileName || title.replace(/[^a-zA-Z0-9]/g, '-')) + '.doc'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ─── Convenience: generate both formats ───────────────────────────────────

/**
 * Returns the raw HTML string for the Anthology document.
 * Useful when you need the HTML for custom rendering (e.g. in an iframe).
 */
export function getAnthologyHtml(
  doc: AnthologyDocument,
  opts?: { preview?: boolean },
): string {
  const content = getContent(doc)
  const title = getTitle(doc)

  return anthologyPageHtml({
    title,
    brand: content.brand,
    cover: content.cover,
    bodyHtml: renderBody(doc),
    footer: content.footer,
    preview: opts?.preview ?? false,
  })
}
