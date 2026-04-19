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
 *
 * Falls back to download if popups are blocked.
 */
export function generateAnthologyPdf(doc: AnthologyDocument): void {
  try {
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

    // Try to open in new tab; if blocked by popup blocker, fall back to download
    const newWindow = window.open(url, '_blank')
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked — trigger download instead
      const a = document.createElement('a')
      a.href = url
      a.download = (title.replace(/[^a-zA-Z0-9]/g, '-') || 'document') + '.html'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    setTimeout(() => URL.revokeObjectURL(url), 60_000)
  } catch (err) {
    console.error('[generateAnthologyPdf] Failed:', err)
    throw new Error('Failed to generate document. Please check your browser allows popups and try again.')
  }
}

// ─── Word Export (triggers download) ──────────────────────────────────────

/**
 * Generates an Anthology-styled HTML document and triggers a .doc download.
 * Word and Google Docs can open HTML files saved with a .doc extension.
 * CSS variables are resolved to hex values for Word compatibility.
 */
export function downloadAnthologyWord(
  doc: AnthologyDocument,
  fileName?: string,
): void {
  try {
    const content = getContent(doc)
    const title = getTitle(doc)

    const html = anthologyWordHtml({
      title,
      brand: content.brand,
      cover: content.cover,
      bodyHtml: renderBody(doc),
      footer: content.footer,
    })

    // BOM + meta charset for Word to render UTF-8 correctly
    const blob = new Blob(['\ufeff' + html], {
      type: 'application/vnd.ms-word;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (fileName || title.replace(/[^a-zA-Z0-9]/g, '-') || 'document') + '.doc'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5_000)
  } catch (err) {
    console.error('[downloadAnthologyWord] Failed:', err)
    throw new Error('Failed to generate Word document. Please try again.')
  }
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
