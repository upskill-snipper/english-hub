/**
 * renderers.ts - Document-Type Renderers
 *
 * Each function takes a typed content object and returns the body HTML
 * (the content between header/cover and footer). The shell wraps it.
 */

import { escHtml } from './html-shell'
import {
  secTitle,
  chapNum,
  dropCapParagraph,
  paragraph,
  pullQuote,
  callout,
  dashedList,
  dataCard,
  kpiRow,
  indexList,
  asymSplit,
  essayLayout,
  marginComment,
  aoScorecard,
  reportTable,
  activityBlock,
  keywordRow,
  nameDateRow,
  answerLines,
  teacherWarning,
  gradeBands,
} from './components'
import type {
  StudyGuideContent,
  EssayFeedbackContent,
  RevisionBookletContent,
  CleanReportContent,
  LessonPlanContent,
  WorksheetContent,
  MarkSchemeContent,
  HomeworkContent,
} from './types'

// ═══════════════════════════════════════════════════════════════════════════
//  1. Study Guide
// ═══════════════════════════════════════════════════════════════════════════

export function renderStudyGuideBody(content: StudyGuideContent): string {
  return content.chapters
    .map((ch) => {
      switch (ch.kind) {
        case 'narrative': {
          const chapNumHtml = ch.chapNum ? chapNum(ch.chapNum) : ''
          const titleHtml = ch.title ? secTitle(ch.title, ch.numPrefix) : ''
          const textHtml = ch.drop
            ? dropCapParagraph(ch.body) + (ch.paragraphs || []).map(paragraph).join('')
            : paragraph(ch.body) + (ch.paragraphs || []).map(paragraph).join('')

          const mainContent = `${chapNumHtml}${titleHtml}${textHtml}`

          if (ch.sidebar) {
            return asymSplit(mainContent, dataCard(ch.sidebar))
          }
          return mainContent
        }
        case 'pullquote':
          return pullQuote(ch.body, ch.cite)
        case 'section':
          return secTitle(ch.title, ch.numPrefix)
        case 'quote-list': {
          const title = ch.title ? secTitle(ch.title, ch.numPrefix) : ''
          return title + dashedList(ch.items)
        }
        case 'callout':
          return callout(ch.kicker, ch.body)
        default:
          return ''
      }
    })
    .join('\n')
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. Essay Feedback
// ═══════════════════════════════════════════════════════════════════════════

export function renderEssayFeedbackBody(content: EssayFeedbackContent): string {
  const essayHtml = content.essay.paragraphs.map((p) => `<p>${p.html}</p>`).join('')
  const commentsHtml = content.essay.marginComments.map(marginComment).join('')
  const scoreHtml = aoScorecard(content.scores.aos, content.scores.grade)

  const nextStepsHtml = content.nextSteps
    ? secTitle(content.nextSteps.title, content.nextSteps.numPrefix) +
      dashedList(content.nextSteps.items)
    : ''

  return essayLayout(essayHtml, commentsHtml) + scoreHtml + nextStepsHtml
}

// ═══════════════════════════════════════════════════════════════════════════
//  3. Revision Booklet
// ═══════════════════════════════════════════════════════════════════════════

export function renderRevisionBookletBody(content: RevisionBookletContent): string {
  return content.sections
    .map((sec) => {
      switch (sec.kind) {
        case 'index':
          return secTitle(sec.title, sec.numPrefix) + indexList(sec.items)
        case 'task-list':
          return secTitle(sec.title, sec.numPrefix) + dashedList(sec.items)
        case 'task-with-callout':
          return (
            secTitle(sec.title, sec.numPrefix) +
            asymSplit(dashedList(sec.items), callout(sec.callout.kicker, sec.callout.body))
          )
        case 'pullquote':
          return pullQuote(sec.body, sec.cite)
        case 'callout':
          return callout(sec.kicker, sec.body)
        default:
          return ''
      }
    })
    .join('\n')
}

// ═══════════════════════════════════════════════════════════════════════════
//  4. Clean Report
// ═══════════════════════════════════════════════════════════════════════════

export function renderCleanReportBody(content: CleanReportContent): string {
  let html = ''

  // KPIs
  html += secTitle(content.kpis.title, content.kpis.numPrefix)
  html += kpiRow(content.kpis.cards)

  // Table
  if (content.table) {
    html += secTitle(content.table.title, content.table.numPrefix, 'margin-top:18px;')
    html += reportTable(content.table.headers, content.table.rows)
  }

  // Narrative
  if (content.narrative) {
    html += secTitle(content.narrative.title, content.narrative.numPrefix, 'margin-top:18px;')
    html += content.narrative.paragraphs.map(paragraph).join('')
  }

  // Outlook callout
  if (content.outlook) {
    html += callout(content.outlook.kicker, content.outlook.body)
  }

  return html
}

// ═══════════════════════════════════════════════════════════════════════════
//  5. Lesson Plan
// ═══════════════════════════════════════════════════════════════════════════

export function renderLessonPlanBody(content: LessonPlanContent): string {
  let html = ''

  // Objectives
  html += secTitle('Learning objectives', 'i.')
  html += dashedList(content.objectives)

  // Activities
  html += secTitle('Lesson outline', 'ii.')
  html += content.activities.map(activityBlock).join('')

  // Keywords
  if (content.keywords && content.keywords.length > 0) {
    html += secTitle('Key vocabulary', 'iii.')
    html += keywordRow(content.keywords)
  }

  // Resources
  if (content.resources && content.resources.length > 0) {
    html += secTitle('Resources needed', 'iv.')
    html += dashedList(content.resources)
  }

  // Homework
  if (content.homework) {
    html += secTitle('Homework', 'v.')
    html += paragraph(content.homework)
  }

  // Teacher notes
  if (content.teacherNotes && content.teacherNotes.length > 0) {
    html += callout('Teacher Notes', content.teacherNotes.map((n) => paragraph(n)).join(''))
  }

  return html
}

// ═══════════════════════════════════════════════════════════════════════════
//  6. Worksheet
// ═══════════════════════════════════════════════════════════════════════════

export function renderWorksheetBody(content: WorksheetContent): string {
  let html = ''

  // Instructions callout
  html += callout('Instructions', escHtml(content.instructions))

  // Name/date
  html += nameDateRow()

  // Questions
  html += content.questions
    .map((q, i) => {
      const typeLabel =
        q.type === 'short-answer'
          ? 'Short Answer'
          : q.type === 'extended-writing'
            ? 'Extended Writing'
            : q.type === 'multiple-choice'
              ? 'Multiple Choice'
              : 'Quote Analysis'

      let questionContent = ''

      if (q.sourceQuote) {
        questionContent += `<div class="callout" style="border-left-color:var(--ink-300);background:var(--cream-50);"><p style="font-style:italic;">"${escHtml(q.sourceQuote)}"</p></div>`
      }

      if (q.type === 'multiple-choice' && q.options) {
        questionContent += `<div style="margin:8px 0 4px 14px;">${q.options.map((opt, oi) => `<p style="margin:4px 0;font-size:10.5px;"><span style="font-family:var(--font-mono);font-size:9px;color:var(--clay-600);margin-right:8px;">${String.fromCharCode(65 + oi)}.</span> ${escHtml(opt)}</p>`).join('')}</div>`
      } else {
        const lines =
          q.lines || (q.type === 'extended-writing' ? 14 : q.type === 'quote-analysis' ? 10 : 5)
        questionContent += answerLines(lines)
      }

      return `
        <div style="margin-bottom:22px;page-break-inside:avoid;">
          <p style="font-weight:500;font-size:11.5px;margin-bottom:4px;">
            <span style="font-family:var(--font-serif);font-style:italic;color:var(--clay-600);margin-right:8px;">${i + 1}.</span>
            ${escHtml(q.question)}
            <span style="font-family:var(--font-mono);font-size:8px;color:var(--ink-500);letter-spacing:0.14em;text-transform:uppercase;margin-left:8px;">[${q.marks} mark${q.marks !== 1 ? 's' : ''} · ${typeLabel}]</span>
          </p>
          ${questionContent}
        </div>`
    })
    .join('')

  // Total
  html += `
    <div style="text-align:right;border-top:0.5px solid var(--ink-300);padding-top:10px;margin-top:14px;">
      <p style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink-600);">Total: _______ / ${content.totalMarks}</p>
    </div>`

  return html
}

// ═══════════════════════════════════════════════════════════════════════════
//  7. Mark Scheme
// ═══════════════════════════════════════════════════════════════════════════

export function renderMarkSchemeBody(content: MarkSchemeContent): string {
  let html = ''

  html += teacherWarning()

  html += content.answers
    .map((a) => {
      const miscHtml =
        a.commonMisconceptions && a.commonMisconceptions.length > 0
          ? callout(
              'Common Misconceptions',
              `<ul class="dashed" style="margin:0;">${a.commonMisconceptions.map((m) => `<li>${escHtml(m)}</li>`).join('')}</ul>`,
            )
          : ''

      return `
        <div style="margin-bottom:22px;page-break-inside:avoid;">
          ${secTitle(`Question ${a.questionNumber}`, '-')}
          <p style="font-style:italic;color:var(--ink-700);margin-bottom:8px;">${escHtml(a.question)}</p>
          <p style="font-family:var(--font-mono);font-size:8.5px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink-600);margin-bottom:4px;">
            ${escHtml(a.ao)} · ${a.marks} mark${a.marks !== 1 ? 's' : ''}
          </p>

          <p style="font-family:var(--font-mono);font-size:8.5px;letter-spacing:0.18em;text-transform:uppercase;color:var(--clay-600);margin:10px 0 4px;">Marking Criteria</p>
          ${dashedList(a.markingCriteria.map(escHtml))}

          ${gradeBands(a.exampleTop, a.exampleMid, a.exampleLower)}
          ${miscHtml}
        </div>`
    })
    .join('')

  return html
}

// ═══════════════════════════════════════════════════════════════════════════
//  8. Homework
// ═══════════════════════════════════════════════════════════════════════════

export function renderHomeworkBody(content: HomeworkContent): string {
  let html = ''

  // Instructions
  html += callout('Instructions', escHtml(content.instructions))

  // Success criteria
  html += callout(
    'Success Criteria',
    `<ul class="dashed" style="margin:0;">${content.successCriteria.map((s) => `<li>${escHtml(s)}</li>`).join('')}</ul>`,
  )

  // Name/date
  html += nameDateRow()

  // Questions
  html += content.questions
    .map(
      (q, i) => `
      <div style="margin-bottom:20px;page-break-inside:avoid;">
        <p style="font-weight:500;font-size:11.5px;margin-bottom:4px;">
          <span style="font-family:var(--font-serif);font-style:italic;color:var(--clay-600);margin-right:8px;">${i + 1}.</span>
          ${escHtml(q.question)}
          <span style="font-family:var(--font-mono);font-size:8px;color:var(--ink-500);letter-spacing:0.14em;text-transform:uppercase;margin-left:8px;">[${q.marks} mark${q.marks !== 1 ? 's' : ''}]</span>
        </p>
        ${answerLines(q.lines)}
      </div>`,
    )
    .join('')

  // Total
  html += `
    <div style="text-align:right;border-top:0.5px solid var(--ink-300);padding-top:10px;margin-top:14px;">
      <p style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink-600);">Total: _______ / ${content.totalMarks}</p>
    </div>`

  // Extension tasks
  if (content.extensionTasks.length > 0) {
    html += callout(
      'Extension Tasks · Higher Ability',
      `<ul class="dashed" style="margin:0;">${content.extensionTasks.map((t) => `<li>${escHtml(t)}</li>`).join('')}</ul>`,
    )
  }

  return html
}
