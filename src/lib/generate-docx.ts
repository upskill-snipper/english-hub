'use client'

/**
 * generate-docx.ts
 *
 * Generates Word-compatible .doc files from HTML content.
 * Word (and Google Docs) can open HTML files saved with a .doc extension.
 * This approach produces editable, professionally formatted documents
 * without requiring any server-side dependencies.
 */

// ─── Shared helpers ────────────────────────────────────────────────────────

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ─── Core download function ───────────────────────────────────────────────

/**
 * Generates a Word-compatible .doc file from HTML content and triggers
 * a download in the browser.
 */
export function downloadAsWord(title: string, htmlContent: string, fileName?: string) {
  const fullHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>${escHtml(title)}</title>
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <style>
        @page { size: A4; margin: 2cm; }
        body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #333; }
        h1 { font-size: 18pt; color: #1a365d; border-bottom: 2px solid #1a365d; padding-bottom: 6pt; margin-bottom: 12pt; }
        h2 { font-size: 14pt; color: #2d3748; margin-top: 18pt; margin-bottom: 8pt; }
        h3 { font-size: 12pt; color: #4a5568; margin-top: 14pt; margin-bottom: 6pt; }
        table { border-collapse: collapse; width: 100%; margin: 12pt 0; }
        th, td { border: 1px solid #cbd5e0; padding: 6pt 8pt; text-align: left; vertical-align: top; }
        th { background-color: #2563eb; color: #ffffff; font-weight: bold; font-size: 10pt; }
        tr:nth-child(even) td { background-color: #f7fafc; }
        .highlight { background-color: #fff5f5; padding: 8pt; border-left: 3px solid #e53e3e; margin: 8pt 0; }
        .tip { background-color: #f0fff4; padding: 8pt; border-left: 3px solid #38a169; margin: 8pt 0; }
        .info-box { background-color: #ebf8ff; padding: 8pt; border-left: 3px solid #3182ce; margin: 8pt 0; }
        .warning-box { background-color: #fffbeb; padding: 8pt; border-left: 3px solid #d97706; margin: 8pt 0; }
        ul, ol { margin-left: 20pt; margin-bottom: 8pt; }
        li { margin-bottom: 3pt; }
        .meta-grid { margin-bottom: 16pt; }
        .meta-grid td { border: 1px solid #e2e8f0; padding: 6pt 10pt; }
        .meta-grid td:first-child { font-weight: bold; background-color: #f0f4ff; width: 140pt; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5pt; color: #4a5568; }
        .brand-header { border-bottom: 3px solid #2563eb; padding-bottom: 8pt; margin-bottom: 20pt; }
        .brand-name { font-size: 14pt; font-weight: bold; color: #2563eb; }
        .brand-tagline { font-size: 9pt; color: #718096; }
        .activity-block { border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; padding: 10pt 14pt; margin-bottom: 12pt; background-color: #fafbff; }
        .activity-block.starter { border-left-color: #d97706; }
        .activity-block.plenary { border-left-color: #dc2626; }
        .activity-label { font-size: 8pt; text-transform: uppercase; letter-spacing: 1pt; font-weight: bold; padding: 2pt 8pt; display: inline-block; margin-bottom: 4pt; }
        .label-starter { background-color: #fef3c7; color: #92400e; }
        .label-main { background-color: #dbeafe; color: #1e40af; }
        .label-plenary { background-color: #fee2e2; color: #991b1b; }
        .diff-table { width: 100%; margin-top: 8pt; }
        .diff-table th { font-size: 9pt; padding: 4pt 8pt; font-weight: bold; }
        .diff-table td { font-size: 9pt; padding: 6pt 8pt; }
        .diff-table th.diff-support { background-color: #dbeafe; color: #1e40af; }
        .diff-table th.diff-core { background-color: #dcfce7; color: #166534; }
        .diff-table th.diff-stretch { background-color: #ede9fe; color: #5b21b6; }
        .diff-support td, td.diff-support { background-color: #eff6ff; }
        .diff-core td, td.diff-core { background-color: #f0fdf4; }
        .diff-stretch td, td.diff-stretch { background-color: #faf5ff; }
        .keyword-chip { display: inline-block; background-color: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 2pt 10pt; margin: 2pt 4pt 2pt 0; font-size: 9pt; }
        .quote-block { border-left: 3px solid #2563eb; padding: 8pt 14pt; margin: 8pt 0; background-color: #f8faff; }
        .quote-text { font-style: italic; font-size: 10.5pt; color: #1f2937; }
        .quote-speaker { font-size: 9pt; color: #2563eb; font-weight: bold; }
        .grade-box { border: 1px solid #d1d5db; padding: 8pt 12pt; margin-bottom: 8pt; }
        .grade-box.top { border-left: 4px solid #16a34a; }
        .grade-box.mid { border-left: 4px solid #f59e0b; }
        .grade-box.lower { border-left: 4px solid #ef4444; }
        .grade-label { font-size: 8pt; text-transform: uppercase; letter-spacing: 0.5pt; font-weight: bold; margin-bottom: 4pt; }
        .grade-box.top .grade-label { color: #16a34a; }
        .grade-box.mid .grade-label { color: #b45309; }
        .grade-box.lower .grade-label { color: #dc2626; }
        .answer-line { border-bottom: 1.5px solid #b0b8c4; height: 30pt; margin-bottom: 4pt; }
        .footer { margin-top: 24pt; padding-top: 8pt; border-top: 1px solid #e2e8f0; font-size: 9pt; color: #a0aec0; }
      </style>
    </head>
    <body>
      ${htmlContent}
      <div class="footer">
        <p>Generated by The English Hub &mdash; theenglishhub.app</p>
        <p>This document is editable in Microsoft Word and Google Docs.</p>
      </div>
    </body>
    </html>`

  const blob = new Blob(['\ufeff' + fullHtml], { type: 'application/msword' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = (fileName || title.replace(/[^a-zA-Z0-9]/g, '-')) + '.doc'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ─── Types ─────────────────────────────────────────────────────────────────

export interface WordLessonPlanData {
  title: string
  duration: string
  yearGroup: string
  examBoard: string
  text: string
  objectives: string[]
  starterActivity: {
    title: string
    duration: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }
  mainActivities: {
    title: string
    duration: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }[]
  plenary: {
    title: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }
  keyVocabulary: string[]
  resourcesNeeded: string[]
  homework?: string
  teacherNotes?: string[]
}

export interface WordWorksheetQuestion {
  question: string
  type: 'short-answer' | 'extended-writing' | 'multiple-choice' | 'quote-analysis'
  marks: number
  lines?: number
  options?: string[]
  sourceQuote?: string
}

export interface WordMarkSchemeAnswer {
  questionNumber: number
  question: string
  marks: number
  ao: string
  markingCriteria: string[]
  exampleTop: string
  exampleMid: string
  exampleLower: string
  commonMisconceptions: string[]
}

// ═══════════════════════════════════════════════════════════════════════════
//  1. LESSON PLAN — Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateLessonPlanWord(topic: string, data: WordLessonPlanData): void {
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const diffHtml = (d?: { support: string; core: string; stretch: string }) => {
    if (!d) return ''
    return `
      <table class="diff-table">
        <tr>
          <th class="diff-support">Scaffold / Support</th>
          <th class="diff-core">Core</th>
          <th class="diff-stretch">Stretch / Challenge</th>
        </tr>
        <tr>
          <td class="diff-support">${escHtml(d.support)}</td>
          <td class="diff-core">${escHtml(d.core)}</td>
          <td class="diff-stretch">${escHtml(d.stretch)}</td>
        </tr>
      </table>`
  }

  const mainActivitiesHtml = data.mainActivities
    .map(
      (act, i) => `
    <div class="activity-block">
      <span class="activity-label label-main">Main Activity ${i + 1}</span>
      <strong>${escHtml(act.title)}</strong>
      <span style="float:right;font-size:9pt;color:#718096;">${escHtml(act.duration)}</span>
      <p style="margin-top:6pt;">${escHtml(act.instructions)}</p>
      ${diffHtml(act.differentiation)}
    </div>`,
    )
    .join('')

  const htmlContent = `
    <div class="brand-header">
      <div class="brand-name">The English Hub</div>
      <div class="brand-tagline">theenglishhub.app &mdash; ${escHtml(dateStr)}</div>
    </div>

    <h1>${escHtml(data.title)}</h1>
    <p style="font-size:10pt;color:#718096;margin-bottom:14pt;">${escHtml(topic)} &mdash; Lesson Plan</p>

    <table class="meta-grid">
      <tr><td>Text</td><td>${escHtml(data.text)}</td></tr>
      <tr><td>Year Group</td><td>${escHtml(data.yearGroup)}</td></tr>
      <tr><td>Exam Board</td><td>${escHtml(data.examBoard)}</td></tr>
      <tr><td>Duration</td><td>${escHtml(data.duration)}</td></tr>
    </table>

    <h2>Learning Objectives</h2>
    <ol>
      ${data.objectives.map((o) => `<li>${escHtml(o)}</li>`).join('')}
    </ol>

    <h2>Lesson Outline</h2>

    <div class="activity-block starter">
      <span class="activity-label label-starter">Starter</span>
      <strong>${escHtml(data.starterActivity.title)}</strong>
      <span style="float:right;font-size:9pt;color:#718096;">${escHtml(data.starterActivity.duration)}</span>
      <p style="margin-top:6pt;">${escHtml(data.starterActivity.instructions)}</p>
      ${diffHtml(data.starterActivity.differentiation)}
    </div>

    ${mainActivitiesHtml}

    <div class="activity-block plenary">
      <span class="activity-label label-plenary">Plenary / AFL</span>
      <strong>${escHtml(data.plenary.title)}</strong>
      <p style="margin-top:6pt;">${escHtml(data.plenary.instructions)}</p>
      ${diffHtml(data.plenary.differentiation)}
    </div>

    <h2>Key Vocabulary</h2>
    <p>${data.keyVocabulary.map((kw) => `<span class="keyword-chip">${escHtml(kw)}</span>`).join(' ')}</p>

    <h2>Resources Needed</h2>
    <ul>
      ${data.resourcesNeeded.map((r) => `<li>${escHtml(r)}</li>`).join('')}
    </ul>

    ${data.homework ? `<h2>Homework</h2><p>${escHtml(data.homework)}</p>` : ''}

    ${
      data.teacherNotes && data.teacherNotes.length > 0
        ? `<h2>Teacher Notes</h2><ul>${data.teacherNotes.map((n) => `<li>${escHtml(n)}</li>`).join('')}</ul>`
        : ''
    }
  `

  downloadAsWord(data.title, htmlContent, `Lesson-Plan-${topic.replace(/[^a-zA-Z0-9]/g, '-')}`)
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. WORKSHEET — Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateWorksheetWord(
  topic: string,
  meta: { title: string; instructions: string; text: string; yearGroup: string; examBoard: string },
  questions: WordWorksheetQuestion[],
): void {
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const totalMarks = questions.reduce((s, q) => s + q.marks, 0)

  const questionsHtml = questions
    .map((q, i) => {
      let questionContent = ''

      if (q.sourceQuote) {
        questionContent += `<div class="quote-block"><p class="quote-text">&ldquo;${escHtml(q.sourceQuote)}&rdquo;</p></div>`
      }

      if (q.type === 'multiple-choice' && q.options) {
        questionContent += `<div style="margin:6pt 0 4pt 20pt;">${q.options.map((opt, oi) => `<p style="margin:3pt 0;font-size:10pt;"><strong>${String.fromCharCode(65 + oi)}.</strong> ${escHtml(opt)}</p>`).join('')}</div>`
      } else {
        const lines = q.lines || (q.type === 'extended-writing' ? 14 : q.type === 'quote-analysis' ? 10 : 5)
        questionContent += `<div style="margin:10pt 0 6pt 0;">${Array.from({ length: lines }, () => '<div class="answer-line"></div>').join('')}</div>`
      }

      const typeLabel =
        q.type === 'short-answer'
          ? 'Short Answer'
          : q.type === 'extended-writing'
            ? 'Extended Writing'
            : q.type === 'multiple-choice'
              ? 'Multiple Choice'
              : 'Quote Analysis'

      return `
        <div style="margin-bottom:24pt;">
          <p style="font-weight:bold;font-size:10.5pt;">
            <span style="color:#2563eb;font-weight:bold;margin-right:8pt;">${i + 1}.</span>
            ${escHtml(q.question)}
            <span style="font-size:8pt;color:#718096;font-weight:normal;margin-left:8pt;">[${q.marks} mark${q.marks !== 1 ? 's' : ''} &mdash; ${typeLabel}]</span>
          </p>
          ${questionContent}
        </div>`
    })
    .join('')

  const htmlContent = `
    <div class="brand-header">
      <div class="brand-name">The English Hub</div>
      <div class="brand-tagline">theenglishhub.app &mdash; ${escHtml(dateStr)}</div>
    </div>

    <h1>${escHtml(meta.title)}</h1>
    <p style="font-size:10pt;color:#718096;margin-bottom:14pt;">${escHtml(topic)} &mdash; Student Worksheet</p>

    <table class="meta-grid">
      <tr><td>Text</td><td>${escHtml(meta.text)}</td></tr>
      <tr><td>Year Group</td><td>${escHtml(meta.yearGroup)}</td></tr>
      <tr><td>Exam Board</td><td>${escHtml(meta.examBoard)}</td></tr>
      <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
    </table>

    <div class="info-box">
      <p style="font-weight:bold;font-size:10pt;color:#1e40af;margin-bottom:3pt;">Instructions</p>
      <p style="font-size:9.5pt;">${escHtml(meta.instructions)}</p>
    </div>

    <table style="margin-bottom:16pt;border:none;">
      <tr>
        <td style="border:none;font-size:10pt;"><strong>Name:</strong> ________________________________________</td>
        <td style="border:none;font-size:10pt;"><strong>Date:</strong> ____________________</td>
      </tr>
    </table>

    ${questionsHtml}

    <table style="background-color:#f9fafb;margin-top:16pt;">
      <tr><td style="text-align:right;font-weight:bold;font-size:10pt;">Total: _______ / ${totalMarks}</td></tr>
    </table>
  `

  downloadAsWord(meta.title, htmlContent, `Worksheet-${topic.replace(/[^a-zA-Z0-9]/g, '-')}`)
}

// ═══════════════════════════════════════════════════════════════════════════
//  3. MARK SCHEME — Word download
// ═══════════════════════════════════════════════════════════════════════════

export function generateMarkSchemeWord(
  topic: string,
  meta: { title: string; text: string; yearGroup: string; examBoard: string },
  answers: WordMarkSchemeAnswer[],
): void {
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const totalMarks = answers.reduce((s, a) => s + a.marks, 0)

  const answersHtml = answers
    .map(
      (a) => `
    <div style="margin-bottom:20pt;">
      <h3>
        <span style="color:#2563eb;">Question ${a.questionNumber}</span>
        <span style="font-size:9pt;color:#718096;margin-left:8pt;">[${a.marks} mark${a.marks !== 1 ? 's' : ''}]</span>
        <span style="font-size:8pt;background-color:#eff6ff;color:#1e40af;padding:2pt 8pt;margin-left:8pt;font-weight:bold;">${escHtml(a.ao)}</span>
      </h3>
      <p style="font-size:10pt;font-style:italic;color:#4b5563;margin-bottom:8pt;">${escHtml(a.question)}</p>

      <p style="font-size:9pt;font-weight:bold;margin-bottom:4pt;">Marking Criteria:</p>
      <ul>
        ${a.markingCriteria.map((c) => `<li style="font-size:9pt;">${escHtml(c)}</li>`).join('')}
      </ul>

      <div class="grade-box top">
        <p class="grade-label">Top Band (Grade 7-9 / Level 6)</p>
        <p style="font-size:9pt;">${escHtml(a.exampleTop)}</p>
      </div>
      <div class="grade-box mid">
        <p class="grade-label">Mid Band (Grade 4-6 / Level 4)</p>
        <p style="font-size:9pt;">${escHtml(a.exampleMid)}</p>
      </div>
      <div class="grade-box lower">
        <p class="grade-label">Lower Band (Grade 1-3 / Level 2)</p>
        <p style="font-size:9pt;">${escHtml(a.exampleLower)}</p>
      </div>

      ${
        a.commonMisconceptions.length > 0
          ? `<div class="warning-box">
              <p style="font-size:8pt;font-weight:bold;text-transform:uppercase;color:#92400e;margin-bottom:4pt;">Common Misconceptions</p>
              <ul style="margin:0;padding-left:16pt;">${a.commonMisconceptions.map((m) => `<li style="font-size:9pt;color:#78350f;">${escHtml(m)}</li>`).join('')}</ul>
            </div>`
          : ''
      }
    </div>`,
    )
    .join('')

  const htmlContent = `
    <div class="brand-header">
      <div class="brand-name">The English Hub</div>
      <div class="brand-tagline">theenglishhub.app &mdash; ${escHtml(dateStr)}</div>
    </div>

    <h1>${escHtml(meta.title)}</h1>
    <p style="font-size:10pt;color:#718096;margin-bottom:14pt;">${escHtml(topic)} &mdash; Mark Scheme (Teacher Copy)</p>

    <table class="meta-grid">
      <tr><td>Text</td><td>${escHtml(meta.text)}</td></tr>
      <tr><td>Year Group</td><td>${escHtml(meta.yearGroup)}</td></tr>
      <tr><td>Exam Board</td><td>${escHtml(meta.examBoard)}</td></tr>
      <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
    </table>

    <div class="highlight">
      <p style="font-weight:bold;color:#991b1b;">&#128274; TEACHER COPY &mdash; DO NOT DISTRIBUTE TO STUDENTS</p>
    </div>

    ${answersHtml}
  `

  downloadAsWord(meta.title, htmlContent, `Mark-Scheme-${topic.replace(/[^a-zA-Z0-9]/g, '-')}`)
}

// ═══════════════════════════════════════════════════════════════════════════
//  4. HOMEWORK ASSIGNMENT — Word download
// ═══════════════════════════════════════════════════════════════════════════

export interface WordHomeworkData {
  title: string
  topic: string
  homeworkType: string
  yearGroup: string
  targetGrade: string
  estimatedTime: string
  instructions: string
  questions: { question: string; marks: number; lines: number; modelAnswer?: string }[]
  successCriteria: string[]
  extensionTasks: string[]
  markScheme: string[]
}

export function generateHomeworkWord(data: WordHomeworkData): void {
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const totalMarks = data.questions.reduce((s, q) => s + q.marks, 0)

  const questionsHtml = data.questions
    .map(
      (q, i) => `
      <div style="margin-bottom:18pt;page-break-inside:avoid;">
        <p style="font-weight:bold;font-size:10.5pt;margin-bottom:4pt;">
          <span style="color:#2563eb;margin-right:6pt;">${i + 1}.</span>
          ${escHtml(q.question)}
          <span style="font-size:8pt;color:#6b7280;font-weight:normal;margin-left:8pt;">[${q.marks} mark${q.marks !== 1 ? 's' : ''}]</span>
        </p>
        <div>${Array.from({ length: q.lines }, () => '<div class="answer-line"></div>').join('')}</div>
      </div>`,
    )
    .join('')

  const htmlContent = `
    <div class="brand-header">
      <div class="brand-name">The English Hub</div>
      <div class="brand-tagline">theenglishhub.app &mdash; ${escHtml(dateStr)}</div>
    </div>

    <h1>${escHtml(data.title)}</h1>
    <p style="font-size:10pt;color:#718096;margin-bottom:14pt;">${escHtml(data.topic)} &mdash; ${escHtml(data.homeworkType)}</p>

    <table class="meta-grid">
      <tr><td>Topic</td><td>${escHtml(data.topic)}</td></tr>
      <tr><td>Year Group</td><td>${escHtml(data.yearGroup)}</td></tr>
      <tr><td>Target Grade</td><td>${escHtml(data.targetGrade)}</td></tr>
      <tr><td>Est. Time</td><td>${escHtml(data.estimatedTime)}</td></tr>
      <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
    </table>

    <div class="info-box">
      <p style="font-weight:bold;margin-bottom:4pt;">Instructions</p>
      <p>${escHtml(data.instructions)}</p>
    </div>

    <div class="tip">
      <p style="font-weight:bold;margin-bottom:4pt;">Success Criteria</p>
      <ul>${data.successCriteria.map((s) => `<li>${escHtml(s)}</li>`).join('')}</ul>
    </div>

    <p style="margin-bottom:14pt;"><strong>Name:</strong> _______________________________ &nbsp; <strong>Date:</strong> _______________</p>

    ${questionsHtml}

    <div style="text-align:right;border-top:1px solid #e2e8f0;padding-top:8pt;margin-top:16pt;">
      <p style="font-weight:bold;">Total: _______ / ${totalMarks}</p>
    </div>

    <div style="margin-top:16pt;background-color:#faf5ff;padding:10pt 14pt;border-left:4px solid #7c3aed;">
      <p style="font-weight:bold;color:#5b21b6;margin-bottom:4pt;">Extension Tasks (Higher Ability)</p>
      <ul>${data.extensionTasks.map((t) => `<li>${escHtml(t)}</li>`).join('')}</ul>
    </div>
  `

  downloadAsWord(data.title, htmlContent, `Homework-${data.topic.replace(/[^a-zA-Z0-9]/g, '-')}`)
}
